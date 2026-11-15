import { DurableObject } from "cloudflare:workers";

// Crewmark's push channel, so nobody needs to keep asking Crewmark whether anything happened (which kept its database
// awake around the clock). Sockets go through the Durable Object of their organization:
//   - the crewmark daemon on someone's computer keeps one open per employee it runs, and hears when the employee has
//     events for its agent or new heartbeat settings;
//   - the dashboard keeps one open per browser tab, and hears when an issue's Activity changed.
// The web app tells the organization's object, which says so down the sockets concerned, and they fetch what's new
// from the web app as themselves. Only the kind of news goes through here, never its content. Sockets hibernate while
// idle and pings are answered without waking the object, so an open socket costs next to nothing.
//
// The one exception is an employee's work (MC-186): while someone has it open in the dashboard, the object relays
// between their tab and the employee's daemon, which reads the conversation on its computer. The tab says
// {type: "worklog.watch", employeeId}, "worklog.unwatch" or {type: "worklog.more", employeeId, before}; the daemon
// hears {type: "worklog.watch", watching} when the first tab starts watching and the last one stops, and the
// "worklog.more" requests; what it sends back ("worklog" pages and turns, "worklog.unavailable") goes to the tabs
// watching it, with the employeeId added. A tab whose employee has no daemon connected hears "worklog.offline".
// None of it is kept.
//
//   GET  /connect?token=…  a socket; the token comes from the web app (/api/agent/realtime for daemons, an action for
//                          the dashboard)
//   POST /notify           the web app: {organizationId, kind, employeeIds} for daemons, or {organizationId, kind:
//                          "activity", issueId} or {organizationId, kind: "messages"} for the dashboard, with
//                          Authorization: Bearer REALTIME_SECRET
//   POST /schedule         the web app: {organizationId, at} sets the organization's timer to when its next repeating
//                          issue comes round (ISO time; null for none). Then the object calls the web app's
//                          POST /api/realtime/recur with the same secret, and sets the timer to the next time it answers.

interface Env {
  ORGANIZATIONS: DurableObjectNamespace<Organization>;
  /** Shared with the web app: it signs connect tokens and authorizes /notify, /schedule and the timer's calls. */
  REALTIME_SECRET: string;
  /** The web app, e.g. https://crewmark.ai, which the timer calls. */
  APP_URL: string;
}

/** How long the timer waits to try again when the web app didn't answer. */
const RETRY_MS = 5 * 60_000;

/** The soonest the timer goes off again, so a time the web app keeps answering can't make it spin. */
const MIN_WAIT_MS = 60_000;

/** What a daemon is told: new events for its agent, or new heartbeat settings. */
const DAEMON_KINDS = ["events", "heartbeat"];

/** The tag of the dashboard's sockets: every member's tab hears about every issue, as they can all see them. */
const PEOPLE = "people";

export class Organization extends DurableObject<Env> {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    // Daemons ping to keep the socket open and find out when it isn't; answered while the object hibernates.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair("ping", "pong"));
  }

  /** A socket, tagged with what it hears about: one employee's news (a daemon's), or the people's (a dashboard's). */
  async fetch(request: Request) {
    const tag = new URL(request.url).searchParams.get("tag");
    if (!tag) return new Response("No tag", { status: 400 });
    const [client, server] = Object.values(new WebSocketPair());
    this.ctx.acceptWebSocket(server, [tag]);
    // A daemon back after a drop picks up where it was, if someone is watching its employee's work.
    if (tag !== PEOPLE && this.watchers(tag).length > 0) server.send(JSON.stringify({ type: "worklog.watch", watching: true }));
    return new Response(null, { status: 101, webSocket: client });
  }

  /** Tells the employees' daemons there's news of this kind; how many sockets were told. */
  notify(employeeIds: string[], kind: string) {
    return [...new Set(employeeIds)].reduce((told, id) => told + this.send(id, { type: kind }), 0);
  }

  /** Tells the dashboard's tabs that the issue's Activity changed. */
  notifyActivity(issueId: string) {
    return this.send(PEOPLE, { type: "activity", issueId });
  }

  /** Tells the dashboard's tabs that a direct conversation changed; each fetches its own person's. */
  notifyMessages() {
    return this.send(PEOPLE, { type: "messages" });
  }

  /** Sets the timer for the organization's repeating issues to `at` (ms), or clears it. */
  async schedule(organizationId: string, at: number | null) {
    await this.ctx.storage.put("organizationId", organizationId);
    if (at === null) await this.ctx.storage.deleteAlarm();
    else await this.ctx.storage.setAlarm(at);
  }

  /** The timer: the web app handles the issues that came round and says when the next one does. */
  async alarm() {
    const organizationId = await this.ctx.storage.get<string>("organizationId");
    if (!organizationId) return;
    try {
      const response = await fetch(`${this.env.APP_URL.replace(/\/$/, "")}/api/realtime/recur`, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.env.REALTIME_SECRET}`, "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId }),
      });
      if (!response.ok) throw new Error(`The web app answered ${response.status}`);
      const { next } = (await response.json()) as { next: string | null };
      if (next) await this.ctx.storage.setAlarm(Math.max(Date.parse(next), Date.now() + MIN_WAIT_MS));
    } catch (error) {
      console.error("Repeating issues: couldn't reach the web app", error);
      await this.ctx.storage.setAlarm(Date.now() + RETRY_MS);
    }
  }

  private send(tag: string, message: object) {
    const text = JSON.stringify(message);
    let told = 0;
    for (const socket of this.ctx.getWebSockets(tag)) {
      try {
        socket.send(text);
        told++;
      } catch {
        // Closing as we speak; it catches up when it reconnects.
      }
    }
    return told;
  }

  /** Messages about an employee's work, from a dashboard tab or a daemon; pings never get here. */
  webSocketMessage(socket: WebSocket, message: string | ArrayBuffer) {
    if (typeof message !== "string" || !message.startsWith("{")) return;
    let data: { type?: unknown; employeeId?: unknown; before?: unknown };
    try {
      data = JSON.parse(message);
    } catch {
      return;
    }
    const [tag] = this.ctx.getTags(socket);
    if (tag === PEOPLE) this.fromTab(socket, data);
    else if (typeof data.type === "string" && data.type.startsWith("worklog")) {
      this.toWatchers(tag, { ...data, employeeId: tag });
    }
  }

  /** A tab that closes stops watching. */
  webSocketClose(socket: WebSocket) {
    const [tag] = this.ctx.getTags(socket);
    if (tag === PEOPLE) this.unwatch(socket);
    else if (this.ctx.getWebSockets(tag).length === 0) this.toWatchers(tag, { type: "worklog.offline", employeeId: tag });
  }

  private fromTab(socket: WebSocket, data: { type?: unknown; employeeId?: unknown; before?: unknown }) {
    if (data.type === "worklog.unwatch") return this.unwatch(socket);
    // Daemons' tags are employee ids; anything else is no employee of this organization's and simply has no daemon.
    if (typeof data.employeeId !== "string" || data.employeeId === PEOPLE) return;
    const employeeId = data.employeeId;
    if (data.type === "worklog.watch") {
      this.unwatch(socket);
      socket.serializeAttachment({ watching: employeeId });
      // Each new watcher gets the latest page: the daemon sends it again to everyone watching.
      if (!this.send(employeeId, { type: "worklog.watch", watching: true })) {
        socket.send(JSON.stringify({ type: "worklog.offline", employeeId }));
      }
    } else if (data.type === "worklog.more" && typeof data.before === "number") {
      if (!this.send(employeeId, { type: "worklog.more", before: data.before })) {
        socket.send(JSON.stringify({ type: "worklog.offline", employeeId }));
      }
    }
  }

  /** The tab no longer watches; the last one to stop tells the daemon. */
  private unwatch(socket: WebSocket) {
    const watching = (socket.deserializeAttachment() as { watching?: string } | null)?.watching;
    if (!watching) return;
    socket.serializeAttachment(null);
    if (this.watchers(watching).length === 0) this.send(watching, { type: "worklog.watch", watching: false });
  }

  /** The dashboard tabs watching the employee's work. */
  private watchers(employeeId: string) {
    return this.ctx
      .getWebSockets(PEOPLE)
      .filter((socket) => (socket.deserializeAttachment() as { watching?: string } | null)?.watching === employeeId);
  }

  private toWatchers(employeeId: string, message: object) {
    const text = JSON.stringify(message);
    for (const socket of this.watchers(employeeId)) {
      try {
        socket.send(text);
      } catch {
        // Closing as we speak.
      }
    }
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") return new Response("Crewmark realtime");
    // Without the secret anyone could sign tokens and notify: refuse everything until it's set.
    if (!env.REALTIME_SECRET) return new Response("REALTIME_SECRET isn't set", { status: 500 });
    if (url.pathname === "/connect") {
      if (request.headers.get("Upgrade") !== "websocket") return new Response("Expected a WebSocket", { status: 426 });
      const claims = await verifyToken(url.searchParams.get("token") ?? "", env.REALTIME_SECRET);
      if (!claims) return new Response("Invalid or expired token", { status: 401 });
      const target = new URL(request.url);
      target.search = new URLSearchParams({ tag: claims.e ?? PEOPLE }).toString();
      return env.ORGANIZATIONS.getByName(claims.o).fetch(new Request(target, request));
    }
    if (url.pathname === "/schedule" && request.method === "POST") {
      if (!(await sameSecret(request.headers.get("Authorization") ?? "", `Bearer ${env.REALTIME_SECRET}`))) {
        return new Response("Unauthorized", { status: 401 });
      }
      const body = (await request.json().catch(() => null)) as { organizationId?: unknown; at?: unknown } | null;
      const at = typeof body?.at === "string" ? Date.parse(body.at) : body?.at === null ? null : NaN;
      if (typeof body?.organizationId !== "string" || Number.isNaN(at)) {
        return new Response("Expected {organizationId, at}: an ISO time, or null", { status: 400 });
      }
      await env.ORGANIZATIONS.getByName(body.organizationId).schedule(body.organizationId, at);
      return Response.json({ scheduled: at === null ? null : new Date(at).toISOString() });
    }
    if (url.pathname === "/notify" && request.method === "POST") {
      if (!(await sameSecret(request.headers.get("Authorization") ?? "", `Bearer ${env.REALTIME_SECRET}`))) {
        return new Response("Unauthorized", { status: 401 });
      }
      const body = (await request.json().catch(() => null)) as {
        organizationId?: unknown;
        kind?: unknown;
        employeeIds?: unknown;
        issueId?: unknown;
      } | null;
      if (typeof body?.organizationId !== "string") return new Response("Expected an organizationId", { status: 400 });
      const organization = env.ORGANIZATIONS.getByName(body.organizationId);
      const { kind, employeeIds, issueId } = body;
      if (kind === "activity" && typeof issueId === "string") {
        return Response.json({ told: await organization.notifyActivity(issueId) });
      }
      if (kind === "messages") return Response.json({ told: await organization.notifyMessages() });
      if (
        typeof kind === "string" &&
        DAEMON_KINDS.includes(kind) &&
        Array.isArray(employeeIds) &&
        employeeIds.every((id) => typeof id === "string")
      ) {
        return Response.json({ told: await organization.notify(employeeIds, kind) });
      }
      return new Response("Expected {organizationId, kind, employeeIds}, {organizationId, kind: activity, issueId} or {organizationId, kind: messages}", {
        status: 400,
      });
    }
    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;

/** A connect token's claims: organization, the employee for a daemon (none for the dashboard), when it expires (seconds). */
interface Claims {
  o: string;
  e?: string;
  x: number;
}

const encoder = new TextEncoder();

function hmacKey(secret: string) {
  return crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);
}

function fromBase64Url(text: string) {
  const base64 = text.replace(/-/g, "+").replace(/_/g, "/");
  return Uint8Array.from(atob(base64 + "=".repeat((4 - (base64.length % 4)) % 4)), (c) => c.charCodeAt(0));
}

/**
 * The claims of a token the web app signed (src/lib/realtime.ts): base64url JSON claims, a dot, and the base64url
 * HMAC-SHA256 of "connect." + the claims. Null unless it's genuine and unexpired.
 */
async function verifyToken(token: string, secret: string): Promise<Claims | null> {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  let valid = false;
  try {
    valid = await crypto.subtle.verify(
      "HMAC",
      await hmacKey(secret),
      fromBase64Url(signature),
      encoder.encode(`connect.${payload}`),
    );
  } catch {
    return null;
  }
  if (!valid) return null;
  try {
    const claims = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as Claims;
    if (typeof claims.o !== "string" || typeof claims.x !== "number") return null;
    if (claims.e !== undefined && typeof claims.e !== "string") return null;
    return claims.x > Date.now() / 1000 ? claims : null;
  } catch {
    return null;
  }
}

/** Compares two strings in constant time, by comparing their HMACs. */
async function sameSecret(a: string, b: string) {
  const key = await hmacKey("compare");
  const [x, y] = await Promise.all([a, b].map((s) => crypto.subtle.sign("HMAC", key, encoder.encode(s))));
  return crypto.subtle.timingSafeEqual(x, y);
}
