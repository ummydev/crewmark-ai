import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// ja translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "雨のコンテナ港を舞台にした FPS。人のフィードバックなしで約 8 時間、モデル、テクスチャ、効果音をすべてゼロから作り、API 価格で約 550 ドル。プロンプトはほぼ「ついでに FPS も作って」だけでした。",
  "what-the-water-keeps":
    "ランタンを灯した小舟で、水没した街や雪の森など 8 つの夢の世界をゆっくり巡ります。Three.js 製。モデルは Tripo 3D、ゲーム音楽は Suno、予告編の音楽は Fable が作曲しました。",
  "oil-paint": "手描きのような秋の森を歩けます。1 フレームあたり約 150 万ストローク、ブラウザで 200 fps。1 時間足らずで作られ、ソースも公開されています。",
  "starry-night-rider": "ゴッホ『星月夜』の村を自転車で走ります。空も家も石畳も、すべて渦巻く筆致で描かれています。",
  "mirror-earth": "地球全体がボクセルに。どこへでも行けて何でも壊せ、天気は現実の地球とリアルタイムで連動します。Spawn 上で動作。",
  "i-would-have-gotten-away-with-it":
    "Ethan Mollick による逆スクービー・ドゥー。あなたは幽霊屋敷の悪役で、おせっかいな子どもたちを怖がらせて追い払います。予告編、音楽、効果音も Fable 製。",
  "gilt-and-gutter": "金色のアーケードホールで戦うスタイリッシュな 1v1 シューター。自分と同じ色の弾を撃つと銃がチャージされます。キャラクターモデルは Tripo3D、リギングとアニメーションは Fable。",
  tidewright: "嵐の夜の海を航海し、Thrumming 諸島の灯台に再び火をともします。",
  "the-clockmakers-heart": "歯車パズルを一つずつ解いて、眠るぜんまい仕掛けの巨人を目覚めさせる、Fable 5.2 による初稿。",
  "turbo-tails": "6 匹の動物ドライバー、ドリフト、ジャンプ台、アイテムがそろった 3D カートレース。友達と遊べます。プロンプトは全部で 3 つ、音楽は Suno で作り Claude に組み込ませました。",
  rifts: "12 人のヒーロー、世界を渡るリフト、ボス戦がある Overwatch 風の 3v3 ヒーローバトル。Spawn でブラウザから無料で遊べます。",
  "memory-of-teresa-the-storm-spire": "ろうそくの灯る石の広間と、雨に打たれる大聖堂の尖塔でのダークなボス戦。一発で完成し、Spawn で無料プレイできます。",
  "aidens-revenge": "Aiden という子どもが考えて絵を描いた、1〜4 人用のピクセルアートのベルトスクロールアクション。Fable 5.2 で一晩のうちにゲームになりました。",
  "hogwarts-royale": "城の中庭と魔法の森を舞台に、ほうきで飛び回る魔法学校バトルロイヤル。プロンプトは 1 行。",
  "party-royale": "60 人で遊ぶ Fall Guys 風のパーティーゲーム。偽のドア、回転する足場、マルチプレイ付きで、一発で完成。",
  fablecraft: "1 つの HTML ファイルに収まった無限ボクセルサンドボックス。ブロックを置いて壊せて、4K の影、反射、10 チャンクの描画距離。effort は extra high、プロンプトは 2 つ。",
  "street-brawler-ii": "複数のキャラクター、必殺技、コンボ、ステージを備えたピクセルアートのアーケード格闘ゲーム。35 分足らずで一発生成。",
  "toy-room-adventure": "おもちゃサイズになって陽の差す子ども部屋を探検します。Fable は映画のキャラクターをそのまま使うのを断り、光やほこり、おもちゃ目線の細部で雰囲気だけを再現しました。",
  "tokyo-night-gp": "濡れて光る路面の夜の東京を 5 台のライバルと 3 周する three.js のレースゲーム。プロンプト 1 つ、30 分、20 ドルプランの週間上限の約 15%。",
  "samurai-duel": "赤い月の下で戦う 2 人の侍。体力バー、クリティカル、流血エフェクト付きで、effort High のプロンプト 1 つから。",
  "the-clockmakers-mansion": "Roblox のホラーゲーム。Fable が MCP 経由で Roblox Studio に幽霊屋敷を建て、予告編まで自分で編集しました。",
  "neon-coast": "ピンクの夕日に染まる GTA 風のビーチの街。車を降りて歩き、乗って走れて、ミニマップと手配レベルもあります。プロンプト 1 つ。",
  "mist-locked-gate":
    "雪と灯籠に包まれた山門を舞台にした武侠アクション。Claude Fable 5.2 が午後のうちに、HTML ファイル 1 つで作りました。",
  "the-waking-river":
    "金色の小舟で眠る 5 つの世界を進むと、通ったそばから世界が目を覚まします。作者はプロンプト全文を PDF で公開しています。",
  "cayley":
    "本物の翼の物理、実在の機体 9 機、3D でストリーミングされる地球全体を備えたフライトシミュレーター。一晩で作られ、ソースも公開。",
  "maad-maxxing":
    "マッドマックス風の砂漠カーバトル。three.js と WebGPU で、モデルもテクスチャも使わずすべてコードで書かれています。",
  "lumenvale":
    "花の谷で眠る 7 つの祠を目覚めさせる、やさしいオープンワールド・ファンタジー。ゲームも音楽もトレーラーも Fable 製です。",
  "danfo-run":
    "黄色いダンフォでラゴスの渋滞を走り抜け、乗客を拾ってライブランキングの上位を狙う。Fable 5.2 より前の作品で、開発パートナーは Claude、3D は Three.js、アートは GPT。",
};

const labels: GameLabels = {
  likes: "いいね",
  views: "表示",
  prompt: "プロンプトを見る（作者の原文）",
  play: "ブラウザで遊ぶ",
  trailer: "予告編とスクリーンショット",
  source: "ソース",
  alt: (name) => `${name}：ゲームのスクリーンショットから作ったカバーアート`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 のゲーム：遊べる・見られる 28 本",
    description:
      "Claude Fable 5.2 で作られたゲーム。AAA 並みの見た目の FPS、ゴッホの世界を走る自転車、ボクセルの地球、カートレースやボス戦など、多くはブラウザで遊べます。作者、プレイリンク、いいね数、公開されていればプロンプトも掲載。",
  },
  breadcrumb: "Claude Fable 5.2 のゲーム",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "ブログ · Claude Fable 5.2",
    title: "Claude Fable 5.2 のゲーム：みんなが作った 28 本とその作り方",
    lead: "Anthropic が Claude Fable 5.2 を公開してから数日、多くの人が作らせたゲームを投稿しました。雨の FPS、夢の世界を巡る小舟、ボクセルの地球、カートレース、ボス戦。すべての投稿を開いてプレイリンクを確認し、見た目の優れた 28 本を選びました。うち 20 本はブラウザですぐ遊べます。",
    cta: "始める",
    secondary: "遊んでみる",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Fable 5.2 はどんなゲームを作るのか",
      text: [
        "ほとんどは JavaScript と Three.js で書かれたブラウザゲームで、開けばすぐ遊べる 1 つの HTML ファイルであることも多いです。AI 製ゲームをホストする Spawn のようなプラットフォーム上や、MCP 経由で Roblox Studio の中に作られたものもあります。コードもシェーダーも、多くの場合は音楽や予告編も Fable が書いています。",
      ],
      points: [
        "Felix Rieseberg の Saltline は人のフィードバックなしで約 8 時間。モデル、テクスチャ、効果音はすべてゼロから作られました。",
        "Fablecraft は 1 つの HTML ファイルの無限ボクセルサンドボックスで、プロンプトは \"make minecraft single file\" と \"eh looks basic, make it hdr\" の 2 つだけ。",
        "Peter Yang の Turbo Tails は、短い追加指示 2 つでスマホ操作とマルチプレイが加わりました。",
        "ほかのツールを組み合わせた作者もいます。キャラクターモデルに Tripo 3D、音楽に Suno。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code で Fable 5.2 を使ってゲームを作る",
      steps: [
        {
          title: "空のフォルダで Claude Code を Fable 5.2 で起動する",
          text: "Fable 5.2 には Pro 以上のプランか API が必要です。effort を上げるほど時間はかかりますが、たいてい見た目も良くなります。",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "ゲームを 1〜2 文で説明する",
          text: "短いプロンプトで十分です。Matt Shumer の Hogwarts Royale は 1 行でした。すぐ開いて共有したいなら、Three.js を使った単一の HTML ファイルで、と頼みましょう。",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "遊んでみて、変更は一つずつ頼む",
          text: "Turbo Tails は「スマホで動くようにして」（Let's make mobile work please）、次に「いちばん簡単な方法でマルチプレイを足して」（Ok let's add multiplayer the simplest way）と少しずつ育ちました。",
        },
        {
          title: "公開する",
          text: "フォルダを Vercel や Netlify などの静的ホスティングにデプロイするか、Saltline や Tidewright のように Claude の artifact として公開します。",
        },
      ],
    },
    ...gameSections(
      "ja",
      text,
      labels,
      {
        playable: { title: "今すぐ遊べるゲーム", text: "ブラウザで動きます。各カードからゲーム本体、作者の投稿、予告編とスクリーンショットのページへ行けます。" },
        video: { title: "動画で公開されたゲーム", text: "公開版はまだありません。作者の投稿でプレイ映像を見られます。" },
      },
      "元の投稿",
    ),
    {
      kind: "text",
      id: "more",
      title: "Claude の作品をもっと見る",
      text: [
        "スクリーンショットとプロンプト付きの全リストは GitHub にあります：[awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games)。短編や 3D の世界は [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)、Opus 5.5 で作ったローンチ動画は [Opus 5.5 のモーショングラフィックス](/blog/opus-5-5-motion-graphics) へ。モデル自体の変更点は [Claude Fable 5.2 ガイド](/blog/claude-fable-5-2) をどうぞ。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code で Claude Fable 5.2 を使ってブラウザゲームを作る" },
  mid: {
    title: "Fable 5.2 に毎日機能を出してほしいなら",
    text: "Crewmark の従業員はあなた自身の Claude Code 上で動き、ハートビートで起きてボードから次の課題を取ります。ゲームでも同じです。",
    button: "始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Fable 5.2 はゲームを作れますか？",
        a: "作れます。JavaScript と Three.js で遊べるブラウザゲームを書き、1 つの HTML ファイルにまとめることも多く、MCP 経由で Roblox Studio の中に作ることもできます。プロンプト 1 つで 30 分のゲームから、素材をすべてゼロから作った 8 時間の FPS まで報告されています。",
      },
      {
        q: "Claude Fable 5.2 のゲームはどこで遊べますか？",
        a: "上の 28 本のうち 20 本がブラウザで遊べます。作者のサイト、Claude の artifact、Spawn などです。残りはプレイ動画のみの公開です。",
      },
      {
        q: "時間と費用はどれくらいですか？",
        a: "Tokyo Night GP はプロンプト 1 つ、30 分、20 ドルプランの週間上限の約 15%。Street Brawler II は 35 分足らず。Saltline は約 8 時間、API 価格で約 550 ドルでした。",
      },
      {
        q: "映画やゲームのキャラクターをそのまま使いますか？",
        a: "そうとは限りません。トイ・ストーリーのゲームを頼まれた Fable は、著作権のあるキャラクターの使用を断り、画風だけを再現しました。Hogwarts Royale のようなファンメイドのマッシュアップは作者自身のプロジェクトです。",
      },
      {
        q: "プロンプトは公開されていますか？",
        a: "5 人の作者が公開していて、上のカードに原文で引用しています。ほとんどは 1〜2 文の短いものです。",
      },
    ],
  },
  cta: {
    title: "最新モデルに継続的な仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、役割、目標、勤務時間、ハートビートを持つ AI 従業員に変えます。",
    button: "始める",
  },
  checked: "すべての投稿、プレイリンク、プロンプトは 2026 年 11 月 11 日に確認しました。いいね数と表示数はその時点のものです。",
  disclaimer:
    "ゲーム、カバー、プロンプトの権利は各作者にあり、各カードは元の投稿にリンクしています。カバーアートは各ゲームのスクリーンショットから生成しました。Crewmark は独立した製品で、Anthropic との提携や推薦はありません。Claude、Claude Fable、Claude Code は Anthropic の商標です。そのほかのゲームやキャラクターは各権利者に帰属します。",
};
