"use client";

import { FIELD_TRIGGER, type FieldVariant } from "@/components/field-variants";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { EMPLOYEE_STATUSES, ROLE_SUGGESTIONS, type EmployeeStatus } from "@/lib/types";

export const EMPLOYEE_STATUS_DOT: Record<EmployeeStatus, string> = {
  working: "bg-emerald-500",
  idle: "bg-muted-foreground/40",
  paused: "bg-amber-500",
};

const STATUS_ITEMS = (Object.keys(EMPLOYEE_STATUSES) as EmployeeStatus[]).map((value) => ({
  value,
  label: EMPLOYEE_STATUSES[value],
}));

/** Free-text role with quick-pick chips that fill the input. */
export function RoleField({
  id,
  value,
  onChange,
}: {
  id?: string;
  value: string;
  onChange: (role: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Input
        id={id}
        placeholder="e.g. SEO Specialist"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex flex-wrap gap-1.5">
        {ROLE_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            aria-pressed={value === suggestion}
            onClick={() => onChange(suggestion)}
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-xs transition-colors hover:bg-muted",
              value === suggestion && "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

export function EmployeeStatusSelect({
  value,
  onChange,
  variant = "field",
}: {
  value: EmployeeStatus;
  onChange: (status: EmployeeStatus) => void;
  variant?: FieldVariant;
}) {
  return (
    <Select items={STATUS_ITEMS} value={value} onValueChange={(v) => v && onChange(v)}>
      <SelectTrigger aria-label="Status" className={FIELD_TRIGGER[variant]}>
        <SelectValue>
          {(v: EmployeeStatus) => (
            <>
              <span className={cn("size-1.5 rounded-full", EMPLOYEE_STATUS_DOT[v])} />
              {EMPLOYEE_STATUSES[v]}
            </>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {STATUS_ITEMS.map((s) => (
          <SelectItem key={s.value} value={s.value}>
            <span className={cn("size-1.5 rounded-full", EMPLOYEE_STATUS_DOT[s.value])} />
            {s.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
