import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash（1017）：价格、跑分及与 V4 Pro 对比",
    description:
      "DeepSeek-V4.1-Flash-1017 详解：2026 年 10 月 17 日更新了什么、API 价格、1M 上下文、Hugging Face 开源权重、DeepSeek 官方跑分，以及什么时候该换用 V4 Pro。",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · DeepSeek",
    title: "DeepSeek V4.1 Flash（1017）：价格、上下文、跑分及与 V4 Pro 对比",
    lead: "DeepSeek-V4.1-Flash-1017 是 DeepSeek V4.1 Flash 在 2026 年 10 月 17 日发布的更新版。V4.1 Flash 是 DeepSeek 最新架构中最小的模型，支持图片理解，上下文长度 1M token。API 里的 `deepseek-flash`、DeepSeek 官网和 App 用的都是它，DeepSeek Harness 默认运行的也是它，权重以 MIT 许可证开源。DeepSeek 表示，它的得分比 9 月发布的版本更高，完成任务更快，输出也更短。本文介绍它是什么、要花多少钱、和 V4 Pro 相比如何，以及怎么使用。",
    cta: "开始使用",
    secondary: "跳到价格",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash 一览",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["发布时间", "V4.1 Flash 于 2026 年 9 月 10 日发布；1017 更新于 2026 年 10 月 17 日发布"],
        ["API 模型名", "`deepseek-flash`（旧名称 `deepseek-v4-flash` 和 `deepseek-v4-flash-vision-exp` 现在也由它提供服务）"],
        ["输入", "文本和图片"],
        ["上下文长度", "1M token；DeepSeek 建议把 `max_tokens` 设为 256K 或以上"],
        ["权重", "在 Hugging Face 开源，MIT 许可证"],
        ["在哪里用", "DeepSeek API、官网和 App；DeepSeek Harness 的默认模型"],
        ["专门优化", "据 DeepSeek 介绍，针对 DeepSeek Harness（v0.2.1-rc.1 或更高版本）、腾讯 CodeBuddy 和 WorkBuddy 做了优化"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek V4.1 Flash 价格及与 V4 Pro 对比",
      text: [
        "DeepSeek API 价格，单位为每百万 token 的美元价格，截至 2026 年 11 月 6 日。闲时价格适用于工作日 UTC 01:00–04:00 和 06:00–10:00 以外的时段，是高峰价格的一半；1017 更新没有调整价格。DeepSeek 的 Search API 和 Fetch API 每 1,000 次调用各收费 $0.75。",
      ],
      headers: ["每 1M token", "Flash，高峰", "Flash，闲时", "V4 Pro，高峰", "V4 Pro，闲时"],
      rows: [
        ["输入，缓存命中", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["输入，缓存未命中", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["输出", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "DeepSeek V4.1 Flash 跑分（DeepSeek 官方数据）",
      text: [
        "以下是 DeepSeek 在模型卡中公布的数据，对比的是 1017 更新版和 9 月版 V4.1 Flash。DeepSeek 用 Claude Code harness 跑 Terminal-Bench 4.0，用 Mini-SWE-V2 跑 DeepSWE。厂商自测的跑分往往偏向自家模型，切换之前请先用你自己的任务测一测。",
      ],
      headers: ["基准测试", "V4.1 Flash 1017", "V4.1 Flash（9 月版）"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE（不使用工具）", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash 和 V4 Pro 怎么选",
      points: [
        "V4 Pro（`deepseek-v4-pro`，2026 年 8 月 13 日起正式开放）每输入 token 的价格是 Flash 的 4.4 倍，每输出 token 是 3.3 倍，而且只支持文本；Flash 还支持图片输入。",
        "两者都有 1M token 上下文，推理强度都可以调节（low、high 和 max）。",
        "DeepSeek 自己的编程 agent 方案默认都用 Flash：一是 DeepSeek Harness，二是它推荐的 Claude Code 配置，后者把 Sonnet 和 Haiku 映射到 Flash，只有 Opus 映射到 V4 Pro。",
        "实用的分工：日常 agent 工作和子 agent 用 Flash，遇到 Flash 反复搞不定的难题再换 V4 Pro。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek V4.1 Flash 怎么用",
      steps: [
        {
          title: "通过 API 调用",
          text: "在 platform.deepseek.com 获取 API key，调用时模型名填 `deepseek-flash`；API 兼容 OpenAI 和 Anthropic 接口。",
          code: api,
        },
        {
          title: "在编程 agent 里使用",
          text: "在 DeepSeek Harness 里运行（它是默认模型），或者让 Claude Code、Codex 接入 DeepSeek；参见 [DeepSeek Harness 指南](/blog/deepseek-harness) 和 [Claude Code 接入 DeepSeek](/blog/claude-code-deepseek)。",
        },
        {
          title: "用开源权重本地部署",
          text: "从 Hugging Face 下载 DeepSeek-V4.1-Flash-1017。仓库里提供的是参考 prompt 编码器和推理说明，而不是 chat template；DeepSeek 推荐 temperature 1.0、top_p 1.0。",
        },
      ],
      source: { label: "来源：Hugging Face 上的 DeepSeek-V4.1-Flash-1017", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "便宜又能干的模型，帮你清理待办任务",
      text: [
        "按 Flash 的价格，让 agent 全天忙着也负担得起。Crewmark 把 DeepSeek Harness、Claude Code、Codex 或 OpenCode 会话变成有岗位、有目标、有工作时间的 AI 员工，并用心跳唤醒它，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "选择 agent 和模型",
          text: "DeepSeek Harness 默认运行 V4.1 Flash；Claude Code 和 Codex 可以通过 DeepSeek 的端点使用它。",
        },
        {
          title: "给它一个岗位和目标",
          text: "了解[什么是 AI 员工](/ai-employees)，以及它和 [superagent](/blog/superagent) 有什么不同。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，它每 15、30 或 60 分钟醒来一次，接手下一个 issue；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 DeepSeek V4.1 Flash" },
  mid: {
    title: "模型这么便宜，就该让它全天干活。",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 DeepSeek Harness、Claude Code 或 Codex。",
    button: "开始使用",
  },
  faq: {
    title: "DeepSeek V4.1 Flash 常见问题",
    items: [
      {
        q: "DeepSeek V4.1 Flash 1017 是什么？",
        a: "它是 DeepSeek V4.1 Flash 在 2026 年 10 月 17 日发布的更新版；V4.1 Flash 是 DeepSeek 最新架构中最小的模型。它支持文本和图片输入，上下文 1M token，在 API 中的模型名是 `deepseek-flash`。",
      },
      {
        q: "DeepSeek V4.1 Flash 多少钱？",
        a: "API 高峰价格为：输入每百万 token $0.30（缓存未命中；缓存命中为 $0.006），输出每百万 token $1.20；闲时价格减半。",
      },
      {
        q: "DeepSeek V4.1 Flash 的上下文长度是多少？",
        a: "1M token，DeepSeek 建议把 `max_tokens` 至少设为 256K。",
      },
      {
        q: "DeepSeek V4.1 Flash 开源吗？",
        a: "权重以 MIT 许可证在 Hugging Face 开源，并附有参考 prompt 编码器和推理说明。",
      },
      {
        q: "DeepSeek V4.1 Flash 和 V4 Pro 有什么区别？",
        a: "V4 Pro 每输入 token 的价格是 Flash 的 4.4 倍，每输出 token 是 3.3 倍，而且只支持文本；Flash 支持图片输入，也是 DeepSeek 编程 agent 方案的默认模型。两者上下文都是 1M。",
      },
      {
        q: "从 V4.1 Flash 到 1017 版有哪些变化？",
        a: "DeepSeek 表示，新版在 agent 和编程基准测试上得分更高，输出更短，完成任务更快，价格和模型名都没有变。",
      },
      {
        q: "Claude Code 能用 DeepSeek V4.1 Flash 吗？",
        a: "能。DeepSeek 有文档说明如何用环境变量让 Claude Code 连到它的 Anthropic 兼容端点并使用 `deepseek-flash`；参见 [Claude Code 接入 DeepSeek](/blog/claude-code-deepseek)。",
      },
    ],
  },
  cta: {
    title: "把 DeepSeek V4.1 Flash 变成 AI 员工。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code、Codex 和 OpenCode 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 DeepSeek API 文档（更新日志、新闻、价格）和 Hugging Face 模型卡核对。",
  disclaimer:
    "Crewmark 是独立产品，与 DeepSeek 无关，也未获其背书。跑分数据均为 DeepSeek 官方公布。产品名称是其各自所有者的商标。",
};
