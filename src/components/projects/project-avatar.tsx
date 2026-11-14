"use client";

import { EmojiPicker } from "@/components/emoji-picker";
import { cn } from "@/lib/utils";
import { PROJECT_EMOJIS } from "@/lib/types";

/** Each size sets the circle and its emoji together. */
const SIZES = {
  /** Inside pills and pickers. */
  sm: "size-[18px] text-[10px]",
  /** Beside 14px text: the sidebar and page headers. */
  md: "size-5 text-[11px]",
  /** The picker in the new-project form. */
  lg: "size-9 text-lg",
} as const;

/** A project's avatar: its emoji on a light grey circle. */
export function ProjectAvatar({
  emoji,
  size = "md",
  className,
}: {
  emoji: string;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        // A translucent fill stays visible on both the white sheet and the grey sidebar.
        "flex shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] leading-none select-none",
        SIZES[size],
        className,
      )}
    >
      {emoji}
    </span>
  );
}

/** The avatar as a button that opens a grid of emoji to choose from. */
export function ProjectEmojiPicker({
  value,
  onChange,
  size = "md",
  className,
}: {
  value: string;
  onChange: (emoji: string) => void;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <EmojiPicker value={value} emojis={PROJECT_EMOJIS} onChange={onChange} label="Change project icon" className={className}>
      <ProjectAvatar emoji={value} size={size} />
    </EmojiPicker>
  );
}
