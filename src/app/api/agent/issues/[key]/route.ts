import { listActivity } from "@/db/issue-activity";
import { updateIssue, type IssuePatch } from "@/db/issues";
import { getOrganizationData } from "@/db/queries";
import type { AgentIssue, IssueInput, IssueResponse } from "@/lib/agent-api";
import {
  agentLinks,
  findAssignee,
  issueByKey,
  readJson,
  recurrenceInput,
  recurrenceZone,
  toAgentActivity,
  toAgentIssue,
} from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark issues show <key>`: the issue and its Activity.
export const GET = agentRoute<{ key: string }>(async ({ agent, request, params }): Promise<IssueResponse> => {
  const data = await getOrganizationData(agent.organization.id);
  const issue = issueByKey(data, params.key);
  const activity = await listActivity(agent.organization.id, issue.id);
  const links = agentLinks(request, agent);
  return {
    issue: toAgentIssue(issue, data, links),
    activity: activity.map((entry) => toAgentActivity(entry, data, links)),
  };
});

const FIELDS = ["title", "description", "status", "priority", "assigneeId", "projectId"] as const;

// `crewmark issues update <key>`: changes only the fields sent; repeat (with timeZone) sets or stops its schedule.
export const PATCH = agentRoute<{ key: string }>(async ({ agent, request, params }): Promise<{ issue: AgentIssue }> => {
  const body = await readJson<IssueInput>(request);
  const before = await getOrganizationData(agent.organization.id);
  const issue = issueByKey(before, params.key);
  const patch: IssuePatch = {};
  for (const field of FIELDS) {
    if (field in body) Object.assign(patch, { [field]: body[field] });
  }
  if ("assigneeId" in patch) patch.assigneeId = findAssignee(before, patch.assigneeId, agent.employeeId);
  if ("repeat" in body) {
    const heartbeatZone = before.employees.find((e) => e.id === agent.employeeId)?.heartbeat?.timeZone;
    patch.recurrence = recurrenceInput(body.repeat, body.timeZone, [recurrenceZone(issue.recurrence), heartbeatZone]);
  }
  await updateIssue(agent.organization.id, issue.id, patch, { employeeId: agent.employeeId });

  const data = await getOrganizationData(agent.organization.id);
  return { issue: toAgentIssue(issueByKey(data, params.key), data, agentLinks(request, agent)) };
});
