import { db } from "@/db";
import { cliRoute } from "@/lib/cli-route";
import { machineIdOf, recordDevice } from "@/lib/device-records";
import { realtimeConnection } from "@/lib/realtime";

// The daemon's socket for its computer (MC-421), with the person's CLI login rather than an employee's key: it's open
// before any employee works there, so Crewmark can start the first one. The daemon says which agents it found
// (?agents=claude-code,opencode) and which project folders it offers (?folders=… as a JSON list), which Crewmark shows
// when starting an employee there. A computer is its first person's: only they can start employees on it.
export const GET = cliRoute(async ({ user, request }) => {
  const machineId = machineIdOf(request);
  if (!machineId) return { realtime: null };
  const params = new URL(request.url).searchParams;
  const agents = (params.get("agents") ?? "").split(",").filter((a) => /^[\w-]{1,32}$/.test(a)).slice(0, 40);
  let folders: string[] = [];
  try {
    const listed: unknown = JSON.parse(params.get("folders") ?? "[]");
    if (Array.isArray(listed)) {
      folders = listed.filter((f): f is string => typeof f === "string" && f.length > 1 && f.length <= 500).slice(0, 100);
    }
  } catch {
    // None, then.
  }
  const short = (value: string | null) => (value ?? "").trim().slice(0, 200);
  const deviceId = await recordDevice(db, {
    organizationId: user.organization.id,
    machineId,
    userId: user.userId,
    hostname: short(params.get("hostname")),
    platform: short(params.get("platform")),
    agents,
    folders,
  });
  return { realtime: realtimeConnection(user.organization.id, undefined, deviceId, true) };
});
