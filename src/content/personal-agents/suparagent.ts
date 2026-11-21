import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/suparagent. Google autocomplete gave no suggestions for "suparagent" on 2026-11-13, so the page is
// short. Every fact comes from docs/compare/facts/suparagent.md (github.com/Anil-matcha/suparagent with its CHANGELOG
// and LICENSE, and suparagent.ai/pricing), checked 2026-11-13; the comparison table also uses
// docs/compare/facts/openworker.md, openbot.md and claude-cowork.md. Hosted prices are attributed to the README, as
// the card's Unverified note asks, and the Lifetime plan stays out.

const repo = "https://github.com/Anil-matcha/suparagent";

export const suparagent: GuideCopy = {
  meta: {
    title: "Suparagent: Open-Source AI Coworker Workspace, Pricing and Setup",
    description:
      "Suparagent is an open-source workspace for AI coworkers that run on Claude Code, Codex, Gemini CLI or Cursor. What it is, pricing, setup and comparisons.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Open source",
    title: "Suparagent: an open-source workspace for AI coworkers",
    lead: "Suparagent is an open-source “workspace for AI coworkers”. You create named agents, each with a job, a workspace, memory, routines and approval settings, and they run on an engine you already use, such as Claude Code, Codex, Gemini CLI or Cursor. It runs as a desktop app or on your own server; a hosted service at suparagent.ai is a separate product. The app was called Open Dots, then Open Duet, and took the name Suparagent on November 9, 2026, in version 0.8.5.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Suparagent is",
      points: [
        "Named coworkers: each agent has a name, role, engine, workspace, memory and approval settings, with templates and skills to start from.",
        "Engines you already use: Claude Code or Codex CLI, Gemini CLI, Google Gemini through Antigravity, Cursor, other CLI agents through the Agent Client Protocol (ACP), OpenRouter, or OpenAI-compatible APIs such as Ollama or LM Studio. No model is included.",
        "Work and schedules: a task board and calendar to assign work, schedule one-time runs and review attempts, and routines that run on a schedule, by webhook or on demand while the backend is running.",
        "Teams of agents: a lead agent (Claude or Codex) delegates to specialists, and agents coordinate in shared rooms.",
        "Approvals: Ask first, Accept edits, Approve for me (Claude, Codex and Cursor) and Plan only. A routine never approves an action by itself, and a Today view gathers approvals, questions and routine outcomes.",
        `Open source under Apache 2.0 at [github.com/Anil-matcha/suparagent](${repo}), with about 7,050 stars on November 13, 2026 in a repository created in May 2023. It's early and changing: the self-hosted server, Docker computers, browser tools and the macOS native desktop preview are experimental.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent pricing",
      text: [
        "No Suparagent fee is stated for the desktop app or a self-hosted server. Hosted plans as listed in the README on November 13, 2026, in USD. On every plan you bring your own AI provider account.",
      ],
      headers: ["Plan", "Price", "Includes"],
      rows: [
        ["Desktop app or self-hosted server", "No Suparagent fee stated", "Your own engine; you pay your model provider"],
        ["Hosted: Free preview", "$0", "Sandbox compute billed to your Boat account"],
        ["Hosted: Starter", "$15/month", "100 compute hours, 51 GB"],
        ["Hosted: Standard", "$49/month", "300 compute hours, 51 GB"],
        ["Hosted: Pro", "$99/month", "720 compute hours, 111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Suparagent",
      steps: [
        {
          title: "Choose where it runs",
          text: "Run the desktop app from a source checkout (the installers on GitHub Releases are experimental and unsigned), set up a self-hosted Linux server, or use the hosted web app at suparagent.ai.",
        },
        {
          title: "Create an agent",
          text: "Give it a name, a role, an engine such as Claude Code, Codex, Gemini CLI or Cursor, a workspace and an approval mode, or start from a template.",
        },
        {
          title: "Give it work",
          text: "Assign tasks on the board, or set routines to run on a schedule, by webhook or on demand; the backend has to stay running. Approvals, questions and outcomes collect in the Today view.",
        },
      ],
      source: { label: "Source: Suparagent README on GitHub", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot and Claude Cowork",
      text: [
        "Facts from each project's README or the vendor's own pages, checked November 13, 2026, with GitHub star counts from that day. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker).",
        "Guides: [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["Made by", "Anil-matcha on GitHub", "Andrew Ng (andrewyng on GitHub)", "CopilotKit", "Anthropic"],
        ["Open source", "Apache 2.0; about 7,050 stars", "MIT; about 19,050 stars", "MIT template, CopilotKit Intelligence licensed separately; about 11,652 stars", "No"],
        ["Runs where", "Desktop app, self-hosted Linux server or hosted web app", "Your computer (macOS, Windows); a small cloud service brokers connector sign-in", "Desktop app (Mac, Windows, Docker backend) or Kubernetes; hosted in early access", "Anthropic's cloud; local work through Claude Desktop"],
        ["Models", "Engines such as Claude Code, Codex, Gemini CLI and Cursor; no model included", "Your own key for OpenAI, Anthropic, Gemini, OpenRouter and others, or a local model", "OpenAI, Claude, Gemini or open models; your own agents through AG-UI", "Claude models"],
        ["Price", "No fee stated to self-host; hosted plans $0 to $99 a month", "No price listed; bring your own model", "Free for personal projects; Business up to $29 per active user a month", "Paid Claude plans; Pro is $20 a month"],
        ["Task board", "Task board and calendar", "Not stated", "Not stated", "No issue board; a task list and a Scheduled page"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "AI employees with goals, hours and a heartbeat",
      text: [
        "Suparagent runs named coworkers on the engine you choose. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees) and set the goals in numbers." },
        { title: "Put the work on a board", text: "Assign issues on the shared board; during its working hours, the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Suparagent" },
  mid: {
    title: "Want AI employees on the coding agents you already use?",
    text: "Crewmark gives your Claude Code or Codex sessions a role, working hours, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Suparagent FAQ",
    items: [
      {
        q: "What is Suparagent?",
        a: "An open-source workspace for AI coworkers. You create named agents with a role, memory, routines and approval settings, and they run on an engine you already use, such as Claude Code, Codex, Gemini CLI or Cursor. It was called Open Dots, then Open Duet, until the rename on November 9, 2026.",
      },
      {
        q: "Is Suparagent free?",
        a: "The code is Apache 2.0, and no Suparagent fee is stated for the desktop app or a self-hosted server; you pay your model provider. The README lists hosted plans: a Free preview at $0 (sandbox compute billed to your Boat account), Starter at $15 a month, Standard at $49 and Pro at $99.",
      },
      {
        q: "Which AI agents does Suparagent work with?",
        a: "Claude Code or Codex CLI, Gemini CLI, Google Gemini through Antigravity, Cursor, other CLI agents through the Agent Client Protocol (ACP), OpenRouter, and OpenAI-compatible APIs such as Ollama or LM Studio. A team's lead agent must be Claude or Codex, and connected apps work only with Claude and Codex agents.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents a job, not just a prompt.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against the Suparagent README, changelog and license on GitHub and suparagent.ai on November 13, 2026; comparison facts from each product's own pages, the same day.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by the Suparagent project or Vadoo Internet Services Private Limited. Product names are trademarks of their owners.",
};
