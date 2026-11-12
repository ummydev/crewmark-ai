import "server-only";

import { and, eq, gt, isNull, ne } from "drizzle-orm";

import { db } from "@/db";
import { agentConnections, agentSetupTokens, employeeProjects, employees, organizations, projects } from "@/db/schema";
import { hashSecret as hash, newSecret } from "@/lib/secrets";
import type { AgentRuntime, Organization } from "@/lib/types";

// How an AI agent on someone's computer signs in as an employee. The dashboard makes a one-time setup token; the
// crewmark CLI exchanges it for an API key and sends that key with every request. Only SHA-256 hashes of both are
// stored, so a database leak doesn't hand them out.

/** How long a setup link works. It's meant to be pasted into an agent right away. */
export const SETUP_TOKEN_TTL_MS = 60 * 60 * 1000;

/** A setup token for the employee; the caller has checked that the user may manage it. */
export async function createSetupToken(organizationId: string, employeeId: string, userId: string) {
  const token = newSecret("cms");
  const expiresAt = new Date(Date.now() + SETUP_TOKEN_TTL_MS);
  await db.insert(agentSetupTokens).values({
    organizationId,
    employeeId,
    tokenHash: hash(token),
    createdByUserId: userId,
    expiresAt,
  });
  return { token, expiresAt };
}

export interface SetupTarget {
  employee: { id: string; name: string; role: string };
  organization: Organization;
  /** The projects the employee works on, for naming its conversation. */
  projects: { name: string; emoji: string }[];
}

/** Who a setup token is for, while it's still unused and unexpired. Reading it doesn't use it up. */
export async function getSetupTarget(token: string): Promise<SetupTarget | null> {
  const [row] = await db
    .select({
      employee: { id: employees.id, name: employees.name, role: employees.role },
      organization: { id: organizations.id, name: organizations.name, slug: organizations.slug },
    })
    .from(agentSetupTokens)
    .innerJoin(employees, eq(employees.id, agentSetupTokens.employeeId))
    .innerJoin(organizations, eq(organizations.id, agentSetupTokens.organizationId))
    .where(
      and(
        eq(agentSetupTokens.tokenHash, hash(token)),
        isNull(agentSetupTokens.usedAt),
        gt(agentSetupTokens.expiresAt, new Date()),
      ),
    );
  if (!row) return null;
  const projectRows = await db
    .select({ name: projects.name, emoji: projects.emoji })
    .from(employeeProjects)
    .innerJoin(projects, eq(projects.id, employeeProjects.projectId))
    .where(eq(employeeProjects.employeeId, row.employee.id))
    .orderBy(projects.createdAt);
  return { ...row, projects: projectRows };
}

export interface ConnectionInfo {
  runtime: AgentRuntime | null;
  sessionId: string | null;
  hostname: string;
  platform: string;
  workdir: string;
}

/**
 * Uses up a setup token and returns a new API key for its employee, revoking the employee's earlier connections, along
 * with who made the token. Returns null when the token is unknown, used or expired.
 */
export async function exchangeSetupToken(token: string, info: ConnectionInfo) {
  return db.transaction(async (tx) => {
    const [setup] = await tx
      .update(agentSetupTokens)
      .set({ usedAt: new Date() })
      .where(
        and(
          eq(agentSetupTokens.tokenHash, hash(token)),
          isNull(agentSetupTokens.usedAt),
          gt(agentSetupTokens.expiresAt, new Date()),
        ),
      )
      .returning({
        organizationId: agentSetupTokens.organizationId,
        employeeId: agentSetupTokens.employeeId,
        createdByUserId: agentSetupTokens.createdByUserId,
      });
    if (!setup) return null;

    const apiKey = newSecret("cmk");
    const [connection] = await tx
      .insert(agentConnections)
      .values({ organizationId: setup.organizationId, employeeId: setup.employeeId, ...info, keyHash: hash(apiKey) })
      .returning({ id: agentConnections.id });
    await tx
      .update(agentConnections)
      .set({ revokedAt: new Date() })
      .where(
        and(
          eq(agentConnections.employeeId, setup.employeeId),
          ne(agentConnections.id, connection.id),
          isNull(agentConnections.revokedAt),
        ),
      );
    if (info.runtime) {
      await tx.update(employees).set({ runtime: info.runtime }).where(eq(employees.id, setup.employeeId));
    }
    const [organization] = await tx
      .select({ id: organizations.id, name: organizations.name, slug: organizations.slug })
      .from(organizations)
      .where(eq(organizations.id, setup.organizationId));
    return { apiKey, employeeId: setup.employeeId, organization, createdByUserId: setup.createdByUserId };
  });
}

export interface Agent {
  connectionId: string;
  employeeId: string;
  organization: Organization;
  /** The conversation this connection says is the employee, once linked. */
  session: { runtime: AgentRuntime; sessionId: string } | null;
}

/** The employee whose API key signed this request (Authorization: Bearer cmk_…), or null. */
export async function authenticateAgent(request: Request): Promise<Agent | null> {
  const key = request.headers.get("authorization")?.match(/^Bearer\s+(cmk_[\w-]+)$/)?.[1];
  if (!key) return null;
  const [row] = await db
    .select({
      connectionId: agentConnections.id,
      employeeId: agentConnections.employeeId,
      organization: { id: organizations.id, name: organizations.name, slug: organizations.slug },
      runtime: agentConnections.runtime,
      sessionId: agentConnections.sessionId,
    })
    .from(agentConnections)
    .innerJoin(organizations, eq(organizations.id, agentConnections.organizationId))
    .where(and(eq(agentConnections.keyHash, hash(key)), isNull(agentConnections.revokedAt)));
  if (!row) return null;
  const { runtime, sessionId, ...agent } = row;

  // Any request is the agent at work, which is what "last active" means for an employee.
  const now = new Date();
  await Promise.all([
    db.update(agentConnections).set({ lastUsedAt: now }).where(eq(agentConnections.id, row.connectionId)),
    db.update(employees).set({ lastActiveAt: now }).where(eq(employees.id, row.employeeId)),
  ]);
  return { ...agent, session: runtime && sessionId ? { runtime, sessionId } : null };
}

/** Updates which conversation is the employee, e.g. after `crewmark link-session`. */
/** Records the conversation an agent linked by hand, and saves what it runs in on its employee. */
export async function linkSession(agent: Pick<Agent, "connectionId" | "employeeId">, info: Partial<ConnectionInfo>) {
  await db.transaction(async (tx) => {
    await tx.update(agentConnections).set(info).where(eq(agentConnections.id, agent.connectionId));
    if (info.runtime) {
      await tx.update(employees).set({ runtime: info.runtime }).where(eq(employees.id, agent.employeeId));
    }
  });
}

/** The employee's live connection, for the dashboard. */
export async function getConnection(organizationId: string, employeeId: string) {
  const [row] = await db
    .select({
      runtime: agentConnections.runtime,
      sessionId: agentConnections.sessionId,
      hostname: agentConnections.hostname,
      platform: agentConnections.platform,
      workdir: agentConnections.workdir,
      connectedAt: agentConnections.createdAt,
      lastUsedAt: agentConnections.lastUsedAt,
    })
    .from(agentConnections)
    .where(
      and(
        eq(agentConnections.organizationId, organizationId),
        eq(agentConnections.employeeId, employeeId),
        isNull(agentConnections.revokedAt),
      ),
    );
  return row ?? null;
}
