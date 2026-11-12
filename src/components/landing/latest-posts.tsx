import type { Locale } from "next-intl";

import { postCopy } from "@/content/blog";
import { posts } from "@/i18n/blog";
import { getPathname } from "@/i18n/navigation";

/**
 * Links to the newest blog posts written in the reader's language, for the footers of the home page and the guides.
 * The home page is the page search engines know best, so a new post linked from here is found without waiting for the
 * sitemap.
 */
export function LatestPosts({ locale, current, count = 5 }: { locale: Locale; current?: string; count?: number }) {
  const list = posts
    .filter((post) => (post.locales as readonly string[]).includes(locale) && `/blog/${post.slug}` !== current)
    .slice(0, count);
  return list.map((post) => {
    const href = `/blog/${post.slug}`;
    return (
      <li key={post.slug}>
        <a href={getPathname({ href, locale })}>{postCopy[post.slug][locale]!.breadcrumb}</a>
      </li>
    );
  });
}
