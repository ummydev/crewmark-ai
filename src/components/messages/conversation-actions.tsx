"use client";

import * as React from "react";
import { ContextMenu } from "@base-ui/react/context-menu";
import { ArchiveIcon, EllipsisIcon, MailIcon, MailOpenIcon, PinIcon, PinOffIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { ArchiveDialog } from "@/components/employees/archive-employee";
import { useMessages } from "@/components/messages/messages-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Employee } from "@/lib/types";

// What can be done to a conversation from the Messages list (MC-310): mark it unread or read, pin it to the top, archive
// its employee (MC-305). A right click on a computer opens the menu, a long press on a phone; the "…" menu atop the
// conversation has the same.

/** The items, for a context menu or the "…" menu; `onArchive` opens the dialog that asks first. */
export function ConversationItems({
  employee,
  open,
  onArchive,
}: {
  employee: Employee;
  /** Whether the conversation is the one open: marking it unread leaves it, or opening it would read it again. */
  open: boolean;
  onArchive: () => void;
}) {
  const { orgPath } = useCrewStore();
  const { workUnread, pinned, pin, readWorkOf, unreadWorkOf } = useMessages();
  const unread = (workUnread[employee.id] ?? 0) > 0 && !open;
  const isPinned = Boolean(pinned[employee.id]);
  return (
    <>
      {unread ? (
        <DropdownMenuItem onClick={() => readWorkOf(employee.id)}>
          <MailOpenIcon />
          Mark as read
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem
          onClick={() => {
            // Leave it first: open and on screen, it would count as read again at once. Marked once it has closed.
            if (!open) return unreadWorkOf(employee.id);
            window.history.pushState(null, "", orgPath("/messages"));
            setTimeout(() => unreadWorkOf(employee.id), 300);
          }}
        >
          <MailIcon />
          Mark as unread
        </DropdownMenuItem>
      )}
      <DropdownMenuItem onClick={() => pin(employee.id, !isPinned)}>
        {isPinned ? <PinOffIcon /> : <PinIcon />}
        {isPinned ? "Unpin" : "Pin to top"}
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={onArchive}>
        <ArchiveIcon />
        Archive employee
      </DropdownMenuItem>
    </>
  );
}

/** A row of the Messages list with its menu on a right click or a long press. */
export function ConversationContextMenu({
  employee,
  open,
  children,
}: {
  employee: Employee;
  open: boolean;
  children: React.ReactElement;
}) {
  const { orgPath } = useCrewStore();
  const [archiving, setArchiving] = React.useState(false);
  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger render={children} />
        <ContextMenu.Portal>
          <ContextMenu.Positioner className="isolate z-50 outline-none">
            <ContextMenu.Popup className="z-50 w-48 origin-(--transform-origin) rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95">
              <ConversationItems employee={employee} open={open} onArchive={() => setArchiving(true)} />
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>
      <ArchiveDialog employee={employee} open={archiving} onOpenChange={setArchiving} leaveTo={orgPath("/messages")} />
    </>
  );
}

/** The "…" menu at the top of the open conversation in Messages: the same as the list's. */
export function ConversationMenu({ employee }: { employee: Employee }) {
  const { orgPath } = useCrewStore();
  const [archiving, setArchiving] = React.useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="More actions" className="text-muted-foreground" />}
        >
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <ConversationItems employee={employee} open onArchive={() => setArchiving(true)} />
        </DropdownMenuContent>
      </DropdownMenu>
      <ArchiveDialog employee={employee} open={archiving} onOpenChange={setArchiving} leaveTo={orgPath("/messages")} />
    </>
  );
}
