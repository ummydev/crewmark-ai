"use client";

import * as React from "react";
import { toast } from "sonner";

import type { OrganizationData } from "@/db/queries";
import {
  createEmployee,
  createIssue,
  createProject,
  deleteEmployee as removeEmployee,
  deleteIssue as removeIssue,
  updateEmployee as saveEmployee,
  updateIssue as saveIssue,
  updateProject as saveProject,
  type EmployeePatch,
  type IssuePatch,
  type ProjectPatch,
  type NewEmployeeInput,
  type NewIssueInput,
} from "@/lib/actions";
import { identify, track } from "@/lib/analytics";
import type { AgentRuntime, Employee, Issue, MemberRole, Organization, Project, User } from "@/lib/types";

// Client-side copy of one organization's data, seeded from the database on each page load.
// Edits apply locally right away and are saved to Neon in the background through Server Actions, which check that
// the signed-in user belongs to the organization.

interface CrewStore {
  /** The organization on screen, from /org/<slug>. */
  organization: Organization;
  /** The signed-in person's role in it. */
  role: MemberRole;
  /** Every organization the signed-in person belongs to, for switching. */
  organizations: Organization[];
  /** A dashboard path inside this organization: "/issues" → "/org/<slug>/issues". */
  orgPath: (path: string) => string;
  /** The signed-in person. */
  currentUser: User;
  /** People shown on the page: members, and people who filed or were assigned an issue and have left since. */
  users: User[];
  /** The organization's members: the people issues can be assigned to. */
  members: User[];
  projects: Project[];
  addProject: (name: string, emoji: string) => Promise<Project>;
  updateProject: (id: string, patch: ProjectPatch) => void;
  employees: Employee[];
  issues: Issue[];
  /** Local-only reorder used while dragging; call moveIssue to save the result. */
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>;
  addEmployee: (employee: NewEmployeeInput) => Promise<Employee>;
  updateEmployee: (id: string, patch: EmployeePatch) => void;
  /** Shows the agent that just connected as the employee's, without reloading (the server already has it). */
  showConnectedAgent: (employeeId: string, runtime: AgentRuntime | null) => void;
  /** Files an issue as the current user. */
  addIssue: (issue: NewIssueInput) => Promise<Issue>;
  updateIssue: (id: string, patch: IssuePatch) => void;
  /** Commits a drag: `next` is the board in its new order, `id` the issue that moved. */
  moveIssue: (next: Issue[], id: string) => void;
  /** Deletes the issue for good; rejects when the server couldn't. */
  deleteIssue: (id: string) => Promise<void>;
  /** Deletes the employee for good. Its issues stay, unassigned; its connected agent is disconnected. */
  deleteEmployee: (id: string) => Promise<void>;
}

const CrewStoreContext = React.createContext<CrewStore | null>(null);

/** Typing in a field saves at most this often. */
const SAVE_DELAY_MS = 400;

function reportSaveError(error: unknown) {
  console.error(error);
  toast.error("Couldn't save your changes. Refresh to see the latest data.");
}

/**
 * Batches rapid patches per record (e.g. one per keystroke) into a single save.
 * Pending saves are flushed when the provider unmounts.
 */
function useDebouncedSaver<P extends object>(save: (id: string, patch: P) => Promise<void>) {
  const pending = React.useRef(new Map<string, { patch: P; timer: ReturnType<typeof setTimeout> }>());
  const saveRef = React.useRef(save);

  const flush = React.useCallback((id: string) => {
    const entry = pending.current.get(id);
    if (!entry) return;
    clearTimeout(entry.timer);
    pending.current.delete(id);
    saveRef.current(id, entry.patch).catch(reportSaveError);
  }, []);

  React.useEffect(() => {
    const queue = pending.current;
    return () => {
      for (const id of [...queue.keys()]) flush(id);
    };
  }, [flush]);

  return React.useCallback(
    (id: string, patch: P) => {
      const previous = pending.current.get(id);
      if (previous) clearTimeout(previous.timer);
      pending.current.set(id, {
        patch: { ...previous?.patch, ...patch } as P,
        timer: setTimeout(() => flush(id), SAVE_DELAY_MS),
      });
    },
    [flush],
  );
}

const TRACKED_ISSUE_FIELDS = [
  ["status", "status"],
  ["priority", "priority"],
  ["assigneeId", "assignee"],
  ["projectId", "project"],
] as const;

/** A position between the moved issue's new neighbours, so only that issue needs saving. */
function positionAt(list: Issue[], index: number) {
  const before = list[index - 1]?.position;
  const after = list[index + 1]?.position;
  if (before !== undefined && after !== undefined) return (before + after) / 2;
  if (before !== undefined) return before + 1;
  if (after !== undefined) return after - 1;
  return 1;
}

export function CrewStoreProvider({
  organization,
  role,
  organizations,
  currentUser,
  initialData,
  children,
}: {
  organization: Organization;
  role: MemberRole;
  organizations: Organization[];
  currentUser: User;
  initialData: OrganizationData;
  children: React.ReactNode;
}) {
  const organizationId = organization.id;
  const [projects, setProjects] = React.useState(initialData.projects);
  const [employees, setEmployees] = React.useState(initialData.employees);
  const [issues, setIssues] = React.useState(initialData.issues);
  const queueEmployeeSave = useDebouncedSaver(
    React.useCallback((id: string, patch: EmployeePatch) => saveEmployee(organizationId, id, patch), [organizationId]),
  );
  const queueIssueSave = useDebouncedSaver(
    React.useCallback((id: string, patch: IssuePatch) => saveIssue(organizationId, id, patch), [organizationId]),
  );
  const orgPath = React.useCallback((path: string) => `/org/${organization.slug}${path}`, [organization.slug]);

  // Everyone who signs in ends up here, so this one call identifies them for PostHog.
  React.useEffect(() => identify(currentUser, organizationId), [currentUser, organizationId]);

  const addProject = React.useCallback(async (name: string, emoji: string) => {
    const project = await createProject(organizationId, name, emoji);
    setProjects((prev) => [...prev, project]);
    track("project created", { emoji: project.emoji });
    return project;
  }, [organizationId]);

  // Project edits are single clicks (e.g. a new emoji), so they save right away.
  const updateProject = React.useCallback((id: string, patch: ProjectPatch) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    saveProject(organizationId, id, patch).catch(reportSaveError);
  }, [organizationId]);

  const addEmployee = React.useCallback(async (input: NewEmployeeInput) => {
    const employee = await createEmployee(organizationId, input);
    setEmployees((prev) => [...prev, employee]);
    track("employee created", {
      status: employee.status,
      project_count: employee.projectIds.length,
      has_kpi: employee.kpi.trim() !== "",
      heartbeat: employee.heartbeat?.enabled ?? false,
    });
    return employee;
  }, [organizationId]);

  const updateEmployee = React.useCallback(
    (id: string, patch: EmployeePatch) => {
      setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, ...patch } : e)));
      queueEmployeeSave(id, patch);
    },
    [queueEmployeeSave],
  );

  const showConnectedAgent = React.useCallback((employeeId: string, runtime: AgentRuntime | null) => {
    setEmployees((prev) => prev.map((e) => (e.id === employeeId ? { ...e, runtime } : e)));
  }, []);

  const addIssue = React.useCallback(async (input: NewIssueInput) => {
    const issue = await createIssue(organizationId, input);
    setIssues((prev) => [...prev, issue]);
    track("issue created", {
      status: issue.status,
      priority: issue.priority,
      assigned: issue.assigneeId !== null,
      in_project: issue.projectId !== null,
    });
    return issue;
  }, [organizationId]);

  const updateIssue = React.useCallback(
    (id: string, patch: IssuePatch) => {
      setIssues((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch } : i)));
      queueIssueSave(id, patch);
      // Title and description change on every keystroke, so only the one-click fields are tracked.
      for (const [key, field] of TRACKED_ISSUE_FIELDS) {
        if (key in patch) track("issue updated", { field });
      }
    },
    [queueIssueSave],
  );

  const moveIssue = React.useCallback((next: Issue[], id: string) => {
    const index = next.findIndex((i) => i.id === id);
    if (index === -1) return;
    const moved = { ...next[index], position: positionAt(next, index) };
    setIssues(next.map((i) => (i.id === id ? moved : i)));
    saveIssue(organizationId, id, { status: moved.status, position: moved.position }).catch(reportSaveError);
    track("issue moved", { status: moved.status });
  }, [organizationId]);

  const deleteIssue = React.useCallback(async (id: string) => {
    await removeIssue(organizationId, id);
    setIssues((prev) => prev.filter((i) => i.id !== id));
    track("issue deleted", {});
  }, [organizationId]);

  const deleteEmployee = React.useCallback(async (id: string) => {
    await removeEmployee(organizationId, id);
    setEmployees((prev) => prev.filter((e) => e.id !== id));
    // As the database does: its issues lose their assignee, and the ones it filed their creator.
    setIssues((prev) =>
      prev.map((i) =>
        i.assigneeId === id || i.createdByEmployeeId === id
          ? {
              ...i,
              assigneeId: i.assigneeId === id ? null : i.assigneeId,
              createdByEmployeeId: i.createdByEmployeeId === id ? null : i.createdByEmployeeId,
            }
          : i,
      ),
    );
    track("employee deleted", {});
  }, [organizationId]);

  const members = React.useMemo(
    () => initialData.users.filter((u) => initialData.memberIds.includes(u.id)),
    [initialData.users, initialData.memberIds],
  );

  const value = React.useMemo(
    () => ({
      organization,
      role,
      organizations,
      orgPath,
      currentUser,
      users: initialData.users,
      members,
      projects,
      addProject,
      updateProject,
      employees,
      issues,
      setIssues,
      addEmployee,
      updateEmployee,
      showConnectedAgent,
      addIssue,
      updateIssue,
      moveIssue,
      deleteIssue,
      deleteEmployee,
    }),
    [organization, role, organizations, orgPath, currentUser, initialData.users, members, projects, employees, issues, addProject, updateProject, addEmployee, updateEmployee, showConnectedAgent, addIssue, updateIssue, moveIssue, deleteIssue, deleteEmployee],
  );

  return <CrewStoreContext.Provider value={value}>{children}</CrewStoreContext.Provider>;
}

export function useCrewStore() {
  const store = React.useContext(CrewStoreContext);
  if (!store) throw new Error("useCrewStore must be used within CrewStoreProvider");
  return store;
}

/** Turns a dashboard path into one inside the current organization: "/issues" → "/org/<slug>/issues". */
export function useOrgPath() {
  return useCrewStore().orgPath;
}
