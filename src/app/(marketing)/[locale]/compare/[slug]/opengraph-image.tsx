import type { Locale } from "next-intl";

import { compareBundles } from "@/content/compare";
import { compareLocales, comparePairs } from "@/i18n/compare";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each comparison: "A vs B." over Crewmark's name.

export const alt = "Comparison, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return compareLocales.flatMap((locale) => comparePairs.map(({ slug }) => ({ locale, slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const bundle = compareBundles[locale] ?? compareBundles.en!;
  const pair = comparePairs.find((p) => p.slug === slug) ?? comparePairs[0];
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${bundle.products[pair.a].name} vs ${bundle.products[pair.b].name}.` }],
    footer: `Crewmark AI  ·  ${bundle.ui.hubName}`,
  });
}
