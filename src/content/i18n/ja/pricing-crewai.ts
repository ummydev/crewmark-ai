import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/crewai; the English master is src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI の料金：無料のフレームワーク、AMP Basic、Enterprise",
    description:
      "CrewAI の料金：MIT のフレームワークは無料、AMP Basic は月 50 回のワークフロー実行まで無料、Enterprise は個別見積もり。モデルにかかる費用も。",
  },
  breadcrumb: "CrewAI の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · エージェントフレームワーク",
    title: "CrewAI の料金：無料のフレームワーク、AMP のプラン、モデルの費用",
    lead: "CrewAI のオープンソースの Python フレームワークは MIT ライセンスで無料です。支払うのはモデルプロバイダーへの料金で、デフォルトは OpenAI API です。crews と flows を構築、デプロイ、トレースするための同社のプラットフォーム CrewAI AMP には、2 つのプランがあります。月 50 回のワークフロー実行まで無料の Basic と、個別見積もりの Enterprise です。CrewAI は通貨、請求期間、超過料金を公表していません。各プランに含まれるもの、ほかにかかる費用、そして LangGraph、AutoGen、Relevance AI、Paperclip との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "CrewAI のプランと料金",
      text: [
        "[crewai.com](https://crewai.com) の料金ページと crewAI の README をもとに、2026年11月13日に確認しました。CrewAI はプラットフォームのプランを「無料」（\"Free\"）と「カスタム」（\"Custom\"）と表記しており、通貨や請求期間は書かれていません。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "CrewAI フレームワーク（オープンソース）",
          "無料、MIT ライセンス",
          "役割ベースのエージェントによる crews と、イベント駆動の flows のための Python ライブラリ。自分のコードとインフラで実行",
        ],
        [
          "AMP Basic",
          "無料",
          "ビジュアルエディターと AI コパイロット、GitHub 連携、月 50 回のワークフロー実行、cron スケジューリング、人による入力（human-in-the-loop）",
        ],
        [
          "AMP Enterprise",
          "個別見積もり（価格の掲載なし）",
          "CrewAI のクラウド、自社の VPC、自社のインフラへのデプロイ。SSO（MS Entra、Okta）、RBAC、専用 VPC、エンタープライズ向けコネクター。cron スケジューリングと人による入力（human-in-the-loop）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "CrewAI で実際にかかる費用",
      points: [
        "モデルプロバイダー：CrewAI のエージェントは、設定したモデルの API を呼び出します。「デフォルトでは、エージェントは OpenAI API を使います」（\"By default your agents will use the OpenAI API\"）。ほかのプロバイダーやローカルモデル（Ollama、LM Studio）にも対応しています。",
        "AMP Basic のワークフロー実行回数：無料のプラットフォームプランは、ワークフローの実行が月 50 回までです。CrewAI は超過料金を公表していません。",
        "Enterprise の機能：SSO、RBAC、専用 VPC、エンタープライズ向けコネクターは Enterprise 限定で、個別見積もりです。",
        "動く場所：フレームワークは、自分のコードとインフラで使う Python ライブラリです（Python `>=3.10, <3.14`）。AMP は app.crewai.com の Web アプリで、Enterprise では CrewAI のクラウド、自社の VPC、自社のインフラにデプロイできます。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI と他のエージェントフレームワーク・プラットフォームの料金比較",
      text: [
        "各製品の料金ページまたは README に載っている価格で、2026年11月13日に確認しました。価格は米ドルです。AutoGen の README には「このプロジェクトはアーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（\"This project has been archived and is no longer actively maintained by Microsoft\"）とあり、Microsoft は Agent Framework を直接の後継に挙げています。2026年11月13日時点で、Relevance AI のドキュメントには、Free プランは新規登録と既存アカウントのどちらについても終了したと書かれています。",
        "並べて比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)、[Paperclip vs CrewAI](/compare/paperclip-vs-crewai)。ほかの選択肢は [CrewAI の代替ツール](/alternatives/crewai) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        [
          "CrewAI",
          "フレームワークは無料。AMP Basic は無料。Enterprise は個別見積もり",
          "あり：フレームワーク（MIT）と、月 50 回のワークフロー実行が付いた AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "フレームワークは無料。LangSmith Plus は 1 シートあたり月 $39",
          "あり：フレームワーク（MIT）と、1 シート $0 の LangSmith Developer",
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
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "セルフホストは無料。料金の公表なし",
          "あり：セルフホスト（MIT）。クラウド版はウェイトリスト段階",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Python アプリを作るわけではないなら、Claude Code や Codex に職種を与えましょう。",
      text: [
        "CrewAI は、自分の Python コードでマルチエージェントのワークフローを構築するためのものです。Crewmark は AI 社員のチームのための issue トラッカーで、すでに Claude Code や Codex を使っていて、毎回プロンプトを出さなくてもエージェントに仕事を続けてほしい人向けです。社員はそれぞれ職種、KPI、勤務時間を持ち、ハートビートで起動して、共有ボードから issue を引き受けます。エージェントの利用分は、すでにお支払いの Claude や ChatGPT のサブスクリプションのままです。",
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
    title: "CrewAI の料金に関するよくある質問",
    items: [
      {
        q: "CrewAI は無料ですか？",
        a: "フレームワークは無料です。MIT ライセンスのオープンソースで、支払うのはモデルプロバイダーへの料金だけです。CrewAI AMP の Basic プランも、月 50 回のワークフロー実行まで無料です。",
      },
      {
        q: "CrewAI AMP の料金プランは？",
        a: "2 つあります。「無料」（\"Free\"）と表記された Basic（ビジュアルエディターと AI コパイロット、GitHub 連携、月 50 回のワークフロー実行）と、「カスタム」（\"Custom\"）と表記され価格の掲載がない Enterprise です。CrewAI は通貨、請求期間、超過料金を公表していません。",
      },
      {
        q: "CrewAI Enterprise の料金はいくらですか？",
        a: "CrewAI は価格を掲載しておらず、Enterprise は「カスタム」（\"Custom\"）です。CrewAI のクラウド、自社の VPC、自社のインフラへのデプロイ、MS Entra や Okta での SSO、RBAC、エンタープライズ向けコネクターが加わります。",
      },
      {
        q: "CrewAI の料金体系は？",
        a: "自分で動かす無料のオープンソースのフレームワークと、プラン別の料金の AMP プラットフォームです。Basic は無料で月 50 回のワークフロー実行まで、Enterprise は個別見積もりです。モデルの利用料は、モデルプロバイダーから別途請求されます。",
      },
      {
        q: "CrewAI のクラウドの料金は？",
        a: "AMP は app.crewai.com の Web アプリで、Basic は月 50 回のワークフロー実行まで無料です。CrewAI のクラウド、自社の VPC、自社のインフラへのデプロイは Enterprise の項目にあり、個別見積もりです。",
      },
      {
        q: "CrewAI を使うには OpenAI のキーが必要ですか？",
        a: "デフォルトでは、CrewAI のエージェントは OpenAI API を使います。Ollama や LM Studio など、ほかのプロバイダーやローカルモデルにも対応しています。",
      },
    ],
  },
  cta: {
    title: "コードで crew を作るか、エージェントに仕事を与えるか。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、KPI、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に crewai.com/pricing、CrewAI のプラットフォームのドキュメント、crewAI の README で確認しました。他製品の料金は、同じ日に各製品のページで確認したものです。",
  disclaimer:
    "Crewmark は独立した製品であり、crewAI, Inc. やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
