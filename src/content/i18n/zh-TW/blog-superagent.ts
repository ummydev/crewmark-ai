import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Superagent 是什麼？DeepSeek、Base44、ClickUp 比較",
    description:
      "「Superagent」同時是好幾款 AI 產品的名字。超級代理是什麼、DeepSeek 的 Super-agent 為什麼爆紅，以及它與 Base44 Superagents、ClickUp Super Agents、Genspark 和開源 superagent-ai 專案的比較。",
  },
  breadcrumb: "Superagent 是什麼",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · AI 代理",
    title: "Superagent 是什麼？2026 年所有叫「Superagent」的產品比較",
    lead: "超級代理（superagent）是一種會自己持續工作的 AI 代理：它留意有哪些工作要做，不需要你每一步都下指令就會接手任務，在背景執行，只有需要你拍板時才回來找你。這個詞這個月到處都是，因為 DeepSeek 在 2026 年 10 月 31 日開源了它的 Super-agent 原型，但在此之前已經有好幾款產品用了這個名字，從 Base44、ClickUp 到一款開源資安工具。本文說明這個概念、每款產品實際上是什麼，以及該怎麼選。",
    cta: "開始使用",
    secondary: "直接看比較",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent 的定義",
      text: [
        "超級代理沒有統一標準，但所有以此為賣點的產品都有同一個理念：從「問了才答」的助理，變成對持續性工作負責的代理。",
      ],
      points: [
        "它自己啟動工作：來源可以是排程、觸發條件、一則訊息或指派給它的任務，而不只是聊天裡的提示詞。",
        "它在背景執行，往往同時處理多個任務，每個任務有自己的工作階段。",
        "它在任務之間記住脈絡，並連接到工作發生的工具，例如 GitHub、Slack、Gmail 或專案看板。",
        "只有在需要決定或核准時，它才會占用人的注意力。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "所有「Superagent」比較",
      text: [
        "資訊來自 2026 年 11 月 6 日各廠商自己的網站或 GitHub 儲存庫。",
      ],
      headers: ["產品", "開發者", "是什麼", "工作如何啟動", "價格"],
      rows: [
        ["DeepSeek Super-agent（dsh-superagent）", "DeepSeek 的 Harness 團隊", "針對單一 GitHub 儲存庫的主動式程式設計代理；研究原型，不是官方產品", "名單內的人在 GitHub（可選擇再加飛書 Feishu）上提出的請求，或團隊寫的規則", "免費，MIT 授權；執行在 DeepSeek Harness 上"],
        ["Base44 Superagents", "Base44（隸屬 Wix）", "用自然語言描述就能建立的無程式碼代理，用於個人或業務任務", "排程、觸發條件、webhook，以及 WhatsApp、Telegram、Slack 等聊天應用程式", "消耗 Base44 方案點數；有免費版，付費方案按年付 $16/月起"],
        ["ClickUp Super Agents", "ClickUp", "ClickUp 工作區裡的 AI 隊友，負責分流、排程、回報和建立項目", "@ 提及、指派的任務、私訊、排程和觸發條件", "開放所有使用者；用量以 AI 點數計費"],
        ["Genspark Super Agent", "Genspark", "通用型代理，用於研究、簡報、文件等", "你的提示詞", "見 genspark.ai"],
        ["superagent-ai/superagent", "Superagent（開源）", "2023 年起步時是代理框架；現在用於保護 AI 應用程式免受提示詞注入和資料外洩", "在你應用程式的處理流程中執行", "開源，MIT 授權"],
        ["superagent-ai/grok-cli", "社群專案，與 xAI 無關", "針對 Grok API 的開源終端機程式設計代理", "你的提示詞；支援子代理和 Telegram 遠端控制", "免費，MIT 授權；需自備 Grok API 金鑰"],
        ["Crewmark", "Crewmark", "建立在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 上的 AI 員工", "工作時間內，心跳喚醒員工，從看板上接手下一個 issue", "開放註冊；用你現有的訂閱執行"],
      ],
    },
    {
      kind: "text",
      title: "為什麼現在大家都在搜尋「superagent」：DeepSeek",
      text: [
        "2026 年 10 月 31 日，DeepSeek 發表了名為 dsh-superagent 的研究原型，以及一篇關於如何設計超級代理的文章，儲存庫一週內就累積約 20,000 個 GitHub star。它把 DeepSeek Harness 變成一個監看 GitHub 的代理：自己建立工作項目，每項在獨立的工作階段中執行，並以 pull request 等結果回覆，同時用一個網頁面板顯示哪些事需要人處理。它明確的目標是盡可能少占用人的注意力。完整解析請見 [DeepSeek Super-Agent 是什麼](/blog/deepseek-super-agent)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何選擇超級代理",
      steps: [
        {
          title: "從工作所在的地方出發",
          text: "程式碼在 GitHub 上，就看 DeepSeek 的原型，或建立在 Claude Code、Codex 上的代理；工作在 ClickUp 工作區裡，就看 ClickUp Super Agents；個人雜事和訊息類工作，就看 Base44。",
        },
        {
          title: "看它如何開始工作",
          text: "真正的超級代理不會每一步都等你的提示。看它有沒有排程、觸發條件、指派任務或心跳，以及有沒有一個清楚的地方讓你看到它在做什麼。",
        },
        {
          title: "看它可以獨自做哪些事",
          text: "優先選擇在合併、寄送或花錢等高風險動作前會先問你、並留下可供檢視的紀錄的代理。DeepSeek 的原型只會根據請求或團隊寫的規則行動。",
        },
        {
          title: "看用誰的模型、誰來付帳",
          text: "工作區類產品在方案之外按點數收費；開源工具則用你自己的 API 金鑰或訂閱執行。可以對照[最佳 AI 員工平台](/blog/best-ai-employee-platforms)。",
        },
        {
          title: "原型還是產品？",
          text: "DeepSeek 表示它的 Super-agent 僅供參考。日常工作請選有人維護的產品，或是在你已經信任的代理上建置。",
        },
      ],
      source: { label: "來源：DeepSeek 的 dsh-superagent 儲存庫", href: deepseek },
    },
    {
      kind: "text",
      title: "超級代理、AI 代理與 AI 員工的差別",
      text: [
        "AI 代理完成你交給它的任務。超級代理加上了自主性：它會發現或接收工作，並在背景持續推進。AI 員工再進一步，給這個代理一份工作：職位、用數字衡量的目標、工作時間和一塊任務看板，就像幫新同事辦到職一樣。參見[什麼是 AI 員工](/ai-employees)和[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一個有職務說明的超級代理",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成 AI 員工：工作時間內由心跳喚醒，從共用看板上接手下一個 issue，邊做邊留言，需要你拍板時傳訊息給你，用的就是你已經付費的訂閱。",
      ],
      steps: [
        {
          title: "選你信任的代理",
          text: "包括 DeepSeek Harness，也就是 DeepSeek 的 Super-agent 所建立在上面的同一個執行環境。",
        },
        {
          title: "給它一個職位和一個目標",
          text: "軟體工程師、SEO 專員、成長行銷：每個都有一個要推動的數字。",
        },
        {
          title: "剩下的交給心跳",
          text: "工作時間內每 15、30 或 60 分鐘，它接手下一個 issue；你只需回答需要你決定的事。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "選擇超級代理" },
  mid: {
    title: "想要一個在你的儲存庫上、用你的方案工作的超級代理？",
    text: "Crewmark 把 Claude Code、Codex 或 DeepSeek Harness 變成 AI 員工，由心跳喚醒，自己接手下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "Superagent 常見問題",
    items: [
      {
        q: "超級代理（superagent）是什麼？",
        a: "一種能長期自主工作的 AI 代理：它根據觸發條件、排程或請求啟動任務，在背景執行，只有需要決定時才找人。",
      },
      {
        q: "DeepSeek Super-agent 是什麼？",
        a: "DeepSeek 於 2026 年 10 月 31 日開源的研究原型（dsh-superagent，MIT 授權）。它讓 DeepSeek Harness 在一個 GitHub 儲存庫上主動工作。DeepSeek 表示它僅供參考，不是官方產品。",
      },
      {
        q: "DeepSeek Super-agent 免費嗎？",
        a: "免費。原型和 DeepSeek Harness 都以 MIT 授權開源；你需要支付背後的模型用量費用。",
      },
      {
        q: "Base44 Superagents 是什麼？",
        a: "Base44（隸屬 Wix）裡用自然語言描述就能建立的無程式碼 AI 代理。它們依排程和觸發條件執行，可連接 Gmail、Drive、Notion、GitHub、Slack 或 MCP 伺服器，消耗你 Base44 方案的點數。",
      },
      {
        q: "ClickUp Super Agents 是什麼？",
        a: "ClickUp 工作區裡的 AI 隊友，2025 年 12 月推出，你可以 @ 它、指派任務給它或讓它依排程執行。開放所有使用者，消耗 AI 點數。",
      },
      {
        q: "GitHub 上的 Superagent 和 DeepSeek 的是同一個嗎？",
        a: "不是。superagent-ai 組織與 DeepSeek 無關：它的 superagent 儲存庫現在是一款 AI 資安工具，grok-cli 則是針對 Grok API 的社群程式設計代理。",
      },
      {
        q: "超級代理和 AI 員工有什麼差別？",
        a: "超級代理自主處理任務。AI 員工是被賦予了職位、目標、工作時間和看板的自主代理，所以它的工作會像隊友一樣被組織和衡量。",
      },
    ],
  },
  cta: {
    title: "把你的程式設計代理變成有工作的超級代理。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、有目標、有工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照各產品自己的網站或 GitHub 儲存庫查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 DeepSeek、Base44、Wix、ClickUp、Genspark 或 superagent-ai 專案無關，也未獲其背書。產品名稱為其所有者的商標。",
};
