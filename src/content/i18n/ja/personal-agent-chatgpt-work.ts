import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work とは：料金、ダウンロード、Codex との違い",
    description:
      "ChatGPT Work を解説。Work モードと Chat の違い、対象プランと料金、デスクトップアプリ、Codex や Claude Cowork との違いを紹介します。",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · OpenAI",
    title: "ChatGPT Work：OpenAI の Work モードにできることと使い方",
    lead: "ChatGPT Work は、成果がはっきりしたタスクを任せるための ChatGPT のモードです。Chat から Work に切り替えて、何を返してほしいかを伝えると、ChatGPT がタスクを計画し、あなたのファイル、プラグイン、Web、ブラウザ、コードを使って、スライド資料、スプレッドシート、ドキュメント、分析など、確認するための成果物を返します。中核となる機能と利用上限は、OpenAI のコーディングエージェントである Codex と共有しています。このガイドでは、できること、対象プラン、セットアップ方法、実行前に確認する仕組み、Codex、Claude Cowork、Copilot Cowork との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT Work とは",
      points: [
        "別のアプリではなくモード：ChatGPT の中で Chat から Work に切り替えます。OpenAI のガイダンスでは、答えがほしいときは Chat、タスクを完了させたいときは Work を使います。",
        "確認できる成果物を返す：スライド資料、スプレッドシート、ドキュメント、分析、定期的なアップデートを、あなたのファイル、プラグイン、Web、ブラウザ、コードから作ります。",
        "クラウドで動く：Web では、タスクは OpenAI のインフラ上の管理されたクラウド環境で実行され、アプリを閉じても続きます。デスクトップアプリでは、有効になっていれば、あなたのファイル、アプリ、ブラウザを使ってローカルで作業させることもできます。",
        "中核を Codex と共有する：OpenAI は Work を、同じ中核機能を日常の仕事向けの体験で提供するものと説明しています。Git やシェルの出力、プルリクエストのペインといった技術的な詳細は省かれています。",
        "仕事を分割する：ChatGPT はタスクのうち独立した部分をサブエージェントに任せることができ、その進み具合を追えます。",
        "仕事を繰り返す：スケジュールタスクに加え、Web とモバイルでは Gmail、Slack、GitHub のイベントで起動するタスクがあります。",
        "OpenAI は、2026年7月6〜10日の週の What's new ダイジェストで紹介しました。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work の料金：対象プラン",
      text: [
        "2026年11月13日時点の OpenAI の料金ドキュメントによる価格（米ドル）です。Work は Codex と同じ料金、クレジット、利用上限を使い、長いタスクや複雑なタスクはより多くのクレジットを消費することがあります。",
      ],
      headers: ["プラン", "料金", "ChatGPT Work"],
      rows: [
        ["Free", "$0/月", "デスクトップアプリのみで制限付き。スケジュールタスクなし"],
        ["Go", "$8/月", "デスクトップアプリのみで制限付き。スケジュールタスクあり"],
        ["Plus", "$20/月", "デスクトップ、Web、モバイル。追加クレジットを購入可能"],
        ["Pro", "$100/月から（$100、$200、$500 のプラン）", "デスクトップ、Web、モバイル。追加クレジットを購入可能"],
        ["Business（2 ユーザー以上）", "年払いでユーザーあたり $20/月、月払いなら $25", "クレジットベースの契約では、ワークスペースで共有するクレジット"],
        ["Enterprise と Edu", "営業に問い合わせ", "ワークスペースで共有するクレジット。管理者が Work、プラグイン、ブラウザの利用を管理"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "ChatGPT Work のセットアップ方法",
      steps: [
        {
          title: "使う場所を選ぶ",
          text: "Work は Web、macOS・Windows・Linux 向けの ChatGPT デスクトップアプリ、iOS と Android 版の ChatGPT で動きます。Free と Go ではデスクトップアプリをダウンロードしてください。これらのプランでは、Work はデスクトップアプリにしかありません。",
        },
        { title: "Chat から Work に切り替える", text: "Work モードでタスクを始め、ブリーフ、スライド資料、分析、スプレッドシートなど、返してほしい成果を伝えます。" },
        {
          title: "情報源を与える",
          text: "ファイルをアップロードするかプロジェクトを使い、Slack、Google ドライブ、SharePoint、メール、カレンダー、CRM、プロジェクト管理ツールなどのプラグインをつなぎます。デスクトップアプリでは、対応地域であれば、ローカルのファイル、ブラウザ拡張機能、macOS と Windows での Computer Use も使えます。",
        },
        {
          title: "モデルと確認の仕方を選ぶ",
          text: "ガイドでは、負荷の高い仕事には GPT-6 Astra、複雑な仕事を低コストでこなすには GPT-6.1 Sol、シンプルなタスクには Luna を勧めています。デスクトップアプリでは、まず Ask for approval の権限モードから始めましょう。",
        },
        {
          title: "繰り返しにする",
          text: "Web かデスクトップアプリの Chat または Work からスケジュールタスクを作るか、Web とモバイルでは Gmail、Slack、GitHub のイベントでタスクを起動します。1 つのタスクで、イベントトリガーと時間のスケジュールを組み合わせることはできません。",
        },
      ],
      source: { label: "出典：OpenAI ドキュメント「Get started with Work」", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "ChatGPT Work で主導権を保つ仕組み",
      points: [
        "ChatGPT は進み具合を表示し、情報が必要なときや重要な操作に承認が必要なときには一時停止します。タスクの途中で質問に答えたり、方向を変えたりできます。",
        "デスクトップアプリの権限モードは、Ask for approval（推奨の始め方）、Approve for me（対象のリクエストは自動レビューへ）、そして利用できる場合はフルアクセスです。サンドボックスがファイルとネットワークの制限を設けます。",
        "デフォルトでは、クラウドのブラウザは新しい Web サイトを訪れる前に確認し（Always ask、Auto approve、Always allow）、影響の大きい操作の前に改めて確認することもあります。",
        "クラウドのタスクは、あなたのコンピューターのファイル、アプリ、ブラウザのセッション、ネットワークアクセスを引き継ぎません。クラウドのブラウザは、あなたのローカルのタブ、拡張機能、履歴、保存したパスワードを使えません。",
        "ワークスペースの管理者は、Work、プラグイン、ブラウザの利用、ネットワークアクセスを管理します。Enterprise と Edu のワークスペースでは、プラグインはデフォルトでオフで、クラウドのブラウザを使うには管理者が有効にする必要があります。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work と Codex、Claude Cowork、Copilot Cowork の比較",
      text: [
        "2026年11月13日に確認した各ベンダー自身のドキュメントと料金ページの情報です。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。コーディングの仕事については [Claude Code vs Codex](/blog/claude-code-vs-codex) と [Codex の活用例](/use-cases/codex)、Anthropic のエージェントについては [Claude Cowork のガイド](/personal-agent/claude-cowork)をご覧ください。",
        "並べて比較：[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)。ガイド：[Claude Cowork](/personal-agent/claude-cowork)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["提供元", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["用途", "確認する成果物ができあがるタスク：スライド資料、スプレッドシート、ドキュメント、分析", "コーディング：リポジトリのコードを調べ、編集し、実行", "コーディング以外のナレッジワーク", "Microsoft 365 をまたぐ複数ステップのタスク"],
        ["動く場所", "OpenAI のクラウド。有効にすればデスクトップアプリでローカルに", "CLI、IDE 拡張機能、ChatGPT デスクトップアプリ。Codex Cloud", "Anthropic のクラウド。ローカルのファイルは Claude Desktop 経由", "Microsoft のクラウド。OneDrive と SharePoint を使用"],
        ["利用できる人", "ChatGPT の各プラン。Free と Go は制限付き", "ChatGPT の各プラン、または OpenAI の API キー（クラウド機能なし）", "Claude の有料プラン、Pro は $20/月から", "Microsoft 365 Copilot ライセンスと Copilot Credits"],
        ["利用量", "料金、クレジット、上限を Codex と共有", "料金、クレジット、上限を Work と共有", "チャットより早くプランの上限を消費", "Copilot Credits で利用ごとに課金"],
        ["繰り返しの仕事", "スケジュールタスク。Gmail、Slack、GitHub のイベント", "ChatGPT アプリと Web のスケジュールタスク", "毎時〜毎週のスケジュールタスク、クラウドで", "スケジュールされたプロンプト。メール、Teams、コネクタのイベント"],
        ["承認", "Ask for approval、Approve for me、フルアクセス。サンドボックス", "Ask for approval、Approve for me、フルアクセス。サンドボックス", "Manual、Auto、Skip のモード", "重要な操作の前にプレビュー付きの承認ダイアログ"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "ドキュメントには Work を。コードベースには Crewmark を。",
      text: [
        "ChatGPT Work はタスクを受け取り、確認するための成果物を返します。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。それぞれが共有ボードから issue を取るので、リポジトリでのエンジニアリング、SEO、マーケティングの仕事がスケジュールどおりに進みます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めましょう。" },
        { title: "仕事をボードに載せる", text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は、[Codex の活用例](/use-cases/codex)と [Claude Code の活用例](/use-cases/claude-code)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "ChatGPT Work をセットアップする" },
  mid: {
    title: "コードベースのための AI の同僚がほしいですか？",
    text: "Crewmark は、あなたの Codex や Claude Code に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "ChatGPT Work のよくある質問",
    items: [
      {
        q: "ChatGPT Work とは何ですか？",
        a: "成果がはっきりしたタスクを任せるための ChatGPT のモードです。ChatGPT がタスクを計画し、あなたのファイル、プラグイン、Web、ブラウザ、コードを使って、スライド資料、スプレッドシート、ドキュメント、分析など、確認するための成果物を返します。",
      },
      {
        q: "ChatGPT Work と Chat の違いは？",
        a: "同じアプリの 2 つのモードです。OpenAI は、答えがほしいときは Chat、タスクを完了させたいときは Work を勧めています。Work は複数ステップのタスクを計画し、アプリを閉じてもクラウドで作業を続け、重要な操作では承認を求めて一時停止します。",
      },
      {
        q: "ChatGPT Work は無料ですか？Plus が必要ですか？",
        a: "Free（$0）と Go（月 $8）では、デスクトップアプリでのみ制限付きで Work を使えます。Plus（月 $20）と Pro（月 $100 から）では、デスクトップ、Web、モバイルで使え、追加クレジットも購入できます。Business は年払いでユーザーあたり月 $20 で、Enterprise と Edu は営業経由です。",
      },
      {
        q: "ChatGPT Work と Codex の違いは？",
        a: "中核の機能、実行の仕組み、料金、クレジット、利用上限を共有しています。Codex は OpenAI のコーディングエージェントで、CLI、IDE 拡張機能、リポジトリ向けのクラウドタスクを備えます。Work は日常の仕事向けの体験で、Git やシェルの出力、プルリクエストのペインといった詳細は表示されません。",
      },
      {
        q: "ChatGPT Work を使うにはアプリのダウンロードが必要ですか？",
        a: "Plus と Pro では不要です。Work は Web と iOS・Android 版の ChatGPT でも動きます。Free と Go では、macOS、Windows、Linux で動く ChatGPT デスクトップアプリにしかありません。ローカルのファイル、ブラウザ拡張機能、Computer Use を使う場合も、デスクトップアプリが必要です。",
      },
      {
        q: "学生は ChatGPT Work を使えますか？",
        a: "Free と Go のプランでは、デスクトップアプリで制限付きの Work が使えます。ChatGPT Edu のワークスペースでは、ワークスペースで共有するクレジットで Work を使い、管理者が Work、プラグイン、ブラウザの利用を管理します。Edu の料金は OpenAI の営業チーム経由です。",
      },
    ],
  },
  cta: {
    title: "ドキュメントは Work に。コーディングエージェントにも仕事を。",
    text: "Crewmark は、Codex と Claude Code のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、OpenAI の ChatGPT Work と Codex のドキュメント、料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI、Anthropic、Microsoft とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
