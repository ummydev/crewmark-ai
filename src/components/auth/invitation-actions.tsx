"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { track } from "@/lib/analytics";

/** Accept or decline an invitation. Better Auth checks again that it's for the signed-in person's email. */
export function InvitationActions({ invitationId, slug }: { invitationId: string; slug: string }) {
  const router = useRouter();
  const [pending, setPending] = React.useState<"accept" | "decline" | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function answer(choice: "accept" | "decline") {
    setPending(choice);
    setError(null);
    const { error } =
      choice === "accept"
        ? await authClient.organization.acceptInvitation({ invitationId })
        : await authClient.organization.rejectInvitation({ invitationId });
    if (error) {
      setError(error.message ?? "Something went wrong. Try again.");
      setPending(null);
      return;
    }
    if (choice === "accept") track("invitation accepted", {});
    router.push(choice === "accept" ? `/org/${slug}/issues` : "/org");
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Button size="lg" className="w-full" disabled={pending !== null} onClick={() => answer("accept")}>
        {pending === "accept" ? "Joining…" : "Accept invitation"}
      </Button>
      <Button variant="ghost" className="w-full" disabled={pending !== null} onClick={() => answer("decline")}>
        Decline
      </Button>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Signs out and comes back to `callbackUrl` through the sign-in page, to use another Google account. */
export function SwitchAccountButton({ callbackUrl }: { callbackUrl: string }) {
  const router = useRouter();
  const [pending, setPending] = React.useState(false);
  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full"
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await authClient.signOut();
        router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      }}
    >
      Use another Google account
    </Button>
  );
}
