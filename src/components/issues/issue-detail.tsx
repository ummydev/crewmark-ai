"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore, useOrgPath } from "@/components/crew-store";
import { DeleteMenu } from "@/components/delete-menu";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { onProject } from "@/components/issues/assignee";
import { IssueActivitySection } from "@/components/issues/issue-activity";
import { RepeatField } from "@/components/issues/repeat-field";
import {
  AssigneeSelect,
  PrioritySelect,
  ProjectSelect,
  StatusSelect,
} from "@/components/issues/issue-fields";
import { MarkdownEditor } from "@/components/markdown-editor";
import { useImageUpload } from "@/components/use-image-upload";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { runtimeLabel, type Employee, type User } from "@/lib/types";

const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" });

function Breadcrumb({ issueKey, title }: { issueKey: string; title?: string }) {
  const orgPath = useOrgPath();
  return (
    <>
      <Link href={orgPath("/issues")} className="text-muted-foreground hover:text-foreground">
        Issues
      </Link>
      <ChevronRightIcon className="size-3.5 text-muted-foreground" />
      <span className="text-muted-foreground tabular-nums">{issueKey}</span>
      {title && <span className="truncate">{title}</span>}
    </>
  );
}

export function IssueDetail({ issueKey }: { issueKey: string }) {
  const { issues, employees, users, updateIssue, deleteIssue, orgPath } = useCrewStore();
  const router = useRouter();
  const { upload } = useImageUpload();
  const issue = issues.find((i) => i.key === issueKey);

  if (!issue) {
    return (
      <>
        <PageHeader title={<Breadcrumb issueKey={issueKey} />} />
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="font-medium">Issue {issueKey} not found</p>
          <p className="text-sm text-muted-foreground">It may have been deleted, or the link is wrong.</p>
          <Button variant="outline" size="sm" nativeButton={false} render={<Link href={orgPath("/issues")} />}>
            Back to issues
          </Button>
        </div>
      </>
    );
  }

  const assignee = employees.find((e) => e.id === issue.assigneeId);
  const creatorEmployee = employees.find((e) => e.id === issue.createdByEmployeeId);
  const creatorUser = users.find((u) => u.id === issue.createdByUserId);

  return (
    <>
      <PageHeader
        title={<Breadcrumb issueKey={issue.key} title={issue.title} />}
        actions={
          <DeleteMenu
            label="Delete issue"
            title={`Delete ${issue.key}?`}
            description="It's gone for good, with its description. This can't be undone."
            onDelete={async () => {
              // Leave first, so the page doesn't show the issue as not found on the way out.
              router.push(orgPath("/issues"));
              await deleteIssue(issue.id);
              toast.success(`${issue.key} deleted`);
            }}
          />
        }
      />
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
        <main className="min-w-0 flex-1 lg:overflow-y-auto">
          <div className="mx-auto grid max-w-3xl gap-3 px-6 py-10 lg:px-10">
            <textarea
              aria-label="Title"
              value={issue.title}
              onChange={(e) => updateIssue(issue.id, { title: e.target.value })}
              placeholder="Issue title"
              rows={1}
              className="field-sizing-content resize-none bg-transparent text-2xl font-semibold outline-none placeholder:text-muted-foreground"
            />
            <MarkdownEditor
              key={issue.id}
              value={issue.description}
              onChange={(description) => updateIssue(issue.id, { description })}
              uploadImage={upload}
              placeholder="Add a description… Markdown shortcuts like ## or - work too."
            />
            <IssueActivitySection issue={issue} />
          </div>
        </main>

        <aside className="shrink-0 border-t border-rule lg:w-80 lg:overflow-y-auto lg:border-t-0 lg:border-l">
          <div className="grid gap-6 p-5">
            <section className="grid gap-1">
              <h2 className="mb-2 text-[13px] font-medium">Properties</h2>
              <Property label="Status">
                <StatusSelect
                  variant="ghost"
                  value={issue.status}
                  onChange={(status) => updateIssue(issue.id, { status })}
                />
              </Property>
              <Property label="Priority">
                <PrioritySelect
                  variant="ghost"
                  value={issue.priority}
                  onChange={(priority) => updateIssue(issue.id, { priority })}
                />
              </Property>
              <Property label="Assignee">
                <AssigneeSelect
                  variant="ghost"
                  value={issue.assigneeId}
                  onChange={(assigneeId) => updateIssue(issue.id, { assigneeId })}
                  projectId={issue.projectId}
                />
              </Property>
              <Property label="Project">
                <ProjectSelect
                  variant="ghost"
                  value={issue.projectId}
                  // As the server does: moving it to a project its employee isn't on unassigns them.
                  onChange={(projectId) =>
                    updateIssue(
                      issue.id,
                      assignee && !onProject(assignee, projectId) ? { projectId, assigneeId: null } : { projectId },
                    )
                  }
                />
              </Property>
              <Property label="Repeat">
                <RepeatField issue={issue} onChange={(patch) => updateIssue(issue.id, patch)} />
              </Property>
              <Property label="Creator">
                <Creator employee={creatorEmployee} user={creatorUser} />
              </Property>
              <Property label="Created">
                <time dateTime={issue.createdAt} className="text-[13px]" suppressHydrationWarning>
                  {dateFormat.format(new Date(issue.createdAt))}
                </time>
              </Property>
            </section>

            {assignee && <AssigneeCard employee={assignee} />}
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

function Creator({ employee, user }: { employee?: Employee; user?: User }) {
  if (employee) {
    return (
      <div className="flex items-center gap-2 text-[13px]">
        <EmployeeAvatar employee={employee} size="sm" />
        <span className="truncate">{employee.name}</span>
        <Badge variant="secondary">Agent</Badge>
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex items-center gap-2 text-[13px]">
        <UserAvatar user={user} />
        <span className="truncate">{user.username}</span>
      </div>
    );
  }
  return <span className="text-[13px] text-muted-foreground">Unknown</span>;
}

function AssigneeCard({ employee }: { employee: Employee }) {
  const orgPath = useOrgPath();
  return (
    <section className="grid gap-3 rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <EmployeeAvatar employee={employee} />
        <div className="grid min-w-0">
          <Link href={orgPath(`/employees/${employee.id}`)} className="truncate text-sm font-medium hover:underline">
            {employee.name}
          </Link>
          <span className="truncate text-xs text-muted-foreground">
            {employee.role} · {runtimeLabel(employee.runtime)}
          </span>
        </div>
      </div>
      {employee.kpi && (
        <div className="grid gap-1">
          <h3 className="text-xs font-medium text-muted-foreground">KPIs</h3>
          <p className="text-sm whitespace-pre-line">{employee.kpi}</p>
        </div>
      )}
    </section>
  );
}

export function IssueDetailSkeleton() {
  return (
    <>
      <PageHeader title={<Skeleton className="h-4 w-28" />} />
      <div className="mx-auto grid w-full max-w-3xl gap-4 px-6 py-8">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-40 w-full" />
      </div>
    </>
  );
}
