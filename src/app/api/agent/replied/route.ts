import { recordReply } from "@/db/work-unread";
import { readJson } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// The daemon says its agent ended a turn with a reply the Work tab shows (MC-280): when, never what. It counts as
// unread in Messages for every member until they open the employee's work.
export const POST = agentRoute(async ({ agent, request }): Promise<{ counted: boolean }> => {
  const body = await readJson<{ at: string }>(request);
  return { counted: await recordReply(agent.organization.id, agent.employeeId, body.at) };
});
