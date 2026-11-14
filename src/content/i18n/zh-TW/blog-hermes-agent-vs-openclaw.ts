import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 和 OpenClaw 比較，再比 Claude Code（2026）",
    description:
      "Hermes Agent 和 OpenClaw 有什麼差別？兩者和 Claude Code 又怎麼比？根據各專案自己的文件，從定位、模型與訂閱、記憶與 skill、安全機制，到如何從 OpenClaw 遷移到 Hermes，一次說清楚。",
  },
  breadcrumb: "Hermes Agent 和 OpenClaw 比較",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 代理",
    title: "Hermes Agent、OpenClaw 和 Claude Code 比較：你該用哪一個？",
    lead: "OpenClaw 和 Hermes Agent 是目前規模最大的兩個開源個人 AI 代理：都在你自己的電腦上執行，並在 Telegram、Slack、WhatsApp 等聊天應用程式裡回覆你。OpenClaw 的社群較大（GitHub 約 394,000 顆星）；Hermes Agent 來自 Nous Research（約 261,000 顆星），核心是一套學習迴圈，能把經驗轉化為 skill。Claude Code 則是另一類工具：在你的程式碼儲存庫裡工作的程式設計代理。本文根據三者自己的文件逐項比較，幫你選對工具，或選對組合。",
    cta: "開始使用",
    secondary: "查看比較",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "先說結論",
      points: [
        "想要最多的管道與整合、最大的社群，選 OpenClaw：Discord、iMessage、Slack、Teams、Telegram、WhatsApp、Signal 等 20 多個管道都能接。",
        "想要會學習的助理，選 Hermes Agent：它能從經驗中建立 skill、邊用邊改進，並自行整理記憶，還內建 cron 排程器。",
        "在程式碼儲存庫裡做軟體開發，選 Claude Code：讀程式碼、改程式碼、跑測試、開 pull request。",
        "想讓 Claude Code 或 Codex 不用你催、從團隊看板上自己接著做事？那需要的是 AI 員工，請見本文最後。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent、OpenClaw 和 Claude Code 比較",
      text: ["資訊來自各專案的 README、文件以及 GitHub API，截至 2026 年 11 月 7 日。"],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["開發者", "Peter Steinberger 與社群；OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["定位", "住在聊天應用程式裡的個人 AI 助理", "具學習迴圈、能自我進化的個人代理", "在程式碼儲存庫裡工作的程式設計代理"],
        ["在哪裡和它對話", "20 多個聊天管道，外加 Control UI、CLI 和各平台應用程式", "Telegram、Discord、Slack、WhatsApp、Signal、電子郵件、CLI；桌面應用程式", "終端機、IDE、桌面應用程式；手機上用 Remote Control"],
        ["模型", "可切換：Claude、OpenAI 和 Codex、本機模型", "任何供應商：Nous Portal、OpenRouter、OpenAI、自訂端點", "Claude 系列模型"],
        ["Claude 訂閱", "API key，或沿用同一台機器上的 Claude Code 登入", "僅限開通額外用量額度的 Claude Max；Pro 不行", "包含在 Claude 方案中"],
        ["記憶與 skill", "本機記憶；skill 和外掛在 ClawHub 上分享", "由代理自行整理記憶；自動建立並改進 skill（agentskills.io 標準）", "CLAUDE.md、skill、hook、subagent"],
        ["排程", "Gateway 以常駐程式方式執行", "內建 cron 排程器", "`/loop` 和排程任務"],
        ["隔離", "除非設定沙箱，工具直接在主機上執行", "危險指令需要核准；可選 Docker 或 Modal", "權限模式與規則；沙箱"],
        ["授權、星數", "MIT，約 394k", "MIT，約 261k", "商業軟體"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent 和 OpenClaw 的真正差異",
      points: [
        "學習能力：Hermes 的招牌是學習迴圈，完成複雜任務後會自己寫 skill 並持續打磨。OpenClaw 的強項是廣度：管道更多、ClawHub 上的外掛更多，桌面與行動裝置都有原生應用程式。",
        "安全預設：OpenClaw 把收到的訊息一律視為不可信，陌生傳送者必須先配對；但除非你設定了沙箱，主工作階段的工具都直接在主機上執行。Hermes 預設在執行危險指令前先徵求你的同意，也能把工具隔離在 Docker 或 Modal 中。OpenClaw 公開揭露安全修正：2026 年 1 月以來共 722 則安全公告，所有嚴重等級的問題都已修正。",
        "訂閱：OpenClaw 可以沿用本機的 Claude Code 登入；Hermes 只在開通額外用量額度的 Max 方案上支援 Claude 訂閱。兩者都支援以 ChatGPT/Codex 帳號登入。",
        "治理：OpenClaw 由獨立的 OpenClaw Foundation 營運，OpenAI 是捐助方；Hermes Agent 由 Nous Research 開發。",
        "轉換：Hermes 提供一行指令就能匯入 OpenClaw 設定的工具（人設、記憶、skill 和訊息管道設定）。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何同時試用兩者，或從 OpenClaw 遷移到 Hermes",
      steps: [
        {
          title: "並排安裝",
          text: "兩者都是一行指令安裝，各自執行自己的 gateway，所以可以在同一台機器上用不同的聊天帳號分別測試。",
          code: install,
        },
        {
          title: "先只接一個管道",
          text: "從一個聊天應用程式開始，只允許你自己的帳號；兩者都會要求陌生傳送者先配對或列入允許清單。",
        },
        {
          title: "先預覽遷移",
          text: "`hermes import-agent openclaw --dry-run` 會列出將要搬移的內容；只有在你想連 API key 一起複製時，才加上 `--migrate-secrets`。",
        },
        {
          title: "接上真實帳號前，先決定隔離方式",
          text: "在代理讀取別人傳來的訊息之前，先開啟 OpenClaw 的沙箱或 Hermes 的 Docker 後端。想要預設就以容器隔離的選項，請看 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        },
      ],
      source: { label: "來源：Hermes Agent README", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw 和 Claude Code、Hermes 和 Claude Code 怎麼比",
      text: [
        "它們解決的是不同的問題。OpenClaw 和 Hermes 是你傳訊息使喚的助理：處理收件匣、行事曆、研究、提醒，以及跨應用程式的各種任務。Claude Code 則是打造軟體的地方：它讀懂你的程式碼庫、修改檔案、執行指令和測試，並開 pull request。很多人兩者都用：日常生活交給聊天助理，儲存庫裡的工作交給 Claude Code（或 Codex）。OpenClaw 甚至可以沿用同一台機器上的 Claude Code 登入。想讓 Claude Code 依自己的排程主動工作，請看[如何讓 Claude Code 主動工作](/proactive-claude-code)；想同時執行多個，請看[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "當你需要的是有職位的代理，而不是助理",
      text: [
        "OpenClaw 和 Hermes 要等你傳訊息才會回應。Crewmark 則把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 變成 AI 員工：每名員工都有職位、目標和工作時間，依心跳定時醒來，從共享看板接下一個 issue，需要你做決定時再傳訊息給你，用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "[SEO 專員](/ai-employees/seo-specialist)、[軟體工程師](/ai-employees/software-engineer)、[行銷代理](/ai-employees/marketing-agent) 等。",
        },
        {
          title: "接上你已經在用的代理",
          text: "每名員工都在自己的工作階段和檢出目錄中工作。",
        },
        {
          title: "把看板填滿",
          text: "指派 issue，只回答真正需要你的事。了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "並排試用 Hermes Agent 和 OpenClaw" },
  mid: {
    title: "需要能逐項消化 backlog 的代理？",
    text: "Crewmark 把 Claude Code 和 Codex 變成 AI 員工，依心跳定時從你的看板接下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "Hermes Agent 和 OpenClaw 常見問題",
    items: [
      {
        q: "Hermes Agent 比 OpenClaw 好嗎？",
        a: "取決於你重視什麼。Hermes Agent 著重學習（自行建立並改進 skill），預設在執行危險指令前會先詢問。OpenClaw 的管道、應用程式和社群外掛更多。",
      },
      {
        q: "可以從 OpenClaw 遷移到 Hermes Agent 嗎？",
        a: "可以。Hermes 內建 `hermes import-agent openclaw`，能匯入你的人設、記憶、skill 和訊息管道設定；建議先加上 `--dry-run` 執行一次。",
      },
      {
        q: "哪一個能用我的 Claude 訂閱？",
        a: "OpenClaw 可以沿用同一台機器上的 Claude Code 登入，也可以用 API key。Hermes Agent 只在開通額外用量額度的 Claude Max 上支援 Claude 訂閱；Pro 使用者需要 API key。",
      },
      {
        q: "OpenClaw 和 Hermes Agent 免費嗎？",
        a: "兩者都是以 MIT 授權釋出的開源專案。你需要為使用的模型付費；Nous Research 另外為 Hermes 提供可選的 Nous Portal 訂閱。",
      },
      {
        q: "OpenClaw 和 Claude Code 該用哪一個？",
        a: "OpenClaw 是住在聊天應用程式裡的個人助理；Claude Code 是在程式碼儲存庫裡工作的程式設計代理。兩者互補，而且 OpenClaw 可以沿用同一台機器上的 Claude Code 登入。",
      },
      {
        q: "Hermes Agent 和 Codex 有什麼不同？",
        a: "Codex 是 OpenAI 推出、在程式碼儲存庫裡工作的程式設計代理。Hermes 是通用的個人代理，可以用 ChatGPT/Codex 帳號登入來使用 OpenAI 的模型。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計代理一份工作，而不只是一個聊天視窗。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成 AI 員工，具備職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 OpenClaw 和 Hermes Agent 的 README、文件以及 GitHub API 查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenClaw Foundation、Nous Research、Anthropic 或 OpenAI 無關，也未獲其背書。產品名稱均為其所有者的商標。",
};
