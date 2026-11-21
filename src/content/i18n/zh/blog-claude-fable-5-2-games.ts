import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// Simplified Chinese translation of /blog/claude-fable-5-2-games; the English master is
// src/content/blog/claude-fable-5-2-games.ts. Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "雨中集装箱港口的 FPS，全程没有人工反馈，约 8 小时做完：所有模型、贴图和音效都从零生成，按 API 价约 550 美元。提示词大意只是“顺便给我做个 FPS”。",
  "what-the-water-keeps":
    "提着灯笼坐小船，慢慢穿过水下城市、雪林等 8 个梦境世界，用 Three.js 做成。作者用 Tripo 3D 做模型、Suno 做游戏音乐，预告片配乐由 Fable 作曲。",
  "oil-paint": "走进一片像手绘的秋天树林：每帧约 150 万笔触，浏览器里跑 200 帧，不到一小时做出来。源码公开。",
  "starry-night-rider": "骑自行车穿过梵高《星夜》里的小镇，天空、房屋和石板路全是旋转的油画笔触。",
  "mirror-earth": "整个地球都是体素：想去哪就去哪，什么都能破坏，天气和真实地球实时同步。基于 Spawn。",
  "i-would-have-gotten-away-with-it":
    "Ethan Mollick 做的反向《史酷比》：你是鬼屋庄园的反派，要把多管闲事的孩子们吓跑。预告片、音乐和音效也是 Fable 做的。",
  "gilt-and-gutter": "金色街机大厅里的 1v1 射击，打出和自己同色的子弹能给枪充能。角色模型来自 Tripo3D，骨骼和动画由 Fable 完成。",
  tidewright: "在暴风雨的夜海上航行，重新点亮 Thrumming 群岛的灯塔。",
  "the-clockmakers-heart": "一关一关解开齿轮谜题，唤醒沉睡的发条巨人，是 Fable 5.2 的初稿。",
  "turbo-tails": "3D 卡丁车，6 名动物车手，有漂移、跳台和道具，能和朋友一起玩。一共 3 条提示词；音乐用 Suno 生成，再让 Claude 接进游戏。",
  rifts: "Overwatch 风格的 3v3 英雄对战，12 名英雄，有穿梭世界的裂隙和 Boss 战，在 Spawn 上用浏览器免费玩。",
  "memory-of-teresa-the-storm-spire": "烛光石室和暴雨中的大教堂尖顶上的暗黑 Boss 战，一次成型，在 Spawn 上免费玩。",
  "aidens-revenge": "1 到 4 人的像素清版动作游戏，由一个叫 Aiden 的孩子构思和画图，用 Fable 5.2 一夜做成了游戏。",
  "hogwarts-royale": "骑扫帚的魔法学校大逃杀，有城堡庭院和魔法森林，提示词只有一行。",
  "party-royale": "Fall Guys 风格的 60 人派对闯关游戏，有假门、转盘和多人模式，一次做成。",
  fablecraft: "一个 HTML 文件里的无限体素沙盒：放置和破坏方块，4K 阴影、反射和 10 区块视距。超高推理强度，两条提示词。",
  "street-brawler-ii": "像素街机格斗，多名角色、必杀技、连击和多个场景，不到 35 分钟一次生成。",
  "toy-room-adventure": "缩成玩具大小，探索洒满阳光的儿童房。Fable 拒绝照搬电影里的角色，于是只还原画风：光线、灰尘和每一处玩具尺寸的细节。",
  "tokyo-night-gp": "three.js 赛车：夜晚东京、湿滑反光的路面，5 名对手跑 3 圈。一条提示词、30 分钟，约用掉 20 美元套餐每周额度的 15%。",
  "samurai-duel": "红月下两名武士对决，有血量条、暴击和流血效果，高推理强度下一条提示词做成。",
  "the-clockmakers-mansion": "Roblox 恐怖游戏：Fable 通过 MCP 在 Roblox Studio 里搭出闹鬼宅邸，还自己剪了预告片。",
  "neon-coast": "粉色夕阳下的 GTA 风格海滨城市：能下车走、上车开，有小地图和通缉星级。一条提示词。",
  "mist-locked-gate":
    "雪夜山门、灯笼点点的武侠动作游戏，Claude Fable 5.2 一个下午做完，整个游戏只是一个 HTML 文件。",
  "the-waking-river":
    "驾一艘金色小船穿过五个沉睡的世界，船经过的地方会一点点苏醒。作者把完整提示词做成了 PDF 分享出来。",
  "cayley":
    "浏览器里的飞行模拟器：真实的机翼物理、9 架真实机型，整颗地球以 3D 实时加载，一夜做完。源码公开。",
  "maad-maxxing":
    "《疯狂的麦克斯》风格的沙漠车战，用 three.js 和 WebGPU 写成，全部是代码，没有任何模型或贴图。",
  "lumenvale":
    "温柔的开放世界奇幻游戏：唤醒花之谷里七座沉睡的神龛。游戏、配乐和预告片都由 Fable 做出。",
  "danfo-run":
    "开着黄色 danfo 小巴穿过拉各斯的车流，拉客、冲在线排行榜。它比 Fable 5.2 发布得早：作者用 Claude 当开发搭档，Three.js 做 3D，GPT 做美术。",
};

const labels: GameLabels = {
  likes: "赞",
  views: "次浏览",
  prompt: "查看提示词（作者原文）",
  play: "在浏览器里玩",
  trailer: "预告片和截图",
  source: "源码",
  alt: (name) => `${name}：用游戏截图做的封面`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 游戏：28 款能玩或能看的游戏",
    description:
      "用 Claude Fable 5.2 做的游戏：媲美 3A 观感的 FPS、梵高风骑行、体素地球、卡丁车和 Boss 战，大多能在浏览器里玩。每款都附作者、试玩链接、点赞，以及作者公开的提示词。",
  },
  breadcrumb: "Claude Fable 5.2 游戏",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "博客 · Claude Fable 5.2",
    title: "Claude Fable 5.2 游戏：大家做出的 28 款游戏和做法",
    lead: "Anthropic 发布 Claude Fable 5.2 后的几天里，很多人晒出它做的游戏：雨中的 FPS、穿越梦境的小船、体素地球、卡丁车和 Boss 战。我们打开了每一条帖子，核对了试玩链接，留下画面最好的 28 款，其中 20 款能直接在浏览器里玩。",
    cta: "开始使用",
    secondary: "去玩",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Fable 5.2 能做什么样的游戏",
      text: [
        "大多数是用 JavaScript 和 Three.js 写的浏览器游戏，常常就是一个 HTML 文件，打开就能玩。也有的做在 Spawn 这类托管 AI 游戏的平台上，或者通过 MCP 在 Roblox Studio 里搭建。代码、着色器，很多时候连音乐和预告片都是 Fable 写的。",
      ],
      points: [
        "Felix Rieseberg 的 Saltline 没有任何人工反馈，用了约 8 小时，所有模型、贴图和音效都从零生成。",
        "Fablecraft 是一个 HTML 文件里的无限体素沙盒，只用了两条提示词：\"make minecraft single file\" 和 \"eh looks basic, make it hdr\"。",
        "Peter Yang 的 Turbo Tails 靠两句简短的追加指令加上了手机操作和多人模式。",
        "有些作者还搭配了别的工具：用 Tripo 3D 做角色模型，用 Suno 做音乐。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "在 Claude Code 里用 Fable 5.2 做游戏",
      steps: [
        {
          title: "在空文件夹里用 Fable 5.2 启动 Claude Code",
          text: "Fable 5.2 需要 Pro 及以上套餐或 API。推理强度越高，耗时越长，通常效果也越好。",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "用一两句话描述游戏",
          text: "短提示词就够用：Matt Shumer 的 Hogwarts Royale 只用了一行。想马上打开、分享，就要求做成一个用 Three.js 的单 HTML 文件。",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "玩一下，每次只提一个修改",
          text: "Turbo Tails 就是先说“让手机能玩”（Let's make mobile work please），再说“用最简单的方式加多人”（Ok let's add multiplayer the simplest way）一步步长出来的。",
        },
        {
          title: "分享出去",
          text: "把文件夹部署到 Vercel、Netlify 这类静态托管，或者像 Saltline 和 Tidewright 那样发布成 Claude artifact。",
        },
      ],
    },
    ...gameSections(
      "zh",
      text,
      labels,
      {
        playable: { title: "现在就能玩的游戏", text: "这些都能在浏览器里运行。每张卡片都链接到游戏、作者原帖，以及带预告片和截图的详情页。" },
        video: { title: "只有视频的游戏", text: "还没有公开版本，可以在作者原帖里看实机视频。" },
      },
      "作者原帖",
    ),
    {
      kind: "text",
      id: "more",
      title: "更多 Claude 作品",
      text: [
        "完整列表连同截图和提示词在 GitHub 上：[awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games)。短片和 3D 场景看 [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)；用 Opus 5.5 做的发布片看 [Opus 5.5 动效视频](/blog/opus-5-5-motion-graphics)。模型本身的变化看我们的 [Claude Fable 5.2 指南](/blog/claude-fable-5-2)。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "在 Claude Code 里用 Claude Fable 5.2 做浏览器游戏" },
  mid: {
    title: "想让 Fable 5.2 每天交付一个功能？",
    text: "Crewmark 员工跑在你自己的 Claude Code 上，按心跳醒来，从看板上领下一个任务，做游戏也一样。",
    button: "开始使用",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "Claude Fable 5.2 能做游戏吗？",
        a: "能。它能用 JavaScript 和 Three.js 写出可玩的浏览器游戏，常常是一个 HTML 文件，也能通过 MCP 在 Roblox Studio 里搭建。作者们做过 30 分钟一条提示词的小游戏，也做过 8 小时、所有素材从零生成的 FPS。",
      },
      {
        q: "在哪里能玩 Claude Fable 5.2 做的游戏？",
        a: "上面 28 款里有 20 款能在浏览器里玩：在作者自己的网站、Claude artifact 或 Spawn 上。其余的作者只发了实机视频。",
      },
      {
        q: "要多久，花多少钱？",
        a: "Tokyo Night GP 用了一条提示词、30 分钟，约占 20 美元套餐每周额度的 15%。Street Brawler II 不到 35 分钟。Saltline 跑了约 8 小时，按 API 价约 550 美元。",
      },
      {
        q: "它会照搬电影和游戏里的角色吗？",
        a: "不一定。有人让它做玩具总动员的游戏，Fable 拒绝使用有版权的角色，改为还原画风。Hogwarts Royale 这类同人混搭是作者自己的项目。",
      },
      {
        q: "提示词是公开的吗？",
        a: "有 5 位作者公开了提示词，我们在卡片里原文引用。大多很短，一两句话。",
      },
    ],
  },
  cta: {
    title: "让最新的模型做一份长期工作。",
    text: "Crewmark 把 Claude Code 和 Codex 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "每条帖子、试玩链接和提示词都于 2026 年 11 月 11 日核对；点赞和浏览量是当时帖子上的数字。",
  disclaimer:
    "游戏、封面和提示词归各自作者所有，每张卡片都链接到原帖。封面是根据每款游戏自己的截图生成的。Crewmark 是独立产品，与 Anthropic 无关联，也未获其背书。Claude、Claude Fable 和 Claude Code 是 Anthropic 的商标；其他游戏和角色归各自权利人所有。",
};
