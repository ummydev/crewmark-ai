"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Employee } from "@/lib/types";

// Archiving an employee (MC-305): it's as good as deleted, gone from every list, picker and conversation, its agent
// woken by nothing and told nothing, but nothing of it is deleted, and it comes back from Archived in the
// organization's menu (archived-employees.tsx).

/** Asks before archiving the employee, then leaves for `leaveTo`. */
export function ArchiveDialog({
  employee,
  open,
  onOpenChange,
  leaveTo,
}: {
  employee: Employee;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Where to go once it's archived: the page showing it would have nothing to show. */
  leaveTo: string;
}) {
  const { issues, archiveEmployee } = useCrewStore();
  const router = useRouter();
  const [pending, setPending] = React.useState(false);
  const name = employee.name || "this employee";
  const openIssues = issues.filter((i) => i.assigneeId === employee.id && i.status !== "done").length;

  async function archive() {
    setPending(true);
    try {
      // Leave first, so the page doesn't show the employee as not found on the way out.
      router.push(leaveTo);
      await archiveEmployee(employee.id);
      toast.success(`${employee.name || "The employee"} was archived`);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't archive it. Try again.");
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !pending && onOpenChange(next)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Archive {name}?</DialogTitle>
          <DialogDescription>
            It disappears from Messages, the employee list, and wherever you assign or mention someone, and its agent
            stops getting heartbeats and messages. Nothing is deleted: bring it back any time from Archived in your
            organization&apos;s menu.
            {openIssues === 1 &&
              " 1 open issue is assigned to it: it'll show as unassigned until you assign it to someone else."}
            {openIssues > 1 &&
              ` ${openIssues} open issues are assigned to it: they'll show as unassigned until you assign them to someone else.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" disabled={pending} onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button disabled={pending} onClick={archive}>
            {pending ? "Archiving…" : "Archive"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
