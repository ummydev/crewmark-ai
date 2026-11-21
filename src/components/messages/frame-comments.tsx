"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";

// Comments pinned to a video's frames (MC-324), as in Figma: pause, click "+ Comment", click anywhere on the picture
// and say what to change there; a frame can have several, and so can several moments of the video. Sent, each frame
// goes as a picture with its numbered pins drawn on it, with the comments listed under it by number, so the agent
// sees exactly where.

export interface FramePin {
  id: string;
  /** Seconds into the video. */
  at: number;
  /** Where on the frame, from 0 to 1 across and down. */
  x: number;
  y: number;
  text: string;
}

/** The video the viewer shows now. */
export function shownVideo() {
  return document.querySelector<HTMLVideoElement>(".yarl__slide_current video");
}

/** "0:12.4" */
export function frameTime(seconds: number) {
  const tenths = Math.round(seconds * 10);
  const s = Math.floor(tenths / 10);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}.${tenths % 10}`;
}

/** The same frame: pins within a twentieth of a second of each other are on one picture. */
const sameFrame = (a: number, b: number) => Math.abs(a - b) < 0.05;

/** Where the video's picture is on screen, inside its element (the element letterboxes it). */
function pictureRect(video: HTMLVideoElement) {
  const box = video.getBoundingClientRect();
  const ratio = video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : box.width / box.height;
  let width = box.width;
  let height = width / ratio;
  if (height > box.height) {
    height = box.height;
    width = height * ratio;
  }
  return { left: box.left + (box.width - width) / 2, top: box.top + (box.height - height) / 2, width, height };
}

/**
 * Over the shown video while placing: a click pins a comment there, at the moment it's paused on, and asks for its
 * words. The pins of that frame show, numbered as in the list.
 */
export function FrameOverlay({
  pins,
  onAdd,
  onChange,
  onRemove,
  onDone,
}: {
  pins: FramePin[];
  onAdd: (pin: FramePin) => void;
  onChange: (id: string, text: string) => void;
  onRemove: (id: string) => void;
  onDone: () => void;
}) {
  const [rect, setRect] = React.useState<ReturnType<typeof pictureRect> | null>(null);
  const [at, setAt] = React.useState(0);
  const [editing, setEditing] = React.useState<string | null>(null);
  React.useEffect(() => {
    let frame = 0;
    const follow = () => {
      const video = shownVideo();
      if (video) {
        setRect(pictureRect(video));
        setAt(video.currentTime);
      }
      frame = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!rect) return null;
  const numbered = pins.map((pin, i) => ({ pin, n: i + 1 })).filter(({ pin }) => sameFrame(pin.at, at));
  return createPortal(
    <div
      role="application"
      aria-label="Click the video to pin a comment"
      onPointerDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === "Escape") onDone();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const box = event.currentTarget.getBoundingClientRect();
        const pin = {
          id: crypto.randomUUID(),
          at,
          x: (event.clientX - box.left) / box.width,
          y: (event.clientY - box.top) / box.height,
          text: "",
        };
        onAdd(pin);
        setEditing(pin.id);
      }}
      style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
      className="fixed z-[10001] cursor-crosshair outline-2 -outline-offset-2 outline-white/60 outline-dashed"
    >
      {numbered.map(({ pin, n }) => (
        <div key={pin.id} style={{ left: `${pin.x * 100}%`, top: `${pin.y * 100}%` }} className="absolute">
          <button
            type="button"
            onClick={() => setEditing(pin.id)}
            className="flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-rose-500 text-xs font-semibold text-white shadow-lg"
          >
            {n}
          </button>
          {editing === pin.id && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setEditing(null);
              }}
              className={`absolute top-3 flex w-64 items-center gap-1 rounded-lg bg-white p-1.5 shadow-xl ${pin.x > 0.6 ? "right-3" : "left-3"}`}
            >
              <input
                autoFocus
                value={pin.text}
                onChange={(event) => onChange(pin.id, event.target.value)}
                onBlur={() => setEditing((shown) => (shown === pin.id ? null : shown))}
                placeholder="What to change here"
                className="min-w-0 flex-1 bg-transparent px-1.5 py-1 text-sm text-black outline-none"
              />
              <button
                type="button"
                aria-label="Remove"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onRemove(pin.id);
                  setEditing(null);
                }}
                className="rounded p-1 text-neutral-500 hover:bg-neutral-100"
              >
                <XIcon className="size-3.5" />
              </button>
            </form>
          )}
        </div>
      ))}
    </div>,
    document.body,
  );
}

/**
 * Each frame with pins as a PNG, its pins drawn on it numbered as in the list: the video's picture at its own size,
 * read from the shown video (which the Worker lets a page draw, MC-324). The video ends where it was.
 */
export async function frameShots(video: HTMLVideoElement, pins: FramePin[]) {
  const was = video.currentTime;
  const frames: { at: number; blob: Blob; pins: { pin: FramePin; n: number }[] }[] = [];
  const numbered = pins.map((pin, i) => ({ pin, n: i + 1 }));
  for (const { pin } of numbered) {
    if (frames.some((frame) => sameFrame(frame.at, pin.at))) continue;
    const onFrame = numbered.filter((p) => sameFrame(p.pin.at, pin.at));
    await seek(video, pin.at);
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d")!;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const radius = Math.max(14, Math.round(canvas.width / 60));
    for (const { pin: p, n } of onFrame) {
      const [x, y] = [p.x * canvas.width, p.y * canvas.height];
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = "#f43f5e";
      context.fill();
      context.lineWidth = Math.max(2, radius / 6);
      context.strokeStyle = "#fff";
      context.stroke();
      context.fillStyle = "#fff";
      context.font = `600 ${Math.round(radius * 1.1)}px system-ui, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(String(n), x, y + 1);
    }
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("Couldn't take the frame");
    frames.push({ at: pin.at, blob, pins: onFrame });
  }
  await seek(video, was);
  return frames.sort((a, b) => a.at - b.at);
}

function seek(video: HTMLVideoElement, to: number) {
  return new Promise<void>((resolve) => {
    if (Math.abs(video.currentTime - to) < 0.001 && video.readyState >= 2) return resolve();
    const done = () => {
      video.removeEventListener("seeked", done);
      resolve();
    };
    video.addEventListener("seeked", done);
    video.currentTime = to;
  });
}
