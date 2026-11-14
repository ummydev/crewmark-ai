import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: 找出今天的 SEO 选题。在每次 SEO 工作会话开始时使用。
---

1. 查看读者所用产品的更新日志和新闻。
2. 对每个候选选题，抓取 Google 自动补全建议，
   记下大家已经在输入的长尾变体。
3. 只保留和我们产品相关、且搜索结果第一页
   还没有好答案的选题。
4. 把选中的选题、理由和被否决的选题写进
   docs/seo/log.md，然后起草页面。`;

const claudeMd = `# SEO 规则
- 事实只取自官方文档；注明查证日期。
- 每个页面开头用一句话下定义，接着是步骤、
  对比表和常见问题。
- 每个 URL 只有一个主关键词；先查 docs/seo/keywords.md。
- 部署之后：ping IndexNow、请求编入索引、记录到日志。`;

export const copy: GuideCopy = {
  meta: {
    title: "AI SEO Agent：用 Claude Code 搭建的方法 | Crewmark AI",
    description:
      "AI SEO agent 能做什么、行之有效的每日工作流，以及如何用 Claude Code 或 Codex 搭建一个：CLAUDE.md 规则、skill、MCP、IndexNow 和定时运行。基于负责本站 SEO 的 agent 的实际经验。",
  },
  breadcrumb: "AI SEO agent",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI 员工",
    title: "AI SEO agent：如何搭建一个每天都在干活的 SEO 智能体",
    lead: "AI SEO agent（AI SEO 智能体）是一个被赋予了增长自然流量这份工作的编程 agent，比如 Claude Code 或 Codex：它找出大家开始搜索的话题，撰写并翻译页面，把页面上线，请求搜索引擎收录，再检查哪些数字有了变化。本站的 SEO 就是这样做的，由 Crewmark 上的一名 AI 员工负责。本文介绍它遵循的工作流、让它保持靠谱的规则和 skill、它需要的工具，以及怎样搭建你自己的 AI SEO agent。",
    cta: "开始使用",
    secondary: "直接看搭建步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "AI SEO agent 能做什么",
      points: [
        "找选题：阅读产品更新日志和新闻，再查 Google 自动补全和 Google Trends，看看大家已经在搜哪些问题。",
        "避免自家页面互相抢排名：维护一份关键词地图，每个 URL 只对应一个主关键词，动笔前先查。",
        "写出先回答问题的页面：一句话定义、步骤、对比表和常见问题，这种结构也适合会引用网页的 AI 助手。",
        "翻译并上线：为你支持的每种语言生成页面，在本地测试，然后交给负责部署的人。",
        "让页面被收录：ping IndexNow、重新提交站点地图并请求编入索引。",
        "衡量并调整：查看 Search Console 和分析数据，对有展示却没点击的页面重写标题或补充内链。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何用 Claude Code 搭建 AI SEO agent",
      steps: [
        {
          title: "把规则写进 CLAUDE.md",
          text: "把不容商量的规矩放在 agent 每次会话都会读到的地方：事实可以从哪里来、页面怎么组织、每次部署后要做什么。参见 [CLAUDE.md 指南](/blog/claude-md)。",
          code: claudeMd,
        },
        {
          title: "把每日例行工作做成 skill",
          text: "`.claude/skills/` 里的 skill 存放一步一步的例行流程，只在用到时才加载。每次会话都从它开始。参见 [Claude Code skill](/blog/claude-code-skills)。",
          code: skill,
        },
        {
          title: "在代码库里维护关键词地图和日志",
          text: "两个 Markdown 文件就能解决很多问题：`keywords.md`（关键词 → URL → 状态）防止两个页面争抢同一个搜索词，`log.md` 记录选了什么、为什么选，让下一次会话接着干，而不是从头再来。",
        },
        {
          title: "给它需要的工具",
          text: "用于调研的网页搜索和抓取、网站代码和用来测试页面的本地开发服务器、接入分析数据的 MCP 服务器或 CLI，以及一个调用 IndexNow 的脚本。有 CLI 就优先用 CLI，消耗的 token 更少。参见 [Claude Code MCP](/blog/claude-code-mcp)。",
        },
        {
          title: "把住高风险的步骤",
          text: "发布应该经过审核或由负责部署的人执行，绝不能由 agent 直接上线。对绝不能发生的操作，用权限规则和 [hooks](/blog/claude-code-hooks) 拦住，也不要把密钥写进提示词和文件。",
        },
        {
          title: "让它按计划运行",
          text: "SEO 看重持续产出，所以 agent 应该每个工作日自己开工。单个重复执行的提示词可以用 `/loop` 或定时任务；也可以给它心跳和一份待办清单，参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
      ],
      source: { label: "来源：IndexNow 文档", href: indexnow },
    },
    {
      kind: "table",
      title: "AI SEO 每日工作流",
      text: [
        "这是本站背后那名 AI SEO 员工每天逐项完成的检查清单，最后会写一份书面报告。",
      ],
      headers: ["步骤", "agent 做什么", "产出"],
      rows: [
        ["1. 发现", "浏览最近 1–3 天的更新日志、厂商博客、GitHub 和新闻；拉取自动补全和 Trends 数据", "一份简短的候选选题清单"],
        ["2. 验证", "确认选题和产品相关、需求在上升，且第一页还没有好答案", "选定一个选题，并记录理由"],
        ["3. 撰写", "只依据官方来源起草，然后翻译", "每种语言各一个页面"],
        ["4. 上线", "类型检查、本地渲染、提交部署请求", "页面在网站上线"],
        ["5. 收录", "ping IndexNow、重新提交站点地图，在 Search Console 和 Bing 请求编入索引", "已通知搜索引擎"],
        ["6. 汇报", "记录流量、距目标的差距和完成的工作", "给团队的每日报告"],
      ],
    },
    {
      kind: "text",
      title: "实际运行中的经验",
      points: [
        "动笔前先确认需求：社交媒体上的热词，搜索量可能很小；Google Trends 曾显示，一个相关词的搜索量约是大家都在讨论的那个词的 30 倍。",
        "事实只取自一手来源：agent 的调研 subagent 有时会读错页面；发布任何出人意料的内容前，重新打开官方来源核对。",
        "对新网站来说，收录是瓶颈：请求编入索引后，新页面大约一天内就进了 Google，但每日配额很快就会用完。",
        "多语言让页面数成倍增加，工作量却不会：一个结构清晰的英文页面，加一步翻译就变成九个。",
        "稳定胜过突击：目标是 agent 不用催也能保持的每日节奏。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "直接雇一名 AI SEO 专员，而不是自己写脚本",
      text: [
        "Crewmark 有现成可雇的 SEO 专员：它在你的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话里运行，工作时间内按心跳醒来，从看板上接下一个 issue 并汇报进展，本站的 SEO 就是这样做的。",
      ],
      steps: [
        {
          title: "选择 SEO 专员岗位",
          text: "它的 skill、目标和日程都已设置好；把目标改成你自己的数字，比如每周的 Search Console 点击量。目标、每日流程和岗位说明见 [AI SEO 专员](/ai-employees/seo-specialist)。",
        },
        {
          title: "连接你的项目",
          text: "在网站的代码库里运行设置命令，让它能写页面、测试页面并提交部署请求。",
        },
        {
          title: "审阅就好，不用盯着",
          text: "它会在自己的 issue 下评论，需要你拍板时给你发消息。了解[什么是 AI 员工](/ai-employees)，并对比[各家 AI 员工平台](/blog/best-ai-employee-platforms)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 Claude Code 搭建 AI SEO agent" },
  mid: {
    title: "想要 SEO agent，又不想自己搭？",
    text: "Crewmark 的 SEO 专员跑在你的 Claude Code 或 Codex 上，按心跳醒来，逐项处理 SEO 待办。",
    button: "开始使用",
  },
  faq: {
    title: "AI SEO agent 常见问题",
    items: [
      {
        q: "什么是 AI SEO agent？",
        a: "一个 AI agent，通常是 Claude Code 或 Codex 这样的编程 agent，被赋予了持续增长自然流量的工作：找选题、撰写并上线页面、让页面被收录，并衡量效果。",
      },
      {
        q: "AI agent 能自己做 SEO 吗？",
        a: "日常工作大部分可以：调研、撰写、翻译、技术检查和请求收录。发布、账号以及任何不可逆的操作，仍应经过人或负责部署的人。",
      },
      {
        q: "有免费的 AI SEO agent 吗？",
        a: "你可以在已经付费的 agent 上搭一个，比如 Claude 套餐里的 Claude Code 或 ChatGPT 里的 Codex，再配上 Google 自动补全、Google Trends、Search Console 和 IndexNow 这些免费工具。",
      },
      {
        q: "AI SEO agent 需要哪些工具？",
        a: "网页搜索和抓取、网站代码的访问权限和测试页面的方法、Search Console 和分析数据的读取权限，以及通知搜索引擎的方法，比如 IndexNow。",
      },
      {
        q: "怎样防止 AI SEO agent 发布错误事实？",
        a: "在规则里要求使用官方来源并注明查证日期，让它在发布出人意料的说法前重新打开来源核对，并让发布经过审核。",
      },
      {
        q: "AI 写的页面能有排名吗？",
        a: "页面靠有用获得排名，而不是看谁写的。率先回答一个真实且热度上升的问题、步骤和对比准确的页面，正是 AI SEO agent 应该产出的。",
      },
      {
        q: "做 SEO 该用 n8n 还是编程 agent？",
        a: "工作流工具适合固定的流水线；编程 agent 适合需要判断和改代码的工作，比如把页面写进代码库并测试。",
      },
    ],
  },
  cta: {
    title: "给你的网站配一名从不忘记检查清单的 SEO 队友。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "工作流来自本站 AI SEO 员工的实际运行；Claude Code 和 IndexNow 的细节已于 2026 年 11 月 7 日对照其文档查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、OpenAI 或 Google 无关，也未获其背书。产品名称是其所有者的商标。",
};
