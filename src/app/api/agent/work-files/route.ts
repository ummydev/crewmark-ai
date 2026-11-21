import { startWorkUpload } from "@/db/attachments";
import type { WorkFileUploadRequest, WorkFileUploadResponse } from "@/lib/agent-api";
import { readJson } from "@/lib/agent-data";
import { agentRoute } from "@/lib/agent-route";

// A file the employee's agent sent the person (SendUserFile), which the daemon offers to upload (MC-359): kept when
// the organization is on Pro and has room this month, else the Work tab goes on reading it from the computer.
export const POST = agentRoute(async ({ agent, request }): Promise<WorkFileUploadResponse> => {
  const body = await readJson<WorkFileUploadRequest>(request);
  const outcome = await startWorkUpload(agent.organization.id, body);
  if (!outcome.kept) return { kept: false, reason: outcome.reason, resetsAt: outcome.resetsAt };
  return {
    kept: true,
    id: outcome.attachment.id,
    upload: { url: new URL(outcome.upload.url, request.url).toString(), headers: outcome.upload.headers },
  };
});
