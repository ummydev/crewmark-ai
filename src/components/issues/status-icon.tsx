import { cn } from "@/lib/utils";
import type { IssueStatus } from "@/lib/types";

// Linear-style status glyphs: the circle fills up as an issue moves along the board. "Needs action" (MC-263) breaks the
// pattern on purpose: a yellow warning sign, because a person has to do something before it can go on.
// Status is data, so this is one of the few places colour is used.

const COLORS: Record<IssueStatus, string> = {
  backlog: "#9ca3af",
  todo: "#8b8b8b",
  in_progress: "#d97706",
  needs_action: "#eab308",
  done: "#2563eb",
};

export function StatusIcon({ status, className }: { status: IssueStatus; className?: string }) {
  const color = COLORS[status];
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden className={cn("size-3.5 shrink-0", className)}>
      {status === "needs_action" ? (
        <>
          <path
            d="M6.13 1.5a1 1 0 0 1 1.74 0l5.5 9.75a1 1 0 0 1-.87 1.5H1.5a1 1 0 0 1-.87-1.5Z"
            fill={color}
          />
          <path d="M7 4.9v3.2" stroke="#422006" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="7" cy="10.2" r="0.8" fill="#422006" />
        </>
      ) : status === "done" ? (
        <>
          <circle cx="7" cy="7" r="6.25" fill={color} />
          <path d="M4.5 7.2 6.2 8.8 9.5 5.4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <circle
            cx="7"
            cy="7"
            r="5.75"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray={status === "backlog" ? "1.6 1.8" : undefined}
          />
          {status === "in_progress" && <path d="M7 7V3.5a3.5 3.5 0 0 1 0 7Z" fill={color} />}
        </>
      )}
    </svg>
  );
}
