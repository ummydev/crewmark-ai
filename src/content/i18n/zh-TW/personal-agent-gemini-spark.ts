import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/gemini-spark; the English master is
// src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `每個月 3 號，在 Gmail 裡檢查我的信用卡帳單，
找出新增或隱藏的訂閱費用，列一份清單給我。

留意孩子學校信箱裡的截止日期，
每天晚上 7 點寄一份摘要給我和我的另一半。

把這週電子郵件和聊天裡的會議記錄整理成一份 Google 文件，
再起草一封後續追蹤信。先不要寄出。`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark（現在叫任務）：使用方式、方案、國家",
    description:
      "Gemini Spark 怎麼不見了：Google 的全天候個人 agent 現在是 Gemini 應用程式裡的「任務」。誰能使用（Google AI Pro 或 Ultra、哪些國家）、如何開啟、排程、連結的應用程式、限制和 Mac 應用程式。",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Gemini Spark",
    title: "Gemini Spark，現在是 Gemini 裡的「任務」：Google 個人 agent 使用指南",
    lead: "Google 在 2026 年 5 月 19 日發表 Gemini Spark，稱它是「一個全天候的個人 AI agent，主動幫你管理任務」：它在雲端運作，你闔上筆電或鎖上手機它也會繼續工作，還能使用 Gmail、文件和其他 Google 應用程式。測試版裡的 Spark 現在在 Gemini 應用程式裡叫做「任務」（tasks），所以 Spark 按鈕看起來像是消失了。本文說明誰能使用、如何開啟、排程、連結的應用程式、限制，以及它擅長什麼。",
    cta: "開始使用",
    secondary: "開啟它",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Gemini Spark 怎麼了？",
      text: [
        "它沒有停止服務。Google 的說明文章現在把這個功能稱為「任務」，並註明它「在測試版中原本叫做 Spark」。在 Gemini 裡點選文字方塊下方的「Task」就能開始，你現有的任務和排程也都還在。",
      ],
      points: [
        "它是什麼：在雲端的 Gemini 上執行的 agent，推出時以 Gemini 3.5 和 Google 的 Antigravity 框架打造。",
        "它做什麼：整理收件匣、追蹤機票和飯店價格、附引用來源做研究、上網購物或訂位，以及產生 PDF、文件、試算表和簡報。",
        "什麼時候工作：在背景執行，依排程或在某件事發生時啟動；花錢或寄信這類重大操作前會先問你。",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "誰能使用 Gemini 任務（Spark）",
      text: ["資料來自 2026 年 11 月 10 日的 Google Gemini 應用程式說明。"],
      headers: ["條件", "說明"],
      rows: [
        ["方案", "Google AI Pro 或 Ultra（美國的 Google AI Pro 每月 $19.99）"],
        ["帳戶", "個人 Google 帳戶，年滿 18 歲；尚不支援工作和學校帳戶"],
        ["國家／地區", "所有提供 Gemini 應用程式的地方，但歐洲經濟區、瑞士、英國和奈及利亞除外"],
        ["設定", "必須開啟「Keep Activity」"],
        ["在哪裡使用", "Gemini 行動應用程式、Mac 上的 Gemini 應用程式，以及網頁版 gemini.google.com"],
        ["免費方案", "不包含"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何使用 Gemini 任務",
      steps: [
        {
          title: "開啟任務模式",
          text: "在 gemini.google.com 上點選文字方塊下方的「Task」，依畫面上的步驟操作。Gemini 行動應用程式和 Mac 上的 Gemini 應用程式也能使用任務。",
        },
        {
          title: "連結它需要的應用程式",
          text: "任務可以使用 Gmail、日曆、文件、雲端硬碟、Keep、試算表、簡報和 Tasks，Google 搜尋、航班、飯店和地圖，聯絡人、相簿和 YouTube，以及自訂和第三方應用程式。Google 推出時的合作夥伴包括 Canva、OpenTable 和 Instacart。",
        },
        {
          title: "說明要做什麼、什麼時候做",
          text: "可以請它做一次性的工作，也可以設定排程：在固定時間，或在某件事發生時。開啟任務對話串和它的工作面板，就能檢查權限和排程。",
          code: prompts,
        },
        {
          title: "核准重要步驟",
          text: "Gemini 為某個任務上網瀏覽前會先問你（在你第一次授予 Chrome 權限之後），傳送訊息、購買、提交表單或用 Google 帳戶登入前也會先問。即使你選了「一律允許」，分享健康、財務或身分證件等敏感資訊前它仍會暫停。",
        },
      ],
      source: { label: "來源：Google Gemini 應用程式說明中關於任務的文章", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "限制、排程和關閉方式",
      points: [
        "最多可同時執行 15 個任務；已經有 15 個在執行時，排程不會啟動。",
        "Google 的說明指出，任務模式關閉或裝置關機時，排程不會執行。可以在任務對話串裡，或網頁版的「Scheduled」頁面暫停或恢復排程。",
        "用量限制依運算量計算，Ultra 比 Pro 高。",
        "Chrome 自動瀏覽只能在桌面版使用。",
        "關閉方式：網頁版在「Settings > Task settings」裡關掉「Use task mode to hand off work」；Mac 應用程式在「Gemini > Settings > Tasks」裡關閉。這會刪除遠端瀏覽器和程式碼資料；你的任務、排程和檔案會保留，但處於暫停狀態。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Gemini 任務的使用情境",
      text: ["前三個是 Google 推出時自己舉的例子。"],
      headers: ["使用情境", "做什麼"],
      rows: [
        ["訂閱費檢查", "掃描每月的信用卡帳單，找出新增或隱藏的訂閱費"],
        ["學校信件摘要", "留意截止日期，每天寄一份摘要給你和你的另一半"],
        ["會後追蹤", "把電子郵件和聊天裡的會議記錄整理成文件，並起草後續追蹤信"],
        ["整理收件匣", "封存電子報，並幫你取消訂閱郵件清單"],
        ["價格追蹤", "追蹤機票和飯店價格，降價時通知你"],
        ["研究報告", "附引用來源研究一個主題，整理成檔案"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini 任務與 Meta Muse、Grok Bot 比較",
      headers: ["", "Gemini 任務（Spark）", "Meta Muse", "Grok Bot"],
      rows: [
        ["開發者", "Google", "Meta", "xAI"],
        ["最便宜的入門方式", "Google AI Pro", "美國免費，有每週額度", "免費試用額度；X Premium 以上"],
        ["最擅長", "Gmail、文件和 Google 的應用程式", "日常跑腿、WhatsApp", "工作用應用程式、多個 Bot 組隊"],
        ["排程", "依時間或依事件", "提醒和週期性任務", "例行程序：依排程或觸發條件"],
        ["無法使用的地區", "歐洲經濟區、瑞士、英國、奈及利亞", "美國以外（有限測試中）", "-"],
        ["指南", "本頁", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "一個依排程處理你的工作、而不只是收件匣的 agent",
      text: [
        "Gemini 任務照顧的是一個人的 Google 應用程式。Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳，從共用看板領取下一個 issue 並向你回報。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始，例如 SEO 專員或軟體工程師。",
        },
        {
          title: "設定工作時間和心跳",
          text: "在你選的時段內每 15 到 240 分鐘醒來一次。參見 [Codex 排程任務](/proactive-codex)。",
        },
        {
          title: "比較各種個人 Agent",
          text: "參見[個人 AI Agent 比較](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 Gemini 任務" },
  mid: {
    title: "想要一個能消化團隊待辦清單的 agent？",
    text: "Crewmark 員工依心跳醒來，從看板領取下一個 issue，用的是你現有的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Gemini Spark 怎麼不見了？",
        a: "Google 幫它改了名字。測試版裡的 Spark 現在在 Gemini 應用程式裡叫做「任務」：點選文字方塊下方的「Task」即可。你現有的任務和排程都會保留。",
      },
      {
        q: "Gemini Spark 免費嗎？",
        a: "不免費。任務需要在個人 Google 帳戶上訂閱 Google AI Pro 或 Ultra；美國的 Google AI Pro 每月 $19.99。",
      },
      {
        q: "英國或歐洲能使用 Gemini Spark 嗎？",
        a: "目前還不行。Google 的說明列出的範圍是所有提供 Gemini 應用程式的地方，但歐洲經濟區、瑞士、英國和奈及利亞除外。",
      },
      {
        q: "Gemini Spark 有 Mac 應用程式嗎？",
        a: "有，任務可以在 Mac 上的 Gemini 應用程式裡使用，行動應用程式和 gemini.google.com 也可以。",
      },
      {
        q: "Gemini 任務能依排程執行嗎？",
        a: "可以，在固定時間或某件事發生時執行。最多可同時執行 15 個任務，任務模式關閉時排程會暫停。",
      },
      {
        q: "Gemini Spark 和 Meta Muse 該選哪個？",
        a: "如果你的生活離不開 Gmail 和 Google 的應用程式，又有訂閱 Google AI Pro，選 Gemini 任務。如果你在美國、想先免費開始，選 Meta Muse。",
      },
    ],
  },
  cta: {
    title: "個人 agent 管收件匣，AI 員工管待辦清單。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Google 發表 Gemini Spark 的文章和 Gemini 應用程式說明查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Google、Meta 和 xAI 均無關聯，也未獲其背書。Gemini 和 Google 是 Google 的商標。",
};
