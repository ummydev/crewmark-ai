import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet 是什麼：候補名單、使用資格與限制 | Crewmark AI",
    description:
      "Claude Duet 是 Anthropic 的主動式代理應用程式，自 2026 年 10 月 21 日起進入研究預覽。它能做什麼、誰能用、如何加入候補名單、費用、安全限制，以及與同類產品的比較。",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "部落格 · Claude",
    title: "Claude Duet 是什麼，誰能用，怎麼用",
    lead: "Claude Duet 是 Anthropic 推出的新應用程式，讓 Claude 成為一個主動式代理（agent）：它會主動告訴你哪些事需要關注，完成你交給它的任務，在你離開時繼續工作，並在代你行動之前先徵得你的同意。它於 2026 年 10 月 21 日以需要候補的研究預覽形式上線，對象為美國的 Pro、Max 和 Ultra 訂閱用戶。本文介紹它能做什麼、如何取得使用資格、費用、安全限制，以及與同類產品的比較。",
    cta: "開始使用",
    secondary: "如何取得使用資格",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Duet 是什麼",
      text: [
        "一般的 Claude 對話要等你打開才開始。Duet 則會先來找你：它盯著你連接的應用程式，傳送簡短的晨間簡報，沒事時保持安靜，任務完成或需要你做決定時傳訊息給你。Anthropic 為專業人士和小型企業主打造了它，以 Claude Opus 5.5 為基礎。",
      ],
      points: [
        "晨間簡報：每天一份簡短摘要，彙整你所連接的應用程式中最重要的事。",
        "單一對話串：你用文字或語音傳訊息給它，就像對待同事，它只維持一段持續的對話。",
        "你的 Claude 脈絡：從第一則訊息起，它就使用你 Claude 帳號中的記憶、技能和已連接的應用程式。",
        "自己的雲端電腦：任務在附有獨立瀏覽器的虛擬機器中執行，所以你的筆電和手機可以關機。",
        "大小任務都行：安排會議、起草回覆、追討未付的發票、準備供審核的薪資單，或製作儀表板、預測、簡報和原型。",
        "連接器：來自 Claude Marketplace 的 6,000 多個連接器和外掛，例如 Gmail、Slack、QuickBooks、Stripe、HubSpot、Docusign 和 Shopify。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet 速覽",
      headers: ["", "Claude Duet"],
      rows: [
        ["發布時間", "2026 年 10 月 21 日，以研究預覽形式發布"],
        ["誰能用", "美國的 Pro、Max 和 Ultra 訂閱用戶，需透過候補名單"],
        ["Team 和 Enterprise", "目前不包含"],
        ["在哪用", "獨立的 iOS 和 Android 應用程式，以及電腦上的 claude.ai"],
        ["價格", "沒有單獨定價：包含在方案內，與 Claude 其他功能共用同一套用量限制"],
        ["模型", "Claude Opus 5.5"],
        ["檢查頻率", "每隔幾個小時一次；你可以選擇想收到哪些通知以及頻率"],
        ["API", "目前未公布"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何取得 Claude Duet 並完成設定",
      steps: [
        {
          title: "確認你的方案符合條件",
          text: "你需要美國的 Pro、Max 或 Ultra 方案。Team 和 Enterprise 方案目前不在預覽範圍內。",
        },
        {
          title: "加入候補名單",
          text: "在 claude.com/product/claude-duet 的 Claude Duet 頁面報名。等 Duet 對你的帳號開放後，Anthropic 會寄電子郵件通知你。",
        },
        {
          title: "開啟應用程式",
          text: "在 iOS 或 Android 上安裝獨立的 Claude Duet 應用程式，或在電腦上透過 claude.ai 使用。它與 Claude 主應用程式是分開的，但共用同一個帳號。",
        },
        {
          title: "連接它要關注的應用程式",
          text: "你已連接到 Claude 的應用程式會自動沿用，在任一處關閉某個應用程式，兩處都會關閉。先從最重要的幾個開始，例如收件匣、行事曆和開立發票。",
        },
        {
          title: "告訴它你想收到什麼通知",
          text: "設定什麼算緊急，以及你想多久收到一次更新。每次背景檢查都會占用你方案的額度，所以規則越少越精準，額度就越耐用。",
        },
        {
          title: "交給它一個任務，並審核它的操作",
          text: "像傳訊息給同事一樣傳給它。它會自己閱讀和起草，然後把操作、收件人和內容呈現給你，等你核准後才會傳送、付款、簽署或刪除任何東西。",
        },
      ],
      source: { label: "來源：Anthropic 的 Claude Duet 公告", href: announcement },
    },
    {
      kind: "text",
      title: "安全、隱私與限制",
      points: [
        "核准：在傳送敏感訊息、付款或刪除之前，它會明確顯示將要做什麼並等待你確認。模型之外還有一道獨立的檢查，判斷每個操作是否符合你的意圖。",
        "即使獲得核准也絕不允許：買賣證券、在帳戶之間轉帳，或使用他人的帳號。",
        "密碼：它從不接觸你的密碼、cookie 或登入權杖。購物使用一次性卡片，僅限該商家和該金額。",
        "敏感資料：分類器會阻擋分享信用卡號、銀行帳號和政府證件號碼；健康和財務資訊只有在你要求時才會分享。",
        "記憶：在你刪除或重設之前，它會保留你的對話紀錄和記憶。中斷某個應用程式的連接會停止新的存取，但它已經了解到的內容會保留，直到你重設它的記憶。",
        "早期預覽：Anthropic 表示，它可能誤讀對話、誤判什麼是緊急事項，或漏掉兩次檢查之間送達的內容，而且在個人雜事上比在工作任務上更弱。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "三者都是不需要你守在對話中也能持續工作的代理。Duet 和 [ChatGPT dots](/blog/chatgpt-dots) 是面向你商務應用程式的助理，執行在各自廠商的雲端；Crewmark 則依心跳喚醒你已在執行的程式設計代理（如 Claude Code 或 Codex），讓它處理看板上的一批 issue。",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["執行於", "Anthropic 的雲端電腦", "OpenAI 的雲端電腦", "你的電腦上，在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 裡"],
        ["如何開始工作", "你的訊息，以及每隔幾小時的檢查", "你的訊息、排程和它自己的研究", "工作時間內每 15 到 60 分鐘一次心跳"],
        ["最擅長", "收件匣、行事曆、發票、簡報和儀表板", "跨已連接應用程式的研究和任務", "程式碼、SEO 等程式碼儲存庫中的工作，一個職位一名員工"],
        ["工作佇列", "單一持續的對話串", "對話串和 Scheduled", "看板上的 issue"],
        ["費用", "包含在 Pro、Max 和 Ultra 內（美國）", "Pro 和 Business Premium 方案", "開放註冊；使用你已有的代理和方案"],
        ["狀態", "研究預覽，需候補", "逐步開放中", "開放註冊"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "想讓 Claude Code 也有同樣的主動性？",
      text: [
        "Duet 盯的是你的收件匣和商務應用程式；Anthropic 並沒有說明它會在你的程式碼儲存庫中工作。Crewmark 把同樣的概念帶給程式設計代理：它給 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段一個職位、一個目標和工作時間，並依心跳在同一個對話中喚醒它。",
      ],
      steps: [
        {
          title: "把一個工作階段變成員工",
          text: "選一個職位，例如軟體工程師或 SEO 專員，把它的目標寫成一個數字，然後在 Claude Code 中執行設定指令。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘醒來一次，接著上次的進度繼續；請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "指派 issue，回覆它的訊息",
          text: "把工作放到看板上，員工會接手、邊做邊留言，需要你做決定時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "取得 Claude Duet 並完成設定" },
  mid: {
    title: "喜歡會主動傳訊息給你的代理嗎？",
    text: "Crewmark 為 Claude Code 和 Codex 做到了這一點：心跳、工作時間和 issue 看板，用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Duet 常見問題",
    items: [
      {
        q: "Claude Duet 是什麼？",
        a: "Anthropic 的一款應用程式，自 2026 年 10 月 21 日起進入研究預覽，讓 Claude 成為主動式代理。它會關注你連接的應用程式，傳送晨間簡報，在自己的雲端電腦中完成任務，並在代你行動之前徵求你的核准。",
      },
      {
        q: "Claude Duet 是什麼時候發布的？",
        a: "Anthropic 於 2026 年 10 月 21 日開放研究預覽，需要候補。開放是逐步進行的，等它對你的帳號準備好後，Anthropic 會寄電子郵件通知你。",
      },
      {
        q: "如何取得 Claude Duet 的使用資格？",
        a: "持有美國的 Pro、Max 或 Ultra 方案，在 claude.com/product/claude-duet 加入候補名單。之後在 iOS 或 Android 上使用 Claude Duet 應用程式，或在電腦上使用 claude.ai。",
      },
      {
        q: "Team 或 Enterprise 方案能用 Claude Duet 嗎？",
        a: "目前不能。Anthropic 的產品頁說明，Team 和 Enterprise 方案不在預覽範圍內。",
      },
      {
        q: "Claude Duet 要多少錢？",
        a: "沒有單獨定價。它包含在 Pro、Max 和 Ultra 內，與 Claude 其他功能共用同一套用量限制；背景檢查和較大的任務會消耗更多額度。",
      },
      {
        q: "Claude Duet 安全嗎？",
        a: "在傳送、付款、簽署或刪除之前它會先詢問，從不接觸你的密碼或登入權杖，購物使用一次性卡片，即使獲得核准也不能買賣證券或在帳戶之間轉帳。它還只是早期預覽，所以仍可能誤判什麼是緊急事項。",
      },
      {
        q: "Claude Duet 能在我的程式碼儲存庫中寫程式嗎？",
        a: "它能在自己的雲端電腦中製作原型和網頁應用程式，但 Anthropic 並沒有把它定位為用於你程式碼儲存庫的程式設計代理。要做這件事，應該用 Claude Code，而 Crewmark 用心跳和 issue 看板讓 Claude Code 工作階段變得主動。",
      },
    ],
  },
  cta: {
    title: "也讓你的 Claude Code 工作階段主動工作起來。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 5 日對照 Anthropic 的 Claude Duet 公告、產品頁和安全文章查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 或 OpenAI 無關，也未獲其背書。Claude、Claude Duet 和 Claude Code 是 Anthropic 的商標，ChatGPT 是 OpenAI 的商標。",
};
