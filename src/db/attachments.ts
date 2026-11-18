import "server-only";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { attachments } from "@/db/schema";
import { storage, uploadTarget } from "@/lib/attachments";
import { IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/types";
import { InputError, text } from "@/lib/validate";

// Images' records, pasted in the dashboard or uploaded with the CLI (MC-267); the files themselves are in object
// storage (src/lib/attachments.ts).

/**
 * Records an image someone is about to upload, after checking it's one that can be pasted, and says where to send the
 * file. `userId` is the member, or null for an employee.
 */
export async function startUpload(
  organizationId: string,
  input: { name?: unknown; type?: unknown; size?: unknown },
  userId: string | null,
) {
  storage(); // Throws before recording anything when uploads aren't set up here.
  const attachment = await insertAttachment(organizationId, input, userId);
  return { attachment, upload: await uploadTarget(attachment) };
}

async function insertAttachment(
  organizationId: string,
  input: { name?: unknown; type?: unknown; size?: unknown },
  userId: string | null,
) {
  const contentType = text(input.type, "type", { required: true });
  if (!IMAGE_TYPES.includes(contentType)) throw new InputError("Only PNG, JPEG, GIF and WebP images can be pasted");
  const size = input.size;
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) throw new InputError("Invalid size");
  if (size > MAX_IMAGE_BYTES) throw new InputError("Images can be up to 10 MB");
  const [row] = await db
    .insert(attachments)
    .values({
      organizationId,
      // Keep the name as the uploader saw it; it's only ever a label and the download's file name.
      name: (text(input.name, "name").trim() || "image").slice(0, 200),
      contentType,
      size,
      uploadedByUserId: userId,
    })
    .returning();
  return row;
}

export async function getAttachment(id: string) {
  const [row] = await db.select().from(attachments).where(eq(attachments.id, id));
  return row ?? null;
}
