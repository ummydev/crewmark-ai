import type { Locale } from "next-intl";

import { personalAgentsCopy } from "@/content/personal-agents";
import { personalAgentPages } from "@/i18n/personal-agents";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each personal agent guide: its short title over Crewmark's name.

export const alt = "Personal AI agent guide by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return personalAgentPages.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const page = personalAgentPages.find((p) => p.slug === slug) ?? personalAgentPages[0];
  const c = personalAgentsCopy[page.slug][locale] ?? personalAgentsCopy[page.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  Personal agents",
  });
}
