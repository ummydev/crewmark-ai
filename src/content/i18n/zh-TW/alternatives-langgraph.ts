import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 替代方案（2026）：CrewAI、AutoGen 等",
    description:
      "LangGraph 替代方案比較：CrewAI、AutoGen、OpenClaw、Hermes Agent、Paperclip、Claude Code agent teams 和 Crewmark，依授權、價格和適用情境比較。",
  },
  breadcrumb: "LangGraph 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · LangChain LangGraph",
    title: "2026 年的 LangGraph 替代方案：框架、現成 agent 和 agent 團隊",
    lead: "LangGraph 是 LangChain 的開源（MIT）框架，用於長時間執行、有狀態的 agent：你用 Python 或 JS/TS，把工作流程定義成由狀態、節點和邊組成的圖。它刻意設計得很低階，「不預設提示詞或 agent 架構」。在 LangChain 的 LangSmith 平台上，免費的 Developer 方案只有一個席位、不含 Agent Server，自架部署則僅限 Enterprise。如果你想要依角色定義的 agent、用現成的 agent 取代函式庫，或想要一支程式設計 agent 團隊，以下是七個選擇，附授權、價格和各自適合的對象。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 替代方案一覽",
      text: [
        "資訊來自各產品的 README、文件和價格頁面，查核日期為 2026 年 11 月 13 日。價格以美元計。LangGraph 本身以 MIT 授權免費提供；LangSmith Plus 每個席位每月 $39。詳情請見 [LangGraph 價格](/pricing/langgraph)。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Python 框架，用來建構由角色導向 agent 組成的 crew 和事件驅動的 flow，另有商業平台 CrewAI AMP",
          "框架是（MIT）；AMP 為商業產品",
          "框架免費，另付模型供應商費用；AMP Basic 免費（每月 50 次工作流程執行）",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Microsoft 的多 agent 框架，支援 Python 和 .NET；它的 README 說專案已封存，Microsoft 不再維護",
          "是（程式碼 MIT，文件 CC-BY-4.0）",
          "免費，另付模型供應商費用；沒有託管服務",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "在你自己電腦上執行、透過聊天應用程式回覆你的個人 AI 助理",
          "是（MIT）",
          "免費；沒有付費方案或託管服務；你向模型供應商付費",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "Nous Research 的個人 agent，會撰寫並改進自己的技能，可從終端機、桌面應用程式或聊天應用程式使用",
          "是（MIT）",
          "agent 免費，另付模型供應商費用；選用的 Nous Portal Plus 每月 $20",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "自架的伺服器和網頁介面，把你自備的 agent（Claude Code、Codex、OpenClaw 等）當成一間公司來經營，有組織圖、預算和任務",
          "是（MIT）",
          "自架版本免費；未公布價格；雲端版開放候補中",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "Claude Code 的實驗性功能，由一個主導工作階段產生隊友，隊友共用任務清單並互傳訊息",
          "否",
          "隨 Claude 付費方案中的 Claude Code 提供，Pro 每月 $20 起（按年計費為每月 $17）",
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
      id: "frameworks",
      title: "其他 agent 框架",
      text: [
        "和 LangGraph 一樣，是從你自己的程式碼呼叫的函式庫。並排比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph) 和 [CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "CrewAI：採 MIT 授權的 Python 框架。LangGraph 沒有內建的角色概念；在 CrewAI 中，每個 agent 都以角色、目標和背景故事來定義。開啟委派後，agent 之間會互相交辦工作、互相提問，Flows 則加上事件驅動、逐步執行的控制，支援狀態和分支。CrewAI AMP 另外提供無程式碼的 Studio、追蹤、cron 排程和部署。如果你寫 Python（3.10 以上、3.14 以下），想依角色組織 agent，選它。價格：[CrewAI 價格](/pricing/crewai)。",
        "AutoGen：Microsoft 採 MIT 授權的多 agent 框架，支援 Python 和 .NET，有群組聊天、selector 和 swarm 團隊。2026 年 11 月 13 日，它的 README 說專案「已封存，Microsoft 不再積極維護」，建議不要在正式環境中使用，並建議新使用者改用它的後繼者 Microsoft Agent Framework。如果你在維護現有的 AutoGen 應用程式，或想研究多 agent 模式，選它。更多請見 [AutoGen 替代方案](/alternatives/autogen)。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "用現成的 agent 取代函式庫",
      text: [
        "用 LangGraph，你要自己建構 agent。這兩個則是你安裝後就能執行的 agent，各自內建排程器。比較請見 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      ],
      points: [
        "OpenClaw：採 MIT 授權的個人助理，以 Gateway 的形式在你自己的電腦上執行，在 WhatsApp、Telegram、Slack、Discord 等聊天應用程式中回覆你。它在一個 Gateway 上執行多個 agent，內建 Automations 排程器，專案本身沒有付費方案或託管服務。如果你想在自己掌控的硬體上執行一個助理，並能自由更換模型供應商，選它。更多請見 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "Hermes Agent：Nous Research 採 MIT 授權的個人 agent。它根據經驗撰寫技能，保有自己的記憶，並用內建的 cron 排程器執行例行工作；在 Bot Mode 中，擁有各自模型的具名 Bot 之間會直接互傳訊息。如果你想要一個會隨時間改進自身技能、能從終端機、桌面應用程式和聊天應用程式使用的 agent，選它。更多請見 [Hermes Agent 替代方案](/alternatives/hermes-agent)。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "協調你已經在用的程式設計 agent",
      text: [
        "如果你想協調的是 Claude Code 或 Codex 這類程式設計 agent，這些工具能把它們當成團隊來執行。請見 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) 和 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)。",
      ],
      points: [
        "Paperclip：自架、採 MIT 授權的 Node.js 伺服器和網頁介面，把 agent 當成公司來經營：有職位和預算的組織圖、指派給 agent 或人的 issue、核准機制，以及由 cron、webhook 或 API 觸發的例行工作。它自稱「不是 agent 框架」：它透過轉接器驅動你自備的 agent，例如 Claude Code、Codex 和 OpenClaw。如果你想讓許多 agent 朝同一個目標工作，設有支出上限，並在你自己的伺服器上執行，選它。",
        "Claude Code agent teams：Claude Code 的實驗性功能，預設關閉。由一個主導工作階段產生隊友，也就是各自獨立的 Claude Code 執行個體，它們共用一份支援相依關係的任務清單，並直接互傳訊息。如果你已經在付費使用 Claude 方案，想讓幾個 Claude Code 執行個體處理同一項程式開發任務，選它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 LangGraph 替代方案",
      steps: [
        {
          title: "需要對每一步都有低階控制？",
          text: "這正是 LangGraph 的設計目的。如果想從較高階的地方開始，它的 README 推薦 Deep Agents，它建立在 LangGraph 之上，並加上 subagent。",
        },
        {
          title: "想依角色定義 agent？",
          text: "CrewAI 的 agent 有角色、目標和背景故事；Paperclip 有包含職稱和職務說明的組織圖；Crewmark 給每位 AI 員工一個職位、KPI 和專案。",
        },
        {
          title: "需要排程執行？",
          text: "LangGraph 的 cron 工作在 LangSmith Agent Server 上，函式庫本身未說明。CrewAI 在 AMP 上有 cron 排程。OpenClaw 和 Hermes Agent 內建排程器，Paperclip 執行例行工作，Crewmark 有心跳和重複的 issue。",
        },
        {
          title: "在意成本？",
          text: "開源框架免費，你為模型呼叫付費。LangGraph 的 cron 工作每次執行都送出相同的輸入，LangChain 的文件建議刪除不用的 cron 工作，因為重複執行可能產生 LLM API 費用。Paperclip 有會強制停止的預算；Crewmark 使用你自己的 Claude Code 或 Codex 訂閱。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "LangGraph 把 agent 建構進你的應用程式，Crewmark 把你的程式設計 agent 當成團隊來執行。",
      text: [
        "Crewmark 不是框架，你也不用寫圖。它是給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和專案。它在工作時間內依心跳醒來，從共用看板接手 issue；需要審查或權限時，會把 issue 標為「需處理」並在那裡提問。",
        "它以 GPL-3.0 授權開源，1 個專案、最多 3 位 AI 員工免費。你照常付費給 agent 供應商，而且電腦必須保持開機才能執行心跳。方案請見[價格頁面](/pricing)。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或資料分析師，再寫下它的 KPI 和專案。",
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
    title: "不用寫圖，也能有一支 agent 團隊",
    text: "Crewmark 依心跳喚醒你的 Claude Code 或 Codex 工作階段，從共用看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "LangGraph 替代方案常見問題",
    items: [
      {
        q: "LangGraph 有哪些開源替代方案？",
        a: "CrewAI 的框架、AutoGen（它的 README 說專案已封存，Microsoft 不再維護）、OpenClaw、Hermes Agent 和 Paperclip 都採 MIT 授權。Crewmark 以 GPL-3.0 授權開源。執行 agent teams 的 Claude Code 不是開源的。",
      },
      {
        q: "LangGraph 免費嗎？",
        a: "框架以 MIT 授權免費提供。LangChain 的 LangSmith 平台有每個席位每月 $0 的 Developer 方案（1 個席位，每月最多 5k 次基本追蹤，超過後隨用隨付，不含 Agent Server）、每個席位每月 $39 並包含一個 Small Agent Server 的 Plus 方案，以及客製報價的 Enterprise 方案。更多請見 [LangGraph 價格](/pricing/langgraph)。",
      },
      {
        q: "LangGraph vs CrewAI：有什麼差別？",
        a: "LangGraph 是低階的：你建構由狀態、節點和邊組成的圖，它沒有內建的角色概念。CrewAI 以角色、目標和背景故事定義每個 agent，並把它們組成 crew，另有用於逐步控制的 Flows。兩個框架都採 MIT 授權。CrewAI 是 Python 框架；LangGraph 有 Python 和 JS/TS 版本。請見 [CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。",
      },
      {
        q: "使用 LangGraph 需要 LangChain 嗎？",
        a: "不需要。LangChain 的文件寫道：「LangGraph 不需要 LangChain。」範例常使用 LangChain 的模型整合，但 LangGraph 可以搭配你的程式碼呼叫的任何模型。",
      },
      {
        q: "2026 年，AutoGen 還算是 LangGraph 的替代方案嗎？",
        a: "它的 README 說專案「已封存，Microsoft 不再積極維護」，並建議不要在正式環境中使用。Microsoft 建議新使用者改用 Microsoft Agent Framework，並稱之為 AutoGen 的直接後繼者。請見 [AutoGen 替代方案](/alternatives/autogen)。",
      },
      {
        q: "哪些 LangGraph 替代方案能依排程執行 agent？",
        a: "OpenClaw（Automations）、Hermes Agent（內建 cron 排程器）、Paperclip（由 cron、webhook 或 API 觸發的例行工作）和 Crewmark（工作時間內的心跳和重複的 issue）。CrewAI 在它的 AMP 平台上排程，Claude Code 則有獨立於 agent teams 之外的排程任務。LangGraph 本身在 LangSmith Agent Server 上執行 cron 工作。",
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
    "Crewmark 是獨立產品，與 LangChain 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
