import type { SetupRequest } from "@/lib/agent-api";
import { connectAgent, connectionInfo } from "@/lib/agent-connect";
import { errorResponse, readJson } from "@/lib/agent-data";
import { text } from "@/lib/validate";

// `crewmark setup <token>` exchanges a setup token for the employee's API key. The token is the only credential here,
// so it works once, within an hour of being made (see lib/agent-auth).
export async function POST(request: Request) {
  try {
    const body = await readJson<SetupRequest>(request);
    const connected = await connectAgent(request, text(body.token, "token", { required: true }).trim(), connectionInfo(body));
    if (!connected) {
      return Response.json(
        {
          error:
            "This setup link is invalid, already used or expired. Make a new one from the employee's page in Crewmark.",
        },
        { status: 400 },
      );
    }
    return Response.json(connected);
  } catch (error) {
    return errorResponse(error);
  }
}
