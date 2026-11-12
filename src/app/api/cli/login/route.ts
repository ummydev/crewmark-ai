import { errorResponse, readJson } from "@/lib/agent-data";
import type { CliLoginStartRequest, CliLoginStartResponse } from "@/lib/cli-api";
import { startCliLogin } from "@/lib/cli-auth";
import { text } from "@/lib/validate";

// `crewmark login`: starts a login for this computer. The CLI shows the code and the page's address, where the person
// allows it (app/(auth)/cli/login), and polls /api/cli/login/poll until they have.
export async function POST(request: Request) {
  try {
    const body = await readJson<CliLoginStartRequest>(request);
    const machine = (value: unknown, field: string) => (value == null ? "" : text(value, field).trim().slice(0, 200));
    const { code, secret, expiresAt } = await startCliLogin({
      hostname: machine(body.hostname, "hostname"),
      platform: machine(body.platform, "platform"),
    });
    return Response.json({
      code,
      secret,
      url: `${new URL(request.url).origin}/cli/login?code=${code}`,
      expiresAt: expiresAt.toISOString(),
      intervalSeconds: 2,
    } satisfies CliLoginStartResponse);
  } catch (error) {
    return errorResponse(error);
  }
}
