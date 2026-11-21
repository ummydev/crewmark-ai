import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/ai-coworker, MC-431: Alex decided on 2026-11-13 to build an "AI coworker" list page (the CMO relayed it).
// Keywords from Google autocomplete (2026-11-13): "ai coworker" (claude, andrew ng, github, free, microsoft), "ai
// coworkers", "best ai coworker", "claude cowork" (pricing, vs claude code, vs chatgpt work), "copilot cowork" (cost,
// vs claude cowork, licensing), "chatgpt work" (vs codex, cost). Every product fact comes from
// docs/compare/facts/<slug>.md (claude-cowork, copilot-cowork, chatgpt-work, gemini-spark, meta-muse, grok-bot,
// openworker, openbot, suparagent, ai-employees, lindy, crewmark), checked against the vendor's own pages on
// 2026-11-13 with a source per fact; what we couldn't confirm is left out or said to be not stated. No rankings.

export const aiCoworker: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "AI Coworker Tools Compared: Claude Cowork, Copilot, ChatGPT Work",
      description:
        "AI coworkers compared: Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot and open-source picks like Andrew Ng's OpenWorker.",
    },
    breadcrumb: "AI coworker tools",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-13" },
    hero: {
      kicker: "Blog · AI coworkers",
      title: "AI coworker tools compared: what each one does, costs and asks before acting",
      lead: "An AI coworker is an agent you hand a whole task to. It works in your files, apps and browser, keeps going in the background, and checks with you before anything risky. In 2026 Anthropic, Microsoft, OpenAI, Google, Meta and xAI each ship one, and there are open-source ones on GitHub, including Andrew Ng's OpenWorker. Here is what each does, who can get it, what it costs and where it runs, from each vendor's own pages.",
      cta: "Get started",
      secondary: "See the table",
      secondaryHref: "#at-a-glance",
    },
    sections: [
      {
        kind: "text",
        id: "what-is",
        title: "What is an AI coworker?",
        text: [
          "A chatbot answers. An AI coworker takes a task with a clear outcome, such as a report, a deck, a filled-in spreadsheet or a cleared inbox, and works through the steps itself. The products differ a lot, but they share four things:",
        ],
        points: [
          "It works where your work is: files, email, calendar, connected apps and a browser.",
          "It keeps going without you: in a cloud computer, or on your own machine while an app stays open.",
          "It can repeat: most run tasks on a schedule or when something happens, such as a new email.",
          "It asks first: sending, publishing, buying and deleting wait for your approval.",
        ],
      },
      {
        kind: "table",
        id: "at-a-glance",
        title: "AI coworker tools at a glance",
        text: [
          "Facts from each vendor's site, pricing page, docs or GitHub, checked on November 13, 2026. Prices in USD. Not a ranking.",
        ],
        headers: ["AI coworker", "Made by", "Who can get it", "Price from", "Runs where"],
        rows: [
          ["Claude Cowork", "Anthropic", "Paid Claude plans, not Free", "Claude Pro, $20/month", "Anthropic's cloud; local files and browser through the desktop app"],
          ["Copilot Cowork", "Microsoft", "Work or school accounts with a Microsoft 365 Copilot license; personal accounts in preview", "Copilot Credits at $0.01 each, on top of the license", "Microsoft's cloud, with your OneDrive and SharePoint files"],
          ["ChatGPT Work", "OpenAI", "ChatGPT plans; limited on Free and Go, in the desktop app", "Full access from ChatGPT Plus, $20/month", "OpenAI's cloud, or your computer through the desktop app"],
          ["Gemini tasks (formerly Spark)", "Google", "Google AI Pro or Ultra, adults with a personal account; not in the EEA, Switzerland, the UK or Nigeria", "Google AI Pro, $19.99/month (US)", "Google's cloud"],
          ["Meta Muse", "Meta", "US and Canada, 18+; Singapore since October 27", "Free for most use; subscriptions available", "A cloud computer per user"],
          ["Grok Bot", "xAI", "Premium, Super, Ultra, Teams and Enterprise plans", "Premium, $30/month", "A cloud computer per Bot; Slack, Teams and calls"],
          ["Lindy", "Lindy", "Anyone; free trial", "$29.99/month per active user", "Lindy's cloud; Slack, email, iMessage, phone"],
          ["OpenWorker (open source)", "Andrew Ng", "Anyone; desktop app in open beta", "Free; your own model key or a local model", "Your computer (macOS, Windows)"],
          ["OpenBot (open source)", "CopilotKit", "Anyone", "Free for personal projects; Business up to $29/user/month", "Your laptop or your Kubernetes cluster"],
          ["Suparagent (open source)", "Anil-matcha on GitHub", "Anyone", "Free to self-host; hosted from $15/month", "Desktop app, your server, or hosted"],
          ["Crewmark", "Crewmark", "Anyone", "Free: 1 project, up to 3 AI employees", "Your computer, inside your Claude Code or Codex"],
        ],
      },
      {
        kind: "text",
        id: "guides",
        title: "Guides to each AI coworker",
        points: [
          "[Claude Cowork](/personal-agent/claude-cowork): plans, setup, approval modes and Cowork vs Claude Code.",
          "[Copilot Cowork](/personal-agent/copilot-cowork): licensing, Copilot Credits and setup in Microsoft 365.",
          "[ChatGPT Work](/personal-agent/chatgpt-work): what the Work mode does, which plans include it and how it relates to Codex.",
          "[Cursor Projects](/personal-agent/cursor-projects): Cursor's coordinator agent for larger coding work.",
          "[Lindy](/personal-agent/lindy): pricing in credits and how to set it up.",
          "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot) and [Suparagent](/personal-agent/suparagent): the open-source ones, with setup from GitHub.",
          "Side by side: [all comparisons](/compare), such as [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) and [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio).",
        ],
      },
      {
        kind: "text",
        id: "big-labs",
        title: "The AI coworkers from the big labs",
        points: [
          "Claude Cowork (Anthropic): non-coding work in the Claude apps, such as research, documents, spreadsheets, slides and file work. Tasks run in the cloud and keep going with your laptop closed; you can schedule them hourly, daily or weekly with `/schedule`. It asks before acting in Manual mode, or runs a safety review on each action in Auto mode. Paid plans only, from Pro at $20 a month.",
          "Copilot Cowork (Microsoft): multi-step tasks across Microsoft 365, sending email, scheduling meetings, editing Word, Excel and PowerPoint files and posting in Teams. It shows an approval dialog before sensitive actions, runs scheduled and event-triggered tasks, and lets you pick GPT, Claude or Grok models depending on tenant settings. It needs a Microsoft 365 Copilot license plus usage in Copilot Credits.",
          "ChatGPT Work (OpenAI): a Work mode in ChatGPT for tasks that end in something to review, such as decks, spreadsheets and analyses. It shares core abilities and usage with Codex. Free and Go get limited access in the desktop app; Plus ($20 a month) and up get it on desktop, web and mobile, with scheduled tasks and event triggers.",
          "Gemini tasks (Google, formerly Spark): a cloud agent in the Gemini app that uses Gmail, Docs and other Google apps, runs on a schedule or when something happens, and always asks before sending, deleting, buying or submitting forms. Google's help page lists Google AI Pro or Ultra.",
          "Meta Muse: a personal agent on Meta's Muse Spark model, with its own cloud computer per user. It works on a schedule and in response to events, and nothing publishes, sends or spends without your approval. Meta calls it free for most of what people need, with subscriptions for more.",
          "Grok Bot (xAI): Bots with their own cloud computer that sign in to your tools, work in Slack, Microsoft Teams and video calls, run routines and hand work to each other. Included in xAI's Premium ($30 a month), Super and Ultra plans. See [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        ],
      },
      {
        kind: "text",
        id: "github",
        title: "Open-source AI coworkers on GitHub",
        text: [
          "If you'd rather run your AI coworker yourself, with your own model keys or a local model, these are open source:",
        ],
        points: [
          "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, about 19,000 stars): Andrew Ng's \"AI coworker for your everyday work\", a desktop app for macOS and Windows in open beta. It runs on your machine with OpenAI, Anthropic, Gemini or local models, gates actions behind approvals and can schedule briefs and reports.",
          "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, about 11,600 stars): CopilotKit's self-hostable workspace for AI coworkers, each with its own browser, files and tools. It uses CopilotKit Intelligence, licensed separately. See [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
          "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, about 7,000 stars): \"a workspace for AI coworkers\" that runs named agents with routines and approvals on engines you already use, such as Claude Code, Codex or Gemini CLI.",
          "[ai-employees](https://github.com/markfulton/ai-employees) (MIT): eight business roles as folders of scheduled routines that run on the agent you already use.",
        ],
      },
      {
        kind: "text",
        id: "coding",
        title: "An AI coworker for code: Cursor Projects",
        text: ["Most of the coworkers above handle documents, email and research. For software work, Cursor added Projects:"],
        points: [
          "A coordinator agent plans a larger piece of work, such as a feature, a migration or a full app, delegates it to agents running in parallel on Cursor's Cloud Agents, and brings the finished work back for you to check.",
          "Each Project runs on its own cloud computer, so closing your laptop doesn't stop it, and keeps shared notes, preferences and a task board that every agent reads.",
          "It can watch a Slack channel, run on a schedule or follow your pull requests. In Multiplayer Projects each team member has a coordinator, and coordinators message each other.",
          "It's on Cursor plans with Cloud Agents, from Premium at $30 a month, not on Free or Plus. See the [Cursor Projects guide](/personal-agent/cursor-projects) and [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot).",
        ],
      },
      {
        kind: "text",
        id: "free",
        title: "Is there a free AI coworker?",
        points: [
          "Meta Muse: free for most of what people need, per Meta.",
          "ChatGPT Work: limited access on ChatGPT Free, in the desktop app.",
          "Open source: OpenWorker, OpenBot (personal projects) and Suparagent cost nothing to run; you pay your model provider or use a local model.",
          "Lindy: a free trial with $50 in credits for 7 days.",
          "Crewmark: free for 1 project and up to 3 AI employees, on the Claude Code or Codex subscription you already have.",
          "Claude Cowork, Gemini tasks, Copilot Cowork and Grok Bot need a paid plan or license.",
        ],
      },
      {
        kind: "steps",
        id: "how-to-choose",
        title: "How to choose an AI coworker",
        steps: [
          { title: "Start from where your work lives", text: "Microsoft 365 at work points to Copilot Cowork; Gmail and Google Docs to Gemini; if you already pay for Claude or ChatGPT, Cowork or Work comes with the plan." },
          { title: "Decide where it should run", text: "Cloud coworkers keep going when your laptop is closed. Open-source ones keep your data, keys and files on your machine." },
          { title: "Check how it asks", text: "Look for approvals before sending, posting and spending, and for a log of what it did." },
          { title: "Try one recurring task for two weeks", text: "A weekly report or a daily inbox sweep shows quickly whether it saves time." },
        ],
      },
      {
        kind: "text",
        id: "coworker-vs-employee",
        title: "AI coworker vs AI employee",
        text: [
          "The names overlap. In practice an AI coworker is something you hand tasks to as they come up, while an AI employee has a standing role: a job description, goals, working hours and a queue of work it takes on its own. Platforms built around that second idea are compared in [the best AI employee platforms](/blog/best-ai-employee-platforms).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give your coding agent a standing job",
        text: [
          "Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat. Each one takes the next issue from a shared board, and asks you on the issue when it needs a decision.",
        ],
        steps: [
          { title: "Pick a role", text: "From the [AI employee roles](/ai-employees), such as an [AI SEO specialist](/ai-employees/seo-specialist)." },
          { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
          { title: "See what it can do", text: "Jobs with setup for each agent are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex)." },
        ],
      },
    ],
    howTo: { section: "how-to-choose", name: "Choose an AI coworker" },
    mid: {
      title: "Want an AI coworker with a standing job?",
      text: "Crewmark gives your Claude Code or Codex agent a role, a heartbeat and a shared board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is an AI coworker?",
          a: "An agent you hand a whole task to. It works in your files, apps and browser, keeps going in the background, can repeat tasks on a schedule, and asks before sending, publishing, buying or deleting.",
        },
        {
          q: "What is Andrew Ng's AI coworker?",
          a: "OpenWorker: an open-source desktop app for macOS and Windows, MIT-licensed, at github.com/andrewyng/openworker. Its README calls it \"an AI coworker for your everyday work\". It runs on your machine with your own model key or a local model.",
        },
        {
          q: "Is Claude Cowork free?",
          a: "No. Claude Cowork is on paid Claude plans only, from Pro at $20 a month (or $17 a month billed annually). Claude Free doesn't include it.",
        },
        {
          q: "How much does Copilot Cowork cost?",
          a: "It needs a Microsoft 365 Copilot license, and its usage is billed in Copilot Credits: $0.01 per credit pay-as-you-go, or a prepaid one-year plan with discounts from 5% to 20%.",
        },
        {
          q: "Claude Cowork vs Claude Code: what's the difference?",
          a: "Claude Cowork is for non-coding work in the Claude apps: research, documents, spreadsheets, slides and files. Claude Code is Anthropic's coding agent for your repository. Anthropic says Cowork uses the same architecture as Claude Code.",
        },
        {
          q: "Are there open-source AI coworkers on GitHub?",
          a: "Yes: OpenWorker (Andrew Ng, MIT), OpenBot (CopilotKit, MIT), Suparagent (Apache-2.0) and ai-employees (MIT), among others.",
        },
      ],
    },
    cta: {
      title: "Give your AI a job, not just a task.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Facts checked against each vendor's own site, pricing page, docs or GitHub on November 13, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by any company named on this page. Product names are trademarks of their owners.",
  },
};
