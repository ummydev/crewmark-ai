import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/openbot, for "openbot" and "openbot github / 1.0 / reddit / for business / ai / copilotkit / vs
// grokbot" (Google autocomplete, 2026-11-13). Every fact comes from docs/compare/facts/openbot.md
// (github.com/CopilotKit/OpenBot and open.bot/pricing), checked 2026-11-13; the comparison table also uses
// docs/compare/facts/openworker.md, suparagent.md and claude-cowork.md. The card says nothing about a 1.0 release or
// Reddit, so the page doesn't either, and Grok Bot gets a link to /compare/openbot-vs-grok-bot rather than facts here.

const repo = "https://github.com/CopilotKit/OpenBot";

export const openbot: GuideCopy = {
  meta: {
    title: "OpenBot: CopilotKit's Open-Source AI Coworkers, Pricing, Setup",
    description:
      "OpenBot is CopilotKit's open-source, self-hostable workspace for AI coworkers. What it does, OpenBot for Business pricing, setup, GitHub and vs Grok Bot.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Open source",
    title: "OpenBot: CopilotKit's open-source workspace for AI coworkers",
    lead: "OpenBot is CopilotKit's open-source, self-hostable workspace for AI coworkers. Each Bot gets a computer of its own, with a browser, files and tools, and works with approvals and an activity log. You run it as a desktop app on your laptop or on Kubernetes for a team, bring your own models, and can connect agents you've already built through AG-UI. Here's what it does, what OpenBot for Business costs, how to set it up, how it keeps you in control and how it compares with other AI coworkers.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What OpenBot is",
      points: [
        "A computer per Bot: each Bot has its own browser, files and tools, along with conversations, routines, memory, skills, apps, approvals and activity.",
        "Where it runs: a desktop app for Mac and Windows with a Docker backend on your laptop, or Kubernetes via Helm for a team. A version hosted by CopilotKit is in early access.",
        "Your models: OpenAI, Claude, Gemini or open models through an OpenAI-compatible endpoint. You pay the model providers directly.",
        "Your agents: use the built-in Bots, or connect agents you've built on other stacks through AG-UI.",
        "Routines: recurring work, run by a routine worker.",
        "Tools and frontends: MCP tools, and frontends for Mac, Windows, web, iOS, Android, Slack and Teams, some of them in early access.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenBot on GitHub and CopilotKit Intelligence",
      text: [
        `The code is at [github.com/CopilotKit/OpenBot](${repo}). The repository was created on August 17, 2026 and had about 11,652 stars on November 13, 2026.`,
      ],
      points: [
        "The application template is MIT-licensed, so you can self-host and customize it.",
        "It uses CopilotKit Intelligence, which has its own license: a free local license on a laptop, and a trial or production license on Kubernetes.",
        "Running in production on Kubernetes needs a CopilotKit Intelligence license beyond evaluation.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot pricing and OpenBot for Business",
      text: [
        "From open.bot/pricing on November 13, 2026, in USD. On every plan you pay model providers directly.",
      ],
      headers: ["Plan or license", "Price"],
      rows: [
        ["Personal projects", "Free"],
        ["OpenBot for Business, pay as you go", "Up to $29 per active user per month, plus 5% of monthly model spend above $5,000"],
        ["Annual", "Custom"],
        ["CopilotKit Intelligence", "Free local license on a laptop; trial or production license on Kubernetes"],
        ["Models", "Paid to the model providers directly"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up OpenBot",
      steps: [
        {
          title: "Choose where it runs",
          text: "On your laptop, the desktop app for Mac or Windows, which runs with a Docker backend. For a team, Kubernetes via Helm. A version hosted by CopilotKit is in early access.",
        },
        {
          title: "Connect your models",
          text: "Use OpenAI, Claude, Gemini or open models through an OpenAI-compatible endpoint. You pay the providers directly.",
        },
        {
          title: "Pick a Bot or bring an agent",
          text: "Start with a built-in Bot, or connect an agent you've already built through AG-UI. Each Bot gets a computer of its own, with a browser, files and tools.",
        },
        {
          title: "Add tools and routines",
          text: "Give Bots MCP tools and set up Routines for recurring work; a routine worker runs them.",
        },
        {
          title: "Reach it where you work",
          text: "Frontends cover Mac, Windows, web, iOS, Android, Slack and Teams; some are in early access.",
        },
      ],
      source: { label: "Source: OpenBot README on GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "How OpenBot keeps you in control",
      points: [
        "Approvals: Bots ask before actions.",
        "Activity: each Bot keeps an activity log.",
        "Team edition: company sign-in, roles, tool permissions and audit.",
        "Self-hosting: it runs on your laptop or your own Kubernetes cluster, with the model providers you choose.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent and Claude Cowork",
      text: [
        "Facts from each project's README or the vendor's own pages, checked November 13, 2026, with GitHub star counts from that day. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker); for Grok Bot, see [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "Guides: [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["Made by", "CopilotKit", "Andrew Ng (andrewyng on GitHub)", "Anil-matcha on GitHub", "Anthropic"],
        ["Open source", "MIT template, CopilotKit Intelligence licensed separately; about 11,652 stars", "MIT; about 19,050 stars", "Apache 2.0; about 7,050 stars", "No"],
        ["Runs where", "Desktop app (Mac, Windows, Docker backend) or Kubernetes; hosted in early access", "Your computer (macOS, Windows); a small cloud service brokers connector sign-in", "Desktop app, self-hosted Linux server or hosted web app", "Anthropic's cloud; local work through Claude Desktop"],
        ["Models", "OpenAI, Claude, Gemini or open models; your own agents through AG-UI", "Your own key for OpenAI, Anthropic, Gemini, OpenRouter and others, or a local model", "Engines such as Claude Code, Codex, Gemini CLI and Cursor; no model included", "Claude models"],
        ["Price", "Free for personal projects; Business up to $29 per active user a month", "No price listed; bring your own model", "No fee stated to self-host; hosted plans $0 to $99 a month", "Paid Claude plans; Pro is $20 a month"],
        ["Recurring work", "Routines, run by a routine worker", "Scheduled briefs, reports and other repeatable tasks", "Routines on a schedule, by webhook or on demand", "Hourly, daily, weekly or weekdays, in the cloud"],
        ["Approvals", "Before actions; audit in the team edition", "On by default; optional reviewer model", "Ask first, Accept edits, Approve for me or Plan only", "Manual, Auto or Skip"],
        ["Task board", "Not stated", "Not stated", "Task board and calendar", "No issue board; a task list and a Scheduled page"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Bots in your workspace. AI employees on your coding agents.",
      text: [
        "OpenBot gives each Bot a computer of its own in a workspace you host. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees) and set the goals in numbers." },
        { title: "Put the work on a board", text: "Assign issues on the shared board; during its working hours, the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up OpenBot" },
  mid: {
    title: "Want AI employees on the coding agents you already use?",
    text: "Crewmark gives your Claude Code or Codex sessions a role, working hours, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "OpenBot FAQ",
    items: [
      {
        q: "What is OpenBot?",
        a: "CopilotKit's open-source, self-hostable workspace for AI coworkers. Each Bot gets a computer of its own, with a browser, files and tools, plus approvals and an activity log. It runs as a desktop app on your laptop or on Kubernetes for a team, with the models you bring.",
      },
      {
        q: "Is OpenBot made by CopilotKit?",
        a: "Yes. It's at github.com/CopilotKit/OpenBot. It uses CopilotKit Intelligence, which is licensed separately from OpenBot's MIT template, and it connects existing agents through AG-UI.",
      },
      {
        q: "Is OpenBot free and open source?",
        a: "The application template is MIT-licensed, and OpenBot is free for personal projects. CopilotKit Intelligence, which it uses, has a free local license on a laptop and a trial or production license on Kubernetes. You pay model providers directly.",
      },
      {
        q: "How much does OpenBot for Business cost?",
        a: "Pay as you go is up to $29 per active user per month, plus 5% of monthly model spend above $5,000; annual pricing is custom. Running in production on Kubernetes also needs a CopilotKit Intelligence license beyond evaluation.",
      },
      {
        q: "OpenBot vs Grok Bot: what's the difference?",
        a: "OpenBot is open source and self-hostable: you run it on your laptop or on Kubernetes and bring your own models or agents. For a side-by-side with Grok Bot, see [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
      },
      {
        q: "Where is OpenBot on GitHub?",
        a: "At github.com/CopilotKit/OpenBot. The repository was created on August 17, 2026 and had about 11,652 stars on November 13, 2026.",
      },
    ],
  },
  cta: {
    title: "Host your Bots. Give your coding agents a job too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against the OpenBot README on GitHub and open.bot/pricing on November 13, 2026; comparison facts from each product's own pages, the same day.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by CopilotKit. Product names are trademarks of their owners.",
};
