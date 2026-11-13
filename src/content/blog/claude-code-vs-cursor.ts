import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-vs-cursor, the tenth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude
// code vs cursor", "... which is better", "... pricing", "... cost", "... usage limits", "... reddit", "... 2026", "...
// pro" and "claude code vs cursor vs codex" (Google autocomplete, 2026-11-06). Claude Code facts follow
// /blog/claude-code-vs-codex (Claude Code docs, claude.com/pricing, the usage-limits help article). Cursor facts come
// only from cursor.com: the pricing page (read in a browser on 2026-11-06), the docs (models, CLI, cloud agents, rules,
// MCP, hooks, worktrees, automations), the download page, the changelog and two blog posts (joining SpaceX, 2026-08-14;
// the Claude Code extension security notice, 2026-10-29). The pricing page bundles X features with Cursor's plans; the
// copy says so without guessing at the commercial arrangement. No benchmark claims.

const cursorPricing = "https://cursor.com/pricing";

export const claudeCodeVsCursor: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code vs Cursor (2026): Pricing, Models, Limits and Which to Choose | Crewmark",
      description:
        "Claude Code vs Cursor compared in November 2026: Cursor's new Grok-first plans after joining SpaceX, what Claude models cost in each, agents, CLI, rules, MCP and hooks, and how to choose.",
    },
    breadcrumb: "Claude Code vs Cursor",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code vs Cursor in 2026: what changed, and which to choose",
      lead: "Claude Code is Anthropic's coding agent: it runs in your terminal, IDE, desktop app or browser on a Claude subscription. Cursor is an AI code editor with its own agent, CLI and cloud agents. The comparison changed this year: Cursor became part of SpaceX in August 2026, its plans are now built around Grok models, and Claude models in Cursor are billed separately at API list price. This guide compares pricing, models, limits and features as of November 6, 2026, and shows how to choose, or use both.",
      cta: "Get early access",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Claude Code vs Cursor at a glance",
        headers: ["", "Claude Code", "Cursor"],
        rows: [
          ["Made by", "Anthropic", "Cursor, part of SpaceX since August 2026"],
          ["What it is", "A coding agent for terminal, IDEs, desktop, web and mobile", "An AI code editor, plus a CLI (`agent`), cloud agents and code review"],
          ["Main models", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5 to 4.7 and Composer 2.5; Claude, GPT, Gemini and others at API list price"],
          ["Cheapest paid plan", "Claude Pro, $20/month", "Plus, $8/month, Grok models only"],
          ["Claude models cost", "Included in your Claude plan's limits", "Billed separately by usage at API list price (Premium and up)"],
          ["Project instructions", "`CLAUDE.md`, `.claude/rules/`; reads AGENTS.md if there's no CLAUDE.md", "`.cursor/rules/*.mdc`, `AGENTS.md`, user and team rules"],
          ["Platforms", "macOS, Windows, Linux", "macOS, Windows, Linux"],
        ],
      },
      {
        kind: "table",
        title: "Pricing: Claude plans vs Cursor plans",
        text: [
          "Monthly prices in US dollars, as listed on claude.com/pricing and cursor.com/pricing. Cursor's plans now also include X features, such as fewer timeline ads, and share one AI usage pool with Grok that refreshes weekly.",
        ],
        headers: ["Claude plan", "Price", "Cursor plan", "Price"],
        rows: [
          ["Free", "No Claude Code", "Free", "$0, limited agent requests"],
          ["Pro", "$20 ($17 billed yearly)", "Plus", "$8, Grok models only"],
          ["Max", "$100", "Premium", "$30: 4x Plus usage, cloud agents, automations, code review, third-party models at API price"],
          ["Ultra", "$200", "Super", "$100: 15x Plus usage"],
          ["Team", "$25 per seat (Standard), $125 (Premium)", "Ultra", "$200: 50x Plus usage"],
          ["Enterprise", "$20 per seat billed yearly, plus usage at API rates", "Teams, Enterprise", "From $30 per user; Enterprise custom"],
        ],
      },
      {
        kind: "table",
        title: "Features side by side",
        headers: ["Feature", "Claude Code", "Cursor"],
        rows: [
          ["Agent in the terminal", "`claude`, with headless `-p`", "`agent` CLI, with print mode `-p`"],
          ["Plan mode", "Yes (Shift+Tab, `/plan`)", "Yes (Shift+Tab, `/plan`)"],
          ["Cloud agents", "Claude Code on the web, cloud sessions", "Cloud agents in VMs (Premium and up), started from web, iOS, GitHub, Slack, Linear or the API"],
          ["Parallel work", "`--worktree`, subagents, agent view", "`/worktree`, `/best-of-n` across models"],
          ["Automations", "`/loop`, desktop and cloud scheduled tasks", "Automations on cron, Git, Slack, Linear, webhooks, Sentry, PagerDuty (Premium and up)"],
          ["MCP", "Yes: `claude mcp add`, `.mcp.json`", "Yes: `.cursor/mcp.json`"],
          ["Hooks", "Yes, 30+ events in `settings.json`", "Yes, about 20 events in `hooks.json`; can load Claude Code hooks"],
          ["Code review", "`/code-review` locally; `@claude review` on Team and Enterprise", "Bugbot on GitHub, GitLab, Bitbucket and Azure DevOps"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose between Claude Code and Cursor",
        text: [
          "Neither is better at everything, and published benchmarks favor whoever published them. Decide on the things that change your day.",
        ],
        steps: [
          {
            title: "Decide which models you want to pay for",
            text: "If you want Claude models every day, a Claude plan includes them within its limits; in Cursor they're billed on top of the plan at API list price. If you're happy on Grok and Composer, Cursor's $8 and $30 plans are cheaper than Claude's.",
          },
          {
            title: "Decide where you want to work",
            text: "Cursor is an editor first: inline edits, tab completion and the agent in one window. Claude Code is an agent first: it works from any terminal and plugs into VS Code, JetBrains, the desktop app, the web and Slack.",
          },
          {
            title: "Check how much should run without you",
            text: "Both run in the cloud and on schedules. Cursor's cloud agents and automations need Premium or higher; Claude Code's scheduled tasks and cloud sessions come with Claude plans. See [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Keep your setup portable",
            text: "Write shared rules in AGENTS.md (both read it) and import it from CLAUDE.md; Cursor can also load Claude Code hooks. Switching or mixing then costs little. See the [CLAUDE.md guide](/blog/claude-md).",
          },
          {
            title: "Or use both",
            text: "Anthropic's VS Code docs include an install link for Cursor, so the Claude Code extension runs inside the Cursor editor, on your Claude plan.",
          },
        ],
        source: { label: "Sources: Claude Code docs and Cursor pricing", href: cursorPricing },
      },
      {
        kind: "text",
        title: "If you use the Claude Code extension in Cursor",
        text: [
          "On October 29, 2026 Cursor reported that malicious versions 2.1.312 and 2.1.313 of the Anthropic.claude-code extension, not built by Anthropic, were available in Cursor's extension marketplace for about 11 hours, for Windows and macOS. Cursor removed them, rebuilt the marketplace and published a check: an SSH key labelled `svc-telemetry` in your `authorized_keys` means the machine was affected. If you installed or updated the extension that day, follow Cursor's security notice.",
        ],
      },
      {
        kind: "text",
        title: "And Codex?",
        text: [
          "OpenAI's Codex is the third common choice, included with ChatGPT plans from the free tier up, and it runs inside Cursor too. Compare it in [Claude Code vs Codex](/blog/claude-code-vs-codex), and see the [Claude Code orchestration tools](/blog/claude-code-orchestration-tools) for running several agents at once.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Whichever you pick, give it a job",
        text: [
          "Editors and agents still wait for your next prompt. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Pick a role and a goal",
            text: "Software engineer, reviewer, SEO writer: each has a goal written as a number. Read [what an AI employee is](/ai-employees).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes in the same conversation and takes the next issue.",
          },
          {
            title: "Review on the board",
            text: "It comments as it works and messages you when it needs a decision.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose between Claude Code and Cursor" },
    mid: {
      title: "Picked your agent? Now let it work without waiting for you.",
      text: "Crewmark wakes Claude Code or Codex on a heartbeat with a role, a goal and a board of issues.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code vs Cursor FAQ",
      items: [
        {
          q: "Is Claude Code better than Cursor?",
          a: "It depends on how you work. Claude Code suits people who want Claude models included in a subscription and an agent that works from any terminal or IDE. Cursor suits people who want an AI editor with inline edits, and who are fine with Grok models or paying API prices for others.",
        },
        {
          q: "Can I use Claude models in Cursor?",
          a: "Yes, on Premium ($30) and higher, but third-party models such as Claude are billed separately by usage at API list price. The $8 Plus plan offers Grok models only.",
        },
        {
          q: "Which is cheaper, Claude Code or Cursor?",
          a: "Cursor's entry plans are cheaper ($8 and $30 a month), but Claude usage in Cursor costs extra. If you mainly use Claude models, a Claude Pro ($20) or Max ($100) plan usually works out cheaper than paying API prices.",
        },
        {
          q: "Does Cursor belong to SpaceX now?",
          a: "Yes. Cursor announced on August 14, 2026 that it had been acquired by SpaceX, completing a process that started in April. Its plans now come with X features and Grok models.",
        },
        {
          q: "Can I run Claude Code inside Cursor?",
          a: "Yes. The Claude Code extension installs in Cursor through Anthropic's install link, and the `claude` CLI runs in Cursor's terminal. Use the official extension and check its version after Cursor's October 29 security notice.",
        },
        {
          q: "Do Claude Code and Cursor share configuration?",
          a: "Partly. Both read AGENTS.md, both support MCP (each with its own config file), and Cursor can load Claude Code hooks. Rules and settings files are otherwise separate.",
        },
        {
          q: "What about usage limits?",
          a: "Claude plans use a 5-hour window plus weekly limits shared with Claude chat. Cursor plans share one weekly-refreshing pool with Grok, sized as multiples of the Plus plan, with top-ups or API billing beyond it.",
        },
      ],
    },
    cta: {
      title: "Turn your coding agent into a teammate that keeps going.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs, claude.com/pricing and cursor.com (pricing, docs, changelog and blog) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, Cursor or SpaceX. Claude and Claude Code are trademarks of Anthropic; Cursor of its owner.",
  },
};
