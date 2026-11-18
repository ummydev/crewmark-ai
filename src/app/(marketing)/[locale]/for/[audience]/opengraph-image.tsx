import type { Locale } from "next-intl";

import { audienceCopy } from "@/content/use-cases";
import { audiencePages } from "@/i18n/use-cases";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each audience page: its short title over Crewmark's name.

export const alt = "AI employees for your team, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return audiencePages.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, audience: slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; audience: string }> }) {
  const { locale, audience } = await params;
  const page = audiencePages.find((p) => p.slug === audience) ?? audiencePages[0];
  const c = audienceCopy[page.slug][locale] ?? audienceCopy[page.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  AI employees",
  });
}
