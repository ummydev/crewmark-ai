"use client";

import * as React from "react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { createImageUpload } from "@/lib/actions";
import { track } from "@/lib/analytics";
import { IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/types";

/**
 * Uploads images pasted into a description or comment to the organization on screen, for MarkdownEditor's
 * uploadImage. `uploading` is true while any is on its way, so a form can wait before saving.
 */
export function useImageUpload() {
  const { organization } = useCrewStore();
  const [pending, setPending] = React.useState(0);

  const upload = React.useCallback(
    async (file: File): Promise<string | null> => {
      if (!IMAGE_TYPES.includes(file.type)) {
        toast.error("Only PNG, JPEG, GIF and WebP images can be pasted");
        return null;
      }
      if (file.size > MAX_IMAGE_BYTES) {
        toast.error("Images can be up to 10 MB");
        return null;
      }
      setPending((n) => n + 1);
      const toastId = toast.loading("Uploading image…");
      try {
        const { url, upload } = await createImageUpload(organization.id, {
          name: file.name,
          type: file.type,
          size: file.size,
        });
        const response = await fetch(upload.url, { method: "PUT", headers: upload.headers, body: file });
        if (!response.ok) throw new Error(`Upload answered ${response.status}`);
        toast.dismiss(toastId);
        track("image uploaded", { type: file.type, size: file.size });
        return url;
      } catch (error) {
        console.error(error);
        toast.error("Couldn't upload the image", { id: toastId });
        return null;
      } finally {
        setPending((n) => n - 1);
      }
    },
    [organization.id],
  );

  return { upload, uploading: pending > 0 };
}
