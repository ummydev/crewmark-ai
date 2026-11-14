import posthog, { type CaptureOptions } from "posthog-js";

import type { User } from "@/lib/types";

// Product events for PostHog, named "<object> <past-tense verb>". Only send ids, enums and counts:
// titles, descriptions and KPIs are the user's content and stay out of analytics. Signed-in people are identified
// by user id, with their email and name on their PostHog person (see identify).
// "cli install started" and "cli installed" come from outside the app: public/install.sh and install.ps1 send them
// straight to PostHog. "agent connected" comes from the server (lib/server-analytics).

type Events = {
  "project created": { emoji: string };
  "employee created": { status: string; project_count: number; has_kpi: boolean; heartbeat: boolean };
  "issue created": { status: string; priority: string; assigned: boolean; in_project: boolean };
  "issue updated": { field: "status" | "priority" | "assignee" | "project" | "repeat" };
  "issue moved": { status: string };
  "issue deleted": Record<string, never>;
  "issue commented": Record<string, never>;
  // An image pasted or dropped into a description or comment; size in bytes.
  "image uploaded": { type: string; size: number };
  "employee deleted": Record<string, never>;
  "organization created": Record<string, never>;
  "member invited": { role: string };
  "invitation accepted": Record<string, never>;
  // The signed-in person sent an employee a direct message from the dashboard's Messages.
  "direct message sent": Record<string, never>;
  // A person let `crewmark login` act for them (app/(auth)/cli/login).
  "cli login allowed": Record<string, never>;
  // Landing page links to /login (components/landing/sign-up-links.tsx); location is where the link sits (nav,
  // hero, …). Until 2026-11-07 these buttons opened an early access dialog and sign up was "early access clicked".
  "sign in clicked": { location: string };
  "sign up clicked": { location: string };
  // The "Continue with Google" button on /login (components/auth/google-sign-in-button.tsx): the step between opening
  // the sign-in page and coming back signed in, which shows up as $identify on the dashboard.
  "google sign in clicked": Record<string, never>;
};

/** Sends a product event; a no-op in development or when PostHog isn't configured (see instrumentation-client.ts). */
export function track<E extends keyof Events>(event: E, properties: Events[E], options?: CaptureOptions) {
  if (posthog.__loaded) posthog.capture(event, properties, options);
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
