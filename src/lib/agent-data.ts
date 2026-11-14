import "server-only";

import type { OrganizationData } from "@/db/queries";
import type {
  AgentActivity,
  AgentDirectMessage,
  AgentDirectThread,
  AgentEmployee,
  AgentIssue,
} from "@/lib/agent-api";
import type { Agent } from "@/lib/agent-auth";
import { signAttachmentLinks } from "@/lib/attachments";
import {
  RecurrenceError,
  describeRecurrence,
  formatRecurrence,
  isTimeZone,
  parseRecurrence,
  recurrenceFromWords,
} from "@/lib/recurrence";
import { InputError, NotFoundError } from "@/lib/validate";
import {
  ISSUE_PRIORITIES,
  ISSUE_STATUSES,
  defaultHeartbeatPrompt,
  type DirectMessage,
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
    repeat: issue.recurrence ? toAgentRepeat(issue.recurrence, issue.nextRecurAt) : null,
  };
}

function toAgentRepeat(recurrence: string, next: string | null): AgentIssue["repeat"] {
  try {
    const schedule = parseRecurrence(recurrence);
    return { schedule: describeRecurrence(schedule), timeZone: schedule.timeZone, next };
  } catch {
    return { schedule: recurrence, timeZone: "", next };
  }
}

/** A schedule in words with its time zone, e.g. "every 2 days at 10:00 (Asia/Shanghai)", for Activity. */
function repeatLabel(recurrence: string) {
  const repeat = toAgentRepeat(recurrence, null);
  return repeat && repeat.timeZone ? `${repeat.schedule} (${repeat.timeZone})` : recurrence;
}

/**
 * The schedule an agent asked for with IssueInput.repeat, as stored: words or iCalendar text, in IssueInput.timeZone
 * or else the first good zone of `fallbacks` (the schedule it replaces, the employee's heartbeat), else UTC. Null
 * stops it repeating.
 */
export function recurrenceInput(repeat: unknown, timeZone: unknown, fallbacks: (string | null | undefined)[]) {
  if (repeat === null || (typeof repeat === "string" && ["off", "none", ""].includes(repeat.trim().toLowerCase()))) {
    return null;
  }
  if (typeof repeat !== "string") throw new InputError("repeat must be a schedule in words, or off");
  if (timeZone !== undefined && (typeof timeZone !== "string" || !isTimeZone(timeZone))) {
    throw new InputError(`${String(timeZone)} isn't a time zone, e.g. Asia/Shanghai`);
  }
  try {
    if (/^DTSTART/i.test(repeat.trim())) return formatRecurrence(parseRecurrence(repeat));
    const zone = timeZone ?? fallbacks.find((zone): zone is string => !!zone && isTimeZone(zone)) ?? "UTC";
    return formatRecurrence(recurrenceFromWords(repeat, zone));
  } catch (error) {
    if (error instanceof RecurrenceError) throw new InputError(error.message);
    throw error;
  }
}

/** The time zone of a stored schedule, to keep when an agent changes it without naming one. */
export function recurrenceZone(recurrence: string | null) {
  if (!recurrence) return null;
  try {
    return parseRecurrence(recurrence).timeZone;
  } catch {
    return null;
  }
}

/** Who did something on Crewmark, by name, for an agent. */
function actor(userId: string | null, employeeId: string | null, data: OrganizationData): AgentIssue["createdBy"] {
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
      case "repeat":
        return repeatLabel(value);
      case "recurred":
        return ISSUE_STATUSES.find((s) => s.value === value)?.label ?? value;
      default:
        return value;
    }
  };
  return {
    kind: entry.kind,
    by: entry.kind === "recurred" ? { kind: "crewmark", name: "Crewmark" } : actor(entry.userId, entry.employeeId, data),
    body: links.markdown(entry.body),
    from: label(entry.from),
    to: label(entry.to),
    createdAt: entry.createdAt,
  };
}

/**
 * The person a direct message goes to or is with: a member, by id, name, username or email (a first name does when
 * it's unique). Without one, the organization's only member.
 */
export function findPerson(data: OrganizationData, value: unknown): User {
  const people = data.users.filter((u) => data.memberIds.includes(u.id));
  const list = people.map((u) => personName(u)).join(", ");
  if (value === undefined || value === null || value === "") {
    if (people.length === 1) return people[0];
    throw new InputError(`Say who, e.g. --to "${personName(people[0])}". People here: ${list}`);
  }
  if (typeof value !== "string") throw new InputError("to must be a name, an email or an id");
  const wanted = value.trim().toLowerCase();
  const names = (u: User) => [u.id, u.name, u.username, u.email].filter(Boolean).map((n) => n.toLowerCase());
  const exact = people.filter((u) => names(u).includes(wanted));
  const matches = exact.length ? exact : people.filter((u) => u.name.toLowerCase().split(/\s+/).includes(wanted));
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    throw new InputError(`Several are called ${value}: use an email (${matches.map((u) => u.email).join(", ")})`);
  }
  throw new NotFoundError(`No one called ${value} in this organization. People here: ${list}`);
}

/** A direct message as an agent or the CLI reads it; `person` and `employee` are the conversation's two sides. */
export function toAgentDirectMessage(
  message: DirectMessage,
  person: User,
  employee: Pick<Employee, "name">,
  links: AgentLinks,
): AgentDirectMessage {
  return {
    from: message.fromEmployee ? { kind: "employee", name: employee.name } : { kind: "user", name: personName(person) },
    body: links.markdown(message.body),
    createdAt: message.createdAt,
  };
}

/** A person as the other side of an employee's conversation. */
export function personSide(user: User): AgentDirectThread["with"] {
  return { kind: "user", id: user.id, name: personName(user) };
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
