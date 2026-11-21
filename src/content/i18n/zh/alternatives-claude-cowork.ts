import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork 替代品（2026）：免费与开源之选",
    description:
      "Claude Cowork 替代方案对比：ChatGPT Work、Copilot Cowork、Gemini、Grok Bot、Lindy，以及开源的 OpenWorker、OpenBot 和 Suparagent，附价格。",
  },
  breadcrumb: "Claude Cowork 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Claude Cowork",
    title: "Claude Cowork 替代品：OpenAI、Microsoft、Google 和 xAI 的 AI 同事，以及开源之选",
    lead: "Claude Cowork 是 Anthropic 在 Claude 应用里处理编程以外工作的 agent：你描述想要的结果，它在你的文件、应用和浏览器里完成调研、文档、电子表格和幻灯片。它只包含在 Claude 付费套餐中，每月 $20 起，Anthropic 表示它消耗套餐额度比聊天更快。它运行在 Claude 模型上；自 2026 年 10 月 6 日起，Pro、Max 和 Ultra 上的新任务都在 Anthropic 的云端运行，没有切换回去的设置。本页对比来自 OpenAI、Microsoft、Google 和 xAI 的替代品、一个托管助手、由你自己运行的开源应用，以及 Crewmark，附各自的价格。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Cowork 替代品一览",
      text: ["信息来自各厂商自己的页面、文档或 GitHub，于 2026 年 11 月 13 日核对。价格以美元计。本表不是排名。"],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork)（作为参照）",
          "Anthropic 在 Claude 应用里处理编程以外知识工作的 agent",
          "否",
          "Claude Pro $20/月，按年付 $17/月；Free 不含",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI 在 ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务",
          "否",
          "Free（$0）和 Go（$8/月）：有限使用，仅限桌面应用；Plus $20/月",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 在 Microsoft 365 里执行多步骤任务的 agent",
          "否",
          "Microsoft 365 Copilot 许可证，加 Copilot Credits，每个 $0.01",
        ],
        [
          "[Gemini 任务（原名 Spark）](/personal-agent/gemini-spark)",
          "Google 在 Gemini 应用里的后台 agent，会使用 Gmail、Docs 等 Google 应用",
          "否",
          "Google AI Pro $19.99/月（美国）；免费套餐不可用",
        ],
        ["[Grok Bot](/alternatives/grok-bot)", "xAI 的托管 AI 队友，每个都有自己的云端计算机", "否", "Premium $30/月"],
        [
          "[Lindy](/alternatives/lindy)",
          "托管 AI 助手，处理收件箱、日历、会议和 Slack，按额度计费",
          "否",
          "免费：7 天内 $50 额度；之后每位活跃用户 $29.99/月起",
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
          "[Suparagent](/personal-agent/suparagent)",
          "AI 同事工作区，运行在 Claude Code、Codex、Gemini CLI、Cursor 等引擎上",
          "是，Apache-2.0",
          "桌面版和自托管版：未说明收费；你向模型提供商付费",
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
      title: "来自 OpenAI、Microsoft、Google 和 xAI 的托管替代品",
      text: [
        "这四款的工作方式和 Claude Cowork 很像：你在厂商的应用里交出一项任务，它在厂商的云端运行。并排对比：[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：ChatGPT 里的 Work 模式，会规划任务，使用你的文件、插件、网页、浏览器和代码，最后交回演示文稿、电子表格、文档或分析。它和 Codex 共享用量上限。Free 和 Go 可以在桌面应用中有限使用 Work；Plus（$20/月）和 Pro（$100/月起）可在桌面端、网页端和移动端使用。如果你想要 Claude Cowork 的 OpenAI 替代品，或者想免费试试 AI 同事，选它。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：跨 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 执行多步骤任务，执行敏感操作前会弹出审批对话框。它需要 Microsoft 365 Copilot 许可证，用量以 Copilot Credits 计费，每个 $0.01，按量付费。它无法访问你本地设备上的文件。如果你的工作在 Microsoft 365 里，而且管理员想按用户或用户组设定额度上限，选它。",
        "[Gemini 任务](/personal-agent/gemini-spark)（Google，beta 期间叫 Spark）：Gemini 应用里的云端 agent，会使用 Gmail、Docs、Drive 等 Google 应用，可按计划运行，也可在某件事发生时运行。Google 的帮助文章说它需要 Google AI Pro（美国 $19.99/月）或 Ultra（$99.99/月起）。它只支持个人 Google 账号，在欧洲经济区、瑞士、英国和尼日利亚不可用。如果你的工作在 Gmail 和 Google 的其他应用里，选它。",
        "[Grok Bot](/alternatives/grok-bot)（xAI）：托管的 Bot，每个都有自己的云端计算机，会登录你的工具，在 Slack 和 Microsoft Teams 里工作，运行例行任务并互相发消息。它包含在 Premium（$30/月）、Super（$100/月）和 Ultra（$200/月）中，按月计费，超出部分按 token 成本计费。如果你想让几个分工不同的 Bot 在 Slack、Teams 和会议里工作，选它。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "按额度计费的托管助手：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：一个托管助手，处理收件箱、日历、会议、调研、报告和跟进事项，可通过 Slack、邮件、iMessage、短信、电话以及 Gmail 里的 Chrome 扩展使用。Routines 按计划或由事件触发运行，任何会对外产生影响的操作都要等你审批。起步有 $50 免费额度，有效期 7 天；之后每位活跃用户都要计费，$29.99/月起，含 3,000 额度。如果你想要一个能发短信给它、或在 Slack 里 @ 它的行政助理，选它。更多见我们的 [Lindy 指南](/personal-agent/lindy)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "开源的 Claude Cowork 替代品",
      text: [
        "这三款运行在你自己的电脑或服务器上。个人使用时，它们都没有列出收费：你向模型提供商付费，或者在支持的情况下运行本地模型。",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker)：采用 MIT 许可证的 AI 同事桌面应用，处于公开测试阶段。agent 循环、对话、连接器 token 和模型密钥都留在你的机器上。你可以用 OpenAI、Anthropic、Google Gemini 或 OpenRouter 的密钥，也可以通过 Ollama、LM Studio、llama.cpp 或 vLLM 运行本地模型。操作默认需要审批，定时运行永远不会自己批准自己的操作：它们的请求会在收件箱里等待。它支持 macOS 12+（Apple 芯片）和 Windows 10/11 x64；Windows 版尚未进行代码签名。如果你想在 Windows 或 Mac 上用一款本地、开源的 Claude Cowork 替代品，选它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自托管的工作区，每个 Bot 都有自己的浏览器、文件和工具，行动前需审批，还有例行任务和活动日志。它作为 Mac 和 Windows 桌面应用运行（后端使用 Docker），团队可部署在 Kubernetes 上。应用模板采用 MIT；它使用单独授权的 CopilotKit Intelligence，在 Kubernetes 上用于生产需要许可证。个人项目免费；OpenBot for Business 每位活跃用户每月最高 $29。如果你想自托管 AI 同事，并使用自己的模型或 agent，选它。见 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "[Suparagent](/personal-agent/suparagent)：采用 Apache-2.0 许可证的工作区，用于运行具名的 AI 同事，每个都有岗位、工作空间、记忆、例行任务和审批设置，运行在你已经在用的引擎上，比如 Claude Code、Codex、Gemini CLI 或 Cursor。它有任务看板和日历，一个负责人 agent 可以把工作交给专职 agent。它以桌面应用或自托管 Linux 服务器的形式运行；suparagent.ai 上的托管服务是另一款产品。项目自称尚处早期、还在变化中。如果你想在已经付费的 agent 上运行有岗位的同事，选它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Claude Cowork 替代品",
      steps: [
        {
          title: "从工作所在的地方出发",
          text: "用 Microsoft 365 就看 Copilot Cowork，用 Gmail 和 Google Docs 就看 Gemini 任务，用 ChatGPT 就看 ChatGPT Work，用 Slack 或 iMessage 就看 Lindy 或 Grok Bot。",
        },
        {
          title: "决定你要付多少钱",
          text: "免费选项：ChatGPT Free 上的 ChatGPT Work（有限使用，仅限桌面应用）、Lindy 的 7 天额度、用你自己模型密钥的 OpenWorker、OpenBot 和 Suparagent，以及 Crewmark 的 Free 套餐。Copilot Cowork 在许可证之外按 Copilot Credit 计费；Gemini 任务、Grok Bot 和 ChatGPT 付费套餐都是月度订阅。",
        },
        {
          title: "选择厂商的云端还是你自己的电脑",
          text: "ChatGPT Work、Copilot Cowork、Gemini 任务、Grok Bot 和 Lindy 运行在厂商的云端。OpenWorker 把对话和密钥留在你的机器上；OpenBot 和 Suparagent 也可以运行在你自己的服务器上。",
        },
        {
          title: "确认平台",
          text: "Windows 上：Copilot Cowork 和 ChatGPT Work 有 Windows 桌面应用，OpenWorker 提供 Windows 10/11 版本，OpenBot 的桌面应用也能在 Windows 上运行。Gemini 任务可在网页、Mac 应用和移动端使用；Grok Bot 列出的是 macOS（Apple 芯片）和 iOS 应用。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Hacker News 上的人怎么评价 Claude Cowork 的替代品",
      text: [
        "2026 年 11 月 13 日，我们逐页阅读了 5 个讨论 Claude Cowork 的 Hacker News 讨论帖，时间从 2026 年 1 月到 11 月。Reddit 讨论帖只能通过搜索结果找到，所以我们只按标题列出，不做总结；这是公开讨论的一个样本，不是调查。",
      ],
      points: [
        "比起 Cowork 的 agent 模式更喜欢别的方式，这一点出现在我们读的其中 2 个讨论帖里（[2026 年 1 月](https://news.ycombinator.com/item?id=46593022)、[2026 年 9 月](https://news.ycombinator.com/item?id=49729412)）。在 1 月的讨论帖里，用户说对习惯用终端的人来说，Claude Code 能完成同样的工作，而且掌控更多；见 [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)。在 9 月的讨论帖里，用户说对于战略和调研类问题，普通聊天给出的回答比 agent 模式更好。",
        "在 Reddit 上，标题为 [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/)（r/claude）、[Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/)（r/MistralAI）、[Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/)（r/ChatGPTCoding）和 [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/)（r/LocalLLM）的讨论帖出现在搜索结果中。我们只列出标题；这些讨论帖我们没有读过。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Crewmark：在你已经在用的 Claude Code 或 Codex 上组建一支 AI 员工团队",
      text: [
        "Crewmark 和 Claude Cowork 是不同类型的工具。它是给 AI 员工团队用的 issue 跟踪工具：每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue，并随时更新 issue 的状态。它是开源的（GPL-3.0），可以自托管。",
        "Free 套餐包含 1 个项目、最多 3 名 AI 员工。Pro（$5/月）和 Team（$10/月）即将推出；计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。agent 用量付给你的 agent 提供商，而且电脑需要保持开机，心跳才能运行。详见 [Crewmark 价格](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "给每名员工设定岗位、目标和项目；快捷选项包括软件工程师、SEO 专员和数据分析师。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "把工作放上看板",
          text: "分配 issue、设定优先级，并让常规的 issue 每天、每周或每月重复。当 agent 需要审查、权限或信息时，它会把 issue 标为“需处理”并等你处理。",
        },
        {
          title: "设定工作时间",
          text: "在工作时间内，心跳每隔 15 分钟到 24 小时唤醒一次每名员工。带设置方法的工作见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "已经在为 Claude 或 ChatGPT 付费？",
    text: "Crewmark 把你的 Claude Code 或 Codex 变成有岗位、心跳和共享看板的 AI 员工。最多 3 名员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Cowork 替代品常见问题",
    items: [
      {
        q: "有免费的 Claude Cowork 替代品吗？",
        a: "有。ChatGPT Free（$0）可以在桌面应用中有限使用 ChatGPT Work。Lindy 起步有 $50 额度，有效期 7 天。OpenWorker 未列出价格，用你自己的模型密钥或本地模型运行；OpenBot 个人项目免费；Suparagent 的桌面版和自托管版未列出收费。Crewmark 的 Free 套餐包含 1 个项目、最多 3 名 AI 员工。Claude Cowork 本身不在 Claude 的 Free 套餐中。",
      },
      {
        q: "有开源的 Claude Cowork 替代品吗？",
        a: "OpenWorker（MIT）、OpenBot（基于单独授权的 CopilotKit Intelligence、采用 MIT 的应用模板）和 Suparagent（Apache-2.0）是开源的，Crewmark（GPL-3.0）也是。Claude Cowork 本身不开源，不过 Anthropic 为 Cowork 提供插件的 knowledge-work-plugins 仓库以 Apache-2.0 开源。",
      },
      {
        q: "Claude Cowork 的 OpenAI 替代品是什么？",
        a: "ChatGPT Work：ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务，比如演示文稿、电子表格和分析。Free 和 Go 只能在桌面应用中有限使用，Plus（$20/月）起可完整使用，它和 Codex 共享用量上限。见 [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)。",
      },
      {
        q: "哪些 Claude Cowork 替代品能在 Windows 上运行？",
        a: "Copilot Cowork（适用于 Windows 和 macOS 的 Microsoft Copilot 桌面应用）、ChatGPT Work（适用于 macOS、Windows 和 Linux 的 ChatGPT 桌面应用）、OpenWorker（Windows 10/11 x64，尚未代码签名）和 OpenBot（适用于 Mac 和 Windows 的桌面应用）。Claude Cowork 本身也可以通过 Claude Desktop 在 Windows 上运行。",
      },
      {
        q: "有在我自己电脑上运行的 Claude Cowork 替代品吗？",
        a: "OpenWorker 在你的机器上运行 agent 循环，并把对话、连接器 token 和模型密钥都留在本地；OpenBot 和 Suparagent 可以作为桌面应用运行，也可以运行在你自己的服务器上。Claude Cowork 只能通过 Claude Desktop 访问本地文件，而且自 2026 年 10 月 6 日起，Pro、Max 和 Ultra 上的新任务都在云端运行。如果任务只想在你的电脑上运行，Anthropic 推荐使用桌面应用里的 Claude Code（[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)）。",
      },
      {
        q: "为什么有人在找 Claude Cowork 替代品？",
        a: "因为 Anthropic 自己说明的这些限制：Cowork 需要 Claude 付费套餐（Pro 每月 $20 起），消耗套餐额度比聊天更快，会话不能和他人共享，而且在 Pro、Max 和 Ultra 上，新任务都在云端运行，没有切换回去的设置。如果你的工作在 Microsoft 365 或 Gmail 里，Copilot Cowork 和 Gemini 任务可以直接连接这些应用。",
      },
    ],
  },
  cta: {
    title: "给你的 agent 一份工作，而不只是一项任务。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品自己的页面、文档、价格和 GitHub 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、OpenAI、Microsoft、Google、xAI、Lindy、CopilotKit 以及 OpenWorker 和 Suparagent 的开发者均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
