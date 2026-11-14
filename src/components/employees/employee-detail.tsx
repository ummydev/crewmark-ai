"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRightIcon, MessageCircleIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore, useOrgPath } from "@/components/crew-store";
import { DeleteMenu } from "@/components/delete-menu";
import { EmployeeEmojiPicker } from "@/components/employee-avatar";
import { AgentPanel } from "@/components/employees/connect-agent";
import { EMPLOYEE_STATUS_DOT, EmployeeStatusSelect, RoleField } from "@/components/employees/employee-fields";
import { HeartbeatFields } from "@/components/employees/heartbeat-fields";
import { RuntimeLogo } from "@/components/employees/runtime-logo";
import { PriorityBadge } from "@/components/issues/priority-badge";
import { StatusIcon } from "@/components/issues/status-icon";
import { ProjectPills } from "@/components/projects/project-pills";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { EMPLOYEE_STATUSES, ISSUE_STATUSES, runtimeLabel, type Issue } from "@/lib/types";

function Breadcrumb({ name }: { name: string }) {
  const orgPath = useOrgPath();
  return (
    <>
      <Link href={orgPath("/employees")} className="text-muted-foreground hover:text-foreground">
        Employees
      </Link>
      <ChevronRightIcon className="size-3.5 text-muted-foreground" />
      <span className="truncate">{name}</span>
    </>
  );
}

export function EmployeeDetail({ employeeId }: { employeeId: string }) {
  const { employees, issues, updateEmployee, deleteEmployee, orgPath } = useCrewStore();
  const router = useRouter();
  const employee = employees.find((e) => e.id === employeeId);

  if (!employee) {
    return (
      <>
        <PageHeader title={<Breadcrumb name="Not found" />} />
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="font-medium">Employee not found</p>
          <p className="text-sm text-muted-foreground">They may have been removed, or the link is wrong.</p>
          <Button variant="outline" nativeButton={false} render={<Link href={orgPath("/employees")} />}>
            Back to employees
          </Button>
        </div>
      </>
    );
  }

  const update = (patch: Parameters<typeof updateEmployee>[1]) => updateEmployee(employee.id, patch);
  const assigned = issues.filter((i) => i.assigneeId === employee.id);
  // Open work first, then by board order.
  const sortedAssigned = [...assigned].sort(
    (a, b) => Number(a.status === "done") - Number(b.status === "done"),
  );

  return (
    <>
      <PageHeader
        title={<Breadcrumb name={employee.name || "Untitled"} />}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href={orgPath(`/messages/${employee.id}`)} />}
            >
              <MessageCircleIcon />
              Message
            </Button>
            <DeleteMenu
              label="Delete employee"
              title={`Delete ${employee.name || "this employee"}?`}
              description={
                "Its issues stay, unassigned. Its connected agent is disconnected and can't use Crewmark any more. " +
                "This can't be undone."
              }
              onDelete={async () => {
                // Leave first, so the page doesn't show the employee as not found on the way out.
                router.push(orgPath("/employees"));
                await deleteEmployee(employee.id);
                toast.success(`${employee.name || "The employee"} was deleted`);
              }}
            />
          </>
        }
      />
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
        <main className="min-w-0 flex-1 lg:overflow-y-auto">
          <div className="mx-auto grid max-w-3xl gap-7 px-6 py-10 lg:px-10">
            <div className="flex items-center gap-4">
              <EmployeeEmojiPicker employee={employee} onChange={(emoji) => update({ emoji })} />
              <div className="grid min-w-0 flex-1 gap-1">
                <input
                  aria-label="Name"
                  value={employee.name}
                  onChange={(e) => update({ name: e.target.value })}
                  placeholder="Employee name"
                  className="min-w-0 bg-transparent text-2xl font-semibold outline-none placeholder:text-muted-foreground"
                />
                <p className="flex flex-wrap items-center gap-x-2 text-[13px] text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <span className={cn("size-1.5 rounded-full", EMPLOYEE_STATUS_DOT[employee.status])} />
                    {EMPLOYEE_STATUSES[employee.status]}
                  </span>
                  <span aria-hidden>·</span>
                  <span className="flex items-center gap-1.5">
                    <RuntimeLogo runtime={employee.runtime} />
                    {runtimeLabel(employee.runtime)}
                  </span>
                  {employee.role && (
                    <>
                      <span aria-hidden>·</span>
                      <span>{employee.role}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="employee-role" className="text-[13px]">Role</Label>
              <RoleField id="employee-role" value={employee.role} onChange={(role) => update({ role })} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="employee-description" className="text-[13px]">Responsibilities</Label>
              <Textarea
                id="employee-description"
                placeholder="What this employee owns and how it should work…"
                value={employee.description}
                onChange={(e) => update({ description: e.target.value })}
                className="min-h-28"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="employee-kpi" className="text-[13px]">KPIs</Label>
              <Textarea
                id="employee-kpi"
                placeholder="e.g. Grow Google Search Console impressions to 100k / month"
                value={employee.kpi}
                onChange={(e) => update({ kpi: e.target.value })}
                className="min-h-28"
              />
              <p className="text-xs text-muted-foreground">
                Handed to the agent session as-is, so it knows what it is measured on.
              </p>
            </div>
          </div>
        </main>

        <aside className="shrink-0 border-t border-rule lg:w-80 lg:overflow-y-auto lg:border-t-0 lg:border-l">
          {/* Flex columns rather than grids, so long issue titles truncate instead of widening the panel. */}
          <div className="flex flex-col gap-6 p-5">
            <section className="flex flex-col gap-1">
              <h2 className="mb-2 text-[13px] font-medium">Properties</h2>
              <Property label="Status">
                <EmployeeStatusSelect
                  variant="ghost"
                  value={employee.status}
                  onChange={(status) => update({ status })}
                />
              </Property>
              <Property label="Runtime">
                <span
                  className="flex items-center gap-1.5 text-[13px]"
                  title="Reported by the agent when it connects"
                >
                  <RuntimeLogo runtime={employee.runtime} />
                  {runtimeLabel(employee.runtime)}
                </span>
              </Property>
              <Property label="Projects">
                <ProjectPills projectIds={employee.projectIds} links className="py-1" />
              </Property>
            </section>

            <AgentPanel employee={employee} />

            <section>
              <HeartbeatFields
                value={employee.heartbeat}
                onChange={(heartbeat) => update({ heartbeat })}
                runtime={employee.runtime}
              />
            </section>

            <section className="flex flex-col gap-1">
              <h2 className="mb-1 flex items-baseline gap-2 text-[13px] font-medium">
                Assigned issues
                <span className="font-normal text-muted-foreground">
                  {assigned.filter((i) => i.status !== "done").length} open
                </span>
              </h2>
              {sortedAssigned.length === 0 ? (
                <p className="rounded-lg border border-dashed p-3 text-center text-[13px] text-muted-foreground">
                  No issues assigned yet.
                </p>
              ) : (
                <ul className="-mx-2 flex flex-col">
                  {sortedAssigned.map((issue) => (
                    <AssignedIssue key={issue.id} issue={issue} />
                  ))}
                </ul>
              )}
            </section>
          </div>
        </aside>
      </div>
    </>
  );
}

function Property({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid min-h-8 grid-cols-[5.5rem_1fr] items-center gap-2">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function AssignedIssue({ issue }: { issue: Issue }) {
  const orgPath = useOrgPath();
  const status = ISSUE_STATUSES.find((s) => s.value === issue.status);
  return (
    <li>
      <Link
        href={orgPath(`/issues/${issue.key}`)}
        className={cn(
          "flex h-8 items-center gap-2 rounded-md px-2 text-[13px] transition-colors hover:bg-muted",
          issue.status === "done" && "text-muted-foreground",
        )}
      >
        <span title={status?.label}>
          <StatusIcon status={issue.status} />
        </span>
        <span className="text-muted-foreground tabular-nums">{issue.key}</span>
        <span className="min-w-0 flex-1 truncate">{issue.title}</span>
        {issue.priority !== "none" && <PriorityBadge priority={issue.priority} />}
      </Link>
    </li>
  );
}

export function EmployeeDetailSkeleton() {
  return (
    <>
      <PageHeader title={<Skeleton className="h-4 w-28" />} />
      <div className="mx-auto grid w-full max-w-3xl gap-6 px-6 py-8">
        <div className="flex items-center gap-4">
          <Skeleton className="size-14 rounded-full" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-28 w-full" />
      </div>
    </>
  );
}
