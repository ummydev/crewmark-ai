import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Simplified Chinese translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas（需要 Node 24+ 和 uv）
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent（SWE-agent 的后继者）
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Devin 替代品（2026）：开源、免费和更便宜的选择",
    description:
      "2026 年最好的 Devin AI 替代品，附各厂商当前价格：今天就能安装的开源 agent（OpenHands、OpenCode、mini-swe-agent、Cline、Goose），OpenAI、Anthropic、Google 和 GitHub 的云端 agent，以及面向团队的平台。",
  },
  breadcrumb: "Devin 替代品",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "博客 · AI 软件工程师",
    title: "2026 年最好的 Devin 替代品：开源、免费和更便宜的选择",
    lead: "Devin 出自 Cognition，是一个自主工作的 AI 软件工程师：你在 Slack 或 Teams 里 @ 它，给它分配一个 Linear 或 Jira 工单，或者让它去处理失败的 CI，它就会在自己的虚拟机里干活，然后开一个 pull request。2026 年它有免费版，付费套餐每月 $20 起。替代品分成三类：自己运行的开源 agent、模型厂商的云端 agent，以及面向团队的平台。每一类适合不同的人；下面说说各自适合谁，价格都来自各厂商自己的官网。",
    cta: "开始使用",
    secondary: "看开源替代品",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "想要开源、部署在自己的服务器上：OpenHands，前身是 OpenDevin，现在是一个自托管的编程 agent 控制中心。",
        "常驻终端、想用任意模型：OpenCode，采用 MIT 许可，GitHub 上约 226,000 颗星。",
        "已经在为 ChatGPT 或 Claude 付费：OpenAI Codex 云端任务或 Claude Code 云端会话，每月 $20 起的套餐就包含。",
        "团队在 GitHub 上协作：云端的 Copilot，从 issue 分配任务，Copilot Pro 每月 $10 起就包含。",
        "想在整个公司里用工单驱动 agent：Factory 的 Droids。",
        "想在你自己的 Claude Code 或 Codex 上有一个长期在岗的 AI 工程师：Crewmark。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 替代品对比",
      text: [
        "价格是包含该 agent 的最低套餐，取自 2026 年 11 月 10 日各厂商的价格页。星数经过四舍五入，取自同一天的 GitHub API。",
      ],
      headers: ["工具", "是否开源", "运行在哪里", "起价", "适合"],
      rows: [
        ["[Devin](https://devin.ai)", "否", "每个会话一台自己的云端 VM；本地有 Devin Desktop 和 CLI", "有免费版；Pro 每月 $20", "想从 Slack、Teams 或 Jira 把工单交给 agent 的团队"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "是，MIT（~93k 星）", "你的笔记本电脑、Docker、VM；也有托管云", "自托管免费；Teams 每月 $500", "在自己的基础设施上、用自己的模型 key 运行一个 Devin 式 agent"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "是，MIT（~226k 星）", "终端、桌面应用、SDK", "包含免费模型；Go 每月 $10", "想在 200 多家模型提供商里任选的终端用户"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "是，MIT（~9.5k 星）", "本地 CLI", "免费（模型费用自付）", "研究、基准测试和可复现的 issue 修复"],
        ["[Cline](https://github.com/cline/cline)", "是，Apache 2.0（~71k 星）", "CLI、VS Code、JetBrains、桌面", "免费（模型费用自付）", "在编辑器里用的开源 agent"],
        ["[Goose](https://github.com/aaif-goose/goose)", "是，Apache 2.0（~56k 星）", "桌面应用、CLI、API", "免费（模型费用自付）", "一个 agent 同时处理代码和其他工作，支持 MCP 扩展"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "仅 CLI 开源（Apache 2.0）", "OpenAI 的云端；CLI、IDE、桌面", "ChatGPT Plus 每月 $20", "ChatGPT 订阅用户"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "否", "每个云端会话一台 Anthropic 托管的 VM；也能在本地运行", "Claude Pro 每月 $20", "想合上笔记本后工作还能继续的 Claude Code 用户"],
        ["[Google Jules](https://jules.google)", "否", "Google 云端 VM", "基础套餐每天 15 个任务；Google AI Pro 每月 $19.99", "使用 Gemini 的个人开发者"],
        ["[GitHub Copilot（云端）](https://github.com/features/copilot/plans)", "否", "GitHub 的云端沙盒", "Copilot Pro 每月 $10", "已经在用 GitHub 的团队"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "否", "Cursor 的云端 VM", "Premium 每月 $30", "已经在用 Cursor 的团队"],
        ["[Factory](https://factory.com)", "否", "桌面、CLI、网页；云端和本地 agent", "Pro 每月 $20", "用工单和聊天驱动 agent 的工程团队"],
        ["[Crewmark](/pricing)", "否", "你的电脑上，在你自己的 Claude Code 或 Codex 里", `免费版（${free.projects} 个项目、${free.employees} 名 AI 员工）；Pro 每月 $${pro.price}，即将推出`, "想让 AI 工程师按排班干活、用的是已付费套餐的小团队"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "现在就能运行的开源 Devin 替代品",
      text: [
        "Devin 本身不开源。下面这些是开源的，每个都只要一条命令就能安装。模型 key 由你自己提供，所以软件免费，你只需向模型提供商付费。把脚本通过管道交给 shell 之前，先读一遍。",
      ],
      steps: [
        {
          title: "OpenHands（原 OpenDevin）",
          text: "现在叫 Agent Canvas：一个自托管的控制中心，可以在你的笔记本电脑、Docker 或 VM 上运行 OpenHands agent，也能运行 Claude Code、Codex、Gemini 或 OpenCode，还提供面向 Slack、GitHub 和 Linear 的自动化。自托管免费；托管的 Teams 套餐每月 $500，最多 10 个用户。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "一个 MIT 许可的终端 agent，支持 200 多家模型提供商，包括本地模型，另有一个处于 beta 阶段的桌面应用。免费模型不用注册账号就能用；OpenCode Go 每月 $10，你也可以用 ChatGPT 或 GitHub Copilot 订阅登录。和它类似的 agent 参见 [OpenCode 替代品](/blog/opencode-alternatives)。",
        },
        {
          title: "SWE-agent 和 mini-swe-agent",
          text: "SWE-agent 是普林斯顿和斯坦福的研究型 agent，拿到一个 GitHub issue 就尝试修复它。它的 README 现在写明已被 mini-swe-agent 取代，所以从 mini-swe-agent 开始。免费；你只需支付模型费用。",
        },
        {
          title: "Cline、Goose、Aider 和 Kilo Code",
          text: "Cline 是采用 Apache 许可的 agent，可在终端、VS Code 和 JetBrains 里使用，有 Plan 和 Act 两种模式。Goose 现在隶属于 Linux 基金会旗下的 Agentic AI Foundation，通过 MCP 扩展处理代码和其他任务。Aider 和 Kilo Code 也是流行的开源编程 agent；Devika 是早期的开源 Devin 克隆，自 2025 年 9 月以来就没有更新过。",
        },
      ],
      source: { label: "来源：GitHub 上的 OpenHands", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "模型厂商的云端 agent",
      text: [
        "如果你想要 Devin 那种“交出去就不用管”的工作方式，又不想多加一家供应商，模型厂商现在就在你可能已经有的套餐里提供了。",
      ],
      points: [
        "OpenAI Codex：在 chatgpt.com/codex 使用云端任务，ChatGPT Plus 每月 $20 起就包含；云端任务消耗的额度更多，API key 可以用于 CLI 和 IDE，但不能用云端功能。",
        "Claude Code：从 claude.ai/code、Claude App 或 `claude --cloud` 启动云端会话，每个会话都在一台隔离的、由 Anthropic 托管的 VM 里运行；Pro（每月 $20）、Max、Ultra 和 Team 套餐都能用，VM 不另外收费。",
        "Google Jules：把你的仓库克隆到云端 VM，然后开一个 pull request；基础套餐每天 15 个任务，Google AI Pro（每月 $19.99）每天 100 个。",
        "云端的 GitHub Copilot：分配一个 issue，Copilot 就会开一个 pull request；Copilot Pro 每月 $10 起就包含，用量以 GitHub AI Credits 计费。",
        "Cursor Cloud Agents：在隔离的 VM 里运行，可以从 Cursor、网页、Slack 或 Linear 启动；每月 $30 的 Premium 套餐起。",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Devin 在 2026 年的价格",
      text: [
        "很多榜单还写着 $500 的团队套餐和每 ACU $2.25。现在 devin.ai 上的自助套餐已经不按 ACU 计费：账单由套餐内额度加按需额度组成，只有 Enterprise 按 ACU 计费。",
      ],
      points: [
        "Free：$0，额度较少。",
        "Pro：每月 $20，包含 Devin Cloud；超出部分按 API 价格计费。",
        "Max：每月 $200。",
        "Teams：每月 $80，每个完整的开发者席位另加每月 $40，最多 200 名用户。",
        "Enterprise：定制价格。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "一个有长期工作的 AI 工程师，跑在你自己的 agent 上",
      text: [
        "Devin 和这些云端 agent 都要等你逐个分配任务。Crewmark 把你自己的 Claude Code 或 Codex 变成一个 AI 软件工程师，有岗位、写成数字的目标、工作时间和心跳：在班上时，它会醒来，从看板上接下一个 issue，开 pull request，需要你做决定时给你发消息。它用的是你已经在付费的订阅，跑在你的电脑上。",
      ],
      steps: [
        {
          title: "雇用软件工程师岗位",
          text: "岗位说明、目标和日常流程都已配好；见 [AI 软件工程师](/ai-employees/software-engineer)。",
        },
        {
          title: "把工作放到看板上",
          text: "像分配给队友一样分配 issue；员工会及时更新状态和评论。见 [Claude Code 看板](/blog/claude-code-kanban)。",
        },
        {
          title: "让它一直干下去",
          text: "设定工作时间，通宵也行。见[让 Claude Code 24 小时运行](/blog/run-claude-code-24-7)和 [Codex 长时间任务](/blog/codex-long-running-tasks)。",
        },
      ],
    },
  ],
  mid: {
    title: "想在你已有的 Claude Code 或 Codex 套餐上，拥有一个 Devin 式的工程师？",
    text: "Crewmark 员工按心跳醒来，按看板干活，并开 pull request。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "最好的开源 Devin 替代品是什么？",
        a: "最接近的是 OpenHands，它的前身是 OpenDevin：一个自托管的 agent 平台，用你自己的模型 key 运行。想要终端 agent 就选 OpenCode；做研究和基准测试就选 mini-swe-agent。",
      },
      {
        q: "OpenDevin 和 OpenHands 是同一个东西吗？",
        a: "是的。OpenDevin 已由 All Hands AI 更名为 OpenHands。它采用 MIT 许可，现在以 Agent Canvas 的形式发布，也能运行 Claude Code、Codex 和其他 agent。",
      },
      {
        q: "Devin 免费吗？",
        a: "有一个额度较少的免费版。根据 2026 年 11 月 10 日 devin.ai 上的信息，付费套餐有 Pro（每月 $20）、Max（$200），以及 Teams（每月 $80，另加每个开发者席位 $40）。",
      },
      {
        q: "Devin 还按 ACU 收费吗？",
        a: "只有 Enterprise 还按 ACU 收费。自助套餐现在由套餐内额度加按需额度组成，所以过去每 ACU $2.25 的价格已经不适用于它们。",
      },
      {
        q: "Devin 和 Claude Code 或 Codex 比，该用哪个？",
        a: "如果你已经在为 Claude 或 ChatGPT 付费，它们的云端会话和云端任务就能让你用上 Devin 那种交出去就不用管的工作方式，不用额外花钱。Devin 多出来的是为团队打造的 Slack、Teams、Jira 和 Linear 工作流。",
      },
      {
        q: "最便宜的 Devin 替代品是什么？",
        a: "开源 agent 除了模型用量不花钱。托管方案里，每月 $10 的 GitHub Copilot Pro 包含云端 agent，Google Jules 的基础套餐每天可以跑 15 个任务。",
      },
    ],
  },
  cta: {
    title: "给你的 Claude Code 或 Codex 一份工作，而不只是一个任务。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 10 日对照各产品的官网、价格页、文档和 GitHub 仓库核对。",
  disclaimer:
    "Crewmark 是独立产品，与 Cognition 或文中列出的任何公司无关，也未获其背书。产品名称是其所有者的商标。",
};
