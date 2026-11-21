import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API：模型代碼 gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "找出並修正這個 diff 裡失敗的測試"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen：價格、跑分，以及和 Argon、3.8 Flash 比較",
    description:
      "Google 的快速程式設計與 agent 模型 Gemini 4 Hydrogen：每百萬 token $1.50 / $7.50、100 萬上下文、四段思考等級、跑分，以及和 Argon、Carbon、3.8 Flash、Claude 的比較。",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "部落格 · 新模型",
    title: "Gemini 4 Hydrogen：價格、跑分，以及和其他模型怎麼比",
    lead: "Google 在 2026 年 11 月 12 日發表了 Gemini 4 Hydrogen：一款針對日常程式設計和 agent 工作的快速 Gemini 4 模型，整個 100 萬 token 上下文採統一定價，每百萬輸入 token $1.50，每百萬輸出 token $7.50。它的定位在 Gemini 4 Carbon 和 Argon 之下，Google 把這兩款留給深入、長時程的推理；它也接替 Gemini 3.8 Flash，成為多數人會優先選用的模型。本文整理它有哪些新功能、Google 公布的數字、價格和 Argon、Carbon、3.8 Flash 及 Claude 相比如何，以及在哪裡可以使用。",
    cta: "開始使用",
    secondary: "查看價格",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen 一覽",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["發表日期", "2026 年 11 月 12 日，由 Google 發表"],
        ["模型代碼", "`gemini-4-hydrogen`"],
        ["定位", "程式設計和 agent 工作流程中的快速執行"],
        ["上下文", "輸入 100 萬 token，輸出最多 100 萬 token"],
        ["思考等級", "low、medium、high（預設），以及新增的 xhigh"],
        ["API 價格", "每百萬 token 輸入 $1.50、輸出 $7.50，整個上下文視窗統一定價；Gemini API 提供免費方案"],
        ["在哪裡使用", "Gemini API、Google AI Studio、Android Studio、Gemini for business、Gemini 應用程式、Google 搜尋，以及提供給 Google AI Pro 和 Ultra 付費訂閱者的 Google Antigravity"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Gemini 4 Hydrogen 有哪些新功能",
      points: [
        "Gemini 4 系列中的快速模型：Google 把 Carbon 和 Argon 留給深入、長時程的推理，Hydrogen 則主打快速執行，可以單獨使用，也可以在它們旁邊擔任執行者。",
        "Google Antigravity 中的 Orchestrator 能在同一個工作階段內切換 Carbon 和 Hydrogen。Google 表示，它在 Terminal-Bench 4.0 上的成功率接近 Carbon，同時少用 24% 的配額，完成速度快 19%。",
        "據 Google 表示，相較 Gemini 3.8 Flash 是一大進步：預設的 high 設定下快 2.5 倍，Terminal-Bench 4.1 從 18.2% 提升到 57%，捏造的說法不到原本的五分之一。",
        "批次探索大型儲存庫：平行讀取和搜尋檔案，而不是逐一處理。合作夥伴測得它比 3.8 Flash 快 2 到 2.8 倍，token 用量少 12% 到 23%。",
        "四段思考等級，包括新增的 xhigh，任務需要多少推理，就只為多少付費。",
        "agent 工作的安全性：Google 公布，越權行為最多減少 81%，在工具使用和程式設計評估中，偏離意圖的行為和走捷徑的情況降到原本的 1/12，內部 agent 評估的誠實率為 96.7%。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Gemini 4 Hydrogen 跑分",
      text: ["這些是 Google 在發表文章中公布的數字，第三方結果之後會陸續出爐。Google 有提供比較對象的，列在最後一欄。"],
      headers: ["跑分", "Gemini 4 Hydrogen", "比較對象"],
      rows: [
        ["Artificial Analysis Intelligence Index", "high 為 51；xhigh 為 54", "Gemini 4 Argon：50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash：18.2%"],
        ["HLE-Diamond", "58.8%", "同級領先"],
        ["Vals Tax Agent Bench", "52.3%", "總排名第 1"],
        ["Vals Legal Research Bench", "55.8%", "並列第 1"],
        ["Multimodal Knowledge Agent（MKA）", "53.4%", "據 Google 表示，領先其他模型"],
        ["Agents' Last Exam v1.1", "71.6%", "據 Google 表示，領先其他模型"],
        ["Agent Arena（arena.ai）", "第 5 名", "即時排名"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Gemini 4 Hydrogen 價格",
      text: [
        "Gemini API 價格，單位為每百萬 token 的美元價格，取自 2026 年 11 月 13 日的 Google 定價頁面。輸出價格包含思考 token。Carbon 和 Argon 在 11 月 30 日前適用上市價，之後加倍；3.8 Flash 的價格在 2027 年 1 月 1 日加倍。Claude 的價格來自 Anthropic，見我們的 [Claude Fable 5.2](/blog/claude-fable-5-2) 文章。",
      ],
      headers: ["模型", "輸入", "輸出", "批次（輸入 / 輸出）", "免費方案"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "有"],
        ["Gemini 4 Argon", "11 月 30 日前 $2.00，之後 $4.00", "11 月 30 日前 $10.00，之後 $20.00", "$1.00 / $5.00，之後 $2.00 / $10.00", "無"],
        ["Gemini 4 Carbon", "11 月 30 日前 $2.00，之後 $4.00", "11 月 30 日前 $10.00，之後 $20.00", "$1.00 / $5.00，之後 $2.00 / $10.00", "無"],
        ["Gemini 3.8 Flash", "12 月 31 日前 $0.75，之後 $1.50", "12 月 31 日前 $3.75，之後 $7.50", "-", "有"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen 對比 Argon 和 Carbon",
      text: [
        "Google 依推理深度分工。Carbon 是它能力最強的推理模型，適合複雜的軟體工程、高難度的數學和科學問題，以及自主執行的多步驟 agent。Argon 是高效率的前沿模型，回應比 Carbon 快，token 花費也較少。Hydrogen 適合快速的日常程式設計和 agent 工作，也能在 Carbon 負責協調時擔任執行者或驗證者。",
        "價格方面，Hydrogen 現在就比 Argon 和 Carbon 便宜，12 月 1 日兩者的上市價結束後，差距還會拉大。依 Google 的數字，它在 Artificial Analysis Intelligence Index 上也略高於 Argon（high 為 51 對 50）。Carbon 和 Argon 在 Gemini API 中都沒有免費方案，Hydrogen 有。",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen 對比 Gemini 3.8 Flash",
      text: [
        "如果你正在使用 3.8 Flash，Google 把 Hydrogen 定位為它的升級版：預設設定下更快，Terminal-Bench 4.1 分數是它的三倍多，捏造的說法也少得多。到 12 月 31 日為止，它每個 token 的價格是 3.8 Flash 的兩倍；從 2027 年 1 月 1 日起，兩者定價相同，都是 $1.50 和 $7.50。Google 的合作夥伴也回報，每個任務少用 12% 到 23% 的 token，可以抵銷一部分價差。",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen 對比 Claude Sonnet 5.5 和 Opus 5.5",
      text: [
        "Google 的發表文章沒有拿 Hydrogen 和 Claude 比較，所以這裡只列出能比較的事實。Hydrogen 每百萬 token $1.50 和 $7.50，定價低於 Claude Sonnet 5.5（$2 和 $10），也遠低於 Opus 5.5（$4 和 $20）；它的上下文是 100 萬 token，最多輸出 100 萬 token。Claude Code 和 Codex 執行的是各自廠商的模型，所以選哪個模型通常取決於你使用哪個 agent；這兩者怎麼比，請見 [Claude Code 與 Codex 比較](/blog/claude-code-vs-codex)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何使用 Gemini 4 Hydrogen",
      steps: [
        { title: "在 Google AI Studio 中試用", text: "在 AI Studio 中選擇 Gemini 4 Hydrogen；AI Studio 的所有方案都能使用，包括免費方案。" },
        { title: "透過 Gemini API 呼叫", text: "使用模型代碼 `gemini-4-hydrogen`。思考等級維持預設的 high；比起深度更重視速度時，改成 medium 或 low。", code: api },
        { title: "在 Google Antigravity 中用它寫程式", text: "Google AI Pro 和 Ultra 付費訂閱者可以在 Antigravity 中使用它，Orchestrator 能在同一個工作階段內切換 Carbon 和 Hydrogen。" },
        { title: "在其他 agent 中使用", text: "支援 Gemini API key 的程式設計 agent，把這個模型加入模型清單後就能呼叫 `gemini-4-hydrogen`；請查看你的 agent 的模型清單。" },
      ],
      source: { label: "來源：Google《Introducing Gemini 4 Hydrogen》", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "模型更快只解決了一半，另一半是給它一份工作。",
      text: [
        "模型越來越快、越來越便宜，使用它們的 agent 卻還在等下一個提示詞。Crewmark 把你的程式設計 agent 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，會自己從看板上領取下一個 issue。",
      ],
      steps: [
        { title: "選一個職位", text: "從 [AI 員工職位](/ai-employees)中挑選，例如 [AI 軟體工程師](/ai-employees/software-engineer)。" },
        { title: "把工作放上看板", text: "指派 issue，把固定要做的設成週期執行，讓心跳喚醒員工去領取下一個。" },
        { title: "看看它能做什麼", text: "各種 agent 能做的工作，以及設定和規則，請見 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 Gemini 4 Hydrogen" },
  mid: {
    title: "想讓你的 agent 按排程處理 issue？",
    text: "Crewmark 給每個 agent 一個職位、一個心跳和一塊共用看板，讓它自己接手下一份工作。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Gemini 4 Hydrogen 是什麼？",
        a: "Google 針對日常程式設計和 agent 工作推出的快速 Gemini 4 模型，2026 年 11 月 12 日發表。它的定位在 Gemini 4 Carbon 和 Argon 之下，上下文 100 萬 token，最多輸出 100 萬 token。",
      },
      {
        q: "Gemini 4 Hydrogen 多少錢？",
        a: "在 Gemini API 中，每百萬輸入 token $1.50、輸出 token $7.50，整個上下文視窗統一定價；批次處理是 $0.75 和 $3.75。它有免費方案，所有人也都能在 Gemini 應用程式中使用。",
      },
      {
        q: "Gemini 4 Hydrogen 比 Argon 強嗎？",
        a: "Google 給它們的定位不同：Argon 和 Carbon 用於深入、長時程的推理，Hydrogen 用於快速執行。在 Artificial Analysis Intelligence Index 上，Google 公布的成績是 Hydrogen 在預設設定下 51、Argon 50，而且 Hydrogen 比較便宜。",
      },
      {
        q: "Gemini 4 Hydrogen 對比 3.8 Flash：該不該換？",
        a: "據 Google 表示，Hydrogen 在預設設定下快 2.5 倍，Terminal-Bench 4.1 為 57% 對 18.2%，捏造的說法也少得多。到 2026 年 12 月 31 日為止，它每個 token 的價格是 3.8 Flash 的兩倍；從 2027 年 1 月 1 日起，兩者定價都是 $1.50 和 $7.50。",
      },
      {
        q: "Gemini 4 Hydrogen 的模型代碼是什麼？",
        a: "`gemini-4-hydrogen`，Gemini API 和 Google AI Studio 都使用這個代碼。",
      },
      {
        q: "Gemini 4 Hydrogen 的模型卡在哪裡？",
        a: "Google 以 PDF 形式發布：[Gemini 4 Hydrogen 模型卡](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)。",
      },
    ],
  },
  cta: {
    title: "讓最新的模型負責一份長期工作。",
    text: "Crewmark 把程式設計 agent 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照 Google 的發表文章，以及 Gemini API 的定價和模型頁面核對。",
  disclaimer:
    "Crewmark 是獨立產品，與 Google 和 Anthropic 無關聯，也未獲其背書。Gemini 和 Claude 是其各自所有者的商標。",
};
