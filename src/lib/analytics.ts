import posthog from "posthog-js";

import type { User } from "@/lib/types";

// Product events for PostHog, named "<object> <past-tense verb>". Only send ids, enums and counts:
// titles, descriptions and KPIs are the user's content and stay out of analytics. Signed-in people are identified
// by user id, with their email and name on their PostHog person (see identify).
// The exception is "early access requested" from the landing page (components/landing/early-access.tsx), which
// carries the email a visitor leaves for an invite and is sent from there. "cli install started" and "cli installed"
// come from outside the app: public/install.sh and install.ps1 send them straight to PostHog. "agent connected" comes
// from the server (lib/server-analytics).

type Events = {
  "project created": { emoji: string };
  "employee created": { status: string; project_count: number; has_kpi: boolean; heartbeat: boolean };
  "issue created": { status: string; priority: string; assigned: boolean; in_project: boolean };
  "issue updated": { field: "status" | "priority" | "assignee" | "project" };
  "issue moved": { status: string };
  "issue deleted": Record<string, never>;
  "issue commented": Record<string, never>;
  // An image pasted or dropped into a description or comment; size in bytes.
  "image uploaded": { type: string; size: number };
  "employee deleted": Record<string, never>;
  "organization created": Record<string, never>;
  "member invited": { role: string };
  "invitation accepted": Record<string, never>;
  // A person let `crewmark login` act for them (app/(auth)/cli/login).
  "cli login allowed": Record<string, never>;
  // Landing page buttons that open the early access dialog; location is where the button sits (nav, hero, …).
  "sign in clicked": { location: string };
  "early access clicked": { location: string };
};

/** Sends a product event; a no-op in development or when PostHog isn't configured (see instrumentation-client.ts). */
export function track<E extends keyof Events>(event: E, properties: Events[E]) {
  if (posthog.__loaded) posthog.capture(event, properties);
}

/**
 * Ties this browser's events to the signed-in user and to the organization on screen; called by the dashboard.
 * PostHog merges what the browser did before (on the landing or invitation page) into that person and keeps the
 * identity in its cookie until forgetUser(), so later visits to any page count as them too. Visitors who never sign
 * in stay anonymous and are counted as before. Calling it again for the same person sends nothing new.
 */
export function identify(user: Pick<User, "id" | "email" | "name">, organizationId: string) {
  if (!posthog.__loaded) return;
  posthog.identify(user.id, { email: user.email, name: user.name || undefined });
  posthog.group("organization", organizationId);
}

/** After signing out: what this browser does next counts as a new anonymous visitor, not the user who left. */
export function forgetUser() {
  if (posthog.__loaded) posthog.reset();
}
