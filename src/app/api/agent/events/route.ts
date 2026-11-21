import { eventsAfter } from "@/db/agent-events";
import { isArchived } from "@/db/employees";
import { runDueRecurrences } from "@/db/recurrence";
import type { EventsResponse } from "@/lib/agent-api";
import { agentLinks } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";
import { InputError } from "@/lib/validate";

// The crewmark CLI polls this for what happened since it last asked (see db/agent-events), with the id it got last
// time. Without one it gets just the latest id, to start from.
export const GET = agentRoute(async ({ agent, request }): Promise<EventsResponse> => {
  const after = new URL(request.url).searchParams.get("after");
  if (after !== null && !/^\d+$/.test(after)) throw new InputError("after must be an event id");
  // Repeating issues that came round while the Worker's timer didn't fire (or there's no Worker) are handled now.
  await runDueRecurrences(agent.organization.id);
  // An archived employee (MC-305) reads nothing: the cursor moves past what came for it, so it isn't all passed on
  // when it comes back.
  const archived = await isArchived(agent.employeeId);
  const result = await eventsAfter(agent.employeeId, after === null || archived ? null : Number(after));
  // Images in what's passed on, e.g. a screenshot the person pasted in the work log, as links the agent can open
  // (MC-271): Crewmark keeps them as /api/attachments/<id>, which only a signed-in member can.
  const { markdown } = agentLinks(request, agent);
  return { ...result, events: result.events.map((event) => ({ ...event, message: markdown(event.message) })) };
});
