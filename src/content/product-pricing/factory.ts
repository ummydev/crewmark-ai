import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/factory, MC-439. For "factory ai pricing" (pricing model, pricing tokens, pricing plan, pricing reddit)
// (Google autocomplete, 2026-11-13); "factory ai cost per token" is answered only as far as the card goes (how usage
// and tokens are billed), since it gives no per-token price. Every fact comes from
// docs/compare/facts/{factory,devin,claude-code,codex,opencode,crewmark}.md (checked 2026-11-13, with a source per
// fact); nothing under a card's "Unverified" is used (so nothing on monthly vs annual billing or launch date).

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI Pricing: Free, Pro $20, Plus, Max and Teams",
    description:
      "Factory AI pricing: Free with your own inference, Pro $20, Plus $100 and Max $200 a month, and Teams. Rate limits, Extra Usage credit and how tokens are billed.",
  },
  breadcrumb: "Factory pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Factory",
    title: "Factory AI pricing: Droid plans, usage limits and tokens",
    lead: "Factory makes Droids, coding agents that run in the Factory App, the Droid CLI, CI and Factory-hosted cloud computers. Its Free plan is $0 if you bring your own inference: sign in with ChatGPT, GitHub Copilot or OpenRouter, or connect your own API keys. Paid plans run from Pro at $20 a month to Max at $200 a month per individual, and Teams is $60 a month per team plus $40 a month per individual. Paid plans have rolling rate limits, and Extra Usage is prepaid credit on top. Here are the plans, how usage and tokens are billed, and how the price compares with Devin, Claude Code, Codex and OpenCode.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Factory plans and prices",
      text: [
        "From [factory.com](https://factory.com) pricing and Factory's pricing docs, checked November 13, 2026. Prices in USD as listed (\"/mo\").",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "Free",
          "$0/mo per individual",
          "Bring your own inference: sign in with ChatGPT, GitHub Copilot or OpenRouter, or connect your own API keys or a custom endpoint",
        ],
        [
          "Pro",
          "$20/mo per individual",
          "Desktop app, CLI and SDK, full model availability; rolling 5-hour, 7-day and 30-day rate limits",
        ],
        ["Plus", "$100/mo per individual", "About 5x the usage of Pro; same rolling rate limits"],
        ["Max", "$200/mo per individual", "About 10x the usage of Pro; same rolling rate limits"],
        ["Teams", "$60/mo per team plus $40/mo per individual", "Up to 10 seats"],
        ["Business and Enterprise", "Contact sales", "On-premise deployment options on Enterprise"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for Factory",
      points: [
        "Inference on Free. The Free plan works with inference you bring: a ChatGPT, GitHub Copilot or OpenRouter sign-in, or your own API keys or custom endpoint. Tokens are billed by that provider or plan.",
        "Standard Usage on paid plans. Pro, Plus and Max each have rolling 5-hour, 7-day and 30-day rate limits. Plus gives about 5x the usage of Pro and Max about 10x. Unused Standard Usage doesn't roll over.",
        "Extra Usage. More usage comes from Extra Usage, a prepaid credit with a $10 minimum and no expiration.",
        "Missions need Extra Usage. Missions, which plan features and milestones, need Extra Usage enabled and pause when they hit a rate limit.",
        "Workstreams use more tokens. Workstreams (beta), on Pro, Plus, Max and Teams, uses more tokens than a single session. It isn't on Business or Enterprise yet.",
        "Models. Factory lists \"all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini\", a \"Droid Core\" pool of open-weight models, and your own API keys or local models (BYOK).",
        "Seats. Pro, Plus and Max are priced per individual. Teams is capped at 10 seats; Business and Enterprise are through sales.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory pricing vs other coding agents",
      text: [
        "Entry prices from each product's own pricing page, checked November 13, 2026, in USD.",
        "Side by side: [Factory vs Claude Code](/compare/factory-vs-claude-code). More options in [Factory alternatives](/alternatives/factory).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        ["Factory", "Free $0 with your own inference; Pro $20/month", "Yes: Free if you bring your own inference"],
        ["[Devin](/pricing/devin)", "Free $0; Pro $20/month", "Yes: Free plan with a light quota"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "In Claude Pro, $20/month or $17/month billed annually",
          "No: not in Claude Free; pay-as-you-go API credits also work",
        ],
        [
          "Codex",
          "In ChatGPT Plus, $20/month; or an OpenAI API key at API pricing",
          "ChatGPT Free ($0) lists GPT-6 Luna in the desktop app, \"subject to rollout\"",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent free; OpenCode Go $10/month, Go Plus $40/month",
          "Yes: the agent (MIT) and free models with a daily request limit",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Keep the subscription you have. Give your agent a role and a board.",
      text: [
        "Factory sells its own agent with plans and usage limits. Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, KPIs and working hours. It wakes on a heartbeat and takes issues from a shared board. Agent usage stays on the Claude or ChatGPT subscription you already pay for, with no separate token bill.",
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
    title: "Factory AI pricing FAQ",
    items: [
      {
        q: "Is Factory AI free?",
        a: "Yes, if you bring your own inference. The Free plan is $0 per individual: sign in with ChatGPT, GitHub Copilot or OpenRouter, or connect your own API keys or a custom endpoint.",
      },
      {
        q: "How much does Factory AI cost per month?",
        a: "Per individual, Pro is $20, Plus $100 and Max $200 a month. Teams is $60 a month per team plus $40 a month per individual, for up to 10 seats. Business and Enterprise are priced through sales.",
      },
      {
        q: "What is Factory AI's pricing model?",
        a: "A plan per individual with Standard Usage under rolling 5-hour, 7-day and 30-day rate limits, plus optional Extra Usage: prepaid credit with a $10 minimum that doesn't expire. Unused Standard Usage doesn't roll over.",
      },
      {
        q: "How does Factory AI charge for tokens?",
        a: "On Free, tokens are billed by the account or API key you bring. On Pro, Plus and Max, model use counts against your plan's Standard Usage and its rate limits, and Extra Usage is the prepaid credit for more. Workstreams uses more tokens than a single session.",
      },
      {
        q: "Does Factory AI have enterprise pricing?",
        a: "Business and Enterprise are through sales, with no price listed. Enterprise offers on-premise deployment options. Teams, at $60 a month plus $40 per individual, is capped at 10 seats.",
      },
      {
        q: "Is Factory AI open source?",
        a: "No. No source code or open-source license is published for the Droid CLI or the Factory App; github.com/Factory-AI/factory holds a README and docs. Open-source options are in [Factory alternatives](/alternatives/factory).",
      },
    ],
  },
  cta: {
    title: "Compare the price. Then give your agent a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against factory.com/pricing and Factory's pricing docs on November 13, 2026. Other products' prices are from their own pricing pages on the same date.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Factory or any other company named on this page. Product names are trademarks of their owners.",
};
