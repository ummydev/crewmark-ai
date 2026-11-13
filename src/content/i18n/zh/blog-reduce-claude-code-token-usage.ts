import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

使用 compact 时，重点保留测试输出和代码改动。`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "如何减少 Claude Code token 用量：12 个实用技巧 | Crewmark",
    description:
      "Claude Code 为什么这么耗 token，以及怎么省：用 /usage 和 /context 查看用量，及时 clear 和 compact，选对模型和 effort，精简 CLAUDE.md 和 MCP，善用 hook、skill 和 subagent。",
  },
  breadcrumb: "减少 Claude Code token 用量",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "如何减少 Claude Code 的 token 用量（不再频频撞上限额）",
    lead: "Claude Code 每次请求都会带上整段对话，所以 token 用量随上下文增长：在长会话后段问一个一句话的问题，比在新会话里问同样的问题贵得多。本文先教你看清 token 花在了哪里，再给出 Anthropic 官方文档中 12 个能减少用量的做法，从 `/clear` 和 `/compact`，到选择模型和 effort、精简 CLAUDE.md 和 MCP 服务器，再到把吵闹的工作交给 hook、skill 和 subagent。",
    cta: "申请抢先体验",
    secondary: "直接看技巧",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "先看清 token 花在了哪里",
      headers: ["工具", "显示什么"],
      rows: [
        ["`/usage`", "会话 token 数和预估费用；在 Pro、Max、Ultra、Team 和 Enterprise 套餐上，还有套餐用量条、按 skill、subagent、插件和 MCP 服务器划分的明细、优化建议，以及最耗用量的 `/loop` 任务"],
        ["`/context`", "当前是什么占满了上下文窗口"],
        ["状态栏", "配置后可持续显示上下文用量"],
        ["加载指示器计数", "当前这一轮的输出 token，例如 `↓ 5.5k tokens`；不包含上下文"],
        ["`/insights`", "一份 HTML 报告，分析你最近多个会话的工作方式，列出卡点和建议"],
      ],
    },
    {
      kind: "text",
      title: "为什么长会话里用量会越涨越快",
      points: [
        "上下文太长：每次请求都带着完整对话，而每一轮工具调用又会再发一次请求。缓存让重复读取更便宜，但不是免费。",
        "缓存未命中：离开的时间超过缓存有效期后，你发的第一条消息会把整个上下文重新处理一遍。",
        "你空闲时仍在运行的东西：会话级定时任务和 `/loop`、来自你其他会话的消息、目标进度检查、会话回顾和空闲时的自动压缩。",
        "并行工作者：每个 subagent、workflow agent 和 agent team 队友都会发出自己的请求。当队友在 plan mode 下运行时，agent teams 消耗的 token 约为普通会话的 7x。",
        "压缩本身：`/compact` 必须读一遍它要总结的对话。`/clear` 不花任何 token。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "减少 Claude Code token 用量的 12 个方法",
      steps: [
        {
          title: "在不相关的任务之间清空对话",
          text: "`/clear` 会开启一段新对话，过时的上下文就不会再一路跟着。如果之后还想用 `/resume` 回到它，先运行 `/rename`。",
        },
        {
          title: "带着指令压缩",
          text: "`/compact Focus on code samples and API usage` 告诉 Claude 该保留什么。你也可以把常用的压缩指令写进 CLAUDE.md。",
          code: compact,
        },
        {
          title: "选对模型",
          text: "Sonnet 能胜任大多数编码工作，而且比 Opus 便宜；把 Opus 留给架构设计和高难度推理。用 `/model` 切换，并给简单的 subagent 设置 `model: haiku`。",
        },
        {
          title: "简单任务调低 effort",
          text: "思考 token 按输出计费，每次请求可能多达数万个。处理日常任务时，用 `/effort` 调低级别。",
        },
        {
          title: "保持 CLAUDE.md 简短",
          text: "它每个会话都会被完整加载。控制在 200 行左右以内，把特定工作流的指令移到 skill 里，skill 只在用到时才加载。参见 [CLAUDE.md 指南](/blog/claude-md)和 [Claude Code skills](/blog/claude-code-skills)。",
        },
        {
          title: "精简 MCP 服务器",
          text: "工具定义默认延迟加载，但每个服务器仍会加入名称和说明。在 `/mcp` 中停用不用的服务器，并优先使用 `gh`、`aws`、`gcloud` 这类 CLI，它们不会增加逐个工具的列表。",
        },
        {
          title: "用 hook 过滤嘈杂的输出",
          text: "PreToolUse hook 可以改写测试命令，只保留失败的结果，把数万 token 的日志压缩到几百个。Anthropic 的文档里附有现成的过滤脚本。",
          code: hook,
        },
        {
          title: "把冗长的工作交给 subagent",
          text: "在 subagent 里跑测试、读文档或处理日志，输出会留在它自己的上下文中，只有摘要会返回。给这些 subagent 配一个更小的模型。",
        },
        {
          title: "安装代码智能插件",
          text: "对于有类型的语言，语言服务器插件一次调用就能完成“跳转到定义”，不必先 grep 再读好几个文件。",
        },
        {
          title: "写具体的提示词",
          text: "“给 auth.ts 里的 login 函数加上输入校验”只需读几个文件；“改进这个代码库”则会把所有东西扫一遍。",
        },
        {
          title: "先计划，及早叫停",
          text: "大改动用 [plan mode](/blog/claude-code-plan-mode)，在写代码之前就发现方向错误；一旦 Claude 跑偏，立刻按 Escape，再用 `/rewind` 回到检查点。",
        },
        {
          title: "留意你不在时运行的东西",
          text: "每个定时任务、每次 `/loop` 运行或空闲消息都会发送你的完整上下文。停掉不需要的循环，把 `crossSessionInbound` 设为 `hold`，让来自其他会话的消息先排队，并查看 `/usage` 中的 Loops 行。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "用量限额与团队成本",
      text: [
        "在 Pro、Max 和 Ultra 套餐上，用量计入套餐限额，而不是产生账单；5 小时和每周限额如何运作，参见 [Claude Code 与 Codex 对比](/blog/claude-code-vs-codex)。在 API 上，Anthropic 公布的企业平均费用约为每位开发者每个活跃日 $13、每月 $150 到 $250，90% 的用户每天低于 $30。",
        "管理员可以为团队设置支出上限；在托管设置中配置 `modelPricing` 表后，`/usage` 会显示合同价格，而不是标价。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "按时上班的 agent，不会整夜烧 token",
      text: [
        "任何唤醒会话的操作都会发送完整上下文，所以一直在线的 agent 需要有边界。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成 AI 员工，只在你设定的工作时间内按心跳醒来。",
      ],
      steps: [
        {
          title: "设定工作时间和节奏",
          text: "选择每 15、30 或 60 分钟一次，以及它上班的时段；其余时间它都在休眠。参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "一次只做一个 issue",
          text: "每次心跳都从看板上接手下一个 issue，会话专注于明确的任务，而不是漫无目的地探索。",
        },
        {
          title: "用你已经在付费的套餐",
          text: "员工运行在你现有的订阅上，用量计入套餐限额。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "减少 Claude Code token 用量" },
  mid: {
    title: "把 token 花在干活上，而不是等待上。",
    text: "Crewmark 在工作时间内唤醒 Claude Code，带着岗位、目标和看板上的下一个 issue。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude Code token 用量常见问题",
    items: [
      {
        q: "Claude Code 为什么这么耗 token？",
        a: "它每次请求都会发送完整对话，而每一轮工具调用又是一次新请求。长会话、离开后的缓存未命中、subagent，以及你空闲时运行的任何东西，都会累积起来。",
      },
      {
        q: "怎么查看 Claude Code 的 token 用量？",
        a: "运行 `/usage` 查看会话 token、套餐用量以及带建议的明细，运行 `/context` 查看是什么占满了上下文窗口。状态栏可以一直显示上下文用量。",
      },
      {
        q: "最快的省 token 方法是什么？",
        a: "在不相关的任务之间运行 `/clear`，除非确实需要 Opus 否则用 Sonnet，并保持 CLAUDE.md 简短。这三条就能解决大部分浪费。",
      },
      {
        q: "/compact 能省 token 吗？",
        a: "它会缩小后续消息的上下文，但压缩本身要读完整段对话，所以是一次很大的请求。如果不需要延续之前的对话，`/clear` 不花任何 token。",
      },
      {
        q: "MCP 服务器会消耗 token 吗？",
        a: "工具定义会延迟到使用时才加载，但每个服务器仍会加入工具名称和说明。停用不用的服务器，有 CLI 工具时优先用 CLI。",
      },
      {
        q: "为什么我这么快就用完了限额？",
        a: "通常是因为长会话、几次缓存未命中，或者 `/loop`、定时任务、subagent、agent teams 这类后台工作。在付费套餐上，`/usage` 会显示近期用量主要来自哪一项。",
      },
      {
        q: "subagent 能省 token 吗？",
        a: "它们让冗长的输出不进入你的主对话，从而让后续请求保持精简，但它们自己的请求照样计入用量。给它们配一个更小的模型就能少花一些。",
      },
    ],
  },
  cta: {
    title: "让 Claude Code 按你定的时间表工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（Manage costs effectively）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
