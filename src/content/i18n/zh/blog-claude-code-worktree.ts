import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# 两个相互隔离的会话，各开一个终端
claude --worktree feature-auth
claude --worktree fix-flaky-test

# 从 1234 号 pull request 创建 worktree（# 要加引号）
claude --worktree "#1234"

# 不让 worktree 出现在 git status 里
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code worktree 指南：--worktree、工作流、清理与设置 | Crewmark",
    description:
      "git worktree 在 Claude Code 里如何工作：claude --worktree 用法、worktree 放在哪里、从哪个分支创建、用 .worktreeinclude 带上 .env 文件、清理、subagent 隔离以及相关设置。",
  },
  breadcrumb: "Claude Code worktree 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code worktree：并行运行多个会话，互不冲突",
    lead: "Claude Code worktree 是一个独立的 git 工作目录，有自己的文件和分支，但与你的仓库共享历史。用 `claude --worktree <name>` 启动会话，Claude 就会在 worktree 里改代码，而不是在你的检出目录里改，这样两三个会话可以同时工作，互不碰对方的文件。本文讲解这个参数、worktree 放在哪里、从哪个分支创建、怎样把 `.env` 文件带进去、清理、subagent，以及相关设置。",
    cta: "申请抢先体验",
    secondary: "跳到工作流",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code worktree 是什么",
      text: [
        "git 支持 worktree 已经很多年了：`git worktree add` 会把一个分支检出到第二个目录，背后用的是同一份 `.git` 数据。Claude Code 在此基础上更进一步：加上 `--worktree`（或 `-w`），它会替你创建 worktree、在里面启动会话、拦截会落到主检出目录的修改，并在你退出时提示清理。",
        "worktree 只隔离文件，别的都不管。想在一个对话里把任务分给多个 worker，用 subagent；各种方式的对比见[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
      points: [
        "默认位置：仓库根目录下的 `.claude/worktrees/<name>/`。",
        "默认分支名：`worktree-<name>`。不写名字的话，Claude Code 会自动取一个，比如 `bright-running-fox`。",
        "与检出目录共享的：`.git` 目录（所以提交和分支在哪里都看得到）、项目范围的插件，以及“不再询问”的权限批准。",
        "不共享的：所有被 gitignore 的内容，比如 `.env`、`node_modules` 和构建产物。worktree 是一份全新的检出。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "worktree 工作流，一步一步来",
      steps: [
        {
          title: "忽略 worktree 文件夹",
          text: "把 `.claude/worktrees/` 加进 `.gitignore`，这样 worktree 里的文件不会在主检出目录里显示为未跟踪。如果你从没在这个仓库里运行过 Claude，先运行一次 `claude`，接受工作区信任提示；在此之前，交互式的 `--worktree` 会直接退出。",
        },
        {
          title: "每个任务开一个会话",
          text: "每个任务在一个终端里运行 `claude --worktree <name>`。用已有的名字再次运行，会重新打开那个 worktree，而不是新建一个。你也可以在会话中途让 Claude “work in a worktree”，它会用 `EnterWorktree` 工具把自己移进一个 worktree。",
          code: start,
        },
        {
          title: "把未跟踪的文件带过去",
          text: "在仓库根目录建一个 `.worktreeinclude` 文件，用 `.gitignore` 语法列出项目需要的被忽略文件，比如 `.env` 和 `.env.local`。Claude Code 会把匹配的文件复制到它创建的每个 worktree 里，包括 subagent 和桌面应用的 worktree。然后在 worktree 里安装依赖，或者在设置里配置好：下面的例子从你当前的工作创建分支，复用同一份 `node_modules`，并且只检出 web 包。",
          code: settings,
        },
        {
          title: "让会话去干活",
          text: "会话处于隔离状态时，Claude Code 会拒绝指向主检出目录的文件编辑、工作目录在主检出目录的命令，以及被重定向到主检出目录的 git 命令（`git -C`、`--git-dir`、`GIT_DIR`）。它不会追踪 `cp` 这类普通 shell 命令写了什么，所以权限和沙箱依然重要。",
        },
        {
          title: "像普通分支一样评审和合并",
          text: "每个 worktree 都是一个普通分支。在里面提交、推送、开 pull request，像评审队友的代码一样评审它。所有 worktree 共享 `.git`，所以主检出目录里马上就能看到这个分支。",
        },
        {
          title: "退出并清理",
          text: "退出时，Claude Code 会检查 worktree。未命名会话的 worktree 如果是干净的，会连同分支自动删除；命名会话则会先询问。如果有改动、未跟踪的文件或新提交，它会问你保留还是删除这个 worktree，并打印一条 `claude --worktree <name> --resume` 命令，方便以后回来继续。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Claude Code 的 worktree 设置",
      text: [
        "以下设置都写在设置文件（`~/.claude/settings.json`、`.claude/settings.json` 或 `.claude/settings.local.json`）的 `worktree` 下。",
      ],
      headers: ["设置", "作用", "默认值"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` 从远程默认分支（`origin/main`）创建分支；`\"head\"` 从本地 HEAD 创建，包括尚未推送的提交", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "从主检出目录用符号链接引入 `node_modules` 等目录，而不是复制一份", "无"],
        ["`worktree.sparsePaths`", "用 sparse-checkout 只检出列出的目录（以及根目录下的文件）；记得包含 `.claude`", "整个目录树"],
        ["`worktree.bgIsolation`", "`\"worktree\"` 让后台会话只能在 worktree 里编辑；`\"none\"` 允许它们编辑工作副本", "`\"worktree\"`"],
        ["worktree 位置（桌面应用）", "在 Settings > Code 里为本地会话设置自定义文件夹；SSH 连接有各自的设置", "`.claude/worktrees/`"],
        ["`.worktreeinclude`（文件，不是设置项）", "把匹配的被忽略文件复制到每个新 worktree", "无"],
      ],
    },
    {
      kind: "table",
      title: "Claude Code worktree、切换分支与 git worktree 对比",
      headers: ["", "切换分支", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["磁盘上各有一份文件", "否：一个目录，同一时间只有一个分支", "是", "是"],
        ["同时运行多个会话", "否：会相互覆盖", "是", "是"],
        ["放在哪里", "你的检出目录", "任意你选的位置", "`.claude/worktrees/<name>/`，或 hook 指定的路径"],
        ["从哪里开始", "你切换到的分支", "任意已有或新建的分支", "`origin/<default>`、你的 HEAD 或某个 PR"],
        ["复制 `.env`", "不需要", "否", "是，通过 `.worktreeinclude`"],
        ["拦截外部编辑", "否", "否", "是"],
        ["清理", "无", "`git worktree remove`", "退出时提示"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "用 git worktree 手动操作",
      text: [
        "想用某个已有的分支，或者把文件夹放在仓库之外，就用原生 git；`worktree.baseRef` 不能指定分支名。Claude Code 依然会和这些 worktree 共享插件和权限批准。",
      ],
      steps: [
        {
          title: "创建 worktree、启动 Claude，用完删除",
          text: "把 `feature-a` 换成新分支名；如果要检出已有的分支，去掉 `-b` 即可。",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "在 worktree 里运行 subagent 和后台会话",
      points: [
        "让 Claude “use worktrees for your agents”，或者在 `.claude/agents/` 里自定义 subagent 的 frontmatter 中加上 `isolation: worktree`，每个 subagent 就会在各自的临时 worktree 里编辑。",
        "没有改动的 subagent worktree 会在 subagent 结束时删除。有改动的会一直保留，直到 `cleanupPeriodDays` 之后，定期清理能在不丢失工作的前提下把它删掉。",
        "后台会话（`claude --bg`）默认只能在 worktree 里编辑；可以用 `claude --bg --worktree` 启动，或者把 `worktree.bgIsolation` 设为 `\"none\"`。",
        "在桌面应用里，开始会话前先打开输入框下方的 Worktree 开关。",
      ],
    },
    {
      kind: "text",
      title: "worktree 清理与常见问题",
      points: [
        "`claude -p --worktree` 运行时没有退出提示，所以会留下 worktree。用 `git worktree remove` 删除；如果 git 提示已锁定，先运行 `git worktree unlock`。",
        "`Can only use --worktree in a git repository`：运行 `git init` 并做第一次提交，或者为 SVN、Perforce 或 Mercurial 配置 `WorktreeCreate` hook。",
        "如果 Git LFS 是用 `--local` 安装的，LFS 文件会显示为指针文件：在 worktree 里运行 `git lfs pull`。",
        "当 `.claude` 或 `.claude/worktrees` 是符号链接时，Claude Code 不会创建 worktree。",
        "hook 里的 `${CLAUDE_PROJECT_DIR}` 始终指向主检出目录；要拿到 worktree 路径，读取 hook 输入里的 `cwd` 字段。",
        "基准为 `\"fresh\"` 且没有自己的提交、或者 PR 已经合并的 worktree，按名字重新打开时会重置到默认分支。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "worktree 让会话互不干扰，Crewmark 让它们一直有活干。",
      text: [
        "worktree 解决了冲突问题，但每个会话仍然要等你输入才会动。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "每个 worktree 一名员工",
          text: "给每名员工分配各自的 worktree 和岗位，比如同一个仓库里的一名程序员和一名评审，就像[多个 Claude Code agent](/blog/multiple-claude-code-agents) 里那样。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，每名员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "分配 issue，评审分支",
          text: "把工作放到看板上，每名员工接手一个 issue，在自己的分支上提交，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 git worktree 里并行运行 Claude Code 会话" },
  mid: {
    title: "三个 worktree，三个会话，谁来告诉它们下一步做什么？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒每个 Claude Code 会话，用的就是你已经在付费的套餐。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude Code worktree 常见问题",
    items: [
      {
        q: "Claude Code 里的 worktree 是什么？",
        a: "一个独立的 git 工作目录，有自己的文件和分支，与你的仓库共享历史。`claude --worktree <name>` 会创建一个 worktree 并在里面运行会话，这样并行的会话不会编辑同一批文件。",
      },
      {
        q: "Claude Code 把 worktree 放在哪里？",
        a: "放在仓库根目录下的 `.claude/worktrees/<name>/`，分支名为 `worktree-<name>`。桌面应用可以在 Settings 里另选文件夹，`WorktreeCreate` hook 则可以把它们放到任何地方。",
      },
      {
        q: "Claude Code worktree 从哪个分支创建？",
        a: "默认从远程默认分支创建，通常是 `origin/main`。把 `worktree.baseRef` 设为 `\"head\"` 可以从本地 HEAD 创建，传入 `\"#1234\"` 可以从某个 pull request 开始；其他分支则用 `git worktree add` 创建 worktree。",
      },
      {
        q: "为什么 worktree 里没有我的 .env 文件？",
        a: "worktree 是一份全新的检出，被 gitignore 的文件不在里面。在仓库根目录的 `.worktreeinclude` 文件里列出它们，Claude Code 就会把它们复制到每个新 worktree。",
      },
      {
        q: "怎么清理 Claude Code 的 worktree？",
        a: "退出会话时会提示删除它的 worktree，未命名且干净的会自动删除。`-p` 运行留下的 worktree 不会自动清理：用 `git worktree list` 列出，再用 `git worktree remove` 删除。",
      },
      {
        q: "worktree 和分支有什么区别？",
        a: "分支是一串提交；worktree 是检出某个分支的目录。切换分支会改变你唯一那个目录里的文件，而 worktree 让每个分支都有自己的目录，所以多个会话可以同时运行。",
      },
      {
        q: "subagent 能用 worktree 吗？",
        a: "能。让 Claude 为它的 agent 使用 worktree，或者在自定义 subagent 的 frontmatter 里加上 `isolation: worktree`。每个 subagent 都会得到一个临时 worktree，如果没有改动就会被删除。",
      },
    ],
  },
  cta: {
    title: "给每个 worktree 配一名知道下一步做什么的员工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（worktrees、设置、CLI 参考和桌面应用）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
