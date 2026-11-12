import type { Locale } from "next-intl";
import { Fragment, type ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import { pageLocales } from "@/i18n/guides";
import { getPathname } from "@/i18n/navigation";
import { guideStructuredData } from "@/lib/structured-data";

// A long-form guide page (e.g. /proactive-claude-code) built from its copy: hero, a list of sections, FAQ and the
// closing call to action, plus the page's structured data. The copy lives in src/content/, one file per guide.
//
// Text in the copy may hold [label](href) links and `code`. An internal href ("/", "/remote-claude-code") links the
// page in the reader's language when it has one, else in English; an http(s) href opens in a new tab.

export type GuideStep = { title: string; text: string; code?: string };

export type GuideSection = { id?: string; kicker?: string; title: string; text?: string[] } & (
  | { kind: "text"; points?: string[] }
  | { kind: "steps"; steps: GuideStep[]; source?: { label: string; href: string } }
  | { kind: "table"; headers: string[]; rows: string[][] }
);

export type GuideCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { kicker: string; title: string; lead: string; cta: string; secondary: string; secondaryHref: string };
  sections: GuideSection[];
  /** The steps marked up as a HowTo: which section, and the name of the task. */
  howTo?: { section: string; name: string };
  /** A short call to action shown after the HowTo section (or the first steps section), where readers who got what
   * they came for tend to leave. */
  mid: GuideMidCopy;
  /** Blog posts only: the blog index in the breadcrumb, and the dates for BlogPosting structured data. */
  parent?: { name: string; href: string };
  article?: { published: string; modified?: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; button: string };
  checked: string;
  disclaimer: string;
};

export type GuideMidCopy = { title: string; text: string; button: string };

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`/g;

/** The text without link and code markup, for structured data. */
export function plainText(text: string) {
  return text.replace(TOKEN, (_, label, _href, code) => label ?? code);
}

function RichText({ text, locale }: { text: string; locale: Locale }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const [whole, label, href, code] = match;
    parts.push(text.slice(last, match.index));
    if (code !== undefined) parts.push(<code key={match.index}>{code}</code>);
    else if (/^https?:/.test(href))
      parts.push(
        <a key={match.index} href={href} rel="noopener" target="_blank">
          {label}
        </a>,
      );
    else if (href.startsWith("#"))
      parts.push(
        <a key={match.index} href={href}>
          {label}
        </a>,
      );
    else parts.push(<InternalLink key={match.index} href={href} label={label} locale={locale} />);
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return parts;
}

function InternalLink({ href, label, locale }: { href: string; label: string; locale: Locale }) {
  const [path, hash = ""] = href.split("#");
  const locales = pageLocales(path);
  const target = !locales || locales.includes(locale) ? locale : "en";
  return (
    <a
      href={getPathname({ href: path, locale: target }) + (hash && `#${hash}`)}
      hrefLang={target === locale ? undefined : target}
    >
      {label}
    </a>
  );
}

export function GuideArticle({
  href,
  locale,
  locales,
  name,
  c,
}: {
  href: string;
  locale: Locale;
  locales: readonly Locale[];
  /** Names the early-access buttons in analytics: `${name}-hero`, `${name}-cta`. */
  name: string;
  c: GuideCopy;
}) {
  const howToSection = c.howTo && c.sections.find((s) => s.id === c.howTo?.section);
  const midAfter = howToSection ?? c.sections.find((s) => s.kind === "steps");
  return (
    <>
      <JsonLd
        data={guideStructuredData({
          href,
          locale,
          locales,
          ...c.meta,
          breadcrumb: c.breadcrumb,
          parent: c.parent,
          article: c.article,
          faq: c.faq.items.map(({ q, a }) => ({ q, a: plainText(a) })),
          howTo:
            c.howTo && howToSection?.kind === "steps"
              ? {
                  name: c.howTo.name,
                  steps: howToSection.steps.map((step) => ({ name: step.title, text: plainText(step.text) })),
                }
              : undefined,
        })}
      />

      <header className="hero guide-hero container">
        <span className="kicker">{c.hero.kicker}</span>
        <h1>{c.hero.title}</h1>
        <p className="sub">
          <RichText text={c.hero.lead} locale={locale} />
        </p>
        <div className="actions">
          <button type="button" className="btn btn-dark" data-early-access={`${name}-hero`}>
            {c.hero.cta} <Arrow />
          </button>
          <a className="btn btn-line" href={c.hero.secondaryHref}>
            {c.hero.secondary}
          </a>
        </div>
      </header>

      <article className="guide-body container">
        {c.sections.map((section) => (
          <Fragment key={section.title}>
            <section id={section.id}>
              {section.kicker && <span className="kicker">{section.kicker}</span>}
              <h2>{section.title}</h2>
              {section.text?.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} locale={locale} />
                </p>
              ))}
              {section.kind === "text" && section.points && (
                <ul className="guide-list">
                  {section.points.map((point) => (
                    <li key={point}>
                      <RichText text={point} locale={locale} />
                    </li>
                  ))}
                </ul>
              )}
              {section.kind === "steps" && (
                <>
                  <ol className="guide-steps">
                    {section.steps.map((step) => (
                      <li key={step.title}>
                        <h3>{step.title}</h3>
                        <p>
                          <RichText text={step.text} locale={locale} />
                        </p>
                        {step.code && (
                          <pre>
                            <code>{step.code}</code>
                          </pre>
                        )}
                      </li>
                    ))}
                  </ol>
                  {section.source && (
                    <p className="guide-source">
                      <a href={section.source.href} rel="noopener" target="_blank">
                        {section.source.label}
                      </a>
                    </p>
                  )}
                </>
              )}
              {section.kind === "table" && (
                <div className="guide-table">
                  <table>
                    <thead>
                      <tr>
                        {section.headers.map((header, i) => (
                          <th key={i} scope="col">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map(([label, ...cells]) => (
                        <tr key={label}>
                          <th scope="row">{label}</th>
                          {cells.map((cell, i) => (
                            <td key={i}>
                              <RichText text={cell} locale={locale} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
            {section === midAfter && <GuideMidCta name={name} c={c.mid} />}
          </Fragment>
        ))}

        <section id="faq">
          <h2>{c.faq.title}</h2>
          <div className="faq">
            {c.faq.items.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>
                  {item.q}
                  <span className="pl">
                    <svg width="14" height="14">
                      <use href="#i-plus" />
                    </svg>
                  </span>
                </summary>
                <p>
                  <RichText text={item.a} locale={locale} />
                </p>
              </details>
            ))}
          </div>
        </section>

        <p className="guide-source">{c.checked}</p>
      </article>

      <div className="container">
        <section className="cta">
          <svg className="cta-mark" viewBox="1.4 3.7 28 28" style={{ color: "#fff" }}>
            <use href="#logo-cm" />
          </svg>
          <h2>{c.cta.title}</h2>
          <p>{c.cta.text}</p>
          <div className="actions">
            <button type="button" className="btn btn-yellow" data-early-access={`${name}-cta`}>
              {c.cta.button} <Arrow />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

/** The mid-article call to action; its button is counted as `${name}-mid`. */
export function GuideMidCta({ name, c }: { name: string; c: GuideMidCopy }) {
  return (
    <aside className="guide-mid">
      <div>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
      </div>
      <button type="button" className="btn btn-dark" data-early-access={`${name}-mid`}>
        {c.button} <Arrow />
      </button>
    </aside>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16">
      <use href="#i-arrow" />
    </svg>
  );
}
