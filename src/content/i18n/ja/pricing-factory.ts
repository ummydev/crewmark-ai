import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/factory; the English master is src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI の料金：Free、Pro $20、Plus、Max、Teams",
    description:
      "Factory AI の料金：推論を自分で用意すれば Free、Pro は月 $20、Plus は $100、Max は $200、そして Teams。レート制限、Extra Usage、トークンの課金方法。",
  },
  breadcrumb: "Factory の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · Factory",
    title: "Factory AI の料金：Droid のプラン、利用上限、トークン",
    lead: "Factory が提供する Droids は、Factory App、Droid CLI、CI、Factory がホストするクラウドコンピューターで動くコーディングエージェントです。Free プランは、推論を自分で用意すれば $0 です。ChatGPT、GitHub Copilot、OpenRouter でサインインするか、自分の API キーを接続します。有料プランは 1 人あたり月 $20 の Pro から月 $200 の Max まであり、Teams はチームあたり月 $60 に 1 人あたり月 $40 が加わります。有料プランにはローリング方式のレート制限があり、Extra Usage はその上に追加する前払いのクレジットです。このページでは、プラン、利用量とトークンの課金方法、そして Devin、Claude Code、Codex、OpenCode との価格比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Factory のプランと料金",
      text: [
        "[factory.com](https://factory.com) の料金ページと Factory の料金に関するドキュメントをもとに、2026年11月13日に確認しました。価格は米ドルで、掲載どおり月額（\"/mo\"）です。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "Free",
          "1 人あたり月 $0",
          "推論は自分で用意：ChatGPT、GitHub Copilot、OpenRouter でサインインするか、自分の API キーやカスタムエンドポイントを接続",
        ],
        [
          "Pro",
          "1 人あたり月 $20",
          "デスクトップアプリ、CLI、SDK、すべてのモデルが利用可能。直近 5 時間、7 日間、30 日間のローリング方式のレート制限",
        ],
        ["Plus", "1 人あたり月 $100", "Pro の約 5 倍の利用量。レート制限の方式は同じ"],
        ["Max", "1 人あたり月 $200", "Pro の約 10 倍の利用量。レート制限の方式は同じ"],
        ["Teams", "チームあたり月 $60 + 1 人あたり月 $40", "最大 10 シート"],
        ["Business と Enterprise", "営業に問い合わせ", "Enterprise ではオンプレミスでのデプロイも選択可能"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Factory で実際にかかる費用",
      points: [
        "Free の推論：Free プランは、自分で用意した推論で動きます。ChatGPT、GitHub Copilot、OpenRouter のサインイン、または自分の API キーやカスタムエンドポイントです。トークンは、その提供元やプランで課金されます。",
        "有料プランの Standard Usage：Pro、Plus、Max には、それぞれ直近 5 時間、7 日間、30 日間のローリング方式のレート制限があります。Plus は Pro の約 5 倍、Max は約 10 倍の利用量です。使わなかった Standard Usage は繰り越されません。",
        "Extra Usage：さらに使う分は Extra Usage から支払います。最低 $10 からの前払いクレジットで、有効期限はありません。",
        "Missions には Extra Usage が必要：機能やマイルストーンを計画する Missions は、Extra Usage を有効にしておく必要があり、レート制限に達すると一時停止します。",
        "Workstreams はトークンを多く使う：Pro、Plus、Max、Teams で使える Workstreams（ベータ）は、単一のセッションよりも多くのトークンを使います。Business と Enterprise ではまだ使えません。",
        "モデル：Factory は「GPT-5、Claude Opus と Sonnet、Gemini の最新版を含む、主要なフロンティアモデルとオープンウェイトモデルのすべて」（\"all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini\"）、オープンウェイトモデルをまとめた「Droid Core」、そして自分の API キーやローカルモデル（BYOK）を挙げています。",
        "シート：Pro、Plus、Max は 1 人あたりの料金です。Teams は 10 シートが上限で、Business と Enterprise は営業経由です。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory と他のコーディングエージェントの料金比較",
      text: [
        "各製品の料金ページに載っている最低価格で、2026年11月13日に確認しました。価格は米ドルです。",
        "並べて比較：[Factory vs Claude Code](/compare/factory-vs-claude-code)。ほかの選択肢は [Factory の代替ツール](/alternatives/factory) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        ["Factory", "推論を自分で用意すれば Free $0、Pro 月 $20", "あり：推論を自分で用意すれば Free"],
        ["[Devin](/pricing/devin)", "Free $0、Pro 月 $20", "あり：少なめの利用枠付きの Free プラン"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Claude Pro に含まれる：月 $20、年払いなら月 $17",
          "なし：Claude Free には含まれない。従量課金の API クレジットでも利用可",
        ],
        [
          "Codex",
          "ChatGPT Plus（月 $20）に含まれる。または OpenAI の API キーで API 料金",
          "ChatGPT Free（$0）のデスクトップアプリに GPT-6 Luna が「順次提供」（\"subject to rollout\"）として掲載",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "エージェントは無料。OpenCode Go 月 $10、Go Plus 月 $40",
          "あり：エージェント（MIT）と、1 日のリクエスト上限付きの無料モデル",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "今のサブスクリプションはそのままに。エージェントに職種とボードを。",
      text: [
        "Factory は、プランと利用上限付きで独自のエージェントを販売しています。Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、KPI、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。エージェントの利用分は、すでにお支払いの Claude や ChatGPT のサブスクリプションのままで、トークン代が別に請求されることはありません。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees) から選びます。たとえばソフトウェアエンジニア、SEO スペシャリスト、データアナリストなどです。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) のほか、セットアップ付きの仕事の例を [Claude Code の活用例](/use-cases/claude-code) と [Codex の活用例](/use-cases/codex) で紹介しています。",
        },
      ],
    },
  ],
  mid: {
    title: "Claude や ChatGPT にすでに払っていますか？",
    text: "Crewmark は、あなたの Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Factory AI の料金に関するよくある質問",
    items: [
      {
        q: "Factory AI は無料ですか？",
        a: "推論を自分で用意すれば無料です。Free プランは 1 人あたり $0 で、ChatGPT、GitHub Copilot、OpenRouter でサインインするか、自分の API キーやカスタムエンドポイントを接続します。",
      },
      {
        q: "Factory AI の月額料金はいくらですか？",
        a: "1 人あたり、Pro は月 $20、Plus は月 $100、Max は月 $200 です。Teams はチームあたり月 $60 に 1 人あたり月 $40 が加わり、最大 10 シートまでです。Business と Enterprise は営業経由の料金です。",
      },
      {
        q: "Factory AI の料金体系は？",
        a: "1 人ごとのプランに、直近 5 時間、7 日間、30 日間のローリング方式のレート制限がかかる Standard Usage が付き、任意で Extra Usage を追加できます。Extra Usage は最低 $10 からの前払いクレジットで、有効期限はありません。使わなかった Standard Usage は繰り越されません。",
      },
      {
        q: "Factory AI はトークンにどう課金しますか？",
        a: "Free では、自分で用意したアカウントや API キーの側でトークンが課金されます。Pro、Plus、Max では、モデルの利用はプランの Standard Usage とそのレート制限の中で数えられ、さらに使うための前払いクレジットが Extra Usage です。Workstreams は単一のセッションよりも多くのトークンを使います。",
      },
      {
        q: "Factory AI にエンタープライズ向けの料金はありますか？",
        a: "Business と Enterprise は営業経由で、価格は掲載されていません。Enterprise ではオンプレミスでのデプロイを選べます。Teams は月 $60 に 1 人あたり $40 が加わる料金で、10 シートが上限です。",
      },
      {
        q: "Factory AI はオープンソースですか？",
        a: "いいえ。Droid CLI と Factory App のソースコードやオープンソースライセンスは公開されていません。github.com/Factory-AI/factory にあるのは README とドキュメントです。オープンソースの選択肢は [Factory の代替ツール](/alternatives/factory) で紹介しています。",
      },
    ],
  },
  cta: {
    title: "料金を比べたら、エージェントに仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、KPI、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に factory.com/pricing と Factory の料金に関するドキュメントで確認しました。他製品の料金は、同じ日に各製品の料金ページで確認したものです。",
  disclaimer:
    "Crewmark は独立した製品であり、Factory やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
