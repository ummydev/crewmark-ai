import "server-only";

import type { OrganizationData } from "@/db/queries";
import { dashboardUrl, toAgentEmployee } from "@/lib/agent-data";
import type { CliEmployee, CliProject } from "@/lib/cli-api";
import type { CliUser } from "@/lib/cli-auth";
import type { Employee, Project } from "@/lib/types";
import { InputError, NotFoundError } from "@/lib/validate";

// Shapes the CLI API's answers, and finds projects and employees by what a person or agent typed: an id or a name.

function find<T extends { id: string; name: string }>(items: T[], idOrName: string, kind: string): T {
  const wanted = idOrName.trim();
  const byId = items.find((i) => i.id === wanted);
  if (byId) return byId;
  const byName = items.filter((i) => i.name.toLowerCase() === wanted.toLowerCase());
  if (byName.length === 1) return byName[0];
  if (byName.length > 1) {
    throw new InputError(`Several ${kind}s are called ${wanted}: use an id (${byName.map((i) => i.id).join(", ")})`);
  }
  throw new NotFoundError(`No ${kind} ${wanted} in this organization`);
}

export function findProject(data: OrganizationData, idOrName: string): Project {
  return find(data.projects, idOrName, "project");
}

export function findEmployee(data: OrganizationData, idOrName: string): Employee {
  return find(data.employees, idOrName, "employee");
}

/** Project ids for a list of project ids or names. */
export function projectIds(data: OrganizationData, value: unknown): string[] {
  if (!Array.isArray(value)) throw new InputError("projects must be a list of project ids or names");
  return value.map((p) => findProject(data, String(p)).id);
}

export function toCliProject(project: Project, data: OrganizationData, request: Request, user: CliUser): CliProject {
  return {
    id: project.id,
    name: project.name,
    emoji: project.emoji,
    employees: data.employees
      .filter((e) => e.projectIds.includes(project.id))
      .map((e) => ({ id: e.id, name: e.name })),
    openIssues: data.issues.filter((i) => i.projectId === project.id && i.status !== "done").length,
    url: `${dashboardUrl(request, user)}/projects/${project.id}/issues`,
  };
}

export function toCliEmployee(employee: Employee, data: OrganizationData, request: Request, user: CliUser): CliEmployee {
  return { ...toAgentEmployee(employee, data), url: `${dashboardUrl(request, user)}/employees/${employee.id}` };
}
