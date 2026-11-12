import { saveProject, type ProjectPatch } from "@/db/projects";
import { getOrganizationData } from "@/db/queries";
import { readJson } from "@/lib/agent-data";
import type { CliProject, CliProjectInput } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";
import { findProject, toCliProject } from "@/lib/cli-data";

// `crewmark projects show|update <id or name>`.
export const GET = cliRoute<{ id: string }>(async ({ user, request, params }): Promise<{ project: CliProject }> => {
  const data = await getOrganizationData(user.organization.id);
  return { project: toCliProject(findProject(data, decodeURIComponent(params.id)), data, request, user) };
});

export const PATCH = cliRoute<{ id: string }>(async ({ user, request, params }): Promise<{ project: CliProject }> => {
  const body = await readJson<CliProjectInput>(request);
  const project = findProject(await getOrganizationData(user.organization.id), decodeURIComponent(params.id));
  const patch: ProjectPatch = {};
  if ("name" in body) patch.name = body.name;
  if ("emoji" in body) patch.emoji = body.emoji;
  await saveProject(user.organization.id, project.id, patch);
  const data = await getOrganizationData(user.organization.id);
  return { project: toCliProject(findProject(data, project.id), data, request, user) };
});
