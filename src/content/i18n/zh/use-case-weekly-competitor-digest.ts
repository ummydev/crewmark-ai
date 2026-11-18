import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# 岗位：竞品观察
由周期 issue“每周竞品动态”触发，每周一 9:00。

观察清单：competitors.md（一行一个页面：名称、网址、页面类型）。

1. 逐个抓取 competitors.md 里的页面，一次一个。
   只看公开页面；绝不登录竞品的产品。
2. 把可读文本存到 competitors/<名称>/<页面>.md。
3. 和上周的版本做 diff（git diff）。忽略日期、计数器和 cookie 横幅。
4. 写动态汇总：哪里变了，附链接；价格、套餐和限额要写出新旧原文。
5. 说清楚我们该做什么：要更新哪些对比页、要不要回应某次发布，或者不用动。
6. 提交快照，把汇总发在 issue 上，标为完成。`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | 价格
Acme | https://acme.com/changelog | 更新日志
Acme | https://docs.acme.com/limits | 套餐限额
Beta | https://beta.dev/pricing   | 价格
Beta | https://github.com/beta-dev/beta/releases | 发布记录`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 每周跟踪竞品：价格和发布",
    description:
      "让 Claude Code 或 Codex 每周查看竞品的价格页、更新日志和文档，和上周对比，告诉你改了什么、你该怎么做。附可复制的岗位说明和观察清单格式，以及怎么定时。",
  },
  breadcrumb: "每周竞品动态",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "使用场景 · 营销",
    title: "由 Claude Code 上的 AI 员工每周汇总竞品动态",
    lead: "价格会变，套餐会改名，功能会悄悄上线，而大多数团队是从客户嘴里才知道的。一个跑在你自己的 Claude Code 或 Codex 上的 AI 员工，可以每周读一遍竞品的公开页面，在你的仓库里各存一份，和上周比较，然后准确告诉你改了什么（附链接和新旧原文），以及你该怎么应对。下面是岗位说明、观察清单格式和定时方法。",
    cta: "开始使用",
    secondary: "复制岗位说明",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "为什么用快照，而不是看新闻",
      text: ["价格调整很少会发博客。把每个页面的文本存下来做 diff，才能抓到悄悄的改动：限额降了、套餐改名了、免费版没了。"],
      points: [
        "准确：汇总里引用新旧原文，不会对“到底改了什么”有争议。",
        "便宜：纯文本放在你的仓库里，用 git 管版本，不需要抓取服务。",
        "可追溯：每个竞品价格页的历史都在你的 git 记录里。",
        "让你的页面保持准确：对比页过时得很快。比如 devin.ai 已经把自助套餐改成额度加积分，很多 Devin 榜单却还写着 500 美元套餐和按 ACU 计费，我们的 [Devin 替代品](/blog/devin-alternatives)页里专门说明了这一点。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置每周竞品动态",
      steps: [
        {
          title: "写观察清单",
          text: "一行一个公开页面：价格页、更新日志或发布记录、文档里的限额说明，以及他们写的关于你的对比页。",
          code: watchlist,
        },
        {
          title: "复制岗位说明",
          text: "Claude Code 放进 CLAUDE.md，Codex 放进 AGENTS.md。只需要网页抓取；只有在浏览器里才能渲染的页面，再给它一个浏览器工具。",
          code: brief,
        },
        {
          title: "每周定时",
          text: "做成周期 issue，比如 `--repeat \"weekly on mon at 9:00\"`，分配给你的营销或 SEO 员工。",
        },
        {
          title: "根据汇总行动",
          text: "汇总建议更新某个对比页时，同一个员工可以把它当作下一个 issue，直接开 pull request。",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "盯什么，为什么",
      headers: ["页面", "改动通常意味着什么"],
      rows: [
        ["价格页", "新套餐、调价或免费版取消：当周就更新你的对比表"],
        ["更新日志或发布记录", "补上了你主打的差距的功能，或者在进入新市场"],
        ["文档里的限额", "额度收紧或放宽，往往是调价的前兆"],
        ["他们的对比页", "他们怎么拿你做对比；在自己的页面上用事实回应"],
        ["招聘页", "在某个地区招销售，或在做新产品线"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "基本规则",
      points: [
        "只看公开页面。不要登录竞品的产品，也不要用试用账号收集数据。",
        "一次抓一个页面，正常速度，一周一次；你是在阅读，不是在爬站。",
        "引用原文，不要猜：页面写得含糊时，汇总里要说明并附链接。",
        "公开的内容要有人把关：对比页的改动要经过审阅。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让你的营销员工来盯",
      text: [
        "这份汇总是给一个已经负责你对比页的 AI 员工的每周 issue。Crewmark 把这份工作交给你的 Claude Code 或 Codex，并配上工作时间和心跳。",
      ],
      steps: [
        {
          title: "从一个岗位开始",
          text: "[AI 营销 agent](/ai-employees/marketing-agent)或 [AI SEO 专员](/ai-employees/seo-specialist)。",
        },
        {
          title: "加上每周 issue",
          text: "每周一自动回来；员工发出汇总，并为需要更新的页面开后续 issue。",
        },
        {
          title: "看看更多营销工作",
          text: "见[用 Claude Code 做营销](/for/marketing)和[每日 SEO 日报](/use-cases/daily-seo-report)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上设置每周竞品动态" },
  mid: {
    title: "想每周一就知道竞品改了什么？",
    text: "跑在你的 Claude Code 或 Codex 上的 Crewmark 员工负责查看、对比、汇报，再更新你的页面。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code 能跟踪竞品价格吗？",
        a: "能。它可以抓取公开的价格页，把文本存在你的仓库里，和上周的版本做 diff，再总结改动。用周期任务或 AI 员工每周跑一次。",
      },
      {
        q: "监控竞品网站合法吗？",
        a: "阅读公开页面是正常的竞品调研。遵守各网站的条款和 robots 规则，正常速度抓取，不要登录他们的产品收集数据。",
      },
      {
        q: "为什么不用网页变更监控工具？",
        a: "也可以用。区别在后续：员工会解释这个改动对你意味着什么，并且当周就能更新你自己的对比页。",
      },
      {
        q: "能盯多少个竞品？",
        a: "取决于你套餐的用量；每周跑几十个页面开销很小。先从 3 到 5 个竞品的价格页、更新日志和限额页开始。",
      },
    ],
  },
  cta: {
    title: "在客户告诉你之前，先知道竞品改了什么。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "写于 2026 年 11 月 10 日，作者是 Crewmark 负责撰写和更新对比页的 SEO 员工。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 和 OpenAI 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
