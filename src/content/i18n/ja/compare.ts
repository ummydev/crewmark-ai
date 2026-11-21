import type { CompareBundle } from "@/content/compare/types";

// Japanese translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "比較",
    hubName: "製品比較",
    cta: "今すぐ始める",
    secondary: "比較表を見る",
    shortTitle: "{a} と {b} をそれぞれ一行で",
    tableTitle: "{a} vs {b} vs Crewmark の比較一覧",
    rows: {
      category: "どんな製品か",
      openSource: "オープンソース",
      pricing: "料金",
      runs: "動作する場所",
      agents: "エージェントとモデル",
      board: "タスクボード",
      schedule: "スケジュール実行",
      talk: "エージェント同士のやり取り",
    },
    differencesTitle: "{a} と {b} の主な違い",
    pickTitle: "{x} が向いているケース",
    crewmarkTitle: "Crewmark の位置づけ",
    crewmarkText:
      "Crewmark は、どちらとも異なるレイヤーで動きます。コーディングエージェントを置き換えるのではなく、エージェントに仕事を与えます。AI 社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種・目標・勤務時間を持っています。",
    crewmarkPoints: [
      "勤務時間中は、ハートビートが各社員を 15 分ごとから 1 日 1 回までの間隔で起こし、次の issue に取りかからせます。",
      "ステータス、優先度、コメント、@メンションを備えた共有ボード。割り当て、コメント、メンションをすると、対象のエージェントが起動します。",
      "GPL-3.0 のオープンソースで、1 プロジェクト・AI 社員 3 人までは無料です。",
      "エージェント同士のダイレクトメッセージと報告ラインは今後提供予定です。",
    ],
    sourcesTitle: "確認方法",
    sourcesText:
      "このページの情報はすべて、各製品の公式サイト、料金ページ、ドキュメント、GitHub リポジトリをもとに、2026年11月13日に確認したものです。料金やプランは変わることがあるため、購入前に各社のページをご確認ください。公式サイト：",
    relatedTitle: "ほかの比較",
    moreTitle: "代替ツールと料金",
    alternativesLabel: "{x} の代替",
    pricingLabel: "{x} の料金",
    midTitle: "エージェントをスケジュールどおりに働かせたいですか？",
    midText:
      "Crewmark は Claude Code と Codex に職種、ハートビート、共有ボードを与え、エージェントが自分で次の仕事に取りかかるようにします。",
    midButton: "今すぐ始める",
    faqTitle: "よくある質問",
    crewmarkFaq: {
      q: "Crewmark は {a} や {b} の代わりになりますか？",
      a: "担う範囲が異なります。Crewmark は独自のエージェントを持たず、Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。{a} と {b} を何に使っているかによって、併用することも、エージェントの仕事をスケジュールして追跡する部分を Crewmark に任せることもできます。",
    },
    ctaTitle: "Claude Code と Codex のエージェントに、プロンプトだけでなく仕事を与えましょう。",
    ctaText: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    ctaButton: "今すぐ始める",
    checked: "2026年11月13日に、各製品の公式サイト、料金ページ、ドキュメント、GitHub で情報を確認しました。",
    disclaimer:
      "Crewmark は独立した製品であり、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は、上記の日付時点の公開サイトとドキュメントに基づいています。",
    hub: {
      meta: {
        title: "AI エージェントツール比較：30 組を横並びで",
        description:
          "Paperclip、CrewAI、LangGraph、OpenClaw、Claude Code、Codex、Devin など AI エージェントツールを、各社公表の料金と機能で比較。",
      },
      breadcrumb: "製品比較",
      title: "AI エージェントツールを横並びで比較",
      lead: "各ページでは 2 つのツールを並べ、3 列目に Crewmark を置いて、各社の公式サイト、料金ページ、ドキュメント、GitHub に載っている情報だけで比較します。点数も勝者もありません。それぞれが何で、いくらかかり、何ができるかを示すので、合うものを選べます。",
      tableTitle: "すべての比較",
      tableHeaders: ["比較", "概要"],
      productsTitle: "取り上げている製品",
      moreTitle: "代替ツールと料金のページ",
      productsHeaders: ["製品", "どんな製品か", "オープンソース"],
      midTitle: "エージェントをスケジュールどおりに働かせたいですか？",
      ctaTitle: "Claude Code と Codex のエージェントに、プロンプトだけでなく仕事を与えましょう。",
      faq: [
        {
          q: "比較はどのように作っていますか？",
          a: "各製品の公式サイト、料金ページ、ドキュメント、GitHub リポジトリをもとに作成し、各ページ下部に記載した日付に確認しています。製品の採点や順位付けは行っていません。",
        },
        {
          q: "なぜすべてのページに Crewmark が載っているのですか？",
          a: "Crewmark は私たちの製品なので、参考として 3 列目に表示しています。Crewmark はこれらのツールの多くとは異なるレイヤーで動き、Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。",
        },
        {
          q: "料金は最新ですか？",
          a: "表示している日付の時点では正確でした。各社は料金やプランを頻繁に変更するため、購入前に料金ページをご確認ください。",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "セルフホスト型のサーバーと Web アプリ。組織図、予算、タスクを備えた会社として AI エージェントのチームを動かし、Claude Code、Codex、OpenClaw など手持ちのエージェントを駆動します。",
      category: "マルチエージェントのオーケストレーション（「AI の会社」）",
      openSource: "はい、MIT",
      pricing: "セルフホストは無料。料金の公表なし。クラウド版はウェイトリスト段階",
      runs: "Postgres を使うセルフホストの Node.js サーバー、または Docker",
      agents: "アダプター経由で持ち込むエージェント：Claude Code、Codex、OpenClaw、Cursor、Gemini CLI、OpenCode など",
      board: "あり：目標やプロジェクトに紐づく issue を、エージェントまたは人に割り当て",
      schedule: "あり：ハートビートと、cron・Webhook・API で起動する Routines",
      talk: "タスクのスレッドと、組織図に沿った委任を通じて",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "AI コーディングエージェントにチームメイトのように issue を割り当てられるワークスペース。手元のマシン上のデーモンが、すでにお使いのエージェント CLI を実行します。",
      category: "人とコーディングエージェントのための issue ボード",
      openSource: "ソース公開（追加条件付きの Apache 2.0）",
      pricing: "組織内でのセルフホストは無料。クラウド版の料金は非公開",
      runs: "クラウド、セルフホスト（Docker または Helm）、デスクトップアプリ。エージェントは自分で管理するデーモン上で動作",
      agents: "Claude Code、Codex、Cursor Agent、OpenCode、Hermes を含む 29 のエージェント CLI",
      board: "あり：ボード表示とリスト表示。エージェントを担当者に設定可能",
      schedule: "あり：cron、Webhook、手動実行で動く Autopilots",
      talk: "あり：squads ではリーダーのエージェントがメンバーを @メンションして仕事を引き継ぐ",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "プロダクトチーム向けのホスティング型 issue トラッカー。issue を自社の Linear Agent や、Cursor、Codex、Devin などのサードパーティ製エージェントに任せることもできます。",
      category: "エージェント基盤を備えた issue トラッカー",
      openSource: "いいえ",
      pricing: "Free は $0。Basic $10、Business $16（ユーザーあたり月額、年払い）。コーディングエージェントと Loops には AI クレジット",
      runs: "クラウド",
      agents: "Linear Agent、Claude Code または Codex ベースのクラウドのコーディングエージェント、メンバーとして追加するサードパーティ製エージェント",
      board: "あり：issue、プロジェクト、サイクル、イニシアチブ",
      schedule: "あり：スケジュールまたはイベントで動く Loops",
      talk: "記載なし",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "あなたのパソコンで動き、WhatsApp、Telegram、Slack などのチャットアプリで応答する、オープンソースの個人向け AI アシスタント。",
      category: "個人向け AI アシスタント（セルフホスト）",
      openSource: "はい、MIT",
      pricing: "無料。有料プランやホスティングサービスはなし。支払うのはモデルプロバイダーへの料金のみ",
      runs: "自分のマシン上のローカル Gateway。Docker と Nix でのインストールにも対応",
      agents: "プラグインとして接続するモデルプロバイダー：Anthropic、OpenAI、Gemini、OpenRouter、Ollama など",
      board: "なし（Tasks 台帳と TaskFlow は削除済み）",
      schedule: "あり：組み込みの Automations スケジューラーと Webhook",
      talk: "あり：1 つの Gateway に複数のエージェントを置き、エージェント間でアクセス可能。コーディネーター付きのチームプリセットも",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "Nous Research のオープンソースの個人向け AI エージェント。ターミナル、デスクトップアプリ、チャットアプリから使え、経験をもとに自分のスキルを書いて改良します。",
      category: "個人向け AI エージェント（セルフホスト）",
      openSource: "はい、MIT",
      pricing: "エージェントは無料。任意の Nous Portal：Free、Plus $20、Super $100、Ultra $200（月額）",
      runs: "自分のマシンまたはサーバー。Portal の有料プランにはクラウドホストのエージェントが 1 つ付属",
      agents: "任意のモデルプロバイダー：Nous Portal、OpenRouter、OpenAI、Anthropic、Gemini、ローカルモデルなど",
      board: "なし",
      schedule: "あり：組み込みの cron スケジューラーと、Bot ごとのルーティン",
      talk: "あり：サブエージェント。Bot Mode では名前付きの Bot 同士がメッセージを送り合う",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "AI エージェントを構築し、「AI Workforce」と呼ぶマルチエージェントのチームにつなげる、ホスティング型のローコード基盤。営業、サポート、オペレーション業務向けです。",
      category: "AI エージェント基盤（「AI Workforce」）",
      openSource: "いいえ",
      pricing: "公開の料金ページに載っているのは、営業経由の Enterprise のみ",
      runs: "クラウド",
      agents: "ノーコードのビルダーで作る独自のエージェント。クレジットで任意の LLM、または自前のキー",
      board: "issue ボードはなし。タスク履歴と Activity Center",
      schedule: "あり：スケジュールタスクとアプリのトリガー",
      talk: "あり：キャンバス上でつないだエージェント同士が仕事を受け渡す",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "受信トレイ、カレンダー、ミーティング、Slack をまたいで働くホスティング型の AI アシスタント。定期的なルーティンを実行し、外部に影響することは事前に確認を求めます。",
      category: "AI アシスタント（「AI 社員」）",
      openSource: "いいえ",
      pricing: "無料：7 日間 $50 分のクレジット。有料はアクティブユーザーあたり月 $29.99（3,000 クレジット）から",
      runs: "クラウド。Slack、メール、iMessage、電話、Chrome 拡張機能から利用",
      agents: "独自のアシスタント。タスクごとにモデルを自動で選ぶか、自分で選択",
      board: "なし。会話の中でタスクを渡す",
      schedule: "あり：スケジュールまたはイベントで動く Routines",
      talk: "記載なし（ワークスペースごとに Lindy は 1 つ）",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "役割ベースのエージェントによる crews と、ステップごとの flows を構築するオープンソースの Python フレームワーク。デプロイと運用のための商用プラットフォーム CrewAI AMP もあります。",
      category: "マルチエージェントのフレームワーク（Python）とプラットフォーム",
      openSource: "フレームワークはオープンソース（MIT）。AMP プラットフォームは商用",
      pricing: "フレームワークは無料。AMP Basic は無料（月 50 回の実行）。Enterprise は個別見積もり",
      runs: "自分のコードの中のライブラリ。AMP は CrewAI のクラウドまたは自社インフラ",
      agents: "API 経由の LLM（デフォルトは OpenAI。他のプロバイダーやローカルモデルにも対応）",
      board: "なし。タスクはコードで定義",
      schedule: "AMP では cron スケジューリング。フレームワーク単体については記載なし",
      talk: "あり：エージェント同士が仕事を委任し、質問し合う。階層モードではマネージャーエージェントを配置",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "LangChain のオープンソースのフレームワーク。長時間動作し状態を持つエージェントを、状態・ノード・エッジのグラフとしてコードで構築し、LangSmith でデプロイします。",
      category: "エージェントのオーケストレーション・フレームワーク（Python、JS）",
      openSource: "フレームワークはオープンソース（MIT）。LangSmith は商用",
      pricing: "フレームワークは無料。LangSmith は Developer $0、Plus 1 シートあたり月 $39、Enterprise は個別見積もり",
      runs: "自分のアプリケーションの中。Agent Server は LangChain のクラウド、または Enterprise でセルフホスト",
      agents: "コードから呼び出す任意のモデル",
      board: "なし",
      schedule: "Agent Server では cron ジョブ。ライブラリ単体については記載なし",
      talk: "あり（グラフの設計しだい）：サブエージェント、ハンドオフ、ルーター",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "Python と .NET でマルチエージェントアプリケーションを作るための、Microsoft のオープンソースのフレームワーク。現在の README では、アーカイブ済みで Microsoft によるメンテナンスは終了したとされ、Microsoft Agent Framework が案内されています。",
      category: "マルチエージェントのフレームワーク（Python、.NET）",
      openSource: "はい：コードは MIT、ドキュメントは CC-BY-4.0",
      pricing: "無料。ホスティングサービスはなし",
      runs: "自分のコードの中のライブラリ。AutoGen Studio はローカルで動作",
      agents: "OpenAI と Azure のモデルクライアント。Anthropic、Ollama、Gemini は実験的扱い",
      board: "なし",
      schedule: "記載なし",
      talk: "あり：グループチャット、selector チームと swarm チーム、メッセージパッシング",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "Claude Code、Codex、Cursor、OpenCode のエージェントを、それぞれ専用の git worktree で並べて動かす Mac アプリ。2026年11月4日に Meta への合流を発表し、新規登録とダウンロードを締め切りました。",
      category: "コーディングエージェントの並列実行ツール（Mac アプリ）",
      openSource: "いいえ",
      pricing: "無料で利用可能。現在、クラウドプランの料金の掲載はなし",
      runs: "Mac アプリ。Conductor Cloud は11月13日から読み取り専用、2026年11月20日に終了",
      agents: "Claude Code、Codex、OpenCode、Cursor Agent（自分のサブスクリプションまたはキーで利用）",
      board: "issue ボードはなし。ワークスペースの一覧があり、GitHub や Linear の issue から作成可能",
      schedule: "クラウド限定の Routines（クラウドとともに終了）",
      talk: "Claude Code の agent teams を有効にすると、エージェント間のメッセージを表示",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "複数のコーディングエージェントを同時に、それぞれ専用の tmux セッションと git worktree で動かし、別々のブランチで作業させるオープンソースのターミナルアプリ。",
      category: "コーディングエージェントの並列実行ツール（ターミナル）",
      openSource: "はい、AGPL-3.0",
      pricing: "無料",
      runs: "ターミナル。tmux と GitHub CLI が必要",
      agents: "デフォルトは Claude Code。Codex、Gemini、Aider、または設定した任意のプログラム",
      board: "なし。プレビューと diff 付きのインスタンス一覧",
      schedule: "記載なし",
      talk: "記載なし",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "コーディングエージェントの仕事のためのカンバンボード。issue ごとに、git worktree と選んだエージェントを備えたワークスペースが用意されます。運営会社の bloop は2026年4月に事業を終了し、プロジェクトはコミュニティがメンテナンスするオープンソースとして続いています。",
      category: "カンバンボード兼コーディングエージェントの並列実行ツール",
      openSource: "はい、Apache-2.0",
      pricing: "ローカルアプリは無料。有料サブスクリプションは2026年4月に終了",
      runs: "ブラウザ上またはデスクトップアプリとしてローカルで動作。クラウド部分はセルフホスト可能",
      agents: "Claude Code、Codex、Gemini CLI、GitHub Copilot、Amp、Cursor、OpenCode など",
      board: "あり：優先度とタグ付きのカンバン issue（サインインが必要）",
      schedule: "記載なし",
      talk: "記載なし",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "Anthropic のコーディングエージェント。ターミナル、IDE 拡張機能、デスクトップアプリ、Web から、コードベースを読み、ファイルを編集し、コマンドを実行します。",
      category: "コーディングエージェント",
      openSource: "いいえ（リポジトリは公開、著作権はすべて留保）",
      pricing: "Claude の有料プランに含まれる：Pro 月 $20、Max $100、Ultra $200。Team と Enterprise はシート単位",
      runs: "ターミナル、IDE 拡張機能、デスクトップアプリ、Web、モバイル",
      agents: "Claude モデルで動く独自のエージェント",
      board: "issue ボードはなし。agent teams はタスクリストを共有",
      schedule: "あり：クラウドのスケジュールタスク、デスクトップのスケジュールタスク、`/loop`",
      talk: "実験的な agent teams ではチームメイト同士がメッセージを送り合う。サブエージェントは結果を報告",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "Claude Code の実験的な機能（デフォルトはオフ）。リーダーのセッションがチームメイトを起動します。チームメイトは別々の Claude Code インスタンスで、タスクリストを共有し、互いにメッセージを送り合います。",
      category: "コーディングエージェントのマルチエージェントモード",
      openSource: "いいえ（Claude Code の一部）",
      pricing: "Claude の有料プランの Claude Code に付属",
      runs: "自分の Claude Code セッション",
      agents: "Claude モデルで動く Claude Code インスタンス",
      board: "チームメイトが引き受けていく、依存関係付きの共有タスクリスト",
      schedule: "agent teams の機能ではない。Claude Code には別途スケジュールタスクあり",
      talk: "あり：チームメイト同士がメッセージを送り合い、ユーザーもどのチームメイトにもメッセージを送れる",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "OpenAI のコーディングエージェント。ターミナルの CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、クラウドで使え、ChatGPT のプランに含まれるほか、API キーでも利用できます。",
      category: "コーディングエージェント",
      openSource: "一部：CLI、SDK、App Server は Apache-2.0。IDE 拡張機能とクラウドは非公開",
      pricing: "ChatGPT のプラン（Plus 月 $20 から）に含まれる、または OpenAI の API キーで利用",
      runs: "ターミナル、IDE 拡張機能、ChatGPT デスクトップアプリ、Codex Cloud",
      agents: "OpenAI モデルで動く独自のエージェント",
      board: "issue ボードはなし。有料プランでは Linear の issue を受け付ける",
      schedule: "あり：ChatGPT デスクトップアプリと Web のスケジュールタスク",
      talk: "サブエージェント：親がエージェントを起動し、結果を集める",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "ローカルモデルを含む 200 以上のプロバイダーのモデルで動く、オープンソースのコーディングエージェント。ターミナル UI、デスクトップアプリ、Web アプリ、SDK として使えます。",
      category: "コーディングエージェント",
      openSource: "はい、MIT",
      pricing: "エージェントは無料（無料モデルあり）。OpenCode Go 月 $10、Go Plus 月 $40",
      runs: "自分のマシン上のターミナル、デスクトップアプリ、Web アプリ、SDK",
      agents: "独自のエージェント。ローカルモデルを含む 200 以上のモデルプロバイダー",
      board: "記載なし",
      schedule: "実験的なオプトインのスケジュール（2026年10月から）",
      talk: "サブエージェントが親エージェントに報告",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "Cognition の AI ソフトウェアエンジニア。コードを書き、実行・テストし、プルリクエストを作成します。専用の仮想マシンで動くクラウドセッションのほか、Devin Desktop と Devin CLI でローカルでも動きます。",
      category: "AI ソフトウェアエンジニア",
      openSource: "いいえ",
      pricing: "Free $0、Pro 月 $20、Max 月 $200、Teams 月 $80 + 開発者シートあたり $40",
      runs: "セッションごとのクラウド VM。ローカルでは Devin Desktop と CLI",
      agents: "独自のエージェント。Cognition の SWE-2 と、複数のラボのフロンティアモデル",
      board: "独自のボードはなし。Linear、Jira、GitHub のチケットを受け付ける",
      schedule: "あり：スケジュールまたはイベントで動く Automations",
      talk: "あり：コーディネーターのセッションが子の Devin を起動し、メッセージを送る",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "Droids と呼ばれるコーディングエージェント。デスクトップアプリ、CLI、CI でのヘッドレス実行、Factory がホストするクラウドコンピューターで動きます。",
      category: "コーディングエージェント基盤（Droids）",
      openSource: "いいえ",
      pricing: "推論を自分で用意すれば無料。Pro 月 $20、Plus 月 $100、さらに上位のプランあり",
      runs: "ローカルではデスクトップアプリと CLI。クラウドの Droid Computers。CI ではヘッドレス",
      agents: "フロンティアモデルとオープンウェイトモデルで動く独自のエージェント、または自前のキー",
      board: "汎用のボードはなし。Linear と Jira の issue を受け付ける。Workstreams（ベータ）にタスク一覧",
      schedule: "あり：スケジュール、Slack、GitHub、Webhook で動く Automations",
      talk: "あり（Workstreams、ベータ）：オーケストレーターのもとでエージェントが結果を報告",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "xAI のホスティング型 AI チームメイト。Bot はそれぞれクラウドに専用のコンピューターを持ち、あなたのツールにサインインし、Slack や Microsoft Teams で働き、ルーティンを実行し、互いに仕事を引き継ぎます。",
      category: "AI の同僚（ホスティング型）",
      openSource: "いいえ",
      pricing: "Premium $30、Super $100、Ultra $200（月額、週ごとの利用枠込み）。Teams と Enterprise は営業経由",
      runs: "Bot ごとのクラウドコンピューター。デスクトップとモバイルのアプリ。Slack、Teams、ビデオ通話の中",
      agents: "Grok で作られた独自の Bot",
      board: "記載なし。仕事はチャット、スレッド、ミーティングで引き継ぐ",
      schedule: "あり：スケジュールで動くルーティンと、ユーザーの作業を見て覚えるワークフロー",
      talk: "あり：Bot 同士がメッセージを送り合い、グループチャットで連携",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "CopilotKit のオープンソースでセルフホスト可能な、AI の同僚のためのワークスペース。各 Bot が専用のブラウザ、ファイル、ツールを持ち、モデルとエージェントは自分で持ち込みます。",
      category: "AI の同僚のワークスペース（セルフホスト可能）",
      openSource: "はい、MIT（別ライセンスの CopilotKit Intelligence を使用）",
      pricing: "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
      runs: "Mac と Windows のデスクトップアプリ。チーム向けには Kubernetes",
      agents: "組み込みの Bot、または AG-UI 経由の自前のエージェント。OpenAI、Claude、Gemini、オープンモデル",
      board: "記載なし",
      schedule: "あり：Routines",
      talk: "記載なし",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "Claude のアプリでコーディング以外の仕事をこなす Anthropic のエージェント。ほしい成果を伝えると、あなたのファイル、アプリ、ブラウザの中で、リサーチ、ドキュメント、スプレッドシート、スライドの作業を進めます。",
      category: "ナレッジワーク向けの AI の同僚",
      openSource: "いいえ",
      pricing: "Claude の有料プラン：Pro 月 $20、Max $100、Ultra $200。Team と Enterprise はシート単位",
      runs: "Anthropic のクラウド。ローカルのファイルとブラウザは Claude Desktop 経由",
      agents: "Claude モデル",
      board: "ボードはなし。タスクリストと Scheduled ページ",
      schedule: "あり：毎時、毎日、毎週、平日に、クラウドで",
      talk: "タスク内のサブエージェント",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "Outlook、Teams、Word、Excel、PowerPoint、OneDrive、SharePoint をまたいで複数ステップのタスクをこなす Microsoft 365 Copilot のエージェント。重要な操作の前には承認を求めます。",
      category: "Microsoft 365 向けの AI の同僚",
      openSource: "いいえ",
      pricing: "Microsoft 365 Copilot ライセンスに加えて Copilot Credits（従量課金で 1 クレジット $0.01）",
      runs: "Microsoft のクラウド。OneDrive と SharePoint のファイルを使用",
      agents: "テナントの設定に応じて GPT、Claude、Grok のモデルを選べるモデルピッカー",
      board: "記載なし",
      schedule: "あり：スケジュールされたプロンプト（ユーザーあたり最大 25 件）と、メールや Teams のトリガー",
      talk: "記載なし",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "スライド資料、スプレッドシート、分析など、最後に確認する成果物ができあがるタスクのための ChatGPT の Work モード。中核の機能と利用枠を Codex と共有します。",
      category: "ChatGPT の中の AI の同僚",
      openSource: "いいえ",
      pricing: "ChatGPT のプランに含まれる：Free と Go はデスクトップアプリで制限付き。Plus 月 $20 からフル利用",
      runs: "OpenAI のクラウド、またはデスクトップアプリ経由であなたのコンピューター",
      agents: "OpenAI モデル",
      board: "記載なし",
      schedule: "あり：スケジュールタスク。対象プランでは Gmail、Slack、GitHub のトリガー",
      talk: "タスク内のサブエージェント",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "コーディネーターエージェントが大きなコーディング作業を計画し、並列に動く多数のクラウドエージェントに任せる Cursor の機能。共有のメモとタスクボードを備えます。",
      category: "マルチエージェントのコーディング用ワークスペース",
      openSource: "いいえ",
      pricing: "Cursor Premium 月 $30 以上、Teams、Enterprise。Free と Plus は対象外",
      runs: "Cursor のクラウドエージェント。あなたのマシンで実行が必要なときはローカルのエージェント",
      agents: "Cursor のエージェント。コーディネーターのモデルは自分で選ぶ",
      board: "あり：タスクリストとボード。Multiplayer Projects では共有",
      schedule: "あり：スケジュール、Slack チャンネル、プルリクエストの動き",
      talk: "あり：コーディネーターがワーカーエージェントを動かす。Multiplayer Projects ではコーディネーター同士がメッセージを送り合う",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "エージェント、ワークフロー、アプリを作り、Microsoft Copilot、Teams、Web サイト、電話回線などのチャネルに公開するための Microsoft のローコードスタジオ。",
      category: "ローコードのエージェント・ワークフロービルダー",
      openSource: "いいえ",
      pricing: "Copilot Credits：25,000 クレジットのパックが月 $200（年払い）、または従量課金で 1 クレジット $0.01",
      runs: "Microsoft のクラウド。Power Platform の環境内",
      agents: "自分で作るエージェント。GPT、Claude、Grok のモデルを含め、エージェントごとにモデルを選択",
      board: "ボードはなし。Monitor タブと Workflows ページ",
      schedule: "あり：スケジュールとイベントのトリガー（SharePoint、メール、Dataverse など）とワークフロー",
      talk: "あり：接続されたエージェント、Foundry と A2A のエージェント。ワークフローから Copilot Cowork のタスクを開始可能",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "AI 社員のチームのための issue トラッカー。各社員はあなたのパソコン上の Claude Code または Codex の会話で、職種と目標を持ち、ハートビートで起動して共有ボードから issue を取ります。",
      category: "Claude Code と Codex のための AI 社員（マルチエージェントハーネス）",
      openSource: "はい、GPL-3.0",
      pricing: "無料：1 プロジェクト、AI 社員 3 人まで。Pro 月 $5、Team 月 $10 は近日提供",
      runs: "Web アプリ。エージェントはあなたのパソコンの Claude Code または Codex で動作。セルフホストも可能",
      agents: "Claude Code と Codex（自分のサブスクリプションで利用）",
      board: "あり：ステータス、優先度、担当者、コメント、@メンション",
      schedule: "あり：勤務時間中のハートビート（15 分〜24 時間）と繰り返しの issue",
      talk: "現在は issue を通じて。ダイレクトメッセージと報告ラインは今後提供予定",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "セルフホスト型の「AI の会社」のコントロールプレーンと、Python のマルチエージェント・フレームワーク",
      title: "Paperclip vs CrewAI：AI の会社かフレームワークか",
      description:
        "Paperclip vs CrewAI：エージェントを会社として動かすセルフホスト型の管理基盤か、crew を作る Python フレームワークか。料金、オープンソース、スケジュールを比較。",
      h1: "Paperclip vs CrewAI：エージェントを会社として動かすか、コードで組むか",
      lead: "Paperclip と CrewAI はどちらも複数の AI エージェントをまとめますが、レイヤーが異なります。Paperclip は組織図、タスク、予算を備えたセルフホスト型のアプリで、Claude Code や Codex など、すでに使っているエージェントを動かします。CrewAI は、API 経由で LLM を呼び出す役割ベースのエージェントの crews を書くための Python フレームワークで、デプロイ用の商用プラットフォームもあります。事実を一つずつ比較し、Crewmark の位置づけも紹介します。",
      differences: [
        "レイヤー：Paperclip は Web UI で運用・管理するアプリケーション、CrewAI はコードを書いて使うライブラリです。",
        "エージェント：Paperclip は Claude Code、Codex、OpenClaw などの既存のエージェントをアダプター経由で動かします。CrewAI のエージェントは Python で役割（role）、目標（goal）、背景設定（backstory）を定義し、LLM の API を呼び出します。",
        "仕事：Paperclip には、目標やプロジェクトに紐づき、エージェントや人に割り当てるチケットがあります。CrewAI はコード内の crews と flows の中でタスクを定義します。",
        "スケジュール：Paperclip にはハートビートと cron ベースの Routines があります。CrewAI が cron スケジューリングを掲げているのは AMP プラットフォームで、フレームワーク単体ではありません。",
      ],
      pickA: [
        "Claude Code や Codex など、すでに動かしているエージェントに組織図、予算、チケットを持たせたい。",
        "チームをコードではなく Web UI で管理し、セルフホストで運用したい。",
      ],
      pickB: [
        "自分の Python アプリケーションにエージェントのワークフローを組み込みたい。",
        "各エージェントのモデルとツールをコードで選び、CrewAI のプラットフォームか自社インフラにデプロイしたい。",
      ],
      faq: [
        { q: "Paperclip はオープンソースですか？", a: "はい。MIT ライセンスで、セルフホスト版は無料です。クラウド版はウェイトリスト段階です。" },
        {
          q: "CrewAI は無料ですか？",
          a: "CrewAI のフレームワークは MIT ライセンスのオープンソースで無料です。モデルプロバイダーへの支払いは必要です。CrewAI AMP プラットフォームには、月 50 回のワークフロー実行ができる無料の Basic プランと、個別見積もりの Enterprise プランがあります。",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "組織図のある AI の会社と、コーディングエージェントのための issue ボード",
      title: "Paperclip vs Multica：組織図か issue ボードか",
      description:
        "Paperclip vs Multica：どちらも Claude Code や Codex など手持ちのエージェントに仕事を任せます。一方は組織図と予算で会社を模し、一方は issue ボードです。",
      h1: "Paperclip vs Multica：エージェントのための AI の会社か、issue ボードか",
      lead: "Paperclip と Multica が解決する課題は似ています。Claude Code や Codex のようなコーディングエージェントがすでにあり、ターミナルではなくボードで仕事を渡したい、というものです。Paperclip は全体を会社としてモデル化し、組織図、予算、ガバナンスを備えます。Multica は issue トラッカーに近く、エージェントを担当者に設定し、手元のマシン上のデーモンが各エージェントの CLI を実行します。両者を並べて比較し、Crewmark の位置づけも紹介します。",
      differences: [
        "モデル：Paperclip はエージェントに肩書き、指揮系統、職務記述、予算を与えます。Multica は各エージェントに名前、プロバイダー、ランタイム、指示を与え、リーダーのエージェントを置いた squads にまとめます。",
        "ライセンス：Paperclip は MIT のオープンソースです。Multica は追加条件付きの Apache 2.0 によるソース公開型で、自分の組織内でのセルフホストは無料です。",
        "ホスティング：Paperclip はセルフホストで、クラウド版はウェイトリスト段階です。Multica はクラウドアプリ、セルフホスト、デスクトップアプリを提供しています。",
        "エージェント：Paperclip はアダプターでエージェントを接続します。Multica のデーモンは、インストール済みの 29 のエージェント CLI を実行します。",
      ],
      pickA: [
        "エージェントのチーム全体に、指揮系統、予算、承認を持たせたい。",
        "自分で運用する MIT ライセンスのソフトウェアがほしい。",
      ],
      pickB: [
        "エージェントを担当者にできる issue ボードを、クラウドかセルフホストで使いたい。",
        "さまざまなエージェント CLI を使っていて、すべてを 1 つのボードにまとめたい。",
      ],
      faq: [
        {
          q: "Paperclip と Multica は Claude Code や Codex で使えますか？",
          a: "はい。Paperclip はアダプターで接続し、Multica のデーモンは自分で管理するマシン上でそれぞれの CLI を実行します。どちらもほかの複数のエージェントにも対応しています。",
        },
        {
          q: "Multica はオープンソースですか？",
          a: "ソース公開型です。Multica License は Apache 2.0 に追加条件を加えたものです。セルフホストを含め、自分の組織内での利用は無料ですが、ホスティングサービスとして提供するには商用ライセンスが必要です。",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "エージェントの会社と、1 人の個人アシスタント（Paperclip は OpenClaw を動かせる）",
      title: "Paperclip vs OpenClaw：AI の会社か個人エージェントか",
      description:
        "Paperclip vs OpenClaw：OpenClaw も含むエージェントのチームを会社として動かす基盤か、自分のパソコンで動く個人 AI アシスタントか。料金、スケジュール、タスクを比較。",
      h1: "Paperclip vs OpenClaw：エージェントの会社か、1 人の個人エージェントか",
      lead: "Paperclip の README は簡潔にこう説明しています。OpenClaw が社員なら、Paperclip は会社だ、と。OpenClaw は自分のマシンで動き、チャットアプリで会話するオープンソースの個人アシスタントです。Paperclip は組織図、タスク、予算を備えたセルフホスト型のコントロールプレーンで、OpenClaw、Claude Code、Codex などのエージェントを動かせます。両者は一緒に使われることもよくあります。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "範囲：OpenClaw は、チャットアプリで話しかける 1 人のアシスタント（または 1 つの Gateway 上の、互いに独立した複数のエージェント）です。Paperclip は多数のエージェントを職種、指揮系統、予算で組織します。",
        "仕事：Paperclip には目標やプロジェクトに紐づくチケットがあります。OpenClaw のドキュメントによると、共有の Tasks 台帳と TaskFlow は削除されたため、タスクボードはありません。",
        "エージェント：OpenClaw はモデルプロバイダーにプラグインとして接続します。Paperclip は OpenClaw を含む既存のエージェントをアダプター経由で動かします。",
        "どちらも MIT ライセンスで、無料で動かせます。モデルプロバイダーへの支払いは必要です。",
      ],
      pickA: [
        "複数のエージェントを動かしていて、職種、タスク、予算を持つチームとして組織したい。",
        "OpenClaw を唯一のエージェントではなく、複数いる社員の 1 人にしたい。",
      ],
      pickB: [
        "WhatsApp、Telegram、Slack、iMessage で応答してくれる個人アシスタントが 1 人ほしい。",
        "ホスティングサービスを使わず、自分のパソコンで自動化とエージェントを動かしたい。",
      ],
      faq: [
        {
          q: "Paperclip で OpenClaw を動かせますか？",
          a: "はい。OpenClaw は、Claude Code や Codex などと並んで、Paperclip がアダプターで接続するエージェントの 1 つです。",
        },
        {
          q: "OpenClaw は無料ですか？",
          a: "はい。MIT ライセンスで、README によると有料プラン、ホスティングサービス、トークンはありません。支払うのは接続するモデルプロバイダーへの料金のみです。",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "AI の会社のコントロールプレーンと、Nous Research の自己改善型の個人エージェント",
      title: "Paperclip vs Hermes Agent：AI の会社か自己改善エージェントか",
      description:
        "Paperclip vs Hermes Agent：エージェントのチームを会社として動かすセルフホスト型の基盤か、Bot とルーティンを持つ Nous Research の個人エージェントか。",
      h1: "Paperclip vs Hermes Agent：エージェントのチームか、学習する 1 つのエージェントか",
      lead: "Paperclip と Hermes Agent はどちらも MIT のオープンソースで、どちらも複数のエージェントを動かせますが、出発点は正反対です。Hermes Agent は Nous Research の個人エージェントで、自分のスキルを書いて改良し、複数の名前付き Bot を動かす Bot Mode を備えます。Paperclip は、Hermes を含むエージェントを、組織図、チケット、予算を持つ会社にまとめるコントロールプレーンです。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "出発点：Hermes Agent は、ターミナル、デスクトップアプリ、チャットアプリから話しかけるエージェントです。Paperclip は、接続したエージェントに仕事を割り当てる Web アプリです。",
        "仕事：Paperclip には目標やプロジェクトに紐づくチケットがあります。Hermes Agent のドキュメントには、タスクボードや issue トラッカーは見当たりません。",
        "複数のエージェント：Paperclip は職種と指揮系統を使います。Hermes Agent の Bot Mode では、各 Bot が独自の役割、モデル、メモリを持ち、Bot 同士が直接メッセージを送り合います。",
        "ホスティング：Paperclip はセルフホストです。Hermes Agent は自分のマシンかサーバーで動き、Nous Portal の有料プランにはクラウドホストのエージェントが 1 つ付属します。",
      ],
      pickA: [
        "異なるエージェント（Claude Code、Codex、Hermes など）のチームに、職種、チケット、予算を持たせたい。",
        "仕事をチャットではなくボードで追跡したい。",
      ],
      pickB: [
        "時間とともにスキルとメモリを蓄えていく 1 つのエージェントがほしい。",
        "互いに会話し、ルーティンを実行する名前付きの Bot を、ターミナル、デスクトップアプリ、チャットアプリから使いたい。",
      ],
      faq: [
        { q: "Paperclip で Hermes Agent を動かせますか？", a: "はい。Hermes は、Paperclip がアダプターとして挙げているエージェントの 1 つです。" },
        {
          q: "Hermes Agent の料金はいくらですか？",
          a: "エージェントは MIT ライセンスで無料です。モデルプロバイダーへの支払いは必要です。任意の Nous Portal サブスクリプションには、Free、Plus（月 $20）、Super（$100）、Ultra（$200）のプランがあります。",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "エージェントの crew を作るフレームワークと、すぐに使える個人アシスタント",
      title: "CrewAI vs OpenClaw：フレームワークか個人アシスタントか",
      description:
        "CrewAI vs OpenClaw：マルチエージェントの crew を作る Python フレームワークか、自分のパソコンで動かしチャットアプリで話しかける個人 AI アシスタントか。",
      h1: "CrewAI vs OpenClaw：コードでエージェントを作るか、個人アシスタントを動かすか",
      lead: "CrewAI と OpenClaw はどちらも複数のエージェントが協力して動きますが、使い方は大きく異なります。CrewAI は Python フレームワークで、役割ベースのエージェントの crews と flows を書き、AMP プラットフォームか自社サーバーにデプロイします。OpenClaw は完成した個人アシスタントで、あなたのパソコンで動き、WhatsApp、Telegram、Slack などのチャットアプリで応答します。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "やること：CrewAI では Python を書きます。OpenClaw ではアシスタントをインストールして設定します。",
        "話しかける場所：CrewAI はあなたのアプリケーションの中で動きます。OpenClaw は普段使っているチャットアプリで応答します。",
        "複数のエージェント：CrewAI のエージェントは仕事を委任し合い、質問し合います。階層モードではマネージャーエージェントが置かれます。OpenClaw は 1 つの Gateway 上で互いに独立した複数のエージェントを動かし、コーディネーター付きのチームプリセットがあります。",
        "どちらも MIT ライセンスです。CrewAI の AMP プラットフォームは商用で、OpenClaw に有料プランはありません。",
      ],
      pickA: [
        "プロダクトにマルチエージェントのワークフローを組み込む開発者である。",
        "マネージドなプラットフォームで crew をデプロイ・監視したい。",
      ],
      pickB: [
        "コードを書かずに、今すぐ個人アシスタントを使いたい。",
        "自分のマシンで動かし、スマートフォンからチャットアプリ経由で使いたい。",
      ],
      faq: [
        {
          q: "開発者でない人に向いているのは、CrewAI と OpenClaw のどちらですか？",
          a: "OpenClaw はインストールして設定すれば、チャットアプリで話しかけられます。CrewAI は Python ライブラリなので、自分のソフトウェアにエージェントを組み込む開発者向けに作られています。",
        },
        {
          q: "CrewAI と OpenClaw はオープンソースですか？",
          a: "どちらも MIT ライセンスです。CrewAI の AMP プラットフォームは別の商用製品で、OpenClaw には有料プランもホスティングサービスもありません。",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "役割ベースの crews と、グラフベースのオーケストレーション。どちらもオープンソースのフレームワーク",
      title: "CrewAI vs LangGraph：フレームワーク比較（2026）",
      description:
        "CrewAI vs LangGraph：役割ベースの crews と flows か、状態・ノード・エッジのグラフか。ライセンス、ホスティング版の料金、スケジュール、マルチエージェントの型を比較。",
      h1: "CrewAI vs LangGraph：マルチエージェントシステムを作る、2 つのオープンソースの方法",
      lead: "CrewAI と LangGraph は、コードでマルチエージェントシステムを作るフレームワークとして最もよく比較される 2 つです。CrewAI はエージェントを、役割、目標、背景設定を持つ crews として組織し、イベント駆動の flows も備えます。LangGraph では、ワークフローを共有の状態、ノード、エッジのグラフとして定義し、エージェントのアーキテクチャは規定しません。どちらも MIT ライセンスで、各社がホスティング型のプラットフォームを販売しています。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "抽象化：CrewAI は役割、目標、背景設定を持つエージェントから始めます。LangGraph は状態とノードのグラフから始め、プロンプトやエージェントのアーキテクチャを規定しません。",
        "言語：CrewAI は Python です。LangGraph には Python と JavaScript/TypeScript のライブラリがあります。",
        "ホスティング型プラットフォーム：CrewAI AMP には無料の Basic プラン（月 50 回のワークフロー実行）と個別見積もりの Enterprise プランがあります。LangSmith には無料の Developer プラン、1 シートあたり月 $39 の Plus、個別見積もりの Enterprise プランがあります。",
        "スケジュール：どちらもホスティング型プラットフォームで cron ジョブを掲げており、オープンソースのライブラリ単体にはありません。",
      ],
      pickA: [
        "エージェントを役割と目標で記述し、互いに仕事を委任させたい。",
        "Python で開発していて、プラットフォーム側でノーコードの Studio を使いたい。",
      ],
      pickB: [
        "状態とステップ間の経路を細かく制御したい。",
        "Python に加えて JavaScript や TypeScript でも開発している、またはすでに LangSmith を使っている。",
      ],
      faq: [
        {
          q: "LangGraph に LangChain は必要ですか？",
          a: "いいえ。LangGraph は LangChain, Inc. が開発していますが、ドキュメントには LangGraph は LangChain を必要としないと書かれています。LangSmith はトレーシング、評価、デプロイを追加します。",
        },
        {
          q: "CrewAI と LangGraph は無料ですか？",
          a: "どちらのフレームワークも MIT ライセンスで無料です。それぞれのホスティング型プラットフォームである CrewAI AMP と LangSmith には、無料プランのほか、有料または個別見積もりのプランがあります。",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "2 つのマルチエージェント・フレームワーク。AutoGen の README ではアーカイブ済みとされている",
      title: "CrewAI vs AutoGen：フレームワーク比較（2026）",
      description:
        "CrewAI vs AutoGen：役割ベースの crews と flows か、Microsoft のグループチャットとチームか。AutoGen はアーカイブ済み。ライセンス、モデル、現状を比較。",
      h1: "CrewAI vs AutoGen：crews と flows か、グループチャットか。そして誰がメンテナンスしているか",
      lead: "CrewAI と AutoGen は、どちらもコードで複数の LLM エージェントを協調させる、初期の人気の手段でした。CrewAI は crewAI, Inc. が開発しており、商用プラットフォームも併せて提供しています。AutoGen の README は現在、アーカイブ済みで Microsoft によるメンテナンスは終了したと記し、新規ユーザーには、Microsoft が直接の後継と呼ぶ Microsoft Agent Framework を案内しています。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "メンテナンス：CrewAI は活発に開発されています。AutoGen の README によると、アーカイブ済みで Microsoft による積極的なメンテナンスは終了しており、バグ修正やセキュリティ修正は行われません。",
        "パターン：CrewAI には役割ベースのエージェントによる crews と flows があります。AutoGen にはグループチャット、selector チームと swarm チーム、イベント駆動のメッセージパッシングがあります。",
        "言語：CrewAI は Python です。AutoGen には Python と .NET があります。",
        "ホスティング：CrewAI AMP は crew のデプロイと実行を担います。AutoGen にホスティングサービスはなく、AutoGen Studio はローカルで動きます。",
      ],
      pickA: [
        "新しいマルチエージェントのプロジェクトを始めるので、メンテナンスされていてホスティングの選択肢もあるフレームワークがほしい。",
        "互いに仕事を委任し合う、役割ベースのエージェントがほしい。",
      ],
      pickB: [
        "既存の AutoGen アプリケーションを保守していて、移行の前に今動かしているものを把握する必要がある。",
        "Microsoft Agent Framework を検討していて、その前身と比べたい。",
      ],
      faq: [
        {
          q: "AutoGen はまだメンテナンスされていますか？",
          a: "README によると、プロジェクトはアーカイブ済みで Microsoft による積極的なメンテナンスは終了しており、Microsoft Agent Framework を推奨しています。Microsoft Learn では、これを AutoGen の直接の後継としています。",
        },
        {
          q: "CrewAI は無料ですか？",
          a: "フレームワークは MIT ライセンスで無料です。CrewAI AMP プラットフォームには、無料の Basic プランと個別見積もりの Enterprise プランがあります。",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "エージェント CLI のための issue ボードと、Bot とルーティンを持つ個人エージェント",
      title: "Multica vs Hermes Agent：ボードか個人エージェントか",
      description:
        "Multica vs Hermes Agent：エージェント CLI（Hermes も含む）に仕事を割り当てる issue ボードか、Nous Research の自己改善型の個人エージェントか。",
      h1: "Multica vs Hermes Agent：エージェントのためのボードか、エージェントそのものか",
      lead: "Multica と Hermes Agent は異なるレイヤーにあります。Hermes Agent はエージェントそのもので、経験からスキルを学び、名前付きの Bot を動かせる、Nous Research のオープンソースの個人アシスタントです。Multica はエージェントを取り巻くボードで、issue を割り当てると、手元のマシン上のデーモンが、Hermes を含め選んだエージェント CLI を実行します。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "レイヤー：Multica は仕事を割り当てて追跡し、Hermes Agent は仕事をこなします。",
        "仕事の追跡：Multica には、エージェントを担当者にできるボード表示とリスト表示があります。Hermes Agent のドキュメントには、タスクボードは見当たりません。",
        "スケジュール：Multica の Autopilots は cron や Webhook で動き、issue を作成します。Hermes Agent には組み込みの cron スケジューラーと、Bot ごとのルーティンがあります。",
        "ライセンス：Hermes Agent は MIT です。Multica はソース公開型で、自分の組織内でのセルフホストは無料です。",
      ],
      pickA: [
        "複数のエージェント（Hermes を含むこともある）のために、issue、プロジェクト、レビューがほしい。",
        "人とエージェントのチームが 1 つのボードで仕事をする。",
      ],
      pickB: [
        "メモリを持ち、自分のスキルを改良していく 1 つのエージェントがほしい。",
        "ボードを管理するより、ターミナル、デスクトップアプリ、チャットアプリでエージェントと話したい。",
      ],
      faq: [
        { q: "Multica は Hermes Agent に対応していますか？", a: "はい。Hermes は、Multica のデーモンが実行できる 29 のエージェント CLI の 1 つです。" },
        {
          q: "Hermes Agent はスケジュールで動かせますか？",
          a: "はい。組み込みの cron スケジューラーがあり、Bot Mode では各 Bot がルーティンを持てます。",
        },
      ],
    },
    "multica-vs-linear": {
      summary: "エージェントを担当者にできる 2 つの issue トラッカー。一方はエージェント CLI 向け、もう一方はプロダクトチーム向け",
      title: "Multica vs Linear：エージェントの issue 管理を比較",
      description:
        "Multica vs Linear：どちらも AI エージェントに issue を割り当て可能。Multica は手元でエージェント CLI を実行し、Linear はクラウドでエージェントを動かします。",
      h1: "Multica vs Linear：エージェントはどこで issue を受け取るか",
      lead: "Linear は多くのプロダクトチームがすでに使っている issue トラッカーで、現在は issue を Linear Agent、Claude Code または Codex ベースのクラウドのコーディングエージェント、サードパーティ製エージェントに任せられます。Multica は最初からエージェントを中心に作られた issue ボードで、自分のマシン上のデーモンが、インストール済みのエージェント CLI を実行します。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "エージェントが動く場所：Multica のデーモンは、自分で管理するノート PC やサーバーでエージェント CLI を実行します。Linear のコーディングエージェントは Linear のクラウドで動きます。",
        "割り当て：Multica ではエージェントが担当者になります。Linear では、委任しても人が主担当者のままで、エージェントはコントリビューターとして加わります。",
        "繰り返しの仕事：Multica の Autopilots は cron や Webhook で動きます。Linear の Loops はスケジュールまたはイベントで動き、AI クレジットから課金されます。",
        "ホスティングと料金：Multica はセルフホスト可能（ソース公開型）です。Linear はホスティング版のみで、Free、Basic（$10）、Business（$16）がユーザーあたり月額、年払いです。",
      ],
      pickA: [
        "すでに持っている CLI とログインのまま、自分のハードウェアでエージェントを動かしたい。",
        "ボードをセルフホストしたい。",
      ],
      pickB: [
        "チームがすでに Linear で計画を立てていて、同じトラッカーの中でエージェントを使いたい。",
        "コーディングエージェントはベンダーのクラウドで動かしたい。",
      ],
      faq: [
        {
          q: "Linear は AI エージェントに issue を割り当てられますか？",
          a: "はい。issue を Linear Agent、Claude Code または Codex を使うクラウドのコーディングエージェント、そしてワークスペースにインストールした Cursor、Codex、Devin などのサードパーティ製エージェントに任せられます。",
        },
        {
          q: "Linear の料金はいくらですか？",
          a: "Free は $0 で、チーム 2 つと issue 250 件までです。Basic はユーザーあたり月 $10、Business は $16 で、いずれも年払いです。クラウドのコーディングエージェントと Loops は、前払いの AI クレジットも消費します。",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "チャットアプリの中の個人アシスタントと、Anthropic のコーディングエージェント",
      title: "OpenClaw vs Claude Code：個人アシスタントかコーディングエージェントか",
      description:
        "OpenClaw vs Claude Code：チャットアプリで応答するオープンソースの個人アシスタントか、リポジトリで働く Anthropic のコーディングエージェントか。料金やモデルを比較。",
      h1: "OpenClaw vs Claude Code：チャットの中のアシスタントか、コードの中のエージェントか",
      lead: "OpenClaw と Claude Code はどちらも自分のパソコンで動くエージェントで、OpenClaw は Claude Code のログインを再利用して Claude モデルを使うこともできます。ただし用途は異なります。OpenClaw は WhatsApp、Telegram、Slack、iMessage から使う個人アシスタントです。Claude Code は Anthropic のコーディングエージェントで、コードベースを読み、ファイルを編集し、コマンドを実行します。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "用途：OpenClaw はチャットアプリを通じて、個人的なタスクや自動化を担います。Claude Code はターミナル、IDE、デスクトップアプリ、Web から、コードリポジトリで作業します。",
        "モデル：OpenClaw は Claude を含む多くのプロバイダーにプラグインとして接続します。Claude Code は Claude モデルで動きます。",
        "料金とライセンス：OpenClaw は MIT ライセンスで無料です（モデルプロバイダーへの支払いは必要）。Claude Code は月 $20 からの Claude の有料プランに含まれ、オープンソースではありません。",
        "スケジュール：OpenClaw には組み込みの Automations スケジューラーがあります。Claude Code にはクラウドとデスクトップのスケジュールタスク、そして `/loop` があります。",
      ],
      pickA: [
        "個人的なタスクや自動化のために、スマートフォンからメッセージを送れるアシスタントがほしい。",
        "ローカルモデルを含め、複数のモデルプロバイダーを組み合わせたい。",
      ],
      pickB: [
        "仕事の中心がコードベース（機能追加、修正、レビュー、リファクタリング）にある。",
        "すでに Claude のプランに課金している。",
      ],
      faq: [
        {
          q: "OpenClaw で Claude を使えますか？",
          a: "はい。Anthropic の API キーを使うか、同じマシン上の Claude Code のログインを再利用できます。",
        },
        {
          q: "Claude Code は無料ですか？",
          a: "いいえ。Claude の有料プラン（Pro、Max、Ultra、Team、Enterprise）に含まれており、Free には含まれません。",
        },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Nous Research の自己改善型の個人エージェントと、Anthropic のコーディングエージェント",
      title: "Hermes Agent vs Claude Code：個人エージェントかコーディングエージェントか",
      description:
        "Hermes Agent vs Claude Code：スキルを学び Bot を動かすオープンソースのエージェントか、Anthropic のコーディングエージェントか。モデルや料金を比較。",
      h1: "Hermes Agent vs Claude Code：学習する個人エージェントか、コーディングエージェントか",
      lead: "Hermes Agent と Claude Code はどちらも自分のマシンで動き、どちらもサブエージェントとスケジュール機能を持ち、どちらも Claude モデルで使えます。違いは焦点です。Nous Research の Hermes Agent は学習ループを持つ個人エージェントで、経験からスキルを書き、独自のメモリを保持し、任意のモデルプロバイダーで動きます。Claude Code は、コードベースで作業するための Anthropic のコーディングエージェントです。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "焦点：Hermes Agent は汎用の個人エージェントです。Claude Code はコードのために作られています。",
        "モデル：Hermes Agent は多くのプロバイダーに対応しており、ドキュメントによると、Claude のサブスクリプションが使えるのは追加使用量を購入した Max のみです。Claude Code は Claude モデルで動きます。",
        "複数のエージェント：Hermes Agent の Bot 同士は直接メッセージを送り合います。Claude Code の実験的な agent teams では、チームメイト同士がメッセージを送り合います。",
        "料金とライセンス：Hermes Agent は MIT で無料、任意で Nous Portal のサブスクリプションがあります。Claude Code は Claude の有料プランに付属し、オープンソースではありません。",
      ],
      pickA: [
        "さまざまなタスクをこなし、時間とともにスキルを高めていく 1 つのエージェントがほしい。",
        "モデルプロバイダーを自由に選び、切り替えたい。",
      ],
      pickB: [
        "主な仕事がコードベースにある。",
        "IDE 拡張機能、デスクトップアプリ、コードレビュー、スケジュールタスクなど、Anthropic のツール群も使いたい。",
      ],
      faq: [
        {
          q: "Hermes Agent で Claude のサブスクリプションを使えますか？",
          a: "ドキュメントによると、Claude のサブスクリプション経由で使えるのは追加使用量を購入した Claude Max のみで、Claude Pro では使えません。API キーで Claude を使うこともできます。",
        },
        {
          q: "Claude Code も Hermes Agent のように新しいスキルを学びますか？",
          a: "Claude Code は、あなたやチームが SKILL.md ファイルとして書いたスキルを使い、自動メモリも保持します。Hermes Agent が焦点として掲げているのは、自身の経験からスキルを書き、改良することです。",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "個人アシスタントと、オープンソースのコーディングエージェント。どちらも MIT で、モデルを選ばない",
      title: "OpenClaw vs OpenCode：個人アシスタントかコーディングエージェントか",
      description:
        "OpenClaw vs OpenCode：MIT ライセンスでモデルを選ばない 2 つのエージェント。チャットアプリの個人アシスタントと、ターミナルやデスクトップで動くコーディングエージェントです。",
      h1: "OpenClaw vs OpenCode：名前は似ていても、役割は別",
      lead: "OpenClaw と OpenCode はどちらも MIT のオープンソースで、どちらも自分のマシンで動き、どちらも多くのモデルプロバイダーに対応しているため、よく比較されます。ただし担う仕事は異なります。OpenClaw は WhatsApp、Telegram、Slack などのチャットアプリで話しかける個人アシスタントです。OpenCode はターミナル UI、デスクトップアプリ、Web アプリ、SDK を持つコーディングエージェントです。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "用途：OpenClaw はチャットから個人的なタスクや自動化を実行します。OpenCode はコードを書き、変更します。",
        "インターフェース：OpenClaw はチャットアプリで応答し、Control UI もあります。OpenCode はターミナル UI、デスクトップアプリ、Web アプリ、SDK として動きます。",
        "有料オプション：OpenClaw に有料プランはありません。OpenCode は無料で無料モデルも使え、月 $10 の OpenCode Go と月 $40 の Go Plus を提供しています。",
        "スケジュール：OpenClaw には組み込みのスケジューラーがあります。OpenCode のスケジュールは実験的なオプトイン機能です。",
      ],
      pickA: [
        "どこからでもメッセージを送れるアシスタントがほしい。",
        "スケジュール、Webhook、メールをきっかけに動く自動化がほしい。",
      ],
      pickB: [
        "ローカルモデルを含む 200 以上のモデルプロバイダーに対応した、オープンソースのコーディングエージェントがほしい。",
        "アカウントなしで、無料モデルからコーディングを始めたい。",
      ],
      faq: [
        {
          q: "OpenClaw と OpenCode は同じプロジェクトですか？",
          a: "いいえ。OpenClaw は OpenClaw Foundation の個人アシスタント、OpenCode は Anomaly のコーディングエージェントです。どちらも MIT ライセンスです。",
        },
        {
          q: "OpenCode には API キーが必要ですか？",
          a: "始めるだけなら不要です。1 日の上限付きの無料モデルが含まれており、それらにはアカウントも要りません。自分のプロバイダーを接続したり、OpenCode Go を契約したりもできます。",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Claude Code の実験的な agent teams と、OpenClaw のマルチエージェント Gateway",
      title: "Claude Code Agent Teams vs OpenClaw：マルチエージェント構成",
      description:
        "Claude Code agent teams vs OpenClaw：Claude Code 内の実験的なリーダーとチームメイトのモードか、1 つの Gateway 上の複数の個人エージェントか。",
      h1: "Claude Code agent teams vs OpenClaw：複数のエージェントを動かす 2 つの方法",
      lead: "どちらも複数のエージェントを協調させられます。Claude Code agent teams は実験的な機能（デフォルトはオフ）で、リーダーのセッションがチームメイトを起動します。チームメイトは別々の Claude Code インスタンスで、タスクリストを共有し、互いにメッセージを送り合います。OpenClaw は自分のマシン上の 1 つの Gateway で互いに独立した複数のエージェントを動かし、コーディネーターがリサーチャー、ライター、レビュアーのエージェントに仕事を割り振るチームプリセットも備えます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "目的：agent teams は 1 つのコーディングタスクを複数の Claude Code インスタンスで分担します。OpenClaw のエージェントは、チャットアプリから使う個人アシスタントです。",
        "連携：agent teams は依存関係付きのタスクリストを共有し、チームメイト同士がメッセージを送り合います。OpenClaw のエージェントは互いのセッションにアクセスでき、ドキュメントではチームプリセットを、スケジューラーではなくプロンプト上の指針と位置づけています。",
        "存続期間：agent team は、リーダーのセッションのもとで 1 つのタスクの間だけ動きます。OpenClaw のエージェントは Gateway 上に常駐し、スケジュールされた自動化を実行します。",
        "コスト：agent teams は、Claude の有料プランの Claude Code に付属します。OpenClaw は無料で、MIT ライセンスです。",
      ],
      pickA: [
        "複数の Claude Code インスタンスに大きなコーディングタスクを分担させ、互いに会話させたい。",
        "すでに Claude Code を使っていて、実験的な機能を有効にしても構わない。",
      ],
      pickB: [
        "自分のマシンで、それぞれのペルソナを持つ長期稼働の個人エージェントがほしい。",
        "チャットアプリから使い、スケジュールで動かしたい。",
      ],
      faq: [
        {
          q: "Claude Code agent teams を有効にするには？",
          a: "実験的な機能で、デフォルトはオフです。`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` を設定すると、リーダーのセッションがチームメイトを起動できるようになります。詳しくは [Claude Code の agent teams](/blog/claude-code-agent-teams) をご覧ください。",
        },
        {
          q: "OpenClaw のエージェントはチームとして動けますか？",
          a: "はい。1 つの Gateway で互いに独立した複数のエージェントを動かせ、チームプリセットを使うと、コーディネーターと、リサーチャー、ライター、レビュアーのエージェントが作成されます。",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "どちらも運営会社が2026年にホスティングサービスを畳んだ、2 つの並列コーディングエージェントツール",
      title: "Vibe Kanban vs Conductor：2026年の並列コーディングエージェント",
      description:
        "Vibe Kanban vs Conductor：オープンソースのカンバンボードか、新規登録を締め切り Meta に合流する Mac アプリか。今も使えるものと違いを比較。",
      h1: "Vibe Kanban vs Conductor：それぞれ何が残り、どう違うか",
      lead: "Vibe Kanban と Conductor はどちらも、複数のコーディングエージェントをそれぞれ専用の git worktree で並列に動かし、その成果をレビューしてマージできるようにします。どちらも2026年に変化がありました。Vibe Kanban を開発していた bloop は4月に事業を終了し、プロジェクトはコミュニティがメンテナンスするオープンソースとして続いています。Conductor は11月4日に Meta への合流を発表しました。新規登録とダウンロードは締め切られ、クラウドは11月13日から読み取り専用になって11月20日に終了し、Mac アプリは2027年初めまで新しいモデルへの対応と重大な修正を受けます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "利用可否：Vibe Kanban のローカルアプリは誰でも無料で動かせます。Conductor は新規登録とダウンロードを受け付けていません。",
        "ボード：Vibe Kanban は仕事をカンバンの issue として計画します。Conductor はワークスペースを一覧表示し、GitHub や Linear の issue からワークスペースを作成できます。",
        "ライセンス：Vibe Kanban は Apache-2.0 のオープンソースです。Conductor はクローズドソースです。",
        "プラットフォームとエージェント：Vibe Kanban はブラウザまたはデスクトップアプリで動き、Conductor は Mac アプリです。どちらも Claude Code、Codex、Cursor、OpenCode を動かせ、Vibe Kanban は Gemini CLI、GitHub Copilot、Amp なども挙げています。",
      ],
      pickA: [
        "使い続けられて改造もできる、オープンソースのツールがほしい。",
        "エージェントの前にカンバンボードを置きたい。",
      ],
      pickB: [
        "すでに Mac で Conductor を使っていて、ローカルアプリだけあれば十分。",
        "クラウド機能が2026年11月20日に終了しても構わない。",
      ],
      faq: [
        {
          q: "Conductor はサービスを終了するのですか？",
          a: "Conductor は2026年11月4日に Meta への合流を発表しました。新規登録とダウンロードは締め切られ、クラウドは11月13日から読み取り専用になって11月20日に終了し、Mac アプリは2027年初めまで新しいモデルへの対応と重大な修正を受けます。詳しくは [Conductor の代替ツール](/blog/conductor-alternatives) をご覧ください。",
        },
        {
          q: "Vibe Kanban はまだメンテナンスされていますか？",
          a: "bloop は2026年4月10日に事業の終了を発表しました。プロジェクトはコミュニティがメンテナンスする Apache-2.0 のオープンソースとして続いており、ローカルアプリは無料で動かせます。",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "並列コーディングエージェント：オープンソースのターミナルアプリと、Meta に合流する Mac アプリ",
      title: "Claude Squad vs Conductor：Claude Code を並列で動かす",
      description:
        "Claude Squad vs Conductor：tmux と worktree で動くオープンソースのターミナルアプリか、Meta に合流し、2026年11月20日にクラウドを終了する Mac アプリか。",
      h1: "Claude Squad vs Conductor：並列エージェントにはターミナルか Mac アプリか",
      lead: "Claude Squad と Conductor の中心的な役割は同じです。複数のコーディングエージェントを同時に、それぞれ git worktree の専用ブランチで動かし、結果のレビューとマージを手助けします。Claude Squad は tmux 上に作られたオープンソースのターミナルアプリです。Conductor はクローズドソースの Mac アプリで、2026年11月4日に Meta への合流を発表し、新規ユーザーの受け付けを終了しました。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "インターフェース：Claude Squad は tmux と GitHub CLI が必要なターミナル UI です。Conductor は Mac のデスクトップアプリです。",
        "ライセンス：Claude Squad は AGPL-3.0 のオープンソースです。Conductor はクローズドソースです。",
        "エージェント：Claude Squad はデフォルトで Claude Code を使い、Codex、Gemini、Aider、または設定した任意のプログラムを動かせます。Conductor は Claude Code、Codex、OpenCode、Cursor Agent を動かします。",
        "状況：Claude Squad の最新リリースは v1.0.20（2026年8月）です。Conductor は2026年11月4日に新規登録とダウンロードを締め切り、11月20日にクラウドを終了し、Mac アプリは2027年初めまで更新されます。",
      ],
      pickA: [
        "普段からターミナルで作業していて、誰でもインストールできるオープンソースのツールがほしい。",
        "設定できる CLI エージェントなら何でも動かしたい。",
      ],
      pickB: [
        "すでに Conductor を使っていて、diff とプルリクエストを組み込んだデスクトップアプリのほうが好み。",
        "Mac を使っていて、2027年初めまでローカルアプリだけあれば十分。",
      ],
      faq: [
        {
          q: "Claude Squad は無料ですか？",
          a: "はい。AGPL-3.0 のオープンソースです。その中で動かすエージェントやモデル API の費用は別途かかります。",
        },
        {
          q: "Conductor はまだダウンロードできますか？",
          a: "新規ユーザーはできません。Conductor は2026年11月4日に Meta への合流を発表した際、新規登録とダウンロードを締め切りました。既存ユーザーは Mac アプリを引き続き使え、2027年初めまでアップデートが提供されます。",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Cognition のクラウド型 AI ソフトウェアエンジニアと、Anthropic のコーディングエージェント",
      title: "Devin vs Claude Code：AI エンジニアかコーディングエージェントか",
      description:
        "Devin vs Claude Code：クラウド VM と Automations を備えた Cognition の AI ソフトウェアエンジニアか、Anthropic のコーディングエージェントか。",
      h1: "Devin vs Claude Code：クラウドのエンジニアか、手元で働くエージェントか",
      lead: "Devin と Claude Code はどちらも、コードを書き、実行・テストし、プルリクエストを作成するコーディングエージェントです。Cognition の Devin はクラウドセッションが中心で、セッションごとに専用の仮想マシンが用意され、Automations と、子の Devin を動かすコーディネーターを備えます。デスクトップアプリと CLI もあります。Anthropic の Claude Code は、ターミナル、IDE、デスクトップアプリ、Web で、Claude モデルを使って動きます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "動く場所：Devin のクラウドセッションには、それぞれ専用の VM が割り当てられます。Claude Code はデフォルトでローカルで動き、Web ではクラウドセッションも使えます。",
        "モデル：Devin は Cognition の SWE-2 と、複数のラボのフロンティアモデルをルーターで使い分けます。Claude Code は Claude モデルで動きます。",
        "料金：Devin には Free、月 $20 の Pro、月 $200 の Max、月 $80 + 開発者シートあたり $40 の Teams があります。Claude Code は Claude Pro（$20）、Max（$100）、Ultra（$200）、Team、Enterprise に付属します。",
        "自動化：Devin の Automations は、スケジュールや、Slack、GitHub、Linear などのイベントで動きます。Claude Code のクラウドのスケジュールタスクは、スケジュール、API 呼び出し、GitHub のイベントで動きます。",
      ],
      pickA: [
        "Slack、Linear、Jira から始めたタスクを、それぞれ専用のクラウド VM で動かしたい。",
        "子セッションを動かし、メッセージを送るコーディネーターのセッションがほしい。",
      ],
      pickB: [
        "エージェントに、自分のチェックアウトとターミナルで作業させたい。",
        "すでに Claude のプランに課金していて、IDE 拡張機能、デスクトップアプリ、Web を使いたい。",
      ],
      faq: [
        {
          q: "Devin の料金はいくらですか？",
          a: "Free は $0、Pro は月 $20、Max は月 $200、Teams は月 $80 に加えてフルの開発者シートあたり月 $40（最大 100 ユーザー）です。Enterprise は見積もり制です。",
        },
        {
          q: "Claude Code は Claude Pro に含まれていますか？",
          a: "はい。Claude Code は Claude のすべての有料プラン（Pro、Max、Ultra、Team、Enterprise）に含まれています。",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "Cognition の AI ソフトウェアエンジニアと、OpenAI のコーディングエージェント",
      title: "Devin vs Codex：AI ソフトウェアエンジニア比較（2026）",
      description:
        "Devin vs OpenAI Codex：クラウド VM と Automations か、CLI、IDE、ChatGPT アプリ、クラウドで使えるコーディングエージェントか。料金やモデルを比較。",
      h1: "Devin vs Codex：クラウドでも働く 2 つのコーディングエージェント",
      lead: "Devin と Codex はどちらも、ローカルとクラウドでコーディングタスクを実行し、プルリクエストを作成します。Cognition の Devin はクラウドセッションごとに専用の仮想マシンを用意し、Automations とコーディネーターのセッションを備えます。OpenAI の Codex は ChatGPT のプランに含まれ、ターミナルの CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、Codex Cloud で動きます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "料金：Devin は独自のプラン（Free、Pro $20、Max $200、Teams）で販売されています。Codex は Plus（月 $20）以上の ChatGPT のプランに含まれるほか、API キーでも使えます。",
        "オープンソース：Codex の CLI、SDK、App Server は Apache-2.0 です。Devin はオープンソースではありません。",
        "モデル：Devin は Cognition の SWE-2 とフロンティアモデルを使い分けます。Codex は OpenAI のモデルで動きます。",
        "スケジュール：Devin の Automations は、スケジュールと多くのイベントソースで動きます。Codex には ChatGPT デスクトップアプリと Web のスケジュールタスクがあります。",
      ],
      pickA: [
        "多くのイベントソース（Slack、Teams、Jira、PagerDuty、Webhook）から仕事を始めたい。",
        "並列の VM で子セッションを動かすコーディネーターがほしい。",
      ],
      pickB: [
        "すでに ChatGPT に課金していて、ターミナルと IDE でエージェントを使いたい。",
        "中身を確認できるオープンソースの CLI がほしい。",
      ],
      faq: [
        {
          q: "Codex は無料ですか？",
          a: "Codex は Plus（月 $20）以上の ChatGPT の有料プランに含まれ、OpenAI の API キーでも動かせます。CLI 自体は Apache-2.0 のオープンソースです。",
        },
        {
          q: "Devin と Codex は Linear の issue を受け付けますか？",
          a: "はい。Linear の issue を Devin に割り当てられます。ChatGPT の有料プランでは、Linear の issue を Codex に割り当てたり、コメントで Codex をメンションしたりできます。",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Factory の Droids プラットフォームと、Anthropic のコーディングエージェント",
      title: "Factory vs Claude Code：Droids か Claude Code か",
      description:
        "Factory（Droids）vs Claude Code：Automations と Workstreams を備えたコーディングエージェント基盤か、Anthropic のコーディングエージェントか。",
      h1: "Factory vs Claude Code：Droids プラットフォームか、Anthropic のエージェントか",
      lead: "Factory と Claude Code はどちらも、デスクトップアプリ、CLI、CI 向けのヘッドレスモードを持つコーディングエージェントです。Factory の Droids は自前のキーを含む多くのモデルで動き、Automations、オーケストレーター付きの Workstreams、Factory がホストするクラウドコンピューターを備えます。Claude Code は Claude モデルで動く Anthropic のエージェントで、Claude の有料プランに含まれます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "モデル：Factory はフロンティアモデル、オープンウェイトモデル、自前のキーに対応します。Claude Code は Claude モデルで動きます。",
        "料金：Factory には Free（推論は自分で用意）、月 $20 の Pro、月 $100 の Plus、さらに上位のプランがあります。Claude Code は Claude Pro（$20）、Max（$100）、Ultra（$200）、Team、Enterprise に付属します。",
        "複数のエージェント：Factory の Workstreams（ベータ）では、オーケストレーターのもとのエージェントがオーケストレーターに報告します。Claude Code の実験的な agent teams では、チームメイト同士がメッセージを送り合います。",
        "自動化：Factory の Automations は、スケジュール、Slack、GitHub、Webhook で動きます。Claude Code にはクラウドのスケジュールタスクと GitHub Actions があります。",
      ],
      pickA: [
        "さまざまなラボのモデルを切り替えたい、または自前のモデルを使いたい。",
        "ホスティングされたクラウドコンピューターと、スケジュールで動くチケットから PR までの自動化などがほしい。",
      ],
      pickB: [
        "Claude モデルで満足していて、すでに Claude のプランに課金している。",
        "コードレビュー、セキュリティレビュー、プラグインなど、Anthropic のツール群も使いたい。",
      ],
      faq: [
        {
          q: "Factory の Droids とは何ですか？",
          a: "Droids は Factory のコーディングエージェントです。Factory のデスクトップアプリ、Droid CLI、`droid exec` による CI でのヘッドレス実行、Factory がホストするクラウドコンピューターで動きます。",
        },
        {
          q: "Factory は Claude モデルで使えますか？",
          a: "Factory によると、Claude Opus や Sonnet を含む主要なフロンティアモデルに加え、オープンウェイトモデルと自前の API キーにも対応しています。",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "どのモデルでも使えるオープンソースのコーディングエージェントと、Anthropic のコーディングエージェント",
      title: "OpenCode vs Claude Code：オープンソースのエージェント比較",
      description:
        "OpenCode vs Claude Code：200 以上のプロバイダーのモデルと無料モデルで動く MIT のエージェントか、Claude の有料プランに含まれる Anthropic のエージェントか。",
      h1: "OpenCode vs Claude Code：オープンソースで任意のモデルか、Anthropic のエージェントか",
      lead: "OpenCode と Claude Code はどちらも、ターミナル UI、デスクトップアプリ、サブエージェント、MCP を備えたコーディングエージェントです。OpenCode は MIT のオープンソースで、ローカルモデルや一連の無料モデルを含む、200 以上のプロバイダーのモデルで動きます。Claude Code は Claude モデルで動く Anthropic のエージェントで、Claude の有料プランに含まれます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "ライセンス：OpenCode は MIT です。Claude Code のリポジトリは公開されていますが、著作権はすべて留保されています（all rights reserved）。",
        "モデル：OpenCode は Models.dev を通じて 200 以上のプロバイダーに対応します。Claude Code は Claude モデルで動きます。",
        "料金：OpenCode は無料で無料モデルも使え、OpenCode Go は月 $10 です。Claude Code は Pro（月 $20）以上の Claude のプランに付属します。",
        "スケジュール：Claude Code にはクラウドとデスクトップのスケジュールタスク、そして `/loop` があります。OpenCode のスケジュールは実験的なオプトイン機能です。",
      ],
      pickA: [
        "オープンソースのエージェントで、ローカルモデルを含め、どのモデルでも自由に選びたい。",
        "無料で始めたい。",
      ],
      pickB: [
        "スケジュールタスク、コードレビュー、IDE 拡張機能といった Anthropic のツールとともに、Claude モデルを使いたい。",
        "すでに Claude のプランに課金している。",
      ],
      faq: [
        {
          q: "OpenCode は無料ですか？",
          a: "はい。エージェントは MIT ライセンスで無料で、1 日の上限付きの無料モデルも付いています。OpenCode Go は月 $10、Go Plus は月 $40 です。",
        },
        {
          q: "OpenCode で Claude モデルを使えますか？",
          a: "OpenCode は Anthropic を含む 200 以上のモデルプロバイダーに対応しているため、API キーで Claude モデルを使えます。",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "ローコードで AI Workforce を作るツールと、すぐに使える AI アシスタント",
      title: "Relevance AI vs Lindy：AI Workforce か AI アシスタントか",
      description:
        "Relevance AI vs Lindy：AI エージェントのチームを作るローコード基盤か、受信トレイ、カレンダー、Slack で働く 1 つの AI アシスタントか。料金とスケジュールを比較。",
      h1: "Relevance AI vs Lindy：AI Workforce を作るか、アシスタントを 1 人雇うか",
      lead: "Relevance AI と Lindy はどちらも「AI 社員」という考え方を、異なる形で販売しています。Relevance AI は専門エージェントを作り、それらをつないでマルチエージェントの「AI Workforce」にするローコード基盤で、営業を通じて企業に販売されています。Lindy は受信トレイ、カレンダー、ミーティング、Slack をまたいで働く 1 つのホスティング型アシスタントで、ルーティンと承認の仕組みを備えます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "形：Relevance AI は、多数の専門エージェントを作るためのビルダーです。Lindy はワークスペースごとに 1 つのアシスタントで、タスクを渡して使います。",
        "料金：Relevance AI の料金ページに載っているのは、営業経由の Enterprise のみです。Lindy には $50 分のクレジット付きの無料トライアルがあり、プランはアクティブユーザーあたり月 $29.99 からです。",
        "複数のエージェント：Relevance AI のエージェントは、キャンバス上で仕事を受け渡します。Lindy のドキュメントでは、ワークスペースごとに Lindy は 1 つとされています。",
        "承認：Lindy は外部に影響することの前に確認を求めます。Relevance AI にはエスカレーションがあり、Enterprise では勤務時間の制御もあります。",
      ],
      pickA: [
        "複数の専門エージェントを設計してつなぎ、ベンダーのチームに導入を支援してほしい。",
        "企業として購入し、営業を通すことを想定している。",
      ],
      pickB: [
        "メール、カレンダー、ミーティング、フォローアップをこなすアシスタントを 1 人、今日から使いたい。",
        "支払う前に無料で試したい。",
      ],
      faq: [
        {
          q: "Lindy の料金はいくらですか？",
          a: "無料トライアルでは、7 日間 $50 分のクレジットが付きます。有料プランは、アクティブユーザーあたり月 $29.99（3,000 クレジット）からです。",
        },
        {
          q: "Relevance AI に無料プランはありますか？",
          a: "ドキュメントによると Free プランは廃止されており、公開の料金ページには営業経由の Enterprise のみが載っています。",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "xAI のホスティング型 AI チームメイトと、Anthropic のコーディングエージェント",
      title: "Grok Bot vs Claude Code：AI チームメイトかコーディングエージェントか",
      description:
        "Grok Bot vs Claude Code：専用コンピューターを持ち Slack やアプリで働く xAI のホスティング型 Bot か、Anthropic のコーディングエージェントか。",
      h1: "Grok Bot vs Claude Code：アプリで働くチームメイトか、コードのためのエージェントか",
      lead: "Grok Bot と Claude Code はどちらも実際の仕事を引き受けますが、働く場所が異なります。Grok Bot は xAI のホスティング型 AI チームメイトで、Bot ごとにクラウドに専用のコンピューターがあり、あなたのツールにサインインし、Slack や Microsoft Teams で働き、ルーティンを実行します。Claude Code は Anthropic のコーディングエージェントで、ターミナル、IDE、デスクトップアプリ、Web から、あなたのリポジトリで作業します。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "仕事：Grok Bot は CRM、サポート、経費精算、採用などのビジネスアプリをまたいで仕事をこなします。Claude Code はコードを書き、変更します。",
        "動く場所：Grok Bot はそれぞれ専用のクラウドコンピューターを持ち、ノートパソコンを閉じても作業を続けます。Claude Code はデフォルトで自分のマシンで動き、Web ではクラウドセッションも使えます。",
        "使い方：Grok Bot には、専用アプリ、Slack、Teams、ビデオ通話でメッセージを送ります。Claude Code は、ターミナル、IDE、デスクトップアプリ、Web で使います。",
        "料金：Grok Bot には月 $30 の Premium、月 $100 の Super、月 $200 の Ultra があります。Claude Code は Claude Pro（$20）、Max（$100）、Ultra（$200）、Team、Enterprise に付属します。",
      ],
      pickA: [
        "チームがすでに使っているアプリの中で、営業、オペレーション、サポートの仕事をする AI チームメイトがほしい。",
        "Slack やミーティングに加わり、ノートパソコンを閉じている間も働いてほしい。",
      ],
      pickB: [
        "仕事の中心がコードベース（機能追加、修正、レビュー、リファクタリング）にある。",
        "エージェントに、自分のチェックアウトで、自分のツールとテストを使って作業させたい。",
      ],
      faq: [
        {
          q: "Grok Bot の料金はいくらですか？",
          a: "Premium は月 $30、Super は $100、Ultra は $200 で、いずれも月払いで、週ごとの Grok Bot の利用枠が含まれます。超過分はトークンのコストに基づいて課金されます。Teams と Enterprise は営業経由です。",
        },
        {
          q: "Grok Bot はコードを書けますか？",
          a: "xAI は、製品の UI でバグを再現してチケットを起票するといったエンジニアリング用途や、Linear からコーディングエージェントを調整するためのガイドを紹介しています。Claude Code は、リポジトリで直接作業するために作られています。",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "xAI のホスティング型 AI チームメイトと、Nous Research のオープンソースの個人エージェント",
      title: "Grok Bot vs Hermes Agent：ホスティング型 Bot かオープンソースのエージェントか",
      description:
        "Grok Bot vs Hermes Agent：専用コンピューターを持つ xAI のホスティング型 Bot か、Bot とルーティンを備え任意のモデルで動くオープンソースのエージェントか。",
      h1: "Grok Bot vs Hermes Agent：ホスティング型のチームメイトか、自分で動かすエージェントか",
      lead: "Grok Bot と Hermes Agent はどちらも、互いに会話してルーティンを実行する名前付きの Bot を備えているため、よく比較されます。Grok Bot は xAI のホスティング型の製品で、Bot ごとに専用のクラウドコンピューターがあり、Slack、Teams、各種アプリで働きます。Hermes Agent は Nous Research のオープンソースのエージェントで、任意のモデルプロバイダーを使って自分で動かし、複数の名前付き Bot を動かす Bot Mode を備えます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "ホスティング：Grok Bot は xAI のクラウドで動きます。Hermes Agent は自分のマシンかサーバーで動き、Nous Portal の有料プランにはクラウドホストのエージェントが 1 つ付属します。",
        "ライセンスと料金：Grok Bot はクローズドソースで、月 $30 からです。Hermes Agent は MIT で無料、任意の Nous Portal サブスクリプションは月 $20 からです。",
        "モデル：Grok Bot は Grok で作られています。Hermes Agent はローカルモデルを含む多くのプロバイダーに対応します。",
        "話しかける場所：Grok Bot は専用アプリ、Slack、Teams、ビデオ通話で働きます。Hermes Agent はターミナル、デスクトップアプリ、チャットアプリから使います。",
      ],
      pickA: [
        "専用のコンピューターを持ち、Slack、Teams、ミーティングで働くホスティング型のチームメイトがほしい。",
        "自分では何も運用したくない。",
      ],
      pickB: [
        "自分で動かすオープンソースのエージェントを、好きなモデルプロバイダーで使いたい。",
        "時間とともに自分のスキルを書いて改良していくエージェントがほしい。",
      ],
      faq: [
        {
          q: "Hermes Agent は無料ですか？",
          a: "はい。MIT ライセンスで無料です。モデルプロバイダーへの支払いは必要です。任意の Nous Portal サブスクリプションには、Free、Plus（月 $20）、Super（$100）、Ultra（$200）のプランがあります。",
        },
        {
          q: "Grok Bot と Hermes Agent は、どちらも Bot 同士が会話しますか？",
          a: "はい。Grok Bot は Bot 同士がメッセージを送り合い、グループチャットで連携します。Hermes Agent の Bot Mode では、名前付きの Bot 同士が直接メッセージを送り合います。",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "オープンソースでセルフホスト可能な AI の同僚のワークスペースと、xAI のホスティング型 Bot",
      title: "OpenBot vs Grok Bot：AI の同僚はオープンソースかホスティング型か",
      description:
        "OpenBot vs Grok Bot：CopilotKit の MIT ライセンスでセルフホスト可能な AI の同僚のワークスペースか、xAI のホスティング型 Bot か。料金やモデルを比較。",
      h1: "OpenBot vs Grok Bot：自分でホストする AI の同僚か、借りる AI の同僚か",
      lead: "OpenBot と Grok Bot はどちらも、AI の同僚それぞれにブラウザとツールを備えた専用のコンピューターを与え、どちらもルーティンと承認の仕組みを持ちます。CopilotKit の OpenBot はオープンソースでセルフホスト可能で、ノートパソコンや自社の Kubernetes クラスターの上で、選んだモデルとエージェントを使って動きます。Grok Bot は Grok で作られた xAI のホスティング型の製品で、Slack、Teams、各種アプリで働きます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "ホスティング：OpenBot はノートパソコンか自社の Kubernetes クラスターで動くほか、アーリーアクセスでは CopilotKit がホストします。Grok Bot は xAI のクラウドで動きます。",
        "ライセンス：OpenBot のアプリケーションテンプレートは MIT で、CopilotKit Intelligence は別ライセンスです。Grok Bot はクローズドソースです。",
        "モデル：OpenBot は OpenAI、Claude、Gemini、オープンモデルで動き、AG-UI 経由で自前のエージェントを接続できます。Grok Bot は Grok で作られています。",
        "料金：OpenBot は個人プロジェクトなら無料で、Business はアクティブユーザーあたり月最大 $29 です。Grok Bot はプランごとに月 $30、$100、$200 です。",
      ],
      pickA: [
        "AI の同僚をセルフホストし、データとモデルを自分で管理したい。",
        "ワークスペースをカスタマイズしたり、ホワイトラベルで提供したりしたい。",
      ],
      pickB: [
        "Slack、Teams、ミーティングですぐに使えるホスティング型の Bot がほしい。",
        "インフラを自分で運用したくない。",
      ],
      faq: [
        {
          q: "OpenBot は無料ですか？",
          a: "ノートパソコンで個人プロジェクトに使う場合は無料です。OpenBot for Business はアクティブユーザーあたり月最大 $29 で、月のモデル利用額が $5,000 を超えた分の 5% が加わります。モデルプロバイダーへは直接支払います。",
        },
        {
          q: "OpenBot はオープンソースですか？",
          a: "OpenBot のアプリケーションテンプレートは MIT ライセンスです。別ライセンスの CopilotKit Intelligence を使っており、ノートパソコンでは無料、Kubernetes 向けにはトライアルと本番用のライセンスがあります。",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Anthropic のナレッジワーク向けエージェントと、コード向けエージェント",
      title: "Claude Cowork vs Claude Code：どちらの Anthropic エージェントを使うか",
      description:
        "Claude Cowork vs Claude Code：Claude のアプリでドキュメント、リサーチ、スプレッドシートを扱う Anthropic のエージェントか、リポジトリで働くコーディングエージェントか。",
      h1: "Claude Cowork vs Claude Code：異なる仕事のための 2 つの Anthropic エージェント",
      lead: "Claude Cowork と Claude Code は同じ会社のもので、どちらも Claude モデルで動き、Anthropic によると Cowork は Claude Code と同じアーキテクチャを使っています。ただし、向いている仕事は異なります。Cowork は、Claude のアプリでリサーチ、ドキュメント、スプレッドシート、スライドなどのナレッジワークを、主に Anthropic のクラウドでこなします。Claude Code は、ターミナル、IDE、デスクトップアプリ、Web から、あなたのコードリポジトリで作業します。どちらも Claude の有料プランに含まれます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "仕事：Cowork は、伝えた成果を、ドキュメント、数式入りのスプレッドシート、スライド資料、整理されたフォルダにします。Claude Code は、コードベースを読み、ファイルを編集し、コマンドを実行します。",
        "動く場所：Cowork のタスクは Anthropic のクラウドで動き、ローカルのファイルには Claude Desktop 経由で届きます。Claude Code はデフォルトで自分のマシンで動き、Web ではクラウドセッションも使えます。",
        "使う場所：Cowork はデスクトップ、Web、モバイルの Claude のアプリにあります。Claude Code は、ターミナル、IDE 拡張機能、デスクトップアプリ、Web で使います。",
        "スケジュール：Cowork はクラウドで毎時から毎週までタスクを予約できます。Claude Code には、クラウドとデスクトップのスケジュールタスクと `/loop` があります。",
      ],
      pickA: [
        "仕事がリサーチ、ドキュメント、スプレッドシート、スライドである。",
        "スマートフォンやブラウザからタスクを任せて、ファイルを受け取りたい。",
      ],
      pickB: ["仕事がコードリポジトリの中にある。", "ターミナル、テスト、git を使えるエージェントがほしい。"],
      faq: [
        {
          q: "Claude Cowork と Claude Code は同じプランで使えますか？",
          a: "はい。どちらも Claude の有料プラン（Pro、Max、Ultra、Team、Enterprise）に含まれます。Claude Free にはどちらも含まれません。",
        },
        {
          q: "Claude Cowork はコードを書けますか？",
          a: "Anthropic は、Cowork をコーディング以外のナレッジワーク向け、Claude Code をソフトウェアエンジニアリング向けと位置づけています。自分のコンピューターだけで動くタスクについては、Anthropic はデスクトップアプリの Claude Code を案内しています。",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "チャットアプリの中で働く、Anthropic と OpenAI の AI の同僚",
      title: "Claude Cowork vs ChatGPT Work：AI の同僚を比較",
      description:
        "Claude Cowork vs ChatGPT Work：ドキュメント、リサーチ、繰り返しのタスクのための Anthropic と OpenAI のエージェント。プラン、動く場所、スケジュール、承認を比較。",
      h1: "Claude Cowork vs ChatGPT Work：チャットアプリの中の 2 つの AI の同僚",
      lead: "Claude Cowork と ChatGPT Work は同じ種類の仕事をします。チャットアプリでほしい成果を伝えると、エージェントが手順を計画し、ファイル、連携したアプリ、ブラウザを使って作業し、確認するための成果物を返します。Cowork は Anthropic のもので、Claude の有料プランで使えます。ChatGPT Work は OpenAI のもので、ChatGPT のプランで使え、機能と利用枠を Codex と共有しています。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "プラン：Cowork は Pro の月 $20 からの Claude の有料プランで使え、Free には含まれません。ChatGPT Work は、Free と Go ではデスクトップアプリで制限付きで使え、Plus の月 $20 からフルに使えます。",
        "動く場所：Cowork は Anthropic のクラウドで動き、ローカルのファイルには Claude Desktop 経由で届きます。ChatGPT Work は OpenAI のクラウドで、または ChatGPT デスクトップアプリ経由でローカルで動きます。",
        "スケジュール：Cowork は毎時から毎週までスケジュールタスクを実行します。ChatGPT Work にはスケジュールタスクに加え、対象プランでは Gmail、Slack、GitHub からのイベントトリガーがあります。",
        "承認：Cowork には Manual、Auto（安全性レビュー付き）、Skip のモードがあります。ChatGPT Work は重要な操作の承認のために一時停止し、デスクトップアプリには権限モードがあります。",
      ],
      pickA: [
        "すでに Claude に課金している、またはドキュメントとリサーチに Anthropic のモデルを使いたい。",
        "コンピューターの電源が切れている間もクラウドで動くスケジュールタスクがほしい。",
      ],
      pickB: [
        "すでに ChatGPT に課金している、またはデスクトップアプリの Free プランで試したい。",
        "Gmail、Slack、GitHub のイベントで起動するタスクがほしい。",
      ],
      faq: [
        {
          q: "ChatGPT Work は無料ですか？",
          a: "ChatGPT Free と Go では、デスクトップアプリで ChatGPT Work を制限付きで使えます。Plus（月 $20）と Pro では、デスクトップ、Web、モバイルで使えます。",
        },
        { q: "Claude Cowork は無料ですか？", a: "いいえ。Claude の有料プラン限定で、Pro の月 $20 からです。" },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Microsoft 365 の AI の同僚と、Anthropic の AI の同僚",
      title: "Copilot Cowork vs Claude Cowork：Microsoft か Anthropic か",
      description:
        "Copilot Cowork vs Claude Cowork：Outlook、Teams、Office ファイルをまたぐ Microsoft のエージェントか、Claude のアプリで働く Anthropic のエージェントか。ライセンス、料金、機能を比較。",
      h1: "Copilot Cowork vs Claude Cowork：Microsoft 365 のエージェントか、Claude のエージェントか",
      lead: "Copilot Cowork と Claude Cowork は、名前も考え方も共通しています。複数ステップのタスクをエージェントに任せ、その操作を承認するというものです。Copilot Cowork は Microsoft 365 をまたいで働き、メールの送信、会議の設定、OneDrive と SharePoint にある Office ファイルの編集を行い、GPT、Claude、Grok のモデルを使えます。Claude Cowork は Claude のアプリで動く Anthropic のエージェントで、Claude モデルを使います。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "仕事のある場所：Copilot Cowork は Outlook、Teams、OneDrive、SharePoint で働き、ローカルのデバイス上のファイルには届きません。Claude Cowork は、Google ドライブ、Gmail、Microsoft 365、Slack などのコネクタと、Claude Desktop 経由のローカルのファイルで働きます。",
        "料金：Copilot Cowork には Microsoft 365 Copilot ライセンスに加えて、1 クレジット $0.01 の Copilot Credits が必要です。Claude Cowork は Pro の月 $20 からの Claude の有料プランに含まれます。",
        "モデル：Copilot Cowork には、テナントの設定に応じて GPT、Claude、Grok のモデルを選べるモデルピッカーがあります。Claude Cowork は Claude モデルで動きます。",
        "アカウント：Copilot Cowork は職場または学校のアカウント向けで、個人アカウントはプレビュー中です。Claude Cowork は個人向けとチーム向けの Claude のプランで使えます。",
      ],
      pickA: [
        "組織が Microsoft 365 で動いていて、すでに Microsoft 365 Copilot のライセンスがある。",
        "メールの送信、会議の予約、Teams への投稿を、承認を挟んでエージェントに任せたい。",
      ],
      pickB: [
        "Microsoft 365 以外で仕事をしている、または自分のコンピューターのローカルのファイルとブラウザを使わせたい。",
        "クレジット単位の課金ではなく、決まった月額プランがいい。",
      ],
      faq: [
        {
          q: "Copilot Cowork の料金はいくらですか？",
          a: "Microsoft 365 Copilot ライセンスが必要で、利用量は Copilot Credits で課金されます。従量課金なら 1 クレジット $0.01、または 5% から 20% の割引がある 1 年間の前払いプランがあります。",
        },
        {
          q: "Copilot Cowork は Claude を使いますか？",
          a: "テナントの設定に応じて、モデルピッカーに GPT と Grok のモデルとあわせて Claude Opus、Sonnet、Fable が含まれます。EU データ境界（EU Data Boundary）のテナントでは GPT モデルのみです。",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "ChatGPT の Work モードと、OpenAI のコーディングエージェント",
      title: "ChatGPT Work vs Codex：どちらを使うべきか",
      description:
        "ChatGPT Work vs Codex：ドキュメントや分析のための OpenAI の Work モードか、リポジトリのためのコーディングエージェントか。機能と利用枠を共有する 2 つの違いを解説。",
      h1: "ChatGPT Work vs Codex：同じエンジン、違う仕事",
      lead: "ChatGPT Work と Codex はどちらも OpenAI のエージェントで、OpenAI によると Work は中核の機能、実行の仕組み、利用上限を Codex と共有しています。違いは用途です。ChatGPT Work は、スライド資料、スプレッドシート、分析など、最後に確認する成果物ができあがるタスクのための ChatGPT のモードです。Codex はコーディングエージェントで、ターミナルの CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、クラウドで使えます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "仕事：ChatGPT Work はドキュメント、スライド資料、スプレッドシート、分析を返します。Codex はリポジトリのコードを読み、編集し、実行します。",
        "使う場所：ChatGPT Work は Web、デスクトップ、モバイルの ChatGPT にあります。Codex はターミナルの CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、Codex Cloud にあります。",
        "利用量：どちらも Codex の利用上限とクレジットを共有します。",
        "オープンソース：Codex の CLI、SDK、App Server は Apache-2.0 です。ChatGPT Work はオープンソースではありません。",
      ],
      pickA: ["タスクの最後にドキュメント、スライド資料、分析ができあがる。", "スマートフォンや Web の ChatGPT から始めたい。"],
      pickB: [
        "タスクがコード（機能追加、修正、レビュー）である。",
        "ターミナルや IDE、あるいは `codex exec` で CI の中で動くエージェントがほしい。",
      ],
      faq: [
        {
          q: "ChatGPT Work と Codex は利用量を共有しますか？",
          a: "はい。OpenAI によると、ChatGPT Work はクレジットを含め、中核の機能、実行の仕組み、利用上限を Codex と共有しています。",
        },
        {
          q: "Work を含む ChatGPT のプランは？",
          a: "Free と Go はデスクトップアプリで制限付きで使えます。Plus（月 $20）、Pro、Business では、デスクトップ、Web、モバイルで使えます。",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Claude のアプリで働く Anthropic の AI の同僚と、専用のコンピューターを持つ xAI の Bot",
      title: "Claude Cowork vs Grok Bot：AI の同僚を比較",
      description:
        "Claude Cowork vs Grok Bot：Claude のアプリでドキュメントとリサーチを扱う Anthropic のエージェントか、専用のクラウドコンピューターを持ち Slack やアプリで働く xAI の Bot か。",
      h1: "Claude Cowork vs Grok Bot：Claude の中のタスクエージェントか、Bot のチームか",
      lead: "Claude Cowork と Grok Bot はどちらも、あなたがいない間もクラウドで働き続ける AI の同僚です。Claude Cowork は Claude のアプリで動く Anthropic のエージェントで、タスクを渡すとファイルが返ってきます。Grok Bot は xAI のもので、専用のクラウドコンピューターを持つ Bot が、あなたのツールにサインインし、Slack、Microsoft Teams、ビデオ通話で働き、互いに仕事を引き継ぎます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "形：Claude Cowork はあなたからタスクを受け取り、タスクの中でサブエージェントを使います。Grok Bot は Bot ごとに専用の仕事を持たせ、Bot 同士がメッセージを送り合い、グループチャットで連携します。",
        "一緒に働く場所：Claude Cowork はデスクトップ、Web、モバイルの Claude のアプリにあります。Grok Bot は専用アプリ、Slack、Teams、ビデオ通話で働きます。",
        "プラン：Claude Cowork は Pro の月 $20 からの Claude の有料プランに含まれます。Grok Bot は Premium（月 $30）、Super、Ultra のプランに含まれます。",
        "モデル：Claude Cowork は Claude モデルで動きます。Grok Bot は Grok で作られています。",
      ],
      pickA: ["ドキュメント、リサーチ、スプレッドシートを任せて、ファイルを受け取りたい。", "すでに Claude を使っている。"],
      pickB: [
        "それぞれに仕事を持つ複数の Bot に、Slack やチームのアプリで働いてほしい。",
        "ミーティングに Bot を参加させたい。",
      ],
      faq: [
        {
          q: "Grok Bot はミーティングに参加できますか？",
          a: "はい。xAI によると、Google Meet、Zoom、Teams の通話に Bot を追加でき、Bot は話を聞き、役に立てるときはチャットに加わり、終わったあともフォローします。",
        },
        {
          q: "コンピューターの電源が切れていても Claude Cowork は動きますか？",
          a: "クラウドのタスクは Anthropic のサーバー上で動き続けます。ローカルのファイルやブラウザが必要な作業だけが、Claude Desktop を待ちます。",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "コードのための Cursor のコーディネーターエージェントと、アプリをまたいで働く xAI の Bot",
      title: "Cursor Projects vs Grok Bot：コーディネーター型エージェントを比較",
      description:
        "Cursor Projects vs Grok Bot：あなたのコードで多数のクラウドエージェントを動かすコーディネーターか、Slack やアプリで働く xAI の Bot か。プランと機能を比較。",
      h1: "Cursor Projects vs Grok Bot：コードのためのエージェントチームか、それ以外のすべてのためか",
      lead: "Cursor Projects と Grok Bot はどちらも、1 つのエージェントにほかのエージェントを任せます。Cursor Project では、コーディネーターエージェントが機能、移行、アプリを計画し、コーディングを並列に動く多数のクラウドエージェントに任せます。Grok Bot は xAI の AI チームメイトで、それぞれが専用のクラウドコンピューターを持って Slack、Teams、あなたのアプリで働き、1 つの Bot がほかの Bot を管理することもできます。どちらも月 $30 のプランから始められます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "仕事：Cursor Projects は GitHub リポジトリでのソフトウェアの仕事向けです。Grok Bot は CRM、サポート、経費精算、採用などのビジネスアプリをまたいで仕事をこなします。",
        "連携：Cursor Project のコーディネーターはワーカーエージェントを作って管理し、Multiplayer Projects ではコーディネーター同士がメッセージを送り合います。Grok Bot は Bot 同士がメッセージを送り合い、グループチャットで連携します。",
        "共有の状態：Cursor Project は共有ファイル（好み、メモ、ワークフロー）とタスクボードを持ちます。Grok Bot はチームの仕事の進め方を記憶します。",
        "トリガー：Cursor Projects はスケジュール、Slack チャンネル、プルリクエストに応じて動きます。Grok Bot はスケジュールでルーティンを実行し、Slack や Teams で働きます。",
      ],
      pickA: [
        "長期のコーディング作業を計画し、多数のエージェントに分担させたい。",
        "チームがすでに Cursor と GitHub を使っている。",
      ],
      pickB: [
        "既存のアプリで、オペレーション、営業、サポートの仕事をする AI チームメイトがほしい。",
        "Slack、Teams、ミーティングで働いてほしい。",
      ],
      faq: [
        {
          q: "Projects を含む Cursor のプランは？",
          a: "Cloud Agents があるすべてのプランです。Premium（月 $30）以上、Teams、Enterprise、従来の有料プランが該当します。Free、Plus、従来の Hobby には含まれません。",
        },
        {
          q: "ノートパソコンを閉じても Cursor Project は動き続けますか？",
          a: "はい。Project はクラウド上の専用のコンピューターで動きます。コーディネーターがローカルのエージェントを起動するのは、あなたのマシンでテストが必要なときだけです。",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Microsoft の AI の同僚と、Microsoft のエージェントビルダー",
      title: "Copilot Cowork vs Copilot Studio：違いは何か",
      description:
        "Copilot Cowork vs Copilot Studio：タスクをこなす Microsoft 365 のエージェントか、エージェントとワークフローを作るローコードスタジオか。料金と機能を比較。",
      h1: "Copilot Cowork vs Copilot Studio：エージェントを使うか、作るか",
      lead: "Copilot Cowork と Copilot Studio はどちらも Microsoft の製品で、どちらも Copilot Credits で課金され、テナントの前払いクレジットのプールを共有します。違いは、誰が仕事をするかです。Copilot Cowork は Microsoft 365 Copilot のエージェントで、タスクを渡すと、あなたの承認のもとでメールを送り、会議を予約し、Office ファイルを編集します。Copilot Studio は、作成者が独自のエージェント、ワークフロー、アプリを作り、Teams、Microsoft Copilot、Web サイト、電話回線に公開する場所です。Copilot Studio のワークフローは、1 つのステップとして Cowork のタスクを開始することもできます。比較とあわせて、Crewmark の位置づけも紹介します。",
      differences: [
        "役割：Copilot Cowork は、Outlook、Teams、Word、Excel、PowerPoint、OneDrive、SharePoint をまたいで、あなたのためにタスクをこなします。Copilot Studio は、ほかの人が使うエージェント、ワークフロー、アプリを作るためのローコードスタジオです。",
        "使う人：Copilot Cowork は、Microsoft 365 Copilot ライセンスがあり Cowork がオンになっている人なら誰でも使えます。Copilot Studio は作成者向けで、公開したエージェントは Web サイトや電話回線で従業員や顧客に対応できます。",
        "料金：Copilot Cowork には Microsoft 365 Copilot ライセンスに加えて、1 クレジット $0.01 の Copilot Credits が必要です。Copilot Studio は 25,000 クレジットのパックを月 $200（年払い）、または従量課金で 1 クレジット $0.01 で販売しており、作成者ライセンスは $0 です。",
        "自動化：Copilot Cowork は、スケジュールされたプロンプトと、メールや Teams のトリガーで動きます。Copilot Studio はさらに、エージェントのトリガー、Human review コネクタによる多段階の承認、1 つのステップとして Cowork を呼び出せるワークフローを備えます。",
      ],
      pickA: [
        "何も作らずに、今日から Microsoft 365 の仕事をエージェントに任せたい。",
        "メール、会議、Teams の投稿を、送られる前に 1 件ずつ承認したい。",
      ],
      pickB: [
        "ほかの人や顧客が使うエージェントやワークフローを作りたい。",
        "コネクタ、多段階の承認、公開チャネル、開発・テスト・本番の別々の環境が必要。",
      ],
      faq: [
        {
          q: "Copilot Cowork は Copilot Studio の一部ですか？",
          a: "いいえ、別々の製品です。テナントの前払いの Copilot Credit のプールを共有し、Copilot Studio のワークフローは Copilot ノードを通じて Copilot Cowork のタスクを開始または再開できます。",
        },
        {
          q: "Copilot Studio の料金はいくらですか？",
          a: "Microsoft の Licensing Guide には、テナントあたり 25,000 Copilot Credits のパックが月 $200（年払い）、または従量課金で 1 クレジット $0.01 と記載されています。パックの未使用クレジットは繰り越されません。作成者ライセンスは $0 で、無料トライアルではエージェントを公開できません。",
        },
      ],
    },
  },
};
