"use client";

import * as React from "react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { useFindAssignee } from "@/components/issues/assignee";
import { MarkdownEditor, MarkdownView } from "@/components/markdown-editor";
import { useImageUpload } from "@/components/use-image-upload";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { commentOnIssue, getIssueActivity } from "@/lib/actions";
import { track } from "@/lib/analytics";
import { fullDate, timeAgo } from "@/lib/format";
import { ISSUE_PRIORITIES, ISSUE_STATUSES, type Issue, type IssueActivity } from "@/lib/types";

/** How often the Activity checks for news while the page is visible: agents comment from their own computers. */
const POLL_MS = 15_000;

/** After the person changes a property, when to show it: the store saves a moment later. */
const AFTER_SAVE_MS = 1500;

/**
 * Loads the issue's Activity and keeps it current. `append` shows an entry this page just added, and stops answers
 * to requests made before it from hiding it.
 */
function useActivity(issue: Issue) {
  const { organization } = useCrewStore();
  const [entries, setEntries] = React.useState<IssueActivity[] | null>(null);
  const version = React.useRef(0);

  const load = React.useCallback(async () => {
    const asked = version.current;
    try {
      const latest = await getIssueActivity(organization.id, issue.id);
      if (asked === version.current) setEntries(latest);
    } catch (error) {
      console.error(error);
    }
  }, [organization.id, issue.id]);

  React.useEffect(() => {
    // Async so the state updates land after the effect, not during it.
    void Promise.resolve().then(load);
    const visible = () => document.visibilityState === "visible";
    const timer = setInterval(() => visible() && void load(), POLL_MS);
    const onVisible = () => visible() && void load();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [load]);

  // The person's own changes to the properties show up once saved.
  const properties = `${issue.status} ${issue.priority} ${issue.assigneeId} ${issue.projectId}`;
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

  return { entries, append };
}

/** The Activity under an issue, like Linear's: when it was filed, changes to it, and comments, with a comment box. */
export function IssueActivitySection({ issue }: { issue: Issue }) {
  const { entries, append } = useActivity(issue);

  return (
    <section aria-labelledby="issue-activity" className="mt-8 grid gap-4 border-t border-rule pt-6">
      <h2 id="issue-activity" className="text-[13px] font-medium">
        Activity
      </h2>
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

/** Whoever did something: a digital employee, a person, or "Someone" once deleted. */
function useActor(userId: string | null, employeeId: string | null) {
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
function Change({ entry }: { entry: IssueActivity }) {
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
    default:
      return null;
  }
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
