import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

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
    title: "Codex VPS 配置教程：安装、登录并通过 SSH 连接",
    description:
      "在 Linux VPS 上安装 Codex CLI，用设备码登录，在 ChatGPT 桌面应用里把服务器添加为 SSH 主机，再用手机访问它。",
  },
  breadcrumb: "在 VPS 上运行 Codex",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Codex",
    title: "在 VPS 上跑 Codex：装在 Linux 服务器上，通过 SSH 连接",
    lead: "租来的 Linux 服务器，也就是 VPS，是不会休眠的，而 Codex CLI 能在 Linux 上运行。要弄清楚的是怎么从手机连到它：ChatGPT App 并不直接连接服务器，而是连接 Mac 或 Windows 电脑上的 ChatGPT 桌面应用，再由这个应用通过 SSH 在服务器上运行对话。这篇指南讲怎么在服务器上安装并登录 Codex、把它添加为 SSH 主机、用手机控制它、只用终端的 tmux 方案、怎么保证服务器安全，以及如果你根本不想维护服务器，还可以用 Codex cloud。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "在 VPS 上跑 Codex，各部分怎么配合",
      text: ["这里涉及三台机器，各司其职："],
      points: [
        "Linux 服务器运行 Codex。它的项目里的对话在服务器上运行命令、读取文件、写入修改，用的是服务器的依赖、安全策略和算力。桌面应用通过 SSH，在远程用户的登录 shell 里启动 Codex。",
        "一台 Mac 或 Windows 电脑运行 ChatGPT 桌面应用，SSH 连接由它维持。你的手机通信的对象就是这台主机，所以它也必须保持唤醒并在线。",
        "你的手机运行 ChatGPT App，通过远程控制来控制这台主机。它负责发送提示词和批准，并向你显示 diff、终端输出和通知。",
        "OpenAI 的文档只把 macOS 和 Windows 列为远程控制主机，所以把手机直接和 Linux 服务器配对，文档里没有介绍。改为把手机和那台 Mac 或 Windows 电脑配对，最好是[一台常开的 Mac mini](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "需要准备什么",
      points: [
        "一台能用 SSH 登录的 Linux 服务器。Codex CLI 在 GitHub 上的安装指南列出的是 Ubuntu 20.04+ 或 Debian 10+，内存最低 4 GB，推荐 8 GB；正式版构建有 x86_64 和 ARM64 两种。",
        "一台装了 ChatGPT 桌面应用的 Mac 或 Windows 电脑，用来把服务器添加为 SSH 主机。如果想用手机访问服务器，这台电脑必须一直开着。",
        "一个用于 Codex 的 ChatGPT 账号。OpenAI 的套餐对照表列出：SSH 远程连接支持 Plus、Pro、Business、Enterprise 和 API key；手机远程控制支持 Plus、Pro、Business 和 Enterprise，但不支持 API key。",
        "手机上的 ChatGPT App（iOS 或 Android）。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Linux VPS 上配置 Codex",
      steps: [
        {
          title: "租一台服务器并确认 SSH 能用",
          text: "创建一台 Linux 服务器，确认能从要运行桌面应用的那台 Mac 或 Windows 电脑用 SSH 登录。使用基于密钥的登录，并用一个只有 Codex 所需权限的账号，而不是 root。",
        },
        {
          title: "在服务器上安装 Codex CLI",
          text: "在服务器上运行 OpenAI 的安装脚本；以后用同一条命令就能更新，用 npm 也可以。为 Codex 的沙盒安装 bubblewrap：如果 PATH 里没有 `bwrap`，Codex 会退而使用一个自带的辅助程序，它需要非特权用户命名空间（unprivileged user namespaces），而且 Codex 启动时会发出警告。在 Ubuntu 24.04 上，可能要加载 `bwrap-userns-restrict` 这个 AppArmor 配置文件后，警告才会消失。",
          code: install,
        },
        {
          title: "在无界面的服务器上登录",
          text: "服务器上没有浏览器，所以用设备码登录：运行 `codex login --device-auth`，或者选择 Sign in with Device Code，然后按提示操作。它还是 Beta 版，而且必须先在你的 ChatGPT 安全设置里开启设备码登录，或者由工作区管理员开启。如果用不了，就用 `ssh -L 1455:localhost:1455` 转发登录回调，再在服务器上运行 `codex login`；或者从一台已经登录的电脑复制 `~/.codex/auth.json`，并像对待密码一样保管这个文件。",
          code: login,
        },
        {
          title: "把服务器加到 SSH 配置里",
          text: "在 Mac 或 Windows 电脑上，往 `~/.ssh/config` 里添加一条 Host 条目，确认 `ssh devbox` 能连上。Codex 会从这个文件读取具体的主机别名，忽略只有通配模式的条目。桌面应用在远程用户的登录 shell 里启动 Codex，所以 `codex` 必须在那里的 PATH 上。",
          code: ssh,
        },
        {
          title: "在桌面应用里把它添加为 SSH 主机",
          text: "在 ChatGPT 桌面应用里打开 Settings > Connections，添加或启用这台 SSH 主机，然后在服务器上选一个项目文件夹。这个项目里的对话会在服务器上运行命令、读取文件、写入修改。",
        },
        {
          title: "用手机控制它",
          text: "在同一台 Mac 或 Windows 电脑上打开 Settings > Connections > Control this Mac or PC，选择 Set up 或 Add，再用 ChatGPT App 扫描二维码。在手机上打开 Codex，选中那台电脑和服务器上的项目，然后新开一个对话。这个对话经由那台电脑在服务器上运行，所以要让那台电脑保持唤醒并在线；[家里的一台 Mac mini](/blog/codex-mac-mini) 就能胜任。配置细节和解决办法见 [Codex 远程控制](/blog/codex-remote-control)。",
        },
      ],
      source: { label: "来源：OpenAI 的远程连接和 SSH 主机文档（英文）", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "只用终端：在 tmux 里通过 SSH 运行 Codex CLI",
      text: [
        "如果你只需要终端，可以不用桌面应用。SSH 登录服务器，在 tmux 里运行 Codex CLI，然后分离（detach）会话：断开连接后 Codex 会继续运行，之后从任何一台能 SSH 登录的电脑都能重新接上。",
      ],
      steps: [
        {
          title: "在 tmux 里启动 Codex",
          text: "如果还没有 tmux，就从你所用发行版的软件包里安装它，启动一个会话，然后在项目文件夹里运行 `codex`。",
          code: tmux,
        },
        {
          title: "了解它做不到什么",
          text: "这个方案和你的手机是不连通的。OpenAI 表示，手机端的设置要从桌面应用开始，没法从 CLI 设置。CLI 有一个实验性的 `codex remote-control` 命令，文档把它和受管理的远程控制客户端以及 SSH 工作流联系在一起，但没有介绍怎么把手机和一台只运行 CLI 的服务器配对。",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "保证服务器安全",
      points: [
        "像对待任何 SSH 服务器一样对待它：用受信任的密钥、权限最小的账号，并且不要让未经认证的服务在公网上监听。",
        "不要暴露 Codex 的 app server。`codex app-server --listen` 和 `codex --remote` 主要用于开发和调试，OpenAI 警告不要在共享网络或公共网络上开放 app-server 的传输通道。",
        "要从服务器所在网络之外访问它，就用 VPN 或 Tailscale 这样的 mesh 组网工具；Tailscale 只通过加密的 WireGuard 链路连接你自己的设备。",
        "保管好 `~/.codex/auth.json`；OpenAI 说要像对待密码一样对待它。",
        "沙盒设置、安全控制和批准机制对服务器上的对话照样生效，和在本地一样；Linux 上的沙盒需要 bubblewrap。",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "在你的电脑和服务器之间转移对话",
      text: [
        "桌面应用可以把一个对话连同它的 Git 状态，在你的电脑和已连接的 SSH 主机之间转交。两边都需要有同一个 Git 仓库的已保存项目。在对话底部点选它当前运行的位置，选择目标主机（选 This computer 就转回本机），检查一遍，然后选择 Hand off。Codex 会在目标那边创建或复用一个 worktree。还在生成中的回复会被中断，而且对话没法转交给 Codex cloud。",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "完全不用服务器：Codex cloud",
      points: [
        "Codex cloud 在 OpenAI 的云端运行编程任务。每个任务都有自己的工作空间，电脑休眠时也会继续干活。",
        "可以从网页、桌面应用（Work in > Cloud）或手机上的 ChatGPT App（打开 Codex，选择 Cloud 和一个环境）启动。用默认环境的话，不选代码仓库也能开始，Codex 可以从你已连接的 GitHub 或 GitLab 账号检出代码仓库。",
        "云端任务只能看到自己的云端环境：你的本地文件、正在运行的进程、浏览器登录状态和 VPN 访问都不会带过去。可复用的配置在 Work in > Cloud > Select environment > Create environment 下。",
        "它需要用 ChatGPT 登录，不能用 API key。在终端里，`codex cloud` 会打开一个云端对话的选择器，`codex cloud exec` 用来提交任务。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mac mini 主机、Linux SSH 主机和 Codex cloud 对比",
      headers: ["", "Mac mini 主机", "Linux SSH 主机", "Codex cloud"],
      rows: [
        ["Codex 在哪运行", "在 Mac mini 上，在 ChatGPT 桌面应用里", "在服务器上；由 Mac 或 Windows 电脑上的桌面应用通过 SSH 启动", "在 OpenAI 的云端，每个任务一个工作空间"],
        ["手机连的是什么", "Mac mini", "运行桌面应用的 Mac 或 Windows 电脑", "OpenAI 的云端：打开 Codex，选择 Cloud"],
        ["什么必须一直开着", "Mac mini", "服务器，以及那台 Mac 或 Windows 电脑", "你自己的设备都不用"],
        ["文件、登录状态和 VPN", "Mac mini 上的一切", "服务器上有的东西", "只有云端环境；本地文件、浏览器登录状态和 VPN 访问都不会带过去"],
        ["适合", "Computer Use 和通过 Chrome 扩展执行的浏览器任务、iOS 开发、把文件留在家里", "在服务器上做终端工作，用它的算力和依赖", "只需要代码仓库的编程任务"],
        ["套餐（OpenAI 的对照表）", "手机远程控制：Plus、Pro、Business、Enterprise", "SSH 连接：上述套餐和 API key；用手机控制主机仍然需要上述套餐之一", "Plus、Pro、Business、Enterprise；不支持 API key"],
        ["配置", "桌面应用、保持唤醒的设置、远程控制", "服务器上的 CLI、SSH 配置、桌面应用里的 SSH 主机", "选择或创建一个云端环境"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给服务器一份长期工作",
      text: [
        "一台永不休眠的服务器，仍然在等你的下一条提示词。Crewmark 把它上面的一个 Codex 对话变成一名 AI 员工，有岗位、量化目标、工作时间和心跳：工作时间内，`crewmark` CLI（除了 macOS 和 Windows，在 Linux 上也能运行）会唤醒这名员工，让它处理共享看板上自己的 issue。运行它的电脑必须一直开着，而 VPS 正是如此。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如软件工程师或 SEO 专员，写下它的目标和 KPI。",
        },
        {
          title: "在服务器上连接 Codex",
          text: "把 setup 链接粘贴到服务器上的一个 Codex 对话里。它会安装 `crewmark` CLI，并把这个对话绑定到这名员工。Claude Code 也可以，见[在 VPS 上运行 Claude Code](/blog/claude-code-vps)。",
        },
        {
          title: "设定工作时间和心跳",
          text: "可以只排工作日，也可以每天都排；工作时间可以跨过午夜；每 15、30、60、120 或 240 分钟唤醒一次。每次唤醒都进入同一个 Codex 对话，所以它会从上次停下的地方接着干。Codex 自带的定时方式对比，见[如何让 Codex 主动工作](/proactive-codex)。",
        },
        {
          title: "用手机派 issue、和它对话",
          text: "在手机浏览器里打开 crewmark.ai，创建并指派 issue，或者在员工的工作记录里给它写消息；消息会送到服务器上的 Codex 对话里，它也在那里回复。一指派 issue，员工马上就会被唤醒；需要你审核或拍板时，它会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "把 Linux VPS 配置成 Codex 的 SSH 主机" },
  mid: {
    title: "想让服务器在你不发提示词时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "可以在 VPS 上运行 Codex 吗？",
        a: "可以。Codex CLI 能在 Linux 上运行：用 `curl -fsSL https://chatgpt.com/codex/install.sh | sh` 安装，用 `codex login --device-auth` 登录，然后要么通过 SSH 在 tmux 里使用它，要么在 Mac 或 Windows 电脑上的 ChatGPT 桌面应用里把服务器添加为 SSH 主机，而那台电脑可以用手机控制。",
      },
      {
        q: "没有浏览器，怎么在 VPS 上登录 Codex？",
        a: "运行 `codex login --device-auth`，或者选择 Sign in with Device Code，然后按提示操作。它还是 Beta 版，需要在你的 ChatGPT 安全设置里开启，或者由工作区管理员开启。否则，就用 `ssh -L 1455:localhost:1455 user@server` 转发回调，在服务器上运行 `codex login`；或者从一台已经登录的电脑复制 `~/.codex/auth.json`。",
      },
      {
        q: "怎么把 Codex 连到 VPS？",
        a: "在运行 ChatGPT 桌面应用的 Mac 或 Windows 电脑上，把服务器添加到 `~/.ssh/config`，确认 `ssh <alias>` 能连上。确保 `codex` 已安装、已登录，并且在远程用户登录 shell 的 PATH 上，然后在 Settings > Connections 里添加这台主机，再选一个远程项目文件夹。",
      },
      {
        q: "可以用手机控制 VPS 上的 Codex 吗？",
        a: "可以，但要经过一台 Mac 或 Windows 电脑。你的手机控制那台电脑上的 ChatGPT 桌面应用，应用再通过 SSH 在服务器上运行对话，所以那台电脑必须保持唤醒并在线。OpenAI 的文档没有介绍怎么把手机直接和 Linux 服务器配对，或者只和 CLI 配对。",
      },
      {
        q: "ChatGPT 桌面应用能在 Linux 服务器上运行吗？",
        a: "有一个 Linux 版 ChatGPT 桌面应用，目前是预览版，面向桌面版的 Ubuntu、Debian、Fedora 和 Arch Linux，还没有 Computer Use。OpenAI 的文档没有涉及没有桌面环境的服务器，Linux 也不在远程控制主机之列。在 VPS 上，就用 Codex CLI。",
      },
      {
        q: "在 VPS 上运行 Codex 安全吗？",
        a: "像对待任何 SSH 服务器一样对待它：基于密钥的登录、权限最小的账号，不要有未经认证的公网监听。不要在公共网络上暴露 Codex 的 app server，从外部访问服务器时用 VPN 或 mesh 组网，保管好 `~/.codex/auth.json`，并安装 bubblewrap，让沙盒能正常工作。",
      },
    ],
  },
  cta: {
    title: "让你的服务器干起活来。",
    text: "Crewmark 把 Codex 和 Claude Code 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 OpenAI 的文档（远程连接、Codex CLI、身份验证、沙盒、Linux 版应用、Codex cloud、套餐）、GitHub 上的 Codex README 和安装指南，以及 Tailscale 文档核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenAI 及本页提到的任何公司都无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
};
