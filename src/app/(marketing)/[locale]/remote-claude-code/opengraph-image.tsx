import type { Locale } from "next-intl";

import { REMOTE_CLAUDE_CODE_LOCALES, type RemoteClaudeCodeLocale, remoteClaudeCode } from "@/content/remote-claude-code";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /remote-claude-code: its own wording in English and Chinese, and the page's headline in the other languages.

export const alt = "Claude Code Remote Control, and how to keep Claude Code working while you're away";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return REMOTE_CLAUDE_CODE_LOCALES.map((locale) => ({ locale }));
}

const CARD = {
  en: {
    lines: [{ before: "Claude Code from your phone," }, { before: "", marked: "working while you're away." }],
    footer: "Remote Control guide  ·  Crewmark",
  },
  zh: {
    lines: [{ before: "用手机远程控制 Claude Code，" }, { before: "", marked: "人不在也能接着干活。" }],
    footer: "Remote Control 教程  ·  Crewmark",
  },
} satisfies Partial<Record<RemoteClaudeCodeLocale, unknown>>;

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = remoteClaudeCode[locale as RemoteClaudeCodeLocale] ?? remoteClaudeCode.en;
  const card = (CARD as Partial<Record<RemoteClaudeCodeLocale, (typeof CARD)["en"]>>)[locale as RemoteClaudeCodeLocale] ?? {
    lines: [{ before: "", marked: c.hero.title }],
    footer: `${c.breadcrumb}  ·  Crewmark`,
  };
  return shareCard({ locale, ...card });
}
