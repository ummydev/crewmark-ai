import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Vibe Kanban 停服后的替代方案（2026 对比） | Crewmark AI",
    description:
      "Vibe Kanban 背后的公司已关闭，云端看板随之下线。哪些功能还能用、如何保住你的 issue，以及用看板驱动 Claude Code 和 Codex 的替代方案：Paradev、Nimbalyst、Claude Squad、Kanban Code 和 Crewmark。",
  },
  breadcrumb: "Vibe Kanban 替代方案",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI 编程 agent",
    title: "Vibe Kanban 替代方案：现在去哪儿用看板指挥你的 agent",
    lead: "Vibe Kanban 让你把编程 agent 的活拆成看板上的 issue，每个 issue 开一个 workspace，审完 diff 直接提 pull request，支持 Claude Code、Codex 等十种 agent。2026 年 4 月 10 日，它背后的公司 bloop 宣布关闭。开源应用仍能在本地运行，但托管的 issue、评论、项目和组织都已下线，最后一个版本发布于 2026 年 4 月 24 日。本文讲清楚哪些还能用、怎么保住你的工作，以及有哪些替代方案。",
    cta: "开始使用",
    secondary: "对比替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Vibe Kanban 发生了什么",
      text: [
        "bloop 表示，大多数用户都在用免费版，公司也没找到自己愿意走下去的商业模式。宣布之后，远程服务又保留了 30 天，随后 Vibe Kanban 改为完全本地的架构，项目页面现在只通向数据导出。过去 30 天内付过款的账单已全额退款。",
      ],
      points: [
        "还能用：`npx vibe-kanban` 照样能启动本地应用，本地 workspace 也能正常工作。代码继续以 Apache 2.0 协议开源，由社区维护。",
        "已经没了：团队共享的托管看板 issue、评论、项目和组织。",
        "正在停滞：自 2026 年 4 月 24 日的 v0.1.44 之后再无新版本，新出的 agent 版本也就跟不上了。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何保住你的工作",
      steps: [
        {
          title: "导出你的数据",
          text: "打开最新版应用，使用其中的数据导出功能。项目页面现在会直接跳转过去。",
        },
        {
          title: "推送每一个你在意的分支",
          text: "每个 workspace 都是一个 git worktree，各有自己的分支。把想保留的提交并推送，让代码留在你自己的仓库里，而不是困在应用里。",
          code: keep,
        },
        {
          title: "把未完成的 issue 挪到大家都看得到的地方",
          text: "如果团队用的是托管看板，趁大家还记得每个 issue 是干什么的，赶紧在 GitHub Issues 或你选定工具的看板里重建一遍。",
        },
        {
          title: "先用新工具跑一个真实任务",
          text: "对比下面的选项，挑一个 issue 从头跑到 pull request，确认没问题再整体搬家。",
        },
      ],
      source: { label: "来源：Vibe Kanban 的停服公告", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Vibe Kanban 替代方案对比",
      text: ["信息来自各项目官网或 GitHub 仓库，截至 2026 年 11 月 7 日。"],
      headers: ["", "是什么", "支持的 agent", "平台", "看板", "许可证"],
      rows: [
        ["Vibe Kanban（社区版）", "本地应用：看板 issue、每个 issue 一个 workspace、diff 审查、PR", "Claude Code、Codex、Gemini CLI、Copilot、Amp、Cursor、OpenCode 等", "用 `npx` 运行；远程可用 Docker", "有，但现在只能本地用", "Apache 2.0"],
        ["Paradev（原 Superset）", "并行运行多个 agent 的桌面工作台，每个 agent 一个 worktree；支持自动化和云端沙箱", "Claude、Codex、Cursor Agent、OpenCode 及任意 CLI agent", "macOS；Linux 处于实验阶段；暂不支持 Windows", "未提及看板", "MIT"],
        ["Nimbalyst", "面向 agent 的可视化工作区，集任务、文档、wiki、图表和代码于一体", "Claude Code、Codex", "macOS、Windows、Linux", "任务与文档、代码放在一起", "开源；个人免费"],
        ["Claude Squad", "终端应用：每个 agent 一个 tmux 会话加一个 git worktree", "Claude Code、Codex、Gemini、Aider", "需要 tmux 和 gh", "无（TUI 列表）", "AGPL-3.0"],
        ["Kanban Code", "面向 Claude Code 会话的看板，每张卡片一个 worktree", "Claude Code", "macOS 26 应用、Windows（Tauri）", "Backlog、In Progress、Waiting、In Review、Done", "Apache 2.0"],
        ["Crewmark", "AI 员工：有岗位、目标、工作时间的 agent 会话，靠心跳自己接下一个 issue", "Claude Code、Codex、DeepSeek Harness、OpenCode", "网页版看板；守护进程支持 macOS、Windows、Linux", "有，托管在云端，与团队共享", "商业产品"],
      ],
    },
    {
      kind: "text",
      title: "哪个 Vibe Kanban 替代方案适合你",
      points: [
        "你就想要原来那个应用：继续在本地跑社区版，同时关注仓库，看有没有人接手维护的 fork。",
        "你主要用它并行跑 agent、审 diff：Paradev 是目前还在维护的桌面应用里最接近的，支持 Mac 和 Linux。Claude Code 自带的 `--worktree` 参数也能实现隔离的并行会话，见 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
        "你离不开终端：Claude Squad 给每个 agent 一个 tmux 会话和一个 worktree。",
        "你要的就是看板本身，而且只用 Claude Code：Kanban Code 会随着会话启动、等待、提 PR，把卡片在各列之间自动挪动。",
        "你和团队一起用托管看板，或者希望 agent 不等你发话就自己接 issue：这就是 Crewmark（见下文）。Conductor 本来也是个选择，但它已经[加入 Meta、逐步停服](/blog/conductor-alternatives)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Vibe Kanban 的每张卡都要等你来启动，Crewmark 不用。",
      text: [
        "在 Vibe Kanban 里，你写好 issue，再手动启动 agent。Crewmark 保留了看板，托管在云端、团队共享，并把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名 AI 员工：工作时间内按心跳醒来，自己去接下一个 issue，用的就是你已经在付费的订阅。",
      ],
      steps: [
        {
          title: "带上你的仓库和你的 agent",
          text: "在项目里运行设置命令。每名员工都在自己的会话和检出目录里工作，和 Vibe Kanban 的 workspace 很像。",
        },
        {
          title: "重建你的看板",
          text: "把未完成的 issue 加进来，分配给某名员工，或者先不分配，留给有空的人去接。",
        },
        {
          title: "让心跳启动工作",
          text: "员工每 15、30 或 60 分钟接下一个 issue，边做边写评论，需要你拍板时给你发消息。了解[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Vibe Kanban 停服后保住你的工作" },
  mid: {
    title: "托管看板没了？看板留着，再招几名员工。",
    text: "Crewmark 给团队一块共享看板，Claude Code 和 Codex 员工按心跳自己接下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "Vibe Kanban 停服常见问题",
    items: [
      {
        q: "Vibe Kanban 要关停了吗？",
        a: "关的是公司。bloop 于 2026 年 4 月 10 日宣布关闭。开源应用作为社区维护项目继续存在，可在本地运行；托管的 issue、评论、项目和组织在 30 天后被移除。",
      },
      {
        q: "Vibe Kanban 现在还能用吗？",
        a: "本地能用：`npx vibe-kanban` 仍可启动，本地 workspace 也正常工作。最新版本是 2026 年 4 月 24 日发布的 v0.1.44，所以较新的 agent 版本可能不受支持。",
      },
      {
        q: "怎么导出 Vibe Kanban 的数据？",
        a: "用最新版应用里的数据导出功能，项目页面现在会直接跳转过去。另外，把各个 workspace 的分支也推送到你的 git 远程仓库。",
      },
      {
        q: "最好的 Vibe Kanban 替代方案是什么？",
        a: "要并行 agent 加 diff 审查，选 Paradev（原 Superset）；要 Claude Code 会话的看板，选 Kanban Code；习惯终端工作流，选 Claude Squad；要一块团队共享、agent 自己接 issue 的看板，选 Crewmark。",
      },
      {
        q: "有开源的 Vibe Kanban 替代方案吗？",
        a: "有：Paradev（MIT）、Claude Squad（AGPL-3.0）和 Kanban Code（Apache 2.0）都是开源的，Vibe Kanban 本身也仍以 Apache 2.0 协议开源。",
      },
      {
        q: "有支持 Windows 的 Vibe Kanban 替代方案吗？",
        a: "Nimbalyst 提供 Windows 版下载，Kanban Code 也有 Windows 应用。Crewmark 的看板在浏览器里运行，守护进程支持 Windows。Paradev 暂不支持 Windows。",
      },
    ],
  },
  cta: {
    title: "你的 agent 需要一块新看板，顺便也给它们一份工作。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 Vibe Kanban 的 README、版本发布记录和停服公告，以及各替代方案的官网或仓库查证。",
  disclaimer:
    "Crewmark 是独立产品，与 bloop、Vibe Kanban、Paradev、Nimbalyst、Claude Squad、Kanban Code、Anthropic 或 OpenAI 无关，也未获其背书。产品名称均为其所有者的商标。",
};
