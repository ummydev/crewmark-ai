import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/langgraph, MC-439. For "langgraph alternatives", "langgraph alternatives 2026", "langgraph alternatives
// reddit", "langgraph alternatives open-source" (Google autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/{langgraph,crewai,autogen,openclaw,hermes-agent,paperclip,claude-code,crewmark}.md (checked
// 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used. "langgraph alternatives in java"
// is skipped: no card states Java support.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph Alternatives in 2026: CrewAI, AutoGen and More",
    description:
      "LangGraph alternatives compared: CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, Claude Code agent teams and Crewmark, by license, price and fit.",
  },
  breadcrumb: "LangGraph alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · LangChain LangGraph",
    title: "LangGraph alternatives in 2026: frameworks, ready-made agents and agent teams",
    lead: "LangGraph is LangChain's open-source (MIT) framework for long-running, stateful agents: you define a workflow as a graph of state, nodes and edges, in Python or JS/TS. It is low-level by design and “does not prescribe prompts or agent architecture.” On LangChain's LangSmith platform, the free Developer plan has one seat and no Agent Server, and self-hosted deployment is Enterprise-only. If you want agents defined by role, a ready-made agent instead of a library, or a team of coding agents, here are seven options with license, price and who each one suits.",
    cta: "Get started",
    secondary: "See the comparison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph alternatives at a glance",
      text: [
        "Facts from each product's README, docs and pricing page, checked November 13, 2026. Prices in USD. LangGraph itself is free under MIT; LangSmith Plus is $39 per seat a month. Details in [LangGraph pricing](/pricing/langgraph).",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "A Python framework for crews of role-based agents and event-driven flows, plus the commercial CrewAI AMP platform",
          "Framework yes (MIT); AMP is commercial",
          "Framework free, plus your model provider; AMP Basic free (50 workflow executions a month)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft's multi-agent framework in Python and .NET; its README says it is archived and no longer maintained by Microsoft",
          "Yes (code MIT, docs CC-BY-4.0)",
          "Free, plus your model provider; no hosted service",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "A personal AI assistant that runs on your own computer and answers you in chat apps",
          "Yes (MIT)",
          "Free; no paid tier or hosted service; you pay your model provider",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "Nous Research's personal agent that writes and refines its own skills, used from a terminal, a desktop app or chat apps",
          "Yes (MIT)",
          "Agent free, plus your model provider; optional Nous Portal Plus $20 a month",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "A self-hosted server and web UI that runs agents you bring (Claude Code, Codex, OpenClaw and others) as a company with an org chart, budgets and tasks",
          "Yes (MIT)",
          "Self-hosted version free; no prices published; cloud version on a waitlist",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "An experimental Claude Code feature where a lead session spawns teammates that share a task list and message each other",
          "No",
          "Comes with Claude Code on paid Claude plans, from Pro at $20 a month ($17 a month billed annually)",
        ],
        [
          "[Crewmark](/ai-employees)",
          "An issue tracker for a team of AI employees, each a Claude Code or Codex conversation on your computer that wakes on a heartbeat",
          "Yes (GPL-3.0)",
          "Free (1 project, up to 3 AI employees); Pro $5 a month coming soon; agent usage paid to your agent provider",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Other agent frameworks",
      text: [
        "Libraries you call from your own code, like LangGraph. Side by side: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph) and [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI: an MIT-licensed Python framework. LangGraph has no built-in role concept; in CrewAI each agent is defined with a role, goal and backstory. With delegation turned on, agents hand work to each other and ask each other questions, and Flows add event-driven, step-by-step control with state and branching. CrewAI AMP adds a no-code Studio, tracing, cron scheduling and deployment. Choose it if you write Python (3.10 or later, below 3.14) and want agents organized by role. Prices: [CrewAI pricing](/pricing/crewai).",
        "AutoGen: Microsoft's MIT-licensed multi-agent framework in Python and .NET, with group chats, selector and swarm teams. On November 13, 2026, its README said the project “has been archived and is no longer actively maintained by Microsoft,” advised against production use and pointed new users to Microsoft Agent Framework, its successor. Choose it if you maintain an existing AutoGen app or want to study multi-agent patterns. More in [AutoGen alternatives](/alternatives/autogen).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Ready-made agents instead of a library",
      text: [
        "With LangGraph you build the agent. These two are agents you install and run, each with a built-in scheduler. Compared in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: an MIT-licensed personal assistant that runs as a Gateway on your own computer and answers in WhatsApp, Telegram, Slack, Discord and other chat apps. It runs several agents on one Gateway, has a built-in Automations scheduler, and its project has no paid tier or hosted service. Choose it if you want one assistant on hardware you control, with model providers you can swap. More in [OpenClaw alternatives](/blog/openclaw-alternatives).",
        "Hermes Agent: Nous Research's MIT-licensed personal agent. It writes skills from experience, keeps its own memory and runs routines on a built-in cron scheduler; in Bot Mode, named Bots with their own models message each other directly. Choose it if you want an agent that improves its own skills over time and that you can reach from a terminal, a desktop app and chat apps. More in [Hermes Agent alternatives](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coordinating coding agents you already use",
      text: [
        "If the agents you want to coordinate are coding agents such as Claude Code or Codex, these run them as a team. See [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) and [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: a self-hosted, MIT-licensed Node.js server and web UI that runs agents as a company: an org chart with roles and budgets, issues assigned to agents or people, approvals, and routines on cron, webhook or API triggers. It says it is “not an agent framework”: it drives agents you bring, such as Claude Code, Codex and OpenClaw, through adapters. Choose it if you want many agents working toward one goal, with spending caps, on your own server.",
        "Claude Code agent teams: an experimental Claude Code feature, off by default. A lead session spawns teammates, separate Claude Code instances that share a task list with dependencies and message each other directly. Choose it if you already pay for a Claude plan and want several Claude Code instances working on one coding task.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a LangGraph alternative",
      steps: [
        {
          title: "Need low-level control over each step?",
          text: "That's what LangGraph is built for. For a higher-level starting point, its README points to Deep Agents, which is built on LangGraph and adds subagents.",
        },
        {
          title: "Want agents defined by role?",
          text: "CrewAI agents have a role, goal and backstory; Paperclip has an org chart with titles and job descriptions; Crewmark gives each AI employee a role, KPIs and projects.",
        },
        {
          title: "Need scheduled runs?",
          text: "LangGraph has cron jobs on LangSmith Agent Server, not stated for the library alone. CrewAI has cron scheduling on AMP. OpenClaw and Hermes Agent have built-in schedulers, Paperclip runs routines, and Crewmark has a heartbeat and repeating issues.",
        },
        {
          title: "Watching costs?",
          text: "The open-source frameworks are free, and you pay for the model calls. LangGraph cron jobs send the same input on every run, and LangChain's docs say to delete unused ones because recurring runs can incur LLM API charges. Paperclip has budgets with hard stops; Crewmark uses your own Claude Code or Codex subscription.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "LangGraph builds agents into your app. Crewmark runs your coding agents as a team.",
      text: [
        "Crewmark isn't a framework, and you don't write a graph. It's an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your own computer, with a role, KPIs and projects. It wakes on a heartbeat during its working hours, takes issues from a shared board, and when it needs a review or permission it sets the issue to Needs action and asks there.",
        "It's open source under GPL-3.0 and free for 1 project with up to 3 AI employees. You keep paying your agent provider as usual, and your computer has to stay on for heartbeats. Plans are on the [pricing page](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from the [AI employee roles](/ai-employees), such as software engineer or data analyst, and write its KPIs and projects.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues to the employee or to people, and make regular ones repeat daily, weekly or monthly.",
        },
        {
          title: "Set its hours",
          text: "Choose working hours and a heartbeat between 15 minutes and 24 hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "A team of agents without writing a graph",
    text: "Crewmark wakes your Claude Code or Codex session on a heartbeat and hands it the next issue from a shared board.",
    button: "Get started",
  },
  faq: {
    title: "LangGraph alternatives FAQ",
    items: [
      {
        q: "What are the open-source alternatives to LangGraph?",
        a: "CrewAI's framework, AutoGen (whose README says it is archived and no longer maintained by Microsoft), OpenClaw, Hermes Agent and Paperclip are all MIT-licensed. Crewmark is open source under GPL-3.0. Claude Code, which runs agent teams, isn't open source.",
      },
      {
        q: "Is LangGraph free?",
        a: "The framework is free under MIT. LangChain's LangSmith platform has a Developer plan at $0 per seat a month (1 seat, up to 5k base traces a month then pay-as-you-go, no Agent Server), Plus at $39 per seat a month with one Small Agent Server included, and custom Enterprise pricing. More in [LangGraph pricing](/pricing/langgraph).",
      },
      {
        q: "LangGraph vs CrewAI: what's the difference?",
        a: "LangGraph is low-level: you build a graph of state, nodes and edges, and it has no built-in role concept. CrewAI defines each agent by role, goal and backstory and groups them into crews, with Flows for step-by-step control. Both frameworks are MIT-licensed. CrewAI is a Python framework; LangGraph comes in Python and JS/TS. See [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      },
      {
        q: "Do I need LangChain to use LangGraph?",
        a: "No. LangChain's docs say “LangGraph does not require LangChain.” Examples often use LangChain model integrations, but LangGraph works with whatever models your code calls.",
      },
      {
        q: "Is AutoGen still an alternative to LangGraph in 2026?",
        a: "Its README says the project “has been archived and is no longer actively maintained by Microsoft” and advises against production use. Microsoft points new users to Microsoft Agent Framework, which it calls AutoGen's direct successor. See [AutoGen alternatives](/alternatives/autogen).",
      },
      {
        q: "Which LangGraph alternatives run agents on a schedule?",
        a: "OpenClaw (Automations), Hermes Agent (a built-in cron scheduler), Paperclip (routines on cron, webhooks or an API) and Crewmark (a heartbeat in working hours and repeating issues). CrewAI schedules on its AMP platform, and Claude Code has scheduled tasks separately from agent teams. LangGraph itself runs cron jobs on LangSmith Agent Server.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents roles and a board.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Facts checked on November 13, 2026 against each product's README, documentation and pricing page.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by LangChain or any other company named on this page. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
