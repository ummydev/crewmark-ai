import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# 交互式：先规划好想要的结果，再交给 Codex 一个它能自己检查的目标
/plan
/goal all tests in test/auth pass and the lint step is clean

# Headless 模式，从脚本或 cron 运行：允许它修改工作区里的文件
codex exec --sandbox workspace-write "Work through TODO.md in order"

# 第二天早上，或下一次 cron 运行时：继续同一个会话
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 长时间任务：让 Codex 通宵运行",
    description:
      "让 OpenAI Codex 连续干几个小时甚至通宵：/goal 和 /plan、云端任务、codex exec resume、让 Mac 保持唤醒、用手机查看进度、用量限制，以及哪些情况会让它停下来。",
  },
  breadcrumb: "Codex 长时间任务",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "博客 · Codex",
    title: "Codex 长时间任务：怎么让 Codex 通宵或在后台运行",
    lead: "Codex 可以在一个任务上连续干好几个小时，你睡觉时也能继续，前提是照顾好四件事：一个它能自己检查的目标；一台保持唤醒的电脑（或者一个云端任务）；不用等你批准的权限设置；以及套餐里足够的余量。这篇指南讲运行 Codex 长时间任务的几种方式，从 Goal 模式到云端任务和 `codex exec resume`，每种方式做不到什么，以及怎么给 Codex 排一个固定的夜班。",
    cta: "开始使用",
    secondary: "直接看怎么通宵跑",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "让 Codex 持续运行的几种方式",
      text: ["有的方式一直沿用同一个对话，所以 Codex 保留着上下文；有的每次都从头开始。"],
      headers: ["方式", "电脑能不能休眠", "是否同一个对话", "边界", "适合"],
      rows: [
        ["Goal 模式（`/goal`）", "本地工作不能", "是", "目标达成，或需要你做决定时", "终点明确的单个任务"],
        ["Codex 云端任务", "能", "是", "任务完成时；由你审查后开 pull request", "睡前交出去的一个任务"],
        ["对话里的定时任务", "本地文件不能：电脑要开着，应用要在运行", "是", "按时间表运行：按分钟、每天或每周", "隔一段时间回头看同一份工作"],
        ["用 cron 调用 `codex exec`", "不能", "是，用 `codex exec resume`", "按你的 cron 节奏；需要自己搭", "脚本和 CI"],
        ["Crewmark 心跳", "不能", "是", "按你设定的工作时间，可以跨过午夜", "一份长期工作，从看板上逐个领 issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么让 Codex 通宵运行",
      steps: [
        {
          title: "给它一个能自己检查的目标",
          text: "在桌面应用、CLI 或 IDE 插件里，`/goal` 会启动 Goal 模式：目标文字既是第一句提示词，也是终点。如果你还不确定怎样才算完成，`/plan` 会向你提问，把想要的结果变成一个有可衡量标准的目标。在目标里写上一项检查，比如某组测试全部通过。",
          code: commands,
        },
        {
          title: "让电脑保持唤醒，或者把任务交给云端",
          text: "在 Mac 上做本地工作时，在桌面应用里打开“Prevent sleep while running”。Codex 云端任务（Codex Cloud）在自己的工作区里运行，电脑休眠时也会继续干活；选择 Work in > Cloud 和一个环境，就能启动一个云端任务。",
        },
        {
          title: "设好批准方式，别让它凌晨 2 点停下来",
          text: "Goal 模式沿用原有的沙盒和批准策略，需要做决定时会暂停。用 `--sandbox workspace-write` 让它可以修改工作区，或者用“Approve for me”，让审查者替你处理常规请求。`--full-auto` 已经不再支持，`danger-full-access` 只该用在隔离的 runner 或容器里。",
        },
        {
          title: "提前想好用量限制",
          text: "Codex 和你的 ChatGPT 套餐共用额度：滚动的 5 小时窗口加每周限额，云端任务也从同一个额度池里扣。ChatGPT Pro 目前没有 5 小时限额，但可能有每周限额。用量额度（credits）或 API key 能让本地工作继续下去。具体数字见 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        },
        {
          title: "用手机查看进度",
          text: "在 ChatGPT App 里可以跟进任务、批准命令、审查 diff，云端任务和你在 Settings > Connections 下连接的 Mac 或 Windows 电脑都支持。被连接的电脑必须保持唤醒、在线。见 [Codex 远程控制](/blog/codex-remote-control)。",
        },
      ],
      source: { label: "来源：OpenAI 的 Codex 长时间任务文档（英文）", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "哪些情况会让 Codex 长时间任务停下",
      points: [
        "只有你能做的决定。Goal 模式会暂停，而不会自己扩大权限，所以离开前先检查好批准设置。",
        "本地工作时电脑休眠或连接中断。OpenAI 建议在预计会断开连接前先暂停目标，之后再恢复。",
        "用量限制。要等窗口重置，或者你加了用量额度，它才会继续。",
        "两个对话改同一批文件。给并行的对话各开一个 git worktree。",
        "活干完了。目标达成后它就会停下，这正是你想要的；如果是一串任务，就把它们写进一个文件，让它逐个做完。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给 Codex 排一个夜班",
      text: [
        "长任务总会结束，一份工作却不会。Crewmark 把一个 Codex 对话变成有工作时间和心跳的 AI 员工，让它不断从看板上领下一个 issue，不用你来排。",
      ],
      steps: [
        {
          title: "设定工作时间",
          text: "工作时间可以跨过午夜，所以 22:00 到 07:00 这样的夜班也行，可以只排工作日，也可以每天都排。工作时间以外员工就休息，不会消耗你的套餐额度。",
        },
        {
          title: "选好心跳间隔",
          text: "在班上时，crewmark CLI 每 15、30、60、120 或 240 分钟用 `codex queue --resume` 往同一个 Codex 对话里排一条消息并启动它，让员工领下一个 issue。你的电脑要一直开着。",
        },
        {
          title: "早上查看看板",
          text: "每个 issue 都有评论和活动记录，需要你出面的事会以消息的形式发给你，员工会等你回复。见[怎么让 Codex 主动干活](/proactive-codex)和[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "让 Codex 通宵运行" },
  mid: {
    title: "想让 Codex 每晚都上夜班？",
    text: "Crewmark 在你设定的时间内按心跳唤醒你的 Codex，从看板上给它派下一个 issue。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Codex 能通宵运行吗？",
        a: "能。用 `/goal` 给它一个目标，用“Prevent sleep while running”让 Mac 保持唤醒（或者用 Codex 云端任务，电脑休眠时它也会继续干活），设好批准方式让它不用等你，早上再来看结果。",
      },
      {
        q: "怎么让 Codex 在后台运行？",
        a: "不打开交互界面，从脚本、cron 或 CI 里运行 `codex exec`，之后用 `codex exec resume --last` 继续同一个会话。或者在网页版或桌面应用里启动一个 Codex 云端任务，然后关掉窗口。",
      },
      {
        q: "Codex 的 Goal 模式是什么？",
        a: "Goal 模式用 `/goal` 启动，让 Codex 一直朝你写下的目标干下去；目标文字既是第一句提示词，也是完成标准。你可以在桌面应用的进度栏里暂停、恢复、编辑或清除它。",
      },
      {
        q: "电脑休眠时 Codex 还会继续干活吗？",
        a: "云端任务会。本地工作需要电脑保持唤醒，在 Mac 上可以用桌面应用的“Prevent sleep while running”设置；你用手机控制的那台已连接电脑，也必须保持唤醒、在线。",
      },
      {
        q: "长时间运行 Codex 会触到用量限制吗？",
        a: "有可能。Codex 用的是你 ChatGPT 套餐的 5 小时窗口和每周限额，云端任务也从同一份额度里扣。用时间表或心跳把工作分散到多个窗口里，而不是一口气集中跑完。",
      },
      {
        q: "让 Codex 无人值守运行安全吗？",
        a: "在自己的电脑上保持 `--sandbox workspace-write` 或“Approve for me”，`danger-full-access` 只在隔离的 runner 或容器里用，并且在改动要经过审核的仓库里工作。",
      },
    ],
  },
  cta: {
    title: "给 Codex 排一个夜班。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照 OpenAI 的 Codex 官方文档（长时间任务、Codex Cloud、非交互模式、手机端、定时任务）核对。",
  disclaimer: "Crewmark 是独立产品，与 OpenAI 无关，也未获其背书。Codex 和 ChatGPT 是 OpenAI 的商标。",
};
