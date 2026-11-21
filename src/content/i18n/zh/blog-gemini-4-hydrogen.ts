import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API：模型代码 gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "找出并修复这个 diff 里失败的测试"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen：价格、跑分，以及和 Argon、3.8 Flash 对比",
    description:
      "Google 的快速编程和 agent 模型 Gemini 4 Hydrogen：每百万 token $1.50 / $7.50、100 万上下文、四档思考等级、跑分，以及和 Argon、Carbon、3.8 Flash、Claude 的对比。",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "博客 · 新模型",
    title: "Gemini 4 Hydrogen：价格、跑分，以及和其他模型怎么比",
    lead: "Google 在 2026 年 11 月 12 日发布了 Gemini 4 Hydrogen：一款面向日常编程和 agent 工作的快速 Gemini 4 模型，整个 100 万 token 上下文统一定价，每百万输入 token $1.50，每百万输出 token $7.50。它的定位在 Gemini 4 Carbon 和 Argon 之下，Google 把这两款留给深度、长周期的推理；它也接替 Gemini 3.8 Flash，成为大多数人会首选的模型。本文讲它有哪些新东西、Google 公布的数字、它的价格和 Argon、Carbon、3.8 Flash 及 Claude 相比如何，以及在哪里能用。",
    cta: "开始使用",
    secondary: "查看价格",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen 一览",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["发布", "2026 年 11 月 12 日，由 Google 发布"],
        ["模型代码", "`gemini-4-hydrogen`"],
        ["定位", "编程和 agent 工作流中的快速执行"],
        ["上下文", "输入 100 万 token，输出最多 100 万 token"],
        ["思考等级", "low、medium、high（默认），以及新增的 xhigh"],
        ["API 价格", "每百万 token 输入 $1.50、输出 $7.50，整个上下文窗口统一定价；Gemini API 有免费层级"],
        ["在哪里用", "Gemini API、Google AI Studio、Android Studio、Gemini for business、Gemini 应用、Google 搜索，以及面向 Google AI Pro 和 Ultra 付费订阅用户的 Google Antigravity"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Gemini 4 Hydrogen 有哪些新东西",
      points: [
        "Gemini 4 家族里的快速模型：Google 把 Carbon 和 Argon 留给深度、长周期的推理，Hydrogen 则主打快速执行，可以单独用，也可以在它们旁边当执行者。",
        "Google Antigravity 里的 Orchestrator 能在同一个会话中在 Carbon 和 Hydrogen 之间切换。Google 说它在 Terminal-Bench 4.0 上的成功率接近 Carbon，同时少用 24% 的配额，完成速度快 19%。",
        "据 Google，相比 Gemini 3.8 Flash 是一大步：默认的 high 设置下快 2.5 倍，Terminal-Bench 4.1 从 18.2% 提升到 57%，编造的说法不到原来的五分之一。",
        "批量探索大型代码库：并行读取和搜索文件，而不是一个一个来。合作伙伴测得它比 3.8 Flash 快 2 到 2.8 倍，token 少用 12% 到 23%。",
        "四档思考等级，包括新增的 xhigh，任务需要多少推理就只为多少付费。",
        "agent 工作中的安全性：Google 公布，越权行为最多减少 81%，在工具使用和编程评测中，偏离意图的行为和走捷径的情况降到原来的 1/12，内部 agent 评测的诚实率为 96.7%。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Gemini 4 Hydrogen 跑分",
      text: ["这些是 Google 在发布文章中公布的数字，第三方结果之后会陆续出来。Google 给出对比的，列在最后一列。"],
      headers: ["跑分", "Gemini 4 Hydrogen", "对比"],
      rows: [
        ["Artificial Analysis Intelligence Index", "high 下 51；xhigh 下 54", "Gemini 4 Argon：50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash：18.2%"],
        ["HLE-Diamond", "58.8%", "同级领先"],
        ["Vals Tax Agent Bench", "52.3%", "总榜第 1"],
        ["Vals Legal Research Bench", "55.8%", "并列第 1"],
        ["Multimodal Knowledge Agent（MKA）", "53.4%", "据 Google，领先其他模型"],
        ["Agents' Last Exam v1.1", "71.6%", "据 Google，领先其他模型"],
        ["Agent Arena（arena.ai）", "第 5 名", "实时排名"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Gemini 4 Hydrogen 价格",
      text: [
        "Gemini API 价格，单位为每百万 token 的美元价格，来自 2026 年 11 月 13 日的 Google 价格页面。输出价格包含思考 token。Carbon 和 Argon 在 11 月 30 日前是首发价，之后翻倍；3.8 Flash 的价格在 2027 年 1 月 1 日翻倍。Claude 的价格来自 Anthropic，见我们的 [Claude Fable 5.2](/blog/claude-fable-5-2) 文章。",
      ],
      headers: ["模型", "输入", "输出", "批处理（输入 / 输出）", "免费层级"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "有"],
        ["Gemini 4 Argon", "11 月 30 日前 $2.00，之后 $4.00", "11 月 30 日前 $10.00，之后 $20.00", "$1.00 / $5.00，之后 $2.00 / $10.00", "无"],
        ["Gemini 4 Carbon", "11 月 30 日前 $2.00，之后 $4.00", "11 月 30 日前 $10.00，之后 $20.00", "$1.00 / $5.00，之后 $2.00 / $10.00", "无"],
        ["Gemini 3.8 Flash", "12 月 31 日前 $0.75，之后 $1.50", "12 月 31 日前 $3.75，之后 $7.50", "-", "有"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen 对比 Argon 和 Carbon",
      text: [
        "Google 按推理深度分工。Carbon 是它能力最强的推理模型，用于复杂的软件工程、高难度的数学和科学问题，以及自主运行的多步 agent。Argon 是高效的前沿模型，响应比 Carbon 更快，token 花得更少。Hydrogen 用于快速的日常编程和 agent 工作，也可以在 Carbon 统筹全局时担任执行者或验证者。",
        "价格上，Hydrogen 现在就比 Argon 和 Carbon 便宜，12 月 1 日两者首发价结束后，差距还会拉大。按 Google 的数字，它在 Artificial Analysis Intelligence Index 上也略高于 Argon（high 下 51 对 50）。Carbon 和 Argon 在 Gemini API 里都没有免费层级，Hydrogen 有。",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen 对比 Gemini 3.8 Flash",
      text: [
        "如果你在用 3.8 Flash，Google 把 Hydrogen 定位为它的升级：默认设置下更快，Terminal-Bench 4.1 得分是它的三倍多，编造的说法也少得多。到 12 月 31 日为止，它每个 token 的价格是 3.8 Flash 的两倍；从 2027 年 1 月 1 日起，两者标价相同，都是 $1.50 和 $7.50。Google 的合作伙伴还反馈，每个任务少用 12% 到 23% 的 token，能抵掉一部分差价。",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen 对比 Claude Sonnet 5.5 和 Opus 5.5",
      text: [
        "Google 的发布文章没有拿 Hydrogen 和 Claude 比较，所以这里只列能比较的事实。Hydrogen 每百万 token $1.50 和 $7.50，标价低于 Claude Sonnet 5.5（$2 和 $10），比 Opus 5.5（$4 和 $20）低得多；它的上下文是 100 万 token，最多输出 100 万 token。Claude Code 和 Codex 运行的是各自厂商的模型，所以选哪个模型通常取决于你用哪个 agent；这两者怎么比，见 [Claude Code 与 Codex 对比](/blog/claude-code-vs-codex)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么使用 Gemini 4 Hydrogen",
      steps: [
        { title: "在 Google AI Studio 里试用", text: "在 AI Studio 里选 Gemini 4 Hydrogen；AI Studio 的所有层级都能用，包括免费层级。" },
        { title: "通过 Gemini API 调用", text: "使用模型代码 `gemini-4-hydrogen`。思考等级保持默认的 high；比起深度更看重速度时，改成 medium 或 low。", code: api },
        { title: "在 Google Antigravity 里用它写代码", text: "Google AI Pro 和 Ultra 的付费订阅用户可以在 Antigravity 里用它，Orchestrator 能在同一个会话中在 Carbon 和 Hydrogen 之间切换。" },
        { title: "在其他 agent 里用", text: "支持 Gemini API key 的编程 agent，把这个模型加进模型列表后就能调用 `gemini-4-hydrogen`；可以查一下你的 agent 的模型列表。" },
      ],
      source: { label: "来源：Google《Introducing Gemini 4 Hydrogen》", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "模型更快只解决了一半，另一半是给它一份工作。",
      text: [
        "模型越来越快、越来越便宜，用着它们的 agent 却还在等下一条提示词。Crewmark 把你的编程 agent 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，会自己从看板上领下一个 issue。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)里选，比如 [AI 软件工程师](/ai-employees/software-engineer)。" },
        { title: "把工作放上看板", text: "分配 issue，把例行的设成重复，让心跳叫醒员工去领下一个。" },
        { title: "看看它能做什么", text: "每种 agent 能做的工作，连同配置和规则，见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 Gemini 4 Hydrogen" },
  mid: {
    title: "想让你的 agent 按计划处理 issue？",
    text: "Crewmark 给每个 agent 一个岗位、一个心跳和一块共享看板，让它自己接下一份工作。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Gemini 4 Hydrogen 是什么？",
        a: "Google 面向日常编程和 agent 工作的快速 Gemini 4 模型，2026 年 11 月 12 日发布。它的定位在 Gemini 4 Carbon 和 Argon 之下，上下文 100 万 token，最多输出 100 万 token。",
      },
      {
        q: "Gemini 4 Hydrogen 多少钱？",
        a: "在 Gemini API 中，每百万输入 token $1.50、输出 token $7.50，整个上下文窗口统一定价；批处理是 $0.75 和 $3.75。它有免费层级，Gemini 应用里所有人都能用。",
      },
      {
        q: "Gemini 4 Hydrogen 比 Argon 强吗？",
        a: "Google 给它们的定位不同：Argon 和 Carbon 用于深度、长周期的推理，Hydrogen 用于快速执行。在 Artificial Analysis Intelligence Index 上，Google 公布的成绩是 Hydrogen 在默认设置下 51、Argon 50，而且 Hydrogen 更便宜。",
      },
      {
        q: "Gemini 4 Hydrogen 对比 3.8 Flash：要不要换？",
        a: "据 Google，Hydrogen 在默认设置下快 2.5 倍，Terminal-Bench 4.1 是 57% 对 18.2%，编造的说法也少得多。到 2026 年 12 月 31 日为止，它每个 token 的价格是 3.8 Flash 的两倍；从 2027 年 1 月 1 日起，两者标价都是 $1.50 和 $7.50。",
      },
      {
        q: "Gemini 4 Hydrogen 的模型代码是什么？",
        a: "`gemini-4-hydrogen`，Gemini API 和 Google AI Studio 里都用它。",
      },
      {
        q: "Gemini 4 Hydrogen 的模型卡在哪里？",
        a: "Google 以 PDF 形式发布了它：[Gemini 4 Hydrogen 模型卡](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)。",
      },
    ],
  },
  cta: {
    title: "让最新的模型做一份长期工作。",
    text: "Crewmark 把编程 agent 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 13 日对照 Google 的发布文章以及 Gemini API 的价格和模型页面核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Google 和 Anthropic 无关联，也未获其背书。Gemini 和 Claude 是其各自所有者的商标。",
};
