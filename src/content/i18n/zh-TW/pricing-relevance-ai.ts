import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/relevance-ai; the English master is
// src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 價格：只有 Enterprise，Free 方案已停用",
    description:
      "Relevance AI 的價格頁面只列出一個方案：Enterprise，需洽業務客製報價；它的文件說 Free 方案已停用。這對你代表什麼。",
  },
  breadcrumb: "Relevance AI 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · Relevance AI",
    title: "Relevance AI 價格：只有一個需洽業務的 Enterprise 方案，沒有 Free 方案",
    lead: "Relevance AI 公開的價格頁面只列出一個方案 Enterprise，採客製價格：你需要「洽詢業務」。它的文件說 Free 方案對新註冊和現有帳號都已停用。模型方面，文件列出兩種方式：使用額度，或使用你自己的 LLM key。以下是 Enterprise 方案包含的內容、如果你今天要採購這代表什麼，以及它的價格和 Lindy、CrewAI、LangGraph、Crewmark 的比較。",
    cta: "開始使用",
    secondary: "查看方案",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Relevance AI 方案和價格",
      text: [
        "資料來自 relevanceai.com/pricing 和 Relevance AI 的文件，查核日期為 2026 年 11 月 13 日。價格頁面沒有公布任何自助方案的價格。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "Enterprise",
          "客製（「洽詢業務」）",
          "自訂 Actions 和廠商額度；agent、工具、使用者和專案數量不限。根據文件，SSO、RBAC、稽核紀錄、agent 評估、工作時間控管和企業級觸發條件僅限 Enterprise",
        ],
        ["Free", "已停用", "文件說 Free 方案對新註冊和現有帳號都已停用"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Relevance AI 實際要付多少",
      points: [
        "客製合約。唯一列出的方案是需洽業務報價的 Enterprise，所以你要和 Relevance AI 談過之後才會拿到價格。",
        "模型透過額度或你自己的 key 使用。文件中的方案表列出「用額度使用任何 LLM」和「自備 LLM」（BYOK）。Enterprise 包含自訂 Actions 和廠商額度。",
        "需要 Enterprise 的功能：SSO、RBAC、稽核紀錄、agent 評估、工作時間控管，以及 Salesforce、Snowflake 和 Zendesk 的企業級觸發條件。",
        "沒有免費的起步方式。Free 方案已對新註冊停用，在和業務洽談之前，沒有 $0 的方案可以試用。",
        "除了產品本身，業務提案還提供一支駐點部署團隊，在第 1 和第 2 週梳理使用情境，從第 3 週開始部署；另外還有「Invent」，Relevance AI 稱它為 24/7 的 AI 解決方案工程師。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 價格 vs 類似的 agent 平台",
      text: [
        "價格取自各產品自己的網站，查核日期為 2026 年 11 月 13 日。使用你自己模型的產品還需要一個模型，費用付給其供應商。",
        "並排比較：[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)、[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。更多選擇請見 [Relevance AI 替代方案](/alternatives/relevance-ai)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["Relevance AI", "Enterprise，需洽業務客製報價", "沒有：Free 方案已停用"],
        [
          "[Lindy](/personal-agent/lindy)",
          "每位活躍使用者每月 $29.99，含 3,000 額度",
          "有：$50 額度，7 天內有效，不需信用卡",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "框架免費（MIT）；AMP Enterprise 客製報價",
          "有：框架，以及每月 50 次工作流程執行的 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "框架免費（MIT）；LangSmith Plus 每個席位每月 $39",
          "有：框架，以及 $0 的 LangSmith Developer（1 個席位，每月最多 5k 筆基本追蹤）",
        ],
        [
          "[Crewmark](/pricing)",
          "免費；Pro 每月 $5 和 Team 每月 $10 即將推出",
          "有：1 個專案、最多 3 位 AI 員工、1 個人",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Relevance AI 建構託管的 agent，Crewmark 把你自己的程式設計 agent 組成團隊。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue。agent 在你已經付費的 Claude 或 ChatGPT 訂閱上執行，沒有另外的 token 帳單。",
        "Crewmark 的價格：Free 方案 $0（1 個專案、最多 3 位 AI 員工、1 個人）。每月 $5 的 Pro 和每月 $10 的 Team 即將推出。計費功能還沒做好，所以在那之前，所有帳號都可以免費使用 Crewmark。它以 GPL-3.0 授權開源，也可以自架。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)中挑選，例如 SEO、成長、社群媒體或工程，並設定量化目標。",
        },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。",
        },
        {
          title: "查看方案",
          text: "[Crewmark 價格](/pricing)，以及 agent 能用它做什麼：[Claude Code 使用情境](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  mid: {
    title: "想不經業務洽談就開始嗎？",
    text: "Crewmark 的 Free 方案給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Relevance AI 價格常見問題",
    items: [
      {
        q: "Relevance AI 有免費方案嗎？",
        a: "現在沒有了。Relevance AI 的文件說 Free 方案對新註冊和現有帳號都已停用。",
      },
      {
        q: "Relevance AI 多少錢？",
        a: "它公開的價格頁面只列出一個方案 Enterprise，需洽業務客製報價。它沒有公布任何自助方案的價格。",
      },
      {
        q: "Relevance AI 的企業價格包含什麼？",
        a: "自訂 Actions 和廠商額度，以及數量不限的 agent、工具、使用者和專案。SSO、RBAC、稽核紀錄、agent 評估、工作時間控管和企業級觸發條件僅限 Enterprise。",
      },
      {
        q: "可以在 Relevance AI 使用我自己的 LLM key 嗎？",
        a: "文件中的方案表在「用額度使用任何 LLM」旁邊列出「自備 LLM」（BYOK），所以你可以使用額度，或你自己供應商的 key。",
      },
      {
        q: "可以自架 Relevance AI 嗎？",
        a: "沒有說明提供自架選項。Relevance AI 是託管的網頁平台，也不是開源的。",
      },
      {
        q: "有附免費方案的 Relevance AI 替代方案嗎？",
        a: "有好幾個。Lindy 提供 7 天內有效的 $50 額度，CrewAI 和 LangGraph 是免費的開源框架，Crewmark 也有 Free 方案。請見 [Relevance AI 替代方案](/alternatives/relevance-ai)。",
      },
    ],
  },
  cta: {
    title: "用你已經有的 agent 免費開始。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 relevanceai.com/pricing、Relevance AI 的文件，以及每個比較產品自己的價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Relevance AI 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
