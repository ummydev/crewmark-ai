import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { GuideMidCta } from "@/components/landing/guide-article";
import { GuideShell } from "@/components/landing/guide-shell";
import { JsonLd } from "@/components/json-ld";
import {
  REMOTE_CLAUDE_CODE_LOCALES as LOCALES,
  type RemoteClaudeCodeLocale,
  remoteClaudeCode,
  remoteClaudeCodeDocs,
} from "@/content/remote-claude-code";
import { localizedMetadata } from "@/i18n/metadata";
import { guideStructuredData } from "@/lib/structured-data";

// The landing page for "claude code remote control" searches, which remoteclaude.app redirects to. It explains
// Anthropic's Remote Control honestly, then what Crewmark adds. Written in English and Chinese only; every other
// language is a 404.

const HREF = "/remote-claude-code";

async function copy() {
  const locale = await getLocale();
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  return { locale: locale as RemoteClaudeCodeLocale, c: remoteClaudeCode[locale as RemoteClaudeCodeLocale] };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, c } = await copy();
  return localizedMetadata({ href: HREF, locale, locales: LOCALES, ...c.meta });
}

export default async function RemoteClaudeCodePage() {
  const { locale, c } = await copy();

  return (
    <GuideShell href={HREF} locale={locale} locales={LOCALES} disclaimer={c.disclaimer}>
      <JsonLd
        data={guideStructuredData({
          href: HREF,
          locale,
          locales: LOCALES,
          ...c.meta,
          breadcrumb: c.breadcrumb,
          faq: c.faq.items,
        })}
      />

      <header className="hero guide-hero container">
        <span className="kicker">{c.hero.kicker}</span>
        <h1>{c.hero.title}</h1>
        <p className="sub">{c.hero.lead}</p>
        <div className="actions">
          <button type="button" className="btn btn-dark" data-early-access="remote-claude-code-hero">
            {c.hero.cta} <Arrow />
          </button>
          <a className="btn btn-line" href="#how-to">
            {c.hero.secondary}
          </a>
        </div>
      </header>

      <article className="guide-body container">
        <section>
          <h2>{c.official.title}</h2>
          <p>{c.official.text}</p>
          <ul className="checks">
            {c.official.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="how-to">
          <h2>{c.howto.title}</h2>
          <ol className="guide-steps">
            {c.howto.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.code && (
                  <pre>
                    <code>{step.code}</code>
                  </pre>
                )}
              </li>
            ))}
          </ol>
          <p className="guide-source">
            <a href={remoteClaudeCodeDocs} rel="noopener" target="_blank">
              {c.howto.source}
            </a>
          </p>
        </section>

        <GuideMidCta name="remote-claude-code" c={c.mid} />

        <section>
          <h2>{c.limits.title}</h2>
          <p>{c.limits.text}</p>
          <ul className="guide-list">
            {c.limits.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{c.compare.title}</h2>
          <div className="guide-table">
            <table>
              <thead>
                <tr>
                  {c.compare.headers.map((header, i) => (
                    <th key={i} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.compare.rows.map(([label, ...cells]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <span className="kicker">{c.crewmark.kicker}</span>
          <h2>{c.crewmark.title}</h2>
          <p>{c.crewmark.text}</p>
          <ol className="guide-steps">
            {c.crewmark.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>{c.both.title}</h2>
          <p>{c.both.text}</p>
        </section>

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
                <p>{item.a}</p>
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
            <button type="button" className="btn btn-yellow" data-early-access="remote-claude-code-cta">
              {c.cta.button} <Arrow />
            </button>
          </div>
        </section>
      </div>
    </GuideShell>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16">
      <use href="#i-arrow" />
    </svg>
  );
}
