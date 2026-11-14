import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commands
- Install: pnpm install
- One test file: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Conventions
- 用 src/lib/errors.ts 里的 helper 抛出错误，不要直接抛字符串。
- src/legacy/ 仍在线上使用，但不要照搬它的写法。

# Gotchas
- 集成测试需要 DATABASE_URL（见 .env.example）。`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- 每个 handler 都要用 src/api/schemas/ 里的 schema 校验输入。`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md 怎么写：放哪里、模板与 AGENTS.md | Crewmark AI",
    description:
      "CLAUDE.md 在 Claude Code 里如何工作：文件放在哪里、按什么顺序加载，导入与规则文件，该写什么，一份模板，以及它和 AGENTS.md 的关系。",
  },
  breadcrumb: "CLAUDE.md 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "CLAUDE.md：放在哪里、写什么，以及如何与 AGENTS.md 配合",
    lead: "CLAUDE.md 是一份 markdown 指令文件，Claude Code 在每个会话开始时都会读取它：要运行的命令、要遵守的约定、要避开的坑，都写在项目里。本文讲清 CLAUDE.md 可以放在哪些位置、加载顺序如何，导入与规则文件，哪些该写、哪些不该写，一份简短的模板，以及它和 AGENTS.md 的关系。",
    cta: "开始使用",
    secondary: "跳到模板",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "CLAUDE.md 是什么",
      text: [
        "Claude Code 每次开启会话，都不记得上一次的内容。CLAUDE.md 就是给它提供新同事需要的背景：启动时读取，并在系统提示之后作为一条消息发给 Claude。所以它是上下文，而不是强制执行的配置。Claude 通常会遵守，但凡是必须始终执行或绝不能发生的事，应该放进 hooks 或权限规则。",
      ],
      points: [
        "就是普通的 markdown，没有必填字段：标题加简短的要点列表效果最好。",
        "文件是叠加而不是覆盖：所有适用的 CLAUDE.md 都会加载，所以相互矛盾的内容会让 Claude 自己挑一条。",
        "用 `/context all` 查看已加载的内容，在 Memory files 下。",
      ],
    },
    {
      kind: "table",
      title: "CLAUDE.md 放在哪里，以及加载顺序",
      text: [
        "Claude Code 按从最宽泛到最具体的顺序加载这些文件，所以离启动位置最近的文件最后读取。它还会从工作目录向上查找，加载每一级父目录里的 CLAUDE.md。",
      ],
      headers: ["范围", "位置", "用途"],
      rows: [
        ["托管策略", "`/Library/Application Support/ClaudeCode/CLAUDE.md`（macOS）、`/etc/claude-code/CLAUDE.md`（Linux）、`C:\\Program Files\\ClaudeCode\\CLAUDE.md`（Windows）", "组织为所有开发者统一设置的规则"],
        ["用户", "`~/.claude/CLAUDE.md`", "你自己在所有项目里的偏好"],
        ["项目", "`./CLAUDE.md` 或 `./.claude/CLAUDE.md`", "团队共用的指令，提交到 git"],
        ["本地", "`./CLAUDE.local.md`", "你在某个项目里的个人笔记；记得加入 .gitignore"],
        ["子目录", "`some/dir/CLAUDE.md`", "仅在 Claude 读取或编辑该目录下的文件时加载"],
        ["规则", "`.claude/rules/*.md` 和 `~/.claude/rules/`", "按主题拆分的文件；带 `paths` glob 时，只对匹配的文件加载"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎样写出真正管用的 CLAUDE.md",
      steps: [
        {
          title: "从 /init 开始",
          text: "在项目里运行 `/init`。Claude Code 会读取代码库并生成一份初始的 CLAUDE.md；如果已经有了，它会给出改进建议而不是直接覆盖。它还会读取 `.cursorrules` 和 Copilot 的指令。",
        },
        {
          title: "只留下 Claude 自己找不到的内容",
          text: "保留准确的构建、测试和 lint 命令（包括如何只跑一个测试）、代码里容易误导人的地方、没有写在任何地方的决定，以及你已经纠正过两次的事。删掉文件树和 Claude 能从仓库里读出来的架构。Anthropic 建议控制在 200 行以内。",
          code: example,
        },
        {
          title: "要具体，但别大喊大叫",
          text: "写“使用 2 个空格缩进”，而不是“把代码格式化好”。最新文档说，IMPORTANT 和全大写已经是过时的建议：它们会让 Claude 过度套用某条规则。如果某一行总被漏掉，就缩短文件，或者把这条规则改成 hook。",
        },
        {
          title: "用导入和规则文件拆分",
          text: "`@path/to/file` 会导入另一个文件（相对于导入它的文件，最多四层）；放在反引号里的 `@` 保持原样。只适用于部分代码的规则放进 `.claude/rules/` 并加上 `paths` glob，这样只有 Claude 碰到匹配的文件时才会加载。",
          code: rule,
        },
        {
          title: "把流程挪到 skill 里",
          text: "多步骤的工作流，比如怎么发布版本，应该放进 skill（`.claude/skills/<name>/SKILL.md`），只在相关时才加载。CLAUDE.md 每个任务都会读，所以每一行都在消耗注意力。",
        },
        {
          title: "保持更新",
          text: "当 Claude 重复犯同样的错，或者评审发现了问题，就加一行；用 `/memory` 编辑文件，或者让 Claude 来更新。文件变得太长时，`/doctor` 会建议精简。",
        },
      ],
      source: { label: "来源：Claude Code 文档，How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md 与 AGENTS.md 对比",
      text: [
        "AGENTS.md 是面向编程 agent 的开放指令格式，Codex、Cursor、Gemini CLI、GitHub Copilot 的 coding agent、opencode 等许多工具都在用。Claude Code 现在也会读取它，但默认只在项目没有 CLAUDE.md 时才读。",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["谁会读", "Claude Code", "Codex、Cursor、Gemini CLI、Copilot、opencode 等；Claude Code 作为后备"],
        ["Claude Code 何时读取", "始终读取", "默认只在目录树里没有 CLAUDE.md、`.claude/CLAUDE.md` 或 CLAUDE.local.md 时读取；可用 `/config` 设为两者都读"],
        ["个人文件", "`CLAUDE.local.md`", "Claude Code 不读取（`AGENTS.override.md` 是 Codex 的）"],
        ["导入", "`@path`，最多四层", "格式里没有"],
        ["按路径生效的规则", "`.claude/rules/` 加 `paths`", "每个目录下嵌套的 AGENTS.md 文件"],
      ],
    },
    {
      kind: "text",
      title: "Claude Code 和 Codex 共用一个文件",
      text: [
        "如果团队两种 agent 都用，就把共用的指令放在 AGENTS.md 里，让 CLAUDE.md 导入它，再在下面写只给 Claude 的备注。它不会被加载两次。符号链接（`ln -s AGENTS.md CLAUDE.md`）也可以，但 Windows 上的队友用不了，而且只用文字写一句“去读 AGENTS.md”的 CLAUDE.md 并不可靠。",
      ],
      points: [
        "本网站自己的仓库就是这么做的：它的 CLAUDE.md 只有一行 `@AGENTS.md`。",
        "Codex 会从仓库根目录一路读到你的工作目录里的 AGENTS.md 文件，合并后的大小默认上限为 32 KiB。",
      ],
    },
    {
      kind: "text",
      title: "限制与注意事项",
      points: [
        "启动时加载的 CLAUDE.md 最多完整读取 4 MiB；更大的文件会被跳过。",
        "按需加载的文件，比如子目录的 CLAUDE.md 和按路径生效的规则，超过单文件上限就会被截断（200K 上下文窗口下为 40,000 个字符）。",
        "导入只是整理文件，并不省上下文：被导入的文本照样会加载。",
        "项目之外的导入只需批准一次；HTML 注释 `<!-- -->` 会被去掉，不占任何成本。",
        "执行 `/compact` 之后，项目根目录的 CLAUDE.md 会被重新读取。",
        "“记住这个”会进入自动记忆（`~/.claude/projects/<project>/memory/`），而不是 CLAUDE.md。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "CLAUDE.md 说明怎么干活，Crewmark 决定干什么、什么时候干。",
      text: [
        "好的 CLAUDE.md 能让每个 Claude Code 会话一开始就了解情况，但会话仍然要等你的下一条消息。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "把会话变成员工",
          text: "选一个岗位，比如软件工程师或 SEO 专员，把目标写成一个数字，然后在你的项目里运行设置命令，你的 CLAUDE.md 本来就在那里。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。多个员工可以共用一个仓库，参见[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上，员工会接手、边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "为 Claude Code 编写 CLAUDE.md 文件" },
  mid: {
    title: "CLAUDE.md 写好了，谁来启动下一个任务？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "CLAUDE.md 常见问题",
    items: [
      {
        q: "CLAUDE.md 是什么？",
        a: "一份 markdown 格式的项目指令文件，Claude Code 在每个会话开始时读取，内容包括构建和测试命令、约定和已知的坑。它是给 Claude 的上下文，而不是强制执行的配置。",
      },
      {
        q: "CLAUDE.md 放在哪里？",
        a: "团队共用的放在项目根目录，即 `./CLAUDE.md` 或 `./.claude/CLAUDE.md`，并提交到 git。个人使用的话，`~/.claude/CLAUDE.md` 对所有项目生效，`./CLAUDE.local.md` 只对一个项目生效。子目录也可以有自己的，在 Claude 处理该目录时加载。",
      },
      {
        q: "CLAUDE.md 应该写多长？",
        a: "越短越好。Anthropic 建议每个文件不超过 200 行，因为每个任务都会读每一行。把流程挪进 skill，把只适用于部分代码的规则放进 `.claude/rules/`。",
      },
      {
        q: "Claude Code 会读取 AGENTS.md 吗？",
        a: "会，但默认只在项目没有 CLAUDE.md 时才读。想共用一个文件，可以在 CLAUDE.md 开头写 `@AGENTS.md`，或者在 `/config` 里把 Project instructions 选项设为两者都读。",
      },
      {
        q: "用 CLAUDE.md 还是 AGENTS.md？",
        a: "如果只有 Claude Code 会读你的仓库，用 CLAUDE.md。如果队友还用 Codex、Cursor 或其他 agent，就写 AGENTS.md，再从 CLAUDE.md 里导入它，并在 CLAUDE.md 里补充只给 Claude 的备注。",
      },
      {
        q: "怎么创建 CLAUDE.md 文件？",
        a: "在 Claude Code 里运行 `/init`，根据代码库生成一份，然后精简。之后可以用 `/memory` 编辑，或者让 Claude 加一行。",
      },
      {
        q: "Claude 为什么不理会我的 CLAUDE.md？",
        a: "先用 `/context all` 确认它已加载，检查各文件之间有没有矛盾，再把它缩短：文件太长会稀释每条规则。凡是绝不能漏掉的事，应该放进 hook 或权限规则，而不是 CLAUDE.md。",
      },
    ],
  },
  cta: {
    title: "给已经了解情况的 Claude Code 一份工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 5 日对照 Claude Code 文档、agents.md 和 OpenAI 的 Codex 文档查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 和 OpenAI 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标，Codex 是 OpenAI 的商标。",
};
