import { revokeCliKey } from "@/lib/cli-auth";
import { cliRoute } from "@/lib/cli-route";

// `crewmark logout`: revokes the CLI key the request carries.
export const DELETE = cliRoute(async ({ user }) => {
  await revokeCliKey(user.userId, user.keyId);
  return { ok: true };
});
