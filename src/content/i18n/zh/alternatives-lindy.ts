import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI 替代品（2026）：免费与开源之选",
    description:
      "Lindy AI 替代方案对比：Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Relevance AI，以及开源的 OpenWorker 和 OpenBot，含免费选项。",
  },
  breadcrumb: "Lindy 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Lindy",
    title: "Lindy AI 替代品：托管 AI 同事、agent 平台和开源助手",
    lead: "Lindy 是一款托管 AI 助手，在你的收件箱、日历、会议和 Slack 之间工作，运行周期性的例行任务，任何会对外产生影响的操作都会先问你。它按额度计费：起步有 $50 免费额度，有效期 7 天，之后每位活跃用户每月 $29.99 起，含 3,000 额度。每月额度不能结转，而且每位活跃用户都要计费，包括只在 Slack 里 @提及 Lindy 的人。下面是 8 个替代品，有托管的也有开源的，附各自的价格。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy 替代品一览",
      text: ["信息来自各厂商自己的页面、文档或 GitHub，于 2026 年 11 月 13 日核对。价格以美元计。本表不是排名。"],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy)（作为参照）",
          "托管 AI 助手，处理收件箱、日历、会议和 Slack",
          "否",
          "7 天内 $50 免费额度；之后每位活跃用户 $29.99/月起，含 3,000 额度",
        ],
        ["[Grok Bot](/alternatives/grok-bot)", "xAI 的托管 AI 队友，每个都有自己的云端计算机", "否", "Premium $30/月"],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Anthropic 在 Claude 应用里处理编程以外知识工作的 agent",
          "否",
          "Claude Pro $20/月，按年付 $17/月",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 在 Microsoft 365 里执行多步骤任务的 agent",
          "否",
          "Microsoft 365 Copilot 许可证，加 Copilot Credits，每个 $0.01",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI 在 ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务",
          "否",
          "Free（$0）和 Go（$8/月）：有限使用，仅限桌面应用；Plus $20/月",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "托管的低代码平台，用于构建 AI agent 和多 agent 团队",
          "否",
          "仅 Enterprise，需联系销售；Free 套餐已停用",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "在你的机器上运行的 AI 同事桌面应用",
          "是，MIT",
          "未列出价格；用你自己的模型密钥或本地模型",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自托管的 AI 同事工作区",
          "是，MIT（使用单独授权的 CopilotKit Intelligence）",
          "个人项目免费；Business 每位活跃用户每月最高 $29",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 员工的 issue 看板，员工以 Claude Code 或 Codex 的形式在你的电脑上运行",
          "是，GPL-3.0",
          "免费（1 个项目，最多 3 名 AI 员工）；Pro $5/月，即将推出",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "来自 xAI、Anthropic、Microsoft 和 OpenAI 的托管 AI 同事",
      text: [
        "和 Lindy 一样，这些都运行在厂商的云端，通过对话接收工作。更多并排对比见 [AI 同事工具](/blog/ai-coworker)。",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot)（xAI）：每个 Bot 都有自己的云端计算机，会登录你的工具，在 Slack 和 Microsoft Teams 里工作，按计划运行例行任务，并互相发消息。现成的 Bot 包括 Sales Outbound、Talent Scout 和 Chief of Staff。它包含在 Premium（$30/月）、Super（$100/月）和 Ultra（$200/月）中，按月计费，超出部分按 token 成本计费。如果你想要几个分工不同的 Bot，包括在 Microsoft Teams 里工作的，选它。见 [Grok Bot 指南](/personal-agent/grok-bot)。",
        "[Claude Cowork](/personal-agent/claude-cowork)（Anthropic）：你描述想要的结果，Claude 就在你的文件、已连接的应用（比如 Gmail 和 Slack）和浏览器里完成调研、文档、带可用公式的电子表格和幻灯片。定时任务在云端每小时、每天、每周或在工作日运行。它随 Claude 付费套餐提供：Pro $20/月（按年付 $17/月）、Max $100、Ultra $200，另有 Team 和 Enterprise 席位。如果你想拿回的是完成的文件，而不是收件箱方面的帮助，选它。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：能发邮件、安排会议、编辑 Word、Excel 和 PowerPoint 文件、在 Teams 里发消息，执行敏感操作前会弹出审批对话框。它需要 Microsoft 365 Copilot 许可证，用量以 Copilot Credits 计费，每个 $0.01。如果你的公司靠 Outlook 和 Teams 运转，选它。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务，有 Slack、Google Drive、SharePoint、邮件、日历和 CRM 的插件，支持定时任务，符合条件的套餐还可由 Gmail、Slack 或 GitHub 触发。Free 和 Go 可在桌面应用中有限使用；Plus（$20/月）起可完整使用。如果你已经在用 ChatGPT，选它。",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "面向团队的 agent 平台：Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai)：托管的低代码平台，你可以构建拥有各自指令、工具和知识的专职 agent，再把它们连接成多 agent 团队（它称之为 AI Workforce），用于销售、客服和运营工作。截至 2026 年 11 月 13 日，它的价格页只列出 Enterprise，需联系销售，文档说 Free 套餐已停用。如果你的公司想要几个无代码 agent，外加一支驻场部署团队，选它。见 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) 和 [Relevance AI 价格](/pricing/relevance-ai)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "开源的 Lindy 替代品",
      text: ["两者都运行在你自己的电脑或服务器上，使用你选择的模型，都不按额度计费：你直接向模型提供商付费。"],
      points: [
        "[OpenWorker](/personal-agent/openworker)：采用 MIT 许可证的 AI 同事桌面应用，支持 macOS 和 Windows，处于公开测试阶段。它可以处理 GitHub、Slack、邮件和日历；你在 Slack 里 @提及它时，任务在你的桌面上运行，答复会回到讨论串里。你可以安排早间简报和周报；定时运行永远不会自己批准自己的操作，它们的请求会在收件箱里等待。可以用 OpenAI、Anthropic、Google Gemini 或 OpenRouter 的密钥，也可以用本地模型。如果你想要 Lindy 式的办公帮手，同时把密钥留在自己的机器上，选它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自托管的工作区，每个 Bot 都有自己的浏览器、文件、工具、例行任务、记忆和审批。它作为 Mac 和 Windows 桌面应用运行，团队可部署在 Kubernetes 上，前端包括 Slack 和 Teams 等（部分处于抢先体验阶段）。个人项目免费；OpenBot for Business 每位活跃用户每月最高 $29，另加每月模型支出超过 $5,000 部分的 5%。如果你想在自己的基础设施上为团队托管 AI 同事，选它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Lindy 替代品",
      steps: [
        {
          title: "算算谁会用它",
          text: "Lindy 按每位活跃用户计费，包括只在 Slack 里 @提及它的人。Grok Bot 列出的个人套餐 $30/月起；Copilot Cowork 需要 Microsoft 365 Copilot 许可证，并按 Copilot Credit 计费；OpenWorker 未列出价格，OpenBot 个人项目免费。",
        },
        {
          title: "决定怎么为用量付费",
          text: "Lindy 的每月额度不能结转，加购是每 1,000 额度 $10。Grok Bot 以及 Claude 和 ChatGPT 的套餐都是带用量上限的订阅。用 OpenWorker 和 OpenBot，你直接向模型提供商付费。",
        },
        {
          title: "对上你工作的地方",
          text: "Slack 和 Microsoft Teams：Grok Bot。Microsoft 365：Copilot Cowork。要交回文档和电子表格：Claude Cowork 或 ChatGPT Work。用于销售或客服的多个 agent：Relevance AI。",
        },
        {
          title: "选择托管还是自托管",
          text: "Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Relevance AI 都是托管的。OpenWorker 运行在你的桌面上，OpenBot 运行在你的笔记本电脑或你自己的 Kubernetes 集群上。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Crewmark：在你已经付费的 Claude Code 或 Codex 上运行 AI 员工",
      text: [
        "Crewmark 不是 Lindy 那样的收件箱助手。它是给 AI 员工团队用的 issue 跟踪工具：每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue，并随时更新 issue 的状态。Crewmark 不对用量计费：agent 跑在你已经付费的 Claude 或 ChatGPT 订阅上，而且电脑需要保持开机，心跳才能运行。",
        "Free 套餐包含 1 个项目、最多 3 名 AI 员工。Pro（$5/月）和 Team（$10/月）即将推出；计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。它是开源的（GPL-3.0）。详见 [Crewmark 价格](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "给每名员工设定岗位、目标和项目，比如 SEO 专员或数据分析师。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "把重复的工作放上看板",
          text: "让 issue 每天、每周或每月重复；到期时 issue 会重新打开，并通知对应的员工。需要审查或权限的 agent 会把 issue 标为“需处理”并等待。",
        },
        {
          title: "设定工作时间",
          text: "在工作时间内，心跳每隔 15 分钟到 24 小时唤醒一次每名员工。带设置方法的工作见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "不想按额度付费？",
    text: "Crewmark 在你已有的 Claude Code 或 Codex 订阅上运行 AI 员工。最多 3 名员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "Lindy 替代品常见问题",
    items: [
      {
        q: "有免费的 Lindy 替代品吗？",
        a: "有。ChatGPT Free（$0）可以在桌面应用中有限使用 ChatGPT Work。OpenWorker 未列出价格，用你自己的模型密钥或本地模型运行；OpenBot 个人项目免费。Crewmark 的 Free 套餐包含 1 个项目、最多 3 名 AI 员工。Lindy 本身起步有 $50 额度，有效期 7 天，每位团队成员一次。",
      },
      {
        q: "有开源的 Lindy 替代品吗？",
        a: "OpenWorker（MIT）和 OpenBot（基于单独授权的 CopilotKit Intelligence、采用 MIT 的应用模板）是开源的，Crewmark（GPL-3.0）也是。Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Relevance AI 都不开源。",
      },
      {
        q: "Lindy vs Relevance AI：有什么区别？",
        a: "Lindy 是一个处理收件箱、日历、会议和 Slack 的托管助手，按每位活跃用户以额度计费。Relevance AI 是一个低代码平台，用来构建许多专职 agent，并把它们连接成 Workforce；它的价格页只列出 Enterprise，需联系销售。见 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      },
      {
        q: "哪个 Lindy 替代品能在 Slack 里用？",
        a: "Grok Bot 像同事一样在 Slack 和 Microsoft Teams 里工作。用 OpenWorker 时，你在 Slack 里 @提及它，它就在讨论串里回复。OpenBot 有 Slack 前端（部分前端处于抢先体验阶段），ChatGPT Work 有 Slack 插件，符合条件的套餐还支持 Slack 触发，Claude Cowork 有 Slack 连接器。",
      },
      {
        q: "有在我自己电脑上运行的 Lindy 替代品吗？",
        a: "OpenWorker 在你的机器上运行 agent 循环，并把对话和模型密钥都留在本地。OpenBot 作为 Mac 和 Windows 桌面应用运行，或运行在你自己的 Kubernetes 集群上。Crewmark 的 agent 在你电脑上的 Claude Code 或 Codex 里运行。",
      },
      {
        q: "为什么有人在找 Lindy 替代品？",
        a: "因为 Lindy 自己说明的这些限制：每月额度不能结转，额度用完后，Lindy 会暂停消耗额度的操作，直到下个周期或你加购（每 1,000 额度 $10）。每位活跃用户都要计费，包括只在 Slack 里 @提及它的人。免费额度的有效期为 7 天，而在 Microsoft Teams 里使用 Lindy 仍是即将推出的功能。",
      },
    ],
  },
  cta: {
    title: "给你的 agent 一份工作，而不是一笔额度余额。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品自己的页面、文档、价格和 GitHub 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Lindy、xAI、Anthropic、Microsoft、OpenAI、Relevance AI、CopilotKit 以及 OpenWorker 的开发者均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
