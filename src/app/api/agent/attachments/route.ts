import { startUpload } from "@/db/attachments";
import type { AttachmentRequest, AttachmentResponse } from "@/lib/agent-api";
import { attachmentResponse, readJson } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// `crewmark upload` and --image (MC-267): an image the employee puts in a description or comment, uploaded like one
// pasted in the dashboard. The CLI PUTs the file where `upload` says, then writes the Markdown.
export const POST = agentRoute(async ({ agent, request }): Promise<AttachmentResponse> => {
  const body = await readJson<AttachmentRequest>(request);
  return attachmentResponse(request, await startUpload(agent.organization.id, body, null));
});
