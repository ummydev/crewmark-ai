import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot：CopilotKit 的开源 AI 同事，价格与设置",
    description:
      "OpenBot 是 CopilotKit 开源、可自托管的 AI 同事工作区。它能做什么、OpenBot for Business 价格、设置、GitHub，以及和 Grok Bot 的对比。",
  },
  breadcrumb: "OpenBot",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · 开源",
    title: "OpenBot：CopilotKit 的开源 AI 同事工作区",
    lead: "OpenBot 是 CopilotKit 开源、可自托管的 AI 同事工作区。每个 Bot 都有一台自己的计算机，带浏览器、文件和工具，工作时有审批和活动记录。你可以在笔记本上以桌面应用运行它，也可以为团队部署在 Kubernetes 上，自带模型，还能通过 AG-UI 接入你已经搭好的 agent。本文讲它能做什么、OpenBot for Business 多少钱、怎么设置、怎么让你保持掌控，以及它和其他 AI 同事的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenBot 是什么",
      points: [
        "每个 Bot 一台计算机：每个 Bot 都有自己的浏览器、文件和工具，还有对话、例行任务、记忆、技能、应用、审批和活动记录。",
        "运行位置：Mac 和 Windows 桌面应用，在你的笔记本上配合 Docker 后端运行；或者通过 Helm 部署到 Kubernetes，供团队使用。由 CopilotKit 托管的版本处于抢先体验阶段。",
        "你的模型：OpenAI、Claude、Gemini，或通过兼容 OpenAI 的端点接入开放模型。你直接向模型提供商付费。",
        "你的 agent：使用内置 Bot，或通过 AG-UI 接入你在其他技术栈上搭建的 agent。",
        "例行任务：周期性工作，由 routine worker 运行。",
        "工具和前端：MCP 工具，以及 Mac、Windows、网页、iOS、Android、Slack 和 Teams 前端，其中部分处于抢先体验阶段。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenBot 的 GitHub 仓库和 CopilotKit Intelligence",
      text: [
        `代码在 [github.com/CopilotKit/OpenBot](${repo})。仓库创建于 2026 年 8 月 17 日，2026 年 11 月 13 日约有 11,652 颗星。`,
      ],
      points: [
        "应用模板采用 MIT 许可证，所以你可以自托管并定制它。",
        "它使用 CopilotKit Intelligence，后者有自己的许可证：在笔记本上是免费的本地许可证，在 Kubernetes 上是试用或生产许可证。",
        "在 Kubernetes 上投入生产使用，需要评估用途以外的 CopilotKit Intelligence 许可证。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot 价格和 OpenBot for Business",
      text: ["来自 2026 年 11 月 13 日的 open.bot/pricing，以美元计。所有套餐都直接向模型提供商付费。"],
      headers: ["套餐或许可证", "价格"],
      rows: [
        ["个人项目", "免费"],
        ["OpenBot for Business，按量付费", "每位活跃用户每月最高 $29，另加每月模型支出超过 $5,000 部分的 5%"],
        ["按年", "定制"],
        ["CopilotKit Intelligence", "笔记本上免费的本地许可证；Kubernetes 上的试用或生产许可证"],
        ["模型", "直接付给模型提供商"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 OpenBot",
      steps: [
        {
          title: "选择在哪里运行",
          text: "在你的笔记本上，用 Mac 或 Windows 桌面应用，配合 Docker 后端运行。团队使用的话，通过 Helm 部署到 Kubernetes。由 CopilotKit 托管的版本处于抢先体验阶段。",
        },
        {
          title: "连接你的模型",
          text: "使用 OpenAI、Claude、Gemini，或通过兼容 OpenAI 的端点接入开放模型。你直接向提供商付费。",
        },
        {
          title: "选一个 Bot，或接入 agent",
          text: "从内置 Bot 开始，或通过 AG-UI 接入你已经搭好的 agent。每个 Bot 都有一台自己的计算机，带浏览器、文件和工具。",
        },
        {
          title: "添加工具和例行任务",
          text: "给 Bot 配上 MCP 工具，为周期性工作设置例行任务（Routines）；由 routine worker 运行它们。",
        },
        {
          title: "在你工作的地方使用它",
          text: "前端覆盖 Mac、Windows、网页、iOS、Android、Slack 和 Teams；部分处于抢先体验阶段。",
        },
      ],
      source: { label: "来源：GitHub 上的 OpenBot README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenBot 怎么让你保持掌控",
      points: [
        "审批：Bot 在操作前会先问你。",
        "活动：每个 Bot 都有活动记录。",
        "团队版：企业登录、角色、工具权限和审计。",
        "自托管：它运行在你的笔记本或你自己的 Kubernetes 集群上，使用你选择的模型提供商。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker、Suparagent 和 Claude Cowork",
      text: [
        "信息来自各项目的 README 或厂商自己的页面，于 2026 年 11 月 13 日核对，GitHub 星数为当天数据。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)；Grok Bot 见 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "指南：[OpenWorker](/personal-agent/openworker)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["出品方", "CopilotKit", "Andrew Ng（GitHub 上的 andrewyng）", "GitHub 用户 Anil-matcha", "Anthropic"],
        ["开源", "MIT 模板，CopilotKit Intelligence 单独授权；约 11,652 颗星", "MIT；约 19,050 颗星", "Apache 2.0；约 7,050 颗星", "否"],
        ["运行在", "桌面应用（Mac、Windows，Docker 后端）或 Kubernetes；托管版处于抢先体验", "你的电脑（macOS、Windows）；一个小型云服务代理连接器登录", "桌面应用、自托管 Linux 服务器或托管网页应用", "Anthropic 的云端；通过 Claude Desktop 处理本地工作"],
        ["模型", "OpenAI、Claude、Gemini 或开放模型；通过 AG-UI 接入你自己的 agent", "用你自己的密钥接入 OpenAI、Anthropic、Gemini、OpenRouter 等，或本地模型", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "Claude 模型"],
        ["价格", "个人项目免费；Business 每位活跃用户每月最高 $29", "未列出价格；自带模型", "自托管未标明收费；托管套餐每月 $0 到 $99", "Claude 付费套餐；Pro 每月 $20"],
        ["周期性工作", "例行任务，由 routine worker 运行", "定时简报、报告和其他可重复任务", "例行任务，按计划、通过 webhook 或按需运行", "每小时、每天、每周或工作日，在云端"],
        ["审批", "操作前询问；团队版有审计", "默认开启；可选审查模型", "Ask first、Accept edits、Approve for me 或 Plan only", "Manual、Auto 或 Skip"],
        ["任务看板", "未说明", "未说明", "任务看板和日历", "没有 issue 看板；有任务列表和 Scheduled 页面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "工作区里有 Bot，编程 agent 上有 AI 员工。",
      text: [
        "OpenBot 在你托管的工作区里给每个 Bot 一台自己的计算机。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，并设定量化目标。" },
        { title: "把工作放上看板", text: "在共享看板上分派 issue；在工作时间内，心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 OpenBot" },
  mid: {
    title: "想让你已经在用的编程 agent 变成 AI 员工？",
    text: "Crewmark 给你的 Claude Code 或 Codex 会话一个岗位、工作时间、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "OpenBot 常见问题",
    items: [
      {
        q: "OpenBot 是什么？",
        a: "CopilotKit 开源、可自托管的 AI 同事工作区。每个 Bot 都有一台自己的计算机，带浏览器、文件和工具，另有审批和活动记录。它在你的笔记本上以桌面应用运行，或为团队部署在 Kubernetes 上，使用你自带的模型。",
      },
      {
        q: "OpenBot 是 CopilotKit 做的吗？",
        a: "是的。它在 github.com/CopilotKit/OpenBot。它使用 CopilotKit Intelligence，后者和 OpenBot 的 MIT 模板分开授权；它还能通过 AG-UI 接入已有的 agent。",
      },
      {
        q: "OpenBot 免费、开源吗？",
        a: "应用模板采用 MIT 许可证，OpenBot 用于个人项目免费。它使用的 CopilotKit Intelligence 在笔记本上有免费的本地许可证，在 Kubernetes 上有试用或生产许可证。你直接向模型提供商付费。",
      },
      {
        q: "OpenBot for Business 多少钱？",
        a: "按量付费为每位活跃用户每月最高 $29，另加每月模型支出超过 $5,000 部分的 5%；按年付费价格定制。在 Kubernetes 上投入生产使用，还需要评估用途以外的 CopilotKit Intelligence 许可证。",
      },
      {
        q: "OpenBot vs Grok Bot：有什么区别？",
        a: "OpenBot 开源且可自托管：你在笔记本或 Kubernetes 上运行它，自带模型或 agent。和 Grok Bot 的并排对比见 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
      },
      {
        q: "OpenBot 在 GitHub 上的地址是什么？",
        a: "github.com/CopilotKit/OpenBot。仓库创建于 2026 年 8 月 17 日，2026 年 11 月 13 日约有 11,652 颗星。",
      },
    ],
  },
  cta: {
    title: "托管你的 Bot，也给你的编程 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 GitHub 上的 OpenBot README 和 open.bot/pricing 核对；对比信息于同一天取自各产品自己的页面。",
  disclaimer: "Crewmark 是独立产品，与 CopilotKit 无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
