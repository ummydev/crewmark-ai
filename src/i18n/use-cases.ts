import type { Locale } from "next-intl";

/**
 * Audience pages (/for/<audience>) and use-case pages (/use-cases/<slug>), modelled on Composio's "for <team>" and
 * "use case" pages (MC-266, Alex's request on 2026-11-10): an audience page lists what that team hands to an AI
 * employee on Claude Code or Codex and links to one page per job. The copy lives in content/use-cases/; these lists stay
 * small because proxy.ts imports them. Keyword research: docs/seo/audience-pages-keywords-2026-11-10.md.
 */
export const audiencePages = [
  { slug: "marketing", locales: ["en", "zh"] },
  { slug: "engineering", locales: ["en", "zh"] },
] as const satisfies readonly {
  slug: string;
  locales: readonly Locale[];
}[];

export const useCasePages = [
  { slug: "daily-seo-report", audience: "marketing", locales: ["en", "zh"] },
  { slug: "weekly-competitor-digest", audience: "marketing", locales: ["en", "zh"] },
  { slug: "sentry-error-triage", audience: "engineering", locales: ["en", "zh"] },
  { slug: "pr-review", audience: "engineering", locales: ["en", "zh"] },
] as const satisfies readonly { slug: string; audience: string; locales: readonly Locale[] }[];

export type AudienceSlug = (typeof audiencePages)[number]["slug"];
export type UseCaseSlug = (typeof useCasePages)[number]["slug"];

/** Every audience and use-case page, with the languages it's written in (like guideLocales). */
export const useCaseLocales: Record<string, readonly Locale[]> = Object.fromEntries([
  ...audiencePages.map((page) => [`/for/${page.slug}`, page.locales] as const),
  ...useCasePages.map((page) => [`/use-cases/${page.slug}`, page.locales] as const),
]);
