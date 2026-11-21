import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `每天早上 7 點，整理我的未讀郵件、今天的會議，
以及 Slack 裡提到我的討論串，傳到這裡。

Gmail 收到新潛在客戶的來信時，起草一封個人化的追蹤信，
寄出前先問我。三天沒回覆的話，換個角度再追一次。

每週五下午 5 點，拉出本週的業務、客服和行銷數字，
在 Slack 的 #weekly 頻道發一份摘要。`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent：價格、點數、WhatsApp 與設定",
    description:
      "Base44 Superagent 完整說明：這個個人 agent 能做什麼、如何建立、Base44 各方案，以及 Superagent 如何使用訊息點數和整合點數、如何連接 WhatsApp、Telegram 和 Slack、工作流程、範例，以及和其他 agent 的比較。",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Base44",
    title: "Base44 Superagent：能做什麼、多少錢、如何設定",
    lead: "Superagent 是 Base44 的「全天候為你執行任務的個人 AI agent」。你可以在瀏覽器裡，或在 WhatsApp、Telegram、Slack 等聊天應用程式裡和它對話；它在你連接的工具之間工作，依排程或觸發條件執行工作流程，跨對話記住事情，甚至能打電話。本文說明它能做什麼、如何建立、價格和點數怎麼算、如何連接 WhatsApp、工作流程範例，以及它和其他個人 agent 的比較。",
    cta: "開始使用",
    secondary: "價格和點數",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Base44 Superagent 是什麼",
      text: [
        "Base44 最為人所知的是 AI 應用程式建構工具。它的 Superagent 是另一個獨立的個人 agent，透過對話來指揮：「描述你想要什麼，你的 Superagent 就會在你的各種工具裡替你行動。」它只能存取你連接的工具和資料。",
      ],
      points: [
        "隨處對話：瀏覽器、WhatsApp、Telegram、Slack、iMessage 和 LINE。在 WhatsApp 上它還能加入群組聊天。",
        "連接器：Gmail、Google 日曆、Google 雲端硬碟、Notion、GitHub、Slack 等，也能接你自己的 MCP 伺服器。共用連接器可以設為唯讀。",
        "工作流程：依排程，或在連接的工具裡發生某件事時執行的工作。",
        "記憶：知識、工作脈絡和記憶日誌，可以跨對話共用，也可以分開保存。",
        "Skill 和目標：可重複使用的指示；用 `/goal` 把較大的成果拆成可以暫停和繼續的任務。",
        "語音：可以直接對它說話，桌面版還能分享螢幕。有電話號碼的話，排程的工作流程可以撥打電話。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何建立 Base44 Superagent",
      steps: [
        {
          title: "開啟 Personal Agent",
          text: "登入 app.base44.com，點選側邊欄「Explore」下方的「Personal Agent」（如果你的側邊欄顯示的是「Apps」和「Agent」，就點「Agent」分頁）。",
        },
        {
          title: "選擇在哪裡和它對話",
          text: "選「Continue here」在瀏覽器裡對話，或選 WhatsApp、Telegram、iMessage。WhatsApp：掃描 QR code 或用按鈕開啟 App，傳送預先填好的訊息；Telegram：傳送預先填好的訊息或按「Start」。",
        },
        {
          title: "連接你的工具",
          text: "開啟側邊欄的「Plugins」，在某個連接器上點「Connect」，選擇共用連接器或應用程式使用者連接器；如果 agent 只需要查看，就設為唯讀。用「Add Connector」加入你自己的 MCP 伺服器。",
        },
        {
          title: "描述要做的工作",
          text: "說清楚你要它做什麼；把職位或專案背景放在第一則訊息裡，再給它幾條必須一直遵守的規則。例行工作則說明排程或觸發條件，它會幫你建好工作流程。",
          code: prompts,
        },
      ],
      source: { label: "來源：Base44 文件〈Creating a Superagent〉", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Base44 Superagent 價格和點數",
      text: [
        "Superagent 使用的是你 Base44 工作區的點數。以下是 Base44 於 2026 年 11 月 10 日列出的方案，按年計費；價格頁表示年繳可省 20%，沒有列出月繳價格。",
      ],
      headers: ["方案", "價格（年繳）", "每月訊息點數", "每月整合點數"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "每月 $16", "100", "2,000"],
        ["Builder", "每月 $40", "250", "10,000"],
        ["Pro", "每月 $80", "500", "20,000"],
        ["Elite", "每月 $160", "1,200", "50,000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Superagent 如何使用點數",
      points: [
        "訊息點數：agent 處理的每則訊息、每次工作流程執行都會用到，和聊天一樣。來自 WhatsApp、Telegram、Slack、API 和自動化的訊息都算在內。",
        "整合點數：產生圖片、處理檔案、上傳檔案和產生下載連結等動作。",
        "點數依固定週期重新整理，未用完的點數在重設時失效。",
        "工作區的點數用完時，工作流程無法執行。它們會保持開啟，點數恢復後繼續執行，但錯過的執行不會事後補跑。",
        "在「Agent Settings > Credit usage」查看用量。Superagent 也能暫停陷入迴圈的執行，避免浪費點數。",
        "Free 方案每月只有 25 個訊息點數。每次執行都會用到訊息點數，光是一個每天執行的工作流程（每月約 30 次）就已經超過；每天執行的工作流程請規劃使用付費方案。",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Base44 Superagent 工作流程和範例",
      text: [
        "在對話裡描述要做的工作，或開啟「Workflows」，點「New Workflow」，把建議的工作流程送進對話。Superagent 會判斷這是排程還是觸發型，並詢問它需要的資訊。",
      ],
      steps: [
        {
          title: "排程型",
          text: "在你設定的時間執行：一份涵蓋未讀郵件、會議和 Slack 討論串的晨間簡報；一份附上明天待辦清單的下班前總結；每週打電話給牙醫診所，問有沒有更早的預約時段（前提是你的 agent 有電話號碼）。",
        },
        {
          title: "觸發型",
          text: "在某件事發生時執行：Gmail 收到新郵件、Superagent 的資料有變動，或連接的工具裡有活動。例如一封郵件 24 小時未讀就提醒你，或在每場會議前 30 分鐘送上一份簡報。",
        },
        {
          title: "出問題時",
          text: "連續失敗幾次的工作流程會自動暫停，Base44 會寄電子郵件通知你。查看「Activity」分頁，修正原因（常見的是某個整合中斷連線），點「Resume」，再點「Run Now」測試。",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent 與 Meta Muse、Grok Bot、Claude Duet 比較",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["在哪裡對話", "瀏覽器、WhatsApp、Telegram、Slack、iMessage、LINE", "Muse App、muse.ai、WhatsApp", "桌面和手機 App、Slack、X", "Claude Duet App"],
        ["排程", "排程型和觸發型工作流程", "提醒和週期性任務", "例行程序：依排程或觸發條件", "主動告訴你需要注意的事"],
        ["價格", "使用 Base44 方案點數，年繳每月 $16 起", "免費，有每週額度；Power 每月 $20", "包含在 X Premium 以上、SuperGrok、Cursor 方案中", "包含在 Claude Pro 以上方案，需排候補"],
        ["指南", "本頁", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "雜事交給 Superagent，待辦清單交給 AI 員工",
      text: [
        "Base44 Superagent 是圍繞一個人的工具和聊天打造的。Crewmark 則圍繞一份工作打造：它把你自己的 Claude Code 或 Codex 變成 AI 員工，有職位、量化目標、工作時間和心跳，從共用看板領取下一個 issue；除了你已有的 agent 方案，不用另外購買點數。",
      ],
      steps: [
        {
          title: "挑一個職位",
          text: "從 [AI 員工職位](/ai-employees)開始：工程師、SEO 專員、行銷代理、社群經理、設計師。",
        },
        {
          title: "用你現有的方案執行",
          text: "Crewmark 在你自己的 Claude Code 或 Codex 裡運作。參見[價格](/pricing)。",
        },
        {
          title: "比較更多 agent",
          text: "參見[個人 AI Agent 比較](/personal-agent)和[什麼是 superagent](/blog/superagent)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "建立 Base44 Superagent" },
  mid: {
    title: "想要一個負責正事、又不必購買點數的 agent？",
    text: "Crewmark 員工在你已經付費的 Claude Code 或 Codex 方案裡執行，處理共用看板上的工作。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Base44 Superagent 是什麼？",
        a: "Base44 的個人 AI agent，全天候為你執行任務。你在瀏覽器或 WhatsApp、Telegram、Slack 等應用程式裡和它對話；它在你連接的工具之間工作，並執行排程型或觸發型工作流程。",
      },
      {
        q: "Base44 Superagent 多少錢？",
        a: "它使用你 Base44 方案的點數。年繳方案為 Starter 每月 $16、Builder $40、Pro $80、Elite $160，每月有 100 到 1,200 個訊息點數；Free 方案每月 25 個訊息點數。",
      },
      {
        q: "Base44 Superagent 的點數怎麼計算？",
        a: "它處理的每則訊息和每次工作流程執行都會用到訊息點數；產生圖片、處理檔案這類動作則用整合點數。點數依週期重設，未用完的會失效，點數用完時工作流程會停止執行。",
      },
      {
        q: "如何把 Base44 Superagent 連接到 WhatsApp？",
        a: "建立時選擇 WhatsApp，掃描 QR code 或用按鈕開啟 WhatsApp，再傳送預先填好的訊息。你也可以連接一個 WhatsApp 號碼，讓它在群組聊天裡工作。",
      },
      {
        q: "Base44 Superagent 能做什麼？",
        a: "整夜整理你的收件匣、追蹤潛在客戶、留意機票價格、訂餐廳並通知朋友、每週把數字發到 Slack、重新安排你的行事曆、管理專案的 WhatsApp 群組；有電話號碼的話，還能依排程撥打電話。",
      },
      {
        q: "Base44 Superagent 有哪些替代方案？",
        a: "Meta Muse（在美國免費）、Grok Bot（適合工作上的 agent 團隊）、ChatGPT dots 和 Claude Duet（隨 Pro 方案提供）、Manus Cue，以及開源的 OpenClaw 或 Hermes Agent。參見[個人 AI Agent 比較](/personal-agent)。",
      },
    ],
  },
  cta: {
    title: "雜事交給 Superagent，工作交給 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Base44 的文件、Superagents 頁面和價格頁查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Base44、Wix、Meta、xAI 和 Anthropic 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
