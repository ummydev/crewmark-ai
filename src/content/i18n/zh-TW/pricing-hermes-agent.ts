import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/hermes-agent; the English master is
// src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 價格：免費 agent 和 Nous Portal 方案",
    description:
      "Hermes Agent 免費且採 MIT 授權。選用的 Nous Portal 每月 $0、$20、$100 或 $200。各方案包含什麼，以及你還要另外付什麼。",
  },
  breadcrumb: "Hermes Agent 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · Nous Research",
    title: "Hermes Agent 價格：免費的 agent，加上選用的 Nous Portal 訂閱",
    lead: "Hermes Agent 是免費的：Nous Research 以 MIT 授權發布它，你向模型供應商付費。如果你想從 Nous 取得模型，選用的 Nous Portal 有四個方案：$0 的 Free、每月 $20 的 Plus、$100 的 Super 和 $200 的 Ultra，付費方案都包含一個雲端託管的 agent。以下是各方案包含的內容、你還要另外付什麼，以及它和 OpenClaw、OpenCode、OpenWorker、Grok Bot 的比較。",
    cta: "開始使用",
    secondary: "查看方案",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Hermes Agent 和 Nous Portal 方案",
      text: [
        "資料來自 hermes-agent.nousresearch.com 和 portal.nousresearch.com，查核日期為 2026 年 11 月 13 日。價格皆為月費，未列出年費價格。使用 agent 不需要 Nous Portal 方案。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "Hermes Agent",
          "免費，MIT 授權",
          "agent 本身：終端機 UI、桌面應用程式、透過單一 gateway 連接聊天應用程式、技能、記憶、cron 排程器和 Bot Mode。可接入任何模型供應商",
        ],
        ["Nous Portal Free", "$0", "隨用隨付；僅限免費模型"],
        ["Nous Portal Plus", "每月 $20", "免費和付費模型；一個雲端託管的 agent（4 GB RAM、25 GB 磁碟）"],
        [
          "Nous Portal Super",
          "每月 $100",
          "Plus 的 5 倍用量；免費和付費模型；一個雲端託管的 agent（4 GB RAM、100 GB 磁碟）",
        ],
        [
          "Nous Portal Ultra",
          "每月 $200",
          "Plus 的 10 倍用量；免費和付費模型；一個雲端託管的 agent（8 GB RAM、100 GB 磁碟）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "執行 Hermes Agent 實際要付多少",
      points: [
        "你的模型供應商。用 `hermes model` 切換供應商：Nous Portal、OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、Ollama Cloud、LM Studio、自訂端點等。使用 API key 時，由該供應商向你收費。",
        "Claude 訂閱只有在 Claude Max 加上購買的額外用量時才能用。文件寫明「Claude Pro 訂閱者無法使用這個方式」，所以 Pro 使用者需要 API key。",
        "ChatGPT/Codex 透過裝置代碼登入。哪些 ChatGPT 方案可用、用量如何計入方案上限，文件說「目前沒有記載」。",
        "一個執行它的地方。Hermes Agent 可以安裝在本機或伺服器上：README 列出「一台 $5 的 VPS、一個 GPU 叢集或無伺服器基礎架構」。它的六種終端機後端是本機、Docker、SSH、Modal、Daytona 和 Vercel Sandbox。",
        "或者訂閱 Nous Portal 付費方案，其中包含一個雲端託管的 agent（規格見上表）。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 價格 vs 類似的 agent",
      text: [
        "價格取自各產品自己的網站，查核日期為 2026 年 11 月 13 日。",
        "並排比較：[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)、[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)、[Multica vs Hermes Agent](/compare/multica-vs-hermes-agent)。更多選擇請見 [Hermes Agent 替代方案](/alternatives/hermes-agent)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["Hermes Agent", "免費；選用的 Nous Portal Plus 每月 $20", "有：agent（MIT），以及 $0 的 Nous Portal Free"],
        ["[OpenClaw](/pricing/openclaw)", "免費；你向模型供應商付費", "有：整個專案（MIT）"],
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
        ["[Grok Bot](/personal-agent/grok-bot)", "Premium 每月 $30；Super $100、Ultra $200", "未列出"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "Hermes Agent 是你的個人 agent，Crewmark 經營一支程式設計 agent 團隊。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位、目標和工作時間。它依心跳醒來，從共用看板接手 issue。agent 在你已經付費的 Claude 或 ChatGPT 訂閱上執行，沒有另外的 token 帳單。",
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
          text: "[Crewmark 價格](/pricing)，以及 agent 能用它做什麼：[Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要能持續做一份工作的 agent 嗎？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Hermes Agent 價格常見問題",
    items: [
      {
        q: "Hermes Agent 免費嗎？",
        a: "免費。agent 以 MIT 授權開源。你向模型供應商付費，也可以選擇訂閱 Nous Portal。",
      },
      {
        q: "Hermes Agent 每月多少錢？",
        a: "agent 本身 $0。選用的 Nous Portal 有 $0 的 Free、每月 $20 的 Plus、$100 的 Super（Plus 的 5 倍用量）和 $200 的 Ultra（Plus 的 10 倍用量）。未列出年費價格。",
      },
      {
        q: "使用 Hermes Agent 需要訂閱 Nous Portal 嗎？",
        a: "不需要。Nous Portal 只是你可以用 `hermes model` 挑選的眾多供應商之一，其他還有 OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、本機模型和自訂端點。",
      },
      {
        q: "可以用我的 Claude 訂閱來使用 Hermes Agent 嗎？",
        a: "只有 Claude Max 加上購買的額外用量才行。文件說 Claude Pro 訂閱者無法使用訂閱方式，所以 Pro 使用者需要 API key。",
      },
      {
        q: "Hermes Agent 的價格方案包含託管嗎？",
        a: "Nous Portal 付費方案包含一個雲端託管的 agent：Plus 為 4 GB RAM 和 25 GB 磁碟，Super 為 4 GB 和 100 GB，Ultra 為 8 GB 和 100 GB。否則就在你自己的機器或伺服器上執行。",
      },
      {
        q: "可以用我的 ChatGPT 訂閱來使用 Hermes Agent 嗎？",
        a: "ChatGPT/Codex 透過裝置代碼登入，但文件說，哪些 ChatGPT 方案可用、用量如何計入方案上限，目前沒有記載。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計 agent 一個職位和一份排程。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 hermes-agent.nousresearch.com、portal.nousresearch.com、Hermes Agent 的文件和 GitHub README，以及每個比較產品自己的價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Nous Research 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
