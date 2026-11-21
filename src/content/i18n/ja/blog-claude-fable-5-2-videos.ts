import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// ja translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "姿を変える構成主義のチャット画面",
    text: "AI との恋愛チャットアプリの画面を構成主義のスタイルで作り直したもの。ツバメ、月相、人ならざる目、らせん階段、チャット画面は測量図や手紙のよう。",
  },
  "art-history-cat": {
    title: "プロンプト 1 つで描く 4 万年の美術史",
    text: "同じ人と猫を時代ごとに描き直し、古代エジプトの壁画からゴッホ、モンドリアン、ピクセルアート、2026 年まで。約 4,900 行のコードで、画像モデルは不使用。",
  },
  "crystal-bud-flight": {
    title: "氷の花のつぼみから、紫の花畑の上へ",
    text: "霜をまとったつぼみのあと、カメラは草原、雪山、紫の花畑の上を低く飛んでいきます。制作は 30 分だそうです。",
  },
  "blender-island-rebuild": {
    title: "参考画像から Blender で作り直した島",
    text: "コードだけで Blender を操作：130 個のオブジェクト、114 万ポリゴン、テクスチャなし、回る水車と泳ぐ魚。参考に写っていない部分は Fable が補いました。",
  },
  "locomotive-robot-anime": {
    title: "90 秒のアニメ短編：蒸気機関車がロボットに変形",
    text: "プロンプト 1 つで手描き風の 2D アニメ。Fable が Python で Blender に全カットを組んでレンダリングし、各フレームに線を入れ、音楽も numpy で一音ずつ書きました。",
  },
  "geonosis-battle-blender": {
    title: "Blender で作ったスター・ウォーズの戦い",
    text: "作者が新モデルごとに試す Blender ベンチマーク。闘技場に千体を超えるドロイド、ガンシップ、レーザーの撃ち合い。プロンプト 1 つ、レンダリング 20 分を含めて 1.5 時間。",
  },
  "laundry-in-the-sun": {
    title: "午後の光に揺れる洗濯物",
    text: "陽の当たる野原で、物干しの服がはためくのを 2 人が眺めています。布のしわ、布を透ける光、カメラ、音まですべてコードです。",
  },
  "fushimi-inari-travel-ad": {
    title: "秋の伏見稲荷の旅行広告",
    text: "京都の神社、赤い鳥居のトンネルを駆け抜ける映像、夕暮れのタイトルカードまで 20 秒。音楽も含めてすべてコードで。",
  },
  "rainy-tokyo-alley": {
    title: "動画モデルなしで作った雨の東京の路地",
    text: "雨、水たまり、ネオンの映り込み、本当に映るカーブミラー、読める日本語の看板。Higgsfield による投稿。",
  },
  "pet-robot": {
    title: "家で作れそうなペットロボット",
    text: "アパートで作れるロボットを、と頼んだ Matt Shumer に返ってきたのは、目を覚まし、腕を振り、ボールで遊ぶ丸いペットロボットでした。",
  },
  "lighthouse-in-a-storm": {
    title: "嵐の中の灯台",
    text: "うねる夜の海を光がなめ、やがて月のまわりの雲が晴れていきます。effort High、音付き。",
  },
  "piano-boy-short": {
    title: "生成画像ゼロの 46 秒の短編",
    text: "ピアノを弾く少年。すべての絵とすべての音が Fable の書いたコードから生まれ、画像モデルも動画モデルも使っていません。",
  },
  "ufo-area-51": {
    title: "エリア 51 に UFO が着陸",
    text: "1 文のプロンプトから three.js と Remotion で作った 5 カット・30 秒の映像。モデルの読み込みもテクスチャも素材音源もなし、4K でレンダリング。",
  },
  "spider-web-logo": {
    title: "クモが巣に Claude のロゴを織り込む",
    text: "月明かりの下、クモが一歩ずつ巣を張り、夜明けまでに中央へ Claude のロゴを編み込みます。",
  },
  istanbul: {
    title: "プロンプトから作ったイスタンブール",
    text: "空から見た街全体。アヤソフィア、金角湾、ボスポラス海峡を渡るフェリー、夕暮れのスカイライン。Fable 5.2 Max、約 46 ドル。",
  },
  "auric-voyage": {
    title: "Auric Voyage：雲海の上の黄金の船",
    text: "ボリューメトリックな雲の上を進む黄金の帆船。昼夜が巡り、甲板にも上がれます。Three.js のみ、約 38 分・17 ドル。",
  },
  "pirate-ship": {
    title: "夕日の中を進む海賊船",
    text: "航跡、灯りのともる船室の窓、張った帆の 3 本マストの帆船。一発生成、約 1.5 時間・3,500 万トークン。",
  },
  "voxel-pagoda": {
    title: "細部まで作り込まれたボクセルの五重塔",
    text: "浮島の上に五重塔、桜、池、夜になると灯る提灯。",
  },
  "voxel-paris-1888": {
    title: "1888 年のパリ、建設中のエッフェル塔",
    text: "浮かぶボクセルの島で、クレーンが鉄骨を吊り上げ、リベット打ちの火花が散り、セーヌ川を蒸気船が進みます。長く正確なプロンプトから一発で。",
  },
  "night-tokyo-ramen-stall": {
    title: "雨の夜、東京のラーメン屋台",
    text: "PROMPT.md 1 つ、空のフォルダ、手作業の修正なしで 20 分・7 ドル。T キーを押すと雨がゆっくり雪に変わります。",
  },
  "floating-pixel-island": {
    title: "浮かぶピクセルの島",
    text: "魔法使いの塔、桜の木、虹、飛行船のあるピクセルアートの浮島がループします。effort extra high、プロンプト 1 つ。",
  },
  "talking-village": {
    title: "住人みんなが考えるヨーロッパの村",
    text: "住人が AI で考え、互いに話す 3D の村。Matthew Berman による Fable 5.2 の検証から。",
  },
  "lighthouse-at-sunset": {
    title: "夕暮れのフォトリアルな灯台",
    text: "作者がいつも使う灯台のプロンプトを Fable 5.2 で。縞模様の灯台、回る光、穏やかな海。",
  },
  "abyssal-landing-page": {
    title: "Abyssal：海の底へスクロールしていくランディングページ",
    text: "月明かりの海面から、光るクラゲを抜けて、提灯に照らされた街と闇の中の巨大な目までスクロールで降りていきます。effort は low。",
  },
  "liquid-glass-type": {
    title: "ガラス、琥珀、液体金属のタイポグラフィ",
    text: "ガラス、琥珀、液体金属のかたまりが巨大な見出し文字を押し分けて進み、素材ごとに配色が変わります。",
  },
  "car-configurator": {
    title: "effort medium で作ったカーコンフィギュレーター",
    text: "赤いセダンを回り込んで眺め、塗装とホイールを変え、光の筋が流れる発進ビューへ。12 分。",
  },
  "doomsday-earth": {
    title: "Doomsday Earth：地球を滅ぼす 8 つの方法",
    text: "NASA の実際の地図と街の灯りでできた地球と、小惑星衝突からリンゴのように地球を食べる神まで 8 通りの終わり方。初回で完成。",
  },
  "virus-capsid": {
    title: "自ら組み上がるウイルスの殻",
    text: "HTML ファイル 1 つで、420 個のタンパク質サブユニットが T=7 の殻を作ります。まず 12 個の五量体、次に 60 個の六量体と、本物のウイルスと同じ幾何学です。",
  },
  "drained-ocean": {
    title: "海水を抜いた大西洋",
    text: "NOAA の実際の海底データによる 3D フライオーバー。海が引くと数秒でイギリスがヨーロッパとつながり、大西洋中央海嶺が現れます。",
  },
  "deep-sea-dive": {
    title: "海面から水深 40 メートルへ",
    text: "深さに応じて日の光、魚の群れ、ライトの光が変わり、横には深度計。すべてコードです。",
  },
  "pocket-black-hole": {
    title: "ポケットサイズのブラックホール",
    text: "バズるものを、と頼まれた Fable は、重力レンズで曲がる光る降着円盤を持つ、操作できるブラックホールを作りました。",
  },
  "galaxy-dive": {
    title: "渦巻銀河の中へ飛び込む",
    text: "渦巻銀河の外から中へ、光年のカウンターを減らしながら飛んでいきます。制作は約 20 分。",
  },
};

const labels: VideoLabels = {
  likes: "いいね",
  views: "表示",
  prompt: "プロンプトを見る（作者の原文）",
  open: "ライブで開く",
  alt: (title) => `動画の一場面：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 の動画：コードで作った 32 本の映像と 3D シーン",
    description:
      "Claude Fable 5.2 で作られた動画。Blender でレンダリングしたアニメ短編、空から見たイスタンブール、雲海の上の黄金の船、ランディングページや科学ビジュアル。動画モデルは使わず、Fable がコードを書きます。作者、いいね数、プロンプト付き。",
  },
  breadcrumb: "Claude Fable 5.2 の動画",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "ブログ · Claude Fable 5.2",
    title: "Claude Fable 5.2 の動画：すべてコードで作った 32 本の映像と 3D シーン",
    lead: "Claude Fable 5.2 は動画モデルのように映像を生成しません。Three.js、WebGL、Remotion、Blender の Python でコードを書き、そのコードが描いたものをレンダリングします。公開直後の数日に投稿された中から優れた 32 本を、作者、数字、公開されていればプロンプトとともに紹介します。",
    cta: "始める",
    secondary: "見てみる",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Fable 5.2 はどうやって動画を作るのか",
      text: [
        "Fable 5.2 で動画を生成するとは、シーンや短編を頼んで、モデル、カメラ、ライティング、たいていは音楽まで、まるごと 1 つのプログラムとして組ませることです。MP4 にレンダリングする作者もいれば、歩き回れる Web ページとして公開する作者もいます。",
      ],
      points: [
        "0kncn の 90 秒のアニメは、Python で Blender にカットを一つずつ組み、音楽は numpy で書かれました。",
        "Marcel の黄金の船は Blender も外部モデルも使わない純粋な Three.js。effort medium で約 38 分・17 ドル。",
        "いちばん多くのいいねを集めた Peter Gostev のイスタンブールは、Fable 5.2 Max で約 46 ドル。",
        "Dante の UFO の映像は 1 文のプロンプトから、three.js と Remotion で、テクスチャも素材音源もなしに作られました。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code での作り方",
      steps: [
        {
          title: "Claude Code を Fable 5.2 で起動する",
          text: "Fable 5.2 には Pro 以上のプランか API が必要です。共有できる Web ページなら空のフォルダで十分。Blender を使うなら、Fable が Python で操作できるよう Blender をインストールしておきます。",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "シーンを、あるいは短編をカットごとに説明する",
          text: "1 文で構いません（\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"）。下のパリ 1888 のような長く正確なプロンプトなら、より細かく制御できます。",
        },
        {
          title: "レンダリングさせるか、ライブのページとして残す",
          text: "解像度とフレームレートを指定した MP4 を頼むことも、ブラウザで開いて共有できる 1 つの HTML ページを頼むこともできます。",
        },
      ],
    },
    ...videoSections(
      "ja",
      text,
      labels,
      {
        film: { title: "短編とアニメーション", text: "カメラワーク、物語、音楽のある短い映像。" },
        world: { title: "3D の世界とジオラマ", text: "街、船、島。いくつかは中を歩き回れるライブのページです。" },
        web: { title: "Web サイトとインタラクティブなページ", text: "スクロールやクリックで動くランディングページや製品ページ。" },
        science: { title: "科学・宇宙・データ", text: "銀河、ブラックホール、ウイルス、海底。実データを使ったものも多くあります。" },
      },
      "元の投稿を見る",
    ),
    {
      kind: "text",
      id: "more",
      title: "Claude の作品をもっと見る",
      text: [
        "1 本につきスクリーンショット 3 枚付きの全リストは GitHub に：[awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos)。Fable 5.2 のゲームは [Claude Fable 5.2 のゲーム](/blog/claude-fable-5-2-games)、Opus 5.5 のローンチ動画とモーショングラフィックスは [Opus 5.5 のモーショングラフィックス](/blog/opus-5-5-motion-graphics) へ。モデル自体の変更点は [Claude Fable 5.2 ガイド](/blog/claude-fable-5-2) をどうぞ。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code で Claude Fable 5.2 を使って動画を作る" },
  mid: {
    title: "Fable 5.2 に継続的な仕事を任せるなら",
    text: "Crewmark の従業員はあなた自身の Claude Code 上で動き、ハートビートで起きてボードから次の課題を取ります。",
    button: "始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Fable 5.2 は動画を生成できますか？",
        a: "動画モデルと同じ方法ではありません。Three.js、WebGL、Remotion、Blender で各フレームを描くコードを書き、MP4 にレンダリングするか、ブラウザでそのまま動かします。だから文字やロゴ、細部がくっきりします。",
      },
      {
        q: "どんなツールを使いますか？",
        a: "いちばん多いのは 1 つの HTML ファイルに収めた Three.js や WebGL です。映画風の編集に Remotion を使ったり、Python で Blender を操作したり、Python や numpy で音楽を作ったりした例もあります。",
      },
      {
        q: "時間と費用はどれくらいですか？",
        a: "約 20 分・7 ドル（東京のラーメン屋台）から、1.5 時間・3,500 万トークン（海賊船）、Fable 5.2 Max で約 46 ドル（イスタンブール）まで。",
      },
      {
        q: "これらのシーンを自分で開けますか？",
        a: "4 本はカードにライブのページへのリンクがあります。黄金の船、海賊船、ブラックホール、銀河です。残りは動画での公開です。",
      },
      {
        q: "動画には Fable 5.2 と Opus 5.5 のどちら？",
        a: "どちらも使われています。投稿を見る限り、Fable 5.2 は 3D の世界や短編に、Opus 5.5 は製品のローンチ動画やモーショングラフィックスに多く使われていて、後者は [Opus 5.5 のモーショングラフィックス](/blog/opus-5-5-motion-graphics) にまとめています。",
      },
    ],
  },
  cta: {
    title: "最新モデルに継続的な仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、役割、目標、勤務時間、ハートビートを持つ AI 従業員に変えます。",
    button: "始める",
  },
  checked: "すべての投稿とプロンプトは 2026 年 11 月 11 日と 12 日に X と小紅書（RED）で確認しました。いいね数と表示数はその時点のものです。",
  disclaimer:
    "動画とプロンプトの権利は各作者にあり、各カードは元の投稿にリンクしています。Crewmark は独立した製品で、Anthropic との提携や推薦はありません。Claude、Claude Fable、Claude Opus、Claude Code は Anthropic の商標です。",
};
