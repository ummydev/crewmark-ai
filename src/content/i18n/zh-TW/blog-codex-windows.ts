import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Windows 版：App、CLI 安裝、沙箱與 WSL2",
    description:
      "在 ChatGPT App 裡下載 Windows 版 Codex 或安裝 CLI，在 PowerShell 搭配 Windows 沙箱或在 WSL2 裡執行，並修正沙箱設定失敗。",
  },
  breadcrumb: "Windows 上的 Codex",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Codex",
    title: "Windows 上的 Codex：安裝 App 或 CLI，再選擇沙箱或 WSL2",
    lead: "Codex 能在 Windows 上原生執行。從 2026 年 7 月 9 日起，Codex App 成為 ChatGPT 桌面應用程式的一部分，所以你安裝 ChatGPT，再在裡面切換到 Codex；想用終端機，Codex CLI 用一個 PowerShell 指令就能安裝。預設情況下，agent 在 PowerShell 裡、於 Windows 沙箱中執行，你也可以改成在 WSL2 裡執行。這篇指南介紹下載和安裝、三種沙箱類型及各自需要的 Windows 版本、沙箱設定失敗時文件記載的解決方法、Computer Use，以及如何用手機控制 Windows 電腦。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Windows 上該安裝哪種 Codex",
      points: [
        "想要一個視窗，就用 ChatGPT 桌面應用程式。Codex 有自己的程式開發畫面，和 Chat、Work 並列，提供 worktree、排程任務、Git、內建瀏覽器、檔案預覽、外掛和技能。這個應用程式在所有 ChatGPT 方案都能使用，包括 Free。",
        "如果你在終端機工作，就用 Codex CLI。它可以用 PowerShell 指令碼原生安裝，也可以用 npm 安裝。",
        "如果你在編輯器裡工作，就用 IDE 外掛。OpenAI 把它和 App、CLI 並列為在 Windows 上原生使用 Codex 的方式。",
        "建議使用 Windows 11。較新且完整更新的 Windows 10 也有支援，但不保證，需要 1809 以上版本（為了 ConPTY）；不建議使用更舊的 Windows 10。系統上應該要有 `winget`。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Windows 上下載並安裝 Codex",
      steps: [
        {
          title: "下載 ChatGPT 桌面應用程式",
          text: "從 [OpenAI 的 Windows App 頁面](https://learn.chatgpt.com/docs/windows/windows-app)上的 Microsoft Store 連結取得，或在 PowerShell 裡用 winget 安裝。開啟 ChatGPT，登入並選擇 Codex。",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "或安裝 Codex CLI",
          text: "開啟一個新的 PowerShell 視窗，執行 OpenAI 的安裝程式；再執行一次就能更新 Codex。如果裝了 Node.js，也可以改用 npm。在 CLI 裡，`codex app` 會開啟桌面應用程式（需要時會先安裝），`/app` 則把目前的工作階段移到應用程式裡。",
          code: cliInstall,
        },
        {
          title: "登入",
          text: "第一次執行時，選擇 Sign in with ChatGPT 來使用你的方案，或用 API 金鑰登入，依標準 API 費率計費。Codex cloud 需要用 ChatGPT 登入。登入後，`codex login status` 會以 0 結束。",
        },
        {
          title: "安裝 Codex 會呼叫的工具",
          text: "Codex 使用電腦上已安裝的工具。OpenAI 建議用 winget 安裝 Git、Node.js、Python、.NET SDK 和 GitHub CLI，然後登入 GitHub。",
          code: tools,
        },
        {
          title: "選擇 agent 在哪裡執行",
          text: "預設情況下，agent 在 PowerShell 裡原生執行，並受 Windows 沙箱保護。想改在 WSL2 裡執行，就開啟 Settings，把 agent 從 Windows native 切換為 WSL，然後重新啟動應用程式。不論哪種模式，都要在輸入框下方選擇 Ask for approval，才能獲得沙箱保護。需要系統管理員權限的指令，請用 Run as administrator 啟動應用程式，agent 會繼承這個權限。整合式終端機可以是 PowerShell、Command Prompt、Git Bash 或 WSL。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，Windows App（英文）", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "原生 PowerShell 還是 WSL2？",
      text: [
        "OpenAI 的建議是預設使用原生沙箱；需要 Linux 原生工具、本來就在 WSL2 裡工作，或原生選項不適合你的環境時，再選 WSL2。WSL1 已不再支援：它一直到 Codex 0.114 都能用，從 0.115 起 Linux 沙箱改用 `bubblewrap`，WSL1 的支援也隨之結束。",
      ],
      headers: ["", "原生（PowerShell）", "WSL2"],
      rows: [
        ["沙箱", "Windows 沙箱：MXC、elevated 或 unelevated", "Linux 沙箱，需要 `bubblewrap`"],
        ["安裝 CLI", "PowerShell 安裝程式或 npm", "在以系統管理員身分執行的 PowerShell 裡執行 `wsl --install`，再在 WSL 裡執行 Linux 安裝指令碼"],
        ["在桌面應用程式裡", "預設", "Settings：把 agent 切換為 WSL，然後重新啟動應用程式"],
        ["專案放在哪裡", "放在 Windows 磁碟機上；WSL 可以透過 `/mnt/<drive>/...` 存取", "為了速度，放在 Linux 家目錄下，例如 `~/code`，而不是 `/mnt/c`"],
        ["Codex home", "`%USERPROFILE%\\.codex`", "Linux 家目錄，除非你把 `CODEX_HOME` 指向 Windows 的資料夾"],
        ["什麼時候選它", "預設", "需要 Linux 原生工具，或工作流程本來就在 WSL2 裡"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "如何在 WSL2 裡執行 Codex",
      steps: [
        {
          title: "安裝 WSL2，並在裡面安裝 Codex",
          text: "在以系統管理員身分執行的 PowerShell 裡執行 `wsl --install`，再執行 `wsl` 開啟 Linux shell。在裡面為沙箱安裝 `bubblewrap`（`sudo apt install bubblewrap` 或 `sudo dnf install bubblewrap`），執行 Linux 安裝指令碼，然後啟動 `codex`。",
          code: wslInstall,
        },
        {
          title: "把程式碼儲存庫放在 Linux 家目錄",
          text: "複製到像 `~/code` 這樣的資料夾，而不是 `/mnt/c` 底下，後者比較慢。如果 WSL 裡的 VS Code 找不到 Codex，就用 `which codex` 確認它在哪裡。",
        },
        {
          title: "和 Windows App 共用設定",
          text: "Windows App 把它的 Codex home 放在 `%USERPROFILE%\\.codex`，而 WSL 裡的 CLI 使用 Linux 家目錄。想共用同一個，就在 WSL 裡把 `CODEX_HOME` 設為 Windows 的那個資料夾。",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "在桌面應用程式裡開啟 WSL 專案",
          text: "選擇 Add new project（或按 Ctrl+O），輸入 `\\\\wsl$\\`。如果 agent 維持原生執行，把專案放在 Windows 磁碟機上、再從 WSL 透過 `/mnt/<drive>/...` 存取，會比較可靠。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，Windows 與 WSL（英文）", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Codex Windows 沙箱：MXC、elevated 和 unelevated",
      text: [
        "Windows 沙箱讓 Codex 能在 PowerShell 裡原生執行，不需要 WSL 或虛擬機器，同時限制它的指令和子程序在磁碟和網路上能存取什麼。它有三種實作。對於支援的裝置上的消費者帳號，桌面應用程式會自動選擇 MXC。",
      ],
      headers: ["沙箱", "運作方式", "設定", "Windows 版本"],
      rows: [
        [
          "`mxc`（建議）",
          "Microsoft Execution Containers",
          "不需要管理員核准的設定、不需要額外的 Windows 帳號、不需要防火牆規則",
          "Windows 11 24H2（組建 26100.9278）或 25H2（組建 26200.9278）；Microsoft 仍在逐步推送到 Windows 11",
        ],
        [
          "`elevated`（舊版，優先使用的備援）",
          "專用的低權限沙箱使用者和防火牆規則；沙箱中的指令不以系統管理員權限執行",
          "需要管理員核准它的設定",
          "文件沒有另外列出需求；適用一般指引（建議 Windows 11，Windows 10 1809 以上不保證）",
        ],
        [
          "`unelevated`（舊版備援）",
          "網路隔離較弱，也沒有禁止讀取的路徑",
          "舊版沙箱設定失敗時，文件建議用它當權宜之計",
          "文件沒有另外列出需求；適用同樣的一般指引",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Codex Windows 沙箱設定",
      steps: [
        {
          title: "確認 MXC 能不能在你的電腦上運作",
          text: "使用 Codex CLI 0.162.0 以上版本，執行這個測試。它應該會印出 `MXC_OK`，並以代碼 0 結束。",
          code: mxcTest,
        },
        {
          title: "在 CLI 裡優先使用 MXC",
          text: "桌面應用程式已經對消費者帳號優先使用 MXC。在 CLI 裡，或在企業環境中，請在 Codex home 的 `config.toml` 裡開啟它。",
          code: preferMxc,
        },
        {
          title: "或選擇舊版沙箱",
          text: "無法使用 MXC 時，設定為 `elevated`，最後的備援則是 `unelevated`。elevated 沙箱需要管理員核准它的設定。在 CLI 裡，`/setup-default-sandbox` 指令會執行這項設定；它只會在 Windows 上、Codex 處於降級的 restricted-token 沙箱時出現。",
          code: legacy,
        },
        {
          title: "或讓 IT 事先設定好",
          text: "系統管理員可以為其他使用者佈建 elevated 沙箱。之後要移除舊版沙箱，請以系統管理員身分執行 `codex sandbox uninstall`。",
          code: provision,
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，Windows 沙箱（英文）", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex Windows 沙箱設定失敗？文件記載的解決方法",
      text: [
        `OpenAI 的 [Windows 沙箱頁面](${sandboxDocs})有一份疑難排解清單。以下是它涵蓋的內容，沿用文件本身的標題。`,
      ],
      points: [
        "「My legacy sandbox setup failed」：常見原因是 UAC 或管理員提示被拒絕、某項政策禁止建立本機使用者和群組、修改防火牆或給予沙箱使用者登入權限，或其他政策。請重試並核准提示、詢問 IT，或在這段期間改用 `unelevated` 沙箱。",
        "「I see Windows error 1385」：Windows 拒絕給予沙箱使用者它需要的登入類型。沙箱使用者的登入權限是政策可能封鎖的項目之一，所以在受管理的電腦上，請詢問 IT。MXC 不會建立額外的 Windows 帳號，所以在 Windows 11 24H2 或 25H2 上，它不依賴沙箱使用者。",
        "「Codex switched me to the unelevated sandbox」、「Codex warns that some folders are writable by Everyone」、「Sandboxed commands cannot reach the network」和「Sandboxing worked before and then stopped」在那個頁面上各有自己的條目。",
        "要診斷問題，請查看 `CODEX_HOME/.sandbox/sandbox.log`。絕對不要把 `CODEX_HOME/.sandbox-secrets/` 資料夾傳給任何人。",
        "在搜尋「setup didn't finish」嗎？OpenAI 的文件沒有用這個字眼的條目。最接近的文件記載案例是「My legacy sandbox setup failed」。",
        "如果 PowerShell 無法執行 npm，並顯示 `npm.ps1 cannot be loaded because running scripts is disabled on this system.`，常見的解決方法是 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`。",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Windows 上的 Computer Use 會接管螢幕",
      text: [
        "Computer Use 讓 Codex 透過移動游標和打字來操作桌面應用程式。在桌面應用程式裡，它在 macOS 和 Windows 上提供，搭配 ChatGPT Work 和 Codex 使用，限支援的地區。要開啟它，請開啟 Settings > Computer use，在 Control 下找到 Any App，選擇 Install 或打開開關。",
      ],
      points: [
        "它在目前使用中的桌面上執行，無法在背景運作。任務執行時，它會移動游標、打字，並把視窗帶到最前面，所以你無法同時使用這台電腦。",
        "要讓它在你離開時工作，就讓電腦保持解鎖並連上網路，再用[遠端控制](/blog/codex-remote-control)從手機查看；或在 Windows 虛擬機器裡執行桌面應用程式，讓 Computer Use 接管的是虛擬機器，而不是你的螢幕。",
        "鎖定使用（locked use）讓任務在電腦鎖定後繼續執行，但只支援 macOS。",
        '想保存對應用程式的核准，就在 `$CODEX_HOME/config.toml` 的 `[computer_use.windows]` 底下列出這些應用程式，例如 `always_allowed_app_ids = ["mspaint.exe"]`。',
        "在所有系統上，Computer Use 都無法自動操作終端機應用程式或 ChatGPT 本身、以系統管理員身分登入，或核准安全性和隱私權提示。",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "用手機控制 Windows 電腦上的 Codex",
      text: [
        "和 Mac 一樣，Windows 電腦也能當遠端控制主機。手機上的 ChatGPT App 負責傳送提示詞和核准；電腦則用它自己的專案、檔案、憑證和工具執行指令。完整的設定和解決方法請看 [Codex 遠端控制](/blog/codex-remote-control)。",
      ],
      points: [
        "在電腦上開啟 ChatGPT 桌面應用程式，進入 Settings > Connections > Control this Mac or PC，然後選擇 Set up 或 Add。用手機（iOS 或 Android）掃描 QR 碼。",
        "之後這台電腦就會出現在 ChatGPT App 的 Codex 下方。舊版 App 裡叫 Remote。",
        "讓電腦保持喚醒、連上網路、已登入，並執行著桌面應用程式；一旦睡眠或斷網，遠端存取就會中斷，直到它恢復為止。用到 Computer Use 的任務，要讓 Windows 工作階段保持解鎖。",
        "OpenAI 的方案表把手機遠端控制列在 Plus、Pro、Business 和 Enterprise，不支援用 API 金鑰登入。在 ChatGPT 工作區裡，可能需要管理員先開啟 Remote Control 存取權限。",
        "這台電腦也能開啟 Linux 伺服器上的專案（把伺服器當作 SSH 主機），讓你的手機透過電腦操作伺服器上的 Codex。請看[在 VPS 上執行 Codex](/blog/codex-vps) 和 [Linux 上的 Codex](/blog/codex-linux)。想改用一台一直開著的 Mac，請看[在 Mac mini 上執行 Codex](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給電腦上的 Codex 一份固定工作",
      text: [
        "遠端控制和 Computer Use 仍然要等你啟動每個任務。Crewmark 把 Windows 電腦上的一段 Codex 對話變成一位有職位、目標、工作時間和心跳的 AI 員工：在它的工作時間內，`crewmark` CLI（除了 macOS 和 Linux，也能在 Windows 上執行）會喚醒它，讓它從共用看板上領取下一個 issue。為此，這台電腦必須一直開著。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如[軟體工程師](/ai-employees/software-engineer)，並寫下它的目標和 KPI。",
        },
        {
          title: "連接電腦上的一段 Codex 對話",
          text: "透過 `crewmark` CLI，把電腦上的一段 Codex 對話綁定到這位員工。這段對話就成了這位員工。Claude Code 也可以。",
        },
        {
          title: "設定工作時間和心跳",
          text: "只排平日或每天都排，以你的時區為準，工作時間可以跨過午夜。在這段時間內，CLI 每 15、30、60、120 或 240 分鐘喚醒員工一次。請看 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        },
        {
          title: "從任何地方指派 issue",
          text: "用任何瀏覽器在 crewmark.ai 的看板上建立並指派 issue；一指派，員工就會被喚醒。需要審查或決定時，它會把 issue 設為「Needs action」，並在那裡問你。可以交給它的工作，請看 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Windows 上下載並安裝 Codex" },
  mid: {
    title: "想讓電腦上的 Codex 在你沒下提示詞時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒你的 Codex，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "如何在 Windows 上下載 Codex App？",
        a: "Codex 是 ChatGPT 桌面應用程式的一部分。從 OpenAI 的 Windows App 頁面上的 Microsoft Store 連結安裝，或在 PowerShell 裡執行 `winget install --id 9PLM9XGG6VKS -s msstore`，然後開啟 ChatGPT 並選擇 Codex。這個應用程式在所有 ChatGPT 方案都能使用，包括 Free。",
      },
      {
        q: "如何在 Windows 上安裝 Codex CLI？",
        a: '開啟一個新的 PowerShell 視窗，執行 `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`；如果有 Node.js，也可以執行 `npm install -g @openai/codex`。接著執行 `codex`，用 ChatGPT 或 API 金鑰登入。再執行一次安裝程式就能更新 Codex。',
      },
      {
        q: "Windows 上的 Codex 需要 WSL 嗎？",
        a: "不需要。Codex 在 PowerShell 裡原生執行，受 Windows 沙箱保護，桌面應用程式、CLI 和 IDE 外掛都是如此。WSL2 是選用的，適合需要 Linux 原生工具，或工作流程本來就在 WSL2 裡的情況。從 Codex 0.115 起不再支援 WSL1。",
      },
      {
        q: "Codex Windows 沙箱是什麼？",
        a: "它在 Codex 的指令於 Windows 上原生執行時，限制這些指令在磁碟和網路上能存取什麼。MXC 是建議的實作，需要 Windows 11 24H2 或 25H2；`elevated` 和 `unelevated` 是舊版備援。對於支援的裝置上的消費者帳號，桌面應用程式會自動選擇 MXC。",
      },
      {
        q: "Codex Windows 沙箱設定為什麼會失敗？",
        a: "OpenAI 的文件裡沒有「setup didn't finish」這則訊息。對於舊版沙箱設定失敗，文件列出的原因是 UAC 或管理員提示被拒絕，或某項政策封鎖了本機使用者和群組、防火牆變更或沙箱使用者的登入權限。請重試並核准提示、詢問 IT，或在這段期間改用 `unelevated`。Windows error 1385 表示沙箱使用者被拒絕了它需要的登入類型。",
      },
      {
        q: "可以用手機控制 Windows 電腦上的 Codex 嗎？",
        a: "可以。在電腦上的 ChatGPT 桌面應用程式裡進入 Settings > Connections > Control this Mac or PC，用 iOS 或 Android 上的 ChatGPT App 掃描 QR 碼，並讓電腦保持喚醒、連上網路、已登入。用到 Computer Use 的任務，要讓它保持解鎖。",
      },
    ],
  },
  cta: {
    title: "讓電腦上的 Codex 開始工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 OpenAI 的 Codex 文件（Windows App、Windows 沙箱、WSL、CLI、登入、Computer Use 和遠端連線）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI、Microsoft 或本頁提及的任何公司皆無關聯，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標；Windows 是 Microsoft 的商標。",
};
