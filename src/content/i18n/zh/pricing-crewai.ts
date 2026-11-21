import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/crewai; the English master is
// src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI 价格：免费框架、AMP Basic 和 Enterprise",
    description:
      "CrewAI 价格：MIT 框架免费，CrewAI AMP Basic 免费、每月 50 次工作流执行，Enterprise 定制报价。另附模型费用说明。",
  },
  breadcrumb: "CrewAI 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Agent 框架",
    title: "CrewAI 价格：免费框架、AMP 套餐和模型费用",
    lead: "CrewAI 的开源 Python 框架以 MIT 许可证免费提供；你向模型提供商付费，默认是 OpenAI API。CrewAI AMP 是这家公司用来构建、部署和追踪 crew 与 flow 的平台，有两个套餐：Basic 免费，每月 50 次工作流执行；Enterprise 定制报价。CrewAI 没有公布币种、计费周期或超额价格。下面是每个套餐包含什么、你还要为什么付费，以及 CrewAI 和 LangGraph、AutoGen、Relevance AI、Paperclip 的对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "CrewAI 套餐和价格",
      text: [
        "来自 [crewai.com](https://crewai.com) 的价格页和 crewAI 的 README，核对于 2026 年 11 月 13 日。CrewAI 把平台套餐的价格标为“免费”（Free）和“定制”（Custom），没有注明币种或计费周期。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "CrewAI 框架（开源）",
          "免费，MIT 许可证",
          "一个 Python 库，用于由角色化 agent 组成的 crew 和事件驱动的 flow，运行在你自己的代码和基础设施里",
        ],
        [
          "AMP Basic",
          "免费",
          "可视化编辑器和 AI copilot、GitHub 集成、每月 50 次工作流执行、cron 调度、人在回路（human-in-the-loop）输入",
        ],
        [
          "AMP Enterprise",
          "定制（未列价格）",
          "部署在 CrewAI 云端、你自己的 VPC 或你自己的基础设施上；SSO（MS Entra、Okta）、RBAC、专属 VPC 和企业连接器；cron 调度和人在回路输入",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 CrewAI 实际要付哪些钱",
      points: [
        "你的模型提供商。CrewAI 的 agent 调用你配置的模型 API：“默认情况下，你的 agent 会使用 OpenAI API”。也支持其他提供商和本地模型（Ollama、LM Studio）。",
        "AMP Basic 的工作流执行次数。免费的平台套餐每月限 50 次工作流执行。CrewAI 没有公布超额价格。",
        "Enterprise 功能。SSO、RBAC、专属 VPC 和企业连接器只在 Enterprise 中提供，价格定制。",
        "在哪里运行。框架是一个 Python 库（Python `>=3.10, <3.14`），运行在你自己的代码和基础设施里。AMP 是位于 app.crewai.com 的网页应用；Enterprise 可以部署在 CrewAI 云端、你自己的 VPC 或你自己的基础设施上。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI 与其他 agent 框架和平台的价格对比",
      text: [
        "价格取自各产品自己的价格页或 README，核对于 2026 年 11 月 13 日，以美元计。AutoGen 的 README 写着“本项目已归档，Microsoft 不再积极维护”，Microsoft 把 Agent Framework 列为它的直接继任者。截至 2026 年 11 月 13 日，Relevance AI 的文档称，其 Free 套餐已对新注册用户和现有账号停用。",
        "并排对比：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)、[Paperclip vs CrewAI](/compare/paperclip-vs-crewai)。更多选择见 [CrewAI 替代品](/alternatives/crewai)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        [
          "CrewAI",
          "框架免费；AMP Basic 免费；Enterprise 定制报价",
          "有：框架（MIT），以及每月 50 次工作流执行的 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "框架免费；LangSmith Plus 每席位每月 $39",
          "有：框架（MIT），以及 1 个席位 $0 的 LangSmith Developer",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "免费（开源）；README 未提及付费服务",
          "有：代码采用 MIT；README 称它已归档，Microsoft 不再积极维护",
        ],
        ["[Relevance AI](/pricing/relevance-ai)", "Enterprise，通过销售定制报价", "没有：它的文档称 Free 套餐已停用"],
        ["[Paperclip](/compare/paperclip-vs-crewai)", "自托管免费；未公布价格", "有：自托管（MIT）；云端版在等候名单中"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "不是在做 Python 应用？那就给 Claude Code 或 Codex 一个岗位。",
      text: [
        "CrewAI 用于在你自己的 Python 代码里构建多 agent 工作流。Crewmark 是给 AI 员工团队用的 issue 跟踪工具，面向已经在用 Claude Code 或 Codex、希望 agent 不用每次提示就能持续做一份工作的人。每名员工都有岗位、KPI 和工作时间，按心跳醒来，从共享看板上领取 issue。agent 用量仍然走你已经在付费的 Claude 或 ChatGPT 订阅。",
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
    title: "已经在用 Claude Code 或 Codex？",
    text: "Crewmark 把它变成 AI 员工，有岗位、心跳和共享看板。1 个项目、最多 3 名 AI 员工免费。",
    button: "开始使用",
  },
  faq: {
    title: "CrewAI 价格常见问题",
    items: [
      {
        q: "CrewAI 免费吗？",
        a: "框架是免费的：它以 MIT 许可证开源，你只需向模型提供商付费。CrewAI AMP 的 Basic 套餐也免费，每月 50 次工作流执行。",
      },
      {
        q: "CrewAI AMP 有哪些价格套餐？",
        a: "两个：Basic，标为“免费”（Free），包含可视化编辑器和 AI copilot、GitHub 集成、每月 50 次工作流执行；Enterprise，标为“定制”（Custom），未列价格。CrewAI 没有公布币种、计费周期或超额价格。",
      },
      {
        q: "CrewAI Enterprise 多少钱？",
        a: "CrewAI 没有列出价格；Enterprise 标为“定制”（Custom）。它增加了在 CrewAI 云端、你自己的 VPC 或你自己的基础设施上部署，用 MS Entra 或 Okta 做 SSO，以及 RBAC 和企业连接器。",
      },
      {
        q: "CrewAI 的定价模式是什么？",
        a: "一个由你自己运行的免费开源框架，加上按套餐定价的 AMP 平台：Basic 免费，每月上限 50 次工作流执行；Enterprise 定制报价。模型用量由你的模型提供商单独计费。",
      },
      {
        q: "CrewAI 云端多少钱？",
        a: "AMP 是位于 app.crewai.com 的网页应用，Basic 免费，每月 50 次工作流执行。在 CrewAI 云端、你自己的 VPC 或你自己的基础设施上部署列在 Enterprise 下，价格定制。",
      },
      {
        q: "用 CrewAI 需要 OpenAI key 吗？",
        a: "默认情况下，CrewAI 的 agent 使用 OpenAI API。也支持其他提供商和本地模型，比如 Ollama 和 LM Studio。",
      },
    ],
  },
  cta: {
    title: "用代码搭一个 crew，或者给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 crewai.com/pricing、CrewAI 的平台文档和 crewAI 的 README 核对。其他产品的价格取自它们自己同一天的页面。",
  disclaimer:
    "Crewmark 是独立产品，与 crewAI, Inc. 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
