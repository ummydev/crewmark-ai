import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { pricingCopy } from "@/content/product-pricing";
import { localizedMetadata } from "@/i18n/metadata";
import { pricingSlugs, productPageLocales } from "@/i18n/product-pages";

// One "<product> pricing" page (/pricing/devin, /pricing/openclaw, ...), MC-439, rendered like a guide. Every page is
// prerendered; any other slug, or a language the page isn't written in, is a 404. Like the personal agent route, it
// reads `params` outside <Suspense> so an unknown slug gets a real 404 status, and opts out of instant navigation.
export const instant = false;

export function generateStaticParams() {
  return pricingSlugs.map((slug) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/pricing/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const page = pricingSlugs.find((s) => s === slug);
  const c = page && pricingCopy[page][locale];
  if (!page || !c) notFound();
  return { href: `/pricing/${page}`, locale, locales: productPageLocales, slug: page, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/pricing/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function Page({ params }: PageProps<"/[locale]/pricing/[slug]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`pricing-${slug}`} c={c} />
    </GuideShell>
  );
}
