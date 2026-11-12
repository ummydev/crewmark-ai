"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { approveCliLogin, denyCliLogin } from "@/lib/actions";
import { track } from "@/lib/analytics";
import type { Organization } from "@/lib/types";

/** Allow a `crewmark login` for one of the person's organizations, or turn it down. */
export function CliLoginActions({
  code,
  organizations,
  initialOrganizationId,
}: {
  code: string;
  organizations: Organization[];
  initialOrganizationId: string | null;
}) {
  const [organizationId, setOrganizationId] = React.useState(
    organizations.some((o) => o.id === initialOrganizationId) ? initialOrganizationId : (organizations[0]?.id ?? null),
  );
  const [pending, setPending] = React.useState<"allow" | "deny" | null>(null);
  const [answer, setAnswer] = React.useState<"allowed" | "denied" | "gone" | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function respond(choice: "allow" | "deny") {
    if (choice === "allow" && !organizationId) return;
    setPending(choice);
    setError(null);
    try {
      const waiting = choice === "allow" ? await approveCliLogin(code, organizationId!) : await denyCliLogin(code);
      if (waiting && choice === "allow") track("cli login allowed", {});
      setAnswer(!waiting ? "gone" : choice === "allow" ? "allowed" : "denied");
    } catch {
      setError("Something went wrong. Try again.");
    }
    setPending(null);
  }

  if (answer) {
    const text = {
      allowed: "Allowed. The crewmark CLI finishes signing in on its own; you can close this tab.",
      denied: "Turned down. That computer isn't signed in.",
      gone: "This login isn't waiting any more. Run `crewmark login` again.",
    }[answer];
    return <p className="text-sm text-foreground">{text}</p>;
  }

  if (organizations.length === 0) {
    return <p className="text-sm text-muted-foreground">You aren&apos;t in an organization yet. Open Crewmark to make one first.</p>;
  }

  const items = organizations.map((o) => ({ value: o.id, label: o.name }));
  return (
    <div className="flex w-full flex-col gap-3 text-left">
      {organizations.length > 1 && (
        <Select items={items} value={organizationId} onValueChange={(v) => v && setOrganizationId(v)}>
          <SelectTrigger aria-label="Organization" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <Button size="lg" className="w-full" disabled={pending !== null || !organizationId} onClick={() => respond("allow")}>
        {pending === "allow"
          ? "Allowing…"
          : `Allow for ${organizations.find((o) => o.id === organizationId)?.name ?? "this organization"}`}
      </Button>
      <Button variant="ghost" className="w-full" disabled={pending !== null} onClick={() => respond("deny")}>
        Deny
      </Button>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
