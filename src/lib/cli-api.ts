import type { AgentEmployee, IssueInput, Named, SetupRequest, SetupResponse } from "./agent-api";
import type { CliLoginPoll } from "./cli-auth";
import type { EmployeeStatus, Heartbeat, Organization } from "./types";

// The API the crewmark CLI uses with a person's CLI key (/api/cli/*), after `crewmark login`. cli/api.go mirrors
// these types: change them together. The employee's own API (/api/agent/*) is in agent-api.ts.

/** POST /api/cli/login: starts a login for this computer. */
export interface CliLoginStartRequest {
  hostname: string;
  platform: string;
}

export interface CliLoginStartResponse {
  /** e.g. "BKTM-4QXZ": shown in the terminal and on the page. */
  code: string;
  /** The page where the person allows the login. */
  url: string;
  /** What the CLI polls with; only it knows this. */
  secret: string;
  expiresAt: string;
  /** How often to poll. */
  intervalSeconds: number;
}

/** POST /api/cli/login/poll with the secret. */
export interface CliLoginPollRequest {
  secret: string;
}

export type CliLoginPollResponse = CliLoginPoll;

/** GET /api/cli/me: who the key acts for, and where. */
export interface CliWhoAmI {
  user: { name: string; email: string };
  organization: Organization;
  url: string;
}

export interface CliProject extends Named {
  emoji: string;
  employees: Named[];
  /** Issues in the project that aren't done. */
  openIssues: number;
  url: string;
}

export interface CliEmployee extends AgentEmployee {
  url: string;
}

/**
 * POST /api/cli/issues: files an issue as the person, from a conversation that isn't an employee. Like the agent
 * API's, but "me" as the assignee is the person, and projectId takes a name too. Answers { issue: AgentIssue }.
 */
export type CliIssueInput = IssueInput;

/** POST /api/cli/projects, PATCH /api/cli/projects/<id or name>. */
export interface CliProjectInput {
  name: string;
  emoji: string;
}

/** POST /api/cli/employees, PATCH /api/cli/employees/<id or name>: only the fields sent change. */
export interface CliEmployeeInput {
  name: string;
  role: string;
  description: string;
  kpi: string;
  status: EmployeeStatus;
  /** The employee's projects, all of them: ids or names. */
  projects: string[];
  heartbeat: Heartbeat | null;
}

/** POST /api/cli/employees/<id or name>/connect: links the calling conversation to the employee, like setup. */
export type CliConnectRequest = Omit<SetupRequest, "token">;
export type CliConnectResponse = SetupResponse;
