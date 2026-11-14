import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-background-agents, for "claude code background agent", "claude code headless", "claude code -p"
// and "run claude code in background" (docs/seo/keywords.md). Facts come from Anthropic's Claude Code docs at
// code.claude.com/docs (headless, cli-reference, interactive-mode, agent-view, scheduled-tasks, routines,
// permission-modes, github-actions) as of `checked`. The docs don't say whether `claude -p` on a subscription login
// draws from the plan's quota, and have no cron example, so the copy says so. Check again when editing.

const docs = "https://code.claude.com/docs/en/headless";

const cron =
  '# crontab -e: weekdays at 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1';

export const claudeCodeBackgroundAgents: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Background Agents: Headless Mode | Crewmark AI",
      description:
        "Run Claude Code in the background: background tasks, agent view with --bg, headless claude -p with cron, cloud sessions, scheduled tasks and the permissions each needs.",
    },
    breadcrumb: "Claude Code background agents",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-02" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "How to run Claude Code background agents",
      lead: "A background agent keeps working while you do something else: a long test run you sent to the background, a session you started with --bg and closed the terminal on, or a headless claude -p job that cron starts every morning. Claude Code has a tool for each of these. This guide shows how to use them, what keeps each one running, and the permissions an unattended run needs.",
      cta: "Get started",
      secondary: "Jump to headless mode",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        title: "Five ways to run Claude Code in the background",
        text: ["They differ in what has to stay running, and who starts the work."],
        headers: ["", "Starts with", "Keeps running while", "Good for"],
        rows: [
          ["Background tasks", "Ctrl+B, or Claude runs a command in the background", "The session is open", "Long builds and tests, subagents, inside one conversation"],
          ["Agent view", "`claude --bg \"<prompt>\"`", "Your computer is on (the terminal can close)", "Several sessions you start now and check later"],
          ["Headless mode", "`claude -p \"<prompt>\"`, from a script or cron", "The command runs", "Scripts, cron jobs, CI"],
          ["Cloud sessions", "`claude --cloud \"<task>\"`", "Anthropic's servers run it (laptop can close)", "Long tasks on a GitHub repo"],
          ["Scheduled tasks", "`/schedule`, the desktop app or `/loop`", "Depends on the kind: cloud, app open, or session open", "Recurring work; see [how to make Claude Code proactive](/proactive-claude-code)"],
        ],
      },
      {
        kind: "text",
        title: "Background tasks inside a session",
        text: [
          "Press Ctrl+B while Claude is running a Bash command or a subagent to send it to the background (twice in tmux), and keep talking to Claude. Claude can also start a command in the background on its own. Subagents Claude spawns run in the background by default.",
          "Type `/tasks` to list running shells and subagents and check on them. In a local terminal session a background command has no time limit, but it stops when Claude Code exits. To run several agents side by side, see [how to run multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        ],
      },
      {
        kind: "text",
        title: "Agent view: sessions that outlive the terminal",
        text: [
          "`claude --bg \"<prompt>\"` starts a session in the background and returns right away; `/bg` moves the session you're in to the background. A supervisor process runs them, so closing the terminal doesn't stop them, but shutting down or restarting the computer does, and an unattached idle session is stopped after about an hour.",
          "`claude agents` opens the agent view; `claude attach <id>`, `claude logs <id>` and `claude stop <id>` manage one session. Agent view is a research preview, so the commands may change.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Run Claude Code headless with claude -p",
        steps: [
          {
            title: "Run one prompt and exit",
            text: "`-p` (or `--print`) runs Claude Code without the interactive interface and exits when it's done, with exit code 0 on success. You can also pipe input in.",
            code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
          },
          {
            title: "Get output a script can read",
            text: "`--output-format json` returns the result with the session ID and metadata, including `total_cost_usd`, an estimate computed on your machine. `stream-json` (with `--verbose`) streams events as they happen.",
            code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
          },
          {
            title: "Allow only the tools it needs",
            text: "In headless mode nobody is there to approve a prompt. Since v2.1.302 a run with no mode set starts in Manual and denies anything that would need approval. Use `--allowedTools` for what it may do and `--permission-mode dontAsk` to deny the rest instead of waiting.",
            code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
          },
          {
            title: "Cap the run",
            text: "`--max-turns` stops after a number of agent turns, and `--max-budget-usd` at an estimated cost (it can overshoot a little). Both work only with `-p`.",
            code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
          },
          {
            title: "Continue the same conversation later",
            text: "Save the session ID from the JSON output and pass it to `--resume`, or use `--continue` for the most recent session in the directory.",
            code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
          },
          {
            title: "Run it on a schedule with cron",
            text: "Anthropic's docs don't include a cron example; this one uses only documented flags. Cron has a minimal PATH, so use the full path from `which claude`, and create the log folder first. Don't add `--bare` here: it skips your subscription login and needs an API key.",
            code: cron,
          },
        ],
        source: { label: "Source: Anthropic's headless mode docs", href: docs },
      },
      {
        kind: "text",
        title: "Permissions for unattended runs",
        points: [
          "`dontAsk` plus an `--allowedTools` list is the locked-down choice: it denies anything not on the list.",
          "`auto` lets a classifier review each action instead of you. Anthropic notes it doesn't guarantee safety.",
          "`acceptEdits` approves file edits and simple file commands, but not other shell commands.",
          "`bypassPermissions` skips prompts and safety checks. Anthropic says to use it only in isolated containers or VMs without internet access, as it offers no protection against prompt injection.",
          "For rules that apply to every run in a project, put `permissions.allow` and `permissions.deny` in `.claude/settings.json`. Deny rules always win.",
        ],
      },
      {
        kind: "text",
        title: "Cloud options: when your computer is off",
        points: [
          "Cloud sessions: `claude --cloud \"<task>\"` runs on Anthropic's infrastructure from your GitHub branch and keeps going with the laptop closed. Send follow-ups with `claude -p \"...\" --cloud <session-id>`.",
          "Cloud scheduled tasks: created with `/schedule` or at claude.ai/code, they run on a schedule (at most hourly), from an API call or from GitHub events. Pro, Max, Ultra, Team and Enterprise; research preview.",
          "GitHub Actions: `anthropics/claude-code-action@v1` with a `schedule` trigger. An OAuth token from `claude setup-token` uses your subscription; an API key is billed per token.",
        ],
      },
      {
        kind: "steps",
        kicker: "With Crewmark",
        title: "Give a background agent a standing job",
        text: [
          "Background tasks, agent view and cron all start work you've already decided on. Crewmark gives a Claude Code session an ongoing role instead: it wakes on a heartbeat during working hours, takes the next issue from a board and messages you when it's blocked.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role and a goal in numbers, and run the setup command Crewmark gives you in Claude Code. That conversation becomes the employee.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "The Crewmark daemon wakes the session every 15, 30 or 60 minutes during its working hours, on the subscription you already pay for, and leaves it alone outside them.",
          },
          {
            title: "Assign issues, answer messages",
            text: "Add work as issues on the board; the employee picks them up, comments as it goes and asks you when it needs a review. See [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run Claude Code headless with claude -p" },
    mid: {
      title: "Want it to pick its own next task?",
      text: "Crewmark wakes your Claude Code session on a heartbeat and hands it the next issue from a board, during working hours you set.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code background agent FAQ",
      items: [
        {
          q: "How do I run Claude Code in the background?",
          a: "Inside a session, press Ctrl+B to background a running command or subagent. To start a whole session in the background, use `claude --bg \"<prompt>\"`. For scripts and cron, use headless mode: `claude -p \"<prompt>\"`.",
        },
        {
          q: "What is Claude Code headless mode?",
          a: "Running Claude Code with `-p` (or `--print`): it takes a prompt, works without the interactive interface and exits, printing the result as text, JSON or a stream of JSON events.",
        },
        {
          q: "Does a background agent keep running when I close the terminal?",
          a: "Background tasks inside a session stop when Claude Code exits. Sessions started with `--bg` keep running after the terminal closes, until the computer shuts down. Cloud sessions and cloud scheduled tasks keep running with the computer off.",
        },
        {
          q: "Which permission mode should an unattended run use?",
          a: "Start with `--permission-mode dontAsk` and an `--allowedTools` list of exactly what the job needs. Use `bypassPermissions` only inside an isolated container or VM without internet access.",
        },
        {
          q: "Does claude -p use my Claude subscription?",
          a: "It uses whatever you're logged in with, unless you pass `--bare`, which skips the login and needs an API key. Anthropic's docs don't spell out how headless runs count toward a plan's usage limits.",
        },
        {
          q: "How do I check on background agents?",
          a: "Use `/tasks` inside a session, `claude agents` for sessions started with `--bg`, and the log file or JSON output for headless runs.",
        },
      ],
    },
    cta: {
      title: "Give Claude Code a standing job.",
      text: "Crewmark turns a Claude Code session into an AI employee with a role, a goal, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's Claude Code documentation on November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
