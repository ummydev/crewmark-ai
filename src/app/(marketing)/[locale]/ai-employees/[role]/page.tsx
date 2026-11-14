import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { rolesCopy } from "@/content/roles";
import { localizedMetadata } from "@/i18n/metadata";
import { roles } from "@/i18n/roles";

// One AI employee role (/ai-employees/seo-specialist, …), rendered like a guide. Every role is prerendered; any other
// slug, or a language the role isn't written in, is a 404. Like the blog post route, it reads `params` outside
// <Suspense> so an unknown role gets a real 404 status, and opts out of instant navigation for that.
export const instant = false;

export function generateStaticParams() {
  return roles.map(({ slug }) => ({ role: slug }));
}

async function copy(params: PageProps<"/[locale]/ai-employees/[role]">["params"]) {
  const [{ role: slug }, locale] = await Promise.all([params, getLocale()]);
  const role = roles.find((r) => r.slug === slug);
  const c = role && rolesCopy[role.slug][locale];
  if (!role || !c) notFound();
  return { href: `/ai-employees/${role.slug}`, locale, locales: role.locales, slug: role.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/ai-employees/[role]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function RolePage({ params }: PageProps<"/[locale]/ai-employees/[role]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`role-${slug}`} c={c} />
    </GuideShell>
  );
}
