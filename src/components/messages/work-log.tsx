"use client";

import * as React from "react";
import { ChevronRightIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { MarkdownView } from "@/components/markdown-editor";
import { useFollowBottom } from "@/components/messages/follow-bottom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { sendRealtime, useRealtime } from "@/components/use-realtime";
import { fullDate } from "@/lib/format";
import type { Employee, WorkStep, WorkTurn } from "@/lib/types";
import { cn } from "@/lib/utils";

// An employee's work (MC-186): its agent's conversation turn by turn, like a chat. Each turn shows what started it
// and the reply it ended with; what happened in between folds into "N steps". The employee's daemon reads the
// conversation on its computer and sends it through the realtime Worker while this is open (cli/worklog.go); none of
// it is stored, so it shows only while that computer is on.

/** How long to wait for the employee's computer before saying it didn't answer. */
const ANSWER_MS = 10_000;

type Status =
  | { kind: "waiting" }
  | { kind: "ready" }
  | { kind: "silent" }
  | { kind: "offline" }
  | { kind: "unavailable"; reason: string };

export function WorkLog({ employee }: { employee: Employee }) {
  const { organization } = useCrewStore();
  const [turns, setTurns] = React.useState<WorkTurn[]>([]);
  const [more, setMore] = React.useState(false);
  const [status, setStatus] = React.useState<Status>({ kind: "waiting" });
  const [loadingEarlier, setLoadingEarlier] = React.useState(false);
  const { scrollerRef, contentRef, atBottomRef } = useFollowBottom();

  const open = useRealtime(
    organization.id,
    (push) => {
      if (!push.type.startsWith("worklog") || !("employeeId" in push) || push.employeeId !== employee.id) return;
      if (push.type === "worklog.offline") return setStatus({ kind: "offline" });
      if (push.type === "worklog.unavailable") return setStatus({ kind: "unavailable", reason: push.reason });
      if (push.type !== "worklog") return;
      setStatus({ kind: "ready" });
      setTurns((prev) => merge(prev, push.turns ?? []));
      if (push.page === "earlier") {
        setMore(Boolean(push.more));
        setLoadingEarlier(false);
      } else if (push.page === "latest") {
        // Earlier pages already shown stay; otherwise this page says whether there are any.
        setMore((had) => had || Boolean(push.more));
      }
    },
    () => {},
  );

  // Watch while the socket is open, again each time it opens, and stop on leaving.
  React.useEffect(() => {
    if (!open) return;
    sendRealtime(organization.id, { type: "worklog.watch", employeeId: employee.id });
    const silent = setTimeout(() => setStatus((s) => (s.kind === "waiting" ? { kind: "silent" } : s)), ANSWER_MS);
    return () => {
      clearTimeout(silent);
      sendRealtime(organization.id, { type: "worklog.unwatch" });
    };
  }, [open, organization.id, employee.id]);
  // Without a push channel there's nothing to ask.
  React.useEffect(() => {
    if (open) return;
    const silent = setTimeout(() => setStatus((s) => (s.kind === "waiting" ? { kind: "silent" } : s)), ANSWER_MS);
    return () => clearTimeout(silent);
  }, [open]);

  function loadEarlier() {
    if (!turns.length) return;
    atBottomRef.current = false;
    setLoadingEarlier(true);
    if (!sendRealtime(organization.id, { type: "worklog.more", employeeId: employee.id, before: turns[0].index })) {
      setLoadingEarlier(false);
    }
  }

  const notice = noticeFor(status, employee.name, turns.length > 0);
  return (
    <div ref={scrollerRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
      <div ref={contentRef} className="mx-auto grid max-w-3xl gap-8">
        {notice && turns.length > 0 && <p className="text-center text-xs text-muted-foreground">{notice}</p>}
        {turns.length === 0 ? (
          status.kind === "waiting" ? (
            <div className="grid gap-3" aria-label={`Asking ${employee.name}'s computer`}>
              <Skeleton className="ml-auto h-10 w-1/2" />
              <Skeleton className="h-16 w-3/4" />
            </div>
          ) : (
            <p className="m-auto max-w-sm py-10 text-center text-sm text-muted-foreground">
              {notice ?? `${employee.name} hasn't worked in its conversation yet.`}
            </p>
          )
        ) : (
          <>
            {more && (
              <div className="text-center">
                <Button variant="ghost" size="sm" onClick={loadEarlier} disabled={loadingEarlier}>
                  {loadingEarlier ? "Loading…" : "Earlier turns"}
                </Button>
              </div>
            )}
            <ol className="grid gap-8">
              {runs(turns).map((run) =>
                run.heartbeats ? (
                  <Heartbeats key={`heartbeats-${run.turns[0].index}`} turns={run.turns} lastIndex={turns.at(-1)!.index} />
                ) : (
                  <Turn key={run.turns[0].index} turn={run.turns[0]} last={run.turns[0] === turns.at(-1)} />
                ),
              )}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

/** The turns in order, with each run of Crewmark's heartbeats together (they're hidden until opened). */
function runs(turns: WorkTurn[]) {
  const result: { heartbeats: boolean; turns: WorkTurn[] }[] = [];
  for (const turn of turns) {
    const heartbeat = turn.origin === "heartbeat";
    const previous = result.at(-1);
    if (heartbeat && previous?.heartbeats) previous.turns.push(turn);
    else result.push({ heartbeats: heartbeat, turns: [turn] });
  }
  return result;
}

/** The turns so far with these in place of their older copies, oldest first. */
function merge(prev: WorkTurn[], incoming: WorkTurn[]) {
  const byIndex = new Map(prev.map((turn) => [turn.index, turn]));
  for (const turn of incoming) byIndex.set(turn.index, turn);
  return [...byIndex.values()].sort((a, b) => a.index - b.index);
}

function noticeFor(status: Status, name: string, hasTurns: boolean) {
  switch (status.kind) {
    case "silent":
      return `${name}'s computer didn't answer. It may be asleep, or run a crewmark older than 0.7.0, which can't show its work here.`;
    case "offline":
      return hasTurns
        ? `${name}'s computer went offline: this is its work as it last was.`
        : `${name}'s computer is offline. Its work shows here while that computer is on.`;
    case "unavailable":
      return {
        "no-session": `No conversation is linked to ${name} yet.`,
        unsupported: `Only Claude Code conversations can show their work here for now.`,
        "no-transcript": `${name}'s computer has no record of its conversation.`,
      }[status.reason] ?? `${name}'s work can't be shown.`;
  }
  return null;
}

const timeFormat = new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

/** "2m 10s", "45s", "1h 5m". */
function duration(from: string, to: string) {
  const seconds = Math.max(0, Math.round((Date.parse(to) - Date.parse(from)) / 1000));
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ${seconds % 60}s`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

/**
 * Turns Crewmark's heartbeat started, hidden by default: one line for a run of them, opened to show them. They're
 * mostly the employee checking in and finding nothing to do.
 */
function Heartbeats({ turns, lastIndex }: { turns: WorkTurn[]; lastIndex: number }) {
  const [open, setOpen] = React.useState(false);
  const working = turns.some((turn) => turn.index === lastIndex && !turn.done);
  return (
    <li className="grid gap-8">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center gap-1 justify-self-center rounded-md px-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronRightIcon className={cn("size-3 transition-transform", open && "rotate-90")} />
        {turns.length === 1 ? "Heartbeat" : `${turns.length} heartbeats`}
        {working && " · working…"}
      </button>
      {open && (
        <ol className="grid gap-8">
          {turns.map((turn) => (
            <Turn key={turn.index} turn={turn} last={turn.index === lastIndex} />
          ))}
        </ol>
      )}
    </li>
  );
}

/** One turn: what started it, what came in along the way, its steps folded, and its reply. */
function Turn({ turn, last }: { turn: WorkTurn; last: boolean }) {
  const working = last && !turn.done;
  return (
    <li className="grid gap-3">
      <Prompt turn={turn} />
      {turn.asides?.map((aside, i) => (
        <Said key={i} origin={aside.origin} text={aside.text} at={aside.at} aside />
      ))}
      {turn.stepCount > 0 && <Steps turn={turn} working={working} />}
      {turn.reply ? (
        <div className="grid gap-1">
          <MarkdownView value={turn.reply} className="min-w-0 break-words" />
          {turn.repliedAt && (
            <p className="text-xs text-muted-foreground" suppressHydrationWarning>
              {working ? "Still working" : `Replied in ${duration(turn.at, turn.repliedAt)}`}
              {" · "}
              <time dateTime={turn.repliedAt} title={fullDate.format(new Date(turn.repliedAt))}>
                {timeFormat.format(new Date(turn.repliedAt))}
              </time>
            </p>
          )}
        </div>
      ) : working ? (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-foreground/60" aria-hidden />
          Working…
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">Ended without a reply.</p>
      )}
    </li>
  );
}

function Prompt({ turn }: { turn: WorkTurn }) {
  switch (turn.origin) {
    case "heartbeat":
      return <Marker title={turn.prompt}>Heartbeat</Marker>;
    case "task":
      return <Marker title={turn.prompt}>Background task: {turn.prompt}</Marker>;
    case "compact":
      return <Marker>The conversation was summarised to go on</Marker>;
  }
  return <Said origin={turn.origin} text={turn.prompt} at={turn.at} />;
}

/** A line across the conversation for what started a turn without anyone saying something. */
function Marker({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <p title={title} className="truncate text-center text-xs text-muted-foreground">
      {children}
    </p>
  );
}

/** Something said to the agent: a person's words on the right, as in a chat; another session's on the left. */
function Said({ origin, text, at, aside = false }: { origin: string; text: string; at: string; aside?: boolean }) {
  const person = origin === "human";
  const crewmark = text.startsWith("[Crewmark]");
  const label = person ? (aside ? "While it was working" : null) : crewmark ? "Crewmark" : "Another session";
  return (
    <div className={cn("grid max-w-[min(36rem,85%)] gap-1", person && "justify-items-end justify-self-end")}>
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
      <div
        title={fullDate.format(new Date(at))}
        className={cn(
          "rounded-2xl px-3.5 py-2 text-sm break-words",
          person ? "rounded-br-md bg-muted" : "rounded-bl-md border border-rule text-muted-foreground",
        )}
      >
        <MarkdownView value={crewmark ? text.replace(/^\[Crewmark\]\s*/, "") : text} className="min-w-0 [&_.tiptap]:text-inherit" />
      </div>
    </div>
  );
}

/** The steps between the prompt and the reply, folded into one line until opened. */
function Steps({ turn, working }: { turn: WorkTurn; working: boolean }) {
  const [open, setOpen] = React.useState(false);
  const latest = turn.steps.at(-1);
  const hidden = turn.stepCount - turn.steps.length;
  return (
    <div className="grid gap-2">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-0 items-center gap-1.5 justify-self-start rounded-md py-0.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronRightIcon className={cn("size-3.5 shrink-0 transition-transform", open && "rotate-90")} />
        <span className="shrink-0">
          {turn.stepCount} {turn.stepCount === 1 ? "step" : "steps"}
        </span>
        {working && !open && latest && <span className="truncate">· {stepLine(latest)}</span>}
      </button>
      {open && (
        <ol className="grid gap-1.5 border-l border-rule pl-4 text-[13px]">
          {hidden > 0 && <li className="text-xs text-muted-foreground">{hidden} earlier steps not shown</li>}
          {turn.steps.map((step, i) => (
            <li key={i} className="grid min-w-0">
              {step.kind === "text" ? (
                <span className="text-muted-foreground italic">{step.summary}</span>
              ) : (
                <>
                  <span className="min-w-0 truncate">
                    <span className="font-medium">{toolLabel(step.tool)}</span>{" "}
                    <span className="text-muted-foreground">{step.summary}</span>
                  </span>
                  {step.result && (
                    <span className={cn("truncate text-xs", step.error ? "text-destructive" : "text-muted-foreground/80")}>
                      {step.error ? `Failed: ${step.result}` : step.result}
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function stepLine(step: WorkStep) {
  return step.kind === "text" ? step.summary : `${toolLabel(step.tool)} ${step.summary}`;
}

/** A tool as a person would say what it did. */
function toolLabel(tool = "") {
  const known: Record<string, string> = {
    Bash: "Ran",
    Read: "Read",
    Write: "Wrote",
    Edit: "Edited",
    MultiEdit: "Edited",
    NotebookEdit: "Edited",
    Grep: "Searched",
    Glob: "Searched",
    WebFetch: "Fetched",
    WebSearch: "Searched the web for",
    Agent: "Asked an agent to",
    Task: "Asked an agent to",
    Skill: "Used",
  };
  if (known[tool]) return known[tool];
  // mcp__server__tool → "tool".
  const parts = tool.split("__");
  return (parts.at(-1) ?? tool).replace(/_/g, " ");
}
