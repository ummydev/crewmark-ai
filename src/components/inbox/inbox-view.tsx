"use client";

import Link from "next/link";
import { InboxIcon } from "lucide-react";

import { useCrewStore } from "@/components/crew-store";
import { useInbox } from "@/components/inbox/inbox-provider";
import { Change, useActor } from "@/components/issues/issue-activity";
import { StatusIcon } from "@/components/issues/status-icon";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fullDate, timeAgo } from "@/lib/format";
import type { InboxItem } from "@/lib/types";
import { cn } from "@/lib/utils";

// The Inbox (MC-200), as in Linear: the issues the signed-in person follows on which someone else commented or
// changed something, latest first, each with what happened last. Opening one marks it read.

export function InboxView() {
  const { items, unread, markAllRead } = useInbox();
  return (
    <>
      <PageHeader
        icon={<InboxIcon />}
        title="Inbox"
        actions={
          unread > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllRead}>
              Mark all as read
            </Button>
          )
        }
      />
      <div className="min-h-0 flex-1 overflow-y-auto">
        {items === null ? (
          <div className="grid gap-3 p-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : items.length === 0 ? (
          <p className="m-auto max-w-sm p-10 text-center text-sm text-muted-foreground">
            Nothing yet. When someone comments on or changes an issue you follow, it shows here. You follow the issues
            you filed, are assigned or commented on, and any you subscribe to.
          </p>
        ) : (
          <ul className="flex flex-col gap-0.5 p-2">
            {items.map((item) => (
              <Row key={item.issueId} item={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

function Row({ item }: { item: InboxItem }) {
  const { issues, orgPath } = useCrewStore();
  const { markRead } = useInbox();
  const href = orgPath(`/issues/${item.key}`);
  const className =
    "flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-muted/70 focus-visible:bg-muted focus-visible:outline-none";
  const body = (
    <>
      <StatusIcon status={item.status} className="shrink-0" />
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="flex min-w-0 items-baseline gap-2">
          <span className="shrink-0 text-[13px] text-muted-foreground tabular-nums">{item.key}</span>
          <span className={cn("min-w-0 flex-1 truncate text-sm", item.unread ? "font-semibold" : "font-medium")}>
            {item.title}
          </span>
          <time
            dateTime={item.notifiedAt}
            title={fullDate.format(new Date(item.notifiedAt))}
            className="shrink-0 text-xs text-muted-foreground"
            suppressHydrationWarning
          >
            {timeAgo(item.notifiedAt)}
          </time>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <What item={item} />
          <span
            aria-label={item.unread ? "Unread" : undefined}
            className={cn("size-2 shrink-0 rounded-full", item.unread ? "bg-red-500" : "bg-transparent")}
          />
        </span>
      </span>
    </>
  );
  return (
    <li>
      {/* An issue filed since the page loaded isn't in its data yet: a full load fetches it. */}
      {issues.some((i) => i.id === item.issueId) ? (
        <Link href={href} onClick={() => markRead(item.issueId)} className={className}>
          {body}
        </Link>
      ) : (
        <a href={href} className={className}>
          {body}
        </a>
      )}
    </li>
  );
}

/** What happened last, in one grey line: "Ada: Shipped it" or "Ada moved from Todo to Done". */
function What({ item }: { item: InboxItem }) {
  const { issues } = useCrewStore();
  const issue = issues.find((i) => i.id === item.issueId);
  const latest = item.latest;
  const { avatar, name } = useActor(
    latest?.userId ?? issue?.createdByUserId ?? null,
    latest?.employeeId ?? issue?.createdByEmployeeId ?? null,
  );
  return (
    <span className="flex min-w-0 flex-1 items-center gap-1.5 text-[13px] text-muted-foreground">
      <span className="shrink-0">{avatar}</span>
      <span className="min-w-0 truncate">
        <span className="text-foreground">{name}</span>
        {latest === null ? (
          " assigned you the issue"
        ) : latest.kind === "comment" ? (
          `: ${plain(latest.body)}`
        ) : (
          <>
            {" "}
            <Change entry={latest} />
          </>
        )}
      </span>
    </span>
  );
}

/** Markdown as one plain line, for a preview. */
function plain(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "[image]")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
