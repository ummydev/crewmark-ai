import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI coworker 比較：Claude Cowork、Copilot ほか",
    description:
      "AI の同僚を比較：Claude Cowork、Copilot Cowork、ChatGPT Work、Gemini、Meta Muse、Grok Bot、Andrew Ng の OpenWorker など。",
  },
  breadcrumb: "AI の同僚ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "ブログ · AI の同僚",
    title: "AI の同僚ツールを比較：できること、料金、実行前に確認すること",
    lead: "AI の同僚とは、タスクを丸ごと任せられるエージェントです。あなたのファイル、アプリ、ブラウザの中で作業し、バックグラウンドで作業を続け、リスクのあることをする前にはあなたに確認します。2026年には Anthropic、Microsoft、OpenAI、Google、Meta、xAI がそれぞれ提供しており、GitHub には Andrew Ng の OpenWorker をはじめとするオープンソースのものもあります。それぞれのできること、利用できる人、料金、動く場所を、各ベンダー自身のページをもとにまとめました。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "AI の同僚とは？",
      text: [
        "チャットボットは質問に答えます。AI の同僚は、レポート、スライド資料、記入済みのスプレッドシート、片付いた受信トレイのように成果がはっきりしたタスクを引き受け、その手順を自分で進めます。製品ごとの違いは大きいものの、共通点は次の 4 つです。",
      ],
      points: [
        "仕事のある場所で働く：ファイル、メール、カレンダー、連携したアプリ、ブラウザで作業します。",
        "あなたがいなくても続ける：クラウドのコンピューター上で、またはアプリを開いている間はあなたのマシン上で動き続けます。",
        "繰り返せる：多くは、スケジュールに沿って、または新着メールなど何かが起きたときにタスクを実行します。",
        "先に確認する：送信、公開、購入、削除はあなたの承認を待ちます。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "AI の同僚ツール早見表",
      text: [
        "各ベンダーのサイト、料金ページ、ドキュメント、GitHub の情報を 2026年11月13日に確認しました。価格は米ドルです。順位付けではありません。",
      ],
      headers: ["AI の同僚", "提供元", "利用できる人", "最低価格", "動く場所"],
      rows: [
        ["Claude Cowork", "Anthropic", "Claude の有料プラン（Free は対象外）", "Claude Pro、$20/月", "Anthropic のクラウド。ローカルのファイルとブラウザはデスクトップアプリ経由"],
        ["Copilot Cowork", "Microsoft", "Microsoft 365 Copilot ライセンスのある職場または学校のアカウント。個人アカウントはプレビュー", "ライセンスに加えて Copilot Credits（1 クレジット $0.01）", "Microsoft のクラウド。あなたの OneDrive と SharePoint のファイルを使用"],
        ["ChatGPT Work", "OpenAI", "ChatGPT の各プラン。Free と Go はデスクトップアプリで制限付き", "ChatGPT Plus（$20/月）からフル利用", "OpenAI のクラウド、またはデスクトップアプリ経由であなたのコンピューター"],
        ["Gemini のタスク（旧 Spark）", "Google", "Google AI Pro または Ultra、個人アカウントを持つ成人。EEA、スイス、英国、ナイジェリアでは利用不可", "Google AI Pro、$19.99/月（米国）", "Google のクラウド"],
        ["Meta Muse", "Meta", "米国とカナダ、18 歳以上。シンガポールは 10月27日から", "ほとんどの用途で無料。サブスクリプションあり", "ユーザーごとのクラウドコンピューター"],
        ["Grok Bot", "xAI", "Premium、Super、Ultra、Teams、Enterprise プラン", "Premium、$30/月", "Bot ごとのクラウドコンピューター。Slack、Teams、通話"],
        ["Lindy", "Lindy", "誰でも。無料トライアルあり", "アクティブユーザーあたり $29.99/月", "Lindy のクラウド。Slack、メール、iMessage、電話"],
        ["OpenWorker（オープンソース）", "Andrew Ng", "誰でも。デスクトップアプリはオープンベータ", "無料。自分のモデルのキーまたはローカルモデルを使用", "あなたのコンピューター（macOS、Windows）"],
        ["OpenBot（オープンソース）", "CopilotKit", "誰でも", "個人プロジェクトは無料。Business は 1 ユーザーあたり最大 $29/月", "あなたのノートパソコン、またはあなたの Kubernetes クラスター"],
        ["Suparagent（オープンソース）", "GitHub の Anil-matcha", "誰でも", "セルフホストなら無料。ホスティング版は $15/月から", "デスクトップアプリ、自分のサーバー、またはホスティング版"],
        ["Crewmark", "Crewmark", "誰でも", "無料：1 プロジェクト、AI 社員 3 名まで", "あなたのコンピューター。あなたの Claude Code または Codex の中で動作"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "AI の同僚ごとのガイド",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork)：対象プラン、セットアップ、承認モード、Cowork と Claude Code の違い。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)：ライセンス、Copilot Credits、Microsoft 365 でのセットアップ。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)：Work モードにできること、対象プラン、Codex との関係。",
        "[Cursor Projects](/personal-agent/cursor-projects)：大きなコーディング作業のための Cursor のコーディネーターエージェント。",
        "[Lindy](/personal-agent/lindy)：クレジットでの料金とセットアップ方法。",
        "[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot)、[Suparagent](/personal-agent/suparagent)：オープンソースのもの。GitHub からのセットアップ方法も紹介しています。",
        "並べて比較：[すべての比較](/compare)。たとえば [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) や [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio) があります。",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "大手 AI ラボが提供する AI の同僚",
      points: [
        "Claude Cowork（Anthropic）：Claude のアプリで行う、コーディング以外の仕事向けです。リサーチ、ドキュメント、スプレッドシート、スライド、ファイル作業などを扱います。タスクはクラウドで実行され、ノートパソコンを閉じても続きます。`/schedule` で毎時、毎日、毎週の実行を予約できます。Manual モードでは実行前に確認し、Auto モードでは各アクションに安全性レビューをかけます。有料プランのみで、Pro の月 $20 からです。",
        "Copilot Cowork（Microsoft）：Microsoft 365 にまたがる複数ステップのタスクをこなします。メールの送信、会議の設定、Word・Excel・PowerPoint ファイルの編集、Teams への投稿などです。重要な操作の前には承認ダイアログを表示し、スケジュール実行やイベントをきっかけにしたタスクにも対応します。テナントの設定によって、GPT、Claude、Grok のモデルを選べます。Microsoft 365 Copilot ライセンスに加えて、Copilot Credits での利用料が必要です。",
        "ChatGPT Work（OpenAI）：ChatGPT の Work モードで、スライド資料、スプレッドシート、分析など、最後に確認する成果物ができあがるタスク向けです。中核となる機能と利用枠を Codex と共有しています。Free と Go はデスクトップアプリで制限付きで使え、Plus（月 $20）以上ではデスクトップ、ウェブ、モバイルで、スケジュール実行とイベントトリガー付きで使えます。",
        "Gemini のタスク（Google、旧 Spark）：Gemini アプリの中で動くクラウドエージェントです。Gmail、Google ドキュメントなどの Google アプリを使い、スケジュールに沿って、または何かが起きたときに動き、送信、削除、購入、フォームの送信の前には必ず確認します。Google のヘルプページには Google AI Pro または Ultra と記載されています。",
        "Meta Muse：Meta の Muse Spark モデルで動くパーソナルエージェントで、ユーザーごとに専用のクラウドコンピューターを持ちます。スケジュールに沿って、またイベントに応じて動き、あなたの承認なしに公開、送信、支出をすることはありません。Meta によると、多くの人が必要とすることのほとんどは無料で使え、それ以上はサブスクリプションで利用できます。",
        "Grok Bot（xAI）：専用のクラウドコンピューターを持つ Bot が、あなたのツールにサインインし、Slack、Microsoft Teams、ビデオ通話の中で働き、ルーティンを実行し、Bot 同士で仕事を引き継ぎます。xAI の Premium（月 $30）、Super、Ultra プランに含まれます。[Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code) もご覧ください。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub で公開されているオープンソースの AI の同僚",
      text: [
        "自分のモデルのキーやローカルモデルを使って AI の同僚を自分で動かしたい場合は、次のオープンソースのものがあります。",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker)（MIT、スター約 19,000）：Andrew Ng による「日々の仕事のための AI の同僚」（\"AI coworker for your everyday work\"）で、オープンベータ中の macOS・Windows 向けデスクトップアプリです。OpenAI、Anthropic、Gemini、またはローカルモデルを使ってあなたのマシン上で動き、アクションは承認を経てから実行され、ブリーフィングやレポートを定期的に作成するよう設定できます。",
        "[OpenBot](https://github.com/CopilotKit/OpenBot)（MIT、スター約 11,600）：CopilotKit による、セルフホスト可能な AI の同僚のためのワークスペースです。AI の同僚それぞれが専用のブラウザ、ファイル、ツールを持ちます。別ライセンスの CopilotKit Intelligence を使います。[OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot) もご覧ください。",
        "[Suparagent](https://github.com/Anil-matcha/suparagent)（Apache-2.0、スター約 7,000）：「AI の同僚のためのワークスペース」（\"a workspace for AI coworkers\"）で、名前を付けたエージェントを、ルーティンと承認付きで、Claude Code、Codex、Gemini CLI などすでに使っているエンジンの上で動かします。",
        "[ai-employees](https://github.com/markfulton/ai-employees)（MIT）：8 つの業務職種を定期ルーティンのフォルダとしてまとめたもので、すでに使っているエージェントの上で動きます。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "コードのための AI の同僚：Cursor Projects",
      text: ["ここまでの AI の同僚の多くは、ドキュメント、メール、リサーチを扱います。ソフトウェアの仕事向けには、Cursor が Projects を追加しました。"],
      points: [
        "コーディネーターエージェントが、機能、移行、アプリ全体といった大きな仕事を計画し、Cursor の Cloud Agents 上で並列に動くエージェントに任せ、完成した仕事をあなたの確認のために持ち帰ります。",
        "各 Project は専用のクラウドコンピューターで動くので、ノートパソコンを閉じても止まりません。また、すべてのエージェントが読む共有のメモ、好み、タスクボードを持ちます。",
        "Slack チャンネルを見張る、スケジュールで動く、あなたのプルリクエストを追う、といったことができます。Multiplayer Projects ではチームのメンバーごとにコーディネーターがあり、コーディネーター同士がメッセージを送り合います。",
        "Cloud Agents がある Cursor のプランで使え、Premium の月 $30 からです。Free と Plus には含まれません。[Cursor Projects のガイド](/personal-agent/cursor-projects)と [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot) をご覧ください。",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "無料の AI の同僚はありますか？",
      points: [
        "Meta Muse：Meta によると、多くの人が必要とすることのほとんどは無料です。",
        "ChatGPT Work：ChatGPT Free でも、デスクトップアプリで制限付きで使えます。",
        "オープンソース：OpenWorker、OpenBot（個人プロジェクト）、Suparagent は無料で動かせます。モデルの提供元に料金を支払うか、ローカルモデルを使います。",
        "Lindy：7 日間 $50 分のクレジットが付いた無料トライアルがあります。",
        "Crewmark：1 プロジェクト、AI 社員 3 名までは無料で、すでに契約している Claude Code または Codex のサブスクリプションで動きます。",
        "Claude Cowork、Gemini のタスク、Copilot Cowork、Grok Bot には、有料プランまたはライセンスが必要です。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "AI の同僚の選び方",
      steps: [
        { title: "仕事がある場所から考える", text: "職場で Microsoft 365 を使っているなら Copilot Cowork、Gmail と Google ドキュメントなら Gemini が候補になります。すでに Claude や ChatGPT にお金を払っているなら、Cowork や Work はそのプランに含まれています。" },
        { title: "どこで動かすかを決める", text: "クラウド型の AI の同僚は、ノートパソコンを閉じても作業を続けます。オープンソースのものなら、データ、キー、ファイルをあなたのマシンに置いたままにできます。" },
        { title: "どう確認してくるかを見る", text: "送信、投稿、支出の前に承認を求めるか、そして何をしたかのログが残るかを確認しましょう。" },
        { title: "繰り返しのタスクを 1 つ、2 週間試す", text: "週次レポートや毎日の受信トレイの整理を任せてみると、時間の節約になるかがすぐにわかります。" },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "AI の同僚と AI 社員の違い",
      text: [
        "この 2 つの呼び方は重なっています。実際には、AI の同僚はタスクが出てくるたびに任せる相手で、AI 社員は常設の役割を持ちます。職務内容、目標、勤務時間、そして自分から取りかかる仕事のキューです。後者の考え方で作られたプラットフォームは [AI 社員プラットフォームの比較](/blog/best-ai-employee-platforms) で比べています。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "コーディングエージェントに常設の仕事を",
      text: [
        "Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字で表した目標、勤務時間、ハートビートを持つ AI 社員に変えます。それぞれが共有ボードから次の issue を取り、判断が必要なときはその issue 上であなたに質問します。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees) から選びます。たとえば [AI SEO スペシャリスト](/ai-employees/seo-specialist) です。" },
        { title: "仕事をボードに載せる", text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "エージェントごとのセットアップ付きの仕事の例は、[Claude Code の活用例](/use-cases/claude-code) と [Codex の活用例](/use-cases/codex) にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "AI の同僚を選ぶ" },
  mid: {
    title: "常設の仕事を任せられる AI の同僚をお探しですか？",
    text: "Crewmark は、あなたの Claude Code や Codex のエージェントに、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "AI の同僚とは何ですか？",
        a: "タスクを丸ごと任せられるエージェントです。あなたのファイル、アプリ、ブラウザの中で作業し、バックグラウンドで作業を続け、スケジュールに沿ってタスクを繰り返すことができ、送信、公開、購入、削除の前には確認します。",
      },
      {
        q: "Andrew Ng の AI の同僚とは？",
        a: "OpenWorker です。MIT ライセンスの macOS・Windows 向けオープンソースのデスクトップアプリで、github.com/andrewyng/openworker で公開されています。README では「日々の仕事のための AI の同僚」（\"an AI coworker for your everyday work\"）と紹介されています。自分のモデルのキーかローカルモデルを使って、あなたのマシン上で動きます。",
      },
      {
        q: "Claude Cowork は無料ですか？",
        a: "いいえ。Claude Cowork は Claude の有料プラン限定で、Pro の月 $20（年払いなら月 $17）からです。Claude Free には含まれていません。",
      },
      {
        q: "Copilot Cowork の料金はいくらですか？",
        a: "Microsoft 365 Copilot ライセンスが必要で、利用分は Copilot Credits で請求されます。従量課金なら 1 クレジット $0.01、または 5% から 20% の割引がある 1 年間の前払いプランがあります。",
      },
      {
        q: "Claude Cowork と Claude Code の違いは？",
        a: "Claude Cowork は、Claude のアプリで行うコーディング以外の仕事向けで、リサーチ、ドキュメント、スプレッドシート、スライド、ファイルを扱います。Claude Code は、あなたのリポジトリで使う Anthropic のコーディングエージェントです。Anthropic によると、Cowork は Claude Code と同じアーキテクチャを使っています。",
      },
      {
        q: "GitHub にオープンソースの AI の同僚はありますか？",
        a: "あります。OpenWorker（Andrew Ng、MIT）、OpenBot（CopilotKit、MIT）、Suparagent（Apache-2.0）、ai-employees（MIT）などです。",
      },
    ],
  },
  cta: {
    title: "AI に、タスクだけでなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各ベンダー自身のサイト、料金ページ、ドキュメント、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、このページに登場するどの企業とも提携しておらず、承認も受けていません。製品名は各所有者の商標です。",
};
