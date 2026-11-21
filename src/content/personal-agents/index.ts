import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhBase44Superagent } from "@/content/i18n/zh/personal-agent-base44-superagent";
import { copy as zhGeminiSpark } from "@/content/i18n/zh/personal-agent-gemini-spark";
import { copy as zhGrokBot } from "@/content/i18n/zh/personal-agent-grok-bot";
import { copy as zhGrokBotRoutines } from "@/content/i18n/zh/personal-agent-grok-bot-routines";
import { copy as zhManusCue } from "@/content/i18n/zh/personal-agent-manus-cue";
import { copy as zhMetaMuse } from "@/content/i18n/zh/personal-agent-meta-muse";
import { copy as zhMetaMuseUseCases } from "@/content/i18n/zh/personal-agent-meta-muse-use-cases";
import { copy as zhTWBase44Superagent } from "@/content/i18n/zh-TW/personal-agent-base44-superagent";
import { copy as jaBase44Superagent } from "@/content/i18n/ja/personal-agent-base44-superagent";
import { copy as koBase44Superagent } from "@/content/i18n/ko/personal-agent-base44-superagent";
import { copy as esBase44Superagent } from "@/content/i18n/es/personal-agent-base44-superagent";
import { copy as ptBRBase44Superagent } from "@/content/i18n/pt-BR/personal-agent-base44-superagent";
import { copy as frBase44Superagent } from "@/content/i18n/fr/personal-agent-base44-superagent";
import { copy as deBase44Superagent } from "@/content/i18n/de/personal-agent-base44-superagent";
import { copy as zhTWGeminiSpark } from "@/content/i18n/zh-TW/personal-agent-gemini-spark";
import { copy as jaGeminiSpark } from "@/content/i18n/ja/personal-agent-gemini-spark";
import { copy as koGeminiSpark } from "@/content/i18n/ko/personal-agent-gemini-spark";
import { copy as esGeminiSpark } from "@/content/i18n/es/personal-agent-gemini-spark";
import { copy as ptBRGeminiSpark } from "@/content/i18n/pt-BR/personal-agent-gemini-spark";
import { copy as frGeminiSpark } from "@/content/i18n/fr/personal-agent-gemini-spark";
import { copy as deGeminiSpark } from "@/content/i18n/de/personal-agent-gemini-spark";
import { copy as zhTWGrokBot } from "@/content/i18n/zh-TW/personal-agent-grok-bot";
import { copy as jaGrokBot } from "@/content/i18n/ja/personal-agent-grok-bot";
import { copy as koGrokBot } from "@/content/i18n/ko/personal-agent-grok-bot";
import { copy as esGrokBot } from "@/content/i18n/es/personal-agent-grok-bot";
import { copy as ptBRGrokBot } from "@/content/i18n/pt-BR/personal-agent-grok-bot";
import { copy as frGrokBot } from "@/content/i18n/fr/personal-agent-grok-bot";
import { copy as deGrokBot } from "@/content/i18n/de/personal-agent-grok-bot";
import { copy as zhTWGrokBotRoutines } from "@/content/i18n/zh-TW/personal-agent-grok-bot-routines";
import { copy as jaGrokBotRoutines } from "@/content/i18n/ja/personal-agent-grok-bot-routines";
import { copy as koGrokBotRoutines } from "@/content/i18n/ko/personal-agent-grok-bot-routines";
import { copy as esGrokBotRoutines } from "@/content/i18n/es/personal-agent-grok-bot-routines";
import { copy as ptBRGrokBotRoutines } from "@/content/i18n/pt-BR/personal-agent-grok-bot-routines";
import { copy as frGrokBotRoutines } from "@/content/i18n/fr/personal-agent-grok-bot-routines";
import { copy as deGrokBotRoutines } from "@/content/i18n/de/personal-agent-grok-bot-routines";
import { copy as zhTWManusCue } from "@/content/i18n/zh-TW/personal-agent-manus-cue";
import { copy as jaManusCue } from "@/content/i18n/ja/personal-agent-manus-cue";
import { copy as koManusCue } from "@/content/i18n/ko/personal-agent-manus-cue";
import { copy as esManusCue } from "@/content/i18n/es/personal-agent-manus-cue";
import { copy as ptBRManusCue } from "@/content/i18n/pt-BR/personal-agent-manus-cue";
import { copy as frManusCue } from "@/content/i18n/fr/personal-agent-manus-cue";
import { copy as deManusCue } from "@/content/i18n/de/personal-agent-manus-cue";
import { copy as zhTWMetaMuse } from "@/content/i18n/zh-TW/personal-agent-meta-muse";
import { copy as jaMetaMuse } from "@/content/i18n/ja/personal-agent-meta-muse";
import { copy as koMetaMuse } from "@/content/i18n/ko/personal-agent-meta-muse";
import { copy as esMetaMuse } from "@/content/i18n/es/personal-agent-meta-muse";
import { copy as ptBRMetaMuse } from "@/content/i18n/pt-BR/personal-agent-meta-muse";
import { copy as frMetaMuse } from "@/content/i18n/fr/personal-agent-meta-muse";
import { copy as deMetaMuse } from "@/content/i18n/de/personal-agent-meta-muse";
import { copy as zhTWMetaMuseUseCases } from "@/content/i18n/zh-TW/personal-agent-meta-muse-use-cases";
import { copy as jaMetaMuseUseCases } from "@/content/i18n/ja/personal-agent-meta-muse-use-cases";
import { copy as koMetaMuseUseCases } from "@/content/i18n/ko/personal-agent-meta-muse-use-cases";
import { copy as esMetaMuseUseCases } from "@/content/i18n/es/personal-agent-meta-muse-use-cases";
import { copy as ptBRMetaMuseUseCases } from "@/content/i18n/pt-BR/personal-agent-meta-muse-use-cases";
import { copy as frMetaMuseUseCases } from "@/content/i18n/fr/personal-agent-meta-muse-use-cases";
import { copy as deMetaMuseUseCases } from "@/content/i18n/de/personal-agent-meta-muse-use-cases";
import { copy as zhClaudeCowork } from "@/content/i18n/zh/personal-agent-claude-cowork";
import { copy as zhTWClaudeCowork } from "@/content/i18n/zh-TW/personal-agent-claude-cowork";
import { copy as jaClaudeCowork } from "@/content/i18n/ja/personal-agent-claude-cowork";
import { copy as koClaudeCowork } from "@/content/i18n/ko/personal-agent-claude-cowork";
import { copy as esClaudeCowork } from "@/content/i18n/es/personal-agent-claude-cowork";
import { copy as ptBRClaudeCowork } from "@/content/i18n/pt-BR/personal-agent-claude-cowork";
import { copy as frClaudeCowork } from "@/content/i18n/fr/personal-agent-claude-cowork";
import { copy as deClaudeCowork } from "@/content/i18n/de/personal-agent-claude-cowork";
import { copy as zhCopilotCowork } from "@/content/i18n/zh/personal-agent-copilot-cowork";
import { copy as zhTWCopilotCowork } from "@/content/i18n/zh-TW/personal-agent-copilot-cowork";
import { copy as jaCopilotCowork } from "@/content/i18n/ja/personal-agent-copilot-cowork";
import { copy as koCopilotCowork } from "@/content/i18n/ko/personal-agent-copilot-cowork";
import { copy as esCopilotCowork } from "@/content/i18n/es/personal-agent-copilot-cowork";
import { copy as ptBRCopilotCowork } from "@/content/i18n/pt-BR/personal-agent-copilot-cowork";
import { copy as frCopilotCowork } from "@/content/i18n/fr/personal-agent-copilot-cowork";
import { copy as deCopilotCowork } from "@/content/i18n/de/personal-agent-copilot-cowork";
import { copy as zhChatgptWork } from "@/content/i18n/zh/personal-agent-chatgpt-work";
import { copy as zhTWChatgptWork } from "@/content/i18n/zh-TW/personal-agent-chatgpt-work";
import { copy as jaChatgptWork } from "@/content/i18n/ja/personal-agent-chatgpt-work";
import { copy as koChatgptWork } from "@/content/i18n/ko/personal-agent-chatgpt-work";
import { copy as esChatgptWork } from "@/content/i18n/es/personal-agent-chatgpt-work";
import { copy as ptBRChatgptWork } from "@/content/i18n/pt-BR/personal-agent-chatgpt-work";
import { copy as frChatgptWork } from "@/content/i18n/fr/personal-agent-chatgpt-work";
import { copy as deChatgptWork } from "@/content/i18n/de/personal-agent-chatgpt-work";
import { copy as zhCursorProjects } from "@/content/i18n/zh/personal-agent-cursor-projects";
import { copy as zhTWCursorProjects } from "@/content/i18n/zh-TW/personal-agent-cursor-projects";
import { copy as jaCursorProjects } from "@/content/i18n/ja/personal-agent-cursor-projects";
import { copy as koCursorProjects } from "@/content/i18n/ko/personal-agent-cursor-projects";
import { copy as esCursorProjects } from "@/content/i18n/es/personal-agent-cursor-projects";
import { copy as ptBRCursorProjects } from "@/content/i18n/pt-BR/personal-agent-cursor-projects";
import { copy as frCursorProjects } from "@/content/i18n/fr/personal-agent-cursor-projects";
import { copy as deCursorProjects } from "@/content/i18n/de/personal-agent-cursor-projects";
import { copy as zhLindy } from "@/content/i18n/zh/personal-agent-lindy";
import { copy as zhTWLindy } from "@/content/i18n/zh-TW/personal-agent-lindy";
import { copy as jaLindy } from "@/content/i18n/ja/personal-agent-lindy";
import { copy as koLindy } from "@/content/i18n/ko/personal-agent-lindy";
import { copy as esLindy } from "@/content/i18n/es/personal-agent-lindy";
import { copy as ptBRLindy } from "@/content/i18n/pt-BR/personal-agent-lindy";
import { copy as frLindy } from "@/content/i18n/fr/personal-agent-lindy";
import { copy as deLindy } from "@/content/i18n/de/personal-agent-lindy";
import { copy as zhOpenworker } from "@/content/i18n/zh/personal-agent-openworker";
import { copy as zhTWOpenworker } from "@/content/i18n/zh-TW/personal-agent-openworker";
import { copy as jaOpenworker } from "@/content/i18n/ja/personal-agent-openworker";
import { copy as koOpenworker } from "@/content/i18n/ko/personal-agent-openworker";
import { copy as esOpenworker } from "@/content/i18n/es/personal-agent-openworker";
import { copy as ptBROpenworker } from "@/content/i18n/pt-BR/personal-agent-openworker";
import { copy as frOpenworker } from "@/content/i18n/fr/personal-agent-openworker";
import { copy as deOpenworker } from "@/content/i18n/de/personal-agent-openworker";
import { copy as zhOpenbot } from "@/content/i18n/zh/personal-agent-openbot";
import { copy as zhTWOpenbot } from "@/content/i18n/zh-TW/personal-agent-openbot";
import { copy as jaOpenbot } from "@/content/i18n/ja/personal-agent-openbot";
import { copy as koOpenbot } from "@/content/i18n/ko/personal-agent-openbot";
import { copy as esOpenbot } from "@/content/i18n/es/personal-agent-openbot";
import { copy as ptBROpenbot } from "@/content/i18n/pt-BR/personal-agent-openbot";
import { copy as frOpenbot } from "@/content/i18n/fr/personal-agent-openbot";
import { copy as deOpenbot } from "@/content/i18n/de/personal-agent-openbot";
import { copy as zhSuparagent } from "@/content/i18n/zh/personal-agent-suparagent";
import { copy as zhTWSuparagent } from "@/content/i18n/zh-TW/personal-agent-suparagent";
import { copy as jaSuparagent } from "@/content/i18n/ja/personal-agent-suparagent";
import { copy as koSuparagent } from "@/content/i18n/ko/personal-agent-suparagent";
import { copy as esSuparagent } from "@/content/i18n/es/personal-agent-suparagent";
import { copy as ptBRSuparagent } from "@/content/i18n/pt-BR/personal-agent-suparagent";
import { copy as frSuparagent } from "@/content/i18n/fr/personal-agent-suparagent";
import { copy as deSuparagent } from "@/content/i18n/de/personal-agent-suparagent";
import type { PersonalAgentSlug } from "@/i18n/personal-agents";

import { base44Superagent } from "./base44-superagent";
import { claudeCowork } from "./claude-cowork";
import { copilotCowork } from "./copilot-cowork";
import { chatgptWork } from "./chatgpt-work";
import { cursorProjects } from "./cursor-projects";
import { lindy } from "./lindy";
import { openworker } from "./openworker";
import { openbot } from "./openbot";
import { suparagent } from "./suparagent";
import { geminiSpark } from "./gemini-spark";
import { grokBot } from "./grok-bot";
import { grokBotRoutines } from "./grok-bot-routines";
import { manusCue } from "./manus-cue";
import { metaMuse } from "./meta-muse";
import { metaMuseUseCases } from "./meta-muse-use-cases";

// Every personal agent guide's copy, by slug and language. English lives next to this file, the other languages in
// content/i18n/<locale>/personal-agent-<slug>.ts.

export const personalAgentsCopy: Record<PersonalAgentSlug, Partial<Record<Locale, GuideCopy>>> = {
  "meta-muse": { en: metaMuse, zh: zhMetaMuse, "zh-TW": zhTWMetaMuse, ja: jaMetaMuse, ko: koMetaMuse, es: esMetaMuse, "pt-BR": ptBRMetaMuse, fr: frMetaMuse, de: deMetaMuse },
  "meta-muse-use-cases": { en: metaMuseUseCases, zh: zhMetaMuseUseCases, "zh-TW": zhTWMetaMuseUseCases, ja: jaMetaMuseUseCases, ko: koMetaMuseUseCases, es: esMetaMuseUseCases, "pt-BR": ptBRMetaMuseUseCases, fr: frMetaMuseUseCases, de: deMetaMuseUseCases },
  "grok-bot": { en: grokBot, zh: zhGrokBot, "zh-TW": zhTWGrokBot, ja: jaGrokBot, ko: koGrokBot, es: esGrokBot, "pt-BR": ptBRGrokBot, fr: frGrokBot, de: deGrokBot },
  "grok-bot-routines": { en: grokBotRoutines, zh: zhGrokBotRoutines, "zh-TW": zhTWGrokBotRoutines, ja: jaGrokBotRoutines, ko: koGrokBotRoutines, es: esGrokBotRoutines, "pt-BR": ptBRGrokBotRoutines, fr: frGrokBotRoutines, de: deGrokBotRoutines },
  "manus-cue": { en: manusCue, zh: zhManusCue, "zh-TW": zhTWManusCue, ja: jaManusCue, ko: koManusCue, es: esManusCue, "pt-BR": ptBRManusCue, fr: frManusCue, de: deManusCue },
  "gemini-spark": { en: geminiSpark, zh: zhGeminiSpark, "zh-TW": zhTWGeminiSpark, ja: jaGeminiSpark, ko: koGeminiSpark, es: esGeminiSpark, "pt-BR": ptBRGeminiSpark, fr: frGeminiSpark, de: deGeminiSpark },
  "base44-superagent": { en: base44Superagent, zh: zhBase44Superagent, "zh-TW": zhTWBase44Superagent, ja: jaBase44Superagent, ko: koBase44Superagent, es: esBase44Superagent, "pt-BR": ptBRBase44Superagent, fr: frBase44Superagent, de: deBase44Superagent },
  "claude-cowork": { en: claudeCowork, zh: zhClaudeCowork, "zh-TW": zhTWClaudeCowork, ja: jaClaudeCowork, ko: koClaudeCowork, es: esClaudeCowork, "pt-BR": ptBRClaudeCowork, fr: frClaudeCowork, de: deClaudeCowork },
  "copilot-cowork": { en: copilotCowork, zh: zhCopilotCowork, "zh-TW": zhTWCopilotCowork, ja: jaCopilotCowork, ko: koCopilotCowork, es: esCopilotCowork, "pt-BR": ptBRCopilotCowork, fr: frCopilotCowork, de: deCopilotCowork },
  "chatgpt-work": { en: chatgptWork, zh: zhChatgptWork, "zh-TW": zhTWChatgptWork, ja: jaChatgptWork, ko: koChatgptWork, es: esChatgptWork, "pt-BR": ptBRChatgptWork, fr: frChatgptWork, de: deChatgptWork },
  "cursor-projects": { en: cursorProjects, zh: zhCursorProjects, "zh-TW": zhTWCursorProjects, ja: jaCursorProjects, ko: koCursorProjects, es: esCursorProjects, "pt-BR": ptBRCursorProjects, fr: frCursorProjects, de: deCursorProjects },
  "lindy": { en: lindy, zh: zhLindy, "zh-TW": zhTWLindy, ja: jaLindy, ko: koLindy, es: esLindy, "pt-BR": ptBRLindy, fr: frLindy, de: deLindy },
  "openworker": { en: openworker, zh: zhOpenworker, "zh-TW": zhTWOpenworker, ja: jaOpenworker, ko: koOpenworker, es: esOpenworker, "pt-BR": ptBROpenworker, fr: frOpenworker, de: deOpenworker },
  "openbot": { en: openbot, zh: zhOpenbot, "zh-TW": zhTWOpenbot, ja: jaOpenbot, ko: koOpenbot, es: esOpenbot, "pt-BR": ptBROpenbot, fr: frOpenbot, de: deOpenbot },
  "suparagent": { en: suparagent, zh: zhSuparagent, "zh-TW": zhTWSuparagent, ja: jaSuparagent, ko: koSuparagent, es: esSuparagent, "pt-BR": ptBRSuparagent, fr: frSuparagent, de: deSuparagent },
};
