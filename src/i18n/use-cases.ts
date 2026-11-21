import type { Locale } from "next-intl";

import { routing } from "./routing";

/**
 * Audience pages (/for/<audience>) and use-case pages (/use-cases/<slug>), modelled on Composio's "for <team>" and
 * "use case" pages (MC-266, Alex's request on 2026-11-10): an audience page lists what that team hands to an AI
 * employee on Claude Code or Codex and links to one page per job. The copy lives in content/use-cases/; these lists stay
 * small because proxy.ts imports them. Keyword research: docs/seo/audience-pages-keywords-2026-11-10.md.
 */
export const audiencePages = [
  { slug: "marketing", locales: routing.locales },
  { slug: "engineering", locales: routing.locales },
] as const satisfies readonly {
  slug: string;
  locales: readonly Locale[];
}[];

export const useCasePages = [
  { slug: "daily-seo-report", audience: "marketing", locales: routing.locales },
  { slug: "weekly-competitor-digest", audience: "marketing", locales: routing.locales },
  { slug: "sentry-error-triage", audience: "engineering", locales: routing.locales },
  { slug: "pr-review", audience: "engineering", locales: routing.locales },
] as const satisfies readonly { slug: string; audience: string; locales: readonly Locale[] }[];

export type AudienceSlug = (typeof audiencePages)[number]["slug"];
export type UseCaseSlug = (typeof useCasePages)[number]["slug"];

/**
 * Agent × task pages (MC-386, after Postiz's /<agent>/<channel> pages): /use-cases/<agent>/<task>, e.g.
 * /use-cases/claude-code/seo, plus one hub per agent at /use-cases/<agent>. Only the agents the Crewmark daemon can wake.
 * Each task had autocomplete demand for both "claude code <task>" and "codex <task>" on 2026-11-13. The copy lives in
 * content/use-cases/agent-tasks/.
 */
export const agentSlugs = ["claude-code", "codex"] as const;
export const agentTaskSlugs = [
  "seo",
  "code-review",
  "sentry",
  "security-review",
  "github-issues",
  "qa-testing",
  "data-analysis",
  "content-creation",
  "refactoring",
] as const;
export const agentTaskLocales = routing.locales;

export type AgentSlug = (typeof agentSlugs)[number];
export type AgentTaskSlug = (typeof agentTaskSlugs)[number];

export const isAgentSlug = (slug: string): slug is AgentSlug => (agentSlugs as readonly string[]).includes(slug);
export const isAgentTaskSlug = (slug: string): slug is AgentTaskSlug =>
  (agentTaskSlugs as readonly string[]).includes(slug);

/** The existing task pages that link down to an agent's version. */
export const useCaseAgentTask: Partial<Record<UseCaseSlug, AgentTaskSlug>> = {
  "daily-seo-report": "seo",
  "pr-review": "code-review",
  "sentry-error-triage": "sentry",
};

/** Every audience and use-case page, with the languages it's written in (like guideLocales). */
export const useCaseLocales: Record<string, readonly Locale[]> = Object.fromEntries([
  ...audiencePages.map((page) => [`/for/${page.slug}`, page.locales] as const),
  ...useCasePages.map((page) => [`/use-cases/${page.slug}`, page.locales] as const),
  ...agentSlugs.flatMap((agent) => [
    [`/use-cases/${agent}`, agentTaskLocales] as const,
    ...agentTaskSlugs.map((task) => [`/use-cases/${agent}/${task}`, agentTaskLocales] as const),
  ]),
]);
