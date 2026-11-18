import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/manus-cue, for "manus cue" (Bing: about 1.8k impressions in three months), "cue manus", "cue by
// manus", "manus cue invitation code", "manus cue code", "manus cue pricing", "manus cue app / download / ios /
// desktop / windows", "manus cue review / reddit", "how to use manus cue", "cue agent", "cue personal agent" (Google
// autocomplete and Bing keyword research, 2026-11-10; docs/seo/personal-agent-keywords-2026-11-10.md). Facts come from
// Manus's launch post (manus.im/blog/introducing-manus-2-0) and its Help Center article on Manus 2.0, checked
// 2026-11-10. Manus hasn't said what Cue will cost after early access or whether MEETCUE still works, so the copy says
// so instead of guessing.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# One agent for errands
Every weekday at 8am, check my inbox for anything about the move and
send me a short summary. Ask before you reply to anyone.

# A small team with one goal (Manus's own example, as a prompt)
We're planning a team offsite in March for 20 people.
One of you research venues near Lisbon, one turn that into a shortlist
of three, and one draft a deck with a recommendation for me to decide.`;

export const manusCue: GuideCopy = {
  meta: {
    title: "Manus Cue: Invite Code, How to Use It and Pricing",
    description:
      "Cue by Manus explained: personal agents with their own email, phone number, wallet and computer. How to get access with an invitation code, how to download it, how to use agents and group chats, scheduled automations, and what it costs.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Manus Cue",
    title: "Manus Cue: personal agents with their own email, phone and wallet",
    lead: "Cue is a standalone app from Manus for your personal agents, launched in early access with Manus 2.0 on September 28, 2026. What sets it apart: each agent gets its own email address, phone number, wallet and computer, so it can message people, take your calls and pay within a budget you set. This guide covers how to get in with an invitation code, how to download it, how to use one agent or a team, scheduled automations, what it costs and the open questions.",
    cta: "Get started",
    secondary: "Get access",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Manus Cue is",
      text: [
        "Manus calls Cue “a new standalone app for your personal agents, on your phone and desktop”. It's built on the same infrastructure as Manus but it's a separate app, not a mode of Manus.",
      ],
      points: [
        "Its own identity: each agent has an email address, a phone number, a wallet and a computer.",
        "Calls: an agent can take your calls and leave you a summary in Cue.",
        "Payments: agents can pay within a budget you set.",
        "Teams: several agents can share a group chat and a common goal, handing work to each other while you set the direction and make the final call.",
        "Out in the world: at a restaurant, scan a QR code so your agent can order for you or hold your place in line.",
        "One assistant is fine too: keep a single agent for errands, reminders and research.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to get Manus Cue",
      steps: [
        {
          title: "Get an invitation code",
          text: "Cue is in early access and needs an invitation code. At launch Manus offered the code MEETCUE to a limited number of early users, first come, first served; it hasn't said whether it still works. Everyone who gets in receives extra codes to share, so ask someone who already uses Cue.",
        },
        {
          title: "Download the app from Manus",
          text: "In Manus, open the Agents (Cue!) tab in the sidebar and scan the QR code to download the app. Manus lists web, desktop and mobile; at launch iOS was waiting on App Store review, so check the App Store before you rely on it.",
        },
        {
          title: "Sign in with the code",
          text: "Enter the invitation code when you sign in. Manus may also email you a copy.",
        },
        {
          title: "Create your first agent",
          text: "Start with one agent for errands or set up a small team with a shared goal. Say what you want done, the budget it can spend and what it must ask you about first.",
          code: prompts,
        },
      ],
      source: { label: "Source: Manus's launch post for Manus 2.0 and Cue", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "Scheduled automations and skills",
      points: [
        "Scheduled Automations: describe what you want done and when, and Cue sets it up.",
        "Event triggers, such as a new email or a Slack message, are described for Manus Automations; Manus doesn't say Cue has them yet.",
        "Skills you made or imported in Manus aren't carried over automatically. Set them up again inside Cue.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Manus Cue pricing",
      headers: ["", "What Manus says"],
      rows: [
        ["Early access", "Free, with an invitation code"],
        ["After early access", "Not announced"],
        ["Manus subscription or credits", "The launch post doesn't say a Manus plan includes Cue or that Cue uses Manus credits"],
        ["Agent payments", "Agents pay from their wallet within the budget you set"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "Open questions before you hand it your number",
      points: [
        "Who an agent may contact, and what it may commit you to, isn't described in the launch post. Set a budget and tell each agent what to ask you first.",
        "How the person on the other end knows they're talking to an agent isn't described either.",
        "Pricing after early access, and which countries Cue works in, haven't been announced.",
        "Agents that send messages and pay from a wallet can make mistakes that cost money; start with a small budget.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs Meta Muse and Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["Agent identity", "Own email, phone number, wallet and computer", "Acts through your connected accounts", "Acts as you; no account of its own"],
        ["Teams of agents", "Yes, group chats with a shared goal", "Not described", "Yes, Bots hand work to each other"],
        ["Schedules", "Scheduled Automations", "Reminders and recurring tasks", "Routines on a schedule or trigger"],
        ["Access", "Early access, invitation code", "US, free with a weekly limit", "X Premium and up, SuperGrok, Cursor plans"],
        ["Guide", "This page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A team of agents for your work, on the agent you already use",
      text: [
        "Cue gives each personal agent an identity. Crewmark gives each work agent a job: it turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat, working through a shared board with the rest of your team.",
      ],
      steps: [
        {
          title: "Pick roles",
          text: "Start from [AI employee roles](/ai-employees): engineer, SEO specialist, marketing agent, social media manager, designer.",
        },
        {
          title: "Put the work on a board",
          text: "Each employee takes the next issue it's assigned, comments as it works and messages you when it's blocked.",
        },
        {
          title: "Compare personal agents",
          text: "See [personal AI agents compared](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Get started with Manus Cue" },
  mid: {
    title: "Want a team of agents on your actual work?",
    text: "Crewmark employees work through a shared board on a heartbeat, on the Claude Code or Codex plan you already pay for.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is Manus Cue?",
        a: "A standalone app from Manus for personal agents, launched in early access on September 28, 2026. Each agent has its own email address, phone number, wallet and computer, and several agents can work together in a group chat.",
      },
      {
        q: "How do I get a Manus Cue invitation code?",
        a: "At launch Manus offered MEETCUE to a limited number of early users, first come, first served. Everyone who gets access receives extra invite codes to share, so the surest way is to ask an existing Cue user.",
      },
      {
        q: "How much does Manus Cue cost?",
        a: "It's free during early access with an invitation code. Manus hasn't announced pricing after that, or whether a Manus subscription will include it.",
      },
      {
        q: "How do I download Manus Cue?",
        a: "Open the Agents (Cue!) tab in the Manus sidebar and scan the QR code. Manus lists web, desktop and mobile; iOS was awaiting App Store review at launch.",
      },
      {
        q: "Can a Cue agent make calls and payments?",
        a: "Each agent has its own phone number and wallet: it can take your calls and leave a summary, send messages and pay within a budget you set.",
      },
      {
        q: "Is Cue part of Manus?",
        a: "It's built on the same infrastructure but it's a separate app. Skills from Manus don't carry over automatically, and Manus doesn't say Cue uses Manus credits.",
      },
    ],
  },
  cta: {
    title: "Personal agents run errands. AI employees run your backlog.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Manus's Manus 2.0 launch post and its Help Center on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Manus, Meta or xAI. Product names are trademarks of their owners.",
};
