import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor 比較（2026）：價格、模型、用量限制與怎麼選 | Crewmark",
    description:
      "2026 年 11 月 Claude Code 與 Cursor 比較：Cursor 加入 SpaceX 後以 Grok 為主的新方案、兩者使用 Claude 模型的費用、agent、CLI、規則、MCP 和 hooks，以及該怎麼選。",
  },
  breadcrumb: "Claude Code vs Cursor 比較",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "2026 年 Claude Code vs Cursor：有哪些改變，該選哪個",
    lead: "Claude Code 是 Anthropic 的程式設計 agent：搭配 Claude 訂閱，在你的終端機、IDE、桌面應用程式或瀏覽器中執行。Cursor 是一款 AI 程式碼編輯器，有自己的 agent、CLI 和雲端 agent。今年兩者的比較出現了變化：Cursor 在 2026 年 8 月成為 SpaceX 的一部分，方案現在以 Grok 模型為核心，在 Cursor 中使用 Claude 模型則要依 API 定價另外計費。本文截至 2026 年 11 月 6 日，比較兩者的價格、模型、額度和功能，並說明該怎麼選，或怎麼兩個一起用。",
    cta: "申請搶先體驗",
    secondary: "跳到比較表",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 和 Cursor 一覽",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["開發商", "Anthropic", "Cursor，2026 年 8 月起隸屬 SpaceX"],
        ["是什麼", "適用於終端機、IDE、桌面、網頁和手機的程式設計 agent", "AI 程式碼編輯器，另有 CLI（`agent`）、雲端 agent 和程式碼審查"],
        ["主要模型", "Claude Opus 5.5、Sonnet 5.5、Haiku 5.5、Fable 5.1", "Grok 4.5 至 4.7 和 Composer 2.5；Claude、GPT、Gemini 等依 API 定價計費"],
        ["最便宜的付費方案", "Claude Pro，每月 $20", "Plus，每月 $8，僅限 Grok 模型"],
        ["Claude 模型的費用", "包含在 Claude 方案的額度內", "依用量以 API 定價另外計費（Premium 以上）"],
        ["專案指令", "`CLAUDE.md`、`.claude/rules/`；沒有 CLAUDE.md 時會讀取 AGENTS.md", "`.cursor/rules/*.mdc`、`AGENTS.md`、使用者規則和團隊規則"],
        ["平台", "macOS、Windows、Linux", "macOS、Windows、Linux"],
      ],
    },
    {
      kind: "table",
      title: "價格：Claude 方案 vs Cursor 方案",
      text: [
        "價格為每月美元價，以 claude.com/pricing 和 cursor.com/pricing 上的標價為準。Cursor 的方案現在也包含 X 的功能（例如動態時報廣告較少），並與 Grok 共用一個每週重置的 AI 用量池。",
      ],
      headers: ["Claude 方案", "價格", "Cursor 方案", "價格"],
      rows: [
        ["Free", "不含 Claude Code", "Free", "$0，agent 請求有限"],
        ["Pro", "$20（按年付費為 $17）", "Plus", "$8，僅限 Grok 模型"],
        ["Max", "$100", "Premium", "$30：Plus 的 4 倍用量、雲端 agent、自動化、程式碼審查、依 API 價格使用第三方模型"],
        ["Ultra", "$200", "Super", "$100：Plus 的 15 倍用量"],
        ["Team", "每個席位 $25（Standard），$125（Premium）", "Ultra", "$200：Plus 的 50 倍用量"],
        ["Enterprise", "每個席位 $20，按年付費，另依 API 費率計算用量", "Teams、Enterprise", "每位使用者 $30 起；Enterprise 價格另議"],
      ],
    },
    {
      kind: "table",
      title: "功能逐項比較",
      headers: ["功能", "Claude Code", "Cursor"],
      rows: [
        ["終端機裡的 agent", "`claude`，無頭模式用 `-p`", "`agent` CLI，列印模式用 `-p`"],
        ["Plan 模式", "有（Shift+Tab、`/plan`）", "有（Shift+Tab、`/plan`）"],
        ["雲端 agent", "網頁版 Claude Code、雲端工作階段", "在虛擬機器中執行的雲端 agent（Premium 以上），可從網頁、iOS、GitHub、Slack、Linear 或 API 啟動"],
        ["平行工作", "`--worktree`、subagent、agent 檢視", "`/worktree`、跨模型的 `/best-of-n`"],
        ["自動化", "`/loop`、桌面和雲端排程任務", "由 cron、Git、Slack、Linear、webhook、Sentry、PagerDuty 觸發的自動化（Premium 以上）"],
        ["MCP", "有：`claude mcp add`、`.mcp.json`", "有：`.cursor/mcp.json`"],
        ["Hooks", "有，`settings.json` 中 30 多個事件", "有，`hooks.json` 中約 20 個事件；可載入 Claude Code hooks"],
        ["程式碼審查", "本機用 `/code-review`；Team 和 Enterprise 可用 `@claude review`", "Bugbot，支援 GitHub、GitLab、Bitbucket 和 Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 和 Cursor 之間做選擇",
      text: [
        "沒有哪一個全面領先，而公開的基準測試往往對發布者有利。請依會改變你日常工作的因素來選。",
      ],
      steps: [
        {
          title: "決定你想為哪些模型付費",
          text: "如果你每天都想用 Claude 模型，Claude 方案在額度內就包含它們；在 Cursor 中，它們要在方案之外依 API 定價另外付費。如果你用 Grok 和 Composer 就夠了，Cursor 的 $8 和 $30 方案比 Claude 的便宜。",
        },
        {
          title: "決定你想在哪裡工作",
          text: "Cursor 首先是編輯器：行內編輯、Tab 自動完成和 agent 都在同一個視窗裡。Claude Code 首先是 agent：它可以在任何終端機中工作，也能接上 VS Code、JetBrains、桌面應用程式、網頁和 Slack。",
        },
        {
          title: "想清楚有多少工作要在你不在時執行",
          text: "兩者都能在雲端執行、依排程執行。Cursor 的雲端 agent 和自動化需要 Premium 或更高方案；Claude Code 的排程任務和雲端工作階段包含在 Claude 方案裡。請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "讓你的設定可以帶著走",
          text: "把共用規則寫在 AGENTS.md 裡（兩者都會讀取），再從 CLAUDE.md 匯入；Cursor 也能載入 Claude Code hooks。這樣切換或混用的成本都很低。請見 [CLAUDE.md 指南](/blog/claude-md)。",
        },
        {
          title: "或者兩個都用",
          text: "Anthropic 的 VS Code 文件提供了 Cursor 的安裝連結，所以 Claude Code 擴充功能可以在 Cursor 編輯器裡執行，使用的是你的 Claude 方案。",
        },
      ],
      source: { label: "來源：Claude Code 文件和 Cursor 價格頁面", href: cursorPricing },
    },
    {
      kind: "text",
      title: "如果你在 Cursor 中使用 Claude Code 擴充功能",
      text: [
        "2026 年 10 月 29 日，Cursor 公告指出，Anthropic.claude-code 擴充功能的惡意版本 2.1.312 和 2.1.313（並非由 Anthropic 建置）曾在 Cursor 的擴充功能市集上架約 11 小時，影響 Windows 和 macOS。Cursor 已將其下架、重建擴充功能市集，並公布檢查方式：如果你的 `authorized_keys` 中有一把標示為 `svc-telemetry` 的 SSH 金鑰，代表這台電腦已受影響。如果你當天安裝或更新過這個擴充功能，請依照 Cursor 的安全公告處理。",
      ],
    },
    {
      kind: "text",
      title: "那 Codex 呢？",
      text: [
        "OpenAI 的 Codex 是第三個常見選擇，從免費版起的 ChatGPT 方案都包含它，它也能在 Cursor 裡執行。比較請見 [Claude Code 和 Codex 比較](/blog/claude-code-vs-codex)；想同時執行多個 agent，請見 [Claude Code 編排工具](/blog/claude-code-orchestration-tools)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "無論選哪個，都給它一份工作",
      text: [
        "編輯器和 agent 仍然在等你的下一個提示詞。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職務、目標和工作時間的 AI 員工，依心跳喚醒它，從看板上接手下一個 issue，使用的就是你已經在付費的訂閱。",
      ],
      steps: [
        {
          title: "選一個職務和目標",
          text: "軟體工程師、審查員、SEO 寫手：每個職務都有一個寫成數字的目標。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話裡醒來一次，接手下一個 issue。",
        },
        {
          title: "在看板上審查",
          text: "它邊做邊留言，需要你做決定時會傳訊息給你。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 和 Cursor 之間做選擇" },
  mid: {
    title: "選好 agent 了？現在讓它不必等你也能工作。",
    text: "Crewmark 用職務、目標和 issue 看板，依心跳喚醒 Claude Code 或 Codex。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude Code 和 Cursor 常見問題",
    items: [
      {
        q: "Claude Code 比 Cursor 更好嗎？",
        a: "取決於你的工作方式。Claude Code 適合希望訂閱就包含 Claude 模型、想要一個能在任何終端機或 IDE 中工作的 agent 的人。Cursor 適合想要一個能行內編輯的 AI 編輯器，並且能接受 Grok 模型、或願意為其他模型付 API 價格的人。",
      },
      {
        q: "可以在 Cursor 中使用 Claude 模型嗎？",
        a: "可以，Premium（$30）以上方案可用，但 Claude 等第三方模型要依用量以 API 定價另外計費。$8 的 Plus 方案只提供 Grok 模型。",
      },
      {
        q: "Claude Code 和 Cursor 哪個比較便宜？",
        a: "Cursor 的入門方案比較便宜（每月 $8 和 $30），但在 Cursor 中使用 Claude 要額外付費。如果你主要用 Claude 模型，Claude Pro（$20）或 Max（$100）方案通常比付 API 價格划算。",
      },
      {
        q: "Cursor 現在屬於 SpaceX 了嗎？",
        a: "是的。Cursor 在 2026 年 8 月 14 日宣布已被 SpaceX 收購，完成了從 4 月開始的程序。它的方案現在附帶 X 的功能和 Grok 模型。",
      },
      {
        q: "可以在 Cursor 裡執行 Claude Code 嗎？",
        a: "可以。Claude Code 擴充功能可以透過 Anthropic 的安裝連結裝進 Cursor，`claude` CLI 也能在 Cursor 的終端機中執行。請使用官方擴充功能，並在 Cursor 發布 10 月 29 日的安全公告後檢查它的版本。",
      },
      {
        q: "Claude Code 和 Cursor 能共用設定嗎？",
        a: "部分可以。兩者都會讀取 AGENTS.md，都支援 MCP（各有自己的設定檔），Cursor 也能載入 Claude Code hooks。除此之外，規則和設定檔是分開的。",
      },
      {
        q: "用量限制是怎樣的？",
        a: "Claude 方案採用 5 小時視窗加每週額度，並與 Claude 聊天共用。Cursor 方案與 Grok 共用一個每週重置的額度池，大小以 Plus 方案的倍數計算，超出後可以加購，或改依 API 計費。",
      },
    ],
  },
  cta: {
    title: "把你的程式設計 agent 變成會一直做下去的隊友。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職務、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件、claude.com/pricing 和 cursor.com（價格頁面、文件、更新日誌和部落格）查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、Cursor 或 SpaceX 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標；Cursor 是其所有者的商標。",
};
