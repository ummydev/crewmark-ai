import type { Locale } from "next-intl";

import { PRICING_LOCALES, type PricingLocale, pricing } from "@/content/pricing";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /pricing: the page's headline over Crewmark's name.

export const alt = "Crewmark AI pricing";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return PRICING_LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = pricing[locale as PricingLocale] ?? pricing.en;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.hero.title}.` }],
    footer: "Crewmark AI  ·  Free, Pro and Team",
  });
}
