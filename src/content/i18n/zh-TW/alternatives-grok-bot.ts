import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 替代方案（2026）：開源、免費與託管選擇",
    description:
      "Grok Bot 替代方案比較：Claude Cowork、Copilot Cowork、ChatGPT Work、Lindy、OpenBot、OpenWorker、Hermes Agent 和 Crewmark，依授權和價格比較。",
  },
  breadcrumb: "Grok Bot 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · xAI Grok Bot",
    title: "Grok Bot 替代方案：開源、免費和託管的 AI 隊友",
    lead: "Grok Bot 是 xAI 推出的一組託管「AI 隊友」：每個 Bot 都在雲端擁有一台自己的電腦，登入你的工具和應用程式，在 Slack 和 Microsoft Teams 中工作，執行例行工作，並彼此交接任務。它在 2026 年 8 月 11 日以 beta 版推出，現在已結束 beta。它不是開源的，方案從每月 $30 的 Premium 起，Teams 和 Enterprise 需洽業務。以下是八個替代方案，從 Claude、ChatGPT 和 Microsoft 365 裡的 AI 同事，到 GitHub 上的開源專案，附授權、價格和各自適合的對象。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot 替代方案一覽",
      text: [
        "資訊來自各產品的官網、文件和價格頁面，查核日期為 2026 年 11 月 13 日。價格以美元計。Grok Bot：Premium 每月 $30、Super 每月 $100、Ultra 每月 $200，按月計費，含每週用量，超出的用量依 token 成本計費。更多請見我們的 [Grok Bot 指南](/personal-agent/grok-bot)。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Anthropic 在 Claude 應用程式中處理非程式工作的 agent：研究、文件、試算表和簡報",
          "否",
          "Claude 付費方案，Pro 每月 $20 起（按年計費為每月 $17）；Free 不包含",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 Copilot 中的 agent，在 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 之間完成多步驟任務",
          "否",
          "Microsoft 365 Copilot 授權，加上每個 $0.01 的 Copilot Credits，隨用隨付，按月計費",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務，例如簡報、試算表和分析",
          "否",
          "Free（$0）和 Go（每月 $8）僅能在桌面應用程式中有限使用；Plus 每月 $20 起可完整使用",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "處理收件匣、行事曆、會議和後續追蹤的託管助理，在 Slack 中與你的團隊共用",
          "否",
          "免費：7 天內 $50 額度；每位活躍使用者每月 $29.99，含 3,000 額度",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "CopilotKit 可自架的 AI 同事工作區，每個 Bot 都有自己的瀏覽器、檔案和工具",
          "是（應用程式範本採 MIT；使用另行授權的 CopilotKit Intelligence）",
          "個人專案免費；Business 每位活躍使用者每月最高 $29",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "桌面應用程式，「處理日常工作的 AI 同事」，在你的機器上執行，附核准機制和稽核紀錄",
          "是（MIT）",
          "未列出價格；使用你自己的模型金鑰或本機模型",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "Nous Research 的個人 agent，其中的 Bot 擁有各自的模型和例行工作，並互傳訊息",
          "是（MIT）",
          "agent 免費，另付模型供應商費用；選用的 Nous Portal Plus 每月 $20",
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
      kind: "text",
      id: "big-vendors",
      title: "Anthropic、Microsoft 和 OpenAI 的 AI 同事",
      text: [
        "和 Grok Bot 一樣是託管服務，而且包含在許多團隊已有的方案中。三者的比較請見 [AI 同事工具](/blog/ai-coworker)。",
      ],
      points: [
        "Claude Cowork：Anthropic 處理知識工作的 agent。你描述想要的成果，它就在你的檔案、已連結的應用程式和瀏覽器中完成研究、文件、試算表和簡報。任務在 Anthropic 的雲端執行，闔上筆電也會繼續進行，排程任務可以每小時、每天、每週或每個工作日執行。如果你已經在付費使用 Claude，並希望多步驟工作以檔案形式交回，選它。請見 [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) 和 [Claude Cowork 替代方案](/alternatives/claude-cowork)。",
        "Copilot Cowork：Microsoft 365 Copilot 中的 agent，會寄送電子郵件、安排會議、編輯 Word、Excel 和 PowerPoint 檔案，並在 Teams 中發文，執行敏感動作前會跳出核准對話框。它的模型選擇器包括 GPT、Claude 和 Grok 模型，依租用戶設定而定。如果你的工作都在 Outlook、Teams、OneDrive 和 SharePoint 裡，選它。指南：[Copilot Cowork](/personal-agent/copilot-cowork)。",
        "ChatGPT Work：ChatGPT 中的 Work 模式，會規劃任務，使用你的檔案、外掛、網路、瀏覽器和程式碼，再交回一份待你審閱的成果。它和 Codex 共用用量上限；Plus（每月 $20）和 Pro（每月 $100 起）可在桌面版、網頁版和行動版使用。如果任務有明確的成果，又涉及多個來源或步驟，選它。指南：[ChatGPT Work](/personal-agent/chatgpt-work)。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "處理辦公室工作的託管助理",
      points: [
        "Lindy：一個共用的助理，而不是好幾個 Bot。它處理收件匣、行事曆、會議、研究和後續追蹤，你可以從 Slack、電子郵件、iMessage、電話和 Gmail 中的 Chrome 擴充功能使用它。任何會對外產生影響的動作（例如寄送電子郵件）都會等你核准，Routines 依排程或由事件觸發執行。每位活躍使用者都占一個付費席位，包括只在 Slack 中 @提及它的人。如果你的團隊想要一個能在 Slack 中 @提及、負責報告、研究和 CRM 更新的助理，選它。指南：[Lindy](/personal-agent/lindy)；更多請見 [Lindy 替代方案](/alternatives/lindy)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "GitHub 上的開源 Grok Bot 替代方案",
      text: ["這些由你自己執行，並使用你自己的模型金鑰。星數為 2026 年 11 月 13 日的 GitHub 數據。"],
      points: [
        "OpenBot（`github.com/CopilotKit/OpenBot`，11,652 顆星）：和 Grok Bot 一樣，每個 Bot 都有一台自己的電腦，附瀏覽器、檔案和工具，另有例行工作、核准機制和活動紀錄。它以 Mac 和 Windows 桌面應用程式的形式執行，團隊則可在 Kubernetes 上執行，並透過 AG-UI 接入你自己的 agent。如果你想要採 MIT 授權、能自架和自訂的 AI 同事，選它。請見 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "OpenWorker（`github.com/andrewyng/openworker`，19,050 顆星）：macOS 和 Windows 桌面應用程式，處於公開測試階段。動作預設需要核准，每一次工具呼叫都會被記錄，排程任務涵蓋晨間簡報和每週報告等工作，你也可以在 Slack 中提及它，在討論串裡收到回覆。如果你想在自己的機器上執行 agent（包括搭配本機模型），選它。指南：[OpenWorker](/personal-agent/openworker)。",
        "Hermes Agent（`github.com/NousResearch/hermes-agent`，262,923 顆星）：Nous Research 的個人 agent。它的 Bot Mode 把設定檔變成具名的 Bot，每個 Bot 都有自己的聊天、角色、模型、記憶、技能和頭像，Bot 之間直接互傳訊息。它在 Telegram、Discord、Slack、WhatsApp、Signal 和電子郵件中回覆。如果你想在自己的機器或伺服器上執行幾個專職 Bot，選它。請見 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Grok Bot 替代方案",
      steps: [
        {
          title: "從你已經付費的方案開始",
          text: "Claude 付費方案包含 Claude Cowork；ChatGPT 方案包含 Work（Free 和 Go 為有限使用）；Copilot Cowork 需要 Microsoft 365 Copilot 授權加上 Copilot Credits。",
        },
        {
          title: "決定它在哪裡執行",
          text: "Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work 和 Lindy 在廠商的雲端執行。OpenWorker 在你的機器上執行，OpenBot 在你的筆電或 Kubernetes 上，Hermes Agent 則在你的機器或伺服器上。",
        },
        {
          title: "確認團隊在哪裡溝通",
          text: "Grok Bot 在 Slack、Microsoft Teams 和通話中工作。在 Slack 中，你也可以使用 Lindy、OpenWorker、Hermes Agent，以及 Claude Cowork 和 ChatGPT Work 的連接器或外掛。Copilot Cowork 在 Outlook 和 Teams 中工作。",
        },
        {
          title: "看看它行動前如何徵求同意",
          text: "Grok Bot 需要核准時會來確認，也能把敏感動作交給 Auto Review 檢查。Lindy 在任何會對外產生影響的動作前都會等你核准，OpenWorker 預設要核准動作，Claude Cowork 有 Manual 和 Auto 模式，Copilot Cowork 會顯示核准對話框。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Hacker News 上的使用者怎麼看 Grok Bot 替代方案",
      text: [
        "2026 年 11 月 13 日，我們讀了 7 個討論 Grok Bot 的 Hacker News 討論串，時間從 2026 年 8 月到 11 月，一次只開一個頁面。Reddit 討論串只能透過搜尋結果找到，所以我們依標題列出，不整理其內容；這是公開討論的樣本，不是問卷調查。",
      ],
      points: [
        "對用量上限的抱怨，在我們讀的討論串中有 3 個提到（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50345698)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。使用者表示，一直在執行的 Bot 很快就會用完每週額度，11 月的討論串則在討論 Grok Bot 調低後的上限。",
        "由你自己執行的開源 agent，在我們讀的討論串中有 2 個提到（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。使用者在這兩個討論串中都提到了 [Hermes Agent](/alternatives/hermes-agent)，在 8 月的討論串中也提到了 OpenClaw；在那個討論串裡，他們形容兩者都比託管 Bot 更能自訂，也有人說 OpenClaw 需要經常修理。請見 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
        "自己搭建設定，在我們讀的討論串中有 2 個提到（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）：Claude Code 或 Codex 這類程式設計 agent 加上幾個腳本，或透過 OpenRouter 使用模型。那些討論串中的使用者表示，這樣的設定能以少得多的花費完成大部分工作。請見 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
        "對 Grok Bot 能多帶來什麼的懷疑，在我們讀的討論串中有 2 個提到（[2026 年 8 月](https://news.ycombinator.com/item?id=49261514)、[2026 年 11 月](https://news.ycombinator.com/item?id=50366117)）。有些使用者說他們想不出有什麼任務會交給它，也有人認為它是 OpenClaw 這類開源 agent 的託管版，只是多了一個瀏覽器。",
        "在 Reddit 上，搜尋結果中出現了標題為 [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)（r/GrokBot）、[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)（r/GrokBot）和 [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)（r/cursor）的討論串。我們只列出標題；我們沒有讀過這些討論串。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Bot 負責你的應用程式，AI 員工負責你的程式碼庫。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和專案。它在工作時間內依心跳醒來，從共用看板接手 issue；需要審查或權限時，會把 issue 標為「需處理」並在那裡提問。它沒有內建 Slack、GitHub 或 Linear 整合：agent 使用的是它們自己電腦上的工具和登入。",
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
    title: "想幫你的程式碼庫配幾位 AI 隊友？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Grok Bot 替代方案常見問題",
    items: [
      {
        q: "有開源的 Grok Bot 替代方案嗎？",
        a: "有。OpenBot 的應用程式範本採 MIT（它使用另行授權的 CopilotKit Intelligence），OpenWorker 和 Hermes Agent 採 MIT。Crewmark 以 GPL-3.0 授權開源。Grok Bot 本身不是開源的。",
      },
      {
        q: "有免費的 Grok Bot 替代方案嗎？",
        a: "OpenBot 個人專案免費；OpenWorker 未列出價格，使用你自己的模型金鑰或本機模型執行；Hermes Agent 免費，另付模型供應商費用。ChatGPT Work 在 Free 方案中可於桌面應用程式有限使用，Lindy 的免費方案在 7 天內提供 $50 額度，Crewmark 1 個專案、最多 3 位 AI 員工免費。Claude 的 Free 方案不包含 Claude Cowork。",
      },
      {
        q: "GitHub 上有哪些 Grok Bot 替代方案？",
        a: "OpenBot（`github.com/CopilotKit/OpenBot`，11,652 顆星）、OpenWorker（`github.com/andrewyng/openworker`，19,050 顆星）、Hermes Agent（`github.com/NousResearch/hermes-agent`，262,923 顆星）和 Crewmark（`github.com/ummydev/crewmark-ai`）。星數為 2026 年 11 月 13 日的數據。",
      },
      {
        q: "Claude 是 Grok Bot 的替代方案嗎？",
        a: "Claude 應用程式中的 Claude Cowork 是 Anthropic 處理知識工作的 agent：它在 Anthropic 的雲端執行任務，也能依排程執行，隨 Claude 付費方案提供，Pro 每月 $20 起。程式開發方面，Claude Code 是 Anthropic 的程式設計 agent。請見 [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) 和 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
      },
      {
        q: "Grok Bot 多少錢？",
        a: "Premium 每月 $30，Super 每月 $100（Premium 用量的 3.5 倍），Ultra 每月 $200（Premium 用量的 12 倍），按月計費。方案含每週的 Grok Bot 用量，超出的用量依 token 成本計費。Teams 和 Enterprise 需洽業務。",
      },
      {
        q: "哪些 Grok Bot 替代方案能在 Slack 中使用？",
        a: "Lindy 以隊友身分在 Slack 中工作；OpenWorker 會在你於 Slack 討論串中提及它時回覆；Hermes Agent 透過它的 gateway 連接 Slack；Claude Cowork 和 ChatGPT Work 以連接器或外掛的形式連接 Slack；OpenBot 把 Slack 列為它的前端之一，其中部分前端處於搶先體驗階段。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 一份工作，而不只是一段對話。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品的官網、文件和價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 xAI 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
