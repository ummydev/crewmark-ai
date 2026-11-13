import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import type { PostSlug } from "@/i18n/blog";
import { bestAiEmployeePlatforms } from "./best-ai-employee-platforms";
import { chatgptDots } from "./chatgpt-dots";
import { claudeCodeBackgroundAgents } from "./claude-code-background-agents";
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
import { conductorAlternatives } from "./conductor-alternatives";
import { cursorAlternatives } from "./cursor-alternatives";
import { deepseekSuperAgent } from "./deepseek-super-agent";
import { multipleClaudeCodeAgents } from "./multiple-claude-code-agents";
import { reduceClaudeCodeTokenUsage } from "./reduce-claude-code-token-usage";
import {
  bestAiEmployeePlatformsTranslations,
  blogIndexTranslations,
  chatgptDotsTranslations,
  claudeCodeBackgroundAgentsTranslations,
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
  conductorAlternativesTranslations,
  cursorAlternativesTranslations,
  deepseekSuperAgentTranslations,
  multipleClaudeCodeAgentsTranslations,
  reduceClaudeCodeTokenUsageTranslations,
} from "../i18n";

// The copy of every blog post (the list of posts and their languages is i18n/blog.ts), and of the blog index.
// Each post answers one search question with steps that work; see docs/seo/launch-checklist.md before publishing.

export const postCopy: Record<PostSlug, Partial<Record<Locale, GuideCopy>>> = {
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
      title: "Crewmark Blog: Claude Code and Codex Tutorials for AI Agents | Crewmark",
      description:
        "Hands-on tutorials for running Claude Code and Codex as agents: headless runs, schedules, background work, multiple agents and goals.",
    },
    kicker: "Blog",
    title: "Tutorials for running AI agents",
    lead: "Practical guides to Claude Code and Codex: how to run them headless, on a schedule and in the background, and how to give them ongoing work. Every post has steps you can run.",
    read: "Read the guide",
  },
};
