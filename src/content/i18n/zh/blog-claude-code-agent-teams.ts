import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/claude-code-agent-teams; the English master is src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Agent Teams 和 Subagents 区别 | Crewmark AI",
    description:
      "根据官方文档讲清 Claude Code agent teams：和 subagent 有什么区别、怎么开启和创建团队、tmux 与 iTerm2 分屏、团队规模、token 成本和限制，附示例提示词。",
  },
  breadcrumb: "Claude Code agent teams",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code agent teams 和 subagent 有什么区别：各自什么时候用，以及怎么搭一个团队",
    lead: "有了 agent teams，一个 Claude Code 会话可以当团队负责人（lead），派生出若干队友：每个队友都是独立的 Claude Code 实例，有自己的上下文窗口，共享一个任务列表，还能直接互相发消息。subagent 更轻量：它是一个会话里的助手，专注做一件事，做完交回一份总结。Agent teams 是实验性功能，默认关闭。这篇文章根据 Anthropic 的官方文档对比两者，再讲怎么开启 agent teams、启动一个团队、在 tmux 或 iTerm2 分屏里查看队友，以及怎么避开常见的坑。",
    cta: "开始使用",
    secondary: "直接看怎么搭团队",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams 和 subagent 的区别",
      text: [
        "两者都在各自独立的上下文窗口里并行干活。区别在于谁来协调：用 subagent 时，主 agent 统管一切；在团队里，队友从共享列表里认领任务，并且互相沟通。",
      ],
      headers: ["", "Subagent", "Agent teams"],
      rows: [
        ["是什么", "一个会话里的助手，定义在 `.claude/agents/` 里，或者用内置的（Explore、Plan、general-purpose）", "一个负责人会话，加上若干作为队友的独立 Claude Code 实例"],
        ["上下文", "有自己的上下文窗口；只有总结会传回给调用方", "有自己的上下文窗口；完全独立"],
        ["沟通方式", "把结果交回给调用方（有名字的 subagent 之间可以互发消息）", "队友之间直接发消息；你也可以给任意一个队友发消息"],
        ["协调方式", "主 agent 管理所有工作", "共享任务列表，支持认领、依赖关系和消息"],
        ["最适合", "只关心结果的专注型任务", "需要讨论的工作：代码审查、方案辩论、按层拆分的功能开发"],
        ["Token 成本", "较低", "较高：每个队友都是一个单独的 Claude 实例"],
        ["状态", "正式可用", "实验性，默认关闭"],
      ],
    },
    {
      kind: "text",
      title: "什么时候该用 agent teams（什么时候不该用）",
      points: [
        "调研和审查：队友从不同角度研究同一个问题，再互相质疑对方的结论。",
        "新模块或新功能：每个队友负责独立的一块，比如前端、后端和测试。",
        "带着几种互相竞争的假设排查 bug：几个队友各自设法证明自己的猜想，同时推翻别人的。",
        "不适合按顺序进行的工作、要改同一批文件的工作，或依赖关系很多的任务：这些场景用单个会话或 subagent。",
        "不适合日常琐事：每多一个活跃的队友，token 消耗就多一份。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么搭建一个 Claude Code agent team",
      steps: [
        {
          title: "开启 agent teams",
          text: "在环境变量里，或 settings.json 的 `env` 块里，把 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` 设为 `1`。团队只能在交互式会话里用；用 `-p`（以及 Agent SDK）时，Claude 不会派生队友。",
          code: enable,
        },
        {
          title: "用大白话描述团队",
          text: "说清楚要几个队友、每个负责什么。Claude 会建好共享任务列表、派生队友，并在它们做完后汇总结论。",
          code: prompt,
        },
        {
          title: "选一种显示模式",
          text: "默认是进程内（in-process）模式，任何终端都能用：队友显示在提示符下方的面板里；用方向键和回车打开某个队友并给它发消息，按 `Ctrl+T` 查看任务列表。分屏模式让每个队友有自己的窗格，需要 tmux，或装了 `it2` CLI 的 iTerm2；把 `teammateMode` 设为 `auto` 或 `tmux`，或者用 `claude --teammate-mode auto` 启动。",
        },
        {
          title: "复用已经定义好的角色",
          text: "让 Claude 派生一个“using the security-reviewer agent type”的队友，就能复用 `.claude/agents/` 里的 subagent 定义，连同它的工具、模型和指令。",
        },
        {
          title: "随时引导，最后关闭",
          text: "随时查看队友进度、给它们改方向；如果负责人开始自己动手干队友的活，就对它说“wait for your teammates”。收尾时，让负责人按名字关闭某个队友；会话结束时，团队的目录会被清理掉。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Agent teams（英文）", href: docs },
    },
    {
      kind: "text",
      title: "最佳实践和限制",
      points: [
        "先从 3–5 个队友开始，每人大约 5–6 个任务；三个专注的队友往往比五个各干各的更有效。",
        "给每个队友分配不同的文件：两个队友改同一个文件会互相覆盖。",
        "把任务细节写进派生提示词：队友会加载 CLAUDE.md、MCP 服务器和 skills，但看不到负责人的对话。",
        "用 hooks 做质量关卡：`TeammateIdle`、`TaskCreated` 和 `TaskCompleted` 可以用退出码 2 把工作打回去重做。",
        "限制：每个会话只能有一个团队，不能嵌套团队，负责人不能更换，`/resume` 恢复不了进程内的队友，任务状态也可能滞后。",
        "分屏模式在 VS Code 集成终端、Windows Terminal 和 Ghostty 里用不了；进程内模式在哪里都能用。",
        "开启 agent teams 后，Claude 点名调用的 subagent 可能会作为队友启动；想要回原来的 subagent，就把这个变量设为 `0`。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams 和其他并行运行 Claude Code 的方式",
      text: [
        "Agent teams 是在一个会话里拆分你正盯着的一个任务。如果是彼此独立的任务，就在 [git worktrees](/blog/claude-code-worktree) 里开多个会话，或者用[后台 agent](/blog/claude-code-background-agents)；完整对比见[多个 Claude Code agent](/blog/multiple-claude-code-agents)。想压低成本，看[怎么减少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一支会话结束后还在干活的团队",
      text: [
        "agent team 只存在于一个会话里，会话一关就停。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有固定岗位、目标和工作时间的 AI 员工：每个员工按心跳醒来，从共享看板上接下一个 issue，需要你拍板时给你发消息。",
      ],
      steps: [
        {
          title: "给每个员工一个岗位",
          text: "[软件工程师](/ai-employees/software-engineer)、代码审查员、[SEO 专员](/ai-employees/seo-specialist)：就是你会派生成队友的那些角色，只不过一直留着。",
        },
        {
          title: "大家在同一块看板上干活",
          text: "issue 取代了会话里的任务列表，而且重启之后、过了几天几周都还在。",
        },
        {
          title: "让心跳来启动工作",
          text: "工作时间内每 15、30 或 60 分钟一次；了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "搭建一个 Claude Code agent team" },
  mid: {
    title: "想要一支不随会话结束而解散的团队？",
    text: "Crewmark 让 Claude Code 员工按心跳从共享看板上接活，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code agent teams 常见问题",
    items: [
      {
        q: "Claude Code agent teams 是什么？",
        a: "一项实验性功能：由一个 Claude Code 会话带领一支由多个独立 Claude Code 实例组成的团队。队友有各自的上下文窗口，共享一个任务列表，并且能直接给彼此和负责人发消息。",
      },
      {
        q: "agent teams 和 subagent 有什么区别？",
        a: "subagent 在一个会话里工作，把总结交回给主 agent，由主 agent 统一协调。agent teams 是独立的实例，通过共享任务列表和直接发消息自己协调，token 成本也更高。",
      },
      {
        q: "怎么在 Claude Code 里开启 agent teams？",
        a: "在环境变量里或 settings.json 的 env 块里把 CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS 设为 1，然后在交互式会话里让 Claude 为某个任务派生队友。",
      },
      {
        q: "agent teams 一定要用 tmux 吗？",
        a: "不用。默认的进程内模式在任何终端里都能用。只有想让每个队友各占一个分屏窗格时，才需要 tmux，或装了 it2 CLI 的 iTerm2。",
      },
      {
        q: "应该用几个队友？",
        a: "Anthropic 建议先从 3 到 5 个队友开始，每人大约 5 到 6 个任务。每多一个队友成本就多一份，队友越多，协调开销也越大。",
      },
      {
        q: "agent teams 能在 VS Code 里用吗？",
        a: "进程内模式在任何终端里都能用，包括 VS Code 的集成终端。但那里不支持分屏模式。",
      },
      {
        q: "我想要的是 subagent，为什么 Claude 派生了队友？",
        a: "开启 agent teams 后，Claude 点名调用的 subagent 会作为队友启动。把 CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS 设为 0，就能回到普通的 subagent。",
      },
    ],
  },
  cta: {
    title: "把你的 agent team 变成一支常驻团队。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 Claude Code 官方文档（Agent teams 和 Subagents）核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
