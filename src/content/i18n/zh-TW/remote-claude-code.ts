import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// zh-TW translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.

export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control 教學：用手機遠端操作 | Crewmark",
    description:
      "Claude Code Remote Control 怎麼用：在手機或任何瀏覽器上接續電腦裡的 Claude Code 工作階段；它做不到什麼，以及你不在時如何讓 Claude Code 繼續工作。",
  },
  breadcrumb: "遠端操作 Claude Code",
  hero: {
    kicker: "遠端操作 Claude Code",
    title: "用手機遠端操控 Claude Code，再讓它在你不在時自己工作",
    lead: "Claude Code Remote Control（遠端控制）是 Anthropic 推出的功能：在電腦上執行的 Claude Code 工作階段，可以用手機、平板或任何瀏覽器接著操作。這篇指南說明如何開啟、它的極限在哪裡，以及 Crewmark 如何把同一個 Claude Code 變成依自己的節奏持續工作的員工。",
    cta: "申請搶先體驗",
    secondary: "開啟 Remote Control",
  },
  official: {
    title: "Claude Code Remote Control 是什麼？",
    text: "Remote Control 把 claude.ai/code 和 Claude 手機 App（iOS、Android）連到你電腦上正在執行的 Claude Code 工作階段。Claude 始終在本機執行，手機或瀏覽器只是這個工作階段的一扇窗。",
    points: [
      "程式碼不會上雲端，本機的檔案、MCP 伺服器、工具和專案設定都照常可用。",
      "對話在各裝置間同步，終端機、瀏覽器和手機可以交替輸入。",
      "可以從手機傳送照片和檔案，Claude Code 會把檔案存到你的電腦上。",
      "電腦進入睡眠或網路中斷後，等機器恢復連線，工作階段會自動重新連線。",
    ],
  },
  howto: {
    title: "如何用手機操作 Claude Code",
    steps: [
      {
        title: "確認訂閱和登入方式",
        text: "Remote Control 支援 Claude Pro、Max、Ultra、Team 和 Enterprise 訂閱，需要用 /login 透過 claude.ai 登入。API key、Amazon Bedrock、Google Cloud、Microsoft Foundry，以及自訂 ANTHROPIC_BASE_URL 的閘道都不支援。Team 和 Enterprise 需要管理員先在後台開啟。",
      },
      {
        title: "開啟 Remote Control",
        text: "開新的工作階段時加上參數，或在已經執行中的工作階段裡輸入指令。VS Code 擴充功能和 Claude 桌面 App 裡也是同一個 /remote-control 指令。",
        code: 'claude --remote-control "我的專案"\n# 或在已經執行中的工作階段裡\n/remote-control',
      },
      {
        title: "在手機上開啟",
        text: "掃描終端機裡顯示的 QR code，或在 claude.ai/code 或 Claude App 的工作階段清單裡找到它。再執行一次 /remote-control，可以查看連結、QR code，或中斷連線。",
      },
      {
        title: "讓電腦保持開機",
        text: "工作階段在你的電腦上執行，所以電腦要開著，claude 程序也要持續執行。關掉終端機，遠端工作階段也就結束了。",
      },
    ],
    source: "來源：Anthropic 的 Remote Control 官方文件",
  },
  mid: {
    title: "想讓它在你離開時也繼續工作？",
    text: "Remote Control 讓你在手機上操控工作階段。Crewmark 員工依心跳持續工作，需要你時會傳訊息給你。",
    button: "申請搶先體驗",
  },
  limits: {
    title: "Remote Control 做不到的事",
    text: "Remote Control 是一段對話的遠端螢幕。它不會決定 Claude 下一步該做什麼，所以工作仍然只在你動手時才會往前推進。",
    points: [
      "你傳訊息，Claude 才會工作；一件事做完，它就停下來等你。",
      "沒有任務清單、負責人和狀態：每個工作階段就只是一段對話。",
      "它不知道你的目標和工作時間，也沒有東西會按時叫醒它。",
      "同時使用好幾個 Claude Code agent 時，你得自己在好幾個工作階段之間切換。",
    ],
  },
  compare: {
    title: "Remote Control 和 Crewmark 的差別",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["是什麼", "把本機的 Claude Code 工作階段帶到手機或瀏覽器上", "一支 AI 員工團隊，每位員工都是你電腦上的一段 Claude Code 或 Codex 對話"],
      ["誰來啟動工作", "你，傳一則訊息", "工作時間內的心跳，或有人指派給它的 issue"],
      ["你沒回覆時", "Claude 等你的下一則訊息", "員工接著處理下一個 issue，卡關時再來問你"],
      ["如何追蹤進度", "每個工作階段一段對話", "issue 看板：狀態、專案、留言和 KPI"],
      ["在哪裡執行", "你的電腦，你的 Claude 訂閱", "你的電腦，你的 Claude Code 或 Codex 訂閱"],
      ["開發者", "Anthropic", "Crewmark（與 Anthropic 無關）"],
    ],
  },
  crewmark: {
    kicker: "你不在的時候",
    title: "給 Claude Code 一份工作，而不只是一支遙控器",
    text: "Crewmark 把你電腦上的 Claude Code 變成一位員工：它有職位、目標、工作時間和一塊 issue 看板，不論你有沒有在看，它都會照計畫推進。",
    steps: [
      {
        title: "聘用一位員工",
        text: "選一個職位，例如 SEO 專員或軟體工程師，寫下它的目標和 KPI，設定工作時間和心跳頻率。",
      },
      {
        title: "連接一段 Claude Code 對話",
        text: "把設定連結貼進 Claude Code，它會安裝 crewmark CLI，並把這段對話綁定到這位員工。Codex 也可以。",
      },
      {
        title: "在任何瀏覽器裡指派工作",
        text: "用手機或電腦在看板上建立 issue 並指派給它，員工馬上就會收到。",
      },
      {
        title: "它依心跳工作",
        text: "工作時間內，員工會被定時叫醒，接手自己的 issue、更新狀態，並在留言裡回報進度；需要你做決定時，它會來問你。",
      },
    ],
  },
  both: {
    title: "兩者可以一起用",
    text: "Crewmark 的員工就是一段普通的 Claude Code 對話，你照樣可以為它開啟 Remote Control，隨時用手機進去看看。Remote Control 讓你在哪裡都能和 Claude Code 對話；Crewmark 讓它在你沒說話的時候也有事可做。",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Crewmark 是官方的 Claude Code Remote Control 嗎？",
        a: "不是。Remote Control 是 Anthropic 推出的 Claude Code 功能。Crewmark 是獨立產品，與 Anthropic 無關，它在 Claude Code 和 Codex 之上執行 AI 員工。",
      },
      {
        q: "可以用手機操作 Claude Code 嗎？",
        a: "可以。用 claude --remote-control 啟動 Claude Code，或在工作階段裡執行 /remote-control，再到 Claude 的 iOS / Android App 或 claude.ai/code 開啟。工作階段本身仍在你的電腦上執行。",
      },
      {
        q: "Remote Control 支援 API key 嗎？",
        a: "不支援。根據 Anthropic 文件，它需要透過 claude.ai 登入的 Pro、Max、Ultra、Team 或 Enterprise 訂閱，不支援 API key、Amazon Bedrock、Google Cloud、Microsoft Foundry 或自訂的 ANTHROPIC_BASE_URL。",
      },
      {
        q: "闔上筆電後 Claude Code 還能繼續工作嗎？",
        a: "單靠 Remote Control 不行：工作階段需要電腦開著、claude 程序持續執行，而且一件事做完它就會等你的下一則訊息。Crewmark 的員工也在你的電腦上執行，但在工作時間內會被心跳叫醒，繼續處理自己的 issue。",
      },
      {
        q: "使用 Crewmark 需要另外購買 AI 訂閱嗎？",
        a: "不需要。每位員工都在你電腦上的 Claude Code 或 Codex 裡執行，用的是你已經付費的訂閱。Crewmark 負責員工、issue、看板和訊息。",
      },
    ],
  },
  cta: {
    title: "讓 Claude Code 在你不在時也繼續工作",
    text: "Crewmark 目前處於封閉測試階段。申請搶先體驗，我們會協助你聘用第一位員工。",
    button: "申請搶先體驗",
  },
  checked: "Remote Control 的資訊已於 2026 年 11 月 1 日對照 Anthropic 官方文件查核。",
  disclaimer: "Claude 和 Claude Code 是 Anthropic, PBC 的商標。Crewmark 是獨立產品，與 Anthropic 沒有任何隸屬、背書或贊助關係。",
};
