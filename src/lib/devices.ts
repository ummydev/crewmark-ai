import "server-only";

import { and, desc, eq, isNotNull, isNull, ne, sql } from "drizzle-orm";

import { db } from "@/db";
import { agentConnections, agentSetupTokens, devices, members, users } from "@/db/schema";
import { createSetupToken, getSetupTarget } from "@/lib/agent-auth";
import { startedPrompt } from "@/lib/agent-setup";
import { recordDevice } from "@/lib/device-records";
import { onlineDevices, startOnWorker } from "@/lib/realtime";
import { hashSecret } from "@/lib/secrets";
import { ACP_AGENTS, runtimeLabel, type AgentRuntime, type Device } from "@/lib/types";

// The computers the crewmark CLI runs on (MC-292). The CLI sends the random id it keeps for its computer with every
// request (X-Crewmark-Device), so a setup, a login and the daemon's push channel all name the same computer. While its
// daemon is connected, its owner can start a new employee there from Crewmark: Crewmark makes a setup token, the
// Worker hands it to the daemon with the folder to work in, and the daemon connects and starts a conversation itself,
// so nobody pastes a setup prompt.

/** The agents Crewmark can start employees in: Claude Code, and those it reaches through acpx (MC-417). */
const STARTABLE: string[] = ["claude-code", ...ACP_AGENTS.map((a) => a.value)];

/**
 * Puts a connection on its computer, for the daemon's push channel, and returns the computer's id. A connection made
 * before MC-292 learns its computer here; its owner is whoever made the setup token it was connected with.
 */
export async function deviceForConnection(connectionId: string, machineId: string, agents: string[]) {
  return db.transaction(async (tx) => {
    const [connection] = await tx
      .select({
        organizationId: agentConnections.organizationId,
        employeeId: agentConnections.employeeId,
        hostname: agentConnections.hostname,
        platform: agentConnections.platform,
        createdAt: agentConnections.createdAt,
      })
      .from(agentConnections)
      .where(eq(agentConnections.id, connectionId));
    // The token that was exchanged for this connection, used within a minute of it.
    const [token] = await tx
      .select({ userId: agentSetupTokens.createdByUserId })
      .from(agentSetupTokens)
      .where(
        and(
          eq(agentSetupTokens.employeeId, connection.employeeId),
          isNotNull(agentSetupTokens.usedAt),
          sql`abs(extract(epoch from ${agentSetupTokens.usedAt} - ${connection.createdAt.toISOString()}::timestamptz)) < 60`,
        ),
      )
      .orderBy(desc(agentSetupTokens.usedAt))
      .limit(1);
    const deviceId = await recordDevice(tx, {
      organizationId: connection.organizationId,
      machineId,
      userId: token?.userId ?? null,
      hostname: connection.hostname,
      platform: connection.platform,
      agents: agents.filter((a) => /^[\w-]{1,32}$/.test(a)).slice(0, 40),
    });
    await tx.update(agentConnections).set({ deviceId }).where(eq(agentConnections.id, connectionId));
    return deviceId;
  });
}

/** Whether the person may start employees on the computer: it's theirs, or nobody's known and they own the organization. */
async function mayStart(organizationId: string, userId: string, owner: string | null) {
  if (owner) return owner === userId;
  const [member] = await db
    .select({ role: members.role })
    .from(members)
    .where(and(eq(members.organizationId, organizationId), eq(members.userId, userId)));
  return member?.role === "owner";
}

/**
 * The person's computers in the organization that can start an employee: theirs, with an agent Crewmark can start,
 * whether each is online now, and the folders employees worked in there, latest first.
 */
export async function listDevices(organizationId: string, userId: string): Promise<Device[]> {
  const rows = await db
    .select()
    .from(devices)
    .where(eq(devices.organizationId, organizationId))
    .orderBy(desc(devices.lastSeenAt));
  const mine = [];
  for (const row of rows) if (await mayStart(organizationId, userId, row.userId)) mine.push(row);
  if (mine.length === 0) return [];
  const [online, folders] = await Promise.all([
    onlineDevices(organizationId),
    db
      .select({
        deviceId: agentConnections.deviceId,
        workdir: agentConnections.workdir,
        at: sql<string>`max(${agentConnections.createdAt})`,
      })
      .from(agentConnections)
      .where(and(eq(agentConnections.organizationId, organizationId), ne(agentConnections.workdir, "")))
      .groupBy(agentConnections.deviceId, agentConnections.workdir)
      .orderBy(sql`max(${agentConnections.createdAt}) desc`),
  ]);
  return mine.map((row) => ({
    id: row.id,
    hostname: row.hostname,
    platform: row.platform,
    agents: row.agents.filter((a) => STARTABLE.includes(a)) as Device["agents"],
    online: online?.includes(row.id) ?? false,
    lastSeenAt: row.lastSeenAt?.toISOString() ?? null,
    folders: [
      ...new Set([...folders.filter((f) => f.deviceId === row.id).map((f) => f.workdir), ...row.folders]),
    ],
  }));
}

/**
 * Starts the employee on the person's computer: the daemon there connects it with a new setup token and starts a
 * conversation in the folder, which is the employee from then on. Says why when it can't.
 */
export async function startOnDevice(
  organizationId: string,
  userId: string,
  start: { employeeId: string; deviceId: string; workdir: string; agent: string },
): Promise<{ ok: true } | { ok: false; error: string }> {
  const device = (await listDevices(organizationId, userId)).find((d) => d.id === start.deviceId);
  if (!device) return { ok: false, error: "That computer isn't one you can start employees on." };
  if (!device.online) return { ok: false, error: `${device.hostname || "That computer"} is offline: its crewmark daemon isn't connected.` };
  if (!(device.agents as string[]).includes(start.agent)) {
    return { ok: false, error: `${runtimeLabel(start.agent as AgentRuntime)} isn't on ${device.hostname || "that computer"}.` };
  }
  // The daemon checks this too: it only works in the folders it offers.
  if (!device.folders.includes(start.workdir)) {
    return { ok: false, error: "Pick one of the folders that computer offers." };
  }
  const { token } = await createSetupToken(organizationId, start.employeeId, userId);
  const target = await getSetupTarget(token);
  if (!target) return { ok: false, error: "That employee is gone." };
  const [person] = await db.select({ name: users.name }).from(users).where(eq(users.id, userId));
  const answer = await startOnWorker(organizationId, device.id, {
    token,
    workdir: start.workdir,
    agent: start.agent,
    prompt: startedPrompt(target, person?.name || null),
  });
  if (!answer) return { ok: false, error: "Crewmark couldn't reach the computer. Try again in a moment." };
  if (!answer.ok) {
    // The token goes unused: it shouldn't be left working.
    await db
      .update(agentSetupTokens)
      .set({ usedAt: new Date() })
      .where(and(eq(agentSetupTokens.tokenHash, hashSecret(token)), isNull(agentSetupTokens.usedAt)));
    return { ok: false, error: answer.error || "The computer couldn't start the employee." };
  }
  return { ok: true };
}

/**
 * Whether the person may open files from the employee's computer (MC-315): it's theirs, the computer its connection
 * is on (MC-292); a computer nobody owns yet, or a connection from a CLI that doesn't say which computer, only the
 * organization's owner.
 */
export async function ownsEmployeeComputer(organizationId: string, employeeId: string, userId: string) {
  const [connection] = await db
    .select({ deviceId: agentConnections.deviceId })
    .from(agentConnections)
    .where(
      and(
        eq(agentConnections.organizationId, organizationId),
        eq(agentConnections.employeeId, employeeId),
        isNull(agentConnections.revokedAt),
      ),
    )
    .orderBy(desc(agentConnections.createdAt))
    .limit(1);
  if (!connection) return false;
  let owner: string | null = null;
  if (connection.deviceId) {
    const [device] = await db.select({ userId: devices.userId }).from(devices).where(eq(devices.id, connection.deviceId));
    owner = device?.userId ?? null;
  }
  return mayStart(organizationId, userId, owner);
}
