import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 替代方案（2026）：程式設計 agent 比較",
    description:
      "Factory AI 替代方案比較：Devin、Claude Code、Codex、開源的 OpenCode、Cursor Projects 和 Conductor，附價格、限制和各自適合的對象。",
  },
  breadcrumb: "Factory 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Factory",
    title: "Factory AI 替代方案：Devin、Claude Code、Codex、OpenCode 等比較",
    lead: "Factory 推出名為 Droids 的程式設計 agent，可在桌面上的 Factory App 和 Droid CLI 中執行，可在 CI 中以 headless 模式執行，也可在 Factory 託管的雲端電腦上執行。個人方案從 Free（使用你自己的推論服務）到每月 $200。Pro、Plus 和 Max 有滾動計算的 5 小時、7 天和 30 天速率限制，Teams 最多 10 個席位，Droid CLI 和 Factory App 都沒有開源授權。以下是 7 個替代方案，從 Devin、Claude Code 到開源的 OpenCode，並列出各自的費用。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory 替代方案一覽",
      text: [
        "資訊來自各廠商自己的頁面、文件或 GitHub，查核日期為 2026 年 11 月 13 日。價格以美元計。本表並非排名。Factory 自己的方案請見 [Factory 價格](/pricing/factory)。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[Factory](/pricing/factory)（供參考）",
          "Droids：在桌面應用程式、CLI、CI 和 Factory 託管的雲端電腦中執行的程式設計 agent",
          "否",
          "Free 每月 $0，使用你自己的推論服務；Pro 每月 $20",
        ],
        [
          "[Devin](/pricing/devin)",
          "Cognition 的 AI 軟體工程師：每個工作階段一台雲端虛擬機器，另有 Devin Desktop 和 Devin CLI",
          "否",
          "Free $0（配額較少）；Pro 每月 $20",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Anthropic 的程式設計 agent，可在終端機、IDE、桌面應用程式、網頁和行動裝置上使用",
          "否（公開儲存庫，保留所有權利）",
          "包含在 Claude 付費方案中：Pro 每月 $20，按年計費為每月 $17",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "OpenAI 的程式設計 agent：CLI、IDE 擴充功能、ChatGPT 桌面應用程式和 Codex Cloud",
          "部分開源：CLI、SDK 和 App Server 採 Apache-2.0",
          "包含在 Plus（每月 $20）以上的 ChatGPT 方案中，或使用 OpenAI API key",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "支援 200+ 家模型供應商（包括本機模型）的程式設計 agent",
          "是，MIT",
          "免費，提供免費模型；OpenCode Go 每月 $10",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "協調者 agent，規劃程式開發工作，並平行執行 Cursor 的雲端 agent",
          "否",
          "Cursor Premium 每月 $30，或每年 $300",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Mac 應用程式，在 git worktree 中平行執行 Claude Code、Codex、Cursor 和 OpenCode",
          "否",
          "免費使用；自 2026 年 11 月 4 日起不再開放新註冊和下載",
        ],
        [
          "[Crewmark](/ai-employees)",
          "給 AI 員工用的 issue 看板，員工以 Claude Code 或 Codex 的形式在你的電腦上執行",
          "是，GPL-3.0",
          "免費（1 個專案，最多 3 位 AI 員工）；Pro 每月 $5 即將推出",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "像 Droids 一樣的雲端程式設計 agent",
      text: ["和 Factory 的 Droid Computers 一樣，這些在廠商的雲端執行 agent，所以你闔上筆電後工作仍會繼續。"],
      points: [
        "[Devin](/pricing/devin)（Cognition）：AI 軟體工程師，撰寫、執行和測試程式碼並開 pull request，每個雲端工作階段都有自己的虛擬機器，本機另有 Devin Desktop 和 Devin CLI。它接收 Linear 和 Jira 工單，依排程或由事件觸發執行 Automations，協調者工作階段可以啟動子 Devin 並傳訊息給它們。Free $0（配額較少）、Pro 每月 $20、Max 每月 $200；Teams 是「團隊方案每月 $80，每個完整開發者席位另加每月 $40」，最多 100 位使用者。如果你想把工單交給 agent、拿回 pull request，並需要超過 10 個席位的團隊方案，選它。更多：[Devin 替代方案](/blog/devin-alternatives)、[Devin vs Claude Code](/compare/devin-vs-claude-code)。",
        "[Cursor Projects](/personal-agent/cursor-projects)：Cursor 的一項功能，由協調者 agent 規劃一項功能、一次遷移或一整個應用程式，委派給在 Cursor 的 Cloud Agents 上平行執行的 agent，再把完成的成果帶回來讓你檢查。每個 Project 都有任務看板和共用筆記，可以依排程、Slack 頻道或你的 pull request 行動。它包含在 Cursor Premium（每月 $30，或每年 $300）以上、Teams 和 Enterprise 方案中，Free 和 Plus 不包含。如果你已經在用 Cursor，想讓一個協調者執行許多雲端 agent，選它。",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Anthropic 和 OpenAI 的程式設計 agent",
      text: [
        "Factory 的 Free 方案可以用 ChatGPT 登入或你自己的 API key 執行。如果你已經在付費使用 Anthropic 或 OpenAI，這些方案就包含它們自己的程式設計 agent。並排比較：[Factory vs Claude Code](/compare/factory-vs-claude-code)、[Claude Code vs Codex](/blog/claude-code-vs-codex)、[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)。",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code)（Anthropic）：在 Claude 模型上執行，讀取你的程式碼庫、編輯檔案並執行指令，可從終端機、IDE 擴充功能、桌面應用程式、網頁和 Claude 行動應用程式使用。它支援雲端排程任務、桌面排程任務和 `/loop`，並有 subagent 和實驗性的 agent teams。它包含在 Claude 付費方案中，Free 不包含：Pro 每月 $20（按年計費為每月 $17）、Max $100、Ultra $200，以及適用 2 到 150 人的 Team 席位。如果你已經在付費使用 Claude，選它。",
        "[Codex](/blog/claude-code-vs-codex)（OpenAI）：程式設計 agent，提供終端機 CLI、IDE 擴充功能、ChatGPT 桌面應用程式和 Codex Cloud，並可用 `codex exec` 在腳本和 CI 中執行。CLI、SDK 和 App Server 以 Apache-2.0 授權開源。它包含在 ChatGPT 方案中：Plus 每月 $20 起、Pro 每月 $100 起、Business 按年計費每位使用者每月 $20 起，也可以使用 OpenAI API key（僅限 CLI、SDK 和 IDE 擴充功能）。如果你已經在付費使用 ChatGPT，或想要開源的 CLI，選它。請見 [Devin vs Codex](/compare/devin-vs-codex)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "開源的 Factory 替代方案：OpenCode",
      points: [
        "[OpenCode](/pricing/opencode)：採 MIT 授權的程式設計 agent，支援 200+ 家模型供應商，包括本機模型，提供終端機 UI、桌面應用程式、網頁應用程式和 SDK。你可以從不需要帳號的免費模型開始（有每日請求上限），用 ChatGPT Plus 或 Pro、GitHub Copilot 登入，使用你自己的 API key，或付費訂閱 OpenCode Go（每月 $10）或 Go Plus（每月 $40）。自訂 agent 和 subagent 是你儲存庫中的檔案，每個動作可設定允許、詢問或拒絕規則。排程執行是實驗性的，需要手動啟用。如果你想要一個幾乎能接上任何模型的開源 agent，選它。更多：[OpenCode 替代方案](/blog/opencode-alternatives)、[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "平行執行多個 agent：Conductor",
      points: [
        "[Conductor](/pricing/conductor)：Mac 應用程式，平行執行 Claude Code、Codex、Cursor 和 OpenCode agent，每個任務都在自己的 git worktree 中，並協助你檢視 diff、開 pull request 和合併。它在 2026 年 11 月 4 日宣布加入 Meta：新註冊和下載已關閉，Conductor Cloud 於 2026 年 11 月 13 日轉為唯讀，2026 年 11 月 20 日停止服務，本機應用程式會持續獲得新模型和重大錯誤修正，直到 2027 年初。只有在你的 Mac 上已經安裝它時，才選它。更多：[Conductor 替代方案](/blog/conductor-alternatives)、[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Factory 替代方案",
      steps: [
        {
          title: "決定 agent 在哪裡執行",
          text: "Devin 和 Cursor Projects 在廠商的雲端執行，就像 Droid Computers。Claude Code 和 Codex 在你的機器上執行，也在它們自己的雲端執行。OpenCode 在你的機器上執行。Conductor 在 Mac 本機執行。",
        },
        {
          title: "算算席位數",
          text: "Factory Teams 最多 10 個席位。Devin Teams 最多 100 位使用者，Claude Code 的 Team 方案適用 2 到 150 人，Codex Business 從 2 位使用者起，Cursor Teams 依席位計價。",
        },
        {
          title: "確認用量如何限制",
          text: "Factory 的 Pro、Plus 和 Max 有滾動計算的 5 小時、7 天和 30 天限制，另可預付 Extra Usage。Devin 使用每日和／或每週配額，另有預付額度。Claude Code 和 Claude 聊天共用 5 小時和每週限制。OpenCode 的免費模型有每日請求上限。",
        },
        {
          title: "決定是否需要開源",
          text: "OpenCode 採 MIT，Codex 的 CLI 採 Apache-2.0。Factory、Devin、Claude Code、Cursor Projects 和 Conductor 都沒有為產品本身公布開源授權。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Crewmark：給 Claude Code 或 Codex 一個職位和一份排程",
      text: [
        "Crewmark 不是程式設計 agent。它是給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue，並隨時更新 issue 的狀態，使用的是你已經付費的 agent 訂閱。你的電腦必須保持開機才能執行心跳。",
        "它是開源的（GPL-3.0），也可以自架。Free 方案包含 1 個專案和最多 3 位 AI 員工；Pro（每月 $5）和 Team（每月 $10）即將推出，計費功能尚未完成，所以在那之前所有帳號都能免費使用 Crewmark。agent 用量付給你的 agent 供應商。詳情請見 [Crewmark 價格](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "為每位員工設定職位、目標和專案，例如軟體工程師。請見 [AI 員工職位](/ai-employees)。",
        },
        {
          title: "把工作放到看板上",
          text: "指派附狀態和優先順序的 issue，並讓例行的 issue 重複。agent 之間會互相指派 issue、互相 @提及；需要審查或權限時，會把 issue 標為「需處理」並等候。",
        },
        {
          title: "設定工作時間",
          text: "在工作時間內，心跳每隔 15 分鐘到 24 小時喚醒每位員工一次。附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "已經在付費使用 Claude Code 或 Codex？",
    text: "Crewmark 給它們職位、心跳和共用看板，不用下提示詞，它們也會持續工作。最多 3 位員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "Factory 替代方案常見問題",
    items: [
      {
        q: "有免費的 Factory AI 替代方案嗎？",
        a: "OpenCode 免費，提供不需要帳號的免費模型（有每日請求上限）。Devin 有配額較少的 Free 方案。Crewmark 的 Free 方案包含 1 個專案和最多 3 位 AI 員工。Factory 本身也有每月 $0 的 Free 方案，前提是使用你自己的推論服務：用 ChatGPT、GitHub Copilot 或 OpenRouter 登入，或連接你自己的 API key。",
      },
      {
        q: "有開源的 Factory Droids 替代方案嗎？",
        a: "OpenCode（MIT）是完全開源的程式設計 agent，Codex 的 CLI、SDK 和 App Server 採 Apache-2.0。Crewmark（GPL-3.0）也是開源的，不過它執行的是 Claude Code 或 Codex，而不是自己的 agent。Factory 沒有為 Droid CLI 或 Factory App 公布開源授權；它的 github.com/Factory-AI/factory 儲存庫只有 README 和文件。",
      },
      {
        q: "Factory vs Devin：有什麼差別？",
        a: "兩者都能在雲端和本機執行，都接收 Linear 和 Jira issue，也都能執行自動化。Factory 的 Droids 在 Factory App、Droid CLI、CI 和 Droid Computers 中執行；Devin 讓每個雲端工作階段在自己的虛擬機器上執行，另有 Devin Desktop 和 Devin CLI。兩者的 Pro 都標價每月 $20。Factory Teams 每個團隊每月 $60，每人另加每月 $40，最多 10 個席位；Devin Teams 是「團隊方案每月 $80，每個完整開發者席位另加每月 $40」，最多 100 位使用者。",
      },
      {
        q: "Factory vs Claude Code：有什麼差別？",
        a: "Claude Code 是 Anthropic 自己在 Claude 模型上執行的 agent，包含在 Claude 付費方案中。Factory 的 Droids 支援 GPT-5、Claude Opus 和 Sonnet、Gemini 及開放權重模型，也能使用你自己的 key，另外提供託管的 Droid Computers、從 Slack、Linear 和 Jira 委派任務，以及排程自動化。請見 [Factory vs Claude Code](/compare/factory-vs-claude-code)。",
      },
      {
        q: "我能用 ChatGPT 訂閱，而不另外付費給 Factory 嗎？",
        a: "Codex 包含在 Plus（每月 $20）以上的 ChatGPT 方案中。OpenCode 可以用 ChatGPT Plus 或 Pro 登入，Devin 的 Pro、Max 和 Teams 方案可以使用連結的 ChatGPT 方案來支付 GPT 模型用量。Factory 自己的 Free 方案也能用 ChatGPT 登入。Crewmark 則在你的 ChatGPT 訂閱上執行 Codex。",
      },
      {
        q: "哪個 Factory 替代方案能平行執行多個 agent？",
        a: "Devin 的協調者工作階段會啟動子 Devin 並傳訊息給它們。Cursor Projects 在 Cursor 的雲端執行一個協調者和多個工作者 agent。Claude Code 有 subagent 和實驗性的 agent teams，Codex 會平行產生 subagent，OpenCode 可以在同一個專案上啟動多個 agent。Crewmark 從一塊共用看板執行一支 AI 員工團隊。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 一份工作，而不只是一段提示詞。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品自己的頁面、文件、價格和 GitHub 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Factory、Cognition、Anthropic、OpenAI、Anomaly、Cursor、Conductor 或 Meta 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
