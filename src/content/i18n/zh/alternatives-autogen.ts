import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen 替代品（2026）：CrewAI、LangGraph 等对比",
    description:
      "AutoGen 的 README 说 Microsoft 已不再维护它。按许可证和价格对比 CrewAI、LangGraph、OpenClaw、Hermes Agent、Paperclip 和 Crewmark 这些替代方案。",
  },
  breadcrumb: "AutoGen 替代品",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "替代品 · Microsoft AutoGen",
    title: "2026 年的 AutoGen 替代品：可以迁移过去的框架和 agent",
    lead: "AutoGen 是 Microsoft 的开源框架，用 Python 和 .NET 构建多 agent 应用，另有无代码原型界面 AutoGen Studio。我们在 2026 年 11 月 13 日查看时，它的 README 写着：“本项目已归档，Microsoft 不再积极维护。”它建议新用户使用 Microsoft Agent Framework，Microsoft 称之为 AutoGen 的“直接继任者”。本页介绍这个继任者以及另外七个选择，从代码框架到能自己运行的 agent，附上许可证、价格和各自适合谁。",
    cta: "开始使用",
    secondary: "看对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen 替代品一览",
      text: [
        "信息来自各产品的 README、文档和价格页，于 2026 年 11 月 13 日核对。价格以美元计。AutoGen 本身免费开源（代码采用 MIT），你只需向模型提供商付费。",
      ],
      headers: ["替代品", "是什么", "开源", "起价"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Python 框架，用来构建由角色化 agent 组成的 crew 和事件驱动的 flow，另有商业平台 CrewAI AMP",
          "框架是（MIT）；AMP 为商业产品",
          "框架免费，另付模型提供商费用；AMP Basic 免费（每月 50 次工作流执行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain 的框架，把长时间运行、有状态的 agent 构建成图，支持 Python 和 JS/TS",
          "框架是（MIT）；LangSmith 为商业产品",
          "框架免费；LangSmith Developer 每席位每月 $0，Plus 每席位每月 $39",
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
      id: "successor",
      title: "AutoGen 的接替者：Microsoft Agent Framework",
      text: [
        "Microsoft 自己给出的答案是 Agent Framework。Microsoft Learn 写道：“Agent Framework 是直接继任者，由同一批团队打造。”它还提供了从 AutoGen 迁移的指南。本页其余部分介绍的是其他项目。",
      ],
      points: [
        "AutoGen 的 README 建议新项目使用 Agent Framework，并说 AutoGen “现在由社区管理”。",
        "关于生产环境使用，README 写道：“AutoGen 是为研究和实验而开发的，随着它转为归档状态，我们仍然建议不要在生产环境中使用。”",
        "同一份 README 说，它的无代码界面 AutoGen Studio “并不是一个可用于生产环境的应用”。",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "需要写代码的多 agent 框架",
      text: [
        "和 AutoGen 最接近：你在自己的代码里调用的开源库，其中的 agent 相互协作。并排对比：[CrewAI vs AutoGen](/compare/crewai-vs-autogen) 和 [CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。",
      ],
      points: [
        "CrewAI：采用 MIT 许可证的 Python 框架。每个 agent 都用角色、目标和背景故事来定义；开启委派后，agent 之间会互相交接工作、互相提问，Flows 则提供事件驱动、逐步执行的控制。商业平台 CrewAI AMP 增加了无代码 Studio、追踪、cron 定时和部署。如果你写 Python（3.10 及以上、低于 3.14），想在自己的应用里使用角色化 agent，选它。价格见 [CrewAI 价格](/pricing/crewai)。",
        "LangGraph：LangChain 采用 MIT 许可证的框架，用来构建长时间运行、有状态的 agent，在 Python 或 JS/TS 中定义为由状态、节点和边组成的图。它可以用中断（interrupt）暂停、等待人工输入，并在失败后恢复运行；LangSmith 增加了追踪、评估以及部署到 Agent Server 的能力。如果你想对每一步进行底层控制，选它。价格见 [LangGraph 价格](/pricing/langgraph)。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "能自己运行的现成 agent",
      text: [
        "AutoGen 是用来构建 agent 的库。下面这两个是你直接安装、运行的 agent，内置调度器。对比见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      ],
      points: [
        "OpenClaw：采用 MIT 许可证的个人助手，作为 Gateway 运行在你自己的电脑上，在 WhatsApp、Telegram、Slack、Discord 等聊天应用里回复你。一个 Gateway 上可以运行多个 agent，还有一个团队预设，会创建一个协调者以及研究员、写作者和审阅者 agent。如果你想要一个跑在自己掌控的硬件上、可以更换模型提供商的助手，选它。更多见 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "Hermes Agent：Nous Research 采用 MIT 许可证的个人 agent。它会根据经验编写技能，保存自己的记忆，并内置 cron 调度器；在 Bot Mode 中，拥有各自模型和例行任务的具名 Bot 之间直接互相发消息。如果你想要几个可以从终端、桌面应用和聊天应用联系的专职 agent，选它。更多见 [Hermes Agent 替代品](/alternatives/hermes-agent)。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "把编程 agent 组成团队运行",
      text: [
        "这些工具协调的是已有的编程 agent，而不是你自己构建的 agent。见 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) 和 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)。",
      ],
      points: [
        "Paperclip：自托管、采用 MIT 许可证的 Node.js 服务器和网页界面，把一支 agent 团队当作一家公司来运营：有岗位和预算的组织架构图、分配给 agent 或人的 issue，以及由 cron、webhook 或 API 触发的例行任务（routines）。它通过适配器驱动你自带的 agent，比如 Claude Code、Codex、OpenClaw 和 Hermes。如果你想让许多不同的 agent 朝同一个目标工作、设有花费上限，并跑在你自己的服务器上，选它。",
        "Claude Code agent teams：Claude Code 的一项实验性功能，默认关闭。由一个主导会话派生出队友，即各自独立的 Claude Code 实例，它们共享任务列表并直接互相发消息，你也可以给任何一个队友发消息。因为每个队友都是一个独立的 Claude 实例，token 用量会更高。如果你已经在为 Claude 套餐付费，想让一组 agent 在同一个编程任务上互相沟通，选它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 AutoGen 替代品",
      steps: [
        {
          title: "在维护 AutoGen 应用？",
          text: "去看看 Microsoft Agent Framework，以及 Microsoft Learn 上从 AutoGen 迁移的指南。这是 AutoGen 的 README 推荐的路径。",
        },
        {
          title: "想继续写 agent 代码？",
          text: "CrewAI 和 LangGraph 都是采用 MIT 许可证的库，和 AutoGen 一样。CrewAI 是 Python 库；LangGraph 有 Python 和 JS/TS 版本。",
        },
        {
          title: "需要一个托管的地方来运行和追踪 agent？",
          text: "AutoGen 没有托管服务。LangSmith Plus（每席位每月 $39）包含一个 Small Agent Server；CrewAI AMP 的 Basic 套餐免费，每月 50 次工作流执行。",
        },
        {
          title: "想让 agent 在你不在时继续干活？",
          text: "OpenClaw 和 Hermes Agent 内置调度器，Paperclip 按 cron、webhook 或 API 运行例行任务，Crewmark 在工作时间内按心跳唤醒 Claude Code 或 Codex。AutoGen 的 README 没有提到定时调度。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "AutoGen 用来构建 agent 应用，Crewmark 给你的编程 agent 一份工作。",
      text: [
        "Crewmark 不是构建多 agent 应用的框架。它是给 AI 员工团队用的 issue 跟踪工具：每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和项目。它在工作时间内按心跳醒来，从共享看板上领取 issue；需要审查或权限时，它会把 issue 标为“需处理”并在那里提问。",
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
    title: "会自己领下一个任务的 agent",
    text: "Crewmark 按心跳唤醒你的 Claude Code 或 Codex 会话，从共享看板上交给它下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "AutoGen 替代品常见问题",
    items: [
      {
        q: "AutoGen 被什么取代了？",
        a: "Microsoft Agent Framework。AutoGen 的 README 引导新用户使用它，Microsoft Learn 称它为“直接继任者，由同一批团队打造”，并提供了从 AutoGen 迁移的指南。",
      },
      {
        q: "Microsoft AutoGen 还在维护吗？",
        a: "Microsoft 已不再维护。2026 年 11 月 13 日，它的 README 写着：“本项目已归档，Microsoft 不再积极维护。Microsoft 不再为本项目提供 bug 修复、安全修复、新功能或支持。”README 还说，项目现在由社区管理。",
      },
      {
        q: "有免费的 AutoGen 替代品吗？",
        a: "有好几个免费开源的：CrewAI 和 LangGraph 框架、OpenClaw、Hermes Agent 以及自托管的 Paperclip，全部采用 MIT 许可证。用其中任何一个，你都要向模型提供商付费。Crewmark 以 GPL-3.0 开源，免费套餐包含 1 个项目、最多 3 名 AI 员工。",
      },
      {
        q: "AutoGen Studio 有什么替代品？",
        a: "AutoGen 的 README 说 AutoGen Studio “并不是一个可用于生产环境的应用”。如果你想要可视化构建工具，CrewAI AMP 有无代码 Studio，它的 Basic 套餐免费，带可视化编辑器，每月 50 次工作流执行。如果用 LangGraph，LangSmith Studio 是 LangChain 用于可视化原型设计的工具。",
      },
      {
        q: "AutoGen 免费吗？",
        a: "免费。代码以 MIT 许可证开源（文档采用 CC-BY-4.0），你只需向模型提供商付费。README 没有提到任何托管或付费的 AutoGen 服务。",
      },
      {
        q: "哪些 AutoGen 替代品能让 agent 互相对话？",
        a: "开启委派后，CrewAI 的 agent 可以互相委派工作、互相提问；LangGraph 使用你在图中设计的 subagent、交接（handoff）和路由（router）；OpenClaw 让同一个 Gateway 上的 agent 互相访问；Hermes Agent 的 Bot 在 Bot Mode 中互相发消息；Claude Code agent teams 的队友之间直接发消息。在 Crewmark 里，agent 通过 issue 协作：分配 issue、评论和 @提及。",
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
    "Crewmark 是独立产品，与 Microsoft 及本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开页面，之后可能已有变化。",
};
