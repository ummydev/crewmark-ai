import { cn } from "@/lib/utils";
import { ISSUE_PRIORITIES, type IssuePriority } from "@/lib/types";

// Priority is data, so it gets colour: muted, low-saturation tints that step from brick (urgent)
// through clay and ochre to slate (low). Each ink is at least 4.5:1 on its tint.
const TONES: Record<IssuePriority, string> = {
  urgent: "bg-[#fbeae7] text-[#b2443a] dark:bg-[#3b1d1a] dark:text-[#f1a195]",
  high: "bg-[#fbefe3] text-[#9a5220] dark:bg-[#3a2616] dark:text-[#f0b384]",
  medium: "bg-[#f8f1dc] text-[#7d5f10] dark:bg-[#362c12] dark:text-[#e3c46d]",
  low: "bg-[#e9eff5] text-[#4f6b8a] dark:bg-[#1d2633] dark:text-[#9db6d3]",
  none: "bg-[#f0f0f0] text-[#666666] dark:bg-[#262626] dark:text-[#a3a3a3]",
};

export function PriorityBadge({ priority, className }: { priority: IssuePriority; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-5 shrink-0 items-center rounded-[5px] px-1.5 text-xs font-medium whitespace-nowrap",
        TONES[priority],
        className,
      )}
    >
      {ISSUE_PRIORITIES.find((p) => p.value === priority)?.label}
    </span>
  );
}
