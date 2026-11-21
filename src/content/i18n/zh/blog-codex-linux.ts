import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

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
    title: "Codex Linux 安装教程：桌面应用、CLI 与沙盒",
    description:
      "在 Linux 上安装 Codex：面向 Ubuntu、Debian、Fedora 和 Arch 的 ChatGPT 桌面应用预览版，或搭配 bubblewrap 的 CLI。另附无界面登录和 SSH 主机。",
  },
  breadcrumb: "Linux 上的 Codex",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "博客 · Codex",
    title: "Linux 上的 Codex：桌面应用预览版、CLI，以及 Linux 暂时做不到的事",
    lead: "在 Linux 机器上运行 Codex 有两种方式。包含 Codex 的 ChatGPT 桌面应用从 2026 年 8 月起在 Linux 上推出了预览版，支持 x64 和 ARM64 上的 Ubuntu、Debian、Fedora 和 Arch。Codex CLI 一条命令就能装好，沙盒用的是 `bubblewrap`。这篇指南讲两种安装方式、在无界面服务器上怎么登录、Linux 暂时还没有的功能（Computer Use，以及用手机控制 Linux 主机）、Linux 机器怎样仍然能作为 Mac 或 Windows 电脑上桌面应用的 SSH 主机，以及 Codex cloud。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "在 Linux 上该用哪个 Codex",
      points: [
        "ChatGPT 桌面应用，目前是预览版：一个窗口，Codex 和 Chat、Work 并列。这就是 Linux 上的 Codex 图形界面（GUI）。OpenAI 的指南针对的是桌面版 Linux；在没有桌面环境的服务器上，就用 CLI。",
        "Codex CLI：在终端里运行，桌面电脑上可以用，通过 SSH 访问的无界面服务器上也可以用。",
        "IDE 插件，支持 VS Code、Cursor 和 Windsurf，适合想留在编辑器里的人。",
        "Codex cloud：任务在 OpenAI 的服务器上运行，所以你自己的设备都不用一直开着。见下文的 [Codex cloud](#cloud)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Linux 上安装 Codex 桌面应用",
      steps: [
        {
          title: "确认你的发行版和架构",
          text: "预览版支持 Ubuntu 24.04 LTS 和 26.04 LTS、Debian 13、Fedora 43 和 44，以及保持最新、已完全更新的 Arch Linux。其他发行版也许能用，但没有正式支持。安装包有 x64 和 ARM64 两种：运行 `uname -m`；`x86_64` 表示 x64，`aarch64` 或 `arm64` 表示 ARM64。",
          code: "uname -m",
        },
        {
          title: "下载并安装安装包",
          text: `下载适合你的发行版和架构的安装包（见 [OpenAI 的 Linux 应用指南](${linuxAppDocs})），然后在保存它的文件夹里安装。在 Arch 上，OpenAI 的安装脚本还会执行一次完整的系统升级。`,
          code: appInstall,
        },
        {
          title: "打开它并选择 Codex",
          text: "从应用菜单里打开 ChatGPT，或者在终端里运行 `chatgpt`，登录后选择 Codex。在 Wayland 上，只要有 XWayland，应用就会用它；原生 Wayland 还是实验性的，可以用 `chatgpt --ozone-platform=wayland` 强制启用。",
        },
        {
          title: "保持更新",
          text: "更新通过你的包管理器获取。",
          code: appUpdate,
        },
        {
          title: "让长对话一直运行",
          text: "打开 Settings > General > Prevent sleep while running（macOS 和 Linux 上都有这个选项），这样你离开电脑时，本地对话也会继续进行。",
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，Linux 版 ChatGPT 应用（英文）", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "怎么在 Linux 上安装 Codex CLI",
      steps: [
        {
          title: "运行安装脚本",
          text: "同一条命令既能安装、也能更新 Codex；如果已安装的版本支持，`codex update` 也能完成更新。装了 Node.js 的话，用 `npm install -g @openai/codex` 也可以。OpenAI 发布了 x86_64 和 aarch64 的 Linux 构建。",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "为沙盒安装 bubblewrap",
          text: `Codex 的 Linux 沙盒需要 \`bubblewrap\`。如果 PATH 里没有 \`bwrap\`，Codex 会退而使用一个自带的辅助程序，它需要非特权用户命名空间（unprivileged user namespaces），而且 Codex 启动时会发出警告。在 Ubuntu 25.04 上，软件源里的 bubblewrap 直接就能用；在 Ubuntu 24.04 上，可能要加载 \`bwrap-userns-restrict\` 这个 AppArmor 配置文件后，警告才会消失（见 [OpenAI 的沙盒文档](${sandboxingDocs})）。`,
          code: bubblewrap,
        },
        {
          title: "登录",
          text: "运行 `codex`，选择 Sign in with ChatGPT 来使用你的套餐，或者用 API key 登录，按标准 API 费率计费。Codex cloud 需要用 ChatGPT 登录。登录后，`codex login status` 会以 0 退出。",
        },
        {
          title: "在无界面服务器上，用设备码登录",
          text: "机器上没有浏览器时，选择 Sign in with Device Code，或者运行 `codex login --device-auth`（目前是 Beta 版）。必须先在你的 ChatGPT 安全设置里开启设备码登录，或者由工作区管理员开启。另外还有两种办法：从一台浏览器登录成功的电脑复制 `~/.codex/auth.json`，并像对待密码一样保管这个文件；或者通过 SSH 转发登录回调，再在服务器上运行 `codex login`。",
          code: headless,
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，Codex CLI（英文）", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Linux 上暂时还没有 Computer Use",
      text: [
        "Computer Use 让 Codex 通过移动指针和打字来操作桌面应用。Linux 预览版的桌面应用里还没有它；OpenAI 的 Linux 指南说，以后的版本会加上。目前，它只能在 macOS 和 Windows 上的桌面应用里运行。",
      ],
      points: [
        "在终端里进行的工作照样能在 Linux 上运行：Codex 在 `bubblewrap` 沙盒里运行命令、编辑文件。",
        "需要操作桌面应用的任务，就用 Mac 或 Windows 电脑。在 Windows 上，Computer Use 干活时会占用屏幕，见 [Windows 上的 Codex](/blog/codex-windows)。想要一台常开的 Mac，见[在 Mac mini 上运行 Codex](/blog/codex-mac-mini)。",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "从 Mac 或 Windows 电脑上的桌面应用使用 Linux 机器",
      text: [
        "OpenAI 的远程连接文档只把 Mac 和 Windows 电脑列为 ChatGPT 手机 App 能控制的主机，所以用手机控制 Linux 版桌面应用在文档里没有介绍。不过 Linux 机器仍然可以当 SSH 主机：Mac 或 Windows 电脑上的桌面应用打开它上面的项目，Codex 在那里运行命令、读取文件、写入修改。然后你再经由那台 Mac 或 Windows 电脑，用手机操作它。",
      ],
      steps: [
        {
          title: "把 Linux 机器加到 SSH 配置里",
          text: "在运行桌面应用的 Mac 或 Windows 电脑上，往 `~/.ssh/config` 里添加一台主机。Codex 会从这个文件读取具体的主机别名，忽略只有通配模式的条目。确认从那台电脑能用 `ssh devbox` 连上。像对待任何 SSH 访问一样对待它：受信任的密钥、权限最小的账号，不要有未经认证的服务在公共网络上监听；要访问你网络之外的机器，就用 VPN 或 mesh 组网工具。",
          code: sshConfig,
        },
        {
          title: "在 Linux 机器上安装并登录 Codex",
          text: "应用通过 SSH 在远程机器上、远程用户的登录 shell 里启动 Codex，所以 `codex` 必须在那里的 PATH 上。用上面的脚本安装并登录；在无界面服务器上，就用 `codex login --device-auth`。",
        },
        {
          title: "在桌面应用里添加这台主机",
          text: "进入 Settings > Connections，添加或启用这台 SSH 主机，并在上面选一个项目文件夹。如果同一个 Git 仓库在两边都保存成了项目，你就能在对话底部，把对话在你的电脑和 Linux 主机之间转交。",
        },
        {
          title: "用手机控制它",
          text: "按 [Codex 远程控制](/blog/codex-remote-control)里的方法，把手机和那台 Mac 或 Windows 电脑配对。手机和那台电脑通信，所以它必须一直开着；干活的则是 Linux 机器上的 Codex。如果是租来的服务器，见[在 VPS 上运行 Codex](/blog/codex-vps)。",
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 文档，远程连接（英文）", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "或者交给 Codex cloud 运行任务",
      text: [
        `如果你根本不想让任何机器一直开着，[Codex cloud](${cloudDocs}) 会在 OpenAI 的服务器上运行任务。每个任务都有自己的工作空间，电脑休眠时也会继续进行。`,
      ],
      points: [
        "可以从网页或桌面应用里通过 Work in > Cloud 启动任务，也可以从 ChatGPT 手机 App 的 Codex 里启动。在 Linux 终端里，`codex cloud` 会打开一个云端对话的选择器，`codex cloud exec` 用来提交任务，`codex cloud list` 列出最近的任务。",
        "它需要用 ChatGPT 登录，不能用 API key。OpenAI 的套餐对照表列出，Plus、Pro、Business 和 Enterprise 可以使用。",
        "云端任务只能看到自己的云端环境。你机器上的本地文件、正在运行的进程、浏览器登录状态和 VPN 访问都不会带过去，你电脑上的对话也没法转交给它。",
        "想要可复用的配置，就在 Work in > Cloud > Select environment > Create environment 下创建一个环境，可以给它完整的公网访问，也可以用允许列表。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给你 Linux 机器上的 Codex 一份长期工作",
      text: [
        "桌面应用、CLI 和 SSH 都要等你来启动下一个任务。Crewmark 把你 Linux 机器上的一个 Codex 对话变成一名 AI 员工，有岗位、目标、工作时间和心跳：在它的工作时间内，`crewmark` CLI（除了 macOS 和 Windows，在 Linux 上也能运行）会唤醒它，让它从共享看板上领下一个 issue。机器必须一直开着，而 Linux 服务器本来就是这样。",
      ],
      steps: [
        {
          title: "招一名员工",
          text: "从 [AI 员工岗位](/ai-employees)里选一个岗位，比如[软件工程师](/ai-employees/software-engineer)，写下它的目标和 KPI。",
        },
        {
          title: "在这台机器上连接一个 Codex 对话",
          text: "通过 `crewmark` CLI，把 Linux 桌面电脑或服务器上的一个 Codex 对话绑定到这名员工。这个对话就成了员工。Claude Code 也可以。",
        },
        {
          title: "设定工作时间和心跳",
          text: "按你的时区，可以只排工作日，也可以每天都排，工作时间可以跨过午夜。在这段时间里，CLI 每 15、30、60、120 或 240 分钟唤醒一次员工。见[如何让 Codex 主动工作](/proactive-codex)。",
        },
        {
          title: "在任意浏览器里派 issue",
          text: "在 crewmark.ai 的看板上创建并指派 issue；一指派，员工就会被唤醒。需要你审核或拍板时，它会把 issue 标为“需处理”，并在那里问你。可以交给它的活，见 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Linux 上安装 ChatGPT 桌面应用并使用 Codex" },
  mid: {
    title: "想让 Linux 上的 Codex 在你不发提示词时也继续干活？",
    text: "Crewmark 在你设定的时间内按心跳唤醒你的 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Linux 上有 Codex 图形界面吗？",
        a: "有。包含 Codex 的 ChatGPT 桌面应用在 Linux 上推出了预览版，支持 x64 和 ARM64 上的 Ubuntu 24.04 和 26.04、Debian 13、Fedora 43 和 44，以及 Arch Linux。如果你更想留在编辑器里，Codex IDE 插件可以在 VS Code、Cursor 和 Windsurf 里使用。",
      },
      {
        q: "怎么下载 Linux 版 Codex 桌面应用？",
        a: "按 OpenAI 的 Linux 应用指南，下载适合你架构的 .deb（Ubuntu、Debian）或 .rpm（Fedora）安装包，然后用 `sudo apt install ./chatgpt_amd64.deb` 或 `sudo dnf install ./chatgpt.x86_64.rpm` 安装；在 Arch 上，运行 OpenAI 的 `install-arch.sh` 脚本。然后打开 ChatGPT（或运行 `chatgpt`），选择 Codex。",
      },
      {
        q: "怎么在 Linux 上安装 Codex CLI？",
        a: "运行 `curl -fsSL https://chatgpt.com/codex/install.sh | sh`，或者 `npm install -g @openai/codex`。为沙盒安装 `bubblewrap`（`sudo apt install bubblewrap` 或 `sudo dnf install bubblewrap`），然后运行 `codex` 并登录。",
      },
      {
        q: "Codex 的 Computer Use 支持 Linux 吗？",
        a: "暂时还不支持。Linux 预览版的桌面应用里没有 Computer Use，OpenAI 说以后的版本会加上。目前它只能在 macOS 和 Windows 上的桌面应用里使用。",
      },
      {
        q: "怎么在无界面的 Linux 服务器上登录 Codex？",
        a: "在你的 ChatGPT 安全设置里开启设备码登录（或者请工作区管理员开启），然后运行 `codex login --device-auth`（目前是 Beta 版）。你也可以从一台已经登录的电脑复制 `~/.codex/auth.json`，或者用 `ssh -L 1455:localhost:1455 user@remote` 连上去，在服务器上运行 `codex login`。",
      },
      {
        q: "可以用手机控制 Linux 上的 Codex 吗？",
        a: "不能直接控制：OpenAI 的文档只把 Mac 和 Windows 电脑列为远程控制主机。在 Mac 或 Windows 电脑上的 ChatGPT 桌面应用里，把 Linux 机器添加为 SSH 主机，再用手机上的 ChatGPT App 控制那台电脑；Codex 在 Linux 机器上运行。",
      },
    ],
  },
  cta: {
    title: "让你 Linux 机器上的 Codex 干起活来。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 14 日对照 OpenAI 的 Codex 文档（Linux 版 ChatGPT 应用、CLI、登录、沙盒、Computer Use、远程连接和 Codex cloud）核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenAI 及本页提到的任何公司都无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
};
