import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-message-threads; the English master is
// src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# 建立 helper。這一步不會送出請求。
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# 第 1 輪建立 thread，並送出完整對話
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# 第 2 輪只送出新訊息
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# 第 1 輪：完整對話，外加
"thread": {"type": "create"}

# 之後每一輪：只送新訊息，不帶 system 和 tools，外加
"thread": {"type": "continue", "previous_message_id": "<上一次回應的 id>"}

# thread 的每個請求都要帶
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude message threads：讓長時間代理工作階段更快，一文看懂 | Crewmark",
    description:
      "Anthropic 的 message threads 讓 Claude 的對話只送出一次，之後只送新增內容。Claude Code 有什麼變化、如何使用 beta API、5 分鐘到期與各項限制。",
  },
  breadcrumb: "Claude message threads",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "部落格 · Claude",
    title: "Claude message threads 是什麼，怎麼用",
    lead: "Message threads 是 Claude API 的一項功能，自 2026 年 11 月 2 日起進入公開測試（beta）。代理（agent）不再每一輪都上傳整段對話，而是先送出一次，之後只送新訊息。Anthropic 表示已為多數 Claude Code 使用者開啟此功能，在 50 萬到 100 萬 token 的請求上，首個 token 的中位耗時下降約 35%。本文說明哪些會變、哪些不變、如何在自己的代理中使用，以及各項限制。",
    cta: "申請搶先體驗",
    secondary: "跳到使用步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Message threads 是什麼",
      text: [
        "沒有 thread 時，代理迴圈的每一輪都要重新上傳完整對話，API 也要把這些內容重新驗證、重新分詞。一個程式設計代理在一次工作階段中會送出數百個請求，對話一旦達到數十萬 token，這種重複傳送就會拖慢 Claude 開始回答的時間。有了 thread，API 會在兩輪之間保存對話，大部分工作只需處理新增的這一輪。",
      ],
      points: [
        "首個 token 更快：Anthropic 實測，在 50 萬到 100 萬 token 的 Claude Code 請求上，中位耗時下降約 35%。對話越長，效果越明顯。",
        "請求更小：每一輪只帶新訊息、工具結果或螢幕截圖。",
        "token 和價格不變：Claude 每一輪仍會讀完整段對話，定價和速率限制都不變。",
        "存活時間短：thread 在最後一次請求 5 分鐘後到期，只保存在記憶體中並加密，不會寫入磁碟。",
        "適用範圍：Claude API、AWS 上的 Claude Platform、Google Cloud 上的 Claude Models（由 Anthropic 代管）和 Microsoft Foundry，支援所有模型。",
      ],
    },
    {
      kind: "table",
      title: "使用 thread 與不使用的差別",
      headers: ["", "不使用 thread", "使用 thread"],
      rows: [
        ["每個請求送出", "完整對話、`system` 和 `tools`", "只送新訊息和上一次回應的 `id`"],
        ["首個 token 的耗時", "隨對話變長而增加", "長對話中更低、更穩定"],
        ["計費 token", "每一輪都是完整對話", "相同"],
        ["價格與速率限制", "標準", "不變"],
        ["誰保存對話", "你的應用程式", "你的應用程式，外加每次請求後 5 分鐘內的 API"],
        ["零資料保留（ZDR）", "符合資格", "不符合資格"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在自己的代理中使用 message threads",
      text: [
        "Claude Code 已經替你做好這件事。如果你在 Messages API 上自行打造代理，SDK 的 thread helper 是最短的路徑。",
      ],
      steps: [
        {
          title: "建立 thread helper",
          text: "傳入與 Messages 請求相同的欄位。helper 會加上 `message-threads-2026-08-12` beta 請求標頭，在第一輪建立 thread，之後只送出新訊息，並把完整對話保存在記憶體裡。",
          code: sdk,
        },
        {
          title: "或者自己送出 thread 欄位",
          text: "使用 cURL 或一般的 `create` 呼叫時，在每個請求中加上 `thread`，並且每次都帶上 beta 請求標頭。一律從最新一次回應的 `id` 繼續；每個 `id` 只能繼續一次。",
          code: raw,
        },
        {
          title: "保持模型和設定不變",
          text: "`system` 和 `tools` 只在第一個請求中送出。`model`、`thinking`、`tool_choice`、頂層的 `cache_control` 和 beta 請求標頭在每一輪都必須保持一致；一旦更動，會回傳 400 錯誤 `thread_fingerprint_mismatch`。要更動就另開一個 thread。",
        },
        {
          title: "自己留一份，遇到 404 就重送",
          text: "Thread 只是盡力而為的服務。當 continue 請求回傳 404 和 `thread_not_found`（thread 已到期、上一輪沒有被保存，或是由備援模型寫入的），請在新的 create 請求中重新送出完整對話。SDK helper 會自動做一次。",
        },
        {
          title: "開啟 prompt caching",
          text: "Thread 不會替你快取 prompt。請在每個請求中送出頂層的 `cache_control`，讓每一輪都從快取讀取先前的對話；帶 `thread` 的請求最多只能有 4 個斷點。",
        },
      ],
      source: { label: "來源：Anthropic 的 message threads 文件", href: docs },
    },
    {
      kind: "text",
      title: "限制，以及 thread 不支援什麼",
      points: [
        "不能與 Message Batches、token 計數、依需求壓縮（compaction）或上下文編輯一起使用（`keep: \"all\"` 的 `clear_thinking_20251015` 除外）。",
        "啟用 HIPAA readiness 或 Inference hooks 的組織不能使用；這類請求會回傳 400 錯誤 `thread_unsupported_request`。",
        "不符合零資料保留資格：API 把 thread 保存在記憶體中，最後一次使用後最多 1 小時就會刪除。",
        "沒有列出、讀取或刪除 thread 的 API，thread 也只能附加。想壓縮的話，用你自己寫的摘要另開一個 thread。",
        "遇到拒絕（refusal）後，不要繼續這個 thread：去掉引發拒絕的那一輪，另開一個。",
        "同一個 thread 的每個請求都要使用相同的 API key 和 workspace，否則無法繼續。",
      ],
    },
    {
      kind: "text",
      title: "對 Claude Code 使用者代表什麼",
      text: [
        "你不需要改任何東西：Anthropic 表示多數 Claude Code 使用者預設已開啟 thread。效益展現在長工作階段中，在很大的對話深處發出一輪時，Claude 會更早開始回答。你的用量不會下降，因為 Claude 每一輪仍會讀完整段對話。",
        "依 API 文件，thread 在最後一次請求 5 分鐘後到期。停頓更久後回到工作階段時，第一個請求會重新送出完整對話，之後的幾輪才會變快。依排程喚醒的[主動式 Claude Code 工作階段](/proactive-claude-code)也是同樣的情況。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓長時間的 Claude Code 工作階段自己做事",
      text: [
        "Message threads 讓長工作階段更快，Crewmark 讓它們更主動。它替 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段設定職位、目標和工作時間，並依心跳在同一個對話中喚醒它，所以它能保留上下文，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "把一個工作階段變成員工",
          text: "選一個職位，例如軟體工程師或 SEO 專員，把它的目標寫成一個數字，然後在 Claude Code 中執行設定指令。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次；見[如何讓 Claude Code 主動工作](/proactive-claude-code)。多位員工可以並排執行，如[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
        },
        {
          title: "指派 issue，回覆它的訊息",
          text: "把工作放到看板上，員工會接手、邊做邊留言，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在自己的代理中使用 Claude message threads" },
  mid: {
    title: "在跑很長的 Claude Code 工作階段？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒它們，使用的就是你已經在付費的方案。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude message threads 常見問題",
    items: [
      {
        q: "Claude message threads 是什麼？",
        a: "這是 Claude API 的一項功能，自 2026 年 11 月 2 日起進入公開測試，在兩輪之間把對話保存在 Anthropic 那一側。第一個請求送出完整對話並建立 thread；之後的每個請求只送新訊息和上一次回應的 `id`。",
      },
      {
        q: "Message threads 會讓 Claude Code 更快嗎？",
        a: "在長工作階段中會。Anthropic 表示多數 Claude Code 使用者預設已開啟 thread，在 50 萬到 100 萬 token 的請求上，首個 token 的中位耗時下降約 35%。短對話的效益不大。",
      },
      {
        q: "Message threads 能省 token 或省錢嗎？",
        a: "不能。Claude 每一輪仍會讀完整段對話，所以 token 用量、定價和速率限制都不變。效益是請求更小、首個 token 更快。想降低成本，請使用 prompt caching。",
      },
      {
        q: "一個 thread 能存活多久？",
        a: "它在最後一次請求 5 分鐘後到期，每次保存回應都會重新計時 5 分鐘。API 最遲在最後一次使用 1 小時後將其刪除。之後需要重新送出完整對話，開啟新的 thread。",
      },
      {
        q: "Message threads 的 beta 請求標頭是什麼？",
        a: "`anthropic-beta: message-threads-2026-08-12`，thread 的每個請求都要帶。SDK 的 thread helper 會自動加上。",
      },
      {
        q: "Message threads 符合零資料保留資格嗎？",
        a: "不符合。thread 的內容保存在記憶體中，以伺服器管理的金鑰加密，從不寫入持久儲存，最後一次使用後最遲 1 小時刪除。啟用 HIPAA readiness 的組織不能使用 thread。",
      },
      {
        q: "Message threads 和 Managed Agents 的 session threads 一樣嗎？",
        a: "不一樣。Message threads 是 Messages API 的功能；session threads 屬於 Claude Managed Agents。",
      },
    ],
  },
  cta: {
    title: "讓你長時間執行的 Claude Code 工作階段主動做事。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 4 日對照 Anthropic 的公告和 Claude Platform 文件查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
