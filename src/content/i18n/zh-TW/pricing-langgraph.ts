import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/langgraph; the English master is
// src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 價格：免費、LangSmith Plus $39、Agent Server",
    description:
      "LangGraph 價格：MIT 授權的框架免費。LangSmith Developer $0，Plus 每個席位每月 $39，含一個 Agent Server；額外的伺服器每 LSU $1.00。",
  },
  breadcrumb: "LangGraph 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · agent 框架",
    title: "LangGraph 價格：免費框架、LangSmith 方案和 Agent Server 費用",
    lead: "LangGraph 是免費的：框架以 MIT 授權開源，在你自己的應用程式內執行。要花錢的是 LangSmith，也就是 LangChain 用於追蹤、評估和部署的商業產品。Developer 方案 1 個席位 $0，Plus 每個席位每月 $39，含一個 Small Agent Server，Enterprise 為客製報價。額外的 Agent Server 按每 LSU $1.00 計量計費，模型呼叫則由你的模型供應商計費。以下是各方案、Agent Server 的費用，以及 LangGraph 和 CrewAI、AutoGen、Relevance AI、Paperclip 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "LangGraph 與 LangSmith 的方案和價格",
      text: [
        "資料來自 [langchain.com](https://www.langchain.com/langgraph) 的價格頁面和 LangChain 的文件，查核日期為 2026 年 11 月 13 日。價格以美元計；Developer 和 Plus 按月計費。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "LangGraph 框架（開源）",
          "免費，MIT 授權",
          "Python 和 JavaScript/TypeScript 函式庫，用來建構有狀態的 agent，在你自己的應用程式內執行",
        ],
        [
          "LangSmith Developer",
          "每個席位每月 $0",
          "1 個席位；每月最多 5k 筆基本追蹤（base traces），超過後隨用隨付；不含 Agent Server",
        ],
        [
          "LangSmith Plus",
          "每個席位每月 $39",
          "每月最多 10k 筆基本追蹤，超過後隨用隨付；「免費附 1 個在無伺服器託管上執行的 Small Agent Server」",
        ],
        ["LangSmith Enterprise", "客製報價，每年預先開立發票", "增加自架和混合部署選項"],
        [
          "額外的 Agent Server",
          "每 LSU $1.00，計量計費",
          "執行階段運算 0.0675 LSU/vCPU-hr、執行階段記憶體 0.0090 LSU/GiB-hr、資料庫運算 0.177 LSU/vCPU-hr、資料庫記憶體 0.025 LSU/GiB-hr",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "LangGraph 實際要付多少",
      points: [
        "你的模型供應商。LangGraph 呼叫你的程式碼使用的任何模型，而且「LangGraph 不需要 LangChain」。這些模型呼叫由你的供應商計費。",
        "超出內含額度的追蹤。Developer 每月最多包含 5k 筆基本追蹤，Plus 最多 10k 筆；超過的追蹤隨用隨付。",
        "席位。Developer 限 1 個席位。Plus 每個席位每月 $39。",
        "第一個之外的 Agent Server。Plus 包含 1 個在無伺服器託管上執行的 Small Agent Server。更多的伺服器按每 LSU $1.00 計量計費，因此執行階段運算為每 vCPU 小時 $0.0675，執行階段記憶體為每 GiB 小時 $0.009；資料庫運算為每 vCPU 小時 0.177 LSU，資料庫記憶體為每 GiB 小時 0.025 LSU。",
        "cron 工作會一直執行。Agent Server 支援依你設定的排程執行 cron 工作。LangChain 的文件建議刪除不用的 cron 工作，因為重複執行可能產生 LLM API 費用。",
        "託管位置。雲端 Agent Server「由 LangChain 在 AWS、Azure 和 GCP 上全代管」。自架和混合部署是 Enterprise 的選項。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 價格 vs 其他 agent 框架和平台",
      text: [
        "價格取自各產品自己的價格頁面或 README，查核日期為 2026 年 11 月 13 日，以美元計。AutoGen 的 README 寫著：「本專案已封存，Microsoft 不再積極維護。」Microsoft 稱 Agent Framework 為它的直接後繼者。截至 2026 年 11 月 13 日，Relevance AI 的文件表示，它的 Free 方案對新註冊和現有帳號都已停用。",
        "並排比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。更多選擇請見 [LangGraph 替代方案](/alternatives/langgraph)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        [
          "LangGraph",
          "框架免費；LangSmith Plus 每個席位每月 $39",
          "有：框架（MIT）和 $0 的 LangSmith Developer（1 個席位）",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "框架免費；AMP Basic 免費；Enterprise 客製報價",
          "有：框架（MIT）和每月 50 次工作流程執行的 AMP Basic",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "免費（開源）；README 沒有提到付費服務",
          "有：程式碼採 MIT；README 說它已封存，Microsoft 不再積極維護",
        ],
        ["[Relevance AI](/pricing/relevance-ai)", "Enterprise，需洽業務客製報價", "沒有：它的文件說 Free 方案已停用"],
        ["[Paperclip](/alternatives/paperclip)", "自架免費；未公布價格", "有：自架（MIT）；雲端版開放候補中"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "不是在做 agent 應用程式？那就給 Claude Code 或 Codex 一個職位。",
      text: [
        "LangGraph 用來在你自己的程式碼中建構有狀態的 agent。Crewmark 則是給 AI 員工團隊用的 issue 追蹤工具，適合已經在用 Claude Code 或 Codex、希望 agent 不必每次提示也能持續做一份工作的人。每位員工都有職位、KPI 和工作時間，依心跳醒來，從共用看板接手 issue。agent 用量繼續走你已經付費的 Claude 或 ChatGPT 訂閱。",
        "Crewmark 的價格：Free 方案 $0（1 個專案、最多 3 位 AI 員工、1 個人）。每月 $5 的 Pro 和每月 $10 的 Team 即將推出。計費功能還沒做好，所以在那之前，所有帳號都可以免費使用 Crewmark。它以 GPL-3.0 授權開源，也可以自架。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)中挑選，例如軟體工程師、SEO 專員或資料分析師。",
        },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。",
        },
        {
          title: "查看方案",
          text: "[Crewmark 價格](/pricing)，以及附設定方式的工作範例：[Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "已經在用 Claude Code 或 Codex 了嗎？",
    text: "Crewmark 把它變成 AI 員工，有職位、心跳和共用看板。1 個專案、最多 3 位 AI 員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "LangGraph 價格常見問題",
    items: [
      {
        q: "LangGraph 免費嗎？",
        a: "免費。LangGraph 框架以 MIT 授權開源，支援 Python 和 JavaScript/TypeScript。LangChain 的商業產品 LangSmith 也有一個 1 個席位 $0 的 Developer 方案。",
      },
      {
        q: "在雲端部署 LangGraph 要多少錢？",
        a: "部署在 LangSmith Agent Server 上執行，由 LangChain 在 AWS、Azure 和 GCP 上全代管。LangSmith Plus（每個席位每月 $39）免費包含 1 個在無伺服器託管上執行的 Small Agent Server，更多的伺服器按每 LSU $1.00 計量計費。Developer 方案不含 Agent Server。",
      },
      {
        q: "LangGraph 伺服器價格：Agent Server 要多少錢？",
        a: "Agent Server（前身為 LangSmith Deployment）以 LSU 計量，每 LSU $1.00：執行階段運算每 vCPU 小時 0.0675 LSU、執行階段記憶體每 GiB 小時 0.0090、資料庫運算每 vCPU 小時 0.177、資料庫記憶體每 GiB 小時 0.025。Plus 免費包含一個 Small Agent Server。",
      },
      {
        q: "LangSmith Plus 包含什麼？",
        a: "每個席位每月 $39，按月計費：每月最多 10k 筆基本追蹤，超過後隨用隨付，另免費包含 1 個在無伺服器託管上執行的 Small Agent Server。",
      },
      {
        q: "LangGraph 有企業價格嗎？",
        a: "LangSmith Enterprise 為客製報價，每年預先開立發票。自架和混合的 Agent Server 部署是 Enterprise 的選項。",
      },
      {
        q: "使用 LangGraph 需要 LangSmith 嗎？",
        a: "框架是一個免費的 MIT 函式庫，在你自己的應用程式內執行。LangSmith 是 LangChain 另外的商業產品，用來追蹤、評估 agent，並把它們部署到 Agent Server。",
      },
    ],
  },
  cta: {
    title: "建構你的圖，或給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 langchain.com/pricing 以及 LangChain 的 LangGraph 和 LangSmith 文件查核。其他產品的價格取自它們自己的頁面，日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 LangChain 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
