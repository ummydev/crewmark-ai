import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /skills/seo; the English master is
// src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines 的 marketingskills：只装 SEO 相关的 skill
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO（在 Claude Code 里）
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# 接入你真实的 Search Console 数据（Ian Nuttall 的 seo，托管 MCP）
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani 基于 Lighthouse 的 SEO skill
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills（我们做的）：每天的 SEO 例行工作
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude SEO Skills：审计、GEO、关键词（2026）",
    description:
      "最好用的 SEO 与 AI 搜索 Claude Code skill，信息来自各项目自己的仓库：Corey Haines 的 seo-audit 和 ai-seo、Claude SEO、GEO-SEO Claude、Search Console MCP、SE Ranking 等横向对比，附安装量和安装命令。",
  },
  breadcrumb: "SEO skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · SEO",
    title: "最好用的 SEO Claude skill",
    lead: "SEO skill 是一个 SKILL.md 文件，教 Claude Code（以及 Codex、Cursor 等 agent）做搜索工作中的某一块：审计网站、规划页面、编写 schema，或者让内容被 AI 搜索引用。它分两类。方法类 skill 是免费的检查清单和操作手册，不需要任何密钥。数据类 skill 通过 MCP 服务器把 agent 接到 Search Console、DataForSEO、SE Ranking 或 Ahrefs 上，让它根据真实数据工作，而不是靠猜。好的配置是两类各装一个。下面是 2026 年值得安装的 SEO skill，信息都来自各项目自己的仓库。",
    cta: "开始使用",
    secondary: "对比这些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "稳妥的起点：Corey Haines 的 marketingskills。其中的 seo-audit、ai-seo 和 programmatic-seo 是 skills.sh 上安装量最高的三个 SEO skill。",
        "一条命令完成全站审计：Claude SEO。`/seo audit <url>` 会派出最多 17 个专项 agent 检查整个网站，再交给你一份按优先级排好的计划。",
        "AI 搜索（GEO）：想要 SEO 代理公司那样的审计和 PDF 报告，用 GEO-SEO Claude；想要一个能在 CI 里跑的 0–100 分就绪度评分，用 GEO Optimizer。",
        "用你自己的数据：Ian Nuttall 的 seo，一个免费的 Search Console MCP 服务器和 CLI；如果你已经在付费使用 SE Ranking，就用 SE Ranking 的 skill。",
        "照规范做技术 SEO：Addy Osmani 的 seo skill，基于 Lighthouse 审计和 Google 的指南。",
        "每天持续做 SEO，而不是只做一次：Marketing Team Skills（我们做的）覆盖挑选新站能拿下的关键词、一个关键词写一个页面、推送收录和每日报告。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code SEO skill 对比",
      text: [
        "Star 数和许可证来自 2026 年 11 月 8 日的 GitHub API，已取整。包含多个 skill 的仓库，Star 数按整个仓库计算。",
      ],
      headers: ["Skill", "最适合", "需要", "Star", "许可证"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills)（Corey Haines）：seo-audit、ai-seo、programmatic-seo、schema、site-architecture", "审计、AI 搜索、批量建页和 schema，都以方法的形式提供", "无；通过 skills CLI 支持任意 agent", "~59k（整个仓库）", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "用并行 agent 做全站审计：技术、E-E-A-T、schema、GEO、本地 SEO", "Claude Code 1.0.33+；`/seo setup` 会装上它自己的 Python 和一个无头浏览器", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO 审计、AI 爬虫检查和给客户的 PDF 报告", "Python 3.10+、Git；用 shell 脚本安装", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "根据 Search Console、GA4 和 Ads 的实时数据做 SEO、GEO 和 Google Ads", "登录 NotFair 的托管 MCP", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills)（Addy Osmani）", "依据 Lighthouse 和 Google 搜索指南做技术 SEO 和页面 SEO", "无；做实时检查需要 Lighthouse 或 Chrome DevTools MCP", "~3k（整个仓库）", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "经过调研和事实核查的博客文章，交付前先打分", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "面向独立创始人的快速 SEO 和 GEO 检查，外加 schema", "Python 3", "~1.9k（整个仓库）", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "0–100 分的 AI 就绪度评分和修复：robots.txt、llms.txt、JSON-LD", "Python 3.10+ 和 uv；做引用检查要用你自己的 LLM 密钥", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "对单个 URL 做 26 项 SEO 和 GEO 检查，逐项给出通过或不通过", "macOS 或 Linux 上的 Python 3.9+", "~1k", "未注明"],
        ["[seo](https://github.com/iannuttall/seo)（Ian Nuttall）", "你真实的 Search Console、Analytics 和 Bing 数据，外加关键词研究", "用 Google 账号登录托管 MCP；关键词功能需要 DataForSEO 或 Ahrefs 密钥", "~600", "Apache 2.0"],
        ["[GEO 医生](https://github.com/Fangx-AI/geo-doctor)", "让中文 AI 助手（豆包、DeepSeek）推荐你；支持中文和英文", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "基于 SE Ranking 数据做关键词聚类、外链差距分析和 AI 声量份额", "SE Ranking 账号（14 天试用，之后付费）", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills)（我们做的）", "新站每天的 SEO 工作：关键词、页面、推送收录、报告；另有短视频", "无；通过 skills CLI 支持任意 agent", "新发布（2026 年 11 月）", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "安装量最高的 SEO skill",
      text: [
        "以下是通过 skills CLI 的安装量，数据来自 2026 年 11 月 8 日的 skills.sh 注册表。用 `/plugin install` 安装的插件（比如 Claude SEO）大多不计入这里，所以这些数字只是下限。",
      ],
      points: [
        "seo-audit（marketingskills）：约 24.9 万",
        "ai-seo（marketingskills）：约 16 万",
        "programmatic-seo（marketingskills）：约 15.8 万",
        "site-architecture（marketingskills）：约 13 万",
        "schema（marketingskills）：约 8.6 万",
        "seo-geo（opc-skills）：约 5.6 万",
        "seo（Addy Osmani 的 web-quality-skills）：约 5.4 万",
        "seo（Ian Nuttall）：约 2.4 万",
        "seo（Claude SEO 的主 skill）：约 1 万",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何配置 Claude Code 来做 SEO",
      steps: [
        {
          title: "只装一个方法类 skill",
          text: "在 marketingskills 的 SEO skill 和 Claude SEO 之间二选一，别都装：它们做的是同样的审计，结论会互相打架。只有想在此之上再加 Lighthouse 式的技术检查时，才加装 Addy Osmani 的 skill。",
          code: install,
        },
        {
          title: "接入真实数据",
          text: "没有数据，agent 给的关键词建议都是猜的。接入 Search Console（用 Ian Nuttall 的 seo 或 Claude SEO 的 `/seo google`）；如果需要搜索量，再接一个关键词数据源，比如 DataForSEO、Ahrefs 或 SE Ranking。",
        },
        {
          title: "先审计，再按顺序修",
          text: "在你自己的网站上运行审计，然后让 agent 修复排在最前面的问题，再重跑同样的检查。收录和排名的变化要过几天甚至几周才会出现在 Search Console 里，不会在当次会话里看到。",
        },
        {
          title: "把它变成例行工作",
          text: "SEO 的回报来自每周重复同一个循环：选一个关键词，写页面，推送收录，看数据。把这个循环写进 CLAUDE.md 或一个 skill，按计划定时运行。参见[如何搭建 AI SEO agent](/blog/ai-seo-agent)。",
        },
      ],
      source: { label: "来源：Corey Haines 的 marketingskills", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "我们的 SEO agent 在 crewmark.ai 上用了什么",
      text: [
        "Crewmark 自己的 SEO 由一位 AI 员工负责：一个担任 [SEO 专员岗位](/ai-employees/seo-specialist)的 Claude Code 会话，按心跳轮班工作。它的仓库里装了 25 个 Corey Haines 的 skill，外加我们的 Marketing Team Skills。",
      ],
      points: [
        "2026 年 11 月 7 日，它在 crewmark.ai 上运行了 marketingskills 的审计类 skill。审计指出网站没有公开的定价，也没有隐私页面；第二天，[定价页](/pricing)就上线了。",
        "它每天从 Google 自动补全和 Search Console 里挑关键词（keyword-research），一个关键词写一个页面（seo-page），把新 URL 提交给 IndexNow、Bing 和 Google（index-push），并发布每日报告（seo-daily-report）。",
        "网站还很新，所以我们暂时拿不出排名结果。等 Search Console 里有值得展示的数字，我们会补充到这个页面上。",
      ],
    },
    {
      kind: "text",
      title: "安装前需要知道的事",
      points: [
        "数据类 skill 会把你的数据发到别处：Ian Nuttall 的 seo、NotFair 和 Ryze 通过各自的托管 MCP 服务器连接，SE Ranking 和 DataForSEO 按积分计费。据 SE Ranking 的 README，大规模运行可能消耗数千积分。",
        "GEO-SEO Claude 和 Agentic SEO Skill 用 `curl ... | bash` 安装。先把脚本下载下来读一遍再运行，Claude SEO 的 README 对它自己的安装脚本也是这样建议的。",
        "别让 skill 替你买外链。Illyism 的 seo-skills 里有一个 linkdr，会从作者自己的服务购买外链；传递排名权重的付费链接违反 Google 的垃圾内容政策。",
        "README 里的效果数字（比如流量增长）都是作者自己的说法。Claude SEO 报告的 12 周内 1.08 万次 Search Console 点击，是它自己网站的数据。",
        "有些免费 skill 旁边还在卖别的东西：Claude SEO 和 GEO-SEO Claude 在推广付费社群，GEO Optimizer 有每月 19 美元起的 Pro 套餐。这些 skill 本身是开源的。",
        "Anthropic 没有发布 SEO skill；这里列出的都不是官方的。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给这些 skill 配一位每天上班的 SEO 专员",
      text: [
        "一个 skill 能让一个会话的 SEO 做得更好。Crewmark 把 Claude Code 或 Codex 变成一位 AI SEO 专员：有量化的目标（比如 Search Console 点击量每月增长 10%）、有工作时间，还有一块待写页面的看板；它按心跳醒来，接手下一个 issue，需要你审批时会给你发消息。",
      ],
      steps: [
        {
          title: "招聘 SEO 专员岗位",
          text: "岗位说明、目标和每日流程都已配好；参见 [AI SEO 专员](/ai-employees/seo-specialist) 和 [AI 营销 agent](/ai-employees/marketing-agent)。",
        },
        {
          title: "把 SEO skill 装进仓库",
          text: "员工会像任何会话一样，使用 `.claude/skills` 里的 skill。可以先从 [Marketing Team Skills](/skills) 开始。",
        },
        {
          title: "评审页面和报告，而不是写提示词",
          text: "批准新页面，在看板上查看每日报告。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 skill 配置 Claude Code 来做 SEO" },
  mid: {
    title: "想要一位每天运行这些 skill 的 SEO 专员？",
    text: "Crewmark 的 AI SEO 专员按心跳轮班工作：写页面，推送收录，每天汇报。",
    button: "开始使用",
  },
  faq: {
    title: "Claude SEO skill 常见问题",
    items: [
      {
        q: "做 SEO，最好用的 Claude skill 是哪个？",
        a: "对大多数网站来说，是 Corey Haines 的 seo-audit、ai-seo 和 programmatic-seo，它们是 skills.sh 上安装量最高的 SEO skill。想用并行 agent 做全站审计，选 Claude SEO。再接一个数据源，比如 Search Console MCP，让 agent 根据你的真实数据工作。",
      },
      {
        q: "有官方的 Claude SEO skill 吗？",
        a: "没有。截至 2026 年 11 月，Anthropic 的 skills 仓库里没有 SEO skill。Claude SEO 是 Agrici Daniel 的独立开源项目，不是 Anthropic 的产品。",
      },
      {
        q: "Claude SEO 和 marketingskills 有什么区别？",
        a: "Claude SEO 是一个专为审计打造的插件：`/seo` 命令背后有 26 个子 skill 和 19 个 agent，还带有自己的 Python 工具和无头浏览器。marketingskills 是一个覆盖整个营销领域的方法类 skill 库，每个 skill 相互独立；你只装需要的 SEO skill，而且不用任何配置。",
      },
      {
        q: "Claude Code 能做关键词研究吗？",
        a: "它能挑选关键词并分组，但自己看不到搜索量。接一个数据源：用 Search Console 看你已经出现在哪些查询里，用 DataForSEO、Ahrefs 或 SE Ranking 看搜索量。Google 自动补全只能告诉你大家在搜什么，看不出有多少人在搜。",
      },
      {
        q: "SEO skill 和 GEO skill 有什么区别？",
        a: "SEO skill 的目标是在 Google 和 Bing 上获得排名；GEO（生成式引擎优化）skill 的目标是被 ChatGPT、Perplexity、Gemini 和 Google 的 AI 摘要（AI Overviews）引用，检查项包括 AI 爬虫能否访问、llms.txt 和便于引用的答案。现在大多数 skill 包两者都做。",
      },
      {
        q: "这些 SEO skill 能在 Codex 和 Cursor 里用吗？",
        a: "大多数可以。用 skills CLI 安装的 skill 能在 Codex、Cursor 和其他几十种 agent 里使用；基于 MCP 的 skill（比如 Ian Nuttall 的 seo）可以接入任何支持远程 MCP 服务器的 agent。",
      },
    ],
  },
  cta: {
    title: "给你的看板配一位 SEO 专员，用上你信得过的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照各 skill 的 GitHub 仓库、GitHub API 和 skills.sh 注册表查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 及文中所列 skill 的作者无关，也未获其背书。产品名称是其各自所有者的商标。",
};
