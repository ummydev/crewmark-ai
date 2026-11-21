"use client";

import * as React from "react";
import { ChevronDownIcon, FolderIcon, FolderPlusIcon } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { getConversationFolders } from "@/lib/actions";
import {
  AGENT_EFFORTS,
  AGENT_MODELS,
  AGENT_PERMISSION_MODES,
  MAX_ADD_DIRS,
  modelName,
  type AgentSettings,
  type AppRun,
  type Employee,
} from "@/lib/types";

// How the employee's conversation runs when Crewmark resumes it (MC-313), at the bottom of the box to write in, as in
// the Codex app (MC-316): on the left its folder (shown, not changed: a conversation belongs to the folder it started in), the model, the
// effort and the permission mode. The daemon passes them to `claude -p --resume`; a conversation open in the Claude
// app runs as the app has it.

const DEFAULT = "default";

interface Folders {
  workdir: string | null;
  hostname: string | null;
  folders: string[];
}

const chip =
  "inline-flex h-8 max-w-44 min-w-0 items-center gap-1.5 rounded-md px-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground data-[popup-open]:bg-muted";

function baseName(path: string) {
  return path.split(/[\\/]/).filter(Boolean).at(-1) ?? path;
}

/** The employee's settings, and a change to them, saved as the person makes it. */
function useAgentSettings(employee: Employee) {
  const { updateEmployee } = useCrewStore();
  const settings = employee.agentSettings ?? {};
  function change(patch: Partial<AgentSettings>) {
    const next: AgentSettings = { ...settings, ...patch };
    for (const key of Object.keys(next) as (keyof AgentSettings)[]) {
      const value = next[key];
      if (value === undefined || (Array.isArray(value) && value.length === 0)) delete next[key];
    }
    updateEmployee(employee.id, { agentSettings: Object.keys(next).length > 0 ? next : null });
  }
  return { settings, change };
}

/** The conversation's folder, on the left of the box: shown, with extra folders to let it use. */
export function FolderButton({ employee }: { employee: Employee }) {
  const { organization } = useCrewStore();
  const { settings, change } = useAgentSettings(employee);
  const [folders, setFolders] = React.useState<Folders | null>(null);
  const [adding, setAdding] = React.useState(false);

  React.useEffect(() => {
    let current = true;
    getConversationFolders(organization.id, employee.id)
      .then((found) => current && setFolders(found))
      .catch(() => current && setFolders({ workdir: null, hostname: null, folders: [] }));
    return () => {
      current = false;
    };
  }, [organization.id, employee.id]);

  const addDirs = settings.addDirs ?? [];
  const offered = [...new Set([...(folders?.folders ?? []), ...addDirs])].sort();
  const workdir = folders?.workdir;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={chip} title={workdir ?? undefined}>
          <FolderIcon className="size-4 shrink-0" />
          <span className="truncate">{workdir ? baseName(workdir) : "Folder"}</span>
          {addDirs.length > 0 && <span className="shrink-0">+{addDirs.length}</span>}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-80 max-w-[calc(100vw-2rem)]">
          <div className="grid gap-0.5 px-2 py-1.5">
            <span className="text-xs text-muted-foreground">
              Its folder{folders?.hostname ? ` on ${folders.hostname}` : ""}
            </span>
            <span className="break-all text-sm">{workdir ?? (folders ? "Not connected yet" : "Loading…")}</span>
            <span className="text-xs text-muted-foreground">
              A conversation stays in the folder it started in: to work in another, start a new one there.
            </span>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Also let it use</DropdownMenuLabel>
            {offered.map((dir) => (
              <DropdownMenuCheckboxItem
                key={dir}
                checked={addDirs.includes(dir)}
                disabled={!addDirs.includes(dir) && addDirs.length >= MAX_ADD_DIRS}
                onCheckedChange={(on) => change({ addDirs: on ? [...addDirs, dir] : addDirs.filter((d) => d !== dir) })}
                title={dir}
              >
                <span className="truncate">{dir}</span>
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuItem onClick={() => setAdding(true)} disabled={addDirs.length >= MAX_ADD_DIRS}>
              <FolderPlusIcon />
              Another folder…
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddFolder
        open={adding}
        onOpenChange={setAdding}
        onAdd={(dir) => {
          if (addDirs.includes(dir) || dir === workdir) return;
          change({ addDirs: [...addDirs, dir] });
        }}
      />
    </>
  );
}

// As the Claude app names them: "xhigh" is Extra.
const EFFORT_NAMES = Object.fromEntries(
  AGENT_EFFORTS.map((e) => [e, e === "xhigh" ? "Extra" : e[0].toUpperCase() + e.slice(1)]),
) as Record<(typeof AGENT_EFFORTS)[number], string>;
const effortName = (effort: string) => EFFORT_NAMES[effort as keyof typeof EFFORT_NAMES] ?? effort;

/**
 * How the conversation runs, on the right of the box, by the Send button, as in the Codex app: the model, and the
 * effort after it in grey; its menu also has the permission mode.
 */
export function RunButton({ employee, app }: { employee: Employee; app?: AppRun | null }) {
  const { settings, change } = useAgentSettings(employee);
  const { model, effort, permissionMode } = settings;
  // What it actually runs with, as its latest request says (MC-380), else how the Claude app has it (MC-319); what's
  // picked here only when its computer hasn't said.
  const shownModel = app?.model ? modelName(app.model) : model ? AGENT_MODELS[model] : null;
  const shownEffort = app?.effort ?? effort;
  const source = app?.last ? "As it ran last" : "As in the Claude app";
  // What's picked here and isn't what it runs with: not yet (a background run takes it with the next message), or
  // never while the Claude app runs it.
  const offModel = model && app?.model && AGENT_MODELS[model] !== modelName(app.model) ? AGENT_MODELS[model] : null;
  const offEffort = effort && app?.effort && effort !== app.effort ? effortName(effort) : null;
  const picked = [offModel, offEffort].filter(Boolean).join(" ");
  const running = [app?.model && modelName(app.model), app?.effort && effortName(app.effort)].filter(Boolean).join(" ");
  const off = picked
    ? app?.inApp
      ? `It runs with ${running} in the Claude app. ${picked}, picked here, applies only when Crewmark resumes it in the background; to change it, change it in the Claude app.`
      : `It ran with ${running} last; ${picked}, picked here, from its next message.`
    : null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Model and effort"
        title={off ?? undefined}
        className="inline-flex h-8 min-w-0 items-center gap-1 rounded-md px-2 text-sm hover:bg-muted data-[popup-open]:bg-muted"
      >
        <span className="truncate">{shownModel ?? "Default model"}</span>
        {shownEffort && <span className="shrink-0 text-muted-foreground">{effortName(shownEffort)}</span>}
        {off && <span aria-label="What's picked here isn't in use" className="size-1.5 shrink-0 rounded-full bg-amber-500" />}
        <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {off && (
          <>
            <p className="px-2 py-1.5 text-xs text-amber-700 dark:text-amber-400">{off}</p>
            <DropdownMenuSeparator />
          </>
        )}
        <Section
          label="Model"
          value={model}
          options={AGENT_MODELS}
          defaultName={app?.model ? `${source} (${modelName(app.model)})` : undefined}
          onChange={(next) => change({ model: next })}
        />
        <DropdownMenuSeparator />
        <Section
          label="Effort"
          value={effort}
          options={EFFORT_NAMES}
          defaultName={app?.effort ? `${source} (${effortName(app.effort)})` : undefined}
          onChange={(next) => change({ effort: next })}
        />
        <DropdownMenuSeparator />
        <Section
          label="Permissions"
          value={permissionMode}
          options={AGENT_PERMISSION_MODES}
          defaultLabel="Auto"
          onChange={(next) => change({ permissionMode: next })}
        />
        <DropdownMenuSeparator />
        <p className="px-2 py-1.5 text-xs text-muted-foreground">
          The button shows what it runs with. What you pick applies when Crewmark resumes the conversation in the
          background; open in the Claude app, it runs as the app has it.
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** One group of choices in the menu, the first being Claude Code's own. */
function Section<K extends string>({
  label,
  value,
  options,
  defaultLabel,
  defaultName,
  onChange,
}: {
  label: string;
  value: K | undefined;
  options: Record<K, string>;
  /** What the default is called, when it's one of the options ("Auto"). */
  defaultLabel?: string;
  /** What the default item says, when it says more than "Default" (what the Claude app runs it with). */
  defaultName?: string;
  onChange: (value: K | undefined) => void;
}) {
  return (
    <DropdownMenuRadioGroup
      value={value ?? DEFAULT}
      onValueChange={(next) => onChange(next === DEFAULT ? undefined : (next as K))}
    >
      <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">{label}</DropdownMenuLabel>
      <DropdownMenuRadioItem value={DEFAULT}>
        {defaultLabel ? `${defaultLabel} (default)` : (defaultName ?? "Default")}
      </DropdownMenuRadioItem>
      {(Object.entries(options) as [K, string][])
        .filter(([key]) => !defaultLabel || options[key] !== defaultLabel)
        .map(([key, name]) => (
          <DropdownMenuRadioItem key={key} value={key}>
            {name}
          </DropdownMenuRadioItem>
        ))}
    </DropdownMenuRadioGroup>
  );
}

function AddFolder({
  open,
  onOpenChange,
  onAdd,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (dir: string) => void;
}) {
  const [path, setPath] = React.useState("");
  const full = path.trim().replace(/(.)[\\/]+$/, "$1");
  const valid = full.startsWith("/") || /^[A-Za-z]:[\\/]/.test(full);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Let it use another folder</DialogTitle>
          <DialogDescription>The full path of a folder on its computer, e.g. /Users/you/workspace/site.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!valid) return toast.error("That isn't a full path: it starts with /");
            onAdd(full);
            setPath("");
            onOpenChange(false);
          }}
          className="grid gap-4"
        >
          <Input autoFocus value={path} onChange={(e) => setPath(e.target.value)} placeholder="/Users/you/workspace/site" />
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!full}>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
