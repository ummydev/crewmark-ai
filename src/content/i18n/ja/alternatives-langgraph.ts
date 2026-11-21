import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph の代替（2026）：CrewAI、AutoGen ほか",
    description:
      "LangGraph の代替を比較：CrewAI、AutoGen、OpenClaw、Hermes Agent、Paperclip、Claude Code agent teams、Crewmark をライセンス、料金、向き不向きで。",
  },
  breadcrumb: "LangGraph の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · LangChain LangGraph",
    title: "LangGraph の代替（2026年）：フレームワーク、既製のエージェント、エージェントのチーム",
    lead: "LangGraph は、長時間動作し状態を持つエージェントのための、LangChain のオープンソース（MIT）のフレームワークです。ワークフローを状態、ノード、エッジのグラフとして、Python または JS/TS で定義します。設計上あえて低レベルで、「プロンプトやエージェントのアーキテクチャを規定しません」（“does not prescribe prompts or agent architecture”）。LangChain の LangSmith プラットフォームでは、無料の Developer プランは 1 シートのみで Agent Server がなく、セルフホストでのデプロイは Enterprise 限定です。役割で定義するエージェント、ライブラリではなく既製のエージェント、あるいはコーディングエージェントのチームがほしいなら、ここで紹介する 7 つの選択肢を、ライセンス、料金、向いている人とあわせてご覧ください。",
    cta: "今すぐ始める",
    secondary: "比較を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph の代替を一覧で比較",
      text: [
        "各製品の README、ドキュメント、料金ページの情報で、2026年11月13日に確認しました。価格は米ドルです。LangGraph 自体は MIT ライセンスで無料で、LangSmith Plus は 1 シートあたり月 $39 です。詳しくは [LangGraph の料金](/pricing/langgraph)で。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "役割ベースのエージェントによる crews と、イベント駆動の flows を作る Python フレームワーク。商用プラットフォームの CrewAI AMP もあり",
          "フレームワークはオープンソース（MIT）。AMP は商用",
          "フレームワークは無料（別途モデルプロバイダーの料金）。AMP Basic は無料（月 50 回のワークフロー実行）",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Python と .NET で使う Microsoft のマルチエージェント・フレームワーク。README では、アーカイブ済みで Microsoft によるメンテナンスは終了したとされている",
          "はい（コードは MIT、ドキュメントは CC-BY-4.0）",
          "無料（別途モデルプロバイダーの料金）。ホスティングサービスはなし",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "あなたのパソコンで動き、チャットアプリで応答する個人向け AI アシスタント",
          "はい（MIT）",
          "無料。有料プランやホスティングサービスはなし。支払うのはモデルプロバイダーへの料金のみ",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "自分のスキルを書いて改良していく Nous Research の個人向けエージェント。ターミナル、デスクトップアプリ、チャットアプリから使う",
          "はい（MIT）",
          "エージェントは無料（別途モデルプロバイダーの料金）。任意の Nous Portal Plus は月 $20",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "持ち込んだエージェント（Claude Code、Codex、OpenClaw など）を、組織図、予算、タスクを備えた会社として動かすセルフホスト型のサーバーと Web UI",
          "はい（MIT）",
          "セルフホスト版は無料。料金の公表なし。クラウド版はウェイトリスト段階",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "リーダーのセッションがチームメイトを起動し、チームメイト同士がタスクリストを共有してメッセージを送り合う、Claude Code の実験的な機能",
          "いいえ",
          "Claude の有料プランの Claude Code に付属。Pro の月 $20（年払いなら月 $17）から",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 社員のチームのための issue トラッカー。各社員はあなたのパソコン上の Claude Code または Codex の会話で、ハートビートで起動する",
          "はい（GPL-3.0）",
          "無料（1 プロジェクト、AI 社員 3 人まで）。Pro 月 $5 は近日提供。エージェントの利用料はエージェントのプロバイダーに支払い",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "ほかのエージェント・フレームワーク",
      text: [
        "LangGraph と同じく、自分のコードから呼び出すライブラリです。並べて比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "CrewAI：MIT ライセンスの Python フレームワークです。LangGraph には役割という概念が組み込まれていませんが、CrewAI では各エージェントを役割（role）、目標（goal）、背景設定（backstory）で定義します。委任を有効にすると、エージェント同士が仕事を渡し合い、質問し合います。Flows は、状態と分岐を備えた、イベント駆動でステップごとの制御を加えます。CrewAI AMP は、ノーコードの Studio、トレース、cron によるスケジュール実行、デプロイを追加します。Python（3.10 以上 3.14 未満）を書いていて、役割ごとに整理されたエージェントがほしいなら、これが向いています。料金：[CrewAI の料金](/pricing/crewai)。",
        "AutoGen：Python と .NET で使う、Microsoft の MIT ライセンスのマルチエージェント・フレームワークで、グループチャット、selector チーム、swarm チームを備えています。2026年11月13日の時点で、README には、プロジェクトは「アーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（“has been archived and is no longer actively maintained by Microsoft”）と書かれ、本番環境での利用は勧めないとしたうえで、新規ユーザーには後継の Microsoft Agent Framework を案内していました。既存の AutoGen アプリを保守している場合や、マルチエージェントのパターンを学びたい場合に向いています。詳しくは [AutoGen の代替](/alternatives/autogen)で。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "ライブラリではなく既製のエージェント",
      text: [
        "LangGraph では、エージェントを自分で作ります。次の 2 つは、インストールして動かすエージェントで、どちらもスケジューラーを内蔵しています。比較は [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) をご覧ください。",
      ],
      points: [
        "OpenClaw：MIT ライセンスの個人向けアシスタントで、あなたのパソコン上で Gateway として動き、WhatsApp、Telegram、Slack、Discord などのチャットアプリで応答します。1 つの Gateway で複数のエージェントを動かし、Automations スケジューラーを内蔵しており、プロジェクトに有料プランやホスティングサービスはありません。自分で管理するハードウェア上で、モデルプロバイダーを切り替えられる 1 人のアシスタントがほしいなら、これが向いています。詳しくは [OpenClaw の代替ツール](/blog/openclaw-alternatives)で。",
        "Hermes Agent：Nous Research の MIT ライセンスの個人向けエージェントです。経験からスキルを書き、自分の記憶を持ち、内蔵の cron スケジューラーでルーティンを実行します。Bot Mode では、それぞれ独自のモデルを持つ名前付きの Bot 同士が直接メッセージを送り合います。時間とともに自分のスキルを改良していき、ターミナル、デスクトップアプリ、チャットアプリから話しかけられるエージェントがほしいなら、これが向いています。詳しくは [Hermes Agent の代替](/alternatives/hermes-agent)で。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "すでに使っているコーディングエージェントを連携させる",
      text: [
        "連携させたいのが Claude Code や Codex のようなコーディングエージェントなら、次のものがそれらをチームとして動かします。[Paperclip vs CrewAI](/compare/paperclip-vs-crewai) と [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw) をご覧ください。",
      ],
      points: [
        "Paperclip：MIT ライセンスのセルフホスト型 Node.js サーバーと Web UI で、エージェントを会社として動かします。職種と予算を持つ組織図、エージェントや人に割り当てる issue、承認、cron・Webhook・API をきっかけに動くルーティンがあります。自らを「エージェントのフレームワークではない」（“not an agent framework”）としており、Claude Code、Codex、OpenClaw など持ち込んだエージェントを、アダプター経由で動かします。多数のエージェントを 1 つの目標に向けて、支出の上限付きで、自分のサーバーで働かせたいなら、これが向いています。",
        "Claude Code agent teams：Claude Code の実験的な機能で、デフォルトではオフです。リーダーのセッションがチームメイトを起動します。チームメイトは別々の Claude Code インスタンスで、依存関係付きのタスクリストを共有し、互いに直接メッセージを送り合います。すでに Claude のプランに支払っていて、1 つのコーディングタスクに複数の Claude Code インスタンスで取り組みたいなら、これが向いています。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "LangGraph の代替の選び方",
      steps: [
        {
          title: "各ステップを低レベルで制御する必要がありますか？",
          text: "それこそが LangGraph の目的です。もっと高いレベルから始めたいなら、README は Deep Agents を案内しています。Deep Agents は LangGraph の上に作られ、サブエージェントを追加したものです。",
        },
        {
          title: "役割で定義するエージェントがほしいですか？",
          text: "CrewAI のエージェントは役割（role）、目標（goal）、背景設定（backstory）を持ちます。Paperclip には肩書きと職務記述を備えた組織図があり、Crewmark は各 AI 社員に職種、KPI、プロジェクトを与えます。",
        },
        {
          title: "スケジュール実行が必要ですか？",
          text: "LangGraph には LangSmith Agent Server 上の cron ジョブがありますが、ライブラリ単体での記載はありません。CrewAI は AMP で cron によるスケジュール実行ができます。OpenClaw と Hermes Agent はスケジューラーを内蔵し、Paperclip はルーティンを実行し、Crewmark にはハートビートと繰り返しの issue があります。",
        },
        {
          title: "コストが気になりますか？",
          text: "オープンソースのフレームワークは無料で、モデルの呼び出しに料金を支払います。LangGraph の cron ジョブは毎回同じ入力を送ります。LangChain のドキュメントは、繰り返しの実行で LLM の API 料金が発生しうるため、使っていないものは削除するよう勧めています。Paperclip には上限に達すると強制停止する予算があり、Crewmark はあなた自身の Claude Code や Codex のサブスクリプションを使います。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "LangGraph はアプリにエージェントを組み込むもの。Crewmark はコーディングエージェントをチームとして動かすもの。",
      text: [
        "Crewmark はフレームワークではなく、グラフを書く必要もありません。AI 社員のチームのための issue トラッカーです。各社員はあなたのパソコン上の Claude Code または Codex の会話で、職種、KPI、プロジェクトを持ちます。勤務時間中にハートビートで起動して共有ボードから issue を取り、レビューや許可が必要なときは、issue を「要対応」にしてそこで質問します。",
        "GPL-3.0 のオープンソースで、1 プロジェクト・AI 社員 3 人までは無料です。エージェントのプロバイダーへの支払いはこれまでどおりで、ハートビートのためにパソコンは起動したままにしておく必要があります。プランは[料金ページ](/pricing)をご覧ください。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "ソフトウェアエンジニアやデータアナリストなど、[AI 社員の職種](/ai-employees)から始めて、KPI とプロジェクトを書きます。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を社員または人に割り当て、定期的なものは毎日、毎週、毎月繰り返すよう設定します。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間と、15 分から 24 時間までのハートビートを選びます。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "グラフを書かずに、エージェントのチームを",
    text: "Crewmark は、ハートビートで Claude Code や Codex のセッションを起こし、共有ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "LangGraph の代替に関するよくある質問",
    items: [
      {
        q: "LangGraph のオープンソースの代替は？",
        a: "CrewAI のフレームワーク、AutoGen（README ではアーカイブ済みで Microsoft によるメンテナンスは終了したとされている）、OpenClaw、Hermes Agent、Paperclip は、いずれも MIT ライセンスです。Crewmark は GPL-3.0 のオープンソースです。agent teams を動かす Claude Code はオープンソースではありません。",
      },
      {
        q: "LangGraph は無料ですか？",
        a: "フレームワークは MIT ライセンスで無料です。LangChain の LangSmith プラットフォームには、1 シートあたり月 $0 の Developer プラン（1 シート、月 5k ベーストレースまで、それ以降は従量課金、Agent Server なし）、Small Agent Server が 1 つ含まれる 1 シートあたり月 $39 の Plus、個別見積もりの Enterprise があります。詳しくは [LangGraph の料金](/pricing/langgraph)で。",
      },
      {
        q: "LangGraph と CrewAI の違いは？",
        a: "LangGraph は低レベルで、状態、ノード、エッジのグラフを自分で組み立て、役割という概念は組み込まれていません。CrewAI は各エージェントを役割（role）、目標（goal）、背景設定（backstory）で定義して crews にまとめ、Flows でステップごとの制御を行います。どちらのフレームワークも MIT ライセンスです。CrewAI は Python のフレームワークで、LangGraph は Python と JS/TS で使えます。[CrewAI vs LangGraph](/compare/crewai-vs-langgraph) をご覧ください。",
      },
      {
        q: "LangGraph を使うのに LangChain は必要ですか？",
        a: "いいえ。LangChain のドキュメントには「LangGraph は LangChain を必要としません」（“LangGraph does not require LangChain.”）とあります。例では LangChain のモデル連携がよく使われますが、LangGraph はコードから呼び出すどのモデルでも動きます。",
      },
      {
        q: "2026年でも AutoGen は LangGraph の代替になりますか？",
        a: "README には、プロジェクトは「アーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（“has been archived and is no longer actively maintained by Microsoft”）とあり、本番環境での利用は勧めていません。Microsoft は新規ユーザーに、AutoGen の直接の後継と呼ぶ Microsoft Agent Framework を案内しています。[AutoGen の代替](/alternatives/autogen)をご覧ください。",
      },
      {
        q: "スケジュールでエージェントを動かせる LangGraph の代替は？",
        a: "OpenClaw（Automations）、Hermes Agent（内蔵の cron スケジューラー）、Paperclip（cron、Webhook、API で動くルーティン）、Crewmark（勤務時間中のハートビートと繰り返しの issue）です。CrewAI は AMP プラットフォームでスケジュール実行ができ、Claude Code には agent teams とは別にスケジュールタスクがあります。LangGraph 自体は LangSmith Agent Server 上で cron ジョブを実行します。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、職種とボードを。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・KPI・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品の README、ドキュメント、料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、LangChain をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
