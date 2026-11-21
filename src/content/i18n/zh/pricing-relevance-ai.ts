import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/relevance-ai; the English master is
// src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 价格：仅有 Enterprise，Free 套餐已停用",
    description:
      "Relevance AI 的价格页只列出 Enterprise 一个套餐，需通过销售定制报价，文档称 Free 套餐已停用。这对你意味着什么。",
  },
  breadcrumb: "Relevance AI 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Relevance AI",
    title: "Relevance AI 价格：只有一个通过销售购买的 Enterprise 套餐，没有 Free 套餐",
    lead: "Relevance AI 的公开价格页只列出一个套餐，Enterprise，价格定制：你需要“联系销售”（Talk to sales）。它的文档称，Free 套餐已对新注册用户和现有账号停用。在模型方面，文档列出两种方式：额度，或者你自己的 LLM key。下面是 Enterprise 套餐包含什么、如果你今天购买这意味着什么，以及它和 Lindy、CrewAI、LangGraph、Crewmark 的价格对比。",
    cta: "开始使用",
    secondary: "查看套餐",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Relevance AI 套餐和价格",
      text: [
        "来自 relevanceai.com/pricing 和 Relevance AI 的文档，核对于 2026 年 11 月 13 日。价格页没有公布任何自助套餐的价格。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "Enterprise",
          "定制（“联系销售”）",
          "自定义 Actions 和供应商额度；agent、工具、用户和项目不限量。根据文档，SSO、RBAC、审计日志、agent 评估、工作时间控制和企业触发器仅限 Enterprise",
        ],
        ["Free", "已停用", "文档称 Free 套餐已对新注册用户和现有账号停用"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 Relevance AI 实际要付哪些钱",
      points: [
        "一份定制合同。唯一列出的套餐是 Enterprise，通过销售定价，所以你只有和 Relevance AI 谈过之后才能拿到报价。",
        "通过额度或你自己的 key 使用模型。文档里的套餐表列出了“用额度使用任意 LLM”（Use any LLMs with credits）和“自带 LLM”（Bring your own LLM，BYOK）。Enterprise 包含自定义 Actions 和供应商额度。",
        "需要 Enterprise 的功能：SSO、RBAC、审计日志、agent 评估、工作时间控制，以及面向 Salesforce、Snowflake 和 Zendesk 的企业触发器。",
        "没有免费的起步方式。Free 套餐已对新注册用户停用，在和销售沟通之前，没有 $0 的套餐可以先试用。",
        "在产品之外，销售方案还提供一支嵌入式部署团队，第 1、2 周梳理使用场景，第 3 周起开始部署；另有“Invent”，Relevance AI 称之为 24/7 的 AI 解决方案工程师。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 与同类 agent 平台的价格对比",
      text: [
        "价格取自各产品自己的官网，核对于 2026 年 11 月 13 日。使用你自己模型的产品还需要一个模型，费用付给模型提供商。",
        "并排对比：[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)、[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。更多选择见 [Relevance AI 替代品](/alternatives/relevance-ai)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["Relevance AI", "Enterprise，通过销售定制报价", "没有：Free 套餐已停用"],
        [
          "[Lindy](/personal-agent/lindy)",
          "每位活跃用户每月 $29.99 起，含 3,000 额度",
          "有：$50 额度，7 天有效，无需信用卡",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "框架免费（MIT）；AMP Enterprise 定制报价",
          "有：框架，以及每月 50 次工作流执行的 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "框架免费（MIT）；LangSmith Plus 每席位每月 $39",
          "有：框架，以及 $0 的 LangSmith Developer（1 个席位，每月最多 5k 条基础 trace）",
        ],
        [
          "[Crewmark](/pricing)",
          "免费；Pro 每月 $5、Team 每月 $10 即将推出",
          "有：1 个项目、最多 3 名 AI 员工、1 人使用",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Relevance AI 搭建托管的 agent，Crewmark 把你自己的编程 agent 组成一支团队来运营。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue。agent 运行在你已经在付费的 Claude 或 ChatGPT 订阅上，没有单独的 token 账单。",
        "Crewmark 的价格：Free 版 $0（1 个项目、最多 3 名 AI 员工、1 人使用）。Pro 每月 $5、Team 每月 $10，即将推出。计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。它以 GPL-3.0 开源，可以自托管。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)里选，比如 SEO、增长、社交媒体或工程，目标写成数字。",
        },
        {
          title: "把工作放上看板",
          text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。",
        },
        {
          title: "看看套餐",
          text: "[Crewmark 价格](/pricing)，以及 agent 用它做什么，见 [Claude Code 使用场景](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  mid: {
    title: "想不打销售电话就开始？",
    text: "Crewmark 的 Free 套餐给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Relevance AI 价格常见问题",
    items: [
      {
        q: "Relevance AI 有免费套餐吗？",
        a: "现在没有了。Relevance AI 的文档称，Free 套餐已对新注册用户和现有账号停用。",
      },
      {
        q: "Relevance AI 多少钱？",
        a: "它的公开价格页只列出一个套餐，Enterprise，需通过销售定制报价。它没有公布任何自助套餐的价格。",
      },
      {
        q: "Relevance AI 的企业版价格包含什么？",
        a: "自定义 Actions 和供应商额度，以及不限量的 agent、工具、用户和项目。SSO、RBAC、审计日志、agent 评估、工作时间控制和企业触发器仅限 Enterprise。",
      },
      {
        q: "我能在 Relevance AI 上用自己的 LLM key 吗？",
        a: "文档里的套餐表在“用额度使用任意 LLM”（Use any LLMs with credits）旁边列出了“自带 LLM”（Bring your own LLM，BYOK），所以你可以用额度，也可以用你自己提供商的 key。",
      },
      {
        q: "Relevance AI 能自托管吗？",
        a: "没有说明有自托管选项。Relevance AI 是托管的网页平台，也不开源。",
      },
      {
        q: "有带免费套餐的 Relevance AI 替代品吗？",
        a: "有好几个。Lindy 提供 7 天有效的 $50 额度，CrewAI 和 LangGraph 是免费的开源框架，Crewmark 有 Free 套餐。见 [Relevance AI 替代品](/alternatives/relevance-ai)。",
      },
    ],
  },
  cta: {
    title: "用你已有的 agent 免费开始。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 relevanceai.com/pricing、Relevance AI 的文档以及每个对比产品自己的价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Relevance AI 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
