import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// Traditional Chinese translation of /blog/claude-fable-5-2-videos; the English master is
// src/content/blog/claude-fable-5-2-videos.ts. Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "會變形的構成主義聊天介面",
    text: "一個人機戀聊天 App 的介面，用構成主義風格重做：飛鳥、月相、非人之眼、旋梯和迴環，聊天頁像測繪圖和來信。",
  },
  "art-history-cat": {
    title: "一句話畫完 4 萬年藝術史",
    text: "同一個人和一隻貓在每個時代重畫一遍，從古埃及壁畫到梵谷、蒙德里安、像素畫和 2026。約 4,900 行程式碼，沒用生圖模型。",
  },
  "crystal-bud-flight": {
    title: "冰晶花苞，再飛越紫色花海",
    text: "一朵結霜的花苞，接著鏡頭低飛掠過草原、雪山和紫色花海。作者說做了半小時。",
  },
  "blender-island-rebuild": {
    title: "照著參考圖在 Blender 裡重建一座島",
    text: "只寫程式碼驅動 Blender：130 個物件、114 萬個面、0 張材質，水車會轉、魚會游。參考圖沒拍到的部分由 Fable 自己補齊。",
  },
  "locomotive-robot-anime": {
    title: "90 秒日式動畫短片：蒸汽火車變身機器人",
    text: "一條提示詞做出手繪感的 2D 動畫：Fable 用 Python 在 Blender 裡搭好每個鏡頭並算繪，再逐格描線，配樂也是它用 numpy 一個音一個音寫的。",
  },
  "geonosis-battle-blender": {
    title: "在 Blender 裡搭出的星際大戰戰役",
    text: "作者用來測試每個新模型的 Blender 基準：競技場裡上千個機器人、砲艇和雷射對戰。一條提示詞，1.5 小時（含 20 分鐘算繪）。",
  },
  "laundry-in-the-sun": {
    title: "午後陽光裡晾著的衣服",
    text: "兩個人看著陽光草地上曬衣繩上飄動的衣服。衣褶、透過布料的光、鏡頭和聲音全是程式碼。",
  },
  "fushimi-inari-travel-ad": {
    title: "秋天伏見稻荷大社的旅遊廣告",
    text: "20 秒：京都神社、穿過紅色鳥居隧道、夕陽下的片名卡，全部用程式碼完成，連音樂也是。",
  },
  "rainy-tokyo-alley": {
    title: "不用影片模型做出的雨夜東京小巷",
    text: "雨、水窪和霓虹倒影，一面真的會反射的街角鏡，還有看得懂的日文招牌。由 Higgsfield 發布。",
  },
  "pet-robot": {
    title: "能在家裡做出來的寵物機器人",
    text: "Matt Shumer 請它設計一個能在公寓裡做出來的機器人，得到一隻圓滾滾的小寵物機器人：醒來、揮手臂、玩球。",
  },
  "lighthouse-in-a-storm": {
    title: "暴風雨中的燈塔",
    text: "燈塔光束掃過翻騰的夜海，直到雲層在月亮周圍散開。高推理強度，附聲音。",
  },
  "piano-boy-short": {
    title: "一張生成圖都沒有的 46 秒短片",
    text: "彈鋼琴的少年：每一格畫面、每一個音符都由 Fable 寫的程式碼畫出、彈出，不用任何圖像或影片模型。",
  },
  "ufo-area-51": {
    title: "UFO 降落 51 區",
    text: "一句話提示詞，用 three.js 和 Remotion 做出 5 個鏡頭、30 秒的短片：不匯入模型、不用材質和素材音效，4K 算繪。",
  },
  "spider-web-logo": {
    title: "蜘蛛把 Claude Logo 織進網裡",
    text: "月光下一隻蜘蛛一步步結網，天亮前把 Claude 的 Logo 織在網中央。",
  },
  istanbul: {
    title: "一條提示詞搭出的伊斯坦堡",
    text: "從空中俯瞰整座城市：聖索菲亞大教堂、金角灣、博斯普魯斯海峽上的渡輪和黃昏天際線。Fable 5.2 Max，約 46 美元。",
  },
  "auric-voyage": {
    title: "Auric Voyage：雲海上的金色帆船",
    text: "體積雲之上的金色帆船，有日夜交替，還能登上甲板。只用 Three.js，約 38 分鐘、17 美元。",
  },
  "pirate-ship": {
    title: "夕陽下航行的海盜船",
    text: "三桅帆船，有航跡、亮燈的船艙窗戶和滿帆。一次完成，約 1.5 小時、3,500 萬 token。",
  },
  "voxel-pagoda": {
    title: "細節滿滿的體素寶塔",
    text: "浮空島上的五層寶塔、櫻花、池塘，以及入夜亮起的燈籠。",
  },
  "voxel-paris-1888": {
    title: "1888 年的巴黎，艾菲爾鐵塔正在興建",
    text: "浮空體素島上，起重機吊起鋼樑，鉚工火花四濺，河船在塞納河上冒著蒸汽。一次完成，提示詞很長、很精確。",
  },
  "night-tokyo-ramen-stall": {
    title: "雨夜東京的拉麵攤",
    text: "一個 PROMPT.md、空資料夾、不手改，20 分鐘、7 美元。按 T 鍵，雨會慢慢變成雪。",
  },
  "floating-pixel-island": {
    title: "漂浮的像素小島",
    text: "循環播放的像素風浮島，有巫師塔、櫻花樹、彩虹和飛艇。超高推理強度，一條提示詞。",
  },
  "talking-village": {
    title: "每個角色都會思考的歐洲小鎮",
    text: "一座 3D 小鎮，居民用 AI 思考、彼此對話，來自 Matthew Berman 的 Fable 5.2 實測。",
  },
  "lighthouse-at-sunset": {
    title: "寫實的夕陽燈塔",
    text: "作者固定使用的燈塔提示詞在 Fable 5.2 上的效果：條紋燈塔、掃過的光束和平靜的海面。",
  },
  "abyssal-landing-page": {
    title: "Abyssal：一路捲進深海的登陸頁",
    text: "從月光下的海面往下捲動，經過發光的水母，來到燈籠照亮的城市和黑暗中的巨眼。低推理強度完成。",
  },
  "liquid-glass-type": {
    title: "玻璃、琥珀和液態金屬字體",
    text: "玻璃、琥珀和液態金屬的團塊擠過巨大的標題字，每種材質有自己的配色。",
  },
  "car-configurator": {
    title: "中等推理強度做的汽車配置器",
    text: "環繞一輛紅色轎車，換車漆和輪圈，再切到帶光線拖尾的起步視角。12 分鐘。",
  },
  "doomsday-earth": {
    title: "末日地球：毀滅星球的八種方式",
    text: "用 NASA 真實地圖和城市燈光做的地球，加上八種毀滅方式，從小行星撞擊到像吃蘋果一樣吞掉地球的神。第一次就成功。",
  },
  "virus-capsid": {
    title: "自己組裝起來的病毒外殼",
    text: "一個 HTML 檔：420 個蛋白次單元組成 T=7 外殼，先是 12 個五聚體，再是 60 個六聚體，和真實病毒的幾何相同。",
  },
  "drained-ocean": {
    title: "抽乾海水後的大西洋",
    text: "用 NOAA 真實海底資料做的 3D 飛越：海水一退，英國幾秒內就和歐洲連上，接著露出大西洋中洋脊。",
  },
  "deep-sea-dive": {
    title: "從水面下潛到 40 公尺",
    text: "陽光、魚群和手電筒光束隨深度變化，側邊有深度標尺。全部是程式碼。",
  },
  "pocket-black-hole": {
    title: "口袋黑洞",
    text: "請它做個會爆紅的東西，Fable 做了一個可互動的黑洞，發光的吸積盤被重力透鏡彎曲。",
  },
  "galaxy-dive": {
    title: "飛進漩渦星系",
    text: "從漩渦星系外面一路飛進去，光年計數不斷減少。約 20 分鐘做完。",
  },
};

const labels: VideoLabels = {
  likes: "讚",
  views: "次觀看",
  prompt: "查看提示詞（作者原文）",
  open: "線上開啟",
  alt: (title) => `影片截圖：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 影片：32 部用程式碼做的短片和 3D 場景",
    description:
      "用 Claude Fable 5.2 做的影片：Blender 算繪的日式動畫短片、俯瞰伊斯坦堡、雲海上的金色帆船、登陸頁和科學視覺化。不用影片模型，全靠 Fable 寫程式碼。每部都附作者、讚數和提示詞。",
  },
  breadcrumb: "Claude Fable 5.2 影片",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "部落格 · Claude Fable 5.2",
    title: "Claude Fable 5.2 影片：32 部短片和 3D 場景，全部用程式碼做成",
    lead: "Claude Fable 5.2 不像影片模型那樣直接產生影片。它寫程式碼（Three.js、WebGL、Remotion 或 Blender 的 Python），再把程式碼畫出來的東西算繪出來。這裡是它發布頭幾天大家分享的 32 個最佳作品，每個都附作者、數據，以及作者公開的提示詞。",
    cta: "開始使用",
    secondary: "去看",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Fable 5.2 怎麼做影片",
      text: [
        "用 Fable 5.2 產生影片，就是請它把一個場景或一部短片整個寫成程式：模型、鏡頭、燈光，很多時候還有音樂。有的作者把它算繪成 MP4，有的直接把場景做成網頁，打開就能在裡面走動。",
      ],
      points: [
        "0kncn 的 90 秒日式動畫是用 Python 在 Blender 裡一個鏡頭一個鏡頭搭出來的，配樂用 numpy 寫成。",
        "Marcel 的金色帆船只用 Three.js，不用 Blender 也不用外部模型：中等推理強度，約 38 分鐘、17 美元。",
        "讚數最多的是 Peter Gostev 的伊斯坦堡，用 Fable 5.2 Max 跑的，約 46 美元。",
        "Dante 的 UFO 短片只用一句話提示詞，以 three.js 和 Remotion 做成，不用材質和素材音效。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 裡怎麼做",
      steps: [
        {
          title: "用 Fable 5.2 啟動 Claude Code",
          text: "Fable 5.2 需要 Pro 以上方案或 API。要做成能分享的網頁，空資料夾就夠了；要用 Blender，先裝好 Blender，讓 Fable 用 Python 驅動它。",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "描述場景，或逐個鏡頭描述短片",
          text: "一句話就行（\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"）；像下面巴黎 1888 那樣又長又精確的提示詞，能給你更多控制。",
        },
        {
          title: "請它算繪，或保留成可互動的頁面",
          text: "可以要求指定解析度和影格率的 MP4，也可以要求做成一個能在瀏覽器裡打開、分享的 HTML 頁面。",
        },
      ],
    },
    ...videoSections(
      "zh-TW",
      text,
      labels,
      {
        film: { title: "短片和動畫", text: "有鏡頭、有故事或有配樂的短片。" },
        world: { title: "3D 場景和微縮世界", text: "城市、帆船和小島，其中幾個是能在裡面走動的網頁。" },
        web: { title: "網站和互動頁面", text: "隨捲動或點擊變化的登陸頁和產品頁。" },
        science: { title: "科學、太空和資料", text: "星系、黑洞、病毒和海底，很多用的是真實資料。" },
      },
      "看作者原文",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多 Claude 作品",
      text: [
        "完整清單（每部 3 張截圖）在 GitHub 上：[awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)。用 Fable 5.2 做的遊戲看 [Claude Fable 5.2 遊戲](/blog/claude-fable-5-2-games)；用 Opus 5.5 做的發表影片和動態圖像看 [Opus 5.5 動態影片](/blog/opus-5-5-motion-graphics)。模型本身的變化請看我們的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 裡用 Claude Fable 5.2 做影片" },
  mid: {
    title: "想讓 Fable 5.2 做一份長期工作？",
    text: "Crewmark 員工跑在你自己的 Claude Code 上，依心跳醒來，從看板上領下一個任務。",
    button: "開始使用",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        q: "Claude Fable 5.2 能產生影片嗎？",
        a: "不是影片模型那種產生方式。它寫程式碼畫出每一格（Three.js、WebGL、Remotion 或 Blender），再算繪成 MP4，或直接在瀏覽器裡即時執行。所以文字、Logo 和細節都很清晰。",
      },
      {
        q: "它用什麼工具？",
        a: "最常見的是單一 HTML 檔裡的 Three.js 或 WebGL。也有人用 Remotion 做電影式剪輯，用 Python 驅動 Blender，用 Python 或 numpy 寫音樂。",
      },
      {
        q: "要多久、花多少錢？",
        a: "從約 20 分鐘、7 美元（東京拉麵攤），到 1.5 小時、3,500 萬 token（海盜船），或用 Fable 5.2 Max 花約 46 美元（伊斯坦堡）。",
      },
      {
        q: "這些場景我能自己打開嗎？",
        a: "有 4 個在卡片上附了線上頁面：金色帆船、海盜船、黑洞和星系。其餘的作者只發了影片。",
      },
      {
        q: "做影片該用 Fable 5.2 還是 Opus 5.5？",
        a: "兩個都有人用。從大家分享的作品看，Fable 5.2 多用來做 3D 場景和短片，Opus 5.5 多用來做產品發表影片和動態圖像，我們整理在 [Opus 5.5 動態影片](/blog/opus-5-5-motion-graphics) 裡。",
      },
    ],
  },
  cta: {
    title: "讓最新的模型做一份長期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "每則貼文和提示詞都於 2026 年 11 月 11 日和 12 日在 X 和小紅書上核對；讚數和觀看數是當時貼文上的數字。",
  disclaimer:
    "影片和提示詞屬於各自的作者，每張卡片都連到原文。Crewmark 是獨立產品，與 Anthropic 無關聯，也未獲其背書。Claude、Claude Fable、Claude Opus 和 Claude Code 是 Anthropic 的商標。",
};
