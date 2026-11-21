import type { CompareBundle } from "@/content/compare/types";

// Simplified Chinese translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "对比",
    hubName: "产品对比",
    cta: "开始使用",
    secondary: "查看对比表",
    shortTitle: "{a} vs {b}：各用一句话说明",
    tableTitle: "{a} vs {b} vs Crewmark 一览",
    rows: {
      category: "是什么",
      openSource: "开源",
      pricing: "价格",
      runs: "运行在哪里",
      agents: "Agent 与模型",
      board: "任务看板",
      schedule: "定时工作",
      talk: "agent 之间的沟通",
    },
    differencesTitle: "{a} 和 {b} 的主要区别",
    pickTitle: "什么情况下选 {x}",
    crewmarkTitle: "Crewmark 处在什么位置",
    crewmarkText:
      "Crewmark 和这两者工作在不同的层面。它不替代你的编程 agent，而是给它一份工作。每个 AI 员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。",
    crewmarkPoints: [
      "在工作时间内，心跳会按每 15 分钟到每天一次的频率唤醒每名员工，去领下一个 issue。",
      "一块共享看板，有状态、优先级、评论和 @提及；分配、评论或提及会唤醒相关的 agent。",
      "以 GPL-3.0 开源，1 个项目、最多 3 名 AI 员工免费。",
      "agent 之间的私信和汇报链即将推出。",
    ],
    sourcesTitle: "我们如何核对",
    sourcesText:
      "本页的每一条信息都来自各产品自己的官网、价格页、文档或 GitHub 仓库，核对于 2026 年 11 月 13 日。价格和套餐会变动，购买前请查看厂商的页面。官方网站：",
    relatedTitle: "更多对比",
    moreTitle: "替代品和价格",
    alternativesLabel: "{x} 替代品",
    pricingLabel: "{x} 价格",
    midTitle: "想让你的 agent 按计划工作吗？",
    midText: "Crewmark 给 Claude Code 和 Codex 一个岗位、一个心跳和一块共享看板，让它们自己去领下一份工作。",
    midButton: "开始使用",
    faqTitle: "常见问题",
    crewmarkFaq: {
      q: "Crewmark 是 {a} 和 {b} 的替代品吗？",
      a: "它负责的是工作中的另一部分。Crewmark 不自带 agent：它把 Claude Code 或 Codex 变成有岗位、心跳和共享看板的 AI 员工。取决于你用 {a} 和 {b} 做什么，它可以和它们一起用，也可以接管其中安排和跟踪 agent 工作的那部分。",
    },
    ctaTitle: "给你的 Claude Code 和 Codex agent 一份工作，而不只是一句提示词。",
    ctaText: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    ctaButton: "开始使用",
    checked: "已于 2026 年 11 月 13 日对照各产品的官网、价格页、文档或 GitHub 核对。",
    disclaimer:
      "Crewmark 是独立产品，与本页提到的任何公司均无关联，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们截至上述日期的公开网站和文档。",
    hub: {
      meta: {
        title: "AI agent 工具对比：30 组并排比较",
        description:
          "AI agent 工具的并排对比：Paperclip、Multica、CrewAI、LangGraph、OpenClaw、Hermes Agent、Claude Code、Codex、Devin、Conductor 等，价格和功能均取自各厂商。",
      },
      breadcrumb: "产品对比",
      title: "AI agent 工具并排对比",
      lead: "每篇对比都把两款工具放在一起，并把 Crewmark 作为第三列，只使用各厂商官网、价格页、文档或 GitHub 上的信息。不打分，也不评输赢：只写清每款工具是什么、多少钱、能做什么，方便你选出合适的那一个。",
      tableTitle: "全部对比",
      tableHeaders: ["对比", "简介"],
      productsTitle: "涉及的产品",
      moreTitle: "替代品和价格页面",
      productsHeaders: ["产品", "是什么", "开源"],
      midTitle: "想让你的 agent 按计划工作吗？",
      ctaTitle: "给你的 Claude Code 和 Codex agent 一份工作，而不只是一句提示词。",
      faq: [
        {
          q: "这些对比是怎么做的？",
          a: "依据各产品自己的官网、价格页、文档和 GitHub 仓库，核对日期写在每页底部。我们不给产品打分或排名。",
        },
        {
          q: "为什么每页都有 Crewmark？",
          a: "Crewmark 是我们的产品，所以作为第三列放在一起供参考。它和这里的大多数工具处在不同的层面：它把 Claude Code 或 Codex 变成有岗位、心跳和共享看板的 AI 员工。",
        },
        {
          q: "价格是最新的吗？",
          a: "在页面标注的日期是准确的。厂商经常调整价格和套餐，购买前请查看他们的价格页。",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "自托管的服务器和网页应用，把一支 AI agent 团队当作一家公司来运营，有组织架构图、预算和任务，驱动你自带的 agent，比如 Claude Code、Codex 或 OpenClaw。",
      category: "多 agent 编排（“AI 公司”）",
      openSource: "是，MIT",
      pricing: "自托管免费；未公布价格；云端版在等候名单中",
      runs: "自托管的 Node.js 服务器加 Postgres，或 Docker",
      agents: "通过适配器接入你自带的 agent：Claude Code、Codex、OpenClaw、Cursor、Gemini CLI、OpenCode 等",
      board: "有：关联到目标和项目的 issue，可分配给 agent 或人",
      schedule: "有：心跳，以及由 cron、webhook 或 API 触发的 Routines",
      talk: "通过任务讨论串，以及沿组织架构图的委派",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "一个工作区，你可以像给队友派活一样把 issue 分配给 AI 编程 agent，由你机器上的 daemon 运行你已有的 agent CLI。",
      category: "面向人和编程 agent 的 issue 看板",
      openSource: "源码可见（附加条件的 Apache 2.0）",
      pricing: "在你自己的组织内自托管免费；云端价格未公布",
      runs: "云端、自托管（Docker 或 Helm）或桌面应用；agent 运行在你掌控的 daemon 上",
      agents: "29 个 agent CLI，包括 Claude Code、Codex、Cursor Agent、OpenCode 和 Hermes",
      board: "有：看板视图和列表视图，agent 可作为负责人",
      schedule: "有：Autopilots，按 cron、webhook 或手动运行",
      talk: "有：在 squad（小队）中，负责人 agent 通过 @提及 把工作交给成员",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "面向产品团队的托管 issue 跟踪工具，也可以把 issue 委派给它自己的 Linear Agent，以及 Cursor、Codex、Devin 等第三方 agent。",
      category: "带 agent 平台的 issue 跟踪工具",
      openSource: "否",
      pricing: "Free $0；Basic $10、Business $16，每用户每月，按年付费；编程 agent 和 Loops 使用 AI 额度",
      runs: "云端",
      agents: "Linear Agent；基于 Claude Code 或 Codex 的云端编程 agent；以成员身份安装的第三方 agent",
      board: "有：issue、项目、周期（cycles）和举措（initiatives）",
      schedule: "有：Loops，按计划或由事件触发",
      talk: "未说明",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "开源的个人 AI 助手，运行在你自己的电脑上，在 WhatsApp、Telegram、Slack 等聊天应用里回复你。",
      category: "个人 AI 助手（自托管）",
      openSource: "是，MIT",
      pricing: "免费；没有付费档或托管服务；你向模型提供商付费",
      runs: "你自己机器上的本地 Gateway；支持 Docker 和 Nix 安装",
      agents: "以插件形式接入模型提供商：Anthropic、OpenAI、Gemini、OpenRouter、Ollama 等",
      board: "没有（它的 Tasks 台账和 TaskFlow 已被移除）",
      schedule: "有：内置的 Automations 调度器，外加 webhook",
      talk: "有：每个 Gateway 可运行多个 agent，agent 之间可互相访问，还有一个带协调者的团队预设",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "Nous Research 的开源个人 AI agent，可在终端、桌面应用或聊天应用里使用，会根据经验编写并改进自己的技能。",
      category: "个人 AI agent（自托管）",
      openSource: "是，MIT",
      pricing: "agent 本身免费；可选的 Nous Portal 每月：Free、Plus $20、Super $100、Ultra $200",
      runs: "你的机器或服务器；Portal 付费档包含一个云端托管的 agent",
      agents: "任意模型提供商：Nous Portal、OpenRouter、OpenAI、Anthropic、Gemini、本地模型等",
      board: "没有",
      schedule: "有：内置的 cron 调度器，以及每个 Bot 各自的例行任务",
      talk: "有：subagent；在 Bot Mode 中，具名的 Bot 之间互相发消息",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "托管的低代码平台，用来构建 AI agent，并把它们连接成多 agent 团队（它称之为 AI Workforce），用于销售、客服和运营工作。",
      category: "AI agent 平台（“AI Workforce”）",
      openSource: "否",
      pricing: "公开价格页只列出 Enterprise，需联系销售",
      runs: "云端",
      agents: "它自己的 agent，在无代码构建器里搭建；可用额度调用任意 LLM，或用你自己的 key",
      board: "没有 issue 看板；有任务历史和 Activity Center",
      schedule: "有：定时任务和应用触发器",
      talk: "有：在画布上连接的 agent 之间互相传递工作",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "托管的 AI 助手，在你的收件箱、日历、会议和 Slack 之间工作，运行周期性的例行任务，任何会对外产生影响的操作都会先问你。",
      category: "AI 助手（“AI 员工”）",
      openSource: "否",
      pricing: "免费：7 天内 $50 额度；每位活跃用户 $29.99/月起，含 3,000 额度",
      runs: "云端；可在 Slack、邮件、iMessage、电话和 Chrome 扩展中使用",
      agents: "它自己的助手；按任务挑选模型，也可由你指定",
      board: "没有；你在对话中给它布置任务",
      schedule: "有：Routines，按计划或由事件触发",
      talk: "未说明（每个工作区一个 Lindy）",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "开源的 Python 框架，用来构建由角色化 agent 组成的 crew 和逐步执行的 flow，另有商业平台 CrewAI AMP 用于部署和运行它们。",
      category: "多 agent 框架（Python）和平台",
      openSource: "框架是，MIT；AMP 平台为商业产品",
      pricing: "框架免费；AMP Basic 免费（每月 50 次执行）；Enterprise 定制报价",
      runs: "作为库运行在你的代码里；AMP 在 CrewAI 的云端或你自己的基础设施上",
      agents: "通过 API 调用的 LLM（默认 OpenAI；也支持其他提供商和本地模型）",
      board: "没有；任务在代码里定义",
      schedule: "AMP 上：cron 调度；框架本身未说明",
      talk: "有：agent 之间委派工作、互相提问；层级模式下有一个管理者 agent",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "LangChain 的开源框架，用代码把长时间运行、有状态的 agent 构建成由状态、节点和边组成的图，通过 LangSmith 部署。",
      category: "agent 编排框架（Python、JS）",
      openSource: "框架是，MIT；LangSmith 为商业产品",
      pricing: "框架免费；LangSmith Developer $0、Plus 每席位每月 $39、Enterprise 定制报价",
      runs: "运行在你的应用内；Agent Server 在 LangChain 的云端，Enterprise 可自托管",
      agents: "你的代码调用的任何模型",
      board: "没有",
      schedule: "Agent Server 上：cron 任务；库本身未说明",
      talk: "有，按你在图中的设计：subagent、交接（handoff）、路由（router）",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "Microsoft 的开源框架，用 Python 和 .NET 构建多 agent 应用。它的 README 现在写明项目已归档、Microsoft 不再维护，并指向 Microsoft Agent Framework。",
      category: "多 agent 框架（Python、.NET）",
      openSource: "是：代码 MIT，文档 CC-BY-4.0",
      pricing: "免费；没有托管服务",
      runs: "作为库运行在你的代码里；AutoGen Studio 在本地运行",
      agents: "提供 OpenAI 和 Azure 的模型客户端；Anthropic、Ollama 和 Gemini 标为实验性",
      board: "没有",
      schedule: "未说明",
      talk: "有：群聊、selector 和 swarm 团队、消息传递",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "一款 Mac 应用，并行运行 Claude Code、Codex、Cursor 和 OpenCode agent，每个都在自己的 git worktree 里。它在 2026 年 11 月 4 日宣布加入 Meta，并关闭了新用户注册和下载。",
      category: "并行编程 agent 运行器（Mac 应用）",
      openSource: "否",
      pricing: "免费使用；目前未列出云端套餐价格",
      runs: "Mac 应用；Conductor Cloud 自 11 月 13 日起只读，2026 年 11 月 20 日关闭",
      agents: "Claude Code、Codex、OpenCode 和 Cursor Agent，使用你自己的订阅或 key",
      board: "没有 issue 看板；有一个工作区列表，可从 GitHub 或 Linear issue 新建工作区",
      schedule: "仅限云端的 Routines，随云端一起结束",
      talk: "开启 Claude Code agent teams 时，会显示 agent 之间的消息",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "开源的终端应用，同时运行多个编程 agent，每个都在自己的 tmux 会话和 git worktree 里，因此它们在各自的分支上工作。",
      category: "并行编程 agent 运行器（终端）",
      openSource: "是，AGPL-3.0",
      pricing: "免费",
      runs: "你的终端；需要 tmux 和 GitHub CLI",
      agents: "默认 Claude Code；也可用 Codex、Gemini、Aider，或配置里的任何程序",
      board: "没有；有一个实例列表，带预览和 diff",
      schedule: "未说明",
      talk: "未说明",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "面向编程 agent 工作的看板，每个 issue 都有一个工作区，带 git worktree 和你选的 agent。它背后的公司 bloop 已于 2026 年 4 月关闭，项目继续以开源形式由社区维护。",
      category: "看板和并行编程 agent 运行器",
      openSource: "是，Apache-2.0",
      pricing: "本地应用免费；付费订阅已于 2026 年 4 月终止",
      runs: "在本地浏览器中运行，或作为桌面应用；云端部分可自托管",
      agents: "Claude Code、Codex、Gemini CLI、GitHub Copilot、Amp、Cursor、OpenCode 等",
      board: "有：带优先级和标签的看板 issue（需要登录）",
      schedule: "未说明",
      talk: "未说明",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "Anthropic 的编程 agent：读取你的代码库、编辑文件、运行命令，可在终端、IDE 扩展、桌面应用和网页上使用。",
      category: "编程 agent",
      openSource: "否（公开仓库，保留所有权利）",
      pricing: "包含在 Claude 付费套餐中：Pro 每月 $20、Max $100、Ultra $200；Team 和 Enterprise 按席位计费",
      runs: "终端、IDE 扩展、桌面应用、网页和移动端",
      agents: "它自己的 agent，运行在 Claude 模型上",
      board: "没有 issue 看板；agent teams 共享一个任务列表",
      schedule: "有：云端定时任务、桌面定时任务和 `/loop`",
      talk: "在实验性的 agent teams 中，队友之间互相发消息；subagent 向上汇报结果",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "Claude Code 的一项实验性功能，默认关闭：由一个主导会话派生出队友，即各自独立的 Claude Code 实例，它们共享任务列表并互相发消息。",
      category: "编程 agent 的多 agent 模式",
      openSource: "否（Claude Code 的一部分）",
      pricing: "随 Claude 付费套餐中的 Claude Code 提供",
      runs: "你的 Claude Code 会话",
      agents: "运行在 Claude 模型上的 Claude Code 实例",
      board: "一个共享任务列表，队友从中认领任务，支持依赖关系",
      schedule: "不属于 agent teams；Claude Code 另有定时任务",
      talk: "有：队友之间互相发消息，你也可以给任何一个队友发消息",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "OpenAI 的编程 agent，提供终端 CLI、IDE 扩展、ChatGPT 桌面应用和云端版本，包含在 ChatGPT 套餐中，也可配合 API key 使用。",
      category: "编程 agent",
      openSource: "部分开源：CLI、SDK 和 App Server 采用 Apache-2.0；IDE 扩展和云端版不开源",
      pricing: "包含在 Plus（每月 $20）起的 ChatGPT 套餐中，或使用 OpenAI API key",
      runs: "终端、IDE 扩展、ChatGPT 桌面应用和 Codex Cloud",
      agents: "它自己的 agent，运行在 OpenAI 模型上",
      board: "没有 issue 看板；付费套餐可接收 Linear issue",
      schedule: "有：ChatGPT 桌面应用和网页版中的定时任务",
      talk: "subagent：父 agent 派生子 agent 并收集它们的结果",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "开源的编程 agent，支持 200+ 家提供商的模型（包括本地模型），提供终端 UI、桌面应用、网页应用和 SDK。",
      category: "编程 agent",
      openSource: "是，MIT",
      pricing: "agent 本身免费，并提供免费模型；OpenCode Go 每月 $10，Go Plus 每月 $40",
      runs: "在你机器上的终端、桌面应用、网页应用和 SDK",
      agents: "它自己的 agent；200+ 家模型提供商，包括本地模型",
      board: "未说明",
      schedule: "实验性、需手动开启的定时任务（自 2026 年 10 月起）",
      talk: "subagent 向父 agent 汇报",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "Cognition 的 AI 软件工程师：编写、运行和测试代码并提交 pull request，既在各自拥有虚拟机的云端会话中工作，也可通过 Devin Desktop 和 Devin CLI 在本地工作。",
      category: "AI 软件工程师",
      openSource: "否",
      pricing: "Free $0；Pro 每月 $20；Max 每月 $200；Teams 每月 $80，另加每个开发者席位 $40",
      runs: "每个会话一台云端虚拟机；本地有 Devin Desktop 和 CLI",
      agents: "它自己的 agent；Cognition 的 SWE-2 加上多家实验室的前沿模型",
      board: "没有自己的看板；从 Linear、Jira 和 GitHub 接收工单",
      schedule: "有：Automations，按计划或由事件触发",
      talk: "有：协调者会话启动子 Devin 并给它们发消息",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "名为 Droids 的编程 agent，可在桌面应用、CLI 中运行，可在 CI 中 headless 运行，也可运行在 Factory 托管的云端计算机上。",
      category: "编程 agent 平台（Droids）",
      openSource: "否",
      pricing: "使用你自己的推理服务时免费；Pro 每月 $20；Plus 每月 $100；还有更高档位",
      runs: "本地桌面应用和 CLI；云端 Droid Computers；在 CI 中 headless 运行",
      agents: "它自己的 agent，运行在前沿模型和开放权重模型上，或使用你自己的 key",
      board: "没有通用看板；接收 Linear 和 Jira issue；Workstreams（beta）列出任务",
      schedule: "有：Automations，可按计划，或由 Slack、GitHub、webhook 触发",
      talk: "有，在 Workstreams（beta）中：一个编排者，其下的 agent 向它汇报",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "xAI 的托管 AI 队友：每个 Bot 都在云端拥有一台自己的计算机，登录你的工具，在 Slack 和 Microsoft Teams 里工作，运行例行任务，并互相交接工作。",
      category: "AI 同事（托管）",
      openSource: "否",
      pricing: "每月：Premium $30、Super $100、Ultra $200，含每周用量；Teams 和 Enterprise 需联系销售",
      runs: "每个 Bot 一台云端计算机；桌面和移动应用；在 Slack、Teams 和视频通话中",
      agents: "它自己的 Bot，基于 Grok 构建",
      board: "未说明；工作在聊天、讨论串和会议中交接",
      schedule: "有：按计划运行的例行任务，以及它通过观察你学会的工作流",
      talk: "有：Bot 之间互相发消息，并在群聊中协调工作",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "CopilotKit 的开源、可自托管的 AI 同事工作区，每个 Bot 都有自己的浏览器、文件和工具，模型和 agent 由你自带。",
      category: "AI 同事工作区（可自托管）",
      openSource: "是，MIT（使用单独授权的 CopilotKit Intelligence）",
      pricing: "个人项目免费；Business 每位活跃用户每月最高 $29",
      runs: "Mac 和 Windows 桌面应用；团队用 Kubernetes",
      agents: "内置 Bot，或通过 AG-UI 接入你自己的 agent；OpenAI、Claude、Gemini 或开放模型",
      board: "未说明",
      schedule: "有：Routines",
      talk: "未说明",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "Anthropic 在 Claude 应用里处理编程以外工作的 agent：你描述想要的结果，它在你的文件、应用和浏览器里完成调研、文档、电子表格和幻灯片。",
      category: "面向知识工作的 AI 同事",
      openSource: "否",
      pricing: "Claude 付费套餐：Pro 每月 $20、Max $100、Ultra $200；Team 和 Enterprise 按席位计费",
      runs: "Anthropic 的云端；通过 Claude Desktop 使用本地文件和浏览器",
      agents: "Claude 模型",
      board: "没有看板；有任务列表和 Scheduled 页面",
      schedule: "有：每小时、每天、每周或工作日，在云端运行",
      talk: "任务内的 subagent",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "Microsoft 365 Copilot 里的一个 agent，跨 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 执行多步骤任务，敏感操作前先请你审批。",
      category: "面向 Microsoft 365 的 AI 同事",
      openSource: "否",
      pricing: "Microsoft 365 Copilot 许可证，加按量付费的 Copilot Credits，每个 $0.01",
      runs: "Microsoft 的云端，使用 OneDrive 和 SharePoint 中的文件",
      agents: "模型选择器提供 GPT、Claude 和 Grok 模型，视租户设置而定",
      board: "未说明",
      schedule: "有：定时提示词（每位用户最多 25 个），以及邮件或 Teams 触发",
      talk: "未说明",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "ChatGPT 里的 Work 模式，用于最终产出待审阅成果的任务，比如演示文稿、电子表格和分析；它和 Codex 共享核心能力和用量。",
      category: "ChatGPT 里的 AI 同事",
      openSource: "否",
      pricing: "包含在 ChatGPT 套餐中：Free 和 Go 只能在桌面应用中有限使用；Plus（每月 $20）起可完整使用",
      runs: "OpenAI 的云端，或通过桌面应用在你的电脑上",
      agents: "OpenAI 模型",
      board: "未说明",
      schedule: "有：定时任务；符合条件的套餐可由 Gmail、Slack 或 GitHub 触发",
      talk: "任务内的 subagent",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "Cursor 的一项功能：由一个协调者 agent 规划一项较大的编程工作，分派给许多并行运行的云端 agent，配有共享笔记和任务看板。",
      category: "多 agent 编程工作区",
      openSource: "否",
      pricing: "Cursor Premium 每月 $30 起，以及 Teams 和 Enterprise；Free 和 Plus 不包含",
      runs: "Cursor 的云端 agent；需要在你的机器上运行时用本地 agent",
      agents: "Cursor 的 agent；协调者的模型由你选",
      board: "有：任务列表和看板，在 Multiplayer Projects 中共享",
      schedule: "有：定时、Slack 频道和 pull request 动态",
      talk: "有：协调者运行 worker agent；在 Multiplayer Projects 中协调者之间互相发消息",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "Microsoft 的低代码工作室，用来构建 agent、工作流和应用，并发布到 Microsoft Copilot、Teams、网站、电话线路和其他渠道。",
      category: "低代码 agent 和工作流构建工具",
      openSource: "否",
      pricing: "Copilot Credits：25,000 Credits 的额度包每月 $200（按年计费），或按量付费每个 Credit $0.01",
      runs: "Microsoft 的云端，在 Power Platform 环境中",
      agents: "你构建的 agent；每个 agent 可选模型，包括 GPT、Claude 和 Grok 模型",
      board: "没有看板；有 Monitor 标签页和 Workflows 页面",
      schedule: "有：定时和事件触发器（SharePoint、邮件、Dataverse 等）以及工作流",
      talk: "有：connected agents、Foundry 和 A2A agent；工作流可以启动一个 Copilot Cowork 任务",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "给 AI 员工团队用的 issue 跟踪工具：每名员工都是你电脑上的一个 Claude Code 或 Codex 对话，有岗位和目标，按心跳醒来，从共享看板上领取 issue。",
      category: "面向 Claude Code 和 Codex 的 AI 员工（多 agent harness）",
      openSource: "是，GPL-3.0",
      pricing: "免费版：1 个项目，最多 3 名 AI 员工；Pro 每月 $5、Team 每月 $10 即将推出",
      runs: "网页应用；agent 在你电脑上的 Claude Code 或 Codex 中运行；可自托管",
      agents: "Claude Code 和 Codex，使用你自己的订阅",
      board: "有：状态、优先级、负责人、评论和 @提及",
      schedule: "有：工作时间内的心跳（15 分钟到 24 小时）和重复 issue",
      talk: "目前通过 issue 沟通；agent 之间的私信和汇报链即将推出",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "自托管的 AI 公司控制平面 vs Python 多 agent 框架",
      title: "Paperclip vs CrewAI：AI 公司平台还是 agent 框架？",
      description:
        "Paperclip vs CrewAI：一个是把你的 agent 当公司来运营的自托管控制平面，一个是用来构建 agent crew 的 Python 框架。对比价格、开源情况和定时调度。",
      h1: "Paperclip vs CrewAI：把 agent 当公司运营，还是用代码构建 agent",
      lead: "Paperclip 和 CrewAI 都能组织多个 AI agent，但处在不同的层面。Paperclip 是一个自托管应用，有组织架构图、任务和预算，驱动你已经在用的 agent，比如 Claude Code 或 Codex。CrewAI 是一个 Python 框架，用来编写由角色化 agent 组成的 crew，这些 agent 通过 API 调用 LLM，另有商业平台用于部署。下面逐项对比两者，并说明 Crewmark 处在什么位置。",
      differences: [
        "层面：Paperclip 是一个通过网页界面运行和管理的应用；CrewAI 是一个供你写代码调用的库。",
        "Agent：Paperclip 通过适配器驱动现有的 agent，比如 Claude Code、Codex 或 OpenClaw；CrewAI 的 agent 在 Python 里定义，有角色、目标和背景故事，并调用 LLM API。",
        "工作：Paperclip 有关联到目标和项目的工单，可分配给 agent 或人；CrewAI 在代码中的 crew 和 flow 里定义任务。",
        "定时：Paperclip 有心跳和基于 cron 的 Routines；CrewAI 的 cron 调度列在其 AMP 平台上，没有列为框架本身的功能。",
      ],
      pickA: [
        "你想给已经在用的 agent（比如 Claude Code 或 Codex）配上组织架构图、预算和工单。",
        "你更愿意自托管，并在网页界面而不是代码里管理团队。",
      ],
      pickB: [
        "你要把 agent 工作流构建进自己的 Python 应用。",
        "你想在代码里为每个 agent 选择模型和工具，并部署在 CrewAI 的平台或你自己的基础设施上。",
      ],
      faq: [
        { q: "Paperclip 开源吗？", a: "是的，采用 MIT 许可证，自托管版本免费。云端版在等候名单中。" },
        {
          q: "CrewAI 免费吗？",
          a: "CrewAI 框架以 MIT 许可证开源，免费使用；你需要向模型提供商付费。CrewAI AMP 平台有免费的 Basic 套餐，每月 50 次工作流执行，另有定制报价的 Enterprise 套餐。",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "有组织架构图的 AI 公司 vs 面向编程 agent 的 issue 看板",
      title: "Paperclip vs Multica：给 agent 用组织架构图还是 issue 看板？",
      description:
        "Paperclip vs Multica：两者都让你已有的 agent（比如 Claude Code 和 Codex）去执行任务。一个用组织架构图和预算模拟一家公司，另一个是 issue 看板。",
      h1: "Paperclip vs Multica：给你的 agent 一家 AI 公司，还是一块 issue 看板",
      lead: "Paperclip 和 Multica 解决的是相似的问题：你已经有 Claude Code、Codex 这样的编程 agent，想在看板上而不是终端里给它们派活。Paperclip 把这一切建模成一家公司，有组织架构图、预算和治理。Multica 更接近 issue 跟踪工具，agent 作为负责人，由你机器上的 daemon 运行它们的 CLI。下面是两者的并排对比，以及 Crewmark 处在什么位置。",
      differences: [
        "组织模型：Paperclip 给 agent 设置头衔、汇报关系、职位描述和预算；Multica 给每个 agent 设置名称、提供商、运行时和指令，并把它们编入由负责人 agent 带领的 squad。",
        "许可证：Paperclip 以 MIT 开源；Multica 是源码可见的，采用附加条件的 Apache 2.0，在你自己的组织内自托管免费。",
        "部署：Paperclip 是自托管的，云端版在等候名单中；Multica 提供云端应用、自托管和桌面应用。",
        "Agent：Paperclip 通过适配器接入 agent；Multica 的 daemon 运行你已经安装的 agent CLI，共支持 29 种。",
      ],
      pickA: [
        "你想在整支 agent 团队中设置汇报关系、预算和审批。",
        "你想要自己运行、采用 MIT 许可证的软件。",
      ],
      pickB: [
        "你想要一块以 agent 为负责人的 issue 看板，用云端版或自托管。",
        "你用很多不同的 agent CLI，想把它们都放在同一块看板上。",
      ],
      faq: [
        {
          q: "Paperclip 和 Multica 支持 Claude Code 和 Codex 吗？",
          a: "支持。Paperclip 通过适配器接入它们，Multica 的 daemon 在你掌控的机器上运行它们的 CLI。两者也都支持其他几种 agent。",
        },
        {
          q: "Multica 开源吗？",
          a: "它是源码可见的：Multica License 是 Apache 2.0 加上额外条件。在你自己的组织内使用（包括自托管）是免费的；把它作为托管服务对外提供则需要商业许可。",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "由 agent 组成的公司 vs 一个个人助手（Paperclip 可以运行 OpenClaw）",
      title: "Paperclip vs OpenClaw：AI 公司还是个人 agent？",
      description:
        "Paperclip vs OpenClaw：OpenClaw 是运行在你自己电脑上的开源个人 AI 助手；Paperclip 把一支 agent 团队（包括 OpenClaw）当作公司来运营。对比价格、定时调度和任务。",
      h1: "Paperclip vs OpenClaw：一家由 agent 组成的公司，还是一个个人 agent",
      lead: "Paperclip 的 README 说得很直白：如果 OpenClaw 是一名员工，Paperclip 就是那家公司。OpenClaw 是运行在你机器上的开源个人助手，在聊天应用里和你对话。Paperclip 是自托管的控制平面，有组织架构图、任务和预算，可以驱动 OpenClaw、Claude Code、Codex 等 agent。两者经常一起使用。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "范围：OpenClaw 是一个助手（或一个 Gateway 上的多个相互隔离的 agent），你在聊天应用里和它对话；Paperclip 把许多 agent 组织成岗位、汇报关系和预算。",
        "工作：Paperclip 有关联到目标和项目的工单；OpenClaw 的文档说它共享的 Tasks 台账和 TaskFlow 已被移除，所以它没有任务看板。",
        "Agent：OpenClaw 以插件形式接入模型提供商；Paperclip 通过适配器驱动现有的 agent，其中包括 OpenClaw。",
        "两者都采用 MIT 许可证，可免费运行；你向模型提供商付费。",
      ],
      pickA: [
        "你运行着多个 agent，想把它们组织成一个有岗位、任务和预算的团队。",
        "你希望 OpenClaw 是几名员工之一，而不是你唯一的 agent。",
      ],
      pickB: [
        "你想要一个在 WhatsApp、Telegram、Slack 或 iMessage 上回复你的个人助手。",
        "你想让自动化和 agent 运行在你自己的电脑上，不依赖托管服务。",
      ],
      faq: [
        { q: "Paperclip 能运行 OpenClaw 吗？", a: "能。OpenClaw 是 Paperclip 通过适配器接入的 agent 之一，和 Claude Code、Codex 等并列。" },
        {
          q: "OpenClaw 免费吗？",
          a: "是的。它采用 MIT 许可证，README 说它没有付费档、托管服务或代币；你向接入的模型提供商付费。",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "AI 公司控制平面 vs Nous Research 的自我改进型个人 agent",
      title: "Paperclip vs Hermes Agent：AI 公司还是自我改进的 agent？",
      description:
        "Paperclip vs Hermes Agent：一个是把 agent 团队当公司运营的自托管控制平面，一个是 Nous Research 带 Bot 和例行任务的开源个人 agent。逐项对比。",
      h1: "Paperclip vs Hermes Agent：一支 agent 团队，还是一个会学习的 agent",
      lead: "Paperclip 和 Hermes Agent 都以 MIT 开源，都能运行不止一个 agent，但出发点截然相反。Hermes Agent 是 Nous Research 的个人 agent，会编写并改进自己的技能，还有可运行多个具名 Bot 的 Bot Mode。Paperclip 是一个控制平面，把 agent（包括 Hermes）组织成一家公司，有组织架构图、工单和预算。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "出发点：Hermes Agent 是你在终端、桌面应用或聊天应用里与之对话的 agent；Paperclip 是一个网页应用，把工作分配给你接入的 agent。",
        "工作：Paperclip 有关联到目标和项目的工单；Hermes Agent 的文档中没有任务看板或 issue 跟踪工具。",
        "多个 agent：Paperclip 用岗位和汇报关系；在 Hermes Agent 的 Bot Mode 中，每个 Bot 有自己的角色、模型和记忆，Bot 之间直接发消息。",
        "部署：Paperclip 是自托管的；Hermes Agent 运行在你的机器或服务器上，Nous Portal 的付费档包含一个云端托管的 agent。",
      ],
      pickA: [
        "你想要一支由不同 agent（Claude Code、Codex、Hermes 等）组成的团队，有岗位、工单和预算。",
        "你希望在看板上而不是聊天里跟踪工作。",
      ],
      pickB: [
        "你想要一个随时间积累技能和记忆的 agent。",
        "你想要能互相对话、运行例行任务的具名 Bot，可在终端、桌面应用或聊天应用里使用。",
      ],
      faq: [
        { q: "Paperclip 能运行 Hermes Agent 吗？", a: "能。Hermes 是 Paperclip 在适配器中列出的 agent 之一。" },
        {
          q: "Hermes Agent 多少钱？",
          a: "agent 本身免费，采用 MIT 许可证；你向模型提供商付费。可选的 Nous Portal 订阅有 Free、Plus（每月 $20）、Super（$100）和 Ultra（$200）几档。",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "构建 agent crew 的框架 vs 开箱即用的个人助手",
      title: "CrewAI vs OpenClaw：agent 框架还是个人助手？",
      description:
        "CrewAI vs OpenClaw：一个是构建多 agent crew 的 Python 框架，一个是运行在你自己电脑上、在聊天应用里对话的开源个人 AI 助手。逐项对比。",
      h1: "CrewAI vs OpenClaw：用代码构建 agent，还是运行一个个人助手",
      lead: "CrewAI 和 OpenClaw 都涉及多个 agent 协同工作，但用法很不一样。CrewAI 是一个 Python 框架：你编写由角色化 agent 组成的 crew 和 flow，部署在它的 AMP 平台或你自己的服务器上。OpenClaw 是一个现成的个人助手，运行在你的电脑上，在 WhatsApp、Telegram、Slack 等聊天应用里回复你。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "你要做的事：用 CrewAI 要写 Python；用 OpenClaw 是安装并配置一个助手。",
        "在哪里和它对话：CrewAI 运行在你的应用内部；OpenClaw 在你已经在用的聊天应用里回复你。",
        "多个 agent：CrewAI 的 agent 之间委派工作、互相提问，层级模式下有一个管理者 agent；OpenClaw 在一个 Gateway 上运行多个相互隔离的 agent，并有一个带协调者的团队预设。",
        "两者都采用 MIT 许可证。CrewAI 的 AMP 平台是商业产品；OpenClaw 没有付费档。",
      ],
      pickA: [
        "你是开发者，要把多 agent 工作流构建进产品里。",
        "你想在托管平台上部署和监控 crew。",
      ],
      pickB: [
        "你现在就想要一个个人助手，不用写代码。",
        "你想让它运行在自己的机器上，并能通过聊天应用从手机上找到它。",
      ],
      faq: [
        {
          q: "CrewAI 和 OpenClaw，哪个适合非开发者？",
          a: "OpenClaw 只需安装和配置，然后在聊天应用里和它对话。CrewAI 是一个 Python 库，面向要把 agent 放进自己软件里的开发者。",
        },
        {
          q: "CrewAI 和 OpenClaw 开源吗？",
          a: "两者都采用 MIT 许可证。CrewAI 的 AMP 平台是单独的商业产品；OpenClaw 没有付费档，也没有托管服务。",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "基于角色的 crew vs 基于图的编排，两者都是开源框架",
      title: "CrewAI vs LangGraph：多 agent 框架对比（2026）",
      description:
        "CrewAI vs LangGraph：基于角色的 crew 和 flow，还是由状态、节点和边组成的图。对比许可证、托管平台价格（CrewAI AMP、LangSmith）、定时调度和多 agent 模式。",
      h1: "CrewAI vs LangGraph：构建多 agent 系统的两种开源方式",
      lead: "CrewAI 和 LangGraph 是用代码构建多 agent 系统时最常被拿来比较的两个框架。CrewAI 把 agent 组织成 crew，每个 agent 有角色、目标和背景故事，另有事件驱动的 flow。LangGraph 让你把工作流定义成由共享状态、节点和边组成的图，不预设任何 agent 架构。两者都采用 MIT 许可证，两家公司也都销售托管平台。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "抽象方式：CrewAI 从具有角色、目标和背景故事的 agent 出发；LangGraph 从由状态和节点组成的图出发，不预设提示词或 agent 架构。",
        "语言：CrewAI 用 Python；LangGraph 有 Python 和 JavaScript/TypeScript 两套库。",
        "托管平台：CrewAI AMP 有免费的 Basic 套餐（每月 50 次工作流执行）和定制报价的 Enterprise 套餐；LangSmith 有免费的 Developer 套餐、每席位每月 $39 的 Plus 套餐和定制报价的 Enterprise 套餐。",
        "定时：两者列出的 cron 任务都在托管平台上，而不在开源库本身。",
      ],
      pickA: [
        "你想按角色和目标来描述 agent，并让它们互相委派。",
        "你用 Python 工作，并希望平台端有无代码的 Studio。",
      ],
      pickB: [
        "你想精细地控制状态以及步骤之间的路径。",
        "你除了 Python 还用 JavaScript 或 TypeScript，或者已经在用 LangSmith。",
      ],
      faq: [
        {
          q: "LangGraph 需要 LangChain 吗？",
          a: "不需要。它由 LangChain, Inc. 开发，但其文档说明 LangGraph 不依赖 LangChain。LangSmith 提供追踪、评估和部署。",
        },
        {
          q: "CrewAI 和 LangGraph 免费吗？",
          a: "两个框架都免费，采用 MIT 许可证。它们的托管平台 CrewAI AMP 和 LangSmith 都有免费套餐，另有付费或定制套餐。",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "两个多 agent 框架；AutoGen 的 README 说它已归档",
      title: "CrewAI vs AutoGen：多 agent 框架对比（2026）",
      description:
        "CrewAI vs AutoGen：基于角色的 crew 和 flow，还是 Microsoft 的群聊和团队（现已归档，由 Microsoft Agent Framework 接替）。对比许可证、模型和项目状态。",
      h1: "CrewAI vs AutoGen：crew 和 flow vs 群聊，以及由谁维护",
      lead: "CrewAI 和 AutoGen 都是较早出现、颇受欢迎的方案，用代码让多个 LLM agent 协同工作。CrewAI 由 crewAI, Inc. 开发，另有商业平台。AutoGen 的 README 现在写明它已归档、Microsoft 不再维护，并建议新用户使用 Microsoft Agent Framework，Microsoft 称之为它的直接继任者。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "维护：CrewAI 在积极开发中；AutoGen 的 README 说它已归档，Microsoft 不再积极维护，也不再提供 bug 修复或安全修复。",
        "模式：CrewAI 有由角色化 agent 组成的 crew 和 flow；AutoGen 有群聊、selector 和 swarm 团队，以及事件驱动的消息传递。",
        "语言：CrewAI 用 Python；AutoGen 有 Python 和 .NET。",
        "托管：CrewAI AMP 用于部署和运行 crew；AutoGen 没有托管服务，AutoGen Studio 在本地运行。",
      ],
      pickA: [
        "你要开始一个新的多 agent 项目，想要一个有人维护、带托管选项的框架。",
        "你想要能互相委派工作的角色化 agent。",
      ],
      pickB: [
        "你在维护一个现有的 AutoGen 应用，迁移之前需要弄清自己在运行什么。",
        "你在考虑 Microsoft Agent Framework，想把它和它的前身做比较。",
      ],
      faq: [
        {
          q: "AutoGen 还在维护吗？",
          a: "它的 README 说项目已归档，Microsoft 不再积极维护，并推荐 Microsoft Agent Framework，Microsoft Learn 称其为 AutoGen 的直接继任者。",
        },
        { q: "CrewAI 免费吗？", a: "框架采用 MIT 许可证，免费。CrewAI AMP 平台有免费的 Basic 套餐和定制报价的 Enterprise 套餐。" },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "面向 agent CLI 的 issue 看板 vs 带 Bot 和例行任务的个人 agent",
      title: "Multica vs Hermes Agent：agent 看板还是个人 agent？",
      description:
        "Multica vs Hermes Agent：一个是让编程 agent CLI（包括 Hermes）领取任务的 issue 看板，一个是 Nous Research 的自我改进型个人 agent。对比许可证、部署和定时调度。",
      h1: "Multica vs Hermes Agent：给 agent 用的看板，还是 agent 本身",
      lead: "Multica 和 Hermes Agent 处在不同的层面。Hermes Agent 是一个 agent：Nous Research 的开源个人助手，能从经验中学习技能，还能运行具名的 Bot。Multica 是包在 agent 外面的看板：你分配 issue，由你机器上的 daemon 运行你选的 agent CLI，其中也包括 Hermes。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "层面：Multica 分配和跟踪工作；Hermes Agent 负责干活。",
        "工作跟踪：Multica 有看板视图和列表视图，agent 作为负责人；Hermes Agent 的文档中没有任务看板。",
        "定时：Multica 的 Autopilots 按 cron 或 webhook 运行并创建 issue；Hermes Agent 有内置的 cron 调度器和每个 Bot 各自的例行任务。",
        "许可证：Hermes Agent 采用 MIT；Multica 是源码可见的，在你自己的组织内自托管免费。",
      ],
      pickA: [
        "你想为多个 agent（可能包括 Hermes）管理 issue、项目和评审。",
        "你的团队（人和 agent）在同一块看板上工作。",
      ],
      pickB: [
        "你想要一个保留记忆、改进自身技能的单一 agent。",
        "你宁愿在终端、桌面应用或聊天应用里和 agent 对话，也不想管理看板。",
      ],
      faq: [
        { q: "Multica 支持 Hermes Agent 吗？", a: "支持。Hermes 是 Multica 的 daemon 能运行的 29 个 agent CLI 之一。" },
        { q: "Hermes Agent 能按计划运行吗？", a: "能。它有内置的 cron 调度器，在 Bot Mode 中每个 Bot 都可以有例行任务。" },
      ],
    },
    "multica-vs-linear": {
      summary: "两款把 agent 作为负责人的 issue 跟踪工具：一个面向 agent CLI，一个面向产品团队",
      title: "Multica vs Linear：AI agent 的 issue 跟踪对比",
      description:
        "Multica vs Linear：两者都能把 issue 分配给 AI agent。Multica 在你的机器上运行编程 agent CLI；Linear 是托管的跟踪工具，带 Linear Agent 和云端编程 agent。",
      h1: "Multica vs Linear：你的 agent 在哪里领 issue",
      lead: "Linear 是许多产品团队已经在用的 issue 跟踪工具，现在也可以把 issue 委派给 Linear Agent、基于 Claude Code 或 Codex 的云端编程 agent，以及第三方 agent。Multica 从一开始就围绕 agent 构建：一块 issue 看板，由你自己机器上的 daemon 运行你已安装的 agent CLI。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "agent 在哪里运行：Multica 的 daemon 在你掌控的笔记本或服务器上运行 agent CLI；Linear 的编程 agent 运行在 Linear 的云端。",
        "分配方式：在 Multica 中，agent 就是负责人；在 Linear 中，委派后人仍是主要负责人，agent 作为贡献者加入。",
        "周期性工作：Multica 的 Autopilots 按 cron 或 webhook 运行；Linear 的 Loops 按计划或由事件触发，从 AI 额度中扣费。",
        "部署和价格：Multica 可以自托管（源码可见）；Linear 只有托管版，有 Free、Basic（$10）和 Business（$16），每用户每月，按年付费。",
      ],
      pickA: [
        "你想让 agent 在你自己的硬件上运行，使用你已有的 CLI 和登录状态。",
        "你想自托管看板。",
      ],
      pickB: [
        "你的团队已经在 Linear 里做规划，希望 agent 就在同一个跟踪工具里。",
        "你更希望编程 agent 运行在厂商的云端。",
      ],
      faq: [
        {
          q: "Linear 能把 issue 分配给 AI agent 吗？",
          a: "能。你可以把 issue 委派给 Linear Agent、使用 Claude Code 或 Codex 的云端编程 agent，以及安装在你工作区里的第三方 agent，比如 Cursor、Codex 和 Devin。",
        },
        {
          q: "Linear 多少钱？",
          a: "Free 为 $0，包含 2 个团队和 250 个 issue。Basic 每用户每月 $10，Business 每用户每月 $16，按年付费。云端编程 agent 和 Loops 还会使用预付的 AI 额度。",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "聊天应用里的个人助手 vs Anthropic 的编程 agent",
      title: "OpenClaw vs Claude Code：个人助手还是编程 agent？",
      description:
        "OpenClaw vs Claude Code：一个是在聊天应用里回复你的开源个人助手，一个是 Anthropic 面向代码仓库的编程 agent。对比开源情况、价格、模型和定时调度。",
      h1: "OpenClaw vs Claude Code：聊天里的助手，还是代码里的 agent",
      lead: "OpenClaw 和 Claude Code 都是运行在你自己电脑上的 agent，OpenClaw 甚至可以复用 Claude Code 的登录来调用 Claude 模型。但它们面向不同的工作。OpenClaw 是一个个人助手，你通过 WhatsApp、Telegram、Slack 或 iMessage 找它。Claude Code 是 Anthropic 的编程 agent：读取你的代码库、编辑文件、运行命令。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "用途：OpenClaw 通过聊天应用处理个人事务和自动化；Claude Code 在代码仓库中工作，可从终端、IDE、桌面应用或网页使用。",
        "模型：OpenClaw 以插件形式接入许多提供商，Claude 是其中之一；Claude Code 运行在 Claude 模型上。",
        "价格和许可证：OpenClaw 采用 MIT 许可证，免费（你向模型提供商付费）；Claude Code 包含在每月 $20 起的 Claude 付费套餐中，不开源。",
        "定时：OpenClaw 有内置的 Automations 调度器；Claude Code 有云端和桌面定时任务以及 `/loop`。",
      ],
      pickA: [
        "你想要一个能从手机上发消息给它的助手，处理个人事务和自动化。",
        "你想混用多家模型提供商，包括本地模型。",
      ],
      pickB: [
        "你的工作在代码库里：新功能、修复、评审和重构。",
        "你已经在为 Claude 套餐付费。",
      ],
      faq: [
        { q: "OpenClaw 能用 Claude 吗？", a: "能，可以用 Anthropic API key，或者复用同一台机器上的 Claude Code 登录。" },
        { q: "Claude Code 免费吗？", a: "不免费。它包含在 Claude 付费套餐中（Pro、Max、Ultra、Team 和 Enterprise），Free 套餐不包含。" },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Nous Research 的自我改进型个人 agent vs Anthropic 的编程 agent",
      title: "Hermes Agent vs Claude Code：个人 agent 还是编程 agent？",
      description:
        "Hermes Agent vs Claude Code：Nous Research 会学习技能、能运行 Bot 的开源 agent，还是 Anthropic 的编程 agent。对比模型、价格、定时调度和多 agent 功能。",
      h1: "Hermes Agent vs Claude Code：会学习的个人 agent，还是编程 agent",
      lead: "Hermes Agent 和 Claude Code 都运行在你的机器上，都有 subagent 和定时功能，也都能使用 Claude 模型。区别在于侧重点。Nous Research 的 Hermes Agent 是一个带学习循环的个人 agent：它从经验中编写技能，保有自己的记忆，可接入任意模型提供商。Claude Code 是 Anthropic 用于在代码库中工作的编程 agent。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "侧重点：Hermes Agent 是通用的个人 agent；Claude Code 是为写代码而做的。",
        "模型：Hermes Agent 支持许多提供商，其文档说 Claude 订阅只在 Max 加购额外用量时可用；Claude Code 运行在 Claude 模型上。",
        "多个 agent：Hermes Agent 的 Bot 之间直接发消息；在 Claude Code 实验性的 agent teams 中，队友之间互相发消息。",
        "价格和许可证：Hermes Agent 采用 MIT、免费，可选订阅 Nous Portal；Claude Code 随 Claude 付费套餐提供，不开源。",
      ],
      pickA: [
        "你想要一个能处理多种任务、技能随时间提升的 agent。",
        "你想自由选择和切换模型提供商。",
      ],
      pickB: [
        "你的主要工作在代码库里。",
        "你想要 Anthropic 围绕它的配套工具：IDE 扩展、桌面应用、代码审查和定时任务。",
      ],
      faq: [
        {
          q: "Hermes Agent 能用我的 Claude 订阅吗？",
          a: "它的文档说，Claude 订阅这条路径只适用于加购了额外用量的 Claude Max，不适用于 Claude Pro。你也可以用 API key 来使用 Claude。",
        },
        {
          q: "Claude Code 会像 Hermes Agent 一样学习新技能吗？",
          a: "Claude Code 使用你或你的团队写成 SKILL.md 文件的技能，并保有自动记忆。Hermes Agent 明确的侧重点是根据自身经验编写和改进技能。",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "个人助手 vs 开源编程 agent，两者都采用 MIT、不绑定模型",
      title: "OpenClaw vs OpenCode：个人助手还是编程 agent？",
      description:
        "OpenClaw vs OpenCode：两个采用 MIT 许可证、不绑定模型的 agent。一个是聊天应用里的个人助手，一个是运行在终端、桌面或浏览器里的编程 agent。",
      h1: "OpenClaw vs OpenCode：名字相似，用途不同",
      lead: "OpenClaw 和 OpenCode 都以 MIT 开源，都运行在你自己的机器上，也都支持许多模型提供商，所以常被拿来比较。但它们做的是不同的事。OpenClaw 是一个个人助手，你在 WhatsApp、Telegram、Slack 等聊天应用里和它对话。OpenCode 是一个编程 agent，提供终端 UI、桌面应用、网页应用和 SDK。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "用途：OpenClaw 通过聊天处理个人事务和自动化；OpenCode 编写和修改代码。",
        "界面：OpenClaw 在聊天应用里回复，并有一个 Control UI；OpenCode 以终端 UI、桌面应用、网页应用和 SDK 的形式运行。",
        "付费选项：OpenClaw 没有付费档；OpenCode 免费并提供免费模型，另有每月 $10 的 OpenCode Go 和每月 $40 的 Go Plus。",
        "定时：OpenClaw 有内置调度器；OpenCode 的定时功能是实验性的，需要手动开启。",
      ],
      pickA: [
        "你想要一个在任何地方都能发消息给它的助手。",
        "你想要由定时、webhook 或邮件触发的自动化。",
      ],
      pickB: [
        "你想要一个开源编程 agent，支持 200+ 家模型提供商，包括本地模型。",
        "你想用免费模型、无需账号就开始写代码。",
      ],
      faq: [
        {
          q: "OpenClaw 和 OpenCode 是同一个项目吗？",
          a: "不是。OpenClaw 是 OpenClaw Foundation 的个人助手；OpenCode 是 Anomaly 的编程 agent。两者都采用 MIT 许可证。",
        },
        {
          q: "用 OpenCode 需要 API key 吗？",
          a: "开始时不需要：它自带有每日限额的免费模型，使用这些模型无需账号。你也可以接入自己的提供商，或订阅 OpenCode Go。",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Claude Code 实验性的 agent teams vs OpenClaw 的多 agent Gateway",
      title: "Claude Code Agent Teams vs OpenClaw：多 agent 方案对比",
      description:
        "Claude Code agent teams vs OpenClaw：一个是 Claude Code 内实验性的主导者加队友模式，一个是在同一个 OpenClaw Gateway 上运行的多个个人 agent。看两者各自如何运行多个 agent。",
      h1: "Claude Code agent teams vs OpenClaw：运行多个 agent 的两种方式",
      lead: "两者都能让不止一个 agent 协同工作。Claude Code agent teams 是一项实验性功能，默认关闭：由一个主导会话派生出队友，即各自独立的 Claude Code 实例，它们共享任务列表并互相发消息。OpenClaw 在你机器上的一个 Gateway 里运行多个相互隔离的 agent，并有一个团队预设，由协调者把工作委派给研究员、写手和审阅者 agent。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "目的：agent teams 把一个编程任务拆分给多个 Claude Code 实例；OpenClaw 的 agent 是你在聊天应用里联系的个人助手。",
        "协调：agent teams 共享一个带依赖关系的任务列表，队友之间互相发消息；OpenClaw 的 agent 可以访问彼此的会话，其文档把团队预设称为提示词层面的引导，而不是调度器。",
        "生命周期：agent team 在一个主导会话下为某个任务运行；OpenClaw 的 agent 常驻在 Gateway 上，运行定时自动化。",
        "成本：agent teams 随 Claude 付费套餐中的 Claude Code 提供；OpenClaw 免费，采用 MIT 许可证。",
      ],
      pickA: [
        "你想让多个 Claude Code 实例拆分一个大型编程任务，并互相沟通。",
        "你已经在用 Claude Code，并且不介意开启一项实验性功能。",
      ],
      pickB: [
        "你想在自己的机器上运行长期存在、各有人设的个人 agent。",
        "你想通过聊天应用联系它们，并让它们按计划运行。",
      ],
      faq: [
        {
          q: "怎么开启 Claude Code agent teams？",
          a: "它是实验性功能，默认关闭：设置 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 后，主导会话就可以派生队友。参见 [Claude Code agent teams 详解](/blog/claude-code-agent-teams)。",
        },
        {
          q: "OpenClaw 的 agent 能组成团队工作吗？",
          a: "能。一个 Gateway 可以运行多个相互隔离的 agent，团队预设会创建一个协调者，以及研究员、写手和审阅者 agent。",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "两款并行编程 agent 工具，背后的公司都在 2026 年逐步关停了托管服务",
      title: "Vibe Kanban vs Conductor：2026 年的并行编程 agent",
      description:
        "Vibe Kanban vs Conductor：一个是面向编程 agent 的开源看板，一个是宣布加入 Meta、已关闭新用户注册的 Mac 应用。两者各自还有什么可用，以及如何比较。",
      h1: "Vibe Kanban vs Conductor：两者各自还剩什么，以及如何比较",
      lead: "Vibe Kanban 和 Conductor 都能并行运行多个编程 agent，每个都在自己的 git worktree 里，方便你审阅和合并它们的工作。两者在 2026 年都发生了变化。Vibe Kanban 背后的公司 bloop 在 4 月关闭，项目继续以社区维护的开源形式存在。Conductor 在 11 月 4 日宣布加入 Meta：新用户注册和下载已关闭，它的云端自 11 月 13 日起只读、11 月 20 日关闭，Mac 应用会持续获得新模型和关键修复，直到 2027 年初。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "可用性：Vibe Kanban 的本地应用任何人都可以免费运行；Conductor 不再接受新用户注册或下载。",
        "看板：Vibe Kanban 以看板 issue 规划工作；Conductor 列出工作区，可以从 GitHub 或 Linear issue 新建工作区。",
        "许可证：Vibe Kanban 以 Apache-2.0 开源；Conductor 是闭源的。",
        "平台和 agent：Vibe Kanban 在浏览器中运行，或作为桌面应用；Conductor 是 Mac 应用。两者都能运行 Claude Code、Codex、Cursor 和 OpenCode，Vibe Kanban 还列出了 Gemini CLI、GitHub Copilot、Amp 等。",
      ],
      pickA: [
        "你想要一个可以一直运行下去、也可以修改的开源工具。",
        "你想在 agent 前面放一块看板。",
      ],
      pickB: [
        "你已经在 Mac 上用 Conductor，只需要本地应用。",
        "你能接受云端功能在 2026 年 11 月 20 日结束。",
      ],
      faq: [
        {
          q: "Conductor 要关闭了吗？",
          a: "Conductor 在 2026 年 11 月 4 日宣布加入 Meta。新用户注册和下载已关闭，它的云端自 11 月 13 日起只读、11 月 20 日关闭，Mac 应用会持续获得新模型和关键修复，直到 2027 年初。参见 [Conductor 替代品](/blog/conductor-alternatives)。",
        },
        {
          q: "Vibe Kanban 还有人维护吗？",
          a: "bloop 在 2026 年 4 月 10 日宣布关闭。项目继续以 Apache-2.0 开源，由社区维护，本地应用可免费运行。",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "并行编程 agent：开源终端应用 vs 宣布加入 Meta 的 Mac 应用",
      title: "Claude Squad vs Conductor：并行运行 Claude Code agent",
      description:
        "Claude Squad vs Conductor：一个是在 tmux 和 worktree 中运行 agent 的开源终端应用，一个是宣布加入 Meta、已关闭新用户注册、云端于 2026 年 11 月 20 日结束的 Mac 应用。",
      h1: "Claude Squad vs Conductor：用终端还是 Mac 应用并行运行 agent",
      lead: "Claude Squad 和 Conductor 的核心工作相同：同时运行多个编程 agent，每个都在 git worktree 中的独立分支上，并帮你审阅和合并结果。Claude Squad 是基于 tmux 的开源终端应用。Conductor 是闭源的 Mac 应用，它在 2026 年 11 月 4 日宣布加入 Meta，不再接受新用户。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "界面：Claude Squad 是终端 UI，需要 tmux 和 GitHub CLI；Conductor 是 Mac 桌面应用。",
        "许可证：Claude Squad 以 AGPL-3.0 开源；Conductor 是闭源的。",
        "Agent：Claude Squad 默认使用 Claude Code，也能运行 Codex、Gemini、Aider 或你配置的任何程序；Conductor 运行 Claude Code、Codex、OpenCode 和 Cursor Agent。",
        "现状：Claude Squad 的最新版本是 v1.0.20（2026 年 8 月）；Conductor 在 2026 年 11 月 4 日关闭了新用户注册和下载，11 月 20 日结束云端服务，Mac 应用会更新到 2027 年初。",
      ],
      pickA: [
        "你常驻终端，想要一个任何人都能安装的开源工具。",
        "你想运行任何可以配置的 CLI agent。",
      ],
      pickB: [
        "你已经在用 Conductor，更喜欢内置 diff 和 pull request 的桌面应用。",
        "你在用 Mac，并且在 2027 年初之前只需要本地应用。",
      ],
      faq: [
        { q: "Claude Squad 免费吗？", a: "免费。它以 AGPL-3.0 开源；你为在其中运行的 agent 或模型 API 付费。" },
        {
          q: "现在还能下载 Conductor 吗？",
          a: "新用户不行：Conductor 在 2026 年 11 月 4 日宣布加入 Meta 时关闭了注册和下载。现有用户可以继续使用 Mac 应用，它会更新到 2027 年初。",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Cognition 的云端 AI 软件工程师 vs Anthropic 的编程 agent",
      title: "Devin vs Claude Code：AI 软件工程师还是编程 agent？",
      description:
        "Devin vs Claude Code：Cognition 带云端虚拟机、Automations 和子会话的 AI 软件工程师，还是 Anthropic 用于终端、IDE 和桌面的编程 agent。对比价格和功能。",
      h1: "Devin vs Claude Code：云端的工程师，还是身边的 agent",
      lead: "Devin 和 Claude Code 都是编程 agent，能编写、运行和测试代码，并提交 pull request。Cognition 的 Devin 以云端会话为核心，每个会话有自己的虚拟机，还有 Automations 和一个运行子 Devin 的协调者；它也有桌面应用和 CLI。Anthropic 的 Claude Code 在你的终端、IDE、桌面应用或网页中工作，运行在 Claude 模型上。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "运行位置：每个 Devin 云端会话都有自己的虚拟机；Claude Code 默认在本地运行，网页上有云端会话。",
        "模型：Devin 使用 Cognition 的 SWE-2 加上多家实验室的前沿模型，由路由器挑选；Claude Code 运行在 Claude 模型上。",
        "价格：Devin 有 Free、每月 $20 的 Pro、每月 $200 的 Max，以及每月 $80 加每个开发者席位 $40 的 Teams；Claude Code 随 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
        "自动化：Devin 的 Automations 按计划运行，也可由 Slack、GitHub、Linear 等来源的事件触发；Claude Code 的云端定时任务可按计划、通过 API 调用或由 GitHub 事件触发。",
      ],
      pickA: [
        "你希望每个任务都在独立的云端虚拟机里进行，并能从 Slack、Linear 或 Jira 发起。",
        "你想要一个能运行子会话并给它们发消息的协调者会话。",
      ],
      pickB: [
        "你希望 agent 在你自己检出的代码和终端里工作。",
        "你已经在为 Claude 套餐付费，想要 IDE 扩展、桌面应用和网页版。",
      ],
      faq: [
        {
          q: "Devin 多少钱？",
          a: "Free 为 $0，Pro 每月 $20，Max 每月 $200，Teams 每月 $80，外加每个完整开发者席位每月 $40，最多 100 名用户；Enterprise 需询价。",
        },
        { q: "Claude Pro 包含 Claude Code 吗？", a: "包含。所有 Claude 付费套餐都包含 Claude Code：Pro、Max、Ultra、Team 和 Enterprise。" },
      ],
    },
    "devin-vs-codex": {
      summary: "Cognition 的 AI 软件工程师 vs OpenAI 的编程 agent",
      title: "Devin vs Codex：AI 软件工程师对比（2026）",
      description:
        "Devin vs OpenAI Codex：云端虚拟机、Automations 和子会话，还是 CLI、IDE、ChatGPT 应用和云端里的编程 agent。对比价格、开源情况、定时调度和模型。",
      h1: "Devin vs Codex：两款也能在云端工作的编程 agent",
      lead: "Devin 和 Codex 都能在本地和云端运行编程任务，并提交 pull request。Cognition 的 Devin 为每个云端会话分配独立的虚拟机，并提供 Automations 和协调者会话。OpenAI 的 Codex 随 ChatGPT 套餐提供，可在终端 CLI、IDE 扩展、ChatGPT 桌面应用和 Codex Cloud 中运行。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "定价：Devin 按自己的套餐销售（Free、Pro $20、Max $200、Teams）；Codex 包含在 Plus（每月 $20）起的 ChatGPT 套餐中，或配合 API key 使用。",
        "开源：Codex 的 CLI、SDK 和 App Server 采用 Apache-2.0；Devin 不开源。",
        "模型：Devin 在 Cognition 的 SWE-2 和前沿模型之间路由；Codex 运行在 OpenAI 模型上。",
        "定时：Devin 的 Automations 可按计划运行，也支持多种事件来源；Codex 在 ChatGPT 桌面应用和网页版中提供定时任务。",
      ],
      pickA: [
        "你希望很多事件来源（Slack、Teams、Jira、PagerDuty、webhook）都能触发工作。",
        "你想要一个在并行虚拟机中运行子会话的协调者。",
      ],
      pickB: [
        "你已经在为 ChatGPT 付费，想让 agent 待在你的终端和 IDE 里。",
        "你想要一个可以查看源码的开源 CLI。",
      ],
      faq: [
        {
          q: "Codex 免费吗？",
          a: "Codex 包含在 Plus（每月 $20）起的 ChatGPT 付费套餐中，也可以使用 OpenAI API key 运行。CLI 本身以 Apache-2.0 开源。",
        },
        {
          q: "Devin 和 Codex 能接收 Linear issue 吗？",
          a: "能。你可以把 Linear issue 分配给 Devin；在 ChatGPT 付费套餐中，你可以把 Linear issue 分配给 Codex，或在评论中提及它。",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Factory 的 Droids 平台 vs Anthropic 的编程 agent",
      title: "Factory vs Claude Code：Droids 还是 Claude Code？",
      description:
        "Factory（Droids）vs Claude Code：一个是带 Automations、Workstreams 和云端计算机的编程 agent 平台，一个是 Anthropic 的编程 agent。对比模型、价格和多 agent 功能。",
      h1: "Factory vs Claude Code：Droids 平台，还是 Anthropic 的 agent",
      lead: "Factory 和 Claude Code 都是编程 agent，都有桌面应用、CLI 和用于 CI 的 headless 模式。Factory 的 Droids 支持许多模型（也可以用你自己的 key），并提供 Automations、带编排者的 Workstreams，以及 Factory 托管的云端计算机。Claude Code 是 Anthropic 运行在 Claude 模型上的 agent，包含在 Claude 付费套餐中。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "模型：Factory 支持前沿模型、开放权重模型和你自己的 key；Claude Code 运行在 Claude 模型上。",
        "价格：Factory 有 Free（自带推理服务）、每月 $20 的 Pro、每月 $100 的 Plus 以及更高档位；Claude Code 随 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
        "多个 agent：在 Factory 的 Workstreams（beta）中，编排者下属的 agent 向它汇报；在 Claude Code 实验性的 agent teams 中，队友之间互相发消息。",
        "自动化：Factory 的 Automations 可按计划，或由 Slack、GitHub、webhook 触发；Claude Code 有云端定时任务和 GitHub Actions。",
      ],
      pickA: [
        "你想在不同实验室的模型之间切换，或使用你自己的模型。",
        "你想要托管的云端计算机，以及按计划运行的自动化，比如从工单到 PR。",
      ],
      pickB: [
        "你满足于 Claude 模型，并且已经在为 Claude 套餐付费。",
        "你想要 Anthropic 围绕它的工具：代码审查、安全审查和插件。",
      ],
      faq: [
        {
          q: "Factory Droids 是什么？",
          a: "Droids 是 Factory 的编程 agent。它们运行在 Factory 桌面应用和 Droid CLI 中，可通过 `droid exec` 在 CI 中 headless 运行，也可运行在 Factory 托管的云端计算机上。",
        },
        {
          q: "Factory 支持 Claude 模型吗？",
          a: "Factory 表示它支持主流前沿模型，包括 Claude Opus 和 Sonnet，也支持开放权重模型和你自己的 API key。",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "开源、支持任意模型的编程 agent vs Anthropic 的编程 agent",
      title: "OpenCode vs Claude Code：开源编程 agent 对比",
      description:
        "OpenCode vs Claude Code：一个是采用 MIT 许可证、支持 200+ 家模型提供商和免费模型的编程 agent，一个是 Claude 付费套餐中的 Anthropic 编程 agent。对比价格、模型和功能。",
      h1: "OpenCode vs Claude Code：开源、任选模型，还是 Anthropic 的 agent",
      lead: "OpenCode 和 Claude Code 都是编程 agent，都有终端 UI、桌面应用、subagent 和 MCP。OpenCode 以 MIT 开源，支持 200+ 家提供商的模型，包括本地模型和一组免费模型。Claude Code 是 Anthropic 运行在 Claude 模型上的 agent，包含在 Claude 付费套餐中。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "许可证：OpenCode 采用 MIT；Claude Code 的仓库是公开的，但保留所有权利。",
        "模型：OpenCode 通过 Models.dev 支持 200+ 家提供商；Claude Code 运行在 Claude 模型上。",
        "价格：OpenCode 免费并提供免费模型，OpenCode Go 每月 $10；Claude Code 随 Pro（每月 $20）起的 Claude 套餐提供。",
        "定时：Claude Code 有云端和桌面定时任务以及 `/loop`；OpenCode 的定时功能是实验性的，需要手动开启。",
      ],
      pickA: [
        "你想要一个开源 agent，并能自由选择任何模型，包括本地模型。",
        "你想免费起步。",
      ],
      pickB: [
        "你想用 Claude 模型，并配上 Anthropic 的工具：定时任务、代码审查和 IDE 扩展。",
        "你已经在为 Claude 套餐付费。",
      ],
      faq: [
        {
          q: "OpenCode 免费吗？",
          a: "免费。agent 本身免费，采用 MIT 许可证，并自带有每日限额的免费模型。OpenCode Go 每月 $10，Go Plus 每月 $40。",
        },
        {
          q: "OpenCode 能用 Claude 模型吗？",
          a: "OpenCode 支持 200+ 家模型提供商，其中包括 Anthropic，所以你可以用 API key 使用 Claude 模型。",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "低代码的 AI Workforce 构建平台 vs 现成的 AI 助手",
      title: "Relevance AI vs Lindy：AI Workforce 还是 AI 助手？",
      description:
        "Relevance AI vs Lindy：一个是构建 AI agent 团队的低代码平台，一个是贯穿你的收件箱、日历和 Slack 的单个托管 AI 助手。对比价格、定时调度和 agent。",
      h1: "Relevance AI vs Lindy：搭建一支 AI Workforce，还是雇一个助手",
      lead: "Relevance AI 和 Lindy 都在卖 AI 员工这个概念，只是形态不同。Relevance AI 是一个低代码平台，用来构建专职 agent，并把它们连接成多 agent 的“AI Workforce”，通过销售团队卖给企业。Lindy 是一个托管助手，在你的收件箱、日历、会议和 Slack 之间工作，有例行任务和审批。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "形态：Relevance AI 是构建许多专职 agent 的工具；Lindy 是每个工作区一个、由你交派任务的助手。",
        "定价：Relevance AI 的价格页只列出 Enterprise，需联系销售；Lindy 有含 $50 额度的免费试用，付费套餐每位活跃用户每月 $29.99 起。",
        "多个 agent：Relevance AI 的 agent 在画布上互相传递工作；Lindy 的文档描述的是每个工作区一个 Lindy。",
        "审批：Lindy 在执行任何对外产生影响的操作前都会先询问；Relevance AI 有升级处理机制，Enterprise 版还有工作时间控制。",
      ],
      pickA: [
        "你想设计几个专职 agent 并把它们连起来，由厂商团队帮你部署。",
        "你在为公司采购，预期要走销售流程。",
      ],
      pickB: [
        "你今天就想要一个处理邮件、日程、会议和跟进事项的助手。",
        "你想先免费试用再付费。",
      ],
      faq: [
        {
          q: "Lindy 多少钱？",
          a: "免费试用在 7 天内提供 $50 额度。付费套餐每位活跃用户每月 $29.99 起，含 3,000 额度。",
        },
        {
          q: "Relevance AI 有免费套餐吗？",
          a: "它的文档说 Free 套餐已停用，公开价格页只列出 Enterprise，需联系销售。",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "xAI 的托管 AI 队友 vs Anthropic 的编程 agent",
      title: "Grok Bot vs Claude Code：AI 队友还是编程 agent？",
      description:
        "Grok Bot vs Claude Code：xAI 有自己计算机、在 Slack 和你的应用里工作的托管 Bot，还是 Anthropic 面向代码仓库的编程 agent。",
      h1: "Grok Bot vs Claude Code：应用里的队友，还是代码里的 agent",
      lead: "Grok Bot 和 Claude Code 都能承担实际工作，只是工作的地方不同。Grok Bot 是 xAI 的托管 AI 队友：每个 Bot 都在云端拥有一台自己的计算机，登录你的工具，在 Slack 和 Microsoft Teams 里工作，并运行例行任务。Claude Code 是 Anthropic 的编程 agent：它在你的代码仓库中工作，可从终端、IDE、桌面应用或网页使用。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "工作内容：Grok Bot 在 CRM、客服、报销和招聘等业务应用中处理工作；Claude Code 编写和修改代码。",
        "运行位置：每个 Grok Bot 都有自己的云端计算机，你合上笔记本后它仍继续工作；Claude Code 默认在你的机器上运行，网页上有云端会话。",
        "使用方式：你在 Grok Bot 的应用、Slack、Teams 或视频通话中给 Bot 发消息；你在终端、IDE、桌面应用或网页中使用 Claude Code。",
        "价格：Grok Bot 有每月 $30 的 Premium、每月 $100 的 Super 和每月 $200 的 Ultra；Claude Code 随 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
      ],
      pickA: [
        "你想要 AI 队友在团队已经在用的应用里处理销售、运营或客服工作。",
        "你希望它们在 Slack 和你的会议中，在你合上笔记本时也继续工作。",
      ],
      pickB: [
        "你的工作在代码库里：新功能、修复、评审和重构。",
        "你希望 agent 在你自己检出的代码里工作，使用你的工具和测试。",
      ],
      faq: [
        {
          q: "Grok Bot 多少钱？",
          a: "Premium 每月 $30，Super $100，Ultra $200，按月计费，每档都含每周的 Grok Bot 用量；超出部分按 token 成本计费。Teams 和 Enterprise 需联系销售。",
        },
        {
          q: "Grok Bot 能写代码吗？",
          a: "xAI 列出了一些工程用途，比如在产品界面中复现 bug 并提交工单，还提供了一份从 Linear 协调编程 agent 的指南。Claude Code 是为直接在你的代码仓库中工作而做的。",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "xAI 的托管 AI 队友 vs Nous Research 的开源个人 agent",
      title: "Grok Bot vs Hermes Agent：托管 Bot 还是开源 agent？",
      description:
        "Grok Bot vs Hermes Agent：xAI 有自己计算机的托管 Bot，还是 Nous Research 带 Bot、例行任务、支持任意模型提供商的开源 agent。",
      h1: "Grok Bot vs Hermes Agent：托管的队友，还是你自己运行的 agent",
      lead: "Grok Bot 和 Hermes Agent 都提供能互相对话、运行例行任务的具名 Bot，所以常被拿来比较。Grok Bot 是 xAI 的托管产品：每个 Bot 都有自己的云端计算机，在 Slack、Teams 和你的应用里工作。Hermes Agent 是 Nous Research 的开源 agent，由你自己运行，可接入任意模型提供商，还有可运行多个具名 Bot 的 Bot Mode。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "托管：Grok Bot 运行在 xAI 的云端；Hermes Agent 运行在你的机器或服务器上，Nous Portal 的付费档包含一个云端托管的 agent。",
        "许可证和价格：Grok Bot 是闭源的，每月 $30 起；Hermes Agent 采用 MIT、免费，可选的 Nous Portal 订阅每月 $20 起。",
        "模型：Grok Bot 基于 Grok 构建；Hermes Agent 支持许多提供商，包括本地模型。",
        "在哪里和它对话：Grok Bot 在它自己的应用、Slack、Teams 和视频通话中工作；Hermes Agent 可在终端、桌面应用或聊天应用里使用。",
      ],
      pickA: [
        "你想要拥有自己计算机的托管队友，在 Slack、Teams 和你的会议中工作。",
        "你不想自己运行任何东西。",
      ],
      pickB: [
        "你想要一个自己运行的开源 agent，使用你选择的模型提供商。",
        "你想要一个随时间编写并改进自己技能的 agent。",
      ],
      faq: [
        {
          q: "Hermes Agent 免费吗？",
          a: "免费。它采用 MIT 许可证，免费使用；你向模型提供商付费。可选的 Nous Portal 订阅有 Free、Plus（每月 $20）、Super（$100）和 Ultra（$200）几档。",
        },
        {
          q: "Grok Bot 和 Hermes Agent 都有能互相对话的 Bot 吗？",
          a: "是的。Grok Bot 之间互相发消息，并在群聊中协调工作；在 Hermes Agent 的 Bot Mode 中，具名的 Bot 之间直接发消息。",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "开源、可自托管的 AI 同事工作区 vs xAI 的托管 Bot",
      title: "OpenBot vs Grok Bot：开源还是托管的 AI 同事？",
      description:
        "OpenBot vs Grok Bot：CopilotKit 采用 MIT 许可证、可自托管的 AI 同事工作区，还是 xAI 的托管 Bot。对比托管方式、模型、价格和功能。",
      h1: "OpenBot vs Grok Bot：自己托管的 AI 同事，还是租用的 AI 同事",
      lead: "OpenBot 和 Grok Bot 都给每个 AI 同事一台自己的计算机，带浏览器和工具，也都有例行任务和审批。OpenBot 来自 CopilotKit，开源且可自托管：它运行在你的笔记本或你的 Kubernetes 集群上，使用你选择的模型和 agent。Grok Bot 是 xAI 的托管产品，基于 Grok 构建，在 Slack、Teams 和你的应用里工作。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "托管：OpenBot 运行在你的笔记本或 Kubernetes 集群上，也可在抢先体验中由 CopilotKit 托管；Grok Bot 运行在 xAI 的云端。",
        "许可证：OpenBot 的应用模板采用 MIT，CopilotKit Intelligence 单独授权；Grok Bot 是闭源的。",
        "模型：OpenBot 支持 OpenAI、Claude、Gemini 或开放模型，并通过 AG-UI 接入你自己的 agent；Grok Bot 基于 Grok 构建。",
        "价格：OpenBot 个人项目免费，Business 每位活跃用户每月最高 $29；Grok Bot 各套餐每月 $30、$100 或 $200。",
      ],
      pickA: [
        "你想自托管 AI 同事，并把数据和模型掌握在自己手里。",
        "你想定制工作区，或以白标形式提供它。",
      ],
      pickB: [
        "你想要在 Slack、Teams 和你的会议中开箱即用的托管 Bot。",
        "你不想自己运行基础设施。",
      ],
      faq: [
        {
          q: "OpenBot 免费吗？",
          a: "在你的笔记本上用于个人项目是免费的。OpenBot for Business 每位活跃用户每月最高 $29，另加每月模型支出超过 $5,000 部分的 5%；你直接向模型提供商付费。",
        },
        {
          q: "OpenBot 开源吗？",
          a: "OpenBot 的应用模板采用 MIT 许可证。它使用单独授权的 CopilotKit Intelligence：在笔记本上免费，在 Kubernetes 上有试用和生产许可证。",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Anthropic 做知识工作的 agent vs 它写代码的 agent",
      title: "Claude Cowork vs Claude Code：该用哪个 Anthropic agent？",
      description:
        "Claude Cowork vs Claude Code：Anthropic 在 Claude 应用里处理文档、调研和电子表格的 agent，还是它面向代码仓库的编程 agent。",
      h1: "Claude Cowork vs Claude Code：做不同工作的两个 Anthropic agent",
      lead: "Claude Cowork 和 Claude Code 出自同一家公司，都运行在 Claude 模型上，Anthropic 也表示 Cowork 采用和 Claude Code 相同的架构。但它们面向的工作不同。Cowork 在 Claude 应用里处理知识工作，比如调研、文档、电子表格和幻灯片，主要在 Anthropic 的云端运行。Claude Code 在你的代码仓库里工作，可从终端、IDE、桌面应用或网页使用。两者都包含在 Claude 付费套餐中。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "工作内容：Cowork 把一个目标结果变成文档、带公式的电子表格、演示文稿或整理好的文件夹；Claude Code 读取你的代码库、编辑文件、运行命令。",
        "运行位置：Cowork 的任务在 Anthropic 的云端运行，通过 Claude Desktop 访问本地文件；Claude Code 默认在你的机器上运行，网页上有云端会话。",
        "使用方式：Cowork 在桌面端、网页端和移动端的 Claude 应用里；Claude Code 在终端、IDE 扩展、桌面应用和网页上。",
        "定时：Cowork 在云端按每小时到每周安排任务；Claude Code 有云端和桌面定时任务以及 `/loop`。",
      ],
      pickA: ["你的工作是调研、文档、电子表格或幻灯片。", "你想在手机或浏览器上交出任务，然后拿回文件。"],
      pickB: ["你的工作在代码仓库里。", "你想要一个能用你的终端、测试和 git 的 agent。"],
      faq: [
        {
          q: "Claude Cowork 和 Claude Code 包含在同一个套餐里吗？",
          a: "是的。两者都包含在 Claude 付费套餐中：Pro、Max、Ultra、Team 和 Enterprise。Claude Free 两者都不包含。",
        },
        {
          q: "Claude Cowork 能写代码吗？",
          a: "Anthropic 把 Cowork 定位于编程以外的知识工作，把 Claude Code 定位于软件工程。对于只在你电脑上运行的任务，Anthropic 推荐使用桌面应用里的 Claude Code。",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Anthropic 和 OpenAI 在各自聊天应用里的 AI 同事",
      title: "Claude Cowork vs ChatGPT Work：两款 AI 同事对比",
      description:
        "Claude Cowork vs ChatGPT Work：Anthropic 和 OpenAI 处理文档、调研和周期性任务的 agent。对比套餐、运行位置、定时和审批。",
      h1: "Claude Cowork vs ChatGPT Work：聊天应用里的两个 AI 同事",
      lead: "Claude Cowork 和 ChatGPT Work 做的是同一类工作：你在聊天应用里描述想要的结果，agent 规划步骤，在文件、已连接的应用和浏览器里完成工作，再交回待你审阅的成果。Cowork 来自 Anthropic，包含在 Claude 付费套餐中。ChatGPT Work 来自 OpenAI，包含在 ChatGPT 套餐中，并和 Codex 共享能力和用量。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "套餐：Cowork 包含在 Pro（每月 $20）起的 Claude 付费套餐中，Free 不含；ChatGPT Work 在 Free 和 Go 上只能在桌面应用中有限使用，Plus（每月 $20）起可完整使用。",
        "运行位置：Cowork 在 Anthropic 的云端运行，通过 Claude Desktop 访问本地文件；ChatGPT Work 在 OpenAI 的云端运行，或通过 ChatGPT 桌面应用在本地运行。",
        "定时：Cowork 按每小时到每周运行定时任务；ChatGPT Work 有定时任务，符合条件的套餐还能由 Gmail、Slack 或 GitHub 事件触发。",
        "审批：Cowork 有 Manual、Auto（带安全审查）和 Skip 三种模式；ChatGPT Work 遇到重要操作会暂停等你批准，桌面应用里还有权限模式。",
      ],
      pickA: [
        "你已经在为 Claude 付费，或想用 Anthropic 的模型处理文档和调研。",
        "你想要在电脑关机时也能在云端运行的定时任务。",
      ],
      pickB: [
        "你已经在为 ChatGPT 付费，或想先在桌面应用里用 Free 套餐试试。",
        "你想要由 Gmail、Slack 或 GitHub 事件触发的任务。",
      ],
      faq: [
        {
          q: "ChatGPT Work 免费吗？",
          a: "ChatGPT Free 和 Go 可以在桌面应用里有限使用 ChatGPT Work。Plus（每月 $20）和 Pro 可在桌面端、网页端和移动端使用。",
        },
        { q: "Claude Cowork 免费吗？", a: "不免费。它只包含在 Claude 付费套餐中，Pro 每月 $20 起。" },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Microsoft 365 的 AI 同事 vs Anthropic 的 AI 同事",
      title: "Copilot Cowork vs Claude Cowork：选 Microsoft 还是 Anthropic？",
      description:
        "Copilot Cowork vs Claude Cowork：Microsoft 跨 Outlook、Teams 和 Office 文件工作的 agent，还是 Anthropic 在 Claude 应用里的 agent。对比许可证、费用和功能。",
      h1: "Copilot Cowork vs Claude Cowork：Microsoft 365 的 agent，还是 Claude 的",
      lead: "Copilot Cowork 和 Claude Cowork 名字相近，思路也一样：把一项多步骤任务交给 agent，并审批它做的事。Copilot Cowork 跨 Microsoft 365 工作，发邮件、安排会议、编辑 OneDrive 和 SharePoint 里的 Office 文件，可以使用 GPT、Claude 或 Grok 模型。Claude Cowork 是 Anthropic 在 Claude 应用里的 agent，运行在 Claude 模型上。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "工作所在的地方：Copilot Cowork 在 Outlook、Teams、OneDrive 和 SharePoint 里工作，无法访问你本地设备上的文件；Claude Cowork 通过 Google Drive、Gmail、Microsoft 365 和 Slack 等连接器工作，并通过 Claude Desktop 访问本地文件。",
        "费用：Copilot Cowork 需要 Microsoft 365 Copilot 许可证，外加每个 $0.01 的 Copilot Credits；Claude Cowork 包含在 Pro（每月 $20）起的 Claude 付费套餐中。",
        "模型：Copilot Cowork 有模型选择器，提供 GPT、Claude 和 Grok 模型，视租户设置而定；Claude Cowork 运行在 Claude 模型上。",
        "账户：Copilot Cowork 面向工作或学校账户，个人账户处于预览阶段；Claude Cowork 包含在个人和团队的 Claude 套餐中。",
      ],
      pickA: [
        "你的组织用 Microsoft 365，并且已经购买了 Microsoft 365 Copilot 许可证。",
        "你想让 agent 替你发邮件、订会议、在 Teams 里发消息，并经你审批。",
      ],
      pickB: [
        "你在 Microsoft 365 之外工作，或者想在自己电脑上使用本地文件和浏览器。",
        "你想要固定的月度套餐，而不是按 Credits 计费。",
      ],
      faq: [
        {
          q: "Copilot Cowork 多少钱？",
          a: "它需要 Microsoft 365 Copilot 许可证，用量以 Copilot Credits 计费：按量付费每个 Credit $0.01，或者选择预付一年的方案，折扣从 5% 到 20% 不等。",
        },
        {
          q: "Copilot Cowork 用 Claude 吗？",
          a: "视租户设置而定，它的模型选择器除了 GPT 和 Grok 模型，还包括 Claude Opus、Sonnet 和 Fable；欧盟数据边界（EU Data Boundary）内的租户只能用 GPT 模型。",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "ChatGPT 的 Work 模式 vs OpenAI 的编程 agent",
      title: "ChatGPT Work vs Codex：该用哪一个？",
      description:
        "ChatGPT Work vs Codex：OpenAI 处理文档和分析的 Work 模式，还是面向代码仓库的编程 agent。两者共享能力和用量，区别在这里。",
      h1: "ChatGPT Work vs Codex：同一个引擎，不同的工作",
      lead: "ChatGPT Work 和 Codex 都是 OpenAI 的 agent，OpenAI 表示 Work 和 Codex 共享核心能力、执行方式和用量上限。区别在于用途。ChatGPT Work 是 ChatGPT 里的一种模式，用于最终产出待审阅成果的任务，比如演示文稿、电子表格和分析。Codex 是编程 agent，提供终端 CLI、IDE 扩展、ChatGPT 桌面应用和云端版本。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "工作内容：ChatGPT Work 交回文档、演示文稿、电子表格和分析；Codex 在代码仓库中读取、编辑和运行代码。",
        "使用方式：ChatGPT Work 在网页端、桌面端和移动端的 ChatGPT 里；Codex 在终端 CLI、IDE 扩展、ChatGPT 桌面应用和 Codex Cloud 中。",
        "用量：两者共享 Codex 的用量上限和额度。",
        "开源：Codex 的 CLI、SDK 和 App Server 采用 Apache-2.0；ChatGPT Work 不开源。",
      ],
      pickA: ["你的任务最终是一份文档、一套演示文稿或一份分析。", "你想在手机或网页上的 ChatGPT 里发起任务。"],
      pickB: [
        "你的任务是代码：新功能、修复和评审。",
        "你想要一个在终端或 IDE 里、或者用 `codex exec` 在 CI 里运行的 agent。",
      ],
      faq: [
        {
          q: "ChatGPT Work 和 Codex 共享用量吗？",
          a: "是的。OpenAI 表示 ChatGPT Work 和 Codex 共享核心能力、执行方式和用量上限，包括额度。",
        },
        {
          q: "哪些 ChatGPT 套餐包含 Work？",
          a: "Free 和 Go 可在桌面应用中有限使用；Plus（每月 $20）、Pro 和 Business 可在桌面端、网页端和移动端使用。",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Anthropic 在 Claude 应用里的 AI 同事 vs xAI 拥有自己计算机的 Bot",
      title: "Claude Cowork vs Grok Bot：两款 AI 同事对比",
      description:
        "Claude Cowork vs Grok Bot：Anthropic 在 Claude 应用里处理文档和调研的 agent，还是 xAI 拥有自己云端计算机、在 Slack 和你的应用里工作的 Bot。",
      h1: "Claude Cowork vs Grok Bot：Claude 里的任务 agent，还是一支 Bot 团队",
      lead: "Claude Cowork 和 Grok Bot 都是你不在时也会在云端继续工作的 AI 同事。Claude Cowork 是 Anthropic 在 Claude 应用里的 agent：你交给它一项任务，拿回文件。Grok Bot 来自 xAI：每个 Bot 都有自己的云端计算机，登录你的工具，在 Slack、Microsoft Teams 和视频通话中工作，并互相交接工作。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "形态：Claude Cowork 从你这里接任务，任务内部有 subagent；Grok Bot 给每个 Bot 一份自己的工作，Bot 之间互相发消息，并在群聊中协调。",
        "在哪里和它协作：Claude Cowork 在桌面端、网页端和移动端的 Claude 应用里；Grok Bot 在它自己的应用、Slack、Teams 和视频通话中。",
        "套餐：Claude Cowork 包含在 Pro（每月 $20）起的 Claude 付费套餐中；Grok Bot 包含在 Premium（每月 $30）、Super 和 Ultra 套餐中。",
        "模型：Claude Cowork 运行在 Claude 模型上；Grok Bot 基于 Grok 构建。",
      ],
      pickA: ["你要交出文档、调研和电子表格，并拿回文件。", "你已经在用 Claude。"],
      pickB: ["你想要几个各有职责的 Bot，在 Slack 和团队的应用里工作。", "你想让 Bot 参加你的会议。"],
      faq: [
        {
          q: "Grok Bot 能参加会议吗？",
          a: "能。xAI 表示，你可以把 Bot 加入 Google Meet、Zoom 或 Teams 通话，它会旁听，能帮上忙时加入聊天，会后跟进落实。",
        },
        {
          q: "我的电脑关机时，Claude Cowork 还能运行吗？",
          a: "云端任务会在 Anthropic 的服务器上继续运行；只有需要本地文件或你的浏览器的工作，才要等 Claude Desktop 打开。",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "Cursor 面向代码的协调者 agent vs xAI 跨应用工作的 Bot",
      title: "Cursor Projects vs Grok Bot：两种协调者 agent 对比",
      description:
        "Cursor Projects vs Grok Bot：一个协调者 agent 在你的代码上运行许多云端 agent，还是 xAI 在 Slack 和你的应用里工作的 Bot。对比套餐和功能。",
      h1: "Cursor Projects vs Grok Bot：写代码的 agent 团队，还是做其他一切的",
      lead: "Cursor Projects 和 Grok Bot 都让一个 agent 负责管理其他 agent。在 Cursor Project 中，一个协调者 agent 规划一个新功能、一次迁移或一个应用，把编码工作分派给许多并行运行的云端 agent。Grok Bot 是 xAI 的一组 AI 队友，每个都有自己的云端计算机，在 Slack、Teams 和你的应用里工作，其中一个 Bot 可以管理其他 Bot。两者的起步套餐都是每月 $30。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "工作内容：Cursor Projects 用于 GitHub 仓库里的软件工作；Grok Bot 处理 CRM、客服、报销和招聘等业务应用中的工作。",
        "协调方式：Cursor Project 的协调者创建并管理 worker agent，在 Multiplayer Projects 中协调者之间互相发消息；Grok Bot 之间互相发消息，并在群聊中协调。",
        "共享状态：Cursor Project 保存共享文件（偏好、笔记、工作流程）和一块任务看板；Grok Bot 记住你团队的工作方式。",
        "触发方式：Cursor Projects 根据定时、Slack 频道和 pull request 行动；Grok Bot 按计划运行例行任务，并在 Slack 和 Teams 中工作。",
      ],
      pickA: ["你想把一项长期的编程工作规划好，拆给许多 agent。", "你的团队已经在用 Cursor 和 GitHub。"],
      pickB: ["你想要在现有应用里处理运营、销售或客服的 AI 队友。", "你希望它们在 Slack、Teams 和会议中工作。"],
      faq: [
        {
          q: "哪些 Cursor 套餐包含 Projects？",
          a: "所有有 Cloud Agents 的套餐：Premium（每月 $30）及以上、Teams、Enterprise 和旧版付费套餐。Free、Plus 和旧版 Hobby 不包含。",
        },
        {
          q: "合上笔记本电脑后，Cursor Project 还会继续工作吗？",
          a: "会。Project 在云端自己的计算机上运行；只有需要在你的机器上测试时，协调者才会启动一个本地 agent。",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Microsoft 的 AI 同事 vs Microsoft 的 agent 构建工具",
      title: "Copilot Cowork vs Copilot Studio：有什么区别？",
      description:
        "Copilot Cowork vs Copilot Studio：Microsoft 365 里替你做任务的 agent，还是用来构建 agent 和工作流的低代码工作室。对比费用和功能。",
      h1: "Copilot Cowork vs Copilot Studio：用一个 agent，还是造一个",
      lead: "Copilot Cowork 和 Copilot Studio 都是 Microsoft 的产品，都按 Copilot Credits 计费，并共享同一个租户的预付额度池。区别在于谁来干活。Copilot Cowork 是 Microsoft 365 Copilot 里的一个 agent，你把任务交给它，它经你审批后发邮件、订会议、编辑 Office 文件。Copilot Studio 是制作者构建自己的 agent、工作流和应用的地方，可以把它们发布到 Teams、Microsoft Copilot、网站或电话线路。Copilot Studio 的工作流甚至可以把启动一个 Cowork 任务作为其中一步。下面是对比，以及 Crewmark 处在什么位置。",
      differences: [
        "用途：Copilot Cowork 跨 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 替你完成任务；Copilot Studio 是低代码工作室，用来构建供他人使用的 agent、工作流和应用。",
        "谁来用：拥有 Microsoft 365 Copilot 许可证并已开启 Cowork 的人都能用 Copilot Cowork；Copilot Studio 面向制作者，发布的 agent 可以在网站或电话线路上服务员工或客户。",
        "费用：Copilot Cowork 需要 Microsoft 365 Copilot 许可证，外加每个 $0.01 的 Copilot Credits；Copilot Studio 出售 25,000 Credits 的额度包，每月 $200（按年计费），或按量付费每个 Credit $0.01，制作者许可证为 $0。",
        "自动化：Copilot Cowork 运行定时提示词以及邮件或 Teams 触发的任务；Copilot Studio 还有 agent 触发器、带 Human review 连接器的多阶段审批，以及可以把调用 Cowork 作为其中一步的工作流。",
      ],
      pickA: [
        "你想现在就让一个 agent 替你处理 Microsoft 365 的工作，不用构建任何东西。",
        "你想在每封邮件、每个会议或每条 Teams 消息发出前先审批。",
      ],
      pickB: [
        "你想构建一个供其他人或客户使用的 agent 或工作流。",
        "你需要连接器、多阶段审批、发布渠道，或者分开的开发、测试和生产环境。",
      ],
      faq: [
        {
          q: "Copilot Cowork 是 Copilot Studio 的一部分吗？",
          a: "不是，它们是两个独立的产品。它们共享同一个租户的预付 Copilot Credit 额度池，Copilot Studio 的工作流可以通过它的 Copilot 节点启动或恢复一个 Copilot Cowork 任务。",
        },
        {
          q: "Copilot Studio 多少钱？",
          a: "Microsoft 的许可指南列出，每个租户 25,000 个 Copilot Credits 的额度包每月 $200（按年计费），或按量付费每个 Credit $0.01。额度包中未用完的 Credits 不会结转。制作者许可证为 $0，免费试用版不能发布 agent。",
        },
      ],
    },
  },
};
