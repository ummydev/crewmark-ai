"use client";

import * as React from "react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { CONNECT_AGENT_DESCRIPTION, ConnectAgent } from "@/components/employees/connect-agent";
import { RoleField } from "@/components/employees/employee-fields";
import { HeartbeatFields } from "@/components/employees/heartbeat-fields";
import { StepHeader } from "@/components/step-header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Employee, Heartbeat } from "@/lib/types";

/** Making an employee, then connecting it to an AI agent, as in a new project's onboarding. */
export function NewEmployeeDialog({
  open,
  onOpenChange,
  projectId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Adds the new employee to this project when created from a project page. */
  projectId?: string;
}) {
  const [employee, setEmployee] = React.useState<Employee | null>(null);

  // Start over each time the dialog opens.
  const [prevOpen, setPrevOpen] = React.useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setEmployee(null);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {employee ? (
          <div className="grid gap-4">
            <StepHeader
              step={2}
              steps={2}
              title={`Connect ${employee.name} to an AI agent`}
              description={CONNECT_AGENT_DESCRIPTION}
            />
            <ConnectAgent employee={employee} />
            <DialogFooter>
              <Button type="button" onClick={() => onOpenChange(false)}>
                Done
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <EmployeeForm
            projectId={projectId}
            header={
              <StepHeader
                step={1}
                steps={2}
                title="New employee"
                description="Define a digital employee. Its identity and KPIs are handed to the agent session it runs in."
              />
            }
            secondary={{ label: "Cancel", onClick: () => onOpenChange(false) }}
            onCreated={setEmployee}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

/**
 * The new-employee form, in the New employee dialog and in a new project's onboarding. It starts empty each time it
 * mounts, which a dialog does each time it opens.
 */
export function EmployeeForm({
  projectId,
  header,
  secondary,
  onCreated,
}: {
  projectId?: string;
  header: React.ReactNode;
  /** The other footer button: Cancel in a dialog, Skip in onboarding. */
  secondary: { label: string; onClick: () => void };
  onCreated: (employee: Employee) => void;
}) {
  const { addEmployee } = useCrewStore();
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [kpi, setKpi] = React.useState("");
  const [heartbeat, setHeartbeat] = React.useState<Heartbeat | null>(null);
  const [saving, setSaving] = React.useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || saving) return;
    setSaving(true);
    try {
      const employee = await addEmployee({
        name: name.trim(),
        role: role.trim(),
        description: description.trim(),
        kpi: kpi.trim(),
        heartbeat,
        status: "idle",
        projectIds: projectId ? [projectId] : [],
      });
      toast.success(`${employee.name} joined your crew`);
      onCreated(employee);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't create the employee");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {header}

      <div className="grid gap-2">
        <Label htmlFor="employee-name">Name</Label>
        <Input
          id="employee-name"
          placeholder="e.g. Sage"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="employee-role">Role</Label>
        <RoleField id="employee-role" value={role} onChange={setRole} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="employee-description">Responsibilities</Label>
        <Textarea
          id="employee-description"
          placeholder="What this employee owns and how it should work…"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="employee-kpi">KPIs</Label>
        <Textarea
          id="employee-kpi"
          placeholder="e.g. Grow Google Search Console impressions to 100k / month"
          value={kpi}
          onChange={(e) => setKpi(e.target.value)}
          rows={3}
        />
      </div>

      <HeartbeatFields value={heartbeat} onChange={setHeartbeat} />

      <DialogFooter>
        <Button type="button" variant="secondary" onClick={secondary.onClick}>
          {secondary.label}
        </Button>
        <Button type="submit" disabled={!name.trim() || saving}>
          {saving ? "Creating…" : "Create employee"}
        </Button>
      </DialogFooter>
    </form>
  );
}
