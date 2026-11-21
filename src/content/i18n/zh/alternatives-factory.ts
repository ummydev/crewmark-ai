import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 替代品（2026）：编程 agent 对比",
    description:
      "Factory AI 替代方案对比：Devin、Claude Code、Codex、开源的 OpenCode、Cursor Projects 和 Conductor，附价格、限制以及各自适合谁。",
  },
  breadcrumb: "Factory 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Factory",
    title: "Factory AI 替代品：Devin、Claude Code、Codex、OpenCode 等对比",
    lead: "Factory 出品 Droids，这是一组编程 agent，可在你桌面上的 Factory App 和 Droid CLI 中运行，也可在 CI 中 headless 运行，或运行在 Factory 托管的云端计算机上。个人套餐从 Free（使用你自己的推理服务）到每月 $200 不等。Pro、Plus 和 Max 有 5 小时、7 天和 30 天的滚动速率限制，Teams 最多 10 个席位，Droid CLI 和 Factory App 没有开源许可证。下面是 7 个替代品，从 Devin、Claude Code 到开源的 OpenCode，附各自的价格。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory 替代品一览",
      text: [
        "信息来自各厂商自己的页面、文档或 GitHub，于 2026 年 11 月 13 日核对。价格以美元计。本表不是排名。Factory 自己的套餐见 [Factory 价格](/pricing/factory)。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[Factory](/pricing/factory)（作为参照）",
          "Droids：运行在桌面应用、CLI、CI 和 Factory 托管云端计算机上的编程 agent",
          "否",
          "Free $0/月，使用你自己的推理服务；Pro $20/月",
        ],
        [
          "[Devin](/pricing/devin)",
          "Cognition 的 AI 软件工程师：每个会话一台云端虚拟机，另有 Devin Desktop 和 Devin CLI",
          "否",
          "Free $0（少量配额）；Pro $20/月",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Anthropic 的编程 agent，可在终端、IDE、桌面应用、网页和移动端使用",
          "否（公开仓库，保留所有权利）",
          "包含在 Claude 付费套餐中：Pro $20/月，按年付 $17/月",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "OpenAI 的编程 agent：CLI、IDE 扩展、ChatGPT 桌面应用和 Codex Cloud",
          "部分开源：CLI、SDK 和 App Server 采用 Apache-2.0",
          "包含在 Plus（$20/月）起的 ChatGPT 套餐中，或使用 OpenAI API key",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "支持 200+ 家模型提供商（包括本地模型）的编程 agent",
          "是，MIT",
          "免费，并提供免费模型；OpenCode Go $10/月",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "一个协调者 agent，规划编程工作，并行运行 Cursor 云端 agent",
          "否",
          "Cursor Premium $30/月，或 $300/年",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "一款 Mac 应用，在 git worktree 中并行运行 Claude Code、Codex、Cursor 和 OpenCode",
          "否",
          "免费使用；自 2026 年 11 月 4 日起关闭新用户注册和下载",
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
      id: "cloud",
      title: "像 Droids 一样的云端编程 agent",
      text: ["和 Factory 的 Droid Computers 一样，这些在厂商的云端运行 agent，所以合上笔记本电脑后工作还会继续。"],
      points: [
        "[Devin](/pricing/devin)（Cognition）：一个 AI 软件工程师，编写、运行和测试代码并提交 pull request，每个云端会话都在自己的虚拟机上，本地另有 Devin Desktop 和 Devin CLI。它接收 Linear 和 Jira 工单，按计划或由事件触发运行 Automations，协调者会话可以启动子 Devin 并给它们发消息。Free $0（少量配额）、Pro $20/月、Max $200/月；Teams 是“团队套餐 $80/月 + 每个完整开发者席位 $40/月”，最多 100 名用户。如果你想把工单交给 agent、拿回 pull request，并且需要超过 10 个席位的团队套餐，选它。更多：[Devin 替代品](/blog/devin-alternatives)、[Devin vs Claude Code](/compare/devin-vs-claude-code)。",
        "[Cursor Projects](/personal-agent/cursor-projects)：Cursor 的一项功能，由一个协调者 agent 规划一个新功能、一次迁移或一个完整的应用，把它分派给在 Cursor Cloud Agents 上并行运行的 agent，再把完成的工作交回给你检查。每个 Project 都有任务看板和共享笔记，可以按计划、根据某个 Slack 频道或你的 pull request 行动。它包含在 Cursor Premium（$30/月，或 $300/年）及以上套餐、Teams 和 Enterprise 中，Free 和 Plus 不包含。如果你已经在用 Cursor，想让一个协调者运行许多云端 agent，选它。",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "来自 Anthropic 和 OpenAI 的编程 agent",
      text: [
        "Factory 的 Free 套餐可以用 ChatGPT 登录或你自己的 API key 运行。如果你已经在为 Anthropic 或 OpenAI 付费，它们自己的编程 agent 就包含在这些套餐里。并排对比：[Factory vs Claude Code](/compare/factory-vs-claude-code)、[Claude Code vs Codex](/blog/claude-code-vs-codex)、[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)。",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code)（Anthropic）：读取你的代码库、编辑文件、运行命令，可在终端、IDE 扩展、桌面应用、网页和 Claude 移动应用中使用，运行在 Claude 模型上。它支持云端定时任务、桌面定时任务和 `/loop`，有 subagent 以及实验性的 agent teams。它包含在 Claude 付费套餐中，Free 不含：Pro $20/月（按年付 $17/月）、Max $100、Ultra $200，以及适用于 2 到 150 人的 Team 席位。如果你已经在为 Claude 付费，选它。",
        "[Codex](/blog/claude-code-vs-codex)（OpenAI）：编程 agent，提供终端 CLI、IDE 扩展、ChatGPT 桌面应用和 Codex Cloud，还有用于脚本和 CI 的 `codex exec`。CLI、SDK 和 App Server 以 Apache-2.0 开源。它包含在 ChatGPT 套餐中：Plus $20/月起，Pro $100/月起，Business 按年付 $20/用户/月起；也可以使用 OpenAI API key（仅限 CLI、SDK 和 IDE 扩展）。如果你已经在为 ChatGPT 付费，或者想要开源的 CLI，选它。见 [Devin vs Codex](/compare/devin-vs-codex)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "开源的 Factory 替代品：OpenCode",
      points: [
        "[OpenCode](/pricing/opencode)：采用 MIT 许可证的编程 agent，支持 200+ 家模型提供商，包括本地模型，提供终端 UI、桌面应用、网页应用和 SDK。你可以先用无需账号的免费模型（有每日请求限额），也可以用 ChatGPT Plus 或 Pro、GitHub Copilot 登录，自带 API key，或者付费使用 OpenCode Go（$10/月）或 Go Plus（$40/月）。自定义 agent 和 subagent 是你仓库里的文件，每种操作都可以设为允许、询问或拒绝。定时运行是实验性的，需要手动开启。如果你想要一个几乎能接入任何模型的开源 agent，选它。更多：[OpenCode 替代品](/blog/opencode-alternatives)、[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "并行运行多个 agent：Conductor",
      points: [
        "[Conductor](/pricing/conductor)：一款 Mac 应用，并行运行 Claude Code、Codex、Cursor 和 OpenCode agent，每个任务都在自己的 git worktree 里，并帮你审查 diff、提交 pull request 和合并。2026 年 11 月 4 日，它宣布加入 Meta：新用户注册和下载已关闭，Conductor Cloud 于 2026 年 11 月 13 日转为只读，2026 年 11 月 20 日关闭，本地应用会获得新模型和关键 bug 修复，直到 2027 年初。只有在你的 Mac 上已经装了它时，才选它。更多：[Conductor 替代方案](/blog/conductor-alternatives)、[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Factory 替代品",
      steps: [
        {
          title: "决定 agent 在哪里运行",
          text: "Devin 和 Cursor Projects 运行在厂商的云端，和 Droid Computers 一样。Claude Code 和 Codex 既在你的机器上运行，也在它们自己的云端运行。OpenCode 运行在你的机器上。Conductor 在 Mac 本地运行。",
        },
        {
          title: "算算席位",
          text: "Factory Teams 最多 10 个席位。Devin Teams 最多 100 名用户，Claude Code 的 Team 套餐适用于 2 到 150 人，Codex Business 2 名用户起，Cursor Teams 按席位计价。",
        },
        {
          title: "看看用量怎么限制",
          text: "Factory 的 Pro、Plus 和 Max 有 5 小时、7 天和 30 天的滚动限制，另有预付的 Extra Usage。Devin 使用每日和/或每周配额，外加预付额度。Claude Code 和 Claude 聊天共享 5 小时和每周的用量上限。OpenCode 的免费模型有每日请求限额。",
        },
        {
          title: "决定你是否需要开源",
          text: "OpenCode 采用 MIT，Codex 的 CLI 采用 Apache-2.0。Factory、Devin、Claude Code、Cursor Projects 和 Conductor 都没有为产品本身公布开源许可证。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Crewmark：给 Claude Code 或 Codex 一个岗位和一份时间表",
      text: [
        "Crewmark 不是编程 agent。它是给 AI 员工团队用的 issue 跟踪工具：每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue，并随时更新 issue 的状态，用的是你已经付费的 agent 订阅。电脑需要保持开机，心跳才能运行。",
        "它是开源的（GPL-3.0），可以自托管。Free 套餐包含 1 个项目、最多 3 名 AI 员工；Pro（$5/月）和 Team（$10/月）即将推出，计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。agent 用量付给你的 agent 提供商。详见 [Crewmark 价格](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "给每名员工设定岗位、目标和项目，比如软件工程师。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "把工作放上看板",
          text: "分配带状态和优先级的 issue，并让常规的 issue 定期重复。agent 之间互相分配 issue、互相 @提及；当某个 agent 需要审查或权限时，它会把 issue 标为“需处理”并等待。",
        },
        {
          title: "设定工作时间",
          text: "在工作时间内，心跳每隔 15 分钟到 24 小时唤醒一次每名员工。带设置方法的工作见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "已经在为 Claude Code 或 Codex 付费？",
    text: "Crewmark 给它们岗位、心跳和一块共享看板，让它们不用你发提示词也能继续干活。最多 3 名员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "Factory 替代品常见问题",
    items: [
      {
        q: "有免费的 Factory AI 替代品吗？",
        a: "OpenCode 免费，并提供无需账号的免费模型（有每日请求限额）。Devin 有带少量配额的 Free 套餐。Crewmark 的 Free 套餐包含 1 个项目、最多 3 名 AI 员工。Factory 本身也有 $0/月的 Free 套餐，前提是你自带推理服务：用 ChatGPT、GitHub Copilot 或 OpenRouter 登录，或者接入你自己的 API key。",
      },
      {
        q: "Factory 的 Droids 有开源替代品吗？",
        a: "OpenCode（MIT）是完全开源的编程 agent，Codex 的 CLI、SDK 和 App Server 采用 Apache-2.0。Crewmark（GPL-3.0）也是开源的，不过它运行的是 Claude Code 或 Codex，而不是自己的 agent。Factory 没有为 Droid CLI 或 Factory App 公布开源许可证；它的 github.com/Factory-AI/factory 仓库里只有 README 和文档。",
      },
      {
        q: "Factory vs Devin：有什么区别？",
        a: "两者都能在云端和本地运行，都接收 Linear 和 Jira issue，都能运行自动化。Factory 的 Droids 运行在 Factory App、Droid CLI、CI 和 Droid Computers 中；Devin 的每个云端会话都在自己的虚拟机上，另有 Devin Desktop 和 Devin CLI。两者的 Pro 都是 $20/月。Factory Teams 是每个团队 $60/月，另加每人 $40/月，最多 10 个席位；Devin Teams 是“团队套餐 $80/月 + 每个完整开发者席位 $40/月”，最多 100 名用户。",
      },
      {
        q: "Factory vs Claude Code：有什么区别？",
        a: "Claude Code 是 Anthropic 自己的 agent，运行在 Claude 模型上，包含在 Claude 付费套餐中。Factory 的 Droids 支持 GPT-5、Claude Opus 和 Sonnet、Gemini 以及开放权重模型，也可以用你自己的 key，并增加了托管的 Droid Computers、从 Slack、Linear 和 Jira 委派任务，以及定时自动化。见 [Factory vs Claude Code](/compare/factory-vs-claude-code)。",
      },
      {
        q: "我能用 ChatGPT 订阅，而不为 Factory 付费吗？",
        a: "Codex 包含在 Plus（$20/月）起的 ChatGPT 套餐中。OpenCode 支持用 ChatGPT Plus 或 Pro 登录，Devin 的 Pro、Max 和 Teams 套餐可以用关联的 ChatGPT 套餐来使用 GPT 模型。Factory 自己的 Free 套餐也支持用 ChatGPT 登录。Crewmark 用你的 ChatGPT 订阅运行 Codex。",
      },
      {
        q: "哪个 Factory 替代品能并行运行多个 agent？",
        a: "Devin 的协调者会话会启动子 Devin 并给它们发消息。Cursor Projects 在 Cursor 的云端运行一个协调者和多个 worker agent。Claude Code 有 subagent 和实验性的 agent teams，Codex 可以并行派生 subagent，OpenCode 可以在同一个项目上启动多个 agent。Crewmark 从一块共享看板运行一支 AI 员工团队。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一句提示词。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品自己的页面、文档、价格和 GitHub 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Factory、Cognition、Anthropic、OpenAI、Anomaly、Cursor、Conductor 和 Meta 均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
