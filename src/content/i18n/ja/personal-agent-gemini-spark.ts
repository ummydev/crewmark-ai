import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /personal-agent/gemini-spark; the English master is src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `毎月 3 日に、Gmail にあるクレジットカードの明細を確認して、
新しく増えたサブスクリプションや隠れた料金を一覧にして送って。

子どもの学校からのメールで締め切りを見張って、
毎晩 7 時に私とパートナーに 1 日分のまとめを送って。

今週のメールとチャットの会議メモを Google ドキュメントにまとめて、
フォローアップのメールを下書きして。送信はしないで。`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark（現在はタスク）：使い方、プラン、対応国",
    description:
      "Gemini Spark はどうなったのか。Google の 24 時間稼働のパーソナルエージェントは、現在 Gemini アプリの「タスク」になっています。利用できる人（Google AI Pro または Ultra、対応国）、有効にする方法、スケジュール、アプリ連携、上限、Mac アプリを解説します。",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Gemini Spark",
    title: "Gemini Spark は Gemini のタスクに：Google のパーソナルエージェントの使い方",
    lead: "Google は 2026年5月19日、Gemini Spark を「タスクを能動的に管理するために設計された、24 時間稼働のパーソナル AI エージェント」として発表しました。クラウドで動き、ノートパソコンを閉じてもスマートフォンをロックしても作業を続け、Gmail、ドキュメントなどの Google アプリを使います。ベータ版の Spark は現在、Gemini アプリで「タスク」と呼ばれており、Spark のボタンが消えたように見えるのはそのためです。このガイドでは、利用できる人、有効にする方法、スケジュール、アプリ連携、上限、得意なことを紹介します。",
    cta: "今すぐ始める",
    secondary: "有効にする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Gemini Spark はどうなった？",
      text: [
        "提供が終わったわけではありません。Google のヘルプ記事では、この機能は現在「タスク」と呼ばれ、「ベータ版では Spark と呼ばれていた」と書かれています。Gemini のテキストボックスの下にある「タスク」オプションから始められ、既存のタスクとスケジュールもそのまま残っています。",
      ],
      points: [
        "正体：クラウド上の Gemini で動くエージェントで、公開時は Gemini 3.5 と Google の Antigravity ハーネスの上に作られていました。",
        "できること：受信トレイの整理、航空券やホテルの価格の監視、出典付きの調査、買い物や予約のための Web 閲覧、PDF、ドキュメント、スプレッドシート、スライドの作成。",
        "動くタイミング：バックグラウンドで、スケジュールに沿って、または何かが起きたときに動き、お金を使う、メールを送るといった重要な操作の前には先に確認します。",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Gemini のタスク（Spark）を利用できる人",
      text: ["2026年11月10日時点の Google の Gemini アプリ ヘルプによります。"],
      headers: ["条件", "詳細"],
      rows: [
        ["プラン", "Google AI Pro または Ultra（米国では Google AI Pro が月額 $19.99）"],
        ["アカウント", "18 歳以上の個人の Google アカウント。職場や学校のアカウントはまだ非対応"],
        ["国", "Gemini アプリが使えるすべての地域。ただし欧州経済領域、スイス、英国、ナイジェリアを除く"],
        ["設定", "「アクティビティを保存」がオンである必要がある"],
        ["場所", "Gemini モバイルアプリ、Mac の Gemini アプリ、Web アプリの gemini.google.com"],
        ["無料プラン", "含まれない"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Gemini のタスクの使い方",
      steps: [
        {
          title: "タスクモードを有効にする",
          text: "gemini.google.com で、テキストボックスの下の「タスク」をクリックし、画面の手順に従います。タスクは Gemini モバイルアプリと Mac の Gemini アプリでも使えます。",
        },
        {
          title: "必要なアプリをつなぐ",
          text: "タスクでは、Gmail、カレンダー、ドキュメント、ドライブ、Keep、スプレッドシート、スライド、ToDo リスト、Google 検索、フライト、ホテル、マップ、連絡先、フォト、YouTube に加え、カスタムアプリやサードパーティのアプリも使えます。Google の公開時のパートナーには Canva、OpenTable、Instacart がありました。",
        },
        {
          title: "仕事の内容とタイミングを伝える",
          text: "1 回限りの仕事を頼むか、決まった時刻や何かが起きたときに動くスケジュールを設定します。タスクのスレッドと作業パネルを開くと、権限とスケジュールを確認できます。",
          code: prompts,
        },
        {
          title: "重要な手順を承認する",
          text: "Gemini は、タスクのために Web を閲覧する前（一度 Chrome に許可を与えたあと）、そしてメッセージの送信、購入、フォームの送信、Google でのサインインの前に確認します。「常に許可」を選んでいても、健康、金融、身分証明などの機密情報を共有する前には一時停止します。",
        },
      ],
      source: { label: "出典：Google の Gemini アプリ ヘルプ（タスク）", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "上限、スケジュール、オフにする方法",
      points: [
        "同時に実行できるタスクは最大 15 個です。すでに 15 個実行中のときは、スケジュールは実行されません。",
        "Google のヘルプによると、タスクモードがオフのときやデバイスの電源が切れているときは、スケジュールは実行されません。スケジュールの一時停止と再開は、タスクのスレッドか、Web アプリの「スケジュール済み」ページから行えます。",
        "利用上限は計算量にもとづき、Pro より Ultra のほうが多くなっています。",
        "Chrome の自動ブラウジングはデスクトップでのみ使えます。",
        "オフにするには、Web では設定 > タスクの設定（「タスクモードを使って仕事を任せる」）、Mac アプリでは Gemini > 設定 > タスクから。リモートブラウザとコードのデータは削除され、タスク、スケジュール、ファイルは残りますが一時停止されます。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Gemini のタスクの活用例",
      text: ["最初の 3 つは、Google 自身の公開時の例です。"],
      headers: ["活用例", "すること"],
      rows: [
        ["サブスクリプションのチェック", "毎月のカード明細から、新しいサブスクリプションや隠れた料金を探す"],
        ["学校のメールのまとめ", "締め切りを見張り、あなたとパートナーに 1 日分のまとめを送る"],
        ["会議のフォローアップ", "メールとチャットのメモをドキュメントにまとめ、フォローアップを下書きする"],
        ["受信トレイの整理", "ニュースレターをアーカイブし、メーリングリストの登録を解除する"],
        ["価格の見張り", "航空券とホテルの価格を監視し、下がったら知らせる"],
        ["調査レポート", "出典付きでテーマを調べ、ファイルにまとめる"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini のタスクと Meta Muse、Grok Bot の比較",
      headers: ["", "Gemini のタスク（Spark）", "Meta Muse", "Grok Bot"],
      rows: [
        ["提供元", "Google", "Meta", "xAI"],
        ["最も安い始め方", "Google AI Pro", "米国では無料、週ごとの上限あり", "無料の試用クレジット。X Premium 以上"],
        ["一番強いところ", "Gmail、ドキュメントと Google のアプリ", "日常の用事、WhatsApp", "仕事のアプリ、Bot のチーム"],
        ["スケジュール", "決まった時刻か、イベント発生時", "リマインダーと定期タスク", "スケジュールやトリガーで動くルーティン"],
        ["使えない地域", "EEA、スイス、英国、ナイジェリア", "米国外（限定テスト中）", "-"],
        ["ガイド", "このページ", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "受信トレイだけでなく、仕事のための予定エージェントを",
      text: [
        "Gemini のタスクは、1 人の Google アプリの面倒を見ます。Crewmark は、あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。社員は共有ボードから次の issue を取り、結果を報告します。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "SEO スペシャリストやソフトウェアエンジニアなど、[AI 社員の職種](/ai-employees)から始めましょう。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "選んだ時間帯に、15〜240 分ごとに起きて働きます。[Codex の予定タスク](/proactive-codex)もご覧ください。",
        },
        {
          title: "パーソナルエージェントを比較する",
          text: "[パーソナル AI エージェントの比較](/personal-agent)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini のタスクを使う" },
  mid: {
    title: "チームのバックログを片付けてくれるエージェントがほしいですか？",
    text: "Crewmark の社員は、今お使いの Claude Code や Codex のプランで、ハートビートで起きてボードから次の issue に取りかかります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Gemini Spark はどうなったのですか？",
        a: "Google が名前を変えました。ベータ版の Spark は現在、Gemini アプリで「タスク」と呼ばれています。テキストボックスの下の「タスク」を選んでください。既存のタスクとスケジュールは引き継がれます。",
      },
      {
        q: "Gemini Spark は無料ですか？",
        a: "いいえ。タスクには、個人の Google アカウントでの Google AI Pro か Ultra のサブスクリプションが必要です。米国では Google AI Pro が月額 $19.99 です。",
      },
      {
        q: "Gemini Spark は英国や欧州で使えますか？",
        a: "まだ使えません。Google のヘルプでは、Gemini アプリが使えるすべての地域が対象ですが、欧州経済領域、スイス、英国、ナイジェリアは除かれています。",
      },
      {
        q: "Gemini Spark の Mac アプリはありますか？",
        a: "はい。タスクは Mac の Gemini アプリでも、モバイルアプリや gemini.google.com と同じように使えます。",
      },
      {
        q: "Gemini のタスクをスケジュールで実行できますか？",
        a: "はい。決まった時刻か、何かが起きたときに実行できます。同時に実行できるのは最大 15 個で、タスクモードがオフの間はスケジュールが止まります。",
      },
      {
        q: "Gemini Spark と Meta Muse、どちらを使うべき？",
        a: "生活が Gmail と Google のアプリ中心で、Google AI Pro に課金しているなら Gemini のタスク。米国にいて、無料で始められるものがほしいなら Meta Muse です。",
      },
    ],
  },
  cta: {
    title: "受信トレイにはパーソナルエージェントを。バックログには AI 社員を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Google による Gemini Spark の発表と Gemini アプリ ヘルプで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Google、Meta、xAI とは提携しておらず、その承認も受けていません。Gemini と Google は Google の商標です。",
};
