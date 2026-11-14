import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Squad 替代方案及与 Conductor 对比 | Crewmark AI",
    description:
      "Claude Squad 能做什么、短板在哪（只能用 tmux、不支持 Windows、每个任务都得你来启动），以及同时运行多个 Claude Code 或 Codex agent 的替代方案：Claude Code 自带的 worktree、Paradev、Kanban Code、Conductor 和 Crewmark。",
  },
  breadcrumb: "Claude Squad 替代方案",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI 编程 agent",
    title: "Claude Squad 替代方案：同时跑多个编程 agent 的其他选择",
    lead: "Claude Squad 是一款开源终端应用（AGPL-3.0），用来并排运行多个编程 agent：每个任务有独立的 tmux 会话和 git worktree，推送前你可以先审查改动。如果你常驻终端、用的是 macOS 或 Linux，它很好用。大家找替代方案，通常是想要图形界面、需要 Windows，或者希望 agent 自己接活，不用一个个手动启动。本文对比各个选项，也包括 Claude Squad 与 Conductor 的对比。",
    cta: "开始使用",
    secondary: "对比替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Squad 擅长什么，又止步于哪里",
      text: [
        "Claude Squad 最新版本是 2026 年 8 月 20 日发布的 v1.0.20，项目仍在维护。它默认运行 Claude Code，用 `-p` 也能运行其他终端 agent，比如 Codex 或 Aider。",
      ],
      points: [
        "优点：每个任务一个 tmux 会话、一个 git worktree，agent 之间不会改到同一批文件。",
        "优点：推送前可以查看每个实例的 diff，并检出它的分支。",
        "优点：实验性的 `-y`（auto-yes）模式会自动确认提示，任务可以在后台跑完。",
        "局限：依赖 tmux 和 GitHub CLI；README 没提 Windows，在 Windows 上用 tmux 就得借助 WSL。",
        "局限：它是终端界面。没有看板，没有团队共享视图，每个任务都得你亲自启动。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何并行运行多个 agent（用不用 Claude Squad 都行）",
      steps: [
        {
          title: "给每个任务一个独立的 worktree",
          text: "这是 Claude Squad 的核心，而 Claude Code 现在自己就能做到：`claude --worktree <name>` 会在独立的分支和检出目录里启动一个会话。见 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
          code: usage,
        },
        {
          title: "选一种盯着它们的方式",
          text: "终端列表（Claude Squad）、桌面应用（Paradev，以及还没停服的 Conductor），或者会话看板（Kanban Code）。见 [Claude Code 看板](/blog/claude-code-kanban)。",
        },
        {
          title: "决定由谁启动下一个任务",
          text: "上面这些工具都要你来启动每个会话。如果希望 agent 自己去接下一个 issue，就给它们排个日程或加个心跳，见[如何让 Claude Code 主动干活](/proactive-claude-code)。",
        },
        {
          title: "合并之前先审查",
          text: "不管用什么跑 agent，合并这一步都要留给人：逐个看 diff，跑一遍检查，再合并。",
        },
      ],
      source: { label: "来源：Claude Squad 的 README", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Claude Squad 替代方案对比",
      text: ["信息来自各项目官网或仓库，核对于 2026 年 11 月。"],
      headers: ["", "界面", "支持的 agent", "平台", "谁来启动任务", "许可证"],
      rows: [
        ["Claude Squad", "终端界面（tmux）", "Claude Code、Codex、Gemini、Aider", "需要 tmux 和 gh；Windows 需通过 WSL", "你", "AGPL-3.0"],
        ["Claude Code 本身", "`claude --worktree`，桌面应用里的并行会话", "Claude Code", "macOS、Windows、Linux", "你（或定时任务）", "商业产品（Anthropic）"],
        ["Paradev（原 Superset）", "桌面应用，每个任务一个 worktree；支持自动化", "Claude、Codex、Cursor Agent、OpenCode 及任意 CLI agent", "macOS；Linux 处于实验阶段；暂不支持 Windows", "你，或自动化流程", "MIT"],
        ["Kanban Code", "Claude Code 会话看板", "Claude Code", "macOS 26 应用、Windows 应用", "你", "Apache 2.0"],
        ["Conductor", "并行运行 agent 的 Mac 应用；正在加入 Meta，云端于 2026 年 11 月 20 日关停", "Claude Code、Codex、Cursor、OpenCode", "macOS", "你", "商业产品"],
        ["Crewmark", "托管看板，AI 员工按心跳醒来干活", "Claude Code、Codex、DeepSeek Harness、OpenCode", "网页版看板；守护进程支持 macOS、Windows、Linux", "员工自己接下一个 issue", "商业产品"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad 与 Conductor 对比",
      text: [
        "两者都能在并行的 worktree 里跑多个 agent。Claude Squad 是免费开源的终端应用；Conductor 是一款打磨精致的 Mac 应用，带审查流程和云端 workspace。Conductor 已[加入 Meta](/blog/conductor-alternatives)：停止新用户注册，云端服务于 2026 年 11 月 20 日关停，本地应用也只更新到 2027 年初。如果今天要在两者之间选，仍在持续开发的是 Claude Squad。",
      ],
    },
    {
      kind: "text",
      title: "哪个 Claude Squad 替代方案适合你",
      points: [
        "你只用 Claude Code：先试试它自带的 `--worktree` 参数和桌面应用的并行会话，再考虑要不要加工具。",
        "你想在 Mac 上用一个桌面应用管理多个 agent：选 Paradev。",
        "你想把会话看成一张张卡片：选 Kanban Code，或者读一读 [Claude Code 看板](/blog/claude-code-kanban)。",
        "你用的是 Windows：Claude Code 的 CLI 和桌面应用都原生支持；Claude Squad 则需要 WSL。",
        "你希望 agent 不用你逐个启动就能持续干活，还要一块团队共享的看板：选 Crewmark（见下文）。另见[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "从你亲自指挥的小队，到自己干活的团队",
      text: [
        "Claude Squad 让并行跑 agent 变得很容易，但每一个都要等你来启动。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名 AI 员工，有岗位、有目标、有工作时间。它按心跳醒来，从共享看板上接下一个 issue，在自己的检出目录里干活，需要你拍板时给你发消息，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "连接你的仓库和 agent",
          text: "在项目里运行设置命令。多名员工可以共用一个仓库，各自在独立的检出目录里工作。",
        },
        {
          title: "给每名员工分配岗位",
          text: "工程师、审查员、SEO 写手，各有各的目标。见 [AI 员工岗位](/ai-employees)。",
        },
        {
          title: "把看板填满，然后审查",
          text: "工作时间内，每名员工每 15、30 或 60 分钟接下一个 issue；你负责审 pull request、回答问题。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "并行运行多个编程 agent" },
  mid: {
    title: "受够了每个 agent 都得亲手启动？",
    text: "Crewmark 的 AI 员工按心跳自己接下一个 issue，用的就是你已经在付费的 Claude Code 或 Codex 订阅。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Squad 常见问题",
    items: [
      {
        q: "Claude Squad 是什么？",
        a: "smtg-ai 推出的开源终端应用（AGPL-3.0），可以同时运行多个编程 agent，每个都在独立的 tmux 会话和 git worktree 里，推送前你可以逐个审查改动。",
      },
      {
        q: "Claude Squad 支持 Codex 吗？",
        a: "支持。设置好 OpenAI API key 后，用 `cs -p \"codex\"` 运行即可。它也能启动 Gemini 和 Aider，默认则是 Claude Code。",
      },
      {
        q: "Claude Squad 能在 Windows 上用吗？",
        a: "README 没提 Windows，而且它依赖 tmux，所以在 Windows 上得放到 WSL 里跑。Claude Code 自带的 `--worktree` 参数和桌面应用都原生支持 Windows。",
      },
      {
        q: "Claude Squad 还在维护吗？",
        a: "在。最新版本是 2026 年 8 月 20 日发布的 v1.0.20。",
      },
      {
        q: "Claude Squad 和 Conductor 选哪个？",
        a: "Conductor 正在加入 Meta、逐步停服，云端服务于 2026 年 11 月 20 日结束。Claude Squad 开源，而且仍在开发。",
      },
      {
        q: "Claude Code 已经有 worktree 了，还需要 Claude Squad 吗？",
        a: "如果只是为了隔离，不需要：`claude --worktree` 就能给每个会话一个独立分支。但如果你想在一个终端视图里管理多个会话，或者要用 Claude Code 之外的 agent，Claude Squad 仍然有用。",
      },
    ],
  },
  cta: {
    title: "别只组一支小队，组建一支团队。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 Claude Squad 的 README 和版本发布记录，以及各替代方案的官网或仓库查证。",
  disclaimer:
    "Crewmark 是独立产品，与 smtg-ai、Claude Squad、Paradev、Kanban Code、Conductor、Anthropic 或 OpenAI 无关，也未获其背书。产品名称均为其所有者的商标。",
};
