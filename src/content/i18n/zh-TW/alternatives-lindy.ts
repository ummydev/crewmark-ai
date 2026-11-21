import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI 替代方案（2026）：免費與開源選擇",
    description:
      "Lindy AI 替代方案比較：Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Relevance AI，以及開源的 OpenWorker 和 OpenBot，附免費選擇。",
  },
  breadcrumb: "Lindy 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Lindy",
    title: "Lindy AI 替代方案：託管的 AI 同事、agent 平台和開源助理",
    lead: "Lindy 是託管的 AI 助理，橫跨你的收件匣、行事曆、會議和 Slack 工作，執行定期的例行工作，任何會對外產生影響的動作都會先問過你。它以額度計費：一開始有 7 天內有效的 $50 免費額度，之後每位活躍使用者每月 $29.99 起，含 3,000 額度。每月額度不會累積到下個月，而且每位活躍使用者都會計費，包括只在 Slack 中 @提及 Lindy 的人。以下是 8 個替代方案，有託管的也有開源的，並列出各自的費用。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy 替代方案一覽",
      text: ["資訊來自各廠商自己的頁面、文件或 GitHub，查核日期為 2026 年 11 月 13 日。價格以美元計。本表並非排名。"],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy)（供參考）",
          "處理收件匣、行事曆、會議和 Slack 的託管 AI 助理",
          "否",
          "7 天 $50 免費額度；之後每位活躍使用者每月 $29.99 起，含 3,000 額度",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "xAI 的託管 AI 隊友，每個都有自己的雲端電腦",
          "否",
          "Premium 每月 $30",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Anthropic 在 Claude 應用程式中處理非程式知識工作的 agent",
          "否",
          "Claude Pro 每月 $20，按年計費為每月 $17",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 在 Microsoft 365 中完成多步驟任務的 agent",
          "否",
          "Microsoft 365 Copilot 授權，加上每個 $0.01 的 Copilot Credits",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI 在 ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務",
          "否",
          "Free（$0）和 Go（每月 $8）：有限使用，僅限桌面應用程式；Plus 每月 $20",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "託管的低程式碼平台，用來建構 AI agent 和多 agent 團隊",
          "否",
          "僅提供 Enterprise，需洽業務；Free 方案已停用",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "在你的機器上執行的 AI 同事桌面應用程式",
          "是，MIT",
          "未列出價格；使用你自己的模型金鑰或本機模型",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自架的 AI 同事工作區",
          "是，MIT（使用另行授權的 CopilotKit Intelligence）",
          "個人專案免費；Business 每位活躍使用者每月最高 $29",
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
      id: "hosted",
      title: "xAI、Anthropic、Microsoft 和 OpenAI 的託管 AI 同事",
      text: [
        "和 Lindy 一樣，這些在廠商的雲端執行，透過對話接受工作。更多並排比較請見 [AI 同事工具](/blog/ai-coworker)。",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot)（xAI）：每個 Bot 都有自己的雲端電腦，會登入你的工具，在 Slack 和 Microsoft Teams 中工作，依排程執行例行工作，並互傳訊息。現成的 Bot 包括 Sales Outbound、Talent Scout 和 Chief of Staff。它包含在 Premium（每月 $30）、Super（每月 $100）和 Ultra（每月 $200）方案中，按月計費，超出的用量依 token 成本計費。如果你想要幾個各有職責的 Bot，包括在 Microsoft Teams 中工作，選它。請見 [Grok Bot 指南](/personal-agent/grok-bot)。",
        "[Claude Cowork](/personal-agent/claude-cowork)（Anthropic）：你描述想要的成果，Claude 就在你的檔案、Gmail 和 Slack 等已連結的應用程式，以及瀏覽器中，完成研究、文件、含可用公式的試算表和簡報。排程任務在雲端每小時、每天、每週或每個工作日執行。它隨 Claude 付費方案提供：Pro 每月 $20（按年計費為每月 $17）、Max $100、Ultra $200，另有 Team 和 Enterprise 席位。如果你想拿回完成的檔案，而不是收件匣方面的協助，選它。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：寄送電子郵件、安排會議、編輯 Word、Excel 和 PowerPoint 檔案，並在 Teams 中發文，執行敏感動作前會跳出核准對話框。它需要 Microsoft 365 Copilot 授權，用量以每個 $0.01 的 Copilot Credits 計費。如果你的公司以 Outlook 和 Teams 為主，選它。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務，有 Slack、Google Drive、SharePoint、電子郵件、行事曆和 CRM 的外掛，支援排程任務，符合資格的方案還能由 Gmail、Slack 或 GitHub 觸發。Free 和 Go 可在桌面應用程式中有限使用；Plus 每月 $20 起可完整使用。如果你已經在用 ChatGPT，選它。",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "給團隊用的 agent 平台：Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai)：託管的低程式碼平台，你可以建構各有指示、工具和知識的專職 agent，再把它們串成多 agent 團隊（它稱為 AI Workforce），用於業務、客服和營運工作。截至 2026 年 11 月 13 日，它的價格頁面只列出 Enterprise，需洽業務，文件也說 Free 方案已停用。如果你的公司想要幾個無程式碼 agent，以及一支進駐協助的部署團隊，選它。請見 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) 和 [Relevance AI 價格](/pricing/relevance-ai)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "開源的 Lindy 替代方案",
      text: ["兩者都在你自己的電腦或伺服器上執行，使用你選擇的模型，也都不以額度計費：你直接向模型供應商付費。"],
      points: [
        "[OpenWorker](/personal-agent/openworker)：採 MIT 授權的 AI 同事桌面應用程式，支援 macOS 和 Windows，處於公開測試階段。它橫跨 GitHub、Slack、電子郵件和行事曆工作；你在 Slack 中 @提及它時，任務會在你的桌面上執行，答案再回到討論串中。你可以排程晨間簡報和每週報告；排程執行從不自行核准自己的動作，這些請求會在收件匣中等候。你可以使用 OpenAI、Anthropic、Google Gemini 或 OpenRouter 的金鑰，或使用本機模型。如果你想要 Lindy 式的辦公協助，又想把金鑰留在自己的機器上，選它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自架的工作區，每個 Bot 都有自己的瀏覽器、檔案、工具、例行工作、記憶和核准機制。它以 Mac 和 Windows 桌面應用程式的形式執行，團隊則可在 Kubernetes 上執行，前端包括 Slack 和 Teams 等（部分處於搶先體驗階段）。個人專案免費；OpenBot for Business 每位活躍使用者每月最高 $29，另加每月模型支出超過 $5,000 部分的 5%。如果你想在自己的基礎架構上為團隊託管 AI 同事，選它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Lindy 替代方案",
      steps: [
        {
          title: "算算有多少人會用",
          text: "Lindy 會向每位活躍使用者計費，包括只在 Slack 中 @提及它的人。Grok Bot 列出的個人方案每月 $30 起；Copilot Cowork 需要 Microsoft 365 Copilot 授權，並依 Copilot Credit 計費；OpenWorker 未列出價格，OpenBot 個人專案免費。",
        },
        {
          title: "決定用量要怎麼付費",
          text: "Lindy 的每月額度不會累積到下個月，加購為每 1,000 額度 $10。Grok Bot 以及 Claude 和 ChatGPT 方案都是有用量上限的訂閱。使用 OpenWorker 和 OpenBot 時，你直接向模型供應商付費。",
        },
        {
          title: "配合工作發生的地方",
          text: "Slack 和 Microsoft Teams：Grok Bot。Microsoft 365：Copilot Cowork。要交回文件和試算表：Claude Cowork 或 ChatGPT Work。業務或客服需要很多 agent：Relevance AI。",
        },
        {
          title: "選擇託管或自架",
          text: "Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Relevance AI 都是託管的。OpenWorker 在你的桌面上執行，OpenBot 則在你的筆電或你自己的 Kubernetes 叢集上執行。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Crewmark：在你已經付費的 Claude Code 或 Codex 上執行 AI 員工",
      text: [
        "Crewmark 不是像 Lindy 那樣的收件匣助理。它是給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue，並隨時更新 issue 的狀態。Crewmark 不對用量收費：agent 在你已經付費的 Claude 或 ChatGPT 訂閱上執行，而且電腦必須保持開機才能執行心跳。",
        "Free 方案包含 1 個專案和最多 3 位 AI 員工。Pro（每月 $5）和 Team（每月 $10）即將推出；計費功能尚未完成，所以在那之前所有帳號都能免費使用 Crewmark。它是開源的（GPL-3.0）。詳情請見 [Crewmark 價格](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "為每位員工設定職位、目標和專案，例如 SEO 專員或資料分析師。請見 [AI 員工職位](/ai-employees)。",
        },
        {
          title: "把例行工作放到看板上",
          text: "讓 issue 每天、每週或每月重複；到期時 issue 會重新開啟，並通知負責的員工。agent 需要審查或權限時，會把 issue 標為「需處理」並等候。",
        },
        {
          title: "設定工作時間",
          text: "在工作時間內，心跳每隔 15 分鐘到 24 小時喚醒每位員工一次。附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "不想按額度付費？",
    text: "Crewmark 在你已經有的 Claude Code 或 Codex 訂閱上執行 AI 員工。最多 3 位員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "Lindy 替代方案常見問題",
    items: [
      {
        q: "有免費的 Lindy 替代方案嗎？",
        a: "有。ChatGPT Free（$0）可在桌面應用程式中有限使用 ChatGPT Work。OpenWorker 未列出價格，使用你自己的模型金鑰或本機模型執行，OpenBot 個人專案免費。Crewmark 的 Free 方案包含 1 個專案和最多 3 位 AI 員工。Lindy 本身一開始有 7 天內有效的 $50 額度，每位成員只能使用一次。",
      },
      {
        q: "有開源的 Lindy 替代方案嗎？",
        a: "OpenWorker（MIT）和 OpenBot（MIT 應用程式範本，建立在另行授權的 CopilotKit Intelligence 上）是開源的，Crewmark（GPL-3.0）也是。Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Relevance AI 都不是開源的。",
      },
      {
        q: "Lindy vs Relevance AI：有什麼差別？",
        a: "Lindy 是一個處理收件匣、行事曆、會議和 Slack 的託管助理，依每位活躍使用者以額度計費。Relevance AI 是低程式碼平台，用來建構許多專職 agent 並把它們串成 Workforce；它的價格頁面只列出 Enterprise，需洽業務。請見 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      },
      {
        q: "哪個 Lindy 替代方案能在 Slack 中使用？",
        a: "Grok Bot 像同事一樣在 Slack 和 Microsoft Teams 中工作。使用 OpenWorker 時，你在 Slack 中 @提及它，它會在討論串裡回覆。OpenBot 有 Slack 前端（部分前端處於搶先體驗階段），ChatGPT Work 有 Slack 外掛，符合資格的方案還有 Slack 觸發，Claude Cowork 則有 Slack 連接器。",
      },
      {
        q: "有能在我自己電腦上執行的 Lindy 替代方案嗎？",
        a: "OpenWorker 在你的機器上執行 agent 迴圈，並把對話和模型金鑰留在那裡。OpenBot 以 Mac 和 Windows 桌面應用程式的形式執行，或在你自己的 Kubernetes 叢集上執行。Crewmark 的 agent 在你電腦上的 Claude Code 或 Codex 中執行。",
      },
      {
        q: "為什麼有人在找 Lindy 替代方案？",
        a: "原因是 Lindy 自己說明的限制：每月額度不會累積到下個月，用完時 Lindy 會暫停消耗額度的動作，直到下個週期或加購（每 1,000 額度 $10）。每位活躍使用者都會計費，包括只在 Slack 中 @提及它的人。免費額度只有 7 天，而在 Microsoft Teams 中使用 Lindy 仍標示為即將推出。",
      },
    ],
  },
  cta: {
    title: "給你的 agent 一份工作，而不是一筆額度餘額。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品自己的頁面、文件、價格和 GitHub 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Lindy、xAI、Anthropic、Microsoft、OpenAI、Relevance AI、CopilotKit 或 OpenWorker 的開發者均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
