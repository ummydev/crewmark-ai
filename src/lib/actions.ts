"use server";

import { headers } from "next/headers";

import {
  deleteEmployee as removeEmployee,
  insertEmployee,
  saveEmployee,
  type EmployeePatch,
  type NewEmployeeInput,
} from "@/db/employees";
import {
  assertInOrganization,
  deleteIssue as removeIssue,
  insertIssue,
  updateIssue as saveIssue,
  type IssuePatch,
  type NewIssueInput,
} from "@/db/issues";
import { insertAttachment } from "@/db/attachments";
import { addComment, listActivity } from "@/db/issue-activity";
import { insertProject, saveProject, type ProjectPatch } from "@/db/projects";
import { employees } from "@/db/schema";
import { createSetupToken, getConnection } from "@/lib/agent-auth";
import { storage, uploadTarget } from "@/lib/attachments";
import { auth, freeOrganizationSlug, requireMember, requireUserId } from "@/lib/auth";
import { answerCliLogin, revokeCliKey } from "@/lib/cli-auth";
import { realtimeConnection } from "@/lib/realtime";
import type { AgentConnection, Employee, ImageUpload, Issue, IssueActivity, Project } from "@/lib/types";
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

/** The issue's comments and changes, oldest first. */
export async function getIssueActivity(organizationId: string, issueId: string): Promise<IssueActivity[]> {
  await requireMember(organizationId);
  return listActivity(organizationId, text(issueId, "issueId", { required: true }));
}

/** Where this tab opens its socket for pushes, or null when Crewmark has none (see src/lib/realtime.ts). */
export async function getRealtimeConnection(organizationId: string) {
  await requireMember(organizationId);
  return realtimeConnection(organizationId);
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
  storage(); // Throws before recording anything when uploads aren't set up here.
  const attachment = await insertAttachment(organizationId, file, userId);
  return { url: `/api/attachments/${attachment.id}`, upload: await uploadTarget(attachment) };
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
