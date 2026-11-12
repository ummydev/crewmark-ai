import type { Locale } from "next-intl";

import { routing } from "./routing";

/**
 * Every blog post, newest first: its slug (/blog/<slug>), publication date and the languages it's written in. The
 * copy lives in content/blog/<slug>.ts; this list stays small because proxy.ts imports it.
 */
export const posts = [
  { slug: "claude-duet", published: "2026-11-05", locales: routing.locales },
  { slug: "claude-message-threads", published: "2026-11-04", locales: routing.locales },
  { slug: "deepseek-super-agent", published: "2026-11-03", locales: routing.locales },
  { slug: "chatgpt-dots", published: "2026-11-02", locales: routing.locales },
  { slug: "multiple-claude-code-agents", published: "2026-11-02", locales: routing.locales },
  { slug: "claude-code-background-agents", published: "2026-11-02", locales: routing.locales },
] as const satisfies readonly { slug: string; published: string; locales: readonly Locale[] }[];

export type PostSlug = (typeof posts)[number]["slug"];

/** The blog index's languages: those any post is written in. guides.ts lists the index with the guides. */
export const blogIndexLocales = [...new Set(posts.flatMap((post) => post.locales))] as Locale[];

/** Every post, with the languages it's written in (like guideLocales). */
export const blogLocales: Record<string, readonly Locale[]> = Object.fromEntries(
  posts.map((post) => [`/blog/${post.slug}`, post.locales]),
);
