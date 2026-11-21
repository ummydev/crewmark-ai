import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# 執行 ChatGPT 桌面應用程式的那台電腦上的 ~/.ssh/config
Host devbox
  HostName devbox.example.com
  User me

# 先確認能連上，再在遠端主機上登入 Codex
ssh devbox
codex   # 必須在遠端使用者登入 shell 的 PATH 裡`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 遠端控制（ChatGPT）：用手機操作 Codex",
    description:
      "用 ChatGPT App 控制 Mac 或 Windows 電腦上的 Codex：掃描 QR 碼設定、SSH 主機、讓它全天候連得上，以及遠端控制無法使用時怎麼解決。",
  },
  breadcrumb: "Codex 遠端控制",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "部落格 · Codex",
    title: "Codex 遠端控制：用手機操作你電腦上的 Codex",
    lead: "遠端連線讓你用手機上的 ChatGPT App，操作在你 Mac 或 Windows 電腦上執行的 Codex 對話。程式碼儲存庫、檔案、憑證和工具都留在電腦上；手機負責傳送提示詞、核准，並把結果顯示給你。這篇指南說明如何設定、手機上能做什麼、電腦需要符合什麼條件、無法使用時怎麼解決，以及它和雲端任務、能自己工作的 AI 員工有什麼不同。",
    cta: "開始使用",
    secondary: "看如何設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Codex 遠端控制是什麼",
      text: [
        "OpenAI 把它叫作 remote connections（遠端連線）。執行著 ChatGPT 桌面應用程式的電腦就是主機，由你的手機或另一台電腦來控制它。工作階段用的是主機上的專案、對話、檔案、憑證、權限、外掛和本機工具，所以 Codex 的表現和你坐在電腦前時完全一樣。",
      ],
      points: [
        "主機：macOS 和 Windows 上的 ChatGPT 桌面應用程式。OpenAI 的文件沒有把 Linux 列為主機。",
        "手機：iOS 和 Android 上的 ChatGPT App，要保持最新版本。在 App 裡開啟 Codex（舊版本裡叫 Remote）。",
        "連線經過一個安全中繼站，所以電腦不需要暴露在網際網路上。",
        "設定在桌面應用程式裡完成；OpenAI 表示，無法從 Codex CLI 或 IDE 外掛設定手機存取。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Codex 遠端控制",
      steps: [
        {
          title: "在桌面應用程式裡開啟",
          text: "在電腦上開啟 ChatGPT 桌面應用程式，進入 Settings > Connections > Control this Mac or PC。選擇 Set up 或 Add，核准遠端存取，並完成所需的驗證。應用程式會顯示一個 QR 碼。在同一個地方，你還可以選擇讓電腦保持喚醒。",
        },
        {
          title: "配對手機",
          text: "用手機掃描 QR 碼，它會開啟 ChatGPT。確認是同一個帳號和工作區，如果有 MFA、SSO 或 passkey 驗證，也一併完成。之後這台電腦就會出現在 Codex 下方。一個 QR 碼只配對一支手機和一台電腦，所以想用的每種組合都要分別配對。",
        },
        {
          title: "在手機上工作",
          text: "在電腦的某個專案裡新開一個對話，或開啟既有的對話。你可以傳送後續訊息、回答 Codex 的提問、核准指令，並審查 diff、測試結果、終端機輸出和螢幕截圖。任務完成或需要你時，你會收到通知。",
        },
        {
          title: "選用：透過 SSH 控制遠端機器",
          text: "桌面應用程式也能開啟 SSH 主機上的專案。在 ~/.ssh/config 裡加入一筆 Host 項目，確認 `ssh <alias>` 能連上，在那台主機上安裝 Codex 並登入，然後在 Settings > Connections 下加入這台主機，再選一個專案資料夾。",
          code: ssh,
        },
      ],
      source: { label: "來源：OpenAI 的遠端連線文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "電腦需要符合的條件",
      points: [
        "電腦必須保持喚醒、連上網路，登入同一個帳號和工作區，並執行著 ChatGPT 桌面應用程式。一進入睡眠就無法存取。",
        "Mac 筆電要打開螢幕、接上電源才能一直保持連線；闔上螢幕時，需要接一台外接顯示器。",
        "在 Windows 上，如果 Codex 用到 Computer Use，要讓工作階段保持解鎖，因為 Computer Use 在前景執行。",
        "不在自己的網路裡時，用 VPN 或 mesh 網路工具，而不是把電腦暴露在網際網路上。",
        "你的工作區管理員可能需要先開啟 Remote Control 存取權限。",
        "你無法把對話轉交給 Codex 雲端環境；要這樣做，就改為啟動一個雲端任務。",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Windows 和 Linux 上的遠端控制",
      text: ["上面的步驟在 Mac 和 Windows 電腦上都一樣，因為兩者都能當主機。不一樣的是 Linux。"],
      points: [
        "Windows：安裝 ChatGPT 桌面應用程式，並照上面的方式開啟 Settings > Connections > Control this Mac or PC。如果 Codex 用到 Computer Use，它會在目前使用中的桌面上操作：移動游標、打字、把視窗帶到前景，而且無法在背景執行。它工作時，讓 Windows 工作階段保持解鎖並連上網路；電腦螢幕交給它的這段時間，就用手機啟動和查看工作。OpenAI 的文件也建議在 Windows 虛擬機器裡執行桌面應用程式，讓 Computer Use 接管的是虛擬機器，而不是你的桌面。詳見 [Windows 上的 Codex](/blog/codex-windows)。",
        "鎖定使用（locked use）讓你從手機啟動的 Computer Use 任務在電腦鎖定後繼續執行，但只支援 macOS。",
        "Linux：OpenAI 只把 macOS 和 Windows 列為主機，所以用手機控制 Linux 電腦並沒有文件說明，即使 Linux 版 ChatGPT 桌面應用程式現在已推出預覽版。可行的做法是把 Linux 機器當作 SSH 主機：Mac 或 Windows 電腦上的桌面應用程式開啟它上面的專案，你再用手機控制那台 Mac 或 Windows 電腦。詳見 [Linux 上的 Codex](/blog/codex-linux) 和[在 VPS 上執行 Codex](/blog/codex-vps)。",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex 遠端控制無法使用？",
      points: [
        "手機上看不到電腦：檢查桌面應用程式是否在執行、「Allow other devices to connect」是否已開啟、兩個 App 是否用同一個帳號和工作區，以及是否都是最新版本。2026 年 6 月 8 日以來沒用過的配對，需要重新配對。",
        "重新登入後 Remote Control 被關閉了：登出會關閉它，但配對還在。重新開啟 Remote Control 即可。",
        "選擇 Add 後出現錯誤：在電腦上重新啟動桌面應用程式，再試一次。",
        "收不到核准請求：在 App 裡開啟 Codex，確認帳號和工作區，重新掃描 QR 碼，並請管理員確認你有 Remote Control 存取權限。",
        "一直斷線：電腦進入睡眠、斷網，或關掉了應用程式。讓它保持喚醒並連上網路。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "遠端控制、雲端任務還是 AI 員工？",
      text: ["遠端控制是一扇看向你電腦上 Codex 的窗口：它會等你告訴它下一步做什麼。另外兩種方式沒有你也能一直做下去。"],
      headers: ["", "誰來啟動工作", "在哪裡執行", "電腦要開著嗎？", "適合"],
      rows: [
        ["遠端控制", "你，用手機", "你的 Mac 或 Windows 電腦", "要，保持喚醒並連網", "離開座位時繼續指揮本機的工作"],
        ["Codex 雲端任務", "你，啟動一次", "OpenAI 的雲端", "不用", "交出一個只需要程式碼儲存庫的任務"],
        ["Crewmark AI 員工", "工作時間內的心跳", "你的電腦，在你自己的 Codex 裡", "要", "一份長期工作：每個班次從看板上領取下一個 issue"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "用手機隨時看看，讓它自己工作",
      text: [
        "用遠端控制，每一步還是得由你來決定。Crewmark 把你的 Codex 變成一位 AI 員工，有職位、目標、工作時間和心跳：它依排程醒來，從看板上領取下一個 issue，需要你做決定時傳訊息給你。遠端控制就成了你用手機進去看看的方式。",
      ],
      steps: [
        {
          title: "在你的 Codex 上雇用一位員工",
          text: "在 Codex 對話裡執行 setup 指令；這個對話就成了員工，在一次次喚醒之間保留它的記憶。見[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "幫它設定工作時間和心跳",
          text: "在班時，crewmark CLI 每 15 到 240 分鐘往同一個 Codex 對話裡排入一則訊息，讓它領取下一個 issue。見 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        },
        {
          title: "想看時就用手機進去看看",
          text: "在 ChatGPT App 的 Codex 裡開啟員工的對話，看它工作或給它指引方向，也可以只回覆它的訊息。Claude Code 版本見 [Claude Code Remote Control](/remote-claude-code)。",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "使用 Crewmark",
      title: "Crewmark 多了什麼",
      text: [
        "遠端控制讓你在任何地方都能連到 Codex，但 Codex 仍然只在你開口時才工作。Crewmark 把你電腦上的 Codex 變成一位有自己工作的 AI 員工，並在 crewmark.ai 給你一塊看板，讓你用手機追蹤它。",
      ],
      steps: [
        {
          title: "一個職位和一個量化目標",
          text: "每位員工都是你電腦上的一段 Codex 對話，有一個職位（例如軟體工程師或 SEO 專員），加上 KPI 和專案。它用 `crewmark me` 讀回這些設定，所以每次醒來都從自己的工作出發，而不是從一個空白的提示詞開始。請看 [AI 員工職位](/ai-employees)。",
        },
        {
          title: "工作時間和心跳",
          text: "選擇它的工作時間，只排平日或每天都排，以你的時區為準；工作時間可以跨過午夜。在這段時間內，`crewmark` CLI 每 15 分鐘到 24 小時喚醒同一段 Codex 對話一次，讓它從上次停下的地方繼續。",
        },
        {
          title: "它透過 issue 持續工作",
          text: "每次醒來，它都會領取看板上指派給它的 issue，處理它們，並隨時更新狀態。需要審查、權限或資訊時，它會把 issue 設為「Needs action」，並在那裡問你。",
        },
        {
          title: "用手機和它對話",
          text: "在手機瀏覽器開啟 crewmark.ai，在員工的 Work log（工作紀錄）裡寫訊息給它。訊息會送到你電腦上它的那段 Codex 對話，它也會在那裡回覆。",
        },
        {
          title: "一塊看板上的一支團隊",
          text: "聘用更多不同職位的員工。它們共用一塊看板，互相指派 issue、留言和 @提及，每一個這樣的動作都會喚醒相關的那位員工。Codex 內建的排程功能，以及心跳和它們有什麼不同，請看[主動工作的 Codex](/proactive-codex)。",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "ChatGPT App 的遠端控制和 Crewmark 的差別",
      text: [
        "ChatGPT App 已經讓你用手機就能做很多事：在電腦的專案裡開新對話、繼續舊對話、回答提問、核准指令、審查 diff 和測試結果，並在任務完成或需要你時收到通知。Crewmark 則是為了那些不是由你啟動、也應該繼續進行的工作。",
      ],
      headers: ["", "ChatGPT App 遠端控制", "Crewmark"],
      rows: [
        ["是什麼", "用手機上的 ChatGPT App 控制你 Mac 或 Windows 電腦上的 Codex 對話", "一支 AI 員工團隊，每位員工都是你電腦上的一段 Codex 或 Claude Code 對話，並在 crewmark.ai 有一塊看板"],
        ["誰來啟動工作", "你：用手機開始對話或傳送後續訊息", "工作時間內的心跳，或有人指派給它的 issue"],
        ["用手機能做什麼", "開始和繼續對話、核准操作、審查 diff、測試結果和螢幕截圖、收到通知", "在員工的 Work log 裡寫訊息給它、建立和指派 issue、issue 需要處理時回覆"],
        ["你沒回覆時", "Codex 完成任務、通知你，然後等你的下一個提示詞", "員工接著處理下一個 issue，卡關時在 issue 上問你"],
        ["如何追蹤進度", "主機專案裡的對話", "issue 看板：狀態、優先順序、留言和 KPI"],
        ["多個 agent 組成的團隊", "你自己在主機和對話之間切換", "不同職位的多位員工共用一塊看板，互相指派 issue、互相 @提及"],
        ["目標和工作時間", "除了這段對話本身，沒有別的", "每位員工都有一個量化目標和工作時間"],
        ["在哪裡執行", "你的 Mac 或 Windows 電腦，用你的 ChatGPT 方案", "你的電腦，在你自己的 Codex 或 Claude Code 裡，用你已經付費的方案"],
        ["開發者", "OpenAI", "Crewmark（與 OpenAI 無關）"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "隨時隨地、全天候連到 Codex",
      text: [
        "遠端控制只連得到保持喚醒、連上網路、已登入並執行著 ChatGPT 桌面應用程式的主機。主機一旦睡眠、斷網或關掉應用程式，手機就連不到它，直到它恢復為止；你自己選擇睡眠也會中斷存取。對於執行較久的工作，OpenAI 建議用一台專用、一直開著的 Mac 或 Windows 電腦，上面裝好你的專案、憑證和工具。有兩種設定能做到這一點，Codex cloud 則是第三個選項：",
      ],
      points: [
        "家裡的一台 Mac mini 當主機。不讓它睡眠，執行開啟了遠端控制的 ChatGPT 桌面應用程式，並把手機和它配對。身為一台 Mac，它也能執行 Computer Use，以及透過 Chrome 擴充功能執行瀏覽器任務；開啟鎖定使用（locked use）後，Computer Use 任務在它鎖定後也能繼續。請看[如何在 Mac mini 上設定 Codex](/blog/codex-mac-mini)。",
        "一台 Linux 伺服器當 SSH 主機。在伺服器上安裝 Codex CLI 並登入，然後在桌面應用程式的 Settings > Connections 下加入它；它專案裡的對話會在伺服器上執行指令、修改檔案。你的手機連的仍然是執行桌面應用程式的那台 Mac 或 Windows 電腦，而不是伺服器，所以那台電腦也必須一直開著。家裡的 Mac mini 就可以當這台主機。請看[如何在 VPS 上執行 Codex](/blog/codex-vps)。",
        "Codex cloud。在 ChatGPT App 裡開啟 Codex，選擇 Cloud 和一個環境。任務在 OpenAI 的雲端執行，你的電腦睡眠時也會繼續工作，但它只看得到自己雲端環境裡的東西：你的本機檔案、執行中的程序、瀏覽器登入狀態和 VPN 存取都不在那裡。你電腦上的對話也無法轉交給它。",
        "Crewmark 員工同樣在你自己的電腦上執行，所以同樣的規則也適用。在一台一直開著的 Mac mini 或伺服器上，它們的工作時間可以每天都排，也可以跨過午夜。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Codex 遠端控制" },
  mid: {
    title: "想讓 Codex 在你沒有指揮時也繼續工作？",
    text: "Crewmark 在工作時間內依心跳喚醒你的 Codex，從看板上指派下一個 issue 給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "ChatGPT 遠端控制是什麼？",
        a: "這是很多人對 OpenAI 遠端連線的稱呼：用你手機上的 ChatGPT App，或另一台 Mac 或 Windows 電腦，操作在主機電腦的 ChatGPT 桌面應用程式裡執行的 Codex 對話。工作由主機完成；手機負責傳送提示詞和核准。",
      },
      {
        q: "如何在 ChatGPT 裡開啟遠端控制？",
        a: "在主機電腦上開啟 ChatGPT 桌面應用程式，進入 Settings > Connections > Control this Mac or PC，選擇 Set up 或 Add，然後用手機上的 ChatGPT App 掃描 QR 碼。主機必須是一台保持喚醒的 Mac 或 Windows 電腦。",
      },
      {
        q: "可以用手機控制 Codex 嗎？",
        a: "可以。在 ChatGPT 桌面應用程式裡開啟 Settings > Connections > Control this Mac or PC，用手機掃描 QR 碼，這台電腦就會出現在 iOS 或 Android 版 ChatGPT App 的 Codex 下方。",
      },
      {
        q: "可以遠端控制 Codex CLI 嗎？",
        a: "手機存取只能在 ChatGPT 桌面應用程式裡設定；OpenAI 表示無法從 CLI 或 IDE 外掛設定。CLI 確實有一個實驗性的 `codex remote-control` 指令（start、stop、pair），OpenAI 說明它用於受管理的遠端控制用戶端和 SSH 工作流程，但文件沒有說明如何把手機和只有 CLI 的機器配對。想連到一台你平常用終端機工作的機器，可以在桌面應用程式裡把它加為 SSH 主機，那台機器上要安裝好 Codex 並已登入。",
      },
      {
        q: "Codex 遠端控制支援 Linux 嗎？",
        a: "文件列出的主機是 macOS 和 Windows 上的桌面應用程式，沒有提到 Linux。不過 Linux 機器仍然可以作為 SSH 主機，從 Mac 或 Windows 的桌面應用程式連上去。",
      },
      {
        q: "電腦需要一直開著嗎？",
        a: "需要。電腦要保持喚醒、連上網路、已登入，並執行著桌面應用程式；一進入睡眠就無法存取。想讓工作在電腦關機後也繼續，就用 Codex 雲端任務。",
      },
      {
        q: "Codex 遠端控制安全嗎？",
        a: "連線經過一個安全中繼站，電腦不會暴露在公開網際網路上，Codex 的沙箱、安全控制和核准機制也照樣生效。只配對你自己的、信得過的裝置。",
      },
      {
        q: "Codex 遠端控制為什麼無法使用？",
        a: "通常是桌面應用程式沒在執行、「Allow other devices to connect」沒有開啟、手機用的是另一個帳號或工作區、某個 App 不是最新版本，或電腦進入了睡眠。如果這個連線 2026 年 6 月 8 日以來沒用過，就用 QR 碼重新配對。",
      },
      {
        q: "ChatGPT 遠端控制支援 Windows 嗎？",
        a: "支援。Windows 上的 ChatGPT 桌面應用程式可以當主機，設定方式一樣，透過 Settings > Connections > Control this Mac or PC。如果 Codex 用到 Computer Use，它會接管目前使用中的桌面，所以它工作時要讓 Windows 工作階段保持解鎖並連上網路。請看 [Windows 上的 Codex](/blog/codex-windows)。",
      },
      {
        q: "遠端控制可以搭配 Codex cloud 使用嗎？",
        a: "兩者是分開的。遠端控制操作的是你自己 Mac 或 Windows 電腦上的對話。在 ChatGPT App 的 Codex 裡，你也可以選擇 Cloud 和一個環境來啟動雲端任務；它在 OpenAI 的雲端執行，電腦睡眠時也會繼續，但看不到你的本機檔案和瀏覽器登入狀態。你電腦上的對話無法轉交給 Codex cloud 環境。",
      },
      {
        q: "ChatGPT 遠端控制可以透過 SSH 使用嗎？",
        a: "可以，透過桌面應用程式。把伺服器加進 `~/.ssh/config`，在上面安裝 Codex 並登入，然後在 Settings > Connections 下加入它，再選一個遠端專案。你的手機連到執行應用程式的那台 Mac 或 Windows 電腦，由它在伺服器上執行對話，所以那台電腦必須一直開著。請看[在 VPS 上執行 Codex](/blog/codex-vps)。",
      },
    ],
  },
  cta: {
    title: "讓 Codex 在你離開時也繼續工作，而不只是在你查看時才回應。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 14 日對照 OpenAI 的 Codex 官方文件（遠端連線、手機版、Codex Cloud、CLI）查核。",
  disclaimer: "Crewmark 是獨立產品，與 OpenAI 無關，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標。",
};
