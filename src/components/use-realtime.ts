"use client";

import * as React from "react";

import { getRealtimeConnection } from "@/lib/actions";

/**
 * A push from the realtime Worker to the dashboard: an issue's Activity changed, or a direct conversation did (each
 * tab then asks for its own person's).
 */
export type Push = { type: "activity"; issueId: string } | { type: "messages" };

/** Keeps the socket open across a quiet connection, and lets the tab notice a dead one. */
const PING_MS = 30_000;
const RETRY_MAX_MS = 5 * 60_000;
/** How long to wait before asking again when Crewmark has no push channel. */
const NONE_MS = 60 * 60_000;

interface Listener {
  onPush: (push: Push) => void;
  onOpen: () => void;
  setOpen: (open: boolean) => void;
}

/** One socket per organization, shared by everything on the page that listens (the Activity, Messages, …). */
class Channel {
  listeners = new Set<Listener>();
  open = false;
  private socket: WebSocket | null = null;
  private ping: ReturnType<typeof setInterval> | undefined;
  private retry: ReturnType<typeof setTimeout> | undefined;
  private wait = 1000;
  private stopped = false;

  constructor(private organizationId: string) {
    void this.connect();
  }

  private setOpen(open: boolean) {
    this.open = open;
    for (const listener of this.listeners) listener.setOpen(open);
  }

  private again(ms: number) {
    if (!this.stopped) this.retry = setTimeout(() => void this.connect(), ms);
  }

  private async connect() {
    const connection = await getRealtimeConnection(this.organizationId).catch(() => undefined);
    if (this.stopped) return;
    if (connection === null) return this.again(NONE_MS);
    if (!connection) return this.again((this.wait = Math.min(this.wait * 2, RETRY_MAX_MS)));
    const socket = new WebSocket(`${connection.url}?token=${encodeURIComponent(connection.token)}`);
    this.socket = socket;
    socket.onopen = () => {
      this.wait = 1000;
      this.setOpen(true);
      this.ping = setInterval(() => socket.send("ping"), PING_MS);
      for (const listener of this.listeners) listener.onOpen();
    };
    socket.onmessage = (event) => {
      // Pushes are JSON; "pong" only shows the socket's alive.
      if (typeof event.data !== "string" || !event.data.startsWith("{")) return;
      let push: Push;
      try {
        push = JSON.parse(event.data) as Push;
      } catch {
        return; // Not one of ours.
      }
      for (const listener of this.listeners) listener.onPush(push);
    };
    socket.onclose = () => {
      clearInterval(this.ping);
      this.socket = null;
      this.setOpen(false);
      this.again((this.wait = Math.min(this.wait * 2, RETRY_MAX_MS)));
    };
  }

  close() {
    this.stopped = true;
    clearTimeout(this.retry);
    clearInterval(this.ping);
    this.socket?.close();
  }
}

const channels = new Map<string, Channel>();

/**
 * Listens to Crewmark's realtime Worker for the organization (see src/lib/realtime.ts): hands each push to onPush,
 * and calls onOpen each time the socket opens, to catch up on what it missed. Returns whether it's open: while it
 * isn't, callers poll instead. Everything on the page shares one socket.
 */
export function useRealtime(organizationId: string, onPush: (push: Push) => void, onOpen: () => void) {
  const [open, setOpen] = React.useState(() => channels.get(organizationId)?.open ?? false);
  const handlers = React.useRef({ onPush, onOpen });
  React.useEffect(() => {
    handlers.current = { onPush, onOpen };
  });

  React.useEffect(() => {
    let channel = channels.get(organizationId);
    if (!channel) {
      channel = new Channel(organizationId);
      channels.set(organizationId, channel);
    }
    const listener: Listener = {
      onPush: (push) => handlers.current.onPush(push),
      onOpen: () => handlers.current.onOpen(),
      setOpen,
    };
    // Its open state at first comes from useState above: the dashboard remounts for another organization.
    channel.listeners.add(listener);
    return () => {
      channel.listeners.delete(listener);
      // The last one to leave closes it; the next to come opens a new one.
      if (channel.listeners.size === 0) {
        channel.close();
        channels.delete(organizationId);
      }
    };
  }, [organizationId]);

  return open;
}
