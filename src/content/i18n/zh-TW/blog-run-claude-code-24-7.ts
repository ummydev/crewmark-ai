import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Claude Code 工作期間讓 Mac 保持喚醒（claude 結束後就能重新睡眠）
caffeinate -i claude --permission-mode auto

# 或把任務交給雲端工作階段，闔上筆電它也會繼續跑
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# 在任何一台機器上，幫這個雲端工作階段排好下一步
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 能 24 小時執行嗎？通宵、無人看管怎麼跑",
    description:
      "讓 Claude Code 通宵或全天候工作：權限模式、/goal、讓電腦保持喚醒、雲端工作階段、排程任務、用量限制，以及哪些情況會讓它停下來。",
  },
  breadcrumb: "讓 Claude Code 24 小時執行",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code 能 24 小時執行嗎？如何讓它通宵、無人看管地工作",
    lead: "能，但有限制。Claude Code 本身沒有到點就停的機制，但有四件事會讓它停下：工作階段結束或電腦睡眠；卡在一個權限提示上；碰到方案的用量限制；或工作做完了，沒有下一件事可做。每一種都有解決辦法。這篇指南說明如何讓 Claude Code 在你睡覺時繼續工作、每種方式做不到什麼，以及如何幫它排一個固定的夜班。",
    cta: "開始使用",
    secondary: "直接看如何通宵執行",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "讓 Claude Code 持續執行的幾種方式",
      text: [
        "有的方式一直沿用同一個對話，所以 Claude 記得自己做過什麼；有的每次都用同一句提示詞開一個新的工作階段。",
      ],
      headers: ["方式", "電腦能不能關", "是否同一個對話", "界限", "適合"],
      rows: [
        ["雲端工作階段（`claude --cloud`、claude.ai/code）", "能", "是", "一段時間沒有活動就會停止，虛擬機器隨之回收", "睡前交出去的一個長任務"],
        ["雲端排程任務（`/schedule`）", "能", "否，每次執行都是新的工作階段", "最多每小時一次；需要 Pro、Max、Ultra、Team 或 Enterprise", "只需要程式碼儲存庫的重複性任務"],
        ["桌面版排程任務", "不能：應用程式要開著，電腦不能睡眠", "否，每次執行都是新的工作階段", "只在電腦喚醒時執行", "處理本機檔案的夜間任務"],
        ["`/loop`", "不能：工作階段要開著", "是", "隨工作階段結束；循環任務 7 天後過期", "盯著幾個小時的 CI 或部署"],
        ["cron + `claude -p --resume`", "不能", "是", "依你的 cron 節奏；需要自己架設", "一個 agent 照著 TODO 檔案工作"],
        ["Crewmark 心跳", "不能", "是", "依你設定的工作時間，可以跨過午夜", "一份長期工作，從看板上逐一領取 issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何讓 Claude Code 通宵執行",
      steps: [
        {
          title: "選一個不會每一步都停下來問的權限模式",
          text: "凌晨 2 點卡在權限提示上的工作階段，會一直空等到早上。自動模式不再詢問，而是在背景做安全檢查後直接執行操作。略過所有檢查的 `bypassPermissions`，只在隔離的容器和虛擬機器裡使用。",
          code: overnight,
        },
        {
          title: "給它定一個終點",
          text: "`/goal` 接受一個條件，例如某組測試全部通過；每一輪結束後 Claude 都會檢查它，沒滿足就自己再開一輪，直到滿足為止。想讓它做得更久，就在儲存庫裡留一個 TODO 檔案或一份寫好的計畫，讓它依序做下去。",
        },
        {
          title: "讓電腦保持喚醒，或把工作移到雲端",
          text: "本機工作階段需要電腦開著、claude 程序一直執行。在 Mac 上，`caffeinate -i` 讓電腦在 Claude Code 執行期間保持喚醒；在伺服器上，把 claude 放進 tmux 或 screen 裡執行，關掉終端機也不會中斷。雲端工作階段在你闔上筆電後會繼續執行。",
        },
        {
          title: "事先想好用量限制",
          text: "Claude 方案採用滾動的 5 小時視窗加每週上限，和聊天共用。Max 的用量是 Pro 的 5 倍；Ultra 每週是 Pro 的 10 倍，經過驗證的帳號沒有 5 小時上限。如果在任務進行中碰到上限，Claude Code 可能會把目前這一步做完（Pro 每週一次，Max 每次都可以）。用量點數（credits）或 API 金鑰能讓它繼續工作。見[如何減少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
        },
        {
          title: "用手機查看進度",
          text: "用 Remote Control（遠端控制），可以在 Claude App 或瀏覽器裡查看本機工作階段；雲端工作階段會出現在 App 的 Code 分頁裡。如果 Claude 夜裡問了你問題，醒來後回答，它就會繼續工作。見 [Claude Code 遠端控制](/remote-claude-code)。",
        },
      ],
      source: { label: "來源：Anthropic 的 Claude Code 雲端工作階段文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "哪些情況會讓 Claude Code 夜裡停下來",
      points: [
        "終端機關閉或電腦睡眠。電腦喚醒後，Remote Control 工作階段會重新連上，但睡眠期間什麼工作也不會做。",
        "權限提示沒人回答。自動模式能避開其中大部分。",
        "用量限制。除非你加購了點數或使用 API 金鑰，否則工作階段會一直等到視窗重置。",
        "雲端閒置。雲端工作階段一段時間沒有活動就會停止，包括在等你核准一次 MCP 工具呼叫的時候。重新開啟會恢復對話，但當時還在執行的 shell 指令、subagent 或 `/loop` 不會恢復。",
        "工作做完了。目標達成或 TODO 清單清空後，它就會停下，這正是你想要的。",
        "工作階段太長。Claude Code 會自動壓縮上下文，早期的細節只會以摘要的形式保留。把計畫寫在檔案裡，而不只是留在對話裡。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫 Claude Code 排一個夜班",
      text: [
        "通宵跑一次很容易，難的是一直持續下去：每天早上都得有人把下一個任務排好。Crewmark 把一個 Claude Code 對話變成有工作時間和心跳的 AI 員工，讓它自己不斷從看板上領取工作。",
      ],
      steps: [
        {
          title: "設定工作時間",
          text: "工作時間可以跨過午夜，所以 22:00 到 07:00 這樣的夜班也可以，可以只排平日，也可以每天都排。工作時間以外員工就休息，不會消耗你的方案額度。",
        },
        {
          title: "選好心跳間隔",
          text: "在班時，crewmark CLI 每 15、30、60、120 或 240 分鐘喚醒同一個對話，讓它領取下一個 issue。如果對話已經關了，Crewmark 會用 `claude -p --resume` 以自動模式把它恢復。你的電腦要一直開著。",
        },
        {
          title: "早上查看看板",
          text: "每個 issue 都有留言和活動紀錄，需要你出面的事會以訊息的形式傳給你，員工會等你回覆。見[如何讓 Claude Code 主動工作](/proactive-claude-code)和[什麼是 AI 員工](/ai-employees)；用 Codex 的話，請看 [Codex 長時間任務](/blog/codex-long-running-tasks)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "讓 Claude Code 通宵執行" },
  mid: {
    title: "想讓 Claude Code 每晚都上夜班？",
    text: "Crewmark 在你設定的時間內依心跳喚醒你的 Claude Code，從看板上指派下一個 issue 給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Code 能 24 小時執行嗎？",
        a: "能，只要有東西讓它一直跑下去：電腦關機時用雲端工作階段或雲端排程任務；或在一台保持喚醒的電腦上跑本機工作階段，並搭配不會因權限提示停下的權限模式。用量限制依然存在，所以全天候工作需要一個額度充足的方案，或額外的用量點數。",
      },
      {
        q: "可以讓 Claude Code 通宵執行嗎？",
        a: "可以。用自動模式啟動它，給一個明確的目標或一個 TODO 檔案，讓電腦保持喚醒（或用 `claude --cloud`），早上再來看結果。需要你處理的事會以問題的形式等著你。",
      },
      {
        q: "闔上筆電後 Claude Code 還會繼續跑嗎？",
        a: "本機工作階段不會：它需要電腦開著、claude 程序一直執行，Remote Control 工作階段也會在終端機關閉時結束。雲端工作階段會繼續執行，你可以在 Claude App 裡查看它。",
      },
      {
        q: "Claude Code 有無人看管模式嗎？",
        a: "沒有叫這個名字的模式。無人看管執行是把一個不會詢問的權限模式（自動模式，或在隔離容器裡用 `bypassPermissions`），和 headless 模式（`claude -p`）或雲端工作階段搭配起來。",
      },
      {
        q: "讓 Claude Code 跑一整夜會碰到用量限制嗎？",
        a: "有可能。所有 Claude 方案裡，聊天和 Claude Code 共用一個 5 小時視窗和每週上限；經過驗證的 Ultra 帳號沒有 5 小時上限。用心跳或排程把工作分散到多個視窗裡，而不是一口氣集中跑完。",
      },
      {
        q: "讓 Claude Code 無人看管地執行安全嗎？",
        a: "在自己的電腦上用自動模式，而不是 `bypassPermissions`；在每個修改都要經過審查的儲存庫裡工作；正式環境的憑證不要放在它拿得到的地方。雲端工作階段預設在網路存取受限的隔離虛擬機器裡執行。",
      },
    ],
  },
  cta: {
    title: "幫 Claude Code 排一個夜班。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照 Claude Code 官方文件（雲端工作階段、排程任務、Remote Control）查核。",
  disclaimer: "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
