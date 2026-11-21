import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI 是什麼：助理功能、價格、額度與設定",
    description:
      "Lindy AI 完整解說：處理收件匣、行事曆、會議和 Slack 的託管助理。額度制價格、例行程序、核准機制、在哪裡使用，以及 Lindy 與 Relevance AI 的比較。",
  },
  breadcrumb: "Lindy",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Lindy",
    title: "Lindy AI：這個助理能做什麼、要多少錢、如何設定",
    lead: "Lindy 自稱是一位 AI 員工，能在你連結的工具之間完成工作。它是一個託管助理，對每位使用者來說是個人行政助理，在 Slack 中則是共用的隊友。它處理收件匣、行事曆、會議、研究、報告和後續追蹤，以例行程序執行定期工作，任何會對外產生影響的動作都會先等你核准。本文說明它能做什麼、額度制價格如何運作、如何設定、核准機制如何運作，以及它和 Relevance AI、Grok Bot 的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Lindy 是什麼",
      points: [
        "一個助理，而不是 agent 建構工具：文件描述的是每個工作區一個 Lindy。它的行銷訴求涵蓋許多職位，例如付費廣告、SEO 和內容、記帳、招募和客服。",
        "兩種使用方式：私下作為你的行政助理，透過 iMessage、電子郵件或 Slack 私訊使用；或作為團隊可在 Slack 中 @提及的共用隊友，幫忙研究、撰寫報告或更新 CRM。",
        "它會學習：40 多個內建技能加上你自己的技能、可編輯的記憶，以及 Watch and Learn，你只要示範一次任務。",
        "以例行程序重複工作：每個例行程序都有觸發條件（排程或事件）、提示詞和目的地。內建例行程序涵蓋每日簡報、草擬和標記電子郵件、跟進提醒，以及會議錄音、會前準備和安排會議。",
        "它會依任務挑選模型，你也可以自己選擇模型。",
        "它是託管服務：Lindy 在雲端執行，由 Crivello Corp（以 Lindy 名義營業）開發。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Lindy 價格：額度與席位",
      text: [
        "資料取自 2026 年 11 月 13 日的 lindy.ai/pricing。頁面未顯示按年計費。工作區中的每位活躍使用者都會計費，包括只在 Slack 中 @提及 Lindy 的人，每月額度不會累積到下個月。",
      ],
      headers: ["選項", "價格", "內容"],
      rows: [
        ["免費開始", "$0，不需要信用卡", "7 天內有效的 $50 額度；每位成員只能享有一次免費週"],
        ["每位活躍使用者", "每月 $29.99 起", "每位活躍使用者 3,000 額度，由團隊共用"],
        ["更高的額度級距", "最高每月 $9,999.50", "最多 1,750,000 額度"],
        ["加購", "每 1,000 額度 $10", "額度池用完時，消耗額度的動作會暫停，直到下個週期或加購"],
        ["Enterprise", "客製", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Lindy",
      steps: [
        { title: "用免費額度開始", text: "免費開始方案提供 $50 額度，7 天內有效，不需要信用卡。" },
        {
          title: "選擇和它對話的地方",
          text: "Slack、電子郵件、iMessage 和簡訊、電話、Gmail 中的 Chrome 擴充功能，或 Lindy 的網頁版 Home 頁面，上面會顯示 Lindy 最近做了什麼。Microsoft Teams 標示為即將推出。",
        },
        {
          title: "連結你的工具",
          text: "Gmail、Google 日曆、Google Meet、Zoom 和 Microsoft Teams 的會議錄音、MCP 伺服器，以及儲存的 API 憑證。",
        },
        { title: "教它你的工作方式", text: "使用內建技能、加入你自己的技能、編輯它的記憶，或用 Watch and Learn 示範一次任務。" },
        {
          title: "設定例行程序",
          text: "為每個例行程序設定觸發條件、提示詞和目的地，或從內建的例行程序開始，例如每日簡報。工作區例行程序透過 Slack 執行，只有管理員能設定。",
        },
      ],
      source: { label: "來源：Lindy 文件", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Lindy 如何讓你保有掌控權",
      points: [
        "任何會對外產生影響的動作都會等你核准，例如寄送電子郵件、更新工單、在其他頻道發文或發布文件。",
        "從核准來源進行的唯讀查詢不需要核准。",
        "管理員可以為每個席位設定額度上限，而且只有管理員能設定工作區例行程序。",
        "額度池用完時，Lindy 會暫停消耗額度的動作，直到下個週期或加購。",
        "它的記憶可以編輯。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI 和 Grok Bot",
      text: [
        "資料取自各廠商自己的網站、價格頁面和文件，已於 2026 年 11 月 13 日查核。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)；另請參見 [Grok Bot 指南](/personal-agent/grok-bot)。",
        "並排比較：[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。指南：[Grok Bot](/personal-agent/grok-bot)。",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["開發者", "Crivello Corp（Lindy）", "OnSearch Pty Ltd（Relevance AI）", "xAI"],
        ["是什麼", "每個工作區一個託管助理：行政助理兼 Slack 隊友", "用來建構 agent 和多 agent Workforce 的低程式碼／無程式碼平台", "託管的 AI 隊友：每個 Bot 都有自己的雲端電腦"],
        ["多個 agent", "未說明；文件描述的是每個工作區一個 Lindy", "有：在視覺化畫布上串接的 agent", "有：Bot 之間互傳訊息，並在群組聊天中協調工作"],
        ["使用的地方", "Slack、電子郵件、iMessage 和簡訊、電話、Chrome 擴充功能、網頁", "網頁應用程式", "macOS 和 iOS App、Slack、Microsoft Teams、通話"],
        ["定期工作", "依排程或事件執行的例行程序", "排程任務和應用程式觸發條件", "依排程執行的例行程序"],
        ["核准", "任何會對外產生影響的動作都會等你核准", "透過電子郵件和 Slack 的核准流程和問題升級", "需要核准時 Bot 會來問你；Auto Review"],
        ["價格", "7 天 $50 免費額度；每位活躍使用者每月 $29.99 起", "Enterprise 方案，需洽業務", "每月 Premium $30、Super $100 或 Ultra $200"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "收件匣交給 Lindy，儲存庫交給 Crewmark。",
      text: [
        "Lindy 在你的收件匣、行事曆、會議和 Slack 之間工作。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue，讓程式碼儲存庫裡的工程、SEO 和行銷工作依排程完成。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Lindy" },
  mid: {
    title: "想幫你的程式碼庫找一位 AI 員工？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Lindy AI 常見問題",
    items: [
      {
        q: "Lindy AI 是什麼？",
        a: "一個託管 AI 助理，在你連結的工具之間工作。對每位使用者來說是個人行政助理，在 Slack 中則是共用的隊友，處理收件匣、行事曆、會議、研究、報告和後續追蹤，並以例行程序執行定期工作。",
      },
      {
        q: "Lindy 要多少錢？",
        a: "你可以從 7 天內有效的 $50 額度開始，不需要信用卡。之後工作區中的每位活躍使用者都會計費，每月 $29.99 起，每人 3,000 額度，由團隊共用。加購為每 1,000 額度 $10，Enterprise 價格為客製。",
      },
      {
        q: "Lindy 是一個 agent 還是多個？",
        a: "一個。文件描述的是每個工作區一個 Lindy，例行程序也不是另一個 Bot。它的行銷訴求涵蓋許多職位，並透過內建和自訂技能、記憶以及 Watch and Learn 來學習，但沒有說明有各自獨立的 agent 角色。",
      },
      {
        q: "Lindy 有 App 嗎？",
        a: "你可以透過它的網頁版 Home 頁面、Slack、電子郵件、iMessage 和簡訊、電話，以及 Gmail 中的 Chrome 擴充功能使用 Lindy。文件沒有提到桌面或行動 App；Microsoft Teams 標示為即將推出。",
      },
      {
        q: "如何註冊 Lindy？",
        a: "從免費的 $50 額度開始，不需要信用卡，7 天內有效，每位成員只能使用一次。之後每位活躍使用者都需要一個付費席位：從 Slack 加入的成員有 7 天免費試用，直接註冊的使用者則會立即計費。",
      },
      {
        q: "Lindy 會不經詢問就行動嗎？",
        a: "會對外產生影響的動作不會：寄送電子郵件、更新工單、在其他頻道發文或發布文件，都會等你核准。從核准來源進行的唯讀查詢不需要核准。",
      },
    ],
  },
  cta: {
    title: "收件匣交給助理，也給你的程式 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照 lindy.ai、Lindy 的價格頁面和 Lindy 的文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Lindy、Relevance AI 和 xAI 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
