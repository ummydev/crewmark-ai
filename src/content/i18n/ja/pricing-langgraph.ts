import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/langgraph; the English master is src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph の料金：無料、LangSmith Plus $39、Agent Server",
    description:
      "LangGraph の料金：MIT のフレームワークは無料。LangSmith は Developer $0、Plus は 1 シート月 $39 で Agent Server 1 台付き、追加は 1 LSU $1.00。",
  },
  breadcrumb: "LangGraph の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · エージェントフレームワーク",
    title: "LangGraph の料金：無料のフレームワーク、LangSmith のプラン、Agent Server の費用",
    lead: "LangGraph は無料です。フレームワークは MIT ライセンスのオープンソースで、自分のアプリケーションの中で動きます。お金がかかるのは、トレース、評価、デプロイのための LangChain の商用製品 LangSmith です。Developer は 1 シートで $0、Plus は 1 シートあたり月 $39 で Small Agent Server が 1 台含まれ、Enterprise は個別見積もりです。追加の Agent Server は 1 LSU あたり $1.00 の従量課金で、モデルの呼び出しはモデルプロバイダーから請求されます。各プラン、Agent Server の費用、そして CrewAI、AutoGen、Relevance AI、Paperclip との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "LangGraph と LangSmith のプランと料金",
      text: [
        "[langchain.com](https://www.langchain.com/langgraph) の料金ページと LangChain のドキュメントをもとに、2026年11月13日に確認しました。価格は米ドルで、Developer と Plus は月払いです。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "LangGraph フレームワーク（オープンソース）",
          "無料、MIT ライセンス",
          "状態を持つエージェントのための Python と JavaScript/TypeScript のライブラリ。自分のアプリケーションの中で実行",
        ],
        [
          "LangSmith Developer",
          "1 シートあたり月 $0",
          "1 シート。ベーストレースは月 5k まで、それ以降は従量課金。Agent Server なし",
        ],
        [
          "LangSmith Plus",
          "1 シートあたり月 $39",
          "ベーストレースは月 10k まで、それ以降は従量課金。「サーバーレスホスティング上の Small Agent Server 1 台を無料で含む」（\"1 Small Agent Server included on serverless hosting at no charge\"）",
        ],
        [
          "LangSmith Enterprise",
          "個別見積もり、年間前払いで請求",
          "セルフホストとハイブリッドのデプロイが選択可能に",
        ],
        [
          "追加の Agent Server",
          "1 LSU あたり $1.00 の従量課金",
          "ランタイムのコンピュート 0.0675 LSU/vCPU 時間、ランタイムのメモリ 0.0090 LSU/GiB 時間、データベースのコンピュート 0.177 LSU/vCPU 時間、データベースのメモリ 0.025 LSU/GiB 時間",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "LangGraph で実際にかかる費用",
      points: [
        "モデルプロバイダー：LangGraph は、あなたのコードが使うモデルを呼び出します。また「LangGraph に LangChain は必要ありません」（\"LangGraph does not require LangChain.\"）。モデルの呼び出しは、プロバイダーから請求されます。",
        "含まれる量を超えたトレース：Developer にはベーストレースが月 5k まで、Plus には月 10k まで含まれ、それを超えると従量課金です。",
        "シート：Developer は 1 シートまでです。Plus は 1 シートあたり月 $39 です。",
        "2 台目以降の Agent Server：Plus には、サーバーレスホスティング上の Small Agent Server が 1 台含まれます。それ以上は 1 LSU あたり $1.00 の従量課金なので、ランタイムのコンピュートは 1 vCPU 時間あたり $0.0675、ランタイムのメモリは 1 GiB 時間あたり $0.009 になります。データベースのコンピュートは 1 vCPU 時間あたり 0.177 LSU、データベースのメモリは 1 GiB 時間あたり 0.025 LSU です。",
        "cron ジョブは動き続ける：Agent Server は、設定したスケジュールで動く cron ジョブに対応しています。定期実行には LLM API の料金がかかることがあるため、使わないものは削除するよう LangChain のドキュメントは勧めています。",
        "ホスティング先：Cloud Agent Server は「AWS、Azure、GCP 上で LangChain が完全に管理」（\"Fully managed by LangChain on AWS, Azure, and GCP\"）します。セルフホストとハイブリッドのデプロイは Enterprise の選択肢です。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph と他のエージェントフレームワーク・プラットフォームの料金比較",
      text: [
        "各製品の料金ページまたは README に載っている価格で、2026年11月13日に確認しました。価格は米ドルです。AutoGen の README には「このプロジェクトはアーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（\"This project has been archived and is no longer actively maintained by Microsoft\"）とあり、Microsoft は Agent Framework を直接の後継に挙げています。2026年11月13日時点で、Relevance AI のドキュメントには、Free プランは新規登録と既存アカウントのどちらについても終了したと書かれています。",
        "並べて比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。ほかの選択肢は [LangGraph の代替ツール](/alternatives/langgraph) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        [
          "LangGraph",
          "フレームワークは無料。LangSmith Plus は 1 シートあたり月 $39",
          "あり：フレームワーク（MIT）と、1 シート $0 の LangSmith Developer",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "フレームワークは無料。AMP Basic は無料。Enterprise は個別見積もり",
          "あり：フレームワーク（MIT）と、月 50 回のワークフロー実行が付いた AMP Basic",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "無料（オープンソース）。README に有料サービスの記載なし",
          "あり：コードは MIT。README によるとアーカイブ済みで、Microsoft による積極的なメンテナンスは終了",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise、営業経由の個別見積もり",
          "なし：ドキュメントによると Free プランは終了",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "セルフホストは無料。料金の公表なし",
          "あり：セルフホスト（MIT）。クラウド版はウェイトリスト段階",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "エージェントアプリを作るわけではないなら、Claude Code や Codex に職種を与えましょう。",
      text: [
        "LangGraph は、自分のコードで状態を持つエージェントを構築するためのものです。Crewmark は AI 社員のチームのための issue トラッカーで、すでに Claude Code や Codex を使っていて、毎回プロンプトを出さなくてもエージェントに仕事を続けてほしい人向けです。社員はそれぞれ職種、KPI、勤務時間を持ち、ハートビートで起動して、共有ボードから issue を引き受けます。エージェントの利用分は、すでにお支払いの Claude や ChatGPT のサブスクリプションのままです。",
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
    title: "すでに Claude Code や Codex を使っていますか？",
    text: "Crewmark はそれを、職種、ハートビート、共有ボードを持つ AI 社員に変えます。1 プロジェクト、AI 社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "LangGraph の料金に関するよくある質問",
    items: [
      {
        q: "LangGraph は無料ですか？",
        a: "はい。LangGraph のフレームワークは MIT ライセンスのオープンソースで、Python と JavaScript/TypeScript で使えます。LangChain の商用製品 LangSmith にも、1 シート向けの $0 の Developer プランがあります。",
      },
      {
        q: "LangGraph をクラウドにデプロイする費用は？",
        a: "デプロイは LangSmith Agent Server で行い、AWS、Azure、GCP 上で LangChain が完全に管理します。LangSmith Plus（1 シートあたり月 $39）には、サーバーレスホスティング上の Small Agent Server が 1 台無料で含まれ、それ以上のサーバーは 1 LSU あたり $1.00 の従量課金です。Developer プランには Agent Server がありません。",
      },
      {
        q: "LangGraph のサーバー料金：Agent Server の費用は？",
        a: "Agent Server（旧 LangSmith Deployment）は LSU 単位の従量課金で、1 LSU あたり $1.00 です。ランタイムのコンピュートは 1 vCPU 時間あたり 0.0675 LSU、ランタイムのメモリは 1 GiB 時間あたり 0.0090、データベースのコンピュートは 1 vCPU 時間あたり 0.177、データベースのメモリは 1 GiB 時間あたり 0.025 です。Plus には Small Agent Server が 1 台無料で含まれます。",
      },
      {
        q: "LangSmith Plus には何が含まれますか？",
        a: "1 シートあたり月 $39 の月払いで、ベーストレースが月 10k まで（それ以降は従量課金）、サーバーレスホスティング上の Small Agent Server 1 台が無料で含まれます。",
      },
      {
        q: "LangGraph にエンタープライズ向けの料金はありますか？",
        a: "LangSmith Enterprise は個別見積もりで、年間前払いで請求されます。セルフホストとハイブリッドの Agent Server のデプロイは Enterprise の選択肢です。",
      },
      {
        q: "LangGraph を使うのに LangSmith は必要ですか？",
        a: "フレームワークは、自分のアプリケーションの中で動く無料の MIT ライブラリです。LangSmith は、トレース、評価、Agent Server へのエージェントのデプロイのための、LangChain の別の商用製品です。",
      },
    ],
  },
  cta: {
    title: "グラフを組むか、エージェントに仕事を与えるか。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、KPI、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に langchain.com/pricing と、LangChain の LangGraph および LangSmith のドキュメントで確認しました。他製品の料金は、同じ日に各製品のページで確認したものです。",
  disclaimer:
    "Crewmark は独立した製品であり、LangChain やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
