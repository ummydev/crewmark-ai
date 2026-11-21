import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work 模式是什么：价格、下载及对比 Codex",
    description:
      "ChatGPT Work 详解：Work 模式和 Chat 有什么不同、哪些套餐包含它、各多少钱、桌面应用，以及 Work 和 Codex、Claude Cowork 的对比。",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · OpenAI",
    title: "ChatGPT Work：OpenAI 的 Work 模式能做什么、怎么用",
    lead: "ChatGPT Work 是 ChatGPT 里的一种模式，用来交出有明确结果的任务。你从 Chat 切换到 Work，描述想要的结果，ChatGPT 会规划任务，使用你的文件、插件、网页、浏览器和代码，交回待你审阅的成果，比如一套演示文稿、一张电子表格、一份文档或一份分析。它和 OpenAI 的编程 agent Codex 共享核心能力和用量上限。本文讲它能做什么、哪些套餐包含它、怎么设置、行动前怎么征求你的同意，以及它和 Codex、Claude Cowork、Copilot Cowork 的对比。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT Work 是什么",
      points: [
        "是一种模式，不是单独的应用：在 ChatGPT 里从 Chat 切换到 Work。OpenAI 的建议是：要答案用 Chat，要完成任务用 Work。",
        "交回可审阅的成果：演示文稿、电子表格、文档、分析和周期性的更新，依据你的文件、插件、网页、浏览器和代码完成。",
        "在云端运行：在网页上，任务在 OpenAI 基础设施上的托管云环境中运行，关掉应用后仍会继续。在桌面应用里，如果已开启，你也可以选择在本地使用你的文件、应用和浏览器工作。",
        "和 Codex 共享核心：OpenAI 把 Work 描述为同样的核心能力，加上为日常工作设计的体验。它省去了 Git 和 shell 输出、pull request 面板这类技术细节。",
        "拆分工作：ChatGPT 可以把任务中相互独立的部分交给 subagent，你可以跟进它们的进度。",
        "可以重复执行：定时任务；在网页端和移动端，还有由 Gmail、Slack 或 GitHub 事件触发的任务。",
        "OpenAI 在 2026 年 7 月 6 日至 10 日那一周的 What's new 汇总中推出了它。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work 价格：哪些套餐包含它",
      text: [
        "价格来自 2026 年 11 月 13 日 OpenAI 的价格文档，以美元计。Work 和 Codex 使用相同的价格、额度和用量上限，更长或更复杂的任务可能消耗更多额度。",
      ],
      headers: ["套餐", "价格", "ChatGPT Work"],
      rows: [
        ["Free", "$0/月", "有限使用，仅限桌面应用；没有定时任务"],
        ["Go", "$8/月", "有限使用，仅限桌面应用；有定时任务"],
        ["Plus", "$20/月", "桌面端、网页端和移动端；可额外购买额度"],
        ["Pro", "$100/月起（$100、$200 或 $500 三档）", "桌面端、网页端和移动端；可额外购买额度"],
        ["Business（2 人及以上）", "按年付每用户 $20/月，按月付 $25", "采用额度制协议时，使用工作区共享额度"],
        ["Enterprise 和 Edu", "联系销售", "工作区共享额度；管理员控制 Work、插件和浏览器使用的权限"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 ChatGPT Work",
      steps: [
        {
          title: "选择在哪里用",
          text: "Work 可在网页端、macOS、Windows 和 Linux 版 ChatGPT 桌面应用，以及 iOS 和 Android 版 ChatGPT 上运行。Free 和 Go 用户要下载桌面应用：这两个套餐只能在桌面应用里用 Work。",
        },
        { title: "从 Chat 切换到 Work", text: "在 Work 模式下开始一个任务，描述你想要的结果，比如一份简报、一套演示文稿、一份分析或一张电子表格。" },
        {
          title: "给它资料来源",
          text: "上传文件或使用项目，并连接插件，比如 Slack、Google Drive、SharePoint、邮件、日历、CRM 和项目跟踪工具。在桌面应用里，它还能使用本地文件、浏览器扩展，以及 macOS 和 Windows 上的 Computer Use（限支持的地区）。",
        },
        {
          title: "选模型和询问方式",
          text: "指南建议：要求高的工作用 GPT-6 Astra，复杂但想省成本的工作用 GPT-6.1 Sol，简单任务用 Luna。在桌面应用里，先从 Ask for approval 权限模式开始。",
        },
        {
          title: "让它重复执行",
          text: "在网页端或桌面应用里从 Chat 或 Work 创建定时任务；或者在网页端和移动端，由 Gmail、Slack 或 GitHub 事件触发任务。一个任务不能同时使用事件触发和时间计划。",
        },
      ],
      source: { label: "来源：OpenAI 文档《Get started with Work》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "ChatGPT Work 怎么让你保持掌控",
      points: [
        "ChatGPT 会显示进度，在需要信息或需要你批准重要操作时暂停；你可以在任务中途回答问题或改变方向。",
        "在桌面应用里，权限模式有 Ask for approval（推荐的起点）、Approve for me（符合条件的请求交给自动审查），以及在可用时的完全访问。沙盒设定文件和网络的限制。",
        "默认情况下，云端浏览器在访问新网站前会先问你（Always ask、Auto approve 或 Always allow），在有后果的操作前也可以再次询问。",
        "云端任务不会继承你电脑上的文件、应用、浏览器会话或网络访问权限，云端浏览器也无法使用你本地的标签页、扩展、历史记录或保存的密码。",
        "工作区管理员控制 Work、插件、浏览器使用和网络访问的权限。在 Enterprise 和 Edu 工作区，插件默认关闭，云端浏览器需要管理员开启。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex、Claude Cowork 和 Copilot Cowork",
      text: [
        "信息来自各厂商自己的文档和价格页，于 2026 年 11 月 13 日核对。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)。编程工作见 [Claude Code vs Codex](/blog/claude-code-vs-codex) 和 [Codex 使用场景](/use-cases/codex)；Anthropic 的 agent 见 [Claude Cowork 指南](/personal-agent/claude-cowork)。",
        "并排对比：[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)。指南：[Claude Cowork](/personal-agent/claude-cowork)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["出品方", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["面向", "产出可审阅成果的任务：演示文稿、电子表格、文档、分析", "编程：在代码仓库中检查、编辑和运行代码", "编程以外的知识工作", "跨 Microsoft 365 的多步骤任务"],
        ["运行在", "OpenAI 的云端；开启后可在桌面应用中本地运行", "CLI、IDE 扩展和 ChatGPT 桌面应用；Codex Cloud", "Anthropic 的云端；通过 Claude Desktop 访问本地文件", "Microsoft 的云端，配合 OneDrive 和 SharePoint"],
        ["谁能用", "ChatGPT 各套餐；Free 和 Go 有限使用", "ChatGPT 各套餐，或 OpenAI API key（没有云端功能）", "Claude 付费套餐，Pro $20/月起", "Microsoft 365 Copilot 许可证加 Copilot Credits"],
        ["用量", "与 Codex 共享价格、额度和上限", "与 Work 共享价格、额度和上限", "消耗套餐额度比聊天更快", "按使用以 Copilot Credits 计费"],
        ["重复性工作", "定时任务；Gmail、Slack 和 GitHub 事件", "ChatGPT 应用和网页端的定时任务", "定时任务，每小时到每周，在云端", "定时提示词；邮件、Teams 和连接器事件"],
        ["审批", "Ask for approval、Approve for me 或完全访问；沙盒", "Ask for approval、Approve for me 或完全访问；沙盒", "Manual、Auto 或 Skip 模式", "敏感操作前弹出带预览的审批对话框"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "文档交给 Work，代码库交给 Crewmark。",
      text: [
        "ChatGPT Work 接下一项任务，交回可供审阅的成果。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue，让代码仓库里的工程、SEO 和营销工作按计划完成。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，比如软件工程师或 SEO 专员。" },
        { title: "把工作放上看板", text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Codex 使用场景](/use-cases/codex)和 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 ChatGPT Work" },
  mid: {
    title: "想给你的代码库配一个 AI 同事？",
    text: "Crewmark 给你的 Codex 或 Claude Code 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "ChatGPT Work 常见问题",
    items: [
      {
        q: "ChatGPT Work 是什么？",
        a: "ChatGPT 里用来委派有明确结果的任务的一种模式。ChatGPT 会规划任务，使用你的文件、插件、网页、浏览器和代码，交回待你审阅的成果，比如演示文稿、电子表格、文档和分析。",
      },
      {
        q: "ChatGPT Work vs Chat：有什么区别？",
        a: "它们是同一个应用里的两种模式。OpenAI 建议要答案用 Chat，要完成任务用 Work：Work 会规划多步骤任务，关掉应用后在云端继续，遇到重要操作会暂停等你批准。",
      },
      {
        q: "ChatGPT Work 免费吗，还是需要 Plus？",
        a: "Free（$0）和 Go（每月 $8）只能在桌面应用里有限使用 Work。Plus（每月 $20）和 Pro（每月 $100 起）可在桌面端、网页端和移动端使用 Work，并可额外购买额度。Business 按年付每用户每月 $20；Enterprise 和 Edu 需联系销售。",
      },
      {
        q: "ChatGPT Work vs Codex：有什么区别？",
        a: "它们共享核心能力、执行方式、价格、额度和用量上限。Codex 是 OpenAI 的编程 agent，有 CLI、IDE 扩展和面向代码仓库的云端任务；Work 是面向日常工作的体验，不显示 Git 和 shell 输出或 pull request 面板这类细节。",
      },
      {
        q: "用 ChatGPT Work 需要下载应用吗？",
        a: "Plus 和 Pro 不需要：Work 也能在网页端和 iOS、Android 版 ChatGPT 上运行。Free 和 Go 只能在 ChatGPT 桌面应用里用，它支持 macOS、Windows 和 Linux。使用本地文件、浏览器扩展和 Computer Use 也需要桌面应用。",
      },
      {
        q: "学生能用 ChatGPT Work 吗？",
        a: "Free 和 Go 套餐可以在桌面应用里有限使用 Work。ChatGPT Edu 工作区用工作区共享额度使用 Work，由管理员控制 Work、插件和浏览器使用的权限；Edu 的价格需联系 OpenAI 销售团队。",
      },
    ],
  },
  cta: {
    title: "文档交给 Work，也给你的编程 agent 一份工作。",
    text: "Crewmark 把 Codex 和 Claude Code 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照 OpenAI 的 ChatGPT Work 和 Codex 文档及价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenAI、Anthropic 和 Microsoft 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
