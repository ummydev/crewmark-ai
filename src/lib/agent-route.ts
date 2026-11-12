import "server-only";

import { authenticateAgent, type Agent } from "@/lib/agent-auth";
import { errorResponse } from "@/lib/agent-data";

/**
 * Wraps an agent API handler: answers 401 unless the request carries a live API key, and turns thrown errors into
 * JSON. The handler only ever sees its own organization through `agent`.
 */
export function agentRoute<Params>(
  handler: (args: { agent: Agent; request: Request; params: Params }) => Promise<unknown>,
) {
  return async (request: Request, context: { params: Promise<Params> }) => {
    const agent = await authenticateAgent(request);
    if (!agent) {
      return Response.json(
        { error: "This API key is invalid or was revoked. Connect again with a new setup link from Crewmark." },
        { status: 401 },
      );
    }
    try {
      return Response.json(await handler({ agent, request, params: await context.params }));
    } catch (error) {
      return errorResponse(error);
    }
  };
}
