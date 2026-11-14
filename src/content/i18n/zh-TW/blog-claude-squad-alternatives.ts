import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Squad 替代方案與 Conductor 比較 | Crewmark AI",
    description:
      "Claude Squad 能做什麼、限制在哪裡（只能用 tmux、不支援 Windows、每個任務都要你啟動），以及同時執行多個 Claude Code 或 Codex 代理的替代方案：Claude Code 內建的 worktree、Paradev、Kanban Code、Conductor 和 Crewmark。",
  },
  breadcrumb: "Claude Squad 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 程式設計代理",
    title: "Claude Squad 替代方案：同時執行多個程式設計代理的其他選擇",
    lead: "Claude Squad 是一款開源終端機應用程式（AGPL-3.0），可以並排執行多個程式設計代理：每個任務都有自己的 tmux 工作階段和 git worktree，推送前你可以先審查變更。如果你習慣待在終端機、使用 macOS 或 Linux，它很好用。大家會找替代方案，通常是想要圖形介面、需要 Windows，或希望代理自己接手工作，不必一個個手動啟動。本文比較各個選項，也包括 Claude Squad 與 Conductor 的比較。",
    cta: "開始使用",
    secondary: "比較替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Squad 擅長什麼，又在哪裡停下",
      text: [
        "Claude Squad 最新版本是 2026 年 8 月 20 日發布的 v1.0.20，專案仍持續維護。它預設執行 Claude Code，用 `-p` 也能執行其他終端機代理，例如 Codex 或 Aider。",
      ],
      points: [
        "優點：每個任務一個 tmux 工作階段、一個 git worktree，代理之間不會改到同一批檔案。",
        "優點：推送前可以檢視每個執行個體的 diff，並切換到它的分支。",
        "優點：實驗性的 `-y`（auto-yes）模式會自動接受提示，讓任務在背景跑完。",
        "限制：需要 tmux 和 GitHub CLI；README 沒有提到 Windows，在 Windows 上使用 tmux 就得透過 WSL。",
        "限制：它是終端機介面。沒有看板、沒有團隊共享的檢視，每個任務都要你自己啟動。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何平行執行多個代理（有沒有 Claude Squad 都可以）",
      steps: [
        {
          title: "給每個任務一個獨立的 worktree",
          text: "這是 Claude Squad 的核心，而 Claude Code 現在自己就做得到：`claude --worktree <name>` 會在獨立的分支和檢出目錄中啟動一個工作階段。請參閱 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
          code: usage,
        },
        {
          title: "選一種盯著它們的方式",
          text: "終端機清單（Claude Squad）、桌面應用程式（Paradev，以及尚未停止服務的 Conductor），或工作階段看板（Kanban Code）。請參閱 [Claude Code 看板](/blog/claude-code-kanban)。",
        },
        {
          title: "決定由誰啟動下一個任務",
          text: "上面這些工具都要你啟動每個工作階段。如果希望代理自己接下一個 issue，就幫它們排個時程或加上心跳，請參閱[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "合併前先審查",
          text: "不管用什麼執行代理，合併這一步都要留給人：逐一閱讀 diff、跑過檢查，再合併。",
        },
      ],
      source: { label: "來源：Claude Squad 的 README", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Claude Squad 替代方案比較",
      text: ["資訊來自各專案的官網或儲存庫，查證於 2026 年 11 月。"],
      headers: ["", "介面", "支援的代理", "平台", "誰來啟動任務", "授權"],
      rows: [
        ["Claude Squad", "終端機介面（tmux）", "Claude Code、Codex、Gemini、Aider", "需要 tmux 和 gh；Windows 需透過 WSL", "你", "AGPL-3.0"],
        ["Claude Code 本身", "`claude --worktree`，桌面應用程式中的平行工作階段", "Claude Code", "macOS、Windows、Linux", "你（或排程）", "商業產品（Anthropic）"],
        ["Paradev（原 Superset）", "桌面應用程式，每個任務一個 worktree；支援自動化", "Claude、Codex、Cursor Agent、OpenCode 及任何 CLI 代理", "macOS；Linux 為實驗性質；尚不支援 Windows", "你，或自動化流程", "MIT"],
        ["Kanban Code", "Claude Code 工作階段的看板", "Claude Code", "macOS 26 應用程式、Windows 應用程式", "你", "Apache 2.0"],
        ["Conductor", "平行執行代理的 Mac 應用程式；正在加入 Meta，雲端於 2026 年 11 月 20 日關閉", "Claude Code、Codex、Cursor、OpenCode", "macOS", "你", "商業產品"],
        ["Crewmark", "託管看板，AI 員工按心跳醒來工作", "Claude Code、Codex、DeepSeek Harness、OpenCode", "網頁版看板；常駐程式支援 macOS、Windows、Linux", "員工自己接下一個 issue", "商業產品"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad 與 Conductor 比較",
      text: [
        "兩者都能在平行的 worktree 中執行多個代理。Claude Squad 是免費、開源的終端機應用程式；Conductor 是一款精緻的 Mac 應用程式，有審查流程和雲端 workspace。Conductor 已[加入 Meta](/blog/conductor-alternatives)：停止開放新註冊，雲端服務於 2026 年 11 月 20 日關閉，本機應用程式也只更新到 2027 年初。如果今天要在兩者之間選擇，仍在持續開發的是 Claude Squad。",
      ],
    },
    {
      kind: "text",
      title: "哪個 Claude Squad 替代方案適合你",
      points: [
        "你只用 Claude Code：先試試它內建的 `--worktree` 參數和桌面應用程式的平行工作階段，再考慮要不要加工具。",
        "你想在 Mac 上用一個桌面應用程式管理多個代理：選 Paradev。",
        "你想把工作階段看成一張張卡片：選 Kanban Code，或閱讀 [Claude Code 看板](/blog/claude-code-kanban)。",
        "你用的是 Windows：Claude Code 的 CLI 和桌面應用程式都原生支援；Claude Squad 則需要 WSL。",
        "你希望代理不必你逐一啟動就能持續工作，還要一個團隊共享的看板：選 Crewmark（見下文）。另請參閱[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "從你親自指揮的小隊，到自己工作的團隊",
      text: [
        "Claude Squad 讓平行執行代理變得很容易，但每一個都要等你啟動。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名 AI 員工，有職務、有目標、有工作時間。它按心跳醒來，從共享看板上接下一個 issue，在自己的檢出目錄中工作，需要你做決定時就傳訊息給你，用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "連接你的儲存庫和代理",
          text: "在專案中執行設定指令。多名員工可以共用一個儲存庫，各自在獨立的檢出目錄中工作。",
        },
        {
          title: "給每名員工一個職務",
          text: "工程師、審查員、SEO 寫手，各有各的目標。請參閱 [AI 員工職務](/ai-employees)。",
        },
        {
          title: "把看板填滿，然後審查",
          text: "工作時間內，每名員工每 15、30 或 60 分鐘接下一個 issue；你負責審查 pull request、回答問題。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "平行執行多個程式設計代理" },
  mid: {
    title: "厭倦了每個代理都要親手啟動？",
    text: "Crewmark 的 AI 員工按心跳自己接下一個 issue，用的就是你已經在付費的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Squad 常見問題",
    items: [
      {
        q: "Claude Squad 是什麼？",
        a: "smtg-ai 推出的開源終端機應用程式（AGPL-3.0），可同時執行多個程式設計代理，每個都在獨立的 tmux 工作階段和 git worktree 中，推送前你可以逐一審查變更。",
      },
      {
        q: "Claude Squad 支援 Codex 嗎？",
        a: "支援。設定好 OpenAI API key 後，用 `cs -p \"codex\"` 執行即可。它也能啟動 Gemini 和 Aider，預設則是 Claude Code。",
      },
      {
        q: "Claude Squad 能在 Windows 上使用嗎？",
        a: "README 沒有提到 Windows，而且它需要 tmux，所以在 Windows 上要放在 WSL 中執行。Claude Code 內建的 `--worktree` 參數和桌面應用程式都原生支援 Windows。",
      },
      {
        q: "Claude Squad 還有在維護嗎？",
        a: "有。最新版本是 2026 年 8 月 20 日發布的 v1.0.20。",
      },
      {
        q: "Claude Squad 和 Conductor 該選哪個？",
        a: "Conductor 正在加入 Meta、逐步停止服務，雲端服務於 2026 年 11 月 20 日結束。Claude Squad 是開源的，而且仍在開發。",
      },
      {
        q: "Claude Code 已經有 worktree 了，還需要 Claude Squad 嗎？",
        a: "如果只是為了隔離，不需要：`claude --worktree` 就能給每個工作階段一個獨立分支。但如果你想在一個終端機畫面中管理多個工作階段，或要使用 Claude Code 以外的代理，Claude Squad 仍然有用。",
      },
    ],
  },
  cta: {
    title: "別只組一支小隊，組一個團隊。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職務、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 Claude Squad 的 README 和版本發布紀錄，以及各替代方案的官網或儲存庫查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 smtg-ai、Claude Squad、Paradev、Kanban Code、Conductor、Anthropic 或 OpenAI 無關，也未獲其背書。產品名稱均為其所有者的商標。",
};
