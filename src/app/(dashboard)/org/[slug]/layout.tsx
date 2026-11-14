import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { CrewStoreProvider } from "@/components/crew-store";
import { MessagesProvider } from "@/components/messages/messages-provider";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getOrganizationData, getUserOrganizations } from "@/db/queries";
import { getMembership, getSessionUserId, rememberOrganization } from "@/lib/auth";
import type { MemberRole } from "@/lib/types";

// One organization's dashboard. Only its members get past this layout, and only its rows are loaded.
export default function OrganizationLayout({ params, children }: LayoutProps<"/org/[slug]">) {
  return (
    // The data is read from Neon on every request, so it streams in behind a skeleton.
    <Suspense fallback={<DashboardSkeleton />}>
      <OrganizationDashboard params={params}>{children}</OrganizationDashboard>
    </Suspense>
  );
}

async function OrganizationDashboard({
  params,
  children,
}: {
  params: LayoutProps<"/org/[slug]">["params"];
  children: React.ReactNode;
}) {
  const { slug } = await params;
  const membership = await getMembership(slug);
  if (!membership) {
    // The proxy already sends visitors without a session cookie to /login; this also catches expired sessions.
    if (!(await getSessionUserId())) redirect(`/login?callbackUrl=${encodeURIComponent(`/org/${slug}`)}`);
    // Signed in but not a member: don't reveal whether the organization exists.
    notFound();
  }

  const { userId, organization, role } = membership;
  const [data, organizations] = await Promise.all([
    getOrganizationData(organization.id),
    getUserOrganizations(userId),
    rememberOrganization(organization.id),
  ]);
  // Members are always among the organization's users.
  const currentUser = data.users.find((u) => u.id === userId)!;

  return (
    // Keyed so switching organizations starts from the new one's data.
    <CrewStoreProvider
      key={organization.id}
      organization={organization}
      role={role as MemberRole}
      organizations={organizations}
      currentUser={currentUser}
      initialData={data}
    >
      <MessagesProvider>
        <SidebarProvider>
          <AppSidebar />
          {/* The white sheet sits in the grey frame with a hairline edge and no shadow. */}
          <SidebarInset className="min-w-0 md:peer-data-[variant=inset]:border md:peer-data-[variant=inset]:shadow-none">
            {children}
          </SidebarInset>
        </SidebarProvider>
      </MessagesProvider>
    </CrewStoreProvider>
  );
}

function DashboardSkeleton() {
  return (
    <div className="flex min-h-svh w-full bg-sidebar">
      <div className="hidden w-64 shrink-0 flex-col gap-2 p-4 md:flex">
        <Skeleton className="h-7 w-32 bg-sidebar-accent" />
        <Skeleton className="mt-4 h-8 w-full bg-sidebar-accent" />
        <Skeleton className="h-8 w-full bg-sidebar-accent" />
      </div>
      <div className="m-2 flex-1 rounded-xl border bg-background p-4 md:ml-0">
        <Skeleton className="h-6 w-40" />
      </div>
    </div>
  );
}
