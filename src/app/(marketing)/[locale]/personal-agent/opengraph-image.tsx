import type { Locale } from "next-intl";

import {
  PERSONAL_AGENT_HUB_LOCALES,
  type PersonalAgentHubLocale,
  personalAgentHub,
} from "@/content/personal-agent-hub";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /personal-agent: the page's headline over Crewmark's name.

export const alt = "Personal AI agents, compared by Crewmark AI";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return PERSONAL_AGENT_HUB_LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = personalAgentHub[locale as PersonalAgentHubLocale] ?? personalAgentHub.en;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.hero.title}.` }],
    footer: "Crewmark AI  ·  Personal agents",
  });
}
