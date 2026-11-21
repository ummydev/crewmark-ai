import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/meta-muse; the English master is
// src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `每個工作日早上 7 點寄一份簡報給我：今天的行事曆、
收件匣裡緊急的事，還有天氣。

幫我找三個 12 月第一個週末飛芝加哥、400 美元以內的航班，
比較一下，訂位之前先問我。

我想賣掉我的車。查一下它值多少錢，草擬刊登內容，
告訴我哪些出價值得回覆。`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse 是什麼、怎麼用、多少錢",
    description:
      "Meta 的個人 AI agent Muse 完整解說：能做什麼、如何取得和使用、Free、Power（$20）和 Maximum（$100）方案、排程任務、連結的應用程式和付款、隱私設定，以及和其他 agent 的比較。",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Meta Muse",
    title: "Meta Muse：Meta 的個人 agent 能做什麼、怎麼用、要花多少錢",
    lead: "Muse 是 Meta 的個人 AI agent，2026 年 9 月 8 日在美國推出。Meta 說它「不只回答問題，而是真的把事情做完」：寄電子郵件、預訂行程、填寫表單、替你議價，你關掉 App 之後它還會繼續做，遇到寄信、購物這類重要操作則會先問你。本文說明如何取得、如何使用、各方案和 token 上限、排程任務、隱私設定，以及它和 Grok Bot、ChatGPT dots、Claude 的比較。",
    cta: "開始使用",
    secondary: "如何使用",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Meta Muse 是什麼",
      text: [
        "Muse 以 Meta 的 Muse Spark 模型運作，執行在一台 Meta 稱為 Muse Secure VM 的專屬雲端機器裡。它把目標轉成計畫，在背景持續推進，情況有變或需要你核准時再回來找你。",
      ],
      points: [
        "它會動手做：寄電子郵件、預訂行程、開啟瀏覽器、填寫表單、議價。Meta 舉的例子包括把車賣到更好的價錢、壓低一筆帳單，以及調整訓練計畫。",
        "它會記住：你只提過一次的細節它也記得，還會主動提出建議，例如把你在 Instagram 收藏的食譜 Reels 變成購物清單。",
        "它付款更安全：結帳透過 Stripe 的 Link，Link 的 agent 錢包會產生一次性卡號，Muse 永遠看不到你真正的卡號。",
        "它就在你身邊：Muse App、網頁版 muse.ai，以及 WhatsApp；下一步是 Meta 的 AI 眼鏡。",
        "它不是 Meta AI（Facebook、Instagram、WhatsApp 裡的助理），也不是 Meta 給開發者用的 Muse Code。",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Meta Muse 價格：Free、Power 和 Maximum",
      text: ["資料來自 2026 年 11 月 10 日的 Meta 說明中心。Muse 和它的訂閱方案仍在有限測試中，尚未在所有地區開放。"],
      headers: ["方案", "價格", "每週用量"],
      rows: [
        ["Free", "$0", "有每週免費用量上限（Meta 沒有公布多少）；用完就等重置或升級"],
        ["Power", "每月 $20", "每週 5 億 Muse token"],
        ["Maximum", "每月 $100", "每週 30 億 Muse token"],
        ["額外 token", "另外購買", "在每週額度之外加購"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何取得和使用 Meta Muse",
      text: [
        "你需要年滿 18 歲或達到所在地的成年年齡、身處 Muse 開放的地區（目前在美國推出），並以 Meta 帳號登入。Meta 帳號可以用 Facebook、Instagram、電子郵件地址或手機號碼建立。",
      ],
      steps: [
        {
          title: "下載 App 或開啟 muse.ai",
          text: "在 iOS 或 Android 下載 Muse App，或登入 muse.ai。Meta 沒有列出 Windows 或 Mac 應用程式，在電腦上就用瀏覽器開啟 muse.ai。",
        },
        {
          title: "告訴它你需要什麼",
          text: "Muse 開啟後會停在「Chat」分頁。描述你要的結果，而不是每一個步驟；它可能會先問幾個問題。你可以不等它回覆就繼續追問，也不必重複前面的背景。",
          code: prompts,
        },
        {
          title: "連結它需要的應用程式",
          text: "自行選擇 Muse 可以使用哪些應用程式、各自給多少存取權限；電子郵件可以選唯讀，或可讀取也可寄送。即將推出：結帳時使用 Shop Pay，以及串接 1Password，讓它使用你現有的登入資訊。",
        },
        {
          title: "核准、檢查並找到你的檔案",
          text: "寄電子郵件、購物這類敏感操作之前，Muse 會先問你，並保留一份稽核紀錄，列出它做過和打算做的事。它產生的檔案會存在「Library」分頁。",
        },
      ],
      source: { label: "來源：Meta 發表 Muse 的公告", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Muse 的提醒和排程任務",
      text: ["Muse 沒有獨立的排程設定畫面：提醒和週期任務都是直接跟它說，Meta 說明中心解釋了它們如何運作。"],
      points: [
        "一次性：告訴 Muse 要提醒你什麼、什麼時候，它會確認確切時間。",
        "週期性：說明任務內容和頻率，例如「每週一早上 9 點提醒我交工時表」。它會一直執行到你取消為止，每次時間到都會傳訊息給你。",
        "查看：問「我有哪些提醒？」，或點頂端的助理圖示，開啟「Upcoming」。",
        "修改或取消：說明是哪一個、要改什麼，例如把週一的提醒改到週二。",
        "時間依你的時區計算；如果你選的時間已經過了，Muse 會建議其他時間。",
        "更多日常例行工作的點子，請見 [Meta Muse 使用情境](/personal-agent/meta-muse-use-cases)。",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "隱私：如何選擇退出、Meta 能看到什麼",
      points: [
        "每個人的 Muse 都執行在自己的 Muse Secure VM 裡，其他人的 agent 無法存取。",
        "另一個名為 Sentinel 的 agent 必須先核准 Muse 傳到網路上的任何內容，必要時會詢問你。",
        "Muse 看不到你的密碼和付款方式；共用的登入資訊會放在安全的儲存空間。",
        "你的對話和 VM 資料不會分享給 Meta 的廣告系統。",
        "你可以選擇不讓自己的互動被用來訓練 Meta 的 AI、隨時修改或中斷任何應用程式的連結，也可以要 Muse 忘掉某件事。",
        "Meta 計劃今年稍晚推出 Muse Confidential VM，以只有你持有的金鑰加密。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse 無法使用或不好用？",
      points: [
        "不在美國：Muse 在美國推出，其他地區仍在有限測試中；Meta 表示目前尚未在所有地區開放。",
        "未滿 18 歲：需要年滿 18 歲或達到所在國家的成年年齡。",
        "免費額度用完了：等每週額度重置、升級到 Power 或 Maximum，或加購 token。",
        "沒有語音模式：語音只在部分國家提供，而且需要麥克風權限，可以在「Settings > Voice and Avatar」中變更。",
        "它做了意料之外的事：Meta 提醒 Muse 可能不準確或做出意外的操作，所以寄送和購買都要保留核准步驟，並檢查稽核紀錄。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse 與 Grok Bot、ChatGPT dots、Claude Duet 比較",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["開發者", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["主要用途", "日常任務和生活雜事", "工作：一組 Bot 在你的應用程式裡做事", "ChatGPT 裡的長期目標", "會主動來關心的 Claude"],
        ["最便宜的入門方式", "免費，有每週上限", "免費試用額度；X Premium 以上", "ChatGPT Pro", "Claude Pro，需排候補"],
        ["排程", "提醒和週期任務", "例行程序：排程、Slack、電子郵件和 Webhook", "排程提醒和週期檢查", "主動告訴你需要注意的事"],
        ["指南", "本頁", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "Muse 幫你跑腿，誰幫你清待辦？",
      text: [
        "Muse 是為生活雜事打造的。如果你想交出去的工作在程式碼儲存庫或行銷計畫裡，Crewmark 會把你自己的 Claude Code 或 Codex 變成 AI 員工：有職位、量化目標、工作時間和心跳，從看板領取下一個 issue，需要你做決定時就傳訊息給你。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始，例如 SEO 專員或社群媒體經理。",
        },
        {
          title: "給它工作時間和心跳",
          text: "在你設定的時段內，每 15 到 240 分鐘醒來一次。參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "比較各個個人 Agent",
          text: "參見[個人 AI Agent 比較](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "開始使用 Meta Muse" },
  mid: {
    title: "想要一個幫你處理工作待辦的 agent？",
    text: "Crewmark 員工依心跳醒來，從看板領取下一個 issue，使用的是你已有的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Meta Muse 是什麼？",
        a: "Meta 的個人 AI agent，2026 年 9 月 8 日在美國推出，由 Muse Spark 模型驅動。它在自己的雲端機器上替你寄電子郵件、預訂行程、填寫表單和購物，敏感操作前會先問你。",
      },
      {
        q: "Meta Muse 免費嗎？",
        a: "免費，但有每週用量上限。Power 每月 $20，每週 5 億 Muse token；Maximum 每月 $100，每週 30 億；也可以加購 token。",
      },
      {
        q: "如何取得 Meta Muse？",
        a: "在 iOS 或 Android 下載 Muse App，或前往 muse.ai，以 Meta 帳號登入。你需要年滿 18 歲或達到成年年齡，並身處 Muse 開放的地區；目前在美國推出。",
      },
      {
        q: "Windows 或 Mac 上能用 Meta Muse 嗎？",
        a: "Meta 列出的是 iOS、Android App 和 muse.ai。在 Windows 電腦或 Mac 上，請用瀏覽器開啟 muse.ai。",
      },
      {
        q: "Muse 能依排程執行任務嗎？",
        a: "可以。請它設定一個週期任務，例如「每週一早上 9 點提醒我交工時表」；它會一直執行到你取消為止，你可以在助理圖示的「Upcoming」裡找到。",
      },
      {
        q: "Meta 會用我的 Muse 對話來投放廣告嗎？",
        a: "Meta 表示對話和 VM 資料不會分享給它的廣告系統。你也可以選擇不讓自己的互動被用來訓練 Meta 的 AI 模型。",
      },
    ],
  },
  cta: {
    title: "個人 agent 幫你跑腿，AI 員工幫你清待辦。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Meta 發表 Muse 的公告和 Meta 說明中心文章查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Meta、xAI、OpenAI 和 Anthropic 皆無關聯，也未獲其背書。Muse、Meta 和 WhatsApp 是 Meta 的商標。",
};
