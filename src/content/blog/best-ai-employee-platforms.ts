import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/best-ai-employee-platforms (MC-40), for "best ai employee platform", "ai employees for business", "ai
// employees for small business", "ai employees free", "ai employee free trial", "ai employees github", "hire ai
// employees" and "hire ai workers" (Google autocomplete, 2026-11-06). Every product fact comes from the vendor's own
// site or pricing page, fetched on 2026-11-06 (`checked`); prices change, so each row links its source in the copy
// below. Left out: Motion (its pages don't use the term "AI employees"), 11x (calls them agents, no public price) and
// Relevance AI (only an enterprise plan was visible). Marblism's money-back period is stated two ways on its own
// page, so it isn't quoted. Crewmark is listed with the same fields as everyone else and no superlatives.

export const bestAiEmployeePlatforms: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Best AI Employee Platforms in 2026: 8 Compared, with Prices | Crewmark",
      description:
        "Lindy, Sintra, Marblism, Artisan, Ema, Devin, the open-source ai-employees project and Crewmark compared: roles, how work starts, which models they run on, free plans and prices.",
    },
    breadcrumb: "Best AI employee platforms",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · AI employees",
      title: "The best AI employee platforms in 2026, compared",
      lead: "An AI employee platform gives you AI agents set up as staff: each has a role, works toward a goal, and starts work without being prompted every time. The products below all sell that idea, but differ in which jobs they cover, how work reaches them, which models they run on and how they charge. We compared eight, including our own, using only what each vendor publishes.",
      cta: "Get early access",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "AI employee platforms at a glance",
        text: [
          "Prices are the entry plans listed on each vendor's pricing page on November 6, 2026, in US dollars. For what an AI employee is and how it differs from an AI agent, see [what is an AI employee](/ai-employees).",
        ],
        headers: ["Platform", "Best for", "How work starts", "Runs on", "Free option", "Paid from"],
        rows: [
          ["Lindy", "Office work across ~17 functions: inbox, calendar, sales, support, recruiting", "Schedules (Routines), Slack and iMessage, phone calls", "Lindy's choice of major models", "Free: $50 in credits for 7 days", "$49.99/mo per user (Team)"],
          ["Sintra", "Small businesses: 12+ named helpers for support, copy, SEO, social, sales", "You chat with a helper or run a one-click task", "Sintra's models (based on Claude Sonnet)", "No free plan", "$48.50/mo, or less on a yearly plan"],
          ["Marblism", "Small businesses: 7 roles from assistant to receptionist and legal", "You set a goal; they work toward it daily and ask for approval", "Not stated", "No free plan", "$24/mo yearly, $44 monthly"],
          ["Artisan (Ava)", "Outbound sales: an AI business development rep", "Autonomous, with approval and escalation rules", "Not stated", "Not stated", "Credit plans; book a demo"],
          ["Ema", "Enterprise HR, IT and finance", "Teams, Slack or voice; 250+ integrations", "Ema's mix of 100+ models", "Free trial", "Outcome-based; not listed"],
          ["Devin", "Software engineering", "@mention in Slack or Teams, tickets from Linear or Jira, recurring workflows", "Devin's models (several providers)", "Free plan with a light quota", "$20/mo (Pro)"],
          ["ai-employees (open source)", "8 business roles as folders of scheduled routines", "Schedules in each role's SCHEDULE.md", "Your own agent: Claude Code, Codex, OpenCode and others", "Free, MIT license", "Free"],
          ["Crewmark", "Any role you define, on coding agents: engineering, SEO, marketing, design", "A heartbeat wakes each employee during working hours to take the next issue from a board", "Your own Claude Code, Codex, DeepSeek Harness or OpenCode subscription", "Early access", "Early access"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose an AI employee platform",
        steps: [
          {
            title: "Start from the job, not the tool",
            text: "Write down one role and the number it should move, such as booked meetings, Search Console clicks or merged pull requests. Platforms built for one job (Artisan for outbound sales, Devin for code) usually beat general ones at that job.",
          },
          {
            title: "Check how work starts",
            text: "A chat assistant waits for you; an AI employee starts on its own. Look for schedules, triggers or a heartbeat, and for a place to assign work, such as a board, tickets or a Slack channel.",
          },
          {
            title: "Check whose models and whose bill",
            text: "Most platforms resell model usage as credits or seats. If you already pay for Claude Code or Codex, tools that run on that subscription (the open-source ai-employees project, Crewmark) add little or no model cost.",
          },
          {
            title: "Check how it asks before acting",
            text: "An employee that sends emails, posts or spends money should ask first. Look for approvals, escalation rules and a log of what it did.",
          },
          {
            title: "Try one role for two weeks",
            text: "Use the free plan or trial where there is one, measure the number you wrote down, and only then add roles.",
          },
        ],
      },
      {
        kind: "text",
        title: "The platforms in more detail",
        points: [
          "Lindy: sold as \"the teammate that punches above its price\". Routines run on a schedule, you can message it in Slack or iMessage, and \"Watch and Learn\" records a task you show it once. Pricing: [lindy.ai/pricing](https://www.lindy.ai/pricing).",
          "Sintra: 12+ helpers with names, such as Cassie for support, Seomi for SEO and Soshie for social media, each working as a chatbot you talk to. A single helper costs $39/mo. Pricing: [sintra.ai/pricing](https://sintra.ai/pricing).",
          "Marblism: seven AI employees (Eva, Sonny, Stan, Walter, Penny, Rachel and Linda) that \"work toward it every day, on their own\" once you set a goal; plans include 50 hours of AI work a month. Pricing: [marblism.com/pricing](https://www.marblism.com/pricing).",
          "Artisan: \"AI employees for go-to-market teams\". Ava finds leads, enriches them, writes outreach, handles replies and books meetings, with human approvals. See [artisan.co](https://www.artisan.co).",
          "Ema: a \"Universal AI Employee\" you configure by describing its goal in plain language, for HR, IT, finance and more. See [ema.ai](https://www.ema.ai).",
          "Devin: \"your team's autonomous software engineer\". Assign it a ticket and get a pull request; Max is $200/mo and Teams $80/mo plus $40 per seat. Pricing: [devin.ai/pricing](https://devin.ai/pricing).",
          "ai-employees: an MIT-licensed GitHub project where \"an AI Employee is a folder of scheduled routines that covers one business role\", run by the coding agent you already have. See [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).",
          "Crewmark: turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an employee with a role, a goal, working hours and a board of issues; it comments on its issues and messages you when it needs a decision. See [how to make Claude Code proactive](/proactive-claude-code).",
        ],
      },
      {
        kind: "text",
        title: "Free AI employees, and open-source ones on GitHub",
        text: [
          "Free plans exist but are small: Lindy gives $50 in credits for seven days, Devin a light quota, and Ema a trial. The open-source route is free in money and paid in setup time: projects on GitHub such as markfulton/ai-employees run on an agent subscription you already have, and on a Claude Pro or Max plan they use your plan's limits rather than extra dollars.",
          "If you're comparing open-source agent frameworks rather than ready-made employees, see our comparisons with [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip) and [Multica](/alternatives/multica).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "AI employees on the coding agent you already pay for",
        text: [
          "Crewmark is for teams whose work already runs through Claude Code or Codex. Instead of buying a new AI and its credits, you give your existing agent a job.",
        ],
        steps: [
          {
            title: "Pick a role and a goal",
            text: "Software engineer, SEO specialist, growth marketer or one you write yourself, with a goal written as a number.",
          },
          {
            title: "Connect a session",
            text: "Run one setup command in your project; the employee runs in a Claude Code, Codex, DeepSeek Harness or OpenCode session on your machine, on your plan.",
          },
          {
            title: "Assign issues; the heartbeat does the rest",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes, takes the next issue, comments as it goes and messages you when it needs a decision.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose an AI employee platform" },
    mid: {
      title: "Already paying for Claude Code or Codex?",
      text: "Crewmark turns it into AI employees with roles, goals, working hours and a board of issues, without a second AI bill.",
      button: "Get early access",
    },
    faq: {
      title: "AI employee platforms FAQ",
      items: [
        {
          q: "What is the best AI employee platform?",
          a: "It depends on the job. For office work across many functions, Lindy; for small-business marketing and support, Sintra or Marblism; for outbound sales, Artisan; for enterprise HR and IT, Ema; for code, Devin; and if you already use Claude Code or Codex, the open-source ai-employees project or Crewmark.",
        },
        {
          q: "Are there free AI employees?",
          a: "Some platforms have small free plans or trials: Lindy ($50 in credits for 7 days), Devin (a light quota) and Ema (a trial). Open-source projects such as markfulton/ai-employees are free and run on an agent subscription you already have.",
        },
        {
          q: "How much does an AI employee cost?",
          a: "Entry plans on November 6, 2026 ranged from about $20 a month (Devin Pro) to $49.99 per user (Lindy Team), with sales-led pricing for Artisan and Ema. Tools that run on your own Claude Code or Codex plan add little or no model cost.",
        },
        {
          q: "What's the difference between an AI employee and an AI agent?",
          a: "An AI agent does a task when asked. An AI employee is an agent given a role, a goal and a schedule, so it starts work on its own and keeps going. More in [what is an AI employee](/ai-employees).",
        },
        {
          q: "Can a small business use AI employees?",
          a: "Yes. Sintra and Marblism are built for small businesses, with named employees for support, social media, SEO and sales, and prices from about $24 to $49 a month.",
        },
        {
          q: "Are there open-source AI employees on GitHub?",
          a: "Yes. markfulton/ai-employees (MIT) packages 8 business roles as scheduled routines for Claude Code, Codex, OpenCode and other agents; others include OpenCompany and eggent.",
        },
        {
          q: "How do I hire an AI employee?",
          a: "Pick one role and a number it should move, choose a platform that starts work on its own and asks before risky actions, run it for two weeks, and keep it only if the number moves.",
        },
      ],
    },
    cta: {
      title: "Give the agent you already pay for a job.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against each vendor's own website and pricing page on November 6, 2026. Prices change; follow the links for current ones.",
    disclaimer:
      "Crewmark is one of the products compared. Product names are trademarks of their owners; no vendor reviewed or endorsed this page.",
  },
};
