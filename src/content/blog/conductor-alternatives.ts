import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/conductor-alternatives, the fifth trending-term post (MC-82), for "conductor alternative(s)", "conductor
// alternative claude code", "conductor alternative for opencode", "conductor alternative for windows/linux",
// "conductor ai", "conductor ai agents" and "conductor meta" (Google autocomplete, 2026-11-06). Facts come from
// Conductor's announcement (conductor.build/announcement), its 0.93.0 changelog entry (November 4, 2026), its docs
// (introduction, install, git worktrees) and TechCrunch's report of November 4, 2026, as of `checked`. The deal's terms
// weren't disclosed, so none are quoted. The Claude Code cells follow /blog/claude-code-worktree and the Codex cells
// /blog/claude-code-vs-codex.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# Find the worktrees Conductor made for this repository
git worktree list

# In each workspace you want to keep: commit and push its branch
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const conductorAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Conductor Alternatives as Conductor Joins Meta | Crewmark AI",
      description:
        "Conductor, the Mac app for parallel Claude Code and Codex agents, is joining Meta. The shutdown dates, how to save your workspaces, and the alternatives for Mac, Windows and Linux.",
    },
    breadcrumb: "Conductor alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · AI coding agents",
      title: "Conductor is joining Meta: what happens now, and where to run your agents next",
      lead: "Conductor, the Mac app that runs Claude Code, Codex, Cursor and OpenCode agents in parallel workspaces, announced on November 4, 2026 that it's joining Meta. New sign-ups are closed, Conductor Cloud goes read-only on November 13 and shuts down on November 20, and the local app gets updates only until early 2027. This guide covers the dates, how to keep your work, and the alternatives that do the same job.",
      cta: "Get started",
      secondary: "Save your workspaces",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Conductor was, and what's changing",
        text: [
          "Conductor gave every coding task its own workspace: a git worktree with its own branch, files, terminal, diff and review flow, so several agents could work on one repository at once. It ran on macOS only, with Claude Code, Codex, Cursor and OpenCode, and added Conductor Cloud for workspaces that kept running away from your Mac.",
          "Founder Charlie Holtz announced that the team is joining Meta and building \"the next interface\", with something new promised for early next year. Meta confirmed the deal to TechCrunch but disclosed no terms.",
        ],
      },
      {
        kind: "table",
        title: "The Conductor shutdown timeline",
        headers: ["Date", "What happens"],
        rows: [
          ["November 4, 2026", "No new sign-ups or downloads. Free users can't upgrade; Pro users keep Pro features at no cost. Active subscribers get a refund."],
          ["November 13, 2026", "Cloud workspaces become read-only: you can read old chats and export data, but not send messages."],
          ["November 20, 2026", "Conductor Cloud shuts down and deletion of cloud user data begins."],
          ["Until early 2027", "The local Mac app keeps getting new models and critical bug fixes, then winds down; all user data is deleted when it shuts down."],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to keep your work before the deadlines",
        steps: [
          {
            title: "Move cloud workspaces to your Mac before November 13",
            text: "Right-click each cloud workspace in Conductor and choose Transfer to local. The workspace and its chats move to your computer.",
          },
          {
            title: "Export your data before November 20",
            text: "Go to Settings → Account → Export data in Conductor to download everything, including chats you may want to keep as notes or prompts.",
          },
          {
            title: "Push every branch you care about",
            text: "Local workspaces are ordinary git worktrees, usually under `~/conductor/workspaces/<repo>/<workspace>`, sharing your repository's history. Commit and push their branches so the work outlives the app.",
            code: rescue,
          },
          {
            title: "Carry over your setup scripts",
            text: "Conductor keeps per-project setup, run and archive scripts in `.conductor/settings.toml` or `.conductor/settings.local.toml`. Copy the commands into your README or your next tool's setup, and list files such as `.env` in a `.worktreeinclude` if you move to Claude Code worktrees.",
          },
          {
            title: "Pick a replacement and try it on one task",
            text: "Compare the options below, then run one real task in the new tool before your Conductor Pro access ends.",
          },
        ],
        source: { label: "Source: Conductor's announcement", href: announcement },
      },
      {
        kind: "table",
        id: "alternatives",
        title: "Conductor alternatives compared",
        headers: ["", "Conductor", "Claude Code on its own", "Codex app", "Crewmark"],
        rows: [
          ["What it is", "Mac app for parallel agents in worktrees", "`claude --worktree`, parallel sessions in the desktop app, background agents", "OpenAI's desktop app with worktrees and cloud tasks", "AI employees: agent sessions with roles, goals, working hours and a heartbeat"],
          ["Agents", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
          ["Platforms", "macOS", "macOS, Windows, Linux", "Desktop app and web", "macOS, Windows, Linux"],
          ["Isolation", "One git worktree per workspace", "One git worktree per session or subagent", "Worktrees", "Each employee in its own session and checkout"],
          ["Who starts the next task", "You", "You (or a schedule)", "You (or a schedule)", "The heartbeat: each employee wakes and takes the next issue"],
          ["Task board", "Workspaces list", "No", "No", "Yes, with issues, comments and messages to you"],
          ["Status", "Cloud ends November 20; local until early 2027", "Active", "Active", "Active"],
        ],
      },
      {
        kind: "text",
        title: "Which Conductor alternative fits you",
        points: [
          "You used Conductor mostly with Claude Code: Claude Code now does the core of it itself. `claude --worktree <name>` gives each session its own worktree and branch, `.worktreeinclude` copies your `.env`, and the desktop app runs parallel sessions with a Worktree switch. See the [Claude Code worktree guide](/blog/claude-code-worktree).",
          "You mostly used Codex: the Codex desktop app has worktrees and cloud tasks built in; compare the two agents in [Claude Code vs Codex](/blog/claude-code-vs-codex).",
          "You need Windows or Linux: Conductor never shipped there; Claude Code's CLI and Crewmark both run on all three.",
          "You mixed agents, or want them to keep working without you: that's what Crewmark is for (below). For running several agents by hand, see [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Conductor ran your agents side by side. Crewmark gives them jobs.",
        text: [
          "Conductor made parallel agents easy to start and review, but every workspace still waited for you to type the next prompt. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Bring your repositories and your agents",
            text: "Run the setup command in each project. Several employees can share a repository, each in its own checkout, much like your Conductor workspaces.",
          },
          {
            title: "Give each one a role and a goal",
            text: "A programmer, a reviewer, an SEO writer: each has a goal written as a number and the hours it works. Read [what an AI employee is](/ai-employees).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "Every 15, 30 or 60 minutes the employee wakes in the same conversation, takes the next issue and messages you when it needs a decision; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Keep your work before Conductor shuts down" },
    mid: {
      title: "Moving off Conductor? Don't just replace it, upgrade it.",
      text: "Crewmark runs Claude Code, Codex and OpenCode as AI employees that wake on a heartbeat and take the next issue themselves.",
      button: "Get started",
    },
    faq: {
      title: "Conductor shutdown FAQ",
      items: [
        {
          q: "Is Conductor shutting down?",
          a: "Partly. Conductor is joining Meta. Conductor Cloud goes read-only on November 13, 2026 and shuts down on November 20. The local Mac app keeps getting new models and critical fixes until early 2027, then winds down.",
        },
        {
          q: "Did Meta acquire Conductor?",
          a: "Yes. Conductor announced on November 4, 2026 that it's joining Meta, and Meta confirmed the acquisition to TechCrunch. The price and terms weren't disclosed.",
        },
        {
          q: "Can I still download or sign up for Conductor?",
          a: "No. New sign-ups and downloads stopped on November 4, 2026, and free users can no longer upgrade to Pro.",
        },
        {
          q: "What happens to my data and my subscription?",
          a: "Cloud user data starts being deleted on November 20, and all user data is deleted when the app shuts down. Export it from Settings → Account → Export data. Active subscribers get a refund, and Pro users keep Pro features at no cost until then.",
        },
        {
          q: "What's the best Conductor alternative for Claude Code?",
          a: "Claude Code's own `--worktree` flag and the desktop app's parallel sessions cover isolated parallel work. To have the sessions pick up work on their own, run them as Crewmark employees.",
        },
        {
          q: "Is there a Conductor alternative for Windows or Linux?",
          a: "Conductor itself was Mac-only. Claude Code's CLI with `--worktree`, plain `git worktree`, and Crewmark all run on macOS, Windows and Linux.",
        },
        {
          q: "Will my Conductor workspaces keep working?",
          a: "Local workspaces are plain git worktrees with ordinary branches, so the code stays in your repository whatever happens to the app. Commit and push the branches you want to keep.",
        },
      ],
    },
    cta: {
      title: "Your agents need a new home. Give them a job, too.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Conductor's announcement, changelog and docs, and TechCrunch's report, on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Conductor, Meta, Anthropic or OpenAI. Conductor is a trademark of its owner, Claude and Claude Code of Anthropic, and Codex of OpenAI.",
  },
};
