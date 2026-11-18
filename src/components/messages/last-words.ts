"use client";

import * as React from "react";

import { cacheKey, peekCache, readCache, writeCache } from "@/lib/local-cache";

// What each employee's conversation said last, for the list of conversations (MC-277). It's on the employees'
// computers, not on Crewmark: the list asks every daemon for its latest turns ("worklog.latest", through the realtime
// Worker), and the open conversation updates it as it goes. This browser keeps it, so the list shows it at once, and
// shows what it last saw while a computer is off.

export interface LastWords {
  /** When it was said. */
  at: string;
  /** Markdown, cut short. */
  text: string;
  /** A person wrote it, not the employee; `by` names them when it's someone else's words passed on. */
  mine: boolean;
  by?: string;
}

type All = Record<string, LastWords>;

const EMPTY: All = {};
const listeners = new Set<() => void>();
const loaded = new Set<string>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function changed() {
  for (const listener of listeners) listener();
}

/** The key the person's copy is kept under in this organization. */
export function lastWordsKey(userId: string, organizationId: string) {
  return cacheKey(userId, organizationId, "last-words");
}

/** Notes what was said last in an employee's conversation, unless something newer is known already. */
export function noteLastWords(key: string, employeeId: string, words: LastWords | null) {
  if (!words) return;
  const all = peekCache<All>(key) ?? EMPTY;
  const kept = all[employeeId];
  if (kept && (Date.parse(kept.at) > Date.parse(words.at) || (kept.at === words.at && kept.text === words.text))) return;
  writeCache(key, { ...all, [employeeId]: words });
  changed();
}

/** What each employee's conversation said last, by employee id, as far as this browser knows. */
export function useLastWords(key: string): All {
  const all = React.useSyncExternalStore(subscribe, () => peekCache<All>(key) ?? EMPTY, () => EMPTY);
  React.useEffect(() => {
    if (loaded.has(key)) return;
    loaded.add(key);
    void readCache<All>(key).then((stored) => stored && changed());
  }, [key]);
  return all;
}
