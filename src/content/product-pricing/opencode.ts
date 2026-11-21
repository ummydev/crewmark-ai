import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/opencode, MC-439. For "opencode pricing" (pricing model, pricing plan, pricing per model, pricing reddit)
// (Google autocomplete, 2026-11-13); "opencode pricing zen" is skipped because the card doesn't name Zen, and OpenCode
// Teams isn't priced because its price is under "Unverified". Every fact comes from
// docs/compare/facts/{opencode,claude-code,codex,hermes-agent,openclaw,crewmark}.md (checked 2026-11-13, with a
// source per fact); nothing under a card's "Unverified" is used.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode Pricing: Free Agent, Go $10, Go Plus $40 (2026)",
    description:
      "OpenCode pricing: the MIT agent is free, with free models. OpenCode Go is $10 a month, Go Plus $40, or pay as you go per million tokens or with your own keys.",
  },
  breadcrumb: "OpenCode pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · OpenCode",
    title: "OpenCode pricing: a free agent, and four ways to pay for models",
    lead: "OpenCode is a free, open-source (MIT) coding agent. It comes with free models that need no account, within a daily request limit. Beyond that you pay for models, not the agent: OpenCode Go at $10 a month or Go Plus at $40 a month, pay-as-you-go models billed per million tokens, or a plan or API key you already have, such as ChatGPT Plus or Pro or GitHub Copilot. Enterprise is through sales. Here's each option, what it costs, and how OpenCode compares with Claude Code, Codex, Hermes Agent and OpenClaw.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenCode plans and prices",
      text: [
        "From [opencode.ai](https://opencode.ai) and its console pages for Go, models and Enterprise, checked November 13, 2026. Prices in USD.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "OpenCode (open source)",
          "Free, MIT license",
          "The agent as a terminal UI, desktop app, web app and SDK; models from 200+ providers, including local models",
        ],
        ["Free models", "$0, no account needed", "A set of free models with a daily request limit"],
        [
          "OpenCode Go",
          "$10/month",
          "Curated models with 5-hour, weekly and monthly allowances; credit top-ups; cancel any time",
        ],
        [
          "Go Plus",
          "$40/month",
          "Curated models with 5-hour, weekly and monthly allowances; credit top-ups; cancel any time",
        ],
        ["Pay as you go", "Per million tokens", "Models billed from your balance as you use them"],
        [
          "Your own plan or keys",
          "What you already pay that provider",
          "Log in with ChatGPT Plus or Pro or GitHub Copilot, or bring your own API keys",
        ],
        ["Enterprise", "Contact sales", "Priced through OpenCode's sales team"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for OpenCode",
      points: [
        "Nothing for the agent. OpenCode is MIT-licensed, with CLI binaries for macOS, Windows and Linux and a desktop app (labelled beta in the README).",
        "Free models have a daily request limit. They need no account.",
        "Go allowances vary by model. On Go and Go Plus, allowances reset over 5-hour, weekly and monthly windows. You can top up with credit and cancel any time.",
        "Pay-as-you-go is per token. Pay-as-you-go models are billed per million tokens from your balance.",
        "Or a plan you already pay for. Log in with ChatGPT Plus or Pro or GitHub Copilot. With your own API keys, usage is billed by that provider; OpenCode works with 200+ LLM providers through Models.dev, including local models.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode pricing vs other coding agents",
      text: [
        "Entry prices from each product's own site, checked November 13, 2026, in USD.",
        "Side by side: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). More options in [OpenCode alternatives](/blog/opencode-alternatives).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        [
          "OpenCode",
          "Agent free; OpenCode Go $10/month",
          "Yes: the agent (MIT) and free models with a daily request limit",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "In Claude Pro, $20/month or $17/month billed annually",
          "No: not in Claude Free; pay-as-you-go API credits also work",
        ],
        [
          "Codex",
          "In ChatGPT Plus, $20/month; or an OpenAI API key at API pricing",
          "The CLI is open source (Apache-2.0); usage comes from a ChatGPT plan or an API key",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent free; optional Nous Portal Plus $20/month",
          "Yes: the agent (MIT), and Nous Portal Free at $0 (pay as you go, free models only)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "Free; no paid tier or hosted service",
          "Yes: the whole project (MIT); you pay your model provider",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "OpenCode is the agent. Crewmark gives agents a job and a board.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each employee is an agent conversation on your own computer, such as Claude Code, Codex or OpenCode, with a role, KPIs and working hours. It wakes on a heartbeat and takes issues from a shared board. Like OpenCode, Crewmark doesn't bill model usage: you pay your agent provider.",
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
    title: "Want your coding agent to keep working?",
    text: "Crewmark gives Claude Code or Codex a role, a heartbeat and a shared board. Free for 1 project and up to 3 AI employees.",
    button: "Get started",
  },
  faq: {
    title: "OpenCode pricing FAQ",
    items: [
      {
        q: "Is OpenCode free?",
        a: "Yes. The agent is open source under the MIT license and free. It also comes with free models that need no account and have a daily request limit.",
      },
      {
        q: "How much does OpenCode Go cost?",
        a: "OpenCode Go is $10 a month and Go Plus $40 a month. Both give curated models with allowances over 5-hour, weekly and monthly windows and credit top-ups, and you can cancel any time.",
      },
      {
        q: "What is OpenCode's pricing model?",
        a: "The agent is free, and you pay for models in one of four ways: the free models, a Go or Go Plus subscription, pay-as-you-go billed per million tokens from your balance, or a plan or API key you already have. Enterprise is through sales.",
      },
      {
        q: "How is OpenCode priced per model?",
        a: "OpenCode Go allowances vary by model. Pay-as-you-go models are billed per million tokens. With your own API keys, usage is billed by that provider.",
      },
      {
        q: "Can I use OpenCode with my ChatGPT or GitHub Copilot subscription?",
        a: "Yes. You can log in with ChatGPT Plus or Pro or GitHub Copilot, or bring your own API keys.",
      },
      {
        q: "Does OpenCode work with local models?",
        a: "Yes. OpenCode works with 200+ LLM providers through Models.dev, including local models, and the agent itself is free.",
      },
    ],
  },
  cta: {
    title: "Pick your models. Then give your agents a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against opencode.ai and OpenCode's console pages on November 13, 2026. Other products' prices are from their own sites on the same date.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anomaly, the makers of OpenCode, or any other company named on this page. Product names are trademarks of their owners.",
};
