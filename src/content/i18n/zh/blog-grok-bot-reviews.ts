import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 评价：Hacker News 用户怎么说（2026）",
    description:
      "Grok Bot 评价，来自 2026 年 8 月到 11 月的 6 个 Hacker News 讨论帖：用户喜欢什么、对用量上限和安全的抱怨，以及他们改用什么。",
  },
  breadcrumb: "Grok Bot 评价",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "博客 · 评价",
    title: "Grok Bot 评价：Hacker News 上的用户怎么说",
    lead: "Grok Bot 是 xAI 推出的一组托管 AI 队友：每个 Bot 都在云端拥有一台自己的计算机，会登录你的工具，在 Slack 和 Microsoft Teams 里工作，运行例行任务，并互相交接工作。我们读了 7 个关于它的 Hacker News 讨论帖，时间从 2026 年 8 月到 11 月，也就是它推出后的头三个月；其中一个是竞品工具的发布帖，所以计数来自另外 6 个。用户描述他们不用写代码就能把真实的杂事交给它。出现最多的抱怨是用量上限，出现在 6 个讨论帖中的 3 个里；安全问题和价值不明各出现在 2 个里。",
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
        "我们在 2026 年 11 月 13 日逐页阅读了 7 个关于 Grok Bot 的 Hacker News 讨论帖。其中一个是一款竞品开源工具的发布帖，由该工具的开发者发布，我们没有把它计入任何主题，所以本页的每个计数都以另外 6 个为基数。Grok Bot 于 2026 年 8 月 11 日推出 beta 版，所以这些讨论帖都来自它推出后的头三个月，即 2026 年 8 月到 11 月。",
      ],
      points: [
        "一个主题至少在计入的 6 个讨论帖中的 2 个里出现过，我们才会列出，并注明出现在几个讨论帖里。只在一条评论里提到的观点不列入。",
        "这 6 个中有一个并不只讲 Grok Bot：它是一个大家介绍自己 AI 配置的综合讨论帖，我们只用了其中提到 Grok Bot 的内容。另外两个讨论的是同一则新闻，后一个链接了前一个，所以这则新闻我们只算一次。",
        "我们还通过 Google 搜索找到了 17 个 Reddit 讨论帖，但打不开 reddit.com，所以没有读过，也没有总结。它们按标题列在 [Reddit 上的更多讨论](#reddit)里。",
        "这是公开讨论的一个样本，不是调查。会发帖谈论某个工具的人，往往观点比较鲜明。月份是根据每个讨论帖距今的时间推算的，可能有一个月的误差。",
        "没有任何付费或邀约：我们没有发帖、没有征集评价，也没有联系任何人。总结用的是我们自己的话，唯一的一句引用有标注并附了链接。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Grok Bot 评价一览",
      text: [
        "我们计入的 6 个 Hacker News 讨论帖里出现的内容（第七个是竞品工具的发布帖，不计入）。计数按讨论帖算，不按评论算。",
      ],
      headers: ["主题", "用户怎么说", "讨论帖"],
      rows: [
        ["好评：不写代码就能办杂事", "调研、邮件和定期摘要，从头到尾交给它", "6 个中有 2 个"],
        ["抱怨：用量上限", "一直在线的 Bot 很快耗光用量，11 月有一个讨论帖讨论了 Grok Bot 被限流的事", "6 个中有 3 个"],
        ["抱怨：安全", "提示注入，以及把登录信息和敏感账号的访问权限交给 Bot", "6 个中有 2 个"],
        ["抱怨：价值不明", "很难说出一项能交给它的任务，或者被看作开源 agent 的托管版", "6 个中有 2 个"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "用户喜欢什么",
      points: [
        `不写代码就能办成真实的杂事（6 个讨论帖中有 2 个）。用户描述把这类杂事交给它：找供应商、发送求职申请和邮件，以及整理网站和社交媒体的摘要。Hacker News 讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "常见抱怨",
      points: [
        `用量上限和 token 消耗（6 个讨论帖中有 3 个）。用户说，一直在线的 Bot 很快就会用完每周额度。一位 Hacker News 评论者在 2026 年 8 月这样说：“一直在线、持续运行的 agent 会用掉非常多的 token”（"Always on perpetual agents use a LOT of tokens"，[原帖](${hn.launch})）。2026 年 11 月，一个 Hacker News 讨论帖讨论了 Grok Bot 被限流的事，按该讨论帖标题的说法，原因是 xAI 的成本超过了订阅收入。讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.throttled})、[2026 年 11 月](${hn.agenticSetup})。`,
        `安全和账号访问权限（6 个中有 2 个）。用户担心提示注入，也担心把登录信息和敏感账号的访问权限交给 Bot，却没有明确限制每个 Bot 能接触到什么。讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 10 月](${hn.agentAccess})。`,
        `价值不明（6 个中有 2 个）。有些用户说不出自己会交给它什么任务；另一些人则把它看作 OpenClaw 这类开源 agent 的托管版本。讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "大家转而用什么",
      text: [
        "下面这些在计入的 6 个讨论帖中至少 2 个里被推荐过。其他工具各自只在一个讨论帖里被提到，这里不列；我们的 [Grok Bot 替代品](/alternatives/grok-bot)页面根据各产品自己的文档对比了主要选项。",
      ],
      points: [
        `Hermes Agent（6 个中有 2 个）。它在一个讨论帖里被推荐，在另一个里被列为可比的选项；用户描述它更便宜、可配置性更强，模型也由你选。见 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Hermes Agent 价格](/pricing/hermes-agent)。讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
        `用 Codex 或 Claude Code 自己搭（6 个中有 2 个）。用户说，Codex 或 Claude Code 加上几个自己写的脚本，就能以更低的花费完成大部分同样的工作。见 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。讨论帖：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
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
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/)，r/AI_Agents，2026 年 8 月",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/)，r/AI_Agents，2026 年 9 月",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/)，r/grok，2026 年 9 月",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/)，r/GrokBot，2026 年 9 月",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)，r/cursor，2026 年 9 月",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/)，r/cursor，2026 年 9 月",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/)，r/singularity，2026 年 10 月",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/)，r/GrokBot，2026 年 10 月",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/)，r/GrokBot，2026 年 10 月",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)，r/GrokBot，2026 年 10 月",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/)，r/AI_Agents，2026 年 10 月",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/)，r/SelfHostedAI，2026 年 10 月",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)，r/GrokBot，2026 年 11 月",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/)，r/SelfHosting，2026 年 11 月",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/)，r/GrokBot，2026 年 11 月",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/)，r/GrokBot，2026 年 11 月",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/)，r/MuseAgent，2026 年 11 月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "用来核对说法的 Grok Bot 基本事实",
      text: [
        "来自 xAI 的产品页和发布文章，于 2026 年 11 月 13 日核对。更多信息见我们的 [Grok Bot 指南](/personal-agent/grok-bot)。",
      ],
      points: [
        "它是什么：xAI 的托管 AI 队友。每个 Bot 都有一台自己的云端计算机，会登录你的工具和应用，在 Slack 和 Microsoft Teams 里工作，按计划运行例行任务，并把工作交给其他 Bot。",
        "推出时间：2026 年 8 月 11 日推出 beta 版；产品页现在说它已结束 beta。",
        "价格：包含在 xAI 的 Premium（每月 $30）、Super（每月 $100，用量是 Premium 的 3.5 倍）和 Ultra（每月 $200，用量是 Premium 的 12 倍）套餐中，按月计费。每个套餐都含每周的 Grok Bot 用量，超出部分按 token 成本计费。Teams 和 Enterprise 套餐需联系销售。",
        "许可证：不开源。",
        "运行在哪里：xAI 的云端，所以合上笔记本电脑后 Bot 仍会继续工作。你可以通过桌面和移动应用、在 Slack 和 Microsoft Teams 里，以及在 Google Meet、Zoom 或 Teams 通话中使用它们。",
        "模型：Bot 基于 Grok 构建。",
        "审批：Bot 需要审批时会来找你确认，敏感操作可以交给 Auto Review 处理。",
        "官网：[x.ai/bot](https://x.ai/bot)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "在你自己的电脑上运行、有固定工作的 agent",
      text: [
        "Grok Bot 在 xAI 的云端用 Grok 运行 Bot。Crewmark 走的是另一条路：你自己的 Claude Code 或 Codex 会话，在你的电脑上、用你已经在付费的订阅，变成有岗位、目标和工作时间的 AI 员工，每名员工从共享看板上领取下一个 issue。代价是：你的电脑需要保持开机；agent 目前通过 issue 协作（agent 之间直接发消息的功能即将推出）；也没有内置的 Slack 集成。它以 GPL-3.0 开源，1 个项目、最多 3 名 AI 员工免费。",
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
        q: "Grok Bot 值得用吗？",
        a: "取决于你要交给它什么，以及你需要多少用量。在我们计入的 6 个 Hacker News 讨论帖里，用户描述了不写代码就办成的杂事，比如调研、邮件和定期摘要。出现最多的抱怨是用量上限，出现在 6 个中的 3 个里；安全问题和价值不明各出现在 2 个里。它包含在 xAI 每月 $30 的 Premium 套餐中，想要更多用量可以选每月 $100 的 Super 或 $200 的 Ultra。",
      },
      {
        q: "Grok Bot 最常见的抱怨是什么？",
        a: "在我们计入的 6 个讨论帖里：用量上限和 token 消耗（6 个中有 3 个）；安全，主要是提示注入，以及把登录信息和敏感账号的访问权限交给 Bot（6 个中有 2 个）；价值不明，来自说不出要交给它什么任务、或把它看作开源 agent 托管版的用户（6 个中有 2 个）。",
      },
      {
        q: "Grok Bot 安全吗？",
        a: "在我们计入的 6 个讨论帖中，有 2 个提到了安全问题。用户担心提示注入，也担心把登录信息和敏感账号的访问权限交给 Bot，却没有明确限制每个 Bot 能接触到什么。xAI 的产品页说，Bot 需要审批时会来找你确认，敏感操作可以交给 Auto Review 处理。",
      },
      {
        q: "有客观真实的 Grok Bot 评价吗？",
        a: "本页没有亲自测试 Grok Bot；它总结的是用户在 Grok Bot 推出后头三个月里、在 6 个 Hacker News 讨论帖中说的话，并附上链接，方便你自己去读。用户描述不写代码就能把杂事交出去。最常见的抱怨是用量上限（6 个中有 3 个），其次是安全和价值不明（各为 6 个中有 2 个）。这里的内容没有任何付费或邀约。",
      },
      {
        q: "Reddit 用户怎么评价 Grok Bot？",
        a: "我们打不开 Reddit，所以没有总结那些讨论帖。只看标题的话：七个在找或指向替代品，其中好几个是开源或自托管的；三个在问它值不值得，其中一个问的是 $30 的 Premium 套餐；两个与用量上限和计费有关；一个把它和 Meta 的 Muse 作比较；一个在 r/MuseAgent，问 Grok Bot 遇到的事会不会也发生在 Muse 身上；一个说它的文档显示你所有的 Bot 共用一台计算机，而 xAI 的产品页说每个 Bot 都有自己的计算机（见[基本事实](#facts)）；一个提醒大家远离 xAI；还有一个说 Grok Bot 印证了发帖人一直在做的东西。这 17 个都链接在 [Reddit 上的更多讨论](#reddit)里。",
      },
      {
        q: "大家用什么代替 Grok Bot？",
        a: "在我们计入的 6 个讨论帖里，有两个选项被提到不止一次：Hermes Agent，用户描述它更便宜、可配置性更强；以及用 Codex 或 Claude Code 加自己的脚本自己搭的方案（各为 6 个中有 2 个）。我们的 [Grok Bot 替代品](/alternatives/grok-bot)页面根据各产品自己的文档对比了更多选项。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份固定的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "讨论帖于 2026 年 11 月 13 日阅读。产品信息已于同一天对照 xAI 的产品页和发布文章核对。",
  disclaimer:
    "Crewmark 是独立产品，与 xAI 或本页提到的任何公司均无关联，也未获其背书。这里总结的观点来自所链接讨论帖中的评论者。产品名称是其各自所有者的商标。",
};
