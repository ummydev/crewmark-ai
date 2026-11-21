import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/devin; the English master is
// src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin 价格（2026）：Free、Pro $20、Max $200 和 Teams",
    description:
      "Devin 价格：Free $0、Pro 每月 $20、Max 每月 $200，另有 Teams 和 Enterprise。配额、按需额度和席位怎么计费，以及 Devin 和同类产品的价格对比。",
  },
  breadcrumb: "Devin 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Cognition",
    title: "Devin 价格：每个套餐，以及套餐之外要付的钱",
    lead: "Devin 是 Cognition 的 AI 软件工程师，有一个 $0 的 Free 套餐，配额较少。Pro 每月 $20，Max 每月 $200，都只限一位用户。Teams 的标价是“团队套餐每月 $80，每个完整开发者席位另加每月 $40”，Enterprise 需通过销售洽谈。每个自助套餐都有每日和/或每周配额；超出之后，用预付的按需额度付费。下面是各个套餐、额外费用，以及 Devin 和 Factory、Claude Code、Codex、Cursor Projects、Crewmark 的价格对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Devin 套餐和价格",
      text: ["来自 [devin.ai](https://devin.ai) 的价格页和 Devin 的计费文档，核对于 2026 年 11 月 13 日。价格以美元计。"],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        ["Free", "$0", "配额较少，可用模型有限"],
        ["Pro", "每月 $20", "Devin Cloud，全部模型可用，超出的用量按 API 价格计费；限一位用户"],
        ["Max", "每月 $200", "更高的配额；限一位用户"],
        [
          "Teams",
          "“团队套餐每月 $80，每个完整开发者席位另加每月 $40”",
          "最多 100 名用户；“Free mode”（SWE-2），每名成员最多同时运行 2 个云端会话",
        ],
        ["Enterprise", "“需洽谈”（Let's talk）", "VPC 和专属部署"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 Devin 实际要付哪些钱",
      points: [
        "先用配额。Devin 的自助套餐使用每日和/或每周配额。",
        "然后是预付额度。超出配额的用量从预付的按需额度中扣除。在 Pro 上，超出的用量按 API 价格计费。",
        "GPT 模型可以走你的 ChatGPT 套餐。Pro、Max 和 Teams 可以用关联的 ChatGPT 套餐来承担 GPT 模型的用量。",
        "可用模型因套餐而异。Free 可用的模型有限；Pro 全部模型可用。Devin 使用 Cognition 的 SWE-2，加上“来自 OpenAI、Claude、Gemini 和 SpaceXAI 的前沿模型，以及领先的开源模型”，由一个 Adaptive 路由器为每个任务挑选模型。",
        "席位。Pro 和 Max 是单用户套餐。Teams 最多 100 名成员，更大的团队会被引导到 Enterprise。",
        "Teams 的额度。在 Teams 上，共享的按需额度用完后，Automations 就会停止。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 与其他编程 agent 的价格对比",
      text: [
        "入门价格取自各产品自己的价格页，核对于 2026 年 11 月 13 日，以美元计。不包含模型用量的套餐，模型费用由你的模型提供商收取。",
        "并排对比：[Devin vs Claude Code](/compare/devin-vs-claude-code)、[Devin vs Codex](/compare/devin-vs-codex)。更多选择见 [Devin 替代品](/blog/devin-alternatives)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["Devin", "Free $0；Pro 每月 $20", "有：Free 套餐，配额较少"],
        ["[Factory](/pricing/factory)", "自带推理服务时 Free $0；Pro 每月 $20", "有：自带推理服务即可免费使用"],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年付费为每月 $17",
          "没有：Claude Free 不包含；也可以用按量付费的 API 额度",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 价格计费",
          "ChatGPT Free（$0）在桌面应用中列出了 GPT-6 Luna，“视推出进度而定”",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 每月 $30，或每年 $300",
          "没有：Free、Plus 和旧版 Hobby 都不包含",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0；Pro 每月 $5，即将推出",
          "有：1 个项目、最多 3 名 AI 员工；agent 用量付给你的提供商",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "已经在为 Claude Code 或 Codex 付费？给它一份工作和一块看板。",
      text: [
        "Devin 是一个独立的 agent，按套餐配额和额度计费。Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、KPI 和工作时间。它按心跳醒来，从共享看板上领取 issue。agent 用量仍然走你已经在付费的 Claude 或 ChatGPT 订阅。",
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
    title: "Devin 价格常见问题",
    items: [
      {
        q: "Devin 免费吗？",
        a: "有一个 $0 的 Free 套餐，配额较少，可用模型有限。Pro 每月 $20，增加了 Devin Cloud，全部模型可用。",
      },
      {
        q: "Devin 每月多少钱？",
        a: "Pro 每月 $20，Max 每月 $200，都只限一位用户。Teams 的标价是“团队套餐每月 $80，每个完整开发者席位另加每月 $40”，最多 100 名用户。Enterprise 标为“需洽谈”（Let's talk）。价格以美元计。",
      },
      {
        q: "Devin 的定价模式是什么？",
        a: "套餐自带每日和/或每周配额，超出部分用预付的按需额度支付。在 Pro 上，超出的用量按 API 价格计费。Teams 另有团队费用和每个完整开发者席位的费用。",
      },
      {
        q: "Devin 的 Teams 和 Enterprise 套餐怎么运作？",
        a: "Teams 最多 100 名成员，共享的按需额度用完后，它的 Automations 就会停止。更大的团队会被引导到 Enterprise，Enterprise 通过销售定价，提供 VPC 和专属部署。",
      },
      {
        q: "我能在 Devin 上用我的 ChatGPT 套餐吗？",
        a: "可以，Pro、Max 和 Teams 都行。关联的 ChatGPT 套餐承担 GPT 模型的用量。",
      },
      {
        q: "Devin 开源吗？",
        a: "不开源。Devin 没有公布源代码或开源许可证；github.com/CognitionAI/devin-cli 里是安装包、文档和脚本。开源选择见 [Devin 替代品](/blog/devin-alternatives)。",
      },
    ],
  },
  cta: {
    title: "先比价格，再给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 devin.ai/pricing 和 Devin 的计费文档核对。其他产品的价格取自它们自己同一天的价格页。",
  disclaimer:
    "Crewmark 是独立产品，与 Cognition 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
