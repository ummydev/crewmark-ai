import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import {
  PROACTIVE_CODEX_LOCALES as LOCALES,
  type ProactiveCodexLocale,
  proactiveCodex,
} from "@/content/proactive-codex";
import { localizedMetadata } from "@/i18n/metadata";

// How to make Codex (and ChatGPT) proactive: OpenAI's features honestly, then what Crewmark adds. Written in English and
// Chinese only; every other language is a 404.

const HREF = "/proactive-codex";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as ProactiveCodexLocale, c: proactiveCodex[locale as ProactiveCodexLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function ProactiveCodexPage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="proactive-codex" c={c} />
    </GuideShell>
  );
}
