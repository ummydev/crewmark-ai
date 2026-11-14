import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-deepseek, for "claude code deepseek", "... v4", "... api", "... v4 flash", "... setup", "...
// config", "... integration", "deepseek claude code" and "deepseek codex" (Google autocomplete, 2026-11-06). Follows
// /blog/deepseek-harness while "deepseek harness" is rising. Facts come only from DeepSeek's API docs on 2026-11-06:
// Agent Integrations → Claude Code and Codex (api-docs.deepseek.com/quick_start/agent_integrations/*.md) and the pricing
// page. The environment variables are copied as DeepSeek lists them. We don't claim which Claude Code features work or
// don't against the DeepSeek endpoint beyond what DeepSeek states.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const claudeCodeDeepseek: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code with DeepSeek V4: Setup and Cost | Crewmark AI",
      description:
        "Run Claude Code on DeepSeek's models: the environment variables DeepSeek documents for deepseek-flash and deepseek-v4-pro, model mapping, web search, pricing, and the Codex setup.",
    },
    breadcrumb: "Claude Code with DeepSeek",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · DeepSeek",
      title: "How to use DeepSeek models in Claude Code",
      lead: "DeepSeek's API speaks Anthropic's protocol, so Claude Code can run on DeepSeek's models by pointing it at `https://api.deepseek.com/anthropic` with a DeepSeek API key. DeepSeek documents the exact settings: `deepseek-flash` (DeepSeek-V4.1-Flash) with a 1M-token context for most work, and `deepseek-v4-pro` behind the Opus name. This guide walks through the setup on macOS, Linux and Windows, explains how Claude model names are mapped, what it costs, and how to do the same in Codex.",
      cta: "Get started",
      secondary: "Jump to the setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Claude Code with DeepSeek",
        steps: [
          {
            title: "Get a DeepSeek API key",
            text: "Create one on platform.deepseek.com under API keys, and add balance to the account; usage is billed per token.",
          },
          {
            title: "Install Claude Code if you haven't",
            text: "DeepSeek's guide installs it with npm: Node.js 18 or later, Git for Windows on Windows, then `npm install -g @anthropic-ai/claude-code` and `claude --version` to check.",
          },
          {
            title: "Set the environment variables (macOS and Linux)",
            text: "These point Claude Code at DeepSeek's Anthropic-compatible endpoint, use `deepseek-flash` with its 1M context for the main model and subagents, and raise the effort level and auto-compact window. Put them in your shell profile to keep them.",
            code: env,
          },
          {
            title: "Or on Windows (PowerShell)",
            text: "The same settings as PowerShell environment variables for the current session.",
            code: windows,
          },
          {
            title: "Start Claude Code in your project",
            text: "Run `cd` into the project and `claude`. Everything else, such as CLAUDE.md, skills, hooks and MCP servers, is configured as usual.",
          },
        ],
        source: { label: "Source: DeepSeek API docs, Integrate with Claude Code", href: docs },
      },
      {
        kind: "table",
        title: "How Claude model names map to DeepSeek models",
        text: [
          "When Claude Code (or the Claude desktop app) sends a Claude model name to DeepSeek's endpoint, DeepSeek maps it like this. That's why the setup above sets every model variable to `deepseek-flash`: otherwise anything that asks for Opus is billed at V4 Pro prices.",
        ],
        headers: ["Model name Claude Code sends", "DeepSeek model used", "Notes"],
        rows: [
          ["`claude-opus-*`", "`deepseek-v4-pro`", "Billed at V4 Pro prices"],
          ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash; accepts images"],
          ["`deepseek-flash[1m]`", "`deepseek-flash` with a 1,048,576-token context", "As set in DeepSeek's recommended variables"],
        ],
      },
      {
        kind: "table",
        id: "cost",
        title: "What it costs",
        text: [
          "DeepSeek API prices in US dollars per million tokens on November 6, 2026. Off-peak rates (outside 01:00–04:00 and 06:00–10:00 UTC on weekdays) are half of peak. Web search in Claude Code also works against DeepSeek's API, but each search adds model tokens to summarize results and is billed under DeepSeek's Search API.",
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
        title: "Using DeepSeek in Codex",
        text: [
          "DeepSeek also supports Codex, through the Responses API. Its guide offers a setup script that backs up `~/.codex/config.toml`, writes a `~/.codex/models.json` catalog with `deepseek-flash` and `deepseek-v4-pro`, and adds a DeepSeek provider; one configuration then covers the Codex CLI, the ChatGPT desktop app and the VS Code extension. Read the script before running it, or follow the manual steps in the same guide. Built-in web search is turned off by the script and is available only with `deepseek-v4-pro`. For Codex's own instruction files, see the [Codex AGENTS.md guide](/blog/codex-agents-md).",
        ],
      },
      {
        kind: "text",
        title: "Claude Code with DeepSeek vs DeepSeek Harness",
        points: [
          "Claude Code with DeepSeek: you keep Claude Code's interface and habits, including CLAUDE.md, skills, hooks and plugins, and pay DeepSeek's per-token prices instead of a Claude plan.",
          "DeepSeek Harness: DeepSeek's own open-source agent app, built around plugins, with a desktop app and web UI; it can also run Claude Code or Codex as subagents. See the [DeepSeek Harness guide](/blog/deepseek-harness).",
          "Either way, the models are the same `deepseek-flash` and `deepseek-v4-pro`, billed by DeepSeek.",
          "To switch back to Anthropic's models, unset the variables (or open a new shell without them) and sign in to Claude Code as usual.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Cheap models, working all day",
        text: [
          "Running Claude Code or DeepSeek Harness on DeepSeek's prices makes it affordable to keep agents busy. Crewmark turns those sessions into AI employees with a role, a goal and working hours, and wakes each one on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Use the setup you already have",
            text: "An employee runs in a Claude Code, Codex, DeepSeek Harness or OpenCode session on your machine, with your environment and keys.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours it wakes every 15, 30 or 60 minutes in the same conversation and takes the next issue; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Keep the bill in check",
            text: "Working hours and one issue at a time keep usage predictable; see [how to reduce Claude Code token usage](/blog/reduce-claude-code-token-usage).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use DeepSeek models in Claude Code" },
    mid: {
      title: "Claude Code on DeepSeek is cheap. Let it work more.",
      text: "Crewmark wakes Claude Code, Codex or DeepSeek Harness on a heartbeat with a role, a goal and a board of issues.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code with DeepSeek FAQ",
      items: [
        {
          q: "Can Claude Code use DeepSeek models?",
          a: "Yes. DeepSeek's API is Anthropic-compatible at `https://api.deepseek.com/anthropic`. Set `ANTHROPIC_BASE_URL` to it and `ANTHROPIC_AUTH_TOKEN` to your DeepSeek API key, as DeepSeek's guide shows.",
        },
        {
          q: "Which DeepSeek model should I use in Claude Code?",
          a: "DeepSeek's guide sets `deepseek-flash` (DeepSeek-V4.1-Flash) with a 1M context for every role. `deepseek-v4-pro` is used when a request asks for an Opus model, at higher prices.",
        },
        {
          q: "How much does Claude Code with DeepSeek cost?",
          a: "Only DeepSeek API usage: for `deepseek-flash`, $0.30 per million input tokens on a cache miss and $1.20 per million output tokens at peak, half that off-peak, and much less for cached input.",
        },
        {
          q: "Does web search work in Claude Code with DeepSeek?",
          a: "Yes. DeepSeek supports Claude Code's web search tool; each search adds model tokens to summarize results and is billed under DeepSeek's Search API.",
        },
        {
          q: "Do I need a Claude subscription?",
          a: "No. With these variables, Claude Code sends requests to DeepSeek and bills your DeepSeek account instead of a Claude plan.",
        },
        {
          q: "Can I use DeepSeek in Codex too?",
          a: "Yes. DeepSeek documents a Codex setup through the Responses API, with a script or manual edits to `~/.codex/config.toml` and `~/.codex/models.json`.",
        },
        {
          q: "Claude Code with DeepSeek or DeepSeek Harness?",
          a: "If you like Claude Code's tools and workflow, keep it and switch the model. If you want DeepSeek's own plugin-based app with a desktop UI, try DeepSeek Harness.",
        },
      ],
    },
    cta: {
      title: "Put your DeepSeek-powered agent on a schedule.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against DeepSeek's API docs (Claude Code and Codex integrations, pricing) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by DeepSeek, Anthropic or OpenAI. Claude and Claude Code are trademarks of Anthropic; Codex of OpenAI.",
  },
};
