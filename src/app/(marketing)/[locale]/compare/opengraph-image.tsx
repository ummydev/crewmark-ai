import type { Locale } from "next-intl";

import { compareBundles } from "@/content/compare";
import { compareLocales } from "@/i18n/compare";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /compare.

export const alt = "Comparisons, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return compareLocales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const bundle = compareBundles[locale] ?? compareBundles.en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${bundle.ui.hub.breadcrumb}.` }],
    footer: "Crewmark AI",
  });
}
