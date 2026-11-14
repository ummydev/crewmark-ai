import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/reduce-claude-code-token-usage, the seventh evergreen tutorial of the growth plan (docs/seo/growth-plan.md),
// for "claude code token usage", "... optimization", "... monitor/tracker/dashboard", "claude code tips to reduce
// token usage", "claude code save tokens", "claude code token saving tips" and "claude code usage limits" (Google
// autocomplete, 2026-11-06). Facts come from the Claude Code docs (Manage costs effectively, which links prompt
// caching, model config and agent teams), as of `checked`. Plan limits are covered in /blog/claude-code-vs-codex, so
// this post links there. Version numbers are left out because they change weekly.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

When you are using compact, focus on test output and code changes.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const reduceClaudeCodeTokenUsage: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Token Usage: 12 Tips to Reduce It | Crewmark AI",
      description:
        "Why Claude Code uses so many tokens and how to cut it: check usage with /usage and /context, clear and compact, pick the model and effort, trim CLAUDE.md and MCP, use hooks, skills and subagents.",
    },
    breadcrumb: "Reduce Claude Code token usage",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "How to reduce Claude Code token usage (and stop hitting limits)",
      lead: "Claude Code sends your whole conversation with every request, so token usage grows with context: a one-line question late in a long session costs far more than the same question in a fresh one. This guide shows how to see where your tokens go, then twelve changes from Anthropic's own docs that cut usage, from `/clear` and `/compact` to choosing the model and effort, trimming CLAUDE.md and MCP servers, and moving noisy work into hooks, skills and subagents.",
      cta: "Get started",
      secondary: "Jump to the tips",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "measure",
        title: "First, see where your tokens go",
        headers: ["Tool", "What it shows"],
        rows: [
          ["`/usage`", "Session tokens and estimated cost; on Pro, Max, Ultra, Team and Enterprise, plan usage bars, a breakdown by skills, subagents, plugins and MCP servers, recommendations, and your heaviest `/loop` tasks"],
          ["`/context`", "What's filling the context window right now"],
          ["Status line", "Context usage shown continuously, if you configure it"],
          ["Spinner count", "The output tokens of the current turn, such as `↓ 5.5k tokens`; it doesn't include your context"],
          ["`/insights`", "An HTML report on how you work across recent sessions, with friction points and suggestions"],
        ],
      },
      {
        kind: "text",
        title: "Why usage climbs in a long session",
        points: [
          "Long context: every request carries the full conversation, and every round of tool calls sends another request. Caching makes re-reads cheaper, not free.",
          "Cache misses: your first message after a break longer than the cache lifetime reprocesses the whole context.",
          "Things that run while you're idle: session-scoped scheduled tasks and `/loop`, messages from your other sessions, goal check-ins, session recaps and idle compaction.",
          "Parallel workers: each subagent, workflow agent and agent-team teammate sends its own requests. Agent teams use about 7x the tokens of a standard session when teammates run in plan mode.",
          "Compaction itself: `/compact` has to read the conversation it summarizes. `/clear` costs nothing.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "12 ways to reduce Claude Code token usage",
        steps: [
          {
            title: "Clear between unrelated tasks",
            text: "`/clear` starts a fresh conversation, so stale context stops riding along. Run `/rename` first if you want to `/resume` it later.",
          },
          {
            title: "Compact with instructions",
            text: "`/compact Focus on code samples and API usage` tells Claude what to keep. You can also put standing compact instructions in CLAUDE.md.",
            code: compact,
          },
          {
            title: "Use the right model",
            text: "Sonnet handles most coding and costs less than Opus; keep Opus for architecture and hard reasoning. Switch with `/model`, and give simple subagents `model: haiku`.",
          },
          {
            title: "Lower the effort for simple work",
            text: "Thinking tokens bill as output and can run to tens of thousands per request. Lower the level with `/effort` for routine tasks.",
          },
          {
            title: "Keep CLAUDE.md short",
            text: "It loads in full every session. Stay under about 200 lines and move workflow-specific instructions into skills, which load only when used. See the [CLAUDE.md guide](/blog/claude-md) and [Claude Code skills](/blog/claude-code-skills).",
          },
          {
            title: "Trim MCP servers",
            text: "Tool definitions are deferred by default, but every server still adds names and instructions. Disable unused ones in `/mcp`, and prefer CLIs such as `gh`, `aws` or `gcloud`, which add no per-tool listing.",
          },
          {
            title: "Filter noisy output with a hook",
            text: "A PreToolUse hook can rewrite test commands to keep only failures, turning tens of thousands of tokens of logs into hundreds. Anthropic's docs include a ready-made filter script.",
            code: hook,
          },
          {
            title: "Delegate verbose work to subagents",
            text: "Running tests, reading docs or processing logs in a subagent keeps the output in its context; only a summary returns. Give those subagents a smaller model.",
          },
          {
            title: "Install code intelligence plugins",
            text: "For typed languages, a language-server plugin answers \"go to definition\" in one call instead of a grep and several file reads.",
          },
          {
            title: "Write specific prompts",
            text: "\"Add input validation to the login function in auth.ts\" reads a few files; \"improve this codebase\" scans everything.",
          },
          {
            title: "Plan first, stop early",
            text: "Use [plan mode](/blog/claude-code-plan-mode) for big changes so a wrong direction is caught before code is written; press Escape the moment Claude heads off course, and `/rewind` to a checkpoint.",
          },
          {
            title: "Watch what runs while you're away",
            text: "Each scheduled task, `/loop` run or idle message sends your full context. Stop loops you don't need, set `crossSessionInbound` to `hold` to queue messages from other sessions, and check the Loops rows in `/usage`.",
          },
        ],
        source: { label: "Source: Claude Code docs, Manage costs effectively", href: docs },
      },
      {
        kind: "text",
        title: "Usage limits and team costs",
        text: [
          "On Pro, Max and Ultra, usage counts against your plan's limits rather than a bill; see [Claude Code vs Codex](/blog/claude-code-vs-codex) for how the 5-hour and weekly limits work. On the API, Anthropic reports an enterprise average of around $13 per developer per active day and $150 to $250 a month, with 90% of users under $30 a day.",
          "Admins can set spend limits for teams, and a `modelPricing` table in managed settings makes `/usage` show contracted rates instead of list price.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Agents that work on a schedule, without burning tokens all night",
        text: [
          "Anything that wakes a session sends its whole context, so an always-on agent needs limits. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee that wakes on a heartbeat only during the working hours you set.",
        ],
        steps: [
          {
            title: "Set working hours and a rhythm",
            text: "Choose every 15, 30 or 60 minutes, and the hours it's on the clock; outside them it sleeps. See [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "One issue at a time",
            text: "Each heartbeat takes the next issue from the board, so the session works on a focused task instead of open-ended exploration.",
          },
          {
            title: "On the plan you already pay for",
            text: "Employees run on your existing subscription, counted against your plan's limits. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Reduce Claude Code token usage" },
    mid: {
      title: "Spend your tokens on work, not on waiting.",
      text: "Crewmark wakes Claude Code during working hours with a role, a goal and the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code token usage FAQ",
      items: [
        {
          q: "Why does Claude Code use so many tokens?",
          a: "It sends the full conversation with every request, and each round of tool calls is another request. Long sessions, cache misses after breaks, subagents and anything that runs while you're idle all add up.",
        },
        {
          q: "How do I check my Claude Code token usage?",
          a: "Run `/usage` for session tokens, plan usage and a breakdown with recommendations, and `/context` to see what fills the context window. A status line can show context usage all the time.",
        },
        {
          q: "What's the fastest way to save tokens?",
          a: "Run `/clear` between unrelated tasks, use Sonnet unless you need Opus, and keep CLAUDE.md short. Those three cover most waste.",
        },
        {
          q: "Does /compact save tokens?",
          a: "It shrinks the context for later messages, but the compaction itself reads the whole conversation, so it's a large request. If you don't need continuity, `/clear` costs nothing.",
        },
        {
          q: "Do MCP servers use tokens?",
          a: "Tool definitions are deferred until used, but each server still adds tool names and instructions. Disable servers you don't use and prefer CLI tools where they exist.",
        },
        {
          q: "Why did I hit my usage limit so fast?",
          a: "Usually a long session, a few cache misses, or background work such as `/loop`, scheduled tasks, subagents or agent teams. `/usage` on a paid plan shows which of these is behind your recent usage.",
        },
        {
          q: "Do subagents save tokens?",
          a: "They keep verbose output out of your main conversation, which keeps later requests small, but their own requests still count. Give them a smaller model to spend less.",
        },
      ],
    },
    cta: {
      title: "Put Claude Code to work on a schedule you control.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (Manage costs effectively) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
