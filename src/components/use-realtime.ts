"use client";

import * as React from "react";

import { getRealtimeConnection } from "@/lib/actions";

/** A push from the realtime Worker to the dashboard: the issue's Activity changed. */
export interface Push {
  type: "activity";
  issueId: string;
}

/** Keeps the socket open across a quiet connection, and lets the tab notice a dead one. */
const PING_MS = 30_000;
const RETRY_MAX_MS = 5 * 60_000;
/** How long to wait before asking again when Crewmark has no push channel. */
const NONE_MS = 60 * 60_000;

/**
 * Keeps a socket open to Crewmark's realtime Worker for the organization (see src/lib/realtime.ts) and hands each push
 * to onPush, and calls onOpen each time the socket opens, to catch up on what it missed. Returns whether it's open:
 * while it isn't, callers poll instead.
 */
export function useRealtime(organizationId: string, onPush: (push: Push) => void, onOpen: () => void) {
  const [open, setOpen] = React.useState(false);
  const handlers = React.useRef({ onPush, onOpen });
  React.useEffect(() => {
    handlers.current = { onPush, onOpen };
  });

  React.useEffect(() => {
    let stopped = false;
    let socket: WebSocket | null = null;
    let ping: ReturnType<typeof setInterval> | undefined;
    let retry: ReturnType<typeof setTimeout> | undefined;
    let wait = 1000;

    const again = (ms: number) => {
      if (!stopped) retry = setTimeout(connect, ms);
    };
    async function connect() {
      const connection = await getRealtimeConnection(organizationId).catch(() => undefined);
      if (stopped) return;
      if (connection === null) return again(NONE_MS);
      if (!connection) return again((wait = Math.min(wait * 2, RETRY_MAX_MS)));
      socket = new WebSocket(`${connection.url}?token=${encodeURIComponent(connection.token)}`);
      socket.onopen = () => {
        wait = 1000;
        setOpen(true);
        ping = setInterval(() => socket?.send("ping"), PING_MS);
        handlers.current.onOpen();
      };
      socket.onmessage = (event) => {
        // Pushes are JSON; "pong" only shows the socket's alive.
        if (typeof event.data !== "string" || !event.data.startsWith("{")) return;
        try {
          handlers.current.onPush(JSON.parse(event.data) as Push);
        } catch {
          // Not one of ours.
        }
      };
      socket.onclose = () => {
        clearInterval(ping);
        setOpen(false);
        socket = null;
        again((wait = Math.min(wait * 2, RETRY_MAX_MS)));
      };
    }

    void connect();
    return () => {
      stopped = true;
      clearTimeout(retry);
      clearInterval(ping);
      socket?.close();
    };
  }, [organizationId]);

  return open;
}
