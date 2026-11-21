import type { NextRequest } from "next/server";

import { getAttachment } from "@/db/attachments";
import { downloadUrl, readFromDisk, signedLinkOpens, storage, writeToDisk } from "@/lib/attachments";
import { authenticateAgent } from "@/lib/agent-auth";
import { requireMember } from "@/lib/auth";
import { authenticateCliUser } from "@/lib/cli-auth";

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
    // A Markdown file an agent sent (MC-359) is read by the page's script, which can't follow a redirect to R2 without
    // the bucket allowing it: it comes from here instead. They're small.
    if (file.contentType.startsWith("text/")) {
      const stored = await fetch(url);
      if (!stored.ok || !stored.body) return notFound();
      return new Response(stored.body, {
        headers: {
          "Content-Type": `${file.contentType}; charset=utf-8`,
          "Cache-Control": "private, max-age=3600",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
    return new Response(null, {
      status: 302,
      headers: { Location: url, "Cache-Control": `private, max-age=${maxAge}` },
    });
  }
  const data = await readFromDisk(file).catch(() => null);
  if (!data) return notFound();
  return new Response(data, {
    headers: {
      "Content-Type": file.contentType.startsWith("text/") ? `${file.contentType}; charset=utf-8` : file.contentType,
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

/** Whether the request may upload to the organization: a member, or an employee's or a person's CLI key for it. */
async function mayUpload(request: Request, organizationId: string) {
  const agent = await authenticateAgent(request);
  if (agent) return agent.organization.id === organizationId;
  const user = await authenticateCliUser(request);
  if (user) return user.organization.id === organizationId;
  return isMember(organizationId);
}

/** In development, where there's no R2, the browser (or the CLI, MC-267) uploads the file here instead. */
export async function PUT(request: NextRequest, { params }: Context) {
  const file = await getAttachment((await params).id);
  if (!file || storage() !== "disk" || !(await mayUpload(request, file.organizationId))) return notFound();
  if (request.headers.get("content-type") !== file.contentType) {
    return new Response(`Send it as ${file.contentType}`, { status: 400 });
  }
  const data = new Uint8Array(await request.arrayBuffer());
  if (data.byteLength !== file.size) return new Response(`Send ${file.size} bytes`, { status: 400 });
  if (!(await writeToDisk(file, data))) return new Response("It's uploaded already", { status: 409 });
  return new Response(null, { status: 204 });
}
