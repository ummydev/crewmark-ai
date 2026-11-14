import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 看板：内置任务列表与看板工具推荐 | Crewmark AI",
    description:
      "Claude Code 有任务清单（Ctrl+T），但没有看板。本文讲清任务列表怎么用、怎么把它搬上看板，以及适合 Claude Code 会话的看板工具：claude-code-kanban、Kanban Code、Claudine、Vibe Kanban 和 Crewmark。",
  },
  breadcrumb: "Claude Code 看板",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code 看板：从任务清单到真正的看板",
    lead: "Claude Code 本身没有看板，只有一个任务列表：Claude 在做多步骤任务时给自己列的待办清单，分为待办、进行中、已完成三种状态，按 Ctrl+T 显示或隐藏。所谓“Claude Code 看板”，其实是在它之上搭出来的两类工具：一类把这份任务列表搬到浏览器里的看板上，另一类让每张卡片对应一整个 Claude Code 会话或一个 issue。本文介绍内置的任务列表、如何搭一块看板，以及这两类工具各有哪些选择。",
    cta: "开始使用",
    secondary: "搭一块看板",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code 内置了什么：任务列表",
      text: [
        "任务列表是 Claude 为手头工作列的清单。它不是后台任务视图：`/tasks` 显示的是正在运行的 shell 和子 agent。",
      ],
      points: [
        "按 `Ctrl+T` 显示或隐藏，一次最多显示五个任务。",
        "上下文压缩后任务依然保留，所以长任务里 Claude 不会丢掉计划。",
        "可以直接让 Claude“show me all tasks”（显示全部任务）或“clear all tasks”（清空全部任务）。",
        "设置 `CLAUDE_CODE_TASK_LIST_ID` 可以让多个会话共用一份列表，它保存在 `~/.claude/tasks/` 下的同名目录里。",
        "Opus 4.7、Sonnet 4.6、Haiku 4.5 及更早的模型默认开启任务工具；换成其他模型时，除非设置 `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`，否则列表始终为空。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何把 Claude Code 的任务搬上看板",
      text: [
        "这里用的是 claude-code-kanban：一个开源看板，它监听 Claude Code 写入的任务文件，并在浏览器里展示出来。",
      ],
      steps: [
        {
          title: "确认任务工具已开启",
          text: "如果按 `Ctrl+T` 从来看不到清单，说明你用的模型默认没有任务工具。在设置里加上这个环境变量，然后重启 Claude Code。",
          code: setup,
        },
        {
          title: "安装看板和 hooks",
          text: "`claude-code-kanban --install` 会添加一个带 hooks 的 Claude Code 插件。不装 hooks 的话，看板只显示任务，看不到实时动态，也收不到等待你回复的提示。",
        },
        {
          title: "打开看板，照常干活",
          text: "Claude 干活时，卡片会依次经过 Pending、In Progress 和 Completed 三列，你还可以直接在看板上回复 Claude 的提问。它只监听 127.0.0.1，没有登录，所以只在自己电脑上用。",
        },
        {
          title: "多个会话共用一块看板",
          text: "每个会话都用同一个任务列表 ID 启动，多个 Claude Code 会话就会读写同一份列表。",
          code: shared,
        },
      ],
      source: { label: "来源：Claude Code 文档，Interactive mode（Task list）", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Claude Code 看板工具对比",
      text: ["信息来自各项目的 README 或发布页面，截至 2026 年 11 月 7 日。"],
      headers: ["工具", "一张卡片是什么", "运行在哪里", "支持的 agent", "许可证"],
      rows: [
        ["claude-code-kanban", "Claude 任务列表里的一个任务", "浏览器，跑在你自己的电脑上", "Claude Code", "MIT"],
        ["Kanban Code", "一个 Claude Code 会话，各有自己的 worktree；列为 Backlog、In Progress、Waiting、In Review、Done", "macOS 26 应用；Windows 应用", "Claude Code", "Apache 2.0"],
        ["Claudine", "一段 Claude Code 或 Codex 对话，自动识别状态、分支和报错", "VS Code 扩展", "Claude Code、Codex", "MIT"],
        ["Vibe Kanban", "一个 issue，为它开一个 workspace；公司已关闭，应用仍可本地运行", "`npx vibe-kanban`", "Claude Code、Codex 等众多 agent", "Apache 2.0"],
        ["Crewmark", "一个 issue，由 AI 员工按心跳自己接手", "托管的网页版看板，与团队共享", "Claude Code、Codex、DeepSeek Harness、OpenCode", "商业产品"],
      ],
    },
    {
      kind: "text",
      title: "你需要哪种看板",
      points: [
        "你只想看清一个会话的计划：Claude Code 自带的任务列表（`Ctrl+T`）可能就够了；想在浏览器里看得更清楚，再加上 claude-code-kanban。",
        "你同时开好几个会话，总搞不清哪个在等你：用 Kanban Code 或 Claudine 这类会话看板，哪个在干活、哪个在等待、哪个可以审了一目了然。另见[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents) 和 [worktree 指南](/blog/claude-code-worktree)。",
        "你之前用的是 Vibe Kanban：见 [Vibe Kanban 替代方案](/blog/vibe-kanban-alternatives)。",
        "你希望看板来驱动工作，agent 不用你发话就自己接下一张卡：这正是 Crewmark 做的事（见下文）。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一块让 Claude Code 自己接下一张卡的看板",
      text: [
        "上面这些工具都只是让你看到 Claude 在做什么，每个会话还得你来启动，每张卡还得你来挪。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标和工作时间的 AI 员工：按心跳醒来，从共享看板上接下一个 issue，边做边写评论，需要你拍板时给你发消息。",
      ],
      steps: [
        {
          title: "连接你的项目和 agent",
          text: "在仓库里运行设置命令。员工在自己的会话和检出目录里工作，用的就是你已经在付费的订阅。",
        },
        {
          title: "把看板填满",
          text: "像给同事提需求一样写 issue，可以指定给某名员工，也可以先不分配，留给有空的人去接。",
        },
        {
          title: "从启动者变成审核者",
          text: "工作时间内，员工每 15、30 或 60 分钟接下一张卡。了解[如何让 Claude Code 主动干活](/proactive-claude-code)和[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Claude Code 的任务搬上看板" },
  mid: {
    title: "别再自己挪卡片了。",
    text: "Crewmark 的看板把 issue 分配给 Claude Code 和 Codex 员工，它们按心跳醒来，自己接下一个。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code 看板常见问题",
    items: [
      {
        q: "Claude Code 有看板吗？",
        a: "没有。它有一个任务列表，是分为待办、进行中、已完成三种状态的清单，按 Ctrl+T 显示或隐藏。Claude Code 的看板都是第三方工具，基于它的任务文件或会话文件搭建。",
      },
      {
        q: "怎么查看 Claude Code 的任务列表？",
        a: "在会话里按 Ctrl+T，最多显示五个任务；想看完整列表，就让 Claude“show me all tasks”。正在运行的 shell 和子 agent 则用 /tasks 查看。",
      },
      {
        q: "为什么我的 Claude Code 任务列表是空的？",
        a: "要么 Claude 还没规划任何多步骤任务，要么你的模型默认没有任务工具。在环境变量或设置里加上 CLAUDE_CODE_ENABLE_TODO_TOOLS=1，然后重启。",
      },
      {
        q: "多个 Claude Code 会话能共用一份任务列表吗？",
        a: "可以。每个会话都用同一个 CLAUDE_CODE_TASK_LIST_ID 启动，例如 CLAUDE_CODE_TASK_LIST_ID=my-project claude；列表保存在 ~/.claude/tasks/ 下。",
      },
      {
        q: "有 Claude Code 看板插件吗？",
        a: "claude-code-kanban 会安装一个带 hooks 的 Claude Code 插件，为它的浏览器看板提供数据。Claudine 是 VS Code 扩展，Kanban Code 是桌面应用。",
      },
      {
        q: "有同时支持 Claude Code 和 Codex 的看板吗？",
        a: "Claudine 能读取 Claude Code 和 Codex 的对话。Vibe Kanban 支持很多 agent，但背后的公司已经关闭。Crewmark 的看板可以把 issue 分配给 Claude Code、Codex、DeepSeek Harness 和 OpenCode 员工。",
      },
    ],
  },
  cta: {
    title: "把你的 Claude Code 看板，变成一支替你干活的团队。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 Claude Code 文档（Interactive mode）以及各工具的 README 或发布页面查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 及文中提到的各项目无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
