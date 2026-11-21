import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { agentTaskBundles, agentTaskHref, agentTaskPage } from "@/content/use-cases/agent-tasks";
import { localizedMetadata } from "@/i18n/metadata";
import { agentSlugs, agentTaskLocales, agentTaskSlugs, isAgentSlug, isAgentTaskSlug } from "@/i18n/use-cases";

// One agent × task page (/use-cases/claude-code/seo, /use-cases/codex/code-review, ..., MC-386): how that agent does the
// job, built from content/use-cases/agent-tasks. Every page is prerendered; any other pair is a 404. Like the use-case
// route, it reads `params` outside <Suspense> so an unknown pair gets a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return agentSlugs.flatMap((slug) => agentTaskSlugs.map((task) => ({ slug, task })));
}

async function copy(params: PageProps<"/[locale]/use-cases/[slug]/[task]">["params"]) {
  const [{ slug, task }, locale] = await Promise.all([params, getLocale()]);
  const bundle = agentTaskBundles[locale];
  if (!isAgentSlug(slug) || !isAgentTaskSlug(task) || !bundle) notFound();
  return {
    href: agentTaskHref(slug, task),
    locale,
    name: `use-case-${slug}-${task}`,
    c: agentTaskPage(bundle, slug, task),
  };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/use-cases/[slug]/[task]">): Promise<Metadata> {
  const { href, locale, c } = await copy(params);
  return localizedMetadata({ href, locale, locales: agentTaskLocales, ...c.meta });
}

export default async function AgentTaskPage({ params }: PageProps<"/[locale]/use-cases/[slug]/[task]">) {
  const { href, locale, name, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={agentTaskLocales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={agentTaskLocales} name={name} c={c} />
    </GuideShell>
  );
}
