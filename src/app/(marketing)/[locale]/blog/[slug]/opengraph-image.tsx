import type { Locale } from "next-intl";

import { postCopy } from "@/content/blog";
import { posts } from "@/i18n/blog";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each blog post: its short title (the breadcrumb) over the blog's name.

export const alt = "A Crewmark tutorial";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const c = postCopy[post.slug][locale] ?? postCopy[post.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark blog  ·  Claude Code and Codex tutorials",
  });
}
