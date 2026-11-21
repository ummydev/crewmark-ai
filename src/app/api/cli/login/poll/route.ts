import { errorResponse, readJson } from "@/lib/agent-data";
import type { CliLoginPollRequest, CliLoginPollResponse } from "@/lib/cli-api";
import { pollCliLogin } from "@/lib/cli-auth";
import { machineIdOf } from "@/lib/device-records";
import { text } from "@/lib/validate";

// The CLI asks whether its login was allowed yet; the first answer after it was hands over the CLI key. A login allowed
// ahead, in an install command (MC-421), learns the computer from what the CLI says here.
export async function POST(request: Request) {
  try {
    const body = await readJson<CliLoginPollRequest>(request);
    const machine = (value: unknown, field: string) => (value == null ? "" : text(value, field).trim().slice(0, 200));
    const result = await pollCliLogin(text(body.secret, "secret", { required: true }).trim(), {
      hostname: machine(body.hostname, "hostname"),
      platform: machine(body.platform, "platform"),
      machineId: machineIdOf(request),
    });
    if (!result) return Response.json({ error: "Unknown login. Run `crewmark login` again." }, { status: 404 });
    return Response.json(result satisfies CliLoginPollResponse);
  } catch (error) {
    return errorResponse(error);
  }
}
