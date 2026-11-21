import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker：吴恩达的开源 AI 同事，设置与 SDK",
    description:
      "OpenWorker 是 Andrew Ng（吴恩达）在 GitHub 上的开源 AI 同事：一款用你自己的模型运行、带审批和定时任务的桌面应用，另有 Harness SDK。",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · 开源",
    title: "OpenWorker：Andrew Ng（吴恩达）的开源 AI 同事，以及怎么设置",
    lead: "OpenWorker 是一款开源桌面应用，它的 README 称它为“an AI coworker for your everyday work”（处理日常工作的 AI 同事），另外还有一个 TypeScript 和 Rust 的 Harness SDK，用来构建你自己的 agent 应用。仓库在 Andrew Ng（吴恩达）的 GitHub 账号下，采用 MIT 许可证，2026 年 11 月 13 日约有 19,050 颗星。这款应用在你的机器上运行，用你自己的模型密钥或本地模型，行动前先征求同意，并记录每一次工具调用。本文讲它能做什么、花多少钱、怎么设置、审批怎么运作，以及它和 OpenBot、Suparagent、Claude Cowork 的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenWorker 是什么",
      points: [
        "一款处理日常工作的桌面应用：调研、写作、审查代码，以及在你的各种工具里执行任务。目前处于公开测试阶段。",
        "在你的机器上运行：agent 循环、对话、连接器令牌和模型密钥都留在本地。唯一的云端部分是一个小服务，负责代理连接器的 OAuth 登录。",
        "模型由你选：用你自己的密钥接入 OpenAI、Anthropic、Google Gemini、OpenRouter 等提供商，或者通过 Ollama、LM Studio、llama.cpp 或 vLLM 使用本地模型。它的 agent 引擎用 Python 编写，基于 Andrew Ng 的库 aisuite。",
        "专门的 AI 同事带有完成某一项工作所需的工具和指令；最先推出的是安全方向的 AI 同事。",
        "连接器：GitHub、Slack、邮件和日历等 25 个以上，另支持 MCP。在 Slack 里 @OpenWorker，任务就会在你的桌面上运行，回复出现在讨论串里。",
        "定时：早间简报、周报和其他可重复的任务按计划运行，并留下运行记录供你查看。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenWorker 的 GitHub 仓库和 Harness SDK",
      text: [
        `代码在 [github.com/andrewyng/openworker](${repo})。仓库创建于 2026 年 7 月 20 日，MIT LICENSE 中写明的版权所有者是 Andrew Ng，2026 年 11 月 13 日约有 19,050 颗星。`,
      ],
      points: [
        "Harness SDK：一个 TypeScript 和 Rust 的 SDK，在同一个仓库里，用来构建你自己的 agent 桌面或网页应用。",
        "子 agent 和团队：SDK 两者都支持；桌面应用是否支持没有说明。",
        "部署：基于 SDK 构建的应用可以在 AWS、Azure 或 Google Cloud 的 Kubernetes 上运行。",
        "贡献：维护者表示，对于已在开发中或不在计划内的功能，他们可能不接受 pull request。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker 价格和许可证",
      text: [
        "2026 年 11 月 13 日核对时，README 和 openworker.com 都没有列出价格。你自带模型密钥，由你的提供商计费，或者运行本地模型。",
      ],
      headers: ["部分", "你要付什么"],
      rows: [
        ["桌面应用（公开测试）", "未列出价格；MIT 许可证"],
        ["Harness SDK（TypeScript、Rust）", "未列出价格；MIT 许可证，同一个仓库"],
        ["云端模型：OpenAI、Anthropic、Google Gemini、OpenRouter 或其他提供商", "由该提供商计费，用你自己的密钥"],
        ["本地模型：Ollama、LM Studio、llama.cpp 或 vLLM", "在你自己的机器上运行"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 OpenWorker",
      steps: [
        {
          title: "下载桌面应用",
          text: "支持 Apple 芯片上的 macOS 12 或更高版本（已签名并经过公证），以及 x64 上的 Windows 10 或 11。Windows 版本还没有代码签名，所以 SmartScreen 会显示警告。没有列出 Linux 下载。",
        },
        {
          title: "添加模型",
          text: "输入你自己的 OpenAI、Anthropic、Google Gemini、OpenRouter 或其他提供商的密钥，或者通过 Ollama、LM Studio、llama.cpp 或 vLLM 使用本地模型。密钥留在你的机器上。",
        },
        {
          title: "连接你的工具",
          text: "添加 GitHub、Slack、邮件和日历等连接器，或 MCP 服务器。登录通过一个代理 OAuth 的小型云服务完成；令牌留在你的机器上。",
        },
        {
          title: "决定哪些事要你点头",
          text: "默认情况下，操作都要等审批。把一次性的批准变成长期规则和允许列表，或者开启自动批准，由一个审查模型来决定，拿不准时再交给你。",
        },
        {
          title: "安排重复性工作",
          text: "设置早间简报、周报和其他可重复的任务。无人值守的运行从不自己批准自己：它们的问题会在收件箱里等你，每次运行都会留下记录供你查看。",
        },
      ],
      source: { label: "来源：GitHub 上的 OpenWorker README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenWorker 怎么让你保持掌控：审批、审查和审计",
      points: [
        "默认需要审批：操作要等你点头，一组危险操作始终由人来决定。",
        "逐步积累的规则：一次性的批准可以变成长期规则或允许列表条目。",
        "可选的自动批准：由审查模型处理审批，拿不准时交给你，并带有熔断机制。",
        "审计记录：每一次工具调用都会连同它是怎么被批准的一起记录下来，应用还会标出数据会“Leaves this Mac”（离开这台 Mac）的操作。",
        "沙盒：命令可以在 NVIDIA OpenShell 沙盒或内置的 macOS 或 Windows 沙盒中运行。",
        "定时运行从不自己批准自己；需要你处理的事情会在收件箱里等你。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot、Suparagent 和 Claude Cowork",
      text: [
        "信息来自各项目的 README 或厂商自己的页面，于 2026 年 11 月 13 日核对，GitHub 星数为当天数据。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)。",
        "指南：[OpenBot](/personal-agent/openbot)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["出品方", "Andrew Ng（GitHub 上的 andrewyng）", "CopilotKit", "GitHub 用户 Anil-matcha", "Anthropic"],
        ["开源", "MIT；约 19,050 颗星", "MIT 模板，CopilotKit Intelligence 单独授权；约 11,652 颗星", "Apache 2.0；约 7,050 颗星", "否"],
        ["运行在", "你的电脑（macOS、Windows）；一个小型云服务代理连接器登录", "桌面应用（Mac、Windows，Docker 后端）或 Kubernetes；托管版处于抢先体验", "桌面应用、自托管 Linux 服务器或托管网页应用", "Anthropic 的云端；通过 Claude Desktop 处理本地工作"],
        ["模型", "用你自己的密钥接入 OpenAI、Anthropic、Gemini、OpenRouter 等，或本地模型", "OpenAI、Claude、Gemini 或开放模型；通过 AG-UI 接入你自己的 agent", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "Claude 模型"],
        ["价格", "未列出价格；自带模型", "个人项目免费；Business 每位活跃用户每月最高 $29", "自托管未标明收费；托管套餐每月 $0 到 $99", "Claude 付费套餐；Pro 每月 $20"],
        ["周期性工作", "定时简报、报告和其他可重复任务", "例行任务，由 routine worker 运行", "例行任务，按计划、通过 webhook 或按需运行", "每小时、每天、每周或工作日，在云端"],
        ["审批", "默认开启；可选审查模型", "操作前询问；团队版有审计", "Ask first、Accept edits、Approve for me 或 Plan only", "Manual、Auto 或 Skip"],
        ["任务看板", "未说明", "未说明", "任务看板和日历", "没有 issue 看板；有任务列表和 Scheduled 页面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "桌面上的一个同事，看板上的一群 AI 员工。",
      text: [
        "OpenWorker 是你在自己机器上运行的 AI 同事。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue，让周期性的工程、SEO 和营销工作有人接手、有人跟踪。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，并设定量化目标。" },
        { title: "把工作放上看板", text: "在共享看板上分派 issue；在工作时间内，心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 OpenWorker" },
  mid: {
    title: "想要从看板上领 issue 的 AI 员工？",
    text: "Crewmark 给你的 Claude Code 或 Codex 会话一个岗位、工作时间、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "OpenWorker 常见问题",
    items: [
      {
        q: "OpenWorker 是什么？",
        a: "一款开源桌面应用，它的 README 称它为“an AI coworker for your everyday work”（处理日常工作的 AI 同事），另外还有一个用来构建你自己的 agent 应用的 Harness SDK。它在你的机器上运行，用你自己的模型密钥或本地模型，行动前请你审批，还能按计划运行任务。桌面应用处于公开测试阶段。",
      },
      {
        q: "OpenWorker 是 Andrew Ng（吴恩达）做的吗？",
        a: "仓库是 github.com/andrewyng/openworker，在 Andrew Ng 的 GitHub 账号下，LICENSE 中写明的版权所有者是 Andrew Ng。应用的引擎基于他的库 aisuite。openworker.com 的页脚写着“© 2026 OpenWorker”。",
      },
      {
        q: "OpenWorker 免费、开源吗？",
        a: "它以 MIT 许可证开源，README 和 openworker.com 都没有列出价格。你自带模型密钥，由你的提供商计费，或者通过 Ollama、LM Studio、llama.cpp 或 vLLM 运行本地模型。",
      },
      {
        q: "OpenWorker Harness SDK 是什么？",
        a: "一个 TypeScript 和 Rust 的 SDK，在同一个仓库里，用来构建你自己的 agent 桌面或网页应用。它支持子 agent 和团队，基于它构建的应用可以在 AWS、Azure 或 Google Cloud 的 Kubernetes 上运行。",
      },
      {
        q: "OpenWorker 支持 Mac、Windows 和 Linux 吗？",
        a: "它支持 Apple 芯片上的 macOS 12 或更高版本，以及 x64 上的 Windows 10 或 11。Windows 版本还没有代码签名，所以 SmartScreen 会显示警告。没有列出 Linux 下载。",
      },
      {
        q: "OpenWorker 有哪些局限？",
        a: "桌面应用处于公开测试阶段，Windows 版本还没有代码签名，维护者表示，对于已在开发中或不在计划内的功能，他们可能不接受 pull request。",
      },
    ],
  },
  cta: {
    title: "桌面上留一个同事，也给你的编程 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 GitHub 上的 OpenWorker README 和 openworker.com 核对；对比信息于同一天取自各产品自己的页面。",
  disclaimer:
    "Crewmark 是独立产品，与 Andrew Ng 和 OpenWorker 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
