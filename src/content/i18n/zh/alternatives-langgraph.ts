import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 替代品（2026）：CrewAI、AutoGen 等对比",
    description:
      "LangGraph 替代方案对比：CrewAI、AutoGen、OpenClaw、Hermes Agent、Paperclip、Claude Code agent teams 和 Crewmark，按许可证、价格和适用场景比较。",
  },
  breadcrumb: "LangGraph 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · LangChain LangGraph",
    title: "2026 年的 LangGraph 替代品：框架、现成 agent 和 agent 团队",
    lead: "LangGraph 是 LangChain 的开源（MIT）框架，用于构建长时间运行、有状态的 agent：你用 Python 或 JS/TS 把工作流定义成由状态、节点和边组成的图。它刻意保持底层，“不预设提示词或 agent 架构”。在 LangChain 的 LangSmith 平台上，免费的 Developer 套餐只有一个席位，不含 Agent Server，自托管部署仅限 Enterprise。如果你想要按角色定义的 agent、一个现成的 agent 而不是一个库，或者一支编程 agent 团队，下面是七个选择，附许可证、价格和各自适合谁。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 替代品一览",
      text: [
        "信息来自各产品的 README、文档和价格页，于 2026 年 11 月 13 日核对。价格以美元计。LangGraph 本身以 MIT 许可证免费；LangSmith Plus 每席位每月 $39。详见 [LangGraph 价格](/pricing/langgraph)。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Python 框架，用来构建由角色化 agent 组成的 crew 和事件驱动的 flow，另有商业平台 CrewAI AMP",
          "框架是（MIT）；AMP 为商业产品",
          "框架免费，另付模型提供商费用；AMP Basic 免费（每月 50 次工作流执行）",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft 的多 agent 框架，支持 Python 和 .NET；它的 README 说项目已归档，Microsoft 不再维护",
          "是（代码 MIT，文档 CC-BY-4.0）",
          "免费，另付模型提供商费用；没有托管服务",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "运行在你自己电脑上的个人 AI 助手，在聊天应用里回复你",
          "是（MIT）",
          "免费；没有付费档或托管服务；你向模型提供商付费",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "Nous Research 的个人 agent，会编写并改进自己的技能，可在终端、桌面应用或聊天应用里使用",
          "是（MIT）",
          "agent 免费，另付模型提供商费用；可选 Nous Portal Plus 每月 $20",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "自托管的服务器和网页界面，把你自带的 agent（Claude Code、Codex、OpenClaw 等）当作一家公司来运营，有组织架构图、预算和任务",
          "是（MIT）",
          "自托管版本免费；未公布价格；云端版在等候名单中",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "Claude Code 的一项实验性功能：由一个主导会话派生出队友，它们共享任务列表并互相发消息",
          "否",
          "随 Claude 付费套餐中的 Claude Code 提供，Pro 每月 $20 起（按年付每月 $17）",
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
      id: "frameworks",
      title: "其他 agent 框架",
      text: [
        "和 LangGraph 一样，是你在自己代码里调用的库。并排对比：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph) 和 [CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "CrewAI：采用 MIT 许可证的 Python 框架。LangGraph 没有内置的角色概念；在 CrewAI 里，每个 agent 都用角色、目标和背景故事来定义。开启委派后，agent 之间会互相交接工作、互相提问，Flows 则提供带状态和分支的事件驱动、逐步执行的控制。CrewAI AMP 增加了无代码 Studio、追踪、cron 定时和部署。如果你写 Python（3.10 及以上、低于 3.14），想按角色组织 agent，选它。价格见 [CrewAI 价格](/pricing/crewai)。",
        "AutoGen：Microsoft 采用 MIT 许可证的多 agent 框架，支持 Python 和 .NET，有群聊、selector 和 swarm 团队。2026 年 11 月 13 日，它的 README 说项目“已归档，Microsoft 不再积极维护”，建议不要用于生产环境，并引导新用户使用它的继任者 Microsoft Agent Framework。如果你在维护现有的 AutoGen 应用，或者想研究多 agent 模式，选它。更多见 [AutoGen 替代品](/alternatives/autogen)。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "现成的 agent，而不是库",
      text: [
        "用 LangGraph，agent 要你自己构建。下面这两个是你直接安装、运行的 agent，各自内置调度器。对比见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      ],
      points: [
        "OpenClaw：采用 MIT 许可证的个人助手，作为 Gateway 运行在你自己的电脑上，在 WhatsApp、Telegram、Slack、Discord 等聊天应用里回复你。一个 Gateway 上可以运行多个 agent，内置 Automations 调度器，项目本身没有付费档或托管服务。如果你想要一个跑在自己掌控的硬件上、可以更换模型提供商的助手，选它。更多见 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "Hermes Agent：Nous Research 采用 MIT 许可证的个人 agent。它会根据经验编写技能，保存自己的记忆，并用内置 cron 调度器运行例行任务；在 Bot Mode 中，拥有各自模型的具名 Bot 之间直接互相发消息。如果你想要一个随时间改进自己技能、可以从终端、桌面应用和聊天应用联系的 agent，选它。更多见 [Hermes Agent 替代品](/alternatives/hermes-agent)。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "协调你已经在用的编程 agent",
      text: [
        "如果你想协调的是 Claude Code 或 Codex 这类编程 agent，这些工具能把它们作为团队来运行。见 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) 和 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)。",
      ],
      points: [
        "Paperclip：自托管、采用 MIT 许可证的 Node.js 服务器和网页界面，把 agent 当作一家公司来运营：有岗位和预算的组织架构图、分配给 agent 或人的 issue、审批，以及由 cron、webhook 或 API 触发的例行任务。它说自己“不是 agent 框架”：它通过适配器驱动你自带的 agent，比如 Claude Code、Codex 和 OpenClaw。如果你想让许多 agent 朝同一个目标工作、设有花费上限，并跑在你自己的服务器上，选它。",
        "Claude Code agent teams：Claude Code 的一项实验性功能，默认关闭。由一个主导会话派生出队友，即各自独立的 Claude Code 实例，它们共享一个带依赖关系的任务列表，并直接互相发消息。如果你已经在为 Claude 套餐付费，想让几个 Claude Code 实例在同一个编程任务上协作，选它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 LangGraph 替代品",
      steps: [
        {
          title: "需要对每一步进行底层控制？",
          text: "这正是 LangGraph 的设计目标。如果想从更高层次起步，它的 README 推荐了 Deep Agents，它基于 LangGraph 构建，增加了 subagent。",
        },
        {
          title: "想按角色定义 agent？",
          text: "CrewAI 的 agent 有角色、目标和背景故事；Paperclip 有带职位和岗位职责的组织架构图；Crewmark 给每名 AI 员工设定岗位、KPI 和项目。",
        },
        {
          title: "需要定时运行？",
          text: "LangGraph 的 cron 任务在 LangSmith Agent Server 上，库本身未说明支持。CrewAI 在 AMP 上提供 cron 定时。OpenClaw 和 Hermes Agent 内置调度器，Paperclip 运行例行任务，Crewmark 有心跳和重复 issue。",
        },
        {
          title: "在意成本？",
          text: "开源框架免费，你为模型调用付费。LangGraph 的 cron 任务每次运行都发送相同的输入，LangChain 的文档建议删除不用的 cron 任务，因为重复运行可能产生 LLM API 费用。Paperclip 有带硬性上限的预算；Crewmark 使用你自己的 Claude Code 或 Codex 订阅。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "LangGraph 把 agent 做进你的应用，Crewmark 把你的编程 agent 组成团队。",
      text: [
        "Crewmark 不是框架，你也不用写图。它是给 AI 员工团队用的 issue 跟踪工具：每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和项目。它在工作时间内按心跳醒来，从共享看板上领取 issue；需要审查或权限时，它会把 issue 标为“需处理”并在那里提问。",
        "它以 GPL-3.0 开源，1 个项目、最多 3 名 AI 员工免费。你照常向 agent 提供商付费，而且电脑需要保持开机，心跳才能运行。套餐见[价格页](/pricing)。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或数据分析师，写下它的 KPI 和项目。",
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
    title: "不用写图，也能有一支 agent 团队",
    text: "Crewmark 按心跳唤醒你的 Claude Code 或 Codex 会话，从共享看板上交给它下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "LangGraph 替代品常见问题",
    items: [
      {
        q: "LangGraph 有哪些开源替代品？",
        a: "CrewAI 的框架、AutoGen（它的 README 说项目已归档，Microsoft 不再维护）、OpenClaw、Hermes Agent 和 Paperclip 都采用 MIT 许可证。Crewmark 以 GPL-3.0 开源。运行 agent teams 的 Claude Code 不开源。",
      },
      {
        q: "LangGraph 免费吗？",
        a: "框架以 MIT 许可证免费提供。LangChain 的 LangSmith 平台有每席位每月 $0 的 Developer 套餐（1 个席位，每月最多 5k 条基础 trace，超出后按量付费，不含 Agent Server）、每席位每月 $39 并包含一个 Small Agent Server 的 Plus 套餐，以及定制报价的 Enterprise 套餐。更多见 [LangGraph 价格](/pricing/langgraph)。",
      },
      {
        q: "LangGraph vs CrewAI：有什么区别？",
        a: "LangGraph 偏底层：你构建由状态、节点和边组成的图，它没有内置的角色概念。CrewAI 用角色、目标和背景故事定义每个 agent，并把它们组成 crew，用 Flows 做逐步控制。两个框架都采用 MIT 许可证。CrewAI 是 Python 框架；LangGraph 有 Python 和 JS/TS 版本。见 [CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。",
      },
      {
        q: "用 LangGraph 需要 LangChain 吗？",
        a: "不需要。LangChain 的文档写明“LangGraph 不需要 LangChain”。示例中常用 LangChain 的模型集成，但 LangGraph 可以配合你代码调用的任何模型使用。",
      },
      {
        q: "2026 年 AutoGen 还算 LangGraph 的替代品吗？",
        a: "它的 README 说项目“已归档，Microsoft 不再积极维护”，并建议不要用于生产环境。Microsoft 引导新用户使用 Microsoft Agent Framework，称之为 AutoGen 的直接继任者。见 [AutoGen 替代品](/alternatives/autogen)。",
      },
      {
        q: "哪些 LangGraph 替代品能按计划运行 agent？",
        a: "OpenClaw（Automations）、Hermes Agent（内置 cron 调度器）、Paperclip（由 cron、webhook 或 API 触发的例行任务）和 Crewmark（工作时间内的心跳和重复 issue）。CrewAI 在它的 AMP 平台上提供定时，Claude Code 在 agent teams 之外另有定时任务。LangGraph 本身在 LangSmith Agent Server 上运行 cron 任务。",
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
    "Crewmark 是独立产品，与 LangChain 及本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
