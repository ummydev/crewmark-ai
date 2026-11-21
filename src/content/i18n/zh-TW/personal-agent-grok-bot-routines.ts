import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# 在負責這件工作的 Bot 的對話裡直接說
設定一個例行程序：每個工作日早上 7:00 整理我夜間收到的 Gmail，
為緊急的信件草擬回覆，把清單傳給我。什麼都不要寄出。

設定一個例行程序：每週日下午 6:00 檢查下週的 Google 日曆，
標出衝突和排得太滿的日子，傳一份週一計畫給我。

設定一個例行程序：工作日每 2 小時查看 Slack 的 #launch 頻道，
找出關於價格的問題，草擬回答等我核准。`;

const webhook = `# 從例行程序的 Webhook 區塊（桌面版）複製 "POST to" 和 "key"
curl -X POST "https://<例行程序裡的 POST to 網址>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = 已開始執行（結果請看 Bot 的對話）
# 其他回應 = 沒有開始執行`;

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 例行程序（Routines）：排程、Webhook 與疑難排解",
    description:
      "如何設定 Grok Bot 例行程序：用一般文字寫排程、時區、測試執行、Webhook 和 Slack 觸發條件、各項上限（50 個例行程序、間隔 5 分鐘、每小時 300 次），以及例行程序沒有執行時該檢查什麼。",
  },
  breadcrumb: "Grok Bot 例行程序",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Grok Bot",
    title: "Grok Bot 例行程序：如何排程、用 Webhook 觸發，以及出問題時怎麼修",
    lead: "例行程序（routine）告訴某一個 Grok Bot 什麼時候執行一件工作：依排程，例如每個工作日早上 8:00；或在某件事發生時，例如在 Slack 被提及或收到 Webhook 呼叫。因為 Bot 在雲端電腦上工作，闔上筆電後例行程序照樣會執行。本文說明如何在桌面版和手機上建立例行程序、哪些排程寫法有效、Webhook 和事件觸發、各項上限、xAI 自己範例中的例行程序點子，以及例行程序沒有執行時該檢查什麼。",
    cta: "開始使用",
    secondary: "建立例行程序",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot 例行程序是什麼",
      text: [
        "用 xAI 的話來說，例行程序「告訴一個 Bot 什麼時候執行一個工作流程：依排程，或在某件事發生時」。它屬於某一個 Bot，使用這個 Bot 的記憶和 skill，並把結果貼在這個 Bot 的對話裡。",
      ],
      points: [
        "排程：用一般文字描述，例如「每個工作日早上 8:00」或「每 2 小時」，依設定中的時區計算。",
        "事件：Slack 觸發；GitHub、Linear、Sentry 或 PagerDuty 的事件；寄到 Bot 專屬地址的電子郵件；或 Webhook 呼叫。",
        "新建立的例行程序不會馬上執行，而是等到下一個排定時間；想立刻執行就用「Test」。",
        "例行程序在 Bot 的雲端電腦上執行，所以你闔上筆電後它也會繼續運作。",
        "每次執行（包括測試）都會消耗你的 Grok Bot 用量。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Grok Bot 建立例行程序",
      steps: [
        {
          title: "請負責這件工作的 Bot 來設定",
          text: "在桌面版開啟那個 Bot 的對話，說明工作內容和執行時間。講清楚輸入來自哪裡、你要什麼結果、哪些步驟需要你核准，以及某個來源缺漏時該怎麼辦。在手機上，開啟 Bot 的個人檔案，點選「Routines」下的「Add routine」，把以「Set up a routine to」開頭的訊息寫完。",
          code: prompts,
        },
        {
          title: "檢查「When to run」和時區",
          text: "開啟例行程序，查看「When to run」確認儲存的排程；如果不對，就點「Edit」描述要怎麼修正。時區設定在「Settings」的「Bot」底下的「Timezone」欄位。「Auto-detect」會使用你電腦的時區，如果這份工作屬於其他時區，請固定選一個。",
        },
        {
          title: "先測試一次",
          text: "在桌面版開啟例行程序，點選「Test」。執行完成前會顯示「Running…」，結果會出現在 Bot 的對話裡。測試會做真正的工作，例如修改檔案或使用網站，所以凡是會寫入或寄出的步驟，都要設成需要你核准。如果例行程序沒有「Test」按鈕，可以請 Bot 在對話裡用安全的輸入先做一次。",
        },
        {
          title: "暫停、恢復或刪除",
          text: "在桌面版點 Bot 的名稱，開啟「Details」，使用例行程序那一列的開關；或開啟例行程序，點選「Pause」或「Resume」。在手機上，從 Bot 的個人檔案開啟例行程序，關閉「Active」；滑動那一列即可刪除。刪除後無法復原。",
        },
      ],
      source: { label: "來源：xAI 的 Grok Bot 文件《Skills and routines》", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "如何用 Webhook 觸發例行程序",
      text: ["Webhook 讓其他服務啟動例行程序，例如你的網路商店收到退款申請時，或有人填寫報名表單時。"],
      steps: [
        {
          title: "加上觸發條件",
          text: "請 Bot 為這個例行程序加上 Webhook 觸發條件。",
        },
        {
          title: "複製網址和金鑰",
          text: "在桌面版開啟例行程序，找到「Webhook」區塊：「POST to」（網址）、「key」（密鑰）和「header」（完整的 Authorization 標頭）。點一下欄位就能複製。",
          code: webhook,
        },
        {
          title: "送出 POST 並查看回應",
          text: "送出一個 HTTP POST，以 `Authorization: Bearer <key>` 的形式帶上金鑰。你可以附上 JSON 內容，Bot 會連同例行程序的指示一起收到。回應 200 代表已開始執行，不代表已經完成。其他任何回應都代表沒有開始執行：請確認例行程序沒有暫停，而且使用的是目前的金鑰。",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack、GitHub 和其他事件觸發條件",
      points: [
        "Slack：可在 Bot 被提及時、出現某個字詞或片語時、有人對訊息按表情回應時，或有任何訊息時觸發，範圍可以是一個頻道或整個 Slack。請先在擁有這個 Bot 的 Cursor 帳號上連結 Slack。",
        "GitHub、Linear、Sentry 和 PagerDuty：這些工具裡的事件可以啟動例行程序；這類觸發條件透過 Cursor 帳號的整合運作，可能需要另外連結。",
        "電子郵件：寄到 Bot 專屬地址的信件可以啟動例行程序。",
        "只有新的動態才會觸發執行。觸發條件盡量設得精準：在一個熱鬧的頻道監看每一則訊息，用量會很快耗盡。",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Grok Bot 例行程序的上限",
      headers: ["項目", "數值"],
      rows: [
        ["每個 Bot 的例行程序數量", "最多 50 個"],
        ["最短排程間隔", "兩次執行至少相隔 5 分鐘"],
        ["所有例行程序合計每小時執行次數", "最多 300 次"],
        ["單一例行程序每小時執行次數", "最多 200 次"],
        ["保留的執行紀錄", "每個例行程序最近 20 次"],
        ["超過頻率上限", "執行失敗，顯示「Automation run rate limit exceeded」"],
        ["長時間沒使用之後", "Grok Bot 可能會詢問是否繼續執行例行程序，如果你沒有回應就會暫停它們"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Grok Bot 例行程序沒有執行？逐項檢查",
      points: [
        "從來沒有執行過：新的例行程序要等到下一個排定時間。點選「Test」立刻執行一次。",
        "被暫停了：桌面版那一列的開關是關閉的，或手機上的「Active」是關閉的。你離開一段時間後，Grok Bot 也可能自行暫停例行程序。",
        "時間不對：查看「When to run」，再檢查「Settings > Bot」裡的「Timezone」。「Auto-detect」會跟著你目前使用的電腦。",
        "Slack 觸發沒有反應：訊息必須是新的、在被監看的頻道裡，並且包含相符的片語。",
        "Webhook 沒有啟動執行：只要回應不是 200 就代表沒有啟動。請確認例行程序沒有暫停，而且金鑰是目前的。",
        "因頻率上限而執行失敗：把觸發條件設得更精準或拉長排程間隔，再用「Test」或重新送出 Webhook 執行一次。xAI 也把一些因共用的 Grok Bot 上限造成的失敗列為已知問題；這類失敗不會自動重試。",
        "用量用完了：每次執行都會消耗每週用量。暫停不需要的例行程序，並拉長排程間隔。在 The X Subscription 上，超出的用量從預付點數扣除；在舊版 Cursor 方案上，必須開啟隨選用量才能繼續。",
        "「Sync failed」：xAI 的例行程序文件沒有說明這個錯誤。開啟例行程序檢查排程和觸發條件，再執行「Test」；如果持續失敗，請在 App 裡聯絡 Grok Bot 支援。",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "xAI 自己範例中的例行程序點子",
      text: ["這些來自 xAI 文件裡的使用情境；每一個都只先草擬，在送出任何東西之前等你核准。"],
      headers: ["例行程序", "時間", "做什麼"],
      rows: [
        ["晨間簡報", "每天早上", "彙整各個應用程式在夜間的變化，並草擬一則團隊貼文"],
        ["收件匣管理", "夜間", "依緊急程度整理 Gmail，為緊急的對話草擬回覆但不寄出"],
        ["下週預覽", "週日晚上", "檢查 Google 日曆、標出衝突，並傳一份週一計畫"],
        ["會議紀錄", "每天晚上", "從 Granola 筆記中整理出附負責人的待辦事項，並草擬 Slack 貼文"],
        ["專案進度", "每週五", "草擬 Notion 進度更新，經你核准後再加進去"],
        ["行銷活動小組", "每週一早上 9 點", "抓取註冊資料、草擬上市內容，並對照數字查核"],
        ["競品情報", "每週", "附上連結回報競品的新發表和價格變動"],
        ["月底結帳", "每月 1 日", "比對發票、核對支出，列出需要你簽核的例外項目"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "你的程式 agent 也能有例行程序",
      text: [
        "Grok Bot 例行程序適合 Gmail、Slack 和 Notion 裡的工作。如果工作在程式碼儲存庫裡，Crewmark 能讓你自己的 Claude Code 或 Codex 也有同樣的節奏：一位有職位、量化目標、工作時間和心跳的 AI 員工，心跳會叫醒它去看板領取下一個 issue。",
      ],
      steps: [
        {
          title: "在你的 agent 上聘用一位員工",
          text: "在 Claude Code 或 Codex 對話中執行設定指令，這個對話就會成為員工。參見[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "設定工作時間和心跳",
          text: "在你選擇的時段內，每 15 到 240 分鐘醒來一次，半夜也行。參見[如何讓 Claude Code 主動工作](/proactive-claude-code)和 [Codex 排程任務](/proactive-codex)。",
        },
        {
          title: "比較各個個人 Agent",
          text: "參見 [Grok Bot 指南](/personal-agent/grok-bot)和[個人 AI Agent 比較](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "建立 Grok Bot 例行程序" },
  mid: {
    title: "想讓程式 agent 也有同樣的例行程序？",
    text: "Crewmark 在工作時間依心跳叫醒你的 Claude Code 或 Codex，交給它下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "如何在 Grok Bot 排程例行程序？",
        a: "在負責這件工作的 Bot 的對話裡，請它設定一個例行程序並說明時間，例如「每個工作日早上 8:00」。在手機上，開啟 Bot 的個人檔案並點選「Add routine」。接著開啟例行程序，檢查「When to run」和你的時區。",
      },
      {
        q: "為什麼我的 Grok Bot 例行程序沒有執行？",
        a: "通常是因為它還在等第一個排定時間、被暫停了，或時區設定不對。執行「Test」確認它能正常運作，確定「Active」已開啟，再查看「When to run」。沒有得到 200 回應的 Webhook 呼叫不會啟動執行。",
      },
      {
        q: "如何用 Webhook 觸發 Grok Bot 例行程序？",
        a: "請 Bot 加上 Webhook 觸發條件，然後在桌面版從例行程序的「Webhook」區塊複製網址和金鑰，以 `Authorization: Bearer <key>` 送出 HTTP POST。JSON 內容會傳給 Bot。",
      },
      {
        q: "Grok Bot 例行程序最多能多頻繁執行？",
        a: "最短每 5 分鐘一次。每個例行程序每小時最多執行 200 次，所有例行程序合計最多 300 次，一個 Bot 最多可以有 50 個例行程序。",
      },
      {
        q: "電腦關機時，例行程序還會執行嗎？",
        a: "會。Bot 在雲端電腦上工作，所以排程和觸發的執行在你闔上筆電後照常進行，完成時 Bot 會通知你。",
      },
      {
        q: "Grok Bot 例行程序會消耗用量嗎？",
        a: "會。每次執行，包括「Test」，都會消耗你的 Grok Bot 用量；頻繁的排程和熱鬧的 Slack 觸發條件消耗得最快。",
      },
    ],
  },
  cta: {
    title: "給你的程式 agent 一份排程和一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 xAI 的 Grok Bot 文件和 Cursor 的 Grok Bot 方案頁面查核。",
  disclaimer: "Crewmark 是獨立產品，與 xAI、SpaceX、X 和 Cursor 皆無關聯，也未獲其背書。Grok 是其所有者的商標。",
};
