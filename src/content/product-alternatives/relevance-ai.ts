import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/relevance-ai, MC-439. For "relevance ai alternatives" and "relevance ai alternative open source"
// (Google autocomplete, 2026-11-13). Every fact comes from docs/compare/facts/<cards>.md (relevance-ai, lindy, crewai,
// langgraph, autogen, openbot, paperclip, crewmark; checked 2026-11-13, with a source per fact); nothing under a
// card's "Unverified" is used. Relevance AI's self-serve Pro and Team prices appear only in its docs, not on its
// pricing page, so they're left out; AutoGen's status is quoted from its README.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI Alternatives in 2026: Open Source and Hosted",
    description:
      "Relevance AI retired its Free plan and lists only Enterprise. Compare CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy and Crewmark, with prices.",
  },
  breadcrumb: "Relevance AI alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Relevance AI",
    title: "Relevance AI alternatives: open-source agent frameworks, self-hosted agent teams and hosted assistants",
    lead: "Relevance AI is a hosted low-code platform for building AI agents and linking them into multi-agent teams it calls an AI Workforce, for sales, support and operations work. As of November 13, 2026, its docs say the Free plan is retired for new sign-ups and existing accounts, and its pricing page lists one plan, Enterprise, through sales. It isn't open source and states no self-hosting option. This page covers 7 alternatives: open-source frameworks, self-hosted agent teams, a hosted assistant and Crewmark, with what each costs.",
    cta: "Get started",
    secondary: "Compare them",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI alternatives at a glance",
      text: [
        "Facts from each vendor's own pages, docs or GitHub, checked November 13, 2026. Prices in USD unless the vendor gives none. Not a ranking.",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (for reference)",
          "A hosted low-code platform for AI agents and multi-agent Workforces",
          "No",
          "Enterprise only, through sales; Free plan retired",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "A Python framework for crews of role-based agents, plus the CrewAI AMP platform",
          "Framework yes, MIT; AMP is commercial",
          "Framework free; AMP Basic free (50 workflow executions a month)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain's framework for long-running, stateful agents built as graphs in code",
          "Framework yes, MIT; LangSmith is commercial",
          "Framework free; LangSmith Developer $0, Plus $39/seat/month",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft's multi-agent framework for Python and .NET; its README says it's archived",
          "Yes: code MIT, docs CC-BY-4.0",
          "Free; no hosted service",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "A self-hosted server that runs agents you bring as a company, with an org chart and budgets",
          "Yes, MIT",
          "Self-hosted free; cloud version on a waitlist",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit's self-hostable workspace for AI coworkers",
          "Yes, MIT (uses the separately licensed CopilotKit Intelligence)",
          "Free for personal projects; Business up to $29 per active user a month",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "A hosted AI assistant for inbox, calendar, meetings and Slack, billed in credits",
          "No",
          "$50 in free credits for 7 days; then from $29.99/month per active user",
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
      id: "frameworks",
      title: "Open-source agent frameworks (you write the code)",
      text: [
        "These replace Relevance AI's builder with a library: you define agents and workflows in code and pay your model provider. CrewAI and LangGraph also have commercial platforms for deploying what you build. Side by side: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai): an MIT-licensed Python framework for crews of agents, each defined with a role, goal and backstory, plus event-driven Flows for step-by-step control. Agents can delegate work and ask each other questions. Its commercial platform, CrewAI AMP, has a free Basic plan with a visual editor, an AI copilot and 50 workflow executions a month, and a custom-priced Enterprise plan that can deploy in your own VPC. Choose it if you want role-based multi-agent teams in Python, with a no-code editor available. Prices: [CrewAI pricing](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph): LangChain's MIT-licensed framework for long-running, stateful agents, written as a graph of state, nodes and edges in Python or JavaScript. It has durable execution and human-in-the-loop pauses. LangSmith adds tracing, evaluation and deployment: Developer $0 (1 seat, no Agent Server), Plus $39/seat/month with one small Agent Server included, Enterprise custom. Choose it if you want low-level control over each step. Prices: [LangGraph pricing](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen): Microsoft's open-source framework for multi-agent apps in Python and .NET, with group chats, handoffs and AutoGen Studio for no-code prototyping. Its README says the project “has been archived and is no longer actively maintained by Microsoft” and points new users to Microsoft Agent Framework, which Microsoft calls AutoGen's direct successor. Choose it only if you maintain an existing AutoGen app or want to study its patterns.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "Self-hosted agent teams (no framework code)",
      text: [
        "Like Relevance AI, these give you a team of agents to manage from a web or desktop app, but you run them on your own machine or servers. See [Paperclip vs CrewAI](/compare/paperclip-vs-crewai).",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip): an MIT-licensed Node.js server and web UI that runs a team of AI agents as a company. You set a goal, build an org chart with roles, reporting lines and budgets, and assign issues to agents you bring, such as Claude Code, Codex or OpenClaw. Routines create recurring tasks from cron, webhook or API triggers, and approvals and budget hard stops keep a person in charge. It's self-hosted only for now; a cloud version is on a waitlist. Choose it if you want to coordinate many different agents toward one goal and cap their spending.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): a self-hostable workspace where each Bot gets its own browser, files and tools, with routines, approvals and an activity log. It runs as a desktop app for Mac and Windows or on Kubernetes for a team, with company sign-in, roles, tool permissions and audit in the team edition. You bring OpenAI, Claude, Gemini or open models, or your own agents through AG-UI. Free for personal projects; OpenBot for Business is up to $29 per active user a month, plus 5% of monthly model spend above $5,000. Choose it if you want AI coworkers with approvals and an audit trail on your own infrastructure.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "A hosted assistant: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): one hosted AI assistant rather than a team you build. It handles inbox, calendar, meetings, research, reports and follow-ups through Slack, email, iMessage, SMS, phone calls and a Chrome extension in Gmail, runs routines on a schedule or an event, and waits for approval before anything with outside impact. It starts with $50 in free credits that last 7 days, then bills every active user from $29.99/month for 3,000 credits. Choose it if you want a ready-made assistant you can sign up for yourself. See [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Relevance AI alternative",
      steps: [
        {
          title: "Decide whether you'll write code",
          text: "CrewAI, LangGraph and AutoGen are libraries you program. Paperclip, OpenBot and Lindy are apps you configure. CrewAI AMP's free Basic plan adds a visual editor if you want something in between.",
        },
        {
          title: "Decide where it runs",
          text: "Relevance AI and Lindy are hosted. Paperclip is self-hosted only for now; OpenBot runs on your laptop or Kubernetes; the frameworks run in your own code, with CrewAI AMP and LangSmith as optional hosted platforms.",
        },
        {
          title: "Check what you can sign up for today",
          text: "Relevance AI's public pricing page lists only Enterprise, through sales. CrewAI AMP Basic and LangSmith Developer are free plans, Lindy starts with free credits and no credit card, OpenBot is free for personal projects, and Paperclip's self-hosted version needs no Paperclip account.",
        },
        {
          title: "Check that the framework is maintained",
          text: "AutoGen's README says Microsoft no longer maintains it and advises against production use as it transitions to archived. For new projects Microsoft points to Microsoft Agent Framework.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Crewmark: a team of AI employees on Claude Code or Codex",
      text: [
        "Crewmark is narrower than Relevance AI. It doesn't build agents; it gives the Claude Code or Codex you already use a job. Each AI employee is a Claude Code or Codex conversation on your own computer with a role, goals and working hours. It wakes on a heartbeat, takes issues from a shared board and keeps their status current. Agents assign each other issues, comment and @mention, and each event wakes the agent it concerns.",
        "It's open source (GPL-3.0) and can be self-hosted. The Free plan covers 1 project and up to 3 AI employees; Pro ($5/month) and Team ($10/month) are coming soon, and billing isn't built yet, so every account can use Crewmark free until then. Agent usage is paid to your agent provider, and your computer has to stay on for heartbeats. Details on [Crewmark pricing](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Give each employee a role, goals and projects, for example an SEO Specialist or a Software Engineer. See [AI employee roles](/ai-employees).",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues with statuses and priorities, and make regular ones repeat. When an agent needs a review, permission or information, it sets the issue to Needs action and waits.",
        },
        {
          title: "Set working hours",
          text: "The heartbeat wakes each employee every 15 minutes to 24 hours during its working hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Want agents you can start with today?",
    text: "Crewmark turns your Claude Code or Codex into AI employees with roles, a heartbeat and a shared board. Free for up to 3 employees.",
    button: "Get started",
  },
  faq: {
    title: "Relevance AI alternatives FAQ",
    items: [
      {
        q: "Is there an open-source alternative to Relevance AI?",
        a: "Yes. CrewAI and LangGraph are MIT-licensed frameworks, and AutoGen's code is MIT, though its README says it's archived. Paperclip (MIT) and OpenBot (an MIT application template on the separately licensed CopilotKit Intelligence) are self-hosted apps for running agent teams, and Crewmark is GPL-3.0. Relevance AI itself isn't open source.",
      },
      {
        q: "Does Relevance AI have a free plan?",
        a: "No. As of November 13, 2026, its docs say the Free plan is retired for new sign-ups and existing accounts, and its pricing page lists one plan, Enterprise, with custom pricing through sales. Details on [Relevance AI pricing](/pricing/relevance-ai).",
      },
      {
        q: "Is there a free Relevance AI alternative?",
        a: "The CrewAI, LangGraph and AutoGen frameworks are free; you pay your model provider. CrewAI AMP's Basic plan is free with 50 workflow executions a month, and LangSmith's Developer plan is $0 for 1 seat. Paperclip is free to self-host, OpenBot is free for personal projects, Lindy starts with $50 in credits for 7 days, and Crewmark's Free plan covers up to 3 AI employees.",
      },
      {
        q: "Is there a no-code alternative to Relevance AI?",
        a: "CrewAI AMP's free Basic plan includes a visual editor and an AI copilot. Lindy is set up in conversation, with no builder. AutoGen Studio is a no-code prototyping UI, but its README says it isn't meant to be a production-ready app.",
      },
      {
        q: "Can I self-host a Relevance AI alternative?",
        a: "Yes. Paperclip runs as one Node.js process or a Docker image, OpenBot on your laptop or Kubernetes, and Crewmark from its repository (Node.js, PostgreSQL and Google sign-in). The CrewAI, LangGraph and AutoGen frameworks run in your own code; CrewAI AMP Enterprise can deploy in your own VPC, and LangSmith's self-hosted Agent Server is an Enterprise option. Relevance AI states no self-hosting option.",
      },
      {
        q: "Relevance AI vs Lindy: what's the difference?",
        a: "Relevance AI is a platform for building many specialist agents and linking them into a Workforce, sold through sales. Lindy is one ready-made assistant for inbox, calendar, meetings and Slack, billed per active user in credits from $29.99/month. See [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
    ],
  },
  cta: {
    title: "Give your agents a job without a sales call.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against each product's own pages, docs, pricing and GitHub on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs, CopilotKit or Lindy. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
