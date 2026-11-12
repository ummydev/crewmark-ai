"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Change project icon"
        className={cn(
          "rounded-full outline-none transition-shadow hover:ring-2 hover:ring-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
      >
        <ProjectAvatar emoji={value} size={size} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid w-auto grid-cols-8 gap-0.5 p-1.5">
        {PROJECT_EMOJIS.map((emoji) => (
          <DropdownMenuItem
            key={emoji}
            aria-label={emoji}
            onClick={() => onChange(emoji)}
            className={cn("size-8 justify-center p-0 text-lg leading-none", emoji === value && "bg-accent")}
          >
            {emoji}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
