import type { Locale } from "next-intl";

import { agentTaskBundles } from "@/content/use-cases/agent-tasks";
import { agentSlugs, agentTaskLocales, agentTaskSlugs, isAgentSlug, isAgentTaskSlug } from "@/i18n/use-cases";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each agent × task page: its short title over Crewmark's name.

export const alt = "AI employee use case, by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return agentTaskLocales.flatMap((locale) =>
    agentSlugs.flatMap((slug) => agentTaskSlugs.map((task) => ({ locale, slug, task }))),
  );
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string; task: string }> }) {
  const { locale, slug, task } = await params;
  const bundle = agentTaskBundles[locale] ?? agentTaskBundles.en!;
  const agent = isAgentSlug(slug) ? slug : "claude-code";
  const pair = bundle.pairs[agent][isAgentTaskSlug(task) ? task : "seo"];
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${pair.breadcrumb}.` }],
    footer: `Crewmark AI  ·  ${bundle.agents[agent].hub.breadcrumb}`,
  });
}
