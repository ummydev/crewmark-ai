"use client";

import * as React from "react";
import { ChevronRightIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { onProject, useFindAssignee } from "@/components/issues/assignee";
import {
  AssigneeSelect,
  PrioritySelect,
  ProjectSelect,
  StatusSelect,
} from "@/components/issues/issue-fields";
import { imageFiles, MarkdownEditor, type MarkdownEditorHandle } from "@/components/markdown-editor";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useImageUpload } from "@/components/use-image-upload";
import type { IssuePriority, IssueStatus } from "@/lib/types";

export function NewIssueDialog({
  open,
  onOpenChange,
  defaultStatus = "todo",
  defaultProjectId = null,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultStatus?: IssueStatus;
  /** Pre-selects the project when the dialog is opened from a project page. */
  defaultProjectId?: string | null;
}) {
  const { addIssue } = useCrewStore();
  const findAssignee = useFindAssignee();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<IssueStatus>(defaultStatus);
  const [priority, setPriority] = React.useState<IssuePriority>("medium");
  const [assigneeId, setAssigneeId] = React.useState<string | null>(null);
  const [projectId, setProjectId] = React.useState<string | null>(defaultProjectId);
  const [saving, setSaving] = React.useState(false);
  const { upload, uploading } = useImageUpload();
  const editor = React.useRef<MarkdownEditorHandle>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  // A new key empties the description editor.
  const [draft, setDraft] = React.useState(0);

  // Reset the form each time the dialog opens, honouring the column it was opened from.
  const [prevOpen, setPrevOpen] = React.useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setTitle("");
      setDescription("");
      setDraft((n) => n + 1);
      setStatus(defaultStatus);
      setPriority("medium");
      setAssigneeId(null);
      setProjectId(defaultProjectId);
    }
  }

  // Another project's issue can't stay with an employee who isn't on it.
  function changeProject(next: string | null) {
    setProjectId(next);
    const employee = findAssignee(assigneeId)?.employee;
    if (employee && !onProject(employee, next)) setAssigneeId(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || saving || uploading) return;
    setSaving(true);
    try {
      await addIssue({
        title: title.trim(),
        description: description.trim(),
        status,
        priority,
        assigneeId,
        projectId,
      });
      toast.success("Issue created");
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't create the issue");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 p-0 sm:max-w-2xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onKeyDown={(event) => {
            // ⌘↵ / Ctrl+↵ creates the issue from anywhere in the form; the description's editor handles its own.
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey) && !event.defaultPrevented) {
              event.preventDefault();
              event.currentTarget.requestSubmit();
            }
          }}
          onPaste={(event) => {
            // A screenshot pasted while the title has the focus goes into the description.
            const files = imageFiles(event.clipboardData);
            if (files.length === 0 || event.defaultPrevented) return;
            event.preventDefault();
            editor.current?.insertImages(files);
          }}
        >
          <DialogHeader className="px-5 pt-4">
            <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
              Crewmark
              <ChevronRightIcon className="size-3.5" />
              <span className="text-foreground">New issue</span>
            </p>
            <DialogTitle className="sr-only">New issue</DialogTitle>
            <DialogDescription className="sr-only">
              Create a task and assign it to a digital employee.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2 px-5 pt-4 pb-2">
            <input
              aria-label="Title"
              placeholder="Issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="bg-transparent text-lg font-semibold outline-none placeholder:text-muted-foreground"
            />
            <MarkdownEditor
              key={draft}
              ref={editor}
              value=""
              onChange={setDescription}
              onSubmit={() => formRef.current?.requestSubmit()}
              uploadImage={upload}
              toolbar={false}
              placeholder="Add description… Paste screenshots here too."
              contentClassName="max-h-[50vh] min-h-28 overflow-y-auto [&_.tiptap]:min-h-28"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 px-4 pb-4">
            <StatusSelect variant="pill" value={status} onChange={setStatus} />
            <PrioritySelect variant="pill" value={priority} onChange={setPriority} />
            <AssigneeSelect variant="pill" value={assigneeId} onChange={setAssigneeId} projectId={projectId} />
            <ProjectSelect variant="pill" value={projectId} onChange={changeProject} />
          </div>

          <DialogFooter className="border-t px-4 py-3">
            <Button type="submit" size="sm" disabled={!title.trim() || saving || uploading}>
              {saving ? "Creating…" : uploading ? "Uploading…" : "Create issue"}
              <kbd className="ml-1 rounded bg-primary-foreground/15 px-1 font-sans text-[11px] leading-4">⌘↵</kbd>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
