import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex VPS 設定：安裝、登入並透過 SSH 連線",
    description:
      "在 Linux VPS 上安裝 Codex CLI、用裝置代碼登入，在 ChatGPT 桌面應用程式裡把伺服器加為 SSH 主機，並用手機連到它。",
  },
  breadcrumb: "在 VPS 上執行 Codex",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Codex",
    title: "在 VPS 上跑 Codex：安裝在 Linux 伺服器上，透過 SSH 連線",
    lead: "租來的 Linux 伺服器，也就是 VPS，永遠不會睡眠，而 Codex CLI 能在 Linux 上執行。要弄對的是怎麼用手機連到它：ChatGPT App 並不直接連到伺服器，而是連到 Mac 或 Windows 電腦上的 ChatGPT 桌面應用程式，再由這個應用程式透過 SSH 在伺服器上執行對話。這篇指南介紹如何在伺服器上安裝並登入 Codex、把它加為 SSH 主機、用手機控制它、只用終端機搭配 tmux 的做法、確保伺服器安全，以及不想自己架伺服器時可以用的 Codex cloud。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "VPS 上的 Codex 是怎麼運作的",
      text: ["這裡牽涉到三台機器，各有一個任務："],
      points: [
        "Linux 伺服器執行 Codex。它專案裡的對話在伺服器上執行指令、讀取檔案、寫入修改，用的是伺服器的相依套件、安全性政策和運算資源。桌面應用程式透過 SSH，在遠端使用者的登入 shell 裡啟動伺服器上的 Codex。",
        "一台 Mac 或 Windows 電腦執行 ChatGPT 桌面應用程式，由它維持 SSH 連線。它就是你的手機所連線的主機，所以它也必須保持喚醒並連上網路。",
        "你的手機執行 ChatGPT App，透過遠端控制操作那台主機。它負責傳送提示詞和核准，並顯示 diff、終端機輸出和通知。",
        "OpenAI 的文件只把 macOS 和 Windows 列為遠端控制主機，所以把手機直接和 Linux 伺服器配對並沒有文件說明。請改為把手機和那台 Mac 或 Windows 電腦配對，最好是[一台一直開著的 Mac mini](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "你需要準備什麼",
      points: [
        "一台能用 SSH 連線的 Linux 伺服器。Codex CLI 在 GitHub 上的安裝指南列出 Ubuntu 20.04+ 或 Debian 10+，最低 4 GB RAM，建議 8 GB；正式發布的版本提供 x86_64 和 ARM64 兩種建置。",
        "一台裝有 ChatGPT 桌面應用程式的 Mac 或 Windows 電腦，用來把伺服器加為 SSH 主機。如果想用手機連到伺服器，這台電腦就必須一直開著。",
        "一個用來使用 Codex 的 ChatGPT 帳號。OpenAI 的方案表把 SSH 遠端連線列在 Plus、Pro、Business、Enterprise 和 API 金鑰；手機遠端控制則列在 Plus、Pro、Business 和 Enterprise，不支援 API 金鑰。",
        "手機上的 ChatGPT App（iOS 或 Android）。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Linux VPS 上設定 Codex",
      steps: [
        {
          title: "租一台伺服器並確認 SSH",
          text: "建立一台 Linux 伺服器，確認你能從要執行桌面應用程式的那台 Mac 或 Windows 電腦用 SSH 登入。使用金鑰登入，以及只具備 Codex 所需權限的帳號，不要用 root。",
        },
        {
          title: "在伺服器上安裝 Codex CLI",
          text: "在伺服器上執行 OpenAI 的安裝指令碼；之後同一個指令也能更新它，用 npm 安裝也可以。為 Codex 的沙箱安裝 bubblewrap：PATH 上沒有 `bwrap` 時，Codex 會改用內建的輔助程式，它需要非特權使用者命名空間（unprivileged user namespaces），而且 Codex 啟動時會發出警告。在 Ubuntu 24.04 上，可能要載入 `bwrap-userns-restrict` AppArmor 設定檔，警告才會消失。",
          code: install,
        },
        {
          title: "在 headless 伺服器上登入",
          text: "伺服器沒有瀏覽器，所以使用裝置代碼登入：執行 `codex login --device-auth`，或選擇 Sign in with Device Code，再依照提示操作。這項功能還在 beta，而且必須先在 ChatGPT 的安全性設定裡開啟裝置代碼登入，或由工作區管理員開啟。如果無法使用，就用 `ssh -L 1455:localhost:1455` 轉送登入回呼，再在伺服器上執行 `codex login`；或從已登入的電腦複製 `~/.codex/auth.json`，並把這個檔案當成密碼一樣保管。",
          code: login,
        },
        {
          title: "把伺服器加進 SSH 設定",
          text: "在 Mac 或 Windows 電腦上，於 `~/.ssh/config` 加入一筆 Host 項目，並確認 `ssh devbox` 能連上。Codex 會從這個檔案讀取具體的主機別名，忽略只有萬用字元樣式的項目。桌面應用程式在遠端使用者的登入 shell 裡啟動 Codex，所以 `codex` 必須在那裡的 PATH 上。",
          code: ssh,
        },
        {
          title: "在桌面應用程式裡把它加為 SSH 主機",
          text: "在 ChatGPT 桌面應用程式裡開啟 Settings > Connections，新增或啟用這台 SSH 主機，然後選擇伺服器上的一個專案資料夾。這個專案裡的對話會在伺服器上執行指令、讀取檔案、寫入修改。",
        },
        {
          title: "用手機控制它",
          text: "在同一台 Mac 或 Windows 電腦上開啟 Settings > Connections > Control this Mac or PC，選擇 Set up 或 Add，再用 ChatGPT App 掃描 QR 碼。在手機上開啟 Codex，選擇那台電腦和伺服器上的專案，開始一段對話。對話透過那台 Mac 或 Windows 電腦在伺服器上執行，所以要讓那台電腦保持喚醒並連上網路；[家裡的 Mac mini](/blog/codex-mac-mini) 就能做這件事。設定細節和解決方法請看 [Codex 遠端控制](/blog/codex-remote-control)。",
        },
      ],
      source: { label: "來源：OpenAI 的遠端連線與 SSH 主機文件（英文）", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "只用終端機：透過 SSH 在 tmux 裡執行 Codex CLI",
      text: [
        "如果你只需要終端機，可以不用桌面應用程式。用 SSH 連進伺服器，在 tmux 裡執行 Codex CLI，再卸離（detach）：中斷連線後 Codex 仍會繼續執行，你可以從任何能用 SSH 連進來的電腦重新接上。",
      ],
      steps: [
        {
          title: "在 tmux 裡啟動 Codex",
          text: "如果還沒有 tmux，就從發行版的套件安裝，接著啟動一個工作階段，並在專案資料夾裡執行 `codex`。",
          code: tmux,
        },
        {
          title: "了解它做不到的事",
          text: "這種做法沒有連到你的手機。OpenAI 表示，手機設定要從桌面應用程式開始，無法從 CLI 設定。CLI 有一個實驗性的 `codex remote-control` 指令，文件把它和受管理的遠端控制用戶端及 SSH 工作流程連在一起，但沒有說明如何把手機和只執行 CLI 的伺服器配對。",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "確保伺服器安全",
      points: [
        "像對待任何 SSH 伺服器一樣對待它：使用信任的金鑰、權限最小的帳號，不要讓任何未經驗證的服務在公開網際網路上監聽。",
        "不要把 Codex 的 app server 暴露出去。`codex app-server --listen` 和 `codex --remote` 主要用於開發和除錯，OpenAI 也警告不要在共用或公開網路上開放 app-server 的傳輸通道。",
        "要從伺服器所在網路以外連到它，請用 VPN 或 Tailscale 這類 mesh 網路，它只透過加密的 WireGuard 連線把你自己的裝置連在一起。",
        "保管好 `~/.codex/auth.json`；OpenAI 說要把它當成密碼對待。",
        "沙箱設定、安全控制和核准機制在伺服器上的對話中照樣生效，和在本機一樣；Linux 上的沙箱需要 bubblewrap。",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "在你的電腦和伺服器之間移動對話",
      text: [
        "桌面應用程式可以把一段對話連同它的 Git 狀態，在你的電腦和已連線的 SSH 主機之間轉交。兩邊都需要一個對應同一個 Git 儲存庫的已儲存專案。在對話底部選擇它目前的執行位置，選擇目的地主機（This computer 會把它帶回來），檢查後選擇 Hand off。Codex 會在那裡建立或重複使用一個 worktree。仍在產生中的回應會被中斷，而且對話無法轉交給 Codex cloud。",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "完全不用伺服器：Codex cloud",
      points: [
        "Codex cloud 在 OpenAI 的雲端執行程式開發任務。每個任務都有自己的工作空間，你的電腦睡眠時也會繼續工作。",
        "可以從網頁、桌面應用程式（Work in > Cloud）或手機上的 ChatGPT App（開啟 Codex，選擇 Cloud 和一個環境）啟動。使用預設環境時，不必選擇程式碼儲存庫就能開始，Codex 也能從你連結的 GitHub 或 GitLab 帳號簽出儲存庫。",
        "雲端任務只看得到自己的雲端環境：你的本機檔案、執行中的程序、瀏覽器登入狀態和 VPN 存取都不會帶過去。可重複使用的設定放在 Work in > Cloud > Select environment > Create environment。",
        "它需要用 ChatGPT 登入，不能用 API 金鑰。在終端機裡，`codex cloud` 會開啟你雲端對話的選擇清單，`codex cloud exec` 則提交一個任務。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mac mini 主機、Linux SSH 主機還是 Codex cloud",
      headers: ["", "Mac mini 主機", "Linux SSH 主機", "Codex cloud"],
      rows: [
        ["Codex 在哪裡執行", "在 Mac mini 上，於 ChatGPT 桌面應用程式裡", "在伺服器上；由 Mac 或 Windows 電腦上的桌面應用程式透過 SSH 啟動", "在 OpenAI 的雲端，每個任務一個工作空間"],
        ["手機連到哪裡", "Mac mini", "執行桌面應用程式的 Mac 或 Windows 電腦", "OpenAI 的雲端：開啟 Codex，選擇 Cloud"],
        ["什麼必須一直開著", "Mac mini", "伺服器，以及那台 Mac 或 Windows 電腦", "你自己的機器都不用"],
        ["檔案、登入狀態和 VPN", "Mac mini 上的一切", "伺服器上有的東西", "只有雲端環境；本機檔案、瀏覽器登入狀態和 VPN 存取都不會帶過去"],
        ["適合", "Computer Use 和透過 Chrome 擴充功能執行的瀏覽器任務、iOS 開發、把檔案留在家裡", "在伺服器上做終端機工作，用它的運算資源和相依套件", "只需要程式碼儲存庫的程式開發任務"],
        ["方案（OpenAI 的方案表）", "手機遠端控制：Plus、Pro、Business、Enterprise", "SSH 連線：上述方案和 API 金鑰；用手機控制主機仍然需要上述其中一種方案", "Plus、Pro、Business、Enterprise；不支援 API 金鑰"],
        ["設定", "桌面應用程式、保持喚醒的設定、遠端控制", "伺服器上的 CLI、SSH 設定、桌面應用程式裡的 SSH 主機", "選擇或建立一個雲端環境"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給這台伺服器一份固定工作",
      text: [
        "永不睡眠的伺服器仍然會等你的下一個提示詞。Crewmark 把它上面的一段 Codex 對話變成一位有職位、量化目標、工作時間和心跳的 AI 員工：工作時間內，`crewmark` CLI（除了 macOS 和 Windows，也能在 Linux 上執行）會喚醒員工，讓它處理共用看板上自己的 issue。它所在的電腦必須一直開著，而 VPS 正是如此。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如軟體工程師或 SEO 專員，並寫下它的目標和 KPI。",
        },
        {
          title: "連接伺服器上的 Codex",
          text: "把設定連結貼進伺服器上的一段 Codex 對話。它會安裝 `crewmark` CLI，並把這段對話綁定到這位員工。Claude Code 也可以；請看[在 VPS 上執行 Claude Code](/blog/claude-code-vps)。",
        },
        {
          title: "設定工作時間和心跳",
          text: "只排平日或每天都排、可以跨過午夜的工作時間，以及每 15、30、60、120 或 240 分鐘喚醒一次。每次喚醒都會送進同一段 Codex 對話，讓它從上次停下的地方繼續。Codex 自己的排程選項，在[主動工作的 Codex](/proactive-codex) 裡有比較。",
        },
        {
          title: "指派 issue，並用手機和它對話",
          text: "在手機瀏覽器開啟 crewmark.ai，建立並指派 issue，或在員工的 Work log（工作紀錄）裡寫訊息給它；訊息會送到伺服器上的那段 Codex 對話，它也會在那裡回覆。一指派 issue，員工就會馬上被喚醒；需要審查或決定時，它會把 issue 設為「Needs action」，並在那裡問你。可以交給它的工作，請看 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Linux VPS 設定成 Codex 的 SSH 主機" },
  mid: {
    title: "想讓伺服器在你沒下提示詞時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒 Codex，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "可以在 VPS 上執行 Codex 嗎？",
        a: "可以。Codex CLI 能在 Linux 上執行：用 `curl -fsSL https://chatgpt.com/codex/install.sh | sh` 安裝，用 `codex login --device-auth` 登入，然後透過 SSH 在 tmux 裡使用它，或在 Mac 或 Windows 電腦上的 ChatGPT 桌面應用程式裡把伺服器加為 SSH 主機，再用手機控制這個應用程式。",
      },
      {
        q: "沒有瀏覽器時，如何在 VPS 上登入 Codex？",
        a: "執行 `codex login --device-auth`，或選擇 Sign in with Device Code，再依照提示操作。這項功能還在 beta，必須先在 ChatGPT 的安全性設定裡開啟，或由工作區管理員開啟。不然的話，就用 `ssh -L 1455:localhost:1455 user@server` 轉送回呼，在伺服器上執行 `codex login`，或從已登入的電腦複製 `~/.codex/auth.json`。",
      },
      {
        q: "如何把 Codex 連到 VPS？",
        a: "在執行 ChatGPT 桌面應用程式的 Mac 或 Windows 電腦上，把伺服器加進 `~/.ssh/config`，並確認 `ssh <alias>` 能連上。確定 `codex` 已安裝、已登入，並在遠端使用者登入 shell 的 PATH 上，然後在 Settings > Connections 加入這台主機，再選擇一個遠端專案資料夾。",
      },
      {
        q: "可以用手機控制 VPS 上的 Codex 嗎？",
        a: "可以，透過一台 Mac 或 Windows 電腦。你的手機控制那台電腦上的 ChatGPT 桌面應用程式，應用程式再透過 SSH 在伺服器上執行對話，所以那台電腦必須保持喚醒並連上網路。OpenAI 沒有說明如何把手機直接和 Linux 伺服器配對，或只和 CLI 配對。",
      },
      {
        q: "ChatGPT 桌面應用程式能在 Linux 伺服器上執行嗎？",
        a: "Linux 版 ChatGPT 桌面應用程式已推出預覽版，支援桌面版的 Ubuntu、Debian、Fedora 和 Arch Linux，目前還沒有 Computer Use。OpenAI 的文件沒有涵蓋沒有桌面環境的伺服器，Linux 也沒有被列為遠端控制主機。在 VPS 上，請使用 Codex CLI。",
      },
      {
        q: "在 VPS 上執行 Codex 安全嗎？",
        a: "像對待任何 SSH 伺服器一樣對待它：使用金鑰登入、權限最小的帳號，不要有未經驗證的公開監聽服務。不要在公開網路上暴露 Codex 的 app server，從外部連到伺服器時使用 VPN 或 mesh 網路，保管好 `~/.codex/auth.json`，並安裝 bubblewrap 讓沙箱能運作。",
      },
    ],
  },
  cta: {
    title: "讓你的伺服器開始工作。",
    text: "Crewmark 把 Codex 和 Claude Code 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 OpenAI 的文件（遠端連線、Codex CLI、驗證、沙箱、Linux 版應用程式、Codex cloud、方案）、GitHub 上的 Codex README 和安裝指南，以及 Tailscale 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI 或本頁提及的任何公司皆無關聯，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標。",
};
