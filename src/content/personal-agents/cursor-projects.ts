import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/cursor-projects, a page per product on /blog/ai-coworker (like claude-cowork.ts). For "cursor
// projects" (reddit, feature, review, docs, local) and "cursor projects vs grok bot / workspaces" (Google autocomplete,
// 2026-11-13). Every Cursor Projects fact comes from docs/compare/facts/cursor-projects.md (cursor.com/docs/agent/projects,
// cursor.com/help/ai-features/projects and Cursor's pricing help page), checked on 2026-11-13; the comparison columns
// come from grok-bot.md and claude-code.md, checked the same day. The card has no launch date, no Enterprise price and
// nothing on Reddit threads or "workspaces", so the page says nothing about them.

const docs = "https://cursor.com/docs/agent/projects";

export const cursorProjects: GuideCopy = {
  meta: {
    title: "Cursor Projects: What the Feature Does, Pricing and vs Grok Bot",
    description:
      "Cursor Projects explained: a coordinator agent that plans larger coding work and hands it to cloud agents. Plans, setup, local testing, review and vs Grok Bot.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Cursor",
    title: "Cursor Projects: how the coordinator agent plans and delegates larger work",
    lead: "Cursor Projects is a Cursor feature for larger bodies of work, such as a feature, a migration or a full app. You chat with a coordinator agent that doesn't write code itself: it plans the work, delegates it to agents running in parallel on Cursor's Cloud Agents, and brings the finished work back for you to check. Each Project keeps shared files that every agent in it reads, and it can do recurring work without being prompted. Here's how it works, which plans include it, how to set it up, where it runs, and how it compares with Grok Bot and Claude Code.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Cursor Projects is",
      points: [
        "A coordinator and its workers: you talk to one coordinator agent, which creates worker agents, names them by job and manages them. The coordinator doesn't write code itself; it plans the work and delegates it to the workers, which run in parallel.",
        "It runs in the cloud: each Project has its own cloud computer on Cursor's Cloud Agents, so closing your laptop doesn't stop it.",
        "Shared files: a Project keeps preferences, notes and workflows that every agent in it reads. A shared `notes.md` tracks what's in progress, queued and done.",
        "A task list and board: each Project has one, and in Multiplayer Projects every member shares it.",
        "Recurring work: tell the coordinator to watch a Slack channel, run on a schedule or follow your pull requests, and it acts on those signals without a prompt.",
        "Built for work that outlives one chat: a feature with several pull requests, a migration, or a job handled while you're away.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects pricing: which plans include it",
      text: [
        "Projects run on Cloud Agents, so they're on every Cursor plan that has Cloud Agents. Prices from Cursor's pricing help page on November 13, 2026. Cursor's paid plans include a usage pool for Cursor models (Grok and Composer).",
      ],
      headers: ["Plan", "Price", "Cursor Projects"],
      rows: [
        ["Free", "-", "Not included"],
        ["Plus", "$8/month", "Not included"],
        ["Premium", "$30/month, or $300/year", "Included"],
        ["Super", "$100/month", "Included"],
        ["Ultra", "$200/month", "Included"],
        ["Teams", "$30, $100 or $200 per seat/month", "Included; Multiplayer Projects need a team account and Cursor 3.26.13 or later"],
        ["Enterprise", "-", "Included; needs Cursor 3.21.9 or later"],
        ["Legacy plans", "-", "Included on legacy paid plans; not on legacy Hobby"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Cursor Projects",
      steps: [
        {
          title: "Check your plan and privacy setting",
          text: "You need a plan with Cloud Agents: Premium or higher, Teams, Enterprise (Cursor 3.21.9 or later) or a legacy paid plan. Projects aren't available with Privacy Mode (Legacy).",
        },
        { title: "Open the Agents Window", text: "Projects live in the Agents Window in Cursor and run in the cloud." },
        {
          title: "Describe the larger job",
          text: "Tell the coordinator what to build, such as a feature, a migration or a full app, in your GitHub repositories. You pick the coordinator's model.",
        },
        {
          title: "Add shared files",
          text: "Write down preferences, notes and workflows for the Project; every agent in it reads them, and `notes.md` keeps track of what's in progress, queued and done.",
        },
        {
          title: "Check the work and make it recurring",
          text: "The coordinator brings finished work back for you to check. Ask it to watch a Slack channel, run on a schedule or follow your pull requests to keep going without a prompt.",
        },
      ],
      source: { label: "Source: Cursor docs, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "How Cursor Projects keeps you in control",
      points: [
        "Review: the coordinator brings finished work back for you to check.",
        "Visibility: the task list and board, and the shared `notes.md`, show what's in progress, queued and done.",
        "Separation: each Project runs on its own cloud computer. The coordinator starts a local agent when something must be tested on your machine.",
        "Teams: in Multiplayer Projects (team account, Cursor 3.26.13 or later), each member has their own coordinator, the coordinators message each other directly, and every member shares the board.",
        "Privacy: Projects aren't available with Privacy Mode (Legacy).",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Can Cursor Projects run locally?",
      text: [
        "No, not end to end. Cursor's docs say a Project runs on its own computer in the cloud, so closing your laptop doesn't stop it, and the cloud lets it run more agents in parallel than a laptop could. When something needs testing on your machine, the coordinator starts a local agent to run it there.",
        "Cursor's Self-Hosted Machines move tool execution to a machine you manage: My Machines for one person's laptop, devbox or VM, and Team Pools on the Enterprise plan. File edits, terminal commands and other tool calls then run on that machine, but the agent loop, inference and planning stay in Cursor's cloud, and the worker sends Cursor the content the agent needs. (Cursor docs, checked November 13, 2026.)",
        "If you want a whole team of agents running on your own computer, these work that way:",
      ],
      points: [
        "[Claude Code agent teams](/blog/claude-code-agent-teams): an experimental Claude Code feature, off by default, where a lead session spawns teammates that share a task list and message each other, all in your own Claude Code sessions.",
        "[Claude Squad](/compare/claude-squad-vs-conductor): an open-source (AGPL-3.0) terminal app that runs several coding agents at once, each in its own tmux session and git worktree.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor): an open-source (Apache-2.0) kanban board for coding agents that runs locally in your browser or as a desktop app; its community has maintained it since its company shut down in April 2026.",
        "[Crewmark](/ai-employees): open source (GPL-3.0). Each AI employee is a Claude Code or Codex conversation on your own computer, with a role and goals, and a heartbeat wakes it to take the next issue from a shared board. The work isn't limited to code: roles such as [SEO specialist](/ai-employees/seo-specialist) run the same way, and the web app can be self-hosted.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot and Claude Code",
      text: [
        "Facts from each vendor's own docs and pricing pages, checked November 13, 2026. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker); see also the [Grok Bot guide](/personal-agent/grok-bot) and [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Side by side: [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). Guides: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["Made by", "Cursor", "xAI", "Anthropic"],
        ["Built for", "Larger coding work: a feature, a migration, a full app", "AI teammates that work in your apps, Slack and Teams", "Coding: reads your codebase, edits files, runs commands"],
        ["Several agents", "A coordinator plans and delegates to worker agents in parallel", "Bots message each other and coordinate in group chats", "Subagents in a session; experimental agent teams"],
        ["Runs where", "Cursor's Cloud Agents, one cloud computer per Project; a local agent for tests", "Cloud: each Bot has its own computer", "Terminal, IDE and desktop app on your machine; cloud sessions on the web"],
        ["Task board", "A task list and board, plus a shared `notes.md`", "Not stated; work is handed over in chat, Slack threads and meetings", "No issue board; agent teams share a task list"],
        ["Recurring work", "Watches a Slack channel, runs on a schedule or follows your pull requests", "Routines on a schedule", "Cloud and desktop scheduled tasks, `/loop`"],
        ["Price", "Cursor Premium at $30/month and up", "Premium $30, Super $100 or Ultra $200 per month", "Paid Claude plans, Pro from $20/month"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Projects for one big job. Crewmark for standing roles.",
      text: [
        "Cursor Projects coordinates agents on a larger body of work. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board, so engineering, SEO and marketing work in a repository keeps getting done.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees), such as a software engineer or an SEO specialist." },
        { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Cursor Projects" },
  mid: {
    title: "Want agents that keep a standing job?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Cursor Projects FAQ",
    items: [
      {
        q: "What is Cursor Projects?",
        a: "A Cursor feature for larger bodies of work, such as a feature, a migration or a full app. A coordinator agent plans the work, delegates it to agents running in parallel on Cursor's Cloud Agents and brings the finished work back for you to check.",
      },
      {
        q: "Which Cursor plans include Projects?",
        a: "Every plan with Cloud Agents: Premium ($30 a month, or $300 a year) and higher, Super ($100) and Ultra ($200), Teams ($30, $100 or $200 per seat a month), Enterprise and legacy paid plans. Free, Plus ($8 a month) and legacy Hobby don't include it.",
      },
      {
        q: "Does Cursor Projects run locally?",
        a: "No, it runs on Cursor's Cloud Agents, each Project on its own cloud computer, so closing your laptop doesn't stop it. When something must be tested on your machine, the coordinator starts a local agent. Projects aren't available with Privacy Mode (Legacy).",
      },
      {
        q: "How do I review what Cursor Projects did?",
        a: "The coordinator brings finished work back for you to check. The Project's task list and board and the shared `notes.md` show what's in progress, queued and done.",
      },
      {
        q: "Can a team share one Cursor Project?",
        a: "Yes, with Multiplayer Projects on a team account and Cursor 3.26.13 or later. Each member has a coordinator, the coordinators message each other directly, and every member shares the task list and board.",
      },
      {
        q: "Cursor Projects vs Grok Bot: what's the difference?",
        a: "Cursor Projects is a coding workspace in Cursor: a coordinator delegates a larger job to worker agents on Cloud Agents. Grok Bot is xAI's hosted AI teammates: Bots that each get their own cloud computer, sign in to your apps and work in Slack and Microsoft Teams. See the [Grok Bot guide](/personal-agent/grok-bot).",
      },
    ],
  },
  cta: {
    title: "Coordinate a big job in Projects. Give your agents a standing role too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Cursor's Projects docs, help center and pricing page on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Cursor, xAI or Anthropic. Product names are trademarks of their owners.",
};
