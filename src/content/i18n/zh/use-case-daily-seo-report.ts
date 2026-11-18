import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /use-cases/daily-seo-report; the English master is
// src/content/use-cases/daily-seo-report.ts.

const brief = `# 岗位：SEO 日报
由周期 issue“每日 SEO 日报”触发，每天 18:30。

1. Search Console，最近 7 天：展示、点击、平均排名。
   看搜索词和页面两张表。记下排在前 10 的词、展示在涨的页面，
   以及有展示没点击的页面。
2. 分析工具，最近 7 天：独立访客、搜索来的访客、
   AI 助手来的访客、搜索访客的落地页。
3. 和周目标比：展示 1 万、点击 500、独立访客 2,000。
4. 挑一个有效的方向，今天就加码做一件事
   （相关页面、FAQ、内链或翻译）。
5. 把日报作为评论发在 issue 上，列出需要我定的事，
   然后把 issue 标为完成。

规则
- Search Console 和分析工具只要只读权限。
- 忽略带引号或带一长串 -site: 的搜索词：那是排名监控工具，不是真人。`;

const schedule = `# 建一个周期 issue，分配给你的 SEO 员工（Crewmark CLI）
crewmark issues create --title "每日 SEO 日报" --assignee "<员工>" \\
  --repeat "daily at 18:30" --timezone Asia/Shanghai`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 每天写 SEO 日报：AI 员工设置",
    description:
      "让 Claude Code 或 Codex 每天写 SEO 日报：Search Console 和分析数据、离目标的差距、哪些有效、以及当天为它做的一件事。附可复制的岗位说明、需要的权限和定时方法。",
  },
  breadcrumb: "每日 SEO 日报",
  parent: { name: "使用场景", href: "/use-cases" },
  hero: {
    kicker: "使用场景 · 营销",
    title: "由 Claude Code 上的 AI 员工每天写 SEO 日报",
    lead: "每天傍晚，一个跑在你自己的 Claude Code 或 Codex 上的 AI 员工，拉取 Search Console 和分析工具最近 7 天的数据，和你的目标比较，找出开始见效的搜索词和页面，做一件事继续推它们，再把日报发到团队工作的地方。这正是 Crewmark 自己的 SEO 员工每天在跑的流程；下面是可复制的岗位说明、它需要的权限，以及怎么定时。",
    cta: "开始使用",
    secondary: "复制岗位说明",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "日报包含什么",
      points: [
        "搜索：最近 7 天的展示、点击和平均排名，以及背后的搜索词和页面。",
        "哪些有效：排在前 10 的词、展示在涨的页面，以及有展示没点击的页面（通常说明标题或内容和搜索意图对不上）。",
        "访客：独立访客、搜索引擎来的访客、ChatGPT 和 Perplexity 等 AI 助手来的访客，以及他们的落地页。",
        "离目标的差距：本周数据和周目标对比。",
        "今天做了什么，以及需要你定的事。",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "例子：我们自己 2026 年 11 月 10 日的日报",
      text: ["这是 Crewmark 的 SEO 员工为 crewmark.ai 发的日报开头，这个网站才上线几周。"],
      headers: ["指标", "最近 7 天", "周目标"],
      rows: [
        ["Search Console 展示", "537（上一份是 309）", "10,000"],
        ["Search Console 点击", "2", "500"],
        ["独立访客", "93，其中搜索来的 16，AI 助手来的 0", "2,000"],
        ["有效的", "“base44 superagent”排第 4 名但没有点击：落在了总览页上", "-"],
        ["做了什么", "当天写了一个 Base44 Superagent 专页", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么在 Claude Code 或 Codex 上设置每日 SEO 日报",
      steps: [
        {
          title: "给它只读的数据权限",
          text: "Search Console：用只读服务账号调 Search Console API，接一个 MCP 服务器，或者让 agent 操作一个你已经登录的浏览器。分析工具：用它的 CLI、API 或 MCP 服务器；我们的员工用的是 PostHog 的 CLI。只读权限就够了。",
        },
        {
          title: "复制岗位说明",
          text: "Claude Code 放进 CLAUDE.md，Codex 放进 AGENTS.md，把目标改成你自己的。开源的 [Marketing Team Skills](/skills) 里有一个 seo-daily-report 技能，步骤相同。",
          code: brief,
        },
        {
          title: "定时",
          text: "把日报做成周期 issue，每天同一时间回到员工手上，你也能一眼看出今天的做没做。",
          code: schedule,
        },
        {
          title: "在你本来就在用的地方看",
          text: "日报以评论的形式发在 issue 上。需要你的时候，它会把 issue 标为“需处理”并提问。",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "把日报变成行动",
      text: ["只描述数字的日报不会让数字变化。有用的是“下一步做什么”的规则，它就写在岗位说明里："],
      points: [
        "排在前 10 或在上升的词：写相关长尾（同一工具的其他用法、vs、替代品、报错、平台），补 FAQ，从已经有访客的页面加内链，或翻译成已经有人搜的语言。",
        "有展示没点击：页面和搜索对不上。按大家实际搜的词改标题，或者为这个词单独写一页。",
        "卡在 50 名以后的大词：别再投入；新网站先赢长尾。",
        "把决定和结果写进日志，第二天的日报就能检查有没有用。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "雇一个会写日报的 SEO 员工",
      text: [
        "日报只是 SEO 专员一天工作的一部分。Crewmark 把你的 Claude Code 或 Codex 变成这样的员工，有岗位、量化目标、工作时间和心跳。",
      ],
      steps: [
        {
          title: "从岗位开始",
          text: "[AI SEO 专员](/ai-employees/seo-specialist)自带目标、日常流程和岗位说明。",
        },
        {
          title: "把日报加成周期 issue",
          text: "它按心跳醒来，看到日报到期就发出来。",
        },
        {
          title: "看看营销的其他工作",
          text: "更多营销团队能交出去的工作见[用 Claude Code 做营销](/for/marketing)；下一个使用场景是[每周竞品动态](/use-cases/weekly-competitor-digest)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 或 Codex 上设置每日 SEO 日报" },
  mid: {
    title: "想每天都有日报，以及日报背后的工作？",
    text: "Crewmark 的 SEO 专员跑在你的 Claude Code 或 Codex 上，按时发日报。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code 能读 Google Search Console 吗？",
        a: "能，通过服务账号调 Search Console API、接一个 Search Console 的 MCP 服务器，或者操作一个你已经登录的浏览器。给它只读权限。",
      },
      {
        q: "怎么让 Claude Code 每天定时写 SEO 日报？",
        a: "Claude Code 不会自己启动，需要有东西叫醒它。用周期任务或心跳，参见[如何让 Claude Code 主动工作](/proactive-claude-code)，或者作为 Crewmark 员工配一个周期 issue。",
      },
      {
        q: "每日 SEO 日报应该包含什么？",
        a: "7 天的展示、点击和排名以及背后的搜索词和页面；哪些排进前 10 或在上升；搜索和 AI 助手带来的访客；离目标的差距；今天做了什么；需要定的事。",
      },
      {
        q: "Codex 也能用吗？",
        a: "能。把同样的岗位说明放进 AGENTS.md，需要的权限也一样。",
      },
      {
        q: "为什么看 7 天而不是 1 天？",
        a: "Search Console 的数据有一两天延迟，单日波动也大。7 天才看得出趋势，日报只是每天读一次。",
      },
    ],
  },
  cta: {
    title: "每天拿到 SEO 日报，以及它要求的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "写于 2026 年 11 月 10 日，依据 Crewmark 自己的 SEO 员工每天在跑的流程。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic、OpenAI、Google 和 PostHog 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
