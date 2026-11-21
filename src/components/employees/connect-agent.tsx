"use client";

import * as React from "react";
import Link from "next/link";
import { CheckIcon, CopyIcon, FolderIcon, LaptopIcon, LoaderCircleIcon } from "lucide-react";

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createInstallLogin, getAgentConnection, getDevices, startEmployeeOnDevice } from "@/lib/actions";
import { timeAgo } from "@/lib/format";
import {
  isAcpRuntime,
  runtimeLabel,
  type AgentConnection,
  type AgentRuntime,
  type Device,
  type Employee,
} from "@/lib/types";

/** What starting an employee does, under the title of a dialog step that shows ConnectAgent. */
export const CONNECT_AGENT_DESCRIPTION = "Crewmark runs it on your computer and keeps its conversation.";

/** How often to look for the person's computer while it isn't connected yet. */
const POLL_MS = 3000;

/** A folder as people read it: the home folder as ~. */
function shortFolder(path: string) {
  return path.replace(/^(\/Users|\/home)\/[^/]+(?=\/|$)/, "~").replace(/^[A-Z]:\\Users\\[^\\]+(?=\\|$)/i, "~");
}

const computerName = (d: Device) => d.hostname.replace(/\.local$/, "") || "Your computer";

/**
 * Starting an employee as a conversation Crewmark manages on the person's computer (MC-421): with no computer
 * connected yet, one command that installs the crewmark CLI logged in as them and starts its daemon; once one is,
 * computer · folder · agent · Start.
 */
export function ConnectAgent({
  employee,
  onConnected,
}: {
  employee: Employee;
  onConnected?: (connection: AgentConnection) => void;
}) {
  const { organization, showConnectedAgent } = useCrewStore();
  const [devices, setDevices] = React.useState<Device[] | undefined>(undefined);
  const [deviceId, setDeviceId] = React.useState<string | null>(null);
  const [folder, setFolder] = React.useState<string | null>(null);
  const [agent, setAgent] = React.useState<string | null>(null);
  const [state, setState] = React.useState<{ kind: "idle" | "starting" | "started" } | { kind: "failed"; error: string }>({
    kind: "idle",
  });

  const usable = (devices ?? []).filter((d) => d.online && d.agents.length > 0 && d.folders.length > 0);
  const device = usable.find((d) => d.id === deviceId) ?? usable[0];

  // Look for the person's computers until one is connected, and keep looking while none is.
  const connected = usable.length > 0;
  React.useEffect(() => {
    let current = true;
    const look = () =>
      getDevices(organization.id)
        .then((found) => current && setDevices(found))
        .catch(() => current && setDevices((d) => d ?? []));
    void look();
    if (connected) return () => void (current = false);
    const timer = setInterval(look, POLL_MS);
    return () => {
      current = false;
      clearInterval(timer);
    };
  }, [organization.id, connected]);

  // Once started, the employee's connection shows up as its conversation sets itself up.
  React.useEffect(() => {
    if (state.kind !== "started") return;
    const since = Date.now();
    const timer = setInterval(async () => {
      const latest = await getAgentConnection(organization.id, employee.id).catch(() => null);
      if (latest && new Date(latest.connectedAt).getTime() >= since - 60_000) {
        clearInterval(timer);
        showConnectedAgent(employee.id, latest.runtime);
        onConnected?.(latest);
      }
    }, POLL_MS);
    const stop = setTimeout(() => clearInterval(timer), 2 * 60_000);
    return () => {
      clearInterval(timer);
      clearTimeout(stop);
    };
  }, [state.kind, organization.id, employee.id, onConnected, showConnectedAgent]);

  if (devices === undefined) {
    return (
      <div className="flex h-24 items-center justify-center">
        <LoaderCircleIcon className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }
  if (!device) return <ConnectComputer />;

  const chosenFolder = folder && device.folders.includes(folder) ? folder : device.folders[0];
  const chosenAgent =
    agent && (device.agents as string[]).includes(agent)
      ? agent
      : (device.agents as string[]).includes("claude-code")
        ? "claude-code"
        : device.agents[0];

  if (state.kind === "started") {
    return (
      <div className="flex items-center gap-2 text-sm">
        <CheckIcon className="size-4 shrink-0 text-emerald-600" />
        <span>
          {employee.name} is starting on {computerName(device)}.{" "}
          <Link href={`/org/${organization.slug}/messages/${employee.id}`} className="font-medium underline-offset-2 hover:underline">
            Open conversation
          </Link>
        </span>
      </div>
    );
  }

  async function start() {
    setState({ kind: "starting" });
    try {
      const answer = await startEmployeeOnDevice(organization.id, employee.id, device.id, chosenFolder, chosenAgent);
      setState(answer.ok ? { kind: "started" } : { kind: "failed", error: answer.error });
    } catch {
      setState({ kind: "failed", error: "Something went wrong. Try again." });
    }
  }

  const busy = state.kind === "starting";
  const reset = () => setState({ kind: "idle" });
  return (
    <div className="grid gap-3 text-sm">
      <div className="grid gap-2 sm:grid-cols-[auto_1fr_auto]">
        <Select
          items={usable.map((d) => ({ value: d.id, label: computerName(d) }))}
          value={device.id}
          onValueChange={(id) => {
            setDeviceId(id);
            reset();
          }}
        >
          <SelectTrigger aria-label="Computer" className="h-8 min-w-0 text-[13px]">
            <LaptopIcon className="size-3.5 text-muted-foreground" aria-hidden />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {usable.map((d) => (
              <SelectItem key={d.id} value={d.id}>
                {computerName(d)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          items={device.folders.map((f) => ({ value: f, label: shortFolder(f) }))}
          value={chosenFolder}
          onValueChange={(f) => {
            setFolder(f);
            reset();
          }}
        >
          <SelectTrigger aria-label="Folder" className="h-8 min-w-0 font-mono text-[12px]">
            <FolderIcon className="size-3.5 text-muted-foreground" aria-hidden />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {device.folders.map((f) => (
              <SelectItem key={f} value={f} className="font-mono text-[12px]">
                {shortFolder(f)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          items={device.agents.map((a) => ({ value: a, label: runtimeLabel(a as AgentRuntime) }))}
          value={chosenAgent}
          onValueChange={(a) => {
            setAgent(a);
            reset();
          }}
        >
          <SelectTrigger aria-label="Agent" className="h-8 min-w-0 text-[13px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {device.agents.map((a) => (
              <SelectItem key={a} value={a}>
                {runtimeLabel(a as AgentRuntime)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className={state.kind === "failed" ? "text-xs text-destructive" : "text-xs text-muted-foreground"}>
          {state.kind === "failed" ? state.error : "Runs in auto mode."}
        </p>
        <Button type="button" size="sm" disabled={busy || !chosenFolder || !chosenAgent} onClick={start}>
          {busy && <LoaderCircleIcon className="animate-spin" />}
          {busy ? "Starting…" : `Start ${employee.name}`}
        </Button>
      </div>
    </div>
  );
}

/** The one command that connects the person's computer: it installs the CLI logged in as them and starts the daemon. */
function ConnectComputer() {
  const { organization } = useCrewStore();
  const [secret, setSecret] = React.useState<string | null>(null);
  const [failed, setFailed] = React.useState(false);
  // Only shown in a dialog, after the page is up, so the browser's platform is known on the first render.
  const [windows, setWindows] = React.useState(() => typeof navigator !== "undefined" && /Win/.test(navigator.platform));
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let current = true;
    createInstallLogin(organization.id)
      .then((made) => current && setSecret(made.secret))
      .catch(() => current && setFailed(true));
    return () => {
      current = false;
    };
  }, [organization.id]);

  const origin = typeof window === "undefined" ? "" : window.location.origin;
  // Elsewhere than crewmark.ai (a preview, development), the CLI is pointed at this site.
  const site = origin === "https://crewmark.ai" ? "" : origin;
  const command = !secret
    ? ""
    : windows
      ? `$env:CREWMARK_LOGIN='${secret}';${site ? ` $env:CREWMARK_URL='${site}';` : ""} irm ${origin}/install.ps1 | iex`
      : `curl -fsSL ${origin}/install.sh | CREWMARK_LOGIN=${secret}${site ? ` CREWMARK_URL=${site}` : ""} sh`;

  return (
    <div className="grid gap-3 text-sm">
      <div className="flex items-center justify-between">
        <p className="font-medium">Connect your computer</p>
        <div className="flex gap-1 text-xs">
          {[
            { label: "macOS / Linux", value: false },
            { label: "Windows", value: true },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => setWindows(option.value)}
              className={
                windows === option.value
                  ? "rounded px-1.5 py-0.5 text-foreground"
                  : "rounded px-1.5 py-0.5 text-muted-foreground hover:text-foreground"
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative rounded-lg border bg-muted/50 p-3 pr-11 font-mono text-[12px] leading-relaxed break-all">
        {command || (
          <span className="font-sans text-muted-foreground">{failed ? "Couldn't make a command. Reopen this." : "…"}</span>
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Copy command"
          className="absolute top-1.5 right-1.5"
          disabled={!command}
          onClick={async () => {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <LoaderCircleIcon className="size-3.5 animate-spin" />
        Run it in a terminal. Waiting for your computer…
      </p>
    </div>
  );
}

/** The command that reopens the employee's conversation on the computer it runs on, for agents we know. */
function resumeCommand(connection: AgentConnection) {
  if (!connection.sessionId) return null;
  const cd = connection.workdir ? `cd ${JSON.stringify(connection.workdir)} && ` : "";
  if (connection.runtime === "codex") return `${cd}codex resume ${connection.sessionId}`;
  // A session the daemon keeps through acpx (MC-417).
  if (isAcpRuntime(connection.runtime)) return `${cd}npx acpx@0.22.0 ${connection.runtime} -s ${connection.sessionId} "<message>"`;
  if (connection.runtime === "claude-code") return `${cd}claude --resume ${connection.sessionId}`;
  return null;
}

/** An employee's AI agent on its page: where it runs and how to talk to it, or a way to connect one. */
export function AgentPanel({ employee }: { employee: Employee }) {
  const { organization } = useCrewStore();
  // undefined while loading, null when no agent is connected.
  const [connection, setConnection] = React.useState<AgentConnection | null | undefined>(undefined);
  const [connecting, setConnecting] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    getAgentConnection(organization.id, employee.id)
      .then(setConnection)
      .catch(() => setConnection(null));
  }, [organization.id, employee.id]);

  const resume = connection ? resumeCommand(connection) : null;

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-[13px] font-medium">AI agent</h2>
      {connection === undefined ? (
        <p className="text-[13px] text-muted-foreground">Checking…</p>
      ) : connection ? (
        <>
          <p className="text-[13px]">
            {connection.runtime ? runtimeLabel(connection.runtime) : "An agent"}
            {connection.hostname ? ` on ${connection.hostname}` : ""}
            <span className="text-muted-foreground">
              {" "}
              · active {timeAgo(connection.lastUsedAt ?? connection.connectedAt)}
            </span>
          </p>
          {resume && (
            <>
              <p className="text-xs text-muted-foreground">To talk to {employee.name}, continue its conversation:</p>
              <div className="relative rounded-md border bg-muted/50 p-2 pr-10 font-mono text-[11px] break-all">
                {resume}
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Copy command"
                  className="absolute top-1.5 right-1.5"
                  onClick={async () => {
                    await navigator.clipboard.writeText(resume);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </Button>
              </div>
            </>
          )}
          <Button variant="outline" size="sm" className="self-start text-[13px]" onClick={() => setConnecting(true)}>
            Restart
          </Button>
        </>
      ) : (
        <>
          <p className="text-[13px] text-muted-foreground">No agent works as {employee.name} yet.</p>
          <Button variant="outline" size="sm" className="self-start text-[13px]" onClick={() => setConnecting(true)}>
            Start {employee.name}
          </Button>
        </>
      )}

      <Dialog open={connecting} onOpenChange={setConnecting}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Start {employee.name}</DialogTitle>
            <DialogDescription>
              {CONNECT_AGENT_DESCRIPTION}
              {connection ? " The agent connected now is disconnected once the new one connects." : ""}
            </DialogDescription>
          </DialogHeader>
          <ConnectAgent employee={employee} onConnected={setConnection} />
          <DialogFooter>
            <Button type="button" onClick={() => setConnecting(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
