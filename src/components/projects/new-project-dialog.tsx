"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { CONNECT_AGENT_DESCRIPTION, ConnectAgent } from "@/components/employees/connect-agent";
import { EmployeeForm } from "@/components/employees/new-employee-dialog";
import { ProjectEmojiPicker } from "@/components/projects/project-avatar";
import { projectPath } from "@/components/projects/project-view";
import { StepHeader } from "@/components/step-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PROJECT_EMOJIS, type Employee, type Project } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Making a project, then onboarding it: 1. name it; 2. add an AI employee to it, or skip; 3. connect that employee
 * to an AI agent on this computer. Closing at any point after step 1 opens the new project.
 */
export function NewProjectDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { orgPath } = useCrewStore();
  const router = useRouter();
  const [project, setProject] = React.useState<Project | null>(null);
  const [employee, setEmployee] = React.useState<Employee | null>(null);

  // Start over each time the dialog opens.
  const [prevOpen, setPrevOpen] = React.useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setProject(null);
      setEmployee(null);
    }
  }

  function finish() {
    onOpenChange(false);
    if (project) router.push(orgPath(projectPath(project.id)));
  }

  const step = !project ? 1 : !employee ? 2 : 3;

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? onOpenChange(true) : finish())}>
      <DialogContent className={cn("max-h-[90vh] overflow-y-auto", step === 1 ? "sm:max-w-md" : "sm:max-w-xl")}>
        {step === 1 && <ProjectStep onCreated={setProject} onCancel={() => onOpenChange(false)} />}

        {step === 2 && project && (
          <EmployeeForm
            projectId={project.id}
            header={
              <StepHeader
                step={2}
                steps={3}
                title={`Add an AI employee to ${project.name}`}
                description="An AI employee works on the project's issues from Claude Code or Codex on your computer. You can also add one later."
              />
            }
            secondary={{ label: "Skip", onClick: finish }}
            onCreated={setEmployee}
          />
        )}

        {step === 3 && employee && (
          <div className="grid gap-4">
            <StepHeader
              step={3}
              steps={3}
              title={`Connect ${employee.name} to an AI agent`}
              description={CONNECT_AGENT_DESCRIPTION}
            />
            <ConnectAgent employee={employee} />
            <DialogFooter>
              <Button type="button" onClick={finish}>
                Done
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ProjectStep({ onCreated, onCancel }: { onCreated: (project: Project) => void; onCancel: () => void }) {
  const { projects, addProject } = useCrewStore();
  const [name, setName] = React.useState("");
  // Start from the next emoji in the list, so new projects don't all look alike.
  const [emoji, setEmoji] = React.useState(PROJECT_EMOJIS[projects.length % PROJECT_EMOJIS.length]);
  const [saving, setSaving] = React.useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || saving) return;
    setSaving(true);
    try {
      const project = await addProject(name.trim(), emoji);
      toast.success(`Project ${project.name} created`);
      onCreated(project);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't create the project");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <DialogHeader>
        <DialogTitle>New project</DialogTitle>
        <DialogDescription>Group issues and the employees working on them.</DialogDescription>
      </DialogHeader>

      <div className="grid gap-2">
        <Label htmlFor="project-name">Name</Label>
        <div className="flex items-center gap-2">
          <ProjectEmojiPicker value={emoji} onChange={setEmoji} size="lg" />
          <Input
            id="project-name"
            placeholder="e.g. Website relaunch"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!name.trim() || saving}>
          {saving ? "Creating…" : "Create project"}
        </Button>
      </DialogFooter>
    </form>
  );
}
