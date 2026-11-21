import "server-only";

import { and, asc, desc, eq, inArray, isNull, isNotNull, ne, notInArray, sql } from "drizzle-orm";

import { db } from "@/db";
import type { IssueCreator } from "@/db/issues";
import { toActivity, type Transaction } from "@/db/issue-activity";
import { issueKey } from "@/db/queries";
import { employees, issueActivity, issueSubscriptions, issues, members } from "@/db/schema";
import { pushActivity } from "@/lib/realtime";
import type { InboxItem } from "@/lib/types";
import { InputError, NotFoundError, text } from "@/lib/validate";

// Who follows an issue (MC-200, the issue_subscriptions table): the people and employees told about its new comments
// and changes. Its creator, its assignees, whoever comments and the employees a comment mentions are added on their
// own; anyone can add or remove themselves or others, except the assignee, who stays while assigned. A person hears
// in their Inbox: a subscription's notifiedAt is when someone else last did something on the issue, and readAt when
// they last saw it. An employee's agent hears through agent events (db/agent-events.ts). Callers check that whoever
// asks belongs to the organization.

/** A person or a digital employee, like an issue's creator. */
export type Subscriber = IssueCreator;

/** How many issues the Inbox lists, the latest. */
const INBOX_LIMIT = 100;

function columns(who: Subscriber) {
  return "userId" in who ? { userId: who.userId, employeeId: null } : { userId: null, employeeId: who.employeeId };
}

/** Adds them to the issue's subscribers, those who aren't already. */
export async function subscribe(
  executor: typeof db | Transaction,
  organizationId: string,
  issueId: string,
  who: Subscriber[],
) {
  if (who.length === 0) return;
  await executor
    .insert(issueSubscriptions)
    .values(who.map((w) => ({ organizationId, issueId, ...columns(w) })))
    .onConflictDoNothing();
}

/** The ids of the issue's subscribers, people and employees (ids are unique across both), oldest first. */
export async function listSubscribers(organizationId: string, issueId: string): Promise<string[]> {
  const rows = await db
    .select({ userId: issueSubscriptions.userId, employeeId: issueSubscriptions.employeeId })
    .from(issueSubscriptions)
    .where(and(eq(issueSubscriptions.organizationId, organizationId), eq(issueSubscriptions.issueId, issueId)))
    .orderBy(asc(issueSubscriptions.createdAt), asc(issueSubscriptions.id));
  return rows.map((r) => (r.userId ?? r.employeeId)!);
}

/** The ids of the issues the employee follows. */
export async function subscribedIssueIds(organizationId: string, employeeId: string): Promise<Set<string>> {
  const rows = await db
    .select({ issueId: issueSubscriptions.issueId })
    .from(issueSubscriptions)
    .where(and(eq(issueSubscriptions.organizationId, organizationId), eq(issueSubscriptions.employeeId, employeeId)));
  return new Set(rows.map((r) => r.issueId));
}

/** The issue's employees who follow it, but for those in `except` (who did it, or were told in other words). */
export async function subscribedEmployees(issueId: string, except: (string | null)[]): Promise<string[]> {
  const skip = except.filter((id) => id !== null);
  const rows = await db
    .select({ employeeId: issueSubscriptions.employeeId })
    .from(issueSubscriptions)
    .where(
      and(
        eq(issueSubscriptions.issueId, issueId),
        isNotNull(issueSubscriptions.employeeId),
        skip.length > 0 ? notInArray(issueSubscriptions.employeeId, skip) : undefined,
      ),
    );
  return rows.map((r) => r.employeeId!);
}

/**
 * Puts the issue in its subscribed people's Inboxes as unread, but for whoever did it, who has seen it: someone
 * commented on or changed it. The caller tells their open tabs (pushActivity).
 */
export async function notifyPeople(organizationId: string, issueId: string, actor: IssueCreator | null) {
  const me = actor && "userId" in actor ? actor.userId : null;
  const now = new Date();
  await db
    .update(issueSubscriptions)
    .set({ notifiedAt: now })
    .where(
      and(
        eq(issueSubscriptions.issueId, issueId),
        isNotNull(issueSubscriptions.userId),
        me ? ne(issueSubscriptions.userId, me) : undefined,
      ),
    );
  if (me) await markIssueRead(organizationId, issueId, me);
}

/** Who an id is: an employee of the organization or one of its members. */
async function subscriberById(organizationId: string, value: unknown): Promise<Subscriber> {
  const id = text(value, "subscriberId", { required: true });
  const [[employee], [member]] = await Promise.all([
    db
      .select({ id: employees.id })
      .from(employees)
      .where(and(eq(employees.organizationId, organizationId), eq(employees.id, id), isNull(employees.archivedAt))),
    db
      .select({ id: members.userId })
      .from(members)
      .where(and(eq(members.organizationId, organizationId), eq(members.userId, id))),
  ]);
  if (employee) return { employeeId: id };
  if (member) return { userId: id };
  throw new NotFoundError("Not found in this organization");
}

/**
 * Adds someone to the issue's subscribers or removes them; `subscriberId` is an employee's or a member's id. The
 * assignee can't be removed: they hear about the issue while it's theirs.
 */
export async function setSubscribed(organizationId: string, issueIdValue: unknown, subscriberId: unknown, subscribed: boolean) {
  const issueId = text(issueIdValue, "issueId", { required: true });
  const [issue] = await db
    .select({
      number: issues.number,
      assigneeId: sql<string | null>`coalesce(${issues.assigneeEmployeeId}, ${issues.assigneeUserId})`,
    })
    .from(issues)
    .where(and(eq(issues.id, issueId), eq(issues.organizationId, organizationId)));
  if (!issue) throw new NotFoundError("Not found in this organization");
  const who = await subscriberById(organizationId, subscriberId);
  const id = "userId" in who ? who.userId : who.employeeId;
  if (subscribed) {
    await subscribe(db, organizationId, issueId, [who]);
  } else {
    if (id === issue.assigneeId) {
      throw new InputError(
        `The assignee of ${issueKey(issue.number)} stays subscribed while it's assigned. Assign it to someone else first.`,
      );
    }
    await db
      .delete(issueSubscriptions)
      .where(
        and(
          eq(issueSubscriptions.issueId, issueId),
          "userId" in who ? eq(issueSubscriptions.userId, who.userId) : eq(issueSubscriptions.employeeId, who.employeeId),
        ),
      );
  }
  // Open pages of the issue show the new list.
  pushActivity(organizationId, issueId);
}

/** The person has seen the issue: it's read in their Inbox. */
export async function markIssueRead(organizationId: string, issueId: string, userId: string) {
  await db
    .update(issueSubscriptions)
    .set({ readAt: new Date() })
    .where(
      and(
        eq(issueSubscriptions.organizationId, organizationId),
        eq(issueSubscriptions.issueId, issueId),
        eq(issueSubscriptions.userId, userId),
      ),
    );
}

/** Marks everything in the person's Inbox read. */
export async function markInboxRead(organizationId: string, userId: string) {
  await db
    .update(issueSubscriptions)
    .set({ readAt: new Date() })
    .where(
      and(
        eq(issueSubscriptions.organizationId, organizationId),
        eq(issueSubscriptions.userId, userId),
        isNotNull(issueSubscriptions.notifiedAt),
      ),
    );
}

/**
 * The person's Inbox: the issues they follow on which someone else commented or changed something, latest first,
 * each with what was done last by someone other than them.
 */
export async function inboxOf(organizationId: string, userId: string): Promise<InboxItem[]> {
  const rows = await db
    .select({
      issueId: issueSubscriptions.issueId,
      notifiedAt: issueSubscriptions.notifiedAt,
      readAt: issueSubscriptions.readAt,
      number: issues.number,
      title: issues.title,
      status: issues.status,
    })
    .from(issueSubscriptions)
    .innerJoin(issues, eq(issues.id, issueSubscriptions.issueId))
    .where(
      and(
        eq(issueSubscriptions.organizationId, organizationId),
        eq(issueSubscriptions.userId, userId),
        isNotNull(issueSubscriptions.notifiedAt),
      ),
    )
    .orderBy(desc(issueSubscriptions.notifiedAt))
    .limit(INBOX_LIMIT);
  if (rows.length === 0) return [];
  const latest = await db
    .selectDistinctOn([issueActivity.issueId])
    .from(issueActivity)
    .where(
      and(
        inArray(
          issueActivity.issueId,
          rows.map((r) => r.issueId),
        ),
        // Crewmark's own entries, a schedule coming round, tell nobody.
        ne(issueActivity.kind, "recurred"),
        sql`${issueActivity.userId} is distinct from ${userId}`,
      ),
    )
    .orderBy(issueActivity.issueId, desc(issueActivity.id));
  const byIssue = new Map(latest.map((entry) => [entry.issueId, entry]));
  return rows.map((row) => {
    const entry = byIssue.get(row.issueId);
    return {
      issueId: row.issueId,
      key: issueKey(row.number),
      title: row.title,
      status: row.status,
      notifiedAt: row.notifiedAt!.toISOString(),
      unread: !row.readAt || row.readAt < row.notifiedAt!,
      latest: entry ? toActivity(entry) : null,
    };
  });
}
