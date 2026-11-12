import type { SessionRequest } from "@/lib/agent-api";
import { linkSession } from "@/lib/agent-auth";
import { readJson } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";
import { RUNTIME_VALUES, oneOf, text } from "@/lib/validate";

// `crewmark link-session`: records which agent conversation is the employee, so it can be resumed later.
export const POST = agentRoute(async ({ agent, request }) => {
  const body = await readJson<SessionRequest>(request);
  await linkSession(agent, {
    runtime: oneOf(body.runtime, RUNTIME_VALUES, "runtime"),
    sessionId: text(body.sessionId, "sessionId", { required: true }).trim().slice(0, 500),
    ...(body.workdir == null ? {} : { workdir: text(body.workdir, "workdir").trim().slice(0, 500) }),
  });
  return { ok: true };
});
