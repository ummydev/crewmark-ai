import type { Locale } from "next-intl";

import { alternativesCopy } from "@/content/product-alternatives";
import { alternativesSlugs, productPageLocales } from "@/i18n/product-pages";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each alternatives page (MC-439): its short title over Crewmark's name.

export const alt = "AI agent alternatives compared by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return alternativesSlugs.flatMap((slug) => productPageLocales.map((locale) => ({ locale, slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const page = alternativesSlugs.find((s) => s === slug) ?? alternativesSlugs[0];
  const c = alternativesCopy[page][locale] ?? alternativesCopy[page].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  Alternatives",
  });
}
