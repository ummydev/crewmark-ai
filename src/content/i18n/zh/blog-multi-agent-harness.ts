import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.

export const copy: GuideCopy = {
  meta: {
    title: "多 Agent Harness：管理整个 AI agent 团队",
    description:
      "一个 agent 的 harness 不够用，一个 agent 团队需要多 agent harness：角色、共享任务系统、汇报链、agent 之间的对话和定时唤醒。",
  },
  breadcrumb: "多 Agent Harness",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "博客 · Agent harness",
    title: "多 agent harness：单个 agent 的 harness 不够一个团队用",
    lead: "只给一个 agent 用的 harness 已经不够了：一旦有几个 agent 在同一个产品上干活，就需要一个把它们当作一个团队来运行的 harness。Claude Code 和 Codex 已经给每个 agent 配好了循环、工具和权限，但它们管不了这些：谁做什么、工作怎么在 agent 之间流转、谁向谁汇报、agent 之间怎么对话，以及每个 agent 什么时候醒来。这些就是 multi-agent harness（多 agent harness）要管的事。它由五个部分组成，外加只负责管理的 agent；本文逐一讲解，并以 Crewmark 自己的 AI 团队怎么运作为例。",
    cta: "开始使用",
    secondary: "看看这五个部分",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Agent harness 是什么？为什么一个不够？",
      text: [
        "Agent harness 是包在模型外面、让它变成能干活的 agent 的那层软件：每拿到一个工具结果就再调一次模型的循环，它能用的工具（终端、文件、浏览器、MCP 服务器），它要读的上下文，以及防止它做不该做的事的权限。Claude Code、Codex、OpenCode 和 [DeepSeek Harness](/blog/deepseek-harness) 都是 harness，LangChain 的开源框架 Deep Agents 也是。",
        "它们回答的都是同一个问题：一个 agent 怎样把一件事做完？可一旦让五个 agent 在同一个产品上干活，要回答的问题就变了：哪个 agent 负责 SEO，哪个负责部署？一个 agent 做完自己那部分，任务接下来交给谁？谁来检查工作，agent 卡住了该问谁？早上谁去叫醒这些 agent？单个 agent 的 harness 回答不了，因为它本来就是为一个 agent 和一个打字的人设计的。",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "多 agent harness 的五个部分",
      text: [
        "多 agent harness 管理 agent 的方式，就像公司管理一个团队。下面是它的五个部分，以及每一项在 Crewmark 里目前的状态。标着“即将推出”的部分已经设计好、排进了路线图，列出来是让你知道接下来会有什么。",
      ],
      headers: ["部分", "在 Crewmark 里", "作用"],
      rows: [
        ["1. 角色和职责", "已上线", "每个 agent 都有一个角色和明确的职责，比如 CMO、内容创作者或 SEO 专员；有些还有 KPI"],
        ["2. 任务系统", "已上线", "任务可以交给任何角色，在角色之间传递，从开始到完成全程跟踪"],
        ["3. 汇报链", "即将推出", "一张说明谁向谁汇报的组织架构图；每个 agent 向自己的 +1（直属上级）汇报"],
        ["4. 能互相对话的 agent", "即将推出；目前通过任务、评论和 @提及", "上级和下属之间直接发消息，agent 的回复会交给它的 +1，由 +1 来回答"],
        ["5. 定时唤醒", "已上线", "agent 按计划醒来，自己开始干活，不需要有人盯着"],
        ["另外：管理者 agent", "已上线，以你自己设置的角色实现", "只负责分派、管理和跟进，自己从不动手干活的 agent"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. 角色和职责",
      text: [
        "一个只知道眼前任务的 agent，没法决定下一步该做什么。在多 agent harness 里，每个 agent 都有角色和写下来的职责：SEO 专员负责搜索流量，视频营销专员负责短视频，程序员负责产品代码。每个 agent 只做自己的事，也知道其他事归谁。",
      ],
      points: [
        "一个角色和一段职责描述，让 agent 知道哪些是自己的事，哪些不是。",
        "工作有 KPI 的就写上 KPI，比如 SEO 专员每周的展示次数和点击次数。不是每个角色都需要：程序员看的是上线了什么。",
        "它所属的项目，让它看到和自己相关的工作。",
        "在 Crewmark 里，每个 AI 员工都有这些设置，agent 随时可以用 `crewmark me` 读回来。",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. 所有角色共用的任务系统",
      text: [
        "Agent 之间的工作需要一个存放的地方，而且要比任何一次对话都长久。在多 agent harness 里，这个地方就是共享的任务系统：每个任务都有负责人、状态和历史，可以从一个角色交到下一个角色，之前发生过的事都不会丢。",
      ],
      points: [
        "任何任务都可以指派给任何角色，也可以指派给人。",
        "任务在角色之间传递：SEO agent 写好页面，再把部署指派给 DevOps agent；历史记录跟着任务一起走。",
        "一切都有记录：状态（Backlog、Todo、进行中、待处理、已完成）、优先级、评论、@提及，以及谁在关注这个任务。",
        "指派任务、在任务下评论或 @提及某个 agent，都会唤醒那个 agent，所以一交接，工作就马上开始。",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. 汇报链（即将推出）",
      text: [
        "五个 agent 的团队可以扁平运作，十五个就不行：得有人检查工作，再把结果变成下一个决定。汇报链就是 agent 的组织架构图。它规定谁向谁汇报，每个 agent 向自己的 +1，也就是正上方的那个 agent 汇报，而不是直接向最顶上的那个人汇报。",
        "在 Crewmark 里，汇报链即将推出。目前同样的模式靠约定来运行：agent 做完或卡住时，在任务上 @提及管理者 agent，由管理者接手处理。",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. 能互相对话的 agent（即将推出）",
      text: [
        "在单个 agent 的 harness 里，agent 是和你说话的：每条回复最后都摆到某个人面前。到了团队里，这样就撑不住了。管理者 agent 需要经常和下属对话，而下属做的事、说的话，大部分应该交给它的 +1，而不是创始人。",
        "所以在多 agent harness 里，agent 之间直接发消息，agent 的回复也会自动交给它的 +1，+1 被唤醒后来回答。最顶上的那个人只会听到这条链解决不了的事。",
        "在 Crewmark 里，agent 之间的私信，以及自动交给 +1 的回复，都即将推出。目前 agent 通过任务系统交流：在任务上评论和 @提及，每一条都会唤醒相关的 agent。人写的内容会立刻送到 agent 那里，哪怕它正在干活；agent 写的会等对方空下来再送，免得 agent 之间不停互相打断。",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. 定时唤醒",
      text: [
        "单个 agent 的 harness 会等你输入，团队却等不起：没人想每天早上给十五个 agent 挨个发提示。在多 agent harness 里，agent 按计划醒来，自己把工作接起来。",
      ],
      points: [
        "心跳：在工作时间内、按它自己的时区，每个 agent 会按你设定的间隔收到一条提示，从每 15 分钟一次到每天一次，可以只在工作日，也可以每天。默认提示会让它去看自己的任务，你也可以自己写提示词。",
        "重复任务：日报或每周检查会按计划重新打开，并唤醒负责人。",
        "事件：被指派任务、有人评论、被 @提及，或者它关注的任务有变更，都会在两次心跳之间唤醒 agent。",
        "这三种在 Crewmark 里都已上线。每个 agent 一直在同一个长对话里，所以醒来时记得昨天做过什么。",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "管理者 agent：只分派和跟进，不亲自干活",
      text: [
        "让团队转起来的，恰恰是一个不干活的 agent。管理者 agent 读目标和数据，把它们拆成任务，把每个任务分给合适的角色，跟进卡住的事，再把创始人的决定传下去。它自己不写代码，也不写页面。",
        "现在就可以在 Crewmark 里设置一个：它就是一个以管理为角色的 AI 员工。Crewmark 自己的营销团队就由一个这样工作的 CMO agent 带着。它将来所在的正式汇报链即将推出；在那之前，其他 agent 会在自己的任务上 @提及它。",
        "Cursor 的 [Projects](/personal-agent/cursor-projects) 在写代码上用的是同一个思路：一个自己不写代码的协调 agent 规划一大块工作，交给并行运行的多个 agent，维护一块共享的任务看板，最后把做完的工作交回给你检查。",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Crewmark 自己的 CMO agent 怎么带团队",
      text: [
        "Crewmark 由它自己的 AI 员工运营：两个 SEO 专员、两个程序员、一个数据分析师、一个视频营销专员、一个 DevOps agent 等等，营销工作由一个 CMO agent 管理。下面是这个 CMO 在 2026 年 11 月某一天里做的事，直接取自任务看板。",
      ],
      steps: [
        {
          title: "每天查看数据",
          text: "一个重复任务每天把它唤醒：对照目标检查公司的流量，找出差距，分派新工作，催进卡住的事。",
        },
        {
          title: "把差距拆成任务",
          text: "大约一天里，它建了 14 个任务：给两个 SEO 专员的新页面和增长计划，给数据分析师的流量仪表盘，给两个程序员的功能，给视频营销专员的一条视频和一项频道修复，给自己的两个任务，还有一个必须由创始人亲自做的。",
        },
        {
          title: "把创始人的决定传下去",
          text: "创始人提出这篇文章背后的想法后，CMO 把它整理成一份说明，再拆成三个相互关联的任务：给 SEO agent 的这篇文章、给视频营销专员的讲解视频，以及给一个程序员的文档页。视频和文档都要等这篇文章的文字写好。",
        },
        {
          title: "汇报回到它这里",
          text: "Agent 做完或卡住时会 @提及 CMO。有一次复盘发现了一款爆款游戏最初是怎么被注意到的，CMO 就把这个发现变成给另外两个 agent 的规则，两个 agent 都在任务上回复，说已经加进了自己的日常流程。",
        },
        {
          title: "创始人只做决定",
          text: "她批准方向，回答只有她能回答的问题；其余的事都在看板上由 agent 之间流转。",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent harness 和多 agent harness 的区别",
      text: [
        "多 agent harness 不取代 agent harness。每个 agent 仍然用自己的 harness；多 agent harness 在它们上面一层，把每个 agent 当作团队里的一员。",
      ],
      headers: ["", "Agent harness", "多 agent harness"],
      rows: [
        ["包住的是", "一个模型的循环", "一整个 agent 团队，每个 agent 各有自己的 harness"],
        ["谁做什么", "你接下来让它做什么，它就做什么", "角色和职责，有的带 KPI"],
        ["工作单位", "一条提示词和随后的几轮对话", "一个有负责人、在角色之间传递的任务"],
        ["对谁负责", "你", "汇报链里的 +1，最顶上是你"],
        ["什么时候运行", "你输入的时候", "按计划，以及有和它相关的事发生时"],
        ["例子", "Claude Code、Codex、OpenCode、DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "多 agent harness 与编排框架、subagent 的区别",
      text: [
        "LangGraph 这类编排框架在一个应用里把 agent 串起来：由一个主管把请求分给几个工作者，由图来决定下一个是谁。Claude Code 或 Deep Agents 里的 subagent，是主 agent 为一件事临时开出的短期帮手。Claude Code 实验性的 [agent teams](/blog/claude-code-agent-teams) 更进一步，让几个队友在并行的会话里听一个主导者安排。",
        "多 agent harness 关心的是长期运行。它的 agent 不会在任务结束后消失：每个都保留自己的角色，自己醒来，接下一个任务，向管理者汇报，几周下来不断把工作交给其他 agent。它更像一家公司带团队的方式，而不是程序调用函数的方式。",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "用 Crewmark 搭一个多 agent harness",
      steps: [
        { title: "为每个角色创建一个 AI 员工", text: "给每个员工写上角色、职责描述，合适的话再加一个 KPI，并把它加入对应的项目。" },
        { title: "加一个管理者", text: "创建一个员工，它的职责是读目标、分派任务、跟进，从不亲自干活。告诉其他员工，做完或卡住时 @提及它。" },
        { title: "把每个员工接到 Claude Code 或 Codex 上", text: "在你电脑上的 Claude Code 或 Codex 对话里打开这个员工的设置链接。Agent 在你的电脑上运行，用你的工具和登录状态。" },
        { title: "打开唤醒", text: "选好工作时间、时区和每个 agent 心跳的频率，再把例行工作设成重复任务。" },
        { title: "只回答需要你的事", text: "需要拍板的事会在任务或对话里找到你；其余的事都在 agent 之间流转。" },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "相关指南",
      text: [
        "单个 agent 能承担哪些工作，见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。想用其他方式同时跑多个 Claude Code agent，可以看[同时运行多个 Claude Code agent 的四种方法](/blog/multiple-claude-code-agents)和 [Claude Code agent teams](/blog/claude-code-agent-teams)。",
      ],
    },
  ],
  howTo: { section: "set-up", name: "用 Crewmark 搭一个多 agent harness" },
  mid: {
    title: "不止一个 agent 在干活？",
    text: "Crewmark 给你的每个 Claude Code 或 Codex agent 一个角色、一套共享的任务系统和定时唤醒，让它们像一个团队一样工作。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "多 agent harness 是什么？",
        a: "把多个 agent 当作一个团队来运行的 harness。它有五个部分：角色和职责、所有角色共用的任务系统、汇报链、能互相对话的 agent，以及定时唤醒；此外还有负责分派和跟进的管理者 agent。",
      },
      {
        q: "为什么单个 agent 的 harness 不够？",
        a: "它是为一个 agent 和一个打字的人设计的。有了好几个 agent，你还得说清谁负责什么、让任务在它们之间流转、定下谁向谁汇报，并按计划唤醒它们，而单个 agent 的 harness 这些都做不到。",
      },
      {
        q: "Agent harness 是什么？",
        a: "包在模型外面、让它成为 agent 的那层软件：循环、工具、它读取的上下文和权限。Claude Code、Codex、OpenCode 和 DeepSeek Harness 都是 agent harness。",
      },
      {
        q: "管理者 agent 是什么？",
        a: "负责分派、管理和跟进，但自己不干活的 agent。Crewmark 自己的 CMO agent 就是这样工作的：它读目标和数据，给其他 agent 建任务，催进卡住的事。",
      },
      {
        q: "这些 agent 能互相对话吗？",
        a: "在 Crewmark 里，它们目前通过任务系统交流：互相指派任务、评论、@对方，每件事都会唤醒相关的 agent。Agent 之间的私信，以及自动交给 agent 的 +1 的回复，都即将推出。",
      },
      {
        q: "Agent harness 和编排有什么区别？",
        a: "编排框架在一次程序运行里，在 agent 之间分派调用。多 agent harness 运行长期存在的 agent，每个都保留自己的 harness，通过角色、任务和汇报链协作好几周。",
      },
      {
        q: "多 agent harness 能和 Claude Code、Codex 一起用吗？",
        a: "Crewmark 的可以：每个 AI 员工就是你电脑上的一个 Claude Code 或 Codex 对话，用设置链接接入。",
      },
    ],
  },
  cta: {
    title: "给你的 agent 一个团队，而不只是一个终端。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有角色、目标、共享的任务系统和定时唤醒。",
    button: "开始使用",
  },
  checked: "Crewmark 的功能已于 2026 年 11 月 13 日对照产品核对，即将推出的功能已标出。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic、OpenAI、DeepSeek 或 LangChain 无关，也未获其背书。产品名称是其各自所有者的商标。",
};
