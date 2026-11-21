import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 評價：Hacker News 使用者怎麼說（2026）",
    description:
      "從 6 個 Hacker News 討論串（2026 年 8 月至 11 月）整理 Grok Bot 評價：使用者喜歡什麼、對用量上限和安全的抱怨，以及他們改用什麼。",
  },
  breadcrumb: "Grok Bot 評價",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "部落格 · 評價",
    title: "Grok Bot 評價：Hacker News 上的使用者怎麼說",
    lead: "Grok Bot 是 xAI 推出的一組託管 AI 隊友：每個 Bot 都在雲端擁有一台自己的電腦，會登入你的工具，在 Slack 和 Microsoft Teams 中工作，執行例行工作，並彼此交接任務。我們讀了 7 個關於它的 Hacker News 討論串，時間從 2026 年 8 月到 11 月，也就是它推出後的頭三個月；其中一個是競爭工具的發布貼文，所以數字以另外 6 個計算。使用者描述不用寫程式就能把真正的雜事交給它。最常出現的抱怨是用量上限，6 個討論串中有 3 個提到；安全問題和價值不明確各有 2 個提到。",
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
        "我們在 2026 年 11 月 13 日讀了 7 個關於 Grok Bot 的 Hacker News 討論串，一次只開一個頁面。其中一個是一款競爭開源工具的發布貼文，由該工具的開發者撰寫，我們沒有把它計入任何主題，所以本頁的每個數字都以另外 6 個討論串為準。Grok Bot 在 2026 年 8 月 11 日以 beta 版推出，所以這些討論串全都來自它推出後的頭三個月，也就是 2026 年 8 月到 11 月。",
      ],
      points: [
        "一個主題至少要在 6 個計入的討論串中的 2 個出現才會列出，我們也會註明出現在幾個討論串。只在單一則留言中提出的論點不列入。",
        "這 6 個中有一個不只討論 Grok Bot：那是一個大家描述自己 AI 設定的綜合討論串，我們只採用其中提到 Grok Bot 的部分。另有兩個討論同一則新聞，後一個連結到前一個，所以這則新聞我們只算一次。",
        "我們也透過 Google 搜尋找到 17 個 Reddit 討論串，但無法開啟 reddit.com，所以我們沒有讀過，也沒有整理它們的內容。它們依標題列在 [Reddit 上的更多討論](#reddit)。",
        "這是公開討論的樣本，不是問卷調查。會針對某個工具發文的人，往往立場鮮明。月份是根據每個討論串的發布時間推算的，可能差一個月。",
        "沒有任何內容是付費取得或特地徵求的：我們沒有發文、沒有請人寫評價，也沒有聯絡任何人。摘要是用我們自己的話寫的，唯一的一句引言有標示並附上連結。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Grok Bot 評價一覽",
      text: [
        "我們計入的 6 個 Hacker News 討論串中出現了哪些主題（第七個是競爭工具的發布貼文，不計入）。數字計算的是討論串，不是留言。",
      ],
      headers: ["主題", "使用者怎麼說", "討論串"],
      rows: [
        ["優點：不用寫程式就能處理雜事", "研究、電子郵件和定期摘要，從頭到尾都交給它", "6 個中 2 個"],
        ["抱怨：用量上限", "常駐的 Bot 很快就把用量耗光，11 月有一個討論串討論了 Grok Bot 遭到限流", "6 個中 3 個"],
        ["抱怨：安全", "提示注入，以及把登入資訊和敏感帳號的存取權交給 Bot", "6 個中 2 個"],
        ["抱怨：價值不明確", "想不出能交給它什麼任務，或認為它只是開源代理的託管版", "6 個中 2 個"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "使用者喜歡的地方",
      points: [
        `不用寫程式就能完成真正的雜事（6 個討論串中有 2 個提到）。使用者描述把各種雜事交給它，例如尋找供應商、寄送求職申請和電子郵件，以及彙整網站和社群媒體的摘要。Hacker News 討論串：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "常見的抱怨",
      points: [
        `用量上限和 token 消耗（6 個討論串中有 3 個提到）。使用者表示，常駐的 Bot 很快就會用完每週額度。一位 Hacker News 留言者在 2026 年 8 月這樣說：「永遠開著、持續運作的代理會用掉非常多 token」（原文："Always on perpetual agents use a LOT of tokens"；[討論串](${hn.launch})）。2026 年 11 月，一個 Hacker News 討論串討論了 Grok Bot 在 xAI 的成本超過訂閱收入後遭到限流，這是該討論串標題的說法。討論串：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.throttled})、[2026 年 11 月](${hn.agenticSetup})。`,
        `安全和帳號存取權（6 個中有 2 個）。使用者擔心提示注入，也擔心在沒有明確限制每個 Bot 能存取哪些東西的情況下，就把登入資訊和敏感帳號的存取權交給 Bot。討論串：[2026 年 8 月](${hn.launch})、[2026 年 10 月](${hn.agentAccess})。`,
        `價值不明確（6 個中有 2 個）。有些使用者想不出有什麼任務可以交給它；也有人認為它是 OpenClaw 這類開源代理的託管版。討論串：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "大家改用什麼",
      text: [
        "以下是在 6 個計入的討論串中至少有 2 個推薦的選擇。其他工具各只在一個討論串中被提到，所以這裡不列出；我們的 [Grok Bot 替代方案](/alternatives/grok-bot)頁面根據各自的文件比較了主要選項。",
      ],
      points: [
        `Hermes Agent（6 個中有 2 個）。它在一個討論串中被推薦，在另一個討論串中被列為可比較的選擇；使用者形容它更便宜、更能自訂，而且可以自己選模型。請看 [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) 和 [Hermes Agent 價格](/pricing/hermes-agent)。討論串：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
        `用 Codex 或 Claude Code 自己搭建的設定（6 個中有 2 個）。使用者表示，Codex 或 Claude Code 加上幾個自己寫的腳本，就能以更少的花費完成大部分同樣的工作。請看 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)。討論串：[2026 年 8 月](${hn.launch})、[2026 年 11 月](${hn.agenticSetup})。`,
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
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/)，r/AI_Agents，2026 年 8 月",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/)，r/AI_Agents，2026 年 9 月",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/)，r/grok，2026 年 9 月",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/)，r/GrokBot，2026 年 9 月",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)，r/cursor，2026 年 9 月",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/)，r/cursor，2026 年 9 月",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/)，r/singularity，2026 年 10 月",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/)，r/GrokBot，2026 年 10 月",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/)，r/GrokBot，2026 年 10 月",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)，r/GrokBot，2026 年 10 月",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/)，r/AI_Agents，2026 年 10 月",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/)，r/SelfHostedAI，2026 年 10 月",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)，r/GrokBot，2026 年 11 月",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/)，r/SelfHosting，2026 年 11 月",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/)，r/GrokBot，2026 年 11 月",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/)，r/GrokBot，2026 年 11 月",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/)，r/MuseAgent，2026 年 11 月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "用來查核各種說法的 Grok Bot 基本資料",
      text: [
        "資料來自 xAI 的產品頁面和發布貼文，已於 2026 年 11 月 13 日查證。更多資訊請看我們的 [Grok Bot 指南](/personal-agent/grok-bot)。",
      ],
      points: [
        "是什麼：xAI 的託管 AI 隊友。每個 Bot 都有自己的雲端電腦，會登入你的工具和應用程式，在 Slack 和 Microsoft Teams 中工作，依排程執行例行工作，並把工作交給其他 Bot。",
        "推出時間：2026 年 8 月 11 日以 beta 版推出；產品頁面現在表示它已結束 beta。",
        "價格：包含在 xAI 的 Premium（每月 $30）、Super（每月 $100，用量為 Premium 的 3.5 倍）和 Ultra（每月 $200，用量為 Premium 的 12 倍）方案中，按月計費。每個方案都含每週的 Grok Bot 用量，超出的用量依 token 成本計費。Teams 和 Enterprise 方案需洽業務。",
        "授權：不是開源的。",
        "執行位置：在 xAI 的雲端，所以闔上筆電後 Bot 仍會繼續工作。你可以透過桌面和行動應用程式、在 Slack 和 Microsoft Teams 中，以及在 Google Meet、Zoom 或 Teams 通話中使用它們。",
        "模型：Bot 以 Grok 打造。",
        "核准：Bot 需要核准時會來確認，敏感動作可以交給 Auto Review 檢查。",
        "官方網站：[x.ai/bot](https://x.ai/bot)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "在你自己電腦上執行、有固定工作的代理",
      text: [
        "Grok Bot 在 xAI 的雲端以 Grok 執行 Bot。Crewmark 採取不同的做法：你自己的 Claude Code 或 Codex 工作階段，在你的電腦上、用你已經付費的訂閱，變成有職位、目標和工作時間的 AI 員工，每位員工都從共用看板上接手下一個 issue。取捨在於：你的電腦必須保持開機；代理目前透過 issue 協作（代理之間的直接訊息即將推出）；也沒有內建的 Slack 整合。它以 GPL-3.0 授權開源，1 個專案、最多 3 名 AI 員工免費。",
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
        q: "Grok Bot 值得用嗎？",
        a: "要看你打算交給它什麼工作，以及你需要多少用量。在我們計入的 6 個 Hacker News 討論串中，使用者描述不用寫程式就能完成研究、電子郵件和定期摘要等雜事。最常出現的抱怨是用量上限，6 個中有 3 個提到；安全問題和價值不明確各有 2 個提到。它包含在 xAI 每月 $30 的 Premium 方案中，需要更多用量則有 $100 的 Super 和 $200 的 Ultra。",
      },
      {
        q: "Grok Bot 最常見的抱怨有哪些？",
        a: "在我們計入的 6 個討論串中：用量上限和 token 消耗（6 個中有 3 個）；安全問題，主要是提示注入，以及把登入資訊和敏感帳號的存取權交給 Bot（6 個中有 2 個）；以及價值不明確，來自想不出能交給它什麼任務、或認為它只是開源代理託管版的使用者（6 個中有 2 個）。",
      },
      {
        q: "Grok Bot 安全嗎？",
        a: "我們計入的 6 個討論串中有 2 個提到安全問題。使用者擔心提示注入，也擔心在沒有明確限制每個 Bot 能存取哪些東西的情況下，就把登入資訊和敏感帳號的存取權交給 Bot。xAI 的產品頁面表示，Bot 需要核准時會來確認，敏感動作可以交給 Auto Review 檢查。",
      },
      {
        q: "有誠實的 Grok Bot 評價嗎？",
        a: "本頁沒有親自測試 Grok Bot；它整理的是使用者在 Grok Bot 推出頭三個月的 6 個 Hacker News 討論串中說了什麼，並附上連結讓你自己閱讀。使用者描述不用寫程式就能把雜事交給它。最常見的抱怨是用量上限（6 個中有 3 個），其次是安全問題和價值不明確（各 6 個中有 2 個）。本頁沒有任何內容是付費取得或特地徵求的。",
      },
      {
        q: "Reddit 使用者怎麼評價 Grok Bot？",
        a: "我們無法開啟 Reddit，所以沒有整理那些討論串。單看標題：七個在尋找或介紹替代方案，其中幾個是開源或自架的；三個在問它值不值得，其中一個是關於 $30 的 Premium 方案；兩個是關於用量上限和計費；一個把它和 Meta 的 Muse 比較；一個在 r/MuseAgent，問 Grok Bot 遇到的事會不會也發生在 Muse 身上；一個說它的文件顯示你所有的 Bot 共用同一台電腦，而 xAI 的產品頁面說每個 Bot 都有自己的電腦（請看[基本資料](#facts)）；一個警告大家遠離 xAI；還有一個說 Grok Bot 印證了發文者一直在打造的東西。全部 17 個都列在 [Reddit 上的更多討論](#reddit)。",
      },
      {
        q: "大家用什麼取代 Grok Bot？",
        a: "在我們計入的 6 個討論串中，有兩個選擇不只被提到一次：Hermes Agent，使用者形容它更便宜、更能自訂；以及用 Codex 或 Claude Code 加上你自己的腳本自行搭建的設定（各 6 個中有 2 個）。我們的 [Grok Bot 替代方案](/alternatives/grok-bot)頁面根據各自的文件比較了更多選項。",
      },
    ],
  },
  cta: {
    title: "給你的程式設計代理一份固定的工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "討論串於 2026 年 11 月 13 日閱讀。產品資訊已於同一天對照 xAI 的產品頁面和發布貼文查證。",
  disclaimer:
    "Crewmark 是一款獨立產品，與 xAI 或本頁提及的任何公司皆無關聯，也未獲得其背書。本頁整理的意見屬於所連結討論串中的留言者。產品名稱為其所有者的商標。",
};
