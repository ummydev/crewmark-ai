import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# 互動式：先規劃好想要的結果，再交給 Codex 一個它能自己檢查的目標
/plan
/goal all tests in test/auth pass and the lint step is clean

# Headless 模式，從指令碼或 cron 執行：允許它修改工作區裡的檔案
codex exec --sandbox workspace-write "Work through TODO.md in order"

# 隔天早上，或下一次 cron 執行時：繼續同一個工作階段
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 長時間任務：讓 Codex 通宵執行",
    description:
      "讓 OpenAI Codex 連續工作好幾個小時甚至通宵：/goal 和 /plan、雲端任務、codex exec resume、讓 Mac 保持喚醒、用手機查看進度、用量限制，以及哪些情況會讓它停下來。",
  },
  breadcrumb: "Codex 長時間任務",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "部落格 · Codex",
    title: "Codex 長時間任務：如何讓 Codex 通宵或在背景執行",
    lead: "Codex 可以在一個任務上連續工作好幾個小時，你睡覺時也能繼續，前提是照顧好四件事：一個它能自己檢查的目標；一台保持喚醒的電腦（或一個雲端任務）；不用等你核准的權限設定；以及方案裡足夠的額度。這篇指南說明執行 Codex 長時間任務的幾種方式，從 Goal 模式到雲端任務和 `codex exec resume`，每種方式做不到什麼，以及如何幫 Codex 排一個固定的夜班。",
    cta: "開始使用",
    secondary: "直接看如何通宵執行",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "讓 Codex 持續執行的幾種方式",
      text: ["有的方式一直沿用同一個對話，所以 Codex 保留著上下文；有的每次都從頭開始。"],
      headers: ["方式", "電腦能不能睡眠", "是否同一個對話", "界限", "適合"],
      rows: [
        ["Goal 模式（`/goal`）", "本機工作不能", "是", "目標達成，或需要你做決定時", "終點明確的單一任務"],
        ["Codex 雲端任務", "能", "是", "任務完成時；由你審查後開 pull request", "睡前交出去的一個任務"],
        ["對話裡的排程任務", "本機檔案不能：電腦要開著，應用程式要在執行", "是", "依排程執行：按分鐘、每天或每週", "隔一段時間回頭看同一份工作"],
        ["用 cron 呼叫 `codex exec`", "不能", "是，用 `codex exec resume`", "依你的 cron 節奏；需要自己架設", "指令碼和 CI"],
        ["Crewmark 心跳", "不能", "是", "依你設定的工作時間，可以跨過午夜", "一份長期工作，從看板上逐一領取 issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何讓 Codex 通宵執行",
      steps: [
        {
          title: "給它一個能自己檢查的目標",
          text: "在桌面應用程式、CLI 或 IDE 外掛裡，`/goal` 會啟動 Goal 模式：目標文字既是第一句提示詞，也是終點。如果你還不確定怎樣才算完成，`/plan` 會向你提問，把想要的結果變成一個有可衡量標準的目標。在目標裡寫上一項檢查，例如某組測試全部通過。",
          code: commands,
        },
        {
          title: "讓電腦保持喚醒，或把任務交給雲端",
          text: "在 Mac 上做本機工作時，在桌面應用程式裡開啟「Prevent sleep while running」。Codex 雲端任務（Codex Cloud）在自己的工作區裡執行，電腦睡眠時也會繼續工作；選擇 Work in > Cloud 和一個環境，就能啟動一個雲端任務。",
        },
        {
          title: "設好核准方式，別讓它凌晨 2 點停下來",
          text: "Goal 模式沿用原有的沙箱和核准政策，需要做決定時會暫停。用 `--sandbox workspace-write` 讓它可以修改工作區，或用「Approve for me」，讓審查者替你處理例行請求。`--full-auto` 已經不再支援，`danger-full-access` 只該用在隔離的 runner 或容器裡。",
        },
        {
          title: "事先想好用量限制",
          text: "Codex 和你的 ChatGPT 方案共用額度：滾動的 5 小時視窗加每週上限，雲端任務也從同一個額度池裡扣。ChatGPT Pro 目前沒有 5 小時上限，但可能有每週上限。用量點數（credits）或 API 金鑰能讓本機工作繼續下去。具體數字見 [Claude Code vs Codex](/blog/claude-code-vs-codex)。",
        },
        {
          title: "用手機查看進度",
          text: "在 ChatGPT App 裡可以追蹤任務、核准指令、審查 diff，雲端任務和你在 Settings > Connections 下連線的 Mac 或 Windows 電腦都支援。被連線的電腦必須保持喚醒、連上網路。見 [Codex 遠端控制](/blog/codex-remote-control)。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 長時間任務文件（英文）", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "哪些情況會讓 Codex 長時間任務停下來",
      points: [
        "只有你能做的決定。Goal 模式會暫停，而不會自己擴大權限，所以離開前先檢查好核准設定。",
        "本機工作時電腦進入睡眠或連線中斷。OpenAI 建議在預計會斷線前先暫停目標，之後再恢復。",
        "用量限制。要等視窗重置，或你加購了用量點數，它才會繼續。",
        "兩個對話修改同一批檔案。給平行的對話各開一個 git worktree。",
        "工作做完了。目標達成後它就會停下，這正是你想要的；如果是一連串任務，就把它們寫進一個檔案，讓它逐一做完。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫 Codex 排一個夜班",
      text: [
        "長時間任務總會結束，一份工作卻不會。Crewmark 把一個 Codex 對話變成有工作時間和心跳的 AI 員工，讓它不斷從看板上領取下一個 issue，不用你來排。",
      ],
      steps: [
        {
          title: "設定工作時間",
          text: "工作時間可以跨過午夜，所以 22:00 到 07:00 這樣的夜班也可以，可以只排平日，也可以每天都排。工作時間以外員工就休息，不會消耗你的方案額度。",
        },
        {
          title: "選好心跳間隔",
          text: "在班時，crewmark CLI 每 15、30、60、120 或 240 分鐘用 `codex queue --resume` 往同一個 Codex 對話裡排入一則訊息並啟動它，讓員工領取下一個 issue。你的電腦要一直開著。",
        },
        {
          title: "早上查看看板",
          text: "每個 issue 都有留言和活動紀錄，需要你出面的事會以訊息的形式傳給你，員工會等你回覆。見[如何讓 Codex 主動工作](/proactive-codex)和[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "讓 Codex 通宵執行" },
  mid: {
    title: "想讓 Codex 每晚都上夜班？",
    text: "Crewmark 在你設定的時間內依心跳喚醒你的 Codex，從看板上指派下一個 issue 給它。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Codex 能通宵執行嗎？",
        a: "能。用 `/goal` 給它一個目標，用「Prevent sleep while running」讓 Mac 保持喚醒（或用 Codex 雲端任務，電腦睡眠時它也會繼續工作），設好核准方式讓它不用等你，早上再來看結果。",
      },
      {
        q: "如何讓 Codex 在背景執行？",
        a: "不開啟互動介面，從指令碼、cron 或 CI 裡執行 `codex exec`，之後用 `codex exec resume --last` 繼續同一個工作階段。或在網頁版或桌面應用程式裡啟動一個 Codex 雲端任務，然後關掉視窗。",
      },
      {
        q: "Codex 的 Goal 模式是什麼？",
        a: "Goal 模式用 `/goal` 啟動，讓 Codex 一直朝你寫下的目標做下去；目標文字既是第一句提示詞，也是完成標準。你可以在桌面應用程式的進度列裡暫停、恢復、編輯或清除它。",
      },
      {
        q: "電腦睡眠時 Codex 還會繼續工作嗎？",
        a: "雲端任務會。本機工作需要電腦保持喚醒，在 Mac 上可以用桌面應用程式的「Prevent sleep while running」設定；你用手機控制的那台已連線電腦，也必須保持喚醒、連上網路。",
      },
      {
        q: "長時間執行 Codex 會碰到用量限制嗎？",
        a: "有可能。Codex 用的是你 ChatGPT 方案的 5 小時視窗和每週上限，雲端任務也從同一份額度裡扣。用排程或心跳把工作分散到多個視窗裡，而不是一口氣集中跑完。",
      },
      {
        q: "讓 Codex 無人看管地執行安全嗎？",
        a: "在自己的電腦上保持 `--sandbox workspace-write` 或「Approve for me」，`danger-full-access` 只在隔離的 runner 或容器裡用，並且在修改要經過審查的儲存庫裡工作。",
      },
    ],
  },
  cta: {
    title: "幫 Codex 排一個夜班。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照 OpenAI 的 Codex 官方文件（長時間任務、Codex Cloud、非互動模式、手機版、排程任務）查核。",
  disclaimer: "Crewmark 是獨立產品，與 OpenAI 無關，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標。",
};
