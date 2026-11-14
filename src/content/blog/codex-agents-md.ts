import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-agents-md, the eleventh evergreen tutorial of the growth plan (docs/seo/growth-plan.md) and the first
// for Codex, for "codex agents.md", "... best practices", "... file", "... location", "... example", "... order", "...
// global" and "codex agents.md github" (Google autocomplete, 2026-11-06). Facts come from OpenAI's Codex docs ("Custom
// instructions with AGENTS.md" at learn.chatgpt.com, where developers.openai.com/codex now redirects), as of `checked`.
// "claude.md vs agents.md" stays with /blog/claude-md; this post links there for Claude Code.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const codexAgentsMd: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex AGENTS.md: File Location and Examples | Crewmark AI",
      description:
        "How Codex reads AGENTS.md: the global ~/.codex file, project and nested files, AGENTS.override.md, the load order and 32 KiB limit, fallback filenames, code review rules, and examples.",
    },
    breadcrumb: "Codex AGENTS.md guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex AGENTS.md: where it goes, the order it loads, and what to write",
      lead: "AGENTS.md is the instructions file OpenAI's Codex reads before doing any work: your build and test commands, conventions and rules, in plain Markdown. Codex combines a global file in `~/.codex` with files from your repository, from the root down to the folder you're working in. This guide covers every location, the exact load order and size limit, overrides, fallback filenames, code review rules, and examples you can copy.",
      cta: "Get started",
      secondary: "Jump to the setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "order",
        title: "Where Codex looks for AGENTS.md, in load order",
        text: [
          "Codex builds the instruction chain once when it starts (in the terminal UI, once per session). Files are joined from the top of this table down, so instructions closer to your working directory come later and win.",
        ],
        headers: ["Order", "Location", "What Codex reads"],
        rows: [
          ["1. Global", "`~/.codex/` (or `$CODEX_HOME`)", "`AGENTS.override.md` if it exists, otherwise `AGENTS.md`; only the first non-empty one"],
          ["2. Project root", "Usually the Git root", "`AGENTS.override.md`, else `AGENTS.md`, else a fallback filename; at most one file"],
          ["3. Each folder down", "Every directory from the root to where you started Codex", "The same check in each directory, one file each"],
          ["Stop", "Your current directory", "Folders below it aren't read"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up AGENTS.md for Codex",
        steps: [
          {
            title: "Create global defaults",
            text: "Run `mkdir -p ~/.codex` and write `~/.codex/AGENTS.md` with preferences you want in every repository. Check it loaded by asking Codex to summarize its instructions.",
            code: global,
          },
          {
            title: "Add a project file, and overrides where teams differ",
            text: "Put an `AGENTS.md` at the repository root for shared setup. In a folder with different rules, add `AGENTS.override.md`: it replaces that folder's `AGENTS.md`, which Codex then ignores.",
            code: project,
          },
          {
            title: "Confirm what loaded",
            text: "Start Codex in the folder you care about, for example `codex --cd services/payments`, and ask it to list the instruction sources it loaded. It should list the global file, then the root file, then the folder's file.",
          },
          {
            title: "Reuse an existing file name, or raise the limit",
            text: "If your repository already keeps instructions in another file, add it to `project_doc_fallback_filenames` in `~/.codex/config.toml`. Codex stops adding files once the combined size reaches `project_doc_max_bytes`, 32 KiB by default.",
            code: config,
          },
          {
            title: "Add rules for Codex code review",
            text: "For `@codex review` on GitHub, add a `## Code Review Rules` section to the AGENTS.md closest to the code it governs. Say what to flag and the safe alternative; leave formatting and lint to CI.",
            code: review,
          },
        ],
        source: { label: "Source: Codex docs, Custom instructions with AGENTS.md", href: docs },
      },
      {
        kind: "text",
        title: "AGENTS.md best practices",
        points: [
          "Keep it to what Codex can't work out: exact build, test and lint commands (including how to run one test), traps in the codebase, and decisions that aren't written down.",
          "Put the most specific rules closest to the code: a nested AGENTS.md in `services/payments/` beats a long root file with a payments section.",
          "Mind the 32 KiB budget: files are added from the root down and the rest is cut off, so split long files into nested ones or raise `project_doc_max_bytes`.",
          "Use `AGENTS.override.md` for temporary changes, globally or in one folder, and delete it to go back.",
          "An empty AGENTS.md is skipped, and the search for that directory moves on to the next file name.",
          "Use a separate `CODEX_HOME` for automation users so their global instructions don't mix with yours.",
        ],
      },
      {
        kind: "table",
        title: "AGENTS.md in Codex vs Claude Code and others",
        text: [
          "AGENTS.md is an open format that many agents read, which makes it the best place for instructions you want to share. Claude Code has its own file, CLAUDE.md; see the [CLAUDE.md guide](/blog/claude-md) for the details.",
        ],
        headers: ["", "Codex", "Claude Code"],
        rows: [
          ["Main file", "`AGENTS.md`", "`CLAUDE.md`; reads `AGENTS.md` only if there's no CLAUDE.md"],
          ["Personal or temporary file", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
          ["Global file", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
          ["Nested folders", "Root down to the current directory", "Parents at launch; subfolders when Claude works in them"],
          ["Size limit", "32 KiB combined by default", "Per-file limits; aim for under 200 lines"],
          ["Sharing one file", "Native", "Put `@AGENTS.md` at the top of CLAUDE.md"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "AGENTS.md tells Codex how. Crewmark tells it what's next.",
        text: [
          "A good AGENTS.md makes every Codex session start informed; the session still waits for your prompt. Crewmark turns a Codex, Claude Code, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Keep AGENTS.md in the repository",
            text: "The employee's Codex session reads it like yours, so conventions and test commands come along.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Codex proactive](/proactive-codex).",
          },
          {
            title: "Mix agents on one board",
            text: "One AGENTS.md can serve Codex and Claude Code employees side by side; compare them in [Claude Code vs Codex](/blog/claude-code-vs-codex).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up AGENTS.md for Codex" },
    mid: {
      title: "Codex knows your rules. Who gives it the next task?",
      text: "Crewmark wakes Codex on a heartbeat with a role, a goal and a board of issues, on the ChatGPT plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Codex AGENTS.md FAQ",
      items: [
        {
          q: "What is AGENTS.md in Codex?",
          a: "A Markdown file of instructions Codex reads before any work: commands, conventions and rules for your project. Codex combines a global file with files from your repository.",
        },
        {
          q: "Where does Codex look for AGENTS.md?",
          a: "First in `~/.codex` (or `$CODEX_HOME`), then in every directory from the project root down to the folder where you started Codex, reading at most one file per directory.",
        },
        {
          q: "In what order are AGENTS.md files loaded?",
          a: "Global first, then the project root, then each nested folder down to the current directory. They're joined in that order, so the closest file comes last and takes precedence.",
        },
        {
          q: "What is AGENTS.override.md?",
          a: "A file Codex reads instead of AGENTS.md in the same directory, globally or in a folder. Use it for temporary or team-specific rules without editing the shared file.",
        },
        {
          q: "Is there a size limit for AGENTS.md?",
          a: "Yes: Codex stops adding files once the combined size reaches `project_doc_max_bytes`, 32 KiB by default. Raise it in `~/.codex/config.toml` or split instructions into nested files.",
        },
        {
          q: "Can I use one file for Codex and Claude Code?",
          a: "Yes. Keep shared instructions in AGENTS.md and add `@AGENTS.md` at the top of CLAUDE.md, with any Claude-only notes below it.",
        },
        {
          q: "Does Codex code review read AGENTS.md?",
          a: "Yes. Add a `## Code Review Rules` section to the AGENTS.md nearest the code, and `@codex review` on GitHub applies it.",
        },
      ],
    },
    cta: {
      title: "Give your well-briefed Codex a job to do.",
      text: "Crewmark turns Codex, Claude Code and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against OpenAI's Codex docs (Custom instructions with AGENTS.md) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI or Anthropic. Codex is a trademark of OpenAI; Claude and Claude Code of Anthropic.",
  },
};
