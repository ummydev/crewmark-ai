import { insertEmployee } from "@/db/employees";
import { getOrganizationData } from "@/db/queries";
import { readJson } from "@/lib/agent-data";
import type { CliEmployee, CliEmployeeInput } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";
import { projectIds, toCliEmployee } from "@/lib/cli-data";

// `crewmark employees` and `crewmark employees create`.
export const GET = cliRoute(async ({ user, request }): Promise<{ employees: CliEmployee[] }> => {
  const data = await getOrganizationData(user.organization.id);
  return { employees: data.employees.map((e) => toCliEmployee(e, data, request, user)) };
});

export const POST = cliRoute(async ({ user, request }): Promise<{ employee: CliEmployee }> => {
  const body = await readJson<CliEmployeeInput>(request);
  const before = await getOrganizationData(user.organization.id);
  const employee = await insertEmployee(user.organization.id, {
    name: body.name ?? "",
    role: body.role ?? "",
    description: body.description ?? "",
    kpi: body.kpi ?? "",
    status: body.status ?? "idle",
    projectIds: projectIds(before, body.projects ?? []),
    heartbeat: body.heartbeat ?? null,
  });
  const data = await getOrganizationData(user.organization.id);
  return { employee: toCliEmployee(data.employees.find((e) => e.id === employee.id)!, data, request, user) };
});
