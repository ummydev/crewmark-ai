import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Crewmark 開源的行銷 skill，裝進你已有的 agent
npx skills add ummydev/marketing-team-skills

# 或者以 Claude Code 外掛安裝
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `每天傍晚，讀取 Search Console 和我們分析工具最近 7 天的數據，
告訴我哪些有效、針對它做一件事，再把報告發在「每日 SEO 報告」issue 上。

每週一，檢查 competitors.md 裡的價格頁和更新日誌，
和上週比對，告訴我改了什麼、我們哪些比較頁要更新。

把這週的部落格文章改寫成 5 則用我們語氣寫的 LinkedIn 和 X 草稿，
放到看板上等待審查；不要發布。

每週五，從 PostHog 拉出註冊和啟用數據，和上週比較，
寫出下週可以嘗試的三件事。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 做行銷：給行銷團隊的 AI 員工",
    description:
      "行銷團隊如何把 Claude Code 和 Codex 當成 AI 員工：依排程處理 SEO、內容、社群、競品追蹤和數據回報。職位、使用情境、可複製的提示詞和 skill，以及如何設定，確保沒有你點頭就什麼都不會發出去。",
  },
  breadcrumb: "用 Claude Code 做行銷",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "給行銷團隊",
    title: "用 Claude Code 做行銷：處理例行工作的 AI 員工",
    lead: "Claude Code 和 Codex 不只是工程師的工具。給它一個職位、合適的 skill 和排程，同一個 agent 就能撰寫和修正你網站的頁面、讓頁面被收錄、根據你推出的東西起草貼文、盯著競品，並每天回報數字。Crewmark 自己的行銷就是這樣運作的。本頁說明哪些工作可以交出去、由哪些職位負責、可以複製的提示詞和 skill，以及如何設定，確保任何公開內容都經過人。",
    cta: "開始使用",
    secondary: "看看有哪些工作",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "行銷團隊交給 AI 員工的工作",
      text: ["最適合先交出去的工作：每天或每週重複、有明確的完成標準，最後由你決定。"],
      headers: ["工作", "頻率", "誰來做", "指南"],
      rows: [
        ["SEO 報告：流量、哪些有效、與目標的差距", "每天", "SEO 專員", "[每日 SEO 報告](/use-cases/daily-seo-report)"],
        ["競品的價格、新功能發表和文件變動", "每週", "行銷代理", "[每週競品動態](/use-cases/weekly-competitor-digest)"],
        ["為開始見效的關鍵字寫新頁面", "每天", "SEO 專員", "[AI SEO 專員](/ai-employees/seo-specialist)"],
        ["比較頁和替代方案頁，保持最新", "每週", "SEO 專員", "[競品頁面 skill](/skills)"],
        ["根據推出的內容起草社群貼文", "每天", "社群經理", "[AI 社群經理](/ai-employees/social-media-manager)"],
        ["漏斗數字和值得嘗試的實驗", "每週", "行銷代理", "[AI 行銷代理](/ai-employees/marketing-agent)"],
        ["翻譯已經有搜尋流量的頁面", "視需要", "SEO 專員", "[多語言 SEO skill](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "可以複製的提示詞",
      text: ["以下每一條既可以當作 AI 員工的週期性 issue，也可以直接在 Claude Code 或 Codex 裡當作一次性提示詞使用。"],
      steps: [
        {
          title: "四項工作，每項一句話",
          text: "把名稱和數字換成你自己的。前兩項有附職位說明的完整指南：[每日 SEO 報告](/use-cases/daily-seo-report)和[每週競品動態](/use-cases/weekly-competitor-digest)。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "值得安裝的 Claude Code 行銷 skill",
      text: ["skill 把每項工作的步驟教給 agent，你就不必每個工作階段都重新解釋。"],
      steps: [
        {
          title: "Marketing Team Skills（Crewmark，開源）",
          text: "我們自己的 SEO 員工每天在用的 skill：熱門關鍵字、關鍵字研究、一個關鍵字一個頁面、競品頁面、多語言 SEO、讓頁面被收錄、AI 搜尋和每日報告，另外還有短影音 skill。參見 [Marketing Team Skills](/skills)。",
          code: install,
        },
        {
          title: "更多 SEO 和行銷 skill",
          text: "Corey Haines 的 marketingskills（seo-audit、ai-seo、programmatic-seo 等）、Claude SEO 等，比較請見[最好用的 SEO Claude skill](/skills/seo)。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何組一支 AI 員工行銷團隊",
      steps: [
        {
          title: "一次聘用一個職位",
          text: "從每週最花你時間的工作開始。每個職位頁都有目標、日常流程和職位說明：[SEO 專員](/ai-employees/seo-specialist)、[行銷代理](/ai-employees/marketing-agent)、[社群經理](/ai-employees/social-media-manager)。",
        },
        {
          title: "給它唯讀權限和一個儲存庫",
          text: "Search Console 和分析工具的唯讀權限、網站的儲存庫，以及一個能測試頁面的本機預覽。CLI 和 MCP 伺服器都有時優先用 CLI，比較省 token。",
        },
        {
          title: "把工作放上看板",
          text: "例行工作變成週期性 issue；一次性的工作變成你指派的 issue。每位員工在工作時間依心跳醒來，領取下一項。",
        },
        {
          title: "任何公開內容都要經過人",
          text: "發布、貼文、花錢和任何無法復原的動作都要經過人。員工需要這些時，會把 issue 標為「需處理」並提問。",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "可以期待什麼",
      points: [
        "任何網站的 SEO 都需要好幾週：先把目標放在上線的頁面數和曝光，再看點擊。",
        "我們自己的 SEO 員工每天上線頁面；頭幾週，曝光從每週寥寥幾次成長到幾百次，大多來自長尾頁面，而「ai employee」這類大字一直停在第 80 名之後。",
        "草稿寫得很快，但品味仍然重要：社群貼文和任何代表品牌語氣的內容，發出去之前都要先看過。",
        "用量來自你自己的 Claude 或 ChatGPT 方案，所以把吃重的工作排在工作時間內。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上組一支 AI 員工行銷團隊" },
  mid: {
    title: "想讓這些工作每天完成，不必你下提示詞？",
    text: "Crewmark 把你的 Claude Code 或 Codex 變成行銷員工，依心跳醒來，逐項處理看板上的工作。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 能做行銷嗎？",
        a: "可以，凡是能透過檔案、網路和工具完成的工作都行：撰寫和修正網站頁面、關鍵字研究、競品追蹤、根據分析數據寫報告，以及起草貼文和電子郵件。發布和花錢應該交給人。",
      },
      {
        q: "最好用的 Claude Code 行銷 skill 有哪些？",
        a: "SEO 和成長方面，Crewmark 開源的 Marketing Team Skills 和 Corey Haines 的 marketingskills 是最完整的兩套；我們在[最好用的 SEO Claude skill](/skills/seo)裡比較了它們和其他選擇。",
      },
      {
        q: "有 Claude Code 的行銷外掛嗎？",
        a: "Marketing Team Skills 可以用 `/plugin marketplace add ummydev/marketing-team-skills` 安裝成 Claude Code 外掛，也可以用 `npx skills add` 裝進 Claude Code、Codex 和其他 agent。",
      },
      {
        q: "Codex 也能拿來做行銷嗎？",
        a: "可以。把職位說明放進 AGENTS.md 而不是 CLAUDE.md，skill 和設定都一樣。",
      },
      {
        q: "AI 行銷員工和行銷自動化工具有什麼不同？",
        a: "自動化工具執行你建好的步驟。AI 員工會對照目標自己決定下一步，在你的網站和工具裡完成工作，並依排程回報。",
      },
      {
        q: "它會不經過我就在社群媒體上發文嗎？",
        a: "只有在你允許時才會。我們建議一律先出草稿：員工把草稿放到看板上，等你同意。",
      },
    ],
  },
  cta: {
    title: "幫你的行銷團隊配上從不缺勤的 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "撰寫於 2026 年 11 月 10 日，依據 Crewmark 自己的行銷員工的工作方式。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 和 OpenAI 均無關聯，也未獲其背書。Claude、Claude Code 和 Codex 是其各自所有者的商標。",
};
