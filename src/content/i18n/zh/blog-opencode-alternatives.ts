import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Simplified Chinese translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi（macOS 和 Linux；Windows 有 PowerShell 安装脚本）
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # 或：npm install -g @charmland/crush

# Kilo CLI（OpenCode 的分支）
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff（免费，靠文字广告支撑）
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder 接 Ollama 里跑的模型
nanocoder --provider ollama --model llama3.1

# Crush：在 crushrc 里加上 Ollama
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 替代品（2026）：免费、开源和本地模型",
    description:
      "2026 年最好的 OpenCode 替代品：开源终端 agent（Pi、Crush、Kilo CLI、Goose、Cline、Nanocoder），不用 API key 的免费选择，Rust 和 Windows 之选，本地大模型，图形界面，以及 Claude Code、Codex 和 Copilot CLI。",
  },
  breadcrumb: "OpenCode 替代品",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "博客 · 编程 agent",
    title: "2026 年最好的 OpenCode 替代品：免费、开源、本地模型",
    lead: "OpenCode 是 GitHub 上星数最多的开源编程 agent 之一，约 22.6 万星：MIT 协议的终端 agent，能接任意模型服务商，另有测试版桌面应用。大家换别的工具，原因通常是这几个：想要更小、能按自己习惯改的框架；想要单个 Go 或 Rust 二进制；本地模型支持更好；想用应用而不是终端；想要不用 API key 的免费方案；或者公司已经在为别的 agent 付费。下面按需求分别给出替代品，协议、安装命令和价格都取自各项目自己的页面。",
    cta: "开始使用",
    secondary: "安装命令",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "想要一个最小、自己动手改造的 agent：Pi，MIT 协议，约 12.1 万星。",
        "想要精致、到处都能跑的终端应用，包括 Windows 和 Android：Charm 出品的 Crush。",
        "想要 OpenCode 再加上 IDE 插件和云端 agent：Kilo CLI，它就是 OpenCode 的分支。",
        "免费、不要 API key：Freebuff，靠文字广告支撑。",
        "本地模型优先：Nanocoder，由一个非营利社区开发。",
        "用 Rust 写的：Codex CLI 或 Goose。",
        "已经在为 Claude、ChatGPT 或 Copilot 付费：Claude Code、Codex CLI 或 GitHub Copilot CLI。",
        "想让 agent 按时间表自己干活，而不是只在你输入时才动：Crewmark，跑在 Claude Code 或 Codex 之上。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 替代品对比",
      text: ["星数四舍五入，取自 2026 年 11 月 10 日的 GitHub API。费用指上手需要花的钱；多数开源 agent 本身免费，你只付模型费用。"],
      headers: ["工具", "协议", "开发语言", "运行在", "费用", "适合"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（约 22.6 万星）", "TypeScript", "终端、桌面应用（测试版）", "免费模型有每日次数限制；Go $10/月，Go Plus $40/月", "基准：任意服务商、本地模型、Plan 和 Build 两个 agent"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（约 12.1 万星）", "TypeScript", "macOS、Linux、Windows；SDK 和 RPC", "免费；用你的订阅或 API key", "用自己的工具和 skill 扩展的极简框架"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（约 2.9 万星）", "Go", "所有终端：macOS、Linux、Windows、Android、BSD", "免费；用你的 key，或 Charm 的 Hyper 模型", "带 LSP 和 MCP 的精致终端界面"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT（约 2.8 万星）", "TypeScript", "CLI、VS Code、JetBrains、云端", "免费上手；500 多个模型按服务商原价，不加价", "OpenCode 的内核，加上 IDE 插件和代码审查"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0（约 5.6 万星）", "Rust", "桌面应用、CLI、API", "免费；用你的模型 key", "写代码和其他工作都用同一个 agent，靠 MCP 扩展"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（约 7.1 万星）", "TypeScript", "CLI、VS Code、JetBrains、SDK", "免费；用你的模型 key", "编辑器和终端里的开源 agent"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（约 2,600 星）", "TypeScript", "终端", "免费；本地模型或任意 OpenAI 兼容 API", "用 Ollama 做私密、本地优先的编程"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0（约 1.4 万星）", "TypeScript", "CLI、桌面、网页、云端", "免费，带文字广告；不用 API key", "不花钱、不注册模型服务就想试编程 agent"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0（约 2.9 万星）", "TypeScript", "终端", "Qwen Plus 或 Pro 订阅，或 API key", "通义千问模型用户"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（约 13.4 万星）", "Rust", "终端；也有 IDE 和桌面版", "任意 ChatGPT 套餐，包括免费版；Go $8/月；或 API key", "想要快速原生二进制的 ChatGPT 订阅用户"],
        ["[Claude Code](https://code.claude.com/docs)", "闭源", "-", "终端、IDE、桌面、网页", "Claude Pro $20/月", "想用 Anthropic 官方 agent 的 Claude 用户"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "闭源", "-", "macOS、Linux、Windows", "需要 Copilot 套餐；Pro $10/月", "已经付费用 Copilot 的团队"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（约 5 万星）", "Python", "终端", "免费；用你的模型 key", "以 git 为中心的结对编程；2026 年 5 月 22 日后没有新提交（参见 [Aider 替代品](/blog/aider-alternatives)）"],
        ["[Crewmark](/pricing)", "闭源", "-", "你的电脑上，在你自己的 Claude Code 或 Codex 里", `免费版（${free.projects} 个项目、${free.employees} 个 AI 员工）；Pro $${pro.price}/月即将推出`, "有岗位、工作时间和心跳的 agent，自己从看板领下一个任务"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今天就能装的开源 OpenCode 替代品",
      text: ["每个都是一条命令安装。把脚本交给 shell 执行之前先看一眼内容。"],
      steps: [
        {
          title: "Pi",
          text: "一个极简、可扩展的 agent 框架。默认配置够用，但有意不带子 agent 和计划模式：你用扩展、skill 和提示词模板自己加，或者让 Pi 帮你写。用 `/login` 连接订阅或 API key。Pi 没有内置权限系统，需要边界的话放进容器或沙盒里跑，文档给了三种做法。",
          code: install,
        },
        {
          title: "Crush",
          text: "Charm 的终端 agent，用 Go 写成。它读取语言服务器（LSP）获取上下文，支持 http、stdio 和 sse 三种 MCP 服务器，会话中途可以换模型。可以用 Homebrew、npm、winget、scoop、apt 和 pkg 安装，README 列出的平台包括 Windows（PowerShell 和 WSL）、Android 和 BSD 系统。协议是 FSL-1.1-MIT，属于源码公开协议，不算严格意义上的开源协议。",
        },
        {
          title: "Kilo CLI",
          text: "Kilo 的 README 写明它的 CLI 是 OpenCode 的分支。在此之上，Kilo 加了 VS Code 和 JetBrains 插件、云端 agent、自动审查 pull request，以及可以在任务中途切换的 500 多个模型。MIT 协议。",
        },
        {
          title: "Goose、Cline 和 Nanocoder",
          text: "Goose 是 Rust 写的 agent，有桌面应用和 CLI，现归 Linux 基金会旗下的 Agentic AI Foundation。Cline 可以作为 CLI、编辑器插件或 SDK 运行。Nanocoder 是 Nano Collective 做的本地优先终端 agent，有 normal、auto-accept、yolo、plan、architect 五种模式，还有审查分支、在独立 worktree 里检出 pull request 的命令。",
        },
      ],
      source: { label: "来源：各项目在 GitHub 上的 README", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "带免费模型的 OpenCode 替代品",
      text: ["OpenCode 本身就有免费模型，每天有请求次数限制，Go 的额度用完后也可以退回免费模型。想找别的免费方案："],
      points: [
        "Freebuff：不用订阅、不用充值、不用 API key。自带模型的费用由文字广告承担，默认模型是 DeepSeek V4.1 Flash；邀请和悬赏可以在每日免费额度之外多换时长。",
        "本地模型：Nanocoder、Crush、Goose 和 OpenCode 都能接 Ollama，成本只有你自己的硬件。",
        "Google 的免费额度：Gemini CLI 已经没有了。它的 README 写着，免费个人账号和 Google AI Pro、Ultra 于 2026 年 6 月 18 日转到了 Antigravity CLI（`agy`）。",
        "Codex CLI：开源，免费的 ChatGPT 账号就能用。",
        "开源 agent 加自己的 key：Pi、Kilo CLI、Cline 和 Goose 本身不要钱，你只付模型费用。",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "适合本地大模型的 OpenCode 替代品",
      text: ["如果你用 OpenCode 是为了在自己机器上跑模型，下面两个把本地模型当作首选路径。"],
      steps: [
        {
          title: "Nanocoder",
          text: "为通过 Ollama 跑的本地模型而做，也能接 OpenRouter 等任意 OpenAI 兼容 API。用参数指定服务商和模型，或者用 `nanocoder run` 非交互运行。",
          code: local,
        },
        {
          title: "Crush",
          text: "在 `crushrc` 里把 Ollama 加成服务商。crushrc 是类似 Bash 的配置文件，在包括 Windows 在内的所有平台上写法一样；然后注册你已经拉下来的模型。",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust、Windows、Android 或图形界面",
      points: [
        "Rust：Codex CLI 和 Goose 都是 Rust 写的。Crush 是单个 Go 二进制。",
        "Windows：Crush（winget、scoop 或 npm）、Pi（PowerShell 安装脚本）、GitHub Copilot CLI（winget）和 OpenCode 桌面应用都能原生运行。",
        "Android：Crush 的 README 把 Android 列在支持的终端里。",
        "图形界面：OpenCode 自己的桌面应用（测试版，macOS、Windows、Linux）；Goose Desktop；Freebuff Desktop，还能运行你已经装好的 Claude Code 和 Codex；以及 VS Code 和 JetBrains 里的 Kilo、Cline。",
        "OpenCode Go 每月 $10，用开源权重模型（Go Plus 每月 $40）。如果更想要一个前沿模型的订阅，ChatGPT Go 每月 $8 就含 Codex，Copilot Pro 每月 $10，Claude Pro 每月 $20。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "想让 agent 在你不输入的时候也干活",
      text: [
        "这份清单里的每个工具都在等你的下一条提示。Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳：上班时间它会自己醒来，从看板领下一个任务，需要你拍板时发消息给你。它在你的电脑上运行，用的是你已经付费的套餐。",
      ],
      steps: [
        {
          title: "在你的 agent 上雇一个员工",
          text: "在 Claude Code 或 Codex 对话里运行设置命令，这个对话就成了员工。参见[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "给它工作时间和心跳",
          text: "在你设定的时间段里每 15 到 240 分钟醒一次，通宵也行。参见[如何让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)和[Codex 长时间任务](/blog/codex-long-running-tasks)。",
        },
        {
          title: "它问的时候再回答",
          text: "需要决定的事以消息发给你，其余都在看板上。更多终端 agent 对比，参见 [Cursor 替代品](/blog/cursor-alternatives)和 [Devin 替代品](/blog/devin-alternatives)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一个在两次提示之间也继续干活的编程 agent？",
    text: "Crewmark 员工在工作时间按心跳醒来，从看板领下一个任务。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "最好的开源 OpenCode 替代品是哪个？",
        a: "想要自己扩展的小框架选 Pi，想要各平台都好用的终端应用选 Crush，想要 OpenCode 内核再加 IDE 插件选 Kilo CLI。Goose 和 Cline 也是可靠的 Apache 协议选择。",
      },
      {
        q: "Kilo CLI 是基于 OpenCode 的吗？",
        a: "是的。Kilo 的 README 写明 Kilo CLI 是 OpenCode 的分支，扩展后接入 Kilo 平台：VS Code 和 JetBrains 插件、云端 agent 和代码审查。",
      },
      {
        q: "有免费的 OpenCode 替代品吗？",
        a: "Freebuff 免费，不要 API key，靠文字广告支撑。Nanocoder、Crush、Goose 和 OpenCode 本身配合 Ollama 跑本地模型也是免费的。Gemini CLI 的免费额度已在 2026 年 6 月转到 Antigravity CLI。",
      },
      {
        q: "有用 Rust 写的 OpenCode 替代品吗？",
        a: "OpenAI 的 Codex CLI 和 Goose 都是 Rust 写的，都是 Apache 2.0 协议。Crush 用 Go 写成，以单个二进制发布。",
      },
      {
        q: "Crush 是开源的吗？",
        a: "Crush 的代码以 FSL-1.1-MIT 公开，这是一种源码公开协议。OpenCode、Pi、Kilo CLI 和 Nanocoder 是 MIT；Goose、Cline、Codex CLI、Qwen Code 和 Freebuff 是 Apache 2.0。",
      },
      {
        q: "OpenCode 和 Claude Code 该用哪个？",
        a: "OpenCode 能接任意服务商，包括本地模型，而且开源。Claude Code 是 Anthropic 官方的闭源 agent，Claude Pro（每月 $20）起就包含。反正要付 Claude 的钱，Claude Code 能最先用上新功能；经常换模型的话，OpenCode 或 Pi 更合适。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一条提示。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照各项目的 GitHub 仓库和 README、opencode.ai 及各厂商价格页核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenCode 及文中任何项目均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
