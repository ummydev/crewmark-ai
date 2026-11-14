"use client";

import * as React from "react";

import { useCrewStore } from "@/components/crew-store";
import { useRealtime } from "@/components/use-realtime";
import { getDirectThreads } from "@/lib/actions";
import type { DirectThread } from "@/lib/types";

// The signed-in person's direct conversations with employees (MC-169), kept current for the whole dashboard: the
// sidebar's unread badge, the tab title's count and the Messages page. Crewmark pushes when a conversation changes;
// without pushes it checks every so often while someone's at the page.

interface Messages {
  /** Newest first; null until loaded. */
  threads: DirectThread[] | null;
  /** Messages from employees the person hasn't seen yet. */
  unread: number;
  refresh: () => Promise<void>;
}

const MessagesContext = React.createContext<Messages | null>(null);

/** How often to check when Crewmark can't push, and how long after the person's last move to stop. */
const POLL_MS = 30_000;
const IDLE_MS = 10 * 60_000;

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const { organization } = useCrewStore();
  const [threads, setThreads] = React.useState<DirectThread[] | null>(null);

  const refresh = React.useCallback(async () => {
    try {
      setThreads(await getDirectThreads(organization.id));
    } catch (error) {
      console.error(error);
    }
  }, [organization.id]);

  React.useEffect(() => {
    // Async so the state update lands after the effect, not during it.
    void Promise.resolve().then(refresh);
  }, [refresh]);

  const pushed = useRealtime(organization.id, (push) => push.type === "messages" && void refresh(), refresh);

  // Without pushes, check while someone's at the page, and at once when they come back to it.
  React.useEffect(() => {
    if (pushed) return;
    let lastActive = Date.now();
    const active = () => document.visibilityState === "visible" && Date.now() - lastActive < IDLE_MS;
    const timer = setInterval(() => active() && void refresh(), POLL_MS);
    const onActive = () => {
      const wasIdle = Date.now() - lastActive >= IDLE_MS;
      lastActive = Date.now();
      if (wasIdle) void refresh();
    };
    const onVisible = () => document.visibilityState === "visible" && onActive();
    window.addEventListener("pointerdown", onActive, { passive: true });
    window.addEventListener("keydown", onActive);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(timer);
      window.removeEventListener("pointerdown", onActive);
      window.removeEventListener("keydown", onActive);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [pushed, refresh]);

  const unread = threads?.reduce((sum, thread) => sum + thread.unread, 0) ?? 0;
  useTitleCount(unread);

  const value = React.useMemo(() => ({ threads, unread, refresh }), [threads, unread, refresh]);
  return <MessagesContext.Provider value={value}>{children}</MessagesContext.Provider>;
}

export function useMessages() {
  const messages = React.useContext(MessagesContext);
  if (!messages) throw new Error("useMessages needs a MessagesProvider");
  return messages;
}

/** Puts the unread count in front of the tab's title, e.g. "(2) Issues", whatever page sets the title. */
function useTitleCount(count: number) {
  React.useEffect(() => {
    const apply = () => {
      const base = document.title.replace(/^\(\d+\) /, "");
      const wanted = count > 0 ? `(${count}) ${base}` : base;
      if (document.title !== wanted) document.title = wanted;
    };
    apply();
    // Pages change the title as they're opened; put the count back each time.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      document.title = document.title.replace(/^\(\d+\) /, "");
    };
  }, [count]);
}
