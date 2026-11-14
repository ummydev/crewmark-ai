"use client";

import * as React from "react";
import { EditorContent, Extension, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Markdown } from "@tiptap/markdown";
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

import { IssueRefs, useIssueRefs } from "@/components/issue-refs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/** Uploads an image and returns its link, or null when it couldn't (and has said why). */
export type UploadImage = (file: File) => Promise<string | null>;

/** Lets a form put images in, e.g. ones pasted while its title had the focus. */
export interface MarkdownEditorHandle {
  insertImages: (files: File[]) => void;
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
 * With `uploadImage`, images pasted or dropped in are uploaded and shown.
 */
export function MarkdownEditor({
  value,
  onChange,
  onSubmit,
  uploadImage,
  ref,
  placeholder = "Write something…",
  toolbar = true,
  className,
  contentClassName = "min-h-40 py-2 [&_.tiptap]:min-h-36",
}: {
  value: string;
  onChange: (markdown: string) => void;
  /** Called on ⌘/Ctrl+Enter, e.g. to post a comment. */
  onSubmit?: () => void;
  uploadImage?: UploadImage;
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
  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown,
      Image,
      IssueRefs,
      Placeholder.configure({ placeholder }),
      Extension.create({
        name: "submitShortcut",
        addKeyboardShortcuts: () => ({
          "Mod-Enter": () => {
            if (!submit.current) return false;
            submit.current();
            return true;
          },
        }),
      }),
    ],
    content: value,
    contentType: "markdown",
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
    }),
    [editor, uploadImage],
  );

  // Images are caught on the way down, before the editor's own paste and drop handling sees them.
  function catchImages(event: React.SyntheticEvent, data: DataTransfer | null, at?: { left: number; top: number }) {
    const files = imageFiles(data);
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

/** Markdown shown read-only, styled like the editor, e.g. a comment. */
export function MarkdownView({ value, className }: { value: string; className?: string }) {
  const editor = useEditor({
    extensions: [StarterKit, Markdown, Image, IssueRefs],
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
