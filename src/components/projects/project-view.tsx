"use client";

import Link from "next/link";

import { useCrewStore } from "@/components/crew-store";
import { EmployeesView } from "@/components/employees/employees-view";
import { IssuesView } from "@/components/issues/issues-view";
import { ProjectEmojiPicker } from "@/components/projects/project-avatar";
import { PageHeader, SegmentCount, SegmentedNav, segmentClass } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type ProjectTab = "issues" | "employees";

const TABS = [
  { value: "issues", label: "Issues" },
  { value: "employees", label: "Employees" },
] as const;

/** A project's page inside the organization; wrap it in the store's orgPath. */
export function projectPath(projectId: string, tab: ProjectTab = "issues") {
  return `/projects/${projectId}/${tab}`;
}

/** A project page: the regular Issues board or Employees list, scoped to one project. */
export function ProjectView({ projectId, tab }: { projectId: string; tab: ProjectTab }) {
  const { projects, issues, employees, updateProject, orgPath } = useCrewStore();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <>
        <PageHeader title="Project not found" />
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="font-medium">Project not found</p>
          <p className="text-sm text-muted-foreground">It may have been deleted, or the link is wrong.</p>
          <Button variant="outline" nativeButton={false} render={<Link href={orgPath("/issues")} />}>
            Back to issues
          </Button>
        </div>
      </>
    );
  }

  const counts: Record<ProjectTab, number> = {
    issues: issues.filter((i) => i.projectId === project.id).length,
    employees: employees.filter((e) => e.projectIds.includes(project.id)).length,
  };

  const title = project.name;
  // The avatar sits where other pages have a 16px icon; the negative margin keeps the title aligned.
  const icon = (
    <ProjectEmojiPicker
      value={project.emoji}
      onChange={(emoji) => updateProject(project.id, { emoji })}
      className="-mx-0.5"
    />
  );
  const toolbar = (
    <SegmentedNav label="Project sections">
      {TABS.map((t) => {
        const active = t.value === tab;
        return (
          <Link
            key={t.value}
            href={orgPath(projectPath(project.id, t.value))}
            aria-current={active ? "page" : undefined}
            className={segmentClass(active)}
          >
            {t.label}
            <SegmentCount>{counts[t.value]}</SegmentCount>
          </Link>
        );
      })}
    </SegmentedNav>
  );

  return tab === "issues" ? (
    <IssuesView projectId={project.id} icon={icon} title={title} toolbar={toolbar} />
  ) : (
    <EmployeesView projectId={project.id} icon={icon} title={title} toolbar={toolbar} />
  );
}

export function ProjectViewSkeleton() {
  return (
    <>
      <PageHeader title={<Skeleton className="h-4 w-28" />} />
      <div className="flex gap-3 p-4">
        {Array.from({ length: 3 }, (_, i) => (
          <Skeleton key={i} className="h-64 w-72 rounded-xl" />
        ))}
      </div>
    </>
  );
}
