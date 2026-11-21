// The edge Worker in front of crewmark (MC-445). The app Worker runs next to the database in the US (placement), so
// every request it answers crosses an ocean for visitors elsewhere. Public pages (the marketing site, the blog, the
// comparisons, sitemap, OG images…) are the same for everyone, so this Worker keeps a copy of each in the Cloudflare
// data center the visitor reached, for a day or until the next deploy, and only asks the app on a miss. Everything
// else (the dashboard, the API, anything with a session) goes straight through.
//
// Headers on every answer: x-crewmark-cache: HIT, MISS or BYPASS.

// The few Workers types this needs, so the app's TypeScript setup (DOM types) can check it too.
interface Fetcher {
  fetch(request: Request): Promise<Response>;
}
interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

interface Env {
  /** The app Worker (service binding). */
  APP: Fetcher;
  /** Only for local testing: the app's address, used instead of the binding (`wrangler dev --var APP_ORIGIN:…`). */
  APP_ORIGIN?: string;
  /** Changes with every deploy (the app's commit), so a deploy starts with an empty cache. */
  DEPLOY_ID?: string;
}

/** How long a copy is kept. */
const TTL_SECONDS = 24 * 60 * 60;

/** The marketing site's languages other than English, by their URL prefix. */
const PREFIXES = ["zh", "zh-tw", "ja", "ko", "es", "pt-br", "fr", "de"];

/** Paths that are never public pages. */
const PRIVATE = /^\/(org|api|login|cli|setup|invitations|ingest|_vinext)(\/|$)/;

/** Headers a client-side navigation sends: its answers depend on the page it came from. */
const NAVIGATION_HEADERS = ["rsc", "next-router-state-tree", "next-router-prefetch", "next-router-segment-prefetch", "next-url"];

function cookie(request: Request, name: string) {
  const match = request.headers.get("cookie")?.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/** Whether an English page without a prefix would be served as it is, rather than sent to the visitor's language. */
function wantsEnglish(request: Request) {
  const chosen = cookie(request, "NEXT_LOCALE");
  if (chosen) return chosen.toLowerCase() === "en";
  const accept = request.headers.get("accept-language");
  if (!accept) return true;
  // The language the browser ranks first decides, as next-intl's detection does for our locales.
  const ranked = accept
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter(({ tag, q }) => tag && tag !== "*" && q > 0)
    .sort((a, b) => b.q - a.q);
  const first = ranked.find(({ tag }) => ["en", "zh", "ja", "ko", "es", "pt", "fr", "de"].includes(tag.split("-")[0]));
  return !first || first.tag.startsWith("en");
}

/** Whether this request may be answered from, and stored in, the shared copy. */
function cacheable(request: Request, url: URL) {
  if (request.method !== "GET") return false;
  if (PRIVATE.test(url.pathname) || url.search) return false;
  if (NAVIGATION_HEADERS.some((name) => request.headers.has(name))) return false;
  if (cookie(request, "better-auth.session_token") || cookie(request, "__Secure-better-auth.session_token")) return false;
  const first = url.pathname.split("/")[1]?.toLowerCase() ?? "";
  // A page without a language prefix is English for English readers; others are sent on to their language.
  return PREFIXES.includes(first) || wantsEnglish(request);
}

/** The app's answer to the request. */
function app(request: Request, env: Env) {
  if (!env.APP_ORIGIN) return env.APP.fetch(request);
  const url = new URL(request.url);
  return fetch(new Request(`${env.APP_ORIGIN}${url.pathname}${url.search}`, request), { redirect: "manual" });
}

function marked(response: Response, state: "HIT" | "MISS" | "BYPASS") {
  const answer = new Response(response.body, response);
  answer.headers.set("x-crewmark-cache", state);
  return answer;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (!cacheable(request, url)) return marked(await app(request, env), "BYPASS");

    const key = new Request(`${url.origin}${url.pathname}?__deploy=${env.DEPLOY_ID ?? ""}`, { method: "GET" });
    // The data center's own cache (Workers' caches.default).
    const cache = (caches as unknown as { default: Cache }).default;
    const stored = await cache.match(key);
    if (stored) return marked(stored, "HIT");

    const response = await app(request, env);
    // Only finished pages are kept: no redirects (they depend on the visitor's language), errors or partial content.
    if (response.status !== 200) return marked(response, "BYPASS");
    const copy = new Response(response.body, response);
    // The language cookie next-intl sets is the visitor's own; a shared copy doesn't carry it.
    copy.headers.delete("set-cookie");
    // Its Vary lists the client-navigation headers, which never reach here.
    copy.headers.delete("vary");
    copy.headers.set("cache-control", `public, max-age=0, s-maxage=${TTL_SECONDS}`);
    ctx.waitUntil(cache.put(key, copy.clone()));
    return marked(copy, "MISS");
  },
};
