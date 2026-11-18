import { startUpload } from "@/db/attachments";
import type { AttachmentRequest, AttachmentResponse } from "@/lib/agent-api";
import { attachmentResponse, readJson } from "@/lib/agent-data";
import { cliRoute } from "@/lib/cli-route";

// `crewmark upload` and `issues create --image` from a conversation that isn't an employee (MC-267): an image
// uploaded as the person logged in, like one they pasted in the dashboard.
export const POST = cliRoute(async ({ user, request }): Promise<AttachmentResponse> => {
  const body = await readJson<AttachmentRequest>(request);
  return attachmentResponse(request, await startUpload(user.organization.id, body, user.userId));
});
