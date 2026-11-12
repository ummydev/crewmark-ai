"use client";

import * as React from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PlusIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { useFindAssignee, type Assignee } from "@/components/issues/assignee";
import { IssueCard, SortableIssueCard } from "@/components/issues/issue-card";
import { StatusIcon } from "@/components/issues/status-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ISSUE_STATUSES, type Issue, type IssueStatus } from "@/lib/types";

/** Resolves the column a drag target belongs to: either a column itself or a card inside it. */
function statusOf(id: string | number, issues: Issue[]): IssueStatus | undefined {
  const column = ISSUE_STATUSES.find((s) => s.value === id);
  if (column) return column.value;
  return issues.find((i) => i.id === id)?.status;
}

export function KanbanBoard({
  projectId,
  onCreateIssue,
}: {
  /** Only show this project's issues; all issues when omitted. */
  projectId?: string;
  onCreateIssue: (status: IssueStatus) => void;
}) {
  const { issues: allIssues, setIssues, moveIssue } = useCrewStore();
  const findAssignee = useFindAssignee();
  // Drag handlers below work on the full list (ids are unique), so filtering only affects what's shown.
  const issues = projectId ? allIssues.filter((i) => i.projectId === projectId) : allIssues;
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const sensors = useSensors(
    // A small distance keeps plain clicks from starting a drag.
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const activeIssue = issues.find((i) => i.id === activeId);

  function handleDragStart({ active }: DragStartEvent) {
    setActiveId(String(active.id));
  }

  // Moving across columns happens during the drag so the card previews in its new column.
  function handleDragOver({ active, over }: DragOverEvent) {
    if (!over) return;
    setIssues((prev) => {
      const from = statusOf(active.id, prev);
      const to = statusOf(over.id, prev);
      if (!from || !to || from === to) return prev;

      const activeIndex = prev.findIndex((i) => i.id === active.id);
      const moved = { ...prev[activeIndex], status: to };
      const rest = prev.filter((i) => i.id !== active.id);
      const overIndex = rest.findIndex((i) => i.id === over.id);
      // Dropping on a card inserts before it; dropping on the column itself appends.
      const insertAt = overIndex === -1 ? rest.length : overIndex;
      return [...rest.slice(0, insertAt), moved, ...rest.slice(insertAt)];
    });
  }

  // Reordering within a column happens when the drag ends; the final spot (and any column change
  // made during the drag) is then saved.
  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null);
    let next = allIssues;
    if (over && active.id !== over.id) {
      const oldIndex = next.findIndex((i) => i.id === active.id);
      const newIndex = next.findIndex((i) => i.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1 && next[oldIndex].status === next[newIndex].status) {
        next = arrayMove(next, oldIndex, newIndex);
      }
    }
    moveIssue(next, String(active.id));
  }

  return (
    <DndContext
      id="issues-board"
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={({ active }) => {
        // A cancelled drag keeps any column change made while dragging, so save that too.
        setActiveId(null);
        moveIssue(allIssues, String(active.id));
      }}
    >
      <div className="flex h-full gap-3 overflow-x-auto px-4 pt-2 pb-4">
        {ISSUE_STATUSES.map((column) => (
          <KanbanColumn
            key={column.value}
            column={column}
            issues={issues.filter((i) => i.status === column.value)}
            findAssignee={findAssignee}
            onCreateIssue={() => onCreateIssue(column.value)}
          />
        ))}
      </div>
      <DragOverlay>
        {activeIssue && (
          <IssueCard
            issue={activeIssue}
            assignee={findAssignee(activeIssue.assigneeId)}
            overlay
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}

function KanbanColumn({
  column,
  issues,
  findAssignee,
  onCreateIssue,
}: {
  column: (typeof ISSUE_STATUSES)[number];
  issues: Issue[];
  findAssignee: (id: string | null) => Assignee | undefined;
  onCreateIssue: () => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.value, data: { type: "column" } });

  return (
    <section className="flex w-80 shrink-0 flex-col rounded-xl bg-muted/60">
      <header className="flex h-10 items-center gap-2 pr-1.5 pl-3">
        <StatusIcon status={column.value} />
        <h2 className="text-[13px] font-medium">{column.label}</h2>
        <span className="text-[13px] text-muted-foreground tabular-nums">{issues.length}</span>
        <Button
          variant="ghost"
          size="icon-xs"
          className="ml-auto text-muted-foreground"
          onClick={onCreateIssue}
          aria-label={`New issue in ${column.label}`}
        >
          <PlusIcon />
        </Button>
      </header>
      <SortableContext items={issues.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div
          ref={setNodeRef}
          className={cn(
            "flex min-h-24 flex-1 flex-col gap-2 overflow-y-auto rounded-b-xl px-2 pb-2 transition-colors",
            isOver && "bg-muted",
          )}
        >
          {issues.length === 0 && (
            <p className="py-6 text-center text-[13px] text-muted-foreground">No issues</p>
          )}
          {issues.map((issue) => (
            <SortableIssueCard
              key={issue.id}
              issue={issue}
              assignee={findAssignee(issue.assigneeId)}
            />
          ))}
        </div>
      </SortableContext>
    </section>
  );
}
