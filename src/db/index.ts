import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

// Next.js runs on the Node.js runtime, so a regular pooled connection (node-postgres) fits best.
// DATABASE_URL is Neon's pooled (-pooler) string; migrations use DATABASE_URL_UNPOOLED instead.
// Reuse one pool across hot reloads in development.
const globalForDb = globalThis as unknown as { pool?: Pool };

function createPool() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 10_000,
    // Fail fast instead of hanging when Neon is unreachable.
    connectionTimeoutMillis: 10_000,
    // Detect connections dropped while idle (e.g. after the laptop sleeps).
    keepAlive: true,
  });
  // Neon closes idle connections when the compute scales to zero. Without a listener the error
  // from such an idle client would crash the process; pg already discards the broken client.
  pool.on("error", (error) => console.warn("Postgres pool: idle client error", error.message));
  return pool;
}

const pool = globalForDb.pool ?? createPool();
if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export const db = drizzle({ client: pool, schema, casing: "snake_case" });
