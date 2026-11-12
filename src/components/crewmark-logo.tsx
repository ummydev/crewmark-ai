import { cn } from "@/lib/utils";

/** The brand yellow. The c is always drawn in it; the m takes the surrounding text colour. */
export const CREWMARK_YELLOW = "#F3CE49";

/** Crewmark's mark: a lowercase "cm", the initials and the unit you measure with. */
export function CrewmarkLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="1.4 3.7 28 28"
      fill="none"
      strokeWidth={3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6 shrink-0", className)}
    >
      <path d="M11.6 13.2 A4.6 4.6 0 1 0 11.6 20.8" stroke={CREWMARK_YELLOW} />
      <path
        d="M15.6 23 V16.4 A2.7 2.7 0 0 1 21 16.4 V23 M21 16.4 A2.7 2.7 0 0 1 26.4 16.4 V23"
        stroke="currentColor"
      />
    </svg>
  );
}
