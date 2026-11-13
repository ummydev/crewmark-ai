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
import { copy as zhClaudeMd } from "./zh/blog-claude-md";
import { copy as zhTWClaudeMd } from "./zh-TW/blog-claude-md";
import { copy as jaClaudeMd } from "./ja/blog-claude-md";
import { copy as koClaudeMd } from "./ko/blog-claude-md";
import { copy as esClaudeMd } from "./es/blog-claude-md";
import { copy as ptBRClaudeMd } from "./pt-BR/blog-claude-md";
import { copy as frClaudeMd } from "./fr/blog-claude-md";
import { copy as deClaudeMd } from "./de/blog-claude-md";
import { copy as zhClaudeCodeWorktree } from "./zh/blog-claude-code-worktree";
import { copy as zhTWClaudeCodeWorktree } from "./zh-TW/blog-claude-code-worktree";
import { copy as jaClaudeCodeWorktree } from "./ja/blog-claude-code-worktree";
import { copy as koClaudeCodeWorktree } from "./ko/blog-claude-code-worktree";
import { copy as esClaudeCodeWorktree } from "./es/blog-claude-code-worktree";
import { copy as ptBRClaudeCodeWorktree } from "./pt-BR/blog-claude-code-worktree";
import { copy as frClaudeCodeWorktree } from "./fr/blog-claude-code-worktree";
import { copy as deClaudeCodeWorktree } from "./de/blog-claude-code-worktree";
import { copy as zhConductorAlternatives } from "./zh/blog-conductor-alternatives";
import { copy as zhTWConductorAlternatives } from "./zh-TW/blog-conductor-alternatives";
import { copy as jaConductorAlternatives } from "./ja/blog-conductor-alternatives";
import { copy as koConductorAlternatives } from "./ko/blog-conductor-alternatives";
import { copy as esConductorAlternatives } from "./es/blog-conductor-alternatives";
import { copy as ptBRConductorAlternatives } from "./pt-BR/blog-conductor-alternatives";
import { copy as frConductorAlternatives } from "./fr/blog-conductor-alternatives";
import { copy as deConductorAlternatives } from "./de/blog-conductor-alternatives";
import { copy as zhClaudeCodeSlashCommands } from "./zh/blog-claude-code-slash-commands";
import { copy as zhTWClaudeCodeSlashCommands } from "./zh-TW/blog-claude-code-slash-commands";
import { copy as jaClaudeCodeSlashCommands } from "./ja/blog-claude-code-slash-commands";
import { copy as koClaudeCodeSlashCommands } from "./ko/blog-claude-code-slash-commands";
import { copy as esClaudeCodeSlashCommands } from "./es/blog-claude-code-slash-commands";
import { copy as ptBRClaudeCodeSlashCommands } from "./pt-BR/blog-claude-code-slash-commands";
import { copy as frClaudeCodeSlashCommands } from "./fr/blog-claude-code-slash-commands";
import { copy as deClaudeCodeSlashCommands } from "./de/blog-claude-code-slash-commands";
import { copy as zhClaudeCodeSkills } from "./zh/blog-claude-code-skills";
import { copy as zhTWClaudeCodeSkills } from "./zh-TW/blog-claude-code-skills";
import { copy as jaClaudeCodeSkills } from "./ja/blog-claude-code-skills";
import { copy as koClaudeCodeSkills } from "./ko/blog-claude-code-skills";
import { copy as esClaudeCodeSkills } from "./es/blog-claude-code-skills";
import { copy as ptBRClaudeCodeSkills } from "./pt-BR/blog-claude-code-skills";
import { copy as frClaudeCodeSkills } from "./fr/blog-claude-code-skills";
import { copy as deClaudeCodeSkills } from "./de/blog-claude-code-skills";
import { copy as zhClaudeCodePlanMode } from "./zh/blog-claude-code-plan-mode";
import { copy as zhTWClaudeCodePlanMode } from "./zh-TW/blog-claude-code-plan-mode";
import { copy as jaClaudeCodePlanMode } from "./ja/blog-claude-code-plan-mode";
import { copy as koClaudeCodePlanMode } from "./ko/blog-claude-code-plan-mode";
import { copy as esClaudeCodePlanMode } from "./es/blog-claude-code-plan-mode";
import { copy as ptBRClaudeCodePlanMode } from "./pt-BR/blog-claude-code-plan-mode";
import { copy as frClaudeCodePlanMode } from "./fr/blog-claude-code-plan-mode";
import { copy as deClaudeCodePlanMode } from "./de/blog-claude-code-plan-mode";
import { copy as zhBestAiEmployeePlatforms } from "./zh/blog-best-ai-employee-platforms";
import { copy as zhTWBestAiEmployeePlatforms } from "./zh-TW/blog-best-ai-employee-platforms";
import { copy as jaBestAiEmployeePlatforms } from "./ja/blog-best-ai-employee-platforms";
import { copy as koBestAiEmployeePlatforms } from "./ko/blog-best-ai-employee-platforms";
import { copy as esBestAiEmployeePlatforms } from "./es/blog-best-ai-employee-platforms";
import { copy as ptBRBestAiEmployeePlatforms } from "./pt-BR/blog-best-ai-employee-platforms";
import { copy as frBestAiEmployeePlatforms } from "./fr/blog-best-ai-employee-platforms";
import { copy as deBestAiEmployeePlatforms } from "./de/blog-best-ai-employee-platforms";
import { copy as zhClaudeInferenceHooks } from "./zh/blog-claude-inference-hooks";
import { copy as zhTWClaudeInferenceHooks } from "./zh-TW/blog-claude-inference-hooks";
import { copy as jaClaudeInferenceHooks } from "./ja/blog-claude-inference-hooks";
import { copy as koClaudeInferenceHooks } from "./ko/blog-claude-inference-hooks";
import { copy as esClaudeInferenceHooks } from "./es/blog-claude-inference-hooks";
import { copy as ptBRClaudeInferenceHooks } from "./pt-BR/blog-claude-inference-hooks";
import { copy as frClaudeInferenceHooks } from "./fr/blog-claude-inference-hooks";
import { copy as deClaudeInferenceHooks } from "./de/blog-claude-inference-hooks";
import { copy as zhClaudeCodeOrchestrationTools } from "./zh/blog-claude-code-orchestration-tools";
import { copy as zhTWClaudeCodeOrchestrationTools } from "./zh-TW/blog-claude-code-orchestration-tools";
import { copy as jaClaudeCodeOrchestrationTools } from "./ja/blog-claude-code-orchestration-tools";
import { copy as koClaudeCodeOrchestrationTools } from "./ko/blog-claude-code-orchestration-tools";
import { copy as esClaudeCodeOrchestrationTools } from "./es/blog-claude-code-orchestration-tools";
import { copy as ptBRClaudeCodeOrchestrationTools } from "./pt-BR/blog-claude-code-orchestration-tools";
import { copy as frClaudeCodeOrchestrationTools } from "./fr/blog-claude-code-orchestration-tools";
import { copy as deClaudeCodeOrchestrationTools } from "./de/blog-claude-code-orchestration-tools";
import { copy as zhReduceClaudeCodeTokenUsage } from "./zh/blog-reduce-claude-code-token-usage";
import { copy as zhTWReduceClaudeCodeTokenUsage } from "./zh-TW/blog-reduce-claude-code-token-usage";
import { copy as jaReduceClaudeCodeTokenUsage } from "./ja/blog-reduce-claude-code-token-usage";
import { copy as koReduceClaudeCodeTokenUsage } from "./ko/blog-reduce-claude-code-token-usage";
import { copy as esReduceClaudeCodeTokenUsage } from "./es/blog-reduce-claude-code-token-usage";
import { copy as ptBRReduceClaudeCodeTokenUsage } from "./pt-BR/blog-reduce-claude-code-token-usage";
import { copy as frReduceClaudeCodeTokenUsage } from "./fr/blog-reduce-claude-code-token-usage";
import { copy as deReduceClaudeCodeTokenUsage } from "./de/blog-reduce-claude-code-token-usage";
import { copy as zhClaudeCodeHooks } from "./zh/blog-claude-code-hooks";
import { copy as zhTWClaudeCodeHooks } from "./zh-TW/blog-claude-code-hooks";
import { copy as jaClaudeCodeHooks } from "./ja/blog-claude-code-hooks";
import { copy as koClaudeCodeHooks } from "./ko/blog-claude-code-hooks";
import { copy as esClaudeCodeHooks } from "./es/blog-claude-code-hooks";
import { copy as ptBRClaudeCodeHooks } from "./pt-BR/blog-claude-code-hooks";
import { copy as frClaudeCodeHooks } from "./fr/blog-claude-code-hooks";
import { copy as deClaudeCodeHooks } from "./de/blog-claude-code-hooks";
import { copy as zhClaudeCodeMcp } from "./zh/blog-claude-code-mcp";
import { copy as zhTWClaudeCodeMcp } from "./zh-TW/blog-claude-code-mcp";
import { copy as jaClaudeCodeMcp } from "./ja/blog-claude-code-mcp";
import { copy as koClaudeCodeMcp } from "./ko/blog-claude-code-mcp";
import { copy as esClaudeCodeMcp } from "./es/blog-claude-code-mcp";
import { copy as ptBRClaudeCodeMcp } from "./pt-BR/blog-claude-code-mcp";
import { copy as frClaudeCodeMcp } from "./fr/blog-claude-code-mcp";
import { copy as deClaudeCodeMcp } from "./de/blog-claude-code-mcp";
import { copy as zhClaudeCodeVsCursor } from "./zh/blog-claude-code-vs-cursor";
import { copy as zhTWClaudeCodeVsCursor } from "./zh-TW/blog-claude-code-vs-cursor";
import { copy as jaClaudeCodeVsCursor } from "./ja/blog-claude-code-vs-cursor";
import { copy as koClaudeCodeVsCursor } from "./ko/blog-claude-code-vs-cursor";
import { copy as esClaudeCodeVsCursor } from "./es/blog-claude-code-vs-cursor";
import { copy as ptBRClaudeCodeVsCursor } from "./pt-BR/blog-claude-code-vs-cursor";
import { copy as frClaudeCodeVsCursor } from "./fr/blog-claude-code-vs-cursor";
import { copy as deClaudeCodeVsCursor } from "./de/blog-claude-code-vs-cursor";
import { copy as zhCursorAlternatives } from "./zh/blog-cursor-alternatives";
import { copy as zhTWCursorAlternatives } from "./zh-TW/blog-cursor-alternatives";
import { copy as jaCursorAlternatives } from "./ja/blog-cursor-alternatives";
import { copy as koCursorAlternatives } from "./ko/blog-cursor-alternatives";
import { copy as esCursorAlternatives } from "./es/blog-cursor-alternatives";
import { copy as ptBRCursorAlternatives } from "./pt-BR/blog-cursor-alternatives";
import { copy as frCursorAlternatives } from "./fr/blog-cursor-alternatives";
import { copy as deCursorAlternatives } from "./de/blog-cursor-alternatives";
import { copy as zhClaudeCodeVsCodex } from "./zh/blog-claude-code-vs-codex";
import { copy as zhTWClaudeCodeVsCodex } from "./zh-TW/blog-claude-code-vs-codex";
import { copy as jaClaudeCodeVsCodex } from "./ja/blog-claude-code-vs-codex";
import { copy as koClaudeCodeVsCodex } from "./ko/blog-claude-code-vs-codex";
import { copy as esClaudeCodeVsCodex } from "./es/blog-claude-code-vs-codex";
import { copy as ptBRClaudeCodeVsCodex } from "./pt-BR/blog-claude-code-vs-codex";
import { copy as frClaudeCodeVsCodex } from "./fr/blog-claude-code-vs-codex";
import { copy as deClaudeCodeVsCodex } from "./de/blog-claude-code-vs-codex";

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

export const claudeMdTranslations = {
  zh: zhClaudeMd,
  "zh-TW": zhTWClaudeMd,
  ja: jaClaudeMd,
  ko: koClaudeMd,
  es: esClaudeMd,
  "pt-BR": ptBRClaudeMd,
  fr: frClaudeMd,
  de: deClaudeMd,
};

export const claudeCodeVsCodexTranslations = {
  zh: zhClaudeCodeVsCodex,
  "zh-TW": zhTWClaudeCodeVsCodex,
  ja: jaClaudeCodeVsCodex,
  ko: koClaudeCodeVsCodex,
  es: esClaudeCodeVsCodex,
  "pt-BR": ptBRClaudeCodeVsCodex,
  fr: frClaudeCodeVsCodex,
  de: deClaudeCodeVsCodex,
};

export const claudeCodeWorktreeTranslations = {
  zh: zhClaudeCodeWorktree,
  "zh-TW": zhTWClaudeCodeWorktree,
  ja: jaClaudeCodeWorktree,
  ko: koClaudeCodeWorktree,
  es: esClaudeCodeWorktree,
  "pt-BR": ptBRClaudeCodeWorktree,
  fr: frClaudeCodeWorktree,
  de: deClaudeCodeWorktree,
};

export const conductorAlternativesTranslations = {
  zh: zhConductorAlternatives,
  "zh-TW": zhTWConductorAlternatives,
  ja: jaConductorAlternatives,
  ko: koConductorAlternatives,
  es: esConductorAlternatives,
  "pt-BR": ptBRConductorAlternatives,
  fr: frConductorAlternatives,
  de: deConductorAlternatives,
};

export const claudeCodeSlashCommandsTranslations = {
  zh: zhClaudeCodeSlashCommands,
  "zh-TW": zhTWClaudeCodeSlashCommands,
  ja: jaClaudeCodeSlashCommands,
  ko: koClaudeCodeSlashCommands,
  es: esClaudeCodeSlashCommands,
  "pt-BR": ptBRClaudeCodeSlashCommands,
  fr: frClaudeCodeSlashCommands,
  de: deClaudeCodeSlashCommands,
};

export const claudeCodeSkillsTranslations = {
  zh: zhClaudeCodeSkills,
  "zh-TW": zhTWClaudeCodeSkills,
  ja: jaClaudeCodeSkills,
  ko: koClaudeCodeSkills,
  es: esClaudeCodeSkills,
  "pt-BR": ptBRClaudeCodeSkills,
  fr: frClaudeCodeSkills,
  de: deClaudeCodeSkills,
};

export const claudeCodePlanModeTranslations = {
  zh: zhClaudeCodePlanMode,
  "zh-TW": zhTWClaudeCodePlanMode,
  ja: jaClaudeCodePlanMode,
  ko: koClaudeCodePlanMode,
  es: esClaudeCodePlanMode,
  "pt-BR": ptBRClaudeCodePlanMode,
  fr: frClaudeCodePlanMode,
  de: deClaudeCodePlanMode,
};

export const bestAiEmployeePlatformsTranslations = {
  zh: zhBestAiEmployeePlatforms,
  "zh-TW": zhTWBestAiEmployeePlatforms,
  ja: jaBestAiEmployeePlatforms,
  ko: koBestAiEmployeePlatforms,
  es: esBestAiEmployeePlatforms,
  "pt-BR": ptBRBestAiEmployeePlatforms,
  fr: frBestAiEmployeePlatforms,
  de: deBestAiEmployeePlatforms,
};

export const claudeInferenceHooksTranslations = {
  zh: zhClaudeInferenceHooks,
  "zh-TW": zhTWClaudeInferenceHooks,
  ja: jaClaudeInferenceHooks,
  ko: koClaudeInferenceHooks,
  es: esClaudeInferenceHooks,
  "pt-BR": ptBRClaudeInferenceHooks,
  fr: frClaudeInferenceHooks,
  de: deClaudeInferenceHooks,
};

export const claudeCodeOrchestrationToolsTranslations = {
  zh: zhClaudeCodeOrchestrationTools,
  "zh-TW": zhTWClaudeCodeOrchestrationTools,
  ja: jaClaudeCodeOrchestrationTools,
  ko: koClaudeCodeOrchestrationTools,
  es: esClaudeCodeOrchestrationTools,
  "pt-BR": ptBRClaudeCodeOrchestrationTools,
  fr: frClaudeCodeOrchestrationTools,
  de: deClaudeCodeOrchestrationTools,
};

export const reduceClaudeCodeTokenUsageTranslations = {
  zh: zhReduceClaudeCodeTokenUsage,
  "zh-TW": zhTWReduceClaudeCodeTokenUsage,
  ja: jaReduceClaudeCodeTokenUsage,
  ko: koReduceClaudeCodeTokenUsage,
  es: esReduceClaudeCodeTokenUsage,
  "pt-BR": ptBRReduceClaudeCodeTokenUsage,
  fr: frReduceClaudeCodeTokenUsage,
  de: deReduceClaudeCodeTokenUsage,
};

export const claudeCodeHooksTranslations = {
  zh: zhClaudeCodeHooks,
  "zh-TW": zhTWClaudeCodeHooks,
  ja: jaClaudeCodeHooks,
  ko: koClaudeCodeHooks,
  es: esClaudeCodeHooks,
  "pt-BR": ptBRClaudeCodeHooks,
  fr: frClaudeCodeHooks,
  de: deClaudeCodeHooks,
};

export const claudeCodeMcpTranslations = {
  zh: zhClaudeCodeMcp,
  "zh-TW": zhTWClaudeCodeMcp,
  ja: jaClaudeCodeMcp,
  ko: koClaudeCodeMcp,
  es: esClaudeCodeMcp,
  "pt-BR": ptBRClaudeCodeMcp,
  fr: frClaudeCodeMcp,
  de: deClaudeCodeMcp,
};

export const claudeCodeVsCursorTranslations = {
  zh: zhClaudeCodeVsCursor,
  "zh-TW": zhTWClaudeCodeVsCursor,
  ja: jaClaudeCodeVsCursor,
  ko: koClaudeCodeVsCursor,
  es: esClaudeCodeVsCursor,
  "pt-BR": ptBRClaudeCodeVsCursor,
  fr: frClaudeCodeVsCursor,
  de: deClaudeCodeVsCursor,
};

export const cursorAlternativesTranslations = {
  zh: zhCursorAlternatives,
  "zh-TW": zhTWCursorAlternatives,
  ja: jaCursorAlternatives,
  ko: koCursorAlternatives,
  es: esCursorAlternatives,
  "pt-BR": ptBRCursorAlternatives,
  fr: frCursorAlternatives,
  de: deCursorAlternatives,
};
