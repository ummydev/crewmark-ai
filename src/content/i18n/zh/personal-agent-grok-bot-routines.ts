import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# 在负责这件事的 Bot 的对话里直接说
设置一个例程：每个工作日早上 7:00 整理我隔夜的 Gmail，
给紧急的邮件起草回复，把清单发给我。什么都不要发出去。

设置一个例程：每周日下午 6:00 查看下周的 Google 日历，
标出冲突和排得太满的日子，给我发一份周一计划。

设置一个例程：工作日每 2 小时查看 Slack 的 #launch 频道，
找出关于价格的问题，起草回答等我批准。`;

const webhook = `# 从例程的 Webhook 区域（桌面端）复制 "POST to" 和 "key"
curl -X POST "https://<例程里的 POST to 地址>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 返回 200 = 已开始运行（结果看 Bot 的对话）
# 其他返回 = 没有开始运行`;

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 例程（Routines）：定时、Webhook 和排错",
    description:
      "怎么设置 Grok Bot 例程：用自然语言写定时、时区、测试运行、Webhook 和 Slack 触发、上限（50 个例程、间隔 5 分钟、每小时 300 次），以及例程不运行时该查什么。",
  },
  breadcrumb: "Grok Bot 例程",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Grok Bot",
    title: "Grok Bot 例程：怎么定时运行、用 Webhook 触发，以及出问题怎么办",
    lead: "例程（routine）告诉某一个 Grok Bot 什么时候做一件事：按时间表，比如每个工作日早上 8 点；或者在某件事发生时，比如 Slack 里有人提到它、有 Webhook 调用进来。Bot 在云端电脑上工作，所以合上笔记本例程照样运行。本文讲怎么在桌面端和手机上创建例程、怎么写定时、Webhook 和事件触发、各项上限、xAI 官方给的例程示例，以及例程不运行时该查什么。",
    cta: "开始使用",
    secondary: "创建例程",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot 的例程是什么",
      text: [
        "用 xAI 的话说，例程“告诉一个 Bot 什么时候运行一个工作流程：按时间表，或者在某件事发生时”。它属于某一个 Bot，用这个 Bot 的记忆和技能，结果发在这个 Bot 的对话里。",
      ],
      points: [
        "定时：用自然语言写，比如“每个工作日早上 8:00”“每 2 小时”，按设置里的时区计算。",
        "事件：Slack 触发；GitHub、Linear、Sentry 或 PagerDuty 的事件；发到 Bot 自己邮箱的邮件；或 Webhook 调用。",
        "新建的例程不会马上运行，而是等到下一个预定时间；想立刻跑一次用“Test”。",
        "例程在 Bot 的云端电脑上运行，你合上笔记本它也照常执行。",
        "每次运行（包括测试）都会消耗你的 Grok Bot 用量。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Grok Bot 里创建例程",
      steps: [
        {
          title: "让负责这件事的 Bot 来设置",
          text: "在桌面端打开那个 Bot 的对话，说清楚要做什么、什么时候做：输入从哪里来、要什么结果、哪些步骤要你批准、某个来源缺失时怎么办。在手机上，打开 Bot 的资料页，在“Routines”下点“Add routine”，把以“Set up a routine to”开头的消息写完发出去。",
          code: prompts,
        },
        {
          title: "检查“When to run”和时区",
          text: "打开例程，看“When to run”确认保存下来的时间；不对就点“Edit”描述怎么改。时区在“Settings”里“Bot”下面的“Timezone”。“Auto-detect”跟随你当前电脑的时区，如果工作属于别的时区，就固定选一个。",
        },
        {
          title: "先测试一次",
          text: "在桌面端打开例程，点“Test”。运行期间显示“Running…”，结果出现在 Bot 的对话里。测试会做真实操作，比如改文件、使用网站，所以凡是会写入或发出的步骤都要设成需要你批准。没有“Test”按钮的例程，可以让 Bot 在对话里用安全的输入先做一次。",
        },
        {
          title: "暂停、恢复或删除",
          text: "桌面端：点 Bot 的名字，打开“Details”，用例程那一行的开关；或者打开例程点“Pause”或“Resume”。手机上：从 Bot 资料页打开例程，关掉“Active”；左滑那一行可以删除。删除无法撤销。",
        },
      ],
      source: { label: "来源：xAI 的 Grok Bot 文档《Skills and routines》", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "怎么用 Webhook 触发例程",
      text: ["Webhook 让别的服务来启动例程，比如你的店铺收到退款申请时，或者有人提交了报名表时。"],
      steps: [
        {
          title: "加上触发器",
          text: "让 Bot 给这个例程加一个 Webhook 触发器。",
        },
        {
          title: "复制地址和密钥",
          text: "在桌面端打开例程，找到“Webhook”区域：“POST to”（地址）、“key”（密钥）和“header”（完整的 Authorization 头），点一下就能复制。",
          code: webhook,
        },
        {
          title: "发送 POST 并看返回",
          text: "发一个 HTTP POST，把密钥放在 `Authorization: Bearer <key>` 里。可以带 JSON 正文，Bot 会连同例程的指令一起收到。返回 200 表示已经开始运行，不代表已经完成。其他任何返回都表示没有开始运行：确认例程没有暂停，并且用的是当前的密钥。",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack、GitHub 等事件触发",
      points: [
        "Slack：可以在 Bot 被提到时、出现某个词或短语时、有人对消息加表情时、或任何消息时触发，监听一个频道或整个 Slack。先在拥有这个 Bot 的 Cursor 账号上连接 Slack。",
        "GitHub、Linear、Sentry 和 PagerDuty：这些工具里的事件可以启动例程；它们通过 Cursor 账号的集成运行，可能需要单独连接。",
        "邮件：发到 Bot 自己邮箱的邮件可以启动例程。",
        "只有新的动态才会触发。触发条件尽量收窄：监听一个很热闹的频道里的每条消息，用量会消耗得很快。",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Grok Bot 例程的上限",
      headers: ["项目", "上限"],
      rows: [
        ["每个 Bot 的例程数", "最多 50 个"],
        ["最短间隔", "两次运行至少相隔 5 分钟"],
        ["所有例程合计每小时运行次数", "最多 300 次"],
        ["单个例程每小时运行次数", "最多 200 次"],
        ["保留的运行记录", "每个例程最近 20 次"],
        ["超过频率上限", "运行失败，提示“Automation run rate limit exceeded”"],
        ["长时间不使用后", "Grok Bot 可能会问你是否继续运行例程，没有回应就会暂停它们"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Grok Bot 例程不运行？逐项检查",
      points: [
        "从来没运行过：新例程要等下一个预定时间。点“Test”立刻跑一次。",
        "被暂停了：桌面端那一行的开关是关的，或手机上“Active”是关的。你长时间不在时，Grok Bot 也可能自己暂停例程。",
        "时间不对：看“When to run”，再检查“Settings > Bot”里的“Timezone”。“Auto-detect”会跟着你当前用的电脑走。",
        "Slack 触发没反应：消息必须是新的、在被监听的频道里、并且包含匹配的短语。",
        "Webhook 没有启动运行：返回不是 200 就说明没启动。检查例程是否暂停、密钥是否是当前的。",
        "因为频率上限失败：收窄触发条件或放宽时间间隔，然后用“Test”或重新发送 Webhook 再跑一次。xAI 还把一些因共享的 Grok Bot 上限导致的失败列为已知问题，这类失败不会自动重试。",
        "用量用完了：每次运行都消耗每周用量。暂停不需要的例程、放宽间隔。在 The X Subscription 上，超出部分从预付额度扣；在旧版 Cursor 套餐上，开启了按需用量才会继续。",
        "“Sync failed”：xAI 的例程文档没有说明这个错误。打开例程检查时间和触发条件，点“Test”试一次；如果一直失败，在应用里联系 Grok Bot 支持。",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "xAI 官方示例里的例程点子",
      text: ["这些来自 xAI 文档里的使用场景；每一个都只起草，发出去之前等你批准。"],
      headers: ["例程", "时间", "做什么"],
      rows: [
        ["早间简报", "每天早上", "汇总各个应用隔夜的变化，起草一条团队消息"],
        ["收件箱整理", "夜里", "按紧急程度整理 Gmail，给紧急邮件起草回复但不发送"],
        ["下周安排", "周日晚上", "查看 Google 日历，标出冲突，发一份周一计划"],
        ["会议记录", "每天晚上", "从 Granola 笔记里提取带负责人的待办，起草 Slack 消息"],
        ["项目进展", "每周五", "起草 Notion 项目进展，你批准后再写进去"],
        ["营销活动小组", "每周一上午 9 点", "拉取注册数据、起草发布内容，并对照数据核实"],
        ["竞品情报", "每周", "带链接汇报竞品的新发布和价格变化"],
        ["月末结账", "每月 1 日", "核对发票、对账，列出需要你签字确认的例外"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给你的编程 agent 也安排例程",
      text: [
        "Grok Bot 的例程适合 Gmail、Slack、Notion 里的工作。如果工作在代码仓库里，Crewmark 能给你自己的 Claude Code 或 Codex 同样的节奏：一个有岗位、量化目标、工作时间和心跳的 AI 员工，心跳把它叫醒去看板领下一个任务。",
      ],
      steps: [
        {
          title: "在你的 agent 上雇一个员工",
          text: "在 Claude Code 或 Codex 对话里运行设置命令，这个对话就成了员工。参见[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "设置工作时间和心跳",
          text: "在你选的时间段里每 15 到 240 分钟醒一次，通宵也行。参见[如何让 Claude Code 主动工作](/proactive-claude-code)和 [Codex 定时任务](/proactive-codex)。",
        },
        {
          title: "对比各个个人 Agent",
          text: "参见 [Grok Bot 指南](/personal-agent/grok-bot)和[个人 AI Agent 对比](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "创建 Grok Bot 例程" },
  mid: {
    title: "想给编程 agent 也安排同样的例程？",
    text: "Crewmark 在工作时间按心跳叫醒你的 Claude Code 或 Codex，交给它下一个任务。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "怎么在 Grok Bot 里设置定时例程？",
        a: "在负责这件事的 Bot 的对话里，让它设置一个例程并说明时间，比如“每个工作日早上 8:00”。手机上打开 Bot 资料页点“Add routine”。然后打开例程检查“When to run”和时区。",
      },
      {
        q: "为什么我的 Grok Bot 例程不运行？",
        a: "通常是还在等第一次预定时间、被暂停了，或者时区不对。点“Test”确认能跑，确认“Active”是开的，再看“When to run”。Webhook 调用没有返回 200 就不会启动运行。",
      },
      {
        q: "怎么用 Webhook 触发 Grok Bot 例程？",
        a: "让 Bot 加一个 Webhook 触发器，然后在桌面端从例程的“Webhook”区域复制地址和密钥，用 `Authorization: Bearer <key>` 发 HTTP POST。JSON 正文会传给 Bot。",
      },
      {
        q: "Grok Bot 例程最多能多频繁？",
        a: "最短每 5 分钟一次。单个例程每小时最多 200 次，所有例程合计最多 300 次，一个 Bot 最多 50 个例程。",
      },
      {
        q: "电脑关机时例程还会运行吗？",
        a: "会。Bot 在云端电脑上工作，定时和触发的运行在你合上笔记本后照常进行，完成后会通知你。",
      },
      {
        q: "Grok Bot 例程消耗用量吗？",
        a: "消耗。每次运行，包括“Test”，都会用掉 Grok Bot 用量；频繁的定时和热闹的 Slack 触发消耗最快。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份时间表和一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 xAI 的 Grok Bot 文档和 Cursor 的 Grok Bot 套餐页核对。",
  disclaimer: "Crewmark 是独立产品，与 xAI、SpaceX、X 和 Cursor 均无关联，也未获其背书。Grok 是其所有者的商标。",
};
