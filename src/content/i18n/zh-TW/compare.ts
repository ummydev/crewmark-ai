import type { CompareBundle } from "@/content/compare/types";

// Traditional Chinese (Taiwan) translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "比較",
    hubName: "產品比較",
    cta: "開始使用",
    secondary: "查看比較表",
    shortTitle: "{a} vs {b}：各用一句話說明",
    tableTitle: "{a} vs {b} vs Crewmark 一覽",
    rows: {
      category: "是什麼",
      openSource: "開源",
      pricing: "價格",
      runs: "在哪裡執行",
      agents: "Agent 與模型",
      board: "任務看板",
      schedule: "排程工作",
      talk: "agent 之間的溝通",
    },
    differencesTitle: "{a} 和 {b} 的主要差異",
    pickTitle: "什麼情況下選 {x}",
    crewmarkTitle: "Crewmark 處在什麼位置",
    crewmarkText:
      "Crewmark 和這兩者在不同的層面運作。它不會取代你的程式設計 agent，而是給它一份工作。每位 AI 員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。",
    crewmarkPoints: [
      "在工作時間內，心跳會以每 15 分鐘到每天一次的頻率喚醒每位員工，接手下一個 issue。",
      "一塊共用看板，有狀態、優先順序、留言和 @提及；指派、留言或提及都會喚醒相關的 agent。",
      "以 GPL-3.0 授權開源，1 個專案、最多 3 位 AI 員工免費。",
      "agent 之間的私訊和匯報鏈即將推出。",
    ],
    sourcesTitle: "我們如何查核",
    sourcesText:
      "本頁的每一項資訊都來自各產品自己的官網、價格頁面、文件或 GitHub 儲存庫，查核日期為 2026 年 11 月 13 日。價格和方案會變動，購買前請查看廠商的頁面。官方網站：",
    relatedTitle: "更多比較",
    moreTitle: "替代方案和價格",
    alternativesLabel: "{x} 替代方案",
    pricingLabel: "{x} 價格",
    midTitle: "想讓你的 agent 依排程工作嗎？",
    midText: "Crewmark 給 Claude Code 和 Codex 一個職位、一個心跳和一塊共用看板，讓它們自己接手下一份工作。",
    midButton: "開始使用",
    faqTitle: "常見問題",
    crewmarkFaq: {
      q: "Crewmark 是 {a} 和 {b} 的替代方案嗎？",
      a: "它負責的是工作中的另一部分。Crewmark 沒有自己的 agent：它把 Claude Code 或 Codex 變成有職位、心跳和共用看板的 AI 員工。視你用 {a} 和 {b} 做什麼而定，它可以和它們搭配使用，也可以接手其中負責排程和追蹤 agent 工作的那一部分。",
    },
    ctaTitle: "給你的 Claude Code 和 Codex agent 一份工作，而不只是一段提示詞。",
    ctaText: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    ctaButton: "開始使用",
    checked: "已於 2026 年 11 月 13 日對照各產品的官網、價格頁面、文件或 GitHub 查核。",
    disclaimer:
      "Crewmark 是獨立產品，與本頁提到的任何公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們截至上述日期的公開網站和文件。",
    hub: {
      meta: {
        title: "AI agent 工具比較：30 組並排對照",
        description:
          "AI agent 工具並排比較：Paperclip、Multica、CrewAI、LangGraph、OpenClaw、Hermes Agent、Claude Code、Codex、Devin、Conductor 等，價格與功能皆取自各廠商。",
      },
      breadcrumb: "產品比較",
      title: "AI agent 工具並排比較",
      lead: "每篇比較都把兩款工具放在一起，並以 Crewmark 作為第三欄，只採用各廠商官網、價格頁面、文件或 GitHub 上的資訊。不評分，也不分輸贏：只寫清楚每款工具是什麼、多少錢、能做什麼，讓你挑出適合的那一個。",
      tableTitle: "所有比較",
      tableHeaders: ["比較", "簡介"],
      productsTitle: "涵蓋的產品",
      moreTitle: "替代方案和價格頁面",
      productsHeaders: ["產品", "是什麼", "開源"],
      midTitle: "想讓你的 agent 依排程工作嗎？",
      ctaTitle: "給你的 Claude Code 和 Codex agent 一份工作，而不只是一段提示詞。",
      faq: [
        {
          q: "這些比較是怎麼做的？",
          a: "依據各產品自己的官網、價格頁面、文件和 GitHub 儲存庫，查核日期寫在每頁底部。我們不為產品評分或排名。",
        },
        {
          q: "為什麼每頁都有 Crewmark？",
          a: "Crewmark 是我們的產品，所以列為第三欄供參考。它和這裡大多數工具處在不同的層面：它把 Claude Code 或 Codex 變成有職位、心跳和共用看板的 AI 員工。",
        },
        {
          q: "價格是最新的嗎？",
          a: "在頁面標示的日期是正確的。廠商經常調整價格和方案，購買前請查看他們的價格頁面。",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "自架的伺服器和網頁應用程式，把一支 AI agent 團隊當成一間公司來經營，有組織圖、預算和任務，驅動你自備的 agent，例如 Claude Code、Codex 或 OpenClaw。",
      category: "多 agent 編排（「AI 公司」）",
      openSource: "是，MIT",
      pricing: "自架免費；未公布價格；雲端版開放候補中",
      runs: "自架的 Node.js 伺服器搭配 Postgres，或 Docker",
      agents: "透過轉接器接入你自備的 agent：Claude Code、Codex、OpenClaw、Cursor、Gemini CLI、OpenCode 等",
      board: "有：連結到目標和專案的 issue，可指派給 agent 或人",
      schedule: "有：心跳，以及由 cron、webhook 或 API 觸發的 Routines",
      talk: "透過任務討論串，以及沿著組織圖的委派",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "一個工作區，你可以像指派給隊友一樣把 issue 指派給 AI 程式設計 agent，由你機器上的 daemon 執行你已有的 agent CLI。",
      category: "給人和程式設計 agent 使用的 issue 看板",
      openSource: "原始碼公開（附加條件的 Apache 2.0）",
      pricing: "在你自己的組織內自架免費；雲端價格未公布",
      runs: "雲端、自架（Docker 或 Helm）或桌面應用程式；agent 在你掌控的 daemon 上執行",
      agents: "29 種 agent CLI，包括 Claude Code、Codex、Cursor Agent、OpenCode 和 Hermes",
      board: "有：看板檢視和清單檢視，agent 可作為負責人",
      schedule: "有：Autopilots，依 cron、webhook 或手動執行",
      talk: "有：在 squad（小隊）中，領頭的 agent 透過 @提及 把工作交給成員",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "給產品團隊使用的託管 issue 追蹤工具，也能把 issue 委派給它自己的 Linear Agent，以及 Cursor、Codex、Devin 等第三方 agent。",
      category: "附 agent 平台的 issue 追蹤工具",
      openSource: "否",
      pricing: "Free $0；Basic $10、Business $16，每位使用者每月，按年計費；程式設計 agent 和 Loops 使用 AI 額度",
      runs: "雲端",
      agents: "Linear Agent；以 Claude Code 或 Codex 為基礎的雲端程式設計 agent；以成員身分安裝的第三方 agent",
      board: "有：issue、專案、週期（cycles）和計畫（initiatives）",
      schedule: "有：Loops，依排程或由事件觸發",
      talk: "未說明",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "開源的個人 AI 助理，在你自己的電腦上執行，透過 WhatsApp、Telegram、Slack 等聊天應用程式回覆你。",
      category: "個人 AI 助理（自架）",
      openSource: "是，MIT",
      pricing: "免費；沒有付費方案或託管服務；你向模型供應商付費",
      runs: "你自己機器上的本機 Gateway；支援以 Docker 和 Nix 安裝",
      agents: "以外掛形式接入模型供應商：Anthropic、OpenAI、Gemini、OpenRouter、Ollama 等",
      board: "沒有（它的 Tasks 帳本和 TaskFlow 已移除）",
      schedule: "有：內建的 Automations 排程器，另有 webhook",
      talk: "有：每個 Gateway 可執行多個 agent，agent 之間可互相存取，還有附協調者的團隊預設",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "Nous Research 的開源個人 AI agent，可從終端機、桌面應用程式或聊天應用程式使用，會根據經驗撰寫並改進自己的技能。",
      category: "個人 AI agent（自架）",
      openSource: "是，MIT",
      pricing: "agent 本身免費；選用的 Nous Portal 每月：Free、Plus $20、Super $100、Ultra $200",
      runs: "你的機器或伺服器；Portal 付費方案包含一個雲端託管的 agent",
      agents: "任何模型供應商：Nous Portal、OpenRouter、OpenAI、Anthropic、Gemini、本機模型等",
      board: "沒有",
      schedule: "有：內建的 cron 排程器，以及每個 Bot 各自的例行工作",
      talk: "有：subagent；在 Bot Mode 中，有名字的 Bot 之間會互傳訊息",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "託管的低程式碼平台，用來建構 AI agent，並把它們串成多 agent 團隊（它稱為 AI Workforce），用於業務、客服和營運工作。",
      category: "AI agent 平台（「AI Workforce」）",
      openSource: "否",
      pricing: "公開的價格頁面只列出 Enterprise，需洽業務",
      runs: "雲端",
      agents: "它自己的 agent，在無程式碼建構器中打造；可用額度呼叫任何 LLM，或使用你自己的 key",
      board: "沒有 issue 看板；有任務紀錄和 Activity Center",
      schedule: "有：排程任務和應用程式觸發條件",
      talk: "有：在畫布上串接的 agent 之間互相傳遞工作",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "託管的 AI 助理，橫跨你的收件匣、行事曆、會議和 Slack 工作，執行定期的例行工作，任何會對外產生影響的動作都會先問過你。",
      category: "AI 助理（「AI 員工」）",
      openSource: "否",
      pricing: "免費：7 天內 $50 額度；每位活躍使用者每月 $29.99 起，含 3,000 額度",
      runs: "雲端；可從 Slack、電子郵件、iMessage、電話和 Chrome 擴充功能使用",
      agents: "它自己的助理；依任務挑選模型，也可由你指定",
      board: "沒有；你在對話中交代任務給它",
      schedule: "有：Routines，依排程或由事件觸發",
      talk: "未說明（每個工作區一個 Lindy）",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "開源的 Python 框架，用來建構由角色導向 agent 組成的 crew 和逐步執行的 flow，另有商業平台 CrewAI AMP 用於部署和執行它們。",
      category: "多 agent 框架（Python）與平台",
      openSource: "框架是，MIT；AMP 平台為商業產品",
      pricing: "框架免費；AMP Basic 免費（每月 50 次執行）；Enterprise 客製報價",
      runs: "作為函式庫在你的程式碼中執行；AMP 在 CrewAI 的雲端或你自己的基礎架構上",
      agents: "透過 API 呼叫的 LLM（預設 OpenAI；也支援其他供應商和本機模型）",
      board: "沒有；任務在程式碼中定義",
      schedule: "AMP 上：cron 排程；框架本身未說明",
      talk: "有：agent 之間委派工作、互相提問；階層模式下有一個管理者 agent",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "LangChain 的開源框架，用程式碼把長時間執行、有狀態的 agent 建構成由狀態、節點和邊組成的圖，透過 LangSmith 部署。",
      category: "agent 編排框架（Python、JS）",
      openSource: "框架是，MIT；LangSmith 為商業產品",
      pricing: "框架免費；LangSmith Developer $0、Plus 每個席位每月 $39、Enterprise 客製報價",
      runs: "在你的應用程式內執行；Agent Server 在 LangChain 的雲端，Enterprise 可自架",
      agents: "你的程式碼呼叫的任何模型",
      board: "沒有",
      schedule: "Agent Server 上：cron 工作；函式庫本身未說明",
      talk: "有，依你在圖中的設計：subagent、交接（handoff）、路由（router）",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "Microsoft 的開源框架，用 Python 和 .NET 建構多 agent 應用程式。它的 README 現在寫明專案已封存、Microsoft 不再維護，並指向 Microsoft Agent Framework。",
      category: "多 agent 框架（Python、.NET）",
      openSource: "是：程式碼 MIT，文件 CC-BY-4.0",
      pricing: "免費；沒有託管服務",
      runs: "作為函式庫在你的程式碼中執行；AutoGen Studio 在本機執行",
      agents: "提供 OpenAI 和 Azure 的模型用戶端；Anthropic、Ollama 和 Gemini 標示為實驗性",
      board: "沒有",
      schedule: "未說明",
      talk: "有：群組聊天、selector 和 swarm 團隊、訊息傳遞",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "一款 Mac 應用程式，平行執行 Claude Code、Codex、Cursor 和 OpenCode agent，每個都在自己的 git worktree 中。它在 2026 年 11 月 4 日宣布加入 Meta，並關閉了新使用者註冊和下載。",
      category: "平行程式設計 agent 執行工具（Mac 應用程式）",
      openSource: "否",
      pricing: "免費使用；目前未列出雲端方案價格",
      runs: "Mac 應用程式；Conductor Cloud 自 11 月 13 日起唯讀，2026 年 11 月 20 日關閉",
      agents: "Claude Code、Codex、OpenCode 和 Cursor Agent，使用你自己的訂閱或 key",
      board: "沒有 issue 看板；有一份工作區清單，可從 GitHub 或 Linear issue 建立工作區",
      schedule: "僅限雲端的 Routines，隨雲端一起結束",
      talk: "開啟 Claude Code agent teams 時，會顯示 agent 之間的訊息",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "開源的終端機應用程式，同時執行多個程式設計 agent，每個都在自己的 tmux 工作階段和 git worktree 中，因此各自在不同的分支上工作。",
      category: "平行程式設計 agent 執行工具（終端機）",
      openSource: "是，AGPL-3.0",
      pricing: "免費",
      runs: "你的終端機；需要 tmux 和 GitHub CLI",
      agents: "預設 Claude Code；也可用 Codex、Gemini、Aider，或設定檔中的任何程式",
      board: "沒有；有一份執行個體清單，附預覽和 diff",
      schedule: "未說明",
      talk: "未說明",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "給程式設計 agent 工作用的看板，每個 issue 都有一個工作區，附 git worktree 和你選擇的 agent。它背後的公司 bloop 已於 2026 年 4 月結束營運，專案以開源形式延續，由社群維護。",
      category: "看板與平行程式設計 agent 執行工具",
      openSource: "是，Apache-2.0",
      pricing: "本機應用程式免費；付費訂閱已於 2026 年 4 月終止",
      runs: "在本機的瀏覽器中執行，或作為桌面應用程式；雲端部分可自架",
      agents: "Claude Code、Codex、Gemini CLI、GitHub Copilot、Amp、Cursor、OpenCode 等",
      board: "有：附優先順序和標籤的看板 issue（需要登入）",
      schedule: "未說明",
      talk: "未說明",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "Anthropic 的程式設計 agent：讀取你的程式碼庫、編輯檔案、執行指令，可從終端機、IDE 擴充功能、桌面應用程式和網頁使用。",
      category: "程式設計 agent",
      openSource: "否（公開儲存庫，保留所有權利）",
      pricing: "包含在 Claude 付費方案中：Pro 每月 $20、Max $100、Ultra $200；Team 和 Enterprise 依席位計費",
      runs: "終端機、IDE 擴充功能、桌面應用程式、網頁和行動裝置",
      agents: "它自己的 agent，在 Claude 模型上執行",
      board: "沒有 issue 看板；agent teams 共用一份任務清單",
      schedule: "有：雲端排程任務、桌面排程任務和 `/loop`",
      talk: "在實驗性的 agent teams 中，隊友之間互傳訊息；subagent 回報結果",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "Claude Code 的一項實驗性功能，預設關閉：由一個主導工作階段產生隊友，也就是各自獨立的 Claude Code 執行個體，它們共用任務清單並互傳訊息。",
      category: "程式設計 agent 的多 agent 模式",
      openSource: "否（屬於 Claude Code 的一部分）",
      pricing: "隨 Claude 付費方案中的 Claude Code 提供",
      runs: "你的 Claude Code 工作階段",
      agents: "在 Claude 模型上執行的 Claude Code 執行個體",
      board: "一份共用任務清單，由隊友認領，支援相依關係",
      schedule: "不屬於 agent teams；Claude Code 另有排程任務",
      talk: "有：隊友之間互傳訊息，你也可以傳訊息給任何一位隊友",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "OpenAI 的程式設計 agent，提供終端機 CLI、IDE 擴充功能、ChatGPT 桌面應用程式和雲端版本，包含在 ChatGPT 方案中，也可搭配 API key 使用。",
      category: "程式設計 agent",
      openSource: "部分開源：CLI、SDK 和 App Server 採 Apache-2.0；IDE 擴充功能和雲端版不開源",
      pricing: "包含在 Plus（每月 $20）以上的 ChatGPT 方案中，或使用 OpenAI API key",
      runs: "終端機、IDE 擴充功能、ChatGPT 桌面應用程式和 Codex Cloud",
      agents: "它自己的 agent，在 OpenAI 模型上執行",
      board: "沒有 issue 看板；付費方案可接收 Linear issue",
      schedule: "有：ChatGPT 桌面應用程式和網頁版中的排程任務",
      talk: "subagent：上層 agent 產生子 agent 並收集它們的結果",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "開源的程式設計 agent，支援 200+ 家供應商的模型（包括本機模型），提供終端機 UI、桌面應用程式、網頁應用程式和 SDK。",
      category: "程式設計 agent",
      openSource: "是，MIT",
      pricing: "agent 本身免費，並提供免費模型；OpenCode Go 每月 $10，Go Plus 每月 $40",
      runs: "在你機器上的終端機、桌面應用程式、網頁應用程式和 SDK",
      agents: "它自己的 agent；200+ 家模型供應商，包括本機模型",
      board: "未說明",
      schedule: "實驗性、需手動啟用的排程（自 2026 年 10 月起）",
      talk: "subagent 向上層 agent 回報",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "Cognition 的 AI 軟體工程師：撰寫、執行和測試程式碼並開 pull request，在各自擁有虛擬機器的雲端工作階段中工作，也可透過 Devin Desktop 和 Devin CLI 在本機工作。",
      category: "AI 軟體工程師",
      openSource: "否",
      pricing: "Free $0；Pro 每月 $20；Max 每月 $200；Teams 每月 $80，另加每個開發者席位 $40",
      runs: "每個工作階段一台雲端虛擬機器；本機有 Devin Desktop 和 CLI",
      agents: "它自己的 agent；Cognition 的 SWE-2 加上多家實驗室的前沿模型",
      board: "沒有自己的看板；從 Linear、Jira 和 GitHub 接收工單",
      schedule: "有：Automations，依排程或由事件觸發",
      talk: "有：協調者工作階段啟動子 Devin 並傳訊息給它們",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "名為 Droids 的程式設計 agent，可在桌面應用程式和 CLI 中執行，可在 CI 中以 headless 模式執行，也可在 Factory 託管的雲端電腦上執行。",
      category: "程式設計 agent 平台（Droids）",
      openSource: "否",
      pricing: "使用你自己的推論服務時免費；Pro 每月 $20；Plus 每月 $100；另有更高方案",
      runs: "本機的桌面應用程式和 CLI；雲端 Droid Computers；在 CI 中以 headless 模式執行",
      agents: "它自己的 agent，在前沿模型和開放權重模型上執行，或使用你自己的 key",
      board: "沒有通用看板；接收 Linear 和 Jira issue；Workstreams（beta）列出任務",
      schedule: "有：Automations，可依排程，或由 Slack、GitHub、webhook 觸發",
      talk: "有，在 Workstreams（beta）中：一個編排者，底下的 agent 向它回報",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "xAI 的託管 AI 隊友：每個 Bot 都在雲端擁有一台自己的電腦，登入你的工具，在 Slack 和 Microsoft Teams 中工作，執行例行工作，彼此交接任務。",
      category: "AI 同事（託管）",
      openSource: "否",
      pricing: "每月：Premium $30、Super $100、Ultra $200，含每週用量；Teams 和 Enterprise 需洽業務",
      runs: "每個 Bot 一台雲端電腦；桌面和行動應用程式；在 Slack、Teams 和視訊通話中",
      agents: "它自己的 Bot，以 Grok 打造",
      board: "未說明；工作在聊天、討論串和會議中交接",
      schedule: "有：依排程執行的例行工作，以及它透過觀察你學會的工作流程",
      talk: "有：Bot 之間互傳訊息，並在群組聊天中協調工作",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "CopilotKit 的開源、可自架的 AI 同事工作區，每個 Bot 都有自己的瀏覽器、檔案和工具，模型和 agent 由你自備。",
      category: "AI 同事工作區（可自架）",
      openSource: "是，MIT（使用另行授權的 CopilotKit Intelligence）",
      pricing: "個人專案免費；Business 每位活躍使用者每月最高 $29",
      runs: "Mac 和 Windows 桌面應用程式；團隊使用 Kubernetes",
      agents: "內建 Bot，或透過 AG-UI 接入你自己的 agent；OpenAI、Claude、Gemini 或開放模型",
      board: "未說明",
      schedule: "有：Routines",
      talk: "未說明",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "Anthropic 在 Claude 應用程式中處理非程式工作的 agent：你描述想要的成果，它就在你的檔案、應用程式和瀏覽器中完成研究、文件、試算表和簡報。",
      category: "處理知識工作的 AI 同事",
      openSource: "否",
      pricing: "Claude 付費方案：Pro 每月 $20、Max $100、Ultra $200；Team 和 Enterprise 依席位計費",
      runs: "Anthropic 的雲端；透過 Claude Desktop 使用本機檔案和瀏覽器",
      agents: "Claude 模型",
      board: "沒有看板；有任務清單和 Scheduled 頁面",
      schedule: "有：每小時、每天、每週或每個工作日，在雲端執行",
      talk: "任務內的 subagent",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "Microsoft 365 Copilot 中的 agent，在 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 之間完成多步驟任務，執行敏感動作前會先徵求核准。",
      category: "Microsoft 365 的 AI 同事",
      openSource: "否",
      pricing: "Microsoft 365 Copilot 授權，加上隨用隨付、每個 $0.01 的 Copilot Credits",
      runs: "Microsoft 的雲端，搭配 OneDrive 和 SharePoint 的檔案",
      agents: "模型選擇器提供 GPT、Claude 和 Grok 模型，依租用戶設定而定",
      board: "未說明",
      schedule: "有：排程提示詞（每位使用者最多 25 個），以及電子郵件或 Teams 觸發",
      talk: "未說明",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "ChatGPT 中的 Work 模式，用於最後產出待審閱成果的任務，例如簡報、試算表和分析；它和 Codex 共用核心能力和用量。",
      category: "ChatGPT 裡的 AI 同事",
      openSource: "否",
      pricing: "包含在 ChatGPT 方案中：Free 和 Go 僅能在桌面應用程式中有限使用；Plus 每月 $20 起可完整使用",
      runs: "OpenAI 的雲端，或透過桌面應用程式在你的電腦上",
      agents: "OpenAI 模型",
      board: "未說明",
      schedule: "有：排程任務；符合資格的方案可由 Gmail、Slack 或 GitHub 觸發",
      talk: "任務內的 subagent",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "Cursor 的一項功能，由協調者 agent 規劃一份較大的程式開發工作，委派給許多平行執行的雲端 agent，並有共用筆記和任務看板。",
      category: "多 agent 程式開發工作區",
      openSource: "否",
      pricing: "Cursor Premium 每月 $30 起、Teams 和 Enterprise；Free 和 Plus 不包含",
      runs: "Cursor 的雲端 agent；需要在你的機器上執行時使用本機 agent",
      agents: "Cursor 的 agent；協調者的模型由你挑選",
      board: "有：任務清單和看板，在 Multiplayer Projects 中共用",
      schedule: "有：排程、Slack 頻道和 pull request 動態",
      talk: "有：協調者管理工作者 agent；在 Multiplayer Projects 中，協調者之間互傳訊息",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "Microsoft 的低程式碼工作室，用來建構 agent、工作流程和應用程式，並發布到 Microsoft Copilot、Teams、網站、電話線路和其他管道。",
      category: "低程式碼 agent 與工作流程建構工具",
      openSource: "否",
      pricing: "Copilot Credits：含 25,000 個 Credits 的額度包每月 $200（按年計費），或隨用隨付每個 $0.01",
      runs: "Microsoft 的雲端，在 Power Platform 環境中",
      agents: "你建構的 agent；每個 agent 可挑選模型，包括 GPT、Claude 和 Grok 模型",
      board: "沒有看板；有 Monitor 分頁和 Workflows 頁面",
      schedule: "有：排程和事件觸發（SharePoint、電子郵件、Dataverse 等）以及工作流程",
      talk: "有：連結的 agent、Foundry 和 A2A agent；工作流程可以啟動 Copilot Cowork 任務",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你電腦上的一段 Claude Code 或 Codex 對話，有職位和目標，依心跳醒來，從共用看板接手 issue。",
      category: "給 Claude Code 和 Codex 用的 AI 員工（多 agent harness）",
      openSource: "是，GPL-3.0",
      pricing: "免費版：1 個專案，最多 3 位 AI 員工；Pro 每月 $5、Team 每月 $10 即將推出",
      runs: "網頁應用程式；agent 在你電腦上的 Claude Code 或 Codex 中執行；可自架",
      agents: "Claude Code 和 Codex，使用你自己的訂閱",
      board: "有：狀態、優先順序、負責人、留言和 @提及",
      schedule: "有：工作時間內的心跳（15 分鐘到 24 小時）和重複的 issue",
      talk: "目前透過 issue 溝通；agent 之間的私訊和匯報鏈即將推出",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "自架的 AI 公司控制平面 vs Python 多 agent 框架",
      title: "Paperclip vs CrewAI：AI 公司平台還是 agent 框架？",
      description:
        "Paperclip vs CrewAI：一個是把你的 agent 當成公司來經營的自架控制平面，一個是用來建構 agent crew 的 Python 框架。比較價格、開源與否和排程。",
      h1: "Paperclip vs CrewAI：把 agent 當公司經營，還是用程式碼建構 agent",
      lead: "Paperclip 和 CrewAI 都能組織多個 AI agent，但處在不同的層面。Paperclip 是自架的應用程式，有組織圖、任務和預算，驅動你已經在用的 agent，例如 Claude Code 或 Codex。CrewAI 是 Python 框架，用來撰寫由角色導向 agent 組成的 crew，這些 agent 透過 API 呼叫 LLM，另有商業平台用來部署。以下逐項比較兩者，並說明 Crewmark 處在什麼位置。",
      differences: [
        "層面：Paperclip 是透過網頁介面執行和管理的應用程式；CrewAI 是讓你撰寫程式碼呼叫的函式庫。",
        "Agent：Paperclip 透過轉接器驅動現有的 agent，例如 Claude Code、Codex 或 OpenClaw；CrewAI 的 agent 在 Python 中定義，有角色、目標和背景故事，並呼叫 LLM API。",
        "工作：Paperclip 有連結到目標和專案的工單，可指派給 agent 或人；CrewAI 在程式碼中的 crew 和 flow 裡定義任務。",
        "排程：Paperclip 有心跳和以 cron 為基礎的 Routines；CrewAI 的 cron 排程列在其 AMP 平台上，並未列為框架本身的功能。",
      ],
      pickA: [
        "你想為已經在用的 agent（例如 Claude Code 或 Codex）建立組織圖、預算和工單。",
        "你寧可自架，並在網頁介面而不是程式碼中管理團隊。",
      ],
      pickB: [
        "你要把 agent 工作流程建構進自己的 Python 應用程式。",
        "你想在程式碼中為每個 agent 選擇模型和工具，並部署在 CrewAI 的平台或你自己的基礎架構上。",
      ],
      faq: [
        { q: "Paperclip 是開源的嗎？", a: "是，採 MIT 授權，自架版本免費。雲端版開放候補中。" },
        {
          q: "CrewAI 免費嗎？",
          a: "CrewAI 框架以 MIT 授權開源，可免費使用；你需要向模型供應商付費。CrewAI AMP 平台有免費的 Basic 方案，每月 50 次工作流程執行，另有客製報價的 Enterprise 方案。",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "有組織圖的 AI 公司 vs 給程式設計 agent 用的 issue 看板",
      title: "Paperclip vs Multica：給 agent 用組織圖還是 issue 看板？",
      description:
        "Paperclip vs Multica：兩者都讓你現有的 agent（例如 Claude Code 和 Codex）去執行任務。一個用組織圖和預算模擬一間公司，另一個是 issue 看板。",
      h1: "Paperclip vs Multica：給你的 agent 一間 AI 公司，還是一塊 issue 看板",
      lead: "Paperclip 和 Multica 解決的是類似的問題：你已經有 Claude Code、Codex 這類程式設計 agent，想在看板上而不是終端機裡指派工作給它們。Paperclip 把這一切建模成一間公司，有組織圖、預算和治理機制。Multica 更接近 issue 追蹤工具，agent 是負責人，由你機器上的 daemon 執行它們的 CLI。以下是兩者的並排比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "組織模型：Paperclip 為 agent 設定職稱、匯報關係、職務說明和預算；Multica 為每個 agent 設定名稱、供應商、執行環境和指示，並把它們編入由領頭 agent 帶領的 squad。",
        "授權：Paperclip 以 MIT 授權開源；Multica 是原始碼公開的，採附加條件的 Apache 2.0，在你自己的組織內自架免費。",
        "部署：Paperclip 是自架的，雲端版開放候補中；Multica 提供雲端應用程式、自架和桌面應用程式。",
        "Agent：Paperclip 透過轉接器接入 agent；Multica 的 daemon 執行你已經安裝的 agent CLI，共支援 29 種。",
      ],
      pickA: [
        "你想為整支 agent 團隊設定匯報關係、預算和核准流程。",
        "你想要自己執行、採 MIT 授權的軟體。",
      ],
      pickB: [
        "你想要一塊由 agent 擔任負責人的 issue 看板，用雲端版或自架。",
        "你用許多不同的 agent CLI，想把它們全部放在同一塊看板上。",
      ],
      faq: [
        {
          q: "Paperclip 和 Multica 支援 Claude Code 和 Codex 嗎？",
          a: "支援。Paperclip 透過轉接器接入它們，Multica 的 daemon 在你掌控的機器上執行它們的 CLI。兩者也都支援其他幾種 agent。",
        },
        {
          q: "Multica 是開源的嗎？",
          a: "它是原始碼公開的：Multica License 是 Apache 2.0 加上額外條件。在你自己的組織內使用（包括自架）是免費的；把它當成託管服務對外提供則需要商業授權。",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "由 agent 組成的公司 vs 一個個人助理（Paperclip 可以執行 OpenClaw）",
      title: "Paperclip vs OpenClaw：AI 公司還是個人 agent？",
      description:
        "Paperclip vs OpenClaw：OpenClaw 是在你自己電腦上執行的開源個人 AI 助理；Paperclip 把一支 agent 團隊（包括 OpenClaw）當成公司來經營。比較價格、排程和任務。",
      h1: "Paperclip vs OpenClaw：一間由 agent 組成的公司，還是一個個人 agent",
      lead: "Paperclip 的 README 說得很直接：如果 OpenClaw 是一位員工，Paperclip 就是那間公司。OpenClaw 是在你機器上執行的開源個人助理，透過聊天應用程式和你對話。Paperclip 是自架的控制平面，有組織圖、任務和預算，可以驅動 OpenClaw、Claude Code、Codex 等 agent。兩者經常搭配使用。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "範圍：OpenClaw 是一個助理（或一個 Gateway 上多個彼此隔離的 agent），你在聊天應用程式裡和它對話；Paperclip 把許多 agent 組織成職位、匯報關係和預算。",
        "工作：Paperclip 有連結到目標和專案的工單；OpenClaw 的文件說它共用的 Tasks 帳本和 TaskFlow 已移除，所以它沒有任務看板。",
        "Agent：OpenClaw 以外掛形式接入模型供應商；Paperclip 透過轉接器驅動現有的 agent，其中包括 OpenClaw。",
        "兩者都採 MIT 授權，可免費執行；你向模型供應商付費。",
      ],
      pickA: [
        "你執行多個 agent，想把它們組成一支有職位、任務和預算的團隊。",
        "你希望 OpenClaw 是幾位員工之一，而不是你唯一的 agent。",
      ],
      pickB: [
        "你想要一個在 WhatsApp、Telegram、Slack 或 iMessage 上回覆你的個人助理。",
        "你想讓自動化和 agent 在你自己的電腦上執行，不依賴託管服務。",
      ],
      faq: [
        { q: "Paperclip 能執行 OpenClaw 嗎？", a: "可以。OpenClaw 是 Paperclip 透過轉接器接入的 agent 之一，和 Claude Code、Codex 等並列。" },
        {
          q: "OpenClaw 免費嗎？",
          a: "是。它採 MIT 授權，README 說它沒有付費方案、託管服務或代幣；你向接入的模型供應商付費。",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "AI 公司控制平面 vs Nous Research 能自我改進的個人 agent",
      title: "Paperclip vs Hermes Agent：AI 公司還是自我改進的 agent？",
      description:
        "Paperclip vs Hermes Agent：一個是把 agent 團隊當成公司經營的自架控制平面，一個是 Nous Research 附 Bot 和例行工作的開源個人 agent。逐項比較。",
      h1: "Paperclip vs Hermes Agent：一支 agent 團隊，還是一個會學習的 agent",
      lead: "Paperclip 和 Hermes Agent 都以 MIT 授權開源，也都能執行不只一個 agent，但出發點正好相反。Hermes Agent 是 Nous Research 的個人 agent，會撰寫並改進自己的技能，還有能執行多個具名 Bot 的 Bot Mode。Paperclip 是控制平面，把 agent（包括 Hermes）組織成一間公司，有組織圖、工單和預算。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "出發點：Hermes Agent 是你從終端機、桌面應用程式或聊天應用程式對話的 agent；Paperclip 是網頁應用程式，把工作指派給你接入的 agent。",
        "工作：Paperclip 有連結到目標和專案的工單；Hermes Agent 的文件中沒有任務看板或 issue 追蹤工具。",
        "多個 agent：Paperclip 用職位和匯報關係；在 Hermes Agent 的 Bot Mode 中，每個 Bot 有自己的角色、模型和記憶，Bot 之間直接互傳訊息。",
        "部署：Paperclip 是自架的；Hermes Agent 在你的機器或伺服器上執行，Nous Portal 的付費方案包含一個雲端託管的 agent。",
      ],
      pickA: [
        "你想要一支由不同 agent（Claude Code、Codex、Hermes 等）組成的團隊，有職位、工單和預算。",
        "你希望在看板上而不是聊天裡追蹤工作。",
      ],
      pickB: [
        "你想要一個隨時間累積技能和記憶的 agent。",
        "你想要能互相對話、執行例行工作的具名 Bot，可從終端機、桌面應用程式或聊天應用程式使用。",
      ],
      faq: [
        { q: "Paperclip 能執行 Hermes Agent 嗎？", a: "可以。Hermes 是 Paperclip 在轉接器中列出的 agent 之一。" },
        {
          q: "Hermes Agent 多少錢？",
          a: "agent 本身免費，採 MIT 授權；你向模型供應商付費。選用的 Nous Portal 訂閱有 Free、Plus（每月 $20）、Super（$100）和 Ultra（$200）幾種方案。",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "建構 agent crew 的框架 vs 裝好就能用的個人助理",
      title: "CrewAI vs OpenClaw：agent 框架還是個人助理？",
      description:
        "CrewAI vs OpenClaw：一個是建構多 agent crew 的 Python 框架，一個是在你自己電腦上執行、透過聊天應用程式對話的開源個人 AI 助理。逐項比較。",
      h1: "CrewAI vs OpenClaw：用程式碼建構 agent，還是執行一個個人助理",
      lead: "CrewAI 和 OpenClaw 都涉及多個 agent 協同工作，但用法很不一樣。CrewAI 是 Python 框架：你撰寫由角色導向 agent 組成的 crew 和 flow，部署在它的 AMP 平台或你自己的伺服器上。OpenClaw 是現成的個人助理，在你的電腦上執行，透過 WhatsApp、Telegram、Slack 等聊天應用程式回覆你。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "你要做的事：用 CrewAI 要寫 Python；用 OpenClaw 是安裝並設定一個助理。",
        "在哪裡和它對話：CrewAI 在你的應用程式內部執行；OpenClaw 在你已經在用的聊天應用程式裡回覆你。",
        "多個 agent：CrewAI 的 agent 之間委派工作、互相提問，階層模式下有一個管理者 agent；OpenClaw 在一個 Gateway 上執行多個彼此隔離的 agent，並有附協調者的團隊預設。",
        "兩者都採 MIT 授權。CrewAI 的 AMP 平台是商業產品；OpenClaw 沒有付費方案。",
      ],
      pickA: [
        "你是開發者，要把多 agent 工作流程建構進產品裡。",
        "你想在託管平台上部署和監控 crew。",
      ],
      pickB: [
        "你現在就想要一個個人助理，而且不用寫程式。",
        "你想讓它在自己的機器上執行，並能透過聊天應用程式從手機找到它。",
      ],
      faq: [
        {
          q: "CrewAI 和 OpenClaw，哪個適合非開發者？",
          a: "OpenClaw 只需安裝和設定，然後在聊天應用程式裡和它對話。CrewAI 是 Python 函式庫，是為了把 agent 放進自己軟體裡的開發者而設計。",
        },
        {
          q: "CrewAI 和 OpenClaw 是開源的嗎？",
          a: "兩者都採 MIT 授權。CrewAI 的 AMP 平台是另外的商業產品；OpenClaw 沒有付費方案，也沒有託管服務。",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "以角色為主的 crew vs 以圖為主的編排，兩者都是開源框架",
      title: "CrewAI vs LangGraph：多 agent 框架比較（2026）",
      description:
        "CrewAI vs LangGraph：以角色為主的 crew 和 flow，還是由狀態、節點和邊組成的圖。比較授權、託管平台價格（CrewAI AMP、LangSmith）、排程和多 agent 模式。",
      h1: "CrewAI vs LangGraph：建構多 agent 系統的兩種開源做法",
      lead: "CrewAI 和 LangGraph 是用程式碼建構多 agent 系統時最常被拿來比較的兩個框架。CrewAI 把 agent 組織成 crew，每個 agent 有角色、目標和背景故事，另有事件驅動的 flow。LangGraph 讓你把工作流程定義成由共用狀態、節點和邊組成的圖，不預設任何 agent 架構。兩者都採 MIT 授權，兩家公司也都販售託管平台。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "抽象方式：CrewAI 從具有角色、目標和背景故事的 agent 出發；LangGraph 從由狀態和節點組成的圖出發，不預設提示詞或 agent 架構。",
        "語言：CrewAI 用 Python；LangGraph 有 Python 和 JavaScript/TypeScript 兩套函式庫。",
        "託管平台：CrewAI AMP 有免費的 Basic 方案（每月 50 次工作流程執行）和客製報價的 Enterprise 方案；LangSmith 有免費的 Developer 方案、每個席位每月 $39 的 Plus 方案和客製報價的 Enterprise 方案。",
        "排程：兩者列出的 cron 工作都在託管平台上，而不在開源函式庫本身。",
      ],
      pickA: [
        "你想依角色和目標來描述 agent，並讓它們互相委派。",
        "你用 Python 開發，並希望平台端有無程式碼的 Studio。",
      ],
      pickB: [
        "你想精細控制狀態以及步驟之間的路徑。",
        "你除了 Python 也用 JavaScript 或 TypeScript，或已經在用 LangSmith。",
      ],
      faq: [
        {
          q: "LangGraph 需要 LangChain 嗎？",
          a: "不需要。它由 LangChain, Inc. 開發，但其文件說明 LangGraph 不需要 LangChain。LangSmith 提供追蹤、評估和部署。",
        },
        {
          q: "CrewAI 和 LangGraph 免費嗎？",
          a: "兩個框架都免費，採 MIT 授權。它們的託管平台 CrewAI AMP 和 LangSmith 都有免費方案，另有付費或客製方案。",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "兩個多 agent 框架；AutoGen 的 README 說它已封存",
      title: "CrewAI vs AutoGen：多 agent 框架比較（2026）",
      description:
        "CrewAI vs AutoGen：以角色為主的 crew 和 flow，還是 Microsoft 的群組聊天和團隊（現已封存，由 Microsoft Agent Framework 接替）。比較授權、模型和專案狀態。",
      h1: "CrewAI vs AutoGen：crew 和 flow vs 群組聊天，以及由誰維護",
      lead: "CrewAI 和 AutoGen 都是較早出現、頗受歡迎的做法，用程式碼讓多個 LLM agent 協同工作。CrewAI 由 crewAI, Inc. 開發，另有商業平台。AutoGen 的 README 現在寫明它已封存、Microsoft 不再維護，並建議新使用者改用 Microsoft Agent Framework，Microsoft 稱之為它的直接後繼者。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "維護：CrewAI 持續積極開發中；AutoGen 的 README 說它已封存，Microsoft 不再積極維護，也不再提供錯誤修正或安全性修正。",
        "模式：CrewAI 有由角色導向 agent 組成的 crew 和 flow；AutoGen 有群組聊天、selector 和 swarm 團隊，以及事件驅動的訊息傳遞。",
        "語言：CrewAI 用 Python；AutoGen 有 Python 和 .NET。",
        "託管：CrewAI AMP 用來部署和執行 crew；AutoGen 沒有託管服務，AutoGen Studio 在本機執行。",
      ],
      pickA: [
        "你要開始一個新的多 agent 專案，想要一個有人維護、附託管選項的框架。",
        "你想要能互相委派工作的角色導向 agent。",
      ],
      pickB: [
        "你在維護一個現有的 AutoGen 應用程式，遷移前需要弄清楚自己在執行什麼。",
        "你在評估 Microsoft Agent Framework，想拿它和它的前身比較。",
      ],
      faq: [
        {
          q: "AutoGen 還有在維護嗎？",
          a: "它的 README 說專案已封存，Microsoft 不再積極維護，並推薦 Microsoft Agent Framework，Microsoft Learn 稱它為 AutoGen 的直接後繼者。",
        },
        { q: "CrewAI 免費嗎？", a: "框架採 MIT 授權，免費。CrewAI AMP 平台有免費的 Basic 方案和客製報價的 Enterprise 方案。" },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "給 agent CLI 用的 issue 看板 vs 附 Bot 和例行工作的個人 agent",
      title: "Multica vs Hermes Agent：agent 看板還是個人 agent？",
      description:
        "Multica vs Hermes Agent：一個是讓程式設計 agent CLI（包括 Hermes）接手任務的 issue 看板，一個是 Nous Research 能自我改進的個人 agent。比較授權、部署和排程。",
      h1: "Multica vs Hermes Agent：給 agent 用的看板，還是 agent 本身",
      lead: "Multica 和 Hermes Agent 處在不同的層面。Hermes Agent 是一個 agent：Nous Research 的開源個人助理，能從經驗中學習技能，也能執行具名的 Bot。Multica 是包在 agent 外面的看板：你指派 issue，由你機器上的 daemon 執行你選的 agent CLI，其中也包括 Hermes。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "層面：Multica 負責指派和追蹤工作；Hermes Agent 負責實際做事。",
        "工作追蹤：Multica 有看板檢視和清單檢視，agent 是負責人；Hermes Agent 的文件中沒有任務看板。",
        "排程：Multica 的 Autopilots 依 cron 或 webhook 執行並建立 issue；Hermes Agent 有內建的 cron 排程器和每個 Bot 各自的例行工作。",
        "授權：Hermes Agent 採 MIT；Multica 是原始碼公開的，在你自己的組織內自架免費。",
      ],
      pickA: [
        "你想為多個 agent（可能包括 Hermes）管理 issue、專案和審查。",
        "你的團隊（人和 agent）在同一塊看板上工作。",
      ],
      pickB: [
        "你想要一個會保留記憶、改進自身技能的單一 agent。",
        "你寧可在終端機、桌面應用程式或聊天應用程式裡和 agent 對話，也不想管理看板。",
      ],
      faq: [
        { q: "Multica 支援 Hermes Agent 嗎？", a: "支援。Hermes 是 Multica 的 daemon 能執行的 29 種 agent CLI 之一。" },
        { q: "Hermes Agent 能依排程執行嗎？", a: "可以。它有內建的 cron 排程器，在 Bot Mode 中每個 Bot 都可以有例行工作。" },
      ],
    },
    "multica-vs-linear": {
      summary: "兩款讓 agent 擔任負責人的 issue 追蹤工具：一款給 agent CLI，一款給產品團隊",
      title: "Multica vs Linear：AI agent 的 issue 追蹤比較",
      description:
        "Multica vs Linear：兩者都能把 issue 指派給 AI agent。Multica 在你的機器上執行程式設計 agent CLI；Linear 是託管的追蹤工具，附 Linear Agent 和雲端程式設計 agent。",
      h1: "Multica vs Linear：你的 agent 在哪裡接 issue",
      lead: "Linear 是許多產品團隊已經在用的 issue 追蹤工具，現在也能把 issue 委派給 Linear Agent、以 Claude Code 或 Codex 為基礎的雲端程式設計 agent，以及第三方 agent。Multica 從一開始就以 agent 為核心打造：一塊 issue 看板，由你自己機器上的 daemon 執行你已安裝的 agent CLI。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "agent 在哪裡執行：Multica 的 daemon 在你掌控的筆電或伺服器上執行 agent CLI；Linear 的程式設計 agent 在 Linear 的雲端執行。",
        "指派方式：在 Multica 中，agent 就是負責人；在 Linear 中，委派後人仍是主要負責人，agent 以貢獻者身分加入。",
        "定期工作：Multica 的 Autopilots 依 cron 或 webhook 執行；Linear 的 Loops 依排程或由事件觸發，從 AI 額度扣款。",
        "部署和價格：Multica 可以自架（原始碼公開）；Linear 只有託管版，有 Free、Basic（$10）和 Business（$16），每位使用者每月，按年計費。",
      ],
      pickA: [
        "你想讓 agent 在你自己的硬體上執行，使用你已有的 CLI 和登入狀態。",
        "你想自架看板。",
      ],
      pickB: [
        "你的團隊已經在 Linear 裡做規劃，希望 agent 就在同一個追蹤工具裡。",
        "你比較希望程式設計 agent 在廠商的雲端執行。",
      ],
      faq: [
        {
          q: "Linear 能把 issue 指派給 AI agent 嗎？",
          a: "可以。你可以把 issue 委派給 Linear Agent、使用 Claude Code 或 Codex 的雲端程式設計 agent，以及安裝在你工作區裡的第三方 agent，例如 Cursor、Codex 和 Devin。",
        },
        {
          q: "Linear 多少錢？",
          a: "Free 是 $0，包含 2 個團隊和 250 個 issue。Basic 每位使用者每月 $10，Business 每位使用者每月 $16，按年計費。雲端程式設計 agent 和 Loops 還會使用預付的 AI 額度。",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "聊天應用程式裡的個人助理 vs Anthropic 的程式設計 agent",
      title: "OpenClaw vs Claude Code：個人助理還是程式設計 agent？",
      description:
        "OpenClaw vs Claude Code：一個是在聊天應用程式裡回覆你的開源個人助理，一個是 Anthropic 用於程式碼儲存庫的程式設計 agent。比較開源與否、價格、模型和排程。",
      h1: "OpenClaw vs Claude Code：聊天裡的助理，還是程式碼裡的 agent",
      lead: "OpenClaw 和 Claude Code 都是在你自己電腦上執行的 agent，OpenClaw 甚至可以沿用 Claude Code 的登入來使用 Claude 模型。但它們是為不同的工作而設計。OpenClaw 是個人助理，你透過 WhatsApp、Telegram、Slack 或 iMessage 找它。Claude Code 是 Anthropic 的程式設計 agent：讀取你的程式碼庫、編輯檔案、執行指令。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "用途：OpenClaw 透過聊天應用程式處理個人事務和自動化；Claude Code 在程式碼儲存庫中工作，可從終端機、IDE、桌面應用程式或網頁使用。",
        "模型：OpenClaw 以外掛形式接入許多供應商，Claude 是其中之一；Claude Code 在 Claude 模型上執行。",
        "價格和授權：OpenClaw 採 MIT 授權、免費（你向模型供應商付費）；Claude Code 包含在每月 $20 起的 Claude 付費方案中，不是開源的。",
        "排程：OpenClaw 有內建的 Automations 排程器；Claude Code 有雲端和桌面排程任務以及 `/loop`。",
      ],
      pickA: [
        "你想要一個能從手機傳訊息給它的助理，處理個人事務和自動化。",
        "你想混用多家模型供應商，包括本機模型。",
      ],
      pickB: [
        "你的工作在程式碼庫裡：新功能、修正、審查和重構。",
        "你已經在付費使用 Claude 方案。",
      ],
      faq: [
        { q: "OpenClaw 能用 Claude 嗎？", a: "可以，用 Anthropic API key，或沿用同一台機器上的 Claude Code 登入。" },
        { q: "Claude Code 免費嗎？", a: "不免費。它包含在 Claude 付費方案中（Pro、Max、Ultra、Team 和 Enterprise），Free 方案不包含。" },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Nous Research 能自我改進的個人 agent vs Anthropic 的程式設計 agent",
      title: "Hermes Agent vs Claude Code：個人 agent 還是程式設計 agent？",
      description:
        "Hermes Agent vs Claude Code：Nous Research 會學習技能、能執行 Bot 的開源 agent，還是 Anthropic 的程式設計 agent。比較模型、價格、排程和多 agent 功能。",
      h1: "Hermes Agent vs Claude Code：會學習的個人 agent，還是程式設計 agent",
      lead: "Hermes Agent 和 Claude Code 都在你的機器上執行，都有 subagent 和排程功能，也都能使用 Claude 模型。差別在於重心。Nous Research 的 Hermes Agent 是具有學習迴圈的個人 agent：它從經驗中撰寫技能，保有自己的記憶，可接入任何模型供應商。Claude Code 是 Anthropic 用於在程式碼庫中工作的程式設計 agent。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "重心：Hermes Agent 是通用的個人 agent；Claude Code 是為寫程式而打造的。",
        "模型：Hermes Agent 支援許多供應商，其文件說 Claude 訂閱只在 Max 加購額外用量時可用；Claude Code 在 Claude 模型上執行。",
        "多個 agent：Hermes Agent 的 Bot 之間直接互傳訊息；在 Claude Code 實驗性的 agent teams 中，隊友之間互傳訊息。",
        "價格和授權：Hermes Agent 採 MIT、免費，可選擇訂閱 Nous Portal；Claude Code 隨 Claude 付費方案提供，不是開源的。",
      ],
      pickA: [
        "你想要一個能處理多種任務、技能隨時間進步的 agent。",
        "你想自由選擇和切換模型供應商。",
      ],
      pickB: [
        "你的主要工作在程式碼庫裡。",
        "你想要 Anthropic 圍繞它的配套工具：IDE 擴充功能、桌面應用程式、程式碼審查和排程任務。",
      ],
      faq: [
        {
          q: "Hermes Agent 能用我的 Claude 訂閱嗎？",
          a: "它的文件說，透過 Claude 訂閱使用的方式只適用於加購額外用量的 Claude Max，不適用於 Claude Pro。你也可以用 API key 使用 Claude。",
        },
        {
          q: "Claude Code 會像 Hermes Agent 一樣學習新技能嗎？",
          a: "Claude Code 使用你或你的團隊寫成 SKILL.md 檔案的技能，並保有自動記憶。Hermes Agent 明確的重心是根據自身經驗撰寫和改進技能。",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "個人助理 vs 開源程式設計 agent，兩者都採 MIT、不綁定模型",
      title: "OpenClaw vs OpenCode：個人助理還是程式設計 agent？",
      description:
        "OpenClaw vs OpenCode：兩個採 MIT 授權、不綁定模型的 agent。一個是聊天應用程式裡的個人助理，一個是在終端機、桌面或瀏覽器中執行的程式設計 agent。",
      h1: "OpenClaw vs OpenCode：名字相似，用途不同",
      lead: "OpenClaw 和 OpenCode 都以 MIT 授權開源，都在你自己的機器上執行，也都支援許多模型供應商，所以常被拿來比較。但它們做的是不同的事。OpenClaw 是個人助理，你在 WhatsApp、Telegram、Slack 等聊天應用程式裡和它對話。OpenCode 是程式設計 agent，提供終端機 UI、桌面應用程式、網頁應用程式和 SDK。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "用途：OpenClaw 透過聊天處理個人事務和自動化；OpenCode 撰寫和修改程式碼。",
        "介面：OpenClaw 在聊天應用程式裡回覆，並有 Control UI；OpenCode 以終端機 UI、桌面應用程式、網頁應用程式和 SDK 的形式執行。",
        "付費選項：OpenClaw 沒有付費方案；OpenCode 免費並提供免費模型，另有每月 $10 的 OpenCode Go 和每月 $40 的 Go Plus。",
        "排程：OpenClaw 有內建排程器；OpenCode 的排程是實驗性的，需要手動啟用。",
      ],
      pickA: [
        "你想要一個在任何地方都能傳訊息給它的助理。",
        "你想要由排程、webhook 或電子郵件觸發的自動化。",
      ],
      pickB: [
        "你想要一個開源程式設計 agent，支援 200+ 家模型供應商，包括本機模型。",
        "你想用免費模型、不需帳號就開始寫程式。",
      ],
      faq: [
        {
          q: "OpenClaw 和 OpenCode 是同一個專案嗎？",
          a: "不是。OpenClaw 是 OpenClaw Foundation 的個人助理；OpenCode 是 Anomaly 的程式設計 agent。兩者都採 MIT 授權。",
        },
        {
          q: "用 OpenCode 需要 API key 嗎？",
          a: "剛開始不需要：它內建有每日用量上限的免費模型，使用這些模型不需要帳號。你也可以接入自己的供應商，或訂閱 OpenCode Go。",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Claude Code 實驗性的 agent teams vs OpenClaw 的多 agent Gateway",
      title: "Claude Code Agent Teams vs OpenClaw：多 agent 架構比較",
      description:
        "Claude Code agent teams vs OpenClaw：一個是 Claude Code 內實驗性的主導者加隊友模式，一個是在同一個 OpenClaw Gateway 上執行的多個個人 agent。看兩者各自如何執行多個 agent。",
      h1: "Claude Code agent teams vs OpenClaw：執行多個 agent 的兩種方式",
      lead: "兩者都能讓不只一個 agent 協同工作。Claude Code agent teams 是一項實驗性功能，預設關閉：由一個主導工作階段產生隊友，也就是各自獨立的 Claude Code 執行個體，它們共用任務清單並互傳訊息。OpenClaw 在你機器上的一個 Gateway 裡執行多個彼此隔離的 agent，並有一個團隊預設，由協調者把工作委派給研究員、寫手和審閱者 agent。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "目的：agent teams 把一項程式設計任務分給多個 Claude Code 執行個體；OpenClaw 的 agent 是你透過聊天應用程式聯絡的個人助理。",
        "協調：agent teams 共用一份附相依關係的任務清單，隊友之間互傳訊息；OpenClaw 的 agent 可以存取彼此的工作階段，其文件把團隊預設稱為提示詞層面的引導，而不是排程器。",
        "生命週期：agent team 在一個主導工作階段底下為某項任務執行；OpenClaw 的 agent 常駐在 Gateway 上，執行排程自動化。",
        "成本：agent teams 隨 Claude 付費方案中的 Claude Code 提供；OpenClaw 免費，採 MIT 授權。",
      ],
      pickA: [
        "你想讓多個 Claude Code 執行個體分工處理一項大型程式設計任務，並互相溝通。",
        "你已經在用 Claude Code，也不介意開啟一項實驗性功能。",
      ],
      pickB: [
        "你想在自己的機器上執行長期存在、各有人設的個人 agent。",
        "你想透過聊天應用程式聯絡它們，並讓它們依排程執行。",
      ],
      faq: [
        {
          q: "怎麼開啟 Claude Code agent teams？",
          a: "它是實驗性功能，預設關閉：設定 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 後，主導工作階段就能產生隊友。請參閱 [Claude Code agent teams 詳解](/blog/claude-code-agent-teams)。",
        },
        {
          q: "OpenClaw 的 agent 能組成團隊工作嗎？",
          a: "可以。一個 Gateway 可以執行多個彼此隔離的 agent，團隊預設會建立一個協調者，以及研究員、寫手和審閱者 agent。",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "兩款平行程式設計 agent 工具，背後的公司都在 2026 年陸續收掉了託管服務",
      title: "Vibe Kanban vs Conductor：2026 年的平行程式設計 agent",
      description:
        "Vibe Kanban vs Conductor：一個是給程式設計 agent 用的開源看板，一個是宣布加入 Meta、已關閉新使用者註冊的 Mac 應用程式。兩者各自還有什麼可用，以及如何比較。",
      h1: "Vibe Kanban vs Conductor：兩者各自還剩下什麼，以及如何比較",
      lead: "Vibe Kanban 和 Conductor 都能平行執行多個程式設計 agent，每個都在自己的 git worktree 中，方便你審查和合併它們的成果。兩者在 2026 年都有了變化。Vibe Kanban 背後的公司 bloop 在 4 月結束營運，專案以社群維護的開源形式延續。Conductor 在 11 月 4 日宣布加入 Meta：新使用者註冊和下載已關閉，它的雲端自 11 月 13 日起唯讀、11 月 20 日關閉，Mac 應用程式會持續獲得新模型和重大修正，直到 2027 年初。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "可用性：Vibe Kanban 的本機應用程式任何人都能免費執行；Conductor 不再接受新使用者註冊或下載。",
        "看板：Vibe Kanban 以看板 issue 規劃工作；Conductor 列出工作區，可以從 GitHub 或 Linear issue 建立工作區。",
        "授權：Vibe Kanban 以 Apache-2.0 授權開源；Conductor 是閉源的。",
        "平台和 agent：Vibe Kanban 在瀏覽器中執行，或作為桌面應用程式；Conductor 是 Mac 應用程式。兩者都能執行 Claude Code、Codex、Cursor 和 OpenCode，Vibe Kanban 還列出了 Gemini CLI、GitHub Copilot、Amp 等。",
      ],
      pickA: [
        "你想要一個能持續執行下去、也能自行修改的開源工具。",
        "你想在 agent 前面放一塊看板。",
      ],
      pickB: [
        "你已經在 Mac 上使用 Conductor，只需要本機應用程式。",
        "你能接受雲端功能在 2026 年 11 月 20 日結束。",
      ],
      faq: [
        {
          q: "Conductor 要關閉了嗎？",
          a: "Conductor 在 2026 年 11 月 4 日宣布加入 Meta。新使用者註冊和下載已關閉，它的雲端自 11 月 13 日起唯讀、11 月 20 日關閉，Mac 應用程式會持續獲得新模型和重大修正，直到 2027 年初。請參閱 [Conductor 替代方案](/blog/conductor-alternatives)。",
        },
        {
          q: "Vibe Kanban 還有人維護嗎？",
          a: "bloop 在 2026 年 4 月 10 日宣布結束營運。專案以 Apache-2.0 授權開源延續，由社群維護，本機應用程式可免費執行。",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "平行程式設計 agent：開源終端機應用程式 vs 宣布加入 Meta 的 Mac 應用程式",
      title: "Claude Squad vs Conductor：平行執行 Claude Code agent",
      description:
        "Claude Squad vs Conductor：一個是在 tmux 和 worktree 中執行 agent 的開源終端機應用程式，一個是宣布加入 Meta、已關閉新使用者註冊、雲端於 2026 年 11 月 20 日結束的 Mac 應用程式。",
      h1: "Claude Squad vs Conductor：用終端機還是 Mac 應用程式平行執行 agent",
      lead: "Claude Squad 和 Conductor 的核心工作相同：同時執行多個程式設計 agent，每個都在 git worktree 中各自的分支上，並協助你審查和合併成果。Claude Squad 是以 tmux 為基礎的開源終端機應用程式。Conductor 是閉源的 Mac 應用程式，它在 2026 年 11 月 4 日宣布加入 Meta，不再接受新使用者。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "介面：Claude Squad 是終端機 UI，需要 tmux 和 GitHub CLI；Conductor 是 Mac 桌面應用程式。",
        "授權：Claude Squad 以 AGPL-3.0 授權開源；Conductor 是閉源的。",
        "Agent：Claude Squad 預設使用 Claude Code，也能執行 Codex、Gemini、Aider 或你設定的任何程式；Conductor 執行 Claude Code、Codex、OpenCode 和 Cursor Agent。",
        "現況：Claude Squad 的最新版本是 v1.0.20（2026 年 8 月）；Conductor 在 2026 年 11 月 4 日關閉新使用者註冊和下載，11 月 20 日結束雲端服務，Mac 應用程式會更新到 2027 年初。",
      ],
      pickA: [
        "你整天待在終端機裡，想要一個任何人都能安裝的開源工具。",
        "你想執行任何能設定的 CLI agent。",
      ],
      pickB: [
        "你已經在用 Conductor，偏好內建 diff 和 pull request 的桌面應用程式。",
        "你用 Mac，而且在 2027 年初之前只需要本機應用程式。",
      ],
      faq: [
        { q: "Claude Squad 免費嗎？", a: "免費。它以 AGPL-3.0 授權開源；你為在其中執行的 agent 或模型 API 付費。" },
        {
          q: "現在還能下載 Conductor 嗎？",
          a: "新使用者不行：Conductor 在 2026 年 11 月 4 日宣布加入 Meta 時關閉了註冊和下載。現有使用者可以繼續使用 Mac 應用程式，它會更新到 2027 年初。",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Cognition 的雲端 AI 軟體工程師 vs Anthropic 的程式設計 agent",
      title: "Devin vs Claude Code：AI 軟體工程師還是程式設計 agent？",
      description:
        "Devin vs Claude Code：Cognition 附雲端虛擬機器、Automations 和子工作階段的 AI 軟體工程師，還是 Anthropic 用於終端機、IDE 和桌面的程式設計 agent。比較價格和功能。",
      h1: "Devin vs Claude Code：雲端的工程師，還是在你身邊的 agent",
      lead: "Devin 和 Claude Code 都是程式設計 agent，能撰寫、執行和測試程式碼，並開 pull request。Cognition 的 Devin 以雲端工作階段為核心，每個工作階段有自己的虛擬機器，還有 Automations 和一個執行子 Devin 的協調者；它也有桌面應用程式和 CLI。Anthropic 的 Claude Code 在你的終端機、IDE、桌面應用程式或網頁中工作，在 Claude 模型上執行。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "執行位置：每個 Devin 雲端工作階段都有自己的虛擬機器；Claude Code 預設在本機執行，網頁版有雲端工作階段。",
        "模型：Devin 使用 Cognition 的 SWE-2 加上多家實驗室的前沿模型，由路由機制挑選；Claude Code 在 Claude 模型上執行。",
        "價格：Devin 有 Free、每月 $20 的 Pro、每月 $200 的 Max，以及每月 $80 外加每個開發者席位 $40 的 Teams；Claude Code 隨 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
        "自動化：Devin 的 Automations 依排程執行，也可由 Slack、GitHub、Linear 等來源的事件觸發；Claude Code 的雲端排程任務可依排程、透過 API 呼叫或由 GitHub 事件觸發。",
      ],
      pickA: [
        "你希望每項任務都在獨立的雲端虛擬機器中進行，並能從 Slack、Linear 或 Jira 發起。",
        "你想要一個能執行子工作階段並傳訊息給它們的協調者工作階段。",
      ],
      pickB: [
        "你希望 agent 在你自己 checkout 的程式碼和終端機裡工作。",
        "你已經在付費使用 Claude 方案，想要 IDE 擴充功能、桌面應用程式和網頁版。",
      ],
      faq: [
        {
          q: "Devin 多少錢？",
          a: "Free 是 $0，Pro 每月 $20，Max 每月 $200，Teams 每月 $80，外加每個完整開發者席位每月 $40，最多 100 位使用者；Enterprise 需另行報價。",
        },
        { q: "Claude Pro 包含 Claude Code 嗎？", a: "包含。所有 Claude 付費方案都包含 Claude Code：Pro、Max、Ultra、Team 和 Enterprise。" },
      ],
    },
    "devin-vs-codex": {
      summary: "Cognition 的 AI 軟體工程師 vs OpenAI 的程式設計 agent",
      title: "Devin vs Codex：AI 軟體工程師比較（2026）",
      description:
        "Devin vs OpenAI Codex：雲端虛擬機器、Automations 和子工作階段，還是在 CLI、IDE、ChatGPT 應用程式和雲端中的程式設計 agent。比較價格、開源與否、排程和模型。",
      h1: "Devin vs Codex：兩款也能在雲端工作的程式設計 agent",
      lead: "Devin 和 Codex 都能在本機和雲端執行程式設計任務，並開 pull request。Cognition 的 Devin 為每個雲端工作階段配置獨立的虛擬機器，並提供 Automations 和協調者工作階段。OpenAI 的 Codex 隨 ChatGPT 方案提供，可在終端機 CLI、IDE 擴充功能、ChatGPT 桌面應用程式和 Codex Cloud 中執行。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "定價：Devin 以自己的方案銷售（Free、Pro $20、Max $200、Teams）；Codex 包含在 Plus（每月 $20）以上的 ChatGPT 方案中，或搭配 API key 使用。",
        "開源：Codex 的 CLI、SDK 和 App Server 採 Apache-2.0；Devin 不是開源的。",
        "模型：Devin 在 Cognition 的 SWE-2 和前沿模型之間路由；Codex 在 OpenAI 模型上執行。",
        "排程：Devin 的 Automations 可依排程執行，也支援多種事件來源；Codex 在 ChatGPT 桌面應用程式和網頁版中提供排程任務。",
      ],
      pickA: [
        "你希望許多事件來源（Slack、Teams、Jira、PagerDuty、webhook）都能觸發工作。",
        "你想要一個在平行虛擬機器中執行子工作階段的協調者。",
      ],
      pickB: [
        "你已經在付費使用 ChatGPT，想讓 agent 待在你的終端機和 IDE 裡。",
        "你想要一個可以檢視原始碼的開源 CLI。",
      ],
      faq: [
        {
          q: "Codex 免費嗎？",
          a: "Codex 包含在 Plus（每月 $20）以上的 ChatGPT 付費方案中，也可以用 OpenAI API key 執行。CLI 本身以 Apache-2.0 授權開源。",
        },
        {
          q: "Devin 和 Codex 能接收 Linear issue 嗎？",
          a: "可以。你可以把 Linear issue 指派給 Devin；在 ChatGPT 付費方案中，你可以把 Linear issue 指派給 Codex，或在留言中提及它。",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Factory 的 Droids 平台 vs Anthropic 的程式設計 agent",
      title: "Factory vs Claude Code：Droids 還是 Claude Code？",
      description:
        "Factory（Droids）vs Claude Code：一個是附 Automations、Workstreams 和雲端電腦的程式設計 agent 平台，一個是 Anthropic 的程式設計 agent。比較模型、價格和多 agent 功能。",
      h1: "Factory vs Claude Code：Droids 平台，還是 Anthropic 的 agent",
      lead: "Factory 和 Claude Code 都是程式設計 agent，都有桌面應用程式、CLI 和用於 CI 的 headless 模式。Factory 的 Droids 支援許多模型（也能用你自己的 key），並提供 Automations、附編排者的 Workstreams，以及 Factory 託管的雲端電腦。Claude Code 是 Anthropic 在 Claude 模型上執行的 agent，包含在 Claude 付費方案中。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "模型：Factory 支援前沿模型、開放權重模型和你自己的 key；Claude Code 在 Claude 模型上執行。",
        "價格：Factory 有 Free（自備推論服務）、每月 $20 的 Pro、每月 $100 的 Plus 和更高方案；Claude Code 隨 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
        "多個 agent：在 Factory 的 Workstreams（beta）中，編排者底下的 agent 向它回報；在 Claude Code 實驗性的 agent teams 中，隊友之間互傳訊息。",
        "自動化：Factory 的 Automations 可依排程，或由 Slack、GitHub、webhook 觸發；Claude Code 有雲端排程任務和 GitHub Actions。",
      ],
      pickA: [
        "你想在不同實驗室的模型之間切換，或使用你自己的模型。",
        "你想要託管的雲端電腦，以及依排程執行的自動化，例如從工單到 PR。",
      ],
      pickB: [
        "你用 Claude 模型就夠了，而且已經在付費使用 Claude 方案。",
        "你想要 Anthropic 圍繞它的工具：程式碼審查、安全性審查和外掛。",
      ],
      faq: [
        {
          q: "Factory Droids 是什麼？",
          a: "Droids 是 Factory 的程式設計 agent。它們在 Factory 桌面應用程式和 Droid CLI 中執行，可透過 `droid exec` 在 CI 中以 headless 模式執行，也能在 Factory 託管的雲端電腦上執行。",
        },
        {
          q: "Factory 支援 Claude 模型嗎？",
          a: "Factory 表示它支援主流的前沿模型，包括 Claude Opus 和 Sonnet，也支援開放權重模型和你自己的 API key。",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "開源、可用任何模型的程式設計 agent vs Anthropic 的程式設計 agent",
      title: "OpenCode vs Claude Code：開源程式設計 agent 比較",
      description:
        "OpenCode vs Claude Code：一個是採 MIT 授權、支援 200+ 家模型供應商和免費模型的程式設計 agent，一個是 Claude 付費方案中的 Anthropic 程式設計 agent。比較價格、模型和功能。",
      h1: "OpenCode vs Claude Code：開源又能任選模型，還是 Anthropic 的 agent",
      lead: "OpenCode 和 Claude Code 都是程式設計 agent，都有終端機 UI、桌面應用程式、subagent 和 MCP。OpenCode 以 MIT 授權開源，支援 200+ 家供應商的模型，包括本機模型和一組免費模型。Claude Code 是 Anthropic 在 Claude 模型上執行的 agent，包含在 Claude 付費方案中。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "授權：OpenCode 採 MIT；Claude Code 的儲存庫是公開的，但保留所有權利。",
        "模型：OpenCode 透過 Models.dev 支援 200+ 家供應商；Claude Code 在 Claude 模型上執行。",
        "價格：OpenCode 免費並提供免費模型，OpenCode Go 每月 $10；Claude Code 隨 Pro（每月 $20）以上的 Claude 方案提供。",
        "排程：Claude Code 有雲端和桌面排程任務以及 `/loop`；OpenCode 的排程是實驗性的，需要手動啟用。",
      ],
      pickA: [
        "你想要一個開源 agent，並能自由挑選任何模型，包括本機模型。",
        "你想免費開始。",
      ],
      pickB: [
        "你想用 Claude 模型，並搭配 Anthropic 的工具：排程任務、程式碼審查和 IDE 擴充功能。",
        "你已經在付費使用 Claude 方案。",
      ],
      faq: [
        {
          q: "OpenCode 免費嗎？",
          a: "免費。agent 本身免費，採 MIT 授權，並內建有每日用量上限的免費模型。OpenCode Go 每月 $10，Go Plus 每月 $40。",
        },
        {
          q: "OpenCode 能用 Claude 模型嗎？",
          a: "OpenCode 支援 200+ 家模型供應商，其中包括 Anthropic，所以你可以用 API key 使用 Claude 模型。",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "低程式碼的 AI Workforce 建構平台 vs 現成的 AI 助理",
      title: "Relevance AI vs Lindy：AI Workforce 還是 AI 助理？",
      description:
        "Relevance AI vs Lindy：一個是建構 AI agent 團隊的低程式碼平台，一個是橫跨你的收件匣、行事曆和 Slack 的單一託管 AI 助理。比較價格、排程和 agent。",
      h1: "Relevance AI vs Lindy：打造一支 AI Workforce，還是聘用一位助理",
      lead: "Relevance AI 和 Lindy 都在賣 AI 員工這個概念，只是形式不同。Relevance AI 是低程式碼平台，用來建構專職 agent，並把它們串成多 agent 的「AI Workforce」，透過業務團隊賣給企業。Lindy 是一個託管助理，橫跨你的收件匣、行事曆、會議和 Slack 工作，有例行工作和核准機制。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "形式：Relevance AI 是建構許多專職 agent 的工具；Lindy 是每個工作區一個、由你交代任務的助理。",
        "定價：Relevance AI 的價格頁面只列出 Enterprise，需洽業務；Lindy 有附 $50 額度的免費試用，付費方案每位活躍使用者每月 $29.99 起。",
        "多個 agent：Relevance AI 的 agent 在畫布上互相傳遞工作；Lindy 的文件描述的是每個工作區一個 Lindy。",
        "核准：Lindy 在執行任何會對外產生影響的動作前都會先詢問；Relevance AI 有問題升級機制，Enterprise 方案還有工作時間控管。",
      ],
      pickA: [
        "你想設計幾個專職 agent 並把它們串起來，由廠商團隊協助你部署。",
        "你在為公司採購，預期要走業務洽談流程。",
      ],
      pickB: [
        "你今天就想要一個處理電子郵件、行事曆、會議和後續追蹤的助理。",
        "你想先免費試用再付費。",
      ],
      faq: [
        {
          q: "Lindy 多少錢？",
          a: "免費試用在 7 天內提供 $50 額度。付費方案每位活躍使用者每月 $29.99 起，含 3,000 額度。",
        },
        {
          q: "Relevance AI 有免費方案嗎？",
          a: "它的文件說 Free 方案已停用，公開的價格頁面只列出 Enterprise，需洽業務。",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "xAI 的託管 AI 隊友 vs Anthropic 的程式設計 agent",
      title: "Grok Bot vs Claude Code：AI 隊友還是程式設計 agent？",
      description:
        "Grok Bot vs Claude Code：xAI 有自己電腦、在 Slack 和你的應用程式中工作的託管 Bot，還是 Anthropic 用於程式碼庫的程式設計 agent。",
      h1: "Grok Bot vs Claude Code：應用程式裡的隊友，還是程式碼裡的 agent",
      lead: "Grok Bot 和 Claude Code 都能承擔實際工作，只是工作的地方不同。Grok Bot 是 xAI 的託管 AI 隊友：每個 Bot 都在雲端擁有一台自己的電腦，登入你的工具，在 Slack 和 Microsoft Teams 中工作，並執行例行工作。Claude Code 是 Anthropic 的程式設計 agent：它在你的程式碼儲存庫中工作，可從終端機、IDE、桌面應用程式或網頁使用。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作內容：Grok Bot 在 CRM、客服、報帳和招募等業務應用程式中處理工作；Claude Code 撰寫和修改程式碼。",
        "執行位置：每個 Grok Bot 都有自己的雲端電腦，你闔上筆電後它仍會繼續工作；Claude Code 預設在你的機器上執行，網頁版有雲端工作階段。",
        "使用方式：你在 Grok Bot 的應用程式、Slack、Teams 或視訊通話中傳訊息給 Bot；你在終端機、IDE、桌面應用程式或網頁中使用 Claude Code。",
        "價格：Grok Bot 有每月 $30 的 Premium、每月 $100 的 Super 和每月 $200 的 Ultra；Claude Code 隨 Claude Pro（$20）、Max（$100）、Ultra（$200）、Team 和 Enterprise 提供。",
      ],
      pickA: [
        "你想要 AI 隊友在團隊已經在用的應用程式中處理業務、營運或客服工作。",
        "你希望它們在 Slack 和你的會議中，並在你闔上筆電時繼續工作。",
      ],
      pickB: [
        "你的工作在程式碼庫裡：新功能、修正、審查和重構。",
        "你希望 agent 在你自己 checkout 的程式碼裡工作，使用你的工具和測試。",
      ],
      faq: [
        {
          q: "Grok Bot 多少錢？",
          a: "Premium 每月 $30，Super $100，Ultra $200，按月計費，每種方案都含每週的 Grok Bot 用量；超出的用量依 token 成本計費。Teams 和 Enterprise 需洽業務。",
        },
        {
          q: "Grok Bot 能寫程式嗎？",
          a: "xAI 列出了一些工程用途，例如在產品的 UI 中重現 bug 並開立工單，還有一份從 Linear 協調程式設計 agent 的指南。Claude Code 是為了直接在你的程式碼儲存庫中工作而打造的。",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "xAI 的託管 AI 隊友 vs Nous Research 的開源個人 agent",
      title: "Grok Bot vs Hermes Agent：託管 Bot 還是開源 agent？",
      description:
        "Grok Bot vs Hermes Agent：xAI 有自己電腦的託管 Bot，還是 Nous Research 附 Bot、例行工作、支援任何模型供應商的開源 agent。",
      h1: "Grok Bot vs Hermes Agent：託管的隊友，還是你自己執行的 agent",
      lead: "Grok Bot 和 Hermes Agent 都提供能互相對話、執行例行工作的具名 Bot，所以常被拿來比較。Grok Bot 是 xAI 的託管產品：每個 Bot 都有自己的雲端電腦，在 Slack、Teams 和你的應用程式中工作。Hermes Agent 是 Nous Research 的開源 agent，由你自己執行，可接入任何模型供應商，還有能執行多個具名 Bot 的 Bot Mode。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "託管：Grok Bot 在 xAI 的雲端執行；Hermes Agent 在你的機器或伺服器上執行，Nous Portal 的付費方案包含一個雲端託管的 agent。",
        "授權和價格：Grok Bot 是閉源的，每月 $30 起；Hermes Agent 採 MIT、免費，選用的 Nous Portal 訂閱每月 $20 起。",
        "模型：Grok Bot 以 Grok 打造；Hermes Agent 支援許多供應商，包括本機模型。",
        "在哪裡和它對話：Grok Bot 在它自己的應用程式、Slack、Teams 和視訊通話中工作；Hermes Agent 可從終端機、桌面應用程式或聊天應用程式使用。",
      ],
      pickA: [
        "你想要擁有自己電腦的託管隊友，在 Slack、Teams 和你的會議中工作。",
        "你不想自己執行任何東西。",
      ],
      pickB: [
        "你想要一個自己執行的開源 agent，使用你選擇的模型供應商。",
        "你想要一個會隨時間撰寫並改進自己技能的 agent。",
      ],
      faq: [
        {
          q: "Hermes Agent 免費嗎？",
          a: "免費。它採 MIT 授權，可免費使用；你向模型供應商付費。選用的 Nous Portal 訂閱有 Free、Plus（每月 $20）、Super（$100）和 Ultra（$200）幾種方案。",
        },
        {
          q: "Grok Bot 和 Hermes Agent 都有能互相對話的 Bot 嗎？",
          a: "是的。Grok Bot 之間互傳訊息，並在群組聊天中協調工作；在 Hermes Agent 的 Bot Mode 中，具名的 Bot 之間直接互傳訊息。",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "開源、可自架的 AI 同事工作區 vs xAI 的託管 Bot",
      title: "OpenBot vs Grok Bot：開源還是託管的 AI 同事？",
      description:
        "OpenBot vs Grok Bot：CopilotKit 採 MIT 授權、可自架的 AI 同事工作區，還是 xAI 的託管 Bot。比較託管方式、模型、價格和功能。",
      h1: "OpenBot vs Grok Bot：自己架設的 AI 同事，還是租用的 AI 同事",
      lead: "OpenBot 和 Grok Bot 都給每位 AI 同事一台自己的電腦，附瀏覽器和工具，也都有例行工作和核准機制。OpenBot 來自 CopilotKit，開源且可自架：它在你的筆電或你的 Kubernetes 叢集上執行，使用你選擇的模型和 agent。Grok Bot 是 xAI 的託管產品，以 Grok 打造，在 Slack、Teams 和你的應用程式中工作。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "託管：OpenBot 在你的筆電或 Kubernetes 叢集上執行，也可在搶先體驗中由 CopilotKit 託管；Grok Bot 在 xAI 的雲端執行。",
        "授權：OpenBot 的應用程式範本採 MIT 授權，CopilotKit Intelligence 另行授權；Grok Bot 是閉源的。",
        "模型：OpenBot 支援 OpenAI、Claude、Gemini 或開放模型，並透過 AG-UI 接入你自己的 agent；Grok Bot 以 Grok 打造。",
        "價格：OpenBot 個人專案免費，Business 每位活躍使用者每月最高 $29；Grok Bot 各方案每月 $30、$100 或 $200。",
      ],
      pickA: [
        "你想自架 AI 同事，並把資料和模型掌握在自己手中。",
        "你想自訂工作區，或以白牌形式提供。",
      ],
      pickB: [
        "你想要在 Slack、Teams 和你的會議中立即可用的託管 Bot。",
        "你不想自己維運基礎架構。",
      ],
      faq: [
        {
          q: "OpenBot 免費嗎？",
          a: "在你的筆電上用於個人專案是免費的。OpenBot for Business 每位活躍使用者每月最高 $29，另加每月模型支出超過 $5,000 部分的 5%；你直接向模型供應商付費。",
        },
        {
          q: "OpenBot 是開源的嗎？",
          a: "OpenBot 的應用程式範本採 MIT 授權。它使用另行授權的 CopilotKit Intelligence：在筆電上免費，在 Kubernetes 上有試用和正式環境授權。",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Anthropic 處理知識工作的 agent vs 處理程式碼的 agent",
      title: "Claude Cowork vs Claude Code：該用哪個 Anthropic agent？",
      description:
        "Claude Cowork vs Claude Code：Anthropic 在 Claude 應用程式中處理文件、研究和試算表的 agent，還是用於你程式碼儲存庫的程式設計 agent。",
      h1: "Claude Cowork vs Claude Code：兩個 Anthropic agent，負責不同的工作",
      lead: "Claude Cowork 和 Claude Code 來自同一家公司，都在 Claude 模型上執行，Anthropic 也表示 Cowork 採用和 Claude Code 相同的架構。但它們針對的是不同的工作。Cowork 在 Claude 應用程式中處理知識工作，例如研究、文件、試算表和簡報，大多在 Anthropic 的雲端執行。Claude Code 在你的程式碼儲存庫中工作，可從終端機、IDE、桌面應用程式或網頁使用。兩者都隨 Claude 付費方案提供。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作內容：Cowork 把你想要的成果變成文件、含公式的試算表、簡報或整理好的資料夾；Claude Code 讀取你的程式碼庫、編輯檔案並執行指令。",
        "執行位置：Cowork 的任務在 Anthropic 的雲端執行，透過 Claude Desktop 存取本機檔案；Claude Code 預設在你的機器上執行，網頁版有雲端工作階段。",
        "使用的地方：Cowork 在桌面版、網頁版和行動版的 Claude 應用程式中；Claude Code 在終端機、IDE 擴充功能、桌面應用程式和網頁中。",
        "排程：Cowork 在雲端以每小時到每週的頻率排程任務；Claude Code 有雲端和桌面排程任務，以及 `/loop`。",
      ],
      pickA: ["你的工作是研究、文件、試算表或簡報。", "你想從手機或瀏覽器交辦任務，並拿回檔案。"],
      pickB: ["你的工作在程式碼儲存庫裡。", "你想要一個能使用你的終端機、測試和 git 的 agent。"],
      faq: [
        {
          q: "Claude Cowork 和 Claude Code 包含在同一個方案中嗎？",
          a: "是的。兩者都包含在 Claude 付費方案中：Pro、Max、Ultra、Team 和 Enterprise。Claude Free 兩者都不包含。",
        },
        {
          q: "Claude Cowork 能寫程式嗎？",
          a: "Anthropic 把 Cowork 定位在非程式的知識工作，把 Claude Code 定位在軟體工程。對於只在你電腦上執行的任務，Anthropic 建議使用桌面應用程式中的 Claude Code。",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Anthropic 和 OpenAI 在各自聊天應用程式中的 AI 同事",
      title: "Claude Cowork vs ChatGPT Work：AI 同事比較",
      description:
        "Claude Cowork vs ChatGPT Work：Anthropic 和 OpenAI 處理文件、研究和定期任務的 agent。比較方案、執行位置、排程和核准機制。",
      h1: "Claude Cowork vs ChatGPT Work：聊天應用程式裡的兩位 AI 同事",
      lead: "Claude Cowork 和 ChatGPT Work 做的是同一類工作：你在聊天應用程式中描述想要的成果，agent 就會規劃步驟，在檔案、已連結的應用程式和瀏覽器中完成工作，再交回一份待你審閱的成果。Cowork 是 Anthropic 的，包含在 Claude 付費方案中。ChatGPT Work 是 OpenAI 的，包含在 ChatGPT 方案中，並和 Codex 共用能力和用量。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "方案：Cowork 包含在 Pro（每月 $20）起的 Claude 付費方案中，Free 不包含；ChatGPT Work 在 Free 和 Go 方案中可於桌面應用程式有限使用，Plus（每月 $20）起可完整使用。",
        "執行位置：Cowork 在 Anthropic 的雲端執行，透過 Claude Desktop 存取本機檔案；ChatGPT Work 在 OpenAI 的雲端執行，或透過 ChatGPT 桌面應用程式在本機執行。",
        "排程：Cowork 以每小時到每週的頻率執行排程任務；ChatGPT Work 有排程任務，符合資格的方案還能由 Gmail、Slack 或 GitHub 事件觸發。",
        "核准：Cowork 有 Manual、Auto（附安全審查）和 Skip 三種模式；ChatGPT Work 遇到重要動作會暫停等你核准，桌面應用程式中另有權限模式。",
      ],
      pickA: [
        "你已經在付費使用 Claude，或想用 Anthropic 的模型處理文件和研究。",
        "你想要在你的電腦關機時仍在雲端執行的排程任務。",
      ],
      pickB: [
        "你已經在付費使用 ChatGPT，或想先在桌面應用程式中用 Free 方案試試看。",
        "你想要由 Gmail、Slack 或 GitHub 事件觸發的任務。",
      ],
      faq: [
        {
          q: "ChatGPT Work 免費嗎？",
          a: "ChatGPT Free 和 Go 可以在桌面應用程式中有限使用 ChatGPT Work。Plus（每月 $20）和 Pro 可以在桌面版、網頁版和行動版使用。",
        },
        { q: "Claude Cowork 免費嗎？", a: "不免費。它只包含在 Claude 付費方案中，Pro 每月 $20 起。" },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Microsoft 365 的 AI 同事 vs Anthropic 的 AI 同事",
      title: "Copilot Cowork vs Claude Cowork：選 Microsoft 還是 Anthropic？",
      description:
        "Copilot Cowork vs Claude Cowork：Microsoft 橫跨 Outlook、Teams 和 Office 檔案的 agent，還是 Anthropic 在 Claude 應用程式中的 agent。比較授權、費用和功能。",
      h1: "Copilot Cowork vs Claude Cowork：Microsoft 365 的 agent，還是 Claude 的 agent",
      lead: "Copilot Cowork 和 Claude Cowork 名字相近，概念也相同：把一項多步驟任務交給 agent，並核准它的動作。Copilot Cowork 在 Microsoft 365 中工作，寄送電子郵件、安排會議、編輯 OneDrive 和 SharePoint 中的 Office 檔案，可以使用 GPT、Claude 或 Grok 模型。Claude Cowork 是 Anthropic 在 Claude 應用程式中的 agent，使用 Claude 模型。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作所在的地方：Copilot Cowork 在 Outlook、Teams、OneDrive 和 SharePoint 中工作，無法存取你本機裝置上的檔案；Claude Cowork 透過 Google Drive、Gmail、Microsoft 365 和 Slack 等連接器工作，並透過 Claude Desktop 存取本機檔案。",
        "費用：Copilot Cowork 需要 Microsoft 365 Copilot 授權，加上每個 $0.01 的 Copilot Credits；Claude Cowork 隨 Claude 付費方案提供，Pro 每月 $20 起。",
        "模型：Copilot Cowork 有模型選擇器，依租用戶設定提供 GPT、Claude 和 Grok 模型；Claude Cowork 使用 Claude 模型。",
        "帳戶：Copilot Cowork 適用於工作或學校帳戶，個人帳戶為預覽版；Claude Cowork 適用於個人和團隊的 Claude 方案。",
      ],
      pickA: [
        "你的組織以 Microsoft 365 為主，而且已經購買 Microsoft 365 Copilot 授權。",
        "你希望 agent 替你寄送電子郵件、預約會議和在 Teams 發文，並先經過你核准。",
      ],
      pickB: [
        "你在 Microsoft 365 以外工作，或想在自己的電腦上使用本機檔案和瀏覽器。",
        "你想要固定的月費方案，而不是按額度計費。",
      ],
      faq: [
        {
          q: "Copilot Cowork 要多少錢？",
          a: "它需要 Microsoft 365 Copilot 授權，用量以 Copilot Credits 計費：隨用隨付每個 $0.01，也可以選擇預付一年的方案，折扣從 5% 到 20% 不等。",
        },
        {
          q: "Copilot Cowork 使用 Claude 嗎？",
          a: "依租用戶設定，它的模型選擇器除了 GPT 和 Grok 模型外，也包括 Claude Opus、Sonnet 和 Fable；EU Data Boundary 租用戶只能使用 GPT 模型。",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "ChatGPT 的 Work 模式 vs OpenAI 的程式設計 agent",
      title: "ChatGPT Work vs Codex：該用哪一個？",
      description:
        "ChatGPT Work vs Codex：OpenAI 處理文件和分析的 Work 模式，還是用於程式碼儲存庫的程式設計 agent。它們共用能力和用量；以下是兩者的差異。",
      h1: "ChatGPT Work vs Codex：同一個引擎，不同的工作",
      lead: "ChatGPT Work 和 Codex 都是 OpenAI 的 agent，OpenAI 表示 Work 和 Codex 共用核心能力、執行方式和用量上限。差別在於用途。ChatGPT Work 是 ChatGPT 中的一種模式，用於最後產出待審閱成果的任務，例如簡報、試算表和分析。Codex 是程式設計 agent，提供終端機 CLI、IDE 擴充功能、ChatGPT 桌面應用程式和雲端版本。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作內容：ChatGPT Work 交回文件、簡報、試算表和分析；Codex 在儲存庫中讀取、編輯和執行程式碼。",
        "使用的地方：ChatGPT Work 在網頁版、桌面版和行動版的 ChatGPT 中；Codex 在終端機 CLI、IDE 擴充功能、ChatGPT 桌面應用程式和 Codex Cloud 中。",
        "用量：兩者共用 Codex 的用量上限和額度。",
        "開源：Codex 的 CLI、SDK 和 App Server 採 Apache-2.0；ChatGPT Work 不開源。",
      ],
      pickA: ["你的任務最後是一份文件、一份簡報或一份分析。", "你想從手機或網頁上的 ChatGPT 開始任務。"],
      pickB: [
        "你的任務是程式碼：新功能、修正和審查。",
        "你想要一個在終端機或 IDE 中，或在 CI 中以 `codex exec` 執行的 agent。",
      ],
      faq: [
        {
          q: "ChatGPT Work 和 Codex 共用用量嗎？",
          a: "是的。OpenAI 表示 ChatGPT Work 和 Codex 共用核心能力、執行方式和用量上限，額度也包括在內。",
        },
        {
          q: "哪些 ChatGPT 方案包含 Work？",
          a: "Free 和 Go 可以在桌面應用程式中有限使用；Plus（每月 $20）、Pro 和 Business 可以在桌面版、網頁版和行動版使用。",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Anthropic 在 Claude 應用程式中的 AI 同事 vs xAI 擁有自己電腦的 Bot",
      title: "Claude Cowork vs Grok Bot：AI 同事比較",
      description:
        "Claude Cowork vs Grok Bot：Anthropic 在 Claude 應用程式中處理文件和研究的 agent，還是 xAI 擁有自己雲端電腦、在 Slack 和你的應用程式中工作的 Bot。",
      h1: "Claude Cowork vs Grok Bot：Claude 裡的任務 agent，還是一組 Bot",
      lead: "Claude Cowork 和 Grok Bot 都是在你不在時仍在雲端繼續工作的 AI 同事。Claude Cowork 是 Anthropic 在 Claude 應用程式中的 agent：你交給它一項任務，拿回檔案。Grok Bot 是 xAI 的：每個 Bot 都有自己的雲端電腦，登入你的工具，在 Slack、Microsoft Teams 和視訊通話中工作，彼此交接任務。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "形式：Claude Cowork 接受你交辦的任務，任務內有 subagent；Grok Bot 讓每個 Bot 負責自己的工作，Bot 之間互傳訊息，並在群組聊天中協調。",
        "使用的地方：Claude Cowork 在桌面版、網頁版和行動版的 Claude 應用程式中；Grok Bot 在它自己的應用程式、Slack、Teams 和視訊通話中。",
        "方案：Claude Cowork 隨 Claude 付費方案提供，Pro 每月 $20 起；Grok Bot 包含在 Premium（每月 $30）、Super 和 Ultra 方案中。",
        "模型：Claude Cowork 使用 Claude 模型；Grok Bot 以 Grok 打造。",
      ],
      pickA: ["你要交辦文件、研究和試算表，並希望拿回檔案。", "你已經在用 Claude。"],
      pickB: ["你想要幾個各有職責的 Bot，在 Slack 和團隊的應用程式中工作。", "你想讓 Bot 參加你的會議。"],
      faq: [
        {
          q: "Grok Bot 能參加會議嗎？",
          a: "可以。xAI 表示你可以把 Bot 加入 Google Meet、Zoom 或 Teams 通話，它會在通話中聆聽，能幫上忙時加入聊天，並在會後跟進。",
        },
        {
          q: "我的電腦關機時，Claude Cowork 還能執行嗎？",
          a: "雲端任務會在 Anthropic 的伺服器上繼續執行；只有需要本機檔案或你的瀏覽器的工作，才會等 Claude Desktop 開啟。",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "Cursor 處理程式碼的協調者 agent vs xAI 橫跨應用程式工作的 Bot",
      title: "Cursor Projects vs Grok Bot：協調者 agent 比較",
      description:
        "Cursor Projects vs Grok Bot：在你的程式碼上調度許多雲端 agent 的協調者 agent，還是 xAI 在 Slack 和你的應用程式中工作的 Bot。比較方案和功能。",
      h1: "Cursor Projects vs Grok Bot：寫程式的 agent 團隊，還是處理其他所有工作的團隊",
      lead: "Cursor Projects 和 Grok Bot 都讓一個 agent 負責管理其他 agent。在 Cursor Project 中，協調者 agent 規劃一項功能、一次遷移或一個應用程式，並把程式開發工作委派給許多平行執行的雲端 agent。Grok Bot 是 xAI 的一組 AI 隊友，每個都有自己的雲端電腦，在 Slack、Teams 和你的應用程式中工作，其中一個 Bot 可以管理其他 Bot。兩者的方案都從每月 $30 起。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作內容：Cursor Projects 用於 GitHub 儲存庫中的軟體工作；Grok Bot 在 CRM、客服、報帳和招募等業務應用程式中處理工作。",
        "協調方式：Cursor Project 的協調者建立並管理工作者 agent，在 Multiplayer Projects 中協調者之間會互傳訊息；Grok Bot 之間互傳訊息，並在群組聊天中協調。",
        "共用狀態：Cursor Project 保存共用檔案（偏好、筆記、工作流程）和任務看板；Grok Bot 會記住你的團隊如何工作。",
        "觸發方式：Cursor Projects 依排程、Slack 頻道和 pull request 行動；Grok Bot 依排程執行例行工作，並在 Slack 和 Teams 中工作。",
      ],
      pickA: ["你想讓一項長期的程式開發工作經過規劃，分給許多 agent 執行。", "你的團隊已經在用 Cursor 和 GitHub。"],
      pickB: ["你想要在現有應用程式中處理營運、業務或客服工作的 AI 隊友。", "你希望它們在 Slack、Teams 和會議中。"],
      faq: [
        {
          q: "哪些 Cursor 方案包含 Projects？",
          a: "每個具備 Cloud Agents 的方案：Premium（每月 $30）以上、Teams、Enterprise 和舊版付費方案。Free、Plus 和舊版 Hobby 不包含。",
        },
        {
          q: "筆電闔上時，Cursor Project 還會繼續工作嗎？",
          a: "會。Project 在雲端自己的電腦上執行；只有需要在你的機器上測試時，協調者才會啟動本機 agent。",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Microsoft 的 AI 同事 vs Microsoft 的 agent 建構工具",
      title: "Copilot Cowork vs Copilot Studio：有什麼不同？",
      description:
        "Copilot Cowork vs Copilot Studio：Microsoft 365 中替你完成任務的 agent，還是用來建構 agent 和工作流程的低程式碼工作室。比較費用和功能。",
      h1: "Copilot Cowork vs Copilot Studio：使用 agent，還是建構 agent",
      lead: "Copilot Cowork 和 Copilot Studio 都是 Microsoft 的產品，都以 Copilot Credits 計費，並共用租用戶的預付額度池。差別在於由誰來做事。Copilot Cowork 是 Microsoft 365 Copilot 中的 agent，你把任務交給它，它會在你核准後寄送電子郵件、預約會議和編輯 Office 檔案。Copilot Studio 則是讓建構者打造自己的 agent、工作流程和應用程式，並發布到 Teams、Microsoft Copilot、網站或電話線路的地方。Copilot Studio 的工作流程甚至可以把啟動 Cowork 任務當作其中一個步驟。以下是比較，以及 Crewmark 處在什麼位置。",
      differences: [
        "工作內容：Copilot Cowork 在 Outlook、Teams、Word、Excel、PowerPoint、OneDrive 和 SharePoint 之間替你完成任務；Copilot Studio 是低程式碼工作室，用來建構給其他人使用的 agent、工作流程和應用程式。",
        "使用者：Copilot Cowork 適合擁有 Microsoft 365 Copilot 授權、且已開啟 Cowork 的任何人；Copilot Studio 適合建構者，發布的 agent 可以在網站或電話線路上服務員工或客戶。",
        "費用：Copilot Cowork 需要 Microsoft 365 Copilot 授權，加上每個 $0.01 的 Copilot Credits；Copilot Studio 販售每月 $200（按年計費）、含 25,000 個 Credits 的額度包，或隨用隨付每個 $0.01，建構者授權為 $0。",
        "自動化：Copilot Cowork 執行排程提示詞和電子郵件或 Teams 觸發；Copilot Studio 另有 agent 觸發條件、搭配 Human review 連接器的多階段核准，以及能把 Cowork 當作其中一個步驟呼叫的工作流程。",
      ],
      pickA: [
        "你想要一個 agent 今天就替你處理 Microsoft 365 的工作，不需要建構任何東西。",
        "你想在每封電子郵件、每場會議或每則 Teams 貼文送出前先核准。",
      ],
      pickB: [
        "你想建構給其他人或客戶使用的 agent 或工作流程。",
        "你需要連接器、多階段核准、發布管道，或分開的開發、測試和正式環境。",
      ],
      faq: [
        {
          q: "Copilot Cowork 是 Copilot Studio 的一部分嗎？",
          a: "不是，它們是不同的產品。它們共用租用戶的預付 Copilot Credit 額度池，Copilot Studio 的工作流程可以透過它的 Copilot 節點啟動或繼續 Copilot Cowork 任務。",
        },
        {
          q: "Copilot Studio 要多少錢？",
          a: "Microsoft 的《Licensing Guide》列出每個租用戶每月 $200（按年計費）購買一包 25,000 個 Copilot Credits，或隨用隨付每個 $0.01。額度包中未用完的 Credits 不會遞延到下期。建構者授權為 $0，免費試用版無法發布 agent。",
        },
      ],
    },
  },
};
