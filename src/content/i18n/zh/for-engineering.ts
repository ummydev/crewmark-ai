import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `每天两次，读取生产环境里新出现和复发的 Sentry 报错，
把看板上还没有的记成 issue（写清影响和可能原因），
一行就能修的直接开 pull request。

按 AGENTS.md 里的规则，审查每个标为可审查的 pull request。
只写评论；绝不批准或合并。

每周五，根据本周合并的 pull request 写发布说明：
对用户来说改了什么，按模块分组，附链接。

接下一个标着“good first issue”的 issue，在你自己的
git worktree 里工作，带测试开 pull request。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 做工程：会交付的 AI 员工",
    description:
      "工程团队怎么把 Claude Code 和 Codex 当 AI 员工用：报错分拣、代码审查、从 issue 到 pull request、发布说明和夜班，都按时进行。岗位、使用场景、可复制的提示词，以及让合并始终由人掌控的规则。",
  },
  breadcrumb: "用 Claude Code 做工程",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "给工程团队",
    title: "用 Claude Code 做工程：自己领下一个 issue 的 AI 员工",
    lead: "多数团队只在有人坐下来给提示时才用 Claude Code 或 Codex。更大的收益是给它常设工作：每天早上分拣新报错，审查每个可以审的 pull request，从看板领下一个 issue 并开 pull request，周五写发布说明。本页讲哪些工程工作可以交出去、怎么让几个 agent 一起干活又不互相踩、可以复制的提示词，以及让合并始终由人掌控的规则。",
    cta: "开始使用",
    secondary: "看看有哪些工作",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "工程团队交给 AI 员工的工作",
      headers: ["工作", "频率", "指南"],
      rows: [
        ["分拣新的 Sentry 报错，修掉小问题", "每天两次", "[Sentry 报错分拣](/use-cases/sentry-error-triage)"],
        ["审查可以审的 pull request", "每个 PR", "[每个 PR 都有 AI 代码审查](/use-cases/pr-review)"],
        ["领下一个 issue 并开 pull request", "持续", "[AI 软件工程师](/ai-employees/software-engineer)"],
        ["夜里推进待办", "每晚", "[让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)、[Codex 长时间任务](/blog/codex-long-running-tasks)"],
        ["根据合并的 pull request 写发布说明", "每周", "见下面的提示词"],
        ["保持看板最新：状态、评论、链接", "每个 issue", "[Claude Code 看板](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "可以复制的提示词",
      text: ["每一条既可以作为 AI 员工的周期 issue，也可以直接在 Claude Code 或 Codex 里当一次性提示词用。"],
      steps: [
        {
          title: "四件工作，每件一句话",
          text: "把名字和时间换成你们的。前两个有完整指南和设置方法：[Sentry 报错分拣](/use-cases/sentry-error-triage)和 [AI 代码审查](/use-cases/pr-review)。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Claude Code 或 Codex 上配置 AI 工程师",
      steps: [
        {
          title: "规则只写一次",
          text: "把构建和测试命令、约定和审查规则写进 CLAUDE.md 或 AGENTS.md，每个会话都从同一个起点开始。参见 [CLAUDE.md](/blog/claude-md) 和 [Codex 的 AGENTS.md](/blog/codex-agents-md)。",
        },
        {
          title: "每个 agent 一个 worktree",
          text: "两个 agent 改同一个工作区会互相覆盖。每个 agent 用一个 git worktree；参见 [Claude Code worktree](/blog/claude-code-worktree) 和[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "连接工作需要的工具",
          text: "GitHub 用它的 CLI，Sentry 用它托管的 MCP 服务器，你们的任务工具用它的 MCP 服务器或 CLI。两者都有时优先用 CLI，更省 token。",
        },
        {
          title: "合并留给人",
          text: "agent 开 pull request、写评论；人来批准和合并。员工需要决定时，会把 issue 标为“需处理”并提问。",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "可以期待什么",
      points: [
        "描述清楚的小 issue 效果最好：带堆栈的 bug、缺失的测试、跨很多文件的文案修改。",
        "大功能仍然需要人拆成 issue；agent 擅长做零件，不太擅长做规划。",
        "用量来自你自己的 Claude 或 ChatGPT 套餐；重活安排在工作时间或夜里，别超出限额。",
        "审查的工作量会转移，不会消失：pull request 多了，要审的也多了，所以 AI 审查也在这张清单上。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "有看板、工作时间和心跳的工程师",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工：每个都有岗位、量化目标、工作时间和心跳，从共享看板领下一个 issue，边做边写评论，开 pull request 等审阅。",
      ],
      steps: [
        {
          title: "雇这个岗位",
          text: "从 [AI 软件工程师](/ai-employees/software-engineer)开始。",
        },
        {
          title: "把常设工作加成周期 issue",
          text: "分拣、审查和发布说明会按各自的时间表自动回来。",
        },
        {
          title: "看看其他团队",
          text: "营销团队也是同样的做法：[用 Claude Code 做营销](/for/marketing)。所有工作见[使用场景](/use-cases)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上配置 AI 工程师" },
  mid: {
    title: "想要自己领下一个 issue 的工程师？",
    text: "Crewmark 员工跑在你的 Claude Code 或 Codex 上，按心跳醒来，开 pull request 等审阅。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "工程团队最好用的 Claude Code 场景有哪些？",
        a: "会重复、有明确完成标准的工作：报错分拣、pull request 审查、带堆栈的小 bug、测试、发布说明，以及保持看板最新。大功能仍然需要人来规划。",
      },
      {
        q: "几个 Claude Code agent 能在同一个仓库里工作吗？",
        a: "能，只要每个都有自己的 git worktree 和自己的 issue。参见[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents)和 [agent teams](/blog/claude-code-agent-teams)。",
      },
      {
        q: "Codex 也能这样用吗？",
        a: "能。同样的工作和规则也适用于 Codex，把规则放进 AGENTS.md 即可。",
      },
      {
        q: "AI agent 应该合并自己的 pull request 吗？",
        a: "不应该。让它开 pull request、写评论；批准和合并留给人。",
      },
      {
        q: "这和 Devin 等云端 agent 有什么不同？",
        a: "云端 agent 在你分配任务时，在厂商的云端运行。Crewmark 用你自己套餐上的 Claude Code 或 Codex，按时间表做常设工作。参见 [Devin 替代品](/blog/devin-alternatives)。",
      },
    ],
  },
  cta: {
    title: "给你的工程团队配上自己领下一个 issue 的 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "写于 2026 年 11 月 10 日；工具相关的事实已于同日对照 Sentry、Anthropic 和 OpenAI 的文档核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic、OpenAI、GitHub 和 Sentry 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
