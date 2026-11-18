import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/meta-muse; the English master is
// src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `每个工作日早上 7 点给我发一份简报：今天的日程、
收件箱里要紧的事，还有天气。

帮我找 12 月第一个周末飞芝加哥、400 美元以内的三个航班，
做个对比，订之前先问我。

我想卖掉我的车。查一下它值多少钱，起草出售信息，
告诉我哪些报价值得回复。`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse 是什么、怎么用、多少钱",
    description:
      "Meta 的个人 AI agent Muse 详解：能做什么、怎么获取和使用、免费版、Power（$20）和 Maximum（$100）套餐、定时任务、连接应用和付款、隐私设置，以及和其他 agent 的对比。",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Meta Muse",
    title: "Meta Muse：Meta 的个人 agent 能做什么、怎么用、多少钱",
    lead: "Muse 是 Meta 的个人 AI agent，2026 年 9 月 8 日在美国上线。Meta 说它“不只是回答问题，而是真的把事情做完”：发邮件、订行程、填表、替你谈价，你关掉应用后它继续干，遇到发邮件、买东西这类重要操作会先问你。本文讲怎么获取、怎么使用、各套餐和 token 限额、定时任务、隐私设置，以及它和 Grok Bot、ChatGPT dots、Claude 的对比。",
    cta: "开始使用",
    secondary: "怎么用",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Meta Muse 是什么",
      text: [
        "Muse 运行在 Meta 的 Muse Spark 模型上，跑在一台 Meta 称为 Muse Secure VM 的专属云端机器里。它把目标拆成计划在后台推进，情况有变或需要你批准时再回来找你。",
      ],
      points: [
        "它会动手：发邮件、订行程、打开浏览器、填表、谈价。Meta 举的例子有把车卖个更好的价钱、压低一笔账单、调整训练计划。",
        "它会记住：你只提过一次的细节它也记得，还会主动提建议，比如把你收藏的 Instagram 菜谱短视频变成购物清单。",
        "它付款更安全：结账走 Stripe 的 Link，Link 的 agent 钱包生成一次性卡号，Muse 看不到你真实的卡号。",
        "它就在你身边：Muse 应用、网页版 muse.ai，以及 WhatsApp；接下来是 Meta 的 AI 眼镜。",
        "它不是 Meta AI（Facebook、Instagram、WhatsApp 里的助手），也不是 Meta 面向开发者的 Muse Code。",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Meta Muse 价格：Free、Power 和 Maximum",
      text: ["来自 2026 年 11 月 10 日的 Meta 帮助中心。Muse 及其订阅还在有限测试中，并非所有地区都能用。"],
      headers: ["套餐", "价格", "每周用量"],
      rows: [
        ["Free", "$0", "有每周免费额度（Meta 没公布具体多少）；用完等重置或升级"],
        ["Power", "每月 $20", "每周 5 亿 Muse token"],
        ["Maximum", "每月 $100", "每周 30 亿 Muse token"],
        ["额外 token", "单独购买", "在每周额度之外再买"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么获取和使用 Meta Muse",
      text: [
        "你需要年满 18 岁或达到所在地的成年年龄、身在 Muse 可用的地区（目前在美国上线），并用 Meta 账号登录。Meta 账号可以用 Facebook、Instagram、邮箱或手机号创建。",
      ],
      steps: [
        {
          title: "下载应用或打开 muse.ai",
          text: "在 iOS 或 Android 上下载 Muse 应用，或者登录 muse.ai。Meta 没有列出 Windows 或 Mac 应用，在电脑上就用浏览器打开 muse.ai。",
        },
        {
          title: "告诉它你要什么",
          text: "Muse 打开后在“Chat”标签页。描述你想要的结果，而不是每一步；它可能先问几个问题。你可以不等它回复就继续追问，也不用重复前面的背景。",
          code: prompts,
        },
        {
          title: "连接它需要的应用",
          text: "自己选择 Muse 能用哪些应用、每个给多大权限；邮件可以选只读或可读可发。即将支持：结账用 Shop Pay，以及接入 1Password 让它用你已有的登录。",
        },
        {
          title: "批准、查看、找到文件",
          text: "发邮件、买东西这类敏感操作前 Muse 会先问你，并保留一份记录，列出它做过和打算做的事。它生成的文件保存在“Library”标签页。",
        },
      ],
      source: { label: "来源：Meta 发布 Muse 的公告", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Muse 的提醒和定时任务",
      text: ["Muse 没有单独的定时设置页面：提醒和周期任务都是直接跟它说，Meta 帮助中心说明了它们怎么运作。"],
      points: [
        "一次性提醒：告诉 Muse 提醒什么、什么时候，它会确认具体时间。",
        "周期任务：说清楚做什么、多久一次，比如“每周一上午 9 点提醒我交工时表”。它会一直执行到你取消，每次到点给你发消息。",
        "查看：问“我有哪些提醒？”，或者点顶部的助手图标，打开“Upcoming”。",
        "修改或取消：说明是哪一个、怎么改，比如把周一的提醒挪到周二。",
        "时间按你的时区；如果选的时间已经过了，Muse 会建议别的时间。",
        "更多日常例程的点子见 [Meta Muse 使用场景](/personal-agent/meta-muse-use-cases)。",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "隐私：怎么退出、Meta 能看到什么",
      points: [
        "每个人的 Muse 跑在自己的 Muse Secure VM 里，别人的 agent 访问不到。",
        "另一个叫 Sentinel 的 agent 要先批准 Muse 发往互联网的任何内容，必要时会问你。",
        "Muse 看不到你的密码和付款方式；共享的登录信息存在安全存储里。",
        "你的对话和虚拟机数据不会给 Meta 的广告系统。",
        "你可以选择不让自己的互动被用来训练 Meta 的 AI，随时修改或断开任何应用，也可以让 Muse 忘掉某件事。",
        "Meta 计划今年晚些时候推出 Muse Confidential VM，用只有你持有的密钥加密。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse 用不了或不好用？",
      points: [
        "不在美国：Muse 在美国上线，其他地区还在有限测试；Meta 说目前并非所有地区都能用。",
        "未满 18 岁：需要年满 18 岁或达到所在国家的成年年龄。",
        "免费额度用完了：等每周额度重置、升级到 Power 或 Maximum，或者购买额外 token。",
        "没有语音模式：语音只在部分国家可用，且需要麦克风权限，可在“Settings > Voice and Avatar”里修改。",
        "它做了意料之外的事：Meta 提醒 Muse 可能出错或做出意外操作，所以发送和购买都保留审批，并经常看看操作记录。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse 对比 Grok Bot、ChatGPT dots 和 Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["出品方", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["面向", "日常任务和生活琐事", "工作：一组 Bot 在你的应用里干活", "ChatGPT 里的长期目标", "主动来找你的 Claude"],
        ["最便宜的入门方式", "免费，有每周额度", "免费试用额度；X Premium 及以上", "ChatGPT Pro", "Claude Pro，需排队"],
        ["定时", "提醒和周期任务", "例程：定时、Slack、邮件和 Webhook", "定时提醒和周期检查", "主动告诉你需要关注的事"],
        ["指南", "本页", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Muse 替你跑腿，谁替你清待办？",
      text: [
        "Muse 是为生活琐事做的。如果你想交出去的工作在代码仓库或营销计划里，Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，从看板领下一个任务，需要你拍板时发消息给你。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始，比如 SEO 专员或社交媒体运营。",
        },
        {
          title: "给它工作时间和心跳",
          text: "在你设定的时间段里每 15 到 240 分钟醒一次。参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "对比各个个人 Agent",
          text: "参见[个人 AI Agent 对比](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "开始使用 Meta Muse" },
  mid: {
    title: "想要一个帮你清工作待办的 agent？",
    text: "Crewmark 员工按心跳醒来，从看板领下一个任务，用的是你已有的 Claude Code 或 Codex 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Meta Muse 是什么？",
        a: "Meta 的个人 AI agent，2026 年 9 月 8 日在美国上线，由 Muse Spark 模型驱动。它在自己的云端机器上替你发邮件、订行程、填表、买东西，敏感操作前会先问你。",
      },
      {
        q: "Meta Muse 免费吗？",
        a: "免费，但有每周用量限额。Power 每月 $20，每周 5 亿 Muse token；Maximum 每月 $100，每周 30 亿；也可以单独购买额外 token。",
      },
      {
        q: "怎么获取 Meta Muse？",
        a: "在 iOS 或 Android 下载 Muse 应用，或者打开 muse.ai，用 Meta 账号登录。需要年满 18 岁或达到成年年龄，并且身在 Muse 可用的地区；目前在美国上线。",
      },
      {
        q: "Windows 或 Mac 上能用 Meta Muse 吗？",
        a: "Meta 列出的是 iOS、Android 应用和 muse.ai。在 Windows 电脑或 Mac 上，用浏览器打开 muse.ai。",
      },
      {
        q: "Muse 能定时执行任务吗？",
        a: "能。让它设一个周期任务，比如“每周一上午 9 点提醒我交工时表”；它会一直执行到你取消，在助手图标的“Upcoming”里能看到。",
      },
      {
        q: "Meta 会拿我的 Muse 对话投广告吗？",
        a: "Meta 说对话和虚拟机数据不会给它的广告系统。你也可以选择不让自己的互动被用于训练 Meta 的 AI 模型。",
      },
    ],
  },
  cta: {
    title: "个人 agent 替你跑腿，AI 员工替你清待办。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Meta 发布 Muse 的公告和 Meta 帮助中心文章核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Meta、xAI、OpenAI 和 Anthropic 均无关联，也未获其背书。Muse、Meta 和 WhatsApp 是 Meta 的商标。",
};
