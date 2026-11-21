import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

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
    title: "Claude Code VPS 配置教程：在 Linux 服务器上 24 小时运行",
    description:
      "在 Linux VPS 或 Ubuntu 服务器上安装 Claude Code，以服务器模式运行 Remote Control，用 tmux 保持运行、用手机操控，以及它的局限。",
  },
  breadcrumb: "在 VPS 上运行 Claude Code",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "在 VPS 上跑 Claude Code：装在 Linux 服务器上，用手机操控",
    lead: "Remote Control 让你用手机上的 Claude App 操控 Claude Code，但前提是运行它的那台电脑开着。租来的 Linux 服务器，也就是 VPS，是不会关机的。在上面安装 Claude Code，以服务器模式运行 Remote Control，无论你在哪，都能用手机打开它的会话。这篇指南讲在 Ubuntu、Debian 或其他发行版上怎么配置、怎么让它一直运行、怎么加一个桌面来登录网站，以及和[家里的一台 Mac mini](/blog/claude-code-mac-mini)相比，Linux 服务器做不到什么。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "需要准备什么",
      points: [
        "一台能用 SSH 登录的 Linux 服务器，可以在 DigitalOcean 或 OVHcloud 这类服务商那里租。Claude Code CLI 在任何发行版上都能用；Claude Desktop 需要 Ubuntu 22.04 及以上，或 Debian 12 及以上。",
        "Claude Pro、Max、Ultra、Team 或 Enterprise 套餐。Remote Control 不支持 API key；Team 或 Enterprise 还需要管理员先开启它。",
        "手机上的 Claude App（iOS 或 Android），或者浏览器里的 claude.ai/code。",
        "可选：服务器上的桌面环境和远程桌面，在 Claude 需要访问某个得由你登录的网站时用。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Linux VPS 上配置 Claude Code",
      steps: [
        {
          title: "租一台服务器并连上去",
          text: "在 DigitalOcean 或 OVHcloud 这类服务商那里创建一台 Linux 服务器，用 SSH 连上去。选 Ubuntu 22.04+ 或 Debian 12+，就还能用 Claude Desktop；其他发行版就用 CLI。",
        },
        {
          title: "安装 Claude Code 并登录",
          text: "用 Anthropic 的安装脚本安装 Claude Code CLI。它在终端里运行（Anthropic 列出的支持系统包括 Ubuntu 20.04+ 和 Debian 10+），所以很适合只能通过 SSH 访问的无界面（headless）服务器。在 Ubuntu 22.04+ 或 Debian 12+ 上，也可以改用 apt 安装 Claude Desktop；它在 Linux 上还是 Beta 版（见 [Linux 上的 Claude Desktop](https://code.claude.com/docs/en/desktop-linux)）。然后运行 `claude`，用你的 Claude 账号登录，而不是 API key。",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "以服务器模式启动 Remote Control",
          text: "在项目文件夹里运行 `claude remote-control`。它会启动一个能同时承载多个 Claude Code 会话的服务器，每个会话都能从手机打开。加上 `--chrome`，就能在这些会话里开启 Chrome 集成。如果想让每个交互式会话都自动连上，就在 `~/.claude/settings.json` 里把 `remoteControlAtStartup` 设为 true。",
          code: server,
        },
        {
          title: "退出登录后让它继续运行",
          text: "Remote Control 只在 claude 进程运行时才能用：关掉终端，它的会话就会下线。把它放在 tmux 或 screen 里运行，这样 SSH 连接断开后它也不会退出；也可以把它作为服务运行。服务器模式断网大约 10 分钟后也会退出，所以要像上面的循环那样自动重启它。长时间运行时的权限模式和用量限制，见[让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "从手机打开",
          text: "打开 iOS 或 Android 上的 Claude App，或者 claude.ai/code，选中一个会话。Claude 在服务器上运行；手机显示对话、发送你的消息。配置细节和常见问题的解决办法见 [Remote Control 指南](/remote-claude-code)。想改用 Telegram 给 Claude Code 发消息，请看 [Claude Code Channels](/blog/claude-code-channels)。",
        },
      ],
      source: { label: "来源：Anthropic 的 Remote Control 官方文档", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "加一个桌面，用来登录网站",
      text: [
        "通过 SSH 访问的服务器没有屏幕。平时这没问题，直到 Claude 需要访问一个得先登录的网站。加一个远程桌面，你就能自己完成登录，再让 Claude 使用这个浏览器。",
      ],
      points: [
        "在 VPS 上安装一个桌面环境和远程桌面服务，需要登录某个网站时，从笔记本连上去。",
        "安装 Google Chrome 或 Microsoft Edge，加上 Claude in Chrome 扩展，并登录 Claude 要用的网站。Claude in Chrome 支持 Linux，但不支持 WSL。",
        "用 `claude remote-control --chrome` 启动服务器，让它的会话能使用这个浏览器。",
        "通过 Tailscale 访问远程桌面。它把你的设备放进一个私有网络，也就是 tailnet，只有这些设备能互相访问。见 [Tailscale 是什么](https://tailscale.com/kb/1151/what-is-tailscale)。",
        "在装了桌面的 Ubuntu 或 Debian 上，除了 CLI，也可以用 Claude Desktop。",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Linux 服务器做不到的事",
      text: [
        "如果下面任何一点对你很重要，就改用[家里的一台 Mac mini](/blog/claude-code-mac-mini)，这也是我们的创始人在用的方案。",
      ],
      points: [
        "没有 computer use。在 Linux 上，Claude 没法操作应用和屏幕：CLI 里的 computer use 只支持 macOS，Claude Desktop 里的则是 macOS 和 Windows 上的研究预览功能。",
        "不能做 iOS 开发。Xcode 和 iOS Simulator 只能在 macOS 上运行，所以 Linux 服务器没法构建或运行 iPhone 应用。",
        "功能更少的桌面 App。Linux 上的 Claude Desktop 是面向 Ubuntu 和 Debian 的 Beta 版，没有 computer use、Cowork 和语音输入。",
        "进程必须一直运行。和任何 Remote Control 方案一样，只有 claude 在服务器上运行时，才能访问这些会话。",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "跑 Claude Code：Mac mini 和 Linux VPS 对比",
      headers: ["", "家里的 Mac mini", "Linux VPS"],
      rows: [
        ["在哪运行", "你自己的一台 Mac，放在家里；文件都留在上面", "在 DigitalOcean 或 OVHcloud 这类服务商那里租的服务器"],
        ["用手机 Remote Control", "可以：Claude Desktop 或 CLI", "可以：任何发行版上的 CLI，或 Ubuntu 22.04+、Debian 12+ 上的 Claude Desktop（Beta 版）"],
        ["computer use", "可以：macOS 上的 CLI；Desktop 是研究预览功能，需要 Pro、Max 或 Ultra", "不可以"],
        ["iOS 开发（Xcode、iOS Simulator）", "可以", "不可以：需要 Mac"],
        ["Claude in Chrome", "可以", "可以，用 Chrome 或 Edge"],
        ["远程桌面", "Screen Sharing，通过 Tailscale 访问", "需要你自己加装桌面环境和远程桌面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给服务器一份长期工作",
      text: [
        "一台永不休眠的服务器，你发消息它就回应，不发它就等着。Crewmark 把它上面的一个 Claude Code 对话变成一名 AI 员工，有岗位、目标、工作时间和心跳：工作时间内，`crewmark` CLI（除了 macOS 和 Windows，在 Linux 上也能运行）会唤醒这名员工，让它处理共享看板上自己的 issue。运行它的电脑必须一直开着，而 VPS 正是如此。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如软件工程师或 SEO 专员，写下它的目标和 KPI。",
        },
        {
          title: "在服务器上连接 Claude Code",
          text: "把 setup 链接粘贴到 VPS 上的一个 Claude Code 对话里。它会安装 `crewmark` CLI，并把这个对话绑定到这名员工。Codex 也可以。",
        },
        {
          title: "设定工作时间和心跳",
          text: "可以只排工作日，也可以每天都排；工作时间可以跨过午夜；每 15、30、60、120 或 240 分钟唤醒一次。",
        },
        {
          title: "用手机派 issue",
          text: "在任意浏览器里打开 crewmark.ai 的看板，创建并指派 issue；一指派，员工马上就会被唤醒。需要你审核或拍板时，它会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Claude Code 使用场景](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Linux VPS 上配置 Claude Code 和 Remote Control" },
  mid: {
    title: "想让服务器在你不发消息时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒 Claude Code，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "可以在 VPS 上运行 Claude Code 吗？",
        a: "可以。在 Linux 服务器上安装 Claude Code CLI，用 Pro、Max、Ultra、Team 或 Enterprise 套餐登录，然后在 tmux 里运行 `claude remote-control`，这样退出登录后它也会继续运行。之后就能在手机上的 Claude App 或 claude.ai/code 里打开它的会话。",
      },
      {
        q: "怎么在 Linux 服务器上安装 Claude Code？",
        a: "安装 Claude Code CLI，然后用你的 Claude 账号登录。CLI 在任何发行版上都能用，包括只能通过 SSH 访问的无界面服务器。在 Ubuntu 22.04+ 或 Debian 12+ 上，也可以用 apt 安装 Claude Desktop；它在 Linux 上是 Beta 版，没有 computer use、Cowork 和语音输入。",
      },
      {
        q: "Claude Code Remote Control 支持 Linux 吗？",
        a: "支持。运行 `claude remote-control`，启动一个能承载多个会话的服务器；或者用 `/remote-control` 为单个会话开启 Remote Control。它需要通过 claude.ai 登录 Pro、Max、Ultra、Team 或 Enterprise 套餐；不支持 API key。",
      },
      {
        q: "关掉 SSH 后，怎么让服务器上的 Claude Code 继续运行？",
        a: "把它放在 tmux 或 screen 里运行，或者作为服务运行。关掉终端会停止 claude 进程，它的 Remote Control 会话也会随之下线。服务器模式断网大约 10 分钟后会退出，所以要用一个循环或服务把它包起来，让它自动重启。",
      },
      {
        q: "Linux 服务器上的 Claude Code 能用 computer use 吗？",
        a: "不能。Linux 上没有 computer use，CLI 和 Claude Desktop 里都没有。不过 Claude in Chrome 支持 Linux，所以 Claude 仍然可以在浏览器里使用网站。要用 computer use 或做 iOS 开发，就用一台 Mac，比如[家里的一台 Mac mini](/blog/claude-code-mac-mini)。",
      },
      {
        q: "在 VPS 上运行 Claude Code 需要什么？",
        a: "一台能用 SSH 登录的 Linux 服务器、一个包含 Remote Control 的 Claude 套餐（Pro、Max、Ultra、Team 或 Enterprise），以及手机上的 Claude App。CLI 在任何发行版上都能用；Claude Desktop 需要 Ubuntu 22.04+ 或 Debian 12+。",
      },
    ],
  },
  cta: {
    title: "让你的服务器干起活来。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 Anthropic 的 Claude Code 文档（Remote Control、Linux 上的 Claude Desktop、computer use、Chrome 集成）和 Tailscale 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 及本页提到的任何公司都无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
