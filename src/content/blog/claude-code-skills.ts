import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-skills, the fifth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude
// code skills", "claude skills", "claude code skills examples", "... best practices", "... marketplace", "... github",
// "... to reduce token usage", "claude skills vs agents", "claude code skills vs plugins" and "how to create claude
// code skills" (Google autocomplete, 2026-11-06). Facts come from the Claude Code docs (skills, discover plugins), as
// of `checked`. Arguments and the slash-command side are covered in /blog/claude-code-slash-commands, so this post
// links there instead of repeating them. Version numbers are left out because they change weekly.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff.
---

## Current changes

!\`git diff HEAD\`

## Instructions

Summarize the changes above in two or three bullet points, then list any
risks such as missing error handling, hardcoded values or tests to update.`;

const reference = `---
description: API design conventions for this codebase. Use when writing or reviewing HTTP endpoints.
paths: ["src/api/**"]
---

When writing API endpoints:
- Use RESTful names and plural resources
- Return errors as { error: { code, message } }
- Validate the request body with the schemas in src/api/schemas/`;

const layout = `release/
├── SKILL.md          # the steps, and when to read the other files
├── checklist.md      # loaded only when SKILL.md points Claude to it
└── scripts/
    └── bump.sh       # run, not read into context`;

const fork = `---
description: Audit dependencies for known vulnerabilities and outdated majors
context: fork
agent: Explore
disable-model-invocation: true
---

Run the package manager's audit, list every high or critical finding with the
fix version, and report which majors are behind. Don't change any files.`;

export const claudeCodeSkills: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Skills: How to Create, Examples | Crewmark AI",
      description:
        "What Claude Code skills are, how they load, how to create one with SKILL.md, examples, supporting files, running a skill in a subagent, installing skills from plugins, and best practices.",
    },
    breadcrumb: "Claude Code skills guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code skills: how to create them, with examples and best practices",
      lead: "A Claude Code skill is a folder with a `SKILL.md` file: a description of when to use it and the instructions to follow. Claude sees only the descriptions until a skill is needed, then loads the whole thing, so you can keep long procedures and reference material on hand without paying for them on every message. This guide covers how skills load, how to write your first one, examples, supporting files, subagent skills, installing skills from plugins, and how to make Claude actually use them.",
      cta: "Get started",
      secondary: "Create your first skill",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Claude Code skills are",
        text: [
          "Make a skill when you keep pasting the same instructions, checklist or multi-step procedure into chat, or when part of your CLAUDE.md has grown from a fact into a procedure. Skills follow the open Agent Skills standard (agentskills.io), which other AI tools also read; Claude Code adds extras such as invocation control, subagent runs and live shell output in the prompt.",
        ],
        points: [
          "Two ways to run one: Claude loads it when your request matches its `description`, or you type `/skill-name`.",
          "Cheap until used: only the name and description sit in context; the body loads when the skill runs. A skill set to run only by hand doesn't list its description at all.",
          "Custom slash commands are skills now: `.claude/commands/<name>.md` still works, but a skill folder can also hold supporting files. See [Claude Code slash commands](/blog/claude-code-slash-commands).",
          "Claude Code ships bundled skills too, such as `/simplify`, `/loop`, `/batch` and `/debug`.",
        ],
      },
      {
        kind: "table",
        title: "Skills vs CLAUDE.md vs subagents vs plugins vs MCP",
        headers: ["", "What it is", "Loaded", "Use it for"],
        rows: [
          ["CLAUDE.md", "Project instructions", "Every session, in full", "Facts and conventions Claude always needs; see the [CLAUDE.md guide](/blog/claude-md)"],
          ["Skill", "A `SKILL.md` folder", "Description always; body when used", "Procedures, checklists, reference material, repeatable prompts"],
          ["Subagent", "A separate worker with its own context", "When Claude delegates", "Side tasks whose details shouldn't fill your conversation"],
          ["Plugin", "A package of skills, agents, hooks and MCP servers", "When installed and enabled", "Sharing skills with a team or installing other people's"],
          ["MCP server", "A connection to an outside tool or data source", "When connected", "Giving Claude new tools, such as a database or an issue tracker"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to create a Claude Code skill",
        steps: [
          {
            title: "Pick where it lives",
            text: "`~/.claude/skills/<name>/` for yourself in every project; `.claude/skills/<name>/` in a repository, committed, for everyone who works there. The folder name becomes the command, so `summarize-changes` gives `/summarize-changes`.",
          },
          {
            title: "Write SKILL.md: a description, then instructions",
            text: "Frontmatter goes between `---` lines at the very top. Only `description` is recommended: put the use case and the words people would actually say first. Below it, write the instructions in Markdown. A line starting with `` !`command` `` runs that command first and pastes the output in, so the skill works from your real state.",
            code: first,
          },
          {
            title: "Test both ways",
            text: "Start `claude` in a git project with an uncommitted edit. Ask \"What did I change?\" to see whether Claude picks the skill up by itself, then type `/summarize-changes` to run it directly. Skills you add during a session load on their own; run `/reload-skills` if one doesn't appear.",
          },
          {
            title: "Decide who may run it",
            text: "Add `disable-model-invocation: true` for anything with side effects, such as deploys or sending messages, so only you can start it. Add `user-invocable: false` for background knowledge only Claude should load. Pass input with `$ARGUMENTS`, as shown in the slash commands guide.",
          },
          {
            title: "Share it",
            text: "Commit `.claude/skills/` to the repository, or package skills as a plugin for several repositories or teams.",
          },
        ],
        source: { label: "Source: Claude Code docs, Extend Claude with skills", href: docs },
      },
      {
        kind: "steps",
        id: "examples",
        title: "Claude Code skill examples",
        steps: [
          {
            title: "A reference skill that loads only for matching files",
            text: "Reference skills hold conventions Claude applies while it works. `paths` limits automatic loading to files that match the globs.",
            code: reference,
          },
          {
            title: "A task skill with supporting files",
            text: "Keep SKILL.md short and point to the rest. Claude reads `checklist.md` only when SKILL.md tells it to, and runs `bump.sh` without reading it, so the details cost nothing until needed.",
            code: layout,
          },
          {
            title: "A skill that runs in its own subagent",
            text: "`context: fork` starts a subagent (here the read-only Explore type) with the skill as its prompt. It doesn't see your conversation, so the instructions must stand alone; it runs in the background unless you set `background: false`.",
            code: fork,
          },
        ],
      },
      {
        kind: "text",
        title: "Installing skills from plugins and marketplaces",
        text: [
          "Skills other people wrote usually arrive inside plugins. Claude Code registers Anthropic's official marketplace (`claude-plugins-official`) the first time you start an interactive session; browse it with `/plugin`, or install directly, for example `/plugin install skill-creator@claude-plugins-official`. For a team or community marketplace, add it first with `/plugin marketplace add owner/repo`.",
        ],
        points: [
          "Plugin skills are named `/plugin-name:skill-name`.",
          "The official marketplace shows each plugin's context cost per turn and when invoked.",
          "The skill-creator plugin helps write a skill and runs evals that compare results with and without it.",
          "Read a repository's or plugin's skills before you trust them: `allowed-tools` can pre-approve tools for the turn a skill runs.",
        ],
      },
      {
        kind: "text",
        title: "Best practices, and when Claude ignores a skill",
        points: [
          "Write the description for matching: lead with the job and the phrases users say. Description plus `when_to_use` is cut off at 1,536 characters in the listing.",
          "Put the most important instructions near the top: after the conversation is compacted, Claude Code may keep only the start of an invoked skill. Invoke it again to restore it.",
          "Word guidance for the whole task (\"run the tests after every edit\"), because the skill file isn't re-read on later turns. A rule that must never be skipped belongs in a hook.",
          "To cut token usage, move procedures out of CLAUDE.md into skills, set `disable-model-invocation: true` on skills you run by hand, and check `/skill-doctor` for skills that cost context but are rarely used.",
          "Not triggering? Check the description has the right keywords, ask \"What skills are available?\", and run `claude plugin validate .claude/skills` to find frontmatter that doesn't parse.",
          "Triggering too often? Make the description narrower, or switch the skill to manual with `disable-model-invocation: true`.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Skills teach Claude Code how. Crewmark gives it something to do every hour.",
        text: [
          "A library of skills makes each session capable, but it still waits for you to ask. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, with your project's skills loaded.",
        ],
        steps: [
          {
            title: "Keep skills in the repository",
            text: "The employee's session reads `.claude/skills/` and CLAUDE.md like yours, so a release skill or a review checklist comes along.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation and takes the next issue; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Create a skill for Claude Code" },
    mid: {
      title: "Your skills are ready. Who runs them while you're away?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code skills FAQ",
      items: [
        {
          q: "What are Claude Code skills?",
          a: "Folders with a `SKILL.md` file that hold instructions for a task or a body of reference knowledge. Claude loads one when your request matches its description, or you run it with `/skill-name`.",
        },
        {
          q: "Where do Claude Code skills go?",
          a: "`~/.claude/skills/<name>/SKILL.md` for personal skills in every project, `.claude/skills/<name>/SKILL.md` in a repository for the team, or inside a plugin.",
        },
        {
          q: "How do I make Claude Code use my skill?",
          a: "Write a description that names the task and the words you'd use to ask for it, check the skill shows up when you ask \"What skills are available?\", or run it directly with `/skill-name`.",
        },
        {
          q: "Skills vs subagents: what's the difference?",
          a: "A skill is instructions loaded into a conversation; a subagent is a separate worker with its own context. A skill with `context: fork` combines them: it runs as a subagent with the skill as its prompt.",
        },
        {
          q: "Skills vs plugins?",
          a: "A plugin is how skills, subagents, hooks and MCP servers are packaged and shared. Install a plugin to get its skills, or write a skill in your own `.claude/skills/` without one.",
        },
        {
          q: "Do skills use a lot of tokens?",
          a: "Only their descriptions stay in context; the body loads when a skill runs, and skills set to manual-only don't list a description at all. Moving long procedures from CLAUDE.md into skills usually reduces token use.",
        },
        {
          q: "Where can I find Claude Code skills?",
          a: "In Anthropic's official plugin marketplace (browse it with `/plugin` or at claude.com/marketplace), in team and community marketplaces you add with `/plugin marketplace add`, and in public GitHub repositories.",
        },
      ],
    },
    cta: {
      title: "Put your Claude Code skills to work on a schedule.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (skills and plugins) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
