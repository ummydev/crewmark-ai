import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/manus-cue; the English master is
// src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# 一个 agent 跑腿
每个工作日早上 8 点，查看我收件箱里和搬家有关的邮件，
给我发一份简短汇总。回复任何人之前先问我。

# 一个有共同目标的小团队（把 Manus 自己的例子写成提示词）
我们要在 3 月为 20 个人办一次团建。
你们一个去调研里斯本附近的场地，一个把调研整理成三个候选，
一个起草一份带推荐意见的演示文稿，最后由我来定。`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue：邀请码、怎么用、多少钱",
    description:
      "Manus 的 Cue 详解：拥有自己邮箱、电话号码、钱包和电脑的个人 agent。怎么用邀请码获得使用资格、怎么下载、怎么用单个 agent 和群聊团队、定时自动化，以及费用。",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Manus Cue",
    title: "Manus Cue：拥有自己邮箱、电话和钱包的个人 agent",
    lead: "Cue 是 Manus 推出的独立应用，专门放你的个人 agent，2026 年 9 月 28 日随 Manus 2.0 开启早期体验。它的特别之处：每个 agent 都有自己的邮箱、电话号码、钱包和电脑，所以能给别人发消息、替你接电话、在你设定的预算内付款。本文讲怎么用邀请码进入、怎么下载、怎么用一个 agent 或一个团队、定时自动化、费用，以及还没说清楚的问题。",
    cta: "开始使用",
    secondary: "获取资格",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Manus Cue 是什么",
      text: [
        "Manus 称 Cue 是“一个全新的独立应用，在你的手机和电脑上放你的个人 agent”。它和 Manus 用同一套基础设施，但是一个单独的应用，不是 Manus 里的某个模式。",
      ],
      points: [
        "自己的身份：每个 agent 有邮箱、电话号码、钱包和电脑。",
        "电话：agent 可以替你接电话，并在 Cue 里给你留一份摘要。",
        "付款：agent 可以在你设定的预算内付款。",
        "团队：几个 agent 可以在同一个群聊里、为同一个目标分工交接，你来定方向、做最后决定。",
        "线下场景：在餐厅扫一个二维码，让你的 agent 替你点餐或排队。",
        "只要一个助手也行：留一个 agent 帮你跑腿、提醒和做调研。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么用上 Manus Cue",
      steps: [
        {
          title: "拿到邀请码",
          text: "Cue 还在早期体验，需要邀请码。上线时 Manus 给出了邀请码 MEETCUE，名额有限、先到先得；Manus 没说它现在是否还能用。每个拿到资格的人都会收到额外的邀请码可以分享，所以可以找已经在用 Cue 的人要。",
        },
        {
          title: "从 Manus 里下载应用",
          text: "在 Manus 里打开侧边栏的“Agents (Cue!)”标签，扫二维码下载应用。Manus 列出了网页、桌面和手机；上线时 iOS 版还在等 App Store 审核，用之前先去 App Store 看一下。",
        },
        {
          title: "用邀请码登录",
          text: "登录时输入邀请码。Manus 也可能把邀请码通过邮件发给你一份。",
        },
        {
          title: "创建第一个 agent",
          text: "先建一个帮你跑腿的 agent，或者搭一个有共同目标的小团队。说清楚要做什么、它能花多少预算、哪些事必须先问你。",
          code: prompts,
        },
      ],
      source: { label: "来源：Manus 发布 Manus 2.0 和 Cue 的文章", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "定时自动化和技能",
      points: [
        "定时自动化（Scheduled Automations）：说清楚要做什么、什么时候做，Cue 就会设置好。",
        "按事件触发（比如收到新邮件或 Slack 消息）是 Manus 自动化里的功能；Manus 没说 Cue 已经支持。",
        "你在 Manus 里创建或导入的技能不会自动带到 Cue，需要在 Cue 里另外设置。",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Manus Cue 价格",
      headers: ["", "Manus 的说法"],
      rows: [
        ["早期体验", "免费，需要邀请码"],
        ["早期体验之后", "还没公布"],
        ["Manus 订阅或积分", "发布文章没说 Manus 套餐包含 Cue，也没说 Cue 消耗 Manus 积分"],
        ["agent 付款", "agent 在你设定的预算内用自己的钱包付款"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "把你的电话号码交给它之前，还有这些没说清楚",
      points: [
        "agent 能联系谁、能替你答应什么，发布文章里没有说明。设好预算，并告诉每个 agent 哪些事要先问你。",
        "对方怎么知道自己在和 agent 对话，也没有说明。",
        "早期体验之后的价格，以及 Cue 在哪些国家可用，都还没公布。",
        "能发消息、能用钱包付款的 agent 出错可能会造成损失；先从小额预算开始。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue 对比 Meta Muse 和 Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["agent 身份", "自己的邮箱、电话号码、钱包和电脑", "通过你连接的账号操作", "以你的身份操作，没有自己的账号"],
        ["多个 agent 组队", "支持，群聊里共享一个目标", "没有说明", "支持，Bot 之间可以交接工作"],
        ["定时", "定时自动化", "提醒和周期任务", "例程：定时或触发"],
        ["怎么用上", "早期体验，需邀请码", "美国，免费有每周额度", "X Premium 及以上、SuperGrok、Cursor 套餐"],
        ["指南", "本页", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "在你已经在用的 agent 上，组一支干正事的团队",
      text: [
        "Cue 给每个个人 agent 一个身份。Crewmark 给每个工作 agent 一份工作：它把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，和团队里其他人一起推进共享看板上的工作。",
      ],
      steps: [
        {
          title: "选岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始：工程师、SEO 专员、营销 agent、社交媒体运营、设计师。",
        },
        {
          title: "把工作放上看板",
          text: "每个员工领取分配给自己的下一个任务，边做边写评论，卡住时发消息给你。",
        },
        {
          title: "对比各个个人 Agent",
          text: "参见[个人 AI Agent 对比](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "开始使用 Manus Cue" },
  mid: {
    title: "想让一支 agent 团队处理你真正的工作？",
    text: "Crewmark 员工按心跳推进共享看板上的工作，用的是你已经在付费的 Claude Code 或 Codex 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Manus Cue 是什么？",
        a: "Manus 推出的个人 agent 独立应用，2026 年 9 月 28 日开启早期体验。每个 agent 有自己的邮箱、电话号码、钱包和电脑，几个 agent 可以在群聊里一起干活。",
      },
      {
        q: "怎么拿到 Manus Cue 邀请码？",
        a: "上线时 Manus 给出了 MEETCUE，名额有限、先到先得。每个拿到资格的人都会收到额外的邀请码可以分享，最稳妥的办法是找已经在用 Cue 的人要。",
      },
      {
        q: "Manus Cue 多少钱？",
        a: "早期体验期间凭邀请码免费。Manus 还没公布之后的价格，也没说 Manus 订阅是否包含它。",
      },
      {
        q: "怎么下载 Manus Cue？",
        a: "在 Manus 侧边栏打开“Agents (Cue!)”标签，扫二维码。Manus 列出了网页、桌面和手机；上线时 iOS 版还在等 App Store 审核。",
      },
      {
        q: "Cue 的 agent 能打电话、付款吗？",
        a: "每个 agent 有自己的电话号码和钱包：能替你接电话并留下摘要，能发消息，能在你设定的预算内付款。",
      },
      {
        q: "Cue 是 Manus 的一部分吗？",
        a: "它和 Manus 用同一套基础设施，但是单独的应用。Manus 里的技能不会自动带过去，Manus 也没说 Cue 消耗 Manus 积分。",
      },
    ],
  },
  cta: {
    title: "个人 agent 替你跑腿，AI 员工替你清待办。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Manus 发布 Manus 2.0 的文章和 Manus 帮助中心核对。",
  disclaimer: "Crewmark 是独立产品，与 Manus、Meta 和 xAI 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
