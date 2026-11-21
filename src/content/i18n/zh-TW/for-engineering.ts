import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `每天兩次，讀取正式環境裡新出現和再次出現的 Sentry 錯誤，
把看板上還沒有的開成 issue（寫清楚影響和可能原因），
一行就能修好的直接開 pull request。

依照 AGENTS.md 裡的規則，審查每個標為可審查的 pull request。
只留評論；絕不核准或合併。

每週五，根據本週合併的 pull request 寫版本說明：
對使用者來說改了什麼，依功能區塊分組，附上連結。

接下一個標著「good first issue」的 issue，在你自己的
git worktree 裡工作，附上測試開 pull request。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 做工程：會交付成果的 AI 員工",
    description:
      "工程團隊如何把 Claude Code 和 Codex 當成 AI 員工：錯誤分流、程式碼審查、從 issue 到 pull request、版本說明和夜班，全都依排程進行。職位、使用情境、可複製的提示詞，以及讓合併始終由人掌控的規則。",
  },
  breadcrumb: "用 Claude Code 做工程",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "給工程團隊",
    title: "用 Claude Code 做工程：自己領取下一個 issue 的 AI 員工",
    lead: "多數團隊只在有人坐下來下提示詞時才用 Claude Code 或 Codex。更大的收穫是交給它固定的工作：每天早上分流新錯誤、審查每個準備好的 pull request、從看板領取下一個 issue 並開 pull request、週五寫版本說明。本頁說明哪些工程工作可以交出去、怎麼讓好幾個 agent 同時工作又不互相干擾、可以複製的提示詞，以及讓合併始終由人掌控的規則。",
    cta: "開始使用",
    secondary: "看看有哪些工作",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "工程團隊交給 AI 員工的工作",
      headers: ["工作", "頻率", "指南"],
      rows: [
        ["分流新的 Sentry 錯誤，修掉小問題", "每天兩次", "[Sentry 錯誤分流](/use-cases/sentry-error-triage)"],
        ["審查準備好的 pull request", "每個 PR", "[每個 PR 都有 AI 程式碼審查](/use-cases/pr-review)"],
        ["領取下一個 issue 並開 pull request", "持續", "[AI 軟體工程師](/ai-employees/software-engineer)"],
        ["整夜消化待辦清單", "每晚", "[讓 Claude Code 24 小時運作](/blog/run-claude-code-24-7)、[Codex 長時間任務](/blog/codex-long-running-tasks)"],
        ["根據合併的 pull request 寫版本說明", "每週", "見下方提示詞"],
        ["讓看板保持最新：狀態、評論、連結", "每個 issue", "[Claude Code 看板](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "可以複製的提示詞",
      text: ["每一條既可以當作 AI 員工的週期性 issue，也可以直接在 Claude Code 或 Codex 裡當作一次性提示詞使用。"],
      steps: [
        {
          title: "四項工作，每項一句話",
          text: "把名稱和時間換成你們的。前兩項有附設定方法的完整指南：[Sentry 錯誤分流](/use-cases/sentry-error-triage)和 [AI 程式碼審查](/use-cases/pr-review)。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 或 Codex 上設定 AI 工程師",
      steps: [
        {
          title: "規則只寫一次",
          text: "把建置和測試指令、慣例和審查規則寫進 CLAUDE.md 或 AGENTS.md，讓每個工作階段都從同一個起點開始。參見 [CLAUDE.md](/blog/claude-md) 和 [Codex 的 AGENTS.md](/blog/codex-agents-md)。",
        },
        {
          title: "每個 agent 各用一個 worktree",
          text: "兩個 agent 修改同一份工作副本會互相覆蓋。每個 agent 用一個 git worktree；參見 [Claude Code worktree](/blog/claude-code-worktree) 和[同時執行多個 Claude Code agent](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "連接工作需要的工具",
          text: "GitHub 用它的 CLI，Sentry 用它託管的 MCP 伺服器，你們的任務追蹤工具用它的 MCP 伺服器或 CLI。兩者都有時優先用 CLI，比較省 token。",
        },
        {
          title: "合併交給人",
          text: "agent 開 pull request、留評論；人來核准和合併。員工需要決定時，會把 issue 標為「需處理」並提問。",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "可以期待什麼",
      points: [
        "描述清楚的小 issue 效果最好：附堆疊追蹤的 bug、缺少的測試、橫跨許多檔案的文案修改。",
        "大型功能仍然需要人拆成 issue；agent 擅長做零件，比較不擅長做規劃。",
        "用量來自你自己的 Claude 或 ChatGPT 方案；把吃重的工作排在工作時間或夜裡，並控制在額度之內。",
        "審查的工作量會轉移，不會消失：pull request 變多，要審的也變多，所以 AI 審查也在這張清單上。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "有看板、工作時間和心跳的工程師",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 變成 AI 員工：每位都有職位、量化目標、工作時間和心跳，從共用看板領取下一個 issue，邊做邊留評論，並開 pull request 等待審查。",
      ],
      steps: [
        {
          title: "聘用這個職位",
          text: "從 [AI 軟體工程師](/ai-employees/software-engineer)開始。",
        },
        {
          title: "把固定工作加成週期性 issue",
          text: "分流、審查和版本說明會依各自的排程自動回來。",
        },
        {
          title: "看看其他團隊",
          text: "行銷團隊也用同樣的做法：[用 Claude Code 做行銷](/for/marketing)。所有工作都在[使用情境](/use-cases)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上設定 AI 工程師" },
  mid: {
    title: "想要自己領取下一個 issue 的工程師？",
    text: "Crewmark 員工在你的 Claude Code 或 Codex 上執行，依心跳醒來，開 pull request 等待審查。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "工程團隊最好用的 Claude Code 使用情境有哪些？",
        a: "會重複、有明確完成標準的工作：錯誤分流、pull request 審查、附堆疊追蹤的小 bug、測試、版本說明，以及讓看板保持最新。大型功能仍然需要人來規劃。",
      },
      {
        q: "好幾個 Claude Code agent 能在同一個儲存庫裡工作嗎？",
        a: "可以，只要每個都有自己的 git worktree 和自己的 issue。參見[同時執行多個 Claude Code agent](/blog/multiple-claude-code-agents)和 [agent teams](/blog/claude-code-agent-teams)。",
      },
      {
        q: "Codex 也能這樣用嗎？",
        a: "可以。同樣的工作和規則也適用於 Codex，把規則放進 AGENTS.md 即可。",
      },
      {
        q: "AI agent 應該合併自己的 pull request 嗎？",
        a: "不應該。讓它開 pull request、留評論；核准和合併交給人。",
      },
      {
        q: "這和 Devin 或其他雲端 agent 有什麼不同？",
        a: "雲端 agent 是在你指派任務時，於廠商的雲端執行每項任務。Crewmark 以你自己方案上的 Claude Code 或 Codex，依排程做固定的工作。參見 [Devin 替代方案](/blog/devin-alternatives)。",
      },
    ],
  },
  cta: {
    title: "幫你的工程團隊配上會自己領取下一個 issue 的 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "撰寫於 2026 年 11 月 10 日；工具相關事實已於同日對照 Sentry、Anthropic 和 OpenAI 的文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI、GitHub 和 Sentry 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
