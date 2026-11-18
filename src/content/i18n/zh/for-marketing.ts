import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Crewmark 开源的营销技能，装进你已有的 agent
npx skills add ummydev/marketing-team-skills

# 或者作为 Claude Code 插件
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `每天傍晚，读 Search Console 和我们分析工具最近 7 天的数据，
告诉我哪些有效、做一件事推动它，把日报发在“每日 SEO 日报”issue 上。

每周一，查看 competitors.md 里的价格页和更新日志，
和上周对比，告诉我改了什么、我们哪些对比页要更新。

把这周的博客文章改成 5 条用我们语气写的 LinkedIn 和 X 草稿，
放到看板上等审阅；不要发布。

每周五，从 PostHog 拉注册和激活数据，和上周比，
写出下周可以试的三件事。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 做营销：给营销团队的 AI 员工",
    description:
      "营销团队怎么把 Claude Code 和 Codex 当 AI 员工用：按时做 SEO、内容、社媒、竞品跟踪和数据汇报。岗位、使用场景、可复制的提示词和技能，以及怎么设置才能保证没有你同意什么都不发出去。",
  },
  breadcrumb: "用 Claude Code 做营销",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "给营销团队",
    title: "用 Claude Code 做营销：做重复性工作的 AI 员工",
    lead: "Claude Code 和 Codex 不只是工程师的工具。给它一个岗位、合适的技能和时间表，同一个 agent 就能写和改你网站的页面、提交收录、根据你上线的东西起草帖子、盯竞品，每天汇报数据。Crewmark 自己的营销就是这样在跑。本页讲哪些工作可以交出去、由哪些岗位来做、可以复制的提示词和技能，以及怎么设置才能保证任何公开的内容都经过人。",
    cta: "开始使用",
    secondary: "看看有哪些工作",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "营销团队交给 AI 员工的工作",
      text: ["最适合先交出去的工作：每天或每周重复、有明确的完成标准、最后由你拍板。"],
      headers: ["工作", "频率", "谁来做", "指南"],
      rows: [
        ["SEO 日报：流量、哪些有效、离目标的差距", "每天", "SEO 专员", "[每日 SEO 日报](/use-cases/daily-seo-report)"],
        ["竞品价格、发布和文档的变化", "每周", "营销 agent", "[每周竞品动态](/use-cases/weekly-competitor-digest)"],
        ["为开始见效的关键词写新页面", "每天", "SEO 专员", "[AI SEO 专员](/ai-employees/seo-specialist)"],
        ["对比页和替代品页，保持最新", "每周", "SEO 专员", "[竞品页技能](/skills)"],
        ["根据上线内容起草社媒帖子", "每天", "社交媒体运营", "[AI 社交媒体运营](/ai-employees/social-media-manager)"],
        ["漏斗数据和要试的实验", "每周", "营销 agent", "[AI 营销 agent](/ai-employees/marketing-agent)"],
        ["把已经有搜索流量的页面翻译成其他语言", "按需", "SEO 专员", "[多语言 SEO 技能](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "可以复制的提示词",
      text: ["下面每一条既可以作为 AI 员工的周期 issue，也可以直接在 Claude Code 或 Codex 里当一次性提示词用。"],
      steps: [
        {
          title: "四件工作，每件一句话",
          text: "把名字和数字换成你自己的。前两个有完整指南和岗位说明：[每日 SEO 日报](/use-cases/daily-seo-report)和[每周竞品动态](/use-cases/weekly-competitor-digest)。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "值得装的 Claude Code 营销技能",
      text: ["技能把每件工作的步骤教给 agent，你不用每次都重新解释。"],
      steps: [
        {
          title: "Marketing Team Skills（Crewmark 开源）",
          text: "我们自己的 SEO 员工每天在用的技能：热点关键词、关键词调研、一词一页、竞品页、多语言 SEO、提交收录、AI 搜索和日报，另有短视频技能。见 [Marketing Team Skills](/skills)。",
          code: install,
        },
        {
          title: "更多 SEO 和营销技能",
          text: "Corey Haines 的 marketingskills（seo-audit、ai-seo、programmatic-seo 等）、Claude SEO 等，对比见[最适合 SEO 的 Claude 技能](/skills/seo)。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么搭一支 AI 员工营销团队",
      steps: [
        {
          title: "一次雇一个岗位",
          text: "从每周最耗你时间的工作开始。每个岗位页都有目标、日常流程和岗位说明：[SEO 专员](/ai-employees/seo-specialist)、[营销 agent](/ai-employees/marketing-agent)、[社交媒体运营](/ai-employees/social-media-manager)。",
        },
        {
          title: "给它只读权限和代码仓库",
          text: "Search Console 和分析工具的只读权限、网站的代码仓库，以及一个能测试页面的本地预览。同时有 CLI 和 MCP 时优先用 CLI，更省 token。",
        },
        {
          title: "把工作放上看板",
          text: "重复的工作做成周期 issue，一次性的工作做成你指派的 issue。每个员工在工作时间按心跳醒来，领下一个。",
        },
        {
          title: "公开的东西都要经过人",
          text: "发布、发帖、花钱以及任何不可撤销的操作都要经过人。员工需要这些时，会把 issue 标为“需处理”并提问。",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "可以期待什么",
      points: [
        "任何网站的 SEO 都要几周时间：先把目标定在上线的页面数和展示量，再看点击。",
        "我们自己的 SEO 员工每天上线页面；头几周展示从每周寥寥几次涨到几百次，主要来自长尾页，而“ai employee”这类大词一直在 80 名以后。",
        "起草很快，但品味依然重要：社媒帖子和任何代表品牌语气的内容，发之前都要看一眼。",
        "用量来自你自己的 Claude 或 ChatGPT 套餐，所以把重活安排在工作时间里。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上搭一支 AI 员工营销团队" },
  mid: {
    title: "想让这些工作每天自动完成，不用你提醒？",
    text: "Crewmark 把你的 Claude Code 或 Codex 变成营销员工，按心跳醒来，推进看板上的工作。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code 能做营销吗？",
        a: "能，凡是能通过文件、网页和工具完成的工作都可以：写和改网站页面、关键词调研、竞品跟踪、根据分析数据写报告、起草帖子和邮件。发布和花钱应该留给人。",
      },
      {
        q: "最好用的 Claude Code 营销技能有哪些？",
        a: "SEO 和增长方面，Crewmark 开源的 Marketing Team Skills 和 Corey Haines 的 marketingskills 是最完整的两套；我们在[最适合 SEO 的 Claude 技能](/skills/seo)里做了对比。",
      },
      {
        q: "有 Claude Code 营销插件吗？",
        a: "Marketing Team Skills 可以用 `/plugin marketplace add ummydev/marketing-team-skills` 装成 Claude Code 插件，也可以用 `npx skills add` 装进 Claude Code、Codex 等 agent。",
      },
      {
        q: "Codex 也能做营销吗？",
        a: "能。把岗位说明放进 AGENTS.md 而不是 CLAUDE.md，技能和设置都一样。",
      },
      {
        q: "AI 营销员工和营销自动化工具有什么区别？",
        a: "自动化工具按你搭好的步骤执行。AI 员工对着目标自己决定下一步做什么，在你的网站和工具里干活，并按时汇报。",
      },
      {
        q: "它会不经过我就在社媒上发帖吗？",
        a: "只有你允许才会。我们建议都先出草稿：员工把草稿放到看板上，等你同意。",
      },
    ],
  },
  cta: {
    title: "给你的营销团队配上从不缺勤的 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "写于 2026 年 11 月 10 日，依据 Crewmark 自己的营销员工的工作方式。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 和 OpenAI 均无关联，也未获其背书。Claude、Claude Code 和 Codex 是其各自所有者的商标。",
};
