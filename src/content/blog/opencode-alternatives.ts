import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// /blog/opencode-alternatives, for "opencode alternatives", "opencode alternative reddit", "opencode alternative open
// source", "opencode alternatives free", "opencode alternatives with free models", "opencode alternative pi", "opencode
// alternative in rust", "opencode alternative for android", "opencode alternative for windows", "opencode alternatives
// for local llm", "opencode alternatives gui" (Google autocomplete and "people also search for", 2026-11-10). The
// results page is Reddit and small vendor listicles (respan, replicas.dev, freebuff, paradev, kilo), the kind of page
// where /blog/cursor-alternatives and /alternatives/multica reached positions 4 to 4.3 in GSC. Facts come from each
// project's GitHub README and the GitHub API (stars, license, language, last push), opencode.ai/go and the vendors'
// pricing pages, checked 2026-11-10. Gemini CLI's README says free individual access moved to Antigravity CLI on
// 2026-06-18, so Gemini CLI isn't listed as a free option. Crewmark is described only as working with Claude Code and
// Codex, the runtimes its daemon can wake (cli/deliver.go).

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS and Linux; Windows has a PowerShell installer)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # or: npm install -g @charmland/crush

# Kilo CLI (a fork of OpenCode)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (free, supported by text ads)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder with a model running in Ollama
nanocoder --provider ollama --model llama3.1

# Crush: add Ollama in your crushrc
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const opencodeAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "OpenCode Alternatives (2026): Free, Open Source and Local",
      description:
        "The best OpenCode alternatives in 2026: open-source terminal agents (Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), free options with no API key, Rust and Windows picks, local LLMs, GUIs, and Claude Code, Codex and Copilot CLI.",
    },
    breadcrumb: "OpenCode alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-10" },
    hero: {
      kicker: "Blog · Coding agents",
      title: "The best OpenCode alternatives in 2026: free, open source and local",
      lead: "OpenCode is one of the most-starred open-source coding agents on GitHub, with about 226,000 stars: an MIT-licensed terminal agent that works with any model provider, plus a desktop app in beta. People look elsewhere for a few reasons: a smaller harness they can bend to their own workflow, a single Go or Rust binary, better support for local models, an app instead of a terminal, a free option that needs no API key, or the agent their company already pays for. Here are the alternatives for each, with licenses, install commands and prices from each project's own page.",
      cta: "Get started",
      secondary: "Install commands",
      secondaryHref: "#open-source",
    },
    sections: [
      {
        kind: "text",
        title: "Quick picks",
        points: [
          "A minimal agent you shape yourself: Pi, MIT-licensed, about 121,000 stars.",
          "A polished terminal app that runs everywhere, Windows and Android included: Crush, from Charm.",
          "OpenCode with an IDE and a cloud agent around it: Kilo CLI, which is a fork of OpenCode.",
          "Free with no API key: Freebuff, paid for by text ads.",
          "Local models first: Nanocoder, built by a not-for-profit collective.",
          "Written in Rust: Codex CLI or Goose.",
          "You already pay for Claude, ChatGPT or Copilot: Claude Code, Codex CLI or GitHub Copilot CLI.",
          "An agent that keeps working on a schedule, not only when you type: Crewmark, on top of Claude Code or Codex.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "OpenCode alternatives compared",
        text: [
          "Stars are rounded, from the GitHub API on November 10, 2026. Costs are what you need to start; most open-source agents are free and you pay your model provider.",
        ],
        headers: ["Tool", "License", "Built with", "Runs on", "What it costs", "Best for"],
        rows: [
          ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k stars)", "TypeScript", "Terminal, desktop app (beta)", "Free models with a daily limit; Go $10/mo, Go Plus $40/mo", "The baseline: any provider, local models, Plan and Build agents"],
          ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k stars)", "TypeScript", "macOS, Linux, Windows; SDK and RPC", "Free; your subscription or API key", "A minimal harness you extend with your own tools and skills"],
          ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k stars)", "Go", "Every terminal: macOS, Linux, Windows, Android, BSD", "Free; your key, or Charm's Hyper models", "A polished terminal UI with LSP and MCP"],
          ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (~28k stars)", "TypeScript", "CLI, VS Code, JetBrains, cloud", "Free to start; 500+ models at the provider's rate, no markup", "OpenCode's engine plus IDE extensions and code reviews"],
          ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (~56k stars)", "Rust", "Desktop app, CLI, API", "Free; your model key", "One agent for code and other work, with MCP extensions"],
          ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k stars)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "Free; your model key", "An open-source agent in your editor and terminal"],
          ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k stars)", "TypeScript", "Terminal", "Free; local models or any OpenAI-compatible API", "Private, local-first coding with Ollama"],
          ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (~14k stars)", "TypeScript", "CLI, desktop, web, cloud", "Free with text ads; no API key", "Trying a coding agent without paying or signing up for a model"],
          ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (~29k stars)", "TypeScript", "Terminal", "Qwen Plus or Pro subscription, or an API key", "Qwen model users"],
          ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k stars)", "Rust", "Terminal; also IDE and desktop", "Any ChatGPT plan, including Free; Go is $8/mo; or an API key", "ChatGPT subscribers who want a fast native binary"],
          ["[Claude Code](https://code.claude.com/docs)", "Proprietary", "-", "Terminal, IDE, desktop, web", "Claude Pro $20/mo", "Claude users who want Anthropic's own agent"],
          ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "Proprietary", "-", "macOS, Linux, Windows", "A Copilot plan; Pro is $10/mo", "Teams already paying for Copilot"],
          ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k stars)", "Python", "Terminal", "Free; your model key", "Git-centric pair programming; no commits since May 22, 2026 (see [Aider alternatives](/blog/aider-alternatives))"],
          ["[Crewmark](/pricing)", "Proprietary", "-", "Your computer, inside your own Claude Code or Codex", `Free plan (${free.projects} project, ${free.employees} AI employees); Pro $${pro.price}/mo coming soon`, "An agent with a role, working hours and a heartbeat that takes the next issue from a board"],
        ],
      },
      {
        kind: "steps",
        id: "open-source",
        title: "Open source OpenCode alternatives you can install today",
        text: [
          "Each of these installs with one command. Read a script before you pipe it to your shell.",
        ],
        steps: [
          {
            title: "Pi",
            text: "A minimal, extensible agent harness. It ships with sensible defaults but skips sub-agents and plan mode on purpose: you add them with extensions, skills and prompt templates, or ask Pi to build them. Run `/login` to connect a subscription or API key. Pi has no built-in permission system, so run it in a container or sandbox if you need boundaries; its docs describe three ways.",
            code: install,
          },
          {
            title: "Crush",
            text: "Charm's terminal agent, written in Go. It reads your language servers for context, takes MCP servers over http, stdio and sse, and lets you switch models mid-session. It installs with Homebrew, npm, winget, scoop, apt and pkg, and its README lists Windows (PowerShell and WSL), Android and the BSDs. The license is FSL-1.1-MIT, a source-available license rather than an open-source one.",
          },
          {
            title: "Kilo CLI",
            text: "Kilo's README says its CLI is a fork of OpenCode. On top, Kilo adds VS Code and JetBrains extensions, a cloud agent, automated pull-request reviews and 500+ models you can switch mid-task. MIT-licensed.",
          },
          {
            title: "Goose, Cline and Nanocoder",
            text: "Goose is a Rust agent with a desktop app and a CLI, now under the Linux Foundation's Agentic AI Foundation. Cline runs as a CLI, an editor extension or an SDK. Nanocoder is a local-first terminal agent from the Nano Collective, with normal, auto-accept, yolo, plan and architect modes, and commands that review a branch or check out a pull request in its own worktree.",
          },
        ],
        source: { label: "Source: each project's README on GitHub", href: "https://github.com/earendil-works/pi" },
      },
      {
        kind: "text",
        id: "free",
        title: "OpenCode alternatives with free models",
        text: [
          "OpenCode itself includes free models with a daily request limit, and you can fall back to them when your Go limits run out. If you want something else that's free:",
        ],
        points: [
          "Freebuff: no subscription, credits or API key. Text ads pay for the included models, with DeepSeek V4.1 Flash as the default; referrals and bounties add hours to the free daily allowance.",
          "Local models: Nanocoder, Crush, Goose and OpenCode all talk to Ollama, so the only cost is your own hardware.",
          "Google's free tier: Gemini CLI no longer has one. Its README says free individual accounts and Google AI Pro and Ultra moved to Antigravity CLI (`agy`) on June 18, 2026.",
          "Codex CLI: open source, and it works with a free ChatGPT account.",
          "Open-source agents with your own key: Pi, Kilo CLI, Cline and Goose cost nothing themselves; you pay only for the model.",
        ],
      },
      {
        kind: "steps",
        id: "local",
        title: "OpenCode alternatives for local LLMs",
        text: [
          "If the reason you use OpenCode is running models on your own machine, these two make local models the first-class path.",
        ],
        steps: [
          {
            title: "Nanocoder",
            text: "Built for local models through Ollama, or any OpenAI-compatible API such as OpenRouter. Pass the provider and model as flags, or run it non-interactively with `nanocoder run`.",
            code: local,
          },
          {
            title: "Crush",
            text: "Add Ollama as a provider in your `crushrc`, a Bash-like config file that works the same on every platform, including Windows, then register the models you've pulled.",
          },
        ],
      },
      {
        kind: "text",
        id: "by-need",
        title: "Rust, Windows, Android or a GUI",
        points: [
          "In Rust: Codex CLI and Goose are both written in Rust. Crush is a single Go binary.",
          "For Windows: Crush (winget, scoop or npm), Pi (a PowerShell installer), GitHub Copilot CLI (winget) and the OpenCode desktop app all run natively.",
          "For Android: Crush's README lists Android among the terminals it supports.",
          "With a GUI: OpenCode's own desktop app (beta) for macOS, Windows and Linux; Goose Desktop; Freebuff Desktop, which can also run your installed Claude Code and Codex; and Kilo or Cline inside VS Code and JetBrains.",
          "OpenCode Go is $10 a month for open-weight models (Go Plus is $40). If you'd rather have one subscription for a frontier model, Codex comes with ChatGPT Go at $8 a month, Copilot Pro is $10 and Claude Pro is $20.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "When you want the agent to work without you typing",
        text: [
          "Every tool on this list waits for your next prompt. Crewmark turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat: during its shift it wakes, takes the next issue from a board and messages you when it needs a decision. It runs on your computer, on the plan you already pay for.",
        ],
        steps: [
          {
            title: "Hire an employee on your agent",
            text: "Run the setup command in a Claude Code or Codex conversation; that conversation becomes the employee. See [what an AI employee is](/ai-employees).",
          },
          {
            title: "Give it hours and a heartbeat",
            text: "It wakes every 15 to 240 minutes during the hours you set, even overnight. See [how to run Claude Code 24/7](/blog/run-claude-code-24-7) and [Codex long-running tasks](/blog/codex-long-running-tasks).",
          },
          {
            title: "Answer when it asks",
            text: "Decisions come to you as messages; everything else is on the board. For more terminal agents compared, see [Cursor alternatives](/blog/cursor-alternatives) and [Devin alternatives](/blog/devin-alternatives).",
          },
        ],
      },
    ],
    mid: {
      title: "Want a coding agent that keeps working between your prompts?",
      text: "Crewmark employees wake on a heartbeat during working hours and take the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is the best open source alternative to OpenCode?",
          a: "Pi if you want a small harness you extend yourself, Crush for a polished terminal app on every platform, and Kilo CLI if you want OpenCode's engine with IDE extensions around it. Goose and Cline are solid Apache-licensed choices too.",
        },
        {
          q: "Is Kilo CLI based on OpenCode?",
          a: "Yes. Kilo's README says Kilo CLI is a fork of OpenCode, extended to work with Kilo's platform: VS Code and JetBrains extensions, a cloud agent and code reviews.",
        },
        {
          q: "Is there a free alternative to OpenCode?",
          a: "Freebuff is free with no API key, supported by text ads. Nanocoder, Crush, Goose and OpenCode itself are free with local models through Ollama. Gemini CLI's free tier moved to Antigravity CLI in June 2026.",
        },
        {
          q: "Is there an OpenCode alternative written in Rust?",
          a: "Codex CLI, from OpenAI, and Goose are both written in Rust and Apache 2.0 licensed. Crush is written in Go and ships as a single binary.",
        },
        {
          q: "Is Crush open source?",
          a: "Crush's code is public under FSL-1.1-MIT, a source-available license. OpenCode, Pi, Kilo CLI and Nanocoder are MIT; Goose, Cline, Codex CLI, Qwen Code and Freebuff are Apache 2.0.",
        },
        {
          q: "OpenCode vs Claude Code: which should I use?",
          a: "OpenCode works with any provider, including local models, and is open source. Claude Code is Anthropic's own agent, closed source, included from Claude Pro at $20 a month. If you pay for Claude anyway, Claude Code gets features first; if you switch models often, OpenCode or Pi fit better.",
        },
      ],
    },
    cta: {
      title: "Give your coding agent a job, not just a prompt.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against each project's GitHub repository and README, opencode.ai and vendor pricing pages on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenCode or any project listed. Product names are trademarks of their owners.",
  },
};
