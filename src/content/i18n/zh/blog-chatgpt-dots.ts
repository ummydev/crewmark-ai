import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots 是什么：用法与价格 | Crewmark AI",
    description:
      "ChatGPT dots 是 OpenAI 的常驻 agent。它能做什么、哪些套餐可用、如何设置、自定义规则、限制，以及与同类产品的对比。",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "博客 · ChatGPT",
    title: "ChatGPT dots 是什么，怎么用",
    lead: "dots 是 ChatGPT 里的常驻 agent，于 2026 年 9 月 29 日在 OpenAI DevDay 上发布。每个 dot 都有自己的云端电脑和浏览器，能连接你的应用，从反馈中学习，并在你不在的时候继续朝你的目标推进。本文介绍谁能用、要花多少钱、如何设置、约束它的规则，以及它目前还做不到什么。",
    cta: "开始使用",
    secondary: "跳到设置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT dots 是什么",
      text: [
        "OpenAI 称 dots 为“能力出众、始终在线、为处理一切而生的 agent”。dot 运行在 GPT-6 Astra 上，在自己的云端电脑上用自己的浏览器工作，使用你连接的应用。你可以在桌面端、网页端和移动端的 ChatGPT 里与它对话，也可以在 Slack 和 Teams 里，在移动 App 里用语音，还可以通过短信（面向 Pro 用户的美国 beta）。",
      ],
      points: [
        "你不在时它也在工作：它以只读权限访问你连接的应用，主动寻找能帮忙的地方，并执行定时提醒和周期性检查。",
        "它能同时推进多个项目，并主动向你汇报进展、提出问题、请你做需要你拍板的决定。",
        "它有记忆：一开始就带着你在 ChatGPT 里的记忆，并在合作中逐渐了解你的偏好。",
        "它通过委派来写代码：dot 可以发起 Codex 任务，这些任务计入你的 Codex 额度。",
        "你可以随时旁观：随时打开 dot 的电脑，接管操作，再把控制权交还给它。",
      ],
    },
    {
      kind: "table",
      title: "谁能用 dots，要花多少钱",
      text: [
        "下表中的套餐都免费包含你的第一个 dot。发布后的第一个月里，dots 的用量不计入套餐额度；OpenAI 表示之后会公布各套餐的用量条款，但在我们核对时尚未公布。购买更多 dot 或为每个 dot 增加工作量已经宣布，但还没有价格。",
      ],
      headers: ["套餐", "dots", "说明"],
      rows: [
        ["Free、Go、Plus、Business", "否", "不包含"],
        ["Pro（Pro 100、Pro 200、Pro 500）", "是，逐步开放中", "不适用于欧洲经济区（EEA）、瑞士和英国"],
        ["Business Premium", "是，逐步开放中", "限支持的地区，并取决于工作区是否符合条件"],
        ["Enterprise、Edu、Healthcare", "Beta", "默认关闭，需工作区管理员开启"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何设置你的第一个 dot",
      text: ["你需要年满 18 岁。功能是逐步开放的，可能要过几天才会出现在你的账号里。"],
      steps: [
        {
          title: "打开 dots",
          text: "访问 chatgpt.com/dots，或在 ChatGPT 桌面 App、桌面网页端，以及 iOS 或 Android 的移动 App 中打开 dots。",
        },
        {
          title: "创建 dot 并命名",
          text: "按引导操作：给它起个名字，这个名字会成为它的 handle（@你的名字-agent名字），再选一个头像。两者之后都可以在它的个人资料页修改。",
        },
        {
          title: "连接你的应用",
          text: "在 dot 的个人资料页打开 Customize，再进入 Plugins，选择一个应用并检查它请求的权限。Slack 需要在桌面端连接。dot 可以使用你连接的个人邮箱账号，但目前还不能拥有自己的邮箱地址。",
        },
        {
          title: "设置自定义规则",
          text: "在 Customize 下的 Custom rules 中，为每类操作选择：无需询问直接执行、仅在你的提示里预先批准时执行、执行前先询问，或者交给你来做。",
        },
        {
          title: "给它一个目标",
          text: "描述你想要的结果并提供背景；用 + 添加文件，在对话串里回复来引导它。可以让它设置提醒或周期性检查，并在 Scheduled 里管理。",
        },
        {
          title: "跟进、暂停或删除",
          text: "个人资料页会显示 In progress、Scheduled 和 Completed 的工作。需要时可在 ••• 菜单里暂停 dot。删除 dot 会清除它的记忆和定时任务，且无法撤销。",
        },
      ],
      source: { label: "来源：OpenAI 发布 dots 的公告", href: announcement },
    },
    {
      kind: "text",
      title: "安全：dot 会自己做什么、不会自己做什么",
      points: [
        "修改密码或转账，始终需要你接管并亲自完成。",
        "永久删除数据或安装软件，可能每次都需要你批准。",
        "Auto-review 会根据你的指示和规则检查有风险的操作，例如邮件发给谁；你的自定义规则无法关闭它。",
        "dot 可以用商家网站上保存的银行卡购物，但每次都需要你批准，或事先给出具体的批准。",
        "除非你在 ChatGPT 桌面 App 里通过 Allow access 连接，否则你自己的电脑与它是隔离的；该选项默认关闭。",
        "OpenAI 表示，其提示注入防护能降低风险但无法消除风险，而且有些已完成的操作无法撤销。",
      ],
    },
    {
      kind: "text",
      title: "dots 目前还做不到的事",
      points: [
        "你只有一个主 dot；多个 dot 组成团队被描述为未来的方向。",
        "dot 没有自己的邮箱地址，不能给你打电话，也不支持移动网页端。",
        "没有 webhook 或事件触发器来启动它；它只根据你的消息、它的定时安排和它自己的只读调研来工作。",
        "你无法查看、编辑或删除单条记忆；要清除它学到的东西，只能删除这个 dot。",
        "Plus 用户用不了 dots，欧洲经济区、瑞士和英国的 Pro 用户也用不了。",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI 于 2026 年 8 月发布了 Grok Bot，称其为“你的常驻 agent 团队”，并配有自己的电脑。Crewmark 走的是另一条路：它不是在别人的云上新建一个 agent，而是把你已经在用的编程 agent 变成在你自己电脑上工作的员工。",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["运行在", "OpenAI 的云端电脑", "据 xAI 称，在它自己的电脑上", "你的电脑，在 Claude Code 或 Codex 里"],
        ["模型", "GPT-6 Astra", "Grok", "你的 Claude Code 或 Codex 用的模型"],
        ["数量", "一个主 dot", "多个，彼此可以互发消息", "每个岗位一名员工，想设几个就设几个"],
        ["如何开始工作", "你的消息、定时安排、它自己的调研", "通过观察你工作来学习例行流程", "工作时间内每 15–60 分钟一次心跳"],
        ["工作队列", "对话串和 Scheduled", "未公开说明", "看板上的任务"],
        ["目标", "你描述的目标", "未公开说明", "用数字表示的 KPI，例如每月点击量 +10%"],
        ["套餐", "Pro、Business Premium、Enterprise beta", "SuperGrok 和 Cursor 套餐，beta", "开放注册；用你现有的 Claude 或 ChatGPT 套餐运行"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "已经在为 Claude Code 或 Codex 付费？让它始终在线",
      text: [
        "如果你需要常驻处理的工作在代码库或网站里，就不需要一个新的 agent。Crewmark 给你已经在用的 Claude Code 或 Codex 会话一个岗位、一个目标和工作时间，并用心跳唤醒它，从看板上领取下一个任务。",
      ],
      steps: [
        {
          title: "把会话变成员工",
          text: "选一个岗位，比如 SEO 专员或软件工程师，用数字写下它的目标，然后在 Claude Code 或 Codex 里运行设置命令。",
        },
        {
          title: "让心跳让它持续工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，所以记得自己做过什么；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "分配任务，回复它的消息",
          text: "把工作放到看板上；员工会领取任务，边做边留评论，遇到阻碍时给你发消息。了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置你的第一个 ChatGPT dot" },
  mid: {
    title: "想给你的代码库配一个常驻 agent？",
    text: "Crewmark 用心跳让你的 Claude Code 或 Codex 会话持续工作，用的就是你已经付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "ChatGPT dots 常见问题",
    items: [
      {
        q: "ChatGPT dots 是什么？",
        a: "ChatGPT 里的常驻 agent，于 2026 年 9 月 29 日发布。每个 dot 运行在 GPT-6 Astra 上，有自己的云端电脑和浏览器，能连接你的应用，从反馈中学习，并持续朝你的目标推进。",
      },
      {
        q: "ChatGPT dots 多少钱？",
        a: "Pro 和 Business Premium 免费包含你的第一个 dot。OpenAI 计划出售更多 dot 和每个 dot 的更多工作量，但尚未公布价格，也未公布发布首月之后的用量条款。",
      },
      {
        q: "ChatGPT Plus 能用 dots 吗？",
        a: "不能。Free、Go、Plus 和标准 Business 套餐都不包含 dots。dots 正在向 Pro 和 Business Premium 逐步开放，并在 Enterprise、Edu 和 Healthcare 中以 beta 形式提供。",
      },
      {
        q: "ChatGPT dot 怎么用？",
        a: "打开 chatgpt.com/dots，创建 dot 并命名，在 Customize 下连接应用，设置自定义规则决定它可以不经询问做哪些事，然后给它一个目标。在它的个人资料页的 In progress、Scheduled 和 Completed 里跟进它的工作。",
      },
      {
        q: "ChatGPT dots 和 Grok Bot 有什么区别？",
        a: "两者都是有自己电脑的常驻 agent。dot 运行在 GPT-6 Astra 上，发布时你只有一个；xAI 的 Grok Bot 是一支可以互发消息的 agent 团队，面向 SuperGrok 和部分 Cursor 套餐提供 beta。",
      },
      {
        q: "ChatGPT dots 能写代码吗？",
        a: "能，通过委派给 Codex：dot 可以发起 Codex 云端任务，如果你连接了自己的电脑，也可以发起本地 Codex 任务，这些都计入你的 Codex 额度。",
      },
    ],
  },
  cta: {
    title: "让你已经在用的 agent 始终在线。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 2 日对照 OpenAI 的发布公告、帮助中心、更新日志和价格页面核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenAI、xAI 或 Anthropic 无关，也未获其背书。ChatGPT 是 OpenAI 的商标，Grok 是 xAI 的商标，Claude Code 是 Anthropic 的商标。",
};
