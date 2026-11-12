import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { CliLoginActions } from "@/components/auth/cli-login-actions";
import { CrewmarkLogo } from "@/components/crewmark-logo";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserOrganizations } from "@/db/queries";
import { getSession } from "@/lib/auth";
import { getCliLogin } from "@/lib/cli-auth";

export const metadata: Metadata = { title: "Allow the crewmark CLI · Crewmark" };

// Where `crewmark login` sends the person: they allow the CLI on that computer to act for them in one organization.
export default function CliLoginPage({ searchParams }: PageProps<"/cli/login">) {
  return (
    <main className="flex flex-1 items-center justify-center bg-sidebar px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl border bg-background px-6 py-8 text-center">
        <CrewmarkLogo className="size-9 text-foreground" />
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <CliLogin searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

async function CliLogin({ searchParams }: Pick<PageProps<"/cli/login">, "searchParams">) {
  const { code } = await searchParams;
  const wanted = typeof code === "string" ? code : "";
  const path = `/cli/login?code=${encodeURIComponent(wanted)}`;
  const session = await getSession();
  if (!session) redirect(`/login?callbackUrl=${encodeURIComponent(path)}`);

  const login = wanted ? await getCliLogin(wanted) : null;
  if (!login) {
    return <Message title="This login link doesn't work" text="Run `crewmark login` again for a new one." />;
  }
  if (login.state === "approved") {
    return <Message title="Allowed" text="The crewmark CLI finishes signing in on its own. You can close this tab." />;
  }
  if (login.state === "denied") {
    return <Message title="Turned down" text="That computer isn't signed in. You can close this tab." />;
  }
  if (login.state === "expired") {
    return <Message title="This login expired" text="Logins wait ten minutes. Run `crewmark login` again." />;
  }

  const organizations = await getUserOrganizations(session.user.id);
  const where = login.hostname ? `on ${login.hostname}` : "on a computer";
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-lg font-semibold text-foreground">Allow the crewmark CLI {where}?</h1>
        <p className="text-sm text-muted-foreground">
          It asks to act as {session.user.email}: to file issues, to create and change projects and employees, and
          to connect conversations to employees. Only allow it if you or your agent just ran <code>crewmark login</code> and it
          shows this code:
        </p>
        <p className="font-mono text-xl font-semibold tracking-widest text-foreground">{login.code}</p>
      </div>
      <CliLoginActions
        code={login.code}
        organizations={organizations}
        initialOrganizationId={session.session.activeOrganizationId ?? organizations[0]?.id ?? null}
      />
    </>
  );
}

function Message({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-1">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
