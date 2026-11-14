import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # 为这个频道选择默认仓库
@GitHub help          # 列出命令`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot 接入 Slack：设置方法与替代方案 | Crewmark AI",
    description:
      "@GitHub 已于 2026 年 11 月 6 日在 Slack 和 Teams 中正式上线。本文介绍如何设置、Copilot agent 能在聊天线程里做什么、权限与限制，以及它和 Claude Code in Slack 的对比。",
  },
  breadcrumb: "Slack 里的 GitHub Copilot",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "博客 · AI 编程 agent",
    title: "Slack 里的 GitHub Copilot：把一段聊天变成一个 pull request",
    lead: "有了 Slack 里的 GitHub Copilot，你只需在线程里提及 `@GitHub`，Copilot 的云端 agent 就会以整段对话为上下文，排查 bug、创建 issue、编写改动并提交 pull request。它于 2026 年 11 月 6 日在 Slack 和 Microsoft Teams 中正式上线。本文介绍如何设置、它能做什么和不能做什么、谁可以触发它，以及它与 Claude Code in Slack 和全天候在岗的 AI 员工相比如何。",
    cta: "开始使用",
    secondary: "直接看设置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "@GitHub 在 Slack 和 Teams 里能做什么",
      points: [
        "在聊天线程里排查问题、制定计划、编写代码，并创建 issue 和 pull request，整段线程都会作为上下文。",
        "在云端沙箱里异步工作，完成后发一份总结，附上它所创建内容的链接。",
        "可以创建一个 issue、多个 issue，或父子 issue；最多能同时处理同一组织或账户下的 11 个仓库。",
        "支持选择模型、使用仓库管理员配置的 MCP 服务器，以及 Copilot Memory（预览版）。",
        "自 11 月 6 日这次发布起，它会根据你的消息自动选择仓库，在每个 issue 和 PR 里注明来自哪段对话、哪位用户；在 Teams 里还会在聊天旁边用 Canvas 展示计划、diff 和预览。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Slack 里设置 GitHub Copilot",
      steps: [
        {
          title: "确认你可以使用",
          text: "你需要付费的 Copilot 套餐，并对想要修改的仓库拥有写权限。在组织和企业中，“Copilot in the cloud”策略默认开启，但所有者可以将其关闭；对于企业拥有的仓库，需要由管理员安装应用并选择它能访问哪些仓库。",
        },
        {
          title: "安装 GitHub 的 Slack 应用",
          text: "在 slack.github.com 把 GitHub 集成添加到你的工作区（Teams 请前往 teams.github.com）。",
        },
        {
          title: "关联你的账户",
          text: "打开与 GitHub 应用的私信，或在线程里输入 `@GitHub`，按提示关联你的 GitHub 账户。`@GitHub help` 会列出所有命令。",
        },
        {
          title: "为频道设置默认仓库",
          text: "在频道里运行 `@GitHub settings`，选择所有者和仓库，第一个会成为主仓库。私信没有默认仓库，所以要在提示词里写明仓库和分支。",
        },
        {
          title: "用自然语言布置工作",
          text: "提及 `@GitHub` 并说明任务，或者直接回复一条 GitHub 通知。Copilot 会读取线程、在云端工作，然后回复 issue 或 pull request 的链接。",
          code: prompts,
        },
      ],
      source: { label: "来源：GitHub Docs，Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "权限与限制",
      points: [
        "只有对所有选定仓库都有写权限的人才能启动或引导会话；线程里的任何人都可以补充信息。",
        "访客和外部协作者不能启动或引导会话。",
        "在私信里，Copilot 以你关联账户的权限行事；在共享频道里，它以应用身份创建 issue 和 PR。",
        "整段线程都会被作为上下文抓取，并保存在生成的 pull request 里，所以不要在对话里贴密钥等敏感信息。",
        "GitHub 的公告没有说明 Slack 会话如何计费；大范围推广前，请先查看你所在套餐的 Copilot 用量。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Slack 里的 GitHub Copilot vs Claude Code in Slack vs AI 员工",
      headers: ["", "Slack 里的 GitHub Copilot", "Claude Code in Slack", "Crewmark AI 员工"],
      rows: [
        ["工作如何开始", "提及 `@GitHub` 或私信应用", "在团队频道里提及 `@Claude`", "工作时间内由心跳接下一个 issue；你也可以直接指派"],
        ["在哪里运行", "GitHub 的云端沙箱", "Anthropic 的云端（网页版 Claude Code）", "你的电脑上，在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 里"],
        ["交付什么", "issue 和 pull request", "pull request 和代码审查", "处理看板上的任意 issue，并留下评论、给你发消息"],
        ["套餐", "付费 Copilot 套餐", "Pro、Max 和 Ultra，需开启网页版 Claude Code", "你现有的 agent 订阅"],
        ["没有你也能继续工作", "否：每次提及一个任务", "否：每次提及一个任务", "是，在它的工作时间内持续工作"],
      ],
    },
    {
      kind: "text",
      title: "聊天机器人什么时候够用，什么时候不够",
      text: [
        "当 bug 报告出现在线程里时，Slack 里的 Copilot 非常好用：提及一次，pull request 随即就来。但它仍然是被动的：没人开口就什么也不会发生，而且每次提及只对应一个任务。如果你想要一个有岗位和目标、能自己消化待办列表的 agent，可以看看 [AI 员工](/ai-employees)和[如何让 Claude Code 主动工作](/proactive-claude-code)。更多运行多个 agent 的方式，见 [Claude Code 编排工具](/blog/claude-code-orchestration-tools)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "从“@ 一下机器人”到一名自己接下一个任务的员工",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成一名有岗位、目标和工作时间的 AI 员工。它按心跳醒来，从共享看板上接下一个 issue，边做边写评论，需要你拍板时给你发消息。",
      ],
      steps: [
        {
          title: "像在聊天里一样分配工作",
          text: "在任意浏览器或手机上创建一个 issue 并指派出去，员工会立刻收到通知。",
        },
        {
          title: "让它持续工作",
          text: "在你两次发消息之间，它会按 15、30 或 60 分钟的心跳处理自己的 issue。",
        },
        {
          title: "快速修复继续交给 Copilot",
          text: "两者并不冲突：线程里的一次性请求用 `@GitHub`，持续的待办列表交给员工。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Slack 里设置 GitHub Copilot" },
  mid: {
    title: "想要一个不用等人 @ 的 agent？",
    text: "Crewmark 按心跳唤醒 Claude Code 或 Codex，给它一个岗位、一个目标和一块 issue 看板。",
    button: "开始使用",
  },
  faq: {
    title: "Slack 里的 GitHub Copilot 常见问题",
    items: [
      {
        q: "Slack 里的 GitHub Copilot 正式上线了吗？",
        a: "是的。GitHub 于 2026 年 11 月 6 日宣布，Slack 和 Teams 里的 @GitHub 正式上线。",
      },
      {
        q: "如何把 GitHub Copilot 添加到 Slack？",
        a: "从 slack.github.com 安装 GitHub 的 Slack 应用，然后私信该应用或在线程里提及 `@GitHub`，并关联你的 GitHub 账户。用 `@GitHub settings` 为频道设置默认仓库。",
      },
      {
        q: "在 Slack 里用 Copilot 需要什么套餐？",
        a: "需要付费的 Copilot 套餐，并对它要修改的仓库拥有写权限。组织所有者可以关闭它所依赖的“Copilot in the cloud”策略。",
      },
      {
        q: "Slack 里的 GitHub Copilot 能提交 pull request 吗？",
        a: "能。它会排查问题，在云端沙箱里编写改动并提交 pull request，然后在线程里发一份附带链接的总结。",
      },
      {
        q: "它支持 Microsoft Teams 吗？",
        a: "支持。@GitHub 在 Teams 里也已正式上线，并会在对话旁边用 Canvas 展示计划、代码改动和预览。",
      },
      {
        q: "谁可以在 Slack 频道里触发 Copilot？",
        a: "只有对所有选定仓库都有写权限的人才能启动或引导会话。线程里的其他人可以补充信息；访客和外部协作者无法触发它。",
      },
      {
        q: "Slack 里的 GitHub Copilot 和 Claude Code in Slack 有什么区别？",
        a: "两者都能把 Slack 里的一次提及变成一个云端编程任务。Copilot 需要付费 Copilot 套餐，会创建 issue 和 PR；Claude Code in Slack 需要 Claude Pro、Max 或 Ultra 套餐，并开启网页版 Claude Code。",
      },
    ],
  },
  cta: {
    title: "给你的团队一位不用等人开口的 AI 队友。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 7 日对照 GitHub 的更新日志（2026 年 11 月 6 日）、GitHub Docs 和 Anthropic 的 Claude Code 文档查证。",
  disclaimer:
    "Crewmark 是独立产品，与 GitHub、Microsoft、Slack 或 Anthropic 无关，也未获其背书。产品名称是其各自所有者的商标。",
};
