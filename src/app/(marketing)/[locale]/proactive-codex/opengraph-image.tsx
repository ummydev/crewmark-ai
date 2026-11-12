import type { Locale } from "next-intl";

import { PROACTIVE_CODEX_LOCALES, type ProactiveCodexLocale, proactiveCodex } from "@/content/proactive-codex";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /proactive-codex: its own wording in English and Chinese, and the page's headline in the other languages.

export const alt = "How to make Codex proactive: scheduled tasks, codex exec, cron and heartbeats";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return PROACTIVE_CODEX_LOCALES.map((locale) => ({ locale }));
}

const CARD = {
  en: {
    lines: [{ before: "Make Codex proactive:" }, { before: "", marked: "it starts work on its own." }],
    footer: "Scheduled tasks  ·  codex exec  ·  heartbeats  ·  Crewmark",
  },
  zh: {
    lines: [{ before: "让 Codex 主动干活，" }, { before: "", marked: "不用你开口就开工。" }],
    footer: "定时任务  ·  codex exec  ·  心跳  ·  Crewmark",
  },
} satisfies Partial<Record<ProactiveCodexLocale, unknown>>;

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = proactiveCodex[locale as ProactiveCodexLocale] ?? proactiveCodex.en;
  const card = (CARD as Partial<Record<ProactiveCodexLocale, (typeof CARD)["en"]>>)[locale as ProactiveCodexLocale] ?? {
    lines: [{ before: "", marked: c.hero.title }],
    footer: `${c.breadcrumb}  ·  Crewmark`,
  };
  return shareCard({ locale, ...card });
}
