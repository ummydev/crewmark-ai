import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent：开源 AI 同事工作区，价格与设置",
    description:
      "Suparagent 是一个开源的 AI 同事工作区，AI 同事运行在 Claude Code、Codex、Gemini CLI 或 Cursor 上。它是什么、价格、设置和对比。",
  },
  breadcrumb: "Suparagent",
  parent: { name: "个人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "个人 Agent · 开源",
    title: "Suparagent：一个开源的 AI 同事工作区",
    lead: "Suparagent 是一个开源的“workspace for AI coworkers”（AI 同事工作区）。你创建有名字的 agent，每个都有自己的职责、工作区、记忆、例行任务和审批设置，它们运行在你已经在用的引擎上，比如 Claude Code、Codex、Gemini CLI 或 Cursor。它可以作为桌面应用运行，也可以运行在你自己的服务器上；suparagent.ai 上的托管服务是另一个独立产品。这款应用最早叫 Open Dots，后来叫 Open Duet，2026 年 11 月 9 日在 0.8.5 版本中改名为 Suparagent。",
    cta: "开始使用",
    secondary: "开始设置",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Suparagent 是什么",
      points: [
        "有名字的同事：每个 agent 都有名字、岗位、引擎、工作区、记忆和审批设置，可以从模板和技能开始。",
        "你已经在用的引擎：Claude Code 或 Codex CLI、Gemini CLI、通过 Antigravity 使用的 Google Gemini、Cursor、通过 Agent Client Protocol（ACP）接入的其他 CLI agent、OpenRouter，或者 Ollama、LM Studio 这类兼容 OpenAI 的 API。不含模型。",
        "工作和定时：任务看板和日历，用来分派工作、安排一次性运行、查看每次尝试；例行任务可以按计划、通过 webhook 或按需运行，前提是后端在运行。",
        "agent 团队：一个主导 agent（Claude 或 Codex）把工作分派给专门的 agent，agent 们在共享房间里协调。",
        "审批：Ask first、Accept edits、Approve for me（Claude、Codex 和 Cursor）和 Plan only。例行任务从不自己批准操作，Today 视图汇集审批、问题和例行任务的结果。",
        `以 Apache 2.0 开源，地址是 [github.com/Anil-matcha/suparagent](${repo})，仓库创建于 2023 年 5 月，2026 年 11 月 13 日约有 7,050 颗星。它还处于早期、变化很快：自托管服务器、Docker 计算机、浏览器工具和 macOS 原生桌面预览版都是实验性的。`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent 价格",
      text: [
        "桌面应用和自托管服务器没有标明 Suparagent 的收费。托管套餐以 2026 年 11 月 13 日 README 中所列为准，以美元计。所有套餐都要用你自己的 AI 提供商账户。",
      ],
      headers: ["套餐", "价格", "包含"],
      rows: [
        ["桌面应用或自托管服务器", "未标明 Suparagent 收费", "你自己的引擎；你向模型提供商付费"],
        ["托管：Free 预览", "$0", "沙盒计算费用计入你的 Boat 账户"],
        ["托管：Starter", "$15/月", "100 计算小时，51 GB"],
        ["托管：Standard", "$49/月", "300 计算小时，51 GB"],
        ["托管：Pro", "$99/月", "720 计算小时，111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎么设置 Suparagent",
      steps: [
        {
          title: "选择在哪里运行",
          text: "从源码检出运行桌面应用（GitHub Releases 上的安装包是实验性的，且未签名），搭一台自托管 Linux 服务器，或者使用 suparagent.ai 上的托管网页应用。",
        },
        {
          title: "创建一个 agent",
          text: "给它起名字，设定岗位、引擎（比如 Claude Code、Codex、Gemini CLI 或 Cursor）、工作区和审批模式，或者从模板开始。",
        },
        {
          title: "给它工作",
          text: "在看板上分派任务，或者设置例行任务按计划、通过 webhook 或按需运行；后端必须保持运行。审批、问题和结果会汇集到 Today 视图。",
        },
      ],
      source: { label: "来源：GitHub 上的 Suparagent README", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker、OpenBot 和 Claude Cowork",
      text: [
        "信息来自各项目的 README 或厂商自己的页面，于 2026 年 11 月 13 日核对，GitHub 星数为当天数据。更多 AI 同事的对比见 [AI 同事工具对比](/blog/ai-coworker)。",
        "指南：[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["出品方", "GitHub 用户 Anil-matcha", "Andrew Ng（GitHub 上的 andrewyng）", "CopilotKit", "Anthropic"],
        ["开源", "Apache 2.0；约 7,050 颗星", "MIT；约 19,050 颗星", "MIT 模板，CopilotKit Intelligence 单独授权；约 11,652 颗星", "否"],
        ["运行在", "桌面应用、自托管 Linux 服务器或托管网页应用", "你的电脑（macOS、Windows）；一个小型云服务代理连接器登录", "桌面应用（Mac、Windows，Docker 后端）或 Kubernetes；托管版处于抢先体验", "Anthropic 的云端；通过 Claude Desktop 处理本地工作"],
        ["模型", "Claude Code、Codex、Gemini CLI 和 Cursor 等引擎；不含模型", "用你自己的密钥接入 OpenAI、Anthropic、Gemini、OpenRouter 等，或本地模型", "OpenAI、Claude、Gemini 或开放模型；通过 AG-UI 接入你自己的 agent", "Claude 模型"],
        ["价格", "自托管未标明收费；托管套餐每月 $0 到 $99", "未列出价格；自带模型", "个人项目免费；Business 每位活跃用户每月最高 $29", "Claude 付费套餐；Pro 每月 $20"],
        ["任务看板", "任务看板和日历", "未说明", "未说明", "没有 issue 看板；有任务列表和 Scheduled 页面"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "有目标、有工作时间、有心跳的 AI 员工",
      text: [
        "Suparagent 在你选择的引擎上运行有名字的同事。Crewmark 把你自己的 Claude Code 或 Codex 会话变成 AI 员工，有岗位、量化目标、工作时间和心跳，各自从共享看板领取 issue。",
      ],
      steps: [
        { title: "选一个岗位", text: "从 [AI 员工岗位](/ai-employees)开始，并设定量化目标。" },
        { title: "把工作放上看板", text: "在共享看板上分派 issue；在工作时间内，心跳会唤醒员工去接下一个。" },
        { title: "看看它能做什么", text: "每项工作及设置方法见 [Claude Code 使用场景](/use-cases/claude-code)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "设置 Suparagent" },
  mid: {
    title: "想让你已经在用的编程 agent 变成 AI 员工？",
    text: "Crewmark 给你的 Claude Code 或 Codex 会话一个岗位、工作时间、一个心跳和一块共享看板。",
    button: "开始使用",
  },
  faq: {
    title: "Suparagent 常见问题",
    items: [
      {
        q: "Suparagent 是什么？",
        a: "一个开源的 AI 同事工作区。你创建有名字的 agent，设定岗位、记忆、例行任务和审批设置，它们运行在你已经在用的引擎上，比如 Claude Code、Codex、Gemini CLI 或 Cursor。在 2026 年 11 月 9 日改名之前，它先后叫 Open Dots 和 Open Duet。",
      },
      {
        q: "Suparagent 免费吗？",
        a: "代码采用 Apache 2.0，桌面应用和自托管服务器没有标明 Suparagent 的收费；你向模型提供商付费。README 列出了托管套餐：Free 预览 $0（沙盒计算费用计入你的 Boat 账户）、Starter 每月 $15、Standard $49 和 Pro $99。",
      },
      {
        q: "Suparagent 支持哪些 AI agent？",
        a: "Claude Code 或 Codex CLI、Gemini CLI、通过 Antigravity 使用的 Google Gemini、Cursor、通过 Agent Client Protocol（ACP）接入的其他 CLI agent、OpenRouter，以及 Ollama、LM Studio 这类兼容 OpenAI 的 API。团队的主导 agent 必须是 Claude 或 Codex，已连接的应用只能和 Claude、Codex agent 一起用。",
      },
    ],
  },
  cta: {
    title: "给你的编程 agent 一份工作，而不只是一条提示。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked:
    "已于 2026 年 11 月 13 日对照 GitHub 上的 Suparagent README、更新日志和许可证以及 suparagent.ai 核对；对比信息于同一天取自各产品自己的页面。",
  disclaimer:
    "Crewmark 是独立产品，与 Suparagent 项目和 Vadoo Internet Services Private Limited 均无关联，也未获其背书。产品名称是其各自所有者的商标。",
};
