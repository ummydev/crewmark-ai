import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { InvitationActions, SwitchAccountButton } from "@/components/auth/invitation-actions";
import { CrewmarkLogo } from "@/components/crewmark-logo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getInvitation, isMember } from "@/db/queries";
import { getSession } from "@/lib/auth";
import { MEMBER_ROLES } from "@/lib/types";

export const metadata: Metadata = { title: "Invitation · Crewmark" };

// Where an invitation link leads. Owners and admins copy it from their organization's Members page.
export default function InvitationPage({ params }: PageProps<"/invitations/[id]">) {
  return (
    <main className="flex flex-1 items-center justify-center bg-sidebar px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl border bg-background px-6 py-8 text-center">
        <CrewmarkLogo className="size-9 text-foreground" />
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <Invitation params={params} />
        </Suspense>
      </div>
    </main>
  );
}

async function Invitation({ params }: Pick<PageProps<"/invitations/[id]">, "params">) {
  const { id } = await params;
  const path = `/invitations/${encodeURIComponent(id)}`;
  const session = await getSession();
  if (!session) redirect(`/login?callbackUrl=${encodeURIComponent(path)}`);

  const invitation = await getInvitation(id);
  if (!invitation || invitation.status !== "pending" || invitation.expiresAt < new Date()) {
    return (
      <Message title="This invitation is no longer valid" text="It may have expired or been withdrawn. Ask for a new link.">
        <OpenCrewmark />
      </Message>
    );
  }

  // Only the invited person learns which organization it's for.
  if (invitation.email !== session.user.email) {
    return (
      <Message
        title="This invitation is for another account"
        text={`It was sent to ${invitation.email}, and you're signed in as ${session.user.email}.`}
      >
        <SwitchAccountButton callbackUrl={path} />
      </Message>
    );
  }

  const { organization } = invitation;
  if (await isMember(organization.id, session.user.id)) {
    return (
      <Message title={`You're already in ${organization.name}`}>
        <Button size="lg" className="w-full" nativeButton={false} render={<Link href={`/org/${organization.slug}/issues`} />}>
          Open {organization.name}
        </Button>
      </Message>
    );
  }

  const role = MEMBER_ROLES.find((r) => r.value === invitation.role)?.label.toLowerCase() ?? invitation.role;
  return (
    <Message title={`Join ${organization.name}`} text={`${invitation.inviter} invited you to join as ${role}.`}>
      <InvitationActions invitationId={invitation.id} slug={organization.slug} />
    </Message>
  );
}

function Message({ title, text, children }: { title: string; text?: string; children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-1">
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {text && <p className="text-sm text-muted-foreground">{text}</p>}
      </div>
      {children}
    </>
  );
}

function OpenCrewmark() {
  return (
    <Button variant="outline" size="lg" className="w-full" nativeButton={false} render={<Link href="/org" />}>
      Open Crewmark
    </Button>
  );
}
