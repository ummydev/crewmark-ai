import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Simplified Chinese translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli，Aider 的社区分支
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder（通过 Ollama 跑本地模型）
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider 用 --read 加载你的规范文件
aider --read CONVENTIONS.md

# OpenCode 和 Codex 读取仓库根目录的 AGENTS.md
mv CONVENTIONS.md AGENTS.md

# Claude Code 读取 CLAUDE.md，在里面导入同一个文件
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Aider 替代品（2026）：Aider 还有人维护吗？现在用什么",
    description:
      "Aider 还在维护吗？看它最后一次发布、最后一次提交和未处理的 issue，再看 2026 年最好的 Aider 替代品：cecli 分支、OpenCode、Pi、Crush、Cline、Nanocoder、Codex CLI 和 Claude Code，附安装命令。",
  },
  breadcrumb: "Aider 替代品",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "博客 · 编程 agent",
    title: "2026 年的 Aider 替代品：Aider 停更了吗，该换成什么",
    lead: "Aider 是终端里最早的 AI 结对编程工具：开源、能接任意模型、给整个仓库建索引图，每次改动都自动提交 git。它现在仍然能安装、能用，GitHub 上约 5 万星。但它在 GitHub 上最后一个正式版本是 2025 年 8 月，最后一次提交是 2026 年 5 月 22 日，所以很多用户在找能跟上新模型的工具。下面是这个项目的现状、和 Aider 用法最接近的替代品，以及怎么把你的配置搬过去。",
    cta: "开始使用",
    secondary: "Aider 停更了吗？",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Aider 停更了吗？",
      text: ["官方没有宣布。仓库没有归档，也没人说要停。但从所有公开信号看，它基本没人在维护："],
      points: [
        "GitHub 上最后一个正式版本：v0.86.0，2025 年 8 月 9 日。PyPI 上最后一个包 aider-chat 0.86.2 上传于 2026 年 2 月 12 日。",
        "主分支最后一次提交：2026 年 5 月 22 日，是一次补充新 Claude 模型名的合并。",
        "未处理的 issue 和 pull request 约 1,960 个。",
        "2026 年 1 月有用户开 issue 问 Aider 的未来方向。有一条回复说它基本是一个人的项目，现在慢了下来；维护者没有在那里回复。",
        "README 里写的最佳模型仍是 Claude 3.7 Sonnet、DeepSeek R1、o3-mini 和 GPT-4o。",
      ],
    },
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "还想用 Aider，但要有人更新：cecli，Aider 的社区分支。",
        "最流行的开源终端 agent，能接任意模型：OpenCode，MIT 协议，约 22.6 万星。",
        "延续 Aider 的极简风格：Pi，一个自己动手扩展的小框架，MIT 协议，约 12.1 万星。",
        "本地模型优先，像很多人用 Aider 那样：Nanocoder，配 Ollama。",
        "想要 Aider 的 watch 模式（在代码注释里提需求）：VS Code 和 JetBrains 里的 Cline 或 Kilo Code。",
        "反正在付 ChatGPT 或 Claude 的钱：Codex CLI 或 Claude Code。",
        "想要按时间表自己处理待办、而不是只在你输入时才动的 agent：Crewmark，跑在 Claude Code 或 Codex 之上。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Aider 替代品对比",
      text: ["星数四舍五入，取自 2026 年 11 月 10 日的 GitHub API；“最后一次提交”指当天主分支上最新的提交。"],
      headers: ["工具", "协议", "开发语言", "模型", "费用", "适合"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（约 5 万星）", "Python", "几乎任意模型，包括本地模型", "免费；用你的模型 key", "基准；最后一次提交 2026 年 5 月 22 日"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0（约 420 星）", "Python", "和 Aider 一样", "免费；用你的模型 key", "想留在 Aider 体系里，用一个仍在更新的分支"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（约 22.6 万星）", "TypeScript", "任意服务商、本地模型", "免费模型有每日次数限制；Go $10/月", "功能完整的终端 agent，有 Plan 和 Build 模式和桌面应用"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（约 12.1 万星）", "TypeScript", "你的订阅或 API key", "免费", "用工具和 skill 扩展的极简框架"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（约 2.9 万星）", "Go", "多数服务商、Ollama", "免费；用你的 key", "带 LSP 和 MCP 的精致终端界面，各平台都能跑"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（约 7.1 万星）", "TypeScript", "你的模型 key", "免费", "VS Code、JetBrains 或终端里的 agent"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT（约 2.8 万星）", "TypeScript", "500 多个，按服务商原价", "免费上手", "IDE 插件，加上从 OpenCode 分出来的 CLI"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（约 2,600 星）", "TypeScript", "Ollama 或任意 OpenAI 兼容 API", "免费", "私密、本地优先的编程"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（约 13.4 万星）", "Rust", "OpenAI", "任意 ChatGPT 套餐，包括免费版；或 API key", "想要快速原生 agent 的 ChatGPT 用户"],
        ["[Claude Code](https://code.claude.com/docs)", "闭源", "-", "Anthropic", "Claude Pro $20/月", "Claude 用户"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT（约 1.6 万星）", "Go", "多家服务商", "免费；用你的模型 key", "大型项目；最后一次提交 2025 年 10 月 3 日"],
        ["[Crewmark](/pricing)", "闭源", "-", "通过你的 Claude Code 或 Codex", `免费版（${free.projects} 个项目、${free.employees} 个 AI 员工）；Pro $${pro.price}/月即将推出`, "有岗位、工作时间和心跳的 agent，自己从看板领下一个任务"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今天就能装的开源 Aider 替代品",
      text: ["每个都是一条命令安装。把脚本交给 shell 执行之前先看一眼内容。"],
      steps: [
        {
          title: "cecli：Aider 的分支",
          text: "cecli 于 2025 年 8 月从 Aider 分出来，至今仍在更新。它自称是为可扩展、可定制而做的 CLI agent，在 macOS、Linux 和 Windows 上安装后命令是 `cecli`，PyPI 上的包名是 cecli-dev。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "覆盖面和 Aider 最接近：开源、终端优先、能接 200 多家模型服务商，包括本地模型。它在完全权限的 Build agent 之外加了只读的 Plan agent、子 agent，以及测试版桌面应用。",
        },
        {
          title: "Pi 和 Nanocoder",
          text: "Pi 刻意保持内核小巧，不带子 agent 和计划模式，需要什么用扩展和 skill 加。Nanocoder 由一个非营利社区为 Ollama 本地模型而做，有 plan 和 architect 模式，后者 Aider 用户会很熟悉。",
        },
      ],
      source: { label: "来源：各项目在 GitHub 上的 README", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "从 Aider 换到别的 agent",
      steps: [
        {
          title: "把规范文件带过去",
          text: "Aider 从你用 `--read` 加载的文件里读取编码规范。OpenCode 和 Codex 读取仓库根目录的 `AGENTS.md`，Claude Code 读取 `CLAUDE.md`，后者可以导入 `AGENTS.md`。参见 [Codex 的 AGENTS.md](/blog/codex-agents-md) 和 [CLAUDE.md](/blog/claude-md)。",
          code: conventions,
        },
        {
          title: "想好怎么提交",
          text: "Aider 每次改动都会自动提交并生成提交信息。Claude Code、Codex 和 OpenCode 默认不替你提交，改完后让它提交，或者把提交规则写进 AGENTS.md。",
        },
        {
          title: "把模型带过去",
          text: "如果你之前用 Aider 跑 DeepSeek 或本地模型，OpenCode、Crush、Nanocoder 和 Pi 都能用你自己的 key，前三个能接 Ollama。反过来想在 Claude Code 里用 DeepSeek，参见 [Claude Code 接 DeepSeek](/blog/claude-code-deepseek)。",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider 对比 OpenCode、Claude Code、Pi 和 Cline",
      points: [
        "Aider 对比 OpenCode：两者都开源、不绑定模型。OpenCode 每周 100 多次提交，加了 agent、子 agent、MCP 和桌面应用；Aider 更简单，会替你提交。",
        "Aider 对比 Claude Code：Claude Code 闭源，跑 Anthropic 的模型，Claude Pro（每月 $20）起就包含，新功能最先用上。Aider 免费，能接任意模型。",
        "Aider 对比 Pi：两者都刻意做小。Pi 一直在活跃开发，有 SDK、RPC 模式和扩展包系统。",
        "Aider 对比 Cline：Cline 主要在编辑器里用，也有 CLI；Aider 以终端为主，用 watch 模式响应编辑器里的注释。",
        "Aider 对比 Codex：Codex CLI 开源、用 Rust 写成，所有 ChatGPT 套餐都包含，跑 OpenAI 的模型。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "从结对编程工具，到有自己待办的同事",
      text: [
        "Aider 和这里的每个工具都在等你的下一条消息。Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳：上班时间它会自己醒来，从看板领下一个任务，提交代码、开 pull request，需要你拍板时发消息给你。",
      ],
      steps: [
        {
          title: "在你的 agent 上雇一个员工",
          text: "在 Claude Code 或 Codex 对话里运行设置命令，这个对话就成了员工。参见 [AI 软件工程师](/ai-employees/software-engineer)。",
        },
        {
          title: "给它工作时间和心跳",
          text: "在你设定的时间段里每 15 到 240 分钟醒一次。参见[如何让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)。",
        },
        {
          title: "对比其他工具",
          text: "更多终端 agent 参见 [OpenCode 替代品](/blog/opencode-alternatives)；编辑器类参见 [Cursor 替代品](/blog/cursor-alternatives)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要一个在两次提示之间也继续干活的 agent？",
    text: "Crewmark 员工在工作时间按心跳醒来，从看板领下一个任务。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Aider 停更了吗？",
        a: "仓库没有归档，现在也还能安装和使用。但它在 GitHub 上最后一个版本是 2025 年 8 月的 v0.86.0，PyPI 最后一次发布在 2026 年 2 月，最后一次提交是 2026 年 5 月 22 日；2026 年 1 月有人问它的未来方向，维护者至今没有回复。",
      },
      {
        q: "Aider 还有人维护吗？",
        a: "几乎没有。2026 年 5 月 22 日之后没有提交，约 1,960 个 issue 和 pull request 未处理，README 推荐的还是 2025 年初的模型。社区分支 cecli 仍在更新。",
      },
      {
        q: "Aider 有分支吗？",
        a: "有：cecli，2025 年 8 月从 Aider 分出的 GitHub 分支，Apache 2.0 协议，安装后命令是 `cecli`。它比 Aider 小得多，约 420 星。",
      },
      {
        q: "2026 年 Aider 和 OpenCode 哪个更好？",
        a: "对多数人来说是 OpenCode：它和 Aider 一样开源、不绑定模型，但几乎每天更新，还有子 agent、MCP 和桌面应用。Aider 更简单，每次改动都替你提交。",
      },
      {
        q: "Aider 免费吗？",
        a: "免费。Aider 是 Apache 2.0 协议，你只付模型服务商的钱；用本地模型则完全不花钱。",
      },
      {
        q: "最好的免费 Aider 替代品是哪个？",
        a: "OpenCode 自带免费模型，每天有次数限制；Nanocoder、Crush 和 OpenCode 通过 Ollama 跑本地模型都免费；Codex CLI 用免费的 ChatGPT 账号就能用。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份待办，而不只是一条提示。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照各项目的 GitHub 仓库、README 和发布记录、PyPI 及各厂商价格页核对。",
  disclaimer: "Crewmark 是独立产品，与 Aider 及文中任何项目均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
