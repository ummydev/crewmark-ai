import type { Locale } from "next-intl";

import { routing } from "./routing";

/**
 * Every AI employee role page (/ai-employees/<slug>) and the languages it's written in, in the order /ai-employees
 * lists them. The copy lives in content/roles/; this list stays small because proxy.ts imports it. The roles match the
 * marketplace presets in messages/*.json (Landing.marketplace.presets).
 */
export const roles = [
  { slug: "seo-specialist", preset: "seo", locales: routing.locales },
  { slug: "marketing-agent", preset: "growth", locales: routing.locales },
  { slug: "social-media-manager", preset: "social", locales: routing.locales },
  { slug: "software-engineer", preset: "engineer", locales: routing.locales },
  { slug: "ui-designer", preset: "ui", locales: routing.locales },
  { slug: "app-designer", preset: "app", locales: routing.locales },
] as const satisfies readonly { slug: string; preset: string; locales: readonly Locale[] }[];

export type RoleSlug = (typeof roles)[number]["slug"];

/** Every role page, with the languages it's written in (like guideLocales). */
export const roleLocales: Record<string, readonly Locale[]> = Object.fromEntries(
  roles.map((role) => [`/ai-employees/${role.slug}`, role.locales]),
);
