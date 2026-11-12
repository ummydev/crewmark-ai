"use client";

import * as React from "react";
import { KanbanSquareIcon, PlusIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { KanbanBoard } from "@/components/issues/kanban-board";
import { NewIssueDialog } from "@/components/issues/new-issue-dialog";
import { PageHeader } from "@/components/page-header";
import { ProjectFilter, useProjectFilter } from "@/components/project-filter";
import { Button } from "@/components/ui/button";
import type { IssueStatus } from "@/lib/types";

/** The organization-wide board, filtered by project from a row of toggles under the header. */
export function AllIssuesView() {
  const { issues } = useCrewStore();
  const [projectId, setProjectId] = useProjectFilter();

  return (
    <IssuesView
      projectId={projectId}
      toolbar={
        <ProjectFilter
          value={projectId}
          onChange={setProjectId}
          count={(id) => (id ? issues.filter((i) => i.projectId === id).length : issues.length)}
        />
      }
    />
  );
}

export function IssuesView({
  projectId,
  icon = <KanbanSquareIcon />,
  title = "Issues",
  toolbar,
}: {
  /** Scopes the board, and new issues, to a project. */
  projectId?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
}) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogStatus, setDialogStatus] = React.useState<IssueStatus>("todo");

  function openNewIssue(status: IssueStatus = "todo") {
    setDialogStatus(status);
    setDialogOpen(true);
  }

  return (
    <>
      <PageHeader
        icon={icon}
        title={title}
        toolbar={toolbar}
        actions={
          <Button variant="outline" size="sm" className="text-[13px]" onClick={() => openNewIssue()}>
            <PlusIcon />
            New issue
          </Button>
        }
      />
      <div className="min-h-0 flex-1">
        <KanbanBoard projectId={projectId} onCreateIssue={openNewIssue} />
      </div>
      <NewIssueDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultStatus={dialogStatus}
        defaultProjectId={projectId}
      />
    </>
  );
}
