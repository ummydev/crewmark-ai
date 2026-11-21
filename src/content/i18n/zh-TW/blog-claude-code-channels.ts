import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# 在 Claude Code 裡安裝官方外掛（選擇 user scope）
/plugin install telegram@claude-plugins-official

# 儲存 BotFather 給你的 token
/telegram:configure <token>

# 開啟這個 channel，重新啟動 Claude Code
claude --channels plugin:telegram@claude-plugins-official

# 傳一則訊息給你的 bot，再用它回覆的配對碼完成配對
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Channels：Telegram、Discord、iMessage 設定教學",
    description:
      "Claude Code Channels 如何運作，官方 Telegram、Discord、iMessage 外掛如何設定：指令、配對、傳送者允許清單、使用條件、Channels 無法使用的原因，以及 Slack。",
  },
  breadcrumb: "Claude Code Channels",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code Channels：用 Telegram、Discord 或 iMessage 傳訊息給 Claude Code",
    lead: "Channels（頻道）把訊息推送到你電腦上已經在執行的 Claude Code 工作階段：你可以用手機傳訊息給它，在同一個聊天裡收到回覆，而工作是在你真實的檔案上完成的。Telegram、Discord 和 iMessage 都有官方外掛。這篇指南說明 Channels 如何運作、每一種如何設定、如何擋住陌生人、為什麼有時候無法使用，以及它和 Remote Control、Claude in Slack 有什麼不同。",
    cta: "開始使用",
    secondary: "設定 Telegram",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code Channels 是什麼",
      text: [
        "一個 channel 就是一個 MCP 伺服器，它把事件推送到你正在執行的 Claude Code 工作階段。它可以是雙向的：Claude 讀到訊息後，透過同一個 channel 回覆，就像一座聊天橋梁。只有工作階段開著時，事件才會送達。",
      ],
      points: [
        "官方 channel 外掛：Telegram、Discord 和 iMessage，外加 fakechat，一個在 localhost 上執行的示範聊天。",
        "每一個都是 claude-plugins-official 裡的外掛，都需要先安裝 Bun。",
        "你也可以自己做一個 channel，例如一個接收 CI 失敗或錯誤警示的 webhook 接收器。",
        "Channels 仍是研究預覽版：`claude --help` 裡沒有列出 `--channels` 參數，它的語法也可能會變。",
        "終端機裡你會看到收到的訊息和一則確認，例如「sent」；回覆的內文本身出現在聊天應用程式裡。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Telegram channel",
      steps: [
        {
          title: "建立一個 bot",
          text: "在 Telegram 裡開啟 BotFather，傳送 `/newbot`，給 bot 取一個名稱和一個以「bot」結尾的使用者名稱，然後複製 token。",
          code: telegram,
        },
        {
          title: "安裝並設定外掛",
          text: "在 Claude Code 裡執行 `/plugin install telegram@claude-plugins-official`，選擇 user scope。如果找不到這個外掛市集（marketplace），先用 `/plugin marketplace add anthropics/claude-plugins-official` 加入它。然後用 `/telegram:configure <token>` 儲存 token，或在啟動 Claude Code 之前設定 `TELEGRAM_BOT_TOKEN`。",
        },
        {
          title: "開啟 channel 後重新啟動",
          text: "結束 Claude Code，再帶上 `--channels plugin:telegram@claude-plugins-official` 重新啟動。可以同時傳入多個 channel 外掛，用空格隔開。",
        },
        {
          title: "配對並鎖定",
          text: "隨便傳一則訊息給你的 bot，它會回覆一個配對碼。用 `/telegram:access pair <code>` 核准，然後執行 `/telegram:access policy allowlist`，這樣只有你的帳號能聯絡到這個工作階段。",
        },
      ],
      source: { label: "來源：Anthropic 的 Claude Code Channels 文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord 和 iMessage",
      points: [
        "Discord：在 Discord Developer Portal 裡建立一個應用程式，複製 bot token，開啟 Message Content Intent，再用 `bot` scope 邀請這個 bot。然後執行 `/plugin install discord@claude-plugins-official` 和 `/discord:configure <token>`，帶上 `--channels plugin:discord@claude-plugins-official` 重新啟動，私訊這個 bot，再用 `/discord:access pair <code>` 配對。",
        "iMessage：只支援 macOS，不需要 bot 或 token。它讀取你的「訊息」資料庫，所以要為終端機開啟「完整磁碟取用權限」（Full Disk Access）。安裝 `imessage@claude-plugins-official`，帶上 `--channels plugin:imessage@claude-plugins-official` 重新啟動，然後傳一則訊息給自己。用 `/imessage:access allow <phone or Apple ID email>` 加入其他人。",
        "Slack：不是 channel。Claude in Slack 透過 @Claude 提及啟動一個雲端工作階段，而不是傳訊息給你的本機工作階段。",
        "WhatsApp 和其他應用程式：沒有官方 channel 外掛，要用的話得參照 Channels 參考文件自己做一個。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels 無法使用或沒有反應？",
      points: [
        "帳號類型：Channels 需要透過 claude.ai 登入，或使用 Console API 金鑰。透過 Amazon Bedrock、Google Cloud 的 Agent Platform 或 Microsoft Foundry 都無法使用。",
        "你的組織：在 Claude Team 和 Enterprise 上，Channels 會一直被擋住，直到 Owner 在 Organization settings > Claude Code > Channels 裡把它開啟。啟動時會有一則警告說明這一點。沒有組織的 Pro、Max 和 Ultra 帳號會略過這項檢查。",
        "外掛未獲核准：預覽期間，`--channels` 只接受 Anthropic 允許清單（或你所在組織的允許清單）上的外掛。換成其他外掛，Claude Code 會照常啟動但不帶這個 channel，啟動提示會告訴你原因。",
        "bot 沒有回覆：Claude Code 必須帶著 `--channels` 執行；只有 channel 處於開啟狀態時，bot 才能回覆。",
        "任務做到一半停了：權限提示會讓工作階段暫停，直到有人回答。有些 channel 可以把權限提示轉送到你的手機上。",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "擋住陌生人",
      points: [
        "每個官方 channel 都有一份傳送者允許清單，其他人傳來的訊息會被默默丟棄。Telegram 和 Discord 透過配對把你加進去；iMessage 會放行你自己傳的訊息。",
        "只有在 `--channels` 裡指名的伺服器才能推送訊息；只寫在 `.mcp.json` 裡還不夠。",
        "如果一個 channel 會轉送權限提示，那它允許清單上的任何人都能核准或拒絕你工作階段裡的工具呼叫。只加入你放心交出這項權限的人。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels、Remote Control 和 Claude in Slack 的差別",
      headers: ["", "做什麼", "在哪裡執行", "適合"],
      rows: [
        ["Channels", "把聊天訊息、警示和 webhook 推送到你開著的工作階段", "你的電腦", "用手機傳訊息給工作階段；回應 CI 和警示"],
        ["[Remote Control](/remote-claude-code)", "在 claude.ai 或 Claude App 裡操作你的本機工作階段", "你的電腦", "離開座位時調整進行中的工作"],
        ["Claude in Slack", "@Claude 提及會啟動一個雲端工作階段", "Anthropic 的雲端", "從團隊對話裡發起任務"],
        ["Notification hook", "在 Claude 需要你時執行你的指令，例如跳出桌面通知", "你的電腦", "知道一輪什麼時候結束、什麼時候需要你輸入"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓 Claude Code 主動傳訊息給你，而不只是回答你",
      text: [
        "Channels 讓你能和一個持續執行的工作階段對話。Crewmark 把這個工作階段變成一位 AI 員工：它在工作時間內依心跳醒來，從看板上領取下一個 issue，卡住時在 Crewmark 裡傳訊息給你，不用你先傳給它。",
      ],
      steps: [
        {
          title: "在你的 Claude Code 上雇用一位員工",
          text: "在一個 Claude Code 對話裡執行設定指令，這個對話就成了員工。見[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "給它工作時間和心跳",
          text: "選好它的工作時間和喚醒頻率，每 15 到 240 分鐘一次。見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "它需要你時再回覆",
          text: "需要你拍板的事會以私訊的形式傳給你；回覆一次，它就繼續工作。想讓它通宵工作，請看[讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Claude Code 的 Telegram channel" },
  mid: {
    title: "想讓 Claude Code 卡住時主動來找你？",
    text: "Crewmark 員工依心跳醒來，逐一處理看板上的任務，需要你拍板時會傳訊息給你。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code Channels 是什麼？",
        a: "它們是把事件推送到已經在執行的 Claude Code 工作階段的 MCP 伺服器：可以是來自 Telegram、Discord 或 iMessage 的聊天訊息，也可以是來自 CI 和監控系統的 webhook。Claude 可以透過同一個 channel 回覆。Channels 目前是研究預覽版。",
      },
      {
        q: "有官方的 Claude Code Telegram 外掛嗎？",
        a: "有：`telegram@claude-plugins-official`。用 `/plugin install` 安裝，用 `/telegram:configure` 儲存 BotFather 給你的 token，帶上 `--channels plugin:telegram@claude-plugins-official` 啟動 Claude Code，再用 bot 傳來的配對碼把你的帳號配對好。",
      },
      {
        q: "Claude Code Channels 能用在 Slack 或 WhatsApp 上嗎？",
        a: "兩者都沒有官方 channel。Slack 那邊，Claude in Slack 改為透過 @Claude 提及啟動雲端工作階段。其他應用程式可以參照 Channels 參考文件自己做一個 channel。",
      },
      {
        q: "Claude Code Channels 為什麼無法使用？",
        a: "通常是因為你透過 Bedrock、Google Cloud 或 Foundry 登入，你的 Team 或 Enterprise 組織還沒開啟它，或外掛不在核准名單上。啟動提示會寫明原因。",
      },
      {
        q: "電腦關機後 Channels 還能用嗎？",
        a: "不能。只有工作階段在你電腦上開著時，事件才會送達。想要一直在線，就在一台保持喚醒的電腦上，把 Claude Code 放在背景程序或常駐終端機裡執行。",
      },
      {
        q: "Claude Code 完成工作後怎麼收到通知？",
        a: "加一個 `Notification` 或 `Stop` hook，讓它跳出桌面通知，例如在 macOS 上用 `osascript`。見 [Claude Code hooks](/blog/claude-code-hooks)。想在手機上收到訊息，就請 Claude 完成後透過 channel 回覆你。",
      },
    ],
  },
  cta: {
    title: "從回覆訊息，到自己處理任務佇列。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照 Claude Code 官方的 Channels 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標；Telegram、Discord 和 iMessage 是其各自所有者的商標。",
};
