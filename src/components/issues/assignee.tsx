"use client";

import * as React from "react";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { UserAvatar } from "@/components/user-avatar";
import type { Employee, User } from "@/lib/types";

/** Who an issue is assigned to: a digital employee or a person. */
export type Assignee = { name: string } & ({ employee: Employee; user?: never } | { user: User; employee?: never });

/** Looks up an issue's assigneeId among the page's employees and people. */
export function useFindAssignee() {
  const { employees, users } = useCrewStore();
  return React.useCallback(
    (id: string | null): Assignee | undefined => {
      if (id === null) return undefined;
      const employee = employees.find((e) => e.id === id);
      if (employee) return { employee, name: employee.name };
      const user = users.find((u) => u.id === id);
      return user && { user, name: user.username };
    },
    [employees, users],
  );
}

/**
 * Whether an issue in the project can be the employee's: only if it's on the project, or any for an issue without
 * one. People, and employees on no project, can take any issue. The server holds to the same rule.
 */
export function onProject(employee: Employee, projectId: string | null) {
  return projectId === null || employee.projectIds.length === 0 || employee.projectIds.includes(projectId);
}

/** The assignee's picture, sized to sit beside 13px text. */
export function AssigneeAvatar({ assignee }: { assignee: Assignee }) {
  return assignee.employee ? (
    <EmployeeAvatar employee={assignee.employee} size="sm" />
  ) : (
    <UserAvatar user={assignee.user} />
  );
}
