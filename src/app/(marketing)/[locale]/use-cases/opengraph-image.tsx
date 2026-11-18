import type { Locale } from "next-intl";

import { USE_CASES_HUB_LOCALES, type UseCasesHubLocale, useCasesHub } from "@/content/use-cases-hub";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /use-cases: the page's headline over Crewmark's name.

export const alt = "AI employee use cases, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return USE_CASES_HUB_LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = useCasesHub[locale as UseCasesHubLocale] ?? useCasesHub.en;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.hero.title}.` }],
    footer: "Crewmark AI  ·  Use cases",
  });
}
