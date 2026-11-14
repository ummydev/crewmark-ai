import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 如何使用 DeepSeek V4：設定教學與價格",
    description:
      "Claude Code 串接 DeepSeek 教學：DeepSeek 官方提供的 deepseek-flash 與 deepseek-v4-pro 環境變數設定、模型對應、網路搜尋、API 價格，以及在 Codex 中使用 DeepSeek 的方法。",
  },
  breadcrumb: "Claude Code 搭配 DeepSeek",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · DeepSeek",
    title: "如何在 Claude Code 中使用 DeepSeek 模型",
    lead: "DeepSeek 的 API 相容 Anthropic 協定，所以只要把 Claude Code 指向 `https://api.deepseek.com/anthropic`，再填入 DeepSeek API 金鑰，就能用 DeepSeek 的模型執行 Claude Code。DeepSeek 官方列出了確切的設定：大部分工作使用 `deepseek-flash`（DeepSeek-V4.1-Flash），脈絡長度 1M 個 token；Opus 這個名稱背後對應的是 `deepseek-v4-pro`。本文說明如何在 macOS、Linux 和 Windows 上設定、Claude 模型名稱如何對應、要花多少錢，以及如何在 Codex 中做同樣的事。",
    cta: "開始使用",
    secondary: "跳到設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Claude Code 使用 DeepSeek",
      steps: [
        {
          title: "取得 DeepSeek API 金鑰",
          text: "在 platform.deepseek.com 的 API keys 頁面建立一組，並為帳戶儲值；用量依 token 計費。",
        },
        {
          title: "還沒安裝 Claude Code 的話，先安裝",
          text: "DeepSeek 的教學用 npm 安裝：需要 Node.js 18 以上版本，Windows 上還需要 Git for Windows，接著執行 `npm install -g @anthropic-ai/claude-code`，再用 `claude --version` 確認。",
        },
        {
          title: "設定環境變數（macOS 和 Linux）",
          text: "這些變數讓 Claude Code 連到 DeepSeek 的 Anthropic 相容端點，主模型和子代理都使用具備 1M 脈絡的 `deepseek-flash`，並調高 effort 等級和自動壓縮視窗。寫進 shell 設定檔就能持續生效。",
          code: env,
        },
        {
          title: "或在 Windows 上（PowerShell）",
          text: "同樣的設定，寫成 PowerShell 環境變數，對目前的工作階段生效。",
          code: windows,
        },
        {
          title: "在專案中啟動 Claude Code",
          text: "用 `cd` 進入專案目錄，執行 `claude`。其他一切，例如 CLAUDE.md、skills、hooks 和 MCP 伺服器，都照常設定。",
        },
      ],
      source: { label: "來源：DeepSeek API 文件，Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Claude 模型名稱如何對應到 DeepSeek 模型",
      text: [
        "Claude Code（或 Claude 桌面應用程式）把 Claude 模型名稱送到 DeepSeek 的端點時，DeepSeek 會依下表對應。這就是上面的設定把所有模型變數都設成 `deepseek-flash` 的原因：否則凡是要求 Opus 的呼叫，都會以 V4 Pro 的價格計費。",
      ],
      headers: ["Claude Code 送出的模型名稱", "實際使用的 DeepSeek 模型", "說明"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "以 V4 Pro 價格計費"],
        ["`claude-sonnet-*`、`claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash；支援圖片輸入"],
        ["`deepseek-flash[1m]`", "`deepseek-flash`，脈絡長度 1,048,576 個 token", "DeepSeek 建議的環境變數即如此設定"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "要花多少錢",
      text: [
        "DeepSeek API 價格，單位為每百萬 token 的美元價格，截至 2026 年 11 月 6 日。離峰價格（平日 UTC 01:00–04:00 和 06:00–10:00 以外）是尖峰價格的一半。Claude Code 的網路搜尋在 DeepSeek API 上也能使用，但每次搜尋都會額外消耗模型 token 來彙整結果，並依 DeepSeek 的 Search API 計費。",
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
      title: "在 Codex 中使用 DeepSeek",
      text: [
        "DeepSeek 也支援 Codex，透過 Responses API。它的教學提供一個設定腳本：先備份 `~/.codex/config.toml`，再寫入包含 `deepseek-flash` 和 `deepseek-v4-pro` 的 `~/.codex/models.json` 模型目錄，並新增 DeepSeek 供應商；這樣一份設定就能同時用於 Codex CLI、ChatGPT 桌面應用程式和 VS Code 擴充功能。執行前請先讀過腳本，或依照同一份教學中的手動步驟操作。腳本會關閉內建的網路搜尋，而網路搜尋只能搭配 `deepseek-v4-pro` 使用。Codex 本身的說明檔請見 [Codex AGENTS.md 指南](/blog/codex-agents-md)。",
      ],
    },
    {
      kind: "text",
      title: "Claude Code 搭配 DeepSeek 與 DeepSeek Harness 比較",
      points: [
        "Claude Code 搭配 DeepSeek：保留 Claude Code 的介面和使用習慣，包括 CLAUDE.md、skills、hooks 和外掛，依 DeepSeek 的 token 價格付費，不必訂閱 Claude 方案。",
        "DeepSeek Harness：DeepSeek 自己的開源代理應用程式，以外掛為核心，有桌面應用程式和 Web UI；也能把 Claude Code 或 Codex 當作子代理執行。請見 [DeepSeek Harness 指南](/blog/deepseek-harness)。",
        "無論選哪一個，使用的都是同樣的 `deepseek-flash` 和 `deepseek-v4-pro`，由 DeepSeek 計費。",
        "想切回 Anthropic 的模型，取消這些環境變數（或開一個沒有這些變數的新 shell），再照常登入 Claude Code 即可。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "模型便宜，就讓它整天工作",
      text: [
        "用 DeepSeek 的價格執行 Claude Code 或 DeepSeek Harness，讓代理一直忙碌也負擔得起。Crewmark 把這些工作階段變成有職位、有目標、有工作時間的 AI 員工，並用心跳喚醒每一位，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "沿用你現有的設定",
          text: "員工在你電腦上的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段中執行，使用你的環境和金鑰。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話裡醒來一次，接手下一個 issue；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "控制好帳單",
          text: "限定工作時間、一次只處理一個 issue，用量就能預期；參見[如何減少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 中使用 DeepSeek 模型" },
  mid: {
    title: "用 DeepSeek 執行 Claude Code 很便宜，那就讓它多做一點。",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code、Codex 或 DeepSeek Harness。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code 搭配 DeepSeek 常見問題",
    items: [
      {
        q: "Claude Code 可以使用 DeepSeek 模型嗎？",
        a: "可以。DeepSeek 的 API 在 `https://api.deepseek.com/anthropic` 提供 Anthropic 相容介面。依 DeepSeek 教學，把 `ANTHROPIC_BASE_URL` 設成這個網址，把 `ANTHROPIC_AUTH_TOKEN` 設成你的 DeepSeek API 金鑰即可。",
      },
      {
        q: "Claude Code 該用哪個 DeepSeek 模型？",
        a: "DeepSeek 的教學將所有角色都設為具備 1M 脈絡的 `deepseek-flash`（DeepSeek-V4.1-Flash）。要求 Opus 模型時會使用 `deepseek-v4-pro`，價格較高。",
      },
      {
        q: "Claude Code 搭配 DeepSeek 要花多少錢？",
        a: "只有 DeepSeek API 的用量費用：`deepseek-flash` 尖峰時段的輸入（快取未命中）每百萬 token $0.30，輸出每百萬 token $1.20，離峰減半，快取命中的輸入更便宜許多。",
      },
      {
        q: "Claude Code 搭配 DeepSeek 可以網路搜尋嗎？",
        a: "可以。DeepSeek 支援 Claude Code 的網路搜尋工具；每次搜尋都會額外消耗模型 token 來彙整結果，並依 DeepSeek 的 Search API 計費。",
      },
      {
        q: "需要訂閱 Claude 嗎？",
        a: "不需要。設定這些變數後，Claude Code 會把請求送到 DeepSeek，費用記在你的 DeepSeek 帳戶，而不是 Claude 方案。",
      },
      {
        q: "Codex 也能使用 DeepSeek 嗎？",
        a: "可以。DeepSeek 有文件說明如何透過 Responses API 設定 Codex，可以用腳本，也可以手動修改 `~/.codex/config.toml` 和 `~/.codex/models.json`。",
      },
      {
        q: "該用 Claude Code 搭配 DeepSeek，還是 DeepSeek Harness？",
        a: "如果你喜歡 Claude Code 的工具和工作流程，就保留它，只換模型。如果你想要 DeepSeek 自己以外掛為核心、具備桌面介面的應用程式，就試試 DeepSeek Harness。",
      },
    ],
  },
  cta: {
    title: "讓你的 DeepSeek 代理按時上班。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 DeepSeek API 文件（Claude Code 與 Codex 串接、價格）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 DeepSeek、Anthropic 或 OpenAI 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標；Codex 是 OpenAI 的商標。",
};
