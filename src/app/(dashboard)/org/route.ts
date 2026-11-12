import { NextResponse, type NextRequest } from "next/server";

import { getUserOrganizations } from "@/db/queries";
import { auth, freeOrganizationSlug } from "@/lib/auth";

/** Dashboard pages /org can send people on to, e.g. /org?next=/issues/MC-7 → /org/<slug>/issues/MC-7. */
const DASHBOARD_PATH = /^\/(issues|employees|projects|members)(\/|\?|$)/;

// The way into the dashboard after signing in, and for old links without an organization (the proxy sends /issues
// here). Opens the organization this browser used last, else the first one the user joined, else creates one.
export async function GET(request: NextRequest) {
  const param = request.nextUrl.searchParams.get("next") ?? "";
  const next = DASHBOARD_PATH.test(param) ? param : "/issues";

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    const login = new URL("/login", request.url);
    login.searchParams.set("callbackUrl", `/org?next=${encodeURIComponent(next)}`);
    return NextResponse.redirect(login);
  }

  const organizations = await getUserOrganizations(session.user.id);
  const last = organizations.find((o) => o.id === session.session.activeOrganizationId) ?? organizations[0];
  let slug = last?.slug;
  if (!slug) {
    // A first visit that didn't come through an invitation: an organization of their own, with them as owner.
    const handle = session.user.username || session.user.email.split("@")[0];
    const created = await auth.api.createOrganization({
      body: {
        name: `${session.user.name || handle}'s organization`,
        slug: await freeOrganizationSlug(handle),
        userId: session.user.id,
      },
    });
    slug = created!.slug;
  }
  return NextResponse.redirect(new URL(`/org/${slug}${next}`, request.url));
}
