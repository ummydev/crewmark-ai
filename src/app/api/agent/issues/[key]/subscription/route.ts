import { getOrganizationData } from "@/db/queries";
import { listSubscribers, setSubscribed } from "@/db/subscriptions";
import type { SubscriptionResponse } from "@/lib/agent-api";
import { agentLinks, issueByKey, toAgentIssue } from "@/lib/agent-data";
import type { Agent } from "@/lib/agent-auth";
import { agentRoute } from "@/lib/agent-route";

// `crewmark issues subscribe <key>` and `unsubscribe <key>` (MC-200): the employee follows the issue, and hears about
// its new comments and changes, or stops. Its assignee can't stop.

async function subscription(agent: Agent, request: Request, key: string, subscribed: boolean): Promise<SubscriptionResponse> {
  const data = await getOrganizationData(agent.organization.id);
  const issue = issueByKey(data, key);
  await setSubscribed(agent.organization.id, issue.id, agent.employeeId, subscribed);
  const subscribers = await listSubscribers(agent.organization.id, issue.id);
  return { issue: toAgentIssue(issue, data, agentLinks(request, agent), subscribers) };
}

export const POST = agentRoute<{ key: string }>(({ agent, request, params }) => subscription(agent, request, params.key, true));

export const DELETE = agentRoute<{ key: string }>(({ agent, request, params }) =>
  subscription(agent, request, params.key, false),
);
