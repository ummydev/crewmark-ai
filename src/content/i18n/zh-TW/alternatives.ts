import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip)：自架的開源編排工具，管理一整間公司的 agent。"],
    ["multica", "[Multica](/alternatives/multica)：給程式開發 agent CLI 用的 issue 看板，可用雲端版，也可自架。"],
    ["crewai", "[CrewAI](/alternatives/crewai)：用 API key 建構多 agent 工作流程的 Python 框架。"],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const closing = (product: string) => ({
  title: `試試用 Crewmark 取代 ${product}。`,
  text: "為你的 Claude Code 或 Codex agent 設定職位、目標和工作時間，在看板上指派工作給它。",
  button: "申請搶先體驗",
});

const mid = {
  title: "用你已經付費的方案聘用 AI 員工",
  text: "Crewmark 依心跳喚醒你的 Claude Code 或 Codex 工作階段，從看板上指派下一個 issue 給它。",
  button: "申請搶先體驗",
};

const disclaimer = (owner: string) =>
  `Crewmark 是獨立產品，與 ${owner} 無關，也未獲其背書。產品名稱是其各自所有者的商標。其他產品的相關資訊取自它們的公開文件，之後可能已有變動。`;

const newToIdea = "第一次聽到這個概念？請看[什麼是 AI 員工](/ai-employees)。";

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Paperclip 替代方案：Crewmark 與 Paperclip 比較 | Crewmark",
      description:
        "在找 Paperclip AI 的替代方案？從部署方式、agent、心跳、目標和設定難度比較 Crewmark 與 Paperclip，看哪個更適合你的團隊。",
    },
    breadcrumb: "Paperclip 替代方案",
    hero: {
      kicker: "Paperclip 替代方案",
      title: "Crewmark 與 Paperclip 比較",
      lead: "Paperclip 和 Crewmark 都能把 Claude Code、Codex 這類程式開發 agent 變成一支按排程接手工作的團隊。Paperclip 是你自己架設的開源伺服器，用來編排一整間公司的 agent；Crewmark 是託管的看板，每個 agent 都是一位員工，有職位、數字目標和工作時間。以下是兩者的比較。",
      cta: "申請搶先體驗",
      secondary: "看比較",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Paperclip 是什麼",
        text: [
          "Paperclip 是採 MIT 授權的 Node.js 伺服器加 React 介面，用來「編排一支 AI agent 團隊來經營一家公司」。你設定一個公司目標，建立一張有職位、匯報關係和預算的組織圖，再透過轉接器聘用 agent：Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw 等。",
          "agent 會因為被指派 issue、有後續追蹤或可選的定時心跳而醒來；例行工作（routines）依 cron 或 webhook 執行；預算、核准和聘用核准讓人始終掌握主導權。它目前只能自架，雲端版還在候補名單階段。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 與 Paperclip 一覽",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["部署方式", "自架（Node.js 24+ 或 Docker）；雲端版開放候補中", "託管的網頁應用程式，加上你電腦上的一個小型 daemon"],
          ["授權", "開源，MIT", "商業產品，搶先體驗中"],
          ["Agent", "Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw 等，或 API key", "Claude Code、Codex、DeepSeek Harness 和 OpenCode"],
          ["工作單位", "連結到公司和專案目標的 issue", "看板上的 issue"],
          ["組織方式", "組織圖：職位、匯報關係、預算", "員工：職位、數字 KPI、工作時間"],
          ["agent 何時醒來", "指派的工作、訊息、可選的定時心跳、例行工作", "工作時間內每 15、30 或 60 分鐘一次心跳"],
          ["花費控管", "依公司、依 agent、依專案設定預算", "在你現有的訂閱上執行；下班時間休眠"],
          ["卡關時", "核准流程和留言", "傳一則私訊給你，然後先做別的事"],
        ],
      },
      {
        kind: "text",
        title: "該選哪一個？",
        points: [
          "如果你想要能自架、能修改的開源軟體，需要為大量 agent 設定預算和組織圖，或要用 Crewmark 不支援的 agent（例如 Cursor 或 Gemini CLI），選 Paperclip。",
          "如果你不想自己架伺服器，希望每個 agent 都用一個數字來衡量（點擊數、註冊數、合併的 PR）並遵守工作時間，也想要一塊 agent 卡關時會傳訊息給你的看板，選 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "如何從 Paperclip 轉移到 Crewmark",
        steps: [
          {
            title: "匯出想保留的內容",
            text: "Paperclip 可以把一間公司匯出成人看得懂的 Markdown：附有職位和指示的 agent、技能，以及可選的專案、例行工作和任務。密鑰、核准紀錄和費用紀錄不包含在內。",
          },
          {
            title: "把每個 agent 重建為員工",
            text: "在 Crewmark 裡選最接近的職位，貼上這個 agent 的指示，再把它的目標改寫成可以追蹤的數字，例如「每月 Search Console 點擊數 +10%」。",
          },
          {
            title: "連接同一個 agent",
            text: "在你希望這位員工所在的 Claude Code 或 Codex 對話裡執行設定指令。它會繼續使用你已經付費的訂閱。",
          },
          {
            title: "把未完成的任務移到看板上",
            text: "重新建立尚未關閉的 issue 並指派出去。設定好工作時間和心跳，員工下次醒來就會接手。",
          },
        ],
      },
      { kind: "text", title: "其他替代方案", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "從 Paperclip 轉移到 Crewmark" },
    mid,
    faq: {
      title: "Paperclip 替代方案常見問題",
      items: [
        {
          q: "Paperclip 是免費的嗎？",
          a: "自架版本是免費的，以 MIT 授權開源。Paperclip 尚未公布雲端版的價格，雲端版目前開放候補中。",
        },
        {
          q: "Crewmark 和 Paperclip 最主要的差別是什麼？",
          a: "Paperclip 是自架的伺服器，用組織圖和預算來經營一間由 agent 組成的公司。Crewmark 是託管服務，把每個 agent 當成一位員工，有數字目標、工作時間和心跳。",
        },
        {
          q: "兩者都支援 Claude Code 和 Codex 嗎？",
          a: "是的。兩者驅動的都是真正的 Claude Code 和 Codex。Paperclip 還支援 Cursor、Gemini CLI 等 agent；Crewmark 還支援 DeepSeek Harness 和 OpenCode。",
        },
        {
          q: "Crewmark 可以自架嗎？",
          a: "不行。Crewmark 是託管的應用程式，只有喚醒 agent 的 daemon 在你的電腦上執行。",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "已於 2026 年 11 月 2 日對照 Paperclip 的 README、文件和官網查核。",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Multica 替代方案：Crewmark 與 Multica 比較 | Crewmark",
      description:
        "在找 Multica 的替代方案？從 agent、排程、目標、授權和設定難度比較 Crewmark 與 Multica，看哪個更適合你的團隊。",
    },
    breadcrumb: "Multica 替代方案",
    hero: {
      kicker: "Multica 替代方案",
      title: "Crewmark 與 Multica 比較",
      lead: "Multica 和 Crewmark 都能讓你像交代同事一樣，把 issue 指派給 Claude Code、Codex 這類程式開發 agent。Multica 是給軟體團隊用的工作空間，有雲端版也能自架；Crewmark 把每個 agent 當成一位員工，有數字目標、工作時間，還有讓它自己醒來的心跳。以下是兩者的比較。",
      cta: "申請搶先體驗",
      secondary: "看比較",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Multica 是什麼",
        text: [
          "Multica 是一個原始碼公開（source-available）的工作空間，在這裡「你把工作指派給 AI 程式開發 agent，就像指派給隊友一樣」。它不內建模型：由一個 daemon 驅動你已經登入的 agent CLI，共 26 個，包括 Claude Code、Codex、Cursor Agent、Copilot CLI、OpenCode 和 DeepSeek Harness。",
          "agent 從看板上接手 issue，完成後進入審核，需要你做決定時收件匣會通知你。Autopilot 依 cron 或 webhook 自動建立 issue，squad 透過一位負責人分派工作，它還能連接 Slack、飛書、釘釘、企業微信和 Telegram。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 與 Multica 一覽",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["部署方式", "雲端版，或用 Docker、Helm 自架", "託管的網頁應用程式，加上你電腦上的一個小型 daemon"],
          ["授權", "原始碼公開（附條件的 Apache 2.0）；託管給他人使用需要商業授權", "商業產品，搶先體驗中"],
          ["Agent", "26 個 agent CLI，包括 Claude Code、Codex、Cursor 和 DeepSeek Harness", "Claude Code、Codex、DeepSeek Harness 和 OpenCode"],
          ["工作單位", "看板上的 issue、squad、聊天和頻道", "看板上的 issue"],
          ["排程工作", "Autopilot 依 cron 或 webhook 建立 issue", "心跳每 15、30 或 60 分鐘喚醒每位員工"],
          ["目標", "未說明有依 agent 設定的目標", "每位員工一個數字 KPI，例如每月點擊數 +10%"],
          ["工作時間", "未說明", "依員工設定；下班時間休眠"],
          ["卡關時", "收件匣和審核關卡", "傳一則私訊給你，然後先做別的事"],
        ],
      },
      {
        kind: "text",
        title: "該選哪一個？",
        points: [
          "如果你需要自架、想要最多種 agent CLI 可選，或團隊使用飛書、釘釘或企業微信，選 Multica。",
          "如果你希望 agent 依自己的排程開工、不必由你替它們建立 issue，用一個數字來衡量，並遵守工作時間、不會整夜耗光你的方案額度，選 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "如何從 Multica 轉移到 Crewmark",
        steps: [
          {
            title: "列出你的 agent 和尚未關閉的 issue",
            text: "記下每個 agent 的指示和還沒關閉的 issue。Multica 的 CLI 和 API 都能列出來。",
          },
          {
            title: "把每個 agent 重建為員工",
            text: "在 Crewmark 裡選最接近的職位，貼上指示，給它一個用數字寫的目標，再設定工作時間和心跳。",
          },
          {
            title: "連接同一個 agent CLI",
            text: "在你希望這位員工所在的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 對話裡執行設定指令。它會繼續使用你已有的登入。",
          },
          {
            title: "用心跳取代 Autopilot",
            text: "不再用 cron 工作去建立 issue，而是把重複性的工作放進員工的待辦清單。它每次心跳都會查看看板，接手下一個。",
          },
        ],
      },
      { kind: "text", title: "其他替代方案", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "從 Multica 轉移到 Crewmark" },
    mid,
    faq: {
      title: "Multica 替代方案常見問題",
      items: [
        {
          q: "Multica 是開源的嗎？",
          a: "它是原始碼公開的：Multica License 是附加額外條件的 Apache 2.0。在你自己的組織內使用，包括自架，都是免費的；以託管服務的形式提供給他人則需要商業授權。",
        },
        {
          q: "Crewmark 和 Multica 最主要的差別是什麼？",
          a: "兩者都把程式開發 agent 放到 issue 看板上。Crewmark 多了員工式的架構：數字目標、工作時間，以及讓每個 agent 自己醒來接手下一個 issue 的心跳。",
        },
        {
          q: "兩者都使用我現有的 Claude Code 或 Codex 登入嗎？",
          a: "是的。兩者驅動的都是你已經登入的 agent CLI，所以工作會在你現有的方案上執行。",
        },
        {
          q: "Crewmark 可以自架嗎？",
          a: "不行。Crewmark 是託管的應用程式，只有喚醒 agent 的 daemon 在你的電腦上執行。",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "已於 2026 年 11 月 2 日對照 Multica 的 README、文件、授權條款和官網查核。",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "CrewAI 替代方案，免寫程式：Crewmark 比較 | Crewmark",
      description:
        "在找 CrewAI 的替代方案？從是否需要寫程式、模型、價格和工作指派方式比較 Crewmark 與 CrewAI，看哪個更適合你的團隊。",
    },
    breadcrumb: "CrewAI 替代方案",
    hero: {
      kicker: "CrewAI 替代方案",
      title: "Crewmark 與 CrewAI 比較",
      lead: "CrewAI 是用來建構多 agent 工作流程的 Python 框架，上面還有一個商業平台。Crewmark 不是框架：它把你已經在用的 Claude Code 或 Codex agent 變成 AI 員工，在看板上指派工作給它，不必寫程式，也沒有 API 帳單。以下是兩者的比較。",
      cta: "申請搶先體驗",
      secondary: "看比較",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "CrewAI 是什麼",
        text: [
          "CrewAI 是採 MIT 授權的開源 Python 框架，「用於建構可上線生產環境的多 agent 工作流程」。你為每個 agent 定義職位、目標、背景故事、工具和 LLM，再把它們組合成 crew 和事件驅動的 flow。agent 預設使用 OpenAI API，也支援其他供應商和本機模型。",
          "CrewAI AMP 在此之上提供視覺化編輯器、AI 助理、cron 排程、人工介入（human-in-the-loop）、追蹤，以及部署到 CrewAI 雲端或你自己的基礎架構。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 與 CrewAI 一覽",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["是什麼", "Python 框架，加上部署工作流程的平台", "一塊 AI 員工看板，員工在你的程式開發 agent 裡執行"],
          ["需不需要寫程式", "框架需要（Python 3.10–3.13）；平台上有視覺化編輯器", "不需要：選一個職位，執行一個設定指令"],
          ["模型", "API key：預設 OpenAI，也支援其他供應商和本機模型", "Claude Code、Codex、DeepSeek Harness 或 OpenCode，使用你現有的方案"],
          ["agent 能做什麼", "你在程式碼裡定義的工具", "程式開發 agent 能做的一切：檔案、終端機、瀏覽器、MCP"],
          ["工作單位", "crew 或 flow 裡的任務", "看板上的 issue"],
          ["排程", "平台上的 cron 排程", "工作時間內每 15、30 或 60 分鐘一次心跳"],
          ["目標", "每個 agent 提示詞裡的 goal 欄位", "每位員工一個數字 KPI，持續追蹤"],
          ["價格", "免費方案每月 50 次執行；Enterprise 另行報價", "搶先體驗中；在你的方案之外不另收 token 費用"],
        ],
      },
      {
        kind: "text",
        title: "該選哪一個？",
        points: [
          "如果你是開發者，要把多 agent 工作流程做進自己的產品，需要精準控制每一步，或需要支援 SSO 和自有 VPC 的企業級部署，選 CrewAI。",
          "如果你不想撰寫或維護 agent 程式碼，已經在為 Claude Code 或 Codex 付費，希望 agent 做 SEO、修 bug 這類持續性的工作並在看板上回報，選 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "如何從 CrewAI 轉移到 Crewmark",
        steps: [
          {
            title: "為每個 agent 對應一個職位",
            text: "根據每個 CrewAI agent 的 role 和 goal，選一個最接近的 Crewmark 職位。它的 backstory 就成了員工的指示。",
          },
          {
            title: "把目標改寫成數字",
            text: "CrewAI 的 goal 是提示詞裡的一句話。在 Crewmark 裡，請改寫成你實際會衡量的東西，例如「每週合併 10 個 pull request」。",
          },
          {
            title: "連接一個程式開發 agent",
            text: "在 Claude Code 或 Codex 裡執行設定指令。員工使用的是這個 agent 本身的工具，所以大部分自訂工具的程式碼都用不到了。",
          },
          {
            title: "把任務轉成 issue",
            text: "把原本由 crew 執行的工作當成 issue 放到看板上，設定好工作時間和心跳，員工就會自己接手。",
          },
        ],
      },
      { kind: "text", title: "其他替代方案", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "從 CrewAI 轉移到 Crewmark" },
    mid,
    faq: {
      title: "CrewAI 替代方案常見問題",
      items: [
        {
          q: "CrewAI 是免費的嗎？",
          a: "框架以 MIT 授權開源，但 token 費用要付給模型供應商。託管平台有免費的 Basic 方案，每月 50 次工作流程執行，另有個別報價的 Enterprise 方案。",
        },
        {
          q: "使用 Crewmark 需要寫程式嗎？",
          a: "不需要。選一個職位、寫下目標，在 Claude Code 或 Codex 裡執行一個設定指令就好。工作會以 issue 的形式在看板上指派。",
        },
        {
          q: "CrewAI 能把 Claude Code 或 Codex 當成 agent 來執行嗎？",
          a: "CrewAI 的 agent 是帶著你定義的工具去呼叫 LLM，所以用的是模型 API，而不是在 Claude Code 或 Codex 裡執行。Crewmark 的員工則在真正的程式開發 agent 裡執行。",
        },
        {
          q: "有什麼好用的開源 CrewAI 替代方案？",
          a: "如果你想要開源、而且建立在程式開發 CLI 上的 agent，可以看看 [Paperclip](/alternatives/paperclip)。Crewmark 不是開源的，它是託管的應用程式。",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "已於 2026 年 11 月 2 日對照 CrewAI 的 README、文件和價格頁面查核。",
    disclaimer: disclaimer("CrewAI"),
  },
};
