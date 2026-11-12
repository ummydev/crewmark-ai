import { DurableObject } from "cloudflare:workers";

// Crewmark's push channel to the crewmark daemons on people's computers, so they needn't keep asking Crewmark whether
// anything happened (which kept its database awake around the clock). A daemon keeps a WebSocket open here for each
// employee it runs, through the Durable Object of the employee's organization. When something on Crewmark concerns an
// employee (an event for its agent, new heartbeat settings), the web app tells the organization's object, which says
// so down that employee's sockets, and the daemon fetches what's new with its API key. Only the kind of news goes
// through here, never its content. Sockets hibernate while idle and pings are answered without waking the object, so
// an idle daemon costs next to nothing.
//
//   GET  /connect?token=…  a daemon's WebSocket; the token comes from the web app's /api/agent/realtime
//   POST /notify           the web app: {organizationId, employeeIds, kind}, with Authorization: Bearer REALTIME_SECRET

interface Env {
  ORGANIZATIONS: DurableObjectNamespace<Organization>;
  /** Shared with the web app: it signs connect tokens and authorizes /notify. */
  REALTIME_SECRET: string;
}

/** What a daemon is told: new events for its agent, or new heartbeat settings. */
const KINDS = ["events", "heartbeat"];

export class Organization extends DurableObject<Env> {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    // Daemons ping to keep the socket open and find out when it isn't; answered while the object hibernates.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair("ping", "pong"));
  }

  /** A daemon's socket for one employee, tagged with it so notify finds it. */
  async fetch(request: Request) {
    const employeeId = new URL(request.url).searchParams.get("employee");
    if (!employeeId) return new Response("No employee", { status: 400 });
    const [client, server] = Object.values(new WebSocketPair());
    this.ctx.acceptWebSocket(server, [employeeId]);
    return new Response(null, { status: 101, webSocket: client });
  }

  /** Tells the employees' daemons there's news of this kind; how many sockets were told. */
  notify(employeeIds: string[], kind: string) {
    const message = JSON.stringify({ type: kind });
    let told = 0;
    for (const employeeId of new Set(employeeIds)) {
      for (const socket of this.ctx.getWebSockets(employeeId)) {
        try {
          socket.send(message);
          told++;
        } catch {
          // Closing as we speak; the daemon catches up when it reconnects.
        }
      }
    }
    return told;
  }

  // Daemons send nothing but pings, which never get here.
  webSocketMessage() {}
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
      target.search = new URLSearchParams({ employee: claims.e }).toString();
      return env.ORGANIZATIONS.getByName(claims.o).fetch(new Request(target, request));
    }
    if (url.pathname === "/notify" && request.method === "POST") {
      if (!(await sameSecret(request.headers.get("Authorization") ?? "", `Bearer ${env.REALTIME_SECRET}`))) {
        return new Response("Unauthorized", { status: 401 });
      }
      const body = (await request.json().catch(() => null)) as {
        organizationId?: unknown;
        employeeIds?: unknown;
        kind?: unknown;
      } | null;
      const employeeIds = body?.employeeIds;
      if (
        typeof body?.organizationId !== "string" ||
        !Array.isArray(employeeIds) ||
        !employeeIds.every((id) => typeof id === "string") ||
        typeof body.kind !== "string" ||
        !KINDS.includes(body.kind)
      ) {
        return new Response("Expected {organizationId, employeeIds, kind}", { status: 400 });
      }
      const told = await env.ORGANIZATIONS.getByName(body.organizationId).notify(employeeIds, body.kind);
      return Response.json({ told });
    }
    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;

/** A connect token's claims: organization, employee, and when it expires (seconds). */
interface Claims {
  o: string;
  e: string;
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
    if (typeof claims.o !== "string" || typeof claims.e !== "string" || typeof claims.x !== "number") return null;
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
