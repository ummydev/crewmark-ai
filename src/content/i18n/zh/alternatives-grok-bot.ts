import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 替代品（2026）：开源、免费与托管之选",
    description:
      "Grok Bot 替代方案对比：Claude Cowork、Copilot Cowork、ChatGPT Work、Lindy、OpenBot、OpenWorker、Hermes Agent 和 Crewmark，按许可证和价格比较。",
  },
  breadcrumb: "Grok Bot 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · xAI Grok Bot",
    title: "Grok Bot 替代品：开源、免费和托管的 AI 队友",
    lead: "Grok Bot 是 xAI 推出的一组托管“AI 队友”：每个 Bot 都在云端拥有一台自己的计算机，会登录你的工具和应用，在 Slack 和 Microsoft Teams 里工作，运行例行任务，并互相交接工作。它于 2026 年 8 月 11 日推出 beta 版，现已结束 beta。它不开源，套餐从每月 $30 的 Premium 起，Teams 和 Enterprise 需联系销售。下面是八个替代品，从 Claude、ChatGPT 和 Microsoft 365 里的 AI 同事，到 GitHub 上的开源项目，附许可证、价格和各自适合谁。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot 替代品一览",
      text: [
        "信息来自各产品的官网、文档和价格页，于 2026 年 11 月 13 日核对。价格以美元计。Grok Bot：Premium 每月 $30、Super $100、Ultra $200，按月计费，含每周用量，超出部分按 token 成本计费。更多见我们的 [Grok Bot 指南](/personal-agent/grok-bot)。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Anthropic 在 Claude 应用里处理编程以外工作的 agent：调研、文档、电子表格和幻灯片",
          "否",
          "Claude 付费套餐，Pro 每月 $20 起（按年付每月 $17）；Free 不含",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 Copilot 里的一个 agent，跨 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 执行多步骤任务",
          "否",
          "Microsoft 365 Copilot 许可证，加 Copilot Credits，每个 $0.01，按量付费，按月计费",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务，比如演示文稿、电子表格和分析",
          "否",
          "Free（$0）和 Go（每月 $8）只能在桌面应用中有限使用；Plus 每月 $20 起可完整使用",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "托管助手，处理收件箱、日历、会议和跟进事项，在 Slack 中与团队共享",
          "否",
          "免费：7 天内 $50 额度；每位活跃用户每月 $29.99，含 3,000 额度",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "CopilotKit 可自托管的 AI 同事工作区，每个 Bot 都有自己的浏览器、文件和工具",
          "是（应用模板采用 MIT；使用单独授权的 CopilotKit Intelligence）",
          "个人项目免费；Business 每位活跃用户每月最高 $29",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "一款桌面应用，“An AI coworker for your everyday work”（处理日常工作的 AI 同事），在你的机器上运行，带审批和审计记录",
          "是（MIT）",
          "未列出价格；用你自己的模型密钥或本地模型",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "Nous Research 的个人 agent，其中的 Bot 有各自的模型和例行任务，并互相发消息",
          "是（MIT）",
          "agent 免费，另付模型提供商费用；可选 Nous Portal Plus 每月 $20",
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
      kind: "text",
      id: "big-vendors",
      title: "来自 Anthropic、Microsoft 和 OpenAI 的 AI 同事",
      text: [
        "和 Grok Bot 一样是托管的，而且包含在许多团队已有的套餐里。三者的对比见 [AI 同事工具](/blog/ai-coworker)。",
      ],
      points: [
        "Claude Cowork：Anthropic 面向知识工作的 agent。你描述想要的结果，它就在你的文件、已连接的应用和浏览器里完成调研、文档、电子表格和幻灯片。任务在 Anthropic 的云端运行，合上笔记本电脑也会继续，定时任务可以每小时、每天、每周或在工作日运行。如果你已经在为 Claude 付费，想让多步骤的工作以文件形式交回给你，选它。见 [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) 和 [Claude Cowork 替代品](/alternatives/claude-cowork)。",
        "Copilot Cowork：Microsoft 365 Copilot 里的一个 agent，能发邮件、安排会议、编辑 Word、Excel 和 PowerPoint 文件、在 Teams 里发消息，执行敏感操作前会弹出审批对话框。它的模型选择器包含 GPT、Claude 和 Grok 模型，视租户设置而定。如果你的工作在 Outlook、Teams、OneDrive 和 SharePoint 里，选它。指南：[Copilot Cowork](/personal-agent/copilot-cowork)。",
        "ChatGPT Work：ChatGPT 里的 Work 模式，会规划任务，使用你的文件、插件、网页、浏览器和代码，最后交回一份待你审阅的成果。它和 Codex 共享用量上限；Plus（每月 $20）和 Pro（每月 $100 起）可在桌面端、网页端和移动端使用。如果任务有明确的结果，又涉及多个来源或步骤，选它。指南：[ChatGPT Work](/personal-agent/chatgpt-work)。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "处理办公事务的托管助手",
      points: [
        "Lindy：一个共享的助手，而不是多个 Bot。它处理收件箱、日历、会议、调研和跟进事项，你可以在 Slack、邮件、iMessage、电话以及 Gmail 里的 Chrome 扩展中使用它。任何会对外产生影响的操作，比如发邮件，都会等你审批，Routines 按计划或由事件触发运行。每位活跃用户都占一个付费席位，包括只在 Slack 里 @提及它的人。如果你的团队想要一个在 Slack 里 @ 一下就能做报告、调研和更新 CRM 的助手，选它。指南：[Lindy](/personal-agent/lindy)；更多见 [Lindy 替代品](/alternatives/lindy)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "GitHub 上的开源 Grok Bot 替代品",
      text: ["这些由你自己运行，并自带模型密钥。星数取自 2026 年 11 月 13 日的 GitHub。"],
      points: [
        "OpenBot（`github.com/CopilotKit/OpenBot`，11,652 颗星）：和 Grok Bot 一样，每个 Bot 都有一台自己的计算机，带浏览器、文件和工具，还有例行任务、审批和活动日志。它作为 Mac 和 Windows 桌面应用运行，团队可部署在 Kubernetes 上，并通过 AG-UI 接入你自己的 agent。如果你想要可以自托管、可以定制、采用 MIT 许可证的 AI 同事，选它。见 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "OpenWorker（`github.com/andrewyng/openworker`，19,050 颗星）：一款适用于 macOS 和 Windows 的桌面应用，处于公开测试阶段。操作默认需要审批，每次工具调用都有记录，定时任务可以做早间简报和周报这类事，你也可以在 Slack 里提及它，在讨论串里收到回复。如果你想让 agent 跑在自己的机器上，包括使用本地模型，选它。指南：[OpenWorker](/personal-agent/openworker)。",
        "Hermes Agent（`github.com/NousResearch/hermes-agent`，262,923 颗星）：Nous Research 的个人 agent。它的 Bot Mode 把一个个 profile 变成具名的 Bot，每个都有自己的对话、角色、模型、记忆、技能和头像，并直接互相发消息。它可以在 Telegram、Discord、Slack、WhatsApp、Signal 和邮件中回复。如果你想在自己的机器或服务器上运行几个专职 Bot，选它。见 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Grok Bot 替代品",
      steps: [
        {
          title: "从你已经付费的产品出发",
          text: "Claude 付费套餐包含 Claude Cowork；ChatGPT 套餐包含 Work（Free 和 Go 有使用限制）；Copilot Cowork 需要 Microsoft 365 Copilot 许可证外加 Copilot Credits。",
        },
        {
          title: "决定它在哪里运行",
          text: "Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Lindy 运行在厂商的云端。OpenWorker 运行在你的机器上，OpenBot 在你的笔记本电脑或 Kubernetes 上，Hermes Agent 在你的机器或服务器上。",
        },
        {
          title: "看看团队在哪里沟通",
          text: "Grok Bot 在 Slack、Microsoft Teams 和通话中工作。在 Slack 里，你还可以用 Lindy、OpenWorker、Hermes Agent，以及 Claude Cowork 和 ChatGPT Work 的连接器或插件。Copilot Cowork 在 Outlook 和 Teams 中工作。",
        },
        {
          title: "看它行动前怎么征求同意",
          text: "需要审批时 Grok Bot 会来确认，并可以把敏感操作交给 Auto Review。Lindy 在任何会对外产生影响的操作前都会等你审批，OpenWorker 默认对操作设审批关卡，Claude Cowork 有 Manual 和 Auto 两种模式，Copilot Cowork 会弹出审批对话框。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Hacker News 上的人怎么评价 Grok Bot 的替代品",
      text: [
        "2026 年 11 月 13 日，我们逐页阅读了 7 个讨论 Grok Bot 的 Hacker News 讨论帖，时间从 2026 年 8 月到 11 月。Reddit 讨论帖只能通过搜索结果找到，所以我们只按标题列出，不做总结；这是公开讨论的一个样本，不是调查。",
      ],
      points: [
        "对用量上限的抱怨出现在我们读的其中 3 个讨论帖里（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50345698)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。用户说，一直运行的 Bot 很快就会用完每周额度，11 月的讨论帖讨论的是 Grok Bot 调低了的用量上限。",
        "由你自己运行的开源 agent 出现在我们读的其中 2 个讨论帖里（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。用户在两个讨论帖里都提到了 [Hermes Agent](/alternatives/hermes-agent)，在 8 月那个讨论帖里还提到了 OpenClaw；在那个讨论帖里，他们说这两者都比托管的 Bot 可配置性更强，也有人说 OpenClaw 需要经常修。见 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
        "自己搭一套方案出现在我们读的其中 2 个讨论帖里（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）：用 Claude Code 或 Codex 这类编程 agent 加几个脚本，或者通过 OpenRouter 使用模型。那里的用户说，这样的方案能以少得多的花费完成大部分工作。见 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
        "对 Grok Bot 究竟多提供了什么的质疑，出现在我们读的其中 2 个讨论帖里（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。有些用户说想不出会交给它什么任务，另一些人则把它看作 OpenClaw 这类开源 agent 的托管版本，只是多了一个浏览器。",
        "在 Reddit 上，标题为 [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)（r/GrokBot）、[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)（r/GrokBot）和 [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)（r/cursor）的讨论帖出现在搜索结果中。我们只列出标题；这些讨论帖我们没有读过。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Bot 服务你的应用，AI 员工服务你的代码库。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和项目。它在工作时间内按心跳醒来，从共享看板上领取 issue；需要审查或权限时，它会把 issue 标为“需处理”并在那里提问。它没有内置的 Slack、GitHub 或 Linear 集成：agent 使用的是它所在电脑上的工具和登录。",
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
    title: "想给你的代码库配上 AI 队友？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Grok Bot 替代品常见问题",
    items: [
      {
        q: "有开源的 Grok Bot 替代品吗？",
        a: "有。OpenBot 的应用模板采用 MIT（它使用单独授权的 CopilotKit Intelligence），OpenWorker 和 Hermes Agent 采用 MIT。Crewmark 以 GPL-3.0 开源。Grok Bot 本身不开源。",
      },
      {
        q: "有免费的 Grok Bot 替代品吗？",
        a: "OpenBot 个人项目免费；OpenWorker 未列出价格，用你自己的模型密钥或本地模型运行；Hermes Agent 免费，另付模型提供商费用。ChatGPT Work 在 Free 套餐的桌面应用中可有限使用，Lindy 的 Free 套餐在 7 天内提供 $50 额度，Crewmark 1 个项目、最多 3 名 AI 员工免费。Claude 的 Free 套餐不含 Claude Cowork。",
      },
      {
        q: "GitHub 上有哪些 Grok Bot 替代品？",
        a: "OpenBot（`github.com/CopilotKit/OpenBot`，11,652 颗星）、OpenWorker（`github.com/andrewyng/openworker`，19,050 颗星）、Hermes Agent（`github.com/NousResearch/hermes-agent`，262,923 颗星）和 Crewmark（`github.com/ummydev/crewmark-ai`）。星数取自 2026 年 11 月 13 日。",
      },
      {
        q: "Claude 算 Grok Bot 的替代品吗？",
        a: "Claude 应用里的 Claude Cowork 是 Anthropic 面向知识工作的 agent：它在 Anthropic 的云端运行任务，也能按计划运行，随 Claude 付费套餐提供，Pro 每月 $20 起。写代码的话，Claude Code 是 Anthropic 的编程 agent。见 [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) 和 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
      },
      {
        q: "Grok Bot 多少钱？",
        a: "Premium 每月 $30，Super 每月 $100（用量是 Premium 的 3.5 倍），Ultra 每月 $200（用量是 Premium 的 12 倍），按月计费。每周的 Grok Bot 用量包含在内，超出部分按 token 成本计费。Teams 和 Enterprise 需联系销售。",
      },
      {
        q: "哪些 Grok Bot 替代品能在 Slack 里用？",
        a: "Lindy 在 Slack 里像队友一样工作；在 Slack 讨论串里提及 OpenWorker，它就会回复；Hermes Agent 通过它的 gateway 接入 Slack；Claude Cowork 和 ChatGPT Work 以连接器或插件的形式接入 Slack；OpenBot 把 Slack 列为它的前端之一，其中一些处于抢先体验阶段。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一个聊天窗口。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品的官网、文档和价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 xAI 及本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
