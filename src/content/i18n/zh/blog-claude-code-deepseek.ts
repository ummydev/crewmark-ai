import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 怎么接入 DeepSeek V4：配置教程和价格",
    description:
      "Claude Code 接入 DeepSeek 教程：DeepSeek 官方给出的 deepseek-flash 和 deepseek-v4-pro 环境变量配置、模型映射、联网搜索、API 价格，以及在 Codex 里使用 DeepSeek 的方法。",
  },
  breadcrumb: "Claude Code 接入 DeepSeek",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · DeepSeek",
    title: "Claude Code 怎么使用 DeepSeek 模型",
    lead: "DeepSeek 的 API 兼容 Anthropic 协议，所以只要把 Claude Code 指向 `https://api.deepseek.com/anthropic`，再填上 DeepSeek API key，就能用 DeepSeek 的模型跑 Claude Code。DeepSeek 官方给出了具体配置：日常工作用 `deepseek-flash`（DeepSeek-V4.1-Flash），上下文 1M token；Opus 这个名字背后对应的是 `deepseek-v4-pro`。本文介绍在 macOS、Linux 和 Windows 上怎么配置，Claude 模型名是怎么映射的，要花多少钱，以及怎么在 Codex 里做同样的事。",
    cta: "开始使用",
    secondary: "跳到配置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 接入 DeepSeek 的配置步骤",
      steps: [
        {
          title: "获取 DeepSeek API key",
          text: "在 platform.deepseek.com 的 API keys 页面创建一个，并给账户充值；用量按 token 计费。",
        },
        {
          title: "还没装 Claude Code 的话，先安装",
          text: "DeepSeek 的教程用 npm 安装：需要 Node.js 18 或更高版本，Windows 上还需要 Git for Windows，然后运行 `npm install -g @anthropic-ai/claude-code`，再用 `claude --version` 检查。",
        },
        {
          title: "设置环境变量（macOS 和 Linux）",
          text: "这些变量让 Claude Code 连到 DeepSeek 的 Anthropic 兼容端点，主模型和子 agent 都使用带 1M 上下文的 `deepseek-flash`，并调高 effort 等级和自动压缩窗口。写进 shell 配置文件就能一直生效。",
          code: env,
        },
        {
          title: "或者在 Windows 上（PowerShell）",
          text: "同样的配置，写成 PowerShell 环境变量，对当前会话生效。",
          code: windows,
        },
        {
          title: "在项目里启动 Claude Code",
          text: "用 `cd` 进入项目目录，运行 `claude`。其他的一切，比如 CLAUDE.md、skills、hooks 和 MCP 服务器，都照常配置。",
        },
      ],
      source: { label: "来源：DeepSeek API 文档，Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Claude 模型名怎么映射到 DeepSeek 模型",
      text: [
        "Claude Code（或 Claude 桌面应用）把 Claude 模型名发给 DeepSeek 的端点时，DeepSeek 按下表映射。这就是上面的配置把所有模型变量都设成 `deepseek-flash` 的原因：否则凡是请求 Opus 的调用，都会按 V4 Pro 的价格计费。",
      ],
      headers: ["Claude Code 发送的模型名", "实际使用的 DeepSeek 模型", "说明"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "按 V4 Pro 价格计费"],
        ["`claude-sonnet-*`、`claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash；支持图片输入"],
        ["`deepseek-flash[1m]`", "`deepseek-flash`，上下文 1,048,576 token", "DeepSeek 推荐的环境变量里就是这样设置的"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "要花多少钱",
      text: [
        "DeepSeek API 价格，单位为每百万 token 的美元价格，截至 2026 年 11 月 6 日。闲时价格（工作日 UTC 01:00–04:00 和 06:00–10:00 以外）是高峰价格的一半。Claude Code 的联网搜索在 DeepSeek API 上也能用，但每次搜索都会额外消耗模型 token 来总结结果，并按 DeepSeek 的 Search API 计费。",
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
      title: "在 Codex 里使用 DeepSeek",
      text: [
        "DeepSeek 也支持 Codex，走的是 Responses API。它的教程提供了一个配置脚本：先备份 `~/.codex/config.toml`，再写入一个包含 `deepseek-flash` 和 `deepseek-v4-pro` 的 `~/.codex/models.json` 模型目录，并添加 DeepSeek 服务商；这样一份配置就能同时用于 Codex CLI、ChatGPT 桌面应用和 VS Code 扩展。运行前先读一遍脚本，或者按同一份教程里的手动步骤操作。脚本会关闭内置的联网搜索，而联网搜索只在 `deepseek-v4-pro` 上可用。Codex 自己的说明文件见 [Codex AGENTS.md 指南](/blog/codex-agents-md)。",
      ],
    },
    {
      kind: "text",
      title: "Claude Code 接入 DeepSeek 和 DeepSeek Harness 怎么选",
      points: [
        "Claude Code 接入 DeepSeek：保留 Claude Code 的界面和使用习惯，包括 CLAUDE.md、skills、hooks 和插件，按 DeepSeek 的 token 价格付费，不用买 Claude 套餐。",
        "DeepSeek Harness：DeepSeek 自己的开源 agent 应用，围绕插件构建，有桌面应用和 Web UI；它也可以把 Claude Code 或 Codex 作为子 agent 运行。参见 [DeepSeek Harness 指南](/blog/deepseek-harness)。",
        "无论选哪个，用的都是同样的 `deepseek-flash` 和 `deepseek-v4-pro`，由 DeepSeek 计费。",
        "想切回 Anthropic 的模型，取消这些环境变量（或开一个没有它们的新 shell），再照常登录 Claude Code 即可。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "模型便宜，就让它全天干活",
      text: [
        "用 DeepSeek 的价格跑 Claude Code 或 DeepSeek Harness，让 agent 一直忙着也负担得起。Crewmark 把这些会话变成有岗位、有目标、有工作时间的 AI 员工，并用心跳唤醒每一位，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "沿用你现有的配置",
          text: "员工在你电脑上的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话里运行，用的是你的环境和密钥。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接手下一个 issue；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "把账单控制住",
          text: "限定工作时间、一次只做一个 issue，用量就可以预期；参见[如何减少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 中使用 DeepSeek 模型" },
  mid: {
    title: "DeepSeek 跑 Claude Code 很便宜，那就让它多干点。",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code、Codex 或 DeepSeek Harness。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code 接入 DeepSeek 常见问题",
    items: [
      {
        q: "Claude Code 能用 DeepSeek 模型吗？",
        a: "能。DeepSeek 的 API 在 `https://api.deepseek.com/anthropic` 提供 Anthropic 兼容接口。按 DeepSeek 教程，把 `ANTHROPIC_BASE_URL` 设成这个地址，把 `ANTHROPIC_AUTH_TOKEN` 设成你的 DeepSeek API key 即可。",
      },
      {
        q: "Claude Code 里该用哪个 DeepSeek 模型？",
        a: "DeepSeek 的教程给所有角色都设成带 1M 上下文的 `deepseek-flash`（DeepSeek-V4.1-Flash）。请求 Opus 模型时会用 `deepseek-v4-pro`，价格更高。",
      },
      {
        q: "Claude Code 接入 DeepSeek 要花多少钱？",
        a: "只有 DeepSeek API 的用量费用：`deepseek-flash` 高峰时段输入（缓存未命中）每百万 token $0.30，输出每百万 token $1.20，闲时减半，缓存命中的输入还要便宜得多。",
      },
      {
        q: "Claude Code 接入 DeepSeek 后能联网搜索吗？",
        a: "能。DeepSeek 支持 Claude Code 的联网搜索工具；每次搜索都会额外消耗模型 token 来总结结果，并按 DeepSeek 的 Search API 计费。",
      },
      {
        q: "需要订阅 Claude 吗？",
        a: "不需要。设置这些变量后，Claude Code 把请求发给 DeepSeek，费用记在你的 DeepSeek 账户上，而不是 Claude 套餐。",
      },
      {
        q: "Codex 也能用 DeepSeek 吗？",
        a: "能。DeepSeek 有文档说明如何通过 Responses API 配置 Codex，可以用脚本，也可以手动修改 `~/.codex/config.toml` 和 `~/.codex/models.json`。",
      },
      {
        q: "Claude Code 接入 DeepSeek 还是用 DeepSeek Harness？",
        a: "如果你喜欢 Claude Code 的工具和工作流，就保留它，只换模型。如果你想要 DeepSeek 自己的、基于插件、带桌面界面的应用，就试试 DeepSeek Harness。",
      },
    ],
  },
  cta: {
    title: "让你的 DeepSeek agent 按时上班。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 DeepSeek API 文档（Claude Code 和 Codex 接入、价格）核对。",
  disclaimer:
    "Crewmark 是独立产品，与 DeepSeek、Anthropic 或 OpenAI 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标；Codex 是 OpenAI 的商标。",
};
