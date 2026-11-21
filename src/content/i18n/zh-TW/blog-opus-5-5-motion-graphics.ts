import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// Traditional Chinese translation of /blog/opus-5-5-motion-graphics; the English master is
// src/content/blog/opus-5-5-motion-graphics.ts. Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "動態設計師 Claude：一句話做出的 15 秒作品集",
    text: "作品集式的動態片：粒子字、「節奏就是一切」的緩動曲線、液態字體，最後的橘色片尾寫著 899 格、8 個場景、1 個關鍵格。提示詞只有一句中文。",
  },
  "pelican-riding-a-bicycle": {
    title: "騎腳踏車的鵜鶘，認真做一次",
    text: "作者看膩了用 SVG 畫的鵜鶘，請 Claude 做出最精細的一版。Opus 5.5 在 Claude Code 裡寫完全部程式：Blender 場景用 Cycles 算圖，自寫 Rust 體積雲渲染器產生 12K 天空，約 2.4 萬根羽毛，腳踏車有 36 根輻條、92 節鏈條，配樂也由程式產生。沒用任何現成模型、貼圖或音樂。",
  },
  "inference-startup-launch": {
    title: "Muda：推論新創的發表影片，1 分鐘、約 2 美元完成",
    text: "「推論大部分時間都在等待。現在不用了。」請求網格隨吞吐量上升逐一亮起，最後品牌登場。沒用影片模型，也沒裝額外的函式庫：Claude 做了一個網頁動畫，再用 Playwright 和 ffmpeg 錄成影片。",
  },
  "typingmind-launch": {
    title: "TypingMind：一條提示詞，取代和外包來回 4 週",
    text: "Opus 先讀產品頁面，自己寫腳本，做出「一個對話框同時問多個模型」的動畫。一條提示詞，在 Claude Code 裡跑了將近一小時，沒裝任何 skill。",
  },
  "notion-launch-it-picked": {
    title: "Notion 發表影片，產品是 Opus 自己挑的",
    text: "只要它挑一個大家熟悉的 SaaS、做一支專業發表影片，Opus 選了 Notion，從網路上找來真實素材，剪出一支精緻的功能介紹片。",
  },
  "makermap-one-shape": {
    title: "MakerMap：一個形狀變形走完整個產品",
    text: "20 秒內一個形狀依序變成註冊、地圖圖釘、地球上 3,393 位創作者、配對和搜尋。彈簧、游標和動態模糊全是一個 HTML 檔裡的確定性計算。",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook，配上奧本海默式的配樂",
    text: "分成「分裂」「融合」兩章：成千上萬張金色書頁聚成標題、倒數、爆炸，配樂是 Opus 參考電影主題自己作的曲。",
  },
  "distilbook-film-strips": {
    title: "Distilbook：彩色膠捲捲成隧道",
    text: "一排彩虹色膠捲掃過畫面，再捲成發光的隧道，風格照著一支參考影片。最終版沒有任何手動修改。",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites 每月造訪破百萬",
    text: "一支里程碑短片，計數器一路衝到一百萬。4 分鐘一次完成，只改了一處。",
  },
  "famewall-mascot": {
    title: "Famewall：它自己找到吉祥物放進影片",
    text: "一款收集使用者評價的工具的發表影片。Opus 翻了網站的 SVG，找到吉祥物，沒人要求就把它放進了影片。",
  },
  "lumail-pricing": {
    title: "Lumail：AI agent 能直接操作的電子郵件行銷",
    text: "點陣裡是從不開信的聯絡人，帳單一路上漲，接著亮出賣點。不到 10 分鐘，沒用 skill，只有提示詞。",
  },
  "founder-page-launch": {
    title: "founder.page：20 秒講完所有功能",
    text: "節奏很快、貼合品牌的發表影片，帶即時營收和訪客計數。在 Claude Code 裡一次完成。",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI：開發者工具發表影片",
    text: "用 Opus 5.5 和 Remotion 做成，提示詞是一份長篇簡報，要求做成能拿去開發表會的高級發表影片。",
  },
  "sahi-trading-terminal": {
    title: "交易終端一路拉遠，縮成太空中的一個點",
    text: "從一個點開始，依序出現 K 線、持倉和選擇權鏈，鏡頭拉遠到桌面變成太空中的一個點，再推進到手機畫面。一次完成。",
  },
  "aisa-one-key": {
    title: "AIsa：上千把 API 金鑰變成一把",
    text: "一大群金鑰名稱收攏成一把橘色的鑰匙。一條提示詞，一次完成。",
  },
  "flowdrive-showreel": {
    title: "Flowdrive：4K 串流，送達全球",
    text: "一支暗色、雜誌感的檔案傳遞產品片：層疊地形、發光的點陣地球、自訂網域。沒用 skill，記得開聲音。",
  },
  "matra-apple-style": {
    title: "Matra：蘋果風格的 App 宣傳片",
    text: "用 Remotion 和 React 做的 30 秒短片：SF Pro 字體、鈦金屬 iPhone、依真人語音逐字同步的字幕，還有音樂。",
  },
  "no-hands-labs": {
    title: "No Hands Labs：會自己建起來的公司",
    text: "黑底螢光綠大字和點陣 95%，介紹一間由 AI 經營公司的工作室。",
  },
  "pen-designs-launch": {
    title: "norilu：把反覆出現的工作交出去",
    text: "Opus 透過 pen.dev 的 MCP 讀取作者的設計稿，做出一支安靜的發表影片。作者再補一句不客氣的意見，音樂和節奏就好多了。",
  },
  "bento-surf": {
    title: "Bento.surf：40 秒產品片",
    text: "一支活潑、以手機為主的個人頁面產品片，一條提示詞完成。",
  },
  quickemailverify: {
    title: "QuickEmailVerify：寄出前就攔下退信",
    text: "電子郵件驗證工具的 SaaS 風格短片，從輸入地址到清理好的名單。Opus 5.5，高推理強度。",
  },
  "orbe-everyday-spending": {
    title: "Orbe：等角 3D 裡的日常開銷",
    text: "一款記帳 App 的直式影片：超市、加油站、餐廳，每個場景記下一筆消費。作者說不只用了一條提示詞。",
  },
  "winkz-pitch": {
    title: "替亞馬遜批發生意做的品牌招商片",
    text: "15 秒向品牌方推介，帶價格保護和預付採購的數字。",
  },
  "queryglow-launch": {
    title: "QueryGlow：Anthropic 風格的發表影片",
    text: "一款自架資料庫工具的襯線字體發表影片，作者用德文說「像 Anthropic 那樣」，最後又加上音樂。",
  },
  "opus-1984-ad": {
    title: "致敬蘋果《1984》的 Opus 5.5 廣告",
    text: "拿著鐵鎚奔跑的人、一排排灰色人群、銀幕上的巨臉，全都只用程式碼做成。Opus 還檢查了音量。",
  },
  "paybox-brand-sting": {
    title: "PayBox：只給一個 Logo 做出品牌片頭",
    text: "agent 讀懂 Logo、查到公司、自己寫了劇情，一次做出 10 秒的品牌片頭。",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm：低多邊形碎片拼出 Logo",
    text: "線框 Logo 被碎片一塊塊填滿，App 圖示落下，品牌名逐字打出，附音效。",
  },
  "opus-retro-launch": {
    title: "復古未來風的 Opus 5.5 發表影片",
    text: "發光的條紋人頭，加上底片顆粒和 CRT 效果，來自一條提示詞和一張風格參考圖。",
  },
  "psychedelic-showreel": {
    title: "Phosphene：迷幻的動態習作",
    text: "巨大的眼睛、旋轉隧道和萬花筒，畫面和聲音都由 Opus 在超高推理強度下完成：算繪 90 分鐘，總共 14 美元。",
  },
  "poster-breaks-out": {
    title: "衝出畫框的海報",
    text: "巨大的紅藍字體衝破自己的海報。配樂由 Opus 自己作曲，每個重音都對準節拍。",
  },
  "i-can": {
    title: "I CAN：模糊、循環、算繪、聚集、彎曲光線",
    text: "一組粗體標題卡，每張都在做它寫的事，提示詞只有一行。",
  },
  "light-speed-earth": {
    title: "地球上的一秒鐘",
    text: "完全不給方向，Opus 自己選了題材：一秒鐘裡發生的一切，從光繞地球轉圈到四個新生兒誕生。",
  },
  "no-samples-showreel": {
    title: "音樂從零合成的展示片",
    text: "作者完全不懂動態設計。Opus 寫了每一格畫面的程式碼，音樂也是它從零合成的，沒用取樣，在 Cursor 裡完成。",
  },
  "easing-explained": {
    title: "I make things move：動態設計師 Claude",
    text: "旋轉、吸附的動態字體，一段緩動曲線說明，再加片尾卡，提示詞是一句中文。",
  },
  "portfolio-film": {
    title: "把設計師的作品集做成短片",
    text: "Opus 看完作者作品集的每一個畫面和開源專案，一次做出一支有力的展示片。",
  },
  "it-thinks-in-curves": {
    title: "節奏、字體、循環：它用曲線思考",
    text: "方形循環的色塊字體，再當場畫出貝茲曲線，講的是 Opus 說自己不打關鍵格、而是寫數學。",
  },
  "who-are-you-opus": {
    title: "你好，我是 Claude：Opus 5.5 的自我介紹",
    text: "10 秒的文字動畫：「每個字我都讀」「我會想清楚」「我直說」「我和你一起做」。",
  },
  "madhav-about-me": {
    title: "一支關於提問者本人的 10 秒短片",
    text: "請它就自己知道的作者情況做支影片，Opus 做了一支講作者工作的粒子短片。",
  },
  "recursion-nine-styles": {
    title: "用九種風格講遞迴",
    text: "每講一層就換一種風格，從復古遊戲到黑色電影。真正的一次成片：畫面用 React 和 SVG，音樂和音效用 Python 合成。",
  },
  "negroni-recipe": {
    title: "一步步調一杯 Negroni",
    text: "酒譜說明動畫，一樣一樣把材料倒進杯裡，根據一張圖片用 HTML 算繪出來。",
  },
  "history-of-ai": {
    title: "不到三分鐘講完 AI 的 83 年",
    text: "資料、腳本、動畫和真實錄音：全部 5,160 格都由 Claude 根據一條提示詞寫程式碼產生。",
  },
  "how-llms-work-fable": {
    title: "用動態圖像講清楚 LLM 怎麼運作",
    text: "token、embedding、注意力和 Transformer 層，各成一個場景，來自 Matthew Berman 的 Fable 5.2 測試。",
  },
  "white-russian-recipe": {
    title: "手繪風格的白色俄羅斯",
    text: "一張草圖加一條提示詞，約 25 分鐘後得到 1080p 的 MP4：一個 HTML 檔，SVG 加原生 JavaScript，沒用動畫函式庫。",
  },
};

const labels: MotionLabels = {
  likes: "讚",
  views: "次觀看",
  prompt: "查看提示詞（原文）",
  alt: (title) => `影片截圖：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Opus 5.5 動態影片：43 個案例和提示詞",
    description:
      "用 Claude Opus 5.5 做的動態影片：產品發表影片、Logo 動畫、動態字體和說明影片，每個都附作者的提示詞、讚數和觀看數。另附大家都在抄的那條提示詞，以及在 Claude Code 裡怎麼做。",
  },
  breadcrumb: "Opus 5.5 動態影片",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "部落格 · Claude Opus 5.5",
    title: "Opus 5.5 動態影片：43 個案例和背後的提示詞",
    lead: "Claude Opus 5.5 發布後，很多人請它做動態影片並分享出來：發表影片、Logo 動畫、動態字體、酒譜說明。每一支都是 Opus 寫程式碼再算繪成 MP4。我們看完了所有影片，挑出最好的 43 支，每支附作者的提示詞。",
    cta: "開始使用",
    secondary: "看案例",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Claude 怎麼做動態影片",
      text: [
        "全程不用影片模型。Opus 把動畫寫成程式碼（帶 SVG 和 JavaScript 的網頁、React 或 [Remotion](https://www.remotion.dev) 專案，有時用 Three.js），讓無頭瀏覽器逐格播放，再把畫面交給 ffmpeg 合成影片。音樂和音效也用程式碼合成。",
        "每一格都是時間的函數，所以循環能完美接回開頭，聲音能精準對到某一格。文字也因此清晰、真實：產品名稱、價格和介面文字都不會拼錯。",
      ],
      points: [
        "Deedy Das 的發表影片只用了 JavaScript、Playwright 和 ffmpeg，API 費用約 2 美元。",
        "Ethan Mollick 的遞迴影片每個場景都用 React 和 SVG 畫出，音樂用 Python 合成。",
        "Sarutobi Sasuke 的調酒說明是一個 HTML 檔，SVG 加原生 JavaScript，沒用動畫函式庫，大約 25 分鐘完成。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 裡怎麼做",
      steps: [
        {
          title: "在空資料夾裡用 Opus 5.5 啟動 Claude Code",
          text: "好幾位作者說沒裝任何 skill 或外掛：Opus 會自己選工具，缺什麼裝什麼。",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "給它提示詞和你的產品",
          text: "附上網址，讓它自己讀頁面、寫腳本。給一個 Logo 檔、截圖或參考影片，它更容易貼合你的風格。",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "讓它算繪",
          text: "依長度和推理強度不同，幾分鐘到一個半小時不等。可以請它告訴你 MP4 存在哪裡。",
        },
        {
          title: "看完直接說哪裡不好",
          text: "Sacha Arbonel 的第一版節奏太快、音樂也弱，他補了一句不客氣的意見，效果就好多了。可以要求放慢節奏、換成免版稅音樂或換畫面比例。",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "大家都在抄的那條提示詞",
      text: [`下面很多影片都從 X 上流傳的同一條短提示詞開始：\`${basePrompt}\`。作者們常在後面加的內容：`],
      points: [
        "你的產品或網站：「for <你的網址>」，或是「先造訪頁面了解產品，再自己寫影片內容」。",
        "參考對象：「像你的作品展示片」「全力以赴（go all out）」「高級開發者工具發表影片」「蘋果風格」。",
        "情緒或聲音：「迷幻、催眠」，或是「參考奧本海默的主題音樂，但自己作曲」。",
        "限制條件：「別在角落加框線和小字，那是 AI 影片的典型破綻」。",
        "參考素材：Logo、一張圖片、手繪草圖，或一支要模仿的影片。",
      ],
    },
    ...motionSections(
      "zh-TW",
      text,
      labels,
      {
        launch: { title: "產品發表影片", text: "真實產品的發表影片、里程碑短片和招商片，大多一條提示詞完成。" },
        brand: { title: "Logo 動畫和品牌影片", text: "從一個 Logo、一張參考圖或一支經典廣告出發的片頭和廣告。" },
        showreel: { title: "動態展示和動態字體", text: "Opus 展示自己的動態設計功力：字體、循環和純粹的運動。" },
        explainer: { title: "說明影片", text: "用動態圖像講酒譜、歷史和電腦知識。" },
      },
      "看作者原文",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多影片",
      text: [
        "完整清單（每支 3 張截圖和全部提示詞）在 GitHub 上：[awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video)。",
        "想看用 Claude 最新模型做的 3D 場景和短片，可以看 GitHub 上的 [Claude Fable 5.2 影片合集](https://github.com/ummydev/awesome-claude-fable-videos)；想了解新模型的變化以及和 Opus 5.5 的比較，請看我們的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 裡用 Claude Opus 5.5 做動態影片" },
  mid: {
    title: "想每次發版都有一支發表影片？",
    text: "Crewmark 員工跑在你自己的 Claude Code 上：把更新說明交給它，你忙著發布的時候它就能把影片算繪出來。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Opus 5.5 能做影片嗎？",
        a: "能，靠寫程式碼。它把動畫做成網頁或 Remotion 專案，逐格算繪成 MP4，音樂也自己合成。它不像影片模型那樣生成畫面，所以文字、數字和介面都很清晰。",
      },
      {
        q: "需要 skill、Remotion 或 After Effects 嗎？",
        a: "不需要。好幾位作者說用的是一般的 Claude Code，沒裝 skill：工具由 Opus 自己選，通常是 Playwright 或無頭 Chrome 加 ffmpeg，有時用 Remotion。",
      },
      {
        q: "要多久、花多少錢？",
        a: "從大約 1 分鐘、2 美元（Deedy Das），到超高推理強度下算繪一個半小時、花 14 美元（monokern）。多數作者說是一條提示詞，幾分鐘到一小時。",
      },
      {
        q: "音樂從哪裡來？",
        a: "Opus 通常用 Python 或 JavaScript 自己作曲、合成，並把重音對準剪輯點。也有作者請它改用免版稅音樂。",
      },
      {
        q: "這些提示詞可以用嗎？",
        a: "提示詞是作者本人的，引自他們的貼文。可以拿去給自己的產品試試；影片本身歸作者所有。",
      },
    ],
  },
  cta: {
    title: "把做影片交給 AI 員工。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "讚數、觀看數和提示詞已於 2026 年 11 月 12 日在 X 和小紅書上逐則核對原文。",
  disclaimer:
    "影片和提示詞屬於各自的作者，每張卡片都連到原文。Crewmark 是獨立產品，與 Anthropic 無關聯，也未獲其背書。Claude、Claude Opus、Claude Fable 和 Claude Code 是 Anthropic 的商標。",
};
