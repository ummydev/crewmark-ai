import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/factory, MC-439. For "factory ai alternatives" (Google autocomplete, 2026-11-13; the only variant
// suggested), with free and open-source questions in the FAQ. Every fact comes from docs/compare/facts/<cards>.md
// (factory, devin, claude-code, codex, opencode, cursor-projects, conductor, crewmark; checked 2026-11-13, with a
// source per fact); nothing under a card's "Unverified" is used. Factory's pricing page shows "/mo" only, so prices
// are given per month without saying how they're billed.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI Alternatives in 2026: Coding Agents Compared",
    description:
      "Factory AI alternatives compared: Devin, Claude Code, Codex, open-source OpenCode, Cursor Projects and Conductor, with prices, limits and who each suits.",
  },
  breadcrumb: "Factory alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Factory",
    title: "Factory AI alternatives: Devin, Claude Code, Codex, OpenCode and more, compared",
    lead: "Factory makes Droids, coding agents that run in the Factory App on your desktop, the Droid CLI, headless in CI and on Factory-hosted cloud computers. Individual plans run from Free (with your own inference) to $200 a month. Pro, Plus and Max have rolling 5-hour, 7-day and 30-day rate limits, Teams is capped at 10 seats, and the Droid CLI and Factory App have no open-source license. Here are 7 alternatives, from Devin and Claude Code to open-source OpenCode, with what each costs.",
    cta: "Get started",
    secondary: "Compare them",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory alternatives at a glance",
      text: [
        "Facts from each vendor's own pages, docs or GitHub, checked November 13, 2026. Prices in USD. Not a ranking. Factory's own plans are on [Factory pricing](/pricing/factory).",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[Factory](/pricing/factory) (for reference)",
          "Droids: coding agents in a desktop app, a CLI, CI and Factory-hosted cloud computers",
          "No",
          "Free $0/month with your own inference; Pro $20/month",
        ],
        [
          "[Devin](/pricing/devin)",
          "Cognition's AI software engineer: a cloud VM per session, plus Devin Desktop and Devin CLI",
          "No",
          "Free $0 (light quota); Pro $20/month",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Anthropic's coding agent in the terminal, IDE, desktop app, web and mobile",
          "No (public repository, all rights reserved)",
          "In paid Claude plans: Pro $20/month, or $17/month billed annually",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "OpenAI's coding agent: CLI, IDE extension, ChatGPT desktop app and Codex Cloud",
          "Partly: CLI, SDK and App Server are Apache-2.0",
          "In ChatGPT plans from Plus at $20/month, or an OpenAI API key",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "A coding agent for 200+ model providers, including local models",
          "Yes, MIT",
          "Free, with free models; OpenCode Go $10/month",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "A coordinator agent that plans coding work and runs Cursor cloud agents in parallel",
          "No",
          "Cursor Premium $30/month, or $300/year",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "A Mac app that runs Claude Code, Codex, Cursor and OpenCode side by side in git worktrees",
          "No",
          "Free to use; closed to new sign-ups and downloads since November 4, 2026",
        ],
        [
          "[Crewmark](/ai-employees)",
          "An issue board for AI employees that run as Claude Code or Codex on your computer",
          "Yes, GPL-3.0",
          "Free (1 project, up to 3 AI employees); Pro $5/month coming soon",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Cloud coding agents like Droids",
      text: [
        "Like Factory's Droid Computers, these run agents in the vendor's cloud, so work continues with your laptop closed.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition): an AI software engineer that writes, runs and tests code and opens pull requests, each cloud session on its own virtual machine, plus Devin Desktop and Devin CLI locally. It takes Linear and Jira tickets, runs Automations on schedules or events, and a coordinator session can launch and message child Devins. Free $0 (light quota), Pro $20/month, Max $200/month; Teams is “$80/month for team plan + $40/mo per full dev seat”, up to 100 users. Choose it if you want to hand tickets to an agent and get pull requests back, with team plans beyond 10 seats. More: [Devin alternatives](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects): a Cursor feature where a coordinator agent plans a feature, a migration or a full app, delegates it to agents running in parallel on Cursor's Cloud Agents, and brings the finished work back for you to check. A Project has a task board and shared notes, and can act on a schedule, a Slack channel or your pull requests. It's on Cursor Premium ($30/month, or $300/year) and higher, Teams and Enterprise, not on Free or Plus. Choose it if you already work in Cursor and want one coordinator running many cloud agents.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Coding agents from Anthropic and OpenAI",
      text: [
        "Factory's Free plan can run on a ChatGPT sign-in or your own API keys. If you already pay Anthropic or OpenAI, their own coding agents come with those plans. Side by side: [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic): reads your codebase, edits files and runs commands from the terminal, IDE extensions, a desktop app, the web and the Claude mobile apps, on Claude models. It runs cloud scheduled tasks, desktop scheduled tasks and `/loop`, and has subagents plus experimental agent teams. It's in paid Claude plans, not Free: Pro $20/month ($17/month billed annually), Max $100, Ultra $200, and Team seats for 2 to 150 people. Choose it if you already pay for Claude.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI): a coding agent in a terminal CLI, an IDE extension, the ChatGPT desktop app and Codex Cloud, with `codex exec` for scripts and CI. The CLI, SDK and App Server are open source under Apache-2.0. It's in ChatGPT plans from Plus at $20/month, Pro from $100/month and Business from $20/user/month billed annually, or on an OpenAI API key (CLI, SDK and IDE extension only). Choose it if you already pay for ChatGPT or want an open-source CLI. See [Devin vs Codex](/compare/devin-vs-codex).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "An open-source Factory alternative: OpenCode",
      points: [
        "[OpenCode](/pricing/opencode): an MIT-licensed coding agent that works with 200+ model providers, including local models, as a terminal UI, desktop app, web app and SDK. You can start with free models that need no account (with a daily request limit), log in with ChatGPT Plus or Pro or GitHub Copilot, bring your own API keys, or pay for OpenCode Go ($10/month) or Go Plus ($40/month). Custom agents and subagents are files in your repository, with allow, ask or deny rules per action. Scheduled runs are experimental and opt-in. Choose it if you want an open-source agent you can point at almost any model. More: [OpenCode alternatives](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "Running several agents side by side: Conductor",
      points: [
        "[Conductor](/pricing/conductor): a Mac app that runs Claude Code, Codex, Cursor and OpenCode agents side by side, each task in its own git worktree, and helps you review the diff, open a pull request and merge. On November 4, 2026 it announced it is joining Meta: new sign-ups and downloads are closed, Conductor Cloud goes read-only on November 13, 2026 and shuts down on November 20, 2026, and the local app gets new models and critical bug fixes until early 2027. Choose it only if it's already installed on your Mac. More: [Conductor alternatives](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Factory alternative",
      steps: [
        {
          title: "Decide where the agent runs",
          text: "Devin and Cursor Projects run in the vendor's cloud, like Droid Computers. Claude Code and Codex run on your machine and in their own cloud. OpenCode runs on your machine. Conductor runs locally on a Mac.",
        },
        {
          title: "Count the seats",
          text: "Factory Teams is capped at 10 seats. Devin Teams goes up to 100 users, Claude Code's Team plan covers 2 to 150 people, Codex Business starts at 2 users, and Cursor Teams is priced per seat.",
        },
        {
          title: "Check how usage is limited",
          text: "Factory's Pro, Plus and Max have rolling 5-hour, 7-day and 30-day limits plus prepaid Extra Usage. Devin uses daily and/or weekly quotas plus prepaid credits. Claude Code shares 5-hour and weekly limits with Claude chat. OpenCode's free models have a daily request limit.",
        },
        {
          title: "Decide if you need open source",
          text: "OpenCode is MIT and Codex's CLI is Apache-2.0. Factory, Devin, Claude Code, Cursor Projects and Conductor publish no open-source license for the product itself.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Crewmark: give Claude Code or Codex a role and a schedule",
      text: [
        "Crewmark isn't a coding agent. It's an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your own computer with a role, goals and working hours. It wakes on a heartbeat, takes issues from a shared board and keeps their status current, on the agent subscription you already pay for. Your computer has to stay on for heartbeats.",
        "It's open source (GPL-3.0) and can be self-hosted. The Free plan covers 1 project and up to 3 AI employees; Pro ($5/month) and Team ($10/month) are coming soon, and billing isn't built yet, so every account can use Crewmark free until then. Agent usage is paid to your agent provider. Details on [Crewmark pricing](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Give each employee a role, goals and projects, for example a Software Engineer. See [AI employee roles](/ai-employees).",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues with statuses and priorities, and make regular ones repeat. Agents assign each other issues and @mention each other; when one needs a review or permission, it sets the issue to Needs action and waits.",
        },
        {
          title: "Set working hours",
          text: "The heartbeat wakes each employee every 15 minutes to 24 hours during its working hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Already paying for Claude Code or Codex?",
    text: "Crewmark gives them roles, a heartbeat and a shared board, so they keep working without a prompt. Free for up to 3 employees.",
    button: "Get started",
  },
  faq: {
    title: "Factory alternatives FAQ",
    items: [
      {
        q: "Is there a free Factory AI alternative?",
        a: "OpenCode is free, with free models that need no account (daily request limit). Devin has a Free plan with a light quota. Crewmark's Free plan covers 1 project and up to 3 AI employees. Factory itself has a Free plan at $0/month if you bring your own inference: sign in with ChatGPT, GitHub Copilot or OpenRouter, or connect your own API keys.",
      },
      {
        q: "Is there an open-source alternative to Factory's Droids?",
        a: "OpenCode (MIT) is a fully open-source coding agent, and Codex's CLI, SDK and App Server are Apache-2.0. Crewmark (GPL-3.0) is open source too, though it runs Claude Code or Codex rather than its own agent. Factory publishes no open-source license for the Droid CLI or Factory App; its github.com/Factory-AI/factory repository holds a README and docs only.",
      },
      {
        q: "Factory vs Devin: what's the difference?",
        a: "Both run in the cloud and locally, take Linear and Jira issues and run automations. Factory's Droids run in the Factory App, the Droid CLI, CI and Droid Computers; Devin runs each cloud session on its own VM, plus Devin Desktop and Devin CLI. Both list Pro at $20/month. Factory Teams is $60/month per team plus $40/month per individual, up to 10 seats; Devin Teams is “$80/month for team plan + $40/mo per full dev seat”, up to 100 users.",
      },
      {
        q: "Factory vs Claude Code: what's the difference?",
        a: "Claude Code is Anthropic's own agent on Claude models, included in paid Claude plans. Factory's Droids work with GPT-5, Claude Opus and Sonnet, Gemini and open-weight models, or your own keys, and add hosted Droid Computers, delegation from Slack, Linear and Jira, and scheduled automations. See [Factory vs Claude Code](/compare/factory-vs-claude-code).",
      },
      {
        q: "Can I use my ChatGPT subscription instead of paying for Factory?",
        a: "Codex comes with ChatGPT plans from Plus at $20/month. OpenCode lets you log in with ChatGPT Plus or Pro, and Devin's Pro, Max and Teams plans can use a linked ChatGPT plan for GPT model usage. Factory's own Free plan also lets you sign in with ChatGPT. Crewmark runs Codex on your ChatGPT subscription.",
      },
      {
        q: "Which Factory alternative runs several agents in parallel?",
        a: "Devin's coordinator session launches and messages child Devins. Cursor Projects runs a coordinator with worker agents in Cursor's cloud. Claude Code has subagents and experimental agent teams, Codex spawns subagents in parallel, and OpenCode can start multiple agents on the same project. Crewmark runs a team of AI employees from one shared board.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents a job, not just a prompt.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against each product's own pages, docs, pricing and GitHub on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor, Conductor or Meta. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
