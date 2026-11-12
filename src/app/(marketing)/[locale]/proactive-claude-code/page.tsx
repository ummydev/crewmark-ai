import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import {
  PROACTIVE_CLAUDE_CODE_LOCALES as LOCALES,
  type ProactiveClaudeCodeLocale,
  proactiveClaudeCode,
} from "@/content/proactive-claude-code";
import { localizedMetadata } from "@/i18n/metadata";

// How to make Claude Code proactive: the built-in features honestly, then what Crewmark adds. Written in English and
// Chinese only; every other language is a 404.

const HREF = "/proactive-claude-code";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as ProactiveClaudeCodeLocale, c: proactiveClaudeCode[locale as ProactiveClaudeCodeLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function ProactiveClaudeCodePage() {
  const { locale, c } = await copy();
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <GuideArticle href={HREF} locale={locale} locales={LOCALES} name="proactive-claude-code" c={c} />
    </GuideShell>
  );
}
