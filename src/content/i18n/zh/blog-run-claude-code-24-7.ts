import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Claude Code 工作期间让 Mac 保持唤醒（claude 退出后就能重新休眠）
caffeinate -i claude --permission-mode auto

# 或者把任务交给云端会话，合上笔记本它也会继续跑
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# 在任意一台机器上，给这个云端会话排上下一步
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 能 24 小时运行吗？通宵、无人值守怎么跑",
    description:
      "让 Claude Code 通宵或全天候干活：权限模式、/goal、让电脑保持唤醒、云端会话、定时任务、用量限制，以及哪些情况会让它停下来。",
  },
  breadcrumb: "让 Claude Code 24 小时运行",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code 能 24 小时运行吗？怎么让它通宵、无人值守地干活",
    lead: "能，但有限制。Claude Code 本身没有到点就停的机制，但有四件事会让它停下：会话结束或电脑休眠；卡在一个权限提示上；触到套餐的用量限制；或者活干完了，没有下一件事可做。每一种都有解决办法。这篇指南讲怎么让 Claude Code 在你睡觉时继续干活、每种方式做不到什么，以及怎么给它排一个固定的夜班。",
    cta: "开始使用",
    secondary: "直接看怎么通宵跑",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "让 Claude Code 持续运行的几种方式",
      text: [
        "有的方式一直沿用同一个对话，所以 Claude 记得自己做过什么；有的每次都用同一句提示词开一个新会话。",
      ],
      headers: ["方式", "电脑能不能关", "是否同一个对话", "边界", "适合"],
      rows: [
        ["云端会话（`claude --cloud`、claude.ai/code）", "能", "是", "一段时间没有活动就会停止，虚拟机随之回收", "睡前交出去的一个长任务"],
        ["云端定时任务（`/schedule`）", "能", "否，每次运行都是新会话", "最多每小时一次；需要 Pro、Max、Ultra、Team 或 Enterprise", "只需要代码仓库的重复性任务"],
        ["桌面端定时任务", "不能：应用要开着，电脑不能休眠", "否，每次运行都是新会话", "只在电脑唤醒时运行", "处理本地文件的夜间任务"],
        ["`/loop`", "不能：会话要开着", "是", "随会话结束；循环任务 7 天后过期", "盯几个小时的 CI 或部署"],
        ["cron + `claude -p --resume`", "不能", "是", "按你的 cron 节奏；需要自己搭", "一个 agent 按 TODO 文件干活"],
        ["Crewmark 心跳", "不能", "是", "按你设定的工作时间，可以跨过午夜", "一份长期工作，从看板上逐个领 issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么让 Claude Code 通宵运行",
      steps: [
        {
          title: "选一个不会每步都停下来问的权限模式",
          text: "凌晨 2 点卡在权限提示上的会话，会一直干等到早上。自动模式不再询问，而是在后台做安全检查后直接执行操作。跳过所有检查的 `bypassPermissions`，只在隔离的容器和虚拟机里用。",
          code: overnight,
        },
        {
          title: "给它定一个终点",
          text: "`/goal` 接受一个条件，比如某组测试全部通过；每一轮结束后 Claude 都会检查它，没满足就自己再开一轮，直到满足为止。想让它干得更久，就在仓库里留一个 TODO 文件或一份写好的计划，让它按顺序做下去。",
        },
        {
          title: "让电脑保持唤醒，或者把活挪到云端",
          text: "本地会话需要电脑开着、claude 进程一直运行。在 Mac 上，`caffeinate -i` 让电脑在 Claude Code 运行期间保持唤醒；在服务器上，把 claude 放进 tmux 或 screen 里跑，关掉终端也不会断。云端会话在你合上笔记本后会继续运行。",
        },
        {
          title: "提前想好用量限制",
          text: "Claude 套餐采用滚动的 5 小时窗口加每周限额，和聊天共用。Max 的用量是 Pro 的 5 倍；Ultra 每周是 Pro 的 10 倍，经过验证的账号没有 5 小时限额。如果在任务进行中触到限额，Claude Code 可能会把当前这一步做完（Pro 每周一次，Max 每次都可以）。用量额度（credits）或 API key 能让它继续干下去。见[怎么减少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
        },
        {
          title: "用手机查看进度",
          text: "用 Remote Control（远程控制），可以在 Claude App 或浏览器里查看本地会话；云端会话会出现在 App 的 Code 标签页里。如果 Claude 夜里问了你问题，醒来后回答，它就会接着干。见 [Claude Code 远程控制](/remote-claude-code)。",
        },
      ],
      source: { label: "来源：Anthropic 的 Claude Code 云端会话文档（英文）", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "哪些情况会让 Claude Code 夜里停下",
      points: [
        "终端关闭或电脑休眠。电脑唤醒后，Remote Control 会话会重新连上，但休眠期间什么活也不会干。",
        "权限提示没人回答。自动模式能避开其中大部分。",
        "用量限制。除非你加了额度或 API key，否则会话会一直等到窗口重置。",
        "云端闲置。云端会话一段时间没有活动就会停止，包括在等你批准一次 MCP 工具调用的时候。重新打开会恢复对话，但当时还在运行的 shell 命令、subagent 或 `/loop` 不会恢复。",
        "活干完了。目标达成或 TODO 列表清空后，它就会停下，这正是你想要的。",
        "会话太长。Claude Code 会自动压缩上下文，早期的细节只会以摘要的形式保留。把计划写在文件里，而不只是留在对话里。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给 Claude Code 排一个夜班",
      text: [
        "通宵跑一次很容易，难的是一直坚持下去：每天早上都得有人把下一个任务排好。Crewmark 把一个 Claude Code 对话变成有工作时间和心跳的 AI 员工，让它自己不断从看板上领活。",
      ],
      steps: [
        {
          title: "设定工作时间",
          text: "工作时间可以跨过午夜，所以 22:00 到 07:00 这样的夜班也行，可以只排工作日，也可以每天都排。工作时间以外员工就休息，不会消耗你的套餐额度。",
        },
        {
          title: "选好心跳间隔",
          text: "在班上时，crewmark CLI 每 15、30、60、120 或 240 分钟唤醒同一个对话，让它领下一个 issue。如果对话已经关了，Crewmark 会用 `claude -p --resume` 以自动模式把它恢复。你的电脑要一直开着。",
        },
        {
          title: "早上查看看板",
          text: "每个 issue 都有评论和活动记录，需要你出面的事会以消息的形式发给你，员工会等你回复。见[怎么让 Claude Code 主动干活](/proactive-claude-code)和[什么是 AI 员工](/ai-employees)；用 Codex 的话，请看 [Codex 长时间任务](/blog/codex-long-running-tasks)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "让 Claude Code 通宵运行" },
  mid: {
    title: "想让 Claude Code 每晚都上夜班？",
    text: "Crewmark 在你设定的时间内按心跳唤醒你的 Claude Code，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Code 能 24 小时运行吗？",
        a: "能，只要有东西让它一直跑下去：电脑关机时用云端会话或云端定时任务；或者在一台保持唤醒的电脑上跑本地会话，并配上不会因权限提示停下的权限模式。用量限制依然存在，所以全天候干活需要一个余量充足的套餐，或者额外的用量额度。",
      },
      {
        q: "可以让 Claude Code 通宵运行吗？",
        a: "可以。用自动模式启动它，给一个明确的目标或一个 TODO 文件，让电脑保持唤醒（或者用 `claude --cloud`），早上再来看结果。需要你处理的事会以问题的形式等着你。",
      },
      {
        q: "合上笔记本后 Claude Code 还会继续跑吗？",
        a: "本地会话不会：它需要电脑开着、claude 进程一直运行，Remote Control 会话也会在终端关闭时结束。云端会话会继续运行，你可以在 Claude App 里查看它。",
      },
      {
        q: "Claude Code 有无人值守模式吗？",
        a: "没有叫这个名字的模式。无人值守运行是把一个不会询问的权限模式（自动模式，或在隔离容器里用 `bypassPermissions`），和 headless 模式（`claude -p`）或云端会话搭配起来。",
      },
      {
        q: "让 Claude Code 跑一整夜会触到用量限制吗？",
        a: "有可能。所有 Claude 套餐里，聊天和 Claude Code 共用一个 5 小时窗口和每周限额；经过验证的 Ultra 账号没有 5 小时限额。用心跳或时间表把工作分散到多个窗口里，而不是一口气集中跑完。",
      },
      {
        q: "让 Claude Code 无人值守运行安全吗？",
        a: "在自己的电脑上用自动模式，而不是 `bypassPermissions`；在每个改动都要经过审核的仓库里工作；生产环境的凭证不要放在它够得到的地方。云端会话默认跑在网络访问受限的隔离虚拟机里。",
      },
    ],
  },
  cta: {
    title: "给 Claude Code 排一个夜班。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照 Claude Code 官方文档（云端会话、定时任务、Remote Control）核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
