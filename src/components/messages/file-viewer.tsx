"use client";

import * as React from "react";
import { CopyIcon, FileTextIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { StaticMarkdownView } from "@/components/markdown-editor";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getFileLinkAccess } from "@/lib/actions";
import type { Employee } from "@/lib/types";

// Files an employee names in its replies, opened from Messages (MC-315): read from its computer when clicked, through
// the Worker, like the files it sends (MC-287). Only the person whose computer it is gets the links (Crewmark checks,
// getFileLinkAccess), and the daemon reads only what the rules in cli/file_links.go allow; FILE_LINKS turns it all off.

type Access = { url: string; token: string; expiresAt: string };

/** Where this tab reads each employee's named files from: asked once, again a minute before it stops working. */
const accesses = new Map<string, Promise<Access | null>>();

function access(organizationId: string, employeeId: string) {
  const key = `${organizationId}:${employeeId}`;
  const known = accesses.get(key);
  if (known) return known;
  const asked = getFileLinkAccess(organizationId, employeeId).catch(() => null);
  accesses.set(key, asked);
  void asked.then((value) => {
    const left = value ? Date.parse(value.expiresAt) - Date.now() - 60_000 : 5 * 60_000;
    setTimeout(() => accesses.delete(key), Math.max(left, 30_000));
  });
  return asked;
}

const OpenFileContext = React.createContext<((path: string) => void) | undefined>(undefined);

/** Opens a file the employee named; undefined when the person can't open them, and the paths stay plain text. */
export function useOpenFile() {
  return React.useContext(OpenFileContext);
}

/** Lets what's inside open the files the employee names, when the person may (it's their computer). */
export function FileLinks({ employee, children }: { employee: Employee; children: React.ReactNode }) {
  const { organization } = useCrewStore();
  const [allowed, setAllowed] = React.useState(false);
  const [path, setPath] = React.useState<string | null>(null);
  React.useEffect(() => {
    let current = true;
    void access(organization.id, employee.id).then((a) => current && setAllowed(Boolean(a)));
    return () => {
      current = false;
    };
  }, [organization.id, employee.id]);
  return (
    <OpenFileContext.Provider value={allowed ? setPath : undefined}>
      {children}
      <Sheet open={path !== null} onOpenChange={(open) => !open && setPath(null)}>
        <SheetContent side="right" className="w-full gap-0 p-0 data-[side=right]:sm:max-w-2xl">
          {path !== null && <FileView key={path} employee={employee} path={path} />}
        </SheetContent>
      </Sheet>
    </OpenFileContext.Provider>
  );
}

type Shown =
  | { kind: "loading" }
  | { kind: "text"; text: string }
  | { kind: "image"; url: string }
  | { kind: "error"; message: string };

function FileView({ employee, path }: { employee: Employee; path: string }) {
  const { organization } = useCrewStore();
  const [shown, setShown] = React.useState<Shown>({ kind: "loading" });
  React.useEffect(() => {
    let current = true;
    let objectUrl: string | null = null;
    void (async () => {
      const where = await access(organization.id, employee.id);
      if (!where) return current && setShown({ kind: "error", message: "Only the person whose computer it is can open its files." });
      const url = `${where.url}?${new URLSearchParams({ token: where.token, employee: employee.id, path }).toString()}`;
      try {
        const response = await fetch(url);
        if (!current) return;
        if (!response.ok) {
          const message =
            response.status === 503 || response.status === 504
              ? `${employee.name}'s computer is offline: its files open while it's on.`
              : response.status === 403
                ? "This file can't be opened here: it isn't one the employee named in its folders, it may hold secrets, or it's too big. A computer whose crewmark is older than 0.8.9 opens none."
                : "This file isn't there any more.";
          return setShown({ kind: "error", message });
        }
        const type = response.headers.get("Content-Type") ?? "";
        if (type.startsWith("image/")) {
          objectUrl = URL.createObjectURL(await response.blob());
          if (current) setShown({ kind: "image", url: objectUrl });
        } else {
          const text = await response.text();
          if (current) setShown({ kind: "text", text });
        }
      } catch {
        if (current) setShown({ kind: "error", message: `Couldn't reach ${employee.name}'s computer.` });
      }
    })();
    return () => {
      current = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [organization.id, employee.id, employee.name, path]);

  const name = path.split("/").at(-1) ?? path;
  const markdown = /\.(md|mdx|markdown)$/i.test(name);
  const copy = (what: string, label: string) =>
    void navigator.clipboard.writeText(what).then(
      () => toast.success(`${label} copied`),
      () => toast.error("Couldn't copy it"),
    );

  return (
    <>
      <SheetHeader className="gap-1 border-b border-rule px-4 py-3 pr-12">
        <SheetTitle className="flex items-center gap-2 text-sm">
          <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="truncate">{name}</span>
        </SheetTitle>
        <SheetDescription className="flex items-center gap-1 text-xs">
          <span className="min-w-0 flex-1 truncate font-mono">{path}</span>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={() => copy(path, "Path")}>
            <CopyIcon className="size-3" />
            Path
          </Button>
          {shown.kind === "text" && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={() => copy(shown.text, "Text")}>
              <CopyIcon className="size-3" />
              Text
            </Button>
          )}
        </SheetDescription>
      </SheetHeader>
      <div className="min-h-0 flex-1 overflow-auto">
        {shown.kind === "loading" ? (
          <p className="p-6 text-sm text-muted-foreground">Reading it from {employee.name}&apos;s computer…</p>
        ) : shown.kind === "error" ? (
          <p className="p-6 text-sm text-muted-foreground">{shown.message}</p>
        ) : shown.kind === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element -- from the employee's computer, not ours to optimise
          <img src={shown.url} alt={name} className="mx-auto max-w-full p-4" />
        ) : markdown ? (
          <StaticMarkdownView value={shown.text} className="px-6 py-4 text-sm" />
        ) : (
          <Code text={shown.text} />
        )}
      </div>
    </>
  );
}

/** Text as the file has it, numbered by line. */
function Code({ text }: { text: string }) {
  const lines = text.replace(/\n$/, "").split("\n");
  return (
    <pre className="grid grid-cols-[auto_1fr] py-3 font-mono text-xs leading-5">
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          <span className="pr-3 pl-4 text-right text-muted-foreground/60 select-none">{i + 1}</span>
          <span className="pr-4 whitespace-pre-wrap [overflow-wrap:anywhere]">{line || " "}</span>
        </React.Fragment>
      ))}
    </pre>
  );
}
