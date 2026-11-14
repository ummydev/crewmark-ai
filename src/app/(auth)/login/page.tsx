import { redirect } from "next/navigation";
import { Suspense } from "react";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { CrewmarkLogo } from "@/components/crewmark-logo";
import { getSessionUserId } from "@/lib/auth";

/** Where people go after signing in when they didn't come from a dashboard page: their last organization. */
const HOME = "/org";

// Codes Better Auth puts in ?error= when a sign-in fails. Only these fixed texts are shown, never the URL's own.
const ERRORS: Record<string, string> = {
  email_not_verified: "Google hasn't verified this account's email address, so it can't be used to sign in.",
  // Each email belongs to one user. Google is only linked to an existing user whose email is verified.
  account_not_linked: "A Crewmark account with this email already exists but can't be linked to this Google account.",
  access_denied: "Google sign-in was cancelled.",
};

export default function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <main className="flex flex-1 items-center justify-center bg-sidebar px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl border bg-background px-6 py-8 text-center">
        <CrewmarkLogo className="size-9 text-foreground" />
        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-foreground">Sign in to Crewmark</h1>
          <p className="text-sm text-muted-foreground">
            Use your Google account. New here? Signing in creates your account.
          </p>
        </div>
        {/* The session and the query string are only known per request, so this part streams in. */}
        <Suspense fallback={<GoogleSignInButton callbackURL={HOME} disabled />}>
          <SignIn searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

async function SignIn({ searchParams }: Pick<PageProps<"/login">, "searchParams">) {
  const { callbackUrl, error } = await searchParams;
  const next = sitePath(callbackUrl);
  if (await getSessionUserId()) redirect(next);
  return (
    <>
      {typeof error === "string" && (
        <p role="alert" className="text-sm text-destructive">
          {ERRORS[error] ?? "Sign-in didn't work. Try again."}
        </p>
      )}
      <GoogleSignInButton callbackURL={next} />
    </>
  );
}

/** Only paths on this site, so a link to /login can't send people somewhere else after they sign in. */
function sitePath(value: string | string[] | undefined) {
  return typeof value === "string" && /^\/(?![/\\])/.test(value) ? value : HOME;
}
