import type { MetadataRoute } from "next";

import { siteUrl } from "@/i18n/metadata";

// Search and AI crawlers may read every marketing page. The dashboard, sign-in, API and one-time links (setup, invitations, CLI sign-in) are private and have
// nothing to index. AI crawlers get their own group by name so it's clear they're welcome (a crawler follows only the
// group that names it, so each group repeats the disallows).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
];

const disallow = ["/org/", "/api/", "/login", "/cli", "/invitations/", "/setup/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_CRAWLERS, allow: "/", disallow },
    ],
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
