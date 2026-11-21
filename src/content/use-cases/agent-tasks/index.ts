import type { Locale } from "next-intl";

import { copy as de } from "@/content/i18n/de/agent-tasks";
import { copy as es } from "@/content/i18n/es/agent-tasks";
import { copy as fr } from "@/content/i18n/fr/agent-tasks";
import { copy as ja } from "@/content/i18n/ja/agent-tasks";
import { copy as ko } from "@/content/i18n/ko/agent-tasks";
import { copy as ptBR } from "@/content/i18n/pt-BR/agent-tasks";
import { copy as zh } from "@/content/i18n/zh/agent-tasks";
import { copy as zhTW } from "@/content/i18n/zh-TW/agent-tasks";

import { en } from "./en";
import type { AgentTaskBundle } from "./types";

export { agentHubPage, agentIndexSection, agentTaskHref, agentTaskPage, taskLinksSection } from "./build";

// The agent × task copy in every language it's written in. English is next to this file, the other languages in
// content/i18n/<locale>/agent-tasks.ts.
export const agentTaskBundles: Partial<Record<Locale, AgentTaskBundle>> = {
  en,
  zh,
  "zh-TW": zhTW,
  ja,
  ko,
  es,
  "pt-BR": ptBR,
  fr,
  de,
};
