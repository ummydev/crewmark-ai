import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { compareBundles, compareHubPage } from "@/content/compare";
import { compareLocales } from "@/i18n/compare";
import { localizedMetadata } from "@/i18n/metadata";

// /compare: every A vs B comparison (MC-387), rendered like a guide.

const HREF = "/compare";

async function copy() {
  const locale = await getLocale();
  const bundle = compareBundles[locale];
  if (!bundle) notFound();
  return { locale, c: compareHubPage(bundle) };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: compareLocales, ...c.meta });
}

export default async function ComparePage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={compareLocales} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={compareLocales} name="compare" c={c} />
    </GuideShell>
  );
}
