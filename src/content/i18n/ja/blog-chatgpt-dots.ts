import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots とは？使い方・料金 | Crewmark",
    description:
      "ChatGPT dots は OpenAI の常時稼働エージェント。できること、対象プラン、設定方法、カスタムルール、制限、他サービスとの比較を解説します。",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "ブログ · ChatGPT",
    title: "ChatGPT dots とは？ できることと使い方",
    lead: "dots は ChatGPT の中で常時稼働するエージェントで、2026年9月29日の OpenAI DevDay で発表されました。dot はそれぞれ専用のクラウドコンピュータとブラウザを持ち、あなたのアプリとつながり、フィードバックから学び、あなたが不在のあいだも目標に向けて動き続けます。このガイドでは、誰が使えるのか、料金、設定方法、dot を制御するルール、そしてまだできないことを説明します。",
    cta: "早期アクセスに登録",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT dots とは",
      text: [
        "OpenAI は dots を「あらゆることをこなすために作られた、驚くほど有能で常時稼働するエージェント」と呼んでいます。dot は GPT-6 Astra で動き、専用のクラウドコンピュータ上で専用のブラウザを使い、あなたが接続したアプリを操作します。話しかける場所は、デスクトップ・Web・モバイルの ChatGPT、Slack と Teams、モバイルアプリの音声、そして Pro 向けの米国 beta ではテキストメッセージ（SMS）です。",
      ],
      points: [
        "あなたがいなくても働く：接続したアプリへの読み取り専用アクセスで手伝えることを探し、予定したリマインダーや定期チェックを実行します。",
        "複数のプロジェクトを同時に進め、進捗や質問、あなたの判断が必要な決定を報告してきます。",
        "記憶する：ChatGPT のメモリを引き継いだ状態で始まり、一緒に作業するうちにあなたの好みを覚えます。",
        "コードは委任して書く：dot は Codex のタスクを開始でき、それは Codex の利用上限にカウントされます。",
        "様子を見られる：いつでも dot のコンピュータを開いて操作を引き継ぎ、また dot に戻せます。",
      ],
    },
    {
      kind: "table",
      title: "dots を使える人と料金",
      text: [
        "下のプランには、最初の dot が追加料金なしで含まれています。リリース後の最初の1か月は、dots の利用がプランの利用枠にカウントされませんでした。OpenAI はその後のプランごとの利用条件を公開するとしていますが、確認時点では未公開でした。dot の追加購入や dot 1 つあたりの作業量の追加は発表済みですが、料金はまだ出ていません。",
      ],
      headers: ["プラン", "dots", "備考"],
      rows: [
        ["Free、Go、Plus、Business", "なし", "含まれない"],
        ["Pro（Pro 100、Pro 200、Pro 500）", "あり（順次提供中）", "EEA、スイス、英国は対象外"],
        ["Business Premium", "あり（順次提供中）", "対応地域のみ。ワークスペースの利用資格による"],
        ["Enterprise、Edu、Healthcare", "Beta", "ワークスペース管理者が有効にするまでオフ"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "最初の dot を設定する方法",
      text: ["18歳以上である必要があります。提供は段階的なので、アカウントで使えるようになるまで数日かかることがあります。"],
      steps: [
        {
          title: "dots を開く",
          text: "chatgpt.com/dots にアクセスするか、ChatGPT のデスクトップアプリ、デスクトップの Web 版、または iOS・Android のモバイルアプリで dots を開きます。",
        },
        {
          title: "dot を作成して名前を付ける",
          text: "オンボーディングに沿って名前を付けます。名前はハンドル（@あなたの名前-エージェント名）になります。アバターも選びます。どちらも後からプロフィールで変更できます。",
        },
        {
          title: "アプリを接続する",
          text: "dot のプロフィールで Customize、Plugins の順に開き、アプリを選んで求められる権限を確認します。Slack はデスクトップから接続します。dot はあなたが接続した個人のメールアカウントを使えますが、専用のメールアドレスはまだ持てません。",
        },
        {
          title: "カスタムルールを設定する",
          text: "Customize の Custom rules で、操作の種類ごとに、確認なしで実行する、プロンプトで事前に承認した場合だけ実行する、実行前に確認する、あなたに引き渡す、のいずれかを選びます。",
        },
        {
          title: "目標を伝える",
          text: "望む結果を説明し、背景情報を共有します。ファイルは + で添付し、スレッドで返信して方向を調整します。リマインダーや定期チェックを頼むこともでき、Scheduled で管理できます。",
        },
        {
          title: "進捗確認・一時停止・削除",
          text: "プロフィールには In progress、Scheduled、Completed の作業が表示されます。必要なら ••• メニューから dot を一時停止できます。削除するとメモリと予定タスクが消え、元に戻せません。",
        },
      ],
      source: { label: "出典：OpenAI による dots の発表", href: announcement },
    },
    {
      kind: "text",
      title: "安全性：dot が自分でやること、やらないこと",
      points: [
        "パスワードの変更や送金は、必ずあなたが操作を引き継いで自分で行う必要があります。",
        "データの完全削除やソフトウェアのインストールは、毎回あなたの承認が必要になる場合があります。",
        "Auto-review が、メールの宛先などリスクのある操作をあなたの指示とルールに照らしてチェックします。カスタムルールでこれをオフにすることはできません。",
        "dot は店舗サイトに保存されたカードで購入できますが、毎回のあなたの承認か、事前の具体的な承認が必要です。",
        "ChatGPT デスクトップアプリの Allow access で接続しない限り、あなた自身のコンピュータは切り離されたままです。初期設定ではオフです。",
        "OpenAI は、プロンプトインジェクション対策はリスクを減らすものの無くすものではなく、完了した操作の中には取り消せないものもあるとしています。",
      ],
    },
    {
      kind: "text",
      title: "dots がまだできないこと",
      points: [
        "使えるのはメインの dot 1 つだけです。複数の dot によるチームは今後の方向性とされています。",
        "dot は専用のメールアドレスを持たず、あなたに電話をかけることもできず、モバイル Web では動きません。",
        "起動するための webhook やイベントトリガーはありません。あなたのメッセージ、スケジュール、dot 自身の読み取り専用の調査をもとに動きます。",
        "個々のメモリを表示・編集・削除することはできません。学習した内容を消すには dot を削除するしかありません。",
        "Plus ユーザーは dots を使えません。EEA、スイス、英国の Pro ユーザーも同様です。",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI は2026年8月に、専用のコンピュータを持つ「常時稼働エージェントのチーム」として Grok Bot を発表しました。Crewmark は別のアプローチを取ります。誰かのクラウド上に新しいエージェントを作るのではなく、すでに使っているコーディングエージェントを、あなた自身のマシン上で働く社員に変えます。",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["動作場所", "OpenAI のクラウドコンピュータ", "専用のコンピュータ（xAI による）", "あなたのコンピュータ（Claude Code または Codex 内）"],
        ["モデル", "GPT-6 Astra", "Grok", "Claude Code または Codex で使っているモデル"],
        ["数", "メインの dot 1 つ", "複数。互いにメッセージを送り合える", "職種ごとに 1 人。必要なだけ設定可能"],
        ["仕事の始まり方", "あなたのメッセージ、スケジュール、自身の調査", "あなたの作業を見てルーティンを学ぶ", "勤務時間中、15〜60分ごとのハートビート"],
        ["作業キュー", "会話スレッドと Scheduled", "公開情報なし", "カンバンボード上の issue"],
        ["目標", "あなたが説明する目標", "公開情報なし", "数値の KPI（例：月間クリック数 +10%）"],
        ["プラン", "Pro、Business Premium、Enterprise beta", "SuperGrok と Cursor のプラン（beta）", "早期アクセス。契約中の Claude または ChatGPT のプランで動作"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code や Codex を契約済みなら、常時稼働にしよう",
      text: [
        "常時稼働させたい仕事がコードベースや Web サイトにあるなら、新しいエージェントは要りません。Crewmark は、すでに使っている Claude Code や Codex のセッションに職種・目標・勤務時間を与え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "SEO スペシャリストやソフトウェアエンジニアなどの職種を選び、目標を数値で書き、Claude Code または Codex でセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで働き続けさせる",
          text: "勤務時間中、社員は 15、30、60 分ごとに同じ会話の中で起きるので、何をしたかを覚えています。[Claude Code を自律的に動かす方法](/proactive-claude-code)も参照してください。",
        },
        {
          title: "issue を割り当て、メッセージに答える",
          text: "ボードに仕事を置くと、社員がそれを拾い、進めながらコメントし、行き詰まったらメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "最初の ChatGPT dot を設定する" },
  mid: {
    title: "コードベース向けの常時稼働エージェントが欲しいですか？",
    text: "Crewmark は、契約中のプランのまま、Claude Code や Codex のセッションをハートビートで働かせ続けます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "ChatGPT dots のよくある質問",
    items: [
      {
        q: "ChatGPT dots とは何ですか？",
        a: "ChatGPT の中で常時稼働するエージェントで、2026年9月29日に発表されました。dot はそれぞれ GPT-6 Astra で動き、専用のクラウドコンピュータとブラウザを持ち、あなたのアプリとつながり、フィードバックから学び、目標に向けて動き続けます。",
      },
      {
        q: "ChatGPT dots の料金はいくらですか？",
        a: "Pro と Business Premium には、最初の dot が追加料金なしで含まれています。OpenAI は dot の追加や dot 1 つあたりの作業量の追加を販売する予定ですが、料金も、リリース月以降の利用条件もまだ公開していません。",
      },
      {
        q: "ChatGPT Plus で dots は使えますか？",
        a: "使えません。Free、Go、Plus、通常の Business プランには dots は含まれません。Pro と Business Premium には順次提供中で、Enterprise、Edu、Healthcare では beta です。",
      },
      {
        q: "ChatGPT dot はどう使いますか？",
        a: "chatgpt.com/dots を開き、dot を作成して名前を付け、Customize でアプリを接続し、確認なしでやってよいことをカスタムルールで決めてから、目標を伝えます。作業はプロフィールの In progress、Scheduled、Completed で確認できます。",
      },
      {
        q: "ChatGPT dots と Grok Bot の違いは？",
        a: "どちらも専用のコンピュータを持つ常時稼働エージェントです。dot は GPT-6 Astra で動き、リリース時点で使えるのは 1 つです。xAI の Grok Bot は互いにメッセージを送り合えるエージェントのチームで、SuperGrok と一部の Cursor プラン向けの beta です。",
      },
      {
        q: "ChatGPT dots はコードを書けますか？",
        a: "はい、Codex に委任して書きます。dot は Codex のクラウドタスクを開始でき、コンピュータを接続していればローカルの Codex タスクも開始できます。どちらも Codex の利用上限にカウントされます。",
      },
    ],
  },
  cta: {
    title: "いま使っているエージェントを常時稼働に。",
    text: "Crewmark は、Claude Code や Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月2日に OpenAI の発表、ヘルプセンター、リリースノート、料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI、xAI、Anthropic とは提携しておらず、その承認も受けていません。ChatGPT は OpenAI の、Grok は xAI の、Claude Code は Anthropic の商標です。",
};
