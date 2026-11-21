import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 同事工具对比：Claude Cowork、Copilot 等",
    description:
      "AI 同事对比：Claude Cowork、Copilot Cowork、ChatGPT Work、Gemini 等，以及 Andrew Ng 的开源 OpenWorker。",
  },
  breadcrumb: "AI 同事工具",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "博客 · AI 同事",
    title: "AI 同事工具对比：各自能做什么、花多少钱、行动前先问你什么",
    lead: "AI 同事是一种 agent，你可以把一整项任务交给它。它在你的文件、应用和浏览器里工作，在后台持续推进，遇到有风险的操作会先征求你的同意。2026 年，Anthropic、Microsoft、OpenAI、Google、Meta 和 xAI 都推出了自己的 AI 同事，GitHub 上也有开源项目，其中包括 Andrew Ng（吴恩达）的 OpenWorker。下面介绍每一款能做什么、谁能用、价格多少、运行在哪里，信息全部来自各厂商自己的页面。",
    cta: "开始使用",
    secondary: "直接看对比表",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "什么是 AI 同事？",
      text: [
        "聊天机器人负责回答问题。AI 同事则接下一项有明确结果的任务，比如一份报告、一套演示文稿、一张填好的电子表格或一个清空的收件箱，然后自己一步步完成。这些产品差别很大，但有四点是共同的：",
      ],
      points: [
        "在你工作的地方工作：文件、邮件、日历、已连接的应用和浏览器。",
        "不用你盯着也会继续做：在云端计算机上，或者在你自己的电脑上，只要应用保持打开。",
        "可以重复执行：大多数能按计划运行任务，或在某件事发生时运行，比如收到一封新邮件。",
        "先问再做：发送、发布、购买和删除都要等你审批。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "AI 同事工具一览",
      text: [
        "信息来自各厂商的网站、定价页、文档或 GitHub，于 2026 年 11 月 13 日查证。价格以美元计。本表不是排名。",
      ],
      headers: ["AI 同事", "开发方", "谁能用", "起价", "运行在"],
      rows: [
        ["Claude Cowork", "Anthropic", "Claude 付费套餐，Free 不含", "Claude Pro，$20/月", "Anthropic 的云端；通过桌面应用使用本地文件和浏览器"],
        ["Copilot Cowork", "Microsoft", "拥有 Microsoft 365 Copilot 许可证的工作或学校账户；个人账户处于预览阶段", "Copilot Credits，每个 $0.01，许可证费用另计", "Microsoft 的云端，使用你在 OneDrive 和 SharePoint 中的文件"],
        ["ChatGPT Work", "OpenAI", "ChatGPT 各套餐；Free 和 Go 只能在桌面应用中有限使用", "ChatGPT Plus 起可完整使用，$20/月", "OpenAI 的云端，或通过桌面应用在你的电脑上运行"],
        ["Gemini 任务（原名 Spark）", "Google", "Google AI Pro 或 Ultra，限使用个人账户的成年人；欧洲经济区、瑞士、英国和尼日利亚除外", "Google AI Pro，$19.99/月（美国）", "Google 的云端"],
        ["Meta Muse", "Meta", "美国和加拿大，18 岁以上；10 月 27 日起新加坡也可用", "大部分用途免费；另有订阅", "每位用户一台云端计算机"],
        ["Grok Bot", "xAI", "Premium、Super、Ultra、Teams 和 Enterprise 套餐", "Premium，$30/月", "每个 Bot 一台云端计算机；Slack、Teams 和通话"],
        ["Lindy", "Lindy", "所有人；有免费试用", "每位活跃用户 $29.99/月", "Lindy 的云端；Slack、邮件、iMessage、电话"],
        ["OpenWorker（开源）", "Andrew Ng", "所有人；桌面应用处于公开测试阶段", "免费；用你自己的模型密钥或本地模型", "你的电脑（macOS、Windows）"],
        ["OpenBot（开源）", "CopilotKit", "所有人", "个人项目免费；Business 每用户最高 $29/月", "你的笔记本电脑或你的 Kubernetes 集群"],
        ["Suparagent（开源）", "GitHub 用户 Anil-matcha", "所有人", "自托管免费；托管版 $15/月起", "桌面应用、你的服务器，或托管版"],
        ["Crewmark", "Crewmark", "所有人", "免费：1 个项目，最多 3 名 AI 员工", "你的电脑上，在你的 Claude Code 或 Codex 里"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "各款 AI 同事的详细指南",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork)：套餐、设置、审批模式，以及 Cowork 和 Claude Code 的对比。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)：许可证、Copilot Credits，以及在 Microsoft 365 里怎么设置。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)：Work 模式能做什么、哪些套餐包含它，以及它和 Codex 的关系。",
        "[Cursor Projects](/personal-agent/cursor-projects)：Cursor 面向较大编程工作的协调者 agent。",
        "[Lindy](/personal-agent/lindy)：按额度计费的价格，以及怎么设置。",
        "[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot) 和 [Suparagent](/personal-agent/suparagent)：开源的几款，附从 GitHub 开始的设置方法。",
        "并排对比：[全部对比](/compare)，比如 [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) 和 [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio)。",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "各大 AI 实验室推出的 AI 同事",
      points: [
        "Claude Cowork（Anthropic）：在 Claude 应用里完成编程以外的工作，比如调研、文档、电子表格、幻灯片和文件处理。任务在云端运行，合上笔记本电脑也会继续；你可以用 `/schedule` 让任务每小时、每天或每周运行一次。在 Manual（手动）模式下，它行动前会先问你；在 Auto（自动）模式下，它会对每个操作做安全审查。仅限付费套餐，最低为 Pro，每月 $20。",
        "Copilot Cowork（Microsoft）：在 Microsoft 365 里跨应用完成多步骤任务，包括发邮件、安排会议、编辑 Word、Excel 和 PowerPoint 文件，以及在 Teams 里发消息。执行敏感操作前会弹出审批对话框，支持定时任务和事件触发的任务，并可根据租户设置选用 GPT、Claude 或 Grok 模型。需要 Microsoft 365 Copilot 许可证，另按 Copilot Credits 计算用量。",
        "ChatGPT Work（OpenAI）：ChatGPT 里的 Work 模式，适合最终会产出待你审阅成果的任务，比如演示文稿、电子表格和分析报告。它和 Codex 共享核心能力和用量。Free 和 Go 可在桌面应用中有限使用；Plus（$20/月）及以上可在桌面端、网页端和移动端使用，并支持定时任务和事件触发。",
        "Gemini 任务（Google，原名 Spark）：Gemini 应用里的云端 agent，会使用 Gmail、Docs 等 Google 应用，可按计划运行，也可在某件事发生时运行；发送、删除、购买或提交表单前一定会先问你。Google 的帮助页面列出的是 Google AI Pro 或 Ultra。",
        "Meta Muse：基于 Meta 的 Muse Spark 模型的个人 agent，每位用户都有自己的云端计算机。它按计划工作，也会响应事件；未经你的审批，它不会发布或发送任何内容，也不会花钱。Meta 称，大多数人需要的用途都是免费的，需要更多可以订阅。",
        "Grok Bot（xAI）：每个 Bot 都有自己的云端计算机，会登录你的工具，在 Slack、Microsoft Teams 和视频通话中工作，运行例行任务，还会互相交接工作。包含在 xAI 的 Premium（$30/月）、Super 和 Ultra 套餐中。见 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub 上的开源 AI 同事",
      text: [
        "如果你更想自己运行 AI 同事，用自己的模型密钥或本地模型，下面这些是开源的：",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker)（MIT，约 19,000 颗星）：Andrew Ng 的 \"AI coworker for your everyday work\"（处理日常工作的 AI 同事），一款适用于 macOS 和 Windows 的桌面应用，目前处于公开测试阶段。它在你的电脑上运行，可使用 OpenAI、Anthropic、Gemini 或本地模型，操作要经过审批才会执行，还能按计划生成简报和报告。",
        "[OpenBot](https://github.com/CopilotKit/OpenBot)（MIT，约 11,600 颗星）：CopilotKit 可自托管的 AI 同事工作区，每个 AI 同事都有自己的浏览器、文件和工具。它使用另行授权的 CopilotKit Intelligence。见 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "[Suparagent](https://github.com/Anil-matcha/suparagent)（Apache-2.0，约 7,000 颗星）：\"a workspace for AI coworkers\"（AI 同事的工作区），在你已经在用的引擎上运行有名字的 agent，带例行任务和审批，引擎可以是 Claude Code、Codex 或 Gemini CLI。",
        "[ai-employees](https://github.com/markfulton/ai-employees)（MIT）：8 个业务岗位，每个是一个装着定时例行任务的文件夹，由你已经在用的 agent 来运行。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "面向代码的 AI 同事：Cursor Projects",
      text: ["上面的大多数 AI 同事处理的是文档、邮件和调研。针对软件工作，Cursor 推出了 Projects："],
      points: [
        "一个协调者 agent 规划一项较大的工作，比如一个新功能、一次迁移或一个完整的应用，把它分派给在 Cursor Cloud Agents 上并行运行的 agent，再把完成的工作交回给你检查。",
        "每个 Project 在自己的云端计算机上运行，所以合上笔记本电脑不会让它停下；它还保存共享笔记、偏好和一块任务看板，其中每个 agent 都会读。",
        "它可以盯着一个 Slack 频道、按计划运行或跟进你的 pull request。在 Multiplayer Projects 中，每位团队成员都有一个协调者，协调者之间互相发消息。",
        "它包含在有 Cloud Agents 的 Cursor 套餐中，Premium 每月 $30 起，Free 和 Plus 不包含。见 [Cursor Projects 指南](/personal-agent/cursor-projects)和 [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)。",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "有免费的 AI 同事吗？",
      points: [
        "Meta Muse：据 Meta 称，大多数人需要的用途都是免费的。",
        "ChatGPT Work：ChatGPT Free 可在桌面应用中有限使用。",
        "开源项目：OpenWorker、OpenBot（个人项目）和 Suparagent 运行起来不花钱；你只需向模型提供商付费，或者使用本地模型。",
        "Lindy：免费试用，7 天内 $50 额度。",
        "Crewmark：1 个项目、最多 3 名 AI 员工免费，跑在你已有的 Claude Code 或 Codex 订阅上。",
        "Claude Cowork、Gemini 任务、Copilot Cowork 和 Grok Bot 需要付费套餐或许可证。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何选择 AI 同事",
      steps: [
        { title: "从工作所在的地方出发", text: "工作中用 Microsoft 365，就看 Copilot Cowork；用 Gmail 和 Google Docs，就看 Gemini；如果你已经在为 Claude 或 ChatGPT 付费，套餐里就带有 Cowork 或 Work。" },
        { title: "决定它在哪里运行", text: "云端的 AI 同事在你合上笔记本电脑后仍会继续工作。开源的则把你的数据、密钥和文件留在你自己的电脑上。" },
        { title: "看它怎么征求同意", text: "看看发送、发帖和花钱之前有没有审批，以及有没有记录它做过什么的日志。" },
        { title: "用一项重复任务试两周", text: "一份周报，或每天清理一次收件箱，很快就能看出它是否帮你省了时间。" },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "AI 同事 vs AI 员工",
      text: [
        "这两个名称有重叠。实际上，AI 同事是你有任务时随手交给它的帮手，而 AI 员工有固定的岗位：岗位职责、目标、工作时间，以及一个它会自己去接活的工作队列。围绕后一种理念打造的平台，对比见[最佳 AI 员工平台](/blog/best-ai-employee-platforms)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给你的编程 agent 一份固定的工作",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、用数字表示的目标、工作时间和心跳。每名员工从共享看板上接下一个 issue，需要你拍板时就在 issue 下问你。",
      ],
      steps: [
        { title: "选一个岗位", text: "在 [AI 员工岗位](/ai-employees)里挑一个，比如 [AI SEO 专员](/ai-employees/seo-specialist)。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每个 agent 能做的工作及设置方法，见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "选择 AI 同事" },
  mid: {
    title: "想要一个有固定工作的 AI 同事？",
    text: "Crewmark 给你的 Claude Code 或 Codex agent 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "什么是 AI 同事？",
        a: "一种你可以把一整项任务交给它的 agent。它在你的文件、应用和浏览器里工作，在后台持续推进，可以按计划重复执行任务，并且在发送、发布、购买或删除之前会先问你。",
      },
      {
        q: "Andrew Ng（吴恩达）的 AI 同事是什么？",
        a: "OpenWorker：一款适用于 macOS 和 Windows 的开源桌面应用，采用 MIT 许可证，地址是 github.com/andrewyng/openworker。它的 README 称它为 \"an AI coworker for your everyday work\"（处理日常工作的 AI 同事）。它在你的电脑上运行，使用你自己的模型密钥或本地模型。",
      },
      {
        q: "Claude Cowork 免费吗？",
        a: "不免费。Claude Cowork 仅在 Claude 付费套餐中提供，最低为 Pro，每月 $20（按年付则为每月 $17）。Claude Free 不包含它。",
      },
      {
        q: "Copilot Cowork 多少钱？",
        a: "它需要 Microsoft 365 Copilot 许可证，用量以 Copilot Credits 计费：按量付费时每个 $0.01，也可以选择预付一年的方案，折扣从 5% 到 20% 不等。",
      },
      {
        q: "Claude Cowork vs Claude Code：有什么区别？",
        a: "Claude Cowork 用于在 Claude 应用里完成编程以外的工作：调研、文档、电子表格、幻灯片和文件。Claude Code 是 Anthropic 面向代码仓库的编程 agent。Anthropic 表示，Cowork 和 Claude Code 采用相同的架构。",
      },
      {
        q: "GitHub 上有开源的 AI 同事吗？",
        a: "有，比如 OpenWorker（Andrew Ng，MIT）、OpenBot（CopilotKit，MIT）、Suparagent（Apache-2.0）和 ai-employees（MIT）等。",
      },
    ],
  },
  cta: {
    title: "给你的 AI 一份工作，而不只是一项任务。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照各厂商自己的网站、定价页、文档或 GitHub 查证。",
  disclaimer:
    "Crewmark 是一款独立产品，与本页提到的任何公司均无关联，也未获得其背书。产品名称是其所有者的商标。",
};
