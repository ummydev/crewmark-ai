import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 和 OpenClaw 对比，再比 Claude Code（2026）",
    description:
      "Hermes Agent 和 OpenClaw 有什么区别？二者与 Claude Code 又怎么比？根据各项目自己的文档，从定位、模型与订阅、记忆与 skill、安全机制，到如何从 OpenClaw 迁移到 Hermes，一文讲清。",
  },
  breadcrumb: "Hermes Agent 和 OpenClaw 对比",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI agent",
    title: "Hermes Agent、OpenClaw 和 Claude Code 对比：你该用哪个？",
    lead: "OpenClaw 和 Hermes Agent 是目前最大的两个开源个人 AI agent：都跑在你自己的电脑上，在 Telegram、Slack、WhatsApp 等聊天应用里回复你。OpenClaw 社区更大（GitHub 约 394,000 个 star）；Hermes Agent 出自 Nous Research（约 261,000 个 star），核心是一套学习循环，能把经验沉淀成 skill。Claude Code 则是另一类工具：在你的代码仓库里干活的编程 agent。本文根据三者自己的文档逐项对比，帮你选对工具，或者选对组合。",
    cta: "开始使用",
    secondary: "查看对比",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "先说结论",
      points: [
        "想要最多的渠道和集成、最大的社区，选 OpenClaw：Discord、iMessage、Slack、Teams、Telegram、WhatsApp、Signal 等 20 多个渠道都能接。",
        "想要一个会学习的助手，选 Hermes Agent：它能从经验中创建 skill，边用边改进，自己整理记忆，还内置 cron 定时调度。",
        "做软件开发、在代码仓库里干活，选 Claude Code：读代码、改代码、跑测试、提 pull request。",
        "想让 Claude Code 或 Codex 不用你催、从团队看板上自己接着干活？那需要的是 AI 员工，见本文末尾。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent、OpenClaw 和 Claude Code 对比",
      text: ["资料来自各项目的 README、文档以及 GitHub API，截至 2026 年 11 月 7 日。"],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["开发方", "Peter Steinberger 与社区；OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["定位", "住在聊天应用里的个人 AI 助手", "带学习循环、能自我进化的个人 agent", "在代码仓库里工作的编程 agent"],
        ["在哪里和它对话", "20 多个聊天渠道，外加 Control UI、CLI 和各端应用", "Telegram、Discord、Slack、WhatsApp、Signal、邮件、CLI；桌面应用", "终端、IDE、桌面应用；手机上用 Remote Control"],
        ["模型", "可切换：Claude、OpenAI 和 Codex、本地模型", "任意服务商：Nous Portal、OpenRouter、OpenAI、自定义端点", "Claude 系列模型"],
        ["Claude 订阅", "API key，或复用同一台机器上的 Claude Code 登录", "仅限开通额外用量额度的 Claude Max；Pro 不行", "包含在 Claude 套餐中"],
        ["记忆与 skill", "本地记忆；skill 和插件在 ClawHub 上分享", "由 agent 自己整理记忆；自动创建并改进 skill（agentskills.io 标准）", "CLAUDE.md、skill、hook、subagent"],
        ["定时任务", "Gateway 以守护进程方式常驻", "内置 cron 调度器", "`/loop` 和定时任务"],
        ["隔离", "除非配置沙箱，工具直接在主机上运行", "危险命令需要确认；可选 Docker 或 Modal", "权限模式与规则；沙箱"],
        ["许可证、star 数", "MIT，约 394k", "MIT，约 261k", "商业软件"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent 和 OpenClaw 的真正区别",
      points: [
        "学习能力：Hermes 的招牌是学习循环，完成复杂任务后会自己写 skill 并不断打磨。OpenClaw 的强项是广度：渠道更多，ClawHub 上插件更多，桌面端和移动端都有原生应用。",
        "安全默认值：OpenClaw 把收到的消息一律视为不可信，陌生发送者要先配对；但除非你配置了沙箱，主会话的工具都直接在主机上运行。Hermes 默认在执行危险命令前先征求你的同意，还能把工具隔离在 Docker 或 Modal 里。OpenClaw 公开披露安全修复：2026 年 1 月以来共 722 条安全公告，所有严重级别的问题均已修复。",
        "订阅：OpenClaw 可以复用本机的 Claude Code 登录；Hermes 只在开通了额外用量额度的 Max 套餐上支持 Claude 订阅。两者都支持用 ChatGPT/Codex 账号登录。",
        "治理：OpenClaw 由独立的 OpenClaw Foundation 运营，OpenAI 是捐助方；Hermes Agent 由 Nous Research 开发。",
        "迁移：Hermes 提供一条命令就能导入 OpenClaw 配置的工具（人设、记忆、skill 和消息渠道设置）。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何同时试用两者，或从 OpenClaw 迁移到 Hermes",
      steps: [
        {
          title: "并排安装",
          text: "两者都是一条命令安装，各自运行自己的 gateway，所以可以在同一台机器上用不同的聊天账号分别测试。",
          code: install,
        },
        {
          title: "先只接一个渠道",
          text: "从一个聊天应用开始，只允许你自己的账号；两者都会对陌生发送者要求配对或走白名单。",
        },
        {
          title: "先预览迁移",
          text: "`hermes import-agent openclaw --dry-run` 会列出将要迁移的内容；只有在你希望连 API key 一起复制时，才加上 `--migrate-secrets`。",
        },
        {
          title: "接入真实账号前，先定好隔离方案",
          text: "在 agent 读取别人发来的消息之前，先打开 OpenClaw 的沙箱或 Hermes 的 Docker 后端。想要默认就用容器隔离的方案，可以看 [OpenClaw 替代方案](/blog/openclaw-alternatives)。",
        },
      ],
      source: { label: "来源：Hermes Agent README", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw 和 Claude Code、Hermes 和 Claude Code 怎么比",
      text: [
        "它们解决的是不同的问题。OpenClaw 和 Hermes 是你发消息使唤的助手：处理收件箱、日程、调研、提醒，以及跨应用的各种杂事。Claude Code 则是写软件的地方：它读懂你的代码库、修改文件、运行命令和测试、提 pull request。很多人两个都用：日常生活交给聊天助手，仓库里的活交给 Claude Code（或 Codex）。OpenClaw 甚至可以复用同一台机器上的 Claude Code 登录。想让 Claude Code 按自己的节奏主动干活，可以看[如何让 Claude Code 主动工作](/proactive-claude-code)；想同时跑多个，可以看[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "当你需要的是有岗位的 agent，而不是助手",
      text: [
        "OpenClaw 和 Hermes 要你发消息才会回应。Crewmark 则把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 变成 AI 员工：每个员工都有岗位、目标和工作时间，按心跳定时醒来，从共享看板上接下一个 issue，需要你拍板时再给你发消息，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "[SEO 专员](/ai-employees/seo-specialist)、[软件工程师](/ai-employees/software-engineer)、[营销 agent](/ai-employees/marketing-agent) 等。",
        },
        {
          title: "接入你已经在用的 agent",
          text: "每个员工都在自己的会话和检出目录里工作。",
        },
        {
          title: "把看板填满",
          text: "分配 issue，只回答真正需要你决定的事。了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "并排试用 Hermes Agent 和 OpenClaw" },
  mid: {
    title: "需要能一条条消化 backlog 的 agent？",
    text: "Crewmark 把 Claude Code 和 Codex 变成 AI 员工，按心跳定时从你的看板上接下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "Hermes Agent 和 OpenClaw 常见问题",
    items: [
      {
        q: "Hermes Agent 比 OpenClaw 好吗？",
        a: "取决于你看重什么。Hermes Agent 侧重学习能力（自己创建并改进 skill），默认在执行危险命令前先询问。OpenClaw 的渠道、应用和社区插件更多。",
      },
      {
        q: "可以从 OpenClaw 迁移到 Hermes Agent 吗？",
        a: "可以。Hermes 自带 `hermes import-agent openclaw`，能导入你的人设、记忆、skill 和消息渠道设置；建议先加 `--dry-run` 运行一遍。",
      },
      {
        q: "哪个能用我的 Claude 订阅？",
        a: "OpenClaw 可以复用同一台机器上的 Claude Code 登录，也可以用 API key。Hermes Agent 只在开通了额外用量额度的 Claude Max 上支持 Claude 订阅；Pro 用户需要用 API key。",
      },
      {
        q: "OpenClaw 和 Hermes Agent 免费吗？",
        a: "两者都是 MIT 许可证下的开源项目。你需要为所用的模型付费；Nous Research 还为 Hermes 提供可选的 Nous Portal 订阅。",
      },
      {
        q: "OpenClaw 和 Claude Code 该用哪个？",
        a: "OpenClaw 是住在聊天应用里的个人助手；Claude Code 是在代码仓库里工作的编程 agent。两者互补，而且 OpenClaw 可以复用同一台机器上的 Claude Code 登录。",
      },
      {
        q: "Hermes Agent 和 Codex 有什么区别？",
        a: "Codex 是 OpenAI 推出的、在代码仓库里工作的编程 agent。Hermes 是通用的个人 agent，可以用 ChatGPT/Codex 账号登录来调用 OpenAI 的模型。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一个聊天窗口。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 OpenClaw 和 Hermes Agent 的 README、文档以及 GitHub API 查证。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenClaw Foundation、Nous Research、Anthropic 或 OpenAI 无关，也未获其背书。产品名称均为其所有者的商标。",
};
