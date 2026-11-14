"use client";

import { EmojiPicker } from "@/components/emoji-picker";
import { cn } from "@/lib/utils";
import { EMPLOYEE_EMOJIS, type Employee } from "@/lib/types";

/** Each size sets the circle and its emoji together. */
const SIZES = {
  /** Inline beside 12–13px text: board cards, property rows, pickers. */
  sm: "size-[18px] text-[11px]",
  /** Beside a 14px header title. */
  title: "size-6 text-[14px]",
  /** Lists, cards and messages. */
  md: "size-8 text-[17px]",
  /** The employee's own page. */
  lg: "size-14 text-[30px]",
} as const;

/** An employee's avatar: its emoji on a light grey circle, like a project's. Its name is always written beside it. */
export function EmployeeAvatar({
  employee,
  size = "md",
  className,
}: {
  employee: Pick<Employee, "emoji">;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        // A translucent fill stays visible on the white sheet, the grey sidebar and a selected row alike.
        "flex shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] leading-none select-none",
        SIZES[size],
        className,
      )}
    >
      {employee.emoji}
    </span>
  );
}

/** The avatar as a button that opens a grid of emoji to choose from, on the employee's page. */
export function EmployeeEmojiPicker({
  employee,
  onChange,
  size = "lg",
}: {
  employee: Pick<Employee, "emoji" | "name">;
  onChange: (emoji: string) => void;
  size?: keyof typeof SIZES;
}) {
  return (
    <EmojiPicker
      value={employee.emoji}
      emojis={EMPLOYEE_EMOJIS}
      onChange={onChange}
      label={`Change ${employee.name || "the employee"}'s avatar`}
    >
      <EmployeeAvatar employee={employee} size={size} />
    </EmojiPicker>
  );
}
