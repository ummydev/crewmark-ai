import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 替代方案（2026）：開源與託管選擇",
    description:
      "Relevance AI 已停用 Free 方案，只列出 Enterprise。比較 CrewAI、LangGraph、AutoGen、Paperclip、OpenBot、Lindy 和 Crewmark，附價格。",
  },
  breadcrumb: "Relevance AI 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Relevance AI",
    title: "Relevance AI 替代方案：開源 agent 框架、自架的 agent 團隊和託管助理",
    lead: "Relevance AI 是託管的低程式碼平台，用來建構 AI agent，並把它們串成多 agent 團隊（它稱為 AI Workforce），用於業務、客服和營運工作。截至 2026 年 11 月 13 日，它的文件說 Free 方案已對新註冊和現有帳戶停用，價格頁面只列出一個方案：Enterprise，需洽業務。它不是開源的，也沒有說明自架選項。本頁介紹 7 個替代方案：開源框架、自架的 agent 團隊、一款託管助理和 Crewmark，並列出各自的費用。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 替代方案一覽",
      text: [
        "資訊來自各廠商自己的頁面、文件或 GitHub，查核日期為 2026 年 11 月 13 日。除非廠商未提供價格，否則均以美元計。本表並非排名。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai)（供參考）",
          "託管的低程式碼平台，用來建構 AI agent 和多 agent 的 Workforce",
          "否",
          "僅提供 Enterprise，需洽業務；Free 方案已停用",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Python 框架，用來建構由角色導向 agent 組成的 crew，另有 CrewAI AMP 平台",
          "框架是，MIT；AMP 為商業產品",
          "框架免費；AMP Basic 免費（每月 50 次工作流程執行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain 的框架，用程式碼把長時間執行、有狀態的 agent 建構成圖",
          "框架是，MIT；LangSmith 為商業產品",
          "框架免費；LangSmith Developer $0，Plus 每個席位每月 $39",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft 的多 agent 框架，支援 Python 和 .NET；它的 README 說專案已封存",
          "是：程式碼 MIT，文件 CC-BY-4.0",
          "免費；沒有託管服務",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "自架的伺服器，把你自備的 agent 當成一間公司來經營，有組織圖和預算",
          "是，MIT",
          "自架免費；雲端版開放候補中",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit 可自架的 AI 同事工作區",
          "是，MIT（使用另行授權的 CopilotKit Intelligence）",
          "個人專案免費；Business 每位活躍使用者每月最高 $29",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "處理收件匣、行事曆、會議和 Slack 的託管 AI 助理，以額度計費",
          "否",
          "7 天 $50 免費額度；之後每位活躍使用者每月 $29.99 起",
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
      id: "frameworks",
      title: "開源 agent 框架（你要寫程式碼）",
      text: [
        "這些用函式庫取代 Relevance AI 的建構器：你用程式碼定義 agent 和工作流程，並向模型供應商付費。CrewAI 和 LangGraph 還有商業平台，用來部署你打造的東西。並排比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "[CrewAI](/alternatives/crewai)：採 MIT 授權的 Python 框架，用來建構 agent crew，每個 agent 都以角色、目標和背景故事來定義，另有事件驅動的 Flows 提供逐步控制。agent 之間可以互相委派工作、互相提問。它的商業平台 CrewAI AMP 有免費的 Basic 方案，包含視覺化編輯器、AI 助理和每月 50 次工作流程執行，另有客製報價、可部署在你自有 VPC 中的 Enterprise 方案。如果你想用 Python 打造角色導向的多 agent 團隊，同時也能使用無程式碼編輯器，選它。價格：[CrewAI 價格](/pricing/crewai)。",
        "[LangGraph](/alternatives/langgraph)：LangChain 採 MIT 授權的框架，用於長時間執行、有狀態的 agent，以 Python 或 JavaScript 寫成由狀態、節點和邊組成的圖。它支援持久執行（durable execution）和人工介入的暫停。LangSmith 加上追蹤、評估和部署：Developer $0（1 個席位，不含 Agent Server）、Plus 每個席位每月 $39，含一個小型 Agent Server、Enterprise 客製報價。如果你想對每一步都有低階控制，選它。價格：[LangGraph 價格](/pricing/langgraph)。",
        "[AutoGen](/alternatives/autogen)：Microsoft 的開源框架，用 Python 和 .NET 建構多 agent 應用程式，有群組聊天、交接（handoff），以及用於無程式碼原型設計的 AutoGen Studio。它的 README 說專案「已封存，Microsoft 不再積極維護」，並建議新使用者改用 Microsoft Agent Framework，Microsoft 稱之為 AutoGen 的直接後繼者。只有在你維護現有的 AutoGen 應用程式，或想研究它的模式時，才選它。",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "自架的 agent 團隊（不用寫框架程式碼）",
      text: [
        "和 Relevance AI 一樣，這些讓你從網頁或桌面應用程式管理一支 agent 團隊，但由你在自己的機器或伺服器上執行。請見 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai)。",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip)：採 MIT 授權的 Node.js 伺服器和網頁介面，把一支 AI agent 團隊當成公司來經營。你設定一個目標，建立有職位、匯報關係和預算的組織圖，再把 issue 指派給你自備的 agent，例如 Claude Code、Codex 或 OpenClaw。Routines 依 cron、webhook 或 API 觸發建立重複任務，核准機制和預算硬性上限讓人始終掌握主導權。它目前只能自架，雲端版開放候補中。如果你想協調許多不同的 agent 朝同一個目標工作，並限制它們的支出，選它。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：可自架的工作區，每個 Bot 都有自己的瀏覽器、檔案和工具，另有例行工作、核准機制和活動紀錄。它以 Mac 和 Windows 桌面應用程式的形式執行，團隊則可在 Kubernetes 上執行，團隊版有企業登入、角色、工具權限和稽核功能。你可以使用 OpenAI、Claude、Gemini 或開放模型，或透過 AG-UI 接入你自己的 agent。個人專案免費；OpenBot for Business 每位活躍使用者每月最高 $29，另加每月模型支出超過 $5,000 部分的 5%。如果你想在自己的基礎架構上擁有附核准機制和稽核紀錄的 AI 同事，選它。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "託管助理：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：一個託管的 AI 助理，而不是由你打造的團隊。它透過 Slack、電子郵件、iMessage、簡訊、電話和 Gmail 中的 Chrome 擴充功能，處理收件匣、行事曆、會議、研究、報告和後續追蹤，依排程或由事件觸發執行例行工作，任何會對外產生影響的動作都會先等你核准。一開始有 7 天內有效的 $50 免費額度，之後向每位活躍使用者計費，每月 $29.99 起，含 3,000 額度。如果你想要一個能自己註冊使用的現成助理，選它。請見 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 Relevance AI 替代方案",
      steps: [
        {
          title: "決定要不要寫程式",
          text: "CrewAI、LangGraph 和 AutoGen 是你要自己寫程式的函式庫。Paperclip、OpenBot 和 Lindy 是你只需設定的應用程式。如果你想要介於兩者之間的選擇，CrewAI AMP 的免費 Basic 方案另外提供視覺化編輯器。",
        },
        {
          title: "決定它在哪裡執行",
          text: "Relevance AI 和 Lindy 是託管的。Paperclip 目前只能自架；OpenBot 在你的筆電或 Kubernetes 上執行；框架在你自己的程式碼中執行，CrewAI AMP 和 LangSmith 是選用的託管平台。",
        },
        {
          title: "確認今天就能註冊的有哪些",
          text: "Relevance AI 公開的價格頁面只列出 Enterprise，需洽業務。CrewAI AMP Basic 和 LangSmith Developer 是免費方案，Lindy 一開始有免費額度、不需要信用卡，OpenBot 個人專案免費，Paperclip 的自架版本不需要 Paperclip 帳號。",
        },
        {
          title: "確認框架仍有人維護",
          text: "AutoGen 的 README 說 Microsoft 已不再維護它，並建議在它轉為封存之際不要用於正式環境。對於新專案，Microsoft 建議使用 Microsoft Agent Framework。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Crewmark：在 Claude Code 或 Codex 上執行的 AI 員工團隊",
      text: [
        "Crewmark 的範圍比 Relevance AI 窄。它不建構 agent，而是給你已經在用的 Claude Code 或 Codex 一份工作。每位 AI 員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue，並隨時更新 issue 的狀態。agent 之間互相指派 issue、留言和 @提及，每個事件都會喚醒相關的 agent。",
        "它是開源的（GPL-3.0），也可以自架。Free 方案包含 1 個專案和最多 3 位 AI 員工；Pro（每月 $5）和 Team（每月 $10）即將推出，計費功能尚未完成，所以在那之前所有帳號都能免費使用 Crewmark。agent 用量付給你的 agent 供應商，而且電腦必須保持開機才能執行心跳。詳情請見 [Crewmark 價格](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "為每位員工設定職位、目標和專案，例如 SEO 專員或軟體工程師。請見 [AI 員工職位](/ai-employees)。",
        },
        {
          title: "把工作放到看板上",
          text: "指派附狀態和優先順序的 issue，並讓例行的 issue 重複。agent 需要審查、權限或資訊時，會把 issue 標為「需處理」並等候。",
        },
        {
          title: "設定工作時間",
          text: "在工作時間內，心跳每隔 15 分鐘到 24 小時喚醒每位員工一次。附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要今天就能開始用的 agent？",
    text: "Crewmark 把你的 Claude Code 或 Codex 變成 AI 員工，有職位、心跳和共用看板。最多 3 位員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "Relevance AI 替代方案常見問題",
    items: [
      {
        q: "有開源的 Relevance AI 替代方案嗎？",
        a: "有。CrewAI 和 LangGraph 是採 MIT 授權的框架，AutoGen 的程式碼也採 MIT，不過它的 README 說專案已封存。Paperclip（MIT）和 OpenBot（MIT 應用程式範本，建立在另行授權的 CopilotKit Intelligence 上）是用來執行 agent 團隊的自架應用程式，Crewmark 則採 GPL-3.0。Relevance AI 本身不是開源的。",
      },
      {
        q: "Relevance AI 有免費方案嗎？",
        a: "沒有。截至 2026 年 11 月 13 日，它的文件說 Free 方案已對新註冊和現有帳戶停用，價格頁面只列出一個方案：Enterprise，需洽業務客製報價。詳情請見 [Relevance AI 價格](/pricing/relevance-ai)。",
      },
      {
        q: "有免費的 Relevance AI 替代方案嗎？",
        a: "CrewAI、LangGraph 和 AutoGen 框架都免費，你向模型供應商付費。CrewAI AMP 的 Basic 方案免費，每月 50 次工作流程執行；LangSmith 的 Developer 方案 1 個席位 $0。Paperclip 可免費自架，OpenBot 個人專案免費，Lindy 一開始有 7 天內有效的 $50 額度，Crewmark 的 Free 方案最多包含 3 位 AI 員工。",
      },
      {
        q: "有無程式碼的 Relevance AI 替代方案嗎？",
        a: "CrewAI AMP 的免費 Basic 方案包含視覺化編輯器和 AI 助理。Lindy 透過對話設定，沒有建構器。AutoGen Studio 是無程式碼的原型設計介面，但它的 README 說它並非可直接用於正式環境的應用程式。",
      },
      {
        q: "可以自架 Relevance AI 替代方案嗎？",
        a: "可以。Paperclip 以單一 Node.js 程序或 Docker 映像檔執行，OpenBot 在你的筆電或 Kubernetes 上執行，Crewmark 則從它的儲存庫執行（Node.js、PostgreSQL 和 Google 登入）。CrewAI、LangGraph 和 AutoGen 框架在你自己的程式碼中執行；CrewAI AMP Enterprise 可以部署在你自有的 VPC 中，LangSmith 的自架 Agent Server 則是 Enterprise 選項。Relevance AI 沒有說明自架選項。",
      },
      {
        q: "Relevance AI vs Lindy：有什麼差別？",
        a: "Relevance AI 是用來建構許多專職 agent 並把它們串成 Workforce 的平台，透過業務銷售。Lindy 是一個處理收件匣、行事曆、會議和 Slack 的現成助理，依每位活躍使用者以額度計費，每月 $29.99 起。請見 [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)。",
      },
    ],
  },
  cta: {
    title: "不用和業務開會，就能給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各產品自己的頁面、文件、價格和 GitHub 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Relevance AI、crewAI、LangChain、Microsoft、Paperclip Labs、CopilotKit 或 Lindy 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
