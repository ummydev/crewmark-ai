import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/opencode; the English master is
// src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 价格（2026）：agent 免费，Go $10、Go Plus $40",
    description:
      "OpenCode 价格：MIT 许可的 agent 免费，并提供免费模型。OpenCode Go 每月 $10，Go Plus $40，也可以按每百万 token 按量付费，或用你自己的 key。",
  },
  breadcrumb: "OpenCode 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · OpenCode",
    title: "OpenCode 价格：免费的 agent，以及为模型付费的四种方式",
    lead: "OpenCode 是一款免费、开源（MIT）的编程 agent。它自带免费模型，不用注册账号，但有每日请求数限制。除此之外，你付的是模型的钱，而不是 agent 的钱：每月 $10 的 OpenCode Go 或每月 $40 的 Go Plus，按每百万 token 计费的按量付费模型，或者你已经有的套餐或 API key，比如 ChatGPT Plus 或 Pro、GitHub Copilot。Enterprise 需联系销售。下面逐一介绍每种方式、花多少钱，以及 OpenCode 和 Claude Code、Codex、Hermes Agent、OpenClaw 的对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenCode 套餐和价格",
      text: [
        "来自 [opencode.ai](https://opencode.ai) 及其控制台中 Go、模型和 Enterprise 的页面，核对于 2026 年 11 月 13 日。价格以美元计。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "OpenCode（开源）",
          "免费，MIT 许可证",
          "agent 本身，提供终端 UI、桌面应用、网页应用和 SDK；支持 200+ 家提供商的模型，包括本地模型",
        ],
        ["免费模型", "$0，无需账号", "一组免费模型，有每日请求数限制"],
        ["OpenCode Go", "每月 $10", "精选模型，有 5 小时、每周和每月的用量额度；可充值额度；随时取消"],
        ["Go Plus", "每月 $40", "精选模型，有 5 小时、每周和每月的用量额度；可充值额度；随时取消"],
        ["按量付费", "按每百万 token 计费", "使用模型时从你的余额中扣费"],
        [
          "你自己的套餐或 key",
          "你已经付给那家提供商的费用",
          "用 ChatGPT Plus 或 Pro、GitHub Copilot 登录，或者自带 API key",
        ],
        ["Enterprise", "联系销售", "通过 OpenCode 的销售团队定价"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 OpenCode 实际要付哪些钱",
      points: [
        "agent 本身不花钱。OpenCode 采用 MIT 许可证，提供 macOS、Windows 和 Linux 的 CLI 二进制文件，还有一个桌面应用（README 中标注为 beta）。",
        "免费模型有每日请求数限制。它们不需要账号。",
        "Go 的用量额度因模型而异。在 Go 和 Go Plus 上，用量额度按 5 小时、每周和每月的周期重置。你可以充值额度，也可以随时取消。",
        "按量付费按 token 计费。按量付费的模型按每百万 token 从你的余额中扣费。",
        "或者用你已经在付费的套餐。用 ChatGPT Plus 或 Pro、GitHub Copilot 登录。用你自己的 API key 时，用量由那家提供商计费；OpenCode 通过 Models.dev 支持 200+ 家 LLM 提供商，包括本地模型。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 与其他编程 agent 的价格对比",
      text: [
        "入门价格取自各产品自己的官网，核对于 2026 年 11 月 13 日，以美元计。",
        "并排对比：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)。更多选择见 [OpenCode 替代品](/blog/opencode-alternatives)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["OpenCode", "agent 免费；OpenCode Go 每月 $10", "有：agent 本身（MIT）和免费模型，有每日请求数限制"],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年付费为每月 $17",
          "没有：Claude Free 不包含；也可以用按量付费的 API 额度",
        ],
        [
          "Codex",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 价格计费",
          "CLI 开源（Apache-2.0）；用量来自 ChatGPT 套餐或 API key",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "agent 免费；可选 Nous Portal Plus 每月 $20",
          "有：agent 本身（MIT），以及 $0 的 Nous Portal Free（按量付费，仅限免费模型）",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "免费；没有付费档或托管服务",
          "有：整个项目（MIT）；你向模型提供商付费",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "OpenCode 是 agent，Crewmark 给 agent 一份工作和一块看板。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 agent 对话，比如 Claude Code、Codex 或 OpenCode，有岗位、KPI 和工作时间。它按心跳醒来，从共享看板上领取 issue。和 OpenCode 一样，Crewmark 不对模型用量收费：你向 agent 提供商付费。",
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
    title: "想让你的编程 agent 一直干下去？",
    text: "Crewmark 给 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。1 个项目、最多 3 名 AI 员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "OpenCode 价格常见问题",
    items: [
      {
        q: "OpenCode 免费吗？",
        a: "免费。agent 本身以 MIT 许可证开源，免费使用。它还自带免费模型，不需要账号，有每日请求数限制。",
      },
      {
        q: "OpenCode Go 多少钱？",
        a: "OpenCode Go 每月 $10，Go Plus 每月 $40。两者都提供精选模型，用量额度按 5 小时、每周和每月的周期计算，可以充值额度，也可以随时取消。",
      },
      {
        q: "OpenCode 的定价模式是什么？",
        a: "agent 免费，模型有四种付费方式：免费模型、Go 或 Go Plus 订阅、按每百万 token 从余额扣费的按量付费，或者你已经有的套餐或 API key。Enterprise 需联系销售。",
      },
      {
        q: "OpenCode 按模型怎么定价？",
        a: "OpenCode Go 的用量额度因模型而异。按量付费的模型按每百万 token 计费。用你自己的 API key 时，用量由那家提供商计费。",
      },
      {
        q: "我能用 ChatGPT 或 GitHub Copilot 订阅来用 OpenCode 吗？",
        a: "可以。你可以用 ChatGPT Plus 或 Pro、GitHub Copilot 登录，也可以自带 API key。",
      },
      {
        q: "OpenCode 支持本地模型吗？",
        a: "支持。OpenCode 通过 Models.dev 支持 200+ 家 LLM 提供商，包括本地模型，agent 本身也是免费的。",
      },
    ],
  },
  cta: {
    title: "先选好模型，再给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 opencode.ai 和 OpenCode 的控制台页面核对。其他产品的价格取自它们自己同一天的官网。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenCode 的开发方 Anomaly 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
