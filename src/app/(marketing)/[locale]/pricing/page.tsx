import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { PRICING_LOCALES as LOCALES, type PricingLocale, pricing } from "@/content/pricing";
import { localizedMetadata } from "@/i18n/metadata";

// /pricing: Free, Pro and Team (lib/pricing.ts), rendered like a guide.

const HREF = "/pricing";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as PricingLocale, c: pricing[locale as PricingLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function PricingPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="pricing" c={c} />
    </GuideShell>
  );
}
