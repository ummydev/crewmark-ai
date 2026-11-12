import type { Locale } from "next-intl";

import { PROACTIVE_CLAUDE_CODE_LOCALES, type ProactiveClaudeCodeLocale, proactiveClaudeCode } from "@/content/proactive-claude-code";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /proactive-claude-code: its own wording in English and Chinese, and the page's headline in the other languages.

export const alt = "How to make Claude Code proactive: output style, /loop, scheduled tasks and heartbeats";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return PROACTIVE_CLAUDE_CODE_LOCALES.map((locale) => ({ locale }));
}

const CARD = {
  en: {
    lines: [{ before: "Make Claude Code proactive:" }, { before: "", marked: "it starts work on its own." }],
    footer: "/loop  ·  scheduled tasks  ·  heartbeats  ·  Crewmark",
  },
  zh: {
    lines: [{ before: "让 Claude Code 主动干活，" }, { before: "", marked: "不用你开口就开工。" }],
    footer: "/loop  ·  定时任务  ·  心跳  ·  Crewmark",
  },
} satisfies Partial<Record<ProactiveClaudeCodeLocale, unknown>>;

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = proactiveClaudeCode[locale as ProactiveClaudeCodeLocale] ?? proactiveClaudeCode.en;
  const card = (CARD as Partial<Record<ProactiveClaudeCodeLocale, (typeof CARD)["en"]>>)[locale as ProactiveClaudeCodeLocale] ?? {
    lines: [{ before: "", marked: c.hero.title }],
    footer: `${c.breadcrumb}  ·  Crewmark`,
  };
  return shareCard({ locale, ...card });
}
