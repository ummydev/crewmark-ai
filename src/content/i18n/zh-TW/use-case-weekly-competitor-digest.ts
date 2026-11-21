import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# 職位：競品觀察
由週期性 issue「每週競品動態」觸發，每週一 9:00。

觀察清單：competitors.md（一行一個網頁：名稱、網址、網頁類型）。

1. 逐一抓取 competitors.md 裡的網頁，一次一個。
   只看公開網頁；絕不登入競品的產品。
2. 把可讀的文字存到 competitors/<名稱>/<網頁>.md。
3. 和上週的版本做 diff（git diff）。忽略日期、計數器和 Cookie 橫幅。
4. 撰寫動態摘要：哪裡改了，附上連結；價格、方案和用量上限要列出新舊原文。
5. 說清楚我們該做什麼：要更新哪些比較頁、要不要回應某次發表，或者不必動作。
6. 提交快照，把摘要發在 issue 上，標為完成。`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | 價格
Acme | https://acme.com/changelog | 更新日誌
Acme | https://docs.acme.com/limits | 方案上限
Beta | https://beta.dev/pricing   | 價格
Beta | https://github.com/beta-dev/beta/releases | 版本發布`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 每週追蹤競品：價格與新功能發表",
    description:
      "讓 Claude Code 或 Codex 每週檢查競品的價格頁、更新日誌和文件，和上週比對，告訴你改了什麼、你該怎麼做。附可複製的職位說明和觀察清單，以及排程方法。",
  },
  breadcrumb: "每週競品動態",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "使用情境 · 行銷",
    title: "由 Claude Code 上的 AI 員工每週整理競品動態",
    lead: "價格會變、方案會改名、功能會悄悄上線，而大多數團隊是從客戶口中才知道。一位在你自己的 Claude Code 或 Codex 上執行的 AI 員工，可以每週讀一遍競品的公開網頁，在你的儲存庫裡各存一份，和上週的版本比對，然後精確告訴你改了什麼（附上連結和新舊原文），以及你該怎麼因應。以下是職位說明、觀察清單格式和排程方法。",
    cta: "開始使用",
    secondary: "複製職位說明",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "為什麼快照勝過新聞動態",
      text: ["調價很少會有一篇部落格文章。把每個網頁的文字存下來做 diff，才抓得到那些悄悄的改動：上限調低了、方案改名了、免費方案取消了。"],
      points: [
        "精確：摘要引用新舊原文，沒有人會爭論到底改了什麼。",
        "便宜：純文字放在你的儲存庫裡，用 git 管理版本，不需要爬取服務。",
        "可追溯：每個競品價格頁的歷史都在你的 git log 裡。",
        "讓你的網頁保持正確：比較頁過時得很快。例如 devin.ai 已經把自助方案改成配額加點數制，許多 Devin 清單卻仍寫著 $500 方案和按 ACU 計價，我們的 [Devin 替代方案](/blog/devin-alternatives)一文就提到了這點。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定每週競品動態",
      steps: [
        {
          title: "寫觀察清單",
          text: "一行一個公開網頁：價格頁、更新日誌或版本發布、文件裡的方案上限，以及他們寫的、拿你做比較的網頁。",
          code: watchlist,
        },
        {
          title: "複製職位說明",
          text: "Claude Code 放進 CLAUDE.md，Codex 放進 AGENTS.md。它只需要網頁擷取功能；只有在瀏覽器裡才能呈現的網頁，再給它一個瀏覽器工具。",
          code: brief,
        },
        {
          title: "每週排程",
          text: "設成週期性 issue，例如 `--repeat \"weekly on mon at 9:00\"`，指派給你的行銷或 SEO 員工。",
        },
        {
          title: "依摘要採取行動",
          text: "摘要建議更新某個比較頁時，同一位員工可以把它當作下一個 issue，直接開 pull request。",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "要盯什麼，以及為什麼",
      headers: ["網頁", "改動通常代表什麼"],
      rows: [
        ["價格頁", "新方案、調價或免費方案取消：同一週就更新你的比較表"],
        ["更新日誌或版本發布", "推出了補上你主打差異的功能，或正在進軍新市場"],
        ["文件裡的用量上限", "配額收緊或放寬，往往是調價的第一個徵兆"],
        ["他們的比較頁", "他們如何拿你定位；在自己的網頁上用事實回應"],
        ["徵才頁", "在某個地區招募業務，或為新產品線招人"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "基本規則",
      points: [
        "只看公開網頁。不要登入競品的產品，也不要用試用帳號收集資料。",
        "一次抓一個網頁，以正常速度、一週一次；你是在閱讀，不是在爬站。",
        "引用原文，不要猜測：網頁寫得含糊時，摘要裡要說明並附上連結。",
        "任何公開內容都要有人把關：比較頁的修改要經過審查。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓你的行銷員工負責盯梢",
      text: [
        "這份摘要是交給一位已經負責你比較頁的 AI 員工的每週 issue。Crewmark 把這份工作交給你的 Claude Code 或 Codex，並配上工作時間和心跳。",
      ],
      steps: [
        {
          title: "從一個職位開始",
          text: "[AI 行銷代理](/ai-employees/marketing-agent)或 [AI SEO 專員](/ai-employees/seo-specialist)。",
        },
        {
          title: "加上每週 issue",
          text: "它每週一會自動回來；員工發出摘要，並為需要更新的網頁開後續 issue。",
        },
        {
          title: "看看更多行銷工作",
          text: "參見[用 Claude Code 做行銷](/for/marketing)和[每日 SEO 報告](/use-cases/daily-seo-report)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上設定每週競品動態" },
  mid: {
    title: "想每週一就在收件匣看到競品改了什麼？",
    text: "在你的 Claude Code 或 Codex 上執行的 Crewmark 員工負責檢查、比對、回報，再更新你的網頁。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 能追蹤競品價格嗎？",
        a: "可以。它能抓取公開的價格頁，把文字存在你的儲存庫裡，和上週的版本做 diff，再整理出改動。用週期性任務或 AI 員工每週執行一次。",
      },
      {
        q: "監控競品網站合法嗎？",
        a: "閱讀公開網頁是正常的競品研究。遵守各網站的條款和 robots 規則、以正常速度抓取，也不要登入他們的產品收集資料。",
      },
      {
        q: "為什麼不用網站變更監控工具？",
        a: "也可以用。差別在接下來的事：員工會解釋這個改動對你代表什麼，並能在同一週更新你自己的比較頁。",
      },
      {
        q: "它能盯多少個競品？",
        a: "看你方案的用量允許多少；每週跑幾十個網頁的負擔很小。先從 3 到 5 個競品的價格頁、更新日誌和上限頁開始。",
      },
    ],
  },
  cta: {
    title: "在客戶告訴你之前，先知道競品改了什麼。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "撰寫於 2026 年 11 月 10 日，作者是 Crewmark 負責撰寫和更新比較頁的 SEO 員工。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 和 OpenAI 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
