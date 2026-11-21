import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/conductor; the English master is
// src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor 价格：免费 Mac 应用、云端套餐与 Meta 变动",
    description:
      "Conductor 可免费使用，模型用量由各 agent 的提供商计费。自 2026 年 11 月 4 日起停止新用户注册，Conductor Cloud 即将关停。",
  },
  breadcrumb: "Conductor 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Conductor",
    title: "Conductor 价格：免费的 Mac 应用、云端套餐，以及 2026 年 11 月 4 日的变化",
    lead: "“Conductor 可免费使用。”它不对模型用量收费，也不转售模型用量：Claude Code、Codex、OpenCode 和 Cursor 都运行在你自己的订阅或 API key 上。云端 workspace 需要 Pro、Team 或 Enterprise 套餐，但目前没有列出任何价格。2026 年 11 月 4 日，Conductor 宣布加入 Meta，并关闭了新用户注册和下载。下面是你要付哪些钱、有哪些变化，以及它和 Vibe Kanban、Claude Squad、Cursor Projects、Crewmark 的价格对比。",
    cta: "开始使用",
    secondary: "有哪些变化",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Conductor 套餐和价格",
      text: [
        "来自 conductor.build 及其文档，核对于 2026 年 11 月 13 日。/pricing 页面现在会重定向到首页，网站上任何地方都没有列出套餐价格。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "Conductor（Mac 应用）",
          "免费使用",
          "Claude Code、Codex 和 OpenCode（内置）以及 Cursor Agent 并行运行，每个都在自己的 git worktree 里；diff 审阅、检查、pull request 和合并",
        ],
        [
          "Pro",
          "未列价格；自 2026 年 11 月 4 日起，Pro 用户可免费继续使用 Pro 功能",
          "云端 workspace 和 Routines（按计划或由 GitHub 触发运行 agent）",
        ],
        ["Team（仅限受邀）", "未列价格", "云端 workspace 和 Routines"],
        ["Enterprise", "未列价格", "云端 workspace"],
        [
          "模型用量",
          "由各 agent 的提供商计费",
          "你现有的订阅（比如 Claude Pro 或 Max，或 ChatGPT）或 API key",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "使用 Conductor 实际要付哪些钱",
      points: [
        "你的 agent 提供商。Conductor 不对模型用量收费，也不转售模型用量。每个 agent 通过它的提供商账户或 API key 计费；Cursor Agent 通过 Cursor API 运行。",
        "一台 Mac。Conductor 只支持 macOS，“暂不支持 Windows 或 Linux。”agent 直接在你的机器上运行，拥有你用户账户的权限，没有沙箱隔离。",
        "应用本身不花钱。本地应用可免费使用。",
        "云端 workspace 需要 Pro、Team 或 Enterprise 套餐。自 2026 年 11 月 4 日起，免费用户无法升级，Pro 用户可免费继续使用 Pro 功能，有效订阅用户将获得退款。",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "2026 年 11 月 4 日发生了什么变化",
      text: [
        "Conductor 宣布加入 Meta。网站页脚现在写着“Conductor from Meta, © 2026 Meta.”如果你在用它，或者正准备用，下面这些日期很重要：",
      ],
      points: [
        "2026 年 11 月 4 日：关闭新用户注册和下载。免费用户无法升级，Pro 用户可免费继续使用 Pro 功能，有效订阅用户将获得退款。",
        "2026 年 11 月 13 日：Conductor Cloud 变为只读。",
        "2026 年 11 月 20 日：Conductor Cloud 关停，开始删除云端用户数据。",
        "至 2027 年初：本地应用继续获得新模型和关键 bug 修复，之后逐步停止。应用关停时，所有用户数据都会被删除。",
        "如果你在找可以迁移过去的工具，见 [Conductor 替代方案](/blog/conductor-alternatives)。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor 与同类工具的价格对比",
      text: [
        "价格取自各产品自己的官网，核对于 2026 年 11 月 13 日。无论用哪一个，你还要为运行的编程 agent 或模型付费，除非下面的套餐已经包含。",
        "并排对比：[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor)、[Claude Squad vs Conductor](/compare/claude-squad-vs-conductor)。更多选择见 [Conductor 替代方案](/blog/conductor-alternatives)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        [
          "Conductor",
          "免费使用；云端套餐价格未列出",
          "有，但自 2026 年 11 月 4 日起已关闭新用户注册和下载",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "本地应用免费；bloop 2026 年 4 月 10 日的停运公告称订阅已终止",
          "有：开源（Apache-2.0），由社区维护",
        ],
        ["[Claude Squad](/compare/claude-squad-vs-conductor)", "免费；未列出付费套餐", "有：开源（AGPL-3.0）"],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 每月 $30，或每年 $300",
          "没有：Free、Plus（每月 $8）和旧版 Hobby 都不包含",
        ],
        [
          "[Crewmark](/pricing)",
          "免费；Pro 每月 $5、Team 每月 $10 即将推出",
          "有：1 个项目、最多 3 名 AI 员工、1 人使用",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Conductor 让 agent 并行运行，Crewmark 给它们一份工作和一块看板。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue。`crewmark` CLI 可在 macOS、Linux 和 Windows 上运行，agent 用的是你已经在付费的 Claude 或 ChatGPT 订阅。",
        "Crewmark 的价格：Free 版 $0（1 个项目、最多 3 名 AI 员工、1 人使用）。Pro 每月 $5、Team 每月 $10，即将推出。计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。它以 GPL-3.0 开源，可以自托管。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)里选，比如软件工程师，目标写成数字。",
        },
        {
          title: "把工作放上看板",
          text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。",
        },
        {
          title: "看看套餐",
          text: "[Crewmark 价格](/pricing)，以及 agent 用它做什么，见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "要从 Conductor 迁走？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板，支持 macOS、Linux 和 Windows。",
    button: "开始使用",
  },
  faq: {
    title: "Conductor 价格常见问题",
    items: [
      {
        q: "Conductor 免费吗？",
        a: "免费。“Conductor 可免费使用”，模型用量由各 agent 的提供商计费。不过自 2026 年 11 月 4 日起，新用户注册和下载已关闭。",
      },
      {
        q: "Conductor 多少钱？",
        a: "Mac 应用免费。云端 workspace 需要 Pro、Team（仅限受邀）或 Enterprise 套餐，但这些套餐目前都没有列出价格，/pricing 页面也会重定向到首页。",
      },
      {
        q: "Conductor 会对模型用量收费吗？",
        a: "不会。Conductor 不对模型用量收费，也不转售模型用量。Claude Code、Codex、OpenCode 和 Cursor Agent 用的是你自己的订阅（比如 Claude Pro 或 Max，或 ChatGPT）或你的 API key。",
      },
      {
        q: "Conductor 开源吗？还是需要购买许可证？",
        a: "都不是。Conductor 不开源（没有公布源代码仓库或许可证），应用又可以免费使用，所以没有许可证价格。",
      },
      {
        q: "我的 Conductor Pro 订阅会怎样？",
        a: "自 2026 年 11 月 4 日起，Pro 用户可免费继续使用 Pro 功能，有效订阅用户将获得退款。Conductor Cloud 于 11 月 13 日变为只读，2026 年 11 月 20 日关停。",
      },
      {
        q: "Conductor 应用还能用多久？",
        a: "本地应用会持续获得新模型和关键 bug 修复，直到 2027 年初，之后逐步停止，关停时所有用户数据都会被删除。见 [Conductor 替代方案](/blog/conductor-alternatives)。",
      },
    ],
  },
  cta: {
    title: "Conductor 之后，让你的 agent 继续干活。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 conductor.build 及其文档、更新日志和公告，以及每个对比产品自己的价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Conductor、Meta 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
