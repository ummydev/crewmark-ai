import { eventsAfter } from "@/db/agent-events";
import type { EventsResponse } from "@/lib/agent-api";
import { agentRoute } from "@/lib/agent-route";
import { InputError } from "@/lib/validate";

// The crewmark CLI polls this for what happened since it last asked (see db/agent-events), with the id it got last
// time. Without one it gets just the latest id, to start from.
export const GET = agentRoute(async ({ agent, request }): Promise<EventsResponse> => {
  const after = new URL(request.url).searchParams.get("after");
  if (after !== null && !/^\d+$/.test(after)) throw new InputError("after must be an event id");
  return eventsAfter(agent.employeeId, after === null ? null : Number(after));
});
