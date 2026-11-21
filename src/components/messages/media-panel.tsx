"use client";

import * as React from "react";
import { ImageIcon, MessageSquarePlusIcon, PlayIcon, RefreshCwIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

import { useCrewStore } from "@/components/crew-store";
import { FrameOverlay, frameShots, frameTime, shownVideo, type FramePin } from "@/components/messages/frame-comments";
import { MediaViewer } from "@/components/messages/image-viewer";
import { useFileLink } from "@/components/messages/work-files";
import { segmentClass } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useImageUpload } from "@/components/use-image-upload";
import { sendRealtime, useRealtime } from "@/components/use-realtime";
import { fullDate } from "@/lib/format";
import type { Employee, ListedFile, WorkFile } from "@/lib/types";

// The conversation's media (MC-318): every picture and video the agent sent in it, not just the turns loaded, so a
// video doesn't get lost in a long conversation. Beside the conversation on a computer, over it on a phone. A click
// shows one large, to play, with the others to go through; a box under it sends a message about it, naming it for
// the agent by its path. Like the files in the work, they load from the employee's computer while it's on (MC-287);
// the daemon lists them ("worklog.files", cli/worklog_files.go).

type Filter = "all" | "video" | "image";

const FILTERS: [Filter, string][] = [
  ["all", "All"],
  ["video", "Videos"],
  ["image", "Pictures"],
];

const dayFormat = new Intl.DateTimeFormat("en", { dateStyle: "medium" });

/** A message about the file for the agent: which file (its path, so it can find it), then the person's words. */
export function quoteFile(file: ListedFile, comment: string) {
  const sent = fullDate.format(new Date(file.at));
  const lines = [`> 📎 **${file.name}** · \`${file.path}\` · sent ${sent}`];
  if (file.caption) lines.push(">", `> ${file.caption}`);
  return `${lines.join("\n")}\n\n${comment.trim()}`;
}

type Size = { width: number; height: number };

interface OpenMedia {
  /** Shows a picture or video from the work in the viewer, with the conversation's others to go through. */
  open: (file: WorkFile) => void;
  /** A video's own size, once a thumbnail of it knows it, for the viewer's player. */
  size: (id: string, size: Size) => void;
}

const OpenMediaContext = React.createContext<OpenMedia | null>(null);

/** Opens a file from the work in the conversation's viewer (MC-350); null outside a conversation. */
export function useOpenMedia() {
  return React.useContext(OpenMediaContext);
}

/**
 * The pictures and videos the agent sent in the conversation, from its computer (the daemon lists them,
 * "worklog.files"), asked for once `wanted`. `silent` once a computer whose crewmark is older didn't answer.
 */
function useMediaFiles(employee: Employee, wanted: boolean) {
  const { organization } = useCrewStore();
  const [files, setFiles] = React.useState<ListedFile[] | null>(null);
  const [offline, setOffline] = React.useState(false);
  const [silent, setSilent] = React.useState(false);
  React.useEffect(() => {
    if (!wanted || files !== null) return;
    const wait = setTimeout(() => setSilent(true), 10_000);
    return () => clearTimeout(wait);
  }, [wanted, files]);
  const open = useRealtime(
    organization.id,
    (push) => {
      if (!("employeeId" in push) || push.employeeId !== employee.id) return;
      if (push.type === "worklog.files") {
        setFiles((push.files ?? []).filter((f) => f.kind === "image" || f.kind === "video"));
        setOffline(false);
      } else if (push.type === "worklog.offline") setOffline(true);
    },
    () => {},
  );
  // Asked for once the push channel is open and they're wanted, and again on Refresh; the daemon answers on it.
  const ask = React.useCallback(() => {
    if (!sendRealtime(organization.id, { type: "worklog.files", employeeId: employee.id })) setOffline(true);
  }, [organization.id, employee.id]);
  React.useEffect(() => {
    if (open && wanted) sendRealtime(organization.id, { type: "worklog.files", employeeId: employee.id });
  }, [open, wanted, organization.id, employee.id]);
  return { files, offline, silent, ask };
}

/**
 * The conversation's media and its viewer, around the conversation (MC-350): a picture or video in the work opens in
 * the same viewer as the media panel's, with the box to write about it and the comments pinned to frames, and the
 * conversation's others to go through. `panel` shows the media panel beside `children`.
 */
export function ConversationMedia({
  employee,
  send,
  panel,
  onPanelClose,
  children,
}: {
  employee: Employee;
  /** Sends a message to the conversation, as the box below it does. */
  send: (body: string) => Promise<void>;
  panel: boolean;
  onPanelClose: () => void;
  children: React.ReactNode;
}) {
  // Listed once wanted: the panel is open, or one in the work was opened.
  const [opened, setOpened] = React.useState(false);
  const { files, offline, silent, ask } = useMediaFiles(employee, panel || opened);
  const [filter, setFilter] = React.useState<Filter>("all");
  // The one shown and where it was opened from: from the panel, the viewer goes through the ones it shows.
  const [shown, setShown] = React.useState<{ file: WorkFile; fromPanel: boolean } | null>(null);
  // The videos' own sizes, from their thumbnails, so the viewer's player has their shape (MC-327).
  const [sizes, setSizes] = React.useState<Record<string, Size>>({});
  const size = React.useCallback(
    (id: string, known: Size) => setSizes((all) => (all[id] ? all : { ...all, [id]: known })),
    [],
  );
  const context = React.useMemo<OpenMedia>(
    () => ({
      open: (file) => {
        setOpened(true);
        setShown({ file, fromPanel: false });
      },
      size,
    }),
    [size],
  );

  const link = useFileLink(employee);
  const panelFiles = (files ?? []).filter((f) => filter === "all" || f.kind === filter);
  let pool: ListedFile[] = shown?.fromPanel ? panelFiles : (files ?? []);
  // Till the computer has listed them (or if it doesn't list this one), the one opened shows by itself.
  if (shown && !pool.some((f) => f.id === shown.file.id)) pool = [{ ...shown.file, path: shown.file.name }];
  const slides = pool.flatMap((file) => {
    const src = link(file);
    return src && !file.problem
      ? [{ kind: file.kind === "video" ? ("video" as const) : ("image" as const), src, title: file.name, file, ...sizes[file.id] }]
      : [];
  });
  const viewing = shown ? slides.findIndex((slide) => slide.file.id === shown.file.id) : -1;

  return (
    <OpenMediaContext.Provider value={context}>
      {children}
      {panel && (
        <MediaPanel
          employee={employee}
          files={files}
          offline={offline}
          silent={silent}
          onRefresh={ask}
          filter={filter}
          onFilter={setFilter}
          onOpen={(file) => setShown({ file, fromPanel: true })}
          onSize={size}
          onClose={onPanelClose}
        />
      )}
      <MediaViewer
        slides={slides}
        index={viewing}
        onIndex={(next) => setShown(next >= 0 ? { file: slides[next].file, fromPanel: shown?.fromPanel ?? false } : null)}
        footer={(slide) => <QuoteBar key={slide.file.id} employee={employee} file={slide.file} send={send} />}
      />
    </OpenMediaContext.Provider>
  );
}

function MediaPanel({
  employee,
  files,
  offline,
  silent,
  onRefresh,
  filter,
  onFilter,
  onOpen,
  onSize,
  onClose,
}: {
  employee: Employee;
  files: ListedFile[] | null;
  offline: boolean;
  silent: boolean;
  onRefresh: () => void;
  filter: Filter;
  onFilter: (filter: Filter) => void;
  onOpen: (file: ListedFile) => void;
  onSize: (id: string, size: Size) => void;
  onClose: () => void;
}) {
  const [width, startResize] = usePanelWidth();
  const shownFiles = (files ?? []).filter((f) => filter === "all" || f.kind === filter);
  return (
    <aside
      aria-label="Media"
      style={{ "--panel-width": `${width}px` } as React.CSSProperties}
      className="fixed inset-0 z-40 flex flex-col bg-background lg:relative lg:z-auto lg:w-(--panel-width) lg:shrink-0 lg:border-l lg:border-rule"
    >
      {/* Drag the line between it and the conversation to make it wider or narrower (MC-327). */}
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize the media panel"
        onPointerDown={startResize}
        className="absolute inset-y-0 -left-1 z-10 hidden w-2 cursor-col-resize touch-none transition-colors hover:bg-primary/20 active:bg-primary/30 lg:block"
      />
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-rule px-3">
        <ImageIcon className="ml-1 size-4 text-muted-foreground" />
        <h2 className="min-w-0 truncate text-sm font-medium">Media</h2>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Refresh" title="Refresh" onClick={onRefresh}>
            <RefreshCwIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Close media" onClick={onClose}>
            <XIcon />
          </Button>
        </div>
      </header>
      <div role="group" aria-label="Show" className="flex shrink-0 gap-1.5 px-3 py-2.5">
        {FILTERS.map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => onFilter(value)}
            className={segmentClass(filter === value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">
        {files === null ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {offline
              ? `${employee.name}'s computer is offline: its media shows while it's on.`
              : silent
                ? `${employee.name}'s computer didn't answer. It may be asleep, or need a newer crewmark (0.8.7 or later).`
                : "Loading…"}
          </p>
        ) : shownFiles.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {filter === "video" ? "No videos" : filter === "image" ? "No pictures" : "Nothing"} sent in this conversation
            yet.
          </p>
        ) : (
          <Grid employee={employee} files={shownFiles} onOpen={onOpen} onSize={onSize} />
        )}
      </div>
    </aside>
  );
}

/** The files by the day they were sent, newest first, as thumbnails. */
function Grid({
  employee,
  files,
  onOpen,
  onSize,
}: {
  employee: Employee;
  files: ListedFile[];
  onOpen: (file: ListedFile) => void;
  onSize: (id: string, size: { width: number; height: number }) => void;
}) {
  const link = useFileLink(employee);
  const days: [string, ListedFile[]][] = [];
  for (const file of files) {
    const day = dayFormat.format(new Date(file.at));
    if (days.at(-1)?.[0] === day) days.at(-1)![1].push(file);
    else days.push([day, [file]]);
  }
  return (
    <div className="grid gap-4">
      {days.map(([day, inDay]) => (
        <section key={day} className="grid gap-2">
          <h3 className="text-xs text-muted-foreground" suppressHydrationWarning>
            {day}
          </h3>
          <ul className="grid grid-cols-3 gap-1.5">
            {inDay.map((file) => (
              <li key={file.id}>
                <button
                  type="button"
                  onClick={() => onOpen(file)}
                  title={file.name}
                  aria-label={file.name}
                  className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-muted"
                >
                  <Thumbnail file={file} url={link(file)} onSize={(size) => onSize(file.id, size)} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Thumbnail({
  file,
  url,
  onSize,
}: {
  file: ListedFile;
  url: string | null | undefined;
  /** A video's own size, once known, for the viewer's player. */
  onSize?: (size: { width: number; height: number }) => void;
}) {
  const [duration, setDuration] = React.useState<number | null>(null);
  if (!url || file.problem) {
    return (
      <span className="flex size-full items-center justify-center p-1 text-center text-[11px] break-all text-muted-foreground">
        {file.problem === "missing" ? "No longer there" : file.name}
      </span>
    );
  }
  if (file.kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element -- from the employee's computer, not ours to optimise
    return <img src={url} alt="" loading="lazy" className="size-full object-cover transition-transform group-hover:scale-105" />;
  }
  return (
    <>
      {/* The first frame, as a still: only its start is read. */}
      <video
        src={`${url}#t=0.1`}
        // Read with CORS, as the viewer reads it: else the browser keeps a copy without CORS headers and the viewer
        // can't play it from there (a stored video from R2 played nothing).
        crossOrigin="anonymous"
        preload="metadata"
        muted
        playsInline
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;
          setDuration(video.duration);
          if (video.videoWidth && video.videoHeight) onSize?.({ width: video.videoWidth, height: video.videoHeight });
        }}
        className="pointer-events-none size-full object-cover"
      />
      <span className="absolute inset-x-1 bottom-1 flex items-center justify-between text-[11px] font-medium text-white drop-shadow">
        <PlayIcon className="size-3.5 fill-white" />
        {duration !== null && Number.isFinite(duration) && clock(duration)}
      </span>
    </>
  );
}

function clock(seconds: number) {
  const s = Math.round(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/**
 * Under the one shown in the viewer: where it is and when it was sent, and a box to write to the agent about it, sent
 * to the conversation naming the file (MC-325). Keys typed here stay here: the viewer would take the arrows.
 */
function QuoteBar({ employee, file, send }: { employee: Employee; file: ListedFile; send: (body: string) => Promise<void> }) {
  const [comment, setComment] = React.useState("");
  const [pending, setPending] = React.useState(false);
  // Comments pinned to the video's frames (MC-324), and whether a click on the video pins one now.
  const [pins, setPins] = React.useState<FramePin[]>([]);
  const [placing, setPlacing] = React.useState(false);
  const { upload } = useImageUpload({ quiet: true });
  const said = pins.filter((pin) => pin.text.trim());

  async function quote() {
    if ((!comment.trim() && said.length === 0) || pending) return;
    setPending(true);
    setPlacing(false);
    try {
      const parts: string[] = [];
      if (said.length > 0) {
        const video = shownVideo();
        if (!video) throw new Error("No video to take the frames from");
        for (const frame of await frameShots(video, said)) {
          const name = `${file.name.replace(/\.[^.]+$/, "")} ${frameTime(frame.at).replace(":", "m")}s.png`;
          const url = await upload(new File([frame.blob], name, { type: "image/png" }));
          if (!url) throw new Error("Couldn't upload the frame");
          const notes = frame.pins.map(({ pin, n }) => `${n}. ${pin.text.trim()}`).join("\n");
          parts.push(`![${file.name} at ${frameTime(frame.at)}](${url})\n\n**At ${frameTime(frame.at)}:**\n\n${notes}`);
        }
      }
      if (comment.trim()) parts.push(comment.trim());
      await send(quoteFile(file, parts.join("\n\n")));
      setComment("");
      setPins([]);
      toast.success(`Sent to ${employee.name}`);
    } catch (error) {
      console.error(error);
      toast.error("Couldn't send it. Try again.");
    } finally {
      setPending(false);
    }
  }

  const stop = (event: React.SyntheticEvent) => event.stopPropagation();
  const video = file.kind === "video";
  const seek = (pin: FramePin) => {
    const shown = shownVideo();
    if (shown) {
      shown.pause();
      shown.currentTime = pin.at;
    }
    setPlacing(true);
  };
  // As Codex drew it (MC-350): one quiet card under the video, the pins as chips, then an add-comment icon, the box and
  // Send. On a phone, docked at the bottom, edge to edge.
  return (
    <div
      onKeyDown={stop}
      onPointerDown={stop}
      onClick={stop}
      onWheel={stop}
      className="pointer-events-auto absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl px-0 pb-[env(safe-area-inset-bottom)] sm:px-4 sm:pb-4"
    >
      <div className="grid gap-2.5 border-t border-white/10 bg-[#161616] p-3 text-white sm:rounded-lg sm:border sm:border-white/15 sm:p-3.5">
        {pins.length > 0 && (
          <div className="flex items-center gap-2">
            <ol className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto [scrollbar-width:none]">
                {pins.map((pin, i) => (
                  <li
                    key={pin.id}
                    className="flex h-8 max-w-48 shrink-0 items-center gap-1 rounded-md border border-white/25 pr-0.5 pl-2 text-[13px]"
                  >
                    <button
                      type="button"
                      onClick={() => seek(pin)}
                      title={`${frameTime(pin.at)} ${pin.text.trim()}`}
                      className="flex min-w-0 items-center gap-1.5"
                    >
                      <span className="font-medium tabular-nums">{i + 1}</span>
                      {pin.text.trim() && <span className="hidden truncate text-white/60 sm:inline">{pin.text.trim()}</span>}
                    </button>
                    <button
                      type="button"
                      aria-label={`Remove pin ${i + 1}`}
                      onClick={() => setPins((all) => all.filter((p) => p.id !== pin.id))}
                      className="flex size-7 items-center justify-center rounded text-white/50 hover:text-white"
                    >
                      <XIcon className="size-3.5" />
                    </button>
                  </li>
                ))}
              </ol>
          </div>
        )}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void quote();
          }}
          className="flex items-end gap-2"
        >
          {video && (
            // A comment on a point of the paused frame (MC-324): an icon by the box, as Alex asked.
            <button
              type="button"
              aria-pressed={placing}
              aria-label={placing ? "Done adding comments on the frame" : "Add a comment on the frame"}
              title={placing ? "Done" : "Add a comment on the frame"}
              onClick={() => {
                if (placing) return setPlacing(false);
                shownVideo()?.pause();
                setPlacing(true);
              }}
              className={
                placing
                  ? "flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-black"
                  : "flex size-10 shrink-0 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
              }
            >
              <MessageSquarePlusIcon className="size-5" strokeWidth={1.5} />
            </button>
          )}
          <Textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey && !event.metaKey && !event.nativeEvent.isComposing) {
                event.preventDefault();
                void quote();
              }
            }}
            placeholder={`Write to ${employee.name} about this…`}
            rows={1}
            className="max-h-32 min-h-10 flex-1 resize-none rounded-md border border-white/20 bg-transparent px-3 py-2 text-base text-white shadow-none placeholder:text-white/45 focus-visible:border-white/50 focus-visible:ring-0 sm:text-sm dark:bg-transparent"
          />
          <button
            type="submit"
            disabled={(!comment.trim() && said.length === 0) || pending}
            className="h-10 shrink-0 rounded-md bg-white px-4 text-sm font-medium text-black transition-opacity disabled:opacity-40"
          >
            {pending ? "Sending…" : said.length > 0 ? `Send ${said.length}` : "Send"}
          </button>
        </form>
        <p className="hidden truncate text-xs text-white/45 sm:block" suppressHydrationWarning>
          {file.path} · sent {fullDate.format(new Date(file.at))}
          {file.caption ? ` · ${file.caption}` : ""}
        </p>
      </div>
      {placing && (
        <FrameOverlay
          pins={pins}
          onAdd={(pin) => setPins((all) => [...all, pin])}
          onChange={(id, text) => setPins((all) => all.map((p) => (p.id === id ? { ...p, text } : p)))}
          onRemove={(id) => setPins((all) => all.filter((p) => p.id !== id))}
          onDone={() => setPlacing(false)}
        />
      )}
    </div>
  );
}

const WIDTH_KEY = "crewmark.media-panel-width";
const MIN_WIDTH = 280;

/** The panel's width on a computer, dragged by its edge and kept in this browser (MC-327). */
function usePanelWidth() {
  const [width, setWidth] = React.useState(() => {
    try {
      const kept = Number(window.localStorage.getItem(WIDTH_KEY));
      if (kept >= MIN_WIDTH) return kept;
    } catch {
      // No storage: the default.
    }
    return 380;
  });
  const start = (event: React.PointerEvent) => {
    event.preventDefault();
    const [x, from] = [event.clientX, width];
    const max = () => Math.max(MIN_WIDTH, window.innerWidth * 0.6);
    let last = from;
    const move = (e: PointerEvent) => {
      last = Math.round(Math.min(max(), Math.max(MIN_WIDTH, from + x - e.clientX)));
      setWidth(last);
    };
    const end = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      document.body.style.removeProperty("cursor");
      document.body.style.removeProperty("user-select");
      try {
        window.localStorage.setItem(WIDTH_KEY, String(last));
      } catch {
        // Not kept: the default next time.
      }
    };
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
  };
  return [width, start] as const;
}
