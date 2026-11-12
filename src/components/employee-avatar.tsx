import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Employee } from "@/lib/types";

const AVATAR_COLORS = [
  "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
];

/** A stable color per employee, so renaming doesn't change it. */
function avatarColor(id: string) {
  let hash = 0;
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

/** Each size sets the circle and its initials together, so the letters always fit. */
const SIZES = {
  /** Inline beside 12–13px text: board cards, property rows, pickers. */
  sm: { box: "size-[18px]", text: "text-[10px]", letters: 1 },
  /** Lists and cards. */
  md: { box: "size-8", text: "text-xs", letters: 2 },
  /** The employee's own page. */
  lg: { box: "size-14", text: "text-lg", letters: 2 },
} as const;

export function EmployeeAvatar({
  employee,
  size = "md",
  className,
}: {
  employee: Pick<Employee, "id" | "name">;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const { box, text, letters } = SIZES[size];
  return (
    <Avatar className={cn(box, className)}>
      <AvatarFallback className={cn("font-medium", text, avatarColor(employee.id))}>
        {employee.name.slice(0, letters).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
