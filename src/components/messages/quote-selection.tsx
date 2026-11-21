"use client";

import * as React from "react";
import { ReplyIcon } from "lucide-react";

// Answering part of a message (MC-298): select words in the conversation and a Reply button shows by them, as in the
// Claude app; it puts them in the box below as a quote, to write the answer under. Messages say they can be quoted
// with data-quotable.

/** Where the button goes for the selection: over it, or under it on a phone, where the phone's own menu is over it. */
interface Spot {
  text: string;
  left: number;
  top: number;
}

const BUTTON_HEIGHT = 32;
const GAP = 8;

/** The words selected in messages, and where the button goes; null when nothing is selected in them. */
function selectedSpot(): Spot | null {
  const selection = document.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return null;
  const inMessage = (node: Node | null) =>
    !!(node instanceof Element ? node : node?.parentElement)?.closest("[data-quotable]");
  if (!inMessage(selection.anchorNode) || !inMessage(selection.focusNode)) return null;
  const text = selection.toString().trim();
  if (!text) return null;
  const rect = selection.getRangeAt(0).getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return null;
  const touch = window.matchMedia("(pointer: coarse)").matches;
  const above = rect.top - BUTTON_HEIGHT - GAP;
  const top = !touch && above > GAP ? above : Math.min(rect.bottom + GAP, window.innerHeight - BUTTON_HEIGHT - GAP);
  // Kept on screen when the words are at its edge.
  const left = Math.min(Math.max(rect.left + rect.width / 2, 60), window.innerWidth - 60);
  return { text, left, top };
}

export function QuoteSelection({ onReply }: { onReply: (text: string) => void }) {
  const [spot, setSpot] = React.useState<Spot | null>(null);

  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setSpot(selectedSpot()));
    };
    document.addEventListener("selectionchange", update);
    // The selection moves with the conversation as it scrolls, and the button with it.
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("selectionchange", update);
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!spot) return null;
  return (
    <button
      type="button"
      // Pressing it mustn't clear the selection before the click.
      onPointerDown={(event) => event.preventDefault()}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => {
        onReply(spot.text);
        document.getSelection()?.removeAllRanges();
        setSpot(null);
      }}
      style={{ left: spot.left, top: spot.top }}
      className="fixed z-50 flex h-8 -translate-x-1/2 items-center gap-1.5 rounded-full border bg-background px-3 text-[13px] font-medium shadow-md transition-colors hover:bg-muted"
    >
      <ReplyIcon className="size-3.5" aria-hidden />
      Reply
    </button>
  );
}
