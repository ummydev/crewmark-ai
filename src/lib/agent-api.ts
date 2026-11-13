import type {
  AgentRuntime,
  EmployeeStatus,
  Heartbeat,
  IssueActivityKind,
  IssuePriority,
  IssueStatus,
  Organization,
} from "./types";

// The agent API (/api/agent/*) that the crewmark CLI talks to. Requests are signed with the API key from
// `crewmark setup`: Authorization: Bearer cmk_…. Errors come back as { error } with a 4xx or 5xx status.
// The CLI (Go, in cli/) mirrors these types in cli/api.go: change both together.

export interface Named {
  id: string;
  name: string;
}

export interface AgentEmployee {
  id: string;
  name: string;
  role: string;
  /** Responsibilities. */
  description: string;
  kpi: string;
  status: EmployeeStatus;
  /** What the employee's connected agent runs in; null while none is connected. */
  runtime: AgentRuntime | null;
  projects: Named[];
  /** When the CLI wakes the agent up, with the prompt filled in (the default when none was set); null if never set. */
  heartbeat: Heartbeat | null;
}

export interface AgentIssue {
  id: string;
  /** e.g. "MC-7", unique within the organization. */
  key: string;
  title: string;
  /**
   * Markdown. Images pasted in the dashboard are full links that open without signing in for an hour, e.g.
   * `curl -L -o shot.png '<link>'`; reading the issue again gives fresh ones.
   */
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  /** A digital employee or a person. */
  assignee: (Named & { kind: "user" | "employee" }) | null;
  project: Named | null;
  createdBy: { kind: "user" | "employee"; name: string } | null;
  /** ISO timestamp. */
  createdAt: string;
  /** The issue in the dashboard. */
  url: string;
}

/** One entry in an issue's Activity: a comment, or a change to its status, priority, assignee or project. */
export interface AgentActivity {
  kind: IssueActivityKind;
  /** Who did it; null once they're deleted. */
  by: { kind: "user" | "employee"; name: string } | null;
  /** A comment's text, in Markdown, its images linked like the description's; "" for changes. */
  body: string;
  /** A change's value before and after, as shown in the dashboard (e.g. "In Progress", a name); null for none. */
  from: string | null;
  to: string | null;
  /** ISO timestamp. */
  createdAt: string;
}

/** GET /api/agent/issues/<key>: the issue and its Activity, oldest first. */
export interface IssueResponse {
  issue: AgentIssue;
  activity: AgentActivity[];
}

/**
 * POST /api/agent/issues/<key>/comments: comments on the issue as the employee. The assignee's agent hears about it;
 * so does any other employee the body mentions with @ and its name, e.g. "@DevOps crewmark ready to ship".
 */
export interface CommentRequest {
  body: string;
}

export interface CommentResponse {
  comment: AgentActivity;
}

/** POST /api/agent/setup: exchanges a setup token for an API key. The only request without one. */
export interface SetupRequest {
  token: string;
  runtime: AgentRuntime | null;
  sessionId: string | null;
  hostname: string;
  platform: string;
  workdir: string;
}

export interface SetupResponse {
  apiKey: string;
  employee: AgentEmployee;
  organization: Organization;
}

/** GET /api/agent/me: who the agent is and what it's working on. */
/** Something on Crewmark the agent should hear about, e.g. an issue assigned to it. */
export interface AgentEvent {
  /** Counts up; ask for the events after the last one seen. */
  id: number;
  type: string;
  /** What to tell the agent, already worded. */
  message: string;
  createdAt: string;
}

/** GET /api/agent/events?after=<id>: the events after that one, and the id to ask after next time. */
export interface EventsResponse {
  events: AgentEvent[];
  cursor: number;
}

export interface MeResponse {
  employee: AgentEmployee;
  organization: Organization;
  /** The conversation Crewmark has on record as the employee, or null until one is linked. */
  session: { runtime: AgentRuntime; sessionId: string } | null;
  /** Issues assigned to the employee that aren't done. */
  issues: AgentIssue[];
  /** The organization's people (its members), who issues can be assigned to as well. */
  people: (Named & { email: string })[];
  /** The employee in the dashboard. */
  url: string;
}

/** GET /api/agent/heartbeat: the employee's heartbeat settings, for the daemon; null until someone sets them up. */
export interface HeartbeatResponse {
  heartbeat: Heartbeat | null;
}

/**
 * GET /api/agent/realtime: where the daemon opens its WebSocket for pushes (see src/lib/realtime.ts), with a token good
 * for ten minutes; null when this Crewmark has none, and the daemon polls instead.
 */
export interface RealtimeResponse {
  realtime: { url: string; token: string; expiresAt: string } | null;
}

/** POST /api/agent/session: which conversation is the employee. */
export interface SessionRequest {
  runtime: AgentRuntime;
  sessionId: string;
  workdir?: string;
}

/**
 * POST /api/agent/issues creates one; PATCH /api/agent/issues/<key> changes the given fields. assigneeId takes "me",
 * an employee (id or name) or a person who is a member (id, name, username or email), or null; projectId takes a
 * project id or null. An issue in a project can only be an employee's who is on it or on no project: assigning one on
 * other projects fails, and moving the issue to a project its employee isn't on unassigns them.
 */
export interface IssueInput {
  title?: string;
  description?: string;
  status?: IssueStatus;
  priority?: IssuePriority;
  assigneeId?: string | null;
  projectId?: string | null;
}
