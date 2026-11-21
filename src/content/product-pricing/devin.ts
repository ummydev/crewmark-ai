import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/devin, MC-439. For "devin pricing" (pricing plans, pricing model, pricing ai) (Google autocomplete,
// 2026-11-13); "devin pricing india", "devin pricing acu" and "devin review pricing" are skipped because the card gives
// no India prices, doesn't mention ACUs and has no price for Devin Review. Every fact comes from
// docs/compare/facts/{devin,factory,claude-code,codex,cursor-projects,crewmark}.md (checked 2026-11-13, with a source
// per fact); nothing under a card's "Unverified" is used (so no annual billing and no per-plan concurrency limits).

export const copy: GuideCopy = {
  meta: {
    title: "Devin Pricing 2026: Free, Pro $20, Max $200 and Teams",
    description:
      "Devin pricing: Free at $0, Pro $20 a month, Max $200, Teams and Enterprise. How quotas, on-demand credits and seats work, and how Devin compares on price.",
  },
  breadcrumb: "Devin pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Cognition",
    title: "Devin pricing: every plan, and what you pay beyond it",
    lead: "Devin, Cognition's AI software engineer, has a Free plan at $0 with a light quota. Pro is $20 a month and Max $200 a month, both for one user. Teams is listed as \"$80/month for team plan + $40/mo per full dev seat\", and Enterprise is through sales. Each self-serve plan comes with a daily and/or weekly quota; past it, you pay with prepaid on-demand credits. Here are the plans, the extra costs, and how Devin's price compares with Factory, Claude Code, Codex, Cursor Projects and Crewmark.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Devin plans and prices",
      text: [
        "From [devin.ai](https://devin.ai) pricing and Devin's billing docs, checked November 13, 2026. Prices in USD.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        ["Free", "$0", "A light quota and limited model availability"],
        [
          "Pro",
          "$20 per month",
          "Devin Cloud, full model availability, extra usage at API pricing; one user",
        ],
        ["Max", "$200 per month", "Higher quotas; one user"],
        [
          "Teams",
          "\"$80/month for team plan + $40/mo per full dev seat\"",
          "Up to 100 users; a \"Free mode\" (SWE-2) with up to 2 concurrent cloud sessions per member",
        ],
        ["Enterprise", "\"Let's talk\"", "VPC and dedicated deployment"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for Devin",
      points: [
        "A quota first. Devin's self-serve plans use a daily and/or weekly quota.",
        "Then prepaid credits. Usage beyond the quota draws on prepaid on-demand credits. On Pro, extra usage is billed at API pricing.",
        "Your ChatGPT plan for GPT models. Pro, Max and Teams can use a linked ChatGPT plan for GPT model usage.",
        "Models by plan. Free has limited model availability; Pro has full model availability. Devin uses Cognition's SWE-2 plus \"frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models\", and an Adaptive router picks a model per task.",
        "Seats. Pro and Max are single-user plans. Teams allows up to 100 members, and larger teams are pointed to Enterprise.",
        "Credits on Teams. On Teams, Automations stop when the shared on-demand credits run out.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin pricing vs other coding agents",
      text: [
        "Entry prices from each product's own pricing page, checked November 13, 2026, in USD. Plans that don't include model usage leave it to your model provider.",
        "Side by side: [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). More options in [Devin alternatives](/blog/devin-alternatives).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        ["Devin", "Free $0; Pro $20/month", "Yes: Free plan with a light quota"],
        [
          "[Factory](/pricing/factory)",
          "Free $0 with your own inference; Pro $20/month",
          "Yes: Free if you bring your own inference",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "In Claude Pro, $20/month or $17/month billed annually",
          "No: not in Claude Free; pay-as-you-go API credits also work",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "In ChatGPT Plus, $20/month; or an OpenAI API key at API pricing",
          "ChatGPT Free ($0) lists GPT-6 Luna in the desktop app, \"subject to rollout\"",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/month, or $300/year",
          "No: not on Free, Plus or legacy Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0; Pro $5/month coming soon",
          "Yes: 1 project, up to 3 AI employees; agent usage paid to your provider",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Already paying for Claude Code or Codex? Give it a job and a board.",
      text: [
        "Devin is its own agent, billed by plan quota and credits. Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, KPIs and working hours. It wakes on a heartbeat and takes issues from a shared board. Agent usage stays on the Claude or ChatGPT subscription you already pay for.",
        "Crewmark's prices: Free at $0 (1 project, up to 3 AI employees, 1 person). Pro at $5/month and Team at $10/month are coming soon. Billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0) and can be self-hosted.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "From the [AI employee roles](/ai-employees), such as Software Engineer, SEO Specialist or Data Analyst.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one.",
        },
        {
          title: "See the plans",
          text: "[Crewmark pricing](/pricing), and jobs with setup in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Already paying for Claude or ChatGPT?",
    text: "Crewmark turns your Claude Code or Codex into AI employees with roles, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Devin pricing FAQ",
    items: [
      {
        q: "Is Devin free?",
        a: "There's a Free plan at $0 with a light quota and limited model availability. Pro, at $20 a month, adds Devin Cloud and full model availability.",
      },
      {
        q: "How much does Devin cost per month?",
        a: "Pro is $20 a month and Max $200 a month, both for one user. Teams is listed as \"$80/month for team plan + $40/mo per full dev seat\", for up to 100 users. Enterprise is \"Let's talk\". Prices are in USD.",
      },
      {
        q: "What is Devin's pricing model?",
        a: "A plan with a daily and/or weekly quota, plus prepaid on-demand credits for usage beyond it. On Pro, extra usage is billed at API pricing. Teams adds a team fee and a fee per full dev seat.",
      },
      {
        q: "How do Devin's Teams and Enterprise plans work?",
        a: "Teams allows up to 100 members, and its Automations stop when the shared on-demand credits run out. Larger teams are pointed to Enterprise, which is priced through sales and offers VPC and dedicated deployment.",
      },
      {
        q: "Can I use my ChatGPT plan with Devin?",
        a: "Yes, on Pro, Max and Teams. A linked ChatGPT plan covers GPT model usage.",
      },
      {
        q: "Is Devin open source?",
        a: "No. No source code or open-source license is published for Devin; github.com/CognitionAI/devin-cli holds install packaging, docs and scripts. Open-source options are in [Devin alternatives](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Compare the price. Then give your agent a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against devin.ai/pricing and Devin's billing docs on November 13, 2026. Other products' prices are from their own pricing pages on the same date.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Cognition or any other company named on this page. Product names are trademarks of their owners.",
};
