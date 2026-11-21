import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "个人 AI Agent 2026：Muse、Grok Bot、Dots 对比",
    description:
      "什么是个人 AI agent，以及大家正在搜的几款，按各家官方页面对比：Meta Muse、Grok Bot、ChatGPT dots、Claude Duet、Manus Cue、Gemini 任务、Microsoft Autopilot、OpenClaw 和 Hermes Agent。",
  },
  breadcrumb: "个人 Agent",
  hero: {
    kicker: "个人 Agent",
    title: "2026 年的个人 AI Agent：是什么，该用哪一个",
    lead: "个人 agent 是替你干活、而不只是陪你聊天的 AI：它有自己的电脑或浏览器，登录你的应用，记住你的偏好，你关掉应用后它继续工作，需要你拍板时再回来找你。最近几个月，Meta、xAI、OpenAI、Anthropic、Google、Microsoft 和 Manus 都推出了自己的个人 agent。本页说明它们的共同点，按各家官方页面做对比，并链接到每一款的详细指南。",
    cta: "开始使用",
    secondary: "看对比",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "什么是个人 agent",
      text: [
        "聊天机器人回答完就等着。个人 agent 接过一个目标，规划步骤，在网页和你的应用里把事情做完，而且常常是在你不在的时候。新一代个人 agent 有五个共同特征。",
      ],
      points: [
        "自己的电脑：一台云端机器或浏览器，像人一样点击、输入、填表。",
        "你的应用：邮件、日历、文件和聊天工具，权限由你决定。",
        "记忆：它会记住你的偏好，同样的要求不用说两遍。",
        "全天候：定时和周期任务，你关掉应用后工作照样继续。",
        "审批：发送、购买或其他你标为敏感的操作，会先等你同意。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "个人 AI agent 对比",
      text: ["来自 2026 年 11 月 10 日各家的官方页面。可用范围变化很快，注册前请再确认。"],
      headers: ["Agent", "出品方", "面向", "谁能用", "最便宜的入门方式"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "日常任务和生活琐事", "美国，18 岁以上，Meta 账号", "免费，有每周额度；Power 每月 $20"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "工作：一组 Bot 在你的应用里干活", "X Premium、Super、Ultra；SuperGrok；Cursor 套餐", "免费试用额度"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "ChatGPT 里的长期目标", "ChatGPT Pro 和 Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "主动来找你的 Claude", "美国的 Claude Pro、Max、Ultra，需排队", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "在 WhatsApp、Telegram、Slack 或浏览器里用的个人 agent，带工作流", "有 Base44 账号的人", "消耗 Base44 套餐额度；Starter 按年付每月 $16"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "拥有自己的邮箱、电话、钱包和电脑的 agent", "早期体验，需邀请码", "早期体验期间免费"],
        ["[Gemini 任务（原 Spark）](/personal-agent/gemini-spark)", "Google", "在 Gemini 里跑腿、调研、生成文件", "Google AI Pro 或 Ultra，欧洲经济区、英国和瑞士除外", "Google AI Pro"],
        ["Microsoft Autopilot（原 Scout）", "Microsoft", "Microsoft 365 和 Teams 里的工作", "加入 Frontier 的组织，需 GitHub Copilot 许可", "通过你的组织"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "开源", "在你的聊天应用里、自己部署的助手", "任何人；跑在你自己的电脑上", "免费；模型费用自付"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research，开源", "自己部署、会积累技能的 agent", "任何人；跑在你自己的电脑上", "免费；模型费用自付"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "该用哪个个人 agent？",
      points: [
        "想要有人帮你处理生活琐事，暂时不想付费：Meta Muse，在美国免费。参见 [Meta Muse 使用场景](/personal-agent/meta-muse-use-cases)。",
        "想要一组 agent 按时间表处理工作：Grok Bot，例程可以定时或按触发器运行。参见 [Grok Bot 例程](/personal-agent/grok-bot-routines)。",
        "已经在付 ChatGPT Pro：用 ChatGPT dots。有 Claude Pro 及以上：用 Claude Duet，需排队。",
        "主要在 Google 的应用里：Google AI Pro 的 Gemini 任务。工作在 Microsoft 365 里：如果你的组织加入了 Frontier，用 Autopilot。",
        "想要能打电话、能在预算内付款的 agent：Manus Cue，早期体验中。参见 [Manus Cue](/personal-agent/manus-cue)。",
        "想跑在自己机器上、用自己的模型：OpenClaw 或 Hermes Agent，都是开源的。",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "面向工作的 AI 同事",
      text: [
        "为工作任务、而不是生活琐事打造的 agent，每一款都有详细指南。信息来自 2026 年 11 月 13 日各家的官方页面；更多内容见 [AI 同事工具对比](/blog/ai-coworker)。",
      ],
      headers: ["AI 同事", "出品方", "面向", "最便宜的入门方式"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "在 Claude 应用里做调研、文档、电子表格和幻灯片", "Claude Pro，每月 $20"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "跨 Outlook、Teams 和 Office 文件的多步骤任务", "Microsoft 365 Copilot 许可证加 Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "最终产出演示文稿、电子表格或分析的任务", "ChatGPT Free 可在桌面应用中有限使用；Plus 起可完整使用，每月 $20"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "一个协调者 agent 运行许多云端编程 agent", "Cursor Premium，每月 $30"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "在邮件、Slack、iMessage 和电话里工作的助手", "免费试用；之后每位活跃用户每月 $29.99"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng，开源", "行动前先问你的桌面 AI 同事", "免费；用你自己的模型密钥或本地模型"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit，开源", "可自托管的 AI 同事工作区", "个人项目免费"],
        ["[Suparagent](/personal-agent/suparagent)", "开源", "在 Claude Code、Codex 或 Gemini CLI 上运行、带例行任务的具名 agent", "自托管免费"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "交出账号之前",
      points: [
        "只连接任务需要的东西，能选只读就选只读（Muse 的邮件可以选只读）。",
        "发送、购买和任何公开的操作都保留审批。Muse 和 Gemini 默认在发送或购买前会问你；Grok Bot 的 Auto Review 默认放行大多数操作，所以要加“Ask first”规则。",
        "弄清楚谁还能用这个登录：Grok Bot 共用一台电脑，一个 Bot 登录的网站其他 Bot 也能用。",
        "看清用量上限：在后台干活的 agent，你不在时也在消耗 token。",
        "时不时看看操作记录；各家都提醒这些 agent 可能出错或做出意外操作。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "生活交给个人 agent，工作交给 AI 员工",
      text: [
        "个人 agent 围绕一个人的杂事而做。Crewmark 围绕一份工作而做：它把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳，从团队共享的看板领下一个任务，边做边写评论，卡住时发消息给你。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)开始：软件工程师、SEO 专员、营销 agent、社交媒体运营或设计师。",
        },
        {
          title: "用你已有的套餐",
          text: "它在你自己的 Claude Code 或 Codex 里运行，没有额外的 token 账单。参见[价格](/pricing)。",
        },
        {
          title: "让它一直干下去",
          text: "在你设定的时间段里每 15 到 240 分钟醒一次。参见[如何让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一个有正经工作、而不只是跑腿的 agent？",
    text: "Crewmark 员工按心跳推进共享看板上的工作，用的是你已经在付费的 Claude Code 或 Codex 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "什么是个人 AI agent？",
        a: "替你做事、而不只是回答的 AI：它有自己的电脑或浏览器，使用你的应用，记住你的偏好，在后台执行定时任务，敏感操作前先问你。",
      },
      {
        q: "2026 年最好的个人 AI agent 是哪个？",
        a: "看你已经在用什么。Meta Muse 最容易上手（在美国免费），Grok Bot 的工作例程最完善，ChatGPT dots 和 Claude Duet 随 Pro 套餐提供，想自己部署的人适合 OpenClaw 或 Hermes Agent。",
      },
      {
        q: "有免费的个人 AI agent 吗？",
        a: "Meta Muse 在美国免费，有每周额度；Grok Bot 有免费试用额度；Manus Cue 在早期体验期间免费；OpenClaw 和 Hermes Agent 是免费的开源软件（模型费用自付）。",
      },
      {
        q: "Grok Bot、Muse 和 Dots 有什么区别？",
        a: "Muse 是 Meta 做日常事务的 agent，可以免费开始。Grok Bot 是 xAI 做工作的 agent，有多个 Bot 和例程。ChatGPT dots 是 OpenAI 在 ChatGPT 里的全天候 agent，Pro 和 Business Premium 可用。",
      },
      {
        q: "个人 agent 和 AI 员工是一回事吗？",
        a: "不完全是。个人 agent 为一个人处理杂事。Crewmark 说的 AI 员工有岗位和目标，按时间表推进团队看板上的工作，并向一起工作的人汇报。",
      },
      {
        q: "个人 AI agent 安全吗？",
        a: "它们都设计了审批、隔离的机器和操作记录，但各家都说它们可能出错。只连接需要的东西，发送和购买保留审批，并检查它们做了什么。",
      },
    ],
  },
  cta: {
    title: "杂事交给个人 agent，工作交给 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照各家的公告、文档、帮助中心和价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Meta、xAI、OpenAI、Anthropic、Manus、Google、Microsoft、OpenClaw 和 Nous Research 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
