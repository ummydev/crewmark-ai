import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/relevance-ai; the English master is src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI の料金：Enterprise のみ、Free プランは終了",
    description:
      "Relevance AI の料金ページに載っているのは、営業経由・個別見積もりの Enterprise だけ。ドキュメントによると Free プランは終了。それが何を意味するかを解説。",
  },
  breadcrumb: "Relevance AI の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · Relevance AI",
    title: "Relevance AI の料金：営業経由の Enterprise プランのみで、Free プランはなし",
    lead: "Relevance AI の公開の料金ページに載っているプランは、個別見積もりの Enterprise の 1 つだけで、「営業に相談」（\"Talk to sales\"）する形です。ドキュメントによると、Free プランは新規登録と既存アカウントのどちらについても終了しています。モデルについては、ドキュメントに 2 つの方法が挙げられています。クレジットか、自分の LLM のキーです。Enterprise プランに含まれるもの、今から購入する場合に何を意味するか、そして Lindy、CrewAI、LangGraph、Crewmark との価格比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "プランを見る",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Relevance AI のプランと料金",
      text: [
        "relevanceai.com/pricing と Relevance AI のドキュメントをもとに、2026年11月13日に確認しました。料金ページには、セルフサービスのプランの価格は載っていません。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "Enterprise",
          "個別見積もり。「営業に相談」（\"Talk to sales\"）",
          "カスタムの Actions とベンダークレジット。エージェント、ツール、ユーザー、プロジェクトは無制限。ドキュメントによると、SSO、RBAC、監査ログ、エージェントの評価、勤務時間の制御、エンタープライズ向けトリガーは Enterprise 限定",
        ],
        ["Free", "終了", "ドキュメントによると、Free プランは新規登録と既存アカウントのどちらについても終了"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Relevance AI で実際にかかる費用",
      points: [
        "個別の契約：掲載されているプランは営業経由の Enterprise だけなので、金額は Relevance AI に相談してはじめてわかります。",
        "モデルはクレジットか自分のキーで：ドキュメントのプラン表には「クレジットで任意の LLM を使う」（\"Use any LLMs with credits\"）と「自分の LLM を持ち込む」（\"Bring your own LLM\"、BYOK）が挙げられています。Enterprise にはカスタムの Actions とベンダークレジットが含まれます。",
        "Enterprise が必要な機能：SSO、RBAC、監査ログ、エージェントの評価、勤務時間の制御、そして Salesforce、Snowflake、Zendesk 向けのエンタープライズ向けトリガーです。",
        "無料で始める方法はない：新規登録向けの Free プランが終了したため、営業と話す前に試せる $0 のプランはありません。",
        "製品とは別に、営業の提案には、1〜2 週目にユースケースを整理して 3 週目からデプロイする組み込み型のデプロイチームと、Relevance AI が 24/7 対応の AI ソリューションエンジニアと呼ぶ「Invent」が含まれます。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI と類似エージェント基盤の料金比較",
      text: [
        "各製品のサイトに載っている価格で、2026年11月13日に確認しました。自分のモデルを使う製品では別途モデルが必要で、その料金はモデルの提供元に支払います。",
        "並べて比較：[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)、[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。ほかの選択肢は [Relevance AI の代替ツール](/alternatives/relevance-ai) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        ["Relevance AI", "Enterprise、営業経由の個別見積もり", "なし：Free プランは終了"],
        [
          "[Lindy](/personal-agent/lindy)",
          "アクティブユーザーあたり月 $29.99（3,000 クレジット）",
          "あり：7 日間有効な $50 分のクレジット。クレジットカード不要",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "フレームワークは無料（MIT）。AMP Enterprise は個別見積もり",
          "あり：フレームワークと、月 50 回のワークフロー実行が付いた AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "フレームワークは無料（MIT）。LangSmith Plus は 1 シートあたり月 $39",
          "あり：フレームワークと、$0 の LangSmith Developer（1 シート、ベーストレースは月 5k まで）",
        ],
        [
          "[Crewmark](/pricing)",
          "無料。月 $5 の Pro と月 $10 の Team は近日公開",
          "あり：1 プロジェクト、AI 社員 3 人まで、利用者 1 人",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Relevance AI はホスティング型のエージェントを作る。Crewmark はあなたのコーディングエージェントをチームとして動かす。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。エージェントは、すでにお支払いの Claude や ChatGPT のサブスクリプションで動き、トークン代が別に請求されることはありません。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees) から、SEO、グロース、ソーシャルメディア、エンジニアリングなどを選び、目標を数字で決めます。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) と、エージェントがそれを使って何をするかは [Claude Code の活用例](/use-cases/claude-code) をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "営業との打ち合わせなしで始めたいですか？",
    text: "Crewmark の Free プランなら、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えられます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Relevance AI の料金に関するよくある質問",
    items: [
      {
        q: "Relevance AI に無料プランはありますか？",
        a: "今はありません。Relevance AI のドキュメントによると、Free プランは新規登録と既存アカウントのどちらについても終了しています。",
      },
      {
        q: "Relevance AI の料金はいくらですか？",
        a: "公開の料金ページに載っているプランは Enterprise の 1 つだけで、営業経由の個別見積もりです。セルフサービスのプランの価格は公表されていません。",
      },
      {
        q: "Relevance AI のエンタープライズ料金には何が含まれますか？",
        a: "カスタムの Actions とベンダークレジット、そして無制限のエージェント、ツール、ユーザー、プロジェクトです。SSO、RBAC、監査ログ、エージェントの評価、勤務時間の制御、エンタープライズ向けトリガーは Enterprise 限定です。",
      },
      {
        q: "Relevance AI に自分の LLM のキーを持ち込めますか？",
        a: "ドキュメントのプラン表には、「クレジットで任意の LLM を使う」（\"Use any LLMs with credits\"）と並んで「自分の LLM を持ち込む」（\"Bring your own LLM\"、BYOK）が挙げられているので、クレジットか自分のプロバイダーのキーを使えます。",
      },
      {
        q: "Relevance AI はセルフホストできますか？",
        a: "セルフホストの選択肢は明記されていません。Relevance AI はホスティング型の Web プラットフォームで、オープンソースではありません。",
      },
      {
        q: "無料プランのある Relevance AI の代替ツールはありますか？",
        a: "いくつかあります。Lindy には 7 日間有効な $50 分のクレジットがあり、CrewAI と LangGraph は無料のオープンソースのフレームワーク、Crewmark には Free プランがあります。[Relevance AI の代替ツール](/alternatives/relevance-ai) をご覧ください。",
      },
    ],
  },
  cta: {
    title: "今あるエージェントで、無料で始めましょう。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、relevanceai.com/pricing、Relevance AI のドキュメント、比較した各製品の料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Relevance AI やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
