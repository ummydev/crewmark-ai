import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Traditional Chinese translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas（需要 Node 24+ 和 uv）
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent（SWE-agent 的後繼者）
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Devin 替代方案（2026）：開源、免費和更便宜的選擇",
    description:
      "2026 年最好的 Devin AI 替代方案，附各廠商目前價格：今天就能安裝的開源 agent（OpenHands、OpenCode、mini-swe-agent、Cline、Goose），OpenAI、Anthropic、Google 和 GitHub 的雲端 agent，以及針對團隊的平台。",
  },
  breadcrumb: "Devin 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "部落格 · AI 軟體工程師",
    title: "2026 年最好的 Devin 替代方案：開源、免費和更便宜的選擇",
    lead: "Devin 出自 Cognition，是一位自主工作的 AI 軟體工程師：你在 Slack 或 Teams 裡標記它，指派一張 Linear 或 Jira 工單給它，或請它去處理失敗的 CI，它就會在自己的虛擬機器裡工作，然後開一個 pull request。2026 年它有免費版，付費方案每月 $20 起。替代方案分成三類：自己執行的開源 agent、模型廠商的雲端 agent，以及針對團隊的平台。每一類適合不同的人；以下說明各自適合誰，價格都來自各廠商自己的官網。",
    cta: "開始使用",
    secondary: "看開源替代方案",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "想要開源、部署在自己的伺服器上：OpenHands，前身是 OpenDevin，現在是一個自架的程式設計 agent 控制中心。",
        "常駐終端機、想用任何模型：OpenCode，採用 MIT 授權，GitHub 上約 226,000 顆星。",
        "已經在為 ChatGPT 或 Claude 付費：OpenAI Codex 雲端任務或 Claude Code 雲端工作階段，每月 $20 起的方案就包含。",
        "團隊在 GitHub 上協作：雲端的 Copilot，從 issue 指派任務，Copilot Pro 每月 $10 起就包含。",
        "想在整間公司用工單驅動 agent：Factory 的 Droids。",
        "想在你自己的 Claude Code 或 Codex 上有一位長期在職的 AI 工程師：Crewmark。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 替代方案比較",
      text: [
        "價格是包含該 agent 的最低方案，取自 2026 年 11 月 10 日各廠商的價格頁面。星數經過四捨五入，取自同一天的 GitHub API。",
      ],
      headers: ["工具", "是否開源", "在哪裡執行", "起價", "適合"],
      rows: [
        ["[Devin](https://devin.ai)", "否", "每個工作階段一台自己的雲端 VM；本機有 Devin Desktop 和 CLI", "有免費版；Pro 每月 $20", "想從 Slack、Teams 或 Jira 把工單交給 agent 的團隊"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "是，MIT（~93k 顆星）", "你的筆記型電腦、Docker、VM；也有代管雲端", "自架免費；Teams 每月 $500", "在自己的基礎架構上、用自己的模型金鑰執行 Devin 式 agent"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "是，MIT（~226k 顆星）", "終端機、桌面應用程式、SDK", "包含免費模型；Go 每月 $10", "想在 200 多家模型供應商裡任選的終端機使用者"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "是，MIT（~9.5k 顆星）", "本機 CLI", "免費（模型費用自付）", "研究、基準測試和可重現的 issue 修復"],
        ["[Cline](https://github.com/cline/cline)", "是，Apache 2.0（~71k 顆星）", "CLI、VS Code、JetBrains、桌面", "免費（模型費用自付）", "在編輯器裡用的開源 agent"],
        ["[Goose](https://github.com/aaif-goose/goose)", "是，Apache 2.0（~56k 顆星）", "桌面應用程式、CLI、API", "免費（模型費用自付）", "一個 agent 同時處理程式碼和其他工作，支援 MCP 擴充"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "僅 CLI 開源（Apache 2.0）", "OpenAI 的雲端；CLI、IDE、桌面", "ChatGPT Plus 每月 $20", "ChatGPT 訂閱使用者"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "否", "每個雲端工作階段一台 Anthropic 代管的 VM；也能在本機執行", "Claude Pro 每月 $20", "想闔上筆電後工作還能繼續的 Claude Code 使用者"],
        ["[Google Jules](https://jules.google)", "否", "Google 雲端 VM", "基本方案每天 15 個任務；Google AI Pro 每月 $19.99", "使用 Gemini 的個人開發者"],
        ["[GitHub Copilot（雲端）](https://github.com/features/copilot/plans)", "否", "GitHub 的雲端沙箱", "Copilot Pro 每月 $10", "已經在用 GitHub 的團隊"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "否", "Cursor 的雲端 VM", "Premium 每月 $30", "已經在用 Cursor 的團隊"],
        ["[Factory](https://factory.com)", "否", "桌面、CLI、網頁；雲端和本機 agent", "Pro 每月 $20", "用工單和聊天驅動 agent 的工程團隊"],
        ["[Crewmark](/pricing)", "是，GPL-3.0", "你的電腦上，在你自己的 Claude Code 或 Codex 裡", `免費版（${free.projects} 個專案、${free.employees} 位 AI 員工）；Pro 每月 $${pro.price}，即將推出`, "想讓 AI 工程師依班表工作、用的是已付費方案的小團隊"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "現在就能執行的開源 Devin 替代方案",
      text: [
        "Devin 本身不開源。以下這些是開源的，每個都只要一行指令就能安裝。模型金鑰由你自己提供，所以軟體免費，你只需向模型供應商付費。把指令碼透過管線交給 shell 之前，先讀一遍。",
      ],
      steps: [
        {
          title: "OpenHands（原 OpenDevin）",
          text: "現在叫 Agent Canvas：一個自架的控制中心，可以在你的筆記型電腦、Docker 或 VM 上執行 OpenHands agent，也能執行 Claude Code、Codex、Gemini 或 OpenCode，還提供 Slack、GitHub 和 Linear 的自動化。自架免費；代管的 Teams 方案每月 $500，最多 10 位使用者。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "一個 MIT 授權的終端機 agent，支援 200 多家模型供應商，包括本機模型，另有一個處於 beta 階段的桌面應用程式。免費模型不用註冊帳號就能用；OpenCode Go 每月 $10，你也可以用 ChatGPT 或 GitHub Copilot 訂閱登入。和它類似的 agent 參見 [OpenCode 替代方案](/blog/opencode-alternatives)。",
        },
        {
          title: "SWE-agent 和 mini-swe-agent",
          text: "SWE-agent 是普林斯頓和史丹佛的研究型 agent，拿到一個 GitHub issue 就嘗試修復它。它的 README 現在寫明已被 mini-swe-agent 取代，所以從 mini-swe-agent 開始。免費；你只需支付模型費用。",
        },
        {
          title: "Cline、Goose、Aider 和 Kilo Code",
          text: "Cline 是採用 Apache 授權的 agent，可在終端機、VS Code 和 JetBrains 裡使用，有 Plan 和 Act 兩種模式。Goose 現在隸屬 Linux 基金會旗下的 Agentic AI Foundation，透過 MCP 擴充處理程式碼和其他任務。Aider 和 Kilo Code 也是熱門的開源程式設計 agent；Devika 是早期的開源 Devin 複製品，自 2025 年 9 月以來就沒有更新過。",
        },
      ],
      source: { label: "來源：GitHub 上的 OpenHands", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "模型廠商的雲端 agent",
      text: [
        "如果你想要 Devin 那種「交出去就不用管」的工作方式，又不想多加一家供應商，模型廠商現在就在你可能已經有的方案裡提供了。",
      ],
      points: [
        "OpenAI Codex：在 chatgpt.com/codex 使用雲端任務，ChatGPT Plus 每月 $20 起就包含；雲端任務消耗的額度較多，API 金鑰可以用於 CLI 和 IDE，但不能用雲端功能。",
        "Claude Code：從 claude.ai/code、Claude App 或 `claude --cloud` 啟動雲端工作階段，每個工作階段都在一台隔離的、由 Anthropic 代管的 VM 裡執行；Pro（每月 $20）、Max、Ultra 和 Team 方案都能用，VM 不另外收費。",
        "Google Jules：把你的儲存庫複製到雲端 VM，然後開一個 pull request；基本方案每天 15 個任務，Google AI Pro（每月 $19.99）每天 100 個。",
        "雲端的 GitHub Copilot：指派一個 issue，Copilot 就會開一個 pull request；Copilot Pro 每月 $10 起就包含，用量以 GitHub AI Credits 計費。",
        "Cursor Cloud Agents：在隔離的 VM 裡執行，可以從 Cursor、網頁、Slack 或 Linear 啟動；每月 $30 的 Premium 方案起。",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Devin 在 2026 年的價格",
      text: [
        "很多排行榜還寫著 $500 的團隊方案和每 ACU $2.25。現在 devin.ai 上的自助方案已經不按 ACU 計費：帳單由方案內額度加隨需額度組成，只有 Enterprise 按 ACU 計費。",
      ],
      points: [
        "Free：$0，額度較少。",
        "Pro：每月 $20，包含 Devin Cloud；超出部分依 API 價格計費。",
        "Max：每月 $200。",
        "Teams：每月 $80，每個完整的開發者席位另加每月 $40，最多 100 位使用者。",
        "Enterprise：客製價格。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "一位有長期工作的 AI 工程師，在你自己的 agent 上執行",
      text: [
        "Devin 和這些雲端 agent 都要等你一個一個指派任務。Crewmark 把你自己的 Claude Code 或 Codex 變成一位 AI 軟體工程師，有職位、寫成數字的目標、工作時間和心跳：在班時，它會醒來，從看板上接下一個 issue，開 pull request，需要你做決定時傳訊息給你。它用的是你已經在付費的訂閱，在你的電腦上執行。",
      ],
      steps: [
        {
          title: "雇用軟體工程師職位",
          text: "職位說明、目標和日常流程都已設定好；見 [AI 軟體工程師](/ai-employees/software-engineer)。",
        },
        {
          title: "把工作放到看板上",
          text: "像指派給隊友一樣指派 issue；員工會隨時更新狀態和留言。見 [Claude Code 看板](/blog/claude-code-kanban)。",
        },
        {
          title: "讓它一直做下去",
          text: "設定工作時間，通宵也可以。見[讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)和 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        },
      ],
    },
  ],
  mid: {
    title: "想在你已有的 Claude Code 或 Codex 方案上，擁有一位 Devin 式的工程師？",
    text: "Crewmark 員工依心跳醒來，照著看板工作，並開 pull request。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "最好的開源 Devin 替代方案是什麼？",
        a: "最接近的是 OpenHands，它的前身是 OpenDevin：一個自架的 agent 平台，用你自己的模型金鑰執行。想要終端機 agent 就選 OpenCode；做研究和基準測試就選 mini-swe-agent。",
      },
      {
        q: "OpenDevin 和 OpenHands 是同一個東西嗎？",
        a: "是的。OpenDevin 已由 All Hands AI 更名為 OpenHands。它採用 MIT 授權，現在以 Agent Canvas 的形式發布，也能執行 Claude Code、Codex 和其他 agent。",
      },
      {
        q: "Devin 免費嗎？",
        a: "有一個額度較少的免費版。根據 2026 年 11 月 10 日 devin.ai 上的資訊，付費方案有 Pro（每月 $20）、Max（$200），以及 Teams（每月 $80，另加每個開發者席位 $40）。",
      },
      {
        q: "Devin 還按 ACU 收費嗎？",
        a: "只有 Enterprise 還按 ACU 收費。自助方案現在由方案內額度加隨需額度組成，所以過去每 ACU $2.25 的價格已經不適用於它們。",
      },
      {
        q: "Devin 和 Claude Code 或 Codex 比，該用哪個？",
        a: "如果你已經在為 Claude 或 ChatGPT 付費，它們的雲端工作階段和雲端任務就能讓你用上 Devin 那種交出去就不用管的工作方式，不必額外花錢。Devin 多出來的是為團隊打造的 Slack、Teams、Jira 和 Linear 工作流程。",
      },
      {
        q: "最便宜的 Devin 替代方案是什麼？",
        a: "開源 agent 除了模型用量之外不花錢。代管方案裡，每月 $10 的 GitHub Copilot Pro 包含雲端 agent，Google Jules 的基本方案每天可以跑 15 個任務。",
      },
    ],
  },
  cta: {
    title: "給你的 Claude Code 或 Codex 一份工作，而不只是一個任務。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照各產品的官網、價格頁面、文件和 GitHub 儲存庫查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Cognition 或文中列出的任何公司無關，也未獲其背書。產品名稱是其所有者的商標。",
};
