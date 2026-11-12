import type { PostHogConfig } from "posthog-js";

// PostHog setup for instrumentation-client.ts, which loads it on every page (landing and dashboard).
// Requests go through the /ingest rewrite in next.config.ts so ad blockers keep them. Only production builds send
// anything, so local development never pollutes the data; nor does a build without NEXT_PUBLIC_POSTHOG_KEY.
export const posthogKey = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_POSTHOG_KEY : undefined;

export const posthogConfig = {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  // Pageviews on client-side navigations, pageleaves and the other current defaults.
  defaults: "2026-08-30",
  capture_performance: { web_vitals: true },
} satisfies Partial<PostHogConfig>;
