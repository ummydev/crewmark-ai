import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code：審查一個 pull request 並發出行內評論
/code-review 142 --comment

# Codex：在 GitHub 的 PR 評論裡請它審查
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- billing/ 和 auth/ 裡新增的分支如果沒有測試，要指出來。
- 任何 SQL migration 都要有回滾；沒有的話要說出來。
- 不評論格式問題，那交給 linter。
- 不核准、也不要求修改：只留評論。`;

export const copy: GuideCopy = {
  meta: {
    title: "用 Claude Code 和 Codex 為每個 PR 做 AI 程式碼審查",
    description:
      "用 Claude Code 和 Codex 為 pull request 做 AI 程式碼審查的三種方式：附行內評論的 /code-review、@codex review 和自動審查，以及一位審查看板上每個 PR 的 AI 員工。附指令、可複製的審查規則和限制。",
  },
  breadcrumb: "每個 PR 都有 AI 程式碼審查",
  parent: { name: "使用情境", href: "/use-cases" },
  hero: {
    kicker: "使用情境 · 工程",
    title: "用 Claude Code 和 Codex 為每個 pull request 做 AI 程式碼審查",
    lead: "Claude Code 和 Codex 都能審查 pull request，並在 GitHub 上留下行內評論。你可以自己發起審查、讓它自動開始，或把「審查看板上進來的每個 PR」交給一位 AI 員工當作固定工作。本頁說明每種方式的指令、值得寫下來的審查規則、AI 審查不會做的事，以及如何讓審查成為固定工作，而不是要靠人記得去叫它。",
    cta: "開始使用",
    secondary: "看指令",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "為 pull request 做 AI 審查的三種方式",
      headers: ["方式", "如何啟動", "在哪裡執行", "適合"],
      rows: [
        ["Claude Code `/code-review`", "由你執行，帶上 PR 編號；加 `--comment` 會發出行內評論", "你自己的 Claude Code 工作階段，任何方案", "合併前審查自己的分支或某個 PR"],
        ["Claude Code Review（託管）", "由組織的 Owner 為儲存庫開啟；任何人留言 `@claude review` 即可", "Anthropic 的服務", "使用 Claude 方案、想要隨需審查的團隊"],
        ["Codex 程式碼審查", "在 PR 評論裡寫 `@codex review`，或在 Codex 設定裡開啟 Automatic review", "OpenAI 的雲端", "使用 ChatGPT 方案的團隊；在 GitHub 上標出 P0 和 P1 問題"],
        ["一位 AI 員工", "看板上的審查 issue，或指派給它的每個 PR", "你自己的 Claude Code 或 Codex，依心跳執行", "固定工作：每個 PR 都審查，後續問題有人追蹤"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何用 Claude Code 或 Codex 審查 pull request",
      steps: [
        {
          title: "Claude Code：執行 /code-review",
          text: "在 Claude Code 工作階段裡，`/code-review` 會找出你分支變更中的 bug；帶上 PR 編號就審查那個 pull request，加 `--comment` 會把發現以行內評論發到 GitHub。`--fix` 則是把修正直接套用到你的工作目錄。`/review` 是它的別名。",
          code: commands,
        },
        {
          title: "Codex：留言 @codex review",
          text: "在 pull request 的評論裡寫 `@codex review`；Codex 會以 👀 回應，接著發出審查。需要的話在後面加上審查重點。想不用每次開口，就在 Codex 設定裡開啟 Automatic review 並選擇觸發時機。",
        },
        {
          title: "把審查規則寫下來",
          text: "Codex 會讀取離程式碼最近的 AGENTS.md 裡的 `## Code Review Rules` 一節。Claude Code 的話，把同樣的規則放進 CLAUDE.md。有了規則，審查會更一致，也不會去管 linter 已經處理的事。",
          code: rules,
        },
      ],
      source: { label: "來源：Claude Code 文件，用 /code-review 在本機審查", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "AI 審查不會做的事",
      points: [
        "核准或阻擋：Claude 的託管 Code Review 從不核准或阻擋 pull request；好的職位說明也會要求員工只留評論。",
        "取代變更的負責人：它能抓出 bug 和缺少的測試；產品和設計上的決定交給人。",
        "全部都看：Codex 在 GitHub 上只標出 P0 和 P1 問題，讓評論保持聚焦。需要時請它專注在特定面向。",
        "不花成本：審查會消耗你方案的用量。隨需審查，或在 PR 標為可審查時審查，而不是每次推送都審。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓審查成為某個人的工作",
      text: [
        "指令只在有人記得執行時才會審查。AI 員工會審查，是因為這就是它的工作：Crewmark 把你的 Claude Code 或 Codex 變成一位工程師，依心跳醒來，接手等待審查的 pull request 並留下評論。",
      ],
      steps: [
        {
          title: "從職位開始",
          text: "[AI 軟體工程師](/ai-employees/software-engineer)，把你們的審查規則寫進它的職位說明。",
        },
        {
          title: "把審查導到看板上",
          text: "指派審查 issue 給它，或加一個週期性 issue，審查所有標為可審查的開放 pull request。",
        },
        {
          title: "更多工程工作",
          text: "參見[用 Claude Code 做工程](/for/engineering)和 [Sentry 錯誤分流](/use-cases/sentry-error-triage)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 Claude Code 或 Codex 審查 pull request" },
  mid: {
    title: "想讓每個 pull request 都有人審查，不必開口？",
    text: "在你的 Claude Code 或 Codex 上執行的 Crewmark 工程師依心跳審查等待中的 PR。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "如何用 Claude Code 審查 pull request？",
        a: "在 Claude Code 工作階段裡執行 `/code-review <PR 編號> --comment`，就會把發現以行內評論發到 GitHub。不加 `--comment` 只會在工作階段裡回報；`--fix` 會在本機套用修正。",
      },
      {
        q: "Claude Code 的 /review 和 /code-review 一樣嗎？",
        a: "Claude Code 的文件把 `/review` 列為 `/code-review` 的別名。",
      },
      {
        q: "如何讓 Codex 審查 pull request？",
        a: "在 pull request 上留言 `@codex review`，或在 Codex 設定裡開啟 Automatic review，讓審查在你選的觸發時機自動開始。儲存庫必須先啟用程式碼審查。",
      },
      {
        q: "可以把我們團隊的規則交給 AI 審查者嗎？",
        a: "可以。Codex 會讀取 AGENTS.md 裡的 `## Code Review Rules` 一節；Claude Code 的話，把同樣的規則放進 CLAUDE.md。",
      },
      {
        q: "AI 會核准或合併 pull request 嗎？",
        a: "Claude 的託管 Code Review 從不核准或阻擋，合併也應該交給人。AI 員工的職位說明裡應該寫明只留評論。",
      },
    ],
  },
  cta: {
    title: "每個 pull request 都有人審查，不必靠誰記得開口。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 10 日對照 Claude Code 的程式碼審查文件和 OpenAI 的 Codex 程式碼審查文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、OpenAI 和 GitHub 均無關聯，也未獲其背書。產品名稱是其各自所有者的商標。",
};
