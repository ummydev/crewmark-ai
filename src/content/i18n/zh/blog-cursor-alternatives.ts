import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 Cursor 替代品：10 款免费、开源和更便宜的选择 | Crewmark",
    description:
      "Cursor 并入 SpaceX 后改为以 Grok 为主的套餐。对比 10 款 Cursor 替代品：Claude Code、Codex、GitHub Copilot、Devin Desktop（Windsurf）、Zed、Cline、Kilo Code、OpenCode、Antigravity 和 Junie，附价格与免费方案。",
  },
  breadcrumb: "Cursor 替代品",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · AI 编程工具",
    title: "2026 年最好的 Cursor 替代品",
    lead: "Cursor 于 2026 年 8 月并入 SpaceX，套餐现在围绕 Grok 打造：$8 的 Plus 套餐只提供 Grok 模型，而从 $30 的套餐起，Claude、GPT 或 Gemini 要按 API 标价另行计费。如果这不是你当初订阅时想要的，还有不少好选择：你现有订阅里就包含的 agent、自带 AI 的编辑器，以及用自己的 API key 就能用的开源工具。本文截至 2026 年 11 月 6 日，从定位、免费方案、价格和模型四个方面对比其中 10 款。",
    cta: "申请抢先体验",
    secondary: "跳到对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Cursor 替代品对比",
      text: [
        "入门价格是各厂商页面上列出的最便宜的个人付费套餐，单位为每月美元。“Claude 模型”指能否在其中使用 Anthropic 的模型，无论是套餐包含还是用你自己的 key。",
      ],
      headers: ["工具", "类型", "免费方案", "付费起价", "Claude 模型", "开源"],
      rows: [
        ["Claude Code", "Agent：终端、IDE、桌面、网页", "无", "$20（Claude Pro）", "包含", "否"],
        ["OpenAI Codex", "Agent：CLI、IDE、桌面、云端", "有，ChatGPT Free", "$8（ChatGPT Go）", "否", "CLI 采用 Apache-2.0"],
        ["GitHub Copilot", "适用于大多数 IDE 的扩展、CLI", "有，每月 2,000 次补全", "$10（Pro）", "支持；Opus 需 Pro+（$39）及以上", "否"],
        ["Devin Desktop（原 Windsurf）", "IDE", "有", "$20（Pro）", "支持", "否"],
        ["Zed", "原生编辑器", "有，用你自己的 key", "$10（Pro）", "用你自己的 key 或外部 agent", "是"],
        ["Cline", "VS Code 扩展和 CLI", "免费；按模型用量付费", "无个人套餐", "用你自己的 key", "Apache-2.0"],
        ["Kilo Code", "VS Code 和 JetBrains 扩展、CLI", "有", "$19（Kilo Pass Starter）", "通过网关或你自己的 key", "MIT"],
        ["OpenCode", "终端 agent、桌面、IDE", "有", "未列出", "用你自己的 key；可用 Copilot 或 ChatGPT 账号登录", "MIT"],
        ["Google Antigravity", "Agent 式 IDE、CLI", "有", "Business 每个席位 $30 起", "付费套餐支持", "否"],
        ["JetBrains Junie", "JetBrains IDE 中的 agent、CLI", "有，Junie Lite", "AI Pro，标价 $8.33", "支持，也可用你自己的 key", "否"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何选择 Cursor 替代品",
      steps: [
        {
          title: "从你已经在付费的订阅开始",
          text: "Claude Pro 或 Max 包含 Claude Code；所有 ChatGPT 套餐都包含 Codex；很多公司已经买了 GitHub Copilot。用你已经付费的工具，通常比买一个新工具再加 API 账单更便宜。",
        },
        {
          title: "决定要编辑器还是 agent",
          text: "如果你想要 Cursor 那样的手感（带行内编辑和 Tab 补全的编辑器），可以看看 Devin Desktop、Zed、VS Code 里的 Copilot 或 Antigravity。如果你主要是把任务交给 agent，Claude Code、Codex 和 OpenCode 可以在任何终端和编辑器里工作。",
        },
        {
          title: "如果你想要免费或开源",
          text: "Cline、Kilo Code、OpenCode 和 Zed 都是开源的，用你自己的 API key 即可免费使用；你只需按实际用量向模型提供商付费。",
        },
        {
          title: "弄清楚模型从哪里来",
          text: "如果你每天都要用 Claude，选一个套餐里就包含它的工具（Claude Code、Copilot、Devin Desktop、Junie），可以避免按 token 计费带来的意外账单。自带 key 的工具能用任何模型，按标价计费。",
        },
        {
          title: "把你的规则一起带走",
          text: "这些工具很多都会读取 AGENTS.md，所以迁出 `.cursor/rules` 基本就是把规则复制到一个文件里。想用一个文件服务多个 agent，见 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "来源：GitHub Copilot 套餐页和各厂商官网", href: copilot },
    },
    {
      kind: "text",
      title: "各个替代品简介",
      points: [
        "Claude Code：Anthropic 的 agent，包含在 Claude Pro（$20，按年付费为 $17）、Max（$100）和 Ultra（$200）中；也可以用 API key 运行。与 Cursor 的对比见 [Claude Code vs Cursor 对比](/blog/claude-code-vs-cursor)。",
        "OpenAI Codex：每个 ChatGPT 套餐都包含它，从 Free（GPT-6 Luna）、Go（$8）到 Plus（$20）和 Pro（$100 起）。见 [Claude Code 和 Codex 对比](/blog/claude-code-vs-codex)。",
        "GitHub Copilot：Free、Pro（$10）、Pro+（$39）和 Max（$100）；可在 VS Code、Visual Studio、JetBrains、Xcode、Neovim、Eclipse 和 Zed 中使用，支持 Claude、GPT、Gemini 等模型。",
        "Devin Desktop：Windsurf 的新名字，出自 Cognition；windsurf.com 现在会跳转到它。有 Free、Pro（$20）和 Max（$200）。",
        "Zed：适用于 macOS、Windows 和 Linux 的高速原生编辑器；用你自己的 key 或 Claude Code、Codex 等外部 agent 可免费使用，托管模型需 $10 的 Pro。",
        "Cline：开源的 VS Code 扩展和 CLI；免费，用你自己的 key，只需支付推理费用。",
        "Kilo Code：开源（MIT），现归 Anaconda 所有；用你自己的 key 或免费模型可免费使用，Kilo Pass $19 起。",
        "OpenCode：开源的终端 agent，支持 75 家以上的模型提供商；免费，还能用现有的 Copilot 或 ChatGPT 订阅登录。",
        "Google Antigravity：Google 的 agent 式 IDE 和 CLI，个人免费使用；付费套餐增加 Gemini 4 Argon 和 Claude 模型。",
        "JetBrains Junie：JetBrains 的编程 agent，可在其 IDE 中使用，也有 CLI，提供免费的 Lite 版以及 AI Pro 和 Ultimate 套餐。",
        "未收录：Roo Code（GitHub 仓库已归档）、Gemini CLI（个人使用已于 2026 年 6 月迁移到 Antigravity CLI）和 Aider（自 2025 年 8 月以来没有新版本）。",
      ],
    },
    {
      kind: "text",
      title: "Cursor 发生了什么变化",
      text: [
        "Cursor 于 2026 年 8 月 14 日宣布 SpaceX 已完成对其的收购。它的价格页现在列出 Free、Plus（$8，仅限 Grok 模型）、Premium（$30，含云端 agent、自动化、代码审查，第三方模型按用量以 API 标价计费）、Super（$100）和 Ultra（$200），另附 X 的功能（例如时间线广告更少）。用量是与 Grok 共用、每周刷新的一个池子。如果你继续用 Cursor，仍然可以在里面用你的 Claude 套餐运行 Claude Code 扩展或 CLI。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "换了工具？给新工具一份工作。",
      text: [
        "无论你换到哪个 agent，它都在等你的下一个提示词。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，按心跳唤醒它，从看板上接手下一个 issue，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "选一个岗位和目标",
          text: "软件工程师、审查员、SEO 写手：每名员工都有一个写成数字的目标。阅读[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟醒来一次，接手下一个 issue；见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "同时运行多名员工",
          text: "给每名员工独立的 worktree 和岗位；见 [Claude Code 编排工具](/blog/claude-code-orchestration-tools)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "选择 Cursor 替代品" },
  mid: {
    title: "要从 Cursor 换到 Claude Code、Codex 或 OpenCode？",
    text: "Crewmark 把它们变成 AI 员工，按心跳醒来，自己接下一个 issue。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Cursor 替代品常见问题",
    items: [
      {
        q: "最好的 Cursor 替代品是什么？",
        a: "有 Claude 套餐就用 Claude Code；有 ChatGPT 就用 Codex；想要手感像 Cursor 的编辑器，选 Devin Desktop（原 Windsurf）或 VS Code 里的 Copilot；想要免费开源，就用自己的 key 搭配 Cline、Kilo Code、OpenCode 或 Zed。",
      },
      {
        q: "有免费的 Cursor 替代品吗？",
        a: "有。Cline、Kilo Code、OpenCode 和 Zed 用你自己的 API key 即可免费使用，Copilot 有每月 2,000 次补全的免费版，Codex 可在 ChatGPT Free 上使用，Antigravity 和 Devin Desktop 也有免费套餐。",
      },
      {
        q: "有哪些开源的 Cursor 替代品？",
        a: "Cline（Apache-2.0）、Kilo Code（MIT）、OpenCode（MIT）和 Zed 都是开源的；Codex CLI 也是开源的（Apache-2.0）。",
      },
      {
        q: "Cursor 为什么改了价格？",
        a: "SpaceX 收购 Cursor（2026 年 8 月 14 日宣布）后，它的套餐转向 Grok 模型和捆绑 X 的产品线：$8 的 Plus 只能用 Grok，从 Premium（$30）起，Claude 等第三方模型要按 API 标价另行计费。",
      },
      {
        q: "Windsurf 怎么了？",
        a: "Windsurf 现在改名为 Devin Desktop，由 Cognition 开发；windsurf.com 会跳转到 devin.ai/desktop。",
      },
      {
        q: "哪个 Cursor 替代品最便宜？",
        a: "自带 key 的工具（Cline、OpenCode、Kilo Code、Zed）除了模型用量不花钱。在套餐里，Codex 随 ChatGPT Go 从 $8 起，Copilot Pro 是 $10；如果想要包含 Claude，Claude Pro 是 $20。",
      },
      {
        q: "我的 Cursor 规则能保留吗？",
        a: "大部分可以。把它们放进 AGENTS.md，Codex、Copilot、OpenCode 等都会读取；Claude Code 通过在 CLAUDE.md 里写 `@AGENTS.md` 导入来读取它。",
      },
    ],
  },
  cta: {
    title: "换了编程 agent，订阅不变，现在还多了一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照 cursor.com 以及各替代品的官网、价格页或 GitHub 仓库查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Cursor、SpaceX 或文中列出的任何厂商无关，也未获其背书。产品名称是其所有者的商标。",
};
