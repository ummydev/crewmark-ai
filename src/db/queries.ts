import "server-only";

import { and, asc, eq, gt, inArray, or } from "drizzle-orm";
import { connection } from "next/server";

import { db } from "@/db";
import {
  employeeProjects,
  employees,
  invitations,
  issues,
  members,
  organizations,
  projects,
  users,
} from "@/db/schema";
import type { Employee, Issue, Member, MemberRole, Organization, PendingInvitation, Project, User } from "@/lib/types";

// Reads for the dashboard. Each takes the organization it reads and returns only that organization's rows; callers
// check membership first (getMembership in lib/auth.ts).

export interface OrganizationData {
  /** Its members, and people who filed or were assigned one of its issues and have left since. */
  users: User[];
  /** Which of the users are members now: the people issues can be assigned to. */
  memberIds: string[];
  projects: Project[];
  employees: Employee[];
  issues: Issue[];
}

type IssueRow = typeof issues.$inferSelect;
type EmployeeRow = typeof employees.$inferSelect;

const userColumns = {
  id: users.id,
  username: users.username,
  name: users.name,
  email: users.email,
  profileImage: users.profileImage,
};

/** The key an issue is shown and looked up by, e.g. 7 → "MC-7". */
export function issueKey(number: number) {
  return `MC-${number}`;
}

export function toIssue({
  number,
  createdAt,
  organizationId,
  assigneeEmployeeId,
  assigneeUserId,
  ...row
}: IssueRow): Issue {
  return {
    ...row,
    key: issueKey(number),
    assigneeId: assigneeEmployeeId ?? assigneeUserId,
    createdAt: createdAt.toISOString(),
  };
}

export function toEmployee(
  { createdAt, lastActiveAt, organizationId, ...row }: EmployeeRow,
  projectIds: string[],
): Employee {
  return { ...row, projectIds, lastActiveAt: lastActiveAt?.toISOString() ?? null };
}

export function toProject({ createdAt, organizationId, ...row }: typeof projects.$inferSelect): Project {
  return row;
}

/** Everything the dashboard shows for one organization, read fresh on every request. */
export async function getOrganizationData(organizationId: string): Promise<OrganizationData> {
  // The data changes constantly, so render it at request time rather than prerendering it.
  await connection();

  const memberIds = db.select({ id: members.userId }).from(members).where(eq(members.organizationId, organizationId));
  const [userRows, memberRows, projectRows, employeeRows, linkRows, issueRows] = await Promise.all([
    // Its members, plus anyone who filed or was assigned one of its issues and has left since.
    db
      .select(userColumns)
      .from(users)
      .where(
        or(
          inArray(users.id, memberIds),
          inArray(
            users.id,
            db.select({ id: issues.createdByUserId }).from(issues).where(eq(issues.organizationId, organizationId)),
          ),
          inArray(
            users.id,
            db.select({ id: issues.assigneeUserId }).from(issues).where(eq(issues.organizationId, organizationId)),
          ),
        ),
      )
      .orderBy(asc(users.username)),
    memberIds,
    db.select().from(projects).where(eq(projects.organizationId, organizationId)).orderBy(asc(projects.createdAt)),
    db.select().from(employees).where(eq(employees.organizationId, organizationId)).orderBy(asc(employees.createdAt)),
    db
      .select({ employeeId: employeeProjects.employeeId, projectId: employeeProjects.projectId })
      .from(employeeProjects)
      .innerJoin(employees, eq(employees.id, employeeProjects.employeeId))
      .where(eq(employees.organizationId, organizationId)),
    db.select().from(issues).where(eq(issues.organizationId, organizationId)).orderBy(asc(issues.position)),
  ]);

  const projectIdsByEmployee = new Map<string, string[]>();
  for (const { employeeId, projectId } of linkRows) {
    projectIdsByEmployee.set(employeeId, [...(projectIdsByEmployee.get(employeeId) ?? []), projectId]);
  }

  return {
    users: userRows,
    memberIds: memberRows.map((m) => m.id),
    projects: projectRows.map(toProject),
    employees: employeeRows.map((e) => toEmployee(e, projectIdsByEmployee.get(e.id) ?? [])),
    issues: issueRows.map(toIssue),
  };
}

/** The organizations a user belongs to, oldest membership first. */
export async function getUserOrganizations(userId: string): Promise<Organization[]> {
  return db
    .select({ id: organizations.id, name: organizations.name, slug: organizations.slug })
    .from(members)
    .innerJoin(organizations, eq(organizations.id, members.organizationId))
    .where(eq(members.userId, userId))
    .orderBy(asc(members.createdAt));
}

/** An organization's members and the invitations still waiting for an answer, for its settings page. */
export async function getMembersAndInvitations(
  organizationId: string,
): Promise<{ members: Member[]; invitations: PendingInvitation[] }> {
  await connection();
  const [memberRows, invitationRows] = await Promise.all([
    db
      .select({ id: members.id, role: members.role, user: userColumns })
      .from(members)
      .innerJoin(users, eq(users.id, members.userId))
      .where(eq(members.organizationId, organizationId))
      .orderBy(asc(members.createdAt)),
    db
      .select({ id: invitations.id, email: invitations.email, role: invitations.role, expiresAt: invitations.expiresAt })
      .from(invitations)
      .where(
        and(
          eq(invitations.organizationId, organizationId),
          eq(invitations.status, "pending"),
          gt(invitations.expiresAt, new Date()),
        ),
      )
      .orderBy(asc(invitations.createdAt)),
  ]);
  return {
    members: memberRows.map((m) => ({ ...m, role: m.role as MemberRole })),
    invitations: invitationRows.map((i) => ({
      ...i,
      role: (i.role ?? "member") as MemberRole,
      expiresAt: i.expiresAt.toISOString(),
    })),
  };
}

export interface InvitationDetails {
  id: string;
  email: string;
  role: MemberRole;
  /** "pending", or already "accepted", "rejected" or "canceled". */
  status: string;
  expiresAt: Date;
  organization: Organization;
  inviter: string;
}

/** An invitation with what its page shows. Callers decide how much of it the signed-in person may see. */
export async function getInvitation(id: string): Promise<InvitationDetails | null> {
  await connection();
  const [row] = await db
    .select({
      id: invitations.id,
      email: invitations.email,
      role: invitations.role,
      status: invitations.status,
      expiresAt: invitations.expiresAt,
      organization: { id: organizations.id, name: organizations.name, slug: organizations.slug },
      inviter: users.username,
    })
    .from(invitations)
    .innerJoin(organizations, eq(organizations.id, invitations.organizationId))
    .innerJoin(users, eq(users.id, invitations.inviterId))
    .where(eq(invitations.id, id));
  return row ? { ...row, role: (row.role ?? "member") as MemberRole } : null;
}

/** Whether a user already belongs to an organization. */
export async function isMember(organizationId: string, userId: string) {
  const [row] = await db
    .select({ id: members.id })
    .from(members)
    .where(and(eq(members.organizationId, organizationId), eq(members.userId, userId)));
  return Boolean(row);
}
