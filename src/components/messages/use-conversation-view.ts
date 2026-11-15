"use client";

import * as React from "react";

// Which tab a conversation in Messages shows, DM or Work (MC-186): the person's last choice, kept in this browser's
// localStorage, so it stays as they go from one employee to the next and when they come back another day. In memory
// too, for where storage can't be written.

/** What the conversation shows: the direct messages, or the employee's work. */
export type ConversationView = "messages" | "work";

const KEY = "crewmark:conversation-view";
let memory: ConversationView | null = null;
const listeners = new Set<() => void>();

function read(): ConversationView {
  if (memory) return memory;
  try {
    return localStorage.getItem(KEY) === "work" ? "work" : "messages";
  } catch {
    return "messages";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Chosen in another tab: that choice wins here too.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== KEY) return;
    memory = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * The tab to show, and a way to choose one. Null while the page hydrates: the server can't know the choice, and
 * showing DM for a moment would load the messages and mark them read.
 */
export function useConversationView() {
  const view = React.useSyncExternalStore<ConversationView | null>(subscribe, read, () => null);
  const choose = React.useCallback((next: ConversationView) => {
    memory = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Private browsing or full storage: it lasts until the page is reloaded.
    }
    for (const listener of listeners) listener();
  }, []);
  return [view, choose] as const;
}
