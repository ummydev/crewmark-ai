import type { GuideCopy } from "@/components/landing/guide-article";

// zh translation of /blog/claude-code-background-agents; the English master is src/content/blog/claude-code-background-agents.ts.

const docs = "https://code.claude.com/docs/en/headless";

const cron =
  '# crontab -e：工作日 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1';

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 后台运行：headless、--bg 与定时任务 | Crewmark",
    description:
      "让 Claude Code 在后台干活：后台任务、--bg 和 agent view、claude -p 配 cron、云端会话、定时任务，以及每种方式需要的权限。",
  },
  breadcrumb: "Claude Code 后台 agent",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "怎么在后台运行 Claude Code agent",
    lead: "后台 agent 会在你忙别的事时继续干活：一个丢到后台的长测试、一个用 --bg 启动后关掉终端的会话，或者一个每天早上由 cron 启动的 headless claude -p 任务。Claude Code 对每种情况都有对应的工具。这篇教程讲怎么用它们、每种方式靠什么保持运行，以及无人值守时需要哪些权限。",
    cta: "申请抢先体验",
    secondary: "直接看 headless 模式",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "让 Claude Code 在后台运行的五种方式",
      text: ["区别在于什么东西必须一直开着，以及由谁来启动工作。"],
      headers: ["", "怎么启动", "什么时候保持运行", "适合"],
      rows: [
        ["后台任务", "Ctrl+B，或 Claude 自己在后台运行命令", "会话开着时", "一个对话里的长时间构建和测试、subagent"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "电脑开着时（终端可以关）", "现在启动、稍后再看的多个会话"],
        ["Headless 模式", "`claude -p \"<prompt>\"`，从脚本或 cron 启动", "命令运行期间", "脚本、cron 任务、CI"],
        ["云端会话", "`claude --cloud \"<task>\"`", "在 Anthropic 的服务器上运行（笔记本可以合上）", "GitHub 仓库上的长任务"],
        ["定时任务", "`/schedule`、桌面应用或 `/loop`", "看类型：云端、应用开着，或会话开着", "重复性工作；见[怎么让 Claude Code 主动干活](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "会话里的后台任务",
      text: [
        "Claude 正在运行 Bash 命令或 subagent 时按 Ctrl+B（在 tmux 里按两次），就能把它放到后台，你可以继续和 Claude 对话。Claude 也可以自己在后台启动命令。Claude 派生的 subagent 默认就在后台运行。",
        "输入 `/tasks` 可以列出正在运行的 shell 和 subagent，查看它们的状态。在本地终端会话里，后台命令没有时间限制，但 Claude Code 退出时它也会停止。想让几个 agent 并排干活，看[怎么同时运行多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
      ],
    },
    {
      kind: "text",
      title: "Agent view：比终端活得更久的会话",
      text: [
        "`claude --bg \"<prompt>\"` 在后台启动一个会话并立即返回；`/bg` 把你当前所在的会话移到后台。它们由一个监督进程运行，所以关掉终端不会让它们停下，但关机或重启电脑会；没有连接的空闲会话大约一小时后会被停止。",
        "`claude agents` 打开 agent view；`claude attach <id>`、`claude logs <id>` 和 `claude stop <id>` 用来管理单个会话。Agent view 还是研究预览版，命令可能会变。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "用 claude -p 以 headless 模式运行 Claude Code",
      steps: [
        {
          title: "跑一个提示词，然后退出",
          text: "`-p`（或 `--print`）不打开交互界面直接运行 Claude Code，做完就退出，成功时退出码为 0。也可以用管道把内容传进去。",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "拿到脚本能读的输出",
          text: "`--output-format json` 返回结果，以及会话 ID 和元数据，其中包括 `total_cost_usd`，这是在你本机算出的估计值。`stream-json`（配合 `--verbose`）会在事件发生时实时输出。",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "只放行它需要的工具",
          text: "headless 模式下没人来批准权限提示。从 v2.1.302 起，没有指定模式的运行会以 Manual 模式启动，拒绝一切需要批准的操作。用 `--allowedTools` 列出它可以做的事，用 `--permission-mode dontAsk` 直接拒绝其余操作，而不是一直等着。",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "给运行设上限",
          text: "`--max-turns` 在达到一定的 agent 轮数后停止，`--max-budget-usd` 在达到估算费用时停止（可能会略微超出）。两者都只能和 `-p` 一起用。",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "之后接着同一个对话",
          text: "从 JSON 输出里保存会话 ID，传给 `--resume`；或者用 `--continue` 接着当前目录下最近的一个会话。",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "用 cron 定时运行",
          text: "Anthropic 的文档没有 cron 示例，下面这个只用了文档里写到的参数。cron 的 PATH 很精简，所以要用 `which claude` 给出的完整路径，并先建好日志文件夹。这里不要加 `--bare`：它会跳过你的订阅登录，需要 API key。",
          code: cron,
        },
      ],
      source: { label: "来源：Anthropic 的 headless 模式文档（英文）", href: docs },
    },
    {
      kind: "text",
      title: "无人值守运行的权限",
      points: [
        "`dontAsk` 加一个 `--allowedTools` 列表是最严格的选择：不在列表里的一律拒绝。",
        "`auto` 让一个分类器代替你审查每个操作。Anthropic 指出它并不能保证安全。",
        "`acceptEdits` 放行文件修改和简单的文件命令，但不放行其他 shell 命令。",
        "`bypassPermissions` 跳过权限提示和安全检查。Anthropic 说只应在没有网络的隔离容器或虚拟机里用，因为它对提示词注入毫无防护。",
        "要给一个项目里的每次运行都定规则，就把 `permissions.allow` 和 `permissions.deny` 写进 `.claude/settings.json`。deny 规则永远优先。",
      ],
    },
    {
      kind: "text",
      title: "云端方案：电脑关着的时候",
      points: [
        "云端会话：`claude --cloud \"<task>\"` 基于你的 GitHub 分支在 Anthropic 的基础设施上运行，合上笔记本也会继续。用 `claude -p \"...\" --cloud <session-id>` 发送后续消息。",
        "云端定时任务：用 `/schedule` 或在 claude.ai/code 上创建，可以按时间表（最多每小时一次）、通过 API 调用或由 GitHub 事件触发运行。支持 Pro、Max、Ultra、Team 和 Enterprise；目前是研究预览版。",
        "GitHub Actions：`anthropics/claude-code-action@v1` 配 `schedule` 触发。用 `claude setup-token` 生成的 OAuth token 走你的订阅；用 API key 则按 token 计费。",
      ],
    },
    {
      kind: "steps",
      kicker: "用 Crewmark",
      title: "给后台 agent 一份长期的工作",
      text: [
        "后台任务、agent view 和 cron 启动的都是你已经想好的工作。Crewmark 则给 Claude Code 会话一个长期的岗位：工作时间内按心跳醒来，从看板上领下一个 issue，卡住了就给你发消息。",
      ],
      steps: [
        {
          title: "把一个会话变成员工",
          text: "选一个岗位和一个用数字写的目标，在 Claude Code 里运行 Crewmark 给你的设置命令。这个对话就成了这名员工。",
        },
        {
          title: "让心跳来启动工作",
          text: "Crewmark daemon 在工作时间内每 15、30 或 60 分钟唤醒这个会话，用的是你已经付费的订阅；下班时间不打扰它。",
        },
        {
          title: "派 issue，回消息",
          text: "把工作作为 issue 加到看板上；员工会接手，边做边评论，需要审核时来问你。看看[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 claude -p 以 headless 模式运行 Claude Code" },
  mid: {
    title: "想让它自己挑下一个任务？",
    text: "Crewmark 在你设定的工作时间内按心跳唤醒你的 Claude Code 会话，从看板上给它派下一个 issue。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude Code 后台 agent 常见问题",
    items: [
      {
        q: "怎么让 Claude Code 在后台运行？",
        a: "在会话里按 Ctrl+B，把正在运行的命令或 subagent 放到后台。要在后台启动整个会话，用 `claude --bg \"<prompt>\"`。脚本和 cron 用 headless 模式：`claude -p \"<prompt>\"`。",
      },
      {
        q: "Claude Code 的 headless 模式是什么？",
        a: "用 `-p`（或 `--print`）运行 Claude Code：它接收一个提示词，不打开交互界面就开始工作，完成后退出，把结果输出为文本、JSON 或 JSON 事件流。",
      },
      {
        q: "关掉终端后，后台 agent 还会继续跑吗？",
        a: "会话里的后台任务在 Claude Code 退出时停止。用 `--bg` 启动的会话在终端关掉后继续运行，直到电脑关机。云端会话和云端定时任务在电脑关机时也会继续。",
      },
      {
        q: "无人值守运行该用哪种权限模式？",
        a: "从 `--permission-mode dontAsk` 加一个只包含这个任务所需工具的 `--allowedTools` 列表开始。`bypassPermissions` 只在没有网络的隔离容器或虚拟机里用。",
      },
      {
        q: "claude -p 用的是我的 Claude 订阅吗？",
        a: "它用的是你当前登录的身份，除非你加了 `--bare`，那样会跳过登录、需要 API key。Anthropic 的文档没有说明 headless 运行如何计入套餐的用量限制。",
      },
      {
        q: "怎么查看后台 agent 的状态？",
        a: "会话里用 `/tasks`，用 `--bg` 启动的会话用 `claude agents`，headless 运行看日志文件或 JSON 输出。",
      },
    ],
  },
  cta: {
    title: "给 Claude Code 一份长期的工作。",
    text: "Crewmark 把 Claude Code 会话变成有岗位、有目标、有工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 2 日对照 Anthropic 的 Claude Code 官方文档核对。",
  disclaimer: "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
