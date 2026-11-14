import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# 用 Node.js 執行 Web UI
npx @deepseek-ai/dsh web
# 然後開啟 http://127.0.0.1:3080

# 或從原始碼建置
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# 執行一個任務，無介面，指定權限模式
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# 以 JSON 串流輸出事件，例如供腳本使用
dsh headless "Summarize open TODOs" --json

# 為某個 profile 加入外掛
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness 是什麼：安裝、價格與 Claude Code 比較",
    description:
      "DeepSeek Harness（dsh）完整解說：DeepSeek 開源的代理 harness，桌面版與 CLI 如何安裝、DeepSeek API 價格、外掛與 Super-Agent，以及與 Claude Code、Codex、OpenCode 的比較。",
  },
  breadcrumb: "DeepSeek Harness 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · DeepSeek",
    title: "DeepSeek Harness 是什麼、如何安裝、和同類工具怎麼比",
    lead: "DeepSeek Harness（`dsh`）是 DeepSeek 開源的代理（agent）harness：一款執行 AI 代理的應用程式，可處理日常事務、程式開發、研究和背景工作，從工具到介面幾乎一切都是外掛。它採用 MIT 授權，目前是開發者預覽版，也是 GitHub 上星星數最多的儲存庫之一；自 2026 年 10 月 31 日 DeepSeek 發表 Super-agent 原型以來，它的搜尋量持續攀升。本文說明它是什麼、桌面版和 CLI、如何安裝、要花多少錢、主要功能，以及與 Claude Code、Codex、OpenCode 的比較。",
    cta: "開始使用",
    secondary: "跳到安裝步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness 一覽",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["開發者", "DeepSeek AI"],
        ["是什麼", "開源的代理 harness，採用「一切皆外掛」的架構，以 Cordis 框架打造"],
        ["授權", "MIT；截至 2026 年 11 月 6 日，GitHub 星星數約 275,000"],
        ["狀態", "開發者預覽版；DeepSeek 提醒可能出現不相容的變更，所有版本都標為預發行（最新為 v0.2.2-rc.1，2026 年 11 月 4 日）"],
        ["使用方式", "桌面應用程式（macOS Apple 晶片、Windows x64）、Web UI（`dsh web`）、無介面 CLI（headless）、ACP 和 SDK 模式"],
        ["預設模型", "`deepseek-flash`（DeepSeek-V4.1-Flash）和 `deepseek-v4-pro`，脈絡長度皆為 1,048,576 個 token"],
        ["其他模型供應商", "Anthropic、OpenAI、Kimi、GLM，或任何相容 OpenAI 或 Anthropic 介面的端點，包括自架伺服器"],
        ["價格", "軟體免費；你只需支付 DeepSeek API（或其他供應商）的用量費用"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何安裝和使用 DeepSeek Harness",
      steps: [
        {
          title: "選擇桌面版或網頁版",
          text: "從 deepseek.com/en/harness 下載桌面應用程式，支援 macOS（Apple 晶片）和 Windows（64 位元）；在 macOS 上也可以一併安裝 `dsh` 指令。任何裝有 Node.js 的電腦都能用 npx 執行 Web UI，或從原始碼建置。",
          code: install,
        },
        {
          title: "登入或輸入 API 金鑰",
          text: "第一次啟動時，可以在瀏覽器中用 DeepSeek 帳號登入，或在 Settings → Models（設定 → 模型）貼上從 platform.deepseek.com 取得的 API 金鑰。金鑰儲存在 `~/.dsh/.credentials.yaml`（`$DSH_HOME`）。",
        },
        {
          title: "提供專案說明",
          text: "DeepSeek Harness 會讀取專案中的 `AGENTS.md` 或 `CLAUDE.md`（以及 `.local.md` 變體），還有全域的 `~/.dsh/AGENTS.md`。為 Claude Code 或 Codex 寫好的說明可以直接沿用；請參考 [CLAUDE.md 指南](/blog/claude-md) 和 [Codex AGENTS.md 指南](/blog/codex-agents-md)。",
        },
        {
          title: "決定它能做多少事",
          text: "選擇沙箱模式（`read-only`、`workspace-write` 或 `danger-full-access`）和核准政策（`ask` 或 `never`）。DeepSeek 的安全說明指出，這個 harness 仍屬實驗性質，尚未經過安全稽核，沙箱也不保證隔離，所以在重要的程式碼上請先用唯讀模式。",
        },
        {
          title: "以無介面模式執行任務，加入外掛",
          text: "用 `dsh headless` 在腳本中執行一次性任務，用 `--resume` 或 `--session-id` 繼續先前的工作階段，用 `dsh plugin` 加入外掛，例如排程任務、子代理或代理團隊。",
          code: headless,
        },
      ],
      source: { label: "來源：DeepSeek Harness 儲存庫和文件", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek Harness 價格：執行起來要花多少錢",
      text: [
        "Harness 本身免費且開源。用量由 DeepSeek API 依下列價格計費，單位為每百萬 token 的美元價格（api-docs.deepseek.com，2026 年 11 月 6 日）。離峰價格是尖峰價格的一半；尖峰時段為平日 UTC 01:00–04:00 和 06:00–10:00，中國國定假日除外。DeepSeek 沒有公布免費額度，所以「免費使用」實際上是指軟體免費，再加上你手上已有的 API 額度。",
      ],
      headers: ["每 1M token", "deepseek-flash，尖峰", "deepseek-flash，離峰", "deepseek-v4-pro，尖峰", "deepseek-v4-pro，離峰"],
      rows: [
        ["輸入，快取命中", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["輸入，快取未命中", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["輸出", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "主要功能",
      points: [
        "一切皆外掛：工具、模型、介面和行為都是外掛；可以依 profile 安裝，也可以在聊天中直接請它幫你做一個（「Creator mode」，創作者模式）。社群外掛使用 GitHub topic `dsh-plugin`。",
        "DeepSeek 列出的官方和實驗性外掛包括代理團隊、自動核准審查、排程任務、語音輸入、終端機、代理迴圈和子代理。",
        "Skills（`SKILL.md` 資料夾）、MCP 伺服器和 hooks，還有一個實驗性的橋接，可以執行現有的 Claude Code hooks。",
        "子代理可以在同一個行程內執行，也可以由 ACP、Codex、Claude Code 或另一個 Harness 承載。",
        "可恢復的工作階段、脈絡壓縮、輸出 JSON 事件的無介面模式，以及可供二次開發的 SDK。",
        "Super-agent：獨立的 MIT bundle dsh-superagent 讓 harness 在 GitHub 儲存庫上主動工作；DeepSeek 稱之為研究原型。請參考 [DeepSeek Super-Agent 解說](/blog/deepseek-super-agent)。",
        "常和它一起被提到的論文〈A Programming Paradigm for Spatiotemporal Composability〉（arXiv，2026 年 8 月）介紹的是底層的 Cordis 框架，而不是 harness 本身。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode 比較",
      text: [
        "DeepSeek 沒有發布官方比較；下表是我們在 2026 年 11 月 6 日根據各工具自己的文件整理而成。DeepSeek 也有文件說明如何在 Claude Code、Codex 和 OpenCode 中使用它的模型，所以可以混搭使用。",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["開發者", "DeepSeek", "Anthropic", "OpenAI", "Anomaly（開源）"],
        ["授權", "MIT", "專有", "CLI 為 Apache-2.0", "MIT"],
        ["付費方式", "DeepSeek API 用量（或其他供應商）", "Claude 方案，每月 $20 起，或 API", "ChatGPT 方案（Free 以上），或 API", "你自己的 API 金鑰，或以 Copilot 或 ChatGPT 登入"],
        ["介面", "桌面（macOS、Windows）、Web UI、無介面 CLI", "終端機、IDE、桌面、網頁、行動裝置", "CLI、IDE、桌面、網頁、行動裝置", "終端機、桌面、IDE、網頁"],
        ["說明檔", "AGENTS.md 或 CLAUDE.md", "CLAUDE.md（AGENTS.md 作為備援）", "AGENTS.md", "AGENTS.md"],
        ["擴充方式", "一切皆外掛、skills、MCP、hooks", "Skills、外掛、MCP、hooks", "Skills、外掛、MCP、hooks", "外掛、MCP"],
        ["成熟度", "開發者預覽版，預計會有破壞性變更", "正式版", "正式版", "活躍的開源專案"],
      ],
    },
    {
      kind: "text",
      title: "大家常搜尋的問題",
      points: [
        "Linux：目前還沒有 Linux 桌面版下載；在 Linux 上可以用 `npx @deepseek-ai/dsh web` 執行 Web UI，或從原始碼建置。",
        "VS Code：DeepSeek 沒有推出 VS Code 擴充功能；可以在編輯器旁開著桌面版或 Web UI，或在 DeepSeek 有文件說明的編輯器代理（例如 Claude Code 或 Codex）中使用 DeepSeek 模型。",
        "Ollama 和本機模型：官方沒有文件。Harness 支援為自架伺服器設定自訂的 OpenAI 或 Anthropic 相容端點，這是使用自己模型的官方途徑。",
        "TUI：預設不附終端機介面；有文件說明的做法是自訂 profile，或使用實驗性的終端機外掛。",
        "論文：見上文的 Cordis 論文；DeepSeek 希望引用 harness 本身時寫作「DeepSeek Harness: Everything is a Plugin」。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給 DeepSeek Harness 一份工作，而不只是一個任務",
      text: [
        "Crewmark 支援 DeepSeek Harness，也支援 Claude Code、Codex 和 OpenCode。它把工作階段變成有職位、有目標、有工作時間的 AI 員工，並用心跳喚醒它，從共用看板上領取下一個任務。",
      ],
      steps: [
        {
          title: "選擇 DeepSeek Harness 作為代理",
          text: "在你的專案中執行設定指令；員工會在你電腦上的 DeepSeek Harness 工作階段中執行，費用計入你的 DeepSeek API 帳戶。",
        },
        {
          title: "給它一個職位和目標",
          text: "軟體工程師、SEO 專員、成長行銷：每個職位都有一個要推動的數字。了解[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，它每 15、30 或 60 分鐘醒來一次，領取下一個任務，需要你做決定時傳訊息給你。比較不同做法，請看[什麼是 superagent](/blog/superagent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安裝和使用 DeepSeek Harness" },
  mid: {
    title: "在用 DeepSeek Harness？把它放上看板。",
    text: "Crewmark 用職位、目標和任務看板，以心跳喚醒 DeepSeek Harness、Claude Code 或 Codex。",
    button: "開始使用",
  },
  faq: {
    title: "DeepSeek Harness 常見問題",
    items: [
      {
        q: "DeepSeek Harness 是什麼？",
        a: "DeepSeek AI 開源的代理 harness（`dsh`，MIT 授權），可處理日常事務、程式開發、研究和背景工作，以外掛為核心打造。目前是開發者預覽版。",
      },
      {
        q: "DeepSeek Harness 免費嗎？",
        a: "軟體本身免費且開源。執行時要呼叫模型 API，預設是 DeepSeek 的，依 token 計費；DeepSeek 沒有公布免費額度。",
      },
      {
        q: "如何安裝 DeepSeek Harness？",
        a: "從 deepseek.com/en/harness 下載 macOS（Apple 晶片）或 Windows 桌面應用程式，或在裝有 Node.js 的電腦上執行 `npx @deepseek-ai/dsh web`，然後開啟 http://127.0.0.1:3080。",
      },
      {
        q: "DeepSeek Harness 支援 Linux 嗎？",
        a: "沒有 Linux 桌面版下載，但 Web UI 和 CLI 可以透過 npx 或從原始碼建置在 Linux 上執行。",
      },
      {
        q: "DeepSeek Harness 和 Claude Code 哪個比較好？",
        a: "兩者適合不同的需求。DeepSeek Harness 開源，搭配 DeepSeek 模型時每 token 很便宜，還能透過外掛擴充，但仍是開發者預覽版。Claude Code 是成熟的產品，包含在 Claude 方案中。DeepSeek 的模型也可以在 Claude Code 中執行。",
      },
      {
        q: "DeepSeek Harness 能用 Claude 或 GPT 模型嗎？",
        a: "可以。它內建 Anthropic、OpenAI、Kimi 和 GLM 供應商，也支援任何相容 OpenAI 或 Anthropic 介面的端點。",
      },
      {
        q: "DeepSeek super agent 是什麼？",
        a: "也就是 dsh-superagent，DeepSeek 於 2026 年 10 月 31 日為 DeepSeek Harness 發表的研究原型 bundle，讓它在 GitHub 儲存庫上主動工作。請參考 [DeepSeek Super-Agent 解說](/blog/deepseek-super-agent)。",
      },
    ],
  },
  cta: {
    title: "把 DeepSeek Harness 變成 AI 員工。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code、Codex 和 OpenCode 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 deepseek.com、deepseek-ai/deepseek-harness 儲存庫、DeepSeek API 文件和 arXiv 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 DeepSeek、Anthropic 或 OpenAI 無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
