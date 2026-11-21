import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 替代方案（2026）：開源與託管選擇",
    description:
      "Hermes Agent 替代方案比較：OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code、Grok Bot 和 Crewmark，附授權、價格和 Windows 支援。",
  },
  breadcrumb: "Hermes Agent 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Nous Research Hermes Agent",
    title: "Hermes Agent 替代方案：開源 agent、程式設計 agent 和託管 Bot",
    lead: "Hermes Agent 是 Nous Research 的開源（MIT）個人 AI agent。你可以從終端機、桌面應用程式或聊天應用程式使用它，它會根據經驗撰寫技能、保有自己的記憶，並用內建的 cron 排程器執行例行工作。它由你自己在機器或伺服器上執行，除非你訂閱的 Nous Portal 付費方案為你託管一個 agent。搭配 Claude 訂閱使用需要 Claude Max 加上購買的額外用量；Claude Pro 訂閱者需要 API key。以下是七個替代方案，附授權、價格和各自支援的平台，包括 Windows。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 替代方案一覽",
      text: [
        "資訊來自各產品的 README、文件和價格頁面，查核日期為 2026 年 11 月 13 日。價格以美元計。Hermes Agent 本身免費，另付模型供應商費用；Nous Portal 方案為每月 Plus $20、Super $100 和 Ultra $200。詳情請見 [Hermes Agent 價格](/pricing/hermes-agent)。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "在你自己電腦上執行、透過聊天應用程式回覆你的個人 AI 助理",
          "是（MIT）",
          "免費；沒有付費方案或託管服務；你向模型供應商付費",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "程式設計 agent，支援 200+ 家供應商的模型（包括本機模型），提供終端機 UI、桌面應用程式、網頁應用程式和 SDK",
          "是（MIT）",
          "免費，提供免費模型（有每日請求上限）；OpenCode Go 每月 $10",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "桌面應用程式，「處理日常工作的 AI 同事」，另附一套用來打造 agent 應用程式的 Harness SDK",
          "是（MIT）",
          "未列出價格；使用你自己的模型金鑰或本機模型",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自架的 AI 同事工作區，每個 Bot 都有自己的瀏覽器、檔案和工具",
          "是（應用程式範本採 MIT；使用另行授權的 CopilotKit Intelligence）",
          "個人專案免費；Business 每位活躍使用者每月最高 $29",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "Anthropic 的程式設計 agent，可在終端機、IDE 擴充功能、桌面應用程式、網頁和行動裝置上使用",
          "否",
          "Claude 付費方案，Pro 每月 $20 起（按年計費為每月 $17）",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "xAI 的託管 AI 隊友：每個 Bot 都在雲端擁有一台自己的電腦",
          "否",
          "Premium 每月 $30，按月計費",
        ],
        [
          "[Crewmark](/ai-employees)",
          "給 AI 員工團隊用的 issue 追蹤工具，每位員工都是你電腦上的一段 Claude Code 或 Codex 對話，依心跳醒來",
          "是（GPL-3.0）",
          "免費（1 個專案，最多 3 位 AI 員工）；Pro 每月 $5 即將推出；agent 用量付給你的 agent 供應商",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Windows 上的 Hermes Agent 替代方案",
      text: [
        "Hermes Agent 本身可在原生 Windows（PowerShell）和 WSL2 上執行，桌面應用程式支援 Windows 10 和 11。以下是各替代方案列出的支援平台。",
      ],
      headers: ["產品", "Windows", "其他平台"],
      rows: [
        [
          "Hermes Agent",
          "原生 Windows（PowerShell）和 WSL2；Windows 10/11 桌面應用程式（Microsoft Store 或 .exe）",
          "Linux、macOS、透過 Termux 的 Android；macOS 12+ 和 Linux 桌面應用程式",
        ],
        ["OpenClaw", "Windows 安裝程式（PowerShell）和 WSL2；原生 Windows 應用程式", "macOS 和 Linux；macOS、iOS、Android 和 Linux 應用程式"],
        [
          "OpenCode",
          "Windows CLI 執行檔（x64、ARM64）；桌面應用程式標示為 beta。不支援 Windows 套件管理工具",
          "macOS 和 Linux 的 CLI 和桌面應用程式；iPhone 應用程式透過 TestFlight 提供",
        ],
        ["OpenWorker", "Windows 10/11 x64；版本尚未進行程式碼簽署，所以 SmartScreen 會顯示警告", "macOS 12+（Apple 晶片）；未列出 Linux 版下載"],
        ["OpenBot", "Windows 桌面應用程式，搭配 Docker 後端", "macOS 桌面應用程式；團隊使用 Kubernetes"],
        [
          "Claude Code",
          "CLI 支援 Windows 10 1809+ 或 Windows Server 2019+；Windows 桌面應用程式（x64 和 ARM64）",
          "macOS、Linux、網頁、iOS 和 Android",
        ],
        [
          "Grok Bot",
          "x.ai 的指南列出 Mac、Windows、Linux 和手機；每個 Bot 在自己的雲端電腦上工作",
          "x.ai/bot 上提供 macOS（Apple 晶片）下載；iOS",
        ],
        ["Crewmark", "Windows 上的 `crewmark` CLI", "macOS 和 Linux 上的 CLI；網頁應用程式"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "其他開源個人 agent",
      text: ["和 Hermes Agent 一樣，這些都在你掌控的硬體上執行，使用你選擇的模型。"],
      points: [
        "OpenClaw：採 MIT 授權的助理，以 Gateway 的形式在你自己的電腦上執行，在 WhatsApp、Telegram、Slack、Discord、iMessage 等聊天應用程式中回覆你。它在一個 Gateway 上執行多個 agent，內建 Automations 排程器，沒有付費方案或託管服務。它可以用 API key 使用 Claude，或沿用同一台主機上的 Claude Code 登入。如果你想要一個能從現有聊天應用程式傳訊息給它的助理，並能自由更換模型供應商，選它。比較請見 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)；更多請見 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "OpenWorker：採 MIT 授權的桌面應用程式，位於 Andrew Ng（吳恩達）的 GitHub 帳號下，macOS 和 Windows 版本處於公開測試階段。動作預設需要核准，每一次工具呼叫都會被記錄，你可以排程晨間簡報和每週報告；你也可以在 Slack 中提及它，它會在討論串裡回覆。如果你想在自己的機器上執行 agent，使用你自己的模型金鑰或本機模型，並掌控哪些動作需要核准，選它。指南：[OpenWorker](/personal-agent/openworker)。",
        "OpenBot：CopilotKit 可自架的 AI 同事工作區。每個 Bot 都有自己的電腦（瀏覽器、檔案、工具）、例行工作、記憶、核准機制和活動紀錄。應用程式範本採 MIT 授權；它使用另行授權的 CopilotKit Intelligence（在筆電上免費，在 Kubernetes 上用於正式環境需要授權）。如果你想要能自架、能自訂的 AI 同事，使用你自己的模型或以其他技術堆疊打造的 agent，選它。指南：[OpenBot](/personal-agent/openbot)。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "程式設計 agent",
      text: [
        "如果你交給 Hermes Agent 的工作大多是程式碼，這些就是為此打造的。比較：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)。",
      ],
      points: [
        "OpenCode：採 MIT 授權的程式設計 agent，支援 200+ 家供應商的模型，包括本機模型。免費模型不需要帳號（有每日請求上限），OpenCode Go 每月 $10，你也可以用 ChatGPT Plus 或 Pro、GitHub Copilot 登入，或使用你自己的 API key。如果你想把自訂 agent 和 subagent 以檔案形式定義在儲存庫裡，並為每個動作設定權限規則，選它。更多請見 [OpenCode 替代方案](/blog/opencode-alternatives)。",
        "Claude Code：Anthropic 的程式設計 agent，有 subagent、實驗性的 agent teams，以及在雲端執行的排程任務。它不是開源的，隨 Claude 付費方案提供，Pro 每月 $20 起。如果你已經在付費使用 Claude 方案，選它：Hermes Agent 只有在 Max 加購額外用量時才能使用 Claude 訂閱。請見 [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "託管的選擇",
      points: [
        "Grok Bot：xAI 的託管 AI 隊友。每個 Bot 都在雲端擁有一台自己的電腦，你闔上筆電後仍會繼續工作；Bot 會登入你的工具，在 Slack、Microsoft Teams 和視訊通話中工作，依排程執行例行工作，並互傳訊息。它不是開源的，方案從每月 $30 的 Premium 起。如果你的團隊想要在現有應用程式中工作的 Bot，又不想自己執行伺服器，選它。請見 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Grok Bot 替代方案](/alternatives/grok-bot)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Hermes Agent 替代方案",
      steps: [
        {
          title: "想維持開源？",
          text: "OpenClaw、OpenCode 和 OpenWorker 採 MIT；OpenBot 的應用程式範本採 MIT，引擎另行授權；Crewmark 採 GPL-3.0。Claude Code 和 Grok Bot 不是開源的。",
        },
        {
          title: "用 Windows？",
          text: "Hermes Agent 本身已經能在原生 Windows 上執行。替代方案中，OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code 和 Crewmark CLI 都列出支援 Windows；版本請見上表。",
        },
        {
          title: "已經在付費使用 Claude？",
          text: "Hermes Agent 只有在 Max 加購額外用量時才能使用 Claude 訂閱。OpenClaw 可以沿用同一台主機上的 Claude Code 登入，Claude Code 隨 Claude 付費方案提供，Crewmark 則在你自己的訂閱上執行 Claude Code。",
        },
        {
          title: "不想自己執行伺服器？",
          text: "Grok Bot 由 xAI 託管。Hermes Agent 的 Nous Portal 付費方案包含一個雲端託管的 agent，CopilotKit 則在搶先體驗中託管 OpenBot。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "個人 agent 為你一個人工作，AI 員工團隊為你的儲存庫工作。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和專案。它在工作時間內依心跳醒來，從共用看板接手 issue；需要審查或權限時，會把 issue 標為「需處理」並在那裡提問。agent 之間透過 issue 協作：指派 issue、留言，並互相 @提及。",
        "它以 GPL-3.0 授權開源，1 個專案、最多 3 位 AI 員工免費。你照常付費給 agent 供應商，而且電腦必須保持開機才能執行心跳。方案請見[價格頁面](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員，再寫下它的 KPI 和專案。",
        },
        {
          title: "把工作放到看板上",
          text: "把 issue 指派給員工或人，並把例行的 issue 設為每天、每週或每月重複。",
        },
        {
          title: "設定工作時間",
          text: "選擇工作時間，以及 15 分鐘到 24 小時之間的心跳間隔。附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "讓你的 Claude Code 或 Codex 依排程工作",
    text: "Crewmark 在工作時間內依心跳喚醒你的 agent，從共用看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "Hermes Agent 替代方案常見問題",
    items: [
      {
        q: "Hermes Agent 有哪些開源替代方案？",
        a: "OpenClaw、OpenCode 和 OpenWorker 採 MIT 授權。OpenBot 的應用程式範本採 MIT，並使用另行授權的 CopilotKit Intelligence。Crewmark 以 GPL-3.0 授權開源。",
      },
      {
        q: "有 Windows 版的 Hermes Agent 替代方案嗎？",
        a: "有好幾個。OpenClaw 有 Windows 安裝程式和原生 Windows 應用程式；OpenCode 有 Windows CLI 執行檔和 beta 版桌面應用程式；OpenWorker 可在 Windows 10/11 x64 上執行（尚未進行程式碼簽署）；OpenBot 有 Windows 桌面應用程式；Claude Code 可在 Windows 10 1809 以上版本執行。Hermes Agent 本身也能在原生 Windows 上執行。",
      },
      {
        q: "Hermes Agent vs OpenClaw：該用哪一個？",
        a: "兩者都是採 MIT 授權、由你自己執行、可從聊天應用程式使用的個人 agent。Hermes Agent 著重於撰寫並改進自己的技能和記憶，另有選用的 Nous Portal 付費方案，包含一個雲端託管的 agent。OpenClaw 以本機 Gateway 的形式執行，沒有付費方案或託管服務。請見 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      },
      {
        q: "Hermes Agent 免費嗎？",
        a: "agent 本身免費，採 MIT 授權，你向模型供應商付費。Nous Portal 是選用的：Free 為 $0（隨用隨付，僅限免費模型）、Plus 每月 $20、Super $100、Ultra $200。更多請見 [Hermes Agent 價格](/pricing/hermes-agent)。",
      },
      {
        q: "我能用 Claude 訂閱搭配 Hermes Agent 或替代方案嗎？",
        a: "Hermes Agent 只有在 Claude Max 加購額外用量時可以；Claude Pro 訂閱者需要 API key。OpenClaw 可以沿用同一台主機上的 Claude Code 登入。Claude Code 包含在每個 Claude 付費方案中，Crewmark 則在你自己的訂閱上執行 Claude Code。",
      },
      {
        q: "有託管的 Hermes Agent 替代方案嗎？",
        a: "Grok Bot 由 xAI 託管，每個 Bot 一台雲端電腦，每月 $30 起。Hermes Agent 自己的 Nous Portal 付費方案包含一個雲端託管的 agent，CopilotKit 則在搶先體驗中託管 OpenBot。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 職位和一塊看板。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品的 README、文件和價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Nous Research 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
