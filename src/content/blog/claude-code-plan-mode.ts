import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-plan-mode, the sixth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude
// code plan mode", "... vs auto mode", "... vs accept edits", "... shortcut", "... command", "... in vs code", "...
// desktop app", "... best practices" and "claude plan mode explained" (Google autocomplete, 2026-11-06). Facts come
// from the Claude Code docs (permission modes, settings reference), as of `checked`. Version numbers are left out
// because they change weekly.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# Start a session in plan mode
claude --permission-mode plan

# Or, inside a session, plan just this prompt
/plan add rate limiting to the public API`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const claudeCodePlanMode: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Plan Mode: Shortcut, How It Works, vs Auto Mode | Crewmark",
      description:
        "How plan mode works in Claude Code: the Shift+Tab shortcut and /plan, what Claude can do while planning, approving a plan, making it the default, and plan mode vs auto, accept edits and manual.",
    },
    breadcrumb: "Claude Code plan mode",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code plan mode: how it works, and when to use it",
      lead: "Plan mode is the Claude Code permission mode where Claude researches and proposes changes without making them: it reads files, runs commands to explore, and writes a plan, but doesn't edit your source until you approve. Press `Shift+Tab` to cycle into it, or start a prompt with `/plan`. This guide covers every way in and out, what's allowed while planning, the approve options, how to make it the default, and how it compares with auto, accept edits and manual mode.",
      cta: "Get early access",
      secondary: "Jump to the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "modes",
        title: "Plan mode vs auto mode vs accept edits vs manual",
        text: [
          "Plan mode is one of Claude Code's permission modes. Each trades convenience for oversight; the table shows what Claude can do without asking you in each.",
        ],
        headers: ["Mode", "Runs without asking", "Best for"],
        rows: [
          ["Manual (`default`)", "Reads only", "Reviewing every action, sensitive work"],
          ["Accept edits (`acceptEdits`)", "Reads, file edits, common file commands such as `mkdir` and `mv`", "Iterating on code you review afterwards with `git diff`"],
          ["Plan (`plan`)", "Reads, plus exploring commands the auto-mode classifier approves, when auto mode is available. No edits until you approve", "Exploring a codebase and agreeing on an approach before changing it"],
          ["Auto (`auto`)", "Everything, with background safety checks", "Long tasks, fewer prompts"],
          ["Don't ask (`dontAsk`)", "Pre-approved tools only; everything else is denied", "Locked-down CI and scripts"],
          ["Bypass (`bypassPermissions`)", "Everything", "Isolated containers and VMs only"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to use plan mode in Claude Code",
        steps: [
          {
            title: "Enter plan mode",
            text: "In the terminal, press `Shift+Tab` to cycle modes until the status bar shows `⏸ plan mode on`; from Manual the cycle is accept edits, then plan. Or start a single prompt with `/plan`. In VS Code, click the mode indicator under the prompt box and pick Plan; in the desktop app, use the mode selector.",
            code: enter,
          },
          {
            title: "Describe the change and let Claude explore",
            text: "Ask for what you want built or fixed. Claude reads the code and runs commands to investigate, then writes a plan. When auto mode is available, a classifier reviews those commands instead of asking you; otherwise anything beyond the built-in read-only commands asks first.",
          },
          {
            title: "Review and edit the plan",
            text: "Answer Claude's questions, push back, or press `Ctrl+G` to open the plan in your text editor and change it yourself. Plans are saved as files in `~/.claude/plans/`, or the folder set by the `plansDirectory` setting.",
          },
          {
            title: "Approve, or keep planning",
            text: "Choose Yes, and use auto mode (or Yes, auto-accept edits when auto mode isn't available) to let Claude implement it; Yes, manually approve edits to review each edit; or No, keep planning. Approving leaves plan mode and names the session after the plan.",
          },
          {
            title: "Leave without approving",
            text: "Press `Shift+Tab` again to exit plan mode without a plan. To plan the next change, cycle back or start the prompt with `/plan`.",
          },
        ],
        source: { label: "Source: Claude Code docs, Choose a permission mode", href: docs },
      },
      {
        kind: "steps",
        id: "default",
        title: "Make plan mode the default",
        text: [
          "For one session, start with `claude --permission-mode plan`. For every terminal session in a project, set `defaultMode` to `plan` in `.claude/settings.json`; for every project on your machine, put it in `~/.claude/settings.json`.",
        ],
        steps: [
          {
            title: "Add it to settings",
            text: "VS Code conversations don't read project settings for the starting mode: set `claudeCode.initialPermissionMode` to `plan` in your VS Code user settings instead.",
            code: settings,
          },
        ],
      },
      {
        kind: "text",
        title: "When plan mode is worth it",
        points: [
          "Changes that touch many files, or where the first idea is often wrong: a migration, a refactor, a new feature across front end and back end.",
          "Code you don't know yet: let Claude map it and explain the approach before anything changes.",
          "Expensive mistakes: database schemas, auth, payments, public APIs.",
          "Skip it for one-line fixes and tasks you'd describe the same way as the plan; manual or accept edits mode is faster there.",
          "Pair it with a clean context: when `showClearContextOnPlanAccept` is on, approving can also clear the planning conversation so implementation starts from the plan alone.",
        ],
      },
      {
        kind: "text",
        title: "Gotchas",
        points: [
          "Plan mode blocks edits, not everything: with auto mode available, approved shell commands run during planning, so a command with side effects can still execute.",
          "In an interactive terminal session started with bypass permissions available, plan mode's blocks aren't enforced; Claude is only instructed not to edit.",
          "Headless runs (`claude -p`), Agent SDK sessions and the VS Code chat panel keep plan mode's blocks.",
          "Picking Plan in VS Code applies to that conversation only; new conversations go back to your usual starting mode.",
          "Deny rules still apply in every mode, plan included. See [Claude Code slash commands](/blog/claude-code-slash-commands) for `/plan`, `/permissions` and other commands.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Plan mode keeps Claude careful. Crewmark keeps it working.",
        text: [
          "Plan mode is how you stay in charge of a big change; the session still waits for you to start the next one. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Plans as issue comments",
            text: "An employee can post its plan on the issue and wait for your go-ahead before a risky change, so you approve from the board instead of the terminal.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation and takes the next issue; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Several employees, one repository",
            text: "Give each its own [worktree](/blog/claude-code-worktree) and role. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use plan mode in Claude Code" },
    mid: {
      title: "You approved the plan. Who picks up the next task?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code plan mode FAQ",
      items: [
        {
          q: "What is plan mode in Claude Code?",
          a: "A permission mode where Claude researches and writes a plan without editing your source. Edits stay blocked until you approve the plan.",
        },
        {
          q: "What's the shortcut for plan mode?",
          a: "`Shift+Tab` cycles permission modes in the terminal; stop when the status bar shows `⏸ plan mode on`. You can also start a prompt with `/plan` or launch with `claude --permission-mode plan`.",
        },
        {
          q: "Plan mode vs auto mode: what's the difference?",
          a: "Plan mode explores and proposes without editing. Auto mode does the work, editing and running commands with background safety checks. A common flow is to plan first, then approve with Yes, and use auto mode.",
        },
        {
          q: "Plan mode vs accept edits?",
          a: "Accept edits lets Claude change files without asking, and you review afterwards. Plan mode changes nothing until you approve a plan; after approval you can choose to accept edits automatically.",
        },
        {
          q: "How do I use plan mode in VS Code or the desktop app?",
          a: "In VS Code, click the mode indicator under the prompt box and choose Plan, or set `claudeCode.initialPermissionMode` to `plan`. In the desktop app, choose it in the mode selector.",
        },
        {
          q: "Where are Claude Code plans saved?",
          a: "As files in `~/.claude/plans/`, unless you set a different folder with the `plansDirectory` setting. Press `Ctrl+G` to edit the current plan in your editor.",
        },
        {
          q: "How do I exit plan mode?",
          a: "Approve the plan, which switches to the mode you pick, or press `Shift+Tab` to leave without approving.",
        },
      ],
    },
    cta: {
      title: "Let Claude Code plan, build and pick up the next issue.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs (permission modes and settings) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
