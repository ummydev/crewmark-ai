import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { alternativesCopy } from "@/content/product-alternatives";
import { localizedMetadata } from "@/i18n/metadata";
import { alternativesSlugs, productPageLocales } from "@/i18n/product-pages";

// One "<product> alternatives" page (/alternatives/autogen, /alternatives/grok-bot, ...), MC-439, rendered like a guide. Every page is
// prerendered; any other slug, or a language the page isn't written in, is a 404. Like the personal agent route, it
// reads `params` outside <Suspense> so an unknown slug gets a real 404 status, and opts out of instant navigation.
export const instant = false;

export function generateStaticParams() {
  return alternativesSlugs.map((slug) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/alternatives/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const page = alternativesSlugs.find((s) => s === slug);
  const c = page && alternativesCopy[page][locale];
  if (!page || !c) notFound();
  return { href: `/alternatives/${page}`, locale, locales: productPageLocales, slug: page, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/alternatives/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function Page({ params }: PageProps<"/[locale]/alternatives/[slug]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`alternatives-${slug}`} c={c} />
    </GuideShell>
  );
}
