import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker とは：Andrew Ng のオープンソース AI の同僚",
    description:
      "OpenWorker は GitHub で公開された Andrew Ng のオープンソースの AI の同僚。自分のモデルで動くデスクトップアプリ、承認、スケジュール、Harness SDK。",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · オープンソース",
    title: "OpenWorker：Andrew Ng のオープンソースの AI の同僚とセットアップ方法",
    lead: "OpenWorker は、README で「日々の仕事のための AI の同僚」（“an AI coworker for your everyday work”）と紹介されているオープンソースのデスクトップアプリと、独自のエージェント型アプリを作るための TypeScript と Rust の Harness SDK からなります。リポジトリは Andrew Ng の GitHub アカウントにあり、MIT ライセンスで、2026年11月13日時点でスターは約 19,050 でした。アプリは、自分のモデルのキーかローカルモデルを使ってあなたのマシン上で動き、行動する前に確認し、すべてのツール呼び出しを記録します。このガイドでは、できること、費用、セットアップ方法、承認の仕組み、OpenBot、Suparagent、Claude Cowork との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenWorker とは",
      points: [
        "日々の仕事のためのデスクトップアプリ：リサーチ、文章作成、コードレビュー、ツールをまたいだタスクの実行を行います。オープンベータ中です。",
        "あなたのマシンで動く：エージェントのループ、会話、コネクタのトークン、モデルのキーはマシン上にとどまります。クラウドにあるのは、コネクタの OAuth サインインを仲介する小さなサービスだけです。",
        "モデルを選べる：OpenAI、Anthropic、Google Gemini、OpenRouter などのプロバイダーを自分のキーで、または Ollama、LM Studio、llama.cpp、vLLM 経由のローカルモデルを使います。エージェントのエンジンは、Andrew Ng のライブラリ aisuite の上に Python で書かれています。",
        "専門の同僚は、1 つの仕事のためのツールと指示を備えています。最初に用意されているのはセキュリティ担当の同僚です。",
        "コネクタ：GitHub、Slack、メール、カレンダーなど 25 以上に加えて MCP。Slack で @OpenWorker をメンションすると、タスクがあなたのデスクトップで実行され、返信はそのスレッドに届きます。",
        "スケジュール：朝のブリーフ、週次レポートなどの繰り返しのタスクをスケジュールで実行し、確認できるトランスクリプトを残します。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub の OpenWorker と Harness SDK",
      text: [
        `コードは [github.com/andrewyng/openworker](${repo}) にあります。リポジトリは 2026年7月20日に作成され、MIT の LICENSE には著作権者として Andrew Ng の名前が記載されており、2026年11月13日時点でスターは約 19,050 でした。`,
      ],
      points: [
        "Harness SDK：同じリポジトリにある TypeScript と Rust の SDK で、独自のエージェント型のデスクトップアプリや Web アプリを作れます。",
        "サブエージェントとチーム：SDK はどちらにも対応しています。デスクトップアプリについては記載がありません。",
        "デプロイ：SDK で作ったアプリは、AWS、Azure、Google Cloud の Kubernetes 上で動かせます。",
        "コントリビューション：メンテナーは、すでに開発中の機能や計画外の機能については、プルリクエストを受け付けない場合があるとしています。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker の料金とライセンス",
      text: [
        "2026年11月13日に確認した時点で、README にも openworker.com にも価格の記載はありません。自分のモデルのキーを使ってプロバイダーから請求を受けるか、ローカルモデルを動かします。",
      ],
      headers: ["構成要素", "支払うもの"],
      rows: [
        ["デスクトップアプリ（オープンベータ）", "価格の記載なし。MIT ライセンス"],
        ["Harness SDK（TypeScript、Rust）", "価格の記載なし。MIT ライセンス、同じリポジトリ"],
        ["クラウドのモデル：OpenAI、Anthropic、Google Gemini、OpenRouter などのプロバイダー", "自分のキーで、そのプロバイダーが請求"],
        ["ローカルモデル：Ollama、LM Studio、llama.cpp、vLLM", "自分のマシンで動く"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenWorker のセットアップ方法",
      steps: [
        {
          title: "デスクトップアプリをダウンロードする",
          text: "Apple シリコンの macOS 12 以降（署名・公証済み）と、x64 の Windows 10 または 11 で動きます。Windows 版はまだコード署名されていないため、SmartScreen が警告を表示します。Linux 版のダウンロードは記載されていません。",
        },
        {
          title: "モデルを追加する",
          text: "OpenAI、Anthropic、Google Gemini、OpenRouter などのプロバイダーの自分のキーを入力するか、Ollama、LM Studio、llama.cpp、vLLM 経由でローカルモデルを使います。キーはあなたのマシンにとどまります。",
        },
        {
          title: "ツールをつなぐ",
          text: "GitHub、Slack、メール、カレンダーなどのコネクタや、MCP サーバーを追加します。サインインは OAuth を仲介する小さなクラウドサービスを通りますが、トークンはあなたのマシンにとどまります。",
        },
        {
          title: "何に OK が必要かを決める",
          text: "操作はデフォルトで承認を待ちます。1 回限りの承認を常設のルールや許可リストにしたり、自動承認をオンにしたりできます。自動承認ではレビュアーのモデルが判断し、確信が持てないときはあなたにエスカレーションします。",
        },
        {
          title: "繰り返しの仕事をスケジュールする",
          text: "朝のブリーフ、週次レポートなどの繰り返しのタスクを設定します。無人の実行が自分で承認することはなく、質問は受信箱で待ち、実行ごとに確認できるトランスクリプトが残ります。",
        },
      ],
      source: { label: "出典：GitHub の OpenWorker README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenWorker で主導権を保つ仕組み：承認、レビュー、監査",
      points: [
        "デフォルトで承認：操作はあなたの OK を待ち、一連の危険な操作は常に人間の判断に委ねられます。",
        "積み上げていくルール：1 回限りの承認を、常設のルールや許可リストの項目にできます。",
        "任意の自動承認：レビュアーのモデルが承認を処理し、確信が持てないときはあなたにエスカレーションします。サーキットブレーカーも備えています。",
        "監査証跡：すべてのツール呼び出しが、どう承認されたかとともに記録され、データが「Leaves this Mac」（この Mac の外に出る）操作にはフラグが付きます。",
        "サンドボックス：コマンドは NVIDIA OpenShell のサンドボックス、または macOS か Windows の組み込みサンドボックスで実行できます。",
        "スケジュール実行が自分で承認することはなく、あなたに確認が必要なことは受信箱で待ちます。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker と OpenBot、Suparagent、Claude Cowork の比較",
      text: [
        "2026年11月13日に確認した各プロジェクトの README またはベンダー自身のページの情報で、GitHub のスター数も同日のものです。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。",
        "ガイド：[OpenBot](/personal-agent/openbot)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["提供元", "Andrew Ng（GitHub の andrewyng）", "CopilotKit", "GitHub の Anil-matcha", "Anthropic"],
        ["オープンソース", "MIT。スター約 19,050", "MIT のテンプレート、CopilotKit Intelligence は別ライセンス。スター約 11,652", "Apache 2.0。スター約 7,050", "いいえ"],
        ["動く場所", "自分のコンピューター（macOS、Windows）。コネクタのサインインは小さなクラウドサービスが仲介", "デスクトップアプリ（Mac、Windows、Docker バックエンド）または Kubernetes。ホスティング版はアーリーアクセス", "デスクトップアプリ、セルフホストの Linux サーバー、またはホスティング版の Web アプリ", "Anthropic のクラウド。ローカルの作業は Claude Desktop 経由"],
        ["モデル", "OpenAI、Anthropic、Gemini、OpenRouter などの自分のキー、またはローカルモデル", "OpenAI、Claude、Gemini、オープンモデル。AG-UI 経由で自前のエージェント", "Claude Code、Codex、Gemini CLI、Cursor などのエンジン。モデルは含まれない", "Claude モデル"],
        ["料金", "価格の記載なし。モデルは自分で用意", "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29", "セルフホストの料金の記載なし。ホスティング版は月 $0〜$99", "Claude の有料プラン。Pro は月 $20"],
        ["定期的な仕事", "スケジュールで動くブリーフ、レポートなどの繰り返しのタスク", "ルーティンワーカーが実行するルーティン", "スケジュール、Webhook、オンデマンドで動くルーティン", "毎時、毎日、毎週、平日に、クラウドで"],
        ["承認", "デフォルトでオン。任意でレビュアーのモデル", "操作の前に確認。チーム版では監査", "Ask first、Accept edits、Approve for me、Plan only", "Manual、Auto、Skip"],
        ["タスクボード", "記載なし", "記載なし", "タスクボードとカレンダー", "issue ボードはなし。タスクリストと Scheduled ページ"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "デスクトップには AI の同僚を。ボードには AI 社員を。",
      text: [
        "OpenWorker は、自分のマシンで動かす AI の同僚です。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。それぞれが共有ボードから issue を取るので、繰り返し発生するエンジニアリング、SEO、マーケティングの仕事が拾われ、追跡されます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees)から始め、目標を数字で設定します。" },
        { title: "仕事をボードに載せる", text: "共有ボードで issue を割り当てます。勤務時間中は、ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenWorker をセットアップする" },
  mid: {
    title: "ボードから issue を取る AI 社員がほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex のセッションに、職種、勤務時間、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "OpenWorker のよくある質問",
    items: [
      {
        q: "OpenWorker とは何ですか？",
        a: "README で「日々の仕事のための AI の同僚」（“an AI coworker for your everyday work”）と紹介されているオープンソースのデスクトップアプリと、独自のエージェント型アプリを作るための Harness SDK です。自分のモデルのキーかローカルモデルを使ってあなたのマシンで動き、操作の前に承認を求め、スケジュールでタスクを実行できます。デスクトップアプリはオープンベータ中です。",
      },
      {
        q: "OpenWorker は Andrew Ng が作ったものですか？",
        a: "リポジトリは Andrew Ng の GitHub アカウントにある github.com/andrewyng/openworker で、LICENSE には著作権者として Andrew Ng の名前が記載されています。アプリのエンジンは、彼のライブラリである aisuite の上に作られています。openworker.com のフッターには「© 2026 OpenWorker」とあります。",
      },
      {
        q: "OpenWorker は無料でオープンソースですか？",
        a: "MIT ライセンスのオープンソースで、README にも openworker.com にも価格の記載はありません。自分のモデルのキーを使ってプロバイダーから請求を受けるか、Ollama、LM Studio、llama.cpp、vLLM 経由でローカルモデルを動かします。",
      },
      {
        q: "OpenWorker の Harness SDK とは？",
        a: "同じリポジトリにある TypeScript と Rust の SDK で、独自のエージェント型のデスクトップアプリや Web アプリを作れます。サブエージェントとチームに対応し、SDK で作ったアプリは AWS、Azure、Google Cloud の Kubernetes 上で動かせます。",
      },
      {
        q: "OpenWorker は Mac、Windows、Linux で動きますか？",
        a: "Apple シリコンの macOS 12 以降と、x64 の Windows 10 または 11 で動きます。Windows 版はまだコード署名されていないため、SmartScreen が警告を表示します。Linux 版のダウンロードは記載されていません。",
      },
      {
        q: "OpenWorker の制約は？",
        a: "デスクトップアプリはオープンベータ中で、Windows 版はまだコード署名されておらず、メンテナーはすでに開発中の機能や計画外の機能については、プルリクエストを受け付けない場合があるとしています。",
      },
    ],
  },
  cta: {
    title: "デスクトップには AI の同僚を。コーディングエージェントにも仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、GitHub の OpenWorker README と openworker.com で確認しました。比較の情報は、同日に各製品自身のページで確認しています。",
  disclaimer:
    "Crewmark は独立した製品であり、Andrew Ng や OpenWorker とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
