import { getSessionCookie } from "better-auth/cookies";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { posts } from "./i18n/blog";
import { pageLocales } from "./i18n/guides";
import { routing } from "./i18n/routing";

// Sends / to /zh for visitors whose browser prefers Chinese (or who picked it before) and serves the English pages
// without a prefix. Only the localized marketing pages go through next-intl; the dashboard (/org/<slug>/issues, …)
// has no locale.
const handleI18nRouting = createMiddleware(routing);

/** A blog post URL, with or without a locale prefix: /blog/<slug> or /zh/blog/<slug>. */
const BLOG_POST = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/blog\/([^/]+)\/?$/i;

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
    "/remote-claude-code",
    "/proactive-claude-code",
    "/proactive-codex",
    "/alternatives/:path*",
    "/blog",
    "/blog/:path*",
    "/(en|zh|zh-tw|zh-TW|ja|ko|es|pt-br|pt-BR|fr|de)",
    "/(en|zh|zh-tw|zh-TW|ja|ko|es|pt-br|pt-BR|fr|de)/((?!(?:.*/)?opengraph-image).*)",
  ],
};
