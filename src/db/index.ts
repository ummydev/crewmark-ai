import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { perRequest } from "@/lib/request-scope";

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

function makeDb(pool: Pool) {
  return drizzle({ client: pool, schema, casing: "snake_case" });
}

type Db = ReturnType<typeof makeDb>;

let shared: Db | null = null;

/** The shared client on Node.js, made on first use. */
function sharedDb() {
  if (!shared) {
    const pool = globalForDb.pool ?? createPool();
    if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;
    shared = makeDb(pool);
  }
  return shared;
}

/**
 * On Cloudflare Workers (MC-445) each request gets its own small pool, through Hyperdrive (which keeps the real
 * connections to Neon warm): a Worker can't reuse a connection another request opened.
 */
function requestDb(): Db | null {
  return perRequest("db", () => {
    const hyperdrive = (globalThis as { __crewmarkEnv?: { HYPERDRIVE?: { connectionString: string } } }).__crewmarkEnv
      ?.HYPERDRIVE;
    const pool = new Pool({
      connectionString: hyperdrive?.connectionString ?? process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 10_000,
    });
    pool.on("error", (error) => console.warn("Postgres pool: client error", error.message));
    return makeDb(pool);
  });
}

const onWorkers = typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";

/** The database: the request's own client on a Worker, the shared one elsewhere. */
export const db = new Proxy({} as Db, {
  get(_target, property) {
    const scoped = requestDb();
    // Outside any request (module setup) there's no scope; queries there would share one pool across requests.
    if (!scoped && onWorkers && property !== "_") console.warn("db: used outside a request on Workers:", String(property));
    const current = scoped ?? sharedDb();
    const value = Reflect.get(current, property, current);
    return typeof value === "function" ? value.bind(current) : value;
  },
});
