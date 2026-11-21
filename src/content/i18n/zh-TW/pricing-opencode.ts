import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /pricing/opencode; the English master is
// src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 價格：免費 agent、Go $10、Go Plus $40（2026）",
    description:
      "OpenCode 價格：MIT 授權的 agent 免費，附免費模型。OpenCode Go 每月 $10、Go Plus $40，也可以按每百萬 token 隨用隨付，或用你自己的 key。",
  },
  breadcrumb: "OpenCode 價格",
  parent: { name: "產品比較", href: "/compare" },
  hero: {
    kicker: "價格 · OpenCode",
    title: "OpenCode 價格：免費的 agent，以及四種支付模型費用的方式",
    lead: "OpenCode 是免費、開源（MIT）的程式設計 agent。它附有不需帳號的免費模型，有每日請求上限。除此之外，你付的是模型的錢，而不是 agent 的錢：每月 $10 的 OpenCode Go 或每月 $40 的 Go Plus、按每百萬 token 計費的隨用隨付模型，或你已經有的方案或 API key，例如 ChatGPT Plus 或 Pro，或 GitHub Copilot。Enterprise 需洽業務。以下是每種選擇的費用，以及 OpenCode 和 Claude Code、Codex、Hermes Agent、OpenClaw 的比較。",
    cta: "開始使用",
    secondary: "實際要付多少",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenCode 方案和價格",
      text: [
        "資料來自 [opencode.ai](https://opencode.ai) 及其主控台中的 Go、模型和 Enterprise 頁面，查核日期為 2026 年 11 月 13 日。價格以美元計。",
      ],
      headers: ["方案", "價格", "包含什麼"],
      rows: [
        [
          "OpenCode（開源）",
          "免費，MIT 授權",
          "agent 本身，提供終端機 UI、桌面應用程式、網頁應用程式和 SDK；支援 200+ 家供應商的模型，包括本機模型",
        ],
        ["免費模型", "$0，不需帳號", "一組免費模型，有每日請求上限"],
        [
          "OpenCode Go",
          "每月 $10",
          "精選模型，附 5 小時、每週和每月的用量額度；可加值額度；隨時可取消",
        ],
        [
          "Go Plus",
          "每月 $40",
          "精選模型，附 5 小時、每週和每月的用量額度；可加值額度；隨時可取消",
        ],
        ["隨用隨付", "按每百萬 token 計費", "模型依使用量從你的餘額扣款"],
        [
          "你自己的方案或 key",
          "你本來就付給該供應商的費用",
          "用 ChatGPT Plus 或 Pro，或 GitHub Copilot 登入，或自備 API key",
        ],
        ["Enterprise", "洽詢業務", "透過 OpenCode 的業務團隊報價"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "OpenCode 實際要付多少",
      points: [
        "agent 本身不用錢。OpenCode 採 MIT 授權，提供 macOS、Windows 和 Linux 的 CLI 執行檔，以及一款桌面應用程式（README 標示為 beta）。",
        "免費模型有每日請求上限，而且不需要帳號。",
        "Go 的用量額度依模型而異。在 Go 和 Go Plus 中，額度以 5 小時、每週和每月為週期重置。你可以加值額度，也可以隨時取消。",
        "隨用隨付按 token 計費。隨用隨付的模型按每百萬 token 從你的餘額扣款。",
        "或者用你已經付費的方案。用 ChatGPT Plus 或 Pro，或 GitHub Copilot 登入。使用你自己的 API key 時，用量由該供應商計費；OpenCode 透過 Models.dev 支援 200+ 家 LLM 供應商，包括本機模型。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 價格 vs 其他程式設計 agent",
      text: [
        "起價取自各產品自己的網站，查核日期為 2026 年 11 月 13 日，以美元計。",
        "並排比較：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)。更多選擇請見 [OpenCode 替代方案](/blog/opencode-alternatives)。",
      ],
      headers: ["產品", "起價", "免費選項"],
      rows: [
        ["OpenCode", "agent 免費；OpenCode Go 每月 $10", "有：agent（MIT）和有每日請求上限的免費模型"],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "包含在 Claude Pro 中，每月 $20，按年計費為每月 $17",
          "沒有：Claude Free 不包含；也可以用隨用隨付的 API 額度",
        ],
        [
          "Codex",
          "包含在 ChatGPT Plus 中，每月 $20；或使用 OpenAI API key，按 API 價格計費",
          "CLI 開源（Apache-2.0）；用量來自 ChatGPT 方案或 API key",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "agent 免費；選用的 Nous Portal Plus 每月 $20",
          "有：agent（MIT），以及 $0 的 Nous Portal Free（隨用隨付，僅限免費模型）",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "免費；沒有付費方案或託管服務",
          "有：整個專案（MIT）；你向模型供應商付費",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "搭配 Crewmark",
      title: "OpenCode 是 agent，Crewmark 給 agent 一份工作和一塊看板。",
      text: [
        "Crewmark 是給 AI 員工團隊用的 issue 追蹤工具。每位員工都是你自己電腦上的一段 agent 對話，例如 Claude Code、Codex 或 OpenCode，有職位、KPI 和工作時間。它依心跳醒來，從共用看板接手 issue。和 OpenCode 一樣，Crewmark 不對模型用量收費：你付錢給你的 agent 供應商。",
        "Crewmark 的價格：Free 方案 $0（1 個專案、最多 3 位 AI 員工、1 個人）。每月 $5 的 Pro 和每月 $10 的 Team 即將推出。計費功能還沒做好，所以在那之前，所有帳號都可以免費使用 Crewmark。它以 GPL-3.0 授權開源，也可以自架。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)中挑選，例如軟體工程師、SEO 專員或資料分析師。",
        },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。",
        },
        {
          title: "查看方案",
          text: "[Crewmark 價格](/pricing)，以及附設定方式的工作範例：[Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想讓你的程式設計 agent 持續工作嗎？",
    text: "Crewmark 給 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。1 個專案、最多 3 位 AI 員工免費。",
    button: "開始使用",
  },
  faq: {
    title: "OpenCode 價格常見問題",
    items: [
      {
        q: "OpenCode 免費嗎？",
        a: "免費。agent 以 MIT 授權開源，可免費使用。它還附有不需帳號的免費模型，有每日請求上限。",
      },
      {
        q: "OpenCode Go 多少錢？",
        a: "OpenCode Go 每月 $10，Go Plus 每月 $40。兩者都提供精選模型，附 5 小時、每週和每月週期的用量額度，可以加值額度，也可以隨時取消。",
      },
      {
        q: "OpenCode 的定價模式是什麼？",
        a: "agent 免費，模型則有四種付費方式：免費模型、Go 或 Go Plus 訂閱、按每百萬 token 從餘額扣款的隨用隨付，或你已經有的方案或 API key。Enterprise 需洽業務。",
      },
      {
        q: "OpenCode 每個模型怎麼計價？",
        a: "OpenCode Go 的用量額度依模型而異。隨用隨付的模型按每百萬 token 計費。使用你自己的 API key 時，用量由該供應商計費。",
      },
      {
        q: "可以用我的 ChatGPT 或 GitHub Copilot 訂閱來使用 OpenCode 嗎？",
        a: "可以。你可以用 ChatGPT Plus 或 Pro，或 GitHub Copilot 登入，或自備 API key。",
      },
      {
        q: "OpenCode 支援本機模型嗎？",
        a: "支援。OpenCode 透過 Models.dev 支援 200+ 家 LLM 供應商，包括本機模型，而且 agent 本身免費。",
      },
    ],
  },
  cta: {
    title: "選好你的模型，再給你的 agent 一份工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成 AI 員工，有職位、KPI、工作時間和心跳。",
    button: "開始使用",
  },
  checked:
    "已於 2026 年 11 月 13 日對照 opencode.ai 和 OpenCode 的主控台頁面查核。其他產品的價格取自它們自己的網站，日期相同。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenCode 的開發者 Anomaly 或本頁提到的任何其他公司均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
