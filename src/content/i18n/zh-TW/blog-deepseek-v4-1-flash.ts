import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash（1017）：價格、跑分及與 V4 Pro 比較",
    description:
      "DeepSeek-V4.1-Flash-1017 解說：2026 年 10 月 17 日更新了什麼、API 價格、1M 脈絡長度、Hugging Face 開放權重、DeepSeek 公布的跑分，以及什麼時候該改用 V4 Pro。",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · DeepSeek",
    title: "DeepSeek V4.1 Flash（1017）：價格、脈絡長度、跑分及與 V4 Pro 比較",
    lead: "DeepSeek-V4.1-Flash-1017 是 DeepSeek V4.1 Flash 於 2026 年 10 月 17 日推出的更新版。V4.1 Flash 是 DeepSeek 最新架構中最小的模型，支援圖片理解，脈絡長度 1M 個 token。API 中的 `deepseek-flash`、DeepSeek 網站和 App 使用的都是它，DeepSeek Harness 預設執行的也是它，權重以 MIT 授權開放。DeepSeek 表示，它的分數比 9 月的版本更高，完成任務更快，輸出也更精簡。本文說明它是什麼、要花多少錢、與 V4 Pro 相比如何，以及如何使用。",
    cta: "開始使用",
    secondary: "跳到價格",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash 一覽",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["發布時間", "V4.1 Flash 於 2026 年 9 月 10 日發布；1017 更新於 2026 年 10 月 17 日發布"],
        ["API 模型名稱", "`deepseek-flash`（舊名稱 `deepseek-v4-flash` 和 `deepseek-v4-flash-vision-exp` 現在也由它提供服務）"],
        ["輸入", "文字和圖片"],
        ["脈絡長度", "1M 個 token；DeepSeek 建議將 `max_tokens` 設為 256K 以上"],
        ["權重", "在 Hugging Face 開放，MIT 授權"],
        ["在哪裡使用", "DeepSeek API、網站和 App；DeepSeek Harness 的預設模型"],
        ["特別調校", "據 DeepSeek 說明，針對 DeepSeek Harness（v0.2.1-rc.1 或更新版本）、騰訊 CodeBuddy 和 WorkBuddy 調校"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek V4.1 Flash 價格與 V4 Pro 比較",
      text: [
        "DeepSeek API 價格，單位為每百萬 token 的美元價格，截至 2026 年 11 月 6 日。離峰價格適用於平日 UTC 01:00–04:00 和 06:00–10:00 以外的時段，是尖峰價格的一半；1017 更新沒有調整價格。DeepSeek 的 Search API 和 Fetch API 每 1,000 次呼叫各收費 $0.75。",
      ],
      headers: ["每 1M token", "Flash，尖峰", "Flash，離峰", "V4 Pro，尖峰", "V4 Pro，離峰"],
      rows: [
        ["輸入，快取命中", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["輸入，快取未命中", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["輸出", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "DeepSeek V4.1 Flash 跑分（DeepSeek 公布數據）",
      text: [
        "以下是 DeepSeek 在模型卡中公布的數據，比較 1017 更新版與 9 月版的 V4.1 Flash。DeepSeek 以 Claude Code harness 執行 Terminal-Bench 4.0，以 Mini-SWE-V2 執行 DeepSWE。廠商自己的跑分往往有利於自家模型；切換之前，請先用你自己的任務測試。",
      ],
      headers: ["基準測試", "V4.1 Flash 1017", "V4.1 Flash（9 月版）"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE（不使用工具）", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash 與 V4 Pro：該用哪一個",
      points: [
        "V4 Pro（`deepseek-v4-pro`，自 2026 年 8 月 13 日起正式提供）每個輸入 token 的價格是 Flash 的 4.4 倍，每個輸出 token 是 3.3 倍，而且只支援文字；Flash 還支援圖片輸入。",
        "兩者的脈絡長度都是 1M 個 token，推理強度都可以調整（low、high 和 max）。",
        "DeepSeek 自己的程式開發代理方案預設都用 Flash：一是 DeepSeek Harness，二是它建議的 Claude Code 設定，後者把 Sonnet 和 Haiku 對應到 Flash，只有 Opus 對應到 V4 Pro。",
        "實用的分工：日常代理工作和子代理用 Flash，遇到 Flash 一直做不好的難題再改用 V4 Pro。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何使用 DeepSeek V4.1 Flash",
      steps: [
        {
          title: "透過 API",
          text: "在 platform.deepseek.com 取得 API 金鑰，呼叫時模型名稱填 `deepseek-flash`；API 相容 OpenAI 和 Anthropic 介面。",
          code: api,
        },
        {
          title: "在程式開發代理中",
          text: "在 DeepSeek Harness 中執行（它是預設模型），或讓 Claude Code、Codex 串接 DeepSeek；請見 [DeepSeek Harness 指南](/blog/deepseek-harness) 和 [Claude Code 搭配 DeepSeek](/blog/claude-code-deepseek)。",
        },
        {
          title: "用開放權重在本機執行",
          text: "從 Hugging Face 下載 DeepSeek-V4.1-Flash-1017。儲存庫提供的是參考 prompt 編碼器和推論說明，而不是 chat template；DeepSeek 建議 temperature 1.0、top_p 1.0。",
        },
      ],
      source: { label: "來源：Hugging Face 上的 DeepSeek-V4.1-Flash-1017", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "便宜又能幹的模型，幫你消化待辦事項",
      text: [
        "以 Flash 的價格，讓代理整天忙碌也負擔得起。Crewmark 把 DeepSeek Harness、Claude Code、Codex 或 OpenCode 工作階段變成有職位、有目標、有工作時間的 AI 員工，並用心跳喚醒它，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "選擇代理和模型",
          text: "DeepSeek Harness 預設執行 V4.1 Flash；Claude Code 和 Codex 可以透過 DeepSeek 的端點使用它。",
        },
        {
          title: "給它一個職位和目標",
          text: "了解[什麼是 AI 員工](/ai-employees)，以及它和 [superagent](/blog/superagent) 有什麼不同。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，它每 15、30 或 60 分鐘醒來一次，接手下一個 issue；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "使用 DeepSeek V4.1 Flash" },
  mid: {
    title: "模型這麼便宜，就該讓它整天工作。",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 DeepSeek Harness、Claude Code 或 Codex。",
    button: "開始使用",
  },
  faq: {
    title: "DeepSeek V4.1 Flash 常見問題",
    items: [
      {
        q: "DeepSeek V4.1 Flash 1017 是什麼？",
        a: "它是 DeepSeek V4.1 Flash 於 2026 年 10 月 17 日推出的更新版；V4.1 Flash 是 DeepSeek 最新架構中最小的模型。它支援文字和圖片輸入，脈絡長度 1M 個 token，在 API 中的名稱是 `deepseek-flash`。",
      },
      {
        q: "DeepSeek V4.1 Flash 多少錢？",
        a: "API 尖峰價格為：輸入每百萬 token $0.30（快取未命中；快取命中為 $0.006），輸出每百萬 token $1.20；離峰價格減半。",
      },
      {
        q: "DeepSeek V4.1 Flash 的脈絡長度是多少？",
        a: "1M 個 token，DeepSeek 建議將 `max_tokens` 設為至少 256K。",
      },
      {
        q: "DeepSeek V4.1 Flash 是開源的嗎？",
        a: "權重以 MIT 授權在 Hugging Face 開放，並附有參考 prompt 編碼器和推論說明。",
      },
      {
        q: "DeepSeek V4.1 Flash 和 V4 Pro 有什麼不同？",
        a: "V4 Pro 每個輸入 token 的價格是 Flash 的 4.4 倍，每個輸出 token 是 3.3 倍，而且只支援文字；Flash 支援圖片輸入，也是 DeepSeek 程式開發代理方案的預設模型。兩者的脈絡長度都是 1M。",
      },
      {
        q: "從 V4.1 Flash 到 1017 版有哪些改變？",
        a: "DeepSeek 表示，新版在代理和程式開發基準測試上分數更高，輸出更精簡，完成任務更快，價格和模型名稱都沒有變。",
      },
      {
        q: "Claude Code 可以使用 DeepSeek V4.1 Flash 嗎？",
        a: "可以。DeepSeek 有文件說明如何用環境變數讓 Claude Code 連到它的 Anthropic 相容端點並使用 `deepseek-flash`；請見 [Claude Code 搭配 DeepSeek](/blog/claude-code-deepseek)。",
      },
    ],
  },
  cta: {
    title: "把 DeepSeek V4.1 Flash 變成 AI 員工。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code、Codex 和 OpenCode 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 DeepSeek API 文件（更新紀錄、新聞、價格）和 Hugging Face 模型卡查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 DeepSeek 無關，也未獲其背書。跑分數據皆為 DeepSeek 自行公布。產品名稱是其各自所有者的商標。",
};
