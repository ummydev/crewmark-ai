import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "2026 年最佳 AI 員工平台：8 款比較，附價格 | Crewmark",
    description:
      "比較 Lindy、Sintra、Marblism、Artisan、Ema、Devin、開源專案 ai-employees 和 Crewmark：涵蓋的職位、工作如何啟動、使用哪些模型、有沒有免費方案，以及價格。",
  },
  breadcrumb: "最佳 AI 員工平台",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · AI 員工",
    title: "2026 年最佳 AI 員工平台比較",
    lead: "AI 員工平台把 AI 代理設定成員工：每一位都有職位，朝著一個目標工作，不需要你每次提示就會自己開工。下面這些產品賣的都是這個概念，但它們涵蓋的工作、接手工作的方式、使用的模型和收費方式各不相同。我們比較了八款，包括我們自己的產品，所用資訊全部來自各廠商自己公布的內容。",
    cta: "申請搶先體驗",
    secondary: "直接看比較",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AI 員工平台一覽",
      text: [
        "價格為 2026 年 11 月 6 日各廠商定價頁上列出的入門方案，以美元計。想了解 AI 員工是什麼、和 AI 代理有何不同，請看[什麼是 AI 員工](/ai-employees)。",
      ],
      headers: ["平台", "最適合", "工作如何啟動", "執行於", "免費選項", "付費起價"],
      rows: [
        ["Lindy", "涵蓋約 17 種職能的辦公室工作：收件匣、行事曆、業務、客服、招募", "排程（Routines）、Slack 和 iMessage、電話", "由 Lindy 挑選的主流模型", "免費：7 天內 $50 額度", "每位使用者 $49.99/月（Team）"],
        ["Sintra", "小型企業：12 位以上有名字的助手，負責客服、文案、SEO、社群、業務", "和助手聊天，或執行一鍵任務", "Sintra 的模型（以 Claude Sonnet 為基礎）", "無免費方案", "$48.50/月，年繳更便宜"],
        ["Marblism", "小型企業：從助理到櫃檯接待和法務的 7 個職位", "你設定目標，它們每天朝目標推進，並請你核准", "未說明", "無免費方案", "年繳 $24/月，月繳 $44"],
        ["Artisan（Ava）", "開發型業務：一位 AI 業務開發代表", "自主執行，附核准與升級規則", "未說明", "未說明", "依點數計費；需預約展示"],
        ["Ema", "企業的人資、IT 和財務", "Teams、Slack 或語音；250 個以上的整合", "Ema 組合的 100 多個模型", "免費試用", "依成果計費；未公開"],
        ["Devin", "軟體工程", "在 Slack 或 Teams 中 @ 它、來自 Linear 或 Jira 的工單、週期性工作流程", "Devin 的模型（來自多家供應商）", "有額度較少的免費方案", "$20/月（Pro）"],
        ["ai-employees（開源）", "8 個業務職位，每個都是裝著排程例行任務的資料夾", "每個職位 SCHEDULE.md 裡的排程", "你自己的代理：Claude Code、Codex、OpenCode 等", "免費，MIT 授權", "免費"],
        ["Crewmark", "你定義的任何職位，執行在程式設計代理上：工程、SEO、行銷、設計", "工作時間內，心跳喚醒每位員工，從看板上接手下一個 issue", "你自己的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 訂閱", "搶先體驗", "搶先體驗"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何選擇 AI 員工平台",
      steps: [
        {
          title: "從工作出發，而不是從工具出發",
          text: "寫下一個職位，以及它要推動的那個數字，例如預約到的會議數、Search Console 點擊數或合併的 pull request 數。專為單一工作打造的平台（開發型業務用 Artisan，寫程式用 Devin）在那件事上通常勝過通用平台。",
        },
        {
          title: "看工作如何啟動",
          text: "聊天助理等你開口；AI 員工會自己開工。看看有沒有排程、觸發條件或心跳，以及有沒有指派工作的地方，例如看板、工單或 Slack 頻道。",
        },
        {
          title: "看用誰的模型、誰來付帳",
          text: "大多數平台把模型用量包裝成點數或席位轉賣給你。如果你已經在為 Claude Code 或 Codex 付費，執行在這份訂閱上的工具（開源專案 ai-employees、Crewmark）幾乎不會增加模型成本。",
        },
        {
          title: "看它行動前會不會先問你",
          text: "會寄信、發文或花錢的員工應該先徵求同意。看看有沒有核准機制、升級規則，以及記錄它做過什麼的日誌。",
        },
        {
          title: "先用一個職位試兩週",
          text: "有免費方案或試用就先用起來，衡量你寫下的那個數字，之後再增加職位。",
        },
      ],
    },
    {
      kind: "text",
      title: "各平台詳細介紹",
      points: [
        "Lindy：主打「物超所值的隊友」（\"the teammate that punches above its price\"）。Routines 依排程執行，你可以在 Slack 或 iMessage 裡傳訊息給它，「Watch and Learn」（看一次就學會）能把你示範過一次的任務記錄下來。定價：[lindy.ai/pricing](https://www.lindy.ai/pricing)。",
        "Sintra：12 位以上有名字的助手，例如負責客服的 Cassie、負責 SEO 的 Seomi 和負責社群媒體的 Soshie，每一位都是你和它對話的聊天機器人。單一助手 $39/月。定價：[sintra.ai/pricing](https://sintra.ai/pricing)。",
        "Marblism：七位 AI 員工（Eva、Sonny、Stan、Walter、Penny、Rachel 和 Linda），你設定目標後，它們會「每天自己朝著目標工作」（\"work toward it every day, on their own\"）；方案包含每月 50 小時的 AI 工作量。定價：[marblism.com/pricing](https://www.marblism.com/pricing)。",
        "Artisan：「為市場推廣團隊打造的 AI 員工」（\"AI employees for go-to-market teams\"）。Ava 負責找名單、補齊名單資料、撰寫開發信、處理回覆並預約會議，關鍵步驟由人核准。見 [artisan.co](https://www.artisan.co)。",
        "Ema：一位「通用 AI 員工」（\"Universal AI Employee\"），用白話描述目標就能完成設定，適用於人資、IT、財務等領域。見 [ema.ai](https://www.ema.ai)。",
        "Devin：「你團隊的自主軟體工程師」（\"your team's autonomous software engineer\"）。指派一張工單給它，就會收到一個 pull request；Max 為 $200/月，Teams 為 $80/月另加每席 $40。定價：[devin.ai/pricing](https://devin.ai/pricing)。",
        "ai-employees：一個 MIT 授權的 GitHub 專案，其定義是「一位 AI 員工就是一個裝著排程例行任務、涵蓋一個業務職位的資料夾」（\"an AI Employee is a folder of scheduled routines that covers one business role\"），由你現有的程式設計代理來執行。見 [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees)。",
        "Crewmark：把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一位有職位、目標、工作時間和 issue 看板的員工；它會在自己的 issue 下留言，需要你拍板時傳訊息給你。見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "text",
      title: "免費的 AI 員工，以及 GitHub 上的開源專案",
      text: [
        "免費方案是有的，但規模都不大：Lindy 給 7 天內 $50 的額度，Devin 給少量配額，Ema 提供試用。開源路線不花錢，但要花時間架設：GitHub 上的 markfulton/ai-employees 等專案執行在你現有的代理訂閱上，在 Claude Pro 或 Max 方案下消耗的是方案額度，而不是額外的美元。",
        "如果你要比較的是開源代理框架，而不是現成的員工，請看我們與 [CrewAI](/alternatives/crewai)、[Paperclip](/alternatives/paperclip) 和 [Multica](/alternatives/multica) 的比較。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "在你已經付費的程式設計代理上執行 AI 員工",
      text: [
        "Crewmark 適合工作早已離不開 Claude Code 或 Codex 的團隊。不必再買一套新的 AI 和它的點數，而是給你現有的代理一份工作。",
      ],
      steps: [
        {
          title: "選一個職位和一個目標",
          text: "軟體工程師、SEO 專員、成長行銷，或你自己寫的職位，目標寫成一個數字。",
        },
        {
          title: "連接一個工作階段",
          text: "在專案裡執行一條設定指令；員工執行在你電腦上的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段裡，用的是你自己的方案。",
        },
        {
          title: "指派 issue，剩下的交給心跳",
          text: "工作時間內，員工每 15、30 或 60 分鐘醒來一次，接手下一個 issue，邊做邊留言，需要你拍板時傳訊息給你。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "選擇 AI 員工平台" },
  mid: {
    title: "已經在為 Claude Code 或 Codex 付費？",
    text: "Crewmark 把它變成有職位、目標、工作時間和 issue 看板的 AI 員工，不會多出第二份 AI 帳單。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "AI 員工平台常見問題",
    items: [
      {
        q: "最好的 AI 員工平台是哪一個？",
        a: "取決於工作內容。跨多種職能的辦公室工作選 Lindy；小型企業的行銷和客服選 Sintra 或 Marblism；開發型業務選 Artisan；企業人資和 IT 選 Ema；寫程式選 Devin；如果你已經在用 Claude Code 或 Codex，就選開源專案 ai-employees 或 Crewmark。",
      },
      {
        q: "有免費的 AI 員工嗎？",
        a: "部分平台有小規模的免費方案或試用：Lindy（7 天內 $50 額度）、Devin（少量配額）和 Ema（試用）。markfulton/ai-employees 等開源專案免費，執行在你現有的代理訂閱上。",
      },
      {
        q: "一位 AI 員工要花多少錢？",
        a: "2026 年 11 月 6 日，入門方案從每月約 $20（Devin Pro）到每位使用者 $49.99（Lindy Team）不等，Artisan 和 Ema 需洽業務報價。執行在你自己的 Claude Code 或 Codex 方案上的工具幾乎不增加模型成本。",
      },
      {
        q: "AI 員工和 AI 代理有什麼不同？",
        a: "AI 代理在你要求時完成一項任務。AI 員工是被賦予職位、目標和排程的代理，所以它會自己開工並持續工作。詳見[什麼是 AI 員工](/ai-employees)。",
      },
      {
        q: "小型企業能用 AI 員工嗎？",
        a: "可以。Sintra 和 Marblism 專為小型企業打造，有負責客服、社群媒體、SEO 和業務的具名員工，價格約為每月 $24 到 $49。",
      },
      {
        q: "GitHub 上有開源的 AI 員工嗎？",
        a: "有。markfulton/ai-employees（MIT）把 8 個業務職位打包成排程例行任務，供 Claude Code、Codex、OpenCode 等代理執行；其他專案還有 OpenCompany 和 eggent。",
      },
      {
        q: "怎麼聘用一位 AI 員工？",
        a: "選一個職位和它要推動的數字，挑一個會自己開工、在高風險動作前先徵求同意的平台，試用兩週，只有數字有起色才留下它。",
      },
    ],
  },
  cta: {
    title: "給你已經付費的代理一份工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照各廠商自己的網站和定價頁查證。價格會變動，最新價格請點連結查看。",
  disclaimer:
    "Crewmark 是參與比較的產品之一。產品名稱為其所有者的商標；沒有任何廠商審閱或背書本頁。",
};
