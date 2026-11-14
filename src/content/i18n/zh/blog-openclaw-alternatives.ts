import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 替代方案：Hermes、NanoClaw、ZeroClaw、IronClaw",
    description:
      "根据各项目自己的文档，对比 OpenClaw 的替代方案：Hermes Agent、NanoClaw、ZeroClaw、IronClaw 和 NVIDIA NemoClaw。它们各自怎么运行、支持哪些模型和订阅、安全模型如何，以及什么时候更适合 Crewmark 这类面向工作的方案。",
  },
  breadcrumb: "OpenClaw 替代方案",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI agent",
    title: "OpenClaw 替代方案：Hermes、NanoClaw、ZeroClaw、IronClaw 等",
    lead: "OpenClaw 是一款跑在你自己电脑上的开源 AI 助手，在 WhatsApp、Telegram、Slack、Discord 等 20 多个渠道里回复你。它在 GitHub 上约有 394,000 个 star，名气最大，但并非唯一选择。大家找替代品，通常出于三个原因：想要默认更严格的安全设置、想换模型或订阅，或者想要更轻量的运行时。本文根据各项目自己的文档逐一对比主要选项，并讲清楚什么时候你需要的是个人助手，什么时候需要的是替团队干活的 agent。",
    cta: "开始使用",
    secondary: "对比替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw 简介",
      text: [
        "OpenClaw 最早叫 Clawdbot，2026 年 1 月下旬因 Anthropic 提出商标问题、要求改名，先改成 Moltbot，随后定名 OpenClaw。作者 Peter Steinberger 之后加入了 OpenAI，项目现归属于 2026 年 7 月宣布成立的独立机构 OpenClaw Foundation，基金会称 OpenAI 是“捐助方，而非所有者”。最新版本是 2026 年 11 月 5 日发布的 v2026.11.1。",
      ],
      points: [
        "以本地 Gateway 守护进程的形式运行在 macOS、Linux、Windows 或 WSL2 上，并提供桌面端和移动端应用。",
        "模型以插件形式接入：Claude（通过 API key，或复用同一台机器上的 Claude Code 登录）、OpenAI 和 Codex，以及 Ollama 等本地模型。",
        "安全方面：它把收到的消息一律视为不可信，陌生发送者需要先配对；但除非你配置了沙箱，主会话里的工具都直接在宿主机上运行。",
        "项目公开披露安全修复：自 2026 年 1 月以来共发布 722 条安全公告，其中 14 条为严重级别，均已修复并公开；另有一次 Trail of Bits 审计，发现的问题也已全部修复。",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "OpenClaw 替代方案对比",
      text: ["信息来自各项目自己的 README、官网或文档，以及 GitHub API，截至 2026 年 11 月 7 日。star 数为约数。"],
      headers: ["", "是什么", "运行平台", "模型与订阅", "隔离方式", "许可证、star"],
      rows: [
        ["OpenClaw", "住在聊天应用里的个人 AI 助手", "macOS、Linux、Windows、WSL2；移动端应用", "Claude 通过 API key 或本机 Claude Code 登录；ChatGPT/Codex OAuth；本地模型", "默认在宿主机运行；沙箱可选", "MIT，约 394k"],
        ["Hermes Agent（Nous Research）", "内置学习循环、能自我进化的 agent", "Linux、macOS、Windows、WSL2、Android；桌面应用", "任意模型服务商；Claude 订阅仅限开通额外用量额度的 Max（Pro 不行）；ChatGPT/Codex OAuth", "危险命令需审批；可选 Docker 或 Modal", "MIT，约 261k"],
        ["NanoClaw", "在容器里运行 agent 的轻量助手", "macOS、Linux、WSL2；需要 Docker 和 Claude Code", "Claude 通过 API key，或经 Claude Code 使用订阅；Codex、OpenCode、Ollama 通过 skill 接入", "每个会话一个容器；凭据从不进入容器", "MIT，约 31k"],
        ["ZeroClaw", "单个 Rust 二进制文件的 agent 运行时", "Linux、macOS、Windows、FreeBSD、Docker；树莓派等开发板", "Anthropic、OpenAI、Ollama 等约 20 余家；Codex 订阅；Claude Max 通过 setup-token", "默认受监督运行；系统级沙箱", "MIT 或 Apache 2.0，约 33k"],
        ["IronClaw（NEAR AI）", "主打隐私与安全的助手", "macOS、Linux、Windows；或运行在 TEE 中的 NEAR AI Cloud", "各服务商 API key（Anthropic、OpenAI、Gemini、Ollama 等）", "WASM 沙箱；凭据在边界处注入", "MIT 或 Apache 2.0，约 13k；云服务每月 0 至 200 美元"],
        ["NVIDIA NemoClaw", "在 OpenShell 沙箱里运行 OpenClaw 或 Hermes 的安全栈（alpha）", "优先支持 Linux 和 DGX Spark；Docker、Colima 或 Podman", "通过 API 使用 NVIDIA Endpoints、OpenRouter、OpenAI、Anthropic、Gemini", "带出站流量管控的 OpenShell 沙箱", "Apache 2.0，约 23k"],
        ["Crewmark", "为工作而生的 AI 员工：岗位、目标和共享看板", "网页版看板；守护进程支持 macOS、Windows、Linux", "运行在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 里，用你现有的套餐", "每名员工有自己的会话和检出目录", "商业产品"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何选择 OpenClaw 替代方案",
      steps: [
        {
          title: "先想清楚拿它做什么",
          text: "在手机上发消息使唤的个人助手（OpenClaw、Hermes、NanoClaw、ZeroClaw、IronClaw），和在仓库里替团队消化 backlog 的 agent（Crewmark，或多个 [Claude Code agent](/blog/multiple-claude-code-agents)）是两类不同的活。",
        },
        {
          title: "看它怎么隔离工具",
          text: "这是它们之间最主要的区别。如果 agent 会读到别人发来的消息，优先选默认就做容器级或系统级隔离的。",
          code: sandbox,
        },
        {
          title: "看用的是谁的账单",
          text: "各家对订阅的支持差别很大：有的复用 Claude Code 登录或 setup token，Hermes 要求开通额外用量额度的 Claude Max，其他的则需要 API key。别忘了查看模型服务商对第三方使用的条款。",
        },
        {
          title: "看平台支持",
          text: "在 Windows 上，OpenClaw、Hermes、ZeroClaw 和 IronClaw 都能原生安装；NanoClaw 需要 WSL2；NemoClaw 优先在 Linux 上测试。如果要极小的资源占用或跑在开发板上，选 ZeroClaw。",
        },
        {
          title: "从一个渠道、最小权限开始",
          text: "只连一个聊天应用，只允许你自己的账号，观察一段时间它的表现后再逐步放开。",
        },
      ],
      source: { label: "来源：OpenClaw README", href: openclaw },
    },
    {
      kind: "text",
      title: "哪个 OpenClaw 替代方案适合你",
      points: [
        "你想要隔离更严格的 OpenClaw：选 NanoClaw（天生基于容器），或者用 NemoClaw 把 OpenClaw 本身放进 NVIDIA 的沙箱里运行。",
        "你想要一个会学习、能自己改进 skill 的 agent：Hermes Agent。",
        "你想要小巧快速的运行时，或者需要跑在开发板上：ZeroClaw。",
        "你看重隐私功能，也想要托管云服务：IronClaw。",
        "你在纠结 OpenClaw 和 Claude Code：OpenClaw 是以聊天为主的助手，Claude Code 是在你仓库里写代码的 agent。想让 Claude Code 不用你提示也一直干活，见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        "你想要 agent 从共享看板接活、替团队干正事，而且用的是你已经在付费的 Claude Code 或 Codex 套餐：Crewmark（见下文）。另见 [superagent 对比](/blog/superagent)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "不是个人助手，而是一支 AI 员工团队",
      text: [
        "OpenClaw 及其替代方案都在等你发消息。Crewmark 是为工作打造的：它把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标和工作时间的 AI 员工，按心跳唤醒它去共享看板上接下一个 issue，需要你拍板时再给你发消息。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "[SEO 专员](/ai-employees/seo-specialist)、[软件工程师](/ai-employees/software-engineer)、[营销 agent](/ai-employees/marketing-agent) 等，每个岗位都有一个可以随时修改的目标。",
        },
        {
          title: "接入你已经在用的 agent",
          text: "它在自己的会话和检出目录里运行，用的就是你已经在付费的订阅。",
        },
        {
          title: "分配任务、审批把关",
          text: "把看板填满，员工会自己接下一个 issue，遇到你审批清单上的事项会先问你。了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "选择 OpenClaw 替代方案" },
  mid: {
    title: "需要能干活的 agent，而不只是陪聊？",
    text: "Crewmark 把 Claude Code 和 Codex 变成 AI 员工，按心跳从你的看板上接下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "OpenClaw 替代方案常见问题",
    items: [
      {
        q: "最好的 OpenClaw 替代方案是什么？",
        a: "取决于你为什么想换：要容器隔离，选 NanoClaw；要能自我进化的 agent，选 Hermes Agent；要小巧的 Rust 运行时，选 ZeroClaw；要隐私功能和托管云，选 IronClaw；如果你要的不是个人助手，而是替团队干活的 agent，选 Crewmark。",
      },
      {
        q: "有开源的 OpenClaw 替代方案吗？",
        a: "有：Hermes Agent（MIT）、NanoClaw（MIT）、ZeroClaw（MIT 或 Apache 2.0）、IronClaw（MIT 或 Apache 2.0）和 NVIDIA NemoClaw（Apache 2.0）都是开源的。",
      },
      {
        q: "OpenClaw 和 Hermes Agent 有什么区别？",
        a: "两者都是接入聊天应用的开源助手。Nous Research 出品的 Hermes Agent 以学习循环为核心，能不断改进自己的 skill，并提供可选的容器隔离；OpenClaw 的社区更大，支持的渠道也更多。两者对 Claude 订阅的规则不同：Hermes 需要开通额外用量额度的 Claude Max。",
      },
      {
        q: "NanoClaw 比 OpenClaw 更安全吗？",
        a: "NanoClaw 在设计上就让每个会话跑在独立容器里，凭据放在容器之外。OpenClaw 则默认在宿主机上运行主会话的工具，除非你配置了沙箱。两者都可以锁紧，只是 NanoClaw 开箱即是如此。",
      },
      {
        q: "OpenClaw 能用我的 Claude 订阅吗？",
        a: "OpenClaw 的文档写了两种接入 Claude 的方式：API key，或复用同一台机器上的 Claude Code 登录。文档同时提醒，光看服务商名称无法判断用量是按 API 计费还是走订阅。",
      },
      {
        q: "有支持 Windows 的 OpenClaw 替代方案吗？",
        a: "Hermes Agent 有 Windows 桌面应用，ZeroClaw 和 IronClaw 也能在 Windows 上原生安装。OpenClaw 本身支持 Windows 和 WSL2；NanoClaw 需要 WSL2。",
      },
      {
        q: "NemoClaw 是什么？",
        a: "NVIDIA 推出的开源技术栈，目前处于 alpha 阶段，能把 OpenClaw、Hermes 或 LangChain Deep Agents 放进 NVIDIA OpenShell 沙箱里运行。它是让 OpenClaw 跑得更安全的一种方式，而不是 OpenClaw 的替代品。",
      },
    ],
  },
  cta: {
    title: "让 AI agent 去消化团队的 backlog。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照各项目自己的 README、官网、文档或博客，以及 GitHub API 查证。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenClaw Foundation、Nous Research、NanoCo、ZeroClaw Labs、NEAR AI、NVIDIA、Anthropic 或 OpenAI 无关，也未获其背书。产品名称均为其所有者的商标。",
};
