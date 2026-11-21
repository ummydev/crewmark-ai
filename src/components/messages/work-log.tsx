"use client";

import * as React from "react";
import { ChevronRightIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { StaticMarkdownView } from "@/components/markdown-editor";
import { useFollowBottom } from "@/components/messages/follow-bottom";
import { lastWordsKey, noteLastWords, type LastWords } from "@/components/messages/last-words";
import { FileLinks, useOpenFile } from "@/components/messages/file-viewer";
import { ImageViewer, useOpenImage } from "@/components/messages/image-viewer";
import { WorkFiles } from "@/components/messages/work-files";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { sendRealtime, useRealtime } from "@/components/use-realtime";
import { fullDate } from "@/lib/format";
import { cacheKey, peekCache, readCache, writeCache } from "@/lib/local-cache";
import { isNoReply, withoutNoReply } from "@/lib/no-reply";
import type { AppRun, Employee, WorkStep, WorkTurn } from "@/lib/types";
import { cn } from "@/lib/utils";
import { readSaid, sameWords } from "@/lib/work-messages";

// An employee's work (MC-186): its agent's conversation turn by turn, like a chat. Each turn shows what started it
// and the reply it ended with; what happened in between folds into "N steps". The employee's daemon reads the
// conversation on its computer and sends it through the realtime Worker while this is open (cli/worklog.go); none of
// it is stored by Crewmark. This browser keeps what it last showed (MC-235), so the work shows at once, and even while
// that computer is off, and updates as the computer answers.
//
// A turn whose reply is CREWMARK_NO_REPLY (MC-237: a heartbeat that found nothing new, a notice that needed nothing)
// doesn't show at all, unless the person said something in it; nor does a heartbeat that ended without a word. So a
// heartbeat that shows has something to tell the person, and its reply shows like any other, under a "Heartbeat" line
// (MC-268; they used to be folded away, from before employees could say they had nothing).
//
// What the person writes in the box below it (MC-249) shows at once, as on its way, until it reaches the conversation
// and shows as theirs in the turn it started or came into (src/lib/work-messages.ts).
//
// It reads as a chat (MC-256): messages and replies, without lines about them ("Replied in", "From Crewmark", "Ended
// without a reply"); a message's time shows under it while the pointer is over it, or after a tap on a phone. Nothing
// in it is wider than the view (MC-257): long paths and links break, code scrolls within its block.
//
// The pictures and videos the agent sent the person (MC-287) show in the turn, before its reply: loaded from the
// employee's computer through the Worker (work-files.tsx).

/** How long to wait for the employee's computer before saying it didn't answer. */
const ANSWER_MS = 10_000;
/**
 * How many turns the employee's computer reads at a time (MC-302): the latest page on opening, and each page before it
 * as the person scrolls up. The web sets it and the daemon follows (crewmark 0.8.6 or later; older ones read 10).
 */
const PAGE_TURNS = 10;
/** How many of an employee's latest turns this browser keeps. */
const KEPT_TURNS = 40;
/**
 * With fewer turns than this to show, because the rest replied CREWMARK_NO_REPLY, earlier turns are asked for by
 * themselves, up to AUTO_PAGES pages, so a run of quiet heartbeats doesn't leave the view empty.
 */
const FEW_SHOWN = 3;
const AUTO_PAGES = 5;

interface CachedWork {
  turns: WorkTurn[];
  more: boolean;
}

/** A message the person wrote in the work log, shown until it reaches the employee's conversation. */
export interface Outgoing {
  id: string;
  body: string;
  at: string;
  /** Whether Crewmark has it; till then it's being sent. */
  sent: boolean;
}

type ReadAside = NonNullable<WorkTurn["asides"]>[number] & { by?: string };
/** A turn as it shows: who started it and who wrote while it worked, read from what they said (readSaid). */
type ReadTurn = Omit<WorkTurn, "asides"> & { by?: string; asides: ReadAside[] };

function readTurn(turn: WorkTurn): ReadTurn {
  const said = readSaid(turn.origin, turn.prompt);
  return {
    ...turn,
    origin: said.origin,
    prompt: said.text,
    by: said.by,
    asides: (turn.asides ?? []).map((aside) => {
      const read = readSaid(aside.origin, aside.text);
      return { ...aside, origin: read.origin, text: read.text, by: read.by };
    }),
  };
}

/** Whether a message written in the work log has reached the conversation, in this turn: it started it or came in. */
function reached(turn: ReadTurn, message: Outgoing) {
  // Not words written long before it (the computer's clock and this browser's may differ a little). Each by its own
  // time: a turn may start earlier than the messages that come in while it works, by far when it's the conversation
  // being summarised, which takes the time of what it summarises (MC-352).
  const before = (at: string) => Date.parse(at) < Date.parse(message.at) - 10 * 60_000;
  if (turn.origin === "human" && !before(turn.at) && sameWords(message.body, turn.prompt)) return true;
  return turn.asides.some((aside) => aside.origin === "human" && !before(aside.at) && sameWords(message.body, aside.text));
}

/** The turn started after the message was written, by more than the clocks may differ. */
function startedAfter(turn: ReadTurn, message: Outgoing) {
  return message.sent && Date.parse(turn.at) > Date.parse(message.at) + 60_000;
}

type Status =
  | { kind: "waiting" }
  | { kind: "ready" }
  | { kind: "silent" }
  | { kind: "offline" }
  | { kind: "unavailable"; reason: string };

export function WorkLog({
  employee,
  outbox = [],
  onArrived,
  onApp,
}: {
  employee: Employee;
  /** What the person wrote in the work log that hasn't shown up in the conversation yet. */
  outbox?: Outgoing[];
  onArrived?: (ids: string[]) => void;
  /** How the Claude app runs the conversation, as its computer says with each fresh page (MC-319). */
  onApp?: (app: AppRun | null) => void;
}) {
  const { organization, currentUser } = useCrewStore();
  const key = cacheKey(currentUser.id, organization.id, "work", employee.id);
  const [work, setWork] = React.useState<CachedWork>(() => peekCache<CachedWork>(key) ?? { turns: [], more: false });
  const { turns, more } = work;
  const [status, setStatus] = React.useState<Status>({ kind: "waiting" });
  const [loadingEarlier, setLoadingEarlier] = React.useState(false);
  const { scrollerRef, contentRef, atBottomRef } = useFollowBottom();
  /** How far the view was from the end when earlier turns came in, to keep it there (null when there's nothing to keep). */
  const fromBottom = React.useRef<number | null>(null);
  React.useLayoutEffect(() => {
    const view = scrollerRef.current;
    if (view && fromBottom.current !== null) view.scrollTop = view.scrollHeight - fromBottom.current;
    fromBottom.current = null;
  }, [work, scrollerRef]);

  /** Shows the work and keeps its latest turns in this browser. */
  const show = React.useCallback(
    (next: (prev: CachedWork) => CachedWork) =>
      setWork((prev) => {
        const value = next(prev);
        const kept = value.turns.slice(-KEPT_TURNS);
        writeCache(key, { turns: kept, more: value.more || kept.length < value.turns.length });
        return value;
      }),
    [key],
  );

  // This browser's copy, unless the computer has answered already.
  const answered = React.useRef(false);
  React.useEffect(() => {
    void readCache<CachedWork>(key).then((cached) => cached && !answered.current && setWork((prev) => (prev.turns.length ? prev : cached)));
  }, [key]);

  const open = useRealtime(
    organization.id,
    (push) => {
      if (!push.type.startsWith("worklog") || !("employeeId" in push) || push.employeeId !== employee.id) return;
      if (push.type === "worklog.offline") return setStatus({ kind: "offline" });
      if (push.type === "worklog.unavailable") return setStatus({ kind: "unavailable", reason: push.reason });
      if (push.type !== "worklog") return;
      setStatus({ kind: "ready" });
      answered.current = true;
      const incoming = push.turns ?? [];
      noteLastWords(lastWordsKey(currentUser.id, organization.id), employee.id, lastWords(incoming));
      if (push.page === "earlier") {
        // Kept where the person reads as the turns come in above (scroll anchoring isn't in every browser: Safari).
        const view = scrollerRef.current;
        if (view && !atBottomRef.current) fromBottom.current = view.scrollHeight - view.scrollTop;
        show((prev) => ({ turns: merge(prev.turns, incoming), more: Boolean(push.more) }));
        setLoadingEarlier(false);
      } else if (push.page === "latest") {
        show((prev) => latestPage(prev, incoming, Boolean(push.more)));
        onApp?.(push.app ?? null);
      } else {
        show((prev) => ({ ...prev, turns: merge(prev.turns, incoming) }));
      }
    },
    () => {},
  );

  // Watch while the socket is open, again each time it opens, and stop on leaving.
  React.useEffect(() => {
    if (!open) return;
    sendRealtime(organization.id, { type: "worklog.watch", employeeId: employee.id, pageTurns: PAGE_TURNS });
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

  /**
   * Asks for the turns before those shown. Asked for by the person, or by scrolling near the top, the view stays where
   * they are reading: the turns come in above it.
   */
  function loadEarlier({ auto = false } = {}) {
    if (!turns.length) return;
    if (!auto) atBottomRef.current = false;
    setLoadingEarlier(true);
    const asked = { type: "worklog.more", employeeId: employee.id, before: turns[0].index, pageTurns: PAGE_TURNS };
    if (!sendRealtime(organization.id, asked)) setLoadingEarlier(false);
  }

  // Scrolling up to within a screen of the top asks for the turns before (MC-302), as does a page too short to scroll.
  // The observer starts again with each page and each answer, so it asks again while the top is still in reach.
  const topRef = React.useRef<HTMLDivElement>(null);
  const loadOnScroll = React.useEffectEvent(() => loadEarlier({ auto: atBottomRef.current }));
  React.useEffect(() => {
    const top = topRef.current;
    const view = scrollerRef.current;
    if (!top || !view || status.kind !== "ready" || !more || loadingEarlier) return;
    const near = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && loadOnScroll(), {
      root: view,
      rootMargin: "100% 0px 0px 0px",
    });
    near.observe(top);
    return () => near.disconnect();
  }, [status.kind, more, loadingEarlier, turns, scrollerRef]);

  const read = React.useMemo(() => turns.map(readTurn), [turns]);
  const shown = read.filter(shows);

  // Messages from the work log go once they're in the conversation; the rest show at the end, on their way.
  // In the conversation: found in a turn shown, or a later turn has started since (MC-345). The daemon passes messages
  // on in order, so one that started after it means it went in before, into a turn not shown (the person scrolled to
  // the latest of a long conversation) or in words the turn tells a little differently (a list, a quote).
  const arrived = outbox
    .filter((message) => read.some((turn) => reached(turn, message) || startedAfter(turn, message)))
    .map((message) => message.id);
  const waiting = outbox.filter((message) => !arrived.includes(message.id));
  const arrivedKey = arrived.join(" ");
  const arrive = React.useEffectEvent((ids: string[]) => onArrived?.(ids));
  React.useEffect(() => {
    if (arrivedKey) arrive(arrivedKey.split(" "));
  }, [arrivedKey]);
  // Writing takes the view to the end, where the message shows.
  const outgoing = outbox.length;
  const seenOutgoing = React.useRef(outgoing);
  React.useLayoutEffect(() => {
    if (outgoing > seenOutgoing.current && scrollerRef.current) {
      atBottomRef.current = true;
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
    seenOutgoing.current = outgoing;
  }, [outgoing, scrollerRef, atBottomRef]);
  const autoPages = React.useRef(0);
  const loadMoreByItself = React.useEffectEvent(() => loadEarlier({ auto: true }));
  React.useEffect(() => {
    if (status.kind !== "ready" || !more || loadingEarlier || shown.length >= FEW_SHOWN) return;
    if (autoPages.current >= AUTO_PAGES) return;
    autoPages.current += 1;
    void Promise.resolve().then(loadMoreByItself);
  }, [status.kind, more, loadingEarlier, shown.length]);

  const notice = noticeFor(status, employee.name, turns.length > 0);
  return (
    <FileLinks employee={employee}>
    <ImageViewer scope={scrollerRef}>
    <div ref={scrollerRef} className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 py-4 [overflow-anchor:none]">
      <div ref={contentRef} className="mx-auto grid max-w-3xl grid-cols-1 gap-8">
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
              <div ref={topRef} className="text-center">
                <Button variant="ghost" size="sm" onClick={() => loadEarlier()} disabled={loadingEarlier}>
                  {loadingEarlier ? "Loading…" : "Earlier turns"}
                </Button>
              </div>
            )}
            {shown.length === 0 && !loadingEarlier && (
              <p className="m-auto max-w-sm py-10 text-center text-sm text-muted-foreground">
                Nothing new from {employee.name} lately: its last turns had nothing to tell you.
              </p>
            )}
            <ol className="grid grid-cols-1 gap-8">
              {shown.map((turn) => (
                <Turn key={turn.index} turn={turn} employee={employee} last={turn.index === turns.at(-1)!.index} />
              ))}
            </ol>
          </>
        )}
        {waiting.length > 0 && (
          <ol className="grid grid-cols-1 gap-4" aria-label="On its way">
            {waiting.map((message) => (
              <li key={message.id} className="grid grid-cols-1">
                <Said
                  origin="human"
                  text={message.body}
                  at={message.at}
                  note={message.sent ? `On its way to ${employee.name}` : "Sending…"}
                />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
    </ImageViewer>
    </FileLinks>
  );
}

/**
 * Whether the turn shows: not one that said it had nothing for the person, or a heartbeat that ended without a word
 * (or a file), unless the person spoke in it.
 */
function shows(turn: ReadTurn) {
  const quiet = turn.origin === "heartbeat" && turn.done && turn.reply.trim() === "" && !turn.files?.length;
  return personSpoke(turn) || (!isNoReply(turn.reply) && !quiet);
}

/**
 * What the conversation said last, as the Work tab shows it, for the list of conversations (MC-277): the last reply,
 * or else what a person last wrote in it.
 */
export function lastWords(turns: WorkTurn[]): LastWords | null {
  for (const turn of turns.map(readTurn).filter(shows).reverse()) {
    const reply = isNoReply(turn.reply) ? withoutNoReply(turn.reply) : turn.reply;
    if (reply.trim()) return { at: turn.repliedAt ?? turn.at, text: reply, mine: false };
    const aside = turn.asides.findLast((a) => a.origin === "human");
    if (aside) return { at: aside.at, text: aside.text, mine: true, by: aside.by };
    if (turn.origin === "human") return { at: turn.at, text: turn.prompt, mine: true, by: turn.by };
  }
  return null;
}

/** Whether the person said something in the turn: it started with their words, or they wrote while it worked. */
function personSpoke(turn: ReadTurn) {
  return turn.origin === "human" || turn.asides.some((aside) => aside.origin === "human");
}


/**
 * What shows once the computer sends its latest turns. Earlier turns already shown (loaded with "Earlier turns", or
 * kept in this browser) stay when they join up with them; when they don't, because more turns happened since than
 * the page holds, or the employee is in another conversation now (its turns are numbered from 0 again), they go.
 */
function latestPage(prev: CachedWork, incoming: WorkTurn[], more: boolean): CachedWork {
  if (incoming.length === 0) return { turns: [], more };
  const first = incoming[0].index;
  const last = incoming.at(-1)!.index;
  const sameConversation = !prev.turns.some((turn) => turn.index > last);
  const joined = !more || prev.turns.some((turn) => turn.index >= first - 1);
  if (!sameConversation || !joined) return { turns: incoming, more };
  const older = prev.turns.filter((turn) => turn.index < first);
  return { turns: [...older, ...incoming], more: older.length > 0 ? prev.more : more };
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


/** One turn: what started it, what came in along the way, its steps folded, the files it sent, and its reply. */
function Turn({ turn, employee, last }: { turn: ReadTurn; employee: Employee; last: boolean }) {
  const working = last && !turn.done;
  const openImage = useOpenImage();
  // Files it names open from its computer, for the person whose computer it is (MC-315).
  const openFile = useOpenFile();
  // Only what the person said shows (and the reply): what other sessions, Crewmark or a background task sent the
  // agent is folded away with the steps, like them in the way of reading the conversation.
  const folded = !SHOWN_ORIGINS.has(turn.origin);
  const asides = turn.asides;
  const told = asides.filter((aside) => aside.origin === "human");
  // A turn the person spoke in shows even when it replied CREWMARK_NO_REPLY: without the marker, so with no reply.
  const reply = isNoReply(turn.reply) ? withoutNoReply(turn.reply) : turn.reply;
  const tucked = asides.filter((aside) => aside.origin !== "human");
  return (
    <li className="grid grid-cols-1 gap-3">
      {!folded && <Prompt turn={turn} />}
      {told.map((aside, i) => (
        <Said key={i} origin={aside.origin} text={aside.text} at={aside.at} by={aside.by} />
      ))}
      {(folded || tucked.length > 0 || turn.stepCount > 0) && (
        <Steps turn={turn} working={working}>
          {folded && <Said origin={turn.origin} text={turn.prompt} at={turn.at} />}
          {tucked.map((aside, i) => (
            <Said key={i} origin={aside.origin} text={aside.text} at={aside.at} />
          ))}
        </Steps>
      )}
      {turn.files && turn.files.length > 0 && (
        <Message at={turn.files[0].at}>
          <WorkFiles employee={employee} files={turn.files} />
        </Message>
      )}
      {reply && (
        <Message at={turn.repliedAt ?? turn.at}>
          <StaticMarkdownView
            value={reply}
            className="min-w-0 [overflow-wrap:anywhere] [&_img]:cursor-zoom-in"
            onImageClick={openImage}
            onFileClick={openFile}
          />
        </Message>
      )}
      {working && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-foreground/60" aria-hidden />
          Working…
        </p>
      )}
    </li>
  );
}

/** Turns whose prompt shows: the person's own words, and the lines for a heartbeat or a summary. */
const SHOWN_ORIGINS = new Set(["human", "heartbeat", "compact"]);

function Prompt({ turn }: { turn: ReadTurn }) {
  switch (turn.origin) {
    case "heartbeat":
      return <Marker title={turn.prompt}>Heartbeat</Marker>;
    case "compact":
      return <Marker>The conversation was summarised to go on</Marker>;
  }
  return <Said origin={turn.origin} text={turn.prompt} at={turn.at} by={turn.by} />;
}

/** A line across the conversation for what started a turn without anyone saying something. */
function Marker({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <p title={title} className="truncate text-center text-xs text-muted-foreground">
      {children}
    </p>
  );
}

/**
 * Something said to the agent: a person's words on the right, as in a chat, named when someone else wrote them
 * (`by`, for words Crewmark passed on); another session's on the left (only in a turn's folded part). `note` says
 * where a message written here is, till it reaches the conversation.
 */
function Said({ origin, text, at, by, note }: { origin: string; text: string; at: string; by?: string; note?: string }) {
  const { currentUser } = useCrewStore();
  const openImage = useOpenImage();
  const person = origin === "human";
  const crewmark = text.startsWith("[Crewmark]");
  const someoneElse = by && by !== (currentUser.name || currentUser.username) ? by : null;
  const label = person ? someoneElse : crewmark ? "Crewmark" : origin === "task" ? "Background task" : "Another session";
  return (
    <Message
      at={at}
      note={note}
      className={cn("max-w-[min(36rem,85%)]", person && "justify-items-end justify-self-end")}
    >
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
      <div
        className={cn(
          "min-w-0 rounded-2xl px-3.5 py-2 text-sm [overflow-wrap:anywhere]",
          person ? "rounded-br-md bg-muted" : "rounded-bl-md border border-rule text-muted-foreground",
        )}
      >
        {/* Images show small, as in a chat (MC-271); a click opens them in the viewer (MC-304). */}
        <StaticMarkdownView
          value={crewmark ? text.replace(/^\[Crewmark\]\s*/, "") : text}
          className="min-w-0 [&_.tiptap]:text-inherit [&_img]:inline-block [&_img]:max-h-40 [&_img]:max-w-48 [&_img]:w-auto [&_img]:cursor-zoom-in"
          onImageClick={openImage}
        />
      </div>
    </Message>
  );
}

/**
 * A message with its time under it, in this browser's time zone, shown while the pointer is over the message, or
 * after a tap on it on a phone (a second tap hides it). Its line keeps its height, so nothing moves when it shows.
 */
function Message({
  at,
  note,
  className,
  children,
}: {
  at: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [tapped, setTapped] = React.useState(false);
  return (
    <div
      data-tapped={tapped || undefined}
      data-quotable
      onPointerUp={(event) => {
        if (event.pointerType === "touch") setTapped((shown) => !shown);
      }}
      className={cn("group/message grid min-w-0 grid-cols-1 gap-1", className)}
    >
      {children}
      <p className="flex min-h-4 gap-1.5 text-xs leading-4 text-muted-foreground">
        <time
          dateTime={at}
          suppressHydrationWarning
          className="hidden group-hover/message:inline group-data-[tapped]/message:inline"
        >
          {fullDate.format(new Date(at))}
        </time>
        {note && <span>{note}</span>}
      </p>
    </div>
  );
}

/**
 * The steps between the prompt and the reply, folded into one line until opened, with what else the agent was sent
 * (`children`: what started the turn when it wasn't the person, and messages from other sessions meanwhile).
 */
function Steps({ turn, working, children }: { turn: WorkTurn; working: boolean; children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const latest = turn.steps.at(-1);
  const hidden = turn.stepCount - turn.steps.length;
  const steps = turn.stepCount > 0 && `${turn.stepCount} ${turn.stepCount === 1 ? "step" : "steps"}`;
  return (
    <div className="grid grid-cols-1 gap-2">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex max-w-full min-w-0 items-center gap-1.5 justify-self-start rounded-md py-0.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronRightIcon className={cn("size-3.5 shrink-0 transition-transform", open && "rotate-90")} />
        <span className="shrink-0">{steps || "Other messages"}</span>
        {working && !open && latest && <span className="truncate">· {stepLine(latest)}</span>}
      </button>
      {open && children}
      {open && turn.stepCount > 0 && (
        <ol className="grid grid-cols-1 gap-1.5 border-l border-rule pl-4 text-[13px]">
          {hidden > 0 && <li className="text-xs text-muted-foreground">{hidden} earlier steps not shown</li>}
          {turn.steps.map((step, i) => (
            <li key={i} className="grid min-w-0 grid-cols-1">
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
    SendUserFile: "Sent you",
  };
  if (known[tool]) return known[tool];
  // mcp__server__tool → "tool".
  const parts = tool.split("__");
  return (parts.at(-1) ?? tool).replace(/_/g, " ");
}
