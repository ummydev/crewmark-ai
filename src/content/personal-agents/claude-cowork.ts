import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/claude-cowork, MC-438 (Alex, 2026-11-13: a page per product on /blog/ai-coworker). For "claude
// cowork" (for windows, for mac, mobile, pricing, training), "claude cowork vs claude code / chat / chatgpt work /
// copilot cowork / grok bot / claude desktop / projects" (Google autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/claude-cowork.md, checked against claude.com/product/cowork, claude.com/pricing and Anthropic's
// help center (support.claude.com) on 2026-11-13, with a source per fact; usage amounts per plan aren't published, so
// the page doesn't give any.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const claudeCowork: GuideCopy = {
  meta: {
    title: "Claude Cowork: What It Is, Pricing, Setup and vs Claude Code",
    description:
      "Claude Cowork explained: Anthropic's agent for non-coding work in the Claude apps. Pricing, setup, scheduled tasks, approvals and Cowork vs Claude Code.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Anthropic",
    title: "Claude Cowork: what Anthropic's AI coworker does and how to use it",
    lead: "Claude Cowork is Anthropic's agent for knowledge work in the Claude apps. You describe an outcome, such as a research write-up, a spreadsheet, a deck or a tidy folder, and Claude plans the steps and works through them in your files, connected apps and a browser, then hands back the result. Tasks run in Anthropic's cloud and keep going with your laptop closed. Here's what it does, which plans include it, how to set it up, how it asks before acting, and how it differs from Claude Code.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Claude Cowork is",
      points: [
        "An agent for non-coding work: research, analysis, documents, spreadsheets with working formulas, slide decks and file work. Anthropic's own FAQ positions Cowork for this and Claude Code for software engineering.",
        "It runs in the cloud: sessions run in an isolated environment on Anthropic's servers and are saved to your Claude account. On Pro, Max and Ultra, new tasks have run in the cloud since October 6, 2026.",
        "It reaches your own computer through Claude Desktop: local files, local connectors, browser use and computer use need the desktop app open on that machine.",
        "It repeats work: scheduled tasks run hourly, daily, weekly or on weekdays, each as its own session in the cloud.",
        "It's part of Claude: since September 2026 Cowork has been merging into ordinary Claude conversations.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude Cowork pricing: which plans include it",
      text: [
        "Prices from claude.com/pricing on November 13, 2026, in USD, excluding tax. Anthropic doesn't publish how much Cowork use each plan includes; its Pro card notes that Cowork uses limits faster than chat.",
      ],
      headers: ["Plan", "Price", "Claude Cowork"],
      rows: [
        ["Free", "$0", "Not included"],
        ["Pro", "$20/month, or $17/month billed annually ($200 a year)", "Included"],
        ["Max", "$100/month", "Included"],
        ["Ultra", "$200/month", "Included"],
        ["Team (2 to 150 people)", "Standard seat $20/month billed annually or $25 monthly; Premium seat $100 or $125", "Included; web and mobile in beta"],
        ["Enterprise", "$20/seat/month billed annually, 20-seat minimum, plus usage at API rates", "Included; cloud sessions, web and mobile off until an owner turns them on"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Claude Cowork",
      steps: [
        { title: "Get a paid Claude plan", text: "Pro, Max, Ultra, Team or Enterprise. On Enterprise, an owner may need to turn Cowork on." },
        { title: "Install Claude Desktop if you want local work", text: "Cowork runs on the web and on iOS and Android too, but local files, browser use and computer use need Claude Desktop for macOS or Windows (Linux is in beta)." },
        { title: "Describe the outcome, not the steps", text: "Say what you want back and where the inputs are: files, a connected app such as Google Drive, Gmail, Microsoft 365 or Slack, or the web." },
        { title: "Choose how it asks", text: "Pick Manual to approve each action, or Auto to let a safety review approve routine ones. You can also set each connector tool to always allow, need approval or blocked." },
        { title: "Make it a schedule", text: "Type `/schedule` in a task, or use the Scheduled page, and pick hourly, daily, weekly, weekdays or on demand." },
      ],
      source: { label: "Source: Anthropic help center, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "How Claude Cowork keeps you in control",
      points: [
        "Three approval modes: Manual asks before actions; Auto runs a safety review on each action and blocks unsafe ones, going back to asking if it keeps hitting blocks; Skip doesn't ask. Auto is the default on Pro, Max, Ultra and Team, Manual on Enterprise.",
        "It asks before permanently deleting files, and computer use asks before each application.",
        "Team and Enterprise admins can turn off Auto and require approval for each write-capable connector tool.",
        "You can steer or stop a task mid-run from the desktop app, the web or your phone.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work and Copilot Cowork",
      text: [
        "Facts from each vendor's own pages, checked November 13, 2026. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker).",
        "Side by side: [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). Guides: [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["Made by", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["Built for", "Non-coding knowledge work", "Software engineering", "Tasks that end in something to review", "Work across Microsoft 365"],
        ["Runs where", "Anthropic's cloud; local through Claude Desktop", "Your machine by default; cloud sessions on the web", "OpenAI's cloud, or your computer through the desktop app", "Microsoft's cloud, with OneDrive and SharePoint"],
        ["Who can get it", "Paid Claude plans", "Paid Claude plans", "ChatGPT plans; limited on Free and Go", "Microsoft 365 Copilot license plus Copilot Credits"],
        ["Schedules", "Hourly to weekly, in the cloud", "Cloud and desktop scheduled tasks, `/loop`", "Scheduled tasks and event triggers", "Scheduled prompts and event-triggered tasks"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Cowork for your documents. Crewmark for your codebase.",
      text: [
        "Claude Cowork handles knowledge work you hand it. Crewmark turns your own Claude Code or Codex into an AI employee with a role, goals in numbers, working hours and a heartbeat, so engineering, SEO and marketing work in a repository gets done on a schedule and tracked on a board.",
      ],
      steps: [
        { title: "Pick a role", text: "From the [AI employee roles](/ai-employees), such as an [AI SEO specialist](/ai-employees/seo-specialist)." },
        { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Claude Cowork" },
  mid: {
    title: "Want an AI coworker for your codebase?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Claude Cowork FAQ",
    items: [
      {
        q: "What is Claude Cowork?",
        a: "Anthropic's agent for non-coding knowledge work in the Claude apps. You describe an outcome and it carries out the steps in your files, connected apps and a browser, then returns finished files such as documents, spreadsheets and decks.",
      },
      {
        q: "How much does Claude Cowork cost?",
        a: "It comes with paid Claude plans: Pro at $20 a month (or $17 a month billed annually), Max at $100, Ultra at $200, and Team and Enterprise seats. Claude Free doesn't include it.",
      },
      {
        q: "Claude Cowork vs Claude Code: what's the difference?",
        a: "Cowork is for knowledge work such as research, documents and spreadsheets, in the Claude apps; Claude Code is Anthropic's agent for software engineering in your repository. Anthropic says Cowork uses the same architecture as Claude Code.",
      },
      {
        q: "Is Claude Cowork available on Windows and mobile?",
        a: "Yes. Claude Desktop runs it on macOS and Windows (Linux in beta), and it's on the web and Claude for iOS and Android on Pro, Max, Ultra and Team. Local files, browser use and computer use need the desktop app.",
      },
      {
        q: "Can Claude Cowork run tasks on a schedule?",
        a: "Yes, on all paid plans. Use `/schedule` in a task or the Scheduled page; each run is its own session in the cloud, so your computer can be off unless the task needs local files.",
      },
      {
        q: "Does Claude Cowork work when my laptop is closed?",
        a: "Cloud tasks do: they keep running on Anthropic's servers. Work that needs your local files, local connectors or browser stops reaching them until Claude Desktop is open again.",
      },
    ],
  },
  cta: {
    title: "Hand off the documents to Cowork. Give your agents a job too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against claude.com/product/cowork, claude.com/pricing and Anthropic's help center on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI or Microsoft. Claude and Claude Code are trademarks of Anthropic.",
};
