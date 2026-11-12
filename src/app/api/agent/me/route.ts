import { getOrganizationData } from "@/db/queries";
import type { MeResponse } from "@/lib/agent-api";
import { agentLinks, toAgentEmployee, toAgentIssue } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark me`: the employee's role, KPIs and projects as edited in the dashboard, and its open issues.
export const GET = agentRoute(async ({ agent, request }): Promise<MeResponse> => {
  const data = await getOrganizationData(agent.organization.id);
  const employee = data.employees.find((e) => e.id === agent.employeeId)!;
  const links = agentLinks(request, agent);
  return {
    employee: toAgentEmployee(employee, data),
    organization: agent.organization,
    session: agent.session,
    issues: data.issues
      .filter((i) => i.assigneeId === employee.id && i.status !== "done")
      .map((i) => toAgentIssue(i, data, links)),
    people: data.users
      .filter((u) => data.memberIds.includes(u.id))
      .map((u) => ({ id: u.id, name: u.name || u.username, email: u.email })),
    url: `${links.dashboard}/employees/${employee.id}`,
  };
});
