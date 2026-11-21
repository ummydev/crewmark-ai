import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/crewai; the English master is
// src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI 價格：免費框架、AMP Basic 和 Enterprise",
    description:
      "CrewAI 價格：MIT 授權的框架免費，CrewAI AMP Basic 免費、每月 50 次工作流程執行，Enterprise 為客製報價。另附模型要花你多少錢。",
  },
  breadcrumb: "CrewAI 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · agent 框架",
    title: "CrewAI 價格：免費框架、AMP 方案和模型費用",
    lead: "CrewAI 的開源 Python 框架以 MIT 授權免費提供；你向模型供應商付費，預設是 OpenAI API。CrewAI AMP 是該公司用來建構、部署和追蹤 crew 與 flow 的平台，有兩個方案：免費、每月 50 次工作流程執行的 Basic，以及客製價格的 Enterprise。CrewAI 沒有公布幣別、計費週期或超額價格。以下是各方案包含的內容、你還要付哪些費用，以及 CrewAI 和 LangGraph、AutoGen、Relevance AI、Paperclip 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "CrewAI 方案和價格",
      text: [
        "資料來自 [crewai.com](https://crewai.com) 的價格頁面和 crewAI 的 README，查核日期為 2026 年 11 月 13 日。CrewAI 把平台方案標示為「Free」（免費）和「Custom」（客製），沒有幣別或計費週期。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "CrewAI 框架（開源）",
          "免費，MIT 授權",
          "Python 函式庫，用來建構由角色導向 agent 組成的 crew 和事件驅動的 flow，在你自己的程式碼和基礎架構中執行",
        ],
        [
          "AMP Basic",
          "免費",
          "視覺化編輯器和 AI copilot、GitHub 整合、每月 50 次工作流程執行、cron 排程、human-in-the-loop（人工介入）輸入",
        ],
        [
          "AMP Enterprise",
          "客製（未列出價格）",
          "部署在 CrewAI 雲端、你自己的 VPC 或你自己的基礎架構上；SSO（MS Entra、Okta）、RBAC、專屬 VPC 和企業級連接器；cron 排程和 human-in-the-loop 輸入",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "CrewAI 實際要付多少",
      points: [
        "你的模型供應商。CrewAI 的 agent 呼叫你設定的模型 API：「預設情況下，你的 agent 會使用 OpenAI API」。也支援其他供應商和本機模型（Ollama、LM Studio）。",
        "AMP Basic 的工作流程執行次數。免費的平台方案每月上限 50 次工作流程執行。CrewAI 沒有公布超額價格。",
        "Enterprise 功能。SSO、RBAC、專屬 VPC 和企業級連接器僅限 Enterprise，價格為客製報價。",
        "執行位置。框架是一個 Python 函式庫（Python `>=3.10, <3.14`），在你自己的程式碼和基礎架構中執行。AMP 是位於 app.crewai.com 的網頁應用程式；Enterprise 可以部署在 CrewAI 雲端、你自己的 VPC 或你自己的基礎架構上。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI 價格 vs 其他 agent 框架和平台",
      text: [
        "價格取自各產品自己的價格頁面或 README，查核日期為 2026 年 11 月 13 日，以美元計。AutoGen 的 README 寫著：「本專案已封存，Microsoft 不再積極維護。」Microsoft 稱 Agent Framework 為它的直接後繼者。截至 2026 年 11 月 13 日，Relevance AI 的文件表示，它的 Free 方案對新註冊和現有帳號都已停用。",
        "並排比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)、[Paperclip vs CrewAI](/compare/paperclip-vs-crewai)。更多選擇請見 [CrewAI 替代方案](/alternatives/crewai)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        [
          "CrewAI",
          "框架免費；AMP Basic 免費；Enterprise 客製報價",
          "有：框架（MIT）和每月 50 次工作流程執行的 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "框架免費；LangSmith Plus 每個席位每月 $39",
          "有：框架（MIT）和 $0 的 LangSmith Developer（1 個席位）",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "免費（開源）；README 沒有提到付費服務",
          "有：程式碼採 MIT；README 說它已封存，Microsoft 不再積極維護",
        ],
        ["[Relevance AI](/pricing/relevance-ai)", "Enterprise，需洽業務客製報價", "沒有：它的文件說 Free 方案已停用"],
        ["[Paperclip](/compare/paperclip-vs-crewai)", "自架免費；未公布價格", "有：自架（MIT）；雲端版開放候補中"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "不是在寫 Python 應用程式？那就給 Claude Code 或 Codex 一個職位。",
      text: [
        "CrewAI 用來在你自己的 Python 程式碼中建構多 agent 工作流程。Crewmark 則是給 AI 員工團隊用的 issue 追蹤工具，適合已經在用 Claude Code 或 Codex、希望 agent 不必每次提示也能持續做一份工作的人。每位員工都有職位、KPI 和工作時間，依心跳醒來，從共用看板接手 issue。agent 用量繼續走你已經付費的 Claude 或 ChatGPT 訂閱。",
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
    title: "CrewAI 價格常見問題",
    items: [
      {
        q: "CrewAI 免費嗎？",
        a: "框架是免費的：它以 MIT 授權開源，你只需向模型供應商付費。CrewAI AMP 的 Basic 方案也免費，每月 50 次工作流程執行。",
      },
      {
        q: "CrewAI AMP 有哪些價格方案？",
        a: "兩個：Basic，標示為「Free」（免費），包含視覺化編輯器和 AI copilot、GitHub 整合、每月 50 次工作流程執行；以及 Enterprise，標示為「Custom」（客製），沒有價格。CrewAI 沒有公布幣別、計費週期或超額價格。",
      },
      {
        q: "CrewAI Enterprise 多少錢？",
        a: "CrewAI 沒有列出價格；Enterprise 標示為「Custom」（客製）。它增加了在 CrewAI 雲端、你自己的 VPC 或你自己的基礎架構上部署的選項，以及搭配 MS Entra 或 Okta 的 SSO、RBAC 和企業級連接器。",
      },
      {
        q: "CrewAI 的定價模式是什麼？",
        a: "一個由你自己執行的免費開源框架，加上按方案計價的 AMP 平台：Basic 免費，每月上限 50 次工作流程執行；Enterprise 為客製報價。模型用量由你的模型供應商另外計費。",
      },
      {
        q: "CrewAI 雲端多少錢？",
        a: "AMP 是位於 app.crewai.com 的網頁應用程式，Basic 免費，每月 50 次工作流程執行。在 CrewAI 雲端、你自己的 VPC 或你自己的基礎架構上部署，列在 Enterprise 之下，價格為客製報價。",
      },
      {
        q: "使用 CrewAI 需要 OpenAI key 嗎？",
        a: "預設情況下，CrewAI 的 agent 使用 OpenAI API。也支援其他供應商和本機模型，例如 Ollama 和 LM Studio。",
      },
    ],
  },
  cta: {
    title: "用程式碼建構 crew，或給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 crewai.com/pricing、CrewAI 的平台文件和 crewAI 的 README 查核。其他產品的價格取自它們自己的頁面，日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 crewAI, Inc. 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
