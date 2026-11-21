import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Linux 版：桌面應用程式、CLI 安裝與沙箱",
    description:
      "在 Linux 上安裝 Codex：支援 Ubuntu、Debian、Fedora 和 Arch 的 ChatGPT 桌面應用程式預覽版，或搭配 bubblewrap 的 CLI，另有 headless 登入和 SSH 主機。",
  },
  breadcrumb: "Linux 上的 Codex",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Codex",
    title: "Linux 上的 Codex：桌面應用程式預覽版、CLI，以及 Linux 還做不到的事",
    lead: "在 Linux 機器上執行 Codex 有兩種方式。內含 Codex 的 ChatGPT 桌面應用程式，從 2026 年 8 月起在 Linux 上推出預覽版，支援 x64 和 ARM64 上的 Ubuntu、Debian、Fedora 和 Arch。Codex CLI 一個指令就能安裝，並用 `bubblewrap` 作為沙箱。這篇指南介紹這兩種安裝方式、在 headless 伺服器上登入、Linux 目前還沒有的功能（Computer Use，以及用手機控制 Linux 主機）、Linux 機器如何仍然能當 Mac 或 Windows 電腦上桌面應用程式的 SSH 主機，以及 Codex cloud。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Linux 上該用哪種 Codex",
      points: [
        "ChatGPT 桌面應用程式（預覽版）：一個視窗，Codex 和 Chat、Work 並列。這就是 Linux 上的 Codex GUI。OpenAI 的指南涵蓋的是桌面版 Linux；在沒有桌面的伺服器上，請使用 CLI。",
        "Codex CLI：在終端機裡執行，可以在桌面上，也可以在透過 SSH 連線的 headless 伺服器上。",
        "IDE 外掛，支援 VS Code、Cursor 或 Windsurf，適合想留在編輯器裡的人。",
        "Codex cloud：任務在 OpenAI 的伺服器上執行，所以你自己的機器都不必一直開著。請看下方的 [Codex cloud](#cloud)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Linux 上安裝 Codex 桌面應用程式",
      steps: [
        {
          title: "確認你的發行版和架構",
          text: "預覽版支援 Ubuntu 24.04 LTS 和 26.04 LTS、Debian 13、Fedora 43 和 44，以及保持最新、完整更新的 Arch Linux。其他發行版或許能用，但沒有正式支援。套件提供 x64 和 ARM64 兩種：執行 `uname -m`；`x86_64` 代表 x64，`aarch64` 或 `arm64` 代表 ARM64。",
          code: "uname -m",
        },
        {
          title: "下載並安裝套件",
          text: `取得符合你發行版和架構的套件（見 [OpenAI 的 Linux App 指南](${linuxAppDocs})），從你儲存它的資料夾安裝。在 Arch 上，OpenAI 的安裝指令碼還會執行一次完整的系統升級。`,
          code: appInstall,
        },
        {
          title: "開啟它並選擇 Codex",
          text: "從應用程式選單開啟 ChatGPT，或在終端機裡執行 `chatgpt`，登入並選擇 Codex。在 Wayland 上，應用程式會在可用時使用 XWayland；原生 Wayland 支援仍是實驗性的，你可以用 `chatgpt --ozone-platform=wayland` 強制使用。",
        },
        {
          title: "保持更新",
          text: "更新透過你的套件管理員取得。",
          code: appUpdate,
        },
        {
          title: "讓長時間的對話繼續執行",
          text: "開啟 Settings > General > Prevent sleep while running（macOS 和 Linux 上都有），讓本機對話在你離開電腦時繼續進行。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，Linux 版 ChatGPT App（英文）", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "如何在 Linux 上安裝 Codex CLI",
      steps: [
        {
          title: "執行安裝指令碼",
          text: "同一個指令可以安裝和更新 Codex；如果已安裝的版本支援，`codex update` 也能套用更新。裝了 Node.js 的話，`npm install -g @openai/codex` 也可以。OpenAI 發布了 x86_64 和 aarch64 的 Linux 建置。",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "為沙箱安裝 bubblewrap",
          text: `Codex 的 Linux 沙箱需要 \`bubblewrap\`。PATH 上沒有 \`bwrap\` 時，Codex 會改用內建的輔助程式，它需要非特權使用者命名空間（unprivileged user namespaces），而且 Codex 啟動時會發出警告。在 Ubuntu 25.04 上，套件版的 bubblewrap 直接就能用；在 Ubuntu 24.04 上，可能要載入 \`bwrap-userns-restrict\` AppArmor 設定檔，警告才會消失（見 [OpenAI 的沙箱文件](${sandboxingDocs})）。`,
          code: bubblewrap,
        },
        {
          title: "登入",
          text: "執行 `codex`，選擇 Sign in with ChatGPT 來使用你的方案，或用 API 金鑰登入，依標準 API 費率計費。Codex cloud 需要用 ChatGPT 登入。登入後，`codex login status` 會以 0 結束。",
        },
        {
          title: "在 headless 伺服器上，用裝置代碼登入",
          text: "機器上沒有瀏覽器時，選擇 Sign in with Device Code，或執行 `codex login --device-auth`（beta）。裝置代碼登入必須先開啟，可以在你的 ChatGPT 安全性設定裡開啟，或由工作區管理員開啟。另外還有兩種方式：從瀏覽器登入成功的電腦複製 `~/.codex/auth.json`，並把這個檔案當成密碼一樣保管；或透過 SSH 轉送登入回呼，再在伺服器上執行 `codex login`。",
          code: headless,
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，Codex CLI（英文）", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Linux 上還沒有 Computer Use",
      text: [
        "Computer Use 讓 Codex 透過移動游標和打字來操作桌面應用程式。Linux 預覽版的桌面應用程式沒有這項功能；OpenAI 的 Linux 指南說，未來的版本會加入。目前它在 macOS 和 Windows 的桌面應用程式裡執行。",
      ],
      points: [
        "在終端機裡進行的工作仍然能在 Linux 上執行：Codex 在那裡執行指令、編輯檔案，都在它的 `bubblewrap` 沙箱裡。",
        "需要桌面應用程式的任務，請用 Mac 或 Windows 電腦。在 Windows 上，Computer Use 工作時會接管螢幕：請看 [Windows 上的 Codex](/blog/codex-windows)。想要一台一直開著的 Mac，請看[在 Mac mini 上執行 Codex](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "從 Mac 或 Windows 電腦上的桌面應用程式使用 Linux 機器",
      text: [
        "OpenAI 的遠端連線文件只把 Mac 和 Windows 電腦列為 ChatGPT 手機 App 能控制的主機，所以用手機控制 Linux 桌面應用程式並沒有文件說明。不過 Linux 機器仍然可以當 SSH 主機：Mac 或 Windows 電腦上的桌面應用程式開啟它上面的專案，Codex 在那裡執行指令、讀取檔案、寫入修改。接著你再透過那台 Mac 或 Windows 電腦，用手機操作它。",
      ],
      steps: [
        {
          title: "把 Linux 機器加進 SSH 設定",
          text: "在執行桌面應用程式的 Mac 或 Windows 電腦上，把主機加進 `~/.ssh/config`。Codex 會從這個檔案讀取具體的主機別名，忽略只有萬用字元樣式的項目。確認從那台電腦執行 `ssh devbox` 能連上。像對待任何 SSH 存取一樣對待它：使用信任的金鑰、權限最小的帳號，不要讓任何未經驗證的服務在公開網路上監聽；要連到你網路以外的機器，請用 VPN 或 mesh 網路工具。",
          code: sshConfig,
        },
        {
          title: "在 Linux 機器上安裝並登入 Codex",
          text: "應用程式透過 SSH，在遠端使用者的登入 shell 裡啟動遠端機器上的 Codex，所以 `codex` 必須在那裡的 PATH 上。用上面的指令碼安裝並登入；在 headless 伺服器上用 `codex login --device-auth`。",
        },
        {
          title: "在桌面應用程式裡加入主機",
          text: "進入 Settings > Connections，新增或啟用這台 SSH 主機，並選擇它上面的一個專案資料夾。當同一個 Git 儲存庫在兩邊都儲存為專案時，你可以從對話底部，在你的電腦和 Linux 主機之間轉交對話。",
        },
        {
          title: "用手機控制它",
          text: "照 [Codex 遠端控制](/blog/codex-remote-control)的說明，把手機和那台 Mac 或 Windows 電腦配對。手機連線的是那台電腦，它必須一直開著；Codex 則在 Linux 機器上工作。如果是租來的伺服器，請看[在 VPS 上執行 Codex](/blog/codex-vps)。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 文件，遠端連線（英文）", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "或讓 Codex cloud 執行任務",
      text: [
        `如果你完全不想讓機器一直開著，[Codex cloud](${cloudDocs}) 會在 OpenAI 的伺服器上執行任務。每個任務都有自己的工作空間，你的電腦睡眠時也會繼續進行。`,
      ],
      points: [
        "從網頁或桌面應用程式的 Work in > Cloud 啟動任務，或從 ChatGPT 手機 App 的 Codex 啟動。在 Linux 終端機裡，`codex cloud` 會開啟雲端對話的選擇清單，`codex cloud exec` 提交一個任務，`codex cloud list` 則列出最近的任務。",
        "它需要用 ChatGPT 登入，不能用 API 金鑰。OpenAI 的方案表把它列在 Plus、Pro、Business 和 Enterprise。",
        "雲端任務只看得到自己的雲端環境。你機器上的本機檔案、執行中的程序、瀏覽器登入狀態和 VPN 存取都不會帶過去，你電腦上的對話也無法轉交給它。",
        "需要可重複使用的設定時，在 Work in > Cloud > Select environment > Create environment 建立一個環境，可以開放完整的公開網際網路存取，或使用允許清單。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給 Linux 機器上的 Codex 一份固定工作",
      text: [
        "桌面應用程式、CLI 和 SSH 都會等你啟動下一個任務。Crewmark 把 Linux 機器上的一段 Codex 對話變成一位有職位、目標、工作時間和心跳的 AI 員工：在它的工作時間內，`crewmark` CLI（除了 macOS 和 Windows，也能在 Linux 上執行）會喚醒它，讓它從共用看板上領取下一個 issue。這台機器必須一直開著，而 Linux 伺服器本來就是如此。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如[軟體工程師](/ai-employees/software-engineer)，並寫下它的目標和 KPI。",
        },
        {
          title: "連接機器上的一段 Codex 對話",
          text: "透過 `crewmark` CLI，把 Linux 桌面或伺服器上的一段 Codex 對話綁定到這位員工。這段對話就成了這位員工。Claude Code 也可以。",
        },
        {
          title: "設定工作時間和心跳",
          text: "只排平日或每天都排，以你的時區為準，工作時間可以跨過午夜。在這段時間內，CLI 每 15、30、60、120 或 240 分鐘喚醒員工一次。請看[如何讓 Codex 主動工作](/proactive-codex)。",
        },
        {
          title: "從任何瀏覽器指派 issue",
          text: "在 crewmark.ai 的看板上建立並指派 issue；一指派，員工就會被喚醒。需要審查或決定時，它會把 issue 設為「Needs action」，並在那裡問你。可以交給它的工作，請看 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Linux 上安裝 ChatGPT 桌面應用程式並使用 Codex" },
  mid: {
    title: "想讓 Linux 上的 Codex 在你沒下提示詞時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒你的 Codex，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Linux 上有 Codex GUI 嗎？",
        a: "有。內含 Codex 的 ChatGPT 桌面應用程式已在 Linux 上推出預覽版，支援 x64 和 ARM64 上的 Ubuntu 24.04 和 26.04、Debian 13、Fedora 43 和 44，以及 Arch Linux。如果你想留在編輯器裡，Codex IDE 外掛可以在 VS Code、Cursor 和 Windsurf 裡使用。",
      },
      {
        q: "如何下載 Linux 版 Codex 桌面應用程式？",
        a: "依照 OpenAI 的 Linux App 指南，下載符合你架構的 .deb（Ubuntu、Debian）或 .rpm（Fedora）套件，然後用 `sudo apt install ./chatgpt_amd64.deb` 或 `sudo dnf install ./chatgpt.x86_64.rpm` 安裝；在 Arch 上，執行 OpenAI 的 `install-arch.sh` 指令碼。接著開啟 ChatGPT，或執行 `chatgpt`，然後選擇 Codex。",
      },
      {
        q: "如何在 Linux 上安裝 Codex CLI？",
        a: "執行 `curl -fsSL https://chatgpt.com/codex/install.sh | sh`，或 `npm install -g @openai/codex`。為沙箱安裝 `bubblewrap`（`sudo apt install bubblewrap` 或 `sudo dnf install bubblewrap`），然後執行 `codex` 並登入。",
      },
      {
        q: "Codex 的 Computer Use 能在 Linux 上使用嗎？",
        a: "還不行。Linux 預覽版的桌面應用程式沒有 Computer Use，OpenAI 表示未來的版本會加入。目前它可以在 macOS 和 Windows 的桌面應用程式裡使用。",
      },
      {
        q: "如何在 headless Linux 伺服器上登入 Codex？",
        a: "在你的 ChatGPT 安全性設定裡開啟裝置代碼登入（或請工作區管理員開啟），然後執行 `codex login --device-auth`，這項功能還在 beta。你也可以從已登入的電腦複製 `~/.codex/auth.json`，或用 `ssh -L 1455:localhost:1455 user@remote` 連線，再在伺服器上執行 `codex login`。",
      },
      {
        q: "可以用手機控制 Linux 上的 Codex 嗎？",
        a: "無法直接控制：OpenAI 的文件只把 Mac 和 Windows 電腦列為遠端控制主機。請在 Mac 或 Windows 電腦上的 ChatGPT 桌面應用程式裡把 Linux 機器加為 SSH 主機，再用手機上的 ChatGPT App 控制那台電腦；Codex 會在 Linux 機器上執行。",
      },
    ],
  },
  cta: {
    title: "讓 Linux 機器上的 Codex 開始工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 OpenAI 的 Codex 文件（Linux 版 ChatGPT App、CLI、登入、沙箱、Computer Use、遠端連線和 Codex cloud）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI 或本頁提及的任何公司皆無關聯，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標。",
};
