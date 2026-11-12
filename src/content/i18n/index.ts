// Every translated page, by page and language. Each language lives in its own folder (content/i18n/<locale>/) so the
// translations can be written and reviewed one language at a time; the English master of each page stays in
// content/ (the Chinese of the four guides too) and its file merges these in. To add a language, add its folder and
// its imports here.

import { copy as zhTWAiEmployees } from "./zh-TW/ai-employees";
import { copy as jaAiEmployees } from "./ja/ai-employees";
import { copy as koAiEmployees } from "./ko/ai-employees";
import { copy as esAiEmployees } from "./es/ai-employees";
import { copy as ptBRAiEmployees } from "./pt-BR/ai-employees";
import { copy as frAiEmployees } from "./fr/ai-employees";
import { copy as deAiEmployees } from "./de/ai-employees";
import { copy as zhTWRemoteClaudeCode } from "./zh-TW/remote-claude-code";
import { copy as jaRemoteClaudeCode } from "./ja/remote-claude-code";
import { copy as koRemoteClaudeCode } from "./ko/remote-claude-code";
import { copy as esRemoteClaudeCode } from "./es/remote-claude-code";
import { copy as ptBRRemoteClaudeCode } from "./pt-BR/remote-claude-code";
import { copy as frRemoteClaudeCode } from "./fr/remote-claude-code";
import { copy as deRemoteClaudeCode } from "./de/remote-claude-code";
import { copy as zhTWProactiveClaudeCode } from "./zh-TW/proactive-claude-code";
import { copy as jaProactiveClaudeCode } from "./ja/proactive-claude-code";
import { copy as koProactiveClaudeCode } from "./ko/proactive-claude-code";
import { copy as esProactiveClaudeCode } from "./es/proactive-claude-code";
import { copy as ptBRProactiveClaudeCode } from "./pt-BR/proactive-claude-code";
import { copy as frProactiveClaudeCode } from "./fr/proactive-claude-code";
import { copy as deProactiveClaudeCode } from "./de/proactive-claude-code";
import { copy as zhTWProactiveCodex } from "./zh-TW/proactive-codex";
import { copy as jaProactiveCodex } from "./ja/proactive-codex";
import { copy as koProactiveCodex } from "./ko/proactive-codex";
import { copy as esProactiveCodex } from "./es/proactive-codex";
import { copy as ptBRProactiveCodex } from "./pt-BR/proactive-codex";
import { copy as frProactiveCodex } from "./fr/proactive-codex";
import { copy as deProactiveCodex } from "./de/proactive-codex";
import { copy as zhAlternatives } from "./zh/alternatives";
import { copy as zhTWAlternatives } from "./zh-TW/alternatives";
import { copy as jaAlternatives } from "./ja/alternatives";
import { copy as koAlternatives } from "./ko/alternatives";
import { copy as esAlternatives } from "./es/alternatives";
import { copy as ptBRAlternatives } from "./pt-BR/alternatives";
import { copy as frAlternatives } from "./fr/alternatives";
import { copy as deAlternatives } from "./de/alternatives";
import { copy as zhClaudeCodeBackgroundAgents } from "./zh/blog-claude-code-background-agents";
import { copy as zhTWClaudeCodeBackgroundAgents } from "./zh-TW/blog-claude-code-background-agents";
import { copy as jaClaudeCodeBackgroundAgents } from "./ja/blog-claude-code-background-agents";
import { copy as koClaudeCodeBackgroundAgents } from "./ko/blog-claude-code-background-agents";
import { copy as esClaudeCodeBackgroundAgents } from "./es/blog-claude-code-background-agents";
import { copy as ptBRClaudeCodeBackgroundAgents } from "./pt-BR/blog-claude-code-background-agents";
import { copy as frClaudeCodeBackgroundAgents } from "./fr/blog-claude-code-background-agents";
import { copy as deClaudeCodeBackgroundAgents } from "./de/blog-claude-code-background-agents";
import { copy as zhMultipleClaudeCodeAgents } from "./zh/blog-multiple-claude-code-agents";
import { copy as zhTWMultipleClaudeCodeAgents } from "./zh-TW/blog-multiple-claude-code-agents";
import { copy as jaMultipleClaudeCodeAgents } from "./ja/blog-multiple-claude-code-agents";
import { copy as koMultipleClaudeCodeAgents } from "./ko/blog-multiple-claude-code-agents";
import { copy as esMultipleClaudeCodeAgents } from "./es/blog-multiple-claude-code-agents";
import { copy as ptBRMultipleClaudeCodeAgents } from "./pt-BR/blog-multiple-claude-code-agents";
import { copy as frMultipleClaudeCodeAgents } from "./fr/blog-multiple-claude-code-agents";
import { copy as deMultipleClaudeCodeAgents } from "./de/blog-multiple-claude-code-agents";
import { copy as zhBlogIndex } from "./zh/blog-index";
import { copy as zhTWBlogIndex } from "./zh-TW/blog-index";
import { copy as jaBlogIndex } from "./ja/blog-index";
import { copy as koBlogIndex } from "./ko/blog-index";
import { copy as esBlogIndex } from "./es/blog-index";
import { copy as ptBRBlogIndex } from "./pt-BR/blog-index";
import { copy as frBlogIndex } from "./fr/blog-index";
import { copy as deBlogIndex } from "./de/blog-index";
import { copy as zhChatgptDots } from "./zh/blog-chatgpt-dots";
import { copy as zhTWChatgptDots } from "./zh-TW/blog-chatgpt-dots";
import { copy as jaChatgptDots } from "./ja/blog-chatgpt-dots";
import { copy as koChatgptDots } from "./ko/blog-chatgpt-dots";
import { copy as esChatgptDots } from "./es/blog-chatgpt-dots";
import { copy as ptBRChatgptDots } from "./pt-BR/blog-chatgpt-dots";
import { copy as frChatgptDots } from "./fr/blog-chatgpt-dots";
import { copy as deChatgptDots } from "./de/blog-chatgpt-dots";
import { copy as zhDeepseekSuperAgent } from "./zh/blog-deepseek-super-agent";
import { copy as zhTWDeepseekSuperAgent } from "./zh-TW/blog-deepseek-super-agent";
import { copy as jaDeepseekSuperAgent } from "./ja/blog-deepseek-super-agent";
import { copy as koDeepseekSuperAgent } from "./ko/blog-deepseek-super-agent";
import { copy as esDeepseekSuperAgent } from "./es/blog-deepseek-super-agent";
import { copy as ptBRDeepseekSuperAgent } from "./pt-BR/blog-deepseek-super-agent";
import { copy as frDeepseekSuperAgent } from "./fr/blog-deepseek-super-agent";
import { copy as deDeepseekSuperAgent } from "./de/blog-deepseek-super-agent";
import { copy as zhClaudeMessageThreads } from "./zh/blog-claude-message-threads";
import { copy as zhTWClaudeMessageThreads } from "./zh-TW/blog-claude-message-threads";
import { copy as jaClaudeMessageThreads } from "./ja/blog-claude-message-threads";
import { copy as koClaudeMessageThreads } from "./ko/blog-claude-message-threads";
import { copy as esClaudeMessageThreads } from "./es/blog-claude-message-threads";
import { copy as ptBRClaudeMessageThreads } from "./pt-BR/blog-claude-message-threads";
import { copy as frClaudeMessageThreads } from "./fr/blog-claude-message-threads";
import { copy as deClaudeMessageThreads } from "./de/blog-claude-message-threads";
import { copy as zhClaudeDuet } from "./zh/blog-claude-duet";
import { copy as zhTWClaudeDuet } from "./zh-TW/blog-claude-duet";
import { copy as jaClaudeDuet } from "./ja/blog-claude-duet";
import { copy as koClaudeDuet } from "./ko/blog-claude-duet";
import { copy as esClaudeDuet } from "./es/blog-claude-duet";
import { copy as ptBRClaudeDuet } from "./pt-BR/blog-claude-duet";
import { copy as frClaudeDuet } from "./fr/blog-claude-duet";
import { copy as deClaudeDuet } from "./de/blog-claude-duet";

export const aiEmployeesTranslations = {
  "zh-TW": zhTWAiEmployees,
  ja: jaAiEmployees,
  ko: koAiEmployees,
  es: esAiEmployees,
  "pt-BR": ptBRAiEmployees,
  fr: frAiEmployees,
  de: deAiEmployees,
};

export const remoteClaudeCodeTranslations = {
  "zh-TW": zhTWRemoteClaudeCode,
  ja: jaRemoteClaudeCode,
  ko: koRemoteClaudeCode,
  es: esRemoteClaudeCode,
  "pt-BR": ptBRRemoteClaudeCode,
  fr: frRemoteClaudeCode,
  de: deRemoteClaudeCode,
};

export const proactiveClaudeCodeTranslations = {
  "zh-TW": zhTWProactiveClaudeCode,
  ja: jaProactiveClaudeCode,
  ko: koProactiveClaudeCode,
  es: esProactiveClaudeCode,
  "pt-BR": ptBRProactiveClaudeCode,
  fr: frProactiveClaudeCode,
  de: deProactiveClaudeCode,
};

export const proactiveCodexTranslations = {
  "zh-TW": zhTWProactiveCodex,
  ja: jaProactiveCodex,
  ko: koProactiveCodex,
  es: esProactiveCodex,
  "pt-BR": ptBRProactiveCodex,
  fr: frProactiveCodex,
  de: deProactiveCodex,
};

export const alternativesTranslations = {
  zh: zhAlternatives,
  "zh-TW": zhTWAlternatives,
  ja: jaAlternatives,
  ko: koAlternatives,
  es: esAlternatives,
  "pt-BR": ptBRAlternatives,
  fr: frAlternatives,
  de: deAlternatives,
};

export const claudeCodeBackgroundAgentsTranslations = {
  zh: zhClaudeCodeBackgroundAgents,
  "zh-TW": zhTWClaudeCodeBackgroundAgents,
  ja: jaClaudeCodeBackgroundAgents,
  ko: koClaudeCodeBackgroundAgents,
  es: esClaudeCodeBackgroundAgents,
  "pt-BR": ptBRClaudeCodeBackgroundAgents,
  fr: frClaudeCodeBackgroundAgents,
  de: deClaudeCodeBackgroundAgents,
};

export const multipleClaudeCodeAgentsTranslations = {
  zh: zhMultipleClaudeCodeAgents,
  "zh-TW": zhTWMultipleClaudeCodeAgents,
  ja: jaMultipleClaudeCodeAgents,
  ko: koMultipleClaudeCodeAgents,
  es: esMultipleClaudeCodeAgents,
  "pt-BR": ptBRMultipleClaudeCodeAgents,
  fr: frMultipleClaudeCodeAgents,
  de: deMultipleClaudeCodeAgents,
};

export const blogIndexTranslations = {
  zh: zhBlogIndex,
  "zh-TW": zhTWBlogIndex,
  ja: jaBlogIndex,
  ko: koBlogIndex,
  es: esBlogIndex,
  "pt-BR": ptBRBlogIndex,
  fr: frBlogIndex,
  de: deBlogIndex,
};

export const chatgptDotsTranslations = {
  zh: zhChatgptDots,
  "zh-TW": zhTWChatgptDots,
  ja: jaChatgptDots,
  ko: koChatgptDots,
  es: esChatgptDots,
  "pt-BR": ptBRChatgptDots,
  fr: frChatgptDots,
  de: deChatgptDots,
};

export const deepseekSuperAgentTranslations = {
  zh: zhDeepseekSuperAgent,
  "zh-TW": zhTWDeepseekSuperAgent,
  ja: jaDeepseekSuperAgent,
  ko: koDeepseekSuperAgent,
  es: esDeepseekSuperAgent,
  "pt-BR": ptBRDeepseekSuperAgent,
  fr: frDeepseekSuperAgent,
  de: deDeepseekSuperAgent,
};

export const claudeMessageThreadsTranslations = {
  zh: zhClaudeMessageThreads,
  "zh-TW": zhTWClaudeMessageThreads,
  ja: jaClaudeMessageThreads,
  ko: koClaudeMessageThreads,
  es: esClaudeMessageThreads,
  "pt-BR": ptBRClaudeMessageThreads,
  fr: frClaudeMessageThreads,
  de: deClaudeMessageThreads,
};

export const claudeDuetTranslations = {
  zh: zhClaudeDuet,
  "zh-TW": zhTWClaudeDuet,
  ja: jaClaudeDuet,
  ko: koClaudeDuet,
  es: esClaudeDuet,
  "pt-BR": ptBRClaudeDuet,
  fr: frClaudeDuet,
  de: deClaudeDuet,
};
