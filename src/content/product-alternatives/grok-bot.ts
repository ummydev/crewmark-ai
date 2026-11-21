import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/grok-bot, MC-439. For "grok bot alternatives", "grok bot alternatives reddit", "grok bot alternatives
// open source", "grok bot alternatives free", "grok bot alternatives github", "grok bot alternative claude" (Google
// autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/{grok-bot,claude-cowork,copilot-cowork,chatgpt-work,lindy,openbot,openworker,hermes-agent,
// claude-code,crewmark}.md (checked 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used
// (so nothing about Grok Bot and Cursor plans). GitHub repositories are named as text, not linked, since external
// links go only to each vendor's official site.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot Alternatives in 2026: Open-Source, Free and Hosted",
    description:
      "Grok Bot alternatives compared: Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent and Crewmark, by license and price.",
  },
  breadcrumb: "Grok Bot alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · xAI Grok Bot",
    title: "Grok Bot alternatives: open-source, free and hosted AI teammates",
    lead: "Grok Bot is xAI's set of hosted “AI teammates”: Bots that each get a computer of their own in the cloud, sign in to your tools and apps, work in Slack and Microsoft Teams, run routines and hand work to each other. It launched in beta on August 11, 2026, and is now out of beta. It isn't open source, and plans start at Premium, $30 a month, with Teams and Enterprise through sales. Here are eight alternatives, from the AI coworkers in Claude, ChatGPT and Microsoft 365 to open-source projects on GitHub, with license, price and who each one suits.",
    cta: "Get started",
    secondary: "See the comparison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot alternatives at a glance",
      text: [
        "Facts from each product's site, docs and pricing page, checked November 13, 2026. Prices in USD. Grok Bot: Premium $30, Super $100 and Ultra $200 a month, billed monthly, with weekly usage included and extra usage billed on token cost. More in our [Grok Bot guide](/personal-agent/grok-bot).",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Anthropic's agent for non-coding work in the Claude apps: research, documents, spreadsheets and slides",
          "No",
          "Paid Claude plans, from Pro at $20 a month ($17 a month billed annually); not on Free",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "An agent in Microsoft 365 Copilot for multi-step tasks across Outlook, Teams, Word, Excel, PowerPoint, OneDrive and SharePoint",
          "No",
          "Microsoft 365 Copilot license plus Copilot Credits at $0.01 each, pay as you go, billed monthly",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "A Work mode in ChatGPT for tasks that end in something to review, such as decks, spreadsheets and analyses",
          "No",
          "Limited on Free ($0) and Go ($8 a month) in the desktop app; full from Plus at $20 a month",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "A hosted assistant for inbox, calendar, meetings and follow-ups, shared with your team in Slack",
          "No",
          "Free: $50 in credits for 7 days; $29.99 a month per active user for 3,000 credits",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "CopilotKit's self-hostable workspace for AI coworkers, where each Bot gets its own browser, files and tools",
          "Yes (MIT app template; uses the separately licensed CopilotKit Intelligence)",
          "Free for personal projects; Business up to $29 per active user a month",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "A desktop app, “An AI coworker for your everyday work,” that runs on your machine with approvals and an audit trail",
          "Yes (MIT)",
          "No price listed; your own model key or a local model",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "Nous Research's personal agent, with Bots that have their own models and routines and message each other",
          "Yes (MIT)",
          "Agent free, plus your model provider; optional Nous Portal Plus $20 a month",
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
      id: "big-vendors",
      title: "AI coworkers from Anthropic, Microsoft and OpenAI",
      text: [
        "Hosted, like Grok Bot, and included with plans many teams already have. All three are compared in [AI coworker tools](/blog/ai-coworker).",
      ],
      points: [
        "Claude Cowork: Anthropic's agent for knowledge work. You describe an outcome and it works through research, documents, spreadsheets and slides in your files, connected apps and a browser. Tasks run in Anthropic's cloud and keep going with your laptop closed, and scheduled tasks run hourly, daily, weekly or on weekdays. Choose it if you already pay for Claude and want multi-step work returned as files. See [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) and [Claude Cowork alternatives](/alternatives/claude-cowork).",
        "Copilot Cowork: an agent in Microsoft 365 Copilot that sends email, schedules meetings, edits Word, Excel and PowerPoint files and posts in Teams, with an approval dialog before sensitive actions. Its model picker includes GPT, Claude and Grok models, depending on tenant settings. Choose it if your work lives in Outlook, Teams, OneDrive and SharePoint. Guide: [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work: a Work mode in ChatGPT that plans a task, uses your files, plugins, the web, a browser and code, and returns something to review. It shares usage limits with Codex; Plus ($20 a month) and Pro (from $100 a month) get it on desktop, web and mobile. Choose it if a task has a clear outcome and several sources or steps. Guide: [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "A hosted assistant for office work",
      points: [
        "Lindy: one shared assistant rather than several Bots. It handles inbox, calendar, meetings, research and follow-ups, and you use it from Slack, email, iMessage, phone calls and a Chrome extension in Gmail. Anything with outside impact, such as sending an email, waits for your approval, and Routines run on a schedule or an event. Every active user takes a paid seat, including people who only @mention it in Slack. Choose it if your team wants an assistant it can @mention in Slack for reports, research and CRM updates. Guide: [Lindy](/personal-agent/lindy); more in [Lindy alternatives](/alternatives/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-source Grok Bot alternatives on GitHub",
      text: ["You run these yourself and bring your own model keys. Star counts are from GitHub on November 13, 2026."],
      points: [
        "OpenBot (`github.com/CopilotKit/OpenBot`, 11,652 stars): like Grok Bot, each Bot gets a computer of its own, with a browser, files and tools, plus routines, approvals and an activity log. It runs as a desktop app for Mac and Windows or on Kubernetes for a team, and connects your own agents through AG-UI. Choose it if you want AI coworkers you can self-host and customize under MIT. See [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "OpenWorker (`github.com/andrewyng/openworker`, 19,050 stars): a desktop app in open beta for macOS and Windows. Actions are approval-gated by default, every tool call is recorded, scheduled tasks cover things like morning briefs and weekly reports, and you can mention it in Slack and get the reply in the thread. Choose it if you want an agent on your own machine, including with a local model. Guide: [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent (`github.com/NousResearch/hermes-agent`, 262,923 stars): Nous Research's personal agent. Its Bot Mode turns profiles into named Bots, each with its own chat, role, model, memory, skills and avatar, and they message each other directly. It answers in Telegram, Discord, Slack, WhatsApp, Signal and email. Choose it if you want several specialist Bots on your own machine or server. See [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Grok Bot alternative",
      steps: [
        {
          title: "Start from what you already pay for",
          text: "A paid Claude plan includes Claude Cowork; ChatGPT plans include Work (limited on Free and Go); Copilot Cowork needs a Microsoft 365 Copilot license plus Copilot Credits.",
        },
        {
          title: "Decide where it runs",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work and Lindy run in the vendor's cloud. OpenWorker runs on your machine, OpenBot on your laptop or Kubernetes, and Hermes Agent on your machine or a server.",
        },
        {
          title: "Check where your team talks",
          text: "Grok Bot works in Slack, Microsoft Teams and calls. In Slack you can also use Lindy, OpenWorker, Hermes Agent, and connectors or plugins in Claude Cowork and ChatGPT Work. Copilot Cowork works in Outlook and Teams.",
        },
        {
          title: "Look at how it asks before acting",
          text: "Grok Bot checks in when approval is needed and can send sensitive actions through Auto Review. Lindy waits for approval on anything with outside impact, OpenWorker gates actions by default, Claude Cowork has Manual and Auto modes, and Copilot Cowork shows an approval dialog.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "What people on Hacker News say about Grok Bot alternatives",
      text: [
        "On November 13, 2026, we read 7 Hacker News threads that discuss Grok Bot, from August to November 2026, one page at a time. Reddit threads could only be found through search results, so we list them by title and don't summarize them; this is a sample of public discussion, not a survey.",
      ],
      points: [
        "Complaints about usage limits came up in 3 of the threads we read ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50345698), [November 2026](https://news.ycombinator.com/item?id=50366117)). Users say Bots that run all the time use up the weekly allowance fast, and the November threads discuss Grok Bot's lower limits.",
        "Open-source agents you run yourself came up in 2 of the threads we read ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)). Users named [Hermes Agent](/alternatives/hermes-agent) in both and OpenClaw in the August one; in that thread they describe both as more configurable than a hosted bot, and some say OpenClaw needs frequent fixing. See [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) and [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        "Building your own setup came up in 2 of the threads we read ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)): a coding agent such as Claude Code or Codex plus a few scripts, or models through OpenRouter. Users there say a setup like this covers most of the job for much less money. See [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Doubts about what Grok Bot adds came up in 2 of the threads we read ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)). Some users say they can't think of a task they would hand it, and others see it as a hosted version of open-source agents like OpenClaw, with a browser added.",
        "On Reddit, threads titled [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot) and [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor) came up in search results. We list the titles only; we haven't read these threads.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Bots for your apps. AI employees for your codebase.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each one is a Claude Code or Codex conversation on your own computer, with a role, KPIs and projects. It wakes on a heartbeat during its working hours, takes issues from a shared board, and when it needs a review or permission it sets the issue to Needs action and asks there. It has no built-in Slack, GitHub or Linear integration: agents use the tools and logins on their own computer.",
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
    title: "Want AI teammates for your codebase?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Grok Bot alternatives FAQ",
    items: [
      {
        q: "Is there an open-source Grok Bot alternative?",
        a: "Yes. OpenBot's app template is MIT (it uses CopilotKit Intelligence, which is licensed separately), and OpenWorker and Hermes Agent are MIT. Crewmark is open source under GPL-3.0. Grok Bot itself isn't open source.",
      },
      {
        q: "Is there a free alternative to Grok Bot?",
        a: "OpenBot is free for personal projects; OpenWorker lists no price and runs with your own model key or a local model; Hermes Agent is free, plus your model provider. ChatGPT Work has limited access on the Free plan in the desktop app, Lindy's Free plan gives $50 in credits for 7 days, and Crewmark is free for 1 project with up to 3 AI employees. Claude Cowork isn't on Claude's Free plan.",
      },
      {
        q: "Which Grok Bot alternatives are on GitHub?",
        a: "OpenBot (`github.com/CopilotKit/OpenBot`, 11,652 stars), OpenWorker (`github.com/andrewyng/openworker`, 19,050 stars), Hermes Agent (`github.com/NousResearch/hermes-agent`, 262,923 stars) and Crewmark (`github.com/ummydev/crewmark-ai`). Star counts are from November 13, 2026.",
      },
      {
        q: "Is Claude an alternative to Grok Bot?",
        a: "Claude Cowork, in the Claude apps, is Anthropic's agent for knowledge work: it runs tasks in Anthropic's cloud and on a schedule, and comes with paid Claude plans from Pro at $20 a month. For code, Claude Code is Anthropic's coding agent. See [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) and [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      },
      {
        q: "How much does Grok Bot cost?",
        a: "Premium is $30 a month, Super $100 a month (3.5x Premium usage) and Ultra $200 a month (12x Premium usage), billed monthly. Weekly Grok Bot usage is included, and extra usage is billed on token cost. Teams and Enterprise are through sales.",
      },
      {
        q: "Which Grok Bot alternatives work in Slack?",
        a: "Lindy works as a teammate in Slack; OpenWorker answers when you mention it in a Slack thread; Hermes Agent connects to Slack through its gateway; Claude Cowork and ChatGPT Work connect to Slack as a connector or plugin; OpenBot lists Slack among its frontends, some in early access.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents a job, not just a chat.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Facts checked on November 13, 2026 against each product's site, documentation and pricing page.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by xAI or any other company named on this page. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
