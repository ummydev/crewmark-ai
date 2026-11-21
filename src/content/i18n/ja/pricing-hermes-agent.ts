import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/hermes-agent; the English master is src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent の料金：無料のエージェントと Nous Portal のプラン",
    description:
      "Hermes Agent は MIT ライセンスで無料。任意の Nous Portal は月 $0、$20、$100、$200。各プランに含まれるものと、ほかにかかる費用を解説します。",
  },
  breadcrumb: "Hermes Agent の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · Nous Research",
    title: "Hermes Agent の料金：無料のエージェントと、任意の Nous Portal サブスクリプション",
    lead: "Hermes Agent は無料です。Nous Research が MIT ライセンスで公開しており、支払うのはモデルプロバイダーへの料金です。Nous からモデルを使いたい場合は、任意の Nous Portal に 4 つのプランがあります。$0 の Free、月 $20 の Plus、月 $100 の Super、月 $200 の Ultra で、有料プランにはクラウドでホストされるエージェントが付きます。各プランに含まれるもの、ほかにかかる費用、そして OpenClaw、OpenCode、OpenWorker、Grok Bot との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "プランを見る",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Hermes Agent と Nous Portal のプラン",
      text: [
        "hermes-agent.nousresearch.com と portal.nousresearch.com をもとに、2026年11月13日に確認しました。価格は月額で、年額の掲載はありません。エージェントを使うのに Nous Portal のプランは必要ありません。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "Hermes Agent",
          "無料、MIT ライセンス",
          "エージェント本体：ターミナル UI、デスクトップアプリ、1 つのゲートウェイ経由のチャットアプリ、スキル、メモリ、cron スケジューラー、Bot Mode。モデルプロバイダーは自由に選べる",
        ],
        ["Nous Portal Free", "$0", "従量課金。無料モデルのみ"],
        [
          "Nous Portal Plus",
          "月 $20",
          "無料モデルと有料モデル。クラウドでホストされるエージェント 1 つ（4 GB RAM、25 GB ディスク）",
        ],
        [
          "Nous Portal Super",
          "月 $100",
          "Plus の 5 倍の利用量。無料モデルと有料モデル。クラウドでホストされるエージェント 1 つ（4 GB RAM、100 GB ディスク）",
        ],
        [
          "Nous Portal Ultra",
          "月 $200",
          "Plus の 10 倍の利用量。無料モデルと有料モデル。クラウドでホストされるエージェント 1 つ（8 GB RAM、100 GB ディスク）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Hermes Agent を動かすのに実際にかかる費用",
      points: [
        "モデルプロバイダー：プロバイダーは `hermes model` で切り替えます。Nous Portal、OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、Ollama Cloud、LM Studio、カスタムエンドポイントなどです。API キーを使う場合は、そのプロバイダーから請求されます。",
        "Claude のサブスクリプションが使えるのは、追加利用分を購入した Claude Max だけです。ドキュメントには「Claude Pro の契約者はこの方法を使えません」（\"Claude Pro subscribers cannot use this path\"）とあり、Pro では API キーが必要です。",
        "ChatGPT/Codex のサインインはデバイスコードで行います。どの ChatGPT プランで使えるか、利用分がプランの上限にどう数えられるかは「現在ドキュメント化されていません」（\"not currently documented.\"）。",
        "動かす場所：Hermes Agent はローカルにも、サーバーにもインストールできます。README には「$5 の VPS、GPU クラスター、サーバーレスのインフラ」（\"a $5 VPS, a GPU cluster, or serverless infrastructure\"）とあります。ターミナルのバックエンドは、ローカル、Docker、SSH、Modal、Daytona、Vercel Sandbox の 6 つです。",
        "または Nous Portal の有料プラン：クラウドでホストされるエージェントが 1 つ付きます（サイズは上の表のとおり）。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent と類似エージェントの料金比較",
      text: [
        "各製品のサイトに載っている価格で、2026年11月13日に確認しました。",
        "並べて比較：[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)、[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)、[Multica vs Hermes Agent](/compare/multica-vs-hermes-agent)。ほかの選択肢は [Hermes Agent の代替ツール](/alternatives/hermes-agent) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        [
          "Hermes Agent",
          "無料。任意の Nous Portal Plus は月 $20",
          "あり：エージェント（MIT）と、$0 の Nous Portal Free",
        ],
        ["[OpenClaw](/pricing/openclaw)", "無料。支払うのはモデルプロバイダーへの料金", "あり：プロジェクト全体（MIT）"],
        [
          "[OpenCode](/pricing/opencode)",
          "エージェントは無料。OpenCode Go 月 $10、Go Plus 月 $40",
          "あり：1 日のリクエスト上限付きの無料モデル。アカウント不要",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "価格の掲載なし。自分のモデルのキーかローカルモデルを使用",
          "あり：アプリ（MIT）",
        ],
        ["[Grok Bot](/personal-agent/grok-bot)", "Premium 月 $30。Super $100、Ultra $200", "掲載なし"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Hermes Agent はあなた専属のエージェント。Crewmark はコーディングエージェントのチームを動かします。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。エージェントは、すでにお支払いの Claude や ChatGPT のサブスクリプションで動き、トークン代が別に請求されることはありません。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees) から選び、目標を数字で決めます。" },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) と、エージェントがそれを使って何をするかは [Claude Code の活用例](/use-cases/claude-code) と [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "仕事を続けてくれるエージェントが欲しいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Hermes Agent の料金に関するよくある質問",
    items: [
      {
        q: "Hermes Agent は無料ですか？",
        a: "はい。エージェントは MIT ライセンスのオープンソースです。モデルプロバイダーに料金を払うか、任意で Nous Portal を契約します。",
      },
      {
        q: "Hermes Agent の月額料金はいくらですか？",
        a: "エージェントは $0 です。任意の Nous Portal は、Free が $0、Plus が月 $20、Super が $100（Plus の 5 倍の利用量）、Ultra が $200（Plus の 10 倍の利用量）です。年額の掲載はありません。",
      },
      {
        q: "Hermes Agent を使うのに Nous Portal のサブスクリプションは必要ですか？",
        a: "いいえ。Nous Portal は `hermes model` で選べる多くのプロバイダーの 1 つで、ほかに OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、AWS Bedrock、ローカルモデル、カスタムエンドポイントがあります。",
      },
      {
        q: "Claude のサブスクリプションで Hermes Agent を使えますか？",
        a: "追加利用分を購入した Claude Max の場合だけです。ドキュメントによると Claude Pro の契約者はサブスクリプション経由の方法を使えないため、Pro では API キーが必要です。",
      },
      {
        q: "Hermes Agent の料金プランにホスティングは含まれますか？",
        a: "Nous Portal の有料プランには、クラウドでホストされるエージェントが 1 つ付きます。Plus は 4 GB RAM と 25 GB ディスク、Super は 4 GB と 100 GB、Ultra は 8 GB と 100 GB です。それ以外の場合は、自分のマシンかサーバーで動かします。",
      },
      {
        q: "ChatGPT のサブスクリプションで Hermes Agent を使えますか？",
        a: "ChatGPT/Codex のサインインはデバイスコードで行えますが、どの ChatGPT プランで使えるか、利用分がプランの上限にどう数えられるかは、現在ドキュメント化されていないとドキュメントに書かれています。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに職種とスケジュールを。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、hermes-agent.nousresearch.com、portal.nousresearch.com、Hermes Agent のドキュメントと GitHub の README、比較した各製品の料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Nous Research やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
