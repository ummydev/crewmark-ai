import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-long-running-tasks, for "codex long running tasks", "codex long running agents", "codex cli long running
// tasks", "run codex overnight", "can codex run overnight", "codex work overnight", "codex run in background", "codex cli
// run in background", "codex unattended" (Google autocomplete, 2026-11-08). The Codex twin of
// /blog/run-claude-code-24-7. Facts come from OpenAI's docs at learn.chatgpt.com/docs (long-running-work, cloud,
// non-interactive-mode, mobile, automations), checked 2026-11-08, and from /blog/claude-code-vs-codex (usage limits,
// checked 2026-11-06). Crewmark's behaviour comes from the code: cli/deliver.go queues the heartbeat into the Codex
// conversation with `codex queue --resume`; intervals in src/lib/types.ts; hours past midnight in cli/daemon.go.
// /proactive-codex owns "codex scheduled tasks", "codex cron" and "codex automations"; this post links there.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# Interactive: plan the outcome, then hand Codex a goal it checks itself
/plan
/goal all tests in test/auth pass and the lint step is clean

# Headless, from a script or cron: let it edit files in the workspace
codex exec --sandbox workspace-write "Work through TODO.md in order"

# Next morning, or on the next cron run: continue the same session
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const codexLongRunningTasks: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex Long-Running Tasks: Run Codex Overnight",
      description:
        "How to keep OpenAI Codex working for hours or overnight: /goal and /plan, cloud tasks, codex exec resume, keeping the Mac awake, checking in from your phone, usage limits and what stops it.",
    },
    breadcrumb: "Codex long-running tasks",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-08" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex long-running tasks: how to run Codex overnight or in the background",
      lead: "Codex can work on one task for hours, and it can keep going while you sleep, if four things are taken care of: a goal it can check itself, a computer that stays awake (or a task in the cloud), approvals that don't wait for you, and enough room in your plan. This guide covers the ways to run long Codex tasks, from Goal mode to cloud tasks and `codex exec resume`, what each can't do, and how to give Codex a standing night shift.",
      cta: "Get started",
      secondary: "Run it overnight",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Ways to keep Codex running",
        text: [
          "Some keep one chat going, so Codex keeps its context; others start fresh each time.",
        ],
        headers: ["Option", "Computer can sleep", "Same chat", "Where it stops", "Best for"],
        rows: [
          ["Goal mode (`/goal`)", "No, for local work", "Yes", "When the goal is met, or it needs a decision", "One task with a clear finish line"],
          ["Codex Cloud task", "Yes", "Yes", "When the task is done; you review and open a pull request", "Handing off a task before bed"],
          ["Scheduled task in a chat", "No, for local files: computer on, app running", "Yes", "Runs on its schedule: minutes, daily or weekly", "Checking in on the same work at intervals"],
          ["`codex exec` from cron", "No", "Yes, with `codex exec resume`", "Your cron rhythm; you wire it up yourself", "Scripts and CI"],
          ["Crewmark heartbeat", "No", "Yes", "Working hours you set, even past midnight", "A standing job taken from a board, issue by issue"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to run Codex overnight",
        steps: [
          {
            title: "Give it a goal it can check",
            text: "In the desktop app, the CLI or the IDE extension, `/goal` starts Goal mode: the goal text is both the first prompt and the finish line. If you aren't sure what done looks like, `/plan` asks you questions and turns the outcome into a goal with measurable criteria. Include a check, like a test suite passing.",
            code: commands,
          },
          {
            title: "Keep the computer awake, or send it to the cloud",
            text: "For local work on a Mac, turn on “Prevent sleep while running” in the desktop app. A Codex Cloud task runs in its own workspace and keeps working while your computer is asleep; start one by choosing Work in > Cloud and an environment.",
          },
          {
            title: "Set approvals so it doesn't stop at 2am",
            text: "A goal keeps the same sandbox and approval policy, and pauses when it needs a decision. Let it edit the workspace with `--sandbox workspace-write`, or use “Approve for me” so a reviewer handles routine requests. `--full-auto` is no longer supported, and `danger-full-access` belongs only in an isolated runner or container.",
          },
          {
            title: "Plan for usage limits",
            text: "Codex shares your ChatGPT plan's allowance: a rolling 5-hour window plus weekly limits, and cloud tasks draw from the same pool. ChatGPT Pro currently has no 5-hour limit; weekly limits may apply. Credits or an API key let local work keep going. See [Claude Code vs Codex](/blog/claude-code-vs-codex) for the numbers.",
          },
          {
            title: "Check in from your phone",
            text: "In the ChatGPT app you can follow a task, approve commands and review diffs, for cloud tasks and for a Mac or Windows PC you've connected under Settings > Connections. The connected computer has to stay awake and online. See [Codex remote control](/blog/codex-remote-control).",
          },
        ],
        source: { label: "Source: OpenAI's Codex docs on long-running work", href: docs },
      },
      {
        kind: "text",
        id: "stops",
        title: "What stops a long Codex task",
        points: [
          "A decision only you can make. Goal mode pauses instead of widening its own access, so check approvals before you leave.",
          "Sleep or a lost connection on local work. OpenAI suggests pausing the goal before you expect to lose connectivity and resuming it later.",
          "The usage limit, until the window resets or you add credits.",
          "Two chats editing the same files. Give parallel chats their own git worktrees.",
          "Running out of work. Once the goal is met it stops, which is what you want; for a list of tasks, keep them in a file it works through.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Codex a night shift",
        text: [
          "A long task ends; a job doesn't. Crewmark turns a Codex conversation into an AI employee with working hours and a heartbeat, so it keeps taking the next issue from a board without you queuing it.",
        ],
        steps: [
          {
            title: "Set the working hours",
            text: "Working hours can run past midnight, so a night shift such as 22:00 to 07:00 works, weekdays only or every day. Outside its hours the employee sleeps and doesn't touch your plan.",
          },
          {
            title: "Pick the heartbeat",
            text: "Every 15, 30, 60, 120 or 240 minutes during its shift, the crewmark CLI queues a message into the same Codex conversation with `codex queue --resume` and starts it, so the employee picks up its next issue. Your computer has to stay on.",
          },
          {
            title: "Read the board in the morning",
            text: "Each issue has its comments and activity log, and anything that needs you arrives as a message the employee waits on. See [how to make Codex proactive](/proactive-codex) and [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Run Codex overnight" },
    mid: {
      title: "Want Codex to work the night shift every night?",
      text: "Crewmark wakes your Codex on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Codex run overnight?",
          a: "Yes. Give it a goal with `/goal`, keep the Mac awake with “Prevent sleep while running” (or use a Codex Cloud task, which keeps working while your computer sleeps), set approvals so it doesn't wait on you, and review the result in the morning.",
        },
        {
          q: "How do I run Codex in the background?",
          a: "Run `codex exec` without the interactive interface, from a script, cron or CI, and continue the same session later with `codex exec resume --last`. Or start a Codex Cloud task from the web or desktop app and close the window.",
        },
        {
          q: "What is Goal mode in Codex?",
          a: "Goal mode, started with `/goal`, keeps Codex working toward a goal you write; the goal text is both the first prompt and the completion criteria. You can pause, resume, edit or clear it from the progress row in the desktop app.",
        },
        {
          q: "Does Codex keep working when my computer is asleep?",
          a: "Cloud tasks do. Local work needs the computer awake, which the desktop app's “Prevent sleep while running” setting handles on a Mac; a connected computer you control from your phone also has to stay awake and online.",
        },
        {
          q: "Will a long Codex run hit my usage limit?",
          a: "It can. Codex uses your ChatGPT plan's 5-hour window and weekly limits, and cloud tasks draw from the same allowance. Spread work across windows with a schedule or a heartbeat rather than one long burst.",
        },
        {
          q: "Is it safe to run Codex unattended?",
          a: "Keep `--sandbox workspace-write` or “Approve for me” on your own machine, use `danger-full-access` only in an isolated runner or container, and work in a repository where changes go through review.",
        },
      ],
    },
    cta: {
      title: "Give Codex a night shift.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against OpenAI's Codex docs (long-running work, Codex Cloud, non-interactive mode, mobile, scheduled tasks) on November 8, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI. Codex and ChatGPT are trademarks of OpenAI.",
  },
};
