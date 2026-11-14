import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-vs-codex, an evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude code vs
// codex", "claude code vs codex pricing", "claude code vs codex usage limits", "claude code vs codex which is better",
// "claude code vs codex reddit" and "claude code vs codex vs cursor" (Google autocomplete, 2026-11-05). Facts come from
// code.claude.com/docs, claude.com/pricing, the Claude usage-limits help article, learn.chatgpt.com/docs (where
// developers.openai.com/codex now redirects) and both GitHub repositories, as of `checked`. openai.com/chatgpt/pricing
// returned 403, so ChatGPT plan prices come from the Codex pricing docs, and OpenAI's API token prices aren't quoted.
// Neither vendor publishes absolute usage numbers for every plan, and benchmark claims are left out: each vendor picks
// its own, and they move with every model.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const claudeCodeVsCodex: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code vs Codex (2026): Pricing, Limits | Crewmark AI",
      description:
        "Claude Code vs OpenAI Codex in November 2026: models, plans and prices, 5-hour and weekly limits, CLAUDE.md vs AGENTS.md, sandboxing, subagents, scheduling, and which to pick.",
    },
    breadcrumb: "Claude Code vs Codex",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-05" },
    hero: {
      kicker: "Blog · Claude Code · Codex",
      title: "Claude Code vs Codex: which coding agent should you use?",
      lead: "Claude Code is Anthropic's coding agent; Codex is OpenAI's. Both read your repository, edit files, run commands, and work from a terminal, an IDE, a desktop app, the web and your phone. They differ in models, plans, limits, defaults and openness. This comparison covers what each costs, how their usage limits work, how their features line up, and which one fits which kind of work, as of November 2026.",
      cta: "Get started",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Claude Code vs Codex at a glance",
        headers: ["", "Claude Code", "Codex"],
        rows: [
          ["Made by", "Anthropic", "OpenAI"],
          ["Default model", "Claude Opus 5.5; Sonnet 5.5, Haiku 5.5 and Fable 5.1 available", "GPT-6.1 Sol; GPT-6 Astra, GPT-6.1 Terra and GPT-6 Luna available"],
          ["Where it runs", "Terminal, VS Code, JetBrains, desktop app, claude.ai/code, Claude mobile apps, Slack", "Terminal, VS Code, Cursor and Windsurf, ChatGPT desktop app, chatgpt.com/codex, ChatGPT mobile app, Slack and Linear"],
          ["Cheapest plan that includes it", "Claude Pro, $20/month", "ChatGPT Free (limited), then Go at $8/month and Plus at $20/month"],
          ["Open source", "No: the repository is public, but all rights reserved", "The CLI, SDK and App Server are open source (Apache-2.0); the IDE extension and cloud aren't"],
          ["Instructions file", "CLAUDE.md (reads AGENTS.md if there's no CLAUDE.md)", "AGENTS.md"],
          ["Sandbox", "Opt-in for shell commands", "On by default"],
          ["Scheduled tasks", "Cloud scheduled tasks (preview), desktop scheduled tasks, `/loop`", "Scheduled tasks in the desktop app and in the cloud"],
        ],
      },
      {
        kind: "table",
        title: "Pricing: which plans include each",
        text: [
          "Both come with their maker's chat subscription, and both can run on an API key instead, billed per token. Prices are per month in US dollars.",
        ],
        headers: ["Claude plan", "Price", "ChatGPT plan", "Price"],
        rows: [
          ["Free", "No Claude Code", "Free", "$0, GPT-6 Luna only"],
          ["Pro", "$20 ($17 billed yearly)", "Go", "$8"],
          ["Max", "$100", "Plus", "$20"],
          ["Ultra", "$200", "Pro", "$100, $200 or $500"],
          ["Team", "$25 per seat (Standard), $125 (Premium)", "Business", "$25 per user ($20 billed yearly)"],
          ["Enterprise", "$20 per seat billed yearly, plus usage at API rates", "Enterprise, Edu", "Contact sales"],
        ],
      },
      {
        kind: "text",
        title: "Usage limits",
        text: [
          "Both use a rolling 5-hour window plus weekly limits, and both share one allowance between chat and coding. Neither publishes exact hours or messages for every plan.",
        ],
        points: [
          "Claude: Pro has a 5-hour limit and a weekly limit. Max gets 5 times Pro's usage. Ultra gets 10 times Pro per week and, for verified accounts, no 5-hour limit. Claude chat, Claude Code and the IDE all draw from the same pool.",
          "Claude: if you hit the 5-hour limit mid-task, Claude Code may finish the current step (once a week on Pro, every time on Max).",
          "Codex: OpenAI estimates local messages per 5 hours on Plus by model, from 15–160 on GPT-6.1 Sol to 350–3,000 on GPT-6 Luna and 5–45 on GPT-6 Astra. ChatGPT Pro currently has no 5-hour limit; weekly limits may apply.",
          "Codex: cloud tasks and GitHub code reviews use the same allowance, and fast mode uses 2.5 times as much.",
          "Both let you keep going past the limit: Claude with usage credits or an API key, Codex with credits or an API key (the API key covers the CLI, SDK and IDE, not cloud features).",
        ],
      },
      {
        kind: "table",
        title: "Features side by side",
        headers: ["Feature", "Claude Code", "Codex"],
        rows: [
          ["Project instructions", "`CLAUDE.md`, `.claude/rules/`, auto memory", "`AGENTS.md`, `AGENTS.override.md`, 32 KiB combined by default"],
          ["Configuration", "`settings.json`", "`config.toml`"],
          ["Subagents", "Yes, plus background agents", "Yes: built-in default, worker and explorer, plus custom TOML agents"],
          ["Hooks", "Yes", "Yes, on by default"],
          ["Skills, plugins, MCP", "Yes", "Yes"],
          ["Plan mode", "Yes (Shift+Tab)", "Yes"],
          ["Permission modes", "Manual, accept edits, plan, auto (classifier-checked), bypass", "Ask for approval, approve for me, full access, custom"],
          ["Sandbox", "Opt-in: Seatbelt on macOS, bubblewrap on Linux; not on native Windows", "On by default, including a native Windows sandbox"],
          ["Parallel work", "Parallel desktop and web sessions, background agents", "Worktrees in the desktop app, cloud tasks"],
          ["Code review", "`@claude review` on Team and Enterprise; `/code-review` locally on any plan", "`@codex review` on GitHub; `/review` in the CLI"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose between Claude Code and Codex",
        text: [
          "There's no single winner: each vendor publishes benchmarks where its own model leads, and they move with every release. Choose on the things that affect your day.",
        ],
        steps: [
          {
            title: "Start from the subscription you already pay for",
            text: "If you have Claude Pro or Max, Claude Code is included; if you have ChatGPT Plus or Pro, so is Codex. Trying both costs $40 a month on the entry plans, and Codex also runs on ChatGPT Free and Go with smaller limits.",
          },
          {
            title: "Match the limits to how long you work",
            text: "For long sessions every day, compare the top plans: Claude Ultra ($200) has no 5-hour limit for verified accounts, and ChatGPT Pro has none at the moment. For occasional use, the $20 plans of either are enough.",
          },
          {
            title: "Decide how much you want sandboxed",
            text: "Codex sandboxes commands by default, including on Windows. Claude Code asks before acting by default and offers a sandbox you turn on, plus an auto mode where a classifier approves safe actions.",
          },
          {
            title: "Check where your team works",
            text: "Claude Code has a JetBrains plugin and runs from Slack; Codex plugs into Cursor, Windsurf, Slack and Linear. Both work in VS Code, on the web and on mobile.",
          },
          {
            title: "Keep your instructions portable",
            text: "Write your project rules in AGENTS.md and import it from CLAUDE.md with `@AGENTS.md`; then both agents read the same file and switching costs nothing. See the [CLAUDE.md guide](/blog/claude-md).",
          },
        ],
        source: { label: "Sources: Claude Code docs and Codex docs", href: claudeDocs },
      },
      {
        kind: "text",
        title: "What about Cursor, Gemini CLI and OpenCode?",
        text: [
          "Cursor is an editor with its own agent, and it can also host the Claude Code and Codex extensions. Gemini CLI and OpenCode are terminal agents like these two; OpenCode is open source and works with many model providers. All of them read AGENTS.md, so the portable setup above carries over.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Use both: give each agent a role",
        text: [
          "Crewmark doesn't make you pick. It turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, wakes it on a heartbeat, and gives it issues from a shared board. One employee can run on Claude Code and another on Codex in the same project.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as software engineer or SEO specialist, write its goal as a number, and run the setup command in Claude Code or Codex.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation. See [how to make Claude Code proactive](/proactive-claude-code) and [how to make Codex proactive](/proactive-codex).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; each employee takes what fits its role, comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose between Claude Code and Codex" },
    mid: {
      title: "Already pay for Claude or ChatGPT?",
      text: "Crewmark turns Claude Code and Codex into AI employees with a heartbeat and a board of issues, on the plan you already have.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code vs Codex FAQ",
      items: [
        {
          q: "Is Claude Code better than Codex?",
          a: "Neither is better for everyone. Both are capable agents with subagents, hooks, skills, MCP and plan mode. Pick on the subscription you have, the limits you need, the sandbox defaults you want and the tools your team uses.",
        },
        {
          q: "Which is cheaper, Claude Code or Codex?",
          a: "Codex has the cheaper entry: it's included in ChatGPT Free (limited) and Go at $8 a month. Claude Code starts with Claude Pro at $20. At $20 a month, Claude Pro and ChatGPT Plus both include their agent.",
        },
        {
          q: "What are the usage limits of Claude Code and Codex?",
          a: "Both use a 5-hour window plus weekly limits shared with chat. Claude Max gives 5 times Pro and Ultra 10 times Pro per week. OpenAI estimates 15–160 GPT-6.1 Sol messages per 5 hours on Plus. Claude Ultra (verified) and ChatGPT Pro currently have no 5-hour limit.",
        },
        {
          q: "Which models do Claude Code and Codex use?",
          a: "Claude Code defaults to Claude Opus 5.5, with Sonnet 5.5, Haiku 5.5 and Fable 5.1 available. Codex defaults to GPT-6.1 Sol, with GPT-6 Astra, GPT-6.1 Terra and GPT-6 Luna available.",
        },
        {
          q: "Is Codex open source? Is Claude Code?",
          a: "The Codex CLI is open source under Apache-2.0; its IDE extension and cloud aren't. Claude Code's repository is public but not open source: all rights reserved, used under Anthropic's commercial terms.",
        },
        {
          q: "Can Claude Code and Codex share the same instructions?",
          a: "Yes. Write them in AGENTS.md, which Codex reads, and put `@AGENTS.md` in CLAUDE.md so Claude Code reads the same file.",
        },
        {
          q: "Can I use Claude Code and Codex together?",
          a: "Yes. Many developers keep both and switch by task. With Crewmark, each can be an AI employee with its own role, taking issues from the same board on a heartbeat.",
        },
      ],
    },
    cta: {
      title: "Put Claude Code and Codex on the same team.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs, claude.com/pricing, the Codex docs at learn.chatgpt.com and both GitHub repositories on November 5, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude and Claude Code are trademarks of Anthropic; ChatGPT and Codex are trademarks of OpenAI.",
  },
};
