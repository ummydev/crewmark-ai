import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { skillPagesCopy } from "@/content/skill-pages";
import { localizedMetadata } from "@/i18n/metadata";
import { skillPages } from "@/i18n/skill-pages";

// One "best Claude skills for <job>" page (/skills/website-design, ...), rendered like a guide. Every page is
// prerendered; any other slug, or a language the page isn't written in, is a 404. Like the blog post route, it reads
// `params` outside <Suspense> so an unknown slug gets a real 404 status, and opts out of instant navigation for that.
export const instant = false;

export function generateStaticParams() {
  return skillPages.map(({ slug }) => ({ topic: slug }));
}

async function copy(params: PageProps<"/[locale]/skills/[topic]">["params"]) {
  const [{ topic }, locale] = await Promise.all([params, getLocale()]);
  const page = skillPages.find((p) => p.slug === topic);
  const c = page && skillPagesCopy[page.slug][locale];
  if (!page || !c) notFound();
  return { href: `/skills/${page.slug}`, locale, locales: page.locales, slug: page.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/skills/[topic]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function SkillTopicPage({ params }: PageProps<"/[locale]/skills/[topic]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`skills-${slug}`} c={c} />
    </GuideShell>
  );
}
