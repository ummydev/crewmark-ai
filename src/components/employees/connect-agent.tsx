"use client";

import * as React from "react";
import { CheckIcon, CopyIcon, LoaderCircleIcon } from "lucide-react";

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
import { createAgentSetupToken, getAgentConnection } from "@/lib/actions";
import { conversationTitle } from "@/lib/agent-setup";
import { timeAgo } from "@/lib/format";
import { runtimeLabel, type AgentConnection, type Employee, type Project } from "@/lib/types";

/** What connecting does, under the title of a dialog step that shows ConnectAgent. */
export const CONNECT_AGENT_DESCRIPTION =
  "Give your agent this prompt and it sets itself up: it installs the crewmark CLI, learns its role and starts working on its issues.";

/** How often to check whether the agent has connected. */
const POLL_MS = 3000;

/**
 * What the person pastes into their agent: it fetches the setup instructions and follows them. Its first line is the
 * conversation's title, e.g. "Sage - 📈 SEO Growth", because agents title a conversation after its first message.
 */
function setupPrompt(employee: Employee, projects: Project[], token: string) {
  const url = `${window.location.origin}/setup/${token}`;
  const title = conversationTitle(
    employee.name,
    projects.filter((p) => employee.projectIds.includes(p.id)),
  );
  return (
    `${title}\n\nYou are ${employee.name}, an AI employee on Crewmark. Run \`curl -fsSL ${url}\` and follow the ` +
    "instructions it prints to set yourself up."
  );
}

/**
 * Connecting an employee to an AI agent on the person's computer: a prompt with a one-time setup link to paste into
 * Claude Code or Codex, and a live status that turns to Connected once the agent has run `crewmark setup`.
 */
export function ConnectAgent({
  employee,
  onConnected,
}: {
  employee: Employee;
  onConnected?: (connection: AgentConnection) => void;
}) {
  const { organization, projects, showConnectedAgent } = useCrewStore();
  const [setup, setSetup] = React.useState<{ token: string; expiresAt: string; madeAt: number } | null>(null);
  const [failed, setFailed] = React.useState(false);
  const [connection, setConnection] = React.useState<AgentConnection | null>(null);
  const [expired, setExpired] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const makeLink = React.useCallback(async () => {
    setFailed(false);
    setExpired(false);
    try {
      const made = await createAgentSetupToken(organization.id, employee.id);
      setSetup({ ...made, madeAt: Date.now() });
    } catch (error) {
      console.error(error);
      setFailed(true);
    }
  }, [organization.id, employee.id]);

  React.useEffect(() => {
    // Async so the state updates land after the effect, not during it.
    void Promise.resolve().then(makeLink);
  }, [makeLink]);

  // Wait for the agent: a connection made after this link counts, an older one doesn't.
  React.useEffect(() => {
    if (!setup || connection) return;
    const timer = setInterval(async () => {
      if (Date.now() > new Date(setup.expiresAt).getTime()) {
        setExpired(true);
        clearInterval(timer);
        return;
      }
      const latest = await getAgentConnection(organization.id, employee.id).catch(() => null);
      if (latest && new Date(latest.connectedAt).getTime() >= setup.madeAt - 5000) {
        setConnection(latest);
        showConnectedAgent(employee.id, latest.runtime);
        onConnected?.(latest);
      }
    }, POLL_MS);
    return () => clearInterval(timer);
  }, [setup, connection, organization.id, employee.id, onConnected, showConnectedAgent]);

  async function copy() {
    if (!setup) return;
    await navigator.clipboard.writeText(setupPrompt(employee, projects, setup.token));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="grid gap-4 text-sm">
      <ol className="grid list-decimal gap-1.5 pl-5 text-muted-foreground marker:text-muted-foreground">
        <li>
          Open <span className="text-foreground">Claude Code</span> or <span className="text-foreground">Codex</span>{" "}
          in the folder where {employee.name} should work.
        </li>
        <li>Paste this prompt. That conversation becomes {employee.name}: come back to it to talk to them.</li>
        <li>Approve the commands it asks to run. It installs the crewmark CLI and connects.</li>
      </ol>

      <div className="relative rounded-lg border bg-muted/50 p-3 pr-12 font-mono text-[12px] leading-relaxed break-all whitespace-pre-wrap">
        {setup ? (
          setupPrompt(employee, projects, setup.token)
        ) : failed ? (
          <span className="font-sans text-destructive">Couldn&apos;t make a setup link.</span>
        ) : (
          <span className="font-sans text-muted-foreground">Making a setup link…</span>
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Copy prompt"
          className="absolute top-1.5 right-1.5"
          disabled={!setup || expired}
          onClick={copy}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>

      <div className="flex min-h-8 items-center gap-2 text-[13px]">
        {connection ? (
          <>
            <CheckIcon className="size-4 text-emerald-600" />
            <span>
              Connected
              {connection.runtime ? ` with ${runtimeLabel(connection.runtime)}` : ""}
              {connection.hostname ? ` on ${connection.hostname}` : ""}.
            </span>
          </>
        ) : expired || failed ? (
          <>
            <span className="text-muted-foreground">
              {expired ? "This link expired; links last an hour." : "Something went wrong."}
            </span>
            <Button type="button" variant="link" size="sm" className="h-auto px-0" onClick={makeLink}>
              Make a new one
            </Button>
          </>
        ) : (
          <>
            <LoaderCircleIcon className="size-4 animate-spin text-muted-foreground" />
            <span className="text-muted-foreground">Waiting for {employee.name}&apos;s agent to connect…</span>
          </>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        The link works once, for an hour. It signs the agent in as {employee.name}, so only paste it into your own
        agent.
      </p>
    </div>
  );
}

/** The command that reopens the employee's conversation on the computer it runs on, for agents we know. */
function resumeCommand(connection: AgentConnection) {
  if (!connection.sessionId) return null;
  const cd = connection.workdir ? `cd ${JSON.stringify(connection.workdir)} && ` : "";
  if (connection.runtime === "codex") return `${cd}codex resume ${connection.sessionId}`;
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
            Reconnect
          </Button>
        </>
      ) : (
        <>
          <p className="text-[13px] text-muted-foreground">No agent works as {employee.name} yet.</p>
          <Button variant="outline" size="sm" className="self-start text-[13px]" onClick={() => setConnecting(true)}>
            Connect an agent
          </Button>
        </>
      )}

      <Dialog open={connecting} onOpenChange={setConnecting}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Connect {employee.name} to an AI agent</DialogTitle>
            <DialogDescription>
              Give your agent this prompt and it sets itself up as {employee.name}.
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
