import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent：開源 AI 同事工作區、價格與設定",
    description:
      "Suparagent 是開源的 AI 同事工作區，AI 同事在 Claude Code、Codex、Gemini CLI 或 Cursor 上執行。它是什麼、價格、設定方式與比較。",
  },
  breadcrumb: "Suparagent",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · 開源",
    title: "Suparagent：開源的 AI 同事工作區",
    lead: "Suparagent 是一個開源的「workspace for AI coworkers」（AI 同事工作區）。你建立有名字的 agent，每個都有自己的工作、工作區、記憶、例行程序和核准設定，它們在你已經在用的引擎上執行，例如 Claude Code、Codex、Gemini CLI 或 Cursor。它以桌面應用程式或在你自己的伺服器上執行；suparagent.ai 的託管服務是另一個產品。這款應用程式原名 Open Dots，後來改名 Open Duet，並在 2026 年 11 月 9 日的 0.8.5 版改名為 Suparagent。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Suparagent 是什麼",
      points: [
        "有名字的同事：每個 agent 都有名字、職位、引擎、工作區、記憶和核准設定，並有範本和技能可以作為起點。",
        "你已經在用的引擎：Claude Code 或 Codex CLI、Gemini CLI、透過 Antigravity 使用的 Google Gemini、Cursor、透過 Agent Client Protocol（ACP）接入的其他 CLI agent、OpenRouter，或 Ollama、LM Studio 等 OpenAI 相容 API。不含模型。",
        "工作和排程：用任務看板和行事曆指派工作、排定單次執行和檢視各次嘗試，例行程序則在後端執行期間，依排程、webhook 或隨需執行。",
        "agent 團隊：主導 agent（Claude 或 Codex）把工作委派給專職 agent，agent 之間在共用聊天室中協調。",
        "核准：Ask first、Accept edits、Approve for me（Claude、Codex 和 Cursor）和 Plan only。例行程序絕不會自行核准動作，Today 檢視會集中顯示核准、問題和例行程序的結果。",
        `以 Apache 2.0 開源，位於 [github.com/Anil-matcha/suparagent](${repo})，2026 年 11 月 13 日約有 7,050 顆星，儲存庫建立於 2023 年 5 月。它仍在早期且持續變動：自架伺服器、Docker 電腦、瀏覽器工具和 macOS 原生桌面預覽版都是實驗性的。`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent 價格",
      text: [
        "桌面應用程式或自架伺服器都沒有說明 Suparagent 的費用。託管方案依 2026 年 11 月 13 日 README 所列，以美元計。所有方案都要自備 AI 供應商帳號。",
      ],
      headers: ["方案", "價格", "內容"],
      rows: [
        ["桌面應用程式或自架伺服器", "未說明 Suparagent 費用", "使用你自己的引擎；你向模型供應商付費"],
        ["託管：Free preview", "$0", "沙箱運算費用計入你的 Boat 帳號"],
        ["託管：Starter", "每月 $15", "100 運算小時，51 GB"],
        ["託管：Standard", "每月 $49", "300 運算小時，51 GB"],
        ["託管：Pro", "每月 $99", "720 運算小時，111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Suparagent",
      steps: [
        {
          title: "選擇在哪裡執行",
          text: "從原始碼 checkout 執行桌面應用程式（GitHub Releases 上的安裝程式為實驗性且未簽署），架設自己的 Linux 伺服器，或使用 suparagent.ai 的託管網頁應用程式。",
        },
        {
          title: "建立 agent",
          text: "給它一個名字、一個職位、一個引擎（例如 Claude Code、Codex、Gemini CLI 或 Cursor）、一個工作區和一種核准模式，或從範本開始。",
        },
        {
          title: "給它工作",
          text: "在看板上指派任務，或設定例行程序依排程、webhook 或隨需執行；後端必須保持執行。核准、問題和結果會集中在 Today 檢視中。",
        },
      ],
      source: { label: "來源：GitHub 上的 Suparagent README", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker、OpenBot 和 Claude Cowork",
      text: [
        "資料取自各專案的 README 或廠商自己的頁面，已於 2026 年 11 月 13 日查核，GitHub 星數也是當天的數字。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)。",
        "指南：[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["開發者", "GitHub 使用者 Anil-matcha", "Andrew Ng（GitHub 上的 andrewyng）", "CopilotKit", "Anthropic"],
        ["開源", "Apache 2.0；約 7,050 顆星", "MIT；約 19,050 顆星", "MIT 範本，CopilotKit Intelligence 另行授權；約 11,652 顆星", "否"],
        ["執行位置", "桌面應用程式、自架的 Linux 伺服器或託管的網頁應用程式", "你的電腦（macOS、Windows）；一個小型雲端服務代理連接器登入", "桌面應用程式（Mac、Windows，Docker 後端）或 Kubernetes；託管版為搶先體驗", "Anthropic 的雲端；透過 Claude Desktop 處理本機工作"],
        ["模型", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "你自己的 OpenAI、Anthropic、Gemini、OpenRouter 等金鑰，或本機模型", "OpenAI、Claude、Gemini 或開放模型；透過 AG-UI 接入你自己的 agent", "Claude 模型"],
        ["價格", "未說明自架費用；託管方案每月 $0 到 $99", "未列出價格；自備模型", "個人專案免費；Business 每位活躍使用者每月最高 $29", "Claude 付費方案；Pro 每月 $20"],
        ["任務看板", "任務看板和行事曆", "未說明", "未說明", "沒有 issue 看板；有任務清單和 Scheduled 頁面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "有目標、工作時間和心跳的 AI 員工",
      text: [
        "Suparagent 在你選擇的引擎上執行有名字的同事。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，並設定量化目標。" },
        { title: "把工作放上看板", text: "在共用看板上指派 issue；在工作時間內，心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Suparagent" },
  mid: {
    title: "想在你已經在用的程式 agent 上配置 AI 員工？",
    text: "Crewmark 給你的 Claude Code 或 Codex 工作階段一個職位、工作時間、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Suparagent 常見問題",
    items: [
      {
        q: "Suparagent 是什麼？",
        a: "一個開源的 AI 同事工作區。你建立有名字的 agent，各自有職位、記憶、例行程序和核准設定，它們在你已經在用的引擎上執行，例如 Claude Code、Codex、Gemini CLI 或 Cursor。在 2026 年 11 月 9 日改名之前，它原名 Open Dots，後來叫 Open Duet。",
      },
      {
        q: "Suparagent 免費嗎？",
        a: "程式碼採用 Apache 2.0，桌面應用程式或自架伺服器都沒有說明 Suparagent 的費用；你向模型供應商付費。README 列出的託管方案有：$0 的 Free preview（沙箱運算費用計入你的 Boat 帳號）、每月 $15 的 Starter、$49 的 Standard 和 $99 的 Pro。",
      },
      {
        q: "Suparagent 支援哪些 AI agent？",
        a: "Claude Code 或 Codex CLI、Gemini CLI、透過 Antigravity 使用的 Google Gemini、Cursor、透過 Agent Client Protocol（ACP）接入的其他 CLI agent、OpenRouter，以及 Ollama、LM Studio 等 OpenAI 相容 API。團隊的主導 agent 必須是 Claude 或 Codex，已連結的應用程式也只能搭配 Claude 和 Codex agent 使用。",
      },
    ],
  },
  cta: {
    title: "給你的程式 agent 一份工作，而不只是一段提示詞。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 GitHub 上的 Suparagent README、變更紀錄和授權，以及 suparagent.ai 查核；比較資料取自各產品自己的頁面，查核日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 Suparagent 專案和 Vadoo Internet Services Private Limited 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
