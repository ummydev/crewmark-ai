"use client";

import * as React from "react";
import { RepeatIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { useInbox } from "@/components/inbox/inbox-provider";
import { useFindAssignee } from "@/components/issues/assignee";
import { MarkdownEditor, MarkdownView } from "@/components/markdown-editor";
import { useImageUpload } from "@/components/use-image-upload";
import { useRealtime } from "@/components/use-realtime";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { commentOnIssue, getIssueActivity, getIssueSubscribers, setIssueSubscription } from "@/lib/actions";
import { track } from "@/lib/analytics";
import { fullDate, timeAgo } from "@/lib/format";
import { describeRecurrence, parseRecurrence } from "@/lib/recurrence";
import { ISSUE_PRIORITIES, ISSUE_STATUSES, type Issue, type IssueActivity } from "@/lib/types";

/**
 * How often the Activity checks for news while someone's looking, when Crewmark can't push it (agents comment from
 * their own computers). Usually it's pushed, and the page never asks on its own.
 */
const POLL_MS = 15_000;

/**
 * How long after the person last did anything on the page it stops checking. A tab left open overnight still counts
 * as visible, and its checks kept the database from ever sleeping. It checks again as soon as they're back.
 */
const IDLE_MS = 10 * 60_000;

/** What counts as the person being at the page. */
const ACTIVITY_EVENTS = ["pointermove", "pointerdown", "keydown", "wheel", "touchstart", "focus"] as const;

/** After the person changes a property, when to show it: the store saves a moment later. */
const AFTER_SAVE_MS = 1500;

/**
 * Loads the issue's Activity and who follows it, and keeps them current. `append` shows an entry this page just
 * added, and stops answers to requests made before it from hiding it; `setSubscribers` shows a change to the list
 * before it's saved.
 */
function useActivity(issue: Issue) {
  const { organization } = useCrewStore();
  const [entries, setEntries] = React.useState<IssueActivity[] | null>(null);
  const [subscribers, setSubscribers] = React.useState<string[] | null>(null);
  const version = React.useRef(0);

  const load = React.useCallback(async () => {
    const asked = version.current;
    try {
      const [latest, following] = await Promise.all([
        getIssueActivity(organization.id, issue.id),
        getIssueSubscribers(organization.id, issue.id),
      ]);
      if (asked !== version.current) return;
      setEntries(latest);
      setSubscribers(following);
    } catch (error) {
      console.error(error);
    }
  }, [organization.id, issue.id]);

  React.useEffect(() => {
    // Async so the state updates land after the effect, not during it.
    void Promise.resolve().then(load);
  }, [load]);

  // Crewmark says when the Activity changed; on connecting, catch up on what came before.
  const pushed = useRealtime(
    organization.id,
    (push) => push.type === "activity" && push.issueId === issue.id && void load(),
    load,
  );

  // Without pushes, check every so often while someone's at the page.
  React.useEffect(() => {
    if (pushed) return;
    let lastActive = Date.now();
    const visible = () => document.visibilityState === "visible";
    const idle = () => Date.now() - lastActive >= IDLE_MS;
    const timer = setInterval(() => visible() && !idle() && void load(), POLL_MS);
    // Back after a while: catch up at once rather than at the next check.
    const onActive = () => {
      const wasIdle = idle();
      lastActive = Date.now();
      if (wasIdle && visible()) void load();
    };
    const onVisible = () => {
      if (!visible()) return;
      lastActive = Date.now();
      void load();
    };
    for (const event of ACTIVITY_EVENTS) window.addEventListener(event, onActive, { passive: true });
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(timer);
      for (const event of ACTIVITY_EVENTS) window.removeEventListener(event, onActive);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [load, pushed]);

  // The person's own changes to the properties show up once saved.
  const properties = `${issue.status} ${issue.priority} ${issue.assigneeId} ${issue.projectId} ${issue.recurrence}`;
  const shown = React.useRef(properties);
  React.useEffect(() => {
    if (shown.current === properties) return;
    shown.current = properties;
    const timer = setTimeout(load, AFTER_SAVE_MS);
    return () => clearTimeout(timer);
  }, [properties, load]);

  const append = React.useCallback((entry: IssueActivity) => {
    version.current++;
    setEntries((prev) => [...(prev ?? []), entry]);
  }, []);

  const changeSubscribers = React.useCallback((next: React.SetStateAction<string[] | null>) => {
    version.current++;
    setSubscribers(next);
  }, []);

  return { entries, append, subscribers, setSubscribers: changeSubscribers };
}

/** While the person has the issue open in front of them, it's read in their Inbox, news that arrives included. */
function useMarkRead(issueId: string) {
  const { items, markRead } = useInbox();
  const unread = items?.some((item) => item.issueId === issueId && item.unread) ?? false;
  React.useEffect(() => {
    if (!unread) return;
    const mark = () => document.visibilityState === "visible" && markRead(issueId);
    mark();
    document.addEventListener("visibilitychange", mark);
    return () => document.removeEventListener("visibilitychange", mark);
  }, [unread, issueId, markRead]);
}

/** The Activity under an issue, like Linear's: when it was filed, changes to it, and comments, with a comment box. */
export function IssueActivitySection({ issue }: { issue: Issue }) {
  const { entries, append, subscribers, setSubscribers } = useActivity(issue);
  useMarkRead(issue.id);

  return (
    <section aria-labelledby="issue-activity" className="mt-8 grid gap-4 border-t border-rule pt-6">
      <div className="flex min-h-7 items-center gap-3">
        <h2 id="issue-activity" className="text-[13px] font-medium">
          Activity
        </h2>
        {subscribers && <Subscribers issue={issue} ids={subscribers} onChange={setSubscribers} />}
      </div>
      <ol className="grid gap-4">
        <Event userId={issue.createdByUserId} employeeId={issue.createdByEmployeeId} at={issue.createdAt}>
          created the issue
        </Event>
        {entries === null ? (
          <li>
            <Skeleton className="h-4 w-56" />
          </li>
        ) : (
          entries.map((entry) =>
            entry.kind === "comment" ? (
              <Comment key={entry.id} entry={entry} />
            ) : entry.kind === "recurred" ? (
              <Recurred key={entry.id} entry={entry} />
            ) : (
              <Event key={entry.id} userId={entry.userId} employeeId={entry.employeeId} at={entry.createdAt}>
                <Change entry={entry} />
              </Event>
            ),
          )
        )}
      </ol>
      <CommentBox issue={issue} onPosted={append} />
    </section>
  );
}

/**
 * Who follows the issue (MC-200), as in Linear: a Subscribe / Unsubscribe button for the signed-in person, and their
 * faces, which open a list of everyone to tick or untick. The assignee stays ticked while assigned.
 */
function Subscribers({
  issue,
  ids,
  onChange,
}: {
  issue: Issue;
  ids: string[];
  onChange: (next: React.SetStateAction<string[] | null>) => void;
}) {
  const { organization, currentUser, members, employees } = useCrewStore();
  const subscribed = ids.includes(currentUser.id);
  const assignedToMe = issue.assigneeId === currentUser.id;

  async function toggle(id: string, on: boolean) {
    if (!on && id === issue.assigneeId) return;
    onChange((prev) => (on ? [...(prev ?? []), id] : (prev ?? []).filter((x) => x !== id)));
    try {
      await setIssueSubscription(organization.id, issue.id, id, on);
      track("issue subscription changed", {
        subscribed: on,
        self: id === currentUser.id,
        employee: employees.some((e) => e.id === id),
      });
    } catch (error) {
      console.error(error);
      onChange((prev) => (on ? (prev ?? []).filter((x) => x !== id) : [...(prev ?? []), id]));
      toast.error("Couldn't change who follows the issue. Try again.");
    }
  }

  // Everyone who can follow it: those who do first, in the order they started, then the rest, people before employees.
  const everyone = [
    ...members.map((m) => ({ id: m.id, name: m.name || m.username, avatar: <UserAvatar user={m} /> })),
    ...employees
      .map((e) => ({ id: e.id, name: e.name, avatar: <EmployeeAvatar employee={e} size="sm" /> }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
  const following = ids.flatMap((id) => everyone.filter((p) => p.id === id));
  const rest = everyone.filter((p) => !ids.includes(p.id));
  const faces = following.slice(0, 3);

  return (
    <div className="ml-auto flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground"
        disabled={subscribed && assignedToMe}
        title={subscribed && assignedToMe ? "You follow it while it's assigned to you" : undefined}
        onClick={() => toggle(currentUser.id, !subscribed)}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={`Subscribers: ${following.map((p) => p.name).join(", ") || "none"}`}
          className="flex h-7 items-center rounded-full px-1 outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-popup-open:bg-muted"
        >
          {faces.length === 0 ? (
            <span className="px-1 text-xs text-muted-foreground">No subscribers</span>
          ) : (
            <span className="flex items-center -space-x-1.5">
              {faces.map((p) => (
                <span key={p.id} className="flex rounded-full ring-2 ring-background">
                  {p.avatar}
                </span>
              ))}
              {following.length > faces.length && (
                <span className="flex size-[18px] items-center justify-center rounded-full bg-muted text-[10px] font-medium text-muted-foreground ring-2 ring-background">
                  +{following.length - faces.length}
                </span>
              )}
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Subscribers hear about new comments and changes</DropdownMenuLabel>
            {[...following, ...rest].map((p) => {
              const assignee = p.id === issue.assigneeId;
              return (
                <DropdownMenuCheckboxItem
                  key={p.id}
                  checked={ids.includes(p.id)}
                  disabled={assignee && ids.includes(p.id)}
                  closeOnClick={false}
                  onCheckedChange={(on) => toggle(p.id, on)}
                >
                  {p.avatar}
                  <span className="min-w-0 truncate">{p.name}</span>
                  {assignee && <span className="shrink-0 text-xs text-muted-foreground">Assignee</span>}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/** Whoever did something: a digital employee, a person, or "Someone" once deleted. */
export function useActor(userId: string | null, employeeId: string | null) {
  const { employees, users } = useCrewStore();
  const employee = employeeId ? employees.find((e) => e.id === employeeId) : undefined;
  const user = userId ? users.find((u) => u.id === userId) : undefined;
  const avatar = employee ? (
    <EmployeeAvatar employee={employee} size="sm" />
  ) : (
    <UserAvatar user={user ?? { username: "?", profileImage: null }} />
  );
  return { employee, avatar, name: employee?.name ?? user?.username ?? "Someone" };
}

function When({ at }: { at: string }) {
  return (
    <time dateTime={at} title={fullDate.format(new Date(at))} className="text-muted-foreground" suppressHydrationWarning>
      {timeAgo(at)}
    </time>
  );
}

/** A one-line entry: "Alex moved from Todo to In Progress · 2h ago". */
function Event({
  userId,
  employeeId,
  at,
  children,
}: {
  userId: string | null;
  employeeId: string | null;
  at: string;
  children: React.ReactNode;
}) {
  const { avatar, name } = useActor(userId, employeeId);
  return (
    <li className="flex items-start gap-2 text-[13px] text-muted-foreground">
      <span className="mt-px shrink-0">{avatar}</span>
      <p className="min-w-0">
        <span className="font-medium text-foreground">{name}</span> {children}
        <span aria-hidden> · </span>
        <When at={at} />
      </p>
    </li>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}

/** What a change did, after the name of whoever made it. */
export function Change({ entry }: { entry: IssueActivity }) {
  const { projects } = useCrewStore();
  const findAssignee = useFindAssignee();
  const { from, to } = entry;
  switch (entry.kind) {
    case "status": {
      const label = (value: string | null) => ISSUE_STATUSES.find((s) => s.value === value)?.label ?? value;
      return (
        <>
          moved from <Strong>{label(from)}</Strong> to <Strong>{label(to)}</Strong>
        </>
      );
    }
    case "priority": {
      const label = (value: string | null) => ISSUE_PRIORITIES.find((p) => p.value === value)?.label ?? value;
      return (
        <>
          changed priority from <Strong>{label(from)}</Strong> to <Strong>{label(to)}</Strong>
        </>
      );
    }
    case "assignee": {
      const name = (id: string) => findAssignee(id)?.name ?? "someone deleted since";
      if (to === null) return <>unassigned <Strong>{from && name(from)}</Strong></>;
      if (to === entry.employeeId || to === entry.userId) return <>took the issue</>;
      return from === null ? (
        <>
          assigned the issue to <Strong>{name(to)}</Strong>
        </>
      ) : (
        <>
          reassigned the issue from <Strong>{name(from)}</Strong> to <Strong>{name(to)}</Strong>
        </>
      );
    }
    case "project": {
      const name = (id: string) => projects.find((p) => p.id === id)?.name ?? "a deleted project";
      if (to === null) return <>removed the issue from <Strong>{from && name(from)}</Strong></>;
      return (
        <>
          moved the issue to <Strong>{name(to)}</Strong>
        </>
      );
    }
    case "repeat": {
      if (to === null) return <>stopped the issue repeating</>;
      return (
        <>
          {from === null ? "set the issue to repeat" : "changed the repeat to"} <Strong>{scheduleWords(to)}</Strong>
        </>
      );
    }
    default:
      return null;
  }
}

/** A schedule in words, e.g. "every 2 days at 10:00". */
function scheduleWords(recurrence: string) {
  try {
    return describeRecurrence(parseRecurrence(recurrence));
  } catch {
    return "a custom schedule";
  }
}

/** Crewmark's entry when the issue's schedule came round: it reopened the issue, or the issue was still open. */
function Recurred({ entry }: { entry: IssueActivity }) {
  const label = (value: string | null) => ISSUE_STATUSES.find((s) => s.value === value)?.label ?? value;
  return (
    <li className="flex items-start gap-2 text-[13px] text-muted-foreground">
      <span className="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full bg-muted">
        <RepeatIcon className="size-3" />
      </span>
      <p className="min-w-0">
        <span className="font-medium text-foreground">Crewmark</span>{" "}
        {entry.from !== entry.to ? (
          <>
            moved the issue back to <Strong>{label(entry.to)}</Strong>: it&apos;s due again
          </>
        ) : (
          <>
            noted the issue is due again while still <Strong>{label(entry.to)}</Strong>
          </>
        )}
        <span aria-hidden> · </span>
        <When at={entry.createdAt} />
      </p>
    </li>
  );
}

function Comment({ entry }: { entry: IssueActivity }) {
  const { avatar, name, employee } = useActor(entry.userId, entry.employeeId);
  return (
    <li className="grid gap-1.5 rounded-lg border bg-background px-3.5 py-3">
      <div className="flex items-center gap-2 text-[13px]">
        {avatar}
        <span className="truncate font-medium">{name}</span>
        {employee && <Badge variant="secondary">Agent</Badge>}
        <When at={entry.createdAt} />
      </div>
      <MarkdownView value={entry.body} className="min-w-0 break-words" />
    </li>
  );
}

function CommentBox({ issue, onPosted }: { issue: Issue; onPosted: (comment: IssueActivity) => void }) {
  const { organization } = useCrewStore();
  const [body, setBody] = React.useState("");
  // A new key empties the editor after posting.
  const [draft, setDraft] = React.useState(0);
  const [pending, setPending] = React.useState(false);
  const { upload, uploading } = useImageUpload();
  const empty = body.trim() === "";

  async function post() {
    if (empty || pending || uploading) return;
    setPending(true);
    try {
      onPosted(await commentOnIssue(organization.id, issue.id, body));
      setBody("");
      setDraft((n) => n + 1);
      track("issue commented", {});
    } catch (error) {
      console.error(error);
      toast.error("Couldn't post your comment. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="rounded-lg border bg-background px-3.5 pt-1 pb-2.5 transition-colors focus-within:border-ring">
      <MarkdownEditor
        key={draft}
        value=""
        onChange={setBody}
        onSubmit={post}
        uploadImage={upload}
        toolbar={false}
        placeholder="Leave a comment…"
        contentClassName="min-h-14 py-2 [&_.tiptap]:min-h-10"
      />
      <div className="flex items-center justify-end gap-3">
        <span className="hidden text-xs text-muted-foreground sm:inline">⌘ Enter to post</span>
        <Button size="sm" disabled={empty || pending || uploading} onClick={post}>
          {pending ? "Posting…" : uploading ? "Uploading…" : "Comment"}
        </Button>
      </div>
    </div>
  );
}
