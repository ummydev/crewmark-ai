import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/meta-muse-use-cases, for "meta muse use cases" (best / top / reddit), "muse agent use cases", "what is
// muse used for", "meta muse prompts", "best muse ai prompts", "meta muse tips and tricks", "meta muse small business",
// "meta muse marketing", "meta muse how to make money", "how to use muse ai" and the routine and schedule questions
// Alex asked for (Google autocomplete, 2026-11-10; docs/seo/personal-agent-keywords-2026-11-10.md). What Muse can
// do comes from Meta's newsroom post and Help Center (reminders and scheduled tasks, getting started), checked
// 2026-11-10; the prompts are ours and only ask for things Meta says Muse does (email, browsing, forms, files,
// purchases with approval, reminders). Meta doesn't say Muse can post to social networks, so no prompt asks it to.

const daily = `Every weekday at 7am, send me a brief: my calendar for today,
the three emails that need me first, and anything due this week.

Every Friday at 4pm, list what I said I'd do this week that isn't done,
and draft the follow-up emails for my approval.`;

const marketing = `Every Monday at 9am, check the pricing pages of [competitor 1],
[competitor 2] and [competitor 3]. Tell me what changed since last week,
with links, and save a short report in my Library.

Research the questions people ask about [your topic] on forums and in
search results. Group them into 10 article ideas with a working title each.

Draft three versions of a launch email for [product] in my voice,
using the notes in this file. Don't send anything.`;

const money = `Find out what my 2019 Honda Civic with 60,000 miles is worth,
draft the listing, and tell me which offers are worth answering.

Look at my last three internet bills, find a cheaper plan from my provider
or a competitor, and draft the email asking them to match it.`;

export const metaMuseUseCases: GuideCopy = {
  meta: {
    title: "Meta Muse Use Cases: Prompts, Routines and Ideas",
    description:
      "What to use Meta Muse for, with prompts you can copy: daily routines and recurring tasks, marketing and SEO research, small business admin, saving money, travel and errands, plus tips and what Muse won't do.",
  },
  breadcrumb: "Meta Muse use cases",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Meta Muse",
    title: "Meta Muse use cases: what to hand it, with prompts you can copy",
    lead: "Muse, Meta's personal agent, does more than answer: it sends emails, books travel, fills out forms, buys things with your approval, makes files and runs recurring tasks while the app is closed. The hard part is knowing what to ask. These are the use cases Meta itself points to and the ones that work best for a daily routine, marketing research and small business admin, each with a prompt to start from, plus what Muse isn't built to do.",
    cta: "Get started",
    secondary: "Daily routines",
    secondaryHref: "#daily",
  },
  sections: [
    {
      kind: "text",
      title: "What Muse is good at",
      text: [
        "Meta's own examples are personal and practical: selling a car for more, lowering a bill, adjusting a training plan, turning a saved recipe reel into a grocery list, planning a dinner party around friends' dietary restrictions. They have three things in common, and the best use cases share them.",
      ],
      points: [
        "A goal, not a single answer: Muse turns it into a plan and keeps working on it in the background.",
        "Work across the web and your apps: email, forms, bookings and checkout, from its own cloud browser.",
        "A point where you decide: it comes back for approval before sending or buying, so you stay in charge of anything that matters.",
      ],
    },
    {
      kind: "steps",
      id: "daily",
      title: "Daily routines with Muse",
      text: [
        "Muse runs recurring tasks you set up by asking. Meta's Help Center says they repeat until you cancel them, follow your time zone and arrive as messages in your conversation.",
      ],
      steps: [
        {
          title: "Set the routine in one message",
          text: "Say what to do, how often and when, and what you want back. Muse confirms the schedule before it saves it.",
          code: daily,
        },
        {
          title: "Check what's scheduled",
          text: "Ask “What reminders do I have?” or tap the Assistant icon at the top and open Upcoming.",
        },
        {
          title: "Adjust as you go",
          text: "Tell Muse which task to change, move or cancel, for example “Move my Friday review to Thursday at 3pm”.",
        },
      ],
    },
    {
      kind: "steps",
      id: "marketing",
      title: "Meta Muse for marketing and SEO",
      text: [
        "Muse is a personal agent, not a marketing platform, but research and first drafts suit it well: it can browse, compare, summarize and write files to your Library, on a schedule if you like. Keep publishing in your own hands.",
      ],
      steps: [
        {
          title: "Watch competitors every week",
          text: "Give it the pages to check and the day to do it; ask for what changed, with links.",
          code: marketing,
        },
        {
          title: "Turn questions into content ideas",
          text: "Ask it to collect the questions people ask about your topic and group them into article ideas. Check the ideas against a keyword tool before you write; Muse doesn't show search volumes.",
        },
        {
          title: "Draft, then approve",
          text: "Have it draft emails, posts or briefs from your notes in your voice, and send nothing without you. Meta doesn't say Muse can post to social networks for you.",
        },
      ],
    },
    {
      kind: "text",
      id: "small-business",
      title: "Meta Muse for a small business",
      points: [
        "Inbox triage: a morning list of what needs you, with drafts for the rest. For email you choose read-only or read and send.",
        "Supplier and price checks: compare quotes, track a price and tell you when it drops.",
        "Forms and bookings: fill out registrations, applications and reservations, and stop before submitting if you ask it to.",
        "Purchases: Muse checks out through Link by Stripe with a one-time card, and asks before buying.",
        "Documents: briefs, comparison tables and reports saved to the Library tab.",
        "Keep in mind it's a personal account tool: one person's Meta account, not a shared team workspace.",
      ],
    },
    {
      kind: "steps",
      id: "money",
      title: "Save money (or make some) with Muse",
      text: [
        "Two of Meta's launch examples are about money: selling a car for more and lowering a bill. Both work because Muse can research, draft and negotiate, and checks with you before committing.",
      ],
      steps: [
        {
          title: "Sell something for more",
          text: "Ask it to price the item, draft the listing and sort the offers.",
          code: money,
        },
        {
          title: "Lower a bill",
          text: "Give it your current plan and ask it to find a better one and draft the request.",
        },
        {
          title: "Watch prices",
          text: "Ask it to check a product, flight or hotel price on a schedule and tell you when it falls below a number.",
        },
      ],
    },
    {
      kind: "table",
      id: "more",
      title: "More Meta Muse use cases",
      headers: ["Use case", "Try asking"],
      rows: [
        ["Travel", "“Find three flight and hotel options for [dates] and hold off booking until I pick one.”"],
        ["Errands", "“Turn this saved recipe reel into a grocery list for four people.”"],
        ["Events", "“Plan a dinner for six on Saturday; remember Sam is vegetarian; draft the invites.”"],
        ["Health and fitness", "“Adjust my running plan; I can only train three days a week this month.”"],
        ["Home admin", "“Find a plumber near me with good reviews who can come this week, and draft the message.”"],
        ["Learning", "“Every evening at 8, quiz me on five Spanish phrases from this week.”"],
      ],
    },
    {
      kind: "text",
      id: "tips",
      title: "Tips for better results",
      points: [
        "Describe the outcome and the limits (budget, dates, what not to do), not every step.",
        "Say where it should stop: “draft but don't send”, “compare but don't book”.",
        "Mention preferences once; Muse remembers them across conversations, and you can tell it to forget.",
        "Connect only the apps a task needs, and choose read-only email when drafts are enough.",
        "Watch the weekly limit: long research uses more tokens. Power ($20 a month) has 500M tokens a week.",
        "Check the audit trail of what it did and plans to do; Meta warns it can be inaccurate or take unexpected actions.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "When marketing is a job, not an errand",
      text: [
        "A weekly competitor check is an errand. Growing search traffic is a job: keyword research, pages, indexing and a report against a target, every day. Crewmark turns your own Claude Code or Codex into an AI employee for that kind of job, with a role, a goal in numbers, working hours and a heartbeat.",
      ],
      steps: [
        {
          title: "Hire a marketing role",
          text: "Start from the [AI SEO specialist](/ai-employees/seo-specialist) or the [AI marketing agent](/ai-employees/marketing-agent); each comes with a brief, a goal and a daily routine.",
        },
        {
          title: "Give it the skills",
          text: "Our open-source [marketing skills](/skills) are what our own SEO agent runs every day.",
        },
        {
          title: "Read its daily report",
          text: "It wakes on a heartbeat, works through a board and messages you when it needs a decision. See the [Meta Muse guide](/personal-agent/meta-muse) for the personal side.",
        },
      ],
    },
  ],
  howTo: { section: "daily", name: "Set up a daily routine in Meta Muse" },
  mid: {
    title: "Want marketing done every day, not just researched?",
    text: "Crewmark's AI SEO and marketing employees work through a board on a heartbeat and report back.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is Meta Muse best used for?",
        a: "Goals that need several steps across the web and your apps, with a point where you decide: selling something, lowering a bill, planning travel or an event, triaging email, and recurring checks like a daily brief or a weekly price watch.",
      },
      {
        q: "Can Meta Muse run a task every day?",
        a: "Yes. Ask for a recurring task with the time, such as “Every weekday at 7am, send me a brief”. It repeats until you cancel it, and you'll find it under the Assistant icon, Upcoming.",
      },
      {
        q: "Can I use Meta Muse for marketing or SEO?",
        a: "For research and drafts, yes: competitor checks, content ideas, email and post drafts, saved as files. It doesn't show search volumes, and Meta doesn't say it can post to social networks, so publishing stays with you.",
      },
      {
        q: "Is Meta Muse good for a small business?",
        a: "For one person's admin, such as inbox triage, quotes, forms, bookings and purchases with approval. It runs on a personal Meta account rather than a shared team workspace.",
      },
      {
        q: "Can Meta Muse make me money?",
        a: "It can help: Meta's own examples include selling a car for more and lowering a bill. It researches, drafts and negotiates, and checks with you before committing.",
      },
      {
        q: "What are good Meta Muse prompts?",
        a: "Ones that state the outcome, the limits and where to stop, like “Find three flights under $400 for these dates and ask me before booking”. The prompts on this page are a starting point.",
      },
    ],
  },
  cta: {
    title: "Errands for Muse. A job for an AI employee.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Meta's Muse announcement and Meta Help Center articles on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Meta. Muse and Meta are trademarks of Meta. The prompts on this page are Crewmark's examples, not Meta's.",
};
