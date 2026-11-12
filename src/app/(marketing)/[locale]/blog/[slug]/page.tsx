import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideArticle } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { postCopy } from "@/content/blog";
import { posts } from "@/i18n/blog";
import { localizedMetadata } from "@/i18n/metadata";

// One blog post, rendered like a guide. Every post is prerendered; any other slug, or a language the post isn't
// written in, is a 404.
//
// It reads `params` outside <Suspense> so an unknown slug gets a real 404 status (inside Suspense the 404 would come
// after a 200 had been sent). That makes the route block on navigation, which Cache Components flags, so it opts out
// of instant navigation; every post is prerendered, so the wait is short.
export const instant = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

async function copy(params: PageProps<"/[locale]/blog/[slug]">["params"]) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const post = posts.find((p) => p.slug === slug);
  const c = post && postCopy[post.slug][locale];
  if (!post || !c) notFound();
  return { href: `/blog/${post.slug}`, locale, locales: post.locales, slug: post.slug, c };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { href, locale, locales, c } = await copy(params);
  return localizedMetadata({ href, locale, locales, ...c.meta });
}

export default async function BlogPostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { href, locale, locales, slug, c } = await copy(params);
  return (
    <GuideShell href={href} locale={locale} locales={locales} disclaimer={c.disclaimer}>
      <GuideArticle href={href} locale={locale} locales={locales} name={`blog-${slug}`} c={c} />
    </GuideShell>
  );
}
