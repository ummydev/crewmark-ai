import type { NextRequest } from "next/server";

import { getAttachment } from "@/db/attachments";
import { downloadUrl, readFromDisk, signedLinkOpens, storage, writeToDisk } from "@/lib/attachments";
import { requireMember } from "@/lib/auth";

// A pasted image, linked from Markdown as /api/attachments/<id>. Its organization's members open it with their
// session; agents with the signed link their API answers carry (src/lib/attachments.ts). Anyone else gets a 404, as
// if it didn't exist.

type Context = { params: Promise<{ id: string }> };

const notFound = () => new Response("Not found", { status: 404 });

function isMember(organizationId: string) {
  return requireMember(organizationId).then(
    () => true,
    () => false,
  );
}

export async function GET(request: NextRequest, { params }: Context) {
  const file = await getAttachment((await params).id);
  if (!file) return notFound();
  if (!signedLinkOpens(file, request.nextUrl.searchParams) && !(await isMember(file.organizationId))) return notFound();

  if (storage() === "r2") {
    const { url, maxAge } = await downloadUrl(file);
    return new Response(null, {
      status: 302,
      headers: { Location: url, "Cache-Control": `private, max-age=${maxAge}` },
    });
  }
  const data = await readFromDisk(file).catch(() => null);
  if (!data) return notFound();
  return new Response(data, {
    headers: {
      "Content-Type": file.contentType,
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

/** In development, where there's no R2, the browser uploads the file here instead. */
export async function PUT(request: NextRequest, { params }: Context) {
  const file = await getAttachment((await params).id);
  if (!file || storage() !== "disk" || !(await isMember(file.organizationId))) return notFound();
  if (request.headers.get("content-type") !== file.contentType) {
    return new Response(`Send it as ${file.contentType}`, { status: 400 });
  }
  const data = new Uint8Array(await request.arrayBuffer());
  if (data.byteLength !== file.size) return new Response(`Send ${file.size} bytes`, { status: 400 });
  if (!(await writeToDisk(file, data))) return new Response("It's uploaded already", { status: 409 });
  return new Response(null, { status: 204 });
}
