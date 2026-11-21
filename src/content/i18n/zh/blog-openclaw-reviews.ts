import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 评价：Hacker News 用户怎么说（2026）",
    description:
      "OpenClaw 评价，来自 2026 年 2 月到 11 月的 10 个 Hacker News 讨论帖：用户喜欢什么、最常见的抱怨，以及他们转而用什么。",
  },
  breadcrumb: "OpenClaw 评价",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "博客 · 评价",
    title: "OpenClaw 评价：Hacker News 上的用户怎么说",
    lead: "OpenClaw 是一款开源的个人 AI 助手，运行在你自己的电脑上，在你已经在用的聊天应用里回复你，比如 WhatsApp、Telegram 和 Slack。我们读了 10 个关于它的 Hacker News 讨论帖，时间从 2026 年 2 月到 11 月。用户喜欢用它处理个人琐事，也喜欢它的记忆由自己掌握。出现最多的抱怨是它经常出问题、需要维护（10 个讨论帖中有 6 个），以及它的广泛访问权限带来安全风险（10 个中有 5 个）。",
    cta: "开始使用",
    secondary: "看评价要点",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "我们怎么收集这些评价",
      text: [
        "我们在 2026 年 11 月 13 日逐页阅读了 10 个关于 OpenClaw 的 Hacker News 讨论帖。它们的时间从 2026 年 2 月到 11 月，其中 7 个在 2 月到 4 月之间，那也是讨论最集中的时候。在评论多达几百条的几个最大的讨论帖里，我们读的是顶层评论和关键话题前后的段落，没有读每一条回复。",
      ],
      points: [
        "一个主题至少在 10 个讨论帖中的 2 个里出现过，我们才会列出，并注明出现在几个讨论帖里。只在一条评论里提到的观点不列入。",
        "其中一个讨论帖讲的是 Grok Bot；我们用的是其中拿 Grok Bot 和 OpenClaw 作比较的评论。另一个讨论帖泛泛地问大家用什么 AI 配置；我们用的是其中提到 OpenClaw 的内容。",
        "我们还通过 Google 搜索找到了 9 个 Reddit 讨论帖，但打不开 reddit.com，所以没有读过，也没有总结。它们按标题列在 [Reddit 上的更多讨论](#reddit)里。",
        "这是公开讨论的一个样本，不是调查。会发帖谈论某个工具的人，往往观点比较鲜明。月份是根据每个讨论帖距今的时间推算的，可能有一个月的误差。",
        "没有任何付费或邀约：我们没有发帖、没有征集评价，也没有联系任何人。总结用的是我们自己的话，唯一的一句引用有标注并附了链接。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "OpenClaw 评价一览",
      text: ["我们读的 10 个 Hacker News 讨论帖里出现的内容。计数按讨论帖算，不按评论算。"],
      headers: ["主题", "用户怎么说", "讨论帖"],
      rows: [
        ["好评：适合处理个人琐事", "提醒、跟进、日历任务和群聊机器人，前提是它能正常运行", "10 个中有 3 个"],
        ["好评：就在你的聊天应用里，记忆归你所有", "它在 WhatsApp 这类应用里回复你，记忆保存在你能读、能改的文件里", "10 个中有 2 个"],
        ["好评：代表了助手的发展方向", "连批评它的人也从中看到了内置助手本该有的样子", "10 个中有 2 个"],
        ["抱怨：经常出问题", "更新会把东西弄坏，维护花的时间比它省下的还多", "10 个中有 6 个"],
        ["抱怨：安全风险", "对你的电脑和账号有很大的访问权限，还可能遭到提示注入", "10 个中有 5 个"],
        ["抱怨：炒作多于实用", "说得很大却没有具体例子；演示任务看起来像在作秀", "10 个中有 4 个"],
        ["抱怨：费用和订阅", "模型用量的费用越积越多，还受制于其他公司的订阅规则", "10 个中有 3 个"],
        ["抱怨：需要一台闲置的机器和技术能力", "最好由乐意维护它的人，在一台单独的电脑上运行", "10 个中有 2 个"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "用户喜欢什么",
      points: [
        `能正常运行时，适合处理个人琐事（10 个讨论帖中有 3 个）。用户描述它会发送提醒和跟进消息、处理小的日历任务，以及为家人或群聊运行机器人。Hacker News 讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.memory})、[2026 年 11 月](${hn.agenticSetup})。`,
        `它就在你已经在用的聊天应用里，记忆归你所有（10 个中有 2 个）。用户喜欢在 WhatsApp 这类应用里给它发消息，也喜欢它把记忆保存在自己机器上的文件里，可以自己阅读和编辑。讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 8 月](${hn.grokBot})。`,
        `让人看到助手的发展方向（10 个中有 2 个）。连批评它的评论者也说，它做到了手机和电脑里内置的助手本该做到的事，并认为这个思路会比这个项目本身走得更远。讨论帖：[2026 年 2 月](${hn.appleIntelligence})、[2026 年 3 月](${hn.securityNightmare})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "常见抱怨",
      points: [
        `经常出问题，需要不断维护（10 个讨论帖中有 6 个）。用户描述更新会把东西弄坏，功能会毫无预兆地失灵，花在修它上的时间比用它的时间还多。一位 Hacker News 评论者在 2026 年 11 月这样说：“每次更新都有东西坏掉，我花在修东西上的时间更多了”（"Every update something broke, and I spent more time fixing things"，[原帖](${hn.agenticSetup})）。讨论帖：[2026 年 2 月](${hn.appleIntelligence})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.memory})、[2026 年 8 月](${hn.grokBot})、[2026 年 11 月](${hn.agenticSetup})、[2026 年 11 月](${hn.saas})。`,
        `它的广泛访问权限是一种安全风险（10 个中有 5 个）。用户指出，它能广泛访问你的电脑和账号，还可能被提示注入操纵。常见的建议是把它放在一台单独的机器上、用单独的账号运行；也有人说干脆别装。讨论帖：[2026 年 2 月](${hn.personalComputer})、[2026 年 2 月](${hn.appleIntelligence})、[2026 年 2 月](${hn.changingMyLife})、[2026 年 3 月](${hn.securityNightmare})、[2026 年 4 月](${hn.whoIsUsing})。`,
        `炒作多于实用（10 个中有 4 个）。用户说，关于 OpenClaw 的帖子许诺了巨大的改变，却拿不出具体例子；它常见的演示任务，比如订机票或安排会议，看起来更像效率作秀，而不是真正省下了时间。讨论帖：[2026 年 2 月](${hn.changingMyLife})、[2026 年 3 月](${hn.securityNightmare})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `费用，以及依赖其他公司的订阅（10 个中有 3 个）。用户说，它背后的模型用量费用会越积越多。2026 年 4 月，一个 Hacker News 讨论帖报道称，Anthropic 不再允许把 Claude Code 订阅用于 OpenClaw；评论者在支付 API 价格和换用其他模型提供商之间权衡。讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.anthropicSubscriptions})、[2026 年 4 月](${hn.memory})。`,
        `需要一台闲置的机器和技术能力（10 个中有 2 个）。用户说，它最好由乐意维护它的人在一台单独的电脑上运行；一些小企业主则在问有没有托管的、现成的版本。讨论帖：[2026 年 2 月](${hn.personalComputer})、[2026 年 11 月](${hn.saas})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "大家转而用什么",
      text: [
        "下面这些在 10 个讨论帖中至少 2 个里被推荐过。其他工具各自只在一个讨论帖里被提到，这里不列；我们的 [OpenClaw 替代方案指南](/blog/openclaw-alternatives)根据各项目自己的文档对比了主要选项。",
      ],
      points: [
        `Hermes Agent（10 个中有 3 个）。换用它的用户说，它在他们那里运行得更稳定。见 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) 和 [Hermes Agent 价格](/pricing/hermes-agent)。讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 8 月](${hn.grokBot})、[2026 年 11 月](${hn.agenticSetup})。`,
        `直接用 Claude Code 或 Codex，配上 skill 和一份好的 \`CLAUDE.md\`（10 个中有 3 个）。好几位用户说，他们搭过庞大的 OpenClaw 配置，最后又回到了本来就有的编程 agent。见 [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) 和 [Claude Code vs Codex](/blog/claude-code-vs-codex)。讨论帖：[2026 年 2 月](${hn.changingMyLife})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `Claude Cowork（10 个中有 2 个）。作为 Anthropic 的托管助手被推荐。见我们的 [Claude Cowork 指南](/personal-agent/claude-cowork)。讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `cron 定时任务和自己写的脚本（10 个中有 2 个）。一些用户说，OpenClaw 做的大部分事情都可以换成一组定时运行的脚本。讨论帖：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Reddit 上的更多讨论",
      text: [
        "我们列出这些 Reddit 讨论帖，供你进一步阅读。它们是通过 Google 搜索找到的，但我们打不开 reddit.com，所以没有读过，也没有总结，上面的主题也都没有用到它们。",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/)，r/ArtificialInteligence，2026 年 2 月",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/)，r/myclaw，2026 年 2 月",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/)，r/LocalLLaMA，2026 年 3 月",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/)，r/openclaw，2026 年 3 月",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/)，r/openclaw，2026 年 4 月",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/)，r/openclaw，2026 年 6 月",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/)，r/openclaw，2026 年 7 月",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/)，r/openclaw，2026 年 8 月",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/)，r/openclaw，2026 年 10 月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "用来核对说法的 OpenClaw 基本事实",
      text: [
        "来自 OpenClaw 自己的 README、文档和 GitHub，于 2026 年 11 月 13 日核对。费用方面的更多信息见我们的 [OpenClaw 价格](/pricing/openclaw)页面。",
      ],
      points: [
        "它是什么：一款开源的个人 AI 助手。Gateway 运行在你自己的电脑上，在 WhatsApp、Telegram、Slack、Discord 和 iMessage 等聊天应用里回复你；状态、记忆和凭据都留在你的硬件上。",
        "价格：免费。它的 README 说这个项目没有付费档、托管服务，也没有代币。你向模型提供商付费。",
        "许可证：MIT。项目由独立的非营利组织 OpenClaw Foundation 运营。",
        "运行在哪里：你自己的机器上。它有 macOS、Linux、Windows 和 WSL2 的安装程序，有 macOS、iOS、Android、Windows 和 Linux 应用，文档里还有 Docker 和 Nix 的安装方式。",
        "模型：以插件形式接入 OpenAI、Anthropic、Google Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM 等。",
        "安全，据它自己的文档：除非你配置了沙箱，主会话的工具都在宿主机上运行，而且 exec 审批默认关闭。",
        "定时任务：内置调度器，可运行周期性和一次性任务，还有 webhook 和 Gmail 触发器。",
        "名称：2026 年 1 月 30 日改名为 OpenClaw；更早的名字包括 Clawdbot 和 Moltbot。截至 2026 年 11 月 13 日，它在 GitHub 上有 394,406 颗星。官网：[openclaw.ai](https://openclaw.ai)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给 Claude Code 或 Codex 一份固定的工作",
      text: [
        "这些讨论帖里有好几位用户回到了 Claude Code 或 Codex。Crewmark 就建立在它们之上：它把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、目标和工作时间，每名员工从共享看板上领取下一个 issue。它不是聊天应用里的个人助手：工作通过 issue 进行，没有内置的 Slack 集成，agent 运行在你的电脑上，而电脑需要保持开机。它以 GPL-3.0 开源，1 个项目、最多 3 名 AI 员工免费。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，或者自己写岗位和目标。" },
        {
          title: "把工作放上看板",
          text: "分派 issue，并让常规的 issue 定期重复。在工作时间内，心跳会唤醒员工去接下一个，频率从每 15 分钟一次到每天一次。",
        },
        {
          title: "它来问时回答它",
          text: "当它需要审查、权限或信息时，会把 issue 标为“需处理”并在那里问你。每个 agent 能做的工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想让你的编程 agent 按计划工作？",
    text: "Crewmark 给 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "OpenClaw 值得用吗？",
        a: "取决于你能接受多少维护工作。在我们读的 10 个 Hacker News 讨论帖里，喜欢它的用户用它处理个人琐事，比如提醒和日历任务，而且是在自己已经在用的聊天应用里。最常见的抱怨出现在 10 个讨论帖中的 6 个里：它经常出问题，需要不断修。软件本身以 MIT 许可证免费提供；你要为它用到的模型付费。",
      },
      {
        q: "OpenClaw 用起来安全吗？",
        a: "安全问题在 10 个讨论帖中的 5 个里出现过。用户指出它对你的电脑和账号有很大的访问权限，还存在提示注入的风险，建议把它放在单独的机器上、用单独的账号运行。OpenClaw 自己的 README 说，除非你配置了沙箱，主会话的工具都在宿主机上运行，而且它的 exec 审批默认关闭。",
      },
      {
        q: "为什么有人说 OpenClaw 被过度炒作？",
        a: "在 10 个讨论帖中的 4 个里，用户说关于它的帖子许诺了很大的效果却没有具体例子，它的演示任务看起来更像效率作秀，而不是真正省下了时间。我们列出的 Reddit 讨论帖中有一个来自 2026 年 3 月的 r/LocalLLaMA，标题说它被过度炒作、建议改用 skill；我们没有读过这个帖子。",
      },
      {
        q: "大家用什么代替 OpenClaw？",
        a: "在我们读的讨论帖里：Hermes Agent 和直接用 Claude Code 或 Codex（各 3 个讨论帖），其次是 Claude Cowork，以及 cron 定时任务加自己写的脚本（各 2 个讨论帖）。我们的 [OpenClaw 替代方案指南](/blog/openclaw-alternatives)根据各项目自己的文档对比了这些选项。",
      },
      {
        q: "Reddit 用户怎么评价 OpenClaw？",
        a: "我们打不开 Reddit，所以没有总结那些讨论帖。只看标题的话：四个在问 OpenClaw 是否还值得用、是否值得继续用，或者是否已经凉了，其中一个是因为发帖人已经有了 Codex；三个的标题带有批评意味，其中一个建议改用 skill；一个在 r/myclaw，反驳“它没用”的说法；还有一个是大量测试之后写的评测。这九个都链接在 [Reddit 上的更多讨论](#reddit)里。",
      },
      {
        q: "OpenClaw 免费吗？",
        a: "免费。它的 README 说这个项目没有付费档、托管服务，也没有代币，而且它采用 MIT 许可证。你向模型提供商付费；在我们读的 10 个讨论帖中，有 3 个提到了费用，其中包括一个 2026 年 4 月的讨论帖，讲的是 Anthropic 不再允许把 Claude Code 订阅用于 OpenClaw。见 [OpenClaw 价格](/pricing/openclaw)。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份固定的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "讨论帖于 2026 年 11 月 13 日阅读。产品信息已于同一天对照 OpenClaw 自己的 README、文档和 GitHub 核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenClaw Foundation 或本页提到的任何公司均无关联，也未获其背书。这里总结的观点来自所链接讨论帖中的评论者。产品名称是其各自所有者的商标。",
};
