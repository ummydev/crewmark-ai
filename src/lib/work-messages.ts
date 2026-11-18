// Who said what in an employee's work log, as the Work tab shows it (MC-249).
//
// The daemon tells apart a person typing in the conversation ("human"), another session ("peer", which is how
// Crewmark's notices come in) and Crewmark's heartbeat (cli/worklog.go). Two things it can't see, so the Work tab reads
// the text itself:
// - A person's words that came through Crewmark, written in the work log or as a direct message, arrive as one of
//   Crewmark's notices. They show as the person's own, with the notice around them left out.
// - A conversation that wasn't open is resumed in the background with the message as its prompt, so Crewmark's
//   heartbeats and notices arrive there as if a person had typed them. They show as what they are.

import { unsignAttachmentLinks } from "@/lib/attachment-links";

const HEARTBEAT = "[Crewmark heartbeat]";
const CREWMARK = "[Crewmark]";

/**
 * A person's words passed on by Crewmark (src/db/direct-messages.ts): the first line names them, then their words
 * follow quoted, each line starting with "> ".
 */
const PERSON = /^\[Crewmark\]\s+(.+?) (?:wrote to you on Crewmark|sent you a direct message):\n\n((?:>.*(?:\n|$))+)/;

export interface Said {
  /** "human" for a person's words, whether typed in the conversation or passed on by Crewmark; else as the daemon said. */
  origin: string;
  text: string;
  /** Who wrote it, when Crewmark passed it on. */
  by?: string;
}

/** What was said to the agent, from what the daemon sent: its origin and text. */
export function readSaid(origin: string, text: string): Said {
  const trimmed = text.trimStart();
  if (trimmed.startsWith(HEARTBEAT)) return { origin: "heartbeat", text: trimmed.slice(HEARTBEAT.length).trim() };
  const person = PERSON.exec(trimmed);
  // Their images reached the agent as signed links it can open (MC-271); here they're the links they wrote.
  if (person) return { origin: "human", text: unsignAttachmentLinks(unquote(person[2])), by: person[1] };
  if (origin === "human" && trimmed.startsWith(CREWMARK)) return { origin: "peer", text };
  return { origin, text };
}

function unquote(block: string) {
  return block
    .replace(/\n$/, "")
    .split("\n")
    .map((line) => line.replace(/^> ?/, ""))
    .join("\n")
    .trim();
}

/**
 * Whether a message written in the work log is the one that reached the conversation: the same words, give or take
 * spacing, compared over their first 200 characters (the conversation's copy of a long one is cut short).
 */
export function sameWords(sent: string, arrived: string) {
  const words = (text: string) => text.replace(/\s+/g, " ").trim().slice(0, 200);
  const a = words(sent);
  return a.length > 0 && a === words(arrived);
}
