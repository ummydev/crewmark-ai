import { directThreadsOfUser, sendDirectMessage } from "@/db/direct-messages";
import { getOrganizationData } from "@/db/queries";
import type { AgentDirectMessage, AgentDirectThread, DirectMessageInput } from "@/lib/agent-api";
import { agentLinks, readJson, toAgentDirectMessage } from "@/lib/agent-data";
import { findEmployee } from "@/lib/cli-data";
import { cliRoute } from "@/lib/cli-route";
import { InputError } from "@/lib/validate";

// `crewmark dm` for the person logged in with `crewmark login`: their conversations with employees, newest first.
export const GET = cliRoute(async ({ user, request }): Promise<{ threads: AgentDirectThread[] }> => {
  const data = await getOrganizationData(user.organization.id);
  const me = data.users.find((u) => u.id === user.userId)!;
  const links = agentLinks(request, user);
  const threads = await directThreadsOfUser(user.organization.id, user.userId);
  return {
    threads: threads.flatMap((thread) => {
      const employee = data.employees.find((e) => e.id === thread.employeeId);
      if (!employee) return [];
      return [
        {
          with: { kind: "employee" as const, id: employee.id, name: employee.name },
          unread: thread.unread,
          last: thread.last && toAgentDirectMessage(thread.last, me, employee, links),
          lastMessageAt: thread.lastMessageAt,
        },
      ];
    }),
  };
});

// `crewmark dm send --to <employee>` for the logged-in person.
export const POST = cliRoute(async ({ user, request }): Promise<{ message: AgentDirectMessage; to: AgentDirectThread["with"] }> => {
  const body = await readJson<DirectMessageInput>(request);
  const data = await getOrganizationData(user.organization.id);
  if (!body.to && data.employees.length !== 1) {
    throw new InputError(`Say which employee, e.g. --to "${data.employees[0]?.name ?? "Sage"}"`);
  }
  const employee = body.to ? findEmployee(data, String(body.to)) : data.employees[0];
  const me = data.users.find((u) => u.id === user.userId)!;
  const message = await sendDirectMessage(
    user.organization.id,
    { userId: user.userId, employeeId: employee.id },
    "user",
    body.body,
  );
  return {
    message: toAgentDirectMessage(message, me, employee, agentLinks(request, user)),
    to: { kind: "employee", id: employee.id, name: employee.name },
  };
});
