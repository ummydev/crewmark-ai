import { getHeartbeat } from "@/db/employees";
import type { HeartbeatResponse } from "@/lib/agent-api";
import { toAgentHeartbeat } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// The daemon reads the employee's heartbeat settings here, when it's told they changed and once an hour: just them,
// where /api/agent/me would read the whole organization.
export const GET = agentRoute(
  async ({ agent }): Promise<HeartbeatResponse> => ({ heartbeat: toAgentHeartbeat(await getHeartbeat(agent.employeeId)) }),
);
