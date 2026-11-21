import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/factory; the English master is
// src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 價格：Free、Pro $20、Plus、Max 和 Teams",
    description:
      "Factory AI 價格：自備推論服務即可免費，Pro 每月 $20、Plus $100、Max $200，另有 Teams。速率限制、Extra Usage 額度和 token 的計費方式。",
  },
  breadcrumb: "Factory 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · Factory",
    title: "Factory AI 價格：Droid 方案、用量上限和 token",
    lead: "Factory 推出名為 Droids 的程式設計 agent，可在 Factory App、Droid CLI、CI 和 Factory 託管的雲端電腦上執行。只要你自備推論服務，它的 Free 方案就是 $0：用 ChatGPT、GitHub Copilot 或 OpenRouter 登入，或連接你自己的 API key。付費方案按個人計費，從每月 $20 的 Pro 到每月 $200 的 Max；Teams 是每個團隊每月 $60，另加每人每月 $40。付費方案有滾動式速率限制，Extra Usage 則是額外加購的預付額度。以下是各方案、用量和 token 的計費方式，以及它的價格和 Devin、Claude Code、Codex、OpenCode 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Factory 方案和價格",
      text: [
        "資料來自 [factory.com](https://factory.com) 的價格頁面和 Factory 的價格文件，查核日期為 2026 年 11 月 13 日。價格以美元計，依官方標示為月費（「/mo」）。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "Free",
          "每人每月 $0",
          "自備推論服務：用 ChatGPT、GitHub Copilot 或 OpenRouter 登入，或連接你自己的 API key 或自訂端點",
        ],
        [
          "Pro",
          "每人每月 $20",
          "桌面應用程式、CLI 和 SDK，可使用所有模型；5 小時、7 天和 30 天的滾動式速率限制",
        ],
        ["Plus", "每人每月 $100", "用量約為 Pro 的 5 倍；相同的滾動式速率限制"],
        ["Max", "每人每月 $200", "用量約為 Pro 的 10 倍；相同的滾動式速率限制"],
        ["Teams", "每個團隊每月 $60，另加每人每月 $40", "最多 10 個席位"],
        ["Business 和 Enterprise", "洽詢業務", "Enterprise 提供地端部署選項"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Factory 實際要付多少",
      points: [
        "Free 方案的推論。Free 方案使用你自備的推論服務：ChatGPT、GitHub Copilot 或 OpenRouter 登入，或你自己的 API key 或自訂端點。token 由該供應商或方案計費。",
        "付費方案的 Standard Usage。Pro、Plus 和 Max 各有 5 小時、7 天和 30 天的滾動式速率限制。Plus 的用量約為 Pro 的 5 倍，Max 約為 10 倍。沒用完的 Standard Usage 不會遞延。",
        "Extra Usage。需要更多用量時，使用 Extra Usage：一種最低 $10、不會過期的預付額度。",
        "Missions 需要 Extra Usage。Missions 用來規劃功能和里程碑，需要啟用 Extra Usage，碰到速率限制時會暫停。",
        "Workstreams 耗用更多 token。Pro、Plus、Max 和 Teams 上的 Workstreams（beta）比單一工作階段耗用更多 token。Business 和 Enterprise 目前還沒有這項功能。",
        "模型。Factory 列出「所有主流的前沿模型和開放權重模型，包括最新版的 GPT-5、Claude Opus 和 Sonnet、Gemini」、由開放權重模型組成的「Droid Core」，以及你自己的 API key 或本機模型（BYOK）。",
        "席位。Pro、Plus 和 Max 按個人計價。Teams 上限 10 個席位；Business 和 Enterprise 需洽業務。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory 價格 vs 其他程式設計 agent",
      text: [
        "起價取自各產品自己的價格頁面，查核日期為 2026 年 11 月 13 日，以美元計。",
        "並排比較：[Factory vs Claude Code](/compare/factory-vs-claude-code)。更多選擇請見 [Factory 替代方案](/alternatives/factory)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["Factory", "自備推論服務時 Free $0；Pro 每月 $20", "有：自備推論服務即可免費使用"],
        ["[Devin](/pricing/devin)", "Free $0；Pro 每月 $20", "有：Free 方案，配額較少"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年計費為每月 $17",
          "沒有：Claude Free 不包含；也可以用隨用隨付的 API 額度",
        ],
        [
          "Codex",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 價格計費",
          "ChatGPT Free（$0）在桌面應用程式中列出 GPT-6 Luna，「視推出進度而定」",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "agent 免費；OpenCode Go 每月 $10，Go Plus 每月 $40",
          "有：agent（MIT）和有每日請求上限的免費模型",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "保留你現有的訂閱，給你的 agent 一個職位和一塊看板。",
      text: [
        "Factory 銷售自己的 agent，附方案和用量上限。Crewmark 則是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和工作時間。它依心跳醒來，從共用看板接手 issue。agent 用量繼續走你已經付費的 Claude 或 ChatGPT 訂閱，沒有另外的 token 帳單。",
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
    title: "Factory AI 價格常見問題",
    items: [
      {
        q: "Factory AI 免費嗎？",
        a: "是的，只要你自備推論服務。Free 方案每人 $0：用 ChatGPT、GitHub Copilot 或 OpenRouter 登入，或連接你自己的 API key 或自訂端點。",
      },
      {
        q: "Factory AI 每月多少錢？",
        a: "按個人計，Pro 每月 $20、Plus $100、Max $200。Teams 是每個團隊每月 $60，另加每人每月 $40，最多 10 個席位。Business 和 Enterprise 需洽業務報價。",
      },
      {
        q: "Factory AI 的定價模式是什麼？",
        a: "按個人計費的方案，附受 5 小時、7 天和 30 天滾動式速率限制約束的 Standard Usage，另可選購 Extra Usage：最低 $10、不會過期的預付額度。沒用完的 Standard Usage 不會遞延。",
      },
      {
        q: "Factory AI 怎麼收 token 的費用？",
        a: "在 Free 方案中，token 由你自備的帳號或 API key 計費。在 Pro、Plus 和 Max 方案中，模型用量計入方案的 Standard Usage 和它的速率限制，需要更多用量時使用預付額度 Extra Usage。Workstreams 比單一工作階段耗用更多 token。",
      },
      {
        q: "Factory AI 有企業價格嗎？",
        a: "Business 和 Enterprise 需洽業務，沒有列出價格。Enterprise 提供地端部署選項。Teams 每月 $60，另加每人 $40，上限 10 個席位。",
      },
      {
        q: "Factory AI 是開源的嗎？",
        a: "不是。Droid CLI 和 Factory App 都沒有公開原始碼或開源授權；github.com/Factory-AI/factory 只有 README 和文件。開源選擇請見 [Factory 替代方案](/alternatives/factory)。",
      },
    ],
  },
  cta: {
    title: "先比較價格，再給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 factory.com/pricing 和 Factory 的價格文件查核。其他產品的價格取自它們自己的價格頁面，日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 Factory 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
