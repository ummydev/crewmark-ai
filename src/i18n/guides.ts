import type { Locale } from "next-intl";

import { blogIndexLocales, blogLocales } from "./blog";
import { roleLocales } from "./roles";
import { routing } from "./routing";

/**
 * Marketing pages written in only some languages, with those languages. The sitemap and hreflang list just these,
 * and proxy.ts serves English to visitors whose language a page doesn't have instead of sending them to a 404.
 */
export const guideLocales = {
  "/ai-employees": routing.locales,
  "/remote-claude-code": routing.locales,
  "/proactive-claude-code": routing.locales,
  "/proactive-codex": routing.locales,
  "/alternatives/paperclip": routing.locales,
  "/alternatives/multica": routing.locales,
  "/alternatives/crewai": routing.locales,
  "/pricing": routing.locales,
  "/blog": blogIndexLocales,
} as const satisfies Record<string, readonly Locale[]>;

export type GuideHref = keyof typeof guideLocales;

/** Every guide, in the order footers list them, with its link text in messages/*.json (Landing.footer). */
export const guides = [
  { href: "/ai-employees", label: "aiEmployees" },
  { href: "/remote-claude-code", label: "remoteClaudeCode" },
  { href: "/proactive-claude-code", label: "proactiveClaudeCode" },
  { href: "/proactive-codex", label: "proactiveCodex" },
  { href: "/alternatives/paperclip", label: "paperclipAlternative" },
  { href: "/alternatives/multica", label: "multicaAlternative" },
  { href: "/alternatives/crewai", label: "crewaiAlternative" },
  { href: "/blog", label: "blog" },
] as const satisfies readonly { href: GuideHref; label: string }[];

export function isGuideHref(pathname: string): pathname is GuideHref {
  return Object.hasOwn(guideLocales, pathname);
}

/** The language to link a guide in from a page in `locale`: that language if the guide has it, else English. */
export function guideLocale(href: GuideHref, locale: Locale): Locale {
  return (guideLocales[href] as readonly Locale[]).includes(locale) ? locale : "en";
}

/** The languages a page written in only some languages has (a guide, the blog index, a post or a role), or undefined for a
 * page in every language. */
export function pageLocales(pathname: string): readonly Locale[] | undefined {
  return isGuideHref(pathname) ? guideLocales[pathname] : (blogLocales[pathname] ?? roleLocales[pathname]);
}
