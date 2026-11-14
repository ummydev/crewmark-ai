import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex AGENTS.md 指南：放在哪裡、載入順序、範例與最佳做法",
    description:
      "Codex 如何讀取 AGENTS.md：全域 ~/.codex 檔案、專案與巢狀檔案、AGENTS.override.md、載入順序與 32 KiB 上限、備用檔名、程式碼審查規則，以及可直接複製的範例。",
  },
  breadcrumb: "Codex AGENTS.md 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Codex",
    title: "Codex AGENTS.md：放在哪裡、依什麼順序載入、該寫什麼",
    lead: "AGENTS.md 是 OpenAI 的 Codex 在動手之前讀取的指令檔：建置和測試指令、慣例和規則，都用一般的 Markdown 撰寫。Codex 會把 `~/.codex` 裡的全域檔案和儲存庫裡的檔案合併起來，從根目錄一路讀到你所在的資料夾。本文說明每個位置、確切的載入順序和大小上限、覆寫檔、備用檔名、程式碼審查規則，以及可以直接複製的範例。",
    cta: "開始使用",
    secondary: "跳到設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Codex 在哪裡尋找 AGENTS.md，依載入順序",
      text: [
        "Codex 在啟動時建立一次指令鏈（在終端機介面中，每個工作階段一次）。檔案依這張表由上而下串接，所以離工作目錄越近的指令越後面，優先權越高。",
      ],
      headers: ["順序", "位置", "Codex 讀取什麼"],
      rows: [
        ["1. 全域", "`~/.codex/`（或 `$CODEX_HOME`）", "有 `AGENTS.override.md` 就讀它，否則讀 `AGENTS.md`；只讀第一個非空的檔案"],
        ["2. 專案根目錄", "通常是 Git 根目錄", "`AGENTS.override.md`，沒有就讀 `AGENTS.md`，再沒有就讀備用檔名；最多一個檔案"],
        ["3. 逐層往下的每個資料夾", "從根目錄到你啟動 Codex 的位置之間的每個目錄", "每個目錄做同樣的檢查，各讀一個檔案"],
        ["停止", "你的目前目錄", "它底下的資料夾不會讀取"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何為 Codex 設定 AGENTS.md",
      steps: [
        {
          title: "建立全域預設",
          text: "執行 `mkdir -p ~/.codex`，在 `~/.codex/AGENTS.md` 裡寫下你希望在每個儲存庫都生效的偏好。請 Codex 摘要它的指令，確認已經載入。",
          code: global,
        },
        {
          title: "加入專案檔案，團隊規則不同的地方用覆寫檔",
          text: "在儲存庫根目錄放一個 `AGENTS.md`，寫共用的設定。在規則不同的資料夾裡加入 `AGENTS.override.md`：它會取代該資料夾的 `AGENTS.md`，Codex 之後就不再讀那個檔案。",
          code: project,
        },
        {
          title: "確認載入了哪些檔案",
          text: "在你關心的資料夾裡啟動 Codex，例如 `codex --cd services/payments`，請它列出已載入的指令來源。它應該依序列出全域檔案、根目錄檔案和該資料夾的檔案。",
        },
        {
          title: "沿用現有檔名，或提高上限",
          text: "如果儲存庫已經把指令寫在別的檔案裡，把它加到 `~/.codex/config.toml` 的 `project_doc_fallback_filenames` 中。合併後的大小達到 `project_doc_max_bytes`（預設 32 KiB）時，Codex 就不再加入檔案。",
          code: config,
        },
        {
          title: "為 Codex 程式碼審查加入規則",
          text: "要讓 GitHub 上的 `@codex review` 套用規則，就在離相關程式碼最近的 AGENTS.md 裡加一個 `## Code Review Rules` 區段。寫明要指出什麼問題以及安全的替代做法；格式和 lint 交給 CI。",
          code: review,
        },
      ],
      source: { label: "來源：Codex 文件，Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "AGENTS.md 最佳做法",
      points: [
        "只寫 Codex 自己弄不清楚的：準確的建置、測試和 lint 指令（包括如何只跑一個測試）、程式碼庫裡的坑，以及沒有寫在任何地方的決定。",
        "把最具體的規則放在離程式碼最近的地方：`services/payments/` 裡的巢狀 AGENTS.md，勝過根目錄長檔案裡的一節付款說明。",
        "注意 32 KiB 的預算：檔案從根目錄往下依序加入，超出的部分會被截掉，所以把長檔案拆成巢狀檔案，或提高 `project_doc_max_bytes`。",
        "暫時的調整用 `AGENTS.override.md`，全域或單一資料夾都可以，刪掉它就恢復原狀。",
        "空的 AGENTS.md 會被略過，該目錄會繼續尋找下一個檔名。",
        "為自動化使用者另外設定 `CODEX_HOME`，這樣他們的全域指令不會和你的混在一起。",
      ],
    },
    {
      kind: "table",
      title: "Codex 與 Claude Code 等工具中的 AGENTS.md 比較",
      text: [
        "AGENTS.md 是許多代理都會讀取的開放格式，所以最適合放你想共用的指令。Claude Code 有自己的檔案 CLAUDE.md，詳見 [CLAUDE.md 指南](/blog/claude-md)。",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["主要檔案", "`AGENTS.md`", "`CLAUDE.md`；只在沒有 CLAUDE.md 時才讀 `AGENTS.md`"],
        ["個人或暫時檔案", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["全域檔案", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["巢狀資料夾", "從根目錄到目前目錄", "啟動時讀父目錄；子資料夾在 Claude 進入工作時讀取"],
        ["大小上限", "預設合計 32 KiB", "依單一檔案限制；建議控制在 200 行以內"],
        ["共用一個檔案", "原生支援", "在 CLAUDE.md 開頭寫 `@AGENTS.md`"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "AGENTS.md 告訴 Codex 怎麼做，Crewmark 告訴它下一步做什麼。",
      text: [
        "好的 AGENTS.md 能讓每個 Codex 工作階段一開始就掌握狀況，但工作階段仍然要等你的提示。Crewmark 把 Codex、Claude Code、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "把 AGENTS.md 留在儲存庫裡",
          text: "員工的 Codex 工作階段會像你的一樣讀取它，慣例和測試指令都會一併帶上。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次；參見[如何讓 Codex 主動工作](/proactive-codex)。",
        },
        {
          title: "在一個看板上混用代理",
          text: "一份 AGENTS.md 可以同時服務 Codex 和 Claude Code 員工；兩者的比較請見 [Claude Code 與 Codex 比較](/blog/claude-code-vs-codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "為 Codex 設定 AGENTS.md" },
  mid: {
    title: "Codex 知道你的規則了，誰來給它下一個任務？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Codex，使用的就是你已經在付費的 ChatGPT 方案。",
    button: "開始使用",
  },
  faq: {
    title: "Codex AGENTS.md 常見問題",
    items: [
      {
        q: "Codex 裡的 AGENTS.md 是什麼？",
        a: "一份 Markdown 指令檔，Codex 在開始任何工作之前讀取，內容是專案的指令、慣例和規則。Codex 會把全域檔案和儲存庫裡的檔案合併起來。",
      },
      {
        q: "Codex 在哪裡尋找 AGENTS.md？",
        a: "先在 `~/.codex`（或 `$CODEX_HOME`）裡找，然後在從專案根目錄到你啟動 Codex 的資料夾之間的每個目錄裡找，每個目錄最多讀一個檔案。",
      },
      {
        q: "AGENTS.md 檔案依什麼順序載入？",
        a: "先全域，再專案根目錄，然後逐層往下到目前目錄的每個巢狀資料夾。它們依這個順序串接，所以最近的檔案排在最後，優先權最高。",
      },
      {
        q: "AGENTS.override.md 是什麼？",
        a: "Codex 在同一目錄裡用來取代 AGENTS.md 的檔案，可以放在全域或某個資料夾。用它來寫暫時或特定團隊的規則，不必修改共用檔案。",
      },
      {
        q: "AGENTS.md 有大小限制嗎？",
        a: "有：合併後的大小達到 `project_doc_max_bytes`（預設 32 KiB）時，Codex 就不再加入檔案。可以在 `~/.codex/config.toml` 裡調高，或把指令拆到巢狀檔案裡。",
      },
      {
        q: "Codex 和 Claude Code 能共用一個檔案嗎？",
        a: "可以。把共用的指令放在 AGENTS.md 裡，在 CLAUDE.md 開頭加上 `@AGENTS.md`，下面再寫只給 Claude 的備註。",
      },
      {
        q: "Codex 程式碼審查會讀取 AGENTS.md 嗎？",
        a: "會。在離程式碼最近的 AGENTS.md 裡加一個 `## Code Review Rules` 區段，GitHub 上的 `@codex review` 就會套用它。",
      },
    ],
  },
  cta: {
    title: "給已經掌握狀況的 Codex 一份工作。",
    text: "Crewmark 把 Codex、Claude Code 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 OpenAI 的 Codex 文件（Custom instructions with AGENTS.md）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI 和 Anthropic 無關，也未獲其背書。Codex 是 OpenAI 的商標，Claude 和 Claude Code 是 Anthropic 的商標。",
};
