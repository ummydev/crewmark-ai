import { addComment } from "@/db/issue-activity";
import { getOrganizationData } from "@/db/queries";
import type { CommentRequest, CommentResponse } from "@/lib/agent-api";
import { agentLinks, issueByKey, readJson, toAgentActivity } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark issues comment <key> <text>`: comments on the issue as the employee.
export const POST = agentRoute<{ key: string }>(async ({ agent, request, params }): Promise<CommentResponse> => {
  const body = await readJson<CommentRequest>(request);
  const data = await getOrganizationData(agent.organization.id);
  const issue = issueByKey(data, params.key);
  const comment = await addComment(agent.organization.id, issue.id, body.body, { employeeId: agent.employeeId });
  return { comment: toAgentActivity(comment, data, agentLinks(request, agent)) };
});
