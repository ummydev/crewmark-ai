import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "行銷與設計用的 Claude Skills | Crewmark AI",
    description:
      "一支 AI 行銷團隊每天都在用的免費開源 Claude Code skill：趨勢關鍵字、SEO 頁面、比較頁、索引、AI 搜尋和每日報告，另附最好用的設計 skill 比較。",
  },
  breadcrumb: "Claude Skills",
  hero: {
    kicker: "Claude Skills",
    title: "AI 行銷團隊出品的 Claude skill",
    lead: "Marketing Team Skills 是一套免費開源的 Agent Skills，適用於 Claude Code、Codex 和 Cursor，內容就是 Crewmark 自己的 AI SEO 專員每天在做的事：找關鍵字、撰寫並翻譯頁面、讓頁面被索引，再回報哪些數字有了變化。每個 skill 都是一個 SKILL.md，裡面的指令都能直接執行，我們踩過的坑也一併寫了進去。以下介紹它包含哪些 skill、如何安裝，以及我們依工作類型整理的最佳 skill 指南。",
    cta: "開始使用",
    secondary: "安裝 skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Marketing Team Skills 包含哪些 skill",
      text: ["0.1 版涵蓋站內 SEO。站外 SEO、UGC 影片和社群推廣會陸續加入。"],
      headers: ["Skill", "用途"],
      rows: [
        ["trend-keywords", "找出產品發表、停止服務或被收購後大家剛開始搜尋的字詞，當天就上線頁面"],
        ["keyword-research", "挑出新網站有機會排上去的關鍵字，並維護一份關鍵字地圖"],
        ["seo-page", "一個關鍵字寫一個頁面：先給定義，再寫步驟、表格、FAQ 和來源"],
        ["competitor-pages", "根據各產品自己的文件，撰寫替代方案頁和比較頁"],
        ["programmatic-pages", "大量產生範本化頁面，同時避免內容單薄"],
        ["multilingual-seo", "每個頁面都以多種語言發佈，並設定好 hreflang"],
        ["index-push", "讓頁面被檢索：IndexNow、Search Console、Bing"],
        ["ai-search", "讓網站內容能被 ChatGPT、Claude 和 Perplexity 引用"],
        ["seo-daily-report", "對照目標寫每天收工前的日報"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何安裝這些 skill",
      steps: [
        {
          title: "加到你的 agent",
          text: "skills CLI 可以把它們安裝到 Claude Code、Codex、Cursor 等 agent；也可以用 Claude Code 外掛安裝。",
          code: install,
        },
        {
          title: "複製職位說明",
          text: "把 `roles/seo-specialist/CLAUDE.md`（Codex 用 `AGENTS.md`）放進你網站的儲存庫，再填好目標，這樣每個工作階段都知道每天該做什麼。參見 [AI SEO 專員](/ai-employees/seo-specialist)。",
        },
        {
          title: "每天執行",
          text: "用 `/loop` 或排程任務執行，或者把它當成依心跳工作的 AI 員工來執行；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
      source: { label: "來源：GitHub 上的 Marketing Team Skills", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "依工作類型挑選最好用的 Claude skill",
      text: ["我們依工作類型比較了值得安裝的 skill，資訊都來自各專案自己的儲存庫："],
      points: [
        "[最好用的網站與 UI 設計 Claude skill](/skills/website-design)：Anthropic 的 frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop 等。",
        "想一步步打造 SEO agent，請讀 [AI SEO Agent：用 Claude Code 打造的方法](/blog/ai-seo-agent)；skill 的通用知識請見 [Claude Code skill 指南](/blog/claude-code-skills)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "skill 讓工作階段更能幹，AI 員工把工作接過去",
      text: [
        "skill 讓一個工作階段擅長某項任務。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 變成有職位、目標和工作時間的 AI 員工：它依心跳醒來，從看板上接手下一個 issue，並用上你安裝的 skill。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "[SEO 專員](/ai-employees/seo-specialist)、[行銷代理](/ai-employees/marketing-agent)、[UI 設計師](/ai-employees/ui-designer)等。",
        },
        {
          title: "連接你的專案",
          text: "每個員工都在獨立的工作階段和檢出目錄中工作，用的是你已經在付費的訂閱方案。參見[價格](/pricing)。",
        },
        {
          title: "只管審查，不用盯著",
          text: "它會邊做邊留言，遇到你核准清單上的事會先問你。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安裝 Marketing Team Skills" },
  mid: {
    title: "想每天都有人替你執行這些 skill？",
    text: "Crewmark 的 AI 員工依心跳使用這些 skill，用的就是你已經在付費的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude skill 常見問題",
    items: [
      {
        q: "Claude skill 是什麼？",
        a: "含有 SKILL.md 檔案的資料夾，教 Claude Code、Claude.ai 和其他 agent 完成某項特定任務。在任務真正用到之前，只會載入一段簡短的描述。",
      },
      {
        q: "Marketing Team Skills 免費嗎？",
        a: "免費。它以 MIT 授權在 GitHub 上開源，網址是 ummydev/marketing-team-skills。",
      },
      {
        q: "能在 Codex 和 Cursor 裡使用嗎？",
        a: "可以。skills CLI 能把它安裝到 Codex、Cursor 和其他支援 Agent Skills 的 agent，儲存庫裡也附有 Codex 外掛資訊清單。",
      },
      {
        q: "它和其他行銷 skill 有什麼不同？",
        a: "它重實作，而不是百科式的大全：每個 skill 都是 AI SEO 員工在正式網站上一步步執行的流程，附上腳本和我們踩過的坑。它和 coreyhaines31/marketingskills 這類涵蓋面很廣的資源庫搭配使用效果很好。",
      },
    ],
  },
  cta: {
    title: "直接聘用寫出這些 skill 的團隊。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "skill 清單以 Marketing Team Skills v0.1 為準，截至 2026 年 11 月 8 日。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 和 OpenAI 無關，也未獲其背書。Claude、Claude Code 和 Codex 是其各自所有者的商標。",
};
