// Repeating issues (MC-83): an issue can have a schedule, and when it comes round Crewmark reopens the issue if it's
// done and tells its employee (db/recurrence.ts). The schedule is stored the way calendars store repeating events,
// as iCalendar text (RFC 5545): the first time, in a time zone, and a rule, e.g. every two days at 10:00 in Shanghai:
//
//   DTSTART;TZID=Asia/Shanghai:20261107T100000
//   RRULE:FREQ=DAILY;INTERVAL=2
//
// Only the rules the dashboard and the CLI write are accepted: FREQ=DAILY, WEEKLY with BYDAY, or MONTHLY with
// BYMONTHDAY (1–28, or -1 for the last day), each with an optional INTERVAL. Every time is at the start's local time,
// so 10:00 stays 10:00 across daylight saving changes.
//
// No server-only imports: the dashboard builds and describes schedules with these too.

export type Frequency = "daily" | "weekly" | "monthly";

/** iCalendar's weekday codes, Monday first. */
export const WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export const WEEKDAY_NAMES: Record<Weekday, string> = {
  MO: "Mon",
  TU: "Tue",
  WE: "Wed",
  TH: "Thu",
  FR: "Fri",
  SA: "Sat",
  SU: "Sun",
};

export interface Recurrence {
  frequency: Frequency;
  /** Every how many days, weeks or months. */
  interval: number;
  /** Weekly: the days it comes round on, at least one. */
  weekdays: Weekday[];
  /** Monthly: the day of the month, 1–28, or -1 for the last day. */
  monthDay: number;
  /** The first time, in timeZone: "YYYY-MM-DD" and "HH:MM". Weeks and months are counted from it. */
  startDate: string;
  time: string;
  /** IANA time zone, e.g. "Asia/Shanghai". */
  timeZone: string;
}

/** A schedule that can't be read or isn't one of the supported kinds; the message says why. */
export class RecurrenceError extends Error {}

const MAX_INTERVAL: Record<Frequency, number> = { daily: 365, weekly: 52, monthly: 12 };

const DAY_MS = 86_400_000;

// --- Plain dates, as days since 1970-01-01 ----------------------------------------------------------------------

function dayNumber(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return Date.UTC(year, month - 1, day) / DAY_MS;
}

function dateOf(day: number) {
  return new Date(day * DAY_MS).toISOString().slice(0, 10);
}

function weekdayOf(day: number): Weekday {
  // 1970-01-01 was a Thursday.
  return WEEKDAYS[(((day + 3) % 7) + 7) % 7];
}

function mondayOf(day: number) {
  return day - WEEKDAYS.indexOf(weekdayOf(day));
}

function lastDayOfMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

// --- Time zones ------------------------------------------------------------------------------------------------

const formats = new Map<string, Intl.DateTimeFormat>();

function zoneFormat(timeZone: string) {
  let format = formats.get(timeZone);
  if (!format) {
    format = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formats.set(timeZone, format);
  }
  return format;
}

export function isTimeZone(timeZone: string) {
  try {
    zoneFormat(timeZone);
    return true;
  } catch {
    return false;
  }
}

/** The wall-clock time in the zone at an instant (ms), as if it were UTC. */
function wallClock(instant: number, timeZone: string) {
  const parts = Object.fromEntries(
    zoneFormat(timeZone)
      .formatToParts(new Date(instant))
      .map((p) => [p.type, Number(p.value)]),
  );
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
}

/** The date in the zone at an instant, as a day number. */
function localDay(instant: number, timeZone: string) {
  return Math.floor(wallClock(instant, timeZone) / DAY_MS);
}

/** The instant (ms) when it's `time` on `day` in the zone. */
function zonedInstant(day: number, time: string, timeZone: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const wall = day * DAY_MS + (hours * 60 + minutes) * 60_000;
  const whole = (ms: number) => Math.floor(ms / 1000) * 1000;
  // The zone's offset at a first guess, then again at the result, which differs only around a clock change.
  let instant = wall - (wallClock(wall, timeZone) - whole(wall));
  instant = wall - (wallClock(instant, timeZone) - whole(instant));
  return instant;
}

// --- Reading and writing the iCalendar text --------------------------------------------------------------------

const START = /^DTSTART;TZID=([A-Za-z0-9_+\-/]+):(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/;

/** Reads a schedule as stored; throws RecurrenceError unless it's one Crewmark supports. */
export function parseRecurrence(text: string): Recurrence {
  const lines = text.trim().split(/\r?\n/);
  const start = START.exec(lines[0] ?? "");
  const rule = /^RRULE:(.+)$/.exec(lines[1] ?? "");
  if (lines.length !== 2 || !start || !rule) {
    throw new RecurrenceError("Expected a DTSTART;TZID=<zone>:<YYYYMMDDTHHMMSS> line and an RRULE line");
  }
  const [, timeZone, year, month, day, hours, minutes, seconds] = start;
  const parts = new Map<string, string>();
  for (const part of rule[1].split(";")) {
    const [key, value] = part.split("=");
    if (!value || parts.has(key)) throw new RecurrenceError(`Can't read the rule part "${part}"`);
    parts.set(key.toUpperCase(), value.toUpperCase());
  }
  const unknown = [...parts.keys()].filter((key) => !["FREQ", "INTERVAL", "BYDAY", "BYMONTHDAY"].includes(key));
  if (unknown.length) throw new RecurrenceError(`Repeats don't support ${unknown.join(", ")}`);

  const frequency = { DAILY: "daily", WEEKLY: "weekly", MONTHLY: "monthly" }[parts.get("FREQ") ?? ""] as
    | Frequency
    | undefined;
  if (!frequency) throw new RecurrenceError("FREQ must be DAILY, WEEKLY or MONTHLY");
  if (seconds !== "00") throw new RecurrenceError("The start time must be on the minute");
  const startDate = `${year}-${month}-${day}`;
  const recurrence: Recurrence = {
    frequency,
    interval: parts.has("INTERVAL") ? Number(parts.get("INTERVAL")) : 1,
    weekdays: [],
    monthDay: 0,
    startDate,
    time: `${hours}:${minutes}`,
    timeZone,
  };
  if (frequency === "weekly") {
    const days = parts.get("BYDAY")?.split(",") ?? [];
    recurrence.weekdays = days.length ? (days as Weekday[]) : [weekdayOf(dayNumber(startDate))];
  } else if (parts.has("BYDAY")) {
    throw new RecurrenceError("BYDAY only goes with FREQ=WEEKLY");
  }
  if (frequency === "monthly") {
    recurrence.monthDay = parts.has("BYMONTHDAY") ? Number(parts.get("BYMONTHDAY")) : Number(day);
  } else if (parts.has("BYMONTHDAY")) {
    throw new RecurrenceError("BYMONTHDAY only goes with FREQ=MONTHLY");
  }
  return checked(recurrence);
}

/** Throws RecurrenceError unless every field is in range; returns the recurrence with its weekdays in order. */
export function checked(recurrence: Recurrence): Recurrence {
  const { frequency, interval, weekdays, monthDay, startDate, time, timeZone } = recurrence;
  if (!Number.isInteger(interval) || interval < 1 || interval > MAX_INTERVAL[frequency]) {
    throw new RecurrenceError(`The interval must be a whole number from 1 to ${MAX_INTERVAL[frequency]}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate) || dateOf(dayNumber(startDate)) !== startDate) {
    throw new RecurrenceError(`${startDate} isn't a date`);
  }
  const [hours, minutes] = time.split(":").map(Number);
  if (!/^\d{2}:\d{2}$/.test(time) || hours > 23 || minutes > 59) throw new RecurrenceError(`${time} isn't a time`);
  if (!isTimeZone(timeZone)) throw new RecurrenceError(`${timeZone} isn't a time zone`);
  if (frequency === "weekly") {
    if (weekdays.length === 0 || weekdays.some((d) => !WEEKDAYS.includes(d))) {
      throw new RecurrenceError("Weekly repeats need days: MO, TU, WE, TH, FR, SA or SU");
    }
  }
  if (frequency === "monthly" && !(monthDay === -1 || (Number.isInteger(monthDay) && monthDay >= 1 && monthDay <= 28))) {
    throw new RecurrenceError("The day of the month must be 1–28, or the last day");
  }
  return {
    ...recurrence,
    weekdays: frequency === "weekly" ? WEEKDAYS.filter((d) => weekdays.includes(d)) : [],
    monthDay: frequency === "monthly" ? monthDay : 0,
  };
}

/** The schedule as stored: see the top of this file. */
export function formatRecurrence(recurrence: Recurrence): string {
  const { frequency, interval, weekdays, monthDay, startDate, time, timeZone } = checked(recurrence);
  const rule = [`FREQ=${frequency.toUpperCase()}`];
  if (interval > 1) rule.push(`INTERVAL=${interval}`);
  if (frequency === "weekly") rule.push(`BYDAY=${weekdays.join(",")}`);
  if (frequency === "monthly") rule.push(`BYMONTHDAY=${monthDay}`);
  return `DTSTART;TZID=${timeZone}:${startDate.replaceAll("-", "")}T${time.replace(":", "")}00\nRRULE:${rule.join(";")}`;
}

// --- When it comes round ---------------------------------------------------------------------------------------

function comesRoundOn(recurrence: Recurrence, start: number, day: number) {
  if (day < start) return false;
  const { frequency, interval } = recurrence;
  if (frequency === "daily") return (day - start) % interval === 0;
  if (frequency === "weekly") {
    return recurrence.weekdays.includes(weekdayOf(day)) && ((mondayOf(day) - mondayOf(start)) / 7) % interval === 0;
  }
  const [year, month, date] = dateOf(day).split("-").map(Number);
  const [startYear, startMonth] = dateOf(start).split("-").map(Number);
  const months = year * 12 + month - (startYear * 12 + startMonth);
  const wanted = recurrence.monthDay === -1 ? lastDayOfMonth(year, month) : recurrence.monthDay;
  return months % interval === 0 && date === wanted;
}

/** The first time the schedule comes round after `after`; null if it never does (it always does within 12 years). */
export function nextOccurrence(recurrence: Recurrence, after: Date): Date | null {
  const start = dayNumber(recurrence.startDate);
  const from = Math.max(start, localDay(after.getTime(), recurrence.timeZone) - 1);
  for (let day = from; day < from + 12 * 366; day++) {
    if (!comesRoundOn(recurrence, start, day)) continue;
    const at = zonedInstant(day, recurrence.time, recurrence.timeZone);
    if (at > after.getTime()) return new Date(at);
  }
  return null;
}

// --- In words --------------------------------------------------------------------------------------------------

function ordinal(n: number) {
  const suffix = n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th";
  return `${n}${suffix}`;
}

const WORKWEEK = WEEKDAYS.slice(0, 5).join(",");

/** E.g. "every 2 days at 10:00", "every weekday at 09:00", "every month on the last day at 18:00". */
export function describeRecurrence(recurrence: Recurrence): string {
  const { frequency, interval, weekdays, monthDay, time } = recurrence;
  const every = (unit: string) => (interval === 1 ? `every ${unit}` : `every ${interval} ${unit}s`);
  let schedule: string;
  if (frequency === "daily") schedule = every("day");
  else if (frequency === "weekly") {
    schedule =
      interval === 1 && weekdays.join(",") === WORKWEEK
        ? "every weekday"
        : `${every("week")} on ${weekdays.map((d) => WEEKDAY_NAMES[d]).join(", ")}`;
  } else schedule = `${every("month")} on the ${monthDay === -1 ? "last day" : ordinal(monthDay)}`;
  return `${schedule} at ${time}`;
}

// --- From the words the CLI takes ------------------------------------------------------------------------------

const DAY_WORDS: Record<string, Weekday> = {
  mon: "MO",
  monday: "MO",
  tue: "TU",
  tues: "TU",
  tuesday: "TU",
  wed: "WE",
  wednesday: "WE",
  thu: "TH",
  thur: "TH",
  thurs: "TH",
  thursday: "TH",
  fri: "FR",
  friday: "FR",
  sat: "SA",
  saturday: "SA",
  sun: "SU",
  sunday: "SU",
};

/** What `--repeat` takes, for error messages and help. */
export const REPEAT_EXAMPLES =
  '"daily", "weekdays", "every 2 days", "weekly on mon,thu", "every 2 weeks on fri", "monthly on 1" or ' +
  '"monthly on last", optionally followed by "at 10:00"';

/**
 * A schedule from words, as `crewmark issues create|update --repeat` takes them, e.g. "every 2 days at 10:00". It
 * starts today in the time zone; without "at", at 09:00. Weekly without days repeats on today's weekday, monthly
 * without a day on today's date (the last day after the 28th).
 */
export function recurrenceFromWords(words: string, timeZone: string, now = new Date()): Recurrence {
  if (!isTimeZone(timeZone)) throw new RecurrenceError(`${timeZone} isn't a time zone`);
  const text = words.trim().toLowerCase().replace(/\s+/g, " ");
  const [, schedule, at] = /^(.*?)(?: at (\d{1,2}:\d{2}))?$/.exec(text) ?? [];
  const today = localDay(now.getTime(), timeZone);
  const time = at ? at.padStart(5, "0") : "09:00";
  const base = { interval: 1, weekdays: [] as Weekday[], monthDay: 0, startDate: dateOf(today), time, timeZone };
  const unreadable = () => new RecurrenceError(`Can't read the repeat "${words}". Use ${REPEAT_EXAMPLES}.`);
  let match: RegExpExecArray | null;

  if (/^(daily|every day)$/.test(schedule)) return checked({ ...base, frequency: "daily" });
  if (/^(weekdays|every weekday)$/.test(schedule)) {
    return checked({ ...base, frequency: "weekly", weekdays: ["MO", "TU", "WE", "TH", "FR"] });
  }
  if ((match = /^every (\d+) days?$/.exec(schedule))) {
    return checked({ ...base, frequency: "daily", interval: Number(match[1]) });
  }
  if ((match = /^(?:weekly|every week|every (\d+) weeks?)(?: on (.+))?$/.exec(schedule))) {
    const weekdays = match[2]
      ? match[2].split(/ ?, ?| and | /).map((word) => {
          const day = DAY_WORDS[word];
          if (!day) throw unreadable();
          return day;
        })
      : [weekdayOf(today)];
    return checked({ ...base, frequency: "weekly", interval: Number(match[1] ?? 1), weekdays });
  }
  if ((match = /^(?:monthly|every month|every (\d+) months?)(?: on (?:the )?(?:day )?(.+?))?$/.exec(schedule))) {
    const todayDate = Number(dateOf(today).slice(8));
    let monthDay = todayDate > 28 ? -1 : todayDate;
    if (match[2]) {
      const day = /^(\d{1,2})(?:st|nd|rd|th)?$/.exec(match[2]);
      if (/^last( day)?$/.test(match[2])) monthDay = -1;
      else if (day) monthDay = Number(day[1]);
      else throw unreadable();
    }
    return checked({ ...base, frequency: "monthly", interval: Number(match[1] ?? 1), monthDay });
  }
  throw unreadable();
}
