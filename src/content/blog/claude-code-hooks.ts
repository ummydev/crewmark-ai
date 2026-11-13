import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-hooks, the eighth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude
// code hooks", "... examples", "... reference", "... list", "... lifecycle", "... explained", "... vs skills", "...
// github" and "claude code stop hook example" (Google autocomplete, 2026-11-06). Facts come from the Claude Code docs
// (Automate actions with hooks, and the hooks reference), as of `checked`. The event table keeps to the common events;
// the reference lists over thirty. Organization-wide inference hooks are a different feature, covered in
// /blog/claude-inference-hooks. Version numbers are left out because they change weekly.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, run as a PreToolUse hook on Bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # becomes Claude's feedback
  exit 2                                               # 2 = block the action
fi

exit 0  # no decision: the normal permission flow applies`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const claudeCodeHooks: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Hooks: Events, Examples and How They Work | Crewmark",
      description:
        "Claude Code hooks explained: the lifecycle events, where hooks go, exit codes and JSON output, and copy-paste examples for notifications, auto-formatting, blocking commands and Stop hooks.",
    },
    breadcrumb: "Claude Code hooks guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code hooks: events, examples, and how they work",
      lead: "Claude Code hooks are commands that run automatically at fixed points in a session: before a tool runs, after a file is edited, when Claude finishes, when it needs your input. Unlike instructions in CLAUDE.md, which Claude usually follows, a hook always runs, so it's the way to enforce rules and automate chores. This guide covers the events, where hooks are configured, how exit codes and JSON control what happens, four ready-to-use examples, and the newer prompt, agent and HTTP hook types.",
      cta: "Get early access",
      secondary: "Jump to the examples",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "events",
        title: "Claude Code hook events",
        text: [
          "The reference lists more than thirty events. These are the ones most hooks use; a `matcher` narrows a hook to certain tools, files or sources.",
        ],
        headers: ["Event", "When it fires", "Common use"],
        rows: [
          ["`SessionStart`", "A session begins or resumes", "Load context, check the environment"],
          ["`UserPromptSubmit`", "You submit a prompt, before Claude sees it", "Add context, block sensitive prompts"],
          ["`PreToolUse`", "Before a tool call runs; can block it", "Block dangerous commands, protect files"],
          ["`PermissionRequest`", "A tool call needs a permission decision", "Auto-approve or deny specific prompts"],
          ["`PostToolUse`", "After a tool call succeeds", "Format, lint or test edited files"],
          ["`Notification`", "Claude Code sends a notification", "Desktop alerts when Claude needs you"],
          ["`SubagentStart`, `SubagentStop`", "A subagent starts or finishes", "Log or check delegated work"],
          ["`Stop`", "Claude finishes responding", "Check the task is really done"],
          ["`PreCompact`, `PostCompact`", "Around context compaction", "Save or re-inject key context"],
          ["`FileChanged`, `CwdChanged`", "A watched file or the working directory changes", "Reload environment, reformat files"],
          ["`SessionEnd`", "The session ends", "Clean up, write a log"],
        ],
      },
      {
        kind: "table",
        title: "Where to put hooks",
        headers: ["Location", "Scope", "Shared"],
        rows: [
          ["`~/.claude/settings.json`", "All your projects", "No"],
          ["`.claude/settings.json`", "One project", "Yes, commit it"],
          ["`.claude/settings.local.json`", "One project", "No, gitignored"],
          ["Managed policy settings", "The whole organization", "Admin-controlled"],
          ["Plugin `hooks/hooks.json`", "While the plugin is enabled", "Yes, with the plugin"],
          ["Skill or subagent frontmatter", "Once the skill is invoked, or while the subagent runs", "Yes, in the file"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Claude Code hook examples, step by step",
        text: [
          "Add each block under the `hooks` key of a settings file; if the file already has a `hooks` object, add the event as a sibling key rather than replacing it. Run `/hooks` to confirm Claude Code loaded it. You can also ask Claude to write the hook for you.",
        ],
        steps: [
          {
            title: "Get a desktop notification when Claude needs you",
            text: "A `Notification` hook in `~/.claude/settings.json`. This one uses `osascript` on macOS; use `notify-send` on Linux or PowerShell on Windows.",
            code: notify,
          },
          {
            title: "Auto-format every file Claude edits",
            text: "A `PostToolUse` hook with an `Edit|Write` matcher reads the edited path from the JSON on stdin with `jq` and runs Prettier on it. Put it in `.claude/settings.json` so the team shares it.",
            code: format,
          },
          {
            title: "Block a dangerous command",
            text: "A `PreToolUse` hook on `Bash` runs this script. Exit code 2 blocks the call, and what you write to stderr becomes Claude's feedback so it can change course. Exit 0 means no decision, so normal permissions still apply.",
            code: block,
          },
          {
            title: "Keep Claude working until the task is done",
            text: "A `Stop` hook of type `prompt` asks a model whether everything is finished. If it answers `ok: false`, Claude keeps working with the `reason` as its next instruction. This is the classic Stop hook example.",
            code: stop,
          },
        ],
        source: { label: "Source: Claude Code docs, Automate actions with hooks", href: docs },
      },
      {
        kind: "text",
        title: "How hooks decide what happens",
        points: [
          "Input: each hook receives the event as JSON on stdin, such as the tool name and `tool_input`, the session ID and `cwd`.",
          "Exit 0: no objection. For a few events, such as `SessionStart` and `UserPromptSubmit`, plain stdout is added to Claude's context.",
          "Exit 2: block, where the event allows it. Stderr goes back to Claude or to you, depending on the event.",
          "JSON on stdout: finer control, such as `hookSpecificOutput` with a permission decision, `updatedInput` to rewrite a tool's input, or `additionalContext`.",
          "Other exit codes: usually a non-blocking error, unless the hook sets `onFailure: \"block\"`.",
          "Matching hooks for one event run in parallel.",
        ],
      },
      {
        kind: "table",
        title: "Command, prompt, agent and HTTP hooks",
        headers: ["Type", "What runs", "Default timeout"],
        rows: [
          ["`command`", "A shell command", "10 minutes"],
          ["`http`", "A POST of the event JSON to a URL; the response body works like command output", "10 minutes"],
          ["`mcp_tool`", "A tool on a configured MCP server", "10 minutes"],
          ["`prompt`", "A single model call that answers `ok` or not", "30 seconds"],
          ["`agent`", "A subagent that can read files and run tools before deciding (experimental)", "60 seconds"],
        ],
      },
      {
        kind: "text",
        title: "Hooks vs skills vs CLAUDE.md, and other gotchas",
        points: [
          "CLAUDE.md and [skills](/blog/claude-code-skills) are instructions Claude usually follows; hooks always run. Put anything that must never be skipped in a hook.",
          "`PostToolUse` can't undo an action that already ran; use `PreToolUse` to stop it.",
          "`Stop` fires whenever Claude finishes a response, not only at the end of a task, and not on user interrupts.",
          "Hooks can't run slash commands or call tools themselves; they talk back only through exit codes, stdout, stderr or JSON.",
          "`\"disableAllHooks\": true` turns hooks off; managed hooks still run unless the managed settings disable them too.",
          "Hooks are local to your Claude Code setup. Organization-wide checks on every Claude product are a different feature: [Claude inference hooks](/blog/claude-inference-hooks).",
          "A PreToolUse hook that filters test output is also one of the best ways to [reduce token usage](/blog/reduce-claude-code-token-usage).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Hooks keep Claude Code in line. Crewmark keeps it working.",
        text: [
          "Hooks are what make an unattended agent safe: formatting, tests and guardrails run every time. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, with your project's hooks in place.",
        ],
        steps: [
          {
            title: "Commit your hooks",
            text: "`.claude/settings.json` hooks load in the employee's session like in yours, so its edits get formatted and its risky commands blocked.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Answer only what needs you",
            text: "It comments on its issues and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Add hooks to Claude Code" },
    mid: {
      title: "Your hooks run every time. Does your agent?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code hooks FAQ",
      items: [
        {
          q: "What are Claude Code hooks?",
          a: "User-defined commands, HTTP calls or model checks that Claude Code runs automatically at lifecycle events, such as before a tool runs or when Claude finishes. They give deterministic control instead of relying on Claude to remember an instruction.",
        },
        {
          q: "Where do I configure Claude Code hooks?",
          a: "Under `hooks` in `~/.claude/settings.json` (all projects), `.claude/settings.json` (shared with the team) or `.claude/settings.local.json` (just you). Plugins, skills and subagents can carry hooks too. Run `/hooks` to see what's loaded.",
        },
        {
          q: "How do I block a command with a hook?",
          a: "Use a `PreToolUse` hook with a `Bash` matcher. Read the command from the JSON on stdin, and exit with code 2 and a reason on stderr to block it; Claude sees the reason and adjusts.",
        },
        {
          q: "What is a Stop hook?",
          a: "A hook on the `Stop` event, which fires when Claude finishes responding. A prompt-type Stop hook can check whether the task is complete and, if not, send Claude back to work with a reason.",
        },
        {
          q: "Hooks vs skills: what's the difference?",
          a: "Skills are instructions and files Claude loads when relevant and usually follows. Hooks are code Claude Code runs every time an event fires, whatever Claude decides.",
        },
        {
          q: "Why isn't my hook firing?",
          a: "Check it appears in `/hooks`, that the event name and matcher are spelled exactly, that the script is executable, and that shell profile output isn't corrupting its JSON. Start Claude Code with a debug log to see what each hook did.",
        },
        {
          q: "Are Claude Code hooks the same as inference hooks?",
          a: "No. Claude Code hooks run on your machine for your sessions. Inference hooks are a Claude Enterprise feature that sends every prompt in the organization to a security server before Claude runs.",
        },
      ],
    },
    cta: {
      title: "Guardrails in hooks, work from a board.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs (hooks guide and hooks reference) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
