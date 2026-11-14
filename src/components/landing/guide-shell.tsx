import type { Locale } from "next-intl";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import NextLink from "next/link";

import { LandingIcons } from "@/components/landing/landing-icons";
import { LatestPosts } from "@/components/landing/latest-posts";
import { SignUpLinks } from "@/components/landing/sign-up-links";
import { guideLocale, guides } from "@/i18n/guides";
import { getPathname, Link } from "@/i18n/navigation";
import { localeNames } from "@/i18n/routing";

/**
 * The frame around a guide page (e.g. /remote-claude-code): the nav and footer of the home page, linking back to it,
 * and the click counting for its sign-up and sign-in links (see SignUpLinks). `locales` are the languages the guide is
 * written in, which the footer links to.
 */
export async function GuideShell({
  href,
  locale,
  locales,
  disclaimer,
  children,
}: {
  href: string;
  locale: Locale;
  locales: readonly Locale[];
  disclaimer: string;
  children: ReactNode;
}) {
  const t = await getTranslations("Landing");
  return (
    <>
      <LandingIcons />

      <nav className="nav scrolled">
        <div className="container">
          <Link className="brand" href="/">
            <svg>
              <use href="#logo-cm" />
            </svg>
            Crewmark
          </Link>
          <div className="nav-right" style={{ marginLeft: "auto" }}>
            <NextLink className="signin" href="/login" prefetch={false} data-signin="nav">
              {t("nav.signIn")}
            </NextLink>
            <NextLink className="btn btn-dark btn-sm" href="/login" prefetch={false} data-signup="nav">
              {t("nav.getStarted")}
            </NextLink>
          </div>
        </div>
      </nav>

      <main className="guide">{children}</main>

      <footer className="foot container">
        <div className="guide-foot">
          <Link className="brand" href="/">
            <svg>
              <use href="#logo-cm" />
            </svg>
            Crewmark
          </Link>
          <p>{t("footer.tagline")}</p>
          {disclaimer && <p className="guide-disclaimer">{disclaimer}</p>}
        </div>
        {/* Every guide links every other, so none of them depends on the home page alone to be found. */}
        <nav className="guide-links" aria-label={t("footer.guides")}>
          <h4>{t("footer.guides")}</h4>
          <ul>
            {guides.map((guide) => {
              const target = guideLocale(guide.href, locale);
              return (
                <li key={guide.href}>
                  <a
                    href={getPathname({ href: guide.href, locale: target })}
                    hrefLang={target === locale ? undefined : target}
                    aria-current={guide.href === href ? "page" : undefined}
                  >
                    {t(`footer.${guide.label}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="guide-links" aria-label={t("footer.latestPosts")}>
          <h4>{t("footer.latestPosts")}</h4>
          <ul>
            <LatestPosts locale={locale} current={href} />
          </ul>
        </nav>
        <div className="foot-bottom">
          <span>© 2026 Crewmark</span>
          <nav className="langs" aria-label={t("footer.language")}>
            {locales.map((l) => (
              <Link key={l} href={href} locale={l} lang={l} aria-current={l === locale ? "page" : undefined}>
                {localeNames[l]}
              </Link>
            ))}
          </nav>
          <span>{t("footer.trademarks")}</span>
        </div>
      </footer>

      <SignUpLinks />
    </>
  );
}
