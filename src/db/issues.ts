import "server-only";

import { and, eq, inArray, sql } from "drizzle-orm";

import { db } from "@/db";
import { notifyAssigned } from "@/db/agent-events";
import { recordChanges, type Transaction } from "@/db/issue-activity";
import { issueKey, toIssue } from "@/db/queries";
import { reschedule } from "@/db/recurrence";
import { employeeProjects, employees, issues, members, organizations, projects } from "@/db/schema";
import { RecurrenceError, formatRecurrence, nextOccurrence, parseRecurrence } from "@/lib/recurrence";
import type { Issue } from "@/lib/types";
import { InputError, NotFoundError, PRIORITY_VALUES, STATUS_VALUES, idOrNull, oneOf, text } from "@/lib/validate";

// Writing issues, shared by the dashboard's Server Functions and the agent API. Callers check that whoever asks
// belongs to the organization; these only touch that organization's rows.

export type NewIssueInput = Pick<Issue, "title" | "description" | "status" | "priority" | "assigneeId" | "projectId"> & {
  /** A schedule to repeat on (iCalendar text, see lib/recurrence.ts); none by default. */
  recurrence?: string | null;
};

export type IssuePatch = Partial<
  Omit<Issue, "id" | "key" | "createdByUserId" | "createdByEmployeeId" | "createdAt">
>;

/** Filed or changed by a person in the dashboard, or by a digital employee through the agent API. */
export type IssueCreator = { userId: string } | { employeeId: string };

/** Throws unless every id is a row of `table` in the organization, so nothing links across organizations. */
export async function assertInOrganization(
  table: typeof projects | typeof employees,
  ids: (string | null)[],
  organizationId: string,
) {
  const wanted = [...new Set(ids.filter((id) => id !== null))];
  if (wanted.length === 0) return;
  const rows = await db
    .select({ id: table.id })
    .from(table)
    .where(and(eq(table.organizationId, organizationId), inArray(table.id, wanted)));
  if (rows.length !== wanted.length) throw new NotFoundError("Not found in this organization");
}

/** The columns for an assignee given by id: a digital employee or a member of the organization; null unassigns. */
async function assigneeColumns(organizationId: string, value: unknown) {
  const id = idOrNull(value, "assigneeId");
  if (id === null) return { assigneeEmployeeId: null, assigneeUserId: null };
  const [[employee], [member]] = await Promise.all([
    db
      .select({ id: employees.id })
      .from(employees)
      .where(and(eq(employees.organizationId, organizationId), eq(employees.id, id))),
    db
      .select({ id: members.userId })
      .from(members)
      .where(and(eq(members.organizationId, organizationId), eq(members.userId, id))),
  ]);
  if (employee) return { assigneeEmployeeId: id, assigneeUserId: null };
  if (member) return { assigneeEmployeeId: null, assigneeUserId: id };
  throw new NotFoundError("Not found in this organization");
}

/**
 * An issue in a project goes to someone on it: when the employee is on other projects but not this one, their names
 * for the error. People (members) and employees on no project can take any issue.
 */
async function offProject(tx: Transaction | typeof db, employeeId: string, projectId: string) {
  const onProjects = (project?: string) =>
    sql<boolean>`exists (select 1 from ${employeeProjects} where ${employeeProjects.employeeId} = ${employees.id}${
      project ? sql` and ${employeeProjects.projectId} = ${project}` : sql``
    })`;
  const [row] = await tx
    .select({ employee: employees.name, project: projects.name, onAny: onProjects(), onIt: onProjects(projectId) })
    .from(employees)
    .innerJoin(projects, eq(projects.id, projectId))
    .where(eq(employees.id, employeeId));
  return row && row.onAny && !row.onIt ? row : null;
}

function offProjectError({ employee, project }: { employee: string; project: string }) {
  return new InputError(
    `${employee} isn't on the project ${project}, so can't take its issues. Assign someone on it, or add ${employee} ` +
      `to ${project} on their page first.`,
  );
}

/**
 * The columns for a schedule as iCalendar text, written back in Crewmark's own form, with when it next comes round;
 * null stops the issue repeating. Issue.nextRecurAt in a patch is ignored: it follows from the schedule.
 */
function recurrenceColumns(value: unknown) {
  if (value === null) return { recurrence: null, nextRecurAt: null };
  if (typeof value !== "string") throw new InputError("Invalid recurrence");
  try {
    const recurrence = parseRecurrence(value);
    return { recurrence: formatRecurrence(recurrence), nextRecurAt: nextOccurrence(recurrence, new Date()) };
  } catch (error) {
    if (error instanceof RecurrenceError) throw new InputError(error.message);
    throw error;
  }
}

/** Throws when an update matched nothing: the id doesn't exist in this organization. */
export function found(rows: unknown[]) {
  if (rows.length === 0) throw new NotFoundError("Not found in this organization");
}

export async function insertIssue(organizationId: string, input: NewIssueInput, creator: IssueCreator): Promise<Issue> {
  const assignee = await assigneeColumns(organizationId, input.assigneeId);
  const projectId = idOrNull(input.projectId, "projectId");
  await assertInOrganization(projects, [projectId], organizationId);
  const off = assignee.assigneeEmployeeId && projectId && (await offProject(db, assignee.assigneeEmployeeId, projectId));
  if (off) throw offProjectError(off);
  const repeats = input.recurrence ? recurrenceColumns(input.recurrence) : {};
  const issue = await db.transaction(async (tx) => {
    // Numbers count up per organization. Holding its row makes two issues filed at once take turns.
    await tx.select({ id: organizations.id }).from(organizations).where(eq(organizations.id, organizationId)).for("update");
    const [row] = await tx
      .insert(issues)
      .values({
        organizationId,
        number: sql`(select coalesce(max(${issues.number}), 0) + 1 from ${issues} where ${issues.organizationId} = ${organizationId})`,
        title: text(input.title, "title", { required: true }).trim(),
        description: text(input.description, "description").trim(),
        status: oneOf(input.status, STATUS_VALUES, "status"),
        priority: oneOf(input.priority, PRIORITY_VALUES, "priority"),
        ...assignee,
        projectId,
        createdByUserId: "userId" in creator ? creator.userId : null,
        createdByEmployeeId: "employeeId" in creator ? creator.employeeId : null,
        // New issues go to the end of the board.
        position: sql`(select coalesce(max(${issues.position}), 0) + 1 from ${issues} where ${issues.organizationId} = ${organizationId})`,
        ...repeats,
      })
      .returning();
    return toIssue(row);
  });
  await notifyAssigned(organizationId, { ...issue, assigneeId: assignee.assigneeEmployeeId }, creator);
  if (issue.recurrence) await reschedule(organizationId);
  return issue;
}

/** Changes the fields in the patch; `actor` is who did it, so a new assignee's agent hears who assigned it. */
export async function updateIssue(
  organizationId: string,
  id: string,
  patch: IssuePatch,
  actor: IssueCreator,
): Promise<void> {
  const values: Partial<typeof issues.$inferInsert> = {};
  if ("title" in patch) values.title = text(patch.title, "title");
  if ("description" in patch) values.description = text(patch.description, "description");
  if ("status" in patch) values.status = oneOf(patch.status, STATUS_VALUES, "status");
  if ("priority" in patch) values.priority = oneOf(patch.priority, PRIORITY_VALUES, "priority");
  if ("assigneeId" in patch) Object.assign(values, await assigneeColumns(organizationId, patch.assigneeId));
  if ("projectId" in patch) {
    values.projectId = idOrNull(patch.projectId, "projectId");
    await assertInOrganization(projects, [values.projectId], organizationId);
  }
  if ("position" in patch) {
    if (typeof patch.position !== "number" || !Number.isFinite(patch.position)) throw new InputError("Invalid position");
    values.position = patch.position;
  }
  if ("recurrence" in patch) Object.assign(values, recurrenceColumns(patch.recurrence));
  if (Object.keys(values).length === 0) return;
  const issueId = text(id, "id", { required: true });
  const where = and(eq(issues.id, issueId), eq(issues.organizationId, organizationId));
  // Saving a title or description (as people type) skips the Activity bookkeeping.
  if (!TRACKED_COLUMNS.some((column) => column in values)) {
    found(await db.update(issues).set(values).where(where).returning({ id: issues.id }));
    return;
  }
  const { before, after } = await db.transaction(async (tx) => {
    const [before] = await tx.select(TRACKED).from(issues).where(where).for("update");
    found(before ? [before] : []);
    // Assigning an employee to an issue in a project they aren't on fails; moving the issue to such a project
    // unassigns them, which its Activity shows. Issues that were already so keep their assignee until either changes.
    const assigning = "assigneeEmployeeId" in values;
    if (assigning || "projectId" in values) {
      const employeeId = assigning ? values.assigneeEmployeeId : before.assigneeEmployeeId;
      const projectId = "projectId" in values ? values.projectId : before.projectId;
      const off = employeeId && projectId && (await offProject(tx, employeeId, projectId));
      if (off && assigning) throw offProjectError(off);
      if (off) values.assigneeEmployeeId = null;
    }
    const [after] = await tx
      .update(issues)
      .set(values)
      .where(where)
      .returning({ number: issues.number, title: issues.title, ...TRACKED });
    await recordChanges(tx, organizationId, issueId, before, after, actor);
    return { before, after };
  });
  // Only an employee has an agent to tell.
  if (after.assigneeEmployeeId && after.assigneeId !== before.assigneeId) {
    const issue = { key: issueKey(after.number), title: after.title, assigneeId: after.assigneeEmployeeId };
    await notifyAssigned(organizationId, issue, actor);
  }
  // Setting the same schedule again still moves when it next comes round, so this tells the timer either way.
  if ("recurrence" in values) await reschedule(organizationId);
}

/** The values whose changes show in an issue's Activity; the assignee is whichever of its two columns is set. */
const TRACKED = {
  status: issues.status,
  priority: issues.priority,
  assigneeId: sql<string | null>`coalesce(${issues.assigneeEmployeeId}, ${issues.assigneeUserId})`,
  assigneeEmployeeId: issues.assigneeEmployeeId,
  projectId: issues.projectId,
  recurrence: issues.recurrence,
};
const TRACKED_COLUMNS = ["status", "priority", "assigneeEmployeeId", "assigneeUserId", "projectId", "recurrence"];

export async function deleteIssue(organizationId: string, id: string): Promise<void> {
  found(
    await db
      .delete(issues)
      .where(and(eq(issues.id, text(id, "id", { required: true })), eq(issues.organizationId, organizationId)))
      .returning({ id: issues.id }),
  );
}
