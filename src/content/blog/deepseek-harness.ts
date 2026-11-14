import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/deepseek-harness (MC-134 follow-up), for "deepseek harness" and its long tail: desktop, github, plugins, cli,
// linux, super agent, agent, paper; vs claude code, vs codex, vs opencode; how to use for free, in vscode, with ollama
// (Google autocomplete, 2026-11-06). Google Trends (past 30 days) shows "deepseek harness" searched about six times as
// often as "super agent" and still rising. Facts come only from DeepSeek's own pages on 2026-11-06: deepseek.com/en/
// harness, the deepseek-ai/deepseek-harness repository (README, SAFETY.md, package READMEs, docs) and its GitHub API
// data, api-docs.deepseek.com/quick_start/pricing.md and arXiv 2608.25512. DeepSeek publishes no comparison with other
// agents, so the comparison table is our own reading of each tool's docs. Ollama and a VS Code extension aren't
// documented; the copy says so instead of guessing.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Run the web UI with Node.js
npx @deepseek-ai/dsh web
# then open http://127.0.0.1:3080

# Or build from source
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# One task, no UI, with a permission mode
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# Stream events as JSON, e.g. for scripts
dsh headless "Summarize open TODOs" --json

# Add a plugin to a profile
dsh plugin --profile default add <package>`;

export const deepseekHarness: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "DeepSeek Harness: What It Is, Pricing, vs Claude Code",
      description:
        "DeepSeek Harness (dsh) explained: the open-source agent harness from DeepSeek, desktop app and CLI, install, DeepSeek API pricing, plugins and the super-agent, and how it compares with Claude Code, Codex and OpenCode.",
    },
    breadcrumb: "DeepSeek Harness guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · DeepSeek",
      title: "DeepSeek Harness: what it is, how to install it, and how it compares",
      lead: "DeepSeek Harness (`dsh`) is DeepSeek's open-source agent harness: an app that runs AI agents for everyday tasks, coding, research and background work, built so that nearly everything, from tools to the interface, is a plugin. It's MIT-licensed, in developer preview, and one of the most-starred repositories on GitHub, and searches for it have climbed since DeepSeek's Super-agent prototype appeared on October 31, 2026. This guide covers what it is, the desktop app and CLI, installing it, what it costs, its main features, and how it compares with Claude Code, Codex and OpenCode.",
      cta: "Get started",
      secondary: "Jump to install",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "at-a-glance",
        title: "DeepSeek Harness at a glance",
        headers: ["", "DeepSeek Harness"],
        rows: [
          ["Made by", "DeepSeek AI"],
          ["What it is", "An open-source agent harness with an \"everything is a plugin\" architecture, built on the Cordis framework"],
          ["License", "MIT; about 275,000 GitHub stars on November 6, 2026"],
          ["Status", "Developer preview; DeepSeek warns of compatibility-breaking changes, and releases are all marked prerelease (latest v0.2.2-rc.1, November 4, 2026)"],
          ["Ways to use it", "Desktop app (macOS Apple silicon, Windows x64), web UI (`dsh web`), headless CLI, ACP and SDK modes"],
          ["Default models", "`deepseek-flash` (DeepSeek-V4.1-Flash) and `deepseek-v4-pro`, each with a 1,048,576-token context"],
          ["Other providers", "Anthropic, OpenAI, Kimi, GLM, or any OpenAI- or Anthropic-compatible endpoint, including a self-hosted server"],
          ["Price", "Free software; you pay DeepSeek API usage (or another provider's)"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to install and use DeepSeek Harness",
        steps: [
          {
            title: "Pick desktop or web",
            text: "Download the desktop app from deepseek.com/en/harness for macOS (Apple silicon) or Windows (64-bit); on macOS it can also install a `dsh` command. On any machine with Node.js, run the web UI with npx, or build from source.",
            code: install,
          },
          {
            title: "Sign in or add an API key",
            text: "On first launch, either sign in with your DeepSeek account in the browser or paste an API key from platform.deepseek.com under Settings → Models. Keys are stored in `~/.dsh/.credentials.yaml` (`$DSH_HOME`).",
          },
          {
            title: "Give it project instructions",
            text: "DeepSeek Harness reads `AGENTS.md` or `CLAUDE.md` in your project (plus `.local.md` variants), and a global `~/.dsh/AGENTS.md`. Existing instructions written for Claude Code or Codex carry over; see the [CLAUDE.md guide](/blog/claude-md) and [Codex AGENTS.md guide](/blog/codex-agents-md).",
          },
          {
            title: "Choose how much it may do",
            text: "Pick a sandbox mode (`read-only`, `workspace-write` or `danger-full-access`) and an approval policy (`ask` or `never`). DeepSeek's safety notes say the harness is experimental, hasn't had a security audit, and the sandbox doesn't guarantee isolation, so start read-only on code you care about.",
          },
          {
            title: "Run tasks headless and add plugins",
            text: "Use `dsh headless` for one-off tasks in scripts, `--resume` or `--session-id` to continue a session, and `dsh plugin` to add plugins such as scheduled tasks, subagents or agent teams.",
            code: headless,
          },
        ],
        source: { label: "Source: DeepSeek Harness repository and docs", href: repo },
      },
      {
        kind: "table",
        id: "pricing",
        title: "DeepSeek Harness pricing: what it costs to run",
        text: [
          "The harness is free and open source. Usage is billed by the DeepSeek API at these rates, in US dollars per million tokens (api-docs.deepseek.com, November 6, 2026). Off-peak rates are half of peak; peak hours are 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays. DeepSeek documents no free quota, so \"using it for free\" in practice means free software plus whatever API credit you have.",
        ],
        headers: ["Per 1M tokens", "deepseek-flash, peak", "deepseek-flash, off-peak", "deepseek-v4-pro, peak", "deepseek-v4-pro, off-peak"],
        rows: [
          ["Input, cache hit", "$0.006", "$0.003", "$0.044", "$0.022"],
          ["Input, cache miss", "$0.30", "$0.15", "$1.32", "$0.66"],
          ["Output", "$1.20", "$0.60", "$3.96", "$1.98"],
        ],
      },
      {
        kind: "text",
        title: "Main features",
        points: [
          "Plugins for everything: tools, models, interfaces and behaviors are plugins; install them per profile or create one by asking in chat (\"Creator mode\"). Community plugins use the GitHub topic `dsh-plugin`.",
          "Official and experimental plugins listed by DeepSeek include agent teams, auto approval review, scheduled tasks, voice input, a terminal, an agent loop and subagents.",
          "Skills (`SKILL.md` folders), MCP servers, and hooks, including an experimental bridge that runs existing Claude Code hooks.",
          "Subagents in-process, or backed by ACP, Codex, Claude Code or another Harness.",
          "Sessions you can resume, compaction, headless mode with JSON events, and an SDK for building on top.",
          "The Super-agent: a separate MIT bundle, dsh-superagent, makes the harness act proactively on a GitHub repository; DeepSeek calls it a research prototype. See [DeepSeek Super-Agent explained](/blog/deepseek-super-agent).",
          "The paper often linked with it, \"A Programming Paradigm for Spatiotemporal Composability\" (arXiv, August 2026), describes Cordis, the framework underneath, not the harness itself.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
        text: [
          "DeepSeek doesn't publish a comparison; this is our reading of each tool's own docs on November 6, 2026. DeepSeek also documents how to use its models inside Claude Code, Codex and OpenCode, so you can mix and match.",
        ],
        headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
        rows: [
          ["Made by", "DeepSeek", "Anthropic", "OpenAI", "Anomaly (open source)"],
          ["License", "MIT", "Proprietary", "CLI Apache-2.0", "MIT"],
          ["Pay with", "DeepSeek API usage (or other providers)", "Claude plan from $20/month, or API", "ChatGPT plan (Free and up), or API", "Your API keys, or a Copilot or ChatGPT sign-in"],
          ["Interfaces", "Desktop (macOS, Windows), web UI, headless CLI", "Terminal, IDEs, desktop, web, mobile", "CLI, IDE, desktop, web, mobile", "Terminal, desktop, IDE, web"],
          ["Instructions file", "AGENTS.md or CLAUDE.md", "CLAUDE.md (AGENTS.md as fallback)", "AGENTS.md", "AGENTS.md"],
          ["Extending it", "Plugins for everything, skills, MCP, hooks", "Skills, plugins, MCP, hooks", "Skills, plugins, MCP, hooks", "Plugins, MCP"],
          ["Maturity", "Developer preview, breaking changes expected", "Generally available", "Generally available", "Active open source"],
        ],
      },
      {
        kind: "text",
        title: "Questions people search for",
        points: [
          "Linux: there's no Linux desktop download yet; on Linux, run the web UI with `npx @deepseek-ai/dsh web` or build from source.",
          "VS Code: DeepSeek doesn't ship a VS Code extension; use the desktop or web UI alongside your editor, or use DeepSeek models inside an editor agent DeepSeek documents, such as Claude Code or Codex.",
          "Ollama and local models: not documented. The harness accepts a custom OpenAI- or Anthropic-compatible endpoint for a self-hosted server, which is the documented route for your own models.",
          "TUI: no terminal UI ships by default; a custom profile or the experimental terminal plugin are the documented options.",
          "Paper: see the Cordis paper above; DeepSeek asks to cite the harness itself as \"DeepSeek Harness: Everything is a Plugin\".",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give DeepSeek Harness a job, not just a task",
        text: [
          "Crewmark supports DeepSeek Harness alongside Claude Code, Codex and OpenCode. It turns a session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a shared board.",
        ],
        steps: [
          {
            title: "Pick DeepSeek Harness as the agent",
            text: "Run the setup command in your project; the employee runs in a DeepSeek Harness session on your machine, billed to your DeepSeek API account.",
          },
          {
            title: "Give it a role and a goal",
            text: "A software engineer, an SEO specialist, a growth marketer: each with a number to move. Read [what an AI employee is](/ai-employees).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours it wakes every 15, 30 or 60 minutes, takes the next issue and messages you when it needs a decision. Compare approaches in [what is a superagent](/blog/superagent).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Install and use DeepSeek Harness" },
    mid: {
      title: "Running DeepSeek Harness? Put it on the board.",
      text: "Crewmark wakes DeepSeek Harness, Claude Code or Codex on a heartbeat with a role, a goal and a board of issues.",
      button: "Get started",
    },
    faq: {
      title: "DeepSeek Harness FAQ",
      items: [
        {
          q: "What is DeepSeek Harness?",
          a: "An open-source agent harness from DeepSeek AI (`dsh`, MIT license) for everyday tasks, coding, research and background work, built around plugins. It's in developer preview.",
        },
        {
          q: "Is DeepSeek Harness free?",
          a: "The software is free and open source. Running it uses a model API, by default DeepSeek's, billed per token; DeepSeek documents no free quota.",
        },
        {
          q: "How do I install DeepSeek Harness?",
          a: "Download the desktop app for macOS (Apple silicon) or Windows from deepseek.com/en/harness, or run `npx @deepseek-ai/dsh web` with Node.js and open http://127.0.0.1:3080.",
        },
        {
          q: "Does DeepSeek Harness work on Linux?",
          a: "There's no Linux desktop download, but the web UI and CLI run on Linux through npx or a source build.",
        },
        {
          q: "DeepSeek Harness vs Claude Code: which is better?",
          a: "They suit different needs. DeepSeek Harness is open source, cheap per token on DeepSeek's models and extensible through plugins, but in developer preview. Claude Code is a mature product included with Claude plans. DeepSeek's models can also run inside Claude Code.",
        },
        {
          q: "Can DeepSeek Harness use Claude or GPT models?",
          a: "Yes. It has built-in providers for Anthropic, OpenAI, Kimi and GLM, and accepts any OpenAI- or Anthropic-compatible endpoint.",
        },
        {
          q: "What is the DeepSeek super agent?",
          a: "dsh-superagent, a research prototype bundle for DeepSeek Harness released on October 31, 2026, that makes it act proactively on a GitHub repository. See [DeepSeek Super-Agent explained](/blog/deepseek-super-agent).",
        },
      ],
    },
    cta: {
      title: "Turn DeepSeek Harness into an AI employee.",
      text: "Crewmark turns DeepSeek Harness, Claude Code, Codex and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against deepseek.com, the deepseek-ai/deepseek-harness repository, DeepSeek's API docs and arXiv on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by DeepSeek, Anthropic or OpenAI. Product names are trademarks of their owners.",
  },
};
