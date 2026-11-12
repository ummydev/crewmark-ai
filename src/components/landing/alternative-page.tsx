import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "next-intl";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { type Alternative, alternativeCopy, alternatives } from "@/content/alternatives";
import { guideLocales } from "@/i18n/guides";
import { localizedMetadata } from "@/i18n/metadata";
import { shareCard } from "@/lib/share-card";

// An "<product> alternative" page (app/(marketing)/[locale]/alternatives/<product>): what the other product is, a
// comparison table, who should pick which, and how to switch. Each product has its own route folder so the page needs
// no URL params. Written in every language the site has (content/i18n/ for all but English).

async function copy(product: Alternative) {
  const href = `/alternatives/${product}` as const;
  const locale = await getLocale();
  const c = alternativeCopy(product, locale);
  if (!c) notFound();
  return { href, locale, locales: guideLocales[href], c };
}

export async function alternativeMetadata(product: Alternative): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(product);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export async function AlternativePage({ product }: { product: Alternative }) {
  const { href, locale, locales, c } = await copy(product);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`${product}-alternative`} c={c} />
    </GuideShell>
  );
}

/** The page's share card in `locale`; its opengraph-image file renders this. Other languages show the translated
 * headline. */
export function alternativeImage(product: Alternative, locale: Locale) {
  const { card } = alternatives[product];
  if (locale === "en")
    return shareCard({
      locale,
      lines: [{ before: `A ${card.product} alternative:` }, { before: "", marked: "AI employees on a board." }],
      footer: `${card.tagline}  ·  Crewmark`,
    });
  const c = alternativeCopy(product, locale) ?? alternatives[product].en;
  return shareCard({ locale, lines: [{ before: "", marked: c.hero.title }], footer: `${c.breadcrumb}  ·  Crewmark` });
}
