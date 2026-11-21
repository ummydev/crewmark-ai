import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/conductor; the English master is
// src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor 價格：免費 Mac 應用程式、雲端方案和 Meta 帶來的改變",
    description:
      "Conductor 可免費使用，模型用量由各 agent 的供應商計費。自 2026 年 11 月 4 日起停止註冊，Conductor Cloud 也即將關閉。",
  },
  breadcrumb: "Conductor 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · Conductor",
    title: "Conductor 價格：免費的 Mac 應用程式、雲端方案，以及 2026 年 11 月 4 日的改變",
    lead: "「Conductor 可免費使用。」它不對模型用量計費，也不轉售模型用量：Claude Code、Codex、OpenCode 和 Cursor 都使用你自己的訂閱或 API key。雲端工作區需要 Pro、Team 或 Enterprise 方案，但目前沒有列出任何價格。2026 年 11 月 4 日，Conductor 宣布加入 Meta，並關閉了新使用者註冊和下載。以下是你要付的費用、有哪些改變，以及它的價格和 Vibe Kanban、Claude Squad、Cursor Projects、Crewmark 的比較。",
    cta: "開始使用",
    secondary: "有哪些改變",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Conductor 方案和價格",
      text: [
        "資料來自 conductor.build 及其文件，查核日期為 2026 年 11 月 13 日。/pricing 頁面現在會轉址到首頁，網站上任何地方都沒有列出方案價格。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "Conductor（Mac 應用程式）",
          "免費使用",
          "Claude Code、Codex 和 OpenCode（內建）以及 Cursor Agent 並排執行，每個都在自己的 git worktree 中；diff 審查、檢查、pull request 和合併",
        ],
        [
          "Pro",
          "未列出價格；自 2026 年 11 月 4 日起，Pro 使用者可免費保留 Pro 功能",
          "雲端工作區和 Routines（依排程或由 GitHub 觸發的 agent 執行）",
        ],
        ["Team（僅限邀請）", "未列出價格", "雲端工作區和 Routines"],
        ["Enterprise", "未列出價格", "雲端工作區"],
        [
          "模型用量",
          "由各 agent 的供應商計費",
          "你現有的訂閱（例如 Claude Pro 或 Max，或 ChatGPT）或 API key",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "使用 Conductor 實際要付多少",
      points: [
        "你的 agent 供應商。Conductor 不對模型用量計費，也不轉售模型用量。每個 agent 透過其供應商帳號或 API key 計費；Cursor Agent 透過 Cursor API 執行。",
        "一台 Mac。Conductor 只支援 macOS，「目前還沒有 Windows 或 Linux 版」。agent 直接在你的機器上執行，使用你的使用者帳號權限，沒有沙箱隔離。",
        "應用程式本身不用錢。本機應用程式可免費使用。",
        "雲端工作區需要 Pro、Team 或 Enterprise 方案。自 2026 年 11 月 4 日起，免費使用者無法升級，Pro 使用者可免費保留 Pro 功能，有效訂閱者會獲得退款。",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "2026 年 11 月 4 日有哪些改變",
      text: [
        "Conductor 宣布加入 Meta。網站頁尾現在寫著「Conductor from Meta, © 2026 Meta.」如果你正在使用它，或原本打算使用，以下是重要日期：",
      ],
      points: [
        "2026 年 11 月 4 日：停止新使用者註冊和下載。免費使用者無法升級，Pro 使用者可免費保留 Pro 功能，有效訂閱者會獲得退款。",
        "2026 年 11 月 13 日：Conductor Cloud 轉為唯讀。",
        "2026 年 11 月 20 日：Conductor Cloud 關閉，並開始刪除雲端使用者資料。",
        "至 2027 年初：本機應用程式持續獲得新模型和重大錯誤修正，之後逐步停止。應用程式關閉時，所有使用者資料都會被刪除。",
        "如果你在找可以轉移過去的工具，請見 [Conductor 替代方案](/blog/conductor-alternatives)。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor 價格 vs 類似工具",
      text: [
        "價格取自各產品自己的網站，查核日期為 2026 年 11 月 13 日。使用其中任何一款，你都還要為執行的程式設計 agent 或模型付費，除非下列方案已包含。",
        "並排比較：[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor)、[Claude Squad vs Conductor](/compare/claude-squad-vs-conductor)。更多選擇請見 [Conductor 替代方案](/blog/conductor-alternatives)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        [
          "Conductor",
          "免費使用；未列出雲端方案價格",
          "有，但自 2026 年 11 月 4 日起已停止新使用者註冊和下載",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "本機應用程式免費；bloop 在 2026 年 4 月 10 日的停業公告中說訂閱已終止",
          "有：開源（Apache-2.0），由社群維護",
        ],
        ["[Claude Squad](/compare/claude-squad-vs-conductor)", "免費；沒有列出付費方案", "有：開源（AGPL-3.0）"],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 每月 $30，或每年 $300",
          "沒有：Free、Plus（每月 $8）和舊版 Hobby 不包含",
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
      title: "Conductor 讓 agent 並排執行，Crewmark 給它們一份工作和一塊看板。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue。`crewmark` CLI 可在 macOS、Linux 和 Windows 上執行，agent 使用你已經付費的 Claude 或 ChatGPT 訂閱。",
        "Crewmark 的價格：Free 方案 $0（1 個專案、最多 3 位 AI 員工、1 個人）。每月 $5 的 Pro 和每月 $10 的 Team 即將推出。計費功能還沒做好，所以在那之前，所有帳號都可以免費使用 Crewmark。它以 GPL-3.0 授權開源，也可以自架。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)中挑選，例如軟體工程師，並設定量化目標。",
        },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。",
        },
        {
          title: "查看方案",
          text: "[Crewmark 價格](/pricing)，以及 agent 能用它做什麼：[Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "要從 Conductor 搬走嗎？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板，在 macOS、Linux 或 Windows 上都能用。",
    button: "開始使用",
  },
  faq: {
    title: "Conductor 價格常見問題",
    items: [
      {
        q: "Conductor 免費嗎？",
        a: "免費。「Conductor 可免費使用」，模型用量由各 agent 的供應商計費。不過，自 2026 年 11 月 4 日起，新使用者註冊和下載都已關閉。",
      },
      {
        q: "Conductor 多少錢？",
        a: "Mac 應用程式免費。雲端工作區需要 Pro、Team（僅限邀請）或 Enterprise 方案，但這些方案目前都沒有列出價格，/pricing 頁面也會轉址到首頁。",
      },
      {
        q: "Conductor 會對模型用量收費嗎？",
        a: "不會。Conductor 不對模型用量計費，也不轉售模型用量。Claude Code、Codex、OpenCode 和 Cursor Agent 使用你自己的訂閱（例如 Claude Pro 或 Max，或 ChatGPT）或你的 API key。",
      },
      {
        q: "Conductor 是開源的嗎？還是需要購買授權？",
        a: "兩者皆非。Conductor 不是開源的（沒有公開原始碼儲存庫或授權），而應用程式可免費使用，所以也沒有授權價格。",
      },
      {
        q: "我的 Conductor Pro 訂閱會怎樣？",
        a: "自 2026 年 11 月 4 日起，Pro 使用者可免費保留 Pro 功能，有效訂閱者會獲得退款。Conductor Cloud 在 11 月 13 日轉為唯讀，並在 2026 年 11 月 20 日關閉。",
      },
      {
        q: "Conductor 應用程式還能用多久？",
        a: "本機應用程式會持續獲得新模型和重大錯誤修正，直到 2027 年初，之後逐步停止；關閉時所有使用者資料都會被刪除。請見 [Conductor 替代方案](/blog/conductor-alternatives)。",
      },
    ],
  },
  cta: {
    title: "Conductor 之後，讓你的 agent 繼續工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 conductor.build、它的文件、更新紀錄和公告，以及每個比較產品自己的價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Conductor、Meta 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
