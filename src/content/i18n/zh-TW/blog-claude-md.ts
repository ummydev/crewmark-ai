import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commands
- Install: pnpm install
- One test file: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Conventions
- 用 src/lib/errors.ts 裡的 helper 擲出錯誤，不要直接擲字串。
- src/legacy/ 仍在線上使用，但不要照搬它的寫法。

# Gotchas
- 整合測試需要 DATABASE_URL（見 .env.example）。`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- 每個 handler 都要用 src/api/schemas/ 裡的 schema 驗證輸入。`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md 怎麼寫：放哪裡、範本與 AGENTS.md | Crewmark AI",
    description:
      "CLAUDE.md 在 Claude Code 裡如何運作：檔案放在哪裡、依什麼順序載入，匯入與規則檔，該寫什麼，一份範本，以及它和 AGENTS.md 的關係。",
  },
  breadcrumb: "CLAUDE.md 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "CLAUDE.md：放在哪裡、寫什麼，以及如何與 AGENTS.md 搭配",
    lead: "CLAUDE.md 是一份 markdown 指令檔，Claude Code 在每個工作階段開始時都會讀取它：要執行的指令、要遵守的慣例、要避開的坑，都寫在專案裡。本文說明 CLAUDE.md 可以放在哪些位置、載入順序如何，匯入與規則檔，哪些該寫、哪些不該寫，一份簡短的範本，以及它和 AGENTS.md 的關係。",
    cta: "開始使用",
    secondary: "跳到範本",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "CLAUDE.md 是什麼",
      text: [
        "Claude Code 每次開啟工作階段，都不記得上一次的內容。CLAUDE.md 就是給它新同事需要的背景：啟動時讀取，並在系統提示之後作為一則訊息傳給 Claude。所以它是上下文，而不是強制執行的設定。Claude 通常會遵守，但凡是必須一律執行或絕不能發生的事，應該放進 hooks 或權限規則。",
      ],
      points: [
        "就是一般的 markdown，沒有必填欄位：標題加簡短的條列效果最好。",
        "檔案是疊加而不是覆蓋：所有適用的 CLAUDE.md 都會載入，所以互相矛盾的內容會讓 Claude 自己挑一條。",
        "用 `/context all` 查看已載入的內容，在 Memory files 底下。",
      ],
    },
    {
      kind: "table",
      title: "CLAUDE.md 放在哪裡，以及載入順序",
      text: [
        "Claude Code 依從最廣泛到最具體的順序載入這些檔案，所以離啟動位置最近的檔案最後讀取。它還會從工作目錄往上尋找，載入每一層父目錄裡的 CLAUDE.md。",
      ],
      headers: ["範圍", "位置", "用途"],
      rows: [
        ["受管理政策", "`/Library/Application Support/ClaudeCode/CLAUDE.md`（macOS）、`/etc/claude-code/CLAUDE.md`（Linux）、`C:\\Program Files\\ClaudeCode\\CLAUDE.md`（Windows）", "組織為所有開發者統一設定的規則"],
        ["使用者", "`~/.claude/CLAUDE.md`", "你自己在所有專案裡的偏好"],
        ["專案", "`./CLAUDE.md` 或 `./.claude/CLAUDE.md`", "團隊共用的指令，提交到 git"],
        ["本機", "`./CLAUDE.local.md`", "你在某個專案裡的個人筆記；記得加入 .gitignore"],
        ["子目錄", "`some/dir/CLAUDE.md`", "只在 Claude 讀取或編輯該目錄下的檔案時載入"],
        ["規則", "`.claude/rules/*.md` 和 `~/.claude/rules/`", "依主題拆分的檔案；帶有 `paths` glob 時，只對符合的檔案載入"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "怎樣寫出真正有用的 CLAUDE.md",
      steps: [
        {
          title: "從 /init 開始",
          text: "在專案裡執行 `/init`。Claude Code 會讀取程式碼庫並產生一份起始的 CLAUDE.md；如果已經有了，它會提出改進建議而不是直接覆蓋。它也會讀取 `.cursorrules` 和 Copilot 的指令。",
        },
        {
          title: "只留下 Claude 自己找不到的內容",
          text: "保留準確的建置、測試和 lint 指令（包括如何只跑一個測試）、程式碼裡容易誤導人的地方、沒有寫在任何地方的決定，以及你已經糾正過兩次的事。刪掉檔案樹和 Claude 能從儲存庫讀出來的架構。Anthropic 建議控制在 200 行以內。",
          code: example,
        },
        {
          title: "要具體，但別大吼大叫",
          text: "寫「使用 2 個空格縮排」，而不是「把程式碼格式化好」。最新文件說，IMPORTANT 和全大寫已經是過時的建議：它們會讓 Claude 過度套用某條規則。如果某一行老是被漏掉，就縮短檔案，或把這條規則改成 hook。",
        },
        {
          title: "用匯入和規則檔拆分",
          text: "`@path/to/file` 會匯入另一個檔案（相對於匯入它的檔案，最多四層）；放在反引號裡的 `@` 維持原樣。只適用於部分程式碼的規則放進 `.claude/rules/` 並加上 `paths` glob，這樣只有 Claude 碰到符合的檔案時才會載入。",
          code: rule,
        },
        {
          title: "把流程移到 skill 裡",
          text: "多步驟的工作流程，例如怎麼發佈版本，應該放進 skill（`.claude/skills/<name>/SKILL.md`），只在相關時才載入。CLAUDE.md 每個任務都會讀，所以每一行都在耗費注意力。",
        },
        {
          title: "保持更新",
          text: "當 Claude 重複犯同樣的錯，或是審查發現了問題，就加一行；用 `/memory` 編輯檔案，或請 Claude 來更新。檔案變得太長時，`/doctor` 會建議精簡。",
        },
      ],
      source: { label: "來源：Claude Code 文件，How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md 與 AGENTS.md 比較",
      text: [
        "AGENTS.md 是給程式設計代理的開放指令格式，Codex、Cursor、Gemini CLI、GitHub Copilot 的 coding agent、opencode 等許多工具都在用。Claude Code 現在也會讀取它，但預設只在專案沒有 CLAUDE.md 時才讀。",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["誰會讀", "Claude Code", "Codex、Cursor、Gemini CLI、Copilot、opencode 等；Claude Code 作為備援"],
        ["Claude Code 何時讀取", "一律讀取", "預設只在目錄樹裡沒有 CLAUDE.md、`.claude/CLAUDE.md` 或 CLAUDE.local.md 時讀取；可用 `/config` 設為兩者都讀"],
        ["個人檔案", "`CLAUDE.local.md`", "Claude Code 不讀取（`AGENTS.override.md` 是 Codex 的）"],
        ["匯入", "`@path`，最多四層", "格式裡沒有"],
        ["依路徑生效的規則", "`.claude/rules/` 加 `paths`", "每個目錄下巢狀的 AGENTS.md 檔案"],
      ],
    },
    {
      kind: "text",
      title: "Claude Code 和 Codex 共用一個檔案",
      text: [
        "如果團隊兩種代理都用，就把共用的指令放在 AGENTS.md 裡，讓 CLAUDE.md 匯入它，再在下面寫只給 Claude 的備註。它不會被載入兩次。符號連結（`ln -s AGENTS.md CLAUDE.md`）也可以，但 Windows 上的隊友用不了，而且只用文字寫一句「去讀 AGENTS.md」的 CLAUDE.md 並不可靠。",
      ],
      points: [
        "本網站自己的儲存庫就是這麼做的：它的 CLAUDE.md 只有一行 `@AGENTS.md`。",
        "Codex 會從儲存庫根目錄一路讀到你的工作目錄裡的 AGENTS.md 檔案，合併後的大小預設上限為 32 KiB。",
      ],
    },
    {
      kind: "text",
      title: "限制與注意事項",
      points: [
        "啟動時載入的 CLAUDE.md 最多完整讀取 4 MiB；更大的檔案會被略過。",
        "依需求載入的檔案，例如子目錄的 CLAUDE.md 和依路徑生效的規則，超過單檔上限就會被截斷（200K 上下文視窗下為 40,000 個字元）。",
        "匯入只是整理檔案，並不省上下文：被匯入的文字照樣會載入。",
        "專案之外的匯入只需核准一次；HTML 註解 `<!-- -->` 會被移除，不佔任何成本。",
        "執行 `/compact` 之後，專案根目錄的 CLAUDE.md 會被重新讀取。",
        "「記住這個」會進入自動記憶（`~/.claude/projects/<project>/memory/`），而不是 CLAUDE.md。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "CLAUDE.md 說明怎麼做事，Crewmark 決定做什麼、什麼時候做。",
      text: [
        "好的 CLAUDE.md 能讓每個 Claude Code 工作階段一開始就掌握狀況，但工作階段仍然要等你的下一則訊息。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "把工作階段變成員工",
          text: "選一個職位，例如軟體工程師或 SEO 專員，把目標寫成一個數字，然後在你的專案裡執行設定指令，你的 CLAUDE.md 本來就在那裡。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。多個員工可以共用一個儲存庫，參見[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "指派 issue，回覆它的訊息",
          text: "把工作放到看板上，員工會接手、邊做邊留言，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "為 Claude Code 撰寫 CLAUDE.md 檔案" },
  mid: {
    title: "CLAUDE.md 寫好了，誰來啟動下一個任務？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "CLAUDE.md 常見問題",
    items: [
      {
        q: "CLAUDE.md 是什麼？",
        a: "一份 markdown 格式的專案指令檔，Claude Code 在每個工作階段開始時讀取，內容包括建置和測試指令、慣例和已知的坑。它是給 Claude 的上下文，而不是強制執行的設定。",
      },
      {
        q: "CLAUDE.md 放在哪裡？",
        a: "團隊共用的放在專案根目錄，即 `./CLAUDE.md` 或 `./.claude/CLAUDE.md`，並提交到 git。個人使用的話，`~/.claude/CLAUDE.md` 對所有專案生效，`./CLAUDE.local.md` 只對一個專案生效。子目錄也可以有自己的，在 Claude 處理該目錄時載入。",
      },
      {
        q: "CLAUDE.md 應該寫多長？",
        a: "越短越好。Anthropic 建議每個檔案不超過 200 行，因為每個任務都會讀每一行。把流程移進 skill，把只適用於部分程式碼的規則放進 `.claude/rules/`。",
      },
      {
        q: "Claude Code 會讀取 AGENTS.md 嗎？",
        a: "會，但預設只在專案沒有 CLAUDE.md 時才讀。想共用一個檔案，可以在 CLAUDE.md 開頭寫 `@AGENTS.md`，或是在 `/config` 裡把 Project instructions 選項設為兩者都讀。",
      },
      {
        q: "用 CLAUDE.md 還是 AGENTS.md？",
        a: "如果只有 Claude Code 會讀你的儲存庫，用 CLAUDE.md。如果隊友還用 Codex、Cursor 或其他代理，就寫 AGENTS.md，再從 CLAUDE.md 匯入它，並在 CLAUDE.md 裡補充只給 Claude 的備註。",
      },
      {
        q: "怎麼建立 CLAUDE.md 檔案？",
        a: "在 Claude Code 裡執行 `/init`，根據程式碼庫產生一份，然後精簡。之後可以用 `/memory` 編輯，或請 Claude 加一行。",
      },
      {
        q: "Claude 為什麼不理會我的 CLAUDE.md？",
        a: "先用 `/context all` 確認它已載入，檢查各檔案之間有沒有矛盾，再把它縮短：檔案太長會稀釋每條規則。凡是絕不能漏掉的事，應該放進 hook 或權限規則，而不是 CLAUDE.md。",
      },
    ],
  },
  cta: {
    title: "給已經掌握狀況的 Claude Code 一份工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 5 日對照 Claude Code 文件、agents.md 和 OpenAI 的 Codex 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 和 OpenAI 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標，Codex 是 OpenAI 的商標。",
};
