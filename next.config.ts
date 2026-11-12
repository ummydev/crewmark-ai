import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Let the dev server be opened from other devices (e.g. the MacBook Air) over Tailscale or the LAN.
  allowedDevOrigins: (process.env.ALLOWED_DEV_ORIGINS ?? "").split(",").filter(Boolean),
  partialPrefetching: true,
  experimental: {
    // The marketing pages, the dashboard and the sign-in pages have separate root layouts, so unmatched URLs need
    // their own 404.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  redirects() {
    return [
      // A project opens on its Issues tab.
      { source: "/org/:slug/projects/:id", destination: "/org/:slug/projects/:id/issues", permanent: false },
    ];
  },
  // PostHog is reached through our own domain (see instrumentation-client.ts); its API paths end in slashes.
  skipTrailingSlashRedirect: true,
  rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/array/:path*", destination: "https://us-assets.i.posthog.com/array/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
};

// Wires i18n/request.ts into next-intl.
export default createNextIntlPlugin()(nextConfig);
