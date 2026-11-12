import { insertProject } from "@/db/projects";
import { getOrganizationData } from "@/db/queries";
import { readJson } from "@/lib/agent-data";
import type { CliProject, CliProjectInput } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";
import { toCliProject } from "@/lib/cli-data";
import { PROJECT_EMOJIS } from "@/lib/types";

// `crewmark projects` and `crewmark projects create`.
export const GET = cliRoute(async ({ user, request }): Promise<{ projects: CliProject[] }> => {
  const data = await getOrganizationData(user.organization.id);
  return { projects: data.projects.map((p) => toCliProject(p, data, request, user)) };
});

export const POST = cliRoute(async ({ user, request }): Promise<{ project: CliProject }> => {
  const body = await readJson<CliProjectInput>(request);
  const before = await getOrganizationData(user.organization.id);
  // Like the dashboard: the next emoji in the list unless one is given, so projects don't all look alike.
  const emoji = body.emoji ?? PROJECT_EMOJIS[before.projects.length % PROJECT_EMOJIS.length];
  const project = await insertProject(user.organization.id, body.name, emoji);
  const data = await getOrganizationData(user.organization.id);
  return { project: toCliProject(project, data, request, user) };
});
