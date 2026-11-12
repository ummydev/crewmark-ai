import { insertIssue } from "@/db/issues";
import { getOrganizationData } from "@/db/queries";
import type { AgentIssue, IssueInput } from "@/lib/agent-api";
import { agentLinks, findAssignee, readJson, toAgentIssue } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";
import { STATUS_VALUES, oneOf } from "@/lib/validate";

// `crewmark issues`: the organization's issues, filtered by ?assignee=me|none|<employee or person: id or name>,
// ?status=todo,in_progress (comma-separated), ?project=<id> and ?open=true (not done).
export const GET = agentRoute(async ({ agent, request }): Promise<{ issues: AgentIssue[] }> => {
  const params = new URL(request.url).searchParams;
  const assignee = params.get("assignee");
  const statuses = params.get("status")?.split(",").map((s) => oneOf(s.trim(), STATUS_VALUES, "status"));
  const project = params.get("project");

  const data = await getOrganizationData(agent.organization.id);
  const assigneeId = assignee === null || assignee === "none" ? null : findAssignee(data, assignee, agent.employeeId);
  const links = agentLinks(request, agent);
  return {
    issues: data.issues
      .filter((i) => assignee === null || i.assigneeId === assigneeId)
      .filter((i) => !statuses || statuses.includes(i.status))
      .filter((i) => !project || i.projectId === project)
      .filter((i) => params.get("open") !== "true" || i.status !== "done")
      .map((i) => toAgentIssue(i, data, links)),
  };
});

// `crewmark issues create`: files an issue as the employee.
export const POST = agentRoute(async ({ agent, request }): Promise<{ issue: AgentIssue }> => {
  const body = await readJson<IssueInput>(request);
  const before = await getOrganizationData(agent.organization.id);
  const issue = await insertIssue(
    agent.organization.id,
    {
      title: body.title as string,
      description: body.description ?? "",
      status: body.status ?? "todo",
      priority: body.priority ?? "medium",
      assigneeId: findAssignee(before, body.assigneeId ?? null, agent.employeeId),
      projectId: body.projectId ?? null,
    },
    { employeeId: agent.employeeId },
  );
  const data = await getOrganizationData(agent.organization.id);
  return { issue: toAgentIssue(issue, data, agentLinks(request, agent)) };
});
