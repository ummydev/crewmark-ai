import "server-only";

import { after } from "next/server";

import { getOrganizationData } from "@/db/queries";
import type { SetupRequest, SetupResponse } from "@/lib/agent-api";
import { exchangeSetupToken, type ConnectionInfo } from "@/lib/agent-auth";
import { toAgentEmployee } from "@/lib/agent-data";
import { captureServerEvent } from "@/lib/server-analytics";
import { RUNTIME_VALUES, oneOf, text } from "@/lib/validate";

// Connecting an AI agent's conversation to an employee, for `crewmark setup <token>` (with a setup link's token) and
// for a logged-in CLI connecting to an employee directly (POST /api/cli/employees/<id>/connect).

/** A short machine detail the CLI reports, cut to a sane length. */
function detail(value: unknown, field: string) {
  return value == null ? "" : text(value, field).trim().slice(0, 500);
}

/** What the CLI reports about where it runs, checked. */
export function connectionInfo(body: Partial<Omit<SetupRequest, "token">>): ConnectionInfo {
  return {
    runtime: body.runtime == null ? null : oneOf(body.runtime, RUNTIME_VALUES, "runtime"),
    sessionId: detail(body.sessionId, "sessionId") || null,
    hostname: detail(body.hostname, "hostname"),
    platform: detail(body.platform, "platform"),
    workdir: detail(body.workdir, "workdir"),
  };
}

/** Uses up the setup token for the employee's API key, or returns null when the token doesn't work. */
export async function connectAgent(request: Request, token: string, info: ConnectionInfo): Promise<SetupResponse | null> {
  const exchanged = await exchangeSetupToken(token, info);
  if (!exchanged) return null;
  // Counted here rather than by the install scripts, which agents may run with telemetry off: every connected
  // agent passes through this request.
  after(() =>
    captureServerEvent("agent connected", {
      // The person who connected it, or the employee if that person's account is gone.
      distinctId: exchanged.createdByUserId ?? exchanged.employeeId,
      organizationId: exchanged.organization.id,
      properties: {
        employee_id: exchanged.employeeId,
        runtime: info.runtime,
        session_linked: info.sessionId != null,
        platform: info.platform,
        cli_version: request.headers.get("user-agent")?.match(/^crewmark-cli\/(\S+)/)?.[1] ?? null,
      },
    }),
  );
  const data = await getOrganizationData(exchanged.organization.id);
  const employee = data.employees.find((e) => e.id === exchanged.employeeId)!;
  return { apiKey: exchanged.apiKey, employee: toAgentEmployee(employee, data), organization: exchanged.organization };
}
