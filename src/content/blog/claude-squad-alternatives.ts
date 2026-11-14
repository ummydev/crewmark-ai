import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-squad-alternatives (MC-155 follow-up), for "claude squad alternative", "claude squad vs conductor",
// "claude squad windows" and "claude-squad codex" (Google autocomplete, 2026-11-07); the results page is thin and
// mostly small directories. Claude Squad facts come from the smtg-ai/claude-squad README and its latest release
// (v1.0.20, August 20, 2026, via the GitHub API). The README doesn't mention Windows; it lists tmux, which needs WSL
// there, and the copy says only that. Paradev, Kanban Code and Conductor rows follow /blog/vibe-kanban-alternatives and
// /blog/conductor-alternatives; Claude Code's own worktree support follows /blog/claude-code-worktree. "claude squad
// vs herder" is left out: no project by that name could be identified.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const claudeSquadAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Squad Alternatives (vs Conductor) | Crewmark AI",
      description:
        "What Claude Squad does, where it falls short (tmux only, no Windows, you start every task), and the alternatives for running several Claude Code or Codex agents: Claude Code's own worktrees, Paradev, Kanban Code, Conductor and Crewmark.",
    },
    breadcrumb: "Claude Squad alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI coding agents",
      title: "Claude Squad alternatives: other ways to run several coding agents at once",
      lead: "Claude Squad is an open-source terminal app (AGPL-3.0) for running several coding agents side by side: each task gets its own tmux session and git worktree, and you review the changes before pushing. It works well if you live in the terminal on macOS or Linux. People look for an alternative when they want a graphical app, need Windows, or want the agents to pick up work without being started one by one. This guide compares the options, including Claude Squad vs Conductor.",
      cta: "Get started",
      secondary: "Compare the alternatives",
      secondaryHref: "#alternatives",
    },
    sections: [
      {
        kind: "text",
        title: "What Claude Squad does well, and where it stops",
        text: [
          "Claude Squad's latest release is v1.0.20, from August 20, 2026, and it's still maintained. It runs Claude Code by default and other terminal agents with `-p`, such as Codex or Aider.",
        ],
        points: [
          "Good: one tmux session and one git worktree per task, so agents never edit the same files.",
          "Good: review each instance's diff and check out its branch before you push.",
          "Good: an experimental `-y` (auto-yes) mode accepts prompts so tasks can finish in the background.",
          "Limit: it needs tmux and the GitHub CLI; the README doesn't mention Windows, where tmux means using WSL.",
          "Limit: it's a terminal UI. There's no board, no shared view for a team, and you start every task yourself.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to run several agents in parallel, with or without Claude Squad",
        steps: [
          {
            title: "Give every task its own worktree",
            text: "That's the core of Claude Squad, and Claude Code now does it itself: `claude --worktree <name>` starts a session on its own branch and checkout. See the [Claude Code worktree guide](/blog/claude-code-worktree).",
            code: usage,
          },
          {
            title: "Pick how you want to watch them",
            text: "A terminal list (Claude Squad), a desktop app (Paradev, Conductor while it lasts) or a kanban board of sessions (Kanban Code). See [Claude Code kanban boards](/blog/claude-code-kanban).",
          },
          {
            title: "Decide who starts the next task",
            text: "In all of these you start each session. If you want agents to take the next issue themselves, give them a schedule or a heartbeat; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Review before you merge",
            text: "Whatever runs the agents, keep merging with a person: read each diff, run the checks, then merge.",
          },
        ],
        source: { label: "Source: Claude Squad README", href: repo },
      },
      {
        kind: "table",
        id: "alternatives",
        title: "Claude Squad alternatives compared",
        text: ["Facts from each project's own site or repository, checked in November 2026."],
        headers: ["", "Interface", "Agents", "Platforms", "Who starts tasks", "License"],
        rows: [
          ["Claude Squad", "Terminal UI (tmux)", "Claude Code, Codex, Gemini, Aider", "Needs tmux and gh; Windows via WSL", "You", "AGPL-3.0"],
          ["Claude Code on its own", "`claude --worktree`, parallel sessions in the desktop app", "Claude Code", "macOS, Windows, Linux", "You (or a schedule)", "Commercial (Anthropic)"],
          ["Paradev (formerly Superset)", "Desktop app, a worktree per task; automations", "Claude, Codex, Cursor Agent, OpenCode and any CLI agent", "macOS; Linux experimental; no Windows yet", "You, or an automation", "MIT"],
          ["Kanban Code", "Kanban board of Claude Code sessions", "Claude Code", "macOS 26 app, Windows app", "You", "Apache 2.0"],
          ["Conductor", "Mac app for parallel agents; joining Meta, cloud ends November 20, 2026", "Claude Code, Codex, Cursor, OpenCode", "macOS", "You", "Commercial"],
          ["Crewmark", "Hosted board with AI employees that wake on a heartbeat", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Web board; daemon on macOS, Windows, Linux", "The employee takes the next issue", "Commercial"],
        ],
      },
      {
        kind: "text",
        title: "Claude Squad vs Conductor",
        text: [
          "Both run several agents in parallel worktrees. Claude Squad is a free, open-source terminal app; Conductor was a polished Mac app with a review flow and cloud workspaces. Conductor is [joining Meta](/blog/conductor-alternatives): new sign-ups are closed, its cloud shuts down on November 20, 2026 and the local app gets updates only until early 2027. If you were choosing between the two today, Claude Squad is the one still being developed.",
        ],
      },
      {
        kind: "text",
        title: "Which Claude Squad alternative fits you",
        points: [
          "You only use Claude Code: try its built-in `--worktree` flag and the desktop app's parallel sessions before adding a tool.",
          "You want a desktop app for many agents on a Mac: Paradev.",
          "You want to see sessions as cards: Kanban Code, or read [Claude Code kanban boards](/blog/claude-code-kanban).",
          "You're on Windows: Claude Code's CLI and desktop app run natively; Claude Squad needs WSL.",
          "You want agents to keep working without you starting each task, with a board your team shares: Crewmark (below). Also see [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "From a squad you drive to a crew that works on its own",
        text: [
          "Claude Squad makes parallel agents easy to run, but each one waits for you to start it. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours. It wakes on a heartbeat, takes the next issue from a shared board, works in its own checkout and messages you when it needs a decision, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Connect your repository and agent",
            text: "Run the setup command in the project. Several employees can share a repository, each in its own checkout.",
          },
          {
            title: "Give each one a role",
            text: "An engineer, a reviewer, an SEO writer, each with a goal. See [AI employee roles](/ai-employees).",
          },
          {
            title: "Fill the board and review",
            text: "Every 15, 30 or 60 minutes during working hours each employee takes the next issue; you review pull requests and answer questions.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run several coding agents in parallel" },
    mid: {
      title: "Tired of starting every agent yourself?",
      text: "Crewmark's AI employees take the next issue on a heartbeat, on the Claude Code or Codex plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude Squad FAQ",
      items: [
        {
          q: "What is Claude Squad?",
          a: "An open-source terminal app (AGPL-3.0) from smtg-ai that runs several coding agents at once, each in its own tmux session and git worktree, so you can review each change before pushing.",
        },
        {
          q: "Does Claude Squad work with Codex?",
          a: "Yes. Run it with `cs -p \"codex\"` after setting your OpenAI API key. It also launches Gemini and Aider, and Claude Code by default.",
        },
        {
          q: "Does Claude Squad work on Windows?",
          a: "Its README doesn't mention Windows and it needs tmux, so on Windows you'd run it in WSL. Claude Code's own `--worktree` flag and desktop app run on Windows natively.",
        },
        {
          q: "Is Claude Squad still maintained?",
          a: "Yes. Its latest release is v1.0.20, from August 20, 2026.",
        },
        {
          q: "Claude Squad or Conductor?",
          a: "Conductor is joining Meta and winding down, with its cloud ending on November 20, 2026. Claude Squad is open source and still developed.",
        },
        {
          q: "Do I still need Claude Squad now that Claude Code has worktrees?",
          a: "Not for isolation alone: `claude --worktree` gives each session its own branch. Claude Squad still helps if you want one terminal view to manage many sessions and agents other than Claude Code.",
        },
      ],
    },
    cta: {
      title: "Run a crew, not just a squad.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Squad README and releases and each alternative's own site or repository on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic or OpenAI. Product names are trademarks of their owners.",
  },
};
