import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Traditional Chinese translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi（macOS 和 Linux；Windows 有 PowerShell 安裝指令碼）
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # 或：npm install -g @charmland/crush

# Kilo CLI（OpenCode 的分支）
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff（免費，靠文字廣告支撐）
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder 接 Ollama 裡跑的模型
nanocoder --provider ollama --model llama3.1

# Crush：在 crushrc 裡加上 Ollama
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 替代方案（2026）：免費、開源和本機模型",
    description:
      "2026 年最好的 OpenCode 替代方案：開源終端機 agent（Pi、Crush、Kilo CLI、Goose、Cline、Nanocoder）、不需要 API 金鑰的免費選擇、Rust 和 Windows 之選、本機大型模型、圖形介面，以及 Claude Code、Codex 和 Copilot CLI。",
  },
  breadcrumb: "OpenCode 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "部落格 · 程式設計 agent",
    title: "2026 年最好的 OpenCode 替代方案：免費、開源、本機模型",
    lead: "OpenCode 是 GitHub 上星數最多的開源程式設計 agent 之一，約 22.6 萬顆星：MIT 授權的終端機 agent，能接任何模型服務商，另有測試版桌面應用程式。大家改用別的工具，原因通常是這幾個：想要更小、能依自己習慣修改的框架；想要單一 Go 或 Rust 執行檔；本機模型支援更好；想用應用程式而不是終端機；想要不需要 API 金鑰的免費方案；或公司已經在為別的 agent 付費。以下依需求分別列出替代方案，授權、安裝指令和價格都取自各專案自己的頁面。",
    cta: "開始使用",
    secondary: "安裝指令",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "想要一個最小、自己動手改造的 agent：Pi，MIT 授權，約 12.1 萬顆星。",
        "想要精緻、到處都能跑的終端機應用程式，包括 Windows 和 Android：Charm 出品的 Crush。",
        "想要 OpenCode 再加上 IDE 外掛和雲端 agent：Kilo CLI，它就是 OpenCode 的分支。",
        "免費、不需要 API 金鑰：Freebuff，靠文字廣告支撐。",
        "本機模型優先：Nanocoder，由一個非營利社群開發。",
        "用 Rust 寫的：Codex CLI 或 Goose。",
        "已經在為 Claude、ChatGPT 或 Copilot 付費：Claude Code、Codex CLI 或 GitHub Copilot CLI。",
        "想讓 agent 依排程自己工作，而不是只在你輸入時才動：Crewmark，在 Claude Code 或 Codex 之上執行。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 替代方案比較",
      text: ["星數四捨五入，取自 2026 年 11 月 10 日的 GitHub API。費用指上手需要花的錢；多數開源 agent 本身免費，你只需付模型費用。"],
      headers: ["工具", "授權", "開發語言", "執行環境", "費用", "適合"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（約 22.6 萬顆星）", "TypeScript", "終端機、桌面應用程式（測試版）", "免費模型有每日次數限制；Go $10/月，Go Plus $40/月", "基準：任何服務商、本機模型、Plan 和 Build 兩個 agent"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（約 12.1 萬顆星）", "TypeScript", "macOS、Linux、Windows；SDK 和 RPC", "免費；用你的訂閱或 API 金鑰", "用自己的工具和 skill 擴充的極簡框架"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（約 2.9 萬顆星）", "Go", "所有終端機：macOS、Linux、Windows、Android、BSD", "免費；用你的金鑰，或 Charm 的 Hyper 模型", "帶 LSP 和 MCP 的精緻終端機介面"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT（約 2.8 萬顆星）", "TypeScript", "CLI、VS Code、JetBrains、雲端", "免費上手；500 多個模型依服務商原價，不加價", "OpenCode 的核心，加上 IDE 外掛和程式碼審查"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0（約 5.6 萬顆星）", "Rust", "桌面應用程式、CLI、API", "免費；用你的模型金鑰", "寫程式和其他工作都用同一個 agent，靠 MCP 擴充"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（約 7.1 萬顆星）", "TypeScript", "CLI、VS Code、JetBrains、SDK", "免費；用你的模型金鑰", "編輯器和終端機裡的開源 agent"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（約 2,600 顆星）", "TypeScript", "終端機", "免費；本機模型或任何 OpenAI 相容 API", "用 Ollama 做私密、本機優先的程式設計"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0（約 1.4 萬顆星）", "TypeScript", "CLI、桌面、網頁、雲端", "免費，帶文字廣告；不需要 API 金鑰", "不花錢、不註冊模型服務就想試用程式設計 agent"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0（約 2.9 萬顆星）", "TypeScript", "終端機", "Qwen Plus 或 Pro 訂閱，或 API 金鑰", "通義千問模型使用者"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（約 13.4 萬顆星）", "Rust", "終端機；也有 IDE 和桌面版", "任何 ChatGPT 方案，包括免費版；Go $8/月；或 API 金鑰", "想要快速原生執行檔的 ChatGPT 訂閱使用者"],
        ["[Claude Code](https://code.claude.com/docs)", "閉源", "-", "終端機、IDE、桌面、網頁", "Claude Pro $20/月", "想用 Anthropic 官方 agent 的 Claude 使用者"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "閉源", "-", "macOS、Linux、Windows", "需要 Copilot 方案；Pro $10/月", "已經付費使用 Copilot 的團隊"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（約 5 萬顆星）", "Python", "終端機", "免費；用你的模型金鑰", "以 git 為中心的結對程式設計；2026 年 5 月 22 日後沒有新提交（參見 [Aider 替代方案](/blog/aider-alternatives)）"],
        ["[Crewmark](/pricing)", "閉源", "-", "你的電腦上，在你自己的 Claude Code 或 Codex 裡", `免費版（${free.projects} 個專案、${free.employees} 位 AI 員工）；Pro $${pro.price}/月即將推出`, "有職位、工作時間和心跳的 agent，自己從看板領取下一個任務"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今天就能安裝的開源 OpenCode 替代方案",
      text: ["每個都是一行指令安裝。把指令碼交給 shell 執行之前，先看一眼內容。"],
      steps: [
        {
          title: "Pi",
          text: "一個極簡、可擴充的 agent 框架。預設設定就夠用，但刻意不帶子 agent 和計畫模式：你用擴充功能、skill 和提示詞範本自己加上去，或請 Pi 幫你寫。用 `/login` 連接訂閱或 API 金鑰。Pi 沒有內建權限系統，需要限制範圍的話就放進容器或沙箱裡執行，文件提供了三種做法。",
          code: install,
        },
        {
          title: "Crush",
          text: "Charm 的終端機 agent，用 Go 寫成。它讀取語言伺服器（LSP）取得上下文，支援 http、stdio 和 sse 三種 MCP 伺服器，工作階段中途可以換模型。可以用 Homebrew、npm、winget、scoop、apt 和 pkg 安裝，README 列出的平台包括 Windows（PowerShell 和 WSL）、Android 和 BSD 系統。授權是 FSL-1.1-MIT，屬於原始碼公開授權，不算嚴格意義上的開源授權。",
        },
        {
          title: "Kilo CLI",
          text: "Kilo 的 README 寫明它的 CLI 是 OpenCode 的分支。在此之上，Kilo 加了 VS Code 和 JetBrains 外掛、雲端 agent、自動審查 pull request，以及可以在任務中途切換的 500 多個模型。MIT 授權。",
        },
        {
          title: "Goose、Cline 和 Nanocoder",
          text: "Goose 是 Rust 寫的 agent，有桌面應用程式和 CLI，現隸屬 Linux 基金會旗下的 Agentic AI Foundation。Cline 可以作為 CLI、編輯器外掛或 SDK 執行。Nanocoder 是 Nano Collective 做的本機優先終端機 agent，有 normal、auto-accept、yolo、plan、architect 五種模式，還有審查分支、在獨立 worktree 裡檢出 pull request 的指令。",
        },
      ],
      source: { label: "來源：各專案在 GitHub 上的 README", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "附免費模型的 OpenCode 替代方案",
      text: ["OpenCode 本身就有免費模型，每天有請求次數限制，Go 的額度用完後也可以退回免費模型。想找別的免費方案："],
      points: [
        "Freebuff：不需要訂閱、不需要儲值、不需要 API 金鑰。內建模型的費用由文字廣告負擔，預設模型是 DeepSeek V4.1 Flash；邀請和懸賞可以在每日免費額度之外多換時數。",
        "本機模型：Nanocoder、Crush、Goose 和 OpenCode 都能接 Ollama，成本只有你自己的硬體。",
        "Google 的免費額度：Gemini CLI 已經沒有了。它的 README 寫著，免費個人帳號和 Google AI Pro、Ultra 於 2026 年 6 月 18 日轉移到了 Antigravity CLI（`agy`）。",
        "Codex CLI：開源，免費的 ChatGPT 帳號就能用。",
        "開源 agent 加上自己的金鑰：Pi、Kilo CLI、Cline 和 Goose 本身不用錢，你只需付模型費用。",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "適合本機大型模型的 OpenCode 替代方案",
      text: ["如果你用 OpenCode 是為了在自己的電腦上跑模型，下面兩個把本機模型當作首選。"],
      steps: [
        {
          title: "Nanocoder",
          text: "為透過 Ollama 跑的本機模型而做，也能接 OpenRouter 等任何 OpenAI 相容 API。用參數指定服務商和模型，或用 `nanocoder run` 以非互動方式執行。",
          code: local,
        },
        {
          title: "Crush",
          text: "在 `crushrc` 裡把 Ollama 加為服務商。crushrc 是類似 Bash 的設定檔，在包括 Windows 在內的所有平台上寫法都一樣；然後註冊你已經下載好的模型。",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust、Windows、Android 或圖形介面",
      points: [
        "Rust：Codex CLI 和 Goose 都是 Rust 寫的。Crush 是單一 Go 執行檔。",
        "Windows：Crush（winget、scoop 或 npm）、Pi（PowerShell 安裝指令碼）、GitHub Copilot CLI（winget）和 OpenCode 桌面應用程式都能原生執行。",
        "Android：Crush 的 README 把 Android 列在支援的終端機裡。",
        "圖形介面：OpenCode 自己的桌面應用程式（測試版，macOS、Windows、Linux）；Goose Desktop；Freebuff Desktop，還能執行你已經安裝好的 Claude Code 和 Codex；以及 VS Code 和 JetBrains 裡的 Kilo、Cline。",
        "OpenCode Go 每月 $10，使用開放權重模型（Go Plus 每月 $40）。如果比較想要前沿模型的訂閱，ChatGPT Go 每月 $8 就包含 Codex，Copilot Pro 每月 $10，Claude Pro 每月 $20。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "想讓 agent 在你沒輸入的時候也繼續工作",
      text: [
        "這份清單裡的每個工具都在等你的下一則提示。Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳：上班時間它會自己醒來，從看板領取下一個任務，需要你拍板時傳訊息給你。它在你的電腦上執行，用的是你已經付費的方案。",
      ],
      steps: [
        {
          title: "在你的 agent 上雇用一位員工",
          text: "在 Claude Code 或 Codex 對話裡執行設定指令，這個對話就成了員工。參見[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "給它工作時間和心跳",
          text: "在你設定的時段裡每 15 到 240 分鐘醒來一次，通宵也可以。參見[如何讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)和 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        },
        {
          title: "它問的時候再回答",
          text: "需要決定的事會以訊息傳給你，其餘都在看板上。更多終端機 agent 比較，參見 [Cursor 替代方案](/blog/cursor-alternatives)和 [Devin 替代方案](/blog/devin-alternatives)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一個在兩次提示之間也繼續工作的程式設計 agent？",
    text: "Crewmark 員工在工作時間依心跳醒來，從看板領取下一個任務。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "最好的開源 OpenCode 替代方案是哪個？",
        a: "想要自己擴充的小型框架選 Pi，想要各平台都好用的終端機應用程式選 Crush，想要 OpenCode 核心再加 IDE 外掛選 Kilo CLI。Goose 和 Cline 也是可靠的 Apache 授權選擇。",
      },
      {
        q: "Kilo CLI 是以 OpenCode 為基礎嗎？",
        a: "是的。Kilo 的 README 寫明 Kilo CLI 是 OpenCode 的分支，擴充後接入 Kilo 平台：VS Code 和 JetBrains 外掛、雲端 agent 和程式碼審查。",
      },
      {
        q: "有免費的 OpenCode 替代方案嗎？",
        a: "Freebuff 免費，不需要 API 金鑰，靠文字廣告支撐。Nanocoder、Crush、Goose 和 OpenCode 本身搭配 Ollama 跑本機模型也是免費的。Gemini CLI 的免費額度已在 2026 年 6 月轉移到 Antigravity CLI。",
      },
      {
        q: "有用 Rust 寫的 OpenCode 替代方案嗎？",
        a: "OpenAI 的 Codex CLI 和 Goose 都是 Rust 寫的，都採用 Apache 2.0 授權。Crush 用 Go 寫成，以單一執行檔發布。",
      },
      {
        q: "Crush 是開源的嗎？",
        a: "Crush 的程式碼以 FSL-1.1-MIT 公開，這是一種原始碼公開授權。OpenCode、Pi、Kilo CLI 和 Nanocoder 是 MIT；Goose、Cline、Codex CLI、Qwen Code 和 Freebuff 是 Apache 2.0。",
      },
      {
        q: "OpenCode 和 Claude Code 該用哪個？",
        a: "OpenCode 能接任何服務商，包括本機模型，而且開源。Claude Code 是 Anthropic 官方的閉源 agent，Claude Pro（每月 $20）起就包含。反正要付 Claude 的錢，Claude Code 能最先用到新功能；經常換模型的話，OpenCode 或 Pi 比較合適。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 一份工作，而不只是一則提示。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照各專案的 GitHub 儲存庫和 README、opencode.ai 及各廠商價格頁面查核。",
  disclaimer: "Crewmark 是獨立產品，與 OpenCode 及文中任何專案均無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
