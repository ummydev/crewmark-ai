import "server-only";

import { and, eq, gt, isNotNull, sql } from "drizzle-orm";

import { db } from "@/db";
import { employees, members, workUnread } from "@/db/schema";
import { pushMessages } from "@/lib/realtime";
import type { WorkReplies } from "@/lib/types";
import { InputError } from "@/lib/validate";

// Messages' unread count (MC-280). An employee's conversation lives on its computer, so Crewmark can't see its replies;
// its daemon reports when the agent ends a turn with one the Work tab shows (only when, never what). Each new one adds
// one for every member of the organization; opening the employee's work clears the person's. Dashboards hear about
// either through the "messages" push, as direct messages did.

/**
 * Notes a reply the employee's agent ended a turn with, at `at` (ISO). Reports of it again, or of an older one, change
 * nothing; nor does the first report from an employee, which only says where its daemon started, so a daemon starting
 * up doesn't turn its conversation's last reply into a new one. Says whether it counted.
 */
export async function recordReply(organizationId: string, employeeId: string, at: unknown): Promise<boolean> {
  const when = typeof at === "string" ? new Date(at) : new Date(NaN);
  if (Number.isNaN(when.getTime())) throw new InputError("at must be a time, e.g. 2026-11-10T12:00:00Z");
  // A computer whose clock runs ahead can't move it past now.
  const time = new Date(Math.min(when.getTime(), Date.now()));
  const counted = await db.transaction(async (tx) => {
    const [employee] = await tx
      .select({ lastReplyAt: employees.lastReplyAt })
      .from(employees)
      .where(and(eq(employees.id, employeeId), eq(employees.organizationId, organizationId)))
      .for("update");
    if (!employee || (employee.lastReplyAt && employee.lastReplyAt >= time)) return false;
    await tx.update(employees).set({ lastReplyAt: time }).where(eq(employees.id, employeeId));
    if (!employee.lastReplyAt) return false;
    // One more for every member, a first one for members who had none.
    await tx.execute(sql`
      insert into ${workUnread} (organization_id, user_id, employee_id, count)
      select ${members.organizationId}, ${members.userId}, ${employeeId}, 1 from ${members}
      where ${members.organizationId} = ${organizationId}
      on conflict (user_id, employee_id) do update set count = ${workUnread.count} + 1, updated_at = now()
    `);
    return true;
  });
  if (counted) pushMessages(organizationId);
  return counted;
}

/** The person's unread replies in the organization and when each employee last replied, by employee id. */
export async function workRepliesOf(organizationId: string, userId: string): Promise<WorkReplies> {
  const [counts, times] = await Promise.all([
    db
      .select({ employeeId: workUnread.employeeId, count: workUnread.count })
      .from(workUnread)
      .where(and(eq(workUnread.organizationId, organizationId), eq(workUnread.userId, userId), gt(workUnread.count, 0))),
    db
      .select({ employeeId: employees.id, lastReplyAt: employees.lastReplyAt })
      .from(employees)
      .where(and(eq(employees.organizationId, organizationId), isNotNull(employees.lastReplyAt))),
  ]);
  return {
    unread: Object.fromEntries(counts.map((row) => [row.employeeId, row.count])),
    repliedAt: Object.fromEntries(times.map((row) => [row.employeeId, row.lastReplyAt!.toISOString()])),
  };
}

/** The person has seen the employee's work: its count goes back to none, and their other tabs hear so. */
export async function markWorkRead(organizationId: string, userId: string, employeeId: string) {
  const cleared = await db
    .update(workUnread)
    .set({ count: 0, updatedAt: new Date() })
    .where(
      and(
        eq(workUnread.organizationId, organizationId),
        eq(workUnread.userId, userId),
        eq(workUnread.employeeId, employeeId),
        gt(workUnread.count, 0),
      ),
    )
    .returning({ employeeId: workUnread.employeeId });
  if (cleared.length > 0) pushMessages(organizationId);
}
