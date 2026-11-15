import type { Locale } from "next-intl";

import { routing } from "./routing";

/**
 * "Best Claude skills for <job>" pages (/skills/<slug>) and the languages each is written in, in the order the
 * /skills hub lists them. The copy lives in content/skill-pages/; this list stays small because proxy.ts imports it.
 * Picked from the keyword research in docs/seo/claude-skills-keywords-2026-11-08.md (MC-197).
 */
export const skillPages = [
  { slug: "website-design", role: "ui-designer", locales: routing.locales },
] as const satisfies readonly { slug: string; role: string; locales: readonly Locale[] }[];

export type SkillPageSlug = (typeof skillPages)[number]["slug"];

/** Every skill page, with the languages it's written in (like guideLocales). */
export const skillPageLocales: Record<string, readonly Locale[]> = Object.fromEntries(
  skillPages.map((page) => [`/skills/${page.slug}`, page.locales]),
);
