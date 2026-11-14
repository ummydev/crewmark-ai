import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: 总结未提交的改动，并标出有风险的地方。当用户问改了什么、想要一条 commit message，或要求评审 diff 时使用。
---

## 当前改动

!\`git diff HEAD\`

## 指令

用两三个要点总结上面的改动，然后列出风险，比如缺少错误处理、
硬编码的值，或需要更新的测试。`;

const reference = `---
description: 这个代码库的 API 设计约定。编写或评审 HTTP 接口时使用。
paths: ["src/api/**"]
---

编写 API 接口时：
- 使用 RESTful 命名，资源名用复数
- 错误以 { error: { code, message } } 的形式返回
- 用 src/api/schemas/ 里的 schema 校验请求体`;

const layout = `release/
├── SKILL.md          # 步骤，以及什么时候读其他文件
├── checklist.md      # 只有 SKILL.md 让 Claude 去读时才加载
└── scripts/
    └── bump.sh       # 直接运行，不读进上下文`;

const fork = `---
description: 审计依赖中的已知漏洞和落后的大版本
context: fork
agent: Explore
disable-model-invocation: true
---

运行包管理器的 audit，列出每个高危或严重问题及其修复版本，
并报告哪些依赖落后了大版本。不要修改任何文件。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Skills：创建方法、示例与最佳实践 | Crewmark AI",
    description:
      "Claude Code skill 是什么、如何加载、怎样用 SKILL.md 创建 skill，附示例、辅助文件、在 subagent 中运行 skill、从插件安装 skill，以及最佳实践。",
  },
  breadcrumb: "Claude Code skill 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code skill：如何创建，附示例与最佳实践",
    lead: "Claude Code 的 skill 就是一个包含 `SKILL.md` 文件的文件夹：里面写着什么时候该用它，以及要遵循的指令。在需要某个 skill 之前，Claude 只看得到它的描述，用到时才加载全部内容，所以你可以把很长的流程和参考资料随时备着，又不用在每条消息上为它们付费。本文介绍 skill 如何加载、怎样写出第一个 skill、示例、辅助文件、subagent skill、从插件安装 skill，以及怎样让 Claude 真正用上它们。",
    cta: "开始使用",
    secondary: "创建你的第一个 skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code skill 是什么",
      text: [
        "如果你总是在对话里反复粘贴同样的指令、检查清单或多步骤流程，或者 CLAUDE.md 里某一部分已经从一条事实膨胀成了一套流程，就该把它做成 skill。skill 遵循开放的 Agent Skills 标准（agentskills.io），其他 AI 工具也能读取；Claude Code 在此基础上增加了调用控制、以 subagent 运行，以及在提示词里嵌入实时 shell 输出等功能。",
      ],
      points: [
        "两种运行方式：当你的请求和它的 `description` 相符时由 Claude 加载，或者你输入 `/skill-name`。",
        "不用就几乎不花钱：上下文里只放名称和描述，skill 运行时才加载正文。设置为只能手动运行的 skill 连描述都不会列出。",
        "自定义斜杠命令现在就是 skill：`.claude/commands/<name>.md` 仍然可用，但 skill 文件夹还能放辅助文件。参见 [Claude Code 斜杠命令](/blog/claude-code-slash-commands)。",
        "Claude Code 也自带捆绑 skill，比如 `/simplify`、`/loop`、`/batch` 和 `/debug`。",
      ],
    },
    {
      kind: "table",
      title: "skill、CLAUDE.md、subagent、插件与 MCP 对比",
      headers: ["", "是什么", "何时加载", "适合用来"],
      rows: [
        ["CLAUDE.md", "项目指令", "每个会话，全部加载", "Claude 始终需要知道的事实和约定；参见 [CLAUDE.md 指南](/blog/claude-md)"],
        ["Skill", "一个 `SKILL.md` 文件夹", "描述始终加载；正文用到时加载", "流程、检查清单、参考资料、可复用的提示词"],
        ["Subagent", "拥有独立上下文的单独工作者", "Claude 委派任务时", "细节不该塞满你对话的旁支任务"],
        ["插件", "由 skill、agent、hook 和 MCP 服务器组成的包", "安装并启用后", "和团队共享 skill，或安装别人写的 skill"],
        ["MCP 服务器", "与外部工具或数据源的连接", "连接后", "给 Claude 新工具，比如数据库或 issue 跟踪系统"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何创建 Claude Code skill",
      steps: [
        {
          title: "选好存放位置",
          text: "`~/.claude/skills/<name>/` 供你自己在所有项目里使用；仓库里的 `.claude/skills/<name>/` 提交后，所有在这个仓库工作的人都能用。文件夹名就是命令名，所以 `summarize-changes` 对应 `/summarize-changes`。",
        },
        {
          title: "编写 SKILL.md：先写描述，再写指令",
          text: "frontmatter 放在文件最顶部的两行 `---` 之间。只有 `description` 是推荐填写的：把使用场景和大家实际会说的话放在最前面。下面用 Markdown 写指令。以 `` !`command` `` 开头的一行会先运行这条命令，再把输出贴进去，这样 skill 就能基于你的真实状态工作。",
          code: first,
        },
        {
          title: "两种方式都测一测",
          text: "在一个有未提交改动的 git 项目里启动 `claude`。先问“我改了什么？”，看看 Claude 会不会自己用上这个 skill，再输入 `/summarize-changes` 直接运行它。会话中新增的 skill 会自动加载；如果某个没出现，运行 `/reload-skills`。",
        },
        {
          title: "决定谁可以运行它",
          text: "部署、发消息这类有副作用的操作，加上 `disable-model-invocation: true`，这样只有你能启动它。只应由 Claude 加载的背景知识，加上 `user-invocable: false`。用 `$ARGUMENTS` 传入输入，用法见斜杠命令指南。",
        },
        {
          title: "共享它",
          text: "把 `.claude/skills/` 提交到仓库，或者把 skill 打包成插件，供多个仓库或团队使用。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Claude Code skill 示例",
      steps: [
        {
          title: "只对匹配文件加载的参考型 skill",
          text: "参考型 skill 存放 Claude 在工作时要遵守的约定。`paths` 把自动加载限制在匹配这些 glob 的文件上。",
          code: reference,
        },
        {
          title: "带辅助文件的任务型 skill",
          text: "让 SKILL.md 保持简短，其余内容用指引带过去。只有 SKILL.md 让 Claude 去读时，它才会读 `checklist.md`；`bump.sh` 则直接运行而不读取，所以这些细节在用到之前不占任何开销。",
          code: layout,
        },
        {
          title: "在独立 subagent 中运行的 skill",
          text: "`context: fork` 会启动一个 subagent（这里是只读的 Explore 类型），以 skill 作为它的提示词。它看不到你的对话，所以指令必须能独立成立；除非设置 `background: false`，它会在后台运行。",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "从插件和插件市场安装 skill",
      text: [
        "别人写的 skill 通常装在插件里。第一次启动交互式会话时，Claude Code 会注册 Anthropic 的官方插件市场（`claude-plugins-official`）；用 `/plugin` 浏览，或者直接安装，例如 `/plugin install skill-creator@claude-plugins-official`。团队或社区的插件市场，先用 `/plugin marketplace add owner/repo` 添加。",
      ],
      points: [
        "插件里的 skill 命名为 `/plugin-name:skill-name`。",
        "官方插件市场会显示每个插件每一轮以及被调用时的上下文开销。",
        "skill-creator 插件能帮你编写 skill，并运行评测，对比用和不用它时的结果。",
        "信任一个仓库或插件的 skill 之前先读一读：`allowed-tools` 可以在 skill 运行的那一轮预先批准工具。",
      ],
    },
    {
      kind: "text",
      title: "最佳实践，以及 Claude 忽略 skill 时怎么办",
      points: [
        "描述要为匹配而写：先写清楚要做的事和用户会说的话。在列表里，描述加上 `when_to_use` 超过 1,536 个字符的部分会被截掉。",
        "最重要的指令放在靠前的位置：对话被压缩后，Claude Code 可能只保留已调用 skill 的开头部分。再调用一次就能恢复。",
        "针对整个任务来写指导（“每次编辑后都运行测试”），因为之后的轮次不会重新读取 skill 文件。绝不能跳过的规则应该放进 hook。",
        "想减少 token 用量，就把流程从 CLAUDE.md 移到 skill 里，给手动运行的 skill 设置 `disable-model-invocation: true`，再用 `/skill-doctor` 找出占用上下文却很少使用的 skill。",
        "没有触发？检查描述里有没有对的关键词，问一句“有哪些可用的 skill？”，再运行 `claude plugin validate .claude/skills` 找出无法解析的 frontmatter。",
        "触发太频繁？把描述写得更窄，或者用 `disable-model-invocation: true` 把 skill 改成手动运行。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "skill 教会 Claude Code 怎么做，Crewmark 让它每小时都有事可做。",
      text: [
        "一套 skill 让每个会话都更能干，但它仍然要等你开口。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue，同时加载你项目里的 skill。",
      ],
      steps: [
        {
          title: "把 skill 留在仓库里",
          text: "员工的会话会像你的会话一样读取 `.claude/skills/` 和 CLAUDE.md，所以发布 skill 或评审检查清单都会一起带过去。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接手下一个 issue；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上；员工边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "为 Claude Code 创建 skill" },
  mid: {
    title: "skill 已经准备好了，你不在时谁来运行它们？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code skill 常见问题",
    items: [
      {
        q: "Claude Code skill 是什么？",
        a: "包含 `SKILL.md` 文件的文件夹，里面是某项任务的指令或一套参考知识。当你的请求和它的描述相符时 Claude 会加载它，你也可以用 `/skill-name` 运行它。",
      },
      {
        q: "Claude Code skill 放在哪里？",
        a: "个人 skill 放在 `~/.claude/skills/<name>/SKILL.md`，对所有项目生效；团队用的放在仓库里的 `.claude/skills/<name>/SKILL.md`；也可以放在插件里。",
      },
      {
        q: "怎样让 Claude Code 用上我的 skill？",
        a: "写一段点明任务、并包含你提出请求时会用的词的描述；问一句“有哪些可用的 skill？”确认它出现在列表里；或者直接用 `/skill-name` 运行它。",
      },
      {
        q: "skill 和 subagent 有什么区别？",
        a: "skill 是加载进对话的指令；subagent 是拥有独立上下文的单独工作者。设置了 `context: fork` 的 skill 把两者结合起来：它以 subagent 运行，skill 就是它的提示词。",
      },
      {
        q: "skill 和插件有什么区别？",
        a: "插件是打包和分享 skill、subagent、hook 和 MCP 服务器的方式。安装插件就能得到其中的 skill；不用插件，也可以直接在自己的 `.claude/skills/` 里写 skill。",
      },
      {
        q: "skill 会消耗很多 token 吗？",
        a: "只有描述常驻在上下文里；正文在 skill 运行时才加载，设置为只能手动运行的 skill 连描述都不会列出。把长流程从 CLAUDE.md 移到 skill 里，通常能减少 token 用量。",
      },
      {
        q: "去哪里找 Claude Code skill？",
        a: "Anthropic 的官方插件市场（用 `/plugin` 或在 claude.com/marketplace 浏览）、用 `/plugin marketplace add` 添加的团队和社区插件市场，以及 GitHub 上的公开仓库。",
      },
    ],
  },
  cta: {
    title: "让你的 Claude Code skill 按计划开工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（skills 和 plugins）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
