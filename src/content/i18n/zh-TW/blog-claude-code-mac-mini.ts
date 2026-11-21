import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Mac mini 設定：用手機操控、全天候執行",
    description:
      "在家裡的 Mac mini 上全天候執行 Claude Code：讓它保持喚醒、開啟 Remote Control、用手機操控，並透過 Tailscale 連到它的桌面。",
  },
  breadcrumb: "在 Mac mini 上執行 Claude Code",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "在 Mac mini 上跑 Claude Code：一台用手機操控、永不關機的伺服器",
    lead: "Remote Control 讓你用手機上的 Claude App 操控 Claude Code，但前提是執行它的電腦開著。那就給它一台永遠不關機的電腦。我們的創辦人在家裡把一台 Mac mini 當作全天候開機的伺服器：Claude Code 在上面開著 Remote Control 執行，用手機操控，再用一台 MacBook Air 透過 Tailscale 和遠端桌面連到它的桌面。所有資料都留在 Mac mini 上。這是我們的創辦人目前覺得最好用的做法，以下說明如何架設。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "為什麼 Claude Code 需要一台一直開著的電腦",
      text: [
        "最快的起點，就是你手上現有的電腦。Claude 桌面應用程式內建 Remote Control：在你想操控的電腦上開啟 Settings，打開「Connect new sessions to Remote Control」，再從手機上的 Claude App 開啟那個工作階段。Claude 仍在那台電腦上執行，手機只是通往它的一扇窗。",
        "問題是，只有那台電腦開著時它才能用。闔上筆電，手機就連不到 Claude Code，直到電腦再次喚醒。一台在家裡一直開著的 Mac mini 可以解除這個限制，本文接下來就是教你把它架好。",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "整體架構一覽",
      points: [
        "家裡一台開著、設定為不睡眠的 Mac mini。它就是伺服器：Claude Code、你的程式碼儲存庫、登入狀態和檔案都在它上面。",
        "開啟了 Remote Control 的 Claude Code，用 Claude 桌面應用程式或 CLI 都可以。",
        "手機上的 Claude App（iOS 或 Android），或任何瀏覽器裡的 claude.ai/code，讓你在任何地方開啟這些工作階段。",
        "Tailscale 加上 Screen Sharing，讓你從筆電開啟 Mac mini 的桌面，就像坐在它前面一樣。",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "為什麼選 Mac mini，而不是 Linux 伺服器",
      text: [
        "租來的 Linux 伺服器也會一直開著，那種做法寫在[在 VPS 上執行 Claude Code](/blog/claude-code-vps)。Mac 則多了 Linux 做不到的事：",
      ],
      points: [
        "電腦操作（computer use），也就是讓 Claude 操作應用程式和螢幕。在 CLI 中只支援 macOS；在 Claude Desktop 中是 macOS 和 Windows 上的研究預覽，限 Pro、Max 或 Ultra（不含 Team 或 Enterprise），而且應用程式必須開著。見 [Anthropic 的電腦操作文件](https://code.claude.com/docs/en/computer-use)。",
        "iOS App。Xcode 和 iOS Simulator 只能在 macOS 上執行，所以如果要讓 Claude Code 開發 iPhone App，伺服器就得是 Mac。",
        "完整的桌面應用程式。Linux 版 Claude Desktop 是支援 Ubuntu 和 Debian 的 beta 版，沒有電腦操作、Cowork 和語音輸入。",
        "資料留在家裡。程式碼儲存庫、瀏覽器登入狀態和檔案都留在你自己的機器上，而不是供應商的伺服器上。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Mac mini 上設定 Claude Code",
      steps: [
        {
          title: "讓 Mac mini 保持喚醒",
          text: "在 System Settings > Energy 開啟「Prevent automatic sleeping when the display is off」，讓 Mac mini 在螢幕關閉時繼續運作。也一併開啟「Wake for network access」，讓它能為共享服務而喚醒。見 [Apple 的睡眠與喚醒設定說明](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)。",
        },
        {
          title: "安裝 Claude Code 並登入",
          text: "安裝 Claude 桌面應用程式、Claude Code CLI，或兩者都裝，然後用你的 Claude 帳號登入。Remote Control 需要 Pro、Max、Ultra、Team 或 Enterprise 方案。它不能搭配 API 金鑰使用；在 Team 或 Enterprise 上，需要管理員先開啟它。",
        },
        {
          title: "開啟 Remote Control",
          text: "在桌面應用程式裡開啟 Settings > Code（或 Settings > Claude Code），打開「Connect new sessions to Remote Control」，這樣每個新的工作階段都能從手機開啟。只想開啟單一工作階段，就在 Code 分頁輸入 `/remote-control` 或 `/rc`。在 CLI 中，把 `~/.claude/settings.json` 裡的 `remoteControlAtStartup` 設為 true，或執行 `claude remote-control`，當作能同時承載多個工作階段的伺服器。",
          code: remoteControl,
        },
        {
          title: "用手機開啟",
          text: "開啟 iOS 或 Android 上的 Claude App，或在瀏覽器開啟 claude.ai/code，然後選擇那個工作階段。Claude 繼續在 Mac mini 上執行，手機負責傳送訊息、顯示結果。如果網路中斷，等 Mac mini 恢復連線，Claude Code 會自動重新連線。設定細節和疑難排解請看 [Remote Control 指南](/remote-claude-code)。",
        },
        {
          title: "把 Mac mini 和筆電加入 Tailscale",
          text: "在 Mac mini 和你要用來工作的筆電上安裝 Tailscale，把兩台都加入同一個 tailnet。Tailscale 會用加密的 WireGuard 連線，在你的裝置之間建立私人的點對點網路，只有同一個 tailnet 裡的裝置才能互相連線。見 [Tailscale 是什麼](https://tailscale.com/kb/1151/what-is-tailscale)。",
        },
        {
          title: "開啟 Screen Sharing",
          text: "在 Mac mini 上開啟 System Settings > General > Sharing，打開 Screen Sharing。它不能和 Remote Management 同時開啟，所以如果 Remote Management 開著，請先把它關掉。見 [Apple 的 Screen Sharing 說明](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)。",
        },
        {
          title: "從筆電在上面工作",
          text: "在筆電上用 Screen Sharing 連到 Mac mini 在 tailnet 上的名稱或位址。你會看到它的桌面：在它的瀏覽器裡登入網站、開啟 Xcode 和 Simulator，或看看 Claude 正在做什麼，在家或在任何地方都行。我們的創辦人就是這樣用 MacBook Air 工作的，檔案從不離開 Mac mini。",
        },
      ],
      source: { label: "來源：Anthropic 的 Remote Control 文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "什麼讓它持續執行，什麼會讓它停下",
      points: [
        "Claude Code 程序必須持續執行。結束桌面應用程式或關掉終端機，工作階段就會離線，所以讓它在 Mac mini 上一直開著。",
        "睡眠和斷網都能恢復：機器重新連上網路後，Claude Code 會自動重新連線。伺服器模式（`claude remote-control`）就沒那麼有耐心：沒有網路約 10 分鐘後它就會結束，這時要重新啟動它。",
        "Remote Control 操控的是一個已經在執行的工作階段。它不會自己開始工作：一件事做完，Claude 就會等你的下一則訊息。",
        "權限提示和用量限制也會讓長時間執行停下。[如何讓 Claude Code 24 小時執行](/blog/run-claude-code-24-7)介紹了權限模式、`/goal` 和方案限制。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給這台全天候開機的 Mac mini 一份固定工作",
      text: [
        "全天候開機的 Mac mini 在你傳訊息時隨時回應，你不傳時就等著。Crewmark 把它上面的一段 Claude Code 對話變成一位有職位、目標、工作時間和心跳的 AI 員工：工作時間內，`crewmark` CLI 會喚醒員工，讓它處理共用看板上自己的 issue。它所在的電腦必須一直開著，而 Mac mini 正是如此。",
      ],
      steps: [
        {
          title: "聘用一位員工",
          text: "從 [AI 員工職位](/ai-employees)中挑一個，例如軟體工程師或 SEO 專員，並寫下它的目標和 KPI。",
        },
        {
          title: "連接 Mac mini 上的 Claude Code",
          text: "把設定連結貼進 Mac mini 上的一段 Claude Code 對話，它會安裝 `crewmark` CLI，並把這段對話綁定到這位員工。Codex 也可以。",
        },
        {
          title: "設定工作時間和心跳",
          text: "選擇工作時段、只排平日或每天都排，以及員工多久醒來一次：每 15、30、60、120 或 240 分鐘。工作時間可以跨過午夜，所以在一台永不睡眠的機器上，夜班也行得通。",
        },
        {
          title: "用手機指派 issue",
          text: "用任何瀏覽器在 crewmark.ai 的看板上建立並指派 issue；一指派，員工就會馬上被喚醒。它會隨時更新每個 issue 的狀態，需要審查或決定時，就把 issue 設為「需處理」，並在那裡問你。可以交給它的工作，請看 [Claude Code 使用情境](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Mac mini 設定成全天候執行 Claude Code 的伺服器" },
  mid: {
    title: "想讓 Mac mini 在你沒傳訊息時也繼續工作？",
    text: "Crewmark 在你設定的時段內依心跳喚醒 Claude Code，並從看板上把下一個 issue 交給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 能在 Mac mini 上 24 小時執行嗎？",
        a: "可以，只要 Mac mini 保持喚醒、Claude Code 程序持續執行。在 System Settings > Energy 開啟「Prevent automatic sleeping when the display is off」，讓 Claude 桌面應用程式一直開著（或讓 CLI 持續執行），並開啟 Remote Control，就能用手機連到它。權限提示和用量限制仍然適用。",
      },
      {
        q: "如何在 Mac mini 上設定 Claude Code？",
        a: "在 Energy 設定裡讓 Mac 保持喚醒，安裝 Claude Code 或 Claude 桌面應用程式並登入，開啟「Connect new sessions to Remote Control」（或執行 `claude remote-control`），再到手機上的 Claude App 開啟工作階段。加上 Tailscale 和 Screen Sharing，就能從筆電連到它的桌面。",
      },
      {
        q: "如何用 iPhone 使用 Mac mini 上的 Claude Code？",
        a: "用 Remote Control。在 Mac mini 上為工作階段開啟它，然後在 iPhone 上開啟 Claude App（或 claude.ai/code），選擇那個工作階段。Claude 在 Mac mini 上執行，手機負責傳送你的訊息、顯示結果。需要 Pro、Max、Ultra、Team 或 Enterprise 方案。",
      },
      {
        q: "使用 Claude Code 需要 Tailscale 嗎？",
        a: "Remote Control 不需要：你在 Claude App 裡開啟工作階段就行。Tailscale 是用來連到 Mac mini 本身的，例如從筆電透過 Screen Sharing 連到它的桌面。它把你的裝置放進一個私人網路，也就是 tailnet，只有這些裝置能互相連線。",
      },
      {
        q: "Claude Code 能在 Mac mini 上開發 iOS App 嗎？",
        a: "正是 Mac 讓這件事成為可能：Xcode 和 iOS Simulator 只能在 macOS 上執行，這也是這套做法用 Mac mini 而不用 Linux 伺服器的原因。在 Mac mini 上、於 App 的專案資料夾裡執行 Claude Code，想親眼看 Simulator 時，就透過 Screen Sharing 開啟它的桌面。",
      },
      {
        q: "Claude Code 該用 Mac mini 還是 Linux VPS？",
        a: "如果 Claude Code 只需要終端機和瀏覽器，Linux VPS 就夠了：CLI 能在任何發行版上執行，Claude in Chrome 也支援 Linux。需要電腦操作、用 Xcode 和 Simulator 開發 iOS，或想把檔案留在家裡的機器上，就選 Mac mini。見[在 VPS 上執行 Claude Code](/blog/claude-code-vps)。",
      },
    ],
  },
  cta: {
    title: "給你的 Mac mini 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 14 日對照 Anthropic 的 Claude Code 文件（Remote Control、電腦操作、Linux 版 Claude Desktop）、Apple 支援和 Tailscale 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、Apple 或 Tailscale 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標；Mac、Mac mini 和 Xcode 是 Apple 的商標。",
};
