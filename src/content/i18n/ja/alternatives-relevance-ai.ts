import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI の代替（2026）：オープンソースとホスティング型",
    description:
      "Relevance AI は Free プランを廃止し、掲載は Enterprise のみ。CrewAI、LangGraph、AutoGen、Paperclip、OpenBot、Lindy、Crewmark を料金付きで比較。",
  },
  breadcrumb: "Relevance AI の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Relevance AI",
    title: "Relevance AI の代替：オープンソースのエージェント・フレームワーク、セルフホストのエージェントチーム、ホスティング型アシスタント",
    lead: "Relevance AI は、AI エージェントを構築し、「AI Workforce」と呼ぶマルチエージェントのチームにつなげる、ホスティング型のローコード基盤です。営業、サポート、オペレーション業務向けです。2026年11月13日時点で、ドキュメントには Free プランが新規登録と既存アカウントの両方で廃止されたとあり、料金ページに載っているプランは営業経由の Enterprise の 1 つだけです。オープンソースではなく、セルフホストの選択肢も示されていません。このページでは、オープンソースのフレームワーク、セルフホストのエージェントチーム、ホスティング型のアシスタント、そして Crewmark の 7 つの代替を、それぞれの費用とあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI の代替を一覧で比較",
      text: [
        "各ベンダー自身のページ、ドキュメント、GitHub の情報で、2026年11月13日に確認しました。ベンダーが価格を示していない場合を除き、価格は米ドルです。順位付けではありません。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai)（参考）",
          "AI エージェントとマルチエージェントの Workforce のための、ホスティング型のローコード基盤",
          "いいえ",
          "営業経由の Enterprise のみ。Free プランは廃止",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "役割ベースのエージェントによる crews を作る Python フレームワークと、CrewAI AMP プラットフォーム",
          "フレームワークはオープンソース、MIT。AMP は商用",
          "フレームワークは無料。AMP Basic は無料（月 50 回のワークフロー実行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "長時間動作し状態を持つエージェントを、コードでグラフとして構築する LangChain のフレームワーク",
          "フレームワークはオープンソース、MIT。LangSmith は商用",
          "フレームワークは無料。LangSmith は Developer $0、Plus 1 シートあたり月 $39",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Python と .NET 向けの Microsoft のマルチエージェント・フレームワーク。README ではアーカイブ済みとされている",
          "はい：コードは MIT、ドキュメントは CC-BY-4.0",
          "無料。ホスティングサービスはなし",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "持ち込んだエージェントを、組織図と予算を備えた会社として動かすセルフホスト型のサーバー",
          "はい、MIT",
          "セルフホストは無料。クラウド版はウェイトリスト段階",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit のセルフホスト可能な、AI の同僚のためのワークスペース",
          "はい、MIT（別ライセンスの CopilotKit Intelligence を使用）",
          "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "受信トレイ、カレンダー、ミーティング、Slack のためのホスティング型 AI アシスタント。クレジットで課金",
          "いいえ",
          "7 日間 $50 分の無料クレジット。その後はアクティブユーザーあたり月 $29.99 から",
        ],
        [
          "[Crewmark](/ai-employees)",
          "あなたのパソコン上の Claude Code や Codex として動く AI 社員のための issue ボード",
          "はい、GPL-3.0",
          "無料（1 プロジェクト、AI 社員 3 人まで）。Pro 月 $5 は近日提供",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "オープンソースのエージェント・フレームワーク（コードを書く）",
      text: [
        "Relevance AI のビルダーの代わりにライブラリを使います。エージェントとワークフローをコードで定義し、モデルプロバイダーに支払います。CrewAI と LangGraph には、作ったものをデプロイするための商用プラットフォームもあります。並べて比較：[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)、[CrewAI vs AutoGen](/compare/crewai-vs-autogen)。",
      ],
      points: [
        "[CrewAI](/alternatives/crewai)：MIT ライセンスの Python フレームワークで、役割（role）、目標（goal）、背景設定（backstory）で定義したエージェントの crews と、ステップごとの制御のためのイベント駆動の Flows を備えます。エージェント同士が仕事を委任し、質問し合えます。商用プラットフォームの CrewAI AMP には、ビジュアルエディター、AI コパイロット、月 50 回のワークフロー実行が付いた無料の Basic プランと、自社の VPC にデプロイできる個別見積もりの Enterprise プランがあります。Python で役割ベースのマルチエージェントのチームを作り、ノーコードのエディターも使えるようにしたいなら、これが向いています。料金：[CrewAI の料金](/pricing/crewai)。",
        "[LangGraph](/alternatives/langgraph)：長時間動作し状態を持つエージェントのための、LangChain の MIT ライセンスのフレームワークで、状態、ノード、エッジのグラフとして Python または JavaScript で書きます。永続的な実行（durable execution）と、人間の入力を待つ一時停止を備えます。LangSmith はトレース、評価、デプロイを追加します。Developer は $0（1 シート、Agent Server なし）、Plus は 1 シートあたり月 $39 で小規模な Agent Server が 1 つ付属、Enterprise は個別見積もりです。各ステップを低レベルで制御したいなら、これが向いています。料金：[LangGraph の料金](/pricing/langgraph)。",
        "[AutoGen](/alternatives/autogen)：Python と .NET でマルチエージェントアプリを作るための Microsoft のオープンソースのフレームワークで、グループチャット、ハンドオフ、ノーコードでプロトタイプを作る AutoGen Studio を備えます。README には、プロジェクトは「アーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（“has been archived and is no longer actively maintained by Microsoft”）とあり、新規ユーザーには、Microsoft が AutoGen の直接の後継と呼ぶ Microsoft Agent Framework を案内しています。既存の AutoGen アプリを保守している場合や、そのパターンを学びたい場合に限って選びましょう。",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "セルフホストのエージェントチーム（フレームワークのコードは不要）",
      text: [
        "Relevance AI と同じく、Web アプリやデスクトップアプリから管理するエージェントのチームを持てますが、動かすのは自分のマシンやサーバーです。[Paperclip vs CrewAI](/compare/paperclip-vs-crewai) をご覧ください。",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip)：MIT ライセンスの Node.js サーバーと Web UI で、AI エージェントのチームを会社として動かします。目標を設定し、職種、指揮系統、予算を含む組織図を作り、Claude Code、Codex、OpenClaw など持ち込んだエージェントに issue を割り当てます。Routines は cron、Webhook、API をきっかけに定期的なタスクを作り、承認と予算による強制停止で人間が主導権を保ちます。現在はセルフホストのみで、クラウド版はウェイトリスト段階です。さまざまなエージェントを 1 つの目標に向けて連携させ、支出に上限を設けたいなら、これが向いています。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：セルフホスト可能なワークスペースで、各 Bot が専用のブラウザ、ファイル、ツールを持ち、ルーティン、承認、アクティビティログを備えます。Mac と Windows 向けのデスクトップアプリとして、またはチーム向けに Kubernetes 上で動き、チーム版には企業向けのサインイン、ロール、ツールの権限、監査があります。OpenAI、Claude、Gemini、オープンモデルを持ち込むか、自分のエージェントを AG-UI 経由で接続します。個人プロジェクトは無料で、OpenBot for Business はアクティブユーザーあたり月最大 $29 に加えて、月のモデル利用額のうち $5,000 を超えた分の 5% です。承認と監査証跡のある AI の同僚を自社のインフラで動かしたいなら、これが向いています。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "ホスティング型のアシスタント：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：自分で作るチームではなく、1 つのホスティング型 AI アシスタントです。Slack、メール、iMessage、SMS、電話、Gmail で使う Chrome 拡張機能を通じて、受信トレイ、カレンダー、ミーティング、リサーチ、レポート、フォローアップを扱い、スケジュールやイベントでルーティンを実行し、外部に影響することの前には承認を待ちます。7 日間有効な $50 分の無料クレジットで始まり、その後はアクティブユーザー全員に、3,000 クレジットで月 $29.99 から課金されます。自分で登録してすぐ使えるアシスタントがほしいなら、これが向いています。[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Relevance AI の代替の選び方",
      steps: [
        {
          title: "コードを書くかどうかを決める",
          text: "CrewAI、LangGraph、AutoGen は、プログラムを書いて使うライブラリです。Paperclip、OpenBot、Lindy は設定して使うアプリです。その中間がほしいなら、CrewAI AMP の無料の Basic プランにビジュアルエディターがあります。",
        },
        {
          title: "どこで動かすかを決める",
          text: "Relevance AI と Lindy はホスティング型です。Paperclip は現在セルフホストのみで、OpenBot はノートパソコンか Kubernetes で動きます。フレームワークは自分のコードの中で動き、CrewAI AMP と LangSmith は任意で使えるホスティング型プラットフォームです。",
        },
        {
          title: "今日登録できるものを確認する",
          text: "Relevance AI の公開の料金ページに載っているのは、営業経由の Enterprise のみです。CrewAI AMP Basic と LangSmith Developer は無料プランで、Lindy はクレジットカード不要の無料クレジットで始められ、OpenBot は個人プロジェクトなら無料で、Paperclip のセルフホスト版には Paperclip のアカウントは不要です。",
        },
        {
          title: "フレームワークがメンテナンスされているかを確認する",
          text: "AutoGen の README には、Microsoft はもうメンテナンスしておらず、アーカイブへの移行にあたって本番環境での利用は勧めないと書かれています。新規プロジェクトには、Microsoft は Microsoft Agent Framework を案内しています。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Crewmark：Claude Code や Codex で動く AI 社員のチーム",
      text: [
        "Crewmark は Relevance AI よりも範囲が狭いツールです。エージェントを作るのではなく、すでに使っている Claude Code や Codex に仕事を与えます。各 AI 社員はあなたのパソコン上の Claude Code または Codex の会話として、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を取り、そのステータスを最新に保ちます。エージェント同士が issue を割り当て、コメントし、@メンションし、そのたびに関係するエージェントが起動します。",
        "オープンソース（GPL-3.0）で、セルフホストもできます。Free プランは 1 プロジェクト、AI 社員 3 人までです。Pro（月 $5）と Team（月 $10）は近日提供予定で、課金の仕組みはまだできていないため、それまではすべてのアカウントが Crewmark を無料で使えます。エージェントの利用料はエージェントのプロバイダーに支払い、ハートビートのためにパソコンは起動したままにしておく必要があります。詳しくは [Crewmark の料金](/pricing)で。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "各社員に、職種、目標、プロジェクトを与えます。たとえば SEO スペシャリストやソフトウェアエンジニアです。[AI 社員の職種](/ai-employees)をご覧ください。",
        },
        {
          title: "仕事をボードに載せる",
          text: "ステータスと優先度を付けて issue を割り当て、定期的なものは繰り返すよう設定します。レビュー、許可、情報が必要になると、エージェントは issue を「要対応」にして待ちます。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間中、ハートビートが 15 分から 24 時間ごとに各社員を起こします。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "今日から使い始められるエージェントがほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Relevance AI の代替に関するよくある質問",
    items: [
      {
        q: "Relevance AI のオープンソースの代替はありますか？",
        a: "あります。CrewAI と LangGraph は MIT ライセンスのフレームワークで、AutoGen のコードも MIT です（ただし README ではアーカイブ済みとされています）。Paperclip（MIT）と OpenBot（別ライセンスの CopilotKit Intelligence の上で動く MIT のアプリケーションテンプレート）は、エージェントのチームを動かすためのセルフホスト型のアプリで、Crewmark は GPL-3.0 です。Relevance AI 自体はオープンソースではありません。",
      },
      {
        q: "Relevance AI に無料プランはありますか？",
        a: "ありません。2026年11月13日時点で、ドキュメントには Free プランが新規登録と既存アカウントの両方で廃止されたとあり、料金ページに載っているプランは、営業経由で個別見積もりの Enterprise の 1 つだけです。詳しくは [Relevance AI の料金](/pricing/relevance-ai)で。",
      },
      {
        q: "無料の Relevance AI の代替はありますか？",
        a: "CrewAI、LangGraph、AutoGen のフレームワークは無料で、モデルプロバイダーに支払います。CrewAI AMP の Basic プランは月 50 回のワークフロー実行付きで無料、LangSmith の Developer プランは 1 シートで $0 です。Paperclip はセルフホストなら無料、OpenBot は個人プロジェクトなら無料、Lindy は 7 日間 $50 分のクレジットで始められ、Crewmark の Free プランは AI 社員 3 人までです。",
      },
      {
        q: "ノーコードの Relevance AI の代替はありますか？",
        a: "CrewAI AMP の無料の Basic プランには、ビジュアルエディターと AI コパイロットが含まれます。Lindy はビルダーを使わず、会話の中で設定します。AutoGen Studio はノーコードでプロトタイプを作る UI ですが、README には本番環境向けのアプリとして作られたものではないと書かれています。",
      },
      {
        q: "Relevance AI の代替をセルフホストできますか？",
        a: "できます。Paperclip は 1 つの Node.js プロセスか Docker イメージとして、OpenBot はノートパソコンか Kubernetes で、Crewmark はリポジトリから（Node.js、PostgreSQL、Google サインイン）動かせます。CrewAI、LangGraph、AutoGen のフレームワークは自分のコードの中で動き、CrewAI AMP Enterprise は自社の VPC にデプロイでき、LangSmith のセルフホスト版 Agent Server は Enterprise のオプションです。Relevance AI はセルフホストの選択肢を示していません。",
      },
      {
        q: "Relevance AI と Lindy の違いは？",
        a: "Relevance AI は、多数の専門エージェントを作って Workforce につなげるための基盤で、営業経由で販売されています。Lindy は、受信トレイ、カレンダー、ミーティング、Slack のための既製のアシスタントが 1 つで、アクティブユーザーごとにクレジットで、月 $29.99 から課金されます。[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) をご覧ください。",
      },
    ],
  },
  cta: {
    title: "営業との商談なしで、エージェントに仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品自身のページ、ドキュメント、料金、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Relevance AI、crewAI、LangChain、Microsoft、Paperclip Labs、CopilotKit、Lindy とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
