import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-worktree, the third evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude
// code worktree", "claude code worktrees explained", "claude code worktree workflow", "claude code worktree cleanup",
// "claude code worktree location", "claude code worktree base ref", "claude code worktreeinclude", "claude code
// worktree vs branch" and "claude worktree vs git worktree" (Google autocomplete, 2026-11-06). Facts come from the
// Claude Code docs (worktrees, settings reference, CLI reference, desktop), as of `checked`. /blog/multiple-claude-code-
// agents compares the ways to run agents in parallel; this post goes deep on worktrees alone. Version numbers are
// left out because they change weekly.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# Two isolated sessions, each in its own terminal
claude --worktree feature-auth
claude --worktree fix-flaky-test

# Branch a worktree from pull request 1234 (quote the #)
claude --worktree "#1234"

# Keep worktrees out of git status
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const claudeCodeWorktree: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Worktree: --worktree, Workflow, Cleanup and Settings | Crewmark",
      description:
        "How git worktrees work in Claude Code: claude --worktree, where worktrees go, the base branch, .worktreeinclude for .env files, cleanup, subagent isolation and the settings.",
    },
    breadcrumb: "Claude Code worktree guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code worktrees: run parallel sessions without edit conflicts",
      lead: "A Claude Code worktree is a separate git working directory, with its own files and its own branch, that shares your repository's history. Start a session with `claude --worktree <name>` and Claude edits there instead of in your checkout, so two or three sessions can work at once without touching each other's files. This guide covers the flag, where worktrees go, which branch they start from, getting `.env` files into them, cleanup, subagents, and the settings.",
      cta: "Get early access",
      secondary: "Jump to the workflow",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "Claude Code worktrees, explained",
        text: [
          "Git has supported worktrees for years: `git worktree add` checks a branch out into a second directory, backed by the same `.git` data. Claude Code builds on that. With `--worktree` (or `-w`) it creates the worktree for you, starts the session inside it, blocks edits that would land in your main checkout, and offers to clean up when you exit.",
          "Worktrees isolate files, nothing else. To split one task between workers inside a single conversation, use subagents; to compare the options, see [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        ],
        points: [
          "Default location: `.claude/worktrees/<name>/` at the repository root.",
          "Default branch name: `worktree-<name>`. Leave out the name and Claude Code picks one, such as `bright-running-fox`.",
          "Shared with your checkout: the `.git` directory (so commits and branches are visible everywhere), project-scope plugins, and \"don't ask again\" permission approvals.",
          "Not shared: anything gitignored, such as `.env`, `node_modules` and build output. A worktree is a fresh checkout.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "The worktree workflow, step by step",
        steps: [
          {
            title: "Ignore the worktree folder",
            text: "Add `.claude/worktrees/` to `.gitignore`, so worktree files don't show up as untracked in your main checkout. If you've never run Claude in this repository, run `claude` once first to accept the workspace trust prompt; interactive `--worktree` runs exit until you do.",
          },
          {
            title: "Start one session per task",
            text: "Run `claude --worktree <name>` in one terminal for each task. Running it again with an existing name reopens that worktree instead of making a new one. You can also ask Claude mid-session to \"work in a worktree\", and it moves itself into one with the `EnterWorktree` tool.",
            code: start,
          },
          {
            title: "Bring the untracked files along",
            text: "List gitignored files the project needs, such as `.env` and `.env.local`, in a `.worktreeinclude` file at the repository root, using `.gitignore` syntax. Claude Code copies matching files into every worktree it creates, including subagent and desktop worktrees. Then install dependencies in the worktree, or set it up in settings: this example branches from your current work, reuses one `node_modules` and checks out only the web package.",
            code: settings,
          },
          {
            title: "Let the sessions work",
            text: "While a session is isolated, Claude Code refuses file edits that target the main checkout, commands whose working directory is the main checkout, and git commands redirected into it (`git -C`, `--git-dir`, `GIT_DIR`). It doesn't track what a plain shell command such as `cp` writes, so permissions and sandboxing still matter.",
          },
          {
            title: "Review and merge like any branch",
            text: "Each worktree is a normal branch. Commit and push from inside it, open a pull request, and review it as you would a teammate's. Because all worktrees share `.git`, the branch is visible from your main checkout straight away.",
          },
          {
            title: "Exit and clean up",
            text: "When you exit, Claude Code checks the worktree. A clean one from an unnamed session is removed with its branch automatically; a named session asks first. If there are changes, untracked files or new commits, it asks whether to keep or remove the worktree, and prints a `claude --worktree <name> --resume` command to come back later.",
          },
        ],
        source: { label: "Source: Claude Code docs, Run parallel sessions with worktrees", href: docs },
      },
      {
        kind: "table",
        title: "Worktree settings in Claude Code",
        text: [
          "All of these go under `worktree` in a settings file (`~/.claude/settings.json`, `.claude/settings.json` or `.claude/settings.local.json`).",
        ],
        headers: ["Setting", "What it does", "Default"],
        rows: [
          ["`worktree.baseRef`", "`\"fresh\"` branches from the remote default branch (`origin/main`); `\"head\"` branches from your local HEAD, unpushed commits included", "`\"fresh\"`"],
          ["`worktree.symlinkDirectories`", "Symlinks directories such as `node_modules` from the main checkout instead of duplicating them", "None"],
          ["`worktree.sparsePaths`", "Checks out only the listed directories (plus root files) with sparse-checkout; include `.claude`", "Whole tree"],
          ["`worktree.bgIsolation`", "`\"worktree\"` makes background sessions edit only inside a worktree; `\"none\"` lets them edit the working copy", "`\"worktree\"`"],
          ["Worktree location (desktop app)", "Settings > Code sets a custom folder for local sessions; SSH connections have their own", "`.claude/worktrees/`"],
          ["`.worktreeinclude` (file, not a setting)", "Copies matching gitignored files into each new worktree", "None"],
        ],
      },
      {
        kind: "table",
        title: "Claude Code worktree vs branch vs git worktree",
        headers: ["", "Switching branches", "`git worktree add` + `claude`", "`claude --worktree`"],
        rows: [
          ["Separate files on disk", "No: one directory, one branch at a time", "Yes", "Yes"],
          ["Several sessions at once", "No: they overwrite each other", "Yes", "Yes"],
          ["Where it goes", "Your checkout", "Anywhere you choose", "`.claude/worktrees/<name>/`, or a hook's path"],
          ["Starts from", "The branch you switch to", "Any existing or new branch", "`origin/<default>`, your HEAD, or a PR"],
          ["Copies `.env`", "Not needed", "No", "Yes, with `.worktreeinclude`"],
          ["Edits blocked outside it", "No", "No", "Yes"],
          ["Cleanup", "None", "`git worktree remove`", "Offered on exit"],
        ],
      },
      {
        kind: "steps",
        id: "git-worktree",
        title: "Doing it by hand with git worktree",
        text: [
          "Use plain git when you want a specific existing branch or a folder outside the repository; `worktree.baseRef` can't name a branch. Claude Code still shares plugins and permission approvals with these worktrees.",
        ],
        steps: [
          {
            title: "Create the worktree, start Claude, remove it when done",
            text: "Replace `feature-a` with a new branch name, or drop `-b` to check out a branch that already exists.",
            code: manual,
          },
        ],
      },
      {
        kind: "text",
        title: "Subagents and background sessions in worktrees",
        points: [
          "Ask Claude to \"use worktrees for your agents\", or add `isolation: worktree` to a custom subagent's frontmatter in `.claude/agents/`, and each subagent edits in its own temporary worktree.",
          "A subagent worktree without changes is removed when the subagent finishes. One with changes stays until a periodic sweep can remove it without losing work, after `cleanupPeriodDays`.",
          "Background sessions (`claude --bg`) edit only inside a worktree by default; start one with `claude --bg --worktree` or set `worktree.bgIsolation` to `\"none\"`.",
          "In the desktop app, turn on Worktree under the prompt box before you start a session.",
        ],
      },
      {
        kind: "text",
        title: "Worktree cleanup and common problems",
        points: [
          "`claude -p --worktree` runs have no exit prompt, so they leave their worktrees behind. Remove them with `git worktree remove`, after `git worktree unlock` if git says it's locked.",
          "`Can only use --worktree in a git repository`: run `git init` and make a first commit, or set up a `WorktreeCreate` hook for SVN, Perforce or Mercurial.",
          "Git LFS files show up as pointer files when LFS was installed with `--local`: run `git lfs pull` inside the worktree.",
          "Claude Code won't create a worktree when `.claude` or `.claude/worktrees` is a symlink.",
          "Hooks keep `${CLAUDE_PROJECT_DIR}` pointing at the main checkout; read the `cwd` field of the hook input to get the worktree path.",
          "A worktree with `\"fresh\"` base and no commits of its own, or whose PR was merged, resets to the default branch when you reopen it by name.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Worktrees keep sessions apart. Crewmark keeps them busy.",
        text: [
          "Worktrees solve the collision problem, but each session still sits idle until you type. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "One employee per worktree",
            text: "Give each employee its own worktree and role, such as a programmer and a reviewer in the same repository, as in [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours each employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Assign issues and review branches",
            text: "Put work on the board; each employee takes an issue, commits on its own branch and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run parallel Claude Code sessions in git worktrees" },
    mid: {
      title: "Three worktrees, three sessions. Who tells them what's next?",
      text: "Crewmark wakes each Claude Code session on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "Claude Code worktree FAQ",
      items: [
        {
          q: "What is a worktree in Claude Code?",
          a: "A separate git working directory with its own files and branch that shares your repository's history. `claude --worktree <name>` creates one and runs the session inside it, so parallel sessions don't edit the same files.",
        },
        {
          q: "Where does Claude Code put worktrees?",
          a: "In `.claude/worktrees/<name>/` at the repository root, on a branch named `worktree-<name>`. The desktop app lets you pick another folder in Settings, and a `WorktreeCreate` hook can place them anywhere.",
        },
        {
          q: "Which branch does a Claude Code worktree start from?",
          a: "The remote default branch, usually `origin/main`, by default. Set `worktree.baseRef` to `\"head\"` to branch from your local HEAD, pass `\"#1234\"` to start from a pull request, or create the worktree with `git worktree add` for any other branch.",
        },
        {
          q: "Why is my .env file missing in the worktree?",
          a: "A worktree is a fresh checkout, so gitignored files aren't there. List them in a `.worktreeinclude` file at the repository root and Claude Code copies them into every new worktree.",
        },
        {
          q: "How do I clean up Claude Code worktrees?",
          a: "Exiting a session offers to remove its worktree, and removes clean unnamed ones automatically. Worktrees from `-p` runs stay behind: list them with `git worktree list` and remove them with `git worktree remove`.",
        },
        {
          q: "Worktree or branch: what's the difference?",
          a: "A branch is a line of commits; a worktree is a directory where a branch is checked out. Switching branches changes the files in your one directory, while worktrees give each branch its own directory, so several sessions can run at once.",
        },
        {
          q: "Can subagents use worktrees?",
          a: "Yes. Ask Claude to use worktrees for its agents, or add `isolation: worktree` to a custom subagent's frontmatter. Each gets a temporary worktree that's removed if it makes no changes.",
        },
      ],
    },
    cta: {
      title: "Give each worktree an employee that knows what to do next.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the Claude Code docs (worktrees, settings, CLI reference and desktop) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
