import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.

const docs = "https://code.claude.com/docs/en/scheduled-tasks";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 排程任務與 /loop：讓它主動工作 | Crewmark",
    description:
      "讓 Claude Code 不等你開口就動工：Proactive 輸出風格、auto 模式、/goal、/loop、排程任務，以及用心跳（heartbeat）給它一份長期工作。",
  },
  breadcrumb: "主動工作的 Claude Code",
  hero: {
    kicker: "Claude Code 排程任務",
    title: "如何讓 Claude Code 主動工作",
    lead: "主動的 Claude Code 不會等你傳下一則訊息：例行決定自己拿主意，一路做到任務完成，按時間表醒來，有事發生就處理。Claude Code 對這幾件事各有一個內建功能。這篇教學說明如何開啟它們、每個功能的極限在哪裡，以及如何給 Claude Code 一份長期的工作，而不是一次性的提示詞。內建功能缺少的一塊是心跳：按固定節奏喚醒同一個工作階段，讓它去接手下一個任務。我們會說明如何手動搭建，以及 Crewmark 如何幫你做好。",
    cta: "申請搶先體驗",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "「主動」對 Claude Code 代表什麼",
      text: [
        "預設的 Claude Code 是被動的：你輸入，它工作，做完就停下來等你。要讓它主動起來得做到三件事，大多數教學只講了其中一件。",
      ],
      points: [
        "不必事事都問：用輸出風格和權限模式，讓它自己處理例行決定。",
        "自己開始工作：用迴圈、排程任務或事件觸發，不需要你輸入就開始新的一輪。",
        "知道下一步做什麼：有目標或待辦佇列，每次醒來都有有意義的事可做。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "逐步教學：讓 Claude Code 主動工作",
      steps: [
        {
          title: "開啟 Proactive 輸出風格",
          text: "很多人搜尋的「Claude Code 主動模式」其實就是它。它不是一種模式，而是內建的輸出風格：你一交代任務它就開始做，例行決定自己做合理假設而不是一再問你，除非你要求，否則不會先列計畫。刪除資料、變動共用或正式環境之前它仍會先問你，也不會改變權限提示。也可以在 `/config` 的 Output style 裡選擇。",
          code: "/output-style Proactive",
        },
        {
          title: "為無人看管的情況選一個權限模式",
          text: "每一步都停下來等權限確認的 agent 稱不上主動。auto 模式用背景安全檢查取代詢問；`acceptEdits` 放行檔案修改，其他指令仍會問你。跳過所有檢查的 `bypassPermissions` 只適合隔離的容器和虛擬機器。",
          code: "claude --permission-mode auto",
        },
        {
          title: "用 /goal 讓它一路做到完成",
          text: "`/goal` 接受一個完成條件。每一輪結束後，一個小模型會檢查條件是否達成；還沒達成，Claude 就自己再開一輪，達成後目標會自動清除。條件要寫成你自己也能核對的形式，例如某組測試全部通過。",
          code: "/goal test/auth 底下的測試全部通過，lint 沒有錯誤",
        },
        {
          title: "/loop 怎麼用：工作階段開著時重複執行",
          text: "`/loop` 按固定間隔重複執行一個提示詞；沒寫間隔時，由 Claude 每次自己決定多久後再執行。它屬於目前的工作階段：工作階段必須一直開著，迴圈任務 7 天後到期，忙碌時錯過的輪次不會補跑。",
          code: "/loop 30m 檢查我開著的 PR 的 CI，失敗了就修",
        },
        {
          title: "設定 Claude Code 排程任務，人不在也能執行",
          text: "桌面版排程任務（Desktop scheduled tasks）會按時間表在你的電腦上開一個新的工作階段來執行，前提是 Claude 桌面 App 開著、電腦沒有進入睡眠。雲端排程任務用 `/schedule` 建立，在 Anthropic 的雲端執行，電腦可以關機；最短間隔一小時，需要 Pro、Max、Ultra、Team 或 Enterprise 訂閱。程式碼儲存庫也可以用官方的 GitHub Action 按 cron 定時執行 Claude Code。",
          code: '/schedule 每個平日早上 9 點，整理新的 GitHub issue 並加上標籤\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "讓事件把它叫醒",
          text: "Channels 會把事件推進執行中的工作階段：Telegram、Discord 或 iMessage 訊息、CI 失敗、webhook，Claude 不需要你打開終端機就會處理。Hooks 在 Claude 生命週期的特定時刻執行你自己的指令，例如呼叫工具之前或一輪結束時。兩者都需要工作階段正在執行。",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: { label: "來源：Anthropic 的 Claude Code 排程任務文件（英文）", href: docs },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "缺少的那一塊",
      title: "加上心跳：按節奏喚醒同一個工作階段，接手下一個任務",
      text: [
        "心跳（heartbeat）是定期傳進同一段 Claude Code 對話的一句提醒，例如工作時間內每 30 分鐘一次：看看你的工作，接手下一個任務。排程任務每次都開一個新的工作階段、重複同一句提示詞；心跳則一直用同一段對話，所以 agent 記得上次做到哪裡，會從佇列裡拿下一項。這就是「重複執行的任務」和「持續工作的員工」的差別。",
        "Claude Code 沒有心跳設定，但 headless 模式可以恢復工作階段，所以可以手動搭建一個。",
      ],
      steps: [
        {
          title: "手動搭建：cron 加 claude -p --resume",
          text: "先開一個工作階段並儲存它的 ID，再讓 cron 按節奏用一句簡短的心跳提示恢復它。工作佇列放在儲存庫裡的一個檔案，例如 TODO.md。這是我們用文件中的參數搭建的範例，Anthropic 的文件沒有提到心跳這種用法。",
          code: "# 只需做一次：開一個工作階段，記下它的 ID\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e：平日 9:00–17:30，每 30 分鐘一次\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "自己搭的版本少了什麼",
          text: "佇列檔案和 cron 時間都要自己維護；除非寫進 cron，否則下班時間也不會停；你正在使用這個工作階段時心跳剛好到了會撞在一起；有好幾個 agent 時，看不到每個在做什麼。",
        },
        {
          title: "使用 Crewmark：內建心跳",
          text: "Crewmark 的 daemon 在工作時間內每 15、30 或 60 分鐘把心跳送進員工自己的對話，agent 正在忙就等它空下來；看板就是佇列，每次心跳員工都會接手下一個 issue 並回報進度。詳見[下文](#crewmark)。",
        },
      ],
    },
    {
      kind: "table",
      title: "該選哪一個",
      headers: ["方式", "會不會自己開工", "電腦需不需要開著", "適合"],
      rows: [
        ["Proactive 輸出風格", "不會，但你交代後動作更快", "需要", "做任務時少問幾句"],
        ["/goal", "會，自動開下一輪，直到條件達成", "需要", "不用催就把一件事做完"],
        ["/loop", "會，按間隔，最多 7 天", "需要，工作階段開著", "盯部署、CI 或 PR"],
        ["桌面版排程任務", "會，按時間表", "需要，App 開著且不睡眠", "每天處理本機檔案"],
        ["雲端排程任務", "會，最短每小時一次", "不需要", "只需要程式碼儲存庫的任務"],
        ["GitHub Actions", "會，按 cron 或 GitHub 事件", "不需要", "維護程式碼儲存庫"],
        ["Channels", "會，有事件時", "需要，工作階段開著", "回應聊天訊息、CI 和 webhook"],
        ["手動心跳（cron + `claude -p --resume`）", "會，按 cron 節奏，在同一個工作階段裡", "需要", "一個 agent 照 TODO 檔案工作"],
        ["Crewmark 心跳", "會，工作時間內每 15–60 分鐘，在同一個工作階段裡", "需要", "有任務清單、目標和工作時間的 agent"],
      ],
    },
    {
      kind: "text",
      title: "這些功能還留給你自己處理的事",
      text: ["每個功能都能啟動新的一輪，但沒有一個會決定 agent 這週該忙什麼。實際用起來會出現這些空缺："],
      points: [
        "排程任務每次都重複同一句提示詞，不會從待辦清單接手下一件事，也記不得昨天那次完成了什麼。",
        "沒有一塊看板讓你指派新工作給 Claude，看它在做什麼、做完了什麼、卡在哪裡。",
        "沒有工作時間，也沒有目標：迴圈會一直跑到到期為止，而不是跑到某個數字提升為止。",
        "有好幾個 agent 時沒人協調，每個都得各自寫提示詞、各自排時間表。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給 Claude Code 一份長期的工作",
      text: [
        "Crewmark 把一段 Claude Code 對話變成有職位、有目標、有工作時間和心跳的 AI 員工，並透過看板指派工作給它。它在你真正的 Claude Code 裡執行，用的是你已經付費的訂閱。",
      ],
      steps: [
        {
          title: "聘用一位員工，連接它的對話",
          text: "選一個職位，例如 SEO 專員或軟體工程師，在 Claude Code 裡執行 Crewmark 給你的設定指令。這段對話就成了這位員工，兩次醒來之間它記得做過的事。",
        },
        {
          title: "設定工作時間和心跳",
          text: "你電腦上的一個背景小程式（Crewmark daemon）會在工作時間內每 15、30 或 60 分鐘，把員工的心跳提示詞送進同一段對話；下班時間不打擾它。心跳抵達時如果 agent 正在忙，會等它閒下來再送達。",
        },
        {
          title: "在看板上指派 issue",
          text: "你指派 issue 或在 issue 下留言時，訊息會送進 agent 的對話。如果對話沒開著，Crewmark 會用 `claude -p --resume` 以 auto 模式讓它接著執行，工作照樣有人接手。",
        },
        {
          title: "用數字衡量它",
          text: "給每位員工一個 KPI，例如每月 Search Console 點擊數。它會朝這個數字安排 issue，在看板上推進、回報進度，需要你做決定時傳私訊給你。",
        },
      ],
    },
    {
      kind: "text",
      title: "一起用效果最好",
      text: [
        "內建功能和 Crewmark 可以疊加使用：在員工的對話裡開啟 Proactive 輸出風格和 auto 模式，讓每次心跳都真正把事做完；在終點明確的 issue 裡用 `/goal`；用 [Claude Code Remote Control](/remote-claude-code) 在手機上隨時看一眼。不需要你在場的一次性工作，請看[如何在背景執行 Claude Code agent 與使用 headless 模式](/blog/claude-code-background-agents)。用的是 Codex？請看[如何讓 Codex 主動工作](/proactive-codex)。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "讓 Claude Code 主動工作" },
  mid: {
    title: "不必寫 cron，也不必一直開著工作階段",
    text: "Crewmark 在工作時間內依心跳喚醒你的 Claude Code 工作階段，從看板上指派下一個任務給它。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 的心跳是什麼？",
        a: "定期傳進同一段 Claude Code 對話的提醒，例如工作時間內每 30 分鐘一次，讓 agent 看看手上的工作、接手下一個任務。因為是恢復同一個工作階段而不是開新的，agent 記得之前做過什麼。可以用 cron 加 `claude -p --resume` 手動搭建；Crewmark 內建心跳，還附帶工作時間和當作佇列的看板。",
      },
      {
        q: "Claude Code 有主動模式嗎？",
        a: "沒有叫這個名字的模式。Claude Code 有內建的 Proactive 輸出風格，用 `/output-style Proactive` 開啟，讓它自己處理例行決定，而不是一再詢問。它不會改變權限提示，想少跳確認請搭配 auto 模式。",
      },
      {
        q: "Claude Code 怎麼設定排程任務？",
        a: "工作階段開著時用 `/loop`；要在自己的電腦上定時執行，用桌面版排程任務；電腦關機也要執行，用 `/schedule` 建立雲端排程任務；程式碼儲存庫還可以用 Claude Code 的 GitHub Action 搭配 cron 觸發。",
      },
      {
        q: "關掉 Claude Code 之後 /loop 還會執行嗎？",
        a: "不會。迴圈屬於所在的工作階段，工作階段結束它就停止，而且迴圈任務 7 天後到期。要比工作階段活得更久，請用排程任務或 Crewmark 的心跳。",
      },
      {
        q: "電腦關機時 Claude Code 還能工作嗎？",
        a: "雲端排程任務和 GitHub Actions 可以，因為它們在別人的機器上執行。用到本機檔案的方式，包括桌面版排程任務、Channels 和 Crewmark，都需要電腦開著。",
      },
      {
        q: "讓 Claude Code 無人看管安全嗎？",
        a: "用 auto 模式而不是 `bypassPermissions`；讓它在每個變更都要經過審核的儲存庫裡工作；正式環境的憑證不要放在它拿得到的地方。Crewmark 還加上了工作時間和看板，它改了什麼、為什麼改都看得到。",
      },
      {
        q: "使用 Crewmark 要額外付 token 費用嗎？",
        a: "不用。員工在你自己的 Claude Code 裡執行，用的是你現有的訂閱，不會多出第二筆 token 帳單。",
      },
    ],
  },
  cta: {
    title: "讓 Claude Code 成為你的第一位 AI 員工",
    text: "為它設定職位、目標、工作時間和心跳，然後指派第一個 issue 給它。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 2 日對照 Anthropic 的 Claude Code 官方文件查核。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
