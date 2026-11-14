import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// 放行请求
{ "action": "allow" }

// 拒绝请求：deny_reason 会展示给用户（最多 500 个字符），
// reference_id 只进入你的合规活动记录
{
  "action": "deny",
  "deny_reason": "这条提示词似乎包含客户的银行卡数据。",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude inference hooks：工作原理与配置方法 | Crewmark AI",
    description:
      "Claude inference hooks（推理钩子）已于 2026 年 11 月 5 日正式发布，会把每条提示词和工具调用发到你的安全服务器，由它判定放行或拒绝。本文讲清工作原理、配置步骤、限制，以及它与 Claude Code hooks 的区别。",
  },
  breadcrumb: "Claude inference hooks",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude",
    title: "Claude inference hooks：每条提示词发出前先过一道放行或拒绝检查",
    lead: "inference hooks（推理钩子）让 Claude Enterprise 组织把每条提示词（也可以包括每次工具调用）发到自己的安全服务器，等它给出放行（allow）或拒绝（deny）的判定后，Claude 才开始运行。该功能于 2026 年 11 月 5 日正式发布，同时推出的还有处于 beta 阶段的安全中心（security center）。由于检查发生在 Anthropic 的服务器上，一次配置就能覆盖 claude.ai、Claude Code、Cowork 及其他 Claude 产品，员工电脑上无需安装任何东西。本文介绍它的工作原理、配置方法、限制，以及它与你在 Claude Code 里编写的 hooks 有何不同。",
    cta: "开始使用",
    secondary: "直接看配置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "inference hooks 的工作原理",
      text: [
        "你的组织（或它的安全厂商）运行一台 AI 安全服务器，也就是一个 HTTPS 端点。有人发送提示词时，Anthropic 会把对话记录 POST 到这个端点，并按 Standard Webhooks 规范签名，然后等待判定。判定为 allow 时推理继续进行；判定为 deny 时，请求根本不会到达模型，用户会看到你给出的原因，以及管理员预设的一段固定提示。",
      ],
      points: [
        "两种事件：`prompt` 在每次受管控的推理请求之前触发；`tool_call` 在 Claude 回复中的工具调用执行之前触发，需要开启 Validate tool calls（校验工具调用）。",
        "整个组织只需配置一次：claude.ai、Claude Desktop 和移动端、Claude Code（包括 CLI）、Cowork、Claude for Microsoft 365、Claude Tag 以及 Claude in Chrome。",
        "你的服务器能看到的内容：对话记录文本、工具调用及其结果、从附件中提取的文本。原始文件或图片字节、系统提示词和工具定义永远不会发送。",
        "判定只有 allow 和 deny 两种，不支持改写或脱敏提示词。",
        "每一次拒绝都会记录在组织的 Activity Feed（活动动态）中。",
      ],
    },
    {
      kind: "table",
      title: "inference hooks、Claude Code hooks 与 Compliance API 对比",
      text: [
        "名字很像，但它们是三种不同的工具。Claude Code hooks 按项目或按用户配置，在开发者自己的机器上运行；inference hooks 由组织统一设置一次，在 Anthropic 一侧运行。",
      ],
      headers: ["", "Inference hooks", "Claude Code hooks", "Compliance API"],
      rows: [
        ["由谁配置", "组织的 Owner 或 Primary owner", "每位开发者或每个项目，写在 `settings.json` 里", "安全或合规团队"],
        ["在哪里运行", "Anthropic 的服务器调用你的 HTTPS 端点", "开发者机器上的 shell 命令", "由你调用 Anthropic 的 API"],
        ["触发时机", "推理之前，以及工具调用执行之前", "PreToolUse、PostToolUse、Stop 等事件发生时", "事后"],
        ["覆盖范围", "Enterprise 组织内的所有 Claude 产品", "使用该配置的 Claude Code 会话", "活动、聊天、文件、对话记录"],
        ["能否拦截", "能：放行或拒绝", "能，限支持拦截的事件", "不能：只做审计和导出"],
        ["适用套餐", "Claude Enterprise", "所有 Claude Code 用户", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何配置 inference hooks",
      text: [
        "你需要 Owner 或 Primary owner 角色（Admin 不够），以及一个使用 443 端口的公网 HTTPS 端点。ngrok 之类的隧道会被拦截，所以测试服务器要部署在你自己控制的域名上。",
      ],
      steps: [
        {
          title: "允许该功能",
          text: "在 claude.ai 中打开 Organization settings → Data and privacy（组织设置 → 数据与隐私），在 Inference hooks 下开启 Allow for your organization（为你的组织允许）。这一步并不会开始检查：Enforce verdicts（执行判定）仍保持关闭。",
        },
        {
          title: "添加端点并保存签名密钥",
          text: "点击 Configure（配置），填入你的 `https://` URL 并保存。首次保存时会显示一次 webhook 签名密钥：务必保存好，你的服务器要用它验证每一个请求。",
        },
        {
          title: "添加请求头并测试",
          text: "最多可添加 16 个静态请求头，方便你的服务器验证来自 Anthropic 的请求，然后点击 Test connection（测试连接）。它会发送一条合成的提示词，并报告判定结果和往返耗时。",
        },
        {
          title: "以 HTTP 200 JSON 返回判定",
          text: "每个请求都用 HTTP 200 和一个 `action` 作答。非 200 状态码会被视为故障，而不是拒绝。",
          code: verdict,
        },
        {
          title: "选择故障处理方式和超时时间",
          text: "Block the request（拦截请求）表示故障时关闭（fail closed），Allow the request（放行请求）表示故障时放行（fail open）。判定超时可设为 1 到 10,000 毫秒，默认 5,000；判定太慢会被视为无法连接。连续失败会触发熔断器，在服务器恢复之前一律按你的故障处理设置执行。",
        },
        {
          title: "逐步推广，再开启执行",
          text: "先用 Shadow mode（影子模式），它会照常发送判定但不拦截任何请求；只检查一定比例的请求，必要时排除自定义角色，然后再开启 Enforce verdicts。改动大约一分钟内同步到所有服务器。",
        },
      ],
      source: { label: "来源：Claude Platform 文档，Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "限制与注意事项",
      points: [
        "仅限 Enterprise：Team、Pro 和 Max 不可用，Claude Platform（API）组织不可用，Amazon Bedrock 和 Google Cloud 上也不可用。",
        "纯图片内容（例如文档截图）不会被检查，因为原始字节从不发送。",
        "被拒绝的消息仍会留在对话记录里，并随之后的每条消息再次发送。在 Claude Code 中，可以用 `/rewind` 回退到引入它的那条提示词，或用 `/clear` 重新开始。",
        "Anthropic 自己的一些后台模型调用不受管控，例如托管的 Claude Security 扫描、GitHub pull request 上的 Code Review，以及智能报告。在 Claude Code 本地运行 `/code-review` 则受管控。",
        "在语音模式下，有一小部分工具调用不会被发送，所以不要把 hooks 当作那里唯一的管控手段。",
        "同一份公告还推出了安全中心（beta），用来把你的 Claude、Cowork 和 Claude Code 设置与 Anthropic 推荐的配置进行对比，此外还有处于 beta 阶段的集中管理和访问控制。",
      ],
    },
    {
      kind: "text",
      title: "为什么这对自主运行的 agent 很重要",
      text: [
        "当 Claude Code 无人值守地工作，按计划或在后台运行时，没有人会在每条提示词发出前逐一查看。inference hooks 让公司对每个请求和每次工具调用都有一道内联检查，无论 agent 在哪里运行；影子模式还能让安全团队在真正拦截之前先调好策略。如果需要单台机器上按项目的防护，Claude Code 自己的 hooks 和权限规则依然适用；权限模式见 [Claude Code plan mode](/blog/claude-code-plan-mode)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "为你不在时也在工作的 AI 员工设好护栏",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue。在 Claude Enterprise 套餐下，inference hooks 会像检查其他人一样检查它的提示词。",
      ],
      steps: [
        {
          title: "决定哪些事要你点头",
          text: "每个员工在执行发布、合并或花钱等有风险的操作前都会先请示，你在同一个收件箱里批准。",
        },
        {
          title: "把记录留在看板上",
          text: "每个 issue 都保留员工的评论和状态变更，你可以把它做过的事和安全团队的日志对照着查看。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Claude Code 主动工作](/proactive-claude-code)和[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "配置 Claude inference hooks" },
  mid: {
    title: "安全已经设好，现在给 Claude Code 安排一份工作。",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude inference hooks 常见问题",
    items: [
      {
        q: "什么是 Claude inference hooks？",
        a: "Claude Enterprise 的一项功能：把每条提示词（也可以包括每次工具调用）发到组织的安全服务器，由它在 Claude 运行前回答放行或拒绝。该功能于 2026 年 11 月 5 日正式发布。",
      },
      {
        q: "inference hooks 支持 Claude Code 吗？",
        a: "支持。一次配置覆盖 Enterprise 组织内的所有 Claude 产品，包括 CLI 和桌面应用中的 Claude Code，开发者机器上无需安装任何东西。",
      },
      {
        q: "inference hooks 和 Claude Code hooks 有什么区别？",
        a: "Claude Code hooks 是每位开发者或每个项目在 `settings.json` 中配置的 shell 命令，在本地于 PreToolUse 等事件发生时运行。inference hooks 由组织统一设置一次，在推理之前于 Anthropic 的服务器上运行，覆盖所有 Claude 产品。",
      },
      {
        q: "哪些套餐可以用 inference hooks？",
        a: "仅 Claude Enterprise，由 Owner 或 Primary owner 配置。Claude Platform API 组织不可用，Amazon Bedrock 和 Google Cloud 上也不可用。",
      },
      {
        q: "inference hook 能对敏感数据做脱敏吗？",
        a: "不能。判定只有放行或拒绝；不支持改写或脱敏提示词。",
      },
      {
        q: "如果我的安全服务器宕机了会怎样？",
        a: "由你的故障处理设置决定：拦截请求（fail closed）或不经检查直接放行（fail open）。熔断器会停止调用出故障的服务器，等它恢复后自动复位。",
      },
      {
        q: "什么是 Claude 安全中心？",
        a: "与 inference hooks 一同公布、位于 Organization settings 中的一个 beta 页面，它会把你的 Claude、Cowork 和 Claude Code 设置与 Anthropic 推荐的配置进行对比，并生成供审计人员查看的报告。",
      },
    ],
  },
  cta: {
    title: "基于 Claude Code 的 AI 员工，在你的护栏之内工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Anthropic 的公告、Claude 帮助中心和 Claude Platform 文档查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
