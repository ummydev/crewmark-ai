import { insertIssue } from "@/db/issues";
import { getOrganizationData } from "@/db/queries";
import type { AgentIssue } from "@/lib/agent-api";
import { agentLinks, findAssignee, readJson, recurrenceInput, toAgentIssue } from "@/lib/agent-data";
import type { CliIssueInput } from "@/lib/cli-api";
import { findProject } from "@/lib/cli-data";
import { cliRoute } from "@/lib/cli-route";

// `crewmark issues create` from a conversation that isn't an employee: files the issue as the person logged in, so
// "me" as the assignee is them.
export const POST = cliRoute(async ({ user, request }): Promise<{ issue: AgentIssue }> => {
  const body = await readJson<CliIssueInput>(request);
  const before = await getOrganizationData(user.organization.id);
  const issue = await insertIssue(
    user.organization.id,
    {
      title: body.title as string,
      description: body.description ?? "",
      status: body.status ?? "todo",
      priority: body.priority ?? "medium",
      assigneeId: findAssignee(before, body.assigneeId ?? null, user.userId),
      projectId: body.projectId ? findProject(before, String(body.projectId)).id : null,
      recurrence: "repeat" in body ? recurrenceInput(body.repeat, body.timeZone, []) : null,
    },
    { userId: user.userId },
  );
  const data = await getOrganizationData(user.organization.id);
  return { issue: toAgentIssue(issue, data, agentLinks(request, user)) };
});
