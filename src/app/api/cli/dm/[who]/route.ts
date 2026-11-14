import { readDirectMessages } from "@/db/direct-messages";
import { getOrganizationData } from "@/db/queries";
import type { DirectThreadResponse } from "@/lib/agent-api";
import { agentLinks, toAgentDirectMessage } from "@/lib/agent-data";
import { findEmployee } from "@/lib/cli-data";
import { cliRoute } from "@/lib/cli-route";

// `crewmark dm show <employee>` for the logged-in person: their conversation with it; reading it marks it read.
export const GET = cliRoute<{ who: string }>(async ({ user, request, params }): Promise<DirectThreadResponse> => {
  const data = await getOrganizationData(user.organization.id);
  const employee = findEmployee(data, decodeURIComponent(params.who));
  const me = data.users.find((u) => u.id === user.userId)!;
  const links = agentLinks(request, user);
  const { messages, hasMore } = await readDirectMessages(
    user.organization.id,
    { userId: user.userId, employeeId: employee.id },
    "user",
  );
  return {
    with: { kind: "employee", id: employee.id, name: employee.name },
    messages: messages.map((m) => toAgentDirectMessage(m, me, employee, links)),
    hasMore,
  };
});
