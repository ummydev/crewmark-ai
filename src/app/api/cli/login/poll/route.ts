import { errorResponse, readJson } from "@/lib/agent-data";
import type { CliLoginPollRequest, CliLoginPollResponse } from "@/lib/cli-api";
import { pollCliLogin } from "@/lib/cli-auth";
import { text } from "@/lib/validate";

// The CLI asks whether its login was allowed yet; the first answer after it was hands over the CLI key.
export async function POST(request: Request) {
  try {
    const body = await readJson<CliLoginPollRequest>(request);
    const result = await pollCliLogin(text(body.secret, "secret", { required: true }).trim());
    if (!result) return Response.json({ error: "Unknown login. Run `crewmark login` again." }, { status: 404 });
    return Response.json(result satisfies CliLoginPollResponse);
  } catch (error) {
    return errorResponse(error);
  }
}
