import handler from "vinext/server/fetch-handler";

import { requestScope } from "@/lib/request-scope";

// The Cloudflare Worker (MC-445): vinext's handler, with each request in its own scope (lib/request-scope.ts) and the
// bindings (Hyperdrive and the rest) where modules can find them. vinext's other entrypoints are passed on as they are.
export * from "vinext/server/fetch-handler";

export default {
  ...handler,
  fetch(request: Request, env: unknown, ctx: unknown) {
    (globalThis as { __crewmarkEnv?: unknown }).__crewmarkEnv = env;
    return requestScope.run(new Map(), () => handler.fetch(request, env, ctx));
  },
};
