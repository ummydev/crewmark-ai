import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/deepseek-super-agent; the English master is
// src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent 是什麼，怎麼設定 | Crewmark",
    description:
      "DeepSeek 開源的 Super-Agent（dsh-superagent）是針對單一 GitHub 儲存庫的主動式程式設計代理。功能、需求、設定步驟、安全限制與比較。",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "部落格 · DeepSeek",
    title: "DeepSeek Super-Agent 是什麼，怎麼設定",
    lead: "dsh-superagent 是 DeepSeek 開源、針對單一 GitHub 儲存庫的主動式程式設計代理（agent），於 2026 年 10 月 31 日以 MIT 授權發表。它執行在 DeepSeek Harness 上，監看 GitHub（可選擇再加飛書 Feishu），把請求變成 pull request，每個請求都在獨立的工作階段和目錄中處理。本文說明它能做什麼、需要什麼、如何設定、「主動」在實際上指什麼，以及與同類產品的比較。",
    cta: "申請搶先體驗",
    secondary: "跳到設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "DeepSeek Super-Agent 是什麼",
      text: [
        "儲存庫把 dsh-superagent 描述為「針對單一 GitHub 儲存庫的主動式程式設計代理，封裝成 DeepSeek Harness 的一個 bundle」。名單內的人向它提出工作後，它會建立一個工作項目（Ticket），在自己的代理工作階段和目錄中處理，並在原本的對話中回覆，例如提交一個 pull request。網頁面板只列出需要人處理的事項。",
        "DeepSeek 把它標為研究原型，「不是 DeepSeek 官方產品」。公開的程式碼與 DeepSeek 內部版本不同，DeepSeek 文章裡的一些設計只是未來方向，原型並未實作。",
      ],
      points: [
        "來源：GitHub 通知、訂閱的 issue 和 pull request、CI 變化，以及已合併或已關閉的 pull request；如果接入，還有飛書（Feishu）聊天。",
        "平行作業：每個 Ticket 都有自己的執行工作階段，名為 `worker-<ticket id>`，也有自己的目錄，通常是 `git worktree` 簽出，並行數不超過你設定的上限。",
        "後續追蹤：之後在 issue 或 pull request 裡的留言，會送到正在處理它的 Ticket，不必再次 @ 這個代理。",
        "它給自己訂的規矩：「佔用盡可能少的人類注意力，提供盡可能多的價值。」它只會確認一次請求，工作時保持安靜，只有在有結果、有問題或失敗時才再次聯絡你。",
      ],
    },
    {
      kind: "table",
      title: "它真的會主動工作嗎？三種 accept 模式",
      text: [
        "新聞報導把它描述成一個不必你開口就會修 bug 的代理。文件的說法更謹慎：名單內的人直接提出的請求一律有效，但沒人提過的工作需要你團隊寫的規則，而預設模式只會記錄代理原本會做什麼。",
      ],
      headers: ["Accept 模式", "沒人提過的工作會怎樣"],
      rows: [
        ["`off`", "忽略：只有名單內的人直接提出的請求才會啟動工作"],
        ["`observe`（預設）", "依你的規則評估並記錄為「would accept」，但不會啟動任何工作"],
        ["`auto`", "只要符合你的至少一條規則就會啟動"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 dsh-superagent",
      text: [
        "你需要 Node.js 22.19+ 或 24+、pnpm、git 2.32+、tmux、Python 3.8+、GitHub CLI 2.48+、DeepSeek Harness 0.2.1-alpha.2 或更新的 0.2 版本，以及在 DeepSeek Harness 中設定好的模型供應商。設定步驟很長，所以儲存庫讓你的程式設計代理帶著你一步步完成。",
      ],
      steps: [
        {
          title: "安裝 DeepSeek Harness",
          text: "DeepSeek Harness（`dsh`）是 DeepSeek 開源的代理 harness，目前為開發者預覽版。啟動一次並設定模型供應商；Web UI 會在 `http://127.0.0.1:3080` 開啟。",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "複製儲存庫，把 SETUP.md 交給你的程式設計代理",
          text: "在簽出的目錄中，請你的程式設計代理讀取 SETUP.md。它會檢測你的機器，每則訊息只問一個問題，把完整計畫展示一次，然後才開始安裝。",
          code: "git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git\ncd dsh-superagent-prototype\n# then ask your coding agent:\n# Read SETUP.md in this repository and set up dsh-superagent with me.",
        },
        {
          title: "回答設定問題",
          text: "請求來自哪裡（只用 GitHub，還是再加飛書 Feishu）、用哪個儲存庫、代理以哪個 GitHub 帳號行動（用專用帳號，千萬別用你自己的）、哪些登入名稱可以向它提出工作、每個 Ticket 從哪個複本簽出、它的提交署誰的名、是否允許它開啟 auto-merge（建議的回答是不允許）。",
        },
        {
          title: "完成只有你能做的步驟",
          text: "建立代理的 GitHub 帳號，用該帳號接受儲存庫邀請，並登入它的 CLI。代理從不在聊天中索取密鑰，而是給出讓你在自己終端機裡執行的確切指令。",
        },
        {
          title: "檢查它採用的預設值",
          text: "一個獨立的 DeepSeek Harness profile，名為 `superagent`，連接埠 3082；分支前綴 `agent/`；accept 模式 `observe`；以及每小時一次的檢查，代理停止了就重新啟動它。",
        },
        {
          title: "傳給它第一個請求",
          text: "用名單內的帳號在某個 issue 下留言 `@<agent login> <request>`。大約一分鐘內，面板裡會出現一個 Ticket；代理先確認收到，在自己的目錄中工作，並在同一個討論串中回覆，通常是一個 pull request。",
        },
      ],
      source: { label: "來源：GitHub 上的 dsh-superagent 儲存庫", href: repo },
    },
    {
      kind: "text",
      title: "安全：執行之前要知道什麼",
      points: [
        "Worker 以你的作業系統使用者身分，用 `danger-full-access` 執行。它們能讀取你的家目錄，並依路徑執行任何程式；帳號包裝腳本只負責選擇憑證，不是安全邊界。",
        "若要做隔離，DeepSeek 的文件建議在專用的作業系統帳號下執行，該帳號只保存代理的憑證。",
        "它寫下的一切都會出現在代理的 GitHub 帳號名下，所以設定時建議用專用帳號，而且一開始名單要短。",
        "訊息和留言無法改變誰可以提出工作：名單、規則和 accept 模式只能在面板中修改。",
        "每一輪結束後，背景作業最多有 30 分鐘完成，之後它的 shell 工作會被停止，Ticket 被標記為等待。",
        "它是研究原型，而 DeepSeek Harness 是開發者預覽版，預期會有破壞性變更。",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "三者都是不必你守在對話裡也會繼續工作的代理，但啟動工作的方式不同。Super-Agent 等待一次 @ 提及或你團隊寫的規則；[ChatGPT dots](/blog/chatgpt-dots) 執行在 OpenAI 的雲端；Crewmark 則依排程喚醒你已經在用的程式設計代理，包括 DeepSeek Harness。",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["執行於", "你的機器，在 DeepSeek Harness 中", "OpenAI 的雲端電腦", "你的電腦，在 DeepSeek Harness、Claude Code、Codex 或 OpenCode 裡"],
        ["如何開始工作", "名單內的人 @ 提及，或 `auto` 模式下的規則", "你的訊息、排程和它自己的研究", "工作時間內每 15–60 分鐘一次心跳"],
        ["工作佇列", "來自 GitHub 和飛書（Feishu）討論串的 Ticket", "對話串和 Scheduled", "看板上的任務"],
        ["範圍", "每次設定對應一個 GitHub 儲存庫", "你連接的應用程式", "每個職位一名員工，例如 SEO 或工程"],
        ["費用", "免費，MIT 授權；模型供應商的費用由你負擔", "Pro 和 Business Premium 方案", "搶先體驗；用你現有的代理和方案執行"],
        ["狀態", "研究原型", "逐步開放中", "搶先體驗"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓你的 DeepSeek Harness、Claude Code 或 Codex 工作階段主動工作起來",
      text: [
        "Super-Agent 需要為每個儲存庫單獨設定 profile、帳號並完成設定。Crewmark 則配合你已經在用的代理（包括 DeepSeek Harness）：它給這個工作階段一個職位、一個目標和工作時間，並用心跳喚醒它，從看板上領取下一個任務，適用於任何類型的工作，而不只是某一個儲存庫。",
      ],
      steps: [
        {
          title: "把工作階段變成員工",
          text: "選一個職位，例如軟體工程師或 SEO 專員，用數字寫下它的目標，然後在 DeepSeek Harness、Claude Code、Codex 或 OpenCode 裡執行設定指令。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次，接著上次的進度繼續；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "分配任務，回覆它的訊息",
          text: "把工作放到看板上；員工會領取任務，邊做邊留言，需要你拍板時傳訊息給你。了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 DeepSeek 的 dsh-superagent" },
  mid: {
    title: "已經在用 DeepSeek Harness、Claude Code 或 Codex？",
    text: "Crewmark 讓這個工作階段主動工作起來：心跳、工作時間和任務看板，用的就是你已經付費的方案。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "DeepSeek Super-Agent 常見問題",
    items: [
      {
        q: "DeepSeek Super-Agent 是什麼？",
        a: "dsh-superagent 是針對單一 GitHub 儲存庫的開源主動式程式設計代理，DeepSeek 於 2026 年 10 月 31 日以 MIT 授權作為研究原型發表。它執行在 DeepSeek Harness 上，接收來自 GitHub（可選擇再加飛書 Feishu）的請求，並以 pull request 作為回覆。",
      },
      {
        q: "DeepSeek Super-Agent 免費嗎？",
        a: "程式碼在 MIT 授權下免費。它執行在 DeepSeek Harness 上，使用你設定的模型供應商，所以模型用量的費用由你支付。DeepSeek 尚未宣布託管版本。",
      },
      {
        q: "DeepSeek Super-Agent 在 GitHub 的哪裡？",
        a: "在 github.com/deepseek-ai/dsh-superagent-prototype。它所執行的代理 harness DeepSeek Harness 在 github.com/deepseek-ai/deepseek-harness。",
      },
      {
        q: "DeepSeek Super-Agent 會不請自來地修 bug 嗎？",
        a: "只有你允許時才會。名單內的人直接提出的請求一律有效，但沒人提過的工作需要你團隊寫的規則，而預設的 `observe` 模式只記錄它原本會做什麼。檢視這些記錄之後，再切換到 `auto`。",
      },
      {
        q: "dsh-superagent 能和 Slack 或 Teams 搭配使用嗎？",
        a: "這個原型不行。它內建 GitHub 和飛書（Feishu）兩個來源；它的 cookbook 說明了如何新增其他來源。",
      },
      {
        q: "執行它安全嗎？",
        a: "它的 worker 以你的作業系統使用者身分擁有完整存取權，能讀取你的家目錄，所以 DeepSeek 的文件建議使用只保存代理憑證的專用作業系統帳號、專用 GitHub 帳號，以及一份很短的名單。",
      },
      {
        q: "我能把 Crewmark 和 DeepSeek Harness 一起用嗎？",
        a: "可以。Crewmark 支援連接 DeepSeek Harness、Claude Code、Codex 和 OpenCode。它把工作階段變成 AI 員工，在工作時間內由心跳喚醒，從看板上領取任務，用的就是你已經在用的模型供應商。",
      },
    ],
  },
  cta: {
    title: "讓你已經在用的代理主動工作起來。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code 和 Codex 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 3 日對照 GitHub 上的 dsh-superagent 和 DeepSeek Harness 儲存庫查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 DeepSeek、OpenAI 或 Anthropic 無關，也未獲其背書。DeepSeek 是 DeepSeek 的商標，ChatGPT 是 OpenAI 的商標，Claude Code 是 Anthropic 的商標。",
};
