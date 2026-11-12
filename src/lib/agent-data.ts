import "server-only";

import type { OrganizationData } from "@/db/queries";
import type { AgentActivity, AgentEmployee, AgentIssue } from "@/lib/agent-api";
import type { Agent } from "@/lib/agent-auth";
import { signAttachmentLinks } from "@/lib/attachments";
import { InputError, NotFoundError } from "@/lib/validate";
import {
  ISSUE_PRIORITIES,
  ISSUE_STATUSES,
  defaultHeartbeatPrompt,
  type Employee,
  type Heartbeat,
  type Issue,
  type IssueActivity,
  type User,
} from "@/lib/types";

// Shapes the agent API's answers from an organization's data, and its error responses.

export function toAgentEmployee(employee: Employee, data: OrganizationData): AgentEmployee {
  const { id, name, role, description, kpi, status, runtime } = employee;
  const projects = data.projects
    .filter((p) => employee.projectIds.includes(p.id))
    .map((p) => ({ id: p.id, name: p.name }));
  return { id, name, role, description, kpi, status, runtime, projects, heartbeat: toAgentHeartbeat(employee.heartbeat) };
}

/** Heartbeat settings as the agent gets them: with the default prompt filled in when none was written. */
export function toAgentHeartbeat(heartbeat: Heartbeat | null): Heartbeat | null {
  return heartbeat && { ...heartbeat, prompt: heartbeat.prompt || defaultHeartbeatPrompt(heartbeat.language) };
}

/** A person's name as agents see it: the Google account's full name, else the username. */
function personName(user: User) {
  return user.name || user.username;
}

/** The digital employee or person with this id, by name. */
function assigneeById(id: string | null, data: OrganizationData): AgentIssue["assignee"] {
  const employee = data.employees.find((e) => e.id === id);
  if (employee) return { kind: "employee", id: employee.id, name: employee.name };
  const user = data.users.find((u) => u.id === id);
  return user ? { kind: "user", id: user.id, name: personName(user) } : null;
}

/**
 * Whom an issue's assignee field names: "me" is whoever is acting, null unassigns, and anything else is looked up
 * among the employees (id or name) and the members (id, name, username or email). A first name does when it's unique.
 */
export function findAssignee(data: OrganizationData, value: unknown, me: string): string | null {
  if (value === null) return null;
  if (typeof value !== "string" || value.trim() === "") throw new InputError("assignee must be an id or a name");
  const wanted = value.trim();
  if (wanted === "me") return me;
  const candidates = [
    ...data.employees.map((e) => ({ id: e.id, label: e.name, names: [e.name] })),
    ...data.users
      .filter((u) => data.memberIds.includes(u.id))
      .map((u) => ({ id: u.id, label: personName(u), names: [u.name, u.username, u.email] })),
  ];
  const byId = candidates.find((c) => c.id === wanted);
  if (byId) return byId.id;
  const lower = wanted.toLowerCase();
  const exact = candidates.filter((c) => c.names.some((n) => n.toLowerCase() === lower));
  const matches =
    exact.length > 0 ? exact : candidates.filter((c) => c.names.some((n) => n.toLowerCase().split(/\s+/).includes(lower)));
  if (matches.length === 1) return matches[0].id;
  if (matches.length > 1) {
    throw new InputError(`Several are called ${wanted}: use an id (${matches.map((m) => `${m.label}: ${m.id}`).join(", ")})`);
  }
  throw new NotFoundError(
    `No employee or member ${wanted} in this organization. It has: ${candidates.map((c) => c.label).join(", ")}`,
  );
}

export function toAgentIssue(issue: Issue, data: OrganizationData, links: AgentLinks): AgentIssue {
  const project = data.projects.find((p) => p.id === issue.projectId);
  return {
    id: issue.id,
    key: issue.key,
    title: issue.title,
    description: links.markdown(issue.description),
    status: issue.status,
    priority: issue.priority,
    assignee: assigneeById(issue.assigneeId, data),
    project: project ? { id: project.id, name: project.name } : null,
    createdBy: actor(issue.createdByUserId, issue.createdByEmployeeId, data),
    createdAt: issue.createdAt,
    url: `${links.dashboard}/issues/${issue.key}`,
  };
}

/** Who did something on Crewmark, by name, for an agent. */
function actor(userId: string | null, employeeId: string | null, data: OrganizationData): AgentActivity["by"] {
  const employee = employeeId ? data.employees.find((e) => e.id === employeeId) : undefined;
  if (employee) return { kind: "employee", name: employee.name };
  const user = userId ? data.users.find((u) => u.id === userId) : undefined;
  return user ? { kind: "user", name: personName(user) } : null;
}

export function toAgentActivity(entry: IssueActivity, data: OrganizationData, links: AgentLinks): AgentActivity {
  // A change's values as the dashboard shows them; ids of since-deleted employees and projects say so.
  const label = (value: string | null) => {
    if (value === null) return null;
    switch (entry.kind) {
      case "status":
        return ISSUE_STATUSES.find((s) => s.value === value)?.label ?? value;
      case "priority":
        return ISSUE_PRIORITIES.find((p) => p.value === value)?.label ?? value;
      case "assignee":
        return assigneeById(value, data)?.name ?? "someone deleted since";
      case "project":
        return data.projects.find((p) => p.id === value)?.name ?? "a deleted project";
      default:
        return value;
    }
  };
  return {
    kind: entry.kind,
    by: actor(entry.userId, entry.employeeId, data),
    body: links.markdown(entry.body),
    from: label(entry.from),
    to: label(entry.to),
    createdAt: entry.createdAt,
  };
}

/** A request's JSON body, which must be an object. */
export async function readJson<T>(request: Request): Promise<Partial<T>> {
  const body: unknown = await request.json();
  if (typeof body !== "object" || body === null || Array.isArray(body)) throw new InputError("Send a JSON object");
  return body as Partial<T>;
}

/** The organization's part of the dashboard, e.g. https://crewmark.ai/org/acme. */
export function dashboardUrl(request: Request, { organization }: Pick<Agent, "organization">) {
  return `${new URL(request.url).origin}/org/${organization.slug}`;
}

/** Where an agent's answers point: the organization's dashboard, and links to pasted images it can download. */
export interface AgentLinks {
  dashboard: string;
  /** Markdown with its images' links signed for the agent. */
  markdown: (text: string) => string;
}

export function agentLinks(request: Request, who: Pick<Agent, "organization">): AgentLinks {
  const { origin } = new URL(request.url);
  return {
    dashboard: dashboardUrl(request, who),
    markdown: (text) => signAttachmentLinks(text, who.organization.id, origin),
  };
}

/** The issue with this key ("MC-7", any case) in the organization's data. */
export function issueByKey(data: OrganizationData, key: string) {
  const issue = data.issues.find((i) => i.key === key.toUpperCase());
  if (!issue) throw new NotFoundError(`No issue ${key} in this organization`);
  return issue;
}

export function errorResponse(error: unknown) {
  if (error instanceof InputError || error instanceof SyntaxError) {
    return Response.json({ error: error.message }, { status: 400 });
  }
  if (error instanceof NotFoundError) return Response.json({ error: error.message }, { status: 404 });
  console.error("Agent API error", error);
  // Details only in development: in production they could expose internals.
  const detail = process.env.NODE_ENV === "production" ? "" : ` (${String(error)})`;
  return Response.json({ error: `Something went wrong on Crewmark. Try again.${detail}` }, { status: 500 });
}
