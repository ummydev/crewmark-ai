"use server";

import { headers } from "next/headers";

import {
  archiveEmployee as saveArchived,
  conversationFolders,
  deleteEmployee as removeEmployee,
  insertEmployee,
  saveEmployee,
  type EmployeePatch,
  type NewEmployeeInput,
} from "@/db/employees";
import {
  assertInOrganization,
  deleteIssue as removeIssue,
  getIssue as findIssue,
  insertIssue,
  updateIssue as saveIssue,
  type IssuePatch,
  type NewIssueInput,
} from "@/db/issues";
import { startUpload } from "@/db/attachments";
import { directThreadsOfUser, readDirectMessages, sendDirectMessage, writeToConversation } from "@/db/direct-messages";
import { addComment, listActivity } from "@/db/issue-activity";
import { insertProject, saveProject, type ProjectPatch } from "@/db/projects";
import { inboxOf, listSubscribers, markInboxRead, markIssueRead, setSubscribed } from "@/db/subscriptions";
import { employees } from "@/db/schema";
import { markWorkRead, markWorkUnread, pinConversation, workRepliesOf } from "@/db/work-unread";
import { createSetupToken, getConnection } from "@/lib/agent-auth";
import { auth, freeOrganizationSlug, requireMember, requireUserId } from "@/lib/auth";
import { answerCliLogin, revokeCliKey, startInstallLogin } from "@/lib/cli-auth";
import { listDevices, ownsEmployeeComputer, startOnDevice } from "@/lib/devices";
import { FILE_LINKS } from "@/lib/features";
import { realtimeConnection, realtimeFiles, realtimePathAccess } from "@/lib/realtime";
import type {
  AgentConnection,
  Device,
  DirectMessage,
  DirectThread,
  Employee,
  ImageUpload,
  InboxItem,
  Issue,
  IssueActivity,
  Project,
  WorkReplies,
} from "@/lib/types";
import { text } from "@/lib/validate";

export type { EmployeePatch, IssuePatch, NewEmployeeInput, NewIssueInput, ProjectPatch };

// Server Functions are public endpoints that anyone can call with any arguments. Each one checks that the caller
// belongs to the organization it names and touches only that organization's rows, and checks every input instead
// of trusting the client's types.

export async function createProject(organizationId: string, name: string, emoji: string): Promise<Project> {
  await requireMember(organizationId);
  return insertProject(organizationId, name, emoji);
}

export async function updateProject(organizationId: string, id: string, patch: ProjectPatch): Promise<void> {
  await requireMember(organizationId);
  await saveProject(organizationId, id, patch);
}

export async function createEmployee(organizationId: string, input: NewEmployeeInput): Promise<Employee> {
  await requireMember(organizationId);
  return insertEmployee(organizationId, input);
}

export async function updateEmployee(organizationId: string, id: string, patch: EmployeePatch): Promise<void> {
  await requireMember(organizationId);
  await saveEmployee(organizationId, id, patch);
}

/** Where the employee's conversation runs, and the folders to offer it as extra ones (MC-313). */
export async function getConversationFolders(organizationId: string, employeeId: string) {
  await requireMember(organizationId);
  return conversationFolders(organizationId, text(employeeId, "employeeId", { required: true }));
}

/** Archives the employee, or brings it back (MC-305). */
export async function archiveEmployee(organizationId: string, id: string, archived: boolean): Promise<void> {
  await requireMember(organizationId);
  await saveArchived(organizationId, id, archived);
}

export async function deleteEmployee(organizationId: string, id: string): Promise<void> {
  await requireMember(organizationId);
  await removeEmployee(organizationId, id);
}

export async function createIssue(organizationId: string, input: NewIssueInput): Promise<Issue> {
  const userId = await requireMember(organizationId);
  return insertIssue(organizationId, input, { userId });
}

export async function updateIssue(organizationId: string, id: string, patch: IssuePatch): Promise<void> {
  const userId = await requireMember(organizationId);
  await saveIssue(organizationId, id, patch, { userId });
}

export async function deleteIssue(organizationId: string, id: string): Promise<void> {
  await requireMember(organizationId);
  await removeIssue(organizationId, id);
}

/** One issue, by its id or key, as it is now: for a tab that heard it changed or lacks it (MC-455). */
export async function getIssue(organizationId: string, idOrKey: string): Promise<Issue | null> {
  await requireMember(organizationId);
  return findIssue(organizationId, text(idOrKey, "idOrKey", { required: true }));
}

/** The issue's comments and changes, oldest first. */
export async function getIssueActivity(organizationId: string, issueId: string): Promise<IssueActivity[]> {
  await requireMember(organizationId);
  return listActivity(organizationId, text(issueId, "issueId", { required: true }));
}

/** The ids of the people and employees who follow the issue (MC-200). */
export async function getIssueSubscribers(organizationId: string, issueId: string): Promise<string[]> {
  await requireMember(organizationId);
  return listSubscribers(organizationId, text(issueId, "issueId", { required: true }));
}

/**
 * Adds someone to the issue's subscribers or removes them: the signed-in person, a member or an employee, by id. The
 * assignee can't be removed.
 */
export async function setIssueSubscription(
  organizationId: string,
  issueId: string,
  subscriberId: string,
  subscribed: boolean,
): Promise<void> {
  await requireMember(organizationId);
  if (typeof subscribed !== "boolean") throw new Error("subscribed must be true or false");
  await setSubscribed(organizationId, issueId, subscriberId, subscribed);
}

/** The signed-in person's Inbox: issues they follow on which someone else did something, latest first. */
export async function getInbox(organizationId: string): Promise<InboxItem[]> {
  const userId = await requireMember(organizationId);
  return inboxOf(organizationId, userId);
}

/** The signed-in person has seen the issue (or, without one, everything in their Inbox). */
export async function markInboxSeen(organizationId: string, issueId?: string): Promise<void> {
  const userId = await requireMember(organizationId);
  if (issueId === undefined) await markInboxRead(organizationId, userId);
  else await markIssueRead(organizationId, text(issueId, "issueId", { required: true }), userId);
}

/** Where this tab opens its socket for pushes, or null when Crewmark has none (see src/lib/realtime.ts). */
export async function getRealtimeConnection(organizationId: string) {
  await requireMember(organizationId);
  return realtimeConnection(organizationId);
}

/** Where this tab opens the files employees send people in their work, or null without a Worker (MC-287). */
export async function getWorkFiles(organizationId: string) {
  await requireMember(organizationId);
  return realtimeFiles(organizationId);
}

/**
 * Where to read files the employee named from its computer, by path (MC-315): only for the person whose computer it
 * is, and while FILE_LINKS is on. Null when they may not.
 */
export async function getFileLinkAccess(organizationId: string, employeeId: string) {
  if (!FILE_LINKS) return null;
  const userId = await requireMember(organizationId);
  const id = text(employeeId, "employeeId", { required: true });
  if (!(await ownsEmployeeComputer(organizationId, id, userId))) return null;
  return realtimePathAccess(organizationId, id);
}

/** The signed-in person's direct conversations with employees, newest first. */
export async function getDirectThreads(organizationId: string): Promise<DirectThread[]> {
  const userId = await requireMember(organizationId);
  return directThreadsOfUser(organizationId, userId);
}

/** How many replies in each employee's work the signed-in person hasn't seen, and when each last replied (MC-280). */
export async function getWorkReplies(organizationId: string): Promise<WorkReplies> {
  const userId = await requireMember(organizationId);
  return workRepliesOf(organizationId, userId);
}

/** Marks the employee's work unread for the signed-in person (MC-310). */
export async function unreadWork(organizationId: string, employeeId: string): Promise<void> {
  const userId = await requireMember(organizationId);
  await markWorkUnread(organizationId, userId, text(employeeId, "employeeId", { required: true }));
}

/** Pins the conversation to the top of the signed-in person's Messages list, or unpins it (MC-310). */
export async function pinWork(organizationId: string, employeeId: string, pinned: boolean): Promise<void> {
  const userId = await requireMember(organizationId);
  await pinConversation(organizationId, userId, text(employeeId, "employeeId", { required: true }), pinned === true);
}

/** The signed-in person has seen the employee's work. */
export async function readWork(organizationId: string, employeeId: string): Promise<void> {
  const userId = await requireMember(organizationId);
  await markWorkRead(organizationId, userId, text(employeeId, "employeeId", { required: true }));
}

/**
 * The signed-in person's conversation with the employee: its latest messages, oldest first, or those before the
 * message `before` for an older page. Reading the latest marks them read.
 */
export async function getDirectMessages(
  organizationId: string,
  employeeId: string,
  before?: number,
): Promise<{ messages: DirectMessage[]; hasMore: boolean }> {
  const userId = await requireMember(organizationId);
  if (before !== undefined && !Number.isInteger(before)) throw new Error("before must be a message id");
  return readDirectMessages(organizationId, { userId, employeeId: text(employeeId, "employeeId", { required: true }) }, "user", {
    before,
  });
}

/** Sends the employee a direct message from the signed-in person; its agent gets it at once. */
export async function sendDirectMessageTo(organizationId: string, employeeId: string, body: string): Promise<DirectMessage> {
  const userId = await requireMember(organizationId);
  return sendDirectMessage(organizationId, { userId, employeeId: text(employeeId, "employeeId", { required: true }) }, "user", body);
}

/** Passes what the signed-in person wrote in the employee's work log on to its agent's conversation (MC-249). */
export async function writeToEmployee(organizationId: string, employeeId: string, body: string): Promise<void> {
  const userId = await requireMember(organizationId);
  await writeToConversation(organizationId, { userId, employeeId: text(employeeId, "employeeId", { required: true }) }, body);
}

/** Comments on the issue as the signed-in person. */
export async function commentOnIssue(organizationId: string, issueId: string, body: string): Promise<IssueActivity> {
  const userId = await requireMember(organizationId);
  return addComment(organizationId, issueId, body, { userId });
}

/**
 * Starts uploading an image pasted into a description or comment: records it and says where the browser sends the
 * file. Only the organization's members can open it afterwards.
 */
export async function createImageUpload(
  organizationId: string,
  file: { name: string; type: string; size: number },
): Promise<ImageUpload> {
  const userId = await requireMember(organizationId);
  const { attachment, upload } = await startUpload(organizationId, file, userId);
  return { url: `/api/attachments/${attachment.id}`, upload };
}

/**
 * A one-time setup token for connecting an AI agent as the employee. The setup prompt shown in the dashboard points
 * the agent at /setup/<token>; it works for an hour.
 */
export async function createAgentSetupToken(
  organizationId: string,
  employeeId: string,
): Promise<{ token: string; expiresAt: string }> {
  const userId = await requireMember(organizationId);
  await assertInOrganization(employees, [text(employeeId, "employeeId", { required: true })], organizationId);
  const { token, expiresAt } = await createSetupToken(organizationId, employeeId, userId);
  return { token, expiresAt: expiresAt.toISOString() };
}

/**
 * A one-time login for the command that installs the crewmark CLI on the person's computer (MC-421): the CLI comes up
 * logged in as them, and its daemon connects the computer, so they can start employees there from here.
 */
export async function createInstallLogin(organizationId: string): Promise<{ secret: string }> {
  const userId = await requireMember(organizationId);
  return { secret: await startInstallLogin(organizationId, userId) };
}

/** The person's computers Crewmark can start an employee on, without a setup prompt (MC-292). */
export async function getDevices(organizationId: string): Promise<Device[]> {
  const userId = await requireMember(organizationId);
  return listDevices(organizationId, userId);
}

/**
 * Starts the employee on one of the person's computers, in a folder employees already work in there: its daemon
 * connects it and starts a conversation as it. Says why when it can't.
 */
export async function startEmployeeOnDevice(
  organizationId: string,
  employeeId: string,
  deviceId: string,
  workdir: string,
  agent = "claude-code",
): Promise<{ ok: true } | { ok: false; error: string }> {
  const userId = await requireMember(organizationId);
  await assertInOrganization(employees, [text(employeeId, "employeeId", { required: true })], organizationId);
  return startOnDevice(organizationId, userId, {
    employeeId,
    deviceId: text(deviceId, "deviceId", { required: true }),
    workdir: text(workdir, "workdir", { required: true }),
    agent: text(agent, "agent", { required: true }),
  });
}

/** The employee's connected AI agent, or null; the dashboard polls it while waiting for a setup to finish. */
export async function getAgentConnection(organizationId: string, employeeId: string): Promise<AgentConnection | null> {
  await requireMember(organizationId);
  const connection = await getConnection(organizationId, text(employeeId, "employeeId", { required: true }));
  if (!connection) return null;
  const { platform, connectedAt, lastUsedAt, ...rest } = connection;
  return { ...rest, connectedAt: connectedAt.toISOString(), lastUsedAt: lastUsedAt?.toISOString() ?? null };
}

/**
 * Lets a waiting `crewmark login` act for the signed-in user in one of their organizations, from the page the CLI
 * pointed them to. Returns false when the login isn't waiting any more.
 */
export async function approveCliLogin(code: string, organizationId: string): Promise<boolean> {
  const userId = await requireMember(organizationId);
  return answerCliLogin(text(code, "code", { required: true }), userId, { organizationId });
}

/** Turns down a waiting `crewmark login`. */
export async function denyCliLogin(code: string): Promise<boolean> {
  const userId = await requireUserId();
  return answerCliLogin(text(code, "code", { required: true }), userId, "deny");
}

/** Signs one of the user's computers out of the crewmark CLI. */
export async function revokeCliLogin(keyId: string): Promise<void> {
  const userId = await requireUserId();
  await revokeCliKey(userId, text(keyId, "keyId", { required: true }));
}

/** Creates an organization with the signed-in user as its owner and returns its slug. */
export async function createOrganization(name: string): Promise<string> {
  await requireUserId();
  const trimmed = text(name, "name", { required: true }).trim().slice(0, 80);
  const created = await auth.api.createOrganization({
    body: { name: trimmed, slug: await freeOrganizationSlug(trimmed) },
    headers: await headers(),
  });
  if (!created) throw new Error("Couldn't create the organization");
  return created.slug;
}
