/** An employee mentioned in a text: where "@" and its name start and end, and who it is (MC-411). */
export interface Mention {
  from: number;
  to: number;
  id: string;
}

/**
 * Every mention of an employee in a text: "@" and an employee's name, as in "@DevOps crewmark can you ship this?", in
 * any case. Where names start alike (程序员 crewmark, 程序员 codexdesign), the longest one written wins. The "@" can't
 * follow a letter or digit, so an email address mentions nobody, and a name ending in a letter or digit can't run on
 * into more of them, so @Adam doesn't mention Ada.
 */
export function mentionsIn(body: string, employees: { id: string; name: string }[]): Mention[] {
  const text = body.toLowerCase();
  const named = employees
    .map((e) => ({ id: e.id, name: e.name.trim().toLowerCase() }))
    .filter((e) => e.name)
    .sort((a, b) => b.name.length - a.name.length);
  const found: Mention[] = [];
  for (let at = text.indexOf("@"); at !== -1; at = text.indexOf("@", at + 1)) {
    if (at > 0 && /[\p{L}\p{N}_.]/u.test(text[at - 1])) continue;
    const start = at + 1;
    const match = named.find(({ name }) => {
      if (!text.startsWith(name, start)) return false;
      const next = text[start + name.length] ?? "";
      return !(/[a-z0-9_]$/.test(name) && /[a-z0-9_]/.test(next));
    });
    if (match) {
      found.push({ from: at, to: start + match.name.length, id: match.id });
      at = start + match.name.length - 1;
    }
  }
  return found;
}

/** The employees a comment mentions, each once (see mentionsIn). */
export function mentionedEmployees(body: string, employees: { id: string; name: string }[]): string[] {
  return [...new Set(mentionsIn(body, employees).map((m) => m.id))];
}
