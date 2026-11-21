import type { Locale } from "next-intl";

import { pricingCopy } from "@/content/product-pricing";
import { pricingSlugs, productPageLocales } from "@/i18n/product-pages";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each pricing page (MC-439): its short title over Crewmark's name.

export const alt = "AI agent pricing explained by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return pricingSlugs.flatMap((slug) => productPageLocales.map((locale) => ({ locale, slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const page = pricingSlugs.find((s) => s === slug) ?? pricingSlugs[0];
  const c = pricingCopy[page][locale] ?? pricingCopy[page].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  Pricing",
  });
}
