import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 员工使用场景：交给 Claude Code 和 Codex 的工作",
    description:
      "可以交给 Claude Code 或 Codex 上的 AI 员工的工作，按团队分类，每个都附可复制的岗位说明和运行时间表：每日 SEO 日报、每周竞品动态等。",
  },
  breadcrumb: "使用场景",
  hero: {
    kicker: "使用场景",
    title: "AI 员工使用场景：可以交给 Claude Code 和 Codex 的工作",
    lead: "每个使用场景是 AI 员工按时完成的一件工作：做什么、复制到 CLAUDE.md 或 AGENTS.md 的岗位说明、需要的权限，以及怎么运行。按通常负责这件事的团队分组。每一个也都可以直接在 Claude Code 或 Codex 里当一次性提示词用。",
    cta: "开始使用",
    secondary: "浏览使用场景",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "按团队",
      headers: ["团队", "交出去的工作"],
      rows: [
        ["[营销](/for/marketing)", "SEO 页面和日报、竞品跟踪、社媒草稿、漏斗复盘"],
        ["[工程](/for/engineering)", "报错分拣、pull request 审查、从 issue 到 pull request、发布说明"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "使用场景",
      headers: ["使用场景", "团队", "频率"],
      rows: [
        ["[每日 SEO 日报](/use-cases/daily-seo-report)", "营销", "每天"],
        ["[每周竞品动态](/use-cases/weekly-competitor-digest)", "营销", "每周"],
        ["[Sentry 报错分拣](/use-cases/sentry-error-triage)", "工程", "每天两次"],
        ["[每个 PR 都有 AI 代码审查](/use-cases/pr-review)", "工程", "每个 PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "什么样的工作适合先交出去",
      points: [
        "会重复：每天或每周的工作，设置成本回本最快。",
        "有完成标准：发出一份日报、上线一个页面、发出一份汇总。",
        "容易检查：你一分钟就能看出做得对不对。",
        "最后由你拍板：发布、花钱和任何公开的东西都要经过人。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "把任何一个场景交给 AI 员工",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 变成 AI 员工，有岗位、量化目标、工作时间和心跳。重复的工作在它的看板上变成周期 issue。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "从 [AI 员工岗位](/ai-employees)里选。",
        },
        {
          title: "把工作加成 issue",
          text: "每天和每周的工作会自动重复；到期时员工就去做。",
        },
        {
          title: "它问的时候再回答",
          text: "需要你决定时，它会把 issue 标为“需处理”并提问；其余都在看板上。",
        },
      ],
    },
  ],
  mid: {
    title: "想让这些工作按时完成？",
    text: "Crewmark 员工跑在你的 Claude Code 或 Codex 上，从看板领下一件工作。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "AI 员工能做什么？",
        a: "能通过文件、网页和你的工具完成的重复性工作：根据分析数据写报告、给网站写页面、跟踪竞品、起草待审内容、分拣工单。它对着目标工作，并按时汇报。",
      },
      {
        q: "Claude Code 在写代码以外有哪些好用的场景？",
        a: "营销最容易上手：SEO 页面和日报、竞品动态、内容草稿。见[用 Claude Code 做营销](/for/marketing)；写代码以外的工程工作见[用 Claude Code 做工程](/for/engineering)。",
      },
      {
        q: "这些场景 Codex 也能用吗？",
        a: "能。每份岗位说明既能放进 Claude Code 的 CLAUDE.md，也能放进 Codex 的 AGENTS.md。",
      },
    ],
  },
  cta: {
    title: "挑一件工作，交给 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "更新于 2026 年 11 月 10 日。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 和 OpenAI 均无关联，也未获其背书。Claude、Claude Code 和 Codex 是其各自所有者的商标。",
};
