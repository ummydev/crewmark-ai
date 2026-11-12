import type { RealtimeResponse } from "@/lib/agent-api";
import { agentRoute } from "@/lib/agent-route";
import { realtimeConnection } from "@/lib/realtime";

// The daemon asks here each time it opens its socket for pushes (src/lib/realtime.ts).
export const GET = agentRoute(
  async ({ agent }): Promise<RealtimeResponse> => ({
    realtime: realtimeConnection(agent.organization.id, agent.employeeId),
  }),
);
