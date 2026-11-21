import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork 替代方案（2026）：免費與開源選擇",
    description:
      "Claude Cowork 替代方案比較：ChatGPT Work、Copilot Cowork、Gemini、Grok Bot、Lindy，以及開源的 OpenWorker、OpenBot 和 Suparagent，附價格。",
  },
  breadcrumb: "Claude Cowork 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Claude Cowork",
    title: "Claude Cowork 替代方案：OpenAI、Microsoft、Google 和 xAI 的 AI 同事，以及開源選擇",
    lead: "Claude Cowork 是 Anthropic 在 Claude 應用程式中處理非程式工作的 agent：你描述想要的成果，它就在你的檔案、應用程式和瀏覽器中完成研究、文件、試算表和簡報。它只包含在 Claude 付費方案中，每月 $20 起，Anthropic 也表示它消耗方案額度的速度比聊天更快。它在 Claude 模型上執行；在 Pro、Max 和 Ultra 方案上，自 2026 年 10 月 6 日起，新任務都在 Anthropic 的雲端執行，沒有設定可以切換回去。本頁比較 OpenAI、Microsoft、Google 和 xAI 的替代方案、一款託管助理、由你自己執行的開源應用程式，以及 Crewmark，並列出各自的費用。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Cowork 替代方案一覽",
      text: ["資訊來自各廠商自己的頁面、文件或 GitHub，查核日期為 2026 年 11 月 13 日。價格以美元計。本表並非排名。"],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork)（供參考）",
          "Anthropic 在 Claude 應用程式中處理非程式知識工作的 agent",
          "否",
          "Claude Pro 每月 $20，按年計費為每月 $17；Free 不包含",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "OpenAI 在 ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務",
          "否",
          "Free（$0）和 Go（每月 $8）：有限使用，僅限桌面應用程式；Plus 每月 $20",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 在 Microsoft 365 中完成多步驟任務的 agent",
          "否",
          "Microsoft 365 Copilot 授權，加上每個 $0.01 的 Copilot Credits",
        ],
        [
          "[Gemini 任務（原名 Spark）](/personal-agent/gemini-spark)",
          "Google 在 Gemini 應用程式中於背景運作的 agent，會使用 Gmail、Docs 等 Google 應用程式",
          "否",
          "Google AI Pro 每月 $19.99（美國）；免費方案無法使用",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "xAI 的託管 AI 隊友，每個都有自己的雲端電腦",
          "否",
          "Premium 每月 $30",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "處理收件匣、行事曆、會議和 Slack 的託管 AI 助理，以額度計費",
          "否",
          "免費：7 天內 $50 額度；之後每位活躍使用者每月 $29.99 起",
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
          "[Suparagent](/personal-agent/suparagent)",
          "AI 同事工作區，在 Claude Code、Codex、Gemini CLI、Cursor 等引擎上執行",
          "是，Apache-2.0",
          "桌面版和自架版：未說明收費；你向模型供應商付費",
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
      title: "OpenAI、Microsoft、Google 和 xAI 的託管替代方案",
      text: [
        "這四款的運作方式和 Claude Cowork 很像：你在廠商的應用程式中交辦任務，任務在廠商的雲端執行。並排比較：[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：ChatGPT 中的 Work 模式，會規劃任務，使用你的檔案、外掛、網路、瀏覽器和程式碼，交回簡報、試算表、文件或分析。它和 Codex 共用用量上限。Free 和 Go 可在桌面應用程式中有限使用 Work；Plus（每月 $20）和 Pro（每月 $100 起）可在桌面版、網頁版和行動版使用。如果你想要 OpenAI 的 Claude Cowork 替代方案，或想免費試試 AI 同事，選它。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：在 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 之間完成多步驟任務，執行敏感動作前會跳出核准對話框。它需要 Microsoft 365 Copilot 授權，用量以每個 $0.01 的 Copilot Credits 隨用隨付計費。它無法存取你本機裝置上的檔案。如果你的工作都在 Microsoft 365 裡，而且管理員希望依使用者或群組設定額度上限，選它。",
        "[Gemini 任務](/personal-agent/gemini-spark)（Google，beta 期間名為 Spark）：Gemini 應用程式中的雲端 agent，會使用 Gmail、Docs、Drive 等 Google 應用程式，可依排程執行，也可在某件事發生時執行。Google 的說明文章指出，它需要 Google AI Pro（美國每月 $19.99）或 Ultra（每月 $99.99 起）。它只支援個人 Google 帳戶，在歐洲經濟區、瑞士、英國和奈及利亞無法使用。如果你的工作在 Gmail 和 Google 的其他應用程式裡，選它。",
        "[Grok Bot](/alternatives/grok-bot)（xAI）：託管的 Bot，每個都有自己的雲端電腦，會登入你的工具，在 Slack 和 Microsoft Teams 中工作，執行例行工作，並互傳訊息。它包含在 Premium（每月 $30）、Super（每月 $100）和 Ultra（每月 $200）方案中，按月計費，超出的用量依 token 成本計費。如果你想要幾個各有職責的 Bot 在 Slack、Teams 和會議中工作，選它。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "以額度計費的託管助理：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：一個託管助理，處理收件匣、行事曆、會議、研究、報告和後續追蹤，可透過 Slack、電子郵件、iMessage、簡訊、電話和 Gmail 中的 Chrome 擴充功能使用。Routines 依排程或由事件觸發執行，任何會對外產生影響的動作都會等你核准。一開始有 7 天內有效的 $50 免費額度；之後每位活躍使用者都會計費，每月 $29.99 起，含 3,000 額度。如果你想要一位能傳簡訊給它、或在 Slack 中 @提及它的行政助理，選它。更多請見我們的 [Lindy 指南](/personal-agent/lindy)。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "開源的 Claude Cowork 替代方案",
      text: [
        "這三款在你自己的電腦或伺服器上執行。個人使用時，三款都沒有列出收費：你向模型供應商付費，或在支援的情況下執行本機模型。",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker)：採 MIT 授權的 AI 同事桌面應用程式，處於公開測試階段。agent 迴圈、對話、連接器 token 和模型金鑰都留在你的機器上。你可以使用 OpenAI、Anthropic、Google Gemini 或 OpenRouter 的金鑰，或透過 Ollama、LM Studio、llama.cpp 或 vLLM 執行本機模型。動作預設需要核准，排程執行也從不自行核准自己的動作：這些請求會在收件匣中等候。它支援 macOS 12+（Apple 晶片）和 Windows 10/11 x64；Windows 版本尚未進行程式碼簽署。如果你想在 Windows 或 Mac 上使用在本機執行的開源 Claude Cowork 替代方案，選它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自架的工作區，每個 Bot 都有自己的瀏覽器、檔案和工具，動作前需要核准，另有例行工作和活動紀錄。它以 Mac 和 Windows 桌面應用程式的形式執行（搭配 Docker 後端），團隊則可在 Kubernetes 上執行。應用程式範本採 MIT 授權；它使用另行授權的 CopilotKit Intelligence，在 Kubernetes 上用於正式環境需要授權。個人專案免費；OpenBot for Business 每位活躍使用者每月最高 $29。如果你想自架 AI 同事，並使用自己的模型或 agent，選它。請見 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "[Suparagent](/personal-agent/suparagent)：採 Apache-2.0 授權的工作區，用來管理具名的 AI 同事，每位都有職位、工作區、記憶、例行工作和核准設定，在你已經在用的引擎上執行，例如 Claude Code、Codex、Gemini CLI 或 Cursor。它有任務看板和行事曆，負責人 agent 可以把工作交給專職 agent。它以桌面應用程式或自架 Linux 伺服器的形式執行；suparagent.ai 上的託管服務是另一個產品。專案自稱仍處於早期、持續變動中。如果你想讓有職位的同事在你已經付費的 agent 上工作，選它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Claude Cowork 替代方案",
      steps: [
        {
          title: "從工作所在的地方出發",
          text: "用 Microsoft 365 就看 Copilot Cowork，用 Gmail 和 Google Docs 就看 Gemini 任務，用 ChatGPT 就看 ChatGPT Work，用 Slack 或 iMessage 則看 Lindy 或 Grok Bot。",
        },
        {
          title: "決定要花多少錢",
          text: "免費選擇：ChatGPT Free 上的 ChatGPT Work（有限使用，僅限桌面應用程式）、Lindy 的 7 天額度、搭配你自己模型金鑰的 OpenWorker、OpenBot 和 Suparagent，以及 Crewmark 的 Free 方案。Copilot Cowork 在授權之外依 Copilot Credit 計費；Gemini 任務、Grok Bot 和付費 ChatGPT 方案是月訂閱。",
        },
        {
          title: "選擇廠商的雲端或你自己的電腦",
          text: "ChatGPT Work、Copilot Cowork、Gemini 任務、Grok Bot 和 Lindy 在廠商的雲端執行。OpenWorker 把對話和金鑰留在你的機器上；OpenBot 和 Suparagent 也能在你自己的伺服器上執行。",
        },
        {
          title: "確認平台",
          text: "在 Windows 上：Copilot Cowork 和 ChatGPT Work 有 Windows 桌面應用程式，OpenWorker 提供 Windows 10/11 版本，OpenBot 的桌面應用程式可在 Windows 上執行。Gemini 任務有網頁版、Mac 應用程式和行動版；Grok Bot 列出的是 macOS（Apple 晶片）和 iOS 應用程式。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Hacker News 上的使用者怎麼看 Claude Cowork 替代方案",
      text: [
        "2026 年 11 月 13 日，我們讀了 5 個討論 Claude Cowork 的 Hacker News 討論串，時間從 2026 年 1 月到 11 月，一次只開一個頁面。Reddit 討論串只能透過搜尋結果找到，所以我們依標題列出，不整理其內容；這是公開討論的樣本，不是問卷調查。",
      ],
      points: [
        "偏好其他模式、而不是 Cowork 的 agent 模式，在我們讀的討論串中有 2 個提到（[2026 年 1 月](https://news.ycombinator.com/item?id=46593022)、[2026 年 9 月](https://news.ycombinator.com/item?id=49729412)）。在 1 月的討論串中，使用者表示，對熟悉終端機的人來說，Claude Code 能做同樣的工作，而且掌控度更高；請見 [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)。在 9 月的討論串中，使用者表示，碰到策略和研究方面的問題，一般聊天給他們的答案比 agent 模式更好。",
        "在 Reddit 上，搜尋結果中出現了標題為 [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/)（r/claude）、[Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/)（r/MistralAI）、[Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/)（r/ChatGPTCoding）和 [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/)（r/LocalLLM）的討論串。我們只列出標題；我們沒有讀過這些討論串。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Crewmark：在你已經在用的 Claude Code 或 Codex 上，組一支 AI 員工團隊",
      text: [
        "Crewmark 和 Claude Cowork 是不同類型的工具。它是給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue，並隨時更新 issue 的狀態。它是開源的（GPL-3.0），也可以自架。",
        "Free 方案包含 1 個專案和最多 3 位 AI 員工。Pro（每月 $5）和 Team（每月 $10）即將推出；計費功能尚未完成，所以在那之前所有帳號都能免費使用 Crewmark。agent 用量付給你的 agent 供應商，而且電腦必須保持開機才能執行心跳。詳情請見 [Crewmark 價格](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "為每位員工設定職位、目標和專案；快速選項包括軟體工程師、SEO 專員和資料分析師。請見 [AI 員工職位](/ai-employees)。",
        },
        {
          title: "把工作放到看板上",
          text: "指派 issue、設定優先順序，並把例行的 issue 設為每天、每週或每月重複。agent 需要審查、權限或資訊時，會把 issue 標為「需處理」並等你回覆。",
        },
        {
          title: "設定工作時間",
          text: "在工作時間內，心跳每隔 15 分鐘到 24 小時喚醒每位員工一次。附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "已經在付費使用 Claude 或 ChatGPT？",
    text: "Crewmark 把你的 Claude Code 或 Codex 變成 AI 員工，有職位、心跳和共用看板。最多 3 位員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Cowork 替代方案常見問題",
    items: [
      {
        q: "有免費的 Claude Cowork 替代方案嗎？",
        a: "有。ChatGPT Free（$0）可在桌面應用程式中有限使用 ChatGPT Work。Lindy 一開始有 7 天內有效的 $50 額度。OpenWorker 未列出價格，使用你自己的模型金鑰或本機模型執行，OpenBot 個人專案免費，Suparagent 的桌面版和自架版未列出收費。Crewmark 的 Free 方案包含 1 個專案和最多 3 位 AI 員工。Claude Cowork 本身不包含在 Claude Free 方案中。",
      },
      {
        q: "有開源的 Claude Cowork 替代方案嗎？",
        a: "OpenWorker（MIT）、OpenBot（MIT 應用程式範本，建立在另行授權的 CopilotKit Intelligence 上）和 Suparagent（Apache-2.0）都是開源的，Crewmark（GPL-3.0）也是。Claude Cowork 本身不是開源的，不過 Anthropic 為 Cowork 提供外掛的 knowledge-work-plugins 儲存庫以 Apache-2.0 授權開源。",
      },
      {
        q: "OpenAI 有什麼 Claude Cowork 替代方案？",
        a: "ChatGPT Work：ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務，例如簡報、試算表和分析。Free 和 Go 只能在桌面應用程式中有限使用，Plus 每月 $20 起可完整使用，並和 Codex 共用用量上限。請見 [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)。",
      },
      {
        q: "哪些 Claude Cowork 替代方案能在 Windows 上執行？",
        a: "Copilot Cowork（適用於 Windows 和 macOS 的 Microsoft Copilot 桌面應用程式）、ChatGPT Work（適用於 macOS、Windows 和 Linux 的 ChatGPT 桌面應用程式）、OpenWorker（Windows 10/11 x64，尚未進行程式碼簽署）和 OpenBot（Mac 和 Windows 桌面應用程式）。Claude Cowork 本身也能透過 Claude Desktop 在 Windows 上執行。",
      },
      {
        q: "有能在我自己電腦上執行的 Claude Cowork 替代方案嗎？",
        a: "OpenWorker 在你的機器上執行 agent 迴圈，並把對話、連接器 token 和模型金鑰留在那裡；OpenBot 和 Suparagent 以桌面應用程式的形式或在你自己的伺服器上執行。Claude Cowork 只能透過 Claude Desktop 存取本機檔案，而且在 Pro、Max 和 Ultra 方案上，自 2026 年 10 月 6 日起，新任務都在雲端執行。對於只在你電腦上執行的任務，Anthropic 建議使用桌面應用程式中的 Claude Code（[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)）。",
      },
      {
        q: "為什麼有人在找 Claude Cowork 替代方案？",
        a: "原因是 Anthropic 自己說明的限制：Cowork 需要 Claude 付費方案（Pro 每月 $20 起），消耗方案額度的速度比聊天更快，工作階段無法與他人共用，而且在 Pro、Max 和 Ultra 方案上，新任務都在雲端執行，沒有設定可以切換回去。如果你的工作在 Microsoft 365 或 Gmail 裡，Copilot Cowork 和 Gemini 任務能直接連接這些應用程式。",
      },
    ],
  },
  cta: {
    title: "給你的 agent 一份工作，而不只是一項任務。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品自己的頁面、文件、價格和 GitHub 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI、Microsoft、Google、xAI、Lindy、CopilotKit 或 OpenWorker 和 Suparagent 的開發者均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
