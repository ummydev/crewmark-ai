import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { compareBundles, compareHref, comparePage } from "@/content/compare";
import { compareLocales, comparePairs } from "@/i18n/compare";
import { localizedMetadata } from "@/i18n/metadata";

// One comparison (/compare/paperclip-vs-crewai, ..., MC-387): two products side by side with Crewmark as a third
// column, built from content/compare. Every page is prerendered; any other slug is a 404. Like the use-case route, it
// reads `params` outside <Suspense> so an unknown slug gets a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return comparePairs.map(({ slug }) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/compare/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const pair = comparePairs.find((p) => p.slug === slug);
  const bundle = compareBundles[locale];
  if (!pair || !bundle) notFound();
  return { href: compareHref(pair.slug), locale, slug: pair.slug, c: comparePage(bundle, pair) };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/compare/[slug]">): Promise<Metadata> {
  const { href, locale, c } = await copy(params);
  return localizedMetadata({ href, locale, locales: compareLocales, ...c.meta });
}

export default async function ComparePairPage({ params }: PageProps<"/[locale]/compare/[slug]">) {
  const { href, locale, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={compareLocales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={compareLocales} name={`compare-${slug}`} c={c} />
    </GuideShell>
  );
}
