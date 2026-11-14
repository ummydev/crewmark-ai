import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# 用 Node.js 运行 Web UI
npx @deepseek-ai/dsh web
# 然后打开 http://127.0.0.1:3080

# 或者从源码构建
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# 执行一个任务，无界面，指定权限模式
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# 以 JSON 流式输出事件，例如供脚本使用
dsh headless "Summarize open TODOs" --json

# 给某个 profile 添加插件
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness 是什么：安装教程、价格及与 Claude Code 对比",
    description:
      "DeepSeek Harness（dsh）详解：DeepSeek 开源的 agent harness，桌面版和 CLI 怎么安装、DeepSeek API 价格、插件与 Super-Agent，以及和 Claude Code、Codex、OpenCode 的对比。",
  },
  breadcrumb: "DeepSeek Harness 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · DeepSeek",
    title: "DeepSeek Harness 是什么、怎么安装、和同类工具怎么比",
    lead: "DeepSeek Harness（`dsh`）是 DeepSeek 开源的 agent harness：一款运行 AI agent 的应用，可用于日常事务、编程、调研和后台任务，从工具到界面几乎一切都是插件。它采用 MIT 许可证，目前是开发者预览版，也是 GitHub 上 star 数最多的仓库之一；自 2026 年 10 月 31 日 DeepSeek 发布 Super-agent 原型以来，它的搜索量一路上涨。本文介绍它是什么、桌面版和 CLI、怎么安装、要花多少钱、主要功能，以及和 Claude Code、Codex、OpenCode 的对比。",
    cta: "开始使用",
    secondary: "跳到安装步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness 一览",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["开发方", "DeepSeek AI"],
        ["是什么", "开源的 agent harness，采用“一切皆插件”的架构，基于 Cordis 框架构建"],
        ["许可证", "MIT；截至 2026 年 11 月 6 日，GitHub star 约 275,000"],
        ["状态", "开发者预览版；DeepSeek 提醒可能出现不兼容的变更，所有版本都标为预发布（最新为 v0.2.2-rc.1，2026 年 11 月 4 日）"],
        ["使用方式", "桌面应用（macOS Apple 芯片、Windows x64）、Web UI（`dsh web`）、无界面 CLI（headless）、ACP 和 SDK 模式"],
        ["默认模型", "`deepseek-flash`（DeepSeek-V4.1-Flash）和 `deepseek-v4-pro`，上下文均为 1,048,576 token"],
        ["其他模型服务商", "Anthropic、OpenAI、Kimi、GLM，或任何兼容 OpenAI 或 Anthropic 接口的端点，包括自托管服务器"],
        ["价格", "软件免费；你只需支付 DeepSeek API（或其他服务商）的用量费用"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek Harness 怎么安装和使用",
      steps: [
        {
          title: "选择桌面版或 Web 版",
          text: "从 deepseek.com/en/harness 下载桌面应用，支持 macOS（Apple 芯片）和 Windows（64 位）；在 macOS 上还可以顺便安装 `dsh` 命令。任何装有 Node.js 的电脑都可以用 npx 运行 Web UI，或者从源码构建。",
          code: install,
        },
        {
          title: "登录或填入 API key",
          text: "首次启动时，可以在浏览器里用 DeepSeek 账号登录，也可以在 Settings → Models（设置 → 模型）里粘贴从 platform.deepseek.com 获取的 API key。密钥保存在 `~/.dsh/.credentials.yaml`（`$DSH_HOME`）。",
        },
        {
          title: "给它项目说明",
          text: "DeepSeek Harness 会读取项目里的 `AGENTS.md` 或 `CLAUDE.md`（以及 `.local.md` 变体），还有全局的 `~/.dsh/AGENTS.md`。为 Claude Code 或 Codex 写好的说明可以直接沿用；参见 [CLAUDE.md 指南](/blog/claude-md) 和 [Codex AGENTS.md 指南](/blog/codex-agents-md)。",
        },
        {
          title: "决定它能做多少事",
          text: "选择沙箱模式（`read-only`、`workspace-write` 或 `danger-full-access`）和审批策略（`ask` 或 `never`）。DeepSeek 的安全说明指出，这个 harness 仍属实验性质，没有经过安全审计，沙箱也不保证隔离，所以在重要代码上请先用只读模式。",
        },
        {
          title: "无界面运行任务，添加插件",
          text: "用 `dsh headless` 在脚本里执行一次性任务，用 `--resume` 或 `--session-id` 继续之前的会话，用 `dsh plugin` 添加插件，例如定时任务、子 agent 或 agent 团队。",
          code: headless,
        },
      ],
      source: { label: "来源：DeepSeek Harness 仓库和文档", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek Harness 价格：用起来要花多少钱",
      text: [
        "Harness 本身免费开源。用量由 DeepSeek API 按以下价格计费，单位为每百万 token 的美元价格（api-docs.deepseek.com，2026 年 11 月 6 日）。闲时价格是高峰价格的一半；高峰时段为工作日 UTC 01:00–04:00 和 06:00–10:00，中国法定节假日除外。DeepSeek 没有公布免费额度，所以所谓“免费使用”，实际上是软件免费，再加上你手里已有的 API 额度。",
      ],
      headers: ["每 1M token", "deepseek-flash，高峰", "deepseek-flash，闲时", "deepseek-v4-pro，高峰", "deepseek-v4-pro，闲时"],
      rows: [
        ["输入，缓存命中", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["输入，缓存未命中", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["输出", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "主要功能",
      points: [
        "一切皆插件：工具、模型、界面和行为都是插件；可以按 profile 安装，也可以在聊天里直接让它帮你做一个（“Creator mode”，创作者模式）。社区插件使用 GitHub topic `dsh-plugin`。",
        "DeepSeek 列出的官方和实验性插件包括 agent 团队、自动审批复核、定时任务、语音输入、终端、agent 循环和子 agent。",
        "Skills（`SKILL.md` 文件夹）、MCP 服务器和 hooks，还有一个实验性的桥接，可以运行现有的 Claude Code hooks。",
        "子 agent 可以在进程内运行，也可以由 ACP、Codex、Claude Code 或另一个 Harness 承载。",
        "可恢复的会话、上下文压缩、输出 JSON 事件的无界面模式，以及用于二次开发的 SDK。",
        "Super-agent：独立的 MIT bundle dsh-superagent 让 harness 在 GitHub 仓库上主动工作；DeepSeek 称之为研究原型。参见 [DeepSeek Super-Agent 详解](/blog/deepseek-super-agent)。",
        "常和它一起被提到的论文《A Programming Paradigm for Spatiotemporal Composability》（arXiv，2026 年 8 月）介绍的是底层的 Cordis 框架，而不是 harness 本身。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode 对比",
      text: [
        "DeepSeek 没有发布官方对比；下表是我们在 2026 年 11 月 6 日根据各工具自己的文档整理的。DeepSeek 也有文档说明如何在 Claude Code、Codex 和 OpenCode 里使用它的模型，所以可以混搭使用。",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["开发方", "DeepSeek", "Anthropic", "OpenAI", "Anomaly（开源）"],
        ["许可证", "MIT", "专有", "CLI 为 Apache-2.0", "MIT"],
        ["付费方式", "DeepSeek API 用量（或其他服务商）", "Claude 套餐，$20/月起，或 API", "ChatGPT 套餐（Free 及以上），或 API", "你自己的 API key，或用 Copilot 或 ChatGPT 登录"],
        ["界面", "桌面（macOS、Windows）、Web UI、无界面 CLI", "终端、IDE、桌面、网页、移动端", "CLI、IDE、桌面、网页、移动端", "终端、桌面、IDE、网页"],
        ["说明文件", "AGENTS.md 或 CLAUDE.md", "CLAUDE.md（AGENTS.md 作为后备）", "AGENTS.md", "AGENTS.md"],
        ["扩展方式", "一切皆插件、skills、MCP、hooks", "Skills、插件、MCP、hooks", "Skills、插件、MCP、hooks", "插件、MCP"],
        ["成熟度", "开发者预览版，预计会有破坏性变更", "正式版", "正式版", "活跃的开源项目"],
      ],
    },
    {
      kind: "text",
      title: "大家常搜的问题",
      points: [
        "Linux：目前还没有 Linux 桌面版下载；在 Linux 上可以用 `npx @deepseek-ai/dsh web` 运行 Web UI，或者从源码构建。",
        "VS Code：DeepSeek 没有提供 VS Code 插件；可以在编辑器旁边开着桌面版或 Web UI，或者在 DeepSeek 有文档说明的编辑器 agent（如 Claude Code 或 Codex）里使用 DeepSeek 模型。",
        "Ollama 和本地模型：官方没有文档。Harness 支持为自托管服务器配置自定义的 OpenAI 或 Anthropic 兼容端点，这是使用自己模型的官方途径。",
        "TUI：默认不带终端界面；有文档说明的做法是自定义 profile，或使用实验性的终端插件。",
        "论文：见上文的 Cordis 论文；DeepSeek 希望引用 harness 本身时写作“DeepSeek Harness: Everything is a Plugin”。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给 DeepSeek Harness 一份工作，而不只是一个任务",
      text: [
        "Crewmark 支持 DeepSeek Harness，也支持 Claude Code、Codex 和 OpenCode。它把一个会话变成有岗位、有目标、有工作时间的 AI 员工，并用心跳唤醒它，从共享看板上领取下一个任务。",
      ],
      steps: [
        {
          title: "选择 DeepSeek Harness 作为 agent",
          text: "在你的项目里运行设置命令；员工在你电脑上的 DeepSeek Harness 会话里运行，费用记在你的 DeepSeek API 账户上。",
        },
        {
          title: "给它一个岗位和目标",
          text: "软件工程师、SEO 专员、增长营销：每个岗位都有一个要推动的数字。了解[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，它每 15、30 或 60 分钟醒来一次，领取下一个任务，需要你拍板时给你发消息。比较不同做法，请看[什么是 superagent](/blog/superagent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安装和使用 DeepSeek Harness" },
  mid: {
    title: "在用 DeepSeek Harness？把它放到看板上。",
    text: "Crewmark 用岗位、目标和任务看板，按心跳唤醒 DeepSeek Harness、Claude Code 或 Codex。",
    button: "开始使用",
  },
  faq: {
    title: "DeepSeek Harness 常见问题",
    items: [
      {
        q: "DeepSeek Harness 是什么？",
        a: "DeepSeek AI 开源的 agent harness（`dsh`，MIT 许可证），用于日常事务、编程、调研和后台任务，围绕插件构建。目前是开发者预览版。",
      },
      {
        q: "DeepSeek Harness 免费吗？",
        a: "软件本身免费开源。运行时要调用模型 API，默认是 DeepSeek 的，按 token 计费；DeepSeek 没有公布免费额度。",
      },
      {
        q: "DeepSeek Harness 怎么安装？",
        a: "从 deepseek.com/en/harness 下载 macOS（Apple 芯片）或 Windows 桌面应用，或者在装有 Node.js 的电脑上运行 `npx @deepseek-ai/dsh web`，然后打开 http://127.0.0.1:3080。",
      },
      {
        q: "DeepSeek Harness 支持 Linux 吗？",
        a: "没有 Linux 桌面版下载，但 Web UI 和 CLI 可以通过 npx 或源码构建在 Linux 上运行。",
      },
      {
        q: "DeepSeek Harness 和 Claude Code 哪个好？",
        a: "两者适合不同的需求。DeepSeek Harness 开源，用 DeepSeek 模型时每 token 很便宜，还能通过插件扩展，但仍是开发者预览版。Claude Code 是成熟的产品，包含在 Claude 套餐里。DeepSeek 的模型也可以在 Claude Code 里运行。",
      },
      {
        q: "DeepSeek Harness 能用 Claude 或 GPT 模型吗？",
        a: "可以。它内置 Anthropic、OpenAI、Kimi 和 GLM 服务商，也支持任何兼容 OpenAI 或 Anthropic 接口的端点。",
      },
      {
        q: "DeepSeek super agent 是什么？",
        a: "即 dsh-superagent，DeepSeek 于 2026 年 10 月 31 日为 DeepSeek Harness 发布的研究原型 bundle，让它在 GitHub 仓库上主动工作。参见 [DeepSeek Super-Agent 详解](/blog/deepseek-super-agent)。",
      },
    ],
  },
  cta: {
    title: "把 DeepSeek Harness 变成 AI 员工。",
    text: "Crewmark 把 DeepSeek Harness、Claude Code、Codex 和 OpenCode 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 deepseek.com、deepseek-ai/deepseek-harness 仓库、DeepSeek API 文档和 arXiv 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 DeepSeek、Anthropic 或 OpenAI 无关，也未获其背书。产品名称是其各自所有者的商标。",
};
