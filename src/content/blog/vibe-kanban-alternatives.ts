import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/vibe-kanban-alternatives (MC-155), for "vibe kanban alternative(s)", "vibe kanban alternative reddit",
// "vibe kanban shutdown" and "claude code vibe kanban" (Google autocomplete, 2026-11-07). Facts come from the
// BloopAI/vibe-kanban README and releases (latest v0.1.44, April 24, 2026), the shutdown post at
// vibekanban.com/blog/shutdown (April 10, 2026), and each alternative's own site or README on 2026-11-07:
// paradev.com (formerly Superset), nimbalyst.com, smtg-ai/claude-squad and langwatch/kanban-code. The shutdown post
// gives no calendar date for the end of remote services ("30 days"), so none is stated. The Conductor row follows
// /blog/conductor-alternatives. Crewmark's status avoids sign-up wording until MC-147 ships.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const vibeKanbanAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Vibe Kanban Alternatives After the Shutdown | Crewmark AI",
      description:
        "Vibe Kanban's company shut down and its cloud board is gone. What still works, how to keep your issues, and the alternatives for running Claude Code and Codex from a board: Paradev, Nimbalyst, Claude Squad, Kanban Code and Crewmark.",
    },
    breadcrumb: "Vibe Kanban alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI coding agents",
      title: "Vibe Kanban alternatives: where to run your agents from a board now",
      lead: "Vibe Kanban let you plan coding-agent work as kanban issues, start a workspace for each one, review the diff and open a pull request, with Claude Code, Codex and eight other agents. On April 10, 2026, bloop, the company behind it, announced it was shutting down. The open-source app still runs locally, but the hosted issues, comments, projects and organisations went away, and the last release shipped on April 24, 2026. This guide covers what still works, how to keep your work, and the alternatives.",
      cta: "Get started",
      secondary: "Compare the alternatives",
      secondaryHref: "#alternatives",
    },
    sections: [
      {
        kind: "text",
        title: "What happened to Vibe Kanban",
        text: [
          "bloop said most users were on free plans and it couldn't find a business model it wanted to pursue. Remote services stayed up for 30 days after the announcement, then Vibe Kanban moved to a fully local architecture; project pages now lead to a data export. Refunds went out for invoices paid in the previous 30 days.",
        ],
        points: [
          "Still works: `npx vibe-kanban` starts the local app, and local workspaces keep functioning. The code stays open source under Apache 2.0 and is community maintained.",
          "Gone: the hosted kanban issues, comments, projects and organisations that teams shared.",
          "Slowing down: there has been no release since v0.1.44 on April 24, 2026, so new agent versions aren't being picked up.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to keep your work",
        steps: [
          {
            title: "Export your data",
            text: "Open the latest version of the app and use its data export. Project pages now point straight to it.",
          },
          {
            title: "Push every branch you care about",
            text: "Each workspace was a git worktree on its own branch. Commit and push the ones you want, so the code lives in your repository rather than in the app.",
            code: keep,
          },
          {
            title: "Move open issues somewhere shared",
            text: "If your team used the hosted board, recreate the open issues in GitHub Issues or in the board of the tool you pick, before anyone forgets what they were.",
          },
          {
            title: "Try one real task in the replacement",
            text: "Compare the options below and run one issue from start to pull request before you move everything.",
          },
        ],
        source: { label: "Source: Vibe Kanban's shutdown announcement", href: shutdown },
      },
      {
        kind: "table",
        id: "alternatives",
        title: "Vibe Kanban alternatives compared",
        text: ["Facts from each project's own site or GitHub repository on November 7, 2026."],
        headers: ["", "What it is", "Agents", "Platforms", "Board", "License"],
        rows: [
          ["Vibe Kanban (community)", "Local app: kanban issues, a workspace per issue, diff review, PRs", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode and more", "Runs with `npx`; remote via Docker", "Yes, local only now", "Apache 2.0"],
          ["Paradev (formerly Superset)", "Desktop workspace that runs many agents in parallel, each in its own worktree; automations and cloud sandboxes", "Claude, Codex, Cursor Agent, OpenCode and any CLI agent", "macOS; Linux experimental; no Windows yet", "No board described", "MIT"],
          ["Nimbalyst", "Visual workspace for agents, tasks, docs, wiki, diagrams and code", "Claude Code, Codex", "macOS, Windows, Linux", "Tasks alongside docs and code", "Open source; free for individuals"],
          ["Claude Squad", "Terminal app: tmux session plus git worktree per agent", "Claude Code, Codex, Gemini, Aider", "Needs tmux and gh", "No (TUI list)", "AGPL-3.0"],
          ["Kanban Code", "Kanban board for Claude Code sessions with worktree per card", "Claude Code", "macOS 26 app, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
          ["Crewmark", "AI employees: agent sessions with roles, goals, working hours and a heartbeat that takes the next issue", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Web board; daemon on macOS, Windows, Linux", "Yes, hosted, shared with your team", "Commercial"],
        ],
      },
      {
        kind: "text",
        title: "Which Vibe Kanban alternative fits you",
        points: [
          "You want the same app, as it is: keep running the community version locally, and watch the repository for a maintained fork.",
          "You mostly ran parallel agents and reviewed diffs: Paradev is the closest maintained desktop app, on Mac and Linux. Claude Code's own `--worktree` flag also covers isolated parallel sessions; see the [Claude Code worktree guide](/blog/claude-code-worktree).",
          "You live in the terminal: Claude Squad gives each agent a tmux session and a worktree.",
          "You want the board itself, for Claude Code only: Kanban Code moves cards between columns as sessions start, wait and open PRs.",
          "You used the hosted board with a team, or want agents to pick up issues without you: that's Crewmark (below). Conductor was another option, but it's [joining Meta and winding down](/blog/conductor-alternatives).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Vibe Kanban waited for you to start each card. Crewmark doesn't.",
        text: [
          "In Vibe Kanban you wrote the issue and then started the agent. Crewmark keeps the board, hosted and shared, and turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee that wakes on a heartbeat during working hours and takes the next issue itself, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Bring your repository and your agent",
            text: "Run the setup command in the project. Each employee works in its own session and checkout, much like a Vibe Kanban workspace.",
          },
          {
            title: "Recreate your board",
            text: "Add your open issues and assign them to an employee, or leave them unassigned for whoever is free.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "Every 15, 30 or 60 minutes the employee takes the next issue, comments as it goes and messages you when it needs a decision. See [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Keep your work after Vibe Kanban's shutdown" },
    mid: {
      title: "Lost your hosted board? Keep the board, add employees.",
      text: "Crewmark gives your team a shared board where Claude Code and Codex employees take the next issue on a heartbeat.",
      button: "Get started",
    },
    faq: {
      title: "Vibe Kanban shutdown FAQ",
      items: [
        {
          q: "Is Vibe Kanban shutting down?",
          a: "Its company is. bloop announced on April 10, 2026 that it was shutting down. The open-source app continues as a community-maintained project that runs locally; the hosted issues, comments, projects and organisations were removed after 30 days.",
        },
        {
          q: "Does Vibe Kanban still work?",
          a: "Locally, yes: `npx vibe-kanban` still starts it and local workspaces keep working. The latest release is v0.1.44 from April 24, 2026, so newer agent versions may not be supported.",
        },
        {
          q: "How do I export my Vibe Kanban data?",
          a: "Use the data export in the latest version of the app; project pages now lead to it. Push your workspace branches to your git remote as well.",
        },
        {
          q: "What's the best Vibe Kanban alternative?",
          a: "For parallel agents with diff review, Paradev (formerly Superset). For a kanban of Claude Code sessions, Kanban Code. For a terminal workflow, Claude Squad. For a shared board where agents pick up issues themselves, Crewmark.",
        },
        {
          q: "Is there an open-source Vibe Kanban alternative?",
          a: "Yes: Paradev (MIT), Claude Squad (AGPL-3.0) and Kanban Code (Apache 2.0) are open source, and Vibe Kanban itself remains open source under Apache 2.0.",
        },
        {
          q: "Is there a Vibe Kanban alternative for Windows?",
          a: "Nimbalyst has a Windows download and Kanban Code has a Windows app. Crewmark's board runs in the browser and its daemon runs on Windows. Paradev doesn't support Windows yet.",
        },
      ],
    },
    cta: {
      title: "Your agents need a new board. Give them a job, too.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Vibe Kanban's README, releases and shutdown post, and each alternative's own site or repository, on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic or OpenAI. Product names are trademarks of their owners.",
  },
};
