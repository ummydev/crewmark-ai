import type { RealtimeResponse } from "@/lib/agent-api";
import { agentRoute } from "@/lib/agent-route";
import { machineIdOf } from "@/lib/device-records";
import { deviceForConnection } from "@/lib/devices";
import { realtimeConnection } from "@/lib/realtime";

// The daemon asks here each time it opens its socket for pushes (src/lib/realtime.ts). Since MC-292 it says which
// computer it's on (X-Crewmark-Device) and which agents it found there (?agents=claude-code,codex), so its socket is
// also its computer's: Crewmark can start employees there while it's open.
export const GET = agentRoute(async ({ agent, request }): Promise<RealtimeResponse> => {
  const machineId = machineIdOf(request);
  const agents = new URL(request.url).searchParams.get("agents")?.split(",").filter(Boolean) ?? [];
  const deviceId = machineId ? await deviceForConnection(agent.connectionId, machineId, agents) : agent.deviceId;
  return { realtime: realtimeConnection(agent.organization.id, agent.employeeId, deviceId) };
});
