import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";
import { proactiveClaudeCodeTranslations } from "./i18n";

// Copy for /proactive-claude-code: how to make Claude Code start work on its own, for "proactive claude code",
// "claude code proactive mode", "claude code scheduled tasks" and "claude code loop" searches (docs/seo/keywords.md).
// Written in every language the site has: English and Chinese here, the rest in content/i18n/. Facts about Claude Code come from Anthropic's docs at code.claude.com/docs (output styles,
// permission modes, goal, scheduled tasks, desktop scheduled tasks, routines, github actions, channels); check them
// again when editing and update `checked`.

export const PROACTIVE_CLAUDE_CODE_LOCALES = guideLocales["/proactive-claude-code"];
export type ProactiveClaudeCodeLocale = (typeof PROACTIVE_CLAUDE_CODE_LOCALES)[number];

const docs = "https://code.claude.com/docs/en/scheduled-tasks";

export const proactiveClaudeCode: Record<ProactiveClaudeCodeLocale, GuideCopy> = {
  ...proactiveClaudeCodeTranslations,
  en: {
    meta: {
      title: "Proactive Claude Code: Scheduled Tasks, /loop | Crewmark AI",
      description:
        "Make Claude Code start work without waiting for you: the Proactive output style, auto mode, /goal, /loop, scheduled tasks, and a heartbeat that gives it a standing job.",
    },
    breadcrumb: "Proactive Claude Code",
    hero: {
      kicker: "Proactive Claude Code",
      title: "How to make Claude Code proactive",
      lead: "A proactive Claude Code agent doesn't wait for your next message. It makes routine decisions itself, keeps going until the job is done, wakes up on a schedule and reacts when something happens. Claude Code has a built-in piece for each of these. This guide shows how to turn them on, where each one stops, and how to give Claude Code a standing job instead of a one-off prompt. The piece the built-in features leave out is a heartbeat: waking the same session on a rhythm to take its next task. We show how to wire one up by hand, and how Crewmark does it for you.",
      cta: "Get started",
      secondary: "Jump to the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What “proactive” means for Claude Code",
        text: [
          "By default Claude Code is reactive: you type, it works, it stops and waits. Making it proactive takes three separate things, and most guides only cover one of them.",
        ],
        points: [
          "It acts without asking about every step: an output style and a permission mode that let it make routine decisions.",
          "It starts work on its own: a loop, a schedule or an event that begins a turn without you typing.",
          "It knows what to work on next: a goal or a queue of work, so each wake-up has something useful to do.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Step by step: make Claude Code proactive",
        steps: [
          {
            title: "Turn on the Proactive output style",
            text: "This is what people usually mean by “Claude Code proactive mode”. It isn't a mode but a built-in output style: Claude starts implementing as soon as you give it a task, makes reasonable assumptions on routine decisions instead of asking, and skips planning unless you ask for a plan. It still checks with you before deleting data or touching shared or production systems, and it doesn't change your permission prompts. You can also pick it under Output style in `/config`.",
            code: "/output-style Proactive",
          },
          {
            title: "Pick a permission mode for unattended work",
            text: "An agent that stops at every permission prompt isn't proactive. Auto mode runs actions with background safety checks instead of asking, and `acceptEdits` lets file edits through while still asking about other commands. Keep `bypassPermissions`, which skips every check, for isolated containers and VMs.",
            code: "claude --permission-mode auto",
          },
          {
            title: "Keep it going until the job is done with /goal",
            text: "`/goal` takes a condition. After each turn a small model checks whether it's met, and if it isn't, Claude starts another turn by itself. The goal clears once it's met. Write a condition you could check yourself, like a test suite passing.",
            code: "/goal all tests in test/auth pass and the lint step is clean",
          },
          {
            title: "Repeat work with /loop while the session is open",
            text: "`/loop` runs a prompt on an interval, or lets Claude choose the delay after each run when you leave the interval out. It lives in the current session: the session has to stay open, recurring loops expire after 7 days, and runs missed while it was busy aren't caught up.",
            code: "/loop 30m check CI on my open PRs and fix anything that failed",
          },
          {
            title: "Schedule it for when you're not at the keyboard",
            text: "Desktop scheduled tasks run a fresh session on your computer on a schedule, as long as the Claude desktop app is open and the computer is awake. Cloud scheduled tasks, created with `/schedule`, run on Anthropic's cloud so your computer can be off; they run at most hourly and need a Pro, Max, Ultra, Team or Enterprise plan. For repositories, the official GitHub Action can run Claude Code on a cron schedule.",
            code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
          },
          {
            title: "Let events wake it up",
            text: "Channels push events into a running session: a Telegram, Discord or iMessage message, a CI failure or a webhook, so Claude reacts without you opening the terminal. Hooks run your own commands at points in Claude's lifecycle, such as before a tool call or when a turn ends. Both need the session to be running.",
            code: "claude --channels plugin:telegram@claude-plugins-official",
          },
        ],
        source: { label: "Source: Anthropic's Claude Code documentation on scheduled tasks", href: docs },
      },
      {
        kind: "steps",
        id: "heartbeat",
        kicker: "The missing piece",
        title: "Add a heartbeat: wake the same session for its next task",
        text: [
          "A heartbeat is a short, regular nudge into the same Claude Code conversation, such as every 30 minutes during working hours, that says: check your work, take the next task. Unlike a scheduled task, which starts a fresh session with the same prompt each time, a heartbeat keeps one conversation going, so the agent remembers what it did last time and picks the next item off a queue. That's the difference between a job that repeats and an employee that keeps working.",
          "Claude Code has no heartbeat setting, but headless mode can resume a session, so you can wire one up by hand.",
        ],
        steps: [
          {
            title: "By hand: cron plus claude -p --resume",
            text: "Start one session, save its ID, and let cron resume it on a rhythm with a short heartbeat prompt. Keep the work queue in a file in the repo, such as TODO.md. This is our own example built from documented flags; Anthropic's docs don't describe a heartbeat setup.",
            code: "# Once: start the session and keep its ID\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e: every 30 minutes, 9:00–17:30 on weekdays\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
          },
          {
            title: "What the do-it-yourself version doesn't cover",
            text: "You manage the queue file and the cron times yourself, nothing stops it outside working hours unless you encode them in cron, a heartbeat that fires while you're using the session collides with you, and you can't see across several agents what each one is doing.",
          },
          {
            title: "With Crewmark: a heartbeat built in",
            text: "Crewmark's daemon sends the heartbeat into the employee's own conversation every 15, 30 or 60 minutes during its working hours, waits if the agent is busy, and the board is the queue: each heartbeat, the employee takes its next issue and reports on it. Details are [below](#crewmark).",
          },
        ],
      },
      {
        kind: "table",
        title: "Which option fits",
        headers: ["Option", "Starts work by itself", "Computer has to be on", "Best for"],
        rows: [
          ["Proactive output style", "No, it acts faster once you ask", "Yes", "Fewer questions during a task"],
          ["/goal", "Yes, the next turn, until the condition is met", "Yes", "Finishing one task without nudging"],
          ["/loop", "Yes, on an interval, for up to 7 days", "Yes, with the session open", "Watching a deploy, CI or a PR"],
          ["Desktop scheduled tasks", "Yes, on a schedule", "Yes, awake with the app open", "Daily jobs on local files"],
          ["Cloud scheduled tasks", "Yes, at most hourly", "No", "Jobs that only need a repository"],
          ["GitHub Actions", "Yes, on cron or GitHub events", "No", "Repository maintenance"],
          ["Channels", "Yes, when an event arrives", "Yes, with the session open", "Reacting to chat, CI and webhooks"],
          ["Heartbeat by hand (cron + `claude -p --resume`)", "Yes, on your cron rhythm, in the same session", "Yes", "One agent working through a TODO file"],
          ["Crewmark heartbeat", "Yes, every 15–60 min in working hours, in the same session", "Yes", "Agents with a backlog, goals and working hours"],
        ],
      },
      {
        kind: "text",
        title: "What these features still leave to you",
        text: [
          "Each feature starts a turn. None of them decides what the agent should be doing this week. In practice that leaves gaps:",
        ],
        points: [
          "A schedule repeats the same prompt. It doesn't pick up the next task from a backlog or remember what yesterday's run finished.",
          "There's no board where you hand Claude new work and see what it's doing, what it finished and where it's stuck.",
          "There are no working hours or targets: a loop runs until it expires, not until a number moves.",
          "With several agents, nothing coordinates them, so each one needs its own prompts and schedules.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Claude Code a standing job",
        text: [
          "Crewmark turns a Claude Code conversation into an AI employee with a role, a goal, working hours and a heartbeat, and gives it work through a board. It runs in your real Claude Code on the plan you already pay for.",
        ],
        steps: [
          {
            title: "Hire an employee and connect its conversation",
            text: "Pick a role, such as SEO specialist or software engineer, and run the setup command Crewmark gives you in Claude Code. That conversation becomes the employee, so it keeps its memory of the work between wake-ups.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "A small background program on your computer, the Crewmark daemon, sends the employee's heartbeat prompt into that same conversation every 15, 30 or 60 minutes during its hours, and leaves it alone outside them. A heartbeat that arrives while the agent is busy waits until it's idle.",
          },
          {
            title: "Assign issues on the board",
            text: "When you assign an issue or comment on one, the news arrives in the agent's conversation as a message. If the conversation is closed, Crewmark resumes it with `claude -p --resume` in auto mode, so the work still gets picked up.",
          },
          {
            title: "Measure it on a number",
            text: "Give each employee a KPI, such as Search Console clicks a month. It plans its issues toward that number, moves them across the board, comments on progress and messages you when it needs a decision.",
          },
        ],
      },
      {
        kind: "text",
        title: "Use them together",
        text: [
          "The built-in features and Crewmark stack. Turn on the Proactive output style and auto mode in the employee's conversation so each heartbeat gets real work done, use `/goal` inside an issue that has a clear finish line, and check in from your phone with [Claude Code Remote Control](/remote-claude-code). For one-off jobs that run without you, see [how to run Claude Code background agents and headless mode](/blog/claude-code-background-agents). Running Codex instead? See [how to make Codex proactive](/proactive-codex).",
        ],
      },
    ],
    howTo: { section: "how-to", name: "Make Claude Code proactive" },
    mid: {
      title: "Skip the cron job and the open session",
      text: "Crewmark wakes your Claude Code session on a heartbeat during working hours and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is a heartbeat for Claude Code?",
          a: "A regular nudge into the same Claude Code conversation, for example every 30 minutes during working hours, telling the agent to check its work and take the next task. Because it resumes one session rather than starting a new one, the agent remembers earlier work. You can wire one up with cron and `claude -p --resume`; Crewmark builds it in, with working hours and a board as the queue.",
        },
        {
          q: "Does Claude Code have a proactive mode?",
          a: "Not as a mode. Claude Code has a built-in Proactive output style, turned on with `/output-style Proactive`, which makes it act on routine decisions instead of asking. It doesn't change permission prompts; pair it with auto mode for that.",
        },
        {
          q: "How do I run Claude Code on a schedule?",
          a: "Use `/loop` while a session is open, Desktop scheduled tasks for jobs on your computer, `/schedule` for cloud scheduled tasks that run with your computer off, or the Claude Code GitHub Action with a cron trigger.",
        },
        {
          q: "Does /loop keep running after I close Claude Code?",
          a: "No. A loop belongs to its session, so it stops when the session ends, and recurring loops expire after 7 days. For something that outlives the session, use scheduled tasks or a Crewmark heartbeat.",
        },
        {
          q: "Can Claude Code work while my computer is off?",
          a: "Cloud scheduled tasks and GitHub Actions can, because they run on someone else's machines. Anything that uses your local files, including Desktop scheduled tasks, Channels and Crewmark, needs your computer on.",
        },
        {
          q: "Is it safe to let Claude Code run unattended?",
          a: "Use auto mode rather than `bypassPermissions`, give it a repository where every change goes through review, and keep production credentials out of reach. Crewmark adds working hours and a board, so you can see each change it made and why.",
        },
        {
          q: "Does Crewmark cost extra tokens?",
          a: "No. Employees run inside your own Claude Code on the subscription you already have, so there's no second bill for tokens.",
        },
      ],
    },
    cta: {
      title: "Make Claude Code your first AI employee",
      text: "Give it a role, a goal, working hours and a heartbeat, then assign its first issue.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's Claude Code documentation on November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
  zh: {
    meta: {
      title: "Claude Code 定时任务与 /loop：让它主动干活 | Crewmark AI",
      description:
        "让 Claude Code 不等你开口就开工：Proactive 输出风格、自动模式、/goal、/loop、Claude Code 定时任务，以及用心跳（heartbeat）给它一份长期的工作。",
    },
    breadcrumb: "主动干活的 Claude Code",
    hero: {
      kicker: "Claude Code 定时任务",
      title: "怎么让 Claude Code 主动干活",
      lead: "主动的 Claude Code 不会等你发下一条消息：常规决定自己拿主意，一直干到任务完成，按时间表醒来，有事发生就处理。Claude Code 对这几件事各有一个内置功能。这篇教程讲怎么开启它们、每个功能的边界在哪里，以及怎么给 Claude Code 一份长期的工作，而不是一次性的提示词。内置功能缺的一块是心跳：按固定节奏唤醒同一个会话，让它去领下一个任务。我们会讲怎么手动搭一个，以及 Crewmark 怎么替你做好。",
      cta: "开始使用",
      secondary: "直接看步骤",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "“主动”对 Claude Code 意味着什么",
        text: [
          "默认的 Claude Code 是被动的：你输入，它干活，干完就停下来等你。让它主动起来要做到三件事，大多数教程只讲了其中一件。",
        ],
        points: [
          "不用事事都问：用输出风格和权限模式，让它自己处理常规决定。",
          "自己开始干活：用循环、定时任务或事件触发，不用你输入就开始新的一轮。",
          "知道下一步做什么：有目标或待办队列，每次醒来都有有用的事可做。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "分步骤：让 Claude Code 主动干活",
        steps: [
          {
            title: "开启 Proactive 输出风格",
            text: "很多人搜的“Claude Code 主动模式”其实就是它。它不是一种模式，而是内置的输出风格：你一交代任务它就开始做，常规决定自己合理假设而不是反复问你，除非你要求，否则不先出计划。删除数据、改动共享或生产环境之前它仍会先问你，也不会改变权限提示。也可以在 `/config` 的 Output style 里选。",
            code: "/output-style Proactive",
          },
          {
            title: "为无人值守选一个权限模式",
            text: "每一步都停下来等权限确认的 agent 谈不上主动。自动模式（auto）用后台安全检查代替询问；`acceptEdits` 放行文件修改，其他命令仍会问你。跳过所有检查的 `bypassPermissions` 只适合隔离的容器和虚拟机。",
            code: "claude --permission-mode auto",
          },
          {
            title: "用 /goal 让它一直干到完成",
            text: "`/goal` 接受一个完成条件。每一轮结束后，一个小模型检查条件是否满足；没满足，Claude 就自己再开一轮，满足后目标自动清除。条件要写成你自己也能核对的样子，比如某组测试全部通过。",
            code: "/goal test/auth 下的测试全部通过，lint 没有报错",
          },
          {
            title: "/loop 怎么用：会话开着时重复干活",
            text: "`/loop` 按固定间隔重复执行一个提示词；不写间隔时，由 Claude 每次自己决定下次多久后再跑。它属于当前会话：会话必须一直开着，循环任务 7 天后过期，忙的时候错过的轮次不会补跑。",
            code: "/loop 30m 检查我开着的 PR 的 CI，失败了就修",
          },
          {
            title: "设置 Claude Code 定时任务，人不在也能跑",
            text: "桌面端定时任务（Desktop scheduled tasks）按时间表在你电脑上开一个新会话执行，前提是 Claude 桌面应用开着、电脑没有休眠。云端定时任务用 `/schedule` 创建，跑在 Anthropic 的云上，电脑可以关机；最短间隔一小时，需要 Pro、Max、Ultra、Team 或 Enterprise 订阅。代码仓库还可以用官方的 GitHub Action 按 cron 定时运行 Claude Code。",
            code: '/schedule 每个工作日早上 9 点，整理新的 GitHub issue 并打标签\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
          },
          {
            title: "让事件把它叫醒",
            text: "Channels 把事件推进正在运行的会话：Telegram、Discord 或 iMessage 消息、CI 失败、webhook，Claude 不用你打开终端就会处理。Hooks 在 Claude 生命周期的特定时刻运行你自己的命令，比如调用工具之前或一轮结束时。两者都需要会话在运行。",
            code: "claude --channels plugin:telegram@claude-plugins-official",
          },
        ],
        source: { label: "来源：Anthropic 的 Claude Code 定时任务文档（英文）", href: docs },
      },
      {
        kind: "steps",
        id: "heartbeat",
        kicker: "缺的那一块",
        title: "加一个心跳：按节奏唤醒同一个会话去领下一个任务",
        text: [
          "心跳（heartbeat）是定期往同一个 Claude Code 对话里发的一句提醒，比如工作时间内每 30 分钟一次：看看你的工作，领下一个任务。定时任务每次都开一个新会话、重复同一句提示词；心跳则一直用同一个对话，所以 agent 记得上次做到哪，会从队列里拿下一项。这就是“重复执行的任务”和“持续干活的员工”的区别。",
          "Claude Code 没有心跳设置，但 headless 模式可以恢复会话，所以可以手动搭一个。",
        ],
        steps: [
          {
            title: "手动搭：cron 加 claude -p --resume",
            text: "先开一个会话并保存它的 ID，再让 cron 按节奏用一句简短的心跳提示恢复它。工作队列放在仓库里的一个文件里，比如 TODO.md。这是我们用文档里的参数搭的示例，Anthropic 的文档没有讲心跳这种用法。",
            code: "# 只做一次：开一个会话，记下它的 ID\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e：工作日 9:00–17:30，每 30 分钟一次\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
          },
          {
            title: "自己搭的版本缺什么",
            text: "队列文件和 cron 时间都要自己维护；除非写进 cron，否则下班时间也不会停；你正在用这个会话时心跳到了会撞车；有好几个 agent 时，看不到每个在干什么。",
          },
          {
            title: "用 Crewmark：自带心跳",
            text: "Crewmark 的 daemon 在工作时间内每 15、30 或 60 分钟把心跳发进员工自己的对话，agent 正忙就等它空下来；看板就是队列，每次心跳员工领下一个 issue 并汇报进度。详见[下文](#crewmark)。",
          },
        ],
      },
      {
        kind: "table",
        title: "该选哪一个",
        headers: ["方式", "会不会自己开工", "电脑要不要开着", "适合"],
        rows: [
          ["Proactive 输出风格", "不会，但你交代后动作更快", "要", "做任务时少问几句"],
          ["/goal", "会，自动开下一轮，直到条件满足", "要", "不用催就把一件事做完"],
          ["/loop", "会，按间隔，最多 7 天", "要，会话开着", "盯部署、CI 或 PR"],
          ["桌面端定时任务", "会，按时间表", "要，开着应用且不休眠", "每天处理本地文件"],
          ["云端定时任务", "会，最短每小时一次", "不用", "只需要代码仓库的任务"],
          ["GitHub Actions", "会，按 cron 或 GitHub 事件", "不用", "维护代码仓库"],
          ["Channels", "会，有事件时", "要，会话开着", "响应聊天消息、CI 和 webhook"],
          ["手动心跳（cron + `claude -p --resume`）", "会，按 cron 节奏，在同一个会话里", "要", "一个 agent 按 TODO 文件干活"],
          ["Crewmark 心跳", "会，工作时间内每 15–60 分钟，在同一个会话里", "要", "有任务清单、目标和工作时间的 agent"],
        ],
      },
      {
        kind: "text",
        title: "这些功能还留给你自己的事",
        text: ["每个功能都能开启新的一轮，但没有一个会决定 agent 这周该忙什么。实际用起来会有这些空缺："],
        points: [
          "定时任务每次都重复同一句提示词，不会从待办里接下一件事，也记不得昨天那次做完了什么。",
          "没有一块看板让你给 Claude 派新活，看它在做什么、做完了什么、卡在哪里。",
          "没有工作时间，也没有目标：循环跑到过期为止，而不是跑到某个数字提升为止。",
          "有好几个 agent 时没人协调，每个都得单独写提示词、单独排时间表。",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "用 Crewmark",
        title: "给 Claude Code 一份长期的工作",
        text: [
          "Crewmark 把一个 Claude Code 对话变成有岗位、有目标、有工作时间和心跳的 AI 员工，并通过看板给它派活。它跑在你真正的 Claude Code 里，用的是你已经付费的订阅。",
        ],
        steps: [
          {
            title: "雇一个员工，连上它的对话",
            text: "选一个岗位，比如 SEO 专员或软件工程师，在 Claude Code 里运行 Crewmark 给你的设置命令。这个对话就成了这名员工，两次醒来之间它记得做过的事。",
          },
          {
            title: "设定工作时间和心跳",
            text: "你电脑上的一个后台小程序（Crewmark daemon）在工作时间内每 15、30 或 60 分钟，把员工的心跳提示词发进同一个对话；下班时间不打扰它。心跳到达时 agent 如果正忙，会等它空闲后再送达。",
          },
          {
            title: "在看板上分配 issue",
            text: "你分配 issue 或在 issue 下评论时，消息会送进 agent 的对话。对话没开着的话，Crewmark 会用 `claude -p --resume` 以自动模式把它接着跑起来，活照样有人接。",
          },
          {
            title: "用数字衡量它",
            text: "给每个员工一个 KPI，比如每月 Search Console 点击数。它围绕这个数字安排 issue，在看板上推进，汇报进度，需要你拍板时给你发私信。",
          },
        ],
      },
      {
        kind: "text",
        title: "一起用效果最好",
        text: [
          "内置功能和 Crewmark 可以叠加：在员工的对话里开启 Proactive 输出风格和自动模式，让每次心跳都真正干成事；在终点明确的 issue 里用 `/goal`；用 [Claude Code 远程控制](/remote-claude-code) 在手机上随时看一眼。不用你盯着、跑完就结束的任务，看 [Claude Code 后台 agent 和 headless 模式](/blog/claude-code-background-agents)。用的是 Codex？看 [怎么让 Codex 主动干活](/proactive-codex)。",
        ],
      },
    ],
    howTo: { section: "how-to", name: "让 Claude Code 主动干活" },
    mid: {
      title: "不用写 cron，也不用一直开着会话",
      text: "Crewmark 在工作时间内按心跳唤醒你的 Claude Code 会话，从看板上给它派下一个任务。",
      button: "开始使用",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "Claude Code 的心跳是什么？",
          a: "定期往同一个 Claude Code 对话里发的提醒，比如工作时间内每 30 分钟一次，让 agent 看看手上的工作、领下一个任务。因为是恢复同一个会话而不是新开一个，agent 记得之前做过什么。可以用 cron 加 `claude -p --resume` 手动搭；Crewmark 内置了心跳，还带工作时间和作为队列的看板。",
        },
        {
          q: "Claude Code 有主动模式吗？",
          a: "没有叫这个名字的模式。Claude Code 有内置的 Proactive 输出风格，用 `/output-style Proactive` 开启，让它自己处理常规决定而不是反复询问。它不改变权限提示，要少弹确认请配合自动模式。",
        },
        {
          q: "Claude Code 怎么设置定时任务？",
          a: "会话开着时用 `/loop`；要在自己电脑上定时跑，用桌面端定时任务；电脑关机也要跑，用 `/schedule` 创建云端定时任务；代码仓库还可以用 Claude Code 的 GitHub Action 配 cron 触发。",
        },
        {
          q: "关掉 Claude Code 之后 /loop 还会跑吗？",
          a: "不会。循环属于所在的会话，会话结束它就停，而且循环任务 7 天后过期。要比会话活得久，用定时任务或 Crewmark 的心跳。",
        },
        {
          q: "电脑关机时 Claude Code 还能干活吗？",
          a: "云端定时任务和 GitHub Actions 可以，因为它们跑在别人的机器上。用到本地文件的方式，包括桌面端定时任务、Channels 和 Crewmark，都需要电脑开着。",
        },
        {
          q: "让 Claude Code 无人值守安全吗？",
          a: "用自动模式而不是 `bypassPermissions`；让它在每个改动都要经过审核的仓库里工作；生产环境的凭证不要放在它够得到的地方。Crewmark 还加上了工作时间和看板，它改了什么、为什么改都看得到。",
        },
        {
          q: "用 Crewmark 要额外付 token 费吗？",
          a: "不用。员工跑在你自己的 Claude Code 里，用的是你已有的订阅，没有第二份 token 账单。",
        },
      ],
    },
    cta: {
      title: "让 Claude Code 成为你的第一个 AI 员工",
      text: "给它一个岗位、一个目标、工作时间和心跳，然后派给它第一个 issue。",
      button: "开始使用",
    },
    checked: "已于 2026 年 11 月 2 日对照 Anthropic 的 Claude Code 官方文档核对。",
    disclaimer: "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
  },
};
