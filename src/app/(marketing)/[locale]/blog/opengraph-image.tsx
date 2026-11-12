import type { Locale } from "next-intl";

import { blogIndex } from "@/content/blog";
import { guideLocales } from "@/i18n/guides";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for the blog index: its own wording in English, the translated headline elsewhere.

export const alt = "The Crewmark blog: tutorials for running Claude Code and Codex as agents";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return guideLocales["/blog"].map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = blogIndex[locale];
  if (locale !== "en" && c)
    return shareCard({ locale, lines: [{ before: "", marked: c.title }], footer: `${c.kicker}  ·  Crewmark` });
  return shareCard({
    locale: "en",
    lines: [{ before: "Tutorials for running" }, { before: "", marked: "Claude Code and Codex agents." }],
    footer: "Headless runs  ·  schedules  ·  background work  ·  Crewmark",
  });
}
