import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/openclaw-alternatives (MC-155 follow-up), for "openclaw alternatives" (reddit, hermes, open source, github,
// comparison, for windows, claude, rust, for mac), "openclaw vs hermes", "openclaw vs claude code", "openclaw
// alternative claude", "nanoclaw vs openclaw" and "hermes agent vs openclaw" (Google autocomplete, 2026-11-07). The
// results page is mostly vendor and affiliate listicles. Facts come only from each project's own README, site, docs
// or blog, and stars, licenses and releases from the GitHub API, on 2026-11-07: openclaw/openclaw and openclaw.ai,
// NousResearch/hermes-agent and its docs (providers page for Claude subscription rules), nanocoai/nanoclaw and
// nanoclaw.dev, zeroclaw-labs/zeroclaw, nearai/ironclaw and ironclaw.com, NVIDIA/NemoClaw and its docs. NanoClaw's
// line-count comparison with OpenClaw is NanoClaw's own claim and is attributed. Star counts are rounded and dated.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const openclawAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "OpenClaw Alternatives (2026): Hermes, NanoClaw | Crewmark AI",
      description:
        "The OpenClaw alternatives compared from their own docs: Hermes Agent, NanoClaw, ZeroClaw, IronClaw and NVIDIA NemoClaw. How each runs, which models and subscriptions it supports, its security model, and when a work-focused option like Crewmark fits better.",
    },
    breadcrumb: "OpenClaw alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI agents",
      title: "OpenClaw alternatives: Hermes, NanoClaw, ZeroClaw, IronClaw and more",
      lead: "OpenClaw is the open-source AI assistant that runs on your own computer and answers you in WhatsApp, Telegram, Slack, Discord and 20+ other channels. With about 394,000 GitHub stars it's the best known, but not the only one. People look for an alternative for three reasons: tighter security by default, a different model or subscription, or a lighter runtime. This guide compares the main options from their own docs, and explains when you want a personal assistant and when you want agents that do work for a team.",
      cta: "Get started",
      secondary: "Compare the alternatives",
      secondaryHref: "#alternatives",
    },
    sections: [
      {
        kind: "text",
        title: "OpenClaw in brief",
        text: [
          "OpenClaw started as Clawdbot, was renamed Moltbot and then OpenClaw in late January 2026, after Anthropic asked for a name change over its trademark. Peter Steinberger created it; he has since joined OpenAI, and the project now sits in the independent OpenClaw Foundation, announced in July 2026, which says OpenAI is \"a donor, not an owner\". The latest release is v2026.11.1, from November 5, 2026.",
        ],
        points: [
          "Runs as a local Gateway daemon on macOS, Linux, Windows or WSL2, with apps for desktop and mobile.",
          "Models are plugins: Claude (by API key, or by reusing a Claude Code login on the same machine), OpenAI and Codex, and local models such as Ollama.",
          "Security: it treats inbound messages as untrusted and pairs unknown senders, but tools run on the host for the main session unless you configure sandboxing.",
          "The project publishes its security fixes: 722 advisories since January 2026, 14 of them critical, all fixed and disclosed, plus a Trail of Bits audit whose findings were all fixed.",
        ],
      },
      {
        kind: "table",
        id: "alternatives",
        title: "OpenClaw alternatives compared",
        text: ["From each project's own README, site or docs, and the GitHub API, on November 7, 2026. Stars are rounded."],
        headers: ["", "What it is", "Runs on", "Models and subscriptions", "Isolation", "License, stars"],
        rows: [
          ["OpenClaw", "Personal AI assistant in your chat apps", "macOS, Linux, Windows, WSL2; mobile apps", "Claude by API key or a local Claude Code login; ChatGPT/Codex OAuth; local models", "Host by default; sandboxing optional", "MIT, ~394k"],
          ["Hermes Agent (Nous Research)", "Self-improving agent with a built-in learning loop", "Linux, macOS, Windows, WSL2, Android; desktop app", "Any provider; Claude subscription only on Max with extra-usage credits (not Pro); ChatGPT/Codex OAuth", "Approval for dangerous commands; optional Docker or Modal", "MIT, ~261k"],
          ["NanoClaw", "Lightweight assistant that runs agents in containers", "macOS, Linux, WSL2; needs Docker and Claude Code", "Claude by API key or subscription via Claude Code; Codex, OpenCode, Ollama by skill", "One container per session; credentials never enter it", "MIT, ~31k"],
          ["ZeroClaw", "Agent runtime as a single Rust binary", "Linux, macOS, Windows, FreeBSD, Docker; boards like Raspberry Pi", "Anthropic, OpenAI, Ollama and ~20 more; Codex subscription; Claude Max via setup-token", "Supervised by default; OS sandboxes", "MIT or Apache 2.0, ~33k"],
          ["IronClaw (NEAR AI)", "Privacy- and security-focused assistant", "macOS, Linux, Windows; or NEAR AI Cloud in a TEE", "Provider API keys (Anthropic, OpenAI, Gemini, Ollama and more)", "WASM sandbox; credentials injected at the boundary", "MIT or Apache 2.0, ~13k; cloud from $0 to $200/month"],
          ["NVIDIA NemoClaw", "Security stack that runs OpenClaw or Hermes in OpenShell sandboxes (alpha)", "Linux and DGX Spark first; Docker, Colima or Podman", "NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini by API", "OpenShell sandbox with egress control", "Apache 2.0, ~23k"],
          ["Crewmark", "AI employees for work: roles, goals and a shared board", "Hosted board; daemon on macOS, Windows, Linux", "Runs inside Claude Code, Codex, DeepSeek Harness or OpenCode, on your existing plan", "Each employee in its own session and checkout", "Commercial"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose an OpenClaw alternative",
        steps: [
          {
            title: "Decide what it's for",
            text: "A personal assistant you message from your phone (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw) is a different job from agents that work through a team's backlog in a repository (Crewmark, or several [Claude Code agents](/blog/multiple-claude-code-agents)).",
          },
          {
            title: "Check how it isolates tools",
            text: "This is the main difference between them. Pick container or OS-level isolation by default if the agent will read messages from other people.",
            code: sandbox,
          },
          {
            title: "Check whose bill it runs on",
            text: "Subscription support differs a lot: some reuse a Claude Code login or a setup token, Hermes needs Claude Max with extra-usage credits, others need API keys. Check your provider's terms for third-party use.",
          },
          {
            title: "Check the platform",
            text: "On Windows: OpenClaw, Hermes, ZeroClaw and IronClaw install natively; NanoClaw needs WSL2; NemoClaw is tested on Linux first. For a tiny footprint or hardware boards, ZeroClaw.",
          },
          {
            title: "Start with one channel and narrow permissions",
            text: "Connect a single chat app, allow only your own account, and widen access once you've seen how it behaves.",
          },
        ],
        source: { label: "Source: OpenClaw README", href: openclaw },
      },
      {
        kind: "text",
        title: "Which OpenClaw alternative fits you",
        points: [
          "You want OpenClaw with stricter isolation: NanoClaw (containers by design), or NemoClaw to run OpenClaw itself inside NVIDIA's sandbox.",
          "You want an agent that learns and improves its own skills: Hermes Agent.",
          "You want a small, fast runtime or need to run on a board: ZeroClaw.",
          "You want privacy features and a managed cloud option: IronClaw.",
          "You want OpenClaw vs Claude Code: OpenClaw is a chat-first assistant; Claude Code is a coding agent in your repository. To keep Claude Code working without prompts, see [how to make Claude Code proactive](/proactive-claude-code).",
          "You want agents that do a job for your team, from a shared board, on the Claude Code or Codex plan you already pay for: Crewmark (below). Also see [the superagent comparison](/blog/superagent).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Not a personal assistant: a team of AI employees",
        text: [
          "OpenClaw and its alternatives wait for your message. Crewmark is built for work: it turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, wakes it on a heartbeat to take the next issue from a shared board, and has it message you when it needs a decision.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "An [SEO specialist](/ai-employees/seo-specialist), a [software engineer](/ai-employees/software-engineer), a [marketing agent](/ai-employees/marketing-agent) and more, each with a goal you can change.",
          },
          {
            title: "Connect the agent you already use",
            text: "It runs in its own session and checkout, on the subscription you already pay for.",
          },
          {
            title: "Assign work and approve",
            text: "Fill the board; the employee takes the next issue and asks before anything on your approval list. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose an OpenClaw alternative" },
    mid: {
      title: "Need agents that work, not just chat?",
      text: "Crewmark runs Claude Code and Codex as AI employees that take the next issue from your board on a heartbeat.",
      button: "Get started",
    },
    faq: {
      title: "OpenClaw alternatives FAQ",
      items: [
        {
          q: "What is the best OpenClaw alternative?",
          a: "It depends on why you're leaving: NanoClaw for container isolation, Hermes Agent for a self-improving agent, ZeroClaw for a small Rust runtime, IronClaw for privacy features and a managed cloud, and Crewmark if you want agents doing a team's work rather than a personal assistant.",
        },
        {
          q: "Is there an open-source OpenClaw alternative?",
          a: "Yes: Hermes Agent (MIT), NanoClaw (MIT), ZeroClaw (MIT or Apache 2.0), IronClaw (MIT or Apache 2.0) and NVIDIA NemoClaw (Apache 2.0) are all open source.",
        },
        {
          q: "OpenClaw vs Hermes Agent: what's the difference?",
          a: "Both are open-source assistants for your chat apps. Hermes Agent, from Nous Research, centres on a learning loop that improves its own skills and offers optional container isolation; OpenClaw has the larger community and more channels. Their Claude subscription rules differ: Hermes needs Claude Max with extra-usage credits.",
        },
        {
          q: "Is NanoClaw safer than OpenClaw?",
          a: "NanoClaw runs every session in its own container and keeps credentials outside it, by design. OpenClaw runs tools on the host for the main session unless you configure its sandboxing. Either can be locked down; NanoClaw starts that way.",
        },
        {
          q: "Can OpenClaw use my Claude subscription?",
          a: "OpenClaw's docs describe two Claude routes: an API key, or reusing a Claude Code login on the same machine. Its docs also warn that the provider name alone doesn't tell you whether usage is billed to an API or a subscription.",
        },
        {
          q: "Is there an OpenClaw alternative for Windows?",
          a: "Hermes Agent has a Windows desktop app, and ZeroClaw and IronClaw install natively on Windows. OpenClaw itself supports Windows and WSL2; NanoClaw needs WSL2.",
        },
        {
          q: "What is NemoClaw?",
          a: "An alpha, open-source stack from NVIDIA that runs OpenClaw, Hermes or LangChain Deep Agents inside NVIDIA OpenShell sandboxes. It's a way to run OpenClaw more safely, not a replacement for it.",
        },
      ],
    },
    cta: {
      title: "Put AI agents to work on your team's backlog.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against each project's own README, website, docs or blog, and the GitHub API, on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by the OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic or OpenAI. Product names are trademarks of their owners.",
  },
};
