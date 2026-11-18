import { getHeartbeat } from "@/db/employees";
import { openIssueCounts } from "@/db/issues";
import type { HeartbeatResponse } from "@/lib/agent-api";
import { toAgentHeartbeat } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";
import { HEARTBEAT_NO_REPLY } from "@/lib/no-reply";
import { openIssuesReminder } from "@/lib/open-issues";

// The daemon reads the employee's heartbeat settings here, when it's told they changed and once an hour: just them,
// where /api/agent/me would read the whole organization. The prompt it sends ends with how to say a heartbeat found
// nothing new (MC-237), so a quiet heartbeat doesn't show in the employee's work. Before that, it says how many of the
// employee's issues are still open, and to close or unblock them (MC-263); Crewmark tells the daemon to read it again
// whenever that count changes (db/issues.ts).
export const GET = agentRoute(async ({ agent }): Promise<HeartbeatResponse> => {
  const [settings, counts] = await Promise.all([
    getHeartbeat(agent.employeeId),
    openIssueCounts(agent.organization.id, agent.employeeId),
  ]);
  const heartbeat = toAgentHeartbeat(settings);
  if (!heartbeat) return { heartbeat };
  return { heartbeat: { ...heartbeat, prompt: [heartbeat.prompt, openIssuesReminder(counts), HEARTBEAT_NO_REPLY].join("\n\n") } };
});
