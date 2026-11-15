import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { SKILLS_HUB_LOCALES as LOCALES, type SkillsHubLocale, skillsHub } from "@/content/skills-hub";
import { localizedMetadata } from "@/i18n/metadata";

// /skills: Marketing Team Skills and the "best Claude skills for <job>" guides, rendered like a guide.

const HREF = "/skills";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as SkillsHubLocale, c: skillsHub[locale as SkillsHubLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function SkillsPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="skills" c={c} />
    </GuideShell>
  );
}
