import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work 是什麼：Work 模式、費用、下載與 Codex 比較",
    description:
      "ChatGPT Work 完整解說：Work 模式和 Chat 有什麼不同、哪些方案包含它及價格、桌面應用程式，以及 Work 與 Codex、Claude Cowork 的比較。",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · OpenAI",
    title: "ChatGPT Work：OpenAI 的 Work 模式能做什麼、怎麼用",
    lead: "ChatGPT Work 是 ChatGPT 中的一種模式，用來交辦有明確成果的任務。你從 Chat 切換到 Work，描述想拿回什麼，ChatGPT 就會規劃任務，運用你的檔案、外掛、網路、瀏覽器和程式碼，交回待你審閱的成果，例如一份簡報、一張試算表、一份文件或一份分析。它和 OpenAI 的程式設計 agent Codex 共用核心能力和用量上限。本文說明它能做什麼、哪些方案包含它、如何設定、它如何在行動前先徵求你同意，以及它和 Codex、Claude Cowork、Copilot Cowork 的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT Work 是什麼",
      points: [
        "是一種模式，不是另一個 App：在 ChatGPT 裡從 Chat 切換到 Work。OpenAI 的建議是：要答案用 Chat，要完成任務用 Work。",
        "交回可審閱的成果：簡報、試算表、文件、分析和定期更新，以你的檔案、外掛、網路、瀏覽器和程式碼完成。",
        "在雲端執行：在網頁版上，任務在 OpenAI 基礎架構上的受管理雲端環境中執行，你關掉 App 後仍會繼續。在桌面應用程式中，啟用後你也可以選擇在本機使用你的檔案、應用程式和瀏覽器工作。",
        "和 Codex 共用核心：OpenAI 把 Work 描述為同樣的核心能力，搭配為日常工作設計的使用體驗。它省略了 Git 和 shell 輸出、pull request 面板等技術細節。",
        "拆分工作：ChatGPT 可以把任務中各自獨立的部分交給 subagent，你可以追蹤它們的進度。",
        "可以重複執行：排程任務，以及在網頁版和行動版上由 Gmail、Slack 或 GitHub 事件觸發的任務。",
        "OpenAI 在 2026 年 7 月 6 日至 10 日那一週的 What's new 摘要中推出了它。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work 費用：哪些方案包含它",
      text: [
        "價格取自 2026 年 11 月 13 日 OpenAI 的價格文件，以美元計。Work 和 Codex 使用相同的定價、額度和用量上限，較長或較複雜的任務可能消耗更多額度。",
      ],
      headers: ["方案", "價格", "ChatGPT Work"],
      rows: [
        ["Free", "每月 $0", "有限使用，僅限桌面應用程式；不支援排程任務"],
        ["Go", "每月 $8", "有限使用，僅限桌面應用程式；支援排程任務"],
        ["Plus", "每月 $20", "桌面版、網頁版和行動版；可加購額度"],
        ["Pro", "每月 $100 起（$100、$200 或 $500 方案）", "桌面版、網頁版和行動版；可加購額度"],
        ["Business（2 位以上使用者）", "按年計費每位使用者每月 $20，按月計費 $25", "採額度制合約時，使用工作區共用額度"],
        ["Enterprise 和 Edu", "洽詢業務", "工作區共用額度；管理員控管 Work、外掛和瀏覽器的使用權限"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 ChatGPT Work",
      steps: [
        {
          title: "選擇在哪裡使用",
          text: "Work 可在網頁版、macOS、Windows 和 Linux 的 ChatGPT 桌面應用程式，以及 iOS 和 Android 版 ChatGPT 上執行。使用 Free 和 Go 方案的話，請下載桌面應用程式：這兩個方案只能在那裡使用 Work。",
        },
        { title: "從 Chat 切換到 Work", text: "在 Work 模式中開始一項任務，描述你想拿回的成果，例如一份摘要報告、一份簡報、一份分析或一張試算表。" },
        {
          title: "提供資料來源",
          text: "上傳檔案或使用專案，並連結外掛，例如 Slack、Google Drive、SharePoint、電子郵件、行事曆、CRM 和專案追蹤工具。在桌面應用程式中，它也能在支援的地區使用本機檔案、瀏覽器擴充功能，以及 macOS 和 Windows 上的 Computer Use。",
        },
        {
          title: "挑選模型和詢問方式",
          text: "指南建議：高難度工作用 GPT-6 Astra，以較低成本處理複雜工作用 GPT-6.1 Sol，較簡單的任務用 Luna。在桌面應用程式中，先從 Ask for approval 權限模式開始。",
        },
        {
          title: "讓它重複執行",
          text: "在網頁版或桌面應用程式中從 Chat 或 Work 建立排程任務，或在網頁版和行動版上，由 Gmail、Slack 或 GitHub 事件觸發任務。同一個任務不能同時使用事件觸發和時間排程。",
        },
      ],
      source: { label: "來源：OpenAI 文件《Get started with Work》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "ChatGPT Work 如何讓你保有掌控權",
      points: [
        "ChatGPT 會顯示進度，在需要資訊或需要你核准重要動作時暫停；你可以在任務進行中回答問題或改變方向。",
        "在桌面應用程式中，權限模式有 Ask for approval（建議的起點）、Approve for me（符合條件的請求交由自動審查），以及在可用時的完整存取。沙箱會設定檔案和網路的限制。",
        "雲端瀏覽器預設在造訪新網站前先詢問（Always ask、Auto approve 或 Always allow），並可在重大動作前再次詢問。",
        "雲端任務不會沿用你電腦上的檔案、應用程式、瀏覽器工作階段或網路存取權，雲端瀏覽器也無法使用你本機的分頁、擴充功能、瀏覽紀錄或儲存的密碼。",
        "工作區管理員控管 Work、外掛、瀏覽器使用和網路存取的權限。在 Enterprise 和 Edu 工作區中，外掛預設關閉，雲端瀏覽器存取需要管理員啟用。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex、Claude Cowork 和 Copilot Cowork",
      text: [
        "資料取自各廠商自己的文件和價格頁面，已於 2026 年 11 月 13 日查核。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)。程式開發工作請看 [Claude Code vs Codex](/blog/claude-code-vs-codex) 和 [Codex 使用情境](/use-cases/codex)；Anthropic 的 agent 請看 [Claude Cowork 指南](/personal-agent/claude-cowork)。",
        "並排比較：[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)。指南：[Claude Cowork](/personal-agent/claude-cowork)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["開發者", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["用途", "最後產出可審閱成果的任務：簡報、試算表、文件、分析", "程式開發：在儲存庫中檢視、編輯和執行程式碼", "非程式的知識工作", "橫跨 Microsoft 365 的多步驟任務"],
        ["執行位置", "OpenAI 的雲端；啟用後可在桌面應用程式中於本機執行", "CLI、IDE 擴充功能和 ChatGPT 桌面應用程式；Codex Cloud", "Anthropic 的雲端；透過 Claude Desktop 存取本機檔案", "Microsoft 的雲端，搭配 OneDrive 和 SharePoint"],
        ["誰能使用", "ChatGPT 各方案；Free 和 Go 有限使用", "ChatGPT 各方案，或 OpenAI API key（不含雲端功能）", "Claude 付費方案，Pro 每月 $20 起", "Microsoft 365 Copilot 授權加上 Copilot Credits"],
        ["用量", "和 Codex 共用定價、額度和上限", "和 Work 共用定價、額度和上限", "消耗方案上限的速度比聊天快", "依使用量以 Copilot Credits 計費"],
        ["重複性工作", "排程任務；Gmail、Slack 和 GitHub 事件", "ChatGPT App 和網頁版中的排程任務", "排程任務，每小時到每週，在雲端執行", "排程提示詞；電子郵件、Teams 和連接器事件"],
        ["核准", "Ask for approval、Approve for me 或完整存取；沙箱", "Ask for approval、Approve for me 或完整存取；沙箱", "Manual、Auto 或 Skip 模式", "敏感動作前顯示附預覽的核准對話框"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "文件交給 Work，程式碼庫交給 Crewmark。",
      text: [
        "ChatGPT Work 接下一項任務，交回一份待你審閱的成果。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue，讓程式碼儲存庫裡的工程、SEO 和行銷工作依排程完成。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Codex 使用情境](/use-cases/codex)和 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 ChatGPT Work" },
  mid: {
    title: "想幫你的程式碼庫找一位 AI 同事？",
    text: "Crewmark 給你的 Codex 或 Claude Code 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "ChatGPT Work 常見問題",
    items: [
      {
        q: "ChatGPT Work 是什麼？",
        a: "ChatGPT 中用來交辦有明確成果之任務的一種模式。ChatGPT 會規劃任務，運用你的檔案、外掛、網路、瀏覽器和程式碼，交回待你審閱的成果，例如簡報、試算表、文件和分析。",
      },
      {
        q: "ChatGPT Work vs Chat：有什麼不同？",
        a: "它們是同一個 App 裡的兩種模式。OpenAI 建議要答案用 Chat，要完成任務用 Work：Work 會規劃多步驟任務，你關掉 App 後仍在雲端繼續進行，遇到重要動作時會暫停等你核准。",
      },
      {
        q: "ChatGPT Work 免費嗎？還是需要 Plus？",
        a: "Free（$0）和 Go（每月 $8）只能在桌面應用程式中有限使用 Work。Plus（每月 $20）和 Pro（每月 $100 起）可在桌面版、網頁版和行動版使用 Work，並可加購額度。Business 按年計費為每位使用者每月 $20；Enterprise 和 Edu 需透過業務洽詢。",
      },
      {
        q: "ChatGPT Work vs Codex：有什麼不同？",
        a: "它們共用核心能力、執行方式、定價、額度和用量上限。Codex 是 OpenAI 的程式設計 agent，有 CLI、IDE 擴充功能和處理儲存庫的雲端任務；Work 是為日常工作設計的使用體驗，沒有 Git 和 shell 輸出或 pull request 面板等細節。",
      },
      {
        q: "使用 ChatGPT Work 需要下載 App 嗎？",
        a: "Plus 和 Pro 不需要：Work 也能在網頁版及 iOS 和 Android 版 ChatGPT 上執行。Free 和 Go 只能在 ChatGPT 桌面應用程式中使用，它可在 macOS、Windows 和 Linux 上執行。使用本機檔案、瀏覽器擴充功能和 Computer Use 也需要桌面應用程式。",
      },
      {
        q: "學生可以使用 ChatGPT Work 嗎？",
        a: "Free 和 Go 方案可以在桌面應用程式中有限使用 Work。ChatGPT Edu 工作區以工作區共用額度使用 Work，由管理員控管 Work、外掛和瀏覽器的使用權限；Edu 價格需洽詢 OpenAI 的業務團隊。",
      },
    ],
  },
  cta: {
    title: "文件交給 Work，也給你的程式 agent 一份工作。",
    text: "Crewmark 把 Codex 和 Claude Code 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照 OpenAI 的 ChatGPT Work 和 Codex 文件及價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI、Anthropic 和 Microsoft 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
