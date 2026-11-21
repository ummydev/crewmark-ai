import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

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
    title: "Codex Windows 安装教程：应用、CLI、沙盒与 WSL2",
    description:
      "在 Windows 上通过 ChatGPT 应用下载 Codex 或安装 CLI，用 Windows 沙盒在 PowerShell 里运行或改用 WSL2，并解决沙盒设置失败的问题。",
  },
  breadcrumb: "Windows 上的 Codex",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Codex",
    title: "Windows 上的 Codex：安装应用或 CLI，再在沙盒和 WSL2 之间选择",
    lead: "Codex 能在 Windows 上原生运行。从 2026 年 7 月 9 日起，Codex 应用成了 ChatGPT 桌面应用的一部分，所以你要安装 ChatGPT，再在里面切换到 Codex；要在终端里用，一条 PowerShell 命令就能装好 Codex CLI。默认情况下，agent 在 Windows 沙盒下的 PowerShell 里运行，你也可以把它改到 WSL2 里。这篇指南讲下载和安装、三种沙盒以及各自需要的 Windows 版本、沙盒设置失败时文档给出的解决办法、Computer Use，以及怎么用手机控制 Windows 电脑。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "在 Windows 上该装哪个 Codex",
      points: [
        "ChatGPT 桌面应用，适合想要一个窗口界面的人。Codex 有自己的编程视图，和 Chat、Work 并列，带有 worktree、定时任务、Git、内置浏览器、文件预览、插件和技能（skills）。所有 ChatGPT 套餐都能用这个应用，包括 Free。",
        "Codex CLI，适合在终端里工作的人。可以用 PowerShell 脚本原生安装，也可以用 npm 安装。",
        "IDE 插件，适合在编辑器里工作的人。OpenAI 把它和应用、CLI 并列为在 Windows 上原生使用 Codex 的方式。",
        "推荐 Windows 11。较新且已完全更新的 Windows 10 也支持，但不作保证，而且需要 1809 或更高版本（为了 ConPTY）；不推荐更旧的 Windows 10。系统里应该能用 `winget`。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Windows 上下载和安装 Codex",
      steps: [
        {
          title: "下载 ChatGPT 桌面应用",
          text: "从 [OpenAI 的 Windows 应用页面](https://learn.chatgpt.com/docs/windows/windows-app)上的 Microsoft Store 链接获取，或者在 PowerShell 里用 winget 安装。打开 ChatGPT，登录，然后选择 Codex。",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "或者安装 Codex CLI",
          text: "打开一个新的 PowerShell 窗口，运行 OpenAI 的安装程序；再运行一次就会更新 Codex。如果装了 Node.js，也可以改用 npm。在 CLI 里，`codex app` 会打开桌面应用（需要的话会先安装），`/app` 会把当前会话移到桌面应用里。",
          code: cliInstall,
        },
        {
          title: "登录",
          text: "第一次运行时，选择 Sign in with ChatGPT 来使用你的套餐，或者用 API key 登录，按标准 API 费率计费。Codex cloud 需要用 ChatGPT 登录。登录后，`codex login status` 会以 0 退出。",
        },
        {
          title: "安装 Codex 要调用的工具",
          text: "Codex 用的是电脑上已经装好的工具。OpenAI 建议用 winget 安装 Git、Node.js、Python、.NET SDK 和 GitHub CLI，然后登录 GitHub。",
          code: tools,
        },
        {
          title: "选择 agent 在哪运行",
          text: "默认情况下，agent 在 Windows 沙盒下的 PowerShell 里原生运行。想改到 WSL2 里运行，就打开 Settings，把 agent 从 Windows native 切换到 WSL，然后重启应用。无论哪种模式，都要在输入框下方选择 Ask for approval，才能得到沙盒保护。对于需要管理员权限的命令，用 Run as administrator 启动应用，agent 会继承这个权限。集成终端可以是 PowerShell、Command Prompt、Git Bash 或 WSL。",
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，Windows 应用（英文）", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "原生 PowerShell 还是 WSL2？",
      text: [
        "OpenAI 的建议是默认使用原生沙盒；当你需要 Linux 原生工具、本来就在 WSL2 里工作，或者原生方案不适合你的环境时，再选 WSL2。WSL1 已经不再支持：它在 Codex 0.114 及以前还能用，从 0.115 起，Linux 沙盒改用 `bubblewrap`，WSL1 的支持也随之结束。",
      ],
      headers: ["", "原生（PowerShell）", "WSL2"],
      rows: [
        ["沙盒", "Windows 沙盒：MXC、elevated 或 unelevated", "Linux 沙盒，需要 `bubblewrap`"],
        ["安装 CLI", "PowerShell 安装程序或 npm", "在以管理员身份运行的 PowerShell 里执行 `wsl --install`，再在 WSL 里运行 Linux 安装脚本"],
        ["在桌面应用里", "默认就是", "Settings：把 agent 切换到 WSL，然后重启应用"],
        ["项目放在哪", "放在 Windows 磁盘上；WSL 可以通过 `/mnt/<drive>/...` 访问它们", "为了速度，放在 Linux 主目录下，比如 `~/code`，而不是 `/mnt/c`"],
        ["Codex 主目录", "`%USERPROFILE%\\.codex`", "Linux 主目录，除非你把 `CODEX_HOME` 指向那个 Windows 文件夹"],
        ["什么时候选", "默认就选它", "需要 Linux 原生工具，或者工作流本来就在 WSL2 里"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "怎么在 WSL2 里运行 Codex",
      steps: [
        {
          title: "安装 WSL2，并在里面安装 Codex",
          text: "在以管理员身份运行的 PowerShell 里运行 `wsl --install`，再运行 `wsl` 打开 Linux shell。在里面为沙盒安装 `bubblewrap`（`sudo apt install bubblewrap` 或 `sudo dnf install bubblewrap`），运行 Linux 安装脚本，然后启动 `codex`。",
          code: wslInstall,
        },
        {
          title: "把代码仓库放在 Linux 主目录里",
          text: "克隆到 `~/code` 这样的文件夹里，而不是 `/mnt/c` 下面，后者更慢。如果 WSL 里的 VS Code 找不到 Codex，用 `which codex` 看看它在哪。",
        },
        {
          title: "和 Windows 应用共用设置",
          text: "Windows 应用把 Codex 主目录放在 `%USERPROFILE%\\.codex`，而 WSL 里的 CLI 用的是 Linux 主目录。想共用一个，就在 WSL 里把 `CODEX_HOME` 设为那个 Windows 文件夹。",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "在桌面应用里打开 WSL 项目",
          text: "选择 Add new project（或按 Ctrl+O），输入 `\\\\wsl$\\`。如果 agent 仍然原生运行，更可靠的做法是把项目放在 Windows 磁盘上，再从 WSL 里通过 `/mnt/<drive>/...` 访问。",
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，Windows 和 WSL（英文）", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Codex Windows 沙盒：MXC、elevated 和 unelevated",
      text: [
        "Windows 沙盒让 Codex 不用 WSL 或虚拟机，就能在 PowerShell 里原生运行，同时限制它的命令及其子进程在磁盘和网络上能接触到什么。它有三种实现。对于个人账号，桌面应用会在支持的设备上自动选用 MXC。",
      ],
      headers: ["沙盒", "工作方式", "设置", "Windows 版本"],
      rows: [
        [
          "`mxc`（推荐）",
          "Microsoft Execution Containers",
          "不需要经管理员批准的设置，不需要额外的 Windows 账户，也不需要防火墙规则",
          "Windows 11 24H2（build 26100.9278）或 25H2（build 26200.9278）；Microsoft 仍在向 Windows 11 逐步推送",
        ],
        [
          "`elevated`（旧版，首选的备选方案）",
          "专用的低权限沙盒用户和防火墙规则；沙盒里的命令在没有管理员权限的情况下运行",
          "需要管理员批准它的设置",
          "文档没有单独的要求；适用一般指引（推荐 Windows 11，Windows 10 1809 或更新版本支持但不作保证）",
        ],
        [
          "`unelevated`（旧版备选方案）",
          "网络隔离较弱，也没有禁止读取的路径",
          "旧版沙盒设置失败时，文档建议把它当作临时方案",
          "文档没有单独的要求；同样适用一般指引",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Codex Windows 沙盒设置",
      steps: [
        {
          title: "检查 MXC 在你的电脑上能不能用",
          text: "用 Codex CLI 0.162.0 或更高版本运行这个测试。它应该输出 `MXC_OK`，并以退出码 0 结束。",
          code: mxcTest,
        },
        {
          title: "在 CLI 里优先使用 MXC",
          text: "对于个人账号，桌面应用已经会优先使用 MXC。在 CLI 里，或者在企业环境中，就在 Codex 主目录的 `config.toml` 里开启它。",
          code: preferMxc,
        },
        {
          title: "或者选一个旧版沙盒",
          text: "用不了 MXC 时，设为 `elevated`，最后的备选是 `unelevated`。elevated 沙盒需要管理员批准它的设置。在 CLI 里，`/setup-default-sandbox` 命令会执行这项设置；它只在 Windows 上、Codex 处于降级的受限令牌（restricted-token）沙盒时才会出现。",
          code: legacy,
        },
        {
          title: "或者让 IT 提前设置好",
          text: "管理员可以为其他用户预先配置 elevated 沙盒。以后想移除旧版沙盒，就以管理员身份运行 `codex sandbox uninstall`。",
          code: provision,
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，Windows 沙盒（英文）", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex Windows 沙盒设置失败？文档给出的解决办法",
      text: [`OpenAI 的 [Windows 沙盒页面](${sandboxDocs})有一份故障排查清单。下面是它涵盖的内容，沿用文档自己的标题。`],
      points: [
        "“My legacy sandbox setup failed”（旧版沙盒设置失败）：常见原因是拒绝了 UAC 或管理员提示，或者有策略阻止创建本地用户和组、修改防火墙、给沙盒用户授予登录权限，或者是其他策略。重试并批准提示、找 IT，或者先用 `unelevated` 沙盒顶一下。",
        "“I see Windows error 1385”（出现 Windows 错误 1385）：Windows 拒绝给沙盒用户它所需的登录类型。沙盒用户的登录权限正是策略可能阻止的东西之一，所以在受管理的电脑上，要找 IT。MXC 不会创建额外的 Windows 账户，所以在 Windows 11 24H2 或 25H2 上，它不依赖沙盒用户。",
        "“Codex switched me to the unelevated sandbox”、“Codex warns that some folders are writable by Everyone”、“Sandboxed commands cannot reach the network”和“Sandboxing worked before and then stopped”，在那个页面上各有单独的条目。",
        "要诊断问题，就看 `CODEX_HOME/.sandbox/sandbox.log`。永远不要把 `CODEX_HOME/.sandbox-secrets/` 文件夹发给任何人。",
        "在搜“setup didn't finish”？OpenAI 的文档里没有这个措辞的条目。文档里最接近的情况是“My legacy sandbox setup failed”。",
        "如果 PowerShell 不能运行 npm，并提示 `npm.ps1 cannot be loaded because running scripts is disabled on this system.`，常见的解决办法是 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`。",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Windows 上的 Computer Use 会占用屏幕",
      text: [
        "Computer Use 让 Codex 通过移动指针和打字来操作桌面应用。在桌面应用里，它可以在 macOS 和 Windows 上、在支持的地区，配合 ChatGPT Work 和 Codex 使用。要开启它，打开 Settings > Computer use，在 Control 下找到 Any App，选择 Install 或打开开关。",
      ],
      points: [
        "它在当前活动的桌面上运行，没法在后台工作。任务运行时，它会移动指针、打字、把窗口切到前台，所以你没法同时使用这台电脑。",
        "想让它在你离开时干活，就让电脑保持解锁和在线，再用手机通过[远程控制](/blog/codex-remote-control)查看进展；或者在一台 Windows 虚拟机里运行桌面应用，让 Computer Use 接管虚拟机，而不是你的屏幕。",
        "锁屏使用（locked use）能让任务在电脑锁屏后继续运行，但它只支持 macOS。",
        '要保存对应用的批准，就在 `$CODEX_HOME/config.toml` 的 `[computer_use.windows]` 下列出这些应用，比如 `always_allowed_app_ids = ["mspaint.exe"]`。',
        "在所有系统上，Computer Use 都不能自动操作终端应用或 ChatGPT 本身，不能以管理员身份登录，也不能批准安全和隐私提示。",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "用手机控制 Windows 电脑上的 Codex",
      text: [
        "和 Mac 一样，Windows 电脑也可以当远程控制的主机。手机上的 ChatGPT App 负责发送提示词和批准；电脑用它自己的项目、文件、凭据和工具来运行命令。完整的设置方法和解决办法见 [Codex 远程控制](/blog/codex-remote-control)。",
      ],
      points: [
        "在电脑上打开 ChatGPT 桌面应用，进入 Settings > Connections > Control this Mac or PC，然后选择 Set up 或 Add。用手机（iOS 或 Android）扫描二维码。",
        "之后这台电脑就会出现在 ChatGPT App 的 Codex 下面。旧版本的 App 里叫 Remote。",
        "让电脑保持唤醒、在线、已登录，并运行着桌面应用；一旦休眠或断网，远程访问就会中断，直到它恢复为止。对于用到 Computer Use 的任务，要让 Windows 会话保持解锁。",
        "OpenAI 的套餐对照表列出，Plus、Pro、Business 和 Enterprise 支持手机远程控制，用 API key 登录则不支持。在 ChatGPT 工作区里，可能需要管理员先开启 Remote Control 访问权限。",
        "这台电脑还能把 Linux 服务器当作 SSH 主机，打开上面的项目，这样你的手机就能经由电脑操作服务器上的 Codex。见[在 VPS 上运行 Codex](/blog/codex-vps) 和 [Linux 上的 Codex](/blog/codex-linux)。如果想改用一台常开的 Mac，见[在 Mac mini 上运行 Codex](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给你电脑上的 Codex 一份长期工作",
      text: [
        "远程控制和 Computer Use 仍然要等你来启动每个任务。Crewmark 把你 Windows 电脑上的一个 Codex 对话变成一名 AI 员工，有岗位、目标、工作时间和心跳：在它的工作时间内，`crewmark` CLI（除了 macOS 和 Linux，在 Windows 上也能运行）会唤醒它，让它从共享看板上领下一个 issue。为此，电脑必须一直开着。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如[软件工程师](/ai-employees/software-engineer)，写下它的目标和 KPI。",
        },
        {
          title: "在电脑上连接一个 Codex 对话",
          text: "通过 `crewmark` CLI，把电脑上的一个 Codex 对话绑定到这名员工。这个对话就成了员工。Claude Code 也可以。",
        },
        {
          title: "设定工作时间和心跳",
          text: "按你的时区，可以只排工作日，也可以每天都排，工作时间可以跨过午夜。在这段时间里，CLI 每 15、30、60、120 或 240 分钟唤醒一次员工。见 [Codex 长时间任务](/blog/codex-long-running-tasks)。",
        },
        {
          title: "在哪都能派 issue",
          text: "在任意浏览器里打开 crewmark.ai 的看板，创建并指派 issue；一指派，员工就会被唤醒。需要你审核或拍板时，它会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Windows 上下载并安装 Codex" },
  mid: {
    title: "想让电脑上的 Codex 在你不发提示词时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒你的 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "怎么在 Windows 上下载 Codex 应用？",
        a: "Codex 是 ChatGPT 桌面应用的一部分。从 OpenAI 的 Windows 应用页面上的 Microsoft Store 链接安装，或者在 PowerShell 里运行 `winget install --id 9PLM9XGG6VKS -s msstore`，然后打开 ChatGPT，选择 Codex。所有 ChatGPT 套餐都能用这个应用，包括 Free。",
      },
      {
        q: "怎么在 Windows 上安装 Codex CLI？",
        a: '打开一个新的 PowerShell 窗口，运行 `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`；如果装了 Node.js，也可以运行 `npm install -g @openai/codex`。然后运行 `codex`，用 ChatGPT 或 API key 登录。再运行一次安装程序就会更新 Codex。',
      },
      {
        q: "Windows 上的 Codex 需要 WSL 吗？",
        a: "不需要。在桌面应用、CLI 和 IDE 插件里，Codex 都能在 Windows 沙盒下的 PowerShell 里原生运行。WSL2 是可选的，适合需要 Linux 原生工具、或者工作流本来就在 WSL2 里的情况。从 Codex 0.115 起不再支持 WSL1。",
      },
      {
        q: "Codex Windows 沙盒是什么？",
        a: "Codex 的命令在 Windows 上原生运行时，它负责限制这些命令在磁盘和网络上能接触到什么。MXC 是推荐的实现，需要 Windows 11 24H2 或 25H2；`elevated` 和 `unelevated` 是旧版的备选方案。对于个人账号，桌面应用会在支持的设备上自动选用 MXC。",
      },
      {
        q: "Codex Windows 沙盒设置为什么会失败？",
        a: "OpenAI 的文档里没有“setup didn't finish”这条提示。对于旧版沙盒设置失败，文档列出的原因是拒绝了 UAC 或管理员提示，或者有策略阻止本地用户和组、防火墙修改或沙盒用户的登录权限。重试并批准提示、找 IT，或者先用 `unelevated` 顶一下。Windows 错误 1385 表示沙盒用户没有得到它所需的登录类型。",
      },
      {
        q: "可以用手机控制 Windows 电脑上的 Codex 吗？",
        a: "可以。在电脑上的 ChatGPT 桌面应用里进入 Settings > Connections > Control this Mac or PC，用 iOS 或 Android 上的 ChatGPT App 扫描二维码，并让电脑保持唤醒、在线、已登录。对于用到 Computer Use 的任务，要让它保持解锁。",
      },
    ],
  },
  cta: {
    title: "让你电脑上的 Codex 干起活来。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 OpenAI 的 Codex 文档（Windows 应用、Windows 沙盒、WSL、CLI、登录、Computer Use 和远程连接）核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenAI、Microsoft 及本页提到的任何公司都无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标；Windows 是 Microsoft 的商标。",
};
