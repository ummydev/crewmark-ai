import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 評價：Hacker News 使用者怎麼說（2026）",
    description:
      "從 10 個 Hacker News 討論串（2026 年 2 月至 11 月）整理 OpenClaw 評價：使用者喜歡什麼、最常見的抱怨，以及他們改用什麼。",
  },
  breadcrumb: "OpenClaw 評價",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "部落格 · 評價",
    title: "OpenClaw 評價：Hacker News 上的使用者怎麼說",
    lead: "OpenClaw 是一款開源的個人 AI 助理，在你自己的電腦上執行，並在你已經在用的聊天應用程式中回覆你，例如 WhatsApp、Telegram 和 Slack。我們讀了 10 個關於它的 Hacker News 討論串，時間從 2026 年 2 月到 11 月。使用者喜歡用它處理個人的小瑣事，也喜歡它的記憶由自己掌握。最常出現的抱怨是它經常出問題、需要持續維護（10 個討論串中有 6 個提到），以及它的廣泛權限帶來安全風險（10 個中有 5 個）。",
    cta: "開始使用",
    secondary: "查看主題",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "我們如何蒐集這些評價",
      text: [
        "我們在 2026 年 11 月 13 日讀了 10 個關於 OpenClaw 的 Hacker News 討論串，一次只開一個頁面。這些討論串的時間從 2026 年 2 月到 11 月，其中 7 個落在 2 月到 4 月，也就是大部分討論發生的時候。在規模最大、留言多達數百則的討論串中，我們讀的是頂層留言和關鍵主題附近的段落，而不是每一則回覆。",
      ],
      points: [
        "一個主題至少要在 10 個討論串中的 2 個出現才會列出，我們也會註明出現在幾個討論串。只在單一則留言中提出的論點不列入。",
        "其中一個討論串是關於 Grok Bot 的，我們採用的是其中比較 Grok Bot 和 OpenClaw 的留言。另一個討論串是請大家分享自己整體的 AI 設定，我們採用的是其中提到 OpenClaw 的部分。",
        "我們也透過 Google 搜尋找到 9 個 Reddit 討論串，但無法開啟 reddit.com，所以我們沒有讀過，也沒有整理它們的內容。它們依標題列在 [Reddit 上的更多討論](#reddit)。",
        "這是公開討論的樣本，不是問卷調查。會針對某個工具發文的人，往往立場鮮明。月份是根據每個討論串的發布時間推算的，可能差一個月。",
        "沒有任何內容是付費取得或特地徵求的：我們沒有發文、沒有請人寫評價，也沒有聯絡任何人。摘要是用我們自己的話寫的，唯一的一句引言有標示並附上連結。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "OpenClaw 評價一覽",
      text: ["我們讀的 10 個 Hacker News 討論串中出現了哪些主題。數字計算的是討論串，不是留言。"],
      headers: ["主題", "使用者怎麼說", "討論串"],
      rows: [
        ["優點：方便處理個人瑣事", "在它正常運作時：提醒、後續追蹤、行事曆任務和群組聊天機器人", "10 個中 3 個"],
        ["優點：在你的聊天應用程式裡，記憶由你掌握", "它在 WhatsApp 等應用程式中回覆你，記憶存放在你能讀取和編輯的檔案裡", "10 個中 2 個"],
        ["優點：助理的未來方向", "連批評者都在它身上看到內建助理本來該有的樣子", "10 個中 2 個"],
        ["抱怨：經常出問題", "更新會弄壞東西，維護花的時間比它省下的還多", "10 個中 6 個"],
        ["抱怨：安全風險", "能廣泛存取你的電腦和帳號，而且暴露在提示注入的風險下", "10 個中 5 個"],
        ["抱怨：炒作多於實際用途", "說得很大卻沒有具體例子；示範任務看起來像在作秀", "10 個中 4 個"],
        ["抱怨：費用和訂閱", "模型用量的費用會累積，而且它受制於其他公司的訂閱規則", "10 個中 3 個"],
        ["抱怨：需要一台閒置的電腦和技術能力", "最好由樂意維護它的人，在另一台電腦上執行", "10 個中 2 個"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "使用者喜歡的地方",
      points: [
        `方便處理個人瑣事，前提是它能正常運作（10 個討論串中有 3 個提到）。使用者描述它會傳送提醒和後續追蹤、處理小型行事曆任務，以及為家人或群組聊天執行機器人。Hacker News 討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.memory})、[2026 年 11 月](${hn.agenticSetup})。`,
        `它待在你已經在用的聊天應用程式裡，記憶由你掌握（10 個中有 2 個）。使用者喜歡從 WhatsApp 等應用程式傳訊息給它，也喜歡它把記憶存成自己機器上的檔案，可以自行讀取和編輯。討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 8 月](${hn.grokBot})。`,
        `讓人看見助理未來的方向（10 個中有 2 個）。就連批評它的留言者也說，它做到了手機和電腦內建助理本來就該做到的事，並預期這個概念會比這個專案本身走得更久。討論串：[2026 年 2 月](${hn.appleIntelligence})、[2026 年 3 月](${hn.securityNightmare})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "常見的抱怨",
      points: [
        `經常出問題，需要不斷維護（10 個討論串中有 6 個提到）。使用者描述更新會弄壞東西、功能會無預警失效，修它花的時間比用它還多。一位 Hacker News 留言者在 2026 年 11 月這樣說：「每次更新都有東西壞掉，我花在修東西上的時間更多」（原文："Every update something broke, and I spent more time fixing things"；[討論串](${hn.agenticSetup})）。討論串：[2026 年 2 月](${hn.appleIntelligence})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.memory})、[2026 年 8 月](${hn.grokBot})、[2026 年 11 月](${hn.agenticSetup})、[2026 年 11 月](${hn.saas})。`,
        `它的廣泛權限是一種安全風險（10 個中有 5 個）。使用者指出，它能廣泛存取你的電腦和帳號，而且可能被提示注入操控。常見的建議是在另一台機器上、用另一組帳號執行它；也有人說乾脆不要安裝。討論串：[2026 年 2 月](${hn.personalComputer})、[2026 年 2 月](${hn.appleIntelligence})、[2026 年 2 月](${hn.changingMyLife})、[2026 年 3 月](${hn.securityNightmare})、[2026 年 4 月](${hn.whoIsUsing})。`,
        `炒作多於實際用途（10 個中有 4 個）。使用者表示，關於 OpenClaw 的貼文承諾巨大的改變，卻沒有具體例子；它常見的示範任務，例如訂機票或安排會議，看起來比較像生產力作秀，而不是真的省下時間。討論串：[2026 年 2 月](${hn.changingMyLife})、[2026 年 3 月](${hn.securityNightmare})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `費用，以及對其他公司訂閱方案的依賴（10 個中有 3 個）。使用者表示，它背後的模型用量費用會越積越多。2026 年 4 月，一個 Hacker News 討論串指出，Anthropic 不再允許 Claude Code 訂閱搭配 OpenClaw 使用；留言者則在支付 API 價格和改用其他模型供應商之間權衡。討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 4 月](${hn.anthropicSubscriptions})、[2026 年 4 月](${hn.memory})。`,
        `需要一台閒置的電腦和技術能力（10 個中有 2 個）。使用者表示，它最好由熟悉維護工作的人在另一台電腦上執行；也有一些小型企業主希望改用託管、現成的版本。討論串：[2026 年 2 月](${hn.personalComputer})、[2026 年 11 月](${hn.saas})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "大家改用什麼",
      text: [
        "以下是在 10 個討論串中至少有 2 個推薦的選擇。其他工具各只在一個討論串中被提到，所以這裡不列出；我們的 [OpenClaw 替代方案指南](/blog/openclaw-alternatives)根據各自的文件比較了主要選項。",
      ],
      points: [
        `Hermes Agent（10 個中有 3 個）。改用它的使用者表示，對他們來說它執行起來更穩定。請看 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) 和 [Hermes Agent 價格](/pricing/hermes-agent)。討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 8 月](${hn.grokBot})、[2026 年 11 月](${hn.agenticSetup})。`,
        `直接使用 Claude Code 或 Codex，搭配 skill 和一份寫得好的 \`CLAUDE.md\`（10 個中有 3 個）。好幾位使用者說，他們曾經打造龐大的 OpenClaw 設定，後來又回到原本就有的程式設計代理。請看 [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) 和 [Claude Code vs Codex](/blog/claude-code-vs-codex)。討論串：[2026 年 2 月](${hn.changingMyLife})、[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `Claude Cowork（10 個中有 2 個）。被推薦為 Anthropic 推出的託管助理。請看我們的 [Claude Cowork 指南](/personal-agent/claude-cowork)。討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
        `cron 排程工作和你自己的腳本（10 個中有 2 個）。有些使用者說，OpenClaw 做的事大多可以用一組排程腳本完成。討論串：[2026 年 4 月](${hn.whoIsUsing})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Reddit 上的更多討論",
      text: [
        "我們列出這些 Reddit 討論串供延伸閱讀。它們是透過 Google 搜尋找到的，但我們無法開啟 reddit.com，所以沒有讀過，也沒有整理它們的內容，上面的主題也都沒有引用它們。",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/)，r/ArtificialInteligence，2026 年 2 月",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/)，r/myclaw，2026 年 2 月",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/)，r/LocalLLaMA，2026 年 3 月",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/)，r/openclaw，2026 年 3 月",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/)，r/openclaw，2026 年 4 月",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/)，r/openclaw，2026 年 6 月",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/)，r/openclaw，2026 年 7 月",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/)，r/openclaw，2026 年 8 月",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/)，r/openclaw，2026 年 10 月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "用來查核各種說法的 OpenClaw 基本資料",
      text: [
        "資料來自 OpenClaw 自己的 README、文件和 GitHub，已於 2026 年 11 月 13 日查證。費用的更多資訊請看我們的 [OpenClaw 價格](/pricing/openclaw)頁面。",
      ],
      points: [
        "是什麼：開源的個人 AI 助理。Gateway 在你自己的電腦上執行，並在 WhatsApp、Telegram、Slack、Discord 和 iMessage 等聊天應用程式中回覆你；狀態、記憶和憑證都留在你的硬體上。",
        "價格：免費。它的 README 表示，這個專案沒有付費方案、託管服務或代幣。你只需付費給模型供應商。",
        "授權：MIT。由獨立的非營利組織 OpenClaw Foundation 營運。",
        "執行位置：在你自己的機器上，提供 macOS、Linux、Windows 和 WSL2 的安裝程式，macOS、iOS、Android、Windows 和 Linux 的應用程式，以及有文件說明的 Docker 和 Nix 安裝方式。",
        "模型：支援 OpenAI、Anthropic、Google Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM 等的外掛。",
        "安全，根據它自己的文件：除非你設定沙箱，主工作階段的工具都在主機上執行，而且執行核准（exec approvals）預設為關閉。",
        "排程：內建排程器，可執行週期性和單次的工作，另有 webhook 和 Gmail 觸發。",
        "名稱：2026 年 1 月 30 日更名為 OpenClaw；先前的名稱包括 Clawdbot 和 Moltbot。截至 2026 年 11 月 13 日，它在 GitHub 上有 394,406 顆星。官方網站：[openclaw.ai](https://openclaw.ai)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "給 Claude Code 或 Codex 一份固定的工作",
      text: [
        "這些討論串中，有好幾位使用者回到了 Claude Code 或 Codex。Crewmark 就建立在它們之上：它把你自己的 Claude Code 或 Codex 工作階段變成 AI 員工，有職位、目標和工作時間，每位員工都從共用看板上接手下一個 issue。它不是聊天應用程式裡的個人助理：工作透過 issue 進行，沒有內建的 Slack 整合，而且代理在你的電腦上執行，電腦必須保持開機。它以 GPL-3.0 授權開源，1 個專案、最多 3 名 AI 員工免費。",
      ],
      steps: [
        { title: "選一個職位", text: "從 [AI 員工職位](/ai-employees)開始，或自己寫下職位和目標。" },
        {
          title: "把工作放上看板",
          text: "指派 issue，並讓固定要做的 issue 定期重複。在工作時間內，心跳會喚醒員工接手下一個，頻率從每 15 分鐘一次到每天一次。",
        },
        {
          title: "它提問時回覆它",
          text: "需要審查、權限或資訊時，它會把 issue 設為「需處理」，並在那裡問你。各代理的工作和設定方式，請看 [Claude Code 使用情境](/use-cases/claude-code)和 [Codex 使用情境](/use-cases/codex)。",
        },
      ],
    },
  ],
  mid: {
    title: "想讓你的程式設計代理按排程工作嗎？",
    text: "Crewmark 給 Claude Code 或 Codex 一個職位、一個心跳和一個共用看板。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "OpenClaw 值得用嗎？",
        a: "要看你能接受多少維護工作。在我們讀的 10 個 Hacker News 討論串中，喜歡它的使用者會從自己已經在用的聊天應用程式，用它處理提醒和行事曆任務等個人瑣事。最常見的抱怨出現在 10 個討論串中的 6 個：它經常出問題，需要不斷修理。軟體本身以 MIT 授權免費提供；你要付費的是它使用的模型。",
      },
      {
        q: "OpenClaw 用起來安全嗎？",
        a: "10 個討論串中有 5 個提到安全問題。使用者指出它能廣泛存取你的電腦和帳號，也有提示注入的風險，並建議在另一台機器上、用另一組帳號執行它。OpenClaw 自己的 README 表示，除非你設定沙箱，主工作階段的工具都在主機上執行，而且它的執行核准預設為關閉。",
      },
      {
        q: "為什麼有人說 OpenClaw 被過度炒作？",
        a: "在 10 個討論串中的 4 個，使用者表示關於它的貼文承諾巨大的成果，卻沒有具體例子，而且它的示範任務看起來比較像生產力作秀，而不是真的省下時間。我們列出的 Reddit 討論串中，有一個來自 2026 年 3 月的 r/LocalLLaMA，標題說它被過度炒作，並建議改用 skill；我們沒有讀過這個討論串。",
      },
      {
        q: "大家用什麼取代 OpenClaw？",
        a: "在我們讀的討論串中：Hermes Agent 和直接使用 Claude Code 或 Codex（各 3 個討論串），其次是 Claude Cowork，以及 cron 排程工作搭配你自己的腳本（各 2 個討論串）。我們的 [OpenClaw 替代方案指南](/blog/openclaw-alternatives)根據各自的文件比較了這些選項。",
      },
      {
        q: "Reddit 使用者怎麼評價 OpenClaw？",
        a: "我們無法開啟 Reddit，所以沒有整理那些討論串。單看標題：四個在問 OpenClaw 是否還值得用、值得繼續用，還是已經死了，其中一個的發文者現在已經有了 Codex；三個標題帶有批評意味，其中一個建議改用 skill；一個在 r/myclaw，反駁說它沒用的說法；還有一個是大量測試後的評價。全部 9 個都列在 [Reddit 上的更多討論](#reddit)。",
      },
      {
        q: "OpenClaw 免費嗎？",
        a: "是的。它的 README 表示，這個專案沒有付費方案、託管服務或代幣，並採用 MIT 授權。你需要付費給模型供應商；在我們讀的 10 個討論串中，有 3 個提到費用，包括 2026 年 4 月一個關於 Anthropic 不再允許 Claude Code 訂閱搭配它使用的討論串。請看 [OpenClaw 價格](/pricing/openclaw)。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計代理一份固定的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "討論串於 2026 年 11 月 13 日閱讀。產品資訊已於同一天對照 OpenClaw 自己的 README、文件和 GitHub 查證。",
  disclaimer:
    "Crewmark 是一款獨立產品，與 OpenClaw Foundation 或本頁提及的任何公司皆無關聯，也未獲得其背書。本頁整理的意見屬於所連結討論串中的留言者。產品名稱為其所有者的商標。",
};
