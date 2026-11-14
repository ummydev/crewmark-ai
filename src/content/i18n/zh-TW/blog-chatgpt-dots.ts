import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/chatgpt-dots; the English master is
// src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots 是什麼：用法與價格 | Crewmark AI",
    description:
      "ChatGPT dots 是 OpenAI 的常駐代理。它能做什麼、哪些方案可用、如何設定、自訂規則、限制，以及與同類產品的比較。",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "部落格 · ChatGPT",
    title: "ChatGPT dots 是什麼，怎麼用",
    lead: "dots 是 ChatGPT 裡的常駐代理（agent），於 2026 年 9 月 29 日在 OpenAI DevDay 上發表。每個 dot 都有自己的雲端電腦和瀏覽器，能連接你的應用程式，從回饋中學習，並在你不在的時候繼續朝你的目標推進。本文說明誰能使用、要花多少錢、如何設定、約束它的規則，以及它目前還做不到什麼。",
    cta: "開始使用",
    secondary: "跳到設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT dots 是什麼",
      text: [
        "OpenAI 稱 dots 為「能力出眾、始終在線、為處理一切而生的代理」。dot 執行在 GPT-6 Astra 上，在自己的雲端電腦上用自己的瀏覽器工作，使用你連接的應用程式。你可以在桌面版、網頁版和行動版的 ChatGPT 裡與它對話，也可以在 Slack 和 Teams 裡、在行動 App 裡用語音，還能透過簡訊（Pro 使用者限定的美國 beta）。",
      ],
      points: [
        "你不在時它也在工作：它以唯讀權限存取你連接的應用程式，主動尋找能幫忙的地方，並執行排程提醒和週期性檢查。",
        "它能同時推進多個專案，並主動向你回報進度、提出問題、請你做需要你拍板的決定。",
        "它有記憶：一開始就帶著你在 ChatGPT 裡的記憶，並在合作中逐漸了解你的偏好。",
        "它透過委派來寫程式：dot 可以啟動 Codex 任務，這些任務會計入你的 Codex 用量上限。",
        "你可以隨時旁觀：隨時打開 dot 的電腦，接手操作，再把控制權交還給它。",
      ],
    },
    {
      kind: "table",
      title: "誰能使用 dots，要花多少錢",
      text: [
        "下表中的方案都免費包含你的第一個 dot。發表後的第一個月內，dots 的用量不計入方案額度；OpenAI 表示之後會公布各方案的用量條款，但在我們查核時尚未公布。購買更多 dot 或為每個 dot 增加工作量已經宣布，但還沒有價格。",
      ],
      headers: ["方案", "dots", "說明"],
      rows: [
        ["Free、Go、Plus、Business", "否", "不包含"],
        ["Pro（Pro 100、Pro 200、Pro 500）", "是，逐步開放中", "不適用於歐洲經濟區（EEA）、瑞士和英國"],
        ["Business Premium", "是，逐步開放中", "限支援的地區，並視工作區是否符合資格而定"],
        ["Enterprise、Edu、Healthcare", "Beta", "預設關閉，需由工作區管理員開啟"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定你的第一個 dot",
      text: ["你必須年滿 18 歲。功能是逐步開放的，可能要過幾天才會出現在你的帳號裡。"],
      steps: [
        {
          title: "打開 dots",
          text: "前往 chatgpt.com/dots，或在 ChatGPT 桌面 App、桌面網頁版，以及 iOS 或 Android 的行動 App 中打開 dots。",
        },
        {
          title: "建立 dot 並命名",
          text: "依照引導操作：幫它取個名字，這個名字會成為它的帳號代稱（@你的名字-代理名字），再選一個頭像。兩者之後都可以在它的個人檔案中修改。",
        },
        {
          title: "連接你的應用程式",
          text: "在 dot 的個人檔案中打開 Customize，再進入 Plugins，選擇一個應用程式並檢查它要求的權限。Slack 需要在桌面版連接。dot 可以使用你連接的個人電子郵件帳號，但目前還不能擁有自己的電子郵件地址。",
        },
        {
          title: "設定自訂規則",
          text: "在 Customize 下的 Custom rules 中，為每類操作選擇：不必詢問直接執行、僅在你的提示中預先核准時執行、執行前先詢問，或交給你處理。",
        },
        {
          title: "給它一個目標",
          text: "描述你想要的結果並提供背景；用 + 附加檔案，在對話串裡回覆來引導它。可以請它設定提醒或週期性檢查，並在 Scheduled 裡管理。",
        },
        {
          title: "追蹤、暫停或刪除",
          text: "個人檔案會顯示 In progress、Scheduled 和 Completed 的工作。需要時可在 ••• 選單中暫停 dot。刪除 dot 會清除它的記憶和排程任務，而且無法復原。",
        },
      ],
      source: { label: "來源：OpenAI 發表 dots 的公告", href: announcement },
    },
    {
      kind: "text",
      title: "安全：dot 會自己做什麼、不會自己做什麼",
      points: [
        "變更密碼或轉帳，一律需要你接手並親自完成。",
        "永久刪除資料或安裝軟體，可能每次都需要你核准。",
        "Auto-review 會依照你的指示和規則檢查有風險的操作，例如郵件寄給誰；你的自訂規則無法關閉它。",
        "dot 可以用商家網站上儲存的信用卡購物，但每次都需要你核准，或事先給予具體的核准。",
        "除非你在 ChatGPT 桌面 App 裡透過 Allow access 連接，否則你自己的電腦與它是隔離的；此選項預設關閉。",
        "OpenAI 表示，其提示注入防護能降低風險但無法消除風險，而且有些已完成的操作無法復原。",
      ],
    },
    {
      kind: "text",
      title: "dots 目前還做不到的事",
      points: [
        "你只有一個主要 dot；由多個 dot 組成團隊被描述為未來的方向。",
        "dot 沒有自己的電子郵件地址，不能打電話給你，也不支援行動網頁版。",
        "沒有 webhook 或事件觸發器可以啟動它；它只根據你的訊息、它的排程和它自己的唯讀研究來工作。",
        "你無法檢視、編輯或刪除個別記憶；要清除它學到的東西，只能刪除這個 dot。",
        "Plus 使用者無法使用 dots，歐洲經濟區、瑞士和英國的 Pro 使用者也一樣。",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI 於 2026 年 8 月發表 Grok Bot，稱之為「你的常駐代理團隊」，並配有自己的電腦。Crewmark 走的是另一條路：它不是在別人的雲端上新建一個代理，而是把你已經在用的程式設計代理變成在你自己電腦上工作的員工。",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["執行於", "OpenAI 的雲端電腦", "據 xAI 表示，在它自己的電腦上", "你的電腦，在 Claude Code 或 Codex 裡"],
        ["模型", "GPT-6 Astra", "Grok", "你的 Claude Code 或 Codex 所用的模型"],
        ["數量", "一個主要 dot", "多個，彼此可以互傳訊息", "每個職位一名員工，想設幾個就設幾個"],
        ["如何開始工作", "你的訊息、排程、它自己的研究", "透過觀察你工作來學習例行流程", "工作時間內每 15–60 分鐘一次心跳"],
        ["工作佇列", "對話串和 Scheduled", "未公開說明", "看板上的任務"],
        ["目標", "你描述的目標", "未公開說明", "以數字表示的 KPI，例如每月點擊數 +10%"],
        ["方案", "Pro、Business Premium、Enterprise beta", "SuperGrok 和 Cursor 方案，beta", "開放註冊；用你現有的 Claude 或 ChatGPT 方案執行"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "已經在為 Claude Code 或 Codex 付費？讓它始終在線",
      text: [
        "如果你需要常駐處理的工作在程式碼庫或網站裡，就不需要一個新的代理。Crewmark 給你已經在用的 Claude Code 或 Codex 工作階段一個職位、一個目標和工作時間，並用心跳喚醒它，從看板上領取下一個任務。",
      ],
      steps: [
        {
          title: "把工作階段變成員工",
          text: "選一個職位，例如 SEO 專員或軟體工程師，用數字寫下它的目標，然後在 Claude Code 或 Codex 裡執行設定指令。",
        },
        {
          title: "讓心跳讓它持續工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話裡醒來一次，所以記得自己做過什麼；請參閱[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "指派任務，回覆它的訊息",
          text: "把工作放到看板上；員工會領取任務，邊做邊留言，遇到阻礙時傳訊息給你。了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定你的第一個 ChatGPT dot" },
  mid: {
    title: "想為你的程式碼庫配一個常駐代理？",
    text: "Crewmark 用心跳讓你的 Claude Code 或 Codex 工作階段持續工作，用的就是你已經付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "ChatGPT dots 常見問題",
    items: [
      {
        q: "ChatGPT dots 是什麼？",
        a: "ChatGPT 裡的常駐代理，於 2026 年 9 月 29 日發表。每個 dot 執行在 GPT-6 Astra 上，有自己的雲端電腦和瀏覽器，能連接你的應用程式，從回饋中學習，並持續朝你的目標推進。",
      },
      {
        q: "ChatGPT dots 多少錢？",
        a: "Pro 和 Business Premium 免費包含你的第一個 dot。OpenAI 計畫販售更多 dot 和每個 dot 的更多工作量，但尚未公布價格，也未公布發表首月之後的用量條款。",
      },
      {
        q: "ChatGPT Plus 能用 dots 嗎？",
        a: "不能。Free、Go、Plus 和標準 Business 方案都不包含 dots。dots 正逐步開放給 Pro 和 Business Premium，並在 Enterprise、Edu 和 Healthcare 中以 beta 形式提供。",
      },
      {
        q: "ChatGPT dot 怎麼用？",
        a: "打開 chatgpt.com/dots，建立 dot 並命名，在 Customize 下連接應用程式，設定自訂規則決定它可以不經詢問做哪些事，然後給它一個目標。在它的個人檔案中的 In progress、Scheduled 和 Completed 追蹤它的工作。",
      },
      {
        q: "ChatGPT dots 和 Grok Bot 有什麼不同？",
        a: "兩者都是有自己電腦的常駐代理。dot 執行在 GPT-6 Astra 上，發表時你只有一個；xAI 的 Grok Bot 是一支可以互傳訊息的代理團隊，以 beta 形式提供給 SuperGrok 和部分 Cursor 方案。",
      },
      {
        q: "ChatGPT dots 能寫程式嗎？",
        a: "能，透過委派給 Codex：dot 可以啟動 Codex 雲端任務，如果你連接了自己的電腦，也能啟動本機 Codex 任務，這些都會計入你的 Codex 用量上限。",
      },
    ],
  },
  cta: {
    title: "讓你已經在用的代理始終在線。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 2 日對照 OpenAI 的發表公告、說明中心、版本資訊和價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI、xAI 或 Anthropic 無關，也未獲其背書。ChatGPT 是 OpenAI 的商標，Grok 是 xAI 的商標，Claude Code 是 Anthropic 的商標。",
};
