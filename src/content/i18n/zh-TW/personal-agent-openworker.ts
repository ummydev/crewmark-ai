import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker：Andrew Ng 的開源 AI 同事、設定與 SDK",
    description:
      "OpenWorker 是 Andrew Ng 在 GitHub 上的開源 AI 同事：一款用你自己的模型執行的桌面應用程式，有核准機制和排程，另有 Harness SDK。",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · 開源",
    title: "OpenWorker：Andrew Ng 的開源 AI 同事，以及如何設定",
    lead: "OpenWorker 是一款開源桌面應用程式，它的 README 稱之為「an AI coworker for your everyday work」（處理日常工作的 AI 同事），另附一套以 TypeScript 和 Rust 撰寫的 Harness SDK，讓你打造自己的 agent 應用程式。儲存庫位於 Andrew Ng（吳恩達）的 GitHub 帳號下，採用 MIT 授權，2026 年 11 月 13 日約有 19,050 顆星。這款應用程式在你的機器上執行，使用你自己的模型金鑰或本機模型，行動前會先詢問，並記錄每一次工具呼叫。本文說明它能做什麼、費用多少、如何設定、核准機制如何運作，以及它和 OpenBot、Suparagent、Claude Cowork 的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenWorker 是什麼",
      points: [
        "處理日常工作的桌面應用程式：研究、寫作、審查程式碼，以及在你的工具之間執行任務。目前處於公開測試階段。",
        "在你的機器上執行：agent 迴圈、對話、連接器權杖和模型金鑰都留在那裡。唯一的雲端元件是一個為連接器代理 OAuth 登入的小型服務。",
        "模型由你挑選：OpenAI、Anthropic、Google Gemini、OpenRouter 等供應商，使用你自己的金鑰；或透過 Ollama、LM Studio、llama.cpp 或 vLLM 使用本機模型。它的 agent 引擎以 Python 撰寫，建立在 Andrew Ng 的函式庫 aisuite 之上。",
        "專職同事附有執行某一項工作所需的工具和指示；最先推出的是資安同事。",
        "連接器：GitHub、Slack、電子郵件和行事曆等 25 個以上的連接器，另支援 MCP。在 Slack 中 @OpenWorker，任務就會在你的桌面上執行，回覆則會出現在討論串中。",
        "排程：晨間簡報、週報和其他可重複的任務依排程執行，並留下可供審閱的執行紀錄。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub 上的 OpenWorker 與 Harness SDK",
      text: [
        `程式碼位於 [github.com/andrewyng/openworker](${repo})。儲存庫建立於 2026 年 7 月 20 日，它的 MIT LICENSE 列出的著作權人是 Andrew Ng，2026 年 11 月 13 日約有 19,050 顆星。`,
      ],
      points: [
        "Harness SDK：以 TypeScript 和 Rust 撰寫的 SDK，位於同一個儲存庫，用來打造你自己的 agent 桌面或網頁應用程式。",
        "子 agent 和團隊：SDK 兩者都支援；桌面應用程式則未說明。",
        "部署：以 SDK 打造的應用程式可以在 AWS、Azure 或 Google Cloud 的 Kubernetes 上執行。",
        "貢獻：維護者表示，對於已在開發中或不在他們規劃內的功能，可能不會接受 pull request。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker 價格與授權",
      text: [
        "截至 2026 年 11 月 13 日查核，README 和 openworker.com 都沒有列出價格。你自備模型金鑰，由你的供應商計費，或執行本機模型。",
      ],
      headers: ["元件", "你要付的費用"],
      rows: [
        ["桌面應用程式（公開測試）", "未列出價格；MIT 授權"],
        ["Harness SDK（TypeScript、Rust）", "未列出價格；MIT 授權，同一個儲存庫"],
        ["雲端模型：OpenAI、Anthropic、Google Gemini、OpenRouter 或其他供應商", "由該供應商計費，使用你自己的金鑰"],
        ["本機模型：Ollama、LM Studio、llama.cpp 或 vLLM", "在你自己的機器上執行"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 OpenWorker",
      steps: [
        {
          title: "下載桌面應用程式",
          text: "支援 Apple 晶片上的 macOS 12 以上版本（已簽署並經過公證），以及 x64 上的 Windows 10 或 11。Windows 版本尚未進行程式碼簽署，所以 SmartScreen 會顯示警告。未列出 Linux 版下載。",
        },
        {
          title: "加入模型",
          text: "輸入你自己的 OpenAI、Anthropic、Google Gemini、OpenRouter 或其他供應商的金鑰，或透過 Ollama、LM Studio、llama.cpp 或 vLLM 使用本機模型。金鑰會留在你的機器上。",
        },
        {
          title: "連結你的工具",
          text: "加入 GitHub、Slack、電子郵件和行事曆等連接器，或 MCP 伺服器。登入會經過一個代理 OAuth 的小型雲端服務；權杖則留在你的機器上。",
        },
        {
          title: "決定哪些事需要你同意",
          text: "動作預設會等你核准。你可以把單次核准變成常設規則和允許清單，或開啟自動核准，由一個審查模型做決定，不確定時再交給你。",
        },
        {
          title: "排程重複性工作",
          text: "設定晨間簡報、週報和其他可重複的任務。無人看管的執行絕不會自行核准：它們的問題會在收件匣中等你，每次執行都會留下可供審閱的執行紀錄。",
        },
      ],
      source: { label: "來源：GitHub 上的 OpenWorker README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenWorker 如何讓你保有掌控權：核准、審查與稽核",
      points: [
        "預設需要核准：動作會等你同意，而一組危險操作始終保留給人來決定。",
        "逐步累積的規則：單次核准可以變成常設規則或允許清單項目。",
        "選用的自動核准：由一個審查模型處理核准，不確定時交給你，並設有斷路器。",
        "稽核軌跡：每一次工具呼叫都會連同核准方式一併記錄，應用程式也會標示資料「Leaves this Mac」（離開這台 Mac）的動作。",
        "沙箱：指令可以在 NVIDIA OpenShell 沙箱或內建的 macOS 或 Windows 沙箱中執行。",
        "排程執行絕不會自行核准；任何需要你處理的事都會在收件匣中等你。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot、Suparagent 和 Claude Cowork",
      text: [
        "資料取自各專案的 README 或廠商自己的頁面，已於 2026 年 11 月 13 日查核，GitHub 星數也是當天的數字。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)。",
        "指南：[OpenBot](/personal-agent/openbot)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["開發者", "Andrew Ng（GitHub 上的 andrewyng）", "CopilotKit", "GitHub 使用者 Anil-matcha", "Anthropic"],
        ["開源", "MIT；約 19,050 顆星", "MIT 範本，CopilotKit Intelligence 另行授權；約 11,652 顆星", "Apache 2.0；約 7,050 顆星", "否"],
        ["執行位置", "你的電腦（macOS、Windows）；一個小型雲端服務代理連接器登入", "桌面應用程式（Mac、Windows，Docker 後端）或 Kubernetes；託管版為搶先體驗", "桌面應用程式、自架的 Linux 伺服器或託管的網頁應用程式", "Anthropic 的雲端；透過 Claude Desktop 處理本機工作"],
        ["模型", "你自己的 OpenAI、Anthropic、Gemini、OpenRouter 等金鑰，或本機模型", "OpenAI、Claude、Gemini 或開放模型；透過 AG-UI 接入你自己的 agent", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "Claude 模型"],
        ["價格", "未列出價格；自備模型", "個人專案免費；Business 每位活躍使用者每月最高 $29", "未說明自架費用；託管方案每月 $0 到 $99", "Claude 付費方案；Pro 每月 $20"],
        ["定期工作", "排程的簡報、報告和其他可重複的任務", "例行程序（Routines），由 routine worker 執行", "依排程、webhook 或隨需執行的例行程序", "每小時、每天、每週或每個工作日，在雲端執行"],
        ["核准", "預設開啟；可選用審查模型", "動作前詢問；團隊版有稽核", "Ask first、Accept edits、Approve for me 或 Plan only", "Manual、Auto 或 Skip"],
        ["任務看板", "未說明", "未說明", "任務看板和行事曆", "沒有 issue 看板；有任務清單和 Scheduled 頁面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "桌面上的同事，看板上的 AI 員工。",
      text: [
        "OpenWorker 是在你自己機器上執行的 AI 同事。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue，讓定期的工程、SEO 和行銷工作有人接手、有人追蹤。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，並設定量化目標。" },
        { title: "把工作放上看板", text: "在共用看板上指派 issue；在工作時間內，心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 OpenWorker" },
  mid: {
    title: "想要從看板領取 issue 的 AI 員工？",
    text: "Crewmark 給你的 Claude Code 或 Codex 工作階段一個職位、工作時間、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "OpenWorker 常見問題",
    items: [
      {
        q: "OpenWorker 是什麼？",
        a: "一款開源桌面應用程式，它的 README 稱之為「an AI coworker for your everyday work」（處理日常工作的 AI 同事），另附一套用來打造你自己 agent 應用程式的 Harness SDK。它在你的機器上執行，使用你自己的模型金鑰或本機模型，動作前會徵求核准，也能依排程執行任務。桌面應用程式目前處於公開測試階段。",
      },
      {
        q: "OpenWorker 是 Andrew Ng 做的嗎？",
        a: "儲存庫是 github.com/andrewyng/openworker，位於 Andrew Ng 的 GitHub 帳號下，它的 LICENSE 列出的著作權人是 Andrew Ng。這款應用程式的引擎建立在他的函式庫 aisuite 之上。openworker.com 的頁尾寫著「© 2026 OpenWorker」。",
      },
      {
        q: "OpenWorker 是免費開源的嗎？",
        a: "它以 MIT 授權開源，README 和 openworker.com 都沒有列出價格。你自備模型金鑰，由你的供應商計費，或透過 Ollama、LM Studio、llama.cpp 或 vLLM 執行本機模型。",
      },
      {
        q: "OpenWorker Harness SDK 是什麼？",
        a: "以 TypeScript 和 Rust 撰寫的 SDK，位於同一個儲存庫，用來打造你自己的 agent 桌面或網頁應用程式。它支援子 agent 和團隊，以它打造的應用程式可以在 AWS、Azure 或 Google Cloud 的 Kubernetes 上執行。",
      },
      {
        q: "OpenWorker 能在 Mac、Windows 和 Linux 上執行嗎？",
        a: "它可在 Apple 晶片上的 macOS 12 以上版本，以及 x64 上的 Windows 10 或 11 執行。Windows 版本尚未進行程式碼簽署，所以 SmartScreen 會顯示警告。未列出 Linux 版下載。",
      },
      {
        q: "OpenWorker 有哪些限制？",
        a: "桌面應用程式處於公開測試階段，Windows 版本尚未進行程式碼簽署，而且維護者表示，對於已在開發中或不在他們規劃內的功能，可能不會接受 pull request。",
      },
    ],
  },
  cta: {
    title: "把同事留在桌面上，也給你的程式 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 GitHub 上的 OpenWorker README 和 openworker.com 查核；比較資料取自各產品自己的頁面，查核日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 Andrew Ng 和 OpenWorker 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
