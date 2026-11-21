import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/lindy, MC-439. For "lindy ai alternatives" and "lindy ai alternatives free" (Google autocomplete,
// 2026-11-13). Every fact comes from docs/compare/facts/<cards>.md (lindy, relevance-ai, grok-bot, claude-cowork,
// copilot-cowork, chatgpt-work, openworker, openbot, crewmark; checked 2026-11-13, with a source per fact); nothing
// under a card's "Unverified" is used. Lindy's plan names disagree between its pricing page and docs, so the page
// quotes only its prices, never a plan name.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI Alternatives in 2026: Free and Open-Source Options",
    description:
      "Lindy AI alternatives compared: Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI, open-source OpenWorker and OpenBot, with free options.",
  },
  breadcrumb: "Lindy alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Lindy",
    title: "Lindy AI alternatives: hosted AI coworkers, agent platforms and open-source assistants",
    lead: "Lindy is a hosted AI assistant that works across your inbox, calendar, meetings and Slack, runs recurring routines and asks before anything with outside impact. It's billed in credits: you start with $50 in free credits that last 7 days, then pay from $29.99 a month per active user for 3,000 credits. Monthly credits don't roll over, and every active user is billed, including people who only @mention Lindy in Slack. Here are 8 alternatives, hosted and open source, with what each costs.",
    cta: "Get started",
    secondary: "Compare them",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy alternatives at a glance",
      text: [
        "Facts from each vendor's own pages, docs or GitHub, checked November 13, 2026. Prices in USD. Not a ranking.",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (for reference)",
          "A hosted AI assistant for inbox, calendar, meetings and Slack",
          "No",
          "$50 in free credits for 7 days; then from $29.99/month per active user for 3,000 credits",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "xAI's hosted AI teammates, each with its own cloud computer",
          "No",
          "Premium $30/month",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Anthropic's agent for non-coding knowledge work in the Claude apps",
          "No",
          "Claude Pro $20/month, or $17/month billed annually",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft's agent for multi-step tasks across Microsoft 365",
          "No",
          "Microsoft 365 Copilot license plus Copilot Credits at $0.01 each",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI's Work mode in ChatGPT, for tasks that end in something to review",
          "No",
          "Free ($0) and Go ($8/month): limited, desktop app only; Plus $20/month",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "A hosted low-code platform for AI agents and multi-agent teams",
          "No",
          "Enterprise only, through sales; Free plan retired",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "An AI coworker desktop app that runs on your machine",
          "Yes, MIT",
          "No price listed; your own model key or a local model",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit's self-hostable workspace for AI coworkers",
          "Yes, MIT (uses the separately licensed CopilotKit Intelligence)",
          "Free for personal projects; Business up to $29 per active user a month",
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
      id: "hosted",
      title: "Hosted AI coworkers from xAI, Anthropic, Microsoft and OpenAI",
      text: [
        "Like Lindy, these run in the vendor's cloud and take work in conversation. More of them side by side in [AI coworker tools](/blog/ai-coworker).",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots that each get their own cloud computer, sign in to your tools, work in Slack and Microsoft Teams, run routines on a schedule and message each other. Ready-made Bots include Sales Outbound, Talent Scout and Chief of Staff. It's included in Premium ($30/month), Super ($100/month) and Ultra ($200/month), billed monthly, with extra usage billed on token cost. Choose it if you want several Bots with separate jobs, including in Microsoft Teams. See the [Grok Bot guide](/personal-agent/grok-bot).",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic): you describe an outcome and Claude works through research, documents, spreadsheets with working formulas and slide decks in your files, connected apps such as Gmail and Slack, and a browser. Scheduled tasks run hourly, daily, weekly or on weekdays in the cloud. It comes with paid Claude plans: Pro $20/month ($17/month billed annually), Max $100, Ultra $200, plus Team and Enterprise seats. Choose it if you want finished files back rather than inbox help.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): sends email, schedules meetings, edits Word, Excel and PowerPoint files and posts in Teams, with an approval dialog before sensitive actions. It needs a Microsoft 365 Copilot license, and usage is billed in Copilot Credits at $0.01 each. Choose it if your company runs on Outlook and Teams.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): a Work mode in ChatGPT for tasks that end in something to review, with plugins for Slack, Google Drive, SharePoint, email, calendars and CRMs, scheduled tasks and Gmail, Slack or GitHub triggers on eligible plans. Free and Go get limited access in the desktop app; full access starts with Plus at $20/month. Choose it if you already use ChatGPT.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "An agent platform for teams: Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai): a hosted low-code platform where you build specialist agents with their own instructions, tools and knowledge, and link them into multi-agent teams it calls an AI Workforce, for sales, support and operations work. As of November 13, 2026 its pricing page lists only Enterprise, through sales, and its docs say the Free plan is retired. Choose it if your company wants several no-code agents and an embedded deployment team. See [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) and [Relevance AI pricing](/pricing/relevance-ai).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-source Lindy alternatives",
      text: [
        "Both run on your own computer or server with the model you choose, and neither bills in credits: you pay your model provider directly.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): an MIT-licensed AI coworker desktop app for macOS and Windows, in open beta. It works across GitHub, Slack, email and calendars; when you @mention it in Slack, the task runs on your desktop and the answer comes back in the thread. You can schedule morning briefs and weekly reports; scheduled runs never approve their own actions, and their requests wait in an inbox. Use a key for OpenAI, Anthropic, Google Gemini or OpenRouter, or a local model. Choose it if you want Lindy-style office help with your keys kept on your machine.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): a self-hostable workspace where each Bot has its own browser, files, tools, routines, memory and approvals. It runs as a desktop app for Mac and Windows or on Kubernetes for a team, with frontends for Slack and Teams among others (some in early access). Free for personal projects; OpenBot for Business is up to $29 per active user a month, plus 5% of monthly model spend above $5,000. Choose it if you want to host AI coworkers for a team on your own infrastructure.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Lindy alternative",
      steps: [
        {
          title: "Count who will use it",
          text: "Lindy bills every active user, including people who only @mention it in Slack. Grok Bot lists individual plans from $30/month; Copilot Cowork needs a Microsoft 365 Copilot license and bills per Copilot Credit; OpenWorker lists no price and OpenBot is free for personal projects.",
        },
        {
          title: "Decide how you want to pay for usage",
          text: "Lindy's monthly credits don't roll over and top-ups are $10 per 1,000 credits. Grok Bot and the Claude and ChatGPT plans are subscriptions with usage limits. With OpenWorker and OpenBot you pay your model provider directly.",
        },
        {
          title: "Match where your work happens",
          text: "Slack and Microsoft Teams: Grok Bot. Microsoft 365: Copilot Cowork. Documents and spreadsheets to hand back: Claude Cowork or ChatGPT Work. Many agents for sales or support: Relevance AI.",
        },
        {
          title: "Choose hosted or self-hosted",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work and Relevance AI are hosted. OpenWorker runs on your desktop, and OpenBot runs on your laptop or your own Kubernetes cluster.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Crewmark: AI employees on the Claude Code or Codex you already pay for",
      text: [
        "Crewmark isn't an inbox assistant like Lindy. It's an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your own computer with a role, goals and working hours. It wakes on a heartbeat, takes issues from a shared board and keeps their status current. Crewmark doesn't bill usage: agents run on the Claude or ChatGPT subscription you already pay for, and your computer has to stay on for heartbeats.",
        "The Free plan covers 1 project and up to 3 AI employees. Pro ($5/month) and Team ($10/month) are coming soon; billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0). Details on [Crewmark pricing](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Give each employee a role, goals and projects, for example an SEO Specialist or a Data Analyst. See [AI employee roles](/ai-employees).",
        },
        {
          title: "Put recurring work on the board",
          text: "Make issues repeat daily, weekly or monthly; when one is due it reopens and its employee is told. An agent that needs a review or permission sets the issue to Needs action and waits.",
        },
        {
          title: "Set working hours",
          text: "The heartbeat wakes each employee every 15 minutes to 24 hours during its working hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Rather not pay per credit?",
    text: "Crewmark runs AI employees on the Claude Code or Codex subscription you already have. Free for up to 3 employees.",
    button: "Get started",
  },
  faq: {
    title: "Lindy alternatives FAQ",
    items: [
      {
        q: "Is there a free Lindy alternative?",
        a: "Yes. ChatGPT Free ($0) includes limited ChatGPT Work access in the desktop app. OpenWorker lists no price and runs on your own model key or a local model, and OpenBot is free for personal projects. Crewmark's Free plan covers 1 project and up to 3 AI employees. Lindy itself starts with $50 in credits that last 7 days, once per teammate.",
      },
      {
        q: "Is there an open-source Lindy alternative?",
        a: "OpenWorker (MIT) and OpenBot (an MIT application template on the separately licensed CopilotKit Intelligence) are open source, and so is Crewmark (GPL-3.0). Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work and Relevance AI are not.",
      },
      {
        q: "Lindy vs Relevance AI: what's the difference?",
        a: "Lindy is one hosted assistant for inbox, calendar, meetings and Slack, billed per active user in credits. Relevance AI is a low-code platform for building many specialist agents and linking them into a Workforce; its pricing page lists only Enterprise, through sales. See [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
      {
        q: "Which Lindy alternative works in Slack?",
        a: "Grok Bot works in Slack and Microsoft Teams like a colleague. With OpenWorker you @mention it in Slack and it replies in the thread. OpenBot has a Slack frontend (some frontends are in early access), ChatGPT Work has a Slack plugin and Slack triggers on eligible plans, and Claude Cowork has a Slack connector.",
      },
      {
        q: "Is there a Lindy alternative that runs on my own computer?",
        a: "OpenWorker runs its agent loop on your machine and keeps conversations and model keys there. OpenBot runs as a desktop app for Mac and Windows, or on your own Kubernetes cluster. Crewmark's agents run on your computer inside Claude Code or Codex.",
      },
      {
        q: "Why do people look for Lindy alternatives?",
        a: "The limits Lindy states: monthly credits don't roll over, and when they run out Lindy pauses credit-using actions until the next cycle or a top-up ($10 per 1,000 credits). Every active user is billed, including people who only @mention it in Slack. Free credits last 7 days, and Microsoft Teams as a place to use Lindy is still coming soon.",
      },
    ],
  },
  cta: {
    title: "Give your agents a job, not a credit balance.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against each product's own pages, docs, pricing and GitHub on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI, CopilotKit or the makers of OpenWorker. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
