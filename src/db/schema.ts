import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  check,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

import type { Heartbeat, IssueActivityKind } from "@/lib/types";

export const issueStatus = pgEnum("issue_status", ["backlog", "todo", "in_progress", "in_review", "done"]);
export const issuePriority = pgEnum("issue_priority", ["urgent", "high", "medium", "low", "none"]);
export const agentRuntime = pgEnum("agent_runtime", ["claude-code", "codex", "other"]);
export const employeeStatus = pgEnum("employee_status", ["working", "idle", "paused"]);

const id = () =>
  text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID());

const createdAt = () => timestamp("created_at", { withTimezone: true }).notNull().defaultNow();
const updatedAt = () => timestamp("updated_at", { withTimezone: true }).notNull().defaultNow();

/** People with an account on Crewmark. Better Auth (src/lib/auth.ts) creates them on their first sign-in. */
export const users = pgTable(
  "users",
  {
    id: id(),
    /** Unique handle shown in the dashboard, taken from the email on sign-up. */
    username: text("username").notNull().unique(),
    /** Full name from the Google account. */
    name: text("name").notNull().default(""),
    /** One user per address. Always lowercase, so the unique constraint also catches "Ada@…" next to "ada@…". */
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").notNull().default(false),
    /** Avatar URL. */
    profileImage: text("profile_image"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [check("users_email_lowercase", sql`${t.email} = lower(${t.email})`)],
);

// Better Auth's own tables. Their shape is fixed by Better Auth: check its docs before changing a column.

/** A signed-in browser. Its cookie holds the token; deleting the row signs that browser out. */
export const sessions = pgTable(
  "sessions",
  {
    id: id(),
    token: text("token").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    /** The organization this browser used last, where /org sends it. */
    activeOrganizationId: text("active_organization_id").references(() => organizations.id, { onDelete: "set null" }),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index().on(t.userId)],
);

/** A way a user signs in, e.g. their Google account. */
export const accounts = pgTable(
  "accounts",
  {
    id: id(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** e.g. "google". */
    providerId: text("provider_id").notNull(),
    /** The user's id at the provider. */
    accountId: text("account_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
    scope: text("scope"),
    /** Only for email-and-password accounts, which Crewmark doesn't offer yet. */
    password: text("password"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index().on(t.userId), uniqueIndex().on(t.providerId, t.accountId)],
);

/** Short-lived values checked once, such as the state of a Google sign-in in progress. */
export const verifications = pgTable(
  "verifications",
  {
    id: id(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index().on(t.identifier)],
);

/** A team on Crewmark. Its projects, employees and issues are visible only to its members. */
export const organizations = pgTable("organizations", {
  id: id(),
  name: text("name").notNull(),
  /** In URLs: /org/<slug>/issues. */
  slug: text("slug").notNull().unique(),
  logo: text("logo"),
  /** JSON, written by Better Auth. */
  metadata: text("metadata"),
  createdAt: createdAt(),
});

/** Who belongs to which organization, as "owner", "admin" or "member". */
export const members = pgTable(
  "members",
  {
    id: id(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").notNull().default("member"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex().on(t.organizationId, t.userId), index().on(t.userId)],
);

/** An email address asked to join an organization. Accepting it at /invitations/<id> makes a member. */
export const invitations = pgTable(
  "invitations",
  {
    id: id(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    /** The role the new member gets. */
    role: text("role"),
    /** "pending", "accepted", "rejected" or "canceled". */
    status: text("status").notNull().default("pending"),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    inviterId: text("inviter_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.organizationId), index().on(t.email)],
);

// Everything below belongs to one organization. Every query and update filters by organization_id.
const organizationId = () =>
  text("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" });

export const projects = pgTable(
  "projects",
  {
    id: id(),
    organizationId: organizationId(),
    name: text("name").notNull(),
    /** Shown on a light grey circle as the project's avatar; one of PROJECT_EMOJIS. */
    emoji: text("emoji").notNull().default("🚀"),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.organizationId)],
);

/** Digital employees: an agent identity with a role and KPIs. */
export const employees = pgTable(
  "employees",
  {
    id: id(),
    organizationId: organizationId(),
    name: text("name").notNull(),
    role: text("role").notNull().default(""),
    /**
     * What the employee's agent runs in, saved from what it reports when it connects (crewmark setup or
     * link-session), never picked by a person. Null until an agent connects.
     */
    runtime: agentRuntime("runtime"),
    description: text("description").notNull().default(""),
    kpi: text("kpi").notNull().default(""),
    status: employeeStatus("status").notNull().default("idle"),
    /** When the crewmark CLI wakes the agent up; null until someone sets it up (off). Checked by validate.heartbeat. */
    heartbeat: jsonb("heartbeat").$type<Heartbeat>(),
    /** When the agent last did work; null until its first run. */
    lastActiveAt: timestamp("last_active_at", { withTimezone: true }),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.organizationId)],
);

/**
 * A one-time link that connects an AI agent on someone's computer to an employee: /setup/<token>. Exchanged once,
 * by `crewmark setup`, for an agent connection's API key.
 */
export const agentSetupTokens = pgTable(
  "agent_setup_tokens",
  {
    id: id(),
    organizationId: organizationId(),
    employeeId: text("employee_id")
      .notNull()
      .references(() => employees.id, { onDelete: "cascade" }),
    /** SHA-256 of the token. The token itself is only shown to the person who made it. */
    tokenHash: text("token_hash").notNull().unique(),
    createdByUserId: text("created_by_user_id").references(() => users.id, { onDelete: "set null" }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.employeeId)],
);

/**
 * An AI agent (Claude Code, Codex) working as an employee on someone's computer. The crewmark CLI signs in with its
 * API key. An employee has at most one live connection: connecting again revokes the previous one.
 */
export const agentConnections = pgTable(
  "agent_connections",
  {
    id: id(),
    organizationId: organizationId(),
    employeeId: text("employee_id")
      .notNull()
      .references(() => employees.id, { onDelete: "cascade" }),
    /** SHA-256 of the API key, which only the CLI holds (in ~/.crewmark). */
    keyHash: text("key_hash").notNull().unique(),
    runtime: agentRuntime("runtime"),
    /** The agent's conversation that is this employee; resuming it talks to the employee with its memory. */
    sessionId: text("session_id"),
    hostname: text("hostname").notNull().default(""),
    platform: text("platform").notNull().default(""),
    /** Where the session runs. Claude Code keeps sessions per directory, so it's resumed from here. */
    workdir: text("workdir").notNull().default(""),
    createdAt: createdAt(),
    lastUsedAt: timestamp("last_used_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
  },
  (t) => [index().on(t.employeeId)],
);

/** Which projects an employee works on (many-to-many). Both always belong to the same organization. */
export const employeeProjects = pgTable(
  "employee_projects",
  {
    employeeId: text("employee_id")
      .notNull()
      .references(() => employees.id, { onDelete: "cascade" }),
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.employeeId, t.projectId] }), index().on(t.projectId)],
);

export const issues = pgTable(
  "issues",
  {
    id: id(),
    organizationId: organizationId(),
    /** Counts up within the organization and is shown as the issue key, e.g. 7 → "MC-7". */
    number: integer("number").notNull(),
    title: text("title").notNull(),
    /** Markdown. */
    description: text("description").notNull().default(""),
    status: issueStatus("status").notNull().default("todo"),
    priority: issuePriority("priority").notNull().default("medium"),
    /** Board order; fractional so a move only rewrites the moved issue. */
    position: doublePrecision("position").notNull(),
    // Assigned to a digital employee or to a person (a member); at most one of these. Issue.assigneeId is whichever.
    assigneeEmployeeId: text("assignee_id").references(() => employees.id, { onDelete: "set null" }),
    assigneeUserId: text("assignee_user_id").references(() => users.id, { onDelete: "set null" }),
    projectId: text("project_id").references(() => projects.id, { onDelete: "set null" }),
    // Filed by a person or by a digital employee: new issues set exactly one of these.
    createdByUserId: text("created_by_user_id").references(() => users.id, { onDelete: "set null" }),
    createdByEmployeeId: text("created_by_employee_id").references(() => employees.id, { onDelete: "set null" }),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex().on(t.organizationId, t.number),
    index().on(t.projectId),
    index().on(t.assigneeEmployeeId),
    index().on(t.assigneeUserId),
    index().on(t.position),
    // At most one creator; both become null only if the creator is deleted.
    check(
      "issues_single_creator",
      sql`${t.createdByUserId} is null or ${t.createdByEmployeeId} is null`,
    ),
    check("issues_single_assignee", sql`${t.assigneeEmployeeId} is null or ${t.assigneeUserId} is null`),
  ],
);

/**
 * An issue's Activity, shown under it: comments from people and digital employees, and changes to its status,
 * priority, assignee and project. `from` and `to` hold a change's values (an enum value or an id) as text.
 */
export const issueActivity = pgTable(
  "issue_activity",
  {
    /** Counts up, so it orders the entries. */
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    organizationId: organizationId(),
    issueId: text("issue_id")
      .notNull()
      .references(() => issues.id, { onDelete: "cascade" }),
    kind: text("kind").$type<IssueActivityKind>().notNull(),
    // Who did it, like an issue's creator: a person or a digital employee.
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
    employeeId: text("employee_id").references(() => employees.id, { onDelete: "set null" }),
    /** A comment's text, in Markdown. */
    body: text("body").notNull().default(""),
    fromValue: text("from_value"),
    toValue: text("to_value"),
    createdAt: createdAt(),
  },
  (t) => [
    index().on(t.issueId, t.id),
    check("issue_activity_single_actor", sql`${t.userId} is null or ${t.employeeId} is null`),
  ],
);

/**
 * Images pasted or dropped into an issue's description or a comment, which link to them as /api/attachments/<id>.
 * The file is in object storage under <organization id>/<id> (src/lib/attachments.ts); only the organization's
 * members, and agents through signed links, can open it.
 */
export const attachments = pgTable(
  "attachments",
  {
    id: id(),
    organizationId: organizationId(),
    /** The file's name on the uploader's computer, e.g. "Screenshot 2026-11-02 at 10.13.png". */
    name: text("name").notNull(),
    contentType: text("content_type").notNull(),
    /** In bytes. */
    size: integer("size").notNull(),
    uploadedByUserId: text("uploaded_by_user_id").references(() => users.id, { onDelete: "set null" }),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.organizationId)],
);

/**
 * Things that happened on Crewmark that an employee's agent should hear about, e.g. an issue assigned to it. The
 * crewmark CLI on the agent's computer polls for the ones after the last it saw (by id) and passes each message on
 * to the agent's conversation.
 */
export const agentEvents = pgTable(
  "agent_events",
  {
    /** Counts up, so it doubles as the CLI's place in the stream. */
    id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    organizationId: organizationId(),
    employeeId: text("employee_id")
      .notNull()
      .references(() => employees.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    /** What the agent is told, already worded, so the CLI passes it on as is. */
    message: text("message").notNull(),
    createdAt: createdAt(),
  },
  (t) => [index().on(t.employeeId, t.id)],
);

/**
 * `crewmark login` asking to act for a person: the CLI shows the code and a link to its page, where the person signs in
 * and allows it for one of their organizations; the CLI, polling with its secret, then gets a CLI key. Works once,
 * for ten minutes.
 */
export const cliLogins = pgTable("cli_logins", {
  id: id(),
  /** Shown in the terminal and on the page, e.g. "BKTM-4QXZ", so the person can tell it's their login. */
  code: text("code").notNull().unique(),
  /** SHA-256 of the secret the CLI polls with. */
  secretHash: text("secret_hash").notNull().unique(),
  hostname: text("hostname").notNull().default(""),
  platform: text("platform").notNull().default(""),
  /** Who allowed it, and for which organization. */
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  organizationId: text("organization_id").references(() => organizations.id, { onDelete: "cascade" }),
  approvedAt: timestamp("approved_at", { withTimezone: true }),
  deniedAt: timestamp("denied_at", { withTimezone: true }),
  /** When the CLI collected its key; a login hands out one key at most. */
  usedAt: timestamp("used_at", { withTimezone: true }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: createdAt(),
});

/**
 * A person's key for the crewmark CLI on one computer, for one organization, from `crewmark login`. With it the CLI
 * acts as that person there: making and changing projects and employees, and connecting conversations to employees.
 */
export const cliKeys = pgTable(
  "cli_keys",
  {
    id: id(),
    organizationId: organizationId(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** SHA-256 of the key, which only the CLI holds (in ~/.crewmark). */
    keyHash: text("key_hash").notNull().unique(),
    hostname: text("hostname").notNull().default(""),
    platform: text("platform").notNull().default(""),
    createdAt: createdAt(),
    lastUsedAt: timestamp("last_used_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
  },
  (t) => [index().on(t.userId)],
);
