import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/factory; the English master is
// src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 价格：Free、Pro $20、Plus、Max 和 Teams",
    description:
      "Factory AI 价格：自带推理服务时免费，Pro 每月 $20、Plus $100、Max $200，另有 Teams。速率限制、Extra Usage 额度，以及 token 怎么计费。",
  },
  breadcrumb: "Factory 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Factory",
    title: "Factory AI 价格：Droid 套餐、用量限制和 token",
    lead: "Factory 出品 Droids，这些编程 agent 运行在 Factory App、Droid CLI、CI 和 Factory 托管的云端计算机上。如果你自带推理服务，它的 Free 套餐是 $0：用 ChatGPT、GitHub Copilot 或 OpenRouter 登录，或者接入你自己的 API key。付费套餐按个人计价，从每月 $20 的 Pro 到每月 $200 的 Max；Teams 是每个团队每月 $60，另加每人每月 $40。付费套餐有滚动的速率限制，Extra Usage 是在此之外的预付额度。下面是各个套餐、用量和 token 怎么计费，以及它和 Devin、Claude Code、Codex、OpenCode 的价格对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Factory 套餐和价格",
      text: [
        "来自 [factory.com](https://factory.com) 的价格页和 Factory 的定价文档，核对于 2026 年 11 月 13 日。价格以美元计，均按官网的按月标价（“/mo”）。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "Free",
          "每人每月 $0",
          "自带推理服务：用 ChatGPT、GitHub Copilot 或 OpenRouter 登录，或者接入你自己的 API key 或自定义端点",
        ],
        ["Pro", "每人每月 $20", "桌面应用、CLI 和 SDK，全部模型可用；5 小时、7 天和 30 天的滚动速率限制"],
        ["Plus", "每人每月 $100", "用量约为 Pro 的 5 倍；滚动速率限制相同"],
        ["Max", "每人每月 $200", "用量约为 Pro 的 10 倍；滚动速率限制相同"],
        ["Teams", "每个团队每月 $60，另加每人每月 $40", "最多 10 个席位"],
        ["Business 和 Enterprise", "联系销售", "Enterprise 提供本地部署选项"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 Factory 实际要付哪些钱",
      points: [
        "Free 上的推理费用。Free 套餐使用你自带的推理服务：ChatGPT、GitHub Copilot 或 OpenRouter 登录，或者你自己的 API key 或自定义端点。token 由那家提供商或那个套餐计费。",
        "付费套餐的 Standard Usage。Pro、Plus 和 Max 都有 5 小时、7 天和 30 天的滚动速率限制。Plus 的用量约为 Pro 的 5 倍，Max 约为 10 倍。未用完的 Standard Usage 不会结转。",
        "Extra Usage。更多用量来自 Extra Usage，这是一种预付额度，最低 $10，不会过期。",
        "Missions 需要 Extra Usage。Missions 用来规划功能和里程碑，需要开启 Extra Usage，碰到速率限制时会暂停。",
        "Workstreams 消耗更多 token。Workstreams（beta）在 Pro、Plus、Max 和 Teams 上提供，比单个会话消耗更多 token。Business 和 Enterprise 目前还没有它。",
        "模型。Factory 列出了“所有主流前沿模型和开放权重模型，包括最新版本的 GPT-5、Claude Opus 和 Sonnet、Gemini”，一个由开放权重模型组成的“Droid Core”模型池，以及你自己的 API key 或本地模型（BYOK）。",
        "席位。Pro、Plus 和 Max 按个人计价。Teams 最多 10 个席位；Business 和 Enterprise 需通过销售购买。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory 与其他编程 agent 的价格对比",
      text: [
        "入门价格取自各产品自己的价格页，核对于 2026 年 11 月 13 日，以美元计。",
        "并排对比：[Factory vs Claude Code](/compare/factory-vs-claude-code)。更多选择见 [Factory 替代品](/alternatives/factory)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["Factory", "自带推理服务时 Free $0；Pro 每月 $20", "有：自带推理服务即可免费使用"],
        ["[Devin](/pricing/devin)", "Free $0；Pro 每月 $20", "有：Free 套餐，配额较少"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年付费为每月 $17",
          "没有：Claude Free 不包含；也可以用按量付费的 API 额度",
        ],
        [
          "Codex",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 价格计费",
          "ChatGPT Free（$0）在桌面应用中列出了 GPT-6 Luna，“视推出进度而定”",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "agent 免费；OpenCode Go 每月 $10，Go Plus 每月 $40",
          "有：agent 本身（MIT）和免费模型，有每日请求数限制",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "保留你现有的订阅，给你的 agent 一个岗位和一块看板。",
      text: [
        "Factory 卖的是它自己的 agent，有套餐和用量限制。Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和工作时间。它按心跳醒来，从共享看板上领取 issue。agent 用量仍然走你已经在付费的 Claude 或 ChatGPT 订阅，没有单独的 token 账单。",
        "Crewmark 的价格：Free 版 $0（1 个项目、最多 3 名 AI 员工、1 人使用）。Pro 每月 $5、Team 每月 $10，即将推出。计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。它以 GPL-3.0 开源，可以自托管。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)里选，比如软件工程师、SEO 专员或数据分析师。",
        },
        {
          title: "把工作放上看板",
          text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。",
        },
        {
          title: "看看套餐",
          text: "[Crewmark 价格](/pricing)，以及 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)里的具体工作和设置方法。",
        },
      ],
    },
  ],
  mid: {
    title: "已经在为 Claude 或 ChatGPT 付费？",
    text: "Crewmark 把你的 Claude Code 或 Codex 变成 AI 员工，有岗位、心跳和共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Factory AI 价格常见问题",
    items: [
      {
        q: "Factory AI 免费吗？",
        a: "免费，前提是你自带推理服务。Free 套餐每人 $0：用 ChatGPT、GitHub Copilot 或 OpenRouter 登录，或者接入你自己的 API key 或自定义端点。",
      },
      {
        q: "Factory AI 每月多少钱？",
        a: "按个人计，Pro 每月 $20，Plus $100，Max $200。Teams 是每个团队每月 $60，另加每人每月 $40，最多 10 个席位。Business 和 Enterprise 通过销售定价。",
      },
      {
        q: "Factory AI 的定价模式是什么？",
        a: "按个人购买套餐，套餐内的 Standard Usage 受 5 小时、7 天和 30 天滚动速率限制约束，另可选 Extra Usage：最低 $10、不会过期的预付额度。未用完的 Standard Usage 不会结转。",
      },
      {
        q: "Factory AI 怎么收 token 的钱？",
        a: "在 Free 上，token 由你自带的账户或 API key 计费。在 Pro、Plus 和 Max 上，模型用量计入套餐的 Standard Usage 及其速率限制，需要更多用量时用预付的 Extra Usage 额度。Workstreams 比单个会话消耗更多 token。",
      },
      {
        q: "Factory AI 有企业版价格吗？",
        a: "Business 和 Enterprise 通过销售洽谈，没有列出价格。Enterprise 提供本地部署选项。Teams 每月 $60，另加每人 $40，最多 10 个席位。",
      },
      {
        q: "Factory AI 开源吗？",
        a: "不开源。Droid CLI 和 Factory App 都没有公布源代码或开源许可证；github.com/Factory-AI/factory 里是一份 README 和文档。开源选择见 [Factory 替代品](/alternatives/factory)。",
      },
    ],
  },
  cta: {
    title: "先比价格，再给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 factory.com/pricing 和 Factory 的定价文档核对。其他产品的价格取自它们自己同一天的价格页。",
  disclaimer:
    "Crewmark 是独立产品，与 Factory 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
