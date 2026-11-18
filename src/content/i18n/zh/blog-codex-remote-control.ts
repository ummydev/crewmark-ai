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
    title: "Codex 远程控制：用手机操作电脑上的 Codex",
    description:
      "用 ChatGPT App 控制 Mac 或 Windows 电脑上的 Codex：扫二维码完成设置、SSH 主机、手机上能做什么、主机需要满足的条件，以及远程控制用不了时怎么解决。",
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
        "设置在桌面应用里完成；文档没有给出从 Codex CLI 或 IDE 插件启动它的命令。",
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
        q: "可以用手机控制 Codex 吗？",
        a: "可以。在 ChatGPT 桌面应用里打开 Settings > Connections > Control this Mac or PC，用手机扫描二维码，这台电脑就会出现在 iOS 或 Android 版 ChatGPT App 的 Codex 下面。",
      },
      {
        q: "可以远程控制 Codex CLI 吗？",
        a: "OpenAI 的文档只介绍了在 ChatGPT 桌面应用里设置，没有给出 CLI 或 IDE 插件的远程控制命令。想连到一台你平时用终端工作的机器，可以在桌面应用里把它添加为 SSH 主机，那台机器上要装好 Codex 并已登录。",
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
    ],
  },
  cta: {
    title: "让 Codex 在你离开时也继续干活，而不只是在你查看时才回应。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照 OpenAI 的 Codex 官方文档（远程连接、手机端、Codex Cloud）核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenAI 无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
};
