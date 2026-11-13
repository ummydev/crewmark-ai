import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-orchestration-tools, the second list page of MC-40, for "claude code orchestration tools", "best
// claude code orchestration tools", "claude code orchestration", "claude code orchestrator", "claude code agent
// manager (ui)", "claude code orchestration github" and "best claude code tools" (Google autocomplete, 2026-11-06).
// Built-in options come from the Claude Code docs ("Run agents in parallel"); every third-party fact comes from the
// project's own README or site, and stars, licenses and last pushes from the GitHub API, on 2026-11-06 (`checked`).
// Left out: Crystal (deprecated for Nimbalyst, which we couldn't verify) and repos we didn't read in depth. Conductor's
// wind-down follows its own announcement, as in /blog/conductor-alternatives. Crewmark is listed with the same fields
// as the rest.

const docs = "https://code.claude.com/docs/en/agents";

export const claudeCodeOrchestrationTools: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Best Claude Code Orchestration Tools in 2026: Built-in Options and 10 Apps | Crewmark",
      description:
        "Run several Claude Code agents at once: the built-in options (subagents, agent view, agent teams, workflows) and 10 orchestration tools compared, from Claude Squad and Orca to Paperclip, Multica and Crewmark.",
    },
    breadcrumb: "Claude Code orchestration tools",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "The best Claude Code orchestration tools in 2026",
      lead: "Claude Code orchestration means running several Claude Code agents at once and coordinating them: giving each its own copy of the code, a task, and a way to report back. Claude Code now does a lot of this itself, and a wave of open-source and commercial tools adds interfaces, boards and schedules on top. This guide covers the built-in options first, then compares ten tools by interface, isolation, supported agents, and the question that matters most: does the agent start work on its own, or wait for you?",
      cta: "Get early access",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "table",
        id: "built-in",
        title: "Built into Claude Code: five ways to run agents in parallel",
        text: [
          "Before installing anything, check whether Claude Code already covers your case. In every built-in option the workers are Claude sessions; worktrees give each one its own checkout (see the [worktree guide](/blog/claude-code-worktree)).",
        ],
        headers: ["Option", "What it gives you", "Status"],
        rows: [
          ["Subagents", "Workers inside one session that do a side task in their own context and return a summary", "Available"],
          ["Agent view (`claude agents`)", "One screen to dispatch and monitor background sessions, and step in when one needs you", "Research preview"],
          ["Agent teams", "Several sessions with a shared task list and messaging, managed by a lead", "Experimental, off by default"],
          ["Dynamic workflows", "A script that runs many subagents and cross-checks their results", "Available"],
          ["Projects", "One ongoing conversation that starts parallel threads in the cloud or on your computer", "Public beta on Pro, Max and Ultra"],
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Claude Code orchestration tools compared",
        text: [
          "Stars and licenses are from GitHub on November 6, 2026. \"Starts work on its own\" means the tool can give an agent its next task without you typing a prompt, through a board, a schedule or a heartbeat.",
        ],
        headers: ["Tool", "Interface", "Isolation", "Agents", "Starts work on its own", "License, stars"],
        rows: [
          ["Claude Squad", "Terminal UI (`cs`)", "tmux session and git worktree per agent", "Claude Code, Codex, Gemini, Aider and others", "No", "AGPL-3.0, ~9k"],
          ["Orca", "Desktop, CLI, mobile, remote runtime", "A worktree per agent", "Claude Code, Codex and others, on your subscriptions", "No; an orchestrator agent can split work", "MIT, ~117k"],
          ["Ruflo (formerly Claude Flow)", "Claude Code plugins, CLI and MCP server", "Not specified", "Claude Code, Codex, MCP clients", "No; prompt- or mission-driven swarms", "MIT, ~81k"],
          ["oh-my-claudecode", "Claude Code plugin (`/autopilot`)", "Not specified", "Claude Code", "No; autopilot runs after you start it", "MIT, ~41k"],
          ["Vibe Kanban", "Web UI with a kanban board", "A workspace and branch per task", "10+, incl. Claude Code, Codex, Gemini CLI", "No; you start a workspace per issue. Sunsetting, community-maintained", "Apache-2.0, ~29k"],
          ["opcode (formerly Claudia)", "Desktop GUI", "Separate processes for background agents", "Claude Code", "No", "AGPL-3.0, ~22k"],
          ["CloudCLI (Claude Code UI)", "Web and mobile UI", "Optional Docker sandbox", "Claude Code, Codex, Cursor CLI, OpenCode", "No", "AGPL-3.0, ~15k"],
          ["Conductor", "Mac app", "A workspace and branch per task", "Claude Code, Codex, Cursor, OpenCode", "No. Joining Meta; cloud shuts down Nov 20, 2026", "Closed source"],
          ["Paperclip", "Web UI: an \"AI company\" with org chart, goals, budgets", "Optional worktrees and sandboxes", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode and more", "Yes: scheduled heartbeats, plus assignment and @-mentions", "MIT, ~111k"],
          ["Multica", "Web, desktop, CLI and API", "A daemon on your machine", "Claude Code, Codex, Cursor, Copilot, OpenCode and more", "Yes: agents pick up assigned issues; Autopilots on cron", "Multica License (source-available), ~55k"],
          ["Crewmark", "Web board, CLI and a daemon on your machine", "Each employee in its own session and checkout", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Yes: a heartbeat during working hours takes the next issue", "Early access"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose a Claude Code orchestration tool",
        steps: [
          {
            title: "Try the built-ins first",
            text: "For a few parallel tasks you dispatch yourself, `claude --worktree` plus agent view may be all you need. For one big change, `/batch` or a workflow splits it across subagents.",
          },
          {
            title: "Pick the interface you'll actually watch",
            text: "Terminal people tend to prefer Claude Squad; others want a desktop app (Orca, opcode) or a web board (Vibe Kanban, Paperclip, Multica, Crewmark), which also works from a phone.",
          },
          {
            title: "Decide who starts the next task",
            text: "Most tools speed up agents you drive. If you want agents to keep going between your prompts, look for a board plus a schedule or heartbeat: Paperclip, Multica and Crewmark do this.",
          },
          {
            title: "Check isolation and supported agents",
            text: "Parallel agents need separate checkouts, usually git worktrees. If your team mixes Claude Code with Codex or OpenCode, make sure the tool runs all of them on your existing subscriptions.",
          },
          {
            title: "Check the project's health",
            text: "Look at the license, recent commits and status: Vibe Kanban's company is winding it down, Conductor is moving to Meta, and Crystal was replaced by a new app.",
          },
        ],
        source: { label: "Source: Claude Code docs, Run agents in parallel", href: docs },
      },
      {
        kind: "text",
        title: "Notes on each tool",
        points: [
          "Claude Squad ([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)): a terminal app that gives every agent its own tmux session and git worktree; `--autoyes` auto-accepts prompts (experimental).",
          "Orca ([stablyai/orca](https://github.com/stablyai/orca)): runs a fleet of coding agents with your own subscriptions on desktop, mobile or a remote machine.",
          "Ruflo ([ruvnet/ruflo](https://github.com/ruvnet/ruflo)): an agent meta-harness for Claude Code and Codex with swarms and memory across sessions; `ruvnet/claude-flow` now redirects here.",
          "oh-my-claudecode ([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)): a plugin with staged plan, build and QA workflows inside Claude Code.",
          "Vibe Kanban ([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)): plan issues on a board and start an agent workspace for each; its README says it is sunsetting.",
          "opcode ([winfunc/opcode](https://github.com/winfunc/opcode)): a desktop GUI for Claude Code with custom agents, session history, usage analytics and checkpoints.",
          "CloudCLI ([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)): a web and mobile UI for your sessions, with a shell, files and git; a paid cloud version adds hosted containers.",
          "Conductor ([conductor.build](https://www.conductor.build)): see [Conductor alternatives](/blog/conductor-alternatives) for the shutdown dates and how to move your work.",
          "Paperclip ([paperclipai/paperclip](https://github.com/paperclipai/paperclip)) and Multica ([multica-ai/multica](https://github.com/multica-ai/multica)): the closest to AI employees; see our [Paperclip](/alternatives/paperclip) and [Multica](/alternatives/multica) comparisons.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Orchestration that keeps going after you stop typing",
        text: [
          "Crewmark turns each Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a shared board.",
        ],
        steps: [
          {
            title: "One employee per job",
            text: "A programmer, a reviewer, an SEO writer: each has its own session, checkout and goal written as a number. See [what an AI employee is](/ai-employees).",
          },
          {
            title: "A board instead of a terminal grid",
            text: "Assign issues; each employee comments as it works and messages you when it needs a decision.",
          },
          {
            title: "A heartbeat instead of your next prompt",
            text: "During working hours each employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose a Claude Code orchestration tool" },
    mid: {
      title: "Running five agents and still typing every prompt?",
      text: "Crewmark gives each Claude Code session a role, a goal and a heartbeat, so it takes the next issue without you.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code orchestration FAQ",
      items: [
        {
          q: "What is Claude Code orchestration?",
          a: "Running several Claude Code agents at once and coordinating them: separate checkouts, separate tasks, and a way to see what each is doing and merge the results.",
        },
        {
          q: "Can Claude Code orchestrate agents by itself?",
          a: "Yes. Subagents, agent view, agent teams (experimental), dynamic workflows and projects are all built in, and `--worktree` isolates sessions you run yourself.",
        },
        {
          q: "What's the best Claude Code orchestration tool?",
          a: "For a terminal workflow, Claude Squad; for a desktop fleet, Orca; for swarms inside Claude Code, Ruflo; for agents that keep working from a board on a schedule, Paperclip, Multica or Crewmark.",
        },
        {
          q: "Is there a GUI for managing Claude Code agents?",
          a: "Yes: Orca and opcode are desktop apps, Vibe Kanban, CloudCLI, Paperclip and Multica have web UIs, and Claude Code's own desktop app runs parallel sessions with a Worktree switch.",
        },
        {
          q: "Which tools let agents start work without a prompt?",
          a: "Of those compared here, Paperclip (scheduled heartbeats), Multica (assigned issues and cron Autopilots) and Crewmark (a heartbeat during working hours). The rest run agents you start.",
        },
        {
          q: "Are these tools free?",
          a: "Most are open source and free to self-host: MIT for Orca, Ruflo, oh-my-claudecode and Paperclip, AGPL-3.0 for Claude Squad, opcode and CloudCLI, Apache-2.0 for Vibe Kanban. Multica uses its own source-available license; Conductor is closed source.",
        },
        {
          q: "What should I use instead of Conductor?",
          a: "See [Conductor alternatives](/blog/conductor-alternatives): Claude Code's own `--worktree` and desktop app cover the core, and the tools above add boards, fleets or schedules.",
        },
      ],
    },
    cta: {
      title: "Let your Claude Code agents pick up their own next task.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs, each project's README or website, and the GitHub API on November 6, 2026.",
    disclaimer:
      "Crewmark is one of the tools compared. Product names are trademarks of their owners; no project reviewed or endorsed this page.",
  },
};
