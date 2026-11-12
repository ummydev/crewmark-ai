"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CopyIcon, LaptopIcon, UserRoundPlusIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { PageHeader } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { revokeCliLogin } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { track } from "@/lib/analytics";
import { fullDate, timeAgo } from "@/lib/format";
import {
  canManageMembers,
  MEMBER_ROLES,
  type CliLogin,
  type Member,
  type MemberRole,
  type PendingInvitation,
} from "@/lib/types";
import { cn } from "@/lib/utils";

const HEAD = "h-10 text-[13px] font-normal text-muted-foreground";
const CELL = "py-3 group-hover:bg-muted/60 first:rounded-l-lg last:rounded-r-lg";

/** Invitations aren't emailed yet: whoever invites copies this link and sends it on. */
function invitationLink(invitationId: string) {
  return `${window.location.origin}/invitations/${invitationId}`;
}

async function copyInvitationLink(invitationId: string) {
  await navigator.clipboard.writeText(invitationLink(invitationId));
  toast.success("Invitation link copied. Send it to them.");
}

/**
 * Runs a Better Auth call, which checks on the server that the signed-in person may do it (owners and admins manage
 * members), then reloads the page's data. Returns whether it worked.
 */
async function run(call: Promise<{ error: { message?: string } | null }>, router: ReturnType<typeof useRouter>) {
  const { error } = await call;
  if (error) {
    toast.error(error.message ?? "Something went wrong");
    return false;
  }
  router.refresh();
  return true;
}

/**
 * An organization's members and pending invitations. Owners and admins can invite, change roles and remove. Below
 * them, the computers where the crewmark CLI acts for the signed-in person here, which they can log out.
 */
export function MembersView({
  members,
  invitations,
  cliLogins,
}: {
  members: Member[];
  invitations: PendingInvitation[];
  cliLogins: CliLogin[];
}) {
  const { organization, role, currentUser } = useCrewStore();
  const manage = canManageMembers(role);

  return (
    <>
      <PageHeader icon={<UserRoundPlusIcon />} title="Members" />
      <div className="flex-1 overflow-auto px-4 pb-6">
        <div className="mx-auto grid max-w-3xl gap-8 pt-6">
          {manage ? (
            <InviteForm organizationId={organization.id} />
          ) : (
            <p className="text-sm text-muted-foreground">Only owners and admins can invite people or change roles.</p>
          )}

          <section className="grid gap-2">
            <h2 className="px-2 text-[13px] font-medium">
              {members.length} {members.length === 1 ? "member" : "members"}
            </h2>
            <Table>
              <TableHeader className="[&_tr]:border-0">
                <TableRow className="hover:bg-transparent">
                  <TableHead className={cn(HEAD, "pl-2")}>Person</TableHead>
                  <TableHead className={cn(HEAD, "w-36")}>Role</TableHead>
                  {manage && <TableHead className={cn(HEAD, "w-12")} />}
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <MemberRow
                    key={member.id}
                    member={member}
                    organizationId={organization.id}
                    isYou={member.user.id === currentUser.id}
                    manage={manage}
                  />
                ))}
              </TableBody>
            </Table>
          </section>

          {invitations.length > 0 && (
            <section className="grid gap-2">
              <h2 className="px-2 text-[13px] font-medium">Pending invitations</h2>
              <Table>
                <TableBody>
                  {invitations.map((invitation) => (
                    <InvitationRow key={invitation.id} invitation={invitation} manage={manage} />
                  ))}
                </TableBody>
              </Table>
            </section>
          )}

          {cliLogins.length > 0 && (
            <section className="grid gap-2">
              <div className="grid gap-0.5 px-2">
                <h2 className="text-[13px] font-medium">Your crewmark CLI logins</h2>
                <p className="text-xs text-muted-foreground">
                  Computers where the crewmark CLI acts for you in {organization.name}, from <code>crewmark login</code>.
                </p>
              </div>
              <Table>
                <TableBody>
                  {cliLogins.map((login) => (
                    <CliLoginRow key={login.id} login={login} />
                  ))}
                </TableBody>
              </Table>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

function InviteForm({ organizationId }: { organizationId: string }) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState<MemberRole>("member");
  const [saving, setSaving] = React.useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim() || saving) return;
    setSaving(true);
    const { data, error } = await authClient.organization.inviteMember({
      email: email.trim().toLowerCase(),
      role,
      organizationId,
    });
    setSaving(false);
    if (error || !data) {
      toast.error(error?.message ?? "Couldn't create the invitation");
      return;
    }
    track("member invited", { role });
    setEmail("");
    await copyInvitationLink(data.id).catch(() => toast.success("Invitation created. Copy its link below."));
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-2 rounded-lg border p-4">
      <h2 className="text-[13px] font-medium">Invite someone</h2>
      <p className="text-[13px] text-muted-foreground">
        They get a link to join, valid for 7 days. It only works for the Google account with this email.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="name@example.com"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sm:flex-1"
        />
        <RoleSelect value={role} onChange={setRole} options={["member", "admin"]} />
        <Button type="submit" disabled={!email.trim() || saving}>
          {saving ? "Inviting…" : "Invite"}
        </Button>
      </div>
    </form>
  );
}

function MemberRow({
  member,
  organizationId,
  isYou,
  manage,
}: {
  member: Member;
  organizationId: string;
  isYou: boolean;
  manage: boolean;
}) {
  const router = useRouter();
  const { user } = member;

  function changeRole(role: MemberRole) {
    void run(authClient.organization.updateMemberRole({ memberId: member.id, role, organizationId }), router);
  }

  async function remove() {
    if (!window.confirm(`Remove ${user.username} from this organization?`)) return;
    await run(authClient.organization.removeMember({ memberIdOrEmail: member.id, organizationId }), router);
  }

  return (
    <TableRow className="group border-0 hover:bg-transparent">
      <TableCell className={cn(CELL, "pl-2")}>
        <div className="flex items-center gap-3">
          <Avatar className="size-7">
            {user.profileImage && <AvatarImage src={user.profileImage} alt="" />}
            <AvatarFallback className="text-xs font-medium">{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 leading-tight">
            <span className="truncate text-sm font-medium">
              {user.username}
              {isYou && <span className="font-normal text-muted-foreground"> (you)</span>}
            </span>
            <span className="truncate text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
      </TableCell>
      <TableCell className={CELL}>
        {/* Better Auth decides on the server who may change which role, e.g. only owners make owners. */}
        {manage && !isYou ? (
          <RoleSelect value={member.role} onChange={changeRole} options={["member", "admin", "owner"]} />
        ) : (
          <span className="text-[13px]">{roleLabel(member.role)}</span>
        )}
      </TableCell>
      {manage && (
        <TableCell className={cn(CELL, "text-right")}>
          {!isYou && (
            <Button variant="ghost" size="icon-sm" aria-label={`Remove ${user.username}`} onClick={remove}>
              <XIcon />
            </Button>
          )}
        </TableCell>
      )}
    </TableRow>
  );
}

function InvitationRow({ invitation, manage }: { invitation: PendingInvitation; manage: boolean }) {
  const router = useRouter();

  return (
    <TableRow className="group border-0 hover:bg-transparent">
      <TableCell className={cn(CELL, "pl-2")}>
        <div className="grid min-w-0 leading-tight">
          <span className="truncate text-sm">{invitation.email}</span>
          <span className="truncate text-xs text-muted-foreground">
            {roleLabel(invitation.role)} · expires {fullDate.format(new Date(invitation.expiresAt))}
          </span>
        </div>
      </TableCell>
      {manage && (
        <TableCell className={cn(CELL, "w-0 whitespace-nowrap text-right")}>
          <Button variant="ghost" size="sm" className="text-[13px]" onClick={() => copyInvitationLink(invitation.id)}>
            <CopyIcon />
            Copy link
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={`Cancel the invitation for ${invitation.email}`}
            onClick={() => run(authClient.organization.cancelInvitation({ invitationId: invitation.id }), router)}
          >
            <XIcon />
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
}

function CliLoginRow({ login }: { login: CliLogin }) {
  const router = useRouter();
  const [pending, setPending] = React.useState(false);

  async function logOut() {
    setPending(true);
    try {
      await revokeCliLogin(login.id);
      toast.success(`${login.hostname || "That computer"} is logged out`);
      router.refresh();
    } catch {
      toast.error("Couldn't log it out. Try again.");
      setPending(false);
    }
  }

  return (
    <TableRow className="group border-0 hover:bg-transparent">
      <TableCell className={cn(CELL, "pl-2")}>
        <div className="flex min-w-0 items-center gap-2">
          <LaptopIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="grid min-w-0 leading-tight">
            <span className="truncate text-sm">{login.hostname || "Unknown computer"}</span>
            <span className="truncate text-xs text-muted-foreground" suppressHydrationWarning>
              {login.platform} · logged in {fullDate.format(new Date(login.createdAt))}
              {login.lastUsedAt && ` · used ${timeAgo(login.lastUsedAt)}`}
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell className={cn(CELL, "w-0 whitespace-nowrap text-right")}>
        <Button variant="ghost" size="sm" className="text-[13px]" disabled={pending} onClick={logOut}>
          Log out
        </Button>
      </TableCell>
    </TableRow>
  );
}

function roleLabel(role: MemberRole) {
  return MEMBER_ROLES.find((r) => r.value === role)?.label ?? role;
}

function RoleSelect({
  value,
  onChange,
  options,
}: {
  value: MemberRole;
  onChange: (role: MemberRole) => void;
  options: MemberRole[];
}) {
  const items = MEMBER_ROLES.filter((r) => options.includes(r.value));
  return (
    <Select items={items} value={value} onValueChange={(v) => v && onChange(v)}>
      <SelectTrigger aria-label="Role" className="h-8 w-28 text-[13px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((r) => (
          <SelectItem key={r.value} value={r.value}>
            {r.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
