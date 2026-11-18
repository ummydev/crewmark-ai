import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code：审查一个 pull request 并发行内评论
/code-review 142 --comment

# Codex：在 GitHub 的 PR 评论里请它审查
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- billing/ 和 auth/ 里新增的分支如果没有测试，要指出来。
- 任何 SQL 迁移都要有回滚；没有就说出来。
- 不评论格式问题，交给 linter。
- 不批准、也不要求修改：只写评论。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 和 Codex 给每个 PR 做 AI 代码审查",
    description:
      "用 Claude Code 和 Codex 审查 pull request 的三种方式：带行内评论的 /code-review、@codex review 和自动审查，以及一个审查看板上每个 PR 的 AI 员工。附命令、可复制的审查规则和局限。",
  },
  breadcrumb: "每个 PR 都有 AI 代码审查",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "使用场景 · 工程",
    title: "用 Claude Code 和 Codex 给每个 pull request 做 AI 代码审查",
    lead: "Claude Code 和 Codex 都能审查 pull request，并在 GitHub 上留下行内评论。你可以自己发起审查，可以让它自动开始，也可以把“审查看板上的每个 PR”交给一个 AI 员工当作固定工作。本页讲每种方式的命令、值得写下来的审查规则、AI 审查不会做的事，以及怎么让审查成为常设工作，而不是要人记得去叫它。",
    cta: "开始使用",
    secondary: "看命令",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "给 pull request 做 AI 审查的三种方式",
      headers: ["方式", "怎么开始", "在哪运行", "适合"],
      rows: [
        ["Claude Code `/code-review`", "你来运行，带上 PR 编号；加 `--comment` 发行内评论", "你自己的 Claude Code 会话，任何套餐", "合并前审查自己的分支或某个 PR"],
        ["Claude Code Review（托管）", "组织的 Owner 为仓库开启；任何人评论 `@claude review` 即可", "Anthropic 的服务", "用 Claude 套餐、需要按需审查的团队"],
        ["Codex 代码审查", "在 PR 评论里写 `@codex review`，或在 Codex 设置里开启自动审查", "OpenAI 的云端", "用 ChatGPT 套餐的团队；在 GitHub 上只标 P0 和 P1 问题"],
        ["一个 AI 员工", "看板上的审查 issue，或分配给它的每个 PR", "你自己的 Claude Code 或 Codex，按心跳运行", "常设工作：每个 PR 都审，后续问题有人跟"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么用 Claude Code 或 Codex 审查 pull request",
      steps: [
        {
          title: "Claude Code：运行 /code-review",
          text: "在 Claude Code 会话里，`/code-review` 会找出你分支改动里的 bug；带上 PR 编号就审查那个 pull request，加 `--comment` 就把发现作为行内评论发到 GitHub。`--fix` 则是把修复直接应用到你的工作区。`/review` 是它的别名。",
          code: commands,
        },
        {
          title: "Codex：评论 @codex review",
          text: "在 pull request 的评论里写 `@codex review`；Codex 会用 👀 回应，然后发出审查。需要的话在后面加上关注点。想不用每次叫它，就在 Codex 设置里开启 Automatic review 并选择触发时机。",
        },
        {
          title: "把审查规则写下来",
          text: "Codex 会读离代码最近的 AGENTS.md 里的 `## Code Review Rules` 一节。Claude Code 的话，把同样的规则放进 CLAUDE.md。有了规则，审查更一致，也不会去管 linter 已经管的事。",
          code: rules,
        },
      ],
      source: { label: "来源：Claude Code 文档，用 /code-review 在本地审查", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "AI 审查不会做的事",
      points: [
        "批准或拦截：Claude 的托管 Code Review 从不批准或拦截 pull request；好的岗位说明也会让员工只写评论。",
        "代替改动的负责人：它能抓 bug 和缺失的测试；产品和设计上的决定留给人。",
        "什么都看：Codex 在 GitHub 上只标 P0 和 P1 问题，以免评论太多。需要时让它关注某个方面。",
        "不花钱：审查消耗你套餐的用量。按需审查，或在 PR 标为可审查时审查，而不是每次推送都审。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让审查成为某个人的工作",
      text: [
        "命令只在有人记得运行时才会审查。AI 员工审查，是因为这就是它的工作：Crewmark 把你的 Claude Code 或 Codex 变成一个工程师，按心跳醒来，接手等待审查的 pull request 并写评论。",
      ],
      steps: [
        {
          title: "从岗位开始",
          text: "[AI 软件工程师](/ai-employees/software-engineer)，把你们的审查规则写进它的岗位说明。",
        },
        {
          title: "把审查放到看板上",
          text: "给它分配审查 issue，或者加一个周期 issue，审查所有标为可审查的 PR。",
        },
        {
          title: "更多工程工作",
          text: "见[用 Claude Code 做工程](/for/engineering)和 [Sentry 报错分拣](/use-cases/sentry-error-triage)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 Claude Code 或 Codex 审查 pull request" },
  mid: {
    title: "想让每个 pull request 都有人审，不用开口？",
    text: "跑在你的 Claude Code 或 Codex 上的 Crewmark 工程师按心跳审查等待中的 PR。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "怎么用 Claude Code 审查 pull request？",
        a: "在 Claude Code 会话里运行 `/code-review <PR 编号> --comment`，就会把发现作为行内评论发到 GitHub。不加 `--comment` 就只在会话里报告；`--fix` 会在本地应用修复。",
      },
      {
        q: "Claude Code 的 /review 和 /code-review 一样吗？",
        a: "Claude Code 的文档把 `/review` 列为 `/code-review` 的别名。",
      },
      {
        q: "怎么让 Codex 审查 pull request？",
        a: "在 pull request 上评论 `@codex review`，或在 Codex 设置里开启 Automatic review，让审查按你选的时机自动开始。仓库要先开启代码审查。",
      },
      {
        q: "能把我们团队的规则告诉 AI 审查吗？",
        a: "能。Codex 会读 AGENTS.md 里的 `## Code Review Rules` 一节；Claude Code 的话，把同样的规则放进 CLAUDE.md。",
      },
      {
        q: "AI 会批准或合并 pull request 吗？",
        a: "Claude 的托管 Code Review 从不批准或拦截，合并也应该留给人。AI 员工的岗位说明里应该写明只评论。",
      },
    ],
  },
  cta: {
    title: "每个 pull request 都有人审，不用谁记得去叫。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Claude Code 的代码审查文档和 OpenAI 的 Codex 代码审查文档核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic、OpenAI 和 GitHub 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
