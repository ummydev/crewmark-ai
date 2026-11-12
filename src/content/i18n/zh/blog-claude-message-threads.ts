import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# 创建 helper。这一步不会发送请求。
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# 第 1 轮创建 thread，并发送完整对话
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# 第 2 轮只发送新消息
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# 第 1 轮：完整对话，外加
"thread": {"type": "create"}

# 之后每一轮：只发新消息，不带 system 和 tools，外加
"thread": {"type": "continue", "previous_message_id": "<上一次响应的 id>"}

# thread 的每个请求都要带
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude message threads：让长时间 agent 会话更快，一文讲清 | Crewmark",
    description:
      "Anthropic 的 message threads 让 Claude 的对话只发送一次，之后只发新增内容。Claude Code 有什么变化、如何使用 beta API、5 分钟过期与各项限制。",
  },
  breadcrumb: "Claude message threads",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "博客 · Claude",
    title: "Claude message threads 是什么，怎么用",
    lead: "Message threads 是 Claude API 的一项功能，自 2026 年 11 月 2 日起进入公开测试（beta）。agent 不再每一轮都上传整段对话，而是先发送一次，之后只发新消息。Anthropic 表示已为大多数 Claude Code 用户开启该功能，在 50 万到 100 万 token 的请求上，首个 token 的中位耗时下降约 35%。本文介绍哪些会变、哪些不变、如何在自己的 agent 里使用，以及各项限制。",
    cta: "申请抢先体验",
    secondary: "跳到使用步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Message threads 是什么",
      text: [
        "没有 thread 时，agent 循环的每一轮都要重新上传完整对话，API 也要把这些内容重新校验、重新分词。一个编程 agent 在一次会话里会发出数百个请求，对话一旦达到几十万 token，这种重复发送就会拖慢 Claude 开始回答的时间。有了 thread，API 会在两轮之间保存对话，大部分工作只需处理新增的这一轮。",
      ],
      points: [
        "首个 token 更快：Anthropic 实测，在 50 万到 100 万 token 的 Claude Code 请求上，中位耗时下降约 35%。对话越长，效果越明显。",
        "请求更小：每一轮只带新消息、工具结果或截图。",
        "token 和价格不变：Claude 每一轮仍会读完整段对话，定价和速率限制都不变。",
        "存活时间短：thread 在最后一次请求 5 分钟后过期，只保存在内存中并加密，不会写入磁盘。",
        "适用范围：Claude API、AWS 上的 Claude Platform、Google Cloud 上的 Claude Models（由 Anthropic 托管）和 Microsoft Foundry，支持所有模型。",
      ],
    },
    {
      kind: "table",
      title: "使用 thread 与不使用的区别",
      headers: ["", "不使用 thread", "使用 thread"],
      rows: [
        ["每个请求发送", "完整对话、`system` 和 `tools`", "只发新消息和上一次响应的 `id`"],
        ["首个 token 的耗时", "随对话变长而增加", "长对话中更低、更稳定"],
        ["计费 token", "每一轮都是完整对话", "相同"],
        ["价格与速率限制", "标准", "不变"],
        ["谁保存对话", "你的应用", "你的应用，外加每次请求后 5 分钟内的 API"],
        ["零数据留存（ZDR）", "符合条件", "不符合条件"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在自己的 agent 里使用 message threads",
      text: [
        "Claude Code 已经替你做好了这件事。如果你在 Messages API 上自己搭 agent，SDK 的 thread helper 是最短的路径。",
      ],
      steps: [
        {
          title: "创建 thread helper",
          text: "传入与 Messages 请求相同的字段。helper 会加上 `message-threads-2026-08-12` beta 请求头，在第一轮创建 thread，之后只发送新消息，并把完整对话保存在内存里。",
          code: sdk,
        },
        {
          title: "或者自己发送 thread 字段",
          text: "用 cURL 或普通的 `create` 调用时，在每个请求里加上 `thread`，并在每次都带上 beta 请求头。始终从最新一次响应的 `id` 继续；每个 `id` 只能继续一次。",
          code: raw,
        },
        {
          title: "保持模型和设置不变",
          text: "`system` 和 `tools` 只在第一个请求里发送。`model`、`thinking`、`tool_choice`、顶层的 `cache_control` 和 beta 请求头在每一轮都必须保持一致；一旦改动，会返回 400 错误 `thread_fingerprint_mismatch`。要改动就新开一个 thread。",
        },
        {
          title: "自己保留一份，遇到 404 就重发",
          text: "Thread 只是尽力而为的服务。当 continue 请求返回 404 和 `thread_not_found`（thread 已过期、上一轮没有被保存，或是由备用模型写入的），请在新的 create 请求里重新发送完整对话。SDK helper 会自动做一次。",
        },
        {
          title: "开启 prompt caching",
          text: "Thread 不会替你缓存 prompt。请在每个请求里发送顶层的 `cache_control`，让每一轮都从缓存读取之前的对话；带 `thread` 的请求最多只能有 4 个断点。",
        },
      ],
      source: { label: "来源：Anthropic 的 message threads 文档", href: docs },
    },
    {
      kind: "text",
      title: "限制，以及 thread 不支持什么",
      points: [
        "不能与 Message Batches、token 计数、按需压缩（compaction）或上下文编辑一起使用（`keep: \"all\"` 的 `clear_thinking_20251015` 除外）。",
        "启用了 HIPAA readiness 或 Inference hooks 的组织不能使用；这类请求会返回 400 错误 `thread_unsupported_request`。",
        "不符合零数据留存条件：API 把 thread 保存在内存里，最后一次使用后最多 1 小时就会删除。",
        "没有列出、读取或删除 thread 的 API，thread 也只能追加。想压缩的话，用你自己写的摘要新开一个 thread。",
        "遇到拒绝（refusal）后，不要继续这个 thread：去掉引发拒绝的那一轮，新开一个。",
        "同一个 thread 的每个请求要用相同的 API key 和 workspace，否则无法继续。",
      ],
    },
    {
      kind: "text",
      title: "对 Claude Code 用户意味着什么",
      text: [
        "你不需要改任何东西：Anthropic 表示大多数 Claude Code 用户默认已开启 thread。收益体现在长会话里，在很大的对话深处发起一轮时，Claude 会更早开始回答。你的用量不会下降，因为 Claude 每一轮仍会读完整段对话。",
        "按 API 文档，thread 在最后一次请求 5 分钟后过期。停顿更久后回到会话时，第一个请求会重新发送完整对话，之后的几轮才会变快。按计划唤醒的[主动式 Claude Code 会话](/proactive-claude-code)也是同样的情况。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让长时间的 Claude Code 会话自己干活",
      text: [
        "Message threads 让长会话更快，Crewmark 让它们更主动。它给 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话一个岗位、一个目标和工作时间，并按心跳在同一个对话里唤醒它，所以它能保留上下文，从看板上接手下一个 issue。",
      ],
      steps: [
        {
          title: "把一个会话变成员工",
          text: "选一个岗位，比如软件工程师或 SEO 专员，把它的目标写成一个数字，然后在 Claude Code 里运行设置命令。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；见[如何让 Claude Code 主动工作](/proactive-claude-code)。多个员工可以并排运行，如[多个 Claude Code agent](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "分配 issue，回复它的消息",
          text: "把工作放到看板上，员工会接手、边做边评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在自己的 agent 里使用 Claude message threads" },
  mid: {
    title: "在跑很长的 Claude Code 会话？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒它们，用的就是你已经在付费的套餐。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude message threads 常见问题",
    items: [
      {
        q: "Claude message threads 是什么？",
        a: "这是 Claude API 的一项功能，自 2026 年 11 月 2 日起进入公开测试，在两轮之间把对话保存在 Anthropic 一侧。第一个请求发送完整对话并创建 thread；之后的每个请求只发送新消息和上一次响应的 `id`。",
      },
      {
        q: "Message threads 会让 Claude Code 更快吗？",
        a: "在长会话里会。Anthropic 表示大多数 Claude Code 用户默认已开启 thread，在 50 万到 100 万 token 的请求上，首个 token 的中位耗时下降约 35%。短对话收益不大。",
      },
      {
        q: "Message threads 能省 token 或省钱吗？",
        a: "不能。Claude 每一轮仍会读完整段对话，所以 token 用量、定价和速率限制都不变。收益是请求更小、首个 token 更快。想降低成本，请使用 prompt caching。",
      },
      {
        q: "一个 thread 能存活多久？",
        a: "它在最后一次请求 5 分钟后过期，每次保存响应都会重新计时 5 分钟。API 最迟在最后一次使用 1 小时后将其删除。之后需要重新发送完整对话，开启新的 thread。",
      },
      {
        q: "Message threads 的 beta 请求头是什么？",
        a: "`anthropic-beta: message-threads-2026-08-12`，thread 的每个请求都要带。SDK 的 thread helper 会自动加上。",
      },
      {
        q: "Message threads 符合零数据留存吗？",
        a: "不符合。thread 的内容保存在内存中，用服务器管理的密钥加密，从不写入持久存储，最后一次使用后最迟 1 小时删除。启用了 HIPAA readiness 的组织不能使用 thread。",
      },
      {
        q: "Message threads 和 Managed Agents 的 session threads 一样吗？",
        a: "不一样。Message threads 是 Messages API 的功能；session threads 属于 Claude Managed Agents。",
      },
    ],
  },
  cta: {
    title: "让你长时间运行的 Claude Code 会话主动工作起来。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 4 日对照 Anthropic 的公告和 Claude Platform 文档查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
