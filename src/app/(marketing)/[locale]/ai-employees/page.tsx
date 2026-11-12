import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { AI_EMPLOYEES_LOCALES as LOCALES, type AiEmployeesLocale, aiEmployees } from "@/content/ai-employees";
import { localizedMetadata } from "@/i18n/metadata";

// What an AI employee is, how it differs from an AI agent, examples by role and how to hire one. aiemployee.space
// redirects here. Written in English and Chinese only; every other language is a 404.

const HREF = "/ai-employees";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as AiEmployeesLocale, c: aiEmployees[locale as AiEmployeesLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function AiEmployeesPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="ai-employees" c={c} />
    </GuideShell>
  );
}
