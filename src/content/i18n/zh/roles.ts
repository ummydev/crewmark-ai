import type { RoleData, RoleTemplate } from "@/content/roles/build";
import type { RoleSlug } from "@/i18n/roles";

// Simplified Chinese copy for the role pages; the English master is src/content/roles/en.ts. Role names follow the
// site's existing wording (messages/zh.json Landing.marketplace.presets, src/content/ai-employees.ts) with "AI" in front,
// as Chinese users search them.

/** Adds a space after a name that ends in a Latin letter or digit, so "AI 营销 agent 能做什么" reads right. */
const s = (name: string) => (/[A-Za-z0-9]$/.test(name) ? `${name} ` : name);

export const template: RoleTemplate = {
  kicker: "AI 员工 · 岗位",
  parent: "AI 员工",
  cta: "开始使用",
  secondary: "复制岗位说明",
  doesTitle: (name) => `${s(name)}能做什么`,
  goalsTitle: "给它定什么目标",
  goalsText: "像对待新员工一样，给 AI 员工一个要推动的数字，每周复盘一次。先从下面挑一个开始。",
  goalsHeaders: ["目标", "怎么衡量", "合适的第一个目标值"],
  routineTitle: "它的每日工作流程",
  howToTitle: (name) => `如何用 Claude Code 或 Codex 搭建 ${name}`,
  howToName: (name) => `搭建 ${name}`,
  briefStep: {
    title: "写好岗位说明",
    text: "把它保存为员工所在仓库里的 `CLAUDE.md`（Claude Code）或 `AGENTS.md`（Codex），这样每次会话一开始，它就知道自己的职责、目标和规则。详见 [CLAUDE.md 指南](/blog/claude-md)。",
  },
  toolsTitle: "给它配齐需要的工具",
  approvalsTitle: "定好哪些事要你点头",
  scheduleStep: {
    title: "给它排好班",
    text: "一个岗位需要的是节奏，而不是一条提示词。单个定期执行的提示词可以用 `/loop` 或定时任务；要让它真正上岗，就给它工作时间、心跳和一块任务看板。详见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
  },
  relatedTitle: "相关指南",
  crewmark: {
    kicker: "用 Crewmark",
    title: (name) => `直接招一位 ${name}，不用自己写脚本`,
    text: (name) =>
      `Crewmark 上有现成的 ${s(name)}可以直接招聘。它跑在你的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话里，用的是你已经付费的订阅；工作时间内按心跳醒来，从共享看板上领下一个任务，需要你拍板时会给你发消息。`,
    steps: [
      {
        title: "选好岗位",
        text: "技能、目标和排班都已配好，把目标改成你自己的数字就行。",
      },
      {
        title: "接入你的项目",
        text: "在它要工作的仓库或文件夹里运行安装命令。它会有自己独立的会话和代码副本。",
      },
      {
        title: "审核就好，不用盯着",
        text: "它边做边在任务下留言，碰到你审批清单上的事会先问你。了解[什么是 AI 员工](/ai-employees)。",
      },
    ],
  },
  faqTitle: (name) => `${s(name)}常见问题`,
  ctaText: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成 AI 员工：有岗位、有目标、有工作时间，还有心跳。",
  checked: "本页于 2026 年 11 月 7 日撰写，依据 Crewmark 岗位市场的预设岗位和各 agent 的官方文档。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 或 OpenAI 无关联，也未获其背书。Claude、Claude Code 和 Codex 是其各自所有者的商标。",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "AI SEO 专员",
    meta: {
      title: "AI SEO 专员：每天都在干活的 SEO AI agent | Crewmark AI",
      description:
        "AI SEO 专员能做什么、该给它定什么目标和每日流程，以及一份可直接复制到 Claude Code 或 Codex 的岗位说明。也可以在 Crewmark 上招一位，按心跳醒来，持续推进你的 SEO 待办。",
    },
    breadcrumb: "AI SEO 专员",
    title: "AI SEO 专员：每天都在干活的 SEO AI agent",
    lead: "AI SEO 专员是一个被赋予长期任务、专门负责增长自然流量的编程 agent，比如 Claude Code 或 Codex。它每个工作日都会找出大家刚开始搜索的话题，在网站代码里撰写和修改页面，推动收录，并汇报数据变化。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "和一次性的 SEO 提示词不同，SEO 专员对这份工作负责到底：它维护一份关键词地图和工作日志，每次会话都接着上一次的进度往下做。",
      points: [
        "关键词研究：阅读产品新闻和更新日志，再到 Google 自动补全、Trends 和 Search Console 里找有需求、但现有结果不够好的词。",
        "撰写和更新页面：每个 URL 一个主关键词，开头先下定义，接着是步骤、对比表和常见问题。",
        "修复站内问题：标题和描述、内链、重定向、结构化数据和 hreflang。",
        "推动收录：ping IndexNow、重新提交 sitemap、请求编入索引。",
        "汇报：每天一条简短日报，写清流量、距目标的差距和当天做了什么。",
      ],
    },
    goals: [
      ["Search Console 点击量", "每周来自 Google 的点击", "每月 +10%"],
      ["展示次数", "Search Console 每周展示次数", "新站每月 +20%"],
      ["交付页面数", "新上线或重写的页面", "每个工作日一篇"],
      ["已收录页面", "「网页索引编制」报告中的有效页面", "sitemap 的 90%"],
    ],
    routine: [
      "看看有什么变化：你所在市场的新发布、昨天的 Search Console 查询词，以及有展示没点击的页面。",
      "选定一个话题，并在日志里写下选它的理由。",
      "只依据官方资料撰写或重写页面；如果网站有多语言版本，再翻译过去。",
      "在本地测试，然后提交部署请求；它不会自己发布。",
      "页面上线后，ping IndexNow 并请求编入索引，再更新关键词地图。",
      "下班前发出当天的日报。",
    ],
    brief: `# 岗位：SEO 专员
目标：Search Console 点击量每月 +10%。

## 每个工作日
1. 查看我们所在市场的新发布和昨天的查询词。
2. 选一个需求在涨、现有结果偏弱的话题；在日志里写明理由。
3. 撰写或修改页面。事实只取自官方资料。
4. 本地测试，然后提交部署请求。绝不自己发布。
5. 部署后：ping IndexNow、请求编入索引、更新 keywords.md。
6. 发日报：流量、距目标的差距、今天做了什么。

## 规则
- 每个 URL 只有一个主关键词；先查 docs/seo/keywords.md。
- 删除页面、修改重定向或改动内容目录以外的代码前，
  先问人。`,
    tools: "用于调研的网页搜索和抓取、网站仓库和用来测试页面的本地开发服务器、Search Console 和数据分析的只读权限，以及一个提交 IndexNow 的脚本。两者都有时优先用 CLI 而不是 MCP 服务器，更省 token。",
    approvals: "发布应该经过人工或负责部署的人。删除页面、修改重定向、改动内容目录以外的代码或动 DNS 之前，也要先问。",
    related:
      "想一步步用 skill 和 hook 搭出同样的 agent，请看 [AI SEO agent 搭建指南](/blog/ai-seo-agent)。基础组件可参考 [Claude Code skills](/blog/claude-code-skills) 和 [Claude Code hooks](/blog/claude-code-hooks)。",
    mid: {
      title: "想要 SEO 专员，又不想自己搭？",
      text: "Crewmark 的 SEO 专员跑在你的 Claude Code 或 Codex 上，按心跳醒来，持续推进 SEO 待办。",
    },
    faq: [
      {
        q: "AI SEO 专员是什么？",
        a: "一个 AI agent，通常是 Claude Code 或 Codex 这样的编程 agent，被赋予长期增长自然流量的任务：研究关键词、撰写和修改页面、推动收录并汇报结果。",
      },
      {
        q: "AI agent 能自己做 SEO 吗？",
        a: "日常工作大部分可以：调研、写作、翻译、技术修复和请求收录。发布、重定向和任何不可撤销的操作，仍然应该经过人。",
      },
      {
        q: "它和 SEO 工具有什么区别？",
        a: "SEO 工具给你看数据，活还得你自己干。AI SEO 专员直接在你的网站代码里把活干了，再按时向你汇报。",
      },
      {
        q: "AI SEO 专员多久能见效？",
        a: "任何网站做 SEO 都要以周计。新站通常要几周后展示次数才开始增长；第一个目标先定在交付页面数和展示次数上，再看点击。",
      },
      {
        q: "有免费的 SEO AI agent 吗？",
        a: "你可以用已经付费的 agent 来跑，比如 Claude Code 或 Codex，搭配 Google 自动补全、Trends、Search Console 和 IndexNow 这些免费数据源。",
      },
    ],
    cta: "给你的网站配一位从不漏掉检查清单的 SEO 专员。",
  },
  "marketing-agent": {
    name: "AI 营销 agent",
    meta: {
      title: "AI 营销 Agent：自主运行的增长营销，目标、流程与搭建",
      description:
        "能自主在整个漏斗上做实验的 AI 营销 agent（增长营销）：它做什么、该定什么目标、每日流程，以及适用于 Claude Code 或 Codex 的岗位说明。也可以直接在 Crewmark 上招一位。",
    },
    breadcrumb: "AI 营销 agent",
    title: "AI 营销 agent：自己跑起来的增长营销",
    lead: "AI 营销 agent 是一位对增长数字负责的 AI 员工，比如试用注册数，每天都在推进它：读漏斗数据，找出最薄弱的环节，写出改动，以实验形式上线，留下胜出的版本。它基于 Claude Code 或 Codex 这样的编程 agent，可以直接在你自己的代码里改落地页、邮件和埋点。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "它的工作方式就像小公司里的增长营销：一个漏斗，一个数字，大量小实验。",
      points: [
        "漏斗分析：读数据分析，找出访客在落地页、注册和激活之间在哪一步流失。",
        "实验：写下假设，在页面或邮件上做改动，等流量足够后再读结果。",
        "文案：标题、落地页、广告文案和新手引导邮件，写出多个版本用来测试。",
        "生命周期邮件：欢迎序列和召回序列，写好并在你的邮件工具里配置上线。",
        "周报：测了什么、什么胜出、下一步做什么。",
      ],
    },
    goals: [
      ["试用注册数", "数据分析里的每周注册数", "每月 +8%"],
      ["落地页转化率", "每个页面上完成注册的访客比例", "+1 个百分点"],
      ["激活", "完成第一个关键操作的新用户", "每月 +5%"],
      ["实验数量", "启动并读出结果的实验", "每周两个"],
    ],
    routine: [
      "查看昨天的漏斗数据，以及已经攒够数据的实验。",
      "给结束的实验写总结：留下胜出版本，回滚落败版本，记下学到了什么。",
      "挑出漏斗里下一个最薄弱的环节，写一个假设。",
      "在代码或邮件工具里做改动，尽量放在功能开关后面或作为一个变体上线。",
      "任何要花钱或会触达客户的事，先问。",
      "在看板上发一份简短报告。",
    ],
    brief: `# 岗位：增长营销
目标：试用注册数每月 +8%。

## 每个工作日
1. 查看昨天的漏斗数据和正在跑的实验。
2. 数据足够的实验就收尾：保留或回滚，并记录原因。
3. 挑出最薄弱的漏斗环节；写一个假设。
4. 把改动做成一个变体；提交审核请求。
5. 汇报测了什么、什么胜出、下一步做什么。

## 规则
- 每个实验只改一处；不要提前停止测试。
- 花钱、给客户发邮件或调整定价之前，先问人。`,
    tools: "数据分析（产品和网站）的只读权限、网站仓库和本地开发服务器、邮件工具的 API 或 CLI；如果有的话，再加上实验或功能开关工具。",
    approvals: "投放广告花钱、给客户发邮件、调整价格或套餐，或者在新渠道以你的品牌名义发布任何内容之前，都要先问。",
    related:
      "想让 agent 自己开工，请看[如何让 Claude Code 主动工作](/proactive-claude-code)或 [Codex 版](/proactive-codex)。想比较把 agent 当员工来用的平台，请看[最佳 AI 员工平台](/blog/best-ai-employee-platforms)。",
    mid: {
      title: "想要一个在你写代码时自己跑的营销 agent？",
      text: "Crewmark 的增长营销跑在你的 Claude Code 或 Codex 上，按心跳醒来，持续推进你的漏斗实验。",
    },
    faq: [
      {
        q: "AI 营销 agent 是什么？",
        a: "一个被赋予长期营销目标（比如注册数）的 AI agent，它会自己分析漏斗、写文案、跑实验，再把结果汇报给你。",
      },
      {
        q: "AI 营销 agent 能自主运行吗？",
        a: "调研、写作和搭建都可以按计划自动进行，不用每次提示。花钱、给客户发邮件和改价格，应该等人点头。",
      },
      {
        q: "AI 营销 agent 适合小企业吗？",
        a: "它很适合只有一个产品、没有全职营销的小团队：漏斗上的活每天都有人推进，你只需要审核，不用亲自干。",
      },
      {
        q: "能用 Claude 搭一个 AI 营销 agent 吗？",
        a: "可以。Claude Code 加上岗位说明、数据分析和网站代码的访问权限，再排好班就够了；本页的岗位说明可以作为起点。",
      },
      {
        q: "AI 营销 agent 和营销自动化有什么区别？",
        a: "营销自动化执行的是你设计好的固定流程。AI 营销 agent 会自己决定下一步试什么，动手搭出来，再读结果。",
      },
    ],
    cta: "用你已经在用的 agent，给漏斗配一位增长营销。",
  },
  "social-media-manager": {
    name: "AI 社交媒体经理",
    meta: {
      title: "AI 社交媒体经理：会发帖、会复盘的社媒运营 agent",
      description:
        "AI 社交媒体经理能做什么、该给它定什么目标和每日流程，以及适用于 Claude Code 或 Codex 的岗位说明。起草、排期、回复，任何内容公开前都先经你审批。",
    },
    breadcrumb: "AI 社交媒体经理",
    title: "AI 社交媒体经理：会起草、会排期、会复盘的社媒运营 agent",
    lead: "AI 社交媒体经理是一位让你的账号保持活跃的 AI 员工，也就是 AI 社媒运营：它根据团队的新发布写帖子和推文串，排期发布，起草对提及的回复，并摸清哪些内容效果好。它基于 Claude Code 或 Codex 这样的编程 agent，素材来自你的更新日志、文档和笔记。因为帖子是公开的，所以它负责起草，由你审批。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "它的素材就是你们自己的工作：版本发布、文档、博客文章和客户问题。",
      points: [
        "把版本发布和博客文章改写成 X 推文串和 LinkedIn 帖子。",
        "维护内容日历，给审批通过的帖子排期。",
        "起草对提及和评论的回复，交给你审批。",
        "读取每条帖子的数据，记下什么内容受欢迎。",
        "复用有效的做法：格式、时间和话题。",
      ],
    },
    goals: [
      ["粉丝数", "每月净增粉丝", "每月 +5%"],
      ["发布帖子数", "审批通过并发出的帖子", "每个工作日一条"],
      ["互动", "每条帖子的回复、转发和点赞", "逐月上升"],
      ["导流到网站的点击", "数据分析里来自社交媒体的访问", "每月 +10%"],
    ],
    routine: [
      "看看从昨天到现在发布了什么、写了什么。",
      "用你的语气起草当天的帖子，放进内容日历等你审批。",
      "给你审批通过的帖子排期。",
      "起草对新提及的回复；敏感内容转交给人处理。",
      "查看昨天帖子的数据，记下什么有效。",
    ],
    brief: `# 岗位：社交媒体经理
目标：粉丝数每月 +5%。

## 每个工作日
1. 查看新发布的版本、博客文章和文档改动。
2. 用我们的语气起草今天的帖子（X 推文串、LinkedIn 帖子）。
3. 把草稿放到看板上等审批；给审批通过的排期。
4. 起草对新提及的回复；投诉转交给人处理。
5. 记录昨天的数据和有效的做法。

## 规则
- 未经审批，绝不公开发帖或回复。
- 不写无法给出链接佐证的说法；不发关于竞品的帖子。`,
    tools: "你的更新日志、文档和博客（仓库或文件夹）、排期工具的 API 或 CLI、各平台数据分析的只读权限，以及一个放草稿的共享日历或看板。",
    approvals: "一开始，每条公开帖子和回复都要经你审批。关注或私信其他账号、参与有关竞品的讨论、回应投诉之前，也要先问。",
    related:
      "想让多个 agent 并行工作，请看[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents)。想了解 agent 怎样才算员工，请看[什么是 AI 员工](/ai-employees)。",
    mid: {
      title: "想让账号保持活跃，又不想每条都自己写？",
      text: "Crewmark 的社交媒体经理根据你的发布内容起草帖子，给你批准的排期，并汇报哪些内容效果好。",
    },
    faq: [
      {
        q: "AI 社交媒体经理是什么？",
        a: "一个负责日常运营社交账号的 AI agent：它根据你的工作起草帖子，给审批通过的排期，起草回复，并跟踪哪些内容表现好。",
      },
      {
        q: "AI agent 能不经审批就发帖吗？",
        a: "一开始不应该。帖子是公开的，发出去很难收回，所以先从你审批的草稿做起；等你信任它的语气后，再对低风险的格式逐步放开。",
      },
      {
        q: "能用 Claude 搭一个 AI 社交媒体经理吗？",
        a: "可以：Claude Code 加上岗位说明、内容和排期工具的访问权限，再排一个每日计划。本页的岗位说明可以作为起点。",
      },
      {
        q: "有免费的 AI 社交媒体经理吗？",
        a: "你可以用已经付费的 agent 来跑，比如 Claude Code 或 Codex。排期工具和平台 API 可能另有费用。",
      },
      {
        q: "AI 社交媒体经理该写些什么？",
        a: "优先写你们自己的素材：版本发布、教程、客户问题和踩过的坑。这些是它能写准确的内容。",
      },
    ],
    cta: "给你的账号配一位根据你的发布内容写帖子的社媒经理。",
  },
  "software-engineer": {
    name: "AI 软件工程师",
    meta: {
      title: "AI 软件工程师 Agent：基于 Claude Code 或 Codex 的搭建与目标",
      description:
        "能自己领任务、提交带测试的 Pull Request 并请你审核的 AI 软件工程师 agent。它做什么、该定什么目标、每日流程，以及适用于 Claude Code 或 Codex 的岗位说明。",
    },
    breadcrumb: "AI 软件工程师",
    title: "AI 软件工程师：自己领任务、提 PR 的编程 agent",
    lead: "AI 软件工程师是在你团队里有一个正式位置的编程 agent，比如 Claude Code 或 Codex：它从看板上领任务，在自己的代码副本里开分支干活，提交带测试的 Pull Request 并请你审核，不需要你每个任务都去提示它。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "它的工作方式像一位从不漏掉检查清单的初中级工程师：改动小、有测试、PR 说得清楚。",
      points: [
        "领取下一个就绪的任务，或者指派给它的任务。",
        "在自己的分支和代码副本里工作，绝不碰你的工作目录。",
        "编写或更新测试，请你审核之前先跑完检查。",
        "提交 Pull Request，说明改了什么、怎么测试的。",
        "回复审核意见，按要求修改。",
      ],
    },
    goals: [
      ["合并的 Pull Request", "每周合并的 PR 数", "每周 10 个"],
      ["交付周期", "从领取任务到提交 PR 的小时数", "不超过一个工作日"],
      ["审核轮次", "合并前的修改轮数", "一到两轮"],
      ["关闭的 bug", "每周关闭的 bug 任务数", "清空待办里的 bug"],
    ],
    routine: [
      "先看自己打开的 PR 有没有审核意见，优先处理。",
      "领取下一个就绪的任务；有不清楚的地方就在任务下提问。",
      "开分支、改代码、写测试，在本地跑完检查。",
      "提交 PR，把任务移到审核中。",
      "循环往复直到下班，再汇报手头进行中的工作。",
    ],
    brief: `# 岗位：软件工程师
目标：每周合并 10 个 Pull Request。

## 每个任务
1. 读任务描述；有不清楚的地方就在任务下提问。
2. 在自己的代码副本里新建分支工作。
3. 编写或更新测试；跑 lint、类型检查和测试。
4. 提交 PR：改了什么、为什么改、怎么测试的。
5. 接新活之前，先回复审核意见。

## 规则
- 绝不直接推送到 main，也不合并自己的 PR。
- 数据库迁移、升级依赖或删除不是自己写的代码之前，
  先问人。`,
    tools: "代码仓库及其任务跟踪系统、`gh` 或你所用 Git 托管平台的 CLI、项目的测试和 lint 命令，以及每个任务独立的代码副本或 git worktree；详见 [Claude Code worktree 指南](/blog/claude-code-worktree)。",
    approvals: "合并、部署、数据库迁移、升级依赖，以及任何涉及密钥或生产数据的操作，都应该等人来做决定。",
    related:
      "想比较用 Claude Code 还是 Codex 作为引擎，请看 [Claude Code vs Codex](/blog/claude-code-vs-codex)。想同时跑多位工程师，请看[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents) 和 [Claude Code 后台 agent](/blog/claude-code-background-agents)。",
    mid: {
      title: "想加一位自己领任务的工程师？",
      text: "Crewmark 的软件工程师跑在你的 Claude Code 或 Codex 上，按心跳领取任务，提交 PR 供你审核。",
    },
    faq: [
      {
        q: "AI 软件工程师 agent 是什么？",
        a: "一个能自己推进任务的编程 agent，比如 Claude Code 或 Codex：它开分支、改代码、跑测试，再提交 Pull Request 交给人审核。",
      },
      {
        q: "最好的 AI 软件工程师 agent 是哪个？",
        a: "取决于你信任哪个引擎：常见的是 Claude Code 和 Codex，配上岗位说明、独立的代码副本和排班，两者都能当 AI 软件工程师来用。",
      },
      {
        q: "AI 软件工程师能合并自己的代码吗？",
        a: "不应该。合并和部署留给人，让 agent 负责提 PR 和处理审核意见。",
      },
      {
        q: "这和我自己用 Claude Code 有什么区别？",
        a: "你不用再一个个地启动任务。工作时间内，agent 会自己从看板上领下一个任务，你只需要审核 PR，不用再写提示词。",
      },
      {
        q: "能在一个仓库里同时跑多位 AI 工程师吗？",
        a: "可以，只要每位都有自己的分支和代码副本（比如 git worktree），改动就不会互相冲突。",
      },
    ],
    cta: "用你现有的订阅，加一位把任务变成 PR 的工程师。",
  },
  "ui-designer": {
    name: "AI UI 设计师",
    meta: {
      title: "AI UI 设计师 Agent：直接在你的代码里统一界面 | Crewmark AI",
      description:
        "把粗糙页面打磨成统一界面的 AI UI 设计师，直接改在你的代码和组件里。它做什么、该定什么目标、每日流程，以及适用于 Claude Code 或 Codex 的岗位说明。",
    },
    breadcrumb: "AI UI 设计师",
    title: "AI UI 设计师：直接在你的代码里打磨统一的界面",
    lead: "AI UI 设计师是一位直接在代码里改进产品界面的 AI 员工：字体、间距、组件、深色模式和无障碍。它基于 Claude Code 或 Codex 这样的编程 agent，在你的设计系统里工作，而不是另开一份设计稿；它会在浏览器里检查效果，再提交附带前后对比截图的 Pull Request。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "它的产出就是代码，所以你一审核通过，改动就能上线。",
      points: [
        "排查页面上不一致的字体、间距和颜色，用你的设计 token 修好。",
        "把零散的一次性标记抽成共享组件。",
        "补上深色模式并逐一检查。",
        "修复无障碍问题：对比度、焦点状态、标签和键盘操作。",
        "在桌面和手机宽度下截取前后对比图，供你审核。",
      ],
    },
    goals: [
      ["打磨完成的界面", "每周通过它检查清单的界面数", "每周三个"],
      ["无障碍问题", "检测工具报出的未解决问题", "每周下降"],
      ["共享组件", "被组件替换掉的一次性写法", "每周两个"],
      ["视觉回归", "它改动后被报告的 UI bug", "零"],
    ],
    routine: [
      "从看板或自己的排查清单里领下一个界面。",
      "在桌面和手机宽度、浅色和深色模式下各截一张图。",
      "用设计系统的 token 和组件修好它；某个写法反复出现，就抽成组件。",
      "回到浏览器再检查一遍，并跑无障碍检查。",
      "提交附带前后对比截图的 Pull Request。",
    ],
    brief: `# 岗位：UI 设计师
目标：每周打磨 3 个界面。

## 每个界面
1. 截图：桌面和手机，浅色和深色。
2. 只用我们的 token 修正字体、间距和颜色。
3. 复用组件；某个写法反复出现就抽成组件。
4. 检查对比度、焦点状态和标签。
5. 提交附带前后对比截图的 PR。

## 规则
- 不在 token 之外新增颜色、字体或间距值。
- 改文案、关键流程的布局或品牌之前，先问人。`,
    tools: "前端仓库和本地开发服务器、一个它能操控来截图的浏览器、你的设计 token 和组件库，以及一个无障碍检测工具。",
    approvals: "修改品牌（logo、颜色、字体）、文案、注册或结账流程的布局，或者在转化页面上做任何客户会注意到的改动之前，都要先问。",
    related:
      "想让设计师和工程师并行工作，请看[同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents)。想让它自己领活，请看[如何让 Claude Code 主动工作](/proactive-claude-code)。",
    mid: {
      title: "想打磨界面，又不想积压设计需求？",
      text: "Crewmark 的 UI 设计师直接在你的代码和组件里工作，提交附带前后对比截图的 Pull Request。",
    },
    faq: [
      {
        q: "AI UI 设计师是什么？",
        a: "一个直接在代码里改进产品界面的 AI agent：字体、间距、组件、深色模式和无障碍，在浏览器里检查后以 Pull Request 的形式提交。",
      },
      {
        q: "AI UI 设计师能取代 Figma 吗？",
        a: "探索新想法时不能。它负责的是持续把已上线的界面做得统一、无障碍，这部分工作本来就发生在代码里。",
      },
      {
        q: "Claude Code 能做 UI 设计吗？",
        a: "Claude Code 能修改前端代码，配上浏览器工具还能检查效果。岗位说明和设计 token 能让它的改动保持一致。",
      },
      {
        q: "怎么防止 AI 设计师乱改品牌？",
        a: "在岗位说明里限定它只能用你的设计 token，并把品牌、文案和关键流程列为必须先问的事项。",
      },
    ],
    cta: "给你的界面配一位在代码里干活的设计师。",
  },
  "app-designer": {
    name: "AI App 设计师",
    meta: {
      title: "AI App 设计师：在模拟器里检查过的 iOS 和 Android 界面",
      description:
        "在 App 代码里设计 iOS 和 Android 界面、并在模拟器里检查的 AI App 设计师。它做什么、该定什么目标、每日流程，以及适用于 Claude Code 或 Codex 的岗位说明。",
    },
    breadcrumb: "AI App 设计师",
    title: "AI App 设计师：移动端界面，做好后在模拟器里检查",
    lead: "AI App 设计师是一位在 App 自己的代码里设计和打磨 iOS、Android 界面的 AI 员工，每次请你审核之前，都会先在模拟器里检查一遍。它基于 Claude Code 或 Codex 这样的编程 agent，遵循各平台的设计规范和你的组件，还能准备 App Store 截图。本文介绍它做什么、该给它定什么目标和流程，并附一份可以直接复制的岗位说明。",
    does: {
      text: "它直接在 App 的代码里做设计，所以你审核的就是最终上线的样子。",
      points: [
        "用你的组件搭新界面，并打磨已有界面。",
        "遵循 iOS 和 Android 的规范：导航、安全区域、动态字体和触控区域。",
        "在模拟器里运行 App，每次改动都截图。",
        "检查深色模式、大小屏幕和无障碍标签。",
        "准备 App Store 和 Google Play 截图。",
      ],
    },
    goals: [
      ["交付界面数", "每周合并的新界面或重新设计的界面", "每周两个"],
      ["模拟器检查", "附带大小屏设备截图的改动", "每次改动"],
      ["无障碍", "支持无障碍标签和动态字体的界面", "所有新界面"],
      ["商店截图", "每次发版时更新的截图", "每次发版"],
    ],
    routine: [
      "从看板上领下一个界面。",
      "用 App 的组件搭建或调整它。",
      "在模拟器里用小屏和大屏设备、浅色和深色模式各跑一遍。",
      "修好看着不对的地方，再截图。",
      "提交附带截图的 Pull Request。",
    ],
    brief: `# 岗位：App UI 设计师
目标：每周 2 个 App 界面。

## 每个界面
1. 用我们的组件和平台规范搭建。
2. 在模拟器里运行：小屏和大屏设备，浅色和深色。
3. 检查安全区域、动态字体、触控区域和标签。
4. 提交附带模拟器截图的 PR。

## 规则
- 未经询问，不改导航结构或新手引导。
- 不向 App Store 或 Google Play 提交构建。`,
    tools: "App 的仓库，运行机器上的 Xcode 和 iOS 模拟器或 Android Studio 和模拟器，一种截图的方式，以及你的组件库。",
    approvals: "修改导航、新手引导或付费墙界面之前要先问，也绝不能让它自己提交构建或编辑商店页面。",
    related:
      "负责界面背后逻辑的工程师，请看 [AI 软件工程师](/ai-employees/software-engineer)。网页界面请看 [AI UI 设计师](/ai-employees/ui-designer)。",
    mid: {
      title: "想让 App 界面自动打磨好？",
      text: "Crewmark 的 App UI 设计师在你的代码里搭建 iOS 和 Android 界面，并在模拟器里检查。",
    },
    faq: [
      {
        q: "AI App 设计师是什么？",
        a: "一个在 App 自己的代码里设计和打磨移动端界面的 AI agent，请你审核之前会先在 iOS 模拟器或 Android 模拟器里检查。",
      },
      {
        q: "AI agent 能设计 iOS 界面吗？",
        a: "在装有 Xcode 的 Mac 上，Claude Code 或 Codex 这样的编程 agent 可以写 SwiftUI 或 UIKit 界面，在模拟器里运行 App 并截图查看效果。",
      },
      {
        q: "AI App 设计师和 AI App 设计生成器是一回事吗？",
        a: "不是。生成器根据提示词生成设计稿。AI App 设计师在你真实 App 的代码里、用你的组件工作，并提交 Pull Request。",
      },
      {
        q: "它能做 App Store 截图吗？",
        a: "可以，从模拟器里截。提交截图和构建，应该留给人来做。",
      },
    ],
    cta: "给你的 App 配一位每个界面都在模拟器里检查的设计师。",
  },
};
