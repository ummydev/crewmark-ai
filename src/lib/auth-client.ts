import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";

/**
 * Better Auth in the browser: starts a Google sign-in, signs out, and manages organization members and invitations.
 * Talks to /api/auth on the same origin.
 */
export const authClient = createAuthClient({ plugins: [organizationClient()] });
