import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import {
  PERSONAL_AGENT_HUB_LOCALES as LOCALES,
  type PersonalAgentHubLocale,
  personalAgentHub,
} from "@/content/personal-agent-hub";
import { localizedMetadata } from "@/i18n/metadata";

// /personal-agent: what personal AI agents are, the ones people search for compared, and the guides to each, rendered
// like a guide.

const HREF = "/personal-agent";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as PersonalAgentHubLocale, c: personalAgentHub[locale as PersonalAgentHubLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function PersonalAgentPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="personal-agent" c={c} />
    </GuideShell>
  );
}
