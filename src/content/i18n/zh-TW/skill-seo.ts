import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines 的 marketingskills：只裝 SEO 相關的 skill
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO（在 Claude Code 裡）
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# 接上你真實的 Search Console 資料（Ian Nuttall 的 seo，託管 MCP）
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani 以 Lighthouse 為基礎的 SEO skill
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills（我們做的）：每天的 SEO 例行工作
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude SEO Skills：稽核、GEO、關鍵字（2026）",
    description:
      "最好用的 SEO 與 AI 搜尋 Claude Code skill，資訊來自各專案自己的儲存庫：Corey Haines 的 seo-audit 和 ai-seo、Claude SEO、GEO-SEO Claude、Search Console MCP、SE Ranking 等比較，附安裝次數和安裝指令。",
  },
  breadcrumb: "SEO skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · SEO",
    title: "最好用的 SEO Claude skill",
    lead: "SEO skill 是一個 SKILL.md 檔案，教 Claude Code（以及 Codex、Cursor 等 agent）做搜尋工作中的某一塊：稽核網站、規劃頁面、撰寫 schema，或者讓內容被 AI 搜尋引用。它分成兩類。方法類 skill 是免費的檢查清單和操作手冊，不需要任何金鑰。資料類 skill 透過 MCP 伺服器把 agent 接到 Search Console、DataForSEO、SE Ranking 或 Ahrefs，讓它根據真實數據工作，而不是用猜的。好的設定是兩類各裝一個。以下是 2026 年值得安裝的 SEO skill，資訊都來自各專案自己的儲存庫。",
    cta: "開始使用",
    secondary: "比較這些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "穩妥的起點：Corey Haines 的 marketingskills。其中的 seo-audit、ai-seo 和 programmatic-seo 是 skills.sh 上安裝次數最多的三個 SEO skill。",
        "一個指令完成全站稽核：Claude SEO。`/seo audit <url>` 會派出最多 17 個專責 agent 檢查整個網站，再交給你一份依優先順序排好的計畫。",
        "AI 搜尋（GEO）：想要 SEO 代理商那樣的稽核和 PDF 報告，用 GEO-SEO Claude；想要一個能在 CI 裡跑的 0–100 分就緒度評分，用 GEO Optimizer。",
        "用你自己的數據：Ian Nuttall 的 seo，一個免費的 Search Console MCP 伺服器和 CLI；如果你已經付費使用 SE Ranking，就用 SE Ranking 的 skill。",
        "照規範做技術 SEO：Addy Osmani 的 seo skill，以 Lighthouse 稽核和 Google 的指南為基礎。",
        "每天持續做 SEO，而不是只做一次：Marketing Team Skills（我們做的）涵蓋挑選新網站拿得下的關鍵字、一個關鍵字寫一個頁面、推送索引和每日報告。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code SEO skill 比較",
      text: [
        "Star 數和授權來自 2026 年 11 月 8 日的 GitHub API，已取整數。包含多個 skill 的儲存庫，Star 數以整個儲存庫計算。",
      ],
      headers: ["Skill", "最適合", "需要", "Star", "授權"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills)（Corey Haines）：seo-audit、ai-seo、programmatic-seo、schema、site-architecture", "稽核、AI 搜尋、大量建立頁面和 schema，都以方法的形式提供", "不需要；透過 skills CLI 支援任何 agent", "~59k（整個儲存庫）", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "用平行 agent 做全站稽核：技術、E-E-A-T、schema、GEO、在地 SEO", "Claude Code 1.0.33+；`/seo setup` 會裝上它自己的 Python 和一個無頭瀏覽器", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO 稽核、AI 爬蟲檢查和給客戶的 PDF 報告", "Python 3.10+、Git；以 shell 指令碼安裝", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "根據 Search Console、GA4 和 Ads 的即時數據做 SEO、GEO 和 Google Ads", "登入 NotFair 的託管 MCP", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills)（Addy Osmani）", "依據 Lighthouse 和 Google 搜尋指南做技術 SEO 和頁面 SEO", "不需要；即時檢查需要 Lighthouse 或 Chrome DevTools MCP", "~3k（整個儲存庫）", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "經過研究和事實查核的部落格文章，交付前先評分", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "給獨立創辦人的快速 SEO 和 GEO 檢查，外加 schema", "Python 3", "~1.9k（整個儲存庫）", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "0–100 分的 AI 就緒度評分和修正：robots.txt、llms.txt、JSON-LD", "Python 3.10+ 和 uv；引用檢查要用你自己的 LLM 金鑰", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "對單一 URL 做 26 項 SEO 和 GEO 檢查，逐項列出通過或不通過", "macOS 或 Linux 上的 Python 3.9+", "~1k", "未註明"],
        ["[seo](https://github.com/iannuttall/seo)（Ian Nuttall）", "你真實的 Search Console、Analytics 和 Bing 數據，外加關鍵字研究", "用 Google 帳號登入託管 MCP；關鍵字功能需要 DataForSEO 或 Ahrefs 金鑰", "~600", "Apache 2.0"],
        ["[GEO 醫生](https://github.com/Fangx-AI/geo-doctor)", "讓中國的 AI 助理（豆包、DeepSeek）推薦你；支援中文和英文", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "以 SE Ranking 數據做關鍵字分群、反向連結差距分析和 AI 聲量占比", "SE Ranking 帳號（14 天試用，之後付費）", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills)（我們做的）", "新網站每天的 SEO 工作：關鍵字、頁面、推送索引、報告；另有短影片", "不需要；透過 skills CLI 支援任何 agent", "新發布（2026 年 11 月）", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "安裝次數最多的 SEO skill",
      text: [
        "以下是透過 skills CLI 的安裝次數，資料來自 2026 年 11 月 8 日的 skills.sh 登錄表。用 `/plugin install` 安裝的外掛（例如 Claude SEO）大多不會算進這裡，所以這些數字只是下限。",
      ],
      points: [
        "seo-audit（marketingskills）：約 24.9 萬",
        "ai-seo（marketingskills）：約 16 萬",
        "programmatic-seo（marketingskills）：約 15.8 萬",
        "site-architecture（marketingskills）：約 13 萬",
        "schema（marketingskills）：約 8.6 萬",
        "seo-geo（opc-skills）：約 5.6 萬",
        "seo（Addy Osmani 的 web-quality-skills）：約 5.4 萬",
        "seo（Ian Nuttall）：約 2.4 萬",
        "seo（Claude SEO 的主要 skill）：約 1 萬",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Claude Code 來做 SEO",
      steps: [
        {
          title: "只裝一個方法類 skill",
          text: "在 marketingskills 的 SEO skill 和 Claude SEO 之間二選一，別兩個都裝：它們做的是同樣的稽核，結論會互相打架。只有想在這之上再加 Lighthouse 式的技術檢查時，才加裝 Addy Osmani 的 skill。",
          code: install,
        },
        {
          title: "接上真實數據",
          text: "沒有數據，agent 給的關鍵字建議都是用猜的。接上 Search Console（用 Ian Nuttall 的 seo 或 Claude SEO 的 `/seo google`）；如果需要搜尋量，再接一個關鍵字資料來源，例如 DataForSEO、Ahrefs 或 SE Ranking。",
        },
        {
          title: "先稽核，再依序修正",
          text: "在你自己的網站上執行稽核，接著讓 agent 修正排在最前面的問題，再重跑同樣的檢查。索引和排名的變化要過幾天甚至幾週才會出現在 Search Console 裡，不會在當次工作階段裡看到。",
        },
        {
          title: "把它變成例行工作",
          text: "SEO 的回報來自每週重複同一個循環：選一個關鍵字、寫頁面、推送索引、看數據。把這個循環寫進 CLAUDE.md 或一個 skill，依排程定時執行。參見[如何打造 AI SEO agent](/blog/ai-seo-agent)。",
        },
      ],
      source: { label: "來源：Corey Haines 的 marketingskills", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "我們的 SEO agent 在 crewmark.ai 上用了什麼",
      text: [
        "Crewmark 自己的 SEO 由一位 AI 員工負責：一個擔任 [SEO 專員職位](/ai-employees/seo-specialist)的 Claude Code 工作階段，依心跳輪班工作。它的儲存庫裡裝了 25 個 Corey Haines 的 skill，外加我們的 Marketing Team Skills。",
      ],
      points: [
        "2026 年 11 月 7 日，它在 crewmark.ai 上執行了 marketingskills 的稽核類 skill。稽核指出網站沒有公開的價格，也沒有隱私權頁面；隔天，[價格頁](/pricing)就上線了。",
        "它每天從 Google 自動完成和 Search Console 裡挑選關鍵字（keyword-research），一個關鍵字寫一個頁面（seo-page），把新 URL 提交給 IndexNow、Bing 和 Google（index-push），並發布每日報告（seo-daily-report）。",
        "網站還很新，所以我們暫時拿不出排名成果。等 Search Console 裡有值得展示的數字，我們會補充到這個頁面上。",
      ],
    },
    {
      kind: "text",
      title: "安裝前需要知道的事",
      points: [
        "資料類 skill 會把你的資料送到別處：Ian Nuttall 的 seo、NotFair 和 Ryze 透過各自的託管 MCP 伺服器連線，SE Ranking 和 DataForSEO 以點數計費。根據 SE Ranking 的 README，大規模執行可能耗掉數千點。",
        "GEO-SEO Claude 和 Agentic SEO Skill 用 `curl ... | bash` 安裝。先把指令碼下載下來讀一遍再執行，Claude SEO 的 README 對它自己的安裝指令碼也是這樣建議的。",
        "別讓 skill 替你買連結。Illyism 的 seo-skills 裡有一個 linkdr，會向作者自己的服務購買反向連結；傳遞排名權重的付費連結違反 Google 的垃圾內容政策。",
        "README 裡的成效數字（例如流量成長）都是作者自己的說法。Claude SEO 報告的 12 週內 1.08 萬次 Search Console 點擊，是它自己網站的數據。",
        "有些免費 skill 旁邊還在賣別的東西：Claude SEO 和 GEO-SEO Claude 在推廣付費社群，GEO Optimizer 有每月 19 美元起的 Pro 方案。這些 skill 本身是開源的。",
        "Anthropic 沒有發布 SEO skill；這裡列出的都不是官方的。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫這些 skill 配一位每天上班的 SEO 專員",
      text: [
        "一個 skill 能讓一個工作階段的 SEO 做得更好。Crewmark 把 Claude Code 或 Codex 變成一位 AI SEO 專員：有量化的目標（例如 Search Console 點擊數每月成長 10%）、有工作時間，還有一塊待寫頁面的看板；它依心跳醒來，接手下一個 issue，需要你核准時會傳訊息給你。",
      ],
      steps: [
        {
          title: "聘用 SEO 專員職位",
          text: "職位說明、目標和日常流程都已設定好；參見 [AI SEO 專員](/ai-employees/seo-specialist) 和 [AI 行銷 agent](/ai-employees/marketing-agent)。",
        },
        {
          title: "把 SEO skill 裝進儲存庫",
          text: "員工會像任何工作階段一樣，使用 `.claude/skills` 裡的 skill。可以先從 [Marketing Team Skills](/skills) 開始。",
        },
        {
          title: "審查頁面和報告，而不是寫提示詞",
          text: "核准新頁面，在看板上閱讀每日報告。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 skill 設定 Claude Code 來做 SEO" },
  mid: {
    title: "想要一位每天執行這些 skill 的 SEO 專員？",
    text: "Crewmark 的 AI SEO 專員依心跳輪班工作：寫頁面、推送索引，每天回報。",
    button: "開始使用",
  },
  faq: {
    title: "Claude SEO skill 常見問題",
    items: [
      {
        q: "做 SEO，最好用的 Claude skill 是哪一個？",
        a: "對大多數網站來說，是 Corey Haines 的 seo-audit、ai-seo 和 programmatic-seo，它們是 skills.sh 上安裝次數最多的 SEO skill。想用平行 agent 做全站稽核，選 Claude SEO。再接一個資料來源，例如 Search Console MCP，讓 agent 根據你的真實數據工作。",
      },
      {
        q: "有官方的 Claude SEO skill 嗎？",
        a: "沒有。截至 2026 年 11 月，Anthropic 的 skills 儲存庫裡沒有 SEO skill。Claude SEO 是 Agrici Daniel 的獨立開源專案，不是 Anthropic 的產品。",
      },
      {
        q: "Claude SEO 和 marketingskills 有什麼差別？",
        a: "Claude SEO 是一個專為稽核打造的外掛：`/seo` 指令背後有 26 個子 skill 和 19 個 agent，還帶有自己的 Python 工具和無頭瀏覽器。marketingskills 是一個涵蓋整個行銷領域的方法類 skill 庫，每個 skill 各自獨立；你只裝需要的 SEO skill，而且不用任何設定。",
      },
      {
        q: "Claude Code 能做關鍵字研究嗎？",
        a: "它能挑選關鍵字並分組，但自己看不到搜尋量。接一個資料來源：用 Search Console 看你已經出現在哪些查詢裡，用 DataForSEO、Ahrefs 或 SE Ranking 看搜尋量。Google 自動完成只能告訴你大家在搜什麼，看不出有多少人在搜。",
      },
      {
        q: "SEO skill 和 GEO skill 有什麼差別？",
        a: "SEO skill 的目標是在 Google 和 Bing 取得排名；GEO（生成式引擎最佳化）skill 的目標是被 ChatGPT、Perplexity、Gemini 和 Google 的 AI 摘要（AI Overviews）引用，檢查項目包括 AI 爬蟲能否存取、llms.txt 和方便引用的答案。現在大多數 skill 套件兩者都做。",
      },
      {
        q: "這些 SEO skill 能在 Codex 和 Cursor 裡使用嗎？",
        a: "大多數可以。用 skills CLI 安裝的 skill 能在 Codex、Cursor 和其他幾十種 agent 裡使用；以 MCP 為基礎的 skill（例如 Ian Nuttall 的 seo）可以接到任何支援遠端 MCP 伺服器的 agent。",
      },
    ],
  },
  cta: {
    title: "幫你的看板配一位 SEO 專員，用上你信得過的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照各 skill 的 GitHub 儲存庫、GitHub API 和 skills.sh 登錄表查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 及文中所列 skill 的作者無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
