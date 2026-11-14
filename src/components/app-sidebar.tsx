"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CheckIcon,
  ChevronsUpDownIcon,
  KanbanSquareIcon,
  LogOutIcon,
  MessageCircleIcon,
  PlusIcon,
  SquarePenIcon,
  UserRoundPlusIcon,
  UsersIcon,
} from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { useMessages } from "@/components/messages/messages-provider";
import { UnreadBadge } from "@/components/messages/messages-view";
import { NewIssueDialog } from "@/components/issues/new-issue-dialog";
import { NewOrganizationDialog } from "@/components/organizations/new-organization-dialog";
import { NewProjectDialog } from "@/components/projects/new-project-dialog";
import { ProjectAvatar } from "@/components/projects/project-avatar";
import { projectPath } from "@/components/projects/project-view";
import { useProjectFilter } from "@/components/project-filter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { forgetUser } from "@/lib/analytics";
import { authClient } from "@/lib/auth-client";
import type { User } from "@/lib/types";

const NAV_ITEMS = [
  { href: "/issues", label: "Issues", icon: KanbanSquareIcon },
  { href: "/messages", label: "Messages", icon: MessageCircleIcon },
  { href: "/employees", label: "Employees", icon: UsersIcon },
];

// Every item is 14px regular; the current page is marked by its fill and darker ink, not by weight,
// which would make it look larger than its neighbours.
const ITEM = "data-active:font-normal";

/** The project a path belongs to, e.g. "/org/acme/projects/proj-1/issues" → "proj-1". */
function projectIdOf(pathname: string | undefined) {
  return pathname?.match(/^\/org\/[^/]+\/projects\/([^/]+)/)?.[1];
}

export function AppSidebar() {
  const [organizationDialogOpen, setOrganizationDialogOpen] = React.useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = React.useState(false);
  const [issueDialog, setIssueDialog] = React.useState<{ open: boolean; projectId: string | null }>({
    open: false,
    projectId: null,
  });
  const openNewIssue = React.useCallback(
    (projectId?: string) => setIssueDialog({ open: true, projectId: projectId ?? null }),
    [],
  );

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="gap-1 pt-3">
        <OrganizationSwitcher onNewOrganization={() => setOrganizationDialogOpen(true)} />
      </SidebarHeader>
      <SidebarContent>
        {/* With Cache Components, usePathname suspends on dynamic routes like /issues/[key]. */}
        <React.Suspense
          fallback={<NavGroups onNewIssue={() => openNewIssue()} onNewProject={() => setProjectDialogOpen(true)} />}
        >
          <ActiveNavGroups onNewIssue={openNewIssue} onNewProject={() => setProjectDialogOpen(true)} />
        </React.Suspense>
      </SidebarContent>
      <NewOrganizationDialog open={organizationDialogOpen} onOpenChange={setOrganizationDialogOpen} />
      <NewProjectDialog open={projectDialogOpen} onOpenChange={setProjectDialogOpen} />
      <NewIssueDialog
        open={issueDialog.open}
        onOpenChange={(open) => setIssueDialog((prev) => ({ ...prev, open }))}
        defaultProjectId={issueDialog.projectId}
      />
    </Sidebar>
  );
}

/**
 * The signed-in person and the organization on screen, in one menu: switch or create organizations, open its
 * members, sign out.
 */
function OrganizationSwitcher({ onNewOrganization }: { onNewOrganization: () => void }) {
  const { organization, organizations, orgPath, currentUser: user } = useCrewStore();
  const router = useRouter();
  const [signingOut, setSigningOut] = React.useState(false);

  async function signOut() {
    setSigningOut(true);
    await authClient.signOut();
    forgetUser();
    router.replace("/login");
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger render={<SidebarMenuButton className="h-9 gap-2.5" />}>
            <UserAvatar user={user} className="size-6" />
            <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-foreground">{organization.name}</span>
            <ChevronsUpDownIcon className="text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <div className="flex items-center gap-2.5 px-2 py-1.5">
              <UserAvatar user={user} className="size-8" />
              <div className="grid min-w-0 leading-tight">
                <span className="truncate text-sm font-medium">{user.name || user.username}</span>
                <span className="truncate text-xs text-muted-foreground">{user.email}</span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Organizations</DropdownMenuLabel>
              {organizations.map((o) => (
                <DropdownMenuItem key={o.id} render={<Link href={`/org/${o.slug}/issues`} />}>
                  <span className="truncate">{o.name}</span>
                  {o.id === organization.id && <CheckIcon className="ml-auto" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href={orgPath("/members")} />}>
              <UserRoundPlusIcon />
              Members
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onNewOrganization}>
              <PlusIcon />
              New organization
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled={signingOut} onClick={signOut}>
              <LogOutIcon />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/** The person's Google photo, or the first letters of their username. */
function UserAvatar({ user, className }: { user: User; className: string }) {
  return (
    <Avatar className={className}>
      {user.profileImage && <AvatarImage src={user.profileImage} alt="" />}
      <AvatarFallback className="bg-background text-[10px] font-medium">
        {user.username.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

function ActiveNavGroups({
  onNewIssue,
  onNewProject,
}: {
  onNewIssue: (projectId?: string) => void;
  onNewProject: () => void;
}) {
  const pathname = usePathname();
  const [filteredProjectId] = useProjectFilter();
  // New issues land in the project being looked at: a project page, or a list filtered to one.
  const newIssue = () => onNewIssue(projectIdOf(pathname) ?? filteredProjectId);
  return (
    <>
      <NewIssueShortcut onNewIssue={newIssue} />
      <NavGroups pathname={pathname} onNewIssue={newIssue} onNewProject={onNewProject} />
    </>
  );
}

/** Pressing "c" anywhere outside a text field opens the new-issue dialog, as in Linear. */
function NewIssueShortcut({ onNewIssue }: { onNewIssue: () => void }) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "c" || event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true'], [role='dialog']")) return;
      event.preventDefault();
      onNewIssue();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNewIssue]);
  return null;
}

function NavGroups({
  pathname,
  onNewIssue,
  onNewProject,
}: {
  pathname?: string;
  onNewIssue: () => void;
  onNewProject: () => void;
}) {
  const { projects, orgPath } = useCrewStore();
  const { unread } = useMessages();

  return (
    <>
      <SidebarGroup className="pt-0">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={onNewIssue}>
                <SquarePenIcon />
                <span>New issue</span>
                <kbd className="ml-auto rounded border border-sidebar-border bg-background px-1.5 font-sans text-[11px] leading-4 text-muted-foreground">
                  C
                </kbd>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {NAV_ITEMS.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={pathname?.startsWith(orgPath(item.href)) ?? false}
                  className={ITEM}
                  render={<Link href={orgPath(item.href)} />}
                >
                  <item.icon />
                  <span>{item.label}</span>
                  {item.href === "/messages" && <UnreadBadge count={unread} className="ml-auto" />}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel className="text-muted-foreground">Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={onNewProject}>
                <PlusIcon />
                <span>New project</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {projects.map((project) => (
              <SidebarMenuItem key={project.id}>
                <SidebarMenuButton
                  isActive={pathname?.startsWith(orgPath(`/projects/${project.id}/`)) ?? false}
                  className={ITEM}
                  render={<Link href={orgPath(projectPath(project.id))} />}
                >
                  {/* 20px avatar in a 16px icon slot, so names line up with the items above. */}
                  <ProjectAvatar emoji={project.emoji} className="-mx-0.5" />
                  <span>{project.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
