import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/lindy, a page per product on /blog/ai-coworker (like claude-cowork.ts). For "lindy ai" (assistant,
// agents, reviews, pricing, app, login) and "lindy vs n8n / zapier" (Google autocomplete, 2026-11-13). Every Lindy fact
// comes from docs/compare/facts/lindy.md (lindy.ai, lindy.ai/pricing and docs.lindy.ai), checked on 2026-11-13; the
// comparison columns come from relevance-ai.md and grok-bot.md, checked the same day. n8n and Zapier have no fact card,
// so the page doesn't mention them. The card flags Lindy's plan names and integration count as unconfirmed, so the page
// quotes only the $29.99 / 3,000-credit figure without a plan name, and gives no integration count.

const docs = "https://docs.lindy.ai";

export const lindy: GuideCopy = {
  meta: {
    title: "Lindy AI: What the Assistant Does, Pricing, Credits and Setup",
    description:
      "Lindy AI explained: a hosted assistant for inbox, calendar, meetings and Slack. Credit pricing, routines, approvals, where to use it and Lindy vs Relevance AI.",
  },
  breadcrumb: "Lindy",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Lindy",
    title: "Lindy AI: what the assistant does, what it costs and how to set it up",
    lead: "Lindy describes itself as an AI employee that completes work across your connected tools. It's one hosted assistant that acts as a personal executive assistant for each user and as a shared teammate in Slack. It handles inbox, calendar, meetings, research, reports and follow-ups, runs recurring work as routines, and waits for your approval before anything with outside impact. Here's what it does, how its credit pricing works, how to set it up, how approvals work, and how it compares with Relevance AI and Grok Bot.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Lindy is",
      points: [
        "One assistant, not an agent builder: the docs describe one Lindy per workspace. It's marketed for many roles, such as paid ads, SEO and content, bookkeeping, recruiting and customer support.",
        "Two ways to use it: privately, as your executive assistant through iMessage, email or Slack DMs, and as a shared teammate your team can @mention in Slack to research, write reports or update a CRM.",
        "It learns: 40+ built-in skills plus your own, an editable memory, and Watch and Learn, where you show it a task once.",
        "It repeats work as routines: each has a trigger (a schedule or an event), a prompt and a destination. Built-in routines cover daily briefs, email drafting and labeling, follow-up bumps, and meeting recording, prep and scheduling.",
        "It picks a model per task, and you can choose the model yourself.",
        "It's hosted: Lindy runs in the cloud and is made by Crivello Corp, doing business as Lindy.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Lindy pricing: credits and seats",
      text: [
        "From lindy.ai/pricing on November 13, 2026. Annual billing isn't shown. Every active user in a workspace is billed, including people who only @mention Lindy in Slack, and monthly credits don't roll over.",
      ],
      headers: ["Option", "Price", "What you get"],
      rows: [
        ["Free start", "$0, no credit card required", "$50 in credits that last 7 days; the free week is one-time per teammate"],
        ["Per active user", "From $29.99/month", "3,000 credits for each active user, pooled across the team"],
        ["Larger credit tiers", "Up to $9,999.50/month", "Up to 1,750,000 credits"],
        ["Top-ups", "$10 per 1,000 credits", "When the pool runs out, credit-using actions pause until the next cycle or a top-up"],
        ["Enterprise", "Custom", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Lindy",
      steps: [
        { title: "Start with free credits", text: "The free start gives $50 in credits that last 7 days, with no credit card required." },
        {
          title: "Choose where you talk to it",
          text: "Slack, email, iMessage and SMS, phone calls, the Chrome extension in Gmail, or Lindy's web Home page, which shows what Lindy has been doing. Microsoft Teams is listed as coming soon.",
        },
        {
          title: "Connect your tools",
          text: "Gmail, Google Calendar, meeting recording on Google Meet, Zoom and Microsoft Teams, MCP servers and saved API credentials.",
        },
        { title: "Teach it how you work", text: "Use the built-in skills, add your own, edit its memory, or show it a task once with Watch and Learn." },
        {
          title: "Set up routines",
          text: "Give each routine a trigger, a prompt and a destination, or start from a built-in one such as a daily brief. Workspace routines run through Slack and only admins can set them up.",
        },
      ],
      source: { label: "Source: Lindy docs", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "How Lindy keeps you in control",
      points: [
        "Anything with outside impact waits for your approval, such as sending an email, updating a ticket, posting to another channel or publishing a doc.",
        "Read-only lookups from approved sources don't need approval.",
        "Admins can cap credits per seat, and only admins set up workspace routines.",
        "When the credit pool runs out, Lindy pauses credit-using actions until the next cycle or a top-up.",
        "Its memory is editable.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI and Grok Bot",
      text: [
        "Facts from each vendor's own site, pricing page and docs, checked November 13, 2026. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker); see also the [Grok Bot guide](/personal-agent/grok-bot).",
        "Side by side: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). Guides: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["Made by", "Crivello Corp (Lindy)", "OnSearch Pty Ltd (Relevance AI)", "xAI"],
        ["What it is", "One hosted assistant per workspace: an executive assistant and a Slack teammate", "A low/no-code platform for building agents and multi-agent Workforces", "Hosted AI teammates: Bots, each with its own cloud computer"],
        ["Several agents", "Not stated; the docs describe one Lindy per workspace", "Yes: agents linked on a visual canvas", "Yes: Bots message each other and coordinate in group chats"],
        ["Where you use it", "Slack, email, iMessage and SMS, phone, Chrome extension, web", "Web app", "macOS and iOS apps, Slack, Microsoft Teams, calls"],
        ["Recurring work", "Routines on a schedule or an event", "Scheduled tasks and app triggers", "Routines on a schedule"],
        ["Approvals", "Anything with outside impact waits for approval", "Approval workflows and escalations by email and Slack", "Bots check in when approval is needed; Auto Review"],
        ["Pricing", "$50 free credits for 7 days; from $29.99/month per active user", "Enterprise plan through sales", "Premium $30, Super $100 or Ultra $200 per month"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Lindy for your inbox. Crewmark for your repository.",
      text: [
        "Lindy works across your inbox, calendar, meetings and Slack. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board, so engineering, SEO and marketing work in a repository gets done on a schedule.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees), such as a software engineer or an SEO specialist." },
        { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Lindy" },
  mid: {
    title: "Want an AI employee for your codebase?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Lindy AI FAQ",
    items: [
      {
        q: "What is Lindy AI?",
        a: "A hosted AI assistant that works across your connected tools. It acts as a personal executive assistant for each user and as a shared teammate in Slack, handling inbox, calendar, meetings, research, reports and follow-ups, and it runs recurring work as routines.",
      },
      {
        q: "How much does Lindy cost?",
        a: "You can start with $50 in credits that last 7 days, with no credit card. After that, every active user in the workspace is billed, from $29.99 a month for 3,000 credits each, pooled across the team. Top-ups are $10 per 1,000 credits, and Enterprise pricing is custom.",
      },
      {
        q: "Is Lindy one agent or many?",
        a: "One. The docs describe one Lindy per workspace, and routines aren't a separate bot. It's marketed for many roles and learns through built-in and custom skills, memory and Watch and Learn, but separate agent personas aren't stated.",
      },
      {
        q: "Is there a Lindy app?",
        a: "You use Lindy through its web Home page, Slack, email, iMessage and SMS, phone calls and a Chrome extension in Gmail. The docs don't describe a desktop or mobile app; Microsoft Teams is listed as coming soon.",
      },
      {
        q: "How do I sign up for Lindy?",
        a: "Start with the free $50 in credits, which need no credit card, last 7 days and are one-time per teammate. After that, every active user takes a paid seat: teammates who join from Slack get a 7-day free trial, and direct sign-ups are billed right away.",
      },
      {
        q: "Does Lindy act without asking?",
        a: "Not for anything with outside impact: sending an email, updating a ticket, posting to another channel or publishing a doc waits for your approval. Read-only lookups from approved sources don't need approval.",
      },
    ],
  },
  cta: {
    title: "Hand your inbox to an assistant. Give your coding agents a job too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against lindy.ai, Lindy's pricing page and Lindy's docs on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Lindy, Relevance AI or xAI. Product names are trademarks of their owners.",
};
