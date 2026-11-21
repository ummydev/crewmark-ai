"use client";

import * as React from "react";
import { CopyIcon, FileIcon, FileTextIcon, PlayIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { StaticMarkdownView } from "@/components/markdown-editor";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useOpenImage } from "@/components/messages/image-viewer";
import { useOpenMedia } from "@/components/messages/media-panel";
import { getWorkFiles } from "@/lib/actions";
import type { Employee, WorkFile } from "@/lib/types";

// The pictures and videos an employee sent the person in its work (MC-287), with Claude Code's SendUserFile. They stay
// on the employee's computer: the browser loads them from the realtime Worker, which reads them from that computer
// as they're asked for (realtime/src/index.ts, cli/worklog_files.go), a video a range at a time as it plays. So they
// show while that computer is on, and Crewmark keeps none of them.

type Access = { url: string; token: string; expiresAt: string };

/** Where this tab loads employees' files from, per organization; asked for again an hour before it stops working. */
const accesses = new Map<string, Promise<Access | null>>();

function access(organizationId: string) {
  const known = accesses.get(organizationId);
  if (known) return known;
  const asked = getWorkFiles(organizationId).catch(() => null);
  accesses.set(organizationId, asked);
  void asked.then((value) => {
    const left = value ? Date.parse(value.expiresAt) - Date.now() - 60 * 60_000 : 60_000;
    setTimeout(() => accesses.delete(organizationId), Math.max(left, 60_000));
  });
  return asked;
}

/** Where to load the employee's files from: undefined while asking, null when Crewmark has no Worker. */
function useAccess(organizationId: string) {
  const [value, setValue] = React.useState<Access | null | undefined>(undefined);
  React.useEffect(() => {
    let current = true;
    void access(organizationId).then((a) => current && setValue(a));
    return () => {
      current = false;
    };
  }, [organizationId]);
  return value;
}

/**
 * Where to load one of the employee's files from: undefined while the tab is finding out, null when Crewmark has no
 * Worker. Shared with the media panel (MC-318).
 */
export function useFileLink(employee: Employee) {
  const { organization } = useCrewStore();
  const where = useAccess(organization.id);
  return (file: WorkFile) =>
    // On Pro the computer uploaded it (MC-359): it opens from Crewmark's storage, with the computer on or off.
    file.stored
      ? `/api/attachments/${file.stored}`
      : where === undefined
      ? undefined
      : where && `${where.url}?${new URLSearchParams({ token: where.token, employee: employee.id, file: file.id }).toString()}`;
}

/** The files the agent sent in a turn, as the agent's message: pictures small, videos to play, the rest by name. */
export function WorkFiles({ employee, files }: { employee: Employee; files: WorkFile[] }) {
  const link = useFileLink(employee);
  return (
    <div className="grid min-w-0 grid-cols-1 justify-items-start gap-2">
      {files.map((file) => (
        <figure key={file.id} className="grid max-w-full min-w-0 grid-cols-1 justify-items-start gap-1.5">
          <Shown file={file} url={link(file)} employee={employee} />
          {file.caption && <figcaption className="text-sm text-muted-foreground">{file.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

/**
 * One file: the picture or the video, loaded from the employee's computer; or its name, and why it doesn't show.
 * `url` is undefined while the tab is finding out where to load it from, null when it can't. One that didn't load is
 * tried again when the computer sends the turn anew (it's back on).
 */
function Shown({ file, url, employee }: { file: WorkFile; url: string | null | undefined; employee: Employee }) {
  const openImage = useOpenImage();
  // In a conversation, both open in its viewer, with the box to write about them (MC-350).
  const media = useOpenMedia();
  const [failedFor, setFailedFor] = React.useState<WorkFile | null>(null);
  const failed = failedFor === file;
  const setFailed = () => setFailedFor(file);
  const why = whyNot(file, url, failed, employee);
  if (why || url === null) return <Named file={file} note={why ?? "Can't be shown here"} />;
  if (url === undefined) {
    return <div aria-label={`Loading ${file.name}`} className="h-40 w-56 max-w-full animate-pulse rounded-xl bg-muted" />;
  }
  if (file.kind === "markdown") return <MarkdownFile file={file} url={url} employee={employee} />;
  if (file.kind === "image") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener"
        // Opens in the viewer (MC-304); the link is for opening it elsewhere (a middle click, a long press).
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
          event.preventDefault();
          if (media) media.open(file);
          else openImage(url);
        }}
        className="block max-w-full cursor-zoom-in"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- from the employee's computer, not ours to optimise */}
        <img
          src={url}
          alt={file.name}
          loading="lazy"
          onError={setFailed}
          className="max-h-72 w-auto max-w-full rounded-xl border border-rule object-contain"
        />
      </a>
    );
  }
  if (!media) {
    return (
      <video
        src={url}
        crossOrigin="anonymous"
        controls
        playsInline
        preload="metadata"
        aria-label={file.name}
        onError={setFailed}
        className="max-h-[min(32rem,70svh)] w-auto max-w-full rounded-xl bg-black"
      />
    );
  }
  // Its first frame, with a play button: a click plays it in the viewer, not the browser's own player full screen.
  return (
    <button
      type="button"
      aria-label={`Play ${file.name}`}
      onClick={() => media.open(file)}
      className="group relative block max-w-full overflow-hidden rounded-xl bg-black"
    >
      <video
        src={`${url}#t=0.1`}
        // Read with CORS, as the viewer reads it: else the browser keeps a copy without CORS headers and the viewer
        // can't play it from there (a stored video from R2 played nothing).
        crossOrigin="anonymous"
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        onError={setFailed}
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;
          if (video.videoWidth && video.videoHeight) media.size(file.id, { width: video.videoWidth, height: video.videoHeight });
        }}
        className="pointer-events-none block max-h-[min(32rem,70svh)] w-auto max-w-full"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
        <span className="flex size-12 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
          <PlayIcon className="ml-0.5 size-5 fill-white" />
        </span>
      </span>
    </button>
  );
}

/** Why the file doesn't show, if it doesn't. */
function whyNot(file: WorkFile, url: string | null | undefined, failed: boolean, employee: Employee) {
  if (file.problem === "missing") return `No longer on ${employee.name}'s computer`;
  if (file.problem || file.kind === "file" || url === null) return "Can't be shown here";
  // Most likely that computer is off or asleep.
  if (failed) return file.stored ? "Couldn't be loaded" : `Shows while ${employee.name}'s computer is on`;
  return null;
}

function Named({ file, note }: { file: WorkFile; note: string }) {
  return (
    <div className="flex max-w-full min-w-0 items-center gap-2.5 rounded-xl border border-rule px-3 py-2">
      <FileIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
      <span className="grid min-w-0 grid-cols-1">
        <span className="truncate text-sm">{file.name}</span>
        <span className="truncate text-xs text-muted-foreground">{note}</span>
      </span>
    </div>
  );
}

/** A Markdown file the agent sent (MC-359): its name, which opens it as a page at the side. */
function MarkdownFile({ file, url, employee }: { file: WorkFile; url: string; employee: Employee }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex max-w-full min-w-0 items-center gap-2.5 rounded-xl border border-rule px-3 py-2 text-left transition-colors hover:bg-muted/60"
      >
        <FileTextIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        <span className="grid min-w-0 grid-cols-1">
          <span className="truncate text-sm">{file.name}</span>
          <span className="truncate text-xs text-muted-foreground">Markdown · click to read</span>
        </span>
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full gap-0 p-0 data-[side=right]:sm:max-w-2xl">
          {open && <MarkdownPage file={file} url={url} employee={employee} />}
        </SheetContent>
      </Sheet>
    </>
  );
}

function MarkdownPage({ file, url, employee }: { file: WorkFile; url: string; employee: Employee }) {
  const [text, setText] = React.useState<string | null>(null);
  const [problem, setProblem] = React.useState<string | null>(null);
  React.useEffect(() => {
    let current = true;
    fetch(url)
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status));
        const body = await response.text();
        if (current) setText(body);
      })
      .catch(() => {
        if (current) setProblem(file.stored ? "Couldn't be loaded." : `Opens while ${employee.name}'s computer is on.`);
      });
    return () => {
      current = false;
    };
  }, [url, file.stored, employee.name]);
  const copy = () =>
    text !== null &&
    void navigator.clipboard.writeText(text).then(
      () => toast.success("Text copied"),
      () => toast.error("Couldn't copy it"),
    );
  return (
    <>
      <SheetHeader className="gap-1 border-b border-rule px-4 py-3 pr-12">
        <SheetTitle className="flex items-center gap-2 text-sm">
          <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="truncate">{file.name}</span>
        </SheetTitle>
        <SheetDescription className="flex items-center gap-1 text-xs">
          <span className="min-w-0 flex-1 truncate">{file.caption || `Sent by ${employee.name}`}</span>
          {text !== null && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={copy}>
              <CopyIcon className="size-3" />
              Text
            </Button>
          )}
        </SheetDescription>
      </SheetHeader>
      <div className="min-h-0 flex-1 overflow-auto">
        {problem ? (
          <p className="p-6 text-sm text-muted-foreground">{problem}</p>
        ) : text === null ? (
          <p className="p-6 text-sm text-muted-foreground">Loading…</p>
        ) : (
          <StaticMarkdownView value={text} className="px-6 py-4 text-sm" />
        )}
      </div>
    </>
  );
}
