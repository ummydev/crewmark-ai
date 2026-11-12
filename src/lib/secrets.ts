import "server-only";

import { createHash, randomBytes } from "node:crypto";

// Credentials handed to the crewmark CLI. Only their hashes are stored, so a database leak doesn't hand them out.

/** A new random credential; the prefix tells what it is, e.g. "cmk_…" for an agent's key. */
export function newSecret(prefix: string) {
  return `${prefix}_${randomBytes(32).toString("base64url")}`;
}

/** What's stored in place of a credential. */
export function hashSecret(secret: string) {
  return createHash("sha256").update(secret).digest("hex");
}
