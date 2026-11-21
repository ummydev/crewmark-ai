import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/autogen, MC-439. For "autogen alternatives", "autogen alternatives reddit", "microsoft autogen
// alternatives", "autogen studio alternatives", "autogen ai alternatives" (Google autocomplete, 2026-11-13). Every fact
// comes from docs/compare/facts/{autogen,crewai,langgraph,openclaw,hermes-agent,paperclip,claude-code,crewmark}.md
// (checked 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used. AutoGen's status is quoted
// from its README, as the card asks, and the "maintenance mode" wording (Unverified) isn't used.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen Alternatives in 2026: CrewAI, LangGraph and More",
    description:
      "AutoGen's README says Microsoft no longer maintains it. Compare CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip and Crewmark by license and price.",
  },
  breadcrumb: "AutoGen alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Microsoft AutoGen",
    title: "AutoGen alternatives in 2026: frameworks and agents to move to",
    lead: "AutoGen is Microsoft's open-source framework for multi-agent applications in Python and .NET, with AutoGen Studio as a no-code prototyping UI. When we checked on November 13, 2026, its README said: “This project has been archived and is no longer actively maintained by Microsoft.” It points new users to Microsoft Agent Framework, which Microsoft calls AutoGen's “direct successor.” This page covers that successor and seven other options, from code frameworks to agents that run on their own, with license, price and who each one suits.",
    cta: "Get started",
    secondary: "See the comparison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen alternatives at a glance",
      text: [
        "Facts from each product's README, docs and pricing page, checked November 13, 2026. Prices in USD. AutoGen itself is free and open source (code under MIT), and you pay your model provider.",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "A Python framework for crews of role-based agents and event-driven flows, plus the commercial CrewAI AMP platform",
          "Framework yes (MIT); AMP is commercial",
          "Framework free, plus your model provider; AMP Basic free (50 workflow executions a month)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain's framework for long-running, stateful agents built as a graph, in Python and JS/TS",
          "Framework yes (MIT); LangSmith is commercial",
          "Framework free; LangSmith Developer $0 per seat a month, Plus $39 per seat a month",
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
      id: "successor",
      title: "What replaced AutoGen: Microsoft Agent Framework",
      text: [
        "Microsoft's own answer is Agent Framework. Microsoft Learn says: “The Agent Framework is the direct successor, created by the same teams,” and it has a migration guide from AutoGen. The rest of this page covers other projects.",
      ],
      points: [
        "AutoGen's README recommends Agent Framework for new projects and says AutoGen is “now community-managed.”",
        "On production use, the README says: “AutoGen was developed for research and experimentation and as it transitions to archived, we continue to advise against production use.”",
        "AutoGen Studio, its no-code UI, “is not meant to be a production-ready app,” per the same README.",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Multi-agent frameworks you write code with",
      text: [
        "Closest to AutoGen: open-source libraries you call from your own code, with agents that work together. Side by side: [CrewAI vs AutoGen](/compare/crewai-vs-autogen) and [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI: an MIT-licensed Python framework. Each agent is defined with a role, goal and backstory; with delegation turned on, agents hand work to each other and ask each other questions, and Flows add event-driven, step-by-step control. CrewAI AMP, the commercial platform, adds a no-code Studio, tracing, cron scheduling and deployment. Choose it if you write Python (3.10 or later, below 3.14) and want role-based agents inside your own application. Prices: [CrewAI pricing](/pricing/crewai).",
        "LangGraph: LangChain's MIT-licensed framework for long-running, stateful agents, defined as a graph of state, nodes and edges in Python or JS/TS. It pauses for human input with interrupts and resumes after failures; LangSmith adds tracing, evaluation and deployment to Agent Server. Choose it if you want low-level control over each step. Prices: [LangGraph pricing](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Ready-made agents that run on their own",
      text: [
        "AutoGen is a library for building agents. These two are agents you install and run, with schedulers built in. Compared in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: an MIT-licensed personal assistant that runs as a Gateway on your own computer and answers in WhatsApp, Telegram, Slack, Discord and other chat apps. Several agents can run on one Gateway, and a team preset creates a coordinator with researcher, writer and reviewer agents. Choose it if you want one assistant on hardware you control, with model providers you can swap. More in [OpenClaw alternatives](/blog/openclaw-alternatives).",
        "Hermes Agent: Nous Research's MIT-licensed personal agent. It writes skills from experience, keeps its own memory and has a built-in cron scheduler; in Bot Mode, named Bots with their own models and routines message each other directly. Choose it if you want several specialist agents you can reach from a terminal, a desktop app and chat apps. More in [Hermes Agent alternatives](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Running coding agents as a team",
      text: [
        "These coordinate coding agents that already exist, instead of agents you build. See [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) and [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: a self-hosted, MIT-licensed Node.js server and web UI that runs a team of agents as a company: an org chart with roles and budgets, issues assigned to agents or people, and routines on cron, webhook or API triggers. It drives agents you bring, such as Claude Code, Codex, OpenClaw and Hermes, through adapters. Choose it if you want many different agents working toward one goal, with spending caps, on your own server.",
        "Claude Code agent teams: an experimental Claude Code feature, off by default. A lead session spawns teammates, separate Claude Code instances that share a task list and message each other directly, and you can message any teammate. Token use is higher because each teammate is a separate Claude instance. Choose it if you already pay for a Claude plan and want a group of agents that talk to each other on one coding task.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose an AutoGen alternative",
      steps: [
        {
          title: "Maintaining an AutoGen app?",
          text: "Look at Microsoft Agent Framework and its migration guide from AutoGen on Microsoft Learn. That's the path AutoGen's README recommends.",
        },
        {
          title: "Want to keep writing agent code?",
          text: "CrewAI and LangGraph are MIT-licensed libraries, like AutoGen. CrewAI is a Python library; LangGraph comes in Python and JS/TS.",
        },
        {
          title: "Need a hosted place to run and trace agents?",
          text: "AutoGen has no hosted service. LangSmith Plus ($39 per seat a month) includes one Small Agent Server; CrewAI AMP's Basic plan is free for 50 workflow executions a month.",
        },
        {
          title: "Want agents that keep working without you?",
          text: "OpenClaw and Hermes Agent have built-in schedulers, Paperclip runs routines on cron, webhooks or an API, and Crewmark wakes Claude Code or Codex on a heartbeat during working hours. AutoGen's README doesn't mention scheduling.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "AutoGen builds agent apps. Crewmark gives your coding agents a job.",
      text: [
        "Crewmark isn't a framework for building multi-agent applications. It's an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your own computer, with a role, KPIs and projects. It wakes on a heartbeat during its working hours, takes issues from a shared board, and when it needs a review or permission it sets the issue to Needs action and asks there.",
        "It's open source under GPL-3.0 and free for 1 project with up to 3 AI employees. You keep paying your agent provider as usual, and your computer has to stay on for heartbeats. Plans are on the [pricing page](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its KPIs and projects.",
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
    title: "Agents that pick up the next task on their own",
    text: "Crewmark wakes your Claude Code or Codex session on a heartbeat and hands it the next issue from a shared board.",
    button: "Get started",
  },
  faq: {
    title: "AutoGen alternatives FAQ",
    items: [
      {
        q: "What replaced AutoGen?",
        a: "Microsoft Agent Framework. AutoGen's README points new users to it, and Microsoft Learn calls it “the direct successor, created by the same teams,” with a migration guide from AutoGen.",
      },
      {
        q: "Is Microsoft AutoGen still maintained?",
        a: "Not by Microsoft. On November 13, 2026, its README said: “This project has been archived and is no longer actively maintained by Microsoft. Microsoft is not providing bug fixes, security fixes, new features, or support for this project.” The README also says the project is now community-managed.",
      },
      {
        q: "Is there a free AutoGen alternative?",
        a: "Several are free and open source: the CrewAI and LangGraph frameworks, OpenClaw, Hermes Agent and self-hosted Paperclip, all under MIT. With each you pay your model provider. Crewmark is open source under GPL-3.0 and has a free plan for 1 project with up to 3 AI employees.",
      },
      {
        q: "What's an alternative to AutoGen Studio?",
        a: "AutoGen's README says AutoGen Studio “is not meant to be a production-ready app.” For a visual builder, CrewAI AMP has a no-code Studio, and its Basic plan is free with a visual editor and 50 workflow executions a month. For LangGraph, LangSmith Studio is LangChain's tool for visual prototyping.",
      },
      {
        q: "Is AutoGen free?",
        a: "Yes. The code is open source under MIT (documentation under CC-BY-4.0), and you pay your model provider. The README mentions no hosted or paid AutoGen service.",
      },
      {
        q: "Which AutoGen alternatives let agents talk to each other?",
        a: "CrewAI agents can delegate work and ask each other questions when delegation is turned on; LangGraph uses subagents, handoffs and routers you design in the graph; OpenClaw has agent-to-agent access between agents on one Gateway; Hermes Agent's Bots message each other in Bot Mode; Claude Code agent teams message each other directly. In Crewmark, agents work together through issues: they assign them, comment and @mention.",
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
    "Crewmark is an independent product, not affiliated with or endorsed by Microsoft or any other company named on this page. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
