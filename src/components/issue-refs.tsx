"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Extension, type Editor } from "@tiptap/react";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import type { Node as ProseMirrorNode } from "@tiptap/pm/model";
import { PreviewCard } from "@base-ui/react/preview-card";

import { useOptionalCrewStore } from "@/components/crew-store";
import { EmployeeAvatar } from "@/components/employee-avatar";
import { PriorityBadge } from "@/components/issues/priority-badge";
import { StatusIcon } from "@/components/issues/status-icon";
import { ProjectAvatar } from "@/components/projects/project-avatar";
import { UserAvatar } from "@/components/user-avatar";
import { issueRefs } from "@/lib/issue-refs";
import { ISSUE_STATUSES, type Issue } from "@/lib/types";

// Issue keys in rich text become links to the issue, with a preview card on hover (MC-185): in direct messages,
// comments and descriptions, wherever an employee writes "MC-181". Only keys of issues the organization has, and
// never inside code or an existing link.

interface IssueRefsStorage {
  /** The issue's page, or undefined when the organization has no such issue. Set with setIssueLinks. */
  href: (key: string) => string | undefined;
}

declare module "@tiptap/core" {
  interface Storage {
    issueRefs: IssueRefsStorage;
  }
  interface Commands<ReturnType> {
    issueRefs: {
      /** Tells the extension which keys are issues, and marks them again. */
      setIssueLinks: (href: IssueRefsStorage["href"]) => ReturnType;
    };
  }
}

const key = new PluginKey<DecorationSet>("issueRefs");

function decorate(doc: ProseMirrorNode, storage: IssueRefsStorage) {
  const decorations: Decoration[] = [];
  doc.descendants((node, pos) => {
    if (node.type.spec.code) return false;
    if (!node.isText || !node.text) return true;
    if (node.marks.some((mark) => mark.type.spec.code || mark.type.name === "link")) return false;
    for (const ref of issueRefs(node.text)) {
      const href = storage.href(ref.key);
      if (!href) continue;
      decorations.push(
        Decoration.inline(pos + ref.from, pos + ref.to, {
          nodeName: "a",
          href,
          class: "issue-ref",
          "data-issue-key": ref.key,
        }),
      );
    }
    return false;
  });
  return DecorationSet.create(doc, decorations);
}

/** The editor extension that marks issue keys, with the organization's issues in its storage. */
export const IssueRefs = Extension.create<unknown, IssueRefsStorage>({
  name: "issueRefs",
  addStorage: () => ({ href: () => undefined }),
  addCommands() {
    return {
      setIssueLinks:
        (href) =>
        ({ tr, dispatch }) => {
          this.storage.href = href;
          if (dispatch) tr.setMeta(key, true).setMeta("addToHistory", false);
          return true;
        },
    };
  },
  addProseMirrorPlugins() {
    const storage = this.storage;
    return [
      new Plugin<DecorationSet>({
        key,
        state: {
          init: (_, state) => decorate(state.doc, storage),
          // Again when the text changes, or when the organization's issues do (setIssueLinks).
          apply: (tr, old) => (tr.docChanged || tr.getMeta(key) ? decorate(tr.doc, storage) : old),
        },
        props: { decorations: (state) => key.getState(state) },
      }),
    ];
  },
});

const OPEN_DELAY = 350;
const CLOSE_DELAY = 150;

/**
 * Issue links for an editor made with the IssueRefs extension: the handlers for its container and the preview card to
 * render beside it. In an editor someone is writing in, a plain click places the caret and ⌘/Ctrl-click opens the
 * issue.
 */
export function useIssueRefs(editor: Editor | null, { editable }: { editable: boolean }) {
  const store = useOptionalCrewStore();
  const router = useRouter();
  const byKey = React.useMemo(() => new Map(store?.issues.map((issue) => [issue.key, issue])), [store?.issues]);
  const orgPath = store?.orgPath;
  // The extension learns which keys are issues, and marks them again whenever the issues change.
  React.useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.commands.setIssueLinks((k) => (orgPath && byKey.has(k) ? orgPath(`/issues/${k}`) : undefined));
  }, [editor, byKey, orgPath]);

  const [shown, setShown] = React.useState<{ anchor: HTMLElement; issue: Issue } | null>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const later = (fn: () => void, ms: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(fn, ms);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);

  const refAt = (target: EventTarget | null) =>
    target instanceof Element ? target.closest<HTMLAnchorElement>("a[data-issue-key]") : null;

  const show = (anchor: HTMLAnchorElement, delay: number) => {
    const issue = byKey.get(anchor.dataset.issueKey ?? "");
    if (!issue) return;
    later(() => setShown({ anchor, issue }), delay);
  };

  const handlers = {
    onClick(event: React.MouseEvent) {
      const anchor = refAt(event.target);
      if (!anchor || event.button !== 0) return;
      const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (editable && !modified) return;
      event.preventDefault();
      clearTimeout(timer.current);
      setShown(null);
      // A new tab only when asked for one outside an editor; in an editor the modifier is how you follow the link.
      if (!editable && modified) window.open(anchor.href, "_blank", "noopener");
      else router.push(anchor.getAttribute("href")!);
    },
    onMouseOver(event: React.MouseEvent) {
      const anchor = refAt(event.target);
      if (anchor) show(anchor, shown?.anchor === anchor ? 0 : OPEN_DELAY);
    },
    onMouseOut(event: React.MouseEvent) {
      const anchor = refAt(event.target);
      if (anchor && !anchor.contains(event.relatedTarget as Node | null)) later(() => setShown(null), CLOSE_DELAY);
    },
    onFocus(event: React.FocusEvent) {
      const anchor = refAt(event.target);
      if (anchor) show(anchor, 0);
    },
    onBlur(event: React.FocusEvent) {
      if (refAt(event.target)) later(() => setShown(null), CLOSE_DELAY);
    },
  };

  const card = shown && (
    <PreviewCard.Root open onOpenChange={(open) => !open && setShown(null)}>
      <PreviewCard.Portal>
        <PreviewCard.Positioner anchor={shown.anchor} side="bottom" align="start" sideOffset={6} className="z-50">
          <PreviewCard.Popup
            onMouseEnter={() => clearTimeout(timer.current)}
            onMouseLeave={() => later(() => setShown(null), CLOSE_DELAY)}
            className="w-80 rounded-lg bg-popover p-3 text-popover-foreground shadow-float ring-1 ring-foreground/10 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
          >
            <IssuePreview issue={shown.issue} href={shown.anchor.getAttribute("href")!} />
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );

  return { handlers, card };
}

/** What the card shows: the issue's key and status, its title, then priority, assignee and project. */
function IssuePreview({ issue, href }: { issue: Issue; href: string }) {
  const store = useOptionalCrewStore();
  const router = useRouter();
  if (!store) return null;
  const employee = store.employees.find((e) => e.id === issue.assigneeId);
  const user = employee ? undefined : store.users.find((u) => u.id === issue.assigneeId);
  const project = store.projects.find((p) => p.id === issue.projectId);
  return (
    <div className="grid gap-2 text-sm">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <StatusIcon status={issue.status} />
        <span className="tabular-nums">{issue.key}</span>
        <span aria-hidden>·</span>
        <span>{ISSUE_STATUSES.find((s) => s.value === issue.status)?.label}</span>
      </p>
      <a
        href={href}
        onClick={(event) => {
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          router.push(href);
        }}
        className="line-clamp-2 leading-snug font-medium hover:underline"
      >
        {issue.title || "Untitled"}
      </a>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
        {issue.priority !== "none" && <PriorityBadge priority={issue.priority} />}
        {employee ? (
          <span className="flex min-w-0 items-center gap-1.5">
            <EmployeeAvatar employee={employee} size="sm" />
            <span className="truncate">{employee.name}</span>
          </span>
        ) : user ? (
          <span className="flex min-w-0 items-center gap-1.5">
            <UserAvatar user={user} />
            <span className="truncate">{user.username}</span>
          </span>
        ) : (
          <span className="text-muted-foreground">Unassigned</span>
        )}
        {project && (
          <span className="flex min-w-0 items-center gap-1.5 text-muted-foreground">
            <ProjectAvatar emoji={project.emoji} size="sm" />
            <span className="truncate">{project.name}</span>
          </span>
        )}
      </div>
    </div>
  );
}
