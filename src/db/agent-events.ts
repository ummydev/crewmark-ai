import "server-only";

import { and, asc, desc, eq, gt, inArray } from "drizzle-orm";

import { db } from "@/db";
import type { IssueCreator } from "@/db/issues";
import { agentEvents, employees, projects, users } from "@/db/schema";
import { subscribedEmployees } from "@/db/subscriptions";
import type { AgentEvent } from "@/lib/agent-api";
import { mentionedEmployees } from "@/lib/mentions";
import { pushToDaemons } from "@/lib/realtime";
import { describeRecurrence, parseRecurrence } from "@/lib/recurrence";
import { ISSUE_PRIORITIES, ISSUE_STATUSES, type IssueActivityKind } from "@/lib/types";

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

type CommentedIssue = { id: string; key: string; title: string; assigneeId: string | null };

/** What an agent is told about a comment: who wrote it, how it concerns the agent ("commented on", "mentioned you
 * in a comment on"), the comment, and what to do about it (by default, act on it and answer). */
async function commentMessage(issue: CommentedIssue, body: string, actor: IssueCreator, how: string, then?: string) {
  const preview = body.length > COMMENT_PREVIEW ? `${body.slice(0, COMMENT_PREVIEW)}…` : body;
  return (
    `${await actorName(actor)} ${how} ${issue.key} "${issue.title}":\n\n` +
    `${preview.replace(/^/gm, "> ")}\n\n` +
    `Run \`crewmark issues show ${issue.key}\` for the issue and its whole conversation. ` +
    (then ??
      `Act on the comment, and answer with \`crewmark issues comment ${issue.key} "<your reply>"\` when it asks you ` +
        "something or you have news.")
  );
}

/** What a subscriber is told to do about news of an issue: only what concerns it, and how to stop hearing. */
function asSubscriber(key: string) {
  return (
    "You're told because you're subscribed to it: act or answer only if it concerns you. To stop hearing about it, " +
    `run \`crewmark issues unsubscribe ${key}\`.`
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
 * assignee's, which notifyCommented tells, and the author's. Returns everyone it mentions but the author.
 */
export async function notifyMentioned(
  organizationId: string,
  issue: CommentedIssue,
  body: string,
  actor: IssueCreator,
): Promise<string[]> {
  if (!body.includes("@")) return [];
  const staff = await db
    .select({ id: employees.id, name: employees.name })
    .from(employees)
    .where(eq(employees.organizationId, organizationId));
  const author = "employeeId" in actor ? actor.employeeId : null;
  const mentioned = mentionedEmployees(body, staff).filter((id) => id !== author);
  const employeeIds = mentioned.filter((id) => id !== issue.assigneeId);
  if (employeeIds.length === 0) return mentioned;
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
  return mentioned;
}

/** Tells the employees who follow the issue (MC-200) about a comment, but for its author and those in `told`. */
export async function notifySubscribersOfComment(
  organizationId: string,
  issue: CommentedIssue,
  body: string,
  actor: IssueCreator,
  told: (string | null)[],
) {
  const author = "employeeId" in actor ? actor.employeeId : null;
  const employeeIds = await subscribedEmployees(issue.id, [author, ...told]);
  if (employeeIds.length === 0) return;
  const message = await commentMessage(
    issue,
    body,
    actor,
    "commented on an issue you're subscribed to,",
    asSubscriber(issue.key),
  );
  await db
    .insert(agentEvents)
    .values(employeeIds.map((employeeId) => ({ organizationId, employeeId, type: "subscribed_comment", message })));
  pushToDaemons(organizationId, employeeIds, "events");
}

/** A change to one of an issue's tracked properties, its values as stored (an enum value, an id, a schedule). */
export type IssueChange = { kind: IssueActivityKind; from: string | null; to: string | null };

const CHANGE_LABELS: Partial<Record<IssueActivityKind, string>> = {
  status: "Status",
  priority: "Priority",
  assignee: "Assignee",
  project: "Project",
  repeat: "Repeats",
};

/** The changes as lines of "Status: In Progress → Done", with names for the people, employees and projects. */
async function changeLines(changes: IssueChange[]) {
  const ids = (kind: IssueActivityKind) =>
    changes.filter((c) => c.kind === kind).flatMap((c) => [c.from, c.to].filter((v) => v !== null));
  const [people, staff, places] = await Promise.all([
    ids("assignee").length
      ? db.select({ id: users.id, name: users.name, username: users.username }).from(users).where(inArray(users.id, ids("assignee")))
      : [],
    ids("assignee").length
      ? db.select({ id: employees.id, name: employees.name }).from(employees).where(inArray(employees.id, ids("assignee")))
      : [],
    ids("project").length
      ? db.select({ id: projects.id, name: projects.name }).from(projects).where(inArray(projects.id, ids("project")))
      : [],
  ]);
  const label = (kind: IssueActivityKind, value: string | null) => {
    if (value === null) return kind === "repeat" ? "off" : "none";
    switch (kind) {
      case "status":
        return ISSUE_STATUSES.find((s) => s.value === value)?.label ?? value;
      case "priority":
        return ISSUE_PRIORITIES.find((p) => p.value === value)?.label ?? value;
      case "assignee": {
        const person = people.find((u) => u.id === value);
        return staff.find((e) => e.id === value)?.name ?? (person ? person.name || person.username : "someone deleted since");
      }
      case "project":
        return places.find((p) => p.id === value)?.name ?? "a deleted project";
      case "repeat":
        try {
          const schedule = parseRecurrence(value);
          return `${describeRecurrence(schedule)} (${schedule.timeZone})`;
        } catch {
          return value;
        }
      default:
        return value;
    }
  };
  return changes.map((c) => `- ${CHANGE_LABELS[c.kind] ?? c.kind}: ${label(c.kind, c.from)} → ${label(c.kind, c.to)}`);
}

/**
 * Tells the employees who follow the issue (MC-200) that someone changed its status, priority, assignee, project or
 * schedule, but for whoever did it and those in `told` (a new assignee, told it was assigned the issue).
 */
export async function notifySubscribersOfChanges(
  organizationId: string,
  issue: { id: string; key: string; title: string },
  changes: IssueChange[],
  actor: IssueCreator,
  told: (string | null)[],
) {
  if (changes.length === 0) return;
  const author = "employeeId" in actor ? actor.employeeId : null;
  const employeeIds = await subscribedEmployees(issue.id, [author, ...told]);
  if (employeeIds.length === 0) return;
  const message =
    `${await actorName(actor)} changed ${issue.key} "${issue.title}", an issue you're subscribed to:\n\n` +
    `${(await changeLines(changes)).join("\n")}\n\n` +
    `Run \`crewmark issues show ${issue.key}\` for the issue. ${asSubscriber(issue.key)}`;
  await db
    .insert(agentEvents)
    .values(employeeIds.map((employeeId) => ({ organizationId, employeeId, type: "subscribed_change", message })));
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
