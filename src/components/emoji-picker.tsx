"use client";

import type * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/** An avatar as a button that opens a grid of emoji to choose from: projects' and employees'. */
export function EmojiPicker({
  value,
  emojis,
  onChange,
  label,
  className,
  children,
}: {
  value: string;
  /** A multiple of eight, to fill the grid's rows. */
  emojis: readonly string[];
  onChange: (emoji: string) => void;
  label: string;
  className?: string;
  /** The avatar showing the current emoji. */
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={label}
        className={cn(
          "rounded-full outline-none transition-shadow hover:ring-2 hover:ring-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid w-auto grid-cols-8 gap-0.5 p-1.5">
        {emojis.map((emoji) => (
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
