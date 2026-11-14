import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 和 Codex 比較（2026）：價格、用量限制與功能",
    description:
      "2026 年 11 月 Claude Code 與 OpenAI Codex 比較：模型、方案與價格、5 小時和每週額度、CLAUDE.md 與 AGENTS.md、沙盒、subagent、排程任務，以及該怎麼選。",
  },
  breadcrumb: "Claude Code 和 Codex 比較",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "部落格 · Claude Code · Codex",
    title: "Claude Code 和 Codex 比較：該用哪個程式設計 agent？",
    lead: "Claude Code 是 Anthropic 的程式設計 agent，Codex 是 OpenAI 的。兩者都能讀取你的程式碼儲存庫、編輯檔案、執行指令，並可在終端機、IDE、桌面應用程式、網頁和手機上使用。它們的差別在於模型、方案、額度、預設設定和開放程度。本文截至 2026 年 11 月，介紹兩者的費用、用量限制的運作方式、功能比較，以及各自適合哪類工作。",
    cta: "開始使用",
    secondary: "跳到比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 和 Codex 一覽",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["開發商", "Anthropic", "OpenAI"],
        ["預設模型", "Claude Opus 5.5；另有 Sonnet 5.5、Haiku 5.5 和 Fable 5.1 可選", "GPT-6.1 Sol；另有 GPT-6 Astra、GPT-6.1 Terra 和 GPT-6 Luna 可選"],
        ["執行位置", "終端機、VS Code、JetBrains、桌面應用程式、claude.ai/code、Claude 行動應用程式、Slack", "終端機、VS Code、Cursor 和 Windsurf、ChatGPT 桌面應用程式、chatgpt.com/codex、ChatGPT 行動應用程式、Slack 和 Linear"],
        ["包含它的最低價方案", "Claude Pro，每月 $20", "ChatGPT Free（有額度限制），其次是每月 $8 的 Go 和每月 $20 的 Plus"],
        ["是否開源", "否：儲存庫是公開的，但保留所有權利", "CLI、SDK 和 App Server 開源（Apache-2.0）；IDE 擴充功能和雲端不開源"],
        ["指令檔", "CLAUDE.md（沒有 CLAUDE.md 時會讀取 AGENTS.md）", "AGENTS.md"],
        ["沙盒", "shell 指令需自行開啟", "預設開啟"],
        ["排程任務", "雲端排程任務（預覽版）、桌面排程任務、`/loop`", "桌面應用程式和雲端的排程任務"],
      ],
    },
    {
      kind: "table",
      title: "價格：哪些方案包含它們",
      text: [
        "兩者都包含在各自廠商的聊天訂閱裡，也都可以改用 API key，依 token 計費。價格為每月美元價。",
      ],
      headers: ["Claude 方案", "價格", "ChatGPT 方案", "價格"],
      rows: [
        ["Free", "不含 Claude Code", "Free", "$0，僅限 GPT-6 Luna"],
        ["Pro", "$20（按年付費為 $17）", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100、$200 或 $500"],
        ["Team", "每個席位 $25（Standard），$125（Premium）", "Business", "每位使用者 $25（按年付費為 $20）"],
        ["Enterprise", "每個席位 $20，按年付費，另依 API 費率計算用量", "Enterprise、Edu", "聯絡業務"],
      ],
    },
    {
      kind: "text",
      title: "用量限制",
      text: [
        "兩者都採用滾動的 5 小時視窗加每週額度，而且聊天和程式設計共用同一份額度。兩家都沒有公布每個方案的確切時數或訊息數。",
      ],
      points: [
        "Claude：Pro 有 5 小時額度和每週額度。Max 的用量是 Pro 的 5 倍。Ultra 每週是 Pro 的 10 倍，經過驗證的帳號沒有 5 小時額度。Claude 聊天、Claude Code 和 IDE 共用同一個額度池。",
        "Claude：如果在任務進行中碰到 5 小時額度，Claude Code 可能會把目前這一步做完（Pro 每週一次，Max 每次都可以）。",
        "Codex：OpenAI 依模型估算 Plus 每 5 小時的本機訊息數，從 GPT-6.1 Sol 的 15–160 則，到 GPT-6 Luna 的 350–3,000 則，GPT-6 Astra 為 5–45 則。ChatGPT Pro 目前沒有 5 小時額度，但可能有每週額度。",
        "Codex：雲端任務和 GitHub 程式碼審查使用同一份額度，快速模式的消耗是 2.5 倍。",
        "兩者超出額度後都可以繼續：Claude 用用量額度（credits）或 API key，Codex 用 credits 或 API key（API key 適用於 CLI、SDK 和 IDE，不適用於雲端功能）。",
      ],
    },
    {
      kind: "table",
      title: "功能逐項比較",
      headers: ["功能", "Claude Code", "Codex"],
      rows: [
        ["專案指令", "`CLAUDE.md`、`.claude/rules/`、自動記憶", "`AGENTS.md`、`AGENTS.override.md`，預設合計 32 KiB"],
        ["設定", "`settings.json`", "`config.toml`"],
        ["Subagent", "有，另有背景 agent", "有：內建的 default、worker 和 explorer，以及自訂 TOML agent"],
        ["Hooks", "有", "有，預設開啟"],
        ["Skills、外掛、MCP", "有", "有"],
        ["Plan 模式", "有（Shift+Tab）", "有"],
        ["權限模式", "手動、接受編輯、plan、auto（由分類器檢查）、bypass", "請求核准、替我核准、完整存取、自訂"],
        ["沙盒", "需自行開啟：macOS 用 Seatbelt，Linux 用 bubblewrap；原生 Windows 不支援", "預設開啟，包括原生 Windows 沙盒"],
        ["平行作業", "平行的桌面和網頁工作階段、背景 agent", "桌面應用程式中的 worktree、雲端任務"],
        ["程式碼審查", "Team 和 Enterprise 可用 `@claude review`；任何方案都可在本機用 `/code-review`", "GitHub 上用 `@codex review`；CLI 中用 `/review`"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 和 Codex 之間做選擇",
      text: [
        "沒有哪一個全面領先：兩家各自公布對自家模型有利的基準測試，而且每次發布都會變。請依對你日常工作有影響的因素來選。",
      ],
      steps: [
        {
          title: "從你已經在付費的訂閱出發",
          text: "如果你有 Claude Pro 或 Max，就包含 Claude Code；如果你有 ChatGPT Plus 或 Pro，就包含 Codex。入門方案兩個都試，每月 $40；Codex 也能在 ChatGPT Free 和 Go 上使用，只是額度較小。",
        },
        {
          title: "讓額度符合你的工作時間",
          text: "如果每天都要長時間工作，請比較頂級方案：Claude Ultra（$200）對經過驗證的帳號沒有 5 小時額度，ChatGPT Pro 目前也沒有。偶爾使用的話，任一家的 $20 方案就夠了。",
        },
        {
          title: "決定要沙盒隔離多少",
          text: "Codex 預設對指令做沙盒隔離，Windows 上也一樣。Claude Code 預設在動作前先詢問，提供可自行開啟的沙盒，還有由分類器核准安全動作的 auto 模式。",
        },
        {
          title: "看看你的團隊在哪裡工作",
          text: "Claude Code 有 JetBrains 外掛，也能在 Slack 中執行；Codex 可接入 Cursor、Windsurf、Slack 和 Linear。兩者都支援 VS Code、網頁和手機。",
        },
        {
          title: "讓你的指令可以通用",
          text: "把專案規則寫在 AGENTS.md 裡，再在 CLAUDE.md 中用 `@AGENTS.md` 匯入；這樣兩個 agent 讀的是同一份檔案，切換沒有任何成本。請見 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "來源：Claude Code 文件和 Codex 文件", href: claudeDocs },
    },
    {
      kind: "text",
      title: "那 Cursor、Gemini CLI 和 OpenCode 呢？",
      text: [
        "Cursor 是內建自家 agent 的編輯器，也能承載 Claude Code 和 Codex 的擴充功能。Gemini CLI 和 OpenCode 與這兩者一樣是終端機 agent；OpenCode 開源，支援多家模型供應商。它們都會讀取 AGENTS.md，所以上面這套通用的設定同樣適用。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "兩個都用：給每個 agent 一個職務",
      text: [
        "Crewmark 不需要你二選一。它把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職務、目標和工作時間的 AI 員工，依心跳喚醒，並從共用看板上分配 issue 給它。同一個專案裡，一個員工可以跑在 Claude Code 上，另一個跑在 Codex 上。",
      ],
      steps: [
        {
          title: "把一個工作階段變成員工",
          text: "選一個職務，例如軟體工程師或 SEO 專員，把它的目標寫成一個數字，然後在 Claude Code 或 Codex 裡執行設定指令。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話裡醒來一次。請見[如何讓 Claude Code 主動工作](/proactive-claude-code)和[如何讓 Codex 主動工作](/proactive-codex)。",
        },
        {
          title: "分配 issue，回覆它的訊息",
          text: "把工作放到看板上，每個員工會接手適合自己職務的任務，邊做邊留言，需要你做決定時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 和 Codex 之間做選擇" },
  mid: {
    title: "已經在付費使用 Claude 或 ChatGPT？",
    text: "Crewmark 在你已有的方案上，把 Claude Code 和 Codex 變成有心跳和 issue 看板的 AI 員工。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code 和 Codex 常見問題",
    items: [
      {
        q: "Claude Code 比 Codex 更好嗎？",
        a: "沒有哪一個適合所有人。兩者都是能力很強的 agent，都有 subagent、hooks、skills、MCP 和 plan 模式。請依你已有的訂閱、需要的額度、想要的沙盒預設設定，以及團隊使用的工具來選。",
      },
      {
        q: "Claude Code 和 Codex 哪個比較便宜？",
        a: "Codex 的入門門檻較低：ChatGPT Free（有額度限制）和每月 $8 的 Go 就包含它。Claude Code 從 $20 的 Claude Pro 起步。每月 $20 的話，Claude Pro 和 ChatGPT Plus 都包含各自的 agent。",
      },
      {
        q: "Claude Code 和 Codex 的用量限制是怎樣的？",
        a: "兩者都是 5 小時視窗加每週額度，並與聊天共用。Claude Max 是 Pro 的 5 倍，Ultra 每週是 Pro 的 10 倍。OpenAI 估算 Plus 每 5 小時可發 15–160 則 GPT-6.1 Sol 訊息。Claude Ultra（經過驗證）和 ChatGPT Pro 目前都沒有 5 小時額度。",
      },
      {
        q: "Claude Code 和 Codex 用哪些模型？",
        a: "Claude Code 預設使用 Claude Opus 5.5，另有 Sonnet 5.5、Haiku 5.5 和 Fable 5.1 可選。Codex 預設使用 GPT-6.1 Sol，另有 GPT-6 Astra、GPT-6.1 Terra 和 GPT-6 Luna 可選。",
      },
      {
        q: "Codex 是開源的嗎？Claude Code 呢？",
        a: "Codex CLI 以 Apache-2.0 開源；它的 IDE 擴充功能和雲端不開源。Claude Code 的儲存庫是公開的，但並非開源：保留所有權利，依 Anthropic 的商業條款使用。",
      },
      {
        q: "Claude Code 和 Codex 能共用同一份指令嗎？",
        a: "可以。把指令寫在 Codex 會讀取的 AGENTS.md 裡，再在 CLAUDE.md 中放一行 `@AGENTS.md`，Claude Code 就會讀取同一份檔案。",
      },
      {
        q: "我可以同時使用 Claude Code 和 Codex 嗎？",
        a: "可以。很多開發者兩個都留著，依任務切換。用 Crewmark 的話，每個都可以成為有自己職務的 AI 員工，依心跳從同一個看板上接手 issue。",
      },
    ],
  },
  cta: {
    title: "讓 Claude Code 和 Codex 在同一個團隊裡。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職務、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 5 日對照 Claude Code 文件、claude.com/pricing、learn.chatgpt.com 上的 Codex 文件以及兩個 GitHub 儲存庫查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 或 OpenAI 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標；ChatGPT 和 Codex 是 OpenAI 的商標。",
};
