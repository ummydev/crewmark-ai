import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex AGENTS.md 指南：放在哪里、加载顺序、示例与最佳实践",
    description:
      "Codex 如何读取 AGENTS.md：全局 ~/.codex 文件、项目与嵌套文件、AGENTS.override.md、加载顺序与 32 KiB 上限、后备文件名、代码审查规则，以及可直接复制的示例。",
  },
  breadcrumb: "Codex AGENTS.md 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Codex",
    title: "Codex AGENTS.md：放在哪里、按什么顺序加载、该写什么",
    lead: "AGENTS.md 是 OpenAI 的 Codex 在动手之前读取的指令文件：构建和测试命令、约定和规则，都用普通的 Markdown 写。Codex 会把 `~/.codex` 里的全局文件和仓库里的文件合并起来，从根目录一直读到你所在的文件夹。本文讲清每个位置、准确的加载顺序和大小上限、覆盖文件、后备文件名、代码审查规则，以及可以直接复制的示例。",
    cta: "开始使用",
    secondary: "跳到设置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Codex 在哪里查找 AGENTS.md，按加载顺序",
      text: [
        "Codex 在启动时构建一次指令链（在终端界面里，每个会话一次）。文件按这张表从上到下拼接，所以离工作目录越近的指令越靠后，优先级越高。",
      ],
      headers: ["顺序", "位置", "Codex 读取什么"],
      rows: [
        ["1. 全局", "`~/.codex/`（或 `$CODEX_HOME`）", "有 `AGENTS.override.md` 就读它，否则读 `AGENTS.md`；只读第一个非空的文件"],
        ["2. 项目根目录", "通常是 Git 根目录", "`AGENTS.override.md`，没有就读 `AGENTS.md`，再没有就读后备文件名；最多一个文件"],
        ["3. 逐级向下的每个文件夹", "从根目录到你启动 Codex 的位置之间的每个目录", "每个目录做同样的检查，各读一个文件"],
        ["停止", "你的当前目录", "它下面的文件夹不会读取"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何为 Codex 设置 AGENTS.md",
      steps: [
        {
          title: "创建全局默认设置",
          text: "运行 `mkdir -p ~/.codex`，在 `~/.codex/AGENTS.md` 里写下你希望在每个仓库都生效的偏好。让 Codex 总结一下它的指令，确认已经加载。",
          code: global,
        },
        {
          title: "添加项目文件，团队规则不同的地方用覆盖文件",
          text: "在仓库根目录放一个 `AGENTS.md`，写共用的设置。在规则不同的文件夹里添加 `AGENTS.override.md`：它会取代该文件夹的 `AGENTS.md`，Codex 随后就不再读那个文件。",
          code: project,
        },
        {
          title: "确认加载了哪些文件",
          text: "在你关心的文件夹里启动 Codex，比如 `codex --cd services/payments`，让它列出已加载的指令来源。它应该依次列出全局文件、根目录文件和该文件夹的文件。",
        },
        {
          title: "沿用现有文件名，或者提高上限",
          text: "如果仓库已经把指令写在别的文件里，把它加到 `~/.codex/config.toml` 的 `project_doc_fallback_filenames` 中。合并后的大小达到 `project_doc_max_bytes`（默认 32 KiB）时，Codex 就不再添加文件。",
          code: config,
        },
        {
          title: "为 Codex 代码审查添加规则",
          text: "要让 GitHub 上的 `@codex review` 用上规则，就在离相关代码最近的 AGENTS.md 里加一个 `## Code Review Rules` 部分。写明要指出什么问题以及安全的替代做法；格式和 lint 交给 CI。",
          code: review,
        },
      ],
      source: { label: "来源：Codex 文档，Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "AGENTS.md 最佳实践",
      points: [
        "只写 Codex 自己弄不清楚的：准确的构建、测试和 lint 命令（包括如何只跑一个测试）、代码库里的坑，以及没有写在任何地方的决定。",
        "把最具体的规则放在离代码最近的地方：`services/payments/` 里的嵌套 AGENTS.md，胜过根目录长文件里的一节支付说明。",
        "注意 32 KiB 的预算：文件从根目录往下依次加入，超出的部分会被截掉，所以把长文件拆成嵌套文件，或者提高 `project_doc_max_bytes`。",
        "临时调整用 `AGENTS.override.md`，全局或单个文件夹都可以，删掉它就恢复原样。",
        "空的 AGENTS.md 会被跳过，该目录会继续查找下一个文件名。",
        "给自动化用户单独设置 `CODEX_HOME`，这样他们的全局指令不会和你的混在一起。",
      ],
    },
    {
      kind: "table",
      title: "Codex 与 Claude Code 等工具中的 AGENTS.md 对比",
      text: [
        "AGENTS.md 是很多 agent 都会读取的开放格式，所以最适合放你想共用的指令。Claude Code 有自己的文件 CLAUDE.md，详见 [CLAUDE.md 指南](/blog/claude-md)。",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["主文件", "`AGENTS.md`", "`CLAUDE.md`；只在没有 CLAUDE.md 时才读 `AGENTS.md`"],
        ["个人或临时文件", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["全局文件", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["嵌套文件夹", "从根目录到当前目录", "启动时读父目录；子文件夹在 Claude 进入工作时读取"],
        ["大小上限", "默认合计 32 KiB", "按单个文件限制；建议控制在 200 行以内"],
        ["共用一个文件", "原生支持", "在 CLAUDE.md 开头写 `@AGENTS.md`"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "AGENTS.md 告诉 Codex 怎么做，Crewmark 告诉它下一步做什么。",
      text: [
        "好的 AGENTS.md 能让每个 Codex 会话一开始就了解情况，但会话仍然要等你的提示。Crewmark 把 Codex、Claude Code、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "把 AGENTS.md 留在仓库里",
          text: "员工的 Codex 会话会像你的会话一样读取它，约定和测试命令都会一并带上。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Codex 主动工作](/proactive-codex)。",
        },
        {
          title: "在一个看板上混用 agent",
          text: "一份 AGENTS.md 可以同时服务 Codex 和 Claude Code 员工；两者的比较见 [Claude Code 与 Codex 对比](/blog/claude-code-vs-codex)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "为 Codex 设置 AGENTS.md" },
  mid: {
    title: "Codex 知道你的规则了，谁来给它下一个任务？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Codex，用的就是你已经在付费的 ChatGPT 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Codex AGENTS.md 常见问题",
    items: [
      {
        q: "Codex 里的 AGENTS.md 是什么？",
        a: "一份 Markdown 指令文件，Codex 在开始任何工作之前读取，内容是项目的命令、约定和规则。Codex 会把全局文件和仓库里的文件合并起来。",
      },
      {
        q: "Codex 在哪里查找 AGENTS.md？",
        a: "先在 `~/.codex`（或 `$CODEX_HOME`）里找，然后在从项目根目录到你启动 Codex 的文件夹之间的每个目录里找，每个目录最多读一个文件。",
      },
      {
        q: "AGENTS.md 文件按什么顺序加载？",
        a: "先全局，再项目根目录，然后逐级往下到当前目录的每个嵌套文件夹。它们按这个顺序拼接，所以最近的文件排在最后，优先级最高。",
      },
      {
        q: "AGENTS.override.md 是什么？",
        a: "Codex 在同一目录里用来代替 AGENTS.md 的文件，可以放在全局或某个文件夹。用它来写临时或特定团队的规则，不必改动共用文件。",
      },
      {
        q: "AGENTS.md 有大小限制吗？",
        a: "有：合并后的大小达到 `project_doc_max_bytes`（默认 32 KiB）时，Codex 就不再添加文件。可以在 `~/.codex/config.toml` 里调高，或把指令拆到嵌套文件里。",
      },
      {
        q: "Codex 和 Claude Code 能共用一个文件吗？",
        a: "可以。把共用的指令放在 AGENTS.md 里，在 CLAUDE.md 开头加上 `@AGENTS.md`，下面再写只给 Claude 的备注。",
      },
      {
        q: "Codex 代码审查会读取 AGENTS.md 吗？",
        a: "会。在离代码最近的 AGENTS.md 里加一个 `## Code Review Rules` 部分，GitHub 上的 `@codex review` 就会应用它。",
      },
    ],
  },
  cta: {
    title: "给已经了解情况的 Codex 一份工作。",
    text: "Crewmark 把 Codex、Claude Code 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 OpenAI 的 Codex 文档（Custom instructions with AGENTS.md）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenAI 和 Anthropic 无关，也未获其背书。Codex 是 OpenAI 的商标，Claude 和 Claude Code 是 Anthropic 的商标。",
};
