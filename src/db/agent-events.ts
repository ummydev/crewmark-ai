import "server-only";

import { and, asc, desc, eq, gt } from "drizzle-orm";

import { db } from "@/db";
import type { IssueCreator } from "@/db/issues";
import { agentEvents, employees, users } from "@/db/schema";
import type { AgentEvent } from "@/lib/agent-api";
import { mentionedEmployees } from "@/lib/mentions";
import { pushToDaemons } from "@/lib/realtime";
import { ISSUE_STATUSES } from "@/lib/types";

// Events for employees' agents: written when something on Crewmark concerns an employee, read by the crewmark CLI's
// daemon from GET /api/agent/events, which hands each message to the agent's conversation. The daemon fetches when
// it's told there's something new (src/lib/realtime.ts), or polls where it can't be.

/** How many events one poll returns at most; the CLI asks again from the last one it got. */
const PAGE = 50;

/**
 * Events a person is waiting on, which reach the agent even while it's working (AgentEvent.urgent): what people
 * write. What other employees write waits until the agent is idle, so they don't keep interrupting each other.
 */
const URGENT = new Set(["direct_message", "person_comment", "person_mention"]);

/** How the person or employee who did something is named in a message to an agent. */
async function actorName(actor: IssueCreator) {
  if ("userId" in actor) {
    const [user] = await db
      .select({ name: users.name, username: users.username })
      .from(users)
      .where(eq(users.id, actor.userId));
    return user?.name || user?.username || "Someone";
  }
  const [employee] = await db.select({ name: employees.name }).from(employees).where(eq(employees.id, actor.employeeId));
  return employee?.name ?? "A colleague";
}

/** Tells an employee's agent it was assigned an issue, unless it assigned the issue to itself. */
export async function notifyAssigned(
  organizationId: string,
  issue: { key: string; title: string; assigneeId: string | null },
  actor: IssueCreator,
) {
  if (!issue.assigneeId || ("employeeId" in actor && actor.employeeId === issue.assigneeId)) return;
  await db.insert(agentEvents).values({
    organizationId,
    employeeId: issue.assigneeId,
    type: "issue_assigned",
    message:
      `${await actorName(actor)} assigned you ${issue.key}: "${issue.title}". Run \`crewmark issues show ${issue.key}\` ` +
      "for the details and work on it, or say why you can't.",
  });
  pushToDaemons(organizationId, [issue.assigneeId], "events");
}

/**
 * Tells an employee's agent that the schedule of an issue it's assigned came round (db/recurrence.ts): Crewmark
 * reopened it, or it's still open from last time.
 */
export async function notifyRecurred(
  organizationId: string,
  issue: { key: string; title: string; employeeId: string; status: string; reopened: boolean; schedule: string },
) {
  const status = ISSUE_STATUSES.find((s) => s.value === issue.status)?.label ?? issue.status;
  const message = issue.reopened
    ? `${issue.key} "${issue.title}" repeats ${issue.schedule}, and it's due again, so Crewmark moved it back to ` +
      `Todo. Run \`crewmark issues show ${issue.key}\`, do this round of it, and set it to done when you've finished.`
    : `${issue.key} "${issue.title}" repeats ${issue.schedule}, and it's due again, but last time's round isn't done ` +
      `yet (it's ${status}). Run \`crewmark issues show ${issue.key}\`, finish it, and set it to done when you have.`;
  await db.insert(agentEvents).values({ organizationId, employeeId: issue.employeeId, type: "issue_recurred", message });
  pushToDaemons(organizationId, [issue.employeeId], "events");
}

/** How much of a comment an agent is told; it reads the rest with `crewmark issues show`. */
const COMMENT_PREVIEW = 1500;

type CommentedIssue = { key: string; title: string; assigneeId: string | null };

/** What an agent is told about a comment: who wrote it, how it concerns the agent ("commented on", "mentioned you
 * in a comment on"), the comment, and what to do about it. */
async function commentMessage(issue: CommentedIssue, body: string, actor: IssueCreator, how: string) {
  const preview = body.length > COMMENT_PREVIEW ? `${body.slice(0, COMMENT_PREVIEW)}…` : body;
  return (
    `${await actorName(actor)} ${how} ${issue.key} "${issue.title}":\n\n` +
    `${preview.replace(/^/gm, "> ")}\n\n` +
    `Run \`crewmark issues show ${issue.key}\` for the issue and its whole conversation. Act on the comment, and ` +
    `answer with \`crewmark issues comment ${issue.key} "<your reply>"\` when it asks you something or you have news.`
  );
}

/**
 * Tells the agent of the issue's assignee that someone else commented on it. Only the assignee's: the employee who
 * filed the issue has handed the work over, and isn't told about every comment on it unless it's mentioned.
 */
export async function notifyCommented(organizationId: string, issue: CommentedIssue, body: string, actor: IssueCreator) {
  const employeeId = issue.assigneeId;
  if (!employeeId || ("employeeId" in actor && actor.employeeId === employeeId)) return;
  const message = await commentMessage(issue, body, actor, "commented on");
  const type = "userId" in actor ? "person_comment" : "issue_comment";
  await db.insert(agentEvents).values({ organizationId, employeeId, type, message });
  pushToDaemons(organizationId, [employeeId], "events");
}

/**
 * Tells the agents of the employees a comment mentions (@name, see mentionedEmployees) that it did, besides the
 * assignee's, which notifyCommented tells, and the author's.
 */
export async function notifyMentioned(organizationId: string, issue: CommentedIssue, body: string, actor: IssueCreator) {
  if (!body.includes("@")) return;
  const staff = await db
    .select({ id: employees.id, name: employees.name })
    .from(employees)
    .where(eq(employees.organizationId, organizationId));
  const author = "employeeId" in actor ? actor.employeeId : null;
  const employeeIds = mentionedEmployees(body, staff).filter((id) => id !== author && id !== issue.assigneeId);
  if (employeeIds.length === 0) return;
  const message = await commentMessage(issue, body, actor, "mentioned you in a comment on");
  await db
    .insert(agentEvents)
    .values(
      employeeIds.map((employeeId) => ({
        organizationId,
        employeeId,
        type: "userId" in actor ? "person_mention" : "issue_mention",
        message,
      })),
    );
  pushToDaemons(organizationId, employeeIds, "events");
}

/**
 * The employee's events after the one with id `after`, oldest first, and where to ask from next time. Without
 * `after` it returns none, only the latest id, so a CLI that starts listening doesn't replay what came before.
 */
export async function eventsAfter(employeeId: string, after: number | null): Promise<{ events: AgentEvent[]; cursor: number }> {
  if (after === null) {
    const [latest] = await db
      .select({ id: agentEvents.id })
      .from(agentEvents)
      .where(eq(agentEvents.employeeId, employeeId))
      .orderBy(desc(agentEvents.id))
      .limit(1);
    return { events: [], cursor: latest?.id ?? 0 };
  }
  const rows = await db
    .select()
    .from(agentEvents)
    .where(and(eq(agentEvents.employeeId, employeeId), gt(agentEvents.id, after)))
    .orderBy(asc(agentEvents.id))
    .limit(PAGE);
  return {
    events: rows.map((e) => ({
      id: e.id,
      type: e.type,
      message: e.message,
      createdAt: e.createdAt.toISOString(),
      urgent: URGENT.has(e.type),
    })),
    cursor: rows.at(-1)?.id ?? after,
  };
}
