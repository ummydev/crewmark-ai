import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { USE_CASES_HUB_LOCALES as LOCALES, type UseCasesHubLocale, useCasesHub } from "@/content/use-cases-hub";
import { localizedMetadata } from "@/i18n/metadata";

// /use-cases: every job you can hand to an AI employee on Claude Code or Codex, by team, rendered like a guide.

const HREF = "/use-cases";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as UseCasesHubLocale, c: useCasesHub[locale as UseCasesHubLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function UseCasesPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="use-cases" c={c} />
    </GuideShell>
  );
}
