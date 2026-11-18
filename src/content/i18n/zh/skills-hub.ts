import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "营销与设计用的 Claude Skills | Crewmark AI",
    description:
      "一支 AI 营销团队每天都在用的免费开源 Claude Code skill：趋势关键词、SEO 页面、对比页、收录、AI 搜索和每日报告，另附最好用的设计 skill 横向对比。",
  },
  breadcrumb: "Claude Skills",
  hero: {
    kicker: "Claude Skills",
    title: "AI 营销团队出品的 Claude skill",
    lead: "Marketing Team Skills 是一套免费开源的 Agent Skills，适用于 Claude Code、Codex 和 Cursor，内容就是 Crewmark 自己的 AI SEO 专员每天在做的事：找关键词、写页面并翻译、让页面被收录，再汇报哪些数字有了变化。每个 skill 都是一个 SKILL.md，里面的命令都能直接跑，我们踩过的坑也一并写了进去。下面介绍它包含哪些 skill、怎样安装，以及我们按工作类型整理的最佳 skill 指南。",
    cta: "开始使用",
    secondary: "安装 skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Marketing Team Skills 包含哪些 skill",
      text: ["0.1 版覆盖站内 SEO。站外 SEO、UGC 视频和社交媒体推广会陆续加入。"],
      headers: ["Skill", "作用"],
      rows: [
        ["trend-keywords", "发现产品发布、停服或被收购后大家刚开始搜的词，当天就上线页面"],
        ["keyword-research", "挑出新网站有机会排上去的关键词，并维护一份关键词地图"],
        ["seo-page", "一个关键词写一个页面：先给定义，再写步骤、表格、FAQ 和来源"],
        ["competitor-pages", "根据各产品自己的文档，写替代品页和对比页"],
        ["programmatic-pages", "批量生成模板化页面，同时避免内容单薄"],
        ["multilingual-seo", "每个页面都用多种语言发布，并配好 hreflang"],
        ["index-push", "让页面被抓取：IndexNow、Search Console、Bing"],
        ["ai-search", "让网站内容能被 ChatGPT、Claude 和 Perplexity 引用"],
        ["seo-daily-report", "对照目标写每天收工前的日报"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何安装这些 skill",
      steps: [
        {
          title: "添加到你的 agent",
          text: "skills CLI 可以把它们装进 Claude Code、Codex、Cursor 等 agent；也可以用 Claude Code 插件安装。",
          code: install,
        },
        {
          title: "复制岗位说明",
          text: "把 `roles/seo-specialist/CLAUDE.md`（Codex 用 `AGENTS.md`）放进你网站的仓库，再填好目标，这样每个会话都知道每天该做什么。参见 [AI SEO 专员](/ai-employees/seo-specialist)。",
        },
        {
          title: "每天运行",
          text: "用 `/loop` 或定时任务运行，或者把它当作按心跳工作的 AI 员工来运行；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
      ],
      source: { label: "来源：GitHub 上的 Marketing Team Skills", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "按工作类型挑选最好用的 Claude skill",
      text: ["我们按工作类型对比了值得安装的 skill，信息都来自各项目自己的仓库："],
      points: [
        "[最好用的网站与 UI 设计 Claude skill](/skills/website-design)：Anthropic 的 frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop 等。",
        "[最好用的移动 App 设计与开发 Claude skill](/skills/mobile-app-design)：React Native 用的 Expo、Vercel、Callstack，SwiftUI Pro、SwiftUI Expert，Flutter 团队的 skill，以及按苹果设计规范做审查的 skill。",
        "[最好用的 SEO Claude skill](/skills/seo)：Corey Haines 的 seo-audit 和 ai-seo、Claude SEO、GEO-SEO Claude、Search Console MCP，以及我们自己的 SEO agent 在用的 skill。",
        "想一步步搭建 SEO agent，请读 [AI SEO Agent：用 Claude Code 搭建的方法](/blog/ai-seo-agent)；skill 的通用知识见 [Claude Code skill 指南](/blog/claude-code-skills)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "skill 让会话更能干，AI 员工把工作接过去",
      text: [
        "skill 让一个会话擅长某项任务。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 变成有岗位、目标和工作时间的 AI 员工：它按心跳醒来，从看板上接手下一个 issue，并用上你安装的 skill。",
      ],
      steps: [
        {
          title: "选一个岗位",
          text: "[SEO 专员](/ai-employees/seo-specialist)、[营销 agent](/ai-employees/marketing-agent)、[UI 设计师](/ai-employees/ui-designer)等。",
        },
        {
          title: "连接你的项目",
          text: "每个员工都在独立的会话和代码副本里工作，用的是你已经在付费的订阅。参见[价格](/pricing)。",
        },
        {
          title: "只管评审，不用盯着",
          text: "它边做边评论，碰到你审批清单上的事会先问你。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安装 Marketing Team Skills" },
  mid: {
    title: "想每天都有人替你跑这些 skill？",
    text: "Crewmark 的 AI 员工按心跳使用这些 skill，用的就是你已经在付费的 Claude Code 或 Codex 套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude skill 常见问题",
    items: [
      {
        q: "Claude skill 是什么？",
        a: "带有 SKILL.md 文件的文件夹，教 Claude Code、Claude.ai 和其他 agent 完成某项具体任务。在任务真正用到之前，只会加载一段简短的描述。",
      },
      {
        q: "Marketing Team Skills 免费吗？",
        a: "免费。它以 MIT 许可证在 GitHub 上开源，地址是 ummydev/marketing-team-skills。",
      },
      {
        q: "能在 Codex 和 Cursor 里用吗？",
        a: "可以。skills CLI 能把它装进 Codex、Cursor 和其他支持 Agent Skills 的 agent，仓库里也附带了 Codex 插件清单。",
      },
      {
        q: "它和其他营销 skill 有什么不同？",
        a: "它重实操而不是百科式的大全：每个 skill 都是 AI SEO 员工在线上网站上一步步执行的流程，附带脚本和我们踩过的坑。它和 coreyhaines31/marketingskills 这类覆盖面很广的库搭配使用效果很好。",
      },
    ],
  },
  cta: {
    title: "直接招聘写出这些 skill 的团队。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "skill 列表以 Marketing Team Skills v0.1 为准，截至 2026 年 11 月 8 日。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 和 OpenAI 无关，也未获其背书。Claude、Claude Code 和 Codex 是其各自所有者的商标。",
};
