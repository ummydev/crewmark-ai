"use client";

import { UserRoundIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { FIELD_TRIGGER, type FieldVariant } from "@/components/field-variants";
import { AssigneeAvatar, onProject, useFindAssignee, type Assignee } from "@/components/issues/assignee";
import { PriorityBadge } from "@/components/issues/priority-badge";
import { StatusIcon } from "@/components/issues/status-icon";
import { ProjectAvatar } from "@/components/projects/project-avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  ISSUE_PRIORITIES,
  ISSUE_STATUSES,
  type IssuePriority,
  type IssueStatus,
} from "@/lib/types";

// Shared select fields for an issue's properties; see field-variants.ts for the three styles.

interface FieldProps<T> {
  value: T;
  onChange: (value: T) => void;
  variant?: FieldVariant;
  className?: string;
}

export function StatusSelect({ value, onChange, variant = "field", className }: FieldProps<IssueStatus>) {
  return (
    <Select items={ISSUE_STATUSES} value={value} onValueChange={(v) => v && onChange(v)}>
      <SelectTrigger aria-label="Status" className={cn(FIELD_TRIGGER[variant], className)}>
        <SelectValue>
          {(v: IssueStatus) => (
            <>
              <StatusIcon status={v} />
              {ISSUE_STATUSES.find((s) => s.value === v)?.label}
            </>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {ISSUE_STATUSES.map((s) => (
          <SelectItem key={s.value} value={s.value}>
            <StatusIcon status={s.value} />
            {s.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function PrioritySelect({ value, onChange, variant = "field", className }: FieldProps<IssuePriority>) {
  return (
    <Select items={ISSUE_PRIORITIES} value={value} onValueChange={(v) => v && onChange(v)}>
      {/* As a pill the badge is the content, so the pill only frames it. */}
      <SelectTrigger
        aria-label="Priority"
        className={cn(FIELD_TRIGGER[variant], variant === "pill" && "px-1", className)}
      >
        <SelectValue>{(v: IssuePriority) => <PriorityBadge priority={v} />}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {ISSUE_PRIORITIES.map((p) => (
          <SelectItem key={p.value} value={p.value}>
            <PriorityBadge priority={p.value} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const UNASSIGNED = "unassigned";

function AssigneeIcon({ assignee }: { assignee?: Assignee }) {
  return assignee ? (
    <AssigneeAvatar assignee={assignee} />
  ) : (
    <UserRoundIcon className="size-3.5 text-muted-foreground" />
  );
}

/**
 * Picks who works on an issue: a person (the signed-in one first) or a digital employee. With a project, only the
 * employees on it and those on no project.
 */
export function AssigneeSelect({
  value,
  onChange,
  projectId,
  variant = "field",
  className,
}: FieldProps<string | null> & { projectId: string | null }) {
  const { employees, members, currentUser } = useCrewStore();
  const findAssignee = useFindAssignee();
  const people = [...members].sort((a, b) => Number(b.id === currentUser.id) - Number(a.id === currentUser.id));
  const staff = employees.filter((e) => onProject(e, projectId));
  // Someone who has left, or an employee who isn't on the project, stays listed while the issue is theirs, so the
  // field still says who.
  const current = findAssignee(value);
  if (current?.user && !people.some((u) => u.id === current.user.id)) people.push(current.user);
  if (current?.employee && !staff.includes(current.employee)) staff.push(current.employee);
  const groups = [
    { label: "People", items: people.map((u) => ({ value: u.id, label: u.username })) },
    { label: "Employees", items: staff.map((e) => ({ value: e.id, label: e.name })) },
  ].filter((group) => group.items.length > 0);
  const items = [{ value: UNASSIGNED, label: "Unassigned" }, ...groups.flatMap((group) => group.items)];

  return (
    <Select
      items={items}
      value={value ?? UNASSIGNED}
      onValueChange={(v) => v && onChange(v === UNASSIGNED ? null : v)}
    >
      <SelectTrigger aria-label="Assignee" className={cn(FIELD_TRIGGER[variant], className)}>
        <SelectValue>
          {(v: string) => (
            <>
              <AssigneeIcon assignee={findAssignee(v === UNASSIGNED ? null : v)} />
              {items.find((a) => a.value === v)?.label}
            </>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={UNASSIGNED}>
          <AssigneeIcon />
          Unassigned
        </SelectItem>
        {groups.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                <AssigneeIcon assignee={findAssignee(a.value)} />
                {a.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

const NO_PROJECT = "none";

function ProjectIcon({ emoji }: { emoji?: string }) {
  return emoji ? (
    <ProjectAvatar emoji={emoji} size="sm" />
  ) : (
    <span aria-hidden className="size-[18px] shrink-0 rounded-full border border-dashed border-foreground/20" />
  );
}

export function ProjectSelect({ value, onChange, variant = "field", className }: FieldProps<string | null>) {
  const { projects } = useCrewStore();
  const items = [
    { value: NO_PROJECT, label: "No project" },
    ...projects.map((p) => ({ value: p.id, label: p.name })),
  ];

  return (
    <Select
      items={items}
      value={value ?? NO_PROJECT}
      onValueChange={(v) => v && onChange(v === NO_PROJECT ? null : v)}
    >
      <SelectTrigger aria-label="Project" className={cn(FIELD_TRIGGER[variant], className)}>
        <SelectValue>
          {(v: string) => (
            <>
              <ProjectIcon emoji={projects.find((p) => p.id === v)?.emoji} />
              {items.find((p) => p.value === v)?.label}
            </>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((p) => (
          <SelectItem key={p.value} value={p.value}>
            <ProjectIcon emoji={projects.find((project) => project.id === p.value)?.emoji} />
            {p.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
