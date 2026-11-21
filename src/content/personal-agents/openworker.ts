import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/openworker, for "openworker" and "openworker github / git / andrew ng / review / andrew ng github /
// reddit / harness / ai" (Google autocomplete, 2026-11-13). Every fact comes from docs/compare/facts/openworker.md
// (github.com/andrewyng/openworker and openworker.com), checked 2026-11-13; the comparison table also uses
// docs/compare/facts/openbot.md, suparagent.md and claude-cowork.md. The card's Unverified items (the announcement date,
// who else is involved) stay out, and so does Reddit, which no card covers.

const repo = "https://github.com/andrewyng/openworker";

export const openworker: GuideCopy = {
  meta: {
    title: "OpenWorker: Andrew Ng's Open-Source AI Coworker, Setup and SDK",
    description:
      "OpenWorker, Andrew Ng's open-source AI coworker on GitHub: a desktop app that runs with your own model, approvals and schedules, plus a Harness SDK.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Open source",
    title: "OpenWorker: Andrew Ng's open-source AI coworker and how to set it up",
    lead: "OpenWorker is an open-source desktop app that its README calls “an AI coworker for your everyday work”, plus a Harness SDK in TypeScript and Rust for building your own agentic apps. The repository is under Andrew Ng's GitHub account, uses the MIT license and had about 19,050 stars on November 13, 2026. The app runs on your machine with your own model key or a local model, asks before it acts and records every tool call. Here's what it does, what it costs, how to set it up, how approvals work and how it compares with OpenBot, Suparagent and Claude Cowork.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What OpenWorker is",
      points: [
        "A desktop app for everyday work: research, writing, reviewing code and carrying out tasks across your tools. It's in open beta.",
        "It runs on your machine: the agent loop, conversations, connector tokens and model keys stay there. The only cloud piece is a small service that brokers OAuth sign-in for connectors.",
        "You pick the model: OpenAI, Anthropic, Google Gemini, OpenRouter and other providers on your own key, or local models through Ollama, LM Studio, llama.cpp or vLLM. Its agent engine is written in Python on aisuite, Andrew Ng's library.",
        "Specialist coworkers come with the tools and instructions for one job; security coworkers come first.",
        "Connectors: GitHub, Slack, email and calendars among more than 25, plus MCP. Mention @OpenWorker in Slack and the task runs on your desktop, with the reply in the thread.",
        "Schedules: morning briefs, weekly reports and other repeatable tasks run on a schedule, with transcripts to review.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenWorker on GitHub and the Harness SDK",
      text: [
        `The code is at [github.com/andrewyng/openworker](${repo}). The repository was created on July 20, 2026, its MIT LICENSE names Andrew Ng as the copyright holder, and it had about 19,050 stars on November 13, 2026.`,
      ],
      points: [
        "Harness SDK: an SDK in TypeScript and Rust, in the same repository, for building your own agentic desktop or web apps.",
        "Sub-agents and teams: the SDK supports both; that isn't stated for the desktop app.",
        "Deployment: apps built on the SDK can run on Kubernetes in AWS, Azure or Google Cloud.",
        "Contributions: the maintainers say they may not accept pull requests for features already in development or outside their plans.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker pricing and license",
      text: [
        "Neither the README nor openworker.com lists a price, checked November 13, 2026. You bring your own model key, billed by your provider, or run a local model.",
      ],
      headers: ["Part", "What you pay"],
      rows: [
        ["Desktop app (open beta)", "No price listed; MIT license"],
        ["Harness SDK (TypeScript, Rust)", "No price listed; MIT license, same repository"],
        ["Cloud model: OpenAI, Anthropic, Google Gemini, OpenRouter or another provider", "Billed by that provider, on your own key"],
        ["Local model: Ollama, LM Studio, llama.cpp or vLLM", "Runs on your own machine"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up OpenWorker",
      steps: [
        {
          title: "Download the desktop app",
          text: "It runs on macOS 12 or later on Apple silicon (signed and notarized) and Windows 10 or 11 on x64. Windows builds aren't code-signed yet, so SmartScreen shows a warning. No Linux download is listed.",
        },
        {
          title: "Add a model",
          text: "Enter your own key for OpenAI, Anthropic, Google Gemini, OpenRouter or another provider, or use a local model through Ollama, LM Studio, llama.cpp or vLLM. Keys stay on your machine.",
        },
        {
          title: "Connect your tools",
          text: "Add connectors such as GitHub, Slack, email and calendars, or MCP servers. Sign-in goes through a small cloud service that brokers OAuth; the tokens stay on your machine.",
        },
        {
          title: "Decide what needs your OK",
          text: "Actions wait for approval by default. Turn one-off approvals into standing rules and allowlists, or switch on auto-approve, where a reviewer model decides and escalates to you when it's unsure.",
        },
        {
          title: "Schedule the repeat work",
          text: "Set up morning briefs, weekly reports and other repeatable tasks. Unattended runs never approve themselves: their questions wait in an inbox, and each run leaves a transcript to review.",
        },
      ],
      source: { label: "Source: OpenWorker README on GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "How OpenWorker keeps you in control: approvals, review and audit",
      points: [
        "Approval by default: actions wait for your OK, and a set of dangerous operations always stays with a human.",
        "Rules you build up: a one-off approval can become a standing rule or an allowlist entry.",
        "Optional auto-approve: a reviewer model handles approvals, escalates to you when it's unsure, and has a circuit breaker.",
        "An audit trail: every tool call is recorded with how it was approved, and the app flags actions where data “Leaves this Mac”.",
        "Sandboxing: commands can run in an NVIDIA OpenShell sandbox or the built-in macOS or Windows sandbox.",
        "Scheduled runs never approve themselves; anything they need from you waits in an inbox.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent and Claude Cowork",
      text: [
        "Facts from each project's README or the vendor's own pages, checked November 13, 2026, with GitHub star counts from that day. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker).",
        "Guides: [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["Made by", "Andrew Ng (andrewyng on GitHub)", "CopilotKit", "Anil-matcha on GitHub", "Anthropic"],
        ["Open source", "MIT; about 19,050 stars", "MIT template, CopilotKit Intelligence licensed separately; about 11,652 stars", "Apache 2.0; about 7,050 stars", "No"],
        ["Runs where", "Your computer (macOS, Windows); a small cloud service brokers connector sign-in", "Desktop app (Mac, Windows, Docker backend) or Kubernetes; hosted in early access", "Desktop app, self-hosted Linux server or hosted web app", "Anthropic's cloud; local work through Claude Desktop"],
        ["Models", "Your own key for OpenAI, Anthropic, Gemini, OpenRouter and others, or a local model", "OpenAI, Claude, Gemini or open models; your own agents through AG-UI", "Engines such as Claude Code, Codex, Gemini CLI and Cursor; no model included", "Claude models"],
        ["Price", "No price listed; bring your own model", "Free for personal projects; Business up to $29 per active user a month", "No fee stated to self-host; hosted plans $0 to $99 a month", "Paid Claude plans; Pro is $20 a month"],
        ["Recurring work", "Scheduled briefs, reports and other repeatable tasks", "Routines, run by a routine worker", "Routines on a schedule, by webhook or on demand", "Hourly, daily, weekly or weekdays, in the cloud"],
        ["Approvals", "On by default; optional reviewer model", "Before actions; audit in the team edition", "Ask first, Accept edits, Approve for me or Plan only", "Manual, Auto or Skip"],
        ["Task board", "Not stated", "Not stated", "Task board and calendar", "No issue board; a task list and a Scheduled page"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A coworker on your desktop. AI employees on a board.",
      text: [
        "OpenWorker is an AI coworker you run on your own machine. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board, so recurring engineering, SEO and marketing work gets picked up and tracked.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees) and set the goals in numbers." },
        { title: "Put the work on a board", text: "Assign issues on the shared board; during its working hours, the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up OpenWorker" },
  mid: {
    title: "Want AI employees that take issues from a board?",
    text: "Crewmark gives your Claude Code or Codex sessions a role, working hours, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "OpenWorker FAQ",
    items: [
      {
        q: "What is OpenWorker?",
        a: "An open-source desktop app that its README calls “an AI coworker for your everyday work”, plus a Harness SDK for building your own agentic apps. It runs on your machine with your own model key or a local model, asks for approval before actions and can run tasks on a schedule. The desktop app is in open beta.",
      },
      {
        q: "Is OpenWorker made by Andrew Ng?",
        a: "The repository is github.com/andrewyng/openworker, under Andrew Ng's GitHub account, and its LICENSE names Andrew Ng as the copyright holder. The app's engine is built on aisuite, his library. The openworker.com footer reads “© 2026 OpenWorker”.",
      },
      {
        q: "Is OpenWorker free and open source?",
        a: "It's open source under the MIT license, and neither the README nor openworker.com lists a price. You bring your own model key, billed by your provider, or run a local model through Ollama, LM Studio, llama.cpp or vLLM.",
      },
      {
        q: "What is the OpenWorker Harness SDK?",
        a: "An SDK in TypeScript and Rust, in the same repository, for building your own agentic desktop or web apps. It supports sub-agents and teams, and apps built on it can run on Kubernetes in AWS, Azure or Google Cloud.",
      },
      {
        q: "Does OpenWorker run on Mac, Windows and Linux?",
        a: "It runs on macOS 12 or later on Apple silicon and on Windows 10 or 11 on x64. Windows builds aren't code-signed yet, so SmartScreen shows a warning. No Linux download is listed.",
      },
      {
        q: "What are OpenWorker's limits?",
        a: "The desktop app is in open beta, Windows builds aren't code-signed yet, and the maintainers say they may not accept pull requests for features already in development or outside their plans.",
      },
    ],
  },
  cta: {
    title: "Keep a coworker on your desktop. Give your coding agents a job too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against the OpenWorker README on GitHub and openworker.com on November 13, 2026; comparison facts from each product's own pages, the same day.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Andrew Ng or OpenWorker. Product names are trademarks of their owners.",
};
