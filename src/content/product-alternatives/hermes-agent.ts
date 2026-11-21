import type { GuideCopy } from "@/components/landing/guide-article";

// /alternatives/hermes-agent, MC-439. For "hermes agent alternatives", "hermes agent alternatives reddit", "hermes agent
// alternatives open source", "hermes agent alternative for windows", "hermes agent options", "hermes ai agent
// alternatives" (Google autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/{hermes-agent,openclaw,opencode,openworker,openbot,claude-code,grok-bot,crewmark}.md (checked
// 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used. Platforms are only those the cards
// give.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent Alternatives in 2026: Open-Source and Hosted",
    description:
      "Hermes Agent alternatives compared: OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot and Crewmark, with license, price and Windows support.",
  },
  breadcrumb: "Hermes Agent alternatives",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Alternatives · Nous Research Hermes Agent",
    title: "Hermes Agent alternatives: open-source agents, coding agents and hosted Bots",
    lead: "Hermes Agent is Nous Research's open-source (MIT) personal AI agent. You use it from a terminal, a desktop app or chat apps, and it writes skills from experience, keeps its own memory and runs routines on a built-in cron scheduler. You run it yourself, on your machine or a server, unless a paid Nous Portal plan hosts one agent for you. Using a Claude subscription with it needs Claude Max plus purchased extra usage; Claude Pro subscribers need an API key. Here are seven alternatives, with license, price and the platforms each one runs on, Windows included.",
    cta: "Get started",
    secondary: "See the comparison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent alternatives at a glance",
      text: [
        "Facts from each product's README, docs and pricing page, checked November 13, 2026. Prices in USD. Hermes Agent itself is free, plus your model provider; Nous Portal plans are Plus $20, Super $100 and Ultra $200 a month. Details in [Hermes Agent pricing](/pricing/hermes-agent).",
      ],
      headers: ["Alternative", "What it is", "Open source", "Price from"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "A personal AI assistant that runs on your own computer and answers you in chat apps",
          "Yes (MIT)",
          "Free; no paid tier or hosted service; you pay your model provider",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "A coding agent for models from 200+ providers, including local models, as a terminal UI, desktop app, web app and SDK",
          "Yes (MIT)",
          "Free, with free models (daily request limit); OpenCode Go $10 a month",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "A desktop app, “An AI coworker for your everyday work,” plus a Harness SDK for building agentic apps",
          "Yes (MIT)",
          "No price listed; your own model key or a local model",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit's self-hostable workspace for AI coworkers, where each Bot gets its own browser, files and tools",
          "Yes (MIT app template; uses the separately licensed CopilotKit Intelligence)",
          "Free for personal projects; Business up to $29 per active user a month",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "Anthropic's coding agent, in the terminal, IDE extensions, a desktop app, the web and mobile",
          "No",
          "Paid Claude plans, from Pro at $20 a month ($17 a month billed annually)",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "xAI's hosted AI teammates: Bots that each get a computer of their own in the cloud",
          "No",
          "Premium $30 a month, billed monthly",
        ],
        [
          "[Crewmark](/ai-employees)",
          "An issue tracker for a team of AI employees, each a Claude Code or Codex conversation on your computer that wakes on a heartbeat",
          "Yes (GPL-3.0)",
          "Free (1 project, up to 3 AI employees); Pro $5 a month coming soon; agent usage paid to your agent provider",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Hermes Agent alternatives for Windows",
      text: [
        "Hermes Agent itself runs on native Windows (PowerShell) and WSL2, and its desktop app is on Windows 10 and 11. Here's what each alternative lists.",
      ],
      headers: ["Product", "Windows", "Other platforms"],
      rows: [
        [
          "Hermes Agent",
          "Native Windows (PowerShell) and WSL2; desktop app for Windows 10/11 (Microsoft Store or .exe)",
          "Linux, macOS, Android via Termux; desktop app for macOS 12+ and Linux",
        ],
        ["OpenClaw", "Installer for Windows (PowerShell) and WSL2; native Windows app", "macOS and Linux; apps for macOS, iOS, Android and Linux"],
        [
          "OpenCode",
          "CLI binaries for Windows (x64, ARM64); desktop app, labelled beta. Windows package managers aren't supported",
          "CLI and desktop app for macOS and Linux; iPhone app via TestFlight",
        ],
        ["OpenWorker", "Windows 10/11 x64; builds aren't code-signed yet, so SmartScreen warns", "macOS 12+ (Apple silicon); no Linux download listed"],
        ["OpenBot", "Desktop app for Windows, with a Docker backend", "Desktop app for macOS; Kubernetes for teams"],
        [
          "Claude Code",
          "CLI on Windows 10 1809+ or Windows Server 2019+; desktop app for Windows (x64 and ARM64)",
          "macOS, Linux, web, iOS and Android",
        ],
        [
          "Grok Bot",
          "x.ai's guides list Mac, Windows, Linux and phones; each Bot works on its own cloud computer",
          "macOS (Apple silicon) download on x.ai/bot; iOS",
        ],
        ["Crewmark", "`crewmark` CLI on Windows", "CLI on macOS and Linux; web app"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Other open-source personal agents",
      text: ["Like Hermes Agent, these run on hardware you control, with models you choose."],
      points: [
        "OpenClaw: an MIT-licensed assistant that runs as a Gateway on your own computer and answers in WhatsApp, Telegram, Slack, Discord, iMessage and other chat apps. It runs several agents on one Gateway, has a built-in Automations scheduler, and has no paid tier or hosted service. It uses Claude by API key or by reusing a Claude Code login on the same host. Choose it if you want an assistant you message from your existing chat apps, with model providers you can swap. Compared in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw); more in [OpenClaw alternatives](/blog/openclaw-alternatives).",
        "OpenWorker: an MIT-licensed desktop app under Andrew Ng's GitHub account, in open beta for macOS and Windows. Actions need approval by default, every tool call is recorded, and you can schedule morning briefs and weekly reports; you can also mention it in Slack and it replies in the thread. Choose it if you want an agent on your own machine, with your own model key or a local model, and control over which actions need approval. Guide: [OpenWorker](/personal-agent/openworker).",
        "OpenBot: CopilotKit's self-hostable workspace for AI coworkers. Each Bot has its own computer (browser, files, tools), routines, memory, approvals and an activity log. The app template is MIT; it uses CopilotKit Intelligence, which is licensed separately (free on a laptop, a license for production on Kubernetes). Choose it if you want AI coworkers you can self-host and customize, with your own models or agents built on other stacks. Guide: [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Coding agents",
      text: [
        "If most of what you hand Hermes Agent is code, these are built for it. Compared: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode: an MIT-licensed coding agent that works with models from 200+ providers, including local models. Free models need no account (with a daily request limit), OpenCode Go is $10 a month, and you can also sign in with ChatGPT Plus or Pro or GitHub Copilot, or bring your own API keys. Choose it if you want custom agents and subagents defined as files in your repository, with per-action permission rules. More in [OpenCode alternatives](/blog/opencode-alternatives).",
        "Claude Code: Anthropic's coding agent, with subagents, experimental agent teams and scheduled tasks that run in the cloud. It isn't open source and comes with paid Claude plans, from Pro at $20 a month. Choose it if you already pay for a Claude plan: Hermes Agent can use a Claude subscription only on Max with purchased extra usage. See [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "A hosted option",
      points: [
        "Grok Bot: xAI's hosted AI teammates. Each Bot has its own computer in the cloud and keeps working when your laptop is closed; Bots sign in to your tools, work in Slack, Microsoft Teams and video calls, run routines on a schedule and message each other. It isn't open source; plans start at Premium, $30 a month. Choose it if your team wants Bots that work inside its existing apps without running a server. See [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) and [Grok Bot alternatives](/alternatives/grok-bot).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "How to choose a Hermes Agent alternative",
      steps: [
        {
          title: "Want to stay open source?",
          text: "OpenClaw, OpenCode and OpenWorker are MIT; OpenBot's app template is MIT, with a separately licensed engine; Crewmark is GPL-3.0. Claude Code and Grok Bot aren't open source.",
        },
        {
          title: "On Windows?",
          text: "Hermes Agent runs on native Windows already. Of the alternatives, OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code and the Crewmark CLI all list Windows; see the table above for versions.",
        },
        {
          title: "Already paying for Claude?",
          text: "Hermes Agent uses a Claude subscription only on Max with purchased extra usage. OpenClaw can reuse a Claude Code login on the same host, Claude Code comes with paid Claude plans, and Crewmark runs Claude Code on your own subscription.",
        },
        {
          title: "Don't want to run a server?",
          text: "Grok Bot is hosted by xAI. Hermes Agent's paid Nous Portal plans include one cloud-hosted agent, and CopilotKit hosts OpenBot in early access.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A personal agent for you. A team of AI employees for your repository.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each one is a Claude Code or Codex conversation on your own computer, with a role, KPIs and projects. It wakes on a heartbeat during its working hours, takes issues from a shared board, and when it needs a review or permission it sets the issue to Needs action and asks there. Agents work together through issues: they assign them, comment and @mention each other.",
        "It's open source under GPL-3.0 and free for 1 project with up to 3 AI employees. You keep paying your agent provider as usual, and your computer has to stay on for heartbeats. Plans are on the [pricing page](/pricing).",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its KPIs and projects.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues to the employee or to people, and make regular ones repeat daily, weekly or monthly.",
        },
        {
          title: "Set its hours",
          text: "Choose working hours and a heartbeat between 15 minutes and 24 hours. Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Put your Claude Code or Codex to work on a schedule",
    text: "Crewmark wakes your agent on a heartbeat during working hours and hands it the next issue from a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Hermes Agent alternatives FAQ",
    items: [
      {
        q: "What's an open-source alternative to Hermes Agent?",
        a: "OpenClaw, OpenCode and OpenWorker are MIT-licensed. OpenBot's app template is MIT and uses CopilotKit Intelligence, which is licensed separately. Crewmark is open source under GPL-3.0.",
      },
      {
        q: "Is there a Hermes Agent alternative for Windows?",
        a: "Several. OpenClaw has a Windows installer and a native Windows app; OpenCode has Windows CLI binaries and a desktop app in beta; OpenWorker runs on Windows 10/11 x64 (not code-signed yet); OpenBot has a Windows desktop app; Claude Code runs on Windows 10 1809 or later. Hermes Agent itself also runs on native Windows.",
      },
      {
        q: "Hermes Agent vs OpenClaw: which should I use?",
        a: "Both are MIT-licensed personal agents you run yourself and reach from chat apps. Hermes Agent focuses on writing and refining its own skills and memory, and has optional paid Nous Portal plans that include one cloud-hosted agent. OpenClaw runs as a local Gateway and has no paid tier or hosted service. See [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      },
      {
        q: "Is Hermes Agent free?",
        a: "The agent is free under MIT, and you pay your model provider. Nous Portal is optional: Free at $0 (pay as you go, free models only), Plus $20 a month, Super $100 and Ultra $200. More in [Hermes Agent pricing](/pricing/hermes-agent).",
      },
      {
        q: "Can I use my Claude subscription with Hermes Agent or an alternative?",
        a: "With Hermes Agent, only on Claude Max with purchased extra usage; Claude Pro subscribers need an API key. OpenClaw can reuse a Claude Code login on the same host. Claude Code comes with every paid Claude plan, and Crewmark runs Claude Code on your own subscription.",
      },
      {
        q: "Is there a hosted Hermes Agent alternative?",
        a: "Grok Bot is hosted by xAI, with a cloud computer for each Bot, from $30 a month. Hermes Agent's own paid Nous Portal plans include one cloud-hosted agent, and CopilotKit hosts OpenBot in early access.",
      },
    ],
  },
  cta: {
    title: "Give your coding agents roles and a board.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Facts checked on November 13, 2026 against each product's README, documentation and pricing page.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Nous Research or any other company named on this page. Product names are trademarks of their owners. Facts about other products come from their public pages and may have changed since.",
};
