"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeftIcon, MessageCircleIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { MarkdownEditor, MarkdownView } from "@/components/markdown-editor";
import { useMessages } from "@/components/messages/messages-provider";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useImageUpload } from "@/components/use-image-upload";
import { getDirectMessages, sendDirectMessageTo } from "@/lib/actions";
import { track } from "@/lib/analytics";
import { fullDate, timeAgo } from "@/lib/format";
import type { DirectMessage, DirectThread, Employee } from "@/lib/types";
import { cn } from "@/lib/utils";

// Messages (MC-169): the signed-in person's direct conversations with employees, one per employee, like a chat app.
// The list on the left, the conversation on the right; on a phone, one at a time. Employees write here only what the
// person needs to see; their working notes stay in their own conversations.

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

export function MessagesView({ employeeId }: { employeeId?: string }) {
  const { employees } = useCrewStore();
  const { threads } = useMessages();
  const employee = employeeId ? employees.find((e) => e.id === employeeId) : undefined;

  return (
    // One screen tall (less the sheet's margin beside the sidebar), so the conversation scrolls inside it and the box
    // to write in stays at the bottom, as in a chat app. Each column has its own header, so nothing says twice who
    // the conversation is with. Side by side only from lg: beside the sidebar on a tablet, the conversation would be
    // a 200px strip, so there one shows at a time, as on a phone.
    <div className="flex h-svh md:h-[calc(100svh-1rem)]">
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
          <Conversation key={employee.id} employee={employee} thread={threads?.find((t) => t.employeeId === employee.id)} />
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

/** Every employee: those with a conversation first, newest first, then the rest by name. */
function ConversationList({ threads, selected }: { threads: DirectThread[] | null; selected?: string }) {
  const { employees, orgPath } = useCrewStore();
  if (threads === null) {
    return (
      <div className="grid gap-3 p-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }
  const byEmployee = new Map(threads.map((t) => [t.employeeId, t]));
  const order = [
    ...threads.flatMap((t) => employees.filter((e) => e.id === t.employeeId)),
    ...employees.filter((e) => !byEmployee.has(e.id)).sort((a, b) => a.name.localeCompare(b.name)),
  ];
  if (order.length === 0) return <Centered>No employees yet. Add one to message them here.</Centered>;
  return (
    <ul className="flex flex-col gap-0.5 px-2 pb-2">
      {order.map((employee) => {
        const thread = byEmployee.get(employee.id);
        const unread = thread?.unread ?? 0;
        return (
          <li key={employee.id}>
            <Link
              href={orgPath(`/messages/${employee.id}`)}
              aria-current={employee.id === selected ? "page" : undefined}
              className="flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-muted/70 aria-[current=page]:bg-muted"
            >
              <EmployeeAvatar employee={employee} size="md" />
              {/* Flex, not grid: a grid's track grows to a long preview and pushes the time and the unread count out
                  of the column, where nobody sees which conversation is new (MC-174). */}
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="flex min-w-0 items-baseline gap-2">
                  <span className={cn("min-w-0 flex-1 truncate text-sm", unread ? "font-semibold" : "font-medium")}>
                    {employee.name}
                  </span>
                  {thread?.last && (
                    <time
                      dateTime={thread.last.createdAt}
                      className="shrink-0 text-xs text-muted-foreground"
                      suppressHydrationWarning
                    >
                      {timeAgo(thread.last.createdAt)}
                    </time>
                  )}
                </span>
                <span className="flex min-w-0 items-center gap-2">
                  {/* Grey whether read or not: the red count says what's new. */}
                  <span className="min-w-0 flex-1 truncate text-[13px] text-muted-foreground">
                    {thread?.last
                      ? `${thread.last.fromEmployee ? "" : "You: "}${plain(thread.last.body)}`
                      : employee.role || "No messages yet"}
                  </span>
                  <UnreadBadge count={unread} />
                </span>
              </span>
            </Link>
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

/** The conversation with one employee: its messages, newest at the bottom, and a box to write in. */
function Conversation({ employee, thread }: { employee: Employee; thread?: DirectThread }) {
  const { organization, orgPath } = useCrewStore();
  const [messages, setMessages] = React.useState<DirectMessage[] | null>(null);
  const [hasMore, setHasMore] = React.useState(false);
  const scroller = React.useRef<HTMLDivElement>(null);
  const content = React.useRef<HTMLDivElement>(null);
  // Whether the person is at the latest message, so new ones (and messages still laying out) keep it in view.
  const atBottom = React.useRef(true);

  const load = React.useCallback(async () => {
    // Reading marks them read, so only while the person can see them.
    if (document.visibilityState !== "visible") return;
    try {
      const latest = await getDirectMessages(organization.id, employee.id);
      // Keep older pages already loaded.
      setMessages((prev) => {
        const older = prev?.filter((m) => m.id < (latest.messages[0]?.id ?? Infinity)) ?? [];
        return [...older, ...latest.messages];
      });
      setHasMore((had) => had || latest.hasMore);
    } catch (error) {
      console.error(error);
    }
  }, [organization.id, employee.id]);

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

  React.useEffect(() => {
    const view = scroller.current;
    const inner = content.current;
    if (!view || !inner) return;
    const onScroll = () => {
      atBottom.current = view.scrollHeight - view.scrollTop - view.clientHeight < 48;
    };
    const follow = new ResizeObserver(() => {
      if (atBottom.current) view.scrollTop = view.scrollHeight;
    });
    view.addEventListener("scroll", onScroll, { passive: true });
    follow.observe(inner);
    return () => {
      view.removeEventListener("scroll", onScroll);
      follow.disconnect();
    };
  }, []);

  async function loadOlder() {
    if (!messages?.length) return;
    const older = await getDirectMessages(organization.id, employee.id, messages[0].id);
    setMessages((prev) => [...older.messages, ...(prev ?? [])]);
    setHasMore(older.hasMore);
  }

  return (
    <>
      {/* One line: who the conversation is with. */}
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-rule px-4">
        <Link
          href={orgPath("/messages")}
          aria-label="All conversations"
          className="-ml-1.5 rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden"
        >
          <ChevronLeftIcon className="size-4" />
        </Link>
        <EmployeeAvatar employee={employee} size="title" />
        <h2 className="flex min-w-0 items-baseline gap-2 text-sm">
          <Link href={orgPath(`/employees/${employee.id}`)} className="truncate font-medium hover:underline">
            {employee.name}
          </Link>
          {employee.role && <span className="hidden truncate text-muted-foreground sm:inline">{employee.role}</span>}
        </h2>
      </header>

      <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <div ref={content}>
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
        onSent={(message) => {
          atBottom.current = true;
          setMessages((prev) => [...(prev ?? []), message]);
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
          mine ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md bg-muted",
        )}
      >
        <MarkdownView value={message.body} className="min-w-0 [&_.tiptap]:text-inherit [&_a]:underline" />
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

function Composer({ employee, onSent }: { employee: Employee; onSent: (message: DirectMessage) => void }) {
  const { organization } = useCrewStore();
  const [body, setBody] = React.useState("");
  // A new key empties the editor after sending.
  const [draft, setDraft] = React.useState(0);
  const [pending, setPending] = React.useState(false);
  const { upload, uploading } = useImageUpload();
  const empty = body.trim() === "";

  async function send() {
    if (empty || pending || uploading) return;
    setPending(true);
    try {
      onSent(await sendDirectMessageTo(organization.id, employee.id, body));
      setBody("");
      setDraft((n) => n + 1);
      track("direct message sent", {});
    } catch (error) {
      console.error(error);
      toast.error("Couldn't send your message. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="shrink-0 px-4 pt-1 pb-4">
      <div className="mx-auto max-w-3xl rounded-xl border bg-background px-3.5 pt-1 pb-2.5 transition-colors focus-within:border-ring">
        <MarkdownEditor
          key={draft}
          value=""
          onChange={setBody}
          onSubmit={send}
          uploadImage={upload}
          toolbar={false}
          placeholder={`Message ${employee.name}…`}
          contentClassName="max-h-48 min-h-10 overflow-y-auto py-2 [&_.tiptap]:min-h-6"
        />
        <div className="flex items-center justify-end gap-3">
          <span className="hidden text-xs text-muted-foreground sm:inline">⌘ Enter to send</span>
          <Button size="sm" disabled={empty || pending || uploading} onClick={send}>
            {pending ? "Sending…" : uploading ? "Uploading…" : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
