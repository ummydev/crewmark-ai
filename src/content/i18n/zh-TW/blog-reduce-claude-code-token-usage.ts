import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

使用 compact 時，重點保留測試輸出和程式碼變更。`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "如何減少 Claude Code token 用量：12 個實用技巧 | Crewmark",
    description:
      "Claude Code 為什麼這麼耗 token，以及怎麼省：用 /usage 和 /context 查看用量，適時 clear 和 compact，選對模型和 effort，精簡 CLAUDE.md 和 MCP，善用 hook、skill 和 subagent。",
  },
  breadcrumb: "減少 Claude Code token 用量",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "如何減少 Claude Code 的 token 用量（不再一直撞到額度上限）",
    lead: "Claude Code 每次請求都會帶上整段對話，所以 token 用量會隨著上下文增加：在長工作階段的後段問一個一句話的問題，比在新的工作階段問同樣的問題貴得多。本文先教你看清 token 花在哪裡，再整理 Anthropic 官方文件中 12 個能減少用量的做法，從 `/clear` 和 `/compact`，到選擇模型和 effort、精簡 CLAUDE.md 和 MCP 伺服器，再到把雜訊多的工作交給 hook、skill 和 subagent。",
    cta: "申請搶先體驗",
    secondary: "直接看技巧",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "先看清 token 花在哪裡",
      headers: ["工具", "顯示內容"],
      rows: [
        ["`/usage`", "工作階段的 token 數和預估費用；在 Pro、Max、Ultra、Team 和 Enterprise 方案上，還有方案用量條、依 skill、subagent、外掛和 MCP 伺服器區分的明細、建議，以及最耗用量的 `/loop` 任務"],
        ["`/context`", "目前是什麼塞滿了上下文視窗"],
        ["狀態列", "設定後可持續顯示上下文用量"],
        ["載入指示器計數", "目前這一輪的輸出 token，例如 `↓ 5.5k tokens`；不包含上下文"],
        ["`/insights`", "一份 HTML 報告，分析你最近幾個工作階段的工作方式，列出卡關之處和建議"],
      ],
    },
    {
      kind: "text",
      title: "為什麼長工作階段的用量會越衝越高",
      points: [
        "上下文太長：每次請求都帶著完整對話，而每一輪工具呼叫又會再送出一次請求。快取讓重複讀取更便宜，但不是免費。",
        "快取未命中：離開的時間超過快取有效期限後，你送出的第一則訊息會把整個上下文重新處理一遍。",
        "你閒置時仍在執行的東西：工作階段範圍的排程任務和 `/loop`、來自你其他工作階段的訊息、目標進度檢查、工作階段回顧，以及閒置時的自動壓縮。",
        "平行工作者：每個 subagent、workflow agent 和 agent team 隊友都會送出自己的請求。當隊友以 plan mode 執行時，agent teams 使用的 token 約為一般工作階段的 7x。",
        "壓縮本身：`/compact` 必須讀過它要摘要的對話。`/clear` 不花任何 token。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "減少 Claude Code token 用量的 12 個方法",
      steps: [
        {
          title: "在不相關的任務之間清空對話",
          text: "`/clear` 會開始一段新對話，過時的上下文就不會再一路跟著。如果之後還想用 `/resume` 回到它，先執行 `/rename`。",
        },
        {
          title: "帶著指示壓縮",
          text: "`/compact Focus on code samples and API usage` 告訴 Claude 該保留什麼。你也可以把固定的壓縮指示寫進 CLAUDE.md。",
          code: compact,
        },
        {
          title: "選對模型",
          text: "Sonnet 能處理大部分的程式設計工作，而且比 Opus 便宜；把 Opus 留給架構設計和困難的推理。用 `/model` 切換，並給簡單的 subagent 設定 `model: haiku`。",
        },
        {
          title: "簡單的工作調低 effort",
          text: "思考 token 以輸出計費，每次請求可能多達數萬個。處理例行任務時，用 `/effort` 調低等級。",
        },
        {
          title: "讓 CLAUDE.md 保持簡短",
          text: "它每個工作階段都會被完整載入。控制在大約 200 行以內，把特定工作流程的指示移到 skill，skill 只在用到時才載入。參見 [CLAUDE.md 指南](/blog/claude-md)和 [Claude Code skills](/blog/claude-code-skills)。",
        },
        {
          title: "精簡 MCP 伺服器",
          text: "工具定義預設會延後載入，但每個伺服器仍會加入名稱和說明。在 `/mcp` 停用不用的伺服器，並優先使用 `gh`、`aws`、`gcloud` 這類 CLI，它們不會增加逐一列出的工具清單。",
        },
        {
          title: "用 hook 過濾雜訊多的輸出",
          text: "PreToolUse hook 可以改寫測試指令，只保留失敗的結果，把數萬 token 的日誌縮減到幾百個。Anthropic 的文件附有現成的過濾腳本。",
          code: hook,
        },
        {
          title: "把冗長的工作交給 subagent",
          text: "在 subagent 裡跑測試、讀文件或處理日誌，輸出會留在它自己的上下文中，只有摘要會回傳。給這些 subagent 配一個較小的模型。",
        },
        {
          title: "安裝程式碼智慧外掛",
          text: "對於有型別的語言，語言伺服器外掛一次呼叫就能完成「前往定義」，不必先 grep 再讀好幾個檔案。",
        },
        {
          title: "寫具體的提示詞",
          text: "「為 auth.ts 裡的 login 函式加上輸入驗證」只需要讀幾個檔案；「改善這個程式碼庫」則會把所有東西掃過一遍。",
        },
        {
          title: "先規劃，及早喊停",
          text: "大型變更用 [plan mode](/blog/claude-code-plan-mode)，在寫程式碼之前就發現方向錯誤；一旦 Claude 偏離方向，立刻按 Escape，再用 `/rewind` 回到檢查點。",
        },
        {
          title: "留意你不在時執行的東西",
          text: "每個排程任務、每次 `/loop` 執行或閒置訊息都會送出你的完整上下文。停掉不需要的迴圈，把 `crossSessionInbound` 設為 `hold`，讓來自其他工作階段的訊息先排隊，並查看 `/usage` 中的 Loops 列。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "用量額度與團隊成本",
      text: [
        "在 Pro、Max 和 Ultra 方案上，用量會計入方案額度，而不是產生帳單；5 小時和每週額度如何運作，參見 [Claude Code 與 Codex 比較](/blog/claude-code-vs-codex)。在 API 上，Anthropic 公布的企業平均費用約為每位開發者每個活躍日 $13、每月 $150 到 $250，90% 的使用者每天低於 $30。",
        "管理員可以為團隊設定支出上限；在受管設定中加入 `modelPricing` 表後，`/usage` 會顯示合約價格，而不是定價。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "按時上班的 agent，不會整晚燒 token",
      text: [
        "任何喚醒工作階段的動作都會送出完整上下文，所以全天候的 agent 需要界線。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成 AI 員工，只在你設定的工作時間內依心跳醒來。",
      ],
      steps: [
        {
          title: "設定工作時間和節奏",
          text: "選擇每 15、30 或 60 分鐘一次，以及它上班的時段；其餘時間它都在休眠。參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "一次只做一個 issue",
          text: "每次心跳都從看板上接手下一個 issue，讓工作階段專注在明確的任務上，而不是漫無目的地探索。",
        },
        {
          title: "使用你已經在付費的方案",
          text: "員工在你現有的訂閱上執行，用量計入方案額度。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "減少 Claude Code token 用量" },
  mid: {
    title: "把 token 花在工作上，而不是等待上。",
    text: "Crewmark 在工作時間內喚醒 Claude Code，帶著職位、目標和看板上的下一個 issue。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude Code token 用量常見問題",
    items: [
      {
        q: "Claude Code 為什麼這麼耗 token？",
        a: "它每次請求都會送出完整對話，而每一輪工具呼叫又是一次新的請求。長工作階段、離開後的快取未命中、subagent，以及你閒置時執行的任何東西，都會累積起來。",
      },
      {
        q: "怎麼查看 Claude Code 的 token 用量？",
        a: "執行 `/usage` 查看工作階段 token、方案用量和附建議的明細，執行 `/context` 查看是什麼塞滿了上下文視窗。狀態列可以隨時顯示上下文用量。",
      },
      {
        q: "最快的省 token 方法是什麼？",
        a: "在不相關的任務之間執行 `/clear`，除非真的需要 Opus 否則用 Sonnet，並讓 CLAUDE.md 保持簡短。這三點就能解決大部分的浪費。",
      },
      {
        q: "/compact 能省 token 嗎？",
        a: "它會縮小後續訊息的上下文，但壓縮本身要讀完整段對話，所以是一次很大的請求。如果不需要延續先前的對話，`/clear` 不花任何 token。",
      },
      {
        q: "MCP 伺服器會消耗 token 嗎？",
        a: "工具定義會延後到使用時才載入，但每個伺服器仍會加入工具名稱和說明。停用不用的伺服器，有 CLI 工具時優先使用 CLI。",
      },
      {
        q: "為什麼我這麼快就用完額度？",
        a: "通常是長工作階段、幾次快取未命中，或是 `/loop`、排程任務、subagent、agent teams 這類背景工作。在付費方案上，`/usage` 會顯示近期用量主要來自哪一項。",
      },
      {
        q: "subagent 能省 token 嗎？",
        a: "它們讓冗長的輸出不進入你的主對話，讓後續請求保持精簡，但它們自己的請求照樣計入用量。給它們配一個較小的模型就能少花一些。",
      },
    ],
  },
  cta: {
    title: "讓 Claude Code 照你定的時間表工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（Manage costs effectively）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
