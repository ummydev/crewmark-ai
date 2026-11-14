import "server-only";

import { and, eq } from "drizzle-orm";

import { db } from "@/db";
import { assertInOrganization, found } from "@/db/issues";
import { toEmployee } from "@/db/queries";
import { employeeProjects, employees, projects } from "@/db/schema";
import { pushToDaemons } from "@/lib/realtime";
import { EMPLOYEE_EMOJIS, type Employee, type Heartbeat } from "@/lib/types";
import { EMPLOYEE_STATUS_VALUES, heartbeat, oneOf, text } from "@/lib/validate";

// Writing employees, shared by the dashboard's Server Functions and the CLI's API. Callers check that whoever asks
// belongs to the organization; these only touch that organization's rows.

// runtime comes from the agent that connects, and lastActiveAt from its runs, not from people. Without an emoji, a new
// employee gets one nobody in the organization wears.
export type NewEmployeeInput = Omit<Employee, "id" | "runtime" | "lastActiveAt" | "emoji"> & { emoji?: string };
export type EmployeePatch = Partial<Omit<Employee, "id" | "runtime" | "projectIds" | "lastActiveAt">>;

function projectIdList(value: unknown): string[] {
  return Array.isArray(value) ? [...new Set(value.map((id) => text(id, "projectId", { required: true })))] : [];
}

export async function insertEmployee(organizationId: string, input: NewEmployeeInput): Promise<Employee> {
  const projectIds = projectIdList(input.projectIds);
  await assertInOrganization(projects, projectIds, organizationId);
  return db.transaction(async (tx) => {
    let emoji = input.emoji === undefined ? undefined : oneOf(input.emoji, EMPLOYEE_EMOJIS, "emoji");
    if (!emoji) {
      const worn = await tx
        .select({ emoji: employees.emoji })
        .from(employees)
        .where(eq(employees.organizationId, organizationId));
      const taken = new Set(worn.map((e) => e.emoji));
      emoji = EMPLOYEE_EMOJIS.find((e) => !taken.has(e)) ?? EMPLOYEE_EMOJIS[worn.length % EMPLOYEE_EMOJIS.length];
    }
    const [row] = await tx
      .insert(employees)
      .values({
        organizationId,
        name: text(input.name, "name", { required: true }).trim(),
        emoji,
        role: text(input.role ?? "", "role").trim(),
        description: text(input.description ?? "", "description").trim(),
        kpi: text(input.kpi ?? "", "kpi").trim(),
        status: oneOf(input.status ?? "idle", EMPLOYEE_STATUS_VALUES, "status"),
        heartbeat: heartbeat(input.heartbeat ?? null),
      })
      .returning();
    if (projectIds.length > 0) {
      await tx.insert(employeeProjects).values(projectIds.map((projectId) => ({ employeeId: row.id, projectId })));
    }
    return toEmployee(row, projectIds);
  });
}

export async function saveEmployee(organizationId: string, id: string, patch: EmployeePatch): Promise<void> {
  const values: Partial<typeof employees.$inferInsert> = {};
  if ("name" in patch) values.name = text(patch.name, "name");
  if ("emoji" in patch) values.emoji = oneOf(patch.emoji, EMPLOYEE_EMOJIS, "emoji");
  if ("role" in patch) values.role = text(patch.role, "role");
  if ("description" in patch) values.description = text(patch.description, "description");
  if ("kpi" in patch) values.kpi = text(patch.kpi, "kpi");
  if ("status" in patch) values.status = oneOf(patch.status, EMPLOYEE_STATUS_VALUES, "status");
  if ("heartbeat" in patch) values.heartbeat = heartbeat(patch.heartbeat);
  if (Object.keys(values).length === 0) return;
  found(
    await db
      .update(employees)
      .set(values)
      .where(and(eq(employees.id, text(id, "id", { required: true })), eq(employees.organizationId, organizationId)))
      .returning({ id: employees.id }),
  );
  // The daemon wakes the agent by these settings: it fetches them again.
  if ("heartbeat" in values) pushToDaemons(organizationId, [id], "heartbeat");
}

/** The employee's heartbeat settings, read on their own for the daemon (the full employee needs its organization). */
export async function getHeartbeat(employeeId: string): Promise<Heartbeat | null> {
  const [row] = await db.select({ heartbeat: employees.heartbeat }).from(employees).where(eq(employees.id, employeeId));
  return row?.heartbeat ?? null;
}

/** Puts the employee on exactly these projects. */
export async function setEmployeeProjects(organizationId: string, id: string, projectIds: unknown): Promise<void> {
  const ids = projectIdList(projectIds);
  await assertInOrganization(employees, [id], organizationId);
  await assertInOrganization(projects, ids, organizationId);
  await db.transaction(async (tx) => {
    await tx.delete(employeeProjects).where(eq(employeeProjects.employeeId, id));
    if (ids.length > 0) await tx.insert(employeeProjects).values(ids.map((projectId) => ({ employeeId: id, projectId })));
  });
}

/**
 * Deletes the employee. Its issues stay, unassigned (and those it filed lose their creator); its connected agent, setup
 * links, project memberships and waiting events go with it, so the agent's API key stops working.
 */
export async function deleteEmployee(organizationId: string, id: string): Promise<void> {
  found(
    await db
      .delete(employees)
      .where(and(eq(employees.id, text(id, "id", { required: true })), eq(employees.organizationId, organizationId)))
      .returning({ id: employees.id }),
  );
}
