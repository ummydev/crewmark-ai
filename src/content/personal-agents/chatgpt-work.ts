import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/chatgpt-work, a page per product on /blog/ai-coworker (like claude-cowork.ts). For "chatgpt work"
// (mode, download, cost, for students) and "chatgpt work vs chat / codex / claude cowork / plus" (Google autocomplete,
// 2026-11-13). Every ChatGPT Work fact comes from docs/compare/facts/chatgpt-work.md (OpenAI's docs at
// learn.chatgpt.com and chatgpt.com/pricing), checked on 2026-11-13; the Codex column comes from codex.md, and the
// Claude Cowork and Copilot Cowork columns from claude-cowork.md and copilot-cowork.md, checked the same day. The card
// doesn't confirm how much Work use each plan includes or a student price, so the page gives neither.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const chatgptWork: GuideCopy = {
  meta: {
    title: "ChatGPT Work: What the Mode Does, Cost, Download and vs Codex",
    description:
      "ChatGPT Work explained: how Work mode differs from Chat, which plans include it and what they cost, the desktop app, and Work vs Codex and Claude Cowork.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · OpenAI",
    title: "ChatGPT Work: what OpenAI's Work mode does and how to use it",
    lead: "ChatGPT Work is a mode in ChatGPT for handing off tasks with a clear outcome. You switch from Chat to Work, describe what you want back, and ChatGPT plans the task, uses your files, plugins, the web, a browser and code, and returns work to review, such as a deck, a spreadsheet, a document or an analysis. It shares its core capabilities and usage limits with Codex, OpenAI's coding agent. Here's what it does, which plans include it, how to set it up, how it asks before acting, and how it compares with Codex, Claude Cowork and Copilot Cowork.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What ChatGPT Work is",
      points: [
        "A mode, not a separate app: in ChatGPT you switch from Chat to Work. OpenAI's guidance is to use Chat for answers and Work for completed tasks.",
        "It returns reviewable work: decks, spreadsheets, documents, analyses and recurring updates, built from your files, plugins, the web, a browser and code.",
        "It runs in the cloud: on the web, tasks run in a managed cloud environment on OpenAI's infrastructure and keep going after you close the app. In the desktop app you can also choose to work locally with your files, apps and browser, when enabled.",
        "It shares its core with Codex: OpenAI describes Work as the same core capabilities with an experience designed for everyday work. It leaves out technical details such as Git and shell output and the pull request pane.",
        "It splits work up: ChatGPT can hand independent parts of a task to subagents, and you can follow their progress.",
        "It repeats work: scheduled tasks, and on web and mobile, tasks triggered by Gmail, Slack or GitHub events.",
        "OpenAI introduced it in its What's new digest for the week of July 6–10, 2026.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work cost: which plans include it",
      text: [
        "Prices from OpenAI's pricing docs on November 13, 2026, in USD. Work uses the same pricing, credits and usage limits as Codex, and longer or more complex tasks may use more credits.",
      ],
      headers: ["Plan", "Price", "ChatGPT Work"],
      rows: [
        ["Free", "$0/month", "Limited access, in the desktop app only; no scheduled tasks"],
        ["Go", "$8/month", "Limited access, in the desktop app only; scheduled tasks"],
        ["Plus", "$20/month", "Desktop, web and mobile; extra credits available to buy"],
        ["Pro", "From $100/month (plans at $100, $200 or $500)", "Desktop, web and mobile; extra credits available to buy"],
        ["Business (2+ users)", "$20/user/month billed annually, or $25 billed monthly", "Shared workspace credits on credit-based agreements"],
        ["Enterprise and Edu", "Contact sales", "Shared workspace credits; admins control access to Work, plugins and browser use"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up ChatGPT Work",
      steps: [
        {
          title: "Choose where to use it",
          text: "Work runs on the web, in the ChatGPT desktop app for macOS, Windows and Linux, and in ChatGPT for iOS and Android. On Free and Go, download the desktop app: Work is only there on those plans.",
        },
        { title: "Switch from Chat to Work", text: "Start a task in Work mode and describe the outcome you want back, such as a brief, a deck, an analysis or a spreadsheet." },
        {
          title: "Give it sources",
          text: "Upload files or use a project, and connect plugins such as Slack, Google Drive, SharePoint, email, calendars, CRMs and project trackers. In the desktop app it can also use local files, a browser extension and Computer Use on macOS and Windows, in supported regions.",
        },
        {
          title: "Pick a model and how it asks",
          text: "The guide suggests GPT-6 Astra for demanding work, GPT-6.1 Sol for complex work at lower cost and Luna for simpler tasks. In the desktop app, start with the Ask for approval permission mode.",
        },
        {
          title: "Make it repeat",
          text: "Create a scheduled task from Chat or Work on the web or in the desktop app, or on web and mobile, trigger one from a Gmail, Slack or GitHub event. One task can't combine an event trigger with a time schedule.",
        },
      ],
      source: { label: "Source: OpenAI docs, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "How ChatGPT Work keeps you in control",
      points: [
        "ChatGPT shows its progress and pauses when it needs information or approval for important actions; you can answer questions or change direction mid-task.",
        "In the desktop app, permission modes are Ask for approval (the recommended start), Approve for me (eligible requests go to automatic review) and full access where available. A sandbox sets file and network limits.",
        "By default the cloud browser asks before visiting a new website (Always ask, Auto approve or Always allow) and can ask again before consequential actions.",
        "A cloud task doesn't inherit your computer's files, apps, browser sessions or network access, and the cloud browser can't use your local tabs, extensions, history or saved passwords.",
        "Workspace admins control access to Work, plugins, browser use and network access. In Enterprise and Edu workspaces, plugins are off by default and cloud browser access needs an admin to enable it.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork and Copilot Cowork",
      text: [
        "Facts from each vendor's own docs and pricing pages, checked November 13, 2026. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker). For coding work, see [Claude Code vs Codex](/blog/claude-code-vs-codex) and [Codex use cases](/use-cases/codex); for Anthropic's agent, the [Claude Cowork guide](/personal-agent/claude-cowork).",
        "Side by side: [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). Guides: [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["Made by", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["Built for", "Tasks that end in reviewable work: decks, spreadsheets, documents, analyses", "Coding: inspects, edits and runs code in a repository", "Non-coding knowledge work", "Multi-step tasks across Microsoft 365"],
        ["Runs where", "OpenAI's cloud; locally in the desktop app when enabled", "CLI, IDE extension and ChatGPT desktop app; Codex Cloud", "Anthropic's cloud; local files through Claude Desktop", "Microsoft's cloud, with OneDrive and SharePoint"],
        ["Who can get it", "ChatGPT plans; limited on Free and Go", "ChatGPT plans, or an OpenAI API key (no cloud features)", "Paid Claude plans, Pro from $20/month", "Microsoft 365 Copilot license plus Copilot Credits"],
        ["Usage", "Shares pricing, credits and limits with Codex", "Shares pricing, credits and limits with Work", "Uses plan limits faster than chat", "Billed per use in Copilot Credits"],
        ["Repeating work", "Scheduled tasks; Gmail, Slack and GitHub events", "Scheduled tasks in the ChatGPT app and on the web", "Scheduled tasks, hourly to weekly, in the cloud", "Scheduled prompts; email, Teams and connector events"],
        ["Approvals", "Ask for approval, Approve for me or full access; a sandbox", "Ask for approval, Approve for me or full access; a sandbox", "Manual, Auto or Skip modes", "Approval dialog with a preview before sensitive actions"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Work for your documents. Crewmark for your codebase.",
      text: [
        "ChatGPT Work takes a task and hands back something to review. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board, so engineering, SEO and marketing work in a repository gets done on a schedule.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees), such as a software engineer or an SEO specialist." },
        { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Codex use cases](/use-cases/codex) and [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up ChatGPT Work" },
  mid: {
    title: "Want an AI coworker for your codebase?",
    text: "Crewmark gives your Codex or Claude Code a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "ChatGPT Work FAQ",
    items: [
      {
        q: "What is ChatGPT Work?",
        a: "A mode in ChatGPT for delegating tasks with a clear outcome. ChatGPT plans the task, uses your files, plugins, the web, a browser and code, and returns work to review, such as decks, spreadsheets, documents and analyses.",
      },
      {
        q: "ChatGPT Work vs Chat: what's the difference?",
        a: "They're two modes in the same app. OpenAI suggests Chat for answers and Work for completed tasks: Work plans multi-step tasks, keeps going in the cloud after you close the app and pauses for approval on important actions.",
      },
      {
        q: "Is ChatGPT Work free, or do I need Plus?",
        a: "Free ($0) and Go ($8 a month) get limited Work access in the desktop app only. Plus ($20 a month) and Pro (from $100 a month) get Work on desktop, web and mobile and can buy extra credits. Business is $20 per user per month billed annually; Enterprise and Edu are through sales.",
      },
      {
        q: "ChatGPT Work vs Codex: what's the difference?",
        a: "They share core capabilities, execution, pricing, credits and usage limits. Codex is OpenAI's coding agent, with a CLI, IDE extension and cloud tasks for repositories; Work is the experience for everyday work, without details such as Git and shell output or a pull request pane.",
      },
      {
        q: "Do I need to download an app for ChatGPT Work?",
        a: "Not on Plus or Pro: Work runs on the web and in ChatGPT for iOS and Android too. On Free and Go it's only in the ChatGPT desktop app, which runs on macOS, Windows and Linux. Working with local files, the browser extension and Computer Use also needs the desktop app.",
      },
      {
        q: "Can students use ChatGPT Work?",
        a: "On the Free and Go plans, Work comes with limited access in the desktop app. ChatGPT Edu workspaces use Work on shared workspace credits, with admins controlling access to Work, plugins and browser use; Edu pricing is through OpenAI's sales team.",
      },
    ],
  },
  cta: {
    title: "Hand off the documents to Work. Give your coding agents a job too.",
    text: "Crewmark turns Codex and Claude Code sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against OpenAI's ChatGPT Work and Codex documentation and pricing pages on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by OpenAI, Anthropic or Microsoft. Product names are trademarks of their owners.",
};
