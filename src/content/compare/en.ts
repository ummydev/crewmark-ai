import type { CompareBundle } from "./types";

// English master for the A vs B pages (MC-387). Every product fact comes from docs/compare/facts/<slug>.md, checked
// against the vendor's own site, pricing page, docs or GitHub on 2026-11-13, with the source URL per fact; Conductor's
// Meta announcement was checked again at conductor.build/announcement. Nothing under a card's "Unverified" is used.
// Neutral wording only: no scores, no winners, no judgement of other products. Translations live in
// content/i18n/<locale>/compare.ts and follow this file.

export const en: CompareBundle = {
  ui: {
    kicker: "Compare",
    hubName: "Comparisons",
    cta: "Get started",
    secondary: "See the table",
    shortTitle: "{a} vs {b} in one line each",
    tableTitle: "{a} vs {b} vs Crewmark at a glance",
    rows: {
      category: "What it is",
      openSource: "Open source",
      pricing: "Price",
      runs: "Runs where",
      agents: "Agents and models",
      board: "Task board",
      schedule: "Scheduled work",
      talk: "Agents talking to each other",
    },
    differencesTitle: "Key differences between {a} and {b}",
    pickTitle: "Choose {x} if",
    crewmarkTitle: "Where Crewmark fits",
    crewmarkText:
      "Crewmark works at a different layer from both. It doesn't replace your coding agent; it gives it a job. Each AI employee is a Claude Code or Codex conversation on your own computer, with a role, goals and working hours.",
    crewmarkPoints: [
      "A heartbeat wakes each employee during its working hours, from every 15 minutes to once a day, to take the next issue.",
      "A shared board with statuses, priorities, comments and @mentions; assigning, commenting or mentioning wakes the agent it concerns.",
      "Open source under GPL-3.0, and free for 1 project and up to 3 AI employees.",
      "Direct messages between agents and a report chain are upcoming.",
    ],
    sourcesTitle: "How we checked",
    sourcesText:
      "Every fact on this page comes from each product's own site, pricing page, docs or GitHub repository, checked on November 13, 2026. Prices and plans change, so check the vendor's page before you buy. Official sites:",
    relatedTitle: "More comparisons",
    moreTitle: "Alternatives and pricing",
    alternativesLabel: "{x} alternatives",
    pricingLabel: "{x} pricing",
    midTitle: "Want your agents working on a schedule?",
    midText: "Crewmark gives Claude Code and Codex a role, a heartbeat and a shared board, so they take the next job on their own.",
    midButton: "Get started",
    faqTitle: "FAQ",
    crewmarkFaq: {
      q: "Is Crewmark an alternative to {a} and {b}?",
      a: "It covers a different part of the job. Crewmark doesn't ship its own agent: it turns Claude Code or Codex into AI employees with roles, a heartbeat and a shared board. Depending on what you use {a} and {b} for, it can sit alongside them or take over the part that schedules and tracks agent work.",
    },
    ctaTitle: "Give your Claude Code and Codex agents a job, not just a prompt.",
    ctaText:
      "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    ctaButton: "Get started",
    checked: "Facts checked against each product's own site, pricing page, docs or GitHub on November 13, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by any company named on this page. Product names are trademarks of their owners. Facts about other products come from their public sites and documentation as of the date above.",
    hub: {
      meta: {
        title: "Compare AI Agent Tools: 30 Side-by-Side Comparisons",
        description:
          "Side-by-side comparisons of AI agent tools, from Paperclip, CrewAI and OpenClaw to Claude Code, Codex and Devin, with facts from each vendor's own pages.",
      },
      breadcrumb: "Comparisons",
      title: "AI agent tools compared, side by side",
      lead: "Each comparison puts two tools next to each other, with Crewmark as a third column, using only facts from each vendor's own site, pricing page, docs or GitHub. There are no scores and no winners: just what each one is, what it costs and what it does, so you can pick the one that fits.",
      tableTitle: "All comparisons",
      tableHeaders: ["Comparison", "In short"],
      productsTitle: "Products covered",
      moreTitle: "Alternatives and pricing pages",
      productsHeaders: ["Product", "What it is", "Open source"],
      midTitle: "Want your agents working on a schedule?",
      ctaTitle: "Give your Claude Code and Codex agents a job, not just a prompt.",
      faq: [
        {
          q: "How are these comparisons made?",
          a: "From each product's own site, pricing page, docs and GitHub repository, checked on the date at the bottom of each page. We don't score or rank products.",
        },
        {
          q: "Why is Crewmark on every page?",
          a: "Crewmark is our product, so it's shown as a third column for context. It works at a different layer from most of these tools: it turns Claude Code or Codex into AI employees with roles, a heartbeat and a shared board.",
        },
        {
          q: "Are the prices up to date?",
          a: "They were correct on the date shown. Vendors change prices and plans often, so check their pricing page before you buy.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "a self-hosted server and web app that runs a team of AI agents as a company, with an org chart, budgets and tasks, driving agents you bring, such as Claude Code, Codex or OpenClaw.",
      category: "Multi-agent orchestration (“AI company”)",
      openSource: "Yes, MIT",
      pricing: "Self-hosted is free; no prices published; cloud version on a waitlist",
      runs: "Self-hosted Node.js server with Postgres, or Docker",
      agents: "Agents you bring through adapters: Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode and more",
      board: "Yes: issues linked to goals and projects, assigned to agents or people",
      schedule: "Yes: heartbeats, and Routines on cron, webhook or API triggers",
      talk: "Through task threads and delegation along the org chart",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "a workspace where you assign issues to AI coding agents like teammates, while a daemon on your machine runs the agent CLIs you already have.",
      category: "Issue board for people and coding agents",
      openSource: "Source-available (Apache 2.0 with extra conditions)",
      pricing: "Self-hosting free inside your organization; cloud prices not published",
      runs: "Cloud, self-hosted (Docker or Helm) or desktop app; agents run on a daemon you control",
      agents: "29 agent CLIs, including Claude Code, Codex, Cursor Agent, OpenCode and Hermes",
      board: "Yes: board and list views, with agents as assignees",
      schedule: "Yes: Autopilots on cron, webhooks or manual runs",
      talk: "Yes: in squads, a leader agent @mentions members to hand off work",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "a hosted issue tracker for product teams that also lets you delegate issues to its own Linear Agent and to third-party agents such as Cursor, Codex and Devin.",
      category: "Issue tracker with an agent platform",
      openSource: "No",
      pricing: "Free $0; Basic $10 and Business $16 per user/month, billed yearly; AI credits for the coding agent and Loops",
      runs: "Cloud",
      agents: "Linear Agent; a cloud coding agent on Claude Code or Codex; third-party agents installed as members",
      board: "Yes: issues, projects, cycles and initiatives",
      schedule: "Yes: Loops, on a schedule or on events",
      talk: "Not stated",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "an open-source personal AI assistant that runs on your own computer and answers you in chat apps such as WhatsApp, Telegram and Slack.",
      category: "Personal AI assistant (self-hosted)",
      openSource: "Yes, MIT",
      pricing: "Free; no paid tier or hosted service; you pay your model provider",
      runs: "A local Gateway on your own machine; Docker and Nix installs",
      agents: "Model providers as plugins: Anthropic, OpenAI, Gemini, OpenRouter, Ollama and others",
      board: "No (its Tasks ledger and TaskFlow were removed)",
      schedule: "Yes: a built-in Automations scheduler, plus webhooks",
      talk: "Yes: several agents per Gateway with agent-to-agent access, and a team preset with a coordinator",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "Nous Research's open-source personal AI agent, used from a terminal, a desktop app or chat apps, that writes and refines its own skills from experience.",
      category: "Personal AI agent (self-hosted)",
      openSource: "Yes, MIT",
      pricing: "Agent free; optional Nous Portal: Free, Plus $20, Super $100, Ultra $200 a month",
      runs: "Your machine or a server; paid Portal tiers include one cloud-hosted agent",
      agents: "Any model provider: Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, local models and more",
      board: "No",
      schedule: "Yes: a built-in cron scheduler, and routines per Bot",
      talk: "Yes: subagents, and in Bot Mode named Bots message each other",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "a hosted low-code platform for building AI agents and linking them into multi-agent teams it calls an AI Workforce, for sales, support and operations work.",
      category: "AI agent platform (“AI Workforce”)",
      openSource: "No",
      pricing: "The public pricing page lists Enterprise only, through sales",
      runs: "Cloud",
      agents: "Its own agents, built in a no-code builder; any LLM with credits, or your own key",
      board: "No issue board; task history and an Activity Center",
      schedule: "Yes: scheduled tasks and app triggers",
      talk: "Yes: agents linked on a canvas pass work to each other",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "a hosted AI assistant that works across your inbox, calendar, meetings and Slack, runs recurring routines and asks before anything with outside impact.",
      category: "AI assistant (“AI employee”)",
      openSource: "No",
      pricing: "Free: $50 in credits for 7 days; from $29.99/month per active user for 3,000 credits",
      runs: "Cloud; used from Slack, email, iMessage, phone and a Chrome extension",
      agents: "Its own assistant; it picks a model per task, or you choose",
      board: "No; you give it tasks in conversation",
      schedule: "Yes: Routines, on a schedule or an event",
      talk: "Not stated (one Lindy per workspace)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "an open-source Python framework for building crews of role-based agents and step-by-step flows, plus a commercial platform, CrewAI AMP, to deploy and run them.",
      category: "Multi-agent framework (Python) and platform",
      openSource: "Framework yes, MIT; the AMP platform is commercial",
      pricing: "Framework free; AMP Basic free (50 executions/month); Enterprise custom",
      runs: "A library in your code; AMP in CrewAI's cloud or your own infrastructure",
      agents: "LLMs by API (OpenAI by default; other providers and local models supported)",
      board: "No; tasks are defined in code",
      schedule: "On AMP: cron scheduling; not stated for the framework alone",
      talk: "Yes: agents delegate and ask each other questions; a manager agent in hierarchical mode",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "LangChain's open-source framework for building long-running, stateful agents as a graph of state, nodes and edges in code, deployed through LangSmith.",
      category: "Agent orchestration framework (Python, JS)",
      openSource: "Framework yes, MIT; LangSmith is commercial",
      pricing: "Framework free; LangSmith Developer $0, Plus $39/seat/month, Enterprise custom",
      runs: "Inside your application; Agent Server in LangChain's cloud, or self-hosted on Enterprise",
      agents: "Whatever models your code calls",
      board: "No",
      schedule: "On Agent Server: cron jobs; not stated for the library alone",
      talk: "Yes, as designed in your graph: subagents, handoffs, routers",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "Microsoft's open-source framework for multi-agent applications in Python and .NET. Its README now says it is archived and no longer maintained by Microsoft, and points to Microsoft Agent Framework.",
      category: "Multi-agent framework (Python, .NET)",
      openSource: "Yes: code MIT, docs CC-BY-4.0",
      pricing: "Free; no hosted service",
      runs: "A library in your code; AutoGen Studio runs locally",
      agents: "Model clients for OpenAI and Azure; Anthropic, Ollama and Gemini marked experimental",
      board: "No",
      schedule: "Not stated",
      talk: "Yes: group chats, selector and swarm teams, message passing",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "a Mac app that runs Claude Code, Codex, Cursor and OpenCode agents side by side, each in its own git worktree. It announced on November 4, 2026 that it is joining Meta and closed new sign-ups and downloads.",
      category: "Parallel coding-agent runner (Mac app)",
      openSource: "No",
      pricing: "Free to use; no cloud plan prices listed today",
      runs: "Mac app; Conductor Cloud read-only from November 13 and shut down November 20, 2026",
      agents: "Claude Code, Codex, OpenCode and Cursor Agent, on your own subscriptions or keys",
      board: "No issue board; a list of workspaces, which can start from a GitHub or Linear issue",
      schedule: "Cloud-only Routines, which end with the cloud",
      talk: "Shows messages between agents when Claude Code agent teams are on",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "an open-source terminal app that runs several coding agents at once, each in its own tmux session and git worktree, so they work on separate branches.",
      category: "Parallel coding-agent runner (terminal)",
      openSource: "Yes, AGPL-3.0",
      pricing: "Free",
      runs: "Your terminal; needs tmux and the GitHub CLI",
      agents: "Claude Code by default; Codex, Gemini, Aider or any program in its config",
      board: "No; a list of instances with previews and diffs",
      schedule: "Not stated",
      talk: "Not stated",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "a kanban board for coding-agent work where each issue gets a workspace with a git worktree and the agent you choose. Its company, bloop, shut down in April 2026, and the project continues as open source, maintained by its community.",
      category: "Kanban board and parallel coding-agent runner",
      openSource: "Yes, Apache-2.0",
      pricing: "Local app free; paid subscriptions ended in April 2026",
      runs: "Locally in your browser or as a desktop app; its cloud part can be self-hosted",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode and others",
      board: "Yes: kanban issues with priorities and tags (needs sign-in)",
      schedule: "Not stated",
      talk: "Not stated",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "Anthropic's coding agent: it reads your codebase, edits files and runs commands, from the terminal, IDE extensions, a desktop app and the web.",
      category: "Coding agent",
      openSource: "No (public repository, all rights reserved)",
      pricing: "In paid Claude plans: Pro $20/month, Max $100, Ultra $200; Team and Enterprise per seat",
      runs: "Terminal, IDE extensions, desktop app, web and mobile",
      agents: "Its own agent on Claude models",
      board: "No issue board; agent teams share a task list",
      schedule: "Yes: cloud scheduled tasks, desktop scheduled tasks and `/loop`",
      talk: "In experimental agent teams, teammates message each other; subagents report back",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "an experimental Claude Code feature, off by default, where a lead session spawns teammates: separate Claude Code instances that share a task list and message each other.",
      category: "Multi-agent mode of a coding agent",
      openSource: "No (part of Claude Code)",
      pricing: "Comes with Claude Code on paid Claude plans",
      runs: "Your Claude Code sessions",
      agents: "Claude Code instances on Claude models",
      board: "A shared task list that teammates claim from, with dependencies",
      schedule: "Not part of agent teams; Claude Code has scheduled tasks separately",
      talk: "Yes: teammates message each other, and you can message any teammate",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "OpenAI's coding agent, in a terminal CLI, an IDE extension, the ChatGPT desktop app and the cloud, included with ChatGPT plans or used with an API key.",
      category: "Coding agent",
      openSource: "Partly: CLI, SDK and App Server are Apache-2.0; IDE extension and cloud are not",
      pricing: "In ChatGPT plans from Plus at $20/month, or on an OpenAI API key",
      runs: "Terminal, IDE extension, ChatGPT desktop app and Codex Cloud",
      agents: "Its own agent on OpenAI models",
      board: "No issue board; takes Linear issues on paid plans",
      schedule: "Yes: scheduled tasks in the ChatGPT desktop app and on the web",
      talk: "Subagents: a parent spawns agents and collects their results",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "an open-source coding agent that works with models from 200+ providers, including local models, as a terminal UI, desktop app, web app and SDK.",
      category: "Coding agent",
      openSource: "Yes, MIT",
      pricing: "Agent free, with free models; OpenCode Go $10/month, Go Plus $40/month",
      runs: "Terminal, desktop app, web app and SDK on your machine",
      agents: "Its own agent; 200+ model providers, including local models",
      board: "Not stated",
      schedule: "Experimental, opt-in schedules (since October 2026)",
      talk: "Subagents report back to the parent agent",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "Cognition's AI software engineer: it writes, runs and tests code and opens pull requests, in cloud sessions on their own virtual machines and locally through Devin Desktop and Devin CLI.",
      category: "AI software engineer",
      openSource: "No",
      pricing: "Free $0; Pro $20/month; Max $200/month; Teams $80/month plus $40 per dev seat",
      runs: "A cloud VM per session; Devin Desktop and CLI locally",
      agents: "Its own agent; Cognition's SWE-2 plus frontier models from several labs",
      board: "No board of its own; takes tickets from Linear, Jira and GitHub",
      schedule: "Yes: Automations, on a schedule or on events",
      talk: "Yes: a coordinator session launches and messages child Devins",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "coding agents called Droids that run in a desktop app, a CLI, headless in CI and on Factory-hosted cloud computers.",
      category: "Coding agent platform (Droids)",
      openSource: "No",
      pricing: "Free with your own inference; Pro $20/month; Plus $100/month; higher tiers",
      runs: "Desktop app and CLI locally; cloud Droid Computers; headless in CI",
      agents: "Its own agent on frontier and open-weight models, or your own keys",
      board: "No general board; takes Linear and Jira issues; Workstreams (beta) list tasks",
      schedule: "Yes: Automations on a schedule, Slack, GitHub or webhooks",
      talk: "Yes, in Workstreams (beta): an orchestrator whose agents report back",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "xAI's hosted AI teammates: Bots that each get a computer of their own in the cloud, sign in to your tools, work in Slack and Microsoft Teams, run routines and hand work to each other.",
      category: "AI coworkers (hosted)",
      openSource: "No",
      pricing: "Premium $30, Super $100, Ultra $200 a month, with weekly usage included; Teams and Enterprise through sales",
      runs: "Cloud computer per Bot; desktop and mobile apps; in Slack, Teams and video calls",
      agents: "Its own Bots, built with Grok",
      board: "Not stated; work is handed over in chat, threads and meetings",
      schedule: "Yes: routines on a schedule, and workflows it learns by watching you",
      talk: "Yes: Bots message each other and coordinate in group chats",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "CopilotKit's open-source, self-hostable workspace for AI coworkers, where each Bot gets its own browser, files and tools, and you bring your own models and agents.",
      category: "AI coworkers workspace (self-hostable)",
      openSource: "Yes, MIT (uses the separately licensed CopilotKit Intelligence)",
      pricing: "Free for personal projects; Business up to $29 per active user a month",
      runs: "Desktop app for Mac and Windows; Kubernetes for teams",
      agents: "Built-in Bots or your own agents through AG-UI; OpenAI, Claude, Gemini or open models",
      board: "Not stated",
      schedule: "Yes: Routines",
      talk: "Not stated",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "Anthropic's agent for non-coding work in the Claude apps: you describe an outcome and it works through research, documents, spreadsheets and slides in your files, apps and a browser.",
      category: "AI coworker for knowledge work",
      openSource: "No",
      pricing: "Paid Claude plans: Pro $20/month, Max $100, Ultra $200; Team and Enterprise per seat",
      runs: "Anthropic's cloud; local files and browser through Claude Desktop",
      agents: "Claude models",
      board: "No board; a task list and a Scheduled page",
      schedule: "Yes: hourly, daily, weekly or weekdays, in the cloud",
      talk: "Sub-agents within a task",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "an agent in Microsoft 365 Copilot that carries out multi-step tasks across Outlook, Teams, Word, Excel, PowerPoint, OneDrive and SharePoint, with approval before sensitive actions.",
      category: "AI coworker for Microsoft 365",
      openSource: "No",
      pricing: "Microsoft 365 Copilot license plus Copilot Credits at $0.01 each, pay as you go",
      runs: "Microsoft's cloud, with OneDrive and SharePoint files",
      agents: "A model picker with GPT, Claude and Grok models, depending on tenant settings",
      board: "Not stated",
      schedule: "Yes: scheduled prompts (up to 25 per user) and email or Teams triggers",
      talk: "Not stated",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "a Work mode in ChatGPT for tasks that end in something to review, such as decks, spreadsheets and analyses; it shares core abilities and usage with Codex.",
      category: "AI coworker in ChatGPT",
      openSource: "No",
      pricing: "In ChatGPT plans: limited on Free and Go in the desktop app; full from Plus at $20/month",
      runs: "OpenAI's cloud, or your computer through the desktop app",
      agents: "OpenAI models",
      board: "Not stated",
      schedule: "Yes: scheduled tasks; Gmail, Slack or GitHub triggers on eligible plans",
      talk: "Subagents within a task",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "a Cursor feature where a coordinator agent plans a larger piece of coding work and delegates it to many cloud agents running in parallel, with shared notes and a task board.",
      category: "Multi-agent coding workspace",
      openSource: "No",
      pricing: "Cursor Premium $30/month and up, Teams and Enterprise; not on Free or Plus",
      runs: "Cursor's cloud agents; a local agent when something must run on your machine",
      agents: "Cursor's agents; you pick the coordinator's model",
      board: "Yes: a task list and board, shared in Multiplayer Projects",
      schedule: "Yes: schedules, Slack channels and pull request activity",
      talk: "Yes: the coordinator runs worker agents; coordinators message each other in Multiplayer Projects",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "Microsoft's low-code studio for building agents, workflows and apps and publishing them to Microsoft Copilot, Teams, websites, phone lines and other channels.",
      category: "Low-code agent and workflow builder",
      openSource: "No",
      pricing: "Copilot Credits: $200 a month for a 25,000-credit pack (billed annually), or $0.01 per credit pay-as-you-go",
      runs: "Microsoft's cloud, in Power Platform environments",
      agents: "Agents you build; you pick a model per agent, including GPT, Claude and Grok models",
      board: "No board; a Monitor tab and a Workflows page",
      schedule: "Yes: scheduled and event triggers (SharePoint, email, Dataverse and more) and workflows",
      talk: "Yes: connected agents, Foundry and A2A agents; a workflow can start a Copilot Cowork task",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your computer with a role and goals, and it wakes on a heartbeat to take issues from a shared board.",
      category: "AI employees for Claude Code and Codex (multi-agent harness)",
      openSource: "Yes, GPL-3.0",
      pricing: "Free: 1 project, up to 3 AI employees; Pro $5 and Team $10 a month coming soon",
      runs: "Web app; agents run on your computer in Claude Code or Codex; can be self-hosted",
      agents: "Claude Code and Codex, on your own subscription",
      board: "Yes: statuses, priorities, assignees, comments and @mentions",
      schedule: "Yes: a heartbeat in working hours (15 minutes to 24 hours) and repeating issues",
      talk: "Through issues today; direct messages and a report chain are upcoming",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "A self-hosted AI company control plane vs a Python multi-agent framework",
      title: "Paperclip vs CrewAI: AI Company Platform or Agent Framework?",
      description:
        "Paperclip vs CrewAI: a self-hosted control plane that runs your agents as a company, or a Python framework for building agent crews. Prices and features.",
      h1: "Paperclip vs CrewAI: running agents as a company vs building them in code",
      lead: "Paperclip and CrewAI both organize several AI agents, but at different layers. Paperclip is a self-hosted app with an org chart, tasks and budgets that drives agents you already use, such as Claude Code or Codex. CrewAI is a Python framework for writing crews of role-based agents that call LLMs through an API, with a commercial platform to deploy them. Here's how they compare, fact by fact, and where Crewmark fits.",
      differences: [
        "Layer: Paperclip is an application you run and manage through a web UI; CrewAI is a library you write code against.",
        "Agents: Paperclip drives existing agents such as Claude Code, Codex or OpenClaw through adapters; CrewAI agents are defined in Python with a role, a goal and a backstory, and call an LLM API.",
        "Work: Paperclip has tickets linked to goals and projects, assigned to agents or people; CrewAI defines tasks inside crews and flows in code.",
        "Scheduling: Paperclip has heartbeats and cron-based Routines; CrewAI lists cron scheduling on its AMP platform, not for the framework alone.",
      ],
      pickA: [
        "You want an org chart, budgets and tickets for agents you already run, such as Claude Code or Codex.",
        "You'd rather self-host and manage the team from a web UI than in code.",
      ],
      pickB: [
        "You're building an agent workflow into your own Python application.",
        "You want to choose each agent's model and tools in code, and deploy on CrewAI's platform or your own infrastructure.",
      ],
      faq: [
        { q: "Is Paperclip open source?", a: "Yes, under the MIT license, and the self-hosted version is free. A cloud version is on a waitlist." },
        {
          q: "Is CrewAI free?",
          a: "The CrewAI framework is open source under MIT and free; you pay your model provider. The CrewAI AMP platform has a free Basic plan with 50 workflow executions a month and a custom-priced Enterprise plan.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "An AI company with an org chart vs an issue board for coding agents",
      title: "Paperclip vs Multica: Org Chart or Issue Board for Your Agents?",
      description:
        "Paperclip vs Multica: both put Claude Code, Codex and other agents to work on tasks. One models a company with an org chart; the other is an issue board.",
      h1: "Paperclip vs Multica: an AI company or an issue board for your agents",
      lead: "Paperclip and Multica solve a similar problem: you already have coding agents like Claude Code and Codex, and you want to hand them work on a board instead of in a terminal. Paperclip models the whole thing as a company, with an org chart, budgets and governance. Multica stays closer to an issue tracker, with agents as assignees and a daemon on your machine running their CLIs. Here's the side-by-side, and where Crewmark fits.",
      differences: [
        "Model: Paperclip gives agents titles, reporting lines, job descriptions and budgets; Multica gives each agent a name, a provider, a runtime and instructions, and groups them in squads with a leader agent.",
        "License: Paperclip is open source under MIT; Multica is source-available under Apache 2.0 with extra conditions, and free to self-host inside your own organization.",
        "Hosting: Paperclip is self-hosted, with a cloud version on a waitlist; Multica offers a cloud app, self-hosting and a desktop app.",
        "Agents: Paperclip connects agents through adapters; Multica's daemon runs 29 agent CLIs you already have installed.",
      ],
      pickA: [
        "You want reporting lines, budgets and approvals across a whole team of agents.",
        "You want MIT-licensed software you run yourself.",
      ],
      pickB: [
        "You want an issue board where agents are assignees, in the cloud or self-hosted.",
        "You use many different agent CLIs and want them all on one board.",
      ],
      faq: [
        {
          q: "Do Paperclip and Multica work with Claude Code and Codex?",
          a: "Yes. Paperclip connects them through adapters, and Multica's daemon runs their CLIs on a machine you control. Both also support several other agents.",
        },
        {
          q: "Is Multica open source?",
          a: "It's source-available: the Multica License is Apache 2.0 plus extra conditions. Using it inside your own organization, including self-hosting, is free; offering it as a hosted service needs a commercial license.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "A company of agents vs one personal assistant (Paperclip can run OpenClaw)",
      title: "Paperclip vs OpenClaw: AI Company or Personal Agent?",
      description:
        "Paperclip vs OpenClaw: a self-hosted company of agents, or an open-source personal assistant on your computer. Paperclip can even run OpenClaw as an employee.",
      h1: "Paperclip vs OpenClaw: a company of agents or one personal agent",
      lead: "Paperclip's README puts it simply: if OpenClaw is an employee, Paperclip is the company. OpenClaw is an open-source personal assistant that runs on your machine and talks to you in chat apps. Paperclip is a self-hosted control plane with an org chart, tasks and budgets that can drive OpenClaw, Claude Code, Codex and other agents. They're often used together. Here's how they compare, and where Crewmark fits.",
      differences: [
        "Scope: OpenClaw is one assistant, or several isolated agents on one Gateway, that you talk to in chat apps; Paperclip organizes many agents into roles, reporting lines and budgets.",
        "Work: Paperclip has tickets linked to goals and projects; OpenClaw's docs say its shared Tasks ledger and TaskFlow were removed, so it has no task board.",
        "Agents: OpenClaw connects to model providers as plugins; Paperclip drives existing agents, OpenClaw included, through adapters.",
        "Both are MIT-licensed and free to run; you pay your model provider.",
      ],
      pickA: [
        "You run several agents and want them organized as a team with roles, tasks and budgets.",
        "You want OpenClaw to be one of several employees rather than your only agent.",
      ],
      pickB: [
        "You want one personal assistant that answers you on WhatsApp, Telegram, Slack or iMessage.",
        "You want automations and agents on your own computer, with no hosted service.",
      ],
      faq: [
        { q: "Can Paperclip run OpenClaw?", a: "Yes. OpenClaw is one of the agents Paperclip connects through an adapter, alongside Claude Code, Codex and others." },
        {
          q: "Is OpenClaw free?",
          a: "Yes. It's MIT-licensed, and its README says it has no paid tier, hosted service or token; you pay the model provider you connect.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "An AI company control plane vs Nous Research's self-improving personal agent",
      title: "Paperclip vs Hermes Agent: AI Company or Self-Improving Agent?",
      description:
        "Paperclip vs Hermes Agent: a control plane that runs a team of agents as a company, or Nous Research's open-source personal agent with Bots and routines.",
      h1: "Paperclip vs Hermes Agent: a team of agents or one agent that learns",
      lead: "Paperclip and Hermes Agent are both open source under MIT, and both can run more than one agent, but they start from opposite ends. Hermes Agent is a personal agent from Nous Research that writes and refines its own skills, with a Bot Mode for several named Bots. Paperclip is a control plane that organizes agents, Hermes included, into a company with an org chart, tickets and budgets. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Starting point: Hermes Agent is an agent you talk to from a terminal, a desktop app or chat apps; Paperclip is a web app that assigns work to agents you connect.",
        "Work: Paperclip has tickets linked to goals and projects; Hermes Agent's docs show no task board or issue tracker.",
        "Several agents: Paperclip uses roles and reporting lines; in Hermes Agent's Bot Mode each Bot has its own role, model and memory, and Bots message each other directly.",
        "Hosting: Paperclip is self-hosted; Hermes Agent runs on your machine or a server, and paid Nous Portal tiers include one cloud-hosted agent.",
      ],
      pickA: [
        "You want a team of different agents (Claude Code, Codex, Hermes and others) with roles, tickets and budgets.",
        "You want work tracked on a board rather than in chats.",
      ],
      pickB: [
        "You want one agent that builds up skills and memory over time.",
        "You want named Bots that talk to each other and run routines, from a terminal, a desktop app or chat apps.",
      ],
      faq: [
        { q: "Can Paperclip run Hermes Agent?", a: "Yes. Hermes is one of the agents Paperclip lists among its adapters." },
        {
          q: "How much does Hermes Agent cost?",
          a: "The agent is free and MIT-licensed; you pay your model provider. An optional Nous Portal subscription has Free, Plus ($20 a month), Super ($100) and Ultra ($200) tiers.",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "A framework for building agent crews vs a ready-to-run personal assistant",
      title: "CrewAI vs OpenClaw: Agent Framework or Personal Assistant?",
      description:
        "CrewAI vs OpenClaw: a Python framework for building multi-agent crews, or an open-source personal assistant you run yourself and talk to in chat apps.",
      h1: "CrewAI vs OpenClaw: build agents in code or run a personal assistant",
      lead: "CrewAI and OpenClaw both involve several agents working together, but you use them very differently. CrewAI is a Python framework: you write crews of role-based agents and flows, and deploy them on its AMP platform or your own servers. OpenClaw is a finished personal assistant that runs on your computer and answers you in WhatsApp, Telegram, Slack and other chat apps. Here's the comparison, and where Crewmark fits.",
      differences: [
        "What you do: with CrewAI you write Python; with OpenClaw you install and configure an assistant.",
        "Where you talk to it: CrewAI runs inside your application; OpenClaw answers you in chat apps you already use.",
        "Several agents: CrewAI agents delegate work and ask each other questions, with a manager agent in hierarchical mode; OpenClaw runs several isolated agents on one Gateway, with a team preset that has a coordinator.",
        "Both are MIT-licensed. CrewAI's AMP platform is commercial; OpenClaw has no paid tier.",
      ],
      pickA: [
        "You're a developer building a multi-agent workflow into a product.",
        "You want to deploy and monitor crews on a managed platform.",
      ],
      pickB: [
        "You want a personal assistant now, without writing code.",
        "You want it on your own machine, reachable from your phone through chat apps.",
      ],
      faq: [
        {
          q: "Which suits a non-developer, CrewAI or OpenClaw?",
          a: "OpenClaw is installed and configured, and you talk to it in chat apps. CrewAI is a Python library, so it's built for developers who put agents into their own software.",
        },
        {
          q: "Are CrewAI and OpenClaw open source?",
          a: "Both are MIT-licensed. CrewAI's AMP platform is a separate commercial product; OpenClaw has no paid tier or hosted service.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "Role-based crews vs graph-based orchestration, both open-source frameworks",
      title: "CrewAI vs LangGraph: Multi-Agent Frameworks Compared (2026)",
      description:
        "CrewAI vs LangGraph: role-based crews or graphs of state and nodes. Licenses, CrewAI AMP vs LangSmith pricing, scheduling and multi-agent patterns.",
      h1: "CrewAI vs LangGraph: two open-source ways to build multi-agent systems",
      lead: "CrewAI and LangGraph are the two frameworks most often compared for building multi-agent systems in code. CrewAI organizes agents as crews with roles, goals and backstories, plus event-driven flows. LangGraph has you define a workflow as a graph of shared state, nodes and edges, and prescribes no agent architecture. Both are MIT-licensed, and each company sells a hosted platform. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Abstraction: CrewAI starts from agents with a role, a goal and a backstory; LangGraph starts from a graph of state and nodes and doesn't prescribe prompts or agent architecture.",
        "Languages: CrewAI is Python; LangGraph has Python and JavaScript/TypeScript libraries.",
        "Hosted platform: CrewAI AMP has a free Basic plan (50 workflow executions a month) and a custom Enterprise plan; LangSmith has a free Developer plan, Plus at $39 per seat a month and a custom Enterprise plan.",
        "Scheduling: both list cron jobs on their hosted platforms, not in the open-source library alone.",
      ],
      pickA: [
        "You want to describe agents by role and goal and let them delegate to each other.",
        "You work in Python and want a no-code Studio on the platform side.",
      ],
      pickB: [
        "You want fine-grained control over state and the path between steps.",
        "You work in JavaScript or TypeScript as well as Python, or already use LangSmith.",
      ],
      faq: [
        {
          q: "Does LangGraph require LangChain?",
          a: "No. It's made by LangChain, Inc., but its docs say LangGraph does not require LangChain. LangSmith adds tracing, evaluation and deployment.",
        },
        {
          q: "Are CrewAI and LangGraph free?",
          a: "Both frameworks are free and MIT-licensed. Their hosted platforms, CrewAI AMP and LangSmith, each have a free plan plus paid or custom plans.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "Two multi-agent frameworks; AutoGen's README says it's archived",
      title: "CrewAI vs AutoGen: Multi-Agent Frameworks Compared (2026)",
      description:
        "CrewAI vs AutoGen: role-based crews and flows, or Microsoft's group chats, now archived in favour of Microsoft Agent Framework. Licenses and status.",
      h1: "CrewAI vs AutoGen: crews and flows vs group chats, and who maintains them",
      lead: "CrewAI and AutoGen were both early, popular ways to get several LLM agents working together in code. CrewAI is developed by crewAI, Inc., with a commercial platform alongside. AutoGen's README now says it is archived and no longer maintained by Microsoft, and points new users to Microsoft Agent Framework, which Microsoft calls its direct successor. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Maintenance: CrewAI is in active development; AutoGen's README says it is archived and no longer actively maintained by Microsoft, with no bug or security fixes.",
        "Patterns: CrewAI has crews of role-based agents and flows; AutoGen has group chats, selector and swarm teams, and event-driven message passing.",
        "Languages: CrewAI is Python; AutoGen has Python and .NET.",
        "Hosting: CrewAI AMP deploys and runs crews; AutoGen has no hosted service, and AutoGen Studio runs locally.",
      ],
      pickA: [
        "You're starting a new multi-agent project and want a maintained framework with a hosted option.",
        "You want role-based agents that delegate work to each other.",
      ],
      pickB: [
        "You maintain an existing AutoGen application and need to know what you're running before you migrate.",
        "You're weighing Microsoft Agent Framework and want to compare it with its predecessor.",
      ],
      faq: [
        {
          q: "Is AutoGen still maintained?",
          a: "Its README says the project is archived and no longer actively maintained by Microsoft, and recommends Microsoft Agent Framework, which Microsoft Learn calls AutoGen's direct successor.",
        },
        { q: "Is CrewAI free?", a: "The framework is MIT-licensed and free. The CrewAI AMP platform has a free Basic plan and a custom-priced Enterprise plan." },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "An issue board for agent CLIs vs a personal agent with Bots and routines",
      title: "Multica vs Hermes Agent: Agent Board or Personal Agent?",
      description:
        "Multica vs Hermes Agent: an issue board where agent CLIs, Hermes among them, take assignments, or Nous Research's self-improving personal agent.",
      h1: "Multica vs Hermes Agent: a board for your agents or the agent itself",
      lead: "Multica and Hermes Agent sit at different layers. Hermes Agent is an agent: Nous Research's open-source personal assistant that learns skills from experience and can run named Bots. Multica is the board around agents: you assign issues, and a daemon on your machine runs whichever agent CLI you pick, Hermes included. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Layer: Multica assigns and tracks work; Hermes Agent does the work.",
        "Work tracking: Multica has board and list views with agents as assignees; Hermes Agent's docs show no task board.",
        "Schedules: Multica's Autopilots run on cron or webhooks and create issues; Hermes Agent has a built-in cron scheduler and routines per Bot.",
        "License: Hermes Agent is MIT; Multica is source-available, and free to self-host inside your own organization.",
      ],
      pickA: [
        "You want issues, projects and reviews for several agents, Hermes possibly among them.",
        "Your team of people and agents works from one board.",
      ],
      pickB: [
        "You want a single agent that keeps memory and improves its own skills.",
        "You'd rather talk to your agent in a terminal, a desktop app or a chat app than manage a board.",
      ],
      faq: [
        { q: "Does Multica support Hermes Agent?", a: "Yes. Hermes is one of the 29 agent CLIs Multica's daemon can run." },
        { q: "Can Hermes Agent run on a schedule?", a: "Yes. It has a built-in cron scheduler, and in Bot Mode each Bot can have routines." },
      ],
    },
    "multica-vs-linear": {
      summary: "Two issue trackers with agents as assignees: one for agent CLIs, one for product teams",
      title: "Multica vs Linear: Issue Tracking for AI Agents Compared",
      description:
        "Multica vs Linear: both assign issues to AI agents. Multica runs agent CLIs on your machine; Linear is a hosted tracker with its own cloud coding agent.",
      h1: "Multica vs Linear: where your agents take their issues",
      lead: "Linear is the issue tracker many product teams already use, and it now lets you delegate issues to Linear Agent, to a cloud coding agent built on Claude Code or Codex, and to third-party agents. Multica is built around agents from the start: an issue board where a daemon on your own machine runs the agent CLIs you have installed. Here's how they compare, and where Crewmark fits.",
      differences: [
        "Where agents run: Multica's daemon runs agent CLIs on a laptop or server you control; Linear's coding agent runs in Linear's cloud.",
        "Assignment: in Multica the agent is the assignee; in Linear, delegating keeps the person as primary assignee and adds the agent as a contributor.",
        "Recurring work: Multica's Autopilots run on cron or webhooks; Linear's Loops run on a schedule or on events, billed from AI credits.",
        "Hosting and price: Multica can be self-hosted (source-available); Linear is hosted only, with Free, Basic ($10) and Business ($16) per user a month, billed yearly.",
      ],
      pickA: [
        "You want agents to run on your own hardware with the CLIs and logins you already have.",
        "You want to self-host the board.",
      ],
      pickB: [
        "Your team already plans in Linear and wants agents inside the same tracker.",
        "You'd rather the coding agent ran in the vendor's cloud.",
      ],
      faq: [
        {
          q: "Can Linear assign issues to AI agents?",
          a: "Yes. You can delegate issues to Linear Agent, to a cloud coding agent that uses Claude Code or Codex, and to third-party agents such as Cursor, Codex and Devin installed in your workspace.",
        },
        {
          q: "How much does Linear cost?",
          a: "Free is $0 with 2 teams and 250 issues. Basic is $10 and Business $16 per user a month, billed yearly. The cloud coding agent and Loops also use prepaid AI credits.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "A personal assistant in your chat apps vs Anthropic's coding agent",
      title: "OpenClaw vs Claude Code: Personal Assistant or Coding Agent?",
      description:
        "OpenClaw vs Claude Code: an open-source personal assistant in your chat apps, or Anthropic's coding agent for your repository. Price, models and schedules.",
      h1: "OpenClaw vs Claude Code: an assistant in your chats or an agent in your code",
      lead: "OpenClaw and Claude Code are both agents that run on your own computer, and OpenClaw can even reuse a Claude Code login to reach Claude models. They're built for different jobs. OpenClaw is a personal assistant you reach through WhatsApp, Telegram, Slack or iMessage. Claude Code is Anthropic's coding agent: it reads your codebase, edits files and runs commands. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Job: OpenClaw handles personal tasks and automations through chat apps; Claude Code works in a code repository from the terminal, an IDE, the desktop app or the web.",
        "Models: OpenClaw connects to many providers as plugins, Claude among them; Claude Code runs on Claude models.",
        "Price and license: OpenClaw is MIT-licensed and free (you pay the model provider); Claude Code is included in paid Claude plans from $20 a month and isn't open source.",
        "Scheduling: OpenClaw has a built-in Automations scheduler; Claude Code has cloud and desktop scheduled tasks and `/loop`.",
      ],
      pickA: [
        "You want an assistant you can message from your phone for personal tasks and automations.",
        "You want to mix model providers, including local models.",
      ],
      pickB: [
        "Your work is in a codebase: features, fixes, reviews and refactors.",
        "You already pay for a Claude plan.",
      ],
      faq: [
        { q: "Can OpenClaw use Claude?", a: "Yes, with an Anthropic API key or by reusing a Claude Code login on the same machine." },
        { q: "Is Claude Code free?", a: "No. It's included in paid Claude plans (Pro, Max, Ultra, Team and Enterprise), not in Free." },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Nous Research's self-improving personal agent vs Anthropic's coding agent",
      title: "Hermes Agent vs Claude Code: Personal Agent or Coding Agent?",
      description:
        "Hermes Agent vs Claude Code: Nous Research's open-source agent that learns skills and runs Bots, or Anthropic's coding agent. Models, price and schedules.",
      h1: "Hermes Agent vs Claude Code: a learning personal agent or a coding agent",
      lead: "Hermes Agent and Claude Code both run on your machine, both have subagents and schedules, and both can work with Claude models. The difference is focus. Hermes Agent, from Nous Research, is a personal agent with a learning loop: it writes skills from experience and keeps its own memory, on any model provider. Claude Code is Anthropic's coding agent for working in a codebase. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Focus: Hermes Agent is a general personal agent; Claude Code is built for code.",
        "Models: Hermes Agent works with many providers, and its docs say a Claude subscription only works on Max with purchased extra usage; Claude Code runs on Claude models.",
        "Several agents: Hermes Agent's Bots message each other directly; in Claude Code's experimental agent teams, teammates message each other.",
        "Price and license: Hermes Agent is MIT and free, with an optional Nous Portal subscription; Claude Code comes with paid Claude plans and isn't open source.",
      ],
      pickA: [
        "You want one agent for many kinds of tasks that improves its skills over time.",
        "You want to choose and switch model providers freely.",
      ],
      pickB: [
        "Your main work is in a codebase.",
        "You want Anthropic's tooling around it: IDE extensions, a desktop app, code review and scheduled tasks.",
      ],
      faq: [
        {
          q: "Can Hermes Agent use my Claude subscription?",
          a: "Its docs say the Claude subscription path works only on Claude Max with purchased extra usage, and not on Claude Pro. You can also use Claude with an API key.",
        },
        {
          q: "Does Claude Code learn new skills like Hermes Agent?",
          a: "Claude Code uses skills that you or your team write as SKILL.md files, and it keeps an auto memory. Hermes Agent's stated focus is writing and refining skills from its own experience.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "A personal assistant vs an open-source coding agent, both MIT and model-agnostic",
      title: "OpenClaw vs OpenCode: Personal Assistant or Coding Agent?",
      description:
        "OpenClaw vs OpenCode: two MIT-licensed, model-agnostic agents. One is a personal assistant in your chat apps; the other is a coding agent.",
      h1: "OpenClaw vs OpenCode: similar names, different jobs",
      lead: "OpenClaw and OpenCode are both open source under MIT, both run on your own machine and both work with many model providers, which is why they get compared. They do different jobs. OpenClaw is a personal assistant you talk to in WhatsApp, Telegram, Slack and other chat apps. OpenCode is a coding agent with a terminal UI, a desktop app, a web app and an SDK. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Job: OpenClaw runs personal tasks and automations from chat; OpenCode writes and changes code.",
        "Interface: OpenClaw answers in chat apps and has a Control UI; OpenCode runs as a terminal UI, a desktop app, a web app and an SDK.",
        "Paid options: OpenClaw has no paid tier; OpenCode is free, with free models, and offers OpenCode Go at $10 a month and Go Plus at $40.",
        "Scheduling: OpenClaw has a built-in scheduler; OpenCode's schedules are experimental and opt-in.",
      ],
      pickA: [
        "You want an assistant you can message from anywhere.",
        "You want automations triggered by schedules, webhooks or email.",
      ],
      pickB: [
        "You want an open-source coding agent that works with 200+ model providers, including local ones.",
        "You want to start coding with free models and no account.",
      ],
      faq: [
        {
          q: "Are OpenClaw and OpenCode the same project?",
          a: "No. OpenClaw is a personal assistant from the OpenClaw Foundation; OpenCode is a coding agent from Anomaly. Both are MIT-licensed.",
        },
        {
          q: "Do I need an API key for OpenCode?",
          a: "Not to start: it includes free models with a daily limit and needs no account for them. You can also connect your own providers or subscribe to OpenCode Go.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Claude Code's experimental agent teams vs OpenClaw's multi-agent Gateway",
      title: "Claude Code Agent Teams vs OpenClaw: Multi-Agent Setups",
      description:
        "Claude Code agent teams vs OpenClaw: an experimental lead-and-teammates mode in Claude Code, or several personal agents on one OpenClaw Gateway.",
      h1: "Claude Code agent teams vs OpenClaw: two ways to run several agents",
      lead: "Both give you more than one agent working together. Claude Code agent teams is an experimental feature, off by default, where a lead session spawns teammates: separate Claude Code instances that share a task list and message each other. OpenClaw runs several isolated agents on one Gateway on your machine, with a team preset in which a coordinator delegates to researcher, writer and reviewer agents. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Purpose: agent teams split a coding task across Claude Code instances; OpenClaw's agents are personal assistants you reach in chat apps.",
        "Coordination: agent teams share a task list with dependencies, and teammates message each other; OpenClaw agents can access each other's sessions, and its docs call the team preset prompt guidance rather than a scheduler.",
        "Lifetime: an agent team runs for a task under a lead session; OpenClaw agents live on the Gateway and run scheduled automations.",
        "Cost: agent teams come with Claude Code on paid Claude plans; OpenClaw is free and MIT-licensed.",
      ],
      pickA: [
        "You want several Claude Code instances to split a large coding task and talk to each other.",
        "You already use Claude Code and are fine turning on an experimental feature.",
      ],
      pickB: [
        "You want long-lived personal agents with their own personas on your machine.",
        "You want to reach them through chat apps and run them on schedules.",
      ],
      faq: [
        {
          q: "How do I turn on Claude Code agent teams?",
          a: "They're experimental and off by default: set `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, and a lead session can then spawn teammates. See [Claude Code agent teams](/blog/claude-code-agent-teams).",
        },
        {
          q: "Can OpenClaw agents work as a team?",
          a: "Yes. One Gateway can run several isolated agents, and a team preset creates a coordinator plus researcher, writer and reviewer agents.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "Two parallel coding-agent tools whose companies wound down hosted services in 2026",
      title: "Vibe Kanban vs Conductor: Parallel Coding Agents in 2026",
      description:
        "Vibe Kanban vs Conductor: an open-source kanban board for coding agents, or a Mac app joining Meta that closed new sign-ups. What's still available.",
      h1: "Vibe Kanban vs Conductor: what's left of each, and how they compare",
      lead: "Vibe Kanban and Conductor both run several coding agents in parallel, each in its own git worktree, so you can review and merge their work. Both changed in 2026. bloop, the company behind Vibe Kanban, shut down in April, and the project continues as community-maintained open source. Conductor announced on November 4 that it's joining Meta: new sign-ups and downloads are closed, its cloud is read-only from November 13 and shuts down on November 20, and the Mac app gets new models and critical fixes until early 2027. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Availability: Vibe Kanban's local app is free for anyone to run; Conductor no longer accepts new sign-ups or downloads.",
        "Board: Vibe Kanban plans work as kanban issues; Conductor lists workspaces and can start one from a GitHub or Linear issue.",
        "License: Vibe Kanban is open source under Apache-2.0; Conductor is closed source.",
        "Platform and agents: Vibe Kanban runs in your browser or as a desktop app; Conductor is a Mac app. Both run Claude Code, Codex, Cursor and OpenCode, and Vibe Kanban also lists Gemini CLI, GitHub Copilot, Amp and others.",
      ],
      pickA: [
        "You want an open-source tool you can keep running and modify.",
        "You want a kanban board in front of your agents.",
      ],
      pickB: [
        "You already use Conductor on a Mac and only need the local app.",
        "You're fine with the cloud features ending on November 20, 2026.",
      ],
      faq: [
        {
          q: "Is Conductor shutting down?",
          a: "Conductor announced on November 4, 2026 that it's joining Meta. New sign-ups and downloads are closed, its cloud is read-only from November 13 and shuts down on November 20, and the Mac app gets new models and critical fixes until early 2027. See [Conductor alternatives](/blog/conductor-alternatives).",
        },
        {
          q: "Is Vibe Kanban still maintained?",
          a: "bloop announced on April 10, 2026 that it was shutting down. The project continues as open source under Apache-2.0, maintained by its community, and the local app is free to run.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "Parallel coding agents: an open-source terminal app vs a Mac app joining Meta",
      title: "Claude Squad vs Conductor: Parallel Claude Code Agents",
      description:
        "Claude Squad vs Conductor: an open-source terminal app for parallel agents, or a Mac app joining Meta whose cloud ends on November 20, 2026.",
      h1: "Claude Squad vs Conductor: terminal or Mac app for parallel agents",
      lead: "Claude Squad and Conductor do the same core job: run several coding agents at once, each on its own branch in a git worktree, and help you review and merge the results. Claude Squad is an open-source terminal app built on tmux. Conductor is a closed-source Mac app that announced on November 4, 2026 that it's joining Meta, and no longer takes new users. Here's how they compare, and where Crewmark fits.",
      differences: [
        "Interface: Claude Squad is a terminal UI that needs tmux and the GitHub CLI; Conductor is a Mac desktop app.",
        "License: Claude Squad is open source under AGPL-3.0; Conductor is closed source.",
        "Agents: Claude Squad defaults to Claude Code and can run Codex, Gemini, Aider or any program you configure; Conductor runs Claude Code, Codex, OpenCode and Cursor Agent.",
        "Status: Claude Squad's latest release is v1.0.20 (August 2026); Conductor closed new sign-ups and downloads on November 4, 2026, ends its cloud on November 20, and updates its Mac app until early 2027.",
      ],
      pickA: [
        "You live in the terminal and want an open-source tool anyone can install.",
        "You want to run any CLI agent you can configure.",
      ],
      pickB: [
        "You already use Conductor and prefer a desktop app with built-in diffs and pull requests.",
        "You're on a Mac and only need the local app until early 2027.",
      ],
      faq: [
        { q: "Is Claude Squad free?", a: "Yes. It's open source under AGPL-3.0; you pay for the agents or model APIs you run in it." },
        {
          q: "Can I still download Conductor?",
          a: "Not as a new user: Conductor closed sign-ups and downloads on November 4, 2026, when it announced it's joining Meta. Existing users keep the Mac app, which gets updates until early 2027.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Cognition's cloud AI software engineer vs Anthropic's coding agent",
      title: "Devin vs Claude Code: AI Software Engineer or Coding Agent?",
      description:
        "Devin vs Claude Code: Cognition's AI software engineer with cloud VMs and Automations, or Anthropic's coding agent for your terminal, IDE and desktop.",
      h1: "Devin vs Claude Code: a cloud engineer or an agent at your side",
      lead: "Devin and Claude Code are both coding agents that write, run and test code and open pull requests. Devin, from Cognition, centres on cloud sessions, each on its own virtual machine, with Automations and a coordinator that runs child Devins; it also has a desktop app and a CLI. Claude Code, from Anthropic, works in your terminal, IDE, desktop app or the web, on Claude models. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Where it runs: each Devin cloud session gets its own VM; Claude Code runs locally by default, with cloud sessions on the web.",
        "Models: Devin uses Cognition's SWE-2 plus frontier models from several labs, picked by a router; Claude Code runs on Claude models.",
        "Price: Devin has Free, Pro at $20 and Max at $200 a month, and Teams at $80 a month plus $40 per dev seat; Claude Code comes with Claude Pro ($20), Max ($100), Ultra ($200), Team and Enterprise.",
        "Automation: Devin's Automations run on schedules and on events from Slack, GitHub, Linear and more; Claude Code's cloud scheduled tasks run on a schedule, an API call or a GitHub event.",
      ],
      pickA: [
        "You want each task in its own cloud VM, started from Slack, Linear or Jira.",
        "You want a coordinator session that runs and messages child sessions.",
      ],
      pickB: [
        "You want the agent working in your own checkout and terminal.",
        "You already pay for a Claude plan and want IDE extensions, a desktop app and the web.",
      ],
      faq: [
        {
          q: "How much does Devin cost?",
          a: "Free is $0, Pro $20 a month, Max $200 a month, and Teams $80 a month plus $40 a month per full dev seat, up to 100 users; Enterprise is by quote.",
        },
        { q: "Is Claude Code included in Claude Pro?", a: "Yes. Claude Code is included in every paid Claude plan: Pro, Max, Ultra, Team and Enterprise." },
      ],
    },
    "devin-vs-codex": {
      summary: "Cognition's AI software engineer vs OpenAI's coding agent",
      title: "Devin vs Codex: AI Software Engineers Compared (2026)",
      description:
        "Devin vs OpenAI Codex: cloud VMs, Automations and child sessions, or a coding agent in the CLI, IDE, ChatGPT app and cloud. Prices and features.",
      h1: "Devin vs Codex: two coding agents that also work in the cloud",
      lead: "Devin and Codex both run coding tasks locally and in the cloud, and open pull requests. Devin, from Cognition, gives each cloud session its own virtual machine and adds Automations and coordinator sessions. Codex, from OpenAI, comes with ChatGPT plans and runs in a terminal CLI, an IDE extension, the ChatGPT desktop app and Codex Cloud. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Pricing: Devin is sold on its own plans (Free, Pro $20, Max $200, Teams); Codex is included in ChatGPT plans from Plus at $20 a month, or used with an API key.",
        "Open source: Codex's CLI, SDK and App Server are Apache-2.0; Devin isn't open source.",
        "Models: Devin routes between Cognition's SWE-2 and frontier models; Codex runs on OpenAI models.",
        "Scheduling: Devin's Automations run on schedules and many event sources; Codex has scheduled tasks in the ChatGPT desktop app and on the web.",
      ],
      pickA: [
        "You want many event sources (Slack, Teams, Jira, PagerDuty, webhooks) to start work.",
        "You want a coordinator that runs child sessions in parallel VMs.",
      ],
      pickB: [
        "You already pay for ChatGPT and want the agent in your terminal and IDE.",
        "You want an open-source CLI you can inspect.",
      ],
      faq: [
        {
          q: "Is Codex free?",
          a: "Codex is included in paid ChatGPT plans from Plus ($20 a month) and can also run on an OpenAI API key. The CLI itself is open source under Apache-2.0.",
        },
        {
          q: "Can Devin and Codex take Linear issues?",
          a: "Yes. You can assign Linear issues to Devin, and on paid ChatGPT plans you can assign Linear issues to Codex or mention it in a comment.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Factory's Droids platform vs Anthropic's coding agent",
      title: "Factory vs Claude Code: Droids or Claude Code?",
      description:
        "Factory vs Claude Code: Droids with Automations, Workstreams and cloud computers, or Anthropic's coding agent on Claude models. Prices and features.",
      h1: "Factory vs Claude Code: the Droids platform or Anthropic's agent",
      lead: "Factory and Claude Code are both coding agents with a desktop app, a CLI and a headless mode for CI. Factory's Droids work with many models, including your own keys, and add Automations, Workstreams with an orchestrator, and Factory-hosted cloud computers. Claude Code is Anthropic's agent on Claude models, included in paid Claude plans. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Models: Factory works with frontier and open-weight models and your own keys; Claude Code runs on Claude models.",
        "Price: Factory has Free (bring your own inference), Pro at $20, Plus at $100 a month and higher tiers; Claude Code comes with Claude Pro ($20), Max ($100), Ultra ($200), Team and Enterprise.",
        "Several agents: in Factory's Workstreams (beta), an orchestrator's agents report back to it; in Claude Code's experimental agent teams, teammates message each other.",
        "Automation: Factory's Automations run on schedules, Slack, GitHub or webhooks; Claude Code has cloud scheduled tasks and GitHub Actions.",
      ],
      pickA: [
        "You want to switch between models from different labs, or bring your own.",
        "You want hosted cloud computers and automations such as ticket-to-PR on a schedule.",
      ],
      pickB: [
        "You're happy on Claude models and already pay for a Claude plan.",
        "You want Anthropic's tools around it: code review, security review and plugins.",
      ],
      faq: [
        {
          q: "What are Factory Droids?",
          a: "Droids are Factory's coding agents. They run in the Factory desktop app, the Droid CLI, headless in CI with `droid exec`, and on Factory-hosted cloud computers.",
        },
        {
          q: "Does Factory work with Claude models?",
          a: "Factory says it supports the leading frontier models, including Claude Opus and Sonnet, plus open-weight models and your own API keys.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "An open-source, any-model coding agent vs Anthropic's coding agent",
      title: "OpenCode vs Claude Code: Open-Source Coding Agent Compared",
      description:
        "OpenCode vs Claude Code: an MIT-licensed coding agent for 200+ model providers with free models, or Anthropic's coding agent in paid Claude plans.",
      h1: "OpenCode vs Claude Code: open source and any model, or Anthropic's agent",
      lead: "OpenCode and Claude Code are both coding agents with a terminal UI, a desktop app, subagents and MCP. OpenCode is open source under MIT and works with models from 200+ providers, including local ones and a set of free models. Claude Code is Anthropic's agent on Claude models, included in paid Claude plans. Here's the comparison, and where Crewmark fits.",
      differences: [
        "License: OpenCode is MIT; Claude Code's repository is public but all rights reserved.",
        "Models: OpenCode works with 200+ providers through Models.dev; Claude Code runs on Claude models.",
        "Price: OpenCode is free, with free models, and OpenCode Go costs $10 a month; Claude Code comes with Claude plans from Pro at $20 a month.",
        "Scheduling: Claude Code has cloud and desktop scheduled tasks and `/loop`; OpenCode's schedules are experimental and opt-in.",
      ],
      pickA: [
        "You want an open-source agent and the freedom to pick any model, including local ones.",
        "You want to start free.",
      ],
      pickB: [
        "You want Claude models with Anthropic's tooling: scheduled tasks, code review and IDE extensions.",
        "You already pay for a Claude plan.",
      ],
      faq: [
        {
          q: "Is OpenCode free?",
          a: "Yes. The agent is free and MIT-licensed, and it comes with free models that have a daily limit. OpenCode Go costs $10 a month and Go Plus $40.",
        },
        {
          q: "Can OpenCode use Claude models?",
          a: "OpenCode works with 200+ model providers, Anthropic among them, so you can use Claude models with an API key.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "A low-code AI workforce builder vs a ready-made AI assistant",
      title: "Relevance AI vs Lindy: AI Workforce or AI Assistant?",
      description:
        "Relevance AI vs Lindy: a low-code platform for building teams of AI agents, or one hosted AI assistant across your inbox, calendar and Slack.",
      h1: "Relevance AI vs Lindy: build an AI workforce or hire one assistant",
      lead: "Relevance AI and Lindy both sell the idea of an AI employee, in different shapes. Relevance AI is a low-code platform for building specialist agents and linking them into a multi-agent \"AI Workforce\", sold to companies through sales. Lindy is one hosted assistant that works across your inbox, calendar, meetings and Slack, with routines and approvals. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Shape: Relevance AI is a builder for many specialist agents; Lindy is one assistant per workspace that you hand tasks to.",
        "Pricing: Relevance AI's pricing page lists Enterprise only, through sales; Lindy has a free trial with $50 in credits and plans from $29.99 a month per active user.",
        "Several agents: Relevance AI agents pass work to each other on a canvas; Lindy's docs describe one Lindy per workspace.",
        "Approvals: Lindy asks before anything with outside impact; Relevance AI has escalations and, on Enterprise, work-hour controls.",
      ],
      pickA: [
        "You want to design several specialist agents and connect them, with a vendor team that helps you deploy.",
        "You're buying for a company and expect to go through sales.",
      ],
      pickB: [
        "You want one assistant for email, calendar, meetings and follow-ups, starting today.",
        "You want to try it free before paying.",
      ],
      faq: [
        {
          q: "How much does Lindy cost?",
          a: "A free trial gives $50 in credits for 7 days. Paid plans start at $29.99 a month per active user for 3,000 credits.",
        },
        {
          q: "Does Relevance AI have a free plan?",
          a: "Its docs say the Free plan is retired, and the public pricing page lists only Enterprise, through sales.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "xAI's hosted AI teammates vs Anthropic's coding agent",
      title: "Grok Bot vs Claude Code: AI Teammates or Coding Agent?",
      description:
        "Grok Bot vs Claude Code: xAI's hosted Bots with their own computers that work in Slack and your apps, or Anthropic's coding agent for your repository.",
      h1: "Grok Bot vs Claude Code: teammates for your apps or an agent for your code",
      lead: "Grok Bot and Claude Code both take on real work, in different places. Grok Bot is xAI's hosted AI teammate: each Bot gets a computer of its own in the cloud, signs in to your tools, works in Slack and Microsoft Teams and runs routines. Claude Code is Anthropic's coding agent: it works in your repository from the terminal, an IDE, the desktop app or the web. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Job: Grok Bot handles work across business apps such as CRM, support, expenses and recruiting; Claude Code writes and changes code.",
        "Where it runs: each Grok Bot has its own cloud computer and keeps working when your laptop is closed; Claude Code runs on your machine by default, with cloud sessions on the web.",
        "How you work with it: you message Grok Bots in its app, Slack, Teams or a video call; you work with Claude Code in a terminal, an IDE, the desktop app or the web.",
        "Price: Grok Bot has Premium at $30, Super at $100 and Ultra at $200 a month; Claude Code comes with Claude Pro ($20), Max ($100), Ultra ($200), Team and Enterprise.",
      ],
      pickA: [
        "You want AI teammates for sales, operations or support work inside the apps your team already uses.",
        "You want them in Slack and in your meetings, working while your laptop is closed.",
      ],
      pickB: [
        "Your work is in a codebase: features, fixes, reviews and refactors.",
        "You want the agent working in your own checkout, with your tools and tests.",
      ],
      faq: [
        {
          q: "How much does Grok Bot cost?",
          a: "Premium is $30 a month, Super $100 and Ultra $200, billed monthly, each with weekly Grok Bot usage included; extra usage is billed on token cost. Teams and Enterprise go through sales.",
        },
        {
          q: "Can Grok Bot write code?",
          a: "xAI lists engineering uses such as reproducing a bug in a product's UI and filing the ticket, and a guide for coordinating coding agents from Linear. Claude Code is built to work directly in your repository.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "xAI's hosted AI teammates vs Nous Research's open-source personal agent",
      title: "Grok Bot vs Hermes Agent: Hosted Bots or Open-Source Agent?",
      description:
        "Grok Bot vs Hermes Agent: xAI's hosted Bots with their own computers, or Nous Research's open-source agent with Bots, routines and any model provider.",
      h1: "Grok Bot vs Hermes Agent: hosted teammates or an agent you run",
      lead: "Grok Bot and Hermes Agent both offer named Bots that talk to each other and run routines, which is why they get compared. Grok Bot is xAI's hosted product: each Bot has its own cloud computer and works in Slack, Teams and your apps. Hermes Agent is Nous Research's open-source agent that you run yourself on any model provider, with a Bot Mode for several named Bots. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Hosting: Grok Bot runs in xAI's cloud; Hermes Agent runs on your machine or a server, and paid Nous Portal tiers include one cloud-hosted agent.",
        "License and price: Grok Bot is closed, from $30 a month; Hermes Agent is MIT and free, with an optional Nous Portal subscription from $20 a month.",
        "Models: Grok Bot is built with Grok; Hermes Agent works with many providers, including local models.",
        "Where you talk to it: Grok Bot works in its app, Slack, Teams and video calls; Hermes Agent works from a terminal, a desktop app or chat apps.",
      ],
      pickA: [
        "You want hosted teammates with their own computers, working in Slack, Teams and your meetings.",
        "You'd rather not run anything yourself.",
      ],
      pickB: [
        "You want an open-source agent you run yourself, on the model provider you choose.",
        "You want an agent that writes and refines its own skills over time.",
      ],
      faq: [
        {
          q: "Is Hermes Agent free?",
          a: "Yes. It's MIT-licensed and free; you pay your model provider. An optional Nous Portal subscription has Free, Plus ($20 a month), Super ($100) and Ultra ($200) tiers.",
        },
        {
          q: "Do Grok Bot and Hermes Agent both have Bots that talk to each other?",
          a: "Yes. Grok Bots message each other and coordinate in group chats; in Hermes Agent's Bot Mode, named Bots message each other directly.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "An open-source, self-hostable AI coworkers workspace vs xAI's hosted Bots",
      title: "OpenBot vs Grok Bot: Open-Source or Hosted AI Coworkers?",
      description:
        "OpenBot vs Grok Bot: CopilotKit's MIT-licensed, self-hostable workspace for AI coworkers, or xAI's hosted Bots. Hosting, models, pricing and features.",
      h1: "OpenBot vs Grok Bot: AI coworkers you host or AI coworkers you rent",
      lead: "OpenBot and Grok Bot both give each AI coworker a computer of its own, with a browser and tools, and both have routines and approvals. OpenBot, from CopilotKit, is open source and self-hostable: it runs on your laptop or your Kubernetes cluster, with the models and agents you choose. Grok Bot is xAI's hosted product, built with Grok, that works in Slack, Teams and your apps. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Hosting: OpenBot runs on your laptop or your Kubernetes cluster, or hosted by CopilotKit in early access; Grok Bot runs in xAI's cloud.",
        "License: OpenBot's application template is MIT, with CopilotKit Intelligence licensed separately; Grok Bot is closed source.",
        "Models: OpenBot works with OpenAI, Claude, Gemini or open models, and connects your own agents through AG-UI; Grok Bot is built with Grok.",
        "Price: OpenBot is free for personal projects and up to $29 per active user a month for Business; Grok Bot is $30, $100 or $200 a month per plan.",
      ],
      pickA: [
        "You want to self-host AI coworkers and keep your data and models under your control.",
        "You want to customize or white-label the workspace.",
      ],
      pickB: [
        "You want hosted Bots that are ready in Slack, Teams and your meetings.",
        "You'd rather not run infrastructure.",
      ],
      faq: [
        {
          q: "Is OpenBot free?",
          a: "It's free for personal projects on your laptop. OpenBot for Business costs up to $29 per active user a month, plus 5% of monthly model spend above $5,000; you pay model providers directly.",
        },
        {
          q: "Is OpenBot open source?",
          a: "The OpenBot application template is MIT-licensed. It uses CopilotKit Intelligence, which is licensed separately: free on a laptop, with trial and production licenses for Kubernetes.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Anthropic's agent for knowledge work vs its agent for code",
      title: "Claude Cowork vs Claude Code: Which Anthropic Agent to Use?",
      description:
        "Claude Cowork vs Claude Code: Anthropic's agent for documents, research and spreadsheets in the Claude apps, or its coding agent for your repository.",
      h1: "Claude Cowork vs Claude Code: two Anthropic agents for different work",
      lead: "Claude Cowork and Claude Code come from the same company, run on Claude models, and Anthropic says Cowork uses the same architecture as Claude Code. They're aimed at different work. Cowork handles knowledge work in the Claude apps, such as research, documents, spreadsheets and slides, mostly in Anthropic's cloud. Claude Code works in your code repository, from the terminal, an IDE, the desktop app or the web. Both come with paid Claude plans. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Work: Cowork turns an outcome into documents, spreadsheets with formulas, decks or organized folders; Claude Code reads your codebase, edits files and runs commands.",
        "Where it runs: Cowork tasks run in Anthropic's cloud and reach local files through Claude Desktop; Claude Code runs on your machine by default, with cloud sessions on the web.",
        "Where you use it: Cowork is in the Claude apps on desktop, web and mobile; Claude Code is in the terminal, IDE extensions, the desktop app and the web.",
        "Schedules: Cowork schedules tasks hourly to weekly in the cloud; Claude Code has cloud and desktop scheduled tasks and `/loop`.",
      ],
      pickA: [
        "Your work is research, documents, spreadsheets or slides.",
        "You want to hand off tasks from your phone or the browser and get files back.",
      ],
      pickB: ["Your work is in a code repository.", "You want an agent with your terminal, tests and git."],
      faq: [
        {
          q: "Do Claude Cowork and Claude Code come with the same plan?",
          a: "Yes. Both are included in paid Claude plans: Pro, Max, Ultra, Team and Enterprise. Claude Free includes neither.",
        },
        {
          q: "Can Claude Cowork write code?",
          a: "Anthropic positions Cowork for non-coding knowledge work and Claude Code for software engineering. For tasks that run only on your computer, Anthropic points to Claude Code in the desktop app.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Anthropic's and OpenAI's AI coworkers inside their chat apps",
      title: "Claude Cowork vs ChatGPT Work: AI Coworkers Compared",
      description:
        "Claude Cowork vs ChatGPT Work: Anthropic's and OpenAI's agents for documents, research and recurring tasks. Plans, where they run, schedules and approvals.",
      h1: "Claude Cowork vs ChatGPT Work: two AI coworkers inside the chat apps",
      lead: "Claude Cowork and ChatGPT Work do the same kind of job: you describe an outcome in the chat app, and the agent plans the steps, works through files, connected apps and a browser, and hands back something to review. Cowork is Anthropic's, on paid Claude plans. ChatGPT Work is OpenAI's, in ChatGPT plans, and shares its abilities and usage with Codex. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Plans: Cowork is on paid Claude plans from Pro at $20 a month, not on Free; ChatGPT Work has limited access on Free and Go in the desktop app, and full access from Plus at $20 a month.",
        "Where it runs: Cowork runs in Anthropic's cloud and reaches local files through Claude Desktop; ChatGPT Work runs in OpenAI's cloud, or locally through the ChatGPT desktop app.",
        "Schedules: Cowork runs scheduled tasks hourly to weekly; ChatGPT Work has scheduled tasks plus event triggers from Gmail, Slack or GitHub on eligible plans.",
        "Approvals: Cowork has Manual, Auto (with a safety review) and Skip modes; ChatGPT Work pauses for approval of important actions, with permission modes in the desktop app.",
      ],
      pickA: [
        "You already pay for Claude, or want Anthropic's models for documents and research.",
        "You want scheduled tasks that run in the cloud while your computer is off.",
      ],
      pickB: [
        "You already pay for ChatGPT, or want to try it on the Free plan in the desktop app.",
        "You want tasks triggered by Gmail, Slack or GitHub events.",
      ],
      faq: [
        {
          q: "Is ChatGPT Work free?",
          a: "ChatGPT Free and Go get limited ChatGPT Work access in the desktop app. Plus ($20 a month) and Pro get it on desktop, web and mobile.",
        },
        { q: "Is Claude Cowork free?", a: "No. It's on paid Claude plans only, from Pro at $20 a month." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Microsoft 365's AI coworker vs Anthropic's",
      title: "Copilot Cowork vs Claude Cowork: Microsoft or Anthropic?",
      description:
        "Copilot Cowork vs Claude Cowork: Microsoft's agent across Outlook, Teams and Office files, or Anthropic's agent in the Claude apps. Licensing, cost and features.",
      h1: "Copilot Cowork vs Claude Cowork: the Microsoft 365 agent or the Claude one",
      lead: "Copilot Cowork and Claude Cowork share a name and an idea: hand a multi-step task to an agent and approve what it does. Copilot Cowork works across Microsoft 365, sending email, scheduling meetings and editing Office files in OneDrive and SharePoint, and can use GPT, Claude or Grok models. Claude Cowork is Anthropic's agent in the Claude apps, on Claude models. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Where your work is: Copilot Cowork works in Outlook, Teams, OneDrive and SharePoint and can't reach files on your local device; Claude Cowork works with connectors such as Google Drive, Gmail, Microsoft 365 and Slack, and with local files through Claude Desktop.",
        "Cost: Copilot Cowork needs a Microsoft 365 Copilot license plus Copilot Credits at $0.01 each; Claude Cowork comes with paid Claude plans from Pro at $20 a month.",
        "Models: Copilot Cowork has a model picker with GPT, Claude and Grok models, depending on tenant settings; Claude Cowork runs on Claude models.",
        "Accounts: Copilot Cowork is for work or school accounts, with personal accounts in preview; Claude Cowork is on individual and team Claude plans.",
      ],
      pickA: [
        "Your organization runs on Microsoft 365 and already licenses Microsoft 365 Copilot.",
        "You want the agent to send email, book meetings and post in Teams for you, with approval.",
      ],
      pickB: [
        "You work outside Microsoft 365, or want local files and a browser on your own computer.",
        "You want a fixed monthly plan rather than per-credit billing.",
      ],
      faq: [
        {
          q: "How much does Copilot Cowork cost?",
          a: "It needs a Microsoft 365 Copilot license, and its usage is billed in Copilot Credits: $0.01 per credit pay-as-you-go, or a prepaid one-year plan with discounts from 5% to 20%.",
        },
        {
          q: "Does Copilot Cowork use Claude?",
          a: "Its model picker includes Claude Opus, Sonnet and Fable alongside GPT and Grok models, depending on tenant settings; EU Data Boundary tenants get GPT models only.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "ChatGPT's Work mode vs OpenAI's coding agent",
      title: "ChatGPT Work vs Codex: Which One Should You Use?",
      description:
        "ChatGPT Work vs Codex: OpenAI's Work mode for documents and analyses, or its coding agent for repositories. They share abilities and usage; here's how they differ.",
      h1: "ChatGPT Work vs Codex: same engine, different jobs",
      lead: "ChatGPT Work and Codex are both OpenAI agents, and OpenAI says Work shares core abilities, execution and usage limits with Codex. The difference is what they're for. ChatGPT Work is a mode in ChatGPT for tasks that end in something to review, such as decks, spreadsheets and analyses. Codex is the coding agent, in a terminal CLI, an IDE extension, the ChatGPT desktop app and the cloud. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Work: ChatGPT Work returns documents, decks, spreadsheets and analyses; Codex reads, edits and runs code in a repository.",
        "Where you use it: ChatGPT Work is in ChatGPT on the web, desktop and mobile; Codex is in a terminal CLI, an IDE extension, the ChatGPT desktop app and Codex Cloud.",
        "Usage: they share Codex's usage limits and credits.",
        "Open source: Codex's CLI, SDK and App Server are Apache-2.0; ChatGPT Work isn't open source.",
      ],
      pickA: ["Your task ends in a document, a deck or an analysis.", "You want to start it from ChatGPT on your phone or the web."],
      pickB: [
        "Your task is code: features, fixes and reviews.",
        "You want an agent in your terminal or IDE, or in CI with `codex exec`.",
      ],
      faq: [
        {
          q: "Do ChatGPT Work and Codex share usage?",
          a: "Yes. OpenAI says ChatGPT Work shares core capabilities, execution and usage limits with Codex, including credits.",
        },
        {
          q: "Which ChatGPT plans include Work?",
          a: "Free and Go get limited access in the desktop app; Plus ($20 a month), Pro and Business get it on desktop, web and mobile.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Anthropic's AI coworker in the Claude apps vs xAI's Bots with their own computers",
      title: "Claude Cowork vs Grok Bot: AI Coworkers Compared",
      description:
        "Claude Cowork vs Grok Bot: Anthropic's agent for documents and research in the Claude apps, or xAI's Bots with their own cloud computers in Slack and your apps.",
      h1: "Claude Cowork vs Grok Bot: a task agent in Claude or a team of Bots",
      lead: "Claude Cowork and Grok Bot are both AI coworkers that keep working in the cloud while you're away. Claude Cowork is Anthropic's agent in the Claude apps: you hand it a task and get files back. Grok Bot is xAI's: Bots with their own cloud computers that sign in to your tools, work in Slack, Microsoft Teams and video calls, and hand work to each other. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Shape: Claude Cowork takes tasks from you, with sub-agents inside a task; Grok Bot gives each Bot its own job, and Bots message each other and coordinate in group chats.",
        "Where you work with it: Claude Cowork is in the Claude apps on desktop, web and mobile; Grok Bot is in its own app, Slack, Teams and video calls.",
        "Plans: Claude Cowork comes with paid Claude plans from Pro at $20 a month; Grok Bot is included in Premium ($30 a month), Super and Ultra plans.",
        "Models: Claude Cowork runs on Claude models; Grok Bot is built with Grok.",
      ],
      pickA: ["You hand off documents, research and spreadsheets, and want files back.", "You already use Claude."],
      pickB: [
        "You want several Bots with their own jobs working in Slack and your team's apps.",
        "You want Bots in your meetings.",
      ],
      faq: [
        {
          q: "Can Grok Bot join meetings?",
          a: "Yes. xAI says you can add a Bot to a Google Meet, Zoom or Teams call, where it listens in, joins the chat when it can help and follows through after.",
        },
        {
          q: "Can Claude Cowork run while my computer is off?",
          a: "Cloud tasks keep running on Anthropic's servers; only work that needs local files or your browser waits for Claude Desktop.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "Cursor's coordinator agent for code vs xAI's Bots for work across apps",
      title: "Cursor Projects vs Grok Bot: Coordinator Agents Compared",
      description:
        "Cursor Projects vs Grok Bot: a coordinator agent that runs many cloud agents on your code, or xAI's Bots that work in Slack and your apps. Plans and features.",
      h1: "Cursor Projects vs Grok Bot: a team of agents for code or for everything else",
      lead: "Cursor Projects and Grok Bot both put one agent in charge of others. In a Cursor Project, a coordinator agent plans a feature, a migration or an app and delegates the coding to many cloud agents in parallel. Grok Bot is xAI's set of AI teammates, each with its own cloud computer, working in Slack, Teams and your apps, with one Bot able to manage the others. Both start on $30-a-month plans. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Work: Cursor Projects is for software work in a GitHub repository; Grok Bot handles work across business apps such as CRM, support, expenses and recruiting.",
        "Coordination: a Cursor Project's coordinator creates and manages worker agents, and in Multiplayer Projects coordinators message each other; Grok Bots message each other and coordinate in group chats.",
        "Shared state: a Cursor Project keeps shared files (preferences, notes, workflows) and a task board; Grok Bots keep memory of how your team works.",
        "Triggers: Cursor Projects act on schedules, Slack channels and pull requests; Grok Bots run routines on a schedule and work in Slack and Teams.",
      ],
      pickA: [
        "You want a long coding effort planned and split across many agents.",
        "Your team already uses Cursor and GitHub.",
      ],
      pickB: [
        "You want AI teammates for operations, sales or support in your existing apps.",
        "You want them in Slack, Teams and meetings.",
      ],
      faq: [
        {
          q: "Which Cursor plans include Projects?",
          a: "Every plan with Cloud Agents: Premium ($30 a month) and higher, Teams, Enterprise and legacy paid plans. Not Free, Plus or legacy Hobby.",
        },
        {
          q: "Does a Cursor Project keep working when my laptop is closed?",
          a: "Yes. A Project runs on its own computer in the cloud; the coordinator starts a local agent only when something must be tested on your machine.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Microsoft's AI coworker vs Microsoft's agent builder",
      title: "Copilot Cowork vs Copilot Studio: What's the Difference?",
      description:
        "Copilot Cowork vs Copilot Studio: Microsoft 365's agent that does tasks for you, or the low-code studio where you build agents and workflows. Cost and features.",
      h1: "Copilot Cowork vs Copilot Studio: use an agent or build one",
      lead: "Copilot Cowork and Copilot Studio are both Microsoft products, both billed in Copilot Credits, and they share a tenant's prepaid credit pool. The difference is who does the work. Copilot Cowork is an agent in Microsoft 365 Copilot that you hand a task to, and it sends email, books meetings and edits Office files with your approval. Copilot Studio is where makers build their own agents, workflows and apps and publish them to Teams, Microsoft Copilot, websites or a phone line. A Copilot Studio workflow can even start a Cowork task as one step. Here's the comparison, and where Crewmark fits.",
      differences: [
        "Job: Copilot Cowork does a task for you across Outlook, Teams, Word, Excel, PowerPoint, OneDrive and SharePoint; Copilot Studio is a low-code studio for building agents, workflows and apps that others use.",
        "Who uses it: Copilot Cowork is for anyone with a Microsoft 365 Copilot license and Cowork turned on; Copilot Studio is for makers, and its published agents can serve employees or customers on a website or phone line.",
        "Cost: Copilot Cowork needs a Microsoft 365 Copilot license plus Copilot Credits at $0.01 each; Copilot Studio sells 25,000-credit packs at $200 a month (billed annually) or $0.01 per credit pay-as-you-go, and its maker license is $0.",
        "Automation: Copilot Cowork runs scheduled prompts and email or Teams triggers; Copilot Studio adds agent triggers, multistage approvals with a Human review connector, and workflows that can call Cowork as one step.",
      ],
      pickA: [
        "You want an agent to do Microsoft 365 work for you today, without building anything.",
        "You want to approve each email, meeting or Teams post before it goes out.",
      ],
      pickB: [
        "You want to build an agent or a workflow that other people, or customers, use.",
        "You need connectors, multistage approvals, publishing channels or separate dev, test and production environments.",
      ],
      faq: [
        {
          q: "Is Copilot Cowork part of Copilot Studio?",
          a: "No, they're separate products. They share a tenant's prepaid Copilot Credit pool, and a Copilot Studio workflow can start or resume a Copilot Cowork task through its Copilot node.",
        },
        {
          q: "How much does Copilot Studio cost?",
          a: "Microsoft's Licensing Guide lists $200 a month (billed annually) for a pack of 25,000 Copilot Credits per tenant, or $0.01 per credit pay-as-you-go. Unused pack credits don't roll over. The maker license is $0, and the free trial can't publish agents.",
        },
      ],
    },
  },
};
