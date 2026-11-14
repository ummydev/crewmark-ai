import { runDueRecurrences } from "@/db/recurrence";
import { fromWorker } from "@/lib/realtime";

// The realtime Worker's timer for an organization's repeating issues (see db/recurrence.ts and realtime/): handles
// what has come round and answers when the next one does, for the Worker to set its timer to. Only the Worker, which
// shares REALTIME_SECRET, may call it.
export async function POST(request: Request) {
  if (!fromWorker(request.headers.get("Authorization"))) return new Response("Unauthorized", { status: 401 });
  const body = (await request.json().catch(() => null)) as { organizationId?: unknown } | null;
  if (typeof body?.organizationId !== "string") return new Response("Expected an organizationId", { status: 400 });
  const next = await runDueRecurrences(body.organizationId);
  return Response.json({ next: next?.toISOString() ?? null });
}
