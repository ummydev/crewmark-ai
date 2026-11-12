import "server-only";

import { and, asc, desc, eq, gt } from "drizzle-orm";

import { db } from "@/db";
import type { IssueCreator } from "@/db/issues";
import { agentEvents, employees, users } from "@/db/schema";
import type { AgentEvent } from "@/lib/agent-api";

// Events for employees' agents: written when something on Crewmark concerns an employee, read by the crewmark CLI,
// which polls GET /api/agent/events and hands each message to the agent's conversation.

/** How many events one poll returns at most; the CLI asks again from the last one it got. */
const PAGE = 50;

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
}

/** How much of a comment an agent is told; it reads the rest with `crewmark issues show`. */
const COMMENT_PREVIEW = 1500;

/**
 * Tells the agents of the issue's assignee and of the employee who filed it that someone commented on it, except the
 * one who wrote the comment.
 */
export async function notifyCommented(
  organizationId: string,
  issue: { key: string; title: string; assigneeId: string | null; createdByEmployeeId: string | null },
  body: string,
  actor: IssueCreator,
) {
  const author = "employeeId" in actor ? actor.employeeId : null;
  const employeeIds = [...new Set([issue.assigneeId, issue.createdByEmployeeId])].filter(
    (id): id is string => id !== null && id !== author,
  );
  if (employeeIds.length === 0) return;
  const preview = body.length > COMMENT_PREVIEW ? `${body.slice(0, COMMENT_PREVIEW)}…` : body;
  const message =
    `${await actorName(actor)} commented on ${issue.key} "${issue.title}":\n\n` +
    `${preview.replace(/^/gm, "> ")}\n\n` +
    `Run \`crewmark issues show ${issue.key}\` for the issue and its whole conversation. Act on the comment, and ` +
    `answer with \`crewmark issues comment ${issue.key} "<your reply>"\` when it asks you something or you have news.`;
  await db
    .insert(agentEvents)
    .values(employeeIds.map((employeeId) => ({ organizationId, employeeId, type: "issue_comment", message })));
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
    events: rows.map((e) => ({ id: e.id, type: e.type, message: e.message, createdAt: e.createdAt.toISOString() })),
    cursor: rows.at(-1)?.id ?? after,
  };
}
