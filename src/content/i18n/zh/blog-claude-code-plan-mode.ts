import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# 以 plan mode 启动会话
claude --permission-mode plan

# 或者在会话中，只为这一条提示词做计划
/plan 给公开 API 加上限流`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code plan mode：快捷键、工作原理及与 auto mode 对比",
    description:
      "Claude Code 的 plan mode（计划模式）怎么用：Shift+Tab 快捷键和 /plan、计划期间 Claude 能做什么、如何批准计划、如何设为默认，以及 plan mode 与 auto、accept edits 和 manual 模式的对比。",
  },
  breadcrumb: "Claude Code plan mode",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code plan mode：工作原理与适用场景",
    lead: "plan mode（计划模式）是 Claude Code 的一种权限模式：Claude 只调研、提出改动方案，但不动手修改。它会读文件、运行命令来摸清情况，然后写出计划，在你批准之前不会编辑你的源码。按 `Shift+Tab` 循环切换到它，或者在提示词开头加上 `/plan`。本文介绍进入和退出的所有方式、计划期间允许做什么、批准时的选项、如何设为默认，以及它与 auto mode、accept edits 和 manual 模式的对比。",
    cta: "开始使用",
    secondary: "直接看步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "plan mode、auto mode、accept edits 与 manual 对比",
      text: [
        "plan mode 是 Claude Code 的权限模式之一。每种模式都在便利和监督之间做取舍；下表列出了每种模式下 Claude 不用问你就能做的事。",
      ],
      headers: ["模式", "无需询问即可执行", "适合"],
      rows: [
        ["Manual（`default`）", "只读", "逐一审核每个操作、敏感工作"],
        ["Accept edits（`acceptEdits`）", "读取、编辑文件，以及 `mkdir`、`mv` 等常用文件命令", "快速迭代代码，事后用 `git diff` 审查"],
        ["Plan（`plan`）", "读取；auto mode 可用时，还包括经 auto mode 分类器批准的探索性命令。批准之前不做任何编辑", "先摸清代码库、商定方案，再动手修改"],
        ["Auto（`auto`）", "全部操作，附带后台安全检查", "长任务，减少确认弹窗"],
        ["Don't ask（`dontAsk`）", "只有预先批准的工具；其余一律拒绝", "严格受控的 CI 和脚本"],
        ["Bypass（`bypassPermissions`）", "全部操作", "仅限隔离的容器和虚拟机"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 中使用 plan mode",
      steps: [
        {
          title: "进入 plan mode",
          text: "在终端里按 `Shift+Tab` 循环切换模式，直到状态栏显示 `⏸ plan mode on`；从 Manual 开始，顺序是 accept edits，然后是 plan。也可以在单条提示词开头加上 `/plan`。在 VS Code 中，点击输入框下方的模式指示器并选择 Plan；在桌面应用中，使用模式选择器。",
          code: enter,
        },
        {
          title: "描述改动，让 Claude 去探索",
          text: "说出你想做的功能或要修的问题。Claude 会读代码、运行命令来调查，然后写出计划。auto mode 可用时，这些命令由分类器审核，不用问你；否则，除内置只读命令之外的任何命令都会先征求你的同意。",
        },
        {
          title: "审阅并修改计划",
          text: "回答 Claude 的问题、提出异议，或者按 `Ctrl+G` 在文本编辑器中打开计划，自己动手改。计划以文件形式保存在 `~/.claude/plans/`，或 `plansDirectory` 设置指定的文件夹中。",
        },
        {
          title: "批准，或者继续计划",
          text: "选择 Yes, and use auto mode（批准并使用 auto mode；auto mode 不可用时为 Yes, auto-accept edits，即自动接受编辑），让 Claude 去实现；选择 Yes, manually approve edits（逐一手动批准编辑）来审查每一处编辑；或者选择 No, keep planning（继续计划）。批准后会退出 plan mode，并以计划为会话命名。",
        },
        {
          title: "不批准直接退出",
          text: "再按一次 `Shift+Tab`，不带计划退出 plan mode。要为下一个改动做计划，就切换回来，或在提示词开头加上 `/plan`。",
        },
      ],
      source: { label: "来源：Claude Code 文档，Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "把 plan mode 设为默认",
      text: [
        "只针对一个会话，用 `claude --permission-mode plan` 启动。要让某个项目的所有终端会话都默认使用，在 `.claude/settings.json` 中把 `defaultMode` 设为 `plan`；要对本机所有项目生效，就写进 `~/.claude/settings.json`。",
      ],
      steps: [
        {
          title: "写进设置",
          text: "VS Code 中的对话不会从项目设置读取起始模式：请改为在 VS Code 用户设置中把 `claudeCode.initialPermissionMode` 设为 `plan`。",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "什么时候值得用 plan mode",
      points: [
        "涉及很多文件，或者第一个想法往往不对的改动：迁移、重构、横跨前后端的新功能。",
        "你还不熟悉的代码：先让 Claude 理清结构、解释方案，再动任何东西。",
        "犯错代价高的地方：数据库 schema、认证、支付、公开 API。",
        "一行就能修好的问题，或者你描述任务的方式和计划本身没什么两样时，就不必用了；这时 manual 或 accept edits 模式更快。",
        "配合干净的上下文：开启 `showClearContextOnPlanAccept` 后，批准时还可以清空计划阶段的对话，让实现只从计划开始。",
      ],
    },
    {
      kind: "text",
      title: "注意事项",
      points: [
        "plan mode 拦截的是编辑，而不是一切：auto mode 可用时，经批准的 shell 命令会在计划阶段运行，所以有副作用的命令仍可能被执行。",
        "在开启了 bypass permissions 的交互式终端会话中，plan mode 的拦截不会强制执行；Claude 只是被指示不要编辑。",
        "无头运行（`claude -p`）、Agent SDK 会话和 VS Code 聊天面板会保留 plan mode 的拦截。",
        "在 VS Code 中选择 Plan 只对当前对话生效；新对话会回到你平常的起始模式。",
        "deny 规则在所有模式下都生效，plan mode 也不例外。`/plan`、`/permissions` 等命令参见 [Claude Code 斜杠命令](/blog/claude-code-slash-commands)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "plan mode 让 Claude 谨慎行事，Crewmark 让它一直有活干。",
      text: [
        "plan mode 让你在大改动面前掌握主动权，但会话仍要等你来启动下一项工作。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "把计划发在 issue 评论里",
          text: "员工可以在做有风险的改动前，先把计划发到 issue 上，等你点头再动手，这样你在看板上批准就行，不用守着终端。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次，接手下一个 issue；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "多个员工，一个仓库",
          text: "给每个员工分配各自的 [worktree](/blog/claude-code-worktree) 和岗位。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 中使用 plan mode" },
  mid: {
    title: "计划已经批准了，下一项任务谁来接？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code plan mode 常见问题",
    items: [
      {
        q: "Claude Code 的 plan mode 是什么？",
        a: "一种权限模式：Claude 调研并写出计划，但不编辑你的源码。在你批准计划之前，编辑一直被拦截。",
      },
      {
        q: "plan mode 的快捷键是什么？",
        a: "在终端里用 `Shift+Tab` 循环切换权限模式，状态栏显示 `⏸ plan mode on` 时停下。也可以在提示词开头加上 `/plan`，或用 `claude --permission-mode plan` 启动。",
      },
      {
        q: "plan mode 和 auto mode 有什么区别？",
        a: "plan mode 只探索和提出方案，不做编辑。auto mode 直接干活，编辑文件、运行命令，并在后台做安全检查。常见的流程是先计划，再选 Yes, and use auto mode 批准。",
      },
      {
        q: "plan mode 和 accept edits 有什么区别？",
        a: "accept edits 让 Claude 不经询问就修改文件，你事后再审查。plan mode 在你批准计划前什么都不改；批准后，你可以选择自动接受编辑。",
      },
      {
        q: "怎样在 VS Code 或桌面应用中使用 plan mode？",
        a: "在 VS Code 中，点击输入框下方的模式指示器并选择 Plan，或者把 `claudeCode.initialPermissionMode` 设为 `plan`。在桌面应用中，在模式选择器里选择它。",
      },
      {
        q: "Claude Code 的计划保存在哪里？",
        a: "以文件形式保存在 `~/.claude/plans/`，除非你用 `plansDirectory` 设置指定了其他文件夹。按 `Ctrl+G` 可以在编辑器中修改当前计划。",
      },
      {
        q: "怎样退出 plan mode？",
        a: "批准计划，它会切换到你选择的模式；或者按 `Shift+Tab` 不批准直接退出。",
      },
    ],
  },
  cta: {
    title: "让 Claude Code 自己计划、动手，再接手下一个 issue。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（permission modes 和 settings）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
