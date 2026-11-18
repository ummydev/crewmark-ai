import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// /blog/aider-alternatives, for "aider alternatives", "aider alternative reddit", "aider alternative open source",
// "best aider alternative", "aider cli alternatives", "is aider dead", "is aider maintained", "is aider still
// relevant", "is aider free", "aider vs opencode", "aider vs claude code", "aider vs pi", "aider vs cline", "aider vs
// codex" (Google autocomplete and "people also ask", 2026-11-10). The results page is Reddit, vendor listicles (Replit,
// Capy, techbuzz, aicentralresources) and a G2 page about an unrelated product. Aider's maintenance status comes from
// GitHub: last release v0.86.0 on 2025-08-09, last commit 2026-05-22, issue #4751 (2026-01-07) on its future with no
// maintainer reply; PyPI's aider-chat 0.86.2 was uploaded 2026-02-12. cecli is a GitHub fork of Aider-AI/aider. Other
// facts are the ones checked for /blog/opencode-alternatives the same day (READMEs, GitHub API, vendor pricing).
// Crewmark is described only as working with Claude Code and Codex, the runtimes its daemon can wake (cli/deliver.go).

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, a community fork of Aider
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (local models through Ollama)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider loaded your conventions with --read
aider --read CONVENTIONS.md

# OpenCode and Codex read AGENTS.md at the repository root
mv CONVENTIONS.md AGENTS.md

# Claude Code reads CLAUDE.md; import the same file there
echo "@AGENTS.md" >> CLAUDE.md`;

export const aiderAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Aider Alternatives (2026): Is Aider Dead? What to Use Now",
      description:
        "Is Aider still maintained? Its last release, last commit and open issues, then the best Aider alternatives in 2026: the cecli fork, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI and Claude Code, with install commands.",
    },
    breadcrumb: "Aider alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-10" },
    hero: {
      kicker: "Blog · Coding agents",
      title: "Aider alternatives in 2026: is Aider dead, and what to use instead",
      lead: "Aider was the original AI pair programmer in the terminal: open source, any model, a map of your repository, and a git commit for every change. It still installs and runs, and it has about 50,000 GitHub stars. But its last tagged release on GitHub was in August 2025 and its last commit was on May 22, 2026, so many users are looking for something that keeps up with new models. Here's where the project stands, the alternatives closest to how Aider works, and how to move your setup across.",
      cta: "Get started",
      secondary: "Is Aider dead?",
      secondaryHref: "#is-aider-dead",
    },
    sections: [
      {
        kind: "text",
        id: "is-aider-dead",
        title: "Is Aider dead?",
        text: [
          "Not officially. The repository isn't archived and nobody has announced an end. But by every public signal it's barely maintained:",
        ],
        points: [
          "Last tagged GitHub release: v0.86.0, August 9, 2025. The last package on PyPI, aider-chat 0.86.2, was uploaded on February 12, 2026.",
          "Last commit to the main branch: May 22, 2026, a merge that added newer Claude model names.",
          "About 1,960 open issues and pull requests.",
          "In January 2026 a user opened an issue asking about Aider's future. One reply calls it essentially a one-person project that has slowed down; the maintainer hasn't answered there.",
          "The README still says Aider works best with Claude 3.7 Sonnet, DeepSeek R1, o3-mini and GPT-4o.",
        ],
      },
      {
        kind: "text",
        title: "Quick picks",
        points: [
          "Aider, but still updated: cecli, a community fork of Aider.",
          "The most popular open-source terminal agent, any model: OpenCode, MIT, about 226,000 stars.",
          "Aider's minimal spirit: Pi, a small harness you extend yourself, MIT, about 121,000 stars.",
          "Local models first, like many Aider users ran it: Nanocoder, with Ollama.",
          "Aider's watch mode, where you ask for changes in code comments: Cline or Kilo Code inside VS Code and JetBrains.",
          "You pay for ChatGPT or Claude anyway: Codex CLI or Claude Code.",
          "An agent that works through a backlog on a schedule, not only when you type: Crewmark, on top of Claude Code or Codex.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Aider alternatives compared",
        text: [
          "Stars are rounded, from the GitHub API on November 10, 2026; “last commit” is the newest commit on the main branch that day.",
        ],
        headers: ["Tool", "License", "Built with", "Models", "What it costs", "Best for"],
        rows: [
          ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k stars)", "Python", "Almost any, including local", "Free; your model key", "The baseline; last commit May 22, 2026"],
          ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (~420 stars)", "Python", "Like Aider", "Free; your model key", "Staying close to Aider on a fork that's still updated"],
          ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k stars)", "TypeScript", "Any provider, local models", "Free models with a daily limit; Go $10/mo", "A full terminal agent with Plan and Build modes and a desktop app"],
          ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k stars)", "TypeScript", "Your subscription or API key", "Free", "A minimal harness you extend with tools and skills"],
          ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k stars)", "Go", "Most providers, Ollama", "Free; your key", "A polished terminal UI with LSP and MCP, on every platform"],
          ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k stars)", "TypeScript", "Your model key", "Free", "An agent in VS Code, JetBrains or the terminal"],
          ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (~28k stars)", "TypeScript", "500+, at the provider's rate", "Free to start", "IDE extensions plus a CLI forked from OpenCode"],
          ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k stars)", "TypeScript", "Ollama or any OpenAI-compatible API", "Free", "Private, local-first coding"],
          ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k stars)", "Rust", "OpenAI", "Any ChatGPT plan, including Free; or an API key", "ChatGPT users who want a fast native agent"],
          ["[Claude Code](https://code.claude.com/docs)", "Proprietary", "-", "Anthropic", "Claude Pro $20/mo", "Claude users"],
          ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (~16k stars)", "Go", "Several providers", "Free; your model key", "Large projects; last commit October 3, 2025"],
          ["[Crewmark](/pricing)", "Proprietary", "-", "Through your Claude Code or Codex", `Free plan (${free.projects} project, ${free.employees} AI employees); Pro $${pro.price}/mo coming soon`, "An agent with a role, working hours and a heartbeat that takes the next issue from a board"],
        ],
      },
      {
        kind: "steps",
        id: "open-source",
        title: "Open source Aider alternatives you can install today",
        text: [
          "Each installs with one command. Read a script before you pipe it to your shell.",
        ],
        steps: [
          {
            title: "cecli, the Aider fork",
            text: "cecli started as a fork of Aider in August 2025 and is still updated. It describes itself as a CLI agent built for extensibility and customization, installs as the `cecli` command on macOS, Linux and Windows, and is also on PyPI as cecli-dev.",
            code: install,
          },
          {
            title: "OpenCode",
            text: "The closest to Aider in reach: open source, a terminal first, and any of 200+ model providers including local ones. It adds a read-only Plan agent next to the full-access Build agent, subagents and a desktop app in beta.",
          },
          {
            title: "Pi and Nanocoder",
            text: "Pi keeps the core small and skips sub-agents and plan mode on purpose; you add what you need with extensions and skills. Nanocoder is built by a not-for-profit collective for local models through Ollama, with plan and architect modes, the latter familiar to Aider users.",
          },
        ],
        source: { label: "Source: each project's README on GitHub", href: "https://github.com/cecli-dev/cecli" },
      },
      {
        kind: "steps",
        id: "migrate",
        title: "Moving from Aider to another agent",
        steps: [
          {
            title: "Carry your conventions file across",
            text: "Aider reads coding conventions from a file you load with `--read`. OpenCode and Codex read `AGENTS.md` at the root of the repository, and Claude Code reads `CLAUDE.md`, which can import `AGENTS.md`. See [AGENTS.md for Codex](/blog/codex-agents-md) and [CLAUDE.md](/blog/claude-md).",
            code: conventions,
          },
          {
            title: "Decide how you want commits",
            text: "Aider commits every change with a generated message. Claude Code, Codex and OpenCode leave commits to you by default, so ask for a commit when a change is done, or write your commit rule into AGENTS.md.",
          },
          {
            title: "Bring your models",
            text: "If you ran Aider on DeepSeek or a local model, OpenCode, Crush, Nanocoder and Pi all take your own keys, and the first three talk to Ollama. See [Claude Code with DeepSeek](/blog/claude-code-deepseek) for the other way round.",
          },
        ],
      },
      {
        kind: "text",
        id: "vs",
        title: "Aider vs OpenCode, Claude Code, Pi and Cline",
        points: [
          "Aider vs OpenCode: both are open source and model-agnostic. OpenCode gets more than 100 commits a week and adds agents, subagents, MCP and a desktop app; Aider is simpler and commits for you.",
          "Aider vs Claude Code: Claude Code is closed source and runs Anthropic's models, included from Claude Pro at $20 a month; it gets new Claude features first. Aider is free and works with any model.",
          "Aider vs Pi: both are deliberately small. Pi is actively developed, with an SDK, RPC mode and a package system for extensions.",
          "Aider vs Cline: Cline lives mostly in your editor, with a CLI too; Aider is terminal-first, with a watch mode for editor comments.",
          "Aider vs Codex: Codex CLI is open source and written in Rust, included in every ChatGPT plan; it runs OpenAI's models.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "From pair programmer to teammate with a backlog",
        text: [
          "Aider and every tool here wait for your next message. Crewmark turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat: during its shift it wakes, takes the next issue from a board, commits and opens a pull request, and messages you when it needs a decision.",
        ],
        steps: [
          {
            title: "Hire an employee on your agent",
            text: "Run the setup command in a Claude Code or Codex conversation; that conversation becomes the employee. See the [AI software engineer](/ai-employees/software-engineer).",
          },
          {
            title: "Give it hours and a heartbeat",
            text: "It wakes every 15 to 240 minutes during the hours you set. See [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
          },
          {
            title: "Compare the rest",
            text: "For more terminal agents, see [OpenCode alternatives](/blog/opencode-alternatives); for editors, [Cursor alternatives](/blog/cursor-alternatives).",
          },
        ],
      },
    ],
    mid: {
      title: "Want an agent that keeps working between your prompts?",
      text: "Crewmark employees wake on a heartbeat during working hours and take the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is Aider dead?",
          a: "It isn't archived, and it still installs and runs. But its last GitHub release was v0.86.0 in August 2025, its last PyPI release in February 2026, and its last commit on May 22, 2026, and a January 2026 question about its future has no answer from the maintainer.",
        },
        {
          q: "Is Aider still maintained?",
          a: "Barely. There have been no commits since May 22, 2026, about 1,960 issues and pull requests are open, and the README still recommends models from early 2025. cecli, a community fork, is still updated.",
        },
        {
          q: "Is there a fork of Aider?",
          a: "Yes: cecli, a GitHub fork of Aider started in August 2025, Apache 2.0, installed as the `cecli` command. It's much smaller than Aider, with about 420 stars.",
        },
        {
          q: "Aider vs OpenCode: which is better in 2026?",
          a: "For most people, OpenCode: it's open source and model-agnostic like Aider, but it's updated almost daily and adds subagents, MCP and a desktop app. Aider is simpler and commits every change for you.",
        },
        {
          q: "Is Aider free?",
          a: "Yes. Aider is Apache 2.0 and free; you pay your model provider, or nothing if you run a local model.",
        },
        {
          q: "What's the best free Aider alternative?",
          a: "OpenCode includes free models with a daily limit; Nanocoder, Crush and OpenCode run local models through Ollama for free; and Codex CLI works with a free ChatGPT account.",
        },
      ],
    },
    cta: {
      title: "Give your coding agent a backlog, not just a prompt.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against each project's GitHub repository, README and releases, PyPI and vendor pricing pages on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Aider or any project listed. Product names are trademarks of their owners.",
  },
};
