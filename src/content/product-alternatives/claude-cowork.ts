import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/claude-cowork, MC-439. For "claude cowork alternatives" (free, reddit, open source, for windows,
// openai) (Google autocomplete, 2026-11-13). Every fact comes from docs/compare/facts/<cards>.md (claude-cowork,
// chatgpt-work, copilot-cowork, gemini-spark, grok-bot, lindy, openworker, openbot, suparagent, crewmark; checked
// 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used. Platforms are only the ones the
// cards state, so Grok Bot isn't listed for Windows and Suparagent's hosted plan prices are left out.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork Alternatives in 2026: Free and Open Source",
    description:
      "Claude Cowork alternatives compared: ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy and open-source OpenWorker, OpenBot and Suparagent, with prices.",
  },
  breadcrumb: "Claude Cowork alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Claude Cowork",
    title: "Claude Cowork alternatives: AI coworkers from OpenAI, Microsoft, Google and xAI, plus open-source picks",
    lead: "Claude Cowork is Anthropic's agent for non-coding work in the Claude apps: you describe an outcome and it works through research, documents, spreadsheets and slides in your files, apps and a browser. It comes only with paid Claude plans, from $20 a month, and Anthropic says it uses plan limits faster than chat. It runs on Claude models, and on Pro, Max and Ultra new tasks have run in Anthropic's cloud since October 6, 2026, with no setting to switch back. This page compares the alternatives from OpenAI, Microsoft, Google and xAI, a hosted assistant, open-source apps you run yourself, and Crewmark, with what each costs.",
    cta: "Get started",
    secondary: "Compare them",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Cowork alternatives at a glance",
      text: [
        "Facts from each vendor's own pages, docs or GitHub, checked November 13, 2026. Prices in USD. Not a ranking.",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (for reference)",
          "Anthropic's agent for non-coding knowledge work in the Claude apps",
          "No",
          "Claude Pro $20/month, or $17/month billed annually; not on Free",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI's Work mode in ChatGPT, for tasks that end in something to review",
          "No",
          "Free ($0) and Go ($8/month): limited, desktop app only; Plus $20/month",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft's agent for multi-step tasks across Microsoft 365",
          "No",
          "Microsoft 365 Copilot license plus Copilot Credits at $0.01 each",
        ],
        [
          "[Gemini tasks (formerly Spark)](/personal-agent/gemini-spark)",
          "Google's background agent in the Gemini app, using Gmail, Docs and other Google apps",
          "No",
          "Google AI Pro $19.99/month (US); no free-plan access",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "xAI's hosted AI teammates, each with its own cloud computer",
          "No",
          "Premium $30/month",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "A hosted AI assistant for inbox, calendar, meetings and Slack, billed in credits",
          "No",
          "Free: $50 in credits for 7 days; then from $29.99/month per active user",
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
          "[Suparagent](/personal-agent/suparagent)",
          "A workspace for AI coworkers on Claude Code, Codex, Gemini CLI, Cursor and other engines",
          "Yes, Apache-2.0",
          "Desktop and self-hosted: no fee stated; you pay your model provider",
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
      title: "Hosted alternatives from OpenAI, Microsoft, Google and xAI",
      text: [
        "These four work much like Claude Cowork: you hand off a task in the vendor's app and it runs in the vendor's cloud. Side by side: [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): a Work mode in ChatGPT that plans a task, uses your files, plugins, the web, a browser and code, and returns decks, spreadsheets, documents or analyses. It shares usage limits with Codex. Free and Go get limited Work access in the desktop app; Plus ($20/month) and Pro (from $100/month) get it on desktop, web and mobile. Choose it if you want the OpenAI alternative to Claude Cowork, or a free way to try an AI coworker.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): carries out multi-step tasks across Outlook, Teams, Word, Excel, PowerPoint, OneDrive and SharePoint, and shows an approval dialog before sensitive actions. It needs a Microsoft 365 Copilot license, and usage is billed in Copilot Credits at $0.01 each, pay as you go. It can't reach files on your local device. Choose it if your work lives in Microsoft 365 and your admins want credit limits per user or group.",
        "[Gemini tasks](/personal-agent/gemini-spark) (Google, called Spark during its beta): a cloud agent in the Gemini app that uses Gmail, Docs, Drive and other Google apps and runs on a schedule or when something happens. Google's help article says it needs Google AI Pro ($19.99/month in the US) or Ultra (from $99.99/month). It works with personal Google Accounts only and isn't available in the EEA, Switzerland, the UK or Nigeria. Choose it if your work is in Gmail and Google's other apps.",
        "[Grok Bot](/alternatives/grok-bot) (xAI): hosted Bots that each get their own cloud computer, sign in to your tools, work in Slack and Microsoft Teams, run routines and message each other. It's included in Premium ($30/month), Super ($100/month) and Ultra ($200/month), billed monthly, with extra usage billed on token cost. Choose it if you want several Bots with separate jobs working inside Slack, Teams and meetings.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "A hosted assistant billed in credits: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): one hosted assistant that handles inbox, calendar, meetings, research, reports and follow-ups, used through Slack, email, iMessage, SMS, phone calls and a Chrome extension in Gmail. Routines run on a schedule or an event, and anything with outside impact waits for your approval. It starts with $50 in free credits that last 7 days; after that every active user is billed, from $29.99/month for 3,000 credits. Choose it if you want an executive assistant you can text or @mention in Slack. More in our [Lindy guide](/personal-agent/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-source Claude Cowork alternatives",
      text: [
        "These three run on your own computer or server. For personal use none of them lists a fee: you pay your model provider, or run a local model where it's supported.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): an MIT-licensed AI coworker desktop app, in open beta. The agent loop, conversations, connector tokens and model keys stay on your machine. You bring a key for OpenAI, Anthropic, Google Gemini or OpenRouter, or run a local model through Ollama, LM Studio, llama.cpp or vLLM. Actions need approval by default, and scheduled runs never approve their own actions: their requests wait in an inbox. It runs on macOS 12+ (Apple silicon) and Windows 10/11 x64; the Windows build isn't code-signed yet. Choose it if you want a local, open-source Claude Cowork alternative on Windows or Mac.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): a self-hostable workspace where each Bot gets its own browser, files and tools, with approvals before actions, routines and an activity log. It runs as a desktop app for Mac and Windows (with a Docker backend) or on Kubernetes for a team. The app template is MIT; it uses CopilotKit Intelligence, which is licensed separately and needs a license for production on Kubernetes. Free for personal projects; OpenBot for Business is up to $29 per active user a month. Choose it if you want to self-host AI coworkers and bring your own models or agents. See [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](/personal-agent/suparagent): an Apache-2.0 workspace for named AI coworkers, each with a role, workspace, memory, routines and approval settings, running on an engine you already use, such as Claude Code, Codex, Gemini CLI or Cursor. It has a task board and calendar, and a lead agent can hand work to specialists. It runs as a desktop app or a self-hosted Linux server; a hosted service at suparagent.ai is a separate product. The project describes itself as early and changing. Choose it if you want coworkers with roles on the agent you already pay for.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Claude Cowork alternative",
      steps: [
        {
          title: "Start from where your work lives",
          text: "Microsoft 365 points to Copilot Cowork, Gmail and Google Docs to Gemini tasks, ChatGPT to ChatGPT Work, and Slack or iMessage to Lindy or Grok Bot.",
        },
        {
          title: "Decide what you'll pay",
          text: "Free options: ChatGPT Work on ChatGPT Free (limited, desktop app only), Lindy's 7-day credits, OpenWorker, OpenBot and Suparagent with your own model key, and Crewmark's Free plan. Copilot Cowork bills per Copilot Credit on top of a license; Gemini tasks, Grok Bot and paid ChatGPT plans are monthly subscriptions.",
        },
        {
          title: "Choose the vendor's cloud or your own computer",
          text: "ChatGPT Work, Copilot Cowork, Gemini tasks, Grok Bot and Lindy run in the vendor's cloud. OpenWorker keeps conversations and keys on your machine; OpenBot and Suparagent can also run on your own server.",
        },
        {
          title: "Check the platform",
          text: "On Windows: Copilot Cowork and ChatGPT Work have Windows desktop apps, OpenWorker ships a Windows 10/11 build, and OpenBot's desktop app runs on Windows. Gemini tasks is on the web, a Mac app and mobile; Grok Bot lists apps for macOS (Apple silicon) and iOS.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "What people on Hacker News say about Claude Cowork alternatives",
      text: [
        "On November 13, 2026, we read 5 Hacker News threads that discuss Claude Cowork, from January to November 2026, one page at a time. Reddit threads could only be found through search results, so we list them by title and don't summarize them; this is a sample of public discussion, not a survey.",
      ],
      points: [
        "Preferring a different mode to Cowork's agent mode came up in 2 of the threads we read ([January 2026](https://news.ycombinator.com/item?id=46593022), [September 2026](https://news.ycombinator.com/item?id=49729412)). In the January thread, users say Claude Code does the same job with more control for people at ease in a terminal; see [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code). In the September thread, users say plain chat gives them better answers than an agent mode for strategy and research questions.",
        "On Reddit, threads titled [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding) and [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM) came up in search results. We list the titles only; we haven't read these threads.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Crewmark: a team of AI employees on the Claude Code or Codex you already use",
      text: [
        "Crewmark is a different kind of tool from Claude Cowork. It's an issue tracker for a team of AI employees: each one is a Claude Code or Codex conversation on your own computer with a role, goals and working hours. It wakes on a heartbeat, takes issues from a shared board and keeps their status current. It's open source (GPL-3.0) and can be self-hosted.",
        "The Free plan covers 1 project and up to 3 AI employees. Pro ($5/month) and Team ($10/month) are coming soon; billing isn't built yet, so every account can use Crewmark free until then. Agent usage is paid to your agent provider, and your computer has to stay on for heartbeats. Details on [Crewmark pricing](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Give each employee a role, goals and projects; quick picks include Software Engineer, SEO Specialist and Data Analyst. See [AI employee roles](/ai-employees).",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues, set priorities and make regular ones repeat daily, weekly or monthly. When an agent needs a review, permission or information, it sets the issue to Needs action and waits for you.",
        },
        {
          title: "Set working hours",
          text: "The heartbeat wakes each employee every 15 minutes to 24 hours during its working hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Already paying for Claude or ChatGPT?",
    text: "Crewmark turns your Claude Code or Codex into AI employees with roles, a heartbeat and a shared board. Free for up to 3 employees.",
    button: "Get started",
  },
  faq: {
    title: "Claude Cowork alternatives FAQ",
    items: [
      {
        q: "Is there a free Claude Cowork alternative?",
        a: "Yes. ChatGPT Free ($0) includes limited ChatGPT Work access in the desktop app. Lindy starts with $50 in credits that last 7 days. OpenWorker lists no price and runs on your own model key or a local model, OpenBot is free for personal projects, and Suparagent's desktop and self-hosted versions list no fee. Crewmark's Free plan covers 1 project and up to 3 AI employees. Claude Cowork itself isn't on the Claude Free plan.",
      },
      {
        q: "Is there an open-source alternative to Claude Cowork?",
        a: "OpenWorker (MIT), OpenBot (an MIT application template on the separately licensed CopilotKit Intelligence) and Suparagent (Apache-2.0) are open source, and so is Crewmark (GPL-3.0). Claude Cowork itself isn't, though Anthropic's knowledge-work-plugins repository of plugins for Cowork is open source under Apache-2.0.",
      },
      {
        q: "What is the OpenAI alternative to Claude Cowork?",
        a: "ChatGPT Work: a Work mode in ChatGPT for tasks that end in something to review, such as decks, spreadsheets and analyses. It's limited on Free and Go in the desktop app and full from Plus at $20/month, and it shares usage limits with Codex. See [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work).",
      },
      {
        q: "Which Claude Cowork alternatives run on Windows?",
        a: "Copilot Cowork (the Microsoft Copilot desktop app for Windows and macOS), ChatGPT Work (the ChatGPT desktop app for macOS, Windows and Linux), OpenWorker (Windows 10/11 x64, not yet code-signed) and OpenBot (a desktop app for Mac and Windows). Claude Cowork itself also runs on Windows through Claude Desktop.",
      },
      {
        q: "Is there a Claude Cowork alternative that runs on my own computer?",
        a: "OpenWorker runs its agent loop on your machine and keeps conversations, connector tokens and model keys there; OpenBot and Suparagent run as desktop apps or on your own server. Claude Cowork reaches local files only through Claude Desktop, and on Pro, Max and Ultra its new tasks have run in the cloud since October 6, 2026. For tasks that run only on your computer, Anthropic points to Claude Code in the desktop app ([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "Why do people look for Claude Cowork alternatives?",
        a: "The limits Anthropic states: Cowork needs a paid Claude plan (Pro from $20 a month), it uses plan limits faster than chat, sessions can't be shared with others, and on Pro, Max and Ultra new tasks run in the cloud with no setting to switch back. If your work lives in Microsoft 365 or Gmail, Copilot Cowork and Gemini tasks connect to those apps directly.",
      },
    ],
  },
  cta: {
    title: "Give your agents a job, not just a task.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against each product's own pages, docs, pricing and GitHub on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI, Microsoft, Google, xAI, Lindy, CopilotKit or the makers of OpenWorker and Suparagent. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
