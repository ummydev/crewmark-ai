import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// Simplified Chinese translation of /blog/opus-5-5-motion-graphics; the English master is
// src/content/blog/opus-5-5-motion-graphics.ts. Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "动效设计师 Claude：一句话做出的 15 秒作品集",
    text: "作品集式的动效片：粒子字、“节奏就是一切”的缓动曲线、液态字体，最后的橙色片尾写着 899 帧、8 个场景、1 个关键帧。提示词只有一句中文。",
  },
  "pelican-riding-a-bicycle": {
    title: "骑自行车的鹈鹕，认真做一次",
    text: "作者看腻了 SVG 画的鹈鹕，要 Claude 做最精细的一版。Opus 5.5 在 Claude Code 里写完全部代码：Blender 场景用 Cycles 渲染，自写 Rust 体积云渲染器生成 12K 天空，约 2.4 万根羽毛，自行车有 36 根辐条、92 节链条，配乐也是代码生成。没用任何现成模型、贴图或音乐。",
  },
  "inference-startup-launch": {
    title: "Muda：推理创业公司的发布片，1 分钟、约 2 美元做完",
    text: "“推理大部分时间都在等待。现在不用了。”请求网格随吞吐量上升逐一点亮，最后品牌出场。没用视频模型，也没装额外的库：Claude 做了一个网页动画，再用 Playwright 和 ffmpeg 录成视频。",
  },
  "typingmind-launch": {
    title: "TypingMind：一条提示词，顶替和外包来回 4 周",
    text: "Opus 先读产品页面，自己写脚本，做出“一个对话框同时问多个模型”的动画。一条提示词，在 Claude Code 里跑了将近一小时，没装任何 skill。",
  },
  "notion-launch-it-picked": {
    title: "Notion 发布片，产品是 Opus 自己挑的",
    text: "只让它挑一个大家熟悉的 SaaS、做一条专业发布片，Opus 选了 Notion，从网上找来真实素材，剪出一条精致的功能介绍片。",
  },
  "makermap-one-shape": {
    title: "MakerMap：一个形状变形走完整个产品",
    text: "20 秒里一个形状依次变成注册、地图图钉、地球上 3,393 位创作者、匹配和搜索。弹簧、光标和动态模糊全是一个 HTML 文件里的确定性计算。",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook，配上奥本海默式的配乐",
    text: "分“裂变”“聚变”两章：成千上万张金色书页聚成标题，倒计时，爆炸，配乐是 Opus 参照电影主题自己作的曲。",
  },
  "distilbook-film-strips": {
    title: "Distilbook：彩色胶片卷成隧道",
    text: "一排彩虹色胶片扫过画面，再卷成发光的隧道，风格照着一条参考视频。最终版没有任何手工修改。",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites 月访问量破百万",
    text: "一条里程碑短片，计数器一路冲到一百万。4 分钟一次做成，只改了一处。",
  },
  "famewall-mascot": {
    title: "Famewall：它自己找到吉祥物放进视频",
    text: "一款收集用户评价的工具的发布片。Opus 翻了网站的 SVG，找到吉祥物，没人要求就把它放进了视频。",
  },
  "lumail-pricing": {
    title: "Lumail：AI agent 能直接操作的邮件营销",
    text: "点阵里是从不打开邮件的联系人，账单一路上涨，然后亮出卖点。不到 10 分钟，没用 skill，只有提示词。",
  },
  "founder-page-launch": {
    title: "founder.page：20 秒讲完所有功能",
    text: "节奏很快、贴合品牌的发布片，带实时收入和访客计数。在 Claude Code 里一次做成。",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI：开发者工具发布片",
    text: "用 Opus 5.5 和 Remotion 做成，提示词是一份长简报，要求做成能拿去开发布会的高级发布片。",
  },
  "sahi-trading-terminal": {
    title: "交易终端一路拉远，缩成太空里的一个点",
    text: "从一个点开始，依次出现 K 线、持仓和期权链，镜头拉远到桌面变成太空中的一个点，再推进到手机屏幕。一次做成。",
  },
  "aisa-one-key": {
    title: "AIsa：上千个 API 密钥变成一个",
    text: "一大群密钥名字收拢成一把橙色的钥匙。一条提示词，一次做成。",
  },
  "flowdrive-showreel": {
    title: "Flowdrive：4K 串流，送达全球",
    text: "一条暗色、杂志感的文件分发产品片：层叠地形、发光的点阵地球、自定义域名。没用 skill，记得开声音。",
  },
  "matra-apple-style": {
    title: "Matra：苹果风格的 App 宣传片",
    text: "用 Remotion 和 React 做的 30 秒短片：SF Pro 字体、钛金属 iPhone、按真人语音逐词同步的字幕，还有音乐。",
  },
  "no-hands-labs": {
    title: "No Hands Labs：会自己建起来的公司",
    text: "黑底荧光绿大字和点阵 95%，介绍一家由 AI 运营公司的工作室。",
  },
  "pen-designs-launch": {
    title: "norilu：把反复出现的工作交出去",
    text: "Opus 通过 pen.dev 的 MCP 读取作者的设计稿，做出一条安静的发布片。作者又补了一句不客气的意见，音乐和节奏就好多了。",
  },
  "bento-surf": {
    title: "Bento.surf：40 秒产品片",
    text: "一条活泼、以手机为主的个人主页产品片，一条提示词做成。",
  },
  quickemailverify: {
    title: "QuickEmailVerify：发送前就拦住退信",
    text: "邮箱验证工具的 SaaS 风格短片，从输入地址到清理好的名单。Opus 5.5，高推理强度。",
  },
  "orbe-everyday-spending": {
    title: "Orbe：等距 3D 里的日常开销",
    text: "一款记账 App 的竖屏片：超市、加油站、餐厅，每个场景记下一笔消费。作者说不止用了一条提示词。",
  },
  "winkz-pitch": {
    title: "给亚马逊批发生意做的品牌招商片",
    text: "15 秒向品牌方推介，带价格保护和预付采购的数字。",
  },
  "queryglow-launch": {
    title: "QueryGlow：Anthropic 风格的发布片",
    text: "一款自托管数据库工具的衬线字体发布片，作者用德语说“像 Anthropic 那样”，最后又加了音乐。",
  },
  "opus-1984-ad": {
    title: "致敬苹果《1984》的 Opus 5.5 广告",
    text: "拿锤子奔跑的人、一排排灰色人群、银幕上的巨脸，全部只用代码做成。Opus 还检查了声音的音量。",
  },
  "paybox-brand-sting": {
    title: "PayBox：只给一个 Logo 做出品牌片头",
    text: "agent 读懂 Logo，查到公司，自己写了剧情，一次做出 10 秒的品牌片头。",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm：低多边形碎片拼出 Logo",
    text: "线框 Logo 被碎片一块块填满，App 图标落下，品牌名逐字打出，带音效。",
  },
  "opus-retro-launch": {
    title: "复古未来风的 Opus 5.5 发布片",
    text: "发光的条纹人头，加胶片颗粒和 CRT 效果，来自一条提示词和一张风格参考图。",
  },
  "psychedelic-showreel": {
    title: "Phosphene：迷幻的动效习作",
    text: "巨大的眼睛、旋转隧道和万花筒，画面和声音都由 Opus 在超高推理强度下完成：渲染 90 分钟，总共 14 美元。",
  },
  "poster-breaks-out": {
    title: "冲出画框的海报",
    text: "巨大的红蓝字体冲破自己的海报。配乐由 Opus 自己作曲，每个重音都对准节拍。",
  },
  "i-can": {
    title: "I CAN：模糊、循环、渲染、聚集、弯曲光线",
    text: "一组粗体标题卡，每张都在做它写的事，提示词只有一行。",
  },
  "light-speed-earth": {
    title: "地球上的一秒钟",
    text: "完全不给方向，Opus 自己选了题材：一秒钟里发生的一切，从光绕地球转圈到四个新生儿出生。",
  },
  "no-samples-showreel": {
    title: "音乐从零合成的展示片",
    text: "作者完全不懂动效设计。Opus 写了每一帧的代码，音乐也是它从零合成的，没用采样，在 Cursor 里完成。",
  },
  "easing-explained": {
    title: "I make things move：动效设计师 Claude",
    text: "旋转、吸附的动态字体，一段缓动曲线讲解，再加片尾卡，提示词是一句中文。",
  },
  "portfolio-film": {
    title: "把设计师的作品集做成短片",
    text: "Opus 看完作者作品集的每一屏和开源项目，一次做出一条有力的展示片。",
  },
  "it-thinks-in-curves": {
    title: "节奏、字体、循环：它用曲线思考",
    text: "方形循环的色块字体，再现场画出贝塞尔曲线，讲的是 Opus 说自己不打关键帧、而是写数学。",
  },
  "who-are-you-opus": {
    title: "你好，我是 Claude：Opus 5.5 的自我介绍",
    text: "10 秒的文字动画：“每个字我都读”“我会想清楚”“我直说”“我和你一起做”。",
  },
  "madhav-about-me": {
    title: "一条关于提问者本人的 10 秒短片",
    text: "让它就自己知道的作者情况做个视频，Opus 做了一条讲作者工作的粒子短片。",
  },
  "recursion-nine-styles": {
    title: "用九种风格讲递归",
    text: "每讲一层就换一种风格，从复古游戏到黑色电影。真正的一次成片：画面用 React 和 SVG，音乐和音效用 Python 合成。",
  },
  "negroni-recipe": {
    title: "一步步调一杯 Negroni",
    text: "配方讲解动画，一样一样把材料倒进杯里，根据一张图片用 HTML 渲染出来。",
  },
  "history-of-ai": {
    title: "不到三分钟讲完 AI 的 83 年",
    text: "资料、脚本、动画和真实录音：全部 5,160 帧都由 Claude 根据一条提示词写代码生成。",
  },
  "how-llms-work-fable": {
    title: "用动效讲清楚 LLM 怎么工作",
    text: "token、embedding、注意力和 Transformer 层，各成一个场景，来自 Matthew Berman 的 Fable 5.2 测试。",
  },
  "white-russian-recipe": {
    title: "手绘风格的白俄罗斯鸡尾酒",
    text: "一张草图加一条提示词，约 25 分钟后得到 1080p 的 MP4：一个 HTML 文件，SVG 加原生 JavaScript，没用动画库。",
  },
};

const labels: MotionLabels = {
  likes: "赞",
  views: "次浏览",
  prompt: "查看提示词（原文）",
  alt: (title) => `视频截图：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Opus 5.5 动效视频：43 个案例和提示词",
    description:
      "用 Claude Opus 5.5 做的动效视频：产品发布片、Logo 动画、动态字体和讲解片，每个都附作者的提示词、点赞和浏览量。另附大家都在抄的那条提示词，以及在 Claude Code 里怎么做。",
  },
  breadcrumb: "Opus 5.5 动效视频",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "博客 · Claude Opus 5.5",
    title: "Opus 5.5 动效视频：43 个案例和背后的提示词",
    lead: "Claude Opus 5.5 发布后，很多人让它做动效视频并发出来：发布片、Logo 动画、动态字体、配方讲解。每一条都是 Opus 写代码再渲染成 MP4。我们看完了所有视频，挑出最好的 43 条，每条附作者的提示词。",
    cta: "开始使用",
    secondary: "看案例",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Claude 怎么做动效视频",
      text: [
        "全程不用视频模型。Opus 把动画写成代码（带 SVG 和 JavaScript 的网页、React 或 [Remotion](https://www.remotion.dev) 项目，有时用 Three.js），让无头浏览器逐帧播放，再把画面交给 ffmpeg 合成视频。音乐和音效也是用代码合成的。",
        "每一帧都是时间的函数，所以循环能完美首尾相接，声音能精确对准某一帧。文字也因此清晰、真实：产品名、价格和界面文字都不会拼错。",
      ],
      points: [
        "Deedy Das 的发布片只用了 JavaScript、Playwright 和 ffmpeg，API 费用约 2 美元。",
        "Ethan Mollick 的递归视频每个场景都用 React 和 SVG 画出，音乐用 Python 合成。",
        "Sarutobi Sasuke 的鸡尾酒讲解是一个 HTML 文件，SVG 加原生 JavaScript，没用动画库，大约 25 分钟完成。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 里怎么做",
      steps: [
        {
          title: "在空文件夹里用 Opus 5.5 启动 Claude Code",
          text: "好几位作者说没装任何 skill 或插件：Opus 会自己选工具，缺什么装什么。",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "给它提示词和你的产品",
          text: "附上网址，让它自己读页面、写脚本。给一个 Logo 文件、截图或参考视频，它更容易贴合你的风格。",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "让它渲染",
          text: "按长度和推理强度不同，几分钟到一个半小时不等。可以让它告诉你 MP4 存在哪里。",
        },
        {
          title: "看完直接说哪里不好",
          text: "Sacha Arbonel 的第一版节奏太快、音乐也弱，他补了一句不客气的意见，效果就好多了。可以要求放慢节奏、换免版税音乐或换画面比例。",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "大家都在抄的那条提示词",
      text: [`下面很多视频都从 X 上流传的同一条短提示词开始：\`${basePrompt}\`。作者们常在后面加的内容：`],
      points: [
        "你的产品或网站：“for <你的网址>”，或者“先访问页面了解产品，再自己写视频内容”。",
        "参照对象：“像你的作品集展示片”“全力以赴（go all out）”“高级开发者工具发布片”“苹果风格”。",
        "情绪或声音：“迷幻、催眠”，或者“参考奥本海默的主题音乐，但自己作曲”。",
        "限制条件：“别在角落加边框和小字，那是 AI 视频的典型破绽”。",
        "参考素材：Logo、一张图片、手绘草图，或者一条要模仿的视频。",
      ],
    },
    ...motionSections(
      "zh",
      text,
      labels,
      {
        launch: { title: "产品发布片", text: "真实产品的发布片、里程碑短片和招商片，大多一条提示词做成。" },
        brand: { title: "Logo 动画和品牌片", text: "从一个 Logo、一张参考图或一支经典广告出发的片头和广告。" },
        showreel: { title: "动效展示和动态字体", text: "Opus 展示自己的动效设计功力：字体、循环和纯粹的运动。" },
        explainer: { title: "讲解片", text: "用动效讲配方、历史和计算机知识。" },
      },
      "看作者原帖",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多视频",
      text: [
        "完整列表（每条 3 张截图和全部提示词）在 GitHub 上：[awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video)。",
        "想看用 Claude 最新模型做的 3D 场景和短片，可以看 GitHub 上的 [Claude Fable 5.2 视频合集](https://github.com/ummydev/awesome-claude-fable-videos)；想了解新模型变化以及和 Opus 5.5 的对比，看我们的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 里用 Claude Opus 5.5 做动效视频" },
  mid: {
    title: "想每次发版都有一条发布片？",
    text: "Crewmark 员工跑在你自己的 Claude Code 上：把更新说明交给它，你忙发布的时候它就能把视频渲染出来。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Opus 5.5 能做视频吗？",
        a: "能，靠写代码。它把动画做成网页或 Remotion 项目，逐帧渲染成 MP4，音乐也自己合成。它不像视频模型那样生成画面，所以文字、数字和界面都很清晰。",
      },
      {
        q: "需要 skill、Remotion 或 After Effects 吗？",
        a: "不需要。好几位作者说用的是普通的 Claude Code，没装 skill：工具由 Opus 自己选，通常是 Playwright 或无头 Chrome 加 ffmpeg，有时用 Remotion。",
      },
      {
        q: "要多久，花多少钱？",
        a: "从大约 1 分钟、2 美元（Deedy Das），到超高推理强度下渲染一个半小时、花 14 美元（monokern）。多数作者说是一条提示词，几分钟到一小时。",
      },
      {
        q: "音乐从哪来？",
        a: "Opus 通常用 Python 或 JavaScript 自己作曲、合成，并把重音对准剪辑点。也有作者让它改用免版税音乐。",
      },
      {
        q: "这些提示词可以用吗？",
        a: "提示词是作者本人的，引自他们的帖子。可以拿去给自己的产品试试；视频本身归作者所有。",
      },
    ],
  },
  cta: {
    title: "把做视频交给 AI 员工。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "点赞、浏览量和提示词于 2026 年 11 月 12 日在 X 和小红书上逐条核对原帖。",
  disclaimer:
    "视频和提示词归各自作者所有，每张卡片都链接到原帖。Crewmark 是独立产品，与 Anthropic 无关联，也未获其背书。Claude、Claude Opus、Claude Fable 和 Claude Code 是 Anthropic 的商标。",
};
