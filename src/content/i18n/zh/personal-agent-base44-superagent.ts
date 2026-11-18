import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `每天早上 7 点，汇总我的未读邮件、今天的会议，
以及 Slack 里提到我的讨论，发到这里。

Gmail 里收到新线索的邮件时，起草一封个性化的跟进邮件，
发之前先问我。三天没回复的话，换个角度再跟一次。

每周五下午 5 点，拉取本周的销售、客服和营销数据，
在 Slack 的 #weekly 频道发一份汇总。`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent：价格、额度、WhatsApp 和设置",
    description:
      "Base44 Superagent 详解：这个个人 agent 能做什么、怎么创建、Base44 各套餐以及 Superagent 怎么消耗消息额度和集成额度、怎么连接 WhatsApp、Telegram 和 Slack、工作流、示例，以及和其他 agent 的对比。",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Base44",
    title: "Base44 Superagent：能做什么、多少钱、怎么设置",
    lead: "Superagent 是 Base44 的“全天候替你执行任务的个人 AI agent”。你可以在浏览器里，或在 WhatsApp、Telegram、Slack 等聊天应用里跟它说话；它在你连接的工具里干活，按时间表或触发条件运行工作流，跨对话记住事情，甚至能打电话。本文讲它能做什么、怎么创建、价格和额度怎么算、怎么连接 WhatsApp、工作流示例，以及它和其他个人 agent 的对比。",
    cta: "开始使用",
    secondary: "价格和额度",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Base44 Superagent 是什么",
      text: [
        "Base44 最出名的是 AI 应用搭建工具。Superagent 是另一个产品：一个你用对话来指挥的个人 agent，“描述你想要什么，你的 Superagent 就在你的各个工具里替你行动”。它只能访问你连接的工具和数据。",
      ],
      points: [
        "随处聊：浏览器、WhatsApp、Telegram、Slack、iMessage 和 LINE。在 WhatsApp 上它还能进群聊。",
        "连接器：Gmail、Google 日历、Google Drive、Notion、GitHub、Slack 等，也可以接你自己的 MCP 服务器。共享连接器可以设成只读。",
        "工作流：按时间表或在连接的工具里有动静时运行的任务。",
        "记忆：知识、工作上下文和记忆日志，可以跨对话共享，也可以每个对话分开。",
        "技能和目标：可复用的指令；用 `/goal` 把一个大目标拆成可以暂停和恢复的任务。",
        "语音：可以直接说话，桌面端还能共享屏幕。有电话号码的话，定时工作流可以打电话。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么创建 Base44 Superagent",
      steps: [
        {
          title: "打开 Personal Agent",
          text: "登录 app.base44.com，点侧边栏“Explore”下的“Personal Agent”（如果侧边栏显示的是“Apps”和“Agent”标签，就点“Agent”）。",
        },
        {
          title: "选在哪里跟它聊",
          text: "选“Continue here”在浏览器里聊，或者选 WhatsApp、Telegram、iMessage。WhatsApp：扫二维码或点按钮打开应用，发送预填好的消息；Telegram：发送预填好的消息或点“Start”。",
        },
        {
          title: "连接你的工具",
          text: "打开侧边栏的“Plugins”，在某个连接器上点“Connect”，选共享连接器或应用用户连接器；如果 agent 只需要看，就设成只读。用“Add Connector”接你自己的 MCP 服务器。",
        },
        {
          title: "描述要做的事",
          text: "说清楚要做什么；把岗位或项目背景放在第一条消息里，再给它几条始终要遵守的规则。周期性的工作，说清楚时间表或触发条件，它会建好工作流。",
          code: prompts,
        },
      ],
      source: { label: "来源：Base44 文档《Creating a Superagent》", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Base44 Superagent 价格和额度",
      text: [
        "Superagent 消耗的是你的 Base44 工作空间额度。下面是 2026 年 11 月 10 日 Base44 列出的套餐（按年付费）；价格页说按年付省 20%，没有列出按月付的价格。",
      ],
      headers: ["套餐", "价格（按年付）", "每月消息额度", "每月集成额度"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "每月 $16", "100", "2,000"],
        ["Builder", "每月 $40", "250", "10,000"],
        ["Pro", "每月 $80", "500", "20,000"],
        ["Elite", "每月 $160", "1,200", "50,000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Superagent 怎么消耗额度",
      points: [
        "消息额度：它处理的每条消息、每次工作流运行都算，和聊天一样。来自 WhatsApp、Telegram、Slack、API 和自动化的消息都算。",
        "集成额度：生成图片、处理文件、上传文件、生成下载链接等操作。",
        "额度按固定周期刷新，没用完的在刷新时作废。",
        "工作空间额度用完后，工作流无法运行。它们保持开启，额度恢复后继续，但错过的运行不会补跑。",
        "在“Agent Settings > Credit usage”里查看用量。Superagent 也会暂停陷入循环的运行，避免浪费额度。",
        "免费版每月 25 个消息额度。每次运行都消耗消息额度，一个每天跑的工作流（一个月约 30 次）就已经超了，所以每天跑的工作流要用付费套餐。",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Base44 Superagent 工作流和示例",
      text: [
        "在对话里描述要做的事，或者打开“Workflows”，点“New Workflow”，把推荐的工作流发到对话里。Superagent 会判断是定时还是触发，并问清楚它需要的信息。",
      ],
      steps: [
        {
          title: "定时",
          text: "在你设定的时间运行：早间简报（未读邮件、会议和 Slack 讨论）；下班前的当日总结和明天的待办；每周给牙医诊所打个电话问有没有更早的号（前提是你的 agent 有电话号码）。",
        },
        {
          title: "触发",
          text: "某件事发生时运行：Gmail 收到新邮件、Superagent 的数据有变化，或连接的工具里有动静。比如一封邮件 24 小时未读就提醒你，每场会议前 30 分钟发一份背景简报。",
        },
        {
          title: "出问题时",
          text: "连续失败几次的工作流会自动暂停，Base44 会发邮件通知你。看“Activity”标签找原因（常见是某个集成断开了），修好后点“Resume”，再点“Run Now”测试。",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent 对比 Meta Muse、Grok Bot 和 Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["在哪跟它聊", "浏览器、WhatsApp、Telegram、Slack、iMessage、LINE", "Muse 应用、muse.ai、WhatsApp", "桌面和手机应用、Slack、X", "Claude Duet 应用"],
        ["定时", "定时和触发工作流", "提醒和周期任务", "例程：定时或触发", "主动告诉你需要关注的事"],
        ["价格", "消耗 Base44 套餐额度，按年付每月 $16 起", "免费有每周额度；Power 每月 $20", "X Premium 及以上、SuperGrok、Cursor 套餐包含", "Claude Pro 及以上包含，需排队"],
        ["指南", "本页", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "杂事交给 Superagent，待办交给 AI 员工",
      text: [
        "Base44 Superagent 围绕一个人的工具和聊天来做。Crewmark 围绕一份工作来做：它把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，从共享看板领下一个任务，除了你已有的 agent 套餐，不用另外买额度。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始：工程师、SEO 专员、营销 agent、社交媒体运营、设计师。",
        },
        {
          title: "用你已有的套餐",
          text: "Crewmark 在你自己的 Claude Code 或 Codex 里运行。参见[价格](/pricing)。",
        },
        {
          title: "对比更多 agent",
          text: "参见[个人 AI Agent 对比](/personal-agent)和[什么是 superagent](/blog/superagent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "创建 Base44 Superagent" },
  mid: {
    title: "想要一个干正事、又不用买额度的 agent？",
    text: "Crewmark 员工在你已经付费的 Claude Code 或 Codex 套餐里运行，推进共享看板上的工作。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Base44 Superagent 是什么？",
        a: "Base44 的个人 AI agent，全天候替你执行任务。你在浏览器或 WhatsApp、Telegram、Slack 等应用里跟它聊；它在你连接的工具里干活，运行定时或触发的工作流。",
      },
      {
        q: "Base44 Superagent 多少钱？",
        a: "它消耗你 Base44 套餐的额度。按年付的套餐是 Starter 每月 $16、Builder $40、Pro $80、Elite $160，每月 100 到 1,200 个消息额度；免费版每月 25 个消息额度。",
      },
      {
        q: "Base44 Superagent 的额度怎么算？",
        a: "它处理的每条消息、每次工作流运行都消耗消息额度；生成图片、处理文件这类操作消耗集成额度。额度按周期刷新，没用完的作废，额度用完时工作流会停止运行。",
      },
      {
        q: "怎么把 Base44 Superagent 连到 WhatsApp？",
        a: "创建时选 WhatsApp，扫二维码或点按钮打开 WhatsApp，然后发送预填好的消息。你也可以连接一个 WhatsApp 号码，让它在群聊里工作。",
      },
      {
        q: "Base44 Superagent 能做什么？",
        a: "夜里分拣收件箱、跟进销售线索、盯机票降价、订餐厅并通知朋友、每周把数据发到 Slack、重新安排日历、管理项目的 WhatsApp 群；有电话号码的话，还能定时打电话。",
      },
      {
        q: "Base44 Superagent 有哪些替代品？",
        a: "Meta Muse（在美国免费）、Grok Bot（适合工作中的 agent 团队）、ChatGPT dots 和 Claude Duet（随 Pro 套餐提供）、Manus Cue，以及开源的 OpenClaw 或 Hermes Agent。参见[个人 AI Agent 对比](/personal-agent)。",
      },
    ],
  },
  cta: {
    title: "杂事交给 Superagent，工作交给 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Base44 的文档、Superagents 页面和价格页核对。",
  disclaimer: "Crewmark 是独立产品，与 Base44、Wix、Meta、xAI 和 Anthropic 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
