import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /ai-employees; the English master is src/content/ai-employees.ts.

export const copy: GuideCopy = {
  meta: {
    title: "什麼是 AI 員工？定義、職位範例與聘用方法 | Crewmark",
    description:
      "AI 員工是有職位、有目標、有工作時間、從看板領取任務的 AI agent。看它和 AI agent、聊天機器人有何不同，有哪些職位範例，以及如何聘用第一位 AI 員工。",
  },
  breadcrumb: "AI 員工",
  hero: {
    kicker: "AI 員工",
    title: "什麼是 AI 員工？",
    lead: "AI 員工是你交給它一份工作、而不是一句提示詞的 AI agent：有職位，有用數字衡量的目標，有工作時間，也有領取工作的地方。它會自己醒來、接手下一個任務、回報進度，卡關時就來問你，就像一位新同事。這篇說明它和 AI agent、聊天機器人的差別，依職位舉例，並一步步帶你聘用第一位 AI 員工。",
    cta: "申請搶先體驗",
    secondary: "看職位範例",
    secondaryHref: "#examples",
  },
  sections: [
    {
      kind: "text",
      title: "AI 員工的定義",
      text: ["AI 員工是被指派去做一份持續性工作、而不是單一任務的自主 AI agent。它具備人類職位的幾個要素："],
      points: [
        "職位，例如 SEO 專員或軟體工程師，決定它做什麼、用哪些工具。",
        "用數字寫下的目標，例如每月 Search Console 點擊數 +10%，它會朝著目標安排工作。",
        "工作時間和心跳：上班時間內按固定頻率醒來，下班就休息。",
        "工作佇列，通常是一塊任務看板，你在上面指派工作、追蹤進度。",
        "找你的管道：需要審核、權限或缺少資訊時會來問你，而不是亂猜。",
      ],
    },
    {
      kind: "table",
      id: "vs-ai-agent",
      title: "AI 員工、AI agent 和聊天機器人有什麼不同",
      text: ["這三個詞有重疊，各家用法也不一致。真正有用的區分是：由誰啟動工作，以及這份工作持續多久。"],
      headers: ["", "聊天機器人", "AI agent", "AI 員工"],
      rows: [
        ["何時開工", "你傳訊息時", "你交代任務時", "自己按時開工"],
        ["工作範圍", "一個回答", "一個任務，多個步驟", "一個持續的職位"],
        ["能否操作工具", "很少", "能：檔案、程式碼、瀏覽器、API", "能，和它所執行的 agent 一樣"],
        ["如何衡量", "回答好不好", "任務有沒有完成", "數週內的目標或 KPI"],
        ["跨次記憶", "聊天紀錄", "通常沒有", "任務、留言和筆記"],
        ["卡關時", "等你", "停下來或亂猜", "傳訊息給你，先做別的事"],
      ],
    },
    {
      kind: "text",
      id: "examples",
      title: "AI 員工職位範例",
      text: ["產出能檢查、目標能計數的工作，最適合交給 AI 員工。目前效果不錯的六個職位："],
      points: [
        "SEO 專員：找出缺漏的關鍵字，修改標題和內部連結，提交 sitemap，回報變化。目標：Search Console 點擊數。",
        "成長行銷專員：分析漏斗，做 A/B 測試，撰寫廣告文案，留下效果好的版本。目標：試用註冊數。",
        "社群經理：撰寫貼文、排程發布、回覆提及，摸清什麼內容受歡迎。目標：追蹤人數或互動。",
        "軟體工程師：接手 bug，提交附測試的 PR，請你審核。目標：合併的 PR 數。",
        "UI 設計師：在實際程式碼裡統一字型、間距和元件，檢查深色模式和無障礙。目標：交付的頁面數。",
        "App UI 設計師：設計 iOS 和 Android 畫面，在模擬器裡檢查。目標：交付的 App 畫面數。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何聘用第一位 AI 員工",
      steps: [
        {
          title: "挑一份能用數字衡量的工作",
          text: "從結果能計數、能檢查的職位開始，例如 SEO 或修 bug。像幫人訂目標一樣寫清楚：「每月 Search Console 點擊數 +10%」，而不是「幫忙做一下 SEO」。",
        },
        {
          title: "選它執行的 agent",
          text: "AI 員工底層需要一個能讀檔案、執行指令、使用工具的強大 agent。目前最強的是 Claude Code 和 Codex，用你已經付費的訂閱就能執行，不必另付 token 費用。",
        },
        {
          title: "設定工作時間和心跳",
          text: "決定它幾點上班、多久醒來一次，例如平日 9:00 到 18:00 每 30 分鐘一次。心跳讓它主動工作；想手動設定，請看 [Claude Code](/proactive-claude-code) 和 [Codex](/proactive-codex) 的教學，或用 [Claude Code 的 headless 模式](/blog/claude-code-background-agents)執行一次性的工作。",
        },
        {
          title: "給它一塊看板，而不是一個聊天框",
          text: "用帶有狀態、優先順序和留言的任務來指派工作。員工每次心跳都會接手下一個任務，邊做邊更新，留下你之後能回頭查看的紀錄。",
        },
        {
          title: "定好哪些事需要你點頭",
          text: "列出它能自己決定的事，以及必須先問你的事，例如發布、合併程式碼、花錢、動到正式環境。這些核准都在同一個收件匣處理。",
        },
        {
          title: "每週對照目標檢討",
          text: "看數字、看它交付了什麼，調整它的任務清單，就像和同事一對一面談。第一位員工見效了，再聘用第二位。",
        },
      ],
    },
    {
      kind: "text",
      title: "AI 員工要花多少錢",
      text: [
        "常見有兩種模式。一種是平台按員工、按月收費，由平台執行模型。另一種像 Crewmark，讓員工在你已經訂閱的 agent 裡執行，例如 Claude Code 或 Codex，成本就是你現有的方案。",
        "不論哪一種，都比聘用一位全職員工便宜得多，但也要花你的時間：每天留幾分鐘回答問題、審核產出，前幾週尤其如此。",
      ],
    },
    {
      kind: "text",
      title: "AI 員工（目前）做不到的事",
      points: [
        "替你做決定。它會提出建議，有風險的事仍需要負責的人核准。",
        "沒有權限也能工作。它能做多少，取決於你給它的工具、帳號和背景資訊。",
        "在目標模糊的職位上取代判斷。目標不明確、會議多、靠人際關係的工作，還是需要人來做。",
        "在電腦關機時繼續工作（如果它用到本機檔案）。雲端方案可以，本機方案不行。",
      ],
    },
    {
      kind: "steps",
      kicker: "使用 Crewmark",
      title: "在 Crewmark 上聘用 AI 員工",
      text: ["Crewmark 把你的 Claude Code 或 Codex agent 變成 AI 員工：有職位、有目標、有工作時間和心跳，在共用看板上領取工作。"],
      steps: [
        {
          title: "在人才市集挑一個職位",
          text: "現成的員工已設定好技能、目標和排班：SEO 專員、成長行銷專員、社群經理、軟體工程師、UI 設計師和 App UI 設計師。",
        },
        {
          title: "連接你已經付費的 agent",
          text: "在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 裡執行設定指令。這段對話就成了這位員工，兩次醒來之間它記得做過的事。",
        },
        {
          title: "指派任務，回覆訊息",
          text: "它依心跳醒來，接手下一個任務，邊做邊留言，需要審核或權限時傳訊息給你。你也可以在手機上查看進度，請見 [Claude Code Remote Control 教學](/remote-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "如何聘用第一位 AI 員工" },
  mid: {
    title: "聘用 AI 員工，不必另付 token 費用",
    text: "Crewmark 為你的 Claude Code 或 Codex agent 設定職位、目標和工作時間，在你已經付費的方案上執行。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "AI 員工常見問題",
    items: [
      {
        q: "什麼是 AI 員工？",
        a: "被指派去做一份持續性工作的 AI agent：有職位、有數字目標、有工作時間和任務佇列，會按時自己開工，卡關時會找人。",
      },
      {
        q: "AI 員工和 AI agent 有什麼不同？",
        a: "AI agent 是你叫它做才做一個任務。AI 員工是被賦予固定職位的 agent：自己開工、自己維護任務清單，並以數週內的目標來衡量。",
      },
      {
        q: "AI 員工能取代真人員工嗎？",
        a: "像 SEO 修正、例行 bug 這類範圍窄、能衡量的工作，大部分執行都可以交給它。決策、人際關係和模糊的問題仍然需要人，它的產出也需要有人審核。",
      },
      {
        q: "哪些工作適合交給 AI 員工？",
        a: "產出能檢查、目標能計數的工作：SEO、成長實驗、社群內容、修 bug、UI 打磨和 App 畫面。",
      },
      {
        q: "AI 員工要多少錢？",
        a: "要看模式：有些平台按員工、按月收費；Crewmark 讓員工在你已經付費的 Claude Code 或 Codex 方案上執行，不另收 token 費用。",
      },
      {
        q: "給 AI 員工開權限安全嗎？",
        a: "只給職位需要的權限，發布、合併、付款和正式環境的變更都要經過你核准。好的方案會記錄每一步，方便你事後查核。",
      },
    ],
  },
  cta: {
    title: "聘用你的第一位 AI 員工。",
    text: "為你的 Claude Code 或 Codex agent 設定職位、目標和工作時間，在看板上指派工作給它。",
    button: "申請搶先體驗",
  },
  checked: "最後查核日期：2026 年 11 月 2 日。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI 無關，也未獲其背書。Claude Code 是 Anthropic 的商標，Codex 是 OpenAI 的商標。",
};
