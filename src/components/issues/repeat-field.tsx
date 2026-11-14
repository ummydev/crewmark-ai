"use client";

import * as React from "react";
import { RepeatIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  RecurrenceError,
  WEEKDAYS,
  WEEKDAY_NAMES,
  checked,
  describeRecurrence,
  formatRecurrence,
  nextOccurrence,
  parseRecurrence,
  type Frequency,
  type Recurrence,
  type Weekday,
} from "@/lib/recurrence";
import type { Issue } from "@/lib/types";
import { cn } from "@/lib/utils";

// The issue's Repeat property (MC-83): what its schedule is, and a dialog to set or stop it. When the schedule comes
// round, Crewmark moves the issue back to Todo if it's done and tells its employee (db/recurrence.ts).

type RepeatPatch = Pick<Issue, "recurrence" | "nextRecurAt">;

/** The schedule, or null when there's none or it isn't one this page can show. */
function readable(recurrence: string | null): Recurrence | null {
  if (!recurrence) return null;
  try {
    return parseRecurrence(recurrence);
  } catch {
    return null;
  }
}

function capitalized(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** When it next comes round, at the schedule's local time, e.g. "Mon, Nov 9, 10:00". */
function nextLabel(at: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(at);
}

export function RepeatField({ issue, onChange }: { issue: Issue; onChange: (patch: RepeatPatch) => void }) {
  const [open, setOpen] = React.useState(false);
  const schedule = readable(issue.recurrence);
  const next = issue.nextRecurAt && schedule ? nextLabel(new Date(issue.nextRecurAt), schedule.timeZone) : null;
  return (
    <>
      <button
        type="button"
        aria-label="Repeat"
        title={
          schedule
            ? `${capitalized(describeRecurrence(schedule))} (${schedule.timeZone})${next ? `. Next: ${next}` : ""}`
            : undefined
        }
        onClick={() => setOpen(true)}
        className="-ml-2 flex h-8 w-[calc(100%+0.5rem)] items-center gap-1.5 rounded-md px-2 text-left text-[13px] outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <RepeatIcon className="size-3.5 shrink-0 text-muted-foreground" />
        {schedule ? (
          <span className="truncate">{capitalized(describeRecurrence(schedule))}</span>
        ) : issue.recurrence ? (
          <span className="truncate">Custom schedule</span>
        ) : (
          <span className="text-muted-foreground">Doesn&apos;t repeat</span>
        )}
      </button>
      <RepeatDialog open={open} onOpenChange={setOpen} issue={issue} schedule={schedule} onChange={onChange} />
    </>
  );
}

const UNITS: { value: Frequency; one: string; many: string }[] = [
  { value: "daily", one: "day", many: "days" },
  { value: "weekly", one: "week", many: "weeks" },
  { value: "monthly", one: "month", many: "months" },
];

const MONTH_DAYS = [
  ...Array.from({ length: 28 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
  { value: "-1", label: "Last day" },
];

/** Today's date in the time zone, "YYYY-MM-DD". */
function today(timeZone: string) {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(
    new Date(),
  );
}

/** The form's starting values: the issue's schedule, else every day at 09:00 in this browser's time zone. */
function initialForm(schedule: Recurrence | null) {
  if (schedule) return { ...schedule, interval: String(schedule.interval) };
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = today(timeZone);
  const weekday = WEEKDAYS[(new Date(`${date}T12:00:00Z`).getUTCDay() + 6) % 7];
  const day = Number(date.slice(8));
  return {
    frequency: "daily" as Frequency,
    interval: "1",
    weekdays: [weekday],
    monthDay: day > 28 ? -1 : day,
    startDate: date,
    time: "09:00",
    timeZone,
  };
}

function RepeatDialog({
  open,
  onOpenChange,
  issue,
  schedule,
  onChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  issue: Issue;
  schedule: Recurrence | null;
  onChange: (patch: RepeatPatch) => void;
}) {
  const [form, setForm] = React.useState(() => initialForm(schedule));

  // Start from the issue's schedule each time the dialog opens.
  const [prevOpen, setPrevOpen] = React.useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setForm(initialForm(schedule));
  }

  // Counted from today, so "every 2 days" means from now on.
  let built: { recurrence: Recurrence; next: Date | null } | null = null;
  let problem = "";
  try {
    const recurrence = checked({ ...form, interval: Number(form.interval), startDate: today(form.timeZone) });
    built = { recurrence, next: nextOccurrence(recurrence, new Date()) };
  } catch (error) {
    if (!(error instanceof RecurrenceError)) throw error;
    problem = error.message;
  }

  const unit = UNITS.find((u) => u.value === form.frequency) ?? UNITS[0];
  const many = form.interval !== "1";

  function save() {
    if (!built) return;
    onChange({ recurrence: formatRecurrence(built.recurrence), nextRecurAt: built.next?.toISOString() ?? null });
    onOpenChange(false);
  }

  function stop() {
    onChange({ recurrence: null, nextRecurAt: null });
    onOpenChange(false);
  }

  function toggle(day: Weekday) {
    setForm((f) => ({
      ...f,
      weekdays: f.weekdays.includes(day) ? f.weekdays.filter((d) => d !== day) : [...f.weekdays, day],
    }));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Repeat {issue.key}</DialogTitle>
          <DialogDescription>
            When it comes round, Crewmark moves the issue back to Todo if it&apos;s done, and tells the employee
            it&apos;s assigned to. If it&apos;s still open, the employee is reminded.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="repeat-interval">Every</Label>
            <div className="flex gap-2">
              <Input
                id="repeat-interval"
                type="number"
                inputMode="numeric"
                min={1}
                className="w-20"
                value={form.interval}
                onChange={(e) => setForm((f) => ({ ...f, interval: e.target.value }))}
              />
              <Select
                items={UNITS.map((u) => ({ value: u.value, label: many ? u.many : u.one }))}
                value={form.frequency}
                onValueChange={(frequency) => frequency && setForm((f) => ({ ...f, frequency }))}
              >
                <SelectTrigger aria-label="Unit" className="w-32">
                  <SelectValue>{() => (many ? unit.many : unit.one)}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {UNITS.map((u) => (
                    <SelectItem key={u.value} value={u.value}>
                      {many ? u.many : u.one}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {form.frequency === "weekly" && (
            <div className="grid gap-2">
              <span className="text-sm font-medium">On</span>
              <div className="flex flex-wrap gap-1.5">
                {WEEKDAYS.map((day) => (
                  <Button
                    key={day}
                    type="button"
                    size="sm"
                    variant={form.weekdays.includes(day) ? "default" : "outline"}
                    aria-pressed={form.weekdays.includes(day)}
                    onClick={() => toggle(day)}
                    className="w-11"
                  >
                    {WEEKDAY_NAMES[day]}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {form.frequency === "monthly" && (
            <div className="grid gap-2">
              <span className="text-sm font-medium">On day</span>
              <Select
                items={MONTH_DAYS}
                value={String(form.monthDay)}
                onValueChange={(v) => v && setForm((f) => ({ ...f, monthDay: Number(v) }))}
              >
                <SelectTrigger aria-label="Day of the month" className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MONTH_DAYS.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="repeat-time">At</Label>
            <div className="flex items-center gap-2">
              <Input
                id="repeat-time"
                type="time"
                className="w-32"
                value={form.time}
                onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
              />
              <span className="text-xs text-muted-foreground">{form.timeZone}</span>
            </div>
          </div>

          <p className={cn("text-sm", problem ? "text-destructive" : "text-muted-foreground")} aria-live="polite">
            {built
              ? `${capitalized(describeRecurrence(built.recurrence))}${
                  built.next ? `. Next: ${nextLabel(built.next, form.timeZone)}.` : "."
                }`
              : problem}
          </p>

          <DialogFooter>
            {issue.recurrence && (
              <Button type="button" variant="ghost" className="sm:mr-auto" onClick={stop}>
                Stop repeating
              </Button>
            )}
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!built}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
