"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ImagesIcon, Loader2Icon, MessageCircleIcon, PinIcon, PlusIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { MarkdownEditor, StaticMarkdownView, imageFiles, type MarkdownEditorHandle } from "@/components/markdown-editor";
import { ConversationContextMenu, ConversationMenu } from "@/components/messages/conversation-actions";
import { FolderButton, RunButton } from "@/components/messages/conversation-settings";
import { useFollowBottom } from "@/components/messages/follow-bottom";
import { ConversationMedia } from "@/components/messages/media-panel";
import { useMessages } from "@/components/messages/messages-provider";
import { useConversationView } from "@/components/messages/use-conversation-view";
import { lastWordsKey, noteLastWords, useLastWords, type LastWords } from "@/components/messages/last-words";
import { QuoteSelection } from "@/components/messages/quote-selection";
import { WorkLog, lastWords, type Outgoing } from "@/components/messages/work-log";
import { segmentClass } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useImageUpload } from "@/components/use-image-upload";
import { sendRealtime, useRealtime } from "@/components/use-realtime";
import { getDirectMessages, sendDirectMessageTo, writeToEmployee } from "@/lib/actions";
import { DIRECT_MESSAGES } from "@/lib/features";
import { cacheKey, peekCache, readCache, writeCache } from "@/lib/local-cache";
import { track } from "@/lib/analytics";
import { fullDate, timeAgo } from "@/lib/format";
import { IMAGE_TYPES, type AppRun, type DirectMessage, type DirectThread, type Employee } from "@/lib/types";
import { cn } from "@/lib/utils";

// Messages (MC-169): the signed-in person's direct conversations with employees, one per employee, like a chat app.
// The list on the left, the conversation on the right; on a phone, one at a time. Employees write here only what the
// person needs to see; their working notes stay in their own conversations.
//
// Quick as a chat app (MC-235): picking another employee changes the address in the browser only, with nothing asked
// of the server, and what each conversation last showed is kept in this browser (src/lib/local-cache.ts), so it shows
// at once and updates when Crewmark answers.

/** The red count of unread messages, in the list and the sidebar. */
export function UnreadBadge({ count, className }: { count: number; className?: string }) {
  if (count <= 0) return null;
  return (
    <span
      className={cn(
        "flex h-[18px] min-w-[18px] shrink-0 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] leading-none font-medium text-white tabular-nums",
        className,
      )}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}

/** The employee whose conversation is open: the last part of /org/<slug>/messages/<id>, if there is one. */
function useOpenEmployeeId() {
  const pathname = usePathname();
  const match = /\/messages\/([^/]+)\/?$/.exec(pathname ?? "");
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * A link within Messages that only changes the address: Next.js keeps usePathname in step (and Back and Forward
 * work), and this page, already showing, follows it. Opening in a new tab works as for any link.
 */
function ConversationLink({ href, ...props }: React.ComponentProps<"a"> & { href: string }) {
  return (
    <a
      href={href}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        if (window.location.pathname !== href) window.history.pushState(null, "", href);
      }}
    />
  );
}

export function MessagesView() {
  const { employees } = useCrewStore();
  const { threads } = useMessages();
  const employeeId = useOpenEmployeeId();
  const employee = employeeId ? employees.find((e) => e.id === employeeId) : undefined;

  return (
    // One screen tall, less the sheet's margin and its hairline edge beside the sidebar (without the edge's 2px the page
    // was taller than the window, so it scrolled and bounced: MC-268). So the conversation scrolls inside it and the
    // box to write in stays at the bottom, as in a chat app. Each column has its own header, so nothing says twice who
    // the conversation is with. Side by side only from lg: beside the sidebar on a tablet, the conversation would be
    // a 200px strip, so there one shows at a time, as on a phone.
    <div className="flex h-svh md:h-[calc(100svh-1rem-2px)]">
      <nav
        aria-label="Conversations"
        className={cn(
          "w-full shrink-0 flex-col lg:w-80 lg:border-r lg:border-rule",
          employeeId ? "hidden lg:flex" : "flex",
        )}
      >
        <header className="flex h-12 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 text-muted-foreground md:hidden" />
          <MessageCircleIcon className="size-4 text-muted-foreground" />
          <h1 className="text-sm font-medium">Messages</h1>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ConversationList threads={threads} selected={employeeId} />
        </div>
      </nav>
      <section className={cn("min-w-0 flex-1 flex-col", employeeId ? "flex" : "hidden lg:flex")}>
        {employee ? (
          <Conversation
            key={employee.id}
            employee={employee}
            thread={threads?.find((t) => t.employeeId === employee.id)}
          />
        ) : employeeId ? (
          <Centered>That employee doesn&apos;t exist any more.</Centered>
        ) : (
          <Centered>Pick an employee to message them.</Centered>
        )}
      </section>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return <p className="m-auto max-w-xs p-6 text-center text-sm text-muted-foreground">{children}</p>;
}

/** Markdown as one plain line, for a preview. */
function plain(markdown: string) {
  return markdown
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "[image]")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Every employee, as in a chat app (MC-277): each name, and under it what its conversation said last; the latest
 * first, then the rest by name. Roles are left out of the list, which read as clutter beside the names (MC-288). What they said comes from their computers (last-words.ts): the list asks
 * for it when it opens, when the socket opens again and when the tab comes back into view.
 */
function ConversationList({ threads, selected }: { threads: DirectThread[] | null; selected?: string }) {
  const { employees, orgPath, organization, currentUser } = useCrewStore();
  const { workUnread, repliedAt, pinned } = useMessages();
  const key = lastWordsKey(currentUser.id, organization.id);
  const words = useLastWords(key);
  const ask = React.useCallback(() => sendRealtime(organization.id, { type: "worklog.latest" }), [organization.id]);
  // Who's at work now, as their computers say (MC-354): told when they start and stop, and with each answer to `ask`.
  const [working, setWorking] = React.useState<Record<string, boolean>>({});
  const open = useRealtime(
    organization.id,
    (push) => {
      if (push.type !== "worklog.latest") return;
      noteLastWords(key, push.employeeId, lastWords(push.turns ?? []));
      const now = Boolean(push.working);
      setWorking((all) => (Boolean(all[push.employeeId]) === now ? all : { ...all, [push.employeeId]: now }));
    },
    ask,
  );
  React.useEffect(() => {
    if (!open) return;
    ask();
    const back = () => document.visibilityState === "visible" && ask();
    document.addEventListener("visibilitychange", back);
    return () => document.removeEventListener("visibilitychange", back);
  }, [open, ask]);

  if (threads === null) {
    return (
      <div className="grid gap-3 p-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }
  const byEmployee = new Map(threads.map((t) => [t.employeeId, t]));
  // What shows under each name: the conversation's last words, or a direct message if that's newer.
  const last = (employee: Employee) => {
    const said = words[employee.id];
    const message = DIRECT_MESSAGES ? byEmployee.get(employee.id)?.last : undefined;
    if (message && (!said || message.createdAt > said.at)) {
      return { at: message.createdAt, text: message.body, mine: !message.fromEmployee } satisfies LastWords;
    }
    return said;
  };
  // Latest first: by what they said, or when Crewmark heard they replied if that's newer (their computer may be off).
  const latest = (employee: Employee) => {
    const [said, replied] = [last(employee)?.at ?? "", repliedAt[employee.id] ?? ""];
    return said > replied ? said : replied;
  };
  // Pinned ones on top, pinned last first (MC-310); the rest latest first.
  const order = [...employees].sort((a, b) => {
    const [pa, pb] = [pinned[a.id] ?? "", pinned[b.id] ?? ""];
    if (pa !== pb) return pa < pb ? 1 : -1;
    const [x, y] = [latest(a), latest(b)];
    return x !== y ? (x < y ? 1 : -1) : a.name.localeCompare(b.name);
  });
  if (order.length === 0) return <Centered>No employees yet. Add one to message them here.</Centered>;
  const me = currentUser.name || currentUser.username;
  return (
    <ul className="flex flex-col gap-0.5 px-2 pb-2">
      {order.map((employee) => {
        // Replies not seen yet (MC-280), but for the conversation open beside the list, which is being seen.
        const unread =
          employee.id === selected ? 0 : (byEmployee.get(employee.id)?.unread ?? 0) + (workUnread[employee.id] ?? 0);
        const said = last(employee);
        const who = said?.mine ? (said.by && said.by !== me ? `${said.by}: ` : "You: ") : "";
        return (
          <li key={employee.id}>
            <ConversationContextMenu employee={employee} open={employee.id === selected}>
              <ConversationLink
                href={orgPath(`/messages/${employee.id}`)}
                aria-current={employee.id === selected ? "page" : undefined}
                className="flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors select-none [-webkit-touch-callout:none] hover:bg-muted/70 aria-[current=page]:bg-muted data-[popup-open]:bg-muted/70"
              >
                <EmployeeAvatar employee={employee} size="md" />
                {/* Flex, not grid: a grid's track grows to a long preview and pushes the time and the unread count out
                    of the column, where nobody sees which conversation is new (MC-174). */}
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="flex min-w-0 items-baseline gap-2">
                    <span className={cn("min-w-0 flex-1 truncate text-sm", unread ? "font-semibold" : "font-medium")}>
                      {employee.name}
                    </span>
                    {pinned[employee.id] && <PinIcon aria-label="Pinned" className="size-3 shrink-0 self-center text-muted-foreground" />}
                    {latest(employee) && (
                      <time
                        dateTime={latest(employee)}
                        className="shrink-0 text-xs text-muted-foreground"
                        suppressHydrationWarning
                      >
                        {timeAgo(latest(employee))}
                      </time>
                    )}
                  </span>
                  <span className="flex min-w-0 items-center gap-2">
                    {/* Grey whether read or not: the red count says what's new. A line even when empty, so rows match.
                        While it's at work, a small grey spinner turns at the line's right end (MC-354, MC-366). */}
                    <span className="flex min-w-0 flex-1 items-center gap-1.5 text-[13px] text-muted-foreground">
                      <span className="min-w-0 flex-1 truncate">{said ? `${who}${plain(said.text)}` : "\u00a0"}</span>
                      {working[employee.id] && (
                        <Loader2Icon role="status" aria-label="Working" className="size-3 shrink-0 animate-spin opacity-70" />
                      )}
                    </span>
                    <UnreadBadge count={unread} />
                  </span>
                </span>
              </ConversationLink>
            </ConversationContextMenu>
          </li>
        );
      })}
    </ul>
  );
}

const dayFormat = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" });
const timeFormat = new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

function dayLabel(iso: string) {
  const day = new Date(iso).toDateString();
  if (day === new Date().toDateString()) return "Today";
  if (day === new Date(Date.now() - 86_400_000).toDateString()) return "Yesterday";
  return dayFormat.format(new Date(iso));
}

/** The conversation with one employee: a header line, then the direct messages or the employee's work (MC-186). */
function Conversation({ employee, thread }: { employee: Employee; thread?: DirectThread }) {
  const { orgPath } = useCrewStore();
  // The tab the person last chose, whichever employee they open; only the work while direct messages are off.
  const [chosen, choose] = useConversationView();
  const view = DIRECT_MESSAGES ? chosen : "work";
  // The conversation's pictures and videos, in a panel beside it (MC-318).
  const [media, setMedia] = React.useState(false);
  return (
    <>
      {/* One line: who the conversation is with, and what of theirs is shown. */}
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-rule px-4">
        <ConversationLink
          href={orgPath("/messages")}
          aria-label="All conversations"
          className="-ml-1.5 rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden"
        >
          <ChevronLeftIcon className="size-4" />
        </ConversationLink>
        <EmployeeAvatar employee={employee} size="title" />
        <h2 className="flex min-w-0 items-baseline gap-2 text-sm">
          <Link href={orgPath(`/employees/${employee.id}`)} className="truncate font-medium hover:underline">
            {employee.name}
          </Link>
          {employee.role && <span className="hidden truncate text-muted-foreground md:inline">{employee.role}</span>}
        </h2>
        {DIRECT_MESSAGES && (
          <div role="group" aria-label="Show" className="ml-auto flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              aria-pressed={view === "messages"}
              onClick={() => choose("messages")}
              className={segmentClass(view === "messages")}
            >
              DM
            </button>
            <button
              type="button"
              aria-pressed={view === "work"}
              onClick={() => choose("work")}
              className={segmentClass(view === "work")}
            >
              Work
            </button>
          </div>
        )}
        <span className={cn("flex shrink-0 items-center gap-0.5", !DIRECT_MESSAGES && "ml-auto")}>
          {view === "work" && (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Media"
              title="Pictures and videos sent here"
              aria-pressed={media}
              onClick={() => setMedia((shown) => !shown)}
              className={cn("text-muted-foreground", media && "bg-muted text-foreground")}
            >
              <ImagesIcon />
            </Button>
          )}
          <ConversationMenu employee={employee} />
        </span>
      </header>
      {view === "work" ? (
        <WorkView employee={employee} media={media} onMediaClose={() => setMedia(false)} />
      ) : view === "messages" ? (
        <DirectMessages employee={employee} thread={thread} />
      ) : (
        <div className="min-h-0 flex-1" />
      )}
    </>
  );
}

/** How long a message written in the work log is shown as on its way; the daemon gives up on it after a day. */
const OUTGOING_MS = 24 * 60 * 60_000;

/**
 * The employee's work, and a box to write to it in. As in Claude Code, the person can write while the employee works:
 * the message goes straight into its conversation, between steps (MC-249), and it answers there. It shows at once,
 * as on its way, and then in the work once it's in the conversation. This browser keeps it till then.
 */
function WorkView({
  employee,
  media,
  onMediaClose,
}: {
  employee: Employee;
  /** Whether its media panel is open (MC-318). */
  media: boolean;
  onMediaClose: () => void;
}) {
  const { organization, currentUser } = useCrewStore();
  // Its replies are seen while it's open and on screen (MC-280).
  const { workUnread, readWorkOf } = useMessages();
  const unseen = workUnread[employee.id] ?? 0;
  React.useEffect(() => {
    if (!unseen) return;
    const seen = () => document.visibilityState === "visible" && readWorkOf(employee.id);
    seen();
    document.addEventListener("visibilitychange", seen);
    return () => document.removeEventListener("visibilitychange", seen);
  }, [unseen, employee.id, readWorkOf]);
  const key = cacheKey(currentUser.id, organization.id, "outbox", employee.id);
  const fresh = (messages: Outgoing[]) => messages.filter((m) => Date.now() - Date.parse(m.at) < OUTGOING_MS);
  const [outbox, setOutbox] = React.useState<Outgoing[]>(() => fresh(peekCache<Outgoing[]>(key) ?? []));
  const keep = React.useCallback(
    (next: (prev: Outgoing[]) => Outgoing[]) =>
      setOutbox((prev) => {
        const value = next(prev);
        writeCache(key, value);
        return value;
      }),
    [key],
  );
  React.useEffect(() => {
    void readCache<Outgoing[]>(key).then((cached) => cached && setOutbox((prev) => (prev.length ? prev : fresh(cached))));
  }, [key]);

  const composer = React.useRef<Pick<MarkdownEditorHandle, "quote">>(null);
  // How the Claude app runs it, shown where nothing was picked here (MC-319).
  const [app, setApp] = React.useState<AppRun | null>(null);

  async function send(body: string) {
    const id = crypto.randomUUID();
    const at = new Date().toISOString();
    keep((prev) => [...prev, { id, body, at, sent: false }]);
    noteLastWords(lastWordsKey(currentUser.id, organization.id), employee.id, { at, text: body, mine: true });
    try {
      await writeToEmployee(organization.id, employee.id, body);
      keep((prev) => prev.map((m) => (m.id === id ? { ...m, sent: true } : m)));
      track("work message sent", {});
    } catch (error) {
      keep((prev) => prev.filter((m) => m.id !== id));
      throw error;
    }
  }

  // Only a Claude Code conversation has these to pick (one not connected yet will most likely be one).
  const claude = employee.runtime === "claude-code" || !employee.runtime;
  return (
    <div className="flex min-h-0 flex-1">
      <ConversationMedia employee={employee} send={send} panel={media} onPanelClose={onMediaClose}>
      <div className="flex min-w-0 flex-1 flex-col">
        <WorkLog
          employee={employee}
          outbox={outbox}
          onArrived={(ids) => keep((prev) => prev.filter((m) => !ids.includes(m.id)))}
          onApp={setApp}
        />
        <QuoteSelection onReply={(text) => composer.current?.quote(text)} />
        <Composer
          ref={composer}
          employee={employee}
          send={send}
          left={claude ? <FolderButton employee={employee} /> : undefined}
          right={claude ? <RunButton employee={employee} app={app} /> : undefined}
        />
      </div>
      </ConversationMedia>
    </div>
  );
}

/** The direct messages with the employee, newest at the bottom, and a box to write in. */
/** How many of a conversation's latest messages this browser keeps. */
const KEPT_MESSAGES = 200;

interface CachedMessages {
  messages: DirectMessage[];
  hasMore: boolean;
}

function DirectMessages({ employee, thread }: { employee: Employee; thread?: DirectThread }) {
  const { organization, currentUser } = useCrewStore();
  const key = cacheKey(currentUser.id, organization.id, "dm", employee.id);
  // What this conversation last showed, if this visit has seen it; else null until this browser's copy or Crewmark
  // answers.
  const [shown, setShown] = React.useState<CachedMessages | null>(() => peekCache<CachedMessages>(key) ?? null);
  const messages = shown?.messages ?? null;
  const hasMore = shown?.hasMore ?? false;
  // While the person is at the latest message, new ones (and messages still laying out) keep it in view.
  const { scrollerRef, contentRef, atBottomRef } = useFollowBottom();

  /** Shows the messages and keeps the latest of them in this browser. */
  const show = React.useCallback(
    (next: (prev: CachedMessages | null) => CachedMessages) =>
      setShown((prev) => {
        const value = next(prev);
        const kept = value.messages.slice(-KEPT_MESSAGES);
        writeCache(key, { messages: kept, hasMore: value.hasMore || kept.length < value.messages.length });
        return value;
      }),
    [key],
  );

  const load = React.useCallback(async () => {
    // Reading marks them read, so only while the person can see them.
    if (document.visibilityState !== "visible") return;
    try {
      const latest = await getDirectMessages(organization.id, employee.id);
      show((prev) => {
        const first = latest.messages[0]?.id ?? Infinity;
        // Older ones already shown stay, unless more came in since than this page holds: then there'd be a gap.
        const joined = !latest.hasMore || (prev?.messages.some((m) => m.id >= first) ?? false);
        const older = joined ? (prev?.messages.filter((m) => m.id < first) ?? []) : [];
        return {
          messages: [...older, ...latest.messages],
          hasMore: older.length > 0 ? Boolean(prev?.hasMore) : latest.hasMore,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }, [organization.id, employee.id, show]);

  // This browser's copy, while Crewmark is asked.
  React.useEffect(() => {
    void readCache<CachedMessages>(key).then((cached) => cached && setShown((prev) => prev ?? cached));
  }, [key]);

  // On opening, whenever the conversation's latest message changes, and on coming back to the tab.
  const latestId = thread?.last?.id ?? 0;
  React.useEffect(() => {
    void Promise.resolve().then(load);
  }, [load, latestId]);
  React.useEffect(() => {
    const onVisible = () => document.visibilityState === "visible" && void load();
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [load]);

  async function loadOlder() {
    if (!messages?.length) return;
    const older = await getDirectMessages(organization.id, employee.id, messages[0].id);
    show((prev) => ({ messages: [...older.messages, ...(prev?.messages ?? [])], hasMore: older.hasMore }));
  }

  return (
    <>
      <div ref={scrollerRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <div ref={contentRef}>
        {messages === null ? (
          <div className="grid gap-3">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="ml-auto h-10 w-1/2" />
          </div>
        ) : messages.length === 0 ? (
          <Centered>
            No messages yet. What you write goes straight to {employee.name}, and {employee.name} writes here when it
            needs you: a question, something to approve, or what you asked for.
          </Centered>
        ) : (
          <ol className="mx-auto grid max-w-3xl gap-2">
            {hasMore && (
              <li className="text-center">
                <Button variant="ghost" size="sm" onClick={loadOlder}>
                  Earlier messages
                </Button>
              </li>
            )}
            {messages.map((message, i) => {
              const newDay = i === 0 || dayLabel(messages[i - 1].createdAt) !== dayLabel(message.createdAt);
              return (
                <React.Fragment key={message.id}>
                  {newDay && (
                    <li className="py-2 text-center text-[11px] text-muted-foreground" suppressHydrationWarning>
                      {dayLabel(message.createdAt)}
                    </li>
                  )}
                  <Bubble message={message} employee={employee} />
                </React.Fragment>
              );
            })}
          </ol>
        )}
        </div>
      </div>

      <Composer
        employee={employee}
        send={async (body) => {
          const message = await sendDirectMessageTo(organization.id, employee.id, body);
          track("direct message sent", {});
          atBottomRef.current = true;
          show((prev) => ({ messages: [...(prev?.messages ?? []), message], hasMore: prev?.hasMore ?? false }));
        }}
      />
    </>
  );
}

function Bubble({ message, employee }: { message: DirectMessage; employee: Employee }) {
  const mine = !message.fromEmployee;
  return (
    <li className={cn("flex items-end gap-2", mine && "justify-end")}>
      {!mine && <EmployeeAvatar employee={employee} size="md" />}
      <div
        className={cn(
          "max-w-[min(36rem,80%)] rounded-2xl px-3.5 py-2 text-sm break-words",
          mine
            ? "rounded-br-md bg-primary text-primary-foreground [&_a.mention]:text-blue-300 dark:[&_a.mention]:text-blue-700"
            : "rounded-bl-md bg-muted",
        )}
      >
        <StaticMarkdownView value={message.body} className="min-w-0 [&_.tiptap]:text-inherit [&_a]:underline" />
        <time
          dateTime={message.createdAt}
          title={fullDate.format(new Date(message.createdAt))}
          className={cn("mt-0.5 block text-right text-[10px]", mine ? "text-primary-foreground/70" : "text-muted-foreground")}
          suppressHydrationWarning
        >
          {timeFormat.format(new Date(message.createdAt))}
        </time>
      </div>
    </li>
  );
}

/** An image put in the box to write in: shown at once from this computer, sent once it's uploaded. */
interface Attached {
  key: string;
  name: string;
  /** A link to the file on this computer, for the thumbnail. */
  preview: string;
  /** /api/attachments/<id> once it's uploaded. */
  url: string | null;
}

/** Markdown for an uploaded image: its name is the alt text, without what would end it early. */
function imageMarkdown({ name, url }: { name: string; url: string }) {
  return `![${name.replace(/[[\]]/g, "").replace(/\s+/g, " ").trim() || "image"}](${url})`;
}

function Composer({
  employee,
  send: deliver,
  ref,
  left,
  right,
}: {
  employee: Employee;
  /** Sends what the person wrote; the box empties once it's done, and keeps the words if it throws. */
  send: (body: string) => Promise<void>;
  /** Lets the conversation quote what the person selected in it (MC-298). */
  ref?: React.Ref<Pick<MarkdownEditorHandle, "quote">>;
  /** What the conversation runs with (MC-313): its folder beside the + button, the model by Send (MC-316). */
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  const editorRef = React.useRef<MarkdownEditorHandle>(null);
  React.useImperativeHandle(ref, () => ({ quote: (text) => editorRef.current?.quote(text) }), []);
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [body, setBody] = React.useState("");
  // A new key empties the editor after sending.
  const [draft, setDraft] = React.useState(0);
  const [pending, setPending] = React.useState(false);
  // Images pasted or dropped in show as small squares above the words, with a spinner while they upload, as in other
  // chat apps (MC-271), and go at the end of the message.
  const [attached, setAttached] = React.useState<Attached[]>([]);
  const { upload } = useImageUpload({ quiet: true });
  const uploading = attached.some((image) => !image.url);
  const empty = body.trim() === "" && attached.length === 0;
  // Enter sends, Cmd or Ctrl Enter starts a new line (MC-295), as people know from chat apps: no hint (MC-316).

  function attach(files: File[]) {
    for (const file of files) {
      const key = crypto.randomUUID();
      const preview = URL.createObjectURL(file);
      setAttached((prev) => [...prev, { key, name: file.name || "image", preview, url: null }]);
      void upload(file).then((url) => {
        // One taken out meanwhile stays out; one that didn't upload goes (the upload has said why).
        if (!url) URL.revokeObjectURL(preview);
        setAttached((prev) =>
          url ? prev.map((image) => (image.key === key ? { ...image, url } : image)) : prev.filter((i) => i.key !== key),
        );
      });
    }
    editorRef.current?.focus();
  }

  function detach(key: string) {
    setAttached((prev) => {
      const image = prev.find((i) => i.key === key);
      if (image) URL.revokeObjectURL(image.preview);
      return prev.filter((i) => i.key !== key);
    });
  }

  async function send() {
    if (empty || pending || uploading) return;
    setPending(true);
    try {
      const images = attached.flatMap((image) => (image.url ? [imageMarkdown({ name: image.name, url: image.url })] : []));
      await deliver([body.trim(), ...images].filter(Boolean).join("\n\n"));
      setBody("");
      setDraft((n) => n + 1);
      for (const image of attached) URL.revokeObjectURL(image.preview);
      setAttached([]);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't send your message. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="shrink-0 px-4 pt-1 pb-4">
      {/* The whole box is for writing (MC-268): a click beside the words, or on the line with the send button, starts
          writing too. Images dropped anywhere on it are attached. */}
      <div
        onClick={(event) => {
          if (!(event.target as HTMLElement).closest(".tiptap, button, a")) editorRef.current?.focus();
        }}
        onDragOver={(event) => {
          if (event.dataTransfer.types.includes("Files")) event.preventDefault();
        }}
        onDrop={(event) => {
          const files = imageFiles(event.dataTransfer);
          if (files.length === 0) return;
          event.preventDefault();
          attach(files);
        }}
        className="mx-auto max-w-3xl cursor-text rounded-xl border bg-background px-3.5 pt-1 pb-2.5 transition-colors focus-within:border-ring"
      >
        {attached.length > 0 && (
          <ul aria-label="Images" className="flex flex-wrap gap-2 pt-2.5">
            {attached.map((image) => (
              <li key={image.key} className="group/image relative size-20 overflow-hidden rounded-lg border bg-muted">
                {/* A file on this computer, so not next/image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.preview} alt={image.name} className="size-full object-cover" />
                {!image.url && (
                  <span role="status" aria-label={`Uploading ${image.name}`} className="absolute inset-0 grid place-items-center bg-background/60">
                    <Loader2Icon className="size-5 animate-spin text-foreground/70" />
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`Remove ${image.name}`}
                  onClick={() => detach(image.key)}
                  className="absolute top-1 right-1 grid size-5 place-items-center rounded-full bg-foreground/75 text-background opacity-0 transition-opacity group-hover/image:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100"
                >
                  <XIcon className="size-3" />
                </button>
              </li>
            ))}
          </ul>
        )}
        <MarkdownEditor
          ref={editorRef}
          key={draft}
          value=""
          onChange={setBody}
          onSubmit={send}
          enterSends
          onImages={attach}
          toolbar={false}
          placeholder={`Message ${employee.name}…`}
          contentClassName="max-h-48 min-h-10 overflow-y-auto py-2 [&_.tiptap]:min-h-6"
        />
        <div className="flex min-w-0 items-center gap-2">
          {/* Images from the phone's photos or the computer's files (MC-278): on a phone there's nothing to paste. */}
          <input
            ref={fileRef}
            type="file"
            accept={IMAGE_TYPES.join(",")}
            multiple
            hidden
            onChange={(event) => {
              attach(Array.from(event.target.files ?? []));
              event.target.value = "";
            }}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Add images"
            title="Add images"
            onClick={() => fileRef.current?.click()}
            className="-ml-1.5 size-8 shrink-0 rounded-full text-foreground"
          >
            {/* Darker and bolder than the words beside it, as in the Codex app (MC-316). */}
            <PlusIcon className="size-5" strokeWidth={2.5} />
          </Button>
          {left}
          <span className="ml-auto shrink-0" />
          {right}
          <Button size="sm" disabled={empty || pending || uploading} onClick={send} className="shrink-0">
            {pending ? "Sending…" : uploading ? "Uploading…" : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
