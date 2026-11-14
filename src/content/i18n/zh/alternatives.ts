import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip)：自托管的开源编排工具，管理一整个公司的 agent。"],
    ["multica", "[Multica](/alternatives/multica)：给编程 agent CLI 用的 issue 看板，可用云端版，也可自托管。"],
    ["crewai", "[CrewAI](/alternatives/crewai)：用 API key 搭建多 agent 工作流的 Python 框架。"],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const closing = (product: string) => ({
  title: `试试用 Crewmark 替代 ${product}。`,
  text: "给你的 Claude Code 或 Codex agent 一个岗位、一个目标和工作时间，在看板上给它派活。",
  button: "开始使用",
});

const mid = {
  title: "用你已经付费的套餐招一个 AI 员工",
  text: "Crewmark 按心跳唤醒你的 Claude Code 或 Codex 会话，从看板上给它派下一个 issue。",
  button: "开始使用",
};

const disclaimer = (owner: string) =>
  `Crewmark 是独立产品，与 ${owner} 无关，也未获其背书。产品名称是其各自所有者的商标。关于其他产品的信息来自它们的公开文档，之后可能已有变化。`;

const newToIdea = "第一次听说这个概念？读读[什么是 AI 员工](/ai-employees)。";

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Paperclip AI 替代方案：Crewmark vs Paperclip | Crewmark AI",
      description:
        "在找 Paperclip AI 的替代品？从部署方式、agent、心跳、目标和上手难度对比 Crewmark 和 Paperclip，看哪个更适合你的团队。",
    },
    breadcrumb: "Paperclip 替代品",
    hero: {
      kicker: "Paperclip 替代品",
      title: "Crewmark 与 Paperclip 对比",
      lead: "Paperclip 和 Crewmark 都能把 Claude Code、Codex 这类编程 agent 变成一个按计划领活的团队。Paperclip 是你自己部署的开源服务器，用来编排一整个公司的 agent；Crewmark 是托管的看板，每个 agent 都是一名员工，有岗位、数字目标和工作时间。下面是两者的对比。",
      cta: "开始使用",
      secondary: "看对比",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Paperclip 是什么",
        text: [
          "Paperclip 是一个 MIT 许可的 Node.js 服务器加 React 界面，用来“编排一支 AI agent 团队来经营一家公司”。你定一个公司目标，搭一张有岗位、汇报关系和预算的组织架构图，再通过适配器雇用 agent：Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw 等。",
          "agent 会因为被分配 issue、有后续跟进或可选的定时心跳而醒来；例行任务（routines）按 cron 或 webhook 运行；预算、审批和招聘审批让人始终掌控全局。它目前只能自托管，云端版还在排队等候名单阶段。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 与 Paperclip 一览",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["部署方式", "自托管（Node.js 24+ 或 Docker）；云端版在等候名单中", "托管的网页应用，加上你电脑上的一个小 daemon"],
          ["许可证", "开源，MIT", "商业产品，开放注册"],
          ["Agent", "Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw 等，或 API key", "Claude Code、Codex、DeepSeek Harness 和 OpenCode"],
          ["工作单位", "关联到公司和项目目标的 issue", "看板上的 issue"],
          ["组织方式", "组织架构图：岗位、汇报关系、预算", "员工：岗位、数字 KPI、工作时间"],
          ["agent 何时醒来", "分配的工作、消息、可选的定时心跳、例行任务", "工作时间内每 15、30 或 60 分钟一次心跳"],
          ["花费控制", "按公司、按 agent、按项目的预算", "跑在你现有的订阅上；下班时间休眠"],
          ["卡住时", "审批流程和评论", "给你发一条私信，然后先做别的"],
        ],
      },
      {
        kind: "text",
        title: "该选哪一个？",
        points: [
          "如果你想要能自托管、能修改的开源软件，需要给很多 agent 配预算和组织架构，或者要用 Crewmark 不支持的 agent（比如 Cursor 或 Gemini CLI），选 Paperclip。",
          "如果你不想自己跑服务器，希望每个 agent 都用一个数字衡量（点击、注册、合并的 PR）并遵守工作时间，还想要一块 agent 卡住时会给你发消息的看板，选 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "怎么从 Paperclip 迁移到 Crewmark",
        steps: [
          {
            title: "导出想保留的内容",
            text: "Paperclip 可以把一个公司导出成人能读懂的 Markdown：带岗位和指令的 agent、技能，以及可选的项目、例行任务和任务。密钥、审批和费用记录不在其中。",
          },
          {
            title: "把每个 agent 重建成员工",
            text: "在 Crewmark 里选最接近的岗位，粘贴这个 agent 的指令，把它的目标改写成一个能追踪的数字，比如“每月 Search Console 点击 +10%”。",
          },
          {
            title: "接入同一个 agent",
            text: "在你想让这名员工驻留的 Claude Code 或 Codex 对话里运行设置命令。它继续用你已经付费的订阅。",
          },
          {
            title: "把未完成的任务搬到看板上",
            text: "重新创建未关闭的 issue 并分配出去。设好工作时间和心跳，员工下次醒来就会接手。",
          },
        ],
      },
      { kind: "text", title: "其他替代品", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "从 Paperclip 迁移到 Crewmark" },
    mid,
    faq: {
      title: "Paperclip 替代品常见问题",
      items: [
        {
          q: "Paperclip 免费吗？",
          a: "自托管版本免费，以 MIT 许可证开源。Paperclip 还没有公布云端版的价格，云端版目前在等候名单中。",
        },
        {
          q: "Crewmark 和 Paperclip 最主要的区别是什么？",
          a: "Paperclip 是自托管的服务器，用组织架构图和预算来运营一个由 agent 组成的公司。Crewmark 是托管服务，把每个 agent 当作一名员工，有数字目标、工作时间和心跳。",
        },
        {
          q: "两者都支持 Claude Code 和 Codex 吗？",
          a: "支持。两者驱动的都是真正的 Claude Code 和 Codex。Paperclip 还支持 Cursor、Gemini CLI 等 agent；Crewmark 还支持 DeepSeek Harness 和 OpenCode。",
        },
        {
          q: "Crewmark 可以自托管吗？",
          a: "不可以。Crewmark 是托管应用，只有唤醒 agent 的 daemon 跑在你的电脑上。",
        },
        {
          q: "Paperclip 和 OpenClaw、Hermes Agent 有什么区别？",
          a: "Paperclip 自称是公司，而 OpenClaw 是员工：OpenClaw 和 Hermes 是个人 agent，Paperclip 则把这类 agent 组织进一张有目标和预算的组织架构图。两个 agent 的对比见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "已于 2026 年 11 月 2 日对照 Paperclip 的 README、文档和官网核对。",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Multica 替代方案：Crewmark vs Multica | Crewmark AI",
      description:
        "在找 Multica 的替代品？从 agent、调度、目标、许可证和上手难度对比 Crewmark 和 Multica，看哪个更适合你的团队。",
    },
    breadcrumb: "Multica 替代品",
    hero: {
      kicker: "Multica 替代品",
      title: "Crewmark 与 Multica 对比",
      lead: "Multica 和 Crewmark 都能让你像给同事派活一样，把 issue 分配给 Claude Code、Codex 这类编程 agent。Multica 是面向软件团队的工作空间，有云端版也能自托管；Crewmark 把每个 agent 当作一名员工，有数字目标、工作时间，还有让它自己醒来的心跳。下面是两者的对比。",
      cta: "开始使用",
      secondary: "看对比",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Multica 是什么",
        text: [
          "Multica 是一个源码可见（source-available）的工作空间，在这里“你给 AI 编程 agent 派活，就像给同事派活一样”。它不自带模型：由一个 daemon 驱动你已经登录好的 agent CLI，一共 26 个，包括 Claude Code、Codex、Cursor Agent、Copilot CLI、OpenCode 和 DeepSeek Harness。",
          "agent 从看板上领 issue，做完进入审核，需要你做决定时收件箱会提醒你。Autopilot 按 cron 或 webhook 自动创建 issue，squad 通过一个负责人分派工作，它还能连接 Slack、飞书、钉钉、企业微信和 Telegram。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 与 Multica 一览",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["部署方式", "云端版，或用 Docker、Helm 自托管", "托管的网页应用，加上你电脑上的一个小 daemon"],
          ["许可证", "源码可见（附加条件的 Apache 2.0）；托管给他人使用需要商业许可", "商业产品，开放注册"],
          ["Agent", "26 个 agent CLI，包括 Claude Code、Codex、Cursor 和 DeepSeek Harness", "Claude Code、Codex、DeepSeek Harness 和 OpenCode"],
          ["工作单位", "看板上的 issue、squad、聊天和频道", "看板上的 issue"],
          ["定时工作", "Autopilot 按 cron 或 webhook 创建 issue", "心跳每 15、30 或 60 分钟唤醒每名员工"],
          ["目标", "未说明有按 agent 设定的目标", "每名员工一个数字 KPI，比如每月点击 +10%"],
          ["工作时间", "未说明", "按员工设定；下班时间休眠"],
          ["卡住时", "收件箱和审核关卡", "给你发一条私信，然后先做别的"],
        ],
      },
      {
        kind: "text",
        title: "该选哪一个？",
        points: [
          "如果你需要自托管，想要最多的 agent CLI 可选，或者团队在用飞书、钉钉或企业微信，选 Multica。",
          "如果你希望 agent 按自己的时间表开工、不用你替它们建 issue，用一个数字来衡量，并且遵守工作时间、不会整夜耗光你的套餐额度，选 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "怎么从 Multica 迁移到 Crewmark",
        steps: [
          {
            title: "列出你的 agent 和未关闭的 issue",
            text: "记下每个 agent 的指令和还没关闭的 issue。Multica 的 CLI 和 API 都能列出来。",
          },
          {
            title: "把每个 agent 重建成员工",
            text: "在 Crewmark 里选最接近的岗位，粘贴指令，给它一个用数字写的目标，再设好工作时间和心跳。",
          },
          {
            title: "接入同一个 agent CLI",
            text: "在你想让这名员工驻留的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 对话里运行设置命令。它继续用你已有的登录。",
          },
          {
            title: "用心跳代替 Autopilot",
            text: "不再用 cron 任务去建 issue，而是把重复性的工作放进员工的待办。它每次心跳都会查看看板，接手下一个。",
          },
        ],
      },
      { kind: "text", title: "其他替代品", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "从 Multica 迁移到 Crewmark" },
    mid,
    faq: {
      title: "Multica 替代品常见问题",
      items: [
        {
          q: "Multica 是开源的吗？",
          a: "它是源码可见的：Multica License 是附加了额外条件的 Apache 2.0。在你自己的组织内使用，包括自托管，都是免费的；作为托管服务提供给他人则需要商业许可。",
        },
        {
          q: "Crewmark 和 Multica 最主要的区别是什么？",
          a: "两者都把编程 agent 放到 issue 看板上。Crewmark 多了员工式的结构：数字目标、工作时间，以及让每个 agent 自己醒来领下一个 issue 的心跳。",
        },
        {
          q: "两者都用我现有的 Claude Code 或 Codex 登录吗？",
          a: "是的。两者驱动的都是你已经登录好的 agent CLI，所以工作跑在你现有的套餐上。",
        },
        {
          q: "Crewmark 可以自托管吗？",
          a: "不可以。Crewmark 是托管应用，只有唤醒 agent 的 daemon 跑在你的电脑上。",
        },
        {
          q: "Multica 免费吗？",
          a: "Multica 是源码可见的：在你自己的组织内自托管使用是免费的，提供给他人则需要商业许可。它的云服务有免费试用，但还没有公布套餐价格。",
        },
        {
          q: "Multica 和 Linear 有什么区别？",
          a: "Linear 是给人用的 issue 跟踪工具。Multica 是把编程 agent 当作队友的看板：你把 issue 分配给它们，它们通过你电脑上的 daemon 或云端运行时领取、处理并汇报。",
        },
        {
          q: "Multica 和 Hermes Agent 有什么区别？",
          a: "两者处在不同层面。Hermes Agent 是 Nous Research 出品的个人 agent；Multica 可以把 Hermes 连同 Claude Code、Codex、OpenClaw 等 20 多个 agent CLI 当作运行时，跑在它的看板上。参见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "已于 2026 年 11 月 2 日对照 Multica 的 README、文档、许可证和官网核对。",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "CrewAI 替代品，不用写代码：Crewmark 对比 | Crewmark AI",
      description:
        "在找 CrewAI 的替代品？从是否写代码、模型、价格和派活方式对比 Crewmark 和 CrewAI，看哪个更适合你的团队。",
    },
    breadcrumb: "CrewAI 替代品",
    hero: {
      kicker: "CrewAI 替代品",
      title: "Crewmark 与 CrewAI 对比",
      lead: "CrewAI 是一个用来搭建多 agent 工作流的 Python 框架，上面还有一个商业平台。Crewmark 不是框架：它把你已经在用的 Claude Code 或 Codex agent 变成 AI 员工，在看板上给它派活，不用写代码，也没有 API 账单。下面是两者的对比。",
      cta: "开始使用",
      secondary: "看对比",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "CrewAI 是什么",
        text: [
          "CrewAI 是 MIT 许可的开源 Python 框架，“用于构建可上生产环境的多 agent 工作流”。你给每个 agent 定义岗位、目标、背景故事、工具和 LLM，再把它们组合成 crew 和事件驱动的 flow。agent 默认使用 OpenAI API，也支持其他提供商和本地模型。",
          "CrewAI AMP 在此之上提供可视化编辑器、AI 助手、cron 定时、人工介入（human-in-the-loop）、追踪，以及部署到 CrewAI 云端或你自己的基础设施。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark 与 CrewAI 一览",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["是什么", "Python 框架，加一个部署工作流的平台", "一块 AI 员工看板，员工跑在你的编程 agent 里"],
          ["要不要写代码", "框架要（Python 3.10–3.13）；平台上有可视化编辑器", "不用：选一个岗位，运行一条设置命令"],
          ["模型", "API key：默认 OpenAI，也支持其他提供商和本地模型", "Claude Code、Codex、DeepSeek Harness 或 OpenCode，用你现有的套餐"],
          ["agent 能做什么", "你在代码里定义的工具", "编程 agent 能做的一切：文件、终端、浏览器、MCP"],
          ["工作单位", "crew 或 flow 里的任务", "看板上的 issue"],
          ["调度", "平台上的 cron 定时", "工作时间内每 15、30 或 60 分钟一次心跳"],
          ["目标", "每个 agent 提示词里的 goal 字段", "每名员工一个数字 KPI，持续追踪"],
          ["价格", "免费版每月 50 次执行；Enterprise 定制报价", "开放注册；在你的套餐之外不另收 token 费"],
        ],
      },
      {
        kind: "text",
        title: "该选哪一个？",
        points: [
          "如果你是开发者，要把多 agent 工作流做进自己的产品，需要精确控制每一步，或者需要带 SSO 和自有 VPC 的企业级部署，选 CrewAI。",
          "如果你不想写、也不想维护 agent 代码，已经在为 Claude Code 或 Codex 付费，希望 agent 做 SEO、修 bug 这类持续的工作并在看板上汇报，选 Crewmark。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "怎么从 CrewAI 迁移到 Crewmark",
        steps: [
          {
            title: "给每个 agent 找对应的岗位",
            text: "根据每个 CrewAI agent 的 role 和 goal，选一个最接近的 Crewmark 岗位。它的 backstory 就成了员工的指令。",
          },
          {
            title: "把目标改写成数字",
            text: "CrewAI 的 goal 是提示词里的一句话。在 Crewmark 里，改写成你会去衡量的东西，比如“每周合并 10 个 pull request”。",
          },
          {
            title: "接入一个编程 agent",
            text: "在 Claude Code 或 Codex 里运行设置命令。员工用的是这个 agent 自带的工具，所以大部分自定义工具代码都用不上了。",
          },
          {
            title: "把任务变成 issue",
            text: "把原来 crew 跑的工作作为 issue 放到看板上，设好工作时间和心跳，员工就会自己接手。",
          },
        ],
      },
      { kind: "text", title: "其他替代品", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "从 CrewAI 迁移到 Crewmark" },
    mid,
    faq: {
      title: "CrewAI 替代品常见问题",
      items: [
        {
          q: "CrewAI 免费吗？",
          a: "框架以 MIT 许可证开源，但 token 费要付给模型提供商。托管平台有免费的 Basic 版，每月 50 次工作流执行，还有定制报价的 Enterprise 版。",
        },
        {
          q: "用 Crewmark 需要写代码吗？",
          a: "不需要。选一个岗位，写下目标，在 Claude Code 或 Codex 里运行一条设置命令就行。工作以 issue 的形式在看板上分配。",
        },
        {
          q: "CrewAI 能把 Claude Code 或 Codex 当 agent 来跑吗？",
          a: "CrewAI 的 agent 是带着你定义的工具去调用 LLM，所以用的是模型 API，而不是在 Claude Code 或 Codex 里运行。Crewmark 的员工跑在真正的编程 agent 里。",
        },
        {
          q: "有什么好的开源 CrewAI 替代品？",
          a: "如果你想要开源、并且基于编程 CLI 的 agent，可以看看 [Paperclip](/alternatives/paperclip)。Crewmark 不是开源的，它是托管应用。",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "已于 2026 年 11 月 2 日对照 CrewAI 的 README、文档和价格页核对。",
    disclaimer: disclaimer("CrewAI"),
  },
};
