// Issue keys mentioned in text (MC-185), e.g. "see MC-181" or "mc-181": every organization's issues are
// MC-<number> (issueKey in db/queries), the number unique within the organization. Not inside a longer word or a
// path, so "ABC-MC-1", "MC-12a" and "MC-1-2" don't count.
const ISSUE_REF = /(?<![\w-])MC-(\d+)(?![\w-])/gi;

export interface IssueRef {
  /** Where it starts and ends in the text. */
  from: number;
  to: number;
  /** As issues are keyed, upper case: "MC-181". */
  key: string;
}

export function issueRefs(text: string): IssueRef[] {
  return [...text.matchAll(ISSUE_REF)].map((match) => ({
    from: match.index,
    to: match.index + match[0].length,
    key: `MC-${Number(match[1])}`,
  }));
}
