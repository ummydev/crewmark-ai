import type { PostHog, PostHogConfig } from "posthog-js";

// PostHog setup for instrumentation-client.ts, which loads it on every page (landing and dashboard).
// Requests go through the /ingest rewrite in next.config.ts so ad blockers keep them. Only production builds send
// anything, so local development never pollutes the data; nor does a build without NEXT_PUBLIC_POSTHOG_KEY.
export const posthogKey = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_POSTHOG_KEY : undefined;

/**
 * Opening any page with ?internal=1 marks this browser as ours: every event it sends from then on carries
 * `internal: true`, which the PostHog project's test-account filter leaves out, so the team's visits before they
 * sign in don't count as visitors. It lasts as long as PostHog's cookie; the parameter is removed from the address.
 */
function markInternal(posthog: Pick<PostHog, "register">) {
  const url = new URL(location.href);
  if (url.searchParams.get("internal") !== "1") return;
  posthog.register({ internal: true });
  url.searchParams.delete("internal");
  history.replaceState(history.state, "", url);
}

export const posthogConfig = {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  // Pageviews on client-side navigations, pageleaves and the other current defaults.
  defaults: "2026-08-30",
  capture_performance: { web_vitals: true },
  loaded: markInternal,
} satisfies Partial<PostHogConfig>;
