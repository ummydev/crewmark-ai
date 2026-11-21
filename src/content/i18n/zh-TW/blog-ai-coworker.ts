import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 同事工具比較：Claude Cowork、Copilot 等",
    description:
      "AI 同事比較：Claude Cowork、Copilot Cowork、ChatGPT Work、Gemini 等，以及 Andrew Ng 的開源 OpenWorker。",
  },
  breadcrumb: "AI 同事工具",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "部落格 · AI 同事",
    title: "AI 同事工具比較：各自能做什麼、花多少錢、行動前會先問你什麼",
    lead: "AI 同事是一種代理，你可以把一整項任務交給它。它在你的檔案、應用程式和瀏覽器中工作，在背景持續進行，遇到有風險的動作會先徵求你的同意。2026 年，Anthropic、Microsoft、OpenAI、Google、Meta 和 xAI 都推出了自己的 AI 同事，GitHub 上也有開源專案，其中包括 Andrew Ng（吳恩達）的 OpenWorker。以下說明每一款能做什麼、誰能使用、價格多少、在哪裡執行，資訊全部來自各廠商自己的頁面。",
    cta: "開始使用",
    secondary: "直接看比較表",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "什麼是 AI 同事？",
      text: [
        "聊天機器人負責回答問題。AI 同事則是接下一項有明確成果的任務，例如一份報告、一份簡報、一張填好的試算表或一個清空的收件匣，然後自己一步步完成。這些產品差異很大，但有四個共同點：",
      ],
      points: [
        "在你工作的地方工作：檔案、電子郵件、行事曆、已連結的應用程式和瀏覽器。",
        "不用你盯著也會繼續做：在雲端電腦上，或在你自己的電腦上，只要應用程式維持開啟。",
        "可以重複執行：大多數能依排程執行任務，或在某件事發生時執行，例如收到一封新郵件。",
        "先問再做：寄送、發布、購買和刪除都要等你核准。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "AI 同事工具一覽",
      text: [
        "資訊來自各廠商的網站、定價頁、文件或 GitHub，已於 2026 年 11 月 13 日查證。價格以美元計。本表並非排名。",
      ],
      headers: ["AI 同事", "開發者", "誰能使用", "起價", "執行於"],
      rows: [
        ["Claude Cowork", "Anthropic", "Claude 付費方案，Free 不含", "Claude Pro，$20/月", "Anthropic 的雲端；透過桌面應用程式使用本機檔案和瀏覽器"],
        ["Copilot Cowork", "Microsoft", "擁有 Microsoft 365 Copilot 授權的工作或學校帳戶；個人帳戶為預覽版", "Copilot Credits，每個 $0.01，授權費用另計", "Microsoft 的雲端，搭配你在 OneDrive 和 SharePoint 的檔案"],
        ["ChatGPT Work", "OpenAI", "ChatGPT 各方案；Free 和 Go 只能在桌面應用程式中有限使用", "ChatGPT Plus 起可完整使用，$20/月", "OpenAI 的雲端，或透過桌面應用程式在你的電腦上執行"],
        ["Gemini 任務（原名 Spark）", "Google", "Google AI Pro 或 Ultra，限使用個人帳戶的成年人；歐洲經濟區、瑞士、英國和奈及利亞除外", "Google AI Pro，$19.99/月（美國）", "Google 的雲端"],
        ["Meta Muse", "Meta", "美國和加拿大，18 歲以上；10 月 27 日起新加坡也可使用", "大部分用途免費；另有訂閱方案", "每位使用者一台雲端電腦"],
        ["Grok Bot", "xAI", "Premium、Super、Ultra、Teams 和 Enterprise 方案", "Premium，$30/月", "每個 Bot 一台雲端電腦；Slack、Teams 和通話"],
        ["Lindy", "Lindy", "所有人；提供免費試用", "每位活躍使用者 $29.99/月", "Lindy 的雲端；Slack、電子郵件、iMessage、電話"],
        ["OpenWorker（開源）", "Andrew Ng", "所有人；桌面應用程式處於公開測試階段", "免費；使用你自己的模型金鑰或本機模型", "你的電腦（macOS、Windows）"],
        ["OpenBot（開源）", "CopilotKit", "所有人", "個人專案免費；Business 每位使用者最高 $29/月", "你的筆電或你的 Kubernetes 叢集"],
        ["Suparagent（開源）", "GitHub 使用者 Anil-matcha", "所有人", "自架免費；託管版 $15/月起", "桌面應用程式、你的伺服器，或託管版"],
        ["Crewmark", "Crewmark", "所有人", "免費：1 個專案，最多 3 名 AI 員工", "你的電腦上，在你的 Claude Code 或 Codex 裡"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "各款 AI 同事的指南",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork)：方案、設定、核准模式，以及 Cowork 與 Claude Code 的比較。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)：授權、Copilot Credits，以及在 Microsoft 365 中的設定。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)：Work 模式能做什麼、哪些方案包含它，以及它和 Codex 的關係。",
        "[Cursor Projects](/personal-agent/cursor-projects)：Cursor 處理較大程式開發工作的協調者代理。",
        "[Lindy](/personal-agent/lindy)：以額度計算的價格，以及如何設定。",
        "[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot) 和 [Suparagent](/personal-agent/suparagent)：開源的幾款，附從 GitHub 開始的設定方式。",
        "並排比較：[所有比較](/compare)，例如 [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) 和 [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio)。",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "各大 AI 實驗室推出的 AI 同事",
      points: [
        "Claude Cowork（Anthropic）：在 Claude 應用程式中處理程式設計以外的工作，例如研究、文件、試算表、簡報和檔案處理。任務在雲端執行，闔上筆電也會繼續進行；你可以用 `/schedule` 設定任務每小時、每天或每週執行一次。在 Manual（手動）模式下，它行動前會先問你；在 Auto（自動）模式下，它會對每個動作進行安全審查。僅限付費方案，最低為 Pro，每月 $20。",
        "Copilot Cowork（Microsoft）：在 Microsoft 365 中跨應用程式完成多步驟任務，包括寄送電子郵件、安排會議、編輯 Word、Excel 和 PowerPoint 檔案，以及在 Teams 中發文。執行敏感動作前會跳出核准對話框，支援排程任務和事件觸發的任務，並可依租用戶設定選用 GPT、Claude 或 Grok 模型。需要 Microsoft 365 Copilot 授權，另以 Copilot Credits 計算用量。",
        "ChatGPT Work（OpenAI）：ChatGPT 中的 Work 模式，適合最後會產出待你審閱成果的任務，例如簡報、試算表和分析報告。它和 Codex 共用核心能力與用量。Free 和 Go 可在桌面應用程式中有限使用；Plus（每月 $20）以上方案可在桌面版、網頁版和行動版使用，並支援排程任務和事件觸發。",
        "Gemini 任務（Google，原名 Spark）：Gemini 應用程式中在雲端運作的 AI 代理，會使用 Gmail、Docs 等 Google 應用程式，可依排程執行，也可在某件事發生時執行；寄送、刪除、購買或提交表單前一定會先問你。Google 的說明頁面列出的是 Google AI Pro 或 Ultra。",
        "Meta Muse：以 Meta 的 Muse Spark 模型打造的個人代理，每位使用者都有自己的雲端電腦。它依排程工作，也會回應事件；沒有你的核准，它不會發布或寄送任何內容，也不會花錢。Meta 表示，大多數人需要的功能都免費，需要更多可以訂閱。",
        "Grok Bot（xAI）：每個 Bot 都有自己的雲端電腦，會登入你的工具，在 Slack、Microsoft Teams 和視訊通話中工作，執行例行工作，還會彼此交接任務。包含在 xAI 的 Premium（每月 $30）、Super 和 Ultra 方案中。請看 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub 上的開源 AI 同事",
      text: [
        "如果你比較想自己執行 AI 同事，使用自己的模型金鑰或本機模型，下面這些是開源的：",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker)（MIT，約 19,000 顆星）：Andrew Ng 的 \"AI coworker for your everyday work\"（處理日常工作的 AI 同事），一款適用於 macOS 和 Windows 的桌面應用程式，目前處於公開測試階段。它在你的電腦上執行，可使用 OpenAI、Anthropic、Gemini 或本機模型，動作須經核准才會執行，還能依排程產出摘要和報告。",
        "[OpenBot](https://github.com/CopilotKit/OpenBot)（MIT，約 11,600 顆星）：CopilotKit 可自架的 AI 同事工作區，每個 AI 同事都有自己的瀏覽器、檔案和工具。它使用另行授權的 CopilotKit Intelligence。請看 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)。",
        "[Suparagent](https://github.com/Anil-matcha/suparagent)（Apache-2.0，約 7,000 顆星）：\"a workspace for AI coworkers\"（AI 同事的工作區），在你已經在用的引擎上執行有名字的代理，附例行工作和核准機制，引擎可以是 Claude Code、Codex 或 Gemini CLI。",
        "[ai-employees](https://github.com/markfulton/ai-employees)（MIT）：8 個業務職位，每個都是裝著排程例行任務的資料夾，由你現有的代理來執行。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "寫程式用的 AI 同事：Cursor Projects",
      text: ["上面大多數 AI 同事處理的是文件、電子郵件和研究。針對軟體工作，Cursor 推出了 Projects："],
      points: [
        "由一個協調者代理規劃較大的工作，例如一項功能、一次遷移或一整個應用程式，把工作委派給在 Cursor 的 Cloud Agents 上平行執行的代理，再把完成的成果帶回來讓你檢查。",
        "每個 Project 都在自己的雲端電腦上執行，所以闔上筆電也不會讓它停下來；它還保存共用的筆記、偏好和任務看板，每個代理都會讀取。",
        "它可以監看某個 Slack 頻道、依排程執行，或追蹤你的 pull request。在 Multiplayer Projects 中，每位團隊成員都有一個協調者，協調者之間會互傳訊息。",
        "它包含在具備 Cloud Agents 的 Cursor 方案中，Premium 每月 $30 起，Free 和 Plus 不包含。請看 [Cursor Projects 指南](/personal-agent/cursor-projects)和 [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)。",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "有免費的 AI 同事嗎？",
      points: [
        "Meta Muse：根據 Meta 的說法，大多數人需要的功能都免費。",
        "ChatGPT Work：ChatGPT Free 可在桌面應用程式中有限使用。",
        "開源專案：OpenWorker、OpenBot（個人專案）和 Suparagent 執行起來不用錢；你只需付費給模型供應商，或使用本機模型。",
        "Lindy：免費試用，7 天內 $50 額度。",
        "Crewmark：1 個專案、最多 3 名 AI 員工免費，執行在你現有的 Claude Code 或 Codex 訂閱上。",
        "Claude Cowork、Gemini 任務、Copilot Cowork 和 Grok Bot 需要付費方案或授權。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "如何選擇 AI 同事",
      steps: [
        { title: "從工作所在的地方出發", text: "工作上用 Microsoft 365，就看 Copilot Cowork；用 Gmail 和 Google Docs，就看 Gemini；如果你已經在付費使用 Claude 或 ChatGPT，方案裡就附有 Cowork 或 Work。" },
        { title: "決定它在哪裡執行", text: "雲端的 AI 同事在你闔上筆電後仍會繼續工作。開源的則把你的資料、金鑰和檔案留在你自己的電腦上。" },
        { title: "看它如何徵求同意", text: "看看寄送、發文和花錢之前有沒有核准機制，以及有沒有記錄它做過什麼的日誌。" },
        { title: "用一項重複性任務試兩週", text: "一份週報，或每天整理一次收件匣，很快就能看出它是否幫你省下時間。" },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "AI 同事 vs AI 員工",
      text: [
        "這兩個名稱有重疊。實務上，AI 同事是你有任務時隨手交給它的幫手，而 AI 員工有固定的職位：職務說明、目標、工作時間，以及一個它會自己接手的工作佇列。以後者為核心打造的平台，比較請看[最佳 AI 員工平台](/blog/best-ai-employee-platforms)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "給你的程式設計代理一份固定的工作",
      text: [
        "Crewmark 把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、以數字表示的目標、工作時間和心跳。每位員工從共用看板上接手下一個 issue，需要你拍板時就在 issue 上問你。",
      ],
      steps: [
        { title: "選一個職位", text: "在 [AI 員工職位](/ai-employees)中挑一個，例如 [AI SEO 專員](/ai-employees/seo-specialist)。" },
        { title: "把工作放上看板", text: "指派 issue，並讓固定要做的 issue 定期重複；心跳會喚醒員工接手下一個。" },
        { title: "看看它能做什麼", text: "各代理能做的工作和設定方式，請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。" },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "選擇 AI 同事" },
  mid: {
    title: "想要一位有固定工作的 AI 同事？",
    text: "Crewmark 給你的 Claude Code 或 Codex 代理一個職位、一個心跳和一個共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "什麼是 AI 同事？",
        a: "一種你可以把一整項任務交給它的代理。它在你的檔案、應用程式和瀏覽器中工作，在背景持續進行，可以依排程重複執行任務，並且在寄送、發布、購買或刪除之前會先問你。",
      },
      {
        q: "Andrew Ng（吳恩達）的 AI 同事是什麼？",
        a: "OpenWorker：一款適用於 macOS 和 Windows 的開源桌面應用程式，採用 MIT 授權，網址是 github.com/andrewyng/openworker。它的 README 稱它為 \"an AI coworker for your everyday work\"（處理日常工作的 AI 同事）。它在你的電腦上執行，使用你自己的模型金鑰或本機模型。",
      },
      {
        q: "Claude Cowork 免費嗎？",
        a: "不免費。Claude Cowork 只在 Claude 付費方案中提供，最低為 Pro，每月 $20（年繳則為每月 $17）。Claude Free 不包含它。",
      },
      {
        q: "Copilot Cowork 要多少錢？",
        a: "它需要 Microsoft 365 Copilot 授權，用量以 Copilot Credits 計費：隨用隨付時每個 $0.01，也可以選擇預付一年的方案，折扣從 5% 到 20% 不等。",
      },
      {
        q: "Claude Cowork vs Claude Code：有什麼不同？",
        a: "Claude Cowork 用於在 Claude 應用程式中處理程式設計以外的工作：研究、文件、試算表、簡報和檔案。Claude Code 是 Anthropic 用於程式碼儲存庫的程式設計代理。Anthropic 表示，Cowork 和 Claude Code 採用相同的架構。",
      },
      {
        q: "GitHub 上有開源的 AI 同事嗎？",
        a: "有，例如 OpenWorker（Andrew Ng，MIT）、OpenBot（CopilotKit，MIT）、Suparagent（Apache-2.0）和 ai-employees（MIT）等。",
      },
    ],
  },
  cta: {
    title: "給你的 AI 一份工作，而不只是一項任務。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 13 日對照各廠商自己的網站、定價頁、文件或 GitHub 查證。",
  disclaimer:
    "Crewmark 是一款獨立產品，與本頁提及的任何公司皆無關聯，也未獲得其背書。產品名稱為其所有者的商標。",
};
