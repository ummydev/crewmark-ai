import { directThreadsOfEmployee, sendDirectMessage } from "@/db/direct-messages";
import { getOrganizationData } from "@/db/queries";
import type { AgentDirectMessage, AgentDirectThread, DirectMessageInput } from "@/lib/agent-api";
import { agentLinks, findPerson, personSide, readJson, toAgentDirectMessage } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark dm`: the employee's direct conversations with people, newest first.
export const GET = agentRoute(async ({ agent, request }): Promise<{ threads: AgentDirectThread[] }> => {
  const data = await getOrganizationData(agent.organization.id);
  const employee = data.employees.find((e) => e.id === agent.employeeId)!;
  const links = agentLinks(request, agent);
  const threads = await directThreadsOfEmployee(agent.organization.id, agent.employeeId);
  return {
    threads: threads.flatMap((thread) => {
      const person = data.users.find((u) => u.id === thread.userId);
      if (!person) return [];
      return [
        {
          with: personSide(person),
          unread: thread.unread,
          last: thread.last && toAgentDirectMessage(thread.last, person, employee, links),
          lastMessageAt: thread.lastMessageAt,
        },
      ];
    }),
  };
});

// `crewmark dm send`: the employee messages a person, for what they need to see.
export const POST = agentRoute(async ({ agent, request }): Promise<{ message: AgentDirectMessage; to: AgentDirectThread["with"] }> => {
  const body = await readJson<DirectMessageInput>(request);
  const data = await getOrganizationData(agent.organization.id);
  const person = findPerson(data, body.to);
  const employee = data.employees.find((e) => e.id === agent.employeeId)!;
  const message = await sendDirectMessage(
    agent.organization.id,
    { userId: person.id, employeeId: agent.employeeId },
    "employee",
    body.body,
  );
  return { message: toAgentDirectMessage(message, person, employee, agentLinks(request, agent)), to: personSide(person) };
});
