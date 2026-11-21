import "server-only";

import { and, eq, isNull, ne, sql } from "drizzle-orm";

import { db } from "@/db";
import { cliKeys, devices } from "@/db/schema";

// Which computer a request comes from (MC-292), for lib/devices.ts and the setup and login exchanges.

export type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

/** The CLI's id for its computer, from the request, or null from CLIs older than MC-292. */
export function machineIdOf(request: Request) {
  const id = request.headers.get("x-crewmark-device")?.trim();
  return id && /^[\w-]{8,64}$/.test(id) ? id : null;
}

/**
 * The computer's row in the organization, made the first time it's seen. Its owner is the first person Crewmark knows
 * connected or logged in there; hostname, platform and agents follow what the CLI says now.
 */
export async function recordDevice(
  tx: Tx | typeof db,
  device: {
    organizationId: string;
    machineId: string;
    userId: string | null;
    hostname: string;
    platform: string;
    agents?: string[];
    folders?: string[];
  },
) {
  const now = new Date();
  const [row] = await tx
    .insert(devices)
    .values({ ...device, agents: device.agents ?? [], folders: device.folders ?? [], lastSeenAt: now })
    .onConflictDoUpdate({
      target: [devices.organizationId, devices.machineId],
      set: {
        userId: sql`coalesce(${devices.userId}, excluded.user_id)`,
        ...(device.hostname ? { hostname: device.hostname } : {}),
        ...(device.platform ? { platform: device.platform } : {}),
        ...(device.agents ? { agents: device.agents } : {}),
        ...(device.folders ? { folders: device.folders } : {}),
        lastSeenAt: now,
      },
    })
    .returning({ id: devices.id });
  return row.id;
}

/**
 * The key a `crewmark login` was just collected with goes on its computer, and replaces the person's earlier logins
 * there: the CLI only keeps the latest, so the others would stay valid with nobody using them.
 */
export async function loginOnDevice(
  tx: Tx,
  key: { id: string; organizationId: string; userId: string; hostname: string; platform: string },
  machineId: string,
) {
  const deviceId = await recordDevice(tx, { ...key, machineId });
  await tx.update(cliKeys).set({ deviceId }).where(eq(cliKeys.id, key.id));
  await tx
    .update(cliKeys)
    .set({ revokedAt: new Date() })
    .where(
      and(
        eq(cliKeys.userId, key.userId),
        eq(cliKeys.organizationId, key.organizationId),
        eq(cliKeys.deviceId, deviceId),
        ne(cliKeys.id, key.id),
        isNull(cliKeys.revokedAt),
      ),
    );
}
