import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 AI 员工平台：8 款对比，附价格 | Crewmark",
    description:
      "对比 Lindy、Sintra、Marblism、Artisan、Ema、Devin、开源项目 ai-employees 和 Crewmark：岗位覆盖、工作如何启动、用的是哪些模型、有没有免费套餐，以及价格。",
  },
  breadcrumb: "最佳 AI 员工平台",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · AI 员工",
    title: "2026 年最佳 AI 员工平台对比",
    lead: "AI 员工平台把 AI agent 设置成员工：每个都有岗位，朝着一个目标工作，不需要你每次提示就会自己开工。下面这些产品卖的都是这个理念，但它们覆盖的工作、接活的方式、使用的模型和收费方式各不相同。我们对比了八款，包括我们自己的产品，所用信息全部来自各厂商自己公布的内容。",
    cta: "申请抢先体验",
    secondary: "直接看对比",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AI 员工平台一览",
      text: [
        "价格为 2026 年 11 月 6 日各厂商定价页上列出的入门套餐，以美元计。想了解 AI 员工是什么、和 AI agent 有何不同，请看[什么是 AI 员工](/ai-employees)。",
      ],
      headers: ["平台", "最适合", "工作如何启动", "运行在", "免费选项", "付费起价"],
      rows: [
        ["Lindy", "覆盖约 17 种职能的办公室工作：邮件、日程、销售、客服、招聘", "定时任务（Routines）、Slack 和 iMessage、电话", "由 Lindy 选择的主流模型", "免费：7 天内 $50 额度", "每用户 $49.99/月（Team）"],
        ["Sintra", "小企业：12 个以上有名字的助手，负责客服、文案、SEO、社交媒体、销售", "和助手聊天，或运行一键任务", "Sintra 的模型（基于 Claude Sonnet）", "无免费套餐", "$48.50/月，按年付更便宜"],
        ["Marblism", "小企业：从助理到前台和法务的 7 个岗位", "你设定目标，它们每天朝目标推进，并请你审批", "未说明", "无免费套餐", "按年付 $24/月，按月付 $44"],
        ["Artisan（Ava）", "外拓销售：一名 AI 销售开发代表", "自主运行，带审批和升级规则", "未说明", "未说明", "按额度计费；需预约演示"],
        ["Ema", "企业的人力、IT 和财务", "Teams、Slack 或语音；250 多个集成", "Ema 组合的 100 多个模型", "免费试用", "按成果计费；未公开"],
        ["Devin", "软件工程", "在 Slack 或 Teams 里 @ 它、来自 Linear 或 Jira 的工单、周期性工作流", "Devin 的模型（来自多家提供商）", "有额度较少的免费套餐", "$20/月（Pro）"],
        ["ai-employees（开源）", "8 个业务岗位，每个是一个装着定时例行任务的文件夹", "每个岗位 SCHEDULE.md 里的定时计划", "你自己的 agent：Claude Code、Codex、OpenCode 等", "免费，MIT 许可证", "免费"],
        ["Crewmark", "你定义的任何岗位，跑在编程 agent 上：工程、SEO、营销、设计", "工作时间内，心跳唤醒每名员工，从看板上接下一个 issue", "你自己的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 订阅", "抢先体验", "抢先体验"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何选择 AI 员工平台",
      steps: [
        {
          title: "从工作出发，而不是从工具出发",
          text: "写下一个岗位，以及它要推动的那个数字，比如预约到的会议数、Search Console 点击量或合并的 pull request 数。专为一种工作打造的平台（外拓销售用 Artisan，写代码用 Devin）在这件事上通常胜过通用平台。",
        },
        {
          title: "看工作如何启动",
          text: "聊天助手等着你开口；AI 员工会自己开工。看看有没有定时、触发器或心跳，以及有没有分派工作的地方，比如看板、工单或 Slack 频道。",
        },
        {
          title: "看用谁的模型、谁来买单",
          text: "大多数平台把模型用量包装成额度或席位转卖给你。如果你已经在为 Claude Code 或 Codex 付费，跑在这份订阅上的工具（开源项目 ai-employees、Crewmark）几乎不会增加模型成本。",
        },
        {
          title: "看它行动前会不会先问你",
          text: "会发邮件、发帖或花钱的员工应该先征求同意。看看有没有审批、升级规则，以及它做过什么的日志。",
        },
        {
          title: "先用一个岗位试两周",
          text: "有免费套餐或试用就先用起来，衡量你写下的那个数字，之后再增加岗位。",
        },
      ],
    },
    {
      kind: "text",
      title: "各平台详细介绍",
      points: [
        "Lindy：主打“物超所值的队友”（\"the teammate that punches above its price\"）。Routines 按计划运行，你可以在 Slack 或 iMessage 里给它发消息，“Watch and Learn”（看一遍就学会）能把你演示过一次的任务记录下来。定价：[lindy.ai/pricing](https://www.lindy.ai/pricing)。",
        "Sintra：12 个以上有名字的助手，比如负责客服的 Cassie、负责 SEO 的 Seomi 和负责社交媒体的 Soshie，每个都是一个你和它对话的聊天机器人。单个助手 $39/月。定价：[sintra.ai/pricing](https://sintra.ai/pricing)。",
        "Marblism：七名 AI 员工（Eva、Sonny、Stan、Walter、Penny、Rachel 和 Linda），你设定目标后，它们会“每天自己朝着目标工作”（\"work toward it every day, on their own\"）；套餐包含每月 50 小时的 AI 工作量。定价：[marblism.com/pricing](https://www.marblism.com/pricing)。",
        "Artisan：“面向市场推广团队的 AI 员工”（\"AI employees for go-to-market teams\"）。Ava 负责找线索、补全线索信息、撰写外联邮件、处理回复和预约会议，关键步骤由人审批。见 [artisan.co](https://www.artisan.co)。",
        "Ema：一名“通用 AI 员工”（\"Universal AI Employee\"），用大白话描述目标即可完成配置，适用于人力、IT、财务等领域。见 [ema.ai](https://www.ema.ai)。",
        "Devin：“你团队的自主软件工程师”（\"your team's autonomous software engineer\"）。分配一个工单给它，就能收到一个 pull request；Max 为 $200/月，Teams 为 $80/月外加每席位 $40。定价：[devin.ai/pricing](https://devin.ai/pricing)。",
        "ai-employees：一个 MIT 许可的 GitHub 项目，其定义是“一名 AI 员工就是一个装着定时例行任务、覆盖一个业务岗位的文件夹”（\"an AI Employee is a folder of scheduled routines that covers one business role\"），由你已有的编程 agent 来运行。见 [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees)。",
        "Crewmark：把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标、工作时间和 issue 看板的员工；它会在自己的 issue 下评论，需要你拍板时给你发消息。见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "text",
      title: "免费的 AI 员工，以及 GitHub 上的开源项目",
      text: [
        "免费套餐是有的，但都不大：Lindy 给 7 天内 $50 的额度，Devin 给少量配额，Ema 提供试用。开源路线不花钱，但要花时间搭建：GitHub 上的 markfulton/ai-employees 等项目跑在你已有的 agent 订阅上，在 Claude Pro 或 Max 套餐下消耗的是套餐额度，而不是额外的美元。",
        "如果你要对比的是开源 agent 框架，而不是现成的员工，请看我们与 [CrewAI](/alternatives/crewai)、[Paperclip](/alternatives/paperclip) 和 [Multica](/alternatives/multica) 的对比。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "在你已经付费的编程 agent 上运行 AI 员工",
      text: [
        "Crewmark 面向工作已经离不开 Claude Code 或 Codex 的团队。不用再买一个新的 AI 和它的额度，而是给你现有的 agent 一份工作。",
      ],
      steps: [
        {
          title: "选一个岗位和一个目标",
          text: "软件工程师、SEO 专员、增长营销，或者你自己写的岗位，目标写成一个数字。",
        },
        {
          title: "连接一个会话",
          text: "在项目里运行一条设置命令；员工运行在你电脑上的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话里，用的是你自己的套餐。",
        },
        {
          title: "分派 issue，剩下的交给心跳",
          text: "工作时间内，员工每 15、30 或 60 分钟醒来一次，接下一个 issue，边做边评论，需要你拍板时给你发消息。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "选择 AI 员工平台" },
  mid: {
    title: "已经在为 Claude Code 或 Codex 付费？",
    text: "Crewmark 把它变成有岗位、目标、工作时间和 issue 看板的 AI 员工，不会多出第二份 AI 账单。",
    button: "申请抢先体验",
  },
  faq: {
    title: "AI 员工平台常见问题",
    items: [
      {
        q: "最好的 AI 员工平台是哪个？",
        a: "取决于工作内容。跨多种职能的办公室工作选 Lindy；小企业的营销和客服选 Sintra 或 Marblism；外拓销售选 Artisan；企业人力和 IT 选 Ema；写代码选 Devin；如果你已经在用 Claude Code 或 Codex，就选开源项目 ai-employees 或 Crewmark。",
      },
      {
        q: "有免费的 AI 员工吗？",
        a: "部分平台有小额的免费套餐或试用：Lindy（7 天内 $50 额度）、Devin（少量配额）和 Ema（试用）。markfulton/ai-employees 等开源项目免费，跑在你已有的 agent 订阅上。",
      },
      {
        q: "一名 AI 员工要花多少钱？",
        a: "2026 年 11 月 6 日，入门套餐从每月约 $20（Devin Pro）到每用户 $49.99（Lindy Team）不等，Artisan 和 Ema 需联系销售报价。跑在你自己的 Claude Code 或 Codex 套餐上的工具几乎不增加模型成本。",
      },
      {
        q: "AI 员工和 AI agent 有什么区别？",
        a: "AI agent 在你要求时完成一项任务。AI 员工是被赋予了岗位、目标和日程的 agent，所以它会自己开工并持续工作。详见[什么是 AI 员工](/ai-employees)。",
      },
      {
        q: "小企业能用 AI 员工吗？",
        a: "能。Sintra 和 Marblism 专为小企业打造，有负责客服、社交媒体、SEO 和销售的具名员工，价格约为每月 $24 到 $49。",
      },
      {
        q: "GitHub 上有开源的 AI 员工吗？",
        a: "有。markfulton/ai-employees（MIT）把 8 个业务岗位打包成定时例行任务，供 Claude Code、Codex、OpenCode 等 agent 运行；其他项目还有 OpenCompany 和 eggent。",
      },
      {
        q: "怎样雇用一名 AI 员工？",
        a: "选一个岗位和它要推动的数字，挑一个会自己开工、在高风险操作前先征求同意的平台，试运行两周，只有数字动了才留下它。",
      },
    ],
  },
  cta: {
    title: "给你已经付费的 agent 一份工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照各厂商自己的网站和定价页查证。价格会变动，最新价格请点击链接查看。",
  disclaimer:
    "Crewmark 是参与对比的产品之一。产品名称是其所有者的商标；没有任何厂商审阅或背书本页。",
};
