import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/hermes-agent-vs-openclaw, for "hermes agent vs openclaw", "openclaw vs hermes" (reddit), "hermes agent vs
// claude code", "hermes agent vs codex", "openclaw vs claude code" and "openclaw vs claude cowork" (Google autocomplete,
// 2026-11-07). Bing showed ~288.6K impressions for "hermes agent" and ~180.5K for "openclaw" over three months (per
// codex-design's SEO check), far above any term this site ranked for. /blog/openclaw-alternatives covers the wider
// field; this page is the head-to-head. Facts come from the two READMEs, docs.openclaw.ai, Hermes Agent's docs
// (providers, security) and the GitHub API on 2026-11-07; Claude Code facts follow this blog's Claude Code posts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const hermesAgentVsOpenclaw: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Hermes Agent vs OpenClaw vs Claude Code (2026) | Crewmark AI",
      description:
        "Hermes Agent vs OpenClaw, and how both compare with Claude Code: what each is for, models and subscriptions, memory and skills, security, and how to migrate from OpenClaw to Hermes. From each project's own docs.",
    },
    breadcrumb: "Hermes Agent vs OpenClaw",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI agents",
      title: "Hermes Agent vs OpenClaw vs Claude Code: which one do you need?",
      lead: "OpenClaw and Hermes Agent are the two biggest open-source personal AI agents: both run on your own machine and answer you in Telegram, Slack, WhatsApp and other chat apps. OpenClaw has the larger community (about 394,000 GitHub stars); Hermes Agent, from Nous Research (about 261,000), is built around a learning loop that turns experience into skills. Claude Code is a different kind of tool: a coding agent that works in your repository. This guide compares the three from their own docs, so you can pick the right one, or the right mix.",
      cta: "Get started",
      secondary: "See the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "The short answer",
        points: [
          "Pick OpenClaw for the widest set of channels and integrations and the biggest community: Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal and 20+ more.",
          "Pick Hermes Agent if you want an assistant that learns: it creates skills from experience, improves them as it uses them, and keeps a curated memory, with a built-in cron scheduler.",
          "Pick Claude Code for software work in a repository: reading and changing code, running tests, opening pull requests.",
          "Want Claude Code or Codex to keep working on a job without being prompted, from a team board? That's an AI employee; see the end of this page.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Hermes Agent vs OpenClaw vs Claude Code",
        text: ["From each project's README and docs, and the GitHub API, on November 7, 2026."],
        headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
        rows: [
          ["Made by", "Peter Steinberger and the community; OpenClaw Foundation", "Nous Research", "Anthropic"],
          ["What it is", "Personal AI assistant in your chat apps", "Self-improving personal agent with a learning loop", "Coding agent for your repository"],
          ["Where you talk to it", "20+ chat channels, plus Control UI, CLI and apps", "Telegram, Discord, Slack, WhatsApp, Signal, email, CLI; desktop app", "Terminal, IDE, desktop app; Remote Control from your phone"],
          ["Models", "Swappable: Claude, OpenAI and Codex, local models", "Any provider: Nous Portal, OpenRouter, OpenAI, custom endpoints", "Claude models"],
          ["Claude subscription", "API key, or reuse a Claude Code login on the same machine", "Only Claude Max with purchased extra usage; not Pro", "Included in Claude plans"],
          ["Memory and skills", "Local memory; skills and plugins shared on ClawHub", "Agent-curated memory; creates and improves skills (agentskills.io standard)", "CLAUDE.md, skills, hooks, subagents"],
          ["Scheduling", "Gateway runs as a daemon", "Built-in cron scheduler", "`/loop` and scheduled tasks"],
          ["Isolation", "Tools run on the host unless you configure sandboxing", "Approval for dangerous commands; optional Docker or Modal", "Permission modes and rules; sandboxing"],
          ["License, stars", "MIT, ~394k", "MIT, ~261k", "Commercial"],
        ],
      },
      {
        kind: "text",
        title: "Hermes Agent vs OpenClaw: the real differences",
        points: [
          "Learning: Hermes' headline feature is its learning loop; it writes skills after complex tasks and refines them. OpenClaw's strength is breadth: more channels, plugins on ClawHub, and native apps on desktop and mobile.",
          "Security defaults: OpenClaw treats inbound messages as untrusted and pairs unknown senders, but runs tools on the host for the main session unless you set up sandboxing. Hermes asks before dangerous commands by default and can isolate tools in Docker or Modal. OpenClaw publishes its security fixes openly: 722 advisories since January 2026, all critical ones fixed.",
          "Subscriptions: OpenClaw can reuse a local Claude Code login; Hermes accepts a Claude subscription only on Max with purchased extra usage, and both support ChatGPT/Codex sign-in.",
          "Governance: OpenClaw is run by the independent OpenClaw Foundation, with OpenAI as a donor; Hermes Agent is developed by Nous Research.",
          "Switching: Hermes has a one-command importer for OpenClaw setups (persona, memories, skills and messaging settings).",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to try both, or move from OpenClaw to Hermes",
        steps: [
          {
            title: "Install side by side",
            text: "Both install with one command and run their own gateway, so you can test them on the same machine with different chat accounts.",
            code: install,
          },
          {
            title: "Connect one channel first",
            text: "Start with a single chat app and allow only your own account; both pair or allowlist unknown senders.",
          },
          {
            title: "Preview the migration",
            text: "`hermes import-agent openclaw --dry-run` shows what would move; add `--migrate-secrets` only if you want your API keys copied too.",
          },
          {
            title: "Decide on isolation before giving it real accounts",
            text: "Turn on OpenClaw's sandboxing or Hermes' Docker backend before the agent reads messages from other people. For a container-first option, see [OpenClaw alternatives](/blog/openclaw-alternatives).",
          },
        ],
        source: { label: "Source: Hermes Agent README", href: hermes },
      },
      {
        kind: "text",
        title: "OpenClaw vs Claude Code, and Hermes vs Claude Code",
        text: [
          "They solve different problems. OpenClaw and Hermes are assistants you message: inbox, calendar, research, reminders and tasks across apps. Claude Code is where software gets built: it reads your codebase, edits files, runs commands and tests, and opens pull requests. Many people run both: a chat assistant for daily life, and Claude Code (or Codex) for work in the repository. OpenClaw can even reuse your Claude Code login on the same machine. To make Claude Code work on its own schedule, read [how to make Claude Code proactive](/proactive-claude-code); to run several at once, see [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "When you want agents with jobs, not assistants",
        text: [
          "OpenClaw and Hermes answer when you message them. Crewmark turns Claude Code, Codex, DeepSeek Harness or OpenCode into AI employees: each has a role, a goal and working hours, wakes on a heartbeat, takes the next issue from a shared board and messages you when it needs a decision, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "An [SEO specialist](/ai-employees/seo-specialist), a [software engineer](/ai-employees/software-engineer), a [marketing agent](/ai-employees/marketing-agent) and more.",
          },
          {
            title: "Connect the agent you already use",
            text: "Each employee works in its own session and checkout.",
          },
          {
            title: "Fill the board",
            text: "Assign issues; answer only what needs you. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Try Hermes Agent and OpenClaw side by side" },
    mid: {
      title: "Need agents that work through a backlog?",
      text: "Crewmark runs Claude Code and Codex as AI employees that take the next issue from your board on a heartbeat.",
      button: "Get started",
    },
    faq: {
      title: "Hermes Agent vs OpenClaw FAQ",
      items: [
        {
          q: "Is Hermes Agent better than OpenClaw?",
          a: "It depends on what you value. Hermes Agent focuses on learning (skills it creates and improves) and asks before dangerous commands by default. OpenClaw has more channels, apps and community plugins.",
        },
        {
          q: "Can I move from OpenClaw to Hermes Agent?",
          a: "Yes. Hermes includes `hermes import-agent openclaw`, which imports your persona, memories, skills and messaging settings; run it with `--dry-run` first.",
        },
        {
          q: "Which one works with my Claude subscription?",
          a: "OpenClaw can reuse a Claude Code login on the same machine or use an API key. Hermes Agent accepts a Claude subscription only on Claude Max with purchased extra usage; Pro users need an API key.",
        },
        {
          q: "Are OpenClaw and Hermes Agent free?",
          a: "Both are open source under the MIT license. You pay for the models you use; Nous Research also offers an optional Nous Portal subscription for Hermes.",
        },
        {
          q: "OpenClaw vs Claude Code: which should I use?",
          a: "OpenClaw is a personal assistant in your chat apps; Claude Code is a coding agent in your repository. They complement each other, and OpenClaw can reuse a Claude Code login on the same machine.",
        },
        {
          q: "Hermes Agent vs Codex?",
          a: "Codex is OpenAI's coding agent for your repository. Hermes is a general personal agent that can sign in with ChatGPT/Codex to use OpenAI models.",
        },
      ],
    },
    cta: {
      title: "Give your coding agents a job, not just a chat.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the OpenClaw and Hermes Agent READMEs and docs and the GitHub API on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by the OpenClaw Foundation, Nous Research, Anthropic or OpenAI. Product names are trademarks of their owners.",
  },
};
