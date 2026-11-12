import { getOrganizationData } from "@/db/queries";
import { createSetupToken } from "@/lib/agent-auth";
import { connectAgent, connectionInfo } from "@/lib/agent-connect";
import { readJson } from "@/lib/agent-data";
import type { CliConnectRequest, CliConnectResponse } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";
import { findEmployee } from "@/lib/cli-data";

// `crewmark employees connect <id or name>` (and `employees create --connect`): what a setup link does, without one.
// The person's CLI key stands in for the link, so the calling conversation becomes the employee and gets its API key.
export const POST = cliRoute<{ id: string }>(async ({ user, request, params }): Promise<CliConnectResponse> => {
  const body = await readJson<CliConnectRequest>(request);
  const employee = findEmployee(await getOrganizationData(user.organization.id), decodeURIComponent(params.id));
  const { token } = await createSetupToken(user.organization.id, employee.id, user.userId);
  return (await connectAgent(request, token, connectionInfo(body)))!;
});
