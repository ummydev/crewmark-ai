import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# 更新 Claude Code，再為這個工作階段選模型
claude update
/model                       # 選 Claude Fable 5.2

# 或直接用它啟動工作階段
claude --model claude-fable-5-2

# Fable 5.2 的快速模式（Claude Code v2.1.321 以上）
/fast`;

const api = `# Claude API：改模型 ID
model = "claude-fable-5-1"  # 之前
model = "claude-fable-5-2"  # 之後

# 自適應思考一律開啟；用 effort 控制思考深度
# low | medium | high（預設）| xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2：跑分、價格，以及和 Opus 5.5 比較",
    description:
      "2026 年 11 月 9 日發表的 Claude Fable 5.2：新功能、Anthropic 公布的跑分、API 價格（$8/$40）與快速模式、100 萬 token 上下文、和 Opus 5.5、Fable 5.1、Mythos 5.2 的比較，以及如何在 Claude Code 中使用。",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "部落格 · Claude 模型",
    title: "Claude Fable 5.2：新功能、跑分、價格，以及和 Opus 5.5 怎麼選",
    lead: "Anthropic 在 2026 年 11 月 9 日發表了 Claude Fable 5.2，同時發表的 Claude Mythos 5.2 是同一個模型、安全限制不同。Anthropic 稱 Fable 5.2 是它針對技術工作、一般可用的最強模型：比 Fable 5.1 更快、更便宜，在 Anthropic 的程式設計和 agent 跑分上更高，還新增了快速模式。本文整理改了什麼、數字多少、價格、什麼時候該選它而不是 Opus 5.5，以及如何在 Claude Code 中使用。",
    cta: "開始使用",
    secondary: "Fable 5.2 對比 Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 一覽",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["發表日期", "2026 年 11 月 9 日（之前是 6 月的 Fable 5 和 9 月的 Fable 5.1）"],
        ["API 模型 ID", "`claude-fable-5-2`"],
        ["價格", "每百萬輸入 token $8，每百萬輸出 token $40（Fable 5.1 是 $10 和 $50）"],
        ["快速模式", "輸出最快提升到 2.5 倍，每百萬 token 輸入 $16、輸出 $80"],
        ["上下文視窗", "100 萬 token，最大輸出 128K"],
        ["思考", "自適應思考，一律開啟；effort 有 `low`、`medium`、`high`（預設）、`xhigh`、`max`"],
        ["知識截止", "2026 年 6 月"],
        ["速度", "據 Anthropic，輸出比 Fable 5.1 快最多 30%"],
        ["誰能使用", "Claude Pro、Max、Ultra、Team 和 Enterprise；所有 Claude API 使用者；Amazon Bedrock、Google Cloud 和 Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Fable 5.2 有哪些新東西",
      points: [
        "更擅長長時間的困難技術工作：Anthropic 表示它能連續好幾天處理模糊的工程任務，協調上百個、甚至上千個子 agent。",
        "更便宜：輸入和輸出都比 Fable 5.1 便宜 20%，批次處理再打五折（$4 和 $20）。",
        "更快：輸出比 Fable 5.1 快最多 30%，快速模式還能再快最多 2.5 倍，價格加倍。",
        "機器人：Anthropic 表示它操控實體機器人的能力大幅提升，包括沒有專門訓練過的任務。",
        "安全限制：內建資安與生物方面的保護。被標記的資安請求會轉給 Claude Opus 4.8，生物方面的轉給 Claude Opus 5。",
        "資料保留：Fable 系列預設需保留 30 天資料以進行安全監控；零資料保留需經 Anthropic 授權。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Claude Fable 5.2 跑分",
      text: ["來自 Anthropic 的 Fable 頁面，除非另外註明，均為開啟安全限制時的成績。這些是 Anthropic 自己公布的數字，不是第三方測試。"],
      headers: ["跑分", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0（agent 程式設計）", "49.1%（xhigh）", "32.4%（xhigh）", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2（agent 程式設計）", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1（電腦操作）", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench（業務流程）", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam（使用工具）", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim（機器人，Anthropic 內部測試）", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Claude Fable 5.2 價格",
      text: [
        "每百萬 token 的 API 價格，來自 2026 年 11 月 10 日的 Anthropic 文件。在 Claude 方案中，Fable 5.2 使用訂閱內含的用量：Pro 和 Team 標準席位最多能用每週額度的 50%。Claude Code 的快速模式從用量點數扣除。",
      ],
      headers: ["模型", "輸入", "輸出", "快取讀取", "批次（輸入 / 輸出）"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2 快速模式", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 對比 Opus 5.5：該用哪個？",
      text: ["Anthropic 自己的建議是：大部分工作先用 Opus 5.5，Opus 5.5 調高 effort 還不夠時再換 Fable 5.2。"],
      points: [
        "價格：Fable 5.2 每個 token 的價格是 Opus 5.5 的兩倍（$8 和 $40，對比 $4 和 $20），預設 effort 也是 `high`（Opus 5.5 是 `medium`），所以每次請求往往想得更多。",
        "能力：依 Anthropic 的表格，Fable 5.2 在 agent 程式設計（FrontierSWE v2 為 69.9% 對 62.3%）、科學和長時間任務上領先 Opus 5.5；電腦操作的差距較小（OSWorld 2.1 為 89.3% 對 87.2%）。",
        "單一任務成本：Anthropic 表示 `high` 的 Fable 5.2 在 FrontierCode 2.0 上和 `max` 的 Opus 5.5 幾乎持平（45.3% 對 45.5%），單一任務成本卻只有約一半。所以遇到難題時，它不一定比較貴。",
        "中途切換：只有 Fable 5.2 和 Mythos 5.2 能讀取 Fable 5.2 的思考內容，把對話從 Fable 5.2 換到 Opus 5.5，之後幾輪就會失去先前的推理。",
        "簡單原則：日常用 Opus 5.5；長時間執行的 agent 任務、難纏的 bug，以及 Opus 搞不定的工作，交給 Fable 5.2。",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 對比 Mythos 5.2，以及對比 Fable 5.1",
      points: [
        "Mythos 5.2 是同一個模型，在資安和生物方面限制較少。只有通過 Anthropic 認證計畫（例如 Cyber Verification Program）的組織能使用，價格相同。",
        "在 Anthropic 的資安和生物跑分中，Mythos 5.2 比開啟安全限制的 Fable 5.2 分數更高；其他方面兩者就是同一個模型。",
        "和 Fable 5.1 相比，Fable 5.2 更便宜、快最多 30%，在 Anthropic 的各項跑分都更高，例如 FrontierCode 2.0 為 49.1% 對 32.4%，Remote Labor Index 為 41.3% 對 17.9%。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 中使用 Claude Fable 5.2",
      steps: [
        {
          title: "更新並選擇模型",
          text: "更新 Claude Code，執行 `/model` 選 Claude Fable 5.2，或用 `--model claude-fable-5-2` 啟動工作階段。使用 Claude 方案的話，需要 Pro、Max、Ultra、Team 或 Enterprise。",
          code: claudeCode,
        },
        {
          title: "effort 先維持 high",
          text: "Anthropic 表示大部分的提升在 `high` 就已經有了。最難的長時間程式設計任務，確認有幫助後再調到 `xhigh`；`max` 留給少數不在乎時間和 token 的情況。",
        },
        {
          title: "需要速度時開快速模式",
          text: "在 Fable 5.2 上執行 `/fast`（Claude Code v2.1.321 以上）。最多快 2.5 倍、價格加倍；訂閱方案從用量點數扣除，不占方案額度，在 Bedrock、Vertex 和 Foundry 上無法使用。",
        },
        {
          title: "呼叫 API？先看不相容的變更",
          text: "自適應思考一律開啟（`budget_tokens` 和 `disabled` 會回傳 400），不支援強制工具呼叫，修改先前的對話會讓思考區塊失效，舊的 `computer_20251124` 工具改為電腦操作工具組。Claude Code 和 Agent SDK 會替你處理這些。",
          code: api,
        },
      ],
      source: { label: "來源：Anthropic 文件《What's new in Claude Fable 5.2》", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "讓 Fable 5.2 負責一份長期工作",
      text: [
        "Fable 5.2 是為連續執行好幾個小時的工作而設計的。Crewmark 把 Claude Code 工作階段變成 AI 員工，有職位、目標、工作時間和心跳；員工使用所在工作階段的模型，所以你可以讓 Fable 5.2 處理最難的工作，其餘交給 Opus 5.5。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "例如處理一堆難纏 issue 的 [AI 軟體工程師](/ai-employees/software-engineer)。",
        },
        {
          title: "在它的工作階段設定模型",
          text: "在員工的 Claude Code 對話中執行 `/model`，選 Fable 5.2。",
        },
        {
          title: "讓它跑起來",
          text: "它依心跳醒來，推進看板上的工作；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 中使用 Claude Fable 5.2" },
  mid: {
    title: "想讓 Fable 5.2 按時處理你最難的 issue？",
    text: "Crewmark 員工在你自己的 Claude Code 上執行，依心跳醒來，從看板領取下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Fable 5.2 什麼時候發表的？",
        a: "2026 年 11 月 9 日，與 Claude Mythos 5.2 一起發表。在它之前是 Fable 5（2026 年 6 月 9 日）和 Fable 5.1（2026 年 9 月 1 日）。",
      },
      {
        q: "Claude Fable 5.2 多少錢？",
        a: "API 每百萬輸入 token $8、輸出 token $40，比 Fable 5.1 的 $10 和 $50 便宜。快速模式是 $16 和 $80，批次處理是 $4 和 $20。Claude 方案從 Pro 起包含；Pro 和 Team 標準席位最多能用每週額度的 50%。",
      },
      {
        q: "Fable 5.2 比 Opus 5.5 強嗎？",
        a: "依 Anthropic 的跑分，在 agent 程式設計、科學和長時間任務上更強。但它每個 token 貴一倍，Anthropic 仍建議大部分工作從 Opus 5.5 開始。",
      },
      {
        q: "Claude Fable 5.2 的上下文視窗多大？",
        a: "100 萬 token，最多輸出 128K token。",
      },
      {
        q: "Fable 5.2 和 Mythos 5.2 有什麼不同？",
        a: "它們是同一個模型。Fable 5.2 帶有資安和生物方面的保護，所有人都能使用；Mythos 5.2 只提供給通過 Anthropic 認證計畫的組織。",
      },
      {
        q: "Claude Fable 5.2 免費嗎？",
        a: "不免費。Anthropic 列出的是 Pro、Max、Ultra、Team、Enterprise 方案和 API，沒有免費方案。",
      },
      {
        q: "Claude Fable 5.2 有系統卡嗎？",
        a: "有，Anthropic 發布了《Claude Fable 5.2 and Claude Mythos 5.2 System Card》，在它的 Fable 頁面上有連結。",
      },
    ],
  },
  cta: {
    title: "讓最新的模型負責一份長期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Anthropic 的 Fable 頁面、發表文章、Claude Platform 文件和 Claude Code 文件核對。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關聯，也未獲其背書。Claude、Claude Fable、Claude Mythos、Claude Opus 和 Claude Code 是 Anthropic 的商標。",
};
