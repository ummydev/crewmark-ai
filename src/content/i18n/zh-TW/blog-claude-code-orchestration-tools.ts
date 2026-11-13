import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 Claude Code 編排工具：內建功能與 10 款應用比較 | Crewmark",
    description:
      "同時執行多個 Claude Code 代理：內建功能（Subagents、Agent view、Agent teams、工作流程）與 10 款編排工具比較，從 Claude Squad、Orca 到 Paperclip、Multica 和 Crewmark。",
  },
  breadcrumb: "Claude Code 編排工具",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "2026 年最佳 Claude Code 編排工具",
    lead: "Claude Code 編排，就是同時執行多個 Claude Code 代理並協調它們：給每個代理一份獨立的程式碼副本、一項任務，以及回報結果的管道。如今 Claude Code 本身就能做到其中很多，還有一大波開源與商業工具在它之上加了介面、看板和排程。本文先介紹內建功能，再從介面、隔離方式、支援的代理，以及最關鍵的問題來比較十款工具：代理會自己開工，還是等你下指令？",
    cta: "申請搶先體驗",
    secondary: "直接看比較",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Claude Code 內建：平行執行代理的五種方式",
      text: [
        "安裝任何東西之前，先確認 Claude Code 本身是否已經夠用。所有內建方式裡，負責做事的都是 Claude 工作階段；worktree 讓每個工作階段擁有自己的簽出目錄（見 [worktree 指南](/blog/claude-code-worktree)）。",
      ],
      headers: ["方式", "能做什麼", "狀態"],
      rows: [
        ["Subagents（子代理）", "單一工作階段內的 worker，在自己的脈絡裡完成支線任務並回傳摘要", "已推出"],
        ["Agent view（`claude agents`）", "在一個畫面裡派發和監看背景工作階段，某個工作階段需要你時可隨時介入", "研究預覽"],
        ["Agent teams（代理團隊）", "多個工作階段共用任務清單並互相傳訊，由一個 lead 統籌", "實驗性，預設關閉"],
        ["Dynamic workflows（動態工作流程）", "以腳本執行大量 subagent，並交叉核對它們的結果", "已推出"],
        ["Projects（專案）", "一個持續進行的對話，可在雲端或你的電腦上開啟平行討論串", "Pro、Max 和 Ultra 公開測試"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 編排工具比較",
      text: [
        "Star 數與授權取自 2026 年 11 月 6 日的 GitHub。「會自己開工」指工具能透過看板、排程或心跳，替代理派發下一項任務，不需要你輸入提示詞。",
      ],
      headers: ["工具", "介面", "隔離方式", "支援的代理", "會自己開工", "授權、Star 數"],
      rows: [
        ["Claude Squad", "終端機介面（`cs`）", "每個代理一個 tmux 工作階段和 git worktree", "Claude Code、Codex、Gemini、Aider 等", "否", "AGPL-3.0，~9k"],
        ["Orca", "桌面版、CLI、行動版、遠端執行環境", "每個代理一個 worktree", "Claude Code、Codex 等，使用你自己的訂閱", "否；可由一個編排代理拆分工作", "MIT，~117k"],
        ["Ruflo（原 Claude Flow）", "Claude Code 外掛、CLI 和 MCP 伺服器", "未說明", "Claude Code、Codex、MCP 用戶端", "否；由提示詞或任務驅動的 swarm", "MIT，~81k"],
        ["oh-my-claudecode", "Claude Code 外掛（`/autopilot`）", "未說明", "Claude Code", "否；autopilot 要你啟動後才會執行", "MIT，~41k"],
        ["Vibe Kanban", "附看板的 Web 介面", "每項任務一個 workspace 和分支", "10 種以上，包括 Claude Code、Codex、Gemini CLI", "否；每個 issue 由你啟動一個 workspace。正逐步停止維護，改由社群維護", "Apache-2.0，~29k"],
        ["opcode（原 Claudia）", "桌面 GUI", "背景代理在獨立程序中執行", "Claude Code", "否", "AGPL-3.0，~22k"],
        ["CloudCLI（Claude Code UI）", "Web 與行動版介面", "可選用 Docker 沙箱", "Claude Code、Codex、Cursor CLI、OpenCode", "否", "AGPL-3.0，~15k"],
        ["Conductor", "Mac 應用程式", "每項任務一個 workspace 和分支", "Claude Code、Codex、Cursor、OpenCode", "否。團隊加入 Meta；雲端服務將於 2026 年 11 月 20 日關閉", "閉源"],
        ["Paperclip", "Web 介面：一家有組織圖、目標和預算的「AI 公司」", "可選用 worktree 和沙箱", "Claude Code、Codex、Gemini CLI、Cursor、OpenCode 等", "是：排程心跳，以及指派和 @ 提及", "MIT，~111k"],
        ["Multica", "Web、桌面版、CLI 和 API", "在你電腦上執行的常駐程式（daemon）", "Claude Code、Codex、Cursor、Copilot、OpenCode 等", "是：代理會接手指派給它的 issue；Autopilots 依 cron 執行", "Multica License（原始碼公開），~55k"],
        ["Crewmark", "Web 看板、CLI 和在你電腦上執行的常駐程式", "每名員工有自己的工作階段和簽出目錄", "Claude Code、Codex、DeepSeek Harness、OpenCode", "是：工作時間內由心跳接下一個 issue", "搶先體驗"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何選擇 Claude Code 編排工具",
      steps: [
        {
          title: "先試內建功能",
          text: "如果只是自己派發幾個平行任務，`claude --worktree` 加上 Agent view 可能就夠了。如果是一個大型變更，用 `/batch` 或一個工作流程把它拆給多個 subagent。",
        },
        {
          title: "選一個你真的會去看的介面",
          text: "習慣終端機的人通常偏好 Claude Squad；其他人想要桌面應用程式（Orca、opcode）或 Web 看板（Vibe Kanban、Paperclip、Multica、Crewmark），後者在手機上也能用。",
        },
        {
          title: "決定由誰啟動下一項任務",
          text: "大多數工具只是讓你驅動的代理跑得更快。如果你希望代理在兩次提示之間繼續工作，就找看板加上排程或心跳的組合：Paperclip、Multica 和 Crewmark 都做得到。",
        },
        {
          title: "檢查隔離方式和支援的代理",
          text: "平行代理需要彼此獨立的簽出目錄，通常是 git worktree。如果你的團隊混用 Claude Code、Codex 或 OpenCode，請確認工具能用你現有的訂閱執行這些代理。",
        },
        {
          title: "檢查專案的健康狀況",
          text: "看授權、最近的提交和專案狀態：Vibe Kanban 背後的公司正逐步收掉它，Conductor 將轉往 Meta，Crystal 已被一個新應用程式取代。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "各工具簡介",
      points: [
        "Claude Squad（[smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)）：一個終端機應用程式，替每個代理配置獨立的 tmux 工作階段和 git worktree；`--autoyes` 會自動接受提示（實驗性）。",
        "Orca（[stablyai/orca](https://github.com/stablyai/orca)）：用你自己的訂閱，在桌面、行動裝置或遠端機器上執行一整隊程式設計代理。",
        "Ruflo（[ruvnet/ruflo](https://github.com/ruvnet/ruflo)）：給 Claude Code 和 Codex 用的代理元框架（meta-harness），支援 swarm 和跨工作階段記憶；`ruvnet/claude-flow` 現在會重新導向到這裡。",
        "oh-my-claudecode（[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)）：一個外掛，在 Claude Code 裡提供分階段的規劃、建置和 QA 工作流程。",
        "Vibe Kanban（[BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)）：在看板上規劃 issue，並為每個 issue 啟動一個代理 workspace；它的 README 寫明專案正逐步停止維護。",
        "opcode（[winfunc/opcode](https://github.com/winfunc/opcode)）：Claude Code 的桌面 GUI，提供自訂代理、工作階段紀錄、用量分析和檢查點。",
        "CloudCLI（[siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)）：管理工作階段的 Web 與行動版介面，附 shell、檔案和 git；付費雲端版另外提供託管容器。",
        "Conductor（[conductor.build](https://www.conductor.build)）：關閉日期以及如何轉移你的工作，請見 [Conductor 替代方案](/blog/conductor-alternatives)。",
        "Paperclip（[paperclipai/paperclip](https://github.com/paperclipai/paperclip)）和 Multica（[multica-ai/multica](https://github.com/multica-ai/multica)）：最接近 AI 員工的兩款；請見我們與 [Paperclip](/alternatives/paperclip) 和 [Multica](/alternatives/multica) 的比較。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "你停下打字後，編排依然繼續",
      text: [
        "Crewmark 把每個 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名有職務、目標和工作時間的 AI 員工，並用心跳喚醒它，從共用看板上接下一個 issue。",
      ],
      steps: [
        {
          title: "一份工作一名員工",
          text: "工程師、審查者、SEO 寫手：每名員工都有自己的工作階段、簽出目錄，以及寫成數字的目標。請見[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "用看板取代一格格終端機",
          text: "指派 issue；每名員工邊做邊留言，需要你拍板時會傳訊息給你。",
        },
        {
          title: "用心跳取代你的下一條提示詞",
          text: "工作時間內，每名員工每 15、30 或 60 分鐘在同一個對話裡醒來一次；請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "選擇 Claude Code 編排工具" },
  mid: {
    title: "開著五個代理，卻還在逐條輸入提示詞？",
    text: "Crewmark 給每個 Claude Code 工作階段一個職務、一個目標和一個心跳，讓它不用等你也能接下一個 issue。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude Code 編排常見問題",
    items: [
      {
        q: "什麼是 Claude Code 編排？",
        a: "同時執行多個 Claude Code 代理並協調它們：各自獨立的簽出目錄、各自的任務，以及查看每個代理在做什麼、合併成果的方式。",
      },
      {
        q: "Claude Code 本身能編排代理嗎？",
        a: "可以。Subagents、Agent view、Agent teams（實驗性）、Dynamic workflows 和 Projects 都是內建功能，`--worktree` 還能隔離你自己執行的工作階段。",
      },
      {
        q: "最好的 Claude Code 編排工具是哪一個？",
        a: "終端機工作流程選 Claude Squad；用桌面管理一整隊代理選 Orca；在 Claude Code 裡跑 swarm 選 Ruflo；想讓代理依排程從看板持續接工作，選 Paperclip、Multica 或 Crewmark。",
      },
      {
        q: "有管理 Claude Code 代理的圖形介面嗎？",
        a: "有：Orca 和 opcode 是桌面應用程式，Vibe Kanban、CloudCLI、Paperclip 和 Multica 有 Web 介面，Claude Code 自己的桌面應用程式也能用 Worktree 開關執行平行工作階段。",
      },
      {
        q: "哪些工具能讓代理不等提示詞就開工？",
        a: "在本文比較的工具中，有 Paperclip（排程心跳）、Multica（指派的 issue 和依 cron 執行的 Autopilots）和 Crewmark（工作時間內的心跳）。其餘工具執行的都是你啟動的代理。",
      },
      {
        q: "這些工具免費嗎？",
        a: "大多數是開源的，可免費自行架設：Orca、Ruflo、oh-my-claudecode 和 Paperclip 採 MIT，Claude Squad、opcode 和 CloudCLI 採 AGPL-3.0，Vibe Kanban 採 Apache-2.0。Multica 使用自家的原始碼公開授權；Conductor 是閉源的。",
      },
      {
        q: "不用 Conductor 的話該用什麼？",
        a: "請見 [Conductor 替代方案](/blog/conductor-alternatives)：Claude Code 自帶的 `--worktree` 和桌面應用程式涵蓋了核心功能，上面這些工具則補上看板、代理隊伍或排程。",
      },
    ],
  },
  cta: {
    title: "讓你的 Claude Code 代理自己接下一項任務。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職務、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件、各專案的 README 或官網，以及 GitHub API 查核。",
  disclaimer:
    "Crewmark 是參與比較的工具之一。產品名稱為其所有者的商標；沒有任何專案審閱或背書本頁。",
};
