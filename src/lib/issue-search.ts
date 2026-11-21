import type { Issue } from "@/lib/types";

// Finding issues by what's typed (MC-214): their key ("MC-12", or just "12"), or words in the title or description.
// Plain substring matching, case-insensitive: Chinese has no spaces to split words on, so a word match would miss
// most of it. Every word typed has to appear somewhere; comments aren't searched.

type Searchable = Pick<Issue, "key" | "title" | "description" | "updatedAt">;

/** How well the issue matches: higher is better, 0 when it doesn't. */
export function issueMatch(issue: Searchable, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  const key = issue.key.toLowerCase();
  // An issue's key, with or without its prefix.
  if (q === key || (/^\d+$/.test(q) && key.endsWith(`-${q}`))) return 3;
  const title = issue.title.toLowerCase();
  const text = `${title}\n${issue.description.toLowerCase()}`;
  const words = q.split(/\s+/);
  if (!words.every((word) => text.includes(word) || key === word)) return 0;
  return words.every((word) => title.includes(word)) ? 2 : 1;
}

/** The issues that match, best first: by key, then with every word in the title, then the latest changed. */
export function searchIssues<T extends Searchable>(issues: T[], query: string, limit = Infinity): T[] {
  return issues
    .map((issue) => ({ issue, score: issueMatch(issue, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.issue.updatedAt.localeCompare(a.issue.updatedAt))
    .slice(0, limit)
    .map(({ issue }) => issue);
}
