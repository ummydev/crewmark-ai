import type { Locale } from "next-intl";

/**
 * Personal agent guides (/personal-agent/<slug>): one per agent (Meta Muse, Grok Bot, ...) and how-to pages for the
 * long-tail searches around each, in the order the /personal-agent hub lists them. The copy lives in
 * content/personal-agents/; this list stays small because proxy.ts imports it. Picked from the keyword research in
 * docs/seo/personal-agent-keywords-2026-11-10.md (Alex asked for the section on 2026-11-10).
 */
export const personalAgentPages = [
  { slug: "meta-muse", agent: "muse", locales: ["en", "zh"] },
  { slug: "meta-muse-use-cases", agent: "muse", locales: ["en", "zh"] },
  { slug: "grok-bot", agent: "grok-bot", locales: ["en", "zh"] },
  { slug: "grok-bot-routines", agent: "grok-bot", locales: ["en", "zh"] },
  { slug: "manus-cue", agent: "manus-cue", locales: ["en", "zh"] },
  { slug: "gemini-spark", agent: "gemini-spark", locales: ["en", "zh"] },
  { slug: "base44-superagent", agent: "base44-superagent", locales: ["en", "zh"] },
] as const satisfies readonly { slug: string; agent: string; locales: readonly Locale[] }[];

export type PersonalAgentSlug = (typeof personalAgentPages)[number]["slug"];

/** Every personal agent page, with the languages it's written in (like guideLocales). */
export const personalAgentLocales: Record<string, readonly Locale[]> = Object.fromEntries(
  personalAgentPages.map((page) => [`/personal-agent/${page.slug}`, page.locales]),
);
