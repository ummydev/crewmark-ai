import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";
import { proactiveCodexTranslations } from "./i18n";

// Copy for /proactive-codex: how to make Codex (and ChatGPT) start work on their own, for "proactive codex", "codex
// automations", "codex scheduled tasks", "codex cron" and "chatgpt proactive" searches (docs/seo/keywords.md).
// Written in every language the site has: English and Chinese here, the rest in content/i18n/. Facts come from OpenAI's Codex docs, which moved from developers.openai.com/codex to
// learn.chatgpt.com/docs (scheduled tasks, non-interactive mode, permission modes, GitHub Action, hooks). Plan limits
// aren't stated there, so the copy doesn't give any. Check again when editing and update `checked`.

export const PROACTIVE_CODEX_LOCALES = guideLocales["/proactive-codex"];
export type ProactiveCodexLocale = (typeof PROACTIVE_CODEX_LOCALES)[number];

const docs = "https://learn.chatgpt.com/docs/automations";

const cron =
  '# crontab -e: every weekday at 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1';

export const proactiveCodex: Record<ProactiveCodexLocale, GuideCopy> = {
  ...proactiveCodexTranslations,
  en: {
    meta: {
      title: "How to Make Codex Proactive: Scheduled Tasks, Cron and Heartbeats | Crewmark",
      description:
        "Make Codex and ChatGPT act without waiting for you: scheduled tasks (formerly Automations), codex exec with cron, the GitHub Action, and a heartbeat for a standing job.",
    },
    breadcrumb: "Proactive Codex",
    hero: {
      kicker: "Proactive Codex",
      title: "How to make Codex proactive",
      lead: "A proactive Codex agent doesn't sit waiting in a chat. It handles routine approvals itself, runs on a schedule, reacts to a pull request or a Slack message, and reports back. OpenAI ships a piece for each of these, and ChatGPT shares some of them. This guide shows how to set them up, what each can't do, and how to give Codex a standing job instead of a one-off prompt. What none of them give you is a heartbeat: waking the same conversation on a rhythm to take its next task. We cover the closest built-in option and how Crewmark adds one.",
      cta: "Get early access",
      secondary: "Jump to the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What “proactive” means for Codex",
        text: [
          "Out of the box Codex answers when you ask. A proactive setup needs three things, and they live in different parts of the product:",
        ],
        points: [
          "It doesn't stop for every approval: a permission mode that lets routine actions through.",
          "It starts on its own: a scheduled task, an event trigger or a cron job that begins work without you.",
          "It knows what to do next: a backlog and a goal, so every run has useful work.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Step by step: make Codex proactive",
        steps: [
          {
            title: "Choose a permission mode that doesn't stop for everything",
            text: "In the CLI, type `/permissions`. “Approve for me” only asks about actions detected as potentially unsafe, which suits work you aren't watching. “Full access” removes the limits on files and the internet; keep it for isolated machines. If an older guide tells you to use `--full-auto`, that flag is no longer supported: use `--sandbox workspace-write` instead.",
            code: "/permissions",
          },
          {
            title: "Create a scheduled task (formerly Automations)",
            text: "What used to be called Codex Automations is now Scheduled tasks. Ask for one in a Codex chat: say what the work is, when it should run, and whether results come back to the same chat. Tasks can run every few minutes, daily or weekly, and you manage them in the Scheduled view in the sidebar. A task that works on local files needs the computer on and the app running; in a Git repository it can work in a separate background worktree. The Codex CLI doesn't manage scheduled tasks.",
            code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
          },
          {
            title: "Trigger tasks from events",
            text: "Instead of a time, a task can start when something happens: a new Gmail message, a Slack message in channels you choose, or activity on a GitHub pull request. Event triggers are set up from ChatGPT on the web or mobile, on eligible plans, and a task uses either events or a schedule, not both.",
          },
          {
            title: "Run Codex from cron with codex exec",
            text: "`codex exec` runs Codex without the interactive interface: progress goes to stderr and only the final message to stdout, so it fits scripts and scheduled jobs. It's read-only unless you pass `--sandbox workspace-write`. OpenAI's docs list scheduled jobs as a use but don't give a cron example; this one is ours.",
            code: cron,
          },
          {
            title: "Put Codex in your GitHub workflow",
            text: "The `openai/codex-action` GitHub Action runs Codex inside a workflow, and you choose its triggers. On pull requests, comment `@codex review` for a review, or ask `@codex` to fix CI failures. In Linear you can assign an issue to Codex.",
            code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
          },
          {
            title: "Use hooks to react inside a session",
            text: "Codex hooks run your commands at points such as session start, before and after a tool call, or when a turn stops. They react while Codex is working; they don't start it. To start work, use a scheduled task or an event trigger.",
          },
        ],
        source: { label: "Source: OpenAI's Codex documentation on scheduled tasks", href: docs },
      },
      {
        kind: "steps",
        id: "heartbeat",
        kicker: "The missing piece",
        title: "Add a heartbeat: wake the same conversation for its next task",
        text: [
          "A heartbeat is a short, regular nudge into the same Codex conversation, such as every 30 minutes during working hours, that says: check your work, take the next task. A scheduled task repeats one prompt; a heartbeat keeps one conversation going, so Codex remembers what it did last time and picks the next item off a queue. That's the difference between a job that repeats and an employee that keeps working.",
        ],
        steps: [
          {
            title: "The closest built-in option",
            text: "A Codex scheduled task can send its results back to the same chat, so you can write its prompt as a heartbeat: “every 30 minutes, check TODO.md, take the next unchecked task and tick it off”. You still maintain the queue file yourself, and the schedule doesn't know about working hours or other agents.",
          },
          {
            title: "With Crewmark: a heartbeat built in",
            text: "Crewmark's daemon queues the heartbeat into the employee's own Codex conversation with `codex queue --resume` every 15, 30 or 60 minutes during its working hours, and the board is the queue: each heartbeat, the employee takes its next issue and reports on it. Details are [below](#crewmark).",
          },
        ],
      },
      {
        kind: "text",
        id: "chatgpt",
        title: "And ChatGPT?",
        text: [
          "ChatGPT can reach out first, too. Scheduled tasks in ChatGPT send you reminders, recurring briefings and the results of things it monitors, and you'll find them on the Scheduled page in the sidebar. How many you can have and how often they run depends on your plan. ChatGPT Pulse, which sent a proactive daily update, was retired in June 2026; OpenAI points people to a scheduled task for a daily briefing instead.",
          "The difference from Codex: a ChatGPT task works with what ChatGPT can reach, not with your codebase. For work in a repository, use Codex scheduled tasks or `codex exec`.",
        ],
      },
      {
        kind: "table",
        title: "Which option fits",
        headers: ["Option", "Starts work by itself", "Computer has to be on", "Best for"],
        rows: [
          ["Approve for me", "No, it stops less once you ask", "Yes", "Fewer interruptions during a task"],
          ["Scheduled task on local files", "Yes, on a schedule", "Yes, with the app running", "Daily work in a repository"],
          ["Scheduled task on the web", "Yes, on a schedule", "No", "Work that doesn't need your files"],
          ["Event-triggered task", "Yes, on Gmail, Slack or GitHub activity", "No", "Reacting to messages and PRs"],
          ["codex exec + cron", "Yes, on your cron schedule", "Yes", "Scripts you control end to end"],
          ["Codex GitHub Action", "Yes, on workflow triggers", "No", "Reviews and CI fixes"],
          ["ChatGPT scheduled task", "Yes, on a schedule", "No", "Reminders and briefings"],
          ["Scheduled task as a heartbeat", "Yes, on a schedule, results in the same chat", "Yes, for local files", "One agent working through a TODO file"],
          ["Crewmark heartbeat", "Yes, every 15–60 min in working hours, in the same conversation", "Yes", "Agents with a backlog, goals and working hours"],
        ],
      },
      {
        kind: "text",
        title: "What these features still leave to you",
        text: ["Every option above starts a run. None of them decides what Codex should be working on this week:"],
        points: [
          "A scheduled task repeats one prompt. It doesn't pull the next item off a backlog or know what the last run left unfinished.",
          "There's no shared board where you hand Codex work and see what's in progress, done or blocked.",
          "There are no working hours or targets, so you can't ask it to move a number by the end of the month.",
          "Running Codex next to Claude Code means two separate sets of prompts, schedules and places to look.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Codex a standing job",
        text: [
          "Crewmark turns a Codex conversation into an AI employee with a role, a goal, working hours and a heartbeat, and gives it work through the same board as your Claude Code employees. It runs in your real Codex on the ChatGPT plan you already pay for.",
        ],
        steps: [
          {
            title: "Hire an employee and connect its Codex conversation",
            text: "Pick a role and run the setup command Crewmark gives you in Codex. That conversation becomes the employee, so it remembers the work between wake-ups.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "The Crewmark daemon, a small background program on your computer, queues the employee's heartbeat prompt into that conversation with `codex queue --resume` every 15, 30 or 60 minutes during its hours, and leaves it alone outside them.",
          },
          {
            title: "Assign issues on the board",
            text: "Assigning an issue or commenting on one sends the news into the same conversation, so Codex picks up new work on its own instead of waiting for you to paste it in.",
          },
          {
            title: "Measure it on a number",
            text: "Give each employee a KPI. It plans its issues toward that number, moves them across the board, comments on progress and messages you when it needs a decision.",
          },
        ],
      },
      {
        kind: "text",
        title: "Use them together",
        text: [
          "Keep Codex's own scheduled tasks for small recurring chores and use Crewmark for the ongoing job: set the employee's conversation to “Approve for me” so each heartbeat gets work done, and let pull request reviews keep running through `@codex review`. On Claude Code instead? See [how to make Claude Code proactive](/proactive-claude-code).",
        ],
      },
    ],
    howTo: { section: "how-to", name: "Make Codex proactive" },
    mid: {
      title: "Give Codex a standing job, not a scheduled prompt",
      text: "Crewmark wakes your Codex conversation on a heartbeat during working hours and hands it the next issue from a board.",
      button: "Get early access",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is a heartbeat for Codex?",
          a: "A regular nudge into the same Codex conversation, for example every 30 minutes during working hours, telling it to check its work and take the next task. Because it continues one conversation, Codex remembers earlier work. A scheduled task that reports back to the same chat comes closest; Crewmark builds a heartbeat in, with working hours and a board as the queue.",
        },
        {
          q: "What happened to Codex Automations?",
          a: "They're now called Scheduled tasks. You create them by asking in a Codex chat and manage them in the Scheduled view of the app; the docs page still lives at a URL ending in /automations.",
        },
        {
          q: "Does codex --full-auto still work?",
          a: "No, `--full-auto` is no longer supported. Use `--sandbox workspace-write` to let Codex edit files, or the “Approve for me” permission mode so it only asks about actions that look unsafe.",
        },
        {
          q: "How do I run Codex on a schedule or with cron?",
          a: "In the Codex app, ask for a scheduled task. From your own scheduler, call `codex exec` from a cron job, and pass `--sandbox workspace-write` if it needs to change files. In a repository you can also run the Codex GitHub Action from a workflow.",
        },
        {
          q: "Can ChatGPT message me proactively?",
          a: "Yes, through scheduled tasks and event-triggered tasks. ChatGPT Pulse, the proactive daily update, was retired in June 2026, and OpenAI suggests a scheduled task for a daily briefing instead.",
        },
        {
          q: "Does Codex keep working when my computer is off?",
          a: "Web scheduled tasks, event triggers, Codex cloud tasks and the GitHub Action do. Anything that works on your local files, including local scheduled tasks, cron jobs and Crewmark, needs your computer on.",
        },
        {
          q: "Does Crewmark cost extra tokens?",
          a: "No. Employees run inside your own Codex on the ChatGPT plan you already have, so there's no second bill for tokens.",
        },
      ],
    },
    cta: {
      title: "Make Codex your first AI employee",
      text: "Give it a role, a goal, working hours and a heartbeat, then assign its first issue.",
      button: "Get early access",
    },
    checked: "Checked against OpenAI's Codex documentation on November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI. Codex and ChatGPT are trademarks of OpenAI.",
  },
  zh: {
    meta: {
      title: "Codex 定时任务与自动化：让 Codex 和 ChatGPT 主动干活 | Crewmark",
      description:
        "让 Codex 和 ChatGPT 不等你开口就开工：定时任务（原 Automations）、codex exec 配 cron、GitHub Action，以及用心跳（heartbeat）给它一份长期的工作。",
    },
    breadcrumb: "主动干活的 Codex",
    hero: {
      kicker: "Codex 定时任务",
      title: "怎么让 Codex 主动干活",
      lead: "主动的 Codex 不会在对话框里干等：常规的确认自己处理，按时间表运行，遇到 PR 或 Slack 消息就响应，做完向你汇报。OpenAI 对这几件事各有一个功能，其中一些 ChatGPT 也能用。这篇教程讲怎么设置、每个功能做不到什么，以及怎么给 Codex 一份长期的工作，而不是一次性的提示词。它们都缺一个心跳：按固定节奏唤醒同一个对话，让它去领下一个任务。我们会讲最接近的内置做法，以及 Crewmark 怎么补上。",
      cta: "申请抢先体验",
      secondary: "直接看步骤",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "“主动”对 Codex 意味着什么",
        text: ["默认的 Codex 是你问它才答。要让它主动起来需要三样东西，分散在产品的不同地方："],
        points: [
          "不用事事等确认：选一个放行常规操作的权限模式。",
          "自己开始干活：用定时任务、事件触发或 cron 让它不用你开口就开工。",
          "知道下一步做什么：有待办和目标，每次运行都有有用的事可做。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "分步骤：让 Codex 主动干活",
        steps: [
          {
            title: "选一个不会事事都停下来的权限模式",
            text: "在 CLI 里输入 `/permissions`。“Approve for me”只在操作看起来可能不安全时才问你，适合你不盯着的工作。“Full access”放开所有文件和网络限制，只适合隔离的机器。老教程里的 `--full-auto` 已经不再支持，改用 `--sandbox workspace-write`。",
            code: "/permissions",
          },
          {
            title: "创建 Codex 定时任务（原 Automations）",
            text: "原来的 Codex Automations 现在叫 Scheduled tasks（定时任务）。在 Codex 对话里直接提：要做什么、什么时候跑、结果回到这个对话还是新开一个。可以每隔几分钟、每天或每周运行，在侧边栏的 Scheduled 页面管理。用到本地文件的任务需要电脑开着、应用在运行；在 Git 仓库里可以放到单独的后台 worktree 里做。Codex CLI 不能管理定时任务。",
            code: "每个工作日早上 9 点，检查这个仓库有没有失败的测试，\n能修的在后台 worktree 里修好，\n在这个对话里发一份总结。",
          },
          {
            title: "用事件触发任务",
            text: "任务也可以不按时间，而是在有事发生时启动：收到新的 Gmail 邮件、指定 Slack 频道里有新消息、GitHub PR 有动静。事件触发要在 ChatGPT 网页版或手机端设置，需要符合条件的订阅；一个任务只能用事件或时间表其中一种。",
          },
          {
            title: "用 codex exec 配 cron 定时运行",
            text: "`codex exec` 不打开交互界面直接运行 Codex：进度输出到 stderr，只有最终结果输出到 stdout，适合脚本和定时任务。不加 `--sandbox workspace-write` 时它是只读的。OpenAI 文档把定时任务列为用途之一，但没给 cron 示例，下面这个是我们写的。",
            code: cron,
          },
          {
            title: "把 Codex 放进 GitHub 工作流",
            text: "GitHub Action `openai/codex-action` 在工作流里运行 Codex，触发条件由你决定。在 PR 下评论 `@codex review` 让它审查代码，或者让 `@codex` 修 CI 失败。在 Linear 里可以把 issue 直接分配给 Codex。",
            code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
          },
          {
            title: "用 hooks 在会话里响应事件",
            text: "Codex 的 hooks 在会话开始、调用工具前后、一轮结束等时刻运行你的命令。它们在 Codex 干活时做出反应，但不会启动 Codex。要让它开工，用定时任务或事件触发。",
          },
        ],
        source: { label: "来源：OpenAI 的 Codex 定时任务文档（英文）", href: docs },
      },
      {
        kind: "steps",
        id: "heartbeat",
        kicker: "缺的那一块",
        title: "加一个心跳：按节奏唤醒同一个对话去领下一个任务",
        text: [
          "心跳（heartbeat）是定期往同一个 Codex 对话里发的一句提醒，比如工作时间内每 30 分钟一次：看看你的工作，领下一个任务。定时任务是重复同一句提示词；心跳则一直用同一个对话，所以 Codex 记得上次做到哪，会从队列里拿下一项。这就是“重复执行的任务”和“持续干活的员工”的区别。",
        ],
        steps: [
          {
            title: "最接近的内置做法",
            text: "Codex 定时任务可以把结果发回同一个对话，所以可以把它的提示词写成心跳：“每 30 分钟看一下 TODO.md，领下一个没勾的任务，做完勾掉”。队列文件还是要自己维护，定时任务也不知道工作时间和其他 agent。",
          },
          {
            title: "用 Crewmark：自带心跳",
            text: "Crewmark 的 daemon 在工作时间内每 15、30 或 60 分钟用 `codex queue --resume` 把心跳排进员工自己的 Codex 对话；看板就是队列，每次心跳员工领下一个 issue 并汇报进度。详见[下文](#crewmark)。",
          },
        ],
      },
      {
        kind: "text",
        id: "chatgpt",
        title: "ChatGPT 呢？",
        text: [
          "ChatGPT 也能主动找你。ChatGPT 的定时任务可以给你发提醒、定期简报和它监控到的结果，在侧边栏的 Scheduled 页面管理。能建几个、多久跑一次取决于你的订阅。主动推送每日简报的 ChatGPT Pulse 已在 2026 年 6 月停用，OpenAI 建议改用定时任务来做每日简报。",
          "和 Codex 的区别：ChatGPT 的任务只能用 ChatGPT 能接触到的东西，碰不到你的代码库。要在仓库里干活，用 Codex 定时任务或 `codex exec`。",
        ],
      },
      {
        kind: "table",
        title: "该选哪一个",
        headers: ["方式", "会不会自己开工", "电脑要不要开着", "适合"],
        rows: [
          ["Approve for me", "不会，但你交代后很少停下", "要", "做任务时少被打断"],
          ["本地文件的定时任务", "会，按时间表", "要，应用在运行", "每天在仓库里干活"],
          ["网页端定时任务", "会，按时间表", "不用", "不需要本地文件的工作"],
          ["事件触发的任务", "会，Gmail、Slack 或 GitHub 有动静时", "不用", "响应消息和 PR"],
          ["codex exec + cron", "会，按你的 cron", "要", "完全由你掌控的脚本"],
          ["Codex GitHub Action", "会，按工作流触发", "不用", "代码审查和修 CI"],
          ["ChatGPT 定时任务", "会，按时间表", "不用", "提醒和简报"],
          ["把定时任务当心跳", "会，按时间表，结果发回同一个对话", "本地文件要", "一个 agent 按 TODO 文件干活"],
          ["Crewmark 心跳", "会，工作时间内每 15–60 分钟，在同一个对话里", "要", "有任务清单、目标和工作时间的 agent"],
        ],
      },
      {
        kind: "text",
        title: "这些功能还留给你自己的事",
        text: ["上面每种方式都能启动一次运行，但没有一个会决定 Codex 这周该忙什么："],
        points: [
          "定时任务每次都重复同一句提示词，不会从待办里接下一件事，也不知道上次哪些没做完。",
          "没有一块共享的看板让你给 Codex 派活，看哪些在做、做完了、卡住了。",
          "没有工作时间，也没有目标，没法让它在月底前把某个数字提上去。",
          "Codex 和 Claude Code 一起用时，要维护两套提示词、两套时间表，看两个地方。",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "用 Crewmark",
        title: "给 Codex 一份长期的工作",
        text: [
          "Crewmark 把一个 Codex 对话变成有岗位、有目标、有工作时间和心跳的 AI 员工，和你的 Claude Code 员工用同一块看板派活。它跑在你真正的 Codex 里，用的是你已经付费的 ChatGPT 订阅。",
        ],
        steps: [
          {
            title: "雇一个员工，连上它的 Codex 对话",
            text: "选一个岗位，在 Codex 里运行 Crewmark 给你的设置命令。这个对话就成了这名员工，两次醒来之间它记得做过的事。",
          },
          {
            title: "设定工作时间和心跳",
            text: "你电脑上的后台小程序 Crewmark daemon 在工作时间内每 15、30 或 60 分钟，用 `codex queue --resume` 把员工的心跳提示词排进这个对话；下班时间不打扰它。",
          },
          {
            title: "在看板上分配 issue",
            text: "你分配 issue 或在 issue 下评论时，消息会送进同一个对话，Codex 自己接新活，不用你复制粘贴过去。",
          },
          {
            title: "用数字衡量它",
            text: "给每个员工一个 KPI。它围绕这个数字安排 issue，在看板上推进，汇报进度，需要你拍板时给你发私信。",
          },
        ],
      },
      {
        kind: "text",
        title: "一起用效果最好",
        text: [
          "小的重复杂事交给 Codex 自己的定时任务，持续的工作交给 Crewmark：把员工对话的权限设成“Approve for me”，让每次心跳都真正干成事；PR 审查继续用 `@codex review`。用的是 Claude Code？看 [怎么让 Claude Code 主动干活](/proactive-claude-code)。",
        ],
      },
    ],
    howTo: { section: "how-to", name: "让 Codex 主动干活" },
    mid: {
      title: "给 Codex 一份长期工作，而不只是定时提示词",
      text: "Crewmark 在工作时间内按心跳唤醒你的 Codex 对话，从看板上给它派下一个任务。",
      button: "申请抢先体验",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "Codex 的心跳是什么？",
          a: "定期往同一个 Codex 对话里发的提醒，比如工作时间内每 30 分钟一次，让它看看手上的工作、领下一个任务。因为是在同一个对话里继续，Codex 记得之前做过什么。最接近的内置做法是让定时任务把结果发回同一个对话；Crewmark 内置了心跳，还带工作时间和作为队列的看板。",
        },
        {
          q: "Codex Automations 去哪了？",
          a: "改名叫 Scheduled tasks（定时任务）了。在 Codex 对话里直接提出来创建，在应用的 Scheduled 页面管理；文档地址仍以 /automations 结尾。",
        },
        {
          q: "codex --full-auto 还能用吗？",
          a: "不能，`--full-auto` 已经不再支持。要让 Codex 改文件用 `--sandbox workspace-write`，或者用“Approve for me”权限模式，只在操作看起来不安全时才问你。",
        },
        {
          q: "Codex 怎么设置定时任务或 cron？",
          a: "在 Codex 应用里直接让它建一个定时任务；用自己的调度器的话，在 cron 里调用 `codex exec`，需要改文件就加 `--sandbox workspace-write`。代码仓库还可以在工作流里用 Codex 的 GitHub Action。",
        },
        {
          q: "ChatGPT 能主动给我发消息吗？",
          a: "能，通过定时任务和事件触发的任务。主动推送每日简报的 ChatGPT Pulse 已在 2026 年 6 月停用，OpenAI 建议改用定时任务做每日简报。",
        },
        {
          q: "电脑关机时 Codex 还能干活吗？",
          a: "网页端定时任务、事件触发、Codex 云端任务和 GitHub Action 可以。用到本地文件的方式，包括本地定时任务、cron 和 Crewmark，都需要电脑开着。",
        },
        {
          q: "用 Crewmark 要额外付 token 费吗？",
          a: "不用。员工跑在你自己的 Codex 里，用的是你已有的 ChatGPT 订阅，没有第二份 token 账单。",
        },
      ],
    },
    cta: {
      title: "让 Codex 成为你的第一个 AI 员工",
      text: "给它一个岗位、一个目标、工作时间和心跳，然后派给它第一个 issue。",
      button: "申请抢先体验",
    },
    checked: "已于 2026 年 11 月 2 日对照 OpenAI 的 Codex 官方文档核对。",
    disclaimer: "Crewmark 是独立产品，与 OpenAI 无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
  },
};
