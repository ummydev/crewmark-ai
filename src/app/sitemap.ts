import type { MetadataRoute } from "next";

import type { Locale } from "next-intl";

import { blogLocales } from "@/i18n/blog";
import { guideLocales } from "@/i18n/guides";
import { localizedUrls } from "@/i18n/metadata";
import { roleLocales } from "@/i18n/roles";
import { routing } from "@/i18n/routing";

// The localized marketing pages and the languages each is written in. Add a new one here, or to i18n/guides.ts if
// it's written in only some languages (and to the matcher in proxy.ts if it has no prefix in English). Blog posts come
// from i18n/blog.ts, role pages from i18n/roles.ts.
const pages: [href: string, locales: readonly Locale[]][] = [
  ["/", routing.locales],
  ...Object.entries(guideLocales),
  ...Object.entries(blogLocales),
  ...Object.entries(roleLocales),
];

// Every language version gets its own entry, each listing all its alternates, as Google asks for.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(([href, locales]) => {
    const urls = localizedUrls(href, locales);
    return locales.map((locale) => ({ url: urls[locale], alternates: { languages: urls } }));
  });
}
