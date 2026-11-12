import { saveEmployee, setEmployeeProjects, type EmployeePatch } from "@/db/employees";
import { getOrganizationData } from "@/db/queries";
import { readJson } from "@/lib/agent-data";
import type { CliEmployee, CliEmployeeInput } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";
import { findEmployee, projectIds, toCliEmployee } from "@/lib/cli-data";

// `crewmark employees show|update <id or name>`. An update changes only the fields sent; `projects` replaces the list.
export const GET = cliRoute<{ id: string }>(async ({ user, request, params }): Promise<{ employee: CliEmployee }> => {
  const data = await getOrganizationData(user.organization.id);
  return { employee: toCliEmployee(findEmployee(data, decodeURIComponent(params.id)), data, request, user) };
});

export const PATCH = cliRoute<{ id: string }>(async ({ user, request, params }): Promise<{ employee: CliEmployee }> => {
  const body = await readJson<CliEmployeeInput>(request);
  const before = await getOrganizationData(user.organization.id);
  const employee = findEmployee(before, decodeURIComponent(params.id));
  const patch: EmployeePatch = {};
  for (const field of ["name", "role", "description", "kpi", "status", "heartbeat"] as const) {
    if (field in body) Object.assign(patch, { [field]: body[field] });
  }
  await saveEmployee(user.organization.id, employee.id, patch);
  if ("projects" in body) await setEmployeeProjects(user.organization.id, employee.id, projectIds(before, body.projects));
  const data = await getOrganizationData(user.organization.id);
  return { employee: toCliEmployee(findEmployee(data, employee.id), data, request, user) };
});
