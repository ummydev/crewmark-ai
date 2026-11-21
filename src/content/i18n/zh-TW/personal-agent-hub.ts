import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "個人 AI Agent 2026：Muse、Grok Bot、Dots 比較",
    description:
      "什麼是個人 AI agent，以及大家正在搜尋的幾款，依各家官方頁面比較：Meta Muse、Grok Bot、ChatGPT dots、Claude Duet、Manus Cue、Gemini 任務、Microsoft Autopilot、OpenClaw 和 Hermes Agent。",
  },
  breadcrumb: "個人 Agent",
  hero: {
    kicker: "個人 Agent",
    title: "2026 年的個人 AI Agent：是什麼，該用哪一個",
    lead: "個人 agent 是替你做事、而不只是陪你聊天的 AI：它有自己的電腦或瀏覽器，登入你的應用程式，記住你的偏好，你關掉 App 後它繼續工作，需要你做決定時再回來找你。最近幾個月，Meta、xAI、OpenAI、Anthropic、Google、Microsoft 和 Manus 都推出了自己的個人 agent。本頁說明它們的共同點，依各家官方頁面做比較，並連結到每一款的詳細指南。",
    cta: "開始使用",
    secondary: "看比較",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "什麼是個人 agent",
      text: [
        "聊天機器人回答完就等著。個人 agent 接下一個目標，規劃步驟，在網路上和你的應用程式裡把事情做完，而且常常是在你不在的時候。新一代個人 agent 有五個共同特徵。",
      ],
      points: [
        "自己的電腦：一台雲端機器或瀏覽器，像人一樣點擊、輸入、填寫表單。",
        "你的應用程式：電子郵件、行事曆、檔案和聊天工具，權限由你決定。",
        "記憶：它會記住你的偏好，同樣的要求不用說兩遍。",
        "全天候：排程和週期性任務，你關掉 App 後工作照樣繼續。",
        "核准：寄送、購買或其他你標為敏感的操作，會先等你同意。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "個人 AI agent 比較",
      text: ["資料來自 2026 年 11 月 10 日各家的官方頁面。開放範圍變化很快，註冊前請再確認。"],
      headers: ["Agent", "開發商", "用途", "誰能使用", "最便宜的入門方式"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "日常任務和生活瑣事", "美國，18 歲以上，Meta 帳號", "免費，有每週額度；Power 每月 $20"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "工作：一組 Bot 在你的應用程式裡做事", "X Premium、Super、Ultra；SuperGrok；Cursor 方案", "免費試用額度"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "ChatGPT 裡的長期目標", "ChatGPT Pro 和 Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "主動來找你的 Claude", "美國的 Claude Pro、Max、Ultra，需排候補", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "在 WhatsApp、Telegram、Slack 或瀏覽器裡使用的個人 agent，附工作流程", "有 Base44 帳號的人", "消耗 Base44 方案點數；Starter 按年付費每月 $16"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "擁有自己的電子郵件、電話、錢包和電腦的 agent", "搶先體驗，需邀請", "搶先體驗期間免費"],
        ["[Gemini 任務（原 Spark）](/personal-agent/gemini-spark)", "Google", "在 Gemini 裡跑腿、研究、產生檔案", "Google AI Pro 或 Ultra，歐洲經濟區、英國和瑞士除外", "Google AI Pro"],
        ["Microsoft Autopilot（原 Scout）", "Microsoft", "Microsoft 365 和 Teams 裡的工作", "加入 Frontier 的組織，需 GitHub Copilot 授權", "透過你的組織"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "開源", "在你的聊天 App 裡、自行架設的助理", "任何人；在你自己的電腦上執行", "免費；模型費用自付"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research，開源", "自行架設、會累積技能的 agent", "任何人；在你自己的電腦上執行", "免費；模型費用自付"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "該用哪個個人 agent？",
      points: [
        "想要有人幫你處理生活瑣事，暫時不想付費：Meta Muse，在美國免費。參見 [Meta Muse 使用情境](/personal-agent/meta-muse-use-cases)。",
        "想要一組 agent 依時間表處理工作：Grok Bot，例行程序可以排程或依觸發條件執行。參見 [Grok Bot 例行程序](/personal-agent/grok-bot-routines)。",
        "已經在付 ChatGPT Pro：用 ChatGPT dots。有 Claude Pro 以上方案：用 Claude Duet，需排候補。",
        "主要在 Google 的應用程式裡：Google AI Pro 的 Gemini 任務。工作在 Microsoft 365 裡：如果你的組織加入了 Frontier，用 Autopilot。",
        "想要能打電話、能在預算內付款的 agent：Manus Cue，搶先體驗中。參見 [Manus Cue](/personal-agent/manus-cue)。",
        "想在自己的機器上執行、用自己的模型：OpenClaw 或 Hermes Agent，都是開源的。",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "工作用的 AI 同事",
      text: [
        "專為工作任務、而不是生活瑣事打造的 agent，每一款都有指南。資料來自 2026 年 11 月 13 日各家的官方頁面；更多比較請看 [AI 同事工具比較](/blog/ai-coworker)。",
      ],
      headers: ["AI 同事", "開發商", "用途", "最便宜的入門方式"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "在 Claude 應用程式裡處理研究、文件、試算表和簡報", "Claude Pro，每月 $20"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "在 Outlook、Teams 和 Office 檔案之間完成多步驟任務", "Microsoft 365 Copilot 授權加上 Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "最後產出簡報、試算表或分析的任務", "ChatGPT Free 可在桌面應用程式有限使用；Plus 起可完整使用，每月 $20"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "一個調度許多雲端程式設計 agent 的協調者 agent", "Cursor Premium，每月 $30"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "在電子郵件、Slack、iMessage 和電話裡的助理", "免費試用；之後每位活躍使用者每月 $29.99"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng，開源", "行動前會先詢問的桌面 AI 同事", "免費；使用你自己的模型金鑰或本機模型"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit，開源", "自行架設的 AI 同事工作區", "個人專案免費"],
        ["[Suparagent](/personal-agent/suparagent)", "開源", "在 Claude Code、Codex 或 Gemini CLI 上執行、附例行程序的具名 agent", "自行架設免費"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "交出帳號之前",
      points: [
        "只連接任務需要的東西，能選唯讀就選唯讀（Muse 的電子郵件可以選唯讀）。",
        "寄送、購買和任何公開的操作都保留核准。Muse 和 Gemini 預設在寄送或購買前會問你；Grok Bot 的 Auto Review 預設放行大多數操作，所以要加上「Ask first」規則。",
        "弄清楚還有誰能用這個登入：Grok Bot 共用一台電腦，一個 Bot 登入的網站，其他 Bot 也能使用。",
        "看清楚用量上限：在背景工作的 agent，你不在時也在消耗 token。",
        "不時看一下活動記錄；各家都提醒這些 agent 可能出錯，或做出意料之外的操作。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "生活交給個人 agent，工作交給 AI 員工",
      text: [
        "個人 agent 圍繞一個人的瑣事而設計。Crewmark 圍繞一份工作而設計：它把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳，從團隊共用的看板領取下一個任務，邊做邊留言，卡住時傳訊息給你。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始：軟體工程師、SEO 專員、行銷 agent、社群媒體經營或設計師。",
        },
        {
          title: "用你已有的方案",
          text: "它在你自己的 Claude Code 或 Codex 裡執行，沒有額外的 token 帳單。參見[價格](/pricing)。",
        },
        {
          title: "讓它一直做下去",
          text: "在你設定的時段裡每 15 到 240 分鐘醒來一次。參見[如何讓 Claude Code 24 小時運作](/blog/run-claude-code-24-7)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一個有正式工作、而不只是跑腿的 agent？",
    text: "Crewmark 員工依心跳推進共用看板上的工作，用的是你已經在付費的 Claude Code 或 Codex 方案。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "什麼是個人 AI agent？",
        a: "替你做事、而不只是回答的 AI：它有自己的電腦或瀏覽器，使用你的應用程式，記住你的偏好，在背景執行排程任務，敏感操作前會先問你。",
      },
      {
        q: "2026 年最好的個人 AI agent 是哪一個？",
        a: "看你已經在用什麼。Meta Muse 最容易上手（在美國免費），Grok Bot 的工作例行程序最完整，ChatGPT dots 和 Claude Duet 隨 Pro 方案提供，想自行架設的人適合 OpenClaw 或 Hermes Agent。",
      },
      {
        q: "有免費的個人 AI agent 嗎？",
        a: "Meta Muse 在美國免費，有每週額度；Grok Bot 有免費試用額度；Manus Cue 在搶先體驗期間免費；OpenClaw 和 Hermes Agent 是免費的開源軟體（模型費用自付）。",
      },
      {
        q: "Grok Bot、Muse 和 Dots 有什麼差別？",
        a: "Muse 是 Meta 處理日常事務的 agent，可以免費開始。Grok Bot 是 xAI 處理工作的 agent，有多個 Bot 和例行程序。ChatGPT dots 是 OpenAI 在 ChatGPT 裡的全天候 agent，Pro 和 Business Premium 可用。",
      },
      {
        q: "個人 agent 和 AI 員工是同一回事嗎？",
        a: "不完全是。個人 agent 為一個人處理瑣事。Crewmark 所說的 AI 員工有職位和目標，依時間表推進團隊看板上的工作，並向一起工作的人回報。",
      },
      {
        q: "個人 AI agent 安全嗎？",
        a: "它們都設計了核准、隔離的機器和活動記錄，但各家都說它們可能出錯。只連接需要的東西，寄送和購買保留核准，並檢查它們做了什麼。",
      },
    ],
  },
  cta: {
    title: "瑣事交給個人 agent，工作交給 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照各家的公告、文件、說明中心和價格頁核對。",
  disclaimer:
    "Crewmark 是獨立產品，與 Meta、xAI、OpenAI、Anthropic、Manus、Google、Microsoft、OpenClaw 和 Nous Research 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
