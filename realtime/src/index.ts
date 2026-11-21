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
// {type: "worklog.watch", employeeId, pageTurns?}, "worklog.unwatch" or {type: "worklog.more", employeeId, before, pageTurns?}; the daemon
// hears {type: "worklog.watch", watching} when the first tab starts watching and the last one stops, and the
// "worklog.more" requests; what it sends back ("worklog" pages and turns, "worklog.unavailable") goes to the tabs
// watching it, with the employeeId added. A tab whose employee has no daemon connected hears "worklog.offline".
// The list of conversations (MC-277) says "worklog.latest": every daemon connected hears it and answers with a short
// copy of its latest turns, which goes to every tab, with the employeeId added. None of it is kept.
//
// The pictures and videos an employee sends the person show in its work the same way (MC-287): the browser asks for
// one at GET /file, the object asks the employee's daemon ({type: "file.read", id, file, range}), and the daemon
// answers with a "file.head" (status, type, size, the bytes that follow), the bytes in binary pieces (the read's id,
// its length in the first byte, then bytes) and a "file.end". The object passes the pieces on to the browser as they
// come and says "file.ack" for each once the browser has taken it, so the daemon never has more than a few on their
// way; "file.cancel" when the browser stops wanting it. Nothing of the file is kept.
//
// A daemon's sockets are also its computer's (MC-292): the web app puts the computer in the daemon's token, and each
// socket is tagged with it as well as the employee. The web app asks which computers are online (POST /devices), and
// has one start an employee (POST /start): the object says {type: "employee.start", id, start} down one of that
// computer's sockets, and waits for the daemon's {type: "employee.started", id, ok, error}.
//
//   GET  /connect?token=…  a socket; the token comes from the web app (/api/agent/realtime for daemons, an action for
//                          the dashboard)
//   GET  /file?token=…&employee=…&file=…
//                          a file the employee sent the person, for the dashboard (the token from an action, a "file."
//                          one), answered as a static file would be: Range requests get 206
//   POST /notify           the web app: {organizationId, kind, employeeIds} for daemons, or {organizationId, kind:
//                          "activity", issueId} or {organizationId, kind: "messages"} for the dashboard, with
//                          Authorization: Bearer REALTIME_SECRET
//   POST /devices          the web app: {organizationId} → {online: [computer ids]}, with the same secret
//   POST /start            the web app: {organizationId, deviceId, start} → {ok, error}, once the daemon has answered
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

/** What tags a computer's sockets: "device:" and its id. */
const DEVICE = "device:";

/**
 * What tags a computer's own socket (MC-421): its daemon keeps one open with the person's CLI login, before any
 * employee works there, so Crewmark can start the first one. It hears nothing but starts.
 */
const COMPUTER = "computer:";

/** How long the web app waits for a computer to start an employee: it signs it in and starts the agent first. */
const START_ANSWER_MS = 60_000;

/** How long a start waits on one of the computer's sockets before it's sent down the next. */
const START_RETRY_MS = 15_000;

/** How long a browser waits for the employee's computer to start answering for a file. */
const FILE_ANSWER_MS = 15_000;

/** The daemon's answer to a file read, before the bytes (cli/worklog_files.go). */
interface FileHead {
  type: "file.head";
  id: string;
  status: number;
  contentType?: string;
  name?: string;
  size: number;
  start: number;
  end: number;
}

/** A file being read for a browser: whose computer has it, and where its bytes go once the daemon has answered. */
interface FileRead {
  employeeId: string;
  answered: (head: FileHead | null) => void;
  body?: ReadableStream<Uint8Array>;
  writer?: WritableStreamDefaultWriter<Uint8Array>;
}

export class Organization extends DurableObject<Env> {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    // Daemons ping to keep the socket open and find out when it isn't; answered while the object hibernates.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair("ping", "pong"));
  }

  /** Files being read for browsers, by the read's id; only while this object is awake, which a read keeps it. */
  private reads = new Map<string, FileRead>();

  /** Employees being started on computers, by the start's id: the computer, and who waits for its answer. */
  private starts = new Map<string, { deviceId: string; answered: (answer: { ok: boolean; error?: string }) => void }>();

  /** A socket, tagged with what it hears about: one employee's news (a daemon's), or the people's (a dashboard's). */
  async fetch(request: Request) {
    if (new URL(request.url).pathname === "/file") return this.file(request);
    const tag = new URL(request.url).searchParams.get("tag");
    if (!tag || tag.startsWith(DEVICE)) return new Response("No tag", { status: 400 });
    const device = tag === PEOPLE ? null : new URL(request.url).searchParams.get("device");
    const [client, server] = Object.values(new WebSocketPair());
    // The employee's tag comes first: it's what the socket is.
    this.ctx.acceptWebSocket(server, device ? [tag, DEVICE + device] : [tag]);
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

  /** The computers whose daemons are connected. */
  onlineDevices() {
    const tags = this.ctx.getWebSockets().flatMap((socket) => this.ctx.getTags(socket));
    return [...new Set(tags.filter((tag) => tag.startsWith(DEVICE)).map((tag) => tag.slice(DEVICE.length)))];
  }

  /**
   * Has the computer's daemon start an employee (MC-292), down one of its sockets, and waits for its answer. Only the
   * web app gets here; what it sends is passed on as it is.
   */
  async start(deviceId: string, start: unknown): Promise<{ ok: boolean; error?: string }> {
    const id = crypto.randomUUID();
    const answered = new Promise<{ ok: boolean; error?: string }>((resolve) => this.starts.set(id, { deviceId, answered: resolve }));
    // Newest first: a socket the daemon has already dropped can stay listed a while (the oldest, most often), and a
    // start sent down it is lost. When one doesn't answer in time, the next one is tried; the daemon starts an
    // employee once for each start, whichever sockets it comes down (MC-405).
    const sockets = this.ctx.getWebSockets(DEVICE + deviceId).reverse();
    if (sockets.length === 0) {
      this.starts.delete(id);
      return { ok: false, error: "The computer is offline: its crewmark daemon isn't connected." };
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const send = (socket: WebSocket) => {
      try {
        socket.send(JSON.stringify({ type: "employee.start", id, start }));
      } catch {
        // A closed one: the next is tried on time.
      }
    };
    sockets.forEach((socket, i) => {
      if (i === 0) send(socket);
      else timers.push(setTimeout(() => send(socket), i * START_RETRY_MS));
    });
    timers.push(
      setTimeout(
        () => this.starts.get(id)?.answered({ ok: false, error: "The computer didn't say whether it started the employee." }),
        START_ANSWER_MS,
      ),
    );
    const answer = await answered;
    timers.forEach(clearTimeout);
    this.starts.delete(id);
    return answer;
  }

  /** A daemon's answer to a start, from one of its computer's sockets. */
  private started(socket: WebSocket, data: { id?: unknown; ok?: unknown; error?: unknown }) {
    const start = typeof data.id === "string" ? this.starts.get(data.id) : undefined;
    if (!start || !this.ctx.getTags(socket).includes(DEVICE + start.deviceId)) return;
    start.answered({ ok: data.ok === true, error: typeof data.error === "string" ? data.error.slice(0, 500) : undefined });
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

  /**
   * A file the employee sent the person, read from its computer for the browser (MC-287). The browser's Range goes to
   * the daemon, which says what it sends; the response streams the bytes as they come.
   */
  private async file(request: Request) {
    const url = new URL(request.url);
    const employeeId = url.searchParams.get("employee");
    const file = url.searchParams.get("file") ?? "";
    const path = url.searchParams.get("path") ?? "";
    if (!employeeId || (!file && !path) || employeeId === PEOPLE) {
      return new Response("Expected an employee and a file", { status: 400, headers: FILE_CORS });
    }
    const id = crypto.randomUUID();
    const answered = new Promise<FileHead | null>((resolve) => this.reads.set(id, { employeeId, answered: resolve }));
    const range = request.headers.get("Range") ?? "";
    if (!this.send(employeeId, { type: "file.read", id, file, path, range })) {
      this.reads.delete(id);
      return new Response("The employee's computer is offline", { status: 503, headers: FILE_CORS });
    }
    const timer = setTimeout(() => this.reads.get(id)?.answered(null), FILE_ANSWER_MS);
    const head = await answered;
    clearTimeout(timer);
    const read = this.reads.get(id);
    if (!head || !read) {
      this.stopRead(id);
      return new Response("The employee's computer didn't answer", { status: 504, headers: FILE_CORS });
    }
    if (head.status !== 200 && head.status !== 206) {
      this.reads.delete(id);
      const headers: HeadersInit = head.status === 416 ? { ...FILE_CORS, "Content-Range": `bytes */${head.size}` } : FILE_CORS;
      return new Response(null, { status: head.status, headers });
    }
    const headers = new Headers({
      ...FILE_CORS,
      "Content-Type": head.contentType ?? "application/octet-stream",
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, max-age=3600",
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(head.name ?? "file")}`,
      "X-Content-Type-Options": "nosniff",
    });
    if (head.status === 206) headers.set("Content-Range", `bytes ${head.start}-${head.end}/${head.size}`);
    if (request.method === "HEAD") {
      this.stopRead(id);
      headers.set("Content-Length", String(head.end - head.start + 1));
      return new Response(null, { status: head.status, headers });
    }
    return new Response(read.body, { status: head.status, headers });
  }

  /** What a daemon sends about a file it's reading: its answer, a piece, or that it's done. */
  private fromDaemon(tag: string, data: Partial<FileHead> & { ok?: unknown }) {
    const read = typeof data.id === "string" ? this.reads.get(data.id) : undefined;
    if (!read || read.employeeId !== tag || typeof data.id !== "string") return;
    const id = data.id;
    if (data.type === "file.head") {
      const head = data as FileHead;
      if (head.status === 200 || head.status === 206) {
        // A fixed length, so the browser is told how big it is.
        const stream = new FixedLengthStream(Math.max(0, head.end - head.start + 1));
        read.body = stream.readable;
        read.writer = stream.writable.getWriter();
        // The browser stopped reading (a video skipped elsewhere, the tab closed): the daemon stops too.
        read.writer.closed.catch(() => this.stopRead(id));
      }
      read.answered(head);
    } else if (data.type === "file.end") {
      this.reads.delete(id);
      if (data.ok) read.writer?.close().catch(() => {});
      else read.writer?.abort("The employee's computer stopped reading the file").catch(() => {});
    }
  }

  /** A piece of a file: the read's id (its length in the first byte), then bytes, passed on to the browser. */
  private pieceFromDaemon(socket: WebSocket, tag: string, message: ArrayBuffer) {
    const bytes = new Uint8Array(message);
    const id = new TextDecoder().decode(bytes.subarray(1, 1 + bytes[0]));
    const read = this.reads.get(id);
    if (!read?.writer || read.employeeId !== tag) {
      socket.send(JSON.stringify({ type: "file.cancel", id }));
      return;
    }
    read.writer.write(bytes.subarray(1 + bytes[0])).then(
      () => {
        try {
          socket.send(JSON.stringify({ type: "file.ack", id }));
        } catch {
          // The daemon is gone; so is the read.
        }
      },
      () => this.stopRead(id),
    );
  }

  /** Stops a read: the browser's side ends, and the daemon stops sending. */
  private stopRead(id: string) {
    const read = this.reads.get(id);
    if (!read) return;
    this.reads.delete(id);
    read.answered(null);
    read.writer?.abort("Stopped").catch(() => {});
    this.send(read.employeeId, { type: "file.cancel", id });
  }

  /** Messages about an employee's work, from a dashboard tab or a daemon; pings never get here. */
  webSocketMessage(socket: WebSocket, message: string | ArrayBuffer) {
    const [tag] = this.ctx.getTags(socket);
    if (typeof message !== "string") {
      if (tag !== PEOPLE && message.byteLength > 0) this.pieceFromDaemon(socket, tag, message);
      return;
    }
    if (!message.startsWith("{")) return;
    let data: { type?: unknown; employeeId?: unknown; before?: unknown; pageTurns?: unknown };
    try {
      data = JSON.parse(message);
    } catch {
      return;
    }
    if (tag !== PEOPLE && data.type === "employee.started") this.started(socket, data as { id?: unknown; ok?: unknown; error?: unknown });
    else if (tag !== PEOPLE && (data.type === "file.head" || data.type === "file.end")) {
      this.fromDaemon(tag, data as Partial<FileHead>);
    } else if (tag === PEOPLE) this.fromTab(socket, data);
    // What an employee said last goes to every tab, for the list of conversations; its work to those watching it.
    else if (data.type === "worklog.latest") this.send(PEOPLE, { ...data, employeeId: tag });
    else if (typeof data.type === "string" && data.type.startsWith("worklog")) {
      this.toWatchers(tag, { ...data, employeeId: tag });
    }
  }

  /** A tab that closes stops watching; a daemon that goes leaves its files unread. */
  webSocketClose(socket: WebSocket) {
    const [tag] = this.ctx.getTags(socket);
    if (tag === PEOPLE) return this.unwatch(socket);
    if (tag.startsWith(COMPUTER) || this.ctx.getWebSockets(tag).length > 0) return;
    this.toWatchers(tag, { type: "worklog.offline", employeeId: tag });
    for (const [id, read] of this.reads) if (read.employeeId === tag) this.stopRead(id);
  }

  private fromTab(socket: WebSocket, data: { type?: unknown; employeeId?: unknown; before?: unknown; pageTurns?: unknown }) {
    if (data.type === "worklog.unwatch") return this.unwatch(socket);
    if (data.type === "worklog.latest") {
      for (const tag of this.daemons()) this.send(tag, { type: "worklog.latest" });
      return;
    }
    // Daemons' tags are employee ids; anything else is no employee of this organization's and simply has no daemon.
    if (typeof data.employeeId !== "string" || data.employeeId === PEOPLE || data.employeeId.startsWith(COMPUTER)) return;
    const employeeId = data.employeeId;
    if (data.type === "worklog.watch") {
      this.unwatch(socket);
      socket.serializeAttachment({ watching: employeeId });
      // Each new watcher gets the latest page: the daemon sends it again to everyone watching.
      if (!this.send(employeeId, { type: "worklog.watch", watching: true, pageTurns: pageTurns(data) })) {
        socket.send(JSON.stringify({ type: "worklog.offline", employeeId }));
      }
    } else if (data.type === "worklog.files") {
      // Every file the agent sent in the conversation, for its media panel (MC-318).
      if (!this.send(employeeId, { type: "worklog.files" })) {
        socket.send(JSON.stringify({ type: "worklog.offline", employeeId }));
      }
    } else if (data.type === "worklog.more" && typeof data.before === "number") {
      if (!this.send(employeeId, { type: "worklog.more", before: data.before, pageTurns: pageTurns(data) })) {
        socket.send(JSON.stringify({ type: "worklog.offline", employeeId }));
      }
    }
  }

  /** The employees whose daemons are connected. */
  private daemons() {
    const tags = this.ctx.getWebSockets().flatMap((socket) => this.ctx.getTags(socket).slice(0, 1));
    return [...new Set(tags)].filter((tag) => tag !== PEOPLE && !tag.startsWith(COMPUTER));
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
      const claims = await verifyToken(url.searchParams.get("token") ?? "", env.REALTIME_SECRET, "connect");
      if (!claims) return new Response("Invalid or expired token", { status: 401 });
      const target = new URL(request.url);
      const tag = claims.e ?? (claims.c && claims.d ? COMPUTER + claims.d : PEOPLE);
      target.search = new URLSearchParams({ tag, ...(tag !== PEOPLE && claims.d ? { device: claims.d } : {}) }).toString();
      return env.ORGANIZATIONS.getByName(claims.o).fetch(new Request(target, request));
    }
    // Files may be read by pages on any origin that has a link with a token (MC-324): the dashboard draws a video's
    // frame to a canvas to comment on it, which the browser only allows for a video read with CORS.
    if (url.pathname === "/file" && request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: { ...FILE_CORS, "Access-Control-Allow-Methods": "GET, HEAD", "Access-Control-Allow-Headers": "Range", "Access-Control-Max-Age": "86400" },
      });
    }
    if (url.pathname === "/file" && (request.method === "GET" || request.method === "HEAD")) {
      // A file the agent named, by its path (MC-315), takes a token of its own: one employee's, given only to the
      // person whose computer it's on.
      const path = url.searchParams.get("path") ?? "";
      const employee = url.searchParams.get("employee") ?? "";
      const claims = await verifyToken(url.searchParams.get("token") ?? "", env.REALTIME_SECRET, path ? "path" : "file");
      if (!claims || (path && claims.e !== employee)) {
        return new Response("Invalid or expired token", { status: 401, headers: FILE_CORS });
      }
      const target = new URL(request.url);
      target.search = new URLSearchParams({ employee, file: url.searchParams.get("file") ?? "", path }).toString();
      return env.ORGANIZATIONS.getByName(claims.o).fetch(new Request(target, request));
    }
    if ((url.pathname === "/devices" || url.pathname === "/start") && request.method === "POST") {
      if (!(await sameSecret(request.headers.get("Authorization") ?? "", `Bearer ${env.REALTIME_SECRET}`))) {
        return new Response("Unauthorized", { status: 401 });
      }
      const body = (await request.json().catch(() => null)) as { organizationId?: unknown; deviceId?: unknown; start?: unknown } | null;
      if (typeof body?.organizationId !== "string") return new Response("Expected an organizationId", { status: 400 });
      const organization = env.ORGANIZATIONS.getByName(body.organizationId);
      if (url.pathname === "/devices") return Response.json({ online: await organization.onlineDevices() });
      if (typeof body.deviceId !== "string" || typeof body.start !== "object" || body.start === null) {
        return new Response("Expected {organizationId, deviceId, start}", { status: 400 });
      }
      return Response.json(await organization.start(body.deviceId, body.start));
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

/**
 * A connect token's claims: organization, the employee for a daemon (none for the dashboard), the daemon's computer
 * (MC-292), when it expires (seconds).
 */
interface Claims {
  o: string;
  e?: string;
  d?: string;
  /** A computer's own socket (MC-421), with d and without e. */
  c?: true;
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
 * HMAC-SHA256 of what it's for ("connect" for a socket, "file" for the files in employees' work) + "." + the claims.
 * Null unless it's genuine, for this, and unexpired.
 */
async function verifyToken(token: string, secret: string, purpose: "connect" | "file" | "path"): Promise<Claims | null> {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  let valid = false;
  try {
    valid = await crypto.subtle.verify(
      "HMAC",
      await hmacKey(secret),
      fromBase64Url(signature),
      encoder.encode(`${purpose}.${payload}`),
    );
  } catch {
    return null;
  }
  if (!valid) return null;
  try {
    const claims = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as Claims;
    if (typeof claims.o !== "string" || typeof claims.x !== "number") return null;
    if (claims.e !== undefined && typeof claims.e !== "string") return null;
    if (claims.d !== undefined && typeof claims.d !== "string") return null;
    if (claims.c !== undefined && claims.c !== true) return null;
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

/** How many turns a page of the work log has, as the web asks (MC-302); undefined leaves it to the daemon. */
function pageTurns(data: { pageTurns?: unknown }) {
  return typeof data.pageTurns === "number" && Number.isInteger(data.pageTurns) && data.pageTurns > 0 ? data.pageTurns : undefined;
}

/** What lets a page read an employee's file with CORS (MC-324): the link's token is what guards it. */
const FILE_CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Expose-Headers": "Content-Range, Content-Length, Accept-Ranges",
};
