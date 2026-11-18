import "server-only";

import { and, asc, eq } from "drizzle-orm";

import { db } from "@/db";
import { notifyCommented, notifyMentioned, notifySubscribersOfComment, type IssueChange } from "@/db/agent-events";
import type { IssueCreator } from "@/db/issues";
import { issueKey } from "@/db/queries";
import { issueActivity, issues } from "@/db/schema";
import { notifyPeople, subscribe } from "@/db/subscriptions";
import { unsignAttachmentLinks } from "@/lib/attachment-links";
import { pushActivity } from "@/lib/realtime";
import { TRACKED_ISSUE_PROPERTIES, type IssueActivity } from "@/lib/types";
import { NotFoundError, text } from "@/lib/validate";

// An issue's Activity: comments from people and employees, and the changes to its tracked properties, which
// updateIssue records. Callers check that whoever asks belongs to the organization.

export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0];

/** The issue's values for the tracked properties, as updateIssue reads them before and after a change. */
export type TrackedValues = {
  status: string;
  priority: string;
  assigneeId: string | null;
  projectId: string | null;
  recurrence: string | null;
};

const COLUMNS = {
  status: "status",
  priority: "priority",
  assignee: "assigneeId",
  project: "projectId",
  repeat: "recurrence",
} as const;

export function toActivity({ fromValue, toValue, createdAt, organizationId, ...row }: typeof issueActivity.$inferSelect): IssueActivity {
  return { ...row, from: fromValue, to: toValue, createdAt: createdAt.toISOString() };
}

function actorColumns(actor: IssueCreator) {
  return {
    userId: "userId" in actor ? actor.userId : null,
    employeeId: "employeeId" in actor ? actor.employeeId : null,
  };
}

/** The issue's Activity, oldest first. */
export async function listActivity(organizationId: string, issueId: string): Promise<IssueActivity[]> {
  const rows = await db
    .select()
    .from(issueActivity)
    .where(and(eq(issueActivity.issueId, issueId), eq(issueActivity.organizationId, organizationId)))
    .orderBy(asc(issueActivity.id));
  return rows.map(toActivity);
}

/** Records one entry per tracked property that differs between `before` and `after`, and returns the changes. */
export async function recordChanges(
  tx: Transaction,
  organizationId: string,
  issueId: string,
  before: TrackedValues,
  after: TrackedValues,
  actor: IssueCreator,
): Promise<IssueChange[]> {
  const rows = TRACKED_ISSUE_PROPERTIES.filter((kind) => before[COLUMNS[kind]] !== after[COLUMNS[kind]]).map(
    (kind) => ({
      organizationId,
      issueId,
      kind,
      ...actorColumns(actor),
      fromValue: before[COLUMNS[kind]],
      toValue: after[COLUMNS[kind]],
    }),
  );
  if (rows.length === 0) return [];
  await tx.insert(issueActivity).values(rows);
  pushActivity(organizationId, issueId);
  return rows.map((row) => ({ kind: row.kind, from: row.fromValue, to: row.toValue }));
}

/**
 * Adds a comment, subscribes its author and the employees it mentions (@name) to the issue, and tells everyone who
 * follows it: the agents of the assignee and of the employees mentioned in their own words, the others' as
 * subscribers, and people in their Inbox.
 */
export async function addComment(
  organizationId: string,
  issueId: string,
  body: unknown,
  actor: IssueCreator,
): Promise<IssueActivity> {
  const markdown = unsignAttachmentLinks(text(body, "body", { required: true }).trim());
  const [issue] = await db
    .select({
      number: issues.number,
      title: issues.title,
      // A person assigned to it has no agent to tell.
      assigneeId: issues.assigneeEmployeeId,
    })
    .from(issues)
    .where(and(eq(issues.id, text(issueId, "issueId", { required: true })), eq(issues.organizationId, organizationId)));
  if (!issue) throw new NotFoundError("Not found in this organization");
  const [row] = await db
    .insert(issueActivity)
    .values({ organizationId, issueId, kind: "comment", ...actorColumns(actor), body: markdown })
    .returning();
  // A comment makes it the latest changed (MC-263).
  await db.update(issues).set({ updatedAt: row.createdAt }).where(eq(issues.id, issueId));
  const commented = { ...issue, id: issueId, key: issueKey(issue.number) };
  await notifyCommented(organizationId, commented, markdown, actor);
  const mentioned = await notifyMentioned(organizationId, commented, markdown, actor);
  await notifySubscribersOfComment(organizationId, commented, markdown, actor, [issue.assigneeId, ...mentioned]);
  // Those it mentions follow the issue from now on, and so does whoever writes on it, as in Linear.
  await subscribe(db, organizationId, issueId, [actor, ...mentioned.map((employeeId) => ({ employeeId }))]);
  await notifyPeople(organizationId, issueId, actor);
  pushActivity(organizationId, issueId);
  return toActivity(row);
}
