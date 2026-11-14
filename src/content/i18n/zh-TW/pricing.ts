import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Traditional Chinese copy for /pricing, translated from content/pricing.ts. Numbers come from lib/pricing.ts.

const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Crewmark AI 價格：Free、Pro $${pro.price}、Team $${team.price}`,
    description: `Crewmark AI 價格：Free 方案包含 ${free.projects} 個專案和 ${free.employees} 位 AI 員工；Pro 方案每月 $${pro.price}，專案和員工不限數量；Team 方案每月 $${team.price}，適合多人共用一個組織。代理的用量走你自己的 Claude Code 或 Codex 方案。`,
  },
  breadcrumb: "價格",
  hero: {
    kicker: "價格",
    title: "簡單透明的 AI 員工價格",
    lead: `免費開始，就能使用 ${free.projects} 個專案和最多 ${free.employees} 位 AI 員工。升級 Pro，每月 $${pro.price} 不限數量使用；或選擇 Team，每月 $${team.price}，把團隊帶進同一個組織。Crewmark 從不按 token 收費：你的員工跑在你已經付費的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 方案上。`,
    cta: "開始使用",
    secondary: "比較方案",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "方案",
      text: ["Pro 和 Team 即將推出。在正式上線之前，所有帳號都可以免費使用 Crewmark。"],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["價格", `$${free.price}`, `$${pro.price} / 月`, `$${team.price} / 月`],
        ["專案", `${free.projects}`, "不限", "不限"],
        ["AI 員工", `最多 ${free.employees} 位`, "不限", "不限"],
        ["組織成員", "只有你", "只有你", "邀請團隊成員"],
        ["代理", "Claude Code、Codex、DeepSeek Harness、OpenCode", "同左", "同左"],
        ["心跳、工作時間、看板、訊息", "包含", "包含", "包含"],
        ["供應狀態", "現已推出", "即將推出", "即將推出"],
      ],
    },
    {
      kind: "text",
      title: "價格不包含什麼",
      text: [
        "代理的用量。每位 AI 員工都是你正在使用的代理的一個工作階段，所以它的工作消耗的是你的 Claude、ChatGPT、DeepSeek 等方案額度或 API key。Crewmark 不轉售 token，也不在 token 上加價。想控制用量，可以參考[如何減少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何開始",
      steps: [
        {
          title: "用 Google 帳號註冊",
          text: "新帳號預設為 Free 方案，附一個專案。",
        },
        {
          title: "招募第一位員工",
          text: "挑一個職位，例如 [SEO 專員](/ai-employees/seo-specialist)或[軟體工程師](/ai-employees/software-engineer)，再給它一個目標和工作時間。",
        },
        {
          title: "連接你的代理",
          text: "在 Claude Code、Codex 或其他支援的代理中執行設定指令。員工會隨著心跳醒來，從你的看板上領取下一個任務。",
        },
      ],
    },
  ],
  mid: {
    title: "免費開始，團隊壯大時再升級。",
    text: `一個專案和 ${free.employees} 位 AI 員工免費使用，跑在你已經付費的代理方案上。`,
    button: "開始使用",
  },
  faq: {
    title: "價格常見問題",
    items: [
      {
        q: "Crewmark 是免費的嗎？",
        a: `是的。Free 方案為個人提供 ${free.projects} 個專案和最多 ${free.employees} 位 AI 員工。在 Pro 和 Team 上線之前，所有帳號都可以免費使用 Crewmark。`,
      },
      {
        q: "價格包含 Claude 或 OpenAI 的 token 嗎？",
        a: "不包含。你的 AI 員工使用你自己的 Claude Code、Codex、DeepSeek Harness 或 OpenCode 方案或 API key 執行。Crewmark 不收取 token 費用。",
      },
      {
        q: "Pro 和 Team 有什麼不同？",
        a: `Pro（每月 $${pro.price}）為個人取消專案和員工數量的限制。Team（每月 $${team.price}）再加上一個組織，你可以邀請同事加入。`,
      },
      {
        q: "多人可以共用一個 Crewmark 帳號嗎？",
        a: "Team 方案可以。Free 和 Pro 僅供個人使用；Team 方案可以邀請成員加入你的組織。",
      },
      {
        q: "什麼時候可以升級到 Pro 或 Team？",
        a: "Pro 和 Team 即將推出，屆時會在本頁公布。在那之前，所有功能都免費。",
      },
    ],
  },
  cta: {
    title: "免費招募你的第一位 AI 員工。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 的工作階段變成 AI 員工，擁有職位、目標、工作時間和心跳。",
    button: "開始使用",
  },
  checked: "價格截至 2026 年 11 月 7 日，以美元計價，未含稅。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI 或 DeepSeek 無關聯，也未獲其背書。產品名稱均為各自所有者的商標。",
};
