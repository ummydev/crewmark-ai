import {
  AGENT_RUNTIMES,
  EMPLOYEE_STATUSES,
  HEARTBEAT_LIMITS,
  ISSUE_PRIORITIES,
  ISSUE_STATUSES,
  type EmployeeStatus,
  type Heartbeat,
} from "@/lib/types";

// Checks for input from outside (Server Functions, the agent API): never trust the caller's types.

/** Bad input. Its message is safe to show the caller, unlike other errors. */
export class InputError extends Error {}

/** An id that doesn't exist in the caller's organization. Its message is safe to show the caller. */
export class NotFoundError extends Error {}

export function text(value: unknown, field: string, { required = false } = {}): string {
  if (typeof value !== "string") throw new InputError(`${field} must be a string`);
  const trimmed = value.trim();
  if (required && !trimmed) throw new InputError(`${field} is required`);
  if (trimmed.length > 20_000) throw new InputError(`${field} is too long`);
  return value;
}

export function oneOf<T extends string>(value: unknown, options: readonly T[], field: string): T {
  if (!options.includes(value as T)) throw new InputError(`Invalid ${field}: use one of ${options.join(", ")}`);
  return value as T;
}

export function idOrNull(value: unknown, field: string): string | null {
  if (value === null) return null;
  return text(value, field, { required: true });
}

function clockTime(value: unknown, field: string): string {
  if (typeof value !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
    throw new InputError(`${field} must be a time like 09:30`);
  }
  return value;
}

/** A heartbeat schedule, or null for none. */
export function heartbeat(value: unknown): Heartbeat | null {
  if (value === null) return null;
  if (typeof value !== "object") throw new InputError("heartbeat must be an object");
  const v = value as Record<string, unknown>;
  const timeZone = text(v.timeZone, "heartbeat.timeZone", { required: true });
  try {
    new Intl.DateTimeFormat("en", { timeZone });
  } catch {
    throw new InputError(`Unknown time zone ${timeZone}`);
  }
  const { minMinutes, maxMinutes, promptLength } = HEARTBEAT_LIMITS;
  const intervalMinutes = v.intervalMinutes;
  if (!Number.isInteger(intervalMinutes) || (intervalMinutes as number) < minMinutes || (intervalMinutes as number) > maxMinutes) {
    throw new InputError(`heartbeat.intervalMinutes must be a whole number from ${minMinutes} to ${maxMinutes}`);
  }
  const prompt = v.prompt === undefined ? "" : text(v.prompt, "heartbeat.prompt");
  if (prompt.length > promptLength) throw new InputError(`heartbeat.prompt is longer than ${promptLength} characters`);
  if (typeof v.enabled !== "boolean" || typeof v.weekdaysOnly !== "boolean") {
    throw new InputError("heartbeat.enabled and heartbeat.weekdaysOnly must be true or false");
  }
  const language = v.language == null ? undefined : text(v.language, "heartbeat.language").trim();
  if (language !== undefined && !/^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/.test(language)) {
    throw new InputError("heartbeat.language must be a language tag like zh-CN");
  }
  const start = clockTime(v.start, "heartbeat.start");
  const end = clockTime(v.end, "heartbeat.end");
  if (start === end) throw new InputError("heartbeat.start and heartbeat.end must differ");
  return {
    enabled: v.enabled,
    start,
    end,
    timeZone,
    weekdaysOnly: v.weekdaysOnly,
    intervalMinutes: intervalMinutes as number,
    prompt: prompt.trim(),
    ...(language ? { language } : {}),
  };
}

export const STATUS_VALUES = ISSUE_STATUSES.map((s) => s.value);
export const PRIORITY_VALUES = ISSUE_PRIORITIES.map((p) => p.value);
export const RUNTIME_VALUES = AGENT_RUNTIMES.map((r) => r.value);
export const EMPLOYEE_STATUS_VALUES = Object.keys(EMPLOYEE_STATUSES) as EmployeeStatus[];
