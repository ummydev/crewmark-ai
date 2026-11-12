import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { dashboardUrl } from "@/lib/agent-data";
import type { CliWhoAmI } from "@/lib/cli-api";
import { cliRoute } from "@/lib/cli-route";

// `crewmark login --status`: who the CLI acts for, and in which organization.
export const GET = cliRoute(async ({ user, request }): Promise<CliWhoAmI> => {
  const [person] = await db.select({ name: users.name, email: users.email }).from(users).where(eq(users.id, user.userId));
  return { user: person, organization: user.organization, url: dashboardUrl(request, user) };
});
