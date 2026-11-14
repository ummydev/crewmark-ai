import { readDirectMessages } from "@/db/direct-messages";
import { getOrganizationData } from "@/db/queries";
import type { DirectThreadResponse } from "@/lib/agent-api";
import { agentLinks, findPerson, personSide, toAgentDirectMessage } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark dm show <who>`: the employee's conversation with that person, oldest first; reading it marks it read.
export const GET = agentRoute<{ who: string }>(async ({ agent, request, params }): Promise<DirectThreadResponse> => {
  const data = await getOrganizationData(agent.organization.id);
  const person = findPerson(data, params.who === "-" ? undefined : decodeURIComponent(params.who));
  const employee = data.employees.find((e) => e.id === agent.employeeId)!;
  const links = agentLinks(request, agent);
  const { messages, hasMore } = await readDirectMessages(
    agent.organization.id,
    { userId: person.id, employeeId: agent.employeeId },
    "employee",
  );
  return {
    with: personSide(person),
    messages: messages.map((m) => toAgentDirectMessage(m, person, employee, links)),
    hasMore,
  };
});
