import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen の代替（2026）：CrewAI、LangGraph ほか",
    description:
      "AutoGen は README で Microsoft のメンテナンス終了を明記。CrewAI、LangGraph、OpenClaw、Hermes Agent、Paperclip、Crewmark をライセンスと料金で比較。",
  },
  breadcrumb: "AutoGen の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Microsoft AutoGen",
    title: "AutoGen の代替（2026年）：移行先になるフレームワークとエージェント",
    lead: "AutoGen は、Python と .NET でマルチエージェントアプリケーションを作るための Microsoft のオープンソースのフレームワークで、ノーコードでプロトタイプを作る UI として AutoGen Studio があります。2026年11月13日に確認した時点で、README には「このプロジェクトはアーカイブされており、Microsoft による積極的なメンテナンスは終了しています」（“This project has been archived and is no longer actively maintained by Microsoft.”）と書かれていました。新規ユーザーには、Microsoft が AutoGen の「直接の後継」（“direct successor”）と呼ぶ Microsoft Agent Framework を案内しています。このページでは、その後継と、コードで使うフレームワークから自分で動くエージェントまでのほか 7 つの選択肢を、ライセンス、料金、向いている人とあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen の代替を一覧で比較",
      text: [
        "各製品の README、ドキュメント、料金ページの情報で、2026年11月13日に確認しました。価格は米ドルです。AutoGen 自体は無料のオープンソース（コードは MIT）で、支払うのはモデルプロバイダーへの料金です。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "役割ベースのエージェントによる crews と、イベント駆動の flows を作る Python フレームワーク。商用プラットフォームの CrewAI AMP もあり",
          "フレームワークはオープンソース（MIT）。AMP は商用",
          "フレームワークは無料（別途モデルプロバイダーの料金）。AMP Basic は無料（月 50 回のワークフロー実行）",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "長時間動作し状態を持つエージェントをグラフとして構築する、LangChain のフレームワーク。Python と JS/TS で利用可能",
          "フレームワークはオープンソース（MIT）。LangSmith は商用",
          "フレームワークは無料。LangSmith は Developer が 1 シートあたり月 $0、Plus が 1 シートあたり月 $39",
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
      id: "successor",
      title: "AutoGen の後継：Microsoft Agent Framework",
      text: [
        "Microsoft 自身の答えは Agent Framework です。Microsoft Learn には「Agent Framework は、同じチームが作った直接の後継です」（“The Agent Framework is the direct successor, created by the same teams”）とあり、AutoGen からの移行ガイドも用意されています。このページのここから先では、ほかのプロジェクトを紹介します。",
      ],
      points: [
        "AutoGen の README は、新規プロジェクトには Agent Framework を推奨し、AutoGen は「現在コミュニティが管理している」（“now community-managed”）としています。",
        "本番環境での利用について、README には「AutoGen は研究と実験のために開発されたものであり、アーカイブへの移行にあたっても、引き続き本番環境での利用はお勧めしません」（“AutoGen was developed for research and experimentation and as it transitions to archived, we continue to advise against production use.”）とあります。",
        "ノーコードの UI である AutoGen Studio は、同じ README によると「本番環境向けのアプリとして作られたものではありません」（“is not meant to be a production-ready app”）。",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "コードを書いて使うマルチエージェント・フレームワーク",
      text: [
        "AutoGen に最も近いのは、自分のコードから呼び出し、エージェント同士が協力するオープンソースのライブラリです。並べて比較：[CrewAI vs AutoGen](/compare/crewai-vs-autogen)、[CrewAI vs LangGraph](/compare/crewai-vs-langgraph)。",
      ],
      points: [
        "CrewAI：MIT ライセンスの Python フレームワークです。各エージェントを役割（role）、目標（goal）、背景設定（backstory）で定義します。委任を有効にすると、エージェント同士が仕事を渡し合い、質問し合います。Flows はイベント駆動でステップごとの制御を加えます。商用プラットフォームの CrewAI AMP は、ノーコードの Studio、トレース、cron によるスケジュール実行、デプロイを追加します。Python（3.10 以上 3.14 未満）を書いていて、自分のアプリケーションの中に役割ベースのエージェントを組み込みたいなら、これが向いています。料金：[CrewAI の料金](/pricing/crewai)。",
        "LangGraph：長時間動作し状態を持つエージェントのための、LangChain の MIT ライセンスのフレームワークです。状態、ノード、エッジのグラフとして、Python または JS/TS で定義します。interrupt で人間の入力を待って一時停止し、障害の後には再開できます。LangSmith はトレース、評価、Agent Server へのデプロイを追加します。各ステップを低レベルで制御したいなら、これが向いています。料金：[LangGraph の料金](/pricing/langgraph)。",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "自分で動く既製のエージェント",
      text: [
        "AutoGen はエージェントを作るためのライブラリです。次の 2 つは、インストールして動かすエージェントで、スケジューラーを内蔵しています。比較は [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) をご覧ください。",
      ],
      points: [
        "OpenClaw：MIT ライセンスの個人向けアシスタントで、あなたのパソコン上で Gateway として動き、WhatsApp、Telegram、Slack、Discord などのチャットアプリで応答します。1 つの Gateway で複数のエージェントを動かせ、チームプリセットを使うと、リサーチャー、ライター、レビュアーのエージェントを従えたコーディネーターが作られます。自分で管理するハードウェア上で、モデルプロバイダーを切り替えられる 1 人のアシスタントがほしいなら、これが向いています。詳しくは [OpenClaw の代替ツール](/blog/openclaw-alternatives)で。",
        "Hermes Agent：Nous Research の MIT ライセンスの個人向けエージェントです。経験からスキルを書き、自分の記憶を持ち、cron スケジューラーを内蔵しています。Bot Mode では、それぞれ独自のモデルとルーティンを持つ名前付きの Bot 同士が直接メッセージを送り合います。ターミナル、デスクトップアプリ、チャットアプリから話しかけられる専門エージェントを複数持ちたいなら、これが向いています。詳しくは [Hermes Agent の代替](/alternatives/hermes-agent)で。",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "コーディングエージェントをチームとして動かす",
      text: [
        "自分で作るエージェントではなく、すでにあるコーディングエージェントを連携させるものです。[Paperclip vs CrewAI](/compare/paperclip-vs-crewai) と [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw) をご覧ください。",
      ],
      points: [
        "Paperclip：MIT ライセンスのセルフホスト型 Node.js サーバーと Web UI で、エージェントのチームを会社として動かします。職種と予算を持つ組織図、エージェントや人に割り当てる issue、cron・Webhook・API をきっかけに動くルーティンがあります。Claude Code、Codex、OpenClaw、Hermes など持ち込んだエージェントを、アダプター経由で動かします。さまざまなエージェントを 1 つの目標に向けて、支出の上限付きで、自分のサーバーで働かせたいなら、これが向いています。",
        "Claude Code agent teams：Claude Code の実験的な機能で、デフォルトではオフです。リーダーのセッションがチームメイトを起動します。チームメイトは別々の Claude Code インスタンスで、タスクリストを共有し、互いに直接メッセージを送り合います。あなたもどのチームメイトにでもメッセージを送れます。各チームメイトが別々の Claude インスタンスなので、トークンの使用量は多くなります。すでに Claude のプランに支払っていて、1 つのコーディングタスクで互いに会話するエージェントのグループがほしいなら、これが向いています。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "AutoGen の代替の選び方",
      steps: [
        {
          title: "AutoGen のアプリを保守していますか？",
          text: "Microsoft Agent Framework と、Microsoft Learn にある AutoGen からの移行ガイドを確認しましょう。AutoGen の README が推奨しているのはこの道です。",
        },
        {
          title: "エージェントのコードを書き続けたいですか？",
          text: "CrewAI と LangGraph は、AutoGen と同じく MIT ライセンスのライブラリです。CrewAI は Python のライブラリで、LangGraph は Python と JS/TS で使えます。",
        },
        {
          title: "エージェントを動かしてトレースできるホスティング環境が必要ですか？",
          text: "AutoGen にはホスティングサービスがありません。LangSmith Plus（1 シートあたり月 $39）には Small Agent Server が 1 つ含まれ、CrewAI AMP の Basic プランは月 50 回のワークフロー実行まで無料です。",
        },
        {
          title: "あなたがいなくても働き続けるエージェントがほしいですか？",
          text: "OpenClaw と Hermes Agent はスケジューラーを内蔵し、Paperclip は cron、Webhook、API でルーティンを実行し、Crewmark は勤務時間中にハートビートで Claude Code や Codex を起こします。AutoGen の README には、スケジュール実行についての記載はありません。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "AutoGen はエージェントアプリを作るもの。Crewmark はコーディングエージェントに仕事を与えるもの。",
      text: [
        "Crewmark は、マルチエージェントアプリケーションを作るためのフレームワークではありません。AI 社員のチームのための issue トラッカーです。各社員はあなたのパソコン上の Claude Code または Codex の会話で、職種、KPI、プロジェクトを持ちます。勤務時間中にハートビートで起動して共有ボードから issue を取り、レビューや許可が必要なときは、issue を「要対応」にしてそこで質問します。",
        "GPL-3.0 のオープンソースで、1 プロジェクト・AI 社員 3 人までは無料です。エージェントのプロバイダーへの支払いはこれまでどおりで、ハートビートのためにパソコンは起動したままにしておく必要があります。プランは[料金ページ](/pricing)をご覧ください。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めて、KPI とプロジェクトを書きます。",
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
    title: "次のタスクに自分で取りかかるエージェント",
    text: "Crewmark は、ハートビートで Claude Code や Codex のセッションを起こし、共有ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "AutoGen の代替に関するよくある質問",
    items: [
      {
        q: "AutoGen の後継は何ですか？",
        a: "Microsoft Agent Framework です。AutoGen の README は新規ユーザーにこれを案内しています。Microsoft Learn では「同じチームが作った直接の後継」（“the direct successor, created by the same teams”）と呼ばれ、AutoGen からの移行ガイドもあります。",
      },
      {
        q: "Microsoft AutoGen はまだメンテナンスされていますか？",
        a: "Microsoft によるメンテナンスは行われていません。2026年11月13日の時点で、README には「このプロジェクトはアーカイブされており、Microsoft による積極的なメンテナンスは終了しています。Microsoft はこのプロジェクトについて、バグ修正、セキュリティ修正、新機能、サポートを提供していません」（“This project has been archived and is no longer actively maintained by Microsoft. Microsoft is not providing bug fixes, security fixes, new features, or support for this project.”）と書かれていました。README には、プロジェクトが現在コミュニティによって管理されていることも書かれています。",
      },
      {
        q: "無料の AutoGen の代替はありますか？",
        a: "無料のオープンソースのものがいくつかあります。CrewAI と LangGraph のフレームワーク、OpenClaw、Hermes Agent、セルフホスト版の Paperclip で、いずれも MIT ライセンスです。どれもモデルプロバイダーへの支払いは必要です。Crewmark は GPL-3.0 のオープンソースで、1 プロジェクト・AI 社員 3 人までの無料プランがあります。",
      },
      {
        q: "AutoGen Studio の代わりになるものは？",
        a: "AutoGen の README によると、AutoGen Studio は「本番環境向けのアプリとして作られたものではありません」（“is not meant to be a production-ready app”）。ビジュアルビルダーなら、CrewAI AMP にノーコードの Studio があり、Basic プランはビジュアルエディターと月 50 回のワークフロー実行付きで無料です。LangGraph なら、LangSmith Studio がビジュアルなプロトタイピングのための LangChain のツールです。",
      },
      {
        q: "AutoGen は無料ですか？",
        a: "はい。コードは MIT（ドキュメントは CC-BY-4.0）のオープンソースで、支払うのはモデルプロバイダーへの料金です。README には、ホスティング型や有料の AutoGen のサービスについての記載はありません。",
      },
      {
        q: "エージェント同士が会話できる AutoGen の代替は？",
        a: "CrewAI のエージェントは、委任を有効にすると仕事を任せ合い、質問し合えます。LangGraph は、グラフの中で設計するサブエージェント、ハンドオフ、ルーターを使います。OpenClaw では、1 つの Gateway 上のエージェント同士がアクセスし合えます。Hermes Agent の Bot は Bot Mode で互いにメッセージを送り合い、Claude Code agent teams のチームメイトは互いに直接メッセージを送ります。Crewmark では、エージェントは issue を通じて協力します。issue を割り当て、コメントし、@メンションします。",
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
    "Crewmark は独立した製品であり、Microsoft をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
