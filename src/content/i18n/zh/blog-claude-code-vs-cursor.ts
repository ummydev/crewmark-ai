import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor 对比（2026）：价格与用量限制",
    description:
      "2026 年 11 月 Claude Code 与 Cursor 对比：Cursor 并入 SpaceX 后以 Grok 为主的新套餐、两者使用 Claude 模型的费用、agent、CLI、规则、MCP 和 hooks，以及该怎么选。",
  },
  breadcrumb: "Claude Code vs Cursor 对比",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "2026 年 Claude Code vs Cursor：有哪些变化，该选哪个",
    lead: "Claude Code 是 Anthropic 的编程 agent：用 Claude 订阅，在你的终端、IDE、桌面应用或浏览器里运行。Cursor 是一款 AI 代码编辑器，带有自家的 agent、CLI 和云端 agent。今年两者的对比发生了变化：Cursor 于 2026 年 8 月并入 SpaceX，套餐现在围绕 Grok 模型打造，在 Cursor 里使用 Claude 模型要按 API 标价另行计费。本文截至 2026 年 11 月 6 日，对比两者的价格、模型、限额和功能，并介绍怎么选，或者怎么两个一起用。",
    cta: "开始使用",
    secondary: "跳到对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 和 Cursor 一览",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["开发方", "Anthropic", "Cursor，2026 年 8 月起隶属 SpaceX"],
        ["是什么", "面向终端、IDE、桌面、网页和手机的编程 agent", "AI 代码编辑器，另有 CLI（`agent`）、云端 agent 和代码审查"],
        ["主要模型", "Claude Opus 5.5、Sonnet 5.5、Haiku 5.5、Fable 5.1", "Grok 4.5 至 4.7 和 Composer 2.5；Claude、GPT、Gemini 等按 API 标价计费"],
        ["最便宜的付费套餐", "Claude Pro，每月 $20", "Plus，每月 $8，仅限 Grok 模型"],
        ["Claude 模型的费用", "包含在 Claude 套餐的限额内", "按用量以 API 标价另行计费（Premium 及以上）"],
        ["项目指令", "`CLAUDE.md`、`.claude/rules/`；没有 CLAUDE.md 时会读取 AGENTS.md", "`.cursor/rules/*.mdc`、`AGENTS.md`、用户规则和团队规则"],
        ["平台", "macOS、Windows、Linux", "macOS、Windows、Linux"],
      ],
    },
    {
      kind: "table",
      title: "价格：Claude 套餐 vs Cursor 套餐",
      text: [
        "价格为每月美元价，以 claude.com/pricing 和 cursor.com/pricing 上的标价为准。Cursor 的套餐现在还包含 X 的功能（例如时间线广告更少），并与 Grok 共用一个每周刷新的 AI 用量池。",
      ],
      headers: ["Claude 套餐", "价格", "Cursor 套餐", "价格"],
      rows: [
        ["Free", "不含 Claude Code", "Free", "$0，agent 请求有限"],
        ["Pro", "$20（按年付费为 $17）", "Plus", "$8，仅限 Grok 模型"],
        ["Max", "$100", "Premium", "$30：Plus 的 4 倍用量、云端 agent、自动化、代码审查、按 API 价格使用第三方模型"],
        ["Ultra", "$200", "Super", "$100：Plus 的 15 倍用量"],
        ["Team", "每个席位 $25（Standard），$125（Premium）", "Ultra", "$200：Plus 的 50 倍用量"],
        ["Enterprise", "每个席位 $20，按年付费，另按 API 费率计算用量", "Teams、Enterprise", "每位用户 $30 起；Enterprise 价格定制"],
      ],
    },
    {
      kind: "table",
      title: "功能逐项对比",
      headers: ["功能", "Claude Code", "Cursor"],
      rows: [
        ["终端里的 agent", "`claude`，无头模式用 `-p`", "`agent` CLI，打印模式用 `-p`"],
        ["Plan 模式", "有（Shift+Tab、`/plan`）", "有（Shift+Tab、`/plan`）"],
        ["云端 agent", "网页版 Claude Code、云端会话", "在虚拟机中运行的云端 agent（Premium 及以上），可从网页、iOS、GitHub、Slack、Linear 或 API 启动"],
        ["并行工作", "`--worktree`、subagent、agent 视图", "`/worktree`、跨模型的 `/best-of-n`"],
        ["自动化", "`/loop`、桌面和云端定时任务", "由 cron、Git、Slack、Linear、webhook、Sentry、PagerDuty 触发的自动化（Premium 及以上）"],
        ["MCP", "有：`claude mcp add`、`.mcp.json`", "有：`.cursor/mcp.json`"],
        ["Hooks", "有，`settings.json` 中 30 多个事件", "有，`hooks.json` 中约 20 个事件；可加载 Claude Code hooks"],
        ["代码审查", "本地用 `/code-review`；Team 和 Enterprise 可用 `@claude review`", "Bugbot，支持 GitHub、GitLab、Bitbucket 和 Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 和 Cursor 之间做选择",
      text: [
        "没有哪一个全面领先，而公开的基准测试往往对发布方有利。请按会改变你日常工作的因素来选。",
      ],
      steps: [
        {
          title: "决定你想为哪些模型付费",
          text: "如果你每天都想用 Claude 模型，Claude 套餐在限额内就包含它们；在 Cursor 里，它们要在套餐之外按 API 标价另付。如果你用 Grok 和 Composer 就够了，Cursor 的 $8 和 $30 套餐比 Claude 的便宜。",
        },
        {
          title: "决定你想在哪里工作",
          text: "Cursor 首先是编辑器：行内编辑、Tab 补全和 agent 都在一个窗口里。Claude Code 首先是 agent：它可以在任何终端里工作，也能接入 VS Code、JetBrains、桌面应用、网页和 Slack。",
        },
        {
          title: "想清楚有多少工作要在你不在时运行",
          text: "两者都能在云端运行、按计划运行。Cursor 的云端 agent 和自动化需要 Premium 或更高套餐；Claude Code 的定时任务和云端会话包含在 Claude 套餐里。见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "让你的设置可以迁移",
          text: "把共享规则写在 AGENTS.md 里（两者都会读取），再从 CLAUDE.md 导入；Cursor 还能加载 Claude Code hooks。这样切换或混用的成本都很低。见 [CLAUDE.md 指南](/blog/claude-md)。",
        },
        {
          title: "或者两个都用",
          text: "Anthropic 的 VS Code 文档提供了 Cursor 的安装链接，所以 Claude Code 扩展可以在 Cursor 编辑器里运行，用的是你的 Claude 套餐。",
        },
      ],
      source: { label: "来源：Claude Code 文档和 Cursor 价格页", href: cursorPricing },
    },
    {
      kind: "text",
      title: "如果你在 Cursor 中使用 Claude Code 扩展",
      text: [
        "2026 年 10 月 29 日，Cursor 报告称，Anthropic.claude-code 扩展的恶意版本 2.1.312 和 2.1.313（并非由 Anthropic 构建）曾在 Cursor 的扩展市场上架约 11 小时，涉及 Windows 和 macOS。Cursor 已将其下架、重建了扩展市场，并公布了检查方法：如果你的 `authorized_keys` 里有一个标注为 `svc-telemetry` 的 SSH 密钥，说明这台机器已受影响。如果你当天安装或更新过该扩展，请按照 Cursor 的安全公告处理。",
      ],
    },
    {
      kind: "text",
      title: "那 Codex 呢？",
      text: [
        "OpenAI 的 Codex 是第三个常见选择，从免费版起的 ChatGPT 套餐都包含它，它也能在 Cursor 里运行。对比见 [Claude Code 和 Codex 对比](/blog/claude-code-vs-codex)；想同时运行多个 agent，见 [Claude Code 编排工具](/blog/claude-code-orchestration-tools)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "无论选哪个，都给它一份工作",
      text: [
        "编辑器和 agent 仍然在等你的下一个提示词。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，按心跳唤醒它，从看板上接手下一个 issue，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "选一个岗位和目标",
          text: "软件工程师、审查员、SEO 写手：每个岗位都有一个写成数字的目标。阅读[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接手下一个 issue。",
        },
        {
          title: "在看板上审查",
          text: "它边做边评论，需要你拍板时给你发消息。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 和 Cursor 之间做选择" },
  mid: {
    title: "选好 agent 了？现在让它不用等你也能干活。",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code 或 Codex。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code 和 Cursor 常见问题",
    items: [
      {
        q: "Claude Code 比 Cursor 更好吗？",
        a: "取决于你的工作方式。Claude Code 适合希望订阅里就包含 Claude 模型、想要一个能在任何终端或 IDE 中工作的 agent 的人。Cursor 适合想要一个带行内编辑的 AI 编辑器，并且能接受 Grok 模型、或愿意为其他模型付 API 价格的人。",
      },
      {
        q: "能在 Cursor 里用 Claude 模型吗？",
        a: "可以，Premium（$30）及以上套餐可用，但 Claude 等第三方模型要按用量以 API 标价另行计费。$8 的 Plus 套餐只提供 Grok 模型。",
      },
      {
        q: "Claude Code 和 Cursor 哪个更便宜？",
        a: "Cursor 的入门套餐更便宜（每月 $8 和 $30），但在 Cursor 里用 Claude 要额外付费。如果你主要用 Claude 模型，Claude Pro（$20）或 Max（$100）套餐通常比付 API 价格更划算。",
      },
      {
        q: "Cursor 现在属于 SpaceX 了吗？",
        a: "是的。Cursor 于 2026 年 8 月 14 日宣布已被 SpaceX 收购，完成了从 4 月开始的流程。它的套餐现在附带 X 的功能和 Grok 模型。",
      },
      {
        q: "能在 Cursor 里运行 Claude Code 吗？",
        a: "可以。Claude Code 扩展可以通过 Anthropic 的安装链接装进 Cursor，`claude` CLI 也能在 Cursor 的终端里运行。请使用官方扩展，并在 Cursor 发布 10 月 29 日的安全公告后检查它的版本。",
      },
      {
        q: "Claude Code 和 Cursor 能共用配置吗？",
        a: "部分可以。两者都读取 AGENTS.md，都支持 MCP（各有自己的配置文件），Cursor 还能加载 Claude Code hooks。除此之外，规则和设置文件是分开的。",
      },
      {
        q: "用量限制是怎样的？",
        a: "Claude 套餐采用 5 小时窗口加每周限额，并与 Claude 聊天共用。Cursor 套餐与 Grok 共用一个每周刷新的额度池，大小按 Plus 套餐的倍数计算，超出后可以加购，或按 API 计费。",
      },
    ],
  },
  cta: {
    title: "把你的编程 agent 变成会一直干下去的队友。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档、claude.com/pricing 和 cursor.com（价格页、文档、更新日志和博客）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、Cursor 或 SpaceX 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标；Cursor 是其所有者的商标。",
};
