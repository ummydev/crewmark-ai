import type { Locale } from "next-intl";

import { SKILLS_HUB_LOCALES, type SkillsHubLocale, skillsHub } from "@/content/skills-hub";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /skills: the page's headline over Crewmark's name.

export const alt = "Claude skills from an AI marketing team";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return SKILLS_HUB_LOCALES.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = skillsHub[locale as SkillsHubLocale] ?? skillsHub.en;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.hero.title}.` }],
    footer: "Crewmark AI  ·  Marketing Team Skills",
  });
}
