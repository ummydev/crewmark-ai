import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/grok-bot; the English master is
// src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 是什么、怎么用、哪些套餐能用",
    description:
      "xAI 的 Grok Bot 详解：这个全天候 agent 能做什么、X、SuperGrok 和 Cursor 的哪些套餐包含它、免费试用、Mac、Windows、Linux 和手机下载、怎么设置第一个 Bot，以及使用场景。",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Grok Bot",
    title: "Grok Bot：xAI 的个人 agent 能做什么、怎么用",
    lead: "Grok Bot 是 xAI 推出的全天候 agent，xAI 称它是“你主动的 AI 队友”。每个 Bot 在一台云端电脑上工作，有浏览器、文件和终端，能登录你用的应用，记得你喜欢的做事方式，你合上笔记本它也继续干。它在 2026 年 8 月开启早期测试。本文讲它能做什么、哪些套餐包含它、怎么设置第一个 Bot、例程和审批怎么运作，以及大家用它做什么。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot 是什么",
      text: [
        "Grok Bot 不是 Grok 聊天机器人，也不是 X 上的 @grok 账号。它是一个有自己电脑的 agent：能像人一样使用应用和网站，写代码、跑代码，处理多步骤的工作，比如做一份演示文稿、跑一次营销活动、订餐厅、让日历保持同步。",
      ],
      points: [
        "云端电脑：你的所有 Bot 共用一台持久的云端机器，有浏览器、文件系统和终端。每个 Bot 有自己的屏幕，你可以实时看任何一个。",
        "多个 Bot 组成团队：每个 Bot 负责一件事；它们可以互相发消息、交接工作，你的第一个 Bot 可以汇报其他 Bot 的进展。",
        "应用：Gmail、Google 日历、Google Drive、Slack、Notion、Granola、GitHub 等，还能接任意 MCP 服务器或 API。它和 Cursor 用同一套 MCP 服务器、插件和技能。",
        "记忆：每个 Bot 记录你的偏好和带日期的工作日志；少数信息，比如你的名字和时区，所有 Bot 共享。",
        "例程：Bot 能按时间表或在某件事发生时运行任务，比如 Slack 里被提到、收到 Webhook。参见 [Grok Bot 例程](/personal-agent/grok-bot-routines)。",
        "桌面端、手机、Slack 和 X 上都能找到它，可以打字也可以语音。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "哪些套餐包含 Grok Bot",
      text: [
        "Grok Bot 用 Cursor 账号运行。下面是 Cursor 的 Grok Bot 套餐页列出的包含它的套餐；xAI 和 Cursor 都没有单独列出 Grok Bot 的价格或每周用量的具体数字。",
      ],
      headers: ["套餐", "Grok Bot", "用量"],
      rows: [
        ["The X Subscription：Premium、Super、Ultra", "包含，个人或团队席位", "共享的每周额度，Super 和 Ultra 更多；超出后从预付额度扣"],
        ["The X Subscription：Plus、Free", "不包含", "-"],
        ["旧版 Cursor 套餐：Pro、Pro+、Ultra、Teams", "包含", "每周用量从 Pro 到 Ultra 递增；开启按需用量后可继续"],
        ["关联 SuperGrok、SuperGrok Plus、SuperGrok Heavy、X Premium+", "通过关联账号包含", "Heavy 最多；关联账号和 Cursor 套餐不叠加"],
        ["SuperGrok Lite", "不包含", "-"],
        ["免费试用", "一笔用量额度，7 天有效", "按 agent 步骤和 token 消耗，用完不补"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Grok Bot",
      steps: [
        {
          title: "下载应用",
          text: "从 x.ai/bot 下载。桌面端支持 macOS（Apple 芯片和 Intel）、Windows（x64 和 Arm64）和 Linux（x64 和 Arm64），手机支持 iPhone（iOS 18 及以上）和 Android（9 及以上）。",
        },
        {
          title: "登录",
          text: "点“Sign in”，在浏览器里完成登录；Grok Bot 用的是你的 Cursor 账号，所以公司的单点登录同样适用。如果你的使用权来自 SuperGrok 或 X Premium+，在引导页关联你的 Grok 账号。开着“Privacy Mode (Legacy)”的账号要先切换，因为 Bot 需要云端存储。",
        },
        {
          title: "给第一个 Bot 一件事",
          text: "应用会创建一个名叫 Grok Bot 的 Bot 并打开对话。用“New Bot”（Cmd/Ctrl+N）添加更多。在第一条消息里给每个 Bot 一件事，并让它记住你希望怎么做。你也可以在 Bot 的电脑上把一项任务录一遍来教它。",
        },
        {
          title: "连接应用、设置规则",
          text: "连接它需要的应用。登录信息依次从它的 Vault、1Password 这类密码管理器、安全表单获取，Bot 看不到密码。“Auto Review”默认开启，会在操作执行前检查；在“Settings > General > Bot”里为必须等你确认的事情加上“Ask first”规则。",
        },
      ],
      source: { label: "来源：xAI 的 Grok Bot 文档《Get started》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Grok Bot 怎么让你保持掌控",
      points: [
        "审批卡片：需要你同意时，Bot 会显示一张卡片并等待。xAI 的示例里，Slack 回复和 Gmail 邮件都是起草好等你批准。",
        "“Auto Review”会在 Bot 运行命令、使用应用或操作电脑前检查，只把你本人的消息当作指令。xAI 说明它能降低有害内容带来的风险，但不能消除。",
        "Bot 没有自己的账号，它以你的身份操作，所以每个动作都能追溯到你。",
        "所有 Bot 共用一台电脑和其中的登录状态：一个 Bot 登录了某个网站，其他 Bot 也能用这个登录。",
        "遇到单点登录或通行密钥，点“Open computer”，再点“Take control”，完成这一步后告诉 Bot 继续。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Grok Bot 使用场景",
      text: ["来自 xAI 的使用场景文档。多数是起草好工作，发出去之前等你批准。"],
      headers: ["场景", "Bot 做什么"],
      rows: [
        ["早间简报", "汇总各个应用隔夜的变化"],
        ["收件箱管理", "按紧急程度整理未读邮件并起草回复"],
        ["出行协调", "找两套机票和酒店方案，预订留给你决定"],
        ["会前准备", "写一页简报：参会人、过去的讨论和未决事项"],
        ["内容营销", "根据本周上线的内容起草简报邮件和帖子"],
        ["销售开发", "按你的理想客户画像筛选新线索并起草回复"],
        ["竞品情报", "每周汇报竞品的新发布和价格变化"],
        ["营销活动小组", "几个 Bot 拉取注册数据、起草发布内容并核实"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot 对比 Muse、Dots 和 Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["出品方", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["运行在", "你所有 Bot 共用的一台云端电脑", "每人一台专属云端虚拟机", "自己的云端电脑和浏览器", "Claude Duet 应用"],
        ["定时", "例程：定时、Slack、GitHub、邮件或 Webhook", "提醒和周期任务", "定时提醒和周期检查", "主动告诉你需要关注的事"],
        ["谁能用", "X Premium 及以上、SuperGrok、Cursor 套餐", "美国，免费有限额；Power 每月 $20", "ChatGPT Pro 和 Business Premium", "美国的 Claude Pro、Max、Ultra，需排队"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给你的代码配一个 Grok Bot 式的队友",
      text: [
        "Grok Bot 在你的应用里干活，Crewmark 在你的代码仓库里干活。它把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳：按时醒来，从看板领下一个任务，开 pull request，需要你拍板时发消息给你。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员。",
        },
        {
          title: "给它工作时间和心跳",
          text: "在你设定的时间段里每 15 到 240 分钟醒一次。参见[如何让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "对比各个个人 Agent",
          text: "参见[个人 AI Agent 对比](/personal-agent)和 [Meta Muse 指南](/personal-agent/meta-muse)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Grok Bot" },
  mid: {
    title: "想给你的代码库配一个主动的队友？",
    text: "Crewmark 员工按心跳醒来，从看板领下一个任务，开 pull request。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Grok Bot 是什么？",
        a: "xAI 的全天候 agent。每个 Bot 在一台云端电脑上工作，登录你的应用，记住你的偏好，按时间表运行例程，你合上笔记本后它也继续干。它不是 Grok 聊天机器人，也不是 X 上的 @grok 账号。",
      },
      {
        q: "Grok Bot 多少钱？",
        a: "它没有单独的价目表：The X Subscription 的 Premium、Super、Ultra，旧版 Cursor 的 Pro、Pro+、Ultra 和 Teams，以及关联的 SuperGrok、SuperGrok Plus、SuperGrok Heavy 和 X Premium+ 都包含它。不同套餐的用量上限不同。",
      },
      {
        q: "Grok Bot 有免费试用吗？",
        a: "有，是一笔 7 天有效的用量额度。按 agent 步骤和 token 消耗，用完不补，也不会自动转成付费套餐；用完后升级或关联账号即可继续。",
      },
      {
        q: "Grok Bot 支持 Windows、Linux 和 Android 吗？",
        a: "支持。桌面应用可在 macOS、Windows 和 Linux（x64 和 Arm64）上运行，另有 iPhone（iOS 18+）和 Android（9+）应用。",
      },
      {
        q: "Grok Bot 能定时执行任务吗？",
        a: "能，用例程：用自然语言写时间表，或者在 Slack 消息、GitHub 或 Linear 事件、邮件、Webhook 到来时触发。参见 [Grok Bot 例程](/personal-agent/grok-bot-routines)。",
      },
      {
        q: "Grok Bot 和 Meta Muse 哪个好？",
        a: "Muse 面向所有人的日常琐事，在美国有免费额度。Grok Bot 面向工作：多个 Bot 组成团队、带触发器的例程，还能用 Cursor 的工具写代码。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一条提示。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 xAI 的 Grok Bot 文档和指南以及 Cursor 的 Grok Bot 套餐页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 xAI、SpaceX、X、Cursor、Meta、OpenAI 和 Anthropic 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
