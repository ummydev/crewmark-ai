import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet 是什么：候补名单、使用资格与限制 | Crewmark AI",
    description:
      "Claude Duet 是 Anthropic 的主动式 agent 应用，自 2026 年 10 月 21 日起进入研究预览。它能做什么、谁能用、如何加入候补名单、费用、安全限制，以及与同类产品的对比。",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "博客 · Claude",
    title: "Claude Duet 是什么，谁能用，怎么用",
    lead: "Claude Duet 是 Anthropic 推出的新应用，让 Claude 成为一个主动式 agent：它会主动告诉你哪些事需要关注，完成你交给它的任务，在你离开时继续工作，并在代你行动之前先征得你的同意。它于 2026 年 10 月 21 日以需要候补的研究预览形式上线，面向美国的 Pro、Max 和 Ultra 订阅用户。本文介绍它能做什么、如何获得使用资格、费用、安全限制，以及与同类产品的对比。",
    cta: "开始使用",
    secondary: "如何获得使用资格",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Duet 是什么",
      text: [
        "普通的 Claude 对话要等你打开才开始。Duet 则会先找你：它盯着你连接的应用，发送简短的晨间简报，没事时保持安静，任务完成或需要你拍板时给你发消息。Anthropic 为专业人士和小企业主打造了它，基于 Claude Opus 5.5。",
      ],
      points: [
        "晨间简报：每天一份简短摘要，汇总你所连接的应用里最重要的事。",
        "一个对话串：你用文字或语音给它发消息，就像对待同事，它只保持一段持续的对话。",
        "你的 Claude 上下文：从第一条消息起，它就使用你 Claude 账号里的记忆、技能和已连接的应用。",
        "自己的云端电脑：任务在带有独立浏览器的虚拟机里运行，所以你的笔记本和手机可以关机。",
        "大小任务都行：安排会议、起草回复、追讨未付的发票、准备供审核的工资单，或制作仪表盘、预测、演示文稿和原型。",
        "连接器：来自 Claude Marketplace 的 6,000 多个连接器和插件，例如 Gmail、Slack、QuickBooks、Stripe、HubSpot、Docusign 和 Shopify。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet 速览",
      headers: ["", "Claude Duet"],
      rows: [
        ["发布时间", "2026 年 10 月 21 日，以研究预览形式发布"],
        ["谁能用", "美国的 Pro、Max 和 Ultra 订阅用户，需通过候补名单"],
        ["Team 和 Enterprise", "暂不包含"],
        ["在哪用", "独立的 iOS 和 Android 应用，以及电脑上的 claude.ai"],
        ["价格", "没有单独定价：包含在套餐内，与 Claude 其他功能共用同一套用量限制"],
        ["模型", "Claude Opus 5.5"],
        ["检查频率", "每隔几个小时一次；你可以选择想收到哪些通知以及频率"],
        ["API", "暂未公布"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何获得 Claude Duet 并完成设置",
      steps: [
        {
          title: "确认你的套餐符合条件",
          text: "你需要美国的 Pro、Max 或 Ultra 套餐。Team 和 Enterprise 套餐暂不在预览范围内。",
        },
        {
          title: "加入候补名单",
          text: "在 claude.com/product/claude-duet 的 Claude Duet 页面报名。等 Duet 对你的账号开放后，Anthropic 会发邮件通知你。",
        },
        {
          title: "打开应用",
          text: "在 iOS 或 Android 上安装独立的 Claude Duet 应用，或在电脑上通过 claude.ai 使用。它与 Claude 主应用是分开的，但共用同一个账号。",
        },
        {
          title: "连接它要关注的应用",
          text: "你已连接到 Claude 的应用会自动沿用，在任一处关闭某个应用，两处都会关闭。先从最重要的几个开始，比如收件箱、日历和开票。",
        },
        {
          title: "告诉它你想收到什么通知",
          text: "设定什么算紧急，以及你想多久收到一次更新。每次后台检查都会占用你套餐的额度，所以规则越少越精准，额度就越耐用。",
        },
        {
          title: "交给它一个任务，并审批它的操作",
          text: "像给同事发消息一样给它发消息。它会自己阅读和起草，然后把操作、收件人和内容展示给你，等你批准后才会发送、付款、签署或删除任何东西。",
        },
      ],
      source: { label: "来源：Anthropic 的 Claude Duet 公告", href: announcement },
    },
    {
      kind: "text",
      title: "安全、隐私与限制",
      points: [
        "审批：在发送敏感消息、付款或删除之前，它会准确展示将要做什么并等待你确认。模型之外还有一道独立的检查，判断每个操作是否符合你的意图。",
        "即使获得批准也绝不允许：买卖证券、在账户之间转账，或使用他人的账号。",
        "密码：它从不接触你的密码、cookie 或登录令牌。购物使用一次性卡片，仅限该商家和该金额。",
        "敏感数据：分类器会阻止分享银行卡号、银行账号和政府证件号；健康和财务信息只有在你要求时才会分享。",
        "记忆：在你删除或重置之前，它会保留你的对话历史和记忆。断开某个应用会停止新的访问，但它已经了解到的内容会保留，直到你重置它的记忆。",
        "早期预览：Anthropic 表示，它可能误读对话、误判什么是紧急事项，或漏掉两次检查之间到达的内容，而且在个人琐事上比在工作任务上更弱。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "三者都是不需要你守在对话里也能持续工作的 agent。Duet 和 [ChatGPT dots](/blog/chatgpt-dots) 是面向你业务应用的助手，运行在各自厂商的云端；Crewmark 则按心跳唤醒你已在运行的编程 agent（如 Claude Code 或 Codex），让它处理看板上的一批 issue。",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["运行在", "Anthropic 的云端电脑", "OpenAI 的云端电脑", "你的电脑上，在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 里"],
        ["如何开始工作", "你的消息，以及每隔几小时的检查", "你的消息、定时任务和它自己的调研", "工作时间内每 15 到 60 分钟一次心跳"],
        ["最擅长", "收件箱、日历、发票、简报和仪表盘", "跨已连接应用的调研和任务", "代码、SEO 等代码仓库里的工作，一个岗位一名员工"],
        ["工作队列", "一个持续的对话串", "对话串和 Scheduled", "看板上的 issue"],
        ["费用", "包含在 Pro、Max 和 Ultra 内（美国）", "Pro 和 Business Premium 套餐", "开放注册；使用你已有的 agent 和套餐"],
        ["状态", "研究预览，需候补", "逐步开放中", "开放注册"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "想让 Claude Code 也有同样的主动性？",
      text: [
        "Duet 盯的是你的收件箱和业务应用；Anthropic 并没有说明它会在你的代码仓库里工作。Crewmark 把同样的思路带给编程 agent：它给 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话一个岗位、一个目标和工作时间，并按心跳在同一个对话里唤醒它。",
      ],
      steps: [
        {
          title: "把一个会话变成员工",
          text: "选一个岗位，比如软件工程师或 SEO 专员，把它的目标写成一个数字，然后在 Claude Code 里运行设置命令。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟醒来一次，接着上次的进度继续；见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上，员工会接手、边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "获取 Claude Duet 并完成设置" },
  mid: {
    title: "喜欢会主动给你发消息的 agent 吗？",
    text: "Crewmark 为 Claude Code 和 Codex 做到了这一点：心跳、工作时间和 issue 看板，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Duet 常见问题",
    items: [
      {
        q: "Claude Duet 是什么？",
        a: "Anthropic 的一款应用，自 2026 年 10 月 21 日起进入研究预览，让 Claude 成为主动式 agent。它会关注你连接的应用，发送晨间简报，在自己的云端电脑里完成任务，并在代你行动之前征求你的批准。",
      },
      {
        q: "Claude Duet 是什么时候发布的？",
        a: "Anthropic 于 2026 年 10 月 21 日开放研究预览，需要候补。开放是逐步进行的，等它对你的账号准备好后，Anthropic 会发邮件通知你。",
      },
      {
        q: "如何获得 Claude Duet 的使用资格？",
        a: "持有美国的 Pro、Max 或 Ultra 套餐，在 claude.com/product/claude-duet 加入候补名单。之后在 iOS 或 Android 上使用 Claude Duet 应用，或在电脑上使用 claude.ai。",
      },
      {
        q: "Team 或 Enterprise 套餐能用 Claude Duet 吗？",
        a: "暂时不能。Anthropic 的产品页说明，Team 和 Enterprise 套餐不在预览范围内。",
      },
      {
        q: "Claude Duet 多少钱？",
        a: "没有单独定价。它包含在 Pro、Max 和 Ultra 内，与 Claude 其他功能共用同一套用量限制；后台检查和较大的任务会消耗更多额度。",
      },
      {
        q: "Claude Duet 安全吗？",
        a: "在发送、付款、签署或删除之前它会先询问，从不接触你的密码或登录令牌，购物使用一次性卡片，即使获得批准也不能买卖证券或在账户之间转账。它还只是早期预览，所以仍可能误判什么是紧急事项。",
      },
      {
        q: "Claude Duet 能在我的代码仓库里写代码吗？",
        a: "它能在自己的云端电脑里制作原型和网页应用，但 Anthropic 并没有把它定位为用于你代码仓库的编程 agent。要做这件事，应该用 Claude Code，而 Crewmark 用心跳和 issue 看板让 Claude Code 会话变得主动。",
      },
    ],
  },
  cta: {
    title: "也让你的 Claude Code 会话主动工作起来。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 5 日对照 Anthropic 的 Claude Duet 公告、产品页和安全文章查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 或 OpenAI 无关，也未获其背书。Claude、Claude Duet 和 Claude Code 是 Anthropic 的商标，ChatGPT 是 OpenAI 的商标。",
};
