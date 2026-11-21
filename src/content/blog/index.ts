import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import type { PostSlug } from "@/i18n/blog";
import { aiSeoAgent } from "./ai-seo-agent";
import { bestAiEmployeePlatforms } from "./best-ai-employee-platforms";
import { chatgptDots } from "./chatgpt-dots";
import { claudeCodeBackgroundAgents } from "./claude-code-background-agents";
import { claudeCodeDeepseek } from "./claude-code-deepseek";
import { claudeCodeHooks } from "./claude-code-hooks";
import { claudeCodeMcp } from "./claude-code-mcp";
import { claudeCodeOrchestrationTools } from "./claude-code-orchestration-tools";
import { claudeCodePlanMode } from "./claude-code-plan-mode";
import { claudeCodeSkills } from "./claude-code-skills";
import { claudeCodeSlashCommands } from "./claude-code-slash-commands";
import { claudeCodeVsCodex } from "./claude-code-vs-codex";
import { claudeCodeVsCursor } from "./claude-code-vs-cursor";
import { claudeCodeWorktree } from "./claude-code-worktree";
import { claudeDuet } from "./claude-duet";
import { claudeInferenceHooks } from "./claude-inference-hooks";
import { claudeMd } from "./claude-md";
import { claudeMessageThreads } from "./claude-message-threads";
import { codexAgentsMd } from "./codex-agents-md";
import { conductorAlternatives } from "./conductor-alternatives";
import { cursorAlternatives } from "./cursor-alternatives";
import { deepseekHarness } from "./deepseek-harness";
import { deepseekSuperAgent } from "./deepseek-super-agent";
import { deepseekV41Flash } from "./deepseek-v4-1-flash";
import { githubCopilotSlack } from "./github-copilot-slack";
import { vibeKanbanAlternatives } from "./vibe-kanban-alternatives";
import { claudeCodeKanban } from "./claude-code-kanban";
import { claudeSquadAlternatives } from "./claude-squad-alternatives";
import { openclawAlternatives } from "./openclaw-alternatives";
import { hermesAgentVsOpenclaw } from "./hermes-agent-vs-openclaw";
import { claudeCodeAgentTeams } from "./claude-code-agent-teams";
import { runClaudeCode247 } from "./run-claude-code-24-7";
import { codexLongRunningTasks } from "./codex-long-running-tasks";
import { codexRemoteControl } from "./codex-remote-control";
import { claudeCodeChannels } from "./claude-code-channels";
import { devinAlternatives } from "./devin-alternatives";
import { opencodeAlternatives } from "./opencode-alternatives";
import { aiderAlternatives } from "./aider-alternatives";
import { claudeFable52 } from "./claude-fable-5-2";
import { opusMotionGraphics } from "./opus-5-5-motion-graphics";
import { codexMacMini } from "./codex-mac-mini";
import { codexVps } from "./codex-vps";
import { codexWindows } from "./codex-windows";
import { codexLinux } from "./codex-linux";
import { claudeCodeMacMini } from "./claude-code-mac-mini";
import { claudeCodeVps } from "./claude-code-vps";
import { openclawReviews } from "./openclaw-reviews";
import { grokBotReviews } from "./grok-bot-reviews";
import { aiCoworker } from "./ai-coworker";
import { gemini4Hydrogen } from "./gemini-4-hydrogen";
import { multiAgentHarness } from "./multi-agent-harness";
import { claudeFable52Games } from "./claude-fable-5-2-games";
import { claudeFable52Videos } from "./claude-fable-5-2-videos";
import { multipleClaudeCodeAgents } from "./multiple-claude-code-agents";
import { reduceClaudeCodeTokenUsage } from "./reduce-claude-code-token-usage";
import { superagent } from "./superagent";
import {
  aiSeoAgentTranslations,
  bestAiEmployeePlatformsTranslations,
  blogIndexTranslations,
  chatgptDotsTranslations,
  claudeCodeBackgroundAgentsTranslations,
  claudeCodeDeepseekTranslations,
  claudeCodeHooksTranslations,
  claudeCodeMcpTranslations,
  claudeCodeOrchestrationToolsTranslations,
  claudeCodePlanModeTranslations,
  claudeCodeSkillsTranslations,
  claudeCodeSlashCommandsTranslations,
  claudeCodeVsCodexTranslations,
  claudeCodeVsCursorTranslations,
  claudeCodeWorktreeTranslations,
  claudeDuetTranslations,
  claudeInferenceHooksTranslations,
  claudeMdTranslations,
  claudeMessageThreadsTranslations,
  codexAgentsMdTranslations,
  conductorAlternativesTranslations,
  cursorAlternativesTranslations,
  deepseekHarnessTranslations,
  deepseekSuperAgentTranslations,
  deepseekV41FlashTranslations,
  githubCopilotSlackTranslations,
  vibeKanbanAlternativesTranslations,
  claudeCodeKanbanTranslations,
  claudeSquadAlternativesTranslations,
  openclawAlternativesTranslations,
  hermesAgentVsOpenclawTranslations,
  claudeCodeAgentTeamsTranslations,
  runClaudeCode247Translations,
  codexLongRunningTasksTranslations,
  codexRemoteControlTranslations,
  claudeCodeChannelsTranslations,
  devinAlternativesTranslations,
  opencodeAlternativesTranslations,
  aiderAlternativesTranslations,
  claudeFable52Translations,
  opusMotionGraphicsTranslations,
  codexMacMiniTranslations,
  codexVpsTranslations,
  codexWindowsTranslations,
  codexLinuxTranslations,
  claudeCodeMacMiniTranslations,
  claudeCodeVpsTranslations,
  openclawReviewsTranslations,
  grokBotReviewsTranslations,
  aiCoworkerTranslations,
  gemini4HydrogenTranslations,
  multiAgentHarnessTranslations,
  claudeFable52GamesTranslations,
  claudeFable52VideosTranslations,
  multipleClaudeCodeAgentsTranslations,
  reduceClaudeCodeTokenUsageTranslations,
  superagentTranslations,
} from "../i18n";

// The copy of every blog post (the list of posts and their languages is i18n/blog.ts), and of the blog index.
// Each post answers one search question with steps that work; see docs/seo/launch-checklist.md before publishing.

export const postCopy: Record<PostSlug, Partial<Record<Locale, GuideCopy>>> = {
  "github-copilot-slack": { ...githubCopilotSlackTranslations, ...githubCopilotSlack },
  "vibe-kanban-alternatives": { ...vibeKanbanAlternativesTranslations, ...vibeKanbanAlternatives },
  "claude-code-kanban": { ...claudeCodeKanbanTranslations, ...claudeCodeKanban },
  "claude-squad-alternatives": { ...claudeSquadAlternativesTranslations, ...claudeSquadAlternatives },
  "openclaw-alternatives": { ...openclawAlternativesTranslations, ...openclawAlternatives },
  "hermes-agent-vs-openclaw": { ...hermesAgentVsOpenclawTranslations, ...hermesAgentVsOpenclaw },
  "claude-code-agent-teams": { ...claudeCodeAgentTeamsTranslations, ...claudeCodeAgentTeams },
  "run-claude-code-24-7": { ...runClaudeCode247Translations, ...runClaudeCode247 },
  "codex-long-running-tasks": { ...codexLongRunningTasksTranslations, ...codexLongRunningTasks },
  "codex-remote-control": { ...codexRemoteControlTranslations, ...codexRemoteControl },
  "claude-code-channels": { ...claudeCodeChannelsTranslations, ...claudeCodeChannels },
  "devin-alternatives": { ...devinAlternativesTranslations, ...devinAlternatives },
  "opencode-alternatives": { ...opencodeAlternativesTranslations, ...opencodeAlternatives },
  "aider-alternatives": { ...aiderAlternativesTranslations, ...aiderAlternatives },
  "claude-fable-5-2": { ...claudeFable52Translations, ...claudeFable52 },
  "opus-5-5-motion-graphics": { ...opusMotionGraphicsTranslations, ...opusMotionGraphics },
  "codex-mac-mini": { ...codexMacMiniTranslations, ...codexMacMini },
  "codex-vps": { ...codexVpsTranslations, ...codexVps },
  "codex-windows": { ...codexWindowsTranslations, ...codexWindows },
  "codex-linux": { ...codexLinuxTranslations, ...codexLinux },
  "claude-code-mac-mini": { ...claudeCodeMacMiniTranslations, ...claudeCodeMacMini },
  "claude-code-vps": { ...claudeCodeVpsTranslations, ...claudeCodeVps },
  "openclaw-reviews": { ...openclawReviewsTranslations, ...openclawReviews },
  "grok-bot-reviews": { ...grokBotReviewsTranslations, ...grokBotReviews },
  "ai-coworker": { ...aiCoworkerTranslations, ...aiCoworker },
  "gemini-4-hydrogen": { ...gemini4HydrogenTranslations, ...gemini4Hydrogen },
  "multi-agent-harness": { ...multiAgentHarnessTranslations, ...multiAgentHarness },
  "claude-fable-5-2-games": { ...claudeFable52GamesTranslations, ...claudeFable52Games },
  "claude-fable-5-2-videos": { ...claudeFable52VideosTranslations, ...claudeFable52Videos },
  "ai-seo-agent": { ...aiSeoAgentTranslations, ...aiSeoAgent },
  "deepseek-v4-1-flash": { ...deepseekV41FlashTranslations, ...deepseekV41Flash },
  "claude-code-deepseek": { ...claudeCodeDeepseekTranslations, ...claudeCodeDeepseek },
  "deepseek-harness": { ...deepseekHarnessTranslations, ...deepseekHarness },
  superagent: { ...superagentTranslations, ...superagent },
  "codex-agents-md": { ...codexAgentsMdTranslations, ...codexAgentsMd },
  "cursor-alternatives": { ...cursorAlternativesTranslations, ...cursorAlternatives },
  "claude-code-vs-cursor": { ...claudeCodeVsCursorTranslations, ...claudeCodeVsCursor },
  "claude-code-mcp": { ...claudeCodeMcpTranslations, ...claudeCodeMcp },
  "claude-code-hooks": { ...claudeCodeHooksTranslations, ...claudeCodeHooks },
  "reduce-claude-code-token-usage": { ...reduceClaudeCodeTokenUsageTranslations, ...reduceClaudeCodeTokenUsage },
  "claude-code-orchestration-tools": { ...claudeCodeOrchestrationToolsTranslations, ...claudeCodeOrchestrationTools },
  "claude-inference-hooks": { ...claudeInferenceHooksTranslations, ...claudeInferenceHooks },
  "best-ai-employee-platforms": { ...bestAiEmployeePlatformsTranslations, ...bestAiEmployeePlatforms },
  "claude-code-plan-mode": { ...claudeCodePlanModeTranslations, ...claudeCodePlanMode },
  "claude-code-skills": { ...claudeCodeSkillsTranslations, ...claudeCodeSkills },
  "claude-code-slash-commands": { ...claudeCodeSlashCommandsTranslations, ...claudeCodeSlashCommands },
  "conductor-alternatives": { ...conductorAlternativesTranslations, ...conductorAlternatives },
  "claude-code-worktree": { ...claudeCodeWorktreeTranslations, ...claudeCodeWorktree },
  "claude-code-vs-codex": { ...claudeCodeVsCodexTranslations, ...claudeCodeVsCodex },
  "claude-md": { ...claudeMdTranslations, ...claudeMd },
  "claude-duet": { ...claudeDuetTranslations, ...claudeDuet },
  "claude-message-threads": { ...claudeMessageThreadsTranslations, ...claudeMessageThreads },
  "deepseek-super-agent": { ...deepseekSuperAgentTranslations, ...deepseekSuperAgent },
  "chatgpt-dots": { ...chatgptDotsTranslations, ...chatgptDots },
  "multiple-claude-code-agents": { ...multipleClaudeCodeAgentsTranslations, ...multipleClaudeCodeAgents },
  "claude-code-background-agents": { ...claudeCodeBackgroundAgentsTranslations, ...claudeCodeBackgroundAgents },
};

export type BlogIndexCopy = {
  meta: { title: string; description: string };
  kicker: string;
  title: string;
  lead: string;
  read: string;
};

export const blogIndex: Partial<Record<Locale, BlogIndexCopy>> = {
  ...blogIndexTranslations,
  en: {
    meta: {
      title: "Crewmark AI Blog: Claude Code and Codex Tutorials",
      description:
        "Hands-on tutorials for running Claude Code and Codex as agents: headless runs, schedules, background work, multiple agents and goals.",
    },
    kicker: "Blog",
    title: "Tutorials for running AI agents",
    lead: "Practical guides to Claude Code and Codex: how to run them headless, on a schedule and in the background, and how to give them ongoing work. Every post has steps you can run.",
    read: "Read the guide",
  },
};
