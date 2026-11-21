import type { Locale } from "next-intl";

import { useCaseCopy } from "@/content/use-cases";
import { agentTaskBundles } from "@/content/use-cases/agent-tasks";
import { agentSlugs, agentTaskLocales, isAgentSlug, useCasePages } from "@/i18n/use-cases";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each use case: its short title over Crewmark's name.

export const alt = "AI employee use case, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return [
    ...useCasePages.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, slug }))),
    ...agentSlugs.flatMap((slug) => agentTaskLocales.map((locale) => ({ locale, slug }))),
  ];
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  if (isAgentSlug(slug)) {
    const bundle = agentTaskBundles[locale] ?? agentTaskBundles.en!;
    return shareCard({
      locale,
      lines: [{ before: "", marked: `${bundle.agents[slug].hub.breadcrumb}.` }],
      footer: "Crewmark AI  ·  Use cases",
    });
  }
  const page = useCasePages.find((p) => p.slug === slug) ?? useCasePages[0];
  const c = useCaseCopy[page.slug][locale] ?? useCaseCopy[page.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark AI  ·  Use cases",
  });
}
