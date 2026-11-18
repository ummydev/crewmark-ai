import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/grok-bot, for "grok bot" (Bing: about 311k impressions in three months, shared with the older @grok
// account), "grokbot", "grok bot how to use", "grok bot pricing", "grok bot free trial", "grok bot download" (mac,
// windows, linux, android), "grok bot setup", "grok bot use cases", "grok bot for business", "grok bot vs muse / dots /
// claude" (Google autocomplete and Bing keyword research, 2026-11-10; docs/seo/personal-agent-keywords-2026-11-10.md).
// Facts come from xAI's Grok Bot docs (docs.x.ai/grok-bot: overview, get-started, how-grok-bot-works, use-cases,
// skills-routines-and-automations), x.ai/bot/guides/grok-bot-101 and Cursor's plans page (cursor.com/help/grok-bot/plans),
// checked 2026-11-10. Neither lists prices in dollars or says which model Bots use, so the copy doesn't either.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const grokBot: GuideCopy = {
  meta: {
    title: "Grok Bot: What It Is, How to Use It, Plans and Setup",
    description:
      "xAI's Grok Bot explained: what the always-on agent does, which X, SuperGrok and Cursor plans include it, the free trial, how to download it on Mac, Windows, Linux and phones, how to set up your first Bot, and use cases.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Grok Bot",
    title: "Grok Bot: what xAI's personal agent does and how to use it",
    lead: "Grok Bot is xAI's always-on agent, which it calls “your proactive AI teammate”. Each Bot works on a cloud computer with a browser, files and a terminal, signs into the apps you use, remembers how you like things done and keeps going after you close your laptop. It opened as an early beta in August 2026. This guide covers what it does, which plans include it, how to set up your first Bot, how routines and approvals work, and what people use it for.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Grok Bot is",
      text: [
        "Grok Bot isn't the Grok chatbot or the @grok account on X. It's an agent with its own computer: it can use apps and websites the way a person would, write and run code, and handle multi-step jobs such as building a deck, running a campaign, booking a reservation or keeping a calendar in sync.",
      ],
      points: [
        "A cloud computer: your Bots share one persistent machine with a browser, filesystem and terminal. Each Bot gets its own screen, and you can watch any of them live.",
        "Several Bots, one team: give each Bot one job; they can message and hand work to each other, and your first Bot can report on the others.",
        "Apps: Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub and more, plus any MCP server or API. It uses the same MCP servers, plugins and skills as Cursor.",
        "Memory: each Bot keeps its own notes on your preferences and a dated work log; a few facts, like your name and time zone, are shared by all your Bots.",
        "Routines: Bots run jobs on a schedule or when something happens, such as a Slack mention or a webhook. See [Grok Bot routines](/personal-agent/grok-bot-routines).",
        "You can reach it on desktop, on your phone, in Slack and on X, by text or by voice.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Which plans include Grok Bot",
      text: [
        "Grok Bot runs on a Cursor account. These are the plans that include it, from Cursor's Grok Bot plans page; neither xAI nor Cursor lists Grok Bot's own price or weekly usage in numbers.",
      ],
      headers: ["Plan", "Grok Bot", "Usage"],
      rows: [
        ["The X Subscription: Premium, Super, Ultra", "Included, individual or team seat", "Shared weekly pool, larger on Super and Ultra; extra usage from prepaid credit"],
        ["The X Subscription: Plus, Free", "Not included", "-"],
        ["Legacy Cursor plans: Pro, Pro+, Ultra, Teams", "Included", "Weekly usage rising from Pro to Ultra; on-demand usage after that if turned on"],
        ["Linked SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+", "Included through a linked account", "Heavy gets the most; a link and a Cursor plan don't stack"],
        ["SuperGrok Lite", "Not included", "-"],
        ["Free trial", "A usage credit with a 7-day window", "Used by agent steps and tokens; not topped up"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Grok Bot",
      steps: [
        {
          title: "Download the app",
          text: "Get it from x.ai/bot. It runs on macOS (Apple silicon and Intel), Windows (x64 and Arm64) and Linux (x64 and Arm64), plus iPhone (iOS 18 or later) and Android (9 or later).",
        },
        {
          title: "Sign in",
          text: "Choose Sign in and finish in your browser; Grok Bot uses your Cursor account, so company SSO applies. If your access comes from SuperGrok or X Premium+, link your Grok account on the onboarding page. Accounts on Privacy Mode (Legacy) have to switch first, because Bots need cloud storage.",
        },
        {
          title: "Give your first Bot one job",
          text: "The app creates a Bot named Grok Bot and opens a chat. Add more with New Bot (Cmd/Ctrl+N). Give each Bot one job in its first message and ask it to remember how you want the work done. You can also teach a task by recording it once on the Bot's computer.",
        },
        {
          title: "Connect apps and set rules",
          text: "Connect the apps it needs. Logins come from its Vault, then a password manager such as 1Password, then a secure form, and the Bot never sees the password. Auto Review is on by default and checks actions before they run; add Ask first rules in Settings > General > Bot for anything that should always wait for you.",
        },
      ],
      source: { label: "Source: xAI's Grok Bot docs, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "How Grok Bot keeps you in control",
      points: [
        "Approval cards: when an action needs your OK, the Bot shows a card and waits. xAI's examples draft Slack replies and Gmail messages for you to approve.",
        "Auto Review checks actions before a Bot runs commands, uses apps or acts on its computer, and treats only your own messages as instructions. xAI notes it lowers the risk from harmful content but doesn't remove it.",
        "A Bot has no account of its own; it acts as you, so every action traces back to you.",
        "All Bots share one computer and its sign-ins: if one Bot logs into a site, the others can use that login too.",
        "For single sign-on or passkeys, choose Open computer, then Take control, finish the step and tell the Bot to continue.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Grok Bot use cases",
      text: ["From xAI's use-case docs. Most draft the work and wait for your approval before anything is sent."],
      headers: ["Use case", "What the Bot does"],
      rows: [
        ["Morning briefing", "Summarizes overnight changes across your apps"],
        ["Inbox manager", "Sorts unread email by urgency and drafts replies"],
        ["Travel coordinator", "Finds two flight and hotel options and leaves the booking to you"],
        ["Meeting prep", "Writes a one-page brief on attendees, past discussions and open threads"],
        ["Content marketer", "Drafts a newsletter and posts from the week's shipped work"],
        ["Sales development", "Qualifies inbound leads against your ideal customer and drafts replies"],
        ["Competitive intelligence", "Reports competitors' launches and price changes each week"],
        ["Campaign team", "Several Bots pull sign-up data, draft launch content and fact-check it"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs Muse, Dots and Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Made by", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["Runs on", "A cloud computer shared by your Bots", "A dedicated cloud VM per person", "Its own cloud computer and browser", "The Claude Duet app"],
        ["Schedules", "Routines on a schedule, Slack, GitHub, email or webhook", "Reminders and recurring tasks", "Scheduled reminders and recurring checks", "Comes to you with what needs attention"],
        ["Who can get it", "X Premium and up, SuperGrok, Cursor plans", "US, free with limits; Power $20/mo", "ChatGPT Pro and Business Premium", "Claude Pro, Max, Ultra in the US, waitlist"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A Grok Bot-style teammate for your code",
      text: [
        "Grok Bot works in your apps; Crewmark works in your repository. It turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat: it wakes on schedule, takes the next issue from a board, opens pull requests and messages you when it needs a decision.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from an [AI employee role](/ai-employees), such as a software engineer or SEO specialist.",
        },
        {
          title: "Give it hours and a heartbeat",
          text: "It wakes every 15 to 240 minutes during the hours you set. See [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Compare personal agents",
          text: "See [personal AI agents compared](/personal-agent) and the [Meta Muse guide](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Grok Bot" },
  mid: {
    title: "Want a proactive teammate for your codebase?",
    text: "Crewmark employees wake on a heartbeat, take the next issue from a board and open pull requests.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is Grok Bot?",
        a: "xAI's always-on agent. Each Bot works on a cloud computer, signs into your apps, remembers your preferences, runs routines on a schedule and keeps working after you close your laptop. It isn't the Grok chatbot or the @grok account on X.",
      },
      {
        q: "How much does Grok Bot cost?",
        a: "It isn't sold on its own price list: it's included in The X Subscription's Premium, Super and Ultra plans, legacy Cursor Pro, Pro+, Ultra and Teams plans, and linked SuperGrok, SuperGrok Plus, SuperGrok Heavy and X Premium+ subscriptions. Usage limits differ by plan.",
      },
      {
        q: "Is there a Grok Bot free trial?",
        a: "Yes, a usage credit with a 7-day window. It's used up by agent steps and tokens, isn't topped up, and never turns into a paid plan; after it you upgrade or link an account.",
      },
      {
        q: "Does Grok Bot work on Windows, Linux and Android?",
        a: "Yes. The desktop app runs on macOS, Windows and Linux (x64 and Arm64), and there are apps for iPhone (iOS 18+) and Android (9+).",
      },
      {
        q: "Can Grok Bot run tasks on a schedule?",
        a: "Yes, with routines: on a schedule in plain words, or when a Slack message, GitHub or Linear event, email or webhook arrives. See [Grok Bot routines](/personal-agent/grok-bot-routines).",
      },
      {
        q: "Grok Bot vs Meta Muse: which is better?",
        a: "Muse is built for everyday life admin for everyone, with a free tier in the US. Grok Bot is built for work: several Bots as a team, routines with triggers, and Cursor's tools for code.",
      },
    ],
  },
  cta: {
    title: "Give your coding agent a job, not just a prompt.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against xAI's Grok Bot documentation and guides and Cursor's Grok Bot plans page on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by xAI, SpaceX, X, Cursor, Meta, OpenAI or Anthropic. Product names are trademarks of their owners.",
};
