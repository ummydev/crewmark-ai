import "server-only";

import { and, desc, eq, isNotNull, isNull } from "drizzle-orm";

import { db } from "@/db";
import { assertInOrganization, found } from "@/db/issues";
import { toEmployee } from "@/db/queries";
import { agentConnections, employeeProjects, employees, projects } from "@/db/schema";
import { pushToDaemons } from "@/lib/realtime";
import { EMPLOYEE_EMOJIS, type AgentSettings, type Employee, type Heartbeat } from "@/lib/types";
import { EMPLOYEE_STATUS_VALUES, agentSettings, heartbeat, oneOf, text } from "@/lib/validate";

// Writing employees, shared by the dashboard's Server Functions and the CLI's API. Callers check that whoever asks
// belongs to the organization; these only touch that organization's rows.

// runtime comes from the agent that connects, and lastActiveAt from its runs, not from people. Without an emoji, a new
// employee gets one nobody in the organization wears.
export type NewEmployeeInput = Omit<Employee, "id" | "runtime" | "lastActiveAt" | "archivedAt" | "agentSettings" | "emoji"> & { emoji?: string };
export type EmployeePatch = Partial<Omit<Employee, "id" | "runtime" | "projectIds" | "lastActiveAt" | "archivedAt">>;

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
  if ("agentSettings" in patch) values.agentSettings = agentSettings(patch.agentSettings);
  if (Object.keys(values).length === 0) return;
  found(
    await db
      .update(employees)
      .set(values)
      .where(and(eq(employees.id, text(id, "id", { required: true })), eq(employees.organizationId, organizationId)))
      .returning({ id: employees.id }),
  );
  // The daemon wakes the agent by these settings, and runs its conversation by the agent settings: it fetches them
  // again (they come with the heartbeat, /api/agent/heartbeat).
  if ("heartbeat" in values || "agentSettings" in values) pushToDaemons(organizationId, [id], "heartbeat");
}

/** The employee's heartbeat settings, read on their own for the daemon (the full employee needs its organization). */
export async function getHeartbeat(employeeId: string): Promise<Heartbeat | null> {
  const [row] = await db
    .select({ heartbeat: employees.heartbeat })
    .from(employees)
    .where(and(eq(employees.id, employeeId), isNull(employees.archivedAt)));
  // An archived employee isn't woken (MC-305).
  return row?.heartbeat ?? null;
}

/** How the daemon runs the employee's conversation (MC-313), read with its heartbeat. */
export async function getAgentSettings(employeeId: string): Promise<AgentSettings | null> {
  const [row] = await db.select({ settings: employees.agentSettings }).from(employees).where(eq(employees.id, employeeId));
  return row?.settings ?? null;
}

/**
 * Where the employee's conversation runs (its live connection's folder and computer, null before one connects), and
 * the folders its organization's other conversations run in, to offer as extra folders (MC-313).
 */
export async function conversationFolders(organizationId: string, employeeId: string) {
  const live = await db
    .select({ employeeId: agentConnections.employeeId, workdir: agentConnections.workdir, hostname: agentConnections.hostname })
    .from(agentConnections)
    .where(and(eq(agentConnections.organizationId, organizationId), isNull(agentConnections.revokedAt)))
    .orderBy(desc(agentConnections.createdAt));
  const own = live.find((c) => c.employeeId === employeeId);
  const folders = [...new Set(live.map((c) => c.workdir).filter((dir) => dir && dir !== own?.workdir))].sort();
  return { workdir: own?.workdir || null, hostname: own?.hostname || null, folders };
}

/** Whether the employee is archived (MC-305): its agent then gets nothing to do. */
export async function isArchived(employeeId: string): Promise<boolean> {
  const [row] = await db
    .select({ id: employees.id })
    .from(employees)
    .where(and(eq(employees.id, employeeId), isNotNull(employees.archivedAt)));
  return Boolean(row);
}

/**
 * Archives the employee, or brings it back (MC-305). Archived, it's as good as deleted: left out wherever employees
 * are listed, picked, mentioned or messaged, its agent gets no heartbeat and nothing to read (what comes for it
 * meanwhile is dropped), but nothing of it is deleted. Its issues stay assigned to it, to be hers again on coming back.
 */
export async function archiveEmployee(organizationId: string, id: unknown, archived: boolean): Promise<void> {
  const employeeId = text(id, "id", { required: true });
  found(
    await db
      .update(employees)
      .set({ archivedAt: archived ? new Date() : null })
      .where(and(eq(employees.id, employeeId), eq(employees.organizationId, organizationId)))
      .returning({ id: employees.id }),
  );
  // Its daemon reads the heartbeat again: none while archived, its own once back.
  pushToDaemons(organizationId, [employeeId], "heartbeat");
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
