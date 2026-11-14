import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: 摘要尚未提交的變更，並標出有風險的地方。當使用者問改了什麼、想要一則 commit message，或要求審查 diff 時使用。
---

## 目前的變更

!\`git diff HEAD\`

## 指示

用兩三個重點摘要上面的變更，然後列出風險，例如缺少錯誤處理、
寫死的值，或需要更新的測試。`;

const reference = `---
description: 這個程式碼庫的 API 設計慣例。撰寫或審查 HTTP 端點時使用。
paths: ["src/api/**"]
---

撰寫 API 端點時：
- 使用 RESTful 命名，資源名稱用複數
- 錯誤以 { error: { code, message } } 的形式回傳
- 用 src/api/schemas/ 裡的 schema 驗證請求內容`;

const layout = `release/
├── SKILL.md          # 步驟，以及什麼時候讀其他檔案
├── checklist.md      # 只有 SKILL.md 要 Claude 去讀時才載入
└── scripts/
    └── bump.sh       # 直接執行，不讀進脈絡`;

const fork = `---
description: 稽核相依套件中的已知漏洞和落後的主要版本
context: fork
agent: Explore
disable-model-invocation: true
---

執行套件管理工具的 audit，列出每個高風險或嚴重問題及其修正版本，
並回報哪些套件落後了主要版本。不要修改任何檔案。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Skills：建立方法、範例與最佳實務 | Crewmark AI",
    description:
      "Claude Code skill 是什麼、如何載入、怎樣用 SKILL.md 建立 skill，附範例、輔助檔案、在 subagent 中執行 skill、從外掛安裝 skill，以及最佳實務。",
  },
  breadcrumb: "Claude Code skill 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code skill：如何建立，附範例與最佳實務",
    lead: "Claude Code 的 skill 就是一個含有 `SKILL.md` 檔案的資料夾：裡面寫著什麼時候該用它，以及要遵循的指示。在需要某個 skill 之前，Claude 只看得到它的描述，用到時才載入完整內容，所以你可以把冗長的流程和參考資料隨時備著，又不必在每則訊息上為它們付費。本文說明 skill 如何載入、怎樣寫出第一個 skill、範例、輔助檔案、subagent skill、從外掛安裝 skill，以及怎樣讓 Claude 真正用上它們。",
    cta: "開始使用",
    secondary: "建立你的第一個 skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code skill 是什麼",
      text: [
        "如果你總是在對話裡反覆貼上同樣的指示、檢查清單或多步驟流程，或者 CLAUDE.md 裡某一部分已經從一條事實膨脹成一套流程，就該把它做成 skill。skill 遵循開放的 Agent Skills 標準（agentskills.io），其他 AI 工具也能讀取；Claude Code 在此之上加入了呼叫控制、以 subagent 執行，以及在提示詞裡嵌入即時 shell 輸出等功能。",
      ],
      points: [
        "兩種執行方式：當你的請求和它的 `description` 相符時由 Claude 載入，或是你輸入 `/skill-name`。",
        "不用就幾乎不花錢：脈絡裡只放名稱和描述，skill 執行時才載入內文。設定為只能手動執行的 skill 連描述都不會列出。",
        "自訂斜線指令現在就是 skill：`.claude/commands/<name>.md` 仍然可用，但 skill 資料夾還能放輔助檔案。參見 [Claude Code 斜線指令](/blog/claude-code-slash-commands)。",
        "Claude Code 也有隨附的 skill，例如 `/simplify`、`/loop`、`/batch` 和 `/debug`。",
      ],
    },
    {
      kind: "table",
      title: "skill、CLAUDE.md、subagent、外掛與 MCP 比較",
      headers: ["", "是什麼", "何時載入", "適合用來"],
      rows: [
        ["CLAUDE.md", "專案指示", "每個工作階段，完整載入", "Claude 始終需要知道的事實和慣例；參見 [CLAUDE.md 指南](/blog/claude-md)"],
        ["Skill", "一個 `SKILL.md` 資料夾", "描述始終載入；內文用到時載入", "流程、檢查清單、參考資料、可重複使用的提示詞"],
        ["Subagent", "擁有獨立脈絡的另一個工作者", "Claude 委派任務時", "細節不該塞滿你對話的旁支任務"],
        ["外掛", "由 skill、agent、hook 和 MCP 伺服器組成的套件", "安裝並啟用後", "和團隊分享 skill，或安裝別人寫的 skill"],
        ["MCP 伺服器", "與外部工具或資料來源的連線", "連線後", "給 Claude 新工具，例如資料庫或 issue 追蹤系統"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何建立 Claude Code skill",
      steps: [
        {
          title: "選好存放位置",
          text: "`~/.claude/skills/<name>/` 供你自己在所有專案裡使用；儲存庫裡的 `.claude/skills/<name>/` 提交後，所有在這個儲存庫工作的人都能用。資料夾名稱就是指令名稱，所以 `summarize-changes` 對應 `/summarize-changes`。",
        },
        {
          title: "撰寫 SKILL.md：先寫描述，再寫指示",
          text: "frontmatter 放在檔案最頂端的兩行 `---` 之間。只有 `description` 是建議填寫的：把使用情境和大家實際會說的話放在最前面。下方用 Markdown 寫指示。以 `` !`command` `` 開頭的一行會先執行這條指令，再把輸出貼進去，讓 skill 能根據你的實際狀態運作。",
          code: first,
        },
        {
          title: "兩種方式都測試看看",
          text: "在一個有未提交修改的 git 專案裡啟動 `claude`。先問「我改了什麼？」，看看 Claude 會不會自己用上這個 skill，再輸入 `/summarize-changes` 直接執行它。工作階段中新增的 skill 會自動載入；如果某個沒出現，執行 `/reload-skills`。",
        },
        {
          title: "決定誰可以執行它",
          text: "部署、傳送訊息這類有副作用的操作，加上 `disable-model-invocation: true`，這樣只有你能啟動它。只該由 Claude 載入的背景知識，加上 `user-invocable: false`。用 `$ARGUMENTS` 傳入輸入，用法見斜線指令指南。",
        },
        {
          title: "分享它",
          text: "把 `.claude/skills/` 提交到儲存庫，或把 skill 打包成外掛，供多個儲存庫或團隊使用。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Claude Code skill 範例",
      steps: [
        {
          title: "只對符合的檔案載入的參考型 skill",
          text: "參考型 skill 存放 Claude 工作時要遵守的慣例。`paths` 把自動載入限制在符合這些 glob 的檔案上。",
          code: reference,
        },
        {
          title: "帶輔助檔案的任務型 skill",
          text: "讓 SKILL.md 保持簡短，其餘內容用指引帶過去。只有 SKILL.md 要 Claude 去讀時，它才會讀 `checklist.md`；`bump.sh` 則直接執行而不讀取，所以這些細節在用到之前不佔任何成本。",
          code: layout,
        },
        {
          title: "在獨立 subagent 中執行的 skill",
          text: "`context: fork` 會啟動一個 subagent（這裡是唯讀的 Explore 類型），以 skill 作為它的提示詞。它看不到你的對話，所以指示必須能獨立成立；除非設定 `background: false`，它會在背景執行。",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "從外掛和外掛市集安裝 skill",
      text: [
        "別人寫的 skill 通常裝在外掛裡。第一次啟動互動式工作階段時，Claude Code 會註冊 Anthropic 的官方外掛市集（`claude-plugins-official`）；用 `/plugin` 瀏覽，或直接安裝，例如 `/plugin install skill-creator@claude-plugins-official`。團隊或社群的外掛市集，先用 `/plugin marketplace add owner/repo` 加入。",
      ],
      points: [
        "外掛裡的 skill 命名為 `/plugin-name:skill-name`。",
        "官方外掛市集會顯示每個外掛每一輪以及被呼叫時的脈絡成本。",
        "skill-creator 外掛能幫你撰寫 skill，並執行評估，比較使用與不使用它時的結果。",
        "信任一個儲存庫或外掛的 skill 之前先讀一讀：`allowed-tools` 可以在 skill 執行的那一輪預先核准工具。",
      ],
    },
    {
      kind: "text",
      title: "最佳實務，以及 Claude 忽略 skill 時怎麼辦",
      points: [
        "描述要為比對而寫：先寫清楚要做的事和使用者會說的話。在清單裡，描述加上 `when_to_use` 超過 1,536 個字元的部分會被截掉。",
        "最重要的指示放在前面：對話被壓縮後，Claude Code 可能只保留已呼叫 skill 的開頭部分。再呼叫一次就能恢復。",
        "針對整個任務來寫指引（「每次編輯後都執行測試」），因為之後的輪次不會重新讀取 skill 檔案。絕對不能略過的規則應該放進 hook。",
        "想減少 token 用量，就把流程從 CLAUDE.md 移到 skill 裡，替手動執行的 skill 設定 `disable-model-invocation: true`，再用 `/skill-doctor` 找出佔用脈絡卻很少使用的 skill。",
        "沒有觸發？檢查描述裡有沒有對的關鍵字，問一句「有哪些可用的 skill？」，再執行 `claude plugin validate .claude/skills` 找出無法解析的 frontmatter。",
        "觸發太頻繁？把描述寫得更窄，或用 `disable-model-invocation: true` 把 skill 改成手動執行。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "skill 教會 Claude Code 怎麼做，Crewmark 讓它每小時都有事可做。",
      text: [
        "一套 skill 讓每個工作階段都更能幹，但它仍然要等你開口。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue，同時載入你專案裡的 skill。",
      ],
      steps: [
        {
          title: "把 skill 留在儲存庫裡",
          text: "員工的工作階段會像你的一樣讀取 `.claude/skills/` 和 CLAUDE.md，所以發佈 skill 或審查檢查清單都會一起帶過去。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次，接手下一個 issue；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "指派 issue，回覆它的訊息",
          text: "把工作放到看板上；員工會邊做邊留言，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "為 Claude Code 建立 skill" },
  mid: {
    title: "skill 已經準備好了，你不在時誰來執行它們？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code skill 常見問題",
    items: [
      {
        q: "Claude Code skill 是什麼？",
        a: "含有 `SKILL.md` 檔案的資料夾，裡面是某項任務的指示或一套參考知識。當你的請求和它的描述相符時 Claude 會載入它，你也可以用 `/skill-name` 執行它。",
      },
      {
        q: "Claude Code skill 放在哪裡？",
        a: "個人 skill 放在 `~/.claude/skills/<name>/SKILL.md`，對所有專案生效；團隊用的放在儲存庫裡的 `.claude/skills/<name>/SKILL.md`；也可以放在外掛裡。",
      },
      {
        q: "怎樣讓 Claude Code 用上我的 skill？",
        a: "寫一段點明任務、並包含你提出請求時會用的字詞的描述；問一句「有哪些可用的 skill？」確認它出現在清單裡；或直接用 `/skill-name` 執行它。",
      },
      {
        q: "skill 和 subagent 有什麼不同？",
        a: "skill 是載入對話中的指示；subagent 是擁有獨立脈絡的另一個工作者。設定了 `context: fork` 的 skill 把兩者結合起來：它以 subagent 執行，skill 就是它的提示詞。",
      },
      {
        q: "skill 和外掛有什麼不同？",
        a: "外掛是打包和分享 skill、subagent、hook 和 MCP 伺服器的方式。安裝外掛就能取得其中的 skill；不用外掛，也可以直接在自己的 `.claude/skills/` 裡寫 skill。",
      },
      {
        q: "skill 會消耗很多 token 嗎？",
        a: "只有描述常駐在脈絡裡；內文在 skill 執行時才載入，設定為只能手動執行的 skill 連描述都不會列出。把冗長的流程從 CLAUDE.md 移到 skill 裡，通常能減少 token 用量。",
      },
      {
        q: "去哪裡找 Claude Code skill？",
        a: "Anthropic 的官方外掛市集（用 `/plugin` 或在 claude.com/marketplace 瀏覽）、用 `/plugin marketplace add` 加入的團隊和社群外掛市集，以及 GitHub 上的公開儲存庫。",
      },
    ],
  },
  cta: {
    title: "讓你的 Claude Code skill 依排程開工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（skills 與 plugins）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
