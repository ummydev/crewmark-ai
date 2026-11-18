import type { GuideCopy } from "@/components/landing/guide-article";

// /for/engineering (MC-266), the second audience page, modelled on Composio's "Composio for Engineering". For "claude
// code use cases" (engineering), "claude code for engineering teams", "codex for teams", "ai software engineer for my
// team", "claude code workflow for teams" (Google autocomplete, 2026-11-10; docs/seo/audience-pages-keywords-2026-11-10.md).
// Tool facts come from the two use-case pages it links (Sentry MCP docs, Claude Code and Codex code review docs) and the
// existing guides it links; /ai-employees/software-engineer keeps "ai software engineer agent".

const prompts = `Twice a day, read new and regressed Sentry errors in production,
file the ones that aren't on the board with impact and a likely
cause, and open a pull request for any one-line fix.

Review every pull request marked ready for review against the rules
in AGENTS.md. Comment only; never approve or merge.

Every Friday, write release notes from this week's merged pull
requests: what changed for users, grouped by area, with links.

Take the next issue labelled "good first issue", work in your own
git worktree, and open a pull request with tests.`;

export const forEngineering: GuideCopy = {
  meta: {
    title: "Claude Code for Engineering Teams: AI Employees That Ship",
    description:
      "How engineering teams use Claude Code and Codex as AI employees: error triage, code review, issues to pull requests, release notes and night shifts, on a schedule. Roles, use cases, prompts to copy and the rules that keep people in charge of merges.",
  },
  breadcrumb: "Claude Code for engineering",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "For engineering teams",
    title: "Claude Code for engineering teams: AI employees that take the next issue",
    lead: "Most teams use Claude Code or Codex when someone sits down and prompts it. The bigger win is giving it standing jobs: triage new errors every morning, review every pull request that's ready, take the next issue from the board and open a pull request, write the release notes on Friday. This page covers which engineering jobs to hand over, how to run several agents without them stepping on each other, prompts to copy, and the rules that keep merging with people.",
    cta: "Get started",
    secondary: "See the jobs",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "What engineering teams hand to an AI employee",
      headers: ["Job", "How often", "Guide"],
      rows: [
        ["Triage new Sentry errors, fix the small ones", "Twice a day", "[Sentry error triage](/use-cases/sentry-error-triage)"],
        ["Review pull requests that are ready", "On each PR", "[AI code review on every PR](/use-cases/pr-review)"],
        ["Take the next issue and open a pull request", "Continuous", "[AI software engineer](/ai-employees/software-engineer)"],
        ["Work through a backlog overnight", "Nightly", "[Run Claude Code 24/7](/blog/run-claude-code-24-7), [Codex long-running tasks](/blog/codex-long-running-tasks)"],
        ["Write release notes from merged pull requests", "Weekly", "Prompt below"],
        ["Keep the board current: status, comments, links", "Every issue", "[Claude Code kanban](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts to copy",
      text: ["Each works as a recurring issue for an AI employee or as a one-off prompt in Claude Code or Codex."],
      steps: [
        {
          title: "Four jobs, one sentence each",
          text: "Change the names and schedules to yours. The first two have full guides with the setup: [Sentry error triage](/use-cases/sentry-error-triage) and [AI code review](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up AI engineers on Claude Code or Codex",
      steps: [
        {
          title: "Write the rules once",
          text: "Put build and test commands, conventions and review rules in CLAUDE.md or AGENTS.md, so every session starts from the same place. See [CLAUDE.md](/blog/claude-md) and [AGENTS.md for Codex](/blog/codex-agents-md).",
        },
        {
          title: "Give each agent its own worktree",
          text: "Two agents editing one checkout overwrite each other. Use a git worktree per agent; see [Claude Code worktrees](/blog/claude-code-worktree) and [running multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Connect the tools the jobs need",
          text: "GitHub through its CLI, Sentry through its hosted MCP server, your tracker through its MCP server or CLI. Prefer CLIs where both exist; they use fewer tokens.",
        },
        {
          title: "Keep merging with people",
          text: "Agents open pull requests and comment; people approve and merge. When an employee needs a decision, it marks the issue Needs action and asks.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "What to expect",
      points: [
        "Small, well-described issues land best: a bug with a stack trace, a missing test, a copy change across many files.",
        "Large features still need a person to break them into issues; agents are good at the pieces, less so at the plan.",
        "Usage comes from your own Claude or ChatGPT plan; schedule the heavy jobs inside working hours or overnight within your limits.",
        "Review load moves, it doesn't vanish: more pull requests means more to review, which is why AI review is on this list.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Engineers with a board, working hours and a heartbeat",
      text: [
        "Crewmark turns your own Claude Code or Codex into AI employees: each has a role, a goal in numbers, working hours and a heartbeat, takes the next issue from a shared board, comments as it works and opens pull requests for review.",
      ],
      steps: [
        {
          title: "Hire the role",
          text: "Start from the [AI software engineer](/ai-employees/software-engineer).",
        },
        {
          title: "Add standing jobs as recurring issues",
          text: "Triage, review and release notes come back on their own schedule.",
        },
        {
          title: "See other teams",
          text: "Marketing teams use the same setup: [Claude Code for marketing](/for/marketing). All jobs are on [use cases](/use-cases).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up AI engineers on Claude Code or Codex" },
  mid: {
    title: "Want engineers that take the next issue themselves?",
    text: "Crewmark employees run on your Claude Code or Codex, wake on a heartbeat and open pull requests for review.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What are the best Claude Code use cases for engineering teams?",
        a: "Jobs that repeat and have a clear finish: error triage, pull request review, small bugs with a stack trace, tests, release notes and keeping the board current. Larger features still need a person to plan them.",
      },
      {
        q: "Can several Claude Code agents work on one repository?",
        a: "Yes, if each has its own git worktree and its own issues. See [running multiple Claude Code agents](/blog/multiple-claude-code-agents) and [agent teams](/blog/claude-code-agent-teams).",
      },
      {
        q: "Does this work with Codex?",
        a: "Yes. The same jobs and rules work with Codex; put the rules in AGENTS.md.",
      },
      {
        q: "Should an AI agent merge its own pull requests?",
        a: "No. Let it open pull requests and comment; keep approval and merging with people.",
      },
      {
        q: "How is this different from Devin or other cloud agents?",
        a: "Cloud agents run each task in the vendor's cloud when you assign it. Crewmark runs your own Claude Code or Codex on your plan, with standing jobs on a schedule. See [Devin alternatives](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Give your engineering team AI employees that take the next issue.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Written on November 10, 2026; tool facts checked against Sentry's, Anthropic's and OpenAI's docs the same day.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI, GitHub or Sentry. Product names are trademarks of their owners.",
};
