"use client";

import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  HEARTBEAT_INTERVALS,
  HEARTBEAT_LIMITS,
  defaultHeartbeat,
  defaultHeartbeatPrompt,
  type AgentRuntime,
  type Heartbeat,
} from "@/lib/types";

/** e.g. "every 30 minutes", "every hour", "every 2 hours". */
export function intervalLabel(minutes: number) {
  if (minutes % 60 !== 0) return `every ${minutes} minutes`;
  return minutes === 60 ? "every hour" : `every ${minutes / 60} hours`;
}

/** "GMT+8" style offset of a time zone right now. */
function zoneOffset(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en", { timeZone, timeZoneName: "shortOffset" }).formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
}

/**
 * The heartbeat settings, in the New employee form and on an employee's page. A null value is a heartbeat nobody has
 * set up: it shows as off, and turning it on starts from the defaults in this browser's time zone.
 */
export function HeartbeatFields({
  value,
  onChange,
  runtime,
}: {
  value: Heartbeat | null;
  onChange: (heartbeat: Heartbeat) => void;
  /** The employee's agent, when it has one: heartbeats can't reach agents other than Claude Code and Codex. */
  runtime?: AgentRuntime | null;
}) {
  const id = React.useId();
  // Every change records the language of whoever made it, which picks the default prompt the agent gets.
  const set = (patch: Partial<Heartbeat>) =>
    onChange({
      ...(value ?? defaultHeartbeat(Intl.DateTimeFormat().resolvedOptions().timeZone, navigator.language)),
      language: navigator.language,
      ...patch,
    });

  return (
    <div className="grid gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="grid gap-0.5">
          <Label htmlFor={`${id}-on`} className="text-[13px]">
            Heartbeat
          </Label>
          <p className="text-xs text-muted-foreground">
            Wakes the agent up at set times during working hours, so it keeps working without being asked.
          </p>
        </div>
        <Switch id={`${id}-on`} checked={value?.enabled ?? false} onCheckedChange={(enabled) => set({ enabled })} />
      </div>

      {value?.enabled && (
        <>
          <div className="grid gap-1.5">
            <Label htmlFor={`${id}-start`} className="text-xs text-muted-foreground">
              Working hours
            </Label>
            <div className="flex items-center gap-2">
              <TimeInput id={`${id}-start`} value={value.start} onChange={(start) => set({ start })} />
              <span className="text-muted-foreground">–</span>
              <TimeInput value={value.end} onChange={(end) => set({ end })} label="End" />
            </div>
            <label className="flex items-center gap-2 text-[13px]">
              <Checkbox checked={value.weekdaysOnly} onCheckedChange={(weekdaysOnly) => set({ weekdaysOnly })} />
              Weekdays only
            </label>
          </div>

          <div className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">Time zone</span>
            <TimeZoneSelect value={value.timeZone} onChange={(timeZone) => set({ timeZone })} />
          </div>

          <div className="grid gap-1.5">
            <span className="text-xs text-muted-foreground">Wake up</span>
            <IntervalField value={value.intervalMinutes} onChange={(intervalMinutes) => set({ intervalMinutes })} />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor={`${id}-prompt`} className="text-xs text-muted-foreground">
              Wake-up message
            </Label>
            <Textarea
              id={`${id}-prompt`}
              placeholder={defaultHeartbeatPrompt(value.language)}
              value={value.prompt}
              maxLength={HEARTBEAT_LIMITS.promptLength}
              onChange={(e) => set({ prompt: e.target.value })}
              rows={3}
            />
            <p className="text-xs text-muted-foreground">Leave it empty to send the message shown.</p>
          </div>

          {runtime === "other" && (
            <p className="text-xs text-destructive">
              Heartbeats wake Claude Code and Codex agents only, so this employee&apos;s agent won&apos;t get them.
            </p>
          )}
        </>
      )}
    </div>
  );
}

/** A time field that only reports complete times, so clearing it on the way to a new one doesn't save "". */
function TimeInput({
  id,
  value,
  onChange,
  label,
}: {
  id?: string;
  value: string;
  onChange: (time: string) => void;
  label?: string;
}) {
  return (
    <Input
      id={id}
      aria-label={label}
      type="time"
      value={value}
      onChange={(e) => /^\d\d:\d\d$/.test(e.target.value) && onChange(e.target.value)}
      className="w-28"
    />
  );
}

function TimeZoneSelect({ value, onChange }: { value: string; onChange: (timeZone: string) => void }) {
  const items = React.useMemo(() => {
    const zones = Intl.supportedValuesOf("timeZone");
    return (zones.includes(value) ? zones : [value, ...zones]).map((zone) => ({ value: zone, label: zone }));
  }, [value]);
  return (
    <Select items={items} value={value} onValueChange={(v) => v && onChange(v)}>
      <SelectTrigger aria-label="Time zone" className="w-full">
        <SelectValue>
          {(v: string) => (
            <>
              {v.replaceAll("_", " ")}
              <span className="text-muted-foreground">{zoneOffset(v)}</span>
            </>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((z) => (
          <SelectItem key={z.value} value={z.value}>
            {z.label.replaceAll("_", " ")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const CUSTOM = "custom";

/** A preset interval, or Custom with a number of minutes. */
function IntervalField({ value, onChange }: { value: number; onChange: (minutes: number) => void }) {
  const [custom, setCustom] = React.useState(!HEARTBEAT_INTERVALS.includes(value));
  const [draft, setDraft] = React.useState(String(value));
  const items = [
    ...HEARTBEAT_INTERVALS.map((m) => ({ value: String(m), label: intervalLabel(m) })),
    { value: CUSTOM, label: "Custom…" },
  ];
  const { minMinutes, maxMinutes } = HEARTBEAT_LIMITS;

  return (
    <div className="flex items-center gap-2">
      <Select
        items={items}
        value={custom ? CUSTOM : String(value)}
        onValueChange={(v) => {
          if (!v) return;
          setCustom(v === CUSTOM);
          if (v !== CUSTOM) {
            onChange(Number(v));
            setDraft(v);
          }
        }}
      >
        <SelectTrigger aria-label="Wake-up interval" className="min-w-0 flex-1">
          <SelectValue>{(v: string) => items.find((i) => i.value === v)?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((i) => (
            <SelectItem key={i.value} value={i.value}>
              {i.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {custom && (
        <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
          <Input
            aria-label="Minutes between wake-ups"
            type="number"
            min={minMinutes}
            max={maxMinutes}
            step={1}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              const minutes = Number(e.target.value);
              if (Number.isInteger(minutes) && minutes >= minMinutes && minutes <= maxMinutes) onChange(minutes);
            }}
            className="w-20"
          />
          min
        </div>
      )}
    </div>
  );
}
