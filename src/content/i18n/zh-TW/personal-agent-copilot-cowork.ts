import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork：費用、Credits、授權與 Claude Cowork 比較",
    description:
      "Microsoft Copilot Cowork 完整解說：這個 Microsoft 365 agent 能做什麼、Copilot Credit 費用、授權、技能、設定方式，以及 Copilot Cowork 與 Claude Cowork 的比較。",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Microsoft",
    title: "Copilot Cowork：Microsoft 為 Microsoft 365 打造的 agent 能做什麼、如何計費",
    lead: "Copilot Cowork 是 Microsoft 365 Copilot 中的一個 agent，能在 Microsoft 365 中完成多步驟任務。它會寄送電子郵件、安排會議、建立和編輯 Word、Excel、PowerPoint 和 PDF 檔案、在 Teams 中發文、管理 OneDrive 和 SharePoint 檔案、搜尋你的組織並進行深度研究，執行敏感動作前會先徵求你的核准。它在 2026 年 6 月對工作和學校帳戶正式推出。本文說明它能做什麼、授權和 Copilot Credits 如何運作、如何設定、核准機制如何運作，以及它和 Claude Cowork、Claude Code、Codex 的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Copilot Cowork 是什麼、用來做什麼",
      text: [
        "Microsoft 把 Cowork 描述為一個代理式（agentic）系統，代表你在 Microsoft 365 中完成多步驟任務。它的預期用途包括：在一段對話中研究某個主題、撰寫文件並寄給相關人員；定期的簡報和報告；以及對收到的電子郵件或 Teams 訊息做出反應的任務。",
      ],
      points: [
        "在 Microsoft 的雲端、一個隔離的環境中執行。檔案在 OneDrive 和 SharePoint 中建立和讀取；它無法存取你本機裝置上的檔案。",
        "可以使用你的瀏覽器：在網頁版 Cowork 上，瀏覽器任務會在你自己裝置上一個隱藏的 Microsoft Edge 分頁中執行，沿用你現有的登入狀態。",
        "使用多家廠商的模型：模型選擇器預設為 Auto，依租用戶設定提供 GPT、Claude 和 Grok 模型。位於 EU Data Boundary 的租用戶只能使用 GPT 模型。",
        "技能和外掛：你可以在 OneDrive 中以 `SKILL.md` 檔案加入最多 50 個自訂技能。適用於 Cowork 的角色和產業外掛包括 Accounting、Finance 和 Capital Markets；其他外掛和連接器涵蓋 Dynamics 365、Jira、Salesforce、ServiceNow、SAP ERP、Workday HCM、Zendesk 和 MCP 應用程式。",
        "可以重複執行：每位使用者最多 25 個以一般文字撰寫的排程提示詞，另有事件驅動的任務，會在收到符合條件的電子郵件或有人在 Teams 發布訊息時執行。",
        "追蹤任務：Tasks 檢視可依 In progress、Needs input、Done 和 Failed 篩選，Automations 頁面列出排程任務和事件驅動的任務，Projects（2026 年 10 月）則把相關的任務、指示和檔案放在一起。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork 費用、Credits 和授權",
      text: [
        "資料取自 Microsoft Learn、Microsoft Support 和 Microsoft 的《Copilot Credits Guide》（2026 年 11 月），已於 2026 年 11 月 13 日查核，以美元計。Cowork 依用量以 Copilot Credits 計費，另需 Microsoft 365 Copilot 授權。每項任務沒有固定的 Credit 費用：會隨模型、執行時間、脈絡和使用的工具而不同。",
      ],
      headers: ["項目", "費用或條件"],
      rows: [
        ["Microsoft 365 Copilot 授權", "工作或學校帳戶必須具備，並指派給使用者；Cowork 文件未說明它的價格"],
        ["Copilot Credits，隨用隨付", "每個 Copilot Credit $0.01，每月事後計費"],
        ["Copilot Credit Pre-Purchase Plan（P3，預購方案）", "預先支付的一年期額度，折扣從 5%（300,000 個 Credits）到 20%（300,000,000 個 Credits）；未用完的 Credits 在期滿時失效"],
        ["管理員設定", "啟用 Cowork、開啟依用量計費，並設定一個選取 Cowork 的支出原則；管理員可以為每位使用者或每個群組設定 Credit 上限"],
        ["個人 Microsoft 帳戶", "預覽版；需要符合資格的 Microsoft 365 訂閱，價格未說明"],
        ["教育版", "教職員可以使用；學生不符合資格"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Copilot Cowork",
      steps: [
        {
          title: "取得授權",
          text: "使用工作或學校帳戶時，你需要被指派一份 Microsoft 365 Copilot 授權。個人帳戶目前為預覽版，需要符合資格的 Microsoft 365 訂閱。",
        },
        {
          title: "請管理員開啟",
          text: "管理員啟用 Cowork、開啟依用量計費，並透過選取 Cowork 的支出原則給你存取權。要使用瀏覽器，還需要啟用 Cowork Browsing。",
        },
        {
          title: "在你工作的地方開啟 Cowork",
          text: "網頁版（建議使用 Edge 或 Chrome）、Windows 和 macOS 的 Microsoft Copilot 桌面應用程式、iOS 和 Android 的行動應用程式，或在 Outlook 和 Teams 中。",
        },
        {
          title: "描述任務",
          text: "例如研究某個主題、撰寫一份文件，並寄給需要的人。模型可以維持 Auto 或自行挑選；推理強度預設為 Medium。",
        },
        {
          title: "加入技能和自動化",
          text: "把自訂技能以 `SKILL.md` 檔案放在 OneDrive，用一般文字撰寫排程提示詞，或設定任務在收到符合條件的電子郵件或 Teams 訊息時執行。",
        },
      ],
      source: { label: "來源：Microsoft Learn《Copilot Cowork get started》", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Copilot Cowork 如何讓你保有掌控權",
      points: [
        "在寄送電子郵件、在 Teams 發文或安排會議等敏感動作之前，Cowork 會顯示附預覽的核准對話框。中風險和高風險動作會標示風險等級。",
        "你可以只核准這一次、在這段對話剩下的時間裡略過類似動作的提示（電子郵件和 Teams 可限定於某位收件者、某個網域或一律適用），或取消。",
        "事件驅動的任務預設為先草擬、再核准，你也可以暫停、繼續或取消任何任務。",
        "它無法刪除 OneDrive 或 SharePoint 中的檔案或資料夾，遇到 CAPTCHA、密碼、MFA 驗證碼和帳戶變更時，會把瀏覽器交還給你。",
        "管理員透過支出原則控管存取權，為每位使用者或每個群組設定 Credit 上限，並可以關閉某些模型系列，包括 Anthropic 的模型。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork、Claude Code 和 Codex",
      text: [
        "資料取自各廠商自己的文件和價格頁面，已於 2026 年 11 月 13 日查核。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)；另請參見 [Claude Cowork 指南](/personal-agent/claude-cowork)和 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        "並排比較：[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio)。指南：[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["開發者", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["用途", "橫跨 Microsoft 365 的多步驟任務", "非程式的知識工作", "程式開發：讀取你的程式碼庫、編輯檔案、執行指令", "程式開發：在儲存庫中檢視、編輯和執行程式碼"],
        ["執行位置", "Microsoft 的雲端，搭配 OneDrive 和 SharePoint；無法存取本機檔案", "Anthropic 的雲端；透過 Claude Desktop 存取本機檔案", "你機器上的終端機、IDE 和桌面應用程式；網頁版有雲端工作階段", "CLI、IDE 擴充功能和 ChatGPT 桌面應用程式；Codex Cloud"],
        ["模型", "GPT、Claude 和 Grok 模型，依租用戶設定", "Claude 模型", "Claude 模型", "OpenAI 模型"],
        ["付費方式", "Microsoft 365 Copilot 授權加上 Copilot Credits", "Claude 付費方案，Pro 每月 $20 起", "Claude 付費方案，Pro 每月 $20 起；或 API 額度", "ChatGPT 方案，例如每月 $20 的 Plus；或 OpenAI API key"],
        ["重複性工作", "排程提示詞；電子郵件、Teams 和連接器事件", "排程任務，每小時到每週，在雲端執行", "雲端和桌面排程任務、`/loop`", "排程任務；Gmail、Slack 和 GitHub 事件"],
        ["核准", "敏感動作前顯示附預覽的核准對話框", "Manual、Auto 或 Skip 模式", "從 `default` 到 `bypassPermissions` 的權限模式", "Ask for approval、Approve for me 或完整存取"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "Microsoft 365 交給 Cowork，儲存庫交給 Crewmark。",
      text: [
        "Copilot Cowork 在 Outlook、Teams、OneDrive 和 SharePoint 之間完成任務。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue，讓程式碼儲存庫裡的工程、SEO 和行銷工作依排程持續推進。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Copilot Cowork" },
  mid: {
    title: "想幫你的程式碼庫找一位 AI 同事？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Copilot Cowork 常見問題",
    items: [
      {
        q: "Copilot Cowork 是什麼？",
        a: "Microsoft 365 Copilot 中的一個 agent，能在 Microsoft 365 中完成多步驟任務：寄送電子郵件、安排會議、建立和編輯 Word、Excel、PowerPoint 和 PDF 檔案、在 Teams 中發文、管理 OneDrive 和 SharePoint 檔案、搜尋你的組織並進行深度研究。執行敏感動作前，它會先徵求你的核准。",
      },
      {
        q: "Copilot Cowork 要多少錢？",
        a: "用量以 Copilot Credits 計費，另需 Microsoft 365 Copilot 授權。隨用隨付為每個 Credit $0.01，每月事後計費；一年期的預購方案提供 5% 到 20% 的折扣。每項任務消耗的 Credits 會隨模型、執行時間、脈絡和使用的工具而不同。",
      },
      {
        q: "Copilot Cowork 需要什麼授權？",
        a: "工作或學校帳戶需要：指派給你的 Microsoft 365 Copilot 授權、已啟用的 Cowork，以及由管理員開啟的依用量計費，並有一個選取 Cowork 的支出原則。個人 Microsoft 帳戶目前為預覽版，需要符合資格的 Microsoft 365 訂閱。在教育機構中，教職員可以使用，學生不行。",
      },
      {
        q: "如何登入 Copilot Cowork？",
        a: "用具有存取權的帳戶登入：工作或學校帳戶（已正式推出）或個人 Microsoft 帳戶（預覽版）。Cowork 可在網頁版、Windows 和 macOS 的 Microsoft Copilot 桌面應用程式、iOS 和 Android 的行動應用程式，以及 Outlook 和 Teams 中使用。",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot：有什麼不同？",
        a: "Copilot Cowork 是 Microsoft 365 Copilot 中的一個 agent。使用它需要 Microsoft 365 Copilot 授權加上依用量計費，因為 Cowork 的用量是在授權之外另以 Copilot Credits 計費。",
      },
      {
        q: "Copilot Cowork vs Claude Cowork：有什麼不同？",
        a: "Copilot Cowork 在 Microsoft 365 中工作，檔案存放在 OneDrive 和 SharePoint，無法存取本機檔案，並在授權之外以 Copilot Credits 計費。Claude Cowork 是 Anthropic 在 Claude 應用程式中的 agent，隨 Claude 付費方案提供，Pro 每月 $20 起，並透過 Claude Desktop 存取本機檔案。依租用戶設定，Copilot Cowork 的模型選擇器也可能包含 Claude 模型。",
      },
    ],
  },
  cta: {
    title: "Microsoft 365 的任務交給 Cowork，也給你的程式 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 Microsoft Learn 的 Copilot Cowork 文件、Microsoft 的《Copilot Credits Guide》和 Microsoft Support 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Microsoft、Anthropic 和 OpenAI 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
