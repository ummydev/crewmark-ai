import "server-only";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { organization } from "better-auth/plugins";
import { and, eq, like } from "drizzle-orm";
import { headers } from "next/headers";
import { cache } from "react";

import { db } from "@/db";
import { issues, members, organizations, sessions, users } from "@/db/schema";

// Sign-in with Google through Better Auth. Users, sessions, linked Google accounts and organizations live in our
// own Postgres (src/db/schema.ts); the browser only holds a session token. The endpoints are served at /api/auth/*.

/** The first free value of a unique text column: `base`, else `base2`, `base3`, … */
async function freeValue(column: typeof users.username | typeof organizations.slug, base: string) {
  const rows = await db.select({ value: column }).from(column.table).where(like(column, `${base}%`));
  const taken = new Set(rows.map((r) => r.value));
  let value = base;
  for (let n = 2; taken.has(value); n++) value = `${base}${n}`;
  return value;
}

/** A username nobody has yet, from the email's local part: "ada@example.com" → "ada", or "ada2" if that's taken. */
function freeUsername(email: string) {
  return freeValue(users.username, email.split("@")[0].toLowerCase().replace(/[^a-z0-9._-]/g, "") || "user");
}

/** A slug nobody has yet, from a name: "Acme Labs" → "acme-labs", or "acme-labs2" if that's taken. */
export function freeOrganizationSlug(name: string) {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "org";
  return freeValue(organizations.slug, base);
}

export const auth = betterAuth({
  // Our tables are plural (users, sessions, accounts, verifications).
  database: drizzleAdapter(db, { provider: "pg", usePlural: true }),
  user: {
    fields: { image: "profileImage" },
    additionalFields: {
      // Filled in by the user.create hook below, never by the visitor.
      username: { type: "string", required: false, input: false },
    },
  },
  advanced: {
    // Same ids as the rest of the schema.
    database: { generateId: () => crypto.randomUUID() },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      // Let people with several Google accounts pick one instead of silently using the last.
      prompt: "select_account",
    },
  },
  // Failed sign-ins land back on the sign-in page with ?error=<code>.
  onAPIError: { errorURL: "/login" },
  databaseHooks: {
    user: {
      create: {
        // A first sign-in. Invitations are matched by email, so only addresses Google has verified get an account.
        before: async (user) => {
          if (!user.emailVerified) {
            throw new APIError("FORBIDDEN", { code: "email_not_verified", message: "Google hasn't verified this email." });
          }
          return { data: { ...user, username: await freeUsername(user.email) } };
        },
      },
    },
  },
  plugins: [
    // Organizations, their members ("owner", "admin" or "member") and invitations. Owners and admins invite and
    // remove members; nobody is emailed yet, so an invitation is a link to /invitations/<id> passed on by hand.
    organization({
      invitationExpiresIn: 7 * 24 * 60 * 60,
      cancelPendingInvitationsOnReInvite: true,
      organizationHooks: {
        // Someone who left can't work on the organization's issues any more: they go back to unassigned.
        afterRemoveMember: async ({ user, organization }) => {
          await db
            .update(issues)
            .set({ assigneeUserId: null })
            .where(and(eq(issues.organizationId, organization.id), eq(issues.assigneeUserId, user.id)));
        },
      },
    }),
    // Lets Server Functions refresh the session cookie. Must stay the last plugin.
    nextCookies(),
  ],
});

/** The signed-in user and their session, or null. Reads the session cookie and checks it in the database once per request. */
export const getSession = cache(async () => auth.api.getSession({ headers: await headers() }));

/** The signed-in user's id, or null. */
export async function getSessionUserId(): Promise<string | null> {
  return (await getSession())?.user.id ?? null;
}

/** Notes the organization on screen in the session, so /org opens it next time. */
export async function rememberOrganization(organizationId: string) {
  const session = (await getSession())?.session;
  if (!session || session.activeOrganizationId === organizationId) return;
  await db.update(sessions).set({ activeOrganizationId: organizationId }).where(eq(sessions.id, session.id));
}

/** For Server Functions, which anyone can call directly: the signed-in user's id, or an error. */
export async function requireUserId(): Promise<string> {
  const userId = await getSessionUserId();
  if (!userId) throw new Error("Not signed in");
  return userId;
}

export interface Membership {
  userId: string;
  organization: { id: string; name: string; slug: string };
  role: string;
}

/**
 * The signed-in user's membership of the organization at /org/<slug>, or null when they're signed out or not a
 * member. Every page that reads organization data checks this itself; it's read once per request.
 */
export const getMembership = cache(async (slug: string): Promise<Membership | null> => {
  const userId = await getSessionUserId();
  if (!userId) return null;
  const [row] = await db
    .select({ id: organizations.id, name: organizations.name, slug: organizations.slug, role: members.role })
    .from(members)
    .innerJoin(organizations, eq(organizations.id, members.organizationId))
    .where(and(eq(organizations.slug, slug), eq(members.userId, userId)));
  return row ? { userId, organization: { id: row.id, name: row.name, slug: row.slug }, role: row.role } : null;
});

/**
 * For Server Functions: the signed-in user's id if they belong to the organization, or an error. The organization
 * comes from the page, so it's checked here, and every query that follows filters by it.
 */
export async function requireMember(organizationId: unknown): Promise<string> {
  const userId = await requireUserId();
  if (typeof organizationId !== "string") throw new Error("Invalid organization");
  const [member] = await db
    .select({ id: members.id })
    .from(members)
    .where(and(eq(members.organizationId, organizationId), eq(members.userId, userId)));
  if (!member) throw new Error("Not a member of this organization");
  return userId;
}
