import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Superagent 是什么？DeepSeek、Base44、ClickUp 对比",
    description:
      "“Superagent”同时是好几款 AI 产品的名字。超级 agent 是什么，DeepSeek 的 Super-agent 为什么火了，以及它与 Base44 Superagents、ClickUp Super Agents、Genspark 和开源 superagent-ai 项目的对比。",
  },
  breadcrumb: "Superagent 是什么",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · AI agent",
    title: "Superagent 是什么？2026 年所有叫“Superagent”的产品对比",
    lead: "超级 agent（superagent）是一种会自己持续工作的 AI agent：它留意有什么活要干，不用你每一步都下指令就会接手任务，在后台运行，只有需要你拍板时才回来找你。这个词这个月到处都是，因为 DeepSeek 在 2026 年 10 月 31 日开源了它的 Super-agent 原型，但在此之前已经有好几款产品用了这个名字，从 Base44、ClickUp 到一款开源安全工具。本文解释这个概念、每款产品实际是什么，以及该怎么选。",
    cta: "开始使用",
    secondary: "直接看对比",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent 的定义",
      text: [
        "超级 agent 没有统一标准，但所有以此为卖点的产品都有同一个理念：从“问了才答”的助手，变成对持续性工作负责的 agent。",
      ],
      points: [
        "它自己启动工作：来源可以是定时计划、触发器、一条消息或分配给它的任务，而不只是聊天里的提示词。",
        "它在后台运行，往往同时处理多个任务，每个任务有自己的会话。",
        "它在任务之间记住上下文，并连接到工作发生的工具，例如 GitHub、Slack、Gmail 或项目看板。",
        "只有在需要决定或审批时，它才会占用人的注意力。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "所有“Superagent”对比",
      text: [
        "信息来自 2026 年 11 月 6 日各厂商自己的网站或 GitHub 仓库。",
      ],
      headers: ["产品", "开发者", "是什么", "工作如何启动", "价格"],
      rows: [
        ["DeepSeek Super-agent（dsh-superagent）", "DeepSeek 的 Harness 团队", "面向单个 GitHub 仓库的主动式编程 agent；研究原型，不是官方产品", "名单内的人在 GitHub（可选再加飞书 Feishu）上提出的请求，或团队写的规则", "免费，MIT 许可证；运行在 DeepSeek Harness 上"],
        ["Base44 Superagents", "Base44（隶属 Wix）", "用自然语言描述就能创建的无代码 agent，用于个人或业务任务", "定时计划、触发器、webhook，以及 WhatsApp、Telegram、Slack 等聊天应用", "消耗 Base44 套餐额度；有免费版，付费按年付 $16/月起"],
        ["ClickUp Super Agents", "ClickUp", "ClickUp 工作区里的 AI 队友，负责分拣、排期、汇报和创建条目", "@ 提及、分配的任务、私信、定时计划和触发器", "向所有用户开放；用量按 AI 额度计费"],
        ["Genspark Super Agent", "Genspark", "通用型 agent，用于调研、幻灯片、文档等", "你的提示词", "见 genspark.ai"],
        ["superagent-ai/superagent", "Superagent（开源）", "2023 年起步时是 agent 框架；现在用于保护 AI 应用免受提示词注入和数据泄露", "在你应用的处理流程中运行", "开源，MIT 许可证"],
        ["superagent-ai/grok-cli", "社区项目，与 xAI 无关", "面向 Grok API 的开源终端编程 agent", "你的提示词；支持子 agent 和 Telegram 远程控制", "免费，MIT 许可证；需自备 Grok API 密钥"],
        ["Crewmark", "Crewmark", "基于 Claude Code、Codex、DeepSeek Harness 或 OpenCode 的 AI 员工", "工作时间内，心跳唤醒员工，从看板上领取下一个 issue", "开放注册；用你现有的订阅运行"],
      ],
    },
    {
      kind: "text",
      title: "为什么现在大家都在搜“superagent”：DeepSeek",
      text: [
        "2026 年 10 月 31 日，DeepSeek 发布了名为 dsh-superagent 的研究原型，以及一篇关于如何设计超级 agent 的文章，仓库一周内就拿到约 20,000 个 GitHub star。它把 DeepSeek Harness 变成一个监听 GitHub 的 agent：自己创建工作项，每项在独立会话中运行，并以 pull request 等结果回复，同时用一个网页面板显示哪些事需要人处理。它明确的目标是尽可能少地占用人的注意力。完整解读见 [DeepSeek Super-Agent 是什么](/blog/deepseek-super-agent)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何选择超级 agent",
      steps: [
        {
          title: "从工作所在的地方出发",
          text: "代码在 GitHub 上，就看 DeepSeek 的原型，或基于 Claude Code、Codex 的 agent；工作在 ClickUp 工作区里，就看 ClickUp Super Agents；个人事务和消息类工作，就看 Base44。",
        },
        {
          title: "看它如何开始工作",
          text: "真正的超级 agent 不会每一步都等你的提示。看它有没有定时计划、触发器、分配任务或心跳，以及有没有一个清楚的地方让你看到它在做什么。",
        },
        {
          title: "看它可以独自做哪些事",
          text: "优先选择在合并、发送或花钱等高风险操作前会先问你、并留下可供审查的记录的 agent。DeepSeek 的原型只会根据请求或团队写的规则行动。",
        },
        {
          title: "看用谁的模型、谁来付账",
          text: "工作区类产品在套餐之外按额度收费；开源工具则用你自己的 API 密钥或订阅运行。可以对照[最佳 AI 员工平台](/blog/best-ai-employee-platforms)。",
        },
        {
          title: "原型还是产品？",
          text: "DeepSeek 表示它的 Super-agent 仅供参考。日常工作请选有人维护的产品，或者在你已经信任的 agent 上搭建。",
        },
      ],
      source: { label: "来源：DeepSeek 的 dsh-superagent 仓库", href: deepseek },
    },
    {
      kind: "text",
      title: "超级 agent、AI agent 与 AI 员工的区别",
      text: [
        "AI agent 完成你交给它的任务。超级 agent 加上了自主性：它会发现或接收工作，并在后台持续推进。AI 员工再进一步，给这个 agent 一份工作：岗位、用数字衡量的目标、工作时间和一块任务看板，就像给新同事办入职一样。参见[什么是 AI 员工](/ai-employees)和[如何让 Claude Code 主动工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一个有岗位职责的超级 agent",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成 AI 员工：工作时间内由心跳唤醒，从共享看板上领取下一个 issue，边做边留评论，需要你拍板时给你发消息，用的就是你已经付费的订阅。",
      ],
      steps: [
        {
          title: "选你信任的 agent",
          text: "包括 DeepSeek Harness，也就是 DeepSeek 的 Super-agent 所基于的同一个运行环境。",
        },
        {
          title: "给它一个岗位和一个目标",
          text: "软件工程师、SEO 专员、增长营销：每个都有一个要推动的数字。",
        },
        {
          title: "剩下的交给心跳",
          text: "工作时间内每 15、30 或 60 分钟，它领取下一个 issue；你只需回答需要你决定的事。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "选择超级 agent" },
  mid: {
    title: "想要一个在你的仓库上、用你的套餐工作的超级 agent？",
    text: "Crewmark 把 Claude Code、Codex 或 DeepSeek Harness 变成 AI 员工，由心跳唤醒，自己领取下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "Superagent 常见问题",
    items: [
      {
        q: "超级 agent（superagent）是什么？",
        a: "一种能长期自主工作的 AI agent：它根据触发器、定时计划或请求启动任务，在后台运行，只有需要决定时才找人。",
      },
      {
        q: "DeepSeek Super-agent 是什么？",
        a: "DeepSeek 于 2026 年 10 月 31 日开源的研究原型（dsh-superagent，MIT 许可证）。它让 DeepSeek Harness 在一个 GitHub 仓库上主动工作。DeepSeek 表示它仅供参考，不是官方产品。",
      },
      {
        q: "DeepSeek Super-agent 免费吗？",
        a: "免费。原型和 DeepSeek Harness 都在 MIT 许可证下开源；你需要支付背后的模型用量费用。",
      },
      {
        q: "Base44 Superagents 是什么？",
        a: "Base44（隶属 Wix）里用自然语言描述就能创建的无代码 AI agent。它们按定时计划和触发器运行，可连接 Gmail、Drive、Notion、GitHub、Slack 或 MCP 服务器，消耗你 Base44 套餐的额度。",
      },
      {
        q: "ClickUp Super Agents 是什么？",
        a: "ClickUp 工作区里的 AI 队友，2025 年 12 月推出，你可以 @ 它、给它分配任务或让它按计划运行。向所有用户开放，消耗 AI 额度。",
      },
      {
        q: "GitHub 上的 Superagent 和 DeepSeek 的是同一个吗？",
        a: "不是。superagent-ai 组织与 DeepSeek 无关：它的 superagent 仓库现在是一款 AI 安全工具，grok-cli 则是面向 Grok API 的社区编程 agent。",
      },
      {
        q: "超级 agent 和 AI 员工有什么区别？",
        a: "超级 agent 自主处理任务。AI 员工是被赋予了岗位、目标、工作时间和看板的自主 agent，所以它的工作像队友一样被组织和衡量。",
      },
    ],
  },
  cta: {
    title: "把你的编程 agent 变成有工作的超级 agent。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照各产品自己的网站或 GitHub 仓库核对。",
  disclaimer:
    "Crewmark 是独立产品，与 DeepSeek、Base44、Wix、ClickUp、Genspark 或 superagent-ai 项目无关，也未获其背书。产品名称是其所有者的商标。",
};
