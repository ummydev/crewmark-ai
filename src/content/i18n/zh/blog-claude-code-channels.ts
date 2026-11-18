import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# 在 Claude Code 里安装官方插件（选择 user scope）
/plugin install telegram@claude-plugins-official

# 保存 BotFather 给你的 token
/telegram:configure <token>

# 开启这个 channel，重启 Claude Code
claude --channels plugin:telegram@claude-plugins-official

# 给你的 bot 发一条消息，再用它回复的配对码完成配对
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Channels：Telegram、Discord、iMessage 设置教程",
    description:
      "Claude Code Channels 怎么工作，官方 Telegram、Discord、iMessage 插件怎么设置：命令、配对、发送者白名单、使用条件、Channels 不可用的原因，以及 Slack。",
  },
  breadcrumb: "Claude Code Channels",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code Channels：用 Telegram、Discord 或 iMessage 给 Claude Code 发消息",
    lead: "Channels（频道）把消息推进你电脑上已经在运行的 Claude Code 会话：你可以用手机给它发消息，在同一个聊天里收到答复，而活是在你真实的文件上干的。Telegram、Discord 和 iMessage 都有官方插件。这篇指南讲 Channels 怎么工作、每一种怎么设置、怎么挡住陌生人、为什么有时候它用不了，以及它和 Remote Control、Claude in Slack 有什么区别。",
    cta: "开始使用",
    secondary: "设置 Telegram",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code Channels 是什么",
      text: [
        "一个 channel 就是一个 MCP 服务器，它把事件推进你正在运行的 Claude Code 会话。它可以是双向的：Claude 读到消息后，通过同一个 channel 回复，就像一座聊天桥。只有会话开着时，事件才会送达。",
      ],
      points: [
        "官方 channel 插件：Telegram、Discord 和 iMessage，外加 fakechat，一个跑在 localhost 上的演示聊天。",
        "每一个都是 claude-plugins-official 里的插件，都需要先装好 Bun。",
        "你也可以自己做一个 channel，比如一个接收 CI 失败或错误告警的 webhook 接收器。",
        "Channels 还是研究预览版：`claude --help` 里没有列出 `--channels` 参数，它的语法也可能会变。",
        "终端里你会看到收到的消息和一条确认，比如 “sent”；回复的正文本身出现在聊天应用里。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Telegram channel",
      steps: [
        {
          title: "创建一个 bot",
          text: "在 Telegram 里打开 BotFather，发送 `/newbot`，给 bot 起一个名字和一个以 “bot” 结尾的用户名，然后复制 token。",
          code: telegram,
        },
        {
          title: "安装并配置插件",
          text: "在 Claude Code 里运行 `/plugin install telegram@claude-plugins-official`，选择 user scope。如果找不到这个插件市场（marketplace），先用 `/plugin marketplace add anthropics/claude-plugins-official` 添加它。然后用 `/telegram:configure <token>` 保存 token，或者在启动 Claude Code 之前设置 `TELEGRAM_BOT_TOKEN`。",
        },
        {
          title: "开启 channel 后重启",
          text: "退出 Claude Code，再带上 `--channels plugin:telegram@claude-plugins-official` 重新启动。可以同时传入多个 channel 插件，用空格隔开。",
        },
        {
          title: "配对并锁定",
          text: "给你的 bot 随便发一条消息，它会回复一个配对码。用 `/telegram:access pair <code>` 批准，然后运行 `/telegram:access policy allowlist`，这样只有你的账号能联系到这个会话。",
        },
      ],
      source: { label: "来源：Anthropic 的 Claude Code Channels 文档（英文）", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord 和 iMessage",
      points: [
        "Discord：在 Discord Developer Portal 里创建一个应用，复制 bot token，打开 Message Content Intent，再用 `bot` scope 邀请这个 bot。然后运行 `/plugin install discord@claude-plugins-official` 和 `/discord:configure <token>`，带上 `--channels plugin:discord@claude-plugins-official` 重启，私信这个 bot，再用 `/discord:access pair <code>` 配对。",
        "iMessage：只支持 macOS，不需要 bot 或 token。它读取你的 Messages 数据库，所以要给终端开启 Full Disk Access。安装 `imessage@claude-plugins-official`，带上 `--channels plugin:imessage@claude-plugins-official` 重启，然后给自己发一条消息。用 `/imessage:access allow <phone or Apple ID email>` 添加其他人。",
        "Slack：不是 channel。Claude in Slack 通过 @Claude 提及启动一个云端会话，而不是给你的本地会话发消息。",
        "WhatsApp 和其他应用：没有官方 channel 插件，要用的话得参照 Channels 参考文档自己做一个。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels 不可用或不工作？",
      points: [
        "账号类型：Channels 需要通过 claude.ai 登录，或者使用 Console API key。通过 Amazon Bedrock、Google Cloud 的 Agent Platform 或 Microsoft Foundry 都用不了。",
        "你的组织：在 Claude Team 和 Enterprise 上，Channels 会一直被拦住，直到 Owner 在 Organization settings > Claude Code > Channels 里把它打开。启动时会有一条警告说明这一点。没有组织的 Pro、Max 和 Ultra 账号会跳过这项检查。",
        "插件没有获批：预览期间，`--channels` 只接受 Anthropic 白名单（或你所在组织的白名单）上的插件。换成其他插件，Claude Code 会照常启动但不带这个 channel，启动提示会告诉你原因。",
        "bot 不回复：Claude Code 必须带着 `--channels` 运行；只有 channel 处于开启状态时，bot 才能回复。",
        "任务做到一半停了：权限提示会让会话暂停，直到有人回答。有些 channel 可以把权限提示转发到你的手机上。",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "挡住陌生人",
      points: [
        "每个官方 channel 都有一份发送者白名单，其他人发来的消息会被悄悄丢弃。Telegram 和 Discord 通过配对把你加进去；iMessage 会放行你自己发的消息。",
        "只有在 `--channels` 里点名的服务器才能推送消息；只写在 `.mcp.json` 里还不够。",
        "如果一个 channel 会转发权限提示，那它白名单上的任何人都能批准或拒绝你会话里的工具调用。只添加你放心交出这项权限的人。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels、Remote Control 和 Claude in Slack 的区别",
      headers: ["", "做什么", "在哪运行", "适合"],
      rows: [
        ["Channels", "把聊天消息、告警和 webhook 推进你开着的会话", "你的电脑", "用手机给会话发消息；响应 CI 和告警"],
        ["[Remote Control](/remote-claude-code)", "在 claude.ai 或 Claude App 里操作你的本地会话", "你的电脑", "离开工位时调整正在进行的工作"],
        ["Claude in Slack", "@Claude 提及会启动一个云端会话", "Anthropic 的云端", "从团队对话里发起任务"],
        ["Notification hook", "在 Claude 需要你时运行你的命令，比如弹出桌面提醒", "你的电脑", "知道一轮什么时候结束、什么时候需要你输入"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让 Claude Code 主动给你发消息，而不只是回答你",
      text: [
        "Channels 让你能和一个留着运行的会话说话。Crewmark 把这个会话变成一名 AI 员工：它在工作时间内按心跳醒来，从看板上领下一个 issue，卡住时在 Crewmark 里给你发消息，不用你先给它发。",
      ],
      steps: [
        {
          title: "在你的 Claude Code 上招一名员工",
          text: "在一个 Claude Code 对话里运行设置命令，这个对话就成了员工。见[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "给它工作时间和心跳",
          text: "选好它的工作时间和唤醒频率，每 15 到 240 分钟一次。见[怎么让 Claude Code 主动干活](/proactive-claude-code)。",
        },
        {
          title: "它需要你时再回复",
          text: "需要你拍板的事会以私信的形式发给你；回复一次，它就接着干。想让它通宵干活，请看[让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Claude Code 的 Telegram channel" },
  mid: {
    title: "想让 Claude Code 卡住时主动来找你？",
    text: "Crewmark 员工按心跳醒来，逐个处理看板上的任务，需要你拍板时会给你发消息。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code Channels 是什么？",
        a: "它们是把事件推进已经在运行的 Claude Code 会话的 MCP 服务器：可以是来自 Telegram、Discord 或 iMessage 的聊天消息，也可以是来自 CI 和监控系统的 webhook。Claude 可以通过同一个 channel 回复。Channels 目前是研究预览版。",
      },
      {
        q: "有官方的 Claude Code Telegram 插件吗？",
        a: "有：`telegram@claude-plugins-official`。用 `/plugin install` 安装，用 `/telegram:configure` 保存 BotFather 给你的 token，带上 `--channels plugin:telegram@claude-plugins-official` 启动 Claude Code，再用 bot 发来的配对码把你的账号配对上。",
      },
      {
        q: "Claude Code Channels 能用在 Slack 或 WhatsApp 上吗？",
        a: "两者都没有官方 channel。Slack 那边，Claude in Slack 改为通过 @Claude 提及启动云端会话。其他应用可以参照 Channels 参考文档自己做一个 channel。",
      },
      {
        q: "Claude Code Channels 为什么不可用？",
        a: "通常是因为你通过 Bedrock、Google Cloud 或 Foundry 登录，你的 Team 或 Enterprise 组织还没开启它，或者插件不在批准名单上。启动提示会写明原因。",
      },
      {
        q: "电脑关机后 Channels 还能用吗？",
        a: "不能。只有会话在你电脑上开着时，事件才会送达。想要一直在线，就在一台保持唤醒的机器上，把 Claude Code 放在后台进程或常驻终端里运行。",
      },
      {
        q: "Claude Code 干完活后怎么收到通知？",
        a: "加一个 `Notification` 或 `Stop` hook，让它弹出桌面提醒，比如在 macOS 上用 `osascript`。见 [Claude Code hooks](/blog/claude-code-hooks)。想在手机上收到消息，就让 Claude 完成后通过 channel 回复你。",
      },
    ],
  },
  cta: {
    title: "从回复消息，到自己处理任务队列。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照 Claude Code 官方的 Channels 文档核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标；Telegram、Discord 和 iMessage 是其各自所有者的商标。",
};
