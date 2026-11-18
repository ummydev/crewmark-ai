import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# 更新 Claude Code，然后为这个会话选模型
claude update
/model                       # 选 Claude Fable 5.2

# 或者直接用它启动会话
claude --model claude-fable-5-2

# Fable 5.2 的快速模式（Claude Code v2.1.321 及以上）
/fast`;

const api = `# Claude API：改模型 ID
model = "claude-fable-5-1"  # 之前
model = "claude-fable-5-2"  # 之后

# 自适应思考始终开启；用 effort 控制思考深度
# low | medium | high（默认）| xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2：跑分、价格，以及和 Opus 5.5 对比",
    description:
      "2026 年 11 月 9 日发布的 Claude Fable 5.2：有哪些新东西、Anthropic 公布的跑分、API 价格（$8/$40）和快速模式、100 万上下文、Fable 5.2 对比 Opus 5.5、Fable 5.1 和 Mythos 5.2，以及怎么在 Claude Code 里用。",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "博客 · Claude 模型",
    title: "Claude Fable 5.2：新功能、跑分、价格，以及和 Opus 5.5 怎么选",
    lead: "Anthropic 在 2026 年 11 月 9 日发布了 Claude Fable 5.2，同时发布的还有 Claude Mythos 5.2，两者是同一个模型、安全限制不同。Anthropic 称 Fable 5.2 是它面向技术工作、普遍可用的最强模型：比 Fable 5.1 更快、更便宜，在 Anthropic 的编程和 agent 跑分上更高，还新增了快速模式。本文讲改了什么、数字是多少、花多少钱、什么时候该选它而不是 Opus 5.5，以及怎么在 Claude Code 里用。",
    cta: "开始使用",
    secondary: "Fable 5.2 对比 Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 一览",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["发布", "2026 年 11 月 9 日（此前是 6 月的 Fable 5 和 9 月的 Fable 5.1）"],
        ["API 模型 ID", "`claude-fable-5-2`"],
        ["价格", "每百万输入 token $8，每百万输出 token $40（Fable 5.1 是 $10 和 $50）"],
        ["快速模式", "输出最快提升到 2.5 倍，每百万 token 输入 $16、输出 $80"],
        ["上下文窗口", "100 万 token，最大输出 128K"],
        ["思考", "自适应思考，始终开启；effort 有 `low`、`medium`、`high`（默认）、`xhigh`、`max`"],
        ["知识截止", "2026 年 6 月"],
        ["速度", "据 Anthropic，输出比 Fable 5.1 快最多 30%"],
        ["谁能用", "Claude Pro、Max、Ultra、Team 和 Enterprise；所有 Claude API 用户；Amazon Bedrock、Google Cloud 和 Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Fable 5.2 有哪些新东西",
      points: [
        "更擅长长时间的硬核技术工作：Anthropic 说它能连续几天处理模糊的工程任务，协调上百个、甚至上千个子 agent。",
        "更便宜：输入和输出都比 Fable 5.1 便宜 20%，批处理再打五折（$4 和 $20）。",
        "更快：输出比 Fable 5.1 快最多 30%，快速模式还能再快最多 2.5 倍，价格翻倍。",
        "机器人：Anthropic 说它控制实体机器人的能力大幅提升，包括没专门训练过的任务。",
        "安全限制：内置网络安全和生物方面的保护。被标记的网络安全请求会转给 Claude Opus 4.8，生物方面的转给 Claude Opus 5。",
        "数据保留：Fable 系列默认要求保留 30 天数据用于安全监控；零数据保留需要 Anthropic 授权。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Claude Fable 5.2 跑分",
      text: ["来自 Anthropic 的 Fable 页面，除非另注，均为开启安全限制时的成绩。这些是 Anthropic 自己公布的数字，不是第三方测试。"],
      headers: ["跑分", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0（agent 编程）", "49.1%（xhigh）", "32.4%（xhigh）", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2（agent 编程）", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1（电脑操作）", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench（业务流程）", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam（带工具）", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim（机器人，Anthropic 内部测试）", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Claude Fable 5.2 价格",
      text: [
        "每百万 token 的 API 价格，来自 2026 年 11 月 10 日的 Anthropic 文档。在 Claude 套餐里，Fable 5.2 用的是订阅自带的用量：Pro 和 Team 标准席位最多能用每周额度的 50%。Claude Code 的快速模式从用量积分里扣。",
      ],
      headers: ["模型", "输入", "输出", "缓存读取", "批处理（输入 / 输出）"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2 快速模式", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 对比 Opus 5.5：该用哪个？",
      text: ["Anthropic 自己的建议是：大多数工作先用 Opus 5.5，Opus 5.5 调高 effort 还不够时再换 Fable 5.2。"],
      points: [
        "价格：Fable 5.2 每个 token 的价格是 Opus 5.5 的两倍（$8 和 $40，对比 $4 和 $20），而且默认 effort 是 `high`，Opus 5.5 是 `medium`，所以每次请求往往也想得更多。",
        "能力：按 Anthropic 的表，Fable 5.2 在 agent 编程（FrontierSWE v2 是 69.9% 对 62.3%）、科学和长时间任务上领先 Opus 5.5；电脑操作上差距较小（OSWorld 2.1 是 89.3% 对 87.2%）。",
        "单个任务的成本：Anthropic 说 Fable 5.2 在 `high` 下的 FrontierCode 2.0 成绩和 Opus 5.5 在 `max` 下基本持平（45.3% 对 45.5%），单个任务成本却只有约一半。所以遇到难题，它不一定是更贵的选择。",
        "中途切换：只有 Fable 5.2 和 Mythos 5.2 能读 Fable 5.2 的思考内容，把对话从 Fable 5.2 换到 Opus 5.5，后面几轮就会丢掉之前的推理。",
        "简单规则：日常用 Opus 5.5；长时间运行的 agent 任务、难缠的 bug，以及 Opus 搞不定的活，交给 Fable 5.2。",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 对比 Mythos 5.2，以及对比 Fable 5.1",
      points: [
        "Mythos 5.2 是同一个模型，在网络安全和生物方面限制更少。只有通过 Anthropic 认证项目（比如 Cyber Verification Program）的组织能用，价格一样。",
        "在 Anthropic 的网络安全和生物跑分里，Mythos 5.2 比开着安全限制的 Fable 5.2 分数更高；其他方面两者就是同一个模型。",
        "和 Fable 5.1 比，Fable 5.2 更便宜、快最多 30%，在 Anthropic 的各项跑分上都更高，比如 FrontierCode 2.0 是 49.1% 对 32.4%，Remote Labor Index 是 41.3% 对 17.9%。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Claude Code 里用 Claude Fable 5.2",
      steps: [
        {
          title: "更新并选择模型",
          text: "更新 Claude Code，然后运行 `/model` 选 Claude Fable 5.2，或者用 `--model claude-fable-5-2` 启动会话。用 Claude 套餐的话，需要 Pro、Max、Ultra、Team 或 Enterprise。",
          code: claudeCode,
        },
        {
          title: "effort 先保持 high",
          text: "Anthropic 说大部分提升在 `high` 就已经有了。最难的长时间编程任务，确认有帮助后再调到 `xhigh`；`max` 留给少数不在乎时间和 token 的情况。",
        },
        {
          title: "需要速度时开快速模式",
          text: "在 Fable 5.2 上运行 `/fast`（Claude Code v2.1.321 及以上）。最多快 2.5 倍，价格翻倍；订阅套餐从用量积分里扣，不占套餐额度，在 Bedrock、Vertex 和 Foundry 上不可用。",
        },
        {
          title: "调 API？看一下不兼容的改动",
          text: "自适应思考始终开启（`budget_tokens` 和 `disabled` 会返回 400），不支持强制工具调用，修改之前的对话会让思考块失效，旧的 `computer_20251124` 工具换成了电脑操作工具集。Claude Code 和 Agent SDK 会替你处理这些。",
          code: api,
        },
      ],
      source: { label: "来源：Anthropic 文档《What's new in Claude Fable 5.2》", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给 Fable 5.2 一份长期工作",
      text: [
        "Fable 5.2 是为连续运行几个小时的工作而做的。Crewmark 把一个 Claude Code 会话变成 AI 员工，有岗位、目标、工作时间和心跳；员工用的是它所在会话的模型，所以你可以让 Fable 5.2 干最难的活，其余的留给 Opus 5.5。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "比如处理一堆难缠 issue 的 [AI 软件工程师](/ai-employees/software-engineer)。",
        },
        {
          title: "在它的会话里设模型",
          text: "在员工的 Claude Code 对话里运行 `/model`，选 Fable 5.2。",
        },
        {
          title: "让它跑起来",
          text: "它按心跳醒来，推进看板上的工作；参见[如何让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 里使用 Claude Fable 5.2" },
  mid: {
    title: "想让 Fable 5.2 按时处理你最难的 issue？",
    text: "Crewmark 员工跑在你自己的 Claude Code 上，按心跳醒来，从看板领下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Fable 5.2 什么时候发布的？",
        a: "2026 年 11 月 9 日，和 Claude Mythos 5.2 一起发布。在它之前是 Fable 5（2026 年 6 月 9 日）和 Fable 5.1（2026 年 9 月 1 日）。",
      },
      {
        q: "Claude Fable 5.2 多少钱？",
        a: "API 上每百万输入 token $8、输出 token $40，比 Fable 5.1 的 $10 和 $50 便宜。快速模式是 $16 和 $80，批处理是 $4 和 $20。Claude 套餐从 Pro 起包含；Pro 和 Team 标准席位最多能用每周额度的 50%。",
      },
      {
        q: "Fable 5.2 比 Opus 5.5 强吗？",
        a: "按 Anthropic 的跑分，在 agent 编程、科学和长时间任务上更强。但它每个 token 贵一倍，Anthropic 仍建议大多数工作从 Opus 5.5 开始。",
      },
      {
        q: "Claude Fable 5.2 的上下文窗口多大？",
        a: "100 万 token，最多输出 128K token。",
      },
      {
        q: "Fable 5.2 和 Mythos 5.2 有什么区别？",
        a: "它们是同一个模型。Fable 5.2 带网络安全和生物方面的保护，所有人都能用；Mythos 5.2 只给通过 Anthropic 认证项目的组织。",
      },
      {
        q: "Claude Fable 5.2 免费吗？",
        a: "不免费。Anthropic 列出的是 Pro、Max、Ultra、Team、Enterprise 套餐和 API，没有免费版。",
      },
      {
        q: "Claude Fable 5.2 有系统卡吗？",
        a: "有，Anthropic 发布了《Claude Fable 5.2 and Claude Mythos 5.2 System Card》，在它的 Fable 页面上有链接。",
      },
    ],
  },
  cta: {
    title: "让最新的模型做一份长期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Anthropic 的 Fable 页面、发布文章、Claude Platform 文档和 Claude Code 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关联，也未获其背书。Claude、Claude Fable、Claude Mythos、Claude Opus 和 Claude Code 是 Anthropic 的商标。",
};
