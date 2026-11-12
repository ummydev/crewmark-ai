import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /blog/claude-code-background-agents; the English master is src/content/blog/claude-code-background-agents.ts.

const docs = "https://code.claude.com/docs/en/headless";

const cron =
  '# crontab -e：平日 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1';

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 背景執行：headless、--bg 與排程 | Crewmark",
    description:
      "讓 Claude Code 在背景工作：背景任務、--bg 與 agent view、claude -p 搭配 cron、雲端工作階段、排程任務，以及每種方式需要的權限。",
  },
  breadcrumb: "Claude Code 背景 agent",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "如何在背景執行 Claude Code agent",
    lead: "背景 agent 會在你忙別的事時繼續工作：一個丟到背景的長時間測試、一個用 --bg 啟動後就關掉終端機的工作階段，或一個每天早上由 cron 啟動的 headless claude -p 工作。Claude Code 對每種情況都有對應的工具。這篇教學說明如何使用它們、每種方式靠什麼持續執行，以及無人看管時需要哪些權限。",
    cta: "申請搶先體驗",
    secondary: "直接看 headless 模式",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "在背景執行 Claude Code 的五種方式",
      text: ["差別在於什麼必須一直開著，以及由誰來啟動工作。"],
      headers: ["", "如何啟動", "何時持續執行", "適合"],
      rows: [
        ["背景任務", "Ctrl+B，或由 Claude 自己在背景執行指令", "工作階段開著時", "同一段對話裡的長時間建置和測試、subagent"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "電腦開著時（終端機可以關）", "現在啟動、稍後再查看的多個工作階段"],
        ["Headless 模式", "`claude -p \"<prompt>\"`，從腳本或 cron 啟動", "指令執行期間", "腳本、cron 工作、CI"],
        ["雲端工作階段", "`claude --cloud \"<task>\"`", "在 Anthropic 的伺服器上執行（筆電可以闔上）", "GitHub 儲存庫上的長時間任務"],
        ["排程任務", "`/schedule`、桌面 App 或 `/loop`", "視類型而定：雲端、App 開著，或工作階段開著", "重複性工作；請見[如何讓 Claude Code 主動工作](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "工作階段裡的背景任務",
      text: [
        "Claude 正在執行 Bash 指令或 subagent 時按 Ctrl+B（在 tmux 裡按兩次），就能把它丟到背景，你可以繼續和 Claude 對話。Claude 也可以自己在背景啟動指令。Claude 產生的 subagent 預設就在背景執行。",
        "輸入 `/tasks` 可以列出執行中的 shell 和 subagent 並查看狀態。在本機終端機的工作階段裡，背景指令沒有時間限制，但 Claude Code 結束時它也會停止。想讓幾個 agent 並排工作，請看[如何同時執行多個 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "text",
      title: "Agent view：比終端機活得更久的工作階段",
      text: [
        "`claude --bg \"<prompt>\"` 會在背景啟動一個工作階段並立即返回；`/bg` 會把你目前所在的工作階段移到背景。它們由一個監督程序執行，所以關掉終端機不會讓它們停下，但關機或重新開機就會；沒有連接的閒置工作階段大約一小時後會被停止。",
        "`claude agents` 會開啟 agent view；`claude attach <id>`、`claude logs <id>` 和 `claude stop <id>` 用來管理單一工作階段。Agent view 仍是研究預覽版，指令可能會變動。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "用 claude -p 以 headless 模式執行 Claude Code",
      steps: [
        {
          title: "執行一個提示詞後結束",
          text: "`-p`（或 `--print`）不開啟互動介面、直接執行 Claude Code，完成後就結束，成功時結束代碼為 0。也可以用管線把內容傳進去。",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "取得腳本讀得懂的輸出",
          text: "`--output-format json` 會回傳結果，以及工作階段 ID 和中繼資料，其中包括 `total_cost_usd`，這是在你的電腦上算出的估計值。`stream-json`（搭配 `--verbose`）會在事件發生時即時輸出。",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "只放行它需要的工具",
          text: "headless 模式下沒有人能核准權限提示。從 v2.1.302 起，沒有指定模式的執行會以 Manual 模式啟動，拒絕所有需要核准的操作。用 `--allowedTools` 列出它可以做的事，再用 `--permission-mode dontAsk` 直接拒絕其餘操作，而不是一直等待。",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "為執行設定上限",
          text: "`--max-turns` 會在達到一定的 agent 輪數後停止，`--max-budget-usd` 會在達到估算費用時停止（可能會稍微超出）。兩者都只能搭配 `-p` 使用。",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "之後接續同一段對話",
          text: "從 JSON 輸出儲存工作階段 ID，傳給 `--resume`；或用 `--continue` 接續目前目錄下最近的一個工作階段。",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "用 cron 定時執行",
          text: "Anthropic 的文件沒有 cron 範例，下面這個只用了文件裡有寫的參數。cron 的 PATH 非常精簡，所以要用 `which claude` 給出的完整路徑，並先建立記錄檔資料夾。這裡不要加 `--bare`：它會跳過你的訂閱登入，需要 API key。",
          code: cron,
        },
      ],
      source: { label: "來源：Anthropic 的 headless 模式文件（英文）", href: docs },
    },
    {
      kind: "text",
      title: "無人看管執行的權限",
      points: [
        "`dontAsk` 加上一份 `--allowedTools` 清單是最嚴格的選擇：不在清單上的一律拒絕。",
        "`auto` 讓一個分類器代替你審查每個操作。Anthropic 指出它無法保證安全。",
        "`acceptEdits` 放行檔案修改和簡單的檔案指令，但不放行其他 shell 指令。",
        "`bypassPermissions` 會跳過權限提示和安全檢查。Anthropic 表示只應在沒有網路連線的隔離容器或虛擬機器裡使用，因為它對提示詞注入完全沒有防護。",
        "要為專案裡的每次執行訂規則，請把 `permissions.allow` 和 `permissions.deny` 寫進 `.claude/settings.json`。deny 規則永遠優先。",
      ],
    },
    {
      kind: "text",
      title: "雲端選項：電腦關著的時候",
      points: [
        "雲端工作階段：`claude --cloud \"<task>\"` 會根據你的 GitHub 分支在 Anthropic 的基礎架構上執行，闔上筆電也會繼續。用 `claude -p \"...\" --cloud <session-id>` 傳送後續訊息。",
        "雲端排程任務：用 `/schedule` 或在 claude.ai/code 上建立，可以依時間表（最多每小時一次）、透過 API 呼叫或由 GitHub 事件觸發執行。適用 Pro、Max、Ultra、Team 和 Enterprise；目前為研究預覽版。",
        "GitHub Actions：`anthropics/claude-code-action@v1` 搭配 `schedule` 觸發條件。用 `claude setup-token` 產生的 OAuth token 會使用你的訂閱；用 API key 則按 token 計費。",
      ],
    },
    {
      kind: "steps",
      kicker: "使用 Crewmark",
      title: "給背景 agent 一份長期的工作",
      text: [
        "背景任務、agent view 和 cron 啟動的，都是你已經決定好的工作。Crewmark 則給 Claude Code 工作階段一個長期的職位：工作時間內依心跳醒來，從看板上接手下一個 issue，卡關時傳訊息給你。",
      ],
      steps: [
        {
          title: "把一個工作階段變成員工",
          text: "選一個職位和一個用數字寫的目標，在 Claude Code 裡執行 Crewmark 給你的設定指令。這段對話就成了這位員工。",
        },
        {
          title: "讓心跳來啟動工作",
          text: "Crewmark daemon 會在工作時間內每 15、30 或 60 分鐘喚醒這個工作階段，使用你已經付費的訂閱；下班時間不打擾它。",
        },
        {
          title: "指派 issue，回覆訊息",
          text: "把工作當成 issue 加到看板上；員工會接手，邊做邊留言，需要審核時來問你。請看[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 claude -p 以 headless 模式執行 Claude Code" },
  mid: {
    title: "想讓它自己挑下一個任務？",
    text: "Crewmark 在你設定的工作時間內依心跳喚醒你的 Claude Code 工作階段，從看板上指派下一個 issue 給它。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude Code 背景 agent 常見問題",
    items: [
      {
        q: "如何讓 Claude Code 在背景執行？",
        a: "在工作階段裡按 Ctrl+B，把執行中的指令或 subagent 丟到背景。要在背景啟動整個工作階段，請用 `claude --bg \"<prompt>\"`。腳本和 cron 則用 headless 模式：`claude -p \"<prompt>\"`。",
      },
      {
        q: "Claude Code 的 headless 模式是什麼？",
        a: "用 `-p`（或 `--print`）執行 Claude Code：它接收一個提示詞，不開啟互動介面就開始工作，完成後結束，把結果輸出為文字、JSON 或 JSON 事件串流。",
      },
      {
        q: "關掉終端機後，背景 agent 還會繼續執行嗎？",
        a: "工作階段裡的背景任務會在 Claude Code 結束時停止。用 `--bg` 啟動的工作階段在終端機關閉後會繼續執行，直到電腦關機。雲端工作階段和雲端排程任務在電腦關機時也會繼續。",
      },
      {
        q: "無人看管的執行該用哪種權限模式？",
        a: "先從 `--permission-mode dontAsk` 加上一份只列出這項工作所需工具的 `--allowedTools` 清單開始。`bypassPermissions` 只在沒有網路連線的隔離容器或虛擬機器裡使用。",
      },
      {
        q: "claude -p 用的是我的 Claude 訂閱嗎？",
        a: "它用的是你目前登入的身分，除非你加上 `--bare`，那樣會跳過登入、需要 API key。Anthropic 的文件沒有說明 headless 執行如何計入方案的用量上限。",
      },
      {
        q: "如何查看背景 agent 的狀態？",
        a: "工作階段裡用 `/tasks`，用 `--bg` 啟動的工作階段用 `claude agents`，headless 執行則看記錄檔或 JSON 輸出。",
      },
    ],
  },
  cta: {
    title: "給 Claude Code 一份長期的工作。",
    text: "Crewmark 把 Claude Code 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 2 日對照 Anthropic 的 Claude Code 官方文件查核。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
