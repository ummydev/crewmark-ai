import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: 按编号修复 GitHub issue，并附带测试
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

按照 CLAUDE.md 里的约定修复这个 issue。
1. 先写一个能复现问题的失败测试。
2. 做能让测试通过的最小改动。
3. 运行测试套件，总结改了什么。`;

const positional = `---
description: 把组件从一个框架迁移到另一个框架
argument-hint: [component] [from] [to]
---

把 $0 组件从 $1 迁移到 $2。
保留所有现有行为，并让测试全部通过。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 斜杠命令：速查表、自定义命令与 skill",
    description:
      "Claude Code 斜杠命令（slash commands）速查表：值得掌握的内置命令、如何编写带参数的自定义斜杠命令，以及命令和 skill 的关系。",
  },
  breadcrumb: "Claude Code 斜杠命令",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code 斜杠命令：速查表，以及如何自己写",
    lead: "斜杠命令是你在 Claude Code 消息开头输入的快捷方式，比如 `/init`、`/compact` 或 `/code-review`，用来控制会话或运行保存好的提示词。本文先给出一份按使用时机分组的常用命令速查表，再讲怎样创建带参数的自定义斜杠命令，以及它们和 skill 的关系。",
    cta: "开始使用",
    secondary: "跳到自定义命令",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "斜杠命令如何工作",
      text: [
        "在 Claude Code 里输入 `/`，就能看到所有可用的命令，继续输入可以筛选列表。命令只有写在消息开头才算数；命令名后面的内容都会成为它的参数。",
      ],
      points: [
        "内置命令写在 CLI 代码里，比如 `/clear`、`/model` 和 `/compact`。",
        "捆绑 skill 随 Claude Code 一起提供，作用相当于交给 Claude 的提示词，比如 `/simplify`、`/loop` 和 `/batch`。",
        "自定义命令是你自己写的：`.claude/skills/` 里的 skill，或者 `.claude/commands/` 里的旧式文件。插件和 MCP 服务器还能再添加更多。",
        "在 Claude 还在回答时发送命令，它会在当前这一轮结束后运行；少数命令，比如 `/status` 和 `/usage`，会立即运行。",
        "不是每个人都能看到所有命令：有些取决于你的平台、套餐或组织策略。",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Claude Code 斜杠命令速查表",
      text: ["大多数人常用的命令，按一个会话通常用到它们的顺序排列。"],
      headers: ["时机", "命令", "作用"],
      rows: [
        ["配置阶段", "`/init`", "为项目生成一份初始 CLAUDE.md"],
        ["配置阶段", "`/memory`", "编辑 CLAUDE.md 文件，开启或关闭自动记忆"],
        ["配置阶段", "`/mcp`", "管理 MCP 服务器连接"],
        ["配置阶段", "`/permissions`", "管理工具的允许、询问和拒绝规则"],
        ["配置阶段", "`/config`", "打开设置：主题、模型、输出风格等"],
        ["任务进行中", "`/plan`", "在大改动之前切换到计划模式"],
        ["任务进行中", "`/model`、`/effort`", "切换模型，以及调整它投入多少推理"],
        ["任务进行中", "`/context`", "显示上下文窗口被什么占满了"],
        ["任务进行中", "`/compact [instructions]`", "总结目前为止的对话，释放上下文"],
        ["任务进行中", "`/btw [question]`", "问一个旁支问题，不把它加进对话"],
        ["任务进行中", "`/goal`", "设定一个让 Claude 持续朝着努力的条件"],
        ["并行工作", "`/tasks`", "列出会话的后台工作和 subagent"],
        ["并行工作", "`/background`", "把会话分离出去，作为后台 agent 运行"],
        ["并行工作", "`/batch <instruction>`", "把涉及整个代码库的改动拆成多个单元，每个单元在各自的 worktree 里进行"],
        ["并行工作", "`/fork`", "把对话复制到一个新的后台会话"],
        ["发布之前", "`/diff`", "显示工作区里的改动"],
        ["发布之前", "`/code-review`", "评审当前 diff 或某个 PR 里的 bug；`/review` 是它的别名"],
        ["发布之前", "`/security-review`", "检查分支改动中的安全漏洞"],
        ["会话之间", "`/clear`", "开始一个上下文为空的新对话"],
        ["会话之间", "`/resume`、`/rename`", "回到之前的对话；给当前对话命名"],
        ["会话之间", "`/branch`、`/rewind`", "为对话创建分支；把代码和对话回滚到某个检查点"],
        ["自动化", "`/loop [interval] [prompt]`", "在会话保持打开期间重复运行一个提示词"],
        ["自动化", "`/schedule`", "创建和管理云端定时任务"],
        ["遇到问题时", "`/doctor`、`/debug`", "诊断配置问题；读取会话的调试日志"],
        ["遇到问题时", "`/usage`、`/status`", "显示费用和套餐限额（`/cost` 和 `/stats` 是别名）；显示版本、模型和账号"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何创建自定义斜杠命令",
      text: [
        "自定义命令已经并入 skill。`.claude/commands/fix-issue.md` 文件和 `.claude/skills/fix-issue/SKILL.md` skill 都会创建 `/fix-issue`，效果完全一样；新命令推荐用 skill 格式，因为它可以带上辅助文件。",
      ],
      steps: [
        {
          title: "创建文件夹和 SKILL.md",
          text: "要让整个团队都能用，就在仓库里创建 `.claude/skills/<name>/SKILL.md` 并提交。只给自己在所有项目里用的，放到 `~/.claude/skills/<name>/SKILL.md`。文件夹名就是命令名：`fix-issue` 对应 `/fix-issue`。",
        },
        {
          title: "编写 frontmatter",
          text: "在两行 `---` 之间，加上 `description`（Claude 据此判断什么时候用这个 skill）、在菜单里提示参数的 `argument-hint`、只允许你手动触发时设置 `disable-model-invocation: true`（部署这类有副作用的操作都应该这样），以及为那一轮预先批准工具的 `allowed-tools`。",
        },
        {
          title: "编写带参数的提示词",
          text: "在 frontmatter 下面用 Markdown 写指令。`$ARGUMENTS` 会被替换成命令后面输入的全部内容；`$0`、`$1` 等（或 `$ARGUMENTS[0]`）取单个参数。写成 `` !`command` `` 的一行会先运行这条 shell 命令，再把输出贴进提示词。",
          code: skill,
        },
        {
          title: "运行它",
          text: "输入 `/fix-issue 123`。会话中新增或修改的 skill 会自动加载；如果某个没出现，运行 `/reload-skills`。没有设置 `disable-model-invocation` 的话，当你的请求和 skill 的描述相符时，Claude 也可以自己运行它。",
        },
        {
          title: "多段命令用位置参数",
          text: "运行 `/migrate-component SearchBar React Vue` 会依次填入 `$0`、`$1` 和 `$2`。",
          code: positional,
        },
      ],
      source: { label: "来源：Claude Code 文档，Commands 和 Skills", href: commands },
    },
    {
      kind: "table",
      title: "自定义斜杠命令放在哪里",
      headers: ["位置", "路径", "命令名"],
      rows: [
        ["个人", "`~/.claude/skills/<name>/SKILL.md`", "在你所有项目里都是 `/<name>`"],
        ["项目", "`.claude/skills/<name>/SKILL.md`", "仓库里所有人都能用的 `/<name>`"],
        ["旧式命令文件", "`.claude/commands/<name>.md`", "`/<name>`；子文件夹会加上前缀，例如 `commands/frontend/component.md` → `/frontend:component`"],
        ["插件", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["MCP 服务器", "服务器提供的提示词", "列在 `/` 菜单里"],
      ],
    },
    {
      kind: "table",
      title: "斜杠命令与 skill 对比",
      text: [
        "合并之后，问题与其说是“选哪个”，不如说是“用哪种文件格式”。如果 skill 和命令文件同名，以 skill 为准。",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["创建 `/<name>`", "是", "是"],
        ["frontmatter", "字段相同，但没有 `name` 和 `paths`", "全部字段"],
        ["辅助文件（脚本、模板）", "否", "是，放在 skill 的文件夹里"],
        ["Claude 能自己加载", "能，除非设置了 `disable-model-invocation: true`", "能，除非设置了 `disable-model-invocation: true`"],
        ["现状", "仍然可用", "新工作推荐使用"],
      ],
    },
    {
      kind: "text",
      title: "技巧与常见坑",
      points: [
        "在终端提示符里可以叠加 skill：`/write-tests /fix-issue 123` 会加载两者，并把 `123` 传给每一个，最多六个。在 `claude -p` 和 Agent SDK 里只会加载第一个。",
        "你记得的内置命令可能已经没了：`/pr-comments`、`/vim` 和 `/ultraplan` 已被移除。请查看 `/help` 或文档。",
        "`allowed-tools` 只在调用 skill 的那一轮授予权限，而仓库里的 skill 可以给自己授予工具，所以在陌生仓库里运行 Claude Code 之前，先读一读这些 skill。",
        "每个 skill 的描述都常驻在上下文里；`/skill-doctor` 会显示每个 skill 的开销和使用频率。长流程应该放进 skill，而不是 [CLAUDE.md](/blog/claude-md)。",
        "`/loop` 只在会话打开期间重复提示词。想让工作自己开始，参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "斜杠命令让你更快，Crewmark 让 Claude Code 不用你也能开工。",
      text: [
        "每个斜杠命令都还需要你坐在键盘前输入。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue，用的正是你已经配置好的 skill 和命令。",
      ],
      steps: [
        {
          title: "把 skill 留在仓库里",
          text: "你的 `.claude/skills/` 和 CLAUDE.md 会像在你的会话里一样，加载到员工的会话里，所以 `/fix-issue` 和你的约定都会一起带过去。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接手下一个 issue。多名员工可以共用一个仓库，各自在自己的 [worktree](/blog/claude-code-worktree) 里工作。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上；员工边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 里创建自定义斜杠命令" },
  mid: {
    title: "输入已经自动化了，那下一步输入什么由谁来决定？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code 斜杠命令常见问题",
    items: [
      {
        q: "怎么查看 Claude Code 的所有斜杠命令？",
        a: "在消息开头输入 `/` 打开菜单，继续输入可以筛选。`/help` 和 `/skills` 也会列出它们，Claude Code 文档的 Commands 页面有完整参考。",
      },
      {
        q: "怎么在 Claude Code 里创建自定义斜杠命令？",
        a: "创建 `.claude/skills/<name>/SKILL.md`（或者 `~/.claude/skills/<name>/SKILL.md`，对所有项目生效），写上简短的 frontmatter 和你的提示词。它就会成为 `/<name>`。旧式的 `.claude/commands/<name>.md` 文件也可以。",
      },
      {
        q: "怎么给斜杠命令传参数？",
        a: "在命令名后面输入即可。在提示词里，`$ARGUMENTS` 包含你输入的全部内容，`$0`、`$1` 等对应单个参数。在 frontmatter 里加上 `argument-hint`，可以提示需要哪些参数。",
      },
      {
        q: "斜杠命令和 skill 有什么区别？",
        a: "自定义斜杠命令已经并入 skill：两者都会创建 `/name`，用法也一样。skill 多了一个可以放辅助文件的文件夹，是推荐的格式；`.claude/commands/` 里的命令文件仍然可用。",
      },
      {
        q: "斜杠命令被弃用了吗？",
        a: "没有。输入 `/name` 就是运行任何命令或 skill 的方式。变的是自定义命令的文件格式：`.claude/commands/` 仍然可用，但更推荐 skill。个别内置命令已被移除。",
      },
      {
        q: "Claude 能自己运行我的斜杠命令吗？",
        a: "能，当你的请求和 skill 的描述相符时。在 frontmatter 里加上 `disable-model-invocation: true`，它就只会在你手动输入时运行。",
      },
      {
        q: "斜杠命令在 headless 模式下能用吗？",
        a: "自定义 skill 可以：`claude -p \"/fix-issue 123\"` 会运行它，因为 `-p` 会像交互式会话一样加载 skill 和自定义命令。消息里只有第一个 skill 会加载，而 `--bare` 会完全跳过 skill 发现。",
      },
    ],
  },
  cta: {
    title: "给你的 Claude Code skill 配一名员工来运行它们。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（commands 和 skills）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
