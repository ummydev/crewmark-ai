import "server-only";

import { posthogKey } from "@/lib/posthog-config";

// Product events the server sends to PostHog, for what happens outside a browser (the crewmark CLI talking to the
// agent API). Same rules as lib/analytics: ids, enums and counts only. Each event belongs to the person it's about,
// by user id, so it lands on the same PostHog person as their browser events, and to their organization.

type ServerEvents = {
  // `crewmark setup` exchanged a setup token: an AI agent now works as the employee. runtime is null when the CLI
  // couldn't tell which conversation it runs in (the agent then links it with `crewmark link-session`).
  "agent connected": {
    employee_id: string;
    runtime: string | null;
    session_linked: boolean;
    platform: string;
    cli_version: string | null;
  };
};

/**
 * Sends a product event; a no-op in development or without a PostHog key, like the browser's. Call it inside after()
 * so the request doesn't wait on PostHog, and a failed send never fails it.
 */
export async function captureServerEvent<E extends keyof ServerEvents>(
  event: E,
  { distinctId, organizationId, properties }: { distinctId: string; organizationId: string; properties: ServerEvents[E] },
) {
  if (!posthogKey) return;
  try {
    await fetch("https://us.i.posthog.com/i/v0/e/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: posthogKey,
        event,
        distinct_id: distinctId,
        properties: { ...properties, $groups: { organization: organizationId } },
      }),
      signal: AbortSignal.timeout(3000),
    });
  } catch (error) {
    console.error(`Couldn't send "${event}" to PostHog`, error);
  }
}
