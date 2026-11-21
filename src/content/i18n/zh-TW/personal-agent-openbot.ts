import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot：CopilotKit 的開源 AI 同事、價格與設定",
    description:
      "OpenBot 是 CopilotKit 開源、可自架的 AI 同事工作區。它能做什麼、OpenBot for Business 價格、設定方式、GitHub，以及與 Grok Bot 的比較。",
  },
  breadcrumb: "OpenBot",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · 開源",
    title: "OpenBot：CopilotKit 的開源 AI 同事工作區",
    lead: "OpenBot 是 CopilotKit 開源、可自架的 AI 同事工作區。每個 Bot 都有一台自己的電腦，附瀏覽器、檔案和工具，並在核准機制和活動記錄下工作。你可以在筆電上以桌面應用程式執行它，或為團隊部署在 Kubernetes 上，自備模型，還能透過 AG-UI 接入你已經打造好的 agent。本文說明它能做什麼、OpenBot for Business 要多少錢、如何設定、如何讓你保有掌控權，以及它和其他 AI 同事的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenBot 是什麼",
      points: [
        "每個 Bot 一台電腦：每個 Bot 都有自己的瀏覽器、檔案和工具，以及對話、例行程序、記憶、技能、應用程式、核准和活動記錄。",
        "執行位置：Mac 和 Windows 的桌面應用程式，在你的筆電上搭配 Docker 後端；或為團隊透過 Helm 部署在 Kubernetes 上。由 CopilotKit 託管的版本目前為搶先體驗。",
        "你的模型：OpenAI、Claude、Gemini，或透過 OpenAI 相容端點使用開放模型。你直接向模型供應商付費。",
        "你的 agent：使用內建的 Bot，或透過 AG-UI 接入你在其他技術堆疊上打造的 agent。",
        "例行程序（Routines）：定期工作，由 routine worker 執行。",
        "工具和前端：MCP 工具，以及 Mac、Windows、網頁、iOS、Android、Slack 和 Teams 的前端，其中部分為搶先體驗。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub 上的 OpenBot 與 CopilotKit Intelligence",
      text: [
        `程式碼位於 [github.com/CopilotKit/OpenBot](${repo})。儲存庫建立於 2026 年 8 月 17 日，2026 年 11 月 13 日約有 11,652 顆星。`,
      ],
      points: [
        "應用程式範本採用 MIT 授權，所以你可以自架並自訂。",
        "它使用 CopilotKit Intelligence，後者有自己的授權：在筆電上有免費的本機授權，在 Kubernetes 上則有試用或正式環境授權。",
        "在 Kubernetes 上以正式環境執行，需要評估用途以外的 CopilotKit Intelligence 授權。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot 價格與 OpenBot for Business",
      text: ["資料取自 2026 年 11 月 13 日的 open.bot/pricing，以美元計。所有方案都由你直接向模型供應商付費。"],
      headers: ["方案或授權", "價格"],
      rows: [
        ["個人專案", "免費"],
        ["OpenBot for Business，隨用隨付", "每位活躍使用者每月最高 $29，另加每月模型支出超過 $5,000 部分的 5%"],
        ["年約", "客製"],
        ["CopilotKit Intelligence", "筆電上的免費本機授權；Kubernetes 上的試用或正式環境授權"],
        ["模型", "直接付給模型供應商"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 OpenBot",
      steps: [
        {
          title: "選擇在哪裡執行",
          text: "在你的筆電上，使用 Mac 或 Windows 的桌面應用程式，搭配 Docker 後端執行。團隊使用則透過 Helm 部署在 Kubernetes 上。由 CopilotKit 託管的版本目前為搶先體驗。",
        },
        {
          title: "連結你的模型",
          text: "使用 OpenAI、Claude、Gemini，或透過 OpenAI 相容端點使用開放模型。你直接向供應商付費。",
        },
        {
          title: "挑一個 Bot，或帶入自己的 agent",
          text: "從內建的 Bot 開始，或透過 AG-UI 接入你已經打造好的 agent。每個 Bot 都有一台自己的電腦，附瀏覽器、檔案和工具。",
        },
        {
          title: "加入工具和例行程序",
          text: "給 Bot 加上 MCP 工具，並為定期工作設定例行程序（Routines）；由 routine worker 執行它們。",
        },
        {
          title: "在你工作的地方使用它",
          text: "前端涵蓋 Mac、Windows、網頁、iOS、Android、Slack 和 Teams；部分為搶先體驗。",
        },
      ],
      source: { label: "來源：GitHub 上的 OpenBot README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenBot 如何讓你保有掌控權",
      points: [
        "核准：Bot 在動作前會先詢問。",
        "活動：每個 Bot 都保留一份活動記錄。",
        "團隊版：企業登入、角色、工具權限和稽核。",
        "自架：它在你的筆電或你自己的 Kubernetes 叢集上執行，使用你選擇的模型供應商。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker、Suparagent 和 Claude Cowork",
      text: [
        "資料取自各專案的 README 或廠商自己的頁面，已於 2026 年 11 月 13 日查核，GitHub 星數也是當天的數字。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)；Grok Bot 請看 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "指南：[OpenWorker](/personal-agent/openworker)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["開發者", "CopilotKit", "Andrew Ng（GitHub 上的 andrewyng）", "GitHub 使用者 Anil-matcha", "Anthropic"],
        ["開源", "MIT 範本，CopilotKit Intelligence 另行授權；約 11,652 顆星", "MIT；約 19,050 顆星", "Apache 2.0；約 7,050 顆星", "否"],
        ["執行位置", "桌面應用程式（Mac、Windows，Docker 後端）或 Kubernetes；託管版為搶先體驗", "你的電腦（macOS、Windows）；一個小型雲端服務代理連接器登入", "桌面應用程式、自架的 Linux 伺服器或託管的網頁應用程式", "Anthropic 的雲端；透過 Claude Desktop 處理本機工作"],
        ["模型", "OpenAI、Claude、Gemini 或開放模型；透過 AG-UI 接入你自己的 agent", "你自己的 OpenAI、Anthropic、Gemini、OpenRouter 等金鑰，或本機模型", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "Claude 模型"],
        ["價格", "個人專案免費；Business 每位活躍使用者每月最高 $29", "未列出價格；自備模型", "未說明自架費用；託管方案每月 $0 到 $99", "Claude 付費方案；Pro 每月 $20"],
        ["定期工作", "例行程序（Routines），由 routine worker 執行", "排程的簡報、報告和其他可重複的任務", "依排程、webhook 或隨需執行的例行程序", "每小時、每天、每週或每個工作日，在雲端執行"],
        ["核准", "動作前詢問；團隊版有稽核", "預設開啟；可選用審查模型", "Ask first、Accept edits、Approve for me 或 Plan only", "Manual、Auto 或 Skip"],
        ["任務看板", "未說明", "未說明", "任務看板和行事曆", "沒有 issue 看板；有任務清單和 Scheduled 頁面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "工作區裡的 Bot，跑在程式 agent 上的 AI 員工。",
      text: [
        "OpenBot 在你自架的工作區裡，給每個 Bot 一台自己的電腦。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，並設定量化目標。" },
        { title: "把工作放上看板", text: "在共用看板上指派 issue；在工作時間內，心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 OpenBot" },
  mid: {
    title: "想在你已經在用的程式 agent 上配置 AI 員工？",
    text: "Crewmark 給你的 Claude Code 或 Codex 工作階段一個職位、工作時間、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "OpenBot 常見問題",
    items: [
      {
        q: "OpenBot 是什麼？",
        a: "CopilotKit 開源、可自架的 AI 同事工作區。每個 Bot 都有一台自己的電腦，附瀏覽器、檔案和工具，另有核准機制和活動記錄。它可以在你的筆電上以桌面應用程式執行，或為團隊部署在 Kubernetes 上，使用你自備的模型。",
      },
      {
        q: "OpenBot 是 CopilotKit 做的嗎？",
        a: "是的。它位於 github.com/CopilotKit/OpenBot。它使用 CopilotKit Intelligence，後者與 OpenBot 的 MIT 範本分開授權，並透過 AG-UI 接入現有的 agent。",
      },
      {
        q: "OpenBot 是免費開源的嗎？",
        a: "應用程式範本採用 MIT 授權，OpenBot 用於個人專案免費。它使用的 CopilotKit Intelligence 在筆電上有免費的本機授權，在 Kubernetes 上則有試用或正式環境授權。你直接向模型供應商付費。",
      },
      {
        q: "OpenBot for Business 要多少錢？",
        a: "隨用隨付為每位活躍使用者每月最高 $29，另加每月模型支出超過 $5,000 部分的 5%；年約價格為客製。在 Kubernetes 上以正式環境執行，還需要評估用途以外的 CopilotKit Intelligence 授權。",
      },
      {
        q: "OpenBot vs Grok Bot：有什麼不同？",
        a: "OpenBot 開源且可自架：你在自己的筆電或 Kubernetes 上執行它，自備模型或 agent。和 Grok Bot 的並排比較請看 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
      },
      {
        q: "OpenBot 在 GitHub 上的哪裡？",
        a: "在 github.com/CopilotKit/OpenBot。儲存庫建立於 2026 年 8 月 17 日，2026 年 11 月 13 日約有 11,652 顆星。",
      },
    ],
  },
  cta: {
    title: "自己託管你的 Bot，也給你的程式 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 GitHub 上的 OpenBot README 和 open.bot/pricing 查核；比較資料取自各產品自己的頁面，查核日期相同。",
  disclaimer: "Crewmark 是獨立產品，與 CopilotKit 無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
