import { ISSUE_STATUSES, type IssueStatus } from "@/lib/types";

/**
 * What every heartbeat tells the employee about the issues assigned to it that aren't done (MC-263): how many, in which
 * statuses, and to close what's finished and unblock the rest, so issues don't sit open on the board. `counts` has
 * the issues per status; done ones aren't counted.
 */
export function openIssuesReminder(counts: Partial<Record<IssueStatus, number>>) {
  const open = ISSUE_STATUSES.filter((s) => s.value !== "done" && (counts[s.value] ?? 0) > 0);
  const total = open.reduce((sum, s) => sum + (counts[s.value] ?? 0), 0);
  if (total === 0) return "Every issue assigned to you is done.";
  const byStatus = open.map((s) => `${counts[s.value]} ${s.label.toLowerCase()}`).join(", ");
  return (
    `You have ${total} ${total === 1 ? "issue" : "issues"} not done: ${byStatus}. ` +
    `${total === 1 ? "Check it now" : "Check them one by one now"}: set finished ones to done; follow up on unfinished ` +
    "ones; if one needs information from the user, set it to needs_action and ask the user for it to unblock you."
  );
}
