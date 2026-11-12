"use client";

import * as React from "react";
import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useOrgPath } from "@/components/crew-store";
import { AssigneeAvatar, type Assignee } from "@/components/issues/assignee";
import { PriorityBadge } from "@/components/issues/priority-badge";
import { fullDate, timeAgo } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Issue } from "@/lib/types";

export function IssueCard({
  issue,
  assignee,
  overlay = false,
  interactive = false,
}: {
  issue: Issue;
  assignee: Assignee | undefined;
  /** Rendered inside the DragOverlay (the copy that follows the pointer). */
  overlay?: boolean;
  /** Adds a hover state when the card links to the issue. */
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-card px-3 py-2.5 text-sm",
        overlay && "rotate-1 cursor-grabbing shadow-float",
        interactive && "transition-colors hover:border-foreground/20",
      )}
    >
      <span className="text-xs text-muted-foreground tabular-nums">{issue.key}</span>
      <p className="mt-1 leading-snug font-medium">{issue.title}</p>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        {issue.priority !== "none" && <PriorityBadge priority={issue.priority} />}
        {assignee ? (
          <span className="flex min-w-0 items-center gap-1.5 text-foreground">
            <AssigneeAvatar assignee={assignee} />
            <span className="truncate">{assignee.name}</span>
          </span>
        ) : (
          <span>Unassigned</span>
        )}
        <time
          dateTime={issue.createdAt}
          title={`Created ${fullDate.format(new Date(issue.createdAt))}`}
          className="ml-auto shrink-0 tabular-nums"
          suppressHydrationWarning
        >
          {timeAgo(issue.createdAt)}
        </time>
      </div>
    </div>
  );
}

export function SortableIssueCard({ issue, assignee }: { issue: Issue; assignee: Assignee | undefined }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: issue.id,
    data: { type: "issue", status: issue.status },
  });
  const orgPath = useOrgPath();

  // Releasing a drag can fire a click on the card; swallow it so dropping doesn't open the issue.
  const draggedRef = React.useRef(false);
  React.useEffect(() => {
    if (isDragging) draggedRef.current = true;
  }, [isDragging]);

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn("cursor-grab touch-none", isDragging && "opacity-40")}
      onPointerDownCapture={() => {
        draggedRef.current = false;
      }}
      {...attributes}
      {...listeners}
    >
      <Link
        href={orgPath(`/issues/${issue.key}`)}
        draggable={false}
        className="block rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        onClick={(event) => {
          if (draggedRef.current) event.preventDefault();
        }}
      >
        <IssueCard issue={issue} assignee={assignee} interactive />
      </Link>
    </div>
  );
}
