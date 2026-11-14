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
 * or none for the dashboard, expiry), a dot, and the HMAC-SHA256 of "connect." + the claims, checked by the Worker.
 * Null without a Worker.
 */
export function realtimeConnection(organizationId: string, employeeId?: string) {
  const target = worker();
  if (!target) return null;
  const expires = Math.floor(Date.now() / 1000) + TOKEN_SECONDS;
  const claims = Buffer.from(JSON.stringify({ o: organizationId, e: employeeId, x: expires })).toString("base64url");
  const signature = createHmac("sha256", target.secret).update(`connect.${claims}`).digest("base64url");
  return {
    url: `${target.url.replace(/^http/, "ws")}/connect`,
    token: `${claims}.${signature}`,
    expiresAt: new Date(expires * 1000).toISOString(),
  };
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
