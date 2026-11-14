import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-agent-teams, for "claude code agent teams" (setup, tmux, example, mode, github, desktop, vscode),
// "agent teams vs subagents" (claude, claude code, reddit, when to use) and "claude code agent teams vs subagents /
// workflows" (Google autocomplete, 2026-11-07; codex-design's SEO check listed the same cluster). Facts come from the
// Claude Code docs "Orchestrate teams of Claude Code sessions" (code.claude.com/docs/en/agent-teams) and "Subagents"
// (code.claude.com/docs/en/sub-agents), as of `checked`. /blog/multiple-claude-code-agents covers all four ways to run
// agents in parallel and links here for the details of agent teams.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const claudeCodeAgentTeams: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Agent Teams vs Subagents: Setup | Crewmark AI",
      description:
        "Claude Code agent teams explained from the docs: how they differ from subagents, how to enable and start one, tmux and iTerm2 split panes, team size, token costs and limitations, with example prompts.",
    },
    breadcrumb: "Claude Code agent teams",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code agent teams vs subagents: when to use each, and how to set up a team",
      lead: "Agent teams let one Claude Code session act as a team lead that spawns teammates: separate Claude Code instances, each with its own context window, that share a task list and message each other directly. Subagents are lighter: helpers inside one session that do a focused job and hand back a summary. Agent teams are experimental and off by default. This guide compares the two from Anthropic's docs, then shows how to turn teams on, start one, view teammates in tmux or iTerm2 panes, and avoid the common problems.",
      cta: "Get started",
      secondary: "Set up a team",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Agent teams vs subagents",
        text: [
          "Both run work in parallel in separate context windows. The difference is who coordinates: with subagents the main agent manages everything; in a team, teammates claim tasks from a shared list and talk to each other.",
        ],
        headers: ["", "Subagents", "Agent teams"],
        rows: [
          ["What they are", "Helpers inside one session, defined in `.claude/agents/` or built in (Explore, Plan, general-purpose)", "A lead session plus separate Claude Code instances as teammates"],
          ["Context", "Own context window; only a summary returns to the caller", "Own context window; fully independent"],
          ["Communication", "Return a result to the caller (named subagents can message each other)", "Teammates message each other directly; you can message any teammate"],
          ["Coordination", "The main agent manages all work", "Shared task list with claiming, dependencies and messages"],
          ["Best for", "Focused tasks where only the result matters", "Work that needs discussion: review, debate, features split by layer"],
          ["Token cost", "Lower", "Higher: each teammate is a separate Claude instance"],
          ["Status", "Generally available", "Experimental, off by default"],
        ],
      },
      {
        kind: "text",
        title: "When to use agent teams (and when not to)",
        points: [
          "Research and review: teammates look at a problem from different angles, then challenge each other's findings.",
          "New modules or features: each teammate owns a separate piece, such as frontend, backend and tests.",
          "Debugging with competing hypotheses: several teammates each try to prove their theory and disprove the others'.",
          "Not for sequential work, edits to the same files, or tasks with many dependencies: use one session or subagents there.",
          "Not for routine work: token use grows with every active teammate.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up a Claude Code agent team",
        steps: [
          {
            title: "Turn agent teams on",
            text: "Set `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` to `1` in your environment or in the `env` block of settings.json. Teams need an interactive session; with `-p` (and the Agent SDK) Claude doesn't spawn teammates.",
            code: enable,
          },
          {
            title: "Describe the team in plain language",
            text: "Say how many teammates and what each one does. Claude creates the shared task list, spawns them and synthesizes their findings when they finish.",
            code: prompt,
          },
          {
            title: "Pick a display mode",
            text: "In-process is the default and works in any terminal: teammates appear in a panel under the prompt; use the arrow keys and Enter to open one and message it, and `Ctrl+T` for the task list. Split panes give each teammate its own pane and need tmux or iTerm2 with the `it2` CLI; set `teammateMode` to `auto` or `tmux`, or start with `claude --teammate-mode auto`.",
          },
          {
            title: "Reuse roles you already defined",
            text: "Ask for a teammate \"using the security-reviewer agent type\" to reuse a subagent definition from `.claude/agents/`, with its tools, model and instructions.",
          },
          {
            title: "Steer, then shut down",
            text: "Check in on teammates, redirect them, and say \"wait for your teammates\" if the lead starts doing their work. To finish, ask the lead to shut a teammate down by name; the team's directories are cleaned up when the session ends.",
          },
        ],
        source: { label: "Source: Claude Code docs, Agent teams", href: docs },
      },
      {
        kind: "text",
        title: "Best practices and limitations",
        points: [
          "Start with 3–5 teammates and about 5–6 tasks each; three focused teammates often beat five scattered ones.",
          "Give each teammate a different set of files: two teammates editing the same file overwrite each other.",
          "Put task details in the spawn prompt: teammates load CLAUDE.md, MCP servers and skills, but not the lead's conversation.",
          "Use hooks as quality gates: `TeammateIdle`, `TaskCreated` and `TaskCompleted` can send work back with exit code 2.",
          "Limits: one team per session, no nested teams, the lead can't change, `/resume` doesn't bring back in-process teammates, and task status can lag.",
          "Split panes don't work in VS Code's integrated terminal, Windows Terminal or Ghostty; in-process mode works everywhere.",
          "With agent teams on, a subagent Claude names can launch as a teammate; set the variable to `0` if you want plain subagents back.",
        ],
      },
      {
        kind: "text",
        title: "Agent teams vs other ways to run Claude Code in parallel",
        text: [
          "Agent teams split one task you're watching, inside one session. For independent tasks, run separate sessions in [git worktrees](/blog/claude-code-worktree) or as [background agents](/blog/claude-code-background-agents); for a full comparison, read [multiple Claude Code agents](/blog/multiple-claude-code-agents). To keep the cost down, see [how to reduce Claude Code token usage](/blog/reduce-claude-code-token-usage).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "A team that keeps working after the session ends",
        text: [
          "An agent team lives inside one session and stops when you close it. Crewmark turns Claude Code, Codex, DeepSeek Harness or OpenCode sessions into AI employees with lasting roles, goals and working hours: each wakes on a heartbeat, takes the next issue from a shared board and messages you when it needs a decision.",
        ],
        steps: [
          {
            title: "Give each employee a role",
            text: "A [software engineer](/ai-employees/software-engineer), a reviewer, an [SEO specialist](/ai-employees/seo-specialist): the roles you'd spawn as teammates, kept for good.",
          },
          {
            title: "Work from one board",
            text: "Issues replace the session's task list, and they survive restarts, days and weeks.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "Every 15, 30 or 60 minutes during working hours; see [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up a Claude Code agent team" },
    mid: {
      title: "Want a team that doesn't end with the session?",
      text: "Crewmark keeps Claude Code employees working from a shared board on a heartbeat, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code agent teams FAQ",
      items: [
        {
          q: "What are Claude Code agent teams?",
          a: "An experimental feature where one Claude Code session leads a team of separate Claude Code instances. Teammates have their own context windows, share a task list, and message each other and the lead directly.",
        },
        {
          q: "What's the difference between agent teams and subagents?",
          a: "Subagents work inside one session and return a summary to the main agent, which coordinates everything. Agent teams are separate instances that coordinate themselves through a shared task list and direct messages, at a higher token cost.",
        },
        {
          q: "How do I enable agent teams in Claude Code?",
          a: "Set CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS to 1 in your environment or the env block of settings.json, then ask Claude in an interactive session to spawn teammates for a task.",
        },
        {
          q: "Do agent teams need tmux?",
          a: "No. The default in-process mode works in any terminal. tmux, or iTerm2 with the it2 CLI, is only needed if you want each teammate in its own split pane.",
        },
        {
          q: "How many teammates should I use?",
          a: "Anthropic suggests starting with 3 to 5 teammates and about 5 to 6 tasks each. Costs scale with every teammate, and more teammates add coordination overhead.",
        },
        {
          q: "Can agent teams run in VS Code?",
          a: "In-process mode works in any terminal, including VS Code's integrated terminal. Split-pane mode isn't supported there.",
        },
        {
          q: "Why does Claude spawn teammates when I wanted subagents?",
          a: "With agent teams enabled, a subagent Claude names launches as a teammate. Set CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS to 0 to get plain subagents back.",
        },
      ],
    },
    cta: {
      title: "Turn your agent team into a standing crew.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (Agent teams and Subagents) on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
