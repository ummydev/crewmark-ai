import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# 找出 Conductor 为这个仓库创建的 worktree
git worktree list

# 在每个想保留的 workspace 里：提交并推送它的分支
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor 加入 Meta：停服时间表与最佳 Conductor 替代方案",
    description:
      "Conductor 这款并行运行 Claude Code 和 Codex agent 的 Mac 应用即将加入 Meta。停服时间表、如何保存你的 workspace，以及适用于 Mac、Windows 和 Linux 的 Conductor 替代方案。",
  },
  breadcrumb: "Conductor 替代方案",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · AI 编程 agent",
    title: "Conductor 加入 Meta：接下来会怎样，你的 agent 该搬去哪里",
    lead: "Conductor 是一款在并行 workspace 里运行 Claude Code、Codex、Cursor 和 OpenCode agent 的 Mac 应用，它于 2026 年 11 月 4 日宣布加入 Meta。新用户注册已关闭，Conductor Cloud 将于 11 月 13 日变为只读、11 月 20 日关停，本地应用的更新只持续到 2027 年初。本文介绍关键日期、如何保住你的工作，以及能做同样事情的替代方案。",
    cta: "开始使用",
    secondary: "保存你的 workspace",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Conductor 是什么，又有哪些变化",
      text: [
        "Conductor 给每个编程任务一个独立的 workspace：一个 git worktree，有自己的分支、文件、终端、diff 和审查流程，因此多个 agent 可以同时在同一个仓库里工作。它只支持 macOS，可搭配 Claude Code、Codex、Cursor 和 OpenCode 使用，后来又推出了 Conductor Cloud，让 workspace 在离开你的 Mac 后也能继续运行。",
        "创始人 Charlie Holtz 宣布团队将加入 Meta，去打造“下一代交互界面”，并承诺明年初推出新东西。Meta 向 TechCrunch 证实了这笔交易，但没有披露任何条款。",
      ],
    },
    {
      kind: "table",
      title: "Conductor 停服时间表",
      headers: ["日期", "会发生什么"],
      rows: [
        ["2026 年 11 月 4 日", "停止新用户注册和下载。免费用户无法再升级；Pro 用户可免费继续使用 Pro 功能。有效订阅用户将获得退款。"],
        ["2026 年 11 月 13 日", "云端 workspace 变为只读：你可以查看旧对话、导出数据，但不能再发消息。"],
        ["2026 年 11 月 20 日", "Conductor Cloud 关停，开始删除云端用户数据。"],
        ["至 2027 年初", "本地 Mac 应用继续获得新模型和关键 bug 修复，之后逐步停止；关停时所有用户数据都会被删除。"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在截止日期前保住你的工作",
      steps: [
        {
          title: "11 月 13 日前把云端 workspace 转到你的 Mac 上",
          text: "在 Conductor 里右键点击每个云端 workspace，选择 Transfer to local（转到本地）。workspace 及其对话会转移到你的电脑上。",
        },
        {
          title: "11 月 20 日前导出你的数据",
          text: "在 Conductor 里打开 Settings → Account → Export data（设置 → 账户 → 导出数据）下载全部内容，包括你可能想留作笔记或提示词的对话。",
        },
        {
          title: "推送每一个你在意的分支",
          text: "本地 workspace 就是普通的 git worktree，通常位于 `~/conductor/workspaces/<repo>/<workspace>`，与你的仓库共享历史。提交并推送它们的分支，这样工作成果就不会随应用一起消失。",
          code: rescue,
        },
        {
          title: "迁移你的设置脚本",
          text: "Conductor 把每个项目的 setup、run 和 archive 脚本保存在 `.conductor/settings.toml` 或 `.conductor/settings.local.toml` 里。把这些命令复制到你的 README 或下一个工具的设置里；如果你要改用 Claude Code worktree，再把 `.env` 等文件列进 `.worktreeinclude`。",
        },
        {
          title: "选一个替代品，先拿一个任务试试",
          text: "对比下面的选项，然后在 Conductor Pro 权限结束前，用新工具跑一个真实任务。",
        },
      ],
      source: { label: "来源：Conductor 的公告", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Conductor 替代方案对比",
      headers: ["", "Conductor", "单独使用 Claude Code", "Codex 应用", "Crewmark"],
      rows: [
        ["是什么", "在 worktree 里并行运行 agent 的 Mac 应用", "`claude --worktree`、桌面应用里的并行会话、后台 agent", "OpenAI 的桌面应用，内置 worktree 和云端任务", "AI 员工：有岗位、目标、工作时间和心跳的 agent 会话"],
        ["支持的 agent", "Claude Code、Codex、Cursor、OpenCode", "Claude Code", "Codex", "Claude Code、Codex、DeepSeek Harness、OpenCode"],
        ["平台", "macOS", "macOS、Windows、Linux", "桌面应用和网页版", "macOS、Windows、Linux"],
        ["隔离方式", "每个 workspace 一个 git worktree", "每个会话或 subagent 一个 git worktree", "worktree", "每名员工有自己的会话和检出目录"],
        ["谁来启动下一个任务", "你", "你（或定时任务）", "你（或定时任务）", "心跳：每名员工醒来后自己接下一个 issue"],
        ["任务看板", "workspace 列表", "无", "无", "有，包括 issue、评论和发给你的消息"],
        ["状态", "云端 11 月 20 日结束；本地版到 2027 年初", "持续维护", "持续维护", "持续维护"],
      ],
    },
    {
      kind: "text",
      title: "哪个 Conductor 替代方案适合你",
      points: [
        "你主要用 Conductor 搭配 Claude Code：Claude Code 现在自己就能完成其中的核心功能。`claude --worktree <name>` 为每个会话提供独立的 worktree 和分支，`.worktreeinclude` 会复制你的 `.env`，桌面应用也能通过 Worktree 开关运行并行会话。见 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
        "你主要用 Codex：Codex 桌面应用内置了 worktree 和云端任务；两个 agent 的对比见 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        "你需要 Windows 或 Linux：Conductor 从未支持这两个平台；Claude Code 的 CLI 和 Crewmark 都能在三个平台上运行。",
        "你混用多种 agent，或希望它们在你不在时也继续工作：这正是 Crewmark 的用途（见下文）。想手动运行多个 agent，见[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Conductor 让你的 agent 并排运行，Crewmark 给它们一份工作。",
      text: [
        "Conductor 让并行 agent 易于启动和审查，但每个 workspace 仍要等你输入下一条提示词。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接下一个 issue，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "带上你的仓库和你的 agent",
          text: "在每个项目里运行设置命令。多名员工可以共用一个仓库，各自在自己的检出目录里工作，就像你的 Conductor workspace 一样。",
        },
        {
          title: "给每名员工一个岗位和一个目标",
          text: "程序员、审查员、SEO 写手：每名员工都有一个写成数字的目标和自己的工作时间。阅读[什么是 AI 员工](/ai-employees)。",
        },
        {
          title: "让心跳启动工作",
          text: "员工每 15、30 或 60 分钟在同一个对话里醒来一次，接下一个 issue，需要你拍板时给你发消息；见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Conductor 关停前保住你的工作" },
  mid: {
    title: "要从 Conductor 迁走？别只是替换，顺便升级。",
    text: "Crewmark 把 Claude Code、Codex 和 OpenCode 变成 AI 员工，它们按心跳醒来，自己接下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "Conductor 停服常见问题",
    items: [
      {
        q: "Conductor 要关停了吗？",
        a: "部分关停。Conductor 将加入 Meta。Conductor Cloud 于 2026 年 11 月 13 日变为只读，11 月 20 日关停。本地 Mac 应用会继续获得新模型和关键修复，直到 2027 年初，之后逐步停止。",
      },
      {
        q: "Meta 收购了 Conductor 吗？",
        a: "是的。Conductor 于 2026 年 11 月 4 日宣布加入 Meta，Meta 也向 TechCrunch 证实了这笔收购。价格和条款均未披露。",
      },
      {
        q: "现在还能下载或注册 Conductor 吗？",
        a: "不能。新用户注册和下载已于 2026 年 11 月 4 日停止，免费用户也无法再升级到 Pro。",
      },
      {
        q: "我的数据和订阅会怎样？",
        a: "云端用户数据从 11 月 20 日开始删除，应用关停时所有用户数据都会被删除。请在 Settings → Account → Export data（设置 → 账户 → 导出数据）里导出。有效订阅用户将获得退款，Pro 用户在此之前可免费继续使用 Pro 功能。",
      },
      {
        q: "Claude Code 用户最好的 Conductor 替代方案是什么？",
        a: "Claude Code 自带的 `--worktree` 参数和桌面应用的并行会话已经能满足隔离的并行工作。想让会话自己接活，就把它们作为 Crewmark 员工运行。",
      },
      {
        q: "有适用于 Windows 或 Linux 的 Conductor 替代方案吗？",
        a: "Conductor 本身只支持 Mac。带 `--worktree` 的 Claude Code CLI、普通的 `git worktree` 以及 Crewmark 都能在 macOS、Windows 和 Linux 上运行。",
      },
      {
        q: "我的 Conductor workspace 还能继续用吗？",
        a: "本地 workspace 就是普通的 git worktree，用的是普通分支，所以无论应用怎样，代码都留在你的仓库里。把想保留的分支提交并推送即可。",
      },
    ],
  },
  cta: {
    title: "你的 agent 需要一个新家，也顺便给它们一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Conductor 的公告、更新日志和文档，以及 TechCrunch 的报道查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Conductor、Meta、Anthropic 或 OpenAI 无关，也未获其背书。Conductor 是其所有者的商标，Claude 和 Claude Code 是 Anthropic 的商标，Codex 是 OpenAI 的商标。",
};
