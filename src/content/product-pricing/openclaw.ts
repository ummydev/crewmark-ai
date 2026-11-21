import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/openclaw, MC-439. For "openclaw pricing" (pricing plan, pricing reddit, pricing model, ai pricing) (Google
// autocomplete, 2026-11-13); "hostinger openclaw pricing" is skipped because no card mentions a hosting provider.
// Every fact comes from docs/compare/facts/{openclaw,hermes-agent,opencode,openworker,claude-code,crewmark}.md
// (checked 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw Pricing: Free, and What You Actually Pay For",
    description:
      "OpenClaw is free and MIT-licensed, with no paid tier or hosted service. What you pay is your model provider: an API key or a subscription you already have.",
  },
  breadcrumb: "OpenClaw pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · OpenClaw",
    title: "OpenClaw pricing: free and open source, you pay your model provider",
    lead: "OpenClaw costs nothing. It's MIT-licensed, and its README says the project \"has no paid tier, hosted service, or token.\" What you pay for is the model behind it: an API key billed by your provider, or a subscription you already have, such as a ChatGPT or Claude Code login. You run the Gateway on your own machine. Here's what that means in practice, and how it compares with Hermes Agent, OpenCode, OpenWorker and Claude Code.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenClaw plans and prices",
      text: [
        "From OpenClaw's GitHub README and docs.openclaw.ai, checked November 13, 2026. There's one edition, and it's free.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "OpenClaw (open source)",
          "Free, MIT license",
          "The Gateway, Control UI, CLI and TUI; native apps for macOS, iOS, Android, Windows and Linux; chat channels such as WhatsApp, Telegram, Slack, Discord and iMessage; several agents per Gateway; the Automations scheduler",
        ],
        ["Paid tier", "None", "The README says there's no paid tier"],
        ["Hosted service", "None", "You run and maintain the Gateway yourself"],
        [
          "Model usage",
          "Billed by your model provider",
          "An API key, or a subscription you already have (ChatGPT/Codex OAuth, or a Claude Code login on the same host)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay to run OpenClaw",
      points: [
        "Your model provider. Models are plugins: OpenAI, Anthropic, Google Gemini, OpenRouter, xAI and others. With an API key, that provider bills you for what OpenClaw uses.",
        "Or a subscription you already pay for. OpenClaw can sign in with OpenAI ChatGPT/Codex OAuth, and it can use Claude by reusing a Claude Code login on the same host (also `claude setup-token`).",
        "The Claude Code login only works when OpenClaw runs on the same host as that login. Container installs (for example Podman) don't mount `~/.claude`, so the docs recommend an API key there.",
        "Local model servers are on the provider list too: Ollama, LM Studio and vLLM.",
        "Your own machine. The Gateway is a daemon on hardware you control, installed on macOS, Linux, Windows or WSL2, or with Docker or Nix. OpenClaw offers no hosting of its own.",
        "Nothing to OpenClaw itself. The project has no paid tier, so there's nothing to buy from it.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw pricing vs similar agents",
      text: [
        "Prices from each product's own site, checked November 13, 2026. All of these also need a model, paid to its provider unless a plan below includes it.",
        "Side by side: [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). More options in [OpenClaw alternatives](/blog/openclaw-alternatives).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        ["OpenClaw", "Free; you pay your model provider", "Yes: the whole project (MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent free; optional Nous Portal Plus $20/month",
          "Yes: the agent (MIT), and Nous Portal Free at $0",
        ],
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
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro $20/month, or $17/month billed annually",
          "No: not in Claude Free; pay-as-you-go API credits also work",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "OpenClaw answers you in chat. Crewmark gives your coding agents a job.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, goals and working hours. It wakes on a heartbeat and takes issues from a shared board. Like OpenClaw, it doesn't bill model usage: the agents run on the Claude or ChatGPT subscription you already pay for.",
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
          text: "[Crewmark pricing](/pricing), and what agents do with it in [Claude Code use cases](/use-cases/claude-code).",
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
    title: "OpenClaw pricing FAQ",
    items: [
      {
        q: "Is OpenClaw free?",
        a: "Yes. OpenClaw is open source under the MIT license, and its README says the project \"has no paid tier, hosted service, or token.\" You pay only your model provider.",
      },
      {
        q: "Does OpenClaw have a pricing plan?",
        a: "No. There's one free edition. The only bill is for the model you connect: an API key billed by its provider, or a subscription you already have.",
      },
      {
        q: "What is OpenClaw's pricing model?",
        a: "Free software plus a model you bring. Models are plugins (OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM and others), so the cost depends on the provider and plan you choose.",
      },
      {
        q: "Can I use OpenClaw with my Claude subscription?",
        a: "Yes, by reusing a Claude Code login on the same host (or `claude setup-token`). Container installs such as Podman don't mount `~/.claude`, so the docs recommend an API key there.",
      },
      {
        q: "Is there a hosted version of OpenClaw?",
        a: "Not from the project. You run the Gateway on your own machine (macOS, Linux, Windows or WSL2, or with Docker or Nix) and maintain it yourself.",
      },
      {
        q: "Who pays for OpenClaw's development?",
        a: "The OpenClaw Foundation, an independent 501(c)(3) that employs the core team and signs releases. The README says \"OpenAI is a donor, not an owner.\"",
      },
    ],
  },
  cta: {
    title: "Keep your model bill. Give your agents a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against OpenClaw's GitHub README and docs.openclaw.ai, and each compared product's own pricing page, on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by the OpenClaw Foundation or any other company named on this page. Product names are trademarks of their owners.",
};
