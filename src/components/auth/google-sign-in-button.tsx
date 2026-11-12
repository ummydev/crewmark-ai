"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

/** Sends the visitor to Google, then back to `callbackURL` (a path on this site) once they're signed in. */
export function GoogleSignInButton({ callbackURL, disabled }: { callbackURL: string; disabled?: boolean }) {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function signIn() {
    setPending(true);
    setError(null);
    const result = await authClient.signIn.social({ provider: "google", callbackURL, errorCallbackURL: "/login" });
    // On success the browser is already on its way to Google, so only a failure lands here.
    if (result.error) {
      setError(result.error.message ?? "Couldn't reach Google. Try again.");
      setPending(false);
    }
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Button variant="outline" size="lg" className="w-full gap-2.5" disabled={disabled || pending} onClick={signIn}>
        <GoogleIcon />
        Continue with Google
      </Button>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Google's "G", in its own colours as Google's branding guidelines ask. */
function GoogleIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.88-3.02c-1.07.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.27v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.28a7.2 7.2 0 0 1 0-4.56V6.61H1.27a12 12 0 0 0 0 10.78l4.01-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.27 6.61l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}
