import type { ComparePairSlug, CompareProduct } from "@/i18n/compare";

// The copy behind the A vs B pages (/compare/<a>-vs-<b>, MC-387) and the /compare index, in one language. build.ts
// turns it into GuideCopy. Product facts come from docs/compare/facts/<slug>.md, each checked against the product's own
// site, pricing page, docs or GitHub on the date in `ui.checked`; only what those sources state goes in here.
//
// `ui` strings may hold {a} and {b} (the two product names). Text may hold [label](href) links and `code`.

export type FaqItem = { q: string; a: string };

/** One product's facts, as table cells. Every field is a short phrase, never a judgement. */
export type ProductFacts = {
  name: string;
  /** Its official site. */
  href: string;
  /** One sentence: what it is. */
  what: string;
  category: string;
  openSource: string;
  pricing: string;
  runs: string;
  agents: string;
  board: string;
  schedule: string;
  talk: string;
};

export type CompareUi = {
  kicker: string;
  hubName: string;
  cta: string;
  secondary: string;
  shortTitle: string;
  tableTitle: string;
  rows: {
    category: string;
    openSource: string;
    pricing: string;
    runs: string;
    agents: string;
    board: string;
    schedule: string;
    talk: string;
  };
  differencesTitle: string;
  /** "Choose {x} if": {x} is either product's name. */
  pickTitle: string;
  crewmarkTitle: string;
  crewmarkText: string;
  crewmarkPoints: string[];
  sourcesTitle: string;
  sourcesText: string;
  relatedTitle: string;
  /** Links to the "<product> alternatives" and "<product> pricing" pages (MC-439). {x} is the product's name. */
  moreTitle: string;
  alternativesLabel: string;
  pricingLabel: string;
  midTitle: string;
  midText: string;
  midButton: string;
  faqTitle: string;
  /** Added to every pair's FAQ. */
  crewmarkFaq: FaqItem;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  checked: string;
  disclaimer: string;
  /** The /compare index. */
  hub: {
    meta: { title: string; description: string };
    breadcrumb: string;
    title: string;
    lead: string;
    tableTitle: string;
    tableHeaders: [string, string];
    productsTitle: string;
    /** The section linking every alternatives and pricing page (MC-439). */
    moreTitle: string;
    productsHeaders: [string, string, string];
    midTitle: string;
    ctaTitle: string;
    faq: FaqItem[];
  };
};

export type PairCopy = {
  /** One line for the /compare index. */
  summary: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** Three to five differences that matter for this pair. */
  differences: string[];
  pickA: string[];
  pickB: string[];
  faq: FaqItem[];
};

export type CompareBundle = {
  ui: CompareUi;
  products: Record<CompareProduct | "crewmark", ProductFacts>;
  pairs: Record<ComparePairSlug, PairCopy>;
};
