import { routing } from "./routing";

/**
 * A vs B comparison pages (MC-387, after Postiz's /compare pages): /compare/<a>-vs-<b>, each with Crewmark as a third
 * option, plus the /compare index. Every pair showed up in Google autocomplete for "<a> vs" on 2026-11-13
 * (docs/seo/keywords.md). Facts about each product live in docs/compare/facts/<slug>.md with their sources; the copy is
 * in content/compare/. This list stays small because proxy.ts imports it.
 */
export const compareProducts = [
  "paperclip",
  "multica",
  "linear",
  "openclaw",
  "hermes-agent",
  "relevance-ai",
  "lindy",
  "crewai",
  "langgraph",
  "autogen",
  "conductor",
  "claude-squad",
  "vibe-kanban",
  "claude-code",
  "claude-code-agent-teams",
  "codex",
  "opencode",
  "devin",
  "factory",
  "grok-bot",
  "openbot",
  "claude-cowork",
  "copilot-cowork",
  "chatgpt-work",
  "cursor-projects",
  "copilot-studio",
] as const;
export type CompareProduct = (typeof compareProducts)[number];

const pair = <A extends CompareProduct, B extends CompareProduct>(a: A, b: B) => ({ slug: `${a}-vs-${b}` as const, a, b });

export const comparePairs = [
  pair("paperclip", "crewai"),
  pair("paperclip", "multica"),
  pair("paperclip", "openclaw"),
  pair("paperclip", "hermes-agent"),
  pair("crewai", "openclaw"),
  pair("crewai", "langgraph"),
  pair("crewai", "autogen"),
  pair("multica", "hermes-agent"),
  pair("multica", "linear"),
  pair("openclaw", "claude-code"),
  pair("hermes-agent", "claude-code"),
  pair("openclaw", "opencode"),
  pair("claude-code-agent-teams", "openclaw"),
  pair("vibe-kanban", "conductor"),
  pair("claude-squad", "conductor"),
  pair("devin", "claude-code"),
  pair("devin", "codex"),
  pair("factory", "claude-code"),
  pair("opencode", "claude-code"),
  pair("relevance-ai", "lindy"),
  pair("grok-bot", "claude-code"),
  pair("grok-bot", "hermes-agent"),
  pair("openbot", "grok-bot"),
  pair("claude-cowork", "claude-code"),
  pair("claude-cowork", "chatgpt-work"),
  pair("copilot-cowork", "claude-cowork"),
  pair("chatgpt-work", "codex"),
  pair("claude-cowork", "grok-bot"),
  pair("cursor-projects", "grok-bot"),
  pair("copilot-cowork", "copilot-studio"),
] as const;
export type ComparePair = (typeof comparePairs)[number];
export type ComparePairSlug = ComparePair["slug"];

export const compareLocales = routing.locales;

export const isComparePairSlug = (slug: string): slug is ComparePairSlug =>
  comparePairs.some((p) => p.slug === slug);

/** The index and every pair, with the languages each is written in (for the sitemap and hreflang). */
export const compareLocalesByHref: Record<string, typeof compareLocales> = Object.fromEntries([
  ["/compare", compareLocales],
  ...comparePairs.map((p) => [`/compare/${p.slug}`, compareLocales] as const),
]);
