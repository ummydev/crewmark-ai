import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen 替代方案（2026）：CrewAI、LangGraph 等",
    description:
      "AutoGen 的 README 說 Microsoft 已不再維護它。從授權和價格比較 CrewAI、LangGraph、OpenClaw、Hermes Agent、Paperclip 和 Crewmark。",
  },
  breadcrumb: "AutoGen 替代方案",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "替代方案 · Microsoft AutoGen",
    title: "2026 年的 AutoGen 替代方案：可以轉移過去的框架和 agent",
    lead: "AutoGen 是 Microsoft 的開源框架，用 Python 和 .NET 建構多 agent 應用程式，另有無程式碼的原型設計介面 AutoGen Studio。我們在 2026 年 11 月 13 日查核時，它的 README 寫著：「本專案已封存，Microsoft 不再積極維護。」它建議新使用者改用 Microsoft Agent Framework，Microsoft 稱之為 AutoGen 的「直接後繼者」。本頁介紹這個後繼者，以及另外七個選擇，從程式碼框架到能自己執行的 agent，並列出各自的授權、價格和適合的對象。",
    cta: "開始使用",
    secondary: "查看比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen 替代方案一覽",
      text: [
        "資訊來自各產品的 README、文件和價格頁面，查核日期為 2026 年 11 月 13 日。價格以美元計。AutoGen 本身免費且開源（程式碼採 MIT），你向模型供應商付費。",
      ],
      headers: ["替代方案", "是什麼", "開源", "起價"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Python 框架，用來建構由角色導向 agent 組成的 crew 和事件驅動的 flow，另有商業平台 CrewAI AMP",
          "框架是（MIT）；AMP 為商業產品",
          "框架免費，另付模型供應商費用；AMP Basic 免費（每月 50 次工作流程執行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "LangChain 的框架，用來把長時間執行、有狀態的 agent 建構成圖，支援 Python 和 JS/TS",
          "框架是（MIT）；LangSmith 為商業產品",
          "框架免費；LangSmith Developer 每個席位每月 $0，Plus 每個席位每月 $39",
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
      id: "successor",
      title: "取代 AutoGen 的是什麼：Microsoft Agent Framework",
      text: [
        "Microsoft 自己給出的答案是 Agent Framework。Microsoft Learn 寫道：「Agent Framework 是直接後繼者，由同一批團隊打造」，並提供從 AutoGen 遷移的指南。本頁其餘部分介紹的是其他專案。",
      ],
      points: [
        "AutoGen 的 README 建議新專案使用 Agent Framework，並說 AutoGen「現在由社群管理」。",
        "關於在正式環境中使用，README 說：「AutoGen 是為研究和實驗而開發的，在它轉為封存之際，我們仍建議不要在正式環境中使用。」",
        "同一份 README 指出，它的無程式碼介面 AutoGen Studio「並非可直接用於正式環境的應用程式」。",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "用程式碼撰寫的多 agent 框架",
      text: [
        "最接近 AutoGen 的選擇：從你自己的程式碼呼叫的開源函式庫，裡面的 agent 會協同工作。並排比較：[CrewAI vs AutoGen](/compare/crewai-vs-autogen) 和 [CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。",
      ],
      points: [
        "CrewAI：採 MIT 授權的 Python 框架。每個 agent 都以角色、目標和背景故事來定義；開啟委派後，agent 之間會互相交辦工作、互相提問，Flows 則加上事件驅動、逐步執行的控制。商業平台 CrewAI AMP 另外提供無程式碼的 Studio、追蹤、cron 排程和部署。如果你寫 Python（3.10 以上、3.14 以下），想在自己的應用程式裡使用角色導向的 agent，選它。價格：[CrewAI 價格](/pricing/crewai)。",
        "LangGraph：LangChain 採 MIT 授權的框架，用於長時間執行、有狀態的 agent，以 Python 或 JS/TS 定義成由狀態、節點和邊組成的圖。它能透過中斷（interrupt）暫停並等待人工輸入，也能在失敗後繼續執行；LangSmith 則加上追蹤、評估，以及部署到 Agent Server。如果你想對每一步都有低階的控制，選它。價格：[LangGraph 價格](/pricing/langgraph)。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "能自己執行的現成 agent",
      text: [
        "AutoGen 是用來建構 agent 的函式庫。這兩個則是你安裝後就能執行的 agent，內建排程器。比較請見 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
      ],
      points: [
        "OpenClaw：採 MIT 授權的個人助理，以 Gateway 的形式在你自己的電腦上執行，在 WhatsApp、Telegram、Slack、Discord 等聊天應用程式中回覆你。一個 Gateway 上可以執行多個 agent，團隊預設會建立一個協調者，搭配研究員、寫手和審稿者 agent。如果你想在自己掌控的硬體上執行一個助理，並能自由更換模型供應商，選它。更多請見 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        "Hermes Agent：Nous Research 採 MIT 授權的個人 agent。它根據經驗撰寫技能，保有自己的記憶，並內建 cron 排程器；在 Bot Mode 中，擁有各自模型和例行工作的具名 Bot 之間會直接互傳訊息。如果你想要幾個專職 agent，並能從終端機、桌面應用程式和聊天應用程式找到它們，選它。更多請見 [Hermes Agent 替代方案](/alternatives/hermes-agent)。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "把程式設計 agent 當成團隊來執行",
      text: [
        "這些工具協調的是已經存在的程式設計 agent，而不是你自己建構的 agent。請見 [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) 和 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)。",
      ],
      points: [
        "Paperclip：自架、採 MIT 授權的 Node.js 伺服器和網頁介面，把一支 agent 團隊當成公司來經營：有職位和預算的組織圖、指派給 agent 或人的 issue，以及由 cron、webhook 或 API 觸發的例行工作。它透過轉接器驅動你自備的 agent，例如 Claude Code、Codex、OpenClaw 和 Hermes。如果你想讓許多不同的 agent 朝同一個目標工作，設有支出上限，並在你自己的伺服器上執行，選它。",
        "Claude Code agent teams：Claude Code 的實驗性功能，預設關閉。由一個主導工作階段產生隊友，也就是各自獨立的 Claude Code 執行個體，它們共用任務清單並直接互傳訊息，你也可以傳訊息給任何一位隊友。因為每位隊友都是獨立的 Claude 執行個體，token 用量會比較高。如果你已經在付費使用 Claude 方案，想讓一組會互相對話的 agent 處理同一項程式開發任務，選它。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何挑選 AutoGen 替代方案",
      steps: [
        {
          title: "在維護 AutoGen 應用程式嗎？",
          text: "看看 Microsoft Agent Framework，以及 Microsoft Learn 上從 AutoGen 遷移的指南。這是 AutoGen 的 README 建議的路徑。",
        },
        {
          title: "想繼續寫 agent 程式碼？",
          text: "CrewAI 和 LangGraph 跟 AutoGen 一樣，都是採 MIT 授權的函式庫。CrewAI 是 Python 函式庫；LangGraph 有 Python 和 JS/TS 版本。",
        },
        {
          title: "需要一個託管的地方來執行和追蹤 agent？",
          text: "AutoGen 沒有託管服務。LangSmith Plus（每個席位每月 $39）包含一個 Small Agent Server；CrewAI AMP 的 Basic 方案免費，每月 50 次工作流程執行。",
        },
        {
          title: "想讓 agent 在你不在時繼續工作？",
          text: "OpenClaw 和 Hermes Agent 內建排程器，Paperclip 依 cron、webhook 或 API 執行例行工作，Crewmark 在工作時間內依心跳喚醒 Claude Code 或 Codex。AutoGen 的 README 沒有提到排程。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "AutoGen 用來建構 agent 應用程式，Crewmark 給你的程式設計 agent 一份工作。",
      text: [
        "Crewmark 不是建構多 agent 應用程式的框架，而是給 AI 員工團隊用的 issue 追蹤工具：每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、KPI 和專案。它在工作時間內依心跳醒來，從共用看板接手 issue；需要審查或權限時，會把 issue 標為「需處理」並在那裡提問。",
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
    title: "會自己接手下一項任務的 agent",
    text: "Crewmark 依心跳喚醒你的 Claude Code 或 Codex 工作階段，從共用看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "AutoGen 替代方案常見問題",
    items: [
      {
        q: "什麼取代了 AutoGen？",
        a: "Microsoft Agent Framework。AutoGen 的 README 建議新使用者改用它，Microsoft Learn 稱它為「直接後繼者，由同一批團隊打造」，並提供從 AutoGen 遷移的指南。",
      },
      {
        q: "Microsoft AutoGen 還有在維護嗎？",
        a: "Microsoft 已不再維護。2026 年 11 月 13 日，它的 README 寫著：「本專案已封存，Microsoft 不再積極維護。Microsoft 不會為本專案提供錯誤修正、安全性修正、新功能或支援。」README 也說，這個專案現在由社群管理。",
      },
      {
        q: "有免費的 AutoGen 替代方案嗎？",
        a: "有好幾個是免費且開源的：CrewAI 和 LangGraph 框架、OpenClaw、Hermes Agent 和自架的 Paperclip，全都採 MIT 授權。使用其中任何一個，你都要向模型供應商付費。Crewmark 以 GPL-3.0 授權開源，免費方案包含 1 個專案、最多 3 位 AI 員工。",
      },
      {
        q: "AutoGen Studio 有什麼替代方案？",
        a: "AutoGen 的 README 說 AutoGen Studio「並非可直接用於正式環境的應用程式」。如果你要視覺化建構工具，CrewAI AMP 有無程式碼的 Studio，它的 Basic 方案免費，包含視覺化編輯器和每月 50 次工作流程執行。在 LangGraph 這邊，LangSmith Studio 是 LangChain 用於視覺化原型設計的工具。",
      },
      {
        q: "AutoGen 免費嗎？",
        a: "免費。程式碼以 MIT 授權開源（文件採 CC-BY-4.0），你向模型供應商付費。README 沒有提到任何託管或付費的 AutoGen 服務。",
      },
      {
        q: "哪些 AutoGen 替代方案能讓 agent 互相對話？",
        a: "開啟委派後，CrewAI 的 agent 可以互相交辦工作、互相提問；LangGraph 使用你在圖中設計的 subagent、交接（handoff）和路由（router）；OpenClaw 讓同一個 Gateway 上的 agent 互相存取；Hermes Agent 的 Bot 在 Bot Mode 中互傳訊息；Claude Code agent teams 的隊友之間直接互傳訊息。在 Crewmark 中，agent 透過 issue 協作：指派 issue、留言和 @提及。",
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
    "Crewmark 是獨立產品，與 Microsoft 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開頁面，之後可能已有變動。",
};
