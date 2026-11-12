import type { Locale } from "next-intl";

import { localizedUrls, siteUrl } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";

// schema.org entities for the marketing pages. Every page links to the same Organization and WebSite by @id, so
// search engines read "Crewmark" as one brand and don't confuse it with similarly named companies.

const organizationId = new URL("/#organization", siteUrl).href;
const websiteId = new URL("/#website", siteUrl).href;
const softwareId = new URL("/#software", siteUrl).href;

const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: "Crewmark",
  url: siteUrl.href,
  logo: { "@type": "ImageObject", url: new URL("/logo.png", siteUrl).href, width: 512, height: 512 },
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  name: "Crewmark",
  url: siteUrl.href,
  inLanguage: [...routing.locales],
  publisher: { "@id": organizationId },
};

/** The home page: the brand, the product and its FAQ, in the page's language. */
export function homeStructuredData({
  locale,
  title,
  description,
  faq,
}: {
  locale: Locale;
  title: string;
  description: string;
  faq: { q: string; a: string }[];
}) {
  const url = localizedUrls("/")[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: "Crewmark",
        url: siteUrl.href,
        applicationCategory: "BusinessApplication",
        description,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": softwareId },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        isPartOf: { "@id": url },
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/** A guide page under the home page: the page, its breadcrumb trail back to the home page, its FAQ and, for a
 * how-to, its steps. */
export function guideStructuredData({
  href,
  locale,
  locales,
  title,
  description,
  breadcrumb,
  faq,
  howTo,
  parent,
  article,
}: {
  href: string;
  locale: Locale;
  locales: readonly Locale[];
  title: string;
  description: string;
  breadcrumb: string;
  faq: { q: string; a: string }[];
  howTo?: { name: string; steps: { name: string; text: string }[] };
  /** A page between the home page and this one in the breadcrumb, e.g. the blog index for a post. */
  parent?: { name: string; href: string };
  /** For a blog post: marks the page up as a BlogPosting with these dates (YYYY-MM-DD). */
  article?: { published: string; modified?: string };
}) {
  const url = localizedUrls(href, locales)[locale];
  const trail = [
    { name: "Crewmark", item: localizedUrls("/")[locale] },
    ...(parent ? [{ name: parent.name, item: localizedUrls(parent.href, [locale])[locale] }] : []),
    { name: breadcrumb, item: url },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": softwareId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: trail.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        isPartOf: { "@id": url },
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      ...(article
        ? [
            {
              "@type": "BlogPosting",
              "@id": `${url}#article`,
              headline: title.replace(/ \| Crewmark$/, ""),
              description,
              inLanguage: locale,
              mainEntityOfPage: { "@id": url },
              datePublished: article.published,
              dateModified: article.modified ?? article.published,
              author: { "@id": organizationId },
              publisher: { "@id": organizationId },
            },
          ]
        : []),
      ...(howTo
        ? [
            {
              "@type": "HowTo",
              "@id": `${url}#how-to`,
              name: howTo.name,
              inLanguage: locale,
              isPartOf: { "@id": url },
              step: howTo.steps.map(({ name, text }, i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
            },
          ]
        : []),
    ],
  };
}
