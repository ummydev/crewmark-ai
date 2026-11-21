import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhAutogen } from "@/content/i18n/zh/alternatives-autogen";
import { copy as zhTWAutogen } from "@/content/i18n/zh-TW/alternatives-autogen";
import { copy as jaAutogen } from "@/content/i18n/ja/alternatives-autogen";
import { copy as koAutogen } from "@/content/i18n/ko/alternatives-autogen";
import { copy as esAutogen } from "@/content/i18n/es/alternatives-autogen";
import { copy as ptBRAutogen } from "@/content/i18n/pt-BR/alternatives-autogen";
import { copy as frAutogen } from "@/content/i18n/fr/alternatives-autogen";
import { copy as deAutogen } from "@/content/i18n/de/alternatives-autogen";
import { copy as zhHermesAgent } from "@/content/i18n/zh/alternatives-hermes-agent";
import { copy as zhTWHermesAgent } from "@/content/i18n/zh-TW/alternatives-hermes-agent";
import { copy as jaHermesAgent } from "@/content/i18n/ja/alternatives-hermes-agent";
import { copy as koHermesAgent } from "@/content/i18n/ko/alternatives-hermes-agent";
import { copy as esHermesAgent } from "@/content/i18n/es/alternatives-hermes-agent";
import { copy as ptBRHermesAgent } from "@/content/i18n/pt-BR/alternatives-hermes-agent";
import { copy as frHermesAgent } from "@/content/i18n/fr/alternatives-hermes-agent";
import { copy as deHermesAgent } from "@/content/i18n/de/alternatives-hermes-agent";
import { copy as zhLanggraph } from "@/content/i18n/zh/alternatives-langgraph";
import { copy as zhTWLanggraph } from "@/content/i18n/zh-TW/alternatives-langgraph";
import { copy as jaLanggraph } from "@/content/i18n/ja/alternatives-langgraph";
import { copy as koLanggraph } from "@/content/i18n/ko/alternatives-langgraph";
import { copy as esLanggraph } from "@/content/i18n/es/alternatives-langgraph";
import { copy as ptBRLanggraph } from "@/content/i18n/pt-BR/alternatives-langgraph";
import { copy as frLanggraph } from "@/content/i18n/fr/alternatives-langgraph";
import { copy as deLanggraph } from "@/content/i18n/de/alternatives-langgraph";
import { copy as zhGrokBot } from "@/content/i18n/zh/alternatives-grok-bot";
import { copy as zhTWGrokBot } from "@/content/i18n/zh-TW/alternatives-grok-bot";
import { copy as jaGrokBot } from "@/content/i18n/ja/alternatives-grok-bot";
import { copy as koGrokBot } from "@/content/i18n/ko/alternatives-grok-bot";
import { copy as esGrokBot } from "@/content/i18n/es/alternatives-grok-bot";
import { copy as ptBRGrokBot } from "@/content/i18n/pt-BR/alternatives-grok-bot";
import { copy as frGrokBot } from "@/content/i18n/fr/alternatives-grok-bot";
import { copy as deGrokBot } from "@/content/i18n/de/alternatives-grok-bot";
import { copy as zhClaudeCowork } from "@/content/i18n/zh/alternatives-claude-cowork";
import { copy as zhTWClaudeCowork } from "@/content/i18n/zh-TW/alternatives-claude-cowork";
import { copy as jaClaudeCowork } from "@/content/i18n/ja/alternatives-claude-cowork";
import { copy as koClaudeCowork } from "@/content/i18n/ko/alternatives-claude-cowork";
import { copy as esClaudeCowork } from "@/content/i18n/es/alternatives-claude-cowork";
import { copy as ptBRClaudeCowork } from "@/content/i18n/pt-BR/alternatives-claude-cowork";
import { copy as frClaudeCowork } from "@/content/i18n/fr/alternatives-claude-cowork";
import { copy as deClaudeCowork } from "@/content/i18n/de/alternatives-claude-cowork";
import { copy as zhLindy } from "@/content/i18n/zh/alternatives-lindy";
import { copy as zhTWLindy } from "@/content/i18n/zh-TW/alternatives-lindy";
import { copy as jaLindy } from "@/content/i18n/ja/alternatives-lindy";
import { copy as koLindy } from "@/content/i18n/ko/alternatives-lindy";
import { copy as esLindy } from "@/content/i18n/es/alternatives-lindy";
import { copy as ptBRLindy } from "@/content/i18n/pt-BR/alternatives-lindy";
import { copy as frLindy } from "@/content/i18n/fr/alternatives-lindy";
import { copy as deLindy } from "@/content/i18n/de/alternatives-lindy";
import { copy as zhRelevanceAi } from "@/content/i18n/zh/alternatives-relevance-ai";
import { copy as zhTWRelevanceAi } from "@/content/i18n/zh-TW/alternatives-relevance-ai";
import { copy as jaRelevanceAi } from "@/content/i18n/ja/alternatives-relevance-ai";
import { copy as koRelevanceAi } from "@/content/i18n/ko/alternatives-relevance-ai";
import { copy as esRelevanceAi } from "@/content/i18n/es/alternatives-relevance-ai";
import { copy as ptBRRelevanceAi } from "@/content/i18n/pt-BR/alternatives-relevance-ai";
import { copy as frRelevanceAi } from "@/content/i18n/fr/alternatives-relevance-ai";
import { copy as deRelevanceAi } from "@/content/i18n/de/alternatives-relevance-ai";
import { copy as zhFactory } from "@/content/i18n/zh/alternatives-factory";
import { copy as zhTWFactory } from "@/content/i18n/zh-TW/alternatives-factory";
import { copy as jaFactory } from "@/content/i18n/ja/alternatives-factory";
import { copy as koFactory } from "@/content/i18n/ko/alternatives-factory";
import { copy as esFactory } from "@/content/i18n/es/alternatives-factory";
import { copy as ptBRFactory } from "@/content/i18n/pt-BR/alternatives-factory";
import { copy as frFactory } from "@/content/i18n/fr/alternatives-factory";
import { copy as deFactory } from "@/content/i18n/de/alternatives-factory";
import type { AlternativesSlug } from "@/i18n/product-pages";

import { copy as autogen } from "./autogen";
import { copy as hermesAgent } from "./hermes-agent";
import { copy as langgraph } from "./langgraph";
import { copy as grokBot } from "./grok-bot";
import { copy as claudeCowork } from "./claude-cowork";
import { copy as lindy } from "./lindy";
import { copy as relevanceAi } from "./relevance-ai";
import { copy as factory } from "./factory";

// Every "<product> alternatives" page's copy (MC-439), by slug and language. English lives next to this file, the other
// languages in content/i18n/<locale>/alternatives-<slug>.ts.

export const alternativesCopy: Record<AlternativesSlug, Partial<Record<Locale, GuideCopy>>> = {
  "autogen": { en: autogen, zh: zhAutogen, "zh-TW": zhTWAutogen, ja: jaAutogen, ko: koAutogen, es: esAutogen, "pt-BR": ptBRAutogen, fr: frAutogen, de: deAutogen },
  "hermes-agent": { en: hermesAgent, zh: zhHermesAgent, "zh-TW": zhTWHermesAgent, ja: jaHermesAgent, ko: koHermesAgent, es: esHermesAgent, "pt-BR": ptBRHermesAgent, fr: frHermesAgent, de: deHermesAgent },
  "langgraph": { en: langgraph, zh: zhLanggraph, "zh-TW": zhTWLanggraph, ja: jaLanggraph, ko: koLanggraph, es: esLanggraph, "pt-BR": ptBRLanggraph, fr: frLanggraph, de: deLanggraph },
  "grok-bot": { en: grokBot, zh: zhGrokBot, "zh-TW": zhTWGrokBot, ja: jaGrokBot, ko: koGrokBot, es: esGrokBot, "pt-BR": ptBRGrokBot, fr: frGrokBot, de: deGrokBot },
  "claude-cowork": { en: claudeCowork, zh: zhClaudeCowork, "zh-TW": zhTWClaudeCowork, ja: jaClaudeCowork, ko: koClaudeCowork, es: esClaudeCowork, "pt-BR": ptBRClaudeCowork, fr: frClaudeCowork, de: deClaudeCowork },
  "lindy": { en: lindy, zh: zhLindy, "zh-TW": zhTWLindy, ja: jaLindy, ko: koLindy, es: esLindy, "pt-BR": ptBRLindy, fr: frLindy, de: deLindy },
  "relevance-ai": { en: relevanceAi, zh: zhRelevanceAi, "zh-TW": zhTWRelevanceAi, ja: jaRelevanceAi, ko: koRelevanceAi, es: esRelevanceAi, "pt-BR": ptBRRelevanceAi, fr: frRelevanceAi, de: deRelevanceAi },
  "factory": { en: factory, zh: zhFactory, "zh-TW": zhTWFactory, ja: jaFactory, ko: koFactory, es: esFactory, "pt-BR": ptBRFactory, fr: frFactory, de: deFactory },
};
