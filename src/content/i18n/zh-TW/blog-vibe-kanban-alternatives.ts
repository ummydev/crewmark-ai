import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Vibe Kanban 停止服務後的替代方案（2026 比較） | Crewmark AI",
    description:
      "Vibe Kanban 背後的公司已經關閉，雲端看板也隨之下線。哪些功能還能用、如何保住你的 issue，以及用看板驅動 Claude Code 和 Codex 的替代方案：Paradev、Nimbalyst、Claude Squad、Kanban Code 和 Crewmark。",
  },
  breadcrumb: "Vibe Kanban 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 程式設計代理",
    title: "Vibe Kanban 替代方案：現在要去哪裡用看板指揮你的代理",
    lead: "Vibe Kanban 讓你把程式設計代理的工作拆成看板上的 issue，每個 issue 開一個 workspace，審完 diff 就直接開 pull request，支援 Claude Code、Codex 等十種代理。2026 年 4 月 10 日，背後的公司 bloop 宣布關閉。開源應用程式仍能在本機執行，但託管的 issue、留言、專案和組織都已下線，最後一個版本發布於 2026 年 4 月 24 日。本文說明哪些還能用、如何保住你的工作成果，以及有哪些替代方案。",
    cta: "開始使用",
    secondary: "比較替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Vibe Kanban 發生了什麼事",
      text: [
        "bloop 表示，大多數使用者都在用免費方案，公司也找不到自己願意走下去的商業模式。宣布後遠端服務又維持了 30 天，之後 Vibe Kanban 改為完全本機的架構，專案頁面現在只會帶你到資料匯出。過去 30 天內付款的帳單已全額退款。",
      ],
      points: [
        "還能用：`npx vibe-kanban` 照樣能啟動本機應用程式，本機 workspace 也能正常運作。程式碼繼續以 Apache 2.0 授權開源，由社群維護。",
        "已經消失：團隊共用的託管看板 issue、留言、專案和組織。",
        "正在停滯：自 2026 年 4 月 24 日的 v0.1.44 之後就沒有新版本，新推出的代理版本也就跟不上了。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何保住你的工作成果",
      steps: [
        {
          title: "匯出你的資料",
          text: "開啟最新版的應用程式，使用其中的資料匯出功能。專案頁面現在會直接帶你過去。",
        },
        {
          title: "推送每一個你在意的分支",
          text: "每個 workspace 都是一個 git worktree，各有自己的分支。把想保留的提交並推送，讓程式碼留在你自己的儲存庫裡，而不是困在應用程式裡。",
          code: keep,
        },
        {
          title: "把未完成的 issue 搬到大家都看得到的地方",
          text: "如果團隊用的是託管看板，趁大家還記得每個 issue 是做什麼的，盡快在 GitHub Issues 或你選定工具的看板裡重建一遍。",
        },
        {
          title: "先用新工具跑一個真實任務",
          text: "比較下面的選項，挑一個 issue 從頭跑到 pull request，確認沒問題再整個搬過去。",
        },
      ],
      source: { label: "來源：Vibe Kanban 的停止服務公告", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Vibe Kanban 替代方案比較",
      text: ["資訊來自各專案的官網或 GitHub 儲存庫，截至 2026 年 11 月 7 日。"],
      headers: ["", "是什麼", "支援的代理", "平台", "看板", "授權"],
      rows: [
        ["Vibe Kanban（社群版）", "本機應用程式：看板 issue、每個 issue 一個 workspace、diff 審查、PR", "Claude Code、Codex、Gemini CLI、Copilot、Amp、Cursor、OpenCode 等", "用 `npx` 執行；遠端可用 Docker", "有，但現在只能在本機使用", "Apache 2.0"],
        ["Paradev（原 Superset）", "平行執行多個代理的桌面工作區，每個代理一個 worktree；支援自動化和雲端沙箱", "Claude、Codex、Cursor Agent、OpenCode 及任何 CLI 代理", "macOS；Linux 為實驗性支援；尚不支援 Windows", "未提及看板", "MIT"],
        ["Nimbalyst", "為代理打造的視覺化工作區，整合任務、文件、wiki、圖表和程式碼", "Claude Code、Codex", "macOS、Windows、Linux", "任務與文件、程式碼放在一起", "開源；個人免費"],
        ["Claude Squad", "終端機應用程式：每個代理一個 tmux 工作階段加一個 git worktree", "Claude Code、Codex、Gemini、Aider", "需要 tmux 和 gh", "無（TUI 清單）", "AGPL-3.0"],
        ["Kanban Code", "Claude Code 工作階段的看板，每張卡片一個 worktree", "Claude Code", "macOS 26 應用程式、Windows（Tauri）", "Backlog、In Progress、Waiting、In Review、Done", "Apache 2.0"],
        ["Crewmark", "AI 員工：有職位、目標、工作時間的代理工作階段，依心跳自己接下一個 issue", "Claude Code、Codex、DeepSeek Harness、OpenCode", "網頁版看板；常駐程式支援 macOS、Windows、Linux", "有，雲端託管，與團隊共用", "商業產品"],
      ],
    },
    {
      kind: "text",
      title: "哪個 Vibe Kanban 替代方案適合你",
      points: [
        "你只想要原本那個應用程式：繼續在本機執行社群版，同時關注儲存庫，看看有沒有人接手維護的 fork。",
        "你主要用它平行執行代理、審查 diff：Paradev 是目前仍在維護的桌面應用程式中最接近的，支援 Mac 和 Linux。Claude Code 內建的 `--worktree` 參數也能做到隔離的平行工作階段，請見 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
        "你離不開終端機：Claude Squad 給每個代理一個 tmux 工作階段和一個 worktree。",
        "你要的就是看板本身，而且只用 Claude Code：Kanban Code 會隨著工作階段啟動、等待、開 PR，自動把卡片移到對應的欄位。",
        "你和團隊一起用託管看板，或希望代理不用等你就自己接 issue：這就是 Crewmark（見下文）。Conductor 本來也是個選擇，但它已經[加入 Meta、逐步停止服務](/blog/conductor-alternatives)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Vibe Kanban 的每張卡片都要等你啟動，Crewmark 不用。",
      text: [
        "在 Vibe Kanban 裡，你寫好 issue，再手動啟動代理。Crewmark 保留了看板，雲端託管、團隊共用，並把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名 AI 員工：在工作時間內依心跳醒來，自己接下一個 issue，用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "帶上你的儲存庫和你的代理",
          text: "在專案中執行設定指令。每名員工都在自己的工作階段和簽出目錄中工作，和 Vibe Kanban 的 workspace 很像。",
        },
        {
          title: "重建你的看板",
          text: "把未完成的 issue 加進來，指派給某名員工，或先不指派，留給有空的人接手。",
        },
        {
          title: "讓心跳啟動工作",
          text: "員工每 15、30 或 60 分鐘接下一個 issue，邊做邊留言，需要你做決定時傳訊息給你。了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Vibe Kanban 停止服務後保住你的工作成果" },
  mid: {
    title: "託管看板沒了？看板留著，再多請幾名員工。",
    text: "Crewmark 給團隊一個共用看板，Claude Code 和 Codex 員工依心跳自己接下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "Vibe Kanban 停止服務常見問題",
    items: [
      {
        q: "Vibe Kanban 要停止服務了嗎？",
        a: "關閉的是公司。bloop 於 2026 年 4 月 10 日宣布關閉。開源應用程式以社群維護專案的形式繼續存在，可在本機執行；託管的 issue、留言、專案和組織在 30 天後被移除。",
      },
      {
        q: "Vibe Kanban 現在還能用嗎？",
        a: "本機可以：`npx vibe-kanban` 仍能啟動，本機 workspace 也正常運作。最新版本是 2026 年 4 月 24 日發布的 v0.1.44，所以較新的代理版本可能不受支援。",
      },
      {
        q: "如何匯出 Vibe Kanban 的資料？",
        a: "使用最新版應用程式中的資料匯出功能，專案頁面現在會直接帶你過去。另外，也把各個 workspace 的分支推送到你的 git 遠端儲存庫。",
      },
      {
        q: "最好的 Vibe Kanban 替代方案是什麼？",
        a: "要平行代理加 diff 審查，選 Paradev（原 Superset）；要 Claude Code 工作階段的看板，選 Kanban Code；習慣終端機工作流程，選 Claude Squad；要團隊共用、代理自己接 issue 的看板，選 Crewmark。",
      },
      {
        q: "有開源的 Vibe Kanban 替代方案嗎？",
        a: "有：Paradev（MIT）、Claude Squad（AGPL-3.0）和 Kanban Code（Apache 2.0）都是開源的，Vibe Kanban 本身也仍以 Apache 2.0 授權開源。",
      },
      {
        q: "有支援 Windows 的 Vibe Kanban 替代方案嗎？",
        a: "Nimbalyst 提供 Windows 版下載，Kanban Code 也有 Windows 應用程式。Crewmark 的看板在瀏覽器中執行，常駐程式支援 Windows。Paradev 目前尚不支援 Windows。",
      },
    ],
  },
  cta: {
    title: "你的代理需要一個新看板，也順便給它們一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 Vibe Kanban 的 README、版本發布紀錄和停止服務公告，以及各替代方案的官網或儲存庫查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 bloop、Vibe Kanban、Paradev、Nimbalyst、Claude Squad、Kanban Code、Anthropic 或 OpenAI 無關，也未獲其背書。產品名稱均為其所有者的商標。",
};
