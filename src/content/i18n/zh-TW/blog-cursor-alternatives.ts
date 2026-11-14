import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 Cursor 替代方案：10 款免費、開源和更便宜的選擇",
    description:
      "Cursor 加入 SpaceX 後改為以 Grok 為主的方案。比較 10 款 Cursor 替代方案：Claude Code、Codex、GitHub Copilot、Devin Desktop（Windsurf）、Zed、Cline、Kilo Code、OpenCode、Antigravity 和 Junie，附價格與免費方案。",
  },
  breadcrumb: "Cursor 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · AI 程式設計工具",
    title: "2026 年最好的 Cursor 替代方案",
    lead: "Cursor 在 2026 年 8 月成為 SpaceX 的一部分，方案現在以 Grok 為核心：$8 的 Plus 方案只提供 Grok 模型，而從 $30 的方案起，Claude、GPT 或 Gemini 要依 API 定價另外計費。如果這不是你當初訂閱時想要的，還有不少好選擇：你現有訂閱就包含的 agent、內建 AI 的編輯器，以及用自己的 API 金鑰就能用的開源工具。本文截至 2026 年 11 月 6 日，從定位、免費方案、價格和模型四個面向比較其中 10 款。",
    cta: "開始使用",
    secondary: "跳到比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Cursor 替代方案比較",
      text: [
        "入門價格是各廠商頁面上列出最便宜的個人付費方案，單位為每月美元。「Claude 模型」指能否在其中使用 Anthropic 的模型，無論是方案內含還是使用你自己的金鑰。",
      ],
      headers: ["工具", "類型", "免費選項", "付費起價", "Claude 模型", "開源"],
      rows: [
        ["Claude Code", "Agent：終端機、IDE、桌面、網頁", "無", "$20（Claude Pro）", "內含", "否"],
        ["OpenAI Codex", "Agent：CLI、IDE、桌面、雲端", "有，ChatGPT Free", "$8（ChatGPT Go）", "否", "CLI 採用 Apache-2.0"],
        ["GitHub Copilot", "適用於大多數 IDE 的擴充功能、CLI", "有，每月 2,000 次自動完成", "$10（Pro）", "支援；Opus 需 Pro+（$39）以上", "否"],
        ["Devin Desktop（原 Windsurf）", "IDE", "有", "$20（Pro）", "支援", "否"],
        ["Zed", "原生編輯器", "有，使用你自己的金鑰", "$10（Pro）", "使用你自己的金鑰或外部 agent", "是"],
        ["Cline", "VS Code 擴充功能和 CLI", "免費；依模型用量付費", "無個人方案", "使用你自己的金鑰", "Apache-2.0"],
        ["Kilo Code", "VS Code 和 JetBrains 擴充功能、CLI", "有", "$19（Kilo Pass Starter）", "透過閘道或你自己的金鑰", "MIT"],
        ["OpenCode", "終端機 agent、桌面、IDE", "有", "未列出", "使用你自己的金鑰；可用 Copilot 或 ChatGPT 帳號登入", "MIT"],
        ["Google Antigravity", "Agent 式 IDE、CLI", "有", "Business 每個席位 $30 起", "付費方案支援", "否"],
        ["JetBrains Junie", "JetBrains IDE 中的 agent、CLI", "有，Junie Lite", "AI Pro，標價 $8.33", "支援，也可用你自己的金鑰", "否"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何選擇 Cursor 替代方案",
      steps: [
        {
          title: "從你已經在付費的訂閱開始",
          text: "Claude Pro 或 Max 包含 Claude Code；所有 ChatGPT 方案都包含 Codex；很多公司已經有 GitHub Copilot。用你已經付費的工具，通常比買一套新工具再加上 API 帳單便宜。",
        },
        {
          title: "決定要編輯器還是 agent",
          text: "如果你想要 Cursor 那樣的使用感（有行內編輯和 Tab 自動完成的編輯器），可以看看 Devin Desktop、Zed、VS Code 中的 Copilot 或 Antigravity。如果你主要是把任務交給 agent，Claude Code、Codex 和 OpenCode 可以在任何終端機和編輯器中工作。",
        },
        {
          title: "如果你想要免費或開源",
          text: "Cline、Kilo Code、OpenCode 和 Zed 都是開源的，使用你自己的 API 金鑰即可免費使用；你只需依實際用量付費給模型供應商。",
        },
        {
          title: "弄清楚模型從哪裡來",
          text: "如果你每天都要用 Claude，選一個方案內就包含它的工具（Claude Code、Copilot、Devin Desktop、Junie），可以避免依 token 計費帶來的意外帳單。自備金鑰的工具能用任何模型，依定價計費。",
        },
        {
          title: "把你的規則一起帶走",
          text: "這些工具很多都會讀取 AGENTS.md，所以離開 `.cursor/rules` 大致就是把規則複製到一個檔案裡。想用一個檔案服務多個 agent，請見 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "來源：GitHub Copilot 方案頁面和各廠商官網", href: copilot },
    },
    {
      kind: "text",
      title: "各個替代方案簡介",
      points: [
        "Claude Code：Anthropic 的 agent，包含在 Claude Pro（$20，按年付費為 $17）、Max（$100）和 Ultra（$200）中；也可以用 API 金鑰執行。與 Cursor 的比較請見 [Claude Code vs Cursor 比較](/blog/claude-code-vs-cursor)。",
        "OpenAI Codex：每個 ChatGPT 方案都包含它，從 Free（GPT-6 Luna）、Go（$8）到 Plus（$20）和 Pro（$100 起）。請見 [Claude Code 和 Codex 比較](/blog/claude-code-vs-codex)。",
        "GitHub Copilot：Free、Pro（$10）、Pro+（$39）和 Max（$100）；可在 VS Code、Visual Studio、JetBrains、Xcode、Neovim、Eclipse 和 Zed 中使用，支援 Claude、GPT、Gemini 等模型。",
        "Devin Desktop：Windsurf 的新名稱，出自 Cognition；windsurf.com 現在會轉址到它。有 Free、Pro（$20）和 Max（$200）。",
        "Zed：適用於 macOS、Windows 和 Linux 的高速原生編輯器；使用你自己的金鑰或 Claude Code、Codex 等外部 agent 可免費使用，託管模型需 $10 的 Pro。",
        "Cline：開源的 VS Code 擴充功能和 CLI；免費，使用你自己的金鑰，只需支付推論費用。",
        "Kilo Code：開源（MIT），現歸 Anaconda 所有；使用你自己的金鑰或免費模型可免費使用，Kilo Pass $19 起。",
        "OpenCode：開源的終端機 agent，支援 75 家以上的模型供應商；免費，還能用既有的 Copilot 或 ChatGPT 訂閱登入。",
        "Google Antigravity：Google 的 agent 式 IDE 和 CLI，個人免費使用；付費方案增加 Gemini 4 Argon 和 Claude 模型。",
        "JetBrains Junie：JetBrains 的程式設計 agent，可在其 IDE 中使用，也有 CLI，提供免費的 Lite 版以及 AI Pro 和 Ultimate 方案。",
        "未收錄：Roo Code（GitHub 儲存庫已封存）、Gemini CLI（個人使用已於 2026 年 6 月移轉到 Antigravity CLI）和 Aider（自 2025 年 8 月以來沒有新版本）。",
      ],
    },
    {
      kind: "text",
      title: "Cursor 有哪些改變",
      text: [
        "Cursor 在 2026 年 8 月 14 日宣布 SpaceX 已完成收購。它的價格頁面現在列出 Free、Plus（$8，僅限 Grok 模型）、Premium（$30，含雲端 agent、自動化、程式碼審查，第三方模型依用量以 API 定價計費）、Super（$100）和 Ultra（$200），另附 X 的功能（例如動態時報廣告較少）。用量是與 Grok 共用、每週重置的一個池子。如果你繼續用 Cursor，仍然可以在裡面用你的 Claude 方案執行 Claude Code 擴充功能或 CLI。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "換了工具？給新工具一份工作。",
      text: [
        "無論你換到哪個 agent，它都在等你的下一個提示詞。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職務、目標和工作時間的 AI 員工，依心跳喚醒它，從看板上接手下一個 issue，使用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "選一個職務和目標",
          text: "軟體工程師、審查員、SEO 寫手：每位員工都有一個寫成數字的目標。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘醒來一次，接手下一個 issue；請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "同時執行多位員工",
          text: "給每位員工獨立的 worktree 和職務；請見 [Claude Code 編排工具](/blog/claude-code-orchestration-tools)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "選擇 Cursor 替代方案" },
  mid: {
    title: "要從 Cursor 換到 Claude Code、Codex 或 OpenCode？",
    text: "Crewmark 把它們變成 AI 員工，依心跳醒來，自己接手下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "Cursor 替代方案常見問題",
    items: [
      {
        q: "最好的 Cursor 替代方案是什麼？",
        a: "有 Claude 方案就用 Claude Code；有 ChatGPT 就用 Codex；想要使用感像 Cursor 的編輯器，選 Devin Desktop（原 Windsurf）或 VS Code 中的 Copilot；想要免費開源，就用自己的金鑰搭配 Cline、Kilo Code、OpenCode 或 Zed。",
      },
      {
        q: "有免費的 Cursor 替代方案嗎？",
        a: "有。Cline、Kilo Code、OpenCode 和 Zed 使用你自己的 API 金鑰即可免費使用，Copilot 有每月 2,000 次自動完成的免費版，Codex 可在 ChatGPT Free 上使用，Antigravity 和 Devin Desktop 也有免費方案。",
      },
      {
        q: "有哪些開源的 Cursor 替代方案？",
        a: "Cline（Apache-2.0）、Kilo Code（MIT）、OpenCode（MIT）和 Zed 都是開源的；Codex CLI 也是開源的（Apache-2.0）。",
      },
      {
        q: "Cursor 為什麼調整價格？",
        a: "SpaceX 收購 Cursor（2026 年 8 月 14 日宣布）後，它的方案轉向 Grok 模型和搭配 X 的產品組合：$8 的 Plus 只能用 Grok，從 Premium（$30）起，Claude 等第三方模型要依 API 定價另外計費。",
      },
      {
        q: "Windsurf 怎麼了？",
        a: "Windsurf 現在改名為 Devin Desktop，由 Cognition 開發；windsurf.com 會轉址到 devin.ai/desktop。",
      },
      {
        q: "哪個 Cursor 替代方案最便宜？",
        a: "自備金鑰的工具（Cline、OpenCode、Kilo Code、Zed）除了模型用量之外不花錢。在方案中，Codex 搭配 ChatGPT Go 從 $8 起，Copilot Pro 是 $10；如果想要內含 Claude，Claude Pro 是 $20。",
      },
      {
        q: "我的 Cursor 規則可以保留嗎？",
        a: "大部分可以。把它們放進 AGENTS.md，Codex、Copilot、OpenCode 等都會讀取；Claude Code 則透過在 CLAUDE.md 中寫 `@AGENTS.md` 匯入來讀取它。",
      },
    ],
  },
  cta: {
    title: "換了程式設計 agent，訂閱不變，現在還多了一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職務、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 cursor.com 以及各替代方案的官網、價格頁面或 GitHub 儲存庫查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Cursor、SpaceX 或文中列出的任何廠商無關，也未獲其背書。產品名稱是其所有者的商標。",
};
