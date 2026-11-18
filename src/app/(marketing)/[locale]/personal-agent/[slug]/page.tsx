import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { personalAgentsCopy } from "@/content/personal-agents";
import { localizedMetadata } from "@/i18n/metadata";
import { personalAgentPages } from "@/i18n/personal-agents";

// One personal agent guide (/personal-agent/meta-muse, /personal-agent/grok-bot-routines, ...), rendered like a guide.
// Every page is prerendered; any other slug, or a language the page isn't written in, is a 404. Like the blog post
// route, it reads `params` outside <Suspense> so an unknown slug gets a real 404 status, and opts out of instant
// navigation for that.
export const instant = false;

export function generateStaticParams() {
  return personalAgentPages.map(({ slug }) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/personal-agent/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const page = personalAgentPages.find((p) => p.slug === slug);
  const c = page && personalAgentsCopy[page.slug][locale];
  if (!page || !c) notFound();
  return { href: `/personal-agent/${page.slug}`, locale, locales: page.locales, slug: page.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/personal-agent/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function PersonalAgentGuidePage({ params }: PageProps<"/[locale]/personal-agent/[slug]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`personal-agent-${slug}`} c={c} />
    </GuideShell>
  );
}
