import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/multiple-claude-code-agents; the English master is src/content/blog/multiple-claude-code-agents.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "多个 Claude Code agent 并行：subagent 与 worktree | Crewmark",
    description:
      "同时运行多个 Claude Code agent：subagent、git worktree 里的并行会话、--bg 后台会话和实验性的 agent teams，还不会互相改坏文件。",
  },
  breadcrumb: "多个 Claude Code agent",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "怎么同时运行多个 Claude Code agent",
    lead: "Claude Code 有四种方式可以同时做好几件事：一个对话里的 subagent、各自在独立 git worktree 里的会话、用 --bg 启动的后台会话，以及能互相发消息的实验性 agent teams。这篇教程讲怎么设置每一种、该选哪一种，以及怎么避免并行的 agent 互相覆盖对方的工作。",
    cta: "申请抢先体验",
    secondary: "直接看 worktree",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "并行运行 Claude Code agent 的四种方式",
      headers: ["", "什么在并行", "文件是否隔离", "最适合"],
      rows: [
        ["Subagent", "一个对话里的多个助手，各有各的上下文", "否，除非设置 `isolation: worktree`", "调研、审查和做完要汇报的支线任务"],
        ["Worktree 会话", "完整的会话，各自在自己的 git worktree 里", "是，每个一个分支", "同时做几个功能或修复"],
        ["后台会话", "用 `claude --bg` 启动的会话，在 agent view 里管理", "是，默认每个一个 worktree", "现在派出任务，稍后再看"],
        ["Agent teams", "一个主会话加若干共享任务列表的队友", "否：在队友之间分好文件", "需要 agent 互相沟通的工作"],
      ],
    },
    {
      kind: "steps",
      title: "Subagent：一个会话里的并行助手",
      text: [
        "subagent 有自己的上下文窗口、系统提示词和工具。它看不到你的对话，只有它的总结会传回来，这样主会话的上下文就能保持精简。Claude Code 自带 Explore（只读）和 Plan 等内置 subagent，你也可以自己加。",
      ],
      steps: [
        {
          title: "定义一个 subagent",
          text: "在 `.claude/agents/`（和项目共享）或 `~/.claude/agents/`（只给你自己）里建一个 Markdown 文件。只有 `name` 和 `description` 是必填的；`tools` 限制它能用什么，`model` 选择模型。",
          code: subagent,
        },
        {
          title: "让 Claude 同时跑好几个",
          text: "直接要求并行，比如“并行审查 auth、billing 和 search 三个模块”。Claude 派生的 subagent 默认在后台启动，最多同时 20 个，做完后汇报。输入 `/tasks` 可以看到它们。",
        },
        {
          title: "给要改文件的 subagent 单独的 worktree",
          text: "在 subagent 的 frontmatter 里加上 `isolation: worktree`，或者让 Claude 给它的 agent 使用 worktree。这样每个 subagent 都在仓库的一份临时副本里修改；如果没做任何改动，副本会被删除。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "在 git worktree 里并行运行 Claude Code 会话",
      text: [
        "所有选项、设置和常见问题，见完整的 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
      ],
      steps: [
        {
          title: "忽略 worktree 文件夹",
          text: "Claude Code 在仓库根目录的 `.claude/worktrees/` 里创建 worktree。仓库至少要有一个 commit。",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "每个任务开一个会话",
          text: "在每个终端里用不同的名字运行 `claude --worktree`（或 `-w`）。每个会话都有自己的文件夹和一个名为 `worktree-<name>` 的分支，基于默认分支创建。",
          code: "# 终端 1\nclaude --worktree feature-auth\n\n# 终端 2\nclaude --worktree bugfix-login",
        },
        {
          title: "复制需要的未跟踪文件",
          text: "新的 worktree 里只有被 Git 跟踪的文件。把 `.env` 这类文件列进 `.worktreeinclude` 文件（gitignore 语法），Claude Code 就会把它们复制进去。",
          code: ".env\n.env.local",
        },
        {
          title: "合并并清理",
          text: "会话结束时，没有改动的 worktree 会连同分支一起删除；有改动的会问你是否保留。像合并其他分支一样合并它们。headless 的 `-p` 运行不会询问，所以要用 `git worktree remove` 自己删掉。",
        },
        {
          title: "或者用桌面应用",
          text: "按 Cmd+N（Windows 上是 Ctrl+N）新建会话，启动前打开 Worktree 开关；它默认是关的。多个会话可以在分屏视图里并排显示。",
        },
      ],
      source: { label: "来源：Anthropic 的 worktree 文档（英文）", href: docs },
    },
    {
      kind: "text",
      title: "用 --bg 和 agent view 运行后台会话",
      text: [
        "`claude --bg \"<prompt>\"` 在后台启动一个会话并立即返回，所以你可以接连启动好几个。每个会话在修改任何东西之前都会先进入自己的 worktree。`claude agents` 列出它们；`claude logs <id>`、`claude attach <id>` 和 `claude stop <id>` 管理单个会话。",
        "关掉终端后它们会继续运行，但电脑关机后就不会了。Agent view 还是研究预览版。更多无人值守运行的内容，看[怎么在后台运行 Claude Code agent](/blog/claude-code-background-agents)。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams：能互相沟通的 agent",
      text: [
        "Agent teams 是实验性功能，默认关闭。在 shell 里或 settings.json 的 `env` 块里设置 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 开启，然后让 Claude 为某个任务“派生三个队友”。队友共享一个任务列表并互相发消息；它们显示在终端里，用 tmux 或 iTerm2 时也可以显示在分屏窗格里。",
      ],
      points: [
        "只支持交互式会话：`-p` 和 Agent SDK 不会派生队友。",
        "每个会话只能有一个团队，不能嵌套团队，进程内的队友不会被 `/resume` 恢复。",
        "队友共用同一份代码检出，所以要给每个人分配不同的文件。",
        "花费高得多：按 Anthropic 文档的说法，队友在 plan 模式下运行时，一个团队大约要用单个会话 7 倍的 token。",
      ],
    },
    {
      kind: "text",
      title: "避免并行 agent 互相覆盖",
      points: [
        "如果两个 agent 可能动到同样的文件，就给每个一个独立的 worktree。worktree 里的会话改不了主检出，它的 subagent 也改不了。",
        "在 agent team 里按文件分工：两个队友改同一个文件会互相覆盖。",
        "每个 subagent 和会话都消耗同一份用量限制，所以同时跑好几个会成倍消耗用量。简单的 subagent 用 `model: haiku`。",
        "运行同一套测试或开发服务器的 agent 可能会抢端口；给每个分配自己的端口。",
      ],
    },
    {
      kind: "steps",
      kicker: "用 Crewmark",
      title: "把并行的 agent 变成各有分工的团队",
      text: [
        "worktree 和 agent teams 拆分的是你正盯着的一个任务。Crewmark 则把多个 Claude Code 或 Codex 会话作为员工来运行，各有自己的岗位、目标和工作时间，在同一块看板上派活。",
      ],
      steps: [
        {
          title: "一个岗位一名员工",
          text: "SEO 专员、软件工程师和 UI 设计师各自待在自己的对话里，有自己的指令和目标。",
        },
        {
          title: "所有人共用一块看板",
          text: "把 issue 分配给合适的员工。每名员工按自己的心跳醒来，领下一个 issue，边做边评论，谁在做什么一目了然。",
        },
        {
          title: "它们来问你，而不是互相问",
          text: "员工需要审核或权限时，会给你发消息，然后先做别的。读读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 git worktree 里并行运行 Claude Code 会话" },
  mid: {
    title: "每天都要跑好几个 agent？",
    text: "Crewmark 给每个 Claude Code 会话一个岗位、一个目标和工作时间，把它们的工作都放在同一块看板上。",
    button: "申请抢先体验",
  },
  faq: {
    title: "多个 Claude Code agent 常见问题",
    items: [
      {
        q: "可以同时运行多个 Claude Code agent 吗？",
        a: "可以。Claude 能在一个会话里并行运行 subagent；你也可以用 `claude --worktree` 在不同的 git worktree 里运行多个会话，用 `claude --bg` 启动后台会话，或者试试实验性的 agent teams。",
      },
      {
        q: "subagent 和 agent teams 有什么区别？",
        a: "subagent 完成一个任务，把总结汇报给启动它的会话。agent teams 是彼此独立的 Claude Code 实例，共享一个任务列表并直接互相发消息；它是实验性功能，token 消耗更多。",
      },
      {
        q: "最多能同时运行多少个 subagent？",
        a: "默认最多同时 20 个。`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 可以修改这个上限。subagent 也能再启动自己的 subagent，默认最多三层。",
      },
      {
        q: "怎么避免并行的 agent 改同一个文件？",
        a: "让每个 agent 待在自己的 git worktree 里：会话用 `claude --worktree <name>`，subagent 用 `isolation: worktree`。用 `--bg` 启动的后台会话会自动得到一个。agent teams 共用一份代码检出，所以要给每个队友分配文件。",
      },
      {
        q: "运行多个 agent 会更费钱吗？",
        a: "会。每个 subagent 和会话都会单独发请求，都计入同一份用量限制，所以同时跑好几个会成倍消耗用量。",
      },
      {
        q: "Claude Code 的 worktree 存在哪里？",
        a: "在仓库根目录的 `.claude/worktrees/<name>/` 里，分支名为 `worktree-<name>`。把这个文件夹加进 `.gitignore`。",
      },
    ],
  },
  cta: {
    title: "运行一支各有分工的 Claude Code agent 团队。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、有目标、有工作时间的 AI 员工，都在同一块看板上。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 2 日对照 Anthropic 的 Claude Code 官方文档核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
