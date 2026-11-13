"use client";

import * as React from "react";

import { ISSUE_STATUSES, type IssueStatus } from "@/lib/types";

// Which board columns the person hid, for each organization, kept in this browser's localStorage, and in memory for
// this page (all there is where storage can't be written). The server renders every column; the hidden ones go once
// the page hydrates.

const PREFIX = "crewmark:hidden-columns:";
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function readRaw(organizationId: string) {
  const key = PREFIX + organizationId;
  const remembered = memory.get(key);
  if (remembered !== undefined) return remembered;
  try {
    return localStorage.getItem(key) ?? "[]";
  } catch {
    return "[]";
  }
}

function parse(raw: string): IssueStatus[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? ISSUE_STATUSES.map((s) => s.value).filter((s) => value.includes(s)) : [];
  } catch {
    return [];
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Another tab hid or showed one: its choice wins.
  const onStorage = (event: StorageEvent) => {
    if (!event.key?.startsWith(PREFIX)) return;
    memory.delete(event.key);
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** The organization's hidden board columns, in board order, and a way to hide or show one. */
export function useHiddenColumns(organizationId: string) {
  const raw = React.useSyncExternalStore(
    subscribe,
    () => readRaw(organizationId),
    () => "[]",
  );
  const hidden = React.useMemo(() => parse(raw), [raw]);

  const setHidden = React.useCallback(
    (status: IssueStatus, hide: boolean) => {
      const current = parse(readRaw(organizationId));
      const next = hide ? [...current, status] : current.filter((s) => s !== status);
      const key = PREFIX + organizationId;
      memory.set(key, JSON.stringify(next));
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Private browsing or full storage: it lasts until the page is reloaded.
      }
      for (const listener of listeners) listener();
    },
    [organizationId],
  );

  return [hidden, setHidden] as const;
}
