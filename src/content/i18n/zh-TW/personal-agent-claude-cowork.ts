import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork 是什麼：價格方案、設定與 Claude Code 比較",
    description:
      "Claude Cowork 完整解說：Anthropic 在 Claude 應用程式中處理非程式工作的 agent。哪些方案包含它、如何在雲端執行、排程任務、核准機制，以及 Cowork 與 Claude Code 的差異。",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Anthropic",
    title: "Claude Cowork：Anthropic 的 AI 同事能做什麼、怎麼用",
    lead: "Claude Cowork 是 Anthropic 在 Claude 應用程式中處理知識工作的 agent。你描述想要的成果，例如一份研究報告、一張試算表、一份簡報或一個整理好的資料夾，Claude 就會規劃步驟，在你的檔案、已連結的應用程式和瀏覽器中逐一完成，再把成果交給你。任務在 Anthropic 的雲端執行，闔上筆電也會繼續進行。本文說明它能做什麼、哪些方案包含它、如何設定、它如何在行動前先徵求你同意，以及它和 Claude Code 有什麼不同。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Cowork 是什麼",
      points: [
        "處理非程式工作的 agent：研究、分析、文件、公式可正常運作的試算表、簡報和檔案處理。Anthropic 自己的常見問題把 Cowork 定位在這類工作，把 Claude Code 定位在軟體工程。",
        "在雲端執行：工作階段在 Anthropic 伺服器上的隔離環境中執行，並儲存在你的 Claude 帳號中。在 Pro、Max 和 Ultra 方案上，自 2026 年 10 月 6 日起，新任務都在雲端執行。",
        "透過 Claude Desktop 連到你自己的電腦：本機檔案、本機連接器、瀏覽器操作和電腦操作，都需要那台電腦上開著桌面應用程式。",
        "可以重複執行：排程任務可每小時、每天、每週或每個工作日執行，每次都是雲端上一個獨立的工作階段。",
        "它是 Claude 的一部分：自 2026 年 9 月起，Cowork 正逐步併入一般的 Claude 對話。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude Cowork 價格：哪些方案包含它",
      text: [
        "價格取自 2026 年 11 月 13 日的 claude.com/pricing，以美元計，未稅。Anthropic 沒有公布各方案包含多少 Cowork 用量；Pro 方案的說明卡片指出，Cowork 消耗用量上限的速度比聊天快。",
      ],
      headers: ["方案", "價格", "Claude Cowork"],
      rows: [
        ["Free", "$0", "不包含"],
        ["Pro", "每月 $20，或按年計費每月 $17（一年 $200）", "包含"],
        ["Max", "每月 $100", "包含"],
        ["Ultra", "每月 $200", "包含"],
        ["Team（2 到 150 人）", "Standard 席位按年計費每月 $20，按月計費 $25；Premium 席位 $100 或 $125", "包含；網頁版和行動版為 beta"],
        ["Enterprise", "每席位每月 $20，按年計費，最少 20 席，另加依 API 費率計算的用量", "包含；雲端工作階段、網頁版和行動版在擁有者開啟前維持關閉"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Claude Cowork",
      steps: [
        { title: "取得 Claude 付費方案", text: "Pro、Max、Ultra、Team 或 Enterprise。在 Enterprise 方案上，可能需要由擁有者開啟 Cowork。" },
        { title: "要處理本機工作，就安裝 Claude Desktop", text: "Cowork 也能在網頁版及 iOS 和 Android 上執行，但本機檔案、瀏覽器操作和電腦操作需要 macOS 或 Windows 版的 Claude Desktop（Linux 版為 beta）。" },
        { title: "描述成果，而不是步驟", text: "說清楚你要拿回什麼，以及輸入資料在哪裡：檔案、已連結的應用程式（例如 Google Drive、Gmail、Microsoft 365 或 Slack），或網路。" },
        { title: "選擇它如何徵求同意", text: "選 Manual（手動）逐一核准每個動作，或選 Auto（自動），由安全審查核准例行動作。你也可以把每個連接器工具設為一律允許、需要核准或封鎖。" },
        { title: "設成排程", text: "在任務中輸入 `/schedule`，或使用 Scheduled 頁面，選擇每小時、每天、每週、每個工作日或隨需執行。" },
      ],
      source: { label: "來源：Anthropic 說明中心《Get started with Claude Cowork》", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Claude Cowork 如何讓你保有掌控權",
      points: [
        "三種核准模式：Manual 會在動作前詢問；Auto 對每個動作進行安全審查並封鎖不安全的動作，如果一再遭到封鎖，就改回詢問你；Skip 不會詢問。Pro、Max、Ultra 和 Team 預設為 Auto，Enterprise 預設為 Manual。",
        "永久刪除檔案前會先問你，電腦操作則會在使用每個應用程式前先問你。",
        "Team 和 Enterprise 的管理員可以關閉 Auto，並要求每個具寫入能力的連接器工具都必須經過核准。",
        "你可以從桌面應用程式、網頁或手機，在任務執行中途調整方向或停止任務。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code、ChatGPT Work 和 Copilot Cowork",
      text: [
        "資料取自各廠商自己的頁面，已於 2026 年 11 月 13 日查核。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)。",
        "並排比較：[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。指南：[ChatGPT Work](/personal-agent/chatgpt-work)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["開發者", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["用途", "非程式的知識工作", "軟體工程", "最後產出待審閱成果的任務", "橫跨 Microsoft 365 的工作"],
        ["執行位置", "Anthropic 的雲端；透過 Claude Desktop 在本機執行", "預設在你的機器上；網頁版有雲端工作階段", "OpenAI 的雲端，或透過桌面應用程式在你的電腦上", "Microsoft 的雲端，搭配 OneDrive 和 SharePoint"],
        ["誰能使用", "Claude 付費方案", "Claude 付費方案", "ChatGPT 各方案；Free 和 Go 有限使用", "Microsoft 365 Copilot 授權加上 Copilot Credits"],
        ["排程", "每小時到每週，在雲端執行", "雲端和桌面排程任務、`/loop`", "排程任務和事件觸發", "排程提示詞和事件觸發的任務"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "文件交給 Cowork，程式碼庫交給 Crewmark。",
      text: [
        "Claude Cowork 處理你交給它的知識工作。Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳，讓程式碼儲存庫裡的工程、SEO 和行銷工作依排程完成，並在看板上追蹤。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)中挑選，例如 [AI SEO 專員](/ai-employees/seo-specialist)。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Claude Cowork" },
  mid: {
    title: "想幫你的程式碼庫找一位 AI 同事？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Cowork 常見問題",
    items: [
      {
        q: "Claude Cowork 是什麼？",
        a: "Anthropic 在 Claude 應用程式中處理非程式知識工作的 agent。你描述想要的成果，它就在你的檔案、已連結的應用程式和瀏覽器中完成各個步驟，再交回完成的檔案，例如文件、試算表和簡報。",
      },
      {
        q: "Claude Cowork 要多少錢？",
        a: "它隨 Claude 付費方案提供：Pro 每月 $20（按年計費則每月 $17）、Max $100、Ultra $200，以及 Team 和 Enterprise 席位。Claude Free 不包含它。",
      },
      {
        q: "Claude Cowork vs Claude Code：有什麼不同？",
        a: "Cowork 用於在 Claude 應用程式中處理研究、文件和試算表等知識工作；Claude Code 是 Anthropic 在你的程式碼儲存庫中做軟體工程的 agent。Anthropic 表示，Cowork 採用和 Claude Code 相同的架構。",
      },
      {
        q: "Claude Cowork 能在 Windows 和手機上使用嗎？",
        a: "可以。Claude Desktop 可在 macOS 和 Windows 上執行它（Linux 為 beta），Pro、Max、Ultra 和 Team 方案也能在網頁版及 iOS、Android 版 Claude 上使用。本機檔案、瀏覽器操作和電腦操作需要桌面應用程式。",
      },
      {
        q: "Claude Cowork 能依排程執行任務嗎？",
        a: "可以，所有付費方案都支援。在任務中使用 `/schedule`，或使用 Scheduled 頁面；每次執行都是雲端上一個獨立的工作階段，所以除非任務需要本機檔案，否則你的電腦可以關機。",
      },
      {
        q: "筆電闔上時 Claude Cowork 還會工作嗎？",
        a: "雲端任務會：它們在 Anthropic 的伺服器上繼續執行。需要本機檔案、本機連接器或瀏覽器的工作，要等 Claude Desktop 再次開啟後才能再存取這些資源。",
      },
    ],
  },
  cta: {
    title: "文件交給 Cowork，也給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照 claude.com/product/cowork、claude.com/pricing 和 Anthropic 說明中心查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI 和 Microsoft 皆無關聯，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
