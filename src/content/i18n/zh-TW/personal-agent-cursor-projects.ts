import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects 是什麼：功能、價格與 Grok Bot 比較",
    description:
      "Cursor Projects 完整解說：由協調者 agent 規劃較大的程式開發工作，再交給雲端 agent 執行。方案、設定、本機測試、審查，以及與 Grok Bot 的比較。",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "個人 Agent", href: "/personal-agent" },
  hero: {
    kicker: "個人 Agent · Cursor",
    title: "Cursor Projects：協調者 agent 如何規劃和委派較大的工作",
    lead: "Cursor Projects 是 Cursor 的一項功能，用於較大規模的工作，例如一項功能、一次遷移或一整個應用程式。你和一個協調者 agent 對話，它自己不寫程式碼：它規劃工作，委派給在 Cursor 的 Cloud Agents 上平行執行的 agent，再把完成的工作帶回來讓你檢查。每個 Project 都有共用檔案，其中的每個 agent 都會讀取，它也能在沒有提示的情況下處理定期工作。本文說明它如何運作、哪些方案包含它、如何設定、它在哪裡執行，以及它和 Grok Bot、Claude Code 的比較。",
    cta: "開始使用",
    secondary: "開始設定",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cursor Projects 是什麼",
      points: [
        "一個協調者和它的工作者：你和一個協調者 agent 對話，它會建立工作者 agent、依工作替它們命名並管理它們。協調者自己不寫程式碼；它規劃工作，委派給平行執行的工作者。",
        "在雲端執行：每個 Project 在 Cursor 的 Cloud Agents 上都有自己的雲端電腦，所以闔上筆電也不會讓它停下來。",
        "共用檔案：一個 Project 保存偏好、筆記和工作流程，其中的每個 agent 都會讀取。共用的 `notes.md` 追蹤哪些工作進行中、排隊中和已完成。",
        "任務清單和看板：每個 Project 都有一份，在 Multiplayer Projects 中由所有成員共用。",
        "定期工作：請協調者監看某個 Slack 頻道、依排程執行或追蹤你的 pull request，它就會根據這些訊號行動，不需要提示。",
        "為超出一段對話範圍的工作而設計：包含多個 pull request 的一項功能、一次遷移，或在你不在時處理的一份工作。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects 價格：哪些方案包含它",
      text: [
        "Projects 在 Cloud Agents 上執行，所以每個具備 Cloud Agents 的 Cursor 方案都有。價格取自 2026 年 11 月 13 日 Cursor 的價格說明頁面。Cursor 的付費方案包含 Cursor 模型（Grok 和 Composer）的用量額度。",
      ],
      headers: ["方案", "價格", "Cursor Projects"],
      rows: [
        ["Free", "-", "不包含"],
        ["Plus", "每月 $8", "不包含"],
        ["Premium", "每月 $30，或每年 $300", "包含"],
        ["Super", "每月 $100", "包含"],
        ["Ultra", "每月 $200", "包含"],
        ["Teams", "每席位每月 $30、$100 或 $200", "包含；Multiplayer Projects 需要團隊帳號和 Cursor 3.26.13 以上版本"],
        ["Enterprise", "-", "包含；需要 Cursor 3.21.9 以上版本"],
        ["舊版方案", "-", "舊版付費方案包含；舊版 Hobby 不包含"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Cursor Projects",
      steps: [
        {
          title: "確認方案和隱私設定",
          text: "你需要具備 Cloud Agents 的方案：Premium 以上、Teams、Enterprise（Cursor 3.21.9 以上版本）或舊版付費方案。開啟「Privacy Mode (Legacy)」時無法使用 Projects。",
        },
        { title: "開啟 Agents Window", text: "Projects 位於 Cursor 的 Agents Window 中，在雲端執行。" },
        {
          title: "描述較大的工作",
          text: "告訴協調者要在你的 GitHub 儲存庫中打造什麼，例如一項功能、一次遷移或一整個應用程式。協調者使用的模型由你挑選。",
        },
        {
          title: "加入共用檔案",
          text: "為 Project 寫下偏好、筆記和工作流程；其中的每個 agent 都會讀取，`notes.md` 則記錄哪些工作進行中、排隊中和已完成。",
        },
        {
          title: "檢查成果並設為定期工作",
          text: "協調者會把完成的工作帶回來讓你檢查。請它監看某個 Slack 頻道、依排程執行或追蹤你的 pull request，它就能在沒有提示的情況下繼續工作。",
        },
      ],
      source: { label: "來源：Cursor 文件《Projects》", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cursor Projects 如何讓你保有掌控權",
      points: [
        "審查：協調者會把完成的工作帶回來讓你檢查。",
        "可見度：任務清單和看板，以及共用的 `notes.md`，會顯示哪些工作進行中、排隊中和已完成。",
        "隔離：每個 Project 都在自己的雲端電腦上執行。需要在你的機器上測試時，協調者會啟動一個本機 agent。",
        "團隊：在 Multiplayer Projects（團隊帳號，Cursor 3.26.13 以上版本）中，每位成員都有自己的協調者，協調者之間直接互傳訊息，所有成員共用看板。",
        "隱私：開啟「Privacy Mode (Legacy)」時無法使用 Projects。",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Cursor Projects 可以在本機執行嗎？",
      text: [
        "不行，至少無法從頭到尾都在本機執行。Cursor 的文件說，每個 Project 都在雲端擁有自己的電腦，所以闔上筆電也不會讓它停下來，而且雲端讓它能平行執行比筆電更多的 agent。需要在你的機器上測試某些東西時，協調者會啟動一個本機 agent 在那裡執行。",
        "Cursor 的 Self-Hosted Machines 會把工具執行移到你管理的機器上：My Machines 用於個人的筆電、開發機或 VM，Team Pools 則適用於 Enterprise 方案。這樣一來，檔案編輯、終端機指令和其他工具呼叫都會在那台機器上執行，但 agent 迴圈、推論和規劃仍留在 Cursor 的雲端，worker 也會把 agent 需要的內容傳給 Cursor。（Cursor 文件，2026 年 11 月 13 日查核。）",
        "如果你想讓一整支 agent 團隊在你自己的電腦上執行，以下這些就是這樣運作的：",
      ],
      points: [
        "[Claude Code agent teams](/blog/claude-code-agent-teams)：Claude Code 的實驗性功能，預設關閉。由一個負責人工作階段產生隊友，隊友共用一份任務清單並互相傳訊息，全都在你自己的 Claude Code 工作階段中進行。",
        "[Claude Squad](/compare/claude-squad-vs-conductor)：開源（AGPL-3.0）的終端機應用程式，可同時執行多個程式設計 agent，每個都在自己的 tmux 工作階段和 git worktree 中。",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)：開源（Apache-2.0）的程式設計 agent 看板，在你的瀏覽器中本機執行，或以桌面應用程式的形式執行；它的公司在 2026 年 4 月結束營運後，便由社群維護至今。",
        "[Crewmark](/ai-employees)：開源（GPL-3.0）。每位 AI 員工都是你自己電腦上的一段 Claude Code 或 Codex 對話，有職位和目標，心跳會喚醒它從共用看板接手下一個 issue。工作不限於程式碼：[SEO 專員](/ai-employees/seo-specialist)等職位也以同樣方式運作，網頁應用程式也可以自架。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot 和 Claude Code",
      text: [
        "資料取自各廠商自己的文件和價格頁面，已於 2026 年 11 月 13 日查核。更多 AI 同事的比較請看 [AI 同事工具](/blog/ai-coworker)；另請參見 [Grok Bot 指南](/personal-agent/grok-bot)和 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
        "並排比較：[Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)。指南：[Grok Bot](/personal-agent/grok-bot)。",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["開發者", "Cursor", "xAI", "Anthropic"],
        ["用途", "較大的程式開發工作：一項功能、一次遷移、一整個應用程式", "在你的應用程式、Slack 和 Teams 中工作的 AI 隊友", "程式開發：讀取你的程式碼庫、編輯檔案、執行指令"],
        ["多個 agent", "協調者規劃工作，委派給平行執行的工作者 agent", "Bot 之間互傳訊息，並在群組聊天中協調工作", "工作階段中的 subagent；實驗性的 agent teams"],
        ["執行位置", "Cursor 的 Cloud Agents，每個 Project 一台雲端電腦；測試時用本機 agent", "雲端：每個 Bot 都有自己的電腦", "你機器上的終端機、IDE 和桌面應用程式；網頁版有雲端工作階段"],
        ["任務看板", "任務清單和看板，加上共用的 `notes.md`", "未說明；工作在聊天、Slack 討論串和會議中交接", "沒有 issue 看板；agent teams 共用一份任務清單"],
        ["定期工作", "監看 Slack 頻道、依排程執行或追蹤你的 pull request", "依排程執行的例行程序", "雲端和桌面排程任務、`/loop`"],
        ["價格", "Cursor Premium 每月 $30 起", "每月 Premium $30、Super $100 或 Ultra $200", "Claude 付費方案，Pro 每月 $20 起"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "大型工作交給 Projects，常設職位交給 Crewmark。",
      text: [
        "Cursor Projects 協調多個 agent 處理一份較大的工作。Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、量化目標、工作時間和心跳，各自從共用看板領取 issue，讓程式碼儲存庫裡的工程、SEO 和行銷工作持續完成。",
      ],
      steps: [
        { title: "挑一個職位", text: "從 [AI 員工職位](/ai-employees)開始，例如軟體工程師或 SEO 專員。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "附設定方式的工作範例請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Cursor Projects" },
  mid: {
    title: "想要有常設工作的 agent？",
    text: "Crewmark 給你的 Claude Code 或 Codex 一個職位、一個心跳和一塊共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "Cursor Projects 常見問題",
    items: [
      {
        q: "Cursor Projects 是什麼？",
        a: "Cursor 的一項功能，用於較大規模的工作，例如一項功能、一次遷移或一整個應用程式。協調者 agent 規劃工作，委派給在 Cursor 的 Cloud Agents 上平行執行的 agent，再把完成的工作帶回來讓你檢查。",
      },
      {
        q: "哪些 Cursor 方案包含 Projects？",
        a: "每個具備 Cloud Agents 的方案：Premium（每月 $30，或每年 $300）以上、Super（$100）和 Ultra（$200）、Teams（每席位每月 $30、$100 或 $200）、Enterprise 和舊版付費方案。Free、Plus（每月 $8）和舊版 Hobby 不包含。",
      },
      {
        q: "Cursor Projects 在本機執行嗎？",
        a: "不是，它在 Cursor 的 Cloud Agents 上執行，每個 Project 都有自己的雲端電腦，所以闔上筆電也不會讓它停下來。需要在你的機器上測試時，協調者會啟動一個本機 agent。開啟「Privacy Mode (Legacy)」時無法使用 Projects。",
      },
      {
        q: "如何審查 Cursor Projects 做了什麼？",
        a: "協調者會把完成的工作帶回來讓你檢查。Project 的任務清單和看板，以及共用的 `notes.md`，會顯示哪些工作進行中、排隊中和已完成。",
      },
      {
        q: "一個團隊可以共用一個 Cursor Project 嗎？",
        a: "可以，使用 Multiplayer Projects，需要團隊帳號和 Cursor 3.26.13 以上版本。每位成員都有一個協調者，協調者之間直接互傳訊息，所有成員共用任務清單和看板。",
      },
      {
        q: "Cursor Projects vs Grok Bot：有什麼不同？",
        a: "Cursor Projects 是 Cursor 中的程式開發工作區：協調者把一份較大的工作委派給 Cloud Agents 上的工作者 agent。Grok Bot 是 xAI 的託管 AI 隊友：每個 Bot 都有自己的雲端電腦，登入你的應用程式，在 Slack 和 Microsoft Teams 中工作。請看 [Grok Bot 指南](/personal-agent/grok-bot)。",
      },
    ],
  },
  cta: {
    title: "大型工作在 Projects 協調，也給你的 agent 一個常設職位。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照 Cursor 的 Projects 文件、說明中心和價格頁面查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Cursor、xAI 和 Anthropic 皆無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
