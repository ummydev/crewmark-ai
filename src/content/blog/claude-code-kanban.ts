import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-kanban (MC-155), for "claude code kanban", "claude code kanban board", "claude code kanban
// github", "claude code kanban plugin", "claude code kanban skill", "claude code kanban view" and "claude code task
// board" (Google autocomplete, 2026-11-07). The results page is all small GitHub projects with no overview, so this
// page is the overview. Claude Code facts come from the Interactive mode docs (Task list section); tool facts from
// each project's own README or listing on 2026-11-07: NikiforovAll/claude-code-kanban, langwatch/kanban-code, the
// Claudine Show HN post (claudine.pro) and BloopAI/vibe-kanban. Stars are left out because they change daily.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const claudeCodeKanban: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Kanban Board: Tasks and Tools | Crewmark AI",
      description:
        "Claude Code has a task checklist (Ctrl+T) but no kanban board. How the task list works, how to put it on a board, and the kanban tools for Claude Code sessions: claude-code-kanban, Kanban Code, Claudine, Vibe Kanban and Crewmark.",
    },
    breadcrumb: "Claude Code kanban board",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code kanban board: from the task checklist to a real board",
      lead: "Claude Code doesn't ship a kanban board. It has a task list: a to-do checklist Claude writes for multi-step work, shown as pending, in progress and complete, toggled with Ctrl+T. A \"Claude Code kanban board\" is one of two things built on top: a board that shows that task list in your browser, or a board where each card is a whole Claude Code session or issue. This guide covers the built-in task list, how to set up a board, and the tools for each kind.",
      cta: "Get started",
      secondary: "Set up a board",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Claude Code has built in: the task list",
        text: [
          "The task list is Claude's own checklist for the work in front of it. It isn't the background-task view: `/tasks` shows running shells and subagents instead.",
        ],
        points: [
          "Press `Ctrl+T` to show or hide it. It displays up to five tasks at a time.",
          "Tasks survive context compaction, so Claude keeps its plan on long jobs.",
          "Ask Claude to \"show me all tasks\" or \"clear all tasks\".",
          "Set `CLAUDE_CODE_TASK_LIST_ID` to share one list across sessions; it's stored in a named directory under `~/.claude/tasks/`.",
          "The task tools are on by default for Opus 4.7, Sonnet 4.6, Haiku 4.5 and earlier models. On other models the list stays empty unless you set `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to put Claude Code's tasks on a kanban board",
        text: [
          "This uses claude-code-kanban, an open-source board that watches the task files Claude Code writes and shows them in your browser.",
        ],
        steps: [
          {
            title: "Make sure the task tools are on",
            text: "If Claude never shows a checklist with `Ctrl+T`, your model doesn't have the task tools by default. Add the environment variable to your settings and restart Claude Code.",
            code: setup,
          },
          {
            title: "Install the board and its hooks",
            text: "`claude-code-kanban --install` adds a Claude Code plugin with hooks. Without the hooks the board shows tasks only, with no live activity or waiting prompts.",
          },
          {
            title: "Open it and keep working",
            text: "Cards move through Pending, In Progress and Completed as Claude works, and you can answer Claude's prompts from the board. It listens on 127.0.0.1 only, with no login, so keep it on your own machine.",
          },
          {
            title: "Share one board across sessions",
            text: "Start each session with the same task list ID, so several Claude Code sessions read and update one list.",
            code: shared,
          },
        ],
        source: { label: "Source: Claude Code docs, Interactive mode (Task list)", href: docs },
      },
      {
        kind: "table",
        id: "tools",
        title: "Claude Code kanban tools compared",
        text: ["Facts from each project's own README or listing on November 7, 2026."],
        headers: ["Tool", "What a card is", "Where it runs", "Agents", "License"],
        rows: [
          ["claude-code-kanban", "A task from Claude's task list", "Browser, on your machine", "Claude Code", "MIT"],
          ["Kanban Code", "A Claude Code session, with its own worktree; columns Backlog, In Progress, Waiting, In Review, Done", "macOS 26 app; Windows app", "Claude Code", "Apache 2.0"],
          ["Claudine", "A Claude Code or Codex conversation, with status, branch and errors detected", "VS Code extension", "Claude Code, Codex", "MIT"],
          ["Vibe Kanban", "An issue you start a workspace for; the company shut down, the app runs locally", "`npx vibe-kanban`", "Claude Code, Codex and many more", "Apache 2.0"],
          ["Crewmark", "An issue an AI employee takes on its own, on a heartbeat", "Hosted web board, shared with a team", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Commercial"],
        ],
      },
      {
        kind: "text",
        title: "Which kind of board you need",
        points: [
          "You want to watch one session's plan: Claude Code's own task list (`Ctrl+T`) may be enough; add claude-code-kanban for a bigger view in the browser.",
          "You run several sessions in parallel and lose track of which needs you: a session board such as Kanban Code or Claudine shows which are working, waiting or ready for review. See [multiple Claude Code agents](/blog/multiple-claude-code-agents) and the [worktree guide](/blog/claude-code-worktree).",
          "You were on Vibe Kanban: see [Vibe Kanban alternatives](/blog/vibe-kanban-alternatives).",
          "You want the board to drive the work, so agents pick up the next card without you: that's what Crewmark is for (below).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "A kanban board where Claude Code takes the next card itself",
        text: [
          "Every tool above shows you what Claude is doing; you still start each session and move each card. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours. It wakes on a heartbeat, takes the next issue from a shared board, comments as it works and messages you when it needs a decision.",
        ],
        steps: [
          {
            title: "Connect your project and agent",
            text: "Run the setup command in the repository; the employee works in its own session and checkout, on the subscription you already pay for.",
          },
          {
            title: "Fill the board",
            text: "Write issues the way you would for a teammate, and assign them or leave them for whoever is free.",
          },
          {
            title: "Review instead of starting",
            text: "Every 15, 30 or 60 minutes during working hours the employee takes the next card. See [how to make Claude Code proactive](/proactive-claude-code) and [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Put Claude Code's tasks on a kanban board" },
    mid: {
      title: "Stop moving the cards yourself.",
      text: "Crewmark's board assigns issues to Claude Code and Codex employees that wake on a heartbeat and take the next one.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code kanban FAQ",
      items: [
        {
          q: "Does Claude Code have a kanban board?",
          a: "No. It has a task list, a checklist of pending, in-progress and completed items that you toggle with Ctrl+T. Kanban boards for Claude Code are third-party tools built on its task files or session files.",
        },
        {
          q: "How do I see Claude Code's task list?",
          a: "Press Ctrl+T in a session. It shows up to five tasks; ask Claude \"show me all tasks\" for the full list. Use /tasks for running shells and subagents instead.",
        },
        {
          q: "Why is my Claude Code task list empty?",
          a: "Either Claude hasn't planned any multi-step work yet, or your model doesn't have the task tools by default. Set CLAUDE_CODE_ENABLE_TODO_TOOLS=1 in your environment or settings and restart.",
        },
        {
          q: "Can several Claude Code sessions share one task list?",
          a: "Yes. Start each with the same CLAUDE_CODE_TASK_LIST_ID, for example CLAUDE_CODE_TASK_LIST_ID=my-project claude; the list is stored under ~/.claude/tasks/.",
        },
        {
          q: "Is there a Claude Code kanban plugin?",
          a: "claude-code-kanban installs a Claude Code plugin with hooks that feed its browser board. Claudine is a VS Code extension, and Kanban Code is a desktop app.",
        },
        {
          q: "Is there a kanban board for Claude Code and Codex together?",
          a: "Claudine reads both Claude Code and Codex conversations. Vibe Kanban supports many agents but its company has shut down. Crewmark's board assigns issues to Claude Code, Codex, DeepSeek Harness and OpenCode employees.",
        },
      ],
    },
    cta: {
      title: "Turn your Claude Code board into a team that works it.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (Interactive mode) and each tool's own README or listing on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or the projects named here. Claude and Claude Code are trademarks of Anthropic.",
  },
};
