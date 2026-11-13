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
import { ChevronRightIcon, EllipsisIcon, EyeIcon, EyeOffIcon, PlusIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { useFindAssignee, type Assignee } from "@/components/issues/assignee";
import { IssueCard, SortableIssueCard } from "@/components/issues/issue-card";
import { StatusIcon } from "@/components/issues/status-icon";
import { useHiddenColumns } from "@/components/issues/use-hidden-columns";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
  const { organization, issues: allIssues, setIssues, moveIssue } = useCrewStore();
  const findAssignee = useFindAssignee();
  const [hidden, setHidden] = useHiddenColumns(organization.id);
  const shown = ISSUE_STATUSES.filter((s) => !hidden.includes(s.value));
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
        {shown.map((column) => (
          <KanbanColumn
            key={column.value}
            column={column}
            issues={issues.filter((i) => i.status === column.value)}
            findAssignee={findAssignee}
            onCreateIssue={() => onCreateIssue(column.value)}
            // The last column shown stays.
            onHide={shown.length > 1 ? () => setHidden(column.value, true) : undefined}
          />
        ))}
        {hidden.length > 0 && (
          <HiddenColumns
            columns={ISSUE_STATUSES.filter((s) => hidden.includes(s.value))}
            count={(status) => issues.filter((i) => i.status === status).length}
            onShow={(status) => setHidden(status, false)}
          />
        )}
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

type Column = (typeof ISSUE_STATUSES)[number];

function KanbanColumn({
  column,
  issues,
  findAssignee,
  onCreateIssue,
  onHide,
}: {
  column: Column;
  issues: Issue[];
  findAssignee: (id: string | null) => Assignee | undefined;
  onCreateIssue: () => void;
  /** Hides the column; none for the last one shown. */
  onHide?: () => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.value, data: { type: "column" } });

  return (
    <section className="flex w-80 shrink-0 flex-col rounded-xl bg-muted/60">
      <header className="flex h-10 items-center gap-2 pr-1.5 pl-3">
        <StatusIcon status={column.value} />
        <h2 className="text-[13px] font-medium">{column.label}</h2>
        <span className="text-[13px] text-muted-foreground tabular-nums">{issues.length}</span>
        <div className="ml-auto flex items-center">
          {onHide && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    className="text-muted-foreground"
                    aria-label={`${column.label} column options`}
                  />
                }
              >
                <EllipsisIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={onHide}>
                  <EyeOffIcon />
                  Hide column
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="ghost"
            size="icon-xs"
            className="text-muted-foreground"
            onClick={onCreateIssue}
            aria-label={`New issue in ${column.label}`}
          >
            <PlusIcon />
          </Button>
        </div>
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

/**
 * The hidden columns, after the shown ones, as Linear lists them: each with its count, shown again with a click, and a
 * place to drop a card to move it into that status without showing the column.
 */
function HiddenColumns({
  columns,
  count,
  onShow,
}: {
  columns: Column[];
  count: (status: IssueStatus) => number;
  onShow: (status: IssueStatus) => void;
}) {
  const [open, setOpen] = React.useState(true);
  return (
    <section className="w-56 shrink-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-full items-center gap-1.5 rounded-lg px-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronRightIcon className={cn("size-3.5 transition-transform", open && "rotate-90")} />
        Hidden columns
        <span className="tabular-nums">{columns.length}</span>
      </button>
      {open && (
        <div className="flex flex-col gap-1">
          {columns.map((column) => (
            <HiddenColumn
              key={column.value}
              column={column}
              count={count(column.value)}
              onShow={() => onShow(column.value)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function HiddenColumn({ column, count, onShow }: { column: Column; count: number; onShow: () => void }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.value, data: { type: "column" } });
  return (
    <button
      ref={setNodeRef}
      type="button"
      onClick={onShow}
      title={`Show ${column.label}`}
      className={cn(
        "group flex h-9 items-center gap-2 rounded-lg px-2.5 text-left text-[13px] transition-colors hover:bg-muted/60",
        isOver && "bg-muted",
      )}
    >
      <StatusIcon status={column.value} />
      <span className="font-medium">{column.label}</span>
      <span className="text-muted-foreground tabular-nums">{count}</span>
      <EyeIcon className="ml-auto size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
