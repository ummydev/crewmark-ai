import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/gemini-spark; the English master is
// src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `每月 3 号，在 Gmail 里查一遍我的信用卡账单，
找出新增的或隐藏的订阅费用，列给我。

盯着孩子学校的邮箱里的截止日期，
每天晚上 7 点给我和我爱人发一份汇总。

把这周邮件和聊天里的会议记录整理成一份 Google 文档，
再起草一封跟进邮件。先不要发。`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark（现在叫任务）：怎么用、套餐、地区",
    description:
      "Gemini Spark 怎么不见了：Google 的全天候个人 agent 现在是 Gemini 应用里的“任务”。谁能用（Google AI Pro 或 Ultra、哪些国家）、怎么开启、定时、连接的应用、上限和 Mac 应用。",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Gemini Spark",
    title: "Gemini Spark，现在是 Gemini 里的“任务”：Google 个人 agent 怎么用",
    lead: "Google 在 2026 年 5 月 19 日发布了 Gemini Spark，称它是“一个全天候的个人 AI agent，主动帮你管理任务”：它在云端工作，你合上笔记本或锁上手机它也继续干，还能用 Gmail、文档等 Google 应用。测试版里的 Spark 现在在 Gemini 应用里叫“任务”（tasks），所以 Spark 按钮看起来像是消失了。本文讲谁能用、怎么开启、定时、连接的应用、上限，以及它擅长什么。",
    cta: "开始使用",
    secondary: "开启它",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Gemini Spark 怎么了？",
      text: [
        "并没有下线。Google 的帮助文章现在把这个功能叫“任务”，并注明它“在测试版中曾叫 Spark”。在 Gemini 里点输入框下方的“Task”就能开始，你已有的任务和定时都还在。",
      ],
      points: [
        "它是什么：在云端的 Gemini 上运行的 agent，发布时基于 Gemini 3.5 和 Google 的 Antigravity 框架。",
        "它做什么：清理收件箱、盯机票和酒店价格、带引用来源做调研、上网购物或预订，生成 PDF、文档、表格和幻灯片。",
        "什么时候干活：在后台，按时间表或某件事发生时；花钱、发邮件这类重要操作前会先问你。",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "谁能用 Gemini 任务（Spark）",
      text: ["来自 2026 年 11 月 10 日的 Google Gemini 应用帮助。"],
      headers: ["条件", "说明"],
      rows: [
        ["套餐", "Google AI Pro 或 Ultra（美国 Google AI Pro 每月 $19.99）"],
        ["账号", "个人 Google 账号，年满 18 岁；暂不支持工作和学校账号"],
        ["国家和地区", "所有能用 Gemini 应用的地方，但欧洲经济区、瑞士、英国和尼日利亚除外"],
        ["设置", "必须开启“Keep Activity”"],
        ["在哪用", "Gemini 手机应用、Mac 上的 Gemini 应用，以及网页版 gemini.google.com"],
        ["免费版", "不包含"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么用 Gemini 任务",
      steps: [
        {
          title: "开启任务模式",
          text: "在 gemini.google.com 上点输入框下方的“Task”，按屏幕提示操作。Gemini 手机应用和 Mac 上的 Gemini 应用也能用任务。",
        },
        {
          title: "连接它需要的应用",
          text: "任务可以用 Gmail、日历、文档、云端硬盘、Keep、表格、幻灯片和 Tasks，Google 搜索、航班、酒店和地图，通讯录、相册和 YouTube，以及自定义和第三方应用。Google 发布时的合作伙伴有 Canva、OpenTable 和 Instacart。",
        },
        {
          title: "说清楚做什么、什么时候做",
          text: "可以让它做一次性的事，也可以设定时：在固定时间，或者某件事发生时。打开任务对话和它的工作面板，可以查看权限和定时。",
          code: prompts,
        },
        {
          title: "批准关键步骤",
          text: "Gemini 在为某个任务上网前会先问你（第一次授予 Chrome 权限之后），在发消息、购买、提交表单或用 Google 账号登录前也会先问你。即使你选了“始终允许”，分享健康、财务或证件等敏感信息前它也会暂停。",
        },
      ],
      source: { label: "来源：Google Gemini 应用帮助中关于任务的文章", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "上限、定时和关闭",
      points: [
        "最多同时运行 15 个任务；已经有 15 个在跑时，定时任务不会启动。",
        "Google 的帮助说，任务模式关闭或设备关机时，定时任务不会运行。可以在任务对话里，或网页版的“Scheduled”页面暂停或恢复定时。",
        "用量上限按算力计算，Ultra 比 Pro 高。",
        "Chrome 自动浏览只在桌面端可用。",
        "关闭方法：网页版在“Settings > Task settings”里关掉“Use task mode to hand off work”；Mac 应用在“Gemini > Settings > Tasks”里关。关闭会删除远程浏览器和代码运行数据；你的任务、定时和文件会保留，但处于暂停状态。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Gemini 任务的使用场景",
      text: ["前三个是 Google 发布时自己举的例子。"],
      headers: ["场景", "做什么"],
      rows: [
        ["订阅费检查", "扫描每月的信用卡账单，找出新增或隐藏的订阅费"],
        ["学校邮件汇总", "盯着截止日期，每天给你和你的伴侣发一份汇总"],
        ["会后跟进", "把邮件和聊天里的会议记录整理成文档，并起草跟进邮件"],
        ["清理收件箱", "归档订阅邮件，帮你退订邮件列表"],
        ["盯价格", "盯着机票和酒店价格，降价了告诉你"],
        ["调研报告", "带引用来源调研一个主题，整理成文件"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini 任务对比 Meta Muse 和 Grok Bot",
      headers: ["", "Gemini 任务（Spark）", "Meta Muse", "Grok Bot"],
      rows: [
        ["出品方", "Google", "Meta", "xAI"],
        ["最便宜的入门方式", "Google AI Pro", "美国免费，有每周额度", "免费试用额度；X Premium 及以上"],
        ["最擅长", "Gmail、文档和 Google 的应用", "日常跑腿、WhatsApp", "工作应用、多个 Bot 组队"],
        ["定时", "按时间或按事件", "提醒和周期任务", "例程：定时或触发"],
        ["不可用的地区", "欧洲经济区、瑞士、英国、尼日利亚", "美国以外（有限测试中）", "-"],
        ["指南", "本页", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一个为你的工作、而不只是收件箱定时干活的 agent",
      text: [
        "Gemini 任务照看的是一个人的 Google 应用。Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，从共享看板领下一个任务并向你汇报。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始，比如 SEO 专员或软件工程师。",
        },
        {
          title: "设置工作时间和心跳",
          text: "在你选的时间段里每 15 到 240 分钟醒一次。参见 [Codex 定时任务](/proactive-codex)。",
        },
        {
          title: "对比各个个人 Agent",
          text: "参见[个人 AI Agent 对比](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 Gemini 任务" },
  mid: {
    title: "想要一个推进团队待办的 agent？",
    text: "Crewmark 员工按心跳醒来，从看板领下一个任务，用的是你已有的 Claude Code 或 Codex 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Gemini Spark 怎么不见了？",
        a: "Google 给它改了名。测试版里的 Spark 现在在 Gemini 应用里叫“任务”：点输入框下方的“Task”。你已有的任务和定时都会保留。",
      },
      {
        q: "Gemini Spark 免费吗？",
        a: "不免费。任务需要在个人 Google 账号上订阅 Google AI Pro 或 Ultra；美国 Google AI Pro 每月 $19.99。",
      },
      {
        q: "英国或欧洲能用 Gemini Spark 吗？",
        a: "暂时不能。Google 的帮助列出的范围是所有能用 Gemini 应用的地方，但欧洲经济区、瑞士、英国和尼日利亚除外。",
      },
      {
        q: "Gemini Spark 有 Mac 应用吗？",
        a: "有，任务可以在 Mac 上的 Gemini 应用里用，手机应用和 gemini.google.com 也能用。",
      },
      {
        q: "Gemini 任务能定时运行吗？",
        a: "能，在固定时间或某件事发生时运行。最多同时运行 15 个任务，任务模式关闭时定时会暂停。",
      },
      {
        q: "Gemini Spark 和 Meta Muse 选哪个？",
        a: "如果你的生活离不开 Gmail 和 Google 的应用，又在付 Google AI Pro，选 Gemini 任务。如果你在美国、想先免费用起来，选 Meta Muse。",
      },
    ],
  },
  cta: {
    title: "个人 agent 管收件箱，AI 员工管待办。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Google 发布 Gemini Spark 的文章和 Gemini 应用帮助核对。",
  disclaimer: "Crewmark 是独立产品，与 Google、Meta 和 xAI 均无关联，也未获其背书。Gemini 和 Google 是 Google 的商标。",
};
