import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/run-claude-code-24-7, for "claude code 24/7", "can claude code run 24 7", "claude code 24/7 agent", "run claude
// code overnight", "can claude code run overnight", "letting claude code run overnight", "claude code night shift",
// "claude code unattended (mode)", "run claude code unattended", "claude code keep working" (Google autocomplete,
// 2026-11-08; the "Run Claude Code 24/7 / overnight" page from docs/seo/agent-keywords-2026-11-07.md). Facts come from
// the Claude Code docs on cloud sessions (code.claude.com/docs/en/claude-code-on-the-web, checked 2026-11-08) and the
// pages already checked on this site: /proactive-claude-code (permission modes, /goal, /loop, scheduled tasks),
// /remote-claude-code (Remote Control) and /blog/claude-code-vs-codex (usage limits). Crewmark's behaviour comes from
// the code: heartbeat intervals in src/lib/types.ts, working hours that may run past midnight in cli/daemon.go.
// /proactive-claude-code owns "claude code scheduled tasks" and "claude code loop"; this post links there.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Keep a Mac awake while Claude Code works (it can sleep again once claude exits)
caffeinate -i claude --permission-mode auto

# Or hand the task to a cloud session, which keeps running with your laptop closed
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# Queue the next step into that cloud session from any machine
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const runClaudeCode247: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Can Claude Code Run 24/7? Run It Overnight, Unattended",
      description:
        "How to keep Claude Code working overnight or around the clock: permission modes, /goal, keeping the machine awake, cloud sessions, scheduled tasks, usage limits, and what stops it.",
    },
    breadcrumb: "Run Claude Code 24/7",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-08" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Can Claude Code run 24/7? How to run it overnight and unattended",
      lead: "Yes, with limits. Claude Code has no clock of its own that stops it, but four things do: the session ends or the computer sleeps, it stops at a permission prompt, it hits your plan's usage limit, or it finishes and has nothing to do next. Each has a fix. This guide covers the ways to keep Claude Code working while you sleep, what each one can't do, and how to give it a standing night shift.",
      cta: "Get started",
      secondary: "Run it overnight",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Ways to keep Claude Code running",
        text: [
          "Some keep one conversation going, so Claude remembers what it did; others start a fresh session each time with the same prompt.",
        ],
        headers: ["Option", "Computer can be off", "Same conversation", "Where it stops", "Best for"],
        rows: [
          ["Cloud session (`claude --cloud`, claude.ai/code)", "Yes", "Yes", "Stops after a period of inactivity; the VM is reclaimed", "One long task you hand off before bed"],
          ["Cloud scheduled tasks (`/schedule`)", "Yes", "No, a new session each run", "At most hourly; Pro, Max, Ultra, Team or Enterprise", "Repeating jobs that only need a repository"],
          ["Desktop scheduled tasks", "No: app open, computer awake", "No, a new session each run", "Only while the machine is awake", "Nightly jobs on local files"],
          ["`/loop`", "No: session open", "Yes", "Ends with the session; recurring loops expire after 7 days", "Watching CI or a deploy for a few hours"],
          ["cron + `claude -p --resume`", "No", "Yes", "Your cron rhythm; you wire it up yourself", "One agent working through a TODO file"],
          ["Crewmark heartbeat", "No", "Yes", "Working hours you set, even past midnight", "A standing job taken from a board, issue by issue"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to run Claude Code overnight",
        steps: [
          {
            title: "Pick a permission mode that won't stop for every prompt",
            text: "A session waiting at a permission prompt at 2am does nothing until morning. Auto mode runs actions with background safety checks instead of asking. Keep `bypassPermissions`, which skips every check, for isolated containers and VMs.",
            code: overnight,
          },
          {
            title: "Give it a finish line",
            text: "`/goal` takes a condition, such as a test suite passing; after each turn Claude checks it and starts another turn by itself until it's met. For a longer night, leave a TODO file or a written plan in the repository and tell it to work through it in order.",
          },
          {
            title: "Keep the machine awake, or move the work to the cloud",
            text: "A local session needs the computer on and the claude process running. On a Mac, `caffeinate -i` keeps it awake while Claude Code runs; on a server, run claude inside tmux or screen so it survives a closed terminal. A cloud session keeps running after you close your laptop.",
          },
          {
            title: "Plan for usage limits",
            text: "Claude plans use a rolling 5-hour window plus a weekly limit, shared with chat. Max gets 5 times Pro's usage; Ultra gets 10 times Pro per week and, for verified accounts, no 5-hour limit. If the limit hits mid-task, Claude Code may finish the current step (once a week on Pro, every time on Max). Usage credits or an API key let it keep going. See [how to reduce Claude Code token usage](/blog/reduce-claude-code-token-usage).",
          },
          {
            title: "Check in from your phone",
            text: "Remote Control lets you look at a local session from the Claude app or a browser, and cloud sessions show up in the app's Code tab. If Claude asked a question overnight, answer when you wake up and it carries on. See [Claude Code Remote Control](/remote-claude-code).",
          },
        ],
        source: { label: "Source: Anthropic's Claude Code docs on cloud sessions", href: docs },
      },
      {
        kind: "text",
        id: "stops",
        title: "What stops Claude Code overnight",
        points: [
          "The terminal closes or the computer sleeps. A Remote Control session reconnects once the machine is awake, but no work happens while it's asleep.",
          "A permission prompt nobody answers. Auto mode avoids most of them.",
          "The usage limit. The session waits until the window resets unless you add credits or an API key.",
          "Inactivity in the cloud. Cloud sessions stop after a while without activity, including while they wait for you to approve an MCP tool call. Reopening restores the conversation, but not shell commands, subagents or a `/loop` that were still running.",
          "Running out of work. Once the goal is met or the TODO list is empty, it stops, which is what you want.",
          "A very long session. Claude Code compacts the context automatically, so early details survive only as a summary. Keep the plan in a file, not just in the chat.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Claude Code a night shift",
        text: [
          "Running all night is easy to start and hard to keep up: someone has to queue the next task each morning. Crewmark turns a Claude Code conversation into an AI employee with working hours and a heartbeat, so it keeps taking work from a board on its own.",
        ],
        steps: [
          {
            title: "Set the working hours",
            text: "Working hours can run past midnight, so a night shift such as 22:00 to 07:00 works, weekdays only or every day. Outside its hours the employee sleeps and doesn't touch your plan.",
          },
          {
            title: "Pick the heartbeat",
            text: "During its shift, the crewmark CLI wakes the same conversation every 15, 30, 60, 120 or 240 minutes to take the next issue. If the conversation was closed, Crewmark resumes it with `claude -p --resume` in auto mode. Your computer has to stay on.",
          },
          {
            title: "Read the board in the morning",
            text: "Each issue has its comments and activity log, and anything that needs you arrives as a message the employee waits on. See [how to make Claude Code proactive](/proactive-claude-code) and [what an AI employee is](/ai-employees); for Codex, read [Codex long-running tasks](/blog/codex-long-running-tasks).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run Claude Code overnight" },
    mid: {
      title: "Want Claude Code to work the night shift every night?",
      text: "Crewmark wakes your Claude Code on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Claude Code run 24/7?",
          a: "Yes, as long as something keeps it going: a cloud session or cloud scheduled task with your computer off, or a local session on a machine that stays awake, with a permission mode that doesn't stop for prompts. Usage limits still apply, so around-the-clock work needs a plan with room, or credits.",
        },
        {
          q: "Can I leave Claude Code running overnight?",
          a: "Yes. Start it in auto mode with a clear goal or a TODO file, keep the machine awake (or use `claude --cloud`), and check the result in the morning. Anything that needs you will be waiting as a question.",
        },
        {
          q: "Does Claude Code keep running when I close my laptop?",
          a: "A local session doesn't: it needs the computer on and the claude process running, and a Remote Control session ends when its terminal closes. A cloud session does keep running, and you can check on it from the Claude app.",
        },
        {
          q: "Is there an unattended mode in Claude Code?",
          a: "Not under that name. Unattended runs combine a permission mode that doesn't ask (auto mode, or `bypassPermissions` in an isolated container) with headless mode, `claude -p`, or a cloud session.",
        },
        {
          q: "Will running Claude Code all night hit my usage limit?",
          a: "It can. All Claude plans share a 5-hour window and a weekly limit between chat and Claude Code; Ultra drops the 5-hour limit for verified accounts. Spread work across windows with a heartbeat or a schedule instead of one long burst.",
        },
        {
          q: "Is it safe to let Claude Code run unattended?",
          a: "Use auto mode rather than `bypassPermissions` on your own machine, work in a repository where every change goes through review, and keep production credentials out of reach. Cloud sessions run in isolated VMs with limited network access by default.",
        },
      ],
    },
    cta: {
      title: "Give Claude Code a night shift.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (cloud sessions, scheduled tasks, Remote Control) on November 8, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
