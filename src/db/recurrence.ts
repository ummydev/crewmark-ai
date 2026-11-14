import "server-only";

import { and, eq, isNotNull, lte, min } from "drizzle-orm";

import { db } from "@/db";
import { notifyRecurred } from "@/db/agent-events";
import { issueKey } from "@/db/queries";
import { issueActivity, issues } from "@/db/schema";
import { pushActivity, scheduleRecurrences } from "@/lib/realtime";
import { RecurrenceError, describeRecurrence, nextOccurrence, parseRecurrence } from "@/lib/recurrence";

// Repeating issues (MC-83): when an issue's schedule comes round, a done issue goes back to Todo and its employee is
// told to do it again; an issue that's still open stays as it is and its employee is reminded. Either way the
// Activity says so. The organization's object in the realtime Worker keeps a timer for the earliest next time and
// calls /api/realtime/recur then (src/lib/realtime.ts); daemons checking in run it too, in case the timer is late.

/** When the organization's next schedule comes round; null when none of its issues repeat. */
export async function nextRecurrenceAt(organizationId: string): Promise<Date | null> {
  const [row] = await db
    .select({ at: min(issues.nextRecurAt) })
    .from(issues)
    .where(eq(issues.organizationId, organizationId));
  return row?.at ? new Date(row.at) : null;
}

/** Sets the organization's timer to its next schedule, after an issue's schedule changed. */
export async function reschedule(organizationId: string) {
  scheduleRecurrences(organizationId, await nextRecurrenceAt(organizationId));
}

/** Handles every issue of the organization whose schedule has come round; returns when the next one does. */
export async function runDueRecurrences(organizationId: string, now = new Date()): Promise<Date | null> {
  const due = await db
    .select({ id: issues.id })
    .from(issues)
    .where(and(eq(issues.organizationId, organizationId), isNotNull(issues.recurrence), lte(issues.nextRecurAt, now)));
  for (const { id } of due) await recur(organizationId, id, now);
  return nextRecurrenceAt(organizationId);
}

async function recur(organizationId: string, issueId: string, now: Date) {
  const done = await db.transaction(async (tx) => {
    // Locked and checked again, so a timer and a daemon arriving together handle it once.
    const where = and(eq(issues.id, issueId), eq(issues.organizationId, organizationId), lte(issues.nextRecurAt, now));
    const [issue] = await tx
      .select({
        number: issues.number,
        title: issues.title,
        status: issues.status,
        recurrence: issues.recurrence,
        assigneeEmployeeId: issues.assigneeEmployeeId,
      })
      .from(issues)
      .where(where)
      .for("update");
    if (!issue?.recurrence) return null;
    let schedule;
    try {
      schedule = parseRecurrence(issue.recurrence);
    } catch (error) {
      if (!(error instanceof RecurrenceError)) throw error;
      // Not one Crewmark writes, so nothing to come round: stop rather than try again every time.
      await tx.update(issues).set({ nextRecurAt: null }).where(where);
      return null;
    }
    // Times missed while nothing ran count once: the next time is the first one still ahead.
    const reopen = issue.status === "done";
    await tx
      .update(issues)
      .set({ nextRecurAt: nextOccurrence(schedule, now), ...(reopen ? { status: "todo" as const } : {}) })
      .where(where);
    await tx.insert(issueActivity).values({
      organizationId,
      issueId,
      kind: "recurred",
      fromValue: issue.status,
      toValue: reopen ? "todo" : issue.status,
    });
    return { ...issue, reopened: reopen, schedule: describeRecurrence(schedule) };
  });
  if (!done) return;
  pushActivity(organizationId, issueId);
  // A person assigned to it has no agent to tell.
  if (done.assigneeEmployeeId) {
    await notifyRecurred(organizationId, {
      key: issueKey(done.number),
      title: done.title,
      employeeId: done.assigneeEmployeeId,
      status: done.status,
      reopened: done.reopened,
      schedule: done.schedule,
    });
  }
}
