import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/hermes-agent, MC-439. For "hermes agent pricing" and "hermes agent pricing plan" (Google autocomplete,
// 2026-11-13); "hermes products price" is skipped (it's about Hermès, not the agent). Every fact comes from
// docs/compare/facts/{hermes-agent,openclaw,opencode,openworker,grok-bot,crewmark}.md (checked 2026-11-13, with a
// source per fact); nothing under a card's "Unverified" is used, so the page doesn't say which Nous Portal tiers
// include hosted tools or how many models the Portal has.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent Pricing: Free Agent and Nous Portal Plans",
    description:
      "Hermes Agent is free and MIT-licensed. The optional Nous Portal costs $0, $20, $100 or $200 a month. What each tier includes and what you pay on top.",
  },
  breadcrumb: "Hermes Agent pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Nous Research",
    title: "Hermes Agent pricing: a free agent, and an optional Nous Portal subscription",
    lead: "Hermes Agent is free: Nous Research publishes it under the MIT license, and you pay your model provider. If you'd rather get models from Nous, the optional Nous Portal has four tiers: Free at $0, Plus at $20 a month, Super at $100 and Ultra at $200, and the paid ones include a cloud-hosted agent. Here's what each tier includes, what you pay on top, and how it compares with OpenClaw, OpenCode, OpenWorker and Grok Bot.",
    cta: "Get started",
    secondary: "See the plans",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Hermes Agent and Nous Portal plans",
      text: [
        "From hermes-agent.nousresearch.com and portal.nousresearch.com, checked November 13, 2026. Prices are per month; no annual price is listed. You don't need a Nous Portal plan to use the agent.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "Hermes Agent",
          "Free, MIT license",
          "The agent: terminal UI, desktop app, chat apps through one gateway, skills, memory, a cron scheduler and Bot Mode. Bring any model provider",
        ],
        ["Nous Portal Free", "$0", "Pay as you go; free models only"],
        ["Nous Portal Plus", "$20/month", "Free and paid models; one cloud-hosted agent (4 GB RAM, 25 GB disk)"],
        [
          "Nous Portal Super",
          "$100/month",
          "5× Plus usage; free and paid models; one cloud-hosted agent (4 GB RAM, 100 GB disk)",
        ],
        [
          "Nous Portal Ultra",
          "$200/month",
          "10× Plus usage; free and paid models; one cloud-hosted agent (8 GB RAM, 100 GB disk)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay to run Hermes Agent",
      points: [
        "Your model provider. You switch providers with `hermes model`: Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, custom endpoints and more. With an API key, that provider bills you.",
        "A Claude subscription works only on Claude Max with purchased extra usage. The docs say \"Claude Pro subscribers cannot use this path,\" so on Pro you need an API key.",
        "ChatGPT/Codex sign-in works by device code. Which ChatGPT plans work, and how usage counts against plan limits, is \"not currently documented.\"",
        "Somewhere to run it. Hermes Agent installs locally, or on a server: the README names \"a $5 VPS, a GPU cluster, or serverless infrastructure\". Its six terminal backends are local, Docker, SSH, Modal, Daytona and Vercel Sandbox.",
        "Or a paid Nous Portal tier, which includes one cloud-hosted agent (sizes in the table above).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent pricing vs similar agents",
      text: [
        "Prices from each product's own site, checked November 13, 2026.",
        "Side by side: [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). More options in [Hermes Agent alternatives](/alternatives/hermes-agent).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        [
          "Hermes Agent",
          "Free; optional Nous Portal Plus $20/month",
          "Yes: the agent (MIT), and Nous Portal Free at $0",
        ],
        ["[OpenClaw](/pricing/openclaw)", "Free; you pay your model provider", "Yes: the whole project (MIT)"],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent free; OpenCode Go $10/month, Go Plus $40/month",
          "Yes: free models with a daily request limit, no account needed",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "No price listed; your own model key or a local model",
          "Yes: the app (MIT)",
        ],
        [
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium $30/month; Super $100, Ultra $200",
          "None listed",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Hermes Agent is your personal agent. Crewmark runs a team of coding agents.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, goals and working hours. It wakes on a heartbeat and takes issues from a shared board. The agents run on the Claude or ChatGPT subscription you already pay for, with no separate token bill.",
        "Crewmark's prices: Free at $0 (1 project, up to 3 AI employees, 1 person). Pro at $5/month and Team at $10/month are coming soon. Billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0) and can be self-hosted.",
      ],
      steps: [
        { title: "Pick a role", text: "From the [AI employee roles](/ai-employees), with goals in numbers." },
        {
          title: "Put the work on a board",
          text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one.",
        },
        {
          title: "See the plans",
          text: "[Crewmark pricing](/pricing), and what agents do with it in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Want agents that keep working on a job?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Hermes Agent pricing FAQ",
    items: [
      {
        q: "Is Hermes Agent free?",
        a: "Yes. The agent is open source under the MIT license. You pay your model provider, or optionally subscribe to the Nous Portal.",
      },
      {
        q: "How much does Hermes Agent cost per month?",
        a: "The agent costs $0. The optional Nous Portal is Free at $0, Plus at $20 a month, Super at $100 (5× Plus usage) and Ultra at $200 (10× Plus usage). No annual price is listed.",
      },
      {
        q: "Do I need a Nous Portal subscription to use Hermes Agent?",
        a: "No. Nous Portal is one of many providers you can pick with `hermes model`, next to OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, local models and custom endpoints.",
      },
      {
        q: "Can I use my Claude subscription with Hermes Agent?",
        a: "Only on Claude Max with purchased extra usage. The docs say Claude Pro subscribers can't use the subscription path, so on Pro you need an API key.",
      },
      {
        q: "Does a Hermes Agent pricing plan include hosting?",
        a: "The paid Nous Portal tiers include one cloud-hosted agent: 4 GB RAM and 25 GB disk on Plus, 4 GB and 100 GB on Super, 8 GB and 100 GB on Ultra. Otherwise you run it on your own machine or server.",
      },
      {
        q: "Can I use my ChatGPT subscription with Hermes Agent?",
        a: "ChatGPT/Codex sign-in works by device code, but the docs say which ChatGPT plans work, and how usage counts against plan limits, is not currently documented.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents a role and a schedule.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against hermes-agent.nousresearch.com, portal.nousresearch.com, the Hermes Agent docs and GitHub README, and each compared product's own pricing page, on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Nous Research or any other company named on this page. Product names are trademarks of their owners.",
};
