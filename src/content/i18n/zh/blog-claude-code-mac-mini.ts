import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Mac mini 配置教程：24 小时运行，手机操控",
    description:
      "在家里的 Mac mini 上 24 小时运行 Claude Code：让它保持唤醒、开启 Remote Control、用手机操控，并通过 Tailscale 访问它的桌面。",
  },
  breadcrumb: "在 Mac mini 上运行 Claude Code",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "在 Mac mini 上跑 Claude Code：一台用手机操控、永不关机的服务器",
    lead: "Remote Control 让你用手机上的 Claude App 操控 Claude Code，但前提是运行它的那台电脑开着。所以，给它一台永不关机的电脑。我们的创始人在家里放了一台 Mac mini，当作一直开着的服务器：Claude Code 在上面开着 Remote Control 运行，用手机操控它，再用一台 MacBook Air 通过 Tailscale 和远程桌面访问它的桌面。所有数据都留在 Mac mini 上。这是我们的创始人目前觉得最好用的方案，下面讲怎么把它搭起来。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "为什么 Claude Code 需要一台一直开着的电脑",
      text: [
        "最快的起步方式，就是用你手头这台电脑。Claude 桌面 App 内置了 Remote Control：在你想控制的那台电脑上打开 Settings，打开 Connect new sessions to Remote Control，再从手机上的 Claude App 打开这个会话。Claude 一直在那台电脑上运行，手机只是它的一个窗口。",
        "问题是，只有那台电脑开着时它才能用。合上笔记本，手机就连不上 Claude Code，直到电脑重新唤醒。一台在家里一直开着的 Mac mini 能去掉这个限制，本指南接下来要搭的就是它。",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "整体配置一览",
      points: [
        "家里的一台 Mac mini，一直开着，并设为不休眠。它就是服务器：Claude Code、你的代码仓库、各种登录状态和文件都在它上面。",
        "开启了 Remote Control 的 Claude Code，用 Claude 桌面 App 或 CLI 都行。",
        "手机上的 Claude App（iOS 或 Android），或者任意浏览器里的 claude.ai/code，在哪都能打开这些会话。",
        "Tailscale 加 Screen Sharing（屏幕共享），这样你就能从笔记本电脑打开 Mac mini 的桌面，就像坐在它跟前一样。",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "为什么用 Mac mini，而不是 Linux 服务器",
      text: [
        "租来的 Linux 服务器也能一直开着，那套方案见[在 VPS 上运行 Claude Code](/blog/claude-code-vps)。Mac 还能做到一些 Linux 做不到的事：",
      ],
      points: [
        "computer use，也就是让 Claude 直接操作应用和屏幕。在 CLI 里它只支持 macOS；在 Claude Desktop 里，它是 macOS 和 Windows 上的研究预览功能，需要 Pro、Max 或 Ultra 套餐（Team 和 Enterprise 不行），而且应用必须开着。见 [Anthropic 的 computer use 文档](https://code.claude.com/docs/en/computer-use)。",
        "iOS 应用。Xcode 和 iOS Simulator 只能在 macOS 上运行，所以如果 Claude Code 要开发 iPhone 应用，服务器就必须是 Mac。",
        "完整的桌面 App。Linux 上的 Claude Desktop 是面向 Ubuntu 和 Debian 的 Beta 版，没有 computer use、Cowork 和语音输入。",
        "数据留在家里。代码仓库、浏览器登录状态和文件都在你自己的机器上，而不是服务商的服务器上。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Mac mini 上配置 Claude Code",
      steps: [
        {
          title: "让 Mac mini 保持唤醒",
          text: "在 System Settings > Energy 里打开 Prevent automatic sleeping when the display is off，这样显示器关了，Mac mini 也会继续运行。同时打开 Wake for network access，让它能为共享服务唤醒。见 [Apple 的睡眠与唤醒设置说明](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)。",
        },
        {
          title: "安装 Claude Code 并登录",
          text: "安装 Claude 桌面 App、Claude Code CLI，或者两个都装，然后用你的 Claude 账号登录。Remote Control 需要 Pro、Max、Ultra、Team 或 Enterprise 套餐。API key 不能用；Team 或 Enterprise 还需要管理员先开启它。",
        },
        {
          title: "开启 Remote Control",
          text: "在桌面 App 里打开 Settings > Code（或 Settings > Claude Code），打开 Connect new sessions to Remote Control，这样每个新会话都能从手机打开。只想开一个会话的话，在 Code 标签页里输入 `/remote-control` 或 `/rc`。用 CLI 的话，在 `~/.claude/settings.json` 里把 `remoteControlAtStartup` 设为 true，或者运行 `claude remote-control`，作为一个能同时承载多个会话的服务器。",
          code: remoteControl,
        },
        {
          title: "从手机打开",
          text: "打开 iOS 或 Android 上的 Claude App，或者浏览器里的 claude.ai/code，选中这个会话。Claude 一直在 Mac mini 上运行；手机负责发消息、显示结果。如果断网，Mac mini 恢复在线后，Claude Code 会自动重连。配置细节和常见问题的解决办法见 [Remote Control 指南](/remote-claude-code)。",
        },
        {
          title: "把 Mac mini 和笔记本都加入 Tailscale",
          text: "在 Mac mini 和你要用来工作的笔记本上都安装 Tailscale，并把两台设备加入同一个 tailnet。Tailscale 会在你的设备之间建立一个私有的点对点网络，连接用 WireGuard 加密，只有同一个 tailnet 里的设备才能互相访问。见 [Tailscale 是什么](https://tailscale.com/kb/1151/what-is-tailscale)。",
        },
        {
          title: "打开 Screen Sharing",
          text: "在 Mac mini 上打开 System Settings > General > Sharing，打开 Screen Sharing。它不能和 Remote Management 同时开启，所以如果 Remote Management 开着，先把它关掉。见 [Apple 的 Screen Sharing 说明](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)。",
        },
        {
          title: "从笔记本上操作它",
          text: "在笔记本上用 Screen Sharing 连接 Mac mini 在 tailnet 里的名字或地址。你会看到它的桌面：在它的浏览器里登录网站、打开 Xcode 和 Simulator，或者看看 Claude 正在做什么，在家或在别处都行。我们的创始人就是这样用一台 MacBook Air 工作的，文件从不离开 Mac mini。",
        },
      ],
      source: { label: "来源：Anthropic 的 Remote Control 官方文档", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "什么让它一直运行，什么会让它停下",
      points: [
        "Claude Code 进程必须一直运行。退出桌面 App 或关掉终端，会话就会下线，所以在 Mac mini 上让它一直开着。",
        "休眠和断网都能恢复：机器恢复在线后，Claude Code 会自动重连。服务器模式（`claude remote-control`）就没那么有耐心了：断网大约 10 分钟后它会退出，需要重新启动。",
        "Remote Control 操控的是一个已经在运行的会话。它不会自己开始干活：一件事做完，Claude 就等你的下一条消息。",
        "权限提示和用量限制也会让长时间运行停下来。[让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)讲了权限模式、`/goal` 和套餐限额。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给常开的 Mac mini 一份长期工作",
      text: [
        "一台常开的 Mac mini，你发消息它就回应，不发它就等着。Crewmark 把它上面的一个 Claude Code 对话变成一名 AI 员工，有岗位、目标、工作时间和心跳：工作时间内，`crewmark` CLI 会唤醒这名员工，让它处理共享看板上自己的 issue。运行它的电脑必须一直开着，而 Mac mini 正是如此。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如软件工程师或 SEO 专员，写下它的目标和 KPI。",
        },
        {
          title: "在 Mac mini 上连接 Claude Code",
          text: "把 setup 链接粘贴到 Mac mini 上的一个 Claude Code 对话里。它会安装 `crewmark` CLI，并把这个对话绑定到这名员工。Codex 也可以。",
        },
        {
          title: "设定工作时间和心跳",
          text: "选好工作时间，可以只排工作日，也可以每天都排；再选员工多久唤醒一次：每 15、30、60、120 或 240 分钟。工作时间可以跨过午夜，所以在一台永不休眠的机器上，排夜班也行。",
        },
        {
          title: "用手机派 issue",
          text: "在任意浏览器里打开 crewmark.ai 的看板，创建并指派 issue；一指派，员工马上就会被唤醒。它会随时更新每个 issue 的状态，需要你审核或拍板时，会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Claude Code 使用场景](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Mac mini 配置成运行 Claude Code 的常开服务器" },
  mid: {
    title: "想让 Mac mini 在你不发消息时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒 Claude Code，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code 能在 Mac mini 上 24 小时运行吗？",
        a: "能，只要 Mac mini 保持唤醒、Claude Code 进程一直运行。在 System Settings > Energy 里打开 Prevent automatic sleeping when the display is off，让 Claude 桌面 App 一直开着（或让 CLI 一直运行），再开启 Remote Control，就能用手机找到它。权限提示和用量限制依然存在。",
      },
      {
        q: "怎么在 Mac mini 上配置 Claude Code？",
        a: "在 Energy 设置里让 Mac 保持唤醒，安装 Claude Code 或 Claude 桌面 App 并登录，打开 Connect new sessions to Remote Control（或运行 `claude remote-control`），然后在手机上的 Claude App 里打开这个会话。再加上 Tailscale 和 Screen Sharing，就能从笔记本访问它的桌面。",
      },
      {
        q: "怎么用 iPhone 操作 Mac mini 上的 Claude Code？",
        a: "用 Remote Control。在 Mac mini 上为这个会话开启它，然后在 iPhone 上打开 Claude App（或 claude.ai/code），选中这个会话。Claude 在 Mac mini 上运行；手机负责发送你的消息、显示结果。它需要 Pro、Max、Ultra、Team 或 Enterprise 套餐。",
      },
      {
        q: "用 Claude Code 需要 Tailscale 吗？",
        a: "用 Remote Control 不需要：你在 Claude App 里打开会话就行。Tailscale 是用来访问 Mac mini 本身的，比如从笔记本通过 Screen Sharing 打开它的桌面。它把你的设备放进一个私有网络，也就是 tailnet，只有这些设备能互相访问。",
      },
      {
        q: "Claude Code 能在 Mac mini 上开发 iOS 应用吗？",
        a: "正是 Mac 让这件事成为可能：Xcode 和 iOS Simulator 只能在 macOS 上运行，这也是这套方案用 Mac mini 而不用 Linux 服务器的原因。在 Mac mini 上、应用的项目文件夹里运行 Claude Code；想亲眼看看 Simulator 时，就通过 Screen Sharing 打开它的桌面。",
      },
      {
        q: "跑 Claude Code，选 Mac mini 还是 Linux VPS？",
        a: "如果 Claude Code 只需要终端和浏览器，Linux VPS 就够了：CLI 在任何发行版上都能运行，Claude in Chrome 也支持 Linux。如果要用 computer use、用 Xcode 和 Simulator 做 iOS 开发，或者想把文件留在家里的机器上，就选 Mac mini。见[在 VPS 上运行 Claude Code](/blog/claude-code-vps)。",
      },
    ],
  },
  cta: {
    title: "给你的 Mac mini 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 Anthropic 的 Claude Code 文档（Remote Control、computer use、Linux 上的 Claude Desktop）、Apple 支持文档和 Tailscale 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、Apple 和 Tailscale 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标；Mac、Mac mini 和 Xcode 是 Apple 的商标。",
};
