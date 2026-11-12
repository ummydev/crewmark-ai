import type { Metadata } from "next";
import type { Locale } from "next-intl";

import { getPathname } from "./navigation";
import { routing } from "./routing";

/** Where the site is served in production; canonical, hreflang and sitemap URLs point here. */
export const siteUrl = new URL("https://crewmark.ai");

/** The page's URL in every language it's written in (all of them unless `locales` says otherwise), keyed by
 * hreflang code. */
export function localizedUrls(href: string, locales: readonly Locale[] = routing.locales) {
  return Object.fromEntries(
    locales.map((locale) => [locale, new URL(getPathname({ href, locale }), siteUrl).href]),
  ) as Record<Locale, string>;
}

/** Canonical URL plus hreflang alternates (and x-default) for a localized page; use in generateMetadata. */
export function localizedAlternates(
  href: string,
  locale: Locale,
  locales: readonly Locale[] = routing.locales,
): Metadata["alternates"] {
  const urls = localizedUrls(href, locales);
  return {
    canonical: urls[locale],
    languages: { ...urls, "x-default": urls[routing.defaultLocale] },
  };
}

/** og:locale for each language, which Open Graph writes with an underscore and a country. */
const ogLocales = {
  en: "en_US",
  zh: "zh_CN",
  "zh-TW": "zh_TW",
  ja: "ja_JP",
  ko: "ko_KR",
  es: "es_ES",
  "pt-BR": "pt_BR",
  fr: "fr_FR",
  de: "de_DE",
} satisfies Record<Locale, string>;

/**
 * Everything a localized marketing page puts in its <head>: title, description, canonical and hreflang, and the
 * card shown when the link is shared. The card's image comes from the nearest opengraph-image file. A page written
 * in only some languages lists them in `locales`.
 */
export function localizedMetadata({
  href,
  locale,
  title,
  description,
  locales = routing.locales,
}: {
  href: string;
  locale: Locale;
  title: string;
  description: string;
  locales?: readonly Locale[];
}): Metadata {
  return {
    title,
    description,
    alternates: localizedAlternates(href, locale, locales),
    openGraph: {
      type: "website",
      siteName: "Crewmark",
      url: localizedUrls(href, locales)[locale],
      title,
      description,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
