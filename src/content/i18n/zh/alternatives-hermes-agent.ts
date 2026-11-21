import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 替代品（2026）：开源与托管之选",
    description:
      "Hermes Agent 替代方案对比：OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code、Grok Bot 和 Crewmark，附许可证、价格和 Windows 支持情况。",
  },
  breadcrumb: "Hermes Agent 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Nous Research Hermes Agent",
    title: "Hermes Agent 替代品：开源 agent、编程 agent 和托管 Bot",
    lead: "Hermes Agent 是 Nous Research 的开源（MIT）个人 AI agent。你可以在终端、桌面应用或聊天应用里使用它；它会根据经验编写技能，保存自己的记忆，并用内置的 cron 调度器运行例行任务。它由你自己在机器或服务器上运行；如果订阅了付费的 Nous Portal 套餐，也可以由它为你托管一个 agent。要在 Hermes Agent 里使用 Claude 订阅，需要 Claude Max 加上购买的额外用量；Claude Pro 订阅用户需要使用 API key。下面是七个替代品，附许可证、价格以及各自支持的平台，包括 Windows。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 替代品一览",
      text: [
        "信息来自各产品的 README、文档和价格页，于 2026 年 11 月 13 日核对。价格以美元计。Hermes Agent 本身免费，另付模型提供商费用；Nous Portal 套餐为每月 Plus $20、Super $100 和 Ultra $200。详见 [Hermes Agent 价格](/pricing/hermes-agent)。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "运行在你自己电脑上的个人 AI 助手，在聊天应用里回复你",
          "是（MIT）",
          "免费；没有付费档或托管服务；你向模型提供商付费",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "支持 200+ 家提供商模型（包括本地模型）的编程 agent，提供终端 UI、桌面应用、网页应用和 SDK",
          "是（MIT）",
          "免费，并提供免费模型（有每日请求限额）；OpenCode Go 每月 $10",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "一款桌面应用，“An AI coworker for your everyday work”（处理日常工作的 AI 同事），另有用于构建 agent 应用的 Harness SDK",
          "是（MIT）",
          "未列出价格；用你自己的模型密钥或本地模型",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自托管的 AI 同事工作区，每个 Bot 都有自己的浏览器、文件和工具",
          "是（应用模板采用 MIT；使用单独授权的 CopilotKit Intelligence）",
          "个人项目免费；Business 每位活跃用户每月最高 $29",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "Anthropic 的编程 agent，可在终端、IDE 扩展、桌面应用、网页和移动端使用",
          "否",
          "Claude 付费套餐，Pro 每月 $20 起（按年付每月 $17）",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "xAI 的托管 AI 队友：每个 Bot 都在云端拥有一台自己的计算机",
          "否",
          "Premium 每月 $30，按月计费",
        ],
        [
          "[Crewmark](/ai-employees)",
          "给 AI 员工团队用的 issue 跟踪工具，每名员工都是你电脑上的一个 Claude Code 或 Codex 对话，按心跳醒来",
          "是（GPL-3.0）",
          "免费（1 个项目，最多 3 名 AI 员工）；Pro 每月 $5，即将推出；agent 用量付给你的 agent 提供商",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "适用于 Windows 的 Hermes Agent 替代品",
      text: [
        "Hermes Agent 本身可在原生 Windows（PowerShell）和 WSL2 上运行，桌面应用支持 Windows 10 和 11。下面是各替代品列出的支持情况。",
      ],
      headers: ["产品", "Windows", "其他平台"],
      rows: [
        [
          "Hermes Agent",
          "原生 Windows（PowerShell）和 WSL2；Windows 10/11 桌面应用（Microsoft Store 或 .exe）",
          "Linux、macOS，以及通过 Termux 运行的 Android；macOS 12+ 和 Linux 桌面应用",
        ],
        ["OpenClaw", "Windows（PowerShell）和 WSL2 安装程序；原生 Windows 应用", "macOS 和 Linux；macOS、iOS、Android 和 Linux 应用"],
        [
          "OpenCode",
          "Windows CLI 二进制文件（x64、ARM64）；桌面应用，标为 beta。不支持 Windows 包管理器",
          "macOS 和 Linux 的 CLI 与桌面应用；iPhone 应用通过 TestFlight 提供",
        ],
        ["OpenWorker", "Windows 10/11 x64；安装包尚未进行代码签名，所以 SmartScreen 会发出警告", "macOS 12+（Apple 芯片）；未列出 Linux 下载"],
        ["OpenBot", "Windows 桌面应用，后端使用 Docker", "macOS 桌面应用；团队用 Kubernetes"],
        [
          "Claude Code",
          "CLI 支持 Windows 10 1809+ 或 Windows Server 2019+；Windows 桌面应用（x64 和 ARM64）",
          "macOS、Linux、网页、iOS 和 Android",
        ],
        [
          "Grok Bot",
          "x.ai 的指南列出了 Mac、Windows、Linux 和手机；每个 Bot 都在自己的云端计算机上工作",
          "x.ai/bot 上提供 macOS（Apple 芯片）下载；iOS",
        ],
        ["Crewmark", "Windows 上的 `crewmark` CLI", "macOS 和 Linux 上的 CLI；网页应用"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "其他开源个人 agent",
      text: ["和 Hermes Agent 一样，这些都运行在你掌控的硬件上，使用你选择的模型。"],
      points: [
        "OpenClaw：采用 MIT 许可证的助手，作为 Gateway 运行在你自己的电脑上，在 WhatsApp、Telegram、Slack、Discord、iMessage 等聊天应用里回复你。一个 Gateway 上可以运行多个 agent，内置 Automations 调度器，没有付费档或托管服务。它通过 API key 使用 Claude，或复用同一台主机上的 Claude Code 登录。如果你想要一个在现有聊天应用里就能发消息的助手，并且可以更换模型提供商，选它。对比见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)；更多见 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "OpenWorker：Andrew Ng（吴恩达）GitHub 账号下一款采用 MIT 许可证的桌面应用，macOS 和 Windows 版处于公开测试阶段。操作默认需要审批，每次工具调用都有记录，你可以安排早间简报和周报；你也可以在 Slack 里提及它，它会在讨论串里回复。如果你想让 agent 跑在自己的机器上，用你自己的模型密钥或本地模型，并自己决定哪些操作需要审批，选它。指南：[OpenWorker](/personal-agent/openworker)。",
        "OpenBot：CopilotKit 可自托管的 AI 同事工作区。每个 Bot 都有自己的计算机（浏览器、文件、工具）、例行任务、记忆、审批和活动日志。应用模板采用 MIT；它使用单独授权的 CopilotKit Intelligence（在笔记本电脑上免费，在 Kubernetes 上用于生产需要许可证）。如果你想要可以自托管、可以定制的 AI 同事，使用你自己的模型或基于其他技术栈构建的 agent，选它。指南：[OpenBot](/personal-agent/openbot)。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "编程 agent",
      text: [
        "如果你交给 Hermes Agent 的大多是代码，这些工具是专门为此做的。对比：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)。",
      ],
      points: [
        "OpenCode：采用 MIT 许可证的编程 agent，支持 200+ 家提供商的模型，包括本地模型。免费模型无需账号（有每日请求限额），OpenCode Go 每月 $10，你也可以用 ChatGPT Plus 或 Pro、GitHub Copilot 登录，或者自带 API key。如果你想把自定义 agent 和 subagent 以文件形式定义在仓库里，并按操作设置权限规则，选它。更多见 [OpenCode 替代品](/blog/opencode-alternatives)。",
        "Claude Code：Anthropic 的编程 agent，有 subagent、实验性的 agent teams，以及在云端运行的定时任务。它不开源，随 Claude 付费套餐提供，Pro 每月 $20 起。如果你已经在为 Claude 套餐付费，选它：Hermes Agent 只有在 Max 套餐加上购买的额外用量时才能使用 Claude 订阅。见 [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "一个托管选项",
      points: [
        "Grok Bot：xAI 的托管 AI 队友。每个 Bot 在云端都有自己的计算机，合上笔记本电脑后仍会继续工作；Bot 会登录你的工具，在 Slack、Microsoft Teams 和视频通话中工作，按计划运行例行任务，并互相发消息。它不开源，套餐从 Premium 起，每月 $30。如果你的团队想要在现有应用里工作、又不用自己运行服务器的 Bot，选它。见 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Grok Bot 替代品](/alternatives/grok-bot)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Hermes Agent 替代品",
      steps: [
        {
          title: "想继续用开源？",
          text: "OpenClaw、OpenCode 和 OpenWorker 采用 MIT；OpenBot 的应用模板采用 MIT，引擎单独授权；Crewmark 采用 GPL-3.0。Claude Code 和 Grok Bot 不开源。",
        },
        {
          title: "用 Windows？",
          text: "Hermes Agent 本身就能在原生 Windows 上运行。替代品中，OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code 和 Crewmark CLI 都列出了 Windows 支持；版本见上表。",
        },
        {
          title: "已经在为 Claude 付费？",
          text: "Hermes Agent 只有在 Max 套餐加上购买的额外用量时才能使用 Claude 订阅。OpenClaw 可以复用同一台主机上的 Claude Code 登录，Claude Code 随 Claude 付费套餐提供，Crewmark 用你自己的订阅运行 Claude Code。",
        },
        {
          title: "不想运行服务器？",
          text: "Grok Bot 由 xAI 托管。Hermes Agent 的 Nous Portal 付费套餐包含一个云端托管的 agent，CopilotKit 也在抢先体验中托管 OpenBot。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "个人 agent 服务于你，一支 AI 员工团队服务于你的代码仓库。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和项目。它在工作时间内按心跳醒来，从共享看板上领取 issue；需要审查或权限时，它会把 issue 标为“需处理”并在那里提问。agent 之间通过 issue 协作：互相分配 issue、评论和 @提及。",
        "它以 GPL-3.0 开源，1 个项目、最多 3 名 AI 员工免费。你照常向 agent 提供商付费，而且电脑需要保持开机，心跳才能运行。套餐见[价格页](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员，写下它的 KPI 和项目。",
        },
        {
          title: "把工作放上看板",
          text: "把 issue 分配给员工或人，并让常规的 issue 每天、每周或每月重复。",
        },
        {
          title: "设定工作时间",
          text: "选择工作时间，以及 15 分钟到 24 小时之间的心跳间隔。带设置方法的工作见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "让你的 Claude Code 或 Codex 按计划干活",
    text: "Crewmark 在工作时间内按心跳唤醒你的 agent，从共享看板上交给它下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "Hermes Agent 替代品常见问题",
    items: [
      {
        q: "Hermes Agent 有哪些开源替代品？",
        a: "OpenClaw、OpenCode 和 OpenWorker 采用 MIT 许可证。OpenBot 的应用模板采用 MIT，并使用单独授权的 CopilotKit Intelligence。Crewmark 以 GPL-3.0 开源。",
      },
      {
        q: "有适用于 Windows 的 Hermes Agent 替代品吗？",
        a: "有好几个。OpenClaw 有 Windows 安装程序和原生 Windows 应用；OpenCode 有 Windows CLI 二进制文件和处于 beta 的桌面应用；OpenWorker 可在 Windows 10/11 x64 上运行（尚未代码签名）；OpenBot 有 Windows 桌面应用；Claude Code 可在 Windows 10 1809 或更高版本上运行。Hermes Agent 本身也能在原生 Windows 上运行。",
      },
      {
        q: "Hermes Agent vs OpenClaw：该用哪个？",
        a: "两者都是采用 MIT 许可证、由你自己运行、可从聊天应用联系的个人 agent。Hermes Agent 侧重编写和改进自己的技能与记忆，并有可选的 Nous Portal 付费套餐，包含一个云端托管的 agent。OpenClaw 作为本地 Gateway 运行，没有付费档或托管服务。见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      },
      {
        q: "Hermes Agent 免费吗？",
        a: "agent 本身以 MIT 许可证免费提供，你向模型提供商付费。Nous Portal 是可选的：Free 为 $0（按量付费，仅限免费模型），Plus 每月 $20，Super $100，Ultra $200。更多见 [Hermes Agent 价格](/pricing/hermes-agent)。",
      },
      {
        q: "我能在 Hermes Agent 或其替代品里用 Claude 订阅吗？",
        a: "Hermes Agent 只能在 Claude Max 加上购买的额外用量时使用；Claude Pro 订阅用户需要 API key。OpenClaw 可以复用同一台主机上的 Claude Code 登录。Claude Code 包含在每个 Claude 付费套餐中，Crewmark 用你自己的订阅运行 Claude Code。",
      },
      {
        q: "有托管的 Hermes Agent 替代品吗？",
        a: "Grok Bot 由 xAI 托管，每个 Bot 一台云端计算机，每月 $30 起。Hermes Agent 自己的 Nous Portal 付费套餐包含一个云端托管的 agent，CopilotKit 也在抢先体验中托管 OpenBot。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 岗位和一块看板。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品的 README、文档和价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Nous Research 及本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
