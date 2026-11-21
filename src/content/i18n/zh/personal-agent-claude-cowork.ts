import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork 是什么：价格、设置、对比 Claude Code",
    description:
      "Claude Cowork 详解：Anthropic 在 Claude 应用里处理编程以外工作的 agent。价格、设置、定时任务、审批，以及 Cowork 和 Claude Code 的区别。",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Anthropic",
    title: "Claude Cowork：Anthropic 的 AI 同事能做什么、怎么用",
    lead: "Claude Cowork 是 Anthropic 在 Claude 应用里做知识工作的 agent。你描述想要的结果，比如一份调研报告、一张电子表格、一套演示文稿或一个整理好的文件夹，Claude 会规划步骤，在你的文件、已连接的应用和浏览器里逐步完成，再把结果交给你。任务在 Anthropic 的云端运行，合上笔记本电脑也会继续。本文讲它能做什么、哪些套餐包含它、怎么设置、行动前怎么征求你的同意，以及它和 Claude Code 有什么不同。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Cowork 是什么",
      points: [
        "面向编程以外工作的 agent：调研、分析、文档、带可用公式的电子表格、幻灯片和文件处理。Anthropic 自己的常见问题把 Cowork 定位在这类工作上，把 Claude Code 定位在软件工程上。",
        "在云端运行：会话在 Anthropic 服务器上的隔离环境中运行，并保存到你的 Claude 账号。在 Pro、Max 和 Ultra 上，新任务自 2026 年 10 月 6 日起都在云端运行。",
        "通过 Claude Desktop 访问你自己的电脑：本地文件、本地连接器、浏览器操作和电脑操作，都需要那台机器上的桌面应用保持打开。",
        "可以重复执行：定时任务按每小时、每天、每周或工作日运行，每次都是云端的一个独立会话。",
        "它是 Claude 的一部分：自 2026 年 9 月起，Cowork 正逐步并入普通的 Claude 对话。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude Cowork 价格：哪些套餐包含它",
      text: [
        "价格来自 2026 年 11 月 13 日的 claude.com/pricing，以美元计，不含税。Anthropic 没有公布每个套餐包含多少 Cowork 用量；它的 Pro 套餐卡片注明，Cowork 消耗额度比聊天更快。",
      ],
      headers: ["套餐", "价格", "Claude Cowork"],
      rows: [
        ["Free", "$0", "不包含"],
        ["Pro", "$20/月，按年付 $17/月（每年 $200）", "包含"],
        ["Max", "$100/月", "包含"],
        ["Ultra", "$200/月", "包含"],
        ["Team（2 到 150 人）", "Standard 席位按年付 $20/月，按月付 $25；Premium 席位 $100 或 $125", "包含；网页端和移动端处于 beta"],
        ["Enterprise", "按年付每席位 $20/月，至少 20 席，另按 API 价格计算用量", "包含；云端会话、网页端和移动端在所有者开启前处于关闭状态"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Claude Cowork",
      steps: [
        { title: "订阅 Claude 付费套餐", text: "Pro、Max、Ultra、Team 或 Enterprise。在 Enterprise 上，可能需要所有者开启 Cowork。" },
        { title: "要处理本地工作，就安装 Claude Desktop", text: "Cowork 也能在网页端和 iOS、Android 上运行，但本地文件、浏览器操作和电脑操作需要 macOS 或 Windows 版 Claude Desktop（Linux 版处于 beta）。" },
        { title: "描述结果，而不是步骤", text: "说清楚你想要什么结果、输入在哪里：文件、已连接的应用（比如 Google Drive、Gmail、Microsoft 365 或 Slack），或者网页。" },
        { title: "选择它怎么征求同意", text: "选 Manual（手动）逐个批准操作，或选 Auto（自动）让安全审查批准常规操作。你还可以把每个连接器工具设为始终允许、需要审批或禁止。" },
        { title: "设成定时任务", text: "在任务里输入 `/schedule`，或使用 Scheduled 页面，选择每小时、每天、每周、工作日或按需运行。" },
      ],
      source: { label: "来源：Anthropic 帮助中心《Get started with Claude Cowork》", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Claude Cowork 怎么让你保持掌控",
      points: [
        "三种审批模式：Manual 在操作前询问；Auto 对每个操作做安全审查并拦下不安全的操作，如果反复被拦，就回到询问；Skip 不询问。Pro、Max、Ultra 和 Team 默认是 Auto，Enterprise 默认是 Manual。",
        "永久删除文件前它会先问你，电脑操作在使用每个应用前都会询问。",
        "Team 和 Enterprise 的管理员可以关闭 Auto，并要求每个具有写入能力的连接器工具都经过审批。",
        "你可以在桌面应用、网页或手机上，在任务运行中途调整方向或停止它。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code、ChatGPT Work 和 Copilot Cowork",
      text: [
        "信息来自各厂商自己的页面，于 2026 年 11 月 13 日核对。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)。",
        "并排对比：[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。指南：[ChatGPT Work](/personal-agent/chatgpt-work)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["出品方", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["面向", "编程以外的知识工作", "软件工程", "最终产出待审阅成果的任务", "跨 Microsoft 365 的工作"],
        ["运行在", "Anthropic 的云端；通过 Claude Desktop 在本地运行", "默认在你的机器上；网页上有云端会话", "OpenAI 的云端，或通过桌面应用在你的电脑上", "Microsoft 的云端，配合 OneDrive 和 SharePoint"],
        ["谁能用", "Claude 付费套餐", "Claude 付费套餐", "ChatGPT 各套餐；Free 和 Go 有限使用", "Microsoft 365 Copilot 许可证加 Copilot Credits"],
        ["定时", "每小时到每周，在云端", "云端和桌面定时任务、`/loop`", "定时任务和事件触发", "定时提示词和事件触发的任务"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "文档交给 Cowork，代码库交给 Crewmark。",
      text: [
        "Claude Cowork 处理你交给它的知识工作。Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，让代码仓库里的工程、SEO 和营销工作按计划完成，并在看板上跟踪。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)里选，比如 [AI SEO 专员](/ai-employees/seo-specialist)。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Claude Cowork" },
  mid: {
    title: "想给你的代码库配一个 AI 同事？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Cowork 常见问题",
    items: [
      {
        q: "Claude Cowork 是什么？",
        a: "Anthropic 在 Claude 应用里做编程以外知识工作的 agent。你描述想要的结果，它在你的文件、已连接的应用和浏览器里完成各个步骤，然后交回成品文件，比如文档、电子表格和演示文稿。",
      },
      {
        q: "Claude Cowork 多少钱？",
        a: "它包含在 Claude 付费套餐中：Pro 每月 $20（按年付每月 $17）、Max $100、Ultra $200，以及 Team 和 Enterprise 席位。Claude Free 不包含它。",
      },
      {
        q: "Claude Cowork vs Claude Code：有什么区别？",
        a: "Cowork 用于在 Claude 应用里完成调研、文档和电子表格这类知识工作；Claude Code 是 Anthropic 在你的代码仓库里做软件工程的 agent。Anthropic 表示，Cowork 和 Claude Code 采用相同的架构。",
      },
      {
        q: "Claude Cowork 支持 Windows 和手机吗？",
        a: "支持。Claude Desktop 可在 macOS 和 Windows 上运行它（Linux 处于 beta），Pro、Max、Ultra 和 Team 还可以在网页端和 iOS、Android 版 Claude 上使用。本地文件、浏览器操作和电脑操作需要桌面应用。",
      },
      {
        q: "Claude Cowork 能定时运行任务吗？",
        a: "能，所有付费套餐都可以。在任务里用 `/schedule`，或使用 Scheduled 页面；每次运行都是云端的一个独立会话，所以除非任务需要本地文件，你的电脑可以关机。",
      },
      {
        q: "合上笔记本电脑后，Claude Cowork 还能工作吗？",
        a: "云端任务可以：它们在 Anthropic 的服务器上继续运行。需要本地文件、本地连接器或浏览器的工作，在 Claude Desktop 重新打开之前无法访问这些资源。",
      },
    ],
  },
  cta: {
    title: "文档交给 Cowork，也给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照 claude.com/product/cowork、claude.com/pricing 和 Anthropic 帮助中心核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、OpenAI 和 Microsoft 均无关联，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
