import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /skills/website-design; the English master is
// src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude 設計 Skills：網站與 UI 設計（2026）",
    description:
      "最好用的網站與 UI 設計 Claude Code skill，資訊來自各專案自己的儲存庫：Anthropic 的 frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop、Emil Kowalski 的 skill、shadcn 等比較，附安裝指令。",
  },
  breadcrumb: "網站與 UI 設計 skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · 設計",
    title: "最好用的網站與 UI 設計 Claude skill",
    lead: "設計 skill 是一個 SKILL.md 檔案，教 Claude Code（以及 Codex、Cursor 等 agent）怎麼做設計：選什麼顏色和字型、避開哪些一看就是 AI 做的預設樣式，交付之前又該怎麼檢查成果。沒有它，agent 往往會交出千篇一律的漸層加卡片頁面。以下是 2026 年值得安裝的設計 skill、各自最擅長什麼，以及怎麼安裝，資訊都來自各專案自己的儲存庫。",
    cta: "開始使用",
    secondary: "比較這些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "做新的登陸頁或公司官網：Taste Skill。它會先決定設計方向、使用真實照片，交付前還會在瀏覽器裡以四種寬度檢查頁面。",
        "打磨現有的 UI：Impeccable（提供 polish、critique、audit 等指令，外加以規則為基礎的 AI 感偵測器）或 unslop（依序修正間距、顏色、圖示、文案和字型）。",
        "想要 Anthropic 出品的穩妥預設選項：官方 skill frontend-design，幫你避開千篇一律的 AI 設計。",
        "為任何平台挑選風格、配色和字型：UI UX Pro Max，一個涵蓋網頁、行動裝置和桌面的可搜尋設計資料庫。",
        "動態效果和細節：Emil Kowalski 的 skill。",
        "依無障礙和 UX 規則審查程式碼：Vercel 的 web-design-guidelines。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "網站與 UI 設計 skill 比較",
      text: [
        "Star 數和授權來自 2026 年 11 月 8 日的 GitHub API，已取整數。包含多個 skill 的儲存庫，Star 數以整個儲存庫計算。",
      ],
      headers: ["Skill", "最適合", "支援的工具", "Star", "授權"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)（Anthropic）", "為任何新 UI 做出有辨識度的設計；先規劃一套 token 系統", "Claude Code、Claude.ai", "~189k（整個儲存庫）", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "網頁、行動裝置和桌面的風格、配色、字型搭配和 UX 規則", "Claude Code、Cursor、Codex 及另外約 20 種", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "公司官網和行銷網站，在真實瀏覽器裡檢查成果", "Claude Code、Codex、skills CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "評論和打磨現有介面；AI 感偵測器", "Claude Code、Codex、Cursor 等", "~105k", "Apache 2.0"],
        ["[Emil Kowalski 的 skill](https://github.com/emilkowalski/skills)", "動畫、打磨和元件細節", "透過 skills CLI 支援任何 agent", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)（Vercel）", "依 100 多條無障礙和 UX 規則審查 UI 程式碼", "透過 skills CLI 支援任何 agent", "~34k（整個儲存庫）", "MIT（依 README）"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "在 React 應用程式裡正確使用 shadcn/ui 元件", "透過 skills CLI 支援任何 agent", "~128k（整個儲存庫）", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)（花叔）", "一句提示詞產生網頁、App 原型、簡報和動態效果；以中文撰寫", "Claude Code、Cursor、Codex 等", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "一輪一輪把有 AI 感的 UI 改成真正經過設計的介面", "Claude Code、Codex", "~11k", "CC BY 4.0"],
        ["[Stitch skills](https://github.com/google-labs-code/stitch-skills)（Google）", "先在 Stitch 裡設計，再建構 React 或 React Native", "Claude Code、Cursor、Codex；需要 Stitch MCP", "~9k", "Apache 2.0"],
        ["[Figma skills](https://github.com/figma/mcp-server-guide)", "把 Figma 設計稿轉成程式碼，以及在 Figma 裡建立設計系統（beta）", "Claude Code、Cursor；需要 Figma MCP", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何安裝和使用設計 skill",
      steps: [
        {
          title: "裝一兩個就好，別全裝",
          text: "幾個都想主導設計方向的 skill 會互相打架。挑一個負責設計的（frontend-design、Taste Skill 或 UI UX Pro Max），需要的話再加一個負責審查的（Impeccable、unslop 或 web-design-guidelines）。",
          code: install,
        },
        {
          title: "把需求講清楚",
          text: "說明頁面的用途、給誰看，再提供一兩個你喜歡的網站。這些 skill 大多會先詢問設計方向，需求寫得多具體，成果就有多具體。",
        },
        {
          title: "讓它自己檢查",
          text: "Taste Skill 會以四種寬度渲染頁面，並執行收尾檢查（finish gate）；Impeccable 的偵測器用 `npx impeccable detect src/` 跑 62 條規則。把這些檢查開著，截圖也要自己看一遍。",
        },
        {
          title: "把成果存成設計系統",
          text: "好幾個 skill 都會寫一份 DESIGN.md（Impeccable、Taste Skill、Stitch）。把它留在儲存庫裡，之後的工作階段和其他 agent 就會沿用同樣的顏色、字型和間距。參見 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "來源：Anthropic 的 frontend-design skill", href: anthropic },
    },
    {
      kind: "text",
      title: "安裝前需要知道的事",
      points: [
        "有些 skill 會加入 hook 或下載引擎：Impeccable 會安裝指令 hook，並預設開啟遙測（設定 `DO_NOT_TRACK=1` 即可關閉）；Taste Skill 以 Stop hook 的形式執行收尾檢查，需要 Node 22+ 和 Chrome。",
        "根據 Taste Skill 的 README，完整建構一次可能要 30–45 分鐘，消耗數十萬個 token。",
        "UI UX Pro Max 需要 Python 3，另有付費進階版；開源的 skill 採用 MIT 授權。",
        "unslop 採用 CC BY 4.0：重複使用它的文字時要標註作者。別把它和同名、但針對文字的儲存庫搞混。",
        "Stitch 和 Figma 的 skill 需要各自的 MCP 伺服器和帳號；Figma 的畫布寫入功能仍在 beta 階段，免費席次有使用限制。",
        "我們團隊的經驗：我們用 Taste Skill 做過 Crewmark 自己的產品畫面，也為 unslop 拍過一支短影片。我們的姊妹專案 [pretty-ui](https://github.com/ummydev/pretty-ui) 是一個更新、更小的 skill，做的是同一件事。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫這些 skill 配一位每天上班的設計師",
      text: [
        "一個 skill 能讓一個工作階段的設計做得更好。Crewmark 把 Claude Code 或 Codex 變成一位 AI UI 設計師：有目標（例如每週打磨好三個畫面）、有工作時間，還有一塊待修畫面的看板；它依心跳醒來，提交附上前後對照截圖的 Pull Request。",
      ],
      steps: [
        {
          title: "聘用 UI 設計師職位",
          text: "職位說明、目標和日常流程都已設定好；參見 [AI UI 設計師](/ai-employees/ui-designer) 和 [AI App 設計師](/ai-employees/app-designer)。",
        },
        {
          title: "把設計 skill 裝進儲存庫",
          text: "員工會像任何工作階段一樣，使用 `.claude/skills` 裡的 skill。",
        },
        {
          title: "審查 Pull Request，而不是寫提示詞",
          text: "核准你喜歡的畫面；要修改的地方在看板上提出。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安裝並使用 Claude 設計 skill" },
  mid: {
    title: "想要一位每天執行這些 skill 的設計師？",
    text: "Crewmark 的 AI UI 設計師依心跳在你的程式碼裡工作，提交附上截圖的 Pull Request。",
    button: "開始使用",
  },
  faq: {
    title: "Claude 設計 skill 常見問題",
    items: [
      {
        q: "做網站設計，最好用的 Claude skill 是哪一個？",
        a: "做新網站，用 Taste Skill 或 Anthropic 的 frontend-design；打磨現有 UI，用 Impeccable 或 unslop；跨平台挑選風格和配色，用 UI UX Pro Max。大多數人會裝一個負責設計的，再裝一個負責審查的。",
      },
      {
        q: "有官方的 Claude 設計 skill 嗎？",
        a: "有。Anthropic 在 anthropics/skills 裡發佈了 frontend-design，也在 claude-plugins-official 裡以外掛形式提供。它採用 Apache 2.0 授權，重點是避開千篇一律的 AI 設計預設樣式。",
      },
      {
        q: "如何在 Claude Code 裡安裝 skill？",
        a: "用外掛市集（先 `/plugin marketplace add owner/repo`，再 `/plugin install`）、skills CLI（`npx skills add owner/repo`），或者把 skill 的資料夾複製到 `.claude/skills/`。",
      },
      {
        q: "這些 skill 能在 Codex 和 Cursor 裡使用嗎？",
        a: "大多數可以：UI UX Pro Max、Impeccable、Taste Skill 和 Huashu Design 都寫明了 Codex 的用法，skills CLI 也能把 SKILL.md 格式的 skill 安裝到 Cursor、Codex 和另外約 75 種 agent。",
      },
      {
        q: "Claude 設計 skill 免費嗎？",
        a: "這裡列出的 skill 都是開源的（MIT、Apache 2.0 或 CC BY 4.0）。圍繞它們的部分產品要付費：UI UX Pro Max 有付費進階版，Stitch 和 Figma 也需要各自的帳號。",
      },
      {
        q: "Impeccable 和 Taste Skill 有什麼差別？",
        a: "Taste Skill 用來做新的公司官網和行銷網站，並在真實瀏覽器裡檢查；Impeccable 最擅長處理現有的介面，提供評論、稽核和打磨指令，以及以規則為基礎的 AI 感偵測器。",
      },
    ],
  },
  cta: {
    title: "幫你的看板配一位設計師，用上你信得過的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照各 skill 的 GitHub 儲存庫和 GitHub API 查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 及文中所列 skill 的作者無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
