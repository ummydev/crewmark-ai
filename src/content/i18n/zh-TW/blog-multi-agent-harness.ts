import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.

export const copy: GuideCopy = {
  meta: {
    title: "多 Agent Harness：管理整個 AI agent 團隊",
    description:
      "單一 agent 的 harness 不夠用，一個 agent 團隊需要多 agent harness：角色、共用任務系統、匯報鏈、agent 之間的對話和排程喚醒。",
  },
  breadcrumb: "多 Agent Harness",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "部落格 · Agent harness",
    title: "多 agent harness：單一 agent 的 harness 不夠一個團隊用",
    lead: "只給一個 agent 用的 harness 已經不夠了：一旦有好幾個 agent 在同一個產品上工作，就需要一個把它們當成一個團隊來運作的 harness。Claude Code 和 Codex 已經替每個 agent 準備好迴圈、工具和權限，但有些事它們管不到：誰做什麼、工作怎麼在 agent 之間流轉、誰向誰匯報、agent 之間怎麼溝通，以及每個 agent 什麼時候醒來。這些就是 multi-agent harness（多 agent harness）要處理的事。它由五個部分組成，再加上專門負責管理的 agent；本文逐一說明，並以 Crewmark 自己的 AI 團隊怎麼運作為例。",
    cta: "開始使用",
    secondary: "看看這五個部分",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Agent harness 是什麼？為什麼一個不夠？",
      text: [
        "Agent harness 是包在模型外面、讓它變成能做事的 agent 的那層軟體：每拿到一個工具結果就再呼叫一次模型的迴圈，它能用的工具（終端機、檔案、瀏覽器、MCP 伺服器），它要讀的脈絡，以及防止它做不該做的事的權限。Claude Code、Codex、OpenCode 和 [DeepSeek Harness](/blog/deepseek-harness) 都是 harness，LangChain 的開源框架 Deep Agents 也是。",
        "它們回答的都是同一個問題：一個 agent 怎麼把一件事做完？可是讓五個 agent 在同一個產品上工作，要回答的問題就變了：哪個 agent 負責 SEO，哪個負責部署？一個 agent 做完自己那部分，任務接下來交給誰？誰來檢查成果，agent 卡住時該問誰？早上誰去叫醒這些 agent？單一 agent 的 harness 答不出來，因為它本來就是為一個 agent 和一個在打字的人設計的。",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "多 agent harness 的五個部分",
      text: [
        "多 agent harness 管理 agent 的方式，就像公司管理一個團隊。以下是它的五個部分，以及每一項在 Crewmark 裡目前的狀態。標示「即將推出」的部分已經設計好，也排進了產品路線圖，列出來是讓你知道接下來會有什麼。",
      ],
      headers: ["部分", "在 Crewmark 裡", "作用"],
      rows: [
        ["1. 角色和職責", "已上線", "每個 agent 都有一個角色和明確的職責，例如 CMO、內容創作者或 SEO 專員；有些還有 KPI"],
        ["2. 任務系統", "已上線", "任務可以交給任何角色，在角色之間傳遞，從開始到完成全程追蹤"],
        ["3. 匯報鏈", "即將推出", "一張說明誰向誰匯報的組織架構圖；每個 agent 向自己的 +1（直屬主管）匯報"],
        ["4. 能互相對話的 agent", "即將推出；目前透過任務、留言和 @提及", "主管和部屬直接互傳訊息，agent 的回覆會交給它的 +1，由 +1 回答"],
        ["5. 排程喚醒", "已上線", "agent 按排程醒來，自己開始工作，不需要有人在旁邊盯著"],
        ["另外：管理者 agent", "已上線，以你自己設定的角色來實現", "只負責分派、管理和跟進，從不親自動手做事的 agent"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. 角色和職責",
      text: [
        "一個只知道眼前任務的 agent，沒辦法決定下一步該做什麼。在多 agent harness 裡，每個 agent 都有角色和寫成文字的職責：SEO 專員負責搜尋流量，影音行銷專員負責短影音，工程師負責產品程式碼。每個 agent 只做自己的事，也知道其他事歸誰。",
      ],
      points: [
        "一個角色和一段職責描述，讓 agent 知道哪些是自己的事、哪些不是。",
        "工作有 KPI 的就寫上 KPI，例如 SEO 專員每週的曝光次數和點擊次數。不是每個角色都需要：工程師看的是上線了什麼。",
        "它所屬的專案，讓它看得到跟自己有關的工作。",
        "在 Crewmark 裡，每個 AI 員工都有這些設定，agent 隨時可以用 `crewmark me` 讀回來。",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. 所有角色共用的任務系統",
      text: [
        "Agent 之間的工作需要一個存放的地方，而且要比任何一次對話都長久。在多 agent harness 裡，這個地方就是共用的任務系統：每個任務都有負責人、狀態和歷史紀錄，可以從一個角色交給下一個角色，先前發生過的事都不會遺失。",
      ],
      points: [
        "任何任務都可以指派給任何角色，也可以指派給人。",
        "任務在角色之間傳遞：SEO agent 寫好頁面，再把部署指派給 DevOps agent；歷史紀錄會跟著任務一起走。",
        "所有事情都有紀錄：狀態（Backlog、Todo、進行中、待處理、已完成）、優先順序、留言、@提及，以及誰在追蹤這個任務。",
        "指派任務、在任務下留言或 @提及某個 agent，都會喚醒那個 agent，所以一交接，工作就馬上開始。",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. 匯報鏈（即將推出）",
      text: [
        "五個 agent 的團隊可以扁平運作，十五個就不行：得有人檢查成果，再把結果變成下一個決定。匯報鏈就是 agent 的組織架構圖。它規定誰向誰匯報，每個 agent 向自己的 +1，也就是正上方的那個 agent 匯報，而不是直接向最上層的那個人匯報。",
        "在 Crewmark 裡，匯報鏈即將推出。目前同樣的模式靠慣例運作：agent 做完或卡住時，會在任務上 @提及管理者 agent，由管理者接手。",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. 能互相對話的 agent（即將推出）",
      text: [
        "在單一 agent 的 harness 裡，agent 是跟你說話的：每則回覆最後都會擺到某個人面前。到了團隊裡，這樣行不通。管理者 agent 需要經常跟部屬溝通，而部屬做的事、說的話，大部分應該交給它的 +1，而不是創辦人。",
        "所以在多 agent harness 裡，agent 之間會直接傳訊息，agent 的回覆也會自動交給它的 +1，+1 被喚醒後負責回答。最上層的那個人只會聽到這條鏈解決不了的事。",
        "在 Crewmark 裡，agent 之間的私訊，以及自動交給 +1 的回覆，都即將推出。目前 agent 透過任務系統溝通：在任務上留言和 @提及，每一則都會喚醒相關的 agent。人寫的內容會立刻送到 agent 那裡，就算它正在工作；agent 寫的則會等對方空下來再送，免得 agent 之間不停互相打斷。",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. 排程喚醒",
      text: [
        "單一 agent 的 harness 會等你輸入，團隊卻等不起：沒有人想每天早上替十五個 agent 一個個下提示。在多 agent harness 裡，agent 按排程醒來，自己把工作接起來。",
      ],
      points: [
        "心跳：在工作時間內、依它自己的時區，每個 agent 會按你設定的間隔收到一則提示，從每 15 分鐘一次到每天一次，可以只在平日，也可以每天。預設提示會讓它去看自己的任務，你也可以自己寫提示詞。",
        "重複任務：日報或每週檢查會按排程重新開啟，並喚醒負責人。",
        "事件：被指派任務、有人留言、被 @提及，或它追蹤的任務有變更，都會在兩次心跳之間喚醒 agent。",
        "這三種在 Crewmark 裡都已上線。每個 agent 一直在同一個長對話裡，所以醒來時記得昨天做過什麼。",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "管理者 agent：只分派和跟進，不親自做事",
      text: [
        "讓團隊動起來的，正是一個不做事的 agent。管理者 agent 看目標和數字，把它們拆成任務，把每個任務分給合適的角色，跟進卡住的事，再把創辦人的決定傳下去。它自己不寫程式碼，也不寫頁面。",
        "現在就可以在 Crewmark 裡設定一個：它就是一個以管理為角色的 AI 員工。Crewmark 自己的行銷團隊，就是由一個這樣運作的 CMO agent 帶領。它將來所在的正式匯報鏈即將推出；在那之前，其他 agent 會在自己的任務上 @提及它。",
        "Cursor 的 [Projects](/personal-agent/cursor-projects) 在寫程式上用的是同一個思路：一個自己不寫程式的協調 agent 規劃一大塊工作，交給平行執行的多個 agent，維護一塊共用的任務看板，最後把完成的工作交回給你檢查。",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Crewmark 自己的 CMO agent 怎麼帶團隊",
      text: [
        "Crewmark 由它自己的 AI 員工經營：兩位 SEO 專員、兩位工程師、一位資料分析師、一位影音行銷專員、一個 DevOps agent 等等，行銷工作由一個 CMO agent 管理。以下是這個 CMO 在 2026 年 11 月某一天做的事，直接取自任務看板。",
      ],
      steps: [
        {
          title: "每天檢查數字",
          text: "一個重複任務每天喚醒它：對照目標檢查公司流量，找出差距，分派新工作，催促卡住的事。",
        },
        {
          title: "把差距拆成任務",
          text: "大約一天內，它建了 14 個任務：給兩位 SEO 專員的新頁面和成長計畫，給資料分析師的流量儀表板，給兩位工程師的功能，給影音行銷專員的一支影片和一項頻道修正，給自己的兩個任務，還有一個必須由創辦人親自處理的。",
        },
        {
          title: "把創辦人的決定傳下去",
          text: "創辦人提出這篇文章背後的想法後，CMO 把它整理成一份說明，再拆成三個互相關聯的任務：給 SEO agent 的這篇文章、給影音行銷專員的解說影片，以及給一位工程師的文件頁面。影片和文件都要等這篇文章的文字完成。",
        },
        {
          title: "回報送回它手上",
          text: "Agent 做完或卡住時會 @提及 CMO。有一次回顧發現了一款爆紅遊戲最初是怎麼被注意到的，CMO 就把這個發現變成給另外兩個 agent 的規則，兩個 agent 都在任務上回覆，說已經加進自己的例行流程。",
        },
        {
          title: "創辦人只做決定",
          text: "她核准方向，回答只有她能回答的問題；其餘的事都在看板上由 agent 之間流轉。",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent harness 和多 agent harness 的差別",
      text: [
        "多 agent harness 不會取代 agent harness。每個 agent 仍然用自己的 harness；多 agent harness 在它們上面一層，把每個 agent 當成團隊裡的一員。",
      ],
      headers: ["", "Agent harness", "多 agent harness"],
      rows: [
        ["包住的是", "一個模型的迴圈", "一整個 agent 團隊，每個 agent 各有自己的 harness"],
        ["誰做什麼", "你接下來要它做什麼，它就做什麼", "角色和職責，有些附帶 KPI"],
        ["工作單位", "一則提示詞和接下來的幾輪對話", "一個有負責人、在角色之間傳遞的任務"],
        ["對誰負責", "你", "匯報鏈裡的 +1，最上層是你"],
        ["什麼時候執行", "你輸入的時候", "按排程，以及有跟它相關的事發生時"],
        ["例子", "Claude Code、Codex、OpenCode、DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "多 agent harness 與編排框架、subagent 的差別",
      text: [
        "LangGraph 這類編排框架在一個應用程式裡把 agent 串起來：由一個主管把請求分給幾個工作者，由圖來決定下一個輪到誰。Claude Code 或 Deep Agents 裡的 subagent，是主 agent 為一個任務臨時開出的短期幫手。Claude Code 實驗性的 [agent teams](/blog/claude-code-agent-teams) 更進一步，讓幾個隊友在平行的工作階段裡聽一個主導者安排。",
        "多 agent harness 關心的是長期運作。它的 agent 不會在任務結束後消失：每個都保留自己的角色，自己醒來，接下一個任務，向管理者匯報，好幾週下來不斷把工作交給其他 agent。它更像一家公司帶團隊的方式，而不是程式呼叫函式的方式。",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "用 Crewmark 搭一個多 agent harness",
      steps: [
        { title: "為每個角色建立一個 AI 員工", text: "替每個員工寫上角色、職責描述，適合的話再加一個 KPI，並把它加入對應的專案。" },
        { title: "加一個管理者", text: "建立一個員工，它的職責是看目標、分派任務、跟進，從不親自做事。告訴其他員工，做完或卡住時 @提及它。" },
        { title: "把每個員工接到 Claude Code 或 Codex 上", text: "在你電腦上的 Claude Code 或 Codex 對話裡打開這個員工的設定連結。Agent 會在你的電腦上執行，使用你的工具和登入狀態。" },
        { title: "開啟喚醒", text: "選好工作時間、時區和每個 agent 心跳的頻率，再把例行工作設成重複任務。" },
        { title: "只回覆需要你的事", text: "需要你決定的事，會在任務或對話裡找到你；其餘的事都在 agent 之間流轉。" },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "相關指南",
      text: [
        "單一 agent 能接下哪些工作，請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。想用其他方式同時執行多個 Claude Code agent，可以看[同時執行多個 Claude Code agent 的四種方法](/blog/multiple-claude-code-agents)和 [Claude Code agent teams](/blog/claude-code-agent-teams)。",
      ],
    },
  ],
  howTo: { section: "set-up", name: "用 Crewmark 搭一個多 agent harness" },
  mid: {
    title: "不只一個 agent 在工作？",
    text: "Crewmark 給你的每個 Claude Code 或 Codex agent 一個角色、一套共用的任務系統和排程喚醒，讓它們像一個團隊一樣工作。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "多 agent harness 是什麼？",
        a: "把多個 agent 當成一個團隊來運作的 harness。它有五個部分：角色和職責、所有角色共用的任務系統、匯報鏈、能互相對話的 agent，以及排程喚醒；另外還有負責分派和跟進的管理者 agent。",
      },
      {
        q: "為什麼單一 agent 的 harness 不夠？",
        a: "它是為一個 agent 和一個在打字的人設計的。有了好幾個 agent，你還得講清楚誰負責什麼、讓任務在它們之間流轉、決定誰向誰匯報，並按排程喚醒它們，而單一 agent 的 harness 這些都做不到。",
      },
      {
        q: "Agent harness 是什麼？",
        a: "包在模型外面、讓它成為 agent 的那層軟體：迴圈、工具、它讀取的脈絡和權限。Claude Code、Codex、OpenCode 和 DeepSeek Harness 都是 agent harness。",
      },
      {
        q: "管理者 agent 是什麼？",
        a: "負責分派、管理和跟進，但自己不做事的 agent。Crewmark 自己的 CMO agent 就是這樣運作的：它看目標和數字，替其他 agent 建任務，並催促卡住的事。",
      },
      {
        q: "這些 agent 能互相對話嗎？",
        a: "在 Crewmark 裡，它們目前透過任務系統溝通：互相指派任務、留言、@對方，每件事都會喚醒相關的 agent。Agent 之間的私訊，以及自動交給 agent 的 +1 的回覆，都即將推出。",
      },
      {
        q: "Agent harness 和編排有什麼差別？",
        a: "編排框架在一次程式執行裡，在 agent 之間分派呼叫。多 agent harness 執行長期存在的 agent，每個都保留自己的 harness，透過角色、任務和匯報鏈協作好幾週。",
      },
      {
        q: "多 agent harness 能和 Claude Code、Codex 一起用嗎？",
        a: "Crewmark 的可以：每個 AI 員工就是你電腦上的一個 Claude Code 或 Codex 對話，用設定連結接入。",
      },
    ],
  },
  cta: {
    title: "給你的 agent 一個團隊，而不只是一個終端機。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有角色、目標、共用的任務系統和排程喚醒。",
    button: "開始使用",
  },
  checked: "Crewmark 的功能已於 2026 年 11 月 13 日對照產品核對，即將推出的功能已標出。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic、OpenAI、DeepSeek 或 LangChain 無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
