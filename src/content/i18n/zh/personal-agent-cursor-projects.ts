import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects 功能详解：价格及对比 Grok Bot",
    description:
      "Cursor Projects 详解：一个协调者 agent 规划较大的编程工作，再交给云端 agent 完成。套餐、设置、本地测试、审阅，以及和 Grok Bot 的对比。",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Cursor",
    title: "Cursor Projects：协调者 agent 怎么规划和分派较大的工作",
    lead: "Cursor Projects 是 Cursor 面向较大工作量的功能，比如一个新功能、一次迁移或一个完整的应用。你和一个协调者 agent 对话，它自己不写代码：它规划工作，分派给在 Cursor Cloud Agents 上并行运行的 agent，再把完成的工作交回给你检查。每个 Project 都有共享文件，其中的每个 agent 都会读；它还能在没人提示的情况下处理周期性工作。本文讲它怎么运作、哪些套餐包含它、怎么设置、在哪里运行，以及它和 Grok Bot、Claude Code 的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cursor Projects 是什么",
      points: [
        "一个协调者和它的 worker：你和一个协调者 agent 对话，它创建 worker agent，按职责给它们命名并管理它们。协调者自己不写代码；它规划工作，再分派给并行运行的 worker。",
        "在云端运行：每个 Project 在 Cursor Cloud Agents 上有自己的云端计算机，所以合上笔记本电脑不会让它停下。",
        "共享文件：Project 里保存偏好、笔记和工作流程，其中每个 agent 都会读。一个共享的 `notes.md` 记录哪些在进行、哪些在排队、哪些已完成。",
        "任务列表和看板：每个 Project 都有一个，在 Multiplayer Projects 中所有成员共享。",
        "周期性工作：让协调者盯着一个 Slack 频道、按计划运行或跟进你的 pull request，它就会根据这些信号行动，不需要你提示。",
        "为超出一次对话的工作而做：一个需要多个 pull request 的新功能、一次迁移，或在你离开时处理的一项工作。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects 价格：哪些套餐包含它",
      text: [
        "Projects 运行在 Cloud Agents 上，所以凡是有 Cloud Agents 的 Cursor 套餐都包含它。价格来自 2026 年 11 月 13 日 Cursor 的价格帮助页。Cursor 的付费套餐包含一个 Cursor 模型（Grok 和 Composer）的用量池。",
      ],
      headers: ["套餐", "价格", "Cursor Projects"],
      rows: [
        ["Free", "-", "不包含"],
        ["Plus", "$8/月", "不包含"],
        ["Premium", "$30/月，或 $300/年", "包含"],
        ["Super", "$100/月", "包含"],
        ["Ultra", "$200/月", "包含"],
        ["Teams", "每席位每月 $30、$100 或 $200", "包含；Multiplayer Projects 需要团队账户和 Cursor 3.26.13 或更高版本"],
        ["Enterprise", "-", "包含；需要 Cursor 3.21.9 或更高版本"],
        ["旧版套餐", "-", "旧版付费套餐包含；旧版 Hobby 不包含"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Cursor Projects",
      steps: [
        {
          title: "检查套餐和隐私设置",
          text: "你需要一个有 Cloud Agents 的套餐：Premium 或更高、Teams、Enterprise（Cursor 3.21.9 或更高版本）或旧版付费套餐。开启 Privacy Mode (Legacy) 时不能使用 Projects。",
        },
        { title: "打开 Agents Window", text: "Projects 位于 Cursor 的 Agents Window 中，在云端运行。" },
        {
          title: "描述这项较大的工作",
          text: "告诉协调者要在你的 GitHub 仓库里做什么，比如一个新功能、一次迁移或一个完整的应用。协调者用什么模型由你选。",
        },
        {
          title: "添加共享文件",
          text: "为 Project 写下偏好、笔记和工作流程；其中每个 agent 都会读，`notes.md` 记录哪些在进行、哪些在排队、哪些已完成。",
        },
        {
          title: "检查成果，并设为周期性工作",
          text: "协调者会把完成的工作交回给你检查。让它盯着一个 Slack 频道、按计划运行或跟进你的 pull request，它就会在没有提示的情况下继续工作。",
        },
      ],
      source: { label: "来源：Cursor 文档《Projects》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cursor Projects 怎么让你保持掌控",
      points: [
        "审阅：协调者把完成的工作交回给你检查。",
        "可见性：任务列表和看板，以及共享的 `notes.md`，显示哪些在进行、哪些在排队、哪些已完成。",
        "隔离：每个 Project 在自己的云端计算机上运行。需要在你的机器上测试时，协调者会启动一个本地 agent。",
        "团队：在 Multiplayer Projects 中（团队账户，Cursor 3.26.13 或更高版本），每位成员有自己的协调者，协调者之间直接发消息，所有成员共享看板。",
        "隐私：开启 Privacy Mode (Legacy) 时不能使用 Projects。",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Cursor Projects 能在本地运行吗？",
      text: [
        "不能，至少不能从头到尾都在本地。Cursor 的文档说，每个 Project 在云端一台自己的计算机上运行，所以合上笔记本电脑不会让它停下，而且在云端它能并行运行的 agent 比一台笔记本电脑多。需要在你的机器上测试时，协调者会启动一个本地 agent 在那里运行。",
        "Cursor 的 Self-Hosted Machines 把工具执行转移到你管理的机器上：My Machines 用于个人的笔记本电脑、开发机或虚拟机，Enterprise 套餐还有 Team Pools。这样文件编辑、终端命令和其他工具调用都在那台机器上运行，但 agent 循环、推理和规划仍留在 Cursor 的云端，worker 会把 agent 需要的内容发送给 Cursor。（Cursor 文档，于 2026 年 11 月 13 日核对。）",
        "如果你想让一整个 agent 团队都在你自己的电脑上运行，下面这些就是这样工作的：",
      ],
      points: [
        "[Claude Code agent teams](/blog/claude-code-agent-teams)：Claude Code 的一项实验性功能，默认关闭。一个负责人会话派生出若干队友，它们共享一个任务列表、互相发消息，全部运行在你自己的 Claude Code 会话里。",
        "[Claude Squad](/compare/claude-squad-vs-conductor)：一款开源（AGPL-3.0）的终端应用，可同时运行多个编程 agent，每个都在自己的 tmux 会话和 git worktree 里。",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)：一款面向编程 agent 的开源（Apache-2.0）看板，在你的浏览器里本地运行，也可以作为桌面应用运行；它背后的公司在 2026 年 4 月关闭后，一直由社区维护。",
        "[Crewmark](/ai-employees)：开源（GPL-3.0）。每名 AI 员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位和目标，心跳会唤醒它去共享看板上领取下一个 issue。工作不限于代码：[SEO 专员](/ai-employees/seo-specialist)这类岗位也以同样的方式运行，网页应用还可以自托管。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot 和 Claude Code",
      text: [
        "信息来自各厂商自己的文档和价格页，于 2026 年 11 月 13 日核对。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)；另见 [Grok Bot 指南](/personal-agent/grok-bot)和 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
        "并排对比：[Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)。指南：[Grok Bot](/personal-agent/grok-bot)。",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["出品方", "Cursor", "xAI", "Anthropic"],
        ["面向", "较大的编程工作：一个新功能、一次迁移、一个完整应用", "在你的应用、Slack 和 Teams 里工作的 AI 队友", "编程：读取代码库、编辑文件、运行命令"],
        ["多个 agent", "协调者规划工作，分派给并行的 worker agent", "Bot 之间互相发消息，并在群聊中协调", "会话内的 subagent；实验性的 agent teams"],
        ["运行在", "Cursor Cloud Agents，每个 Project 一台云端计算机；测试时用本地 agent", "云端：每个 Bot 有自己的计算机", "你机器上的终端、IDE 和桌面应用；网页上有云端会话"],
        ["任务看板", "任务列表和看板，另有共享的 `notes.md`", "未说明；工作在聊天、Slack 讨论串和会议中交接", "没有 issue 看板；agent teams 共享一个任务列表"],
        ["周期性工作", "盯着 Slack 频道、按计划运行或跟进你的 pull request", "按计划运行的例行任务", "云端和桌面定时任务、`/loop`"],
        ["价格", "Cursor Premium $30/月起", "每月 Premium $30、Super $100 或 Ultra $200", "Claude 付费套餐，Pro $20/月起"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一项大工作交给 Projects，长期岗位交给 Crewmark。",
      text: [
        "Cursor Projects 协调多个 agent 完成一项较大的工作。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue，让代码仓库里的工程、SEO 和营销工作持续完成。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Cursor Projects" },
  mid: {
    title: "想要有长期岗位的 agent？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Cursor Projects 常见问题",
    items: [
      {
        q: "Cursor Projects 是什么？",
        a: "Cursor 面向较大工作量的功能，比如一个新功能、一次迁移或一个完整的应用。一个协调者 agent 规划工作，分派给在 Cursor Cloud Agents 上并行运行的 agent，再把完成的工作交回给你检查。",
      },
      {
        q: "哪些 Cursor 套餐包含 Projects？",
        a: "所有有 Cloud Agents 的套餐：Premium（每月 $30，或每年 $300）及以上、Super（$100）和 Ultra（$200）、Teams（每席位每月 $30、$100 或 $200）、Enterprise 以及旧版付费套餐。Free、Plus（每月 $8）和旧版 Hobby 不包含。",
      },
      {
        q: "Cursor Projects 在本地运行吗？",
        a: "不是，它运行在 Cursor Cloud Agents 上，每个 Project 一台云端计算机，所以合上笔记本电脑不会让它停下。需要在你的机器上测试时，协调者会启动一个本地 agent。开启 Privacy Mode (Legacy) 时不能使用 Projects。",
      },
      {
        q: "怎么审阅 Cursor Projects 做了什么？",
        a: "协调者会把完成的工作交回给你检查。Project 的任务列表和看板，以及共享的 `notes.md`，显示哪些在进行、哪些在排队、哪些已完成。",
      },
      {
        q: "一个团队能共用一个 Cursor Project 吗？",
        a: "能，用 Multiplayer Projects，需要团队账户和 Cursor 3.26.13 或更高版本。每位成员有一个协调者，协调者之间直接发消息，所有成员共享任务列表和看板。",
      },
      {
        q: "Cursor Projects vs Grok Bot：有什么区别？",
        a: "Cursor Projects 是 Cursor 里的编程工作区：一个协调者把一项较大的工作分派给 Cloud Agents 上的 worker agent。Grok Bot 是 xAI 的托管 AI 队友：每个 Bot 都有自己的云端计算机，登录你的应用，在 Slack 和 Microsoft Teams 里工作。参见 [Grok Bot 指南](/personal-agent/grok-bot)。",
      },
    ],
  },
  cta: {
    title: "大工作在 Projects 里协调，也给你的 agent 一个长期岗位。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照 Cursor 的 Projects 文档、帮助中心和价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Cursor、xAI 和 Anthropic 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
