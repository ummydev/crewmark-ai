import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/openclaw; the English master is
// src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 價格：免費，以及你實際要付的費用",
    description:
      "OpenClaw 免費且採 MIT 授權，沒有付費方案或託管服務。你要付的是模型供應商的費用：API key，或你已經有的訂閱。",
  },
  breadcrumb: "OpenClaw 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · OpenClaw",
    title: "OpenClaw 價格：免費開源，你向模型供應商付費",
    lead: "OpenClaw 不用錢。它採 MIT 授權，README 說這個專案「沒有付費方案、託管服務或代幣」。你付的是背後模型的費用：由供應商計費的 API key，或你已經有的訂閱，例如 ChatGPT 或 Claude Code 登入。Gateway 在你自己的機器上執行。以下說明這在實務上代表什麼，以及它和 Hermes Agent、OpenCode、OpenWorker、Claude Code 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenClaw 方案和價格",
      text: [
        "資料來自 OpenClaw 的 GitHub README 和 docs.openclaw.ai，查核日期為 2026 年 11 月 13 日。只有一個版本，而且免費。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "OpenClaw（開源）",
          "免費，MIT 授權",
          "Gateway、Control UI、CLI 和 TUI；macOS、iOS、Android、Windows 和 Linux 原生應用程式；WhatsApp、Telegram、Slack、Discord、iMessage 等聊天管道；每個 Gateway 可執行多個 agent；Automations 排程器",
        ],
        ["付費方案", "無", "README 說沒有付費方案"],
        ["託管服務", "無", "Gateway 由你自己執行和維護"],
        [
          "模型用量",
          "由你的模型供應商計費",
          "API key，或你已經有的訂閱（ChatGPT/Codex OAuth，或同一台主機上的 Claude Code 登入）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "執行 OpenClaw 實際要付多少",
      points: [
        "你的模型供應商。模型以外掛形式接入：OpenAI、Anthropic、Google Gemini、OpenRouter、xAI 等。使用 API key 時，該供應商會依 OpenClaw 的用量向你收費。",
        "或者用你已經付費的訂閱。OpenClaw 可以透過 OpenAI ChatGPT/Codex OAuth 登入，也可以沿用同一台主機上的 Claude Code 登入來使用 Claude（也可用 `claude setup-token`）。",
        "Claude Code 登入只有在 OpenClaw 和該登入位於同一台主機時才有效。容器安裝（例如 Podman）不會掛載 `~/.claude`，所以文件建議在這種情況下使用 API key。",
        "供應商清單中也有本機模型伺服器：Ollama、LM Studio 和 vLLM。",
        "你自己的機器。Gateway 是在你掌控的硬體上執行的 daemon，可安裝在 macOS、Linux、Windows 或 WSL2 上，或透過 Docker 或 Nix 安裝。OpenClaw 本身不提供託管。",
        "不用付錢給 OpenClaw 本身。這個專案沒有付費方案，所以沒有東西可以向它購買。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw 價格 vs 類似的 agent",
      text: [
        "價格取自各產品自己的網站，查核日期為 2026 年 11 月 13 日。這些產品都還需要一個模型，除非下列方案已包含，否則模型費用付給其供應商。",
        "並排比較：[OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。更多選擇請見 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["OpenClaw", "免費；你向模型供應商付費", "有：整個專案（MIT）"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "agent 免費；選用的 Nous Portal Plus 每月 $20",
          "有：agent（MIT），以及 $0 的 Nous Portal Free",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "agent 免費；OpenCode Go 每月 $10，Go Plus 每月 $40",
          "有：有每日請求上限的免費模型，不需帳號",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "未列出價格；使用你自己的模型金鑰或本機模型",
          "有：應用程式本身（MIT）",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro 每月 $20，按年計費為每月 $17",
          "沒有：Claude Free 不包含；也可以用隨用隨付的 API 額度",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "OpenClaw 在聊天中回覆你，Crewmark 給你的程式設計 agent 一份工作。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue。和 OpenClaw 一樣，它不對模型用量收費：agent 在你已經付費的 Claude 或 ChatGPT 訂閱上執行。",
        "Crewmark 的價格：Free 方案 $0（1 個專案、最多 3 位 AI 員工、1 個人）。每月 $5 的 Pro 和每月 $10 的 Team 即將推出。計費功能還沒做好，所以在那之前，所有帳號都可以免費使用 Crewmark。它以 GPL-3.0 授權開源，也可以自架。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)中挑選，並設定量化目標。" },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。",
        },
        {
          title: "查看方案",
          text: "[Crewmark 價格](/pricing)，以及 agent 能用它做什麼：[Claude Code 使用情境](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  mid: {
    title: "已經在付費使用 Claude 或 ChatGPT 了嗎？",
    text: "Crewmark 把你的 Claude Code 或 Codex 變成 AI 員工，有職位、心跳和共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "OpenClaw 價格常見問題",
    items: [
      {
        q: "OpenClaw 免費嗎？",
        a: "免費。OpenClaw 以 MIT 授權開源，README 說這個專案「沒有付費方案、託管服務或代幣」。你只需向模型供應商付費。",
      },
      {
        q: "OpenClaw 有價格方案嗎？",
        a: "沒有。只有一個免費版本。唯一的帳單來自你接入的模型：由供應商計費的 API key，或你已經有的訂閱。",
      },
      {
        q: "OpenClaw 的定價模式是什麼？",
        a: "免費軟體加上你自備的模型。模型以外掛形式接入（OpenAI、Anthropic、Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM 等），所以費用取決於你選擇的供應商和方案。",
      },
      {
        q: "可以用我的 Claude 訂閱來使用 OpenClaw 嗎？",
        a: "可以，沿用同一台主機上的 Claude Code 登入即可（或用 `claude setup-token`）。Podman 這類容器安裝不會掛載 `~/.claude`，所以文件建議在這種情況下使用 API key。",
      },
      {
        q: "OpenClaw 有託管版本嗎？",
        a: "專案本身沒有提供。你在自己的機器上執行 Gateway（macOS、Linux、Windows 或 WSL2，或透過 Docker 或 Nix），並自行維護。",
      },
      {
        q: "誰出錢開發 OpenClaw？",
        a: "OpenClaw Foundation，一個獨立的 501(c)(3) 組織，聘用核心團隊並簽署各個版本。README 說「OpenAI 是捐助者，而非擁有者」。",
      },
    ],
  },
  cta: {
    title: "模型帳單照舊，給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 OpenClaw 的 GitHub README、docs.openclaw.ai，以及每個比較產品自己的價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenClaw Foundation 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
