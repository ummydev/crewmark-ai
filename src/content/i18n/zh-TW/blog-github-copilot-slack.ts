import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # 為這個頻道選擇預設儲存庫
@GitHub help          # 列出指令`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot 整合 Slack：設定方式與替代方案 | Crewmark AI",
    description:
      "@GitHub 已於 2026 年 11 月 6 日在 Slack 和 Teams 正式推出。本文說明如何設定、Copilot 代理能在聊天討論串中做什麼、權限與限制，以及它和 Claude Code in Slack 的比較。",
  },
  breadcrumb: "Slack 中的 GitHub Copilot",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 程式設計代理",
    title: "Slack 中的 GitHub Copilot：把一段聊天變成一個 pull request",
    lead: "有了 Slack 中的 GitHub Copilot，你只要在討論串中提及 `@GitHub`，Copilot 的雲端代理就會以整段對話為脈絡，調查 bug、建立 issue、撰寫變更並開啟 pull request。它於 2026 年 11 月 6 日在 Slack 和 Microsoft Teams 正式推出。本文說明如何設定、它能做什麼與不能做什麼、誰可以觸發它，以及它和 Claude Code in Slack、全天候在崗的 AI 員工相比如何。",
    cta: "開始使用",
    secondary: "直接看設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "@GitHub 在 Slack 和 Teams 中能做什麼",
      points: [
        "在聊天討論串中調查問題、擬定計畫、撰寫程式碼，並建立 issue 和 pull request，整個討論串都會作為脈絡。",
        "在雲端沙箱中非同步工作，完成後發布一份摘要，附上它所建立內容的連結。",
        "可以建立一個 issue、多個 issue，或父子 issue；最多能同時處理同一組織或帳號下的 11 個儲存庫。",
        "支援選擇模型、使用儲存庫管理員設定的 MCP 伺服器，以及 Copilot Memory（預覽版）。",
        "自 11 月 6 日這次發布起，它會根據你的訊息自動選擇儲存庫，在每個 issue 和 PR 中註明來自哪段對話、哪位使用者；在 Teams 中還會在聊天旁用 Canvas 顯示計畫、diff 和預覽。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Slack 中設定 GitHub Copilot",
      steps: [
        {
          title: "確認你可以使用",
          text: "你需要付費的 Copilot 方案，並對想修改的儲存庫擁有寫入權限。在組織和企業中，「Copilot in the cloud」政策預設為開啟，但擁有者可以將其關閉；對於企業擁有的儲存庫，需由管理員安裝應用程式並選擇它能存取哪些儲存庫。",
        },
        {
          title: "安裝 GitHub 的 Slack 應用程式",
          text: "在 slack.github.com 將 GitHub 整合加入你的工作區（Teams 請前往 teams.github.com）。",
        },
        {
          title: "連結你的帳號",
          text: "開啟與 GitHub 應用程式的私訊，或在討論串中輸入 `@GitHub`，依提示連結你的 GitHub 帳號。`@GitHub help` 會列出所有指令。",
        },
        {
          title: "為頻道設定預設儲存庫",
          text: "在頻道中執行 `@GitHub settings`，選擇擁有者和儲存庫，第一個會成為主要儲存庫。私訊沒有預設儲存庫，所以要在提示詞中寫明儲存庫和分支。",
        },
        {
          title: "用自然語言交辦工作",
          text: "提及 `@GitHub` 並說明任務，或直接回覆一則 GitHub 通知。Copilot 會讀取討論串、在雲端工作，然後回覆 issue 或 pull request 的連結。",
          code: prompts,
        },
      ],
      source: { label: "來源：GitHub Docs，Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "權限與限制",
      points: [
        "只有對所有選定儲存庫都有寫入權限的人，才能啟動或引導工作階段；討論串中的任何人都可以補充資訊。",
        "訪客和外部協作者無法啟動或引導工作階段。",
        "在私訊中，Copilot 以你連結帳號的權限行事；在共用頻道中，它以應用程式身分建立 issue 和 PR。",
        "整個討論串都會被擷取為脈絡，並保存在產生的 pull request 中，所以別在對話裡貼上金鑰等機密資訊。",
        "GitHub 的公告沒有說明 Slack 工作階段如何計費；大規模推行前，請先查看你方案的 Copilot 用量。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Slack 中的 GitHub Copilot vs Claude Code in Slack vs AI 員工",
      headers: ["", "Slack 中的 GitHub Copilot", "Claude Code in Slack", "Crewmark AI 員工"],
      rows: [
        ["工作如何開始", "提及 `@GitHub` 或私訊應用程式", "在團隊頻道中提及 `@Claude`", "工作時間內由心跳接下一個 issue；你也可以直接指派"],
        ["在哪裡執行", "GitHub 的雲端沙箱", "Anthropic 的雲端（網頁版 Claude Code）", "你的電腦上，在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 中"],
        ["交付什麼", "issue 和 pull request", "pull request 和程式碼審查", "處理看板上的任何 issue，並留下留言、傳訊息給你"],
        ["方案", "付費 Copilot 方案", "Pro、Max 和 Ultra，需啟用網頁版 Claude Code", "你現有的代理訂閱"],
        ["沒有你也能繼續工作", "否：每次提及一個任務", "否：每次提及一個任務", "是，在它的工作時間內持續工作"],
      ],
    },
    {
      kind: "text",
      title: "聊天機器人什麼時候夠用，什麼時候不夠",
      text: [
        "當 bug 回報出現在討論串中時，Slack 中的 Copilot 非常好用：提及一次，pull request 隨即就來。但它仍然是被動的：沒人開口就什麼都不會發生，而且每次提及只對應一個任務。如果你想要一個有職位和目標、能自己消化待辦清單的代理，可以看看 [AI 員工](/ai-employees)和[如何讓 Claude Code 主動工作](/proactive-claude-code)。更多執行多個代理的方式，請見 [Claude Code 編排工具](/blog/claude-code-orchestration-tools)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "從「@ 一下機器人」到一名自己接下一個任務的員工",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名有職位、目標和工作時間的 AI 員工。它依心跳醒來，從共用看板上接下一個 issue，邊做邊留言，需要你做決定時傳訊息給你。",
      ],
      steps: [
        {
          title: "像在聊天中一樣分派工作",
          text: "在任何瀏覽器或手機上建立一個 issue 並指派出去，員工會立刻收到通知。",
        },
        {
          title: "讓它持續工作",
          text: "在你兩次傳訊息之間，它會依 15、30 或 60 分鐘的心跳處理自己的 issue。",
        },
        {
          title: "快速修正繼續交給 Copilot",
          text: "兩者並不衝突：討論串中的一次性請求用 `@GitHub`，持續的待辦清單交給員工。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Slack 中設定 GitHub Copilot" },
  mid: {
    title: "想要一個不用等人 @ 的代理？",
    text: "Crewmark 依心跳喚醒 Claude Code 或 Codex，給它一個職位、一個目標和一塊 issue 看板。",
    button: "開始使用",
  },
  faq: {
    title: "Slack 中的 GitHub Copilot 常見問題",
    items: [
      {
        q: "Slack 中的 GitHub Copilot 正式推出了嗎？",
        a: "是的。GitHub 於 2026 年 11 月 6 日宣布，Slack 和 Teams 中的 @GitHub 正式推出。",
      },
      {
        q: "如何把 GitHub Copilot 加入 Slack？",
        a: "從 slack.github.com 安裝 GitHub 的 Slack 應用程式，然後私訊該應用程式或在討論串中提及 `@GitHub`，並連結你的 GitHub 帳號。用 `@GitHub settings` 為頻道設定預設儲存庫。",
      },
      {
        q: "在 Slack 中使用 Copilot 需要什麼方案？",
        a: "需要付費的 Copilot 方案，並對它要修改的儲存庫擁有寫入權限。組織擁有者可以關閉它所依賴的「Copilot in the cloud」政策。",
      },
      {
        q: "Slack 中的 GitHub Copilot 能開啟 pull request 嗎？",
        a: "可以。它會調查問題，在雲端沙箱中撰寫變更並開啟 pull request，然後在討論串中發布一份附帶連結的摘要。",
      },
      {
        q: "它支援 Microsoft Teams 嗎？",
        a: "支援。@GitHub 在 Teams 中也已正式推出，並會在對話旁用 Canvas 顯示計畫、程式碼變更和預覽。",
      },
      {
        q: "誰可以在 Slack 頻道中觸發 Copilot？",
        a: "只有對所有選定儲存庫都有寫入權限的人，才能啟動或引導工作階段。討論串中的其他人可以補充資訊；訪客和外部協作者無法觸發它。",
      },
      {
        q: "Slack 中的 GitHub Copilot 和 Claude Code in Slack 有什麼不同？",
        a: "兩者都能把 Slack 中的一次提及變成一個雲端程式設計任務。Copilot 需要付費 Copilot 方案，會建立 issue 和 PR；Claude Code in Slack 需要 Claude Pro、Max 或 Ultra 方案，並啟用網頁版 Claude Code。",
      },
    ],
  },
  cta: {
    title: "給你的團隊一位不用等人開口的 AI 隊友。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照 GitHub 的更新日誌（2026 年 11 月 6 日）、GitHub Docs 和 Anthropic 的 Claude Code 文件查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 GitHub、Microsoft、Slack 或 Anthropic 無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
