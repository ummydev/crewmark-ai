import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/multiple-claude-code-agents, for "multiple claude code agents", "claude code multi agent", "claude code
// parallel agents", "claude code subagents" and "claude code worktrees" (docs/seo/keywords.md). Facts come from
// Anthropic's Claude Code docs at code.claude.com/docs (sub-agents, worktrees, agent-teams, agent-view, desktop,
// claude-code-on-the-web, costs, agents) as of `checked`. Check again when editing.

const docs = "https://code.claude.com/docs/en/worktrees";

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const multipleClaudeCodeAgents: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Multiple Claude Code Agents: Subagents, Worktrees, Teams",
      description:
        "Run several Claude Code agents at once: subagents, parallel sessions in git worktrees, background sessions with --bg, and experimental agent teams, without edit conflicts.",
    },
    breadcrumb: "Multiple Claude Code agents",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-02" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "How to run multiple Claude Code agents at once",
      lead: "Claude Code can work on several things at the same time, in four different ways: subagents inside one conversation, separate sessions in their own git worktrees, background sessions you start with --bg, and experimental agent teams that message each other. This guide shows how to set up each one, which to pick, and how to keep parallel agents from overwriting each other's work.",
      cta: "Get started",
      secondary: "Jump to worktrees",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        title: "Four ways to run Claude Code agents in parallel",
        headers: ["", "What runs in parallel", "Separate files?", "Best for"],
        rows: [
          ["Subagents", "Workers inside one conversation, each with its own context", "No, unless set to `isolation: worktree`", "Research, reviews and side tasks that report back"],
          ["Worktree sessions", "Full sessions, each in its own git worktree", "Yes, a branch each", "Several features or fixes at once"],
          ["Background sessions", "Sessions started with `claude --bg`, managed in agent view", "Yes, a worktree each by default", "Fire off tasks now, check later"],
          ["Agent teams", "A lead session plus teammates sharing a task list", "No: split files between teammates", "Work that needs agents to talk to each other"],
        ],
      },
      {
        kind: "steps",
        title: "Subagents: parallel helpers inside one session",
        text: [
          "A subagent has its own context window, system prompt and tools. It doesn't see your conversation, and only its summary comes back, which keeps the main session's context small. Claude Code ships with built-in ones like Explore (read-only) and Plan, and you can add your own.",
        ],
        steps: [
          {
            title: "Define a subagent",
            text: "Create a Markdown file in `.claude/agents/` (shared with the project) or `~/.claude/agents/` (just you). Only `name` and `description` are required; `tools` limits what it can use and `model` picks the model.",
            code: subagent,
          },
          {
            title: "Let Claude run several at once",
            text: "Ask for the work in parallel, e.g. “review the auth, billing and search modules in parallel.” Subagents Claude spawns start in the background by default, up to 20 at a time, and report back when they finish. Type `/tasks` to see them.",
          },
          {
            title: "Give file-editing subagents their own worktree",
            text: "Add `isolation: worktree` to the subagent's frontmatter, or ask Claude to use worktrees for its agents. Each then edits a temporary copy of the repo, which is removed if it made no changes.",
          },
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Run parallel Claude Code sessions in git worktrees",
        text: [
          "For every option, setting and fix, see the full [Claude Code worktree guide](/blog/claude-code-worktree).",
        ],
        steps: [
          {
            title: "Ignore the worktrees folder",
            text: "Claude Code creates worktrees in `.claude/worktrees/` at the repo root. The repo needs at least one commit.",
            code: 'echo ".claude/worktrees/" >> .gitignore',
          },
          {
            title: "Start one session per task",
            text: "In each terminal, run `claude --worktree` (or `-w`) with a different name. Each gets its own folder and a branch named `worktree-<name>`, based on the default branch.",
            code: "# terminal 1\nclaude --worktree feature-auth\n\n# terminal 2\nclaude --worktree bugfix-login",
          },
          {
            title: "Copy untracked files you need",
            text: "A new worktree has only tracked files. List files like `.env` in a `.worktreeinclude` file (gitignore syntax) and Claude Code copies them in.",
            code: ".env\n.env.local",
          },
          {
            title: "Merge and clean up",
            text: "When a session ends, a worktree without changes is removed with its branch; one with changes asks whether to keep it. Merge the branches as you would any other. Headless `-p` runs don't prompt, so remove those with `git worktree remove`.",
          },
          {
            title: "Or use the desktop app",
            text: "Press Cmd+N (Ctrl+N on Windows) for a new session and turn on Worktree before starting it; it's off by default. Sessions can sit side by side in split view.",
          },
        ],
        source: { label: "Source: Anthropic's worktrees docs", href: docs },
      },
      {
        kind: "text",
        title: "Background sessions with --bg and agent view",
        text: [
          "`claude --bg \"<prompt>\"` starts a session in the background and returns right away, so you can start several in a row. Each one moves into its own worktree before it edits anything. `claude agents` lists them; `claude logs <id>`, `claude attach <id>` and `claude stop <id>` manage one.",
          "They keep running after you close the terminal, but not after the computer shuts down. Agent view is a research preview. For more on unattended runs, see [how to run Claude Code background agents](/blog/claude-code-background-agents).",
        ],
      },
      {
        kind: "text",
        title: "Agent teams: agents that talk to each other",
        text: [
          "Agent teams are experimental and off by default. Turn them on with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in your shell or in the `env` block of settings.json, then ask Claude to “spawn three teammates” for a task. Teammates share a task list and message each other; they show in the terminal, or in split panes with tmux or iTerm2.",
        ],
        points: [
          "Interactive sessions only: `-p` and the Agent SDK don't spawn teammates.",
          "One team per session, no nested teams, and in-process teammates aren't restored by `/resume`.",
          "Teammates share one checkout, so give each a different set of files.",
          "They cost far more: Anthropic's docs put a team at roughly 7 times the tokens of a single session when teammates run in plan mode.",
        ],
      },
      {
        kind: "text",
        title: "Keep parallel agents from overwriting each other",
        points: [
          "If two agents might touch the same files, give each its own worktree. A session in a worktree can't edit the main checkout, and neither can its subagents.",
          "In an agent team, split the work by files: two teammates editing one file overwrite each other.",
          "Every subagent and session draws on the same usage limits, so running several multiplies usage. Use `model: haiku` for simple subagents.",
          "Agents that run the same tests or dev server can collide on ports; give each its own port.",
        ],
      },
      {
        kind: "steps",
        kicker: "With Crewmark",
        title: "Turn parallel agents into a team with jobs",
        text: [
          "Worktrees and agent teams split one task you're watching. Crewmark runs several Claude Code or Codex sessions as employees with their own roles, goals and working hours, and gives them work on one board.",
        ],
        steps: [
          {
            title: "One employee per role",
            text: "An SEO specialist, a software engineer and a UI designer each live in their own conversation, with their own instructions and goal.",
          },
          {
            title: "One board for all of them",
            text: "Assign issues to whichever employee fits. Each wakes on its heartbeat, takes its next issue and comments as it goes, so you see who's doing what.",
          },
          {
            title: "They ask you, not each other",
            text: "When an employee needs a review or a permission, it messages you and moves on. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run parallel Claude Code sessions in git worktrees" },
    mid: {
      title: "Running several agents every day?",
      text: "Crewmark gives each Claude Code session a role, a goal and working hours, and puts all their work on one board.",
      button: "Get started",
    },
    faq: {
      title: "Multiple Claude Code agents FAQ",
      items: [
        {
          q: "Can I run multiple Claude Code agents at the same time?",
          a: "Yes. Claude can run subagents in parallel inside one session, you can run several sessions in separate git worktrees with `claude --worktree`, start background sessions with `claude --bg`, or try the experimental agent teams.",
        },
        {
          q: "What's the difference between subagents and agent teams?",
          a: "Subagents do a task and report a summary back to the session that started them. Agent teams are separate Claude Code instances that share a task list and message each other directly; they're experimental and cost more tokens.",
        },
        {
          q: "How many subagents can run at once?",
          a: "Up to 20 at a time by default. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` changes the limit. Subagents can also start their own, up to three layers deep by default.",
        },
        {
          q: "How do I stop parallel agents from editing the same files?",
          a: "Put each in its own git worktree: `claude --worktree <name>` for sessions, `isolation: worktree` for subagents. Background sessions started with `--bg` get one automatically. Agent teams share a checkout, so assign files to each teammate.",
        },
        {
          q: "Does running multiple agents cost more?",
          a: "Yes. Each subagent and session sends its own requests, which count toward the same usage limits, so running several at once multiplies usage.",
        },
        {
          q: "Where are Claude Code worktrees stored?",
          a: "In `.claude/worktrees/<name>/` at the root of the repo, on a branch named `worktree-<name>`. Add that folder to `.gitignore`.",
        },
      ],
    },
    cta: {
      title: "Run a team of Claude Code agents with jobs.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals and working hours, on one board.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's Claude Code documentation on November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
