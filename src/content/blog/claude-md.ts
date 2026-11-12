import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-md, the first evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude.md",
// "claude.md vs agents.md", "claude.md best practices", "claude.md examples", "claude.md template" and "claude.md
// locations" (Google autocomplete, 2026-11-05). Facts come from the Claude Code docs (memory, best practices,
// commands), agents.md and the Codex AGENTS.md guide, as of `checked`. The older claude.com blog post still describes
// the `#` shortcut and a directory map; the current docs drop both, so the copy follows the docs. Version numbers are
// left out because they change weekly.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commands
- Install: pnpm install
- One test file: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Conventions
- Throw errors with the helpers in src/lib/errors.ts, never raw strings.
- src/legacy/ is still live, but don't copy its patterns.

# Gotchas
- Integration tests need DATABASE_URL (see .env.example).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- Every handler validates its input with the schema in src/api/schemas/.`;

export const claudeMd: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "CLAUDE.md: Locations, Best Practices, Template and AGENTS.md | Crewmark",
      description:
        "How CLAUDE.md works in Claude Code: where the files go and in what order they load, imports, rules, what to put in it, a template, and how it relates to AGENTS.md.",
    },
    breadcrumb: "CLAUDE.md guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-05" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "CLAUDE.md: where it goes, what to write, and how it works with AGENTS.md",
      lead: "CLAUDE.md is a markdown file of instructions that Claude Code reads at the start of every session: the commands to run, the conventions to follow and the traps to avoid in your project. This guide covers every place a CLAUDE.md can live and the order they load in, imports and rules files, what belongs in one and what doesn't, a short template, and how it relates to AGENTS.md.",
      cta: "Get early access",
      secondary: "Jump to the template",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What CLAUDE.md is",
        text: [
          "Claude Code starts every session without memory of the last one. CLAUDE.md is how you give it the context a new teammate would need: it's read at launch and sent to Claude as a message after the system prompt. That makes it context, not enforced configuration. Claude usually follows it, but anything that must always or never happen belongs in hooks or permission rules.",
        ],
        points: [
          "Plain markdown, no required fields: headings and short bullets work best.",
          "Files are combined, not overridden: every CLAUDE.md that applies is loaded, so contradictory lines leave Claude to pick one.",
          "Check what loaded with `/context all`, under Memory files.",
        ],
      },
      {
        kind: "table",
        title: "Where CLAUDE.md files go, and the order they load",
        text: [
          "Claude Code loads these from broadest to most specific, so the file closest to where you launched is read last. It also walks up from your working directory and loads a CLAUDE.md from every parent directory.",
        ],
        headers: ["Scope", "Location", "Use it for"],
        rows: [
          ["Managed policy", "`/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS), `/etc/claude-code/CLAUDE.md` (Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md` (Windows)", "Rules an organization sets for every developer"],
          ["User", "`~/.claude/CLAUDE.md`", "Your own preferences in every project"],
          ["Project", "`./CLAUDE.md` or `./.claude/CLAUDE.md`", "The team's instructions, committed to git"],
          ["Local", "`./CLAUDE.local.md`", "Your notes for one project; add it to .gitignore"],
          ["Subdirectory", "`some/dir/CLAUDE.md`", "Loaded only when Claude reads or edits a file in that directory"],
          ["Rules", "`.claude/rules/*.md` and `~/.claude/rules/`", "Topic files; with a `paths` glob they load only for matching files"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to write a CLAUDE.md that works",
        steps: [
          {
            title: "Start with /init",
            text: "Run `/init` in your project. Claude Code reads the codebase and writes a starter CLAUDE.md; if one exists, it suggests improvements instead of overwriting it. It also picks up `.cursorrules` and Copilot instructions.",
          },
          {
            title: "Cut it to what Claude can't find on its own",
            text: "Keep the exact build, test and lint commands (including how to run one test), the places where the code is misleading, decisions that aren't written down anywhere, and anything you've had to correct twice. Remove file trees and architecture Claude can read from the repo. Anthropic suggests staying under 200 lines.",
            code: example,
          },
          {
            title: "Be specific, without shouting",
            text: "Write \"Use 2-space indentation\", not \"Format code properly\". The current docs say IMPORTANT and ALL CAPS are outdated advice: they make Claude over-apply a rule. If a line keeps being missed, shorten the file or turn the rule into a hook.",
          },
          {
            title: "Split it with imports and rules",
            text: "`@path/to/file` imports another file (relative to the importing file, up to four levels deep); an `@` inside backticks stays literal. Rules that apply to part of the codebase go in `.claude/rules/` with a `paths` glob, so they load only when Claude touches matching files.",
            code: rule,
          },
          {
            title: "Move procedures into skills",
            text: "Multi-step workflows, such as how to cut a release, belong in a skill (`.claude/skills/<name>/SKILL.md`), which loads only when it's relevant. CLAUDE.md is read on every task, so every line costs attention.",
          },
          {
            title: "Keep it current",
            text: "Add a line when Claude repeats a mistake or a review catches something, and edit the file with `/memory` or by asking Claude to update it. `/doctor` proposes trims when the file grows too long.",
          },
        ],
        source: { label: "Source: Claude Code docs, How Claude remembers your project", href: memory },
      },
      {
        kind: "table",
        title: "CLAUDE.md vs AGENTS.md",
        text: [
          "AGENTS.md is an open format for instructions to coding agents, used by Codex, Cursor, Gemini CLI, GitHub Copilot's coding agent, opencode and many others. Claude Code now reads it too, but by default only when the project has no CLAUDE.md.",
        ],
        headers: ["", "CLAUDE.md", "AGENTS.md"],
        rows: [
          ["Read by", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode and others; Claude Code as a fallback"],
          ["When Claude Code reads it", "Always", "By default only if there's no CLAUDE.md, `.claude/CLAUDE.md` or CLAUDE.local.md in the tree; `/config` can read both"],
          ["Personal file", "`CLAUDE.local.md`", "Not read by Claude Code (`AGENTS.override.md` is Codex's)"],
          ["Imports", "`@path`, up to four levels", "None in the format"],
          ["Path-scoped rules", "`.claude/rules/` with `paths`", "Nested AGENTS.md files per directory"],
        ],
      },
      {
        kind: "text",
        title: "Using one file for Claude Code and Codex",
        text: [
          "If your team runs both agents, keep the shared instructions in AGENTS.md and make CLAUDE.md import it, with Claude-only notes underneath. It never loads twice. A symlink (`ln -s AGENTS.md CLAUDE.md`) also works, but not for teammates on Windows, and a CLAUDE.md that only says \"read AGENTS.md\" in words isn't reliable.",
        ],
        points: [
          "This website's own repository does exactly that: its CLAUDE.md is the single line `@AGENTS.md`.",
          "Codex reads AGENTS.md files from the repository root down to your working directory, and caps their combined size at 32 KiB by default.",
        ],
      },
      {
        kind: "text",
        title: "Limits and gotchas",
        points: [
          "A CLAUDE.md that loads at launch is read whole up to 4 MiB; a bigger file is skipped.",
          "Files that load on demand, such as subdirectory CLAUDE.md files and path-scoped rules, are cut off past a per-file limit (40,000 characters with a 200K context window).",
          "Imports organize a file but don't save context: imported text still loads.",
          "Imports outside the project ask for approval once; HTML comments `<!-- -->` are stripped and cost nothing.",
          "The project-root CLAUDE.md is read again after `/compact`.",
          "\"Remember this\" goes to auto memory (`~/.claude/projects/<project>/memory/`), not to CLAUDE.md.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "CLAUDE.md says how to work. Crewmark says what to work on, and when.",
        text: [
          "A good CLAUDE.md makes every Claude Code session start informed, but the session still waits for your next message. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as software engineer or SEO specialist, write its goal as a number, and run the setup command in your project, where your CLAUDE.md already lives.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code). Several can share one repository, as in [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee takes it, comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Write a CLAUDE.md file for Claude Code" },
    mid: {
      title: "Your CLAUDE.md is ready. Who starts the next task?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "CLAUDE.md FAQ",
      items: [
        {
          q: "What is CLAUDE.md?",
          a: "A markdown file of project instructions that Claude Code reads at the start of every session, such as build and test commands, conventions and known traps. It's context for Claude, not enforced configuration.",
        },
        {
          q: "Where do I put CLAUDE.md?",
          a: "For a team, in the project root as `./CLAUDE.md` or `./.claude/CLAUDE.md`, committed to git. For yourself, `~/.claude/CLAUDE.md` applies to every project and `./CLAUDE.local.md` to one. Subdirectories can have their own, loaded when Claude works in them.",
        },
        {
          q: "How long should CLAUDE.md be?",
          a: "Short. Anthropic suggests under 200 lines per file, because every line is read on every task. Move procedures into skills and part-of-the-codebase rules into `.claude/rules/`.",
        },
        {
          q: "Does Claude Code read AGENTS.md?",
          a: "Yes, but by default only when the project has no CLAUDE.md. To share one file, put `@AGENTS.md` at the top of CLAUDE.md, or set the Project instructions option in `/config` to read both.",
        },
        {
          q: "CLAUDE.md or AGENTS.md: which should I use?",
          a: "If only Claude Code reads your repository, CLAUDE.md. If teammates also use Codex, Cursor or another agent, write AGENTS.md and import it from a CLAUDE.md that adds Claude-only notes.",
        },
        {
          q: "How do I create a CLAUDE.md file?",
          a: "Run `/init` in Claude Code to generate one from your codebase, then trim it. Edit it later with `/memory` or by asking Claude to add a line.",
        },
        {
          q: "Why is Claude ignoring my CLAUDE.md?",
          a: "Check that it loaded with `/context all`, look for contradictions between files, and shorten it: long files dilute each rule. Anything that must never be skipped belongs in a hook or permission rule, not in CLAUDE.md.",
        },
      ],
    },
    cta: {
      title: "Give your well-briefed Claude Code a job to do.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs, agents.md and OpenAI's Codex docs on November 5, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude and Claude Code are trademarks of Anthropic, and Codex of OpenAI.",
  },
};
