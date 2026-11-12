import { getOrganizationData } from "@/db/queries";
import type { AgentEmployee } from "@/lib/agent-api";
import { toAgentEmployee } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark employees`: the employee's colleagues, e.g. to assign them an issue.
export const GET = agentRoute(async ({ agent }): Promise<{ employees: AgentEmployee[] }> => {
  const data = await getOrganizationData(agent.organization.id);
  return { employees: data.employees.map((e) => toAgentEmployee(e, data)) };
});
