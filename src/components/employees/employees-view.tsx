"use client";

import * as React from "react";
import Link from "next/link";
import { PlusIcon, UsersIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { EMPLOYEE_STATUS_DOT } from "@/components/employees/employee-fields";
import { NewEmployeeDialog } from "@/components/employees/new-employee-dialog";
import { RuntimeLogo } from "@/components/employees/runtime-logo";
import { PageHeader } from "@/components/page-header";
import { ProjectPills } from "@/components/projects/project-pills";
import { ProjectFilter, useProjectFilter } from "@/components/project-filter";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fullDate, timeAgo } from "@/lib/format";
import { cn } from "@/lib/utils";
import { EMPLOYEE_STATUSES, runtimeLabel } from "@/lib/types";

const HEAD = "h-10 text-[13px] font-normal text-muted-foreground";
const CELL = "py-3.5 group-hover:bg-muted/60 first:rounded-l-lg last:rounded-r-lg";

/** The organization-wide list, filtered by project from a row of toggles under the header. */
export function AllEmployeesView() {
  const { employees } = useCrewStore();
  const [projectId, setProjectId] = useProjectFilter();

  return (
    <EmployeesView
      projectId={projectId}
      toolbar={
        <ProjectFilter
          value={projectId}
          onChange={setProjectId}
          count={(id) => (id ? employees.filter((e) => e.projectIds.includes(id)).length : employees.length)}
        />
      }
    />
  );
}

export function EmployeesView({
  projectId,
  icon = <UsersIcon />,
  title = "Employees",
  toolbar,
}: {
  /** Scopes the list, and new employees, to a project. */
  projectId?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
}) {
  const { employees: allEmployees, issues, orgPath } = useCrewStore();
  const employees = projectId
    ? allEmployees.filter((e) => e.projectIds.includes(projectId))
    : allEmployees;
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openIssueCounts = React.useMemo(() => {
    const counts = new Map<string, number>();
    for (const issue of issues) {
      if (projectId && issue.projectId !== projectId) continue;
      if (issue.assigneeId && issue.status !== "done") {
        counts.set(issue.assigneeId, (counts.get(issue.assigneeId) ?? 0) + 1);
      }
    }
    return counts;
  }, [issues, projectId]);

  return (
    <>
      <PageHeader
        icon={icon}
        title={title}
        toolbar={toolbar}
        actions={
          <Button variant="outline" size="sm" className="text-[13px]" onClick={() => setDialogOpen(true)}>
            <PlusIcon />
            New employee
          </Button>
        }
      />
      <div className="flex-1 overflow-auto px-2 pb-4">
        {/* No row rules: rows are told apart by spacing, and a hovered row fills as one rounded band. */}
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="hover:bg-transparent">
              <TableHead className={cn(HEAD, "min-w-40 pl-2 sm:min-w-48")}>Employee</TableHead>
              <TableHead className={cn(HEAD, "hidden md:table-cell")}>Projects</TableHead>
              <TableHead className={HEAD}>Status</TableHead>
              <TableHead className={cn(HEAD, "hidden sm:table-cell")}>Runtime</TableHead>
              <TableHead className={cn(HEAD, "hidden md:table-cell")}>Last active</TableHead>
              <TableHead className={cn(HEAD, "hidden w-[34%] xl:table-cell")}>KPIs</TableHead>
              <TableHead className={cn(HEAD, "pr-2 text-right")}>Open issues</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.length === 0 && (
              <TableRow className="border-0 hover:bg-transparent">
                <TableCell colSpan={7} className="py-10 text-center text-[13px] text-muted-foreground">
                  {projectId ? "No employees in this project yet." : "No employees yet."}
                </TableCell>
              </TableRow>
            )}
            {employees.map((employee) => (
              // The name link stretches over the whole row, so any click opens the employee.
              <TableRow key={employee.id} className="group relative cursor-pointer border-0 hover:bg-transparent">
                <TableCell className={cn(CELL, "pl-2")}>
                  <div className="flex items-center gap-3">
                    <EmployeeAvatar employee={employee} />
                    <div className="grid min-w-0 gap-1 leading-tight">
                      <Link
                        href={orgPath(`/employees/${employee.id}`)}
                        className="truncate font-medium outline-none after:absolute after:inset-0 focus-visible:underline"
                      >
                        {employee.name}
                      </Link>
                      <span className="truncate text-xs text-muted-foreground">{employee.role || "—"}</span>
                    </div>
                  </div>
                </TableCell>
                {/* Plain pills: the whole row already opens the employee. */}
                <TableCell className={cn(CELL, "hidden md:table-cell")}>
                  <ProjectPills projectIds={employee.projectIds} />
                </TableCell>
                <TableCell className={CELL}>
                  <div className="flex items-center gap-2 text-[13px]">
                    <span className={cn("size-1.5 rounded-full", EMPLOYEE_STATUS_DOT[employee.status])} />
                    {EMPLOYEE_STATUSES[employee.status]}
                  </div>
                </TableCell>
                <TableCell className={cn(CELL, "hidden sm:table-cell")}>
                  <div className="flex items-center gap-1.5 text-[13px]">
                    <RuntimeLogo runtime={employee.runtime} />
                    {runtimeLabel(employee.runtime)}
                  </div>
                </TableCell>
                <TableCell className={cn(CELL, "hidden text-[13px] md:table-cell")}>
                  {employee.lastActiveAt ? (
                    <time
                      dateTime={employee.lastActiveAt}
                      title={fullDate.format(new Date(employee.lastActiveAt))}
                      suppressHydrationWarning
                    >
                      {timeAgo(employee.lastActiveAt)}
                    </time>
                  ) : (
                    <span className="text-muted-foreground">Never</span>
                  )}
                </TableCell>
                <TableCell className={cn(CELL, "hidden max-w-0 xl:table-cell")}>
                  <p className="truncate text-[13px] text-muted-foreground" title={employee.kpi || undefined}>
                    {employee.kpi || "—"}
                  </p>
                </TableCell>
                <TableCell className={cn(CELL, "pr-2 text-right text-[13px] tabular-nums")}>
                  {openIssueCounts.get(employee.id) ?? 0}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <NewEmployeeDialog open={dialogOpen} onOpenChange={setDialogOpen} projectId={projectId} />
    </>
  );
}
