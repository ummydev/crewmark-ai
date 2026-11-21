import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/devin; the English master is src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin の料金（2026年）：Free、Pro $20、Max $200、Teams",
    description:
      "Devin の料金：Free は $0、Pro は月 $20、Max は月 $200、Teams と Enterprise。利用枠、オンデマンドのクレジット、シートの仕組みと、他製品との価格比較。",
  },
  breadcrumb: "Devin の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · Cognition",
    title: "Devin の料金：全プランと、プラン以外にかかる費用",
    lead: "Cognition の AI ソフトウェアエンジニア Devin には、少なめの利用枠が付いた $0 の Free プランがあります。Pro は月 $20、Max は月 $200 で、どちらも 1 ユーザー向けです。Teams は「チームプラン月 $80 + フル開発者シート 1 席あたり月 $40」（\"$80/month for team plan + $40/mo per full dev seat\"）と掲載されており、Enterprise は営業経由です。セルフサービスの各プランには 1 日ごと、1 週間ごと、またはその両方の利用枠があり、それを超えた分は前払いのオンデマンドクレジットで支払います。このページでは、プラン、追加でかかる費用、そして Factory、Claude Code、Codex、Cursor Projects、Crewmark と比べた Devin の価格を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Devin のプランと料金",
      text: [
        "[devin.ai](https://devin.ai) の料金ページと Devin の課金に関するドキュメントをもとに、2026年11月13日に確認しました。価格は米ドルです。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        ["Free", "$0", "少なめの利用枠。使えるモデルは一部のみ"],
        ["Pro", "月 $20", "Devin Cloud、すべてのモデルが利用可能、超過分は API 料金。1 ユーザー"],
        ["Max", "月 $200", "より多い利用枠。1 ユーザー"],
        [
          "Teams",
          "「チームプラン月 $80 + フル開発者シート 1 席あたり月 $40」（\"$80/month for team plan + $40/mo per full dev seat\"）",
          "最大 100 ユーザー。メンバーごとに最大 2 つのクラウドセッションを同時に使える「Free mode」（SWE-2）",
        ],
        ["Enterprise", "「ご相談ください」（\"Let's talk\"）", "VPC と専用環境へのデプロイ"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Devin で実際にかかる費用",
      points: [
        "まずは利用枠：Devin のセルフサービスプランには、1 日ごと、1 週間ごと、またはその両方の利用枠があります。",
        "次に前払いのクレジット：利用枠を超えた分は、前払いのオンデマンドクレジットから支払います。Pro では、超過分は API 料金で請求されます。",
        "GPT モデルには ChatGPT のプラン：Pro、Max、Teams では、連携した ChatGPT のプランを GPT モデルの利用に充てられます。",
        "プランごとのモデル：Free で使えるモデルは一部のみで、Pro ではすべてのモデルを使えます。Devin は Cognition の SWE-2 に加えて「OpenAI、Claude、Gemini、SpaceXAI のフロンティアモデルと、主要なオープンソースモデル」（\"frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models\"）を使い、Adaptive ルーターがタスクごとにモデルを選びます。",
        "シート：Pro と Max は 1 ユーザー向けのプランです。Teams は最大 100 メンバーまでで、それより大きなチームには Enterprise が案内されています。",
        "Teams のクレジット：Teams では、共有のオンデマンドクレジットがなくなると Automations が止まります。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin と他のコーディングエージェントの料金比較",
      text: [
        "各製品の料金ページに載っている最低価格で、2026年11月13日に確認しました。価格は米ドルです。モデルの利用料を含まないプランでは、その分はモデルの提供元に支払います。",
        "並べて比較：[Devin vs Claude Code](/compare/devin-vs-claude-code)、[Devin vs Codex](/compare/devin-vs-codex)。ほかの選択肢は [Devin の代替ツール](/blog/devin-alternatives) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        ["Devin", "Free $0、Pro 月 $20", "あり：少なめの利用枠付きの Free プラン"],
        [
          "[Factory](/pricing/factory)",
          "推論を自分で用意すれば Free $0、Pro 月 $20",
          "あり：推論を自分で用意すれば Free",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "Claude Pro に含まれる：月 $20、年払いなら月 $17",
          "なし：Claude Free には含まれない。従量課金の API クレジットでも利用可",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "ChatGPT Plus（月 $20）に含まれる。または OpenAI の API キーで API 料金",
          "ChatGPT Free（$0）のデスクトップアプリに GPT-6 Luna が「順次提供」（\"subject to rollout\"）として掲載",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 月 $30、または年 $300",
          "なし：Free、Plus、旧 Hobby では使えない",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0。月 $5 の Pro は近日公開",
          "あり：1 プロジェクト、AI 社員 3 人まで。エージェントの利用料はプロバイダーに支払い",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code や Codex にすでに払っているなら、仕事とボードを与えましょう。",
      text: [
        "Devin は独自のエージェントで、プランの利用枠とクレジットで課金されます。Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、KPI、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。エージェントの利用分は、すでにお支払いの Claude や ChatGPT のサブスクリプションのままです。",
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
    title: "Devin の料金に関するよくある質問",
    items: [
      {
        q: "Devin は無料ですか？",
        a: "少なめの利用枠と一部のモデルが使える、$0 の Free プランがあります。月 $20 の Pro では、Devin Cloud とすべてのモデルが使えるようになります。",
      },
      {
        q: "Devin の月額料金はいくらですか？",
        a: "Pro は月 $20、Max は月 $200 で、どちらも 1 ユーザー向けです。Teams は「チームプラン月 $80 + フル開発者シート 1 席あたり月 $40」（\"$80/month for team plan + $40/mo per full dev seat\"）と掲載されており、最大 100 ユーザーまでです。Enterprise は「ご相談ください」（\"Let's talk\"）となっています。価格は米ドルです。",
      },
      {
        q: "Devin の料金体系は？",
        a: "1 日ごと、1 週間ごと、またはその両方の利用枠が付いたプランに、それを超えた分の前払いオンデマンドクレジットを組み合わせます。Pro では、超過分は API 料金で請求されます。Teams では、チームの料金にフル開発者シートごとの料金が加わります。",
      },
      {
        q: "Devin の Teams と Enterprise はどのような仕組みですか？",
        a: "Teams は最大 100 メンバーまでで、共有のオンデマンドクレジットがなくなると Automations が止まります。それより大きなチームには Enterprise が案内されています。Enterprise は営業経由の料金で、VPC と専用環境へのデプロイに対応します。",
      },
      {
        q: "ChatGPT のプランを Devin で使えますか？",
        a: "Pro、Max、Teams なら使えます。連携した ChatGPT のプランで GPT モデルの利用分をまかなえます。",
      },
      {
        q: "Devin はオープンソースですか？",
        a: "いいえ。Devin のソースコードやオープンソースライセンスは公開されていません。github.com/CognitionAI/devin-cli にあるのは、インストール用のパッケージ、ドキュメント、スクリプトです。オープンソースの選択肢は [Devin の代替ツール](/blog/devin-alternatives) で紹介しています。",
      },
    ],
  },
  cta: {
    title: "料金を比べたら、エージェントに仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、KPI、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に devin.ai/pricing と Devin の課金に関するドキュメントで確認しました。他製品の料金は、同じ日に各製品の料金ページで確認したものです。",
  disclaimer:
    "Crewmark は独立した製品であり、Cognition やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
