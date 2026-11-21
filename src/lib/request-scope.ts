import { AsyncLocalStorage } from "node:async_hooks";

// What belongs to one request while the site runs on Cloudflare Workers (MC-445). A Worker can't use a connection
// one request opened in another, so things like the database client are made once per request and kept here.
// Outside a Worker (Node.js: development, Vercel) there is no scope and modules keep their shared state.

// One instance on globalThis: Vite's server environments can load this module more than once, and every copy has to
// see the scope the Worker's entry opened.
const key = Symbol.for("crewmark.request-scope");
const global = globalThis as unknown as Record<symbol, AsyncLocalStorage<Map<string, unknown>> | undefined>;
export const requestScope = (global[key] ??= new AsyncLocalStorage<Map<string, unknown>>());

// vinext keeps its own context for each request (what headers() and cookies() read), on globalThis under this
// symbol. Some of its rendering runs where our scope doesn't reach, so its context is the fallback: our values for
// the request hang off its context object.
const vinextContext = Symbol.for("vinext.unifiedRequestContext.als");
const scopesByContext = new WeakMap<object, Map<string, unknown>>();

function currentScope(): Map<string, unknown> | null {
  const own = requestScope.getStore();
  if (own) return own;
  const context = (global[vinextContext] as AsyncLocalStorage<object> | undefined)?.getStore();
  if (!context || typeof context !== "object") return null;
  let scope = scopesByContext.get(context);
  if (!scope) scopesByContext.set(context, (scope = new Map()));
  return scope;
}

/** The value under `key` for the current request, made with `make` the first time; null outside a request scope. */
export function perRequest<T>(key: string, make: () => T): T | null {
  const scope = currentScope();
  if (!scope) return null;
  if (!scope.has(key)) scope.set(key, make());
  return scope.get(key) as T;
}
