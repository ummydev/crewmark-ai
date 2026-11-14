import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 和 Codex 对比（2026）：价格、用量限制与功能",
    description:
      "2026 年 11 月 Claude Code 与 OpenAI Codex 对比：模型、套餐与价格、5 小时和每周限额、CLAUDE.md 与 AGENTS.md、沙盒、subagent、定时任务，以及该怎么选。",
  },
  breadcrumb: "Claude Code 和 Codex 对比",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "博客 · Claude Code · Codex",
    title: "Claude Code 和 Codex 对比：该用哪个编程 agent？",
    lead: "Claude Code 是 Anthropic 的编程 agent，Codex 是 OpenAI 的。两者都能读取你的代码仓库、编辑文件、运行命令，并可在终端、IDE、桌面应用、网页和手机上使用。它们的差别在于模型、套餐、限额、默认设置和开放程度。本文截至 2026 年 11 月，介绍两者的费用、用量限制的运作方式、功能对比，以及各自适合哪类工作。",
    cta: "开始使用",
    secondary: "跳到对比表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 和 Codex 一览",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["开发方", "Anthropic", "OpenAI"],
        ["默认模型", "Claude Opus 5.5；另有 Sonnet 5.5、Haiku 5.5 和 Fable 5.1 可选", "GPT-6.1 Sol；另有 GPT-6 Astra、GPT-6.1 Terra 和 GPT-6 Luna 可选"],
        ["运行位置", "终端、VS Code、JetBrains、桌面应用、claude.ai/code、Claude 移动应用、Slack", "终端、VS Code、Cursor 和 Windsurf、ChatGPT 桌面应用、chatgpt.com/codex、ChatGPT 移动应用、Slack 和 Linear"],
        ["包含它的最低价套餐", "Claude Pro，每月 $20", "ChatGPT Free（有限额），其次是每月 $8 的 Go 和每月 $20 的 Plus"],
        ["是否开源", "否：仓库是公开的，但保留所有权利", "CLI、SDK 和 App Server 开源（Apache-2.0）；IDE 扩展和云端不开源"],
        ["指令文件", "CLAUDE.md（没有 CLAUDE.md 时会读取 AGENTS.md）", "AGENTS.md"],
        ["沙盒", "shell 命令需主动开启", "默认开启"],
        ["定时任务", "云端定时任务（预览版）、桌面定时任务、`/loop`", "桌面应用和云端的定时任务"],
      ],
    },
    {
      kind: "table",
      title: "价格：哪些套餐包含它们",
      text: [
        "两者都包含在各自厂商的聊天订阅里，也都可以改用 API key，按 token 计费。价格为每月美元价。",
      ],
      headers: ["Claude 套餐", "价格", "ChatGPT 套餐", "价格"],
      rows: [
        ["Free", "不含 Claude Code", "Free", "$0，仅限 GPT-6 Luna"],
        ["Pro", "$20（按年付费为 $17）", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100、$200 或 $500"],
        ["Team", "每个席位 $25（Standard），$125（Premium）", "Business", "每位用户 $25（按年付费为 $20）"],
        ["Enterprise", "每个席位 $20，按年付费，另按 API 费率计算用量", "Enterprise、Edu", "联系销售"],
      ],
    },
    {
      kind: "text",
      title: "用量限制",
      text: [
        "两者都采用滚动的 5 小时窗口加每周限额，并且聊天和编程共用同一份额度。两家都没有公布每个套餐的确切时长或消息数。",
      ],
      points: [
        "Claude：Pro 有 5 小时限额和每周限额。Max 的用量是 Pro 的 5 倍。Ultra 每周是 Pro 的 10 倍，经过验证的账号没有 5 小时限额。Claude 聊天、Claude Code 和 IDE 共用同一个额度池。",
        "Claude：如果在任务进行中触到 5 小时限额，Claude Code 可能会把当前这一步做完（Pro 每周一次，Max 每次都可以）。",
        "Codex：OpenAI 按模型估算 Plus 每 5 小时的本地消息数，从 GPT-6.1 Sol 的 15–160 条，到 GPT-6 Luna 的 350–3,000 条，GPT-6 Astra 为 5–45 条。ChatGPT Pro 目前没有 5 小时限额，但可能有每周限额。",
        "Codex：云端任务和 GitHub 代码审查使用同一份额度，快速模式的消耗是 2.5 倍。",
        "两者超出限额后都可以继续：Claude 用用量额度（credits）或 API key，Codex 用 credits 或 API key（API key 适用于 CLI、SDK 和 IDE，不适用于云端功能）。",
      ],
    },
    {
      kind: "table",
      title: "功能逐项对比",
      headers: ["功能", "Claude Code", "Codex"],
      rows: [
        ["项目指令", "`CLAUDE.md`、`.claude/rules/`、自动记忆", "`AGENTS.md`、`AGENTS.override.md`，默认合计 32 KiB"],
        ["配置", "`settings.json`", "`config.toml`"],
        ["Subagent", "有，另有后台 agent", "有：内置的 default、worker 和 explorer，以及自定义 TOML agent"],
        ["Hooks", "有", "有，默认开启"],
        ["Skills、插件、MCP", "有", "有"],
        ["Plan 模式", "有（Shift+Tab）", "有"],
        ["权限模式", "手动、接受编辑、plan、auto（由分类器检查）、bypass", "请求批准、替我批准、完全访问、自定义"],
        ["沙盒", "需主动开启：macOS 用 Seatbelt，Linux 用 bubblewrap；原生 Windows 不支持", "默认开启，包括原生 Windows 沙盒"],
        ["并行工作", "并行的桌面和网页会话、后台 agent", "桌面应用中的 worktree、云端任务"],
        ["代码审查", "Team 和 Enterprise 可用 `@claude review`；任何套餐都可在本地用 `/code-review`", "GitHub 上用 `@codex review`；CLI 中用 `/review`"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 和 Codex 之间做选择",
      text: [
        "没有哪一个全面领先：两家各自公布对自己模型有利的基准测试，而且每次发布都会变。请按对你日常工作有影响的因素来选。",
      ],
      steps: [
        {
          title: "从你已经在付费的订阅出发",
          text: "如果你有 Claude Pro 或 Max，就包含 Claude Code；如果你有 ChatGPT Plus 或 Pro，就包含 Codex。入门套餐两个都试，每月 $40；Codex 也能在 ChatGPT Free 和 Go 上使用，只是限额更小。",
        },
        {
          title: "让限额匹配你的工作时长",
          text: "如果每天都要长时间工作，请比较顶级套餐：Claude Ultra（$200）对经过验证的账号没有 5 小时限额，ChatGPT Pro 目前也没有。偶尔使用的话，任意一家的 $20 套餐就够了。",
        },
        {
          title: "决定要沙盒隔离多少",
          text: "Codex 默认对命令做沙盒隔离，Windows 上也一样。Claude Code 默认在操作前先询问，提供可自行开启的沙盒，还有由分类器批准安全操作的 auto 模式。",
        },
        {
          title: "看看你的团队在哪里工作",
          text: "Claude Code 有 JetBrains 插件，也能在 Slack 中运行；Codex 可接入 Cursor、Windsurf、Slack 和 Linear。两者都支持 VS Code、网页和手机。",
        },
        {
          title: "让你的指令可以通用",
          text: "把项目规则写在 AGENTS.md 里，再在 CLAUDE.md 中用 `@AGENTS.md` 导入；这样两个 agent 读的是同一份文件，切换没有任何成本。见 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "来源：Claude Code 文档和 Codex 文档", href: claudeDocs },
    },
    {
      kind: "text",
      title: "那 Cursor、Gemini CLI 和 OpenCode 呢？",
      text: [
        "Cursor 是带自家 agent 的编辑器，也能承载 Claude Code 和 Codex 的扩展。Gemini CLI 和 OpenCode 与这两者一样是终端 agent；OpenCode 开源，支持多家模型提供商。它们都会读取 AGENTS.md，所以上面这套通用的设置同样适用。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "两个都用：给每个 agent 一个岗位",
      text: [
        "Crewmark 不需要你二选一。它把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，按心跳唤醒，并从共享看板上给它分配 issue。同一个项目里，一个员工可以跑在 Claude Code 上，另一个跑在 Codex 上。",
      ],
      steps: [
        {
          title: "把一个会话变成员工",
          text: "选一个岗位，比如软件工程师或 SEO 专员，把它的目标写成一个数字，然后在 Claude Code 或 Codex 里运行设置命令。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次。见[如何让 Claude Code 主动工作](/proactive-claude-code)和[如何让 Codex 主动工作](/proactive-codex)。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上，每个员工会接手适合自己岗位的任务，边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 和 Codex 之间做选择" },
  mid: {
    title: "已经在付费使用 Claude 或 ChatGPT？",
    text: "Crewmark 在你已有的套餐上，把 Claude Code 和 Codex 变成有心跳和 issue 看板的 AI 员工。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code 和 Codex 常见问题",
    items: [
      {
        q: "Claude Code 比 Codex 更好吗？",
        a: "没有哪一个适合所有人。两者都是能力很强的 agent，都有 subagent、hooks、skills、MCP 和 plan 模式。请根据你已有的订阅、需要的限额、想要的沙盒默认设置，以及团队使用的工具来选。",
      },
      {
        q: "Claude Code 和 Codex 哪个更便宜？",
        a: "Codex 的入门门槛更低：ChatGPT Free（有限额）和每月 $8 的 Go 就包含它。Claude Code 从 $20 的 Claude Pro 起步。每月 $20 的话，Claude Pro 和 ChatGPT Plus 都包含各自的 agent。",
      },
      {
        q: "Claude Code 和 Codex 的用量限制是怎样的？",
        a: "两者都是 5 小时窗口加每周限额，并与聊天共用。Claude Max 是 Pro 的 5 倍，Ultra 每周是 Pro 的 10 倍。OpenAI 估算 Plus 每 5 小时可发 15–160 条 GPT-6.1 Sol 消息。Claude Ultra（经过验证）和 ChatGPT Pro 目前都没有 5 小时限额。",
      },
      {
        q: "Claude Code 和 Codex 用哪些模型？",
        a: "Claude Code 默认使用 Claude Opus 5.5，另有 Sonnet 5.5、Haiku 5.5 和 Fable 5.1 可选。Codex 默认使用 GPT-6.1 Sol，另有 GPT-6 Astra、GPT-6.1 Terra 和 GPT-6 Luna 可选。",
      },
      {
        q: "Codex 开源吗？Claude Code 呢？",
        a: "Codex CLI 以 Apache-2.0 开源；它的 IDE 扩展和云端不开源。Claude Code 的仓库是公开的，但并非开源：保留所有权利，按 Anthropic 的商业条款使用。",
      },
      {
        q: "Claude Code 和 Codex 能共用同一份指令吗？",
        a: "可以。把指令写在 Codex 会读取的 AGENTS.md 里，再在 CLAUDE.md 中放一行 `@AGENTS.md`，Claude Code 就会读取同一份文件。",
      },
      {
        q: "我可以同时使用 Claude Code 和 Codex 吗？",
        a: "可以。很多开发者两个都留着，按任务切换。用 Crewmark 的话，每个都可以成为有自己岗位的 AI 员工，按心跳从同一个看板上接手 issue。",
      },
    ],
  },
  cta: {
    title: "让 Claude Code 和 Codex 在同一个团队里。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 5 日对照 Claude Code 文档、claude.com/pricing、learn.chatgpt.com 上的 Codex 文档以及两个 GitHub 仓库查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 或 OpenAI 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标；ChatGPT 和 Codex 是 OpenAI 的商标。",
};
