import "server-only";

import { randomInt } from "node:crypto";
import { and, desc, eq, gt, isNull } from "drizzle-orm";

import { db } from "@/db";
import { cliKeys, cliLogins, members, organizations, users } from "@/db/schema";
import { hashSecret, newSecret } from "@/lib/secrets";
import type { Organization } from "@/lib/types";

// How the crewmark CLI acts for a person, like `gh auth login`: `crewmark login` starts a login and shows its code and
// page; the person allows it there for one organization; the CLI, polling with the login's secret, collects a CLI key
// ("cmu_…") and sends it with every request to /api/cli. Only hashes of the secret and the key are stored. A key
// stops working when it's revoked, or when its person leaves the organization.

/** How long a login waits for the person to allow it. */
export const CLI_LOGIN_TTL_MS = 10 * 60 * 1000;

// No vowels (no words), no 0/O or 1/I.
const CODE_LETTERS = "BCDFGHJKLMNPQRSTVWXZ23456789";

function newCode() {
  const letters = Array.from({ length: 8 }, () => CODE_LETTERS[randomInt(CODE_LETTERS.length)]).join("");
  return `${letters.slice(0, 4)}-${letters.slice(4)}`;
}

export interface MachineInfo {
  hostname: string;
  platform: string;
}

export async function startCliLogin(machine: MachineInfo) {
  const secret = newSecret("cml");
  const code = newCode();
  const expiresAt = new Date(Date.now() + CLI_LOGIN_TTL_MS);
  await db.insert(cliLogins).values({ code, secretHash: hashSecret(secret), ...machine, expiresAt });
  return { code, secret, expiresAt };
}

export type CliLoginState = "pending" | "approved" | "denied" | "expired";

/** A login for its page, by the code the person opened. */
export async function getCliLogin(code: string) {
  const [login] = await db
    .select({
      code: cliLogins.code,
      hostname: cliLogins.hostname,
      platform: cliLogins.platform,
      approvedAt: cliLogins.approvedAt,
      deniedAt: cliLogins.deniedAt,
      expiresAt: cliLogins.expiresAt,
    })
    .from(cliLogins)
    .where(eq(cliLogins.code, code.trim().toUpperCase()));
  if (!login) return null;
  const state: CliLoginState = login.approvedAt
    ? "approved"
    : login.deniedAt
      ? "denied"
      : login.expiresAt < new Date()
        ? "expired"
        : "pending";
  return { code: login.code, hostname: login.hostname, platform: login.platform, state };
}

/**
 * Allows a waiting login for the organization, or turns it down. The caller has checked that the user belongs to
 * the organization. Returns false when the login isn't waiting any more.
 */
export async function answerCliLogin(code: string, userId: string, answer: { organizationId: string } | "deny") {
  const now = new Date();
  const values = answer === "deny" ? { deniedAt: now, userId } : { approvedAt: now, userId, ...answer };
  const rows = await db
    .update(cliLogins)
    .set(values)
    .where(
      and(
        eq(cliLogins.code, code.trim().toUpperCase()),
        isNull(cliLogins.approvedAt),
        isNull(cliLogins.deniedAt),
        gt(cliLogins.expiresAt, now),
      ),
    )
    .returning({ id: cliLogins.id });
  return rows.length > 0;
}

export type CliLoginPoll =
  | { state: "pending" | "denied" | "expired" }
  | { state: "approved"; apiKey: string; user: { name: string; email: string }; organization: Organization };

/** What the CLI learns when it polls: still waiting, turned down, or allowed, with its key the first time. */
export async function pollCliLogin(secret: string): Promise<CliLoginPoll | null> {
  return db.transaction(async (tx) => {
    const [login] = await tx
      .select()
      .from(cliLogins)
      .where(eq(cliLogins.secretHash, hashSecret(secret)))
      .for("update");
    if (!login) return null;
    if (login.deniedAt) return { state: "denied" };
    if (!login.approvedAt || !login.userId || !login.organizationId) {
      return { state: login.expiresAt < new Date() ? "expired" : "pending" };
    }
    // The key was collected already: a second poll gets nothing new.
    if (login.usedAt) return { state: "expired" };

    const apiKey = newSecret("cmu");
    await tx.update(cliLogins).set({ usedAt: new Date() }).where(eq(cliLogins.id, login.id));
    await tx.insert(cliKeys).values({
      organizationId: login.organizationId,
      userId: login.userId,
      keyHash: hashSecret(apiKey),
      hostname: login.hostname,
      platform: login.platform,
    });
    const [user] = await tx.select({ name: users.name, email: users.email }).from(users).where(eq(users.id, login.userId));
    const [organization] = await tx
      .select({ id: organizations.id, name: organizations.name, slug: organizations.slug })
      .from(organizations)
      .where(eq(organizations.id, login.organizationId));
    return { state: "approved", apiKey, user, organization };
  });
}

/** A person, through their CLI key, in the organization the key is for. */
export interface CliUser {
  keyId: string;
  userId: string;
  organization: Organization;
}

/** The person behind a request's CLI key, while the key is live and they're still in its organization. */
export async function authenticateCliUser(request: Request): Promise<CliUser | null> {
  const key = request.headers.get("authorization")?.match(/^Bearer (cmu_\S+)$/)?.[1];
  if (!key) return null;
  const [row] = await db
    .select({
      keyId: cliKeys.id,
      userId: cliKeys.userId,
      organization: { id: organizations.id, name: organizations.name, slug: organizations.slug },
    })
    .from(cliKeys)
    .innerJoin(organizations, eq(organizations.id, cliKeys.organizationId))
    .innerJoin(members, and(eq(members.organizationId, cliKeys.organizationId), eq(members.userId, cliKeys.userId)))
    .where(and(eq(cliKeys.keyHash, hashSecret(key)), isNull(cliKeys.revokedAt)));
  if (!row) return null;
  await db.update(cliKeys).set({ lastUsedAt: new Date() }).where(eq(cliKeys.id, row.keyId));
  return row;
}

/** Revokes one of the person's CLI keys (for `crewmark logout` and the dashboard). */
export async function revokeCliKey(userId: string, keyId: string) {
  await db
    .update(cliKeys)
    .set({ revokedAt: new Date() })
    .where(and(eq(cliKeys.id, keyId), eq(cliKeys.userId, userId), isNull(cliKeys.revokedAt)));
}

/** The person's live CLI keys in the organization, newest first, for the dashboard. */
export async function listCliKeys(userId: string, organizationId: string) {
  return db
    .select({
      id: cliKeys.id,
      hostname: cliKeys.hostname,
      platform: cliKeys.platform,
      createdAt: cliKeys.createdAt,
      lastUsedAt: cliKeys.lastUsedAt,
    })
    .from(cliKeys)
    .where(and(eq(cliKeys.userId, userId), eq(cliKeys.organizationId, organizationId), isNull(cliKeys.revokedAt)))
    .orderBy(desc(cliKeys.createdAt));
}
