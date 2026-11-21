import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code：加入 Sentry 託管的 MCP 伺服器，再用 OAuth 登入
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex：透過 mcp-remote 橋接
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# 職位：錯誤分流
由週期性 issue「Sentry 分流」觸發，平日 9:00 和 14:00。

1. 在 Sentry 裡列出正式環境中，自上次執行以來首次出現或再次出現的
   未解決問題。
2. 逐一在看板上查有沒有對應的 issue（搜尋 Sentry 的問題 ID）。
   有的話，把新的次數以評論加上去。
3. 沒有就開一個 issue：以錯誤當標題，寫清楚受影響的使用者數和事件數、
   首次和最近出現時間、最上面幾層堆疊、從哪個版本開始，
   以及你對原因的最佳推測（註明是推測）。
4. 優先順序：擋住註冊、付款或資料的標 Urgent；影響超過 1% 工作階段的
   標 High；其餘標 Medium。
5. 如果修正既小又明顯，就把它當作你的下一個 issue，
   附上測試開 pull request。不要合併。
6. 絕不自己在 Sentry 裡解決、忽略或刪除任何東西。`;

export const copy: GuideCopy = {
  meta: {
    title: "每天用 Claude Code 或 Codex 分流 Sentry 錯誤",
    description:
      "讓 Claude Code 或 Codex 上的 AI 員工每天兩次讀取新的 Sentry 錯誤，附上堆疊、影響和可能原因記到看板上，並為小問題開修正用的 pull request。附 Sentry MCP 設定和可複製的職位說明。",
  },
  breadcrumb: "Sentry 錯誤分流",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "使用情境 · 工程",
    title: "由 Claude Code 或 Codex 上的 AI 員工分流 Sentry 錯誤",
    lead: "Sentry 裡的新錯誤，累積的速度比任何人讀的速度都快。一位在你自己的 Claude Code 或 Codex 上執行的 AI 員工，可以依排程檢查 Sentry、跳過看板上已經有的，把每個新錯誤開成 issue（附堆疊追蹤、受影響的使用者和可能原因），並自己接手小修正，開 pull request 等待審查。以下說明如何連接 Sentry 的 MCP 伺服器、可複製的職位說明，以及確保安全的規則。",
    cta: "開始使用",
    secondary: "連接 Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "員工會做什麼",
      points: [
        "讀取自上次執行以來新出現或再次出現的未解決 Sentry 問題。",
        "和看板比對去重：反覆出現的錯誤只會多一則評論，而不是十個新 issue。",
        "寫出有用的 issue：影響範圍、首次和最近出現時間、從哪個版本開始、最上面幾層堆疊，以及可能原因（明確標示為推測）。",
        "依你寫的規則設定優先順序，例如任何擋住註冊或付款的問題都是緊急。",
        "修掉明顯的問題：一個 null 檢查、一個缺少的翻譯 key、一個錯誤的重新導向。它會附上測試開 pull request，等待審查。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 或 Codex 上設定 Sentry 分流",
      steps: [
        {
          title: "連接 Sentry 的 MCP 伺服器",
          text: "Sentry 在 mcp.sentry.dev 託管了一個 MCP 伺服器，採用 OAuth 登入，所以不用安裝任何東西，也不必貼上 token。加入後啟動 agent，依提示登入 Sentry。它讓 agent 能存取 Sentry 的問題、錯誤、專案和 Seer 分析。",
          code: connect,
        },
        {
          title: "複製職位說明",
          text: "Claude Code 放進 CLAUDE.md，Codex 放進 AGENTS.md，放在錯誤來源的那個儲存庫裡，讓它能讀到每層堆疊背後的程式碼。",
          code: brief,
        },
        {
          title: "排入排程",
          text: "把分流設成週期性 issue，例如 `--repeat \"weekdays at 9:00\"`；錯誤量大的話，下午再加一個。",
        },
        {
          title: "審查修正",
          text: "修正用的 pull request 走你們平常的審查流程。員工對影響範圍或負責人拿不準時，會把 issue 標為「需處理」並提問。",
        },
      ],
      source: { label: "來源：Sentry 的 MCP 伺服器文件", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "確保安全的規則",
      points: [
        "讀取 Sentry，寫入看板。在 Sentry 裡解決、忽略或刪除，交給人來做。",
        "只看正式環境：把它指向正式環境，免得把測試環境的雜訊開成 issue。",
        "推測就是推測：每個 issue 裡寫的原因，在有人確認之前都標為假設。",
        "不合併：修正一律是附測試的 pull request，絕不直接推送。",
        "個人資料：Sentry 事件可能含有使用者資訊；issue 裡只寫次數和 ID，不寫電子郵件或 IP。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "一位每天從你的錯誤開始工作的工程師",
      text: [
        "分流天生適合當作 AI 軟體工程師的週期性 issue。Crewmark 把你的 Claude Code 或 Codex 變成這樣的員工，並配上工作時間和心跳。",
      ],
      steps: [
        {
          title: "從職位開始",
          text: "[AI 軟體工程師](/ai-employees/software-engineer)會從看板領取 issue 並開 pull request。",
        },
        {
          title: "把分流加成週期性 issue",
          text: "時間到了就分流，接著處理它開出的 issue。",
        },
        {
          title: "更多工程工作",
          text: "參見[用 Claude Code 做工程](/for/engineering)和[每個 pull request 都有 AI 程式碼審查](/use-cases/pr-review)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上設定 Sentry 錯誤分流" },
  mid: {
    title: "想在站立會議前就把新錯誤記好、小問題修好？",
    text: "在你的 Claude Code 或 Codex 上執行的 Crewmark 工程師依排程分流 Sentry，並開修正用的 pull request。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "如何把 Sentry 連接到 Claude Code？",
        a: "執行 `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`，啟動 Claude Code，依提示用 OAuth 登入 Sentry。伺服器由 Sentry 託管，不用安裝任何東西。",
      },
      {
        q: "Sentry 的 MCP 伺服器能用在 Codex 上嗎？",
        a: "可以，透過 mcp-remote 橋接：`codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`。",
      },
      {
        q: "agent 能自己解決 Sentry 問題嗎？",
        a: "可以給它這個權限，但我們建議不要：讓它記錄和修正，解決和忽略交給人，免得不小心把問題藏起來。",
      },
      {
        q: "分流多久執行一次？",
        a: "對多數團隊來說，平日每天兩次就夠了；產品上線期間可以加上每小時一次。每次執行都會消耗你 agent 方案的用量，所以別每幾分鐘就跑一次。",
      },
      {
        q: "issue 會記到哪裡？",
        a: "記到你們團隊追蹤工作的地方。使用 Crewmark 的話，就記在員工工作的同一塊看板上；否則用你們追蹤工具的 MCP 伺服器或 CLI，例如 Linear 或 GitHub 的。",
      },
    ],
  },
  cta: {
    title: "你還沒喝到咖啡，錯誤已經記好、小問題也修好了。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Sentry 的 MCP 伺服器文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Sentry、Anthropic 和 OpenAI 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
