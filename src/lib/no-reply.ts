// An employee's way to say a turn of its conversation had nothing for the person (MC-237), like OpenClaw's NO_REPLY
// and Hermes' [SILENT]: it replies with the marker, and the Work tab leaves that turn out. Heartbeats that find
// nothing changed are the usual case. Crewmark says so in each heartbeat and at the end of every notice it sends,
// but for what a person wrote (src/db/agent-events.ts).

export const NO_REPLY = "CREWMARK_NO_REPLY";

/** One line that is the marker and nothing else, give or take Markdown around it and an end mark. */
const MARKER_LINE = /^[\s`*_"'“”‘’]*crewmark_no_reply[\s`*_"'“”‘’.。!！]*$/i;

/**
 * Whether a reply opts out of being shown: its first or last line is the marker. A reply that only mentions the
 * marker in a sentence, e.g. an employee writing about this feature, still shows.
 */
export function isNoReply(reply: string) {
  const lines = reply
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length > 0 && (MARKER_LINE.test(lines[0]) || MARKER_LINE.test(lines.at(-1)!));
}

/** The reply without the marker's line, for a turn that shows anyway (a person spoke in it). */
export function withoutNoReply(reply: string) {
  const lines = reply.trim().split("\n");
  while (lines.length && (MARKER_LINE.test(lines[0]) || !lines[0].trim())) lines.shift();
  while (lines.length && (MARKER_LINE.test(lines.at(-1)!) || !lines.at(-1)!.trim())) lines.pop();
  return lines.join("\n");
}

/** Told to the employee with each heartbeat. */
export const HEARTBEAT_NO_REPLY = `If this heartbeat finds nothing new to tell the user (nothing done or changed since your last reply), reply with only ${NO_REPLY}: Crewmark then leaves this turn out of your work log, so the user isn't shown the same report again.`;

/** Told to the employee at the end of each notice from Crewmark, but for what a person wrote. */
export const NOTICE_NO_REPLY = `If this leaves you nothing new to tell the user (it needs nothing from you, or nothing came of it), reply with only ${NO_REPLY}: Crewmark then leaves this turn out of your work log.`;
