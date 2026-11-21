"use client";

import * as React from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, type SortingStrategy } from "@dnd-kit/sortable";
import { ChevronRightIcon, EllipsisIcon, EyeIcon, EyeOffIcon, PlusIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { useFindAssignee, type Assignee } from "@/components/issues/assignee";
import { IssueCard, SortableIssueCard } from "@/components/issues/issue-card";
import { StatusIcon } from "@/components/issues/status-icon";
import { useHiddenColumns } from "@/components/issues/use-hidden-columns";
import { issueMatch } from "@/lib/issue-search";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ISSUE_STATUSES, type Issue, type IssueStatus } from "@/lib/types";

/** How long a finger holds a card before it can be dragged (a long press, shorter than the system's own). */
const TOUCH_HOLD_MS = 250;

/**
 * The board shows each column's issues latest changed first (MC-263), so what moved lately is on top and what's been
 * sitting there sinks. A card is dragged only to another column, where it goes on top: its status is all a drag
 * changes, so cards don't make room for it within a column.
 */
function latestFirst(a: Issue, b: Issue) {
  return b.updatedAt.localeCompare(a.updatedAt);
}
const STAY_PUT: SortingStrategy = () => null;

/** Resolves the column a drag target belongs to: either a column itself or a card inside it. */
function statusOf(id: string | number, issues: Issue[]): IssueStatus | undefined {
  const column = ISSUE_STATUSES.find((s) => s.value === id);
  if (column) return column.value;
  return issues.find((i) => i.id === id)?.status;
}

export function KanbanBoard({
  projectId,
  query = "",
  onCreateIssue,
}: {
  /** Only show this project's issues; all issues when omitted. */
  projectId?: string;
  /** Only show the issues that match what's typed in the board's search box (MC-214). */
  query?: string;
  onCreateIssue: (status: IssueStatus) => void;
}) {
  const { organization, issues: allIssues, setIssues, moveIssue } = useCrewStore();
  const findAssignee = useFindAssignee();
  const [hidden, setHidden] = useHiddenColumns(organization.id);
  const shown = ISSUE_STATUSES.filter((s) => !hidden.includes(s.value));
  // Drag handlers below work on the full list (ids are unique), so filtering only affects what's shown.
  const issues = allIssues.filter(
    (i) => (!projectId || i.projectId === projectId) && (!query.trim() || issueMatch(i, query) > 0),
  );
  const [activeId, setActiveId] = React.useState<string | null>(null);
  /** The dragged issue as it was, to put back if the drag ends where it started or is cancelled. */
  const dragged = React.useRef<Issue | null>(null);

  const sensors = useSensors(
    // With a mouse, a small distance keeps plain clicks from starting a drag.
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    // With a finger (MC-261), a card is dragged after holding it a moment: a swipe that moves before then scrolls the
    // column or the board, as on any phone page, instead of moving the issue.
    useSensor(TouchSensor, { activationConstraint: { delay: TOUCH_HOLD_MS, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const activeIssue = issues.find((i) => i.id === activeId);

  function handleDragStart({ active, activatorEvent }: DragStartEvent) {
    setActiveId(String(active.id));
    dragged.current = allIssues.find((i) => i.id === active.id) ?? null;
    // A buzz where the phone can, so the finger knows the card is now held.
    if (typeof TouchEvent !== "undefined" && activatorEvent instanceof TouchEvent) navigator.vibrate?.(10);
  }

  // Over another column, the card previews on top of it, where it'll be once moved there.
  function handleDragOver({ active, over }: DragOverEvent) {
    if (!over) return;
    setIssues((prev) => {
      const from = statusOf(active.id, prev);
      const to = statusOf(over.id, prev);
      if (!from || !to || from === to) return prev;
      const updatedAt = new Date().toISOString();
      return prev.map((i) => (i.id === active.id ? { ...i, status: to, updatedAt } : i));
    });
  }

  // Dropped in another column, the issue moves there; back where it started, or cancelled, nothing changes.
  function handleDragEnd({ active }: DragEndEvent) {
    setActiveId(null);
    const before = dragged.current;
    dragged.current = null;
    const status = statusOf(active.id, allIssues);
    if (!before || !status) return;
    if (status !== before.status) moveIssue(before.id, status);
    else putBack(before);
  }

  function putBack(issue: Issue | null) {
    if (issue) setIssues((prev) => prev.map((i) => (i.id === issue.id ? issue : i)));
  }

  return (
    <DndContext
      id="issues-board"
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={() => {
        setActiveId(null);
        putBack(dragged.current);
        dragged.current = null;
      }}
    >
      <div className="flex h-full gap-3 overflow-x-auto px-4 pt-2 pb-4">
        {shown.map((column) => (
          <KanbanColumn
            key={column.value}
            column={column}
            issues={issues.filter((i) => i.status === column.value).sort(latestFirst)}
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
      <SortableContext items={issues.map((i) => i.id)} strategy={STAY_PUT}>
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
