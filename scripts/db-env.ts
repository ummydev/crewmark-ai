import { execFileSync } from "node:child_process";

import { loadEnvConfig } from "@next/env";

/**
 * Returns the direct (non-pooled) database URL for migrations and scripts.
 *
 * By default that's the local Postgres in .env.local. The env files hold local values only, so nothing reaches
 * production by accident. With NODE_ENV=production (the db:*:neon scripts) it's the URL of Neon's production branch,
 * asked of the neon CLI each time and never written down.
 */
export function loadDatabaseUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return execFileSync("neon", ["connection-string", "production"], { encoding: "utf8" }).trim();
  }
  loadEnvConfig(process.cwd(), true);
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set: put the local Postgres URL in .env.local.");
  // `neon env pull` writes Neon's URLs into .env.local unless told otherwise.
  if (url.includes(".neon.tech")) {
    throw new Error(".env.local points at Neon. Keep it local; the db:*:neon scripts reach Neon on purpose.");
  }
  return url;
}
