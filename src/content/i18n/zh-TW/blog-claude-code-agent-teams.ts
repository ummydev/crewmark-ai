import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /blog/claude-code-agent-teams; the English master is src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Agent Teams 和 Subagents 差別 | Crewmark AI",
    description:
      "根據官方文件說明 Claude Code agent teams：和 subagent 有什麼不同、如何開啟並建立團隊、tmux 與 iTerm2 分割窗格、團隊規模、token 成本與限制，並附上範例提示詞。",
  },
  breadcrumb: "Claude Code agent teams",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code agent teams 和 subagent 有什麼不同：各自何時使用，以及如何建立團隊",
    lead: "有了 agent teams，一個 Claude Code 工作階段可以擔任團隊負責人（lead），產生若干隊友：每位隊友都是獨立的 Claude Code 執行個體，有自己的上下文視窗，共用一份任務清單，還能直接互相傳訊息。subagent 則更輕量：它是同一個工作階段裡的助手，專心完成一件事，做完交回一份摘要。Agent teams 是實驗性功能，預設關閉。這篇文章根據 Anthropic 的官方文件比較兩者，再說明如何開啟 agent teams、啟動一個團隊、在 tmux 或 iTerm2 分割窗格中檢視隊友，以及如何避開常見問題。",
    cta: "開始使用",
    secondary: "直接看如何建立團隊",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams 和 subagent 的差別",
      text: [
        "兩者都在各自獨立的上下文視窗裡平行工作。差別在於由誰協調：使用 subagent 時，主 agent 統籌一切；在團隊裡，隊友從共用清單認領任務，並且互相溝通。",
      ],
      headers: ["", "Subagent", "Agent teams"],
      rows: [
        ["是什麼", "同一個工作階段裡的助手，定義在 `.claude/agents/` 中，或使用內建的（Explore、Plan、general-purpose）", "一個負責人工作階段，加上若干作為隊友的獨立 Claude Code 執行個體"],
        ["上下文", "有自己的上下文視窗；只有摘要會傳回給呼叫端", "有自己的上下文視窗；完全獨立"],
        ["溝通方式", "把結果交回給呼叫端（具名的 subagent 之間可以互傳訊息）", "隊友之間直接傳訊息；你也可以傳訊息給任何一位隊友"],
        ["協調方式", "主 agent 管理所有工作", "共用任務清單，支援認領、相依關係和訊息"],
        ["最適合", "只在乎結果的專注型任務", "需要討論的工作：程式碼審查、方案辯論、依層級拆分的功能開發"],
        ["Token 成本", "較低", "較高：每位隊友都是一個獨立的 Claude 執行個體"],
        ["狀態", "正式提供", "實驗性，預設關閉"],
      ],
    },
    {
      kind: "text",
      title: "何時該用 agent teams（何時不該用）",
      points: [
        "研究與審查：隊友從不同角度檢視同一個問題，再互相質疑彼此的結論。",
        "新模組或新功能：每位隊友負責獨立的一塊，例如前端、後端和測試。",
        "用幾個互相競爭的假設來除錯：幾位隊友各自設法證明自己的理論，同時推翻其他人的。",
        "不適合循序進行的工作、要修改同一批檔案的工作，或相依關係很多的任務：這些情況請用單一工作階段或 subagent。",
        "不適合例行工作：每多一位活躍的隊友，token 用量就跟著增加。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何建立一個 Claude Code agent team",
      steps: [
        {
          title: "開啟 agent teams",
          text: "在環境變數中，或 settings.json 的 `env` 區塊中，把 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` 設為 `1`。團隊只能在互動式工作階段中使用；使用 `-p`（以及 Agent SDK）時，Claude 不會產生隊友。",
          code: enable,
        },
        {
          title: "用白話描述團隊",
          text: "說清楚要幾位隊友、每位負責什麼。Claude 會建立共用任務清單、產生隊友，並在它們完成後彙整結論。",
          code: prompt,
        },
        {
          title: "選擇顯示模式",
          text: "預設是行程內（in-process）模式，任何終端機都能用：隊友會顯示在提示字元下方的面板中；用方向鍵和 Enter 開啟某位隊友並傳訊息給它，按 `Ctrl+T` 查看任務清單。分割窗格模式讓每位隊友有自己的窗格，需要 tmux，或安裝了 `it2` CLI 的 iTerm2；把 `teammateMode` 設為 `auto` 或 `tmux`，或用 `claude --teammate-mode auto` 啟動。",
        },
        {
          title: "重複使用已定義好的角色",
          text: "請 Claude 產生一位「using the security-reviewer agent type」的隊友，就能重複使用 `.claude/agents/` 裡的 subagent 定義，包含它的工具、模型和指示。",
        },
        {
          title: "隨時引導，最後關閉",
          text: "隨時查看隊友的進度、調整它們的方向；如果負責人開始自己做隊友的工作，就對它說「wait for your teammates」。收尾時，請負責人依名稱關閉某位隊友；工作階段結束時，團隊的目錄會被清除。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Agent teams（英文）", href: docs },
    },
    {
      kind: "text",
      title: "最佳做法與限制",
      points: [
        "先從 3–5 位隊友開始，每位大約 5–6 個任務；三位專注的隊友往往勝過五位各做各的。",
        "給每位隊友分配不同的檔案：兩位隊友修改同一個檔案會互相覆蓋。",
        "把任務細節寫進產生隊友的提示詞：隊友會載入 CLAUDE.md、MCP 伺服器和 skills，但看不到負責人的對話。",
        "用 hooks 當品質關卡：`TeammateIdle`、`TaskCreated` 和 `TaskCompleted` 可以用結束代碼 2 把工作退回。",
        "限制：每個工作階段只能有一個團隊，不能巢狀建立團隊，負責人無法更換，`/resume` 無法還原行程內的隊友，任務狀態也可能延遲。",
        "分割窗格在 VS Code 整合式終端機、Windows Terminal 和 Ghostty 中無法使用；行程內模式到哪裡都能用。",
        "開啟 agent teams 後，Claude 指名呼叫的 subagent 可能會以隊友身分啟動；想恢復一般的 subagent，就把這個變數設為 `0`。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams 與其他平行執行 Claude Code 的方式",
      text: [
        "Agent teams 是在一個工作階段裡拆分你正在盯著的一個任務。若是彼此獨立的任務，就在 [git worktrees](/blog/claude-code-worktree) 裡開多個工作階段，或使用[背景 agent](/blog/claude-code-background-agents)；完整比較請看[多個 Claude Code agent](/blog/multiple-claude-code-agents)。想降低成本，請參考[如何減少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "一支工作階段結束後仍持續工作的團隊",
      text: [
        "agent team 只存在於一個工作階段裡，關掉就停止。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有固定職位、目標和工作時間的 AI 員工：每位員工依心跳醒來，從共用看板接下一個 issue，需要你做決定時傳訊息給你。",
      ],
      steps: [
        {
          title: "給每位員工一個職位",
          text: "[軟體工程師](/ai-employees/software-engineer)、程式碼審查員、[SEO 專員](/ai-employees/seo-specialist)：就是你會產生成隊友的那些角色，只是會一直留著。",
        },
        {
          title: "大家在同一塊看板上工作",
          text: "issue 取代了工作階段裡的任務清單，而且重新啟動後、過了幾天幾週都還在。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內每 15、30 或 60 分鐘一次；了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "建立一個 Claude Code agent team" },
  mid: {
    title: "想要一支不會隨工作階段結束而解散的團隊？",
    text: "Crewmark 讓 Claude Code 員工依心跳從共用看板上接手工作，用的就是你已經付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code agent teams 常見問題",
    items: [
      {
        q: "Claude Code agent teams 是什麼？",
        a: "一項實驗性功能：由一個 Claude Code 工作階段帶領一支由多個獨立 Claude Code 執行個體組成的團隊。隊友有各自的上下文視窗，共用一份任務清單，並能直接傳訊息給彼此和負責人。",
      },
      {
        q: "agent teams 和 subagent 有什麼不同？",
        a: "subagent 在同一個工作階段裡工作，把摘要交回給主 agent，由主 agent 統一協調。agent teams 是獨立的執行個體，透過共用任務清單和直接傳訊息自行協調，token 成本也更高。",
      },
      {
        q: "如何在 Claude Code 中開啟 agent teams？",
        a: "在環境變數中或 settings.json 的 env 區塊中把 CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS 設為 1，然後在互動式工作階段中請 Claude 為某個任務產生隊友。",
      },
      {
        q: "agent teams 一定要用 tmux 嗎？",
        a: "不用。預設的行程內模式在任何終端機中都能用。只有想讓每位隊友各占一個分割窗格時，才需要 tmux，或安裝了 it2 CLI 的 iTerm2。",
      },
      {
        q: "應該用幾位隊友？",
        a: "Anthropic 建議先從 3 到 5 位隊友開始，每位大約 5 到 6 個任務。每多一位隊友成本就跟著增加，隊友越多，協調負擔也越大。",
      },
      {
        q: "agent teams 能在 VS Code 中使用嗎？",
        a: "行程內模式在任何終端機中都能用，包括 VS Code 的整合式終端機。但那裡不支援分割窗格模式。",
      },
      {
        q: "我想要的是 subagent，為什麼 Claude 產生了隊友？",
        a: "開啟 agent teams 後，Claude 指名呼叫的 subagent 會以隊友身分啟動。把 CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS 設為 0，就能恢復一般的 subagent。",
      },
    ],
  },
  cta: {
    title: "把你的 agent team 變成一支常駐團隊。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 Claude Code 官方文件（Agent teams 和 Subagents）查核。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
