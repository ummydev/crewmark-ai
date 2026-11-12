import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { AwsV4Signer } from "aws4fetch";

// Where pasted images are kept. In production that's a private Cloudflare R2 bucket, reached through its S3 API: the
// browser uploads straight to it with a signed URL, and /api/attachments/<id> sends whoever may see the image on to a
// signed link for it, so the files never pass through our functions. Without the R2 settings, development keeps
// them in .data/attachments and serves them itself.

export interface StoredFile {
  id: string;
  organizationId: string;
  name: string;
  contentType: string;
  size: number;
}

/** The bucket's settings, or null when they aren't all set. */
function bucket() {
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) return null;
  return {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
    url: (file: StoredFile) => `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET}/${objectKey(file)}`,
  };
}

/** Whether files go to R2 or, in development, to disk; production without the R2 settings can't take uploads. */
export function storage(): "r2" | "disk" {
  if (bucket()) return "r2";
  if (process.env.NODE_ENV !== "production") return "disk";
  throw new Error("Image uploads aren't set up: set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_BUCKET");
}

function objectKey(file: StoredFile) {
  return `${file.organizationId}/${file.id}`;
}

function sign(method: "GET" | "PUT", url: URL, headers: Record<string, string>, datetime?: string) {
  const r2 = bucket()!;
  return new AwsV4Signer({
    method,
    url: url.toString(),
    headers,
    accessKeyId: r2.accessKeyId,
    secretAccessKey: r2.secretAccessKey,
    service: "s3",
    region: "auto",
    signQuery: true,
    // Sign the type and size too, so the URL only takes the file it was made for.
    allHeaders: true,
    datetime,
  }).sign();
}

/** Where the browser PUTs the file, with the headers it must send: a signed R2 URL good for ten minutes, or our own route on disk. */
export async function uploadTarget(file: StoredFile): Promise<{ url: string; headers: Record<string, string> }> {
  const headers = { "content-type": file.contentType };
  const r2 = bucket();
  if (!r2) return { url: `/api/attachments/${file.id}`, headers };
  const url = new URL(r2.url(file));
  url.searchParams.set("X-Amz-Expires", "600");
  const signed = await sign("PUT", url, { ...headers, "content-length": String(file.size) });
  return { url: signed.url.toString(), headers };
}

const HOUR = 3600;

/**
 * A signed R2 link to the file, and how many seconds a browser may reuse it. It's signed as of the start of the hour
 * for two hours, so it stays the same all hour (and the browser's cache keeps the image) and works for at least an
 * hour after it's handed out.
 */
export async function downloadUrl(file: StoredFile): Promise<{ url: string; maxAge: number }> {
  const now = Math.floor(Date.now() / 1000);
  const hour = now - (now % HOUR);
  const url = new URL(bucket()!.url(file));
  url.searchParams.set("X-Amz-Expires", String(2 * HOUR));
  url.searchParams.set("response-content-type", file.contentType);
  // No spaces in these: URLs write them as "+", which S3 servers don't all read back as a space when checking the signature.
  url.searchParams.set("response-content-disposition", `inline;filename*=UTF-8''${encodeURIComponent(file.name)}`);
  url.searchParams.set("response-cache-control", `private,max-age=${HOUR}`);
  // aws4fetch wants e.g. 20261102T100000Z.
  const datetime = new Date(hour * 1000).toISOString().replace(/[:-]|\.\d{3}/g, "");
  const signed = await sign("GET", url, {}, datetime);
  return { url: signed.url.toString(), maxAge: hour + HOUR - now };
}

const DISK = path.join(process.cwd(), ".data", "attachments");

export function readFromDisk(file: StoredFile) {
  return readFile(path.join(DISK, objectKey(file)));
}

/** Saves an upload in development; false when the file is there already. */
export async function writeToDisk(file: StoredFile, data: Uint8Array): Promise<boolean> {
  const target = path.join(DISK, objectKey(file));
  await mkdir(path.dirname(target), { recursive: true });
  try {
    await writeFile(target, data, { flag: "wx" });
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") return false;
    throw error;
  }
}

// Agents read issues through the API with a key, not a session, so the images in what they read become links that
// open without signing in for an hour. The signature covers the organization the agent belongs to, and the route
// checks it against the image's, so a link copied in from another organization doesn't open.

const LINK_SECONDS = HOUR;

function linkSignature(organizationId: string, id: string, expires: number) {
  const secret = process.env.BETTER_AUTH_SECRET;
  if (!secret) throw new Error("BETTER_AUTH_SECRET isn't set");
  const key = createHmac("sha256", secret).update("crewmark attachment links").digest();
  return createHmac("sha256", key).update(`${organizationId}.${id}.${expires}`).digest("base64url");
}

/** Whether the query of /api/attachments/<id>?expires=…&signature=… still opens the file. */
export function signedLinkOpens(file: StoredFile, query: URLSearchParams) {
  const expires = Number(query.get("expires"));
  const signature = query.get("signature");
  if (!signature || !Number.isInteger(expires) || expires < Date.now() / 1000) return false;
  const expected = Buffer.from(linkSignature(file.organizationId, file.id, expires));
  const given = Buffer.from(signature);
  return given.length === expected.length && timingSafeEqual(given, expected);
}

/** Markdown for an agent in the organization: its pasted images' links become signed, full ones it can download. */
export function signAttachmentLinks(markdown: string, organizationId: string, origin: string) {
  const expires = Math.floor(Date.now() / 1000) + LINK_SECONDS;
  return markdown.replace(
    /\(\/api\/attachments\/([0-9a-f-]{36})(?=[\s)])/g,
    (_, id: string) =>
      `(${origin}/api/attachments/${id}?expires=${expires}&signature=${linkSignature(organizationId, id, expires)}`,
  );
}
