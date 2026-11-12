import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideShell } from "@/components/landing/guide-shell";
import { blogIndex, postCopy } from "@/content/blog";
import { posts } from "@/i18n/blog";
import { guideLocales } from "@/i18n/guides";
import { localizedMetadata } from "@/i18n/metadata";
import { getPathname } from "@/i18n/navigation";

// The blog index: every post written in the reader's language, newest first. Only in the languages that have posts.

const HREF = "/blog";
const LOCALES = guideLocales[HREF];

async function copy() {
  const locale = await getLocale();
  const c = blogIndex[locale];
  if (!LOCALES.includes(locale) || !c) notFound();
  return { locale, c };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function BlogPage() {
  const { locale, c } = await copy();
  const list = posts.filter((post) => (post.locales as readonly string[]).includes(locale));
  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer="">
      <header className="hero guide-hero container">
        <span className="kicker">{c.kicker}</span>
        <h1>{c.title}</h1>
        <p className="sub">{c.lead}</p>
      </header>
      <section className="guide-body container">
        <ul className="blog-list">
          {list.map((post) => {
            const meta = postCopy[post.slug][locale]!.meta;
            const href = getPathname({ href: `/blog/${post.slug}`, locale });
            return (
              <li key={post.slug}>
                <time dateTime={post.published}>{post.published}</time>
                <h2>
                  <a href={href}>{meta.title.replace(/ \| Crewmark$/, "")}</a>
                </h2>
                <p>{meta.description}</p>
                <a className="guide-source" href={href}>
                  {c.read} →
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </GuideShell>
  );
}
