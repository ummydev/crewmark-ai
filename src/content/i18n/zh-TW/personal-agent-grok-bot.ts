import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/grok-bot; the English master is
// src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 是什麼、怎麼用、方案與設定",
    description:
      "xAI 的 Grok Bot 完整解說：這個全天候 agent 能做什麼、X、SuperGrok 和 Cursor 的哪些方案包含它、免費試用、如何在 Mac、Windows、Linux 和手機上下載、如何設定第一個 Bot，以及使用情境。",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Grok Bot",
    title: "Grok Bot：xAI 的個人 agent 能做什麼、怎麼用",
    lead: "Grok Bot 是 xAI 推出的全天候 agent，xAI 稱它為「你主動的 AI 隊友」。每個 Bot 都在一台雲端電腦上工作，有瀏覽器、檔案和終端機，能登入你使用的應用程式，記得你喜歡的做事方式，你闔上筆電後它還會繼續做。它在 2026 年 8 月以早期 beta 版開放。本文說明它能做什麼、哪些方案包含它、如何設定第一個 Bot、例行程序和核准機制如何運作，以及大家拿它來做什麼。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot 是什麼",
      text: [
        "Grok Bot 不是 Grok 聊天機器人，也不是 X 上的 @grok 帳號。它是一個擁有自己電腦的 agent：能像人一樣使用應用程式和網站、撰寫並執行程式碼，處理多步驟的工作，例如製作簡報、執行一場行銷活動、訂位，或讓行事曆保持同步。",
      ],
      points: [
        "雲端電腦：你所有的 Bot 共用一台持續運作的機器，配有瀏覽器、檔案系統和終端機。每個 Bot 都有自己的螢幕，你可以即時觀看任何一個。",
        "多個 Bot 組成一個團隊：每個 Bot 負責一件事；它們可以互傳訊息、交接工作，你的第一個 Bot 還能回報其他 Bot 的進度。",
        "應用程式：Gmail、Google 日曆、Google 雲端硬碟、Slack、Notion、Granola、GitHub 等，還能串接任何 MCP 伺服器或 API。它和 Cursor 使用同一套 MCP 伺服器、外掛和 skill。",
        "記憶：每個 Bot 會記下你的偏好筆記和標註日期的工作日誌；少數資訊，例如你的名字和時區，由所有 Bot 共用。",
        "例行程序：Bot 能依排程，或在某件事發生時執行工作，例如在 Slack 被提及或收到 Webhook。參見 [Grok Bot 例行程序](/personal-agent/grok-bot-routines)。",
        "桌面版、手機、Slack 和 X 上都能找到它，可以打字也可以用語音。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "哪些方案包含 Grok Bot",
      text: [
        "Grok Bot 以 Cursor 帳號運作。以下是 Cursor 的 Grok Bot 方案頁面列出、包含它的方案；xAI 和 Cursor 都沒有以數字列出 Grok Bot 本身的價格或每週用量。",
      ],
      headers: ["方案", "Grok Bot", "用量"],
      rows: [
        ["The X Subscription：Premium、Super、Ultra", "包含，個人或團隊席次", "共用的每週額度，Super 和 Ultra 較多；超出部分從預付點數扣除"],
        ["The X Subscription：Plus、Free", "不包含", "-"],
        ["舊版 Cursor 方案：Pro、Pro+、Ultra、Teams", "包含", "每週用量從 Pro 到 Ultra 遞增；開啟隨選用量後可繼續使用"],
        ["連結 SuperGrok、SuperGrok Plus、SuperGrok Heavy、X Premium+", "透過連結的帳號包含", "Heavy 最多；連結的帳號和 Cursor 方案不能疊加"],
        ["SuperGrok Lite", "不包含", "-"],
        ["免費試用", "一筆用量點數，7 天內有效", "依 agent 步驟和 token 扣除；用完不補"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Grok Bot",
      steps: [
        {
          title: "下載 App",
          text: "從 x.ai/bot 下載。支援 macOS（Apple 晶片和 Intel）、Windows（x64 和 Arm64）和 Linux（x64 和 Arm64），以及 iPhone（iOS 18 以上）和 Android（9 以上）。",
        },
        {
          title: "登入",
          text: "點選「Sign in」，在瀏覽器中完成登入；Grok Bot 使用的是你的 Cursor 帳號，所以公司的單一登入（SSO）同樣適用。如果你的使用權來自 SuperGrok 或 X Premium+，請在新手引導頁面連結你的 Grok 帳號。開啟「Privacy Mode (Legacy)」的帳號必須先切換，因為 Bot 需要雲端儲存空間。",
        },
        {
          title: "給第一個 Bot 一件工作",
          text: "App 會建立一個名為 Grok Bot 的 Bot 並開啟對話。用「New Bot」（Cmd/Ctrl+N）新增更多 Bot。在第一則訊息裡給每個 Bot 一件工作，並請它記住你希望怎麼做。你也可以在 Bot 的電腦上把一項任務錄製一次來教它。",
        },
        {
          title: "連結應用程式並設定規則",
          text: "連結它需要的應用程式。登入資訊依序來自它的 Vault、1Password 這類密碼管理工具，最後才是安全表單，Bot 永遠看不到密碼。「Auto Review」預設開啟，會在操作執行前先檢查；對於一定要等你確認的事，請在「Settings > General > Bot」加上「Ask first」規則。",
        },
      ],
      source: { label: "來源：xAI 的 Grok Bot 文件《Get started》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Grok Bot 如何讓你保有掌控權",
      points: [
        "核准卡片：某個操作需要你同意時，Bot 會顯示一張卡片並等待。在 xAI 的範例中，Slack 回覆和 Gmail 信件都是先草擬好，等你核准。",
        "「Auto Review」會在 Bot 執行指令、使用應用程式或操作電腦之前先檢查，並且只把你本人的訊息當作指示。xAI 指出它能降低有害內容帶來的風險，但無法完全消除。",
        "Bot 沒有自己的帳號；它以你的身分行動，所以每個操作都能追溯到你。",
        "所有 Bot 共用一台電腦和其中的登入狀態：只要一個 Bot 登入了某個網站，其他 Bot 也能使用這個登入。",
        "遇到單一登入或密碼金鑰時，點選「Open computer」，再點「Take control」，完成這個步驟後告訴 Bot 繼續。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Grok Bot 使用情境",
      text: ["資料來自 xAI 的使用情境文件。大多數情境都是先草擬好工作，在送出任何東西之前等你核准。"],
      headers: ["使用情境", "Bot 做什麼"],
      rows: [
        ["晨間簡報", "彙整各個應用程式在夜間的變化"],
        ["收件匣管理", "依緊急程度整理未讀信件並草擬回覆"],
        ["旅遊協調", "找兩組機票和飯店選項，訂位留給你決定"],
        ["會前準備", "寫一頁簡報：與會者、過去的討論和尚未結束的話題"],
        ["內容行銷", "根據本週上線的成果草擬電子報和貼文"],
        ["業務開發", "依你的理想客戶輪廓篩選進來的潛在客戶，並草擬回覆"],
        ["競品情報", "每週回報競品的新發表和價格變動"],
        ["行銷活動小組", "幾個 Bot 分別抓取註冊資料、草擬上市內容並查核事實"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot 與 Muse、Dots、Claude Duet 比較",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["開發者", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["執行環境", "你所有 Bot 共用的一台雲端電腦", "每人一台專屬雲端 VM", "自己的雲端電腦和瀏覽器", "Claude Duet App"],
        ["排程", "例行程序：排程、Slack、GitHub、電子郵件或 Webhook", "提醒和週期任務", "排程提醒和週期檢查", "主動告訴你需要注意的事"],
        ["誰能使用", "X Premium 以上、SuperGrok、Cursor 方案", "美國，免費但有上限；Power 每月 $20", "ChatGPT Pro 和 Business Premium", "美國的 Claude Pro、Max、Ultra，需排候補"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫你的程式碼配一位 Grok Bot 式的隊友",
      text: [
        "Grok Bot 在你的應用程式裡工作，Crewmark 在你的儲存庫裡工作。它把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳：依排程醒來，從看板領取下一個 issue，提交 Pull Request，需要你做決定時就傳訊息給你。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員。",
        },
        {
          title: "給它工作時間和心跳",
          text: "在你設定的時段內，每 15 到 240 分鐘醒來一次。參見[如何讓 Claude Code 24 小時不間斷執行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "比較各個個人 Agent",
          text: "參見[個人 AI Agent 比較](/personal-agent)和 [Meta Muse 指南](/personal-agent/meta-muse)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Grok Bot" },
  mid: {
    title: "想幫你的程式碼庫配一位主動的隊友？",
    text: "Crewmark 員工依心跳醒來，從看板領取下一個 issue，並提交 Pull Request。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Grok Bot 是什麼？",
        a: "xAI 的全天候 agent。每個 Bot 都在一台雲端電腦上工作，登入你的應用程式，記住你的偏好，依排程執行例行程序，你闔上筆電後它還會繼續做。它不是 Grok 聊天機器人，也不是 X 上的 @grok 帳號。",
      },
      {
        q: "Grok Bot 要多少錢？",
        a: "它沒有單獨的價目表：The X Subscription 的 Premium、Super 和 Ultra 方案，舊版 Cursor 的 Pro、Pro+、Ultra 和 Teams 方案，以及連結的 SuperGrok、SuperGrok Plus、SuperGrok Heavy 和 X Premium+ 訂閱都包含它。各方案的用量上限不同。",
      },
      {
        q: "Grok Bot 有免費試用嗎？",
        a: "有，是一筆 7 天內有效的用量點數。它依 agent 步驟和 token 扣除，用完不補，也不會自動轉成付費方案；用完之後可以升級或連結帳號。",
      },
      {
        q: "Grok Bot 能在 Windows、Linux 和 Android 上使用嗎？",
        a: "可以。桌面版 App 可在 macOS、Windows 和 Linux（x64 和 Arm64）上執行，另有 iPhone（iOS 18+）和 Android（9+）App。",
      },
      {
        q: "Grok Bot 能依排程執行任務嗎？",
        a: "可以，透過例行程序：用一般文字描述排程，或在收到 Slack 訊息、GitHub 或 Linear 事件、電子郵件或 Webhook 時觸發。參見 [Grok Bot 例行程序](/personal-agent/grok-bot-routines)。",
      },
      {
        q: "Grok Bot 和 Meta Muse 哪個比較好？",
        a: "Muse 是為所有人的日常生活雜事打造的，在美國有免費方案。Grok Bot 是為工作打造的：多個 Bot 組成團隊、可觸發的例行程序，還有 Cursor 的程式開發工具。",
      },
    ],
  },
  cta: {
    title: "給你的程式 agent 一份工作，而不只是一段提示詞。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 xAI 的 Grok Bot 文件與指南，以及 Cursor 的 Grok Bot 方案頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 xAI、SpaceX、X、Cursor、Meta、OpenAI 和 Anthropic 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
