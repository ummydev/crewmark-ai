import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: 找出今天的 SEO 主題。在每次 SEO 工作階段開始時使用。
---

1. 查看讀者所用產品的更新紀錄和新聞。
2. 針對每個候選主題，抓取 Google 自動完成建議，
   記下大家已經在輸入的長尾變化。
3. 只保留和我們產品相關、且搜尋結果第一頁
   還沒有好答案的主題。
4. 把選定的主題、理由和被淘汰的主題寫進
   docs/seo/log.md，然後撰寫頁面草稿。`;

const claudeMd = `# SEO 規則
- 事實只取自官方文件；註明查核日期。
- 每個頁面開頭用一句話下定義，接著是步驟、
  比較表和常見問題。
- 每個 URL 只有一個主關鍵字；先查 docs/seo/keywords.md。
- 部署之後：ping IndexNow、要求建立索引、記錄到日誌。`;

export const copy: GuideCopy = {
  meta: {
    title: "AI SEO Agent：用 Claude Code 打造的方法 | Crewmark AI",
    description:
      "AI SEO agent 能做什麼、行得通的每日工作流程，以及如何用 Claude Code 或 Codex 打造一個：CLAUDE.md 規則、skill、MCP、IndexNow 與排程。根據負責本站 SEO 的 agent 的實際經驗。",
  },
  breadcrumb: "AI SEO agent",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 員工",
    title: "AI SEO agent：如何打造一個每天都在工作的 SEO 代理",
    lead: "AI SEO agent（AI SEO 代理）是被賦予成長自然流量這份工作的程式設計代理，例如 Claude Code 或 Codex：它找出大家開始搜尋的主題，撰寫並翻譯頁面，把頁面上線，要求搜尋引擎建立索引，再檢查哪些數字有了變化。本站的 SEO 就是這樣運作的，由 Crewmark 上的一位 AI 員工負責。本文介紹它遵循的工作流程、讓它保持可靠的規則和 skill、它需要的工具，以及如何打造你自己的 AI SEO agent。",
    cta: "開始使用",
    secondary: "直接看建置步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "AI SEO agent 能做什麼",
      points: [
        "找主題：閱讀產品更新紀錄和新聞，再查 Google 自動完成和 Google Trends，看看大家已經在搜尋哪些問題。",
        "避免自家頁面互搶排名：維護一份關鍵字地圖，每個 URL 只對應一個主關鍵字，動筆前先查。",
        "寫出先回答問題的頁面：一句話定義、步驟、比較表和常見問題，這種結構也適合會引用網頁的 AI 助理。",
        "翻譯並上線：為你支援的每種語言產生頁面，在本機測試，然後交給負責部署的人。",
        "讓頁面被收錄：ping IndexNow、重新提交 Sitemap 並要求建立索引。",
        "衡量並調整：查看 Search Console 和分析數據，針對有曝光卻沒點擊的頁面改寫標題或補上內部連結。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何用 Claude Code 打造 AI SEO agent",
      steps: [
        {
          title: "把規則寫進 CLAUDE.md",
          text: "把沒得商量的規矩放在 agent 每個工作階段都會讀到的地方：事實可以從哪裡來、頁面如何組織、每次部署後要做什麼。參見 [CLAUDE.md 指南](/blog/claude-md)。",
          code: claudeMd,
        },
        {
          title: "把每日例行工作做成 skill",
          text: "`.claude/skills/` 裡的 skill 存放一步一步的例行流程，只在用到時才載入。每個工作階段都從它開始。參見 [Claude Code skill](/blog/claude-code-skills)。",
          code: skill,
        },
        {
          title: "在程式碼庫裡維護關鍵字地圖和日誌",
          text: "兩個 Markdown 檔案就能解決很多問題：`keywords.md`（關鍵字 → URL → 狀態）避免兩個頁面爭搶同一個搜尋字詞，`log.md` 記錄選了什麼、為什麼選，讓下一個工作階段接著做，而不是從頭再來。",
        },
        {
          title: "給它需要的工具",
          text: "用於研究的網頁搜尋和擷取、網站程式碼和用來測試頁面的本機開發伺服器、連接分析數據的 MCP 伺服器或 CLI，以及一支呼叫 IndexNow 的腳本。有 CLI 就優先用 CLI，消耗的 token 更少。參見 [Claude Code MCP](/blog/claude-code-mcp)。",
        },
        {
          title: "守住高風險的步驟",
          text: "發布應該經過審查或由負責部署的人執行，絕不能由 agent 直接上線。對絕不能發生的操作，用權限規則和 [hooks](/blog/claude-code-hooks) 擋下，也別把密鑰寫進提示詞和檔案。",
        },
        {
          title: "讓它依排程運作",
          text: "SEO 看重穩定產出，所以 agent 應該每個工作日自己開工。單一重複執行的提示詞可以用 `/loop` 或排程任務；也可以給它心跳和一份待辦清單，參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
      source: { label: "來源：IndexNow 文件", href: indexnow },
    },
    {
      kind: "table",
      title: "AI SEO 每日工作流程",
      text: [
        "這是本站背後那位 AI SEO 員工每天逐項完成的檢查清單，最後會寫一份書面報告。",
      ],
      headers: ["步驟", "agent 做什麼", "產出"],
      rows: [
        ["1. 發掘", "瀏覽最近 1–3 天的更新紀錄、廠商部落格、GitHub 和新聞；擷取自動完成和 Trends 數據", "一份簡短的候選主題清單"],
        ["2. 驗證", "確認主題和產品相關、需求正在上升，且第一頁還沒有好答案", "選定一個主題，並記錄理由"],
        ["3. 撰寫", "只根據官方來源撰寫草稿，然後翻譯", "每種語言各一個頁面"],
        ["4. 上線", "型別檢查、本機渲染、提出部署請求", "頁面在網站上線"],
        ["5. 索引", "ping IndexNow、重新提交 Sitemap，在 Search Console 和 Bing 要求建立索引", "已通知搜尋引擎"],
        ["6. 回報", "記錄流量、與目標的差距和完成的工作", "給團隊的每日報告"],
      ],
    },
    {
      kind: "text",
      title: "實際運作中學到的事",
      points: [
        "動筆前先確認需求：社群媒體上的熱門詞，搜尋量可能很小；Google Trends 曾顯示，一個相關詞的搜尋量約是大家都在討論的那個詞的 30 倍。",
        "事實只取自第一手來源：agent 的研究 subagent 有時會讀錯頁面；發布任何出人意料的內容前，重新打開官方來源核對。",
        "對新網站來說，索引是瓶頸：要求建立索引後，新頁面大約一天內就進了 Google，但每日配額很快就會用完。",
        "多語言讓頁面數倍增，工作量卻不會：一個結構清楚的英文頁面，加一道翻譯步驟就變成九個。",
        "穩定勝過衝刺：目標是 agent 不用催也能維持的每日節奏。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "直接雇用一位 AI SEO 專員，而不是自己寫腳本",
      text: [
        "Crewmark 有現成可雇用的 SEO 專員：它在你的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段裡執行，工作時間內依心跳醒來，從看板上接手下一個 issue 並回報進度，本站的 SEO 就是這樣做的。",
      ],
      steps: [
        {
          title: "選擇 SEO 專員職位",
          text: "它的 skill、目標和排程都已設定好；把目標改成你自己的數字，例如每週的 Search Console 點擊數。目標、每日流程和職位說明見 [AI SEO 專員](/ai-employees/seo-specialist)。",
        },
        {
          title: "連接你的專案",
          text: "在網站的程式碼庫裡執行設定指令，讓它能撰寫頁面、測試頁面並提出部署請求。",
        },
        {
          title: "負責審閱，不必盯著",
          text: "它會在自己的 issue 下留言，需要你拍板時傳訊息給你。了解[什麼是 AI 員工](/ai-employees)，並比較[各家 AI 員工平台](/blog/best-ai-employee-platforms)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 Claude Code 打造 AI SEO agent" },
  mid: {
    title: "想要 SEO agent，又不想自己打造？",
    text: "Crewmark 的 SEO 專員執行在你的 Claude Code 或 Codex 上，依心跳醒來，逐項處理 SEO 待辦事項。",
    button: "開始使用",
  },
  faq: {
    title: "AI SEO agent 常見問題",
    items: [
      {
        q: "什麼是 AI SEO agent？",
        a: "一個 AI agent，通常是 Claude Code 或 Codex 這類程式設計代理，被賦予持續成長自然流量的工作：找主題、撰寫並上線頁面、讓頁面被索引，並衡量成效。",
      },
      {
        q: "AI agent 能自己做 SEO 嗎？",
        a: "日常工作大多可以：研究、撰寫、翻譯、技術檢查和要求建立索引。發布、帳號以及任何無法復原的操作，仍應經過人或負責部署的人。",
      },
      {
        q: "有免費的 AI SEO agent 嗎？",
        a: "你可以在已經付費的 agent 上打造一個，例如 Claude 方案裡的 Claude Code 或 ChatGPT 裡的 Codex，再搭配 Google 自動完成、Google Trends、Search Console 和 IndexNow 這些免費工具。",
      },
      {
        q: "AI SEO agent 需要哪些工具？",
        a: "網頁搜尋和擷取、網站程式碼的存取權和測試頁面的方法、Search Console 和分析數據的讀取權限，以及通知搜尋引擎的方法，例如 IndexNow。",
      },
      {
        q: "如何避免 AI SEO agent 發布錯誤的事實？",
        a: "在規則裡要求使用官方來源並註明查核日期，讓它在發布出人意料的說法前重新打開來源核對，並讓發布經過審查。",
      },
      {
        q: "AI 寫的頁面會有排名嗎？",
        a: "頁面靠實用性獲得排名，而不是看誰寫的。率先回答一個真實且熱度上升的問題、步驟和比較都正確的頁面，正是 AI SEO agent 應該產出的。",
      },
      {
        q: "做 SEO 該用 n8n 還是程式設計代理？",
        a: "工作流程工具適合固定的流水線；程式設計代理適合需要判斷和修改程式碼的工作，例如把頁面寫進程式碼庫並測試。",
      },
    ],
  },
  cta: {
    title: "給你的網站一位從不忘記檢查清單的 SEO 隊友。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "工作流程來自本站 AI SEO 員工的實際運作；Claude Code 和 IndexNow 的細節已於 2026 年 11 月 7 日對照其文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI 或 Google 無關，也未獲其背書。產品名稱為其所有者的商標。",
};
