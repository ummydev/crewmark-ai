import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /blog/multiple-claude-code-agents; the English master is src/content/blog/multiple-claude-code-agents.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "多個 Claude Code agent 平行執行：subagent 與 worktree | Crewmark",
    description:
      "同時執行多個 Claude Code agent：subagent、git worktree 裡的平行工作階段、--bg 背景工作階段和實驗性的 agent teams，而且不會互相改壞檔案。",
  },
  breadcrumb: "多個 Claude Code agent",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "如何同時執行多個 Claude Code agent",
    lead: "Claude Code 有四種方式可以同時處理好幾件事：同一段對話裡的 subagent、各自在獨立 git worktree 裡的工作階段、用 --bg 啟動的背景工作階段，以及能互相傳訊息的實驗性 agent teams。這篇教學說明如何設定每一種、該選哪一種，以及如何避免平行執行的 agent 互相覆蓋對方的成果。",
    cta: "申請搶先體驗",
    secondary: "直接看 worktree",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "平行執行 Claude Code agent 的四種方式",
      headers: ["", "什麼在平行執行", "檔案是否分開？", "最適合"],
      rows: [
        ["Subagent", "同一段對話裡的多個助手，各有自己的上下文", "否，除非設定 `isolation: worktree`", "研究、審查和做完要回報的支線任務"],
        ["Worktree 工作階段", "完整的工作階段，各自在自己的 git worktree 裡", "是，每個一個分支", "同時開發幾個功能或修正"],
        ["背景工作階段", "用 `claude --bg` 啟動的工作階段，在 agent view 裡管理", "是，預設每個一個 worktree", "現在派出任務，稍後再查看"],
        ["Agent teams", "一個主工作階段加上共用任務清單的隊友", "否：在隊友之間分好檔案", "需要 agent 互相溝通的工作"],
      ],
    },
    {
      kind: "steps",
      title: "Subagent：同一個工作階段裡的平行助手",
      text: [
        "subagent 有自己的上下文視窗、系統提示詞和工具。它看不到你的對話，只有它的摘要會傳回來，這樣主工作階段的上下文就能保持精簡。Claude Code 內建 Explore（唯讀）和 Plan 等 subagent，你也可以自己新增。",
      ],
      steps: [
        {
          title: "定義一個 subagent",
          text: "在 `.claude/agents/`（和專案共用）或 `~/.claude/agents/`（只給你自己）裡建立一個 Markdown 檔案。只有 `name` 和 `description` 是必填；`tools` 限制它能使用的工具，`model` 用來選擇模型。",
          code: subagent,
        },
        {
          title: "讓 Claude 同時執行好幾個",
          text: "直接要求平行處理，例如「平行審查 auth、billing 和 search 三個模組」。Claude 產生的 subagent 預設會在背景啟動，最多同時 20 個，完成後回報。輸入 `/tasks` 就能看到它們。",
        },
        {
          title: "給會修改檔案的 subagent 獨立的 worktree",
          text: "在 subagent 的 frontmatter 加上 `isolation: worktree`，或請 Claude 讓它的 agent 使用 worktree。這樣每個 subagent 都會在儲存庫的一份暫時副本裡修改；如果沒有任何變更，副本會被刪除。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "在 git worktree 裡平行執行 Claude Code 工作階段",
      steps: [
        {
          title: "忽略 worktree 資料夾",
          text: "Claude Code 會在儲存庫根目錄的 `.claude/worktrees/` 裡建立 worktree。儲存庫至少要有一個 commit。",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "每個任務開一個工作階段",
          text: "在每個終端機裡用不同的名稱執行 `claude --worktree`（或 `-w`）。每個工作階段都有自己的資料夾，以及一個以預設分支為基礎、名為 `worktree-<name>` 的分支。",
          code: "# 終端機 1\nclaude --worktree feature-auth\n\n# 終端機 2\nclaude --worktree bugfix-login",
        },
        {
          title: "複製需要的未追蹤檔案",
          text: "新的 worktree 裡只有被 Git 追蹤的檔案。把 `.env` 這類檔案列進 `.worktreeinclude` 檔案（gitignore 語法），Claude Code 就會把它們複製進去。",
          code: ".env\n.env.local",
        },
        {
          title: "合併並清理",
          text: "工作階段結束時，沒有變更的 worktree 會連同分支一起刪除；有變更的會詢問你是否保留。像合併其他分支一樣合併它們即可。headless 的 `-p` 執行不會詢問，所以要用 `git worktree remove` 自己移除。",
        },
        {
          title: "或者使用桌面 App",
          text: "按 Cmd+N（Windows 上是 Ctrl+N）開新的工作階段，啟動前打開 Worktree 開關；它預設是關閉的。多個工作階段可以在分割檢視中並排顯示。",
        },
      ],
      source: { label: "來源：Anthropic 的 worktree 文件（英文）", href: docs },
    },
    {
      kind: "text",
      title: "用 --bg 和 agent view 執行背景工作階段",
      text: [
        "`claude --bg \"<prompt>\"` 會在背景啟動一個工作階段並立即返回，所以你可以接連啟動好幾個。每個工作階段在修改任何東西之前，都會先移進自己的 worktree。`claude agents` 會列出它們；`claude logs <id>`、`claude attach <id>` 和 `claude stop <id>` 用來管理單一工作階段。",
        "關掉終端機後它們會繼續執行，但電腦關機後就不會。Agent view 仍是研究預覽版。想進一步了解無人看管的執行，請看[如何在背景執行 Claude Code agent](/blog/claude-code-background-agents)。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams：能互相溝通的 agent",
      text: [
        "Agent teams 是實驗性功能，預設關閉。在 shell 裡或 settings.json 的 `env` 區塊設定 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 來開啟，再請 Claude 為某個任務「產生三個隊友」。隊友共用一份任務清單並互相傳訊息；它們會顯示在終端機裡，使用 tmux 或 iTerm2 時也可以顯示在分割窗格中。",
      ],
      points: [
        "只支援互動式工作階段：`-p` 和 Agent SDK 不會產生隊友。",
        "每個工作階段只能有一個團隊，不能巢狀建立團隊，而且行程內的隊友不會被 `/resume` 還原。",
        "隊友共用同一份程式碼檢出，所以要給每位隊友分配不同的檔案。",
        "花費高出許多：根據 Anthropic 文件，隊友在 plan 模式下執行時，一個團隊大約要用掉單一工作階段 7 倍的 token。",
      ],
    },
    {
      kind: "text",
      title: "避免平行的 agent 互相覆蓋",
      points: [
        "如果兩個 agent 可能動到相同的檔案，就給每個 agent 一個獨立的 worktree。worktree 裡的工作階段無法修改主要的檢出，它的 subagent 也不行。",
        "在 agent team 裡依檔案分工：兩位隊友修改同一個檔案會互相覆蓋。",
        "每個 subagent 和工作階段都會消耗同一份用量上限，所以同時執行好幾個會讓用量倍增。簡單的 subagent 請用 `model: haiku`。",
        "執行同一套測試或開發伺服器的 agent 可能會搶同一個連接埠；給每個 agent 分配自己的連接埠。",
      ],
    },
    {
      kind: "steps",
      kicker: "使用 Crewmark",
      title: "把平行的 agent 變成各有分工的團隊",
      text: [
        "worktree 和 agent teams 拆分的是你正在盯著的一個任務。Crewmark 則把多個 Claude Code 或 Codex 工作階段當成員工來執行，各有自己的職位、目標和工作時間，並在同一塊看板上指派工作。",
      ],
      steps: [
        {
          title: "一個職位一位員工",
          text: "SEO 專員、軟體工程師和 UI 設計師各自待在自己的對話裡，有自己的指示和目標。",
        },
        {
          title: "所有人共用一塊看板",
          text: "把 issue 指派給適合的員工。每位員工依自己的心跳醒來，接手下一個 issue，邊做邊留言，誰在做什麼一目了然。",
        },
        {
          title: "它們來問你，而不是互相問",
          text: "員工需要審核或權限時，會傳訊息給你，然後先做別的事。請看[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 git worktree 裡平行執行 Claude Code 工作階段" },
  mid: {
    title: "每天都要執行好幾個 agent？",
    text: "Crewmark 為每個 Claude Code 工作階段設定職位、目標和工作時間，把它們的工作都放在同一塊看板上。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "多個 Claude Code agent 常見問題",
    items: [
      {
        q: "可以同時執行多個 Claude Code agent 嗎？",
        a: "可以。Claude 能在同一個工作階段裡平行執行 subagent；你也可以用 `claude --worktree` 在不同的 git worktree 裡執行多個工作階段，用 `claude --bg` 啟動背景工作階段，或試試實驗性的 agent teams。",
      },
      {
        q: "subagent 和 agent teams 有什麼不同？",
        a: "subagent 完成一個任務後，把摘要回報給啟動它的工作階段。agent teams 是彼此獨立的 Claude Code 執行個體，共用一份任務清單並直接互相傳訊息；它是實驗性功能，token 消耗也更多。",
      },
      {
        q: "最多能同時執行幾個 subagent？",
        a: "預設最多同時 20 個。`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 可以調整這個上限。subagent 也能再啟動自己的 subagent，預設最多三層。",
      },
      {
        q: "如何避免平行的 agent 修改同一個檔案？",
        a: "讓每個 agent 待在自己的 git worktree 裡：工作階段用 `claude --worktree <name>`，subagent 用 `isolation: worktree`。用 `--bg` 啟動的背景工作階段會自動取得一個。agent teams 共用同一份檢出，所以要為每位隊友分配檔案。",
      },
      {
        q: "執行多個 agent 會比較花錢嗎？",
        a: "會。每個 subagent 和工作階段都會各自發出請求，全部計入同一份用量上限，所以同時執行好幾個會讓用量倍增。",
      },
      {
        q: "Claude Code 的 worktree 存放在哪裡？",
        a: "在儲存庫根目錄的 `.claude/worktrees/<name>/` 裡，分支名稱為 `worktree-<name>`。請把這個資料夾加進 `.gitignore`。",
      },
    ],
  },
  cta: {
    title: "執行一支各有分工的 Claude Code agent 團隊。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、有目標、有工作時間的 AI 員工，全都在同一塊看板上。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 2 日對照 Anthropic 的 Claude Code 官方文件查核。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
