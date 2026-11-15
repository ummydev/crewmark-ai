import type { Locale } from "next-intl";

import { skillPagesCopy } from "@/content/skill-pages";
import { skillPages } from "@/i18n/skill-pages";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each "best Claude skills for <job>" page: its short title over Crewmark's name.

export const alt = "Best Claude skills, compared by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return skillPages.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, topic: slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; topic: string }> }) {
  const { locale, topic } = await params;
  const page = skillPages.find((p) => p.slug === topic) ?? skillPages[0];
  const c = skillPagesCopy[page.slug][locale] ?? skillPagesCopy[page.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  Claude skills, compared",
  });
}
