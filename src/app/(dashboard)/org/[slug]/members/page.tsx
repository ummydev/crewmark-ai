import { notFound } from "next/navigation";
import { Suspense } from "react";

import { MembersView } from "@/components/organizations/members-view";
import { Skeleton } from "@/components/ui/skeleton";
import { getMembersAndInvitations } from "@/db/queries";
import { getMembership } from "@/lib/auth";
import { listCliKeys } from "@/lib/cli-auth";

export default function MembersPage({ params }: PageProps<"/org/[slug]/members">) {
  return (
    <Suspense fallback={<MembersSkeleton />}>
      <Members params={params} />
    </Suspense>
  );
}

async function Members({ params }: Pick<PageProps<"/org/[slug]/members">, "params">) {
  // Checked here too: a page can render without its layout re-running, e.g. on a client-side navigation.
  const membership = await getMembership((await params).slug);
  if (!membership) notFound();
  const [{ members, invitations }, cliKeys] = await Promise.all([
    getMembersAndInvitations(membership.organization.id),
    listCliKeys(membership.userId, membership.organization.id),
  ]);
  const cliLogins = cliKeys.map((k) => ({
    ...k,
    createdAt: k.createdAt.toISOString(),
    lastUsedAt: k.lastUsedAt?.toISOString() ?? null,
  }));
  return <MembersView members={members} invitations={invitations} cliLogins={cliLogins} />;
}

function MembersSkeleton() {
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-3 p-6">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}
