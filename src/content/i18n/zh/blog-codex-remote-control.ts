import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# 运行 ChatGPT 桌面应用的那台电脑上的 ~/.ssh/config
Host devbox
  HostName devbox.example.com
  User me

# 先确认能连上，再在远程主机上登录 Codex
ssh devbox
codex   # 必须在远程用户登录 shell 的 PATH 里`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 远程控制（ChatGPT）：用手机操作 Codex",
    description:
      "用 ChatGPT App 控制 Mac 或 Windows 电脑上的 Codex：扫二维码完成设置、SSH 主机、让它 24 小时随时连得上，以及远程控制用不了时怎么解决。",
  },
  breadcrumb: "Codex 远程控制",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "博客 · Codex",
    title: "Codex 远程控制：用手机操作你电脑上的 Codex",
    lead: "远程连接让你用手机上的 ChatGPT App，操作运行在你 Mac 或 Windows 电脑上的 Codex 对话。代码仓库、文件、凭据和工具都留在电脑上；手机负责发送提示词、做批准，并把结果显示给你。这篇指南讲怎么设置、手机上能做什么、电脑需要满足什么条件、用不了时怎么解决，以及它和云端任务、能自己干活的 AI 员工有什么不同。",
    cta: "开始使用",
    secondary: "看怎么设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Codex 远程控制是什么",
      text: [
        "OpenAI 把它叫作 remote connections（远程连接）。运行着 ChatGPT 桌面应用的电脑就是主机，由你的手机或另一台电脑来控制它。会话用的是主机上的项目、对话、文件、凭据、权限、插件和本地工具，所以 Codex 的表现和你坐在电脑前时完全一样。",
      ],
      points: [
        "主机：macOS 和 Windows 上的 ChatGPT 桌面应用。OpenAI 的文档没有把 Linux 列为主机。",
        "手机：iOS 和 Android 上的 ChatGPT App，要保持最新版本。在 App 里打开 Codex（旧版本里叫 Remote）。",
        "连接经过一个安全中继，所以电脑不需要暴露在互联网上。",
        "设置在桌面应用里完成；OpenAI 表示，手机访问没法从 Codex CLI 或 IDE 插件里设置。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Codex 远程控制",
      steps: [
        {
          title: "在桌面应用里开启",
          text: "在电脑上打开 ChatGPT 桌面应用，进入 Settings > Connections > Control this Mac or PC。选择 Set up 或 Add，批准远程访问，并完成所需的验证。应用会显示一个二维码。在同一个地方，你还可以选择让电脑保持唤醒。",
        },
        {
          title: "配对手机",
          text: "用手机扫描二维码，它会打开 ChatGPT。确认是同一个账号和工作区，如果有 MFA、SSO 或 passkey 验证，也一并完成。之后这台电脑就会出现在 Codex 下面。一个二维码只配对一部手机和一台电脑，所以想用的每种组合都要分别配对。",
        },
        {
          title: "在手机上干活",
          text: "在电脑的某个项目里新开一个对话，或者打开已有的对话。你可以发后续消息、回答 Codex 的提问、批准命令，并审查 diff、测试结果、终端输出和截图。任务完成或需要你时，你会收到通知。",
        },
        {
          title: "可选：通过 SSH 控制远程机器",
          text: "桌面应用也能打开 SSH 主机上的项目。在 ~/.ssh/config 里添加一条 Host 条目，确认 `ssh <alias>` 能连上，在那台主机上安装 Codex 并登录，然后在 Settings > Connections 下添加这台主机，再选一个项目文件夹。",
          code: ssh,
        },
      ],
      source: { label: "来源：OpenAI 的远程连接文档（英文）", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "电脑需要满足的条件",
      points: [
        "电脑必须保持唤醒、在线，登录同一个账号和工作区，并运行着 ChatGPT 桌面应用。一休眠就无法访问。",
        "Mac 笔记本要开着盖子、接通电源才能一直连得上；合上盖子时，需要接一台外接显示器。",
        "在 Windows 上，如果 Codex 用到 Computer Use，要让会话保持解锁，因为 Computer Use 在前台运行。",
        "不在自己的网络里时，用 VPN 或 mesh 组网工具，而不是把电脑暴露在互联网上。",
        "你的工作区管理员可能需要先开启 Remote Control 访问权限。",
        "你没法把对话转交给 Codex 云端环境；要这样做，就改为启动一个云端任务。",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Windows 和 Linux 上的远程控制",
      text: ["上面的步骤在 Mac 和 Windows 电脑上都一样，因为两者都可以当主机。不一样的是 Linux。"],
      points: [
        "Windows：安装 ChatGPT 桌面应用，按上面的步骤打开 Settings > Connections > Control this Mac or PC。如果 Codex 用到 Computer Use，它会在当前活动的桌面上操作：移动指针、打字、把窗口切到前台，而且没法在后台运行。它干活时，要让 Windows 会话保持解锁和在线；电脑屏幕交给它的这段时间，就用手机来启动和查看工作。OpenAI 的文档还建议在一台 Windows 虚拟机里运行桌面应用，这样 Computer Use 接管的是虚拟机，而不是你的桌面。详见 [Windows 上的 Codex](/blog/codex-windows)。",
        "锁屏使用（locked use）能让从手机启动的 Computer Use 任务在电脑锁屏后继续运行，但它只支持 macOS。",
        "Linux：OpenAI 只把 macOS 和 Windows 列为主机，所以用手机控制 Linux 电脑在文档里没有介绍，尽管 Linux 版 ChatGPT 桌面应用现在已经推出了预览版。可行的做法是把 Linux 机器当作 SSH 主机：Mac 或 Windows 电脑上的桌面应用打开它上面的项目，你的手机再控制那台 Mac 或 Windows 电脑。详见 [Linux 上的 Codex](/blog/codex-linux) 和[在 VPS 上运行 Codex](/blog/codex-vps)。",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex 远程控制用不了？",
      points: [
        "手机上看不到电脑：检查桌面应用是否在运行、“Allow other devices to connect”是否已打开、两个 App 是否用同一个账号和工作区，以及是否都是最新版本。2026 年 6 月 8 日以来没用过的配对，需要重新配对。",
        "重新登录后 Remote Control 被关掉了：退出登录会关闭它，但配对还在。重新打开 Remote Control 即可。",
        "选择 Add 后报错：在电脑上重启桌面应用，再试一次。",
        "收不到批准请求：在 App 里打开 Codex，确认账号和工作区，重新扫描二维码，并请管理员确认你有 Remote Control 访问权限。",
        "老是断开连接：电脑休眠了、断网了，或者关掉了应用。让它保持唤醒并联网。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "远程控制、云端任务还是 AI 员工？",
      text: ["远程控制是一扇看向你电脑上 Codex 的窗口：它会等你告诉它下一步做什么。另外两种方式没有你也能一直干下去。"],
      headers: ["", "谁来启动工作", "在哪运行", "电脑要开着吗？", "适合"],
      rows: [
        ["远程控制", "你，用手机", "你的 Mac 或 Windows 电脑", "要，保持唤醒并在线", "离开工位时继续指挥本地的工作"],
        ["Codex 云端任务", "你，启动一次", "OpenAI 的云端", "不用", "交出一个只需要代码仓库的任务"],
        ["Crewmark AI 员工", "工作时间内的心跳", "你的电脑，在你自己的 Codex 里", "要", "一份长期工作：每个班次从看板上领下一个 issue"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "用手机随时看看，让它自己干活",
      text: [
        "用远程控制，每一步还是得由你来决定。Crewmark 把你的 Codex 变成一名 AI 员工，有岗位、目标、工作时间和心跳：它按时间表醒来，从看板上领下一个 issue，需要你做决定时给你发消息。远程控制就成了你用手机进去看看的方式。",
      ],
      steps: [
        {
          title: "在你的 Codex 上招一名员工",
          text: "在 Codex 对话里运行 setup 命令；这个对话就成了员工，在一次次唤醒之间保留它的记忆。见[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "给它设定工作时间和心跳",
          text: "在班上时，crewmark CLI 每 15 到 240 分钟往同一个 Codex 对话里排一条消息，让它领下一个 issue。见 [Codex 长时间任务](/blog/codex-long-running-tasks)。",
        },
        {
          title: "想看时就用手机进去看看",
          text: "在 ChatGPT App 的 Codex 里打开员工的对话，看它干活或给它指方向，也可以只回复它的消息。Claude Code 版本见 [Claude Code Remote Control](/remote-claude-code)。",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "用 Crewmark",
      title: "Crewmark 还多做了什么",
      text: [
        "远程控制让你在哪都能找到 Codex，但 Codex 仍然只在你开口时才干活。Crewmark 把你电脑上的 Codex 变成一名有自己工作的 AI 员工，并在 crewmark.ai 上给你一块看板，让你用手机跟进它。",
      ],
      steps: [
        {
          title: "一个岗位，一个量化目标",
          text: "每名员工都是你电脑上的一个 Codex 对话，有一个岗位（比如软件工程师或 SEO 专员），还有 KPI 和项目。它用 `crewmark me` 把这些读回来，所以每次醒来都从自己的工作出发，而不是从一个空白的提示词开始。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "工作时间和心跳",
          text: "按你的时区选好它的工作时间，可以只排工作日，也可以每天都排；工作时间可以跨过午夜。在这段时间里，`crewmark` CLI 每隔 15 分钟到 24 小时唤醒同一个 Codex 对话，让它从上次停下的地方接着干。",
        },
        {
          title: "它会一个 issue 接一个 issue 地干下去",
          text: "每次醒来，它都会领取看板上指派给自己的 issue，处理它们，并随时更新状态。需要审查、权限或某些信息时，它会把 issue 标为“需处理”，并在那里问你。",
        },
        {
          title: "用手机和它对话",
          text: "在手机浏览器里打开 crewmark.ai，在员工的工作记录里给它写消息。消息会送到它在你电脑上的 Codex 对话里，它也在那里回复。",
        },
        {
          title: "一块看板上的一支团队",
          text: "再招几名不同岗位的员工。它们共用一块看板，互相派 issue、评论、互相 @，每一次都会唤醒相关的那名员工。Codex 自带的定时功能，以及心跳和它有什么不同，见[如何让 Codex 主动工作](/proactive-codex)。",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "ChatGPT App 的远程控制和 Crewmark 有什么区别",
      text: [
        "ChatGPT App 在手机上已经能做很多事：在电脑的项目里新开对话、继续旧对话、回答提问、批准命令、审查 diff 和测试结果，并在任务完成或需要你时收到通知。Crewmark 面向的是那些不该等你来启动、也要继续推进的工作。",
      ],
      headers: ["", "ChatGPT App 远程控制", "Crewmark"],
      rows: [
        ["是什么", "用手机上的 ChatGPT App 控制你 Mac 或 Windows 电脑上的 Codex 对话", "一支 AI 员工团队，每名员工都是你电脑上的一个 Codex 或 Claude Code 对话，再加上 crewmark.ai 上的一块看板"],
        ["谁来启动工作", "你：用手机新开对话或发后续消息", "工作时间内的心跳，或者有人指派的 issue"],
        ["在手机上能做什么", "新开和继续对话、批准操作，审查 diff、测试结果和截图，接收通知", "在员工的工作记录里给它写消息、创建并指派 issue、在 issue 需要处理时回复"],
        ["你不再回复时", "Codex 完成任务、通知你，然后等你的下一条提示词", "员工接着做下一个 issue，卡住了就在 issue 上提问"],
        ["进度怎么看", "主机项目里的对话", "issue 看板：状态、优先级、评论和 KPI"],
        ["agent 团队", "你自己在主机和对话之间来回切换", "多名不同岗位的员工在同一块看板上，互相派 issue、互相 @"],
        ["目标和工作时间", "除了这段对话本身，没有别的", "每名员工都有一个量化目标和工作时间"],
        ["跑在哪", "你的 Mac 或 Windows 电脑，用你的 ChatGPT 套餐", "你的电脑，在你自己的 Codex 或 Claude Code 里，用你已经在付费的套餐"],
        ["出品方", "OpenAI", "Crewmark（与 OpenAI 无关）"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "随时随地 24 小时连上 Codex",
      text: [
        "远程控制只能连到保持唤醒、在线、已登录并运行着 ChatGPT 桌面应用的主机。主机一休眠、断网或关掉应用，手机就连不上它，直到它恢复为止；你自己选择 Sleep 也会中断访问。对于运行时间更长的工作，OpenAI 建议准备一台专用的、一直开着的 Mac 或 Windows 电脑，把你的项目、凭据和工具都装在上面。有两种方案能给你这样一台电脑，Codex cloud 则是第三种选择：",
      ],
      points: [
        "用家里的一台 Mac mini 当主机。让它不休眠，运行开启了远程控制的 ChatGPT 桌面应用，再把手机和它配对。作为一台 Mac，它还能运行 Computer Use，并通过 Chrome 扩展执行浏览器任务；开启锁屏使用后，Computer Use 任务在它锁屏后也能继续。见[怎么在 Mac mini 上配置 Codex](/blog/codex-mac-mini)。",
        "把一台 Linux 服务器当作 SSH 主机。在服务器上安装 Codex CLI 并登录，再在桌面应用的 Settings > Connections 下添加它；它的项目里的对话会在服务器上运行命令、修改文件。你的手机连的仍然是运行桌面应用的 Mac 或 Windows 电脑，而不是服务器，所以那台电脑也得一直开着。家里的一台 Mac mini 就可以当这台主机。见[怎么在 VPS 上运行 Codex](/blog/codex-vps)。",
        "Codex cloud。在 ChatGPT App 里打开 Codex，选择 Cloud 和一个环境。任务在 OpenAI 的云端运行，电脑休眠时也会继续干活，但它只能看到自己云端环境里的东西：你的本地文件、正在运行的进程、浏览器登录状态和 VPN 访问都不在那里。你电脑上的对话也没法转交给它。",
        "Crewmark 的员工也在你自己的电脑上运行，所以同样的规则也适用。在一台常开的 Mac mini 或服务器上，它们的工作时间可以每天都排，也可以跨过午夜。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Codex 远程控制" },
  mid: {
    title: "想让 Codex 在你不指挥时也继续干活？",
    text: "Crewmark 在工作时间内按心跳唤醒你的 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "ChatGPT 远程控制是什么？",
        a: "这是很多人对 OpenAI 远程连接的叫法：用你手机上的 ChatGPT App，或者另一台 Mac 或 Windows 电脑，操作在主机电脑的 ChatGPT 桌面应用里运行的 Codex 对话。干活的是主机；手机负责发送提示词、做批准。",
      },
      {
        q: "怎么在 ChatGPT 里开启远程控制？",
        a: "在主机电脑上打开 ChatGPT 桌面应用，进入 Settings > Connections > Control this Mac or PC，选择 Set up 或 Add，然后用手机上的 ChatGPT App 扫描二维码。主机必须是一台保持唤醒的 Mac 或 Windows 电脑。",
      },
      {
        q: "可以用手机控制 Codex 吗？",
        a: "可以。在 ChatGPT 桌面应用里打开 Settings > Connections > Control this Mac or PC，用手机扫描二维码，这台电脑就会出现在 iOS 或 Android 版 ChatGPT App 的 Codex 下面。",
      },
      {
        q: "可以远程控制 Codex CLI 吗？",
        a: "手机访问只能在 ChatGPT 桌面应用里设置；OpenAI 表示，没法从 CLI 或 IDE 插件里设置。CLI 确实有一个实验性的 `codex remote-control` 命令（start、stop、pair），OpenAI 说它用于受管理的远程控制客户端和 SSH 工作流，但文档没有介绍怎么把手机和一台只装了 CLI 的机器配对。想连到一台你平时用终端工作的机器，可以在桌面应用里把它添加为 SSH 主机，那台机器上要装好 Codex 并已登录。",
      },
      {
        q: "Codex 远程控制支持 Linux 吗？",
        a: "文档列出的主机是 macOS 和 Windows 上的桌面应用，没有提到 Linux。不过 Linux 机器仍然可以作为 SSH 主机，从 Mac 或 Windows 的桌面应用连上去。",
      },
      {
        q: "电脑需要一直开着吗？",
        a: "需要。电脑要保持唤醒、在线、已登录，并运行着桌面应用；一休眠就无法访问。想让工作在电脑关机后也继续，就用 Codex 云端任务。",
      },
      {
        q: "Codex 远程控制安全吗？",
        a: "连接经过一个安全中继，电脑不会暴露在公共互联网上，Codex 的沙盒、安全控制和批准机制也照样生效。只配对你自己的、信得过的设备。",
      },
      {
        q: "Codex 远程控制为什么用不了？",
        a: "通常是桌面应用没在运行、“Allow other devices to connect”没打开、手机用的是另一个账号或工作区、某个 App 不是最新版本，或者电脑进入了休眠。如果这个连接 2026 年 6 月 8 日以来没用过，就用二维码重新配对。",
      },
      {
        q: "ChatGPT 远程控制支持 Windows 吗？",
        a: "支持。Windows 上的 ChatGPT 桌面应用可以当主机，设置方法也一样，都是通过 Settings > Connections > Control this Mac or PC。如果 Codex 用到 Computer Use，它会接管当前活动的桌面，所以它干活时要让 Windows 会话保持解锁和在线。见 [Windows 上的 Codex](/blog/codex-windows)。",
      },
      {
        q: "远程控制能和 Codex cloud 一起用吗？",
        a: "它们是分开的。远程控制操作的是你自己 Mac 或 Windows 电脑上的对话。在 ChatGPT App 的 Codex 里，你也可以选择 Cloud 和一个环境来启动云端任务；它在 OpenAI 的云端运行，电脑休眠时也会继续，但看不到你的本地文件和浏览器登录状态。你电脑上的对话没法转交给 Codex 云端环境。",
      },
      {
        q: "ChatGPT 远程控制能通过 SSH 用吗？",
        a: "能，通过桌面应用。把服务器添加到 `~/.ssh/config`，在上面安装 Codex 并登录，然后在 Settings > Connections 下添加它，再选一个远程项目。你的手机连的是运行桌面应用的 Mac 或 Windows 电脑，由它在服务器上运行对话，所以那台电脑必须一直开着。见[在 VPS 上运行 Codex](/blog/codex-vps)。",
      },
    ],
  },
  cta: {
    title: "让 Codex 在你离开时也继续干活，而不只是在你查看时才回应。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 14 日对照 OpenAI 的 Codex 官方文档（远程连接、手机端、Codex Cloud、CLI）核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenAI 无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
};
