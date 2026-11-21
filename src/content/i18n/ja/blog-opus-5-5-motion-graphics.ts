import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// ja translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "モーションデザイナー Claude：1 文で作った 15 秒のリール",
    text: "ポートフォリオ風のリール。パーティクルの文字、「タイミングがすべて」のイージングカーブ、液体のような文字、そして 899 フレーム、8 シーン、キーフレーム 1 つと記したオレンジのエンドカード。プロンプトは中国語の 1 文。",
  },
  "pelican-riding-a-bicycle": {
    title: "自転車に乗るペリカンを、本気で",
    text: "SVG のペリカンに飽きた作者が、最も精細な一本を頼んだ作品。Opus 5.5 が Claude Code ですべてのコードを書きました。Cycles でレンダリングする Blender のシーン、12K の空を描く Rust 製の雲レンダラー、約 2 万 4000 枚の羽、スポーク 36 本・チェーン 92 コマの自転車、そして音楽まで。既製のモデル、テクスチャ、音楽は使っていません。",
  },
  "inference-startup-launch": {
    title: "Muda：推論スタートアップのローンチ動画を 1 分・約 2 ドルで",
    text: "「推論の大半は待ち時間。もう違う」。スループットが上がるにつれてリクエストのグリッドが光り、最後にブランドが登場します。動画モデルも追加ライブラリも使わず、Claude が Web ページのアニメーションを作り、Playwright と ffmpeg で録画しました。",
  },
  "typingmind-launch": {
    title: "TypingMind：外注との 4 週間のやり取りがプロンプト 1 つに",
    text: "Opus が製品ページを読んで台本を書き、ひとつのチャット欄で複数のモデルに同時に質問する様子をアニメーションにしました。プロンプト 1 つ、Claude Code で 1 時間弱、skill は入れていません。",
  },
  "notion-launch-it-picked": {
    title: "Opus が自分で選んだ製品、Notion のローンチ動画",
    text: "「よく知られた SaaS を選んでプロ品質のローンチ動画を」とだけ頼んだところ、Opus は Notion を選び、Web から本物の素材を集めて洗練された機能紹介動画に仕上げました。",
  },
  "makermap-one-shape": {
    title: "MakerMap：ひとつの図形が製品全体を変形しながら巡る",
    text: "20 秒間、ひとつの図形がサインアップ、地図のピン、地球上の 3,393 人のメーカー、マッチング、検索へと姿を変えます。ばね、カーソル、モーションブラーはすべて 1 つの HTML ファイル内の決定的な計算です。",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook をオッペンハイマー風の音楽で",
    text: "「核分裂」「核融合」の 2 章構成。無数の金色のページが見出しに集まり、カウントダウン、爆発へ。音楽は映画のテーマを手がかりに Opus が自分で作曲しました。",
  },
  "distilbook-film-strips": {
    title: "Distilbook：フィルムが渦を巻いてトンネルに",
    text: "虹色のフィルムが画面を横切り、光るトンネルへと巻き込まれていきます。参考動画のスタイルに合わせて作られ、最終版に手作業の修正はありません。",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites、月間 100 万訪問を達成",
    text: "カウンターが 100 万まで駆け上がる記念動画。4 分で一発生成、修正は 1 か所だけ。",
  },
  "famewall-mascot": {
    title: "Famewall：マスコットを自分で見つけて登場させた",
    text: "お客様の声を集めるツールのローンチ動画。Opus はサイトの SVG を調べてマスコットを見つけ、頼まれてもいないのに動画に登場させました。",
  },
  "lumail-pricing": {
    title: "Lumail：AI エージェントが操作できるメールマーケティング",
    text: "メールを開かない連絡先のドットと、膨らみ続ける請求額を見せてから本題へ。skill なし、プロンプトだけで 10 分以内に完成。",
  },
  "founder-page-launch": {
    title: "founder.page：20 秒で全機能を紹介",
    text: "テンポが速く、ブランドに合ったローンチ動画。売上と訪問者のカウンター付き。Claude Code で一発生成。",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI：開発者ツールのローンチフィルム",
    text: "Opus 5.5 と Remotion で制作。基調講演の冒頭に使える上質なローンチ動画を求める、長いブリーフ形式のプロンプトから。",
  },
  "sahi-trading-terminal": {
    title: "宇宙の一点までズームアウトするトレード端末",
    text: "一つの点からチャート、ポジション、オプションチェーンが現れ、デスクトップが宇宙の点になるまで引き、スマホ画面へ戻ってきます。一発生成。",
  },
  "aisa-one-key": {
    title: "AIsa：無数の API キーがひとつに",
    text: "大量のキー名が 1 本のオレンジ色のキーに集約されます。プロンプト 1 つ、一発生成。",
  },
  "flowdrive-showreel": {
    title: "Flowdrive：4K で配信、世界中に届ける",
    text: "ファイル配信サービスのダークで雑誌的な動画。重なる地形、光るドットの地球、独自ドメイン。skill なし、音ありで。",
  },
  "matra-apple-style": {
    title: "Matra：Apple 風のアプリ紹介動画",
    text: "Remotion と React で作った 30 秒の動画。SF Pro の書体、チタンの iPhone、実際の音声に単語単位で同期した字幕、そして音楽。",
  },
  "no-hands-labs": {
    title: "No Hands Labs：自ら育つ会社",
    text: "黒地にライムグリーンの文字とドットマトリクスの 95%。AI が運営する会社をつくるスタジオの紹介です。",
  },
  "pen-designs-launch": {
    title: "norilu：繰り返し戻ってくる仕事を任せる",
    text: "Opus が pen.dev の MCP 経由で作者のデザインを読み、落ち着いたローンチ動画を制作。率直な追加指示ひとつで音楽とテンポが大きく改善しました。",
  },
  "bento-surf": {
    title: "Bento.surf：40 秒の製品動画",
    text: "スマホ中心の遊び心あるリンクページ紹介動画。プロンプト 1 つで制作。",
  },
  quickemailverify: {
    title: "QuickEmailVerify：送信前にバウンスを防ぐ",
    text: "メール検証ツールの SaaS らしい動画。アドレスの入力からクリーンなリストまで。Opus 5.5、effort は high。",
  },
  "orbe-everyday-spending": {
    title: "Orbe：アイソメトリック 3D で見る日々の支出",
    text: "支出管理アプリの縦型動画。スーパー、ガソリンスタンド、レストランでそれぞれ支払いが記録されます。作者いわくプロンプトは 1 つではなかったとのこと。",
  },
  "winkz-pitch": {
    title: "Amazon 卸売ビジネスのピッチ動画",
    text: "ブランド向けの 15 秒のピッチ。価格保護と買い取りの数字付き。",
  },
  "queryglow-launch": {
    title: "QueryGlow：Anthropic 風のローンチ動画",
    text: "セルフホスト型データベースツールの静かなセリフ体の動画。作者はドイツ語で「Anthropic っぽく」と頼み、最後に音楽を足しました。",
  },
  "opus-1984-ad": {
    title: "Apple の「1984」に倣った Opus 5.5 の広告",
    text: "ハンマーを持って走る人、並ぶ灰色の群衆、スクリーンの巨大な顔。すべてコードだけで作られ、Opus は音量まで確認しました。",
  },
  "paybox-brand-sting": {
    title: "PayBox：ロゴだけからブランドスティング",
    text: "エージェントがロゴを読み取り、会社を調べ、シナリオを書いて、10 秒のスティングを一度で作りました。",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm：ローポリの破片で組み上がるロゴ",
    text: "ワイヤーフレームのロゴが破片で一枚ずつ埋まり、アプリアイコンが現れ、名前がタイプされます。効果音付き。",
  },
  "opus-retro-launch": {
    title: "レトロフューチャーな Opus 5.5 ローンチ動画",
    text: "光るストライプの頭部にフィルムグレインと CRT 効果。プロンプト 1 つと参考画像 1 枚から。",
  },
  "psychedelic-showreel": {
    title: "Phosphene：サイケデリックなモーション習作",
    text: "巨大な目、回転するトンネル、万華鏡。映像も音も Opus が effort xhigh で制作し、レンダリング 90 分、合計 14 ドル。",
  },
  "poster-breaks-out": {
    title: "自分の枠を突き破るポスター",
    text: "赤と青の大きな文字がポスターの枠を突き破ります。サウンドトラックも Opus が作曲し、すべてのヒットをビートに合わせました。",
  },
  "i-can": {
    title: "I CAN：ぼかす、ループする、描く、群れる、光を曲げる",
    text: "書かれたとおりのことをする太字のタイトルカードの連続。プロンプトは 1 行だけ。",
  },
  "light-speed-earth": {
    title: "地球の 1 秒",
    text: "指示ゼロで、Opus は自分で題材を選びました。光が地球を回ることから 4 人の赤ちゃんの誕生まで、1 秒の間に起きることすべて。",
  },
  "no-samples-showreel": {
    title: "音楽までゼロから合成したショーリール",
    text: "作者はモーションデザインの知識ゼロ。Opus が全フレームのコードを書き、サンプルなしで音楽を合成しました。Cursor で制作。",
  },
  "easing-explained": {
    title: "I make things move：モーションデザイナー Claude",
    text: "回転しスナップする文字、イージングカーブの解説、エンドカード。プロンプトは中国語の 1 文。",
  },
  "portfolio-film": {
    title: "デザイナーのポートフォリオを映像に",
    text: "Opus は作者のポートフォリオの全画面とオープンソースの仕事を見て、力強いリールを一発で作りました。",
  },
  "it-thinks-in-curves": {
    title: "リズム、文字、ループ：曲線で考える",
    text: "色面の文字が正方形でループし、ベジェ曲線がその場で描かれます。キーフレームではなく数式を書く、という Opus の言葉どおりに。",
  },
  "who-are-you-opus": {
    title: "Hi, I'm Claude：Opus 5.5 の自己紹介",
    text: "10 秒の文字アニメーション。「すべての言葉を読む」「よく考える」「率直に言う」「一緒に作る」。",
  },
  "madhav-about-me": {
    title: "頼んだ本人についての 10 秒動画",
    text: "自分について知っていることで動画を、と頼まれた Opus は、作者の仕事を描くパーティクル動画を作りました。",
  },
  "recursion-nine-styles": {
    title: "9 つのジャンルで説明する再帰",
    text: "説明が一段深くなるたびにスタイルが変わり、レトロゲームからフィルムノワールまで。本物の一発生成で、場面は React と SVG、音楽と効果音は Python で合成。",
  },
  "negroni-recipe": {
    title: "ネグローニを一手順ずつ",
    text: "材料を一つずつグラスに注いでいくレシピ解説。画像 1 枚から HTML でレンダリング。",
  },
  "history-of-ai": {
    title: "AI の 83 年を 3 分未満で",
    text: "調査、台本、アニメーション、実際の録音まで。5,160 フレームすべてを Claude がプロンプト 1 つからコードで生成しました。",
  },
  "how-llms-work-fable": {
    title: "LLM の仕組みをモーショングラフィックスで",
    text: "トークン、埋め込み、アテンション、Transformer の層をそれぞれ 1 シーンで。Matthew Berman の Fable 5.2 テストより。",
  },
  "white-russian-recipe": {
    title: "手描き風のホワイトルシアン",
    text: "スケッチ 1 枚とプロンプト 1 つから、約 25 分後に 1080p の MP4。SVG と素の JavaScript による 1 つの HTML ファイルで、アニメーションライブラリは不使用。",
  },
};

const labels: MotionLabels = {
  likes: "いいね",
  views: "表示",
  prompt: "プロンプトを見る（原文）",
  alt: (title) => `動画の一場面：${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Opus 5.5 のモーショングラフィックス：43 の作例とプロンプト",
    description:
      "Claude Opus 5.5 で作られたモーショングラフィックス動画。ローンチ動画、ロゴアニメーション、キネティックタイポグラフィ、解説動画を、作者のプロンプト、いいね数、表示数とともに紹介します。みんなが真似したプロンプトと Claude Code での作り方も。",
  },
  breadcrumb: "Opus 5.5 のモーショングラフィックス",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "ブログ · Claude Opus 5.5",
    title: "Opus 5.5 のモーショングラフィックス：43 の作例とその裏のプロンプト",
    lead: "Claude Opus 5.5 の登場以来、多くの人がモーショングラフィックスを作らせて投稿しています。ローンチ動画、ロゴアニメーション、キネティックタイポグラフィ、レシピ解説。どれも Opus がコードを書いて MP4 にレンダリングしたものです。すべて見たうえで優れた 43 本を選び、作者のプロンプトを添えました。",
    cta: "始める",
    secondary: "作例を見る",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Claude はどうやってモーショングラフィックス動画を作るのか",
      text: [
        "動画モデルは使いません。Opus はアニメーションをコード（SVG と JavaScript の Web ページ、React や [Remotion](https://www.remotion.dev) のプロジェクト、ときには Three.js）として書き、ヘッドレスブラウザで 1 フレームずつ進めて、ffmpeg で動画にします。音楽や効果音もコードで合成します。",
        "各フレームが時間の関数なので、ループはぴったりつながり、音は狙ったフレームに正確に乗ります。文字もくっきり正確で、製品名、価格、UI の文言が崩れません。",
      ],
      points: [
        "Deedy Das のローンチ動画は JavaScript、Playwright、ffmpeg だけで作られ、API の費用は約 2 ドルでした。",
        "Ethan Mollick の再帰の動画は、すべての場面を React と SVG で描き、音楽を Python で合成しています。",
        "Sarutobi Sasuke のカクテル解説は SVG と素の JavaScript の HTML ファイル 1 つで、アニメーションライブラリなし、約 25 分で完成しました。",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code での作り方",
      steps: [
        {
          title: "空のフォルダで Claude Code を Opus 5.5 で起動する",
          text: "skill もプラグインも入れなかったという作者が何人もいます。Opus が自分でツールを選び、必要なものを入れます。",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "プロンプトと自分の製品を渡す",
          text: "サイトの URL を添えると、ページを読んで台本まで自分で書きます。ロゴ、スクリーンショット、参考動画があると見た目を合わせやすくなります。",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "レンダリングさせる",
          text: "長さと effort によって数分から 1 時間半ほど。MP4 の保存場所を教えてもらうよう頼んでおくと便利です。",
        },
        {
          title: "見て、ダメなところをはっきり伝える",
          text: "Sacha Arbonel の最初の版はテンポが速すぎ、音楽も弱いものでしたが、率直な追加指示ひとつで大きく良くなりました。テンポを落とす、著作権フリーの曲にする、縦横比を変える、などを頼めます。",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "みんなが真似したプロンプト",
      text: [`下の動画の多くは、X で広まった同じ短いプロンプトから始まっています：\`${basePrompt}\`。作者たちがよく付け足していたもの：`],
      points: [
        "製品やサイト：「for <あなたの URL>」、または「まずページを見て製品を理解し、動画の内容は自分で書いて」。",
        "目指す方向：「自分のショーリールのように」「全力で（go all out）」「上質な開発者ツールのローンチフィルム」「Apple 風」。",
        "雰囲気や音：「サイケデリックで催眠的に」、または「オッペンハイマーのテーマ曲を参考に、ただし自分で作曲して」。",
        "禁止事項：「AI 製だとすぐわかる、隅の枠や小さな文字は避けて」。",
        "参考素材：ロゴ、画像 1 枚、手描きのスケッチ、真似したい別の動画。",
      ],
    },
    ...motionSections(
      "ja",
      text,
      labels,
      {
        launch: { title: "製品のローンチ動画", text: "実在の製品のローンチ動画、記念動画、ピッチ。多くはプロンプト 1 つから。" },
        brand: { title: "ロゴアニメーションとブランド動画", text: "ロゴ、参考画像、あるいは有名な広告から作ったスティングと広告。" },
        showreel: { title: "ショーリールとキネティックタイポグラフィ", text: "モーションデザイナーとしての腕前を見せる Opus。文字、ループ、純粋な動き。" },
        explainer: { title: "解説動画", text: "レシピ、歴史、コンピュータサイエンスを動きで説明します。" },
      },
      "元の投稿を見る",
    ),
    {
      kind: "text",
      id: "more",
      title: "さらに動画を見る",
      text: [
        "1 本につきスクリーンショット 3 枚とすべてのプロンプトを載せた全リストは GitHub にあります：[awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video)。",
        "Claude の最新モデルで作られた 3D の世界や短編は、GitHub の [Claude Fable 5.2 動画コレクション](https://github.com/ummydev/awesome-claude-fable-videos) へ。新モデルの変更点や Opus 5.5 との比較は [Claude Fable 5.2 ガイド](/blog/claude-fable-5-2) をどうぞ。",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code で Claude Opus 5.5 を使ってモーショングラフィックス動画を作る" },
  mid: {
    title: "リリースのたびにローンチ動画がほしいなら",
    text: "Crewmark の従業員はあなた自身の Claude Code 上で動きます。リリースノートを渡せば、ローンチ作業の間に動画をレンダリングしてくれます。",
    button: "始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Opus 5.5 は動画を作れますか？",
        a: "作れます。コードを書いて作ります。アニメーションを Web ページや Remotion のプロジェクトとして組み、1 フレームずつ MP4 にレンダリングし、音楽も自分で合成します。動画モデルのように映像を生成するわけではないので、文字、数字、UI がくっきり出ます。",
      },
      {
        q: "skill、Remotion、After Effects は必要ですか？",
        a: "必要ありません。skill なしの普通の Claude Code を使ったという作者が何人もいます。ツールは Opus が自分で選び、たいていは Playwright かヘッドレス Chrome と ffmpeg、ときどき Remotion です。",
      },
      {
        q: "時間と費用はどれくらいですか？",
        a: "約 1 分・2 ドル（Deedy Das）から、effort xhigh でレンダリング 1 時間半・14 ドル（monokern）まで。多くの作者はプロンプト 1 つで数分から 1 時間ほどと報告しています。",
      },
      {
        q: "音楽はどこから？",
        a: "Opus がたいてい Python か JavaScript で作曲・合成し、ヒットをカットに合わせます。著作権フリーの曲を使うよう頼んだ作者もいます。",
      },
      {
        q: "これらのプロンプトは使っていいですか？",
        a: "プロンプトは作者本人のもので、投稿から引用しています。自分の製品で試してみてください。動画そのものの権利は作者にあります。",
      },
    ],
  },
  cta: {
    title: "動画づくりは AI 従業員に。",
    text: "Crewmark は Claude Code と Codex のセッションを、役割、目標、勤務時間、ハートビートを持つ AI 従業員に変えます。",
    button: "始める",
  },
  checked: "いいね数、表示数、プロンプトは 2026 年 11 月 12 日に X と小紅書（RED）の元の投稿で 1 件ずつ確認しました。",
  disclaimer:
    "動画とプロンプトの権利は各作者にあり、各カードは元の投稿にリンクしています。Crewmark は独立した製品で、Anthropic との提携や推薦はありません。Claude、Claude Opus、Claude Fable、Claude Code は Anthropic の商標です。",
};
