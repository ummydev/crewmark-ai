import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// 放行請求
{ "action": "allow" }

// 拒絕請求：deny_reason 會顯示給使用者（最多 500 個字元），
// reference_id 只會進入你的合規活動紀錄
{
  "action": "deny",
  "deny_reason": "這則提示詞似乎包含客戶的信用卡資料。",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude inference hooks：運作方式、設定方法及與 Claude Code hooks 的差異 | Crewmark",
    description:
      "Claude inference hooks（推論掛鉤）已於 2026 年 11 月 5 日正式推出，會把每則提示詞和工具呼叫送到你的安全伺服器，由它判定放行或拒絕。本文說明運作方式、設定步驟、限制，以及它與 Claude Code hooks 的差異。",
  },
  breadcrumb: "Claude inference hooks",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude",
    title: "Claude inference hooks：每則提示詞送出前，先過一道放行或拒絕的檢查",
    lead: "inference hooks（推論掛鉤）讓 Claude Enterprise 組織把每則提示詞（也可以包括每次工具呼叫）送到自己的安全伺服器，等它做出放行（allow）或拒絕（deny）的判定後，Claude 才開始執行。這項功能於 2026 年 11 月 5 日正式推出，同時推出的還有 beta 階段的安全中心（security center）。由於檢查是在 Anthropic 的伺服器上進行，一次設定就能涵蓋 claude.ai、Claude Code、Cowork 和其他 Claude 產品，員工的筆電上不必安裝任何東西。本文介紹它的運作方式、設定方法、限制，以及它和你在 Claude Code 裡撰寫的 hooks 有什麼不同。",
    cta: "申請搶先體驗",
    secondary: "直接看設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "inference hooks 的運作方式",
      text: [
        "你的組織（或它的資安廠商）會執行一台 AI 安全伺服器，也就是一個 HTTPS 端點。有人送出提示詞時，Anthropic 會把對話紀錄 POST 到這個端點，並依 Standard Webhooks 規範簽章，然後等待判定。判定為 allow 時推論照常進行；判定為 deny 時，請求根本不會送到模型，使用者會看到你提供的原因，以及管理員預先設定的一段固定訊息。",
      ],
      points: [
        "兩種事件：`prompt` 在每次受管控的推論請求之前觸發；`tool_call` 在 Claude 回應中的工具呼叫執行之前觸發，需要開啟 Validate tool calls（驗證工具呼叫）。",
        "整個組織只需設定一次：claude.ai、Claude Desktop 與行動版、Claude Code（包括 CLI）、Cowork、Claude for Microsoft 365、Claude Tag 以及 Claude in Chrome。",
        "你的伺服器看得到的內容：對話紀錄文字、工具呼叫及其結果，以及從附件擷取出的文字。原始檔案或圖片位元組、系統提示詞和工具定義一律不會送出。",
        "判定只有 allow 和 deny 兩種，不支援改寫或遮蔽提示詞。",
        "每一次拒絕都會記錄在組織的 Activity Feed（活動動態）中。",
      ],
    },
    {
      kind: "table",
      title: "inference hooks、Claude Code hooks 與 Compliance API 比較",
      text: [
        "名稱很像，但它們是三種不同的工具。Claude Code hooks 依專案或依使用者設定，在開發者自己的電腦上執行；inference hooks 由組織統一設定一次，在 Anthropic 那一端執行。",
      ],
      headers: ["", "Inference hooks", "Claude Code hooks", "Compliance API"],
      rows: [
        ["由誰設定", "組織的 Owner 或 Primary owner", "每位開發者或每個專案，寫在 `settings.json` 裡", "資安或合規團隊"],
        ["在哪裡執行", "Anthropic 的伺服器呼叫你的 HTTPS 端點", "開發者電腦上的 shell 指令", "由你呼叫 Anthropic 的 API"],
        ["觸發時機", "推論之前，以及工具呼叫執行之前", "PreToolUse、PostToolUse、Stop 等事件發生時", "事後"],
        ["涵蓋範圍", "Enterprise 組織內的所有 Claude 產品", "使用該設定的 Claude Code 工作階段", "活動、對話、檔案、對話紀錄"],
        ["能否攔截", "能：放行或拒絕", "能，限支援攔截的事件", "不能：只做稽核與匯出"],
        ["適用方案", "Claude Enterprise", "所有 Claude Code 使用者", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 inference hooks",
      text: [
        "你需要 Owner 或 Primary owner 角色（Admin 不夠），以及一個使用 443 連接埠的公開 HTTPS 端點。ngrok 之類的通道會被封鎖，所以測試伺服器要架在你自己掌控的網域上。",
      ],
      steps: [
        {
          title: "允許這項功能",
          text: "在 claude.ai 開啟 Organization settings → Data and privacy（組織設定 → 資料與隱私），在 Inference hooks 底下開啟 Allow for your organization（為你的組織允許）。這一步並不會開始檢查：Enforce verdicts（執行判定）仍維持關閉。",
        },
        {
          title: "新增端點並保存簽章金鑰",
          text: "點選 Configure（設定），輸入你的 `https://` URL 並儲存。第一次儲存時會顯示一次 webhook 簽章金鑰：請妥善保存，你的伺服器要用它驗證每一個請求。",
        },
        {
          title: "新增標頭並測試",
          text: "最多可新增 16 個靜態標頭，讓你的伺服器驗證請求確實來自 Anthropic，接著點選 Test connection（測試連線）。它會送出一則合成的提示詞，並回報判定結果和往返時間。",
        },
        {
          title: "以 HTTP 200 JSON 回傳判定",
          text: "每個請求都以 HTTP 200 和一個 `action` 回應。非 200 的狀態碼會被視為失敗，而不是拒絕。",
          code: verdict,
        },
        {
          title: "選擇失敗處理方式與逾時時間",
          text: "Block the request（攔截請求）代表失敗時關閉（fail closed），Allow the request（放行請求）代表失敗時放行（fail open）。判定逾時可設為 1 到 10,000 毫秒，預設 5,000；判定太慢會被視為無法連線。連續失敗會觸發斷路器，在伺服器恢復之前一律套用你的失敗處理設定。",
        },
        {
          title: "逐步推行，再開啟執行",
          text: "先從 Shadow mode（影子模式）開始，它會照常送出判定但不攔截任何請求；只檢查一定比例的請求，必要時排除自訂角色，然後再開啟 Enforce verdicts。變更大約一分鐘內就會同步到所有伺服器。",
        },
      ],
      source: { label: "來源：Claude Platform 文件，Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "限制與注意事項",
      points: [
        "僅限 Enterprise：Team、Pro 和 Max 無法使用，Claude Platform（API）組織無法使用，Amazon Bedrock 和 Google Cloud 上也無法使用。",
        "純圖片內容（例如文件的螢幕截圖）不會被檢查，因為原始位元組從不送出。",
        "被拒絕的訊息仍會留在對話紀錄中，並隨之後的每則訊息再次送出。在 Claude Code 裡，可以用 `/rewind` 回到帶入它的那則提示詞，或用 `/clear` 重新開始。",
        "Anthropic 自己的部分背景模型呼叫不受管控，例如託管的 Claude Security 掃描、GitHub pull request 上的 Code Review，以及智慧報告。在 Claude Code 本機執行 `/code-review` 則受管控。",
        "在語音模式下，有一小部分工具呼叫不會送出，所以別把 hooks 當成那裡唯一的管控手段。",
        "同一則公告也推出了安全中心（beta），會把你的 Claude、Cowork 和 Claude Code 設定與 Anthropic 建議的設定做比較，另外還有 beta 階段的集中管理與存取控制。",
      ],
    },
    {
      kind: "text",
      title: "為什麼這對自主執行的 agent 很重要",
      text: [
        "當 Claude Code 在無人看管的情況下工作，依排程或在背景執行時，沒有人會在每則提示詞送出前逐一查看。inference hooks 讓公司對每個請求和每次工具呼叫都有一道內嵌檢查，不論 agent 在哪裡執行；影子模式也讓資安團隊能在真正攔截之前先調整好政策。若需要單台電腦上依專案設定的防護，Claude Code 本身的 hooks 和權限規則依然適用；權限模式請見 [Claude Code plan mode](/blog/claude-code-plan-mode)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "為你不在時仍在工作的 AI 員工設好護欄",
      text: [
        "Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue。在 Claude Enterprise 方案下，inference hooks 會像檢查其他人一樣檢查它的提示詞。",
      ],
      steps: [
        {
          title: "決定哪些事需要你同意",
          text: "每位員工在發布、合併或花錢等有風險的操作之前都會先詢問，你在同一個收件匣裡核准。",
        },
        {
          title: "把紀錄留在看板上",
          text: "每個 issue 都保留員工的留言和狀態變更，你可以把它做過的事和資安團隊的日誌對照檢視。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘會在同一個對話中醒來一次；請參考[如何讓 Claude Code 主動工作](/proactive-claude-code)和[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "設定 Claude inference hooks" },
  mid: {
    title: "資安已經設定好了，現在給 Claude Code 一份工作。",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude inference hooks 常見問題",
    items: [
      {
        q: "什麼是 Claude inference hooks？",
        a: "Claude Enterprise 的一項功能：把每則提示詞（也可以包括每次工具呼叫）送到組織的安全伺服器，由它在 Claude 執行前回覆放行或拒絕。這項功能於 2026 年 11 月 5 日正式推出。",
      },
      {
        q: "inference hooks 支援 Claude Code 嗎？",
        a: "支援。一次設定就涵蓋 Enterprise 組織內的所有 Claude 產品，包括 CLI 和桌面應用程式中的 Claude Code，開發者的電腦上不必安裝任何東西。",
      },
      {
        q: "inference hooks 和 Claude Code hooks 有什麼差別？",
        a: "Claude Code hooks 是每位開發者或每個專案在 `settings.json` 中設定的 shell 指令，會在本機於 PreToolUse 等事件發生時執行。inference hooks 由組織統一設定一次，在推論之前於 Anthropic 的伺服器上執行，涵蓋所有 Claude 產品。",
      },
      {
        q: "哪些方案可以使用 inference hooks？",
        a: "僅限 Claude Enterprise，由 Owner 或 Primary owner 設定。Claude Platform API 組織無法使用，Amazon Bedrock 和 Google Cloud 上也無法使用。",
      },
      {
        q: "inference hook 能遮蔽敏感資料嗎？",
        a: "不能。判定只有放行或拒絕；不支援改寫或遮蔽提示詞。",
      },
      {
        q: "如果我的安全伺服器當機了會怎樣？",
        a: "由你的失敗處理設定決定：攔截請求（fail closed），或不經檢查直接放行（fail open）。斷路器會停止呼叫故障的伺服器，等它恢復後再自動重設。",
      },
      {
        q: "什麼是 Claude 安全中心？",
        a: "與 inference hooks 一同公布、位於 Organization settings 中的 beta 頁面，會把你的 Claude、Cowork 和 Claude Code 設定與 Anthropic 建議的設定做比較，並產生給稽核人員的報告。",
      },
    ],
  },
  cta: {
    title: "以 Claude Code 打造的 AI 員工，在你的護欄之內工作。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照 Anthropic 的公告、Claude 說明中心和 Claude Platform 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
