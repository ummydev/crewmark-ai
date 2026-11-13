import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-slash-commands, the fourth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for
// "claude code slash commands", "claude code slash commands cheat sheet", "... list", "... custom", "... examples",
// "... arguments", "... vs skills" and "claude code commands" (Google autocomplete, 2026-11-06). Facts come from the
// Claude Code docs (commands, skills), as of `checked`. The cheat sheet keeps to commands most people use; the docs
// list over a hundred. Version numbers are left out because they change weekly.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Fix a GitHub issue by number, with a test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

Fix this issue following our conventions in CLAUDE.md.
1. Write a failing test that reproduces it.
2. Make the smallest change that passes.
3. Run the test suite and summarize what changed.`;

const positional = `---
description: Migrate a component between frameworks
argument-hint: [component] [from] [to]
---

Migrate the $0 component from $1 to $2.
Keep every existing behavior and test passing.`;

export const claudeCodeSlashCommands: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Slash Commands: Cheat Sheet, Custom Commands and Skills | Crewmark",
      description:
        "A cheat sheet of the Claude Code slash commands worth knowing, how to write your own custom slash commands with arguments, and how commands relate to skills.",
    },
    breadcrumb: "Claude Code slash commands",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code slash commands: the cheat sheet, and how to write your own",
      lead: "Slash commands are the shortcuts you type at the start of a Claude Code message, such as `/init`, `/compact` or `/code-review`, to control the session or run a saved prompt. This guide has a cheat sheet of the commands worth knowing, grouped by when you need them, then shows how to create custom slash commands with arguments, and how they relate to skills.",
      cta: "Get early access",
      secondary: "Jump to custom commands",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "How slash commands work",
        text: [
          "Type `/` in Claude Code to see every command available to you, and keep typing to filter the list. A command only counts at the start of a message; whatever follows its name becomes its arguments.",
        ],
        points: [
          "Built-in commands are coded into the CLI, such as `/clear`, `/model` and `/compact`.",
          "Bundled skills ship with Claude Code and work like prompts handed to Claude, such as `/simplify`, `/loop` and `/batch`.",
          "Custom commands are the ones you write: skills in `.claude/skills/` or older files in `.claude/commands/`. Plugins and MCP servers can add more.",
          "Send a command while Claude is still answering and it runs after the current turn; a few, such as `/status` and `/usage`, run straight away.",
          "Not every command shows for everyone: some depend on your platform, plan or organization's policy.",
        ],
      },
      {
        kind: "table",
        id: "cheat-sheet",
        title: "Claude Code slash commands cheat sheet",
        text: ["The commands most people use, in the order a session tends to need them."],
        headers: ["When", "Command", "What it does"],
        rows: [
          ["Setting up", "`/init`", "Writes a starter CLAUDE.md for the project"],
          ["Setting up", "`/memory`", "Edits CLAUDE.md files and turns auto memory on or off"],
          ["Setting up", "`/mcp`", "Manages MCP server connections"],
          ["Setting up", "`/permissions`", "Manages allow, ask and deny rules for tools"],
          ["Setting up", "`/config`", "Opens settings: theme, model, output style and more"],
          ["During a task", "`/plan`", "Switches to plan mode before a big change"],
          ["During a task", "`/model`, `/effort`", "Changes the model, and how much reasoning it uses"],
          ["During a task", "`/context`", "Shows what's filling the context window"],
          ["During a task", "`/compact [instructions]`", "Summarizes the conversation so far to free context"],
          ["During a task", "`/btw [question]`", "Asks a side question without adding it to the conversation"],
          ["During a task", "`/goal`", "Sets a condition Claude keeps working toward"],
          ["In parallel", "`/tasks`", "Lists the session's background work and subagents"],
          ["In parallel", "`/background`", "Detaches the session to run as a background agent"],
          ["In parallel", "`/batch <instruction>`", "Splits a codebase-wide change into units, each in its own worktree"],
          ["In parallel", "`/fork`", "Copies the conversation into a new background session"],
          ["Before shipping", "`/diff`", "Shows the changes in your working tree"],
          ["Before shipping", "`/code-review`", "Reviews the current diff or a PR for bugs; `/review` is an alias"],
          ["Before shipping", "`/security-review`", "Checks the branch's changes for vulnerabilities"],
          ["Between sessions", "`/clear`", "Starts a new conversation with empty context"],
          ["Between sessions", "`/resume`, `/rename`", "Returns to an earlier conversation; names this one"],
          ["Between sessions", "`/branch`, `/rewind`", "Branches the conversation; rolls code and conversation back to a checkpoint"],
          ["Automation", "`/loop [interval] [prompt]`", "Repeats a prompt while the session stays open"],
          ["Automation", "`/schedule`", "Creates and manages cloud scheduled tasks"],
          ["When stuck", "`/doctor`, `/debug`", "Diagnoses setup problems; reads the session's debug log"],
          ["When stuck", "`/usage`, `/status`", "Shows cost and plan limits (`/cost` and `/stats` are aliases); shows version, model and account"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to create a custom slash command",
        text: [
          "Custom commands have been merged into skills. A file at `.claude/commands/fix-issue.md` and a skill at `.claude/skills/fix-issue/SKILL.md` both create `/fix-issue` and work the same way; the skill format is preferred for new commands because it can hold supporting files.",
        ],
        steps: [
          {
            title: "Create the folder and SKILL.md",
            text: "For a command the whole team gets, create `.claude/skills/<name>/SKILL.md` in the repository and commit it. For one only you use in every project, put it in `~/.claude/skills/<name>/SKILL.md`. The folder name becomes the command: `fix-issue` gives `/fix-issue`.",
          },
          {
            title: "Write the frontmatter",
            text: "Between `---` lines, add a `description` (Claude uses it to decide when the skill applies), `argument-hint` to show expected arguments in the menu, `disable-model-invocation: true` if only you should trigger it (for anything with side effects, such as deploys), and `allowed-tools` to pre-approve tools for that turn.",
          },
          {
            title: "Write the prompt, with arguments",
            text: "Below the frontmatter, write the instructions as Markdown. `$ARGUMENTS` is replaced by everything typed after the command; `$0`, `$1` and so on (or `$ARGUMENTS[0]`) pick single arguments. A line with `` !`command` `` runs that shell command first and pastes its output into the prompt.",
            code: skill,
          },
          {
            title: "Run it",
            text: "Type `/fix-issue 123`. Skills you add or change during a session load on their own; if one doesn't show up, run `/reload-skills`. Without `disable-model-invocation`, Claude can also run the skill by itself when your request matches its description.",
          },
          {
            title: "Use positional arguments for multi-part commands",
            text: "Running `/migrate-component SearchBar React Vue` fills `$0`, `$1` and `$2` in order.",
            code: positional,
          },
        ],
        source: { label: "Source: Claude Code docs, Commands and Skills", href: commands },
      },
      {
        kind: "table",
        title: "Where custom slash commands live",
        headers: ["Location", "Path", "Command name"],
        rows: [
          ["Personal", "`~/.claude/skills/<name>/SKILL.md`", "`/<name>` in all your projects"],
          ["Project", "`.claude/skills/<name>/SKILL.md`", "`/<name>` for everyone in the repository"],
          ["Older command file", "`.claude/commands/<name>.md`", "`/<name>`; a subfolder adds a prefix, e.g. `commands/frontend/component.md` → `/frontend:component`"],
          ["Plugin", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
          ["MCP server", "Prompts exposed by the server", "Listed in the `/` menu"],
        ],
      },
      {
        kind: "table",
        title: "Slash commands vs skills",
        text: [
          "Since the merge, the question is less \"which one\" than \"which file format\". If a skill and a command file share a name, the skill wins.",
        ],
        headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
        rows: [
          ["Creates `/<name>`", "Yes", "Yes"],
          ["Frontmatter", "Same fields, except `name` and `paths`", "All fields"],
          ["Supporting files (scripts, templates)", "No", "Yes, in the skill's folder"],
          ["Claude can load it on its own", "Yes, unless `disable-model-invocation: true`", "Yes, unless `disable-model-invocation: true`"],
          ["Status", "Still works", "Recommended for new work"],
        ],
      },
      {
        kind: "text",
        title: "Tips and gotchas",
        points: [
          "At the terminal prompt you can stack skills: `/write-tests /fix-issue 123` loads both and passes `123` to each, up to six. In `claude -p` and the Agent SDK only the first one loads.",
          "Built-in commands you remember may be gone: `/pr-comments`, `/vim` and `/ultraplan` have been removed. Check `/help` or the docs.",
          "`allowed-tools` grants permission only for the turn that invokes the skill, and repository skills can grant themselves tools, so read them before running Claude Code in an unfamiliar repo.",
          "Every skill's description sits in context; `/skill-doctor` shows what each costs and how often it's used. Long procedures belong in skills, not in [CLAUDE.md](/blog/claude-md).",
          "`/loop` repeats a prompt only while your session is open. To have work start on its own, see [how to make Claude Code proactive](/proactive-claude-code).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Slash commands make you faster. Crewmark makes Claude Code start without you.",
        text: [
          "Every slash command still needs you at the keyboard to type it. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, using the same skills and commands you've set up.",
        ],
        steps: [
          {
            title: "Keep your skills in the repository",
            text: "Your `.claude/skills/` and CLAUDE.md load in the employee's session like in yours, so `/fix-issue` and your conventions come along.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation and takes the next issue. Several can share a repository, each in its own [worktree](/blog/claude-code-worktree).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Create a custom slash command in Claude Code" },
    mid: {
      title: "You've automated the typing. Who decides what to type next?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code slash commands FAQ",
      items: [
        {
          q: "How do I see all Claude Code slash commands?",
          a: "Type `/` at the start of a message to open the menu, and keep typing to filter it. `/help` and `/skills` list them too, and the Commands page of the Claude Code docs has the full reference.",
        },
        {
          q: "How do I create a custom slash command in Claude Code?",
          a: "Create `.claude/skills/<name>/SKILL.md` (or `~/.claude/skills/<name>/SKILL.md` for every project) with a short frontmatter and your prompt. It becomes `/<name>`. An older `.claude/commands/<name>.md` file also works.",
        },
        {
          q: "How do I pass arguments to a slash command?",
          a: "Type them after the command name. In the prompt, `$ARGUMENTS` holds everything you typed, and `$0`, `$1` and so on hold single arguments. Add `argument-hint` to the frontmatter to show what's expected.",
        },
        {
          q: "What's the difference between slash commands and skills?",
          a: "Custom slash commands have been merged into skills: both create a `/name` and work the same way. Skills add a folder for supporting files and are the recommended format; command files in `.claude/commands/` keep working.",
        },
        {
          q: "Are slash commands deprecated?",
          a: "No. Typing `/name` is how you run any command or skill. What changed is the file format for custom ones: `.claude/commands/` still works, but skills are preferred. A few individual built-in commands have been removed.",
        },
        {
          q: "Can Claude run my slash command by itself?",
          a: "Yes, when your request matches the skill's description. Add `disable-model-invocation: true` to its frontmatter to make it run only when you type it.",
        },
        {
          q: "Do slash commands work in headless mode?",
          a: "Custom skills do: `claude -p \"/fix-issue 123\"` runs one, because `-p` loads skills and custom commands like an interactive session. Only the first skill in the message loads, and `--bare` skips skill discovery altogether.",
        },
      ],
    },
    cta: {
      title: "Give your Claude Code skills an employee to run them.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs (commands and skills) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
