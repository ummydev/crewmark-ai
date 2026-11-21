import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/openclaw; the English master is
// src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 价格：免费，以及你实际要付的钱",
    description:
      "OpenClaw 免费、采用 MIT 许可证，没有付费档或托管服务。你要付的是模型提供商的钱：一个 API key，或者你已经有的订阅。",
  },
  breadcrumb: "OpenClaw 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · OpenClaw",
    title: "OpenClaw 价格：免费开源，你向模型提供商付费",
    lead: "OpenClaw 不花钱。它采用 MIT 许可证，README 写明这个项目“没有付费档、托管服务，也没有代币。”你付的是它背后模型的钱：由提供商计费的 API key，或者你已经有的订阅，比如 ChatGPT 或 Claude Code 登录。Gateway 运行在你自己的机器上。下面讲这在实际中意味着什么，以及它和 Hermes Agent、OpenCode、OpenWorker、Claude Code 的对比。",
    cta: "开始使用",
    secondary: "实际要付哪些钱",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenClaw 套餐和价格",
      text: ["来自 OpenClaw 的 GitHub README 和 docs.openclaw.ai，核对于 2026 年 11 月 13 日。只有一个版本，而且是免费的。"],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "OpenClaw（开源）",
          "免费，MIT 许可证",
          "Gateway、Control UI、CLI 和 TUI；macOS、iOS、Android、Windows 和 Linux 原生应用；WhatsApp、Telegram、Slack、Discord、iMessage 等聊天渠道；每个 Gateway 可运行多个 agent；Automations 调度器",
        ],
        ["付费档", "无", "README 写明没有付费档"],
        ["托管服务", "无", "你自己运行和维护 Gateway"],
        [
          "模型用量",
          "由你的模型提供商计费",
          "API key，或者你已经有的订阅（ChatGPT/Codex OAuth，或同一台主机上的 Claude Code 登录）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "运行 OpenClaw 实际要付哪些钱",
      points: [
        "你的模型提供商。模型以插件形式接入：OpenAI、Anthropic、Google Gemini、OpenRouter、xAI 等。使用 API key 时，由那家提供商按 OpenClaw 的用量向你收费。",
        "或者你已经在付费的订阅。OpenClaw 可以用 OpenAI ChatGPT/Codex OAuth 登录，也可以复用同一台主机上的 Claude Code 登录来使用 Claude（也支持 `claude setup-token`）。",
        "Claude Code 登录只有在 OpenClaw 和该登录位于同一台主机上时才有效。容器安装（比如 Podman）不会挂载 `~/.claude`，所以文档建议在这种情况下使用 API key。",
        "本地模型服务器也在提供商列表里：Ollama、LM Studio 和 vLLM。",
        "你自己的机器。Gateway 是运行在你掌控的硬件上的守护进程，可安装在 macOS、Linux、Windows 或 WSL2 上，也可以用 Docker 或 Nix 安装。OpenClaw 自己不提供托管。",
        "OpenClaw 本身不收钱。这个项目没有付费档，所以没有什么要向它买的。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw 与同类 agent 的价格对比",
      text: [
        "价格取自各产品自己的官网，核对于 2026 年 11 月 13 日。这些产品都还需要一个模型，费用付给模型提供商，除非下面的套餐已经包含。",
        "并排对比：[OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。更多选择见 [OpenClaw 替代品](/blog/openclaw-alternatives)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["OpenClaw", "免费；你向模型提供商付费", "有：整个项目（MIT）"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "agent 免费；可选 Nous Portal Plus 每月 $20",
          "有：agent 本身（MIT），以及 $0 的 Nous Portal Free",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "agent 免费；OpenCode Go 每月 $10，Go Plus 每月 $40",
          "有：免费模型，有每日请求数限制，无需账号",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "未列价格；用你自己的模型 key 或本地模型",
          "有：应用本身（MIT）",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro 每月 $20，按年付费为每月 $17",
          "没有：Claude Free 不包含；也可以用按量付费的 API 额度",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "OpenClaw 在聊天里回复你，Crewmark 给你的编程 agent 一份工作。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue。和 OpenClaw 一样，它不对模型用量收费：agent 运行在你已经在付费的 Claude 或 ChatGPT 订阅上。",
        "Crewmark 的价格：Free 版 $0（1 个项目、最多 3 名 AI 员工、1 人使用）。Pro 每月 $5、Team 每月 $10，即将推出。计费功能还没做好，所以在那之前所有账号都可以免费使用 Crewmark。它以 GPL-3.0 开源，可以自托管。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)里选，目标写成数字。" },
        {
          title: "把工作放上看板",
          text: "分派 issue，并让常规的 issue 定期重复；心跳会唤醒员工去接下一个。",
        },
        {
          title: "看看套餐",
          text: "[Crewmark 价格](/pricing)，以及 agent 用它做什么，见 [Claude Code 使用场景](/use-cases/claude-code)。",
        },
      ],
    },
  ],
  mid: {
    title: "已经在为 Claude 或 ChatGPT 付费？",
    text: "Crewmark 把你的 Claude Code 或 Codex 变成 AI 员工，有岗位、心跳和共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "OpenClaw 价格常见问题",
    items: [
      {
        q: "OpenClaw 免费吗？",
        a: "免费。OpenClaw 以 MIT 许可证开源，README 写明这个项目“没有付费档、托管服务，也没有代币。”你只需向模型提供商付费。",
      },
      {
        q: "OpenClaw 有价格套餐吗？",
        a: "没有。只有一个免费版本。唯一的账单来自你接入的模型：由提供商计费的 API key，或者你已经有的订阅。",
      },
      {
        q: "OpenClaw 的定价模式是什么？",
        a: "免费软件，加上你自带的模型。模型以插件形式接入（OpenAI、Anthropic、Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM 等），所以费用取决于你选的提供商和套餐。",
      },
      {
        q: "我能用 Claude 订阅来用 OpenClaw 吗？",
        a: "可以，复用同一台主机上的 Claude Code 登录即可（或用 `claude setup-token`）。Podman 等容器安装不会挂载 `~/.claude`，所以文档建议在这种情况下使用 API key。",
      },
      {
        q: "OpenClaw 有托管版吗？",
        a: "项目方没有提供。你在自己的机器上运行 Gateway（macOS、Linux、Windows 或 WSL2，或用 Docker 或 Nix），并自己维护。",
      },
      {
        q: "谁为 OpenClaw 的开发买单？",
        a: "OpenClaw Foundation，一家独立的 501(c)(3) 组织，雇用核心团队并为发布版本签名。README 写着“OpenAI 是捐助方，而非所有者。”",
      },
    ],
  },
  cta: {
    title: "模型账单照旧，给你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 OpenClaw 的 GitHub README、docs.openclaw.ai 以及每个对比产品自己的价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 OpenClaw Foundation 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
