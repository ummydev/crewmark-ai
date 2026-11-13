import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 Claude Code 编排工具：内置功能与 10 款应用对比 | Crewmark",
    description:
      "同时运行多个 Claude Code agent：内置功能（Subagents、Agent view、Agent teams、工作流）和 10 款编排工具对比，从 Claude Squad、Orca 到 Paperclip、Multica 和 Crewmark。",
  },
  breadcrumb: "Claude Code 编排工具",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "2026 年最佳 Claude Code 编排工具",
    lead: "Claude Code 编排，就是同时运行多个 Claude Code agent 并协调它们：给每个 agent 一份独立的代码副本、一项任务，以及汇报结果的渠道。如今 Claude Code 自己就能做到其中很多，还有一大批开源和商业工具在它之上加了界面、看板和定时计划。本文先介绍内置功能，再从界面、隔离方式、支持的 agent 以及最关键的问题出发对比十款工具：agent 会自己开工，还是等着你？",
    cta: "申请抢先体验",
    secondary: "直接看对比",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Claude Code 内置：并行运行 agent 的五种方式",
      text: [
        "装任何东西之前，先看看 Claude Code 本身是否已经够用。所有内置方式里，干活的都是 Claude 会话；worktree 让每个会话拥有自己的签出目录（见 [worktree 指南](/blog/claude-code-worktree)）。",
      ],
      headers: ["方式", "能做什么", "状态"],
      rows: [
        ["Subagents（子代理）", "一个会话内部的 worker，在自己的上下文里完成支线任务并返回摘要", "已推出"],
        ["Agent view（`claude agents`）", "在一个界面里派发和监控后台会话，某个会话需要你时可以随时介入", "研究预览"],
        ["Agent teams（代理团队）", "多个会话共享任务列表并互相发消息，由一个 lead 统筹", "实验性，默认关闭"],
        ["Dynamic workflows（动态工作流）", "用脚本运行大量 subagent，并交叉核对它们的结果", "已推出"],
        ["Projects（项目）", "一个持续的对话，可在云端或你的电脑上开启并行线程", "Pro、Max 和 Ultra 公开测试"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 编排工具对比",
      text: [
        "Star 数和许可证取自 2026 年 11 月 6 日的 GitHub。“会自己开工”指工具能通过看板、定时计划或心跳给 agent 分派下一个任务，而不需要你输入提示词。",
      ],
      headers: ["工具", "界面", "隔离方式", "支持的 agent", "会自己开工", "许可证、Star 数"],
      rows: [
        ["Claude Squad", "终端界面（`cs`）", "每个 agent 一个 tmux 会话和 git worktree", "Claude Code、Codex、Gemini、Aider 等", "否", "AGPL-3.0，~9k"],
        ["Orca", "桌面端、CLI、移动端、远程运行环境", "每个 agent 一个 worktree", "Claude Code、Codex 等，使用你自己的订阅", "否；可由一个编排 agent 拆分工作", "MIT，~117k"],
        ["Ruflo（原 Claude Flow）", "Claude Code 插件、CLI 和 MCP 服务器", "未说明", "Claude Code、Codex、MCP 客户端", "否；由提示词或任务驱动的 swarm", "MIT，~81k"],
        ["oh-my-claudecode", "Claude Code 插件（`/autopilot`）", "未说明", "Claude Code", "否；autopilot 要你启动后才运行", "MIT，~41k"],
        ["Vibe Kanban", "带看板的 Web 界面", "每个任务一个 workspace 和分支", "10 种以上，包括 Claude Code、Codex、Gemini CLI", "否；每个 issue 由你启动一个 workspace。正在停止维护，转由社区维护", "Apache-2.0，~29k"],
        ["opcode（原 Claudia）", "桌面 GUI", "后台 agent 运行在独立进程中", "Claude Code", "否", "AGPL-3.0，~22k"],
        ["CloudCLI（Claude Code UI）", "Web 和移动端界面", "可选 Docker 沙箱", "Claude Code、Codex、Cursor CLI、OpenCode", "否", "AGPL-3.0，~15k"],
        ["Conductor", "Mac 应用", "每个任务一个 workspace 和分支", "Claude Code、Codex、Cursor、OpenCode", "否。团队加入 Meta；云服务将于 2026 年 11 月 20 日关闭", "闭源"],
        ["Paperclip", "Web 界面：一家带组织架构、目标和预算的“AI 公司”", "可选 worktree 和沙箱", "Claude Code、Codex、Gemini CLI、Cursor、OpenCode 等", "是：定时心跳，以及分派和 @ 提及", "MIT，~111k"],
        ["Multica", "Web、桌面端、CLI 和 API", "运行在你电脑上的守护进程", "Claude Code、Codex、Cursor、Copilot、OpenCode 等", "是：agent 会接手分派给它的 issue；Autopilots 按 cron 运行", "Multica License（源码可用），~55k"],
        ["Crewmark", "Web 看板、CLI 和运行在你电脑上的守护进程", "每名员工有自己的会话和签出目录", "Claude Code、Codex、DeepSeek Harness、OpenCode", "是：工作时间内由心跳接下一个 issue", "抢先体验"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何选择 Claude Code 编排工具",
      steps: [
        {
          title: "先试内置功能",
          text: "如果只是自己派发几个并行任务，`claude --worktree` 加上 Agent view 可能就够了。如果是一个大改动，用 `/batch` 或一个工作流把它拆给多个 subagent。",
        },
        {
          title: "选一个你真的会去看的界面",
          text: "习惯终端的人往往偏爱 Claude Squad；其他人想要桌面应用（Orca、opcode）或 Web 看板（Vibe Kanban、Paperclip、Multica、Crewmark），后者在手机上也能用。",
        },
        {
          title: "决定由谁启动下一个任务",
          text: "大多数工具只是让你驱动的 agent 跑得更快。如果你希望 agent 在两次提示之间继续干活，就找看板加定时计划或心跳的组合：Paperclip、Multica 和 Crewmark 都能做到。",
        },
        {
          title: "检查隔离方式和支持的 agent",
          text: "并行 agent 需要彼此独立的签出目录，通常是 git worktree。如果你的团队混用 Claude Code、Codex 或 OpenCode，确认工具能用你现有的订阅运行所有这些 agent。",
        },
        {
          title: "检查项目的健康状况",
          text: "看许可证、最近的提交和项目状态：Vibe Kanban 背后的公司正在逐步停止它，Conductor 将转到 Meta，Crystal 已被一个新应用取代。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "各工具简介",
      points: [
        "Claude Squad（[smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)）：一个终端应用，给每个 agent 分配独立的 tmux 会话和 git worktree；`--autoyes` 会自动接受提示（实验性）。",
        "Orca（[stablyai/orca](https://github.com/stablyai/orca)）：用你自己的订阅，在桌面端、移动端或远程机器上运行一整队编程 agent。",
        "Ruflo（[ruvnet/ruflo](https://github.com/ruvnet/ruflo)）：面向 Claude Code 和 Codex 的 agent 元框架（meta-harness），支持 swarm 和跨会话记忆；`ruvnet/claude-flow` 现在会重定向到这里。",
        "oh-my-claudecode（[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)）：一个插件，在 Claude Code 里提供分阶段的规划、构建和 QA 工作流。",
        "Vibe Kanban（[BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)）：在看板上规划 issue，并为每个 issue 启动一个 agent workspace；它的 README 写明项目正在停止维护。",
        "opcode（[winfunc/opcode](https://github.com/winfunc/opcode)）：Claude Code 的桌面 GUI，提供自定义 agent、会话历史、用量分析和检查点。",
        "CloudCLI（[siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)）：管理会话的 Web 和移动端界面，带 shell、文件和 git；付费云版本额外提供托管容器。",
        "Conductor（[conductor.build](https://www.conductor.build)）：关闭日期以及如何迁移你的工作，见 [Conductor 替代方案](/blog/conductor-alternatives)。",
        "Paperclip（[paperclipai/paperclip](https://github.com/paperclipai/paperclip)）和 Multica（[multica-ai/multica](https://github.com/multica-ai/multica)）：最接近 AI 员工的两款；见我们与 [Paperclip](/alternatives/paperclip) 和 [Multica](/alternatives/multica) 的对比。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "你停下打字后，编排依然继续",
      text: [
        "Crewmark 把每个 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标和工作时间的 AI 员工，并用心跳唤醒它，从共享看板上接下一个 issue。",
      ],
      steps: [
        {
          title: "一份工作一名员工",
          text: "程序员、审查员、SEO 写手：每名员工都有自己的会话、签出目录和写成数字的目标。见[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "用看板代替一格格终端",
          text: "分派 issue；每名员工边做边评论，需要你拍板时给你发消息。",
        },
        {
          title: "用心跳代替你的下一条提示词",
          text: "工作时间内，每名员工每 15、30 或 60 分钟在同一个对话里醒来一次；见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "选择 Claude Code 编排工具" },
  mid: {
    title: "开着五个 agent，却还要逐条输入提示词？",
    text: "Crewmark 给每个 Claude Code 会话一个岗位、一个目标和一个心跳，让它不用你也能接下一个 issue。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude Code 编排常见问题",
    items: [
      {
        q: "什么是 Claude Code 编排？",
        a: "同时运行多个 Claude Code agent 并协调它们：各自独立的签出目录、各自的任务，以及查看每个 agent 在做什么、合并结果的方式。",
      },
      {
        q: "Claude Code 自己能编排 agent 吗？",
        a: "能。Subagents、Agent view、Agent teams（实验性）、Dynamic workflows 和 Projects 都是内置的，`--worktree` 还能隔离你自己运行的会话。",
      },
      {
        q: "最好的 Claude Code 编排工具是哪个？",
        a: "终端工作流选 Claude Squad；桌面端管理一整队 agent 选 Orca；在 Claude Code 里跑 swarm 选 Ruflo；想让 agent 按计划从看板上持续接活，选 Paperclip、Multica 或 Crewmark。",
      },
      {
        q: "有管理 Claude Code agent 的图形界面吗？",
        a: "有：Orca 和 opcode 是桌面应用，Vibe Kanban、CloudCLI、Paperclip 和 Multica 有 Web 界面，Claude Code 自己的桌面应用也能用 Worktree 开关运行并行会话。",
      },
      {
        q: "哪些工具能让 agent 不等提示词就开工？",
        a: "在本文对比的工具里，有 Paperclip（定时心跳）、Multica（分派的 issue 和按 cron 运行的 Autopilots）和 Crewmark（工作时间内的心跳）。其余工具运行的都是你启动的 agent。",
      },
      {
        q: "这些工具免费吗？",
        a: "大多数是开源的，可免费自托管：Orca、Ruflo、oh-my-claudecode 和 Paperclip 用 MIT，Claude Squad、opcode 和 CloudCLI 用 AGPL-3.0，Vibe Kanban 用 Apache-2.0。Multica 使用自己的源码可用许可证；Conductor 是闭源的。",
      },
      {
        q: "Conductor 之后该用什么？",
        a: "见 [Conductor 替代方案](/blog/conductor-alternatives)：Claude Code 自带的 `--worktree` 和桌面应用覆盖了核心功能，上面这些工具则补上看板、agent 队伍或定时计划。",
      },
    ],
  },
  cta: {
    title: "让你的 Claude Code agent 自己接下一个任务。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档、各项目的 README 或官网以及 GitHub API 查证。",
  disclaimer:
    "Crewmark 是参与对比的工具之一。产品名称是其所有者的商标；没有任何项目审阅或背书本页。",
};
