import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: 依編號修正 GitHub issue，並附上測試
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

依照 CLAUDE.md 裡的慣例修正這個 issue。
1. 先寫一個能重現問題的失敗測試。
2. 做出能讓測試通過的最小變更。
3. 執行測試套件，總結改了什麼。`;

const positional = `---
description: 把元件從一個框架遷移到另一個框架
argument-hint: [component] [from] [to]
---

把 $0 元件從 $1 遷移到 $2。
保留所有既有行為，並讓測試全部通過。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 斜線指令：速查表、自訂指令與 skill | Crewmark AI",
    description:
      "Claude Code 斜線指令（slash commands）速查表：值得掌握的內建指令、如何撰寫帶參數的自訂斜線指令，以及指令和 skill 的關係。",
  },
  breadcrumb: "Claude Code 斜線指令",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code 斜線指令：速查表，以及如何自己寫",
    lead: "斜線指令是你在 Claude Code 訊息開頭輸入的捷徑，例如 `/init`、`/compact` 或 `/code-review`，用來控制工作階段或執行儲存好的提示詞。本文先提供一份依使用時機分組的常用指令速查表，再說明怎樣建立帶參數的自訂斜線指令，以及它們和 skill 的關係。",
    cta: "開始使用",
    secondary: "跳到自訂指令",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "斜線指令如何運作",
      text: [
        "在 Claude Code 裡輸入 `/`，就能看到所有可用的指令，繼續輸入可以篩選清單。指令只有寫在訊息開頭才算數；指令名稱後面的內容都會成為它的參數。",
      ],
      points: [
        "內建指令寫在 CLI 程式碼裡，例如 `/clear`、`/model` 和 `/compact`。",
        "隨附的 skill 跟著 Claude Code 一起提供，作用相當於交給 Claude 的提示詞，例如 `/simplify`、`/loop` 和 `/batch`。",
        "自訂指令是你自己寫的：`.claude/skills/` 裡的 skill，或 `.claude/commands/` 裡的舊式檔案。外掛和 MCP 伺服器還能再加入更多。",
        "在 Claude 還在回答時送出指令，它會在目前這一輪結束後執行；少數指令，例如 `/status` 和 `/usage`，會立即執行。",
        "不是每個人都看得到所有指令：有些取決於你的平台、方案或組織政策。",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Claude Code 斜線指令速查表",
      text: ["大多數人常用的指令，依一個工作階段通常用到它們的順序排列。"],
      headers: ["時機", "指令", "作用"],
      rows: [
        ["設定階段", "`/init`", "為專案產生一份初始 CLAUDE.md"],
        ["設定階段", "`/memory`", "編輯 CLAUDE.md 檔案，開啟或關閉自動記憶"],
        ["設定階段", "`/mcp`", "管理 MCP 伺服器連線"],
        ["設定階段", "`/permissions`", "管理工具的允許、詢問和拒絕規則"],
        ["設定階段", "`/config`", "開啟設定：主題、模型、輸出風格等"],
        ["任務進行中", "`/plan`", "在大幅變更之前切換到規劃模式"],
        ["任務進行中", "`/model`、`/effort`", "切換模型，以及調整它投入多少推理"],
        ["任務進行中", "`/context`", "顯示脈絡視窗被什麼佔滿了"],
        ["任務進行中", "`/compact [instructions]`", "摘要目前為止的對話，釋放脈絡空間"],
        ["任務進行中", "`/btw [question]`", "問一個題外問題，不把它加進對話"],
        ["任務進行中", "`/goal`", "設定一個讓 Claude 持續朝它努力的條件"],
        ["平行工作", "`/tasks`", "列出工作階段的背景工作和 subagent"],
        ["平行工作", "`/background`", "把工作階段分離出去，作為背景代理執行"],
        ["平行工作", "`/batch <instruction>`", "把涉及整個程式碼庫的變更拆成多個單元，每個單元在各自的 worktree 裡進行"],
        ["平行工作", "`/fork`", "把對話複製到一個新的背景工作階段"],
        ["發佈之前", "`/diff`", "顯示工作目錄裡的變更"],
        ["發佈之前", "`/code-review`", "審查目前的 diff 或某個 PR 裡的 bug；`/review` 是它的別名"],
        ["發佈之前", "`/security-review`", "檢查分支變更中的安全漏洞"],
        ["工作階段之間", "`/clear`", "開始一個脈絡為空的新對話"],
        ["工作階段之間", "`/resume`、`/rename`", "回到先前的對話；替目前的對話命名"],
        ["工作階段之間", "`/branch`、`/rewind`", "替對話建立分支；把程式碼和對話回復到某個檢查點"],
        ["自動化", "`/loop [interval] [prompt]`", "在工作階段保持開啟期間重複執行一個提示詞"],
        ["自動化", "`/schedule`", "建立和管理雲端排程任務"],
        ["遇到問題時", "`/doctor`、`/debug`", "診斷設定問題；讀取工作階段的偵錯記錄"],
        ["遇到問題時", "`/usage`、`/status`", "顯示費用和方案限額（`/cost` 和 `/stats` 是別名）；顯示版本、模型和帳號"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何建立自訂斜線指令",
      text: [
        "自訂指令已經併入 skill。`.claude/commands/fix-issue.md` 檔案和 `.claude/skills/fix-issue/SKILL.md` skill 都會建立 `/fix-issue`，效果完全一樣；新指令建議用 skill 格式，因為它可以帶上輔助檔案。",
      ],
      steps: [
        {
          title: "建立資料夾和 SKILL.md",
          text: "要讓整個團隊都能用，就在儲存庫裡建立 `.claude/skills/<name>/SKILL.md` 並提交。只給自己在所有專案裡用的，放到 `~/.claude/skills/<name>/SKILL.md`。資料夾名稱就是指令名稱：`fix-issue` 對應 `/fix-issue`。",
        },
        {
          title: "撰寫 frontmatter",
          text: "在兩行 `---` 之間，加上 `description`（Claude 據此判斷什麼時候用這個 skill）、在選單裡提示參數的 `argument-hint`、只允許你手動觸發時設定 `disable-model-invocation: true`（部署這類有副作用的操作都該這樣），以及為那一輪預先核准工具的 `allowed-tools`。",
        },
        {
          title: "撰寫帶參數的提示詞",
          text: "在 frontmatter 下方用 Markdown 寫指示。`$ARGUMENTS` 會被替換成指令後面輸入的全部內容；`$0`、`$1` 等（或 `$ARGUMENTS[0]`）取單一參數。寫成 `` !`command` `` 的一行會先執行這條 shell 指令，再把輸出貼進提示詞。",
          code: skill,
        },
        {
          title: "執行它",
          text: "輸入 `/fix-issue 123`。工作階段中新增或修改的 skill 會自動載入；如果某個沒出現，執行 `/reload-skills`。沒有設定 `disable-model-invocation` 的話，當你的請求和 skill 的描述相符時，Claude 也可以自己執行它。",
        },
        {
          title: "多段指令用位置參數",
          text: "執行 `/migrate-component SearchBar React Vue` 會依序填入 `$0`、`$1` 和 `$2`。",
          code: positional,
        },
      ],
      source: { label: "來源：Claude Code 文件，Commands 與 Skills", href: commands },
    },
    {
      kind: "table",
      title: "自訂斜線指令放在哪裡",
      headers: ["位置", "路徑", "指令名稱"],
      rows: [
        ["個人", "`~/.claude/skills/<name>/SKILL.md`", "在你所有專案裡都是 `/<name>`"],
        ["專案", "`.claude/skills/<name>/SKILL.md`", "儲存庫裡所有人都能用的 `/<name>`"],
        ["舊式指令檔案", "`.claude/commands/<name>.md`", "`/<name>`；子資料夾會加上前綴，例如 `commands/frontend/component.md` → `/frontend:component`"],
        ["外掛", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["MCP 伺服器", "伺服器提供的提示詞", "列在 `/` 選單裡"],
      ],
    },
    {
      kind: "table",
      title: "斜線指令與 skill 比較",
      text: [
        "合併之後，問題與其說是「選哪個」，不如說是「用哪種檔案格式」。如果 skill 和指令檔案同名，以 skill 為準。",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["建立 `/<name>`", "是", "是"],
        ["frontmatter", "欄位相同，但沒有 `name` 和 `paths`", "全部欄位"],
        ["輔助檔案（腳本、範本）", "否", "是，放在 skill 的資料夾裡"],
        ["Claude 能自行載入", "可以，除非設定了 `disable-model-invocation: true`", "可以，除非設定了 `disable-model-invocation: true`"],
        ["現況", "仍然可用", "新工作建議使用"],
      ],
    },
    {
      kind: "text",
      title: "訣竅與常見陷阱",
      points: [
        "在終端機提示符號裡可以疊加 skill：`/write-tests /fix-issue 123` 會載入兩者，並把 `123` 傳給每一個，最多六個。在 `claude -p` 和 Agent SDK 裡只會載入第一個。",
        "你記得的內建指令可能已經不在了：`/pr-comments`、`/vim` 和 `/ultraplan` 已被移除。請查看 `/help` 或文件。",
        "`allowed-tools` 只在呼叫 skill 的那一輪授予權限，而儲存庫裡的 skill 可以替自己授予工具，所以在陌生的儲存庫裡執行 Claude Code 之前，先讀一讀這些 skill。",
        "每個 skill 的描述都常駐在脈絡裡；`/skill-doctor` 會顯示每個 skill 的開銷和使用頻率。冗長的流程應該放進 skill，而不是 [CLAUDE.md](/blog/claude-md)。",
        "`/loop` 只在工作階段開啟期間重複提示詞。想讓工作自己開始，參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "斜線指令讓你更快，Crewmark 讓 Claude Code 不用你也能開工。",
      text: [
        "每個斜線指令都還需要你坐在鍵盤前輸入。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue，使用的正是你已經設定好的 skill 和指令。",
      ],
      steps: [
        {
          title: "把 skill 留在儲存庫裡",
          text: "你的 `.claude/skills/` 和 CLAUDE.md 會像在你的工作階段裡一樣，載入到員工的工作階段，所以 `/fix-issue` 和你的慣例都會一起帶過去。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次，接手下一個 issue。多位員工可以共用一個儲存庫，各自在自己的 [worktree](/blog/claude-code-worktree) 裡工作。",
        },
        {
          title: "指派 issue，回覆它的訊息",
          text: "把工作放到看板上；員工會邊做邊留言，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 裡建立自訂斜線指令" },
  mid: {
    title: "輸入已經自動化了，那下一步要輸入什麼由誰決定？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code 斜線指令常見問題",
    items: [
      {
        q: "怎麼查看 Claude Code 的所有斜線指令？",
        a: "在訊息開頭輸入 `/` 開啟選單，繼續輸入可以篩選。`/help` 和 `/skills` 也會列出它們，Claude Code 文件的 Commands 頁面有完整參考。",
      },
      {
        q: "怎麼在 Claude Code 裡建立自訂斜線指令？",
        a: "建立 `.claude/skills/<name>/SKILL.md`（或 `~/.claude/skills/<name>/SKILL.md`，對所有專案生效），寫上簡短的 frontmatter 和你的提示詞。它就會成為 `/<name>`。舊式的 `.claude/commands/<name>.md` 檔案也可以。",
      },
      {
        q: "怎麼傳參數給斜線指令？",
        a: "在指令名稱後面輸入即可。在提示詞裡，`$ARGUMENTS` 包含你輸入的全部內容，`$0`、`$1` 等對應單一參數。在 frontmatter 裡加上 `argument-hint`，可以提示需要哪些參數。",
      },
      {
        q: "斜線指令和 skill 有什麼不同？",
        a: "自訂斜線指令已經併入 skill：兩者都會建立 `/name`，用法也一樣。skill 多了一個可以放輔助檔案的資料夾，是建議的格式；`.claude/commands/` 裡的指令檔案仍然可用。",
      },
      {
        q: "斜線指令被淘汰了嗎？",
        a: "沒有。輸入 `/name` 就是執行任何指令或 skill 的方式。改變的是自訂指令的檔案格式：`.claude/commands/` 仍然可用，但更建議用 skill。個別內建指令已被移除。",
      },
      {
        q: "Claude 能自己執行我的斜線指令嗎？",
        a: "可以，當你的請求和 skill 的描述相符時。在 frontmatter 裡加上 `disable-model-invocation: true`，它就只會在你手動輸入時執行。",
      },
      {
        q: "斜線指令在 headless 模式下能用嗎？",
        a: "自訂 skill 可以：`claude -p \"/fix-issue 123\"` 會執行它，因為 `-p` 會像互動式工作階段一樣載入 skill 和自訂指令。訊息裡只有第一個 skill 會載入，而 `--bare` 會完全略過 skill 探索。",
      },
    ],
  },
  cta: {
    title: "給你的 Claude Code skill 配一位員工來執行它們。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（commands 與 skills）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
