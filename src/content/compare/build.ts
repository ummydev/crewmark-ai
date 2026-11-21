import type { GuideCopy, GuideSection } from "@/components/landing/guide-article";
import { type ComparePair, type CompareProduct, comparePairs, compareProducts } from "@/i18n/compare";
import { isAlternativesSlug, isPricingSlug, staticAlternatives } from "@/i18n/product-pages";

import type { CompareBundle, ProductFacts } from "./types";

// Builds the A vs B pages and the /compare index from one language's CompareBundle. The facts table always has a third
// column for Crewmark, and every page links to the other comparisons that share one of its two products.

const fill = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (whole, key: string) => values[key] ?? whole);

export const compareHref = (slug: string) => `/compare/${slug}`;

const factRows = (b: CompareBundle, columns: ProductFacts[]) =>
  (Object.keys(b.ui.rows) as (keyof CompareBundle["ui"]["rows"])[]).map((key) => [
    b.ui.rows[key],
    ...columns.map((p) => p[key]),
  ]);

/** Links to the "<product> alternatives" and "<product> pricing" pages of these products, one point per product. */
function moreLinks(b: CompareBundle, products: readonly CompareProduct[]): string[] {
  return products.flatMap((slug) => {
    const name = b.products[slug].name;
    const links = [
      ...(isAlternativesSlug(slug) || (staticAlternatives as readonly string[]).includes(slug)
        ? [`[${fill(b.ui.alternativesLabel, { x: name })}](/alternatives/${slug})`]
        : []),
      ...(isPricingSlug(slug) ? [`[${fill(b.ui.pricingLabel, { x: name })}](/pricing/${slug})`] : []),
    ];
    return links.length ? [links.join(" · ")] : [];
  });
}

/** /compare/<a>-vs-<b>. */
export function comparePage(b: CompareBundle, pair: ComparePair): GuideCopy {
  const a = b.products[pair.a];
  const z = b.products[pair.b];
  const cm = b.products.crewmark;
  const p = b.pairs[pair.slug];
  const values = { a: a.name, b: z.name };
  const ui = (text: string) => fill(text, values);
  const related = comparePairs.filter(
    (other) => other.slug !== pair.slug && [other.a, other.b].some((x) => x === pair.a || x === pair.b),
  );
  const sections: GuideSection[] = [
    {
      kind: "text",
      id: "short-answer",
      title: ui(b.ui.shortTitle),
      points: [a, z, cm].map((x) => `${x.name}: ${x.what}`),
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: ui(b.ui.tableTitle),
      headers: ["", a.name, z.name, cm.name],
      rows: factRows(b, [a, z, cm]),
    },
    { kind: "text", id: "differences", title: ui(b.ui.differencesTitle), points: p.differences },
    { kind: "text", id: "choose-a", title: fill(b.ui.pickTitle, { x: a.name }), points: p.pickA },
    { kind: "text", id: "choose-b", title: fill(b.ui.pickTitle, { x: z.name }), points: p.pickB },
    {
      kind: "text",
      id: "crewmark",
      title: ui(b.ui.crewmarkTitle),
      text: [ui(b.ui.crewmarkText)],
      points: b.ui.crewmarkPoints.map(ui),
    },
    {
      kind: "text",
      id: "sources",
      title: b.ui.sourcesTitle,
      text: [b.ui.sourcesText],
      points: [a, z].map((x) => `[${x.name}](${x.href})`),
    },
    ...(related.length
      ? [
          {
            kind: "text" as const,
            id: "related",
            title: b.ui.relatedTitle,
            points: related.map(
              (r) => `[${b.products[r.a].name} vs ${b.products[r.b].name}](${compareHref(r.slug)})`,
            ),
          },
        ]
      : []),
    ...(moreLinks(b, [pair.a, pair.b]).length
      ? [{ kind: "text" as const, id: "more", title: b.ui.moreTitle, points: moreLinks(b, [pair.a, pair.b]) }]
      : []),
  ];
  return {
    meta: { title: p.title, description: p.description },
    breadcrumb: `${a.name} vs ${z.name}`,
    parent: { name: b.ui.hubName, href: "/compare" },
    hero: { kicker: b.ui.kicker, title: p.h1, lead: p.lead, cta: b.ui.cta, secondary: b.ui.secondary, secondaryHref: "#at-a-glance" },
    sections,
    mid: { title: ui(b.ui.midTitle), text: ui(b.ui.midText), button: b.ui.midButton },
    faq: { title: b.ui.faqTitle, items: [...p.faq, { q: ui(b.ui.crewmarkFaq.q), a: ui(b.ui.crewmarkFaq.a) }] },
    cta: { title: ui(b.ui.ctaTitle), text: b.ui.ctaText, button: b.ui.ctaButton },
    checked: b.ui.checked,
    disclaimer: b.ui.disclaimer,
  };
}

/** /compare: every comparison, and the products they cover. */
export function compareHubPage(b: CompareBundle): GuideCopy {
  const h = b.ui.hub;
  const used = [...new Set(comparePairs.flatMap((p) => [p.a, p.b]))] as CompareProduct[];
  return {
    meta: h.meta,
    breadcrumb: h.breadcrumb,
    hero: { kicker: b.ui.hubName, title: h.title, lead: h.lead, cta: b.ui.cta, secondary: h.tableTitle, secondaryHref: "#comparisons" },
    sections: [
      {
        kind: "table",
        id: "comparisons",
        title: h.tableTitle,
        headers: h.tableHeaders,
        rows: comparePairs.map((p) => [
          `[${b.products[p.a].name} vs ${b.products[p.b].name}](${compareHref(p.slug)})`,
          b.pairs[p.slug].summary,
        ]),
      },
      {
        kind: "text",
        id: "more",
        title: h.moreTitle,
        points: moreLinks(b, compareProducts),
      },
      {
        kind: "table",
        id: "products",
        title: h.productsTitle,
        headers: h.productsHeaders,
        rows: [...used, "crewmark" as const].map((slug) => {
          const x = b.products[slug];
          return [x.name, x.category, x.openSource];
        }),
      },
    ],
    mid: { title: h.midTitle, text: b.ui.ctaText, button: b.ui.midButton },
    faq: { title: b.ui.faqTitle, items: h.faq },
    cta: { title: h.ctaTitle, text: b.ui.ctaText, button: b.ui.ctaButton },
    checked: b.ui.checked,
    disclaimer: b.ui.disclaimer,
  };
}
