import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideShell } from "@/components/landing/guide-shell";
import { LegalPage } from "@/components/landing/legal-page";
import { LEGAL_LOCALES as LOCALES, type LegalLocale, privacy } from "@/content/legal";
import { localizedMetadata } from "@/i18n/metadata";

// /privacy (MC-360), linked from every public footer. The copy is in content/legal.ts and content/i18n/<locale>/privacy.ts.

const HREF = "/privacy";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as LegalLocale, c: privacy[locale as LegalLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function PrivacyPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer="">
      <LegalPage locale={locale} c={c} />
    </GuideShell>
  );
}
