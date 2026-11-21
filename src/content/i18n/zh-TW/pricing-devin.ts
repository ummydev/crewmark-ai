import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/devin; the English master is
// src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin 價格 2026：Free、Pro $20、Max $200 和 Teams",
    description:
      "Devin 價格：Free $0、Pro 每月 $20、Max $200，另有 Teams 和 Enterprise。配額、隨需額度和席位怎麼算，以及 Devin 和其他工具的價格比較。",
  },
  breadcrumb: "Devin 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · Cognition",
    title: "Devin 價格：每個方案，以及方案之外要付的費用",
    lead: "Devin 是 Cognition 的 AI 軟體工程師，有一個 $0 的 Free 方案，配額較少。Pro 每月 $20，Max 每月 $200，兩者都只供一位使用者。Teams 的標價是「團隊方案每月 $80 + 每個完整開發者席位每月 $40」，Enterprise 則需洽業務。每個自助方案都附有每日和／或每週配額；超過配額後，用預付的隨需額度付費。以下是各方案、額外費用，以及 Devin 的價格和 Factory、Claude Code、Codex、Cursor Projects、Crewmark 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Devin 方案和價格",
      text: [
        "資料來自 [devin.ai](https://devin.ai) 的價格頁面和 Devin 的計費文件，查核日期為 2026 年 11 月 13 日。價格以美元計。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        ["Free", "$0", "配額較少，可用模型有限"],
        ["Pro", "每月 $20", "Devin Cloud、可使用所有模型、超出部分按 API 價格計費；一位使用者"],
        ["Max", "每月 $200", "更高的配額；一位使用者"],
        [
          "Teams",
          "「團隊方案每月 $80 + 每個完整開發者席位每月 $40」",
          "最多 100 位使用者；「Free mode」（SWE-2），每位成員最多 2 個同時執行的雲端工作階段",
        ],
        ["Enterprise", "「歡迎洽談」", "VPC 和專屬部署"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Devin 實際要付多少",
      points: [
        "先用配額。Devin 的自助方案採用每日和／或每週配額。",
        "再用預付額度。超出配額的用量從預付的隨需額度扣除。在 Pro 方案中，額外用量按 API 價格計費。",
        "GPT 模型可以走你的 ChatGPT 方案。Pro、Max 和 Teams 可以連結 ChatGPT 方案，用來支付 GPT 模型的用量。",
        "可用模型依方案而定。Free 可用的模型有限；Pro 可使用所有模型。Devin 使用 Cognition 的 SWE-2，加上「來自 OpenAI、Claude、Gemini 和 SpaceXAI 的前沿模型，以及領先的開源模型」，並由 Adaptive 路由器為每項任務挑選模型。",
        "席位。Pro 和 Max 是單人方案。Teams 最多 100 位成員，更大的團隊會被引導到 Enterprise。",
        "Teams 的額度。在 Teams 方案中，共用的隨需額度用完時，Automations 就會停止。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 價格 vs 其他程式設計 agent",
      text: [
        "起價取自各產品自己的價格頁面，查核日期為 2026 年 11 月 13 日，以美元計。不包含模型用量的方案，模型費用由你付給模型供應商。",
        "並排比較：[Devin vs Claude Code](/compare/devin-vs-claude-code)、[Devin vs Codex](/compare/devin-vs-codex)。更多選擇請見 [Devin 替代方案](/blog/devin-alternatives)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["Devin", "Free $0；Pro 每月 $20", "有：Free 方案，配額較少"],
        ["[Factory](/pricing/factory)", "自備推論服務時 Free $0；Pro 每月 $20", "有：自備推論服務即可免費使用"],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年計費為每月 $17",
          "沒有：Claude Free 不包含；也可以用隨用隨付的 API 額度",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 價格計費",
          "ChatGPT Free（$0）在桌面應用程式中列出 GPT-6 Luna，「視推出進度而定」",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 每月 $30，或每年 $300",
          "沒有：Free、Plus 和舊版 Hobby 不包含",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0；Pro 每月 $5 即將推出",
          "有：1 個專案，最多 3 位 AI 員工；agent 用量付給你的供應商",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "已經在付費使用 Claude Code 或 Codex？給它一份工作和一塊看板。",
      text: [
        "Devin 是獨立的 agent，依方案配額和額度計費。Crewmark 則是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和工作時間。它依心跳醒來，從共用看板接手 issue。agent 用量繼續走你已經付費的 Claude 或 ChatGPT 訂閱。",
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
    title: "已經在付費使用 Claude 或 ChatGPT 了嗎？",
    text: "Crewmark 把你的 Claude Code 或 Codex 變成 AI 員工，有職位、心跳和共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Devin 價格常見問題",
    items: [
      {
        q: "Devin 免費嗎？",
        a: "有一個 $0 的 Free 方案，配額較少，可用模型有限。每月 $20 的 Pro 加上 Devin Cloud，並可使用所有模型。",
      },
      {
        q: "Devin 每月多少錢？",
        a: "Pro 每月 $20，Max 每月 $200，兩者都只供一位使用者。Teams 的標價是「團隊方案每月 $80 + 每個完整開發者席位每月 $40」，最多 100 位使用者。Enterprise 標示為「歡迎洽談」。價格以美元計。",
      },
      {
        q: "Devin 的定價模式是什麼？",
        a: "一個附每日和／或每週配額的方案，加上用來支付超出部分的預付隨需額度。在 Pro 方案中，額外用量按 API 價格計費。Teams 另有團隊費用和每個完整開發者席位的費用。",
      },
      {
        q: "Devin 的 Teams 和 Enterprise 方案怎麼運作？",
        a: "Teams 最多 100 位成員，共用的隨需額度用完時，它的 Automations 就會停止。更大的團隊會被引導到 Enterprise，價格需洽業務，提供 VPC 和專屬部署。",
      },
      {
        q: "可以在 Devin 上使用我的 ChatGPT 方案嗎？",
        a: "可以，限 Pro、Max 和 Teams。連結的 ChatGPT 方案可以支付 GPT 模型的用量。",
      },
      {
        q: "Devin 是開源的嗎？",
        a: "不是。Devin 沒有公開原始碼或開源授權；github.com/CognitionAI/devin-cli 存放的是安裝套件、文件和腳本。開源選擇請見 [Devin 替代方案](/blog/devin-alternatives)。",
      },
    ],
  },
  cta: {
    title: "先比較價格，再給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 devin.ai/pricing 和 Devin 的計費文件查核。其他產品的價格取自它們自己的價格頁面，日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 Cognition 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
