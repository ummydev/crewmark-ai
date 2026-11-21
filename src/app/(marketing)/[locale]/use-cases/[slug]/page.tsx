import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { useCaseCopy } from "@/content/use-cases";
import { agentHubPage, agentTaskBundles } from "@/content/use-cases/agent-tasks";
import { useCasesHub } from "@/content/use-cases-hub";
import { localizedMetadata } from "@/i18n/metadata";
import { agentSlugs, agentTaskLocales, isAgentSlug, useCasePages } from "@/i18n/use-cases";

// One use case (/use-cases/daily-seo-report, ...): a job an AI employee does on a schedule, with the role brief to copy,
// rendered like a guide. The same segment serves the agent hubs (/use-cases/claude-code, /use-cases/codex, MC-386), which
// list that agent's task pages. Every page is prerendered; any other slug, or a language the page isn't written in, is
// a 404. Like the blog post route, it reads `params` outside <Suspense> so an unknown slug gets a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return [...useCasePages.map(({ slug }) => ({ slug })), ...agentSlugs.map((slug) => ({ slug }))];
}

async function copy(params: PageProps<"/[locale]/use-cases/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  if (isAgentSlug(slug)) {
    const bundle = agentTaskBundles[locale];
    if (!bundle) notFound();
    const hubName = (useCasesHub[locale as keyof typeof useCasesHub] ?? useCasesHub.en).breadcrumb;
    return {
      href: `/use-cases/${slug}`,
      locale,
      locales: agentTaskLocales,
      name: `use-case-${slug}`,
      c: agentHubPage(bundle, slug, hubName),
    };
  }
  const page = useCasePages.find((p) => p.slug === slug);
  const c = page && useCaseCopy[page.slug][locale];
  if (!page || !c) notFound();
  return { href: `/use-cases/${page.slug}`, locale, locales: page.locales, name: `use-case-${page.slug}`, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/use-cases/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function UseCasePage({ params }: PageProps<"/[locale]/use-cases/[slug]">) {
  const { href, locale, locales, name, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={name} c={c} />
    </GuideShell>
  );
}
