import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code：添加 Sentry 托管的 MCP 服务器，然后用 OAuth 登录
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex：通过 mcp-remote 桥接
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# 岗位：报错分拣
由周期 issue“Sentry 分拣”触发，工作日 9:00 和 14:00。

1. 在 Sentry 里列出生产环境中，上次运行以来新出现或复发的
   未解决问题。
2. 逐个在看板上查有没有对应的 issue（搜 Sentry 的问题 ID）。
   有的话，把新的次数作为评论加上去。
3. 没有就开一个 issue：用报错做标题，写清影响的用户数和事件数、
   首次和最近出现时间、最上面几层堆栈、从哪个版本开始，
   以及你对原因的猜测（注明是猜测）。
4. 优先级：挡住注册、付款或数据的标 Urgent；影响超过 1% 会话的
   标 High；其余标 Medium。
5. 如果修复又小又明显，就把它当作你的下一个 issue，
   带测试开 pull request。不要合并。
6. 绝不自己在 Sentry 里解决、忽略或删除任何东西。`;

export const copy: GuideCopy = {
  meta: {
    title: "每天用 Claude Code 或 Codex 分拣 Sentry 报错",
    description:
      "让 Claude Code 或 Codex 上的 AI 员工每天两次读取新的 Sentry 报错，带着堆栈、影响和可能原因记到看板上，并为小问题开修复 pull request。附 Sentry MCP 设置和可复制的岗位说明。",
  },
  breadcrumb: "Sentry 报错分拣",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "使用场景 · 工程",
    title: "由 Claude Code 或 Codex 上的 AI 员工分拣 Sentry 报错",
    lead: "Sentry 里的新报错，堆积的速度比任何人看的速度都快。一个跑在你自己的 Claude Code 或 Codex 上的 AI 员工，可以按时查看 Sentry，跳过看板上已经有的，把每个新报错记成 issue（附堆栈、影响的用户和可能原因），并自己接手小修复，开 pull request 等审阅。下面是怎么连接 Sentry 的 MCP 服务器、可复制的岗位说明，以及保证安全的规则。",
    cta: "开始使用",
    secondary: "连接 Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "员工做什么",
      points: [
        "读取上次运行以来新出现或复发的未解决 Sentry 问题。",
        "和看板去重：一个反复出现的报错只会多一条评论，而不是十个新 issue。",
        "写出有用的 issue：影响、首次和最近出现时间、从哪个版本开始、最上面几层堆栈，以及可能原因（明确标为猜测）。",
        "按你写的规则定优先级，比如挡住注册或付款的就是紧急。",
        "修掉明显的问题：一个空值判断、一个缺失的翻译 key、一个错误的跳转。它会带测试开 pull request，等你审阅。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Claude Code 或 Codex 上设置 Sentry 分拣",
      steps: [
        {
          title: "连接 Sentry 的 MCP 服务器",
          text: "Sentry 在 mcp.sentry.dev 托管了一个 MCP 服务器，用 OAuth 登录，所以不用安装任何东西，也不用粘贴 token。添加后启动 agent，按提示登录 Sentry。它能让 agent 访问 Sentry 的问题、报错、项目和 Seer 分析。",
          code: connect,
        },
        {
          title: "复制岗位说明",
          text: "Claude Code 放进 CLAUDE.md，Codex 放进 AGENTS.md，放在报错来源的那个代码仓库里，这样它能读到每层堆栈背后的代码。",
          code: brief,
        },
        {
          title: "定时",
          text: "把分拣做成周期 issue，比如 `--repeat \"weekdays at 9:00\"`；报错多的话，下午再加一个。",
        },
        {
          title: "审阅修复",
          text: "修复 pull request 走你们正常的审阅流程。员工对影响范围或归属拿不准时，会把 issue 标为“需处理”并提问。",
        },
      ],
      source: { label: "来源：Sentry 的 MCP 服务器文档", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "保证安全的规则",
      points: [
        "读 Sentry，写看板。在 Sentry 里解决、忽略或删除，留给人来做。",
        "只看生产环境：指向生产环境，免得把测试环境的噪音记成 issue。",
        "猜测就是猜测：每个 issue 里写的原因在有人确认之前都标为假设。",
        "不合并：修复一律是带测试的 pull request，不直接推送。",
        "个人数据：Sentry 事件里可能有用户信息；issue 里只写次数和 ID，不写邮箱或 IP。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一个每天从你的报错开始工作的工程师",
      text: [
        "分拣天然适合做 AI 软件工程师的周期 issue。Crewmark 把你的 Claude Code 或 Codex 变成这样的员工，配上工作时间和心跳。",
      ],
      steps: [
        {
          title: "从岗位开始",
          text: "[AI 软件工程师](/ai-employees/software-engineer)从看板领 issue，开 pull request。",
        },
        {
          title: "把分拣加成周期 issue",
          text: "到点就分拣，然后接着处理它记下的 issue。",
        },
        {
          title: "更多工程工作",
          text: "见[用 Claude Code 做工程](/for/engineering)和[每个 PR 都有 AI 代码审查](/use-cases/pr-review)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上设置 Sentry 报错分拣" },
  mid: {
    title: "想在站会前就把新报错记好、小问题修好？",
    text: "跑在你的 Claude Code 或 Codex 上的 Crewmark 工程师按时分拣 Sentry，并开修复 pull request。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "怎么把 Sentry 连到 Claude Code？",
        a: "运行 `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`，启动 Claude Code，按提示用 OAuth 登录 Sentry。服务器由 Sentry 托管，不用安装任何东西。",
      },
      {
        q: "Sentry 的 MCP 服务器能用在 Codex 上吗？",
        a: "能，通过 mcp-remote 桥接：`codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`。",
      },
      {
        q: "agent 能自己解决 Sentry 问题吗？",
        a: "可以给它这个权限，但我们建议不要：让它记录和修复，解决和忽略留给人，免得误把问题藏起来。",
      },
      {
        q: "分拣多久跑一次？",
        a: "对多数团队，工作日每天两次就够了；上线期间可以每小时一次。每次运行都消耗你 agent 套餐的用量，不要几分钟跑一次。",
      },
      {
        q: "issue 记到哪里？",
        a: "记到你们团队管理工作的地方。用 Crewmark 的话，就记在员工工作的同一个看板上；否则用你们工具的 MCP 服务器或 CLI，比如 Linear 或 GitHub 的。",
      },
    ],
  },
  cta: {
    title: "你还没喝上咖啡，报错已经记好、小问题已经修好。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照 Sentry 的 MCP 服务器文档核对。",
  disclaimer: "Crewmark 是独立产品，与 Sentry、Anthropic 和 OpenAI 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
