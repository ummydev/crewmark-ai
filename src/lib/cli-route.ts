import "server-only";

import { errorResponse } from "@/lib/agent-data";
import { authenticateCliUser, type CliUser } from "@/lib/cli-auth";

/**
 * Wraps a CLI API handler: answers 401 unless the request carries a live CLI key, and turns thrown errors into JSON.
 * The handler only ever sees the key's organization, through `user`.
 */
export function cliRoute<Params>(
  handler: (args: { user: CliUser; request: Request; params: Params }) => Promise<unknown>,
) {
  return async (request: Request, context: { params: Promise<Params> }) => {
    const user = await authenticateCliUser(request);
    if (!user) {
      return Response.json(
        { error: "You're not logged in to Crewmark here, or the login was revoked. Run `crewmark login`." },
        { status: 401 },
      );
    }
    try {
      return Response.json(await handler({ user, request, params: await context.params }));
    } catch (error) {
      return errorResponse(error);
    }
  };
}
