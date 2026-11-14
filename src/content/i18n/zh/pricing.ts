import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Simplified Chinese copy for /pricing, translated from content/pricing.ts. Numbers come from lib/pricing.ts.

const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Crewmark AI 价格：Free、Pro $${pro.price}、Team $${team.price}`,
    description: `Crewmark AI 价格：Free 版包含 ${free.projects} 个项目和 ${free.employees} 名 AI 员工；Pro 版每月 $${pro.price}，项目和员工不限量；Team 版每月 $${team.price}，适合多人共用一个组织。 agent 用量走你自己的 Claude Code 或 Codex 套餐。`,
  },
  breadcrumb: "价格",
  hero: {
    kicker: "价格",
    title: "简单透明的 AI 员工价格",
    lead: `免费开始，即可使用 ${free.projects} 个项目和最多 ${free.employees} 名 AI 员工。升级 Pro，每月 $${pro.price} 不限量使用；或选择 Team，每月 $${team.price}，把团队拉进同一个组织。Crewmark 从不按 token 收费：你的员工跑在你已经付费的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 套餐上。`,
    cta: "开始使用",
    secondary: "比较套餐",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "套餐",
      text: ["Pro 和 Team 即将推出。在正式上线之前，所有账号都可以免费使用 Crewmark。"],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["价格", `$${free.price}`, `$${pro.price} / 月`, `$${team.price} / 月`],
        ["项目", `${free.projects}`, "不限", "不限"],
        ["AI 员工", `最多 ${free.employees} 名`, "不限", "不限"],
        ["组织成员", "仅你一人", "仅你一人", "邀请团队成员"],
        ["Agent", "Claude Code、Codex、DeepSeek Harness、OpenCode", "同左", "同左"],
        ["心跳、工作时间、看板、消息", "包含", "包含", "包含"],
        ["可用状态", "现已推出", "即将推出", "即将推出"],
      ],
    },
    {
      kind: "text",
      title: "价格不包含什么",
      text: [
        "Agent 用量。每名 AI 员工都是你正在使用的 agent 的一个会话，所以它的工作消耗的是你的 Claude、ChatGPT、DeepSeek 等套餐额度或 API key。Crewmark 不转售 token，也不在 token 上加价。想控制用量，可以看看[如何减少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何开始",
      steps: [
        {
          title: "用 Google 账号注册",
          text: "新账号默认是 Free 版，带一个项目。",
        },
        {
          title: "招聘第一名员工",
          text: "选一个岗位，比如 [SEO 专员](/ai-employees/seo-specialist)或[软件工程师](/ai-employees/software-engineer)，再给它一个目标和工作时间。",
        },
        {
          title: "连接你的 agent",
          text: "在 Claude Code、Codex 或其他支持的 agent 里运行设置命令。员工会随心跳醒来，从你的看板上领取下一个任务。",
        },
      ],
    },
  ],
  mid: {
    title: "免费开始，团队壮大时再升级。",
    text: `一个项目和 ${free.employees} 名 AI 员工免费使用，跑在你已经付费的 agent 套餐上。`,
    button: "开始使用",
  },
  faq: {
    title: "价格常见问题",
    items: [
      {
        q: "Crewmark 免费吗？",
        a: `免费。Free 版为个人提供 ${free.projects} 个项目和最多 ${free.employees} 名 AI 员工。在 Pro 和 Team 上线之前，所有账号都可以免费使用 Crewmark。`,
      },
      {
        q: "价格包含 Claude 或 OpenAI 的 token 吗？",
        a: "不包含。你的 AI 员工使用你自己的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 套餐或 API key 运行。Crewmark 不收取 token 费用。",
      },
      {
        q: "Pro 和 Team 有什么区别？",
        a: `Pro（每月 $${pro.price}）为个人取消项目和员工数量限制。Team（每月 $${team.price}）在此基础上增加一个组织，你可以邀请同事加入。`,
      },
      {
        q: "多人可以共用一个 Crewmark 账号吗？",
        a: "Team 版可以。Free 和 Pro 仅供个人使用；Team 版可以邀请成员加入你的组织。",
      },
      {
        q: "什么时候可以升级到 Pro 或 Team？",
        a: "Pro 和 Team 即将推出，届时会在本页公布。在此之前，所有功能都免费。",
      },
    ],
  },
  cta: {
    title: "免费招聘你的第一名 AI 员工。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 的会话变成 AI 员工，有岗位、目标、工作时间和心跳。",
    button: "开始使用",
  },
  checked: "价格截至 2026 年 11 月 7 日，以美元计，不含税。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、OpenAI 或 DeepSeek 无关联，也未获其背书。产品名称均为其各自所有者的商标。",
};
