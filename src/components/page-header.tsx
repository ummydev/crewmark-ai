import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function PageHeader({
  icon,
  title,
  actions,
  toolbar,
}: {
  /** A lucide icon (drawn muted at 16px) or an avatar. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  actions?: React.ReactNode;
  /** A row under the header's divider for tabs and filters. */
  toolbar?: React.ReactNode;
}) {
  return (
    <>
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-rule px-4">
        <SidebarTrigger className="-ml-1 text-muted-foreground md:hidden" />
        {icon && <span className="flex shrink-0 text-muted-foreground [&>svg]:size-4">{icon}</span>}
        <h1 className="flex min-w-0 items-center gap-1.5 text-sm font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">{actions}</div>
      </header>
      {toolbar && (
        <div className="flex shrink-0 items-center gap-1.5 overflow-x-auto px-4 pt-3 pb-1">{toolbar}</div>
      )}
    </>
  );
}

/** A row of segmented links, e.g. a project's Issues / Employees switch. */
export function SegmentedNav({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center gap-1.5">
      {children}
    </nav>
  );
}

/**
 * The pill shared by segmented links and filter toggles. The selected one is filled and darker but
 * keeps the same weight, so a row of pills never looks like it changes size.
 */
export function segmentClass(selected: boolean) {
  return cn(
    "inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border px-2.5 text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
    selected
      ? "bg-muted text-foreground"
      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
  );
}

export function SegmentCount({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground tabular-nums">{children}</span>;
}
