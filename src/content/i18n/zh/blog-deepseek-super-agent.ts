import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent 是什么，怎么部署 | Crewmark",
    description:
      "DeepSeek 开源的 Super-Agent（dsh-superagent）是面向单个 GitHub 仓库的主动式编程 agent。功能、依赖、部署步骤、安全限制与对比。",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "博客 · DeepSeek",
    title: "DeepSeek Super-Agent 是什么，怎么部署",
    lead: "dsh-superagent 是 DeepSeek 开源的、面向单个 GitHub 仓库的主动式编程 agent，于 2026 年 10 月 31 日以 MIT 许可证发布。它运行在 DeepSeek Harness 上，监听 GitHub（可选再加飞书 Feishu），把请求变成 pull request，每个请求都在独立的会话和目录里处理。本文介绍它能做什么、需要什么、如何部署、“主动”在实际中指什么，以及与同类产品的对比。",
    cta: "申请抢先体验",
    secondary: "跳到部署步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "DeepSeek Super-Agent 是什么",
      text: [
        "仓库把 dsh-superagent 描述为“面向单个 GitHub 仓库的主动式编程 agent，打包成 DeepSeek Harness 的一个 bundle”。名单内的人向它提出工作后，它会创建一个工作项（Ticket），在自己的 agent 会话和目录里处理，并在原来的对话里回复，例如提交一个 pull request。网页面板只列出需要人处理的事项。",
        "DeepSeek 把它标为研究原型，“不是 DeepSeek 官方产品”。公开的代码与 DeepSeek 内部版本不同，DeepSeek 文章里的一些设计只是未来方向，原型并未实现。",
      ],
      points: [
        "来源：GitHub 通知、订阅的 issue 和 pull request、CI 变化，以及已合并或已关闭的 pull request；如果接入，还有飞书（Feishu）聊天。",
        "并行工作：每个 Ticket 都有自己的执行会话，名为 `worker-<ticket id>`，也有自己的目录，通常是 `git worktree` 检出，并发数不超过你设定的上限。",
        "跟进：之后在 issue 或 pull request 里的评论，会送到正在处理它的 Ticket，不必再次 @ 这个 agent。",
        "它给自己定的规矩：“占用尽可能少的人类注意力，提供尽可能多的价值。”它只会确认一次请求，工作时保持安静，只有在有结果、有问题或失败时才再次联系你。",
      ],
    },
    {
      kind: "table",
      title: "它真的会主动工作吗？三种 accept 模式",
      text: [
        "新闻报道把它描述成一个不用你开口就会修 bug 的 agent。文档的说法更谨慎：名单内的人直接提出的请求总是有效，但没人提过的工作需要你团队写的规则，而默认模式只会记录 agent 本来会做什么。",
      ],
      headers: ["Accept 模式", "没人提过的工作会怎样"],
      rows: [
        ["`off`", "忽略：只有名单内的人直接提出的请求才会启动工作"],
        ["`observe`（默认）", "按你的规则评估并记录为“would accept”，但不会启动任何工作"],
        ["`auto`", "只要符合你的至少一条规则就会启动"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何部署 dsh-superagent",
      text: [
        "你需要 Node.js 22.19+ 或 24+、pnpm、git 2.32+、tmux、Python 3.8+、GitHub CLI 2.48+、DeepSeek Harness 0.2.1-alpha.2 或更新的 0.2 版本，以及在 DeepSeek Harness 里配置好的模型服务商。部署步骤较长，所以仓库让你的编程 agent 带着你一步步完成。",
      ],
      steps: [
        {
          title: "安装 DeepSeek Harness",
          text: "DeepSeek Harness（`dsh`）是 DeepSeek 开源的 agent harness，目前为开发者预览版。启动一次并配置模型服务商；Web UI 会在 `http://127.0.0.1:3080` 打开。",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "克隆仓库，把 SETUP.md 交给你的编程 agent",
          text: "在检出的目录里，让你的编程 agent 读取 SETUP.md。它会检测你的机器，每条消息只问一个问题，把完整计划展示一次，然后才开始安装。",
          code: "git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git\ncd dsh-superagent-prototype\n# then ask your coding agent:\n# Read SETUP.md in this repository and set up dsh-superagent with me.",
        },
        {
          title: "回答部署问题",
          text: "请求来自哪里（只用 GitHub，还是再加飞书 Feishu）、用哪个仓库、agent 以哪个 GitHub 账号行动（用专用账号，千万别用你自己的）、哪些登录名可以向它提出工作、每个 Ticket 从哪个克隆检出、它的提交署谁的名、是否允许它开启 auto-merge（推荐回答是不允许）。",
        },
        {
          title: "完成只有你能做的步骤",
          text: "创建 agent 的 GitHub 账号，用该账号接受仓库邀请，并登录它的 CLI。agent 从不在聊天里索要密钥，而是给出让你在自己终端里运行的确切命令。",
        },
        {
          title: "检查它采用的默认设置",
          text: "一个单独的 DeepSeek Harness profile，名为 `superagent`，端口 3082；分支前缀 `agent/`；accept 模式 `observe`；以及每小时一次的检查，agent 停止了就重启它。",
        },
        {
          title: "给它发第一个请求",
          text: "用名单内的账号在某个 issue 下评论 `@<agent login> <request>`。大约一分钟内，面板里会出现一个 Ticket；agent 先确认收到，在自己的目录里工作，并在同一个讨论串里回复，通常是一个 pull request。",
        },
      ],
      source: { label: "来源：GitHub 上的 dsh-superagent 仓库", href: repo },
    },
    {
      kind: "text",
      title: "安全：运行之前要知道什么",
      points: [
        "Worker 以你的操作系统用户身份，用 `danger-full-access` 运行。它们能读取你的主目录，并按路径运行任何程序；账号包装脚本只负责选择凭据，不是安全边界。",
        "要做隔离，DeepSeek 的文档建议在专用的操作系统账号下运行，该账号只保存 agent 的凭据。",
        "它写下的一切都会出现在 agent 的 GitHub 账号名下，所以部署时建议用专用账号，并且一开始名单要短。",
        "消息和评论无法改变谁可以提出工作：名单、规则和 accept 模式只能在面板里修改。",
        "每一轮结束后，后台工作最多有 30 分钟完成，之后它的 shell 任务会被停止，Ticket 被标记为等待。",
        "它是研究原型，而 DeepSeek Harness 是开发者预览版，预计会有破坏性变更。",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "三者都是不用你守在对话里也会继续工作的 agent，但启动工作的方式不同。Super-Agent 等待一次 @ 提及或你团队写的规则；[ChatGPT dots](/blog/chatgpt-dots) 运行在 OpenAI 的云端；Crewmark 则按计划唤醒你已经在用的编程 agent，包括 DeepSeek Harness。",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["运行在", "你的机器，在 DeepSeek Harness 里", "OpenAI 的云端电脑", "你的电脑，在 DeepSeek Harness、Claude Code、Codex 或 OpenCode 里"],
        ["如何开始工作", "名单内的人 @ 提及，或 `auto` 模式下的规则", "你的消息、定时安排和它自己的调研", "工作时间内每 15–60 分钟一次心跳"],
        ["工作队列", "来自 GitHub 和飞书（Feishu）讨论串的 Ticket", "对话串和 Scheduled", "看板上的任务"],
        ["范围", "每次部署对应一个 GitHub 仓库", "你连接的应用", "每个岗位一名员工，例如 SEO 或工程"],
        ["费用", "免费，MIT 许可证；模型服务商的费用由你承担", "Pro 和 Business Premium 套餐", "抢先体验；用你现有的 agent 和套餐运行"],
        ["状态", "研究原型", "逐步开放中", "抢先体验"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让你的 DeepSeek Harness、Claude Code 或 Codex 会话主动工作起来",
      text: [
        "Super-Agent 需要为每个仓库单独配置 profile、账号并完成部署。Crewmark 则配合你已经在用的 agent（包括 DeepSeek Harness）：它给这个会话一个岗位、一个目标和工作时间，并用心跳唤醒它，从看板上领取下一个任务，适用于任何类型的工作，而不只是某一个仓库。",
      ],
      steps: [
        {
          title: "把会话变成员工",
          text: "选一个岗位，比如软件工程师或 SEO 专员，用数字写下它的目标，然后在 DeepSeek Harness、Claude Code、Codex 或 OpenCode 里运行设置命令。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接着上次的进度继续；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "分配任务，回复它的消息",
          text: "把工作放到看板上；员工会领取任务，边做边留评论，需要你拍板时给你发消息。了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "部署 DeepSeek 的 dsh-superagent" },
  mid: {
    title: "已经在用 DeepSeek Harness、Claude Code 或 Codex？",
    text: "Crewmark 让这个会话主动工作起来：心跳、工作时间和任务看板，用的就是你已经付费的套餐。",
    button: "申请抢先体验",
  },
  faq: {
    title: "DeepSeek Super-Agent 常见问题",
    items: [
      {
        q: "DeepSeek Super-Agent 是什么？",
        a: "dsh-superagent 是面向单个 GitHub 仓库的开源主动式编程 agent，DeepSeek 于 2026 年 10 月 31 日以 MIT 许可证作为研究原型发布。它运行在 DeepSeek Harness 上，接收来自 GitHub（可选再加飞书 Feishu）的请求，并以 pull request 作为回复。",
      },
      {
        q: "DeepSeek Super-Agent 免费吗？",
        a: "代码在 MIT 许可证下免费。它运行在 DeepSeek Harness 上，使用你配置的模型服务商，所以模型用量的费用由你支付。DeepSeek 尚未宣布托管版本。",
      },
      {
        q: "DeepSeek Super-Agent 在 GitHub 的哪里？",
        a: "在 github.com/deepseek-ai/dsh-superagent-prototype。它所运行的 agent harness DeepSeek Harness 在 github.com/deepseek-ai/deepseek-harness。",
      },
      {
        q: "DeepSeek Super-Agent 会不请自来地修 bug 吗？",
        a: "只有你允许时才会。名单内的人直接提出的请求总是有效，但没人提过的工作需要你团队写的规则，而默认的 `observe` 模式只记录它本来会做什么。查看这些记录之后，再切换到 `auto`。",
      },
      {
        q: "dsh-superagent 能和 Slack 或 Teams 配合使用吗？",
        a: "这个原型不行。它自带 GitHub 和飞书（Feishu）两个来源；它的 cookbook 说明了如何添加其他来源。",
      },
      {
        q: "运行它安全吗？",
        a: "它的 worker 以你的操作系统用户身份拥有完全访问权限，能读取你的主目录，所以 DeepSeek 的文档建议使用只保存 agent 凭据的专用操作系统账号、专用 GitHub 账号，以及一份很短的名单。",
      },
      {
        q: "我能把 Crewmark 和 DeepSeek Harness 一起用吗？",
        a: "可以。Crewmark 支持连接 DeepSeek Harness、Claude Code、Codex 和 OpenCode。它把会话变成 AI 员工，在工作时间内由心跳唤醒，从看板上领取任务，用的就是你已经在用的模型服务商。",
      },
    ],
  },
  cta: {
    title: "让你已经在用的 agent 主动工作起来。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code 和 Codex 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 3 日对照 GitHub 上的 dsh-superagent 和 DeepSeek Harness 仓库核对。",
  disclaimer:
    "Crewmark 是独立产品，与 DeepSeek、OpenAI 或 Anthropic 无关，也未获其背书。DeepSeek 是 DeepSeek 的商标，ChatGPT 是 OpenAI 的商标，Claude Code 是 Anthropic 的商标。",
};
