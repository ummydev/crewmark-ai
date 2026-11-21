import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/langgraph; the English master is
// src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 价格：免费、LangSmith Plus $39、Agent Server",
    description:
      "LangGraph 价格：MIT 框架免费。LangSmith Developer $0，Plus 每席位每月 $39、含一个 Agent Server，额外的服务器按每 LSU $1.00 计费。",
  },
  breadcrumb: "LangGraph 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Agent 框架",
    title: "LangGraph 价格：免费框架、LangSmith 套餐和 Agent Server 费用",
    lead: "LangGraph 是免费的：框架以 MIT 许可证开源，运行在你自己的应用里。要花钱的是 LangSmith，也就是 LangChain 用于追踪、评估和部署的商业产品。Developer 一个席位 $0，Plus 每席位每月 $39、含一个 Small Agent Server，Enterprise 定制报价。额外的 Agent Server 按每 LSU $1.00 计量计费，模型调用由你的模型提供商计费。下面是每个套餐、Agent Server 的费用，以及 LangGraph 和 CrewAI、AutoGen、Relevance AI、Paperclip 的对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "LangGraph 和 LangSmith 套餐与价格",
      text: [
        "来自 [langchain.com](https://www.langchain.com/langgraph) 的价格页和 LangChain 的文档，核对于 2026 年 11 月 13 日。价格以美元计；Developer 和 Plus 按月计费。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "LangGraph 框架（开源）",
          "免费，MIT 许可证",
          "一个 Python 和 JavaScript/TypeScript 库，用于构建有状态的 agent，运行在你自己的应用里",
        ],
        ["LangSmith Developer", "每席位每月 $0", "1 个席位；每月最多 5k 条基础 trace，超出后按量付费；不含 Agent Server"],
        [
          "LangSmith Plus",
          "每席位每月 $39",
          "每月最多 10k 条基础 trace，超出后按量付费；“包含 1 个部署在无服务器托管上的 Small Agent Server，不另收费”",
        ],
        ["LangSmith Enterprise", "定制，按年预付开票", "增加自托管和混合部署选项"],
        [
          "额外的 Agent Server",
          "每 LSU $1.00，按量计费",
          "运行时计算 0.0675 LSU/vCPU-小时，运行时内存 0.0090 LSU/GiB-小时，数据库计算 0.177 LSU/vCPU-小时，数据库内存 0.025 LSU/GiB-小时",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "用 LangGraph 实际要付哪些钱",
      points: [
        "你的模型提供商。LangGraph 调用你的代码所用的任何模型，而且“LangGraph 不依赖 LangChain。”这些模型调用由你的提供商计费。",
        "超出包含量的 trace。Developer 每月包含最多 5k 条基础 trace，Plus 最多 10k 条；超出部分按量付费。",
        "席位。Developer 限 1 个席位。Plus 每席位每月 $39。",
        "第一个之后的 Agent Server。Plus 包含 1 个部署在无服务器托管上的 Small Agent Server。更多的服务器按每 LSU $1.00 计量计费，所以运行时计算为每 vCPU 小时 $0.0675，运行时内存为每 GiB 小时 $0.009；数据库计算为每 vCPU 小时 0.177 LSU，数据库内存为每 GiB 小时 0.025 LSU。",
        "cron 任务会一直运行。Agent Server 支持按你设定的计划运行 cron 任务。LangChain 的文档建议删除不用的 cron 任务，因为周期性运行可能产生 LLM API 费用。",
        "托管在哪里。云端 Agent Server“由 LangChain 在 AWS、Azure 和 GCP 上完全托管”。自托管和混合部署是 Enterprise 的选项。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 与其他 agent 框架和平台的价格对比",
      text: [
        "价格取自各产品自己的价格页或 README，核对于 2026 年 11 月 13 日，以美元计。AutoGen 的 README 写着“本项目已归档，Microsoft 不再积极维护”，Microsoft 把 Agent Framework 列为它的直接继任者。截至 2026 年 11 月 13 日，Relevance AI 的文档称，其 Free 套餐已对新注册用户和现有账号停用。",
        "并排对比：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。更多选择见 [LangGraph 替代品](/alternatives/langgraph)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        [
          "LangGraph",
          "框架免费；LangSmith Plus 每席位每月 $39",
          "有：框架（MIT），以及 1 个席位 $0 的 LangSmith Developer",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "框架免费；AMP Basic 免费；Enterprise 定制报价",
          "有：框架（MIT），以及每月 50 次工作流执行的 AMP Basic",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "免费（开源）；README 未提及付费服务",
          "有：代码采用 MIT；README 称它已归档，Microsoft 不再积极维护",
        ],
        ["[Relevance AI](/pricing/relevance-ai)", "Enterprise，通过销售定制报价", "没有：它的文档称 Free 套餐已停用"],
        ["[Paperclip](/alternatives/paperclip)", "自托管免费；未公布价格", "有：自托管（MIT）；云端版在等候名单中"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "不是在做 agent 应用？那就给 Claude Code 或 Codex 一个岗位。",
      text: [
        "LangGraph 用于在你自己的代码里构建有状态的 agent。Crewmark 是给 AI 员工团队用的 issue 跟踪工具，面向已经在用 Claude Code 或 Codex、希望 agent 不用每次提示就能持续做一份工作的人。每名员工都有岗位、KPI 和工作时间，按心跳醒来，从共享看板上领取 issue。agent 用量仍然走你已经在付费的 Claude 或 ChatGPT 订阅。",
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
    title: "LangGraph 价格常见问题",
    items: [
      {
        q: "LangGraph 免费吗？",
        a: "免费。LangGraph 框架以 MIT 许可证开源，支持 Python 和 JavaScript/TypeScript。LangChain 的商业产品 LangSmith 也有一个 1 个席位 $0 的 Developer 套餐。",
      },
      {
        q: "在云端部署 LangGraph 要多少钱？",
        a: "部署运行在 LangSmith Agent Server 上，由 LangChain 在 AWS、Azure 和 GCP 上完全托管。LangSmith Plus（每席位每月 $39）包含 1 个部署在无服务器托管上的 Small Agent Server，不另收费，更多服务器按每 LSU $1.00 计量计费。Developer 套餐不含 Agent Server。",
      },
      {
        q: "LangGraph 服务器价格：Agent Server 多少钱？",
        a: "Agent Server（原 LangSmith Deployment）按 LSU 计量，每 LSU $1.00：运行时计算每 vCPU 小时 0.0675 LSU，运行时内存每 GiB 小时 0.0090，数据库计算每 vCPU 小时 0.177，数据库内存每 GiB 小时 0.025。Plus 包含一个 Small Agent Server，不另收费。",
      },
      {
        q: "LangSmith Plus 包含什么？",
        a: "每席位每月 $39，按月计费：每月最多 10k 条基础 trace，超出后按量付费，另含 1 个部署在无服务器托管上的 Small Agent Server，不另收费。",
      },
      {
        q: "LangGraph 有企业版价格吗？",
        a: "LangSmith Enterprise 定制报价，按年预付开票。自托管和混合部署的 Agent Server 是 Enterprise 的选项。",
      },
      {
        q: "用 LangGraph 必须用 LangSmith 吗？",
        a: "框架是一个免费的 MIT 库，运行在你自己的应用里。LangSmith 是 LangChain 单独的商业产品，用于追踪、评估以及把 agent 部署到 Agent Server。",
      },
    ],
  },
  cta: {
    title: "搭好你的图，或者给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、KPI、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 langchain.com/pricing 以及 LangChain 的 LangGraph 和 LangSmith 文档核对。其他产品的价格取自它们自己同一天的页面。",
  disclaimer:
    "Crewmark 是独立产品，与 LangChain 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
