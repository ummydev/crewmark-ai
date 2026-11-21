import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Mac mini 設定：用手機操控、全天候執行",
    description:
      "在 Mac mini 上全天候執行 Codex：安裝 ChatGPT 桌面應用程式和 CLI、讓 Mac 保持喚醒、開啟遠端控制、配對手機，並加上 Computer Use。",
  },
  breadcrumb: "在 Mac mini 上執行 Codex",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Codex",
    title: "在 Mac mini 上跑 Codex：一台用手機操控、一直開著的主機",
    lead: "遠端控制讓你用手機上的 ChatGPT App 使用 Codex，但前提是執行它的電腦保持喚醒並連上網路。闔上筆電，手機就連不到它了。對於執行較久的工作，OpenAI 建議用一台專用、一直開著的 Mac，而家裡的 Mac mini 正好合適：它一直開著，把你的專案、登入狀態和工具留在你自己的機器上，還能執行 Computer Use 和瀏覽器任務。這篇指南說明如何在上面安裝 Codex、讓它保持喚醒、設定遠端控制、配對手機，以及從筆電連到它的桌面。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "為什麼用 Mac mini 當 Codex 主機",
      text: [
        "手機並不執行 Codex。它負責傳送提示詞、核准和後續訊息，其他一切都由主機提供：專案、對話、檔案、憑證、外掛、MCP 伺服器、技能、Computer Use、瀏覽器和本機工具。所以主機決定了 Codex 在手機上能做什麼，以及到底連不連得到。一台永不睡眠的 Mac mini 就是很好的主機：",
      ],
      points: [
        "它一直開著。主機一旦睡眠、斷網或關掉應用程式，遠端存取就會中斷，直到它恢復為止。",
        "Computer Use 和瀏覽器任務。ChatGPT 桌面應用程式在 macOS 和 Windows 上能執行 Computer Use；Linux 預覽版還沒有這項功能。在 Windows 上，Computer Use 會接管目前使用中的桌面，而且工作階段必須保持解鎖。Mac 則有鎖定使用（locked use），所以你從手機啟動的 Computer Use 任務在 Mac 鎖定後也能執行。",
        "iOS App。Xcode 和 iOS Simulator 只能在 macOS 上執行，所以如果 Codex 要開發 iPhone App，主機就得是 Mac。",
        "資料留在家裡。程式碼儲存庫、瀏覽器登入狀態和憑證都留在你自己的機器上；已登入的網站和桌面應用程式也能正常使用，因為主機連得到它們。",
        "也能當伺服器的基地。同一個桌面應用程式可以把 Linux 伺服器加為 SSH 主機，所以 Mac mini 可以是手機連線的那台一直開著的電腦，對話則在伺服器上執行。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "你需要準備什麼",
      points: [
        "一台可以一直開著、連上網路的 Mac mini。",
        "一個能使用 Codex 的 ChatGPT 帳號。OpenAI 的方案表把手機遠端控制列在 Plus、Pro、Business 和 Enterprise；使用 API 金鑰時無法使用。在 ChatGPT 工作區裡，可能需要管理員先開啟 Remote Control 存取權限。",
        "手機上最新版的 ChatGPT App（iOS 或 Android），登入和 Mac mini 相同的帳號和工作區。",
        "（選用）在 Mac mini 和筆電上安裝 Tailscale，讓你在任何地方都能連到 Mac mini 的桌面。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Mac mini 上設定 Codex",
      steps: [
        {
          title: "安裝 ChatGPT 桌面應用程式和 Codex CLI",
          text: "從 2026 年 7 月 9 日起，Codex 就在 ChatGPT 桌面應用程式裡，和 Chat、Work 並列。安裝 macOS 版應用程式，用你在手機上使用的帳號和工作區登入，然後選擇 Codex。Codex CLI 不是必需的，但用 SSH 連進去時很方便：用 OpenAI 的指令碼或 Homebrew 安裝，執行 `codex`，選擇 Sign in with ChatGPT。`codex app` 會開啟桌面應用程式，沒有安裝時也會幫你安裝。",
          code: install,
        },
        {
          title: "讓 Mac mini 保持喚醒",
          text: "在 System Settings > Energy 開啟「Prevent automatic sleeping when the display is off」，讓 Mac mini 在螢幕關閉時繼續運作；「Wake for network access」則讓它能為共享服務而喚醒（見 [Apple 的睡眠與喚醒設定說明](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)）。接著在桌面應用程式裡開啟 Settings > General > Prevent sleep while running，讓本機對話在你離開時繼續進行。",
        },
        {
          title: "開啟遠端控制",
          text: "在桌面應用程式裡開啟 Settings > Connections > Control this Mac or PC，選擇 Set up 或 Add。核准遠端存取並完成所需的驗證；應用程式會顯示一個 QR 碼。在 Settings > Connections 裡，你也可以選擇讓電腦保持喚醒、啟用 Computer Use、安裝 Chrome 擴充功能，以及管理已連線的裝置。",
        },
        {
          title: "配對手機",
          text: "用手機掃描 QR 碼，它會開啟 ChatGPT。確認帳號和工作區，如果有 MFA、SSO 或 passkey 驗證，也一併完成。之後 Mac mini 就會出現在 ChatGPT App 的 Codex 下方（舊版本裡叫 Remote），你可以在它的專案裡開始對話、核准指令、審查 diff。一個 QR 碼只配對一支手機和一台主機，所以每支要用的手機都要分別配對。如果也想從筆電控制它，就在筆電上使用 Settings > Connections > Control other devices（在有提供這個選項的情況下）。",
        },
        {
          title: "開啟 Computer Use 和 Chrome 擴充功能",
          text: "要執行瀏覽器和桌面任務，主機兩者都需要。選擇 Codex 後，開啟 Settings > Computer use，在 Control 下找到 Any App，選擇 Install 或打開開關；再從 Settings > Connections 安裝 Chrome 擴充功能。Computer Use 只在部分地區提供。想讓你從手機啟動的 Computer Use 任務在 Mac 鎖定時也能執行，就在 Settings > Computer Use 開啟鎖定使用（locked use）。它會安裝一個 Apple 授權外掛程式，只在 Computer Use 正在進行一輪工作時解鎖，而且只要有人使用 Mac mini 的鍵盤或游標，就會再次鎖定。",
        },
        {
          title: "如果程式碼在伺服器上，就加入 SSH 主機",
          text: "Settings > Connections 也可以從 `~/.ssh/config` 把 Linux 伺服器加為 SSH 主機，接著選擇它上面的一個專案資料夾。這個專案裡的對話在伺服器上執行，而你的手機仍然連到 Mac mini。設定方式請看[在 VPS 上執行 Codex](/blog/codex-vps)。",
        },
        {
          title: "用 Tailscale 和 Screen Sharing 連到 Mac mini 的桌面",
          text: "在 Mac mini 和筆電上安裝 Tailscale，把兩台都加入同一個 tailnet。tailnet 是一個私人網路，只有你的裝置能透過加密的 WireGuard 連線互相連線（見 [Tailscale 是什麼](https://tailscale.com/kb/1151/what-is-tailscale)）。在 Mac mini 上開啟 System Settings > General > Sharing > Screen Sharing；它不能和 Remote Management 同時開啟。然後從筆電連到 Mac mini 在 tailnet 上的名稱，就能登入網站、回應 Computer Use 無法核准的安全性或隱私權提示，或看著 Codex 工作（見 [Apple 的 Screen Sharing 說明](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)）。",
        },
      ],
      source: { label: "來源：OpenAI 的遠端連線文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "什麼讓它保持連線，什麼會讓它斷線",
      points: [
        "Mac mini 必須保持喚醒、連上網路，登入同一個帳號和工作區，並開著桌面應用程式。一旦睡眠、斷網或關掉應用程式，手機就連不到它，直到它恢復為止。你自己選擇睡眠也會中斷存取。",
        "登出桌面應用程式會關閉 Remote Control，但配對還在。重新登入後，再把 Remote Control 開啟。",
        "如果選擇 Add 後出現錯誤，就在 Mac mini 上重新啟動桌面應用程式，再試一次。2026 年 6 月 8 日以來沒用過的配對，需要把兩個 App 都更新並重新配對。",
        "遠端控制不會自己開始工作。任務完成後，Codex 會通知你，然後等你的下一個提示詞。排程任務和其他不需要你就能開始工作的方式，請看[主動工作的 Codex](/proactive-codex) 和 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        "更多解決方法請看 [Codex 遠端控制](/blog/codex-remote-control#troubleshooting)。",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "讓 Codex 保持連線的其他方式",
      points: [
        "把 Linux 伺服器當 SSH 主機，Codex 就在伺服器上執行；但手機連的仍然是執行桌面應用程式的 Mac 或 Windows 電腦，所以那台電腦也必須一直開著。Mac mini 就可以是那台電腦。請看[在 VPS 上執行 Codex](/blog/codex-vps)。",
        "Codex cloud 在 OpenAI 的雲端執行任務，你的電腦睡眠時也會繼續工作。它只看得到自己的雲端環境，所以你的本機檔案、瀏覽器登入狀態和 VPN 存取都不在那裡。",
        "如果用的是 Claude Code，同樣一直開著的 Mac mini 設定請看[在 Mac mini 上執行 Claude Code](/blog/claude-code-mac-mini)，Anthropic 版本的遠端控制則請看 [Claude Code Remote Control](/remote-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給這台一直開著的 Mac mini 一份固定工作",
      text: [
        "一直開著的 Mac mini 在你用手機傳訊息時隨時回應，你不傳時就等著。Crewmark 把它上面的一段 Codex 對話變成一位有職位、量化目標、工作時間和心跳的 AI 員工：工作時間內，`crewmark` CLI 會喚醒員工，讓它處理共用看板上自己的 issue。它所在的電腦必須一直開著，而 Mac mini 正是如此。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如軟體工程師或 SEO 專員，並寫下它的目標和 KPI。",
        },
        {
          title: "連接 Mac mini 上的 Codex",
          text: "把設定連結貼進 Mac mini 上的一段 Codex 對話。它會安裝 `crewmark` CLI，並把這段對話綁定到這位員工。Claude Code 也可以。",
        },
        {
          title: "設定工作時間和心跳",
          text: "選擇工作時段、只排平日或每天都排，以及員工多久醒來一次：每 15、30、60、120 或 240 分鐘。工作時間可以跨過午夜，所以在一台永不睡眠的機器上，夜班也行得通。每次喚醒都會送進同一段 Codex 對話，讓它從上次停下的地方繼續。",
        },
        {
          title: "指派 issue，並用手機和它對話",
          text: "在手機瀏覽器開啟 crewmark.ai，建立並指派 issue，或在員工的 Work log（工作紀錄）裡寫訊息給它；它會在那裡回覆。一指派 issue，員工就會馬上被喚醒；需要審查或決定時，它會把 issue 設為「Needs action」，並在那裡問你。可以交給它的工作，請看 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Mac mini 設定成一直開著的 Codex 主機" },
  mid: {
    title: "想讓 Mac mini 在你沒傳訊息時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒 Codex，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Codex 能在 Mac mini 上 24 小時執行嗎？",
        a: "可以，只要 Mac mini 保持喚醒、連上網路、已登入，並開著 ChatGPT 桌面應用程式。在 System Settings > Energy 開啟「Prevent automatic sleeping when the display is off」，在應用程式的 Settings > General 開啟「Prevent sleep while running」，再設定好遠端控制，就能用手機連到它。除非有其他東西啟動工作，否則 Codex 每完成一個任務，就會等你的下一個提示詞。",
      },
      {
        q: "如何在 Mac mini 上安裝 Codex？",
        a: "安裝 macOS 版 ChatGPT 桌面應用程式，在裡面選擇 Codex。想用終端機，就用 `curl -fsSL https://chatgpt.com/codex/install.sh | sh` 或 `brew install --cask codex` 安裝 Codex CLI，然後執行 `codex`，選擇 Sign in with ChatGPT。`codex app` 會開啟桌面應用程式，沒有安裝時也會幫你安裝。",
      },
      {
        q: "如何用 iPhone 使用 Mac mini 上的 Codex？",
        a: "在 Mac mini 的桌面應用程式裡開啟 Settings > Connections > Control this Mac or PC，選擇 Set up 或 Add，再用 iPhone 掃描 QR 碼。之後 Mac mini 就會出現在 ChatGPT App 的 Codex 下方，你可以在那裡開始對話、核准指令、審查 diff。Android 上的 ChatGPT App 也可以。",
      },
      {
        q: "在 Mac 上使用 Codex 的最低需求是什麼？",
        a: "就 Codex CLI 而言，OpenAI 在 GitHub 上的安裝指南列出 macOS 12 以上，最低 4 GB RAM，建議 8 GB。我們查核的 OpenAI 文件沒有另外列出 ChatGPT 桌面應用程式的需求。要使用遠端控制，你的帳號還需要有 Codex 存取權限，手機上也要有最新版的 ChatGPT App。",
      },
      {
        q: "Codex 遠端控制需要 Tailscale 嗎？",
        a: "不需要。遠端控制經過 OpenAI 的安全中繼站，所以 Mac mini 不會暴露在公開網際網路上。Tailscale 是用來連到 Mac mini 本身的，例如在外面用筆電透過 Screen Sharing 連到它的桌面，或用 SSH 連線；OpenAI 的文件建議用 VPN 或 mesh 網路來連到你網路以外的機器。",
      },
      {
        q: "Codex 該用 Mac mini 還是 Linux VPS？",
        a: "如果 Codex 只需要終端機，Linux 伺服器就夠了：CLI 能在 Linux 上執行，桌面應用程式也能透過 SSH 開啟它上面的專案。不過你的手機仍然連到執行桌面應用程式的 Mac 或 Windows 電腦，所以那台電腦無論如何都得開著。需要 Computer Use、透過 Chrome 擴充功能執行瀏覽器任務、開發 iOS，或想把檔案留在家裡，就選 Mac mini。請看[在 VPS 上執行 Codex](/blog/codex-vps)。",
      },
    ],
  },
  cta: {
    title: "給你的 Mac mini 一份工作。",
    text: "Crewmark 把 Codex 和 Claude Code 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 OpenAI 的文件（遠端連線、Computer Use、Codex CLI、設定、方案）、Apple 支援和 Tailscale 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenAI、Apple 或 Tailscale 無關，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標；Mac、Mac mini 和 Xcode 是 Apple 的商標。",
};
