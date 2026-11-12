import type { GuideCopy } from "@/components/landing/guide-article";

// zh-TW translation of /proactive-codex; the English master is src/content/proactive-codex.ts.

const docs = "https://learn.chatgpt.com/docs/automations";

const cron =
  '# crontab -e：每個平日 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1';

export const copy: GuideCopy = {
  meta: {
    title: "Codex 排程任務與自動化：讓 Codex 主動工作 | Crewmark",
    description:
      "讓 Codex 和 ChatGPT 不等你開口就動工：排程任務（原 Automations）、codex exec 搭配 cron、GitHub Action，以及用心跳（heartbeat）給它長期工作。",
  },
  breadcrumb: "主動工作的 Codex",
  hero: {
    kicker: "Codex 排程任務",
    title: "如何讓 Codex 主動工作",
    lead: "主動的 Codex 不會在對話框裡乾等：例行確認自己處理，按時間表執行，遇到 PR 或 Slack 訊息就回應，做完再向你回報。OpenAI 對這幾件事各有一個功能，其中一些 ChatGPT 也能用。這篇教學說明如何設定、每個功能做不到什麼，以及如何給 Codex 一份長期的工作，而不是一次性的提示詞。這些功能都缺一個心跳：按固定節奏喚醒同一段對話，讓它去接手下一個任務。我們會說明最接近的內建做法，以及 Crewmark 如何補上這一塊。",
    cta: "申請搶先體驗",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "「主動」對 Codex 代表什麼",
      text: ["預設的 Codex 是你問了它才回答。要讓它主動起來需要三樣東西，分散在產品的不同地方："],
      points: [
        "不必事事等確認：選一個會放行例行操作的權限模式。",
        "自己開始工作：用排程任務、事件觸發或 cron，讓它不需要你開口就動工。",
        "知道下一步做什麼：有待辦和目標，每次執行都有有意義的事可做。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "逐步教學：讓 Codex 主動工作",
      steps: [
        {
          title: "選一個不會事事都停下來的權限模式",
          text: "在 CLI 裡輸入 `/permissions`。「Approve for me」只在操作看起來可能不安全時才問你，適合你沒在盯著的工作。「Full access」解除所有檔案和網路限制，只適合隔離的機器。舊教學裡的 `--full-auto` 已不再支援，請改用 `--sandbox workspace-write`。",
          code: "/permissions",
        },
        {
          title: "建立 Codex 排程任務（原 Automations）",
          text: "原本的 Codex Automations 現在叫 Scheduled tasks（排程任務）。直接在 Codex 對話裡提出：要做什麼、什麼時候執行、結果要回到這段對話還是另開一段。可以每隔幾分鐘、每天或每週執行，在側邊欄的 Scheduled 頁面管理。用到本機檔案的任務需要電腦開著、App 在執行；在 Git 儲存庫裡可以放到獨立的背景 worktree 裡處理。Codex CLI 無法管理排程任務。",
          code: "每個平日早上 9 點，檢查這個儲存庫有沒有失敗的測試，\n能修的在背景 worktree 裡修好，\n在這段對話裡發一份摘要。",
        },
        {
          title: "用事件觸發任務",
          text: "任務也可以不照時間，而是在有事發生時啟動：收到新的 Gmail 郵件、指定的 Slack 頻道有新訊息、GitHub PR 有動靜。事件觸發要在 ChatGPT 網頁版或手機上設定，需要符合資格的訂閱；一個任務只能用事件或時間表其中一種。",
        },
        {
          title: "用 codex exec 搭配 cron 定時執行",
          text: "`codex exec` 不開啟互動介面、直接執行 Codex：進度輸出到 stderr，只有最終結果輸出到 stdout，適合腳本和排程工作。沒加 `--sandbox workspace-write` 時它是唯讀的。OpenAI 文件把排程工作列為用途之一，但沒有提供 cron 範例，下面這個是我們寫的。",
          code: cron,
        },
        {
          title: "把 Codex 放進 GitHub 工作流程",
          text: "GitHub Action `openai/codex-action` 會在工作流程裡執行 Codex，觸發條件由你決定。在 PR 底下留言 `@codex review` 讓它審查程式碼，或讓 `@codex` 修正 CI 失敗。在 Linear 裡可以直接把 issue 指派給 Codex。",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "用 hooks 在工作階段裡回應事件",
          text: "Codex 的 hooks 會在工作階段開始、呼叫工具前後、一輪結束等時刻執行你的指令。它們在 Codex 工作時做出反應，但不會啟動 Codex。要讓它動工，請用排程任務或事件觸發。",
        },
      ],
      source: { label: "來源：OpenAI 的 Codex 排程任務文件（英文）", href: docs },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "缺少的那一塊",
      title: "加上心跳：按節奏喚醒同一段對話，接手下一個任務",
      text: [
        "心跳（heartbeat）是定期傳進同一段 Codex 對話的一句提醒，例如工作時間內每 30 分鐘一次：看看你的工作，接手下一個任務。排程任務是重複同一句提示詞；心跳則一直用同一段對話，所以 Codex 記得上次做到哪裡，會從佇列裡拿下一項。這就是「重複執行的任務」和「持續工作的員工」的差別。",
      ],
      steps: [
        {
          title: "最接近的內建做法",
          text: "Codex 排程任務可以把結果傳回同一段對話，所以可以把它的提示詞寫成心跳：「每 30 分鐘看一下 TODO.md，接手下一個沒勾選的任務，做完就勾掉」。佇列檔案還是要自己維護，排程任務也不知道工作時間和其他 agent。",
        },
        {
          title: "使用 Crewmark：內建心跳",
          text: "Crewmark 的 daemon 在工作時間內每 15、30 或 60 分鐘用 `codex queue --resume` 把心跳排進員工自己的 Codex 對話；看板就是佇列，每次心跳員工都會接手下一個 issue 並回報進度。詳見[下文](#crewmark)。",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "那 ChatGPT 呢？",
      text: [
        "ChatGPT 也能主動找你。ChatGPT 的排程任務可以傳提醒、定期簡報和它監控到的結果給你，在側邊欄的 Scheduled 頁面管理。能建立幾個、多久執行一次，取決於你的訂閱。主動推送每日簡報的 ChatGPT Pulse 已在 2026 年 6 月停止服務，OpenAI 建議改用排程任務來做每日簡報。",
        "和 Codex 的差別：ChatGPT 的任務只能使用 ChatGPT 存取得到的東西，碰不到你的程式碼庫。要在儲存庫裡工作，請用 Codex 排程任務或 `codex exec`。",
      ],
    },
    {
      kind: "table",
      title: "該選哪一個",
      headers: ["方式", "會不會自己開工", "電腦需不需要開著", "適合"],
      rows: [
        ["Approve for me", "不會，但你交代後很少停下來", "需要", "做任務時少被打斷"],
        ["本機檔案的排程任務", "會，按時間表", "需要，App 在執行", "每天在儲存庫裡工作"],
        ["網頁版排程任務", "會，按時間表", "不需要", "不需要本機檔案的工作"],
        ["事件觸發的任務", "會，Gmail、Slack 或 GitHub 有動靜時", "不需要", "回應訊息和 PR"],
        ["codex exec + cron", "會，按你的 cron", "需要", "完全由你掌控的腳本"],
        ["Codex GitHub Action", "會，依工作流程觸發", "不需要", "程式碼審查和修正 CI"],
        ["ChatGPT 排程任務", "會，按時間表", "不需要", "提醒和簡報"],
        ["把排程任務當心跳", "會，按時間表，結果傳回同一段對話", "用到本機檔案時需要", "一個 agent 照 TODO 檔案工作"],
        ["Crewmark 心跳", "會，工作時間內每 15–60 分鐘，在同一段對話裡", "需要", "有任務清單、目標和工作時間的 agent"],
      ],
    },
    {
      kind: "text",
      title: "這些功能還留給你自己處理的事",
      text: ["上面每種方式都能啟動一次執行，但沒有一個會決定 Codex 這週該忙什麼："],
      points: [
        "排程任務每次都重複同一句提示詞，不會從待辦清單接手下一件事，也不知道上次哪些還沒做完。",
        "沒有一塊共用的看板讓你指派工作給 Codex，看哪些在進行、做完了、卡住了。",
        "沒有工作時間，也沒有目標，沒辦法讓它在月底前把某個數字拉上去。",
        "Codex 和 Claude Code 一起用時，要維護兩套提示詞、兩套時間表，還要看兩個地方。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "給 Codex 一份長期的工作",
      text: [
        "Crewmark 把一段 Codex 對話變成有職位、有目標、有工作時間和心跳的 AI 員工，和你的 Claude Code 員工用同一塊看板指派工作。它在你真正的 Codex 裡執行，用的是你已經付費的 ChatGPT 訂閱。",
      ],
      steps: [
        {
          title: "聘用一位員工，連接它的 Codex 對話",
          text: "選一個職位，在 Codex 裡執行 Crewmark 給你的設定指令。這段對話就成了這位員工，兩次醒來之間它記得做過的事。",
        },
        {
          title: "設定工作時間和心跳",
          text: "你電腦上的背景小程式 Crewmark daemon 會在工作時間內每 15、30 或 60 分鐘，用 `codex queue --resume` 把員工的心跳提示詞排進這段對話；下班時間不打擾它。",
        },
        {
          title: "在看板上指派 issue",
          text: "你指派 issue 或在 issue 下留言時，訊息會送進同一段對話，Codex 會自己接手新工作，不必你複製貼上過去。",
        },
        {
          title: "用數字衡量它",
          text: "給每位員工一個 KPI。它會朝這個數字安排 issue，在看板上推進、回報進度，需要你做決定時傳私訊給你。",
        },
      ],
    },
    {
      kind: "text",
      title: "一起用效果最好",
      text: [
        "小型的重複瑣事交給 Codex 自己的排程任務，持續性的工作交給 Crewmark：把員工對話的權限設成「Approve for me」，讓每次心跳都真正把事做完；PR 審查繼續用 `@codex review`。用的是 Claude Code？請看[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "讓 Codex 主動工作" },
  mid: {
    title: "給 Codex 一份長期工作，而不只是定時提示詞",
    text: "Crewmark 在工作時間內依心跳喚醒你的 Codex 對話，從看板上指派下一個任務給它。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Codex 的心跳是什麼？",
        a: "定期傳進同一段 Codex 對話的提醒，例如工作時間內每 30 分鐘一次，讓它看看手上的工作、接手下一個任務。因為是在同一段對話裡繼續，Codex 記得之前做過什麼。最接近的內建做法是讓排程任務把結果傳回同一段對話；Crewmark 內建心跳，還附帶工作時間和當作佇列的看板。",
      },
      {
        q: "Codex Automations 去哪了？",
        a: "改名為 Scheduled tasks（排程任務）了。直接在 Codex 對話裡提出來建立，在 App 的 Scheduled 頁面管理；文件網址仍以 /automations 結尾。",
      },
      {
        q: "codex --full-auto 還能用嗎？",
        a: "不能，`--full-auto` 已不再支援。要讓 Codex 修改檔案，請用 `--sandbox workspace-write`，或用「Approve for me」權限模式，只在操作看起來不安全時才問你。",
      },
      {
        q: "Codex 怎麼設定排程任務或 cron？",
        a: "在 Codex App 裡直接請它建立一個排程任務；如果用自己的排程器，就在 cron 裡呼叫 `codex exec`，需要修改檔案時加上 `--sandbox workspace-write`。程式碼儲存庫還可以在工作流程裡使用 Codex 的 GitHub Action。",
      },
      {
        q: "ChatGPT 能主動傳訊息給我嗎？",
        a: "可以，透過排程任務和事件觸發的任務。主動推送每日簡報的 ChatGPT Pulse 已在 2026 年 6 月停止服務，OpenAI 建議改用排程任務來做每日簡報。",
      },
      {
        q: "電腦關機時 Codex 還能工作嗎？",
        a: "網頁版排程任務、事件觸發、Codex 雲端任務和 GitHub Action 可以。用到本機檔案的方式，包括本機排程任務、cron 和 Crewmark，都需要電腦開著。",
      },
      {
        q: "使用 Crewmark 要額外付 token 費用嗎？",
        a: "不用。員工在你自己的 Codex 裡執行，用的是你現有的 ChatGPT 訂閱，不會多出第二筆 token 帳單。",
      },
    ],
  },
  cta: {
    title: "讓 Codex 成為你的第一位 AI 員工",
    text: "為它設定職位、目標、工作時間和心跳，然後指派第一個 issue 給它。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 2 日對照 OpenAI 的 Codex 官方文件查核。",
  disclaimer: "Crewmark 是獨立產品，與 OpenAI 無關，也未獲其背書。Codex 和 ChatGPT 是 OpenAI 的商標。",
};
