import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { useCaseCopy } from "@/content/use-cases";
import { localizedMetadata } from "@/i18n/metadata";
import { useCasePages } from "@/i18n/use-cases";

// One use case (/use-cases/daily-seo-report, ...): a job an AI employee does on a schedule, with the role brief to copy,
// rendered like a guide. Every page is prerendered; any other slug, or a language the page isn't written in, is a 404.
// Like the blog post route, it reads `params` outside <Suspense> so an unknown slug gets a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return useCasePages.map(({ slug }) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/use-cases/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const page = useCasePages.find((p) => p.slug === slug);
  const c = page && useCaseCopy[page.slug][locale];
  if (!page || !c) notFound();
  return { href: `/use-cases/${page.slug}`, locale, locales: page.locales, slug: page.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/use-cases/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function UseCasePage({ params }: PageProps<"/[locale]/use-cases/[slug]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`use-case-${slug}`} c={c} />
    </GuideShell>
  );
}
