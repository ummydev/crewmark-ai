import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { after } from "next/server";

// The push channel: a Cloudflare Worker (realtime/ in this repo) that crewmark daemons and the dashboard's tabs keep a
// WebSocket open to. When something concerns an employee or changes an issue's Activity, Crewmark tells the Worker,
// which tells the daemon or the tabs to fetch what's new, so nothing needs to poll and the database can sleep.
// REALTIME_URL is the Worker (e.g. https://rt.crewmark.ai) and REALTIME_SECRET is shared with it; without them,
// daemons and tabs poll as they used to.

/** What a daemon is told: new events for its agent, or new heartbeat settings. */
export type PushKind = "events" | "heartbeat";

/** How long a connect token works: it's only used to open the socket, right after it's handed out. */
const TOKEN_SECONDS = 10 * 60;

function worker() {
  const { REALTIME_URL, REALTIME_SECRET } = process.env;
  if (!REALTIME_URL || !REALTIME_SECRET) return null;
  return { url: REALTIME_URL.replace(/\/$/, ""), secret: REALTIME_SECRET };
}

/**
 * Where a socket opens, and the token that lets it: base64url JSON claims (organization, the employee for its daemon
 * or none for the dashboard, the daemon's computer, expiry), a dot, and the HMAC-SHA256 of "connect." + the claims, checked by the Worker.
 * Null without a Worker.
 */
export function realtimeConnection(
  organizationId: string,
  employeeId?: string,
  deviceId?: string | null,
  /** A computer's own socket (MC-421): deviceId's, without an employee. */
  computer = false,
) {
  const target = worker();
  if (!target) return null;
  const expires = Math.floor(Date.now() / 1000) + TOKEN_SECONDS;
  const claims = Buffer.from(
    JSON.stringify({
      o: organizationId,
      e: employeeId,
      d: deviceId ?? undefined,
      c: computer && deviceId && !employeeId ? true : undefined,
      x: expires,
    }),
  ).toString("base64url");
  const signature = createHmac("sha256", target.secret).update(`connect.${claims}`).digest("base64url");
  return {
    url: `${target.url.replace(/^http/, "ws")}/connect`,
    token: `${claims}.${signature}`,
    expiresAt: new Date(expires * 1000).toISOString(),
  };
}

/** How long the link to employees' files works: a video keeps asking for ranges as it plays. */
const FILE_TOKEN_SECONDS = 12 * 60 * 60;

/**
 * Where the dashboard opens the pictures and videos employees send people in their work, read from their computers
 * through the Worker (MC-287), and the token that lets it: like a connect token, but signed as "file." so a file link
 * can't open a socket. It stays the same for the hour, so the browser's cache keeps what it loaded. Null without a
 * Worker.
 */
export function realtimeFiles(organizationId: string) {
  const target = worker();
  if (!target) return null;
  const now = Math.floor(Date.now() / 1000);
  const expires = now - (now % 3600) + FILE_TOKEN_SECONDS;
  const claims = Buffer.from(JSON.stringify({ o: organizationId, x: expires })).toString("base64url");
  const signature = createHmac("sha256", target.secret).update(`file.${claims}`).digest("base64url");
  return { url: `${target.url}/file`, token: `${claims}.${signature}`, expiresAt: new Date(expires * 1000).toISOString() };
}

/**
 * A link's token to read files the employee named, by path, from its computer (MC-315): for that employee only, for a
 * quarter of an hour. Given only to the person whose computer it is (getFileLinkAccess).
 */
export function realtimePathAccess(organizationId: string, employeeId: string) {
  const target = worker();
  if (!target) return null;
  const expires = Math.floor(Date.now() / 1000) + 15 * 60;
  const claims = Buffer.from(JSON.stringify({ o: organizationId, e: employeeId, x: expires })).toString("base64url");
  const signature = createHmac("sha256", target.secret).update(`path.${claims}`).digest("base64url");
  return { url: `${target.url}/file`, token: `${claims}.${signature}`, expiresAt: new Date(expires * 1000).toISOString() };
}

/**
 * Tells the employees' daemons there's news of this kind, after the response is sent. A push that doesn't get through
 * only delays the news: daemons also check in every hour, and whenever they reconnect.
 */
export function pushToDaemons(organizationId: string, employeeIds: string[], kind: PushKind) {
  if (employeeIds.length > 0) notify({ organizationId, employeeIds, kind });
}

/** Tells the dashboard's open tabs that the issue's Activity changed, after the response is sent. */
export function pushActivity(organizationId: string, issueId: string) {
  notify({ organizationId, kind: "activity", issueId });
}

/**
 * Tells the dashboard's open tabs that a direct conversation changed (a message, or one read), after the response is
 * sent. Each tab asks for its own person's conversations, so nothing about whose it was goes through the Worker.
 */
export function pushMessages(organizationId: string) {
  notify({ organizationId, kind: "messages" });
}

/**
 * Sets the organization's timer in the Worker to when its next repeating issue comes round (null: none repeat), after
 * the response is sent. Then the Worker calls POST /api/realtime/recur, which handles what's due and answers the next
 * time. Without a Worker, daemons checking in handle what's due (db/recurrence.ts).
 */
export function scheduleRecurrences(organizationId: string, at: Date | null) {
  notify({ organizationId, at: at?.toISOString() ?? null }, "/schedule");
}

/** What the web app sends a computer to start an employee there (MC-292); the daemon answers whether it did. */
export interface DeviceStart {
  /** A setup token for the employee, which the daemon connects with. */
  token: string;
  workdir: string;
  /** "claude-code", or an agent reached through acpx (MC-417). */
  agent: string;
  /** The conversation's first message. */
  prompt: string;
}

/** The computers whose daemons are connected to the organization's object now; null without a Worker or an answer. */
export async function onlineDevices(organizationId: string): Promise<string[] | null> {
  const answer = await ask<{ online: string[] }>("/devices", { organizationId }, 5000);
  return answer?.online ?? null;
}

/**
 * Has the computer's daemon start an employee, and waits for it to say whether it did; null when the Worker couldn't
 * be asked or didn't answer.
 */
export async function startOnWorker(organizationId: string, deviceId: string, start: DeviceStart) {
  return ask<{ ok: boolean; error?: string }>("/start", { organizationId, deviceId, start }, 70_000);
}

async function ask<T>(path: string, body: object, timeout: number): Promise<T | null> {
  const target = worker();
  if (!target) return null;
  try {
    const response = await fetch(`${target.url}${path}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${target.secret}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeout),
    });
    if (!response.ok) {
      console.error(`Realtime ${path} answered ${response.status}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`Realtime ${path} failed`, error);
    return null;
  }
}

/** Whether a request's Authorization header is the Worker's, in constant time. */
export function fromWorker(authorization: string | null) {
  const target = worker();
  if (!target || !authorization) return false;
  const digest = (text: string) => createHash("sha256").update(text).digest();
  return timingSafeEqual(digest(authorization), digest(`Bearer ${target.secret}`));
}

function notify(body: object, path = "/notify") {
  const target = worker();
  if (!target) return;
  const push = async () => {
    try {
      const response = await fetch(`${target.url}${path}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${target.secret}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) console.error(`Realtime push answered ${response.status}`);
    } catch (error) {
      console.error("Realtime push failed", error);
    }
  };
  try {
    after(push);
  } catch {
    // Outside a request, e.g. in a script: nothing to wait for.
    void push();
  }
}
