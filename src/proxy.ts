import { getSessionCookie } from "better-auth/cookies";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { posts } from "./i18n/blog";
import { isComparePairSlug } from "./i18n/compare";
import { pageLocales } from "./i18n/guides";
import { personalAgentPages } from "./i18n/personal-agents";
import { isAlternativesSlug, isPricingSlug, staticAlternatives } from "./i18n/product-pages";
import { audiencePages, isAgentSlug, isAgentTaskSlug, useCasePages } from "./i18n/use-cases";
import { roles } from "./i18n/roles";
import { skillPages } from "./i18n/skill-pages";
import { routing } from "./i18n/routing";

// Sends / to /zh for visitors whose browser prefers Chinese (or who picked it before) and serves the English pages
// without a prefix. Only the localized marketing pages go through next-intl; the dashboard (/org/<slug>/issues, …)
// has no locale.
const handleI18nRouting = createMiddleware(routing);

/** A blog post URL, with or without a locale prefix: /blog/<slug> or /zh/blog/<slug>. */
const BLOG_POST = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/blog\/([^/]+)\/?$/i;

/** A role page URL, with or without a locale prefix: /ai-employees/<slug> or /zh/ai-employees/<slug>. */
const ROLE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/ai-employees\/([^/]+)\/?$/i;

/** A skills guide URL, with or without a locale prefix: /skills/<slug> or /zh/skills/<slug>. */
const SKILL_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/skills\/([^/]+)\/?$/i;

/** A personal agent guide URL, with or without a locale prefix: /personal-agent/<slug> or /zh/personal-agent/<slug>. */
const PERSONAL_AGENT_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/personal-agent\/([^/]+)\/?$/i;

/** An audience page or a use-case page, with or without a locale prefix: /for/<slug>, /zh/use-cases/<slug>. */
const AUDIENCE_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/for\/([^/]+)\/?$/i;
const USE_CASE_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/use-cases\/([^/]+)\/?$/i;
/** An agent × task page: /use-cases/<agent>/<task>, e.g. /use-cases/claude-code/seo or /zh/use-cases/codex/sentry. */
const AGENT_TASK_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/use-cases\/([^/]+)\/([^/]+)\/?$/i;

/** A comparison page: /compare/<a>-vs-<b> or /zh/compare/<a>-vs-<b>. */
const COMPARE_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/compare\/([^/]+)\/?$/i;

/** A "<product> alternatives" or "<product> pricing" page: /alternatives/<slug>, /zh/pricing/<slug>. */
const ALTERNATIVES_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/alternatives\/([^/]+)\/?$/i;
const PRICING_PAGE = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/pricing\/([^/]+)\/?$/i;

/** Dashboard links from before organizations, e.g. /issues/MC-7. */
const OLD_DASHBOARD = /^\/(issues|employees|projects)(\/|$)/;

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // /org opens the organization the browser used last, so old links still work.
  if (OLD_DASHBOARD.test(pathname)) {
    const entry = new URL("/org", request.url);
    entry.searchParams.set("next", pathname + search);
    return NextResponse.redirect(entry);
  }

  // An unknown post would otherwise be rendered on demand, and its first visit answered 200 before the page found
  // out it doesn't exist. Sending it to a path no route matches makes every visit a plain 404.
  const post = BLOG_POST.exec(pathname);
  if (post && !posts.some(({ slug }) => slug === post[1])) {
    return NextResponse.rewrite(new URL("/en/blog/not-found/404", request.url));
  }
  const role = ROLE.exec(pathname);
  if (role && !roles.some(({ slug }) => slug === role[1])) {
    return NextResponse.rewrite(new URL("/en/ai-employees/not-found/404", request.url));
  }
  const skillPage = SKILL_PAGE.exec(pathname);
  if (skillPage && !skillPages.some(({ slug }) => slug === skillPage[1])) {
    return NextResponse.rewrite(new URL("/en/skills/not-found/404", request.url));
  }
  const personalAgentPage = PERSONAL_AGENT_PAGE.exec(pathname);
  if (personalAgentPage && !personalAgentPages.some(({ slug }) => slug === personalAgentPage[1])) {
    return NextResponse.rewrite(new URL("/en/personal-agent/not-found/404", request.url));
  }
  const audiencePage = AUDIENCE_PAGE.exec(pathname);
  if (audiencePage && !audiencePages.some(({ slug }) => slug === audiencePage[1])) {
    return NextResponse.rewrite(new URL("/en/for/not-found/404", request.url));
  }
  const useCasePage = USE_CASE_PAGE.exec(pathname);
  if (useCasePage && !useCasePages.some(({ slug }) => slug === useCasePage[1]) && !isAgentSlug(useCasePage[1])) {
    return NextResponse.rewrite(new URL("/en/use-cases/not-found/404", request.url));
  }
  const comparePage = COMPARE_PAGE.exec(pathname);
  if (comparePage && !isComparePairSlug(comparePage[1])) {
    return NextResponse.rewrite(new URL("/en/compare/not-found/404", request.url));
  }
  const alternativesPage = ALTERNATIVES_PAGE.exec(pathname);
  if (
    alternativesPage &&
    !isAlternativesSlug(alternativesPage[1]) &&
    !(staticAlternatives as readonly string[]).includes(alternativesPage[1])
  ) {
    return NextResponse.rewrite(new URL("/en/alternatives/not-found/404", request.url));
  }
  const pricingPage = PRICING_PAGE.exec(pathname);
  if (pricingPage && !isPricingSlug(pricingPage[1])) {
    return NextResponse.rewrite(new URL("/en/pricing/not-found/404", request.url));
  }
  const agentTaskPage = AGENT_TASK_PAGE.exec(pathname);
  if (agentTaskPage && !(isAgentSlug(agentTaskPage[1]) && isAgentTaskSlug(agentTaskPage[2]))) {
    return NextResponse.rewrite(new URL("/en/use-cases/not-found/404", request.url));
  }

  if (!pathname.startsWith("/org/")) {
    const response = handleI18nRouting(request);
    // A page in only some languages: a visitor whose browser asks for another one stays on the English page
    // rather than being redirected to a language version that doesn't exist.
    const location = response.headers.get("location");
    const locales = pageLocales(pathname);
    if (location && locales) {
      const prefix = new URL(location).pathname.split("/")[1].toLowerCase();
      if (!locales.some((locale) => locale.toLowerCase() === prefix)) {
        return NextResponse.rewrite(new URL(`/en${pathname}${search}`, request.url));
      }
    }
    return response;
  }

  // Signed-out visitors go to the sign-in page and come back here afterwards. This only looks for the session
  // cookie; the organization layout and every Server Function check the session and membership themselves.
  if (getSessionCookie(request)) return NextResponse.next();
  const login = new URL("/login", request.url);
  login.searchParams.set("callbackUrl", pathname + search);
  return NextResponse.redirect(login);
}

export const config = {
  // The dashboard and its old links, then every locale prefix from i18n/routing.ts, plus zh-TW and pt-BR so those
  // spellings redirect to /zh-tw and /pt-br. A new English marketing page without a prefix (e.g. /pricing) must be
  // added here as well.
  // Share images are served as is: the English ones live under /en (/en/opengraph-image-…,
  // /en/remote-claude-code/opengraph-image-…), which the middleware would otherwise redirect to a 404.
  matcher: [
    "/org/:path+",
    "/(issues|employees|projects)/:path*",
    "/",
    "/ai-employees",
    "/ai-employees/:path*",
    "/remote-claude-code",
    "/proactive-claude-code",
    "/proactive-codex",
    "/alternatives/:path*",
    "/pricing",
    "/pricing/:path*",
    "/privacy",
    "/terms",
    "/skills",
    "/skills/:path*",
    "/personal-agent",
    "/personal-agent/:path*",
    "/for/:path*",
    "/use-cases",
    "/use-cases/:path*",
    "/compare",
    "/compare/:path*",
    "/blog",
    "/blog/:path*",
    "/(en|zh|zh-tw|zh-TW|ja|ko|es|pt-br|pt-BR|fr|de)",
    "/(en|zh|zh-tw|zh-TW|ja|ko|es|pt-br|pt-BR|fr|de)/((?!(?:.*/)?opengraph-image).*)",
  ],
};
