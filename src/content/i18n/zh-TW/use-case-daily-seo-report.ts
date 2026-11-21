import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /use-cases/daily-seo-report; the English master is
// src/content/use-cases/daily-seo-report.ts.

const brief = `# 職位：SEO 報告
由週期性 issue「每日 SEO 報告」觸發，每天 18:30。

1. Search Console，最近 7 天：曝光、點擊、平均排名。
   看查詢和網頁兩張表。記下排進前 10 名的查詢、曝光在增加的網頁，
   以及有曝光卻沒有點擊的網頁。
2. 分析工具，最近 7 天：不重複訪客、來自搜尋的訪客、
   來自 AI 助理的訪客、搜尋訪客最常進入的到達網頁。
3. 和每週目標比較：曝光 10,000、點擊 500、不重複訪客 2,000。
4. 挑一個有效的方向，今天就加碼做一件事
   （相關網頁、FAQ、內部連結或翻譯）。
5. 把報告以評論發在 issue 上，列出需要我決定的事，
   然後把 issue 標為完成。

規則
- Search Console 和分析工具只需要唯讀權限。
- 忽略加了引號或帶一長串 -site: 的查詢：那是排名追蹤工具，不是真人。`;

const schedule = `# 建立一個週期性 issue，指派給你的 SEO 員工（Crewmark CLI）
crewmark issues create --title "每日 SEO 報告" --assignee "<員工>" \\
  --repeat "daily at 18:30" --timezone Asia/Taipei`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 每天寫 SEO 報告：AI 員工設定",
    description:
      "讓 Claude Code 或 Codex 每天寫 SEO 報告：Search Console 和分析數據、與目標的差距、哪些有效，以及當天為此做的一件事。附可複製的職位說明、需要的權限和排程方法。",
  },
  breadcrumb: "每日 SEO 報告",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "使用情境 · 行銷",
    title: "由 Claude Code 上的 AI 員工每天撰寫 SEO 報告",
    lead: "每天傍晚，一位在你自己的 Claude Code 或 Codex 上執行的 AI 員工，會抓取 Search Console 和分析工具最近 7 天的數據，和你的目標比較，找出開始見效的查詢和網頁，做一件事把它們再往前推，然後把報告發到團隊工作的地方。這正是 Crewmark 自己的 SEO 員工每天執行的流程；下面是可複製的職位說明、它需要的權限，以及如何排程。",
    cta: "開始使用",
    secondary: "複製職位說明",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "報告涵蓋哪些內容",
      points: [
        "搜尋：最近 7 天的曝光、點擊和平均排名，以及背後的查詢和網頁。",
        "哪些有效：排進前 10 名的查詢、曝光在增加的網頁，以及有曝光卻沒有點擊的網頁；後者通常代表標題或內容和搜尋意圖不符。",
        "訪客：不重複訪客、來自搜尋引擎的訪客、來自 ChatGPT 和 Perplexity 等 AI 助理的訪客，以及他們進入的到達網頁。",
        "與目標的差距：本週數字對照每週目標。",
        "今天做了什麼，以及需要你決定的事。",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "實例：我們自己 2026 年 11 月 10 日的報告",
      text: ["這是 Crewmark 的 SEO 員工為 crewmark.ai 發出的報告開頭，這個網站才上線幾週。"],
      headers: ["指標", "最近 7 天", "每週目標"],
      rows: [
        ["Search Console 曝光", "537（上一份報告是 309）", "10,000"],
        ["Search Console 點擊", "2", "500"],
        ["不重複訪客", "93，其中 16 位來自搜尋，0 位來自 AI 助理", "2,000"],
        ["有效的", "「base44 superagent」排第 4 名但沒有點擊：使用者進到的是總覽頁", "-"],
        ["採取的行動", "當天寫了一個 Base44 Superagent 專頁", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 或 Codex 上設定每日 SEO 報告",
      steps: [
        {
          title: "給它唯讀的數據權限",
          text: "Search Console：用唯讀的服務帳戶呼叫 Search Console API、接一個 MCP 伺服器，或讓 agent 操作一個你已登入的瀏覽器。分析工具：用它的 CLI、API 或 MCP 伺服器；我們的員工用的是 PostHog 的 CLI。唯讀權限就夠了。",
        },
        {
          title: "複製職位說明",
          text: "Claude Code 放進 CLAUDE.md，Codex 放進 AGENTS.md，再把目標改成你自己的。開源的 [Marketing Team Skills](/skills) 裡有一個 seo-daily-report skill，步驟相同。",
          code: brief,
        },
        {
          title: "排入排程",
          text: "把報告設成週期性 issue，每天同一時間回到員工手上，你也能一眼看出今天的做完了沒有。",
          code: schedule,
        },
        {
          title: "在你平常工作的地方閱讀",
          text: "報告會以評論的形式發在 issue 上。需要你處理時，它會把 issue 標為「需處理」並提問。",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "把報告變成行動",
      text: ["只描述數字的報告不會讓數字改變。有用的是「接下來做什麼」的規則，而它就寫在職位說明裡："],
      points: [
        "排進前 10 名或正在上升的查詢：寫相關的長尾內容（同一工具的其他用法、「vs」、替代方案、錯誤訊息、平台），補上 FAQ，從已經有訪客的網頁加內部連結，或翻譯成已經有人在搜尋的語言。",
        "有曝光卻沒有點擊：網頁和搜尋不符。依大家實際搜尋的查詢改標題，或為這個查詢另寫一頁。",
        "卡在第 50 名之後的熱門大字：別再花時間；新網站要先拿下長尾。",
        "把決定和結果寫進日誌，隔天的報告就能檢查有沒有效。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "聘用一位會寫這份報告的 SEO 員工",
      text: [
        "報告只是 SEO 專員一天工作的一部分。Crewmark 把你的 Claude Code 或 Codex 變成這樣的員工，有職位、量化目標、工作時間和心跳。",
      ],
      steps: [
        {
          title: "從職位開始",
          text: "[AI SEO 專員](/ai-employees/seo-specialist)內建目標、日常流程和職位說明。",
        },
        {
          title: "把報告加成週期性 issue",
          text: "它依心跳醒來，看到報告到期就發出來。",
        },
        {
          title: "看看行銷的其他工作",
          text: "更多行銷團隊能交出去的工作，參見[用 Claude Code 做行銷](/for/marketing)；下一個使用情境是[每週競品動態](/use-cases/weekly-competitor-digest)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上設定每日 SEO 報告" },
  mid: {
    title: "想每天拿到報告，連同報告背後的工作？",
    text: "Crewmark 的 SEO 專員在你的 Claude Code 或 Codex 上執行，依排程發出報告。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 能讀取 Google Search Console 嗎？",
        a: "可以，透過服務帳戶呼叫 Search Console API、接一個 Search Console 的 MCP 伺服器，或操作一個你已登入的瀏覽器。給它唯讀權限即可。",
      },
      {
        q: "如何用 Claude Code 排程每日 SEO 報告？",
        a: "Claude Code 不會自己啟動，必須有東西喚醒它。用週期性任務或心跳，參見[如何讓 Claude Code 主動工作](/proactive-claude-code)，或讓它以 Crewmark 員工的身分搭配週期性 issue 執行。",
      },
      {
        q: "每日 SEO 報告應該包含什麼？",
        a: "7 天的曝光、點擊和排名，以及背後的查詢和網頁；哪些排進前 10 名或正在上升；來自搜尋和 AI 助理的訪客；與目標的差距；今天做了什麼；需要決定的事。",
      },
      {
        q: "Codex 也能用嗎？",
        a: "可以。把同樣的職位說明放進 AGENTS.md，需要的權限也一樣。",
      },
      {
        q: "為什麼看 7 天而不是 1 天？",
        a: "Search Console 的數據會延遲一兩天，單日數字的波動也大。7 天才看得出趨勢；每日報告只是每天讀一次。",
      },
    ],
  },
  cta: {
    title: "每天拿到 SEO 報告，以及它要求的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "撰寫於 2026 年 11 月 10 日，依據 Crewmark 自己的 SEO 員工每天執行的流程。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI、Google 和 PostHog 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
