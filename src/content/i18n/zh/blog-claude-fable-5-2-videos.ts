import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// Simplified Chinese translation of /blog/claude-fable-5-2-videos; the English master is
// src/content/blog/claude-fable-5-2-videos.ts. Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "会变形的构成主义聊天界面",
    text: "一个人机恋聊天 App 的界面，用构成主义风格重做：飞鸟、月相、非人之眼、旋梯和回环，聊天页像测绘图和来信。",
  },
  "art-history-cat": {
    title: "一句话画完 4 万年艺术史",
    text: "同一个人和一只猫在每个时代重画一遍，从古埃及壁画到梵高、蒙德里安、像素画和 2026。约 4,900 行代码，没用生图模型。",
  },
  "crystal-bud-flight": {
    title: "冰晶花苞，再飞越紫色花海",
    text: "一朵结霜的花苞，然后镜头低飞掠过草原、雪山和紫色花海。作者说做了半小时。",
  },
  "blender-island-rebuild": {
    title: "照着参考图在 Blender 里重建一座岛",
    text: "只写代码驱动 Blender：130 个物体、114 万个面、0 张贴图，水车会转、鱼会游。参考图没拍到的部分由 Fable 自己补全。",
  },
  "locomotive-robot-anime": {
    title: "90 秒日漫短片：蒸汽火车变形成机器人",
    text: "一条提示词做出手绘感的 2D 动画：Fable 用 Python 在 Blender 里搭好每个镜头并渲染，再逐帧上墨线，配乐也是它用 numpy 一个音一个音写的。",
  },
  "geonosis-battle-blender": {
    title: "在 Blender 里搭出的星球大战战役",
    text: "作者用来测试每个新模型的 Blender 基准：竞技场里上千个机器人、炮艇和激光对战。一条提示词，1.5 小时（含 20 分钟渲染）。",
  },
  "laundry-in-the-sun": {
    title: "午后阳光里晾着的衣服",
    text: "两个人看着阳光草地上晾衣绳上飘动的衣服。衣褶、透过布料的光、镜头和声音全是代码。",
  },
  "fushimi-inari-travel-ad": {
    title: "秋天伏见稻荷大社的旅游广告",
    text: "20 秒：京都神社、穿过红色鸟居隧道、夕阳下的片名卡，全部用代码完成，连音乐也是。",
  },
  "rainy-tokyo-alley": {
    title: "不用视频模型做出的雨夜东京小巷",
    text: "雨、水洼和霓虹倒影，一面真的能反射的街角镜，还有能看懂的日文招牌。由 Higgsfield 发布。",
  },
  "pet-robot": {
    title: "能在家里做出来的宠物机器人",
    text: "Matt Shumer 让它设计一个能在公寓里做出来的机器人，得到一只圆滚滚的小宠物机器人：醒来、挥手臂、玩球。",
  },
  "lighthouse-in-a-storm": {
    title: "暴风雨中的灯塔",
    text: "灯塔光束扫过翻涌的夜海，直到云层在月亮周围散开。高推理强度，带声音。",
  },
  "piano-boy-short": {
    title: "一张生成图都没有的 46 秒短片",
    text: "弹钢琴的少年：每一帧画面、每一个音符都由 Fable 写的代码画出、弹出，不用任何图像或视频模型。",
  },
  "ufo-area-51": {
    title: "UFO 降落 51 区",
    text: "一句话提示词，用 three.js 和 Remotion 做出 5 个镜头、30 秒的短片：不导入模型、不用贴图和素材音效，4K 渲染。",
  },
  "spider-web-logo": {
    title: "蜘蛛把 Claude Logo 织进网里",
    text: "月光下一只蜘蛛一步步结网，天亮前把 Claude 的 Logo 织在网中央。",
  },
  istanbul: {
    title: "一条提示词搭出的伊斯坦布尔",
    text: "从空中俯瞰整座城市：圣索菲亚大教堂、金角湾、博斯普鲁斯海峡上的渡轮和黄昏天际线。Fable 5.2 Max，约 46 美元。",
  },
  "auric-voyage": {
    title: "Auric Voyage：云海上的金色帆船",
    text: "体积云之上的金色帆船，有日夜交替，还能登上甲板。只用 Three.js，约 38 分钟、17 美元。",
  },
  "pirate-ship": {
    title: "夕阳下航行的海盗船",
    text: "三桅帆船，有航迹、亮灯的船舱窗户和满帆。一次成型，约 1.5 小时、3,500 万 token。",
  },
  "voxel-pagoda": {
    title: "细节满满的体素宝塔",
    text: "浮空岛上的五层宝塔、樱花、池塘，以及入夜亮起的灯笼。",
  },
  "voxel-paris-1888": {
    title: "1888 年的巴黎，埃菲尔铁塔正在建造",
    text: "浮空体素岛上，起重机吊起钢梁，铆工火花四溅，河船在塞纳河上冒着蒸汽。一次成型，提示词很长、很精确。",
  },
  "night-tokyo-ramen-stall": {
    title: "雨夜东京的拉面摊",
    text: "一个 PROMPT.md、空文件夹、不手改，20 分钟、7 美元。按 T 键，雨会慢慢变成雪。",
  },
  "floating-pixel-island": {
    title: "漂浮的像素小岛",
    text: "循环播放的像素风浮岛，有巫师塔、樱花树、彩虹和飞艇。超高推理强度，一条提示词。",
  },
  "talking-village": {
    title: "每个角色都会思考的欧洲小镇",
    text: "一座 3D 小镇，居民用 AI 思考、彼此对话，来自 Matthew Berman 的 Fable 5.2 实测。",
  },
  "lighthouse-at-sunset": {
    title: "写实的夕阳灯塔",
    text: "作者固定用的灯塔提示词在 Fable 5.2 上的效果：条纹灯塔、扫过的光束和平静的海面。",
  },
  "abyssal-landing-page": {
    title: "Abyssal：一路滚进深海的落地页",
    text: "从月光下的海面往下滚动，经过发光的水母，来到灯笼照亮的城市和黑暗中的巨眼。低推理强度做成。",
  },
  "liquid-glass-type": {
    title: "玻璃、琥珀和液态金属字体",
    text: "玻璃、琥珀和液态金属的团块挤过巨大的标题字，每种材质有自己的配色。",
  },
  "car-configurator": {
    title: "中等推理强度做的汽车配置器",
    text: "环绕一辆红色轿车，换车漆和轮毂，再切到带光线拖尾的起步视角。12 分钟。",
  },
  "doomsday-earth": {
    title: "末日地球：毁灭星球的八种方式",
    text: "用 NASA 真实地图和城市灯光做的地球，加上八种毁灭方式，从小行星撞击到像吃苹果一样吞掉地球的神。第一次就成。",
  },
  "virus-capsid": {
    title: "自己组装起来的病毒外壳",
    text: "一个 HTML 文件：420 个蛋白亚基组成 T=7 外壳，先是 12 个五聚体，再是 60 个六聚体，和真实病毒的几何一样。",
  },
  "drained-ocean": {
    title: "抽干海水后的大西洋",
    text: "用 NOAA 真实海底数据做的 3D 飞越：海水一退，英国几秒内就和欧洲连上，接着露出大西洋中脊。",
  },
  "deep-sea-dive": {
    title: "从水面下潜到 40 米",
    text: "阳光、鱼群和手电光束随深度变化，侧边有深度标尺。全部是代码。",
  },
  "pocket-black-hole": {
    title: "口袋黑洞",
    text: "让它做个能火的东西，Fable 做了一个可交互的黑洞，发光的吸积盘被引力透镜弯曲。",
  },
  "galaxy-dive": {
    title: "飞进旋涡星系",
    text: "从旋涡星系外面一路飞进去，光年计数不断减少。约 20 分钟做完。",
  },
};

const labels: VideoLabels = {
  likes: "赞",
  views: "次浏览",
  prompt: "查看提示词（作者原文）",
  open: "在线打开",
  alt: (title) => `视频截图：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 视频：32 部用代码做的短片和 3D 场景",
    description:
      "用 Claude Fable 5.2 做的视频：Blender 渲染的日漫短片、俯瞰伊斯坦布尔、云海上的金色帆船、落地页和科学可视化。不用视频模型，全靠 Fable 写代码。每部都附作者、点赞和提示词。",
  },
  breadcrumb: "Claude Fable 5.2 视频",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "博客 · Claude Fable 5.2",
    title: "Claude Fable 5.2 视频：32 部短片和 3D 场景，全部用代码做成",
    lead: "Claude Fable 5.2 不像视频模型那样直接生成视频。它写代码（Three.js、WebGL、Remotion 或 Blender 的 Python），再把代码画出来的东西渲染出来。这里是它发布头几天大家晒出的 32 个最佳作品，每个都附作者、数据，以及作者公开的提示词。",
    cta: "开始使用",
    secondary: "去看",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Fable 5.2 怎么做视频",
      text: [
        "用 Fable 5.2 生成视频，就是让它把一个场景或一部短片整个写成程序：模型、镜头、灯光，很多时候还有音乐。有的作者把它渲染成 MP4，有的直接把场景做成网页，打开就能在里面走动。",
      ],
      points: [
        "0kncn 的 90 秒日漫是用 Python 在 Blender 里一个镜头一个镜头搭出来的，配乐用 numpy 写成。",
        "Marcel 的金色帆船纯用 Three.js，不用 Blender 也不用外部模型：中等推理强度，约 38 分钟、17 美元。",
        "点赞最多的是 Peter Gostev 的伊斯坦布尔，用 Fable 5.2 Max 跑的，约 46 美元。",
        "Dante 的 UFO 短片只用了一句话提示词，用 three.js 和 Remotion 做成，不用贴图和素材音效。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 里怎么做",
      steps: [
        {
          title: "用 Fable 5.2 启动 Claude Code",
          text: "Fable 5.2 需要 Pro 及以上套餐或 API。要做成能分享的网页，空文件夹就够了；要用 Blender，先装好 Blender，让 Fable 用 Python 驱动它。",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "描述场景，或者逐个镜头描述短片",
          text: "一句话就行（\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"）；像下面巴黎 1888 那样又长又精确的提示词，能给你更多控制。",
        },
        {
          title: "让它渲染，或者保留成可交互的页面",
          text: "可以要求指定分辨率和帧率的 MP4，也可以要求做成一个能在浏览器里打开、分享的 HTML 页面。",
        },
      ],
    },
    ...videoSections(
      "zh",
      text,
      labels,
      {
        film: { title: "短片和动画", text: "有镜头、有故事或有配乐的短片。" },
        world: { title: "3D 场景和微缩世界", text: "城市、帆船和小岛，其中几个是能在里面走动的网页。" },
        web: { title: "网站和交互页面", text: "随着滚动或点击变化的落地页和产品页。" },
        science: { title: "科学、太空和数据", text: "星系、黑洞、病毒和海底，很多用的是真实数据。" },
      },
      "看作者原帖",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多 Claude 作品",
      text: [
        "完整列表（每部 3 张截图）在 GitHub 上：[awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)。用 Fable 5.2 做的游戏看 [Claude Fable 5.2 游戏](/blog/claude-fable-5-2-games)；用 Opus 5.5 做的发布片和动效看 [Opus 5.5 动效视频](/blog/opus-5-5-motion-graphics)。模型本身的变化看我们的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 里用 Claude Fable 5.2 做视频" },
  mid: {
    title: "想让 Fable 5.2 做一份长期工作？",
    text: "Crewmark 员工跑在你自己的 Claude Code 上，按心跳醒来，从看板上领下一个任务。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Fable 5.2 能生成视频吗？",
        a: "不是视频模型那种生成方式。它写代码画出每一帧（Three.js、WebGL、Remotion 或 Blender），再渲染成 MP4，或者直接在浏览器里实时运行。所以文字、Logo 和细节都很清晰。",
      },
      {
        q: "它用什么工具？",
        a: "最常见的是单个 HTML 文件里的 Three.js 或 WebGL。也有人用 Remotion 做电影式剪辑，用 Python 驱动 Blender，用 Python 或 numpy 写音乐。",
      },
      {
        q: "要多久，花多少钱？",
        a: "从约 20 分钟、7 美元（东京拉面摊），到 1.5 小时、3,500 万 token（海盗船），或者用 Fable 5.2 Max 花约 46 美元（伊斯坦布尔）。",
      },
      {
        q: "这些场景我能自己打开吗？",
        a: "有 4 个在卡片上附了在线页面：金色帆船、海盗船、黑洞和星系。其余的作者只发了视频。",
      },
      {
        q: "做视频该用 Fable 5.2 还是 Opus 5.5？",
        a: "两个都有人用。从大家晒出的作品看，Fable 5.2 多用来做 3D 场景和短片，Opus 5.5 多用来做产品发布片和动效，我们整理在 [Opus 5.5 动效视频](/blog/opus-5-5-motion-graphics) 里。",
      },
    ],
  },
  cta: {
    title: "让最新的模型做一份长期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "每条帖子和提示词都于 2026 年 11 月 11 日和 12 日在 X 和小红书上核对；点赞和浏览量是当时帖子上的数字。",
  disclaimer:
    "视频和提示词归各自作者所有，每张卡片都链接到原帖。Crewmark 是独立产品，与 Anthropic 无关联，也未获其背书。Claude、Claude Fable、Claude Opus 和 Claude Code 是 Anthropic 的商标。",
};
