import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/base44-superagent, for "base44 superagent(s)", "base44 super agent", "superagent base44", "base44
// superagent pricing / credits / cost", "base44 superagent whatsapp", "base44 superagent examples", "what can base44
// superagent do", "base44 superagent vs claude", "base44 superagent alternative", "base44 superagent review" (Google
// autocomplete, 2026-11-10). GSC (7 days to 2026-11-08) shows "base44 superagent" landing on /blog/superagent at
// position 4.0 with no clicks: the overview doesn't answer the specific search, so this page does. Facts come from
// Base44's docs (docs.base44.com: Creating a Superagent, Setting up workflows, Credits), base44.com/superagents and
// base44.com/pricing, checked 2026-11-10. The pricing page lists annual prices only and doesn't say how Superagents work
// on the Free plan, so the copy says so.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `Every morning at 7, summarize my unread emails, today's meetings
and any Slack threads that mention me. Send it here.

When an email from a new lead arrives in Gmail, draft a personal follow-up
and ask me before you send it. If they don't reply in three days, try a new angle.

Every Friday at 5pm, pull this week's sales, support and marketing numbers
and post a summary in #weekly on Slack.`;

export const base44Superagent: GuideCopy = {
  meta: {
    title: "Base44 Superagent: Pricing, Credits, WhatsApp and Setup",
    description:
      "Base44 Superagents explained: what the personal agent can do, how to create one, Base44 plans and how Superagents use message and integration credits, connecting WhatsApp, Telegram and Slack, workflows, examples and how it compares.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Base44",
    title: "Base44 Superagent: what it does, what it costs and how to set it up",
    lead: "A Superagent is Base44's “personal AI agent that runs tasks for you 24/7”. You talk to it in your browser or in WhatsApp, Telegram, Slack and other chat apps; it works across the tools you connect, runs workflows on a schedule or a trigger, remembers across conversations and can even place phone calls. This guide covers what it can do, how to create one, how pricing and credits work, how to connect WhatsApp, workflow examples, and how it compares with other personal agents.",
    cta: "Get started",
    secondary: "Pricing and credits",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "What a Base44 Superagent is",
      text: [
        "Base44 is best known as an AI app builder. Its Superagent is a separate, personal agent you direct in conversation: “Describe what you want, and your Superagent takes action for you across your tools.” It only reaches the tools and data you connect.",
      ],
      points: [
        "Chat anywhere: the browser, WhatsApp, Telegram, Slack, iMessage and LINE. On WhatsApp it can join group chats.",
        "Connectors: Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack and more, plus your own MCP server. Shared connectors can be set to read-only.",
        "Workflows: jobs that run on a schedule or when something happens in a connected tool.",
        "Memory: knowledge, working context and a memory log, shared across conversations or kept separate.",
        "Skills and goals: reusable instructions, and `/goal` to split a bigger outcome into tasks you can pause and resume.",
        "Voice: talk to it, with screen sharing on desktop. With a phone number, scheduled workflows can place calls.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to create a Base44 Superagent",
      steps: [
        {
          title: "Open Personal Agent",
          text: "Log in at app.base44.com and click Personal Agent under Explore in the sidebar (or the Agent tab, if your sidebar shows Apps and Agent).",
        },
        {
          title: "Choose where to talk to it",
          text: "Pick Continue here for the browser, or WhatsApp, Telegram or iMessage. For WhatsApp, scan the QR code or open the app with the button and send the pre-filled message; for Telegram, send the pre-filled message or press Start.",
        },
        {
          title: "Connect your tools",
          text: "Open Plugins in the sidebar, click Connect on a connector, choose a shared or app-user connector, and set it to read-only if the agent only needs to look. Add your own MCP server with Add Connector.",
        },
        {
          title: "Describe the job",
          text: "Say what you want done; put role or project context in the first message, and give standing rules it should always follow. For recurring work, describe the schedule or trigger and it sets up a workflow.",
          code: prompts,
        },
      ],
      source: { label: "Source: Base44 docs, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Base44 Superagent pricing and credits",
      text: [
        "Superagents run on your Base44 workspace's credits. These are Base44's plans as listed on November 10, 2026, billed annually; the pricing page says annual billing saves 20% and doesn't list monthly prices.",
      ],
      headers: ["Plan", "Price (annual billing)", "Message credits / month", "Integration credits / month"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/mo", "100", "2,000"],
        ["Builder", "$40/mo", "250", "10,000"],
        ["Pro", "$80/mo", "500", "20,000"],
        ["Elite", "$160/mo", "1,200", "50,000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "How Superagents use credits",
      points: [
        "Message credits: every message the agent processes and every workflow run, the same as chatting. That includes messages from WhatsApp, Telegram, Slack, the API and automations.",
        "Integration credits: actions such as image generation, file processing, file uploads and download links.",
        "Credits refresh on a set schedule, and unused credits expire when they reset.",
        "When the workspace runs out, workflows can't run. They stay on and resume when credits return, but missed runs don't happen later.",
        "Check usage in Agent Settings > Credit usage. A Superagent can also pause runs that are looping, to stop wasting credits.",
        "The Free plan has 25 message credits a month. Every run uses message credits, so a single daily workflow (about 30 runs a month) already needs more than that; plan on a paid plan for daily workflows.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Base44 Superagent workflows and examples",
      text: [
        "Describe the job in chat, or open Workflows, click New Workflow and send a suggested one to chat. The Superagent works out whether it's scheduled or triggered and asks what it needs.",
      ],
      steps: [
        {
          title: "Scheduled",
          text: "Runs at times you set: a morning briefing of unread email, meetings and Slack threads; an end-of-day wrap-up with tomorrow's to-do list; a weekly call to a dentist's office to check for an earlier appointment (if your agent has a phone number).",
        },
        {
          title: "Triggered",
          text: "Runs when something happens: a new email in Gmail, a change in your Superagent's data, or activity in a connected tool, such as a reminder when an email sits unread for 24 hours or a brief 30 minutes before each meeting.",
        },
        {
          title: "When it breaks",
          text: "A workflow that fails several times in a row pauses itself and Base44 emails you. Check the Activity tab, fix the cause (often a disconnected integration), click Resume, then Run Now to test.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs Meta Muse, Grok Bot and Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["Where you talk to it", "Browser, WhatsApp, Telegram, Slack, iMessage, LINE", "Muse app, muse.ai, WhatsApp", "Desktop and phone apps, Slack, X", "The Claude Duet app"],
        ["Schedules", "Scheduled and triggered workflows", "Reminders and recurring tasks", "Routines on a schedule or trigger", "Comes to you with what needs attention"],
        ["Pricing", "Base44 plan credits, from $16/mo on annual billing", "Free with a weekly limit; Power $20/mo", "Included in X Premium and up, SuperGrok, Cursor plans", "Included in Claude Pro and up, by waitlist"],
        ["Guide", "This page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A Superagent for your errands, an AI employee for your backlog",
      text: [
        "A Base44 Superagent is built around one person's tools and chats. Crewmark is built around a job: it turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat, which takes the next issue from a shared board, with no credits to buy beyond the agent plan you already have.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from an [AI employee role](/ai-employees): engineer, SEO specialist, marketing agent, social media manager, designer.",
        },
        {
          title: "Run it on the plan you have",
          text: "Crewmark works inside your own Claude Code or Codex. See [pricing](/pricing).",
        },
        {
          title: "Compare more agents",
          text: "See [personal AI agents compared](/personal-agent) and [what a superagent is](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Create a Base44 Superagent" },
  mid: {
    title: "Want an agent on a job, without buying credits?",
    text: "Crewmark employees run inside the Claude Code or Codex plan you already pay for and work through a shared board.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is a Base44 Superagent?",
        a: "Base44's personal AI agent that runs tasks for you 24/7. You chat with it in the browser or WhatsApp, Telegram, Slack and other apps; it works across the tools you connect and runs scheduled or triggered workflows.",
      },
      {
        q: "How much does a Base44 Superagent cost?",
        a: "It uses your Base44 plan's credits. On annual billing plans are Starter $16, Builder $40, Pro $80 and Elite $160 a month, with 100 to 1,200 message credits; the Free plan has 25 message credits a month.",
      },
      {
        q: "How do Base44 Superagent credits work?",
        a: "Each message it processes and each workflow run uses message credits; actions like image generation and file processing use integration credits. Credits reset on a schedule, unused ones expire, and workflows stop running while you're out.",
      },
      {
        q: "How do I connect a Base44 Superagent to WhatsApp?",
        a: "When you create it, choose WhatsApp and scan the QR code or open WhatsApp with the button, then send the pre-filled message. You can also connect a WhatsApp number so it can work in group chats.",
      },
      {
        q: "What can a Base44 Superagent do?",
        a: "Triage your inbox overnight, follow up with leads, watch flight prices, book a restaurant and tell a friend, post weekly numbers to Slack, rearrange your calendar, run a project's WhatsApp group, and with a phone number, make scheduled calls.",
      },
      {
        q: "What are the alternatives to Base44 Superagents?",
        a: "Meta Muse (free in the US), Grok Bot (for teams of agents at work), ChatGPT dots and Claude Duet (with Pro plans), Manus Cue, and open-source OpenClaw or Hermes Agent. See [personal AI agents compared](/personal-agent).",
      },
    ],
  },
  cta: {
    title: "Errands for a Superagent. A job for an AI employee.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Base44's documentation, its Superagents page and its pricing page on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Base44, Wix, Meta, xAI or Anthropic. Product names are trademarks of their owners.",
};
