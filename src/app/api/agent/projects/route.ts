import { getOrganizationData } from "@/db/queries";
import type { Named } from "@/lib/agent-api";
import { agentRoute } from "@/lib/agent-route";

// `crewmark projects`.
export const GET = agentRoute(async ({ agent }): Promise<{ projects: Named[] }> => {
  const data = await getOrganizationData(agent.organization.id);
  return { projects: data.projects.map((p) => ({ id: p.id, name: p.name })) };
});
