import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

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
    title: "Codex Mac mini 配置教程：24 小时运行，手机操控",
    description:
      "在 Mac mini 上 24 小时运行 Codex：安装 ChatGPT 桌面应用和 CLI、让 Mac 保持唤醒、开启远程控制、配对手机，再加上 Computer Use。",
  },
  breadcrumb: "在 Mac mini 上运行 Codex",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Codex",
    title: "在 Mac mini 上跑 Codex：一台用手机操控、永不关机的主机",
    lead: "远程控制让你用手机上的 ChatGPT App 使用 Codex，但前提是运行它的那台电脑保持唤醒并在线。合上笔记本，手机就连不上它了。对于运行时间更长的工作，OpenAI 建议用一台专用的、一直开着的 Mac，而家里的一台 Mac mini 正合适：它一直开着，把你的项目、登录状态和工具留在你自己的机器上，还能运行 Computer Use 和浏览器任务。这篇指南讲怎么在上面安装 Codex、让它保持唤醒、设置远程控制、配对手机，以及从笔记本访问它的桌面。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "为什么用 Mac mini 当 Codex 主机",
      text: [
        "Codex 并不在你的手机上运行。手机负责发送提示词、批准和后续消息，其余的一切都由主机提供：项目、对话、文件、凭据、插件、MCP 服务器、技能（skills）、Computer Use、浏览器和本地工具。所以，你在手机上能让 Codex 做什么、到底能不能连上它，都由主机决定。一台永不休眠的 Mac mini 就是很好的主机：",
      ],
      points: [
        "它一直开着。主机一休眠、断网或关掉应用，远程访问就会中断，直到它恢复为止。",
        "Computer Use 和浏览器任务。ChatGPT 桌面应用在 macOS 和 Windows 上能运行 Computer Use；Linux 预览版还没有这个功能。在 Windows 上，Computer Use 会接管当前活动的桌面，而且需要会话保持解锁。Mac 有锁屏使用（locked use），所以你从手机启动的 Computer Use 任务在 Mac 锁屏后也能运行。",
        "iOS 应用。Xcode 和 iOS Simulator 只能在 macOS 上运行，所以如果 Codex 要开发 iPhone 应用，主机就必须是 Mac。",
        "数据留在家里。代码仓库、浏览器登录状态和凭据都留在你自己的机器上；主机能访问已登录的网站和桌面应用，所以它们都能用。",
        "也能当连接服务器的据点。同一个桌面应用还能把 Linux 服务器添加为 SSH 主机，所以对话在服务器上运行时，Mac mini 可以当那台一直开着、供手机连接的电脑。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "需要准备什么",
      points: [
        "一台能一直开着、连着网的 Mac mini。",
        "一个能用 Codex 的 ChatGPT 账号。OpenAI 的套餐对照表列出，Plus、Pro、Business 和 Enterprise 支持手机远程控制；用 API key 则不行。在 ChatGPT 工作区里，可能需要管理员先开启 Remote Control 访问权限。",
        "手机上最新版的 ChatGPT App（iOS 或 Android），登录和 Mac mini 相同的账号和工作区。",
        "可选：在 Mac mini 和你的笔记本上安装 Tailscale，这样在哪都能访问 Mac mini 的桌面。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Mac mini 上配置 Codex",
      steps: [
        {
          title: "安装 ChatGPT 桌面应用和 Codex CLI",
          text: "从 2026 年 7 月 9 日起，Codex 就在 ChatGPT 桌面应用里，和 Chat、Work 并列。安装 macOS 版应用，用你在手机上用的账号和工作区登录，然后选择 Codex。Codex CLI 是可选的，但用 SSH 登录进来时很方便：用 OpenAI 的安装脚本或 Homebrew 安装它，运行 `codex`，选择 Sign in with ChatGPT。`codex app` 会打开桌面应用，没装的话还会先安装。",
          code: install,
        },
        {
          title: "让 Mac mini 保持唤醒",
          text: "在 System Settings > Energy 里打开 Prevent automatic sleeping when the display is off，这样显示器关了，Mac mini 也会继续运行；Wake for network access 能让它为共享服务唤醒（见 [Apple 的睡眠与唤醒设置说明](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)）。然后在桌面应用里打开 Settings > General > Prevent sleep while running，这样你不在时，本地对话也会继续进行。",
        },
        {
          title: "开启远程控制",
          text: "在桌面应用里打开 Settings > Connections > Control this Mac or PC，选择 Set up 或 Add。批准远程访问，并完成所需的验证；应用会显示一个二维码。在 Settings > Connections 里，你还可以选择让电脑保持唤醒、启用 Computer Use、安装 Chrome 扩展，以及管理已连接的设备。",
        },
        {
          title: "配对手机",
          text: "用手机扫描二维码，它会打开 ChatGPT。确认账号和工作区，如果有 MFA、SSO 或 passkey 验证，也一并完成。之后 Mac mini 就会出现在 ChatGPT App 的 Codex 下面（旧版本里叫 Remote），你可以在它的项目里新开对话、批准命令、审查 diff。一个二维码只把一部手机和一台主机配对，所以每部要用的手机都要分别配对。想同时用笔记本控制它，就在笔记本上使用 Settings > Connections > Control other devices（如果有这个选项的话）。",
        },
        {
          title: "开启 Computer Use 和 Chrome 扩展",
          text: "做浏览器任务和桌面任务，主机两样都需要。选中 Codex 后，打开 Settings > Computer use，在 Control 下找到 Any App，选择 Install 或打开开关；再从 Settings > Connections 安装 Chrome 扩展。Computer Use 只在部分地区可用。想让你从手机启动的 Computer Use 任务在 Mac 锁屏时也能运行，就在 Settings > Computer Use 里打开锁屏使用（locked use）。它会安装一个 Apple 授权插件，只在有 Computer Use 轮次正在进行时才解锁；一旦有人使用 Mac mini 的键盘或指针，它就会重新锁上。",
        },
        {
          title: "代码在服务器上的话，添加 SSH 主机",
          text: "Settings > Connections 还能把 `~/.ssh/config` 里的 Linux 服务器添加为 SSH 主机，然后你在上面选一个项目文件夹。这个项目里的对话在服务器上运行，而你的手机仍然连着 Mac mini。配置方法见[在 VPS 上运行 Codex](/blog/codex-vps)。",
        },
        {
          title: "用 Tailscale 和 Screen Sharing 访问 Mac mini 的桌面",
          text: "在 Mac mini 和你的笔记本上都安装 Tailscale，并把两台设备加入同一个 tailnet。这是一个私有网络，只有你的设备能通过加密的 WireGuard 连接互相访问（见 [Tailscale 是什么](https://tailscale.com/kb/1151/what-is-tailscale)）。在 Mac mini 上打开 System Settings > General > Sharing > Screen Sharing；它不能和 Remote Management 同时开启。然后从笔记本连接 Mac mini 在 tailnet 里的名字，就能登录网站、处理 Computer Use 无法批准的安全或隐私提示，或者看着 Codex 干活（见 [Apple 的 Screen Sharing 说明](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)）。",
        },
      ],
      source: { label: "来源：OpenAI 的远程连接文档（英文）", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "什么让它一直连得上，什么会让它断开",
      points: [
        "Mac mini 必须保持唤醒、在线，登录同一个账号和工作区，并开着桌面应用。它一休眠、断网或关掉应用，手机就连不上它，直到它恢复为止。你自己选择 Sleep 也会中断访问。",
        "退出桌面应用的登录会关闭 Remote Control，但配对还在。重新登录后，再把 Remote Control 打开。",
        "如果选择 Add 后报错，在 Mac mini 上重启桌面应用，再试一次。2026 年 6 月 8 日以来没用过的配对，需要把两个 App 都更新，再重新配对。",
        "远程控制不会自己开始干活。任务完成后，Codex 会通知你，然后等你的下一条提示词。定时任务和其他不用你来启动工作的方法，见[如何让 Codex 主动工作](/proactive-codex)和 [Codex 长时间任务](/blog/codex-long-running-tasks)。",
        "更多解决办法见 [Codex 远程控制](/blog/codex-remote-control#troubleshooting)。",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "让 Codex 保持可连的其他方式",
      points: [
        "把 Linux 服务器当作 SSH 主机，Codex 就在服务器上运行，但你的手机连的仍然是运行桌面应用的 Mac 或 Windows 电脑，所以那台电脑也得一直开着。Mac mini 就可以是这台电脑。见[在 VPS 上运行 Codex](/blog/codex-vps)。",
        "Codex cloud 在 OpenAI 的云端运行任务，电脑休眠时也会继续干活。它只能看到自己的云端环境，所以你的本地文件、浏览器登录状态和 VPN 访问都不在那里。",
        "如果用的是 Claude Code，同样的常开 Mac mini 方案见[在 Mac mini 上运行 Claude Code](/blog/claude-code-mac-mini)，Anthropic 版的远程控制见 [Claude Code Remote Control](/remote-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给常开的 Mac mini 一份长期工作",
      text: [
        "一台常开的 Mac mini，你用手机发消息它就回应，不发它就等着。Crewmark 把它上面的一个 Codex 对话变成一名 AI 员工，有岗位、量化目标、工作时间和心跳：工作时间内，`crewmark` CLI 会唤醒这名员工，让它处理共享看板上自己的 issue。运行它的电脑必须一直开着，而 Mac mini 正是如此。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如软件工程师或 SEO 专员，写下它的目标和 KPI。",
        },
        {
          title: "在 Mac mini 上连接 Codex",
          text: "把 setup 链接粘贴到 Mac mini 上的一个 Codex 对话里。它会安装 `crewmark` CLI，并把这个对话绑定到这名员工。Claude Code 也可以。",
        },
        {
          title: "设定工作时间和心跳",
          text: "选好工作时间，可以只排工作日，也可以每天都排；再选员工多久唤醒一次：每 15、30、60、120 或 240 分钟。工作时间可以跨过午夜，所以在一台永不休眠的机器上，排夜班也行。每次唤醒都进入同一个 Codex 对话，所以它会从上次停下的地方接着干。",
        },
        {
          title: "用手机派 issue、和它对话",
          text: "在手机浏览器里打开 crewmark.ai，创建并指派 issue，或者在员工的工作记录里给它写消息；它会在那里回复。一指派 issue，员工马上就会被唤醒；需要你审核或拍板时，它会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Mac mini 配置成运行 Codex 的常开主机" },
  mid: {
    title: "想让 Mac mini 在你不发消息时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Codex 能在 Mac mini 上 24 小时运行吗？",
        a: "能，只要 Mac mini 保持唤醒、在线、已登录，并开着 ChatGPT 桌面应用。在 System Settings > Energy 里打开 Prevent automatic sleeping when the display is off，在应用的 Settings > General 里打开 Prevent sleep while running，再设置好远程控制，就能用手机找到它。每个任务做完后，Codex 会等你的下一条提示词，除非有别的东西来启动工作。",
      },
      {
        q: "怎么在 Mac mini 上安装 Codex？",
        a: "安装 macOS 版 ChatGPT 桌面应用，并在里面选择 Codex。要在终端里用，就用 `curl -fsSL https://chatgpt.com/codex/install.sh | sh` 或 `brew install --cask codex` 安装 Codex CLI，然后运行 `codex`，选择 Sign in with ChatGPT。`codex app` 会打开桌面应用，没装的话还会先安装。",
      },
      {
        q: "怎么用 iPhone 操作 Mac mini 上的 Codex？",
        a: "在 Mac mini 的桌面应用里打开 Settings > Connections > Control this Mac or PC，选择 Set up 或 Add，然后用 iPhone 扫描二维码。之后 Mac mini 就会出现在 ChatGPT App 的 Codex 下面，你可以在那里新开对话、批准命令、审查 diff。Android 上的 ChatGPT App 也可以。",
      },
      {
        q: "在 Mac 上运行 Codex 的最低要求是什么？",
        a: "对于 Codex CLI，OpenAI 在 GitHub 上的安装指南列出的是 macOS 12 或更高版本，内存最低 4 GB，推荐 8 GB。我们查过的 OpenAI 文档没有单独给出 ChatGPT 桌面应用的要求。要用远程控制，你的账号还需要能用 Codex，手机上也要装最新版的 ChatGPT App。",
      },
      {
        q: "用 Codex 远程控制需要 Tailscale 吗？",
        a: "不需要。远程控制经过 OpenAI 的安全中继，所以 Mac mini 不会暴露在公共互联网上。Tailscale 是用来访问 Mac mini 本身的，比如在外面用笔记本通过 Screen Sharing 打开它的桌面，或者 SSH 连上去；OpenAI 的文档建议用 VPN 或 mesh 组网来访问你网络之外的机器。",
      },
      {
        q: "跑 Codex，选 Mac mini 还是 Linux VPS？",
        a: "如果 Codex 只需要终端，一台 Linux 服务器就够了：CLI 能在 Linux 上运行，桌面应用也能通过 SSH 打开它上面的项目。但你的手机连的仍然是运行桌面应用的 Mac 或 Windows 电脑，所以无论如何那台电脑都得开着。如果要用 Computer Use、通过 Chrome 扩展执行浏览器任务、做 iOS 开发，或者想把文件留在家里，就选 Mac mini。见[在 VPS 上运行 Codex](/blog/codex-vps)。",
      },
    ],
  },
  cta: {
    title: "给你的 Mac mini 一份工作。",
    text: "Crewmark 把 Codex 和 Claude Code 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 OpenAI 的文档（远程连接、Computer Use、Codex CLI、设置、套餐）、Apple 支持文档和 Tailscale 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenAI、Apple 和 Tailscale 无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标；Mac、Mac mini 和 Xcode 是 Apple 的商标。",
};
