import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { audienceCopy } from "@/content/use-cases";
import { localizedMetadata } from "@/i18n/metadata";
import { audiencePages } from "@/i18n/use-cases";

// One audience page (/for/marketing, ...): what that team hands to an AI employee, rendered like a guide. Every page is
// prerendered; any other slug, or a language the page isn't written in, is a 404. Like the blog post route, it reads
// `params` outside <Suspense> so an unknown slug gets a real 404 status, and opts out of instant navigation for that.
export const instant = false;

export function generateStaticParams() {
  return audiencePages.map(({ slug }) => ({ audience: slug }));
}

async function copy(params: PageProps<"/[locale]/for/[audience]">["params"]) {
  const [{ audience }, locale] = await Promise.all([params, getLocale()]);
  const page = audiencePages.find((p) => p.slug === audience);
  const c = page && audienceCopy[page.slug][locale];
  if (!page || !c) notFound();
  return { href: `/for/${page.slug}`, locale, locales: page.locales, slug: page.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/for/[audience]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function AudiencePage({ params }: PageProps<"/[locale]/for/[audience]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`for-${slug}`} c={c} />
    </GuideShell>
  );
}
