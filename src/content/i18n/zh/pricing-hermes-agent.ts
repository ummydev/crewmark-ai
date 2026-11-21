import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /pricing/hermes-agent; the English master is
// src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 价格：免费 agent 和 Nous Portal 套餐",
    description:
      "Hermes Agent 免费、采用 MIT 许可证。可选的 Nous Portal 每月 $0、$20、$100 或 $200。每一档包含什么，以及你还要额外付哪些钱。",
  },
  breadcrumb: "Hermes Agent 价格",
  parent: { name: "产品对比", href: "/compare" },
  hero: {
    kicker: "价格 · Nous Research",
    title: "Hermes Agent 价格：免费的 agent，外加可选的 Nous Portal 订阅",
    lead: "Hermes Agent 是免费的：Nous Research 以 MIT 许可证发布它，你向模型提供商付费。如果你想从 Nous 获取模型，可选的 Nous Portal 有四档：Free $0、Plus 每月 $20、Super $100、Ultra $200，付费档都包含一个云端托管的 agent。下面是每一档包含什么、你还要额外付哪些钱，以及它和 OpenClaw、OpenCode、OpenWorker、Grok Bot 的对比。",
    cta: "开始使用",
    secondary: "查看套餐",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Hermes Agent 和 Nous Portal 套餐",
      text: [
        "来自 hermes-agent.nousresearch.com 和 portal.nousresearch.com，核对于 2026 年 11 月 13 日。价格均为每月价格，未列出按年价格。使用这个 agent 不需要 Nous Portal 套餐。",
      ],
      headers: ["套餐", "价格", "包含内容"],
      rows: [
        [
          "Hermes Agent",
          "免费，MIT 许可证",
          "agent 本身：终端 UI、桌面应用、通过一个网关接入的聊天应用、技能、记忆、cron 调度器和 Bot Mode。可接入任意模型提供商",
        ],
        ["Nous Portal Free", "$0", "按量付费；仅限免费模型"],
        ["Nous Portal Plus", "每月 $20", "免费和付费模型；一个云端托管的 agent（4 GB 内存，25 GB 磁盘）"],
        [
          "Nous Portal Super",
          "每月 $100",
          "Plus 用量的 5 倍；免费和付费模型；一个云端托管的 agent（4 GB 内存，100 GB 磁盘）",
        ],
        [
          "Nous Portal Ultra",
          "每月 $200",
          "Plus 用量的 10 倍；免费和付费模型；一个云端托管的 agent（8 GB 内存，100 GB 磁盘）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "运行 Hermes Agent 实际要付哪些钱",
      points: [
        "你的模型提供商。用 `hermes model` 切换提供商：Nous Portal、OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、Ollama Cloud、LM Studio、自定义端点等。使用 API key 时，由那家提供商向你收费。",
        "Claude 订阅只能在购买了额外用量的 Claude Max 上使用。文档写明“Claude Pro 订阅用户无法使用这一方式”，所以在 Pro 上你需要 API key。",
        "ChatGPT/Codex 登录通过设备码完成。哪些 ChatGPT 套餐可用、用量如何计入套餐上限，“目前没有文档说明”。",
        "一个运行它的地方。Hermes Agent 可以装在本地，也可以装在服务器上：README 提到“一台 $5 的 VPS、一个 GPU 集群或无服务器基础设施”。它的六种终端后端是本地、Docker、SSH、Modal、Daytona 和 Vercel Sandbox。",
        "或者选一个付费的 Nous Portal 档位，它包含一个云端托管的 agent（规格见上表）。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 与同类 agent 的价格对比",
      text: [
        "价格取自各产品自己的官网，核对于 2026 年 11 月 13 日。",
        "并排对比：[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)、[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)、[Multica vs Hermes Agent](/compare/multica-vs-hermes-agent)。更多选择见 [Hermes Agent 替代品](/alternatives/hermes-agent)。",
      ],
      headers: ["产品", "起价", "免费选项"],
      rows: [
        ["Hermes Agent", "免费；可选 Nous Portal Plus 每月 $20", "有：agent 本身（MIT），以及 $0 的 Nous Portal Free"],
        ["[OpenClaw](/pricing/openclaw)", "免费；你向模型提供商付费", "有：整个项目（MIT）"],
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
        ["[Grok Bot](/personal-agent/grok-bot)", "Premium 每月 $30；Super $100、Ultra $200", "未列出"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "Hermes Agent 是你的个人 agent，Crewmark 运营一支编程 agent 团队。",
      text: [
        "Crewmark 是给 AI 员工团队用的 issue 跟踪工具。每名员工都是你自己电脑上的一个 Claude Code 或 Codex 对话，有岗位、目标和工作时间。它按心跳醒来，从共享看板上领取 issue。agent 运行在你已经在付费的 Claude 或 ChatGPT 订阅上，没有单独的 token 账单。",
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
          text: "[Crewmark 价格](/pricing)，以及 agent 用它做什么，见 [Claude Code 使用场景](/use-cases/claude-code)和 [Codex 使用场景](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想要能持续做一份工作的 agent？",
    text: "Crewmark 给你的 Claude Code 或 Codex 一个岗位、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Hermes Agent 价格常见问题",
    items: [
      {
        q: "Hermes Agent 免费吗？",
        a: "免费。agent 本身以 MIT 许可证开源。你向模型提供商付费，也可以选择订阅 Nous Portal。",
      },
      {
        q: "Hermes Agent 每月多少钱？",
        a: "agent 本身 $0。可选的 Nous Portal 有 Free $0、Plus 每月 $20、Super $100（Plus 用量的 5 倍）和 Ultra $200（Plus 用量的 10 倍）。未列出按年价格。",
      },
      {
        q: "用 Hermes Agent 需要订阅 Nous Portal 吗？",
        a: "不需要。Nous Portal 只是你可以用 `hermes model` 选择的众多提供商之一，其他还有 OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、本地模型和自定义端点。",
      },
      {
        q: "我能用 Claude 订阅来用 Hermes Agent 吗？",
        a: "只有购买了额外用量的 Claude Max 可以。文档写明 Claude Pro 订阅用户不能走订阅这条路，所以在 Pro 上你需要 API key。",
      },
      {
        q: "Hermes Agent 的价格套餐包含托管吗？",
        a: "Nous Portal 的付费档包含一个云端托管的 agent：Plus 为 4 GB 内存和 25 GB 磁盘，Super 为 4 GB 和 100 GB，Ultra 为 8 GB 和 100 GB。否则你就在自己的机器或服务器上运行它。",
      },
      {
        q: "我能用 ChatGPT 订阅来用 Hermes Agent 吗？",
        a: "ChatGPT/Codex 登录通过设备码完成，但文档说，哪些 ChatGPT 套餐可用、用量如何计入套餐上限，目前没有文档说明。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一个岗位和一份排班。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 hermes-agent.nousresearch.com、portal.nousresearch.com、Hermes Agent 的文档和 GitHub README，以及每个对比产品自己的价格页核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Nous Research 或本页提到的任何其他公司均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
