"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { AssigneeAvatar, useFindAssignee } from "@/components/issues/assignee";
import { StatusIcon } from "@/components/issues/status-icon";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { searchIssues } from "@/lib/issue-search";
import { cn } from "@/lib/utils";

// Searching issues from anywhere (MC-214): ⌘K (Ctrl+K) opens a box; typing a key ("MC-12", or "12") or words from a
// title or description lists the matches, up to 20, best first. Arrows choose, Enter opens. Without anything typed it
// lists the latest changed, to jump back to one.

const LIMIT = 20;

/** ⌘K / Ctrl+K anywhere opens the search, even from a text field, as in Linear. */
export function IssueSearchShortcut({ onOpen }: { onOpen: () => void }) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== "k" || !(event.metaKey || event.ctrlKey) || event.altKey || event.shiftKey) return;
      event.preventDefault();
      onOpen();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpen]);
  return null;
}

export function IssueSearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { issues, orgPath } = useCrewStore();
  const findAssignee = useFindAssignee();
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const list = React.useRef<HTMLDivElement>(null);

  // Start over each time it opens.
  const [prevOpen, setPrevOpen] = React.useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setQuery("");
      setActive(0);
    }
  }

  const results = React.useMemo(
    () =>
      query.trim()
        ? searchIssues(issues, query, LIMIT)
        : [...issues].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 8),
    [issues, query],
  );

  function openIssue(key: string) {
    onOpenChange(false);
    router.push(orgPath(`/issues/${key}`));
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(Math.max(active + (event.key === "ArrowDown" ? 1 : -1), 0), results.length - 1);
      setActive(next);
      list.current?.querySelectorAll("[data-result]")[next]?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter" && results[active] && !event.nativeEvent.isComposing) {
      event.preventDefault();
      openIssue(results[active].key);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="top-[15%] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-xl">
        <DialogTitle className="sr-only">Search issues</DialogTitle>
        <div className="flex items-center gap-2 border-b px-3">
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search issues by title, description or key"
            aria-label="Search issues"
            className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div ref={list} className="max-h-[min(24rem,60vh)] overflow-y-auto p-1" role="listbox">
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">No issues match.</p>
          ) : (
            results.map((issue, index) => {
              const assignee = findAssignee(issue.assigneeId);
              return (
                <button
                  key={issue.id}
                  type="button"
                  data-result
                  role="option"
                  aria-selected={index === active}
                  onMouseMove={() => setActive(index)}
                  onClick={() => openIssue(issue.key)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px]",
                    index === active && "bg-accent",
                  )}
                >
                  <StatusIcon status={issue.status} />
                  <span className="w-14 shrink-0 text-muted-foreground tabular-nums">{issue.key}</span>
                  <span className="min-w-0 flex-1 truncate">{issue.title}</span>
                  {assignee && <AssigneeAvatar assignee={assignee} />}
                </button>
              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** The board's search box (MC-214): only the matching cards stay, with the project filter as well. */
export function BoardSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="relative flex items-center">
      <SearchIcon className="pointer-events-none absolute left-2 size-3.5 text-muted-foreground" aria-hidden />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => event.key === "Escape" && onChange("")}
        placeholder="Search"
        aria-label="Search issues on the board"
        className="h-8 w-36 rounded-md border bg-transparent pr-2 pl-7 text-[13px] outline-none placeholder:text-muted-foreground focus:w-52 focus:ring-1 focus:ring-ring sm:w-44"
      />
    </label>
  );
}
