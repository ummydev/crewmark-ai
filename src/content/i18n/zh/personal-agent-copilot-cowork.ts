import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork：费用、Credits、许可证及对比 Claude Cowork",
    description:
      "Microsoft Copilot Cowork 详解：这个 Microsoft 365 agent 能做什么、Copilot Credits 费用、许可证、技能、设置，以及 Copilot Cowork 和 Claude Cowork 的对比。",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · Microsoft",
    title: "Copilot Cowork：Microsoft 面向 Microsoft 365 的 agent 能做什么、怎么计费",
    lead: "Copilot Cowork 是 Microsoft 365 Copilot 里的一个 agent，能跨 Microsoft 365 完成多步骤任务。它会发邮件、安排会议、创建和编辑 Word、Excel、PowerPoint 和 PDF 文件、在 Teams 里发消息、管理 OneDrive 和 SharePoint 文件、在你的组织内搜索并做深度调研，执行敏感操作前会先请你审批。它于 2026 年 6 月面向工作和学校账户正式推出。本文讲它能做什么、许可证和 Copilot Credits 怎么算、怎么设置、审批怎么运作，以及它和 Claude Cowork、Claude Code、Codex 的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Copilot Cowork 是什么、用来做什么",
      text: [
        "Microsoft 把 Cowork 描述为一个代你跨 Microsoft 365 执行多步骤任务的 agent 系统。它的预期用途包括：在一次对话里调研一个主题、写成文档并发邮件给相关人员；周期性的简报和报告；以及对收到的邮件或 Teams 消息做出响应的任务。",
      ],
      points: [
        "它在 Microsoft 的云端、一个隔离环境中运行。文件在 OneDrive 和 SharePoint 中创建和读取；它无法访问你本地设备上的文件。",
        "它能使用你的浏览器：在网页版 Cowork 上，浏览器任务在你自己设备上一个隐藏的 Microsoft Edge 标签页中运行，使用你现有的登录状态。",
        "它使用多家公司的模型：模型选择器默认设为 Auto，根据租户设置提供 GPT、Claude 和 Grok 模型。位于欧盟数据边界（EU Data Boundary）内的租户只能用 GPT 模型。",
        "技能和插件：你可以在 OneDrive 中以 `SKILL.md` 文件的形式添加最多 50 个自定义技能。面向岗位和行业的插件包括 Cowork 的 Accounting、Finance 和 Capital Markets；其他插件和连接器覆盖 Dynamics 365、Jira、Salesforce、ServiceNow、SAP ERP、Workday HCM、Zendesk 和 MCP 应用。",
        "它可以重复执行：每位用户最多 25 个用自然语言写的定时提示词，另有事件驱动的任务，在收到匹配的邮件或有人发了 Teams 消息时运行。",
        "它跟踪任务：Tasks 视图可按 In progress、Needs input、Done 和 Failed 筛选，Automations 页面列出定时和事件驱动的任务，Projects（2026 年 10 月）把相关的任务、指令和文件放在一起。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork 费用、Credits 和许可证",
      text: [
        "信息来自 Microsoft Learn、Microsoft 支持和 Microsoft 的 Copilot Credits 指南（2026 年 11 月），于 2026 年 11 月 13 日核对，以美元计。Cowork 在 Microsoft 365 Copilot 许可证之外按用量以 Copilot Credits 计费。一项任务没有固定的 Credits 消耗：它随模型、运行时长、上下文和所用工具而变化。",
      ],
      headers: ["项目", "费用或要求"],
      rows: [
        ["Microsoft 365 Copilot 许可证", "工作或学校账户必需，并需分配给该用户；Cowork 文档没有写明它的价格"],
        ["Copilot Credits，按量付费", "每个 Copilot Credit $0.01，每月事后结算"],
        ["Copilot Credit 预购计划（P3）", "预先付款的一年期额度池，折扣从 5%（300,000 个 Credits）到 20%（300,000,000 个 Credits）；未用完的 Credits 在期满时作废"],
        ["管理员设置", "开启 Cowork、开启按用量计费，并设置一个选中 Cowork 的支出策略；管理员可以按用户或按组设置 Credits 上限"],
        ["个人 Microsoft 账户", "预览阶段；需要符合条件的 Microsoft 365 订阅，价格未写明"],
        ["教育", "教职员工可以使用；学生不符合条件"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Copilot Cowork",
      steps: [
        {
          title: "获取许可证",
          text: "工作或学校账户需要一个分配给你的 Microsoft 365 Copilot 许可证。个人账户处于预览阶段，需要符合条件的 Microsoft 365 订阅。",
        },
        {
          title: "请管理员开启",
          text: "管理员开启 Cowork、开启按用量计费，并通过选中 Cowork 的支出策略给你访问权限。使用浏览器还需要开启 Cowork Browsing。",
        },
        {
          title: "在你工作的地方打开 Cowork",
          text: "网页端（推荐 Edge 或 Chrome）、Windows 和 macOS 版 Microsoft Copilot 桌面应用、iOS 和 Android 移动应用，或在 Outlook 和 Teams 里。",
        },
        {
          title: "描述任务",
          text: "比如调研一个主题、写成文档并发邮件给需要的人。模型保持 Auto 或自己选一个；推理强度默认为 Medium。",
        },
        {
          title: "添加技能和自动化",
          text: "把自定义技能以 `SKILL.md` 文件放进 OneDrive，用自然语言写定时提示词，或者设置一个在收到匹配的邮件或 Teams 消息时运行的任务。",
        },
      ],
      source: { label: "来源：Microsoft Learn《Copilot Cowork get started》", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Copilot Cowork 怎么让你保持掌控",
      points: [
        "在发邮件、在 Teams 里发消息或安排会议等敏感操作前，Cowork 会弹出带预览的审批对话框。中高风险的操作会标出风险等级。",
        "你可以批准一次；可以在本次对话剩余时间里跳过同类操作的提示（邮件和 Teams 可限定到某个收件人、某个域名或始终跳过）；也可以取消。",
        "事件驱动的任务默认先起草、等你审批，你可以暂停、恢复或取消任何任务。",
        "它不能删除 OneDrive 或 SharePoint 中的文件或文件夹；遇到 CAPTCHA、密码、MFA 验证码和账户更改时，它会把浏览器交还给你。",
        "管理员通过支出策略控制访问，按用户或按组设置 Credits 上限，还可以关闭某些模型系列，包括 Anthropic 的。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork、Claude Code 和 Codex",
      text: [
        "信息来自各厂商自己的文档和价格页，于 2026 年 11 月 13 日核对。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)；另见 [Claude Cowork 指南](/personal-agent/claude-cowork)和 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        "并排对比：[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio)。指南：[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["出品方", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["面向", "跨 Microsoft 365 的多步骤任务", "编程以外的知识工作", "编程：读取代码库、编辑文件、运行命令", "编程：在代码仓库中检查、编辑和运行代码"],
        ["运行在", "Microsoft 的云端，配合 OneDrive 和 SharePoint；不能访问本地文件", "Anthropic 的云端；通过 Claude Desktop 访问本地文件", "你机器上的终端、IDE 和桌面应用；网页上有云端会话", "CLI、IDE 扩展和 ChatGPT 桌面应用；Codex Cloud"],
        ["模型", "GPT、Claude 和 Grok 模型，视租户设置而定", "Claude 模型", "Claude 模型", "OpenAI 模型"],
        ["怎么付费", "Microsoft 365 Copilot 许可证加 Copilot Credits", "Claude 付费套餐，Pro $20/月起", "Claude 付费套餐，Pro $20/月起；或 API 额度", "ChatGPT 套餐，比如 Plus $20/月；或 OpenAI API key"],
        ["重复性工作", "定时提示词；邮件、Teams 和连接器事件", "定时任务，每小时到每周，在云端", "云端和桌面定时任务、`/loop`", "定时任务；Gmail、Slack 和 GitHub 事件"],
        ["审批", "敏感操作前弹出带预览的审批对话框", "Manual、Auto 或 Skip 模式", "从 `default` 到 `bypassPermissions` 的权限模式", "Ask for approval、Approve for me 或完全访问"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Microsoft 365 交给 Cowork，代码仓库交给 Crewmark。",
      text: [
        "Copilot Cowork 在 Outlook、Teams、OneDrive 和 SharePoint 之间执行任务。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue，让代码仓库里的工程、SEO 和营销工作按计划持续推进。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Copilot Cowork" },
  mid: {
    title: "想给你的代码库配一个 AI 同事？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Copilot Cowork 常见问题",
    items: [
      {
        q: "Copilot Cowork 是什么？",
        a: "Microsoft 365 Copilot 里的一个 agent，能跨 Microsoft 365 完成多步骤任务：发邮件、安排会议、创建和编辑 Word、Excel、PowerPoint 和 PDF 文件、在 Teams 里发消息、管理 OneDrive 和 SharePoint 文件、在组织内搜索并做深度调研。执行敏感操作前它会先请你审批。",
      },
      {
        q: "Copilot Cowork 多少钱？",
        a: "在 Microsoft 365 Copilot 许可证之外，用量以 Copilot Credits 计费。按量付费每个 Credit $0.01，每月事后结算；一年期预购计划有 5% 到 20% 的折扣。每项任务消耗的 Credits 随模型、运行时长、上下文和所用工具而变化。",
      },
      {
        q: "Copilot Cowork 需要什么许可证？",
        a: "工作或学校账户需要：一个分配给你的 Microsoft 365 Copilot 许可证、已开启的 Cowork，以及由管理员开启的按用量计费，并有一个选中 Cowork 的支出策略。个人 Microsoft 账户处于预览阶段，需要符合条件的 Microsoft 365 订阅。在教育机构中，教职员工可以使用，学生不能。",
      },
      {
        q: "怎么登录 Copilot Cowork？",
        a: "用有访问权限的账户登录：工作或学校账户（已正式推出）或个人 Microsoft 账户（预览）。Cowork 可在网页端、Windows 和 macOS 版 Microsoft Copilot 桌面应用、iOS 和 Android 移动应用，以及 Outlook 和 Teams 里使用。",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot：有什么区别？",
        a: "Copilot Cowork 是 Microsoft 365 Copilot 里的一个 agent。使用它需要 Microsoft 365 Copilot 许可证加按用量计费，因为 Cowork 的用量在许可证之外以 Copilot Credits 计费。",
      },
      {
        q: "Copilot Cowork vs Claude Cowork：有什么区别？",
        a: "Copilot Cowork 跨 Microsoft 365 工作，文件放在 OneDrive 和 SharePoint 里，无法访问本地文件，在许可证之外按 Copilot Credits 计费。Claude Cowork 是 Anthropic 在 Claude 应用里的 agent，包含在 Pro（每月 $20）起的 Claude 付费套餐中，并通过 Claude Desktop 访问本地文件。视租户设置而定，Copilot Cowork 的模型选择器里也可以有 Claude 模型。",
      },
    ],
  },
  cta: {
    title: "Microsoft 365 的任务交给 Cowork，也给你的编程 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 Microsoft Learn 的 Copilot Cowork 文档、Microsoft 的 Copilot Credits 指南和 Microsoft 支持核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Microsoft、Anthropic 和 OpenAI 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
