"use client";

import * as React from "react";
import { EditorContent, Extension, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import { Markdown, MarkdownManager } from "@tiptap/markdown";
import { getSchema, type KeyboardShortcutCommand } from "@tiptap/core";
import { DOMSerializer } from "@tiptap/pm/model";
import { Placeholder } from "@tiptap/extensions";
import {
  BoldIcon,
  CodeIcon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  QuoteIcon,
  SquareCodeIcon,
  StrikethroughIcon,
  type LucideIcon,
} from "lucide-react";

import { useOptionalCrewStore } from "@/components/crew-store";
import { IssueRefs, useIssueRefs } from "@/components/issue-refs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { issueRefs } from "@/lib/issue-refs";
import { mentionsIn } from "@/lib/mentions";
import { cn } from "@/lib/utils";

/**
 * Markdown tables (MC-270), shown and kept: without them a table an agent wrote showed as nothing, and editing the
 * description it was in dropped it.
 */
const TABLES = [Table.configure({ resizable: false }), TableRow, TableHeader, TableCell];

/** Uploads an image and returns its link, or null when it couldn't (and has said why). */
export type UploadImage = (file: File) => Promise<string | null>;

/** Lets a form put images in, e.g. ones pasted while its title had the focus. */
export interface MarkdownEditorHandle {
  insertImages: (files: File[]) => void;
  /** Puts the cursor at the end, e.g. after a click beside the writing area. */
  focus: () => void;
  /** Adds the words as a quote at the end, with the cursor on a new line under it to answer them (MC-298). */
  quote: (text: string) => void;
}

/** The image files in a paste or a drop. */
export function imageFiles(data: DataTransfer | null) {
  return Array.from(data?.files ?? []).filter((file) => file.type.startsWith("image/"));
}

/** Uploads the images one by one, putting each in at the cursor once it's up. */
async function insertImages(editor: Editor, files: File[], upload: UploadImage) {
  for (const file of files) {
    const src = await upload(file);
    if (!src || editor.isDestroyed) continue;
    editor.chain().focus().insertContent({ type: "image", attrs: { src, alt: file.name } }).run();
  }
}

/**
 * WYSIWYG editor that reads and writes markdown. Typing markdown syntax (`## `, `- `, `**bold**`, …)
 * converts it inline. `value` is only the initial content — remount with a `key` to load another document.
 * With `uploadImage`, images pasted or dropped in are uploaded and shown. With `onImages`, they go to it instead, e.g.
 * for a chat box that shows them above the text (MC-271).
 */
export function MarkdownEditor({
  value,
  onChange,
  onSubmit,
  enterSends = false,
  uploadImage,
  onImages,
  ref,
  placeholder = "Write something…",
  toolbar = true,
  className,
  contentClassName = "min-h-40 py-2 [&_.tiptap]:min-h-36",
}: {
  value: string;
  onChange: (markdown: string) => void;
  /** Called on ⌘/Ctrl+Enter, e.g. to post a comment; on Enter with `enterSends`. */
  onSubmit?: () => void;
  /**
   * A chat box's keys (MC-295): Enter sends, on a computer and a phone alike, and ⌘/Ctrl+Enter starts a new line as
   * Enter otherwise would. An Enter that picks the words in an input method (pinyin) never sends.
   */
  enterSends?: boolean;
  uploadImage?: UploadImage;
  onImages?: (files: File[]) => void;
  ref?: React.Ref<MarkdownEditorHandle>;
  placeholder?: string;
  toolbar?: boolean;
  className?: string;
  /** Sizes the writing area. */
  contentClassName?: string;
}) {
  // The editor is made once, so the shortcut calls the latest onSubmit through a ref.
  const submit = React.useRef(onSubmit);
  React.useEffect(() => {
    submit.current = onSubmit;
  });
  // When an input method last finished putting words in: Safari ends the composition before the Enter that ended it
  // gets here, so an Enter right after one is the input method's.
  const composedAt = React.useRef(0);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown,
      Image,
      ...TABLES,
      IssueRefs,
      Placeholder.configure({ placeholder }),
      Extension.create({
        name: "submitShortcut",
        // Before the lists', code blocks' and line breaks' own Enter and ⌘/Ctrl+Enter.
        priority: 1000,
        addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
          if (!enterSends) {
            return {
              "Mod-Enter": () => {
                if (!submit.current) return false;
                submit.current();
                return true;
              },
            };
          }
          return {
            Enter: ({ editor }) => {
              if (!submit.current) return false;
              // Choosing words in an input method: the editor puts them in, nothing is sent.
              if (editor.view.composing || Date.now() - composedAt.current < 100) return true;
              submit.current();
              return true;
            },
            // What Enter does anywhere else: a new line in code, a new item in a list, else a new paragraph.
            "Mod-Enter": ({ editor }) =>
              editor.commands.first(({ commands }) => [
                () => commands.newlineInCode(),
                () => commands.splitListItem("listItem"),
                () => commands.createParagraphNear(),
                () => commands.liftEmptyBlock(),
                () => commands.splitBlock(),
              ]),
          };
        },
      }),
    ],
    content: value,
    contentType: "markdown",
    editorProps: {
      handleDOMEvents: {
        compositionend: () => {
          composedAt.current = Date.now();
          return false;
        },
      },
    },
    // Avoid an SSR hydration mismatch: the editor only renders on the client.
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getMarkdown()),
  });
  const refs = useIssueRefs(editor, { editable: true });

  React.useImperativeHandle(
    ref,
    () => ({
      insertImages: (files) => {
        if (!editor || !uploadImage) return;
        editor.commands.focus("end");
        void insertImages(editor, files, uploadImage);
      },
      focus: () => editor?.commands.focus("end"),
      quote: (text) => {
        const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
        if (!editor || lines.length === 0) return;
        const quote = [
          { type: "blockquote", content: lines.map((line) => ({ type: "paragraph", content: [{ type: "text", text: line }] })) },
          { type: "paragraph" },
        ];
        if (editor.isEmpty) editor.commands.setContent(quote, { emitUpdate: true });
        else editor.commands.insertContentAt(editor.state.doc.content.size, quote);
        editor.commands.focus("end");
      },
    }),
    [editor, uploadImage],
  );

  // Images are caught on the way down, before the editor's own paste and drop handling sees them.
  function catchImages(event: React.SyntheticEvent, data: DataTransfer | null, at?: { left: number; top: number }) {
    const files = imageFiles(data);
    if (files.length > 0 && onImages) {
      event.preventDefault();
      event.stopPropagation();
      onImages(files);
      return;
    }
    if (!editor || !uploadImage || files.length === 0) return;
    event.preventDefault();
    event.stopPropagation();
    const pos = at && editor.view.posAtCoords(at)?.pos;
    if (pos !== undefined) editor.commands.setTextSelection(pos);
    void insertImages(editor, files, uploadImage);
  }

  return (
    <div className={cn("group/editor", className)}>
      {/* The editor mounts after hydration; reserve the toolbar's height so the layout doesn't jump. */}
      {toolbar && (editor ? <Toolbar editor={editor} /> : <div className="h-7" />)}
      <EditorContent
        editor={editor}
        className={contentClassName}
        onPasteCapture={(event) => catchImages(event, event.clipboardData)}
        onDropCapture={(event) => catchImages(event, event.dataTransfer, { left: event.clientX, top: event.clientY })}
        {...refs.handlers}
      />
      {refs.card}
    </div>
  );
}

/** What read-only Markdown is made of: the same nodes and marks as the editor's. */
const VIEW_EXTENSIONS = [StarterKit, Markdown, Image, ...TABLES, IssueRefs];

/** Markdown shown read-only, styled like the editor, e.g. a comment. */
export function MarkdownView({ value, className }: { value: string; className?: string }) {
  const editor = useEditor({
    extensions: VIEW_EXTENSIONS,
    content: value,
    contentType: "markdown",
    editable: false,
    immediatelyRender: false,
  });
  const refs = useIssueRefs(editor, { editable: false });
  return (
    <>
      <EditorContent editor={editor} className={className} {...refs.handlers} />
      {refs.card}
    </>
  );
}

interface ToolbarAction {
  label: string;
  icon: LucideIcon;
  isActive: (editor: Editor) => boolean;
  run: (editor: Editor) => void;
}

const TOOLBAR_GROUPS: ToolbarAction[][] = [
  [
    {
      label: "Heading 2",
      icon: Heading2Icon,
      isActive: (e) => e.isActive("heading", { level: 2 }),
      run: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Heading 3",
      icon: Heading3Icon,
      isActive: (e) => e.isActive("heading", { level: 3 }),
      run: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ],
  [
    {
      label: "Bold",
      icon: BoldIcon,
      isActive: (e) => e.isActive("bold"),
      run: (e) => e.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: ItalicIcon,
      isActive: (e) => e.isActive("italic"),
      run: (e) => e.chain().focus().toggleItalic().run(),
    },
    {
      label: "Strikethrough",
      icon: StrikethroughIcon,
      isActive: (e) => e.isActive("strike"),
      run: (e) => e.chain().focus().toggleStrike().run(),
    },
    {
      label: "Inline code",
      icon: CodeIcon,
      isActive: (e) => e.isActive("code"),
      run: (e) => e.chain().focus().toggleCode().run(),
    },
  ],
  [
    {
      label: "Bullet list",
      icon: ListIcon,
      isActive: (e) => e.isActive("bulletList"),
      run: (e) => e.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Numbered list",
      icon: ListOrderedIcon,
      isActive: (e) => e.isActive("orderedList"),
      run: (e) => e.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Quote",
      icon: QuoteIcon,
      isActive: (e) => e.isActive("blockquote"),
      run: (e) => e.chain().focus().toggleBlockquote().run(),
    },
    {
      label: "Code block",
      icon: SquareCodeIcon,
      isActive: (e) => e.isActive("codeBlock"),
      run: (e) => e.chain().focus().toggleCodeBlock().run(),
    },
  ],
];

const ALL_ACTIONS = TOOLBAR_GROUPS.flat();

function Toolbar({ editor }: { editor: Editor }) {
  // Re-render the toolbar only when an action's active state changes.
  const active = useEditorState({
    editor,
    selector: ({ editor }) => ALL_ACTIONS.map((action) => action.isActive(editor)),
  });

  return (
    // Quiet until the editor is in use, so the description reads as a document.
    <div className="-ml-1.5 flex h-7 flex-wrap items-center gap-0.5 opacity-50 transition-opacity group-focus-within/editor:opacity-100 hover:opacity-100">
      {TOOLBAR_GROUPS.map((group, groupIndex) => (
        <div key={groupIndex} className="flex items-center gap-0.5">
          {groupIndex > 0 && (
            <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />
          )}
          {group.map((action) => {
            const isActive = active[ALL_ACTIONS.indexOf(action)];
            return (
              <Button
                key={action.label}
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={action.label}
                aria-pressed={isActive}
                title={action.label}
                className={cn(isActive && "bg-muted text-foreground")}
                onClick={() => action.run(editor)}
              >
                <action.icon />
              </Button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

let renderer: { manager: MarkdownManager; serializer: DOMSerializer; schema: ReturnType<typeof getSchema> } | null = null;

/**
 * Markdown as HTML, the way MarkdownView's editor shows it (the same parser, schema and output, issue keys as links)
 * but without an editor: built in the same render, so a long conversation shows at once rather than message by
 * message, and far cheaper than an editor per message.
 */
function markdownHTML(
  markdown: string,
  href: (key: string) => string | undefined,
  files = false,
  people: { employees: { id: string; name: string }[]; href: (id: string) => string } | null = null,
) {
  renderer ??= (() => {
    const schema = getSchema(VIEW_EXTENSIONS);
    return { manager: new MarkdownManager({ extensions: VIEW_EXTENSIONS }), serializer: DOMSerializer.fromSchema(schema), schema };
  })();
  const doc = renderer.schema.nodeFromJSON(renderer.manager.parse(markdown));
  const root = document.createElement("div");
  root.append(renderer.serializer.serializeFragment(doc.content, { document }));
  // Issue keys become links (MC-185), as the IssueRefs extension marks them: not in code or in a link already.
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.parentElement?.closest("code, pre, a") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const texts: Text[] = [];
  while (walker.nextNode()) texts.push(walker.currentNode as Text);
  for (const text of texts) {
    // Issue keys, and "@" and an employee's name, which opens the conversation with it (MC-411).
    const links: { from: number; to: number; href: string; className: string; data: [string, string] }[] = [
      ...issueRefs(text.data)
        .filter((ref) => href(ref.key))
        .map((ref) => ({ ...ref, href: href(ref.key)!, className: "issue-ref", data: ["issueKey", ref.key] as [string, string] })),
      ...(people
        ? mentionsIn(text.data, people.employees).map((m) => ({
            ...m,
            href: people.href(m.id),
            className: "mention",
            data: ["employeeId", m.id] as [string, string],
          }))
        : []),
    ].sort((a, b) => a.from - b.from);
    const kept = links.filter((link, i) => i === 0 || link.from >= links[i - 1].to);
    for (const ref of kept.reverse()) {
      const tail = text.splitText(ref.from);
      tail.splitText(ref.to - ref.from);
      const link = document.createElement("a");
      link.className = ref.className;
      link.setAttribute("href", ref.href);
      link.dataset[ref.data[0]] = ref.data[1];
      tail.replaceWith(link);
      link.append(tail);
    }
  }
  // File paths an agent names (MC-315): `docs/plan.md` in code, or a link to a relative path, open the file.
  if (files) {
    for (const code of root.querySelectorAll("code")) {
      if (code.closest("pre, a")) continue;
      const path = filePath(code.textContent ?? "");
      if (!path) continue;
      code.classList.add("file-ref");
      code.dataset.filePath = path;
    }
    for (const link of root.querySelectorAll("a[href]")) {
      const target = link.getAttribute("href") ?? "";
      if (/^[a-z][a-z0-9+.-]*:|^\/\/|^#|^\/org\//i.test(target)) continue;
      const path = filePath(decodeURI(target));
      if (!path) continue;
      link.classList.add("file-ref");
      (link as HTMLElement).dataset.filePath = path;
    }
  }
  return root.innerHTML;
}

/**
 * The file a piece of text names, when it looks like a path: "docs/plan.md", "src/app.tsx:42" (the line left out),
 * "~/notes/todo.md", "README.md"; not "1.5", "v0.8.7", "e.g." or words. Null when it doesn't.
 */
export function filePath(text: string) {
  const trimmed = text.trim().replace(/:\d+(?::\d+)?$/, "");
  if (!trimmed || trimmed.length > 300 || /\s/.test(trimmed) || /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)) return null;
  const name = trimmed.split("/").at(-1) ?? "";
  const extension = /\.([a-z][a-z0-9]{0,7})$/i.exec(name)?.[1];
  if (trimmed.includes("/")) {
    if (!name || trimmed.endsWith("/")) return null;
    return /^(~\/|\/|\.{1,2}\/|[\w@.-])/.test(trimmed) ? trimmed : null;
  }
  // A bare name: with an extension, and more than an abbreviation ("e.g").
  return extension && /^[\w@-][\w@.-]*$/.test(name) && name.length > extension.length + 2 ? trimmed : null;
}

/**
 * Read-only Markdown for lists of many short texts, such as a conversation's messages: looks and behaves like
 * MarkdownView (issue links with their preview card included) but renders at once, with no editor behind it.
 */
export function StaticMarkdownView({
  value,
  className,
  onImageClick,
  onFileClick,
}: {
  value: string;
  className?: string;
  /** Called with an image's link when it's clicked, e.g. to open it full size. */
  onImageClick?: (src: string) => void;
  /** With it, file paths in the text are links, and this is called with the path clicked (MC-315). */
  onFileClick?: (path: string) => void;
}) {
  const store = useOptionalCrewStore();
  const issues = store?.issues;
  const orgPath = store?.orgPath;
  const employees = store?.employees;
  const html = React.useMemo(() => {
    if (typeof document === "undefined") return null;
    const keys = new Set(issues?.map((issue) => issue.key));
    try {
      return markdownHTML(
        value,
        (key) => (orgPath && keys.has(key) ? orgPath(`/issues/${key}`) : undefined),
        Boolean(onFileClick),
        orgPath && employees?.length ? { employees, href: (id) => orgPath(`/messages/${id}`) } : null,
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [value, issues, orgPath, employees, onFileClick]);
  const refs = useIssueRefs(null, { editable: false });
  return (
    <>
      <div
        className={className}
        {...refs.handlers}
        onClick={(event) => {
          const file = (event.target as HTMLElement).closest<HTMLElement>("[data-file-path]");
          if (file && onFileClick && !event.metaKey && !event.ctrlKey) {
            event.preventDefault();
            return onFileClick(file.dataset.filePath!);
          }
          refs.handlers.onClick?.(event);
          const image = (event.target as HTMLElement).closest("img");
          if (image && onImageClick) onImageClick(image.src);
        }}
      >
        {html === null ? (
          <div className="tiptap whitespace-pre-wrap">{value}</div>
        ) : (
          // Built from the schema by ProseMirror's serializer, as the editor builds its own DOM: text is escaped, and
          // links keep the Link extension's checks on what they may point at.
          <div className="tiptap" dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
      {refs.card}
    </>
  );
}
