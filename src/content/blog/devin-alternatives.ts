import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// /blog/devin-alternatives, for "devin alternatives", "devin ai alternative(s)", "open source devin alternative",
// "devin ai alternative open source", "devin free alternative", "best devin ai alternative", "devin ai alternative
// reddit" (Google autocomplete, 2026-11-10). GSC showed Devin searches landing on /blog/cursor-alternatives (position
// 4.3, no clicks), so this page answers them directly (advice from codex-design's SEO on MC-82: a separate open-source
// section with install commands, fair comparisons from each vendor's own site, Crewmark listed but not first). Facts
// come from each product's site, pricing page, docs and GitHub README, and the GitHub API, checked 2026-11-10. Many
// ranking listicles still quote Devin at $500/month and $2.25 per ACU; devin.ai no longer does for self-serve plans.
// Crewmark is described only as working with Claude Code and Codex, the runtimes its daemon can wake (cli/deliver.go).

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (needs Node 24+ and uv)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (the successor to SWE-agent)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const devinAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Devin Alternatives (2026): Open Source, Free and Cheaper",
      description:
        "The best Devin AI alternatives in 2026, with current prices from each vendor: open-source agents you can install today (OpenHands, OpenCode, mini-swe-agent, Cline, Goose), cloud agents from OpenAI, Anthropic, Google and GitHub, and team platforms.",
    },
    breadcrumb: "Devin alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-10" },
    hero: {
      kicker: "Blog · AI software engineers",
      title: "The best Devin alternatives in 2026: open source, free and cheaper",
      lead: "Devin, from Cognition, is an autonomous AI software engineer: you tag it in Slack or Teams, assign it a Linear or Jira ticket, or point it at failing CI, and it works in its own virtual machine and opens a pull request. In 2026 it has a free tier and plans from $20 a month. The alternatives fall into three groups: open-source agents you run yourself, cloud agents from the model makers, and platforms for teams. Each is good for someone different; here's who, with prices from each vendor's own site.",
      cta: "Get started",
      secondary: "Open-source alternatives",
      secondaryHref: "#open-source",
    },
    sections: [
      {
        kind: "text",
        title: "Quick picks",
        points: [
          "You want it open source and on your own servers: OpenHands, the project that started as OpenDevin, now a self-hosted control center for coding agents.",
          "You live in the terminal and want any model: OpenCode, MIT-licensed, with about 226,000 GitHub stars.",
          "You already pay for ChatGPT or Claude: OpenAI Codex cloud tasks or Claude Code cloud sessions, included in plans from $20 a month.",
          "Your team works in GitHub: Copilot in the cloud, assigned from issues and included from Copilot Pro at $10 a month.",
          "You want ticket-driven agents across a company: Factory's Droids.",
          "You want an AI engineer with a standing job on your own Claude Code or Codex: Crewmark.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Devin alternatives compared",
        text: [
          "Prices are the lowest plan that includes the agent, from each vendor's pricing page on November 10, 2026. Stars are rounded, from the GitHub API the same day.",
        ],
        headers: ["Tool", "Open source", "Runs where", "Starts at", "Best for"],
        rows: [
          ["[Devin](https://devin.ai)", "No", "Its own cloud VM per session; Devin Desktop and CLI locally", "Free tier; Pro $20/mo", "Teams that want to hand tickets to an agent from Slack, Teams or Jira"],
          ["[OpenHands](https://github.com/OpenHands/OpenHands)", "Yes, MIT (~93k stars)", "Your laptop, Docker, a VM; hosted cloud too", "Free to self-host; Teams $500/mo", "A Devin-style agent on your own infrastructure and model keys"],
          ["[OpenCode](https://github.com/anomalyco/opencode)", "Yes, MIT (~226k stars)", "Terminal, desktop app, SDK", "Free models included; Go $10/mo", "Terminal users who want any of 200+ model providers"],
          ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "Yes, MIT (~9.5k stars)", "Local CLI", "Free (you pay the model)", "Research, benchmarks and reproducible issue fixing"],
          ["[Cline](https://github.com/cline/cline)", "Yes, Apache 2.0 (~71k stars)", "CLI, VS Code, JetBrains, desktop", "Free (you pay the model)", "An open-source agent inside your editor"],
          ["[Goose](https://github.com/aaif-goose/goose)", "Yes, Apache 2.0 (~56k stars)", "Desktop app, CLI, API", "Free (you pay the model)", "One agent for code and other work, with MCP extensions"],
          ["[OpenAI Codex](https://chatgpt.com/codex)", "CLI only (Apache 2.0)", "OpenAI's cloud; CLI, IDE, desktop", "ChatGPT Plus $20/mo", "ChatGPT subscribers"],
          ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "No", "Anthropic-managed VM per cloud session; locally too", "Claude Pro $20/mo", "Claude Code users who want work to go on with the laptop closed"],
          ["[Google Jules](https://jules.google)", "No", "Google cloud VM", "15 tasks/day on the base plan; Google AI Pro $19.99/mo", "Individual developers on Gemini"],
          ["[GitHub Copilot in the cloud](https://github.com/features/copilot/plans)", "No", "GitHub's cloud sandbox", "Copilot Pro $10/mo", "Teams already on GitHub"],
          ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "No", "Cursor's cloud VMs", "Premium $30/mo", "Teams already working in Cursor"],
          ["[Factory](https://factory.com)", "No", "Desktop, CLI, web; cloud and local agents", "Pro $20/mo", "Engineering orgs that drive agents from tickets and chat"],
          ["[Crewmark](/pricing)", "No", "Your computer, inside your own Claude Code or Codex", `Free plan (${free.projects} project, ${free.employees} AI employees); Pro $${pro.price}/mo coming soon`, "Small teams that want an AI engineer on a schedule, on a plan they already pay for"],
        ],
      },
      {
        kind: "steps",
        id: "open-source",
        title: "Open source Devin alternatives you can run today",
        text: [
          "Devin itself isn't open source. These are, and each one installs with a single command. You bring your own model key, so the software is free and you pay your model provider. Read a script before you pipe it to your shell.",
        ],
        steps: [
          {
            title: "OpenHands (formerly OpenDevin)",
            text: "Now called Agent Canvas: a self-hosted control center that runs the OpenHands agent, and also Claude Code, Codex, Gemini or OpenCode, on your laptop, in Docker or on a VM, with automations for Slack, GitHub and Linear. Free to self-host; a hosted Teams plan is $500 a month for up to 10 users.",
            code: install,
          },
          {
            title: "OpenCode",
            text: "An MIT-licensed terminal agent that works with more than 200 model providers, including local models, plus a desktop app in beta. Free models are included with no account; OpenCode Go is $10 a month, and you can sign in with a ChatGPT or GitHub Copilot subscription. See [OpenCode alternatives](/blog/opencode-alternatives) for agents like it.",
          },
          {
            title: "SWE-agent and mini-swe-agent",
            text: "The Princeton and Stanford research agent that takes a GitHub issue and tries to fix it. Its README now says mini-swe-agent has superseded it, so start there. Free; you pay only for the model.",
          },
          {
            title: "Cline, Goose, Aider and Kilo Code",
            text: "Cline is an Apache-licensed agent for the terminal, VS Code and JetBrains with Plan and Act modes. Goose, now under the Linux Foundation's Agentic AI Foundation, handles code and other tasks through MCP extensions. Aider and Kilo Code are popular open-source coding agents too; Devika, an early open-source Devin clone, hasn't been updated since September 2025.",
          },
        ],
        source: { label: "Source: OpenHands on GitHub", href: "https://github.com/OpenHands/OpenHands" },
      },
      {
        kind: "text",
        id: "cloud",
        title: "Cloud agents from the model makers",
        text: [
          "If you want Devin's “assign it and walk away” workflow without another vendor, the model makers now offer it inside plans you may already have.",
        ],
        points: [
          "OpenAI Codex: cloud tasks at chatgpt.com/codex, included from ChatGPT Plus at $20 a month; cloud tasks use more of your allowance, and an API key covers the CLI and IDE but not cloud features.",
          "Claude Code: cloud sessions from claude.ai/code, the Claude app or `claude --cloud`, each in an isolated Anthropic-managed VM, on Pro ($20 a month), Max, Ultra and Team plans, with no separate charge for the VM.",
          "Google Jules: clones your repository to a cloud VM and opens a pull request; 15 tasks a day on the base plan and 100 with Google AI Pro at $19.99 a month.",
          "GitHub Copilot in the cloud: assign an issue and Copilot opens a pull request; included from Copilot Pro at $10 a month, with usage billed in GitHub AI Credits.",
          "Cursor Cloud Agents: run in isolated VMs, started from Cursor, the web, Slack or Linear; from the $30-a-month Premium plan.",
        ],
      },
      {
        kind: "text",
        id: "devin-pricing",
        title: "How much Devin costs in 2026",
        text: [
          "Many lists still quote a $500 team plan and $2.25 per ACU. On devin.ai today, self-serve plans don't use ACUs; billing mixes included quota with on-demand credits, and only Enterprise is billed in ACUs.",
        ],
        points: [
          "Free: $0, with a light quota.",
          "Pro: $20 a month, including Devin Cloud; extra usage at API pricing.",
          "Max: $200 a month.",
          "Teams: $80 a month plus $40 a month per full developer seat, up to 200 users.",
          "Enterprise: custom.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "An AI engineer with a standing job, on your own agent",
        text: [
          "Devin and the cloud agents wait for you to assign each task. Crewmark turns your own Claude Code or Codex into an AI software engineer with a role, a goal in numbers, working hours and a heartbeat: during its shift it wakes, takes the next issue from a board, opens a pull request and messages you when it needs a decision. It runs on the subscription you already pay for, on your computer.",
        ],
        steps: [
          {
            title: "Hire the software engineer role",
            text: "Its brief, goal and routine come set up; see the [AI software engineer](/ai-employees/software-engineer).",
          },
          {
            title: "Put the work on a board",
            text: "Assign issues like you would to a teammate; the employee keeps status and comments current. See [Claude Code kanban](/blog/claude-code-kanban).",
          },
          {
            title: "Let it keep going",
            text: "Set working hours, even overnight. See [how to run Claude Code 24/7](/blog/run-claude-code-24-7) and [Codex long-running tasks](/blog/codex-long-running-tasks).",
          },
        ],
      },
    ],
    mid: {
      title: "Want a Devin-style engineer on the Claude Code or Codex plan you already have?",
      text: "Crewmark employees wake on a heartbeat, work through a board and open pull requests.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is the best open source alternative to Devin?",
          a: "OpenHands, which started as OpenDevin, is the closest: a self-hosted agent platform you run with your own model keys. For a terminal agent, OpenCode; for research and benchmarks, mini-swe-agent.",
        },
        {
          q: "Is OpenDevin the same as OpenHands?",
          a: "Yes. OpenDevin was renamed OpenHands, by All Hands AI. It's MIT-licensed and now ships as Agent Canvas, which also runs Claude Code, Codex and other agents.",
        },
        {
          q: "Is Devin free?",
          a: "There's a free tier with a light quota. Paid plans are Pro at $20 a month, Max at $200 and Teams at $80 a month plus $40 per developer seat, per devin.ai on November 10, 2026.",
        },
        {
          q: "Does Devin still charge per ACU?",
          a: "Only on Enterprise. Self-serve plans now combine an included quota with on-demand credits, so the old $2.25-per-ACU figure no longer applies to them.",
        },
        {
          q: "Devin vs Claude Code or Codex: which should I use?",
          a: "If you already pay for Claude or ChatGPT, their cloud sessions and cloud tasks give you Devin's assign-and-walk-away workflow at no extra cost. Devin adds Slack, Teams, Jira and Linear workflows built for teams.",
        },
        {
          q: "What's the cheapest Devin alternative?",
          a: "The open-source agents cost nothing beyond your model usage. Among hosted options, GitHub Copilot Pro at $10 a month includes the cloud agent, and Google Jules allows 15 tasks a day on its base plan.",
        },
      ],
    },
    cta: {
      title: "Give your Claude Code or Codex a job, not just a task.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against each product's website, pricing page, docs and GitHub repository on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Cognition or any company listed. Product names are trademarks of their owners.",
  },
};
