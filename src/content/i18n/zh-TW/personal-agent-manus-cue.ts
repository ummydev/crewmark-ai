import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/manus-cue; the English master is
// src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# 一個 agent 幫忙跑腿
每個工作日早上 8 點，檢查我收件匣裡和搬家有關的信，
寄一份簡短摘要給我。回覆任何人之前先問我。

# 一個有共同目標的小團隊（把 Manus 自己的例子寫成提示詞）
我們要在 3 月為 20 個人辦一次團隊外地活動。
你們一個去研究里斯本附近的場地，一個把結果整理成三個候選，
一個起草一份附建議的簡報，最後由我決定。`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue：邀請碼、使用方式與價格",
    description:
      "Manus 的 Cue 完整說明：擁有自己的電子郵件、電話號碼、錢包和電腦的個人 agent。如何用邀請碼取得使用資格、如何下載、如何使用單一 agent 和群組聊天團隊、排程自動化，以及費用。",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Manus Cue",
    title: "Manus Cue：擁有自己電子郵件、電話和錢包的個人 agent",
    lead: "Cue 是 Manus 推出的獨立 App，專門用來放你的個人 agent，於 2026 年 9 月 28 日隨 Manus 2.0 開放搶先體驗。它的特別之處：每個 agent 都有自己的電子郵件地址、電話號碼、錢包和電腦，因此能傳訊息給別人、幫你接電話，並在你設定的預算內付款。本文說明如何用邀請碼加入、如何下載、如何使用一個 agent 或一整個團隊、排程自動化、費用，以及仍未釐清的問題。",
    cta: "開始使用",
    secondary: "取得使用資格",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Manus Cue 是什麼",
      text: [
        "Manus 形容 Cue 是「一款全新的獨立 App，讓你在手機和電腦上使用個人 agent」。它和 Manus 建立在同一套基礎架構上，但它是獨立的 App，不是 Manus 裡的某個模式。",
      ],
      points: [
        "自己的身分：每個 agent 都有電子郵件地址、電話號碼、錢包和電腦。",
        "電話：agent 可以幫你接電話，並在 Cue 裡留一份摘要給你。",
        "付款：agent 可以在你設定的預算內付款。",
        "團隊：幾個 agent 可以共用一個群組聊天和共同目標，彼此交接工作，由你決定方向並做最後決定。",
        "實體場景：在餐廳掃描 QR code，讓你的 agent 幫你點餐或排隊。",
        "只要一個助理也可以：留一個 agent 幫你跑腿、提醒和做研究。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何取得 Manus Cue",
      steps: [
        {
          title: "拿到邀請碼",
          text: "Cue 仍在搶先體驗階段，需要邀請碼。上線時 Manus 提供了邀請碼 MEETCUE，名額有限、先到先得；Manus 沒有說明它現在是否仍然有效。每個取得資格的人都會收到額外的邀請碼可以分享，所以可以向已經在用 Cue 的人索取。",
        },
        {
          title: "從 Manus 下載 App",
          text: "在 Manus 裡開啟側邊欄的「Agents (Cue!)」分頁，掃描 QR code 下載 App。Manus 列出了網頁版、桌面版和行動版；上線時 iOS 版還在等 App Store 審核，要使用前先到 App Store 確認。",
        },
        {
          title: "用邀請碼登入",
          text: "登入時輸入邀請碼。Manus 也可能另外用電子郵件寄一份給你。",
        },
        {
          title: "建立第一個 agent",
          text: "先建一個幫你跑腿的 agent，或組一個有共同目標的小團隊。說清楚要做什麼、它能花多少預算，以及哪些事必須先問你。",
          code: prompts,
        },
      ],
      source: { label: "來源：Manus 發表 Manus 2.0 和 Cue 的文章", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "排程自動化和 skill",
      points: [
        "排程自動化（Scheduled Automations）：說明要做什麼、什麼時候做，Cue 就會幫你設定好。",
        "依事件觸發（例如收到新郵件或 Slack 訊息）是 Manus Automations 裡描述的功能；Manus 沒有說 Cue 已經支援。",
        "你在 Manus 裡建立或匯入的 skill 不會自動帶到 Cue，需要在 Cue 裡重新設定。",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Manus Cue 價格",
      headers: ["", "Manus 的說法"],
      rows: [
        ["搶先體驗", "免費，需要邀請碼"],
        ["搶先體驗之後", "尚未公布"],
        ["Manus 訂閱或點數", "發表文章沒有說 Manus 方案包含 Cue，也沒有說 Cue 會使用 Manus 點數"],
        ["agent 付款", "agent 在你設定的預算內用自己的錢包付款"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "把你的電話號碼交給它之前，還有這些問題沒有答案",
      points: [
        "agent 可以聯絡誰、能替你承諾什麼，發表文章裡沒有說明。設好預算，並告訴每個 agent 哪些事要先問你。",
        "對方如何得知自己在和 agent 對話，同樣沒有說明。",
        "搶先體驗之後的價格，以及 Cue 在哪些國家可以使用，都還沒公布。",
        "會傳訊息、會用錢包付款的 agent 一旦出錯，可能讓你賠錢；先從小額預算開始。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue 與 Meta Muse、Grok Bot 比較",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["agent 身分", "自己的電子郵件、電話號碼、錢包和電腦", "透過你連結的帳號操作", "以你的身分操作；沒有自己的帳號"],
        ["多個 agent 組隊", "支援，群組聊天共享一個目標", "未說明", "支援，Bot 之間可以交接工作"],
        ["排程", "排程自動化", "提醒和週期性任務", "例行程序：依排程或觸發條件"],
        ["使用資格", "搶先體驗，需要邀請碼", "美國，免費，有每週額度", "X Premium 以上、SuperGrok、Cursor 方案"],
        ["指南", "本頁", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "在你已經在用的 agent 上，組一支處理工作的團隊",
      text: [
        "Cue 給每個個人 agent 一個身分。Crewmark 給每個工作 agent 一份工作：它把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳，和團隊其他成員一起處理共用看板上的工作。",
      ],
      steps: [
        {
          title: "挑選職位",
          text: "從 [AI 員工職位](/ai-employees)開始：工程師、SEO 專員、行銷代理、社群經理、設計師。",
        },
        {
          title: "把工作放上看板",
          text: "每位員工領取指派給自己的下一個 issue，邊做邊留評論，卡住時傳訊息給你。",
        },
        {
          title: "比較各種個人 Agent",
          text: "參見[個人 AI Agent 比較](/personal-agent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "開始使用 Manus Cue" },
  mid: {
    title: "想讓一支 agent 團隊處理你真正的工作？",
    text: "Crewmark 員工依心跳處理共用看板上的工作，用的是你已經付費的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Manus Cue 是什麼？",
        a: "Manus 推出的個人 agent 獨立 App，於 2026 年 9 月 28 日開放搶先體驗。每個 agent 都有自己的電子郵件地址、電話號碼、錢包和電腦，幾個 agent 可以在群組聊天裡一起工作。",
      },
      {
        q: "如何取得 Manus Cue 邀請碼？",
        a: "上線時 Manus 提供了 MEETCUE，名額有限、先到先得。每個取得資格的人都會收到額外的邀請碼可以分享，所以最可靠的方法是向現有的 Cue 使用者索取。",
      },
      {
        q: "Manus Cue 多少錢？",
        a: "搶先體驗期間憑邀請碼免費。Manus 還沒公布之後的價格，也沒說 Manus 訂閱是否會包含它。",
      },
      {
        q: "如何下載 Manus Cue？",
        a: "在 Manus 側邊欄開啟「Agents (Cue!)」分頁，掃描 QR code。Manus 列出了網頁版、桌面版和行動版；上線時 iOS 版還在等 App Store 審核。",
      },
      {
        q: "Cue 的 agent 能打電話和付款嗎？",
        a: "每個 agent 都有自己的電話號碼和錢包：它能幫你接電話並留下摘要、傳送訊息，並在你設定的預算內付款。",
      },
      {
        q: "Cue 是 Manus 的一部分嗎？",
        a: "它和 Manus 建立在同一套基礎架構上，但是獨立的 App。Manus 裡的 skill 不會自動帶過去，Manus 也沒說 Cue 會使用 Manus 點數。",
      },
    ],
  },
  cta: {
    title: "個人 agent 幫你跑腿，AI 員工幫你清待辦。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Manus 發表 Manus 2.0 的文章和 Manus 說明中心查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Manus、Meta 和 xAI 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
