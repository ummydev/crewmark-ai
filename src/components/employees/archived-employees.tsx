"use client";

import * as React from "react";
import { ArchiveIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { fullDate } from "@/lib/format";
import type { Employee } from "@/lib/types";

/** The employees the organization archived (MC-305), each with a button to bring it back. */
export function ArchivedEmployees() {
  const { archivedEmployees } = useCrewStore();
  const sorted = [...archivedEmployees].sort((a, b) => (b.archivedAt ?? "").localeCompare(a.archivedAt ?? ""));
  return (
    <>
      <PageHeader icon={<ArchiveIcon />} title="Archived" />
      <div className="flex-1 overflow-auto px-4 pb-6">
        <div className="mx-auto grid max-w-3xl gap-4 pt-6">
          <p className="text-sm text-muted-foreground">
            Archived employees don&apos;t show anywhere else, and their agents get no heartbeats or messages. Restore
            one to bring it back as it was, with its issues and conversation.
          </p>
          {sorted.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">Nothing is archived.</p>
          ) : (
            <ul className="divide-y divide-rule rounded-xl border border-rule">
              {sorted.map((employee) => (
                <Row key={employee.id} employee={employee} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

function Row({ employee }: { employee: Employee }) {
  const { restoreEmployee } = useCrewStore();
  const [pending, setPending] = React.useState(false);
  async function restore() {
    setPending(true);
    try {
      await restoreEmployee(employee.id);
      toast.success(`${employee.name || "The employee"} is back`);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't restore it. Try again.");
      setPending(false);
    }
  }
  return (
    <li className="flex items-center gap-3 px-4 py-3">
      <EmployeeAvatar employee={employee} size="sm" />
      <div className="grid min-w-0 flex-1">
        <span className="truncate text-sm font-medium">{employee.name}</span>
        <span className="truncate text-xs text-muted-foreground" suppressHydrationWarning>
          {[employee.role, employee.archivedAt && `Archived ${fullDate.format(new Date(employee.archivedAt))}`]
            .filter(Boolean)
            .join(" · ")}
        </span>
      </div>
      <Button variant="outline" size="sm" disabled={pending} onClick={restore}>
        {pending ? "Restoring…" : "Restore"}
      </Button>
    </li>
  );
}
