import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Traditional Chinese translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli，Aider 的社群分支
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder（透過 Ollama 跑本機模型）
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider 用 --read 載入你的規範檔案
aider --read CONVENTIONS.md

# OpenCode 和 Codex 讀取儲存庫根目錄的 AGENTS.md
mv CONVENTIONS.md AGENTS.md

# Claude Code 讀取 CLAUDE.md，在裡面匯入同一個檔案
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Aider 替代方案（2026）：Aider 還有人維護嗎？現在用什麼",
    description:
      "Aider 還在維護嗎？看它最後一次發布、最後一次提交和未處理的 issue，再看 2026 年最好的 Aider 替代方案：cecli 分支、OpenCode、Pi、Crush、Cline、Nanocoder、Codex CLI 和 Claude Code，附安裝指令。",
  },
  breadcrumb: "Aider 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "部落格 · 程式設計 agent",
    title: "2026 年的 Aider 替代方案：Aider 停止更新了嗎，該換成什麼",
    lead: "Aider 是終端機裡最早的 AI 結對程式設計工具：開源、能接任何模型、為整個儲存庫建立索引圖，每次修改都自動提交 git。它現在仍然能安裝、能用，GitHub 上約 5 萬顆星。但它在 GitHub 上最後一個正式版本是 2025 年 8 月，最後一次提交是 2026 年 5 月 22 日，所以很多使用者在找能跟上新模型的工具。以下是這個專案的現況、和 Aider 用法最接近的替代方案，以及如何把你的設定搬過去。",
    cta: "開始使用",
    secondary: "Aider 停止更新了嗎？",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Aider 停止更新了嗎？",
      text: ["官方沒有宣布。儲存庫沒有封存，也沒人說要停。但從所有公開跡象來看，它基本上沒人在維護："],
      points: [
        "GitHub 上最後一個正式版本：v0.86.0，2025 年 8 月 9 日。PyPI 上最後一個套件 aider-chat 0.86.2 上傳於 2026 年 2 月 12 日。",
        "主分支最後一次提交：2026 年 5 月 22 日，是一次補上新 Claude 模型名稱的合併。",
        "未處理的 issue 和 pull request 約 1,960 個。",
        "2026 年 1 月有使用者開 issue 詢問 Aider 的未來方向。有一則回覆說它基本上是一個人的專案，現在步調慢了下來；維護者沒有在那裡回覆。",
        "README 裡寫的最佳模型仍是 Claude 3.7 Sonnet、DeepSeek R1、o3-mini 和 GPT-4o。",
      ],
    },
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "還想用 Aider，但要有人更新：cecli，Aider 的社群分支。",
        "最受歡迎的開源終端機 agent，能接任何模型：OpenCode，MIT 授權，約 22.6 萬顆星。",
        "延續 Aider 的極簡風格：Pi，一個自己動手擴充的小型框架，MIT 授權，約 12.1 萬顆星。",
        "本機模型優先，就像很多人用 Aider 那樣：Nanocoder，搭配 Ollama。",
        "想要 Aider 的 watch 模式（在程式碼註解裡提出需求）：VS Code 和 JetBrains 裡的 Cline 或 Kilo Code。",
        "反正已經在付 ChatGPT 或 Claude 的錢：Codex CLI 或 Claude Code。",
        "想要依排程自己處理待辦、而不是只在你輸入時才動的 agent：Crewmark，在 Claude Code 或 Codex 之上執行。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Aider 替代方案比較",
      text: ["星數四捨五入，取自 2026 年 11 月 10 日的 GitHub API；「最後一次提交」指當天主分支上最新的提交。"],
      headers: ["工具", "授權", "開發語言", "模型", "費用", "適合"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（約 5 萬顆星）", "Python", "幾乎任何模型，包括本機模型", "免費；用你的模型金鑰", "基準；最後一次提交 2026 年 5 月 22 日"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0（約 420 顆星）", "Python", "和 Aider 一樣", "免費；用你的模型金鑰", "想留在 Aider 體系裡，用一個仍在更新的分支"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（約 22.6 萬顆星）", "TypeScript", "任何服務商、本機模型", "免費模型有每日次數限制；Go $10/月", "功能完整的終端機 agent，有 Plan 和 Build 模式及桌面應用程式"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（約 12.1 萬顆星）", "TypeScript", "你的訂閱或 API 金鑰", "免費", "用工具和 skill 擴充的極簡框架"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（約 2.9 萬顆星）", "Go", "多數服務商、Ollama", "免費；用你的金鑰", "帶 LSP 和 MCP 的精緻終端機介面，各平台都能跑"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（約 7.1 萬顆星）", "TypeScript", "你的模型金鑰", "免費", "VS Code、JetBrains 或終端機裡的 agent"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT（約 2.8 萬顆星）", "TypeScript", "500 多個，依服務商原價", "免費上手", "IDE 外掛，加上從 OpenCode 分出來的 CLI"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（約 2,600 顆星）", "TypeScript", "Ollama 或任何 OpenAI 相容 API", "免費", "私密、本機優先的程式設計"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（約 13.4 萬顆星）", "Rust", "OpenAI", "任何 ChatGPT 方案，包括免費版；或 API 金鑰", "想要快速原生 agent 的 ChatGPT 使用者"],
        ["[Claude Code](https://code.claude.com/docs)", "閉源", "-", "Anthropic", "Claude Pro $20/月", "Claude 使用者"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT（約 1.6 萬顆星）", "Go", "多家服務商", "免費；用你的模型金鑰", "大型專案；最後一次提交 2025 年 10 月 3 日"],
        ["[Crewmark](/pricing)", "閉源", "-", "透過你的 Claude Code 或 Codex", `免費版（${free.projects} 個專案、${free.employees} 位 AI 員工）；Pro $${pro.price}/月即將推出`, "有職位、工作時間和心跳的 agent，自己從看板領取下一個任務"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今天就能安裝的開源 Aider 替代方案",
      text: ["每個都是一行指令安裝。把指令碼交給 shell 執行之前，先看一眼內容。"],
      steps: [
        {
          title: "cecli：Aider 的分支",
          text: "cecli 於 2025 年 8 月從 Aider 分出來，至今仍在更新。它自稱是為了可擴充、可自訂而做的 CLI agent，在 macOS、Linux 和 Windows 上安裝後指令是 `cecli`，PyPI 上的套件名稱是 cecli-dev。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "涵蓋範圍和 Aider 最接近：開源、終端機優先、能接 200 多家模型服務商，包括本機模型。它在擁有完整權限的 Build agent 之外，加了唯讀的 Plan agent、子 agent，以及測試版桌面應用程式。",
        },
        {
          title: "Pi 和 Nanocoder",
          text: "Pi 刻意保持核心精簡，不帶子 agent 和計畫模式，需要什麼就用擴充功能和 skill 加上去。Nanocoder 由一個非營利社群為 Ollama 本機模型而做，有 plan 和 architect 模式，後者 Aider 使用者會很熟悉。",
        },
      ],
      source: { label: "來源：各專案在 GitHub 上的 README", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "從 Aider 換到別的 agent",
      steps: [
        {
          title: "把規範檔案帶過去",
          text: "Aider 從你用 `--read` 載入的檔案裡讀取程式碼規範。OpenCode 和 Codex 讀取儲存庫根目錄的 `AGENTS.md`，Claude Code 讀取 `CLAUDE.md`，後者可以匯入 `AGENTS.md`。參見 [Codex 的 AGENTS.md](/blog/codex-agents-md) 和 [CLAUDE.md](/blog/claude-md)。",
          code: conventions,
        },
        {
          title: "想好怎麼提交",
          text: "Aider 每次修改都會自動提交並產生提交訊息。Claude Code、Codex 和 OpenCode 預設不替你提交，改完後請它提交，或把提交規則寫進 AGENTS.md。",
        },
        {
          title: "把模型帶過去",
          text: "如果你之前用 Aider 跑 DeepSeek 或本機模型，OpenCode、Crush、Nanocoder 和 Pi 都能用你自己的金鑰，前三個能接 Ollama。反過來想在 Claude Code 裡用 DeepSeek，參見 [Claude Code 接 DeepSeek](/blog/claude-code-deepseek)。",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider 對比 OpenCode、Claude Code、Pi 和 Cline",
      points: [
        "Aider 對比 OpenCode：兩者都開源、不綁定模型。OpenCode 每週 100 多次提交，加了 agent、子 agent、MCP 和桌面應用程式；Aider 比較簡單，會替你提交。",
        "Aider 對比 Claude Code：Claude Code 閉源，使用 Anthropic 的模型，Claude Pro（每月 $20）起就包含，新功能最先用到。Aider 免費，能接任何模型。",
        "Aider 對比 Pi：兩者都刻意做得精簡。Pi 一直在活躍開發，有 SDK、RPC 模式和擴充套件系統。",
        "Aider 對比 Cline：Cline 主要在編輯器裡用，也有 CLI；Aider 以終端機為主，用 watch 模式回應編輯器裡的註解。",
        "Aider 對比 Codex：Codex CLI 開源、用 Rust 寫成，所有 ChatGPT 方案都包含，使用 OpenAI 的模型。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "從結對程式設計工具，到有自己待辦的同事",
      text: [
        "Aider 和這裡的每個工具都在等你的下一則訊息。Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳：上班時間它會自己醒來，從看板領取下一個任務，提交程式碼、開 pull request，需要你拍板時傳訊息給你。",
      ],
      steps: [
        {
          title: "在你的 agent 上雇用一位員工",
          text: "在 Claude Code 或 Codex 對話裡執行設定指令，這個對話就成了員工。參見 [AI 軟體工程師](/ai-employees/software-engineer)。",
        },
        {
          title: "給它工作時間和心跳",
          text: "在你設定的時段裡每 15 到 240 分鐘醒來一次。參見[如何讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "比較其他工具",
          text: "更多終端機 agent 參見 [OpenCode 替代方案](/blog/opencode-alternatives)；編輯器類參見 [Cursor 替代方案](/blog/cursor-alternatives)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一個在兩次提示之間也繼續工作的 agent？",
    text: "Crewmark 員工在工作時間依心跳醒來，從看板領取下一個任務。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Aider 停止更新了嗎？",
        a: "儲存庫沒有封存，現在也還能安裝和使用。但它在 GitHub 上最後一個版本是 2025 年 8 月的 v0.86.0，PyPI 最後一次發布在 2026 年 2 月，最後一次提交是 2026 年 5 月 22 日；2026 年 1 月有人問它的未來方向，維護者至今沒有回覆。",
      },
      {
        q: "Aider 還有人維護嗎？",
        a: "幾乎沒有。2026 年 5 月 22 日之後沒有提交，約 1,960 個 issue 和 pull request 未處理，README 推薦的還是 2025 年初的模型。社群分支 cecli 仍在更新。",
      },
      {
        q: "Aider 有分支嗎？",
        a: "有：cecli，2025 年 8 月從 Aider 分出的 GitHub 分支，Apache 2.0 授權，安裝後指令是 `cecli`。它比 Aider 小得多，約 420 顆星。",
      },
      {
        q: "2026 年 Aider 和 OpenCode 哪個比較好？",
        a: "對多數人來說是 OpenCode：它和 Aider 一樣開源、不綁定模型，但幾乎每天更新，還有子 agent、MCP 和桌面應用程式。Aider 比較簡單，每次修改都替你提交。",
      },
      {
        q: "Aider 免費嗎？",
        a: "免費。Aider 採用 Apache 2.0 授權，你只需付模型服務商的費用；用本機模型則完全不花錢。",
      },
      {
        q: "最好的免費 Aider 替代方案是哪個？",
        a: "OpenCode 內建免費模型，每天有次數限制；Nanocoder、Crush 和 OpenCode 透過 Ollama 跑本機模型都免費；Codex CLI 用免費的 ChatGPT 帳號就能用。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 一份待辦，而不只是一則提示。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照各專案的 GitHub 儲存庫、README 和發布紀錄、PyPI 及各廠商價格頁面查核。",
  disclaimer: "Crewmark 是獨立產品，與 Aider 及文中任何專案均無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
