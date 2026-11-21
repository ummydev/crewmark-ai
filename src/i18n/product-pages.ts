import { routing } from "./routing";

/**
 * "<product> alternatives" and "<product> pricing" pages (MC-439): /alternatives/<slug> and /pricing/<slug>, for the
 * products on /compare whose "<product> alternatives" or "<product> pricing" searches showed up in Google autocomplete
 * on 2026-11-13 (docs/seo/keywords.md). Facts come from docs/compare/facts/<slug>.md; the copy is in
 * content/product-alternatives/ and content/product-pricing/. /alternatives/paperclip, /multica and /crewai are
 * older, separate pages (content/alternatives.ts). This list stays small because proxy.ts imports it.
 */
export const alternativesSlugs = [
  "autogen",
  "hermes-agent",
  "langgraph",
  "grok-bot",
  "claude-cowork",
  "lindy",
  "relevance-ai",
  "factory",
] as const;
export type AlternativesSlug = (typeof alternativesSlugs)[number];

export const pricingSlugs = [
  "devin",
  "factory",
  "opencode",
  "crewai",
  "langgraph",
  "openclaw",
  "hermes-agent",
  "relevance-ai",
  "conductor",
] as const;
export type PricingSlug = (typeof pricingSlugs)[number];

/** The older /alternatives pages, each its own route (content/alternatives.ts). */
export const staticAlternatives = ["paperclip", "multica", "crewai"] as const;

export const productPageLocales = routing.locales;

export const isAlternativesSlug = (slug: string): slug is AlternativesSlug =>
  (alternativesSlugs as readonly string[]).includes(slug);
export const isPricingSlug = (slug: string): slug is PricingSlug => (pricingSlugs as readonly string[]).includes(slug);

/** Every page, with the languages it's written in (for the sitemap and hreflang). */
export const productPageLocalesByHref: Record<string, typeof productPageLocales> = Object.fromEntries([
  ...alternativesSlugs.map((slug) => [`/alternatives/${slug}`, productPageLocales] as const),
  ...pricingSlugs.map((slug) => [`/pricing/${slug}`, productPageLocales] as const),
]);
