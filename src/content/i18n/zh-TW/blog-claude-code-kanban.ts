import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 看板：內建任務清單與看板工具推薦 | Crewmark AI",
    description:
      "Claude Code 有任務清單（Ctrl+T），但沒有看板。本文說明任務清單怎麼用、如何把它放上看板，以及適合 Claude Code 工作階段的看板工具：claude-code-kanban、Kanban Code、Claudine、Vibe Kanban 和 Crewmark。",
  },
  breadcrumb: "Claude Code 看板",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code 看板：從任務清單到真正的看板",
    lead: "Claude Code 本身沒有看板，只有一份任務清單：Claude 在處理多步驟工作時替自己列的待辦清單，分成待處理、進行中、已完成三種狀態，按 Ctrl+T 顯示或隱藏。所謂「Claude Code 看板」，其實是建立在它之上的兩類工具：一類把這份任務清單搬到瀏覽器中的看板上，另一類讓每張卡片對應一整個 Claude Code 工作階段或一個 issue。本文介紹內建的任務清單、如何設定看板，以及這兩類工具各有哪些選擇。",
    cta: "開始使用",
    secondary: "設定看板",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code 內建了什麼：任務清單",
      text: [
        "任務清單是 Claude 為手上工作列的清單。它不是背景任務檢視：`/tasks` 顯示的是正在執行的 shell 和子代理。",
      ],
      points: [
        "按 `Ctrl+T` 顯示或隱藏，一次最多顯示五個任務。",
        "內容壓縮後任務依然保留，所以在長時間的工作中 Claude 不會弄丟計畫。",
        "可以直接請 Claude「show me all tasks」（顯示所有任務）或「clear all tasks」（清除所有任務）。",
        "設定 `CLAUDE_CODE_TASK_LIST_ID` 就能讓多個工作階段共用一份清單，它儲存在 `~/.claude/tasks/` 底下的同名目錄中。",
        "Opus 4.7、Sonnet 4.6、Haiku 4.5 及更早的模型預設啟用任務工具；換成其他模型時，除非設定 `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`，否則清單會一直是空的。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何把 Claude Code 的任務放上看板",
      text: [
        "這裡使用 claude-code-kanban：一個開源看板，會監看 Claude Code 寫入的任務檔案，並在瀏覽器中顯示出來。",
      ],
      steps: [
        {
          title: "確認任務工具已啟用",
          text: "如果按 `Ctrl+T` 從來沒看到清單，代表你的模型預設沒有任務工具。在設定中加上這個環境變數，然後重新啟動 Claude Code。",
          code: setup,
        },
        {
          title: "安裝看板和 hooks",
          text: "`claude-code-kanban --install` 會加入一個帶有 hooks 的 Claude Code 外掛。沒有 hooks 的話，看板只會顯示任務，看不到即時動態，也收不到等待你回覆的提示。",
        },
        {
          title: "開啟看板，照常工作",
          text: "Claude 工作時，卡片會依序經過 Pending、In Progress 和 Completed，你也可以直接在看板上回覆 Claude 的提問。它只監聽 127.0.0.1，沒有登入機制，所以請只在自己的電腦上使用。",
        },
        {
          title: "多個工作階段共用一個看板",
          text: "每個工作階段都用同一個任務清單 ID 啟動，多個 Claude Code 工作階段就會讀寫同一份清單。",
          code: shared,
        },
      ],
      source: { label: "來源：Claude Code 文件，Interactive mode（Task list）", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Claude Code 看板工具比較",
      text: ["資訊來自各專案的 README 或發布頁面，截至 2026 年 11 月 7 日。"],
      headers: ["工具", "一張卡片是什麼", "在哪裡執行", "支援的代理", "授權"],
      rows: [
        ["claude-code-kanban", "Claude 任務清單中的一個任務", "瀏覽器，在你自己的電腦上", "Claude Code", "MIT"],
        ["Kanban Code", "一個 Claude Code 工作階段，各有自己的 worktree；欄位為 Backlog、In Progress、Waiting、In Review、Done", "macOS 26 應用程式；Windows 應用程式", "Claude Code", "Apache 2.0"],
        ["Claudine", "一段 Claude Code 或 Codex 對話，自動偵測狀態、分支和錯誤", "VS Code 擴充功能", "Claude Code、Codex", "MIT"],
        ["Vibe Kanban", "一個 issue，為它開一個 workspace；公司已關閉，應用程式仍可在本機執行", "`npx vibe-kanban`", "Claude Code、Codex 等眾多代理", "Apache 2.0"],
        ["Crewmark", "一個 issue，由 AI 員工依心跳自己接手", "託管的網頁版看板，與團隊共用", "Claude Code、Codex、DeepSeek Harness、OpenCode", "商業產品"],
      ],
    },
    {
      kind: "text",
      title: "你需要哪一種看板",
      points: [
        "你只想看清楚一個工作階段的計畫：Claude Code 內建的任務清單（`Ctrl+T`）可能就夠了；想在瀏覽器中看得更清楚，再加上 claude-code-kanban。",
        "你同時執行好幾個工作階段，總是搞不清楚哪個在等你：用 Kanban Code 或 Claudine 這類工作階段看板，哪個在工作、哪個在等待、哪個可以審查，一目了然。另請參考[同時執行多個 Claude Code 代理](/blog/multiple-claude-code-agents)和 [worktree 指南](/blog/claude-code-worktree)。",
        "你原本用的是 Vibe Kanban：請見 [Vibe Kanban 替代方案](/blog/vibe-kanban-alternatives)。",
        "你希望由看板驅動工作，代理不用等你就自己接下一張卡：這正是 Crewmark 的用途（見下文）。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "讓 Claude Code 自己接下一張卡的看板",
      text: [
        "上面這些工具都只是讓你看到 Claude 在做什麼，每個工作階段仍要你啟動，每張卡片仍要你移動。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名有職位、目標和工作時間的 AI 員工：依心跳醒來，從共用看板接下一個 issue，邊做邊留言，需要你做決定時傳訊息給你。",
      ],
      steps: [
        {
          title: "連接你的專案和代理",
          text: "在儲存庫中執行設定指令。員工在自己的工作階段和簽出目錄中工作，用的就是你已經在付費的訂閱。",
        },
        {
          title: "把看板填滿",
          text: "像交代給同事一樣寫 issue，可以指派給某名員工，也可以先不指派，留給有空的人接手。",
        },
        {
          title: "從啟動者變成審查者",
          text: "在工作時間內，員工每 15、30 或 60 分鐘接下一張卡。了解[如何讓 Claude Code 主動工作](/proactive-claude-code)和[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Claude Code 的任務放上看板" },
  mid: {
    title: "別再自己移動卡片了。",
    text: "Crewmark 的看板把 issue 指派給 Claude Code 和 Codex 員工，它們依心跳醒來，自己接下一個。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code 看板常見問題",
    items: [
      {
        q: "Claude Code 有看板嗎？",
        a: "沒有。它有一份任務清單，分成待處理、進行中、已完成三種狀態，按 Ctrl+T 顯示或隱藏。Claude Code 的看板都是第三方工具，建立在它的任務檔案或工作階段檔案之上。",
      },
      {
        q: "如何查看 Claude Code 的任務清單？",
        a: "在工作階段中按 Ctrl+T，最多顯示五個任務；想看完整清單，就請 Claude「show me all tasks」。正在執行的 shell 和子代理則用 /tasks 查看。",
      },
      {
        q: "為什麼我的 Claude Code 任務清單是空的？",
        a: "可能是 Claude 還沒規劃任何多步驟工作，或是你的模型預設沒有任務工具。在環境變數或設定中加上 CLAUDE_CODE_ENABLE_TODO_TOOLS=1，然後重新啟動。",
      },
      {
        q: "多個 Claude Code 工作階段可以共用一份任務清單嗎？",
        a: "可以。每個工作階段都用同一個 CLAUDE_CODE_TASK_LIST_ID 啟動，例如 CLAUDE_CODE_TASK_LIST_ID=my-project claude；清單儲存在 ~/.claude/tasks/ 底下。",
      },
      {
        q: "有 Claude Code 看板外掛嗎？",
        a: "claude-code-kanban 會安裝一個帶有 hooks 的 Claude Code 外掛，為它的瀏覽器看板提供資料。Claudine 是 VS Code 擴充功能，Kanban Code 則是桌面應用程式。",
      },
      {
        q: "有同時支援 Claude Code 和 Codex 的看板嗎？",
        a: "Claudine 能讀取 Claude Code 和 Codex 的對話。Vibe Kanban 支援許多代理，但背後的公司已經關閉。Crewmark 的看板可以把 issue 指派給 Claude Code、Codex、DeepSeek Harness 和 OpenCode 員工。",
      },
    ],
  },
  cta: {
    title: "把你的 Claude Code 看板，變成一支替你工作的團隊。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 Claude Code 文件（Interactive mode）以及各工具的 README 或發布頁面查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 及文中提到的各專案無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
