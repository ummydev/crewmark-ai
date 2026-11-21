import "server-only";

import { and, eq, gte, inArray, sql } from "drizzle-orm";

import { db } from "@/db";
import { attachments, members, organizations, users } from "@/db/schema";
import { storage, uploadTarget } from "@/lib/attachments";
import {
  MAX_WORK_FILE_BYTES,
  monthStart,
  nextMonthStart,
  PLANS,
  planOf,
  WORK_FILE_TYPES,
  type WorkFileStorage,
} from "@/lib/plans";
import { IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/types";
import { InputError, text } from "@/lib/validate";

// Images' records, pasted in the dashboard or uploaded with the CLI (MC-267); the files themselves are in object
// storage (src/lib/attachments.ts).

/**
 * Records an image someone is about to upload, after checking it's one that can be pasted, and says where to send the
 * file. `userId` is the member, or null for an employee.
 */
export async function startUpload(
  organizationId: string,
  input: { name?: unknown; type?: unknown; size?: unknown },
  userId: string | null,
) {
  storage(); // Throws before recording anything when uploads aren't set up here.
  const attachment = await insertAttachment(organizationId, input, userId);
  return { attachment, upload: await uploadTarget(attachment) };
}

async function insertAttachment(
  organizationId: string,
  input: { name?: unknown; type?: unknown; size?: unknown },
  userId: string | null,
) {
  const contentType = text(input.type, "type", { required: true });
  if (!IMAGE_TYPES.includes(contentType)) throw new InputError("Only PNG, JPEG, GIF and WebP images can be pasted");
  const size = input.size;
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) throw new InputError("Invalid size");
  if (size > MAX_IMAGE_BYTES) throw new InputError("Images can be up to 10 MB");
  const [row] = await db
    .insert(attachments)
    .values({
      organizationId,
      // Keep the name as the uploader saw it; it's only ever a label and the download's file name.
      name: (text(input.name, "name").trim() || "image").slice(0, 200),
      contentType,
      size,
      uploadedByUserId: userId,
    })
    .returning();
  return row;
}

export async function getAttachment(id: string) {
  const [row] = await db.select().from(attachments).where(eq(attachments.id, id));
  return row ?? null;
}

// The files an agent sends, kept on Pro (MC-359, src/lib/plans.ts): the employee's computer asks here before it
// uploads one, and the record counts against the organization's allowance for the month from then on.

/** Why a file the agent sent isn't kept: the plan has no room for it, or it's not a kind that's kept. */
export type NotKept = "free" | "quota" | "unsupported" | "too-big";

/** How much of this month's allowance the organization used: the work files recorded since the month began. */
async function usedThisMonth(organizationId: string, executor: Pick<typeof db, "select"> = db) {
  const [row] = await executor
    .select({ used: sql<string>`coalesce(sum(${attachments.size}), 0)` })
    .from(attachments)
    .where(
      and(
        eq(attachments.organizationId, organizationId),
        eq(attachments.source, "work"),
        gte(attachments.createdAt, monthStart()),
      ),
    );
  return Number(row?.used ?? 0);
}

/** The emails whose organizations are on Pro without paying (MC-369): PRO_EMAILS, comma-separated. */
function proEmails() {
  return (process.env.PRO_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

/** The organization's plan: what organizations.plan says, or Pro when one of its owners is in PRO_EMAILS. */
async function organizationPlan(organizationId: string, executor: Pick<typeof db, "select"> = db) {
  const [org] = await executor
    .select({ plan: organizations.plan })
    .from(organizations)
    .where(eq(organizations.id, organizationId));
  const plan = planOf(org?.plan);
  const emails = proEmails();
  if (plan === "pro" || emails.length === 0) return plan;
  const [owner] = await executor
    .select({ id: members.id })
    .from(members)
    .innerJoin(users, eq(users.id, members.userId))
    .where(
      and(
        eq(members.organizationId, organizationId),
        eq(members.role, "owner"),
        inArray(sql`lower(${users.email})`, emails),
      ),
    );
  return owner ? "pro" : plan;
}

export async function getWorkFileStorage(organizationId: string): Promise<WorkFileStorage> {
  const plan = await organizationPlan(organizationId);
  return {
    plan,
    limit: PLANS[plan].workFileBytes,
    used: plan === "free" ? 0 : await usedThisMonth(organizationId),
    resetsAt: nextMonthStart().toISOString(),
  };
}

/**
 * Records a file an employee's agent sent, when the organization keeps it, and says where to upload it; else why
 * not. `id` is a record made for the same file before, whose upload didn't finish: it's sent again, not counted again.
 */
export async function startWorkUpload(
  organizationId: string,
  input: { id?: unknown; name?: unknown; type?: unknown; size?: unknown },
): Promise<
  | { kept: true; attachment: typeof attachments.$inferSelect; upload: { url: string; headers: Record<string, string> } }
  | { kept: false; reason: NotKept; resetsAt?: string }
> {
  const contentType = text(input.type, "type", { required: true });
  if (!WORK_FILE_TYPES.includes(contentType)) return { kept: false, reason: "unsupported" };
  const size = input.size;
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) throw new InputError("Invalid size");
  if (size > MAX_WORK_FILE_BYTES) return { kept: false, reason: "too-big" };
  storage(); // Throws before recording anything when uploads aren't set up here.

  if (typeof input.id === "string") {
    const known = await getAttachment(input.id).catch(() => null);
    if (known && known.organizationId === organizationId && known.source === "work" && known.size === size) {
      return { kept: true, attachment: known, upload: await uploadTarget(known) };
    }
  }

  const name = (text(input.name, "name").trim() || "file").slice(0, 200);
  const outcome = await db.transaction(async (tx) => {
    // The organization's row is locked first, so two files sent at once can't both take the last room.
    await tx.select({ id: organizations.id }).from(organizations).where(eq(organizations.id, organizationId)).for("update");
    const plan = await organizationPlan(organizationId, tx);
    const limit = PLANS[plan].workFileBytes;
    if (limit === 0) return { kept: false as const, reason: "free" as const };
    if ((await usedThisMonth(organizationId, tx)) + size > limit) {
      return { kept: false as const, reason: "quota" as const, resetsAt: nextMonthStart().toISOString() };
    }
    const [row] = await tx
      .insert(attachments)
      .values({ organizationId, name, contentType, size, uploadedByUserId: null, source: "work" })
      .returning();
    return { kept: true as const, attachment: row };
  });
  if (!outcome.kept) return outcome;
  return { ...outcome, upload: await uploadTarget(outcome.attachment) };
}
