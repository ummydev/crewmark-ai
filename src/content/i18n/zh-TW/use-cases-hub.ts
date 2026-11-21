import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 員工使用情境：交給 Claude Code 和 Codex 的工作",
    description:
      "可以交給 Claude Code 或 Codex 上的 AI 員工的工作，依團隊分類，每一項都附可複製的職位說明和執行時間表：每日 SEO 報告、每週競品動態等。",
  },
  breadcrumb: "使用情境",
  hero: {
    kicker: "使用情境",
    title: "AI 員工使用情境：可以交給 Claude Code 和 Codex 的工作",
    lead: "每個使用情境是 AI 員工依排程完成的一項工作：做什麼、複製到 CLAUDE.md 或 AGENTS.md 的職位說明、需要的權限，以及怎麼執行。依通常負責這項工作的團隊分組。每一項也都可以直接在 Claude Code 或 Codex 裡當作一次性提示詞使用。",
    cta: "開始使用",
    secondary: "瀏覽使用情境",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "依團隊",
      headers: ["團隊", "交出去的工作"],
      rows: [
        ["[行銷](/for/marketing)", "SEO 頁面和報告、競品追蹤、社群貼文草稿、漏斗檢討"],
        ["[工程](/for/engineering)", "錯誤分流、pull request 審查、從 issue 到 pull request、版本說明"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "使用情境",
      headers: ["使用情境", "團隊", "頻率"],
      rows: [
        ["[每日 SEO 報告](/use-cases/daily-seo-report)", "行銷", "每天"],
        ["[每週競品動態](/use-cases/weekly-competitor-digest)", "行銷", "每週"],
        ["[Sentry 錯誤分流](/use-cases/sentry-error-triage)", "工程", "每天兩次"],
        ["[每個 PR 都有 AI 程式碼審查](/use-cases/pr-review)", "工程", "每個 PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "什麼樣的工作適合先交出去",
      points: [
        "會重複：每天或每週的工作，設定成本回收得最快。",
        "有完成標準：發出一份報告、上線一個頁面、寄出一份摘要。",
        "容易檢查：你一分鐘就能看出做得對不對。",
        "最後由你決定：發布、花錢和任何公開的東西都要經過人。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "把任何一個情境交給 AI 員工",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳。重複的工作在它的看板上變成週期性 issue。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "從 [AI 員工職位](/ai-employees)裡挑選。",
        },
        {
          title: "把工作加成 issue",
          text: "每天和每週的工作會自動重複；時間到了，員工就會去做。",
        },
        {
          title: "它問的時候再回答",
          text: "需要你決定時，它會把 issue 標為「需處理」並提問；其餘的都在看板上。",
        },
      ],
    },
  ],
  mid: {
    title: "想讓這些工作依排程完成？",
    text: "Crewmark 員工在你的 Claude Code 或 Codex 上執行，從看板領取下一項工作。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "AI 員工能做什麼？",
        a: "能透過檔案、網路和你的工具完成的重複性工作：根據分析數據寫報告、為網站寫頁面、追蹤競品、起草待審內容、分流工單。它朝著目標工作，並依排程回報。",
      },
      {
        q: "Claude Code 在寫程式以外有哪些好用的情境？",
        a: "行銷最容易上手：SEO 頁面和報告、競品動態、內容草稿。參見[用 Claude Code 做行銷](/for/marketing)；寫程式以外的工程工作，參見[用 Claude Code 做工程](/for/engineering)。",
      },
      {
        q: "這些情境 Codex 也能用嗎？",
        a: "可以。每份職位說明既能放進 Claude Code 的 CLAUDE.md，也能放進 Codex 的 AGENTS.md。",
      },
    ],
  },
  cta: {
    title: "挑一項工作，交給 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "更新於 2026 年 11 月 10 日。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 和 OpenAI 均無關聯，也未獲其背書。Claude、Claude Code 和 Codex 是其各自所有者的商標。",
};
