"use client";

import * as React from "react";

import { useCrewStore } from "@/components/crew-store";
import { useRealtime } from "@/components/use-realtime";
import { getDirectThreads, getWorkReplies, pinWork, readWork, unreadWork } from "@/lib/actions";
import { DIRECT_MESSAGES } from "@/lib/features";
import { cacheKey, peekCache, readCache, writeCache } from "@/lib/local-cache";
import type { DirectThread, WorkReplies } from "@/lib/types";

// The signed-in person's direct conversations with employees (MC-169), kept current for the whole dashboard: the
// sidebar's unread badge, the tab title's count (with the Inbox's, see InboxProvider) and the Messages page. Crewmark pushes when a conversation changes;
// without pushes it checks every so often while someone's at the page. The list last seen is kept in this browser
// (MC-235), so a reload shows it at once instead of a placeholder while Crewmark answers. With direct messages off,
// the unread count is the replies in employees' work the person hasn't seen (MC-280, src/db/work-unread.ts).

interface Messages {
  /** Newest first; null until loaded. */
  threads: DirectThread[] | null;
  /** Messages from employees the person hasn't seen yet: direct messages and replies in their work. */
  unread: number;
  /** Replies in each employee's work the person hasn't seen, by employee id. */
  workUnread: Record<string, number>;
  /** When each employee last replied in its work (ISO), by employee id, as far as Crewmark heard. */
  repliedAt: Record<string, string>;
  /** The person has seen the employee's work. */
  readWorkOf: (employeeId: string) => void;
  /** The conversations the person pinned to the top (MC-310): when each was pinned, by employee id. */
  pinned: Record<string, string>;
  pin: (employeeId: string, pinned: boolean) => void;
  /** Marks the employee's work unread, as if a reply came the person hasn't seen (MC-310). */
  unreadWorkOf: (employeeId: string) => void;
  refresh: () => Promise<void>;
}

const MessagesContext = React.createContext<Messages | null>(null);

/** How often to check when Crewmark can't push, and how long after the person's last move to stop. */
const POLL_MS = 30_000;
const IDLE_MS = 10 * 60_000;

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const { organization, currentUser } = useCrewStore();
  const key = cacheKey(currentUser.id, organization.id, "threads");
  // While direct messages are off (src/lib/features.ts) there are none to show or count, and nothing to ask for.
  const [threads, setThreads] = React.useState<DirectThread[] | null>(() =>
    DIRECT_MESSAGES ? (peekCache<DirectThread[]>(key) ?? null) : [],
  );

  const workKey = cacheKey(currentUser.id, organization.id, "work-replies");
  const [work, setWork] = React.useState<WorkReplies>(
    () => peekCache<WorkReplies>(workKey) ?? { unread: {}, repliedAt: {} },
  );
  const keepWork = React.useCallback(
    (next: (prev: WorkReplies) => WorkReplies) =>
      setWork((prev) => {
        const value = next(prev);
        writeCache(workKey, value);
        return value;
      }),
    [workKey],
  );
  const workUnread = work.unread;

  const refresh = React.useCallback(async () => {
    try {
      const [latest, replies] = await Promise.all([
        DIRECT_MESSAGES ? getDirectThreads(organization.id) : null,
        getWorkReplies(organization.id),
      ]);
      if (latest) {
        setThreads(latest);
        writeCache(key, latest);
      }
      keepWork(() => replies);
    } catch (error) {
      console.error(error);
    }
  }, [organization.id, key, keepWork]);

  // Shown at once, saved on Crewmark; a failure puts it back.
  const pin = React.useCallback(
    (employeeId: string, on: boolean) => {
      const before = work.pinned ?? {};
      const pinned = { ...before };
      if (on) pinned[employeeId] = new Date().toISOString();
      else delete pinned[employeeId];
      keepWork((prev) => ({ ...prev, pinned }));
      void pinWork(organization.id, employeeId, on).catch((error) => {
        console.error(error);
        keepWork((prev) => ({ ...prev, pinned: before }));
      });
    },
    [organization.id, keepWork, work.pinned],
  );
  const unreadWorkOf = React.useCallback(
    (employeeId: string) => {
      keepWork((prev) => ({ ...prev, unread: { ...prev.unread, [employeeId]: Math.max(prev.unread[employeeId] ?? 0, 1) } }));
      void unreadWork(organization.id, employeeId).catch((error) => console.error(error));
    },
    [organization.id, keepWork],
  );

  // Called by the employee's open work while it has unread replies (MessagesView's WorkView).
  const readWorkOf = React.useCallback(
    (employeeId: string) => {
      keepWork((prev) => ({
        ...prev,
        unread: Object.fromEntries(Object.entries(prev.unread).filter(([id]) => id !== employeeId)),
      }));
      void readWork(organization.id, employeeId).catch((error) => console.error(error));
    },
    [organization.id, keepWork],
  );

  React.useEffect(() => {
    // The copy kept in this browser first, unless Crewmark has answered already; then Crewmark's.
    if (DIRECT_MESSAGES) void readCache<DirectThread[]>(key).then((cached) => cached && setThreads((shown) => shown ?? cached));
    void readCache<WorkReplies>(workKey).then((cached) => cached && setWork((shown) => (Object.keys(shown.repliedAt).length ? shown : cached)));
    void Promise.resolve().then(refresh);
  }, [key, workKey, refresh]);

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

  const unread =
    (threads?.reduce((sum, thread) => sum + thread.unread, 0) ?? 0) +
    Object.values(workUnread).reduce((sum, count) => sum + count, 0);

  const value = React.useMemo(
    () => ({
      threads,
      unread,
      workUnread,
      repliedAt: work.repliedAt,
      readWorkOf,
      pinned: work.pinned ?? {},
      pin,
      unreadWorkOf,
      refresh,
    }),
    [threads, unread, workUnread, work.repliedAt, readWorkOf, work.pinned, pin, unreadWorkOf, refresh],
  );
  return <MessagesContext.Provider value={value}>{children}</MessagesContext.Provider>;
}

export function useMessages() {
  const messages = React.useContext(MessagesContext);
  if (!messages) throw new Error("useMessages needs a MessagesProvider");
  return messages;
}

/** Puts the unread count in front of the tab's title, e.g. "(2) Issues", whatever page sets the title. */
export function useTitleCount(count: number) {
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
