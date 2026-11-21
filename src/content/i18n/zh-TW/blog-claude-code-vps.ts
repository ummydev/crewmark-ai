import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code VPS 設定：在 Linux 伺服器上全天候執行",
    description:
      "在 Linux VPS 或 Ubuntu 伺服器上安裝 Claude Code，以伺服器模式執行 Remote Control，用 tmux 讓它持續執行、用手機操控，以及它的限制。",
  },
  breadcrumb: "在 VPS 上執行 Claude Code",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "在 VPS 上跑 Claude Code：在 Linux 伺服器上執行，用手機操控",
    lead: "Remote Control 讓你用手機上的 Claude App 操控 Claude Code，但前提是執行它的電腦開著。租來的 Linux 伺服器，也就是 VPS，是不會關機的。在上面安裝 Claude Code，以伺服器模式執行 Remote Control，你在哪裡都能用手機開啟它的工作階段。這篇指南介紹在 Ubuntu、Debian 或其他任何發行版上的設定方式、如何讓它持續執行、如何加上桌面以便登入網站，以及和[家裡的 Mac mini](/blog/claude-code-mac-mini) 相比，Linux 伺服器做不到什麼。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "你需要準備什麼",
      points: [
        "一台能用 SSH 連線的 Linux 伺服器，來自 DigitalOcean 或 OVHcloud 等供應商。Claude Code CLI 在任何發行版上都能用；Claude Desktop 需要 Ubuntu 22.04 以上或 Debian 12 以上。",
        "Claude Pro、Max、Ultra、Team 或 Enterprise 方案。Remote Control 不能搭配 API 金鑰使用；在 Team 或 Enterprise 上，需要管理員先開啟。",
        "手機上的 Claude App（iOS 或 Android），或瀏覽器裡的 claude.ai/code。",
        "（選用）伺服器上的桌面環境和遠端桌面，用在 Claude 需要一個得登入的網站時。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Linux VPS 上設定 Claude Code",
      steps: [
        {
          title: "租一台伺服器並連線",
          text: "在 DigitalOcean 或 OVHcloud 等供應商建立一台 Linux 伺服器，用 SSH 連線。選 Ubuntu 22.04+ 或 Debian 12+，就保留了使用 Claude Desktop 的選項；在其他發行版上則使用 CLI。",
        },
        {
          title: "安裝 Claude Code 並登入",
          text: "用 Anthropic 的安裝指令碼安裝 Claude Code CLI。它在終端機中執行（Anthropic 列出的支援系統包括 Ubuntu 20.04+ 和 Debian 10+），所以適合只能透過 SSH 連線的 headless 伺服器。在 Ubuntu 22.04+ 或 Debian 12+ 上，你也可以改用 apt 安裝 Claude Desktop；它在 Linux 上是 beta 版（見 [Linux 版 Claude Desktop](https://code.claude.com/docs/en/desktop-linux)）。接著執行 `claude`，用你的 Claude 帳號登入，而不是 API 金鑰。",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "以伺服器模式啟動 Remote Control",
          text: "在你的專案資料夾裡執行 `claude remote-control`。它會啟動一個能同時承載多個 Claude Code 工作階段的伺服器，每個工作階段都能從手機開啟。加上 `--chrome` 可以在這些工作階段裡開啟 Chrome 整合。如果想改成讓每個互動式工作階段都連上，就把 `~/.claude/settings.json` 裡的 `remoteControlAtStartup` 設為 true。",
          code: server,
        },
        {
          title: "登出後讓它繼續執行",
          text: "Remote Control 只有在 claude 程序執行時才能用：關掉終端機，它的工作階段就會離線。在 tmux 或 screen 裡執行它，SSH 連線關閉後它才不會跟著結束；或者把它設成服務。伺服器模式在沒有網路約 10 分鐘後也會結束，所以要讓它自動重新啟動，就像上面的迴圈那樣。長時間執行時的權限模式和用量限制，請看[如何讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "用手機開啟",
          text: "開啟 iOS 或 Android 上的 Claude App，或 claude.ai/code，然後選一個工作階段。Claude 在伺服器上執行，手機負責顯示對話、傳送你的訊息。設定細節和疑難排解請看 [Remote Control 指南](/remote-claude-code)。想改從 Telegram 傳訊息給 Claude Code，請看 [Claude Code Channels](/blog/claude-code-channels)。",
        },
      ],
      source: { label: "來源：Anthropic 的 Remote Control 文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "加上桌面，用來登入網站",
      text: [
        "透過 SSH 連線的伺服器沒有螢幕，平常沒問題，直到 Claude 需要一個得登入的網站。加上遠端桌面，你就能自己完成登入，再讓 Claude 使用這個瀏覽器。",
      ],
      points: [
        "在 VPS 上安裝桌面環境和遠端桌面伺服器，需要登入某個網站時，就從筆電連上去。",
        "安裝 Google Chrome 或 Microsoft Edge，加上 Claude in Chrome 擴充功能，並登入 Claude 要用的網站。Claude in Chrome 支援 Linux，但不支援 WSL。",
        "用 `claude remote-control --chrome` 啟動伺服器，讓它的工作階段能使用這個瀏覽器。",
        "透過 Tailscale 連到遠端桌面。Tailscale 把你的裝置放進一個私人網路，也就是 tailnet，只有這些裝置能互相連線。見 [Tailscale 是什麼](https://tailscale.com/kb/1151/what-is-tailscale)。",
        "在裝了桌面的 Ubuntu 或 Debian 上，除了 CLI，也可以選用 Claude Desktop。",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Linux 伺服器做不到的事",
      text: [
        "如果下面任何一項對你很重要，就改用[家裡的 Mac mini](/blog/claude-code-mac-mini)，也就是我們的創辦人在用的做法。",
      ],
      points: [
        "沒有電腦操作（computer use）。在 Linux 上，Claude 無法操作應用程式和螢幕：CLI 中的電腦操作只支援 macOS，Claude Desktop 中則是 macOS 和 Windows 上的研究預覽。",
        "無法開發 iOS。Xcode 和 iOS Simulator 只能在 macOS 上執行，所以 Linux 伺服器無法建置或執行 iPhone App。",
        "功能較少的桌面應用程式。Linux 版 Claude Desktop 是支援 Ubuntu 和 Debian 的 beta 版，沒有電腦操作、Cowork 和語音輸入。",
        "程序必須一直執行。和所有 Remote Control 設定一樣，只有 claude 在伺服器上執行時，才連得到這些工作階段。",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Claude Code 用 Mac mini 還是 Linux VPS",
      headers: ["", "家裡的 Mac mini", "Linux VPS"],
      rows: [
        ["執行位置", "你家裡自己的 Mac，檔案都留在上面", "向 DigitalOcean 或 OVHcloud 等供應商租的伺服器"],
        ["用手機透過 Remote Control 操控", "可以：Claude Desktop 或 CLI", "可以：任何發行版上的 CLI，或 Ubuntu 22.04+ 和 Debian 12+ 上的 Claude Desktop（beta）"],
        ["電腦操作", "可以：macOS 上的 CLI；Desktop 為研究預覽，限 Pro、Max 或 Ultra", "不行"],
        ["iOS 開發（Xcode、iOS Simulator）", "可以", "不行：需要 Mac"],
        ["Claude in Chrome", "可以", "可以，搭配 Chrome 或 Edge"],
        ["遠端桌面", "Screen Sharing，透過 Tailscale 連線", "需自行加裝桌面環境和遠端桌面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給這台伺服器一份固定工作",
      text: [
        "永不睡眠的伺服器在你傳訊息時隨時回應，你不傳時就等著。Crewmark 把它上面的一段 Claude Code 對話變成一位有職位、目標、工作時間和心跳的 AI 員工：工作時間內，`crewmark` CLI（除了 macOS 和 Windows，也能在 Linux 上執行）會喚醒員工，讓它處理共用看板上自己的 issue。它所在的電腦必須一直開著，而 VPS 正是如此。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如軟體工程師或 SEO 專員，並寫下它的目標和 KPI。",
        },
        {
          title: "連接伺服器上的 Claude Code",
          text: "把設定連結貼進 VPS 上的一段 Claude Code 對話，它會安裝 `crewmark` CLI，並把這段對話綁定到這位員工。Codex 也可以。",
        },
        {
          title: "設定工作時間和心跳",
          text: "只排平日或每天都排、可以跨過午夜的工作時間，以及每 15、30、60、120 或 240 分鐘喚醒一次。",
        },
        {
          title: "用手機指派 issue",
          text: "用任何瀏覽器在 crewmark.ai 的看板上建立並指派 issue；一指派，員工就會馬上被喚醒。需要審查或決定時，它會把 issue 設為「需處理」，並在那裡問你。可以交給它的工作，請看 [Claude Code 使用情境](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 Remote Control 在 Linux VPS 上設定 Claude Code" },
  mid: {
    title: "想讓伺服器在你沒傳訊息時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒 Claude Code，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "可以在 VPS 上執行 Claude Code 嗎？",
        a: "可以。在 Linux 伺服器上安裝 Claude Code CLI，用 Pro、Max、Ultra、Team 或 Enterprise 方案登入，並在 tmux 裡執行 `claude remote-control`，讓它在你登出後繼續執行。然後從手機上的 Claude App 或 claude.ai/code 開啟它的工作階段。",
      },
      {
        q: "如何在 Linux 伺服器上安裝 Claude Code？",
        a: "安裝 Claude Code CLI，它在任何發行版上都能用，包括只能透過 SSH 連線的 headless 伺服器，然後用你的 Claude 帳號登入。在 Ubuntu 22.04+ 或 Debian 12+ 上，也可以用 apt 安裝 Claude Desktop；它在 Linux 上是 beta 版，不含電腦操作、Cowork 和語音輸入。",
      },
      {
        q: "Claude Code Remote Control 支援 Linux 嗎？",
        a: "支援。執行 `claude remote-control` 啟動一個承載多個工作階段的伺服器，或用 `/remote-control` 為單一工作階段開啟 Remote Control。它需要以 Pro、Max、Ultra、Team 或 Enterprise 方案透過 claude.ai 登入；不支援 API 金鑰。",
      },
      {
        q: "關掉 SSH 後，如何讓 Claude Code 在伺服器上繼續執行？",
        a: "在 tmux 或 screen 裡執行它，或把它設成服務。關掉終端機會停止 claude 程序，它的 Remote Control 工作階段也會離線。伺服器模式在沒有網路約 10 分鐘後會結束，所以要用一個迴圈或服務包住它，讓它自動重新啟動。",
      },
      {
        q: "Claude Code 能在 Linux 伺服器上使用電腦操作嗎？",
        a: "不能。在 Linux 上，無論是 CLI 還是 Claude Desktop 都無法使用電腦操作。不過 Claude in Chrome 支援 Linux，所以 Claude 仍然可以在瀏覽器裡使用網站。需要電腦操作或開發 iOS，請用 Mac，例如[家裡的 Mac mini](/blog/claude-code-mac-mini)。",
      },
      {
        q: "在 VPS 上執行 Claude Code 需要什麼？",
        a: "一台能用 SSH 連線的 Linux 伺服器、一個包含 Remote Control 的 Claude 方案（Pro、Max、Ultra、Team 或 Enterprise），以及手機上的 Claude App。CLI 在任何發行版上都能用；Claude Desktop 需要 Ubuntu 22.04+ 或 Debian 12+。",
      },
    ],
  },
  cta: {
    title: "讓你的伺服器開始工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 Anthropic 的 Claude Code 文件（Remote Control、Linux 版 Claude Desktop、電腦操作、Chrome 整合）和 Tailscale 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 或本頁提及的任何公司皆無關聯，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
