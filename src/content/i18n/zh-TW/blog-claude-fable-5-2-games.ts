import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// Traditional Chinese translation of /blog/claude-fable-5-2-games; the English master is
// src/content/blog/claude-fable-5-2-games.ts. Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "雨中貨櫃港口的 FPS，全程沒有人工回饋，約 8 小時完成：所有模型、材質和音效都從零產生，以 API 價格計約 550 美元。提示詞大意只是「順便幫我做個 FPS」。",
  "what-the-water-keeps":
    "提著燈籠搭小船，慢慢穿過水下城市、雪林等 8 個夢境世界，用 Three.js 做成。作者用 Tripo 3D 做模型、Suno 做遊戲音樂，預告片配樂由 Fable 作曲。",
  "oil-paint": "走進一片像手繪的秋天樹林：每格約 150 萬筆觸，瀏覽器裡跑 200 fps，不到一小時做出來。原始碼公開。",
  "starry-night-rider": "騎腳踏車穿過梵谷《星夜》裡的小鎮，天空、房屋和石板路全是旋轉的油畫筆觸。",
  "mirror-earth": "整個地球都是體素：想去哪就去哪，什麼都能破壞，天氣和真實地球即時同步。建在 Spawn 上。",
  "i-would-have-gotten-away-with-it":
    "Ethan Mollick 做的反向《史酷比》：你是鬼屋莊園的反派，要把多管閒事的孩子們嚇跑。預告片、音樂和音效也是 Fable 做的。",
  "gilt-and-gutter": "金色街機大廳裡的 1v1 射擊，打出和自己同色的子彈能替槍充能。角色模型來自 Tripo3D，骨架和動畫由 Fable 完成。",
  tidewright: "在暴風雨的夜海上航行，重新點亮 Thrumming 群島的燈塔。",
  "the-clockmakers-heart": "一關一關解開齒輪謎題，喚醒沉睡的發條巨人，是 Fable 5.2 的初稿。",
  "turbo-tails": "3D 卡丁車，6 名動物車手，有甩尾、跳台和道具，能和朋友一起玩。一共 3 條提示詞；音樂用 Suno 產生，再請 Claude 接進遊戲。",
  rifts: "Overwatch 風格的 3v3 英雄對戰，12 名英雄，有穿梭世界的裂隙和 Boss 戰，在 Spawn 上用瀏覽器免費玩。",
  "memory-of-teresa-the-storm-spire": "燭光石室和暴雨中的大教堂尖塔上的暗黑 Boss 戰，一次完成，在 Spawn 上免費玩。",
  "aidens-revenge": "1 到 4 人的像素清版動作遊戲，由一個叫 Aiden 的孩子構思和畫圖，用 Fable 5.2 一夜做成了遊戲。",
  "hogwarts-royale": "騎掃帚的魔法學校大逃殺，有城堡庭院和魔法森林，提示詞只有一行。",
  "party-royale": "Fall Guys 風格的 60 人派對闖關遊戲，有假門、轉盤和多人模式，一次做成。",
  fablecraft: "一個 HTML 檔裡的無限體素沙盒：放置和破壞方塊，4K 陰影、反射和 10 區塊視距。超高推理強度，兩條提示詞。",
  "street-brawler-ii": "像素街機格鬥，多名角色、必殺技、連擊和多個場景，不到 35 分鐘一次產生。",
  "toy-room-adventure": "縮成玩具大小，探索灑滿陽光的兒童房。Fable 拒絕照搬電影裡的角色，於是只還原畫風：光線、灰塵和每一處玩具尺寸的細節。",
  "tokyo-night-gp": "three.js 賽車：夜晚東京、濕滑反光的路面，5 名對手跑 3 圈。一條提示詞、30 分鐘，約用掉 20 美元方案每週額度的 15%。",
  "samurai-duel": "紅月下兩名武士對決，有血量條、爆擊和流血效果，高推理強度下一條提示詞做成。",
  "the-clockmakers-mansion": "Roblox 恐怖遊戲：Fable 透過 MCP 在 Roblox Studio 裡搭出鬧鬼宅邸，還自己剪了預告片。",
  "neon-coast": "粉色夕陽下的 GTA 風格海濱城市：能下車走、上車開，有小地圖和通緝星級。一條提示詞。",
  "mist-locked-gate":
    "雪夜山門、燈籠點點的武俠動作遊戲，Claude Fable 5.2 一個下午做完，整個遊戲只是一個 HTML 檔。",
  "the-waking-river":
    "駕一艘金色小船穿過五個沉睡的世界，船經過的地方會慢慢甦醒。作者把完整提示詞做成 PDF 分享出來。",
  "cayley":
    "瀏覽器裡的飛行模擬器：真實的機翼物理、9 架真實機型，整顆地球以 3D 即時載入，一夜做完。原始碼公開。",
  "maad-maxxing":
    "《瘋狂麥斯》風格的沙漠車戰，用 three.js 和 WebGPU 寫成，全部是程式碼，沒有任何模型或貼圖。",
  "lumenvale":
    "溫柔的開放世界奇幻遊戲：喚醒花之谷裡七座沉睡的神龕。遊戲、配樂和預告片都由 Fable 做出。",
  "danfo-run":
    "開著黃色 danfo 小巴穿過拉哥斯的車流，載客、衝線上排行榜。它比 Fable 5.2 推出得早：作者用 Claude 當開發夥伴，Three.js 做 3D，GPT 做美術。",
};

const labels: GameLabels = {
  likes: "讚",
  views: "次觀看",
  prompt: "查看提示詞（作者原文）",
  play: "在瀏覽器裡玩",
  trailer: "預告片和截圖",
  source: "原始碼",
  alt: (name) => `${name}：用遊戲截圖做的封面`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 遊戲：28 款能玩或能看的遊戲",
    description:
      "用 Claude Fable 5.2 做的遊戲：媲美 3A 觀感的 FPS、梵谷風騎行、體素地球、卡丁車和 Boss 戰，大多能在瀏覽器裡玩。每款都附作者、試玩連結、讚數，以及作者公開的提示詞。",
  },
  breadcrumb: "Claude Fable 5.2 遊戲",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "部落格 · Claude Fable 5.2",
    title: "Claude Fable 5.2 遊戲：大家做出的 28 款遊戲和做法",
    lead: "Anthropic 發布 Claude Fable 5.2 後的幾天裡，很多人分享它做的遊戲：雨中的 FPS、穿越夢境的小船、體素地球、卡丁車和 Boss 戰。我們打開了每一則貼文、核對了試玩連結，留下畫面最好的 28 款，其中 20 款能直接在瀏覽器裡玩。",
    cta: "開始使用",
    secondary: "去玩",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Fable 5.2 能做什麼樣的遊戲",
      text: [
        "大多數是用 JavaScript 和 Three.js 寫的瀏覽器遊戲，常常就是一個 HTML 檔，打開就能玩。也有的做在 Spawn 這類託管 AI 遊戲的平台上，或是透過 MCP 在 Roblox Studio 裡搭建。程式碼、著色器，很多時候連音樂和預告片都是 Fable 寫的。",
      ],
      points: [
        "Felix Rieseberg 的 Saltline 沒有任何人工回饋，花了約 8 小時，所有模型、材質和音效都從零產生。",
        "Fablecraft 是一個 HTML 檔裡的無限體素沙盒，只用了兩條提示詞：\"make minecraft single file\" 和 \"eh looks basic, make it hdr\"。",
        "Peter Yang 的 Turbo Tails 靠兩句簡短的追加指令加上了手機操作和多人模式。",
        "有些作者還搭配了其他工具：用 Tripo 3D 做角色模型，用 Suno 做音樂。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 裡用 Fable 5.2 做遊戲",
      steps: [
        {
          title: "在空資料夾裡用 Fable 5.2 啟動 Claude Code",
          text: "Fable 5.2 需要 Pro 以上方案或 API。推理強度越高，耗時越長，通常效果也越好。",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "用一兩句話描述遊戲",
          text: "短提示詞就夠用：Matt Shumer 的 Hogwarts Royale 只用了一行。想馬上打開、分享，就要求做成一個用 Three.js 的單一 HTML 檔。",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "玩一下，每次只提一個修改",
          text: "Turbo Tails 就是先說「讓手機能玩」（Let's make mobile work please），再說「用最簡單的方式加多人」（Ok let's add multiplayer the simplest way）一步步長出來的。",
        },
        {
          title: "分享出去",
          text: "把資料夾部署到 Vercel、Netlify 這類靜態託管，或是像 Saltline 和 Tidewright 那樣發布成 Claude artifact。",
        },
      ],
    },
    ...gameSections(
      "zh-TW",
      text,
      labels,
      {
        playable: { title: "現在就能玩的遊戲", text: "這些都能在瀏覽器裡執行。每張卡片都連到遊戲、作者原文，以及有預告片和截圖的詳細頁面。" },
        video: { title: "只有影片的遊戲", text: "還沒有公開版本，可以在作者原文裡看實機影片。" },
      },
      "作者原文",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多 Claude 作品",
      text: [
        "完整清單連同截圖和提示詞在 GitHub 上：[awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games)。短片和 3D 場景看 [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)；用 Opus 5.5 做的發表影片看 [Opus 5.5 動態影片](/blog/opus-5-5-motion-graphics)。模型本身的變化請看我們的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 裡用 Claude Fable 5.2 做瀏覽器遊戲" },
  mid: {
    title: "想讓 Fable 5.2 每天交付一個功能？",
    text: "Crewmark 員工跑在你自己的 Claude Code 上，依心跳醒來，從看板上領下一個任務，做遊戲也一樣。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Fable 5.2 能做遊戲嗎？",
        a: "能。它能用 JavaScript 和 Three.js 寫出可玩的瀏覽器遊戲，常常是一個 HTML 檔，也能透過 MCP 在 Roblox Studio 裡搭建。作者們做過 30 分鐘一條提示詞的小遊戲，也做過 8 小時、所有素材從零產生的 FPS。",
      },
      {
        q: "在哪裡能玩 Claude Fable 5.2 做的遊戲？",
        a: "上面 28 款裡有 20 款能在瀏覽器裡玩：在作者自己的網站、Claude artifact 或 Spawn 上。其餘的作者只發了實機影片。",
      },
      {
        q: "要多久、花多少錢？",
        a: "Tokyo Night GP 用了一條提示詞、30 分鐘，約占 20 美元方案每週額度的 15%。Street Brawler II 不到 35 分鐘。Saltline 跑了約 8 小時，以 API 價格計約 550 美元。",
      },
      {
        q: "它會照搬電影和遊戲裡的角色嗎？",
        a: "不一定。有人請它做玩具總動員的遊戲，Fable 拒絕使用有版權的角色，改為還原畫風。Hogwarts Royale 這類同人混搭是作者自己的專案。",
      },
      {
        q: "提示詞是公開的嗎？",
        a: "有 5 位作者公開了提示詞，我們在卡片裡原文引用。大多很短，一兩句話。",
      },
    ],
  },
  cta: {
    title: "讓最新的模型做一份長期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "每則貼文、試玩連結和提示詞都於 2026 年 11 月 11 日核對；讚數和觀看數是當時貼文上的數字。",
  disclaimer:
    "遊戲、封面和提示詞屬於各自的作者，每張卡片都連到原文。封面是根據每款遊戲自己的截圖產生的。Crewmark 是獨立產品，與 Anthropic 無關聯，也未獲其背書。Claude、Claude Fable 和 Claude Code 是 Anthropic 的商標；其他遊戲和角色屬於各自的權利人。",
};
