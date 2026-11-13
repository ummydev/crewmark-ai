import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";
import { aiEmployeesTranslations } from "./i18n";

// Copy for /ai-employees: what an AI employee is, how it differs from an AI agent, examples by role and how to hire
// one, for "what is an AI employee", "AI employee examples", "hire an AI employee" and "AI employee vs AI agent"
// searches (docs/seo/keywords.md). aiemployee.space redirects here. It explains the category and leaves "AI employees
// that run on Claude Code" to the home page. Written in every language the site has: English and Chinese here, the rest in content/i18n/. The roles match the marketplace presets in
// messages/*.json (Landing.marketplace); keep them in step.

export const AI_EMPLOYEES_LOCALES = guideLocales["/ai-employees"];
export type AiEmployeesLocale = (typeof AI_EMPLOYEES_LOCALES)[number];

export const aiEmployees: Record<AiEmployeesLocale, GuideCopy> = {
  ...aiEmployeesTranslations,
  en: {
    meta: {
      title: "What Is an AI Employee? Definition, Examples and How to Hire One | Crewmark",
      description:
        "An AI employee is an AI agent with a role, a goal and working hours that takes work from a board. See how it differs from an AI agent, examples and how to hire one.",
    },
    breadcrumb: "AI employees",
    hero: {
      kicker: "AI employees",
      title: "What is an AI employee?",
      lead: "An AI employee is an AI agent that you give a job instead of a prompt: a role, a goal measured in numbers, working hours and a place to receive work. It wakes up on its own, picks up the next task, reports progress and asks you when it's stuck, the way a new hire would. This guide explains how that differs from an AI agent or a chatbot, shows examples by role, and walks through hiring your first one.",
      cta: "Get early access",
      secondary: "See examples",
      secondaryHref: "#examples",
    },
    sections: [
      {
        kind: "text",
        title: "AI employee: a definition",
        text: [
          "An AI employee is an autonomous AI agent set up to do an ongoing job, not a single task. It has the same parts a human role has:",
        ],
        points: [
          "A role, such as SEO specialist or software engineer, which decides what it works on and which tools it uses.",
          "A goal in numbers, such as 10% more Search Console clicks a month, which it plans its work toward.",
          "Working hours and a heartbeat: it wakes up on a schedule during its shift and sleeps outside it.",
          "A work queue, usually a board of issues, where you assign it tasks and see their status.",
          "A way to reach you: it asks for reviews, permissions and missing facts instead of guessing.",
        ],
      },
      {
        kind: "table",
        id: "vs-ai-agent",
        title: "AI employee vs AI agent vs chatbot",
        text: [
          "The three terms overlap, and vendors use them loosely. The useful difference is who starts the work and how long the job lasts.",
        ],
        headers: ["", "Chatbot", "AI agent", "AI employee"],
        rows: [
          ["Starts work", "When you send a message", "When you give it a task", "On its own, on a schedule"],
          ["Scope", "One answer", "One task, many steps", "An ongoing role"],
          ["Acts on tools", "Rarely", "Yes: files, code, browser, APIs", "Yes, the same tools as the agent it runs on"],
          ["Measured by", "The answer", "Whether the task is done", "A goal or KPI over weeks"],
          ["Memory between runs", "The chat history", "Usually none", "Its issues, comments and notes"],
          ["When stuck", "Waits for you", "Stops or guesses", "Messages you and moves to other work"],
        ],
      },
      {
        kind: "text",
        id: "examples",
        title: "AI employee examples by role",
        text: [
          "AI employees work best in jobs where the output can be checked and the goal can be counted. Six roles that work well today:",
        ],
        points: [
          "SEO specialist: finds missing keywords, fixes titles and internal links, submits sitemaps and reports what moved. Goal: Search Console clicks.",
          "Growth marketer: reads the funnel, sets up A/B tests, drafts ad copy and keeps the variants that win. Goal: trial sign-ups.",
          "Social media manager: drafts and schedules posts, answers mentions and learns which posts land. Goal: followers or engagement.",
          "Software engineer: picks up bugs, opens pull requests with tests and asks for review. Goal: merged pull requests.",
          "UI designer: tidies type, spacing and components in your real code and checks dark mode and accessibility. Goal: screens shipped.",
          "App UI designer: designs iOS and Android screens and checks them in the simulator. Goal: app screens shipped.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to hire your first AI employee",
        steps: [
          {
            title: "Pick one job with a number attached",
            text: "Start with a role whose results you can count and check, like SEO or bug fixing. Write the goal the way you would for a person: “10% more Search Console clicks a month”, not “help with SEO”.",
          },
          {
            title: "Choose the agent it runs on",
            text: "An AI employee needs a capable agent underneath that can read files, run commands and use tools. Claude Code and Codex are the strongest today, and a subscription you already pay for can run it, so there is no separate token bill.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Decide when it's on the clock and how often it wakes up, for example every 30 minutes from 9:00 to 18:00 on weekdays. A heartbeat is what makes it proactive; see how to do this by hand in [Claude Code](/proactive-claude-code) or [Codex](/proactive-codex), or run a one-off job with [Claude Code in headless mode](/blog/claude-code-background-agents).",
          },
          {
            title: "Give it a board, not a chat",
            text: "Assign work as issues with a status, a priority and comments. The employee picks the next one on each heartbeat, updates it as it goes and leaves a record you can review later.",
          },
          {
            title: "Decide what needs your yes",
            text: "List the actions it may take alone and the ones it must ask about, such as publishing, merging, spending money or touching production. Approve those from one inbox.",
          },
          {
            title: "Review weekly against the goal",
            text: "Check the number, read what it shipped and adjust its backlog, the same one-on-one you'd have with a person. Add a second employee only when the first one is paying off.",
          },
        ],
      },
      {
        kind: "text",
        title: "What an AI employee costs",
        text: [
          "There are two common models. Some platforms charge per employee per month and run the model for you. Others, like Crewmark, run the employee inside an agent you already subscribe to, such as Claude Code or Codex, so the cost is the plan you already have.",
          "Either way it costs far less than a full-time hire, but it isn't free of your time: plan to spend a few minutes a day answering questions and reviewing work, especially in the first weeks.",
          "For prices, free plans and how work starts on eight platforms side by side, see [the best AI employee platforms compared](/blog/best-ai-employee-platforms).",
        ],
      },
      {
        kind: "text",
        title: "What AI employees can't do (yet)",
        points: [
          "Own a decision. They suggest, and someone accountable still approves anything risky.",
          "Work without access. An AI employee is only as useful as the tools, accounts and context you give it.",
          "Replace judgment in unclear jobs. Roles with fuzzy goals, lots of meetings or relationship work still need people.",
          "Run while your computer is off, if it works on local files. Cloud setups can, local ones can't.",
        ],
      },
      {
        kind: "steps",
        kicker: "With Crewmark",
        title: "Hire an AI employee on Crewmark",
        text: [
          "Crewmark turns your Claude Code or Codex agent into an AI employee: a role, a goal, working hours and a heartbeat, with work assigned on a shared board.",
        ],
        steps: [
          {
            title: "Pick a role from the marketplace",
            text: "Ready-made employees come with their skills, goal and schedule set up: SEO specialist, growth marketer, social media manager, software engineer, UI designer and app UI designer.",
          },
          {
            title: "Connect the agent you already pay for",
            text: "Run the setup command in Claude Code, Codex, DeepSeek Harness or OpenCode. That conversation becomes the employee and keeps its memory between wake-ups.",
          },
          {
            title: "Assign issues and answer its messages",
            text: "It wakes on its heartbeat, takes the next issue, comments as it works and messages you when it needs a review or a permission. You can check in from your phone too; see [Claude Code Remote Control](/remote-claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "How to hire your first AI employee" },
    mid: {
      title: "Hire one without a new token bill",
      text: "Crewmark gives your Claude Code or Codex agent a role, a goal and working hours, and runs it on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "AI employee FAQ",
      items: [
        {
          q: "What is an AI employee?",
          a: "An AI agent set up to do an ongoing job: it has a role, a goal in numbers, working hours and a queue of work, starts on its own on a schedule and asks a person when it's stuck.",
        },
        {
          q: "What's the difference between an AI employee and an AI agent?",
          a: "An AI agent does a task when you ask. An AI employee is an agent given a standing role: it starts work on its own, keeps a backlog and is measured on a goal over weeks.",
        },
        {
          q: "Can an AI employee replace a human employee?",
          a: "For narrow, measurable work like SEO fixes or routine bugs it can take over much of the doing. Decisions, relationships and unclear problems still need a person, and someone has to review its work.",
        },
        {
          q: "What jobs are AI employees good at?",
          a: "Jobs with checkable output and a countable goal: SEO, growth experiments, social posts, bug fixes, UI polish and app screens.",
        },
        {
          q: "How much does an AI employee cost?",
          a: "It depends on the model: some platforms charge per employee per month, while Crewmark runs employees on the Claude Code or Codex plan you already pay for, with no extra token bill.",
        },
        {
          q: "Is an AI employee safe to give access to?",
          a: "Give it only the access the role needs, and require your approval for publishing, merging, payments and production changes. A good setup logs every step so you can review it.",
        },
      ],
    },
    cta: {
      title: "Hire your first AI employee.",
      text: "Give your Claude Code or Codex agent a role, a goal and working hours, and assign it work on a board.",
      button: "Get early access",
    },
    checked: "Last reviewed November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude Code is a trademark of Anthropic; Codex is a trademark of OpenAI.",
  },
  zh: {
    meta: {
      title: "什么是 AI 员工？定义、岗位例子和招聘方法 | Crewmark",
      description:
        "AI 员工是有岗位、有目标、有工作时间、从看板领活的 AI agent。看它和 AI agent、聊天机器人有什么不同，有哪些岗位例子，怎么招第一个 AI 员工。",
    },
    breadcrumb: "AI 员工",
    hero: {
      kicker: "AI 员工",
      title: "什么是 AI 员工？",
      lead: "AI 员工是你交给它一份工作、而不是一句提示词的 AI agent：有岗位，有用数字衡量的目标，有工作时间，有接活的地方。它会自己醒来，领下一个任务，汇报进度，卡住了就来问你，就像一个新同事。这篇讲清楚它和 AI agent、聊天机器人的区别，按岗位举例，并一步步带你招第一个 AI 员工。",
      cta: "申请抢先体验",
      secondary: "看岗位例子",
      secondaryHref: "#examples",
    },
    sections: [
      {
        kind: "text",
        title: "AI 员工的定义",
        text: ["AI 员工是被安排去做一份持续工作、而不是单个任务的自主 AI agent。它具备一个人类岗位的几个要素："],
        points: [
          "岗位，比如 SEO 专员或软件工程师，决定它做什么、用哪些工具。",
          "用数字写的目标，比如每月 Search Console 点击 +10%，它围绕目标安排工作。",
          "工作时间和心跳：上班时间内按节奏醒来，下班就休息。",
          "工作队列，通常是一块任务看板，你在上面派活、看进度。",
          "找你的渠道：需要审核、权限或缺信息时来问你，而不是瞎猜。",
        ],
      },
      {
        kind: "table",
        id: "vs-ai-agent",
        title: "AI 员工、AI agent 和聊天机器人有什么区别",
        text: ["这三个词有重叠，各家用法也不统一。真正有用的区别是：谁来启动工作，这份工作持续多久。"],
        headers: ["", "聊天机器人", "AI agent", "AI 员工"],
        rows: [
          ["什么时候开工", "你发消息时", "你给它任务时", "自己按时开工"],
          ["工作范围", "一个回答", "一个任务，多个步骤", "一个持续的岗位"],
          ["能否操作工具", "很少", "能：文件、代码、浏览器、API", "能，和它所运行的 agent 一样"],
          ["怎么衡量", "回答好不好", "任务做没做完", "几周内的目标或 KPI"],
          ["跨次记忆", "聊天记录", "通常没有", "任务、评论和笔记"],
          ["卡住时", "等你", "停下或瞎猜", "给你发消息，先做别的"],
        ],
      },
      {
        kind: "text",
        id: "examples",
        title: "AI 员工岗位例子",
        text: ["产出能检查、目标能计数的工作，最适合交给 AI 员工。目前效果好的六个岗位："],
        points: [
          "SEO 专员：找缺的关键词，改标题和内链，提交 sitemap，汇报变化。目标：Search Console 点击。",
          "增长营销：看漏斗，做 A/B 测试，写广告文案，留下效果好的版本。目标：试用注册数。",
          "社媒运营：写帖子、排期发布、回复提及，摸清什么内容受欢迎。目标：粉丝或互动。",
          "软件工程师：领 bug，提带测试的 PR，请你审核。目标：合并的 PR 数。",
          "UI 设计师：在真实代码里统一字体、间距和组件，检查深色模式和无障碍。目标：交付的页面数。",
          "App UI 设计师：设计 iOS 和 Android 界面，在模拟器里检查。目标：交付的 App 页面数。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "怎么招第一个 AI 员工",
        steps: [
          {
            title: "选一份有数字的工作",
            text: "从结果能计数、能检查的岗位开始，比如 SEO 或修 bug。像给人定目标一样写清楚：“每月 Search Console 点击 +10%”，而不是“帮忙做做 SEO”。",
          },
          {
            title: "选它运行的 agent",
            text: "AI 员工底下需要一个能读文件、跑命令、用工具的强 agent。目前最强的是 Claude Code 和 Codex，用你已经付费的订阅就能跑，不用另付 token 费。",
          },
          {
            title: "定好工作时间和心跳",
            text: "决定它几点上班、多久醒一次，比如工作日 9:00 到 18:00 每 30 分钟一次。心跳让它主动干活；手动怎么配，看 [Claude Code](/proactive-claude-code) 和 [Codex](/proactive-codex) 的教程；一次性的任务可以用 [Claude Code 的 headless 模式](/blog/claude-code-background-agents)。",
          },
          {
            title: "给它一块看板，而不是一个聊天框",
            text: "用带状态、优先级和评论的任务派活。员工每次心跳领下一个任务，边做边更新，留下你之后能翻看的记录。",
          },
          {
            title: "定好哪些事要你点头",
            text: "列出它能自己做的事，和必须先问你的事，比如发布、合并代码、花钱、动线上环境。这些审批放在一个收件箱里处理。",
          },
          {
            title: "每周对照目标复盘",
            text: "看数字，看它交付了什么，调整它的任务清单，就像和同事一对一。第一个员工见效了，再招第二个。",
          },
        ],
      },
      {
        kind: "text",
        title: "AI 员工要花多少钱",
        text: [
          "常见有两种模式。一种平台按员工按月收费，模型由平台来跑。另一种像 Crewmark，让员工跑在你已经订阅的 agent 里，比如 Claude Code 或 Codex，成本就是你现有的套餐。",
          "无论哪种，都比招一个全职员工便宜得多，但也要花你的时间：每天留几分钟回答问题、审核产出，头几周尤其如此。",
          "8 个平台的价格、免费方案和启动方式并排对比，见 [最佳 AI 员工平台对比](/blog/best-ai-employee-platforms)。",
        ],
      },
      {
        kind: "text",
        title: "AI 员工（目前）做不到什么",
        points: [
          "替你拍板。它会提建议，有风险的事仍要负责的人批准。",
          "没有权限也能干活。它能做多少，取决于你给它的工具、账号和背景信息。",
          "在目标模糊的岗位上替代判断。目标不清、会议多、靠人际关系的工作，还是要人来做。",
          "在电脑关机时继续干活（如果它用本地文件）。云端方案可以，本地方案不行。",
        ],
      },
      {
        kind: "steps",
        kicker: "用 Crewmark",
        title: "在 Crewmark 上招 AI 员工",
        text: ["Crewmark 把你的 Claude Code 或 Codex agent 变成 AI 员工：有岗位、有目标、有工作时间和心跳，在共享看板上领活。"],
        steps: [
          {
            title: "在市场里选一个岗位",
            text: "现成的员工自带技能、目标和排班：SEO 专员、增长营销、社媒运营、软件工程师、UI 设计师和 App UI 设计师。",
          },
          {
            title: "接入你已经付费的 agent",
            text: "在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 里运行设置命令。这个对话就成了这名员工，两次醒来之间它记得做过的事。",
          },
          {
            title: "派任务，回消息",
            text: "它按心跳醒来，领下一个任务，边做边评论，需要审核或权限时给你发消息。你也可以在手机上查看进度，见 [Claude Code 远程控制](/remote-claude-code)。",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "怎么招第一个 AI 员工" },
    mid: {
      title: "招一个 AI 员工，不用另付 token 费",
      text: "Crewmark 给你的 Claude Code 或 Codex agent 一个岗位、一个目标和工作时间，跑在你已经付费的套餐上。",
      button: "申请抢先体验",
    },
    faq: {
      title: "AI 员工常见问题",
      items: [
        {
          q: "什么是 AI 员工？",
          a: "被安排去做一份持续工作的 AI agent：有岗位、有数字目标、有工作时间和任务队列，按时自己开工，卡住了会找人。",
        },
        {
          q: "AI 员工和 AI agent 有什么区别？",
          a: "AI agent 是你让它做才做一个任务。AI 员工是被赋予固定岗位的 agent：自己开工，自己维护任务清单，按几周内的目标来衡量。",
        },
        {
          q: "AI 员工能替代真人员工吗？",
          a: "像 SEO 修复、常规 bug 这类范围窄、能衡量的工作，大部分执行可以交给它。决策、人际关系和模糊的问题仍需要人，它的产出也要有人审核。",
        },
        {
          q: "哪些工作适合交给 AI 员工？",
          a: "产出能检查、目标能计数的工作：SEO、增长实验、社媒内容、修 bug、UI 打磨和 App 界面。",
        },
        {
          q: "AI 员工要多少钱？",
          a: "看模式：有的平台按员工按月收费；Crewmark 让员工跑在你已经付费的 Claude Code 或 Codex 套餐上，不另收 token 费。",
        },
        {
          q: "给 AI 员工开权限安全吗？",
          a: "只给岗位需要的权限，发布、合并、付款和线上改动都要你批准。好的方案会记录每一步，方便你复查。",
        },
      ],
    },
    cta: {
      title: "招你的第一个 AI 员工。",
      text: "给你的 Claude Code 或 Codex agent 一个岗位、一个目标和工作时间，在看板上给它派活。",
      button: "申请抢先体验",
    },
    checked: "最后核对：2026 年 11 月 2 日。",
    disclaimer:
      "Crewmark 是独立产品，与 Anthropic、OpenAI 无关，也未获其背书。Claude Code 是 Anthropic 的商标，Codex 是 OpenAI 的商标。",
  },
};
