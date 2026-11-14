import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# 找出 Conductor 為這個儲存庫建立的 worktree
git worktree list

# 在每個想保留的 workspace 裡：提交並推送它的分支
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor 加入 Meta：停止服務時程與最佳 Conductor 替代方案",
    description:
      "Conductor 這款平行執行 Claude Code 和 Codex 代理的 Mac 應用程式即將加入 Meta。停止服務時程、如何保存你的 workspace，以及適用於 Mac、Windows 和 Linux 的 Conductor 替代方案。",
  },
  breadcrumb: "Conductor 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · AI 程式設計代理",
    title: "Conductor 加入 Meta：接下來會怎樣，你的代理該搬到哪裡",
    lead: "Conductor 是一款在平行 workspace 中執行 Claude Code、Codex、Cursor 和 OpenCode 代理的 Mac 應用程式，它於 2026 年 11 月 4 日宣布加入 Meta。新用戶註冊已關閉，Conductor Cloud 將於 11 月 13 日轉為唯讀、11 月 20 日停止服務，本機應用程式的更新只會持續到 2027 年初。本文說明關鍵日期、如何保住你的工作成果，以及能做同樣事情的替代方案。",
    cta: "開始使用",
    secondary: "保存你的 workspace",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Conductor 是什麼，又有哪些改變",
      text: [
        "Conductor 給每個程式設計任務一個獨立的 workspace：一個 git worktree，有自己的分支、檔案、終端機、diff 和審查流程，因此多個代理可以同時在同一個儲存庫裡工作。它只支援 macOS，可搭配 Claude Code、Codex、Cursor 和 OpenCode 使用，後來又推出 Conductor Cloud，讓 workspace 在離開你的 Mac 後也能繼續執行。",
        "創辦人 Charlie Holtz 宣布團隊將加入 Meta，打造「下一代互動介面」，並承諾明年初推出新產品。Meta 向 TechCrunch 證實了這筆交易，但沒有揭露任何條件。",
      ],
    },
    {
      kind: "table",
      title: "Conductor 停止服務時程",
      headers: ["日期", "會發生什麼事"],
      rows: [
        ["2026 年 11 月 4 日", "停止新用戶註冊和下載。免費用戶無法再升級；Pro 用戶可免費繼續使用 Pro 功能。有效訂閱用戶將獲得退款。"],
        ["2026 年 11 月 13 日", "雲端 workspace 轉為唯讀：你可以查看舊對話、匯出資料，但不能再傳送訊息。"],
        ["2026 年 11 月 20 日", "Conductor Cloud 停止服務，開始刪除雲端用戶資料。"],
        ["至 2027 年初", "本機 Mac 應用程式持續獲得新模型和重大錯誤修正，之後逐步停止；停止服務時所有用戶資料都會被刪除。"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在截止日前保住你的工作成果",
      steps: [
        {
          title: "11 月 13 日前把雲端 workspace 移到你的 Mac 上",
          text: "在 Conductor 中對每個雲端 workspace 按右鍵，選擇 Transfer to local（移至本機）。workspace 及其對話會移到你的電腦上。",
        },
        {
          title: "11 月 20 日前匯出你的資料",
          text: "在 Conductor 中前往 Settings → Account → Export data（設定 → 帳號 → 匯出資料）下載全部內容，包括你可能想留作筆記或提示詞的對話。",
        },
        {
          title: "推送每一個你在意的分支",
          text: "本機 workspace 就是一般的 git worktree，通常位於 `~/conductor/workspaces/<repo>/<workspace>`，與你的儲存庫共用歷史。提交並推送它們的分支，這樣工作成果就不會隨應用程式一起消失。",
          code: rescue,
        },
        {
          title: "移轉你的設定腳本",
          text: "Conductor 把每個專案的 setup、run 和 archive 腳本存放在 `.conductor/settings.toml` 或 `.conductor/settings.local.toml` 中。把這些指令複製到你的 README 或下一個工具的設定裡；如果你要改用 Claude Code worktree，再把 `.env` 等檔案列進 `.worktreeinclude`。",
        },
        {
          title: "選一個替代工具，先拿一個任務試試",
          text: "比較下方的選項，然後在 Conductor Pro 權限結束前，用新工具跑一個真實任務。",
        },
      ],
      source: { label: "來源：Conductor 的公告", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Conductor 替代方案比較",
      headers: ["", "Conductor", "單獨使用 Claude Code", "Codex 應用程式", "Crewmark"],
      rows: [
        ["是什麼", "在 worktree 中平行執行代理的 Mac 應用程式", "`claude --worktree`、桌面應用程式中的平行工作階段、背景代理", "OpenAI 的桌面應用程式，內建 worktree 和雲端任務", "AI 員工：有職位、目標、工作時間和心跳的代理工作階段"],
        ["支援的代理", "Claude Code、Codex、Cursor、OpenCode", "Claude Code", "Codex", "Claude Code、Codex、DeepSeek Harness、OpenCode"],
        ["平台", "macOS", "macOS、Windows、Linux", "桌面應用程式和網頁版", "macOS、Windows、Linux"],
        ["隔離方式", "每個 workspace 一個 git worktree", "每個工作階段或 subagent 一個 git worktree", "worktree", "每名員工有自己的工作階段和簽出目錄"],
        ["誰來啟動下一個任務", "你", "你（或排程）", "你（或排程）", "心跳：每名員工醒來後自己接下一個 issue"],
        ["任務看板", "workspace 清單", "無", "無", "有，包括 issue、留言和傳給你的訊息"],
        ["狀態", "雲端 11 月 20 日結束；本機版到 2027 年初", "持續維護", "持續維護", "持續維護"],
      ],
    },
    {
      kind: "text",
      title: "哪個 Conductor 替代方案適合你",
      points: [
        "你主要用 Conductor 搭配 Claude Code：Claude Code 現在自己就能做到其中的核心功能。`claude --worktree <name>` 為每個工作階段提供獨立的 worktree 和分支，`.worktreeinclude` 會複製你的 `.env`，桌面應用程式也能透過 Worktree 開關執行平行工作階段。請見 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
        "你主要用 Codex：Codex 桌面應用程式內建 worktree 和雲端任務；兩個代理的比較請見 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        "你需要 Windows 或 Linux：Conductor 從未支援這兩個平台；Claude Code 的 CLI 和 Crewmark 都能在三個平台上執行。",
        "你混用多種代理，或希望它們在你不在時也繼續工作：這正是 Crewmark 的用途（見下文）。想手動執行多個代理，請見[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Conductor 讓你的代理並排執行，Crewmark 給它們一份工作。",
      text: [
        "Conductor 讓平行代理容易啟動和審查，但每個 workspace 仍要等你輸入下一則提示詞。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接下一個 issue，用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "帶上你的儲存庫和你的代理",
          text: "在每個專案中執行設定指令。多名員工可以共用一個儲存庫，各自在自己的簽出目錄中工作，就像你的 Conductor workspace 一樣。",
        },
        {
          title: "給每名員工一個職位和一個目標",
          text: "程式設計師、審查者、SEO 寫手：每名員工都有一個寫成數字的目標和自己的工作時間。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "讓心跳啟動工作",
          text: "員工每 15、30 或 60 分鐘在同一個對話中醒來一次，接下一個 issue，需要你做決定時傳訊息給你；請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Conductor 停止服務前保住你的工作成果" },
  mid: {
    title: "要離開 Conductor 嗎？別只是替換，順便升級。",
    text: "Crewmark 把 Claude Code、Codex 和 OpenCode 變成 AI 員工，它們依心跳醒來，自己接下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "Conductor 停止服務常見問題",
    items: [
      {
        q: "Conductor 要停止服務了嗎？",
        a: "部分停止。Conductor 將加入 Meta。Conductor Cloud 於 2026 年 11 月 13 日轉為唯讀，11 月 20 日停止服務。本機 Mac 應用程式會持續獲得新模型和重大修正，直到 2027 年初，之後逐步停止。",
      },
      {
        q: "Meta 收購了 Conductor 嗎？",
        a: "是的。Conductor 於 2026 年 11 月 4 日宣布加入 Meta，Meta 也向 TechCrunch 證實了這筆收購。價格和條件均未揭露。",
      },
      {
        q: "現在還能下載或註冊 Conductor 嗎？",
        a: "不能。新用戶註冊和下載已於 2026 年 11 月 4 日停止，免費用戶也無法再升級到 Pro。",
      },
      {
        q: "我的資料和訂閱會怎樣？",
        a: "雲端用戶資料從 11 月 20 日開始刪除，應用程式停止服務時所有用戶資料都會被刪除。請在 Settings → Account → Export data（設定 → 帳號 → 匯出資料）中匯出。有效訂閱用戶將獲得退款，Pro 用戶在此之前可免費繼續使用 Pro 功能。",
      },
      {
        q: "Claude Code 使用者最好的 Conductor 替代方案是什麼？",
        a: "Claude Code 內建的 `--worktree` 參數和桌面應用程式的平行工作階段，已經能滿足隔離的平行工作。想讓工作階段自己接手工作，就把它們當作 Crewmark 員工執行。",
      },
      {
        q: "有適用於 Windows 或 Linux 的 Conductor 替代方案嗎？",
        a: "Conductor 本身只支援 Mac。搭配 `--worktree` 的 Claude Code CLI、一般的 `git worktree` 以及 Crewmark 都能在 macOS、Windows 和 Linux 上執行。",
      },
      {
        q: "我的 Conductor workspace 還能繼續用嗎？",
        a: "本機 workspace 就是一般的 git worktree，用的是一般分支，所以無論應用程式如何，程式碼都留在你的儲存庫裡。把想保留的分支提交並推送即可。",
      },
    ],
  },
  cta: {
    title: "你的代理需要一個新家，也順便給它們一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Conductor 的公告、更新日誌和文件，以及 TechCrunch 的報導查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Conductor、Meta、Anthropic 或 OpenAI 無關，也未獲其背書。Conductor 是其所有者的商標，Claude 和 Claude Code 是 Anthropic 的商標，Codex 是 OpenAI 的商標。",
};
