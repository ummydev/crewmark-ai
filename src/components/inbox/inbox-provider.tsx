"use client";

import * as React from "react";

import { useCrewStore } from "@/components/crew-store";
import { useMessages, useTitleCount } from "@/components/messages/messages-provider";
import { useRealtime } from "@/components/use-realtime";
import { getInbox, markInboxSeen } from "@/lib/actions";
import type { InboxItem } from "@/lib/types";

// The signed-in person's Inbox (MC-200): the issues they follow on which someone else commented or changed something,
// kept current for the whole dashboard: the sidebar's count, the tab title's and the Inbox page. Any issue's Activity
// changing may put one in it, so each push of that kind reloads it; without pushes it checks every so often while
// someone's at the page.

interface Inbox {
  /** Latest first; null until loaded. */
  items: InboxItem[] | null;
  /** Issues with news the person hasn't seen. */
  unread: number;
  /** The person has seen the issue; nothing happens unless it's unread. */
  markRead: (issueId: string) => void;
  markAllRead: () => void;
}

const InboxContext = React.createContext<Inbox | null>(null);

/** How often to check when Crewmark can't push, how long after the person's last move to stop, and how long to
 * wait for a burst of pushes (an agent's comment and status change) to settle. */
const POLL_MS = 30_000;
const IDLE_MS = 10 * 60_000;
const SETTLE_MS = 400;

export function InboxProvider({ children }: { children: React.ReactNode }) {
  const { organization } = useCrewStore();
  const [items, setItems] = React.useState<InboxItem[] | null>(null);

  const refresh = React.useCallback(async () => {
    try {
      setItems(await getInbox(organization.id));
    } catch (error) {
      console.error(error);
    }
  }, [organization.id]);

  React.useEffect(() => {
    // Async so the state update lands after the effect, not during it.
    void Promise.resolve().then(refresh);
  }, [refresh]);

  const settle = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  React.useEffect(() => () => clearTimeout(settle.current ?? undefined), []);
  const pushed = useRealtime(
    organization.id,
    (push) => {
      if (push.type !== "activity") return;
      clearTimeout(settle.current ?? undefined);
      settle.current = setTimeout(refresh, SETTLE_MS);
    },
    refresh,
  );

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

  const markRead = React.useCallback(
    (issueId: string) => {
      if (!items?.some((item) => item.issueId === issueId && item.unread)) return;
      setItems((prev) => prev?.map((item) => (item.issueId === issueId ? { ...item, unread: false } : item)) ?? null);
      markInboxSeen(organization.id, issueId).catch(console.error);
    },
    [items, organization.id],
  );

  const markAllRead = React.useCallback(() => {
    setItems((prev) => prev?.map((item) => ({ ...item, unread: false })) ?? null);
    markInboxSeen(organization.id).catch(console.error);
  }, [organization.id]);

  const unread = items?.filter((item) => item.unread).length ?? 0;
  const value = React.useMemo(() => ({ items, unread, markRead, markAllRead }), [items, unread, markRead, markAllRead]);
  return (
    <InboxContext.Provider value={value}>
      <TitleCount inbox={unread} />
      {children}
    </InboxContext.Provider>
  );
}

export function useInbox() {
  const inbox = React.useContext(InboxContext);
  if (!inbox) throw new Error("useInbox needs an InboxProvider");
  return inbox;
}

/** What's new for the person in front of the tab's title: unread direct messages and Inbox issues. */
function TitleCount({ inbox }: { inbox: number }) {
  const { unread } = useMessages();
  useTitleCount(unread + inbox);
  return null;
}
