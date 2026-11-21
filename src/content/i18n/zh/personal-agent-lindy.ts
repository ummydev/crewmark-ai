import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI 是什么：助手功能、价格、额度和设置",
    description:
      "Lindy AI 详解：一个处理收件箱、日历、会议和 Slack 的托管助手。额度制价格、例行任务、审批、在哪里使用，以及 Lindy 和 Relevance AI 的对比。",
  },
  breadcrumb: "Lindy",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Lindy",
    title: "Lindy AI：这个助手能做什么、多少钱、怎么设置",
    lead: "Lindy 称自己是一名在你连接的工具里完成工作的 AI 员工。它是一个托管助手，对每位用户来说是私人行政助理，在 Slack 里则是团队共享的队友。它处理收件箱、日历、会议、调研、报告和跟进，把周期性工作作为例行任务运行，任何会对外产生影响的操作都会等你批准。本文讲它能做什么、额度制价格怎么算、怎么设置、审批怎么运作，以及它和 Relevance AI、Grok Bot 的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Lindy 是什么",
      points: [
        "一个助手，而不是 agent 搭建工具：文档描述的是每个工作区一个 Lindy。它面向多种岗位推广，比如付费广告、SEO 和内容、记账、招聘和客服。",
        "两种用法：私下把它当行政助理，通过 iMessage、邮件或 Slack 私信使用；也可以当作团队共享的队友，团队成员在 Slack 里 @它，让它调研、写报告或更新 CRM。",
        "它会学习：40 多个内置技能加上你自己的技能、一份可编辑的记忆，以及 Watch and Learn：你演示一次任务，它就学会。",
        "它以例行任务重复工作：每个例行任务有一个触发条件（时间计划或事件）、一条提示词和一个输出目的地。内置的例行任务涵盖每日简报、起草和标记邮件、未回复时再次跟进，以及会议录制、准备和安排。",
        "它按任务挑选模型，你也可以自己选模型。",
        "它是托管服务：Lindy 运行在云端，由 Crivello Corp（以 Lindy 名义经营）开发。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Lindy 价格：额度和席位",
      text: [
        "来自 2026 年 11 月 13 日的 lindy.ai/pricing。页面没有显示按年计费。工作区里每位活跃用户都会被计费，包括只在 Slack 里 @Lindy 的人，每月额度不会结转。",
      ],
      headers: ["选项", "价格", "包含内容"],
      rows: [
        ["免费起步", "$0，无需信用卡", "$50 额度，7 天有效；每位团队成员只有一次免费周"],
        ["按活跃用户", "$29.99/月起", "每位活跃用户 3,000 额度，在团队内共享"],
        ["更大的额度档位", "最高 $9,999.50/月", "最多 1,750,000 额度"],
        ["充值", "每 1,000 额度 $10", "额度池用完后，消耗额度的操作会暂停，直到下个周期或充值"],
        ["Enterprise", "定制", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Lindy",
      steps: [
        { title: "用免费额度开始", text: "免费起步提供 $50 额度，7 天有效，无需信用卡。" },
        {
          title: "选择在哪里和它对话",
          text: "Slack、邮件、iMessage 和短信、电话、Gmail 里的 Chrome 扩展，或 Lindy 的网页 Home 页面，上面显示 Lindy 一直在做什么。Microsoft Teams 标注为即将推出。",
        },
        {
          title: "连接你的工具",
          text: "Gmail、Google 日历、Google Meet、Zoom 和 Microsoft Teams 上的会议录制、MCP 服务器，以及保存的 API 凭据。",
        },
        { title: "教它你的工作方式", text: "使用内置技能，添加你自己的技能，编辑它的记忆，或者用 Watch and Learn 给它演示一次任务。" },
        {
          title: "设置例行任务",
          text: "给每个例行任务设定触发条件、提示词和输出目的地，或者从内置的开始，比如每日简报。工作区例行任务通过 Slack 运行，只有管理员能设置。",
        },
      ],
      source: { label: "来源：Lindy 文档", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Lindy 怎么让你保持掌控",
      points: [
        "任何会对外产生影响的操作都要等你批准，比如发邮件、更新工单、在其他频道发帖或发布文档。",
        "从已批准的来源做只读查询不需要审批。",
        "管理员可以给每个席位设置额度上限，只有管理员能设置工作区例行任务。",
        "额度池用完后，Lindy 会暂停消耗额度的操作，直到下个周期或充值。",
        "它的记忆可以编辑。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI 和 Grok Bot",
      text: [
        "信息来自各厂商自己的网站、价格页和文档，于 2026 年 11 月 13 日核对。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)；另见 [Grok Bot 指南](/personal-agent/grok-bot)。",
        "并排对比：[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。指南：[Grok Bot](/personal-agent/grok-bot)。",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["出品方", "Crivello Corp（Lindy）", "OnSearch Pty Ltd（Relevance AI）", "xAI"],
        ["是什么", "每个工作区一个托管助手：行政助理兼 Slack 队友", "用来构建 agent 和多 agent Workforce 的低代码/无代码平台", "托管的 AI 队友：每个 Bot 有自己的云端计算机"],
        ["多个 agent", "未说明；文档描述的是每个工作区一个 Lindy", "有：在可视化画布上连接的 agent", "有：Bot 之间互相发消息，并在群聊中协调"],
        ["在哪里用", "Slack、邮件、iMessage 和短信、电话、Chrome 扩展、网页", "网页应用", "macOS 和 iOS 应用、Slack、Microsoft Teams、通话"],
        ["周期性工作", "按时间计划或事件运行的例行任务", "定时任务和应用触发器", "按计划运行的例行任务"],
        ["审批", "任何对外产生影响的操作都要等审批", "审批工作流，以及通过邮件和 Slack 升级处理", "需要审批时 Bot 会来确认；Auto Review"],
        ["价格", "7 天内 $50 免费额度；每位活跃用户 $29.99/月起", "Enterprise 套餐，需联系销售", "每月 Premium $30、Super $100 或 Ultra $200"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "收件箱交给 Lindy，代码仓库交给 Crewmark。",
      text: [
        "Lindy 在你的收件箱、日历、会议和 Slack 之间工作。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue，让代码仓库里的工程、SEO 和营销工作按计划完成。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Lindy" },
  mid: {
    title: "想给你的代码库配一名 AI 员工？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Lindy AI 常见问题",
    items: [
      {
        q: "Lindy AI 是什么？",
        a: "一个在你连接的工具里工作的托管 AI 助手。它对每位用户来说是私人行政助理，在 Slack 里是团队共享的队友，处理收件箱、日历、会议、调研、报告和跟进，并把周期性工作作为例行任务运行。",
      },
      {
        q: "Lindy 多少钱？",
        a: "你可以先用 $50 额度开始，7 天有效，无需信用卡。之后工作区里每位活跃用户都会被计费，每人每月 $29.99 起，含 3,000 额度，在团队内共享。充值每 1,000 额度 $10，Enterprise 价格定制。",
      },
      {
        q: "Lindy 是一个 agent 还是多个？",
        a: "一个。文档描述的是每个工作区一个 Lindy，例行任务也不是单独的 bot。它面向多种岗位推广，通过内置和自定义技能、记忆和 Watch and Learn 学习，但没有说明有单独的 agent 人设。",
      },
      {
        q: "有 Lindy 应用吗？",
        a: "你可以通过它的网页 Home 页面、Slack、邮件、iMessage 和短信、电话以及 Gmail 里的 Chrome 扩展使用 Lindy。文档没有提到桌面或移动应用；Microsoft Teams 标注为即将推出。",
      },
      {
        q: "怎么注册 Lindy？",
        a: "先用免费的 $50 额度开始，无需信用卡，7 天有效，每位团队成员只有一次。之后每位活跃用户都要占一个付费席位：从 Slack 加入的团队成员有 7 天免费试用，直接注册的人会立即计费。",
      },
      {
        q: "Lindy 会不问就行动吗？",
        a: "对外产生影响的操作不会：发邮件、更新工单、在其他频道发帖或发布文档都要等你批准。从已批准的来源做只读查询不需要审批。",
      },
    ],
  },
  cta: {
    title: "收件箱交给助手，也给你的编程 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照 lindy.ai、Lindy 的价格页和 Lindy 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Lindy、Relevance AI 和 xAI 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
