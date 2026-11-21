import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideShell } from "@/components/landing/guide-shell";
import { LegalPage } from "@/components/landing/legal-page";
import { LEGAL_LOCALES as LOCALES, type LegalLocale, terms } from "@/content/legal";
import { localizedMetadata } from "@/i18n/metadata";

// /terms (MC-360), linked from every public footer. The copy is in content/legal.ts and content/i18n/<locale>/terms.ts.

const HREF = "/terms";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as LegalLocale, c: terms[locale as LegalLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function TermsPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer="">
      <LegalPage locale={locale} c={c} />
    </GuideShell>
  );
}
