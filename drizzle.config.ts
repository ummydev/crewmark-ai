import { defineConfig } from "drizzle-kit";

import { loadDatabaseUrl } from "./scripts/db-env";


export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  casing: "snake_case",
  // Local Postgres by default; Neon with NODE_ENV=production (the db:*:neon scripts).
  dbCredentials: { url: loadDatabaseUrl() },
});
