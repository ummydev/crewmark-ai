import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/meta-muse, for "meta muse" (Bing: about 63.7k impressions in three months), "muse meta", "meta muse
// ai", "muse ai agent", "muse from meta", "what is meta muse", "how to use muse", "meta muse how to use / get /
// access / download / opt out / turn off", "meta muse pricing (plans, tiers, per month)", "meta muse free tier",
// "muse app download windows / pc", "meta muse not working", "meta muse vs claude / grok bot / chatgpt / dots / gemini
// spark" (Google autocomplete and Bing keyword research, 2026-11-10; docs/seo/personal-agent-keywords-2026-11-10.md).
// Facts come from Meta's newsroom post (about.fb.com/news/2026/09/introducing-muse-personal-ai-agent) and Meta Help
// Center articles on getting started, subscriptions, and reminders and scheduled tasks, checked 2026-11-10. Meta lists
// iOS, Android and muse.ai, not a Windows or Mac app, so the copy points desktop users to muse.ai.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `Every weekday at 7am, send me a short brief: today's calendar,
anything urgent in my inbox, and the weather.

Find three flights to Chicago for the first weekend of December under $400,
compare them, and ask me before you book anything.

I want to sell my car. Research what it's worth, draft the listing,
and tell me which offers are worth answering.`;

export const metaMuse: GuideCopy = {
  meta: {
    title: "Meta Muse: What It Is, How to Use It and Pricing",
    description:
      "Meta's Muse personal AI agent explained: what it does, how to get it and use it, Free, Power ($20) and Maximum ($100) plans, scheduled tasks, connected apps and payments, privacy settings, and how it compares.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Meta Muse",
    title: "Meta Muse: what Meta's personal agent does, how to use it and what it costs",
    lead: "Muse is Meta's personal AI agent, launched in the US on September 8, 2026. Meta says it “doesn't just answer questions, it actually does the work”: it sends emails, books travel, fills out forms and negotiates for you, keeps working after you close the app, and asks before anything important like sending an email or buying something. This guide covers how to get it, how to use it, the plans and token limits, scheduled tasks, privacy settings and how it compares with Grok Bot, ChatGPT dots and Claude.",
    cta: "Get started",
    secondary: "How to use it",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Meta Muse is",
      text: [
        "Muse runs on Muse Spark, Meta's model, inside a dedicated cloud machine Meta calls the Muse Secure VM. It turns goals into plans and works on them in the background, coming back when something changes or when it needs your approval.",
      ],
      points: [
        "It acts: sends emails, books travel, opens a browser, fills out forms and negotiates. Meta's examples include selling a car for more, lowering a bill and adjusting a training plan.",
        "It remembers: what matters to you, from details you mention once, and makes suggestions without being asked, like turning a saved Instagram recipe reel into a grocery list.",
        "It buys safely: checkout goes through Link by Stripe, whose agent wallet creates a one-time card so Muse never sees your real card number.",
        "It's where you are: in the Muse app, on the web at muse.ai, and in WhatsApp; Meta's AI glasses are next.",
        "It's not the same as Meta AI, the assistant in Facebook, Instagram and WhatsApp, or Muse Code, Meta's developer product.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Meta Muse pricing: Free, Power and Maximum",
      text: [
        "From Meta's Help Center on November 10, 2026. Muse and its subscriptions are in limited testing and not available everywhere yet.",
      ],
      headers: ["Plan", "Price", "Weekly usage"],
      rows: [
        ["Free", "$0", "A free weekly usage limit (Meta doesn't publish its size); wait for it to reset or upgrade"],
        ["Power", "$20 a month", "500M Muse tokens a week"],
        ["Maximum", "$100 a month", "3B Muse tokens a week"],
        ["Extra tokens", "Sold separately", "Buy more on top of your weekly allowance"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to get and use Meta Muse",
      text: [
        "You need to be 18 or the age of majority where you live, be somewhere Muse is available (it launched in the US) and sign in with a Meta account. You can create one with Facebook, Instagram, an email address or a phone number.",
      ],
      steps: [
        {
          title: "Download it or open muse.ai",
          text: "Get the Muse app on iOS or Android, or sign in at muse.ai. Meta doesn't list a Windows or Mac app, so on a computer use muse.ai in your browser.",
        },
        {
          title: "Tell it what you need",
          text: "Muse opens on the Chat tab. Describe the outcome, not the steps; it may ask a few questions first. You can send follow-ups without waiting and without repeating context.",
          code: prompts,
        },
        {
          title: "Connect the apps it needs",
          text: "Choose which apps Muse can use and how much access each gets; for email, read only or read and send. Coming soon: Shop Pay at checkout and 1Password so it can use your existing logins.",
        },
        {
          title: "Approve, review and find your files",
          text: "Muse asks before sensitive actions such as sending an email or making a purchase, and keeps an audit trail of what it did and plans to do. Files it makes are saved in the Library tab.",
        },
      ],
      source: { label: "Source: Meta's announcement of Muse", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Reminders and scheduled tasks in Muse",
      text: [
        "Muse doesn't have a separate scheduler screen: you set reminders and recurring tasks by asking, and Meta's Help Center explains how they behave.",
      ],
      points: [
        "One-time: tell Muse what to remind you about and when; it confirms the exact time.",
        "Recurring: describe the task and how often, for example “Every Monday at 9am, remind me to submit my timesheet”. It runs until you cancel it, and Muse messages you each time.",
        "Find them: ask “What reminders do I have?”, or tap the Assistant icon at the top and open Upcoming.",
        "Change or cancel: say which one and what to change, such as moving a Monday reminder to Tuesday.",
        "Times follow your time zone; if you pick a time that's passed, Muse suggests another.",
        "More ideas for daily routines are in [Meta Muse use cases](/personal-agent/meta-muse-use-cases).",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "Privacy: how to opt out and what Meta can see",
      points: [
        "Each person's Muse runs in its own Muse Secure VM; other people's agents can't reach it.",
        "A separate agent, Sentinel, has to approve anything Muse sends to the internet and asks you when needed.",
        "Muse can't see your passwords or payment methods; shared logins go into secure storage.",
        "Your conversations and VM data aren't shared with Meta's ad systems.",
        "You can opt out of your interactions being used to train Meta's AI, change or disconnect any app, and tell Muse to forget something.",
        "Meta plans a Muse Confidential VM later this year, encrypted with a key only you hold.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse not available or not working?",
      points: [
        "Outside the US: Muse launched in the US and is in limited testing elsewhere; Meta says it isn't available in all locations yet.",
        "Under 18: you need to be 18 or the age of majority in your country.",
        "Hit the free limit: wait for the weekly limit to reset, upgrade to Power or Maximum, or buy extra tokens.",
        "No voice mode: voice is available only in some countries and needs microphone access, which you can change in Settings > Voice and Avatar.",
        "It did something unexpected: Meta warns that Muse may be inaccurate or take unexpected actions, so keep approvals on for sending and buying, and check the audit trail.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs Grok Bot, ChatGPT dots and Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Made by", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["Built for", "Everyday tasks and life admin", "Work: teams of Bots in your apps", "Long-running goals inside ChatGPT", "A proactive Claude that checks in"],
        ["Cheapest way in", "Free with a weekly limit", "Free trial credit; X Premium and up", "ChatGPT Pro", "Claude Pro, by waitlist"],
        ["Schedules", "Reminders and recurring tasks", "Routines with schedules, Slack, email and webhooks", "Scheduled reminders and recurring checks", "Comes to you with what needs attention"],
        ["Guide", "This page", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Muse runs your errands. Who runs your backlog?",
      text: [
        "Muse is built for life admin. If the work you want handed off lives in a code repository or a marketing plan, Crewmark turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat, which takes the next issue from a board and messages you when it needs a decision.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from an [AI employee role](/ai-employees), such as an SEO specialist or a social media manager.",
        },
        {
          title: "Give it hours and a heartbeat",
          text: "It wakes every 15 to 240 minutes during the hours you set. See [how to make Claude Code proactive](/proactive-claude-code).",
        },
        {
          title: "Compare personal agents",
          text: "See [personal AI agents compared](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Get started with Meta Muse" },
  mid: {
    title: "Want an agent that works through your work backlog?",
    text: "Crewmark employees wake on a heartbeat and take the next issue from a board, on the Claude Code or Codex plan you have.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is Meta Muse?",
        a: "Meta's personal AI agent, launched in the US on September 8, 2026 and powered by the Muse Spark model. It sends emails, books travel, fills out forms and makes purchases for you from its own cloud machine, and asks before sensitive actions.",
      },
      {
        q: "Is Meta Muse free?",
        a: "Yes, with a weekly usage limit. Power is $20 a month for 500M Muse tokens a week and Maximum is $100 a month for 3B, and you can buy extra tokens.",
      },
      {
        q: "How do I get Meta Muse?",
        a: "Download the Muse app on iOS or Android or go to muse.ai, and sign in with a Meta account. You need to be 18 or the age of majority and somewhere Muse is available; it launched in the US.",
      },
      {
        q: "Can I use Meta Muse on Windows or Mac?",
        a: "Meta lists the iOS and Android apps and muse.ai. On a Windows PC or Mac, use muse.ai in your browser.",
      },
      {
        q: "Can Muse do tasks on a schedule?",
        a: "Yes. Ask it for a recurring task, such as “Every Monday at 9am, remind me to submit my timesheet”; it runs until you cancel it, and you'll find it under the Assistant icon, Upcoming.",
      },
      {
        q: "Does Meta use my Muse conversations for ads?",
        a: "Meta says conversations and VM data aren't shared with its ad systems. You can also opt out of your interactions being used to train Meta's AI models.",
      },
    ],
  },
  cta: {
    title: "Personal agents run errands. AI employees run your backlog.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Meta's Muse announcement and Meta Help Center articles on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Meta, xAI, OpenAI or Anthropic. Muse, Meta and WhatsApp are trademarks of Meta.",
};
