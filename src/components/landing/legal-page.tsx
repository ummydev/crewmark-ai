import type { Locale } from "next-intl";

import { RichText } from "@/components/landing/guide-article";

// /privacy and /terms (MC-360): a title, the date it was last changed, and plain sections. Framed by GuideShell like
// the guides, but with no sign-up buttons, FAQ or structured data. Text may hold [label](href) links (mailto: too) and
// `code`, as in a guide.

export type LegalSection = { title: string; text?: string[]; points?: string[] };

export type LegalCopy = {
  meta: { title: string; description: string };
  title: string;
  /** "Last updated: November 12, 2026", in the page's language. */
  updated: string;
  lead: string;
  sections: LegalSection[];
};

export function LegalPage({ locale, c }: { locale: Locale; c: LegalCopy }) {
  return (
    <>
      <header className="hero guide-hero container">
        <h1>{c.title}</h1>
        <p className="legal-updated">{c.updated}</p>
        <p className="sub">
          <RichText text={c.lead} locale={locale} />
        </p>
      </header>

      <article className="guide-body legal-body container">
        {c.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.text?.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} locale={locale} />
              </p>
            ))}
            {section.points && (
              <ul className="guide-list">
                {section.points.map((point) => (
                  <li key={point}>
                    <RichText text={point} locale={locale} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}
