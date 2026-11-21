import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 替代品（2026）：开源与托管之选",
    description:
      "Relevance AI 已停用 Free 套餐，只列出 Enterprise。对比 CrewAI、LangGraph、AutoGen、Paperclip、OpenBot、Lindy 和 Crewmark 这些替代方案，附价格。",
  },
  breadcrumb: "Relevance AI 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Relevance AI",
    title: "Relevance AI 替代品：开源 agent 框架、自托管 agent 团队和托管助手",
    lead: "Relevance AI 是一个托管的低代码平台，用来构建 AI agent，并把它们连接成多 agent 团队（它称之为 AI Workforce），用于销售、客服和运营工作。截至 2026 年 11 月 13 日，它的文档说 Free 套餐已对新注册用户和现有账户停用，价格页只列出一个套餐 Enterprise，需联系销售。它不开源，也没有说明自托管选项。本页介绍 7 个替代品：开源框架、自托管的 agent 团队、一个托管助手和 Crewmark，附各自的价格。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 替代品一览",
      text: [
        "信息来自各厂商自己的页面、文档或 GitHub，于 2026 年 11 月 13 日核对。除非厂商没有给出价格，价格均以美元计。本表不是排名。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai)（作为参照）",
          "托管的低代码平台，用于构建 AI agent 和多 agent Workforce",
          "否",
          "仅 Enterprise，需联系销售；Free 套餐已停用",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Python 框架，用来构建由角色化 agent 组成的 crew，另有 CrewAI AMP 平台",
          "框架是，MIT；AMP 为商业产品",
          "框架免费；AMP Basic 免费（每月 50 次工作流执行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain 的框架，用代码把长时间运行、有状态的 agent 构建成图",
          "框架是，MIT；LangSmith 为商业产品",
          "框架免费；LangSmith Developer $0，Plus $39/席位/月",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft 面向 Python 和 .NET 的多 agent 框架；它的 README 说项目已归档",
          "是：代码 MIT，文档 CC-BY-4.0",
          "免费；没有托管服务",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "自托管的服务器，把你自带的 agent 当作一家公司来运营，有组织架构图和预算",
          "是，MIT",
          "自托管免费；云端版在等候名单中",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自托管的 AI 同事工作区",
          "是，MIT（使用单独授权的 CopilotKit Intelligence）",
          "个人项目免费；Business 每位活跃用户每月最高 $29",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "托管 AI 助手，处理收件箱、日历、会议和 Slack，按额度计费",
          "否",
          "7 天内 $50 免费额度；之后每位活跃用户 $29.99/月起",
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
      id: "frameworks",
      title: "开源 agent 框架（需要你写代码）",
      text: [
        "这些用一个库取代 Relevance AI 的构建器：你用代码定义 agent 和工作流，并向模型提供商付费。CrewAI 和 LangGraph 还有商业平台，用来部署你构建的东西。并排对比：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "[CrewAI](/alternatives/crewai)：采用 MIT 许可证的 Python 框架，用来构建由 agent 组成的 crew，每个 agent 都用角色、目标和背景故事来定义，另有事件驱动的 Flows 提供逐步控制。agent 可以互相委派工作、互相提问。它的商业平台 CrewAI AMP 有免费的 Basic 套餐，带可视化编辑器、AI 助手（copilot）和每月 50 次工作流执行，还有定制报价、可部署在你自有 VPC 中的 Enterprise 套餐。如果你想用 Python 构建基于角色的多 agent 团队，同时也能用无代码编辑器，选它。价格见 [CrewAI 价格](/pricing/crewai)。",
        "[LangGraph](/alternatives/langgraph)：LangChain 采用 MIT 许可证的框架，用来构建长时间运行、有状态的 agent，用 Python 或 JavaScript 写成由状态、节点和边组成的图。它支持持久化执行和人工介入（human-in-the-loop）暂停。LangSmith 增加了追踪、评估和部署：Developer $0（1 个席位，不含 Agent Server），Plus $39/席位/月，含一个小型 Agent Server，Enterprise 定制报价。如果你想对每一步进行底层控制，选它。价格见 [LangGraph 价格](/pricing/langgraph)。",
        "[AutoGen](/alternatives/autogen)：Microsoft 的开源框架，用 Python 和 .NET 构建多 agent 应用，有群聊、交接（handoff），以及用于无代码原型设计的 AutoGen Studio。它的 README 说项目“已归档，Microsoft 不再积极维护”，并引导新用户使用 Microsoft Agent Framework，Microsoft 称之为 AutoGen 的直接继任者。只有在你维护现有的 AutoGen 应用、或想研究它的模式时，才选它。",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "自托管的 agent 团队（不用写框架代码）",
      text: [
        "和 Relevance AI 一样，这些让你在网页或桌面应用里管理一支 agent 团队，但它们运行在你自己的机器或服务器上。见 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai)。",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip)：采用 MIT 许可证的 Node.js 服务器和网页界面，把一支 AI agent 团队当作一家公司来运营。你设定一个目标，搭一张有岗位、汇报关系和预算的组织架构图，再把 issue 分配给你自带的 agent，比如 Claude Code、Codex 或 OpenClaw。例行任务（Routines）由 cron、webhook 或 API 触发，创建周期性任务；审批和预算硬性上限让人始终掌控全局。它目前只能自托管，云端版还在等候名单中。如果你想协调许多不同的 agent 朝同一个目标工作，并限制它们的花费，选它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自托管的工作区，每个 Bot 都有自己的浏览器、文件和工具，还有例行任务、审批和活动日志。它作为 Mac 和 Windows 桌面应用运行，团队可部署在 Kubernetes 上，团队版提供企业登录、角色、工具权限和审计。你可以接入 OpenAI、Claude、Gemini 或开放模型，或通过 AG-UI 接入你自己的 agent。个人项目免费；OpenBot for Business 每位活跃用户每月最高 $29，另加每月模型支出超过 $5,000 部分的 5%。如果你想在自己的基础设施上运行带审批和审计记录的 AI 同事，选它。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "一个托管助手：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：一个托管的 AI 助手，而不是一支由你构建的团队。它处理收件箱、日历、会议、调研、报告和跟进事项，可通过 Slack、邮件、iMessage、短信、电话以及 Gmail 里的 Chrome 扩展使用；Routines 按计划或由事件触发运行，任何会对外产生影响的操作都要先等你审批。起步有 $50 免费额度，有效期 7 天，之后按每位活跃用户计费，$29.99/月起，含 3,000 额度。如果你想要一个自己就能注册使用的现成助手，选它。见 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 Relevance AI 替代品",
      steps: [
        {
          title: "决定你是否要写代码",
          text: "CrewAI、LangGraph 和 AutoGen 是需要你编程的库。Paperclip、OpenBot 和 Lindy 是配置一下就能用的应用。如果你想要介于两者之间的东西，CrewAI AMP 的免费 Basic 套餐提供可视化编辑器。",
        },
        {
          title: "决定它在哪里运行",
          text: "Relevance AI 和 Lindy 是托管的。Paperclip 目前只能自托管；OpenBot 运行在你的笔记本电脑或 Kubernetes 上；框架运行在你自己的代码里，CrewAI AMP 和 LangSmith 是可选的托管平台。",
        },
        {
          title: "看看今天就能注册的有哪些",
          text: "Relevance AI 的公开价格页只列出 Enterprise，需联系销售。CrewAI AMP Basic 和 LangSmith Developer 是免费套餐，Lindy 起步有免费额度且无需信用卡，OpenBot 个人项目免费，Paperclip 的自托管版本不需要 Paperclip 账号。",
        },
        {
          title: "确认框架还有人维护",
          text: "AutoGen 的 README 说 Microsoft 已不再维护它，并建议在它转为归档状态期间不要用于生产环境。对于新项目，Microsoft 推荐 Microsoft Agent Framework。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Crewmark：在 Claude Code 或 Codex 上组建一支 AI 员工团队",
      text: [
        "Crewmark 的定位比 Relevance AI 更窄。它不构建 agent，而是给你已经在用的 Claude Code 或 Codex 一份工作。每名 AI 员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue，并随时更新 issue 的状态。agent 之间互相分配 issue、评论和 @提及，每个事件都会唤醒与之相关的 agent。",
        "它是开源的（GPL-3.0），可以自托管。Free 套餐包含 1 个项目、最多 3 名 AI 员工；Pro（$5/月）和 Team（$10/月）即将推出，计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。agent 用量付给你的 agent 提供商，而且电脑需要保持开机，心跳才能运行。详见 [Crewmark 价格](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "给每名员工设定岗位、目标和项目，比如 SEO 专员或软件工程师。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "把工作放上看板",
          text: "分配带状态和优先级的 issue，并让常规的 issue 定期重复。当 agent 需要审查、权限或信息时，它会把 issue 标为“需处理”并等待。",
        },
        {
          title: "设定工作时间",
          text: "在工作时间内，心跳每隔 15 分钟到 24 小时唤醒一次每名员工。带设置方法的工作见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要今天就能用上的 agent？",
    text: "Crewmark 把你的 Claude Code 或 Codex 变成有岗位、心跳和共享看板的 AI 员工。最多 3 名员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "Relevance AI 替代品常见问题",
    items: [
      {
        q: "有开源的 Relevance AI 替代品吗？",
        a: "有。CrewAI 和 LangGraph 是采用 MIT 许可证的框架，AutoGen 的代码也采用 MIT，不过它的 README 说项目已归档。Paperclip（MIT）和 OpenBot（基于单独授权的 CopilotKit Intelligence、采用 MIT 的应用模板）是用来运行 agent 团队的自托管应用，Crewmark 采用 GPL-3.0。Relevance AI 本身不开源。",
      },
      {
        q: "Relevance AI 有免费套餐吗？",
        a: "没有。截至 2026 年 11 月 13 日，它的文档说 Free 套餐已对新注册用户和现有账户停用，价格页只列出一个套餐 Enterprise，需联系销售定制报价。详见 [Relevance AI 价格](/pricing/relevance-ai)。",
      },
      {
        q: "有免费的 Relevance AI 替代品吗？",
        a: "CrewAI、LangGraph 和 AutoGen 框架都免费，你向模型提供商付费。CrewAI AMP 的 Basic 套餐免费，每月 50 次工作流执行；LangSmith 的 Developer 套餐 1 个席位 $0。Paperclip 可以免费自托管，OpenBot 个人项目免费，Lindy 起步有 7 天内的 $50 额度，Crewmark 的 Free 套餐最多可用 3 名 AI 员工。",
      },
      {
        q: "有无代码的 Relevance AI 替代品吗？",
        a: "CrewAI AMP 的免费 Basic 套餐包含可视化编辑器和 AI 助手（copilot）。Lindy 通过对话设置，没有构建器。AutoGen Studio 是无代码原型界面，但它的 README 说它并不是一个可用于生产环境的应用。",
      },
      {
        q: "Relevance AI 替代品可以自托管吗？",
        a: "可以。Paperclip 以单个 Node.js 进程或 Docker 镜像运行，OpenBot 运行在你的笔记本电脑或 Kubernetes 上，Crewmark 可以从它的仓库部署（Node.js、PostgreSQL 和 Google 登录）。CrewAI、LangGraph 和 AutoGen 框架运行在你自己的代码里；CrewAI AMP Enterprise 可以部署在你自有的 VPC 中，LangSmith 的自托管 Agent Server 是 Enterprise 选项。Relevance AI 没有说明自托管选项。",
      },
      {
        q: "Relevance AI vs Lindy：有什么区别？",
        a: "Relevance AI 是一个平台，用来构建许多专职 agent 并把它们连接成 Workforce，通过销售团队出售。Lindy 是一个现成的助手，处理收件箱、日历、会议和 Slack，按每位活跃用户以额度计费，$29.99/月起。见 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      },
    ],
  },
  cta: {
    title: "给你的 agent 一份工作，不用先打销售电话。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各产品自己的页面、文档、价格和 GitHub 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Relevance AI、crewAI、LangChain、Microsoft、Paperclip Labs、CopilotKit 和 Lindy 均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
